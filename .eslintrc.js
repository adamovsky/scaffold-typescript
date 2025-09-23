import _import from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
        extends: fixupConfigRules(
            compat.extends(
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react-hooks/recommended',
                'plugin:react/jsx-runtime'
            )
        ),

        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            '@stylistic/js': stylisticJs,
            'react-refresh': reactRefresh,
            'sort-destructure-keys': sortDestructureKeys,
            'sort-keys-fix': sortKeysFix,
            import: fixupPluginRules(_import),
            'no-relative-import-paths': noRelativeImportPaths
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: './'
            },

            globals: {
                ...globals.browser,
                ...globals.node
            }
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            'arrow-body-style': ['error', 'as-needed'],
            curly: 'error',
            'eol-last': ['error', 'always'],

            'import/no-duplicates': [
                'error',
                {
                    'prefer-inline': true
                }
            ],

            'no-duplicate-imports': 'error',

            "no-relative-import-paths/no-relative-import-paths": [
                "error",
                { 
                    "allowSameFolder": true 
                }
            ],

            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return'
                },
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*'
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var']
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'export'
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'block-like'
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'multiline-expression'
                }
            ],

            'prefer-const': 'error',

            'prefer-destructuring': [
                'error',
                {
                    VariableDeclarator: {
                        array: false,
                        object: true
                    },

                    AssignmentExpression: {
                        array: false,
                        object: true
                    }
                },
                {
                    enforceForRenamedProperties: false
                }
            ],

            'react/jsx-newline': [
                'error',
                {
                    prevent: false
                }
            ],

            'react/jsx-sort-props': [
                'warn',
                {
                    multiline: 'first'
                }
            ],

            'react/prop-types': ['off'],

            'react-hooks/exhaustive-deps': ['error'],

            'sort-destructure-keys/sort-destructure-keys': 2,

            'sort-keys-fix/sort-keys-fix': [
                'warn',
                'asc',
                {
                    natural: true
                }
            ],

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports'
                }
            ],

            '@typescript-eslint/consistent-type-exports': 'error',

            '@typescript-eslint/no-require-imports': 'off',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_'
                }
            ]
        }
    }
]);

