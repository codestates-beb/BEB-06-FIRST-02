import React, {useState} from 'react'
import '../asset/Tab.css'

const Tab = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className='tabs'>
            <div className='tabsList'>
                <div
                    className='tabHead'
                    onClick={() => {
                        setIndex(0)
                    }}>테마목록1
                    </div>
                <div
                    className='tabHead'
                    onClick={() => {
                        setIndex(1)
                    }}>테마목록2</div>
                <div
                    className='tabHead'
                    onClick={() => {
                        setIndex(2)
                    }}>테마목록3</div>
            </div>
            <div className='tabContant' hidden={index != 0}>
                테마목록1 컨텐츠
            </div>
            <div className='tabContant' hidden={index != 1}>
                테마목록2 컨텐츠
            </div>
            <div className='tabContant' hidden={index != 2}>
                테마목록3 컨텐츠
            </div>
        </div>

    )
}

export default Tab