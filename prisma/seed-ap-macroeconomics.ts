import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Macroeconomics course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-macroeconomics' },
    update: {},
    create: {
      slug: 'ap-macroeconomics',
      name: 'AP Macroeconomics',
      icon: '📈',
      description: 'Master GDP, inflation, unemployment, fiscal policy, monetary policy, and international trade.',
      order: 22,
      color: 'emerald',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Basic Economic Concepts ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'macro-basic-concepts' },
    update: {},
    create: {
      slug: 'macro-basic-concepts',
      name: 'Basic Economic Concepts',
      description: 'Scarcity, opportunity cost, production possibilities, comparative advantage, and economic systems',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Basic Economic Concepts')

  await prisma.topic.upsert({
    where: { slug: 'macro-scarcity-opportunity-cost' },
    update: {},
    create: {
      slug: 'macro-scarcity-opportunity-cost',
      title: 'Scarcity & Opportunity Cost',
      description: 'Scarcity, factors of production, opportunity cost, production possibilities curve, and trade-offs',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 💡 Scarcity & Opportunity Cost\n\nStudy the fundamental economic problem of scarcity, factors of production (land, labor, capital, entrepreneurship), opportunity cost, the production possibilities curve (PPC), efficiency, growth, and trade-offs in resource allocation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'macro-comparative-advantage' },
    update: {},
    create: {
      slug: 'macro-comparative-advantage',
      title: 'Comparative Advantage & Trade',
      description: 'Absolute vs comparative advantage, terms of trade, specialization, and economic systems',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🤝 Comparative Advantage & Trade\n\nExplore absolute vs comparative advantage, terms of trade, gains from specialization, economic systems (command, market, mixed), and the circular flow model (households, firms, government, foreign sector).`,
    },
  })

  // ─── Unit 2: Economic Indicators & the Business Cycle ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'macro-indicators' },
    update: {},
    create: {
      slug: 'macro-indicators',
      name: 'Economic Indicators & the Business Cycle',
      description: 'GDP, unemployment, inflation, and the business cycle',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Economic Indicators')

  await prisma.topic.upsert({
    where: { slug: 'macro-gdp-growth' },
    update: {},
    create: {
      slug: 'macro-gdp-growth',
      title: 'GDP & Economic Growth',
      description: 'GDP measurement (expenditure and income approaches), nominal vs real GDP, GDP deflator, and limitations',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📊 GDP & Economic Growth\n\nMaster GDP measurement using the expenditure approach (C + I + G + Xn) and income approach. Understand nominal vs real GDP, the GDP deflator, per capita GDP, GDP limitations, and economic growth determinants.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'macro-unemployment-inflation' },
    update: {},
    create: {
      slug: 'macro-unemployment-inflation',
      title: 'Unemployment & Inflation',
      description: 'Types of unemployment, natural rate, CPI, inflation types, and the business cycle',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📉 Unemployment & Inflation\n\nStudy types of unemployment (frictional, structural, cyclical, seasonal), the natural rate of unemployment, labor force participation rate, CPI calculation, demand-pull vs cost-push inflation, hyperinflation, deflation, and business cycle phases (expansion, peak, contraction, trough).`,
    },
  })

  // ─── Unit 3: National Income & Price Determination ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'macro-ad-as' },
    update: {},
    create: {
      slug: 'macro-ad-as',
      name: 'National Income & Price Determination',
      description: 'Aggregate demand, aggregate supply, and macroeconomic equilibrium',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: National Income & Price Determination')

  await prisma.topic.upsert({
    where: { slug: 'macro-aggregate-demand-supply' },
    update: {},
    create: {
      slug: 'macro-aggregate-demand-supply',
      title: 'Aggregate Demand & Supply',
      description: 'AD curve, SRAS, LRAS, shifts, macroeconomic equilibrium, and output gaps',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 📈 Aggregate Demand & Supply\n\nMaster aggregate demand (AD) and its components, the wealth effect, interest rate effect, and exchange rate effect. Study short-run aggregate supply (SRAS), long-run aggregate supply (LRAS), shifts in AD and AS, macroeconomic equilibrium, recessionary and inflationary gaps, and self-correction.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'macro-multiplier-effect' },
    update: {},
    create: {
      slug: 'macro-multiplier-effect',
      title: 'The Multiplier Effect',
      description: 'Spending multiplier, tax multiplier, MPC, MPS, and autonomous vs induced changes',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ✖️ The Multiplier Effect\n\nStudy the marginal propensity to consume (MPC) and save (MPS), the spending multiplier (1/MPS), the tax multiplier (MPC/MPS), the balanced budget multiplier, and how changes in spending create ripple effects through the economy.`,
    },
  })

  // ─── Unit 4: Financial Sector ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'macro-financial-sector' },
    update: {},
    create: {
      slug: 'macro-financial-sector',
      name: 'Financial Sector',
      description: 'Money, banking, the Federal Reserve, and monetary policy',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Financial Sector')

  await prisma.topic.upsert({
    where: { slug: 'macro-money-banking' },
    update: {},
    create: {
      slug: 'macro-money-banking',
      title: 'Money & Banking',
      description: 'Functions of money, money supply, money demand, fractional reserve banking, and the money multiplier',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 💰 Money & Banking\n\nStudy the functions of money (medium of exchange, unit of account, store of value), types of money (commodity, fiat), money supply measures (M1, M2), the loanable funds market, fractional reserve banking, the money multiplier (1/required reserve ratio), and the money market.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'macro-monetary-policy' },
    update: {},
    create: {
      slug: 'macro-monetary-policy',
      title: 'The Fed & Monetary Policy',
      description: 'Federal Reserve structure, open market operations, discount rate, reserve requirements, and policy tools',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🏦 The Fed & Monetary Policy\n\nExplore the Federal Reserve System (structure, functions), monetary policy tools (open market operations, discount rate, reserve requirements, federal funds rate), expansionary vs contractionary monetary policy, the Taylor Rule, and the quantity theory of money.`,
    },
  })

  // ─── Unit 5: Fiscal Policy & Stabilization ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'macro-fiscal-policy' },
    update: {},
    create: {
      slug: 'macro-fiscal-policy',
      name: 'Long-Run Consequences of Stabilization Policies',
      description: 'Government spending, taxation, budget deficits, and the Phillips Curve',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Long-Run Consequences of Stabilization Policies')

  await prisma.topic.upsert({
    where: { slug: 'macro-fiscal-policy-tools' },
    update: {},
    create: {
      slug: 'macro-fiscal-policy-tools',
      title: 'Fiscal Policy',
      description: 'Expansionary and contractionary fiscal policy, automatic stabilizers, crowding out, and the national debt',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🏛️ Fiscal Policy\n\nStudy expansionary fiscal policy (increase G, decrease T) and contractionary fiscal policy (decrease G, increase T), discretionary vs automatic stabilizers, time lags, the crowding-out effect, budget deficits and surpluses, and the national debt.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'macro-phillips-curve' },
    update: {},
    create: {
      slug: 'macro-phillips-curve',
      title: 'Phillips Curve & Long-Run Adjustment',
      description: 'Short-run Phillips Curve, long-run Phillips Curve, stagflation, and supply-side economics',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 📉 Phillips Curve & Long-Run Adjustment\n\nExplore the short-run Phillips Curve (inflation-unemployment trade-off), the long-run Phillips Curve (at natural rate of unemployment), shifts in the Phillips Curve, stagflation, expectations theory, and supply-side economics (Laffer Curve).`,
    },
  })

  // ─── Unit 6: Open Economy ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'macro-open-economy' },
    update: {},
    create: {
      slug: 'macro-open-economy',
      name: 'Open Economy: International Trade & Finance',
      description: 'Balance of payments, exchange rates, and international capital flows',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Open Economy')

  await prisma.topic.upsert({
    where: { slug: 'macro-international-trade-finance' },
    update: {},
    create: {
      slug: 'macro-international-trade-finance',
      title: 'International Trade & Finance',
      description: 'Balance of payments, current/capital accounts, exchange rates (floating vs fixed), and trade barriers',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🌐 International Trade & Finance\n\nStudy the balance of payments (current account, capital/financial account), trade deficits and surpluses, floating vs fixed exchange rates, currency appreciation and depreciation, tariffs and quotas, and how net exports affect AD.`,
    },
  })

  console.log('\n🎉 AP Macroeconomics seeding complete!')
  console.log('  📚 6 categories, 13 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
