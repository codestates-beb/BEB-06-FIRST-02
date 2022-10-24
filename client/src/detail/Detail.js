import "./Detail.css";
import ItemSummary from "./item-details/pages/ItemSummary";
import ItemMain from "./item-details/pages/ItemMain";
import { useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";

function Detail(props) {
  const location = useLocation();
  const details = location.state.details;

  return (
    <div id="Detail">
      <RecoilRoot>
        <ItemSummary info={details} />
        <ItemMain info={details} />
      </RecoilRoot>
    </div>
  );
}

export default Detail;
