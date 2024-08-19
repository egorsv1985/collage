import {
	cssDestination,
	plumberNotify,
	sassOptions,
	isProduction,
	// filterScss,
	postcssPlugins,
	useTailwind,
} from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

export const styles = () => {
	return (
		plugins.gulp
			.src(paths.src.scss)
			.pipe(plugins.newer(cssDestination))
			.pipe(plugins.plumber(plumberNotify('SCSS')))
			.pipe(plugins.sourceMaps.init())
			.pipe(plugins.sassGlob())
			.pipe(plugins.sass(sassOptions))
			.pipe(plugins.replace('@img', paths.img.css))
			.pipe(plugins.gulpIf(isProduction, plugins.postcss(postcssPlugins)))
			.pipe(
				useTailwind
					? plugins.postcss(postcssPlugins.tailwindPlugins)
					: plugins.gulp.dest(cssDestination)
			)
			.pipe(plugins.sourceMaps.write())
			// .pipe(filterScss)
			.pipe(plugins.gulp.dest(cssDestination))
			// .pipe(filterScss.restore)
			.pipe(plugins.browserSync.stream({ match: '**/*.css' }))
	)
}
