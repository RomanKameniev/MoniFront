import React from 'react'

const Box = ({ className, onClick, fd = 'row', wrap = false, display = 'flex', w = '100%', h = '100%', bc = '#aaa', children, ...props }) => {
	return (
		<div
			className={className}
			onClick={onClick}
			style={{ flexDirection: fd, flexWrap: wrap ? 'wrap' : 'nowrap', display, flex: 1, width: w, height: h, backgroundColor: bc, ...props }}
		>
			{children}
		</div>
	)
}

export default Box
