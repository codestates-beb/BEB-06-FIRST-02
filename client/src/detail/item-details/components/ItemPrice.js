import { useState } from "react";
import ethreumSymbol from "../../../assets/weth.png";
import ConnectMetamask from "./ConnetMetamask";
import axios from "axios";

const ItemPrice = ({ info, transfer }) => {
  const [sell, setSell] = useState(false);

  const handleCartButton = async () => {
    await ConnectMetamask();
  };

  const handleBuyButton = () => {
    ConnectMetamask();
    transfer();
  };

  const handleSellButton = async () => {
    ConnectMetamask();
    setSell(true);

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
            <button onClick={handleBuyButton}>Buy</button>
            <button
              onClick={handleSellButton}
              disabled={sell}
              style={{ backgroundColor: "gray" }}
            >
              Sell
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleBuyButton}
              disabled={!sell}
              style={{ backgroundColor: "gray" }}
            >
              Buy
            </button>
            <button onClick={handleSellButton}>Sell</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPrice;
