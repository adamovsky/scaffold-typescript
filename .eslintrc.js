module.exports = {
    extends: ['react-app', 'react-app/jest'],
    plugins: ['sort-keys-fix'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'react/jsx-newline': [
            'error',
            {
                prevent: false
            }
        ],
        'react/jsx-sort-props': [
            'error',
            {
                multiline: 'first'
            }
        ],
        'sort-keys-fix/sort-keys-fix': [
            'error',
            'asc',
            {
                natural: true
            }
        ]
    }
};
