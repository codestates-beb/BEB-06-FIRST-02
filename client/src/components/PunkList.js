// NFT 모아서 출력

import React from 'react'
import {useState, useEffect} from "react";
import CollectionCard from './CollectionCard'
import Pagination from './Pagination'
import '../asset/PunkList.css'

const PunkList = ({punkListData}) => {
    const [punkList, setPunkList] = useState([])    // 데이터를 받아올경우 이거 사용하기
    const [page, setPage] = useState(1);    // 현제 페이지
    const [limit, setLimit] = useState(10); // 디폴트 한페이지당 10개로 정해짐
    const offset = (page - 1) * limit;
    console.log({punkListData})
    return (
        <div className='punkList'>

            <div className='punkListItem'>

                {
                    punkListData
                        .slice(offset, offset + limit)
                        .map(punk => (
                            <div>
                                <CollectionCard key={punk.token_id} id={punk.token_id} name={punk.name} traits={punk.traits}
                                    //traits={punk[].traits}
                                    image={punk.image}/>
                            </div>
                        ))
                }
            </div>
            <div className='pagenation'>
                <Pagination
                    total={punkListData.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}/>
            </div>
        </div>
    )

}

export default PunkList