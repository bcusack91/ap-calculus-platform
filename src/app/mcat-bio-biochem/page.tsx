'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
// Leaf import (not the barrel) so only this section's bank ships to the client.
import { BIO_BIOCHEM_PASSAGES, BIO_BIOCHEM_DISCRETES } from '@/data/mcat/passages/bio-biochem'
import { buildDiscretesPassage } from '@/data/mcat/passages/discretes-helper'

export default function MCATBioBiochemPage() {
  return (
    <MCATSectionLibrary
      sectionShort="bio-biochem"
      sectionName="Bio/Biochem"
      title="MCAT Bio/Biochem Passage Practice"
      passages={BIO_BIOCHEM_PASSAGES}
      discretes={buildDiscretesPassage('bio-biochem', BIO_BIOCHEM_DISCRETES)}
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
