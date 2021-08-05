import React from 'react'
import InterCard from './InterCard'
function IntShips({data}) {
    return (
        <div>
            {data.map((datas) => {
                return (
                    <InterCard data={datas} />
                )
            })}
        </div>
    )
}

export default IntShips
