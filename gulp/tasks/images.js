import { imagesDestination, isProduction } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для сборки изображений
export const images = () => {
	return plugins.gulp
		.src(paths.src.images) // Берет исходные изображения из указанного пути
		.pipe(plugins.newer(imagesDestination)) // Пропускает только новые или измененные файлы
		.pipe(plugins.changed(imagesDestination)) // Пропускает только измененные файлы
		.pipe(plugins.gulpIf(isProduction, plugins.webp({ quality: 75 }))) // Конвертирует изображения в WebP, если режим production
		.pipe(plugins.gulp.dest(imagesDestination)) // Сохраняет изображения в указанную директорию
		.pipe(plugins.gulpIf(isProduction, plugins.imagemin({ verbose: true }))) // Оптимизирует изображения, если режим production
		.pipe(plugins.gulp.dest(imagesDestination)) // Сохраняет оптимизированные изображения в указанную директорию
		.pipe(plugins.browserSync.stream()) // Обновляет браузер
}
