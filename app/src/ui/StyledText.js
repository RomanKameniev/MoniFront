import React from 'react'

const StyledText = ({ fontSize = '16px', fontFamily = 'montserrat', fontStyle = 'regular', children, ...props }) => {
	return <text style={{ fontSize, fontFamily, fontStyle, backgroundColor: 'inherit', ...props }}>{children}</text>
}

export default StyledText
