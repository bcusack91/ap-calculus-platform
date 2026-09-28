# SAT flashcard fix: proposals summary

`proposals.json` holds **203 proposals** covering 180 existing cards (of 758) plus 23 new cards. They are proposals only: no repo files or database rows were changed.

## Counts by action

| Action | Count |
|---|---|
| UPDATE | 159 |
| DELETE | 11 |
| MOVE | 10 |
| CREATE | 23 |

## Counts by category × action

| Category | UPDATE | DELETE | MOVE | CREATE | Total |
|---|---|---|---|---|---|
| off-blueprint | 26 | 7 | 0 | 0 | 33 |
| render | 64 | 0 | 0 | 0 | 64 |
| hint | 14 | 0 | 0 | 0 | 14 |
| front | 7 | 0 | 0 | 0 | 7 |
| duplicate | 31 | 3 | 0 | 0 | 34 |
| misfiled | 0 | 0 | 10 | 5 | 15 |
| worked-problem | 17 | 1 | 0 | 0 | 18 |
| coverage | 0 | 0 | 0 | 18 | 18 |

## Validation

Every front, back and hint that an UPDATE or CREATE leaves on a card was checked (409 fields, 0 failures). The checks were:
- the card importer's own gate: every `$…$` / `$$…$$` segment compiles in KaTeX with throwOnError, with no bare `&` or `%` in math and no unicode super/subscripts anywhere
- balanced `$`
- no `\$` anywhere (currency is written as words)
- no unicode math glyphs inside math, and no ASCII math (`^`, `sqrt(`, `<=`, `>=`, `!=`, LaTeX commands) outside `$`
- no `=` in a field that has no `$` (formatFlashcardContent would auto-wrap it)
- importer length limits (front 8-400, back 3-700)
- full `formatFlashcardContent → renderRichText` render with no katex-error and no visible `$`

Every numeric claim in the rewritten cards was recomputed (for example 2000(1.005)^60 = 2697.70, 45(0.80)(1.08) = 38.88, x²+5x+9 = (x+2)(x+3)+3, 2x²−5x−3 = (2x+1)(x−3), and SDs of 2.53 vs 3.58).

## Decisions worth a look

- **Complex numbers**: all 7 cards are DELETE, because the topic is titled "Beyond the SAT". This is the one place where content is removed with no replacement.
- **Deletes need owner OK** (per the SAT parity memo). There are 11: 7 complex-number cards, the who/whom duplicate, the its/it's duplicate, "burning fire", and the "add four table cells" worked problem.
- **Beyond the audit list**: 4 extra off-blueprint fixes. The circles tangent card (cmt24djq9005z) used the point-to-line distance formula. Two functions-advanced cards (003i, 003j) used f⁻¹ notation, which the SAT does not use. The discriminant card said "(two complex solutions)".
- **Extra near-duplicates rewritten**: linear-equations no-solution vs systems no-solution, and the two conditional-denominator cards in probability.
- **Advanced ASCII math**: render fixes cover every -advanced card with math written outside `$` (53 cards, not just 16; a 54th advanced render fix is the currency card cmt24dj7d002x). Each fix is a targeted substitution that leaves the rest of the wording verbatim. Two of them also correct content: the Desmos card claimed Desmos accepts any variable names (it graphs only x and y), and the fuel-economy card claimed the reciprocal "gives the right magnitude".
- **Coverage placement**: Text Structure & Purpose (6) and Cross-Text (6) are filed under `sat-reading-comprehension`, because its Core/700-800 twins already teach function and Text 1/Text 2 items. These cards also refill the topic after its 5 vocabulary words MOVE out, leaving 12 cards. Inferences (6) is filed under `sat-central-ideas-details`, with 5 central-idea/detail replacements, leaving 11 cards. After the moves, `sat-vocabulary-context` holds 20 cards.
- Near-duplicate front scan: no new card collides with an existing card on the same topic. The remaining flagged pairs are pre-existing contrast pairs (for example "semicolon" vs "colon").

## 15 representative before/after examples

### 1. off-blueprint · `cmstdfgxb00k90f3hgpqsbhy7` (sat-pronoun-agreement, front)

*Why:* Marked "Everyone ... their" wrong, which the SAT never tests; slot now tests the on-blueprint skill of finding a plural antecedent past a nearer noun.

- **Before:** Which is correct? ⏎  ⏎ A) Everyone should bring their notebook. ⏎ B) Everyone should bring his or her notebook. ⏎ C) Everyone should bring they notebook. ⏎ D) Everyone should bring its notebook.
- **After:** Which pronoun fits? 'The results of the survey surprised the researchers because ___ contradicted earlier studies.' (it / they)

### 2. off-blueprint · `cmt24djx700750fbz7fgmdpud` (sat-probability-two-way-tables-advanced, front)

*Why:* P(A|B) notation is not used on the digital SAT, and the denominator rule is already card 006z; slot now covers the on-blueprint "A or B" count from a table.

- **Before:** Write the mechanical translation of 'given that' into a formula.
- **After:** A question asks for the probability that a randomly chosen person is a junior OR prefers tea, using a two-way table.

### 3. off-blueprint · `cmt24djog005k0fbzm1zz1z6c` (sat-geometry-trigonometry-advanced, back)

*Why:* Cotangent is off the SAT; same two-angle elevation archetype set up with tangent only.

- **Before:** $h = \frac{d}{\cot\theta_{far} - \cot\theta_{near}} = \frac{d}{\frac{1}{\tan\theta_{far}} - \frac{1}{\tan\theta_{near}}}$. Subtract the COTANGENTS, never the tangents — subtracting tangents is the most common wrong answer in this archetype.
- **After:** Use two right triangles that share the height $h$. Let $x$ be the distance from the nearer point to the base: $h = x\tan\theta_{near}$ and $h = (x + d)\tan\theta_{far}$. Set them equal, solve for $x$, then find $h$. Using $d$ as the whole base of one triangle is the most common wrong answer. With $30^{\circ}$ and $60^{\circ}$ angles, use the 30-60-90 ratios instead.

### 4. off-blueprint · `cmt24djhc004g0fbztzlakpm1` (sat-polynomials-factoring-advanced, front)

*Why:* Cubic Vieta (sum of three zeros) is off the SAT; slot now tests zeros-to-factors with multiplicity from a graph.

- **Before:** "$x - 3$ is a factor of $P(x) = 2x^{3} - 10x^{2} + kx + 12$. What is the sum of ALL three zeros?"
- **After:** A polynomial's graph crosses the $x$-axis at $-2$ and $5$ and touches it without crossing at $1$. Which factored form fits?

### 5. off-blueprint · `cmlshiwhr001b0fo3eeimimxh` (sat-nonlinear-equations-functions, front)

*Why:* Logarithm fallback is off the SAT, the hint was about absolute value, and same-base solving already lives in sat-exponents-radicals; slot now teaches counting solutions of f(x) = k from a graph.

- **Before:** How do you solve an exponential equation like $2^{x+1} = 32$?
- **After:** How do you tell how many solutions $f(x) = k$ has from a graph of $f$?

### 6. render · `cmstdfdw500al0f3h3t9cl8dy` (sat-ratios-proportions-percents, back)

*Why:* Escaped \$ inside math broke KaTeX; worked problem condensed to the reverse-percent fact (680/0.85 = 800, 680 x 1.15 = 782 verified).

- **Before:** **Step 1:** A 15% discount means the customer pays 85% of the original price. ⏎ $$\text{Original} \times 0.85 = 680$$ ⏎  ⏎ **Step 2:** Solve for the original price: ⏎ $$\text{Original} = \frac{680}{0.85} = \$800$$ ⏎  ⏎ **Check:** $800 \times 0.85 = 680$ ✓ ⏎  ⏎ **Answer:** \$800 ⏎  ⏎ **Common mistake:** Don't calculate 15% of 680 and add it. That gives $680 + 102 = 782$, which is WRONG because the 15% should be based …
- **After:** 800 dollars. The sale price is 85% of the original, so divide: $\frac{680}{0.85} = 800$. Planted: adding 15% of the sale price, $680 \times 1.15 = 782$, which fails because the discount was taken from the original price, not the sale price.

### 7. render · `cmt24dj7d002x0fbzcomy2t3n` (sat-linear-inequalities-graphs-advanced, back)

*Why:* "$12 = $480" paired as a math span and swallowed the dollar signs; currency written as words.

- **Before:** Fund the requirement first (40 chairs x $12 = $480), subtract from the budget, THEN divide the remainder by the other item's price and round down. Skipping the requirement gives the big tempting wrong answer.
- **After:** Fund the requirement first (40 chairs at 12 dollars each is 480 dollars), subtract from the budget, THEN divide the remainder by the other item's price and round down. Skipping the requirement gives the big tempting wrong answer.

### 8. render · `cmt24djbz003r0fbz73uagbd3` (sat-nonlinear-equations-functions-advanced, back)

*Why:* ASCII absolute-value inequalities outside math.

- **Before:** Dividing by a negative FLIPS the inequality: -6|x-4| >= -30 becomes |x-4| <= 5, an inside-the-interval answer. Forgetting the flip gives the outside of the interval — check whether your answer set is bounded when the choices are finite numbers.
- **After:** Dividing by a negative FLIPS the inequality: $-6|x - 4| \geq -30$ becomes $|x - 4| \leq 5$, an inside-the-interval answer. Forgetting the flip gives the outside of the interval — check whether your answer set is bounded when the choices are finite numbers.

### 9. hint · `cmlshq73t000n0fyqga8uvh1v` (sat-grammar-usage, hint)

*Why:* Hint said the NO CHANGE option is right a quarter of the time; the back says there is no NO CHANGE option.

- **Before:** It is correct about one-quarter of the time
- **After:** Four complete choices, no NO CHANGE.

### 10. hint · `cmo4x7ew400080fflaz1jje2c` (sat-sentence-structure, hint)

*Why:* Hint described a dangling modifier, not a fragment.

- **Before:** The subject after the comma must be doing the action.
- **After:** Missing a subject, a verb, or a complete thought.

### 11. front · `cmstdfgw200k60f3hz558htoy` (sat-conciseness-redundancy, front)

*Why:* "Fix the tautology:" had no sentence; new example avoids duplicating the "returned back" example on cmo4x7f0m000d.

- **Before:** Fix the tautology:
- **After:** Fix the redundancy: 'The committee will reconvene again next week.'

### 12. duplicate · `cmlshq7cv00160fyqhj3qn40q` (sat-punctuation, front)

*Why:* Exact duplicate of cmo4x7etv00050 (kept in the commas/semicolons topic); rewritten as colon-vs-semicolon.

- **Before:** When do you use a semicolon?
- **After:** What is the difference between a colon and a semicolon?

### 13. duplicate · `cmt24djtq006m0fbzdh7c5605` (sat-data-statistics-advanced, front)

*Why:* Restated cmt24djx70072 (blank two-way cell); rewritten as mean vs median under skew.

- **Before:** A two-way table has one entry left blank.
- **After:** A histogram is strongly skewed right (a long tail of large values). How do the mean and median compare, and which describes a typical value?

### 14. worked-problem · `cmstdfdtc00a90f3hjlbeutsr` (sat-quadratic-equations, back)

*Why:* Worked quadratic-formula solution turned into when-to-use-the-formula (discriminants 49 and 20 verified).

- **Before:** **Solution:** ⏎  ⏎ Identify: $a = 2, b = -5, c = -3$ ⏎  ⏎ $$x = \frac{-(-5) \pm \sqrt{(-5)^2 - 4(2)(-3)}}{2(2)}$$ ⏎  ⏎ $$x = \frac{5 \pm \sqrt{25 + 24}}{4}$$ ⏎  ⏎ $$x = \frac{5 \pm \sqrt{49}}{4} = \frac{5 \pm 7}{4}$$ ⏎  ⏎ $$x = \frac{12}{4} = 3 \quad \text{or} \quad x = \frac{-2}{4} = -\frac{1}{2}$$ ⏎  ⏎ **Answer:** $x = 3$ or $x = -\frac{1}{2}$
- **After:** When the discriminant $b^{2} - 4ac$ is not a perfect square, the quadratic will not factor over the integers. For $2x^{2} - 5x - 3$ it is $49$, so it factors: $(2x + 1)(x - 3)$. For $x^{2} + 4x - 1$ it is $20$, so go straight to the formula or Desmos.

### 15. coverage · CREATE (sat-reading-comprehension)

*Why:* Cross-Text Connections had no cards; filed under sat-reading-comprehension, whose 700-800 twin already holds the Text 1 / Text 2 cards.

- **Before:** (no card)
- **After (front):** A choice says the author of Text 2 would reject Text 1's claim entirely. When is that right?
- **After (back):** Only when Text 2 says the claim is false. If Text 2 grants the finding and raises a limitation or another explanation, full rejection is too strong; the answer will be a limited response, such as 'the finding is valid but may not apply to...'.
