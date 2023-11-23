import { equal } from 'assert-helpers'
import kava from 'kava'
import writeFile from '@bevry/fs-write'
import promiseErrback from 'promise-errback'

import list, { is, isnt } from './index.js'

const listPath = /* cwd */ 'list.json'
const indentation = '  '

kava.suite('orgs', function (suite, test) {
	test('data had no duplicates', function () {
		const set = new Set(list)
		equal(
			list.length,
			set.size,
			'length was the same as when duplicates were removed',
		)
	})

	test('data was sorted', function () {
		const expected = list.slice().sort()
		equal(
			JSON.stringify(list, null, indentation),
			JSON.stringify(expected, null, indentation),
		)
	})

	test('is function works', function () {
		equal(is('bevry'), true, 'bevry is a bevry organisation')
		equal(is('google'), false, 'google isnt a bevry organisation')
	})

	test('isnt function works', function () {
		equal(isnt('google'), true, 'google isnt a bevry organisation')
		equal(isnt('bevry'), false, 'bevry is a bevry organisation')
	})

	test('write the json file', function (done) {
		promiseErrback(writeFile(listPath, JSON.stringify(list)), done)
	})
})
