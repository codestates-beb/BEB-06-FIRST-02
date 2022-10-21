import "./Detail.css";
import ItemSummary from "./item-details/pages/ItemSummary";
import ItemMain from "./item-details/pages/ItemMain";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function Detail() {
  return (
    <div id="Detail">
      <RecoilRoot>
        <ItemSummary />
        <ItemMain />
      </RecoilRoot>
    </div>
  );
}

export default Detail;
