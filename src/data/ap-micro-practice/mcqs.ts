import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Microeconomics — 60 stimulus-based MCQs.
 * Distribution mirrors official CB exam weighting:
 *   Unit 1 — Basic Economic Concepts                (8)
 *   Unit 2 — Supply & Demand                        (14)
 *   Unit 3 — Production, Cost & Perfect Competition (14)
 *   Unit 4 — Imperfect Competition                  (11)
 *   Unit 5 — Factor Markets                         (7)
 *   Unit 6 — Market Failure & Role of Government    (6)
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — BASIC CONCEPTS (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Scarcity in economics refers to the fact that:',
    options: [
      'Some goods are sold in limited editions for marketing purposes.',
      'Human wants are unlimited but resources to satisfy them are limited.',
      'Most countries do not have access to imported goods.',
      'Only governments can allocate goods efficiently.',
    ],
    correctAnswer: 1,
    explanation:
      'Scarcity is the foundational economic problem: unlimited wants meet limited (scarce) productive resources, forcing trade-offs.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Sara has 4 hours after school. She can either: (a) work at her job earning $15/hour, or (b) study for an exam.',
    question: 'The opportunity cost of studying for the entire 4 hours is:',
    options: [
      '$0',
      '$15',
      '$60',
      'The grade she would have received if she had not studied.',
    ],
    correctAnswer: 2,
    explanation:
      'Opportunity cost = value of next best alternative forgone = 4 hours × $15/hr = $60 in forgone wages.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Country X and Country Y can each produce wheat or steel. In one labor-day:\n  Country X: 80 wheat OR 40 steel\n  Country Y: 60 wheat OR 20 steel',
    question: 'Which country has an absolute advantage in producing steel, and which has a comparative advantage?',
    options: [
      'X has the absolute advantage in both; Y has the comparative advantage in steel.',
      'X has the absolute advantage in both; X has the comparative advantage in steel.',
      'Y has the absolute advantage in steel; Y has the comparative advantage in steel.',
      'Neither country has an absolute advantage in steel.',
    ],
    correctAnswer: 1,
    explanation:
      'X produces more of both (absolute advantage in both). Opportunity cost of 1 steel: X = 80/40 = 2 wheat; Y = 60/20 = 3 wheat. X gives up less wheat per steel → X also has the comparative advantage in steel.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following best illustrates the concept of marginal analysis?',
    options: [
      'A firm\'s decision to set its average revenue equal to average cost.',
      'A consumer\'s decision to buy one more cup of coffee because the additional satisfaction exceeds the additional cost.',
      'A government\'s decision to ban a certain product entirely.',
      'A worker\'s decision to retire after 40 years of service.',
    ],
    correctAnswer: 1,
    explanation:
      'Marginal analysis compares the additional benefit (marginal benefit) of one more unit to its additional cost (marginal cost) — the consumer-coffee example is textbook MB > MC reasoning.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'A point INSIDE a country\'s production possibilities curve indicates that the economy is:',
    options: [
      'Producing more efficiently than possible.',
      'At full employment with no unused resources.',
      'Producing inefficiently or with unemployed resources.',
      'Producing combinations that are unattainable.',
    ],
    correctAnswer: 2,
    explanation:
      'Points inside the PPC indicate inefficient or underutilized resources. On the curve = efficient/full employment; outside = unattainable.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following is the BEST example of a normative economic statement?',
    options: [
      'Cigarettes are taxed at $2 per pack in this state.',
      'A 10% increase in the price of cigarettes reduces quantity demanded by 4%.',
      'Cigarettes should be banned entirely to improve public health.',
      'Smoking rates have declined since the 1960s in the United States.',
    ],
    correctAnswer: 2,
    explanation:
      'Normative statements involve value judgments ("should"). The other three are positive (descriptive/factual) statements.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'In a market economy, the central economic questions of "what, how, and for whom" are answered primarily through:',
    options: [
      'Government central planning.',
      'The interaction of supply, demand, and prices in markets.',
      'Voting in democratic elections.',
      'International trade agreements.',
    ],
    correctAnswer: 1,
    explanation:
      'In a market economy, the price mechanism — driven by consumer demand and producer profit motives — coordinates the "what, how, and for whom" decisions.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'A bowed-OUT (concave) production possibilities curve typically reflects:',
    question: 'Which of the following economic concepts best explains the shape of a bowed-out PPC?',
    options: [
      'Constant opportunity cost across all combinations.',
      'Increasing opportunity cost as more of one good is produced.',
      'Decreasing returns to scale in long-run production.',
      'A monopoly\'s control of multiple industries.',
    ],
    correctAnswer: 1,
    explanation:
      'A bowed-out PPC reflects INCREASING opportunity cost: as a country specializes in one good, it must give up increasing amounts of the other because resources are not equally well-suited to both uses.',
  },

  /* ============================ UNIT 2 — SUPPLY & DEMAND (14) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Which of the following would shift the demand curve for coffee to the LEFT?',
    options: [
      'A decrease in the price of coffee.',
      'An increase in the price of tea (a substitute).',
      'A widely publicized health study suggesting coffee causes harm.',
      'A decrease in the price of sugar (a complement).',
    ],
    correctAnswer: 2,
    explanation:
      'A negative change in tastes/preferences shifts demand LEFT. Price changes move ALONG the curve. Higher tea prices shift coffee demand RIGHT; cheaper sugar shifts coffee demand RIGHT.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'If two goods are SUBSTITUTES, an increase in the price of Good A will most likely cause:',
    options: [
      'The demand curve for Good B to shift right.',
      'The demand curve for Good B to shift left.',
      'A movement along the demand curve for Good B.',
      'No change in the market for Good B.',
    ],
    correctAnswer: 0,
    explanation:
      'Substitutes: when A becomes more expensive, consumers shift toward B → DEMAND for B shifts RIGHT.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'When the price of gasoline increases by 20%, the quantity of gasoline demanded decreases by 4%.',
    question: 'The price elasticity of demand for gasoline in this case is approximately:',
    options: [
      '0.20 (inelastic)',
      '5.00 (elastic)',
      '1.00 (unit elastic)',
      '0.04 (perfectly inelastic)',
    ],
    correctAnswer: 0,
    explanation:
      '|E_d| = |%ΔQd / %ΔP| = |−4% / 20%| = 0.20 → inelastic (less than 1).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Demand is most likely to be PRICE INELASTIC when:',
    options: [
      'The good is a luxury with many close substitutes.',
      'The good is a necessity with few close substitutes.',
      'Buyers spend a large share of income on the good.',
      'A long time period is allowed for adjustment.',
    ],
    correctAnswer: 1,
    explanation:
      'Demand is more inelastic when the good is a necessity, has few substitutes, takes a small share of income, and the time horizon is short.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question:
      'A binding price CEILING on a competitive market will most likely cause:',
    options: [
      'A surplus of the good.',
      'A shortage of the good.',
      'The market to clear at the equilibrium price.',
      'An increase in producer surplus only.',
    ],
    correctAnswer: 1,
    explanation:
      'A binding ceiling is set BELOW equilibrium, so quantity demanded exceeds quantity supplied → shortage (e.g., classic rent control diagram).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question:
      'A binding price FLOOR (such as a minimum wage above equilibrium) on a competitive labor market will most likely cause:',
    options: [
      'A surplus of labor (unemployment).',
      'A shortage of labor.',
      'No effect on equilibrium employment.',
      'An immediate increase in the demand for labor.',
    ],
    correctAnswer: 0,
    explanation:
      'A binding floor is set ABOVE equilibrium. In a labor market, more workers want to work at the higher wage than employers want to hire → surplus of labor (unemployment).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'Diagram (described): A competitive market for sugar shows demand and supply intersecting at P* = $2/lb and Q* = 100. The government imposes an excise tax of $0.50/lb on sellers.',
    question:
      'Which of the following best describes the effects of the tax?',
    options: [
      'The supply curve shifts left, prices rise to consumers, quantity sold falls, and a deadweight loss is created.',
      'The demand curve shifts right and quantity sold rises.',
      'There is no deadweight loss because the tax is collected from sellers.',
      'Both consumer and producer surplus increase.',
    ],
    correctAnswer: 0,
    explanation:
      'An excise tax on sellers shifts the supply curve UP (left) by the tax amount, raising the price consumers pay, lowering the price sellers receive, reducing equilibrium quantity, and creating deadweight loss.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Which of the following will shift the SUPPLY curve for laptops to the RIGHT?',
    options: [
      'An increase in the price of laptops.',
      'A new technology that lowers laptop production costs.',
      'A new excise tax on laptop production.',
      'An increase in consumer income.',
    ],
    correctAnswer: 1,
    explanation:
      'Improved technology lowers production costs → supply shifts RIGHT. Higher prices move ALONG the curve; taxes shift supply LEFT; income changes affect demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'In the market for an inferior good, an increase in consumer income will most likely:',
    options: [
      'Shift the demand curve to the right.',
      'Shift the demand curve to the left.',
      'Shift the supply curve to the right.',
      'Have no effect on either supply or demand.',
    ],
    correctAnswer: 1,
    explanation:
      'For inferior goods (e.g., bus rides, generic store-brand cereal), demand DECREASES as income rises — the demand curve shifts LEFT.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'For a particular good, a 10% increase in the price of a related good causes the quantity demanded of the original good to decrease by 5%.',
    question: 'The cross-price elasticity of demand between the two goods is:',
    options: [
      '+0.50, suggesting the goods are substitutes.',
      '−0.50, suggesting the goods are complements.',
      '+2.00, suggesting the goods are substitutes.',
      '−2.00, suggesting the goods are complements.',
    ],
    correctAnswer: 1,
    explanation:
      'Cross-price elasticity = %ΔQd_A / %ΔP_B = −5% / 10% = −0.50. NEGATIVE cross-price elasticity → goods are complements.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Producer surplus in a competitive market is best defined as:',
    options: [
      'The quantity of goods sold above the equilibrium quantity.',
      'The difference between the price producers receive and the minimum price they would have accepted.',
      'The total revenue earned by producers in the market.',
      'The deadweight loss created by a tax.',
    ],
    correctAnswer: 1,
    explanation:
      'Producer surplus = price received − reservation price (the area above the supply curve and below the price line).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Total welfare (consumer surplus + producer surplus) in a competitive market is MAXIMIZED at:',
    options: [
      'Any quantity above the competitive equilibrium.',
      'The competitive equilibrium quantity, where MB = MC.',
      'A quantity set by a binding price ceiling.',
      'A quantity set by a per-unit tax on sellers.',
    ],
    correctAnswer: 1,
    explanation:
      'At competitive equilibrium, marginal benefit (demand) = marginal cost (supply), maximizing total surplus and producing allocative efficiency.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'When the price of a good rises from $10 to $12, the quantity supplied increases from 100 to 120.',
    question: 'Using the midpoint method, the price elasticity of supply is approximately:',
    options: [
      '0.18',
      '1.00',
      '2.20',
      '5.50',
    ],
    correctAnswer: 1,
    explanation:
      'Midpoint method: %ΔQ = (120−100) / ((100+120)/2) = 20/110 ≈ 18.2%. %ΔP = 2 / ((10+12)/2) = 2/11 ≈ 18.2%. Elasticity = 18.2% / 18.2% ≈ 1.00 (unit elastic).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question:
      'If demand for a good is PERFECTLY INELASTIC, an increase in supply will most likely:',
    options: [
      'Lower the equilibrium price and increase the equilibrium quantity.',
      'Lower the equilibrium price with NO change in equilibrium quantity.',
      'Raise the equilibrium price with no change in quantity.',
      'Have no effect on price or quantity.',
    ],
    correctAnswer: 1,
    explanation:
      'Perfectly inelastic demand is a vertical demand curve. A rightward shift in supply slides DOWN that vertical demand: price falls, quantity unchanged.',
  },

  /* ============================ UNIT 3 — PRODUCTION / COST / PERFECT COMP (14) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The "law of diminishing marginal returns" states that, holding at least one input fixed, eventually:',
    options: [
      'Total product begins to decrease as inputs are added.',
      'Marginal product begins to decrease as additional units of the variable input are added.',
      'Marginal cost falls and average cost rises.',
      'Average product equals marginal product at all output levels.',
    ],
    correctAnswer: 1,
    explanation:
      'The law of diminishing marginal returns: with at least one fixed input, the MARGINAL product of additional variable input eventually declines (though total product may still rise).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A firm produces 100 units at total cost = $1,000. Fixed cost = $200.',
    question: 'Average variable cost equals:',
    options: [
      '$2',
      '$8',
      '$10',
      '$12',
    ],
    correctAnswer: 1,
    explanation:
      'Variable cost = TC − FC = 1,000 − 200 = $800. AVC = VC / Q = 800 / 100 = $8.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In the long run, all of the following are true of a firm in PERFECT competition EXCEPT:',
    options: [
      'P = MR = MC at the profit-maximizing output.',
      'P = minimum ATC, so economic profit is zero.',
      'The firm produces where it earns substantial economic profit.',
      'Firms are free to enter and exit the industry.',
    ],
    correctAnswer: 2,
    explanation:
      'In LR competitive equilibrium, free entry/exit drives economic profit to ZERO; firms produce at minimum ATC where P = MC = ATC.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question:
      'A perfectly competitive firm should SHUT DOWN in the short run if:',
    options: [
      'Price is below average total cost (ATC).',
      'Price is below average variable cost (AVC).',
      'Marginal revenue is positive.',
      'Marginal cost is greater than zero.',
    ],
    correctAnswer: 1,
    explanation:
      'Shutdown rule: shut down if P < AVC (cannot even cover variable costs). If AVC ≤ P < ATC, the firm operates at a loss but covers variable costs and partially fixed costs.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A perfectly competitive firm faces a market price of $20. At its current output of 50 units, ATC = $18, AVC = $14, MC = $20, and MR = $20.',
    question:
      'In the SHORT run, this firm is most likely:',
    options: [
      'Earning a positive economic profit and should expand output.',
      'Earning a positive economic profit and should produce 50 units.',
      'Incurring an economic loss and should shut down.',
      'Earning zero economic profit at the break-even price.',
    ],
    correctAnswer: 1,
    explanation:
      'P = MR = MC = 20 at Q = 50, so the firm is profit-maximizing. Profit per unit = P − ATC = 20 − 18 = $2; total profit = 2 × 50 = $100.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In the SHORT run, the marginal cost (MC) curve typically:',
    options: [
      'Is a horizontal line equal to the wage rate.',
      'Slopes upward as a result of diminishing marginal returns.',
      'Slopes downward at all output levels.',
      'Is identical to the firm\'s average revenue curve.',
    ],
    correctAnswer: 1,
    explanation:
      'Eventually MC rises because of diminishing marginal returns to the variable input, producing the upward-sloping MC curve that intersects ATC and AVC at their minima.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question:
      'A perfectly competitive firm\'s SUPPLY curve in the short run is:',
    options: [
      'The portion of its MC curve above the minimum of AVC.',
      'The portion of its MC curve below the minimum of ATC.',
      'A horizontal line at the market price.',
      'The portion of its ATC curve above the minimum of AVC.',
    ],
    correctAnswer: 0,
    explanation:
      'A competitive firm\'s SR supply curve is its MC curve above min AVC (below that, it shuts down).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'Economic profit differs from accounting profit because economic profit:',
    options: [
      'Excludes implicit (opportunity) costs.',
      'Includes implicit (opportunity) costs in addition to explicit costs.',
      'Always equals accounting profit minus taxes.',
      'Is reported on official financial statements.',
    ],
    correctAnswer: 1,
    explanation:
      'Economic profit = total revenue − explicit costs − IMPLICIT (opportunity) costs. Accounting profit subtracts only explicit costs.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question:
      'In the LONG run, all costs in a competitive industry are:',
    options: [
      'Fixed.',
      'Variable.',
      'Sunk.',
      'Average.',
    ],
    correctAnswer: 1,
    explanation:
      'In the LR, firms can vary all inputs (including capital) — so all costs are variable.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question:
      'Which of the following would shift a perfectly competitive industry\'s LONG-RUN supply curve UPWARD in an increasing-cost industry?',
    options: [
      'Entry of new firms that drives input prices higher as the industry expands.',
      'A permanent improvement in production technology.',
      'A decrease in the price of an input used in production.',
      'Exit of firms in response to losses.',
    ],
    correctAnswer: 0,
    explanation:
      'In an increasing-cost industry, expansion bids up input prices, raising the entire LR supply curve. The other options would lower it or contract supply.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A firm produces 200 units at AVC = $5 and AFC = $3.',
    question: 'The firm\'s total cost equals:',
    options: [
      '$1,000',
      '$1,200',
      '$1,400',
      '$1,600',
    ],
    correctAnswer: 3,
    explanation:
      'ATC = AVC + AFC = 5 + 3 = $8. TC = ATC × Q = 8 × 200 = $1,600.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The marginal product of labor is defined as:',
    options: [
      'Total output divided by total labor employed.',
      'The change in total output produced by adding one more unit of labor.',
      'The wage rate paid to the last worker hired.',
      'The hours worked per unit of capital.',
    ],
    correctAnswer: 1,
    explanation:
      'MP_L = ΔQ / ΔL — additional output produced by one more worker, holding other inputs fixed.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'Allocative efficiency in perfectly competitive markets occurs because firms produce where:',
    options: [
      'P = ATC at the lowest possible price.',
      'P (= MB) = MC, so the value to consumers equals the marginal cost of production.',
      'TR > TC for every firm.',
      'Firms exhaust all economies of scale.',
    ],
    correctAnswer: 1,
    explanation:
      'Allocative efficiency: P = MC. Price reflects marginal benefit; equality with MC means the right amount of the good is produced from society\'s perspective.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The downward-sloping portion of a typical long-run average cost (LRAC) curve reflects:',
    options: [
      'Diseconomies of scale.',
      'Economies of scale.',
      'Diminishing marginal returns to a fixed input.',
      'Constant returns to scale.',
    ],
    correctAnswer: 1,
    explanation:
      'LRAC declines when the firm enjoys economies of scale (specialization, bulk discounts, larger fixed-cost spreading); it rises with diseconomies; flat region = constant returns.',
  },

  /* ============================ UNIT 4 — IMPERFECT COMPETITION (11) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'A monopolist maximizes profit by producing the quantity at which:',
    options: [
      'P = MC.',
      'MR = MC, and charging the price along the demand curve at that quantity.',
      'P = ATC.',
      'MR = AR.',
    ],
    correctAnswer: 1,
    explanation:
      'A monopolist sets MR = MC, then charges the corresponding price on the demand curve (which is above MR).',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'A single-price monopolist\'s marginal revenue (MR) curve is:',
    options: [
      'The same as the demand curve.',
      'Below the demand curve and twice as steep.',
      'Above the demand curve and twice as steep.',
      'Horizontal at the market price.',
    ],
    correctAnswer: 1,
    explanation:
      'For a linear demand curve P = a − bQ, MR = a − 2bQ — same intercept, twice the slope, and lies BELOW the demand curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'Compared to a perfectly competitive market with the same demand and cost conditions, a monopoly is associated with:',
    options: [
      'Lower price and higher output.',
      'Higher price, lower output, and a deadweight loss.',
      'Higher price, higher output, and zero deadweight loss.',
      'Identical price and output, but higher consumer surplus.',
    ],
    correctAnswer: 1,
    explanation:
      'A monopoly produces less than the efficient quantity (where MR = MC < P), charges a higher price, and creates a deadweight loss equal to the lost surplus from underproduction.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    stimulus:
      'A perfectly price-discriminating monopolist charges each consumer the maximum amount they are willing to pay.',
    question: 'In this case, compared to a single-price monopoly:',
    options: [
      'Output is at the socially efficient (P = MC) quantity, consumer surplus is zero, and there is no deadweight loss.',
      'Output is lower and deadweight loss is larger.',
      'Consumer surplus is larger.',
      'Producer profit is zero.',
    ],
    correctAnswer: 0,
    explanation:
      'Perfect price discrimination produces ALL the way to where P = MC (socially efficient output). Consumer surplus is fully captured by the firm; deadweight loss = 0.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'A natural monopoly arises when:',
    options: [
      'The government grants exclusive licenses to one firm.',
      'A firm has substantial economies of scale relative to market demand, so one firm can supply the market at lower cost than several competing firms.',
      'A firm has a patent on a particular product.',
      'Consumers prefer products from a single brand.',
    ],
    correctAnswer: 1,
    explanation:
      'Natural monopoly = high fixed costs and large economies of scale (e.g., utilities), so LRAC is still falling at quantities that exceed market demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question:
      'Monopolistically competitive firms differ from perfectly competitive firms primarily because they:',
    options: [
      'Face perfectly elastic demand curves.',
      'Earn long-run economic profit.',
      'Sell DIFFERENTIATED products and have some price-setting power.',
      'Always operate at minimum efficient scale.',
    ],
    correctAnswer: 2,
    explanation:
      'Monopolistic competition combines many firms with differentiated products. Differentiation gives each firm a downward-sloping demand curve and some price-setting power. LR economic profit is zero.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question:
      'In the LONG run, a monopolistically competitive firm typically:',
    options: [
      'Earns positive economic profit because of product differentiation.',
      'Earns zero economic profit, with P = ATC but P > MC, producing at less-than-minimum ATC (excess capacity).',
      'Produces at the minimum of ATC, like perfectly competitive firms.',
      'Suffers persistent economic losses and exits the market.',
    ],
    correctAnswer: 1,
    explanation:
      'LR monopolistic competition: free entry drives economic profit to ZERO with P = ATC, but the tangency lies on the downward-sloping portion of ATC (excess capacity) and P > MC.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    stimulus:
      'Two firms (Firm 1 and Firm 2) play a one-shot pricing game. Payoffs (Firm 1, Firm 2):\n  Both High Price:    (10, 10)\n  Firm 1 Low / 2 High: (12, 5)\n  Firm 1 High / 2 Low: (5, 12)\n  Both Low Price:     (7, 7)',
    question: 'What is the dominant strategy outcome of this game?',
    options: [
      'Both firms set High Price (10, 10).',
      'Both firms set Low Price (7, 7).',
      'Firm 1 sets Low and Firm 2 sets High.',
      'There is no dominant strategy outcome.',
    ],
    correctAnswer: 1,
    explanation:
      'For Firm 1: Low gives 12 vs 10 (if 2 plays High), or 7 vs 5 (if 2 plays Low) — Low dominates. Symmetric for Firm 2. Both choosing Low (7, 7) is the dominant-strategy Nash equilibrium — a classic prisoner\'s dilemma.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'In an oligopoly, firms typically face:',
    options: [
      'A horizontal demand curve at the market price.',
      'Strategic interdependence — each firm\'s pricing and output decisions depend on rivals\' decisions.',
      'No barriers to entry.',
      'A zero-profit equilibrium in the short run.',
    ],
    correctAnswer: 1,
    explanation:
      'A defining feature of oligopoly is strategic interdependence. With only a few firms, each must consider rivals\' likely reactions — often analyzed using game theory.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question:
      'Which of the following is the BEST example of a barrier to entry that creates monopoly power?',
    options: [
      'High advertising spending by an existing firm.',
      'A government-granted patent on a new pharmaceutical drug.',
      'Slight differences in product packaging.',
      'Many firms producing similar products.',
    ],
    correctAnswer: 1,
    explanation:
      'Patents legally exclude other firms from producing the patented good — a major (legally created) barrier to entry. The other options do not actually prevent entry.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question:
      'A firm in any market structure (perfect competition, monopolistic competition, oligopoly, monopoly) will maximize profit by producing the quantity at which:',
    options: [
      'Total revenue is maximized.',
      'Marginal revenue equals marginal cost.',
      'Average cost is minimized.',
      'Price equals marginal cost.',
    ],
    correctAnswer: 1,
    explanation:
      'MR = MC is the universal profit-maximization rule in all market structures. (P = MC happens to ALSO hold for perfect competition because P = MR there.)',
  },

  /* ============================ UNIT 5 — FACTOR MARKETS (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question: 'In a competitive labor market, a firm\'s demand for labor is best described as the:',
    options: [
      'Marginal cost of labor.',
      'Marginal revenue product (MRP) of labor.',
      'Average product of labor.',
      'Average cost curve of the firm.',
    ],
    correctAnswer: 1,
    explanation:
      'Labor demand is the MRP_L curve = MP_L × P (in competitive output markets) — the additional revenue generated by one more worker.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question:
      'A profit-maximizing firm hiring labor in a competitive labor market employs workers up to the point where:',
    options: [
      'MRP_L = wage rate.',
      'MP_L is at its maximum.',
      'AP_L = wage rate.',
      'Total revenue is maximized.',
    ],
    correctAnswer: 0,
    explanation:
      'Profit-maximizing hiring rule: hire L until the marginal revenue product equals the marginal factor cost. In a competitive labor market, MFC = wage, so MRP_L = w.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question:
      'Which of the following will shift the demand for labor in the auto industry to the RIGHT?',
    options: [
      'A decrease in the price of cars.',
      'An increase in worker productivity (MP_L).',
      'A decrease in consumer demand for cars.',
      'An increase in the wage rate.',
    ],
    correctAnswer: 1,
    explanation:
      'Higher productivity raises MRP_L, shifting labor demand RIGHT. Car-price drops or demand drops shift it LEFT. Wage changes move ALONG the curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    stimulus:
      'A monopsony is the only employer of a particular type of labor in a small town.',
    question: 'Compared to a competitive labor market, a profit-maximizing monopsony will most likely:',
    options: [
      'Hire MORE workers and pay a HIGHER wage.',
      'Hire FEWER workers and pay a LOWER wage.',
      'Hire fewer workers and pay a higher wage.',
      'Hire more workers and pay a lower wage.',
    ],
    correctAnswer: 1,
    explanation:
      'A monopsony faces an upward-sloping labor supply curve, so MFC > wage. Setting MFC = MRP yields fewer hires AND a lower wage than a competitive market would.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question:
      'According to the least-cost rule, a firm using two inputs (labor and capital) MINIMIZES cost when:',
    options: [
      'MP_L = MP_K.',
      'MP_L / wage = MP_K / rental rate.',
      'MP_L × wage = MP_K × rental rate.',
      'Total spending on each input is equal.',
    ],
    correctAnswer: 1,
    explanation:
      'Least-cost rule: equate marginal product per dollar across inputs — MP_L / w = MP_K / r.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question: 'An increase in the supply of labor in a competitive market will most likely:',
    options: [
      'Raise the equilibrium wage and raise employment.',
      'Lower the equilibrium wage and raise employment.',
      'Lower the equilibrium wage and lower employment.',
      'Raise the equilibrium wage and lower employment.',
    ],
    correctAnswer: 1,
    explanation:
      'Rightward shift in S_L moves equilibrium DOWN the demand curve: lower wage, higher employment.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question:
      'A binding minimum wage in a competitive labor market causes the wage to be ABOVE equilibrium and creates:',
    options: [
      'A surplus of labor (unemployment).',
      'A shortage of labor.',
      'A new equilibrium with higher wages and higher employment.',
      'No change because labor demand is perfectly elastic.',
    ],
    correctAnswer: 0,
    explanation:
      'A binding minimum wage above equilibrium causes $Q_{L}^{S}$ > $Q_{L}^{D}$ → surplus of labor (unemployment).',
  },

  /* ============================ UNIT 6 — MARKET FAILURE & GOVT (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'A NEGATIVE externality in production (such as factory pollution) typically results in:',
    options: [
      'The market overproducing the good relative to the socially optimal quantity.',
      'The market underproducing the good.',
      'No deadweight loss.',
      'Marginal social cost equal to marginal private cost.',
    ],
    correctAnswer: 0,
    explanation:
      'Negative externalities mean MSC > MPC. The market produces where D = MPC, which is MORE than where D = MSC — overproduction with deadweight loss.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    stimulus:
      'A factory emits pollution that imposes external costs of $5 per unit produced.',
    question: 'Which of the following policies would best correct this market failure?',
    options: [
      'A per-unit subsidy of $5 to the factory.',
      'A per-unit Pigouvian tax of $5 on the factory.',
      'A binding price ceiling at the equilibrium price.',
      'A mandate that the factory close immediately.',
    ],
    correctAnswer: 1,
    explanation:
      'A Pigouvian tax equal to the marginal external cost forces the firm to internalize the externality, shifting MPC up to MSC. Output falls to the socially optimal level.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question:
      'A POSITIVE externality (such as vaccinations producing herd immunity) typically leads to:',
    options: [
      'Market overproduction.',
      'Market underproduction relative to the socially optimal quantity.',
      'No deadweight loss.',
      'Marginal social benefit equal to marginal private benefit.',
    ],
    correctAnswer: 1,
    explanation:
      'Positive externalities: MSB > MPB. Markets ignore the external benefit and underproduce, generating deadweight loss. Subsidies are the standard correction.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question:
      'A "public good" is best characterized by being:',
    options: [
      'Rival in consumption and excludable.',
      'Non-rival in consumption and non-excludable.',
      'Rival in consumption and non-excludable.',
      'Always provided by private markets at the efficient quantity.',
    ],
    correctAnswer: 1,
    explanation:
      'Public goods are non-rival (one person\'s use does not reduce another\'s) and non-excludable (cannot prevent non-payers from benefiting) — leading to free-rider underprovision in private markets.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'Which of the following statements about progressive, proportional, and regressive taxes is true?',
    options: [
      'A regressive tax takes a LARGER percentage of income from low-income taxpayers than from high-income taxpayers.',
      'A progressive tax takes the same percentage of income from all taxpayers.',
      'A proportional tax takes a larger percentage from high-income taxpayers.',
      'A sales tax on food is the textbook example of a progressive tax.',
    ],
    correctAnswer: 0,
    explanation:
      'Regressive: higher % of income from low-income taxpayers (e.g., sales tax on necessities). Progressive: higher % from high-income (e.g., U.S. federal income tax). Proportional: same % for all (flat tax).',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question:
      'The Lorenz curve and the Gini coefficient are most commonly used to measure:',
    options: [
      'Aggregate income growth.',
      'The unemployment rate.',
      'Income inequality within a country.',
      'The rate of inflation.',
    ],
    correctAnswer: 2,
    explanation:
      'The Lorenz curve plots cumulative income vs. cumulative population; the Gini coefficient summarizes the distance from perfect equality (Gini = 0 = perfect equality; Gini = 1 = max inequality).',
  },
]
