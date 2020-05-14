import React from 'react'
import Cards from 'react-credit-cards'
import Button from '../ui/Button'
import Box from '../ui/Box'
import Input from '../ui/Input'
import { payForm } from '../api/payment'
import { successNotifHandler, errorsNotifHandler } from '../utils/notifHendler'

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

	_onPay = async () => {
		const { price } = this.props
		const card = document.getElementById('card').value
		const name = document.getElementById('name').value
		const card_cvv = document.getElementById('cvv').value
		const card_exp_year = document.getElementById('expiry').value.substr(2)
		const card_exp_month = document.getElementById('expiry').value.substr(0,2)
		try {
			const res = await payForm({card, name, card_cvv, card_exp_year, card_exp_month})
			successNotifHandler(res)
		} catch (e) {
			errorsNotifHandler(e)
		} finally {
			
			// refetch()
		}
		

		console.log('pay price', price, card_exp_month, card_exp_year, card_cvv, card)
	}

	render() {
		return (
			<Box fd="column" id="PaymentForm" bc="inherit">
				<Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus} name={this.state.name} number={this.state.number} />
				<Box fd="column" marginTop="2em" bc="inherit">
					<Input type="tel" id="card" name="number" placeholder="Card Number" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" id="name" name="name" placeholder="Card Holder" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" id="expiry" name="expiry" placeholder="Date Expiry" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
					<Input type="tel" id="cvv" name="cvv" placeholder="CVC" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
				</Box>
				<Button alignSelf="flex-end" onClick={this._onPay}>
					Pay
				</Button>
			</Box>
		)
	}
}
