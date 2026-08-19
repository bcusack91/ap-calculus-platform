'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
// Import the section's OWN leaf bank, not the passages barrel — the barrel
// references every section, which would ship all banks into this client bundle.
import { CHEM_PHYS_PASSAGES, CHEM_PHYS_DISCRETES } from '@/data/mcat/passages/chem-phys'
import { CHEM_PHYS_PASSAGES_2 } from '@/data/mcat/passages/chem-phys-2'
import { buildDiscretesPassage } from '@/data/mcat/passages/discretes-helper'

export default function MCATChemPhysPage() {
  return (
    <MCATSectionLibrary
      sectionShort="chem-phys"
      sectionName="Chem/Phys"
      title="MCAT Chem/Phys Passage Practice"
      passages={[...CHEM_PHYS_PASSAGES, ...CHEM_PHYS_PASSAGES_2]}
      discretes={buildDiscretesPassage('chem-phys', CHEM_PHYS_DISCRETES)}
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
