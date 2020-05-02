import createNotification from '../ui/Notification'


const errorsNotifHandler = (error) => {
	const errorObj = {
		type: 'error',
		message: 'Oops. Something went wrong.',
		description: 'Please try again later or contact our support team',
	}

	// if (process.env.NODE_ENV === 'development') {
	console.error('Api call error: ', error.response ? error.response : error)
	// }

	if (!error.response) return errorObj
	if (error.response.status === 500) return errorObj

	const data = error.response.data

	if (data.message) {
		errorObj.message = data.message
		// if (process.env.NODE_ENV === 'development') {
		// errorObj.message += `, ${error.response.status}`;
		// }
	}

	if (data.errors) {
		errorObj.description = Object.values(data.errors)[0]
	}

	if (error.response.status === 400) {
		errorObj.message = error.response.statusText
		errorObj.description = data.error ? data.error : data
    }
    

	if (error.response.status === 422) {
		errorObj.type = 'warn'
		errorObj.message = error.response.statusText
		// errorObj.description = data.error ? data.error : '';
	}
	createNotification(errorObj)

	return errorObj
}

export default errorsNotifHandler
