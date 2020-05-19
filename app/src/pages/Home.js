import React from 'react'
import Box from '../ui/Box'
import StyledText from '../ui/StyledText'
import HomeImage from '../ui/assets/home.png'
import LoginImage from '../ui/assets/login.png'
import MoniImage from '../ui/assets/moni.png'

const ITEMS = [{ image: MoniImage }, { image: LoginImage }, { image: HomeImage }]

const Home = () => {
	return (
		<Box display="flex" marginTop="2em" marginBottom="2em" height={ITEMS.length * 1250} fd="column">
			{ITEMS.map((i, key) => {
				return <Item {...i} position={key % 2} />
			})}
		</Box>
	)
}

const Item = ({ text = 'Lorem ipsum', description = 'hello desc', image, position }) => {
	return (
		<Box h="1050px" marginTop="4em"  flexDirection={!position ? 'row' : 'row-reverse'} justifyContent="center">
			<Box h="1050px" padding="2em" flexDirection="column" alignItems={!position ? 'flex-end' : 'flex-start'}>
				<StyledText fontSize="70px" fontStyle="bold" fontWeight="600">
					{text}
				</StyledText>
				<StyledText fontSize="45px">{description}</StyledText>
			</Box>

			<Box height="1050px" padding="2em" justifyContent={position ? 'flex-end' : 'flex-start'}>
				<img style={{ paddingRight: '80px', paddingLeft: '80px' }} height="1000px" width="500px" src={image} />
			</Box>
		</Box>
	)
}

export default Home
