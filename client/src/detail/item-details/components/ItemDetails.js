import { useState } from "react";

const ItemDetails = () => {
  const [detailToggle, setDetailToggle] = useState(false);
  const handleDetailToggle = () => {
    if (detailToggle) {
      setDetailToggle(false);
    } else {
      setDetailToggle(true);
    }
  };
  return (
    <div className="item-detail section-padding">
      <div className="item-detail__container">
        <button onClick={handleDetailToggle}>
          <div>
            <i class="fa-solid fa-table"></i>
            <span>Details</span>
          </div>
          {detailToggle ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </button>
        {detailToggle ? (
          <div className="item-detail__description">
            <div className="item-detail__description-menu">
              <span>Contract Address</span>
              <span></span>
            </div>
            <div className="item-detail__description-menu">
              <span>Token Standard</span>
              <span></span>
            </div>
            <div className="item-detail__description-menu">
              <span>Blockchain</span>
              <span></span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetails;
