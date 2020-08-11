import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  
  const incrementCount = (increment) => {
    setCount(count + increment)
  }

	return (
		<div className='App'>
			<Button increment={1} onClickFunction={incrementCount} />
			<Button increment={10} onClickFunction={incrementCount} />
			<Button increment={100} onClickFunction={incrementCount} />
			<Button increment={1000} onClickFunction={incrementCount} />
			<span>{count}</span>
		</div>
	)
}

export default App
