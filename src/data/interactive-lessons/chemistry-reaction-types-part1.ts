export const chemReactionTypesPart1Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt1-intro',
      type: 'text' as const,
      content: `# ⚗️ The Three AP Reaction Types

**Part 1 of 7 — Acid–Base, Redox, and Precipitation**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Classifying by What Is Transferred |
| Acid–Base Reactions: Proton Transfer |
| Redox Reactions: Electron Transfer |
| Precipitation Reactions: Ions Leaving Solution |
| A Classification Checklist |

> 🔑 **Key Concept:** The AP exam sorts reactions into exactly three categories (CED 4.7.A): **acid–base**, **oxidation–reduction (redox)**, and **precipitation**. Each category is defined by what happens at the particle level.

---

### What You'll Master in Part 1
- Recognizing proton transfer, electron transfer, and precipitate formation
- Using oxidation numbers to decide whether a reaction is redox
- Classifying an unfamiliar reaction with a short checklist`
    },
    {
      id: 'rt1-three-types',
      type: 'text' as const,
      content: `
## 🎯 Classifying by What Is Transferred

Instead of looking at how many reactants or products there are, AP Chemistry asks a particle-level question: **what moves from one species to another?**

| Type | What happens | How to spot it |
|------|-------------|----------------|
| **Acid–base** | One or more **protons** $(\\text{H}^+)$ move from one species to another | An H is lost by one species and gained by another; oxidation numbers do not change |
| **Redox** | One or more **electrons** move from one species to another | Oxidation numbers change; a free element on either side is a strong clue |
| **Precipitation** | Dissolved ions combine to form an **insoluble solid** | Aqueous ions on the left, a product marked (s) on the right; oxidation numbers do not change |

> ⚠️ **Note:** You may have learned the labels "synthesis, decomposition, single replacement, double replacement" in an earlier course. The AP exam does not use those labels; it asks whether a reaction is acid–base, redox, or precipitation.


---

## Acid–Base Reactions: Proton Transfer

In the Brønsted–Lowry picture, an **acid donates a proton** and a **base accepts it** (CED 4.8.A).

| Reaction | Proton donor | Proton acceptor |
|----------|-------------|-----------------|
| $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$ | $\\text{H}^+$ (from a strong acid) | $\\text{OH}^-$ |
| $\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{OH}^-(aq) \\rightarrow \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) + \\text{H}_2\\text{O}(l)$ | $\\text{HC}_2\\text{H}_3\\text{O}_2$ | $\\text{OH}^-$ |
| $\\text{H}_3\\text{O}^+(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4^+(aq) + \\text{H}_2\\text{O}(l)$ | $\\text{H}_3\\text{O}^+$ | $\\text{NH}_3$ |
| $2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$ | $\\text{H}^+$ | $\\text{CO}_3^{2-}$ |

> 💡 **Tip:** Track the hydrogen. If a species loses an H and another species gains one, and no oxidation number changes, you are looking at an acid–base reaction. The carbonate case still counts: carbonate accepts protons to become $\\text{H}_2\\text{CO}_3$, which then breaks apart into water and carbon dioxide gas.
      `
    },
    {
      id: 'rt1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Proton Transfer Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which description defines an acid–base reaction in AP Chemistry?',
            options: [
              'Electrons move from one species to another',
              'A proton moves from one species to another',
              'Dissolved ions combine to form a solid',
              'A compound reacts with oxygen gas to form oxides'
            ],
            correctAnswer: 1,
            explanation: 'Acid–base reactions are proton $(\\text{H}^+)$ transfers: the acid donates the proton and the base accepts it. Electron transfer defines redox, ions combining into a solid defines precipitation, and reaction with oxygen gas describes combustion, which is a kind of redox.'
          },
          {
            question: 'In the reaction $\\text{HF}(aq) + \\text{NH}_3(aq) \\rightarrow \\text{F}^-(aq) + \\text{NH}_4^+(aq)$, which species accepts a proton?',
            options: [
              '$\\text{HF}$',
              '$\\text{F}^-$',
              '$\\text{NH}_3$',
              '$\\text{NH}_4^+$'
            ],
            correctAnswer: 2,
            explanation: 'Ammonia gains an H and becomes ammonium, so $\\text{NH}_3$ is the proton acceptor (the base). HF loses its H and becomes fluoride, so HF is the proton donor. Fluoride and ammonium are products, not the species doing the accepting.'
          },
          {
            question: 'Hydrochloric acid is poured onto solid sodium carbonate, and bubbles form. Why is this classified as an acid–base reaction?',
            options: [
              'Carbonate gives electrons to the hydrogen ions in the acid',
              'Sodium ions combine with chloride ions to form a solid',
              'Carbonate ions accept protons, and the carbonic acid formed breaks into water and $\\text{CO}_2$',
              'Carbon changes oxidation number as $\\text{CO}_2$ gas is released'
            ],
            correctAnswer: 2,
            explanation: 'Carbonate accepts protons from the acid to form $\\text{H}_2\\text{CO}_3$, which decomposes into $\\text{H}_2\\text{O}$ and $\\text{CO}_2$. Carbon stays at +4 throughout, so no electrons are transferred. Sodium chloride is soluble, so no precipitate forms.'
          }
        ]
      }
    },
    {
      id: 'rt1-redox-precip',
      type: 'text' as const,
      content: `
## Redox Reactions: Electron Transfer

In a redox reaction, electrons move **from the species that is oxidized to the species that is reduced** (CED 4.7.A.3). Assigning oxidation numbers is the most reliable way to find them.

**Example:** $\\text{Mg}(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Mg}^{2+}(aq) + \\text{H}_2(g)$

| Species | Oxidation number before | after | Change |
|---------|------------------------|-------|--------|
| Mg | 0 | +2 | lost electrons → **oxidized** |
| H | +1 | 0 | gained electrons → **reduced** |

> 💡 **Tip:** Whenever an element appears uncombined on one side of an equation and combined on the other, its oxidation number must have changed, so the reaction is redox.

**Combustion is a redox subclass** (CED 4.7.A.2): a substance reacts with $\\text{O}_2$. Complete combustion of a hydrocarbon gives $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.


---

## Precipitation Reactions: Ions Leaving Solution

When two ionic solutions are mixed, a cation from one solution and an anion from the other can combine into a compound that is **insoluble**, and a solid (the precipitate) appears.

$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$

No electrons and no protons are transferred: silver stays +1 and chlorine stays −1.

> 🔑 **The one solubility rule to memorize (CED 4.7.A.5):** All sodium, potassium, ammonium, and nitrate salts are soluble. A precipitate can never be one of these salts. For any other compound, an AP question will tell you whether it is soluble.


---

## A Classification Checklist

1. **Did any oxidation number change?** → **Redox**
2. **Did a proton move from one species to another?** → **Acid–base**
3. **Did dissolved ions combine to form a solid?** → **Precipitation**

Checking oxidation numbers first avoids the most common mistake: calling a reaction "acid–base" just because an acid is present. Magnesium dissolving in hydrochloric acid involves an acid, but magnesium is oxidized and hydrogen is reduced, so the reaction is redox.
      `
    },
    {
      id: 'rt1-identify-drill',
      type: 'input-boxes' as const,
      content: `
**Identify the Reaction Type** 🧮

Classify each reaction. Type **acid-base**, **redox**, or **precipitation**.

**1)** $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$

**2)** $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$

**3)** $\\text{HNO}_2(aq) + \\text{OH}^-(aq) \\rightarrow \\text{NO}_2^-(aq) + \\text{H}_2\\text{O}(l)$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'redox', acceptableAnswers: ['redox', 'oxidation-reduction', 'oxidation reduction'] }, { question: '(2)', answer: 'precipitation', acceptableAnswers: ['precipitation', 'precipitate'] }, { question: '(3)', answer: 'acid-base', acceptableAnswers: ['acid-base', 'acid base', 'acid–base', 'neutralization'] }],
        hint1: 'Zinc goes from 0 to +2 and copper goes from +2 to 0. What does a change in oxidation number tell you?',
        hint2: 'Two dissolved ions combine into a product marked (s).',
        hint3: '$\\text{HNO}_2$ loses an H; $\\text{OH}^-$ gains one.',
        explanation: '1) Zinc is oxidized (0 → +2) and copper is reduced (+2 → 0): redox. 2) Barium and sulfate ions leave solution as solid $\\text{BaSO}_4$ with no change in oxidation numbers: precipitation. 3) Nitrous acid donates a proton to hydroxide: acid–base.'
      }
    },
    {
      id: 'rt1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — The Three Reaction Types** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A reaction in which oxidation numbers change is classified as',
            options: ['acid–base', 'redox', 'precipitation', 'physical']
          },
          {
            label: 'In a Brønsted–Lowry acid–base reaction, the base',
            options: ['donates a proton', 'accepts a proton', 'donates electrons to a metal', 'forms a precipitate']
          },
          {
            label: 'Mixing solutions of $\\text{KNO}_3$ and $\\text{NaCl}$ produces',
            options: ['a precipitate of KCl', 'a precipitate of $\\text{NaNO}_3$', 'no precipitate', 'hydrogen gas']
          },
          {
            label: 'Combustion of a hydrocarbon is a subclass of',
            options: ['acid–base reactions', 'precipitation reactions', 'redox reactions', 'nuclear reactions']
          }
        ],
        correctAnswers: ['redox', 'accepts a proton', 'no precipitate', 'redox reactions'],
        hint1: 'Oxidation numbers change only when electrons are transferred.',
        hint2: 'Brønsted–Lowry acids donate protons; bases do the opposite.',
        hint3: 'Every possible product here is a sodium, potassium, or nitrate salt.',
        explanation: 'Changing oxidation numbers signal electron transfer, so the reaction is redox. A Brønsted–Lowry base accepts a proton. KCl and $\\text{NaNO}_3$ are both soluble (all sodium, potassium, and nitrate salts are), so no precipitate forms. Combustion is redox: carbon is oxidized and oxygen is reduced.'
      }
    },
    {
      id: 'rt1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — The Three Reaction Types** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'How is the reaction $\\text{Cl}_2(g) + 2\\text{Br}^-(aq) \\rightarrow 2\\text{Cl}^-(aq) + \\text{Br}_2(l)$ classified?',
            options: [
              'Acid–base, because a halide ion gains a proton',
              'Precipitation, because bromide ions leave the solution',
              'Redox, because chlorine is reduced and bromide is oxidized',
              'Acid–base, because bromide ions accept protons from chlorine'
            ],
            correctAnswer: 2,
            explanation: 'Chlorine goes from 0 to −1 (reduced) and bromine goes from −1 to 0 (oxidized), so electrons are transferred: redox. Chlorine has no proton to give and no proton moves, and bromine forms a liquid element rather than an insoluble ionic solid.'
          },
          {
            question: 'Solutions of $\\text{Pb(NO}_3)_2$ and $\\text{NaI}$ are mixed, and a yellow solid forms. Which formula is the solid?',
            options: [
              '$\\text{NaNO}_3$',
              '$\\text{PbI}_2$',
              '$\\text{PbNa}_2$',
              '$\\text{Pb(NO}_3)_2$'
            ],
            correctAnswer: 1,
            explanation: 'Sodium nitrate is soluble (all sodium and nitrate salts are), so the only new pairing that can precipitate is lead(II) with iodide. $\\text{Pb}^{2+}$ and $\\text{I}^-$ combine 1:2 to give $\\text{PbI}_2(s)$. Lead and sodium are both cations and cannot pair, and lead(II) nitrate is a starting solution.'
          }
        ]
      }
    }
  ]
}
