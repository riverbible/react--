import React, { useMemo, useState } from 'react'

const PeopleList = () => {
  const [keyword, setKeyword] = useState('');
  const [people] = useState([
    { name: "David", age: 28 },
    { name: "Alice", age: 22 },
    { name: "Charlie", age: 35 },
    { name: "Bob", age: 30 },
  ]);

  const filteredPeople = useMemo(() => {
    return people
      .filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .sort((a, b) => a.age - b.age)
  })
  return (
    <div>
      <h2>useMemo 객체 리스트</h2>
      <input type="text"
        placeholder='이름검색'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} />
      <ul>
        {filteredPeople.map((p)=>(
          <li>이름 : {p.name} 나이 : {p.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default PeopleList
