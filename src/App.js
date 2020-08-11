import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
	const [count, setCount] = useState(() => {
		return 0
	})
	
  
  const incrementCount = (increment) => {
		setCount(count => count + increment)
	}

	return (
		<div className='App'>
			<h1>React Count App</h1>
			<Button increment={1} onClickFunction={incrementCount} />
			<Button increment={10} onClickFunction={incrementCount} />
			<Button increment={100} onClickFunction={incrementCount} />
			<Button increment={1000} onClickFunction={incrementCount} />
			<h2>{count}</h2>
		</div>
	)
}

export default App
