import { jsDestination } from '../config/options.js'

import { plugins } from '../config/plugins.js'
// Задача для минификации JavaScript
export const scriptsMin = () => {
	return plugins.gulp
		.src(jsDestination + '*.js')
		.pipe(plugins.terser())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.gulp.dest(jsDestination))
}
