'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
import { SECTION_PASSAGES, discretesAsPassage } from '@/data/mcat/passages'

export default function MCATPsychSocPage() {
  return (
    <MCATSectionLibrary
      sectionShort="psych-soc"
      sectionName="Psych/Soc"
      title="MCAT Psych/Soc Passage Practice"
      passages={SECTION_PASSAGES['psych-soc']}
      discretes={discretesAsPassage('psych-soc')}
      accent={{
        from: 'from-indigo-500',
        to: 'to-purple-600',
        chipBg: 'bg-indigo-100 dark:bg-indigo-900/30',
        chipText: 'text-indigo-700 dark:text-indigo-300',
        hover: 'hover:border-indigo-300',
      }}
    />
  )
}
