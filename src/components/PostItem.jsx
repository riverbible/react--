import React from 'react'

const PostItem = ({ title, author }) => {
  return (
    <div>
      <button onClick={console.log(title)}>{title}</button>
      {author}
    </div>
  )
}

export default PostItem
