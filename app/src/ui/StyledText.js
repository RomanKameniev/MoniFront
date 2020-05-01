import React from 'react'

const StyledText = ({onClick, fontSize = '16px', fontFamily = 'montserrat', fontStyle = 'regular', children, ...props }) => {
	return <text onClick={onClick} style={{ fontSize, fontFamily, fontStyle, backgroundColor: 'inherit', ...props }}>{children}</text>
}

export default StyledText
