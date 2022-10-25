import { useEffect, useState } from "react";
import ethreumSymbol from "../../../assets/weth.png";
import ConnectMetamask from "./ConnetMetamask";
import ERC721ABI from "../../../ABI/ERC721ABI.json";
import DEALABI from "../../../ABI/DealABI.json";
import Web3 from "web3";
import axios from "axios";

const ItemPrice = ({ info, transfer }) => {
  const [sell, setSell] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [nftOwner, setNftOwner] = useState("");
  const [price, SetPrice] = useState();

  const [contractAddress, setContractAddress] = useState(
    "0x725A51b60f417ef48B7aC45B47dab4eA111313c5"
  );
  const [dealContractAddress, setDealContractAddress] = useState(
    "0xE27777A6D3627a587167E55f6C17B8B7fc39674A"
  );

  useEffect(() => {
    if (info.check) {
      setSell(true);

      const checkNFT = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        const contract = new web3.eth.Contract(ERC721ABI, contractAddress);
        const result = await contract.methods.ownerOf(info.token_id).call();
        setNftOwner(result);

        if (accounts[0] == result) {
          setIsOwner(true);
        }
      };

      checkNFT();
    }
  }, []);

  const handleChange = (e) => {
    SetPrice(e.target.value);
  };

  const handleCartButton = async () => {
    await ConnectMetamask();
  };

  const handleBuyButton = async() => {
    try {
      // const web3 = new Web3(window.ethereum);
      // const accounts = await web3.eth.getAccounts();
      // const currentBalance = await web3.eth.getBalance(accounts[0])
      // if(currentBalance < web3.utils.toWei(info.price, "ether")) {
      //   alert('NFT를 구매할 ETH가 부족합니다.')
      //   return;
      // }

      // const contract = new web3.eth.Contract(DEALABI, dealContractAddress);
  
      // await contract.methods.deal(nftOwner, accounts[0], info.token_id).send({
      //   from: accounts[0],
      //   gas: 200000,
      //   gasPrice: web3.utils.toWei("1.5", "gwei"),
      //   value:web3.utils.toWei(info.price, "ether")
      // });

      const _data = {
        name: `${info.name}`,
        price: `${info.price}`,
      };

      await axios.post("http://localhost:3001/opesea/buying", {
        data: _data,
      });


      alert("NFT 구매 완료!")
    } catch (error) {
      console.log(error);
    }
  };

  const handleSellButton = async () => {
    if (!price) {
      alert("가격을 입력해주세요");
      return;
    }
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      const contract = new web3.eth.Contract(ERC721ABI, contractAddress);

      await contract.methods
        .listing(info.token_id, web3.utils.toWei(price, "ether"))
        .send({
          from: accounts[0],
          gas: 200000,
          gasPrice: web3.utils.toWei("1.5", "gwei"),
        });

      const _data = {
        name: `${info.name}`,
        token_id: `${info.token_id}`,
        traits: `101`,
        image: `${info.image}`,
        theme: `art`,
        writer: `${info.name}`,
        price: `${price}`,
      };

      await axios.post("http://localhost:3001/opesea/listing", {
        data: _data,
      });

      alert("Success NFT Listing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="item-price main-border">
      <div>
        <span>Current price</span>
      </div>
      <div className="item-price__price">
        <img src={ethreumSymbol} />
        <span>{info.price}</span>
      </div>
      <div className="item-price-button">
        <button onClick={handleCartButton}>Add to cart</button>
        {sell ? (
          <>
            {isOwner ? (
              <>
                <button onClick={handleSellButton}>Sell</button>
              </>
            ) : (
              <>
                <button onClick={handleBuyButton}>Buy</button>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        {isOwner ? (
          <>
            {" "}
            <div>Sell Price : </div>
            <input onChange={(e) => handleChange(e)}></input> ETH
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemPrice;

{
  /* <button onClick={handleBuyButton}>Buy</button>
<button
  onClick={handleSellButton}
  disabled={sell}
  style={{ backgroundColor: "gray" }}
>
  Sell
</button> */
}
