import { cssDestination } from '../config/options.js'

import { plugins } from '../config/plugins.js'

// Задача для минификации стилей
export const stylesMin = () => {
	return plugins.gulp
		.src(cssDestination + '*.css')
		.pipe(plugins.cleanCSS())
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.gulp.dest(cssDestination))
}
