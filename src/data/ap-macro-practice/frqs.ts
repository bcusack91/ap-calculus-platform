import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Macroeconomics — Free Response.
 * Mirrors official CB exam structure:
 *   FRQ 1 — Long FRQ (multi-part, ~10 pts)
 *   FRQ 2 — Short FRQ (~5 pts)
 *   FRQ 3 — Short FRQ (~5 pts)
 *
 * Modeled as SAQItems with multi-part rubrics. Each part is graded
 * on a 1-point rubric the student checks off after submitting.
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — LONG ---------- */
  {
    type: 'saq',
    topic: 'unit-3-national-income-price',
    prompt:
      'FRQ 1 — Long FRQ (10 parts).\n\n' +
      'Assume the economy of the country of Westland is currently in a recession with a recessionary output gap. The marginal propensity to consume (MPC) in Westland is 0.75 and the required reserve ratio is 10%. The central bank of Westland (the Reserve Bank) targets the short-term nominal interest rate.\n\n' +
      'Use this scenario to answer parts (A) through (G) below. Where indicated, draw a fully-labeled graph in your response.',
    parts: [
      {
        letter: 'A',
        question: 'Draw a correctly labeled graph of long-run aggregate supply (LRAS), short-run aggregate supply (SRAS), and aggregate demand (AD) for Westland. Show: (i) current short-run equilibrium price level (PL₁) and real GDP (Y₁), and (ii) the full-employment output (Yₑ).',
        rubric: [
          { id: 'a1', label: '1 pt — Correctly labeled axes (PL on y, Real GDP on x), AD downward sloping, SRAS upward sloping, LRAS vertical', description: 'Axes must be labeled (Price Level, Real GDP). All three curves must be present and correctly shaped.' },
          { id: 'a2', label: '1 pt — Y₁ shown to the LEFT of Yₑ (recessionary gap) at the SRAS-AD intersection, with PL₁ identified', description: 'A recessionary gap must be visually clear: short-run equilibrium output is below LRAS.' },
        ],
      },
      {
        letter: 'B',
        question: 'Identify ONE specific monetary policy action the Reserve Bank could take to address the recessionary gap.',
        rubric: [
          { id: 'b1', label: '1 pt — Specific expansionary monetary action', description: 'Acceptable: open-market PURCHASE of government bonds; LOWER the discount rate; LOWER the reserve requirement; lower the policy/short-term interest rate target.' },
        ],
      },
      {
        letter: 'C',
        question: 'Using a correctly labeled graph of the money market, show how the action you identified in part (B) affects the nominal interest rate. Label the original equilibrium (i₁) and the new equilibrium (i₂).',
        rubric: [
          { id: 'c1', label: '1 pt — Correctly labeled money market (axes: nominal interest rate i; quantity of money M)', description: 'Axes labeled, MD downward sloping, MS vertical.' },
          { id: 'c2', label: '1 pt — Money supply shifts RIGHT and i₂ < i₁ shown', description: 'New equilibrium clearly to the right with a lower nominal interest rate.' },
        ],
      },
      {
        letter: 'D',
        question: 'Explain how the change in the nominal interest rate from part (C) affects investment spending in Westland.',
        rubric: [
          { id: 'd1', label: '1 pt — Lower interest rate → increase in investment spending', description: 'Must STATE that lower nominal (and real) interest rates reduce the cost of borrowing, increasing business investment in capital.' },
        ],
      },
      {
        letter: 'E',
        question: 'Calculate the maximum increase in the money supply that could result from a Reserve Bank open-market purchase of $200 million in government bonds, assuming banks hold no excess reserves and no cash leakages. Show your work.',
        rubric: [
          { id: 'e1', label: '1 pt — Correct money multiplier and final answer', description: 'Money multiplier = 1/RR = 1/0.10 = 10. Maximum increase = $200M × 10 = $2,000M (or $2 billion). Work must be shown.' },
        ],
      },
      {
        letter: 'F',
        question: 'Suppose instead that the Westland government uses fiscal policy and increases government spending (G) by $100 million. Calculate the maximum potential change in real GDP, holding all else constant. Show your work.',
        rubric: [
          { id: 'f1', label: '1 pt — Correct spending multiplier and final answer', description: 'Spending multiplier = 1/(1−MPC) = 1/(1−0.75) = 4. Max ΔGDP = 4 × $100M = $400M. Work must be shown.' },
        ],
      },
      {
        letter: 'G',
        question: 'Assume Westland\'s real GDP returns to full employment after the Reserve Bank acts. In the long run, what happens to the price level and to long-run aggregate supply (LRAS) compared to the original equilibrium? Explain.',
        rubric: [
          { id: 'g1', label: '1 pt — Price level rises; LRAS unchanged (vertical at full-employment output)', description: 'Must state that the price level is higher than PL₁ once AD shifts right to close the gap, and that LRAS itself does not shift (it is determined by potential output, not policy).' },
        ],
      },
    ],
    sampleResponse:
      '(A) AD/AS graph: vertical axis = Price Level, horizontal axis = Real GDP. Draw a vertical LRAS at Yₑ, an upward-sloping SRAS, and a downward-sloping AD intersecting SRAS at (Y₁, PL₁) where Y₁ < Yₑ. The horizontal distance Yₑ − Y₁ is the recessionary gap.\n\n' +
      '(B) The Reserve Bank should conduct an open-market PURCHASE of government bonds.\n\n' +
      '(C) Money market graph: axes labeled (i, M). Vertical MS₁ shifts RIGHT to MS₂; downward-sloping MD unchanged. New equilibrium has lower nominal interest rate i₂ < i₁.\n\n' +
      '(D) The lower nominal interest rate reduces real interest rates, lowering the cost of borrowing for firms. This increases business investment spending (a component of AD).\n\n' +
      '(E) Money multiplier = 1 / RR = 1 / 0.10 = 10. Maximum money-supply increase = $200M × 10 = $2,000M ($2 billion).\n\n' +
      '(F) Spending multiplier = 1 / (1 − MPC) = 1 / (1 − 0.75) = 1 / 0.25 = 4. Maximum ΔReal GDP = $100M × 4 = $400M.\n\n' +
      '(G) Once expansionary monetary policy shifts AD right and Westland reaches full-employment output Yₑ, the new equilibrium price level is HIGHER than PL₁. LRAS itself is unchanged — it is determined by the country\'s potential output, not by AD-side policy.',
  },

  /* ---------- FRQ 2 — SHORT (LOANABLE FUNDS / CROWDING OUT) ---------- */
  {
    type: 'saq',
    topic: 'unit-4-financial-sector',
    prompt:
      'FRQ 2 — Short (5 parts).\n\n' +
      'The country of Eastland is operating at full employment. Eastland\'s government decides to permanently increase its deficit-financed government spending in order to expand military programs.',
    parts: [
      {
        letter: 'A',
        question: 'Using a correctly labeled graph of the loanable funds market in Eastland, show the effect of the increased deficit-financed government spending on the real interest rate. Label the original real interest rate (r₁) and the new real interest rate (r₂).',
        rubric: [
          { id: 'a1', label: '1 pt — Correctly labeled loanable funds market (axes: real interest rate; quantity of loanable funds)', description: 'Axes labeled. Demand for loanable funds (D_LF) downward, supply (S_LF) upward.' },
          { id: 'a2', label: '1 pt — D_LF shifts RIGHT and r₂ > r₁', description: 'Higher government borrowing increases demand for loanable funds, raising the real interest rate.' },
        ],
      },
      {
        letter: 'B',
        question: 'Explain the effect of the change in the real interest rate on private investment in Eastland.',
        rubric: [
          { id: 'b1', label: '1 pt — Higher real interest rate → decrease in private investment (crowding out)', description: 'Must explicitly identify the crowding-out mechanism: higher r raises the cost of borrowing for firms, reducing private investment.' },
        ],
      },
      {
        letter: 'C',
        question: 'Explain how the change in the real interest rate will affect the international value of Eastland\'s currency in the foreign exchange market.',
        rubric: [
          { id: 'c1', label: '1 pt — Higher real interest rate → currency appreciation', description: 'Must show: higher r attracts foreign capital → increased demand for Eastland\'s currency → currency APPRECIATES.' },
        ],
      },
      {
        letter: 'D',
        question: 'Based on your answer to part (C), explain the effect on Eastland\'s net exports.',
        rubric: [
          { id: 'd1', label: '1 pt — Currency appreciation → net exports decrease', description: 'Must explain: appreciated currency makes exports more expensive abroad and imports cheaper, decreasing net exports.' },
        ],
      },
      {
        letter: 'E',
        question: 'Given your answers to parts (B) and (D), what is the long-run effect on Eastland\'s economic growth (the country\'s ability to produce goods and services)?',
        rubric: [
          { id: 'e1', label: '1 pt — Long-run growth slows', description: 'Must explain: with both private investment AND net exports falling, capital stock grows more slowly → long-run economic growth (potential GDP growth) is reduced.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Loanable funds market: axes (r, Q_LF). Increased government borrowing shifts D_LF right; r rises from r₁ to r₂.\n\n' +
      '(B) The higher real interest rate raises the cost of borrowing for firms, so private investment spending falls — the crowding-out effect.\n\n' +
      '(C) Higher real interest rates in Eastland attract foreign financial capital. Foreigners must buy Eastland\'s currency to invest, raising demand for the currency and causing it to APPRECIATE.\n\n' +
      '(D) An appreciated currency makes Eastland\'s exports more expensive abroad and imports cheaper at home, so NET EXPORTS decrease.\n\n' +
      '(E) Both reduced private investment (B) and reduced net exports (D) imply slower accumulation of capital and a smaller export-oriented productive base. Long-run economic growth slows — potential GDP grows more slowly than it otherwise would have.',
  },

  /* ---------- FRQ 3 — SHORT (PHILLIPS / INFLATION) ---------- */
  {
    type: 'saq',
    topic: 'unit-5-long-run-stabilization',
    prompt:
      'FRQ 3 — Short (5 parts).\n\n' +
      'The country of Northland is currently in long-run macroeconomic equilibrium. The natural rate of unemployment is 5% and the inflation rate is 2%. The Reserve Bank of Northland conducts an unanticipated, expansionary open-market operation.',
    parts: [
      {
        letter: 'A',
        question: 'Identify the open-market operation the Reserve Bank conducted.',
        rubric: [
          { id: 'a1', label: '1 pt — Open-market PURCHASE of government bonds', description: 'Specifically: a PURCHASE (buying) of government bonds is the expansionary open-market operation.' },
        ],
      },
      {
        letter: 'B',
        question: 'Draw a correctly labeled short-run Phillips curve (SRPC) and long-run Phillips curve (LRPC) for Northland. Label the initial equilibrium point as point X.',
        rubric: [
          { id: 'b1', label: '1 pt — Correctly labeled axes (inflation rate, unemployment rate), downward-sloping SRPC, vertical LRPC at the natural rate of unemployment', description: 'Axes labeled. LRPC vertical at natural rate (5%). SRPC downward-sloping crossing LRPC.' },
          { id: 'b2', label: '1 pt — Point X shown at the intersection of SRPC and LRPC at 2% inflation and 5% unemployment', description: 'Initial equilibrium correctly placed.' },
        ],
      },
      {
        letter: 'C',
        question: 'On your graph from part (B), label as point Y the new SHORT-RUN equilibrium after the unanticipated expansionary monetary policy.',
        rubric: [
          { id: 'c1', label: '1 pt — Point Y is to the LEFT of point X on the SAME SRPC (lower unemployment, higher inflation)', description: 'Movement ALONG the SRPC down and to the left: unemployment below natural rate, inflation above 2%.' },
        ],
      },
      {
        letter: 'D',
        question: 'Explain what happens to the SRPC in the LONG run as workers and firms adjust their inflation expectations to the new, higher inflation rate.',
        rubric: [
          { id: 'd1', label: '1 pt — SRPC shifts UP/right and the economy returns to the LRPC at the natural rate of unemployment with higher inflation', description: 'As expected inflation rises, SRPC shifts up. New long-run equilibrium has the same natural rate of unemployment but a higher inflation rate.' },
        ],
      },
      {
        letter: 'E',
        question: 'Based on your answer to part (D), is there a long-run trade-off between inflation and unemployment in Northland? Explain.',
        rubric: [
          { id: 'e1', label: '1 pt — No long-run trade-off; LRPC is vertical at the natural rate', description: 'Must explicitly state: there is NO long-run trade-off — monetary policy can change inflation but cannot permanently change unemployment from the natural rate.' },
        ],
      },
    ],
    sampleResponse:
      '(A) The Reserve Bank conducted an open-market PURCHASE of government bonds.\n\n' +
      '(B) Phillips curve graph: axes (inflation rate %, unemployment rate %). Vertical LRPC at u = 5%. Downward-sloping SRPC. Point X is at the intersection (5% unemployment, 2% inflation).\n\n' +
      '(C) Point Y lies down-and-to-the-left of X along the same SRPC: unemployment below 5% and inflation above 2%.\n\n' +
      '(D) Once workers and firms revise inflation expectations upward to match the new, higher inflation, the SRPC shifts UP. The economy returns to the LRPC at the natural rate of unemployment (5%) but at a higher long-run inflation rate.\n\n' +
      '(E) There is NO long-run trade-off between inflation and unemployment. The LRPC is vertical at the natural rate, so expansionary monetary policy permanently raises inflation but only temporarily lowers unemployment.',
  },
]
