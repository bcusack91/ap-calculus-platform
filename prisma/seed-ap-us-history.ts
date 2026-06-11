import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP United States History course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-us-history' },
    update: {},
    create: {
      slug: 'ap-us-history',
      name: 'AP United States History',
      icon: '🇺🇸',
      description: 'Study American history from pre-contact through the present including politics, economics, society, and culture.',
      order: 21,
      color: 'blue',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Period 1: 1491–1607 ───
  const period1 = await prisma.category.upsert({
    where: { slug: 'apush-period-1' },
    update: {},
    create: {
      slug: 'apush-period-1',
      name: 'Period 1: 1491–1607',
      description: 'Pre-Columbian societies, European exploration, and early encounters',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 1')

  await prisma.topic.upsert({
    where: { slug: 'apush-native-societies-exploration' },
    update: {},
    create: {
      slug: 'apush-native-societies-exploration',
      title: 'Native Societies & European Exploration',
      description: 'Pre-Columbian cultures, European motives for exploration, Columbian Exchange, and early encounters',
      order: 1,
      categoryId: period1.id,
      isPremium: false,
      textContent: `# 🌎 Native Societies & European Exploration\n\nStudy diverse pre-Columbian societies (Pueblo, Iroquois, Mississippian), European motives for exploration, Spanish conquests (Cortés, Pizarro), the Columbian Exchange (crops, animals, diseases), and the devastation of indigenous populations through disease and conflict.`,
    },
  })

  // ─── Period 2: 1607–1754 ───
  const period2 = await prisma.category.upsert({
    where: { slug: 'apush-period-2' },
    update: {},
    create: {
      slug: 'apush-period-2',
      name: 'Period 2: 1607–1754',
      description: 'Colonial America, labor systems, and colonial society',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 2')

  await prisma.topic.upsert({
    where: { slug: 'apush-colonial-america' },
    update: {},
    create: {
      slug: 'apush-colonial-america',
      title: 'Colonial America',
      description: 'Jamestown, Plymouth, colonial regions, labor systems (slavery, indentured servitude), and colonial governance',
      order: 1,
      categoryId: period2.id,
      isPremium: false,
      textContent: `# 🏠 Colonial America\n\nExplore the founding of Jamestown, Plymouth, and Massachusetts Bay. Study the three colonial regions (New England, Middle, Southern), the development of slavery and indentured servitude, colonial self-governance (House of Burgesses, Mayflower Compact), and the Great Awakening.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-colonial-society-conflicts' },
    update: {},
    create: {
      slug: 'apush-colonial-society-conflicts',
      title: 'Colonial Society & Conflicts',
      description: 'Mercantilism, Bacon\'s Rebellion, Stono Rebellion, French and Indian War, and colonial culture',
      order: 2,
      categoryId: period2.id,
      isPremium: false,
      textContent: `# ⚔️ Colonial Society & Conflicts\n\nStudy mercantilism and the Navigation Acts, Bacon's Rebellion, the Stono Rebellion, French and Indian War (Seven Years' War), the Enlightenment's influence on colonial thought, and emerging colonial identity.`,
    },
  })

  // ─── Period 3: 1754–1800 ───
  const period3 = await prisma.category.upsert({
    where: { slug: 'apush-period-3' },
    update: {},
    create: {
      slug: 'apush-period-3',
      name: 'Period 3: 1754–1800',
      description: 'American Revolution, the Constitution, and the Early Republic',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 3')

  await prisma.topic.upsert({
    where: { slug: 'apush-revolution-independence' },
    update: {},
    create: {
      slug: 'apush-revolution-independence',
      title: 'Revolution & Independence',
      description: 'Causes of the Revolution, key battles, Declaration of Independence, and the Treaty of Paris',
      order: 1,
      categoryId: period3.id,
      isPremium: false,
      textContent: `# 🗽 Revolution & Independence\n\nStudy the causes of the American Revolution (taxation without representation, Stamp Act, Intolerable Acts), key battles (Lexington/Concord, Saratoga, Yorktown), the Declaration of Independence, and the Treaty of Paris (1783).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-constitution-early-republic' },
    update: {},
    create: {
      slug: 'apush-constitution-early-republic',
      title: 'Constitution & Early Republic',
      description: 'Articles of Confederation, Constitutional Convention, Bill of Rights, and Washington-Adams presidencies',
      order: 2,
      categoryId: period3.id,
      isPremium: false,
      textContent: `# 📜 Constitution & Early Republic\n\nExplore the Articles of Confederation and its weaknesses, the Constitutional Convention (Great Compromise, Three-Fifths Compromise), Federalist vs Anti-Federalist debates, the Bill of Rights, Washington's presidency, Hamilton vs Jefferson, and the rise of political parties.`,
    },
  })

  // ─── Period 4: 1800–1848 ───
  const period4 = await prisma.category.upsert({
    where: { slug: 'apush-period-4' },
    update: {},
    create: {
      slug: 'apush-period-4',
      name: 'Period 4: 1800–1848',
      description: 'Jeffersonian democracy, market revolution, reform movements, and westward expansion',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 4')

  await prisma.topic.upsert({
    where: { slug: 'apush-democracy-expansion' },
    update: {},
    create: {
      slug: 'apush-democracy-expansion',
      title: 'Democracy & Expansion',
      description: 'Jeffersonian democracy, Louisiana Purchase, War of 1812, Market Revolution, and Jacksonian democracy',
      order: 1,
      categoryId: period4.id,
      isPremium: false,
      textContent: `# 🦅 Democracy & Expansion\n\nStudy Jefferson's presidency and the Louisiana Purchase, the War of 1812, the Market Revolution (canals, railroads, factories), Jacksonian democracy, Indian Removal Act and the Trail of Tears, Manifest Destiny, and the Monroe Doctrine.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-reform-movements' },
    update: {},
    create: {
      slug: 'apush-reform-movements',
      title: 'Reform & Social Movements',
      description: 'Second Great Awakening, abolitionism, women\'s rights (Seneca Falls), temperance, and transcendentalism',
      order: 2,
      categoryId: period4.id,
      isPremium: false,
      textContent: `# ✊ Reform & Social Movements\n\nExplore the Second Great Awakening, the abolitionist movement (Douglass, Garrison, Tubman), women's rights (Seneca Falls Convention, 1848), the temperance movement, transcendentalism (Emerson, Thoreau), utopian communities, and public education reform (Horace Mann).`,
    },
  })

  // ─── Period 5: 1844–1877 ───
  const period5 = await prisma.category.upsert({
    where: { slug: 'apush-period-5' },
    update: {},
    create: {
      slug: 'apush-period-5',
      name: 'Period 5: 1844–1877',
      description: 'Sectionalism, Civil War, and Reconstruction',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 5')

  await prisma.topic.upsert({
    where: { slug: 'apush-civil-war' },
    update: {},
    create: {
      slug: 'apush-civil-war',
      title: 'Sectionalism & Civil War',
      description: 'Slavery debates, Compromise of 1850, Kansas-Nebraska Act, Lincoln, and the Civil War',
      order: 1,
      categoryId: period5.id,
      isPremium: false,
      textContent: `# ⚔️ Sectionalism & Civil War\n\nStudy the growing sectional crisis (Missouri Compromise, Compromise of 1850, Kansas-Nebraska Act, Dred Scott), Lincoln's election, secession, key battles (Gettysburg, Antietam), the Emancipation Proclamation, and the Union victory.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-reconstruction' },
    update: {},
    create: {
      slug: 'apush-reconstruction',
      title: 'Reconstruction',
      description: '13th-15th Amendments, Freedmen\'s Bureau, Reconstruction plans, Jim Crow, and the Compromise of 1877',
      order: 2,
      categoryId: period5.id,
      isPremium: false,
      textContent: `# 🔨 Reconstruction\n\nExplore Presidential vs Congressional Reconstruction, the 13th, 14th, and 15th Amendments, the Freedmen's Bureau, Black Codes, Radical Reconstruction, impeachment of Andrew Johnson, sharecropping, the rise of the KKK, and the Compromise of 1877.`,
    },
  })

  // ─── Period 6: 1865–1898 ───
  const period6 = await prisma.category.upsert({
    where: { slug: 'apush-period-6' },
    update: {},
    create: {
      slug: 'apush-period-6',
      name: 'Period 6: 1865–1898',
      description: 'Gilded Age, industrialization, immigration, and the American West',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 6')

  await prisma.topic.upsert({
    where: { slug: 'apush-gilded-age' },
    update: {},
    create: {
      slug: 'apush-gilded-age',
      title: 'The Gilded Age',
      description: 'Industrialization, big business, labor unions, immigration, urbanization, and political machines',
      order: 1,
      categoryId: period6.id,
      isPremium: false,
      textContent: `# 🏭 The Gilded Age\n\nStudy rapid industrialization (Carnegie, Rockefeller, Morgan), the transcontinental railroad, labor unions (Knights of Labor, AFL), the New Immigration wave, urbanization, political machines (Tammany Hall), the Populist movement, and Jim Crow laws and segregation (Plessy v. Ferguson).`,
    },
  })

  // ─── Period 7: 1890–1945 ───
  const period7 = await prisma.category.upsert({
    where: { slug: 'apush-period-7' },
    update: {},
    create: {
      slug: 'apush-period-7',
      name: 'Period 7: 1890–1945',
      description: 'Progressivism, World Wars, the Roaring Twenties, and the Great Depression',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 7')

  await prisma.topic.upsert({
    where: { slug: 'apush-progressivism-wwi' },
    update: {},
    create: {
      slug: 'apush-progressivism-wwi',
      title: 'Progressivism & World War I',
      description: 'Progressive reforms, imperialism, Spanish-American War, WWI, and the 1920s',
      order: 1,
      categoryId: period7.id,
      isPremium: false,
      textContent: `# 🗽 Progressivism & World War I\n\nExplore Progressive Era reforms (muckrakers, trust-busting, women's suffrage, 16th-19th Amendments), American imperialism (Spanish-American War, Panama Canal), WWI (causes, US entry, Treaty of Versailles, League of Nations), and the Roaring Twenties (Harlem Renaissance, Red Scare, Prohibition).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-depression-wwii' },
    update: {},
    create: {
      slug: 'apush-depression-wwii',
      title: 'Great Depression & World War II',
      description: 'Crash of 1929, New Deal, rise of fascism, WWII homefront, D-Day, atomic bomb, and the Holocaust',
      order: 2,
      categoryId: period7.id,
      isPremium: false,
      textContent: `# 💥 Great Depression & World War II\n\nStudy the stock market crash of 1929, Hoover vs FDR, the New Deal (CCC, WPA, Social Security), the Dust Bowl, causes of WWII, Pearl Harbor, the homefront (Rosie the Riveter, Japanese internment), D-Day, the atomic bomb, and the Holocaust.`,
    },
  })

  // ─── Period 8: 1945–1980 ───
  const period8 = await prisma.category.upsert({
    where: { slug: 'apush-period-8' },
    update: {},
    create: {
      slug: 'apush-period-8',
      name: 'Period 8: 1945–1980',
      description: 'Cold War, Civil Rights Movement, Vietnam, and social change',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 8')

  await prisma.topic.upsert({
    where: { slug: 'apush-cold-war-civil-rights' },
    update: {},
    create: {
      slug: 'apush-cold-war-civil-rights',
      title: 'Cold War & Civil Rights',
      description: 'Containment, McCarthyism, Korean War, Civil Rights Movement, and the Great Society',
      order: 1,
      categoryId: period8.id,
      isPremium: false,
      textContent: `# ✊ Cold War & Civil Rights\n\nStudy the Cold War (Truman Doctrine, Marshall Plan, containment, McCarthyism, Korean War), the Civil Rights Movement (Brown v. Board, Montgomery Bus Boycott, MLK, sit-ins, Freedom Rides, Civil Rights Act, Voting Rights Act), and LBJ's Great Society.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'apush-vietnam-social-change' },
    update: {},
    create: {
      slug: 'apush-vietnam-social-change',
      title: 'Vietnam & Social Change',
      description: 'Vietnam War, counterculture, feminism, environmentalism, Watergate, and Nixon',
      order: 2,
      categoryId: period8.id,
      isPremium: false,
      textContent: `# ☮️ Vietnam & Social Change\n\nExplore the Vietnam War (Gulf of Tonkin, escalation, anti-war movement, Vietnamization), counterculture, the feminist movement (NOW, Roe v. Wade), environmentalism (Silent Spring, EPA), Watergate, Nixon's resignation, and détente.`,
    },
  })

  // ─── Period 9: 1980–Present ───
  const period9 = await prisma.category.upsert({
    where: { slug: 'apush-period-9' },
    update: {},
    create: {
      slug: 'apush-period-9',
      name: 'Period 9: 1980–Present',
      description: 'Reagan Revolution, end of Cold War, globalization, and 21st-century challenges',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Period 9')

  await prisma.topic.upsert({
    where: { slug: 'apush-reagan-to-present' },
    update: {},
    create: {
      slug: 'apush-reagan-to-present',
      title: 'Reagan to the Present',
      description: 'Reagan Revolution, end of Cold War, 9/11, War on Terror, and contemporary issues',
      order: 1,
      categoryId: period9.id,
      isPremium: false,
      textContent: `# 🇺🇸 Reagan to the Present\n\nStudy the Reagan Revolution (tax cuts, deregulation, military buildup), the end of the Cold War (fall of Berlin Wall, collapse of USSR), Clinton era, 9/11 and the War on Terror, the Great Recession, the Obama presidency, political polarization, and contemporary debates over immigration, inequality, and democracy.`,
    },
  })

  console.log('\n🎉 AP United States History seeding complete!')
  console.log('  📚 9 categories, 16 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
