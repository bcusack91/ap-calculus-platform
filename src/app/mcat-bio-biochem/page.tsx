'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
import { SECTION_PASSAGES, discretesAsPassage } from '@/data/mcat/passages'

export default function MCATBioBiochemPage() {
  return (
    <MCATSectionLibrary
      sectionShort="bio-biochem"
      sectionName="Bio/Biochem"
      title="MCAT Bio/Biochem Passage Practice"
      passages={SECTION_PASSAGES['bio-biochem']}
      discretes={discretesAsPassage('bio-biochem')}
      accent={{
        from: 'from-emerald-500',
        to: 'to-green-600',
        chipBg: 'bg-emerald-100 dark:bg-emerald-900/30',
        chipText: 'text-emerald-700 dark:text-emerald-300',
        hover: 'hover:border-emerald-300',
      }}
    />
  )
}
