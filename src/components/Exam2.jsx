import React, { useState } from 'react'

const Exam2 = () => {
  const [text, setText] = useState('Hello');
  const onClickButton=()=>{
    setText(text === 'Hello' ? 'GoodBye' : 'Hello');
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={onClickButton}>잘가라</button>
    </div>
  )
}

export default Exam2
