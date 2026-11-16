import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-titrations-equilibrium-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the pH at the equivalence point of a weak acid–strong base titration?`]: {
    question: r`Formic acid is titrated with KOH. At the equivalence point the flask holds only potassium formate in water. What is the pH there, and why?`,
    options: [r`Exactly 7, because acid and base moles are equal`, r`Below 7, because some formic acid stays un-ionized`, r`Above 7, because formate takes protons from water`, r`Above 7, because excess KOH remains in the flask`],
    correctAnswer: 2,
    explanation: r`At equivalence all the formic acid has become formate, the conjugate base of a weak acid, which hydrolyzes water to make OH⁻. Equal moles give pH 7 only for a strong acid with a strong base, no formic acid is left over to acidify the solution, and there is no excess KOH until after equivalence.`,
  },
  [r`State the common ion effect.`]: {
    question: r`Solid $BaSO_4$ is shaken with each of four liquids at the same temperature. In which one does the least $BaSO_4$ dissolve?`,
    options: [r`0.10 M Na₂SO₄`, r`0.10 M NaCl`, r`0.10 M KNO₃`, r`Pure water`],
    correctAnswer: 0,
    explanation: r`Sodium sulfate supplies sulfate, an ion already in $BaSO_4(s) \rightleftharpoons Ba^{2+} + SO_4^{2-}$, so the equilibrium is pushed back toward the solid and less dissolves. NaCl and KNO₃ share no ion with the solid, so they do not suppress solubility compared with pure water.`,
  },
  [r`How do you predict the direction of shift using $Q$ and $K$?`]: {
    question: r`The gas-phase reaction $A(g) \rightleftharpoons 2B(g)$ is at equilibrium when the container volume is suddenly doubled at constant temperature. Just after the change, how does $Q$ compare with $K$, and what follows?`,
    options: [r`Q = K/2, so the reaction shifts toward A`, r`Q = 2K, so the reaction shifts toward A`, r`Q = K still, so no net reaction occurs`, r`Q = K/2, so the reaction shifts toward B`],
    correctAnswer: 3,
    explanation: r`$Q = [B]^2/[A]$. Halving both concentrations gives $(1/4)/(1/2) = 1/2$ of the old value, so $Q = K/2 < K$ and the reaction runs forward toward B. A shift toward A needs $Q > K$, $Q = 2K$ would follow from compression, and $Q$ stays equal to $K$ only when both sides have the same number of gas moles.`,
  },
  [r`What is true at the half-equivalence point?`]: {
    question: r`Two weak monoprotic acids are titrated with NaOH. At half-equivalence the pH is 3.5 for acid X and 5.5 for acid Y. How do the two acids compare?`,
    options: [r`Y is stronger; its Ka is 100 times X's`, r`X is stronger; its Ka is 100 times Y's`, r`X is stronger; its Ka is 2 times Y's`, r`Y is stronger; its Ka is 2 times X's`],
    correctAnswer: 1,
    explanation: r`At half-equivalence [HA] = [A⁻], so the pH read there is the $pK_a$: 3.5 for X and 5.5 for Y. The lower $pK_a$ is the stronger acid, and a gap of 2 units is a factor of $10^2$ = 100 in $K_a$. Picking Y reads a higher $pK_a$ as stronger, and a factor of 2 forgets that the scale is logarithmic.`,
  },
  [r`At the half-equivalence point of a weak acid titration, pH = {{c1::pKa}}.`]: {
    question: r`A flask is prepared by dissolving 0.30 mol of benzoic acid ($pK_a = 4.2$) and 0.15 mol of KOH together in 1 L of water. What is the pH of the mixture?`,
    options: [r`4.2`, r`7.0`, r`8.4`, r`2.1`],
    correctAnswer: 0,
    explanation: r`The KOH neutralizes exactly half of the acid, leaving 0.15 mol of benzoic acid and 0.15 mol of benzoate. That is the half-equivalence state, where [HA] = [A⁻] and pH = $pK_a$ = 4.2. A pH of 7.0 or 8.4 treats the mixture as fully neutralized, and 2.1 halves the $pK_a$.`,
  },
  [r`Adding an inert gas at constant volume:`]: {
    question: r`$PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g)$ is at equilibrium in a rigid steel vessel. Helium is pumped in until the total pressure doubles, at constant temperature. What is the effect?`,
    options: [r`Partial pressures all double, so Q > K and PCl₅ re-forms`, r`Partial pressures all halve, so Q < K and more PCl₅ breaks up`, r`Total pressure doubles, so it shifts to the side with fewer moles`, r`Partial pressures stay the same, so Q = K and nothing shifts`],
    correctAnswer: 3,
    explanation: r`In a rigid vessel the moles and volume of each reacting gas are unchanged, so each partial pressure is unchanged and $Q$ still equals $K$. Helium adds to the total pressure only. The Le Chatelier pressure rule applies when the volume changes and the partial pressures of the reacting gases change with it.`,
  },
  [r`Adding a common ion to a saturated solution:`]: {
    question: r`A saturated $CaF_2$ solution sits over excess solid. Solid NaF is stirred in and equilibrium is re-established at the same temperature. Compared with before, how have $[Ca^{2+}]$ and $K_{sp}$ changed?`,
    options: [r`[Ca²⁺] is lower and Ksp is smaller`, r`[Ca²⁺] is lower and Ksp is unchanged`, r`[Ca²⁺] is unchanged and Ksp is unchanged`, r`[Ca²⁺] is higher and Ksp is larger`],
    correctAnswer: 1,
    explanation: r`The added fluoride makes $Q$ exceed $K_{sp}$, so CaF₂ precipitates until $[Ca^{2+}][F^-]^2$ equals the same $K_{sp}$ again, leaving less calcium in solution. The constant changes only with temperature, so answers that alter $K_{sp}$ confuse the position of an equilibrium with its constant.`,
  },
  [r`How does adding excess $NH_3$ dissolve solid $AgCl$?`]: {
    question: r`Solid AgBr sits in equilibrium with its saturated solution. KCN is added, and $Ag^+$ forms the very stable complex $Ag(CN)_2^-$. What happens?`,
    options: [r`Free [Ag⁺] rises, so AgBr precipitates and [Br⁻] falls`, r`Free [Ag⁺] falls, so Ksp falls and [Br⁻] falls with it`, r`Free [Ag⁺] falls, so more AgBr dissolves and [Br⁻] rises`, r`Free [Ag⁺] rises, so more AgBr dissolves and [Br⁻] rises`],
    correctAnswer: 2,
    explanation: r`Cyanide ties up free Ag⁺ in the complex, so $Q = [Ag^+][Br^-]$ drops below $K_{sp}$ and more solid dissolves, releasing bromide. The complex removes free silver ion and does not add it, and $K_{sp}$ is a constant at fixed temperature, so it does not fall.`,
  },
  [r`A monoprotic unknown needs 25 mL of 0.10 M NaOH to reach equivalence. What does that tell you, and what does it not?`]: {
    question: r`A 0.50 g sample of an unknown monoprotic acid needs 25 mL of 0.20 M NaOH to reach equivalence. What can be concluded from this result alone?`,
    options: [r`Molar mass is 100 g/mol; acid strength is still unknown`, r`Molar mass is 100 g/mol; the acid must be a strong acid`, r`Molar mass is 10 g/mol; acid strength is still unknown`, r`Molar mass is 10 g/mol; the acid must be a weak acid`],
    correctAnswer: 0,
    explanation: r`Moles of acid = 0.025 L × 0.20 M = 0.0050 mol, so the molar mass is 0.50 g / 0.0050 mol = 100 g/mol. Titrant volume counts moles only: a strong and a weak acid of equal amount need the same volume, so strength must come from the pH at half-equivalence. The 10 g/mol answers slip a power of ten.`,
  },
  [r`A saturated solution of $Mg(OH)_2$ is treated with strong acid. Predict the effect on dissolved $[Mg^{2+}]$.`]: {
    question: r`Solid $Fe(OH)_3$ sits at the bottom of a water sample. Acid is added, lowering the pH from 9 to 5. What happens to the dissolved $[Fe^{3+}]$?`,
    options: [r`It falls, since H⁺ removes OH⁻ and Q rises above Ksp`, r`It rises, since H⁺ makes the Ksp of the solid larger`, r`It rises, since H⁺ removes OH⁻ and Q drops below Ksp`, r`It is unchanged, since H⁺ is not in the Ksp expression`],
    correctAnswer: 2,
    explanation: r`H⁺ neutralizes OH⁻, a product of the dissolution, so $Q = [Fe^{3+}][OH^-]^3$ falls below $K_{sp}$ and more solid dissolves until they match again. Removing a product lowers $Q$, it does not raise it. $K_{sp}$ is fixed at constant temperature, and H⁺ acts through [OH⁻] even though it is not written in the expression.`,
  },
  [r`For a salt $AB_2$ with molar solubility $s$, $K_{sp} =$ {{c1::$4s^3$}}.`]: {
    question: r`Lead(II) iodide, $PbI_2$, has a molar solubility of about $1 \times 10^{-3}$ M in pure water. What is its $K_{sp}$?`,
    options: [r`1 × 10⁻⁹`, r`2 × 10⁻⁹`, r`1 × 10⁻⁶`, r`4 × 10⁻⁹`],
    correctAnswer: 3,
    explanation: r`$[Pb^{2+}] = s$ and $[I^-] = 2s$, so $K_{sp} = (s)(2s)^2 = 4s^3 = 4 \times (10^{-3})^3 = 4 \times 10^{-9}$. The value 1 × 10⁻⁹ uses $s^3$ and ignores the 2, 2 × 10⁻⁹ doubles without squaring the 2, and 1 × 10⁻⁶ uses $s^2$ as for a 1:1 salt.`,
  },
  [r`Distinguish the endpoint of a titration from the equivalence point.`]: {
    question: r`An acid sample is titrated with NaOH. The indicator changes color at 26.0 mL, but the stoichiometric point is really at 25.0 mL. If the student uses 26.0 mL, the calculated acid concentration is:`,
    options: [r`Too low, because the endpoint came after equivalence`, r`Too high, because the endpoint came after equivalence`, r`Too high, because the endpoint came before equivalence`, r`Correct, because the endpoint defines the equivalence`],
    correctAnswer: 1,
    explanation: r`The endpoint (color change) fell 1.0 mL past the equivalence point, so the student credits the acid with more moles of base than it actually consumed and the result is too high. The endpoint is only an estimate of the equivalence point, and the gap between them is the titration's systematic error.`,
  },
  [r`Choose an indicator whose $pK_a$ is near the {{c1::pH at the equivalence point}}, since its color change spans about $pK_a \pm 1$.`]: {
    question: r`A weak acid is titrated with NaOH, and the equivalence point lies at pH 8.8. By mistake the student uses methyl red, which changes color between pH 4 and 6. What is the consequence?`,
    options: [r`The color changes too late, so the volume read is too high`, r`The color changes on time, so the volume read is accurate`, r`The color never changes, so no volume can be read at all`, r`The color changes too early, so the volume read is too low`],
    correctAnswer: 3,
    explanation: r`The solution passes through pH 4 to 6 in the buffer region, well before equivalence, so methyl red signals early and the recorded volume is too small. An indicator must have a $pK_a$ near the equivalence pH, here about 9, such as phenolphthalein. The solution does cross methyl red's range, so the color does change.`,
  },
  [r`At the first equivalence point of a diprotic acid the dominant species is amphoteric. How do you estimate that pH?`]: {
    question: r`Partway through a titration, a solution contains almost only the amphoteric ion $HA^-$ of an acid $H_2A$ and reads pH 4.5. If $pK_{a1} = 2.0$, what is $pK_{a2}$?`,
    options: [r`7.0`, r`6.5`, r`9.0`, r`2.5`],
    correctAnswer: 0,
    explanation: r`When the amphoteric $HA^-$ dominates (the first equivalence point), pH ≈ $(pK_{a1} + pK_{a2})/2$, so $4.5 = (2.0 + pK_{a2})/2$ and $pK_{a2} = 9.0 - 2.0 = 7.0$. Adding gives 6.5, subtracting gives 2.5, and 9.0 doubles the pH but forgets to subtract $pK_{a1}$.`,
  },
  [r`A titration curve is steepest at the {{c1::equivalence point}} and flattest at the {{c2::half-equivalence point}}.`]: {
    question: r`A weak acid is titrated with NaOH and reaches equivalence at 30 mL. Near which volumes does adding one more milliliter of NaOH change the pH the least and the most?`,
    options: [r`Least near 30 mL; most near 15 mL`, r`Least near 0 mL; most near 15 mL`, r`Least near 15 mL; most near 30 mL`, r`Least near 15 mL; most near 0 mL`],
    correctAnswer: 2,
    explanation: r`The curve is flattest at half-equivalence (15 mL), the center of the buffer region where [HA] = [A⁻], and steepest at equivalence (30 mL), where nothing is left to neutralize the next drop. Swapping the two reverses buffer and jump, and the start of the curve is neither the flattest nor the steepest part.`,
  },
  [r`Why is the vertical jump at equivalence smaller for a weak acid than for a strong acid at the same concentration?`]: {
    question: r`Four monoprotic acids, each 0.10 M, are titrated with 0.10 M NaOH. Which one shows the smallest vertical jump in pH at its equivalence point?`,
    options: [r`The acid with pKa 6`, r`The acid with pKa 9`, r`The acid with pKa 3`, r`The acid with pKa 0`],
    correctAnswer: 1,
    explanation: r`The weaker the acid, the higher the pH of its buffer region just before equivalence, so the curve has less room to jump before it levels off near the pH of excess NaOH. The acid with $pK_a$ 9 is the weakest and shows almost no jump; stronger acids approach equivalence from lower pH and jump further.`,
  },
  [r`Why is $CaCO_3$ far more soluble in acid while $NaCl$ solubility is pH-independent?`]: {
    question: r`Four silver salts each sit as a solid under water. Dilute nitric acid is added to each. Which salt dissolves to a much greater extent than before?`,
    options: [r`AgCl`, r`AgBr`, r`AgI`, r`Ag₃PO₄`],
    correctAnswer: 3,
    explanation: r`Phosphate is the conjugate base of a weak acid, so H⁺ protonates it, lowers $[PO_4^{3-}]$ and pulls more solid into solution. Chloride, bromide and iodide are conjugates of strong acids and do not react with H⁺, so the solubility of those three salts does not depend on pH.`,
  },
  [r`A precipitate forms when the ion product $Q$ is {{c1::greater than}} $K_{sp}$, and the solution is unsaturated when $Q$ is below $K_{sp}$.`]: {
    question: r`100 mL of $2 \times 10^{-4}$ M $MNO_3$ is mixed with 100 mL of $2 \times 10^{-4}$ M NaX. The 1:1 salt MX has $K_{sp} = 2 \times 10^{-8}$. Does MX precipitate?`,
    options: [r`No; Q = 1 × 10⁻⁸, which is below Ksp`, r`Yes; Q = 4 × 10⁻⁸, which is above Ksp`, r`Yes; Q = 2 × 10⁻⁴, which is above Ksp`, r`No; Q = 2 × 10⁻⁸, which just equals Ksp`],
    correctAnswer: 0,
    explanation: r`Mixing equal volumes halves each concentration to 1 × 10⁻⁴ M, so $Q = (10^{-4})^2 = 1 \times 10^{-8}$, below $K_{sp}$: the solution is unsaturated and nothing precipitates. The value 4 × 10⁻⁸ uses the concentrations before mixing, 2 × 10⁻⁴ adds instead of multiplying, and 2 × 10⁻⁸ dilutes only one of the two ions.`,
  },
  [r`Adding a common ion shifts weak-acid ionization {{c1::left}}, decreasing percent dissociation while $K_a$ stays {{c2::unchanged}}.`]: {
    question: r`Solid NaF is dissolved in a solution of the weak acid HF at constant temperature. What happens to the pH, to the percent dissociation of HF and to $K_a$?`,
    options: [r`pH falls, percent dissociation falls, Ka is unchanged`, r`pH rises, percent dissociation falls, Ka is unchanged`, r`pH rises, percent dissociation falls, Ka is smaller`, r`pH rises, percent dissociation rises, Ka is unchanged`],
    correctAnswer: 1,
    explanation: r`Added F⁻ pushes $HF \rightleftharpoons H^+ + F^-$ to the left, so less HF is dissociated, [H⁺] drops and the pH rises. $K_a$ depends only on temperature, so it stays the same. A falling pH gets the direction of [H⁺] backwards, and a rising percent dissociation ignores the leftward shift.`,
  },
  [r`How many equivalence points and buffer regions does a diprotic acid titration curve show?`]: {
    question: r`A solution of sodium carbonate is titrated with HCl. Carbonate accepts two protons in separate steps. What does its titration curve show?`,
    options: [r`Two equivalence points and one buffer region`, r`One equivalence point and two buffer regions`, r`Two equivalence points and two buffer regions`, r`One equivalence point and one buffer region`],
    correctAnswer: 2,
    explanation: r`Each proton transfer has its own buffer plateau followed by its own equivalence point, so a species that takes two protons shows two of each, alternating, just as a diprotic acid does when titrated with base. The plateaus are centered on the two $pK_a$ values of carbonic acid, and every buffer region ends in its own jump.`,
  },
  [r`Can you rank the solubility of two salts just by comparing their $K_{sp}$ values?`]: {
    question: r`A table lists $K_{sp}$ values: AgCl $1.8 \times 10^{-10}$, AgBr $5 \times 10^{-13}$ and $Ag_2CrO_4$ $1.1 \times 10^{-12}$. For which pair can molar solubilities be ranked just by comparing $K_{sp}$?`,
    options: [r`AgCl and AgBr, because both are 1:1 salts`, r`AgCl and Ag₂CrO₄, because both contain Ag⁺`, r`AgBr and Ag₂CrO₄, because their Ksp are close`, r`Any pair, because a lower Ksp is less soluble`],
    correctAnswer: 0,
    explanation: r`For two 1:1 salts $s = \sqrt{K_{sp}}$ in both cases, so the larger $K_{sp}$ is the more soluble salt. Silver chromate is a 2:1 salt with $K_{sp} = 4s^3$, so its value converts through a different power and cannot be compared directly; it is in fact more soluble than AgCl despite its smaller $K_{sp}$.`,
  },
  [r`Adding 0.5 equivalents of strong base to a weak acid gives a buffer whose pH equals {{c1::the $pK_a$}}.`]: {
    question: r`A chemist has 0.20 mol of a weak acid HA in solution and wants a buffer whose pH equals the acid's $pK_a$. How much NaOH should be added?`,
    options: [r`0.20 mol`, r`0.10 mol`, r`0.40 mol`, r`0.02 mol`],
    correctAnswer: 1,
    explanation: r`Adding 0.10 mol of NaOH, half an equivalent, converts half the HA into A⁻, leaving 0.10 mol of each; the ratio is 1, so pH = $pK_a$. Adding 0.20 mol reaches the equivalence point and leaves only A⁻, 0.40 mol leaves excess strong base, and 0.02 mol gives a 1:9 ratio about one unit below the $pK_a$.`,
  },
  [r`From the starting pH alone, before any titrant is added, how do you tell a strong acid from a weak one?`]: {
    question: r`Two monoprotic acids are each prepared at 0.010 M. Before any NaOH is added, acid A reads pH 2.0 and acid B reads pH 4.0. Which conclusion is correct?`,
    options: [r`B is strong; A is weak and its equivalence pH is above 7`, r`A is strong; B is weak and its equivalence pH is below 7`, r`A is strong; B is weak and its equivalence pH is exactly 7`, r`A is strong; B is weak and its equivalence pH is above 7`],
    correctAnswer: 3,
    explanation: r`A strong acid starts at $-\log C = -\log(0.010) = 2.0$, which matches A. B starts two units higher, so it is only slightly dissociated and weak, and its conjugate base makes the equivalence point basic. An equivalence pH of exactly 7 belongs to the strong acid, and one below 7 belongs to a weak base titrated with strong acid.`,
  },
}
