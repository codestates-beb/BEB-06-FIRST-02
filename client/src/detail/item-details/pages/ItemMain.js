import ItemHeader from "./ItemHeader";
import ItemPrice from "../components/ItemPrice";
import ItemOffers from "../components/ItemOffers";

import "./itemmain.css";

const ItemMain = ({ info, transfer }) => {
  return (
    <div className="item-main">
      <ItemHeader info={info} />
      <ItemPrice info={info} transfer={transfer} />
      <ItemOffers />
    </div>
  );
};

export default ItemMain;
