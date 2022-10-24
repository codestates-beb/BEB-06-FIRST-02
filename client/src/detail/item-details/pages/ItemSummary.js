import ItemSection from "./ItemSection";
import ItemArticle from "./ItemArticle";
import "./summary.css";

const ItemSummary = ({ info }) => {
  return (
    <div className="item-summary">
      <ItemArticle info={info} />
      <ItemSection info={info} />
    </div>
  );
};

export default ItemSummary;
