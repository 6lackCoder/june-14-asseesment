import React from 'react'
// Destructuring Props (change and value)
const UserInput = ({change, value}) => {
  return (
    <div>
        <input type='text' onChange={change} value={value} className=' w-[12rem] p-4 '/>
    </div>
  )
}

export default UserInput;