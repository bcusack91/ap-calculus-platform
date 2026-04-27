/**
 * Phase 2/3 content fill for AP Microeconomics topics.
 *
 * For each of the 10 micro topics, this seed:
 *   - Replaces the (very thin) Topic.textContent with a substantive overview
 *     when current length < 1500 chars.
 *   - Adds 5 ExampleProblems (idempotent: skips when (topicId, order) collides
 *     by bumping order to next free slot).
 *   - Adds 10 Flashcards (idempotent: skips inserts whose `front` already exists).
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-microeconomics-content.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  // ──────────────────────────────────────────────────────────────────
  'micro-scarcity-marginal-analysis': {
    textContent: `## Scarcity, Choice, and Marginal Analysis

Economics begins with a simple, hard fact: human wants are unlimited, but resources are finite. This conflict is **scarcity**, and it forces every individual, firm, and society to make trade-offs. Whenever you choose one option, you give up the next-best alternative — that sacrificed option is the **opportunity cost** of your choice. Opportunity cost is the single most important idea in microeconomics, because it reframes "cost" as more than just dollars: time, effort, and forgone enjoyment all count.

### The Production Possibilities Curve (PPC)

The PPC is a graph that shows the maximum combinations of two goods an economy can produce when all resources are used efficiently. Points on the curve are productively efficient; points inside the curve indicate unemployed or underused resources; points outside the curve are unattainable with current resources and technology. The PPC bows outward when resources are not equally suited to producing both goods — this is the **law of increasing opportunity costs**: producing more of one good forces an economy to give up larger and larger amounts of the other.

### Marginal Analysis: How Rational Decisions Are Made

Economists assume decision-makers are rational, meaning they weigh the **marginal benefit (MB)** — the additional benefit from one more unit — against the **marginal cost (MC)** — the additional cost of that unit. The decision rule is simple and powerful:

- If $MB > MC$, do more of the activity.
- If $MB < MC$, do less.
- The optimum is where $MB = MC$.

This applies to studying for an extra hour, hiring an additional worker, or producing one more pizza. Crucially, **sunk costs** — costs already paid that cannot be recovered — are irrelevant to forward-looking marginal decisions.

### Comparative Advantage and Specialization

Even when one party is absolutely better at producing everything, both parties gain by specializing in the good for which they have the lower opportunity cost (a **comparative advantage**) and trading. Specialization expands consumption beyond each party's individual PPC, illustrating why voluntary trade creates mutual gains.

### Why It Matters for the AP Exam

PPC, opportunity cost, marginal analysis, and comparative advantage form the foundation for everything else in microeconomics. Free-response prompts often ask you to draw a PPC, label efficient/inefficient points, or compute opportunity cost from a production table.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Maya has 4 hours to study. If she spends them on math, she expects a 20-point gain on her math grade. If she spends them on history, she expects a 15-point gain on her history grade. What is the opportunity cost of studying math for the full 4 hours?`,
        solution: `Opportunity cost = the value of the next-best alternative forgone. By choosing math, Maya gives up the 15-point gain she could have earned in history.

**Answer:** the opportunity cost is **a 15-point gain in history**. Note: the 20-point math gain is the *benefit*, not the cost.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `An economy can produce either 100 units of food or 50 units of clothing if it devotes all resources to one good. Assuming a straight-line PPC, what is the opportunity cost of producing 1 unit of clothing?`,
        solution: `Slope of the PPC = $\\Delta\\text{food}/\\Delta\\text{clothing} = 100/50 = 2$ units of food per unit of clothing.

**Answer:** the opportunity cost of 1 unit of clothing is **2 units of food**.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `A bow-shaped PPC for cars and bread shows: producing the first 10 cars costs 5 loaves of bread; producing the next 10 cars costs 15 loaves; producing the third 10 cars costs 30 loaves. What economic principle does this illustrate, and why?`,
        solution: `This illustrates the **law of increasing opportunity costs**. As the economy moves resources from bread to cars, the workers and capital best suited to bread are reassigned first; then progressively less-suitable resources must be moved. Each additional batch of 10 cars therefore requires sacrificing more loaves of bread (5 → 15 → 30). The bowed-out shape of the PPC reflects this rising trade-off.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `A coffee-shop owner finds that her marginal benefit from staying open one more hour each evening is \\$40 in extra profit, while the marginal cost (worker wages, electricity) is \\$32. Should she stay open the extra hour? If MB drops to \\$28 in the following hour, what should she do then?`,
        solution: `Apply the marginal decision rule.

**Hour 1 extra:** $MB = \\$40 > MC = \\$32$. Stay open — net gain of $\\$8$.

**Hour 2 extra:** $MB = \\$28 < MC = \\$32$. **Do not** stay open this additional hour — she would lose $\\$4$. Optimum is to extend hours only as long as $MB \\ge MC$.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `In an hour, Alice can either bake 6 pies or knit 2 scarves. Bob can bake 4 pies or knit 4 scarves. (a) Who has the absolute advantage in each good? (b) Compute each person's opportunity cost of one pie. (c) Who has the comparative advantage in pies? (d) State a price (in scarves per pie) at which both will gain from trade.`,
        solution: `(a) **Absolute advantage:** Alice in pies (6 > 4); Bob in scarves (4 > 2).

(b) **Opportunity cost of 1 pie:**
- Alice: $2/6 = 1/3$ scarf.
- Bob: $4/4 = 1$ scarf.

(c) **Comparative advantage in pies = lower opp. cost.** Alice (1/3 scarf) < Bob (1 scarf), so **Alice** has the comparative advantage in pies. By symmetry, Bob has the comparative advantage in scarves.

(d) A mutually-beneficial trade price for 1 pie must lie **between** the two opportunity costs:
$$1/3 \\text{ scarf} < \\text{price} < 1 \\text{ scarf}.$$
Any price in that range — e.g., **0.5 scarves per pie** — leaves both parties better off than producing on their own.` },
    ],
    cards: [
      { front: 'Definition of scarcity', back: 'The fundamental economic problem: unlimited wants confronting limited resources, forcing trade-offs.', lessonPart: 1 },
      { front: 'Opportunity cost', back: 'The value of the next-best alternative forgone when a choice is made. Includes time and forgone benefits, not just money.', lessonPart: 1 },
      { front: 'Productive efficiency on the PPC', back: 'Any point ON the PPC: all resources are fully and efficiently employed; you cannot produce more of one good without producing less of the other.', lessonPart: 2 },
      { front: 'Why does the PPC bow outward?', back: 'Because of the law of increasing opportunity costs: resources are not equally productive in all uses, so reallocating them from one good to another sacrifices growing amounts.', lessonPart: 2 },
      { front: 'Marginal benefit (MB)', back: 'The additional benefit gained from consuming or producing one more unit of a good or activity.', lessonPart: 3 },
      { front: 'Rational decision rule', back: 'Take an action while $MB > MC$; stop when $MB = MC$. Never let sunk costs change a forward-looking decision.', lessonPart: 3 },
      { front: 'Sunk cost', back: 'A cost already incurred that cannot be recovered. Rational decision-makers IGNORE sunk costs when choosing what to do next.', lessonPart: 3 },
      { front: 'Absolute vs comparative advantage', back: 'Absolute = produces more of a good with the same resources. Comparative = produces a good at a LOWER opportunity cost. Trade is driven by comparative advantage.', lessonPart: 4 },
      { front: 'Computing opportunity cost from a PPC table', back: 'Opp. cost of 1 unit of good A = $\\Delta B / \\Delta A$ (the loss of B per unit gain of A) along the curve.', lessonPart: 2 },
      { front: 'Range of mutually-beneficial trade price', back: 'For trade to benefit both parties, the agreed price must lie strictly between the two trading partners\' opportunity costs of the good being exchanged.', lessonPart: 4 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-demand-supply-equilibrium': {
    textContent: `## Demand, Supply, and Market Equilibrium

The interaction of demand and supply is the central model in microeconomics. It explains how prices are set in competitive markets and why those prices change over time.

### Demand

The **law of demand** states that, all else equal, when the price of a good rises, quantity demanded falls (and vice versa). The demand curve slopes downward for two reasons: the **substitution effect** (consumers switch to relatively cheaper alternatives as price rises) and the **income effect** (a higher price reduces real purchasing power, lowering quantity bought).

A *change in quantity demanded* is a movement ALONG the demand curve caused only by a change in the good's own price. A *change in demand* is a SHIFT of the entire curve, caused by:
- Changes in income (normal goods shift right as income rises; inferior goods shift left).
- Changes in the price of related goods (substitutes and complements).
- Changes in tastes/preferences.
- Changes in the number of buyers.
- Changes in expectations of future prices.

### Supply

The **law of supply** states that, all else equal, higher prices induce producers to supply more — the supply curve is upward-sloping because higher prices cover rising marginal costs and make production more profitable. Supply *shifts* in response to changes in input prices, technology, the number of sellers, government taxes/subsidies, and producer expectations.

### Equilibrium

Equilibrium is the price–quantity combination at which $Q_d = Q_s$ — the demand and supply curves cross. At any price above equilibrium there is a **surplus** ($Q_s > Q_d$) and downward pressure on price; below equilibrium there is a **shortage** and upward pressure on price. Markets self-correct toward equilibrium through these price signals.

### Predicting Equilibrium Changes

When only one curve shifts, both equilibrium price and quantity move predictably. When both curves shift simultaneously, one of the two outcomes (price or quantity) is **indeterminate** without knowing the relative size of the shifts — a frequent FRQ trap.

| Shift                           | $P^*$ | $Q^*$ |
|---------------------------------|:-----:|:-----:|
| Demand right (↑D)               |   ↑   |   ↑   |
| Demand left (↓D)                |   ↓   |   ↓   |
| Supply right (↑S)               |   ↓   |   ↑   |
| Supply left (↓S)                |   ↑   |   ↓   |
| ↑D and ↑S                       |   ?   |   ↑   |
| ↑D and ↓S                       |   ↑   |   ?   |

### Consumer and Producer Surplus

Consumer surplus = area BELOW the demand curve and ABOVE the price (what buyers were willing to pay minus what they paid). Producer surplus = area ABOVE the supply curve and BELOW the price. Their sum is **total surplus**, which is maximized at competitive equilibrium.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Coffee and tea are substitutes. If a frost destroys much of the world's coffee crop, predict the effect on the equilibrium price and quantity in the **tea** market. Briefly justify which curve shifts.`,
        solution: `The frost reduces coffee supply, raising coffee's equilibrium price. Because tea is a substitute, consumers switch toward tea ⇒ **demand for tea shifts right**.

**Result in the tea market:** equilibrium price **rises**, equilibrium quantity **rises**.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `In the market for smartphones, the demand schedule and supply schedule are: at \\$400, $Q_d = 80$ and $Q_s = 40$. At \\$500, $Q_d = 60$ and $Q_s = 60$. At \\$600, $Q_d = 40$ and $Q_s = 80$. Identify the equilibrium price and quantity, and identify any shortage or surplus at \\$400.`,
        solution: `Equilibrium occurs where $Q_d = Q_s$: at $P = \\$500$, $Q^* = 60$. **Equilibrium: $\\$500$, 60 phones.**

At $P = \\$400$: $Q_d = 80 > Q_s = 40$ ⇒ **shortage of 40 units**, putting upward pressure on price.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `In the market for new homes, suppose lumber prices fall AND average household incomes rise. Homes are a normal good. Predict, with reasoning, the directions of the change in equilibrium price and quantity. Identify any indeterminate outcome.`,
        solution: `**Effect of lower lumber prices:** input cost falls ⇒ **supply shifts right** ($P\\downarrow$, $Q\\uparrow$).

**Effect of higher income:** homes are a normal good ⇒ **demand shifts right** ($P\\uparrow$, $Q\\uparrow$).

**Combined:**
- $Q^*$: both effects increase quantity ⇒ $Q^*$ **rises**.
- $P^*$: supply pushes price down, demand pushes price up ⇒ $P^*$ is **indeterminate** without knowing which shift is larger.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Linear demand is given by $Q_d = 120 - 2P$ and linear supply by $Q_s = 4P - 60$. (a) Find the equilibrium price and quantity. (b) Compute consumer surplus at equilibrium.`,
        solution: `(a) Set $Q_d = Q_s$: $120 - 2P = 4P - 60 \\Rightarrow 180 = 6P \\Rightarrow P^* = \\$30$. Then $Q^* = 120 - 2(30) = 60$.

(b) The demand curve hits the price-axis (where $Q_d = 0$) at $P = 60$. Consumer surplus is the area of the triangle with base $Q^* = 60$ and height $60 - 30 = 30$:

$CS = \\tfrac{1}{2}(60)(30) = \\boxed{\\$900}.$` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `The equilibrium price of gasoline rises sharply after a refinery explosion. A student claims, "This proves the law of demand is wrong, since the higher price didn't reduce gasoline use much." Critique this claim, distinguishing between movement along a curve and a shift of a curve.`,
        solution: `The student is conflating two different concepts.

The refinery explosion **shifts the supply curve LEFT**, not the demand curve. Equilibrium moves along the (unchanged) demand curve to a new point at higher price and lower quantity. The fact that quantity demanded fell *somewhat* in response to the higher price IS the law of demand at work.

If gasoline use barely fell, that says demand is **inelastic** (steep), not that the law of demand is violated. The law states only the *direction* of the response (Q falls when P rises), not its magnitude. So the student's evidence is consistent with — not contradictory to — the law of demand.` },
    ],
    cards: [
      { front: 'Law of demand', back: 'Other things equal, when the price of a good rises, the quantity demanded falls (and vice versa). The demand curve slopes downward.', lessonPart: 1 },
      { front: 'Change in QUANTITY demanded vs change in DEMAND', back: 'Change in quantity demanded = movement ALONG the curve (caused by own-price). Change in demand = SHIFT of the entire curve (caused by income, related goods, tastes, expectations, # of buyers).', lessonPart: 1 },
      { front: 'Substitutes vs complements', back: 'Substitutes: a rise in P of one shifts demand for the other RIGHT (e.g., Coke↑ ⇒ Pepsi demand↑). Complements: a rise in P of one shifts demand for the other LEFT (e.g., gas↑ ⇒ SUV demand↓).', lessonPart: 1 },
      { front: 'Normal vs inferior goods', back: 'Normal: ↑income ⇒ demand RIGHT (most goods). Inferior: ↑income ⇒ demand LEFT (e.g., used cars, instant noodles).', lessonPart: 1 },
      { front: 'Five shifters of supply', back: '(1) Input prices, (2) technology, (3) number of sellers, (4) taxes/subsidies, (5) producer expectations of future prices.', lessonPart: 2 },
      { front: 'Definition of equilibrium', back: 'The price at which $Q_d = Q_s$. There is no surplus or shortage and no tendency for price to change.', lessonPart: 3 },
      { front: 'Surplus vs shortage', back: 'Surplus: $P > P^*$ ⇒ $Q_s > Q_d$ ⇒ price falls. Shortage: $P < P^*$ ⇒ $Q_d > Q_s$ ⇒ price rises.', lessonPart: 3 },
      { front: 'Both curves shift — when is something indeterminate?', back: 'When the two shifts move price (or quantity) in opposite directions, the magnitude is unknown without more info. The other variable\'s direction IS determinate.', lessonPart: 4 },
      { front: 'Consumer surplus', back: 'Area below the demand curve and above the equilibrium price. Measures buyers\' net gain from trade.', lessonPart: 5 },
      { front: 'Producer surplus', back: 'Area above the supply curve and below the equilibrium price. Measures sellers\' net gain from trade.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-elasticity': {
    textContent: `## Elasticity

Elasticity measures how *responsive* one variable is to a change in another. The most important is the **price elasticity of demand (PED)**, which captures how sensitive quantity demanded is to a change in price.

### Price Elasticity of Demand

$$E_d = \\dfrac{\\%\\Delta Q_d}{\\%\\Delta P}$$

By convention we take the absolute value. Demand is:
- **Elastic** if $|E_d| > 1$ — quantity reacts more than price (luxuries, goods with many substitutes, narrowly defined goods, long time horizons).
- **Inelastic** if $|E_d| < 1$ — quantity reacts less than price (necessities, goods with few substitutes, addictive goods, short horizons).
- **Unit-elastic** if $|E_d| = 1$.

### Total Revenue and the Total-Revenue Test

Total revenue is $TR = P \\times Q$. The relationship between $TR$ and price changes depends entirely on elasticity:

| Demand is… | If P rises… | If P falls… |
|------------|:-----------:|:-----------:|
| Elastic    | TR ↓        | TR ↑        |
| Inelastic  | TR ↑        | TR ↓        |
| Unit       | TR unchanged| TR unchanged|

This is the **total-revenue test**: change the price slightly and see what happens to revenue — that tells you the elasticity in that price range.

### Determinants of Price Elasticity

Demand is more elastic when (1) close substitutes are available, (2) the good takes a large share of the consumer's budget, (3) the good is a luxury, (4) the time horizon is longer (consumers and producers can adjust), and (5) the good is narrowly defined (e.g., "Honda Civic" is more elastic than "cars in general").

### Other Elasticities

- **Cross-price elasticity:** $E_{xy} = \\%\\Delta Q_x / \\%\\Delta P_y$. Positive ⇒ substitutes. Negative ⇒ complements. Near zero ⇒ unrelated.
- **Income elasticity:** $E_I = \\%\\Delta Q / \\%\\Delta I$. Positive ⇒ normal good (>1 = luxury). Negative ⇒ inferior good.
- **Price elasticity of supply:** mirrors PED but applies to producers; depends mainly on time and excess capacity.

### Why Elasticity Matters for Policy

Tax incidence, the deadweight loss from price controls, and the revenue impact of business pricing all hinge on elasticity. The side of the market that is more INELASTIC (less responsive) bears the larger share of any tax burden, because that side has fewer ways to escape the tax.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `When the price of breakfast cereal rises from \\$4.00 to \\$4.40 per box (a 10% increase), the quantity demanded falls from 1,000 to 850 boxes. (a) Compute the price elasticity of demand using the simple % method. (b) Is demand elastic, inelastic, or unit-elastic?`,
        solution: `(a) $\\%\\Delta P = +10\\%$. $\\%\\Delta Q = (850 - 1000)/1000 = -15\\%$.

$|E_d| = |{-15\\%}/{+10\\%}| = \\boxed{1.5}.$

(b) $|E_d| = 1.5 > 1$ ⇒ demand is **elastic** in this range.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `A bakery raises its bread price by 5% and observes total revenue from bread INCREASE. Without doing any further calculation, is demand for the bakery's bread elastic, inelastic, or unit-elastic? Justify with the total-revenue test.`,
        solution: `Total revenue and price moved in the SAME direction (both up). By the total-revenue test, that means demand is **inelastic** ($|E_d| < 1$): the percentage drop in quantity is smaller than the percentage rise in price, so $TR = P \\times Q$ rose.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `When the price of margarine rises by 8%, the quantity of butter demanded rises by 12%. (a) Compute the cross-price elasticity. (b) State the relationship between the two goods.`,
        solution: `(a) $E_{xy} = \\%\\Delta Q_x / \\%\\Delta P_y = +12\\%/+8\\% = \\boxed{+1.5}.$

(b) $E_{xy} > 0$ ⇒ butter and margarine are **substitutes** (and rather close ones, since the magnitude is large).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `When household income rises by 10%, demand for restaurant meals rises by 18%, and demand for instant ramen falls by 4%. Compute the income elasticity for each and classify each good (normal/inferior, and if normal, luxury or necessity).`,
        solution: `**Restaurant meals:** $E_I = +18/+10 = +1.8$. Positive ⇒ normal. Greater than 1 ⇒ **normal luxury good**.

**Instant ramen:** $E_I = -4/+10 = -0.4$. Negative ⇒ **inferior good** (consumers buy less of it as income rises).` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `The government imposes a per-unit excise tax on cigarettes. Using elasticity, explain (a) who bears more of the tax burden — buyers or sellers — given that the demand for cigarettes is highly inelastic, and (b) why this tax raises substantial revenue but creates relatively little deadweight loss.`,
        solution: `(a) The side of the market that is **less elastic** (more inelastic) bears more of the tax burden, because it has fewer ways to escape it. Cigarette demand is highly inelastic ⇒ **buyers** absorb most of the tax through a higher consumer price; sellers' net price falls only slightly.

(b) **Revenue:** Because consumers reduce smoking only modestly, $Q$ stays high and the per-unit tax × quantity yields large revenue.

**Deadweight loss (DWL):** DWL is proportional to the *reduction* in quantity caused by the tax. With inelastic demand, that reduction is small, so DWL is small. This is the classic "Ramsey rule" intuition: governments minimize efficiency losses by taxing inelastic goods — at the cost of placing more burden on the buyers of those goods.` },
    ],
    cards: [
      { front: 'Price elasticity of demand formula', back: '$|E_d| = |\\%\\Delta Q_d / \\%\\Delta P|$. Take the absolute value by convention.', lessonPart: 1 },
      { front: 'Elastic vs inelastic threshold', back: '$|E_d| > 1$: elastic (quantity reacts more than price). $|E_d| < 1$: inelastic. $|E_d| = 1$: unit-elastic.', lessonPart: 1 },
      { front: 'Five determinants of elasticity', back: '(1) availability of substitutes, (2) share of budget, (3) luxury vs necessity, (4) time horizon, (5) how narrowly the good is defined.', lessonPart: 2 },
      { front: 'Total-revenue test', back: 'If P and TR move in the SAME direction ⇒ demand is inelastic. If OPPOSITE directions ⇒ elastic. If TR is unchanged ⇒ unit-elastic.', lessonPart: 3 },
      { front: 'On a linear demand curve, where is demand elastic vs inelastic?', back: 'Upper half of the curve: elastic. Midpoint: unit-elastic. Lower half: inelastic. Elasticity is NOT the same as slope.', lessonPart: 3 },
      { front: 'Cross-price elasticity sign meaning', back: '$E_{xy} > 0$: substitutes. $E_{xy} < 0$: complements. $E_{xy} \\approx 0$: unrelated goods.', lessonPart: 4 },
      { front: 'Income elasticity classification', back: '$E_I > 0$: normal good ($> 1$ = luxury, $0 < E_I < 1$ = necessity). $E_I < 0$: inferior good.', lessonPart: 4 },
      { front: 'Price elasticity of SUPPLY — main driver', back: 'Time. In the short run supply is more inelastic (capacity is fixed); long run is more elastic (firms can build/exit).', lessonPart: 5 },
      { front: 'Tax incidence rule', back: 'The more INELASTIC side of the market bears the LARGER share of the tax burden — they have fewer ways to substitute away.', lessonPart: 6 },
      { front: 'Perfectly elastic vs perfectly inelastic graph', back: 'Perfectly elastic: horizontal demand/supply ($E = \\infty$). Perfectly inelastic: vertical curve ($E = 0$).', lessonPart: 1 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-government-intervention': {
    textContent: `## Government Intervention in Markets

Even a perfectly competitive market can produce outcomes that policymakers want to alter — usually because the equilibrium price is considered too high (hurting consumers) or too low (hurting producers). The standard tools are price controls (price ceilings and floors), excise taxes, subsidies, and quotas. Each creates predictable winners and losers and almost always reduces total surplus.

### Price Ceilings

A **price ceiling** is a legal maximum price. To matter, it must be set BELOW equilibrium ($P_c < P^*$). The result is a persistent **shortage**: $Q_d > Q_s$. Examples include rent control and gasoline price caps. Side effects include long lines, black markets, and reduced supplier incentive to maintain quality.

### Price Floors

A **price floor** is a legal minimum price. To matter, it must be set ABOVE equilibrium ($P_f > P^*$). The result is a persistent **surplus**: $Q_s > Q_d$. Examples include the minimum wage (a floor in the labor market that creates excess supply of labor — i.e., unemployment) and agricultural support prices.

### Per-Unit Taxes (Excise Taxes)

An excise tax shifts the supply curve UP by the amount of the tax. The new equilibrium quantity is lower, the price paid by consumers ($P_c$) rises, and the price received by sellers ($P_p = P_c - \\text{tax}$) falls. Tax revenue equals tax × $Q_{\\text{new}}$. The wedge between $P_c$ and $P_p$ creates a triangular **deadweight loss (DWL)** — mutually beneficial trades that no longer occur.

**Tax incidence** depends on relative elasticities: the more inelastic side of the market bears the bigger share of the tax.

### Subsidies

A subsidy is the mirror image of a tax: it shifts supply DOWN by the per-unit subsidy, raising equilibrium quantity, lowering the price consumers pay, and raising the price sellers effectively receive. Subsidies cost the government money and, when applied to a competitive market with no externalities, also create deadweight loss because they push output beyond the socially optimal quantity.

### Quotas and Tariffs

Quotas (legal quantity limits) and tariffs (taxes on imports) both restrict supply — they raise prices for domestic consumers and shrink consumer surplus while transferring some of that loss to producers and (for tariffs) the government.

### Why It Matters

Every AP Microeconomics exam includes graphs of taxes or price controls. You will be asked to identify changes in CS, PS, government revenue, and deadweight loss, and to label tax incidence by area on a diagram.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `In a competitive market for apartments, equilibrium rent is \\$1,200. The city imposes a rent ceiling of \\$900. (a) Will this cause a shortage or surplus, and why? (b) Identify two non-price effects you might expect.`,
        solution: `(a) The ceiling is BELOW equilibrium, so it is binding. At $P = \\$900$: $Q_d > Q_s$ ⇒ **shortage** of apartments. The artificially low price raises quantity demanded and reduces quantity supplied.

(b) Possible non-price effects: long waiting lists, key-money / under-the-table side payments, reduced maintenance and quality (landlords have less incentive to invest), illegal sublets / black market.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `The federal minimum wage is set above the market-clearing wage in a low-skill labor market. Use a labor-market diagram (verbally) to predict the effect on (a) the wage actually paid, (b) the quantity of labor employed, and (c) the quantity of labor supplied. What gap does this create?`,
        solution: `(a) The wage rises to the legal floor — above equilibrium.

(b) Quantity demanded of labor (employment) FALLS — firms hire fewer workers at the higher wage.

(c) Quantity supplied of labor RISES — more people want to work at the higher wage.

The gap $Q_s - Q_d$ at the floor wage is the **surplus of labor**, observed as **unemployment** caused by the binding minimum wage.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `A market in equilibrium at $P^* = \\$10$, $Q^* = 100$. A \\$2 per-unit excise tax is imposed on producers. After the tax, $P_c = \\$11$ (price consumers pay) and $Q_{\\text{new}} = 90$. (a) Find $P_p$ (price producers receive net of tax). (b) Compute government tax revenue. (c) Identify how the \\$2 tax burden splits between consumers and producers.`,
        solution: `(a) $P_p = P_c - \\text{tax} = \\$11 - \\$2 = \\boxed{\\$9}$.

(b) $\\text{Revenue} = \\text{tax} \\times Q_{\\text{new}} = (\\$2)(90) = \\boxed{\\$180}$.

(c) Consumers' burden: $P_c - P^* = \\$11 - \\$10 = \\$1$ per unit. Producers' burden: $P^* - P_p = \\$10 - \\$9 = \\$1$ per unit. The tax is split **\\$1/\\$1** (50/50 here, which implies roughly equal elasticities of demand and supply).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `On a supply-and-demand graph, an excise tax raises $P_c$ from \\$10 to \\$13 and lowers $P_p$ to \\$8, with quantity falling from 100 to 80. Compute the deadweight loss.`,
        solution: `Tax wedge = $P_c - P_p = \\$13 - \\$8 = \\$5$.

DWL is a triangle with base = tax wedge = \\$5 and height = reduction in quantity = $100 - 80 = 20$:

$DWL = \\tfrac{1}{2}(\\$5)(20) = \\boxed{\\$50}.$` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Two markets each receive a \\$3 per-unit subsidy paid to producers. Market A has highly elastic demand and elastic supply. Market B has highly inelastic demand and inelastic supply. (a) In which market will the subsidy cause a larger increase in quantity? (b) In which market will more of the subsidy "stay" with consumers (lower price)? (c) Which market generates a larger deadweight loss from the subsidy?`,
        solution: `(a) **Market A** — both curves are elastic, so the supply shift produces a much larger change in equilibrium $Q$.

(b) The benefit of a subsidy goes mostly to the side of the market that is more INELASTIC. In market B both sides are inelastic, but the comparison the question wants is "consumers vs producers": the more inelastic side keeps more of the subsidy. If demand is more inelastic than supply in market B, **consumers** benefit more there. In market A both sides being elastic means the subsidy is shared more evenly.

(c) **Market A** — DWL from a subsidy is proportional to the change in quantity beyond the socially optimal $Q^*$. Elastic curves produce a much larger $\\Delta Q$ for the same subsidy ⇒ much larger DWL. Subsidies (like taxes) cause more efficiency loss when the market is more elastic.` },
    ],
    cards: [
      { front: 'Binding price ceiling — what is it and what does it cause?', back: 'Legal maximum price set BELOW equilibrium. Causes a persistent SHORTAGE ($Q_d > Q_s$).', lessonPart: 1 },
      { front: 'Binding price floor — what is it and what does it cause?', back: 'Legal minimum price set ABOVE equilibrium. Causes a persistent SURPLUS ($Q_s > Q_d$). Minimum wage is the classic example.', lessonPart: 1 },
      { front: 'Effect of a per-unit tax on supply curve', back: 'Shifts supply UP (or LEFT) by exactly the per-unit tax amount. New equilibrium has lower Q, higher $P_c$, lower $P_p$.', lessonPart: 2 },
      { front: 'Tax incidence rule', back: 'The more INELASTIC side of the market bears the LARGER share of the tax burden.', lessonPart: 2 },
      { front: 'Tax revenue formula', back: '$\\text{Revenue} = \\text{tax} \\times Q_{\\text{new}}$. On a graph, it\'s the rectangle bounded by $P_c$, $P_p$, and the new quantity.', lessonPart: 2 },
      { front: 'Deadweight loss from a tax', back: 'A triangle whose base is the tax wedge and whose height is the reduction in quantity: $DWL = \\tfrac{1}{2}\\,\\text{tax} \\times \\Delta Q$.', lessonPart: 3 },
      { front: 'Effect of a subsidy on equilibrium', back: 'Shifts supply DOWN (or RIGHT) by the per-unit subsidy. Raises Q, lowers price to consumers, raises effective price to producers.', lessonPart: 4 },
      { front: 'Why do subsidies cause deadweight loss in a competitive market with no externality?', back: 'They push output ABOVE the socially efficient $Q^*$, where MC > MB on the extra units. The cost of producing them exceeds the benefit.', lessonPart: 4 },
      { front: 'Effect of a tariff on a small importing country', back: 'Raises domestic price, shrinks consumer surplus, raises producer surplus, generates government revenue, and creates two DWL triangles (production + consumption distortion).', lessonPart: 5 },
      { front: 'Why does rent control reduce housing quality over time?', back: 'Landlords receive less revenue and have less incentive to maintain or build. Quantity supplied falls in the long run, worsening the shortage.', lessonPart: 1 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-production-costs': {
    textContent: `## Production and Costs

Behind every supply curve lies a firm's cost structure. Microeconomic firm theory begins with the **production function** — the relationship between inputs (labor, capital) and output (Q) — and translates that physical relationship into the dollar costs that drive supply decisions.

### Short Run vs Long Run

In the **short run**, at least one input (usually capital — plant, machinery) is fixed. The firm can only vary labor and other variable inputs. In the **long run**, all inputs are variable; the firm can change plant size, exit, or enter.

### The Law of Diminishing Marginal Returns

In the short run, as more units of a variable input (labor) are added to a fixed input, the **marginal product (MP)** of additional units eventually FALLS. This is purely physical — the third worker sharing one machine adds less output than the second. Diminishing returns is the reason short-run marginal cost ($MC$) eventually rises.

### Short-Run Cost Concepts

| Cost      | Meaning                                                |
|-----------|--------------------------------------------------------|
| TFC       | Total fixed cost — does not change with output         |
| TVC       | Total variable cost — rises with output                |
| TC        | $TFC + TVC$                                            |
| AFC       | $TFC/Q$ — falls continuously                           |
| AVC       | $TVC/Q$ — U-shaped                                     |
| ATC       | $TC/Q$ — U-shaped (sum of AFC and AVC)                 |
| MC        | $\\Delta TC/\\Delta Q$ — U-shaped                       |

A critical relationship: the marginal cost curve crosses both AVC and ATC at their MINIMUM points. This is a pure mathematical property of averages — when marginal is below average, it pulls the average down; when above, it pushes it up.

### Long-Run Average Total Cost (LRATC)

In the long run, the firm picks the most efficient plant size for each output level. The LRATC curve is the lower envelope of all possible short-run ATC curves. Its shape reveals:
- **Economies of scale**: LRATC falls as output rises (specialization, bulk discounts).
- **Constant returns to scale**: LRATC flat.
- **Diseconomies of scale**: LRATC rises (coordination/management problems).

### Profit Concepts

- **Accounting profit** = $TR - \\text{explicit costs}$.
- **Economic profit** = $TR - \\text{explicit} - \\text{implicit costs}$ (including the opportunity cost of the owner's resources).

A firm earning ZERO economic profit is doing JUST as well as in its next-best alternative — it is breaking even in economic terms even while earning a positive accounting profit.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `A firm's TFC = \\$200 and TVC at Q = 50 is \\$300. Compute (a) TC, (b) AFC, (c) AVC, and (d) ATC at Q = 50.`,
        solution: `(a) $TC = TFC + TVC = 200 + 300 = \\boxed{\\$500}$.

(b) $AFC = TFC/Q = 200/50 = \\boxed{\\$4}$.

(c) $AVC = TVC/Q = 300/50 = \\boxed{\\$6}$.

(d) $ATC = TC/Q = 500/50 = \\boxed{\\$10}$. (Equivalently, $ATC = AFC + AVC = 4 + 6 = 10$.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Total cost when Q = 20 is \\$300. When Q rises to 25, total cost is \\$340. Compute the marginal cost over this range.`,
        solution: `$MC = \\dfrac{\\Delta TC}{\\Delta Q} = \\dfrac{340 - 300}{25 - 20} = \\dfrac{40}{5} = \\boxed{\\$8}$ per unit.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain why MC must cross both AVC and ATC at their minimum points. Use the analogy of test scores.`,
        solution: `It's a pure mathematical property of averages and marginals.

If the **next** test score (marginal) is BELOW your current average, your average must FALL. If the next score is ABOVE your average, the average must RISE. The average is unchanged only when the marginal equals the current average — and that's exactly the *minimum* of the average curve.

Translating to costs: when MC < AVC, AVC is falling. When MC > AVC, AVC is rising. Therefore MC = AVC exactly at AVC's minimum. Same logic for ATC. (MC need not be at its own minimum at this point — the minimum of MC occurs earlier.)` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `A firm earns total revenue of \\$80,000 per year. Explicit costs are \\$50,000. The owner could have earned \\$40,000 working elsewhere. Compute (a) accounting profit and (b) economic profit. (c) Is the firm earning profit "in the economic sense"?`,
        solution: `(a) **Accounting profit** = $TR - \\text{explicit costs} = 80{,}000 - 50{,}000 = \\boxed{\\$30{,}000}$.

(b) The implicit (opportunity) cost of the owner\'s time is \\$40,000.
**Economic profit** = $TR - \\text{explicit} - \\text{implicit} = 80{,}000 - 50{,}000 - 40{,}000 = \\boxed{-\\$10{,}000}$.

(c) **No.** Economic profit is negative — the owner would be \\$10,000 better off in the next-best alternative. Even though accounting books look healthy, the firm is *destroying* value relative to the owner\'s opportunity cost.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `A firm in the short run has the following cost structure: TFC = \\$100. At Q = 10, TVC = \\$60; at Q = 11, TVC = \\$72; at Q = 12, TVC = \\$88. (a) Compute MC for the 11th and 12th units. (b) What does the rising MC tell you about marginal product of the variable input? (c) The firm faces a market price of \\$15 per unit. Should it produce the 11th and 12th units?`,
        solution: `(a) $MC_{11} = 72 - 60 = \\boxed{\\$12}$. $MC_{12} = 88 - 72 = \\boxed{\\$16}$.

(b) MC is rising ⇒ each additional unit takes MORE variable input than the last ⇒ the **marginal product of the variable input is falling**. This is the law of diminishing marginal returns at work.

(c) Compare price (= MR for a price-taker) to MC.
- 11th unit: $P = 15 > MC_{11} = 12$ ⇒ **produce** (adds \\$3 to profit).
- 12th unit: $P = 15 < MC_{12} = 16$ ⇒ **do not produce** (would lose \\$1).

Optimal short-run output stops where $MC = MR$ — i.e., the 11th unit is the last profitable one.` },
    ],
    cards: [
      { front: 'Short run vs long run', back: 'Short run: at least one input (typically capital) is fixed. Long run: ALL inputs are variable; firms can enter/exit and change plant size.', lessonPart: 1 },
      { front: 'Law of diminishing marginal returns', back: 'In the short run, adding more units of a variable input to a fixed input eventually causes the marginal product (extra output) of those units to fall.', lessonPart: 2 },
      { front: 'Total fixed cost (TFC)', back: 'Cost that does not change with output (rent, lease payments). On a graph, a horizontal line. Exists only in the short run.', lessonPart: 3 },
      { front: 'Marginal cost formula', back: '$MC = \\Delta TC/\\Delta Q = \\Delta TVC/\\Delta Q$ (TFC doesn\'t change, so it cancels). U-shaped in the short run.', lessonPart: 3 },
      { front: 'Why does ATC have a U-shape?', back: 'AFC keeps falling as Q grows, but AVC eventually rises (diminishing returns). The sum first falls, then rises.', lessonPart: 3 },
      { front: 'Where does MC intersect AVC and ATC?', back: 'At their MINIMUM points. (Pure averaging math: marginal below average pulls average down; marginal above average pushes it up.)', lessonPart: 3 },
      { front: 'Long-run ATC', back: 'The lower envelope of all short-run ATC curves; the firm chooses the optimal plant size for each output level.', lessonPart: 4 },
      { front: 'Economies vs diseconomies of scale', back: 'Economies: LRATC falls as Q rises (specialization, bulk buying). Diseconomies: LRATC rises (management/communication problems at large scale).', lessonPart: 4 },
      { front: 'Accounting vs economic profit', back: 'Accounting profit = TR − explicit costs. Economic profit = TR − explicit − implicit (opportunity) costs. Economic profit is what economists mean by "profit".', lessonPart: 5 },
      { front: 'Zero economic profit — what does it mean?', back: 'The firm is just covering ALL costs including the owner\'s opportunity cost. It\'s doing no better and no worse than its next-best alternative — a "normal" rate of return.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-perfect-competition': {
    textContent: `## Perfect Competition

Perfect competition is the benchmark market structure against which all others are judged. It assumes (1) a large number of small buyers and sellers, (2) a homogeneous (identical) product, (3) free entry and exit, and (4) perfect information. No single firm can influence the market price — each is a **price-taker**.

### The Firm's Demand and Marginal Revenue

Because the firm is a price-taker, its demand curve is **horizontal** at the market price: it can sell as much as it wants at $P^*$ but nothing above. As a result, $P = AR = MR$ — every extra unit sold adds the same amount to revenue.

### Profit Maximization: $MR = MC$

Every firm — competitive or otherwise — maximizes profit at the output where **marginal revenue equals marginal cost**. For a price-taker this simplifies to $P = MC$. At that quantity, total profit per unit is $P - ATC$, so:

$$\\pi = (P - ATC) \\times Q.$$

### Three Short-Run Outcomes

1. **Economic profit** ($P > ATC$): firm earns positive profit, attracting entry.
2. **Break-even** ($P = ATC$): zero economic profit; firm covers ALL costs including opportunity cost.
3. **Loss** ($P < ATC$): firm loses money. Stay open if $P \\geq AVC$ (covers variable costs and contributes to fixed cost). **Shut down** in the short run if $P < AVC$.

The shut-down rule has a precise graphical interpretation: the firm's short-run supply curve is its MC curve **above** AVC.

### Long-Run Equilibrium

In the long run, free entry and exit erode any economic profit. If $P > ATC$ ⇒ firms enter ⇒ market supply shifts right ⇒ $P$ falls until $P = \\min ATC$. Conversely, losses cause exit and rising prices.

In long-run equilibrium of perfect competition:

$$P = MR = MC = \\min ATC.$$

This generates several efficiency results:
- **Allocative efficiency:** $P = MC$ — society's value of the last unit equals its cost of production.
- **Productive efficiency:** firms produce at minimum ATC — no waste.
- **Zero economic profit** — but firms are still earning a "normal" return.

### Why It Matters

Perfect competition is the efficiency benchmark: any other market structure (monopoly, oligopoly) is judged by how much it *deviates* from $P = MC$ and how much deadweight loss that deviation creates.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `A perfectly competitive firm produces 50 units at $P = \\$8$, $ATC = \\$6$, and $MC = \\$8$. (a) Compute total profit. (b) Is the firm at the profit-maximizing output? Justify briefly.`,
        solution: `(a) Per-unit profit = $P - ATC = 8 - 6 = \\$2$. Total profit = $\\$2 \\times 50 = \\boxed{\\$100}$.

(b) Yes. Profit is maximized where $MR = MC$, and for a price-taker $MR = P$. Here $P = MC = \\$8$, so the firm IS at the profit-maximizing output.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `At the firm's chosen output, $P = \\$10$, $AVC = \\$12$, and $ATC = \\$15$. Should the firm continue producing in the short run, or shut down? Explain.`,
        solution: `Apply the shut-down rule: produce iff $P \\ge AVC$. Here $P = \\$10 < AVC = \\$12$ ⇒ **shut down** in the short run.

Reason: at this price, revenue does not even cover variable costs, so producing actually adds to losses. Shutting down limits losses to fixed costs only.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `In a perfectly competitive market, firms are currently earning positive economic profit. Describe the chain of events that drives the market back to long-run equilibrium, and identify the final values of $P$, $\\pi$, and $Q$ for the typical firm relative to its ATC curve.`,
        solution: `**Chain of events:**
1. Positive economic profit signals attractive returns ⇒ new firms ENTER.
2. Entry shifts the market supply curve to the RIGHT.
3. Rightward supply shift LOWERS the market equilibrium price $P^*$.
4. Each existing firm now faces a lower horizontal demand curve, so it cuts $Q$ (reading off its MC curve) and earns less profit per unit.
5. Entry continues as long as $P > ATC$. It stops when $P = \\min ATC$.

**Long-run outcome for the typical firm:**
- $P = \\min ATC$.
- $\\pi^{\\text{economic}} = 0$ (firms still earn a normal profit — covering opportunity costs).
- The firm produces at the bottom of its ATC curve (productive efficiency) and at $P = MC$ (allocative efficiency).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `A wheat farmer faces $P = \\$5$ per bushel. Her cost function gives $MC(Q) = 0.10Q$. (a) Find the profit-maximizing quantity. (b) If $ATC$ at that Q is \\$4, find total profit.`,
        solution: `(a) For a price-taker, max profit at $P = MC$: $5 = 0.10Q \\Rightarrow \\boxed{Q^* = 50}$ bushels.

(b) Per-unit profit = $P - ATC = 5 - 4 = \\$1$. Total profit = $\\$1 \\times 50 = \\boxed{\\$50}$.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Consider two perfectly competitive industries. Industry A is in long-run equilibrium. In industry B, a new technology lowers ATC for ALL firms by 30%, but the technology is freely available. (a) Show what happens to firm-level price, output, and profit in industry B in the short run. (b) Trace the long-run adjustment. (c) Compare long-run equilibrium prices in industries A and B after adjustment.`,
        solution: `(a) **Short run in B:** ATC and MC shift down by 30%. The market price has not yet changed (other firms haven't reacted). Each firm now produces at the new $P = MC$, slightly more output, and earns positive economic profit because $P > \\text{new } ATC$.

(b) **Long-run adjustment in B:** Positive profit ⇒ entry. Some new firms enter, some existing firms expand. Market supply shifts RIGHT. Market price falls until $P = \\min(\\text{new }ATC)$. Each surviving firm earns zero economic profit again, but at a lower price and producing at the bottom of the new (lower) ATC curve.

(c) **Comparison:** Long-run $P$ in industry B is **lower than** in industry A by the cost-savings amount. Both industries have zero economic profit; the difference is that B\'s consumers permanently enjoy a lower price as the cost reduction is competed away. This illustrates why perfect competition + free entry pass cost savings on to consumers.` },
    ],
    cards: [
      { front: 'Four assumptions of perfect competition', back: '(1) Many small buyers/sellers, (2) homogeneous product, (3) free entry and exit, (4) perfect information. Result: every firm is a price-taker.', lessonPart: 1 },
      { front: 'Demand curve facing a single perfectly competitive firm', back: 'Perfectly elastic (HORIZONTAL) at the market price. The firm can sell any quantity at $P^*$ but zero above.', lessonPart: 1 },
      { front: 'For a price-taker: $P$, $AR$, and $MR$', back: 'All three are equal: $P = AR = MR$. Each extra unit sold adds the market price to revenue.', lessonPart: 2 },
      { front: 'Profit-maximization rule for ANY firm', back: 'Produce where $MR = MC$. For a perfect competitor, $MR = P$, so the rule simplifies to $P = MC$.', lessonPart: 2 },
      { front: 'Short-run profit per unit', back: '$\\pi/Q = P - ATC$. Total profit = $(P - ATC) \\times Q$. Sign tells you: $> 0$ profit, $= 0$ break-even, $< 0$ loss.', lessonPart: 3 },
      { front: 'Shut-down rule (short run)', back: 'Operate if $P \\ge AVC$. Shut down if $P < AVC$. Below AVC, even producing adds to losses; better to lose only fixed costs.', lessonPart: 3 },
      { front: 'Firm\'s short-run supply curve', back: 'Its MC curve ABOVE AVC. Below AVC the firm shuts down (Q = 0), so supply is zero.', lessonPart: 3 },
      { front: 'Long-run adjustment when firms earn economic profit', back: 'Profit ⇒ entry ⇒ market supply shifts right ⇒ price falls ⇒ profits drop. Continues until $P = \\min ATC$ and $\\pi = 0$.', lessonPart: 4 },
      { front: 'Long-run equilibrium triple equality', back: '$P = MR = MC = \\min ATC$. Every firm earns zero economic profit and operates at the bottom of its ATC curve.', lessonPart: 4 },
      { front: 'Two efficiency properties of perfect competition', back: 'Allocative efficiency: $P = MC$ (price equals society\'s cost of the last unit). Productive efficiency: $Q$ at $\\min ATC$ (no waste).', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-monopoly': {
    textContent: `## Monopoly

A **monopoly** is a market with a SINGLE seller of a product that has no close substitutes, protected by significant barriers to entry. Monopolies arise from:
- Government franchises (patents, exclusive licenses).
- Control of an essential resource.
- **Natural monopoly**: one firm can serve the market at lower ATC than two or more firms because of large economies of scale.
- Network effects.

Unlike a competitive firm, a monopolist faces the entire market demand curve, which is downward-sloping. To sell more, it must lower price.

### Marginal Revenue Below Price

Because the monopolist must lower price on ALL units (assuming no price discrimination) to sell one more, $MR < P$ for every unit beyond the first. For a linear demand $P = a - bQ$, the corresponding $MR = a - 2bQ$ — same intercept, twice the slope.

### Profit Maximization

The monopolist still produces where $MR = MC$. But it then charges the price consumers are willing to pay for that quantity, read off the **demand curve**: $P_M$. Compared to perfect competition, the monopoly produces a lower $Q$ and charges a higher $P$.

### Profit and Loss

If $P_M > ATC$ at $Q_M$, monopoly earns positive economic profit. Because barriers to entry block competitors, monopoly profits can persist in the long run — unlike perfect competition.

### Inefficiency and Deadweight Loss

At $Q_M$, $P_M > MC$. There are units that consumers value above their MC of production but the monopolist won't produce. That gap creates **deadweight loss**: the triangle between MC, demand, and the vertical line at $Q_M$.

Monopolies are **allocatively inefficient** ($P > MC$) and typically **productively inefficient** as well (no force pushes them to produce at min ATC).

### Price Discrimination

If the monopolist can identify groups with different willingness to pay AND prevent resale, it can charge different prices to different buyers (e.g., student discounts, airline fares). **Perfect price discrimination** charges each buyer their maximum willingness to pay; it eliminates DWL but transfers ALL consumer surplus to the firm.

### Government Responses

For natural monopolies, regulators may impose:
- **Socially optimal price** ($P = MC$): efficient, but firm may suffer losses if MC < ATC ⇒ requires subsidy.
- **Fair-return price** ($P = ATC$): zero economic profit, no subsidy needed, but still some DWL.

For other monopolies, antitrust law (breaking up firms, blocking mergers) is the main tool.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Why is marginal revenue less than price for a single-price monopolist? Use the words "lower price on all units" in your explanation.`,
        solution: `To sell one additional unit, the monopolist must move down its downward-sloping demand curve, which means lowering the price NOT just on the new unit, but on **all units** sold. So MR equals the price of the new unit MINUS the lost revenue from charging less on the previous units. That subtraction makes $MR < P$ for every unit after the first.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Linear demand for a monopoly is $P = 100 - 2Q$. (a) Write the MR function. (b) If MC is constant at \\$20, find the profit-maximizing quantity and price.`,
        solution: `(a) For linear demand $P = a - bQ$, $MR = a - 2bQ = \\boxed{100 - 4Q}$.

(b) Set $MR = MC$: $100 - 4Q = 20 \\Rightarrow Q^* = 20$. Then $P^* = 100 - 2(20) = \\boxed{\\$60}$. Output 20, price \\$60.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `For the monopoly in problem 2 ($P = 100 - 2Q$, $MC = 20$, $Q_M = 20$, $P_M = 60$), suppose ATC at $Q_M$ is \\$30. Compute (a) total profit and (b) deadweight loss versus the perfectly competitive outcome ($P = MC$).`,
        solution: `(a) Per-unit profit = $P_M - ATC = 60 - 30 = \\$30$. Total profit = $\\$30 \\times 20 = \\boxed{\\$600}$.

(b) Competitive outcome: $P = MC = \\$20 \\Rightarrow Q_C = 100 - 2P)/2$? Use demand directly: $20 = 100 - 2Q \\Rightarrow Q_C = 40$.

DWL is the triangle between demand and MC from $Q_M = 20$ to $Q_C = 40$:
- Base (along Q-axis) = $40 - 20 = 20$.
- Height (gap between $P_M$ on demand and MC) = $60 - 20 = 40$.

$DWL = \\tfrac{1}{2}(20)(40) = \\boxed{\\$400}$.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `A natural monopoly's ATC declines throughout the relevant output range (continuous economies of scale). (a) Why is this market structure called a "natural" monopoly? (b) Why does setting price at $P = MC$ cause the firm to lose money? (c) What price/regulation balances efficiency with the firm's solvency?`,
        solution: `(a) Because economies of scale are so large that one firm produces at lower ATC than two or more firms could; competition is unsustainable. The market "naturally" leads to a single producer.

(b) When ATC is continuously falling, MC lies BELOW ATC at every Q. Setting $P = MC$ means $P < ATC$, so per-unit revenue is less than per-unit cost — the firm loses money on every unit. Without a subsidy, it cannot survive.

(c) **Fair-return regulation:** set $P = ATC$ at the regulated quantity. The firm earns zero economic profit (covers all costs including opportunity cost). $Q$ is higher and $P$ lower than the unregulated monopoly outcome, but DWL is not eliminated entirely. This is the standard "second-best" solution for natural monopoly.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare three pricing scenarios for the same monopolist with linear demand and constant MC: (a) single-price monopoly, (b) perfect price discrimination, (c) perfectly competitive equilibrium. Rank them on (i) consumer surplus, (ii) producer surplus, (iii) total surplus, (iv) deadweight loss. Provide a one-sentence justification for each ranking.`,
        solution: `Let $TS^*$ denote the maximum (efficient) total surplus.

(i) **Consumer surplus:** Competitive (largest) > Single-price monopoly > Perfect PD (zero). Justification: PD captures every unit of CS for the firm; competitive markets give consumers the largest surplus.

(ii) **Producer surplus:** Perfect PD (largest, captures full $TS^*$) > Single-price monopoly > Competitive. Justification: PD turns all of CS into PS; the competitive firm earns zero economic profit in long run.

(iii) **Total surplus:** Competitive = Perfect PD ($= TS^*$, both efficient) > Single-price monopoly. Justification: PD is allocatively efficient because the monopolist serves every buyer whose willingness to pay exceeds MC, eliminating DWL — but transfers all surplus to the seller.

(iv) **Deadweight loss:** Single-price monopoly (positive DWL) > Competitive = Perfect PD (both zero). Justification: only the single-price monopoly restricts $Q$ below $Q^*$.` },
    ],
    cards: [
      { front: 'Four sources of monopoly power', back: '(1) Government franchise / patent, (2) control of a key resource, (3) natural monopoly (large economies of scale), (4) network effects.', lessonPart: 1 },
      { front: 'Demand curve facing a monopolist', back: 'The entire market demand curve — downward-sloping. To sell more, the firm must lower price.', lessonPart: 1 },
      { front: 'Why is $MR < P$ for a monopolist?', back: 'Selling one more unit requires lowering price on ALL units sold (no price discrimination). $MR$ = price of new unit minus revenue lost on inframarginal units.', lessonPart: 2 },
      { front: 'MR for linear demand $P = a - bQ$', back: '$MR = a - 2bQ$. Same y-intercept, twice the slope of demand.', lessonPart: 2 },
      { front: 'Profit-maximizing rule for a monopoly', back: 'Produce where $MR = MC$, then read price OFF THE DEMAND CURVE at that quantity ($P_M > MC$).', lessonPart: 3 },
      { front: 'Why does monopoly create deadweight loss?', back: 'At $Q_M$, $P_M > MC$. Units exist with willingness to pay above MC that are not produced. The triangle between demand and MC over those units is DWL.', lessonPart: 3 },
      { front: 'Compared to perfect competition, a monopoly produces…', back: 'Lower $Q$, higher $P$, positive long-run economic profit. Allocatively inefficient ($P > MC$) and not generally at min ATC.', lessonPart: 3 },
      { front: 'Three conditions for price discrimination', back: '(1) Some monopoly power, (2) ability to identify groups with different willingness to pay, (3) ability to prevent resale across groups.', lessonPart: 4 },
      { front: 'Effect of perfect price discrimination', back: 'Eliminates DWL (efficient). Transfers ALL consumer surplus to the firm. Quantity = competitive level. CS = 0.', lessonPart: 4 },
      { front: 'Natural-monopoly regulatory pricing', back: 'Socially optimal: $P = MC$ — efficient but firm loses money (needs subsidy). Fair-return: $P = ATC$ — zero economic profit, no subsidy, some DWL remains.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-monopolistic-oligopoly': {
    textContent: `## Monopolistic Competition and Oligopoly

Most real-world markets fall between perfect competition and pure monopoly. The two most important intermediate structures are **monopolistic competition** and **oligopoly**.

### Monopolistic Competition

Many sellers, but each offers a slightly **differentiated** product (think restaurants, hair salons, smartphone apps). Free entry and exit. Each firm has a small amount of market power because of differentiation, so its demand curve is **downward-sloping** (but more elastic than a pure monopolist's).

**Short run:** firm acts like a small monopolist. Sets $MR = MC$, charges $P$ from demand, can earn positive profit, break even, or lose.

**Long run:** entry/exit drives economic profit to zero. The demand curve shifts until it is tangent to the ATC curve at the profit-maximizing $Q$. At this tangency:
- $P = ATC$ (zero profit).
- $P > MC$ (allocative inefficiency — small DWL remains).
- $Q$ is to the LEFT of min ATC ⇒ "excess capacity": firms could produce more cheaply but don't, because demand is too thin at lower prices.

The trade-off society accepts: variety/differentiation in exchange for some inefficiency.

### Oligopoly

A few large firms dominate the market (auto, airlines, soft drinks, telecom). High barriers to entry. The defining feature is **strategic interaction**: each firm's optimal action depends on what rivals do. Tools include game theory and the kinked demand model.

#### Game Theory Basics

A **payoff matrix** shows the outcomes for two firms based on each combination of strategies. A **dominant strategy** is the best move regardless of what the rival does. A **Nash equilibrium** is a combination where neither firm can improve by changing its own strategy unilaterally.

The classic **Prisoners' Dilemma** structure shows up in oligopolistic price wars and capacity decisions: each firm has a dominant strategy to "cheat" (cut price), leading to a Nash equilibrium worse for both than mutual cooperation.

#### Cooperation, Cartels, and Collusion

Firms can earn higher profits by colluding (acting as a joint monopolist), but each then has an incentive to **cheat** by undercutting the cartel price. Cartels are unstable without enforcement — and most are illegal under antitrust law.

### Why It Matters

Real markets need these models. AP exam FRQs frequently ask you to (1) draw the long-run tangency for monopolistic competition, (2) construct or interpret a payoff matrix and identify dominant strategies and Nash equilibrium, and (3) explain why collusion is profitable but unstable.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `In long-run equilibrium of monopolistic competition, what is the relationship between $P$, $MC$, and $ATC$ at the profit-maximizing quantity?`,
        solution: `At long-run equilibrium of monopolistic competition:
- $P = ATC$ (zero economic profit; demand tangent to ATC).
- $P > MC$ (allocative inefficiency; firm still has some pricing power because of differentiation).
- $Q$ lies to the LEFT of $\\min ATC$ ⇒ excess capacity.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Below is a payoff matrix (Firm 1 row, Firm 2 column) of profits in millions:

|             | Low price | High price |
|-------------|:---------:|:----------:|
| Low price   | 5, 5      | 12, 2      |
| High price  | 2, 12     | 10, 10     |

(a) Find each firm's dominant strategy. (b) Identify the Nash equilibrium. (c) What is the cooperative outcome both firms would prefer?`,
        solution: `(a) **Firm 1:** If F2 plays Low → 5 vs 2 ⇒ Low is better. If F2 plays High → 12 vs 10 ⇒ Low is better. Low is **dominant** for F1. By symmetry, Low is dominant for F2.

(b) **Nash equilibrium:** both play Low ⇒ payoffs (5, 5). Neither can improve unilaterally.

(c) Both would prefer (High, High) → (10, 10), but each has an incentive to deviate to Low. Classic prisoners\' dilemma — cooperation is jointly optimal but individually unstable.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Two pizza shops on a college campus engage in monopolistic competition and currently earn positive economic profit. Trace the long-run adjustment, and describe the position of the typical firm's demand curve relative to its ATC curve at the new equilibrium.`,
        solution: `**Adjustment:**
1. Positive profit attracts NEW pizza shops (free entry).
2. Each new entrant takes some customers from existing shops ⇒ each existing firm's demand curve shifts LEFT and becomes MORE elastic (more close substitutes available).
3. Entry continues until each firm's demand curve is just tangent to its ATC curve at the profit-max quantity ($MR = MC$ point).
4. At this tangency: $P = ATC$, economic profit is zero, no further entry.

**Position of the demand curve at long-run equilibrium:** Just tangent to ATC from above at the profit-maximizing $Q$. Above ATC nowhere ⇒ no profit; below ATC nowhere either ⇒ no losses driving exit.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Two firms in a duopoly are considering whether to invest in advanced R&D. Profits (millions):

|              | Invest    | Don't invest |
|--------------|:---------:|:------------:|
| Invest       | 8, 8      | 14, 4        |
| Don't invest | 4, 14     | 10, 10       |

(a) Does either firm have a dominant strategy? (b) What is the Nash equilibrium? (c) Suppose investing also raises social welfare. Is the Nash equilibrium socially optimal?`,
        solution: `(a) **Firm 1:** If F2 invests → 8 vs 4 ⇒ invest. If F2 doesn\'t → 14 vs 10 ⇒ invest. Investing is **dominant** for F1 (and for F2 by symmetry).

(b) **Nash equilibrium:** both invest ⇒ (8, 8).

(c) Social welfare and dominant strategy ALIGN here — both firms invest, the socially desirable outcome. Unlike the prisoners\' dilemma, this game has no conflict between individual incentives and joint best outcome.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `A cartel of 4 oil-producing countries agrees to restrict total output to keep prices high. (a) Why is each country's profit higher under the cartel than under unrestricted competition? (b) Why is the cartel unstable — describe the incentive any single member faces. (c) How does enforcement (e.g., monitoring, side payments) affect cartel stability?`,
        solution: `(a) The cartel acts like a joint monopolist: it restricts $Q$ to where $MR = MC$, raising $P$ above competitive levels. Each member shares in higher monopoly profits compared to the zero-profit competitive outcome.

(b) Once price is high, any single member can SECRETLY expand output. That extra output earns the high cartel price (the deviator faces a more elastic individual demand than the cartel as a whole) so the deviator\'s profit RISES even further — at the expense of other members. Each member faces this same incentive ⇒ classic prisoners\' dilemma at the cartel level.

(c) **Monitoring** detects cheating; **enforcement** (quotas, penalties, publication of production data, side payments) makes cheating costly. The more credibly cheating is punished, the longer the cartel can sustain high prices. OPEC\'s history is one long demonstration of this struggle — it works best when one large producer (Saudi Arabia) bears the cost of policing quotas.` },
    ],
    cards: [
      { front: 'Four assumptions of monopolistic competition', back: '(1) Many sellers, (2) DIFFERENTIATED products, (3) free entry/exit, (4) some pricing power (downward-sloping demand for each firm).', lessonPart: 1 },
      { front: 'Long-run equilibrium of monopolistic competition', back: 'Demand curve tangent to ATC at $MR = MC$ output. $P = ATC$ (zero profit), but $P > MC$ (allocative inefficiency) and $Q < \\min ATC$ (excess capacity).', lessonPart: 2 },
      { front: 'Excess capacity in monopolistic competition', back: 'Firms produce LESS than the output that minimizes ATC. They could produce more cheaply per unit but don\'t, because demand at lower prices is too small. The cost society pays for variety.', lessonPart: 2 },
      { front: 'Defining feature of oligopoly', back: 'Strategic interdependence: a few large firms whose actions directly affect each other. Game theory is the standard analytical tool.', lessonPart: 3 },
      { front: 'Dominant strategy', back: 'A strategy that gives a firm the highest payoff no matter what rivals do. Not all games have one.', lessonPart: 4 },
      { front: 'Nash equilibrium', back: 'A combination of strategies in which no firm can improve its payoff by unilaterally changing its own strategy.', lessonPart: 4 },
      { front: 'Prisoners\' dilemma in oligopoly', back: 'Each firm has a dominant strategy to "cheat" (cut price / expand output). The Nash equilibrium leaves BOTH worse off than cooperative collusion would.', lessonPart: 4 },
      { front: 'Why are cartels unstable?', back: 'Each member can boost its own profit by cheating on the agreed quota or price. Without enforcement, cheating spreads and the cartel collapses.', lessonPart: 5 },
      { front: 'Kinked demand curve', back: 'Models price rigidity in oligopoly: demand is more elastic for price increases (rivals don\'t follow) than decreases (rivals match), creating a "kink" at the current price and a discontinuity in MR.', lessonPart: 5 },
      { front: 'Examples of US oligopolies', back: 'Airlines, soft drinks (Coke/Pepsi), wireless carriers, automobile manufacturers, breakfast cereals.', lessonPart: 3 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-labor-markets': {
    textContent: `## Labor Markets and Factor Markets

Factor markets — for labor, capital, and land — determine the prices of inputs ($w$ for wages, $r$ for rent, etc.) and the quantities employed. The same demand-and-supply logic applies, but with one key twist: the demand for an input is a **derived demand** — derived from the demand for the goods that input produces.

### The Marginal Revenue Product (MRP)

A profit-maximizing firm hires another worker only if the worker adds AT LEAST as much to revenue as to cost. The extra revenue is the **marginal revenue product of labor**:

$$MRP_L = MP_L \\times MR.$$

For a perfectly competitive output market, $MR = P$, so $MRP_L = MP_L \\times P$. For a monopolist seller, $MR < P$ ⇒ MRP is lower than for a perfect competitor with the same physical productivity.

### The Hiring Rule

Hire labor up to the point where $MRP_L$ equals the **marginal resource cost** of labor, which equals the wage in a perfectly competitive labor market:

$$MRP_L = w.$$

This means the firm's individual labor demand curve **IS** its $MRP_L$ curve. Market labor demand sums these across firms.

### Shifters of Labor Demand

- A change in the price of the output (output price up ⇒ MRP up ⇒ labor demand right).
- A change in productivity (better technology ⇒ MP up ⇒ MRP up ⇒ labor demand right).
- A change in the price of related inputs (substitutes vs complements in production).

### Labor Supply

Most labor supply curves slope upward — higher wages attract more workers (and more hours). At very high wages a backward-bending supply can occur (income effect dominates substitution effect).

Shifters of labor supply: changes in population, immigration, preferences for leisure vs work, opportunities in alternative jobs.

### Equilibrium and Imperfections

In a competitive labor market, $w^* $ and $L^*$ are set where $MRP_L = $ supply. Two important imperfections:
- **Minimum wage** above $w^*$: causes unemployment (labor surplus).
- **Monopsony**: a single buyer of labor (e.g., the only large employer in town). Hires LESS labor at LOWER wages than competition, because the firm faces an upward-sloping labor supply curve and so $MRC_L > w$. Both wage and quantity are inefficiently low.

### Income Distribution

Each worker's wage in a competitive market reflects their MRP — productivity and the value of what they produce. Differences in wages across occupations reflect differences in productivity, education, risk, and demand for the output.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `A perfectly competitive firm sells widgets at \\$5 each. The marginal product of the third worker is 8 widgets per day. Compute that worker's $MRP_L$. If the daily wage is \\$30, should the firm hire the third worker?`,
        solution: `$MRP_L = MP_L \\times P = 8 \\times \\$5 = \\boxed{\\$40}$ per day.

Compare to wage: $MRP_L = \\$40 > w = \\$30$ ⇒ **hire the third worker** (adds \\$10 to profit).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Why is the demand for labor called a "derived" demand?`,
        solution: `Firms don\'t hire workers for their own sake — they hire them to produce goods that consumers will buy. Demand for labor therefore DERIVES from (depends on) the demand for the output the labor produces. If demand for the output rises, output price rises, MRP rises, and labor demand shifts right.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `A coffee shop's hiring schedule:

| Workers | Total cups/hr | Cup price | $MP_L$ | $MRP_L$ |
|:-------:|:-------------:|:---------:|:------:|:-------:|
| 1       | 20            | \\$3      | —      | —       |
| 2       | 36            | \\$3      |        |         |
| 3       | 48            | \\$3      |        |         |
| 4       | 56            | \\$3      |        |         |
| 5       | 60            | \\$3      |        |         |

Fill in $MP_L$ and $MRP_L$. If the wage is \\$30/hr, how many workers should the shop hire?`,
        solution: `| Workers | $MP_L$ | $MRP_L$ ($MP \\times \\$3$) |
|:-------:|:------:|:--------:|
| 2       | 16     | \\$48    |
| 3       | 12     | \\$36    |
| 4       | 8      | \\$24    |
| 5       | 4      | \\$12    |

Hire while $MRP_L \\ge w = \\$30$. Worker 3 adds \\$36 (yes); worker 4 adds \\$24 (no). **Hire 3 workers.**` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `In a small town, the only large employer is a meat-packing plant — a monopsonist in the labor market. Compared to a perfectly competitive labor market with the same labor supply curve and the same MRP curve, predict the differences in (a) the wage paid, (b) the quantity of labor hired, and (c) economic efficiency.`,
        solution: `(a) The monopsonist faces an UPWARD-SLOPING labor supply, so hiring one more worker requires raising wages for all workers. Marginal resource cost ($MRC_L$) lies ABOVE the supply curve. The firm hires where $MRC_L = MRP_L$, then pays the wage on the supply curve at that quantity. **Wage is LOWER** than the competitive wage.

(b) **Quantity of labor hired is LOWER** than competitive level. Both effects flow from $MRC_L > w$.

(c) **Inefficient.** At the monopsony quantity, $MRP_L > w$, meaning workers value the wage less than the firm values their output — there are mutually beneficial hires the firm refuses to make. Deadweight loss is positive.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Two professions have similar education requirements and similar working hours, but profession A pays double profession B in equilibrium. List THREE possible MRP-based explanations and ONE supply-based explanation. State, for each, whether you would expect the wage gap to persist in the long run if the explanation is the dominant one.`,
        solution: `**MRP-based (demand-side) explanations:**
1. **Output of A is more valuable.** Higher product price ⇒ higher MRP. Persistent only if the price difference persists (e.g., A serves a high-WTP market like specialty surgery).
2. **A workers have higher physical productivity.** Better technology, scarce skill, or stronger network effects. Persistent if the productivity advantage is hard to replicate.
3. **A is a complement to expensive capital** (e.g., piloting commercial jets). MRP is high because the capital makes each labor hour more valuable. Persistent as long as the capital structure stays.

**Supply-based explanation:**
4. **Restricted supply into A** — long training, licensing barriers, talent constraint, or large compensating differential (risk, unpleasantness). Persistent only if entry barriers persist; if they erode (deregulation, more graduates), the gap shrinks.

In the long run, gaps explained by replicable productivity or removable barriers tend to compress, while gaps grounded in genuine output-market valuation differences persist.` },
    ],
    cards: [
      { front: 'Derived demand (for an input)', back: 'Demand for an input depends on demand for the OUTPUT it produces. Hence labor demand shifts when output price or output demand changes.', lessonPart: 1 },
      { front: 'Marginal Revenue Product of labor', back: '$MRP_L = MP_L \\times MR$. For a competitive output seller, $MR = P$, so $MRP_L = MP_L \\times P$.', lessonPart: 2 },
      { front: 'Profit-maximizing hiring rule (competitive labor market)', back: 'Hire labor until $MRP_L = w$. The firm\'s labor demand curve IS its downward-sloping $MRP_L$ curve.', lessonPart: 2 },
      { front: 'Why does $MRP_L$ slope downward?', back: 'Because of the law of diminishing marginal returns: $MP_L$ falls as more workers share fixed capital. Multiplying a falling $MP_L$ by a constant $P$ gives a falling MRP.', lessonPart: 2 },
      { front: 'Three shifters of LABOR DEMAND', back: '(1) Change in output price, (2) change in worker productivity, (3) change in price of related inputs (substitutes/complements in production).', lessonPart: 3 },
      { front: 'Three shifters of LABOR SUPPLY', back: '(1) Population/immigration, (2) preferences for leisure vs work, (3) opportunities in alternative occupations.', lessonPart: 3 },
      { front: 'Effect of a binding minimum wage in a competitive labor market', back: 'Creates a labor surplus = unemployment. $Q_d$ falls (firms hire fewer workers); $Q_s$ rises (more people want to work).', lessonPart: 4 },
      { front: 'Monopsony — definition', back: 'A market with a single buyer of an input (often labor). Faces an upward-sloping supply curve, so $MRC_L > w$.', lessonPart: 5 },
      { front: 'Monopsony outcome vs competition', back: 'Lower wage AND lower quantity of labor hired. Allocatively inefficient: at the monopsony hire level, $MRP_L > w$.', lessonPart: 5 },
      { front: 'Why a binding minimum wage in a MONOPSONY can RAISE both employment and wages', back: 'It flattens the firm\'s effective MRC at the legal wage up to the supply curve. The firm now hires where $MRP_L$ equals that flat MRC ⇒ both $w$ and $L$ can rise toward the competitive outcome.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'micro-externalities-public-goods': {
    textContent: `## Externalities, Public Goods, and Market Failure

Markets allocate resources efficiently under tight assumptions: many buyers and sellers, well-defined property rights, no spillovers, and goods that everyone can be excluded from consuming. When those assumptions fail, the market produces too much or too little of a good — a **market failure**. The two most important sources are **externalities** and **public goods**.

### Externalities

An externality is a cost or benefit imposed on a third party who is not part of the transaction. Markets ignore these effects, so equilibrium quantity differs from the socially optimal quantity.

**Negative externality** (e.g., pollution): producer faces only its **marginal private cost (MPC)**, not the full **marginal social cost (MSC = MPC + external cost)**. Free-market output $Q_M$ is HIGHER than the socially optimal $Q_S$. Result: deadweight loss equal to the triangle between MSC and demand from $Q_S$ to $Q_M$.

**Positive externality** (e.g., vaccination, education): consumer\'s **marginal private benefit (MPB)** falls short of full **marginal social benefit (MSB)**. Free-market output is LOWER than socially optimal. Deadweight loss equals the triangle between supply and MSB.

### Internalizing Externalities

Government tools to fix externalities:
- **Pigouvian tax** = external cost per unit. Shifts MPC up to MSC. New equilibrium = social optimum.
- **Pigouvian subsidy** = external benefit per unit. Shifts MPB up to MSB. New equilibrium = social optimum.
- **Tradable permits / cap-and-trade**: government caps total emissions and lets firms trade rights, achieving the cap at lowest total cost.
- **Coase theorem**: with well-defined property rights and zero transaction costs, private parties can negotiate to the efficient outcome. In practice, transaction costs often block this.
- **Direct regulation** (command-and-control) — typically less cost-effective than price-based instruments.

### Public Goods

A pure **public good** is:
- **Non-excludable**: cannot prevent someone who hasn\'t paid from consuming.
- **Non-rival**: one person\'s consumption doesn\'t reduce another\'s.

Examples: national defense, basic research, lighthouses, fireworks. Because consumers cannot be excluded, each has an incentive to **free-ride** — wait for others to pay and then enjoy the benefit. The market under-provides public goods, so government typically funds them through taxes.

The **socially optimal quantity** of a public good is where vertical sum of MBs (because everyone consumes the same unit simultaneously) equals MC.

### Common-Pool Resources

Non-excludable but rival (fisheries, public grazing land, freeway lanes). Subject to the **Tragedy of the Commons** — overuse by individuals each pursuing self-interest. Solutions: privatization, regulation, quotas, user fees.

### Why It Matters

Almost every government policy debated today — climate change, healthcare, education — turns on externality and public-goods analysis.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `A factory produces steel and emits pollution that imposes \\$3 of external cost per ton on neighboring farms. Without intervention, the market produces 1,000 tons. (a) Is this a positive or negative externality? (b) Is the market quantity above or below the social optimum? (c) State the size of the per-unit Pigouvian tax that would internalize the externality.`,
        solution: `(a) **Negative** externality (pollution imposes cost on a third party).

(b) Market quantity is **ABOVE** the socially optimal quantity, because producers ignore the \\$3 external cost and over-produce.

(c) Pigouvian tax = exactly the per-unit external cost = **\\$3 per ton**. This raises MPC to MSC, making each producer face the true social cost.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Vaccinating against a contagious disease creates a positive externality of \\$50 per vaccination (lower spread reduces others\' risk). The free market produces 1 million vaccinations; the social optimum is 1.4 million. (a) What size per-unit subsidy would push the market to the social optimum? (b) Who pays the subsidy and who receives it?`,
        solution: `(a) A Pigouvian subsidy equal to the per-unit external benefit = **\\$50 per vaccination** would shift MPB up to MSB, equating private and social marginal benefit.

(b) **The government pays** the subsidy out of tax revenue; the subsidy is typically given to consumers (lower price at point of purchase) or producers (per-shot reimbursement). The economic incidence is shared between the two depending on demand and supply elasticities.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Distinguish a **public good** from a **common-pool resource**, naming the two key properties (excludability and rivalry) and giving one example of each.`,
        solution: `Both are NON-EXCLUDABLE — you cannot prevent unpaying users from consuming. The difference is rivalry.

**Public good:** non-excludable AND **non-rival** — one person\'s consumption doesn\'t reduce another\'s. Example: national defense, basic scientific research, fireworks display.

**Common-pool resource:** non-excludable but **rival** — one person\'s use REDUCES what is available to others. Example: an ocean fishery, an open grazing pasture, congested freeway lanes. Subject to the Tragedy of the Commons (overuse).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Demand for a positive-externality good is $P = 100 - Q$. Private supply is $P = 20 + Q$. Each unit produces an external benefit of \\$10. (a) Find the free-market equilibrium $Q$. (b) Find the socially optimal $Q$. (c) Compute the deadweight loss of the market outcome.`,
        solution: `(a) Free market: $Q_M$ where MPB = supply: $100 - Q = 20 + Q \\Rightarrow Q_M = 40$.

(b) Social optimum: $MSB = $ supply, where $MSB = MPB + 10 = 110 - Q$. Set $110 - Q = 20 + Q \\Rightarrow Q_S = 45$.

(c) DWL is the triangle between MSB and supply, from $Q_M$ to $Q_S$:
- Base = $45 - 40 = 5$.
- Height = vertical distance between MSB and supply at $Q_M = 40$ = $(110 - 40) - (20 + 40) = 70 - 60 = 10$.

$DWL = \\tfrac{1}{2}(5)(10) = \\boxed{\\$25}$.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare a Pigouvian tax with a cap-and-trade system as ways to address pollution. Under what circumstances would you prefer one over the other? Address (a) certainty over emission levels, (b) certainty over price/cost, and (c) administrative simplicity.`,
        solution: `Both achieve the efficient outcome IN PRINCIPLE, but they differ in what is fixed and what adjusts.

(a) **Certainty over emissions:** Cap-and-trade FIXES the total quantity of emissions (the cap). Tax fixes the per-unit price; total emissions adjust based on firms\' responses. If we have a strict environmental target (e.g., a planetary CO₂ budget), cap-and-trade gives more certainty.

(b) **Certainty over cost:** Tax fixes the per-unit cost of polluting at a known level — firms know their costs, planning is easier. Permit price under cap-and-trade can spike or crash with economic conditions, creating cost uncertainty.

(c) **Administrative simplicity:** A tax is simpler to administer (per-unit charge) and avoids the complications of permit allocation, monitoring trades, and enforcement. Cap-and-trade requires building a working permit market, monitoring trades, and policing emissions levels per firm.

**Preference:**
- Tax preferred when we care more about cost certainty and the marginal-damage curve is FLAT (small uncertainty in environmental harm).
- Cap-and-trade preferred when we care more about emissions certainty and marginal damage rises STEEPLY (e.g., near a tipping point).` },
    ],
    cards: [
      { front: 'Externality — definition', back: 'A cost or benefit imposed on a third party not involved in the transaction. Causes the market quantity to differ from the social optimum.', lessonPart: 1 },
      { front: 'Negative externality on a graph', back: 'MSC lies ABOVE MPC by the external cost. Market $Q$ is too high; DWL = triangle between MSC and demand from $Q_S$ to $Q_M$.', lessonPart: 1 },
      { front: 'Positive externality on a graph', back: 'MSB lies ABOVE MPB by the external benefit. Market $Q$ is too low; DWL = triangle between MSB and supply from $Q_M$ to $Q_S$.', lessonPart: 1 },
      { front: 'Pigouvian tax — size and effect', back: 'Tax = per-unit external COST. Shifts the supply curve UP by the tax, equating MPC + tax = MSC, restoring the social optimum.', lessonPart: 2 },
      { front: 'Pigouvian subsidy — size and effect', back: 'Subsidy = per-unit external BENEFIT. Effectively shifts MPB up to MSB; raises market $Q$ to the social optimum.', lessonPart: 2 },
      { front: 'Coase theorem', back: 'When property rights are well-defined and transaction costs are zero, private parties can bargain to the efficient outcome regardless of who initially holds the right.', lessonPart: 3 },
      { front: 'Two properties of a PURE public good', back: '(1) Non-excludable — can\'t keep non-payers from consuming. (2) Non-rival — one person\'s consumption doesn\'t reduce others\'.', lessonPart: 4 },
      { front: 'Free-rider problem', back: 'When a good is non-excludable, each person has an incentive to wait for others to pay. The market under-provides the good, so government usually funds it.', lessonPart: 4 },
      { front: 'How to find the optimal quantity of a public good', back: 'VERTICALLY sum each person\'s marginal benefit (because everyone consumes the same unit simultaneously) and set that sum equal to MC.', lessonPart: 4 },
      { front: 'Tragedy of the Commons', back: 'Common-pool resources (non-excludable, RIVAL) are overused because each user faces the full benefit but only a fraction of the cost. Solutions: regulation, quotas, privatization, user fees.', lessonPart: 5 },
    ],
  },
}

async function main() {
  console.log('=== AP Microeconomics content fill ===\n')
  let topicsHandled = 0
  let totalProblems = 0
  let totalCards = 0
  let textUpdates = 0

  for (const [slug, payload] of Object.entries(TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`✗ Topic not found: ${slug} — skipping`)
      continue
    }
    console.log(`• ${slug}`)

    // 1. textContent — only overwrite if current is thin
    const currentLen = (topic.textContent ?? '').length
    if (currentLen < 1500) {
      await prisma.topic.update({
        where: { id: topic.id },
        data: { textContent: payload.textContent },
      })
      textUpdates++
      console.log(`    text: ${currentLen} → ${payload.textContent.length} chars`)
    } else {
      console.log(`    text: ${currentLen} chars (kept; already adequate)`)
    }

    // 2. Example problems — bump order on collisions
    const existingProblems = await prisma.exampleProblem.findMany({
      where: { topicId: topic.id },
      select: { order: true },
    })
    const usedOrders = new Set(existingProblems.map(p => p.order))
    let nextOrder = (existingProblems.length > 0 ? Math.max(...existingProblems.map(p => p.order)) : 0) + 1
    const problemRows = payload.problems.map(p => {
      const order = usedOrders.has(p.order) ? nextOrder++ : p.order
      usedOrders.add(order)
      return {
        topicId: topic.id,
        order,
        difficulty: p.difficulty,
        question: p.question,
        solution: p.solution,
      }
    })
    if (problemRows.length > 0) {
      const result = await prisma.exampleProblem.createMany({ data: problemRows })
      totalProblems += result.count
      console.log(`    + ${result.count} problems`)
    }

    // 3. Flashcards — skip duplicate fronts
    const existingFronts = new Set(
      (await prisma.flashcard.findMany({ where: { topicId: topic.id }, select: { front: true } }))
        .map(c => c.front)
    )
    const newCards = payload.cards
      .filter(c => !existingFronts.has(c.front))
      .map(c => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
        lessonPart: c.lessonPart ?? null,
      }))
    if (newCards.length > 0) {
      const result = await prisma.flashcard.createMany({ data: newCards })
      totalCards += result.count
      console.log(`    + ${result.count} flashcards`)
    }

    topicsHandled++
  }

  console.log(`\n=== Done. ${topicsHandled} topics. Text updates: ${textUpdates}. Problems: ${totalProblems}. Flashcards: ${totalCards}. ===`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
