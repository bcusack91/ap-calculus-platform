export const chemLewisStructuresFormalChargePart6Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-6-1',
      type: 'text',
      title: '⚠️ Exceptions to the Octet Rule',
      content: `While the octet rule works for most molecules, there are three important categories of exceptions:\n\n**1. Incomplete Octets** — fewer than 8 electrons around the central atom\n- Elements: Be $(4 e^{-})$, B $(6 e^{-})$, Al $(6 e^{-})$\n- Example: $BF_{3}$ — boron has only 6 electrons\n\n**2. Expanded Octets** — more than 8 electrons around the central atom\n- Only elements in **Period 3 and beyond** (they have empty d orbitals)\n- Examples: $PCl_{5}$ $(10 e^{-})$, $SF_{6}$ $(12 e^{-})$, $XeF_{2}$ $(10 e^{-})$\n- Elements from Period 2 (C, N, O, F) can **NEVER** exceed 8\n\n**3. Odd-Electron Species** — molecules with an odd number of total electrons\n- At least one atom cannot have an octet\n- Examples: NO $(11 e^{-})$, $NO_{2}$ $(17 e^{-})$\n- These are called **free radicals**\n\nRecognizing which exception applies is a critical AP Chemistry skill.\n\n> 🔑 **Key Concept:** The three octet rule exceptions are: incomplete octets (Be, B, Al), expanded octets (Period 3+ elements), and odd-electron species (free radicals).

**Part 6 of 7 — Problem-Solving Workshop**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'ls-6-2',
      type: 'text',
      title: 'Incomplete Octets: $BF_{3}$',
      content: `Boron trifluoride $(BF_{3})$ is the classic example of an incomplete octet.\n\n**Step 1:** Total valence electrons = 3 (B) + 3 × 7 (F) = 24\n\n**Step 2:** Boron is the central atom\n\n**Step 3:** Three B—F single bonds use 6 $e^{-}$. Remaining: 18 $e^{-}$\n\n**Step 4:** Give each F 3 lone pairs (9 lone pairs = 18 $e^{-}$). All remaining electrons used.\n\n**Step 5:** Check octets:\n- Each F: 2 (bond) + 6 (lone pairs) = 8 ✓\n- B: only 6 $e^{-}$ (3 bonds) — **incomplete octet!**\n\n**Could we form a double bond?**\nYes, we could draw F=B with a double bond to give B an octet. But this would put a +1 formal charge on F (very electronegative!) and −1 on B. This is unfavorable.\n\n**Best structure:** Three single bonds with boron having only **6 electrons**. Boron is electron-deficient and acts as a **Lewis acid** (electron pair acceptor).\n\nThis is why $BF_{3}$ readily reacts with molecules that can donate an electron pair (Lewis bases like $NH_{3}$).`
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
            options: ['$CCl_{4}$', '$BeCl_{2}$', '$NF_{3}$', '$H_{2}O$'],
            correctAnswer: 1,
            explanation: '$BeCl_{2}$ has an incomplete octet. Beryllium forms 2 bonds with Cl and has 0 lone pairs, giving it only 4 electrons around it. C, N, and O all achieve full octets in their respective molecules.'
          }
        ]
      }
    },
    {
      id: 'ls-6-4',
      type: 'text',
      title: '📈 Expanded Octets: $PCl_{5}$ and $SF_{6}$',
      content: `Elements in **Period 3 and beyond** can accommodate more than 8 electrons because they have access to empty **d orbitals**.\n\$n\\cdot \\cdot PCl_{5}$ (Phosphorus Pentachloride):**\n- Total valence $e^{-}$: 5 + 5 × 7 = 40\n- P forms 5 single bonds to Cl $(uses 10 e^{-})$\n- Each Cl gets 3 lone pairs $(30 e^{-})$\n- P has **10 electrons** around it — expanded octet!\n- Geometry: trigonal bipyramidal\n\$n\\cdot \\cdot SF_{6}$ (Sulfur Hexafluoride):**\n- Total valence $e^{-}$: 6 + 6 × 7 = 48\n- S forms 6 single bonds to F $(uses 12 e^{-})$\n- Each F gets 3 lone pairs $(36 e^{-})$\n- S has **12 electrons** around it — expanded octet!\n- Geometry: octahedral\n\n**Critical rule for the AP exam:**\nOnly atoms from Period 3+ (P, S, Cl, Br, I, Xe, etc.) can have expanded octets. Period 2 atoms (C, N, O, F) **NEVER** exceed 8 electrons.\n\n> ⚠️ **Warning:** Only atoms from Period 3 and beyond can have expanded octets. Period 2 elements (C, N, O, F) can NEVER exceed 8 electrons — this is a common AP exam trap!`
    },
    {
      id: 'ls-6-5',
      type: 'input-boxes',
      title: 'Practice: Expanded Octets',
      content: 'Work through expanded octet examples.',
      exercise: {
        inputs: [
          {
            label: '**1.** Total valence electrons in $PCl_{5}$',
            correctAnswer: '40',
            explanation: 'P has 5 and each Cl has 7. Total = 5 + 5(7) = 5 + 35 = 40.'
          },
          {
            label: '**2.** How many electrons surround phosphorus in $PCl_{5}$?',
            correctAnswer: '10',
            explanation: 'Phosphorus forms 5 bonds × 2 electrons = 10 electrons around P. This exceeds the octet.'
          },
          {
            label: '**3.** Total valence electrons in $SF_{6}$',
            correctAnswer: '48',
            explanation: 'S has 6 and each F has 7. Total = 6 + 6(7) = 6 + 42 = 48.'
          },
          {
            label: '**4.** How many electrons surround sulfur in $SF_{6}$?',
            correctAnswer: '12',
            explanation: 'Sulfur forms 6 bonds × 2 electrons = 12 electrons around S. This is an expanded octet with 12 electrons.'
          }
        ]
      }
    },
    {
      id: 'ls-6-6',
      type: 'text',
      title: '🧪 Odd-Electron Species (Free Radicals)',
      content: `When a molecule has an **odd number** of total valence electrons, it\'s impossible for every atom to have an octet. At least one atom will have an unpaired electron.\n\n**Example: NO (Nitric Oxide)**\n- Total valence $e^{-}$: 5 + 6 = 11 (odd!)\n- Best Lewis structure: :N̈=Ö· (with an unpaired electron on N)\n- Nitrogen has 7 electrons around it — one short of an octet\n\n**Example: $NO_{2}$ (Nitrogen Dioxide)**\n- Total valence $e^{-}$: 5 + 2 × 6 = 17 (odd!)\n- The unpaired electron sits on nitrogen\n- This is why $NO_{2}$ is a reactive, brown gas\n\n**Properties of free radicals:**\n- Extremely reactive (they want to pair that lone electron)\n- Often colored (absorb visible light)\n- Paramagnetic (attracted to magnetic fields due to unpaired electrons)\n- Many are important in atmospheric chemistry and biology\n\nOn the AP exam, if you count an odd number of total electrons, immediately recognize it as a radical species.`
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
            label: '$XeF_{4}$ — what type of octet exception does xenon exhibit?',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 1,
            explanation: '$XeF_{4}$ has an expanded octet. Xenon is in Period 5 and has 12 electrons around it (4 bonds + 2 lone pairs).'
          },
          {
            id: 'ls-6-7-dd2',
            label: '$AlCl_{3}$ — what type of octet exception does aluminum exhibit?',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 0,
            explanation: '$AlCl_{3}$ has an incomplete octet. Aluminum, like boron, forms only 3 bonds and has 6 electrons around it.'
          },
          {
            id: 'ls-6-7-dd3',
            label: '$ClO_{2}$ has a total of 19 valence electrons. What type of exception is this?',
            options: ['Incomplete octet', 'Expanded octet', 'Odd-electron species'],
            correctIndex: 2,
            explanation: '$ClO_{2}$ has 19 total valence electrons (7 + 12 = 19), which is odd. It is a free radical with an unpaired electron on chlorine.'
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
