import React from 'react'

const StyledText = ({ className, onClick, fontSize = '16px', fontFamily = 'montserrat', fontStyle = 'regular', children, ...props }) => {
	return (
		<text className={className} onClick={onClick} style={{ fontSize, fontFamily, fontStyle, backgroundColor: 'inherit', ...props }}>
			{children}
		</text>
	)
}

export default StyledText
