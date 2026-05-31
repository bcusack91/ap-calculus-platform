#!/usr/bin/env python3
"""
Rewrite src/data/ap-micro-frq/questions.ts with substantive AP-style prompts.
4 long FRQs + 4 short FRQs covering all 6 AP Microeconomics units.
"""
from __future__ import annotations
import os, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-micro-frq", "questions.ts")

# The `prompt` and `sampleAnswer` fields are rendered with ReactMarkdown +
# remark-math, where an unescaped "$" opens inline math. Two currency amounts
# (e.g. "$20 ... $14") therefore collide as $...$ delimiters and swallow the
# prose between them. These fields contain ONLY literal dollar signs (currency
# and FX symbols like D_$), never real math, so escape every unescaped "$" as a
# markdown character escape "\$" (renders a literal "$"). `description`,
# `title`, and `keywords` are plain text / answer-matching and are left as-is.
_DOLLAR = re.compile(r'(?<!\\)\$')


def js(s): return json.dumps(s, ensure_ascii=False)


def jsm(s): return json.dumps(_DOLLAR.sub(r'\\$', s), ensure_ascii=False)


def part(label, prompt, max_pts, rubric_items, sample):
    rubric_lines = ",\n          ".join(
        f"{{ points: {pts}, description: {js(desc)}, keywords: {json.dumps(kw, ensure_ascii=False)} }}"
        for pts, desc, kw in rubric_items
    )
    return (
        f"      {{\n"
        f"        label: {js(label)},\n"
        f"        prompt: {jsm(prompt)},\n"
        f"        maxPoints: {max_pts},\n"
        f"        rubric: [\n          {rubric_lines}\n        ],\n"
        f"        sampleAnswer: {jsm(sample)},\n"
        f"      }}"
    )


def frq(id_, type_, unit, title, prompt, parts, total, time, calc=False):
    parts_str = ",\n".join(parts)
    return (
        f"  {{\n"
        f"    id: {js(id_)},\n"
        f"    type: '{type_}' as const,\n"
        f"    unit: {unit},\n"
        f"    title: {js(title)},\n"
        f"    prompt: {jsm(prompt)},\n"
        f"    parts: [\n{parts_str}\n    ],\n"
        f"    totalPoints: {total},\n"
        f"    timeRecommendation: {js(time)},\n"
        f"    calculatorAllowed: {str(calc).lower()},\n"
        f"  }}"
    )


# ============================================================================
# LONG FRQs — ~25 minutes, 10 points each
# ============================================================================

LONG_1 = frq(
    "micro-long-1", "long", 3, "Perfect Competition: Short-Run Profit and Long-Run Equilibrium",
    "Sunshine Strawberries operates in a perfectly competitive market. The current market price for a flat of strawberries is $20. Sunshine's marginal cost (MC) at the profit-maximizing quantity is $20, average total cost (ATC) is $14, and average variable cost (AVC) is $9. The firm produces 500 flats per week.",
    [
        part("(a)",
             "Draw side-by-side correctly labeled graphs of (i) the perfectly competitive INDUSTRY (market) and (ii) Sunshine Strawberries (firm). On the firm graph, show ATC, AVC, MC, and the demand/MR curve.",
             3,
             [
                 (1, "Industry: downward-sloping market demand and upward-sloping market supply intersecting at P = $20",
                     ["industry", "market", "S", "D", "supply", "demand", "$20", "intersection"]),
                 (1, "Firm: U-shaped ATC and AVC, upward-sloping MC through the minimums of ATC and AVC",
                     ["ATC", "AVC", "MC", "U-shaped", "MC through minimum", "marginal cost"]),
                 (1, "Firm shows a horizontal D = MR = P = $20 line (perfectly elastic firm demand)",
                     ["D = MR = P", "$20", "horizontal", "perfectly elastic", "price taker"]),
             ],
             "Industry graph: market S and D intersect at P = $20. Firm graph: U-shaped ATC and AVC with MC cutting through their minimums; horizontal demand line at $20 represents the firm's perfectly elastic demand (D = MR = P = AR)."),
        part("(b)",
             "Calculate Sunshine's short-run economic profit. Show your work and shade the profit area on your firm graph.",
             2,
             [
                 (1, "Profit per unit = P − ATC = $20 − $14 = $6",
                     ["P - ATC", "$6", "$20 - $14", "profit per unit"]),
                 (1, "Total economic profit = ($6)(500) = $3,000 per week; rectangle from Q=0 to 500, height $14 to $20",
                     ["$3,000", "$3000", "(P-ATC)Q", "rectangle", "$6 × 500"]),
             ],
             "Profit per unit = P − ATC = $20 − $14 = $6. Total profit = ($6)(500 flats) = $3,000/week. Profit rectangle on firm graph: width = 500, height = $20 − $14 = $6."),
        part("(c)",
             "Should Sunshine continue to produce in the SHORT RUN? Justify your answer using the shutdown rule.",
             1,
             [(1, "YES: P ($20) > AVC ($9), so the firm covers all variable costs and contributes to fixed costs",
                  ["P > AVC", "$20 > $9", "shutdown rule", "covers variable cost", "continue producing"])],
             "Yes — the shutdown rule says produce when P ≥ AVC. Here P = $20 > AVC = $9, so revenue covers all variable costs and contributes $11/unit toward fixed costs."),
        part("(d)",
             "Explain what will happen in the perfectly competitive industry in the LONG RUN. Show the changes on your industry and firm graphs.",
             3,
             [
                 (1, "Identifies entry of new firms (positive economic profit attracts entry)",
                     ["entry", "new firms enter", "attracted by profit", "freely enter"]),
                 (1, "Industry: market SUPPLY shifts RIGHT, lowering equilibrium price",
                     ["S shifts right", "supply increases", "lower price", "S2"]),
                 (1, "Firm: D=MR shifts DOWN to P_LR = minimum ATC; firm earns ZERO economic profit",
                     ["P falls to min ATC", "zero economic profit", "normal profit", "long-run equilibrium", "P = min ATC"]),
             ],
             "Positive short-run profits attract entry. New firms shift market supply right (S → S2). Equilibrium price falls until P equals minimum ATC for each firm. Each firm now produces at the bottom of its ATC, earning zero economic profit (normal profit)."),
        part("(e)",
             "Explain ONE reason perfect competition is considered ALLOCATIVELY EFFICIENT in long-run equilibrium.",
             1,
             [(1, "P = MC: the price consumers pay equals the marginal cost of producing the last unit, so society's marginal benefit equals marginal cost — no DWL",
                  ["P = MC", "allocative efficiency", "marginal benefit", "marginal cost", "no deadweight loss", "MB = MC"])],
             "In long-run equilibrium, P = MC. Since the demand curve reflects marginal benefit and the supply curve reflects marginal cost, MB = MC at equilibrium → allocatively efficient (no DWL). Output is also produced at minimum ATC → productively efficient."),
    ],
    10, "~25 minutes",
)

LONG_2 = frq(
    "micro-long-2", "long", 4, "Single-Price Monopoly vs. Price Discrimination",
    "MetroCable is the only broadband internet provider in a small town. Its constant marginal cost (MC) is $10 per subscriber. Market demand is P = 100 − Q (so MR = 100 − 2Q where Q is in thousands of subscribers).",
    [
        part("(a)",
             "Calculate the profit-maximizing quantity, price, and economic profit assuming MetroCable operates as a SINGLE-PRICE monopolist.",
             3,
             [
                 (1, "Sets MR = MC: 100 − 2Q = 10 → Q = 45 (thousand subscribers)",
                     ["MR = MC", "100 - 2Q = 10", "Q = 45", "45,000"]),
                 (1, "Price: P = 100 − 45 = $55",
                     ["P = $55", "100 - 45", "$55"]),
                 (1, "Profit = (P − MC)Q = ($55 − $10)(45) = $2,025 (thousand) = $2,025,000",
                     ["$2,025", "$2,025,000", "(P-MC)Q", "$45 × 45"]),
             ],
             "Profit-maximization: MR = MC → 100 − 2Q = 10 → Q* = 45. Price: P* = 100 − 45 = $55. Profit = (55 − 10)(45) = $2,025 (thousand) = $2.025M (assuming zero fixed cost)."),
        part("(b)",
             "On a correctly labeled monopoly graph, show D, MR, MC = ATC (constant), the profit-maximizing quantity Q_m and price P_m, the deadweight loss (DWL), and the consumer surplus (CS) area.",
             3,
             [
                 (1, "Draws downward-sloping D, MR (steeper, below D), horizontal MC = ATC at $10",
                     ["D", "MR", "MC = ATC", "downward sloping", "MR below D", "horizontal MC"]),
                 (1, "Identifies Q_m = 45 where MR = MC; P_m = $55 read off demand curve",
                     ["Q_m = 45", "P_m = $55", "MR = MC", "price from demand"]),
                 (1, "Shades DWL triangle (between Q_m=45 and Q_eff=90 where D = MC) and CS triangle (above $55, below D)",
                     ["DWL", "deadweight loss", "triangle", "Q = 90", "CS", "consumer surplus", "above price"]),
             ],
             "Graph: D from $100 to $0 at Q=100; MR from $100 to $0 at Q=50 (twice as steep). MC=ATC horizontal at $10. Q_m=45 (MR=MC). P_m=$55. Allocative efficient Q_eff=90 (D=MC). DWL triangle: vertices (45,$10), (45,$55), (90,$10). Area = ½(90−45)($55−$10) = $1,012.50 (thousand). CS triangle above $55."),
        part("(c)",
             "Now suppose MetroCable can engage in PERFECT (FIRST-DEGREE) PRICE DISCRIMINATION. Calculate the new profit-maximizing quantity and total economic profit. Compare to (a).",
             2,
             [
                 (1, "Q rises to allocatively efficient level Q = 90 (where P = MC)",
                     ["Q = 90", "P = MC", "allocatively efficient", "perfect price discrimination"]),
                 (1, "Total profit = entire area between D and MC from 0 to 90 = ½(90)($90) = $4,050 (thousand) — captures all surplus",
                     ["$4,050", "$4,050,000", "captures all surplus", "no consumer surplus", "triangle area"]),
             ],
             "Perfect price discrimination: charge each consumer their willingness to pay. MR = D, so produce until P = MC at Q = 90. Profit = entire triangle between D ($100−Q) and MC ($10) from Q=0 to Q=90 = ½(90)(90) = $4,050 (thousand) = $4.05M. CS = 0; producer captures all surplus. No DWL."),
        part("(d)",
             "Identify TWO conditions necessary for successful price discrimination.",
             2,
             [
                 (1, "Market power (downward-sloping demand: firm is a price searcher, not price taker)",
                     ["market power", "downward sloping demand", "price searcher", "monopoly power"]),
                 (1, "No arbitrage / no resale between consumer groups (and ability to identify willingness to pay)",
                     ["no resale", "no arbitrage", "prevent resale", "identify willingness to pay", "segment", "different groups"]),
             ],
             "Two requirements: (1) market power — firm faces a downward-sloping demand and can set price; (2) no arbitrage — buyers in the low-price segment cannot resell to the high-price segment, AND the firm can identify each buyer's willingness to pay (or proxy via age, location, time)."),
    ],
    10, "~25 minutes",
)

LONG_3 = frq(
    "micro-long-3", "long", 6, "Externalities: Negative Production Externality and Pigouvian Tax",
    "A coal-fired power plant near Pittsburgh produces electricity that imposes a NEGATIVE externality on nearby residents (respiratory illness, acid rain). The marginal private cost (MPC) of producing electricity is $40/MWh. The marginal external cost (MEC) imposed on residents is $25/MWh. The market demand for electricity (= marginal social benefit, MSB) is given.",
    [
        part("(a)",
             "Draw a correctly labeled graph of the market for electricity. Show MSB = MPB (demand), MPC (private supply), and MSC (= MPC + MEC). Label the unregulated market quantity Q_M and the socially optimal quantity Q_S.",
             3,
             [
                 (1, "Correctly labels axes (P on Y, Q on X) with downward-sloping MSB=MPB and upward-sloping MPC; MSC parallel to MPC but $25 ABOVE it",
                     ["price", "quantity", "MSB", "MPB", "MPC", "MSC", "downward demand", "upward supply", "MSC above MPC"]),
                 (1, "Shows Q_M where MPB = MPC (free-market equilibrium)",
                     ["Q_M", "private equilibrium", "MPB = MPC", "free market"]),
                 (1, "Shows Q_S where MSB = MSC (socially optimal), with Q_S < Q_M",
                     ["Q_S", "socially optimal", "MSB = MSC", "Q_S < Q_M", "less than market"]),
             ],
             "Market graph: P on Y, MWh on X. MSB=MPB slopes down. MPC slopes up. MSC = MPC + MEC, parallel and $25 above MPC. Free-market equilibrium Q_M at MPB ∩ MPC. Socially optimal Q_S at MSB ∩ MSC. Q_S < Q_M because the market overproduces when external costs are ignored."),
        part("(b)",
             "Identify the deadweight loss (DWL) on your graph and explain why a negative production externality creates DWL.",
             2,
             [
                 (1, "Shades the DWL triangle between Q_S and Q_M, bounded above by MSC and below by MSB",
                     ["DWL triangle", "between Q_S and Q_M", "MSC and MSB", "shade"]),
                 (1, "Explains: for units between Q_S and Q_M, MSC > MSB, so producing them creates net social loss (society values them less than they cost)",
                     ["MSC > MSB", "net loss", "overproduction", "social cost exceeds benefit"]),
             ],
             "DWL triangle: between Q_S and Q_M, bounded above by MSC and below by MSB. For each unit in this range, MSC > MSB → net social loss. The market overproduces because firms ignore the $25 external cost imposed on residents."),
        part("(c)",
             "Explain how a per-unit PIGOUVIAN TAX of $25/MWh imposed on the producer would correct the externality.",
             2,
             [
                 (1, "Tax shifts MPC up by $25, making it coincide with MSC (firms now internalize the external cost)",
                     ["MPC shifts up $25", "internalize", "private cost = social cost", "MPC = MSC after tax"]),
                 (1, "New private equilibrium occurs at Q_S where MPB = MPC + tax = MSC; DWL eliminated",
                     ["new equilibrium at Q_S", "DWL eliminated", "socially optimal", "Pigouvian"]),
             ],
             "A $25 per-MWh Pigouvian tax shifts MPC upward by exactly $25 to coincide with MSC. The new private equilibrium is at Q_S (MPB = MPC + tax). Firms now internalize the external cost; DWL is eliminated."),
        part("(d)",
             "Identify ONE specific real-world example of a Pigouvian tax used to address a negative externality.",
             1,
             [(1, "Provides a real example (federal cigarette excise tax $1.01/pack since 2009; British Columbia carbon tax C$50/tonne since 2022; EU ETS carbon allowances; congestion charging in London 2003+; Manhattan congestion pricing 2025)",
                  ["cigarette tax", "carbon tax", "British Columbia", "EU ETS", "congestion charge", "London", "Manhattan", "2025", "alcohol tax", "gasoline excise"])],
             "British Columbia introduced a carbon tax in 2008 starting at C$10/tonne, rising to C$80/tonne by 2024 — the first revenue-neutral carbon tax in North America. The U.S. federal cigarette excise tax has been $1.01/pack since 2009 to internalize public-health costs."),
        part("(e)",
             "Explain ONE limitation of using a Pigouvian tax to fully eliminate the externality.",
             2,
             [
                 (1, "Identifies measurement difficulty: regulators must accurately measure the MEC, which can vary across firms, locations, and time",
                     ["measurement", "MEC hard to measure", "varies", "informational"]),
                 (1, "Identifies political difficulty / distributional concerns / administrative cost / regressive incidence",
                     ["political", "regressive", "distribution", "administrative", "compliance cost", "lobbying"]),
             ],
             "Two limitations: (1) accurately measuring MEC is hard — health damages from PM2.5 vary by wind, distance, and population density, so a single tax rate is approximate; (2) Pigouvian taxes are politically contentious (carbon-tax repeal in Australia 2014) and can be regressive, hitting low-income households disproportionately unless paired with rebates."),
    ],
    10, "~25 minutes",
)

LONG_4 = frq(
    "micro-long-4", "long", 5, "Monopsony in the Labor Market and Minimum Wage",
    "AmazonWarehouse is the only large employer in a rural town and acts as a MONOPSONIST in the local labor market for warehouse workers. The labor supply is given by W = 8 + 0.05L (so MFC = 8 + 0.10L). The marginal revenue product (MRP) of labor is MRP = 30 − 0.10L.",
    [
        part("(a)",
             "Draw a correctly labeled monopsony labor-market graph showing MRP, S_L (labor supply), and MFC (marginal factor cost). Indicate the profit-maximizing quantity of labor (L_M) and the wage paid (W_M).",
             3,
             [
                 (1, "Correctly labels axes (Wage on Y, Labor on X), upward-sloping S_L, MFC steeper than S_L (above S_L for L > 0), downward-sloping MRP",
                     ["wage", "labor", "S_L", "MFC", "MRP", "MFC above S_L", "MFC steeper", "downward MRP"]),
                 (1, "Identifies L_M where MFC = MRP (profit-maximization)",
                     ["L_M", "MFC = MRP", "intersection"]),
                 (1, "Identifies W_M from the LABOR SUPPLY curve at L_M (NOT from MFC) — wage is BELOW MRP",
                     ["W_M from S_L", "W_M < MRP", "wage from supply", "below MRP"]),
             ],
             "Monopsony graph: W on Y, L on X. S_L slopes up; MFC slopes up MORE steeply (above S_L). MRP slopes down. Hire L_M where MFC = MRP. Wage W_M is read off S_L at L_M (since the firm pays the lowest wage that supplies L_M workers) — W_M < MRP."),
        part("(b)",
             "Calculate L_M and W_M using the equations provided. Show your work.",
             2,
             [
                 (1, "Sets MFC = MRP: 8 + 0.10L = 30 − 0.10L → 0.20L = 22 → L_M = 110",
                     ["MFC = MRP", "8 + 0.10L = 30 - 0.10L", "L = 110", "0.20L = 22"]),
                 (1, "W_M = 8 + 0.05(110) = $13.50 per hour",
                     ["W = 8 + 0.05L", "$13.50", "13.50", "0.05 × 110"]),
             ],
             "MFC = MRP: 8 + 0.10L = 30 − 0.10L → 0.20L = 22 → L_M = 110 workers. W_M from S_L: W = 8 + 0.05(110) = 8 + 5.50 = $13.50/hr."),
        part("(c)",
             "Compare L_M and W_M to the COMPETITIVE labor-market outcome (where S_L = MRP). Calculate L_C and W_C.",
             2,
             [
                 (1, "Sets S_L = MRP: 8 + 0.05L = 30 − 0.10L → 0.15L = 22 → L_C ≈ 146.67",
                     ["S_L = MRP", "0.15L = 22", "L_C ≈ 147", "146.67"]),
                 (1, "W_C = 8 + 0.05(146.67) ≈ $15.33; both L and W higher than monopsony",
                     ["W_C ≈ $15.33", "$15.33", "higher wage", "more workers", "competitive higher"]),
             ],
             "Competitive: S_L = MRP → 8 + 0.05L = 30 − 0.10L → 0.15L = 22 → L_C ≈ 146.67. W_C = 8 + 0.05(146.67) ≈ $15.33/hr. Compared to monopsony (L=110, W=$13.50), competition yields more workers AND a higher wage."),
        part("(d)",
             "Suppose the government imposes a MINIMUM WAGE of $15.50/hr. Explain how this affects employment in the monopsony market.",
             2,
             [
                 (1, "Min wage between W_M ($13.50) and approximately W_C ($15.33) creates horizontal effective MFC at $15.50",
                     ["horizontal MFC", "effective MFC = $15.50", "min wage", "binding"]),
                 (1, "Identifies that a properly set minimum wage in monopsony can INCREASE both wage and employment (unlike in a competitive market)",
                     ["increases employment", "raises wage", "monopsony minimum wage", "L rises"]),
             ],
             "A minimum wage at $15.50 makes the firm's effective MFC horizontal at $15.50 up to the supply curve, then jumps to the original MFC. The firm now hires until MRP = $15.50: 30 − 0.10L = 15.50 → L = 145. So L rises from 110 to 145 AND wage rises from $13.50 to $15.50 — a key Card-Krueger (1994) result for monopsonistic labor markets."),
        part("(e)",
             "Identify ONE real-world example of monopsony power in labor markets.",
             1,
             [(1, "Provides a real example (company towns; Amazon in fulfillment-center labor markets; hospital systems and nurses; pro-sports leagues with reserve clauses; 19th-century coal towns; agricultural labor in some U.S. counties)",
                  ["company town", "Amazon", "fulfillment", "hospital", "nurse", "reserve clause", "MLB", "coal town", "agricultural", "monopsony power"])],
             "Major U.S. hospital systems often act as near-monopsonists for registered nurses in their metro areas (Hirsch & Schumacher 1995; multiple recent DOJ antitrust suits), suppressing wages 10-15% below competitive benchmarks. Pre-1975 MLB's reserve clause is the canonical labor-monopsony example."),
    ],
    10, "~25 minutes",
)


# ============================================================================
# SHORT FRQs — ~12 minutes, 5 points each
# ============================================================================

SHORT_1 = frq(
    "micro-short-1", "short", 2, "Price Elasticity of Demand and Total Revenue",
    "When the price of a movie streaming subscription rises from $10 to $14, the quantity demanded falls from 5 million to 4 million subscribers per month.",
    [
        part("(a)",
             "Calculate the price elasticity of demand using the MIDPOINT formula. Show your work.",
             2,
             [
                 (1, "%ΔQ = (4 − 5)/((4+5)/2) = −1/4.5 ≈ −22.2%; %ΔP = (14 − 10)/((14+10)/2) = 4/12 ≈ 33.3%",
                     ["midpoint", "%ΔQ", "%ΔP", "−22.2%", "33.3%", "1/4.5", "4/12"]),
                 (1, "E_d = |−22.2/33.3| ≈ 0.67",
                     ["E_d ≈ 0.67", "0.67", "absolute value", "elasticity"]),
             ],
             "Midpoint formula: %ΔQ = (4−5)/4.5 = −22.2%. %ΔP = (14−10)/12 = 33.3%. E_d = |−22.2%/33.3%| ≈ 0.67."),
        part("(b)",
             "Is demand elastic, inelastic, or unit elastic at this price range? Justify.",
             1,
             [(1, "INELASTIC because |E_d| = 0.67 < 1 (quantity changes proportionally less than price)",
                  ["inelastic", "less than 1", "0.67 < 1", "Q changes less than P"])],
             "Inelastic: |E_d| = 0.67 < 1 → quantity demanded falls proportionally LESS than price rises."),
        part("(c)",
             "Calculate total revenue (TR) before and after the price increase. Did TR rise or fall? Explain why this is consistent with your elasticity answer.",
             1,
             [(1, "TR_before = $10 × 5M = $50M; TR_after = $14 × 4M = $56M → TR ROSE; consistent because raising price in inelastic range increases TR",
                  ["$50M", "$56M", "TR rose", "$50 million", "$56 million", "inelastic", "raise price"])],
             "TR_before = $10 × 5M = $50M. TR_after = $14 × 4M = $56M → TR rose by $6M. Consistent: when demand is inelastic, raising P increases TR (the price hike outweighs the quantity loss)."),
        part("(d)",
             "Identify ONE specific factor that makes demand for streaming subscriptions relatively inelastic in the short run.",
             1,
             [(1, "Provides a valid factor (few close substitutes for must-watch original content; long-term subscription habit; bundled with hardware; small share of household budget; addiction-like content engagement)",
                  ["substitutes", "few substitutes", "habit", "small share of budget", "bundle", "exclusive content", "originals"])],
             "Streaming services have few close substitutes for exclusive original content (e.g., HBO Max for *Succession*, Disney+ for Marvel) — viewers cannot easily switch without losing access to specific shows, making short-run demand inelastic."),
    ],
    5, "~12 minutes",
)

SHORT_2 = frq(
    "micro-short-2", "short", 2, "Tax Incidence and Deadweight Loss",
    "The market for sugary soda is in equilibrium at P = $2 and Q = 100 million bottles. The government imposes a $0.50 per-bottle excise tax on producers. After the tax, the price consumers pay rises to $2.40 and quantity falls to 80 million bottles.",
    [
        part("(a)",
             "Calculate the price producers receive (net of tax) and the per-unit incidence on consumers vs. producers.",
             2,
             [
                 (1, "Producers receive $2.40 − $0.50 = $1.90 per bottle",
                     ["$1.90", "P - tax", "$2.40 - $0.50"]),
                 (1, "Consumer incidence = $0.40 ($2.40 − $2.00); producer incidence = $0.10 ($2.00 − $1.90)",
                     ["consumer incidence", "$0.40", "producer incidence", "$0.10"]),
             ],
             "Producers receive net price = $2.40 − $0.50 = $1.90. Consumer incidence = $2.40 − $2.00 = $0.40 (80% of tax). Producer incidence = $2.00 − $1.90 = $0.10 (20% of tax)."),
        part("(b)",
             "What does the relative incidence reveal about the relative elasticities of supply and demand?",
             1,
             [(1, "Consumers bear MORE of the tax → demand is LESS elastic (more inelastic) than supply",
                  ["demand more inelastic", "consumers bear more", "less elastic side", "supply more elastic"])],
             "Tax incidence falls more heavily on the side with LESS elasticity. Consumers pay 80% → demand is more inelastic than supply (e.g., addictive products)."),
        part("(c)",
             "Calculate the government tax revenue and the deadweight loss (DWL) from the tax.",
             1,
             [(1, "Revenue = $0.50 × 80M = $40M; DWL = ½($0.50)(100M − 80M) = ½($0.50)(20M) = $5M",
                  ["$40M", "$40 million", "DWL = $5M", "$5 million", "½ × tax × ΔQ"])],
             "Tax revenue = $0.50 × 80M bottles = $40M. DWL = ½(tax wedge)(ΔQ) = ½($0.50)(20M) = $5M — the value of mutually beneficial trades destroyed by the tax."),
        part("(d)",
             "Identify ONE specific real-world soda tax and a measured behavioral response.",
             1,
             [(1, "Provides example (Berkeley CA 2014 first U.S. soda tax: 21% drop in sugary drink consumption; Philadelphia 2017 1.5¢/oz tax → 38% drop in volume; Mexico 2014 1 peso/L tax → 7-12% drop)",
                  ["Berkeley", "2014", "21%", "Philadelphia", "2017", "38%", "Mexico", "1 peso/L", "7-12%", "soda tax"])],
             "Berkeley, CA passed the first U.S. citywide soda tax (1¢/oz) in 2014; consumption of sugary drinks fell about 21% within a year. Philadelphia's 1.5¢/oz tax (Jan 2017) led to a 38% drop in taxed-beverage volume."),
    ],
    5, "~12 minutes",
)

SHORT_3 = frq(
    "micro-short-3", "short", 6, "Public Goods and Free-Rider Problem",
    "A small town is considering installing streetlights — a public good. Three residents (A, B, C) value an additional streetlight at $40, $30, and $20 respectively. The marginal cost of installing one streetlight is $75.",
    [
        part("(a)",
             "Define the two characteristics that make a streetlight a public good.",
             2,
             [
                 (1, "Non-rivalrous: one person's use does not diminish another's use",
                     ["non-rivalrous", "non-rival", "one person's use does not reduce another's"]),
                 (1, "Non-excludable: cannot prevent non-payers from benefiting",
                     ["non-excludable", "cannot exclude", "free riding possible"]),
             ],
             "Public goods are NON-RIVALROUS (one person's consumption doesn't reduce availability for others — a streetlight illuminates many at once) and NON-EXCLUDABLE (impossible to charge or block non-payers)."),
        part("(b)",
             "Should the town install the streetlight? Justify using marginal social benefit (MSB) and marginal social cost (MSC).",
             1,
             [(1, "MSB = $40+$30+$20 = $90 (vertical summation for public goods); MSC = $75. Since MSB > MSC, install — net benefit $15",
                  ["MSB = $90", "vertical sum", "MSC = $75", "MSB > MSC", "install", "net benefit $15"])],
             "For public goods, MSB = VERTICAL sum of individual MBs (since all consume the same unit) = $40+$30+$20 = $90. MSC = $75. MSB > MSC → install (net social gain $15)."),
        part("(c)",
             "Explain why a private market would likely UNDERPROVIDE streetlights, and identify the term for this market failure.",
             1,
             [(1, "FREE-RIDER PROBLEM: residents understate willingness to pay since they cannot be excluded → private firms cannot capture full benefit → underproduction",
                  ["free rider", "underprovision", "underproduction", "cannot exclude", "understate WTP", "market failure"])],
             "Free-rider problem: each resident has an incentive to understate willingness to pay since they cannot be excluded from benefits. Private firms cannot recover costs → public goods are underproduced by the market — a classic market failure."),
        part("(d)",
             "Identify ONE real-world public good and explain how it is typically funded.",
             1,
             [(1, "Provides a valid example (national defense — funded by federal taxes; flood-control levees — federal/state; basic scientific research — NSF/NIH grants; broadcast TV — public funding/PBS; lighthouses — historically tolls or government)",
                  ["national defense", "federal taxes", "flood control", "NSF", "NIH", "research", "lighthouse", "PBS", "broadcast"])],
             "U.S. national defense is the canonical public good — funded through federal income taxes (~$886B in FY2024) precisely because free-rider problems prevent private provision. Basic scientific research is similarly funded by NSF and NIH grants."),
    ],
    5, "~12 minutes",
)

SHORT_4 = frq(
    "micro-short-4", "short", 4, "Oligopoly and the Prisoner's Dilemma (Game Theory)",
    "Two airlines, Skyway and Highflyer, share a single route. Each can choose a HIGH price ($400) or a LOW price ($300). The payoff matrix (annual profits in $ millions) is:\n\n"
    "|  | Highflyer HIGH | Highflyer LOW |\n"
    "|--|---|---|\n"
    "| Skyway HIGH | (50, 50) | (10, 70) |\n"
    "| Skyway LOW  | (70, 10) | (30, 30) |\n\n"
    "(Skyway's payoff listed first.)",
    [
        part("(a)",
             "Identify Skyway's DOMINANT STRATEGY. Justify by comparing payoffs.",
             1,
             [(1, "LOW price: if Highflyer plays HIGH, Skyway earns 70 vs 50 (LOW better); if Highflyer plays LOW, Skyway earns 30 vs 10 (LOW better) — LOW dominates",
                  ["dominant strategy", "LOW", "70 > 50", "30 > 10", "LOW better in both"])],
             "Skyway's dominant strategy is LOW: regardless of Highflyer's choice, Skyway earns more by playing LOW (70 > 50 if Highflyer HIGH; 30 > 10 if Highflyer LOW)."),
        part("(b)",
             "Identify the NASH EQUILIBRIUM of this one-shot game.",
             1,
             [(1, "(LOW, LOW) with payoffs ($30M, $30M) — both firms playing their dominant strategy",
                  ["LOW, LOW", "Nash equilibrium", "(30, 30)", "$30M each", "dominant strategy equilibrium"])],
             "Nash equilibrium = (LOW, LOW) with payoffs ($30M, $30M). Both firms play their dominant LOW strategy; neither can improve by unilaterally switching."),
        part("(c)",
             "Explain why this outcome is a PRISONER'S DILEMMA.",
             1,
             [(1, "Both firms would be better off COOPERATING at (HIGH, HIGH) = ($50M, $50M), but rational individual choice traps them at the inferior ($30M, $30M)",
                  ["both better off", "(HIGH, HIGH)", "$50M each", "rational individual", "trap", "inferior outcome", "prisoner's dilemma"])],
             "Prisoner's dilemma: cooperation at (HIGH, HIGH) yields $50M each — Pareto superior to ($30M, $30M). But each firm has an individual incentive to defect (LOW), so the dominant-strategy equilibrium is inferior to the cooperative outcome."),
        part("(d)",
             "Identify ONE real-world cartel or oligopoly enforcement case that illustrates this dynamic.",
             1,
             [(1, "Provides a real example (OPEC quota cheating since 1973; 2008-2014 LIBOR-rigging banks fined $9B+; 2024 generic-drug price-fixing settlements; airline fuel-surcharge collusion 2007 fines exceeded $1.7B; vitamins cartel Hoffmann-La Roche fined $500M in 1999)",
                  ["OPEC", "cheating", "LIBOR", "$9B", "generic drug", "airline collusion", "fuel surcharge", "$1.7B", "vitamins cartel", "Hoffmann-La Roche", "$500M"])],
             "OPEC members regularly cheat on production quotas (the dominant individual strategy) even after agreeing collectively to restrict output — the classic real-world prisoner's dilemma. The 1996-99 vitamins cartel (Hoffmann-La Roche, BASF) collapsed and Hoffmann-La Roche paid a $500M U.S. fine in 1999 — the largest antitrust criminal fine at the time."),
    ],
    5, "~12 minutes",
)


HEADER = '''/**
 * AP Microeconomics — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-micro-frqs.py
 *
 * Mirrors College Board AP Micro exam: long FRQ (~25 min, 10 pts) +
 * short FRQs (~12 min, 5 pts). Graph descriptions, calculations, and
 * named real-world examples embedded in prompts and rubrics.
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface MicroFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

'''

FOOTER = '''

export const apMicroFRQs: MicroFRQ[] = [...longFRQs, ...shortFRQs]

export function getApMicroFRQs(): MicroFRQ[] {
  return apMicroFRQs
}

export function getLongFRQs(): MicroFRQ[] {
  return longFRQs
}

export function getShortFRQs(): MicroFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: MicroFRQ[]
  short: MicroFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '60 min',
  }
}
'''


def main():
    long_block = "const longFRQs: MicroFRQ[] = [\n" + ",\n".join([LONG_1, LONG_2, LONG_3, LONG_4]) + "\n]\n"
    short_block = "const shortFRQs: MicroFRQ[] = [\n" + ",\n".join([SHORT_1, SHORT_2, SHORT_3, SHORT_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + long_block + "\n" + short_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
