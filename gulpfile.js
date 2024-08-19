// Импорт основного модуля
import { plugins } from './gulp/config/plugins.js'
import { paths } from './gulp/config/paths.js'

// Импорт задач
import { archive } from './gulp/tasks/archive.js'
import { cleanTask } from './gulp/tasks/cleanTask.js'
import { files } from './gulp/tasks/files.js'
import { fonts } from './gulp/tasks/fonts.js'
import { html } from './gulp/tasks/html.js'
import { images } from './gulp/tasks/images.js'
import { scripts } from './gulp/tasks/scripts.js'
import { scriptsMin } from './gulp/tasks/scriptsMin.js'
import { server } from './gulp/tasks/server.js'
import { styles } from './gulp/tasks/styles.js'
import { stylesMin } from './gulp/tasks/stylesMin.js'

// Экспорт задач

export {
	archive,
	cleanTask,
	files,
	fonts,
	html,
	images,
	scripts,
	scriptsMin,
	server,
	styles,
	stylesMin,
}

// Задача для отслеживания изменений в файлах и автоматической пересборки
export const watch = () => {
	plugins.gulp.watch(paths.src.scss, plugins.gulp.series('styles'))
	plugins.gulp.watch(paths.src.html, plugins.gulp.series('html'))
	plugins.gulp.watch(paths.src.images, plugins.gulp.series('images'))
	plugins.gulp.watch(paths.src.fonts, plugins.gulp.series('fonts'))
	plugins.gulp.watch(paths.src.files, plugins.gulp.series('files'))
	plugins.gulp.watch(paths.src.js, plugins.gulp.series('scripts'))
}

// Задача для разработки
export const dev = plugins.gulp.series(
	cleanTask,
	plugins.gulp.parallel(html, styles, images, fonts, files, scripts),
	plugins.gulp.parallel(server, watch)
)

// Задача для продакшн
export const docs = plugins.gulp.series(
	cleanTask,
	plugins.gulp.parallel(html, styles, images, fonts, files, scripts),
	server
)

// Задача для архивации проекта без минификации
export const zipTask = plugins.gulp.series(
	cleanTask,
	plugins.gulp.parallel(html, styles, images, fonts, files, scripts),
	archive
)

// Задача для архивации проекта с минификацией
export const zipTaskMin = plugins.gulp.series(
	cleanTask,
	plugins.gulp.parallel(html, styles, images, fonts, files, scripts),
	stylesMin,
	scriptsMin,
	archive
)

// Задача для минификации стилей и JavaScript
export const min = plugins.gulp.series(stylesMin, scriptsMin)

export default dev
