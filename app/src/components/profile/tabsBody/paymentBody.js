import React, { useState } from 'react'
import Box from '../../../ui/Box'
import StyledText from '../../../ui/StyledText'
import { getDevices, removeDeviceById } from '../../../api/devices'
import useAsync from '../../../hooks/useAsync'
import Card from '../../card'
import { errorsNotifHandler, successNotifHandler } from '../../../utils/notifHendler'
import Devider from '../../../ui/Devider'
import Pay from '../../../ui/assets/pay.svg'
import Bin from '../../../ui/assets/bin.svg'
import Devide from '../../../ui/assets/devide.svg'
import ReactModal from 'react-modal'

const PaymentBody = () => {
	console.log('in devices')
	const { result: owned, isLoading, error, refetch } = useAsync(getDevices, {}, true)

	if (error) errorsNotifHandler(error)
	if (isLoading || error) return <StyledText>Loading...</StyledText>
	console.log('result', owned)

	return (
		<Box maxWidth="100%" fd="row" bc="inherit" wrap justifyContent="space-around">
			<Box maxWidth="50em" bc="inherit" fd="column">
				<Box bc="#eee" justifyContent="center" borderRadius="10px" marginBottom="5px">
					<StyledText alignSelf="center">Owned</StyledText>
				</Box>

				{owned ? (
					<Box bc="#eee" fd="column">
						<Box maxWidth="50em" bc="inherit" justifyContent="space-around">
							<StyledText width="10em" margin="5px">
								Name:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Id:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Price:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Status:
							</StyledText>
							<StyledText width="10em" margin="5px">
								Actions:
							</StyledText>
						</Box>
						<Devider />
						<Box maxWidth="50em" fd="column" bc="inherit" alignItems="flex-start">
							{owned.map((i, key) => {
								return <PaymentCell key={key} {...i} refetch={refetch} />
							})}
						</Box>
					</Box>
				) : (
					<StyledText>No owned products</StyledText>
				)}
			</Box>
		</Box>
	)
}

const customStyles = {
	content: {
		marginTop: '25em',
		left: '50%',
		right: 'auto',
		width: '30em',
		height: '30em',
		// top: '50%',
		// width:"30%",
		// left: '50%',
		// right: 'auto',
		// bottom: 'auto',
		// marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

const PaymentCell = ({ deviceId, price = '500', name, status = 'waiting', refetch }) => {
	const [payment, setPay] = useState(false)

	const removeDevice = async () => {
		// try {
		// 	const res = await removeDeviceById(deviceId)
		// 	successNotifHandler(res)
		// } catch (e) {
		// 	errorsNotifHandler(e)
		// } finally {
		// 	refetch()
		// }
	}

	const onPay = () => setPay(!payment)

	return (
		<>
			<ReactModal isOpen={payment} onRequestClose={onPay} style={customStyles} contentLabel={'Payment'}>
				<Card price={price} />
			</ReactModal>
			<Box maxWidth="50em" justifyContent="flex-start" bc="inherit" textAlign="left">
				<StyledText margin="5px" width="10em" textAlign="left">
					{name}
				</StyledText>
				<StyledText margin="5px" width="10em" textAlign="left">
					{deviceId}
				</StyledText>
				<StyledText margin="5px" width="10em" textAlign="left">
					{price}
				</StyledText>
				<StyledText margin="5px" width="10em" textAlign="left">
					{status}
				</StyledText>
				<Box margin="5px" width="10em" alignItems="center" bc="inherit">
					<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
						<img onClick={() => console.log('edit')} src={Devide} style={{ width: '25px', marginRight: '5px' }} alt="split between users" />
					</Box>{' '}
					<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
						<img onClick={onPay} src={Pay} style={{ width: '25px', marginRight: '5px' }} alt="pay" />
					</Box>{' '}
					<Box className="image-action" maxWidth="3em" display="block" max-height="25px" bc="inherit">
						<img onClick={removeDevice} src={Bin} style={{ width: '25px', marginRight: '5px' }} alt="remove itme" />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default PaymentBody
