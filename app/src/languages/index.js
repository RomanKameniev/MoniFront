import en from './en.json'
import uk from './uk.json'

export const _translate = (value) => {
	const lang = getLang()
	console.log('value', uk[value], en[value])
	if (lang === 'uk') return uk[value] || en[value]
	return en[value]
}

export const setLang = (lang) => localStorage.setItem('language', lang)

export const getLang = () => {
	const lang = localStorage.getItem('language')
	return lang || getLangFromBrowser()
}

const getLangFromBrowser = () => {
	const userLang = navigator.language || navigator.userLanguage
	return userLang.substring(0, 2) || 'en'
}
