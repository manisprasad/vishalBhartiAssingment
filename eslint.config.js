import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default {
  root: true, // Ensure this configuration is the root and no other configs are applied.
  ignores: ['dist'], // Exclude the 'dist' folder or any other ignored patterns.
  rules: {}, // No rules enabled.
  plugins: {}, // No plugins used.
  extends: [], // No configurations extended.
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}'], // Apply to all relevant file types.
      rules: {}, // Ensure no rules are applied even in overrides.
    },
  ],
};

