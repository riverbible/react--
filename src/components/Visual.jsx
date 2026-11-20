import React from 'react'

const Visual = ({sub,title}) => {
  const onClickButton = () => {
    console.log(title)
  }

  return (
    <div className='visual'>
      <p className='sub'>{sub}</p>
      <h2>{title}</h2>
      <button className="btn" onClick={onClickButton}>메뉴 보러 가기</button>
    </div>
  )
}

export default Visual
