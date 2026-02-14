export const chemLewisStructuresFormalChargePart6Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-6-1',
      type: 'text',
      title: 'Exceptions to the Octet Rule',
      content: `While the octet rule works for most molecules, there are three important categories of exceptions:\n\n**1. Incomplete Octets** — fewer than 8 electrons around the central atom\n- Elements: Be (4 e⁻), B (6 e⁻), Al (6 e⁻)\n- Example: BF₃ — boron has only 6 electrons\n\n**2. Expanded Octets** — more than 8 electrons around the central atom\n- Only elements in **Period 3 and beyond** (they have empty d orbitals)\n- Examples: PCl₅ (10 e⁻), SF₆ (12 e⁻), XeF₂ (10 e⁻)\n- Elements from Period 2 (C, N, O, F) can **NEVER** exceed 8\n\n**3. Odd-Electron Species** — molecules with an odd number of total electrons\n- At least one atom cannot have an octet\n- Examples: NO (11 e⁻), NO₂ (17 e⁻)\n- These are called **free radicals**\n\nRecognizing which exception applies is a critical AP Chemistry skill.`
    },
    {
      id: 'ls-6-2',
      type: 'text',
      title: 'Incomplete Octets: BF₃',
      content: `Boron trifluoride (BF₃) is the classic example of an incomplete octet.\n\n**Step 1:** Total valence electrons = 3 (B) + 3 × 7 (F) = 24\n\n**Step 2:** Boron is the central atom\n\n**Step 3:** Three B—F single bonds use 6 e⁻. Remaining: 18 e⁻\n\n**Step 4:** Give each F 3 lone pairs (9 lone pairs = 18 e⁻). All remaining electrons used.\n\n**Step 5:** Check octets:\n- Each F: 2 (bond) + 6 (lone pairs) = 8 ✓\n- B: only 6 e⁻ (3 bonds) — **incomplete octet!**\n\n**Could we form a double bond?**\nYes, we could draw F=B with a double bond to give B an octet. But this would put a +1 formal charge on F (very electronegative!) and −1 on B. This is unfavorable.\n\n**Best structure:** Three single bonds with boron having only **6 electrons**. Boron is electron-deficient and acts as a **Lewis acid** (electron pair acceptor).\n\nThis is why BF₃ readily reacts with molecules that can donate an electron pair (Lewis bases like NH₃).`
    },
    {
      id: 'ls-6-3',
      type: 'multiple-choice',
      title: 'Incomplete Octets',
      content: 'Identify molecules with incomplete octets.',
      exercise: {
        questions: [
          {
            question: 'Which of the following molecules has an incomplete octet on its central atom?',
            options: ['CCl₄', 'BeCl₂', 'NF₃', 'H₂O'],
            correctAnswer: 1,
            explanation: 'BeCl₂ has an incomplete octet. Beryllium forms 2 bonds with Cl and has 0 lone pairs, giving it only 4 electrons around it. C, N, and O all achieve full octets in their respective molecules.'
          }
        ]
      }
    },
    {
      id: 'ls-6-4',
      type: 'text',
      title: 'Expanded Octets: PCl₅ and SF₆',
      content: `Elements in **Period 3 and beyond** can accommodate more than 8 electrons because they have access to empty **d orbitals**.\n\n**PCl₅ (Phosphorus Pentachloride):**\n- Total valence e⁻: 5 + 5 × 7 = 40\n- P forms 5 single bonds to Cl (uses 10 e⁻)\n- Each Cl gets 3 lone pairs (30 e⁻)\n- P has **10 electrons** around it — expanded octet!\n- Geometry: trigonal bipyramidal\n\n**SF₆ (Sulfur Hexafluoride):**\n- Total valence e⁻: 6 + 6 × 7 = 48\n- S forms 6 single bonds to F (uses 12 e⁻)\n- Each F gets 3 lone pairs (36 e⁻)\n- S has **12 electrons** around it — expanded octet!\n- Geometry: octahedral\n\n**Critical rule for the AP exam:**\nOnly atoms from Period 3+ (P, S, Cl, Br, I, Xe, etc.) can have expanded octets. Period 2 atoms (C, N, O, F) **NEVER** exceed 8 electrons.`
    },
    {
      id: 'ls-6-5',
      type: 'input-boxes',
      title: 'Practice: Expanded Octets',
      content: 'Work through expanded octet examples.',
      exercise: {
        inputs: [
          {
            label: 'Total valence electrons in PCl₅',
            correctAnswer: '40',
            explanation: 'P has 5 and each Cl has 7. Total = 5 + 5(7) = 5 + 35 = 40.'
          },
          {
            label: 'How many electrons surround phosphorus in PCl₅?',
            correctAnswer: '10',
            explanation: 'Phosphorus forms 5 bonds × 2 electrons = 10 electrons around P. This exceeds the octet.'
          },
          {
            label: 'Total valence electrons in SF₆',
            correctAnswer: '48',
            explanation: 'S has 6 and each F has 7. Total = 6 + 6(7) = 6 + 42 = 48.'
          },
          {
            label: 'How many electrons surround sulfur in SF₆?',
            correctAnswer: '12',
            explanation: 'Sulfur forms 6 bonds × 2 electrons = 12 electrons around S. This is an expanded octet with 12 electrons.'
          }
        ]
      }
    },
    {
      id: 'ls-6-6',
      type: 'text',
      title: 'Odd-Electron Species (Free Radicals)',
      content: `When a molecule has an **odd number** of total valence electrons, it\'s impossible for every atom to have an octet. At least one atom will have an unpaired electron.\n\n**Example: NO (Nitric Oxide)**\n- Total valence e⁻: 5 + 6 = 11 (odd!)\n- Best Lewis structure: :N̈=Ö· (with an unpaired electron on N)\n- Nitrogen has 7 electrons around it — one short of an octet\n\n**Example: NO₂ (Nitrogen Dioxide)**\n- Total valence e⁻: 5 + 2 × 6 = 17 (odd!)\n- The unpaired electron sits on nitrogen\n- This is why NO₂ is a reactive, brown gas\n\n**Properties of free radicals:**\n- Extremely reactive (they want to pair that lone electron)\n- Often colored (absorb visible light)\n- Paramagnetic (attracted to magnetic fields due to unpaired electrons)\n- Many are important in atmospheric chemistry and biology\n\nOn the AP exam, if you count an odd number of total electrons, immediately recognize it as a radical species.`
    },
    {
      id: 'ls-6-7',
      type: 'dropdown-select',
      title: 'Classifying Octet Exceptions',
      content: 'Identify which type of octet exception each species represents.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-6-7-dd1',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 1,
            explanation: 'XeF₄ has an expanded octet. Xenon is in Period 5 and has 12 electrons around it (4 bonds + 2 lone pairs).'
          },
          {
            id: 'ls-6-7-dd2',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 0,
            explanation: 'AlCl₃ has an incomplete octet. Aluminum, like boron, forms only 3 bonds and has 6 electrons around it.'
          },
          {
            id: 'ls-6-7-dd3',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 2,
            explanation: 'ClO₂ has 19 total valence electrons (7 + 12 = 19), which is odd. It is a free radical with an unpaired electron on chlorine.'
          }
        ]
      }
    },
    {
      id: 'ls-6-8',
      type: 'multiple-choice',
      title: 'Expanded Octet Eligibility',
      content: 'Determine which atoms can have expanded octets.',
      exercise: {
        questions: [
          {
            question: 'Which of the following atoms can NEVER have an expanded octet?',
            options: ['Sulfur (Period 3)', 'Phosphorus (Period 3)', 'Nitrogen (Period 2)', 'Iodine (Period 5)'],
            correctAnswer: 2,
            explanation: 'Nitrogen is in Period 2 and does not have accessible d orbitals. Period 2 elements (C, N, O, F) can NEVER exceed 8 electrons. All other options (S, P, I) are in Period 3 or beyond and can accommodate expanded octets.'
          }
        ]
      }
    }
  ]
};
