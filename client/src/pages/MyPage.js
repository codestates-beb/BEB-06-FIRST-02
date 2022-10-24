import React from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import NFTList from "../components/NFTList";
import "../App.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function MyPage(props) {
  //console.log(props.account)
  //console.log(props.list)
  var nftlist = props.list;
  console.log(nftlist);

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={
                      nftlist.length != 0
                        ? nftlist[1].creator.profile_img_url
                        : null
                    }
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{props.account}</MDBTypography>
                  <MDBCardText>계정 주소</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {nftlist.length}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      nft 보유 개수
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      nft contract address
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      nft creator
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">NFT</MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  {nftlist.map((el) => {
                    return (
                      <MDBCol key={el.id} className="mb-2">
                        <MDBCardImage
                          src={el.image_url}
                          alt="image 1"
                          className="w-100 rounded-3"
                        />
                      </MDBCol>
                    );
                  })}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

// <center>
// <div className="table">
//     <div className="row">
//         <div className="col">컨트랙트 주소</div>
//         <div className="col">image</div>
//         <div className="col">토큰 id</div>
//         <div className="col">creator</div>

//     </div>
// </div>
// </center>
