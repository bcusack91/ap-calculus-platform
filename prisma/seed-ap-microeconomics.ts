import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Microeconomics course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-microeconomics' },
    update: {},
    create: {
      slug: 'ap-microeconomics',
      name: 'AP Microeconomics',
      icon: '📉',
      description: 'Study supply and demand, consumer choice, production costs, market structures, and market failures.',
      order: 23,
      color: 'teal',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Basic Economic Concepts ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'micro-basic-concepts' },
    update: {},
    create: {
      slug: 'micro-basic-concepts',
      name: 'Basic Economic Concepts',
      description: 'Scarcity, opportunity cost, marginal analysis, and the production possibilities curve',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Basic Economic Concepts')

  await prisma.topic.upsert({
    where: { slug: 'micro-scarcity-marginal-analysis' },
    update: {},
    create: {
      slug: 'micro-scarcity-marginal-analysis',
      title: 'Scarcity & Marginal Analysis',
      description: 'Scarcity, opportunity cost, marginal benefit vs marginal cost, and rational decision-making',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 💡 Scarcity & Marginal Analysis\n\nStudy the economic problem of scarcity, opportunity cost, the production possibilities curve, marginal analysis (marginal benefit vs marginal cost), rational decision-making, and the concept of utility maximization.`,
    },
  })

  // ─── Unit 2: Supply & Demand ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'micro-supply-demand' },
    update: {},
    create: {
      slug: 'micro-supply-demand',
      name: 'Supply & Demand',
      description: 'Market equilibrium, shifts, elasticity, and government intervention',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Supply & Demand')

  await prisma.topic.upsert({
    where: { slug: 'micro-demand-supply-equilibrium' },
    update: {},
    create: {
      slug: 'micro-demand-supply-equilibrium',
      title: 'Demand, Supply & Equilibrium',
      description: 'Law of demand, law of supply, determinants, equilibrium price and quantity, and surplus/shortage',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📊 Demand, Supply & Equilibrium\n\nMaster the law of demand, determinants of demand (income, tastes, prices of related goods, expectations, number of buyers), the law of supply, determinants of supply, equilibrium price and quantity, and what causes surpluses and shortages.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'micro-elasticity' },
    update: {},
    create: {
      slug: 'micro-elasticity',
      title: 'Elasticity',
      description: 'Price elasticity of demand and supply, cross-price elasticity, income elasticity, and total revenue',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📏 Elasticity\n\nStudy price elasticity of demand (elastic, inelastic, unit elastic), determinants of elasticity, the total revenue test, price elasticity of supply, cross-price elasticity, income elasticity, and how elasticity affects tax incidence.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'micro-government-intervention' },
    update: {},
    create: {
      slug: 'micro-government-intervention',
      title: 'Government Intervention',
      description: 'Price ceilings, price floors, taxes, subsidies, consumer/producer surplus, and deadweight loss',
      order: 3,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ⚖️ Government Intervention\n\nExplore consumer surplus, producer surplus, total surplus, price ceilings (rent control), price floors (minimum wage), excise taxes, tax incidence, subsidies, deadweight loss, and the efficiency of free markets.`,
    },
  })

  // ─── Unit 3: Production, Cost & the Perfect Competition Model ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'micro-production-cost' },
    update: {},
    create: {
      slug: 'micro-production-cost',
      name: 'Production, Cost & Perfect Competition',
      description: 'Production functions, cost curves, and the perfectly competitive market',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Production, Cost & Perfect Competition')

  await prisma.topic.upsert({
    where: { slug: 'micro-production-costs' },
    update: {},
    create: {
      slug: 'micro-production-costs',
      title: 'Production & Costs',
      description: 'Short-run production, marginal product, fixed/variable costs, ATC, AVC, MC, and economies of scale',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🏭 Production & Costs\n\nStudy the production function, total product, marginal product, diminishing marginal returns, fixed vs variable costs, total cost, average total cost (ATC), average variable cost (AVC), marginal cost (MC), and long-run economies/diseconomies of scale.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'micro-perfect-competition' },
    update: {},
    create: {
      slug: 'micro-perfect-competition',
      title: 'Perfect Competition',
      description: 'Characteristics, profit maximization (MR=MC), short-run shutdown, long-run equilibrium, and efficiency',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 📊 Perfect Competition\n\nMaster the characteristics of perfect competition, profit maximization (MR = MC), economic profit vs normal profit, short-run shutdown rule (P < AVC), long-run equilibrium (P = ATC = MC), productive and allocative efficiency.`,
    },
  })

  // ─── Unit 4: Imperfect Competition ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'micro-imperfect-competition' },
    update: {},
    create: {
      slug: 'micro-imperfect-competition',
      name: 'Imperfect Competition',
      description: 'Monopoly, monopolistic competition, oligopoly, and game theory',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Imperfect Competition')

  await prisma.topic.upsert({
    where: { slug: 'micro-monopoly' },
    update: {},
    create: {
      slug: 'micro-monopoly',
      title: 'Monopoly',
      description: 'Barriers to entry, price-making, MR < P, deadweight loss, natural monopoly, and price discrimination',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🏢 Monopoly\n\nStudy barriers to entry, the monopolist as price maker, marginal revenue below price, profit maximization, deadweight loss from monopoly, natural monopoly, government regulation, and price discrimination (first, second, third degree).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'micro-monopolistic-oligopoly' },
    update: {},
    create: {
      slug: 'micro-monopolistic-oligopoly',
      title: 'Monopolistic Competition & Oligopoly',
      description: 'Product differentiation, excess capacity, oligopoly models, game theory, and Nash equilibrium',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🎮 Monopolistic Competition & Oligopoly\n\nExplore monopolistic competition (product differentiation, short-run vs long-run profit, excess capacity), oligopoly (mutual interdependence, collusion, cartels), game theory (prisoner's dilemma, Nash equilibrium, dominant strategies), and kinked demand curves.`,
    },
  })

  // ─── Unit 5: Factor Markets ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'micro-factor-markets' },
    update: {},
    create: {
      slug: 'micro-factor-markets',
      name: 'Factor Markets',
      description: 'Labor markets, wages, marginal revenue product, and income distribution',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Factor Markets')

  await prisma.topic.upsert({
    where: { slug: 'micro-labor-markets' },
    update: {},
    create: {
      slug: 'micro-labor-markets',
      title: 'Labor Markets & Factor Pricing',
      description: 'Derived demand, MRP, MFC, wage determination, monopsony, and labor unions',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 👷 Labor Markets & Factor Pricing\n\nStudy derived demand for labor, marginal revenue product (MRP), marginal factor cost (MFC), the profit-maximizing hiring rule (MRP = MFC), wage determination in competitive and monopsony markets, labor unions, and bilateral monopoly.`,
    },
  })

  // ─── Unit 6: Market Failure & Government ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'micro-market-failure' },
    update: {},
    create: {
      slug: 'micro-market-failure',
      name: 'Market Failure & the Role of Government',
      description: 'Externalities, public goods, income inequality, and government policies',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Market Failure & Government')

  await prisma.topic.upsert({
    where: { slug: 'micro-externalities-public-goods' },
    update: {},
    create: {
      slug: 'micro-externalities-public-goods',
      title: 'Externalities & Public Goods',
      description: 'Positive/negative externalities, Pigouvian taxes, public goods, free riders, and the Lorenz curve',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🌍 Externalities & Public Goods\n\nExplore positive and negative externalities, marginal social benefit vs marginal private benefit, Pigouvian taxes and subsidies, the Coase theorem, public goods (non-rival, non-excludable), free-rider problem, common resources (tragedy of the commons), the Lorenz curve, and the Gini coefficient.`,
    },
  })

  console.log('\n🎉 AP Microeconomics seeding complete!')
  console.log('  📚 6 categories, 12 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
