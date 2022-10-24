import ItemArticleHeader from "./ItemArticleHeader";

const ItemArticle = ({ info }) => {
  return (
    <div className="item-article main-border">
      <ItemArticleHeader />
      <img alt="dummy" src={info.image} />
    </div>
  );
};

export default ItemArticle;
