import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Environmental Science course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-environmental-science' },
    update: {},
    create: {
      slug: 'ap-environmental-science',
      name: 'AP Environmental Science',
      icon: '🌍',
      description: 'Study ecosystems, biodiversity, population dynamics, land and water use, energy, pollution, and sustainability.',
      order: 27,
      color: 'green',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: The Living World: Ecosystems ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'apes-ecosystems' },
    update: {},
    create: {
      slug: 'apes-ecosystems',
      name: 'The Living World: Ecosystems',
      description: 'Ecosystem structure, energy flow, biogeochemical cycles, and primary productivity',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: The Living World: Ecosystems')

  await prisma.topic.upsert({
    where: { slug: 'apes-ecosystem-structure' },
    update: {},
    create: {
      slug: 'apes-ecosystem-structure',
      title: 'Ecosystem Structure & Energy Flow',
      description: 'Trophic levels, food chains/webs, energy pyramids, primary productivity (GPP, NPP), and nutrient cycling',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🌿 Ecosystem Structure & Energy Flow\n\nStudy ecosystem components (biotic/abiotic), trophic levels (producers, primary/secondary/tertiary consumers, decomposers), food chains and food webs, the 10% rule of energy transfer, ecological pyramids (energy, biomass, numbers), gross and net primary productivity, and nutrient cycling.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-biogeochemical-cycles' },
    update: {},
    create: {
      slug: 'apes-biogeochemical-cycles',
      title: 'Biogeochemical Cycles',
      description: 'Carbon, nitrogen, phosphorus, and water cycles; human impacts on nutrient cycling',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🔄 Biogeochemical Cycles\n\nMaster the carbon cycle (photosynthesis, respiration, combustion, ocean absorption), nitrogen cycle (fixation, nitrification, denitrification, assimilation), phosphorus cycle (weathering, runoff, sedimentation), and the water/hydrologic cycle (evaporation, transpiration, precipitation, infiltration). Understand human disruptions to each cycle.`,
    },
  })

  // ─── Unit 2: The Living World: Biodiversity ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'apes-biodiversity' },
    update: {},
    create: {
      slug: 'apes-biodiversity',
      name: 'The Living World: Biodiversity',
      description: 'Ecological succession, biomes, biodiversity, and island biogeography',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: The Living World: Biodiversity')

  await prisma.topic.upsert({
    where: { slug: 'apes-biomes-succession' },
    update: {},
    create: {
      slug: 'apes-biomes-succession',
      title: 'Biomes & Ecological Succession',
      description: 'Terrestrial biomes, aquatic ecosystems, primary and secondary succession, and species interactions',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🌎 Biomes & Ecological Succession\n\nStudy major terrestrial biomes (tropical rainforest, desert, tundra, temperate forest, grassland, taiga), aquatic ecosystems (freshwater, marine, estuary, coral reef), primary vs secondary succession, pioneer and climax communities, and species interactions (competition, predation, mutualism, commensalism, parasitism).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-biodiversity-conservation' },
    update: {},
    create: {
      slug: 'apes-biodiversity-conservation',
      title: 'Biodiversity & Conservation',
      description: 'Biodiversity importance, threats (HIPPO), endangered species, and conservation strategies',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🐾 Biodiversity & Conservation\n\nExplore types of biodiversity (genetic, species, ecosystem), island biogeography theory, threats to biodiversity (HIPPO: Habitat loss, Invasive species, Population growth, Pollution, Overexploitation), endangered/threatened species, the Endangered Species Act, and conservation strategies (habitat corridors, seed banks, captive breeding).`,
    },
  })

  // ─── Unit 3: Populations ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'apes-populations' },
    update: {},
    create: {
      slug: 'apes-populations',
      name: 'Populations',
      description: 'Population ecology, growth models, carrying capacity, and human population',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Populations')

  await prisma.topic.upsert({
    where: { slug: 'apes-population-ecology' },
    update: {},
    create: {
      slug: 'apes-population-ecology',
      title: 'Population Ecology',
      description: 'Population density, growth models (exponential, logistic), carrying capacity, r/K strategists, and survivorship curves',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 📈 Population Ecology\n\nStudy population characteristics (size, density, distribution, age structure), exponential growth (J-curve), logistic growth (S-curve, carrying capacity K), density-dependent and density-independent limiting factors, r-selected vs K-selected species, and survivorship curves (Type I, II, III).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-human-population' },
    update: {},
    create: {
      slug: 'apes-human-population',
      title: 'Human Population Dynamics',
      description: 'Demographic transition, age-structure diagrams, total fertility rate, and population policies',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 👥 Human Population Dynamics\n\nExplore human population growth trends, the demographic transition model (4 stages), age-structure diagrams (pyramids, columns, inverted), total fertility rate, infant mortality, life expectancy, population momentum, and the environmental impact of population growth (I=PAT formula).`,
    },
  })

  // ─── Unit 4: Earth Systems & Resources ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'apes-earth-systems' },
    update: {},
    create: {
      slug: 'apes-earth-systems',
      name: 'Earth Systems & Resources',
      description: 'Geology, soil science, atmosphere, weather, and climate',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Earth Systems & Resources')

  await prisma.topic.upsert({
    where: { slug: 'apes-geology-soil' },
    update: {},
    create: {
      slug: 'apes-geology-soil',
      title: 'Geology & Soil Science',
      description: 'Plate tectonics, rock cycle, soil formation, soil horizons, and erosion',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🪨 Geology & Soil Science\n\nStudy plate tectonics (divergent, convergent, transform boundaries), earthquakes and volcanoes, the rock cycle, soil formation and composition, soil horizons (O, A, B, C, R), soil texture triangle, soil erosion causes and prevention, and the importance of soil for agriculture and ecosystems.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-atmosphere-climate' },
    update: {},
    create: {
      slug: 'apes-atmosphere-climate',
      title: 'Atmosphere & Climate',
      description: 'Atmospheric layers, weather patterns, Coriolis effect, El Niño/La Niña, and climate factors',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🌤️ Atmosphere & Climate\n\nExplore the atmospheric layers (troposphere, stratosphere, mesosphere, thermosphere), weather vs climate, the Coriolis effect, global wind patterns, rain shadow effect, El Niño/La Niña (ENSO), ocean currents, and factors affecting regional climates.`,
    },
  })

  // ─── Unit 5: Land & Water Use ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'apes-land-water' },
    update: {},
    create: {
      slug: 'apes-land-water',
      name: 'Land & Water Use',
      description: 'Agriculture, forestry, mining, fishing, and water resource management',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Land & Water Use')

  await prisma.topic.upsert({
    where: { slug: 'apes-agriculture-land' },
    update: {},
    create: {
      slug: 'apes-agriculture-land',
      title: 'Agriculture & Land Management',
      description: 'Farming practices, the Green Revolution, GMOs, deforestation, overgrazing, and sustainable agriculture',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🌾 Agriculture & Land Management\n\nStudy farming practices (monoculture, polyculture, crop rotation), the Green Revolution, GMOs (benefits and concerns), pesticide use (bioaccumulation, biomagnification), deforestation, overgrazing, desertification, urban sprawl, and sustainable agriculture (IPM, organic farming, no-till).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-water-resources' },
    update: {},
    create: {
      slug: 'apes-water-resources',
      title: 'Water Resources',
      description: 'Freshwater distribution, aquifers, dams, irrigation, water pollution, and conservation',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 💧 Water Resources\n\nExplore freshwater distribution, groundwater and aquifers (Ogallala), surface water, dams and reservoirs (benefits/drawbacks), irrigation methods, water privatization, desalination, water conservation strategies, and the global water crisis.`,
    },
  })

  // ─── Unit 6: Energy Resources & Consumption ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'apes-energy' },
    update: {},
    create: {
      slug: 'apes-energy',
      name: 'Energy Resources & Consumption',
      description: 'Fossil fuels, nuclear energy, renewable energy, and energy conservation',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Energy Resources & Consumption')

  await prisma.topic.upsert({
    where: { slug: 'apes-fossil-fuels-nuclear' },
    update: {},
    create: {
      slug: 'apes-fossil-fuels-nuclear',
      title: 'Fossil Fuels & Nuclear Energy',
      description: 'Coal, oil, natural gas formation and extraction, nuclear fission, and environmental impacts',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ⛽ Fossil Fuels & Nuclear Energy\n\nStudy fossil fuel formation (coal, oil, natural gas), extraction methods (mining, fracking, drilling), environmental impacts (air pollution, oil spills, habitat destruction), nuclear fission, nuclear power plant operation, radioactive waste management, Chernobyl, Fukushima, and the debate over nuclear energy.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-renewable-energy' },
    update: {},
    create: {
      slug: 'apes-renewable-energy',
      title: 'Renewable Energy',
      description: 'Solar, wind, hydroelectric, geothermal, biomass, and hydrogen fuel cells',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ☀️ Renewable Energy\n\nExplore renewable energy sources: solar (photovoltaic, concentrated), wind, hydroelectric (dams, run-of-river), geothermal, biomass (biofuels, ethanol), tidal, wave, and hydrogen fuel cells. Compare advantages/disadvantages, capacity factor, and environmental impacts of each.`,
    },
  })

  // ─── Unit 7: Atmospheric Pollution ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'apes-atmospheric-pollution' },
    update: {},
    create: {
      slug: 'apes-atmospheric-pollution',
      name: 'Atmospheric Pollution',
      description: 'Air pollutants, smog, acid rain, ozone depletion, and indoor air quality',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Atmospheric Pollution')

  await prisma.topic.upsert({
    where: { slug: 'apes-air-pollution' },
    update: {},
    create: {
      slug: 'apes-air-pollution',
      title: 'Air Pollution & Smog',
      description: 'Primary and secondary pollutants, photochemical smog, industrial smog, acid deposition, and the Clean Air Act',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🏭 Air Pollution & Smog\n\nStudy primary pollutants (CO, SO₂, NOₓ, particulates, VOCs, lead) and secondary pollutants (ozone, peroxyacetyl nitrate), photochemical smog vs industrial smog, thermal inversions, acid deposition (causes, effects on ecosystems), the Clean Air Act, and air quality monitoring.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-ozone-indoor-air' },
    update: {},
    create: {
      slug: 'apes-ozone-indoor-air',
      title: 'Ozone Depletion & Indoor Air Quality',
      description: 'Stratospheric ozone, CFCs, the Montreal Protocol, indoor pollutants (radon, asbestos, CO), and sick building syndrome',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🛡️ Ozone Depletion & Indoor Air Quality\n\nExplore stratospheric ozone (function, location), CFCs and ozone destruction, the ozone hole, the Montreal Protocol (success story), indoor air pollutants (radon, asbestos, carbon monoxide, formaldehyde, mold), sick building syndrome, and strategies for improving indoor air quality.`,
    },
  })

  // ─── Unit 8: Aquatic & Terrestrial Pollution ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'apes-water-land-pollution' },
    update: {},
    create: {
      slug: 'apes-water-land-pollution',
      name: 'Aquatic & Terrestrial Pollution',
      description: 'Water pollution, solid waste, hazardous waste, and environmental legislation',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Aquatic & Terrestrial Pollution')

  await prisma.topic.upsert({
    where: { slug: 'apes-water-pollution' },
    update: {},
    create: {
      slug: 'apes-water-pollution',
      title: 'Water Pollution',
      description: 'Point and nonpoint source pollution, eutrophication, thermal pollution, and water treatment',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🌊 Water Pollution\n\nStudy point source vs nonpoint source pollution, major water pollutants (pathogens, nutrients, heavy metals, sediment, thermal), eutrophication and dead zones, biological oxygen demand (BOD), water quality indicators, wastewater treatment (primary, secondary, tertiary), and the Clean Water Act.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-solid-hazardous-waste' },
    update: {},
    create: {
      slug: 'apes-solid-hazardous-waste',
      title: 'Solid & Hazardous Waste',
      description: 'Municipal solid waste, landfills, incineration, recycling, e-waste, and Superfund sites',
      order: 2,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🗑️ Solid & Hazardous Waste\n\nExplore municipal solid waste (composition, trends), landfill design (liners, leachate collection, methane capture), incineration, the reduce-reuse-recycle hierarchy, composting, e-waste, hazardous waste management, Love Canal, CERCLA/Superfund, brownfields, and environmental justice.`,
    },
  })

  // ─── Unit 9: Global Change ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'apes-global-change' },
    update: {},
    create: {
      slug: 'apes-global-change',
      name: 'Global Change',
      description: 'Climate change, greenhouse effect, sea level rise, and sustainability',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Global Change')

  await prisma.topic.upsert({
    where: { slug: 'apes-climate-change' },
    update: {},
    create: {
      slug: 'apes-climate-change',
      title: 'Climate Change',
      description: 'Greenhouse effect, greenhouse gases, evidence of warming, impacts, and mitigation strategies',
      order: 1,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🌡️ Climate Change\n\nStudy the greenhouse effect, major greenhouse gases (CO₂, CH₄, N₂O, CFCs), evidence of global warming (ice cores, temperature records, glacier retreat, sea level rise), impacts (coral bleaching, extreme weather, species migration, food security), the IPCC, Paris Agreement, carbon trading, and mitigation/adaptation strategies.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apes-sustainability' },
    update: {},
    create: {
      slug: 'apes-sustainability',
      title: 'Sustainability & the Future',
      description: 'Sustainable development, ecological footprint, LEED, environmental legislation, and global cooperation',
      order: 2,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🌱 Sustainability & the Future\n\nExplore sustainable development (meeting present needs without compromising future generations), ecological footprint, LEED certification, environmental legislation (NEPA, EPA, ESA), international agreements (Kyoto Protocol, Paris Agreement), environmental ethics, and the role of individuals, businesses, and governments in achieving sustainability.`,
    },
  })

  console.log('\n🎉 AP Environmental Science seeding complete!')
  console.log('  📚 9 categories, 18 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
