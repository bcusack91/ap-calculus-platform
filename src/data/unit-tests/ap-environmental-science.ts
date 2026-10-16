import { enviroQuestionPool } from '@/data/exit-quizzes/ap-environmental-science'
import { AP_ENVIRO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-environmental-science-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 9 units of the AP Environmental Science CED. The exit pool groups them
 * into six broad domains, so its topics (and a few cross-unit items) are filed
 * by CED topic: biomes are Unit 1 (1.2-1.3); succession and fragmentation
 * Unit 2; the atmosphere's structure and circulation Unit 4, but the
 * greenhouse effect, ozone depletion, ocean acidification, invasive species
 * and endangered species are Unit 9; indoor air pollutants are Unit 7
 * (7.5-7.6). AP_ENVIRO_UNIT_SUPPLEMENT fills the units where the pool is thin.
 */
export const AP_ENVIRO_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'apes-ecosystem-structure': 'ecosystems',
    'apes-biogeochemical-cycles': 'ecosystems',
    'apes-earth-systems': 'earth-systems',
    'apes-geology-soil': 'earth-systems',
    'apes-atmosphere-climate': 'global-change',
    'apes-biodiversity': 'biodiversity',
    'apes-biomes-succession': 'biodiversity',
    'apes-biodiversity-conservation': 'global-change',
    'apes-population-ecology': 'populations',
    'apes-human-population': 'populations',
    'apes-agriculture-land': 'land-water',
    'apes-water-resources': 'land-water',
    'apes-sustainability': 'land-water',
    'apes-atmospheric-pollution': 'atmospheric-pollution',
    'apes-air-pollution': 'atmospheric-pollution',
    'apes-ozone-indoor-air': 'global-change',
    'apes-water-pollution': 'pollution',
    'apes-solid-hazardous-waste': 'pollution',
    'apes-climate-change': 'global-change',
  },
  stems: {
    // apes-biomes-succession: biomes are Unit 1; the permafrost item is Unit 9
    'A climate diagram shows monthly average temperatures below freezing': 'ecosystems',
    'Which two climate variables primarily determine which biome': 'ecosystems',
    'A region is hot all year with a long dry season': 'ecosystems',
    'A region receives about 18 cm of precipitation a year': 'ecosystems',
    'A weather station records an average of 9.8 inches of precipitation': 'ecosystems',
    'A biome has four distinct seasons': 'ecosystems',
    'As the Arctic warms, tundra permafrost thaws': 'global-change',
    // apes-biodiversity-conservation: fragmentation and corridors are Unit 2
    'Wildlife overpasses are built across a highway': 'biodiversity',
    'Compared with the interior of a large forest, the edge of a small': 'biodiversity',
    'A square forest reserve measures 10 km × 10 km': 'biodiversity',
    'A 10 km × 10 km forest is split by roads': 'biodiversity',
    'After a fuel spill on a beach, crews add nutrients': 'pollution',
    // apes-ozone-indoor-air: indoor air pollutants are Unit 7
    'A family\'s basement tests high for radon': 'atmospheric-pollution',
    'Which indoor air pollutant is classified as an asphyxiant': 'atmospheric-pollution',
    'An old school has intact asbestos insulation': 'atmospheric-pollution',
    'A sealed radon test canister reads 48 pCi/L': 'atmospheric-pollution',
    'A home\'s radon reading is above the recommended action level': 'atmospheric-pollution',
    'In many rural homes in low-income countries, families cook over open': 'atmospheric-pollution',
    'Which pairing of an air-quality problem with an effective fix': 'atmospheric-pollution',
    // apes-sustainability items that belong to another unit
    'Tourists pay to hike through a national forest': 'biodiversity',
    'Deer on an island grow well past the number': 'populations',
    'Which energy source is low-carbon during operation but nonrenewable': 'energy',
    'A utility links wind farms spread across several states': 'energy',
    'A school spends ': 'energy',
    'A phone maker designs handsets with screw-in parts': 'pollution',
    'Which statement about recycling metals such as aluminum': 'pollution',
    'A carbon tax of ': 'global-change',
    'Which international agreement set the first legally binding greenhouse': 'global-change',
  },
}

export const AP_ENVIRO_UNITS: UnitDef[] = [
  { id: 'ecosystems', unitNumber: 1, name: 'Unit 1: The Living World: Ecosystems', shortName: 'Ecosystems', description: 'Species interactions, biomes, biogeochemical cycles, primary productivity, trophic levels, and food webs.', topicSlugs: ['apes-ecosystem-structure', 'apes-biogeochemical-cycles'], exam_weight: '6–8%', color: 'from-green-500 to-emerald-500', icon: '🌿' },
  { id: 'biodiversity', unitNumber: 2, name: 'Unit 2: The Living World: Biodiversity', shortName: 'Biodiversity', description: 'Levels of biodiversity, ecosystem services, island biogeography, ecological tolerance, adaptation, and succession.', topicSlugs: ['apes-biodiversity', 'apes-biomes-succession'], exam_weight: '6–8%', color: 'from-emerald-500 to-teal-500', icon: '🦋' },
  { id: 'populations', unitNumber: 3, name: 'Unit 3: Populations', shortName: 'Populations', description: 'Generalists and specialists, r- and K-selection, survivorship, carrying capacity, and human population dynamics.', topicSlugs: ['apes-population-ecology', 'apes-human-population'], exam_weight: '10–15%', color: 'from-amber-500 to-orange-500', icon: '👥' },
  { id: 'earth-systems', unitNumber: 4, name: 'Unit 4: Earth Systems and Resources', shortName: 'Earth Systems', description: 'Plate tectonics, soil, the atmosphere, global winds, watersheds, solar radiation, and El Niño and La Niña.', topicSlugs: ['apes-earth-systems', 'apes-geology-soil'], exam_weight: '10–15%', color: 'from-blue-500 to-cyan-500', icon: '🌎' },
  { id: 'land-water', unitNumber: 5, name: 'Unit 5: Land and Water Use', shortName: 'Land & Water Use', description: 'The tragedy of the commons, forestry, agriculture and irrigation, meat production, fishing, mining, urbanization, and sustainability.', topicSlugs: ['apes-agriculture-land', 'apes-water-resources', 'apes-sustainability'], exam_weight: '10–15%', color: 'from-orange-500 to-red-500', icon: '🌾' },
  { id: 'energy', unitNumber: 6, name: 'Unit 6: Energy Resources and Consumption', shortName: 'Energy', description: 'Fossil fuels, nuclear power, biomass, solar, hydroelectric, geothermal, wind, and energy conservation.', topicSlugs: ['apes-fossil-fuels-nuclear', 'apes-renewable-energy', 'apes-energy'], exam_weight: '10–15%', color: 'from-rose-500 to-pink-500', icon: '⚡' },
  { id: 'atmospheric-pollution', unitNumber: 7, name: 'Unit 7: Atmospheric Pollution', shortName: 'Air Pollution', description: 'Primary and secondary pollutants, photochemical smog, thermal inversion, indoor air, reducing emissions, acid rain, and noise.', topicSlugs: ['apes-air-pollution', 'apes-atmospheric-pollution', 'apes-ozone-indoor-air'], exam_weight: '7–10%', color: 'from-slate-500 to-gray-500', icon: '🌫️' },
  { id: 'pollution', unitNumber: 8, name: 'Unit 8: Aquatic and Terrestrial Pollution', shortName: 'Water & Land Pollution', description: 'Point and nonpoint sources, eutrophication, thermal pollution, persistent pollutants, solid waste, and sewage treatment.', topicSlugs: ['apes-water-pollution', 'apes-solid-hazardous-waste'], exam_weight: '7–10%', color: 'from-cyan-500 to-blue-500', icon: '🚱' },
  { id: 'global-change', unitNumber: 9, name: 'Unit 9: Global Change', shortName: 'Global Change', description: 'Ozone depletion, the greenhouse effect, climate change, ocean warming and acidification, invasive and endangered species.', topicSlugs: ['apes-climate-change', 'apes-ozone-indoor-air', 'apes-biodiversity-conservation'], exam_weight: '15–20%', color: 'from-fuchsia-500 to-violet-500', icon: '🌡️' },
]

export const AP_ENVIRO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-environmental-science',
  courseHubHref: '/ap-environmental-science',
  courseTitle: 'AP Environmental Science',
  unitTestRoute: '/ap-enviro-unit-tests',
  units: AP_ENVIRO_UNITS,
  pool: [...assignUnits(enviroQuestionPool, AP_ENVIRO_UNIT_ASSIGNMENT), ...AP_ENVIRO_UNIT_SUPPLEMENT],
}
