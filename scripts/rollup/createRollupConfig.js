import ts from 'typescript';
import path from 'path';
import external from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

// Custom package
import { safePackageName } from './safePackageName';
import { pascalcase } from './pascalcase';
import pkg from '../../package.json';

/**
 * Create build bu follup config file defined in rollup.config.js
 * @param {config} options - Rollup config (Array of configs)
 * @param {*} callback - Not required
 */
export function createRollupConfig(options, callback) {
  const name = options.name || safePackageName(pkg.name);
  const umdName = options.umdName || pascalcase(safePackageName(pkg.name));
  const shouldMinify = options.minify || options.env === 'production';
  const tsconfigPath = options.tsconfig || 'tsconfig.json';
  const tsconfigJSON = ts.readConfigFile(tsconfigPath, ts.sys.readFile).config;
  const tsCompilerOptions = ts.parseJsonConfigFileContent(
    tsconfigJSON,
    ts.sys,
    './',
  ).options;

  // Output file name
  const outputName = [
    path.join(tsCompilerOptions.outDir, name),
    options.formatName || options.format,
    options.env,
    shouldMinify ? 'min' : '',
    'js',
  ]
    .filter(Boolean)
    .join('.');

  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: umdName,
      sourcemap: true,
      globals: { react: 'React', reactHookForm: 'react-hook-form' },
      exports: 'named',
    },
    plugins: [
      external(),
      postcss(),
      resolve(),
      options.format === 'umd' &&
        commonjs({
          include: 'node_modules/**',
        }),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
        tsconfigDefaults: {
          exclude: [
            '**/*.scss',
            '**/*.spec.ts',
            '**/*.test.ts',
            '**/*.stories.ts',
            '**/*.spec.tsx',
            '**/*.test.tsx',
            './src/*.stories.tsx',
            'node_modules',
            'bower_components',
            'jspm_packages',
            'dist',
          ],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
          },
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(options.env),
      }),
      sourcemaps(),
      shouldMinify &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
      copy({
        targets: [
          { src: 'LICENSE', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
          {
            src: 'package.json',
            dest: 'dist',
            transform: (content) => {
              const {
                scripts,
                devDependencies,
                husky,
                release,
                engines,
                ...keep
              } = JSON.parse(content.toString());
              return JSON.stringify(keep, null, 2);
            },
          },
        ],
      }),
    ].filter(Boolean),
  };

  // Non passo mai callback
  return callback ? callback(config) : config;
}
