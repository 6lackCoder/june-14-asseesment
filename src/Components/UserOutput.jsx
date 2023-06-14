import React from 'react'
// Passing Username as props (destructured)
const UserOutput = ({username}) => {
  return (
    <div>
        <h1 className=' '>My name is {username} and I am an Afro-pop musician</h1>
    </div>
  )
}

export default UserOutput;