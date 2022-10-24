import React from "react";
import {useState, useEffect} from 'react';
import Web3 from 'web3';

import ThemeList from '../components/ThemeList'

import '../asset/MainPage.css'
import dummy from '../components/dummy'; // 임시로 받아오는 더미데이터
// import Page from '../components/Page';

export default function MainPage() {    
    const [punkListData, setpunkListData] = useState(dummy); //데이터를 더미서 받아옴
    // console.log(punkListData)
    return (
        <div className="mainpage">
            <ThemeList punkListData={punkListData}/>
        </div>
    );
}