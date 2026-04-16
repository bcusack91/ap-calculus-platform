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

  await prisma.topic.upsert({
    where: { slug: 'wh-developments-east-asia' },
    update: {},
    create: {
      slug: 'wh-developments-east-asia',
      title: 'Developments in East Asia',
      description: 'Song Dynasty innovations, Neo-Confucianism, Japanese feudalism, and Korean kingdoms',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🏯 Developments in East Asia\n\nStudy the Song Dynasty (960–1279): innovations (gunpowder, compass, printing), Neo-Confucianism, the tribute system, Japanese feudalism and the shogunate, Korean Goryeo and Joseon dynasties, and the influence of Chinese culture across East Asia.`,
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

  await prisma.topic.upsert({
    where: { slug: 'wh-east-asian-empires' },
    update: {},
    create: {
      slug: 'wh-east-asian-empires',
      title: 'East Asian & Russian Empires',
      description: 'Ming and Qing China, Tokugawa Japan, and the expansion of the Russian Empire',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🏯 East Asian & Russian Empires\n\nExplore Ming Dynasty (Zheng He voyages, Great Wall reconstruction, isolationism), Qing Dynasty (Manchu rule, Kangxi Emperor), Tokugawa Japan (sakoku isolationism, social hierarchy), and Russian Empire expansion under Ivan IV, Peter the Great, and Catherine the Great.`,
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
