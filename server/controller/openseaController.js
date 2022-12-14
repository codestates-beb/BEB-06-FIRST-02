const fs = require("fs");

const DB = require("../DB/nftList.json");

// price/writer/theme

/* 
    Sell 하면 NFT 판매 데이터 req로 받고 DB(nftList.json)맨 앞에 데이터 추가
*/
module.exports = {
  // await axios.post('http://localhost:3001/opesea/listing', {data},{headers});
  listing: (req, res) => {
    // req
    const { name, token_id, traits, image, theme, writer, price } =
      req.body.data;

    const _data = {
      name: name,
      token_id: token_id,
      traits: traits,
      image: image,
      theme: theme,
      writer: writer,
      price: price,
      check:true
    };

    fs.readFile("./DB/nftList.json", "utf8", (err, data) => {
      if (err) throw err;
      let obj = JSON.parse(data);
      obj.unshift(_data);
      let json = JSON.stringify(obj, null, 4);
      fs.writeFile("./DB/nftList.json", json, "utf8", (err, result) => {
        if (err) throw err;
      });
    });

    res.send("testtest");
  },
  buying: (req, res) => {
    // req
    const { name, price } =
      req.body.data;

    fs.readFile("./DB/nftList.json", "utf8", (err, data) => {
      if (err) throw err;
      let obj = JSON.parse(data);

      const _obj = obj.filter((e) => e.name !== name && e.price !==price);

      let json = JSON.stringify(_obj, null, 4);
      fs.writeFile("./DB/nftList.json", json, "utf8", (err, result) => {
        if (err) throw err;
      });
    });

    res.send("success");
  },
  // http://localhost:3001/opesea/getData
  getData: (req, res) => {
    fs.readFile("./DB/nftList.json", "utf8", (err, data) => {
      if (err) throw err;
      let obj = JSON.parse(data);
      // res.send("testtest")
      res.send(data);
    });
  },
};
