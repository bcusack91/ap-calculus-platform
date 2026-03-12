// Setup file for Vitest tests
// jsdom matchers are imported conditionally for component tests
if (typeof document !== 'undefined') {
  import('@testing-library/jest-dom/vitest')
}
