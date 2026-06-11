import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP World History: Modern course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-world-history' },
    update: {},
    create: {
      slug: 'ap-world-history',
      name: 'AP World History: Modern',
      icon: '🌏',
      description: 'Trace global developments from c. 1200 CE to the present including trade networks, empires, and revolutions.',
      order: 20,
      color: 'amber',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: The Global Tapestry (c. 1200–1450) ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'wh-global-tapestry' },
    update: {},
    create: {
      slug: 'wh-global-tapestry',
      name: 'The Global Tapestry (c. 1200–1450)',
      description: 'Song China, Dar al-Islam, South and Southeast Asia, the Americas, and Africa',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: The Global Tapestry')

  const developmentsEastAsiaTextContent = `# Developments in East Asia (c. 1200-1450)

This topic examines how East Asian societies combined shared cultural influences with distinct political institutions during the Global Tapestry era.

## Why This Topic Matters on AP World

- It appears in comparison, causation, and continuity/change prompts.
- It establishes key Unit 1 patterns: state-building, cultural diffusion, and regional diversity.
- It helps explain why East Asia was connected but not politically uniform.

## 1) Song China: State Power and Economic Expansion

- Song rule relied on a large bureaucratic apparatus selected through civil service examinations.
- Neo-Confucian thought reinforced hierarchy, moral order, and elite governance norms.
- Commercial growth expanded markets, urban centers, and long-distance trade.
- Agricultural gains, including Champa rice adoption, supported demographic growth.

## 2) Yuan Transition and Regional Effects

- Mongol conquest replaced Song rule with the Yuan dynasty.
- Political authority shifted, but China remained deeply connected to Afro-Eurasian exchange.
- Dynastic transition is a key AP change-over-time example in Unit 1.

## 3) East Asia Beyond China

### Japan

- Japan developed decentralized feudal military institutions (shogun, daimyo, samurai).
- This contrasted with China's centralized bureaucratic model.

### Korea

- Korean elites adopted many Chinese intellectual and administrative traditions.
- Korea retained its own political identity while participating in a broader East Asian cultural sphere.

### Vietnam and Regional States

- Confucian influence and Chinese cultural models spread, but local rulers adapted institutions to local conditions.

## 4) Core AP Patterns

| Pattern | East Asian Evidence | AP Skill Connection |
|---|---|---|
| Shared cultural sphere | Confucian learning, writing systems, and diplomatic norms spread regionally | Comparison and context |
| Political diversity | Centralized Chinese bureaucracy vs Japanese feudal structure | Comparison |
| Continuity and change | Persistent Confucian influence with major dynastic transitions | CCOT |

## 5) High-Yield Terms

- Neo-Confucianism
- Civil service examinations
- Tributary system
- Song and Yuan dynasties
- Feudal Japan (shogun, daimyo, samurai)
- Selective adaptation

## 6) AP Writing Tips

1. For comparison, provide one similarity and one difference with specific evidence.
2. For causation, identify the mechanism (for example, conquest, policy, or ideology).
3. For continuity/change, pair one long-term continuity with one major shift.

## Quick Check

- How did Chinese influence shape neighboring societies without making them politically identical?
- Why is Song China often cited as a major center of premodern commercial development?
- What changed politically with the Song-to-Yuan transition, and what remained continuous?`

  await prisma.topic.upsert({
    where: { slug: 'wh-developments-east-asia' },
    update: {
      title: 'Developments in East Asia',
      description: 'Song political and economic growth, Neo-Confucianism, Yuan transition, and regional comparison with Japan and Korea',
      textContent: developmentsEastAsiaTextContent,
    },
    create: {
      slug: 'wh-developments-east-asia',
      title: 'Developments in East Asia',
      description: 'Song political and economic growth, Neo-Confucianism, Yuan transition, and regional comparison with Japan and Korea',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: developmentsEastAsiaTextContent,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-dar-al-islam' },
    update: {},
    create: {
      slug: 'wh-dar-al-islam',
      title: 'Dar al-Islam & South Asia',
      description: 'Islamic Golden Age, Abbasid Caliphate, Delhi Sultanate, and the spread of Islam',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🕌 Dar al-Islam & South Asia\n\nExplore the Abbasid Caliphate, Islamic Golden Age (science, medicine, mathematics), the Delhi Sultanate, Sufi missionaries, the spread of Islam through trade and conquest, and Hindu-Muslim interactions in South Asia.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-americas-africa-1200' },
    update: {},
    create: {
      slug: 'wh-americas-africa-1200',
      title: 'The Americas & Africa',
      description: 'Aztec and Inca empires, Maya civilization, West African kingdoms, and Great Zimbabwe',
      order: 3,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🌎 The Americas & Africa\n\nStudy the Aztec Empire (tribute system, Tenochtitlan), Inca Empire (mit'a labor, quipu), Maya city-states, Mississippian culture, West African kingdoms (Mali, Ghana, Songhai), trans-Saharan trade, Great Zimbabwe, and Swahili coast city-states.`,
    },
  })

  // ─── Unit 2: Networks of Exchange (c. 1200–1450) ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'wh-networks-exchange' },
    update: {},
    create: {
      slug: 'wh-networks-exchange',
      name: 'Networks of Exchange (c. 1200–1450)',
      description: 'Silk Roads, Indian Ocean trade, trans-Saharan trade, and the Mongol Empire',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Networks of Exchange')

  await prisma.topic.upsert({
    where: { slug: 'wh-silk-roads-mongols' },
    update: {},
    create: {
      slug: 'wh-silk-roads-mongols',
      title: 'Silk Roads & the Mongol Empire',
      description: 'Silk Road trade routes, Mongol conquests, Pax Mongolica, cultural exchange, and the Black Death',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🐎 Silk Roads & the Mongol Empire\n\nExplore Silk Road trade routes, luxury goods and cultural exchange, the Mongol conquests (Genghis Khan, Kublai Khan), Pax Mongolica, the Yuan Dynasty, religious tolerance, and the spread of the Black Death along trade networks.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-indian-ocean-trade' },
    update: {},
    create: {
      slug: 'wh-indian-ocean-trade',
      title: 'Indian Ocean & Trans-Saharan Trade',
      description: 'Maritime trade networks, monsoon winds, diasporic communities, and cross-cultural exchange',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ⛵ Indian Ocean & Trans-Saharan Trade\n\nStudy Indian Ocean maritime trade (monsoon winds, dhow ships), port cities (Calicut, Malacca, Kilwa), diasporic communities, trans-Saharan caravan trade, the role of Islam in facilitating trade, and the exchange of technologies, crops, and diseases.`,
    },
  })

  // ─── Unit 3: Land-Based Empires (c. 1450–1750) ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'wh-land-based-empires' },
    update: {},
    create: {
      slug: 'wh-land-based-empires',
      name: 'Land-Based Empires (c. 1450–1750)',
      description: 'Ottoman, Safavid, Mughal, Ming, Qing, and Russian empires',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Land-Based Empires')

  await prisma.topic.upsert({
    where: { slug: 'wh-islamic-empires' },
    update: {},
    create: {
      slug: 'wh-islamic-empires',
      title: 'Ottoman, Safavid & Mughal Empires',
      description: 'Gunpowder empires, devshirme system, Safavid Shi\'ism, Mughal religious tolerance, and decline',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🕌 Ottoman, Safavid & Mughal Empires\n\nStudy the Ottoman Empire (devshirme, millet system, Suleiman the Magnificent), Safavid Empire (Shi'a Islam, Shah Abbas), Mughal Empire (Akbar's religious tolerance, Taj Mahal), gunpowder technology, and the factors leading to their decline.`,
    },
  })

  const eastAsianRussianTextContent = `# 🏯 East Asian & Russian Empires (c. 1450-1750)\n\nThis topic asks you to compare how major land-based empires in East Asia and Eurasia built power, managed diversity, and interacted with global trade.\n\n## Why This Topic Matters on AP World\n\n- It appears in **comparison**, **causation**, and **CCOT** prompts.\n- It links Unit 3 (land-based empires) to Unit 4 (transoceanic networks).\n- It helps explain later global power shifts.\n\n## 1) Ming and Qing China\n\n### Ming (1368-1644): Restoration and selective outward projection\n\n- Reasserted Han-led imperial rule after the Yuan.\n- Rebuilt and expanded state institutions grounded in Confucian governance.\n- Sponsored **Zheng He** voyages (1405-1433), projecting prestige across the Indian Ocean.\n- Later shifted resources toward internal stability and frontier defense.\n\n### Qing (1644-1912): Conquest dynasty with adaptive governance\n\n- Manchu rulers preserved many Confucian institutions to legitimize rule over a majority Han population.\n- Expanded territory (Xinjiang, Tibet, Mongolia) and managed a multiethnic empire.\n- Balanced military power with bureaucratic continuity.\n\n### AP Comparison Move\n\nChina maintained a highly centralized bureaucratic model, but dynastic transitions still mattered for ethnicity, territorial strategy, and state priorities.\n\n## 2) Tokugawa Japan (1600-1868)\n\n- Political authority rested with the **shogunate**, while the emperor remained symbolic.\n- Social order was structured (samurai, peasants, artisans, merchants).\n- **Sakoku** policies regulated foreign contact to reduce political and religious threats.\n- Contact was controlled, not eliminated: limited trade continued through designated channels.\n\n### AP Causation Move\n\nTokugawa restrictions are best read as a regime-stability strategy: short-term order and control, with long-term trade and strategic implications.\n\n## 3) Russia in the Early Modern Era\n\n- Expanded across Siberia, creating a vast contiguous land empire.\n- Under rulers like **Peter the Great**, selectively imported Western military and administrative techniques.\n- Maintained autocratic rule while modernizing parts of state capacity.\n\n### AP Comparison Move\n\nRussia and Qing China both governed huge multiethnic territories, but each used distinct combinations of military coercion, elite integration, and administrative adaptation.\n\n## 4) Big Patterns You Should Be Able to Explain\n\n| Pattern | East Asia / Eurasia Example | Why It Matters |\n|---|---|---|\n| **State centralization** | Ming/Qing bureaucracy | Supports comparison with decentralized systems like Tokugawa domains |\n| **Selective adaptation** | Russia westernizing military methods; East Asia borrowing while preserving local institutions | Shows diffusion is strategic, not passive |\n| **Regulated interaction** | Tokugawa contact limits; post-Zheng-He Ming priorities | Connects domestic politics to global consequences |\n\n## 5) High-Yield Terms\n\n- Civil service examination system\n- Neo-Confucianism\n- Sakoku\n- Shogun / daimyo\n- Multiethnic empire\n- Selective adaptation\n\n## 6) AP Exam Strategy\n\n1. For **comparison** prompts, always provide one similarity and one difference.\n2. For **causation** prompts, connect policy choices to concrete outcomes.\n3. For **CCOT** prompts, include both continuity (for example, hierarchy/governance structures) and change (for example, foreign policy shifts).\n\n## Quick Check\n\n- Why did some East Asian states regulate foreign contact despite active regional trade networks?\n- How did centralized bureaucracy in China differ from Tokugawa political organization?\n- To what extent did Russia and Qing China face similar imperial governance challenges?`

  await prisma.topic.upsert({
    where: { slug: 'wh-east-asian-empires' },
    update: {
      title: 'East Asian & Russian Empires',
      description: 'Ming and Qing China, Tokugawa Japan, and the expansion of the Russian Empire',
      textContent: eastAsianRussianTextContent,
    },
    create: {
      slug: 'wh-east-asian-empires',
      title: 'East Asian & Russian Empires',
      description: 'Ming and Qing China, Tokugawa Japan, and the expansion of the Russian Empire',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: eastAsianRussianTextContent,
    },
  })

  // ─── Unit 4: Transoceanic Interconnections (c. 1450–1750) ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'wh-transoceanic' },
    update: {},
    create: {
      slug: 'wh-transoceanic',
      name: 'Transoceanic Interconnections (c. 1450–1750)',
      description: 'Exploration, Columbian Exchange, maritime empires, and coerced labor systems',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Transoceanic Interconnections')

  await prisma.topic.upsert({
    where: { slug: 'wh-exploration-columbian-exchange' },
    update: {},
    create: {
      slug: 'wh-exploration-columbian-exchange',
      title: 'Exploration & the Columbian Exchange',
      description: 'European exploration motives, Columbian Exchange, disease impact, and maritime technology',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🚢 Exploration & the Columbian Exchange\n\nStudy European exploration motives (God, gold, glory), Portuguese and Spanish exploration, the Columbian Exchange (crops, animals, diseases), devastating impact of smallpox on indigenous populations, maritime technology (caravel, astrolabe), and the Treaty of Tordesillas.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-maritime-empires-labor' },
    update: {},
    create: {
      slug: 'wh-maritime-empires-labor',
      title: 'Maritime Empires & Coerced Labor',
      description: 'Spanish colonialism, Atlantic slave trade, encomienda, plantation system, and mercantilism',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ⛓️ Maritime Empires & Coerced Labor\n\nExplore Spanish colonial administration (encomienda, hacienda), the Atlantic slave trade (Middle Passage, triangular trade), plantation systems, indentured servitude, mercantilism, joint-stock companies, and resistance to colonial rule.`,
    },
  })

  // ─── Unit 5: Revolutions (c. 1750–1900) ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'wh-revolutions' },
    update: {},
    create: {
      slug: 'wh-revolutions',
      name: 'Revolutions (c. 1750–1900)',
      description: 'Enlightenment, political revolutions, and the Industrial Revolution',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Revolutions')

  await prisma.topic.upsert({
    where: { slug: 'wh-enlightenment-political-revolutions' },
    update: {},
    create: {
      slug: 'wh-enlightenment-political-revolutions',
      title: 'Enlightenment & Political Revolutions',
      description: 'Enlightenment ideas, American Revolution, French Revolution, Haitian Revolution, and Latin American independence',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🗽 Enlightenment & Political Revolutions\n\nStudy Enlightenment thinkers (Locke, Voltaire, Rousseau, Montesquieu), the American Revolution, French Revolution (stages, Reign of Terror, Napoleon), Haitian Revolution (Toussaint Louverture), and Latin American independence movements (Bolivar, San Martín).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-industrial-revolution' },
    update: {},
    create: {
      slug: 'wh-industrial-revolution',
      title: 'The Industrial Revolution',
      description: 'Industrialization origins, factory system, urbanization, social effects, and global spread',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🏭 The Industrial Revolution\n\nExplore the origins of industrialization in Britain, the factory system, steam power, urbanization and its social effects, labor movements, child labor, socialism (Marx), capitalism (Adam Smith), and the global spread of industrialization.`,
    },
  })

  // ─── Unit 6: Consequences of Industrialization (c. 1750–1900) ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'wh-consequences-industrialization' },
    update: {},
    create: {
      slug: 'wh-consequences-industrialization',
      name: 'Consequences of Industrialization (c. 1750–1900)',
      description: 'Imperialism, nationalism, reform movements, and global migration',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Consequences of Industrialization')

  await prisma.topic.upsert({
    where: { slug: 'wh-imperialism' },
    update: {},
    create: {
      slug: 'wh-imperialism',
      title: 'Imperialism & Nationalism',
      description: 'New Imperialism, Scramble for Africa, Indian colonial resistance, nationalism, and state-building',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🌍 Imperialism & Nationalism\n\nStudy New Imperialism motivations (economic, strategic, ideological), the Scramble for Africa (Berlin Conference), British India, Opium Wars in China, Meiji Restoration in Japan, nationalism and unification (Italy, Germany), and anti-imperial resistance movements.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-reform-migration' },
    update: {},
    create: {
      slug: 'wh-reform-migration',
      title: 'Reform & Migration',
      description: 'Abolition of slavery, women\'s suffrage, global migration patterns, and social reform movements',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🚶 Reform & Migration\n\nExplore abolition of slavery and the slave trade, women's suffrage movements, labor reforms, global migration patterns (push/pull factors), Chinese exclusion, Indian indentured labor diaspora, and social Darwinism.`,
    },
  })

  // ─── Unit 7: Global Conflict (c. 1900–present) ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'wh-global-conflict' },
    update: { name: 'Global Conflict (c. 1900–present)', description: 'World Wars, totalitarianism, and mass atrocities', order: 7 },
    create: {
      slug: 'wh-global-conflict',
      name: 'Global Conflict (c. 1900–present)',
      description: 'World Wars, totalitarianism, and mass atrocities',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 7: Global Conflict')

  await prisma.topic.upsert({
    where: { slug: 'wh-world-wars' },
    update: {},
    create: {
      slug: 'wh-world-wars',
      title: 'World Wars & Totalitarianism',
      description: 'WWI causes and effects, interwar period, rise of totalitarianism, WWII, and the Holocaust',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ⚔️ World Wars & Totalitarianism\n\nStudy WWI causes (MAIN: militarism, alliances, imperialism, nationalism), trench warfare, Treaty of Versailles, interwar period, rise of fascism (Hitler, Mussolini) and communism (Stalin), WWII theaters, the Holocaust, atomic bombs, and the United Nations.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-mass-atrocities' },
    update: {},
    create: {
      slug: 'wh-mass-atrocities',
      title: 'Mass Atrocities & Resistance',
      description: 'Genocide, ethnic cleansing, resistance movements, and the development of international human rights norms',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ⚖️ Mass Atrocities & Resistance\n\nStudy the Armenian Genocide, the Holocaust, the Holodomor, the Rwandan Genocide, resistance movements, Nuremberg Trials, the Universal Declaration of Human Rights, and the development of international humanitarian law and norms.`,
    },
  })

  // ─── Unit 8: Cold War & Decolonization (c. 1900–present) ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'wh-changing-world' },
    update: { name: 'Cold War & Decolonization (c. 1900–present)', description: 'Superpower rivalry, proxy wars, decolonization, and the Non-Aligned Movement', order: 8 },
    create: {
      slug: 'wh-changing-world',
      name: 'Cold War & Decolonization (c. 1900–present)',
      description: 'Superpower rivalry, proxy wars, decolonization, and the Non-Aligned Movement',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 8: Cold War & Decolonization')

  await prisma.topic.upsert({
    where: { slug: 'wh-cold-war-decolonization' },
    update: {},
    create: {
      slug: 'wh-cold-war-decolonization',
      title: 'Cold War & Decolonization',
      description: 'Superpower rivalry, proxy wars, decolonization in Africa and Asia, and the Non-Aligned Movement',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🌐 Cold War & Decolonization\n\nExplore the Cold War (containment, NATO vs Warsaw Pact, nuclear arms race), proxy wars (Korea, Vietnam, Afghanistan), decolonization in Africa (Ghana, Algeria, Congo) and Asia (India, Indonesia), the Non-Aligned Movement, and the fall of the Soviet Union.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-newly-independent-states' },
    update: {},
    create: {
      slug: 'wh-newly-independent-states',
      title: 'Newly Independent States',
      description: 'Nation-building challenges, ethnic conflict, economic development, and Cold War influence on new nations',
      order: 2,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🏗️ Newly Independent States\n\nStudy the challenges of newly independent nations: nation-building, border conflicts, ethnic and religious tensions, economic development strategies (import substitution, export-oriented), authoritarian vs democratic paths, and superpower interference in postcolonial states.`,
    },
  })

  // ─── Unit 9: Globalization (c. 1900–present) ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'wh-globalization' },
    update: { name: 'Globalization (c. 1900–present)', description: 'Economic globalization, technology, resistance, and 21st-century challenges', order: 9 },
    create: {
      slug: 'wh-globalization',
      name: 'Globalization (c. 1900–present)',
      description: 'Economic globalization, technology, resistance, and 21st-century challenges',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Unit 9: Globalization')

  await prisma.topic.upsert({
    where: { slug: 'wh-globalization-tech' },
    update: {},
    create: {
      slug: 'wh-globalization-tech',
      title: 'Globalization & Technology',
      description: 'Economic globalization, international organizations, technology revolution, and cultural exchange',
      order: 1,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🌐 Globalization & Technology\n\nStudy economic globalization (WTO, IMF, World Bank), multinational corporations, the Green Revolution, the digital revolution, cultural globalization, anti-globalization movements, and the spread of democratic ideals.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'wh-challenges-21st-century' },
    update: {},
    create: {
      slug: 'wh-challenges-21st-century',
      title: 'Challenges of the 21st Century',
      description: 'Climate change, terrorism, pandemic disease, human rights, and global inequality',
      order: 2,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🌍 Challenges of the 21st Century\n\nExplore climate change and environmental degradation, global terrorism, pandemic diseases, human rights movements, income inequality, migration crises, democratization and authoritarianism, and international cooperation for sustainable development.`,
    },
  })

  console.log('\n🎉 AP World History: Modern seeding complete!')
  console.log('  📚 9 units, 18 topics created (CED-aligned)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
