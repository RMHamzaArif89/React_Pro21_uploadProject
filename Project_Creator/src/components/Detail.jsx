import React from 'react'

function Detail({proDetail}) {
  return (
    <div className='detail'>
<div className="name">{proDetail.name}</div>
<div className="detail">{proDetail.description}</div>
<div className="date">{proDetail.date}</div>
      
    </div>
  )
}

export default Detail
