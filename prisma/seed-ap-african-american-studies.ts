import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP African American Studies course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-african-american-studies' },
    update: {},
    create: {
      slug: 'ap-african-american-studies',
      name: 'AP African American Studies',
      icon: '✊',
      description: 'Explore the history, culture, politics, and contributions of African Americans from origins to the present.',
      order: 24,
      color: 'yellow',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Origins of the African Diaspora ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'aas-origins-diaspora' },
    update: {},
    create: {
      slug: 'aas-origins-diaspora',
      name: 'Origins of the African Diaspora',
      description: 'African civilizations, the transatlantic slave trade, and the African diaspora',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Origins of the African Diaspora')

  await prisma.topic.upsert({
    where: { slug: 'aas-african-kingdoms' },
    update: {},
    create: {
      slug: 'aas-african-kingdoms',
      title: 'African Kingdoms & Civilizations',
      description: 'West African empires (Ghana, Mali, Songhai), East African city-states, art, scholarship, and trade networks',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🌍 African Kingdoms & Civilizations\n\nStudy the great West African empires (Ghana, Mali, Songhai), the scholarship of Timbuktu, East African Swahili coast city-states, Great Zimbabwe, diverse African cultures and languages, trans-Saharan and Indian Ocean trade networks, and the rich traditions of art, music, and oral history.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-transatlantic-slave-trade' },
    update: {},
    create: {
      slug: 'aas-transatlantic-slave-trade',
      title: 'The Transatlantic Slave Trade',
      description: 'Origins, the Middle Passage, triangular trade, resistance, and the impact on African societies',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ⛓️ The Transatlantic Slave Trade\n\nExplore the origins and scale of the transatlantic slave trade, the Middle Passage, the triangular trade, European colonization of West Africa, resistance and revolt, the devastating impact on African societies, and the development of the African diaspora across the Americas.`,
    },
  })

  // ─── Unit 2: Freedom, Enslavement & Resistance ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'aas-freedom-enslavement' },
    update: {},
    create: {
      slug: 'aas-freedom-enslavement',
      name: 'Freedom, Enslavement & Resistance',
      description: 'Slavery in America, resistance, abolition, and free Black communities',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Freedom, Enslavement & Resistance')

  await prisma.topic.upsert({
    where: { slug: 'aas-slavery-in-america' },
    update: {},
    create: {
      slug: 'aas-slavery-in-america',
      title: 'Slavery in America',
      description: 'Chattel slavery, plantation system, enslaved people\'s culture, family, religion, and the slave codes',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📜 Slavery in America\n\nStudy the development of chattel slavery in the American colonies and the antebellum South, the plantation system, the daily lives of enslaved people, the preservation of African cultural traditions, religious practices, family structures under slavery, slave codes, and the economic foundations of slavery.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-resistance-abolition' },
    update: {},
    create: {
      slug: 'aas-resistance-abolition',
      title: 'Resistance & Abolition',
      description: 'Slave revolts, the Underground Railroad, Frederick Douglass, Harriet Tubman, and the abolitionist movement',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ✊ Resistance & Abolition\n\nExplore forms of resistance (work slowdowns, running away, revolts like Nat Turner's Rebellion, the Stono Rebellion), the Underground Railroad, Harriet Tubman, Frederick Douglass, Sojourner Truth, free Black communities, the abolitionist movement, and Black newspapers and literature.`,
    },
  })

  // ─── Unit 3: The Practice of Freedom ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'aas-practice-freedom' },
    update: {},
    create: {
      slug: 'aas-practice-freedom',
      name: 'The Practice of Freedom',
      description: 'Reconstruction, Jim Crow, the Great Migration, and the Harlem Renaissance',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: The Practice of Freedom')

  await prisma.topic.upsert({
    where: { slug: 'aas-reconstruction-jim-crow' },
    update: {},
    create: {
      slug: 'aas-reconstruction-jim-crow',
      title: 'Reconstruction & Jim Crow',
      description: '13th-15th Amendments, Black political participation during Reconstruction, rise of Jim Crow, and Plessy v. Ferguson',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🔨 Reconstruction & Jim Crow\n\nStudy the 13th, 14th, and 15th Amendments, Black political participation during Reconstruction, the Freedmen's Bureau, the rise of sharecropping, Black Codes, the Ku Klux Klan, the end of Reconstruction (1877), Jim Crow laws, Plessy v. Ferguson, and racial violence (lynching).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-great-migration-harlem' },
    update: {},
    create: {
      slug: 'aas-great-migration-harlem',
      title: 'The Great Migration & Harlem Renaissance',
      description: 'Push/pull factors of the Great Migration, the Harlem Renaissance, jazz, literature, and Black intellectual thought',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🎵 The Great Migration & Harlem Renaissance\n\nExplore the Great Migration (push/pull factors, impact on Northern cities), the Harlem Renaissance (Langston Hughes, Zora Neale Hurston, Claude McKay), the birth of jazz (Louis Armstrong, Duke Ellington), Booker T. Washington vs W.E.B. Du Bois, the NAACP, Marcus Garvey, and Black intellectual traditions.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-wwi-wwii-era' },
    update: {},
    create: {
      slug: 'aas-wwi-wwii-era',
      title: 'African Americans in the World Wars Era',
      description: 'Black soldiers in WWI/WWII, Double V campaign, A. Philip Randolph, desegregation of the military',
      order: 3,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ⭐ African Americans in the World Wars Era\n\nStudy Black soldiers in WWI (Harlem Hellfighters) and WWII (Tuskegee Airmen, 761st Tank Battalion), the Double V campaign, A. Philip Randolph and the March on Washington Movement, Executive Order 8802, the desegregation of the military (Executive Order 9981), and the Red Summer of 1919.`,
    },
  })

  // ─── Unit 4: Movements & Debates ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'aas-movements-debates' },
    update: {},
    create: {
      slug: 'aas-movements-debates',
      name: 'Movements & Debates',
      description: 'Civil Rights Movement, Black Power, and contemporary African American life',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Movements & Debates')

  await prisma.topic.upsert({
    where: { slug: 'aas-civil-rights-movement' },
    update: {},
    create: {
      slug: 'aas-civil-rights-movement',
      title: 'The Civil Rights Movement',
      description: 'Brown v. Board, Montgomery Bus Boycott, sit-ins, Freedom Rides, March on Washington, and key legislation',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ✊ The Civil Rights Movement\n\nStudy Brown v. Board of Education, the Montgomery Bus Boycott (Rosa Parks), the Little Rock Nine, sit-in movement, Freedom Rides, the March on Washington (1963), Dr. Martin Luther King Jr.'s "I Have a Dream" speech, the Civil Rights Act of 1964, the Voting Rights Act of 1965, and Selma.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-black-power-beyond' },
    update: {},
    create: {
      slug: 'aas-black-power-beyond',
      title: 'Black Power & Beyond',
      description: 'Malcolm X, the Black Panther Party, Black Arts Movement, affirmative action, and political representation',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ✊ Black Power & Beyond\n\nExplore the Black Power movement, Malcolm X and the Nation of Islam, the Black Panther Party, the Black Arts Movement (Amiri Baraka), COINTELPRO, affirmative action debates, growing Black political representation, and the election of Black officials.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aas-contemporary-issues' },
    update: {},
    create: {
      slug: 'aas-contemporary-issues',
      title: 'Contemporary African American Life',
      description: 'Mass incarceration, Black Lives Matter, cultural influence, intersectionality, and ongoing struggles for equity',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🌟 Contemporary African American Life\n\nStudy contemporary issues including mass incarceration and the school-to-prison pipeline, the Black Lives Matter movement, health disparities, wealth inequality, intersectionality (Kimberlé Crenshaw), African American cultural influence (hip-hop, film, literature), reparations debates, and the ongoing struggle for racial justice and equity.`,
    },
  })

  console.log('\n🎉 AP African American Studies seeding complete!')
  console.log('  📚 4 categories, 12 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
