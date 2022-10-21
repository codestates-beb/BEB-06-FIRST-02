import { useRecoilValue } from "recoil";
import { likeIs } from "./ItemArticleHeader";

const ItemHeader = () => {
  const asd = useRecoilValue(likeIs);
  return (
    <div className="item-main__header">
      <div className="section-padding">
        <span>Creator</span>
      </div>
      <div className="section-padding">
        <span>#minting number</span>
      </div>
      <div className="section-padding">
        <div>
          <span>Owned by {}</span>
        </div>
        <div>
          <span className="prop-likecounter">
            <i class="fa-solid fa-heart fa-xl"></i>
            <span>{asd}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
