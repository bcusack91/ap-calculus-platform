/**
 * Alias for /api/precalculus-study-plans.
 *
 * Every other course's study-plan API sits at /api<page-path> — the page
 * /ap-calcab-study-plans is served by /api/ap-calcab-study-plans. Precalculus
 * alone diverged: the page is /precalc-study-plans but the route was
 * /api/precalculus-study-plans. That breaks anything deriving the endpoint from
 * the page path, so this alias restores the convention. Both paths work.
 */
export { POST, GET } from '../precalculus-study-plans/route'
