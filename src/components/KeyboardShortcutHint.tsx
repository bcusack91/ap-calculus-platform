'use client'

export default function KeyboardShortcutHint() {
  return (
    <div className="hidden md:flex items-center justify-center gap-5 text-xs text-gray-400 dark:text-gray-500 mt-3 select-none">
      <span className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-[10px] font-mono">←</kbd>
        Previous
      </span>
      <span className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-[10px] font-mono">→</kbd>
        Next
      </span>
      <span className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-[10px] font-mono">Enter</kbd>
        Submit
      </span>
      <span className="flex items-center gap-1">
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-[10px] font-mono">H</kbd>
        Hint
      </span>
    </div>
  )
}
