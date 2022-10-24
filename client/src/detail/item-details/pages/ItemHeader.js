import { useRecoilValue } from "recoil";
import { likeIs } from "./ItemArticleHeader";

const ItemHeader = ({ info }) => {
  const likeCount = useRecoilValue(likeIs);
  return (
    <div className="item-main__header">
      <div className="section-padding mintter">
        <span>{info.writer}</span>
      </div>
      <div className="section-padding mint-number">
        <span>{`# ${info.token_id}`}</span>
      </div>
      <div className="section-padding">
        <div className="owned-description">
          <span>Owned by </span>
          <span>{info.name}</span>
        </div>
        <div>
          <span className="prop-likecounter">
            <i class="fa-solid fa-heart fa-xl"></i>
            <span>{likeCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
