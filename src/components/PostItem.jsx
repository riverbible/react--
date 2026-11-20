import React from 'react'

const PostItem = ({ title, author }) => {
  const onClickButton =()=>{
    console.log(title)
  }
  return (
    <div>
      <button onClick={onClickButton}>{title}</button>
      {author}
    </div>
  )
}

export default PostItem
