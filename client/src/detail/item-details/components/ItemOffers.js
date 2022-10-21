import { useState } from "react";
import ethreumSymbol from "../../image/ethereum_symbol.png";

const ItemOffers = () => {
  const [offerToggle, setOfferToggle] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([
    {
      id: new Date(),
      price: 10,
      from: "kim",
      to: "lee",
    },
  ]);

  const handleOfferToggle = () => {
    if (offerToggle) {
      setOfferToggle(false);
    } else {
      setOfferToggle(true);
    }
  };

  return (
    <div className="item-offers main-border">
      <button onClick={handleOfferToggle}>
        <div>
          <i class="fa-solid fa-rectangle-list"></i>
          <span>Offers</span>
        </div>
        {offerToggle ? (
          <i class="fa-solid fa-angle-up"></i>
        ) : (
          <i class="fa-solid fa-angle-down"></i>
        )}
      </button>
      {offerToggle ? (
        <div className="item-offer__history">
          <div className="item-offer__history-bar">
            <div>
              <span>price</span>
            </div>
            <div>
              <span>from</span>
            </div>
            <div>
              <span>to</span>
            </div>
          </div>
          <div className="item-offer__history-container">
            {transactionHistory.length === 0 ? (
              <span>No offers yet</span>
            ) : (
              transactionHistory.map((history) => {
                return (
                  <div key={history.id} className="item-offer__history-details">
                    <div className="item-offer__history-details-price">
                      <img src={ethreumSymbol} />

                      <span>{history.price}</span>
                    </div>
                    <span>{history.from}</span>
                    <span>{history.to}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ItemOffers;
