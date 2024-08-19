import { fontsDestination } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для копирования шрифтов
export const fonts = () => {
	return plugins.gulp
		.src(paths.src.fonts)
		.pipe(plugins.newer(fontsDestination))
		.pipe(
			plugins.fonter({
				formats: ['ttf'],
			})
		)
		.pipe(plugins.gulp.dest(fontsDestination)) // Помещаем конвертированные ttf обратно в папку src/fonts
		.pipe(plugins.gulp.src(paths.src.fonts))
		.pipe(plugins.filter('**/*.ttf')) // Фильтруем только файлы формата ttf
		.pipe(plugins.newer(fontsDestination))
		.pipe(plugins.ttf2woff2())
		.pipe(plugins.gulp.dest(fontsDestination)) // Помещаем конвертированные woff обратно в папку src/fonts
		.pipe(plugins.browserSync.stream())
}
