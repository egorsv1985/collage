// Импорты модулей Gulp
import gulp from 'gulp' // Gulp - основной модуль для задач сборки
import fileInclude from 'gulp-file-include' // Плагин для вставки файлов в HTML
import fs from 'fs' // Модуль для работы с файловой системой
import dartSass from 'sass' // Dart Sass - реализация препроцессора Sass
import gulpSass from 'gulp-sass' // Gulp Sass - плагин для компиляции Sass
const sass = gulpSass(dartSass) // Использование Gulp Sass с Dart Sass
import clean from 'gulp-clean' // Плагин для очистки директории сборки
import sourceMaps from 'gulp-sourcemaps' // Плагин для генерации sourcemaps
import plumber from 'gulp-plumber' // Плагин для обработки ошибок без остановки Gulp
import notify from 'gulp-notify' // Плагин для уведомлений об ошибках
import changed from 'gulp-changed' // Плагин для фильтрации измененных файлов
import sassGlob from 'gulp-sass-glob' // Плагин для использования глобальных шаблонов в Sass
import postcss from 'gulp-postcss' // Плагин для постобработки CSS
import imagemin from 'gulp-imagemin' // Плагин для оптимизации изображений
import webp from 'gulp-webp' // Плагин для создания изображений в формате WebP
import webpHTML from 'gulp-webp-html-nosvg' // Плагин для вставки тегов WebP в HTML
import concat from 'gulp-concat' // Плагин для объединения файлов
import browserSync from 'browser-sync' // Плагин для запуска локального сервера
import filter from 'gulp-filter' // Плагин для фильтрации файлов
import gulpIf from 'gulp-if' // Плагин для условного выполнения задач
import replace from 'gulp-replace' // Плагин для замены строк в файлах
import zip from 'gulp-zip' // Плагин для создания zip-архива
import cleanCSS from 'gulp-clean-css' // Плагин для минификации CSS
import rename from 'gulp-rename' // Плагин для переименования файлов
import terser from 'gulp-terser' // Плагин для минификации JavaScript
import newer from 'gulp-newer' // Плагин для фильтрации новых файлов
import pug from 'gulp-pug'
import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter'

export const plugins = {
	gulp,
	fileInclude,
	dartSass,
	sass,
	clean,
	fs,
	sourceMaps,
	plumber,
	notify,
	changed,
	sassGlob,
	postcss,
	imagemin,
	webp,
	webpHTML,
	concat,
	browserSync,
	filter,
	gulpIf,
	replace,
	zip,
	cleanCSS,
	rename,
	terser,
	newer,
	pug,
	fonter,
	ttf2woff2,
}
