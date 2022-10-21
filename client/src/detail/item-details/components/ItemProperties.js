import { useState } from "react";

const ItemPropertise = () => {
  const [propertyToggle, setPropertyToggle] = useState(false);

  const handlePropertyToggle = () => {
    if (propertyToggle) {
      setPropertyToggle(false);
    } else {
      setPropertyToggle(true);
    }
  };

  return (
    <div className="item-properties">
      <div className="section-padding">
        <button
          onClick={handlePropertyToggle}
          className="item-properties__button"
        >
          <div>
            <i class="fa-solid fa-tag"></i>
            <span>Properties</span>
          </div>
          {propertyToggle ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      {propertyToggle ? (
        <div className="properties-property">
          <div className="properties-entity">
            <span>metadata</span>
            <span>metadata value</span>
            <span>metadata Probability</span>
          </div>
          <div className="properties-entity">
            <span>metadata</span>
            <span>metadata value</span>
            <span>metadata Probability</span>
          </div>
          <div className="properties-entity">
            <div>metadata</div>
            <div>metadata value</div>
            <div>metadata Probability</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ItemPropertise;
