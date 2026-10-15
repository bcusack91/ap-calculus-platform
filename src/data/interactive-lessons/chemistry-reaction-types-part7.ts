export const chemReactionTypesPart7Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — AP-Style Questions on Reaction Classification**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'rt7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Reaction Type Summary

| Type | What is transferred or formed | Key evidence | Example |
|------|------------------------------|--------------|---------|
| Acid–base | A proton $(\\text{H}^+)$ | One species loses an H, another gains it; no oxidation-number change | $\\text{HF} + \\text{OH}^- \\rightarrow \\text{F}^- + \\text{H}_2\\text{O}$ |
| Redox | One or more electrons | Oxidation numbers change | $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$ |
| Redox: combustion | Electrons from a fuel to $\\text{O}_2$ | Fuel + $\\text{O}_2$ → $\\text{CO}_2$ + $\\text{H}_2\\text{O}$ | $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ |
| Precipitation | An insoluble ionic solid forms | Aqueous ions → product (s); no oxidation-number change | $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(s)$ |


---

> 🔑 **Key Concept:** To classify any reaction: (1) Do oxidation numbers change? → **Redox**. (2) Does a proton move? → **Acid–base**. (3) Do dissolved ions form a solid? → **Precipitation**.


---

## 📌 AP Exam Tips

1. **Read carefully** — the AP exam often describes reactions in words rather than symbols
2. **Justify with evidence** — name the species whose oxidation number changes, or the species that donates and accepts the proton
3. **Know the one solubility rule** — all sodium, potassium, ammonium, and nitrate salts are soluble; other solubilities are given
4. **Balancing must be correct** — even if the products are right, unbalanced equations lose points
5. **State symbols matter** — (s), (l), (g), (aq) are often tested
6. **Net ionic equations** — AP frequently asks for these for precipitation and acid–base reactions


---

> 💡 **Tip:** Say "the species that is oxidized" and "the species that is reduced" in explanations. Identify each by its change in oxidation number.

> ⚠️ **Warning:** Common errors: (1) writing incorrect ionic formulas by not cross-checking charges, (2) calling a metal-plus-acid reaction "acid–base" when the metal is actually oxidized, (3) predicting a precipitate that is a sodium, potassium, ammonium, or nitrate salt, and (4) submitting unbalanced equations.
      `
    },
    {
      id: 'rt7-net-ionic-review',
      type: 'text' as const,
      content: `
## 🔄 Net Ionic Equations — Quick Review

For precipitation and acid–base reactions in solution, the AP exam often asks for net ionic equations.

---

### 📌 Step-by-Step Method

| Step | Action | Example |
|------|--------|---------|
| 1 | Write balanced **molecular** equation | $\\text{AgNO}_3(\\text{aq}) + \\text{NaCl}(\\text{aq}) \\rightarrow \\text{AgCl}(\\text{s}) + \\text{NaNO}_3(\\text{aq})$ |
| 2 | Split soluble ionic compounds into **ions** | $\\text{Ag}^+ + \\text{NO}_3^- + \\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}(\\text{s}) + \\text{Na}^+ + \\text{NO}_3^-$ |
| 3 | Cancel **spectator ions** (unchanged on both sides) | $Na^{+}$ and $NO_{3}^{-}$ cancel |
| 4 | Write the **net ionic** equation | $\\text{Ag}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}) \\rightarrow \\text{AgCl}(\\text{s})$ |

---

### 🧪 What to Split vs. Keep Whole

| Split into ions | Keep as one formula |
|----------------|-------------------|
| Soluble ionic compounds (aq) | Precipitates (s) |
| Strong acids (aq) | Weak acids / bases |
| Strong bases (aq) | Water, gases |

> 💡 **Spectator ions** appear unchanged on both sides — they don't participate in the actual reaction.
      `
    },
    {
      id: 'rt7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A strip of zinc metal is placed in a blue solution of copper(II) sulfate. The blue color fades and a reddish-brown solid forms on the strip. Which statement is correct?',
            options: [
              'Copper(II) sulfate precipitates because zinc ions remove water from the solution',
              'Zinc is oxidized to $\\text{Zn}^{2+}$ and $\\text{Cu}^{2+}$ is reduced to copper metal',
              'Zinc is reduced to $\\text{Zn}^{2+}$ and $\\text{Cu}^{2+}$ is oxidized to copper metal',
              'Sulfate ions transfer protons to zinc, forming hydrogen gas'
            ],
            correctAnswer: 1,
            explanation: '$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. Zinc loses electrons (0 → +2, oxidized) and copper(II) gains them (+2 → 0, reduced); the fading blue color shows $\\text{Cu}^{2+}$ being used up. Losing electrons is oxidation, not reduction, and sulfate is a spectator with no protons.'
          },
          {
            question: 'When solutions of sodium hydroxide and hydrochloric acid are mixed, the net ionic equation is:',
            options: [
              '$\\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{NaCl}$',
              '$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$',
              '$\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$',
              '$\\text{Na}^+ + \\text{Cl}^- + \\text{H}_2\\text{O} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: 'The molecular equation is NaOH + HCl → NaCl + $H_{2}O$. $Na^{+}$ and $Cl^{-}$ are spectator ions. The net ionic equation shows only what actually reacts: $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$.'
          },
          {
            question: 'Which reaction is NOT a redox reaction?',
            options: [
              '$2\\text{Na}(s) + \\text{Cl}_2(g) \\rightarrow 2\\text{NaCl}(s)$',
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{Fe}(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Fe}^{2+}(aq) + \\text{H}_2(g)$',
              '$2\\text{C}_2\\text{H}_6(g) + 7\\text{O}_2(g) \\rightarrow 4\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(g)$'
            ],
            correctAnswer: 1,
            explanation: 'In the neutralization, a proton moves from $\\text{H}^+$ to $\\text{OH}^-$ and hydrogen stays +1 and oxygen stays −2: an acid–base reaction. The sodium–chlorine reaction, iron dissolving in acid, and ethane combustion all involve oxidation-number changes.'
          },
          {
            question: 'A student says that the reaction of magnesium with hydrochloric acid is an acid–base reaction because an acid is a reactant. Which statement best evaluates the claim?',
            options: [
              'Correct, because HCl donates a proton to magnesium',
              'It is redox, since Mg is oxidized',
              'Correct, because magnesium chloride is a salt',
              'Incorrect, because magnesium chloride precipitates'
            ],
            correctAnswer: 1,
            explanation: 'Magnesium goes from 0 to +2 and hydrogen from +1 to 0 in $\\text{H}_2$, so electrons are transferred: redox. Forming a salt does not make a reaction acid–base, and magnesium chloride is soluble, so nothing precipitates.'
          }
        ]
      }
    },
    {
      id: 'rt7-ap-input-drill',
      type: 'input-boxes' as const,
      content: `
**AP-Style Identification** 🧮

Classify each reaction. Type **acid-base**, **redox**, or **precipitation**.

**1)** $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$

**2)** $\\text{Pb(NO}_3)_2(\\text{aq}) + 2\\text{KI}(\\text{aq}) \\rightarrow \\text{PbI}_2(\\text{s}) + 2\\text{KNO}_3(\\text{aq})$

**3)** $\\text{NH}_3(\\text{aq}) + \\text{HC}_2\\text{H}_3\\text{O}_2(\\text{aq}) \\rightarrow \\text{NH}_4^+(\\text{aq}) + \\text{C}_2\\text{H}_3\\text{O}_2^-(\\text{aq})$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'redox', acceptableAnswers: ['redox', 'oxidation-reduction', 'oxidation reduction'] }, { question: '(2)', answer: 'precipitation', acceptableAnswers: ['precipitation', 'precipitate'] }, { question: '(3)', answer: 'acid-base', acceptableAnswers: ['acid-base', 'acid base', 'acid–base'] }],
        hint1: 'Sodium and chlorine both start as free elements.',
        hint2: 'Two aqueous ionic compounds; a solid appears.',
        hint3: 'Which species gains an H?',
        explanation: '1) Redox: Na 0 → +1 (oxidized), Cl 0 → −1 (reduced). 2) Precipitation: $\\text{Pb}^{2+}$ and $\\text{I}^-$ form solid $\\text{PbI}_2$; potassium and nitrate stay dissolved. 3) Acid–base: acetic acid donates a proton to ammonia.'
      }
    },
    {
      id: 'rt7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student mixes aqueous solutions of barium chloride and sodium sulfate, and a white precipitate forms. Which formula is the precipitate?',
            options: [
              'NaCl',
              '$BaSO_{4}$',
              '$Na_{2}SO_{4}$',
              '$Na_{2}Cl_{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaCl}(aq)$. NaCl cannot be the solid because every sodium salt is soluble, so the precipitate must be barium sulfate.'
          },
          {
            question: 'In the reaction $2\\text{Al}(s) + 3\\text{Cu}^{2+}(aq) \\rightarrow 2\\text{Al}^{3+}(aq) + 3\\text{Cu}(s)$, how many electrons are transferred in total as written?',
            options: [
              '2',
              '3',
              '5',
              '6'
            ],
            correctAnswer: 3,
            explanation: 'Each Al atom loses 3 electrons (2 atoms → 6 electrons), and each $\\text{Cu}^{2+}$ gains 2 (3 ions → 6 electrons). Electrons lost equal electrons gained: 6. The values 2 and 3 are the per-particle changes, and 5 adds them.'
          }
        ]
      }
    },
    {
      id: 'rt7-dropdown-comprehensive',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The formation of rust $(Fe_{2}O_{3})$ from iron and oxygen is classified as',
            options: ['acid–base', 'redox', 'precipitation', 'no reaction']
          },
          {
            label: 'In a net ionic equation, spectator ions are',
            options: ['the main reactants', 'removed because they don\'t change', 'always precipitates', 'gases that escape']
          },
          {
            label: 'In a redox reaction, electrons are transferred from',
            options: ['the reduced species to the oxidized species', 'the oxidized species to the reduced species', 'the acid to the base', 'the solid to the solution']
          },
          {
            label: 'An acid reacting with a hydroxide base to form salt and water is called',
            options: ['combustion', 'precipitation', 'neutralization', 'oxidation']
          }
        ],
        correctAnswers: ['redox', 'removed because they don\'t change', 'the oxidized species to the reduced species', 'neutralization'],
        hint1: 'Iron goes from 0 to +3.',
        hint2: 'Spectator ions appear identically on both sides.',
        hint3: 'The species that loses electrons is the one that is oxidized.',
        explanation: 'Rust formation is redox: iron is oxidized and oxygen is reduced. Spectator ions don\'t participate and are removed from net ionic equations. Electrons move from the species that is oxidized to the species that is reduced (CED 4.7.A.3). Acid + hydroxide → salt + water is neutralization, an acid–base reaction.'
      }
    },
    {
      id: 'rt7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Reaction Types Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student combines solutions of iron(III) chloride and sodium hydroxide. A brown precipitate forms. The balanced equation is:',
            options: [
              '$\\text{FeCl}_3 + \\text{NaOH} \\rightarrow \\text{Fe(OH)}_3 + \\text{NaCl}$',
              '$\\text{FeCl}_3 + 3\\text{NaOH} \\rightarrow \\text{Fe(OH)}_3 + 3\\text{NaCl}$',
              '$3\\text{FeCl}_3 + \\text{NaOH} \\rightarrow 3\\text{Fe(OH)}_3 + \\text{NaCl}$',
              '$\\text{FeCl}_3 + 3\\text{NaOH} \\rightarrow \\text{FeO}_3 + 3\\text{NaCl} + 3\\text{H}_2$'
            ],
            correctAnswer: 1,
            explanation: 'Precipitation: $Fe^{3+}$ pairs with $OH^{-}$ → $Fe(OH)_{3}$ (brown precipitate). $Na^{+}$ pairs with $Cl^{-}$ → NaCl, which stays dissolved. Balanced: $FeCl_{3}$ + 3NaOH → $Fe(OH)_{3}$↓ + 3NaCl. Fe: 1=1 ✓, Cl: 3=3 ✓, Na: 3=3 ✓, O: 3=3 ✓, H: 3=3 ✓.'
          },
          {
            question: 'Which evidence would best show that a reaction is a redox reaction?',
            options: [
              'A solid forms when two solutions are mixed',
              'The oxidation number of at least one element changes',
              'Water is one of the products',
              'The reaction releases heat to the surroundings'
            ],
            correctAnswer: 1,
            explanation: 'Redox reactions transfer electrons, which shows up as a change in oxidation numbers (CED 4.7.A.4). A solid forming points to precipitation, water forms in acid–base reactions too, and both acid–base and precipitation reactions can release heat.'
          }
        ]
      }
    }
  ]
}
