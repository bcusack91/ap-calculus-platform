export const chemTypesIntermolecularForcesPart1Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-ldf-intro',
      type: 'text',
      title: 'London Dispersion Forces (LDF)',
      content: `London Dispersion Forces are the **weakest** type of intermolecular force, but they are present in **ALL** molecules and atoms — polar and nonpolar alike.\n\nThey arise from **temporary (instantaneous) dipoles** caused by the random motion of electrons. At any given moment, electrons may be unevenly distributed around a nucleus, creating a brief dipole that can **induce** a dipole in a neighboring molecule.\n\nKey terminology:\n- **Instantaneous dipole**: A temporary, fleeting charge separation in any atom or molecule\n- **Induced dipole**: A dipole created in a neighboring particle by the electric field of the instantaneous dipole\n- LDF are also called **van der Waals forces** or **dispersion forces**\n\n---\n\n> 🔑 **Key Concept:** LDF are present in **ALL** molecules and atoms — polar and nonpolar alike. They are the only IMF in nonpolar substances.

**Part 1 of 7 — London Dispersion Forces**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'if-ldf-universality',
      type: 'multiple-choice',
      title: 'LDF Are Universal',
      content: 'London Dispersion Forces are unique among intermolecular forces because of one critical property.',
      exercise: {
        questions: [
          {
            question: 'Which statement about London Dispersion Forces is correct?',
            options: [
              'They only exist in nonpolar molecules',
              'They are present in ALL molecules and atoms',
              'They only exist between ions and polar molecules',
              'They require permanent dipoles to occur'
            ],
            correctAnswer: 1,
            explanation: 'London Dispersion Forces are present in ALL molecules and atoms — both polar and nonpolar. They arise from temporary fluctuations in electron distribution, which occur in every particle that has electrons.'
          }
        ]
      }
    },
    {
      id: 'if-ldf-mechanism',
      type: 'text',
      title: 'How LDF Arise',
      content: `Here\'s the step-by-step mechanism for London Dispersion Forces:\n\n**Step 1:** Electrons in an atom or molecule are constantly moving. At any instant, there may be more electrons on one side than the other.\n\n**Step 2:** This uneven distribution creates a **temporary dipole** (instantaneous dipole) with a partial negative side ($\\delta^-$) and a partial positive side ($\\delta^+$).\n\n**Step 3:** The electric field of this temporary dipole **distorts** the electron cloud of a neighboring molecule, creating an **induced dipole**.\n\n**Step 4:** The two dipoles attract each other — the $\\delta^+$ end of one molecule attracts the $\\delta^-$ end of the neighbor.\n\n**Step 5:** These attractions are extremely short-lived, constantly forming and breaking, but their cumulative effect creates a net attractive force.`
    },
    {
      id: 'if-ldf-mechanism-check',
      type: 'dropdown-select',
      title: 'LDF Mechanism Check',
      content: 'Fill in the blanks to describe how London Dispersion Forces form.',
      exercise: {
        dropdowns: [
          {
            id: 'ldf-step1',
            label: 'LDF begin with a _____ dipole caused by electron motion',
            options: ['permanent', 'temporary', 'ionic'],
            correctIndex: 1,
            explanation: 'LDF begin with a temporary (instantaneous) dipole caused by random electron motion.'
          },
          {
            id: 'ldf-step2',
            label: 'This temporary dipole _____ a dipole in a neighboring molecule',
            options: ['repels', 'destroys', 'induces'],
            correctIndex: 2,
            explanation: 'The temporary dipole induces a dipole in a neighboring molecule by distorting its electron cloud.'
          }
        ]
      }
    },
    {
      id: 'if-ldf-molar-mass',
      type: 'text',
      title: 'Factors That Affect LDF Strength',
      content: `The strength of London Dispersion Forces depends on two main factors:\n\n**1. Molar Mass (Number of Electrons)**\nMore electrons $\\rightarrow$ larger electron cloud $\\rightarrow$ more easily polarized $\\rightarrow$ **stronger LDF**\n\nExample: $\\text{I}_2$ (molar mass 254 g/mol) has much stronger LDF than $\\text{F}_2$ (molar mass 38 g/mol). That\'s why $\\text{I}_2$ is a solid at room temperature while $\\text{F}_2$ is a gas.\n\n> 💡 **Tip:** Larger molar mass = more electrons = more polarizable = stronger LDF. This explains boiling point trends in nonpolar series like the noble gases and halogens.\n\n---\n\n**2. Surface Area (Molecular Shape)**\nGreater surface area $\\rightarrow$ more points of contact between molecules $\\rightarrow$ **stronger LDF**\n\nExample: n-pentane (straight chain) has a higher boiling point than neopentane (spherical/compact) even though they have the same molecular formula $\\text{C}_5\\text{H}_{12}$. The elongated shape of n-pentane provides more surface area for LDF.`
    },
    {
      id: 'if-ldf-molar-mass-q',
      type: 'multiple-choice',
      title: 'Molar Mass and LDF',
      content: 'Consider the noble gases: He, Ne, Ar, Kr, Xe. They only experience London Dispersion Forces.',
      exercise: {
        questions: [
          {
            question: 'Which noble gas has the STRONGEST London Dispersion Forces?',
            options: [
              'He (molar mass 4 g/mol)',
              'Ne (molar mass 20 g/mol)',
              'Ar (molar mass 40 g/mol)',
              'Xe (molar mass 131 g/mol)'
            ],
            correctAnswer: 3,
            explanation: 'Xe has the most electrons and the largest, most polarizable electron cloud, giving it the strongest LDF. This is why Xe has the highest boiling point among the noble gases listed.'
          },
          {
            question: 'The halogens F₂, Cl₂, Br₂, and I₂ are all nonpolar. Which phase pattern is consistent with increasing LDF strength?',
            options: [
              'All are gases at room temperature',
              'F₂ is a gas, Cl₂ is a gas, Br₂ is a liquid, I₂ is a solid',
              'All are solids at room temperature',
              'F₂ is a solid, Cl₂ is a liquid, Br₂ is a gas, I₂ is a gas'
            ],
            correctAnswer: 1,
            explanation: 'As molar mass increases from F₂ to I₂, LDF strength increases. F₂ and Cl₂ are gases (weak LDF), Br₂ is a liquid (moderate LDF), and I₂ is a solid (strongest LDF among these). This trend directly reflects increasing LDF strength.'
          }
        ]
      }
    },
    {
      id: 'if-ldf-surface-area-q',
      type: 'multiple-choice',
      title: 'Surface Area and LDF',
      content: 'Molecular shape affects London Dispersion Forces through surface area contact.',
      exercise: {
        questions: [
          {
            question: 'n-Pentane (straight chain C₅H₁₂) boils at 36°C while neopentane (compact/spherical C₅H₁₂) boils at 10°C. What explains this difference?',
            options: [
              'n-Pentane has more electrons than neopentane',
              'n-Pentane is polar while neopentane is nonpolar',
              'n-Pentane has greater surface area, allowing more contact for LDF',
              'Neopentane has hydrogen bonding that lowers its boiling point'
            ],
            correctAnswer: 2,
            explanation: 'Both molecules have the same molecular formula (same number of electrons), so they have the same polarizability per molecule. However, n-pentane\'s elongated shape provides more surface area for intermolecular contact, resulting in stronger cumulative LDF and a higher boiling point.'
          }
        ]
      }
    },
    {
      id: 'if-ldf-input-practice',
      type: 'input-boxes',
      title: 'LDF Key Facts',
      content: 'Complete the following statements about London Dispersion Forces.',
      exercise: {
        inputs: [
          {
            label: 'LDF are present in _____ molecules (type "all" or "only nonpolar")',
            correctAnswer: 'all',
            explanation: 'London Dispersion Forces are present in ALL molecules, both polar and nonpolar. They are the only IMF present in nonpolar molecules, but polar molecules also experience them.'
          },
          {
            label: 'As molar mass increases, LDF strength _____ (increases/decreases)',
            correctAnswer: 'increases',
            explanation: 'Higher molar mass means more electrons, a larger electron cloud, easier polarizability, and therefore stronger London Dispersion Forces.'
          }
        ]
      }
    }
  ]
};
