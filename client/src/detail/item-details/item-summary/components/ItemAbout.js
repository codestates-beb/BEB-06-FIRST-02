import { useState } from "react";

const ItemAbout = () => {
  const [aboutToggle, setAboutToggle] = useState(false);

  const handleAbountToggle = () => {
    if (aboutToggle) {
      setAboutToggle(false);
    } else {
      setAboutToggle(true);
    }
  };
  return (
    <div className="item-about section-padding">
      <div className="item-about__container">
        <button onClick={handleAbountToggle}>
          <div>
            <i class="fa-solid fa-file-signature"></i>
            <span>About Creator</span>
          </div>
          {aboutToggle ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </button>
        {aboutToggle ? (
          <div className="item-about__description">
            <span>
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership
              card, and grants access to members-only benefits, the first of
              which is access to THE BATHROOM, a collaborative graffiti board.
              Future areas and perks can be unlocked by the community through
              roadmap activation. Visit www.BoredApeYachtClub.com for more
              details.
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ItemAbout;
