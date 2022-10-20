import ItemPropertise from "../components/ItemProperties";
import ItemAbout from "../components/ItemAbout";
import ItemDetails from "../components/ItemDetails";

const ItemSection = () => {
  return (
    <div className="item-section main-border">
      <div className="item-section__description section-padding">
        <i class="fa-solid fa-align-left"></i>
        <span>Description</span>
      </div>
      <div className="item-section__creator">
        <span>BY</span>
        <a href="#">
          <div className="item-section__creator-creator">Creator</div>
        </a>
      </div>
      <ItemPropertise />
      <ItemAbout />
      <ItemDetails />
    </div>
  );
};

export default ItemSection;
