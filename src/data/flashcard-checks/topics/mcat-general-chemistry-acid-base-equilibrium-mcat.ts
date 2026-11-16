import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-acid-base-equilibrium-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Describe the blood bicarbonate buffer.`]: {
    question: r`After a sprint, lactic acid releases H⁺ into the blood. How does the bicarbonate buffer system dispose of this added acid?`,
    options: [r`H⁺ joins CO₂, and the HCO₃⁻ that forms is exhaled`, r`H⁺ joins HCO₃⁻, and the CO₂ that forms is exhaled`, r`H⁺ joins H₂CO₃, and the H₂O that forms is exhaled`, r`H⁺ joins HCO₃⁻, and the CO₂ that forms is stored`],
    correctAnswer: 1,
    explanation: r`Added H⁺ pushes $CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$ to the left: bicarbonate takes up the proton, and the CO₂ produced leaves through the lungs. CO₂ and H₂CO₃ are the acid side of the pair and do not absorb H⁺, bicarbonate is an ion and cannot be exhaled, and storing the CO₂ would stall the shift and keep the blood acidic.`,
  },
  [r`Give the Henderson–Hasselbalch equation.`]: {
    question: r`A weak acid HA has $pK_a = 5.0$. In a certain solution, [HA] is 100 times larger than [A⁻]. What is the pH of this solution?`,
    options: [r`7.0`, r`5.0`, r`4.0`, r`3.0`],
    correctAnswer: 3,
    explanation: r`$pH = pK_a + \log([A^-]/[HA]) = 5.0 + \log(1/100) = 5.0 - 2 = 3.0$. A pH of 7.0 comes from inverting the ratio, 5.0 from dropping the log term, and 4.0 from treating $\log 100$ as 1.`,
  },
  [r`How do $pH$ and $[H^{+}]$ relate?`]: {
    question: r`At 25°C a cleaning solution has $[OH^-] = 1 \times 10^{-4}$ M. What are its pH and its $[H^+]$?`,
    options: [r`pH 10, with [H⁺] = 1 × 10⁻¹⁰ M`, r`pH 4, with [H⁺] = 1 × 10⁻⁴ M`, r`pH 10, with [H⁺] = 1 × 10⁻⁴ M`, r`pH 4, with [H⁺] = 1 × 10⁻¹⁰ M`],
    correctAnswer: 0,
    explanation: r`pOH = 4, so pH = 14 − 4 = 10, and $[H^+] = 10^{-pH} = 1 \times 10^{-10}$ M. Calling the pH 4 confuses pOH with pH, and pairing pH 10 with $10^{-4}$ M (or pH 4 with $10^{-10}$ M) breaks the rule $pH = -\log[H^+]$.`,
  },
  [r`What does a lower $pK_a$ indicate?`]: {
    question: r`Chloroacetic acid has $pK_a = 2.9$ and acetic acid has $pK_a = 4.8$. For 0.1 M solutions of each, which statement is correct?`,
    options: [r`Chloroacetic acid gives the lower pH and has the stronger conjugate base`, r`Acetic acid gives the lower pH and has the weaker conjugate base`, r`Chloroacetic acid gives the lower pH and has the weaker conjugate base`, r`Acetic acid gives the lower pH and has the stronger conjugate base`],
    correctAnswer: 2,
    explanation: r`The lower $pK_a$ belongs to the stronger acid, which dissociates more and so gives the lower pH at equal concentration; its conjugate base is correspondingly weaker. Choosing acetic acid reads a higher $pK_a$ as stronger, and giving the stronger acid the stronger conjugate base reverses the inverse relationship within a pair.`,
  },
  [r`What is the pH of a 0.01 M HCl solution?`]: {
    question: r`A technician pipets 10 mL of 0.10 M HCl into a flask and adds water to a final volume of 1.0 L. What is the pH of the diluted solution?`,
    options: [r`1`, r`2`, r`3`, r`4`],
    correctAnswer: 2,
    explanation: r`The dilution is 100-fold, so $[H^+] = 0.10 \times (10/1000) = 1 \times 10^{-3}$ M, and because HCl dissociates fully the pH is 3. A pH of 1 ignores the dilution, 2 treats it as only tenfold, and 4 treats it as a thousandfold.`,
  },
  [r`Which is a strong acid?`]: {
    question: r`A student writes ionization equations in water for four acids. For which one should a single forward arrow be used instead of an equilibrium arrow?`,
    options: [r`HClO₄`, r`HClO`, r`HF`, r`H₂SO₃`],
    correctAnswer: 0,
    explanation: r`Perchloric acid, HClO₄, is one of the six strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄) and dissociates essentially completely. HClO and H₂SO₃ are look-alikes of strong acids with fewer oxygens and are weak, and HF is weak even though it is a hydrogen halide.`,
  },
  [r`Autoionization of water produces:`]: {
    question: r`A sample of pure water at an elevated temperature has $[H_3O^+] = 2 \times 10^{-7}$ M. What are $[OH^-]$ and $K_w$ at this temperature?`,
    options: [r`5 × 10⁻⁸ M and 1 × 10⁻¹⁴`, r`2 × 10⁻⁷ M and 2 × 10⁻⁷`, r`5 × 10⁻⁸ M and 4 × 10⁻¹⁴`, r`2 × 10⁻⁷ M and 4 × 10⁻¹⁴`],
    correctAnswer: 3,
    explanation: r`Autoionization makes one H₃O⁺ and one OH⁻ per event, so in pure water the two are equal at 2 × 10⁻⁷ M and $K_w = (2 \times 10^{-7})^2 = 4 \times 10^{-14}$. The 5 × 10⁻⁸ M answers assume $K_w$ is still 10⁻¹⁴, which holds only at 25°C, and 2 × 10⁻⁷ for $K_w$ forgets to multiply the two concentrations.`,
  },
  [r`Which is the strongest conjugate base?`]: {
    question: r`Sodium salts of four anions are dissolved in separate beakers of water. Which anion pulls a proton off water to a measurable extent?`,
    options: [r`Br⁻`, r`HCOO⁻`, r`NO₃⁻`, r`I⁻`],
    correctAnswer: 1,
    explanation: r`Formate is the conjugate base of formic acid, a weak acid, so it is a real base in water. Bromide, nitrate and iodide are conjugates of the strong acids HBr, HNO₃ and HI, which makes them negligible bases that leave the pH at 7.`,
  },
  [r`For a polyprotic acid, $K_{a1}$ exceeds $K_{a2}$ by {{c1::several orders of magnitude}} because pulling a proton off an anion is far harder.`]: {
    question: r`A diprotic acid $H_2A$ has $K_{a1} = 1 \times 10^{-3}$. Which value is the most reasonable for its $K_{a2}$?`,
    options: [r`1 × 10⁻²`, r`1 × 10⁻³`, r`5 × 10⁻⁴`, r`1 × 10⁻⁸`],
    correctAnswer: 3,
    explanation: r`The second proton must leave an anion, which holds it far more tightly, so $K_{a2}$ is smaller than $K_{a1}$ by several orders of magnitude. A value of 10⁻² would make the second loss easier than the first, 10⁻³ treats the two protons as equivalent, and 5 × 10⁻⁴ allows only a factor of two.`,
  },
  [r`Buffer capacity peaks when $[A^-] = [HA]$, that is when pH equals {{c1::$pK_a$}}, and it rises with the {{c2::total concentration}} of the pair.`]: {
    question: r`Four buffers are made from the same weak acid HA and its salt. Which one best resists a pH change when either strong acid or strong base is added?`,
    options: [r`0.50 M HA with 0.50 M A⁻`, r`0.05 M HA with 0.05 M A⁻`, r`0.90 M HA with 0.10 M A⁻`, r`0.10 M HA with 0.90 M A⁻`],
    correctAnswer: 0,
    explanation: r`Capacity is greatest at a 1:1 ratio (pH = $pK_a$) and grows with total concentration, so 0.50 M of each wins. The 0.05 M buffer has the right ratio but a tenth of the material, and the 9:1 and 1:9 mixtures have the same 1.0 M total yet nearly run out of one partner in one direction.`,
  },
  [r`Ion trapping: why does a weakly basic drug accumulate in the acidic stomach lumen?`]: {
    question: r`A weakly basic drug (conjugate acid $pK_a = 8$) crosses membranes only in its neutral form. It equilibrates between cytosol at pH 7.2 and a lysosome at pH 5. Where does the total drug concentration end up higher?`,
    options: [r`In the lysosome, where more of it is neutral and trapped`, r`In the cytosol, where more of it is protonated and trapped`, r`In the lysosome, where more of it is protonated and trapped`, r`In the cytosol, where more of it is neutral and trapped`],
    correctAnswer: 2,
    explanation: r`The neutral base diffuses into the acidic lysosome, picks up a proton, and the charged form cannot cross back, so drug accumulates there. The cytosol has the higher pH and so the less protonated drug, and a neutral molecule is the form that crosses freely, so it is never the trapped one.`,
  },
  [r`For a weak monoprotic acid at concentration $C$, what is the fast estimate of $[H^+]$?`]: {
    question: r`A 0.010 M solution of a weak monoprotic acid has $K_a = 4 \times 10^{-6}$. What is the quick estimate of its $[H^+]$?`,
    options: [r`4 × 10⁻⁸ M`, r`2 × 10⁻⁴ M`, r`4 × 10⁻⁴ M`, r`2 × 10⁻³ M`],
    correctAnswer: 1,
    explanation: r`$[H^+] \approx \sqrt{K_aC} = \sqrt{4 \times 10^{-6} \times 1 \times 10^{-2}} = \sqrt{4 \times 10^{-8}} = 2 \times 10^{-4}$ M. The value 4 × 10⁻⁸ forgets the square root, 4 × 10⁻⁴ roots the power of ten but not the 4, and 2 × 10⁻³ mishandles the exponent.`,
  },
  [r`Which is the stronger acid: one with $K_a = 1.8 \times 10^{-5}$ or one with $pK_a = 3.2$?`]: {
    question: r`Three acids are described as X ($K_a = 5 \times 10^{-4}$), Y ($pK_a = 2.5$) and Z ($pK_a = 4.5$). Which order runs from strongest to weakest acid?`,
    options: [r`Y > X > Z`, r`Z > X > Y`, r`X > Y > Z`, r`Y > Z > X`],
    correctAnswer: 0,
    explanation: r`Convert X first: $K_a = 5 \times 10^{-4}$ lies between 10⁻³ and 10⁻⁴, so its $pK_a$ is about 3.3. Lower $pK_a$ means stronger, giving Y (2.5) > X (3.3) > Z (4.5). Z first reads a high $pK_a$ as strong, X first is misled by the raw number 5 × 10⁻⁴, and placing X last takes its $pK_a$ to be about 5.`,
  },
  [r`A buffer is 0.20 M acetate and 0.10 M acetic acid ($pK_a$ 4.76). Estimate its pH.`]: {
    question: r`A buffer contains 0.40 M sodium lactate and 0.10 M lactic acid ($pK_a = 3.86$). Taking $\log 2 \approx 0.30$, what is its pH?`,
    options: [r`3.26`, r`4.16`, r`3.86`, r`4.46`],
    correctAnswer: 3,
    explanation: r`The base-to-acid ratio is 4, and $\log 4 = 2\log 2 = 0.60$, so pH = 3.86 + 0.60 = 4.46. The answer 3.26 inverts the ratio, 4.16 uses $\log 2$ instead of $\log 4$, and 3.86 would need equal concentrations.`,
  },
  [r`Ammonium has $pK_a = 9.25$. What is the $pK_b$ of ammonia, and is 0.1 M ammonia basic?`]: {
    question: r`Hypochlorous acid, HOCl, has $pK_a = 7.5$ at 25°C. What is the $pK_b$ of hypochlorite, $OCl^-$, and what is a 0.1 M NaOCl solution like?`,
    options: [r`pKb = 6.5, and the solution is acidic`, r`pKb = 6.5, and the solution is basic`, r`pKb = 7.5, and the solution is neutral`, r`pKb = 7.5, and the solution is basic`],
    correctAnswer: 1,
    explanation: r`Within a conjugate pair $pK_a + pK_b = 14$, so $pK_b = 14 - 7.5 = 6.5$, and hypochlorite accepts protons from water to give a basic solution. Calling it acidic assigns the acid's behavior to its conjugate base, and a $pK_b$ of 7.5 simply copies the $pK_a$ instead of subtracting from 14.`,
  },
  [r`A buffer works effectively only within about {{c1::1 pH unit}} of its $pK_a$, i.e. base-to-acid ratios from 1:10 to 10:1.`]: {
    question: r`Tris buffer has a $pK_a$ of 8.1. At which target pH would a Tris buffer be a poor choice because it lies outside the effective buffering range?`,
    options: [r`pH 7.3`, r`pH 8.1`, r`pH 6.1`, r`pH 8.9`],
    correctAnswer: 2,
    explanation: r`A buffer works within about one pH unit of its $pK_a$, here roughly 7.1 to 9.1. At pH 6.1 the acid form outnumbers the base form 100 to 1, so almost nothing is left to absorb added acid. The values 7.3, 8.1 and 8.9 all fall inside the window.`,
  },
  [r`Why does diluting a buffer with water leave its pH essentially unchanged?`]: {
    question: r`A 100 mL sample of buffer at pH 4.76 (0.10 M acetic acid, 0.10 M acetate) is diluted with pure water to 1.0 L. What happens to the buffer?`,
    options: [r`Its pH stays near 4.76 and its capacity falls`, r`Its pH stays near 4.76 and its capacity is unchanged`, r`Its pH rises to about 5.76 and its capacity falls`, r`Its pH rises to about 5.76 and its capacity is unchanged`],
    correctAnswer: 0,
    explanation: r`Dilution lowers [A⁻] and [HA] by the same factor of 10, so their ratio and therefore the pH are unchanged. Each liter now holds a tenth as much of the pair, so far less added acid or base can be absorbed. A one-unit rise in pH wrongly applies the strong-acid dilution rule to a buffer.`,
  },
  [r`Two buffers have the same pH but one is 1.0 M and the other 0.01 M. How do they differ?`]: {
    question: r`Two phosphate buffers both read pH 7.2. The first is 1.0 M in each component and the second is 0.010 M in each. A student stirs 0.020 mol of strong acid into one liter of each. Which outcome is expected?`,
    options: [r`The 0.010 M buffer holds its pH; the 1.0 M buffer is used up and plunges`, r`Both buffers hold their pH, because both began at the same 1:1 ratio`, r`Both buffers plunge, because any strong acid overwhelms a weak pair`, r`The 1.0 M buffer holds its pH; the 0.010 M buffer is used up and plunges`],
    correctAnswer: 3,
    explanation: r`Both start at the same pH because the ratio is the same, but capacity depends on the amount present. In the 1.0 M buffer the ratio only shifts from 1.0/1.0 to 0.98/1.02. In the 0.010 M buffer the 0.020 mol of H⁺ exceeds the 0.010 mol of base available, so the pair is exhausted and free strong acid remains. Equal ratios set equal pH, not equal capacity.`,
  },
  [r`Strong acid is added to a buffer. What is the correct order of operations to find the new pH?`]: {
    question: r`A buffer contains 0.60 mol A⁻ and 0.40 mol HA. Then 0.20 mol of HCl is added. Which ratio $[A^-]/[HA]$ belongs in the Henderson-Hasselbalch equation for the new pH?`,
    options: [r`0.60 / 0.40`, r`0.80 / 0.40`, r`0.40 / 0.60`, r`0.40 / 0.40`],
    correctAnswer: 2,
    explanation: r`Stoichiometry comes first: 0.20 mol H⁺ converts 0.20 mol A⁻ into HA, leaving 0.40 mol A⁻ and 0.60 mol HA. Using 0.60/0.40 applies the equation to the amounts before reaction, 0.80/0.40 adds the acid to the base, and 0.40/0.40 removes A⁻ without adding the HA it became.`,
  },
  [r`When does the 'x is small' approximation in a weak-acid ICE table break down?`]: {
    question: r`For which weak acid solution does the shortcut $[H^+] \approx \sqrt{K_aC}$ fail the 5 percent test, so that the quadratic is needed?`,
    options: [r`1.0 M acid with Ka = 1 × 10⁻⁴`, r`0.10 M acid with Ka = 1 × 10⁻²`, r`0.10 M acid with Ka = 1 × 10⁻⁵`, r`0.010 M acid with Ka = 1 × 10⁻⁶`],
    correctAnswer: 1,
    explanation: r`For the 0.10 M acid with $K_a = 10^{-2}$ the shortcut gives $x = \sqrt{10^{-3}} \approx 0.032$ M, about 32 percent of 0.10 M, far above 5 percent. The other three each give $x$ equal to 1 percent of the starting concentration (0.01 of 1.0, 10⁻³ of 0.10, 10⁻⁴ of 0.010), so the approximation holds for them.`,
  },
  [r`Complex ion formation is a Lewis acid-base reaction where the metal is the {{c1::Lewis acid}} and the ligand is the {{c2::Lewis base}}.`]: {
    question: r`In solution, $Fe^{3+}$ binds six $CN^-$ ions to form the complex ion $Fe(CN)_6^{3-}$. Which description of this reaction is correct?`,
    options: [r`Fe³⁺ is the Lewis acid; it accepts lone pairs from CN⁻`, r`Fe³⁺ is the Lewis base; it accepts lone pairs from CN⁻`, r`Fe³⁺ is the Lewis acid; it donates lone pairs to CN⁻`, r`Fe³⁺ is the Lewis base; it donates lone pairs to CN⁻`],
    correctAnswer: 0,
    explanation: r`The metal cation has empty orbitals and accepts electron pairs, which is what a Lewis acid does; each cyanide ligand donates a lone pair and is the Lewis base. The other choices either swap the two labels or have the electron-poor cation donating pairs it does not have.`,
  },
  [r`How does temperature affect $K_w$ and the pH of pure water at 37 degrees C?`]: {
    question: r`At 60°C, $K_w$ is about $1 \times 10^{-13}$. A solution at 60°C has a measured pH of 7.0. How should it be described?`,
    options: [r`Neutral, since [OH⁻] = 1 × 10⁻⁷ M equals [H⁺]`, r`Acidic, since [OH⁻] = 1 × 10⁻⁸ M is below [H⁺]`, r`Basic, since [OH⁻] = 1 × 10⁻⁶ M is above [H⁺]`, r`Neutral, since pH 7.0 is neutral at all temperatures`],
    correctAnswer: 2,
    explanation: r`With $[H^+] = 10^{-7}$ M, $[OH^-] = K_w/[H^+] = 10^{-13}/10^{-7} = 10^{-6}$ M, which is larger, so the solution is basic. Neutral at 60°C is pH 6.5, where both ions are equal. The neutral answers assume $K_w = 10^{-14}$ at every temperature, and the acidic answer divides in the wrong direction.`,
  },
  [r`Why does diluting a weak acid raise its pH yet increase its percent dissociation?`]: {
    question: r`A 0.10 M solution of formic acid, a weak acid, is diluted with water to 0.0010 M. Compared with the original solution, what happens to $[H^+]$ and to the fraction of acid molecules that are ionized?`,
    options: [r`[H⁺] falls and the fraction ionized falls`, r`[H⁺] rises and the fraction ionized rises`, r`[H⁺] rises and the fraction ionized falls`, r`[H⁺] falls and the fraction ionized rises`],
    correctAnswer: 3,
    explanation: r`Dilution spreads the protons through more volume, so [H⁺] drops and pH rises, but the equilibrium shifts toward the side with more dissolved particles, so a larger share of the acid ionizes. A rising [H⁺] confuses fraction ionized with concentration, and a falling fraction ignores the Le Chatelier shift.`,
  },
  [r`For any conjugate pair, $K_a \times K_b =$ {{c1::$K_w$}}, so $pK_a + pK_b =$ {{c2::$14$}} at 25 degrees C.`]: {
    question: r`Methylamine has $K_b = 5 \times 10^{-4}$ at 25°C, where $K_w = 1 \times 10^{-14}$. What is $K_a$ for the methylammonium ion?`,
    options: [r`5 × 10⁻¹¹`, r`2 × 10⁻¹¹`, r`2 × 10³`, r`5 × 10⁻⁴`],
    correctAnswer: 1,
    explanation: r`$K_a = K_w/K_b = (1 \times 10^{-14})/(5 \times 10^{-4}) = 2 \times 10^{-11}$. The value 2 × 10³ is $1/K_b$ and leaves out $K_w$, 5 × 10⁻⁴ assumes a conjugate pair shares one constant, and 5 × 10⁻¹¹ handles the exponents but carries the 5 over without dividing 1 by it.`,
  },
  [r`An aqueous $NH_4Cl$ solution is {{c1::acidic}} and an aqueous sodium acetate solution is {{c2::basic}}, by salt hydrolysis.`]: {
    question: r`Pyridinium chloride is the salt formed from the weak base pyridine and HCl. When it dissolves in water at 25°C, what is the pH and which ion is responsible?`,
    options: [r`Below 7, because the pyridinium ion donates H⁺ to water`, r`Above 7, because the pyridinium ion accepts H⁺ from water`, r`Above 7, because the chloride ion accepts H⁺ from water`, r`Exactly 7, because neither ion reacts with the water`],
    correctAnswer: 0,
    explanation: r`Pyridinium is the conjugate acid of a weak base, so it gives a proton to water and makes the solution acidic. It is already protonated and cannot act as the base. Chloride is the conjugate of a strong acid and does not react with water, and a neutral solution needs a salt of a strong acid with a strong base.`,
  },
  [r`In a solution of an acid and its conjugate base, the {{c1::conjugate base}} predominates whenever the pH is above the $pK_a$.`]: {
    question: r`The thiol side chain of cysteine has a $pK_a$ of about 8.3. Which form of the side chain predominates in a solution at pH 10 and in one at pH 6?`,
    options: [r`Thiol (SH) at pH 10; thiolate (S⁻) at pH 6`, r`Thiolate (S⁻) at pH 10 and also at pH 6`, r`Thiol (SH) at pH 10 and also at pH 6`, r`Thiolate (S⁻) at pH 10; thiol (SH) at pH 6`],
    correctAnswer: 3,
    explanation: r`Above the $pK_a$ the deprotonated form wins, so at pH 10 the side chain is mostly thiolate; below the $pK_a$, at pH 6, it is mostly the protonated thiol. The reversed answer flips the rule, and the two single-form answers ignore that 8.3 lies between the two pH values.`,
  },
  [r`Aspirin overdose is treated by alkalinizing the urine. What is the underlying chemistry?`]: {
    question: r`Phenobarbital is a weak acid with $pK_a \approx 7.4$. In an overdose, bicarbonate is given to raise the urine pH from 6.4 to 8.4. What does this do to the drug in the urine?`,
    options: [r`Ionized share falls from about 91% to about 9%, trapping it in urine`, r`Ionized share rises from about 9% to about 91%, trapping it in urine`, r`Ionized share rises from about 9% to about 91%, aiding reabsorption`, r`Ionized share falls from about 91% to about 9%, aiding reabsorption`],
    correctAnswer: 1,
    explanation: r`One unit below the $pK_a$ the ratio of A⁻ to HA is 1:10 (about 9% ionized); one unit above it is 10:1 (about 91%). The charged form cannot diffuse back across the tubule membrane, so it stays in the urine and is excreted. A falling ionized share reverses the pH rule, and reabsorption is what the uncharged form does.`,
  },
  [r`A panicking patient hyperventilates. Using the $CO_2$ and bicarbonate equilibrium, predict the change in blood pH.`]: {
    question: r`A hyperventilating patient feels light-headed and is told to breathe in and out of a paper bag. Why does this help restore normal blood pH?`,
    options: [r`Rebreathed CO₂ raises pCO₂, which consumes H⁺ and raises the pH`, r`Rebreathed O₂ lowers pCO₂, which restores H⁺ and lowers the pH`, r`Rebreathed CO₂ raises pCO₂, which restores H⁺ and lowers the pH`, r`Rebreathed O₂ lowers pCO₂, which consumes H⁺ and raises the pH`],
    correctAnswer: 2,
    explanation: r`Hyperventilation blows off CO₂, pulling $CO_2 + H_2O \rightleftharpoons H^+ + HCO_3^-$ to the left and raising pH. Rebreathing exhaled air brings pCO₂ back up, pushing the equilibrium to the right and returning H⁺, so the pH comes down to normal. More CO₂ never consumes H⁺, and the bag does not lower pCO₂.`,
  },
  [r`Respiratory acid-base disorders begin with a change in {{c1::$pCO_2$}}; metabolic ones begin with a change in {{c2::$HCO_3^{-}$}}.`]: {
    question: r`An arterial sample shows pH 7.30, $pCO_2$ = 60 mmHg (normal 40) and $HCO_3^-$ = 28 mM (normal 24). What is the disorder?`,
    options: [r`Respiratory acidosis; the raised HCO₃⁻ is renal compensation`, r`Metabolic acidosis; the raised pCO₂ is lung compensation`, r`Metabolic alkalosis; the raised pCO₂ is lung compensation`, r`Respiratory alkalosis; the raised HCO₃⁻ is renal compensation`],
    correctAnswer: 0,
    explanation: r`The pH is low, and the change that explains an acidosis is the high pCO₂, so the primary problem is respiratory; the kidneys retain bicarbonate to move the ratio back toward 20:1. Metabolic acidosis would begin with low bicarbonate, and either alkalosis would need a pH above 7.4.`,
  },
  [r`The isoelectric point is {{c1::the average of the two $pK_a$ values flanking the neutral species}}.`]: {
    question: r`Aspartic acid has $pK_a$ values of 2.1 (α-carboxyl), 3.9 (side-chain carboxyl) and 9.9 (α-amino). What is its isoelectric point?`,
    options: [r`6.0`, r`3.0`, r`6.9`, r`5.3`],
    correctAnswer: 1,
    explanation: r`The neutral species exists between the two carboxyl $pK_a$ values, so pI = (2.1 + 3.9)/2 = 3.0. The value 6.0 averages the α-carboxyl and α-amino values as if there were no acidic side chain, 6.9 averages the two highest (the rule for a basic side chain), and 5.3 averages all three.`,
  },
  [r`An amphiprotic species can both donate and accept a proton. Which ones does the MCAT reuse constantly?`]: {
    question: r`Carbonic acid has $pK_{a1} = 6.3$ and $pK_{a2} = 10.3$. Roughly what is the pH of a 0.1 M $NaHCO_3$ solution and of a 0.01 M $NaHCO_3$ solution?`,
    options: [r`About 8.3 at 0.1 M and 7.3 at 0.01 M`, r`About 6.3 in both solutions`, r`About 10.3 at 0.1 M and 9.3 at 0.01 M`, r`About 8.3 in both solutions`],
    correctAnswer: 3,
    explanation: r`Bicarbonate is amphiprotic, so its pH is about the average of the two flanking values, (6.3 + 10.3)/2 = 8.3, and is nearly independent of concentration. A one-unit drop on tenfold dilution is strong-base behavior, and 6.3 or 10.3 alone is a buffer midpoint where two species are present in equal amounts.`,
  },
  [r`Arrhenius, Bronsted-Lowry, and Lewis definitions of an acid: how do they nest?`]: {
    question: r`In the reaction $AlCl_3 + Cl^- \rightarrow AlCl_4^-$, aluminum chloride accepts an electron pair from chloride. Under which definitions is $AlCl_3$ acting as an acid?`,
    options: [r`The Brønsted-Lowry and Lewis definitions`, r`The Arrhenius definition only`, r`The Lewis definition only`, r`The Arrhenius and Lewis definitions`],
    correctAnswer: 2,
    explanation: r`AlCl₃ accepts an electron pair, which is Lewis acid behavior, but it has no proton to donate, so it is not a Brønsted-Lowry acid, and it is not releasing H⁺ in water, so it is not an Arrhenius acid. Lewis is the broadest definition and the only one that covers proton-free species.`,
  },
  [r`One pH unit above a weak acid's $pK_a$ leaves it about {{c1::91 percent}} ionized, and two units above about {{c2::99 percent}}.`]: {
    question: r`Ibuprofen is a weak acid with $pK_a = 4.4$. In the small intestine at pH 6.4, about what percentage of the drug is in the uncharged, membrane-permeable form?`,
    options: [r`About 1%`, r`About 9%`, r`About 50%`, r`About 99%`],
    correctAnswer: 0,
    explanation: r`Two units above the $pK_a$ the ratio of A⁻ to HA is $10^2$ = 100 to 1, so about 99% is ionized and only about 1% is uncharged HA. About 9% is the figure for one unit above, 50% applies only at pH = $pK_a$, and 99% is the ionized share, not the uncharged one.`,
  },
  [r`Amino acid anchors: the alpha carboxyl $pK_a$ is about {{c1::2}} and the alpha amino $pK_a$ is about {{c2::9.5}}.`]: {
    question: r`Alanine has no ionizable side chain. In a solution at pH 11, what are the states of its α-carboxyl and α-amino groups, and what is its net charge?`,
    options: [r`COO⁻ and NH₃⁺, giving a net charge of 0`, r`COO⁻ and NH₂, giving a net charge of −1`, r`COOH and NH₃⁺, giving a net charge of +1`, r`COOH and NH₂, giving a net charge of 0`],
    correctAnswer: 1,
    explanation: r`pH 11 is above both anchors (carboxyl near 2, amino near 9.5), so both groups are deprotonated: COO⁻ and neutral NH₂, for a net charge of −1. The zwitterion with NH₃⁺ exists between about pH 2 and 9.5, the +1 cation only below pH 2, and COOH with NH₂ would need the stronger acid group to keep its proton while the weaker one lost it.`,
  },
  [r`Strong vs concentrated: which word describes dissociation and which describes amount?`]: {
    question: r`Compare 0.001 M HCl with 1.0 M acetic acid ($K_a = 1.8 \times 10^{-5}$, so $[H^+] \approx 4 \times 10^{-3}$ M, pH about 2.4). Which has the lower pH, and why?`,
    options: [r`HCl at pH 3: a strong acid always has the lower pH`, r`HCl at pH 0: strong means it is highly concentrated`, r`Acetic acid at pH 2.4: it is weak but concentrated`, r`Acetic acid at pH 0: at 1.0 M it fully dissociates`],
    correctAnswer: 2,
    explanation: r`The HCl is strong but dilute: full dissociation of 0.001 M gives pH 3. The acetic acid is weak but concentrated, and even a small fraction of 1.0 M gives more H⁺, pH about 2.4. Strength describes how completely a compound dissociates, not how much is present, so a strong acid is not automatically at pH 0 and a concentrated weak acid does not fully dissociate.`,
  },
  [r`Blood buffer numbers: $pK_a$ about {{c1::6.1}}, bicarbonate about {{c2::24 mM}}, and dissolved $CO_2$ about 1.2 mM.`]: {
    question: r`In a patient with ketoacidosis, plasma bicarbonate falls from its normal 24 mM to 12 mM while dissolved $CO_2$ stays at its normal 1.2 mM. With $pK_a = 6.1$, what is the blood pH?`,
    options: [r`7.4`, r`6.1`, r`5.1`, r`7.1`],
    correctAnswer: 3,
    explanation: r`The ratio is 12/1.2 = 10, so pH = 6.1 + log 10 = 7.1. The value 7.4 belongs to the normal 20:1 ratio (24/1.2), 6.1 would need equal bicarbonate and CO₂, and 5.1 inverts the ratio.`,
  },
  [r`Physiological $pK_a$ anchors: carbonic acid {{c1::6.1}}, dihydrogen phosphate {{c2::6.8}}, and ammonium 9.25.`]: {
    question: r`Dihydrogen phosphate has $pK_a = 6.8$ and ammonium has $pK_a = 9.25$. In a cell compartment at pH 6.8, which description of the two systems is correct?`,
    options: [r`Equal H₂PO₄⁻ and HPO₄²⁻; ammonia is nearly all NH₃`, r`Equal H₂PO₄⁻ and HPO₄²⁻; ammonia is nearly all NH₄⁺`, r`Nearly all H₂PO₄⁻; ammonia is equal NH₄⁺ and NH₃`, r`Nearly all HPO₄²⁻; ammonia is nearly all NH₃`],
    correctAnswer: 1,
    explanation: r`At pH = $pK_a$ a pair is split 1:1, so phosphate is half H₂PO₄⁻ and half HPO₄²⁻, which is why it buffers well inside cells. The pH is more than two units below ammonium's 9.25, so over 99% is protonated NH₄⁺. Answers with mostly NH₃ put the pH above 9.25, and equal NH₄⁺ and NH₃ would need pH 9.25.`,
  },
  [r`Which amino acid side chain has a $pK_a$ near physiological pH, and why does that matter so much?`]: {
    question: r`A protein buffers well near pH 6.5. After one type of residue is chemically blocked, that buffering is lost. Which residue was blocked, and why?`,
    options: [r`Histidine; its imidazole pKa is near 6`, r`Lysine; its amino group pKa is near 6`, r`Aspartate; its carboxyl pKa is near 6`, r`Arginine; its guanidinium pKa is near 6`],
    correctAnswer: 0,
    explanation: r`Only histidine's imidazole has a side-chain $pK_a$ (about 6.0) close enough to physiological pH to trade protons there. Lysine (about 10.5) and arginine (about 12.5) stay protonated and aspartate (about 4) stays deprotonated near pH 6.5, so none of them can buffer in that range.`,
  },
  [r`Leveling effect: in water the strongest acid that can exist is {{c1::$H_3O^{+}$}} and the strongest base is {{c2::$OH^{-}$}}.`]: {
    question: r`Sodium amide contains $NH_2^-$, a far stronger base than $OH^-$. When 0.01 mol of $NaNH_2$ is added to 1 L of water at 25°C, what is the result?`,
    options: [r`NH₂⁻ stays intact in the water, giving a pH above 14`, r`NH₂⁻ is fully converted to OH⁻, giving a pH of 2`, r`NH₂⁻ is fully converted to OH⁻, giving a pH of 12`, r`NH₂⁻ reacts partly as a weak base, giving a pH of 10`],
    correctAnswer: 2,
    explanation: r`Water levels any base stronger than hydroxide: $NH_2^- + H_2O \rightarrow NH_3 + OH^-$ goes to completion, so the solution is 0.01 M OH⁻ with pOH 2 and pH 12. Amide cannot persist in water, a pH of 2 confuses pOH with pH, and a base stronger than OH⁻ does not behave as a weak base.`,
  },
}
