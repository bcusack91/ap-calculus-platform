export const chemLewisStructuresFormalChargePart3Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-3-1',
      type: 'text',
      title: 'When Single Bonds Aren\'t Enough',
      content: `Sometimes, after placing all single bonds and distributing lone pairs to the outer atoms, the central atom **still doesn\'t have an octet**. When this happens, you must form **multiple bonds**.\n\n**The fix:** Convert one or more lone pairs from an adjacent atom into bonding pairs (additional bonds).\n\n- Converting 1 lone pair → **double bond** (4 shared electrons)\n- Converting 2 lone pairs → **triple bond** (6 shared electrons)\n\n**How to know when you need multiple bonds:**\nAfter Step 4 of the algorithm, check the central atom\'s electron count. If it\'s less than 8, you need to form multiple bonds.\n\n**Important:** Multiple bonds are most commonly formed between:\n- C, N, O, and S (second-period and some third-period elements)\n- These atoms are small enough for effective side-by-side (pi) orbital overlap`
    },
    {
      id: 'ls-3-2',
      type: 'text',
      title: 'Example: O₂ (Oxygen Gas)',
      content: `Let\'s draw the Lewis structure for O₂.\n\n**Step 1:** Total valence electrons = 6 + 6 = 12\n\n**Step 2:** Neither atom is "central" — it\'s a diatomic molecule: O—O\n\n**Step 3:** Single bond: O—O uses 2 e⁻. Remaining: 10 e⁻\n\n**Step 4:** Distribute remaining electrons:\n- Each O gets 3 lone pairs first attempt\n- But wait — 3 lone pairs × 2 atoms = 12 e⁻, and we only have 10\n- Give each O as many lone pairs as possible: that\'s 5 e⁻ each... but e⁻ come in pairs\n- Give 3 lone pairs to one O (6 e⁻) and 2 lone pairs to the other (4 e⁻) → uses 10 ✓\n- But the second O only has 2 + 4 = 6 e⁻ — no octet!\n\n**Step 5:** Convert 1 lone pair from the first O into a second bond:\n- O=O (double bond)\n- Each O: 4 e⁻ (double bond) + 4 e⁻ (2 lone pairs) = 8 ✓\n\nTotal electrons used: 4 (double bond) + 2 × 4 (lone pairs) = 12 ✓`
    },
    {
      id: 'ls-3-3',
      type: 'multiple-choice',
      title: 'Multiple Bonds in O₂',
      content: 'Test your understanding of the O₂ Lewis structure.',
      exercise: {
        questions: [
          {
            question: 'How many lone pairs does each oxygen atom have in the Lewis structure of O₂?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 1,
            explanation: 'In O=O, each oxygen has a double bond (4 e⁻) and 2 lone pairs (4 e⁻), giving each atom 8 electrons total. Two lone pairs per oxygen.'
          }
        ]
      }
    },
    {
      id: 'ls-3-4',
      type: 'text',
      title: 'Example: N₂ (Nitrogen Gas)',
      content: `Nitrogen gas (N₂) contains one of the strongest bonds in chemistry — a **triple bond**.\n\n**Step 1:** Total valence electrons = 5 + 5 = 10\n\n**Step 3:** Single bond N—N uses 2 e⁻. Remaining: 8 e⁻\n\n**Step 4:** Distribute to fill octets:\n- With a single bond, each N has 2 e⁻ from the bond\n- Each N needs 6 more → total needed = 12 e⁻, but only 8 remain\n- Not enough for single bond!\n\n**Step 5:** Form multiple bonds:\n- Try double bond: each N has 4 (bond) + needs 4 more = 8 total. Remaining after double bond: 10 − 4 = 6 e⁻. Give 3 e⁻ to each → only 1.5 lone pairs each. Not ideal.\n- Try **triple bond**: N≡N uses 6 e⁻. Remaining: 10 − 6 = 4 e⁻\n- Give each N 1 lone pair (2 e⁻ each): 4 e⁻ used ✓\n- Each N: 6 (triple bond) + 2 (lone pair) = 8 ✓\n\n**Final structure:** :N≡N: with 1 lone pair on each nitrogen.`
    },
    {
      id: 'ls-3-5',
      type: 'input-boxes',
      title: 'Practice: CO₂ Lewis Structure',
      content: 'Carbon dioxide (CO₂) has the arrangement O—C—O. Work through the algorithm.',
      exercise: {
        inputs: [
          {
            label: 'Total valence electrons in CO₂',
            correctAnswer: '16',
            explanation: 'C has 4 and each O has 6. Total = 4 + 2(6) = 16 valence electrons.'
          },
          {
            label: 'Electrons remaining after drawing 2 single C—O bonds',
            correctAnswer: '12',
            explanation: '2 bonds × 2 e⁻ = 4 electrons used. 16 − 4 = 12 electrons remain.'
          },
          {
            label: 'After placing 3 lone pairs on each O (12 e⁻ used), how many electrons does the central carbon have?',
            correctAnswer: '4',
            explanation: 'Carbon has only 2 e⁻ from each single bond = 4 e⁻ total. It needs 8, so it\'s short by 4 electrons. We need to form double bonds.'
          },
          {
            label: 'How many double bonds does CO₂ have in its final Lewis structure?',
            correctAnswer: '2',
            explanation: 'CO₂ has the structure O=C=O with two double bonds. Each O converts 1 lone pair into a bonding pair. C: 2 × 4 = 8 e⁻ ✓. Each O: 4 (double bond) + 4 (2 lone pairs) = 8 e⁻ ✓.'
          }
        ]
      }
    },
    {
      id: 'ls-3-6',
      type: 'text',
      title: 'Bond Strength and Bond Length',
      content: `Multiple bonds differ from single bonds in both strength and length:\n\n| Bond Type | Bond Order | Relative Strength | Relative Length |\n|-----------|-----------|-------------------|----------------|\n| Single (—) | 1 | Weakest | Longest |\n| Double (=) | 2 | Moderate | Moderate |\n| Triple (≡) | 3 | Strongest | Shortest |\n\n**Key trends:**\n- More shared electrons → stronger bond → shorter bond\n- N≡N bond energy ≈ 946 kJ/mol (very strong!)\n- This is why N₂ is so unreactive — it takes enormous energy to break the triple bond\n\n**Bond order** = number of bonding pairs between two atoms\n- Single bond: bond order = 1\n- Double bond: bond order = 2\n- Triple bond: bond order = 3`
    },
    {
      id: 'ls-3-7',
      type: 'dropdown-select',
      title: 'Comparing Bond Types',
      content: 'Select the correct bond type for each molecule.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-3-7-dd1',
            label: 'N₂ has a _______ (N≡N) to satisfy the octet rule for both nitrogen atoms',
            options: ['Single bond', 'Double bond', 'Triple bond'],
            correctIndex: 2,
            explanation: 'N₂ has a triple bond (N≡N) to satisfy the octet rule for both nitrogen atoms.'
          },
          {
            id: 'ls-3-7-dd2',
            label: 'O₂ has a _______ (O=O) in its Lewis structure',
            options: ['Single bond', 'Double bond', 'Triple bond'],
            correctIndex: 1,
            explanation: 'O₂ has a double bond (O=O) in its Lewis structure.'
          },
          {
            id: 'ls-3-7-dd3',
            label: 'F₂ has a _______ (F—F)',
            options: ['Single bond', 'Double bond', 'Triple bond'],
            correctIndex: 0,
            explanation: 'F₂ has a single bond (F—F). Each fluorine has 7 valence electrons and only needs 1 more, so a single bond suffices.'
          }
        ]
      }
    },
    {
      id: 'ls-3-8',
      type: 'multiple-choice',
      title: 'Bond Length Comparison',
      content: 'Apply your knowledge of bond order, strength, and length.',
      exercise: {
        questions: [
          {
            question: 'Which molecule has the shortest bond length?',
            options: ['F₂ (single bond)', 'O₂ (double bond)', 'N₂ (triple bond)', 'Cl₂ (single bond)'],
            correctAnswer: 2,
            explanation: 'N₂ has a triple bond, which is the highest bond order among these choices. Higher bond order means shorter bond length. Also, nitrogen atoms are smaller than chlorine atoms, further shortening the bond.'
          }
        ]
      }
    }
  ]
};
