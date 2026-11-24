import React, { useMemo, useState } from 'react'

const SquareCalc = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const squared = useMemo(() => {
    console.log('제곱근 계산중...');
    return number * number;
  }, [number]);

  const onKeyUpEnter = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter Key');
    }
  }
  return (
    <div>
      <h1>숫자의 제곱근 구하기</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="number"
          onKeyUp={onKeyUpEnter}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder='숫자를 입력하세요' />
        <p>{number}의 제곱근은 {squared}</p>
        <button onClick={() => setCount(count + 1)}>카운트 증가:{count}</button>
      </form>
    </div>
  )
}

export default SquareCalc
