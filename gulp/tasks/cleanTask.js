import { destination } from '../config/options.js'

import { plugins } from '../config/plugins.js'
// Задача для очистки папки dist перед сборкой
export const cleanTask = done => {
	if (plugins.fs.existsSync(destination)) {
		return plugins.gulp
			.src(destination, { read: false })
			.pipe(plugins.clean({ force: true }))
	}
	done()
}
