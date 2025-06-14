import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    { ignores: ['dist', 'build', 'node_modules'] },
    {
        files: ['**/*.{js,jsx}'],

        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettierPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Za-z_]' }],
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-console': 'error',
            'no-var': 'error',
            'prettier/prettier': 'error',
        },
    },
]
