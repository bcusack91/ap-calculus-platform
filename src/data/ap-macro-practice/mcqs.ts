import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Macroeconomics — 60 MCQs (the real exam has 60 in 70 minutes).
 * Distribution mirrors the CED unit weighting:
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
      'Country X can produce a maximum of 100 units of food or 50 units of cloth per year, and its production possibilities curve is a straight line. It currently produces 60 units of food and 20 units of cloth.',
    question: 'The opportunity cost of producing 1 additional unit of cloth in Country X is:',
    options: [
      '0.5 unit of food',
      '1 unit of food',
      '2 units of food',
      '5 units of food',
    ],
    correctAnswer: 2,
    explanation:
      'Giving up all 100 units of food yields 50 units of cloth, so each unit of cloth costs 100 ÷ 50 = 2 units of food. The answer 0.5 is the opportunity cost of a unit of food measured in cloth; a straight-line PPC means the cost is the same everywhere, even at a point inside the curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    stimulus:
      'In one hour of labor, each country can produce the following maximum amounts:\n  Country A:  20 shirts  OR  4 computers\n  Country B:  10 shirts  OR  5 computers',
    question: 'Which country has a comparative advantage in producing computers?',
    options: [
      'Country A, because its opportunity cost of a computer is 5 shirts.',
      'Country B, because its opportunity cost of a computer is 2 shirts.',
      'Country A, because it can produce more shirts per hour.',
      'Neither, because both countries face the same opportunity cost.',
    ],
    correctAnswer: 1,
    explanation:
      'The opportunity cost of 1 computer is 20 ÷ 4 = 5 shirts for A and 10 ÷ 5 = 2 shirts for B. B gives up fewer shirts per computer, so B has the comparative advantage in computers; producing more shirts gives A an absolute advantage in shirts, which does not determine comparative advantage.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'A point inside a country\'s production possibilities curve indicates that the economy:',
    options: [
      'Is producing efficiently, with all of its resources fully employed.',
      'Has unemployed resources or is using some of its resources inefficiently.',
      'Has experienced economic growth that shifted its PPC outward.',
      'Cannot reach that combination of goods with its current resources.',
    ],
    correctAnswer: 1,
    explanation:
      'At a point inside the PPC, the economy could produce more of one good without giving up any of the other, so some resources are idle or misallocated. Points beyond the curve, not inside it, are unattainable with current resources.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'Which of the following would shift a country\'s production possibilities curve outward?',
    options: [
      'A decrease in the unemployment rate from 7% to 5% of the labor force.',
      'A reallocation of labor from agriculture to manufacturing industries.',
      'A technological advance that raises output per worker in all industries.',
      'A decision by households to buy more consumer goods and fewer capital goods.',
    ],
    correctAnswer: 2,
    explanation:
      'Better technology raises the maximum output the economy can produce with its resources, shifting the PPC outward. Lower unemployment moves the economy from inside the curve toward it, and reallocating labor or changing the consumption mix moves along the existing curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-basic-concepts',
    question: 'In a market economy, the question "What goods will be produced?" is answered primarily by:',
    options: [
      'A central planning agency that sets production quotas for each industry.',
      'Prices set by buyers and sellers, signaling profit-seeking firms what to make.',
      'Firms\' production costs alone, regardless of what consumers want to buy.',
      'Government spending decisions approved by the legislature each year.',
    ],
    correctAnswer: 1,
    explanation:
      'In a market economy, prices emerge from buyers and sellers: spending pushes up the prices and profits of goods people want, and firms respond by producing more of them. Production quotas set by a planning agency describe a command economy instead.',
  },

  /* ============================ UNIT 2 — INDICATORS / BUSINESS CYCLE (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Which of the following transactions would be included in U.S. gross domestic product (GDP) for the current year?',
    options: [
      'The purchase of a 10-year-old used car from a private seller.',
      'A homeowner\'s sale of shares of stock in a U.S. corporation.',
      'A new haircut purchased this year from a neighborhood barber.',
      'Social Security payments received by a retired worker.',
    ],
    correctAnswer: 2,
    explanation:
      'GDP counts the market value of final goods and services produced in the current year, and a haircut is a newly produced service. A used car was counted when it was made, and stock sales and Social Security payments transfer existing wealth or income rather than paying for new production.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'A small economy produces only two goods.\n  Base year:     apples \\$1 each × 100;  bread \\$2 each × 50\n  Current year:  apples \\$2 each × 110;  bread \\$4 each × 60',
    question: 'Real GDP in the current year, measured in base-year prices, equals:',
    options: [
      '\\$200',
      '\\$230',
      '\\$350',
      '\\$460',
    ],
    correctAnswer: 1,
    explanation:
      'Real GDP values current-year quantities at base-year prices: (\\$1)(110) + (\\$2)(60) = \\$230. Valuing current quantities at current prices gives nominal GDP of \\$460, and \\$200 is the base year\'s own GDP.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'A worker who is laid off from an automobile factory because consumers are buying fewer cars during a recession is best classified as:',
    options: [
      'Frictionally unemployed.',
      'Structurally unemployed.',
      'Cyclically unemployed.',
      'Seasonally unemployed.',
    ],
    correctAnswer: 2,
    explanation:
      'Cyclical unemployment results from a downturn in the business cycle that reduces spending on goods and services. Structural unemployment would mean the worker\'s skills no longer match available jobs, which a temporary recession does not imply.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'The natural rate of unemployment is best defined as:',
    options: [
      'The unemployment rate that prevails when there is no cyclical unemployment.',
      'Zero percent unemployment in an economy at long-run equilibrium.',
      'The unemployment rate at which inflation is falling during a recession.',
      'The unemployment rate at which prices are stable and growth is zero.',
    ],
    correctAnswer: 0,
    explanation:
      'The natural rate is the sum of frictional and structural unemployment, the rate that remains when cyclical unemployment is zero and the economy is at full employment. It is never zero, because some workers are always between jobs or retraining.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'In Year 1 the consumer price index (CPI) is 200. In Year 2 the CPI is 210.',
    question: 'The inflation rate from Year 1 to Year 2 is:',
    options: [
      '0.5%',
      '5.0%',
      '10.0%',
      '21.0%',
    ],
    correctAnswer: 1,
    explanation:
      'Inflation rate = (210 − 200) ÷ 200 × 100% = 5.0%. The 10-point rise in the index is not itself the percentage change, because the base is 200, not 100.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Which of the following groups is hurt MOST by unanticipated inflation?',
    options: [
      'Borrowers who took out long-term loans at fixed interest rates.',
      'Lenders holding long-term loans made at fixed interest rates.',
      'Workers whose wage contracts adjust automatically with the price level.',
      'Savers who hold government bonds indexed to the inflation rate.',
    ],
    correctAnswer: 1,
    explanation:
      'When inflation is higher than expected, fixed-rate loans are repaid with dollars that buy less, so lenders lose and borrowers gain. Indexed wages and indexed bonds rise with the price level, which protects their holders.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'A discouraged worker who wants a job but has stopped looking for one is:',
    options: [
      'Counted as unemployed, because the worker still wants a job.',
      'Counted as outside the labor force, not as unemployed.',
      'Counted as employed, because the worker held a job in the past.',
      'Counted as unemployed only while receiving unemployment benefits.',
    ],
    correctAnswer: 1,
    explanation:
      'To be counted as unemployed, a person must be actively searching for work, so a discouraged worker is classified as outside the labor force. As a result, the official unemployment rate can understate joblessness during long downturns.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    question: 'Real GDP per capita is most useful as an indicator of:',
    options: [
      'How equally income is divided among a country\'s households.',
      'A country\'s average material standard of living.',
      'The total environmental damage caused by a country\'s production.',
      'The degree of political and civil freedom in a country.',
    ],
    correctAnswer: 1,
    explanation:
      'Real GDP per capita measures inflation-adjusted output per person, a common proxy for the average material standard of living. Because it is an average, it reveals nothing about how equally that income is distributed.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-indicators-business-cycle',
    stimulus:
      'A nation\'s adult, non-institutionalized population is 200 million. Of these, 130 million are employed, 10 million are unemployed and actively seeking work, and 60 million are not in the labor force.',
    question: 'The unemployment rate for this nation is approximately:',
    options: [
      '5.0%',
      '7.1%',
      '7.7%',
      '10.0%',
    ],
    correctAnswer: 1,
    explanation:
      'The labor force is employed plus unemployed: 130 + 10 = 140 million, so the unemployment rate = 10 ÷ 140 ≈ 7.1%. Dividing by the number employed gives 7.7%, and dividing by the whole adult population gives 5.0%.',
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
      'Spending multiplier = 1 ÷ (1 − MPC) = 1 ÷ 0.2 = 5. The value 4 is the tax multiplier in absolute value, MPC ÷ (1 − MPC), and 1.25 is 1 ÷ MPC.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'If the MPC is 0.75, an autonomous increase in investment spending of \\$50 billion will increase equilibrium real GDP by a maximum of:',
    options: [
      '\\$37.5 billion',
      '\\$50 billion',
      '\\$150 billion',
      '\\$200 billion',
    ],
    correctAnswer: 3,
    explanation:
      'The spending multiplier is 1 ÷ (1 − 0.75) = 4, so real GDP rises by up to 4 × \\$50 billion = \\$200 billion. Using the tax multiplier of 3 gives \\$150 billion, but the tax multiplier applies only to changes in taxes or transfers, not to direct spending.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'Which of the following would shift the aggregate demand curve to the RIGHT?',
    options: [
      'A decrease in consumer confidence about future incomes.',
      'An increase in personal income tax rates on households.',
      'A decrease in government purchases of goods and services.',
      'A decrease in real interest rates on business and consumer loans.',
    ],
    correctAnswer: 3,
    explanation:
      'Lower real interest rates make borrowing cheaper, raising investment and interest-sensitive consumer spending, which increases aggregate demand. Lower confidence, higher taxes, and lower government purchases each reduce a component of aggregate demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'A sustained negative supply shock, a tripling of world oil prices, hits an economy that was in long-run equilibrium.',
    question: 'In the short run, this shock will most likely cause which of the following?',
    options: [
      'Real GDP rises and the price level rises.',
      'Real GDP rises and the price level falls.',
      'Real GDP falls and the price level rises.',
      'Real GDP falls and the price level falls.',
    ],
    correctAnswer: 2,
    explanation:
      'Higher energy costs raise production costs at every price level, shifting short-run aggregate supply to the left. The new equilibrium has a higher price level and lower real GDP, the combination known as stagflation; a decrease in aggregate demand, by contrast, would lower both.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'In the long run, an increase in aggregate demand in an economy that begins at full employment will primarily:',
    options: [
      'Raise real GDP without changing the price level.',
      'Raise the price level without changing real GDP.',
      'Reduce both real GDP and the price level.',
      'Leave both real GDP and the price level unchanged.',
    ],
    correctAnswer: 1,
    explanation:
      'Output rises above potential only temporarily; as nominal wages and other input prices adjust upward, SRAS shifts left and output returns to the vertical LRAS. The lasting effect is a higher price level with real GDP back at potential.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'An economy is operating well below full employment. A Keynesian economist would most likely recommend which of the following policies?',
    options: [
      'A decrease in the money supply to keep inflation low.',
      'An increase in personal income tax rates.',
      'An increase in government spending financed by borrowing.',
      'Equal cuts in government spending and taxes.',
    ],
    correctAnswer: 2,
    explanation:
      'Keynesian analysis calls for expansionary fiscal policy to close a recessionary gap, and deficit-financed government spending raises aggregate demand by a multiple of the initial spending. Equal cuts in spending and taxes are contractionary, because the spending multiplier exceeds the tax multiplier.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'The short-run aggregate supply curve slopes upward primarily because:',
    options: [
      'Workers instantly adjust their wage demands to any change in prices.',
      'A higher price level lowers input costs and so raises firms\' profits.',
      'Nominal wages and some other input prices are slow to adjust to price changes.',
      'The economy\'s capital stock is fixed at the level of potential output.',
    ],
    correctAnswer: 2,
    explanation:
      'When the price level rises but nominal wages and other input prices are fixed for a time, each unit of output becomes more profitable, so firms produce more. If wages adjusted instantly, the curve would be vertical, which is why the long-run aggregate supply curve is vertical.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'The government raises lump-sum taxes by \\$100 billion. The MPC equals 0.75.',
    question: 'Holding all else constant, the maximum change in equilibrium real GDP is:',
    options: [
      '−\\$75 billion',
      '−\\$133 billion',
      '−\\$300 billion',
      '−\\$400 billion',
    ],
    correctAnswer: 2,
    explanation:
      'Tax multiplier = −MPC ÷ (1 − MPC) = −0.75 ÷ 0.25 = −3, so real GDP falls by up to 3 × \\$100 billion = \\$300 billion. The −\\$400 billion answer wrongly applies the spending multiplier of 4, ignoring that households first pay part of the tax out of saving.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'If autonomous consumption is \\$300, the MPC is 0.8, and disposable income is \\$1,000, total planned consumption equals:',
    options: [
      '\\$800',
      '\\$1,000',
      '\\$1,100',
      '\\$1,300',
    ],
    correctAnswer: 2,
    explanation:
      'Consumption = autonomous consumption + MPC × disposable income = \\$300 + 0.8(\\$1,000) = \\$1,100. The \\$800 answer counts only the income-induced part and leaves out the \\$300 households spend regardless of income.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'The long-run aggregate supply curve is vertical at the level of:',
    options: [
      'The level of real GDP produced when the economy is at full employment.',
      'The level of real GDP at the current short-run equilibrium.',
      'The highest nominal GDP the economy could reach at any price level.',
      'The level of real GDP at which the inflation rate equals zero.',
    ],
    correctAnswer: 0,
    explanation:
      'LRAS is vertical at potential, or full-employment, real GDP, the output the economy produces once all input prices have fully adjusted. Short-run equilibrium output can be above or below that level during an inflationary or recessionary gap.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'A recessionary gap exists when:',
    options: [
      'Short-run equilibrium real GDP is above potential real GDP.',
      'Short-run equilibrium real GDP is below potential real GDP.',
      'Short-run equilibrium real GDP equals potential, but prices are rising.',
      'Cyclical unemployment is zero, so unemployment is at the natural rate.',
    ],
    correctAnswer: 1,
    explanation:
      'In a recessionary gap, the short-run equilibrium lies to the left of LRAS, so output is below potential and cyclical unemployment is positive. Output above potential is an inflationary gap.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'Which of the following is counted as investment spending in aggregate demand?',
    options: [
      'A family\'s purchase of a house built this year by a contractor.',
      'A family\'s purchase of shares of stock in a newly public company.',
      'A firm\'s purchase of a used delivery truck from another company.',
      'A college student\'s purchase of a brand-new laptop for her classes.',
    ],
    correctAnswer: 0,
    explanation:
      'Investment spending includes business purchases of new capital, changes in inventories, and purchases of newly built homes. Buying stock is a financial transaction, not spending on newly produced output, and a used truck was counted in the year it was made.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    stimulus:
      'Diagram (described): The AD and SRAS curves intersect at a price level of 110 and real GDP of \\$18 trillion. The vertical LRAS curve is at \\$20 trillion. The MPC is 0.8.',
    question: 'Assuming the price level stays constant, what is the minimum increase in government spending needed to close the gap?',
    options: [
      '\\$400 billion',
      '\\$2 trillion',
      '\\$500 billion',
      '\\$10 trillion',
    ],
    correctAnswer: 0,
    explanation:
      'The recessionary gap is \\$20 trillion − \\$18 trillion = \\$2 trillion, and the spending multiplier is 1 ÷ (1 − 0.8) = 5, so government spending must rise by \\$2 trillion ÷ 5 = \\$400 billion. A \\$500 billion figure is the tax cut that would be needed, since the tax multiplier is only 4.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-national-income-price',
    question: 'The crowding-out effect of expansionary fiscal policy refers to:',
    options: [
      'Lower interest rates that encourage more private investment spending.',
      'Higher interest rates from government borrowing that reduce investment.',
      'Higher imports that reduce spending on domestically produced goods.',
      'Lower consumer spending caused by the higher taxes used to fund it.',
    ],
    correctAnswer: 1,
    explanation:
      'When the government borrows to finance a deficit, it increases the demand for loanable funds and raises the real interest rate, which discourages some private investment. That offsets part of the expansionary effect on aggregate demand.',
  },

  /* ============================ UNIT 4 — FINANCIAL SECTOR (12) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'Which of the following is included in the M1 measure of the U.S. money supply?',
    options: [
      'Long-term U.S. Treasury bonds held by the public.',
      'Currency and checkable deposits held by the public.',
      'Corporate stocks held in retirement accounts.',
      'Gold held in the reserves of the U.S. Treasury.',
    ],
    correctAnswer: 1,
    explanation:
      'M1 is the most liquid measure of money: currency in circulation plus checkable (demand) deposits and other highly liquid deposits. Bonds and stocks are financial assets that must be sold before they can be spent, so they are not money.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    stimulus:
      'Maria deposits \\$1,000 of currency she had been keeping at home into her checking account. The required reserve ratio is 10%, banks hold no excess reserves, and all loans are redeposited in the banking system.',
    question: 'As a result of this deposit, the maximum amount of new money the banking system can create through lending is:',
    options: [
      '\\$900',
      '\\$1,000',
      '\\$9,000',
      '\\$10,000',
    ],
    correctAnswer: 2,
    explanation:
      'Moving \\$1,000 from currency to a checking deposit does not change M1 by itself; it gives the bank \\$900 of excess reserves (\\$1,000 − \\$100 required). With a money multiplier of 1 ÷ 0.10 = 10, new lending can create at most \\$900 × 10 = \\$9,000; the \\$10,000 answer is total new deposits, which wrongly counts Maria\'s \\$1,000, already money before she deposited it.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'In a limited-reserves system, which of the following actions by the Federal Reserve would increase the U.S. money supply?',
    options: [
      'Raising the discount rate it charges on loans to banks.',
      'Selling Treasury securities on the open market.',
      'Buying Treasury securities on the open market.',
      'Raising the reserve requirement for commercial banks.',
    ],
    correctAnswer: 2,
    explanation:
      'When the Fed buys securities, it pays with new reserves, giving banks excess reserves to lend and expanding the money supply through the money multiplier. Selling securities, raising the discount rate, and raising the reserve requirement all shrink banks\' lending capacity.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    stimulus:
      'Diagram (described): In a limited-reserves banking system, the money market shows a vertical money supply curve (MS) intersecting a downward-sloping money demand curve (MD) at nominal interest rate $i_{0}$. The Federal Reserve then conducts an open-market sale of Treasury securities.',
    question: 'In the short run, this Fed action will cause:',
    options: [
      'MS to shift right and the nominal interest rate to fall.',
      'MS to shift left and the nominal interest rate to rise.',
      'MD to shift right and the nominal interest rate to rise.',
      'MD to shift left and the nominal interest rate to fall.',
    ],
    correctAnswer: 1,
    explanation:
      'Buyers of the securities pay the Fed with money that leaves the banking system, so the money supply curve shifts left and the nominal interest rate rises along the unchanged money demand curve. Money demand shifts only when real GDP or the price level changes, not because of an open-market operation.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'If the nominal interest rate is 7% and expected inflation is 3%, the real interest rate is approximately:',
    options: [
      '−4%',
      '4%',
      '10%',
      '21%',
    ],
    correctAnswer: 1,
    explanation:
      'Real interest rate ≈ nominal interest rate − expected inflation = 7% − 3% = 4%. Adding the two (10%) confuses the real rate with the nominal rate that a lender would demand.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'The banking system has \\$10 billion in demand deposits and \\$1.5 billion in reserves, and the required reserve ratio is 10%. By how much can the banking system as a whole increase its loans, at most?',
    options: [
      '\\$500 million',
      '\\$5.0 billion',
      '\\$1.5 billion',
      '\\$15 billion',
    ],
    correctAnswer: 1,
    explanation:
      'Required reserves are 10% × \\$10 billion = \\$1 billion, so excess reserves are \\$1.5 billion − \\$1 billion = \\$0.5 billion. The whole system can lend up to excess reserves × money multiplier = \\$0.5 billion × 10 = \\$5 billion; \\$500 million is what a single bank could lend.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'In the loanable funds market, an increase in government borrowing to finance a larger budget deficit will most likely:',
    options: [
      'Shift the demand for loanable funds right and raise the real interest rate.',
      'Shift the supply of loanable funds right and lower the real interest rate.',
      'Shift the demand for loanable funds left and lower the real interest rate.',
      'Shift the supply of loanable funds left and lower the real interest rate.',
    ],
    correctAnswer: 0,
    explanation:
      'Government borrowing adds to the demand for loanable funds, shifting the demand curve right and raising the equilibrium real interest rate. That higher rate is the mechanism behind crowding out of private investment.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'The opportunity cost of holding money rather than interest-bearing assets is best measured by the:',
    options: [
      'Real interest rate.',
      'Nominal interest rate.',
      'Inflation rate.',
      'Federal budget deficit.',
    ],
    correctAnswer: 1,
    explanation:
      'Holding money means giving up the nominal interest that could be earned on a bond, so the nominal rate is the opportunity cost, which is why money demand slopes downward against the nominal rate. The real rate matters for borrowing and investment decisions in the loanable funds market.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'Which of the following would shift the money demand curve to the RIGHT?',
    options: [
      'A decrease in the price level, lowering the cost of purchases.',
      'A decrease in nominal GDP, reducing the value of transactions.',
      'An increase in real GDP, raising the volume of transactions.',
      'An increase in the nominal interest rate on savings bonds.',
    ],
    correctAnswer: 2,
    explanation:
      'Higher real GDP means more transactions, so people want to hold more money at every interest rate. A change in the nominal interest rate causes a movement along the money demand curve rather than a shift.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'In the ample-reserves framework the Federal Reserve now uses, its primary tool for moving the federal funds rate toward its target is:',
    options: [
      'Adjusting the interest rate it pays banks on reserve balances.',
      'Changing the required reserve ratio that banks must meet each day.',
      'Buying or selling small amounts of bonds to shift the money supply.',
      'Lending directly to households at an interest rate set by Congress.',
    ],
    correctAnswer: 0,
    explanation:
      'With ample reserves, small open-market purchases or sales barely move the federal funds rate, so the Fed steers it with administered rates, chiefly the interest rate it pays on reserve balances. Banks will not lend reserves to each other for much less than that rate, so raising it pulls market rates up.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    stimulus:
      'A saver buys a newly issued 10-year government bond with a face value of \\$1,000 that pays a fixed \\$40 in interest each year.',
    question: 'If market interest rates rise after the purchase, the price at which the saver can sell the bond to another investor will most likely:',
    options: [
      'Rise, because the bond\'s fixed payment is now worth more to buyers.',
      'Stay the same, because the bond\'s payment is fixed by contract.',
      'Rise, because bond prices move in the same direction as interest rates.',
      'Fall, because newly issued bonds pay more and make the old bond less attractive.',
    ],
    correctAnswer: 3,
    explanation:
      'Once new bonds pay more than \\$40 a year, no buyer will pay \\$1,000 for the old bond, so its price falls until its yield matches the market rate. Bond prices and interest rates move in opposite directions; the fixed payment is exactly why the price must adjust.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-financial-sector',
    question: 'If banks were required to hold 100% of their deposits as reserves, the result would most likely be:',
    options: [
      'A larger money supply, because every deposit would be fully backed by reserves.',
      'A money multiplier of 1, so bank lending could not create new money.',
      'A money multiplier larger than the one under fractional-reserve banking.',
      'A smaller money supply only if the Fed also sold bonds on the open market.',
    ],
    correctAnswer: 1,
    explanation:
      'The money multiplier is 1 ÷ required reserve ratio = 1 ÷ 1.00 = 1, so banks could not lend out any deposits and could not create new money. Full backing makes deposits safer but does not add money, and the multiplier drops to 1 from the requirement itself, with no open-market sale needed.',
  },

  /* ============================ UNIT 5 — LONG-RUN STABILIZATION POLICIES (13) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    stimulus:
      'Diagram (described): A downward-sloping short-run Phillips curve (SRPC) is drawn in inflation–unemployment space. The natural rate of unemployment is 5%, and expected inflation is 2%.',
    question: 'An unanticipated expansionary monetary policy will, in the short run, most likely cause:',
    options: [
      'A movement along the SRPC to higher inflation and higher unemployment.',
      'A movement along the SRPC to lower inflation and higher unemployment.',
      'A movement along the SRPC to higher inflation and lower unemployment.',
      'A movement along the SRPC to lower inflation and lower unemployment.',
    ],
    correctAnswer: 2,
    explanation:
      'Unexpectedly higher aggregate demand raises output and lowers unemployment below 5% while pushing inflation above the expected 2%, a movement up and to the left along the SRPC. Higher unemployment with lower inflation is the movement caused by contractionary policy.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'The long-run Phillips curve is:',
    options: [
      'Downward sloping but steeper than the short-run Phillips curve.',
      'Upward sloping, because higher inflation eventually raises unemployment.',
      'Vertical at the natural rate, with no lasting inflation trade-off.',
      'Horizontal at the expected inflation rate once expectations adjust.',
    ],
    correctAnswer: 2,
    explanation:
      'Once expectations adjust, unemployment returns to its natural rate whatever the inflation rate, so the long-run Phillips curve is vertical. The trade-off on the downward-sloping short-run curve exists only while expected inflation is fixed.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'When expected inflation rises, the short-run Phillips curve will:',
    options: [
      'Shift down and to the left.',
      'Shift upward and to the right.',
      'Become steeper without shifting.',
      'Become flatter without shifting.',
    ],
    correctAnswer: 1,
    explanation:
      'Higher expected inflation raises the inflation rate associated with every unemployment rate, so the SRPC shifts up (to the right). This matches a leftward shift of SRAS as workers bargain for higher nominal wages.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'According to the quantity theory of money (MV = PY), if velocity is constant and real GDP grows 3% per year, a 5% increase in the money supply will most likely cause:',
    options: [
      'A 2% increase in the price level.',
      'An 8% increase in real GDP.',
      'A 5% increase in the price level.',
      'No change in the price level.',
    ],
    correctAnswer: 0,
    explanation:
      'In growth-rate form, %ΔM + %ΔV = %ΔP + %ΔY, so 5% + 0% = %ΔP + 3% and the price level rises about 2%. A 5% rise in prices would require real GDP to stay constant.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'In the long run, changes in the money supply are best described as:',
    options: [
      'Able to permanently raise real output and lower unemployment.',
      'Neutral in the long run, affecting only nominal variables.',
      'Inflationary in the short run but deflationary in the long run.',
      'Identical to fiscal policy in their long-run effects on output.',
    ],
    correctAnswer: 1,
    explanation:
      'Money is neutral in the long run: a change in the money supply changes the price level and other nominal variables but not real GDP or the natural rate of unemployment. Any short-run gain in output fades once wages and expectations adjust.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is the best example of a policy aimed at increasing potential GDP?',
    options: [
      'A tax rebate mailed to households to boost consumer spending.',
      'An increase in unemployment insurance benefits during a recession.',
      'Public investment in worker training and infrastructure.',
      'A larger federal budget deficit financed by issuing new bonds.',
    ],
    correctAnswer: 2,
    explanation:
      'Training raises human capital and infrastructure adds physical capital, so both raise productivity and shift LRAS to the right. Rebates and unemployment benefits raise aggregate demand without expanding productive capacity, and deficit borrowing can crowd out the private investment that builds capital.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    stimulus:
      'A nation\'s federal debt was \\$20 trillion at the end of Year 1. During Year 2, the federal government ran a budget deficit of \\$1.5 trillion.',
    question: 'The nation\'s federal debt at the end of Year 2 is approximately:',
    options: [
      '\\$1.5 trillion',
      '\\$18.5 trillion',
      '\\$21.5 trillion',
      '\\$30 trillion',
    ],
    correctAnswer: 2,
    explanation:
      'The debt is the accumulated total of past deficits minus surpluses, so a \\$1.5 trillion deficit adds to it: \\$20 trillion + \\$1.5 trillion = \\$21.5 trillion. Subtracting the deficit would treat it as a surplus.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is an example of an automatic fiscal stabilizer?',
    options: [
      'A new infrastructure bill passed by Congress in response to a recession.',
      'Unemployment benefits that rise as more workers lose jobs.',
      'An emergency cut in the federal funds rate by the Federal Reserve.',
      'A constitutional amendment requiring a balanced federal budget.',
    ],
    correctAnswer: 1,
    explanation:
      'Automatic stabilizers, such as unemployment insurance and progressive income taxes, change spending or tax revenue as the economy changes without any new legislation. A newly passed infrastructure bill is discretionary fiscal policy, and a federal funds rate cut is monetary policy.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is a long-run cost of persistently large government budget deficits?',
    options: [
      'Higher private saving, which increases the capital stock.',
      'Lower real interest rates, which encourage more investment.',
      'Crowding out of private investment, which slows capital growth.',
      'Smaller transfer payments, which reduce household consumption.',
    ],
    correctAnswer: 2,
    explanation:
      'Sustained government borrowing keeps real interest rates higher, which reduces private investment and slows the growth of the capital stock and of potential output. Deficits raise, rather than lower, real interest rates in the loanable funds market.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'In a limited-reserves system, inflation is persistently above the central bank\'s target. Which of the following is the most appropriate monetary policy action?',
    options: [
      'Buy government bonds from banks on the open market.',
      'Lower the discount rate.',
      'Sell government bonds on the open market.',
      'Raise government spending and cut taxes.',
    ],
    correctAnswer: 2,
    explanation:
      'Selling bonds drains reserves from banks, reducing the money supply and raising interest rates, which lowers aggregate demand and inflation. Raising spending and cutting taxes is fiscal policy, and it would push inflation higher.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'Which of the following is a lag that makes discretionary fiscal policy difficult to time correctly?',
    options: [
      'The time Congress needs to debate and pass a spending or tax bill.',
      'The time the Federal Reserve needs to vote on a change in its policy rate.',
      'The time banks need to adjust lending after a reserve requirement change.',
      'The time households need to pay down loans after interest rates rise.',
    ],
    correctAnswer: 0,
    explanation:
      'Discretionary fiscal policy faces recognition, decision (legislative), and implementation lags, so a stimulus may take effect after the economy has already recovered. The other delays belong to monetary policy or private borrowing, and the Fed can change its policy rate at any meeting without new legislation.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    question: 'In the long run, sustained growth in real GDP per capita depends most directly on:',
    options: [
      'Frequent rounds of expansionary monetary policy by the central bank.',
      'Rising productivity from new machinery and better technology.',
      'Larger and more frequent federal budget deficits.',
      'A falling labor-force participation rate among adults.',
    ],
    correctAnswer: 1,
    explanation:
      'Living standards rise over time when each worker can produce more, which depends on physical capital, human capital, and technology. Repeated monetary expansion raises the price level in the long run but does not raise potential output.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-long-run-stabilization',
    stimulus:
      'An economy begins in long-run equilibrium with 5% unemployment and 2% inflation. The central bank then expands the money supply repeatedly, and expected inflation eventually adjusts to 4%.',
    question: 'In the new long-run equilibrium, the economy will most likely have:',
    options: [
      '5% unemployment and 4% inflation.',
      '3% unemployment and 4% inflation.',
      '5% unemployment and 2% inflation.',
      '3% unemployment and 2% inflation.',
    ],
    correctAnswer: 0,
    explanation:
      'Once expected inflation catches up to actual inflation, unemployment returns to its natural rate of 5% on the vertical long-run Phillips curve, but inflation stays at the new, higher 4%. Lower unemployment is only a short-run effect that lasts while inflation is unexpected.',
  },

  /* ============================ UNIT 6 — OPEN ECONOMY (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'A U.S. importer of cars from Japan must pay for them in yen. If the dollar appreciates against the yen, the U.S. importer:',
    options: [
      'Pays more dollars for each yen of the car\'s price.',
      'Pays fewer dollars for each yen of the car\'s price.',
      'Pays the same number of dollars for each yen.',
      'Pays more dollars in total, since a strong dollar raises import prices.',
    ],
    correctAnswer: 1,
    explanation:
      'An appreciating dollar buys more yen, which means each yen costs fewer dollars, so Japanese cars become cheaper for U.S. buyers. A stronger dollar lowers, rather than raises, the dollar price of imports.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'Which of the following would most likely cause the U.S. dollar to appreciate against the euro?',
    options: [
      'A decrease in U.S. real interest rates relative to euro-area rates.',
      'An increase in U.S. real interest rates relative to euro-area rates.',
      'A large increase in U.S. imports from the euro area.',
      'A sharp increase in U.S. inflation relative to the euro area.',
    ],
    correctAnswer: 1,
    explanation:
      'Higher relative real interest rates attract financial capital into U.S. assets, increasing the demand for dollars in the foreign exchange market and appreciating the dollar. More U.S. imports increase the supply of dollars, which would depreciate it.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    stimulus:
      'A country reports the following balance-of-payments figures, in billions of dollars:\n  Goods exports: 500     Goods imports: 700\n  Services exports: 200  Services imports: 100\n  Net investment income from abroad: −50',
    question: 'The current account balance is approximately:',
    options: [
      '−\\$300 billion',
      '−\\$150 billion',
      '+\\$100 billion',
      '+\\$200 billion',
    ],
    correctAnswer: 1,
    explanation:
      'The current account includes the balance on goods and services plus net investment income: (500 − 700) + (200 − 100) + (−50) = −150, or −\\$150 billion. The −\\$300 billion answer leaves out the services surplus.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'Under a flexible exchange rate with no central-bank intervention, a current account deficit of \\$150 billion is, by the balance-of-payments identity, matched by:',
    options: [
      'A capital and financial account surplus of about \\$150 billion.',
      'A capital and financial account deficit of about \\$150 billion.',
      'Sales of official reserves by the central bank of about \\$150 billion.',
      'A government budget surplus of about \\$150 billion.',
    ],
    correctAnswer: 0,
    explanation:
      'The current account and the capital and financial account sum to zero, so a \\$150 billion current account deficit is financed by a \\$150 billion net inflow of foreign financial capital, a financial account surplus. Without intervention, official reserve transactions play no role.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'If the United States imposes a new tariff on imported steel, which of the following is the most likely short-run effect in the U.S. steel market?',
    options: [
      'Higher domestic steel output and fewer steel imports.',
      'Lower domestic steel prices and lower domestic steel output.',
      'No change in the price of either domestic or imported steel.',
      'More steel imports as foreign producers cut prices to compete.',
    ],
    correctAnswer: 0,
    explanation:
      'The tariff raises the price of imported steel in the U.S. market, so buyers shift toward domestic steel and domestic producers expand output while imports fall. The domestic steel price rises rather than falls, which is why steel-using industries tend to oppose such tariffs.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'When the U.S. dollar depreciates, U.S. net exports are most likely to:',
    options: [
      'Decrease, because U.S. exports become more expensive abroad.',
      'Decrease, because imports into the U.S. become cheaper.',
      'Increase, because U.S. goods become cheaper to foreign buyers.',
      'Stay the same, because higher export volumes are offset by lower export prices.',
    ],
    correctAnswer: 2,
    explanation:
      'A weaker dollar lowers the foreign-currency price of U.S. goods and raises the dollar price of foreign goods, so exports rise and imports fall. Exports would become more expensive abroad only if the dollar appreciated.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-open-economy',
    question: 'Expansionary U.S. monetary policy will, through the foreign exchange market, most likely cause which of the following?',
    options: [
      'The dollar appreciates and net exports decrease.',
      'The dollar depreciates and net exports increase.',
      'The dollar appreciates and net exports increase.',
      'The dollar depreciates and net exports decrease.',
    ],
    correctAnswer: 1,
    explanation:
      'Lower U.S. interest rates make U.S. assets less attractive, reducing the demand for dollars, so the dollar depreciates. A cheaper dollar makes U.S. exports cheaper abroad and imports more expensive at home, so net exports rise.',
  },
]
