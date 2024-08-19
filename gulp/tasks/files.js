import { filesDestination } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для копирования файлов
export const files = () => {
	return plugins.gulp
		.src(paths.src.files)
		.pipe(plugins.newer(filesDestination))
		.pipe(plugins.gulp.dest(filesDestination))
		.pipe(plugins.browserSync.stream())
}
