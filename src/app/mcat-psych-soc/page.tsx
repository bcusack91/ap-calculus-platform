'use client'

import MCATSectionLibrary from '@/components/MCATSectionLibrary'
// Leaf import (not the barrel) so only this section's bank ships to the client.
import { PSYCH_SOC_PASSAGES, PSYCH_SOC_DISCRETES } from '@/data/mcat/passages/psych-soc'
import { buildDiscretesPassage } from '@/data/mcat/passages/discretes-helper'

export default function MCATPsychSocPage() {
  return (
    <MCATSectionLibrary
      sectionShort="psych-soc"
      sectionName="Psych/Soc"
      title="MCAT Psych/Soc Passage Practice"
      passages={PSYCH_SOC_PASSAGES}
      discretes={buildDiscretesPassage('psych-soc', PSYCH_SOC_DISCRETES)}
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
