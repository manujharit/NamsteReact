import React, {useState} from 'react'


const User = (props) => {
    const [count, setCount] = useState(0)
    const {name} = props

    const increment = () => {
        setCount(count+1)
    }
  return (
    <div className='user-card'>
        <h2>Count = {count}</h2>
        <h3>Name: {name}</h3>
        <button onClick = {()=>increment()}>Inc</button>
    </div>
  )
}

export default User;