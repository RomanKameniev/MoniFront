import React, { useState, useEffect } from 'react'
import AsyncImage from '../components/asyncImage'

const Fallback = () => {
	const [show, setShow] = useState(false)
	useEffect(() => {
		let timeout = setTimeout(() => setShow(true), 300)
		return () => {
			clearTimeout(timeout)
		}
	}, [])
	return show && <AsyncImage />
}

export default Fallback
