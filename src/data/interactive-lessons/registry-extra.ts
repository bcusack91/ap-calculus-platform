import type { InteractiveTopicConfig } from './registry'

/**
 * Hand-authored interactive lessons added AFTER the auto-generated registry
 * chunks. NEW lessons for previously-uncovered topics go here, keyed by the DB
 * Topic.slug, so we never have to edit the auto-generated registry-chunk-*.ts
 * files. Spread into the registry in registry.ts (last, so these win on any key
 * collision).
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
}
