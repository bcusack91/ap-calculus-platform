export const chemNernstEquationConcentrationPart5Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne5-intro',
      type: 'text' as const,
      content: `# 🔋 Batteries — Primary, Secondary, and Fuel Cells

**Part 5 of 7 — Real-World Applications**

---

### Topics in This Part

| Section |
|---------|
| � Primary Batteries (Non-Rechargeable) |
| ⚡ Alkaline Battery — The Household Workhorse |
| 🌬️ Zinc-Air Battery — Breathing Electricity |
| � Secondary Batteries (Rechargeable) |
| 🚗 Lead-Acid Battery — Under Every Hood |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ne5-primary',
      type: 'text' as const,
      content: `
## � Primary Batteries (Non-Rechargeable)

> **One-way trip!** Primary batteries involve **irreversible** reactions — once the reactants are consumed, the battery is dead. You use it, then recycle it.

---

### ⚡ Alkaline Battery — The Household Workhorse

| | Detail |
|--|--------|
| **Anode** | $\\text{Zn}(s) + 2\\text{OH}^-(aq) \\rightarrow \\text{ZnO}(s) + \\text{H}_2\\text{O}(l) + 2e^-$ |
| **Cathode** | $2\\text{MnO}_2(s) + \\text{H}_2\\text{O}(l) + 2e^- \\rightarrow \\text{Mn}_2\\text{O}_3(s) + 2\\text{OH}^-(aq)$ |
| **Voltage** | $E \\approx 1.5$ V per cell |
| **Electrolyte** | KOH (alkaline) |
| **Sizes** | AA, AAA, C, D, 9V |

> 💡 **Why can't you recharge it?** The solid products ($\\text{ZnO}$, $\\text{Mn}_2\\text{O}_3$) undergo structural changes that can't be cleanly reversed.

---

### 🌬️ Zinc-Air Battery — Breathing Electricity

| Feature | Detail |
|---------|--------|
| **Secret weapon** | Uses $\\text{O}_2$ from the air as the cathode reactant |
| **Voltage** | $E \\approx 1.4$ V |
| **Energy density** | Extremely high (less weight = no stored oxidant) |
| **Common use** | Hearing aids, medical devices |

> 🔑 **AP Tip:** Zinc-air is a favorite exam topic because it blurs the line between a battery and a fuel cell — the oxidant ($\\text{O}_2$) comes from outside!
      `
    },
    {
      id: 'ne5-secondary',
      type: 'text' as const,
      content: `
## � Secondary Batteries (Rechargeable)

> **Round trip!** Secondary batteries involve **reversible** reactions — applying external voltage reverses the cell chemistry, restoring the original reactants.

---

### 🚗 Lead-Acid Battery — Under Every Hood

| | Detail |
|--|--------|
| **Anode** | $\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{PbSO}_4(s) + 2e^-$ |
| **Cathode** | $\\text{PbO}_2(s) + 4\\text{H}^+(aq) + \\text{SO}_4^{2-}(aq) + 2e^- \\rightarrow \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$ |
| **Voltage** | $E \\approx 2.0$ V per cell |
| **Car battery** | 6 cells in series → **12 V** |

> 💡 **Exam alert:** Both electrodes produce $\\text{PbSO}_4$ — so as the battery discharges, $[\\text{H}_2\\text{SO}_4]$ decreases. That's why mechanics test battery health with a hydrometer!

---

### 📱 Lithium-Ion Battery — The Modern Standard

| Feature | Detail |
|---------|--------|
| **Voltage** | $E \\approx 3.7$ V per cell (highest of common rechargeables!) |
| **Uses** | Phones, laptops, electric vehicles, power tools |
| **Mechanism** | Li⁺ shuttles between graphite anode and metal oxide cathode |
| **Energy density** | Very high — lightweight yet powerful |

> 🔑 **Key term — Intercalation:** Li⁺ ions slip *between* layers of the electrode material without breaking the crystal structure. This is what makes Li-ion reversible and long-lasting.

---

### 🔋 Nickel-Metal Hydride (NiMH)

| Feature | Detail |
|---------|--------|
| **Voltage** | $E \\approx 1.2$ V per cell |
| **Uses** | Hybrid cars (Toyota Prius), rechargeable AA/AAA |
| **Advantage** | More eco-friendly than older Ni-Cd batteries |

---

### ⚖️ Quick Comparison

| Battery | Type | $E$ per cell | Rechargeable? | Key Use |
|---------|------|:------------:|:-------------:|---------|
| Alkaline | Primary | 1.5 V | ❌ | Household |
| Zinc-Air | Primary | 1.4 V | ❌ | Hearing aids |
| Lead-Acid | Secondary | 2.0 V | ✅ | Cars |
| Li-ion | Secondary | 3.7 V | ✅ | Electronics |
| NiMH | Secondary | 1.2 V | ✅ | Hybrids |

> ⚠️ **Warning:** Don't confuse primary and secondary! **Primary** = irreversible = non-rechargeable. **Secondary** = reversible = rechargeable. A fuel cell is neither — reactants are continuously supplied from outside.
      `
    },
    {
      id: 'ne5-fuel-cells',
      type: 'text' as const,
      content: `
## 📌 Fuel Cells

A fuel cell is a galvanic cell where the reactants are **continuously supplied** from outside. Unlike batteries, fuel cells don\'t run down — they operate as long as fuel and oxidant are fed in.


---

### Hydrogen Fuel Cell

**Anode:** $2\\text{H}_2(g) \\rightarrow 4\\text{H}^+(aq) + 4e^-$

**Cathode:** $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\rightarrow 2\\text{H}_2\\text{O}(l)$

**Overall:** $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$

**$E \\approx 1.23$ V**


---

### Why Fuel Cells Are Important

| Feature | Battery | Fuel Cell |
|---------|---------|-----------|
| Reactants | Sealed inside | Continuously supplied |
| Lifetime | Limited by reactant amount | As long as fuel flows |
| Product | Various solids/solutions | Water (clean!) |
| Efficiency | ~40-60% | ~60-80% |
      `
    },
    {
      id: 'ne5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Battery Chemistry Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What distinguishes a primary battery from a secondary battery?',
            options: [
              'Primary batteries use metals; secondary use nonmetals',
              'Primary batteries cannot be recharged; secondary can',
              'Primary batteries have higher voltage',
              'Primary batteries use fuel cells'
            ],
            correctAnswer: 1,
            explanation: 'Primary batteries involve irreversible reactions (non-rechargeable). Secondary batteries have reversible reactions that can be driven backward by applying external voltage.'
          },
          {
            question: 'A fuel cell differs from a battery because:',
            options: [
              'It produces electricity from chemical reactions',
              'Its reactants are continuously supplied from outside',
              'It has a higher voltage',
              'It does not use electrodes'
            ],
            correctAnswer: 1,
            explanation: 'A fuel cell\'s reactants (e.g., H₂ and O₂) are continuously fed in from external tanks, unlike a battery where reactants are sealed inside.'
          },
          {
            question: 'A 12 V car battery contains how many lead-acid cells in series?',
            options: [
              '3 cells (4 V each)',
              '6 cells (2 V each)',
              '12 cells (1 V each)',
              '1 cell (12 V)'
            ],
            correctAnswer: 1,
            explanation: 'Each lead-acid cell produces about 2 V. Six cells connected in series give $6 \\times 2 = 12$ V.'
          }
        ]
      }
    },
    {
      id: 'ne5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Battery Types** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An alkaline battery is a type of',
            options: ['primary (non-rechargeable) battery', 'secondary (rechargeable) battery', 'fuel cell', 'concentration cell']
          },
          {
            label: 'The product of a hydrogen fuel cell is',
            options: ['CO₂', 'H₂O', 'H₂SO₄', 'NaOH']
          },
          {
            label: 'In a lithium-ion battery, Li⁺ ions move by',
            options: ['melting', 'intercalation', 'precipitation', 'sublimation']
          },
          {
            label: 'Recharging a secondary battery involves',
            options: ['replacing the electrodes', 'applying external voltage to reverse the reaction', 'adding more electrolyte', 'connecting to a primary battery']
          }
        ],
        correctAnswers: ['primary (non-rechargeable) battery', 'H₂O', 'intercalation', 'applying external voltage to reverse the reaction'],
        hint1: 'Alkaline batteries (AA, AAA) are not rechargeable.',
        hint2: '2H₂ + O₂ → 2H₂O',
        hint3: 'Li⁺ inserts into layered structures in both electrodes.',
        explanation: 'Alkaline = primary. Fuel cell product = H₂O (clean!). Li-ion uses intercalation. Recharging = external voltage reverses the cell reaction (electrolysis).'
      }
    },
    {
      id: 'ne5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Batteries** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'As a lead-acid car battery discharges, what happens to the sulfuric acid concentration?',
            options: [
              'It increases',
              'It decreases (both reactions consume SO₄²⁻)',
              'It stays the same',
              'It increases at the anode, decreases at the cathode'
            ],
            correctAnswer: 1,
            explanation: 'Both the anode and cathode reactions consume $\\text{SO}_4^{2-}$ to form $\\text{PbSO}_4$. The acid concentration decreases as the battery discharges (which is why a dead car battery has low specific gravity).'
          },
          {
            question: 'Why are fuel cells considered more environmentally friendly than combustion engines?',
            options: [
              'They produce more energy per gram of fuel',
              'They produce water as the main product (no CO₂)',
              'They operate at higher temperatures',
              'They use cheaper materials'
            ],
            correctAnswer: 1,
            explanation: 'Hydrogen fuel cells produce only water: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. No carbon dioxide, no pollutants — only clean water.'
          }
        ]
      }
    }
  ]
}
