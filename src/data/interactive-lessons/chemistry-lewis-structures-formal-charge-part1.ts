export const chemLewisStructuresFormalChargePart1Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-1-1',
      type: 'text',
      title: 'What Are Valence Electrons?',
      content: `Valence electrons are the electrons in the outermost energy level (shell) of an atom. These are the electrons that participate in chemical bonding and determine an element\'s chemical properties.\n\nFor **main group elements** (Groups 1, 2, and 13–18), the number of valence electrons equals the group number:\n\n| Group | Valence e⁻ | Examples |\n|-------|-----------|----------|\n| 1 | 1 | H, Li, Na |\n| 2 | 2 | Be, Mg, Ca |\n| 13 | 3 | B, Al |\n| 14 | 4 | C, Si |\n| 15 | 5 | N, P |\n| 16 | 6 | O, S |\n| 17 | 7 | F, Cl, Br |\n| 18 | 8 | Ne, Ar (except He = 2) |\n\nKnowing the number of valence electrons is the **first step** in drawing any Lewis structure.`
    },
    {
      id: 'ls-1-2',
      type: 'multiple-choice',
      title: 'Identifying Valence Electrons',
      content: 'How many valence electrons does a nitrogen (N) atom have?',
      exercise: {
        questions: [
          {
            question: 'Nitrogen is in Group 15 of the periodic table. How many valence electrons does it have?',
            options: ['3', '4', '5', '7'],
            correctAnswer: 2,
            explanation: 'Nitrogen is in Group 15, so it has 5 valence electrons. The group number for main group elements directly tells you the valence electron count.'
          }
        ]
      }
    },
    {
      id: 'ls-1-3',
      type: 'text',
      title: 'The Octet Rule',
      content: `The **octet rule** states that atoms tend to gain, lose, or share electrons until they have **eight electrons** in their valence shell. This gives them the same electron configuration as the nearest noble gas.\n\n**Key points:**\n- Most atoms want 8 valence electrons (an octet)\n- **Hydrogen is an exception** — it only needs 2 electrons (a duet) to match helium\n- Atoms achieve octets by forming **covalent bonds** (sharing electrons) or **ionic bonds** (transferring electrons)\n\n**Why does the octet rule work?**\n\nNoble gases (Group 18) are extremely stable because their valence shells are completely filled. Other atoms "want" to achieve this same stable configuration.\n\nFor example, oxygen has 6 valence electrons and needs 2 more to complete its octet. It can share 2 electrons with another atom by forming bonds.`
    },
    {
      id: 'ls-1-4',
      type: 'multiple-choice',
      title: 'The Octet Rule in Practice',
      content: 'Apply the octet rule to determine bonding behavior.',
      exercise: {
        questions: [
          {
            question: 'How many additional electrons does chlorine (Cl, Group 17) need to complete its octet?',
            options: ['1', '2', '3', '7'],
            correctAnswer: 0,
            explanation: 'Chlorine has 7 valence electrons (Group 17) and needs 8 − 7 = 1 more electron to complete its octet. This is why chlorine commonly forms one covalent bond or gains one electron to become Cl⁻.'
          }
        ]
      }
    },
    {
      id: 'ls-1-5',
      type: 'text',
      title: 'Counting Total Valence Electrons in a Molecule',
      content: `Before drawing a Lewis structure, you must count the **total number of valence electrons** in the molecule or ion.\n\n**Steps:**\n1. Count the valence electrons for each atom\n2. Add them all together\n3. For **anions** (negative charge): add electrons equal to the charge\n4. For **cations** (positive charge): subtract electrons equal to the charge\n\n**Example 1: H₂O**\n- H: 1 valence e⁻ \\times 2 atoms = 2\n- O: 6 valence e⁻ \\times 1 atom = 6\n- Total = 2 + 6 = **8 valence electrons**\n\n**Example 2: CO₃²⁻ (carbonate ion)**\n- C: 4 valence e⁻ \\times 1 = 4\n- O: 6 valence e⁻ \\times 3 = 18\n- Add 2 for the 2− charge = +2\n- Total = 4 + 18 + 2 = **24 valence electrons**`
    },
    {
      id: 'ls-1-6',
      type: 'input-boxes',
      title: 'Practice: Counting Valence Electrons',
      content: 'Count the total valence electrons for each species.',
      exercise: {
        inputs: [
          {
            label: 'Total valence electrons in NH₃ (nitrogen has 5, each hydrogen has 1)',
            correctAnswer: '8',
            explanation: 'N contributes 5 valence e⁻ and each H contributes 1. Total = 5 + 3(1) = 8 valence electrons.'
          },
          {
            label: 'Total valence electrons in CO₂ (carbon has 4, each oxygen has 6)',
            correctAnswer: '16',
            explanation: 'C contributes 4 valence e⁻ and each O contributes 6. Total = 4 + 2(6) = 4 + 12 = 16 valence electrons.'
          },
          {
            label: 'Total valence electrons in OH⁻ (oxygen has 6, hydrogen has 1, plus 1 for the negative charge)',
            correctAnswer: '8',
            explanation: 'O contributes 6, H contributes 1, and we add 1 for the negative charge. Total = 6 + 1 + 1 = 8 valence electrons.'
          }
        ]
      }
    },
    {
      id: 'ls-1-7',
      type: 'dropdown-select',
      title: 'Valence Electron Quick Check',
      content: 'Select the correct number of valence electrons for each element.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-1-7-dd1',
            options: ['2', '4', '6', '8'],
            correctIndex: 1,
            explanation: 'Carbon is in Group 14, so it has 4 valence electrons.'
          },
          {
            id: 'ls-1-7-dd2',
            options: ['5', '6', '7', '8'],
            correctIndex: 1,
            explanation: 'Sulfur is in Group 16, so it has 6 valence electrons.'
          },
          {
            id: 'ls-1-7-dd3',
            options: ['1', '2', '3', '4'],
            correctIndex: 0,
            explanation: 'Hydrogen is in Group 1, so it has 1 valence electron.'
          }
        ]
      }
    },
    {
      id: 'ls-1-8',
      type: 'multiple-choice',
      title: 'Ions and Valence Electron Counts',
      content: 'Counting valence electrons in polyatomic ions requires adjusting for the charge.',
      exercise: {
        questions: [
          {
            question: 'How many total valence electrons are in the ammonium ion, NH₄⁺?',
            options: ['8', '9', '10', '7'],
            correctAnswer: 0,
            explanation: 'N has 5 valence e⁻, each H has 1 (4 × 1 = 4), and we subtract 1 for the positive charge. Total = 5 + 4 − 1 = 8 valence electrons.'
          }
        ]
      }
    }
  ]
};
