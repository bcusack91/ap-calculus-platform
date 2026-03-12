export const chemTypesIntermolecularForcesPart3Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-hb-intro',
      type: 'text',
      title: 'Hydrogen Bonding',
      content: `Hydrogen bonding is a **special, extra-strong** type of dipole-dipole force. It occurs when hydrogen is covalently bonded to one of three highly electronegative atoms:\n\n$$\\text{N, O, or F}$$\n\nThe H atom in an N–H, O–H, or F–H bond carries a very large \\(\\delta^+\\) charge because N, O, and F are so electronegative. This strongly positive H is then attracted to a **lone pair** on an N, O, or F atom of a neighboring molecule.\n\n**Critical AP Concept:** Despite its name, a hydrogen "bond" is NOT a chemical bond — it is an intermolecular force (an attraction between molecules). It is much weaker than a covalent or ionic bond but much stronger than typical dipole-dipole forces or LDF.\n\nMnemonic: Hydrogen bonding requires **"FON"** — Fluorine, Oxygen, or Nitrogen bonded to H.`
    },
    {
      id: 'if-hb-not-a-bond',
      type: 'multiple-choice',
      title: 'Hydrogen "Bond" — A Misnomer',
      content: 'The name "hydrogen bond" is misleading. Let\'s clarify what it actually is.',
      exercise: {
        questions: [
          {
            question: 'Which statement about hydrogen bonding is CORRECT?',
            options: [
              'A hydrogen bond is a covalent bond between H and O',
              'A hydrogen bond is an intermolecular force, not a true chemical bond',
              'Hydrogen bonds are weaker than London Dispersion Forces',
              'Hydrogen bonds only occur in water'
            ],
            correctAnswer: 1,
            explanation: 'A hydrogen bond is an intermolecular force (IMF), NOT a chemical bond. It is an electrostatic attraction between a very δ+ hydrogen (bonded to N, O, or F) and a lone pair on a neighboring N, O, or F atom. It is much weaker than covalent or ionic bonds.'
          }
        ]
      }
    },
    {
      id: 'if-hb-requirements',
      type: 'text',
      title: 'Requirements for Hydrogen Bonding',
      content: `For a molecule to participate in hydrogen bonding, it needs BOTH of the following:\n\n**1. A hydrogen donor:** An H atom covalently bonded to N, O, or F\n- This H carries a large \\(\\delta^+\\) charge\n- Examples: O–H in water, N–H in ammonia, F–H in HF\n\n**2. A hydrogen acceptor:** A lone pair on an N, O, or F atom on a nearby molecule\n- This lone pair attracts the \\(\\delta^+\\) hydrogen\n- The acceptor atom must have available lone pairs\n\n**Common hydrogen bonding molecules:**\n- \\(\\text{H}_2\\text{O}\\) — both a donor (O–H) and acceptor (lone pairs on O)\n- \\(\\text{NH}_3\\) — both a donor (N–H) and acceptor (lone pair on N)\n- \\(\\text{HF}\\) — both a donor (F–H) and acceptor (lone pairs on F)\n- \\(\\text{CH}_3\\text{OH}\\) (methanol) — donor (O–H) and acceptor (lone pairs on O)\n- \\(\\text{CH}_3\\text{COOH}\\) (acetic acid) — donor (O–H) and acceptor (lone pairs on O)`
    },
    {
      id: 'if-hb-identify',
      type: 'multiple-choice',
      title: 'Which Molecules Hydrogen Bond?',
      content: 'Identify which molecules can form hydrogen bonds.',
      exercise: {
        questions: [
          {
            question: 'Which molecule can form hydrogen bonds with other molecules of the same kind?',
            options: [
              'CH₃OCH₃ (dimethyl ether)',
              'CH₃OH (methanol)',
              'CH₃CH₃ (ethane)',
              'CH₂Cl₂ (dichloromethane)'
            ],
            correctAnswer: 1,
            explanation: 'CH₃OH (methanol) has an O–H bond, so it has a hydrogen donor. The oxygen also has lone pairs, making it a hydrogen acceptor. It can form hydrogen bonds with itself. Dimethyl ether has lone pairs on O (acceptor) but no O–H, N–H, or F–H bond (no donor), so it cannot hydrogen bond with itself.'
          },
          {
            question: 'HCl has a polar H–Cl bond, but it does NOT form hydrogen bonds. Why?',
            options: [
              'HCl is not polar enough',
              'Chlorine is not electronegative',
              'Cl is not N, O, or F — hydrogen bonding requires H bonded to N, O, or F specifically',
              'HCl is a gas, and gases cannot have hydrogen bonds'
            ],
            correctAnswer: 2,
            explanation: 'Hydrogen bonding specifically requires H bonded to N, O, or F. While Cl is electronegative, it is not electronegative enough and its atomic radius is too large to create the exceptionally strong δ+ on H needed for hydrogen bonding. HCl only has dipole-dipole forces and LDF.'
          }
        ]
      }
    },
    {
      id: 'if-hb-dropdown-check',
      type: 'dropdown-select',
      title: 'Hydrogen Bonding Checklist',
      content: 'For each molecule, select whether it can form hydrogen bonds with itself.',
      exercise: {
        dropdowns: [
          {
            id: 'hb-water',
            options: ['Yes — can hydrogen bond', 'No — cannot hydrogen bond'],
            correctIndex: 0,
            explanation: 'H₂O has O–H bonds (donor) and lone pairs on O (acceptor). It forms strong hydrogen bonds, explaining its unusually high boiling point.'
          },
          {
            id: 'hb-ch4',
            options: ['Yes — can hydrogen bond', 'No — cannot hydrogen bond'],
            correctIndex: 1,
            explanation: 'CH₄ has C–H bonds. Carbon is not N, O, or F, so CH₄ cannot form hydrogen bonds. It only has LDF.'
          },
          {
            id: 'hb-nh3',
            options: ['Yes — can hydrogen bond', 'No — cannot hydrogen bond'],
            correctIndex: 0,
            explanation: 'NH₃ has N–H bonds (donor) and a lone pair on N (acceptor). It can form hydrogen bonds.'
          },
          {
            id: 'hb-hf',
            options: ['Yes — can hydrogen bond', 'No — cannot hydrogen bond'],
            correctIndex: 0,
            explanation: 'HF has an F–H bond (donor) and lone pairs on F (acceptor). It forms hydrogen bonds.'
          }
        ]
      }
    },
    {
      id: 'if-hb-water-anomalies',
      type: 'text',
      title: 'Hydrogen Bonding in Water',
      content: `Water is the most famous example of hydrogen bonding, and it explains many of water\'s unusual properties:\n\n**1. Unusually high boiling point**\nWater (\\(\\text{H}_2\\text{O}\\), MW = 18) boils at 100°C. Compare this to \\(\\text{H}_2\\text{S}\\) (MW = 34), which boils at -60°C. Despite being lighter, water has a MUCH higher boiling point because of hydrogen bonding.\n\n**2. Ice is less dense than liquid water**\nHydrogen bonds in ice form a rigid, open crystal structure with hexagonal symmetry. This creates more empty space than in liquid water, making ice less dense — which is why ice floats.\n\n**3. High surface tension**\nStrong hydrogen bonds at the surface create a "skin" that resists breaking, allowing insects to walk on water.\n\n**4. High specific heat capacity**\nEnergy is needed to break hydrogen bonds before the temperature can rise, so water resists temperature changes.\n\nEach water molecule can form up to **4 hydrogen bonds** (2 as donor through its 2 O–H bonds, 2 as acceptor through its 2 lone pairs).`
    },
    {
      id: 'if-hb-water-q',
      type: 'multiple-choice',
      title: 'Water\'s Unique Properties',
      content: 'Hydrogen bonding explains many of water\'s anomalous properties.',
      exercise: {
        questions: [
          {
            question: 'Water (H₂O, MW = 18) has a much higher boiling point than H₂S (MW = 34). What is the primary reason?',
            options: [
              'Water has a higher molar mass',
              'Water has stronger London Dispersion Forces',
              'Water has hydrogen bonding while H₂S does not',
              'H₂S is a nonpolar molecule'
            ],
            correctAnswer: 2,
            explanation: 'Water has O–H bonds that allow hydrogen bonding, giving it much stronger IMF than H₂S. Sulfur is not N, O, or F, so H₂S cannot form hydrogen bonds — it only has dipole-dipole forces and LDF. Despite water\'s lower molar mass, its hydrogen bonding gives it a much higher boiling point.'
          },
          {
            question: 'How many hydrogen bonds can a single water molecule form at maximum?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 3,
            explanation: 'Each water molecule can form up to 4 hydrogen bonds: 2 through its two O–H bonds (as a donor) and 2 through its two lone pairs on oxygen (as an acceptor).'
          }
        ]
      }
    },
    {
      id: 'if-hb-input-review',
      type: 'input-boxes',
      title: 'Hydrogen Bonding Review',
      content: 'Complete these key facts about hydrogen bonding.',
      exercise: {
        inputs: [
          {
            label: 'Hydrogen bonding requires H bonded to which three elements? (List letters: N, O, F)',
            correctAnswer: 'N, O, F',
            explanation: 'Hydrogen bonding specifically requires hydrogen to be covalently bonded to nitrogen (N), oxygen (O), or fluorine (F) — the three most electronegative elements with small atomic radii.'
          },
          {
            label: 'Is a hydrogen bond a true chemical bond or an intermolecular force? (type "intermolecular force")',
            correctAnswer: 'intermolecular force',
            explanation: 'Despite its name, a hydrogen bond is an intermolecular force — an attraction BETWEEN molecules. It is NOT a covalent, ionic, or metallic bond.'
          }
        ]
      }
    }
  ]
};
