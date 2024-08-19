import {
	destination,
	plumberNotify,
	fileIncludeSettings,
	isProduction,
} from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для сборки Pug
export const pug = () => {
	return plugins.gulp
		.src(paths.src.pug)
		.pipe(plugins.newer(destination, { extension: '.html' }))
		.pipe(plugins.plumber(plumberNotify('Pug')))
		.pipe(plugins.fileInclude(fileIncludeSettings))
		.pipe(plugins.gulpIf(isProduction, plugins.webpHTML()))
		.pipe(plugins.replace('@img', paths.img.html))
		.pipe(plugins.gulpIf(usePug, plugins.pug()))
		.pipe(plugins.gulp.dest(destination))
		.pipe(plugins.browserSync.stream())
}
