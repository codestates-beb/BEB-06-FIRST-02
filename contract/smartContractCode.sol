// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Project1 is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    constructor() ERC721("Project1", "PJ1") {}
    Counters.Counter private _tokenIdCounter;

    address public DealAddress;
    // function safeMint(address to, string memory uri) public onlyOwner {
    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function initDealAddress(address _address) external onlyOwner {
        DealAddress = _address;
    }

    // payable 이용하장
    function listing(uint256 _id,uint256 _price) external returns(bool result) {
        approve(DealAddress,_id);
        (result,) = DealAddress.call(abi.encodeWithSignature("saveListing(address,uint256,uint256)", msg.sender, _id,_price));
    }
}

contract Deal is Ownable {

    error NotContract();
    error NotEnoughPrice();
    error NoListing();
    error DealError();

    struct ListingData {
        address owner;
        uint256 price;
    }

    mapping(address => mapping(uint256 => ListingData)) public listing;
    address public erc721Contract;

    function initErc721Contract(address _address) public onlyOwner {
        erc721Contract = _address;
    }

    function saveListing(address _owner,uint256 _id,uint256 _price) public {
        if(msg.sender != erc721Contract) {
            revert NotContract();
        }

        ListingData storage data = listing[_owner][_id];
        data.owner = _owner;
        data.price = _price;
    }

    function deal(address _from,address _to,uint256 _tokenId) payable external returns(bool) {
        if(listing[_from][_tokenId].owner == address(0)) {
            revert NoListing();
        }

        if(msg.value != listing[_from][_tokenId].price) {
            revert NotEnoughPrice();
        }

        (bool _result,) = erc721Contract.call(abi.encodeWithSignature("safeTransferFrom(address,address,uint256)", _from,_to,_tokenId));

        if(_result) {
            (bool _success,) = payable(_from).call{value:msg.value}("");
            return _success;
        } else {
            revert DealError();
        }

    }

}