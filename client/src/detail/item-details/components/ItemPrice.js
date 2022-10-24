import { useState } from "react";
import ethreumSymbol from "../../../assets/weth.png";
import ConnectMetamask from "./ConnetMetamask";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 3794a33a59b0e43d27fc9773b72c0bb33275364f

const ItemPrice = ({ info }) => {
  const [login, setLogin] = useState(false);

  const handleCartButton = async () => {
    await ConnectMetamask();
    setLogin(true);
  };

  const handleBuyButton = () => {
    ConnectMetamask();
  };

<<<<<<< HEAD
=======
  const handleSellButton = async () => {
    ConnectMetamask();

    const _data = {
      name: `${info.name}`,
      token_id: `${info.token_id}`,
      traits: `${info.traits}`,
      image: `${info.image}`,
      theme: `${info.theme}`,
      writer: `${info.writer}`,
      price: `${info.price}`,
    };

    let a = await axios.post("http://localhost:3001/opesea/listing", {
      data: _data,
    });

    console.log(a);
  };
>>>>>>> 3794a33a59b0e43d27fc9773b72c0bb33275364f

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
<<<<<<< HEAD
        <button onClick={handleBuyButton} >Buy</button>
=======
        <button onClick={handleBuyButton}>Buy</button>
        <button onClick={handleSellButton}>Sell</button>
>>>>>>> 3794a33a59b0e43d27fc9773b72c0bb33275364f
      </div>
    </div>
  );
};

export default ItemPrice;
