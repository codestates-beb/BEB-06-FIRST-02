import ItemSection from "./ItemSection";
import ItemArticle from "./ItemArticle";
import "./summary.css";

const ItemSummary = () => {
  return (
    <div className="item-summary">
      <ItemArticle />
      <ItemSection />
    </div>
  );
};

export default ItemSummary;
