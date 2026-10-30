/** An instructor's photo, or their initials when there is none. */
function Initials({ name, className }: { name: string; className: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-accent-light font-bold text-accent-dark dark:bg-accent-light/30 dark:text-accent-muted ${className}`} aria-hidden>
      {initials}
    </span>
  )
}

export function InstructorAvatar({ name, photoUrl, size = 'md' }: { name: string; photoUrl: string | null; size?: 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'h-16 w-16 text-xl' : 'h-11 w-11 text-sm'
  if (!photoUrl) return <Initials name={name} className={cls} />
  // eslint-disable-next-line @next/next/no-img-element -- instructor photos come from arbitrary hosts the owner sets
  return <img src={photoUrl} alt="" className={`${cls} shrink-0 rounded-full object-cover`} />
}
