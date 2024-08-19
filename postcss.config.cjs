module.exports = {
	prodPostcssPlugins: [
		require('autoprefixer'), // Добавление вендорных префиксов
		require('postcss-preset-env'), // Использование новых возможностей CSS
		require('postcss-custom-media'), // Поддержка пользовательских медиазапросов
		require('postcss-nested'), // Вложенные правила, как в препроцессорах
		require('postcss-flexbugs-fixes'), // Исправления для багов в Flexbox
		require('postcss-discard-comments')({
			removeAll: true,
		}),

		require('postcss-reporter'),
		require('postcss-pxtorem')({
			rootValue: 16,
			unitPrecision: 5,
			propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
			exclude: /node_modules/i,
		}),
		require('postcss-discard-duplicates')(),
		require('@fullhuman/postcss-purgecss')({
			content: ['./**/*.html'],
		}),
		require('postcss-sort-media-queries')(),
		require('postcss-animation'),
		require('webp-in-css/plugin'),
		require('usedcss')({ html: ['**/*.html'] }),
		// Добавьте другие плагины, если они вам необходимы
	],
	tailwindPlugins: [require('tailwindcss')],
}
