module.exports = {
  plugins: ["react"],
  settings: {
    react: {
      version: "latest" // "detect" automatically picks the version you have installed.
    }
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],
    "for-direction": "off",
    "react/no-set-state": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-alert": "error",
    "no-debugger": "error",
    "no-empty-function": "error",
    "no-unsafe-optional-chaining": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "array-bracket-spacing": ["error", "never"],
    "brace-style": "error",
    "max-len": [
      "error",
      { code: 80, tabWidth: 4, ignoreStrings: true, ignoreComments: true }
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ]
  }
};
