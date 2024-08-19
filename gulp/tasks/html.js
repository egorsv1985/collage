import {
	destination,
	plumberNotify,
	fileIncludeSettings,
	isProduction,
} from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для сборки HTML
export const html = () => {
	const filterHTML = plugins.filter(['**/*.html', '!**/_*.html'], {
		restore: true,
	})

	return (
		plugins.gulp
			.src(paths.src.html)
			// .pipe(plugins.changed(destination))
			.pipe(plugins.plumber(plumberNotify('HTML')))
			.pipe(plugins.fileInclude({ ...fileIncludeSettings, force: true }))
			.pipe(plugins.gulpIf(isProduction, plugins.webpHTML()))
			.pipe(plugins.replace('@img', paths.img.html))
			.pipe(filterHTML)
			.pipe(plugins.gulp.dest(destination))
			.pipe(filterHTML.restore)
			.pipe(plugins.browserSync.stream())
	)
}
