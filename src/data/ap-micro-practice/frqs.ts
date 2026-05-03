import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Microeconomics — Free Response.
 * Mirrors official CB exam structure:
 *   FRQ 1 — Long FRQ (multi-part, ~10 pts)
 *   FRQ 2 — Short FRQ (~5 pts)
 *   FRQ 3 — Short FRQ (~5 pts)
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — LONG (Monopoly) ---------- */
  {
    type: 'saq',
    topic: 'unit-4-imperfect-competition',
    prompt:
      'FRQ 1 — Long FRQ (10 parts).\n\n' +
      'CleanWater Inc. is the sole producer of bottled spring water in the small town of Riverdale. The company is a profit-maximizing single-price monopolist. Its marginal cost (MC) is constant at $2 per bottle. Its average total cost (ATC) is also $2 per bottle (no fixed costs). The market demand for bottled water in Riverdale is given by the linear demand schedule below:\n\n' +
      '   Price ($)  Quantity demanded (bottles)\n' +
      '       8                  0\n' +
      '       6                 200\n' +
      '       4                 400\n' +
      '       2                 600\n' +
      '       0                 800\n\n' +
      'Use this scenario to answer parts (A) through (G).',
    parts: [
      {
        letter: 'A',
        question:
          'Draw a correctly labeled graph of the monopoly market for bottled water. Show: (i) the demand (D) curve, (ii) the marginal revenue (MR) curve, (iii) the marginal cost (MC) curve, and (iv) the average total cost (ATC) curve.',
        rubric: [
          { id: 'a1', label: '1 pt — Axes labeled (Price/Cost on y-axis, Quantity on x-axis); D downward sloping; MR below D and twice as steep; MC = ATC horizontal at $2', description: 'Standard monopoly graph with constant MC = ATC at $2 (since there are no fixed costs).' },
        ],
      },
      {
        letter: 'B',
        question:
          'On your graph from part (A), label the profit-maximizing quantity as Q_M and the price the monopolist charges as P_M.',
        rubric: [
          { id: 'b1', label: '1 pt — Q_M shown where MR = MC; P_M shown on the demand curve directly above Q_M', description: 'Profit-maximization rule MR = MC determines Q_M; price is read off the demand curve.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Calculate the profit-maximizing price (P_M) and quantity (Q_M). Show your work.',
        rubric: [
          { id: 'c1', label: '1 pt — Q_M = 300 bottles; P_M = $5', description: 'Demand: P = 8 − 0.01Q. TR = (8 − 0.01Q)Q = 8Q − 0.01Q². MR = 8 − 0.02Q. Set MR = MC: 8 − 0.02Q = 2 → Q_M = 300. P_M = 8 − 0.01(300) = $5.' },
        ],
      },
      {
        letter: 'D',
        question:
          'Calculate the monopolist\'s economic profit. Show your work.',
        rubric: [
          { id: 'd1', label: '1 pt — Profit = $900', description: 'Profit = (P − ATC) × Q = (5 − 2) × 300 = $900.' },
        ],
      },
      {
        letter: 'E',
        question:
          'On your graph from part (A), shade the deadweight loss (DWL) created by the monopoly (compared to the perfectly competitive outcome). Calculate the dollar value of the DWL. Show your work.',
        rubric: [
          { id: 'e1', label: '1 pt — DWL triangle correctly shaded between Q_M and Q_C, bounded above by the demand curve and below by MC', description: 'Triangle bounded by D above, MC below, between Q_M = 300 and Q_C = 600.' },
          { id: 'e2', label: '1 pt — DWL = $450', description: 'Competitive Q_C where P = MC: 8 − 0.01Q = 2 → Q_C = 600. DWL = ½ × base × height = ½ × (600 − 300) × ($5 − $2) = ½ × 300 × 3 = $450.' },
        ],
      },
      {
        letter: 'F',
        question:
          'Suppose the government considers two regulatory options: (i) a price ceiling set at MC = $2 per bottle, OR (ii) a price ceiling set at average total cost = $2 per bottle (which here is the same as MC since there are no fixed costs). Identify which regulation produces the socially efficient (allocatively efficient) quantity and explain why.',
        rubric: [
          { id: 'f1', label: '1 pt — A price ceiling at MC = $2 produces the allocatively efficient quantity', description: 'Allocative efficiency requires P = MC, which equals the competitive Q_C = 600 in this case. The ceiling at MC eliminates DWL.' },
        ],
      },
      {
        letter: 'G',
        question:
          'Now suppose CleanWater is able to perfectly price discriminate (charge each consumer the maximum they are willing to pay). State whether each of the following will increase, decrease, or stay the same compared to the single-price monopoly outcome:\n  (i) Quantity produced.\n  (ii) Consumer surplus.\n  (iii) Deadweight loss.',
        rubric: [
          { id: 'g1', label: '1 pt — (i) Quantity INCREASES (to allocatively efficient Q = 600); (ii) Consumer surplus DECREASES (to zero); (iii) DWL DECREASES (to zero)', description: 'Perfect price discrimination produces the efficient quantity (P = MC) but extracts ALL consumer surplus as producer profit — DWL is eliminated.' },
          { id: 'g2', label: '1 pt — Brief correct justification', description: 'Justification must reference perfect price discrimination producing where P = MC and capturing all CS as PS.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Monopoly graph: axes (Price/Cost vs. Quantity). D downward sloping (intercepts $8 at Q=0, $0 at Q=800). MR below D, twice as steep (intercepts $8 at Q=0, $0 at Q=400). MC = ATC horizontal at $2 (no fixed costs).\n\n' +
      '(B) Q_M is at the MR=MC intersection; P_M is read on the demand curve directly above Q_M.\n\n' +
      '(C) Inverse demand: P = 8 − 0.01Q. TR = 8Q − 0.01Q²; MR = 8 − 0.02Q. Set MR = MC = 2: 8 − 0.02Q = 2 → 0.02Q = 6 → Q_M = 300. P_M = 8 − 0.01(300) = 8 − 3 = $5.\n\n' +
      '(D) Profit = (P − ATC) × Q = (5 − 2) × 300 = $900.\n\n' +
      '(E) Competitive Q_C: 8 − 0.01Q = 2 → Q_C = 600. DWL = ½ × (Q_C − Q_M) × (P_M − MC) = ½ × 300 × 3 = $450. Shade the triangle bounded by D above, MC below, between Q_M = 300 and Q_C = 600.\n\n' +
      '(F) A price ceiling at MC = $2 produces the allocatively efficient quantity. With P = MC = $2, firms produce Q_C = 600 (where the demand price equals marginal cost), eliminating DWL.\n\n' +
      '(G) (i) Quantity INCREASES from 300 to 600 (allocatively efficient). (ii) Consumer surplus DECREASES to zero — all surplus is captured by the firm. (iii) DWL DECREASES to zero — every unit for which MB ≥ MC is produced.',
  },

  /* ---------- FRQ 2 — SHORT (Perfect Competition) ---------- */
  {
    type: 'saq',
    topic: 'unit-3-production-cost-perfect-comp',
    prompt:
      'FRQ 2 — Short (5 parts).\n\n' +
      'Assume the market for organic apples is perfectly competitive. A representative apple-grower (Apple Acres) is currently in long-run equilibrium. Then, a sudden increase in consumer demand for organic apples raises the market price.',
    parts: [
      {
        letter: 'A',
        question:
          'Draw side-by-side, correctly labeled graphs of (left) the market for organic apples and (right) Apple Acres in the SHORT RUN after the demand shock. On the firm graph, show: D = MR = P at the new market price, MC, ATC, and the profit-maximizing quantity (q*).',
        rubric: [
          { id: 'a1', label: '1 pt — Market graph: D shifts RIGHT, equilibrium P rises and Q rises', description: 'Standard rightward demand shift; new equilibrium higher P and Q.' },
          { id: 'a2', label: '1 pt — Firm graph: horizontal D = MR = P at the new (higher) market price; MC and ATC drawn correctly; q* at MR = MC', description: 'Firm faces horizontal demand at the new market price. q* is at MR = MC.' },
        ],
      },
      {
        letter: 'B',
        question:
          'On your firm graph from part (A), shade the area representing Apple Acres\' SHORT-RUN economic profit.',
        rubric: [
          { id: 'b1', label: '1 pt — Profit rectangle correctly shaded (height P − ATC, width q*)', description: 'Rectangle between P (top) and ATC (bottom), from 0 to q* in width.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain what will happen in this market in the LONG run as a result of the short-run economic profit you identified in (B).',
        rubric: [
          { id: 'c1', label: '1 pt — New firms ENTER the industry; market supply shifts RIGHT; price falls back until economic profit returns to zero', description: 'Free entry/exit drives long-run economic profit to zero.' },
        ],
      },
      {
        letter: 'D',
        question:
          'In the new long-run equilibrium for the industry, what will be true about the relationship among Apple Acres\' price (P), marginal cost (MC), and the minimum of average total cost (min ATC)?',
        rubric: [
          { id: 'd1', label: '1 pt — P = MC = min ATC', description: 'Long-run competitive equilibrium: each firm operates at minimum efficient scale with zero economic profit.' },
        ],
      },
      {
        letter: 'E',
        question:
          'Is the long-run equilibrium of this perfectly competitive market both productively AND allocatively efficient? Explain.',
        rubric: [
          { id: 'e1', label: '1 pt — YES: productive efficiency because P = min ATC; allocative efficiency because P = MC', description: 'Both efficiency conditions hold in long-run perfect competition.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Market graph: D₁ shifts right to D₂ along upward-sloping S; new equilibrium has higher P and higher Q. Firm graph: D = MR is horizontal at the new (higher) market price, above ATC at the profit-max quantity q* where MC crosses MR from below.\n\n' +
      '(B) Profit rectangle: width = q*, height = P_new − ATC at q*. Shade this rectangle on the firm graph.\n\n' +
      '(C) Positive short-run economic profit attracts new firms into the industry. Market supply shifts RIGHT, lowering price. Entry continues until economic profit returns to zero.\n\n' +
      '(D) In long-run equilibrium, P = MC = min ATC.\n\n' +
      '(E) Yes — both productively efficient (P = min ATC, so the firm produces at lowest possible average cost) and allocatively efficient (P = MC, so the marginal benefit to consumers equals the marginal cost of production).',
  },

  /* ---------- FRQ 3 — SHORT (Externality / Pigouvian Tax) ---------- */
  {
    type: 'saq',
    topic: 'unit-6-market-failure-government',
    prompt:
      'FRQ 3 — Short (5 parts).\n\n' +
      'A steel mill in a competitive industry produces steel and emits pollution into a nearby river. The pollution imposes external costs on a downstream fishing community. The market currently has no government intervention.',
    parts: [
      {
        letter: 'A',
        question:
          'Draw a correctly labeled graph of the market for steel showing: demand (D = MSB), marginal private cost (MPC = market supply), and marginal social cost (MSC). Label the market quantity (Q_M) and the socially optimal quantity (Q*).',
        rubric: [
          { id: 'a1', label: '1 pt — Axes labeled (Price/Cost vs. Quantity); D downward sloping (= MSB); MPC upward sloping (= S); MSC above MPC by the per-unit external cost', description: 'Externality graph with MSC > MPC.' },
          { id: 'a2', label: '1 pt — Q_M at D ∩ MPC; Q* at D ∩ MSC; Q* < Q_M', description: 'Market quantity is greater than the socially optimal quantity.' },
        ],
      },
      {
        letter: 'B',
        question:
          'On your graph from part (A), shade the area representing the deadweight loss caused by this negative externality.',
        rubric: [
          { id: 'b1', label: '1 pt — DWL triangle shaded between Q* and Q_M, bounded above by MSC and below by D (= MSB)', description: 'Standard DWL triangle for overproduction with a negative externality.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Identify a specific government policy (other than direct regulation or quota) that would internalize the externality and move the market to the socially optimal quantity. Explain how it works.',
        rubric: [
          { id: 'c1', label: '1 pt — A per-unit Pigouvian TAX on steel equal to the marginal external cost', description: 'The tax shifts MPC up to MSC, internalizing the externality.' },
          { id: 'c2', label: '1 pt — Explanation: tax raises producers\' costs by exactly the per-unit external damage, so MPC + tax = MSC; equilibrium moves to Q*', description: 'Must connect the tax mechanism to producing the socially optimal quantity.' },
        ],
      },
      {
        letter: 'D',
        question:
          'Now suppose another industry generates a POSITIVE production externality (e.g., a research lab whose discoveries benefit other firms). Without intervention, will the free-market quantity be greater than, less than, or equal to the socially optimal quantity? Explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Free-market quantity is LESS THAN the socially optimal quantity', description: 'Positive externalities cause underproduction; standard correction is a per-unit subsidy equal to the marginal external benefit.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Steel-market graph: axes (Price/Cost, Q). D (= MSB) downward sloping. MPC = market supply, upward sloping. MSC = MPC + per-unit external cost (vertically above MPC). Q_M at D ∩ MPC; Q* at D ∩ MSC. Q* lies to the LEFT of Q_M.\n\n' +
      '(B) Shade the DWL triangle bounded above by MSC, below by D (= MSB), between Q* on the left and Q_M on the right.\n\n' +
      '(C) Impose a per-unit Pigouvian TAX on steel equal to the marginal external cost. The tax raises producers\' marginal cost by exactly that external damage, so MPC + tax = MSC. Market supply shifts up to coincide with MSC, and the new equilibrium quantity equals the socially optimal Q*.\n\n' +
      '(D) The free-market quantity will be LESS THAN the socially optimal quantity. Producers ignore the external benefit (MSB > MPB), so they underproduce. The standard remedy is a per-unit Pigouvian subsidy equal to the marginal external benefit, which shifts demand (or MPB) up to MSB.',
  },
]
