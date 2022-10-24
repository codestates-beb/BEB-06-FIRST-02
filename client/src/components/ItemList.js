// NFT 모아서 출력

import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import Pagination from "react-js-pagination";
// import '../asset/ItemList.css'
import "../asset/ItemList.css"; // 테스트 css
import "../asset/Pagination.css";
import "./dummy";
import { Link } from "react-router-dom";

const ItemList = ({ getItem, selectTheme }) => {
  const getThemeItem = getItem.punkListData.punkListData; // 전체 아이템
  const TaemeItemFilter = getThemeItem.filter((el) => el.theme == selectTheme); // select한 테마를 가지고 필터 적용
  let totalItemCount =
    selectTheme === "All" ? getThemeItem.length : TaemeItemFilter.length; // 전체 아이템 갯수
  const [page, setPage] = useState(1); // 현제 페이지
  const [itemCount, setItemCount] = useState(10); // 디폴트 한페이지당 10개로 정해짐
  const offset = (page - 1) * itemCount; // 10 -1 * 10

  const handlePageChange = (page) => {
    setPage(page);
    //console.log(punkListData)
  };

  return (
    <div className="itemList">
      <div className="item-component__header">
        <span>TITLE</span>
        <span>ID</span>
        <span>WRITER</span>
        <span>PRICE</span>
        <span>TITLE</span>
        <span>ID</span>
        <span>WRITER</span>
        <span>PRICE</span>
      </div>
      <div className="itemListItem">
        {
          // 선택한 테마가 all일 경우 전체아이템 출력 아닐시 선택한 아이템으로 필터 적용 후 출력
          selectTheme === "All"
            ? getThemeItem.slice(offset, offset + itemCount).map((punk) => (
                <Link to={`/detail/${punk.token_id}`} state={{ details: punk }}>
                  <div>
                    <Item
                      key={punk.token_id}
                      id={punk.token_id}
                      name={punk.name}
                      writer={punk.writer}
                      price={punk.price}
                      //traits={punk[].traits}
                      image={punk.image}
                    />
                  </div>
                </Link>
              ))
            : TaemeItemFilter.slice(offset, offset + itemCount).map((punk) => (
                <Link to={`/detail/${punk.token_id}`} state={{ details: punk }}>
                  <div>
                    <Item
                      key={punk.token_id}
                      id={punk.token_id}
                      name={punk.name}
                      writer={punk.writer}
                      price={punk.price}
                      //traits={punk[].traits}
                      image={punk.image}
                    />
                  </div>
                </Link>
              ))
        }
      </div>
      {/* 페이지네이션  */}
      <div className="page">
        <Pagination
          activePage={page}
          // 현재 페이지
          itemsCountPerPage={itemCount}
          // 한 페이지랑 보여줄 아이템 갯수 (10)
          totalItemsCount={totalItemCount}
          // 총 아이템 갯수 // totalItemCount
          pageRangeDisplayed={10}
          // paginator의 페이지 범위
          prevPageText={"‹"}
          // "이전"을 나타낼 텍스트
          nextPageText={"›"}
          // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  );
};

export default ItemList;
