const fs = require("fs");

const DB = require("../DB/nftList.json")

const _data = {
    price : "0 ETH",
    token_id: "",
    name: "",
    traits: "",
    image: "",
    theme: ""
}
/* 
    Buy 하면 NFT 판매 데이터 req로 받고 DB(nftList.json)맨 앞에 데이터 추가
*/
// http://localhost:3001/opesea/listing
module.exports = {
    listing : (req, res) => {
    fs.readFile('./DB/nftList.json','utf8',(err,data) => {
        if(err) throw err;
        let obj = JSON.parse(data)
        obj.unshift(_data)
        let json = JSON.stringify(obj);
        fs.writeFile('./DB/nftList.json',json,'utf8',(err,result) => {
            if (err) throw err;
        })
    });

    res.send("testtest")
    }
  };
  