import ItemHeader from "./ItemHeader";
import ItemPrice from "../components/ItemPrice";
import ItemOffers from "../components/ItemOffers";

import "./itemmain.css";

const ItemMain = ({ info }) => {
  return (
    <div className="item-main">
      <ItemHeader info={info} />
      <ItemPrice info={info} />
      <ItemOffers />
    </div>
  );
};

export default ItemMain;
