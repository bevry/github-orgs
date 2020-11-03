import { equal } from 'assert-helpers'
import kava from 'kava'
import { writeFile } from 'fs'
import { join } from 'path'

import list from './index.js'

import filedirname from 'filedirname'
const [file, dir] = filedirname()
const listPath = join(dir, '..', 'list.json')

const indentation = '  '

kava.suite('orgs', function (suite, test) {
	test('data had no duplicates', function () {
		const set = new Set(list)
		equal(
			list.length,
			set.size,
			'length was the same as when duplicates were removed'
		)
	})

	test('data was sorted', function () {
		const expected = list.slice().sort()
		equal(
			JSON.stringify(list, null, indentation),
			JSON.stringify(expected, null, indentation)
		)
	})

	test('write the json file', function (next) {
		writeFile(listPath, JSON.stringify(list), function (error) {
			if (error) return next(error)
			next()
		})
	})
})
