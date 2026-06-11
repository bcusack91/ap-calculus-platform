import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Human Geography course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-human-geography' },
    update: {},
    create: {
      slug: 'ap-human-geography',
      name: 'AP Human Geography',
      icon: '🗺️',
      description: 'Study population, migration, culture, political geography, agriculture, and urbanization patterns worldwide.',
      order: 18,
      color: 'sky',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Thinking Geographically ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'hg-thinking-geographically' },
    update: {},
    create: {
      slug: 'hg-thinking-geographically',
      name: 'Thinking Geographically',
      description: 'Geographic concepts, tools, spatial relationships, and data analysis',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Thinking Geographically')

  await prisma.topic.upsert({
    where: { slug: 'hg-intro-geography' },
    update: {},
    create: {
      slug: 'hg-intro-geography',
      title: 'Introduction to Geography',
      description: 'Five themes of geography, spatial concepts, geographic tools, and map types',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🗺️ Introduction to Geography\n\nMaster the five themes of geography (location, place, human-environment interaction, movement, region), types of maps (reference, thematic, choropleth, dot-distribution, isoline), map projections, scale, GIS, GPS, and remote sensing.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-spatial-concepts' },
    update: {},
    create: {
      slug: 'hg-spatial-concepts',
      title: 'Spatial Concepts & Data',
      description: 'Spatial patterns, density, distribution, concentration, and geographic data analysis',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 📊 Spatial Concepts & Data\n\nUnderstand spatial patterns including distribution, density (arithmetic, physiological, agricultural), concentration, and pattern. Learn to interpret geographic data, recognize scale of analysis, and apply regionalization concepts.`,
    },
  })

  // ─── Unit 2: Population & Migration ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'hg-population-migration' },
    update: {},
    create: {
      slug: 'hg-population-migration',
      name: 'Population & Migration Patterns',
      description: 'Population distribution, growth, the demographic transition, and migration',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Population & Migration Patterns')

  await prisma.topic.upsert({
    where: { slug: 'hg-population-distribution' },
    update: {},
    create: {
      slug: 'hg-population-distribution',
      title: 'Population Distribution & Composition',
      description: 'Population density, distribution factors, population pyramids, and demographic measures',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 👥 Population Distribution & Composition\n\nStudy global population distribution patterns, factors influencing settlement, population pyramids, dependency ratios, sex ratios, and the concentrations of population in East Asia, South Asia, and Europe.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-population-growth' },
    update: {},
    create: {
      slug: 'hg-population-growth',
      title: 'Population Growth & Demographic Transition',
      description: 'Crude birth/death rates, RNI, DTM stages, epidemiological transition, and population policies',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📈 Population Growth & Demographic Transition\n\nMaster crude birth rate, crude death rate, rate of natural increase, total fertility rate, infant mortality rate, and the Demographic Transition Model (DTM) stages 1–5. Study Malthus, epidemiologic transition, and population policies.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-migration' },
    update: {},
    create: {
      slug: 'hg-migration',
      title: 'Migration',
      description: 'Push/pull factors, Ravenstein\'s laws, voluntary/forced migration, refugees, and immigration policies',
      order: 3,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🚶 Migration\n\nExplore push and pull factors, Ravenstein's laws of migration, voluntary vs forced migration, internal migration (rural-to-urban, interregional), international migration, refugees, asylum seekers, chain migration, and immigration policies worldwide.`,
    },
  })

  // ─── Unit 3: Cultural Patterns & Processes ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'hg-cultural-patterns' },
    update: {},
    create: {
      slug: 'hg-cultural-patterns',
      name: 'Cultural Patterns & Processes',
      description: 'Culture, language, religion, ethnicity, and cultural diffusion',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Cultural Patterns & Processes')

  await prisma.topic.upsert({
    where: { slug: 'hg-culture-diffusion' },
    update: {},
    create: {
      slug: 'hg-culture-diffusion',
      title: 'Culture & Cultural Diffusion',
      description: 'Cultural traits, hearths, diffusion types (relocation, expansion, hierarchical, contagious, stimulus), acculturation, assimilation',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🌐 Culture & Cultural Diffusion\n\nStudy cultural traits, complexes, and realms. Explore cultural hearths, types of diffusion (relocation, expansion, hierarchical, contagious, stimulus), acculturation, assimilation, syncretism, and cultural landscapes.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-language-religion' },
    update: {},
    create: {
      slug: 'hg-language-religion',
      title: 'Language & Religion',
      description: 'Language families, lingua franca, universalizing vs ethnic religions, sacred spaces, and religious landscapes',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🗣️ Language & Religion\n\nExplore language families (Indo-European, Sino-Tibetan), dialects, lingua franca, language extinction. Study universalizing religions (Christianity, Islam, Buddhism) vs ethnic religions (Hinduism, Judaism), sacred spaces, pilgrimage, and religious landscapes.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-ethnicity-identity' },
    update: {},
    create: {
      slug: 'hg-ethnicity-identity',
      title: 'Ethnicity, Gender & Identity',
      description: 'Race vs ethnicity, ethnic enclaves, gender roles, popular vs folk culture, cultural globalization',
      order: 3,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🤝 Ethnicity, Gender & Identity\n\nStudy race vs ethnicity, ethnic neighborhoods, ethnic conflict, gender roles and gender inequality, popular culture vs folk culture, cultural globalization, and resistance to globalization.`,
    },
  })

  // ─── Unit 4: Political Patterns & Processes ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'hg-political-patterns' },
    update: {},
    create: {
      slug: 'hg-political-patterns',
      name: 'Political Patterns & Processes',
      description: 'States, sovereignty, boundaries, governance, and geopolitics',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Political Patterns & Processes')

  await prisma.topic.upsert({
    where: { slug: 'hg-political-geography' },
    update: {},
    create: {
      slug: 'hg-political-geography',
      title: 'Political Geography & Sovereignty',
      description: 'Nation-states, sovereignty, types of boundaries, centripetal/centrifugal forces, and gerrymandering',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🏛️ Political Geography & Sovereignty\n\nStudy concepts of state, nation, nation-state, stateless nations, and multinational states. Explore types of boundaries (geometric, physical, ethnic), boundary disputes, sovereignty, federal vs unitary systems, and centripetal/centrifugal forces.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-political-power' },
    update: {},
    create: {
      slug: 'hg-political-power',
      title: 'Political Power & Territoriality',
      description: 'Colonialism, imperialism, supranational organizations, devolution, electoral geography',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ⚖️ Political Power & Territoriality\n\nExplore colonialism and imperialism, neocolonialism, supranational organizations (UN, EU, NATO, ASEAN), devolution, autonomy movements, electoral geography, gerrymandering, reapportionment, and redistricting.`,
    },
  })

  // ─── Unit 5: Agriculture & Rural Land Use ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'hg-agriculture' },
    update: {},
    create: {
      slug: 'hg-agriculture',
      name: 'Agriculture & Rural Land Use',
      description: 'Agricultural origins, practices, revolutions, and food production',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Agriculture & Rural Land Use')

  await prisma.topic.upsert({
    where: { slug: 'hg-agricultural-origins' },
    update: {},
    create: {
      slug: 'hg-agricultural-origins',
      title: 'Agricultural Origins & Revolutions',
      description: 'Neolithic Revolution, agricultural hearths, Green Revolution, von Thünen model, and farming types',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🌾 Agricultural Origins & Revolutions\n\nStudy the First (Neolithic) and Second (Industrial) Agricultural Revolutions, the Green Revolution, agricultural hearths, von Thünen's model, subsistence vs commercial agriculture, and the Third Agricultural Revolution (biotechnology).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-agricultural-practices' },
    update: {},
    create: {
      slug: 'hg-agricultural-practices',
      title: 'Agricultural Practices & Food Systems',
      description: 'Intensive vs extensive farming, plantation agriculture, agribusiness, food deserts, and sustainability',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🚜 Agricultural Practices & Food Systems\n\nExplore intensive vs extensive farming, shifting cultivation, pastoral nomadism, plantation agriculture, mixed crop/livestock farming, agribusiness, commodity chains, food deserts, and sustainable agriculture practices.`,
    },
  })

  // ─── Unit 6: Cities & Urban Land Use ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'hg-cities-urban' },
    update: {},
    create: {
      slug: 'hg-cities-urban',
      name: 'Cities & Urban Land Use',
      description: 'Urbanization, city models, suburban sprawl, and urban challenges',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Cities & Urban Land Use')

  await prisma.topic.upsert({
    where: { slug: 'hg-urbanization' },
    update: {},
    create: {
      slug: 'hg-urbanization',
      title: 'Urbanization & City Models',
      description: 'Urbanization trends, Burgess concentric zone, Hoyt sector, Harris-Ullman, edge cities, and megacities',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🏙️ Urbanization & City Models\n\nStudy global urbanization trends, the Burgess concentric zone model, Hoyt sector model, Harris-Ullman multiple nuclei model, Galactic city model, edge cities, primate cities, rank-size rule, megacities, and world cities.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-urban-challenges' },
    update: {},
    create: {
      slug: 'hg-urban-challenges',
      title: 'Urban Challenges & Sustainability',
      description: 'Suburbanization, sprawl, gentrification, squatter settlements, smart growth, and new urbanism',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🏗️ Urban Challenges & Sustainability\n\nExplore suburbanization, urban sprawl, gentrification, redlining, squatter settlements/favelas, brownfields, urban renewal, smart growth, new urbanism, and sustainable urban development.`,
    },
  })

  // ─── Unit 7: Industrialization & Economic Development ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'hg-industrialization' },
    update: {},
    create: {
      slug: 'hg-industrialization',
      name: 'Industrialization & Economic Development',
      description: 'Industrial Revolution, development indicators, trade, and globalization',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Industrialization & Economic Development')

  await prisma.topic.upsert({
    where: { slug: 'hg-industrialization-development' },
    update: {},
    create: {
      slug: 'hg-industrialization-development',
      title: 'Industrialization & Development Models',
      description: 'Industrial Revolution, Weber\'s model, Rostow\'s stages, Wallerstein\'s world-systems theory, and HDI',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🏭 Industrialization & Development Models\n\nStudy the Industrial Revolution, Weber's least-cost theory, Rostow's stages of economic growth, Wallerstein's world-systems theory (core, semi-periphery, periphery), HDI, GDP, GNI, and development indicators.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'hg-globalization-trade' },
    update: {},
    create: {
      slug: 'hg-globalization-trade',
      title: 'Globalization & Trade',
      description: 'Free trade, trade blocs, FDI, outsourcing, transnational corporations, and sustainable development',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🌐 Globalization & Trade\n\nExplore economic globalization, free trade agreements, trade blocs (EU, NAFTA/USMCA, ASEAN), foreign direct investment, outsourcing/offshoring, transnational corporations, the digital divide, and sustainable development goals.`,
    },
  })

  console.log('\n🎉 AP Human Geography seeding complete!')
  console.log('  📚 7 categories, 16 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
