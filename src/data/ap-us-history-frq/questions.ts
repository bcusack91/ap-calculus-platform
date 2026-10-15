/**
 * AP US History — FRQ practice bank, built to the May 2027 Section II:
 *   - 3 required short-answer questions (SAQ), 40 minutes, 3 points each, all sourced:
 *     SAQ 1 a secondary text, SAQ 2 a primary text, SAQ 3 a non-text source
 *     (image, map, or data), each from a different period;
 *   - 1 document-based question (DBQ), 60 minutes including a 15-minute reading
 *     period, 7 points, 7 documents;
 *   - 1 required long essay question (LEQ), 40 minutes, 6 points, one broad prompt.
 * The bank holds two complete SAQ sets (six SAQs, six different periods), three DBQs
 * and two LEQs. Every rubric line is worth one point, as on the official scoring
 * guidelines. Sources are real, public-domain texts quoted from the published
 * editions; any excerpt that is not verbatim is labelled "adapted".
 */

import { shuffleArray } from '@/lib/shuffle-options'

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
  /** Distinct keywords the response must contain to earn the point (default 1). */
  minMatches?: number
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type USHistoryFRQType = 'saq' | 'dbq' | 'leq'

/** Exam order, labels, points per question, and section minutes for the real Section II. */
export const APUSH_FRQ_TYPES: { type: USHistoryFRQType; label: string; short: string; points: number; minutes: number; count: number }[] = [
  { type: 'saq', label: 'Short-Answer Questions', short: 'SAQ', points: 3, minutes: 40, count: 3 },
  { type: 'dbq', label: 'Document-Based Question', short: 'DBQ', points: 7, minutes: 60, count: 1 },
  { type: 'leq', label: 'Long Essay Question', short: 'LEQ', points: 6, minutes: 40, count: 1 },
]

/** The source each SAQ position uses on the May 2027 exam. */
export const SAQ_SLOT_LABEL: Record<1 | 2 | 3, string> = {
  1: 'Secondary source',
  2: 'Primary text source',
  3: 'Non-text source',
}

export interface USHistoryFRQ {
  id: string
  type: USHistoryFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  /** SAQs only: which complete three-question set the item belongs to. */
  saqSet?: number
  /** SAQs only: exam position (1 secondary text, 2 primary text, 3 non-text). */
  saqSlot?: 1 | 2 | 3
}

/* ------------------------------------------------------------------ */
/*  Short-answer questions — 3 parts, 1 point each                    */
/* ------------------------------------------------------------------ */

const saqFRQs: USHistoryFRQ[] = [
  // ---------------- Set 1: Periods 6, 2, 8 ----------------
  {
    id: 'apush-saq-1-1',
    type: 'saq',
    unit: 6,
    saqSet: 1,
    saqSlot: 1,
    title: 'SAQ 1 (Secondary Source): Turner and the Frontier Thesis',
    prompt: `**SAQ 1 — Secondary source.** Use the passage below to answer all parts of the question.

> "In a recent bulletin of the Superintendent of the Census for 1890 appear these significant words: 'Up to and including 1880 the country had a frontier of settlement, but at present the unsettled area has been so broken into by isolated bodies of settlement that there can hardly be said to be a frontier line.' . . . This brief official statement marks the closing of a great historic movement. Up to our own day American history has been in a large degree the history of the colonization of the Great West. The existence of an area of free land, its continuous recession, and the advance of American settlement westward, explain American development."

*Frederick Jackson Turner, historian, "The Significance of the Frontier in American History," a paper read to the American Historical Association in Chicago, 1893*`,
    parts: [
      {
        label: '(a)',
        prompt: "Briefly describe Turner's argument about the development of the United States.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the argument: the availability of "free land" in the West and the steady westward advance of settlement were the main force shaping American development (its institutions, democracy, and character). Restating "the frontier" without explaining its effect does not earn the point.',
            keywords: ['free land', 'westward', 'moving west', 'the west shaped', 'frontier shaped', 'frontier explains', 'frontier created', 'frontier made', 'expansion explains', 'expansion shaped', 'democracy', 'individualism'],
          },
        ],
        sampleAnswer: 'Turner argues that westward expansion explains American history. The supply of "free land" in the West and the constant movement of settlers onto it, rather than European inheritance, shaped American institutions and made Americans democratic and individualistic.',
      },
      {
        label: '(b)',
        prompt: "Briefly explain how ONE specific historical development from the period 1865–1898 that is not mentioned in the passage could be used to support Turner's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains how a specific development supports the thesis. Acceptable: post-1865 Plains settlement under the Homestead Act (1862); the transcontinental railroad (1869); the Populist movement and the Omaha Platform (1892) rising from western and southern farmers; western territories and states granting women the vote (Wyoming, 1869); the Oklahoma land rush (1889); mining and cattle booms that drew settlers west.',
            keywords: ['homestead', 'transcontinental', 'railroad', 'populis', 'omaha platform', "people's party", 'wyoming', 'land rush', 'oklahoma', 'grange', 'exodusters', 'cattle', 'mining', 'boomtown'],
          },
        ],
        sampleAnswer: 'The Populist movement supports Turner. Farmers on the Great Plains and in the South formed the People\'s Party and adopted the Omaha Platform (1892), demanding direct election of senators and government ownership of railroads. Their movement shows frontier settlers creating new, more democratic political demands, as Turner claimed the frontier did.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain how ONE specific historical development from the period 1865–1898 that is not mentioned in the passage could be used to challenge Turner's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains how a specific development challenges the thesis. Acceptable: the land was not "free" but taken from Native nations (wars on the Plains, Little Bighorn 1876, Wounded Knee 1890, the Dawes Act 1887); federal power (the army, railroad land grants and subsidies) rather than individual pioneers drove settlement; industrialization and immigration in eastern cities, not the frontier, drove development; Chinese, Mexican American, and Black settlers made the West multiethnic rather than a crucible of a single "American" character.',
            keywords: ['native', 'indian', 'dawes', 'wounded knee', 'little bighorn', 'reservation', 'sioux', 'lakota', 'not free', 'land grant', 'federal government', 'subsid', 'army', 'urbaniz', 'industrializ', 'immigra', 'chinese', 'cities'],
          },
        ],
        sampleAnswer: 'The Dawes Act (1887) challenges Turner. The western land he calls "free" belonged to Native nations, and the federal government took it through war and through the Dawes Act, which broke up reservations into individual allotments and opened the "surplus" to white settlers. Federal power and dispossession, not an empty frontier, made western settlement possible.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apush-saq-1-2',
    type: 'saq',
    unit: 2,
    saqSet: 1,
    saqSlot: 2,
    title: 'SAQ 2 (Primary Source): John Winthrop, "A Model of Christian Charity" (1630)',
    prompt: `**SAQ 2 — Primary text source.** Use the excerpt below to answer all parts of the question.

> "God Almighty in his most holy and wise providence, hath so disposed of the condition of mankind, as in all times some must be rich, some poor, some high and eminent in power and dignity; others mean and in submission. . . .
>
> We must delight in each other; make others' conditions our own; rejoice together, mourn together, labor and suffer together, always having before our eyes our commission and community in the work, as members of the same body. . . . For we must consider that we shall be as a city upon a hill. The eyes of all people are upon us."

*John Winthrop, Puritan leader and governor of the Massachusetts Bay Colony, "A Model of Christian Charity," written in 1630 for the colonists sailing to New England (spelling modernized)*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE goal Winthrop sets out for the Massachusetts Bay colony in the excerpt.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a goal in the excerpt. Acceptable: a godly, united community whose members are bound by mutual obligation ("members of the same body"); a model Christian society that others would watch and imitate ("a city upon a hill"); an ordered society in which differences of rank are accepted as God\'s plan.',
            keywords: ['city upon a hill', 'community', 'unity', 'united', 'godly', 'covenant', 'hierarchy', 'rank', 'rich and poor', 'same body', 'religious'],
          },
        ],
        sampleAnswer: 'Winthrop wants the colony to be a model Christian community, "a city upon a hill" watched by the world. Its members should act as "members of the same body," caring for one another while accepting that God made some rich and some poor.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development in England in the early 1600s that led Puritans to migrate to New England.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a development. Acceptable: Puritans\' wish to "purify" the Church of England of Catholic practices; pressure and persecution under Charles I and William Laud (Bishop of London from 1628, Archbishop of Canterbury from 1633); the chartering of the Massachusetts Bay Company (1629) as a joint-stock company; economic depression in England\'s cloth trade. Must explain how it led to migration (the "Great Migration" of the 1630s).',
            keywords: ['church of england', 'anglican', 'purify', 'persecut', 'laud', 'charles i', 'reformation', 'great migration', 'charter', 'joint-stock', 'joint stock', 'massachusetts bay company', 'cloth', 'protestant'],
          },
        ],
        sampleAnswer: 'Puritans wanted to purify the Church of England of practices they considered Catholic. Under King Charles I and William Laud, then Bishop of London and later Archbishop of Canterbury, Puritan ministers were silenced and punished, so thousands of Puritans used the Massachusetts Bay Company\'s 1629 charter to found a colony where they could build churches as they saw fit.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain ONE way New England society in the period 1630–1700 either fulfilled OR fell short of Winthrop's vision.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a fulfillment or shortfall. Fell short: the banishment of Roger Williams (1635) and Anne Hutchinson (sentenced 1637) for dissent; violence against Native peoples in the Pequot War (1636–1638) and King Philip\'s War (1675–1676); the Halfway Covenant (1662) as church membership declined; the Salem witch trials (1692); the growth of commerce and individual ambition. Fulfilled: town meetings and congregational churches; the Massachusetts school law of 1647; Harvard College (1636); high literacy and stable family farms.',
            keywords: ['hutchinson', 'roger williams', 'rhode island', 'pequot', 'king philip', 'metacom', 'halfway covenant', 'half-way covenant', 'salem', 'witch', 'town meeting', 'harvard', 'school law', '1647', 'literacy', 'congregational', 'merchant'],
          },
        ],
        sampleAnswer: 'New England fell short of Winthrop\'s vision of loving unity. The colony sentenced Anne Hutchinson to banishment in 1637 for claiming direct revelation from God, showing that leaders kept order by expelling dissenters rather than by mutual affection. In King Philip\'s War (1675–1676), colonists also fought a devastating war against the Wampanoag and their allies.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apush-saq-1-3',
    type: 'saq',
    unit: 8,
    saqSet: 1,
    saqSlot: 3,
    title: 'SAQ 3 (Non-Text Source): U.S. Troops in Vietnam, 1960–1972',
    prompt: `**SAQ 3 — Non-text source.** Use the data below to answer all parts of the question.

**U.S. military personnel in South Vietnam, end of selected years**

- 1960: 900
- 1962: 11,300
- 1964: 23,300
- 1965: 184,300
- 1966: 385,300
- 1967: 485,600
- 1968: 536,100
- 1969: 475,200
- 1970: 334,600
- 1971: 156,800
- 1972: 24,200

*Source: U.S. Department of Defense figures*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE pattern shown in the data.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a pattern: a sharp increase after 1964 (from about 23,000 to more than 180,000 in one year); the highest year-end figure, more than 500,000, in 1968; a steady decline after 1968 to about 24,000 by 1972.',
            keywords: ['increase', 'rose', 'grew', 'escalat', 'peak', 'jump', 'sharp', 'declin', 'decrease', 'fell', 'dropped', 'withdr'],
          },
        ],
        sampleAnswer: 'The number of U.S. troops rose sharply after 1964, from about 23,000 to more than 180,000 in a single year, reached its highest year-end level, about 536,000, in 1968, and then fell steadily to about 24,000 by 1972.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development that caused the change in U.S. troop levels between 1964 and 1968.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause of escalation. Acceptable: the Gulf of Tonkin Resolution (August 1964) giving President Johnson broad authority; the containment policy and the domino theory; Johnson\'s decision to begin Operation Rolling Thunder and send combat Marines to Da Nang (March 1965); the weakness of the South Vietnamese government against the Viet Cong and North Vietnam.',
            keywords: ['gulf of tonkin', 'tonkin', 'johnson', 'lbj', 'containment', 'domino', 'rolling thunder', 'da nang', 'viet cong', 'cold war', 'communis'],
          },
        ],
        sampleAnswer: 'After reported attacks on U.S. destroyers, Congress passed the Gulf of Tonkin Resolution in August 1964, letting President Johnson use force without a declaration of war. Believing in containment and the domino theory, Johnson began bombing North Vietnam and sent the first combat troops in 1965, which explains the jump in troop levels.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE specific historical development that caused the change in U.S. troop levels between 1969 and 1972.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause of withdrawal. Acceptable: President Nixon\'s "Vietnamization" policy (1969); falling public support after the Tet Offensive (1968); the antiwar movement and protests such as those after the invasion of Cambodia and the Kent State shootings (1970); the Pentagon Papers (1971); the Paris peace negotiations that produced the 1973 accords.',
            keywords: ['vietnamization', 'nixon', 'tet', 'antiwar', 'anti-war', 'kent state', 'pentagon papers', 'paris', 'public opinion', 'protest', 'draft'],
          },
        ],
        sampleAnswer: 'President Nixon adopted "Vietnamization" in 1969, withdrawing U.S. troops while training and arming the South Vietnamese army to do the fighting. He did so because public support had collapsed after the Tet Offensive and the antiwar movement was growing, so the numbers fall each year after 1968.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },

  // ---------------- Set 2: Periods 3, 5, 7 ----------------
  {
    id: 'apush-saq-2-1',
    type: 'saq',
    unit: 3,
    saqSet: 2,
    saqSlot: 1,
    title: 'SAQ 1 (Secondary Source): Charles Beard on the Constitution',
    prompt: `**SAQ 1 — Secondary source.** Use the passage below to answer all parts of the question.

> "The members of the Philadelphia Convention which drafted the Constitution were, with a few exceptions, immediately, directly, and personally interested in, and derived economic advantages from, the establishment of the new system.
>
> The Constitution was essentially an economic document based upon the concept that the fundamental private rights of property are anterior to government and morally beyond the reach of popular majorities."

*Charles A. Beard, historian, An Economic Interpretation of the Constitution of the United States, 1913*`,
    parts: [
      {
        label: '(a)',
        prompt: "Briefly describe Beard's argument about the Constitution.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the argument: the framers wrote the Constitution mainly to protect their own economic interests and the rights of property (creditors, bondholders, merchants) against popular majorities.',
            keywords: ['property', 'economic interest', 'their own interest', 'self-interest', 'wealthy', 'wealth', 'rich', 'elite', 'creditor', 'bondholder', 'majorities', 'protect'],
          },
        ],
        sampleAnswer: 'Beard argues that the framers were wealthy men who wrote the Constitution to protect their own property and economic interests, deliberately placing property rights beyond the reach of popular majorities.',
      },
      {
        label: '(b)',
        prompt: "Briefly explain how ONE specific historical development from the period 1781–1800 could be used to support Beard's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains supporting evidence. Acceptable: Shays\' Rebellion (1786–1787) frightening creditors into supporting a stronger government; the Constitution\'s bans on state paper money and laws impairing contracts (Article I, Section 10); Hamilton\'s funding and assumption plan (1790) rewarding bond speculators; the Bank of the United States (1791); indirect election of senators and the president limiting majorities; federal suppression of the Whiskey Rebellion (1794).',
            keywords: ['shays', 'contract clause', 'contracts', 'paper money', 'article i', 'hamilton', 'assumption', 'funding', 'national debt', 'bank of the united states', 'national bank', 'speculat', 'creditor', 'electoral college', 'senat', 'whiskey'],
          },
        ],
        sampleAnswer: 'Shays\' Rebellion (1786–1787), in which indebted Massachusetts farmers closed the courts to stop foreclosures, frightened creditors. The Convention responded by barring states from issuing paper money or impairing contracts, which protected creditors against debtor majorities, as Beard argues.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain how ONE specific historical development from the period 1781–1800 could be used to challenge Beard's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains challenging evidence. Acceptable: the Constitution was ratified by elected state conventions; wealthy men such as George Mason and Patrick Henry opposed it as Anti-Federalists, so wealth divided both sides; the Bill of Rights (1791) protected individual liberties; the framers responded to political failures of the Articles of Confederation (no power to tax, weak defense and diplomacy, interstate trade disputes); the Great Compromise and Madison\'s Federalist No. 10 show political rather than purely economic reasoning.',
            keywords: ['anti-federalist', 'antifederalist', 'mason', 'patrick henry', 'bill of rights', 'ratif', 'ratifying convention', 'state convention', 'great compromise', 'connecticut compromise', 'federalist', 'madison', 'articles of confederation', 'foreign', 'defense', 'tax'],
          },
        ],
        sampleAnswer: 'The ratification debate challenges Beard. Wealthy planters such as George Mason and Patrick Henry led the Anti-Federalist opposition, so property owners were found on both sides. The Federalists also won ratification only by promising a Bill of Rights (1791), which protected individual liberties rather than property alone.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apush-saq-2-2',
    type: 'saq',
    unit: 5,
    saqSet: 2,
    saqSlot: 2,
    title: 'SAQ 2 (Primary Source): "Manifest Destiny" (1845)',
    prompt: `**SAQ 2 — Primary text source.** Use the excerpt below to answer all parts of the question.

> ". . . other nations have undertaken to intrude themselves into it [the question of annexing Texas], between us and the proper parties to the case, in a spirit of hostile interference against us, for the avowed object of thwarting our policy and hampering our power, limiting our greatness and checking the fulfilment of our manifest destiny to overspread the continent allotted by Providence for the free development of our yearly multiplying millions. . . .
>
> The Anglo-Saxon foot is already on its borders [California's]. Already the advance guard of the irresistible army of Anglo-Saxon emigration has begun to pour down upon it, armed with the plough and the rifle, and marking its trail with schools and colleges, courts and representative halls, mills and meeting-houses."

*"Annexation," an unsigned article in the United States Magazine and Democratic Review, July–August 1845, usually attributed to its editor, John L. O'Sullivan*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE argument the author makes in the excerpt.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes an argument: the United States has a God-given right ("Providence") to expand across the continent; its growing population needs and justifies new land; European powers are trying to block that expansion; American settlers bring civilization and self-government to lands such as California.',
            keywords: ['manifest destiny', 'providence', 'god', 'destin', 'overspread', 'continent', 'population', 'anglo-saxon', 'expand', 'expansion', 'interfer', 'england', 'britain', 'france', 'civiliz'],
          },
        ],
        sampleAnswer: 'The author argues that Providence intended the United States to spread across the whole continent to make room for its fast-growing population, and that Britain and France were wrongly trying to block that destiny by interfering in Texas.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development in the period 1830–1845 that contributed to the ideas expressed in the excerpt.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a contributing development. Acceptable: Texas independence (1836) and the debate over annexing it; American migration on the Oregon Trail ("Oregon fever"); James K. Polk\'s election in 1844 on an expansionist platform; rapid population growth from natural increase and immigration; ideas of Anglo-Saxon racial superiority; the market revolution\'s demand for land and ports.',
            keywords: ['texas independence', 'republic of texas', 'oregon trail', 'annexation of texas', 'lone star', '1836', 'polk', '1844', 'oregon', 'fifty-four forty', 'immigra', 'alamo', 'market revolution', 'population growth'],
          },
        ],
        sampleAnswer: 'American settlers in Texas won independence from Mexico in 1836 and asked to join the United States. The annexation fight dominated the 1844 election, which James K. Polk won on a platform of acquiring Texas and Oregon, so expansion was the leading political issue when this article was published.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE specific effect of the expansionist policies the excerpt supports in the period 1845–1877.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains an effect. Acceptable: the Mexican-American War (1846–1848) and the Treaty of Guadalupe Hidalgo (1848) adding California and the Southwest; the Wilmot Proviso and the sectional crisis over slavery in the new territories (Compromise of 1850, Kansas-Nebraska Act); the California Gold Rush (1849) and violence against Native Californians; Mexican Americans losing land despite treaty promises.',
            keywords: ['mexican-american war', 'mexican american war', 'mexican war', 'war with mexico', 'guadalupe hidalgo', 'mexican cession', 'wilmot', 'compromise of 1850', 'gold rush', 'kansas-nebraska', 'slavery', 'sectional', 'californios', 'native'],
          },
        ],
        sampleAnswer: 'Expansion led to the Mexican-American War (1846–1848), after which the Treaty of Guadalupe Hidalgo gave the United States California and the Southwest. The question of whether slavery would spread into that land, raised by the Wilmot Proviso, set off the sectional crisis that led to the Compromise of 1850 and, eventually, the Civil War.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apush-saq-2-3',
    type: 'saq',
    unit: 7,
    saqSet: 2,
    saqSlot: 3,
    title: 'SAQ 3 (Non-Text Source): Dorothea Lange, "Migrant Mother" (1936)',
    prompt: `**SAQ 3 — Non-text source.** Use the image described below to answer all parts of the question.

**Image (described):** A photograph taken by Dorothea Lange for the federal Resettlement Administration (later the Farm Security Administration) in Nipomo, California, in March 1936. A woman in worn clothing sits beneath a tent flap, one hand raised to her chin, looking past the camera with a lined, worried face. Two young children lean on her shoulders with their faces turned away from the camera, and an infant lies in her lap.

Lange's caption: "Destitute pea pickers in California. Mother of seven children. Age thirty-two. Nipomo, California."`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE perspective about American society in the 1930s expressed by the photograph.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a perspective: migrant farm families were suffering severe poverty in the Depression; the poor deserved sympathy and dignity rather than blame; the government needed to help destitute rural Americans. Must refer to what the photograph shows.',
            keywords: ['poverty', 'poor', 'suffer', 'depression', 'migrant', 'desperat', 'hardship', 'sympath', 'dignity', 'relief', 'destitute', 'worried', 'struggl'],
          },
        ],
        sampleAnswer: 'The photograph presents migrant farm workers as ordinary families suffering through no fault of their own. The worried mother and her children ask viewers to sympathize with the rural poor of the Depression rather than blame them.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development that contributed to the conditions shown in the photograph.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause. Acceptable: the Great Depression after the 1929 stock market crash; the collapse of farm prices; the Dust Bowl (drought and over-plowing on the southern Plains) that drove "Okies" to California; tenant farmers and sharecroppers pushed off the land, partly by mechanization and Agricultural Adjustment Act payments to reduce acreage.',
            keywords: ['dust bowl', 'drought', 'okie', 'oklahoma', 'great plains', 'depression', '1929', 'crash', 'farm prices', 'tenant', 'sharecrop', 'agricultural adjustment', 'aaa'],
          },
        ],
        sampleAnswer: 'The Dust Bowl turned the southern Great Plains into a desert in the mid-1930s, as drought combined with years of over-plowing. Hundreds of thousands of people from Oklahoma, Texas, and Arkansas, called "Okies," moved to California, where so many competed for farm work that wages collapsed.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE specific way the federal government responded to conditions like those shown in the photograph in the period 1933–1941.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a New Deal response. Acceptable: the Resettlement Administration (1935) and Farm Security Administration (1937), which built migrant camps and made loans to poor farmers; the Agricultural Adjustment Act (1933); the Soil Conservation Service (1935); the Works Progress Administration and the Civilian Conservation Corps; the Social Security Act (1935), which notably excluded farm workers.',
            keywords: ['new deal', 'farm security administration', 'resettlement administration', 'fsa', 'agricultural adjustment', 'aaa', 'soil conservation', 'social security', 'wpa', 'works progress', 'ccc', 'civilian conservation', 'roosevelt', 'fdr', 'migrant camp'],
          },
        ],
        sampleAnswer: 'As part of the New Deal, the Resettlement Administration (1935), which became the Farm Security Administration in 1937, built camps for migrant workers in California and made loans to struggling farmers. It hired photographers like Lange so that their images would build public support for these programs.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
]

/* ------------------------------------------------------------------ */
/*  Long essay questions — one broad prompt, 6-point rubric           */
/* ------------------------------------------------------------------ */

const LEQ_DIRECTIONS =
  '**Directions:** Suggested writing time: 40 minutes.\n\n' +
  'In your response you should do the following:\n\n' +
  '- Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n' +
  '- Describe a broader historical context relevant to the prompt.\n' +
  '- Support an argument in response to the prompt using specific and relevant examples of evidence.\n' +
  '- Use historical reasoning (e.g., comparison, causation, continuity or change) to frame or structure an argument that addresses the prompt.\n' +
  '- Use evidence to corroborate, qualify, or modify an argument that addresses the prompt.'

/** The College Board AP U.S. History LEQ rubric (6 points), with prompt-specific examples. */
function leqRubric(spec: {
  thesisKeywords: string[]
  context: string
  contextKeywords: string[]
  evidence: string
  evidenceKeywords: string[]
  supportKeywords: string[]
  complexity: string
}): FRQRubricItem[] {
  const evidenceKeywords = [...spec.evidenceKeywords, ...spec.supportKeywords]
  return [
    { points: 1, description: 'A. Thesis/Claim — Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning (in the introduction or conclusion; more than a restatement of the prompt).', keywords: spec.thesisKeywords },
    { points: 1, description: `B. Contextualization — Describes a broader historical context relevant to the prompt, in more than a phrase or passing reference. Examples: ${spec.context}`, keywords: spec.contextKeywords },
    { points: 1, description: `C. Evidence (1 of 2) — Provides at least two specific examples of evidence relevant to the topic of the prompt. Examples: ${spec.evidence}`, keywords: evidenceKeywords },
    { points: 1, description: 'C. Evidence (2 of 2) — Supports an argument in response to the prompt using specific and relevant examples of evidence (the evidence is tied to the argument, not just listed). Auto-check: needs at least two different specific examples.', keywords: evidenceKeywords, minMatches: 2 },
    { points: 1, description: 'D. Analysis and reasoning: historical reasoning — Uses historical reasoning (comparison, causation, or continuity and change) to frame or structure an argument that addresses the prompt.', keywords: ['because', 'as a result', 'led to', 'caused', 'in contrast', 'compared', 'similarly', 'continuity', 'turning point', 'whereas'] },
    { points: 1, description: `D. Analysis and reasoning: complexity — Demonstrates a complex understanding of the historical development that is the focus of the prompt, using evidence to corroborate, qualify, or modify an argument. Examples: ${spec.complexity}`, keywords: ['however', 'although', 'nevertheless', 'on the other hand', 'at the same time', 'qualif', 'corroborat'] },
  ]
}

const leqFRQs: USHistoryFRQ[] = [
  {
    id: 'apush-leq-1',
    type: 'leq',
    unit: 4,
    title: 'LEQ: Debates over Federal Power, 1754–1877',
    prompt: LEQ_DIRECTIONS + `

**Prompt:** From the imperial crisis of the 1760s through Reconstruction, Americans argued repeatedly over how much power a central government should hold and how much should remain with the states and the people. These arguments shaped the Revolution, the Constitution, the party system, and the sectional crisis.

Evaluate the extent to which debates over the power of the central government shaped American politics in the period from 1754 to 1877.

*You may focus on one or more of the developments in the prompt; you are not expected to address the entire period.*`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your long essay in response to the prompt above. When you grade it, check your essay against each row of the 6-point rubric.',
        maxPoints: 6,
        rubric: leqRubric({
          thesisKeywords: ['to a great extent', 'to a large extent', 'to a limited extent', 'to some extent', 'largely', 'primarily', 'although'],
          context: 'English traditions of limited government (Magna Carta, the Glorious Revolution of 1688, the English Bill of Rights); salutary neglect and the growth of colonial assemblies such as the Virginia House of Burgesses; Enlightenment ideas of natural rights and consent (Locke); the Seven Years\' War and its debts.',
          contextKeywords: ['salutary neglect', 'colonial assembl', 'house of burgesses', 'glorious revolution', '1688', 'english bill of rights', 'magna carta', 'locke', 'enlightenment', 'seven years', 'french and indian'],
          evidence: 'the Stamp Act (1765) and the Stamp Act Congress; the Articles of Confederation (1781); Shays\' Rebellion; the Constitutional Convention and the Federalist/Anti-Federalist debate; the Bill of Rights; Hamilton\'s national bank; the Virginia and Kentucky Resolutions (1798); McCulloch v. Maryland (1819); the Nullification Crisis (1832); Jackson\'s Bank War; Dred Scott v. Sandford (1857); secession (1860–1861); the Fourteenth Amendment (1868).',
          evidenceKeywords: ['stamp act', 'articles of confederation', 'shays', 'constitutional convention', 'anti-federalist', 'antifederalist', 'bill of rights', 'hamilton', 'national bank', 'whiskey rebellion', 'alien and sedition', 'virginia and kentucky', 'marbury'],
          supportKeywords: ['mcculloch', 'nullification', 'bank war', 'tariff of 1828', 'tariff of abominations', 'dred scott', 'secession', 'confedera', 'fourteenth amendment', '14th amendment', 'reconstruction act', "freedmen's bureau", 'states\' rights', 'states rights'],
          complexity: 'showing that the same states\'-rights arguments served opposite causes (New England at the Hartford Convention, South Carolina in 1832); distinguishing debates driven by principle from those driven by slavery; explaining how the Civil War and the Reconstruction amendments turned the debate toward national power.',
        }),
        sampleAnswer: `**Thesis:** From 1754 to 1877, debates over the power of the central government shaped American politics to a great extent, defining the Revolution, the first party system, and the sectional crisis. However, these debates were often driven by the deeper conflict over slavery, and the Civil War settled them in favor of national power.

**Contextualization:** English colonists brought traditions of limited government, from Magna Carta to the Glorious Revolution of 1688, and under salutary neglect colonial assemblies such as the Virginia House of Burgesses grew used to governing themselves. Enlightenment writers like John Locke taught that legitimate government rests on the consent of the governed. When Britain tried to tax the colonies to pay its Seven Years' War debts, these ideas collided with imperial authority.

**Revolution and Constitution:** Colonists rejected the Stamp Act (1765) because Parliament, a distant central government in which they had no representation, claimed the power to tax them. Fear of central power then shaped the Articles of Confederation (1781), which gave Congress no power to tax. Because Shays' Rebellion showed the weakness of that system, the Constitutional Convention created a stronger national government, and the Anti-Federalists' fears of it led to the Bill of Rights.

**Parties and sectional conflict:** The debate created the first parties. Hamilton's national bank was defended through a broad reading of the Constitution, while Jefferson and Madison answered the Alien and Sedition Acts with the Virginia and Kentucky Resolutions (1798). Later, South Carolina used the same states'-rights theory in the Nullification Crisis (1832) to resist the tariff. By the 1850s, the argument was tied directly to slavery: the Dred Scott decision (1857) denied Congress the power to bar slavery from the territories, and Southern states justified secession in 1860–1861 as a defense of state sovereignty.

**Complexity:** Yet the debate was not a fixed contest of principle. New England Federalists threatened states'-rights resistance at the Hartford Convention (1814–1815), and Southern leaders who championed states' rights demanded a strong federal Fugitive Slave Act in 1850. These shifts show that positions on federal power often followed interests, especially slavery. The Civil War changed the debate: the Fourteenth Amendment (1868) gave the national government power to protect citizens' rights against the states, a turning point in the long argument over federal power.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apush-leq-2',
    type: 'leq',
    unit: 7,
    title: 'LEQ: Migration and American Society, 1844–1980',
    prompt: LEQ_DIRECTIONS + `

**Prompt:** Between the 1840s and the 1970s, millions of people moved to and within the United States: from Ireland, Germany, and China; from southern and eastern Europe; from Mexico; and from the rural South to cities in the North and West. Their arrival changed cities, workplaces, politics, and culture, and it repeatedly provoked efforts to restrict who could come.

Evaluate the extent to which migration changed American society in the period from 1844 to 1980.

*You may focus on one or more of the developments in the prompt; you are not expected to address the entire period.*`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your long essay in response to the prompt above. When you grade it, check your essay against each row of the 6-point rubric.',
        maxPoints: 6,
        rubric: leqRubric({
          thesisKeywords: ['to a great extent', 'to a large extent', 'to a limited extent', 'to some extent', 'largely', 'primarily', 'although', 'transformed'],
          context: 'the market revolution and early industrialization, which created demand for wage labor in northern cities; the transportation revolution (canals, railroads, steamships) that made long-distance migration cheaper; push factors in Europe such as the Irish Potato Famine (1845–1849) and the failed revolutions of 1848; the earlier forced migration of enslaved Africans.',
          contextKeywords: ['market revolution', 'industrializ', 'industrial revolution', 'factories', 'transportation revolution', 'steamship', 'potato famine', 'famine', 'revolutions of 1848', '1848', 'slave trade'],
          evidence: 'Irish and German immigration and the nativist Know-Nothing Party (1850s); Chinese immigration, railroad labor, and the Chinese Exclusion Act (1882); southern and eastern European "new immigrants," Ellis Island, tenements, and settlement houses such as Hull House; political machines such as Tammany Hall; the Great Migration and the Harlem Renaissance; the Immigration Act of 1924; the Bracero Program (1942); the Immigration and Nationality Act of 1965 (Hart-Celler).',
          evidenceKeywords: ['irish', 'know-nothing', 'know nothing', 'nativis', 'chinese exclusion', '1882', 'ellis island', 'tenement', 'hull house', 'settlement house', 'political machine', 'tammany', 'catholic'],
          supportKeywords: ['great migration', 'harlem renaissance', 'immigration act of 1924', 'national origins', 'quota', 'emergency quota', 'bracero', 'hart-celler', 'immigration and nationality act', '1965', 'chicago defender', 'redlining', 'zoot suit'],
          complexity: 'distinguishing changes in cities and labor from continuities in nativism and racial exclusion; comparing European, Asian, Mexican, and African American migrants\' experiences; explaining how restriction (1882, 1924) and reopening (1965) changed the effects of migration over time.',
        }),
        sampleAnswer: `**Thesis:** Between 1844 and 1980, migration transformed American society to a great extent by building industrial cities, creating new political organizations, and producing new forms of culture. At the same time, each wave of migration provoked nativist restriction, which shows a continuity of exclusion alongside change.

**Contextualization:** By the 1840s, the market revolution and early industrialization had created a demand for wage workers in northern factories, canals, and railroads. Steamships soon made the Atlantic crossing faster and cheaper, while the Irish Potato Famine (1845–1849) and the failed European revolutions of 1848 pushed millions of people to leave.

**Cities and politics:** Irish and German immigrants filled northern cities in the 1840s and 1850s, and because many Irish immigrants were Catholic, Protestant nativists formed the Know-Nothing Party to limit their influence. Later, the "new immigrants" from southern and eastern Europe who passed through Ellis Island crowded into tenements, which led reformers to found settlement houses such as Jane Addams's Hull House (1889). Political machines like Tammany Hall traded jobs and favors for immigrant votes, which changed how city politics worked.

**Restriction and reopening:** Migration also produced lasting restrictions. Chinese workers helped build the transcontinental railroad, but the Chinese Exclusion Act (1882) barred most Chinese immigration, the first major federal law to bar immigrants by nationality. The Immigration Act of 1924 set national-origins quotas that sharply cut immigration from southern and eastern Europe. In contrast, the Immigration and Nationality Act of 1965 ended the national-origins system, leading to large new migrations from Asia and Latin America.

**Internal migration and complexity:** The Great Migration of Black southerners to cities like Chicago and New York after 1915 created the Harlem Renaissance and new Black political power in the North. However, migrants met redlining and segregated housing, so migration changed where African Americans lived more than it ended discrimination. Similarly, the Bracero Program (1942) brought Mexican workers when farms needed labor but gave them few rights. Migration therefore transformed American society, but the persistence of nativism and racial exclusion qualifies that transformation.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '40 minutes',
    calculatorAllowed: false,
  },
]

/* ------------------------------------------------------------------ */
/*  Document-based questions — 7 documents, 7-point rubric             */
/* ------------------------------------------------------------------ */

const DBQ_DIRECTIONS =
  '**Directions:** The question is based on the accompanying documents. The documents have been edited for the purpose of this exercise. Suggested time: 60 minutes, including a 15-minute reading period.\n\n' +
  'In your response you should do the following:\n\n' +
  '- Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n' +
  '- Describe a broader historical context relevant to the prompt.\n' +
  '- Support an argument in response to the prompt using at least four documents.\n' +
  '- Use at least one additional piece of specific historical evidence (beyond that found in the documents) relevant to an argument about the prompt.\n' +
  '- For at least two documents, explain how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument.\n' +
  '- Use evidence to corroborate, qualify, or modify an argument that addresses the prompt.'

const DOC_KEYWORDS = ['document 1', 'document 2', 'document 3', 'document 4', 'document 5', 'document 6', 'document 7', 'doc 1', 'doc 2', 'doc 3', 'doc 4', 'doc 5', 'doc 6', 'doc 7', 'doc. 1', 'doc. 2', 'doc. 3', 'doc. 4', 'doc. 5', 'doc. 6', 'doc. 7']

/** The College Board AP U.S. History DBQ rubric (7 points), with prompt-specific examples. */
function dbqRubric(spec: {
  thesisKeywords: string[]
  context: string
  contextKeywords: string[]
  outside: string
  outsideKeywords: string[]
  complexity: string
}): FRQRubricItem[] {
  return [
    { points: 1, description: 'A. Thesis/Claim — Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning (in the introduction or conclusion; more than a restatement of the prompt).', keywords: spec.thesisKeywords },
    { points: 1, description: `B. Contextualization — Describes a broader historical context relevant to the prompt, in more than a phrase or passing reference. Examples: ${spec.context}`, keywords: spec.contextKeywords },
    { points: 1, description: 'C. Evidence from the documents (1 of 2) — Uses the content of at least THREE documents to address the topic of the prompt (describes, not just quotes, what each says).', keywords: DOC_KEYWORDS },
    { points: 1, description: 'C. Evidence from the documents (2 of 2) — Supports an argument in response to the prompt using at least FOUR documents.', keywords: DOC_KEYWORDS },
    { points: 1, description: `C. Evidence beyond the documents — Uses at least one additional piece of specific historical evidence, not found in the documents, relevant to an argument about the prompt. Examples: ${spec.outside}`, keywords: spec.outsideKeywords },
    { points: 1, description: 'D. Analysis and reasoning: sourcing — For at least TWO documents, explains how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument (identifying the author alone does not earn the point).', keywords: ['point of view', 'purpose', 'audience', 'historical situation', 'intended', 'written to', 'because he was', 'because she was', 'as a', 'reliab', 'bias'] },
    { points: 1, description: `D. Analysis and reasoning: complexity — Demonstrates a complex understanding of the historical development that is the focus of the prompt, using evidence to corroborate, qualify, or modify an argument. Examples: ${spec.complexity}`, keywords: ['however', 'although', 'while', 'yet', 'on the other hand', 'qualif', 'corroborat', 'nevertheless', 'at the same time', 'continuity'] },
  ]
}

const dbqFRQs: USHistoryFRQ[] = [
  {
    id: 'apush-dbq-1',
    type: 'dbq' as const,
    unit: 3,
    title: 'DBQ: The American Revolution and Social Hierarchy, 1775–1800',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which the American Revolution challenged existing social hierarchies in the period from 1775 to 1800.

---

**Document 1**

*Source: John Murray, Earl of Dunmore, royal governor of Virginia, proclamation issued on board the ship* William *off Norfolk, November 7, 1775.*

> "I do hereby further declare all indented servants, Negroes, or others, (appertaining to Rebels,) free, that are able and willing to bear arms, they joining His Majesty's Troops, as soon as may be, for the more speedily reducing this Colony to a proper sense of their duty, to His Majesty's crown and dignity."

---

**Document 2**

*Source: Abigail Adams, letter to her husband, John Adams, a delegate to the Continental Congress, March 31, 1776.*

> "I long to hear that you have declared an independency—and by the way in the new Code of Laws which I suppose it will be necessary for you to make I desire you would Remember the Ladies, and be more generous and favourable to them than your ancestors. Do not put such unlimited power into the hands of the Husbands. Remember all Men would be tyrants if they could."

---

**Document 3**

*Source: John Adams, reply to Abigail Adams, April 14, 1776.*

> "As to your extraordinary Code of Laws, I cannot but laugh. We have been told that our Struggle has loosened the bands of Government every where. That Children and Apprentices were disobedient—that schools and Colledges were grown turbulent—that Indians slighted their Guardians and Negroes grew insolent to their Masters. But your Letter was the first Intimation that another Tribe more numerous and powerfull than all the rest were grown discontented."

---

**Document 4**

*Source: Petition of Prince Hall and other Black residents of Boston to the Massachusetts General Court (legislature), January 13, 1777. Spelling modernized.*

> "The petition of a great number of Blacks detained in a state of slavery in the bowels of a free and Christian country humbly shows that your petitioners apprehend that they have in common with all other men a natural and unalienable right to that freedom which the Great Parent of the Universe hath bestowed equally on all mankind and which they have never forfeited by any compact or agreement whatever."

---

**Document 5**

*Source: Constitution of the Commonwealth of Massachusetts, Declaration of Rights, Article I, drafted chiefly by John Adams and ratified in 1780.*

> "All men are born free and equal, and have certain natural, essential, and unalienable rights; among which may be reckoned the right of enjoying and defending their lives and liberties; that of acquiring, possessing, and protecting property; in fine, that of seeking and obtaining their safety and happiness."

---

**Document 6**

*Source: Virginia Statute for Religious Freedom, drafted by Thomas Jefferson in 1777 and enacted by the Virginia General Assembly in January 1786.*

> "...no man shall be compelled to frequent or support any religious worship, place, or ministry whatsoever, nor shall be enforced, restrained, molested, or burthened in his body or goods, nor shall otherwise suffer on account of his religious opinions or belief; but that all men shall be free to profess, and by argument to maintain, their opinions in matters of religion..."

---

**Document 7**

*Source: Constitution of the United States, Article IV, Section 2, written at the Philadelphia Convention, 1787.*

> "No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'challenged', 'reinforced', 'limited', 'extent', 'but'],
          context: 'the colonial social order of deference to gentry, established churches, coverture, and slavery legal in all thirteen colonies; Enlightenment natural-rights ideas (Locke); the imperial crisis after 1763 (Stamp Act, Townshend duties) that spread "liberty" rhetoric; the First Great Awakening\'s challenge to clerical authority.',
          contextKeywords: ['Locke', 'Enlightenment', 'natural rights', 'Great Awakening', 'Stamp Act', '1763', '1765', 'deference', 'gentry', 'established church', 'Anglican'],
          outside: 'Pennsylvania\'s Act for the Gradual Abolition of Slavery (1780); Vermont\'s 1777 constitution limiting slavery; the Quock Walker cases (1781–1783) ending slavery in Massachusetts; New Jersey women voting under its 1776 constitution until 1807; Republican Motherhood; the Treaty of Paris (1783) ignoring Native nations; Shays\' Rebellion (1786–87); the three-fifths clause.',
          outsideKeywords: ['Quock Walker', 'gradual abolition', 'Gradual Abolition', 'Pennsylvania', 'Vermont', 'New Jersey', 'Republican Motherhood', 'Shays', 'three-fifths', 'Treaty of Paris', '1783', 'manumission'],
          complexity: 'distinguishing changes in religious and political hierarchy (Docs 5–6) from the persistence of racial and gender hierarchy (Docs 3, 7); showing that revolutionary ideology had unintended consequences that later movements used; comparing outcomes in the North and the South.',
        }),
        sampleAnswer: `**Thesis:** The American Revolution seriously challenged hierarchies of religion and inherited political privilege, and its natural-rights language gave enslaved people and women new arguments against their subordination — but the founding generation chose to preserve the hierarchies of race and gender, writing slavery into the Constitution and leaving women under coverture.

**Contextualization:** Colonial society before 1775 rested on deference to a landed gentry, on established churches such as the Church of England in Virginia, on coverture, which merged a married woman's legal identity into her husband's, and on slavery, which was legal in all thirteen colonies. During the imperial crisis that followed the Stamp Act of 1765, colonial leaders borrowed Enlightenment ideas — especially Locke's argument that people possess natural rights and consent to government — to resist Parliament. That rhetoric could not easily be confined to quarrels with Britain.

**Challenges to hierarchy:** The new state governments dismantled some old hierarchies outright. Massachusetts declared in 1780 that "all men are born free and equal" (Doc 5), and Virginia's Statute for Religious Freedom (Doc 6) guaranteed that no one could be compelled to support any church, completing the disestablishment of the Anglican church and placing dissenting Baptists and Presbyterians on equal footing with the old gentry church. Black Bostonians immediately turned revolutionary language against slavery: the 1777 petition (Doc 4) echoes the Declaration of Independence's language of "unalienable" rights. Because its audience was the same legislature that was justifying a war for liberty, the petitioners' purpose was to expose the contradiction and shame lawmakers into acting. Beyond the documents, the Quock Walker cases (1781–1783) used Article I of the 1780 constitution to end slavery in Massachusetts, and Pennsylvania passed a gradual abolition act in 1780.

**Limits:** Yet the Revolution's leaders treated these challenges as threats. John Adams's reply to Abigail (Doc 3) lists apprentices, students, Native people, enslaved people, and now women as groups "grown discontented" — evidence that the struggle loosened hierarchy, but also that he meant to keep it. Because he wrote privately to his wife rather than to the public, his mocking tone ("I cannot but laugh") is a candid view of how a leading patriot saw the limits of revolution. Abigail herself (Doc 2) asked only that husbands be "more generous," not that coverture end. The sharpest challenge to slavery came from the British, not the patriots: Dunmore's proclamation (Doc 1) freed enslaved people who fought for the king, but his purpose was military — to cripple Virginia's rebel planters — and it applied only to people owned by rebels. Finally, the Constitution's fugitive slave clause (Doc 7) committed the whole nation to returning people who escaped slavery.

**Complexity:** The Revolution's effects therefore split along regional and social lines. Northern states moved toward gradual emancipation while Southern states entrenched slavery, and women gained a new civic role as "republican mothers" without gaining legal equality. Even so, the language of Documents 4 and 5 outlived the compromises of Document 7 and was taken up later by abolitionists and by the women at Seneca Falls in 1848, which shows that the Revolution's challenge to hierarchy was real but long delayed.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
  {
    id: 'apush-dbq-2',
    type: 'dbq' as const,
    unit: 6,
    title: 'DBQ: Limiting the Power of Big Business, 1877–1900',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which reformers and the federal government limited the power of big business in the period from 1877 to 1900.

---

**Document 1**

*Source: Preamble to the constitution of the Knights of Labor, adopted at the order's general assembly in Reading, Pennsylvania, 1878 (adapted).*

> "The recent alarming development and aggression of aggregated wealth, which, unless checked, will invariably lead to the pauperization and hopeless degradation of the toiling masses, render it imperative, if we desire to enjoy the blessings of life, that a check should be placed upon its power and upon unjust accumulation..."

---

**Document 2**

*Source: Interstate Commerce Act, passed by Congress and signed by President Grover Cleveland, February 4, 1887, Section 1.*

> "All charges made for any service rendered or to be rendered in the transportation of passengers or property . . . shall be reasonable and just; and every unjust and unreasonable charge for such service is prohibited and declared to be unlawful."

---

**Document 3**

*Source: Andrew Carnegie, steel manufacturer, "Wealth," published in the* North American Review, *June 1889.*

> "The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship. . . . [W]hile the law [of competition] may be sometimes hard for the individual, it is best for the race, because it insures the survival of the fittest in every department. . . . The man who dies thus rich dies disgraced."

---

**Document 4**

*Source: Sherman Antitrust Act, passed by Congress and signed by President Benjamin Harrison, July 2, 1890, Section 1.*

> "Every contract, combination in the form of trust or otherwise, or conspiracy, in restraint of trade or commerce among the several States, or with foreign nations, is hereby declared to be illegal."

---

**Document 5**

*Source: Platform of the People's (Populist) Party, adopted at its national convention in Omaha, Nebraska, July 4, 1892.*

> "We meet in the midst of a nation brought to the verge of moral, political, and material ruin. Corruption dominates the ballot-box, the Legislatures, the Congress, and touches even the ermine of the bench. . . . The fruits of the toil of millions are boldly stolen to build up colossal fortunes for a few, unprecedented in the history of mankind; and the possessors of these, in turn despise the Republic and endanger liberty."

---

**Document 6**

*Source: Chief Justice Melville Fuller, majority opinion in* United States v. E. C. Knight Company, *1895. The American Sugar Refining Company had acquired competing refineries and controlled nearly all sugar refining in the United States.*

> "Doubtless the power to control the manufacture of a given thing involves, in a certain sense, the control of its disposition, but this is a secondary, and not the primary, sense; and, although the exercise of that power may result in bringing the operation of commerce into play, it does not control it, and affects it only incidentally and indirectly. Commerce succeeds to manufacture, and is not a part of it."

---

**Document 7**

*Source: William Jennings Bryan, speech to the Democratic National Convention in Chicago, July 9, 1896.*

> "You come to us and tell us that the great cities are in favor of the gold standard; we reply that the great cities rest upon our broad and fertile prairies. Burn down your cities and leave our farms, and your cities will spring up again as if by magic; but destroy our farms and the grass will grow in the streets of every city in the country. . . . You shall not press down upon the brow of labor this crown of thorns, you shall not crucify mankind upon a cross of gold."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'limited', 'failed', 'ineffective', 'extent', 'symbolic', 'but'],
          context: 'the Second Industrial Revolution and the rise of national corporations (railroads, Standard Oil, Carnegie Steel); horizontal and vertical integration; laissez-faire ideology and Social Darwinism; the depression of 1873; falling crop prices and farm debt; mass immigration supplying industrial labor.',
          contextKeywords: ['industrial', 'Industrial Revolution', 'railroad', 'Standard Oil', 'Rockefeller', 'laissez-faire', 'Social Darwinism', 'integration', '1873', 'Gilded Age'],
          outside: 'the Granger laws and Munn v. Illinois (1877); Wabash v. Illinois (1886); the Great Railroad Strike of 1877; the Haymarket affair (1886); the Homestead strike (1892); the Pullman strike and In re Debs (1895); Pollock v. Farmers\' Loan and Trust (1895) striking down the income tax; the Grange and Farmers\' Alliances; McKinley\'s victory in 1896.',
          outsideKeywords: ['Munn', 'Wabash', 'Granger', 'Grange', 'Haymarket', 'Homestead', 'Pullman', 'Debs', 'Pollock', 'income tax', '1877', 'Farmers\' Alliance', 'McKinley'],
          complexity: 'showing that laws passed (Docs 2, 4) were weakened by courts and weak enforcement (Doc 6); distinguishing reform\'s political achievements (a national debate, later Progressive laws) from its limited economic results; comparing labor and agrarian strategies.',
        }),
        sampleAnswer: `**Thesis:** Between 1877 and 1900, reformers succeeded in putting the power of big business on the national agenda and won the first federal regulatory laws, but those laws were weak, the courts narrowed them, and the defeat of the Populist challenge in 1896 left corporate power largely unchecked until the Progressive Era.

**Contextualization:** After the Civil War, railroads and manufacturing combinations such as Standard Oil and Carnegie Steel used horizontal and vertical integration to dominate national markets. Laissez-faire thinking and Social Darwinism taught that government should not interfere with competition. Meanwhile, farmers faced falling crop prices and high railroad rates, and industrial workers faced long hours and wage cuts, as the violent Great Railroad Strike of 1877 showed.

**Pressure for reform:** Workers and farmers produced the sharpest critiques. The Knights of Labor (Doc 1) warned that "aggregated wealth" would lead to the "pauperization" of workers and demanded "a check" on its power. The Populists (Doc 5) went further, saying corruption reached "even the ermine of the bench." Because the platform was written for a convention of indebted farmers on the Fourth of July, its purpose was to recast economic grievances as a threat to the republic itself. Bryan's "cross of gold" speech (Doc 7) brought these grievances into a major party, but his audience — Democratic delegates in 1896 — explains why he focused on free silver rather than on direct control of corporations.

**Federal action and its limits:** Congress did respond. The Interstate Commerce Act (Doc 2) required railroad rates to be "reasonable and just," and the Sherman Act (Doc 4) declared every combination "in restraint of trade" illegal. Both laws were vague, however, and that vagueness let the courts empty them. In *E. C. Knight* (Doc 6), Chief Justice Fuller ruled that manufacturing "is not a part of" commerce, so a sugar trust controlling nearly all refining was beyond the Sherman Act's reach. Beyond the documents, the same courts applied the Sherman Act against labor: in *In re Debs* (1895) the Supreme Court upheld the injunction that broke the Pullman strike. Carnegie's essay (Doc 3) shows why reformers struggled. As one of the richest industrialists, writing for the educated readers of the *North American Review*, he had good reason to present competition as "best for the race" and private philanthropy as the answer to inequality, an argument many middle-class Americans accepted.

**Complexity:** The reform record was therefore mixed. In the short run, the laws of 1887 and 1890 were largely symbolic, and McKinley's 1896 victory confirmed business dominance. In the long run, however, they created the tools that Theodore Roosevelt used to dissolve the Northern Securities Company in 1904, and Populist demands such as the graduated income tax and the direct election of senators became law in 1913. The reformers' main achievement was to change the terms of political debate, not to break corporate power in their own time.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
  {
    id: 'apush-dbq-3',
    type: 'dbq' as const,
    unit: 7,
    title: 'DBQ: Overseas Expansion and American Foreign Policy, 1898–1904',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which the expansion of United States power overseas in the period from 1898 to 1904 marked a change in American foreign policy.

---

**Document 1**

*Source: Teller Amendment to the joint resolution of Congress authorizing war with Spain, April 20, 1898.*

> "That the United States hereby disclaims any disposition or intention to exercise sovereignty, jurisdiction, or control over said island [Cuba] except for the pacification thereof, and asserts its determination, when that is accomplished, to leave the government and control of the island to its people."

---

**Document 2**

*Source: Albert J. Beveridge, Indianapolis lawyer and Republican campaign speaker, elected to the U.S. Senate by the Indiana legislature in January 1899, speech known as "The March of the Flag," Indianapolis, September 16, 1898.*

> "The Opposition tells us that we ought not to govern a people without their consent. I answer, The rule of liberty that all just government derives its authority from the consent of the governed, applies only to those who are capable of self-government. We govern the Indians without their consent, we govern our territories without their consent, we govern our children without their consent."

---

**Document 3**

*Source: Rudyard Kipling, British poet, "The White Man's Burden: The United States and the Philippine Islands," published in* McClure's Magazine, *February 1899.*

> Take up the White Man's burden—  
> Send forth the best ye breed—  
> Go bind your sons to exile  
> To serve your captives' need;  
> To wait in heavy harness,  
> On fluttered folk and wild—  
> Your new-caught, sullen peoples,  
> Half-devil and half-child.

---

**Document 4**

*Source: Platform of the American Anti-Imperialist League, adopted in Chicago, October 17, 1899.*

> "We hold that the policy known as imperialism is hostile to liberty and tends toward militarism, an evil from which it has been our glory to be free. We regret that it has become necessary in the land of Washington and Lincoln to reaffirm that all men, of whatever race or color, are entitled to life, liberty, and the pursuit of happiness. We maintain that governments derive their just powers from the consent of the governed."

---

**Document 5**

*Source: President William McKinley, remarks to a delegation of Methodist church leaders at the White House, November 21, 1899, as recalled by delegation member James F. Rusling and published in* The Christian Advocate *in 1903.*

> "(1) That we could not give them [the Philippines] back to Spain—that would be cowardly and dishonorable; (2) that we could not turn them over to France and Germany—our commercial rivals in the Orient—that would be bad business and discreditable; (3) that we could not leave them to themselves—they were unfit for self-government . . . and (4) that there was nothing left for us to do but to take them all, and to educate the Filipinos, and uplift and civilize and Christianize them . . ."

---

**Document 6**

*Source: Platt Amendment, Article III, attached to the Army Appropriations Act of 1901; Cuba was required to add its terms to its constitution.*

> "That the government of Cuba consents that the United States may exercise the right to intervene for the preservation of Cuban independence, the maintenance of a government adequate for the protection of life, property, and individual liberty . . ."

---

**Document 7**

*Source: President Theodore Roosevelt, annual message to Congress, December 6, 1904.*

> "Chronic wrongdoing, or an impotence which results in a general loosening of the ties of civilized society, may in America, as elsewhere, ultimately require intervention by some civilized nation, and in the Western Hemisphere the adherence of the United States to the Monroe Doctrine may force the United States, however reluctantly, in flagrant cases of such wrongdoing or impotence, to the exercise of an international police power."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'change', 'continuity', 'departure', 'extension', 'extent', 'but'],
          context: 'the closing of the frontier (1890 census) and Frederick Jackson Turner\'s frontier thesis; Alfred Thayer Mahan\'s call for naval power and coaling stations (1890); the search for overseas markets after the depression of 1893; European and Japanese imperial competition in Africa and Asia; Social Darwinism and Anglo-Saxonism.',
          contextKeywords: ['frontier', 'Turner', 'Mahan', 'navy', 'markets', '1893', 'Berlin Conference', 'European imperialism', 'Social Darwinism', 'scramble'],
          outside: 'the Philippine–American War (1899–1902) and Emilio Aguinaldo; annexation of Hawaii (1898); the Insular Cases such as Downes v. Bidwell (1901); the Open Door Notes (1899–1900); the Panama Canal treaty (1903); the Monroe Doctrine (1823); Manifest Destiny and the Mexican–American War (1846–48); the sinking of the USS Maine and yellow journalism.',
          outsideKeywords: ['Philippine-American War', 'Philippine–American War', 'Aguinaldo', 'Hawaii', 'Insular Cases', 'Downes', 'Open Door', 'Panama', 'Monroe Doctrine', '1823', 'Manifest Destiny', 'Mexican', 'Maine', 'yellow journalism', 'Hearst', 'Pulitzer'],
          complexity: 'arguing that overseas empire was new in form (colonies without promise of statehood) but continuous with continental expansion and the Monroe Doctrine; explaining the tension between anti-colonial ideals and the conduct of the Philippine–American War; weighing economic, strategic, and racial motives.',
        }),
        sampleAnswer: `**Thesis:** U.S. expansion between 1898 and 1904 changed American foreign policy by creating overseas colonies and a declared right to intervene in neighboring countries, yet it grew out of older traditions of continental expansion, the Monroe Doctrine, and racial hierarchy, so it extended earlier policy into a new form more than it broke from it.

**Contextualization:** By the 1890s, the census had declared the frontier closed, and the depression of 1893 convinced many business leaders that the United States needed overseas markets. Alfred Thayer Mahan argued in 1890 that national greatness required a modern navy and coaling stations. These arguments grew more urgent as European powers and Japan divided Africa and pressed into China.

**Change:** The documents show a real shift from the anti-colonial promises of 1898. The Teller Amendment (Doc 1) disclaimed any intention to control Cuba, but by 1901 the Platt Amendment (Doc 6) forced Cuba to accept a U.S. "right to intervene." In the Philippines, McKinley (Doc 5) concluded there was "nothing left for us to do but to take them all." That account should be read with care: it was recalled by a sympathetic Methodist listener and published four years later, and its religious framing ("Christianize," although most Filipinos were already Catholic) suited a church audience. Still, its reference to "commercial rivals in the Orient" shows the economic motive behind annexation. Beyond the documents, the United States fought the Philippine–American War (1899–1902) against Emilio Aguinaldo's independence movement, an overseas colonial war with no precedent in American history. Roosevelt's Corollary (Doc 7) then turned the defensive Monroe Doctrine into a claim to "international police power."

**Continuity:** Supporters of empire justified it with familiar arguments. Beveridge (Doc 2) pointed out that "we govern the Indians without their consent," linking overseas rule to a century of continental conquest. Because he was a Republican campaign speaker addressing a rally during the 1898 elections, his purpose was to make empire sound like a natural continuation of American history. Kipling (Doc 3), writing as a British imperialist, urged Americans to join an Anglo-Saxon civilizing mission, which shows that U.S. expansion was also part of a transatlantic imperial culture. The Anti-Imperialist League (Doc 4) also appealed to tradition, invoking "the land of Washington and Lincoln" and the consent of the governed. In other words, both sides claimed that the past was on their side.

**Complexity:** The real change lay in method rather than motive. Earlier expansion had added territories that were expected to become states, while the Insular Cases (1901) ruled that the Constitution did not fully apply to the new possessions. The shift from settlement and statehood to colonial rule and intervention marks 1898–1904 as a turning point, even though the drive for land, markets, and security was continuous with the past.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
]


export const apUSHistoryFRQs: USHistoryFRQ[] = [...saqFRQs, ...dbqFRQs, ...leqFRQs]

export function getApUSHistoryFRQs(): USHistoryFRQ[] {
  return apUSHistoryFRQs
}

export function getSAQs(): USHistoryFRQ[] {
  return saqFRQs
}

export function getDBQs(): USHistoryFRQ[] {
  return dbqFRQs
}

export function getLEQs(): USHistoryFRQ[] {
  return leqFRQs
}

/**
 * One Section II in exam order: SAQ 1–3 from one complete set (so the three SAQs use a
 * secondary text, a primary text, and a non-text source from three different periods),
 * then one DBQ, then one LEQ. 3 + 3 + 3 + 7 + 6 = 22 points in 140 minutes.
 */
export function generateFullExamFRQs(pool: USHistoryFRQ[] = apUSHistoryFRQs): {
  questions: USHistoryFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const saqs = pool.filter((q) => q.type === 'saq')
  const completeSets = [...new Set(saqs.map((q) => q.saqSet))].filter(
    (s) => s !== undefined && [1, 2, 3].every((slot) => saqs.some((q) => q.saqSet === s && q.saqSlot === slot)),
  )
  const set = shuffleArray(completeSets)[0]
  const pickedSAQs = ([1, 2, 3] as const)
    .map((slot) => shuffleArray(saqs.filter((q) => q.saqSlot === slot && (set === undefined || q.saqSet === set)))[0])
    .filter((q): q is USHistoryFRQ => Boolean(q))
  const dbq = shuffleArray(pool.filter((q) => q.type === 'dbq'))[0]
  const leq = shuffleArray(pool.filter((q) => q.type === 'leq'))[0]
  const questions = [...pickedSAQs, dbq, leq].filter((q): q is USHistoryFRQ => Boolean(q))
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: APUSH_FRQ_TYPES.reduce((sum, t) => sum + t.minutes, 0),
  }
}
