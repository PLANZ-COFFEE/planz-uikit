/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser', // ESLint 파서 설정
  parserOptions: {
    ecmaVersion: 2020, // ECMA Script 버전
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // jsx 파싱 가능
    },
  },
  settings: {
    react: {
      version: 'detect', // react 권장  규칙을 적용할때 최신 react 버전에 맞게 권장 규칙 적용
    },
  },
  extends: [
    'plugin:react/recommended', // react 권장 규칙 사용
    'plugin:@typescript-eslint/recommended', // typescript-eslint 권장 규칙 사용
    'prettier/@typescript-eslint', // Prettier와 충돌할수 있는 TsLint 규칙 사용 안함
    'plugin:prettier/recommended', // eslint-plugin-prettier 및 eslint-config-prettier 활성화  extens 마지막 요소에 위채 해하함
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }], // emotionjs 스타일을 아래 정의 하기 위해서
    '@typescript-eslint/explicit-function-return-type': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-self-assign': 'error',
    'no-new-object': 'error',
    'object-shorthand': ['error', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'array-bracket-newline': 'error',
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 3 },
      },
    ],
    'no-new-func': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'keyword-spacing': ['error', { before: true }],
    curly: 'error',
    'no-fallthrough': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'explicit-module-boundary-types': 'off',
  },
};
