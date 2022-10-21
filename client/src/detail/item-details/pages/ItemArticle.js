import ItemArticleHeader from "./ItemArticleHeader";
import dummyNFT from "../../image/dummy-nft.png";

const ItemArticle = () => {
  return (
    <div className="item-article main-border">
      <ItemArticleHeader />
      <img alt="dummy" src={dummyNFT} />
    </div>
  );
};

export default ItemArticle;
