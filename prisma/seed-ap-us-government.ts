import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP US Government and Politics course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-us-government' },
    update: {},
    create: {
      slug: 'ap-us-government',
      name: 'AP United States Government and Politics',
      icon: '🏛️',
      description: 'Explore the Constitution, branches of government, civil liberties, civil rights, and political participation.',
      order: 19,
      color: 'red',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Foundations of American Democracy ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'gov-foundations' },
    update: {},
    create: {
      slug: 'gov-foundations',
      name: 'Foundations of American Democracy',
      description: 'Enlightenment ideals, the Constitution, federalism, and democratic principles',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Foundations of American Democracy')

  await prisma.topic.upsert({
    where: { slug: 'gov-constitutional-foundations' },
    update: {},
    create: {
      slug: 'gov-constitutional-foundations',
      title: 'Constitutional Foundations',
      description: 'Enlightenment thinkers, Declaration of Independence, Articles of Confederation, Constitutional Convention, and ratification debates',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🏛️ Constitutional Foundations\n\nStudy Enlightenment thinkers (Locke, Montesquieu, Rousseau), the Declaration of Independence, weaknesses of the Articles of Confederation, the Constitutional Convention, Great Compromise, Three-Fifths Compromise, and Federalist vs Anti-Federalist debates.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-federalism' },
    update: {},
    create: {
      slug: 'gov-federalism',
      title: 'Federalism',
      description: 'Enumerated, reserved, and concurrent powers; fiscal federalism; federalism over time',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ⚖️ Federalism\n\nExplore the division of power between national and state governments: enumerated powers, reserved powers (10th Amendment), concurrent powers, supremacy clause, necessary and proper clause, commerce clause, fiscal federalism (grants, mandates), dual vs cooperative federalism, and devolution.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-separation-of-powers' },
    update: {},
    create: {
      slug: 'gov-separation-of-powers',
      title: 'Separation of Powers & Checks and Balances',
      description: 'Three branches, checks and balances, judicial review, and the amendment process',
      order: 3,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🔄 Separation of Powers & Checks and Balances\n\nMaster the design of three branches, how each checks the others, Marbury v. Madison and judicial review, the formal and informal amendment process, and the tension between majority rule and minority rights.`,
    },
  })

  // ─── Unit 2: Interactions Among Branches ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'gov-branches' },
    update: {},
    create: {
      slug: 'gov-branches',
      name: 'Interactions Among Branches of Government',
      description: 'Congress, the presidency, the judiciary, and the bureaucracy',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Interactions Among Branches')

  await prisma.topic.upsert({
    where: { slug: 'gov-congress' },
    update: {},
    create: {
      slug: 'gov-congress',
      title: 'Congress',
      description: 'Structure, powers, leadership, committees, lawmaking process, and congressional behavior',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🏛️ Congress\n\nStudy the bicameral legislature (House vs Senate), enumerated powers, leadership roles (Speaker, Majority Leader), committee system, the lawmaking process, filibuster and cloture, pork barrel/logrolling, and models of representation (trustee, delegate, politico).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-presidency' },
    update: {},
    create: {
      slug: 'gov-presidency',
      title: 'The Presidency',
      description: 'Presidential powers, executive orders, cabinet, bully pulpit, and presidential communication',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🇺🇸 The Presidency\n\nExplore formal and informal presidential powers: commander-in-chief, veto power, executive orders, executive agreements, signing statements, the cabinet, Executive Office of the President, the bully pulpit, and presidential persuasion.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-judiciary' },
    update: {},
    create: {
      slug: 'gov-judiciary',
      title: 'The Federal Judiciary',
      description: 'Federal court structure, Supreme Court, judicial review, judicial philosophy, and landmark cases',
      order: 3,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ⚖️ The Federal Judiciary\n\nStudy the federal court system (district, appellate, Supreme Court), judicial review, judicial activism vs restraint, precedent and stare decisis, the nomination and confirmation process, and landmark Supreme Court cases.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-bureaucracy' },
    update: {},
    create: {
      slug: 'gov-bureaucracy',
      title: 'The Bureaucracy',
      description: 'Federal agencies, regulatory process, iron triangles, issue networks, and bureaucratic accountability',
      order: 4,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📋 The Bureaucracy\n\nExplore the structure of the federal bureaucracy (departments, agencies, commissions), the merit system, the regulatory process, iron triangles, issue networks, congressional oversight, and bureaucratic discretion.`,
    },
  })

  // ─── Unit 3: Civil Liberties & Civil Rights ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'gov-civil-liberties-rights' },
    update: {},
    create: {
      slug: 'gov-civil-liberties-rights',
      name: 'Civil Liberties & Civil Rights',
      description: 'Bill of Rights, due process, equal protection, and landmark cases',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Civil Liberties & Civil Rights')

  await prisma.topic.upsert({
    where: { slug: 'gov-civil-liberties' },
    update: {},
    create: {
      slug: 'gov-civil-liberties',
      title: 'Civil Liberties',
      description: 'First Amendment freedoms, due process, privacy rights, rights of the accused, and selective incorporation',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🗽 Civil Liberties\n\nStudy First Amendment freedoms (speech, press, religion, assembly, petition), the establishment and free exercise clauses, due process (5th & 14th Amendments), privacy rights, rights of the accused (4th, 5th, 6th, 8th Amendments), selective incorporation, and landmark cases (Engel v. Vitale, Tinker v. Des Moines, Gideon v. Wainwright, Miranda v. Arizona).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-civil-rights' },
    update: {},
    create: {
      slug: 'gov-civil-rights',
      title: 'Civil Rights',
      description: 'Equal protection, Civil Rights Movement, affirmative action, voting rights, and discrimination',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ✊ Civil Rights\n\nExplore the equal protection clause (14th Amendment), the Civil Rights Movement, the Civil Rights Act of 1964, Voting Rights Act of 1965, affirmative action, Title IX, Americans with Disabilities Act, marriage equality, and landmark cases (Brown v. Board of Education, Regents v. Bakke).`,
    },
  })

  // ─── Unit 4: American Political Ideologies & Beliefs ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'gov-ideologies' },
    update: {},
    create: {
      slug: 'gov-ideologies',
      name: 'American Political Ideologies & Beliefs',
      description: 'Political socialization, ideology, public opinion, and polling',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: American Political Ideologies & Beliefs')

  await prisma.topic.upsert({
    where: { slug: 'gov-political-ideology' },
    update: {},
    create: {
      slug: 'gov-political-ideology',
      title: 'Political Ideology & Socialization',
      description: 'Liberal vs conservative, libertarian, political socialization, and the political spectrum',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🗳️ Political Ideology & Socialization\n\nStudy the political spectrum (liberal, conservative, moderate, libertarian), political socialization factors (family, media, education, religion, peers), generational effects, and how ideology influences policy positions on economic and social issues.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-public-opinion' },
    update: {},
    create: {
      slug: 'gov-public-opinion',
      title: 'Public Opinion & Polling',
      description: 'Scientific polling methods, sampling, margin of error, and the role of media',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 📊 Public Opinion & Polling\n\nExplore scientific polling methods, random sampling, sampling error, question wording bias, push polls, tracking polls, exit polls, the role of media in shaping opinion, and how public opinion influences policy.`,
    },
  })

  // ─── Unit 5: Political Participation ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'gov-political-participation' },
    update: {},
    create: {
      slug: 'gov-political-participation',
      name: 'Political Participation',
      description: 'Voting, elections, political parties, interest groups, and media',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Political Participation')

  await prisma.topic.upsert({
    where: { slug: 'gov-voting-elections' },
    update: {},
    create: {
      slug: 'gov-voting-elections',
      title: 'Voting & Elections',
      description: 'Voter turnout, Electoral College, primaries, campaign finance, and voting behavior',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🗳️ Voting & Elections\n\nStudy voter registration, voter turnout factors, the Electoral College, presidential primaries and caucuses, campaign finance (PACs, Super PACs, Citizens United), winner-take-all vs proportional systems, and rational choice/retrospective/prospective voting models.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-parties-interest-groups' },
    update: {},
    create: {
      slug: 'gov-parties-interest-groups',
      title: 'Political Parties & Interest Groups',
      description: 'Two-party system, party platforms, realignment, interest group strategies, lobbying, and PACs',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🏛️ Political Parties & Interest Groups\n\nExplore the two-party system, third parties, party platforms, dealignment and realignment, interest group strategies (lobbying, litigation, grassroots mobilization), PACs and Super PACs, and the iron triangle/issue network connections.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'gov-media-technology' },
    update: {},
    create: {
      slug: 'gov-media-technology',
      title: 'The Media & Technology',
      description: 'Media\'s role in politics, social media, agenda setting, framing, and media bias',
      order: 3,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 📺 The Media & Technology\n\nStudy the media's role in politics, agenda setting, framing, priming, horse-race journalism, social media's impact on political participation, digital campaigning, misinformation, and media consolidation.`,
    },
  })

  console.log('\n🎉 AP US Government and Politics seeding complete!')
  console.log('  📚 5 categories, 16 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
