import { useState } from "react";
import ethreumSymbol from "../../image/ethereum_symbol.png";
import ConnectMetamask from "./ConnetMetamask";
import axios from "axios"

const ItemPrice = (props) => {
  const [login, setLogin] = useState(false);

  const handleCartButton = async () => {
    await ConnectMetamask();
    setLogin(true);
  };

  const handleBuyButton = () => {
    ConnectMetamask();
  };

  const handleSellButton = async () => {
    ConnectMetamask();
    
  const _data = {
    "name": "name1",
    "token_id": 1,
    "traits": "aaa",
    "image": "bbb",
    "theme": "ccc",
    "writer": "ddd",
    "price": "eee"
  }

  let a = await axios.post('http://localhost:3001/opesea/listing',{data:_data});

  console.log(a);
  };

  return (
    <div className="item-price main-border">
      <div>
        <span>Current price</span>
      </div>
      <div className="item-price__price">
        <img src={ethreumSymbol} />
        <span>50</span>
        <span>1,866,344.42KRW</span>
      </div>
      <div className="item-price-button">
        <button onClick={handleCartButton}>Add to cart</button>
        <button onClick={handleBuyButton} >Buy</button>
        <button onClick={handleSellButton} >Sell</button>
      </div>
    </div>
  );
};

export default ItemPrice;
