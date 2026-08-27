import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Macroeconomics — 60 stimulus-based MCQs.
 * Distribution mirrors official CB exam weighting:
 *   Unit 1 — Basic Economic Concepts          (5)
 *   Unit 2 — Economic Indicators / Business Cycle  (9)
 *   Unit 3 — National Income & Price Determination (14)
 *   Unit 4 — Financial Sector                 (12)
 *   Unit 5 — Long-Run Consequences of Stabilization Policies (13)
 *   Unit 6 — Open Economy: Trade & Finance    (7)
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — BASIC CONCEPTS (5) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Country X can produce a maximum of 100 units of food OR 50 units of cloth (or any linear combination) per year. Currently it produces 60 units of food and 20 units of cloth.',
    question: 'Based on the production possibilities curve described, the opportunity cost of producing 1 additional unit of cloth in Country X is:',
    options: [
      '0.5 unit of food',
      '1 unit of food',
      '2 units of food',
      '5 units of food',
    ],
    correctAnswer: 2,
    explanation:
      'Trading off 100 food for 50 cloth means each cloth costs 100/50 = 2 units of food. The current point is inside the PPC, but the slope (and thus opportunity cost) is constant for a linear PPC.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'Two countries each spend 1 hour producing the following maximums:\n  Country A:  20 shirts  OR  4 computers\n  Country B:  10 shirts  OR  5 computers',
    question: 'Which country has a comparative advantage in computers?',
    options: [
      'Country A, because its opportunity cost of a computer is 5 shirts.',
      'Country B, because its opportunity cost of a computer is 2 shirts.',
      'Country A, because it produces more shirts.',
      'Neither — both have the same opportunity cost.',
    ],
    correctAnswer: 1,
    explanation:
      'Opportunity cost of 1 computer: A = 20/4 = 5 shirts; B = 10/5 = 2 shirts. B sacrifices fewer shirts, so B has the comparative advantage in computers.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'A point inside a country\'s production possibilities curve indicates that the economy:',
    options: [
      'Is producing efficiently and at full employment.',
      'Has unemployed or underutilized resources.',
      'Has experienced economic growth shifting the PPC outward.',
      'Cannot reach that combination of goods.',
    ],
    correctAnswer: 1,
    explanation:
      'Points inside the PPC reflect resources that are unemployed or used inefficiently. Points on the curve are productively efficient; points outside are unattainable with current resources.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following would shift a country\'s production possibilities curve outward?',
    options: [
      'A decrease in the unemployment rate from 7% to 5%.',
      'A reallocation of labor from agriculture to manufacturing.',
      'A technological improvement that raises productivity in all sectors.',
      'A decision by consumers to save more and spend less.',
    ],
    correctAnswer: 2,
    explanation:
      'Outward shifts of the PPC require an increase in the economy\'s productive capacity — through new resources, capital deepening, or better technology. The other options just move along or toward the existing curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'In a market economy, the answer to the question "What goods will be produced?" is determined primarily by:',
    options: [
      'A central planning agency.',
      'Consumer demand expressed through prices and producer responses to profit signals.',
      'The political party in power.',
      'The level of government spending in the budget.',
    ],
    correctAnswer: 1,
    explanation:
      'In a market economy, the price system coordinates the "what, how, and for whom" decisions through consumer purchases and the profit motive of producers.',
  },

  /* ============================ UNIT 2 — INDICATORS / BUSINESS CYCLE (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Which of the following transactions would be included in U.S. Gross Domestic Product (GDP) for the current year?',
    options: [
      'The purchase of a 10-year-old used car from a private seller.',
      'A homeowner\'s sale of stock in a U.S. corporation.',
      'A new haircut purchased from a local barber.',
      'Social Security payments received by a retiree.',
    ],
    correctAnswer: 2,
    explanation:
      'GDP measures only the market value of FINAL goods and services produced in the current period. Used goods, financial transfers, and government transfer payments are all excluded.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'A small economy produces only two goods. In the base year, prices and quantities are:\n  Apples:  $1   × 100\n  Bread:   $2   × 50\nIn the current year:\n  Apples:  $2   × 110\n  Bread:   $4   × 60',
    question: 'Real GDP in the current year (using base-year prices) equals:',
    options: [
      '$230',
      '$330',
      '$460',
      '$420',
    ],
    correctAnswer: 0,
    explanation:
      'Real GDP uses BASE-year prices and CURRENT-year quantities: (1)(110) + (2)(60) = 110 + 120 = $230.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question:
      'A worker who has been laid off from an automobile factory because consumers are buying fewer cars during a recession is best classified as:',
    options: [
      'Frictionally unemployed.',
      'Structurally unemployed.',
      'Cyclically unemployed.',
      'Seasonally unemployed.',
    ],
    correctAnswer: 2,
    explanation:
      'Cyclical unemployment is caused by downturns in the business cycle. Frictional = between jobs; structural = mismatch of skills; seasonal = predictable seasonal demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'The natural rate of unemployment is best defined as:',
    options: [
      'The unemployment rate that prevails when there is no cyclical unemployment.',
      'Zero percent unemployment in an economy at long-run equilibrium.',
      'The rate at which inflation is falling and the economy is in recession.',
      'The unemployment rate consistent with full price stability and zero growth.',
    ],
    correctAnswer: 0,
    explanation:
      'The natural rate equals the sum of frictional and structural unemployment — it persists even when cyclical unemployment is zero (i.e., the economy is at full employment).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'In Year 1 the CPI is 200. In Year 2 the CPI is 210.',
    question: 'The inflation rate from Year 1 to Year 2 is approximately:',
    options: [
      '0.5%',
      '5.0%',
      '10.0%',
      '21.0%',
    ],
    correctAnswer: 1,
    explanation:
      'Inflation rate = (210 − 200) / 200 × 100% = 5%.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Which of the following groups is hurt MOST by unanticipated inflation?',
    options: [
      'Borrowers with long-term fixed-rate loans.',
      'Lenders who hold long-term fixed-rate loans.',
      'Workers whose wages adjust automatically with inflation.',
      'Holders of inflation-indexed government bonds (TIPS).',
    ],
    correctAnswer: 1,
    explanation:
      'Unanticipated inflation hurts lenders (paid back in less-valuable dollars) and helps borrowers. Indexed bondholders and indexed wage earners are protected.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'A "discouraged worker" who has stopped looking for work is:',
    options: [
      'Counted as unemployed in the official unemployment rate.',
      'NOT counted in the labor force, so not counted as unemployed.',
      'Counted as employed because they once held a job.',
      'Counted only if they receive unemployment benefits.',
    ],
    correctAnswer: 1,
    explanation:
      'Discouraged workers are not actively job-searching, so the BLS classifies them as not in the labor force — and they are excluded from the official unemployment rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Real GDP per capita is most useful as an indicator of:',
    options: [
      'A country\'s overall income inequality.',
      'A country\'s average material standard of living.',
      'The total environmental footprint of an economy.',
      'A country\'s level of political freedom.',
    ],
    correctAnswer: 1,
    explanation:
      'Real GDP per capita measures average output per person, adjusted for prices — a standard rough proxy for material standard of living. It says nothing about inequality, environment, or politics.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'A nation\'s adult, non-institutionalized population is 200 million. Of these, 130 million are employed, 10 million are unemployed and actively seeking work, and 60 million are not in the labor force.',
    question: 'The unemployment rate for this nation equals approximately:',
    options: [
      '5.0%',
      '7.1%',
      '7.7%',
      '10.0%',
    ],
    correctAnswer: 2,
    explanation:
      'Labor force = employed + unemployed = 130 + 10 = 140 million. Unemployment rate = 10 / 140 ≈ 7.14%.',
  },

  /* ============================ UNIT 3 — NATIONAL INCOME / PRICE (14) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'In an economy with no government and no foreign sector, if the marginal propensity to consume (MPC) is 0.8, the spending multiplier equals:',
    options: [
      '1.25',
      '4',
      '5',
      '8',
    ],
    correctAnswer: 2,
    explanation:
      'Spending multiplier = 1 / (1 − MPC) = 1 / 0.2 = 5.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'If the MPC is 0.75, an autonomous increase in investment of $50 billion will increase equilibrium real GDP by:',
    options: [
      '$50 billion',
      '$100 billion',
      '$150 billion',
      '$200 billion',
    ],
    correctAnswer: 3,
    explanation:
      'Multiplier = 1 / (1 − 0.75) = 4. Change in GDP = 4 × \\$50B = \\$200B.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'Which of the following would shift the aggregate demand (AD) curve to the RIGHT?',
    options: [
      'A decrease in consumer confidence.',
      'An increase in personal income taxes.',
      'A decrease in government spending.',
      'A decrease in real interest rates.',
    ],
    correctAnswer: 3,
    explanation:
      'Lower real interest rates raise interest-sensitive spending (investment and durable goods consumption), shifting AD right. The other three reduce one of the AD components.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'Scenario: A sustained negative supply shock — a tripling of world oil prices — hits the economy.',
    question: 'In the short run, this shock most likely produces:',
    options: [
      'Higher real GDP and higher price level.',
      'Higher real GDP and lower price level.',
      'Lower real GDP and higher price level (stagflation).',
      'Lower real GDP and lower price level.',
    ],
    correctAnswer: 2,
    explanation:
      'A negative supply shock shifts the short-run aggregate supply (SRAS) curve LEFT, raising the price level and reducing real GDP — the textbook stagflation outcome.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'In the long run, an increase in aggregate demand in an economy at full employment will primarily:',
    options: [
      'Raise real GDP without affecting the price level.',
      'Raise the price level without changing real GDP.',
      'Reduce both real GDP and the price level.',
      'Have no effect on either real GDP or the price level.',
    ],
    correctAnswer: 1,
    explanation:
      'In the long run the LRAS is vertical at potential output. AD increases beyond full employment only raise prices.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question:
      'According to Keynesian theory, an economy operating well below full employment should respond MOST to which of the following policies?',
    options: [
      'A decrease in the money supply.',
      'An increase in personal income tax rates.',
      'An increase in government spending financed by borrowing.',
      'A balanced-budget reduction in both spending and taxes.',
    ],
    correctAnswer: 2,
    explanation:
      'Expansionary fiscal policy (deficit-financed government spending) is the textbook Keynesian remedy for a recessionary gap, especially when the multiplier is large.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question:
      'The short-run aggregate supply (SRAS) curve slopes upward primarily because:',
    options: [
      'Workers always have rational expectations about future prices.',
      'Higher prices reduce input costs and increase profits.',
      'In the short run, some input prices (especially nominal wages) are sticky, so a rise in the price level increases firm profits and output.',
      'Long-run capital stock is fixed at potential output.',
    ],
    correctAnswer: 2,
    explanation:
      'Sticky-wage and sticky-price models explain the upward-sloping SRAS: when output prices rise faster than input costs, firms produce more.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'A government raises lump-sum taxes by $100 billion. The MPC equals 0.75.',
    question: 'What is the resulting change in equilibrium real GDP, holding all else constant?',
    options: [
      '−$75 billion',
      '−$133 billion',
      '−$300 billion',
      '−$400 billion',
    ],
    correctAnswer: 2,
    explanation:
      'Tax multiplier = −MPC / (1 − MPC) = −0.75 / 0.25 = −3. ΔGDP = −3 × \\$100B = −\\$300B.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'If autonomous consumption is \\$300, MPC is 0.8, and disposable income is \\$1,000, total planned consumption equals:',
    options: [
      '$800',
      '$1,000',
      '$1,100',
      '$1,300',
    ],
    correctAnswer: 2,
    explanation:
      'C = a + bYd = 300 + 0.8(1000) = 300 + 800 = $1,100.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'The long-run aggregate supply (LRAS) curve is vertical at the level of:',
    options: [
      'Potential (full-employment) real GDP.',
      'The current short-run equilibrium real GDP.',
      'Maximum nominal GDP regardless of price level.',
      'The level of GDP at which inflation equals zero.',
    ],
    correctAnswer: 0,
    explanation:
      'LRAS is vertical at potential GDP — the output the economy produces when all resources are fully employed and inflation expectations have fully adjusted.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'A recessionary gap exists when:',
    options: [
      'Short-run equilibrium real GDP exceeds potential GDP.',
      'Short-run equilibrium real GDP is below potential GDP.',
      'The price level is at its long-run equilibrium.',
      'Cyclical unemployment is zero.',
    ],
    correctAnswer: 1,
    explanation:
      'A recessionary (output) gap occurs when SRAS-AD equilibrium output is BELOW LRAS at potential GDP, with cyclical unemployment above zero.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'Which of the following is NOT a component of aggregate demand in a closed economy with government?',
    options: [
      'Consumption (C)',
      'Investment (I)',
      'Government spending (G)',
      'Imports (M)',
    ],
    correctAnswer: 3,
    explanation:
      'In a closed economy, AD = C + I + G. Imports are subtracted only in OPEN economy formula AD = C + I + G + (X − M).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'Diagram (described): The AD curve and SRAS curve intersect at price level 110 and real GDP \\$18 trillion. The vertical LRAS is drawn at \\$20 trillion.',
    question: 'Which of the following is the most appropriate fiscal policy response to close the gap shown?',
    options: [
      'Increase income taxes by $1 trillion.',
      'Cut government spending by $500 billion.',
      'Increase government spending by $500 billion.',
      'Hold fiscal policy unchanged and let prices fall.',
    ],
    correctAnswer: 2,
    explanation:
      'A short-run output of \\$18T below LRAS of \\$20T is a recessionary gap. Expansionary fiscal policy — increased G — shifts AD right to close the gap.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'The "crowding-out effect" of expansionary fiscal policy refers to:',
    options: [
      'Lower interest rates that encourage more private investment.',
      'Higher interest rates from government borrowing that reduce private investment.',
      'Increased imports that reduce domestic production.',
      'Reduced consumer spending due to higher taxes.',
    ],
    correctAnswer: 1,
    explanation:
      'Government borrowing to finance deficit spending raises real interest rates in the loanable funds market, which "crowds out" private investment.',
  },

  /* ============================ UNIT 4 — FINANCIAL SECTOR (12) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'Which of the following is included in the M1 measure of the U.S. money supply?',
    options: [
      'Long-term U.S. Treasury bonds.',
      'Demand deposits and currency held by the public.',
      'Corporate stocks held in retirement accounts.',
      'Gold held in the U.S. Treasury\'s reserves.',
    ],
    correctAnswer: 1,
    explanation:
      'M1 = currency in circulation + demand (checking) deposits + other very liquid checkable deposits. Bonds, stocks, and gold are not included.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    stimulus:
      'A commercial bank receives a new deposit of $1,000. The required reserve ratio is 10%, and banks hold no excess reserves. Borrowers redeposit all loaned funds in the banking system.',
    question: 'The maximum potential increase in the money supply from this deposit equals:',
    options: [
      '$1,000',
      '$9,000',
      '$10,000',
      '$100,000',
    ],
    correctAnswer: 2,
    explanation:
      'Money multiplier = 1 / RR = 1 / 0.10 = 10. Maximum new money supply = \\$1,000 × 10 = \\$10,000 (which includes the original \\$1,000 deposit).',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'Which of the following actions by the Federal Reserve would EXPAND the U.S. money supply?',
    options: [
      'Raising the discount rate.',
      'Selling Treasury securities on the open market.',
      'Buying Treasury securities on the open market.',
      'Raising the reserve requirement on commercial banks.',
    ],
    correctAnswer: 2,
    explanation:
      'Open-market PURCHASES inject reserves into the banking system, lower the federal funds rate, and expand the money supply. The other three are contractionary.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    stimulus:
      'Diagram (described): The money market shows nominal money supply (vertical) at $MS_{0}$ intersecting money demand (downward sloping) at nominal interest rate $i_{0}$. The Fed conducts an open-market sale of Treasury securities.',
    question: 'In the short run, this Fed action will cause:',
    options: [
      'MS to shift right and the nominal interest rate to fall.',
      'MS to shift left and the nominal interest rate to rise.',
      'MD to shift right and the nominal interest rate to rise.',
      'MD to shift left and the nominal interest rate to fall.',
    ],
    correctAnswer: 1,
    explanation:
      'An open-market sale absorbs reserves, shifting MS LEFT. With MD unchanged, the nominal interest rate rises.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question:
      'According to the Fisher equation, if the nominal interest rate is 7% and expected inflation is 3%, the real interest rate is approximately:',
    options: [
      '−4%',
      '4%',
      '10%',
      '21%',
    ],
    correctAnswer: 1,
    explanation:
      'Real ≈ nominal − expected inflation = 7% − 3% = 4%.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question:
      'If banks hold \\$10 billion in deposits and \\$1.5 billion in reserves, and the required reserve ratio is 10%, the banking system can create up to an additional:',
    options: [
      '$500 million in new loans, increasing the money supply.',
      '$5 billion in new loans.',
      '$1.5 billion in new loans.',
      '$10 billion in new loans.',
    ],
    correctAnswer: 1,
    explanation:
      'Required reserves = 10% × \\$10B = \\$1B. Excess reserves = \\$1.5B − \\$1B = \\$0.5B. Maximum loan creation = excess reserves × money multiplier = \\$0.5B × 10 = \\$5B.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'In the loanable funds market, an increase in the federal budget deficit will most likely:',
    options: [
      'Shift demand for loanable funds right and raise the real interest rate.',
      'Shift supply of loanable funds right and lower the real interest rate.',
      'Shift demand for loanable funds left and lower the real interest rate.',
      'Have no effect on the real interest rate or quantity of loans.',
    ],
    correctAnswer: 0,
    explanation:
      'A larger deficit means more government borrowing — i.e., higher demand for loanable funds — which raises the real interest rate (textbook crowding-out mechanism).',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question:
      'The opportunity cost of holding money rather than interest-bearing assets is best measured by the:',
    options: [
      'Real GDP growth rate.',
      'Nominal interest rate.',
      'Inflation rate.',
      'Federal budget deficit.',
    ],
    correctAnswer: 1,
    explanation:
      'Holding money forgoes the nominal interest you could earn on bonds — making the nominal interest rate the opportunity cost of holding money.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'Which of the following would shift the demand for money curve to the RIGHT?',
    options: [
      'A decrease in the price level.',
      'A decrease in nominal GDP.',
      'An increase in real GDP.',
      'An increase in the nominal interest rate.',
    ],
    correctAnswer: 2,
    explanation:
      'Higher real income (and higher nominal GDP and price level) increases the transactions demand for money, shifting MD right. Interest-rate changes move ALONG the curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question:
      'Which of the following pairs is the LARGEST and most often-used tool of monetary policy by the Federal Reserve?',
    options: [
      'Reserve requirement; rarely used.',
      'Open-market operations; used frequently.',
      'Direct lending to consumers; used frequently.',
      'Wage and price controls; used regularly.',
    ],
    correctAnswer: 1,
    explanation:
      'Open-market operations (buying and selling Treasury securities) are the Fed\'s primary day-to-day tool for managing the federal funds rate.',
  },
  {
    question: 'If market interest rates rise after the purchase, the price at which the saver can sell the bond on the secondary market will most likely:',
    options: ['Rise, because the bond\'s fixed payment is now more valuable.', 'Stay the same, because the bond\'s payment is fixed by contract.', 'Rise, because bond prices always move in the same direction as interest rates.', 'Fall, because newly issued bonds now offer higher interest payments, making the old bond less attractive.'],
    correctAnswer: 3,
    explanation: 'Interest rates and the prices of previously issued bonds are inversely related: when market rates rise, existing bonds with lower fixed payments become less attractive, so their resale price falls.',
    type: 'mcq',
    topic: 'unit-4-financial-sector',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question:
      'A "100% reserve banking" requirement (no fractional-reserve lending) would most likely result in:',
    options: [
      'A money multiplier of zero, eliminating banks.',
      'A money multiplier of 1 — banks could not create money through lending.',
      'A larger money multiplier than under fractional-reserve banking.',
      'Higher inflation in the long run.',
    ],
    correctAnswer: 1,
    explanation:
      'If the required reserve ratio = 100%, the money multiplier = 1/1 = 1, eliminating money creation through lending.',
  },

  /* ============================ UNIT 5 — LONG-RUN STABILIZATION POLICIES (13) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    stimulus:
      'Diagram (described): A short-run Phillips curve (SRPC) is downward-sloping in inflation–unemployment space. The natural rate of unemployment is 5%. Expected inflation equals 2%.',
    question:
      'According to the SRPC, an unanticipated expansionary monetary policy will, in the SHORT run, most likely:',
    options: [
      'Raise unemployment and raise inflation.',
      'Raise unemployment and lower inflation.',
      'Lower unemployment and raise inflation.',
      'Lower unemployment and lower inflation.',
    ],
    correctAnswer: 2,
    explanation:
      'A movement DOWN-LEFT along the SRPC: unanticipated expansion lowers unemployment below the natural rate and raises inflation above expectations.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'The long-run Phillips curve (LRPC) is:',
    options: [
      'Downward sloping at a constant rate.',
      'Upward sloping in the long run.',
      'Vertical at the natural rate of unemployment.',
      'Horizontal at the target inflation rate.',
    ],
    correctAnswer: 2,
    explanation:
      'In the long run there is no permanent trade-off between inflation and unemployment: the LRPC is vertical at the natural rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'When inflation expectations rise, the short-run Phillips curve will:',
    options: [
      'Shift downward and to the left.',
      'Shift upward and to the right.',
      'Become steeper but not shift.',
      'Become flatter and remain in the same place.',
    ],
    correctAnswer: 1,
    explanation:
      'Higher expected inflation shifts the SRPC up — more inflation at every unemployment rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'According to the quantity theory of money (MV = PY), if the velocity of money (V) is constant and real GDP (Y) grows at 3% per year, a 5% increase in the money supply (M) will most likely:',
    options: [
      'Cause a 2% rise in the price level.',
      'Cause an 8% rise in real GDP.',
      'Cause a 5% rise in the price level.',
      'Have no effect on prices in the long run.',
    ],
    correctAnswer: 0,
    explanation:
      '%ΔM + %ΔV = %ΔP + %ΔY → 5 + 0 = %ΔP + 3, so %ΔP ≈ 2%.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'According to the classical (long-run) view, monetary policy is best described as:',
    options: [
      'Effective at permanently raising real output and lowering unemployment.',
      'Neutral with respect to real variables in the long run, affecting only nominal variables.',
      'Always inflationary regardless of time horizon.',
      'Identical to fiscal policy in its long-run effects.',
    ],
    correctAnswer: 1,
    explanation:
      'In the long run, money is "neutral": changes in M affect prices and nominal variables but not real GDP, real wages, or the natural rate of unemployment.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is the BEST example of a "supply-side" policy aimed at increasing potential GDP?',
    options: [
      'A temporary tax rebate aimed at boosting consumer spending.',
      'A short-term increase in unemployment insurance benefits.',
      'Permanent investment in infrastructure and worker training that raises productivity.',
      'A one-time stimulus check sent to all households.',
    ],
    correctAnswer: 2,
    explanation:
      'Supply-side policies aim to expand the economy\'s productive capacity (LRAS / PPC), typically through capital accumulation, education, R&D, and incentives that raise productivity.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    stimulus:
      'A nation\'s federal debt was \\$20 trillion at the end of Year 1. During Year 2, the federal government ran a budget deficit of \\$1.5 trillion.',
    question: 'The nation\'s federal debt at the end of Year 2 is approximately:',
    options: [
      '$1.5 trillion',
      '$18.5 trillion',
      '$21.5 trillion',
      '$30 trillion',
    ],
    correctAnswer: 2,
    explanation:
      'Debt is the accumulated stock of past deficits. New debt = \\$20T + \\$1.5T = \\$21.5T.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is an example of an AUTOMATIC fiscal stabilizer?',
    options: [
      'A new infrastructure bill passed in response to recession.',
      'Unemployment insurance payments that automatically rise as more workers lose jobs.',
      'An emergency Federal Reserve interest-rate cut.',
      'A constitutional amendment requiring a balanced budget.',
    ],
    correctAnswer: 1,
    explanation:
      'Automatic stabilizers (UI benefits, progressive income tax, transfer programs) expand or contract WITHOUT new legislation, smoothing the cycle.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'Which of the following is a long-run cost of persistently high government budget deficits?',
    options: [
      'Higher private savings, which increase capital formation.',
      'Lower real interest rates, which boost investment.',
      'Crowding out of private investment, slowing long-run growth in capital stock.',
      'Reduced government spending on transfers.',
    ],
    correctAnswer: 2,
    explanation:
      'Sustained deficits raise real interest rates and crowd out private investment, slowing long-run capital accumulation and growth in potential GDP.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'A country experiences inflation that is persistently above its target. The most appropriate monetary policy response is to:',
    options: [
      'Buy government bonds on the open market.',
      'Lower the discount rate.',
      'Sell government bonds on the open market and raise the federal funds rate target.',
      'Raise government spending and cut taxes.',
    ],
    correctAnswer: 2,
    explanation:
      'Contractionary monetary policy — open-market sales and raising the federal funds rate target — reduces the money supply and helps bring inflation down. The last option is fiscal, not monetary.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'Which of the following represents a "lag" that makes counter-cyclical fiscal policy difficult in practice?',
    options: [
      'The recognition lag, the legislative/decision lag, and the implementation lag.',
      'The monetary multiplier lag.',
      'The trade-balance lag.',
      'The Phillips curve lag.',
    ],
    correctAnswer: 0,
    explanation:
      'Standard fiscal-policy lags include recognition, decision (legislative), and implementation — all of which can make fiscal stimulus mistimed by the time it takes effect.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'In the long run, sustained economic growth in real GDP per capita is most directly tied to:',
    options: [
      'Frequent expansionary monetary policy.',
      'Productivity growth driven by capital accumulation, technology, and human capital.',
      'Larger and more frequent budget deficits.',
      'Falling labor-force participation.',
    ],
    correctAnswer: 1,
    explanation:
      'Long-run growth in living standards is driven by productivity growth — itself driven by physical capital, human capital, and technology.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question:
      'Which of the following best describes the "zero lower bound" problem in monetary policy?',
    options: [
      'Nominal interest rates near zero leave the central bank with limited room to cut rates further to stimulate the economy.',
      'Real interest rates can never fall below zero.',
      'Banks are required to hold zero excess reserves at the central bank.',
      'The reserve ratio cannot be set below zero.',
    ],
    correctAnswer: 0,
    explanation:
      'When nominal short-term rates approach zero, conventional rate cuts lose effectiveness — pushing central banks toward unconventional tools like quantitative easing or forward guidance.',
  },

  /* ============================ UNIT 6 — OPEN ECONOMY (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'A U.S. importer of cars from Japan must pay yen for the cars. If the dollar appreciates against the yen, the U.S. importer:',
    options: [
      'Pays more dollars for each yen of price.',
      'Pays fewer dollars for each yen of price.',
      'Pays the same number of dollars per yen.',
      'No longer needs to convert dollars into yen.',
    ],
    correctAnswer: 1,
    explanation:
      'A stronger dollar buys more yen per dollar — equivalently, fewer dollars per yen. U.S. imports become cheaper.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'Which of the following would most likely cause the U.S. dollar to APPRECIATE against the euro?',
    options: [
      'A decrease in U.S. real interest rates relative to euro-area rates.',
      'An increase in U.S. real interest rates relative to euro-area rates.',
      'A large increase in U.S. imports from the euro area.',
      'A widely expected drop in U.S. exports to the euro area.',
    ],
    correctAnswer: 1,
    explanation:
      'Higher U.S. real interest rates attract foreign capital into U.S. assets, increasing demand for dollars in the foreign exchange market and appreciating the dollar.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    stimulus:
      'A country reports the following balance-of-payments figures (in $ billions):\n  Goods exports: 500     Goods imports: 700\n  Services exports: 200  Services imports: 100\n  Net investment income: −50',
    question: 'The current-account balance equals approximately:',
    options: [
      '−$300 billion',
      '−$150 billion',
      '+$100 billion',
      '+$200 billion',
    ],
    correctAnswer: 1,
    explanation:
      'Current account ≈ (X − M) goods + (X − M) services + net income from abroad = (500 − 700) + (200 − 100) + (−50) = −200 + 100 − 50 = −$150B.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'In a flexible exchange rate system with no central-bank intervention, a current-account deficit of $150 billion is, by accounting identity, matched by:',
    options: [
      'A capital and financial account surplus of approximately $150 billion.',
      'A capital and financial account deficit of approximately $150 billion.',
      'An equal amount of central-bank reserves sold.',
      'A government budget surplus of approximately $150 billion.',
    ],
    correctAnswer: 0,
    explanation:
      'Balance-of-payments identity: current account + capital/financial account ≈ 0 (with statistical discrepancy). A CA deficit must be financed by net foreign capital inflows.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'If the United States imposes a new tariff on imported steel, which of the following is the most likely SHORT-RUN effect?',
    options: [
      'Increased domestic production of steel and reduced steel imports.',
      'Decreased domestic steel prices and lower domestic production.',
      'No effect on either domestic or imported steel prices.',
      'A larger U.S. current-account deficit.',
    ],
    correctAnswer: 0,
    explanation:
      'A tariff raises the domestic price of imported steel, shifting demand toward domestic producers — increasing domestic production and reducing imports.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'When the U.S. dollar depreciates, U.S. net exports are most likely to:',
    options: [
      'Decrease, because U.S. exports become more expensive abroad.',
      'Decrease, because U.S. imports become cheaper.',
      'Increase, because U.S. exports become cheaper abroad and imports more expensive.',
      'Remain unchanged because exchange rates do not affect trade.',
    ],
    correctAnswer: 2,
    explanation:
      'Dollar depreciation makes U.S. goods cheaper in foreign markets and makes foreign goods more expensive in the U.S., increasing X and decreasing M — raising net exports.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question:
      'Expansionary U.S. monetary policy will, through the foreign-exchange channel, most likely:',
    options: [
      'Appreciate the dollar and reduce net exports.',
      'Depreciate the dollar and increase net exports.',
      'Have no effect on the dollar or trade.',
      'Increase both U.S. exports and U.S. imports.',
    ],
    correctAnswer: 1,
    explanation:
      'Expansionary monetary policy lowers U.S. real interest rates, reducing capital inflows and depreciating the dollar; cheaper dollar boosts net exports.',
  },
]
