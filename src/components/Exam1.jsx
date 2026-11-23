import React from 'react'

const Exam1 = ({ name, age }) => {
  return (
    <div>
      <h3>나의 이름은
        <span className="name">{name}</span>
        이고 내 나이는 
        <span className="age">{age}</span>
        살이야</h3>
    </div>
  )
}

export default Exam1
