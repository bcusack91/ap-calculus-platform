#!/usr/bin/env python3
"""
Rewrite src/data/ap-macro-frq/questions.ts with substantive AP-style prompts.
4 long FRQs + 4 short FRQs covering all 6 AP Macroeconomics units.
"""
from __future__ import annotations
import os, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-macro-frq", "questions.ts")

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
# LONG FRQs — ~25 minutes, 10 points each (CB Macro Long FRQ format)
# ============================================================================

LONG_1 = frq(
    "macro-long-1", "long", 3, "Recession, AD-AS, and Discretionary Fiscal Policy",
    "The economy of Atlantia is producing at $18 trillion in real GDP, while full-employment real GDP is $20 trillion. The unemployment rate is 8.5% and the natural rate is 4.5%. Inflation is 1%. The marginal propensity to consume (MPC) is 0.8.",
    [
        part("(a)",
             "Draw a correctly labeled AD-AS graph for Atlantia. Show short-run equilibrium, full-employment output (Y_f), and identify the type of output gap.",
             3,
             [
                 (1, "Correctly labels axes (Price Level on Y-axis, Real GDP on X-axis) and shows downward-sloping AD, upward-sloping SRAS, vertical LRAS at Y_f",
                     ["price level", "real GDP", "AD", "SRAS", "LRAS", "downward sloping", "upward sloping", "vertical"]),
                 (1, "Shows short-run equilibrium where AD intersects SRAS at $18T, to the LEFT of LRAS at $20T",
                     ["equilibrium", "intersection", "left of LRAS", "below full employment", "$18", "$20"]),
                 (1, "Identifies the gap as a RECESSIONARY (or contractionary) gap of $2 trillion",
                     ["recessionary gap", "contractionary gap", "$2 trillion", "below potential", "negative"]),
             ],
             "On the graph, AD intersects SRAS at Y=$18T < Y_f=$20T (LRAS), creating a recessionary gap of $2T. Cyclical unemployment is 8.5% − 4.5% = 4 percentage points above the natural rate."),
        part("(b)",
             "Calculate the simple spending multiplier and the minimum increase in government spending needed to close the recessionary gap. Show your work.",
             2,
             [
                 (1, "Correctly calculates spending multiplier = 1 / (1 − MPC) = 1 / (1 − 0.8) = 5",
                     ["multiplier", "1/(1-MPC)", "1/0.2", "= 5", "spending multiplier"]),
                 (1, "Calculates ΔG = Gap / Multiplier = $2T / 5 = $400 billion",
                     ["$400 billion", "$0.4 trillion", "gap divided", "ΔG", "minimum"]),
             ],
             "Spending multiplier = 1/(1−MPC) = 1/(1−0.8) = 1/0.2 = 5. Minimum ΔG = $2T / 5 = $400 billion."),
        part("(c)",
             "If the government instead used a tax CUT to close the gap, would the required tax cut be larger, smaller, or the same as the answer in (b)? Explain and calculate the required tax cut.",
             2,
             [
                 (1, "States the tax cut must be LARGER because the tax multiplier (-MPC/(1-MPC) = -4) is smaller in absolute value than the spending multiplier",
                     ["larger", "tax multiplier", "MPC/(1-MPC)", "4", "smaller multiplier", "savings leakage", "first round"]),
                 (1, "Calculates: ΔT = -$2T / 4 = -$500 billion (a $500B tax CUT)",
                     ["$500 billion", "$0.5 trillion", "tax cut"]),
             ],
             "The tax cut must be LARGER because part of the first-round tax cut is saved (1−MPC=0.2), so only MPC × ΔT = 0.8 × ΔT enters spending. Tax multiplier = MPC/(1−MPC) = 0.8/0.2 = 4 in absolute value, so required tax cut = $2T/4 = $500 billion."),
        part("(d)",
             "Show the effect of the fiscal stimulus on your AD-AS graph from (a). Indicate the new short-run equilibrium price level and output.",
             1,
             [
                 (1, "Shifts AD rightward to AD2 to intersect SRAS at Y_f=$20T, with a HIGHER price level than the original equilibrium",
                     ["AD shifts right", "AD2", "intersect at Y_f", "$20T", "higher price level", "PL2"]),
             ],
             "AD shifts rightward by $2T to AD2, restoring equilibrium at Y_f = $20T with a higher price level (PL2 > PL1) due to the upward-sloping SRAS."),
        part("(e)",
             "Explain ONE potential long-run consequence if the fiscal stimulus is financed by issuing new government bonds rather than by raising taxes.",
             2,
             [
                 (1, "Identifies the crowding-out effect via the loanable funds market (higher demand for loanable funds → higher real interest rate)",
                     ["crowding out", "loanable funds", "demand for loanable funds", "interest rate", "real interest rate", "deficit"]),
                 (1, "Explains the consequence (lower private investment → slower long-run growth / smaller capital stock / LRAS shifts left or grows slower)",
                     ["private investment", "lower investment", "slower growth", "LRAS", "capital stock", "long run"]),
             ],
             "Bond-financed deficits increase the demand for loanable funds, raising the real interest rate and crowding out private investment (I↓). Lower investment means slower capital accumulation, so LRAS grows more slowly than it otherwise would — reducing long-run potential output."),
    ],
    10, "~25 minutes",
)

LONG_2 = frq(
    "macro-long-2", "long", 4, "Money Market, Monetary Policy, and the Loanable Funds Market",
    "The U.S. economy is currently producing above full-employment real GDP. The Federal Reserve is concerned about rising inflation, currently 5%, while the Fed's target is 2%.",
    [
        part("(a)",
             "Draw a correctly labeled money market graph showing the current nominal interest rate (i_1).",
             2,
             [
                 (1, "Correctly labels axes (Nominal Interest Rate on Y, Quantity of Money on X) with vertical money supply (MS) controlled by the Fed and downward-sloping money demand (MD)",
                     ["nominal interest rate", "quantity of money", "MS", "MD", "vertical", "downward sloping"]),
                 (1, "Shows equilibrium nominal interest rate i_1 where MS intersects MD",
                     ["equilibrium", "i_1", "intersection", "interest rate"]),
             ],
             "Money market: vertical MS (Fed-controlled), downward-sloping MD (opportunity cost of holding money rises as interest rate rises). Equilibrium nominal interest rate i_1 at MS ∩ MD."),
        part("(b)",
             "Identify ONE specific open-market operation the Fed could conduct to address the inflation problem, and show its effect on your money market graph.",
             2,
             [
                 (1, "Identifies open-market SALE of U.S. Treasury securities (or 'sell bonds')",
                     ["open market sale", "sell bonds", "sell securities", "sell Treasuries", "contractionary"]),
                 (1, "Shows MS shifting LEFT, raising the nominal interest rate to i_2 > i_1",
                     ["MS shifts left", "MS2", "higher interest rate", "i_2", "i_2 > i_1"]),
             ],
             "An open-market SALE of Treasuries by the Fed drains reserves from the banking system, shifting MS leftward to MS2. The new equilibrium nominal interest rate i_2 > i_1."),
        part("(c)",
             "Using a correctly labeled loanable funds market graph, show the effect of the Fed's action in (b) on the real interest rate and quantity of loanable funds.",
             2,
             [
                 (1, "Correctly labels loanable funds market (Real Interest Rate on Y, Quantity of Loanable Funds on X) with upward-sloping supply (S_LF) and downward-sloping demand (D_LF)",
                     ["real interest rate", "loanable funds", "S_LF", "D_LF", "supply of loanable funds", "demand for loanable funds"]),
                 (1, "Shows S_LF shifting LEFT (or D_LF context), raising real interest rate and lowering quantity of loanable funds",
                     ["S_LF shifts left", "higher real interest rate", "lower quantity", "Q_LF decreases"]),
             ],
             "Fed contraction reduces bank reserves, shifting S_LF left. Real interest rate rises and quantity of loanable funds falls."),
        part("(d)",
             "Explain how the change in the real interest rate from (c) affects each of the following in the SHORT RUN:",
             3,
             [
                 (1, "Investment spending: DECREASES (higher real interest rate → cost of borrowing rises → fewer projects have NPV > 0)",
                     ["investment", "decreases", "I decreases", "cost of borrowing", "NPV", "fewer projects"]),
                 (1, "Aggregate demand: SHIFTS LEFT (lower I → lower AD via interest-rate effect on AD)",
                     ["AD shifts left", "lower AD", "AD decreases", "interest rate effect"]),
                 (1, "Price level and real GDP in the short run: BOTH DECREASE (movement along SRAS as AD shifts left)",
                     ["price level decreases", "lower PL", "real GDP decreases", "lower output", "disinflation"]),
             ],
             "Higher real interest rate → I decreases (NPV of projects falls) → AD shifts left → both price level and real GDP fall in the short run; the inflation rate moderates toward the Fed's 2% target."),
        part("(e)",
             "Explain ONE reason a country with a floating exchange rate would expect its CURRENCY TO APPRECIATE following the Fed's contractionary action.",
             1,
             [
                 (1, "Explains: higher U.S. real interest rate → increased foreign demand for USD-denominated financial assets → higher demand for dollars in FX market → USD appreciation",
                     ["appreciate", "demand for dollars", "foreign", "financial account", "capital inflow", "interest rate differential", "appreciation"]),
             ],
             "Higher U.S. real interest rates attract foreign financial capital seeking higher returns. Foreign demand for U.S. Treasuries requires buying dollars in the FX market, increasing demand for USD and causing the dollar to appreciate."),
    ],
    10, "~25 minutes",
)

LONG_3 = frq(
    "macro-long-3", "long", 5, "Long-Run Growth, Loanable Funds, and the Phillips Curve",
    "Country Bondoria has been at long-run equilibrium with output Y_f = $10 trillion, inflation 2%, and unemployment at the natural rate of 5%. The government enacts a permanent increase in infrastructure spending of $200 billion per year, financed entirely by issuing new government bonds.",
    [
        part("(a)",
             "On a correctly labeled loanable funds market graph, show the effect of the bond-financed spending on the real interest rate and quantity of loanable funds.",
             2,
             [
                 (1, "Correctly labels graph and shows D_LF shifting RIGHT due to higher government borrowing",
                     ["loanable funds", "D_LF shifts right", "higher demand", "government borrowing", "bond issuance"]),
                 (1, "Identifies higher real interest rate (r_2 > r_1) and higher equilibrium quantity",
                     ["real interest rate", "r_2 > r_1", "higher", "quantity of loanable funds increases"]),
             ],
             "Government bond issuance shifts demand for loanable funds rightward (D_LF → D_LF2). New equilibrium has a higher real interest rate r_2 and a higher equilibrium quantity (though private borrowing has been crowded out)."),
        part("(b)",
             "Explain the crowding-out effect on private investment, and identify ONE long-run consequence for the LRAS curve.",
             2,
             [
                 (1, "Explains crowding out: higher real interest rate → reduces private investment (firms borrow less for capital projects)",
                     ["crowding out", "private investment", "lower investment", "I decreases", "higher interest rate"]),
                 (1, "Identifies long-run consequence: smaller capital stock → LRAS grows more slowly than it otherwise would",
                     ["LRAS", "capital stock", "grows slower", "potential output", "long run", "growth"]),
             ],
             "The higher real interest rate raises the cost of private capital, so firms undertake fewer investment projects (Q_private↓). Less investment means slower accumulation of physical capital — LRAS grows more slowly over time, lowering long-run potential output."),
        part("(c)",
             "Suppose the new infrastructure raises the productivity of private capital. On a correctly labeled AD-AS graph, show the LONG-RUN effect on the price level and real GDP, assuming the productivity effect dominates the crowding-out effect.",
             2,
             [
                 (1, "Shows LRAS shifting RIGHT (productivity gain dominates crowding out)",
                     ["LRAS shifts right", "LRAS2", "higher potential", "productivity"]),
                 (1, "Identifies new long-run equilibrium with higher real GDP and lower price level (or holding AD constant) — economic growth",
                     ["higher real GDP", "Y2 > Y_f", "lower price level", "economic growth"]),
             ],
             "If the productivity effect of infrastructure dominates crowding out, LRAS shifts rightward (LRAS → LRAS2). With AD constant, the new long-run equilibrium has higher real GDP and a lower price level — sustainable economic growth."),
        part("(d)",
             "On a correctly labeled short-run Phillips curve (SRPC) and long-run Phillips curve (LRPC) graph, show the initial long-run equilibrium at the natural rate of unemployment.",
             1,
             [
                 (1, "Correctly labels graph (Inflation rate on Y, Unemployment rate on X), shows downward-sloping SRPC, vertical LRPC at NRU=5%, and equilibrium where SRPC ∩ LRPC at 2% inflation and 5% unemployment",
                     ["inflation rate", "unemployment rate", "SRPC", "LRPC", "vertical", "natural rate", "5%", "2%"]),
             ],
             "SRPC slopes downward (inverse short-run trade-off), LRPC is vertical at NRU=5%. Initial equilibrium: SRPC ∩ LRPC at u=5%, π=2%."),
        part("(e)",
             "Suppose a sudden negative supply shock (e.g., an oil price spike) hits the economy. On your Phillips curve graph from (d), show the short-run effect, and explain why this creates a policy DILEMMA for the central bank.",
             3,
             [
                 (1, "Shows SRPC shifting RIGHT/UPWARD (SRPC → SRPC2) creating stagflation: higher inflation AND higher unemployment",
                     ["SRPC shifts right", "SRPC2", "stagflation", "higher inflation", "higher unemployment", "supply shock"]),
                 (1, "Identifies the dilemma: contractionary policy reduces inflation but raises unemployment further; expansionary policy reduces unemployment but worsens inflation",
                     ["dilemma", "trade-off", "contractionary worsens unemployment", "expansionary worsens inflation", "no dual mandate"]),
                 (1, "Provides a concrete historical example (1973-74 OPEC oil embargo, 1979 Iranian Revolution oil shock, 2022 Russia-Ukraine energy spike, Volcker disinflation 1980-82)",
                     ["1973", "OPEC", "oil embargo", "1979", "Iranian Revolution", "2022", "Volcker", "1980", "1982", "stagflation"]),
             ],
             "A negative supply shock shifts SRPC up/right (SRPC2), producing stagflation. The dilemma: tightening to fight inflation deepens the recession (Volcker 1980-82 raised the federal funds rate above 19%, causing the unemployment rate to peak at 10.8% in 1982); easing to fight unemployment entrenches inflation expectations. The 1973-74 OPEC embargo and 1979 Iranian Revolution oil shock both produced this trade-off."),
    ],
    10, "~25 minutes",
)

LONG_4 = frq(
    "macro-long-4", "long", 6, "Open Economy: FX Market, Trade, and Balance of Payments",
    "Mexico (whose currency is the peso, MXN) and the United States (whose currency is the dollar, USD) trade with each other under floating exchange rates. The Federal Reserve unexpectedly raises U.S. real interest rates well above Mexican real interest rates.",
    [
        part("(a)",
             "Draw a correctly labeled FX market graph for the U.S. dollar (price = MXN per USD on Y-axis, quantity of dollars on X-axis). Show the initial equilibrium exchange rate.",
             2,
             [
                 (1, "Correctly labels axes (MXN/USD on Y-axis, Quantity of USD on X-axis) with downward-sloping demand for USD (D_$) and upward-sloping supply of USD (S_$)",
                     ["MXN/USD", "quantity of dollars", "demand for dollars", "supply of dollars", "downward", "upward"]),
                 (1, "Shows initial equilibrium exchange rate E_1 at intersection",
                     ["equilibrium", "E_1", "intersection"]),
             ],
             "FX market for USD: Y-axis = MXN per USD (price of dollars in pesos), X-axis = quantity of USD. D_$ slopes down, S_$ slopes up. Equilibrium exchange rate E_1 at intersection."),
        part("(b)",
             "Show on your graph the effect of higher U.S. real interest rates on the FX market for the dollar.",
             2,
             [
                 (1, "Shows D_$ shifting RIGHT (Mexican investors demand more dollars to buy higher-yielding U.S. financial assets)",
                     ["demand for dollars", "shifts right", "D_$ increases", "financial account", "Mexican investors"]),
                 (1, "Identifies dollar APPRECIATION (E_2 > E_1, more pesos per dollar)",
                     ["appreciation", "appreciate", "E_2 > E_1", "more pesos per dollar", "stronger dollar"]),
             ],
             "Higher U.S. real interest rates make U.S. financial assets more attractive to Mexican investors. They demand more USD on the FX market, shifting D_$ right. The dollar appreciates from E_1 to E_2 (more pesos per dollar)."),
        part("(c)",
             "Explain how the dollar appreciation in (b) affects each of the following:",
             3,
             [
                 (1, "U.S. exports: DECREASE (U.S. goods more expensive for Mexican buyers)",
                     ["exports decrease", "X decreases", "more expensive", "less competitive"]),
                 (1, "U.S. imports: INCREASE (Mexican goods cheaper for U.S. buyers)",
                     ["imports increase", "M increases", "cheaper imports", "more attractive"]),
                 (1, "U.S. current account balance: WORSENS / becomes more negative (X − M falls)",
                     ["current account", "deficit", "worsens", "more negative", "trade deficit", "X minus M"]),
             ],
             "Stronger USD: U.S. exports become more expensive abroad (Mexican buyers need more pesos per dollar of U.S. goods → exports fall) and U.S. imports become cheaper (U.S. buyers get more Mexican pesos per dollar → imports rise). Current account balance (≈ X − M) worsens."),
        part("(d)",
             "Identify the effect on the U.S. FINANCIAL ACCOUNT and explain why the overall balance of payments still nets to zero.",
             2,
             [
                 (1, "Identifies financial account moves toward SURPLUS (foreign capital inflows to buy U.S. assets)",
                     ["financial account", "surplus", "capital inflow", "foreign investment", "buying U.S. assets"]),
                 (1, "Explains BOP identity: Current Account + Financial Account ≈ 0 — the financial account surplus offsets the current account deficit",
                     ["balance of payments", "BOP", "identity", "sums to zero", "offset", "mirror image"]),
             ],
             "Foreign investors buying U.S. Treasuries causes a financial account SURPLUS. By the BOP accounting identity, Current Account + Financial Account ≈ 0, so the financial account surplus offsets (is the mirror image of) the current account deficit."),
        part("(e)",
             "Explain ONE specific real-world example (1980–2024) of how interest-rate-driven currency appreciation affected an economy's trade balance.",
             1,
             [
                 (1, "Provides a specific example (Volcker dollar appreciation 1980-85 → Plaza Accord 1985; ECB-Fed divergence 2014-15 USD strength; Fed 2022 hiking cycle USD index up ~15% in 2022)",
                     ["Volcker", "1980", "Plaza Accord", "1985", "1985", "ECB", "2022", "DXY", "dollar index", "Fed hiking"]),
             ],
             "After Paul Volcker's 1980-82 disinflation pushed the federal funds rate above 19%, the trade-weighted USD appreciated about 50% by 1985, widening the U.S. trade deficit and prompting the September 1985 Plaza Accord (U.S., Japan, West Germany, France, U.K.) to coordinate dollar depreciation."),
    ],
    10, "~25 minutes",
)


# ============================================================================
# SHORT FRQs — ~12 minutes, 5 points each
# ============================================================================

SHORT_1 = frq(
    "macro-short-1", "short", 4, "Money Multiplier and Bank Balance Sheet",
    "A central bank requires commercial banks to hold reserves equal to 10% of deposits. Bank A receives a new deposit of $5,000.",
    [
        part("(a)",
             "Calculate the maximum amount Bank A can lend from this new deposit.",
             1,
             [(1, "$4,500 (= $5,000 × 0.90, since 10% must be held as required reserves)",
                  ["$4,500", "4500", "0.90", "0.9", "$5,000 × 0.9", "excess reserves"])],
             "Required reserves = 10% × $5,000 = $500. Excess reserves available to lend = $5,000 − $500 = $4,500."),
        part("(b)",
             "Calculate the simple money multiplier and the maximum total change in the money supply if all loans are redeposited and all banks lend out their excess reserves.",
             2,
             [
                 (1, "Money multiplier = 1 / required reserve ratio = 1 / 0.10 = 10",
                     ["money multiplier", "1/RR", "1/0.10", "= 10", "ten"]),
                 (1, "Maximum change in money supply = $5,000 × 10 = $50,000 (or, more precisely, change in loans × multiplier = $4,500 × 10 = $45,000 with original deposit already counted)",
                     ["$50,000", "$45,000", "money supply", "total change"]),
             ],
             "Money multiplier = 1/RR = 1/0.10 = 10. Maximum change in money supply from a $5,000 deposit cascade = $5,000 × 10 = $50,000 (or $4,500 × 10 = $45,000 in newly created loans plus the original $5,000 deposit = $50,000)."),
        part("(c)",
             "If the central bank lowers the required reserve ratio from 10% to 5%, will the money multiplier increase, decrease, or remain unchanged? Calculate the new multiplier.",
             1,
             [(1, "INCREASES; new multiplier = 1/0.05 = 20",
                  ["increases", "1/0.05", "= 20", "twenty", "larger multiplier"])],
             "A lower reserve requirement increases the multiplier: 1/0.05 = 20. Each dollar of new reserves now supports up to $20 of new money."),
        part("(d)",
             "Identify ONE specific real-world reason the actual money multiplier in the United States has been smaller than this textbook calculation since 2008.",
             1,
             [(1, "Identifies a real-world reason (banks hold large excess reserves due to interest on reserves IORB since 2008; abundant reserves regime; cash leakages; lower demand for loans post-2008)",
                  ["interest on reserves", "IORB", "IOER", "excess reserves", "2008", "abundant reserves", "Fed pays interest", "cash leakages", "ample reserves regime"])],
             "Since the Fed began paying Interest on Reserve Balances (IORB) in October 2008, banks have held trillions in excess reserves rather than lending them out, dramatically lowering the actual money multiplier and breaking the textbook 1/RR relationship."),
    ],
    5, "~12 minutes",
)

SHORT_2 = frq(
    "macro-short-2", "short", 5, "Phillips Curve and Inflation Expectations",
    "An economy is currently at its long-run equilibrium with the natural rate of unemployment at 4.5% and an inflation rate of 2%.",
    [
        part("(a)",
             "Draw a correctly labeled graph of the short-run Phillips curve (SRPC) and long-run Phillips curve (LRPC). Show the initial equilibrium.",
             1,
             [(1, "Correctly labels graph (inflation on Y, unemployment on X), downward-sloping SRPC, vertical LRPC at u=4.5%, equilibrium at u=4.5%, π=2%",
                  ["inflation", "unemployment", "SRPC", "LRPC", "vertical", "4.5%", "2%", "natural rate"])],
             "Y-axis: inflation rate. X-axis: unemployment rate. SRPC slopes downward, LRPC is vertical at u=4.5%. Initial equilibrium: SRPC ∩ LRPC at u=4.5%, π=2%."),
        part("(b)",
             "Suppose the central bank conducts an unexpected expansionary monetary policy. Show on your graph the SHORT-RUN effect on unemployment and inflation.",
             2,
             [
                 (1, "Movement ALONG SRPC down/right to point B: lower unemployment (u_B < 4.5%), higher inflation (π_B > 2%)",
                     ["movement along SRPC", "lower unemployment", "higher inflation", "down and right", "point B"]),
                 (1, "Identifies the source of the short-run trade-off: workers' inflation expectations have not yet adjusted (sticky wages, money illusion)",
                     ["expectations", "sticky wages", "money illusion", "unanticipated", "surprise"]),
             ],
             "Unanticipated expansion moves the economy DOWN-RIGHT along SRPC to point B: lower unemployment but higher inflation. The trade-off exists because workers' inflation expectations have not yet adjusted — real wages temporarily fall, encouraging firms to hire more."),
        part("(c)",
             "Explain what happens in the LONG RUN as workers and firms revise their inflation expectations.",
             1,
             [(1, "SRPC shifts UPWARD (SRPC → SRPC2); economy returns to LRPC at u=4.5% but at a higher inflation rate (π_C > π_B)",
                  ["SRPC shifts up", "SRPC2", "returns to LRPC", "higher inflation", "natural rate", "expectations adjust"])],
             "As workers learn the new inflation rate, they renegotiate higher nominal wages. SRPC shifts upward (SRPC2). The economy returns to u=4.5% along LRPC, but at a permanently higher inflation rate — the long-run Phillips curve is vertical."),
        part("(d)",
             "Provide ONE specific historical example of a U.S. monetary policy episode that produced this dynamic.",
             1,
             [(1, "Identifies a specific episode (1965-79 Great Inflation; Burns Fed accommodation 1971-78; Volcker disinflation 1980-82; 2021-2024 post-COVID inflation)",
                  ["Great Inflation", "1965", "1979", "Burns", "1971", "Volcker", "1980", "1982", "post-COVID", "2021", "2022"])],
             "The Burns Fed's accommodative policy (1971-1978) successfully lowered unemployment in the short run but ratcheted U.S. inflation expectations upward — by 1980, headline CPI inflation reached 14.8%, requiring Volcker's 1980-82 disinflation (federal funds rate >19%, unemployment peak 10.8%) to re-anchor expectations."),
    ],
    5, "~12 minutes",
)

SHORT_3 = frq(
    "macro-short-3", "short", 6, "Comparative Advantage and Specialization",
    "Two countries, Alpha and Beta, each have 100 labor hours. Their per-hour outputs are below.\n\n"
    "| Country | Wheat (bushels/hr) | Cloth (yards/hr) |\n"
    "|---------|---------------------|------------------|\n"
    "| Alpha   | 4                   | 2                |\n"
    "| Beta    | 1                   | 3                |",
    [
        part("(a)",
             "Calculate Alpha's opportunity cost of producing 1 bushel of wheat. Show your work.",
             1,
             [(1, "Alpha's opp. cost of 1 wheat = 2/4 = 0.5 cloth (give up 0.5 yards of cloth per bushel of wheat)",
                  ["0.5", "1/2", "0.5 cloth", "2/4", "opportunity cost", "Alpha"])],
             "Alpha can produce either 4 wheat or 2 cloth in one hour, so the opportunity cost of 1 wheat = 2/4 = 0.5 cloth."),
        part("(b)",
             "Identify which country has the COMPARATIVE ADVANTAGE in each good. Justify with opportunity cost.",
             2,
             [
                 (1, "Alpha has comparative advantage in WHEAT (lower opp. cost: 0.5 cloth/wheat vs. Beta's 3 cloth/wheat)",
                     ["Alpha", "wheat", "lower opportunity cost", "0.5", "comparative advantage"]),
                 (1, "Beta has comparative advantage in CLOTH (lower opp. cost: 1/3 wheat/cloth vs. Alpha's 2 wheat/cloth)",
                     ["Beta", "cloth", "lower opportunity cost", "1/3", "comparative advantage"]),
             ],
             "Alpha gives up 0.5 cloth per wheat; Beta gives up 3 cloth per wheat → Alpha has CA in wheat. Beta gives up 1/3 wheat per cloth; Alpha gives up 2 wheat per cloth → Beta has CA in cloth."),
        part("(c)",
             "Identify a mutually beneficial terms-of-trade ratio for 1 bushel of wheat in cloth.",
             1,
             [(1, "Any ratio strictly between Alpha's domestic OC (0.5) and Beta's domestic OC (3) — e.g., 1 wheat = 1.5 cloth",
                  ["between 0.5 and 3", "1.5", "1 cloth", "2 cloth", "mutually beneficial", "terms of trade"])],
             "Trade ratio must satisfy 0.5 cloth < 1 wheat < 3 cloth. For example, 1 wheat = 1.5 cloth makes Alpha better off (gets 1.5 cloth instead of 0.5 cloth per wheat) AND Beta better off (gives up 1.5 cloth instead of 3 cloth per wheat)."),
        part("(d)",
             "Explain ONE specific reason absolute advantage is NOT a useful guide to trade gains, even though Alpha has absolute advantage in wheat.",
             1,
             [(1, "Explains: trade gains depend on relative (opportunity) cost differences. Even if one country is absolutely more productive in everything, both gain from specialization based on comparative advantage (Ricardo 1817)",
                  ["relative cost", "Ricardo", "1817", "absolute advantage", "comparative advantage", "specialization", "gains from trade"])],
             "Trade gains depend on relative opportunity costs, not absolute productivity. David Ricardo's 1817 *Principles of Political Economy* showed that even if one country is more productive in everything (absolute advantage in all goods), both still gain by specializing in the good in which their opportunity cost is lower."),
    ],
    5, "~12 minutes",
)

SHORT_4 = frq(
    "macro-short-4", "short", 2, "Real vs. Nominal GDP and the GDP Deflator",
    "Country Lumosa produces only two goods: bread and books. Use the data below to answer the prompt.\n\n"
    "| Year | Bread Q | Bread P | Books Q | Books P |\n"
    "|------|---------|---------|---------|---------|\n"
    "| 2024 (base) | 100 | $2 | 50 | $10 |\n"
    "| 2025        | 110 | $3 | 55 | $12 |",
    [
        part("(a)",
             "Calculate NOMINAL GDP for 2024 and 2025. Show your work.",
             1,
             [(1, "2024 nominal GDP = (100×$2) + (50×$10) = $200 + $500 = $700; 2025 nominal GDP = (110×$3) + (55×$12) = $330 + $660 = $990",
                  ["$700", "$990", "100 × 2", "50 × 10", "110 × 3", "55 × 12", "200 + 500", "330 + 660"])],
             "2024 nominal GDP = (100 × $2) + (50 × $10) = $200 + $500 = $700. 2025 nominal GDP = (110 × $3) + (55 × $12) = $330 + $660 = $990."),
        part("(b)",
             "Calculate REAL GDP for 2025 in 2024 base-year prices, and the percentage growth in real GDP from 2024 to 2025.",
             2,
             [
                 (1, "Real GDP 2025 = (110×$2) + (55×$10) = $220 + $550 = $770",
                     ["$770", "real GDP", "110 × 2", "55 × 10", "220 + 550", "base year prices"]),
                 (1, "Real growth = ($770 − $700) / $700 = 10%",
                     ["10%", "0.10", "real growth", "($770 - $700)/$700", "70/700"]),
             ],
             "Real GDP 2025 (in 2024 prices) = (110 × $2) + (55 × $10) = $220 + $550 = $770. Real growth = ($770 − $700)/$700 = $70/$700 = 10%."),
        part("(c)",
             "Calculate the GDP deflator for 2025 (with 2024 = 100) and the inflation rate from 2024 to 2025.",
             1,
             [(1, "GDP deflator 2025 = (Nominal/Real) × 100 = ($990/$770) × 100 ≈ 128.6; inflation = (128.6 − 100)/100 = 28.6%",
                  ["128.6", "($990/$770)", "deflator", "28.6%", "inflation", "100"])],
             "GDP deflator 2025 = ($990/$770) × 100 ≈ 128.6. Inflation rate = (128.6 − 100)/100 ≈ 28.6%."),
        part("(d)",
             "Explain ONE reason real GDP, rather than nominal GDP, is the preferred measure of economic growth.",
             1,
             [(1, "Real GDP holds prices constant, so it isolates changes in OUTPUT (volume) from changes in PRICES (inflation)",
                  ["real GDP", "constant prices", "isolates output", "removes inflation", "volume", "purchasing power"])],
             "Real GDP holds prices constant at the base-year level, so changes reflect changes in physical output (and thus living standards), not just changes in the price level. Nominal GDP can rise simply because of inflation, even when output falls."),
    ],
    5, "~12 minutes",
)


HEADER = '''/**
 * AP Macroeconomics — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-macro-frqs.py
 *
 * Format mirrors College Board AP Macro exam: long FRQ (~25 min, 10 pts) +
 * short FRQs (~12 min, 5 pts). Graph descriptions and numerical work are
 * embedded in prompts and rubrics.
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

export interface MacroFRQ {
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

export const apMacroFRQs: MacroFRQ[] = [...longFRQs, ...shortFRQs]

export function getApMacroFRQs(): MacroFRQ[] {
  return apMacroFRQs
}

export function getLongFRQs(): MacroFRQ[] {
  return longFRQs
}

export function getShortFRQs(): MacroFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: MacroFRQ[]
  short: MacroFRQ[]
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

  const selectedLong = shuffle(longFRQs).slice(0, 1)
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
    long_block = "const longFRQs: MacroFRQ[] = [\n" + ",\n".join([LONG_1, LONG_2, LONG_3, LONG_4]) + "\n]\n"
    short_block = "const shortFRQs: MacroFRQ[] = [\n" + ",\n".join([SHORT_1, SHORT_2, SHORT_3, SHORT_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + long_block + "\n" + short_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
