import React from 'react'

const Input = ({
	tabIndex = '0',
	onFocus,
	onFocusOut,
	className = 'input-default',
	ref,
	type = 'text',
	alt = 'input',
	placeholder = 'default',
	h = '30px',
	w = '100%',
	m = '5px',
	...props
}) => {
	return (
		<input
            ref={ref}
            onFocus={onFocus}
			className={className}
			tabIndex={tabIndex}
			type={type}
			alt={alt}
			// placeholder={placeholder}
			autoCorrect
			autoComplete
			{...props}
			style={{ borderRadius: 5, backgroundColor: '#eee', height: h, width: w, margin: m }}
		/>
	)
}

export default Input
