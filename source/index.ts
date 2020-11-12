/** List of all the Bevry managed GitHub organisations */
const list: Array<string> = [
	'balupton',
	'bevry',
	'bevry-actions',
	'bevry-archive',
	'bevry-trading',
	'browserstate',
	'chainyjs',
	'docpad',
	'docpad-archive',
	'elegant-talk',
	'interconnectapp',
	'webwrite',
]
export default list

/** Is the passed organisation a Bevry managed organisation? */
export function is(org: string): boolean {
	return list.includes(org)
}

/** Is the passed organisation NOT a Bevry managed organisation? */
export function isnt(org: string): boolean {
	return is(org) === false
}
