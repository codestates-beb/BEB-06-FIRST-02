import React from "react";
import {useState, useEffect} from 'react';
import Web3 from 'web3';
import PunkList from '../components/PunkList';
import Tab from '../components/Tab'
import dummy from '../components/dummy'; // 임시로 받아오는 더미데이터



export default function MainPage() {    
    const [punkListData, setpunkListData] = useState(dummy);
    return (
        <div>
            <Tab/>
            <PunkList punkListData={punkListData}/>
            
        </div>
    );
}