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
    <div className="item-properties section-padding">
      <div>
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
        {propertyToggle ? (
          <div>
            <div>
              <div></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ItemPropertise;
