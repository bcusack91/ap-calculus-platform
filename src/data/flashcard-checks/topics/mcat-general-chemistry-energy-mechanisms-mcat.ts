import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-energy-mechanisms-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Compare kinetic and thermodynamic products.`]: {
    question: r`Sulfonating naphthalene at 80 °C gives mainly the 1-isomer. Running the same reversible reaction at 160 °C gives mainly the 2-isomer. Which statement fits both results?`,
    options: [r`The 1-isomer is more stable; the 2-isomer forms faster`, r`The 1-isomer forms faster and is also more stable`, r`The 1-isomer forms faster; the 2-isomer is more stable`, r`The 2-isomer forms faster and is also more stable`],
    correctAnswer: 2,
    explanation: r`The cooler run is under kinetic control, so its major product (the 1-isomer) is the one with the lower barrier. The hotter reversible run reaches equilibrium, so its major product (the 2-isomer) is the more stable one. Swapping the two labels reverses which temperature favors which, and if one isomer were both faster and more stable it would dominate at both temperatures.`,
  },
  [r`What determines the experimental rate law?`]: {
    question: r`For NO₂ + CO → NO + CO₂ the measured rate law is rate = k[NO₂]². Changing [CO] has no effect on the rate. What does this result show about the mechanism?`,
    options: [r`The slow step involves two NO₂ molecules and no CO`, r`The slow step involves one NO₂ molecule and one CO`, r`The balanced equation needs a coefficient of 2 on NO₂`, r`CO must be a catalyst instead of a true reactant`],
    correctAnswer: 0,
    explanation: r`The rate law reflects what collides in the slow step (and anything before it), so second order in NO₂ and zero order in CO means two NO₂ and no CO up to that point. A slow step with one NO₂ and one CO would give rate = k[NO₂][CO]. The balanced equation is already correct and does not set the exponents, and CO is consumed for good, so it is a reactant that simply enters after the slow step.`,
  },
  [r`Give the Arrhenius equation.`]: {
    question: r`At 300 K a reaction has $E_a/RT = 40$. The temperature is raised to 600 K, and $A$ and $E_a$ do not change. By what factor does the rate constant $k = Ae^{-E_a/RT}$ change?`,
    options: [r`It grows by a factor of $2$`, r`It shrinks by a factor of $e^{20}$`, r`It grows by a factor of $e^{40}$`, r`It grows by a factor of $e^{20}$`],
    correctAnswer: 3,
    explanation: r`Doubling $T$ halves the exponent from 40 to 20, so $k$ goes from $Ae^{-40}$ to $Ae^{-20}$, a factor of $e^{20}$ larger. A factor of 2 treats $k$ as directly proportional to $T$. A decrease gets the sign of the exponent backwards, and $e^{40}$ would need the exponent to drop all the way to zero.`,
  },
  [r`Why does temperature increase reaction rate?`]: {
    question: r`A gas-phase reaction is warmed from 300 K to 330 K. The collision frequency rises by about 5%, yet the rate rises about sixfold. What accounts for most of the increase?`,
    options: [r`The activation energy drops as molecules move faster`, r`A larger fraction of collisions carry at least $E_a$`, r`Collisions become far more frequent at higher speed`, r`The reaction turns more exothermic when it is heated`],
    correctAnswer: 1,
    explanation: r`Warming shifts the Maxwell-Boltzmann distribution so that many more collisions exceed the barrier, and that exponential effect dwarfs the 5% rise in collision frequency. The activation energy is a property of the pathway and does not fall with temperature. The stem itself rules out collision frequency as the main cause, and the enthalpy change does not set the rate.`,
  },
  [r`How do you distinguish an intermediate from a catalyst?`]: {
    question: r`Ozone is destroyed by Step 1, Cl + O₃ → ClO + O₂, followed by Step 2, ClO + O → Cl + O₂. How should Cl and ClO be classified?`,
    options: [r`Cl is an intermediate and ClO is a catalyst`, r`Cl is a catalyst and ClO is an intermediate`, r`Cl and ClO are both reaction intermediates`, r`Cl and ClO are both acting as catalysts`],
    correctAnswer: 1,
    explanation: r`Cl is used up in Step 1 and re-formed in Step 2, which is the pattern of a catalyst. ClO is made in Step 1 and used up in Step 2, which is the pattern of an intermediate. Swapping the labels reverses the two patterns, and calling both the same thing ignores that one is consumed first while the other is produced first.`,
  },
  [r`How does a catalyst speed a reaction?`]: {
    question: r`An uncatalyzed reaction has $E_a = 90$ kJ/mol and $\Delta H = -40$ kJ/mol. A catalyst is added. Which pair of values could describe the catalyzed reaction?`,
    options: [r`$E_a = 60$ kJ/mol and $\Delta H = -70$ kJ/mol`, r`$E_a = 90$ kJ/mol and $\Delta H = -70$ kJ/mol`, r`$E_a = 120$ kJ/mol and $\Delta H = -40$ kJ/mol`, r`$E_a = 60$ kJ/mol and $\Delta H = -40$ kJ/mol`],
    correctAnswer: 3,
    explanation: r`A catalyst opens a pathway with a lower barrier but leaves the reactant and product energies alone, so $E_a$ falls while $\Delta H$ stays at $-40$ kJ/mol. Any answer with $\Delta H = -70$ kJ/mol wrongly lets the catalyst change the thermodynamics. A barrier of 120 kJ/mol would make the reaction slower, which is the opposite of catalysis.`,
  },
  [r`A reaction has an activation energy of 50 kJ/mol without a catalyst and 30 kJ/mol with a catalyst. By what factor does the rate increase at 310 K? (R = 8.314 J/mol·K)`]: {
    question: r`A catalyst lowers a reaction's activation energy from 80 kJ/mol to 55 kJ/mol at a temperature where $RT = 2.5$ kJ/mol. If $A$ is unchanged, by what factor does the rate constant increase?`,
    options: [r`$e^{10}$`, r`$e^{22}$`, r`$e^{32}$`, r`$10$`],
    correctAnswer: 0,
    explanation: r`The ratio of rate constants is $e^{\Delta E_a/RT} = e^{25/2.5} = e^{10}$, about 22,000. The answers $e^{22}$ and $e^{32}$ put a whole barrier (55 or 80 kJ/mol) over $RT$ when only the 25 kJ/mol difference matters. A factor of 10 forgets that the barrier sits in an exponent.`,
  },
  [r`A reaction intermediate:`]: {
    question: r`A substitution proceeds by Step 1, (CH₃)₃CBr → (CH₃)₃C⁺ + Br⁻; Step 2, (CH₃)₃C⁺ + H₂O → (CH₃)₃COH₂⁺; Step 3, (CH₃)₃COH₂⁺ → (CH₃)₃COH + H⁺. Which species are reaction intermediates?`,
    options: [r`(CH₃)₃C⁺ and Br⁻`, r`(CH₃)₃COH₂⁺ and H⁺`, r`(CH₃)₃C⁺ and (CH₃)₃COH₂⁺`, r`(CH₃)₃CBr and (CH₃)₃COH`],
    correctAnswer: 2,
    explanation: r`An intermediate is made in one step and used up in a later one, so it cancels from the overall equation: that describes the carbocation and the protonated alcohol. Br⁻ and H⁺ are made and never consumed, so they are products. The alkyl bromide is a reactant and the alcohol is a product, and both remain in the overall equation.`,
  },
  [r`Enzymes are biological catalysts that:`]: {
    question: r`An enzyme speeds the forward reaction S → P by a factor of $10^6$. By what factor does it speed the reverse reaction P → S, and how much enzyme is left when the reaction is over?`,
    options: [r`By $10^6$, with none of the enzyme left`, r`By $1$, with all of the enzyme left`, r`By $10^{-6}$, with all of the enzyme left`, r`By $10^6$, with all of the enzyme left`],
    correctAnswer: 3,
    explanation: r`An enzyme lowers the single barrier that both directions cross, so forward and reverse speed up by the same factor, and as a catalyst it is not used up. Saying none is left treats the enzyme as a reactant. A factor of 1 or of $10^{-6}$ for the reverse reaction would change the equilibrium constant, which a catalyst cannot do.`,
  },
  [r`A heterogeneous catalyst is one that:`]: {
    question: r`Which of these processes is an example of heterogeneous catalysis?`,
    options: [r`Dissolved H⁺ speeding the hydrolysis of dissolved sucrose`, r`Solid nickel speeding the reaction of H₂ gas with ethene gas`, r`Gaseous NO speeding the oxidation of gaseous SO₂ by O₂`, r`A dissolved enzyme speeding the breakdown of dissolved urea`],
    correctAnswer: 1,
    explanation: r`Heterogeneous means the catalyst is in a different phase from the reactants, as with a solid metal acting on gases. Dissolved acid with a dissolved sugar, a gas acting on gases, and a dissolved enzyme with a dissolved substrate all share one phase with their reactants, so each is homogeneous catalysis.`,
  },
  [r`Two reactions have identical $\Delta G$. What determines which one is faster?`]: {
    question: r`At the same temperature and with similar frequency factors, Reaction 1 has $\Delta G = -30$ kJ/mol and $E_a = 120$ kJ/mol, and Reaction 2 has $\Delta G = -30$ kJ/mol and $E_a = 60$ kJ/mol. Which comparison is correct?`,
    options: [r`Reaction 2 is faster, and the two have equal $K$`, r`Reaction 1 is faster, and the two have equal $K$`, r`Both have equal rates, and the two have equal $K$`, r`Reaction 2 is faster, and it has the larger $K$`],
    correctAnswer: 0,
    explanation: r`Rate depends on the barrier, so the reaction with the lower $E_a$ is faster, while $K$ depends only on $\Delta G$, which is the same for both. Picking Reaction 1 reads a higher barrier as faster. Equal rates assumes $\Delta G$ sets the speed, and a larger $K$ for Reaction 2 assumes the barrier sets the equilibrium.`,
  },
  [r`By what physical mechanism do enzymes and other catalysts actually lower $E_a$?`]: {
    question: r`A chemist wants to design a molecule that binds an enzyme's active site as tightly as possible. Given how enzymes lower $E_a$, which species should the molecule be built to resemble?`,
    options: [r`The substrate in its ground state`, r`The product after it has formed`, r`The transition state of the reaction`, r`The solvent around the active site`],
    correctAnswer: 2,
    explanation: r`Enzymes lower the barrier by binding the transition state more tightly than the substrate, so a stable look-alike of the transition state binds best. A substrate look-alike binds only as well as the substrate does, and the product has to be released, so it is held weakly. Solvent is not what the active site is shaped to grip.`,
  },
  [r`Distinguish homogeneous from heterogeneous catalysis with an MCAT-level example of each.`]: {
    question: r`A solid platinum pellet catalyzes a gas-phase reaction. The pellet is replaced by the same mass of platinum ground to a fine powder. What happens to the reaction rate, and why?`,
    options: [r`It stays the same, because the catalyst mass is equal`, r`It rises, because the powder joins the reactants' phase`, r`It rises, because more catalyst surface is exposed`, r`It stays the same, because catalysts are never used up`],
    correctAnswer: 2,
    explanation: r`A heterogeneous catalyst works only at its surface, so the same mass with more surface area gives a faster reaction. Equal mass does not mean equal surface, and the fact that a catalyst is not consumed says nothing about how many sites are available. A powder is still a solid, so it does not become a homogeneous catalyst.`,
  },
  [r`What two conditions must a molecular collision satisfy to be productive?`]: {
    question: r`Two gas reactions have the same $E_a$ and run at the same temperature. One is between small atoms; the other is between bulky molecules that must meet at one specific site, and its rate constant is 1000 times smaller. Which Arrhenius term explains the difference?`,
    options: [r`A smaller $A$, since fewer collisions are well oriented`, r`A larger $A$, since bulky molecules collide more often`, r`A smaller exponential term, since its $E_a$ is larger`, r`A smaller exponential term, since its $T$ is lower`],
    correctAnswer: 0,
    explanation: r`With $E_a$ and $T$ equal, the exponential terms are identical, so the difference must come from $A$, which holds the orientation (steric) requirement. A larger $A$ would make the bulky reaction faster, not slower. Both answers that blame the exponential term contradict the stem, which fixes $E_a$ and $T$.`,
  },
  [r`Kinetic versus thermodynamic product: which dominates at low temperature and short reaction time?`]: {
    question: r`A reactant forms product M over a 45 kJ/mol barrier and product N over a 70 kJ/mol barrier. N is more stable than M by 20 kJ/mol. The reaction is run at −78 °C and quenched after one minute. What does the product mixture contain?`,
    options: [r`Mostly N, because it is the more stable product`, r`Mostly M, because it forms over the lower barrier`, r`Mostly N, because it forms over the higher barrier`, r`Equal M and N, because both steps are reversible`],
    correctAnswer: 1,
    explanation: r`Cold and brief conditions give no time or energy for products to revert, so the faster-forming product over the lower barrier dominates: M. Stability decides the outcome only when the system can equilibrate, which needs heat and time. A higher barrier means slower formation, and equal amounts would need equal barriers.`,
  },
  [r`Why is the rate law of a bimolecular elementary step simply rate $= k[A][B]$?`]: {
    question: r`O₃ + NO → NO₂ + O₂ is known to be a single-collision elementary step. In one trial [O₃] is tripled and [NO] is doubled. How does the rate of this step change?`,
    options: [r`It rises 5-fold, since the factors add`, r`It rises 3-fold, since only O₃ counts`, r`It cannot be found without rate data`, r`It rises 6-fold, since each order is 1`],
    correctAnswer: 3,
    explanation: r`For an elementary step the orders equal the coefficients, so rate = k[O₃][NO] and the rate changes by 3 × 2 = 6. Adding the factors gives 5 and ignoring NO gives 3. Rate data are needed only for an overall reaction; for a step stated to be elementary the rate law can be written directly.`,
  },
  [r`How do you spot a catalyst versus an intermediate when reading a written-out mechanism?`]: {
    question: r`SO₂ is oxidized by Step 1, 2NO + O₂ → 2NO₂, then Step 2 (twice), NO₂ + SO₂ → NO + SO₃. A student calls NO₂ the catalyst because it is missing from the overall equation. What is the correct reading?`,
    options: [r`NO is the catalyst: used in Step 1, then re-formed in Step 2`, r`NO₂ is the catalyst: formed in Step 1, then used in Step 2`, r`NO is an intermediate: used in Step 1, then re-formed in Step 2`, r`SO₂ is the catalyst: used in Step 2 and never re-formed`],
    correctAnswer: 0,
    explanation: r`A catalyst appears as a reactant first and as a product later, which is what NO does. NO₂ shows the opposite order, produced and then consumed, so it is an intermediate even though it also cancels from the overall equation. Used-then-re-formed is not the pattern of an intermediate, and SO₂ is simply a reactant.`,
  },
  [r`On a reaction profile, activation energy is measured from the {{c1::reactant valley}} up to the peak, not from the axis zero.`]: {
    question: r`On a one-step reaction profile the vertical axis reads 30 kJ/mol at the reactants, 110 kJ/mol at the peak and 10 kJ/mol at the products. What is the forward activation energy?`,
    options: [r`110 kJ/mol`, r`100 kJ/mol`, r`20 kJ/mol`, r`80 kJ/mol`],
    correctAnswer: 3,
    explanation: r`Activation energy is the climb from the reactants to the peak: 110 − 30 = 80 kJ/mol. Reading 110 kJ/mol measures from the zero of the axis. The 100 kJ/mol value is the climb from the products, which is the reverse barrier, and 20 kJ/mol is the size of the enthalpy change.`,
  },
  [r`How do you extract the overall $\Delta H$ from a reaction-coordinate diagram?`]: {
    question: r`A student sketches one profile with two routes for the same conversion. The starting material is drawn at 15 kJ/mol and the finished material at 45 kJ/mol. The uncatalyzed hump tops out at 95 kJ/mol and the catalyzed hump at 65 kJ/mol. What is the enthalpy change along each route?`,
    options: [r`+80 kJ/mol and then +50 kJ/mol`, r`+50 kJ/mol and then +20 kJ/mol`, r`+30 kJ/mol along both of the routes`, r`−30 kJ/mol along both of the routes`],
    correctAnswer: 2,
    explanation: r`The enthalpy change is the final level minus the starting level, 45 − 15 = +30 kJ/mol, and the height of the hump in between is irrelevant, so both routes give the same value. The +80 and +50 kJ/mol pair are the two forward barriers, and the +50 and +20 kJ/mol pair are the two reverse barriers. A value of −30 kJ/mol subtracts in the wrong order.`,
  },
  [r`The slow step's rate law is the overall rate law directly whenever the slow step is the {{c1::first}} step of the mechanism.`]: {
    question: r`Ozone oxidizes nitrogen dioxide: 2NO₂ + O₃ → N₂O₅ + O₂. The accepted pathway begins with a slow collision, NO₂ + O₃ → NO₃ + O₂, and finishes with a rapid one, NO₃ + NO₂ → N₂O₅. How does the rate depend on concentration?`,
    options: [r`rate = k[NO₂]²[O₃]`, r`rate = k[NO₂][O₃]`, r`rate = k[NO₃][NO₂]`, r`rate = k[NO₂]²`],
    correctAnswer: 1,
    explanation: r`The slow collision comes first and involves only true reactants, so its rate law, k[NO₂][O₃], is the overall rate law as it stands. Writing [NO₂]²[O₃] takes the exponents from the balanced equation. The law with [NO₃] comes from the rapid collision and contains an intermediate, and [NO₂]² leaves out O₃, which takes part in the slow collision.`,
  },
  [r`A mechanism's slow step contains an intermediate. How do you convert its rate law into an experimentally valid one?`]: {
    question: r`In one suggested pathway, chlorine molecules split into atoms rapidly and reversibly (Cl₂ ⇌ 2Cl), and the bottleneck is the later collision Cl + CO → COCl. Written only with species a chemist can measure out, Cl₂ and CO, how does the rate depend on concentration?`,
    options: [r`rate $= k[\text{Cl}][\text{CO}]$`, r`rate $= k[\text{Cl}_2][\text{CO}]$`, r`rate $= k[\text{Cl}_2]^{2}[\text{CO}]$`, r`rate $= k[\text{Cl}_2]^{1/2}[\text{CO}]$`],
    correctAnswer: 3,
    explanation: r`The bottleneck gives rate = k₂[Cl][CO], and the rapid equilibrium gives [Cl]² = K[Cl₂], so [Cl] is proportional to [Cl₂] to the one-half power. Leaving [Cl] in the law keeps an intermediate that cannot be controlled in an experiment. First order in Cl₂ forgets the square root, and second order squares where a root is needed.`,
  },
  [r`On an energy diagram an intermediate sits at a local {{c1::minimum}} (valley) while a transition state sits at a local {{c2::maximum}} (peak).`]: {
    question: r`A plot of energy against reaction progress passes through three maxima, with two minima between them, on the way from starting material to final product. How many elementary steps occur, and how many intermediates form?`,
    options: [r`Three steps and three intermediates`, r`Two steps and three intermediates`, r`Three steps and two intermediates`, r`Two steps and two intermediates`],
    correctAnswer: 2,
    explanation: r`Each maximum is a transition state, so three maxima mean three elementary steps, and each minimum between them is an intermediate, so there are two. Three intermediates counts the maxima as intermediates, and two steps counts the minima as steps. Transition states cannot be isolated; intermediates can.`,
  },
  [r`In a multistep energy diagram, which step is the rate-determining step?`]: {
    question: r`A two-step energy diagram has reactants at 0 kJ/mol, a first peak at +50, an intermediate at −40, a second peak at +30 and products at −60 kJ/mol. Which step is rate-determining?`,
    options: [r`Step 2, with a barrier of 70 kJ/mol`, r`Step 1, with a barrier of 50 kJ/mol`, r`Step 2, with a barrier of 30 kJ/mol`, r`Step 1, with a barrier of 90 kJ/mol`],
    correctAnswer: 0,
    explanation: r`Each barrier is measured from the valley just before it: Step 1 climbs 50 − 0 = 50 kJ/mol and Step 2 climbs 30 − (−40) = 70 kJ/mol, so Step 2 is the slow one. Choosing Step 1 picks the highest absolute peak instead of the largest climb. A 30 kJ/mol barrier measures Step 2 from the axis zero, and 90 kJ/mol is the drop from the first peak to the intermediate.`,
  },
  [r`For an exothermic reaction, how does $E_a$ of the reverse reaction compare with $E_a$ of the forward reaction?`]: {
    question: r`Burning a fuel releases 200 kJ/mol of heat, and the fuel-air mixture must first be given 30 kJ/mol to ignite. How much energy must the combustion products be given to turn back into fuel and air along the same path?`,
    options: [r`170 kJ/mol`, r`230 kJ/mol`, r`200 kJ/mol`, r`30 kJ/mol`],
    correctAnswer: 1,
    explanation: r`The products lie 200 kJ/mol below the reactants, so climbing back to the same peak costs 30 + 200 = 230 kJ/mol. Subtracting gives 170 kJ/mol, which would apply only if the reaction were endothermic by 200 kJ/mol. The 200 kJ/mol value leaves out the ignition barrier, and 30 kJ/mol assumes both directions face the same climb.`,
  },
  [r`A catalyst lowers $E_a$ for the forward step. What does it do to the reverse step and to $K_{eq}$?`]: {
    question: r`A mixture sits at equilibrium with its forward and reverse rates both equal to 2 mM/s. A catalyst is stirred in and the forward rate jumps to 50 mM/s. What is the reverse rate right afterward, and what happens to the amounts of reactant and product?`,
    options: [r`2 mM/s, and the mixture shifts toward the products`, r`50 mM/s, and the mixture shifts toward the products`, r`50 mM/s, and the mixture's composition stays put`, r`2 mM/s, and the mixture's composition stays put`],
    correctAnswer: 2,
    explanation: r`A catalyst lowers the forward and reverse barriers by the same amount, so both rates rise by the same factor to 50 mM/s, and $K_{eq}$ and the composition do not change. A reverse rate still at 2 mM/s would leave a net forward reaction and a shifted equilibrium, which a catalyst cannot cause. Equal rates of 50 mM/s cannot go with a shift, and unequal rates cannot go with a steady composition.`,
  },
  [r`How can a catalyst appear in the experimental rate law when it is absent from the balanced overall equation?`]: {
    question: r`The reaction A + B → C is run in dilute acid. H⁺ does not appear in the overall equation and the pH is the same before and after, yet doubling [H⁺] doubles the rate. What best explains this?`,
    options: [r`H⁺ is a reactant that the overall equation has left out`, r`H⁺ reacts in or before the slow step and is re-formed later`, r`H⁺ is an intermediate made in the slow step and then used`, r`H⁺ raises the equilibrium constant in favor of product C`],
    correctAnswer: 1,
    explanation: r`A catalyst that takes part in or before the rate-determining step shows up in the rate law, and because it is regenerated afterward it cancels from the overall equation and its concentration does not change. A true reactant would be used up, so the pH would shift. An intermediate starts at zero concentration and cannot be set by the experimenter, and a catalyst never changes the equilibrium constant.`,
  },
  [r`In $k = Ae^{-E_a/RT}$, the exponential term represents the {{c1::fraction of collisions with enough energy}} to react.`]: {
    question: r`For a certain reaction at 300 K, the factor $e^{-E_a/RT}$ equals $1 \times 10^{-5}$. What does this number say about the reacting mixture?`,
    options: [r`About 1 collision in $10^5$ has the right orientation`, r`About $10^5$ collisions happen per molecule per second`, r`About 1 molecule in $10^5$ has turned into product`, r`About 1 collision in $10^5$ has at least the energy $E_a$`],
    correctAnswer: 3,
    explanation: r`The exponential term is the fraction of collisions energetic enough to cross the barrier. Orientation and collision frequency are both folded into the prefactor $A$, not the exponential. The term says nothing about how far the reaction has gone, which depends on time and on the equilibrium position.`,
  },
  [r`An Arrhenius plot graphs $\ln k$ against {{c1::$1/T$}} and gives a straight line of slope {{c2::$-E_a/R$}}.`]: {
    question: r`A reaction has $E_a = 83$ kJ/mol. Taking $R = 8.3$ J/mol·K, what slope is expected for its plot of $\ln k$ against $1/T$?`,
    options: [r`−1.0 × 10⁴ K`, r`+1.0 × 10⁴ K`, r`−1.0 × 10¹ K`, r`−1.0 × 10⁻⁴ K`],
    correctAnswer: 0,
    explanation: r`The slope is $-E_a/R$ = −(83,000 J/mol)/(8.3 J/mol·K) = −1.0 × 10⁴ K. A positive slope drops the minus sign; $k$ falls as $1/T$ rises. The value −1.0 × 10¹ K leaves $E_a$ in kJ, and −1.0 × 10⁻⁴ K comes from inverting the ratio to $R/E_a$.`,
  },
  [r`Why doesn't a catalyst change the yield of an equilibrium-limited reaction?`]: {
    question: r`Without a catalyst, an esterification reaches equilibrium at 65% conversion after 10 hours. The run is repeated at the same temperature with an acid catalyst. What is expected?`,
    options: [r`Over 65% conversion, reached in 10 hours`, r`65% conversion, reached in under 10 hours`, r`Over 65% conversion, in under 10 hours`, r`65% conversion, reached in the same 10 hours`],
    correctAnswer: 1,
    explanation: r`A catalyst lowers the forward and reverse barriers equally, so the equilibrium conversion stays at 65% and only the time to get there shortens. Any answer above 65% assumes the catalyst shifts the equilibrium, which would take a change in concentration, pressure or temperature. An unchanged 10 hours would mean the catalyst did nothing.`,
  },
  [r`On a Lineweaver-Burk plot the y-intercept is {{c1::$1/V_{max}$}} and the x-intercept is {{c2::$-1/K_M$}}.`]: {
    question: r`A Lineweaver-Burk plot of $1/v$ (in s/μM) against $1/[S]$ (in mM⁻¹) has a y-intercept of 0.02 s/μM and an x-intercept of −0.5 mM⁻¹. What are $V_{max}$ and $K_M$?`,
    options: [r`$V_{max} = 50$ μM/s and $K_M = 2$ mM`, r`$V_{max} = 0.02$ μM/s and $K_M = 0.5$ mM`, r`$V_{max} = 50$ μM/s and $K_M = 0.5$ mM`, r`$V_{max} = 2$ μM/s and $K_M = 50$ mM`],
    correctAnswer: 0,
    explanation: r`The y-intercept is $1/V_{max}$, so $V_{max}$ = 1/0.02 = 50 μM/s, and the x-intercept is $-1/K_M$, so $K_M$ = 1/0.5 = 2 mM. Reading 0.02 and 0.5 directly forgets that both intercepts are reciprocals, and taking only one reciprocal gives the mixed answer. The last pair assigns each intercept to the wrong constant.`,
  },
  [r`A competitive inhibitor raises {{c1::$K_M$}} while leaving {{c2::$V_{max}$}} unchanged.`]: {
    question: r`An enzyme has $V_{max} = 120$ μM/s and $K_M = 3$ mM. A competitive inhibitor is added at a fixed concentration. Which pair of apparent values is expected?`,
    options: [r`$V_{max} = 40$ μM/s and $K_M = 3$ mM`, r`$V_{max} = 40$ μM/s and $K_M = 1$ mM`, r`$V_{max} = 120$ μM/s and $K_M = 9$ mM`, r`$V_{max} = 120$ μM/s and $K_M = 1$ mM`],
    correctAnswer: 2,
    explanation: r`A competitive inhibitor can be outcompeted by enough substrate, so $V_{max}$ stays at 120 μM/s, but more substrate is needed to reach half of it, so $K_M$ rises. A lower $V_{max}$ with the same $K_M$ is the noncompetitive pattern, and both falling is the uncompetitive pattern. A lower $K_M$ with the same $V_{max}$ would mean the inhibitor improved binding.`,
  },
  [r`Enzyme rate climbs with temperature then plunges. Why does the Arrhenius picture fail above the optimum?`]: {
    question: r`An enzyme's rate doubles between 25 °C and 35 °C but is nearly zero at 60 °C. Cooling the 60 °C sample back to 35 °C does not bring the activity back. What best explains the result at 60 °C?`,
    options: [r`The activation energy jumped once past the optimum`, r`Fewer collisions had enough energy at the hotter setting`, r`The substrate was used up sooner at the hotter setting`, r`The enzyme unfolded, so little working catalyst is left`],
    correctAnswer: 3,
    explanation: r`Above the optimum the enzyme denatures, so the amount of functional catalyst collapses, and the fact that cooling does not restore activity confirms the damage. The Arrhenius picture still holds for collisions: more of them, not fewer, have enough energy at 60 °C. Nothing raises the barrier of the catalyzed path, and running out of substrate would not be fixed or revealed by cooling.`,
  },
  [r`Rule of thumb: near physiological temperature, reaction rate roughly {{c1::doubles}} for every {{c2::10 degrees C}} rise.`]: {
    question: r`Enzymes in a tissue sample degrade a protein to a set extent in 2 hours at 37 °C. Using the usual rule of thumb for temperature, about how long does the same extent of degradation take in a 7 °C cold room?`,
    options: [r`About 6 hours`, r`About 8 hours`, r`About 15 minutes`, r`About 16 hours`],
    correctAnswer: 3,
    explanation: r`A 30 °C drop is three 10 °C steps, and each halves the rate, so the process is 2 × 2 × 2 = 8 times slower: 2 h × 8 = 16 h. Six hours multiplies by 3, treating the rule as additive, and 8 hours reports the factor instead of the time. Fifteen minutes speeds the reaction up, which is the wrong direction for cooling.`,
  },
  [r`Replacing a C-H bond with C-D slows the reaction several-fold. What does that reveal about the mechanism?`]: {
    question: r`In one experiment the hydrogen on carbon 2 of a substrate is replaced by deuterium and the rate is unchanged. In another, the hydrogen on carbon 3 is replaced and the rate falls sixfold. What do these results show?`,
    options: [r`The C2-H bond breaks in the rate-determining step`, r`The C3-H bond breaks in the rate-determining step`, r`Neither C-H bond breaks at any stage of the reaction`, r`Both C-H bonds break in the rate-determining step`],
    correctAnswer: 1,
    explanation: r`A several-fold slowdown on deuterium substitution means that bond is being broken in the rate-determining step, which is true only for C3-H. No rate change at carbon 2 means that bond breaks after the slow step or not at all. Saying neither bond breaks ignores the sixfold effect, and saying both break ignores the null result at carbon 2.`,
  },
  [r`$K_M$ is the substrate concentration giving {{c1::half of $V_{max}$}}, so a low $K_M$ means {{c2::high apparent affinity}}.`]: {
    question: r`With 1 μM enzyme, $V_{max}$ is 40 μM/s and the rate is 20 μM/s when $[S] = 0.3$ mM. The assay is repeated with 2 μM enzyme. What are $V_{max}$ and $K_M$ now?`,
    options: [r`$V_{max} = 80$ μM/s and $K_M = 0.3$ mM`, r`$V_{max} = 80$ μM/s and $K_M = 0.6$ mM`, r`$V_{max} = 40$ μM/s and $K_M = 0.6$ mM`, r`$V_{max} = 40$ μM/s and $K_M = 0.15$ mM`],
    correctAnswer: 0,
    explanation: r`The rate is half of $V_{max}$ at 0.3 mM, so $K_M$ = 0.3 mM, and $K_M$ does not depend on how much enzyme is present. $V_{max}$ is proportional to enzyme, so it doubles to 80 μM/s. Answers that change $K_M$ to 0.6 or 0.15 mM wrongly scale it with enzyme, and keeping $V_{max}$ at 40 μM/s ignores the doubled enzyme.`,
  },
  [r`Catalytic efficiency is {{c1::$k_{cat}/K_M$}}, and the diffusion limit in $M^{-1}s^{-1}$ is about {{c2::$10^8$ to $10^9$}}.`]: {
    question: r`Enzyme X has $k_{cat} = 10^4$ s⁻¹ and $K_M = 10^{-4}$ M. Enzyme Y has $k_{cat} = 10^6$ s⁻¹ and $K_M = 10^{-1}$ M. Which is the more efficient catalyst, and how does it compare with the diffusion limit?`,
    options: [r`Y, at $10^7$ M⁻¹s⁻¹, which is close to the limit`, r`Y, at $10^5$ M⁻¹s⁻¹, which is far below the limit`, r`X, at $10^8$ M⁻¹s⁻¹, which is close to the limit`, r`X, at $10^0$ M⁻¹s⁻¹, which is far below the limit`],
    correctAnswer: 2,
    explanation: r`Efficiency is $k_{cat}/K_M$: X gives $10^4/10^{-4} = 10^8$ M⁻¹s⁻¹, inside the diffusion-limited range of $10^8$ to $10^9$, while Y gives $10^6/10^{-1} = 10^7$, ten times lower and below that range. Choosing Y rewards its larger $k_{cat}$ alone. The values $10^5$ and $10^0$ come from multiplying $k_{cat}$ by $K_M$ instead of dividing.`,
  },
  [r`Two Arrhenius plots are drawn for one reaction with and without catalyst. The catalyzed line has {{c1::the shallower slope}}.`]: {
    question: r`For one reaction, Arrhenius plots are made with and without a catalyst. Line P has a slope of −12,000 K and line Q has a slope of −5,000 K. Which line is the catalyzed reaction, and why?`,
    options: [r`Line Q: its gentler slope means a lower $E_a$`, r`Line P: its steeper slope means a lower $E_a$`, r`Line P: its steeper slope means a faster rate`, r`Line Q: its gentler slope means a lower $A$`],
    correctAnswer: 0,
    explanation: r`The slope equals $-E_a/R$, so the less steep line, Q, has the smaller activation energy and is the catalyzed reaction. A steeper line means a larger $E_a$, not a smaller one, and steepness shows temperature sensitivity, not speed. The prefactor $A$ sets the intercept of the line, not its slope.`,
  },
  [r`Reaction order vs molecularity: which is experimental, and which applies only to an elementary step?`]: {
    question: r`Experiments on an overall reaction give the rate law rate $= k[A]^{1/2}[B]$. What is the strongest conclusion that follows from the half-order term?`,
    options: [r`The overall reaction is one bimolecular step`, r`The data are flawed, since orders are integers`, r`The overall reaction is not one elementary step`, r`The slow step has a molecularity of 1.5`],
    correctAnswer: 2,
    explanation: r`Order is experimental and may be fractional, but an elementary step would have whole-number orders equal to its molecularity, so a half order shows the reaction goes through more than one step. A single bimolecular step would give first order in each reactant. Fractional orders are legitimate, so the data need not be wrong, and molecularity counts whole particles, so 1.5 is impossible.`,
  },
  [r`Collision theory says most collisions accomplish nothing. Which two filters do they have to pass?`]: {
    question: r`In a gas mixture, 1 collision in $10^4$ carries at least $E_a$, and 1 in 10 of those has a workable orientation. Out of $10^9$ collisions, about how many lead to product?`,
    options: [r`$10^5$`, r`$10^4$`, r`$10^8$`, r`$10^6$`],
    correctAnswer: 1,
    explanation: r`A collision must pass both filters, so the fractions multiply: $10^9 \times 10^{-4} \times 10^{-1} = 10^4$. Stopping at $10^5$ applies only the energy filter, and $10^8$ applies only the orientation filter. $10^6$ comes from a slip in the exponents, such as adding the fractions' powers the wrong way.`,
  },
  [r`On a Michaelis-Menten plot of v versus [S], the reaction is {{c1::first}} order at low [S] and {{c2::zero}} order at saturation.`]: {
    question: r`An enzyme has $K_M = 5$ mM. In trial 1, [S] is doubled from 0.01 mM to 0.02 mM. In trial 2, [S] is doubled from 500 mM to 1000 mM. What happens to the rate in each trial?`,
    options: [r`It doubles in trial 1 and doubles in trial 2`, r`It barely moves in trial 1 and doubles in trial 2`, r`It barely moves in trial 1 or in trial 2`, r`It doubles in trial 1 and barely moves in trial 2`],
    correctAnswer: 3,
    explanation: r`Far below $K_M$ the reaction is first order in substrate, so doubling [S] doubles the rate. Far above $K_M$ the enzyme is saturated and the reaction is zero order, so the rate stays at about $V_{max}$. Doubling in both trials ignores saturation, and the answers with no change in trial 1 put the plateau at the wrong end of the curve.`,
  },
}
