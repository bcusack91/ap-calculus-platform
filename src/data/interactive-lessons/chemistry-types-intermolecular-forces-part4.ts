export const chemTypesIntermolecularForcesPart4Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-id-intro',
      type: 'text',
      title: 'Ion-Dipole Forces',
      content: `Ion-dipole forces occur between an **ion** (a charged particle) and a **polar molecule** (a dipole).\n\nThese forces are extremely important in chemistry because they explain how **ionic compounds dissolve** in polar solvents like water.\n\n**How they work:**\n- A **cation** (positive ion) attracts the $\\delta^-$ end of a polar molecule\n- An **anion** (negative ion) attracts the $\\delta^+$ end of a polar molecule\n\nIon-dipole forces are generally the **strongest** type of intermolecular force (stronger than hydrogen bonding, dipole-dipole, and LDF) because ions carry full charges rather than partial charges.\n\n$$\\boxed{\\text{Strength: Ion-Dipole} > \\text{H-bonding} > \\text{Dipole-Dipole} > \\text{LDF}}$$\n\n(This ranking is for forces between molecules of similar size)\n\n> 🔑 **Key Concept:** Ion-dipole forces are the strongest IMF because ions carry **full** charges, not partial charges like dipoles.

**Part 4 of 7 — Ion-Dipole Interactions**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'if-id-dissolving',
      type: 'text',
      title: 'Ion-Dipole Forces in Dissolving',
      content: `When NaCl dissolves in water, here\'s what happens at the molecular level:\n\n**Step 1:** Water molecules orient around the ions on the crystal surface.\n- The $\\delta^-$ oxygen end of water points toward $\\text{Na}^+$ cations\n- The $\\delta^+$ hydrogen end of water points toward $\\text{Cl}^-$ anions\n\n**Step 2:** Ion-dipole attractions between water and the ions on the surface become strong enough to overcome the ionic bonds holding the crystal together.\n\n**Step 3:** Individual ions are pulled away from the crystal and become **hydrated** (surrounded by a shell of water molecules). This shell is called a **hydration shell** or **solvation shell**.\n\n$$\\boxed{\\text{NaCl}(s) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+(aq) + \\text{Cl}^-(aq)}$$\n\nThe (aq) symbol means the ion is surrounded by water molecules — held by ion-dipole forces.`
    },
    {
      id: 'if-id-dissolving-q',
      type: 'multiple-choice',
      title: 'Understanding Dissolution',
      content: 'Ion-dipole forces are central to the dissolution of ionic compounds.',
      exercise: {
        questions: [
          {
            question: 'When NaCl dissolves in water, what type of force attracts Na⁺ ions to water molecules?',
            options: [
              'London Dispersion Forces',
              'Hydrogen bonding',
              'Ion-dipole forces',
              'Covalent bonding'
            ],
            correctAnswer: 2,
            explanation: 'Na⁺ is a cation (full positive charge) and water is a polar molecule (has a dipole). The attraction between them is an ion-dipole force. The δ- oxygen end of water is attracted to the positive Na⁺ ion.'
          },
          {
            question: 'When Cl⁻ is dissolved in water, which part of the water molecule is oriented toward the Cl⁻ ion?',
            options: [
              'The oxygen (δ-) end',
              'The hydrogen (δ+) end',
              'Neither — water ignores anions',
              'The lone pairs on oxygen'
            ],
            correctAnswer: 1,
            explanation: 'Cl⁻ is a negative ion, so it attracts the positive end of the water dipole. The δ+ hydrogen atoms of water orient toward the Cl⁻ ion, forming ion-dipole attractions.'
          }
        ]
      }
    },
    {
      id: 'if-id-dropdown-orientation',
      type: 'dropdown-select',
      title: 'Ion-Dipole Orientation',
      content: 'Select which end of the water molecule is attracted to each ion.',
      exercise: {
        dropdowns: [
          {
            id: 'id-cation',
            label: 'A cation ($+$) attracts which end of water?',
            options: ['The δ+ hydrogen end', 'The δ- oxygen end', 'Neither end'],
            correctIndex: 1,
            explanation: 'Cations (positive ions like Na⁺, K⁺, Ca²⁺) attract the δ- oxygen end of water because opposite charges attract.'
          },
          {
            id: 'id-anion',
            label: 'An anion ($-$) attracts which end of water?',
            options: ['The δ+ hydrogen end', 'The δ- oxygen end', 'Neither end'],
            correctIndex: 0,
            explanation: 'Anions (negative ions like Cl⁻, Br⁻, NO₃⁻) attract the δ+ hydrogen end of water because opposite charges attract.'
          }
        ]
      }
    },
    {
      id: 'if-id-strength-factors',
      type: 'text',
      title: 'Factors Affecting Ion-Dipole Strength',
      content: `The strength of ion-dipole forces depends on two main factors:\n\n**1. Charge of the ion**\nHigher charge $\\rightarrow$ stronger ion-dipole force\n- $\\text{Mg}^{2+}$ creates stronger ion-dipole forces than $\\text{Na}^+$\n- $\\text{Al}^{3+}$ creates even stronger ion-dipole forces\n\n**2. Size of the ion**\nSmaller ion $\\rightarrow$ higher charge density $\\rightarrow$ stronger ion-dipole force\n- $\\text{Li}^+$ (small) creates stronger ion-dipole forces than $\\text{K}^+$ (larger)\n- Both have +1 charge, but Li⁺ concentrates that charge in a smaller volume\n\n**Charge density** = charge / volume\n\nThe combination of high charge and small size gives the highest charge density and the strongest ion-dipole interactions.\n\nThis is why salts of small, highly charged ions (like $\\text{MgCl}_2$) tend to have very exothermic heats of hydration.\n\n> 💡 **Tip:** Remember — higher charge AND smaller size = higher charge density = stronger ion-dipole forces.`
    },
    {
      id: 'if-id-strength-q',
      type: 'multiple-choice',
      title: 'Comparing Ion-Dipole Strength',
      content: 'Apply the factors that determine ion-dipole force strength.',
      exercise: {
        questions: [
          {
            question: 'Which ion would form the STRONGEST ion-dipole interactions with water?',
            options: [
              'K⁺ (charge +1, radius 138 pm)',
              'Na⁺ (charge +1, radius 102 pm)',
              'Mg²⁺ (charge +2, radius 72 pm)',
              'Cs⁺ (charge +1, radius 167 pm)'
            ],
            correctAnswer: 2,
            explanation: 'Mg²⁺ has both the highest charge (+2) and a small radius (72 pm), giving it the highest charge density. High charge density means the strongest ion-dipole interactions with water molecules.'
          },
          {
            question: 'Among the alkali metal cations Li⁺, Na⁺, K⁺, and Rb⁺ (all +1 charge), which has the most exothermic hydration enthalpy?',
            options: [
              'Rb⁺ — largest ion',
              'K⁺ — medium-large ion',
              'Na⁺ — medium ion',
              'Li⁺ — smallest ion'
            ],
            correctAnswer: 3,
            explanation: 'Li⁺ is the smallest of these cations, so it has the highest charge density. It forms the strongest ion-dipole interactions with water, releasing the most energy upon hydration (most exothermic hydration enthalpy).'
          }
        ]
      }
    },
    {
      id: 'if-id-like-dissolves-like',
      type: 'text',
      title: '"Like Dissolves Like"',
      content: `Ion-dipole forces help explain the famous rule **"like dissolves like"**:\n\n- **Ionic and polar solutes** dissolve well in **polar solvents** (like water)\n  - Ion-dipole forces stabilize the dissolved ions\n  - Example: NaCl dissolves in water\n\n- **Nonpolar solutes** dissolve well in **nonpolar solvents**\n  - LDF between solute and solvent replace similar LDF in pure substances\n  - Example: Oil (nonpolar) dissolves in hexane (nonpolar)\n\n- **Ionic/polar solutes** do NOT dissolve well in **nonpolar solvents**\n  - Nonpolar solvents cannot form ion-dipole forces\n  - The ionic bonds in the crystal are too strong to break without ion-dipole stabilization\n  - Example: NaCl does NOT dissolve in hexane\n\nThis principle is central to understanding solubility in AP Chemistry.\n\n> 🔑 **Key Concept:** "Like dissolves like" — ionic/polar solutes dissolve in polar solvents (via ion-dipole forces), nonpolar solutes dissolve in nonpolar solvents (via LDF).`
    },
    {
      id: 'if-id-input-summary',
      type: 'input-boxes',
      title: 'Ion-Dipole Key Facts',
      content: 'Complete the following statements about ion-dipole forces.',
      exercise: {
        inputs: [
          {
            label: 'Ion-dipole forces occur between an ion and a _____ molecule (polar/nonpolar)',
            correctAnswer: 'polar',
            explanation: 'Ion-dipole forces require both an ion (with a full charge) and a polar molecule (with a dipole). This is why ionic compounds dissolve in polar solvents but not in nonpolar solvents.'
          },
          {
            label: 'A cation attracts the δ_____ end of a water molecule (+/-)',
            correctAnswer: '-',
            explanation: 'A cation is positive, so it attracts the δ- (negative) end of water — the oxygen atom. Opposite charges attract.'
          }
        ]
      }
    }
  ]
};
