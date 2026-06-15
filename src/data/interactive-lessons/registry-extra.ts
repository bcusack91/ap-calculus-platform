import type { InteractiveTopicConfig } from './registry'

/**
 * AUTO-GENERATED from lessons-manifest.json by scripts/gen-registry-extra.cjs.
 * Do not edit by hand — add lessons to the manifest and re-run the generator.
 *
 * Hand-authored interactive lessons for topics not covered by the auto-generated
 * registry chunks, keyed by DB Topic.slug, spread into the registry last.
 */
export const registryExtra: Record<string, InteractiveTopicConfig> = {
  'completing-the-square': {
    completionDestination: 'competitive',
    parts: [
      { title: '🔲 Perfect Square Trinomials', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[0]) },
      { title: 'The Completing-the-Square Method', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[1]) },
      { title: 'Solving Quadratic Equations', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[2]) },
      { title: 'Vertex Form & Graphing', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[4]) },
    ],
  },
  'absolute-value-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Absolute Value Really Means', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[0]) },
      { title: 'Solving the Two Cases', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[1]) },
      { title: 'Isolate First, Then Watch for Special Cases', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[2]) },
      { title: 'Variables on Both Sides & Extraneous Solutions', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'circles-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Standard Equation', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[0]) },
      { title: 'Reading & Graphing a Circle', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[1]) },
      { title: 'General Form & Completing the Square', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[2]) },
      { title: 'Building Circles from Geometry', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'absolute-extrema': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Local vs. Absolute Extrema', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[0]) },
      { title: 'The Extreme Value Theorem', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[1]) },
      { title: 'Critical Numbers', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[2]) },
      { title: 'The Candidates Test', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[3]) },
      { title: 'Cusps, Corners & Endpoint Traps', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[4]) },
      { title: 'Applied Optimization', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[6]) },
    ],
  },
  'angle-relationships-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Naming & Classifying Angles', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[0]) },
      { title: 'Complementary & Supplementary Angles', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[1]) },
      { title: 'Vertical Angles & Angles Around a Point', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[2]) },
      { title: 'Parallel Lines & a Transversal', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[4]) },
    ],
  },
  'area-polygons-grade6': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is Area? Rectangles & Squares', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[0]) },
      { title: 'Parallelograms', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[1]) },
      { title: 'Triangles', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[2]) },
      { title: 'Trapezoids', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[3]) },
      { title: 'Composite Figures & Mastery Check', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[4]) },
    ],
  },
  'apes-air-pollution': {
    completionDestination: 'competitive',
    parts: [
      { title: '🏭 Pollutants, Sources & Primary vs. Secondary', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[0]) },
      { title: 'Photochemical Smog', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[1]) },
      { title: 'Industrial Smog & Acid Deposition', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[2]) },
      { title: 'Thermal Inversions & the Role of Weather', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[3]) },
      { title: 'Health Effects & the Air Quality Index', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[4]) },
      { title: 'Indoor Air Pollution', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[5]) },
      { title: 'Control Technology, Policy & Mastery Check', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[6]) },
    ],
  },
}
