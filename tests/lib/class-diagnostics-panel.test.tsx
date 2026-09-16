// @vitest-environment jsdom
/**
 * The teacher's assigned-diagnostics panel.
 *
 * Regressions guarded here:
 *   - "Allow retake now" was nested inside the `takenAt` branch, so it only
 *     ever rendered for students who had ALREADY taken that diagnostic — i.e.
 *     it was invisible on exactly the rows where the retake gate is what's
 *     stopping the student. The teacher had to hunt for it on Diagnostic 1.
 *   - There was no way to delete an assignment.
 *   - A score change inside the test's measurement error must not read as
 *     progress.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import ClassDiagnosticsPanel from '@/components/ClassDiagnosticsPanel'

const student = (over: Partial<Record<string, unknown>> = {}) => ({
  userId: 'u1', name: 'Ava', takenAt: null, scoreLabel: null, percentage: null,
  estimatedScore: null, mathScore: null, rwScore: null, sections: null,
  attemptCount: 0, latestEstimatedScore: null, scoreDelta: null,
  retakeWaiverActive: false, hasPriorDiagnostic: false,
  growthFromTitle: null, growthFromScore: null, growthDelta: null,
  ...over,
})

const makePayload = () => ({
  assignableCourses: [{ key: 'mcat', label: 'MCAT' }],
  diagnostics: [
    {
      id: 'd2', courseKey: 'mcat', courseLabel: 'MCAT', title: 'Diagnostic 2',
      dueDate: '2026-09-18T00:00:00.000Z', createdAt: '2026-09-11T00:00:00.000Z',
      attemptCount: 1, takenCount: 1, totalStudents: 3, avgPercentage: 55,
      scoreAverages: { overall: 505, math: null, rw: null, sections: null },
      domainAverages: [],
      growth: { fromTitle: 'Diagnostic 1', pairedCount: 1, avgDelta: 5, noiseBand: 16, avgNoiseBand: 16 },
      students: [
        // Took it, and moved +5 — inside the noise band.
        student({ userId: 'u1', name: 'Ava', takenAt: '2026-09-12T00:00:00.000Z', scoreLabel: '505', estimatedScore: 505, attemptCount: 1, hasPriorDiagnostic: true, growthFromTitle: 'Diagnostic 1', growthFromScore: 500, growthDelta: 5 }),
        // Has a diagnostic on file, has NOT taken this one: the gate can be
        // holding them back, so the waive control must be on THIS row.
        student({ userId: 'u2', name: 'Ben', hasPriorDiagnostic: true }),
        student({ userId: 'u3', name: 'Cleo', hasPriorDiagnostic: true }),
      ],
    },
  ],
})

type Payload = ReturnType<typeof makePayload>
let payload: Payload
let fetchMock: ReturnType<typeof vi.fn>

const expandRow = async () => {
  render(<ClassDiagnosticsPanel classroomId="class-1" />)
  await waitFor(() => expect(screen.getByText(/Diagnostic 2/)).toBeInTheDocument())
  fireEvent.click(screen.getByText(/Diagnostic 2/))
  await waitFor(() => expect(screen.getByText('Ben')).toBeInTheDocument())
}

beforeEach(() => {
  payload = makePayload()
  fetchMock = vi.fn((url: string, init?: RequestInit) => {
    if ((init?.method ?? 'GET') === 'GET') {
      return Promise.resolve({ ok: true, json: () => Promise.resolve(payload) } as Response)
    }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true }) } as Response)
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => vi.unstubAllGlobals())

describe('retake waiver visibility', () => {
  it('offers "Allow retake now" on rows where the student has NOT taken it', async () => {
    await expandRow()
    // Three students can be gated, so three controls — including Ben and Cleo,
    // who have not taken this diagnostic.
    expect(screen.getAllByRole('button', { name: 'Allow retake now' })).toHaveLength(3)
  })

  it('offers a bulk waive for everyone still blocked', async () => {
    await expandRow()
    const bulk = screen.getByRole('button', { name: /Allow retake for all 2 still blocked/ })
    fireEvent.click(bulk)
    fireEvent.click(screen.getByRole('button', { name: 'Unlock 2' }))
    await waitFor(() => {
      const waives = fetchMock.mock.calls.filter(c => String(c[0]).includes('waive-gate'))
      expect(waives).toHaveLength(2)
      const ids = waives.map(c => JSON.parse(String((c[1] as RequestInit).body)).studentUserId)
      expect(ids.sort()).toEqual(['u2', 'u3'])
    })
  })

  it('does not offer the waiver to a student with no diagnostic on file', async () => {
    payload.diagnostics[0].students = [student({ userId: 'u9', name: 'Dee', hasPriorDiagnostic: false })]
    render(<ClassDiagnosticsPanel classroomId="class-1" />)
    await waitFor(() => expect(screen.getByText(/Diagnostic 2/)).toBeInTheDocument())
    fireEvent.click(screen.getByText(/Diagnostic 2/))
    await waitFor(() => expect(screen.getByText('Dee')).toBeInTheDocument())
    expect(screen.queryByRole('button', { name: 'Allow retake now' })).toBeNull()
  })
})

describe('growth is reported with its noise band', () => {
  it('labels a change inside the band as noise instead of progress', async () => {
    await expandRow()
    const chip = screen.getByText(/\+5 vs Diagnostic 1/)
    expect(chip.textContent).toMatch(/noise/)
    expect(chip.className).not.toMatch(/text-green/)
    expect(screen.getByText(/Class average \+5 across 1 student/)).toBeInTheDocument()
    expect(screen.getByText(/noise, not progress/)).toBeInTheDocument()
  })
})

describe('deleting an assignment', () => {
  it('confirms first, warns about attempts, and forces the delete', async () => {
    render(<ClassDiagnosticsPanel classroomId="class-1" />)
    await waitFor(() => expect(screen.getByText(/Diagnostic 2/)).toBeInTheDocument())
    fireEvent.click(screen.getByRole('button', { name: 'Delete MCAT Diagnostic 2' }))

    expect(screen.getByText(/1 student attempt already exist/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Delete and keep attempts' }))

    await waitFor(() => {
      const del = fetchMock.mock.calls.find(c => (c[1] as RequestInit)?.method === 'DELETE')
      expect(del).toBeDefined()
      expect(String(del![0])).toContain('diagnosticId=d2')
      expect(String(del![0])).toContain('force=1')
    })
  })
})
