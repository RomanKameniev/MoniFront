import React from 'react'

const Button = ({ className = '', h = '35px', w = '150px', onClick, type, children, ...props }) => {
	let buttonStyle = {}
	const click = () => {
		try {
			onClick()
		} catch (e) {
			console.log('e', e)
		}
		// console.log(`clicked${cl}`)
	}

	if (type === 'primary') {
		buttonStyle = {
			background: '#333',
		}
	}

	if (type === 'disabled') {
		buttonStyle = {
			background: '#aaa',
			color: '#fff',
		}
	}
	if (type === 'loading') {
		buttonStyle = {
			background: '#aaa',
			color: '#eee',
		}
	}

	return (
		<button
			className={className}
			onClick={click}
			style={{ height: h, width: w, margin: '5px', fontSize: '20px', background: '#blue', borderRadius: '10px', ...buttonStyle, ...props }}
		>
			{children}
		</button>
	)
}

export default Button
