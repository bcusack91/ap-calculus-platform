import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-kinetics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Which plot is linear for each reaction order?`]: {
    question: r`For the decomposition of a compound A, a plot of $[A]$ against time is a straight falling line, while a plot of $\ln[A]$ against time curves. If the run is repeated with twice the starting concentration, what happens to the initial rate?`,
    options: [r`it doubles, as the reaction is first order`, r`it is unchanged, as the reaction is zero order`, r`it quadruples, as the reaction is second order`, r`it halves, as the reaction is zero order`],
    correctAnswer: 1,
    explanation: r`A straight $[A]$ vs $t$ line means zero order, so rate $= k$ and the starting concentration does not matter. Doubling would be right for first order, but that needs a straight $\ln[A]$ line. Quadrupling needs a straight $1/[A]$ line, and a zero-order rate does not fall when concentration rises.`,
  },
  [r`Give the first-order half-life formula.`]: {
    question: r`A first-order decomposition has a half-life of 23.1 min. What is its rate constant?`,
    options: [r`0.043 min⁻¹`, r`16 min⁻¹`, r`33 min⁻¹`, r`0.030 min⁻¹`],
    correctAnswer: 3,
    explanation: r`$k = 0.693/t_{1/2} = 0.693/23.1 = 0.030$ min⁻¹. 0.043 min⁻¹ is $1/t_{1/2}$ with the 0.693 left out. 16 min⁻¹ multiplies 0.693 by 23.1 instead of dividing, and 33 min⁻¹ inverts the fraction to $t_{1/2}/0.693$.`,
  },
  [r`Doubling [A] doubles the rate. The order in A is:`]: {
    question: r`A reaction is first order in A. In a second run every condition is kept the same except that $[A]$ is lowered from 0.80 M to 0.20 M. How does the initial rate compare with the first run?`,
    options: [r`it falls to 1/4 of its value`, r`it falls to 1/16 of its value`, r`it falls to 1/2 of its value`, r`it stays at the same value`],
    correctAnswer: 0,
    explanation: r`For first order the rate is proportional to $[A]$, so cutting the concentration to one quarter cuts the rate to one quarter. 1/16 squares the factor, as for second order. 1/2 takes the square root, as for half order, and no change would be zero order.`,
  },
  [r`For a zero-order reaction, half-life:`]: {
    question: r`A reactant is consumed at a constant rate that does not depend on its concentration. Run 1 begins with 0.20 M of it and run 2 with 0.60 M, at one temperature. Compared with run 1, the time for half of the reactant to be consumed in run 2 is:`,
    options: [r`exactly the same`, r`one third as long`, r`three times as long`, r`nine times as long`],
    correctAnswer: 2,
    explanation: r`A constant rate means zero order, where $t_{1/2} = [A]_0/(2k)$: three times the starting amount takes three times as long to half-consume. An unchanged half-life is true only for first order. One third as long is the inverse relationship of second order, and nine times squares the factor of three.`,
  },
  [r`Which does NOT affect the rate constant $k$?`]: {
    question: r`A first-order reaction has $k = 0.030$ s⁻¹ at 25 °C, measured with $[A] = 0.40$ M. The solution is diluted to $[A] = 0.20$ M at the same temperature. What are $k$ and the rate now?`,
    options: [r`k = 0.015 s⁻¹ and rate = 0.0060 M/s`, r`k = 0.030 s⁻¹ and rate = 0.0120 M/s`, r`k = 0.030 s⁻¹ and rate = 0.0060 M/s`, r`k = 0.015 s⁻¹ and rate = 0.0030 M/s`],
    correctAnswer: 2,
    explanation: r`Dilution does not change $k$, so it stays 0.030 s⁻¹, and rate $= k[A] = 0.030 \times 0.20 = 0.0060$ M/s. The choices with $k = 0.015$ s⁻¹ halve the rate constant along with the concentration. A rate of 0.0120 M/s is the value before dilution, which ignores that the rate itself does depend on $[A]$.`,
  },
  [r`Overall reaction order is the {{c1::sum of the exponents}} in the rate law, which need not be an integer or match any coefficient.`]: {
    question: r`The reaction $2A + B + C \rightarrow D$ is found to obey rate $= k[A][B]^{1/2}$, with no dependence on $[C]$. What is the overall order of the reaction?`,
    options: [r`1.5`, r`4`, r`2.5`, r`0.5`],
    correctAnswer: 0,
    explanation: r`The overall order is the sum of the exponents in the rate law: $1 + \tfrac{1}{2} + 0 = 1.5$. An answer of 4 adds the coefficients of the balanced equation instead. 2.5 counts C as first order even though the rate does not depend on it, and 0.5 multiplies the exponents instead of adding them.`,
  },
  [r`Zero-order half-life is {{c1::proportional to}} $[A]_0$, while second-order half-life is {{c2::inversely proportional to}} $[A]_0$.`]: {
    question: r`Reaction X is zero order and reaction Y is second order. Each is run again at the same temperature with twice the starting concentration. What happens to the first half-life of each?`,
    options: [r`it halves for X and doubles for Y`, r`it doubles for both X and Y`, r`it is unchanged for both X and Y`, r`it doubles for X and halves for Y`],
    correctAnswer: 3,
    explanation: r`Zero-order half-life is $[A]_0/(2k)$, proportional to $[A]_0$, so it doubles for X. Second-order half-life is $1/(k[A]_0)$, inversely proportional, so it halves for Y. The reversed choice swaps the two orders, and an unchanged half-life belongs only to first order.`,
  },
  [r`Why can't the overall rate law be read off the balanced equation's coefficients?`]: {
    question: r`The overall reaction $NO_2 + CO \rightarrow NO + CO_2$ occurs in two steps. Step 1 (slow): $NO_2 + NO_2 \rightarrow NO_3 + NO$. Step 2 (fast): $NO_3 + CO \rightarrow NO_2 + CO_2$. What rate law is expected?`,
    options: [r`rate = k[NO₂][CO]`, r`rate = k[NO₂]²`, r`rate = k[NO₃][CO]`, r`rate = k[NO₂]²[CO]`],
    correctAnswer: 1,
    explanation: r`The slow first step sets the rate, and as an elementary step with two NO₂ molecules it gives rate = k[NO₂]². CO enters only in the fast step afterward, so it does not appear. k[NO₂][CO] is read off the overall equation's coefficients, k[NO₃][CO] is the fast step and contains an intermediate, and k[NO₂]²[CO] adds the two steps together.`,
  },
  [r`A linear plot of $[A]$ vs. time indicates {{c1::zero}} order, while a linear plot of $\ln[A]$ vs. time indicates {{c2::first}} order.`]: {
    question: r`The concentration of a reactant A falls along a straight line when $[A]$ is plotted against time, and the slope of the line is $-0.020$ M/s. What are the order in A and the rate constant?`,
    options: [r`zero order, with k = 0.020 M/s`, r`first order, with k = 0.020 s⁻¹`, r`zero order, with k = −0.020 M/s`, r`first order, with k = 0.040 s⁻¹`],
    correctAnswer: 0,
    explanation: r`A straight $[A]$ vs $t$ line means zero order, and its slope is $-k$, so $k = 0.020$ M/s. First order would be straight only on a $\ln[A]$ axis, and its $k$ would have units of s⁻¹. A rate constant is never negative; the minus sign belongs to the slope.`,
  },
  [r`The units of $k$ are {{c1::$s^{-1}$}} for a first-order reaction and {{c2::$M^{-1}s^{-1}$}} for a second-order reaction.`]: {
    question: r`The decomposition of a single reactant A has a rate constant of 0.25 M⁻¹s⁻¹. If $[A]$ is tripled at the same temperature, what happens to the initial rate?`,
    options: [r`it rises 3-fold`, r`it rises 6-fold`, r`it rises 9-fold`, r`it is unchanged`],
    correctAnswer: 2,
    explanation: r`Units of M⁻¹s⁻¹ mean second order overall, so rate $= k[A]^2$ and tripling $[A]$ gives $3^2 = 9$ times the rate. A 3-fold rise would need $k$ in s⁻¹ (first order), and no change would need $k$ in M/s (zero order). A 6-fold rise multiplies 3 by the order instead of raising 3 to it.`,
  },
  [r`After 4 half-lives, what fraction of the original reactant remains?`]: {
    question: r`A 320 mg sample of a compound breaks down by first-order kinetics with a half-life of 20 min. How much of it has broken down after 80 min?`,
    options: [r`20 mg`, r`300 mg`, r`240 mg`, r`80 mg`],
    correctAnswer: 1,
    explanation: r`80 min is 4 half-lives, so $(1/2)^4 = 1/16$ remains: 20 mg is left and 300 mg has broken down. 20 mg is the amount remaining, not the amount lost. 80 mg divides by 4 instead of halving four times, and 240 mg is what would be lost if 80 mg remained.`,
  },
  [r`The rate constant $k$ depends on temperature and catalyst, but is {{c1::independent of}} reactant concentration.`]: {
    question: r`Two runs of a reaction are compared, and the rate constant $k$ itself is found to be four times larger in the second run. Which change between the runs could explain this?`,
    options: [r`the second run had four times the reactant`, r`the second run had twice as much reactant`, r`the second run was sampled at a later time`, r`the second run was at a higher temperature`],
    correctAnswer: 3,
    explanation: r`$k$ depends on temperature (and on a catalyst), so a warmer second run can raise it. Changing the amount of reactant, whether fourfold or twofold, changes the rate but leaves $k$ alone. Sampling later means lower concentrations and a lower rate, again with the same $k$.`,
  },
  [r`In the method of initial rates, why must you compare trials in which only one reactant's concentration changes?`]: {
    question: r`In trial 1, $[A] = [B] = 0.10$ M and the initial rate is $R$. In trial 2, $[A] = [B] = 0.20$ M and the initial rate is $8R$. With only these two trials, what can be concluded about rate $= k[A]^a[B]^b$?`,
    options: [r`that the order is 3 in A and zero in B`, r`that the order is 2 in A and one in B`, r`that the order is 1.5 in each reactant`, r`only that the orders a and b add up to 3`],
    correctAnswer: 3,
    explanation: r`Both concentrations doubled, so $2^a \times 2^b = 8$ and $a + b = 3$, but the split between A and B cannot be found because two variables changed at once. Each of the other choices is one possible split picked with no evidence. Separating $a$ from $b$ needs a trial in which only one concentration changes.`,
  },
  [r`A linear plot of $1/[A]$ versus time is the signature of a {{c1::second}}-order reaction, with slope equal to {{c2::$+k$}}.`]: {
    question: r`A dimerization is second order in A with $k = 0.20$ M⁻¹s⁻¹ and starts at $[A]_0 = 0.50$ M. Which describes the plot of $1/[A]$ against time?`,
    options: [r`a line falling from 2.0 M⁻¹ with slope −0.20`, r`a line rising from 2.0 M⁻¹ with slope +0.20`, r`a line rising from 0.50 M⁻¹ with slope +0.20`, r`a line falling from 0.50 M⁻¹ with slope −0.20`],
    correctAnswer: 1,
    explanation: r`For second order $1/[A] = kt + 1/[A]_0$, so the line starts at $1/0.50 = 2.0$ M⁻¹ and rises with slope $+k = +0.20$ M⁻¹s⁻¹. A falling line copies the negative slopes of the zero- and first-order plots, but $1/[A]$ grows as A is used up. An intercept of 0.50 uses $[A]_0$ instead of its reciprocal.`,
  },
  [r`A reaction that is zero order in a substrate has a rate {{c1::independent of}} that substrate's concentration, typically because of {{c2::saturation}}.`]: {
    question: r`A gas decomposes on a platinum surface whose active sites are all occupied by adsorbed gas molecules. The gas pressure is then doubled at the same temperature. What happens to the rate of decomposition?`,
    options: [r`it doubles, since twice as many molecules strike it`, r`it quadruples, since two molecules react per site`, r`it is unchanged, since every site is already in use`, r`it halves, since extra gas blocks product release`],
    correctAnswer: 2,
    explanation: r`With every site occupied the catalyst is saturated, so the rate is set by the surface and is zero order in the gas: more gas changes nothing. Doubling would be first-order behavior, seen only when sites are free. Quadrupling assumes second order, and nothing in a saturated surface makes extra reactant slow the reaction.`,
  },
  [r`For $2A \rightarrow B$, how does the rate of disappearance of A relate to the rate of the reaction?`]: {
    question: r`For $2N_2O_5 \rightarrow 4NO_2 + O_2$, the concentration of $N_2O_5$ is falling at 0.040 M/s at one instant. What is the rate of the reaction, defined so that it has the same value for every species?`,
    options: [r`0.020 M/s`, r`0.040 M/s`, r`0.080 M/s`, r`0.010 M/s`],
    correctAnswer: 0,
    explanation: r`The reaction rate is each species' rate divided by its coefficient: $0.040/2 = 0.020$ M/s, which is also the rate at which O₂ forms. 0.040 M/s is the disappearance rate of N₂O₅ itself, uncorrected. 0.080 M/s multiplies by the coefficient instead of dividing, and 0.010 M/s divides by the coefficient of NO₂.`,
  },
  [r`For first-order kinetics $t_{1/2} =$ {{c1::$0.693/k$}}, which is why drug elimination is quoted as a single fixed half-life.`]: {
    question: r`A drug is eliminated by first-order kinetics with $k = 0.0693$ h⁻¹. How long does its plasma level take to fall from 200 to 100 mg/L, and then from 100 to 50 mg/L?`,
    options: [r`10 h, then another 5 h`, r`10 h, then another 20 h`, r`10 h, then another 10 h`, r`14 h, then another 14 h`],
    correctAnswer: 2,
    explanation: r`$t_{1/2} = 0.693/k = 0.693/0.0693 = 10$ h, and a first-order half-life is the same at any concentration, so each halving takes 10 h. A second halving of 5 h is zero-order behavior, and one of 20 h is second-order behavior. 14 h is $1/k$ with the 0.693 left out.`,
  },
  [r`First-order elimination clears {{c1::a constant fraction}} per unit time, so {{c2::4 to 5 half-lives}} are needed to reach steady state.`]: {
    question: r`A drug with a half-life of 8 h is given by continuous infusion at a constant rate. About how long after the infusion starts does its plasma level reach steady state?`,
    options: [r`about 32 to 40 h`, r`about 8 to 16 h`, r`about 4 to 5 h`, r`about 80 to 96 h`],
    correctAnswer: 0,
    explanation: r`Steady state takes 4 to 5 half-lives, so $4 \times 8 = 32$ h to $5 \times 8 = 40$ h. 8 to 16 h is only one or two half-lives, when the level is at 50 to 75 percent of its plateau. 4 to 5 h reads the number of half-lives as hours, and 80 to 96 h uses 10 to 12 half-lives.`,
  },
  [r`Tripling $[A]$ multiplies the rate by 9, so the order in A is {{c1::2}}; if the rate were unchanged the order would be {{c2::0}}.`]: {
    question: r`In a series of runs, doubling $[A]$ alone makes the initial rate 8 times larger, and doubling $[B]$ alone leaves the initial rate unchanged. What is the rate law?`,
    options: [r`rate = k[A]⁸`, r`rate = k[A]³`, r`rate = k[A]³[B]`, r`rate = k[A]⁴[B]`],
    correctAnswer: 1,
    explanation: r`The rate factor equals the concentration ratio raised to the order: $2^n = 8$ gives $n = 3$ for A, and an unchanged rate means order 0 for B, so B drops out. An exponent of 8 uses the rate factor itself as the order, and 4 divides 8 by 2. Keeping [B] in the rate law treats a species that has no effect as first order.`,
  },
  [r`Why do kineticists report initial rates rather than rates measured later in the run?`]: {
    question: r`A student measures the rate of a reaction 30 min into a run, when much of the reactant is gone, but puts the starting concentrations into the rate law to calculate $k$. How does the calculated $k$ compare with the true value?`,
    options: [r`too large, as the reactant has been partly used up`, r`too large, as the product has built up by that time`, r`correct, as k never depends on the concentrations`, r`too small, as the reactant has been partly used up`],
    correctAnswer: 3,
    explanation: r`By 30 min the reactant concentration, and so the rate, is lower than at the start; dividing that low rate by the larger starting concentrations gives a $k$ that is too small. Product build-up and the reverse reaction also lower the net rate, so they cannot make $k$ too large. $k$ is independent of concentration, but the calculation is right only if the rate and the concentrations belong to the same moment.`,
  },
  [r`Ethanol is cleared by zero-order kinetics. What does that mean clinically?`]: {
    question: r`A patient's blood ethanol level falls from 0.20 to 0.16 g/dL in the first 2 h, and elimination is zero order. By how much does the level fall over the next 2 h, and why?`,
    options: [r`by 0.040 g/dL, as a fixed amount is cleared per hour`, r`by 0.032 g/dL, as a fixed fraction is cleared per hour`, r`by 0.080 g/dL, as clearance speeds up at lower levels`, r`by 0.020 g/dL, as half as much is cleared each period`],
    correctAnswer: 0,
    explanation: r`Zero order means the saturated enzyme removes the same amount in every equal time, so the next 2 h removes another 0.040 g/dL. A drop of 0.032 g/dL removes the same 20 percent again, which is first-order behavior. Clearance does not speed up as the level falls, and halving the amount removed each period is not what a constant rate does.`,
  },
  [r`A table shows rate falling as a run proceeds at fixed temperature. Has the rate changed, or the rate constant?`]: {
    question: r`During a first-order reaction at constant temperature, $[A]$ falls from 0.40 M to 0.10 M. How do the rate and the rate constant at the end compare with their values at the start?`,
    options: [r`the rate and k are both one quarter as large`, r`the rate is unchanged and k is one quarter as large`, r`the rate is one quarter as large and k is unchanged`, r`the rate is one quarter as large and k is four times`],
    correctAnswer: 2,
    explanation: r`Rate $= k[A]$, so with a quarter of the concentration the rate is a quarter as large, while $k$ stays fixed because temperature and catalyst have not changed. Letting $k$ fall with the rate confuses the two quantities. The rate cannot stay constant as a first-order reactant is consumed, and nothing here raises $k$.`,
  },
}
