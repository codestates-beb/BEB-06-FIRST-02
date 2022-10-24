const fs = require("fs");

const DB = require("../DB/nftList.json")

const _data = {
    "name": "",
    "token_id": "",
    "traits": "",
    "image": "",
    "theme": "",
    "writer": "",
    "price": ""
}

// price/writer/theme

/* 
    Sell 하면 NFT 판매 데이터 req로 받고 DB(nftList.json)맨 앞에 데이터 추가
*/
module.exports = {
    // http://localhost:3001/opesea/listing
    listing : (req, res) => {

    // req

    fs.readFile('./DB/nftList.json','utf8',(err,data) => {
        if(err) throw err;
        let obj = JSON.parse(data)
        obj.unshift(_data)
        let json = JSON.stringify(obj,null,4);
        fs.writeFile('./DB/nftList.json',json,'utf8',(err,result) => {
            if (err) throw err;
        })
    });

    res.send("testtest")
    },
    // http://localhost:3001/opesea/getData
    getData : (req, res) => {
        fs.readFile('./DB/nftList.json','utf8',(err,data) => {
            if(err) throw err;
            let obj = JSON.parse(data)

            console.log(obj[0],obj[1]);

            res.send("testtest")
        });
    }
  };
  