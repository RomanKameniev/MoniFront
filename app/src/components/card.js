import React from 'react'
import Cards from 'react-credit-cards'
import Button from '../ui/Button'
import Box from '../ui/Box'
import Input from '../ui/Input'

export default class PaymentForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cvc: '',
			expiry: '',
			focus: '',
			name: '',
			number: '',
		}
	}

	handleInputFocus = (e) => {
		this.setState({ focus: e.target.name })
	}

	handleInputChange = (e) => {
		const { name, value } = e.target

		this.setState({ [name]: value })
	}

	_onPay = () => {
        const { price } = this.props
        console.log('pay price', price)
	}

	render() {
		return (
			<Box fd="column" id="PaymentForm" bc="inherit">
				<Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus} name={this.state.name} number={this.state.number} />
				<Box fd="column" marginTop="2em" bc="inherit">
					<Input type="tel" name="number" placeholder="Card Number" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" name="name" placeholder="Card Holder" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" name="expiry" placeholder="Date Expiry" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" name="cvc" placeholder="CVC" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
				</Box>
				<Button alignSelf="flex-end" onClick={this._onPay}>
					Pay
				</Button>
			</Box>
		)
	}
}
