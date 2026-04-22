/**
 * Entrance Quiz — Democracy & Expansion (APUSH 1800–1848)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushdem-ent-1a',
    question: 'Which best describes the political and social structure of the United States from 1800 to 1848?',
    options: [
      'Mass democratic politics expanded white male suffrage by eliminating most property requirements (universal white male suffrage by 1828); a market revolution transformed the economy through canals, railroads, telegraphs, and factories; the Marshall Court (1801–35) expanded federal power; territorial expansion through the Louisiana Purchase (1803) and Mexican Cession (1848) doubled and then doubled again; and Indigenous dispossession (Indian Removal Act 1830, Trail of Tears 1838–39) accompanied this expansion',
      'The United States from 1800 to 1848 had no expansion of suffrage of any kind, no market revolution, no Marshall Court, no territorial expansion, and no Indigenous dispossession of any kind during the entire period in any region of the United States',
      'The United States from 1800 to 1848 was governed by the British Crown with no American political parties, no market revolution, no Marshall Court, no territorial expansion, and no Indigenous dispossession of any kind during the entire period in any region',
      'The United States from 1800 to 1848 had no political parties, no Supreme Court, no presidential elections, and no constitutional government of any kind during the entire period in any region of the United States during the period in any region of the country'
    ],
    correctIndex: 0,
    explanation: 'Period 4: mass democracy (white male suffrage) + market revolution + Marshall Court + territorial expansion + Indigenous dispossession.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushdem-ent-1b',
    question: 'Which best describes the Jacksonian Democrat-Whig division (1834–48)?',
    options: [
      "Jacksonian Democrats favored strict construction (selectively), opposed the National Bank, opposed federally funded internal improvements, supported low tariffs, and drew their voter base from southern and western farmers, urban workers, and new immigrants; Whigs favored loose construction, supported the National Bank, supported federally funded internal improvements (Clay's American System), supported high protective tariffs, and drew their voter base from northern industrialists, southern planters, and reform-minded evangelicals",
      "Jacksonian Democrats and Whigs were entirely identical in constitutional construction, banking policy, internal improvements, tariff policy, and voter base with no meaningful differences of any kind during the entire period from 1834 through 1848 in any region",
      "Jacksonian Democrats supported the National Bank and high tariffs while Whigs opposed the Bank and supported low tariffs and strict construction during the entire period from 1834 through 1848 in any region of the United States during the period",
      "There were no Jacksonian Democrats or Whigs during the entire period from 1834 through 1848 in any region of the United States with no party system of any kind during the entire period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Democrats: strict + no Bank + no internal improvements + low tariff + farmers/workers/immigrants. Whigs: loose + Bank + American System + high tariff + industrialists/planters/evangelicals.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushdem-ent-2a',
    question: 'Which best describes the Marshall Court (1801–35)?',
    options: [
      "Under Federalist Chief Justice John Marshall, the Supreme Court established judicial review (Marbury v. Madison 1803), upheld implied federal powers and federal supremacy over state taxation (McCulloch v. Maryland 1819), upheld the contracts clause to protect corporate charters (Dartmouth College v. Woodward 1819), expanded federal commerce-clause power (Gibbons v. Ogden 1824), and recognized Cherokee national sovereignty (Worcester v. Georgia 1832) — all expanding federal authority and embedding Federalist constitutional principles in case law",
      "The Marshall Court established no judicial review, no implied federal powers, no federal supremacy, no commerce-clause expansion, and no recognition of Cherokee sovereignty of any kind during the entire period from 1801 through 1835 in any region",
      "The Marshall Court existed but had no significant decisions of any kind during the entire period from 1801 through 1835 in any region of the United States during the period in any region of the United States during the period in any region",
      "The Marshall Court restricted federal power in every decision and ruled against the federal government in every case during the entire period from 1801 through 1835 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Marshall Court (1801-35): Marbury 1803 (judicial review) + McCulloch 1819 (implied powers + supremacy) + Dartmouth 1819 (contracts) + Gibbons 1824 (commerce) + Worcester 1832 (Cherokee).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushdem-ent-2b',
    question: 'Which best describes the Bank War (1832–36)?',
    options: [
      "President Andrew Jackson vetoed the recharter of the Second Bank of the United States in 1832, framing the Bank as an unconstitutional tool of 'rich and powerful' elites; after his 1832 reelection, Jackson removed federal deposits from the Bank and placed them in state 'pet banks'; the Bank's charter expired in 1836; the Specie Circular (1836) requiring gold/silver for federal land purchases helped trigger the Panic of 1837 under Jackson's successor Van Buren",
      "Jackson defended and recharted the Second Bank of the United States in 1832 with no veto, no removal of deposits, no pet banks, no Specie Circular, and no Panic of 1837 of any kind during the entire period from 1832 through 1837 in any region",
      "There was no Second Bank of the United States during the entire period from 1816 through 1836 in any region of the United States with no Bank War, no Bank Veto, and no Specie Circular of any kind during the entire period in any region",
      "Jackson supported the National Bank and opposed only the Bill of Rights during the entire period from 1832 through 1836 in any region of the United States with no Bank Veto and no Bank War of any kind during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Bank War (1832-36): Jackson Veto 1832 + reelection 1832 + deposits removed → "pet banks" + charter expires 1836 + Specie Circular 1836 → Panic 1837.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushdem-ent-3a',
    question: 'Which best describes Indian Removal under Jackson (1830–39)?',
    options: [
      "Congress passed the Indian Removal Act in 1830 authorizing the president to negotiate (or coerce) treaties exchanging Indigenous lands east of the Mississippi for lands in Indian Territory (modern Oklahoma); the Cherokee won at the Supreme Court in Worcester v. Georgia (1832), but Jackson defied the decision; the Treaty of New Echota (1835) signed by an unauthorized minority of Cherokee was used to justify removal; the Trail of Tears (1838–39) forced approximately 16,000 Cherokee west, with approximately 4,000 dying en route",
      "There was no Indian Removal Act, no Worcester v. Georgia, no Treaty of New Echota, and no Trail of Tears of any kind during the entire period from 1830 through 1840 in any region of the United States during the period in any region",
      "Indian Removal was a peaceful voluntary migration of Cherokee with no federal coercion, no Supreme Court involvement, no New Echota Treaty, and no deaths of any kind during the entire period from 1830 through 1840 in any region of the United States",
      "Indian Removal applied only to non-Indigenous British settlers and the Cherokee remained on their treaty-defined territory throughout the entire period from 1830 through 1860 in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Indian Removal: Removal Act 1830 + Worcester 1832 (Cherokee won, Jackson defied) + Treaty of New Echota 1835 + Trail of Tears 1838-39 (~16K removed, ~4K died).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushdem-ent-3b',
    question: 'Which best describes the Mexican-American War (1846–48)?',
    options: [
      "President Polk, elected in 1844 on an expansion platform, sent troops into disputed Texas-Mexico border territory after Texas annexation in 1845; war was declared in 1846; the U.S. won, and the Treaty of Guadalupe Hidalgo (1848) ceded approximately one-third of Mexico (modern California, Nevada, Utah, Arizona, New Mexico, and parts of Colorado) to the U.S. for $15 million; the Wilmot Proviso (proposed 1846) tried unsuccessfully to ban slavery in any acquired territory, sharpening sectional crisis",
      "There was no Mexican-American War during the entire period from 1846 through 1848 in any region of the United States with no Texas annexation, no Treaty of Guadalupe Hidalgo, and no Mexican Cession of any kind during the entire period in any region",
      "The Mexican-American War was won by Mexico and the United States ceded California, Texas, and Florida to Mexico under the Treaty of Guadalupe Hidalgo in 1848 in any region of the United States during the period in any region",
      "The Mexican-American War involved no territorial transfer of any kind and the United States acquired no Mexican territory during the entire period from 1846 through 1848 in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Mexican-American War (1846-48): Polk 1844 expansion + Texas annexation 1845 + war 1846 → Treaty Guadalupe Hidalgo 1848 (~1/3 of Mexico for $15M) + Wilmot Proviso (failed ban on slavery in cession).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushdem-ent-4a',
    question: 'Which best describes the connection between the market revolution and antebellum reform movements?',
    options: [
      'The market revolution (canals, railroads, telegraphs, factories, urbanization) created social dislocations, new urban poverty, and growing immigrant populations that fueled reform movements: temperance (responding to working-class drinking), abolitionism (responding to slavery in the cotton economy), public education (Horace Mann), women\'s rights (Seneca Falls 1848 organized women alienated from politics), prison and asylum reform (Dorothea Dix), and utopian communities — all rooted in the Second Great Awakening\'s evangelical perfectionism',
      'The market revolution had no connection to antebellum reform movements of any kind with no temperance, no abolitionism, no public education, no women\'s rights, no prison reform, and no Second Great Awakening of any kind during the entire period in any region',
      'The market revolution and antebellum reform movements existed entirely separately during the entire period from 1820 through 1860 with no Second Great Awakening connection of any kind in any region of the United States during the period in any region',
      'There was no market revolution and no antebellum reform movements of any kind during the entire period from 1820 through 1860 in any region of the United States with no canals, no railroads, no telegraphs, and no factories of any kind in any region'
    ],
    correctIndex: 0,
    explanation: 'Market revolution → social dislocations → reform movements (temperance, abolition, education, women\'s rights, prison/asylum, utopian) rooted in Second Great Awakening.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushdem-ent-4b',
    question: 'Which best describes the connection between the Mexican Cession (1848) and sectional crisis?',
    options: [
      "The Mexican Cession (CA, NM, AZ, UT, NV, CO) reopened the slavery-in-territories question that the Missouri Compromise had supposedly settled; the Wilmot Proviso (1846) tried to ban slavery in any acquired territory and was repeatedly defeated in the Senate; California's request for free-state admission triggered the Compromise of 1850; sectional disputes over the cession's organization sharpened into the Kansas-Nebraska Act (1854) and Bleeding Kansas, leading directly toward the Civil War",
      "The Mexican Cession had no connection to sectional crisis of any kind with no Wilmot Proviso, no Compromise of 1850, no Kansas-Nebraska Act, and no Bleeding Kansas of any kind during the entire period in any region of the United States",
      "The Mexican Cession resolved all sectional crisis permanently with no further sectional disputes of any kind during the entire period from 1848 through the Civil War in any region of the United States during the period in any region",
      "There was no Mexican Cession in 1848 and no sectional crisis of any kind during the entire period from 1846 through 1860 in any region of the United States during the period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Mexican Cession 1848 reopened slavery question → Wilmot Proviso 1846 → Compromise of 1850 → Kansas-Nebraska 1854 → Bleeding Kansas → Civil War.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushdem-ent-5a',
    question: 'Which best describes the change in American voter participation between the 1824 election and the 1840 election?',
    options: [
      'Voter turnout among eligible voters increased dramatically from approximately 25 percent in 1824 (when most states still had property requirements and chose presidential electors via state legislatures) to approximately 80 percent in 1840 (after most property requirements had been eliminated and state legislatures had moved to popular election of presidential electors); the rise reflected mass party mobilization, the spread of newspapers, and the development of competitive two-party politics',
      'Voter turnout remained constant or declined between 1824 and 1840 with no expansion of suffrage, no elimination of property requirements, and no mass party mobilization of any kind during the entire period in any region of the United States',
      'Voter turnout decreased from approximately 80 percent in 1824 to approximately 25 percent in 1840 due to mass disfranchisement of white male voters during the entire period in any region of the United States during the period in any region',
      'There were no presidential elections in 1824 or 1840 and no voter turnout data of any kind during the entire period from 1820 through 1840 in any region of the United States during the period in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'Turnout 1824 (~25%) → 1840 (~80%): elimination of property requirements + popular election of electors + mass party mobilization + newspapers + two-party competition.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushdem-ent-5b',
    question: 'Which best describes a major continuity from the colonial period through the early republic regarding Indigenous policy?',
    options: [
      'Continuous Indigenous dispossession through treaty-making, military force, and settler expansion: from colonial-era treaties (e.g., Pequot War 1637, King Philip\'s War 1675) through the Northwest Indian War (1785–95) and the Treaty of Greenville (1795), through Tecumseh\'s confederacy and the War of 1812, through the Indian Removal Act (1830) and Trail of Tears (1838–39); the methods (treaty/war/forced removal) and the underlying logic (settler land hunger backed by federal power) showed deep continuity',
      'Indigenous policy from the colonial period through the early republic was characterized by complete recognition of Indigenous sovereignty with no dispossession of any kind during the entire period from 1607 through 1840 in any region of the United States',
      'Indigenous policy was discontinuous between the colonial period and the early republic with no treaty-making, no military force, and no settler expansion of any kind during the entire period in any region of the United States',
      'There were no Indigenous peoples in North America during the entire period from 1607 through 1840 in any region of the United States with no dispossession, no treaty-making, and no military force of any kind in any region'
    ],
    correctIndex: 0,
    explanation: 'Continuity: Indigenous dispossession via treaty/war/forced removal from Pequot 1637 → King Philip\'s 1675 → NW Indian War 1785-95 → War of 1812 → Removal 1830 → Trail of Tears 1838-39.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushdem-ent-6a',
    question: "Which historical context is most essential for sourcing Jackson's Bank Veto Message (1832)?",
    options: [
      "The veto was issued in July 1832 in response to Congress's recharter of the Second Bank of the United States; Henry Clay had pushed early recharter as a 1832 election issue, hoping to make the Bank a wedge against Jackson; instead, Jackson's veto rallied a populist coalition; the message framed the Bank as an unconstitutional tool of 'rich and powerful' elites and helped Jackson decisively win the 1832 election against Clay",
      "The veto was issued in 1816 by James Madison to charter the Second Bank with no Henry Clay involvement, no 1832 election, and no Jackson of any kind during the entire period from 1816 through 1832 in any region of the United States",
      "The veto was issued in 1841 by John Tyler against a Whig-proposed third bank with no Jackson involvement, no Clay election strategy, and no Second Bank of any kind during the entire period from 1832 through 1841 in any region",
      "There was no Bank Veto in 1832 and no Bank War of any kind during the entire period from 1830 through 1840 in any region of the United States during the period in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Bank Veto context: Clay\'s early recharter as 1832 election wedge → Jackson Veto rallied populist coalition → Jackson won 1832 election decisively over Clay.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushdem-ent-6b',
    question: "Which best identifies the point of view of Marshall's Worcester v. Georgia (1832) opinion?",
    options: [
      "Federalist-tradition Chief Justice asserting judicial supremacy over state actions and recognizing Cherokee national sovereignty within their treaty-defined territory; the opinion drew on Marshall's broader Federalist project of constraining state power and elevating federal (and treaty-based) authority — but was famously ignored by Jackson, exposing the Court's dependence on executive enforcement",
      "Jacksonian Democratic Chief Justice supporting Georgia's seizure of Cherokee territory with no recognition of Cherokee sovereignty and no Federalist tradition of any kind during the entire period in any region of the United States",
      "British Crown loyalist asserting British sovereignty over both Georgia and the Cherokee Nation with no relationship to American constitutional law of any kind during the entire period in any region of the United States",
      "Cherokee Nation chief asserting Cherokee sovereignty with no Supreme Court opinion of any kind during the entire period from 1831 through 1832 in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'Worcester POV: Federalist-tradition Marshall, judicial supremacy over states + Cherokee sovereignty; ignored by Jackson → exposed Court\'s dependence on executive enforcement.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushdem-ent-7a',
    question: 'In which year was the Indian Removal Act passed?',
    options: ['1820', '1828', '1830', '1838'],
    correctIndex: 2,
    explanation: '1830 (Indian Removal Act). 1820 = Missouri Compromise; 1828 = Jackson elected; 1838 = Trail of Tears begins.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushdem-ent-7b',
    question: 'Which best demonstrates AP comparison skill across early-19th-century party systems?',
    options: [
      "Jacksonian Democrats and Whigs both organized as competitive mass parties with newspapers, conventions, and voter mobilization, but Democrats favored strict construction, opposed the National Bank, opposed federally funded internal improvements, supported low tariffs, and drew their base from southern/western farmers, urban workers, and new immigrants; Whigs favored loose construction, supported the Bank, supported the American System (internal improvements + protective tariffs + national bank), and drew their base from northern industrialists, southern planters, and reform-minded evangelicals",
      "Jacksonian Democrats and Whigs were entirely identical in party organization, constitutional construction, banking policy, internal improvements, tariffs, and voter base with no meaningful differences of any kind during the entire period from 1834 through 1856 in any region",
      "Jacksonian Democrats and Whigs had no shared themes of any kind and cannot be compared in any meaningful way during the entire period from 1834 through 1856 in any region of the United States during the period",
      "Neither Jacksonian Democrats nor Whigs existed during the early 19th century and there was no party system of any kind during the entire period from 1828 through 1854 in any region of the United States during the period in any region"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: name shared theme (mass party organization, mobilization) AND specific differences (Democrats: strict + no Bank + no improvements + low tariff + farmers/workers; Whigs: loose + Bank + American System + industrialists/planters/evangelicals).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
