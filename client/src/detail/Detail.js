import "./Detail.css";
import ItemSummary from "./item-details/item-summary/pages/ItemSummary";
import ItemMain from "./item-details/item-main/pages/ItemMain";

function Detail() {
  return (
    <div id="Detail">
      <ItemSummary />
      <ItemMain />
    </div>
  );
}

export default Detail;
