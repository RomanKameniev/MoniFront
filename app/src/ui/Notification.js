import { NotificationManager } from 'react-notifications'

const createNotification = ({ type, message = '', description = '' }) => {
	switch (type) {
		case 'info':
			return NotificationManager.info(message, description, 3000)
		case 'success':
			return NotificationManager.success(message, description, 3000)
		case 'warning':
			return NotificationManager.warning(message, description, 3000)
		case 'error':
			return NotificationManager.error(message, description, 3000)
		default:
			return NotificationManager.info(message, description, 3000)
	}
}

export default createNotification
