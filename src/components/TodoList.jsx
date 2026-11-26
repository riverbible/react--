import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const TodoList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setPosts(res.data.slice(0,5));
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('데이터를 가져오지 못했습니다');
        setLoading(false);
      })
  }, [])

  // const filtered = useMemo(() => {
  //   return posts
  //     .filter((p) => p.title.toLowerCase().includes(keyword.toLowerCase()))
  //     .sort((a, b) => a.title - b.title)
  // }, [keyword, users])

  if (loading) return <p>로딩중...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Todo List 목록</h2>
      <input type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='todos 검색' />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
