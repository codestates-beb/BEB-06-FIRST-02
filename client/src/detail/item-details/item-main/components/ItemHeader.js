const ItemHeader = () => {
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
        <div>likeCount</div>
      </div>
    </div>
  );
};

export default ItemHeader;
