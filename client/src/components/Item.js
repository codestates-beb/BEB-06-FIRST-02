// NFT 각각의 항목

import React from 'react'
import weth from '../assets/weth.png'
// import '../asset/Item.css'
import '../asset/Item2.css' // 테스트 중

const Item = ({id, name, price, image, writer}) => {
    
    return (
        <div className='item-component'>
            <img className='item-component__image' src={image}/>

            <div className='item-component__name'>
                {name}#{id}
            </div>
            <div className='item-component__writer'>
                {writer}
            </div>
            <div className='item-component__price-container'>
                <img src={weth} className='wethImage'/>
                <div className='peice'>{price}</div>
            </div>
        </div>
    )
}

export default Item