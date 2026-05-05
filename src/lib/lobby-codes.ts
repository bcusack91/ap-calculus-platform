// Generate a short, human-friendly join code (excludes ambiguous chars: 0,O,1,I,L)
export function generateLobbyCode(length = 6): string {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export function normalizeLobbyCode(input: string): string {
  return (input || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)
}
