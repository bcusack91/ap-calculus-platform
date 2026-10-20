'use client'

import { useEffect, useRef } from 'react'
import { trackApDiagnosticStart } from '@/lib/analytics'

/**
 * Fires `ap_diagnostic_start` once per sitting: whenever the page's phase
 * enters 'testing'. One line in each diagnostic page, next to its state.
 */
export function useApDiagnosticStartEvent(courseSlug: string, phase: string, version: number = 1) {
  const wasTesting = useRef(false)
  useEffect(() => {
    const testing = phase === 'testing'
    if (testing && !wasTesting.current) trackApDiagnosticStart(courseSlug, version)
    wasTesting.current = testing
  }, [phase, courseSlug, version])
}
