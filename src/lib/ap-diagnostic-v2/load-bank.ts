/** Lazy per-course bank loader for the browser (one chunk per course). */
import type { ApDiagV2Bank, ApDiagV2Course } from './types'

export async function loadApDiagV2Bank(course: ApDiagV2Course): Promise<ApDiagV2Bank> {
  switch (course) {
    case 'ap-chemistry':
      return (await import('@/data/ap-diagnostic-v2/ap-chemistry')).bank
    case 'ap-biology':
      return (await import('@/data/ap-diagnostic-v2/ap-biology')).bank
    case 'ap-physics-1':
      return (await import('@/data/ap-diagnostic-v2/ap-physics-1')).bank
    case 'ap-calculus-ab':
      return (await import('@/data/ap-diagnostic-v2/ap-calculus-ab')).bank
    case 'ap-calculus-bc':
      return (await import('@/data/ap-diagnostic-v2/ap-calculus-bc')).bank
  }
}
