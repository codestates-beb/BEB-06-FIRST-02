import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../asset/ThemeList.css'
import ItemList from './ItemList'

const ThemeList = (punkListData) => {
    const [index, setIndex] = useState(0);
    // console.log({punkListData})
    
    return (
        // 상단 선택 메뉴
        <div className='themelist'>
            <div className='themelist-head'>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(0)
                    }}>
                    <span>ALL</span>
                    
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(1)
                    }}>
                    <span>ART</span>
                    
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(2)
                    }}>
                    <span>COLLECTIBLES</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>PHOTOGRAPHY</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>ECT1</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>ECT2</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>ECT3</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>ECT4</span>
                </button>
                <button className='themelist-head-btn' onClick={() => {
                        setIndex(3)
                    }}>
                    <span>ECT5</span>
                </button>
                

            </div>
            <div className='themelist-item__contant' hidden={index != 0}>
                <ItemList getItem={{punkListData}} selectTheme="All"/>
            </div>
            <div className='themelist-item__contant' hidden={index != 1}>
                <ItemList getItem={{punkListData}} selectTheme="art"/>
            </div>
            <div className='themelist-item__contant' hidden={index != 2}>
                <ItemList getItem={{punkListData}} selectTheme="collectibles"/>
            </div>
            <div className='themelist-item__contant' hidden={index != 3}>
                <ItemList getItem={{punkListData}} selectTheme="photography"/>
            </div>
        </div>

    )
}

export default ThemeList
