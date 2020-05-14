import { api } from './api'

export const payForm = async ({ card, name, card_cvv, card_exp_year, card_exp_month }) => {
	let res = await api.post('/payment', { card, name, card_cvv, card_exp_year, card_exp_month })
	console.log('res => ', res)
	return res
}

