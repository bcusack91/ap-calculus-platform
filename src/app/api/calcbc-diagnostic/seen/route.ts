import { apDiagnosticSeenHandlers } from '@/lib/ap-diagnostic-v2/seen-route'

/** Seen keys for the ap-calculus-bc diagnostic v2 (see apDiagnosticSeenHandlers; includes AB v2 attempts). */
export const { GET, POST } = apDiagnosticSeenHandlers('ap-calculus-bc')
