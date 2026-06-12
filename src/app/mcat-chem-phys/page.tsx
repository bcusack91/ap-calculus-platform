'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
import { SECTION_PASSAGES, discretesAsPassage } from '@/data/mcat/passages'

export default function MCATChemPhysPage() {
  return (
    <MCATSectionLibrary
      sectionShort="chem-phys"
      sectionName="Chem/Phys"
      title="MCAT Chem/Phys Passage Practice"
      passages={SECTION_PASSAGES['chem-phys']}
      discretes={discretesAsPassage('chem-phys')}
      accent={{
        from: 'from-orange-500',
        to: 'to-red-600',
        chipBg: 'bg-orange-100 dark:bg-orange-900/30',
        chipText: 'text-orange-700 dark:text-orange-300',
        hover: 'hover:border-orange-300',
      }}
    />
  )
}
