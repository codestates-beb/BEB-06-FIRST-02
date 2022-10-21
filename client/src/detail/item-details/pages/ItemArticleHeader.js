import { useState } from "react";
import { atom, useRecoilState } from "recoil";

export const likeIs = atom({
  key: "please",
  default: 0,
});
const ItemArticleHeader = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useRecoilState(likeIs);

  const handleLike = () => {
    if (like) {
      setLikeCount(likeCount - 1);
      setLike(false);
    } else {
      setLikeCount(likeCount + 1);
      setLike(true);
    }
  };

  return (
    <div className="item-article__header">
      <div></div>
      <div>
        <div className="item-article__header-like">
          <span>{likeCount}</span>
          <button onClick={handleLike}>
            {like ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="far fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemArticleHeader;
