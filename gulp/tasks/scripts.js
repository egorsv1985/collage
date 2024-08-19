import { jsDestination, plumberNotify } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для сборки JavaScript
export const scripts = () => {
	return plugins.gulp
		.src(paths.src.js)
		.pipe(plugins.newer(jsDestination))
		.pipe(plugins.plumber(plumberNotify('JS')))
		.pipe(plugins.replace('@img', paths.img.js))
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.gulp.dest(jsDestination))
		.pipe(plugins.browserSync.stream())
}
