import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Microeconomics — 60 MCQs (the real exam has 60 in 70 minutes).
 * Distribution mirrors the CED unit weighting:
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
      'Some goods are produced in deliberately limited quantities so that firms can charge more.',
      'Human wants exceed the limited resources available to satisfy them.',
      'Goods become scarce only when the government holds their price below equilibrium.',
      'Countries that cannot import goods must produce everything they consume on their own.',
    ],
    correctAnswer: 1,
    explanation:
      'Scarcity is the basic economic problem: wants are unlimited but the resources to satisfy them are limited, so every choice involves a trade-off. A price held below equilibrium creates a shortage, which is a different idea; scarcity exists even in markets that clear.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Sara has 4 free hours after school. She can spend them working at a café for \\$15 per hour, babysitting for \\$12 per hour, or studying for an exam. She can do only one of the three.',
    question: 'If Sara chooses to study for all 4 hours, what is the opportunity cost of studying, measured in forgone earnings?',
    options: [
      '\\$15',
      '\\$48',
      '\\$60',
      '\\$108',
    ],
    correctAnswer: 2,
    explanation:
      'Opportunity cost is the value of the single next-best alternative given up, which is 4 hours at the café: 4 × \\$15 = \\$60. Adding the café and babysitting earnings together (\\$108) is wrong because she could only have done one of them.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Country X and Country Y can each produce wheat or steel. With one day of labor:\n  Country X: 80 wheat OR 40 steel\n  Country Y: 60 wheat OR 20 steel',
    question: 'Which country has an absolute advantage in producing steel, and which has a comparative advantage in producing steel?',
    options: [
      'X has the absolute advantage in steel; Y has the comparative advantage in steel.',
      'X has the absolute advantage in steel; X has the comparative advantage in steel.',
      'Y has the absolute advantage in steel; Y has the comparative advantage in steel.',
      'X has the absolute advantage in steel; neither has a comparative advantage in steel.',
    ],
    correctAnswer: 1,
    explanation:
      'X makes more steel per day (40 vs. 20), so it has the absolute advantage. The opportunity cost of 1 steel is 80/40 = 2 wheat for X and 60/20 = 3 wheat for Y, so X also has the comparative advantage in steel; Y has the comparative advantage in wheat, not steel.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following best illustrates marginal analysis?',
    options: [
      'A firm sets its output where its average revenue equals its average total cost.',
      'A shopper buys one more cup of coffee because its added benefit exceeds its added cost.',
      'A city bans plastic bags because their total cost exceeds their total benefit.',
      'A worker retires after 40 years because her savings have reached their target.',
    ],
    correctAnswer: 1,
    explanation:
      'Marginal analysis compares the additional benefit of one more unit with its additional cost and continues while marginal benefit exceeds marginal cost. The plastic-bag ban compares total, not marginal, costs and benefits of an all-or-nothing choice.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'A point INSIDE a country\'s production possibilities curve indicates that the economy is:',
    options: [
      'Producing beyond its capacity by using its resources more intensively than normal.',
      'At full employment, with every resource used in its most productive way.',
      'Leaving some resources unemployed or using them inefficiently.',
      'Producing a combination that is unattainable with its current technology.',
    ],
    correctAnswer: 2,
    explanation:
      'A point inside the PPC means the economy could produce more of at least one good without giving up any of the other, so resources are unemployed or misallocated. Points beyond the curve, not inside it, are unattainable with current resources and technology.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following is a normative economic statement?',
    options: [
      'Cigarettes are taxed at \\$2 per pack in this state.',
      'A 10% rise in cigarette prices cuts quantity demanded by 4%.',
      'Cigarette sales should be banned to improve public health.',
      'Smoking rates in the United States have fallen since the 1960s.',
    ],
    correctAnswer: 2,
    explanation:
      'A normative statement expresses a value judgment about what ought to be, signaled here by "should." The elasticity claim is positive even though it is a prediction, because data can confirm or refute it.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'In a market economy, the basic questions of what to produce, how to produce it, and for whom are answered primarily by:',
    options: [
      'Central planners who set output targets and assign resources to each industry.',
      'Prices that emerge from the interaction of buyers and sellers.',
      'Majority votes in elections that decide which goods the public sector supplies.',
      'Trade agreements that dictate which goods each country is permitted to export.',
    ],
    correctAnswer: 1,
    explanation:
      'In a market economy, prices formed by supply and demand signal what consumers value and what is profitable to produce, coordinating decisions without a central authority. Central planners setting output targets describe a command economy.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'A production possibilities curve that is bowed outward from the origin is best explained by which of the following?',
    options: [
      'Opportunity costs that stay constant as more of either good is produced.',
      'Resources that are not equally suited to both goods, raising opportunity cost.',
      'Diminishing returns to scale that raise long-run average cost for both of the goods.',
      'Productive inefficiency that grows as the economy moves toward either axis.',
    ],
    correctAnswer: 1,
    explanation:
      'A bowed-out PPC shows increasing opportunity cost: as the economy specializes in one good, it must shift resources that are less and less suited to that good, giving up more of the other good per unit. Constant opportunity cost produces a straight-line PPC instead.',
  },

  /* ============================ UNIT 2 — SUPPLY & DEMAND (14) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Which of the following would shift the demand curve for coffee to the LEFT?',
    options: [
      'A decrease in the price of coffee itself.',
      'An increase in the price of tea, a substitute for coffee.',
      'A widely publicized study linking coffee to heart disease.',
      'A decrease in the price of cream, a complement to coffee.',
    ],
    correctAnswer: 2,
    explanation:
      'Bad news about coffee reduces consumers\' preference for it, so demand decreases at every price. A change in coffee\'s own price causes a movement along the demand curve, and pricier tea or cheaper cream would both shift coffee demand to the right.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Goods A and B are substitutes. An increase in the price of Good A will most likely cause which of the following in the market for Good B?',
    options: [
      'The demand curve for Good B shifts to the right as buyers switch to it.',
      'The demand curve for Good B shifts to the left as buyers cut back.',
      'The demand curve for Good B is unchanged, but the quantity of B demanded rises.',
      'The supply curve of Good B shifts to the right as producers switch to making it.',
    ],
    correctAnswer: 0,
    explanation:
      'When A becomes more expensive, some buyers switch to B, so the demand for B increases at every price of B. It is not a movement along B\'s demand curve, because B\'s own price has not changed.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'When the price of gasoline increases by 20%, the quantity of gasoline demanded decreases by 4%.',
    question: 'The absolute value of the price elasticity of demand for gasoline, and the correct description of demand over this range, is:',
    options: [
      '0.20, so demand is relatively inelastic',
      '5.00, so demand is relatively elastic',
      '0.20, so demand is relatively elastic',
      '5.00, so demand is relatively inelastic',
    ],
    correctAnswer: 0,
    explanation:
      'Price elasticity of demand = %ΔQd ÷ %ΔP = 4% ÷ 20% = 0.20 in absolute value. Because 0.20 is less than 1, quantity responds proportionally less than price, so demand is relatively inelastic; 5.00 comes from dividing the wrong way.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Demand for a good is most likely to be price inelastic when:',
    options: [
      'The good is a luxury with many close substitutes available to buyers.',
      'The good is a necessity with few close substitutes.',
      'The good takes up a large share of buyers\' incomes.',
      'Buyers have several years to adjust their purchases after a change.',
    ],
    correctAnswer: 1,
    explanation:
      'Buyers cannot easily cut back on a necessity that has few substitutes, so quantity demanded responds little to price. A large budget share and a long adjustment period both make demand more elastic, not less.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'A binding price ceiling in a competitive market will most likely cause:',
    options: [
      'A surplus, because quantity supplied exceeds quantity demanded at the ceiling.',
      'A shortage, because quantity demanded exceeds quantity supplied at the ceiling.',
      'No change, because the price simply settles back at the equilibrium level.',
      'A surplus, because the ceiling raises producer surplus and encourages output.',
    ],
    correctAnswer: 1,
    explanation:
      'A binding ceiling is set below the equilibrium price, so buyers want more than sellers will offer and a shortage results. A surplus is what a binding price floor, set above equilibrium, would cause.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'The government sets a binding price floor above the equilibrium price of milk. Which of the following will most likely result?',
    options: [
      'A surplus of milk, with quantity supplied exceeding quantity demanded.',
      'A shortage of milk, with quantity demanded exceeding quantity supplied.',
      'A rightward shift in the demand for milk as buyers expect higher prices.',
      'An increase in total surplus, since farmers earn more on each unit sold.',
    ],
    correctAnswer: 0,
    explanation:
      'At a price above equilibrium, dairy farmers offer more milk than consumers want to buy, so a surplus results. Total surplus falls rather than rises, because fewer units are traded than at equilibrium and a deadweight loss appears.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'Before a tax, the competitive market for sugar is in equilibrium at a price of \\$2.00 per pound and a quantity of 100 pounds. The government then imposes a per-unit tax of \\$0.50 per pound on sellers. After the tax, buyers pay \\$2.30 per pound, sellers keep \\$1.80 per pound, and 80 pounds are sold. Both curves are linear.',
    question: 'Which of the following correctly gives the government\'s tax revenue and the deadweight loss of the tax?',
    options: [
      'Revenue of \\$40 and a deadweight loss of \\$5',
      'Revenue of \\$50 and a deadweight loss of \\$10',
      'Revenue of \\$40 and a deadweight loss of \\$10',
      'Revenue of \\$50 and a deadweight loss of \\$5',
    ],
    correctAnswer: 0,
    explanation:
      'Tax revenue is the tax times the quantity actually sold after the tax: \\$0.50 × 80 = \\$40. Deadweight loss is the triangle between the buyer and seller prices over the lost units: ½ × \\$0.50 × (100 − 80) = \\$5; forgetting the ½ gives \\$10.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Which of the following will shift the supply curve for laptops to the RIGHT?',
    options: [
      'An increase in the price of laptops, which raises the quantity supplied.',
      'A new technology that lowers the cost of making laptops.',
      'A new per-unit excise tax collected from every laptop producer.',
      'An increase in consumer income, which raises the demand for laptops.',
    ],
    correctAnswer: 1,
    explanation:
      'Cheaper production lets firms offer more laptops at every price, so supply increases. A rise in the laptop price raises quantity supplied along the existing curve rather than shifting it, and an excise tax shifts supply to the left.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'In the market for an inferior good, an increase in consumer income will most likely cause:',
    options: [
      'A leftward shift of demand, lowering price and quantity.',
      'A rightward shift of demand, raising price and quantity.',
      'A leftward shift of supply, raising price and lowering quantity.',
      'A leftward shift of both demand and supply, with quantity falling.',
    ],
    correctAnswer: 0,
    explanation:
      'For an inferior good, demand falls as income rises, so the demand curve shifts left and both equilibrium price and quantity fall. Income is a determinant of demand, not supply, so the supply curve does not move; demand would shift right only for a normal good.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'When the price of Good B rises by 10%, the quantity demanded of Good A decreases by 5%.',
    question: 'The cross-price elasticity of demand for Good A with respect to the price of Good B is:',
    options: [
      '+0.50, suggesting the goods are substitutes.',
      '−0.50, suggesting the goods are complements.',
      '+2.00, suggesting the goods are substitutes.',
      '−2.00, suggesting the goods are complements.',
    ],
    correctAnswer: 1,
    explanation:
      'Cross-price elasticity = %ΔQd of A ÷ %ΔP of B = −5% ÷ 10% = −0.50. A negative value means a higher price of B reduces purchases of A, so the goods are complements; −2.00 comes from dividing the wrong way.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Producer surplus in a competitive market is best defined as:',
    options: [
      'The difference between quantity supplied and quantity demanded at a given price.',
      'The difference between the price sellers receive and the lowest price they would accept.',
      'The total revenue sellers earn, measured as the price times the quantity sold.',
      'The difference between the highest price buyers would pay and the price they pay.',
    ],
    correctAnswer: 1,
    explanation:
      'Producer surplus is the gain to sellers from receiving a price above the minimum they would accept, shown as the area above the supply curve and below the price. The gap between willingness to pay and the price paid is consumer surplus.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'Total surplus, the sum of consumer and producer surplus, in a competitive market is MAXIMIZED:',
    options: [
      'At any quantity beyond equilibrium, since more units traded create more gains.',
      'At the equilibrium quantity, where marginal benefit equals marginal cost.',
      'At the quantity sold under a binding price ceiling, where consumers pay less.',
      'At the quantity sold after a per-unit tax, where the government also collects revenue.',
    ],
    correctAnswer: 1,
    explanation:
      'At the competitive equilibrium, the marginal benefit of the last unit (demand) equals its marginal cost (supply), so every mutually beneficial trade happens and total surplus is as large as possible. A price ceiling or a tax reduces the quantity traded and creates a deadweight loss.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    stimulus:
      'When the price of a good rises from \\$10 to \\$12, the quantity supplied increases from 100 units to 120 units.',
    question: 'Using the midpoint method, the price elasticity of supply is approximately:',
    options: [
      '0.18',
      '1.00',
      '2.20',
      '5.50',
    ],
    correctAnswer: 1,
    explanation:
      'With the midpoint method, %ΔQ = 20 ÷ 110 ≈ 18.2% and %ΔP = 2 ÷ 11 ≈ 18.2%, so elasticity ≈ 1.00 (unit elastic). The value 0.18 is only the percentage change in quantity, not the ratio of the two changes.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-supply-demand',
    question: 'If demand for a good is perfectly inelastic, an increase in supply will most likely result in:',
    options: [
      'A lower price and a larger equilibrium quantity.',
      'A lower price and an unchanged equilibrium quantity.',
      'A lower price and a smaller equilibrium quantity.',
      'A higher price and an unchanged equilibrium quantity.',
    ],
    correctAnswer: 1,
    explanation:
      'Perfectly inelastic demand is a vertical line, so buyers purchase the same quantity at any price. A rightward supply shift slides down that vertical demand curve: price falls and quantity does not change.',
  },

  /* ============================ UNIT 3 — PRODUCTION / COST / PERFECT COMP (14) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The law of diminishing marginal returns states that, with at least one input held fixed, eventually:',
    options: [
      'Total product begins to fall with each additional unit of the variable input.',
      'Marginal product falls as more of the variable input is added.',
      'Marginal cost falls while average total cost rises as output expands.',
      'Average product equals marginal product at every level of output.',
    ],
    correctAnswer: 1,
    explanation:
      'With a fixed input, each additional unit of the variable input eventually adds less output than the one before, so marginal product declines. Total product can keep rising while marginal product falls; it decreases only once marginal product turns negative.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A firm produces 100 units at a total cost of \\$1,000. Its fixed cost is \\$200.',
    question: 'The firm\'s average variable cost is:',
    options: [
      '\\$2',
      '\\$8',
      '\\$10',
      '\\$12',
    ],
    correctAnswer: 1,
    explanation:
      'Variable cost = total cost − fixed cost = \\$1,000 − \\$200 = \\$800, so AVC = \\$800 ÷ 100 = \\$8. The \\$10 figure is average total cost, which still includes the fixed cost.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In long-run equilibrium, all of the following are true of a firm in a perfectly competitive industry EXCEPT:',
    options: [
      'Each firm produces where price equals marginal revenue and marginal cost.',
      'Each firm produces at the minimum of its average total cost curve.',
      'Each firm earns a positive economic profit that persists over the long run.',
      'Firms can enter or exit the industry in response to profits or losses.',
    ],
    correctAnswer: 2,
    explanation:
      'Free entry and exit compete away any economic profit or loss, so in long-run equilibrium price equals minimum ATC and each firm earns zero economic profit. The other statements all describe that long-run equilibrium correctly.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'A perfectly competitive firm should shut down in the short run if:',
    options: [
      'Price is below average total cost at every level of output.',
      'Price is below average variable cost at every level of output.',
      'Price is below marginal cost at its current level of output.',
      'Price is between average variable and average total cost.',
    ],
    correctAnswer: 1,
    explanation:
      'If price is below minimum AVC, the firm cannot even cover its variable costs, so producing loses more than the fixed cost it would lose by shutting down. When price is between AVC and ATC, the firm loses money but should keep operating because revenue covers all variable cost and part of fixed cost.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A perfectly competitive firm faces a market price of \\$20. At its current output of 50 units, ATC = \\$18, AVC = \\$14, and MC = \\$20.',
    question: 'In the short run, this firm is:',
    options: [
      'Earning an economic profit of \\$100 and should keep producing 50 units.',
      'Earning an economic profit of \\$300 and should expand output beyond 50 units.',
      'Incurring an economic loss of \\$100 and should shut down in the short run.',
      'Earning zero economic profit, since price equals marginal cost at 50 units.',
    ],
    correctAnswer: 0,
    explanation:
      'Price equals MR = MC = \\$20 at 50 units, so 50 is the profit-maximizing output. Profit = (P − ATC) × Q = (\\$20 − \\$18) × 50 = \\$100; using AVC instead of ATC overstates profit at \\$300, and P = MC signals the best output, not zero profit.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In the short run, a firm\'s marginal cost curve typically:',
    options: [
      'Rises at first, then falls as fixed cost is spread over more units.',
      'Falls at first, then rises once diminishing returns to labor set in.',
      'Stays flat at the wage rate, since each worker earns the same wage.',
      'Falls continuously, since the firm gains experience with each unit.',
    ],
    correctAnswer: 1,
    explanation:
      'Marginal cost falls while early workers raise marginal product, then rises once diminishing marginal returns set in and each extra unit needs more of the variable input. Spreading fixed cost lowers average fixed cost, which does not affect marginal cost at all.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'A perfectly competitive firm\'s short-run supply curve is:',
    options: [
      'Its marginal cost curve above the minimum point of average variable cost.',
      'Its marginal cost curve above the minimum point of average total cost.',
      'Its marginal revenue curve, which is horizontal at the market price.',
      'Its average total cost curve above the minimum of average variable cost.',
    ],
    correctAnswer: 0,
    explanation:
      'At any price, the firm produces where P = MC, and it produces at all only if price covers AVC, so its short-run supply curve is the MC curve above minimum AVC. The cutoff at minimum ATC applies to the long run, when the firm must cover all costs to stay in the industry.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'Economic profit differs from accounting profit because economic profit:',
    options: [
      'Subtracts both implicit and explicit costs from total revenue.',
      'Subtracts only explicit costs, such as wages and rent, from total revenue.',
      'Equals accounting profit minus the taxes the firm pays to the government.',
      'Is the figure that firms report on their official financial statements.',
    ],
    correctAnswer: 0,
    explanation:
      'Economic profit subtracts both explicit costs and implicit (opportunity) costs, such as the owner\'s forgone salary. Subtracting only explicit costs gives accounting profit, so accounting profit is always at least as large as economic profit.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In the long run, all of a firm\'s costs are:',
    options: [
      'Fixed, because the firm has already committed to a plant size.',
      'Variable, since the firm can adjust every input.',
      'Sunk, because past spending on capital equipment cannot be recovered.',
      'Marginal, because only the cost of producing the last unit matters.',
    ],
    correctAnswer: 1,
    explanation:
      'The long run is defined as a period long enough for the firm to change the quantity of every input, including plant and equipment, so no cost is fixed. Fixed costs exist only in the short run, when at least one input cannot be changed.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'In an increasing-cost perfectly competitive industry, the long-run industry supply curve slopes upward because:',
    options: [
      'The entry of new firms bids up the prices of the inputs that all firms use.',
      'Each firm\'s marginal cost rises as it hires more of the variable input.',
      'Existing firms earn persistent economic profits that block new entry.',
      'Larger firms enjoy economies of scale that lower their per-unit costs.',
    ],
    correctAnswer: 0,
    explanation:
      'As the industry expands, new firms compete for the same specialized inputs, raising input prices and every firm\'s costs, so a higher price is needed to support a larger industry output. Rising marginal cost from diminishing returns explains a firm\'s short-run supply curve, not the long-run industry curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    stimulus:
      'A firm produces 200 units. At that output, its average variable cost is \\$5 and its average fixed cost is \\$3.',
    question: 'The firm\'s total cost equals:',
    options: [
      '\\$1,000',
      '\\$1,200',
      '\\$1,400',
      '\\$1,600',
    ],
    correctAnswer: 3,
    explanation:
      'ATC = AVC + AFC = \\$5 + \\$3 = \\$8, so TC = \\$8 × 200 = \\$1,600. The \\$1,000 figure is only total variable cost.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The marginal product of labor is defined as:',
    options: [
      'Total output divided by the total number of workers employed.',
      'The change in total output from hiring one more worker.',
      'The wage paid to the last worker the firm decides to hire.',
      'The extra revenue earned from hiring one more worker.',
    ],
    correctAnswer: 1,
    explanation:
      'Marginal product of labor is the additional output produced when one more worker is hired, holding other inputs constant. Output per worker is the average product, and the extra revenue from a worker is the marginal revenue product.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'Perfectly competitive markets achieve allocative efficiency in long-run equilibrium because firms produce where:',
    options: [
      'Price equals minimum average total cost, so goods are made at the lowest cost.',
      'Marginal cost equals price, so the value of the last unit equals its cost.',
      'Total revenue exceeds total cost for every firm, so the industry keeps expanding.',
      'Each firm grows until it has exhausted every available economy of scale.',
    ],
    correctAnswer: 1,
    explanation:
      'Price measures the marginal benefit of the last unit to buyers, so P = MC means the value of the last unit just equals the cost of producing it. Producing at minimum ATC is productive efficiency, which is a different condition.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-production-cost-perfect-comp',
    question: 'The downward-sloping portion of a typical long-run average total cost curve reflects:',
    options: [
      'Economies of scale, as larger output lets the firm specialize and spread costs.',
      'Diseconomies of scale, as larger output makes the firm harder to coordinate.',
      'Diminishing marginal returns, as more labor is added to a fixed plant.',
      'Constant returns to scale, as doubling all inputs exactly doubles output.',
    ],
    correctAnswer: 0,
    explanation:
      'Long-run average cost falls when expanding all inputs lets the firm specialize and use large-scale equipment, which is economies of scale. Diminishing marginal returns is a short-run idea that requires a fixed input, so it cannot explain the long-run curve.',
  },

  /* ============================ UNIT 4 — IMPERFECT COMPETITION (11) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    stimulus:
      'Diagram (described): A single-price monopolist\'s marginal revenue and marginal cost curves intersect at an output of 40 units, where MR = MC = \\$20. At 40 units, the demand curve shows a price of \\$50, and average total cost is \\$35.',
    question: 'The monopolist\'s profit-maximizing price and its economic profit are:',
    options: [
      'A price of \\$50 and a profit of \\$600',
      'A price of \\$20 and a loss of \\$600',
      'A price of \\$50 and a profit of \\$1,200',
      'A price of \\$50 and a profit of \\$2,000',
    ],
    correctAnswer: 0,
    explanation:
      'The monopolist chooses the output where MR = MC (40 units) and charges the highest price buyers will pay for it, read from the demand curve: \\$50. Profit = (P − ATC) × Q = (\\$50 − \\$35) × 40 = \\$600; subtracting MC instead of ATC wrongly gives \\$1,200, and \\$2,000 is total revenue, not profit.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'For a single-price monopolist facing a linear demand curve, the marginal revenue curve is:',
    options: [
      'Identical to the demand curve, since each unit sells at the same price.',
      'Below the demand curve, with the same vertical intercept and twice the slope.',
      'Above the demand curve, because the monopolist sets the price.',
      'Horizontal at the market price, as for a competitive firm.',
    ],
    correctAnswer: 1,
    explanation:
      'To sell one more unit, a single-price monopolist must lower the price on all units, so marginal revenue is less than price. For linear demand P = a − bQ, MR = a − 2bQ: the same intercept and twice the slope; a horizontal MR applies only to a perfectly competitive firm.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'Compared with a perfectly competitive industry facing the same demand and costs, a single-price monopoly results in:',
    options: [
      'A lower price, a higher quantity, and no deadweight loss.',
      'A higher price, a lower quantity, and a deadweight loss.',
      'A higher price, a higher quantity, and no deadweight loss.',
      'The same price and quantity, but less consumer surplus.',
    ],
    correctAnswer: 1,
    explanation:
      'The monopolist restricts output to where MR = MC, which is below the quantity where P = MC, and charges a higher price. The units that are not produced but are worth more to buyers than they cost create a deadweight loss.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    stimulus:
      'A monopolist that had been charging a single price becomes able to practice perfect (first-degree) price discrimination, charging each buyer the maximum that buyer is willing to pay.',
    question: 'Compared with the single-price outcome, which of the following is true?',
    options: [
      'Output rises to where P = MC, and consumer surplus falls to zero.',
      'Output falls below the single-price level, and deadweight loss grows.',
      'Output is unchanged, but consumer surplus rises as prices are tailored.',
      'Output expands to where P = MC, and the firm earns zero profit.',
    ],
    correctAnswer: 0,
    explanation:
      'Because the firm no longer has to cut the price on earlier units to sell another, its marginal revenue equals the demand curve, so it produces until price equals marginal cost and the deadweight loss disappears. The firm captures all of the surplus as profit, so consumer surplus is zero and profit rises rather than falling to zero.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'A natural monopoly arises when:',
    options: [
      'The government grants one firm an exclusive license to serve a market.',
      'Economies of scale let one firm serve the whole market at the lowest cost.',
      'A firm holds a patent that bars rivals from producing its product.',
      'Consumers are loyal to one brand and refuse to buy close substitutes.',
    ],
    correctAnswer: 1,
    explanation:
      'In a natural monopoly, long-run average cost is still falling at the quantity the market demands, so one firm can supply the market more cheaply than two or more could. A license or patent creates a legal monopoly, not a natural one.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'Monopolistically competitive firms differ from perfectly competitive firms primarily because they:',
    options: [
      'Face perfectly elastic demand curves at the going market price.',
      'Earn positive economic profit that persists in the long run.',
      'Sell products that buyers see as distinct from rivals\' products.',
      'Always produce at the minimum of long-run average total cost.',
    ],
    correctAnswer: 2,
    explanation:
      'Product differentiation gives each monopolistically competitive firm some control over price, so it faces a downward-sloping demand curve. Free entry still drives long-run economic profit to zero, just as in perfect competition.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'In long-run equilibrium, a monopolistically competitive firm is characterized by which of the following?',
    options: [
      'Price equals average total cost, but price exceeds marginal cost.',
      'Price equals average total cost, and price equals marginal cost.',
      'Price exceeds average total cost, and price exceeds marginal cost.',
      'Price equals marginal cost, but price is below average total cost.',
    ],
    correctAnswer: 0,
    explanation:
      'Entry continues until each firm\'s demand curve is tangent to its ATC curve, so P = ATC and economic profit is zero. Because that tangency is on the downward-sloping part of demand, P > MR = MC, leaving the firm with excess capacity; P = ATC = MC describes perfect competition.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    stimulus:
      'Two firms each choose a High or Low price at the same time, in a single round. Payoffs are (Firm 1, Firm 2) profits:\n  Both High:              (10, 10)\n  Firm 1 Low, Firm 2 High: (12, 5)\n  Firm 1 High, Firm 2 Low: (5, 12)\n  Both Low:               (7, 7)',
    question: 'If each firm plays its dominant strategy, the outcome is:',
    options: [
      'Each firm sets a high price, earning (10, 10).',
      'Firm 1 and Firm 2 each set a low price, earning (7, 7).',
      'Firm 1 sets a low price and Firm 2 sets a high price, earning (12, 5).',
      'Undetermined, because neither firm has a dominant strategy.',
    ],
    correctAnswer: 1,
    explanation:
      'For Firm 1, Low pays more whether Firm 2 chooses High (12 > 10) or Low (7 > 5), so Low is dominant; the same holds for Firm 2. Both firms choosing Low gives (7, 7), even though both would earn more at (10, 10), which is the prisoner\'s dilemma.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'Firms in an oligopoly typically face:',
    options: [
      'A horizontal demand curve at the price set by the market, as wheat farmers do.',
      'Interdependence, since each firm\'s payoff depends on its rivals\' choices.',
      'Free entry and exit, which drive economic profit to zero in the long run.',
      'A single price set by a government regulator rather than by the firms.',
    ],
    correctAnswer: 1,
    explanation:
      'With only a few firms, each firm\'s best price or output depends on how its rivals respond, which is why oligopoly is analyzed with game theory. Barriers to entry, not free entry, let oligopolists earn long-run economic profit.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'Which of the following is the best example of a barrier to entry that creates monopoly power?',
    options: [
      'Heavy advertising by one established firm in a competitive market.',
      'A government-granted patent on a newly developed drug.',
      'Small differences in packaging among many competing brands.',
      'A large number of firms selling nearly identical products.',
    ],
    correctAnswer: 1,
    explanation:
      'A patent legally prevents other firms from producing the drug, so it blocks entry and gives the holder monopoly power for the life of the patent. Advertising and packaging differences are forms of product differentiation that rivals can copy, so they do not prevent entry.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-imperfect-competition',
    question: 'A regulator wants a natural monopoly to produce the allocatively efficient quantity. It should set the price where:',
    options: [
      'Price equals marginal cost, where demand intersects the MC curve.',
      'Price equals average total cost, where demand intersects the ATC curve.',
      'Price equals the height of demand at the output where MR equals MC.',
      'Total revenue is maximized, at the output where MR equals zero.',
    ],
    correctAnswer: 0,
    explanation:
      'Allocative efficiency requires P = MC, the socially optimal price; because a natural monopoly\'s ATC lies above MC there, the firm would need a subsidy to avoid a loss. Setting P = ATC is the fair-return price, which lets the firm break even but still produces less than the efficient quantity.',
  },

  /* ============================ UNIT 5 — FACTOR MARKETS (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question: 'A firm hires workers in a perfectly competitive labor market and sells its output in a perfectly competitive product market. Its demand curve for labor is:',
    options: [
      'Its marginal factor cost curve, which equals the market wage.',
      'Its marginal revenue product of labor curve.',
      'Its average product of labor curve.',
      'Its marginal product of labor curve, measured in units of output.',
    ],
    correctAnswer: 1,
    explanation:
      'The firm hires a worker only if the extra revenue the worker brings in, MRP = MP × P, is at least the wage, so the MRP curve shows how many workers it hires at each wage. The MFC curve is the labor supply the firm faces, not its demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    stimulus:
      'A firm sells its output in a perfectly competitive market at \\$10 per unit and hires labor in a perfectly competitive labor market at a wage of \\$75 per day.\n  Workers:       1    2    3    4    5\n  Total output: 12   22   30   37   42',
    question: 'How many workers should the firm hire to maximize profit?',
    options: [
      '2 workers',
      '3 workers',
      '4 workers',
      '5 workers',
    ],
    correctAnswer: 1,
    explanation:
      'Marginal products are 12, 10, 8, 7, and 5, so MRP (MP × \\$10) is \\$120, \\$100, \\$80, \\$70, and \\$50. The firm hires every worker whose MRP is at least the \\$75 wage (MFC), so it hires 3; the fourth worker adds only \\$70 of revenue but costs \\$75.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question: 'Which of the following will shift the demand for labor in the auto industry to the RIGHT?',
    options: [
      'A decrease in the price of cars, which lowers the value of each worker\'s output.',
      'An increase in the marginal product of auto workers from new equipment.',
      'A decrease in consumer demand for cars as buyers switch to public transit.',
      'An increase in the wage rate that auto firms must pay their workers.',
    ],
    correctAnswer: 1,
    explanation:
      'Labor demand is the MRP curve, so higher productivity raises the revenue each worker generates and shifts labor demand right. A change in the wage causes a movement along the labor demand curve rather than a shift.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    stimulus:
      'A firm is the only employer of nurses in a small, isolated town. To hire more nurses, it must raise the wage it pays to all of them.',
    question: 'Compared with a perfectly competitive labor market with the same supply and MRP curves, this profit-maximizing monopsonist will:',
    options: [
      'Pay a higher wage and hire more workers.',
      'Pay a lower wage and hire fewer workers.',
      'Pay a higher wage and hire fewer workers.',
      'Pay a lower wage and hire more workers.',
    ],
    correctAnswer: 1,
    explanation:
      'Because raising the wage for one more nurse raises it for all, the monopsonist\'s marginal factor cost lies above the supply curve. It hires where MRP = MFC, which is fewer workers than the competitive outcome, and pays only the wage on the supply curve at that quantity, which is lower.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    stimulus:
      'For the last units of each input it employs, a firm finds that the marginal product of labor is 20 units of output at a wage of \\$10, and the marginal product of capital is 30 units of output at a rental price of \\$20.',
    question: 'To produce its current output at the lowest possible cost, the firm should:',
    options: [
      'Use more labor and less capital, since labor adds more product per dollar.',
      'Use more capital and less labor, since capital has the higher marginal product.',
      'Keep its current mix, since each input\'s price already reflects its productivity.',
      'Use more of both inputs, since each one has a positive marginal product.',
    ],
    correctAnswer: 0,
    explanation:
      'The cost-minimizing rule compares marginal product per dollar: labor gives 20 ÷ \\$10 = 2 units per dollar and capital gives 30 ÷ \\$20 = 1.5. Shifting spending toward labor lowers cost until the two ratios are equal; capital\'s higher marginal product alone ignores its higher price.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    question: 'An increase in the supply of labor in a perfectly competitive labor market will most likely cause which of the following?',
    options: [
      'The wage falls and employment rises.',
      'The wage rises and employment rises.',
      'The wage falls and employment falls.',
      'The wage rises and employment falls.',
    ],
    correctAnswer: 0,
    explanation:
      'A rightward shift of labor supply moves the equilibrium down along the unchanged labor demand curve, so the wage falls and more workers are hired. Employment would fall along with the wage only if labor demand, not supply, had decreased.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-factor-markets',
    stimulus:
      'In a perfectly competitive labor market, the equilibrium wage is \\$12 per hour and 500 workers are employed. The government sets a minimum wage of \\$15 per hour. At \\$15, firms want to hire 400 workers and 600 workers want jobs.',
    question: 'After the minimum wage takes effect, how many workers are employed, and what is the surplus of labor?',
    options: [
      '400 employed, with a surplus of 200 workers',
      '500 employed, with a surplus of 100 workers',
      '600 employed, with a surplus of 0 workers',
      '400 employed, with a surplus of 100 workers',
    ],
    correctAnswer: 0,
    explanation:
      'Firms decide how many workers are hired, so employment falls to the 400 workers demanded at \\$15. The surplus of labor is quantity supplied minus quantity demanded, 600 − 400 = 200; measuring the drop from the old 500 understates it because the higher wage also draws in 100 new job seekers.',
  },

  /* ============================ UNIT 6 — MARKET FAILURE & GOVT (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'A negative externality in production, such as pollution from a factory, typically leads an unregulated market to produce:',
    options: [
      'More than the socially optimal quantity, because marginal social cost exceeds marginal private cost.',
      'Less than the socially optimal quantity, because marginal social cost exceeds marginal private cost.',
      'Exactly the socially optimal quantity, because firms already pay for all the costs of production.',
      'Less than the socially optimal quantity, because marginal social benefit exceeds marginal private benefit.',
    ],
    correctAnswer: 0,
    explanation:
      'Firms ignore the external cost, so they produce where demand meets marginal private cost, beyond the quantity where demand meets the higher marginal social cost. The result is overproduction and a deadweight loss; marginal social benefit exceeding private benefit describes a positive externality instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    stimulus:
      'In an unregulated competitive market, a chemical plant and its rivals sell 1,000 tons per month. Each ton imposes a constant external cost of \\$5 on nearby residents. The socially optimal quantity is 800 tons per month. All curves are linear.',
    question: 'Which policy would move the market to the socially optimal quantity, and how large is the deadweight loss it eliminates?',
    options: [
      'A \\$5 per-ton tax, eliminating a deadweight loss of \\$500',
      'A \\$5 per-ton tax, eliminating a deadweight loss of \\$1,000',
      'A \\$5 per-ton subsidy, eliminating a deadweight loss of \\$500',
      'A \\$5 per-ton subsidy, eliminating a deadweight loss of \\$1,000',
    ],
    correctAnswer: 0,
    explanation:
      'A per-unit (Pigouvian) tax equal to the \\$5 marginal external cost makes firms bear the full social cost, cutting output to 800 tons. The deadweight loss is the triangle ½ × \\$5 × (1,000 − 800) = \\$500; a subsidy would increase output and make the overproduction worse.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'Vaccinations create a positive externality because vaccinated people are less likely to infect others. Without government intervention, the market for vaccinations will most likely produce:',
    options: [
      'A quantity below the socially optimal level.',
      'A quantity above the socially optimal level.',
      'A quantity equal to the socially optimal level.',
      'A price above the socially optimal level, with no deadweight loss.',
    ],
    correctAnswer: 0,
    explanation:
      'Buyers weigh only their own private benefit, which is less than the marginal social benefit, so the market quantity falls short of the level where marginal social benefit equals marginal cost. The underproduction creates a deadweight loss, which a per-unit subsidy can correct.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'A public good, such as national defense, is best characterized as:',
    options: [
      'Rival and excludable, so each unit can be sold to one buyer.',
      'Nonexcludable and nonrival, so nonpayers cannot be kept out.',
      'Rival and nonexcludable, so users tend to overuse it.',
      'Nonrival and excludable, so sellers can charge each user.',
    ],
    correctAnswer: 1,
    explanation:
      'A public good is nonrival (one person\'s use does not reduce what is left for others) and nonexcludable (nonpayers cannot be prevented from benefiting), which creates a free-rider problem. A good that is rival but nonexcludable is a common resource, which tends to be overused.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'Which of the following statements about how taxes affect income distribution is correct?',
    options: [
      'A regressive tax takes a larger share of income from low earners than from high earners.',
      'A progressive tax takes the same share of income from low earners and from high earners.',
      'A proportional tax takes a larger share of income from high earners than from low earners.',
      'A sales tax on groceries takes a larger share of income from high earners than from low earners.',
    ],
    correctAnswer: 0,
    explanation:
      'A regressive tax takes a larger percentage of income from low earners; a sales tax on groceries is regressive because lower-income households spend a larger share of their income on food. A tax that takes the same share from everyone is proportional, not progressive.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-market-failure-government',
    question: 'The Lorenz curve and the Gini coefficient are used to measure:',
    options: [
      'The growth rate of a country\'s real income over time.',
      'The share of the labor force that is unemployed.',
      'How unequally income is divided among households.',
      'The rate at which the overall price level rises.',
    ],
    correctAnswer: 2,
    explanation:
      'The Lorenz curve plots the cumulative share of income received by the cumulative share of households, and the Gini coefficient summarizes its distance from the line of perfect equality (0 = perfect equality, 1 = maximum inequality). Neither measures growth in total income, only how that income is divided.',
  },
]
