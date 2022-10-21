import ItemHeader from "./ItemHeader";
import ItemPrice from "../components/ItemPrice";
import ItemOffers from "../components/ItemOffers";

import "./itemmain.css";

const ItemMain = () => {
  return (
    <div className="item-main">
      <ItemHeader />
      <ItemPrice />
      <ItemOffers />
    </div>
  );
};

export default ItemMain;
