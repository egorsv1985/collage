import { source, archiveDestination, projectName } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для архивации собранного проекта
export const archive = () => {
	return plugins.gulp
		.src(source, { base: paths.dest.dev })
		.pipe(plugins.zip(`${projectName}.zip`))
		.pipe(plugins.gulp.dest(archiveDestination))
}
