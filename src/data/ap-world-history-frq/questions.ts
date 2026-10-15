/**
 * AP World History: Modern — FRQ practice bank, built to the May 2027 Section II:
 *   - 3 required short-answer questions (SAQ), 40 minutes, 3 points each, all sourced:
 *     SAQ 1 a secondary text, SAQ 2 a primary text, SAQ 3 a non-text source
 *     (image, map, or data), each from a different period between 1200 and 2001;
 *   - 1 document-based question (DBQ), 60 minutes including a 15-minute reading
 *     period, 7 points, 7 documents;
 *   - 1 required long essay question (LEQ), 40 minutes, 6 points, one broad prompt.
 * The bank holds two complete SAQ sets, three DBQs and two LEQs. Within a set the
 * three SAQs come from three different periods, so the timed simulation always uses
 * one whole set. Every rubric line is worth one point, as on the official scoring
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

export type WorldHistoryFRQType = 'saq' | 'dbq' | 'leq'

/** Exam order, labels, points per question, and section minutes for the real Section II. */
export const WORLD_FRQ_TYPES: { type: WorldHistoryFRQType; label: string; short: string; points: number; minutes: number; count: number }[] = [
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

export interface WorldHistoryFRQ {
  id: string
  type: WorldHistoryFRQType
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

const saqFRQs: WorldHistoryFRQ[] = [
  // ---------------- Set 1: 1750–1900, 1200–1450, 1450–1750 ----------------
  {
    id: 'wh-saq-1-1',
    type: 'saq',
    unit: 5,
    saqSet: 1,
    saqSlot: 1,
    title: 'SAQ 1 (Secondary Source): Arnold Toynbee on the Industrial Revolution',
    prompt: `**SAQ 1 — Secondary source.** Use the passage below to answer all parts of the question.

> "The essence of the Industrial Revolution is the substitution of competition for the mediaeval regulations which had previously controlled the production and distribution of wealth. . . .
>
> The misery which came upon large sections of the working people at this epoch was often, though not always, due to a fall in wages, for, as I said above, in some industries they rose. But they suffered likewise from the conditions of labour under the factory system, from the rise of prices, especially from the high price of bread before the repeal of the corn-laws, and from those sudden fluctuations of trade, which, ever since production has been on a large scale, have exposed them to recurrent periods of bitter distress. The effects of the Industrial Revolution prove that free competition may produce wealth without producing wellbeing."

*Arnold Toynbee, British economic historian, Lectures on the Industrial Revolution in England, lectures given at Oxford University in the early 1880s and published in 1884*`,
    parts: [
      {
        label: '(a)',
        prompt: "Briefly describe Toynbee's argument about the Industrial Revolution.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the argument: the Industrial Revolution replaced older (medieval) regulation of the economy with free competition, which created great wealth but also brought misery to many workers (factory conditions, high prices, booms and busts), so wealth did not mean well-being.',
            keywords: ['competition', 'regulation', 'well-being', 'wellbeing', 'wealth without', 'misery', 'workers suffered', 'suffering', 'free market', 'laissez-faire', 'laissez faire'],
          },
        ],
        sampleAnswer: 'Toynbee argues that the heart of the Industrial Revolution was the replacement of medieval economic regulations with free competition. That competition produced great wealth, but working people suffered from factory conditions, high bread prices, and trade slumps, so the new wealth did not bring general well-being.',
      },
      {
        label: '(b)',
        prompt: "Briefly explain how ONE specific historical development from the period 1750–1900 that is not mentioned in the passage could be used to support Toynbee's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains supporting evidence. Acceptable: the Sadler Committee testimony on child labor (1832); long hours and dangerous conditions in textile mills; crowded industrial cities such as Manchester and cholera outbreaks; Engels\'s The Condition of the Working Class in England (1845); the Luddites (1811–1816) and the Chartists; Adam Smith\'s case for laissez-faire (1776) replacing mercantilist regulation; enclosure pushing rural workers into factories.',
            keywords: ['sadler', 'child labor', 'child labour', 'factory act', 'manchester', 'slum', 'cholera', 'engels', 'luddite', 'chartis', 'adam smith', 'laissez', 'mercantil', 'enclosure', 'long hours'],
          },
        ],
        sampleAnswer: 'The Sadler Committee (1832) heard witnesses who had worked in mills as children testify that they worked from 5 or 6 in the morning until 7 or 9 at night and were beaten if they slowed down. This supports Toynbee: mill owners competing to cut costs became rich while their workers paid for that wealth with their health.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain how ONE specific historical development from the period 1750–1900 that is not mentioned in the passage could be used to challenge or modify Toynbee's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains challenging or modifying evidence. Acceptable: new technology and energy (coal and the steam engine, Watt\'s improvements; the spinning jenny and water frame), rather than competition, as the essence of industrialization; access to colonial raw materials and markets (cotton from the U.S. South, Indian markets); state-led industrialization in Meiji Japan or Russia under Witte, where governments directed growth; Factory Acts, unions, and rising real wages later in the century that improved workers\' well-being.',
            keywords: ['coal', 'steam', 'watt', 'technolog', 'spinning', 'water frame', 'cotton', 'coloni', 'raw material', 'meiji', 'state-led', 'witte', 'tariff', 'wages rose', 'real wages', 'living standards', 'reform', 'union'],
          },
        ],
        sampleAnswer: 'Meiji Japan modifies Toynbee\'s argument. After 1868 the Japanese government built railroads and model factories such as the Tomioka silk mill and then sold many of them to private firms, so Japan industrialized through state direction rather than through free competition alone.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'wh-saq-1-2',
    type: 'saq',
    unit: 2,
    saqSet: 1,
    saqSlot: 2,
    title: 'SAQ 2 (Primary Source): Ibn Battuta in Mali (1352–1353)',
    prompt: `**SAQ 2 — Primary text source.** Use the excerpt below to answer all parts of the question.

> "The negroes possess some admirable qualities. They are seldom unjust, and have a greater abhorrence of injustice than any other people. Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country. Neither traveller nor inhabitant in it has anything to fear from robbers or men of violence. They do not confiscate the property of any white man [that is, a North African or Arab merchant] who dies in their country, even if it be uncounted wealth. On the contrary, they give it into the charge of some trustworthy person among the whites, until the rightful heir takes possession of it. They are careful to observe the hours of prayer, and assiduous in attending them in congregations, and in bringing up their children to them."

*Ibn Battuta, Muslim legal scholar and traveler from Morocco, describing his visit to the empire of Mali in 1352–1353, from his travel account (the Rihla), completed in the mid-1350s; translated by H. A. R. Gibb, 1929*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE way Ibn Battuta characterizes the society of Mali in the excerpt.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a characterization: Mali is just and orderly, with a ruler who punishes injustice; travelers and merchants are safe and their property is protected; its people are devout Muslims who pray in congregation and teach their children to do so.',
            keywords: ['just', 'justice', 'security', 'secure', 'safe', 'law', 'order', 'sultan', 'property', 'pray', 'islam', 'muslim', 'devout', 'pious', 'piety'],
          },
        ],
        sampleAnswer: 'Ibn Battuta describes Mali as a just and secure society. Its ruler punishes even small injustices, travelers need not fear robbers, and the property of foreign merchants who die there is kept safe for their heirs.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development in the period 1200–1450 that made it possible for a traveler such as Ibn Battuta to visit Mali.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a development. Acceptable: trans-Saharan trade routes using camel caravans, linking Mali\'s gold to North African salt and goods; the spread of Islam through merchants into West Africa, creating a shared dar al-Islam with Arabic learning and Islamic law; Mansa Musa\'s pilgrimage to Mecca (1324), which made Mali famous; trade cities such as Timbuktu with mosques and scholars.',
            keywords: ['trans-saharan', 'sahara', 'caravan', 'camel', 'gold', 'salt', 'dar al-islam', 'arabic', 'hajj', 'mansa musa', '1324', 'timbuktu', 'spread of islam'],
          },
        ],
        sampleAnswer: 'Trans-Saharan trade made the journey possible. Camel caravans had long carried North African salt and goods south and West African gold north, and Muslim merchants brought Islam with them. Because Mali\'s rulers and elites were Muslim, a North African scholar like Ibn Battuta could travel along these routes and find hosts who shared his religion and his legal culture.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain ONE way Ibn Battuta's background as a Muslim scholar from North Africa may have shaped his description of Mali.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains the effect of the author\'s perspective. Acceptable: as a scholar trained in Islamic law (he served as a qadi, or judge), he judged Mali by Islamic standards, so he praised its prayer and justice; as an outsider traveling among merchants, he paid close attention to the safety of foreigners\' property; his Islamic values led him to criticize customs he considered un-Islamic elsewhere in his account.',
            keywords: ['islamic', 'qadi', 'judge', 'sharia', 'outsider', 'foreign', 'perspective', 'point of view', 'bias', 'values', 'standards'],
          },
        ],
        sampleAnswer: 'As a scholar of Islamic law who had served as a qadi (judge), Ibn Battuta measured Mali by Islamic standards. That is why he praises its people\'s prayer and their teaching of prayer to children. Elsewhere in his account, he criticizes Malian customs he considered un-Islamic, which shows that his religious values shaped both his praise and his criticism.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'wh-saq-1-3',
    type: 'saq',
    unit: 4,
    saqSet: 1,
    saqSlot: 3,
    title: 'SAQ 3 (Non-Text Source): The Population of Central Mexico, 1518–1605',
    prompt: `**SAQ 3 — Non-text source.** Use the data below to answer all parts of the question.

**Estimated Indigenous population of central Mexico (millions)**

- 1518: 25.2
- 1532: 16.8
- 1548: 6.3
- 1568: 2.65
- 1585: 1.9
- 1595: 1.375
- 1605: 1.075

*Source: estimates by historians Sherburne F. Cook and Woodrow Borah, published in the 1960s and 1970s. Other scholars consider their figure for 1518 too high, but they agree that the population collapsed.*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE pattern shown in the data.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a pattern: a catastrophic decline of about 95 percent in less than a century, from about 25 million to about 1 million; the steepest drop came in the decades right after the Spanish conquest (1518–1548).',
            keywords: ['declin', 'decrease', 'fell', 'dropped', 'collapse', 'percent', '%', 'million to', 'sharp', 'steep'],
          },
        ],
        sampleAnswer: 'The Indigenous population of central Mexico collapsed by about 95 percent, from an estimated 25.2 million in 1518 to about 1.1 million in 1605, with the steepest fall in the first thirty years after the Spanish conquest.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific cause of the pattern shown in the data.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause. Acceptable: epidemic diseases brought from Afro-Eurasia in the Columbian Exchange (smallpox in 1520, measles, the cocoliztli epidemics of 1545 and 1576), to which Indigenous people had no acquired immunity; the violence of the Spanish conquest (1519–1521); forced labor under the encomienda and repartimiento systems; famine and social disruption.',
            keywords: ['smallpox', 'disease', 'epidemic', 'measles', 'immunity', 'columbian exchange', 'cocoliztli', 'encomienda', 'repartimiento', 'forced labor', 'conquest', 'cortes', 'cortés'],
          },
        ],
        sampleAnswer: 'Diseases carried from Europe and Africa in the Columbian Exchange were the main cause. Indigenous Mexicans had no immunity to smallpox, which struck during the conquest in 1520, or to the measles and other epidemics that followed, so each outbreak killed a large share of the population.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE effect of the pattern shown in the data on labor systems in the Americas in the period 1550–1750.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains an effect. Acceptable: Spanish and Portuguese colonists turned to enslaved Africans, expanding the Atlantic slave trade to plantations and mines; the Spanish moved from the encomienda to the repartimiento and to wage labor and debt peonage on haciendas; surviving Indigenous people were gathered into new towns (congregación) to supply labor and tribute; a new casta society of mixed ancestry formed.',
            keywords: ['african', 'slave trade', 'enslaved', 'slavery', 'atlantic', 'hacienda', 'peonage', 'labor shortage', 'congregaci', 'reduccion', 'plantation', 'sugar', 'casta', 'mestizo', 'repartimiento'],
          },
        ],
        sampleAnswer: 'Because so many Indigenous workers died, colonists faced a labor shortage. Spanish and Portuguese colonists increasingly imported enslaved Africans to work on sugar plantations and in mines, which expanded the Atlantic slave trade.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },

  // ---------------- Set 2: 1450–1750, 1750–1900, 1900–2001 ----------------
  {
    id: 'wh-saq-2-1',
    type: 'saq',
    unit: 4,
    saqSet: 2,
    saqSlot: 1,
    title: 'SAQ 1 (Secondary Source): W. E. B. Du Bois on the Slave Trade and West Africa',
    prompt: `**SAQ 1 — Secondary source.** Use the passage below to answer all parts of the question.

> "The powerful state of Dahomey arose early in the eighteenth century and became a devastating tyranny, reaching its highest power early in the nineteenth century. . . . Thus state building in West Africa began to replace the city economy, but it was a state built on war and on war supported and encouraged largely for the sake of trade in human flesh. The native industries were changed and disorganized. Family ties and government were weakened. . . .
>
> The natural desire to avoid a painful subject has led historians to gloss over the details of the slave trade and leave the impression that it was a local west-coast phenomenon and confined to a few years. It was, on the contrary, continent wide and centuries long and an economic, social, and political catastrophe probably unparalleled in human history."

*W. E. B. Du Bois, historian and sociologist, The Negro, 1915*`,
    parts: [
      {
        label: '(a)',
        prompt: "Briefly describe Du Bois's argument about the effects of the Atlantic slave trade on Africa.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the argument: the slave trade was a catastrophe for Africa that encouraged states built on war and slave raiding, disrupted local industries, and weakened families and governments across the continent for centuries; earlier historians had downplayed it.',
            keywords: ['catastrophe', 'war', 'built on war', 'disrupt', 'weaken', 'family', 'industr', 'continent', 'centuries', 'destroy', 'harm', 'devastat', 'tyrann', 'downplay', 'gloss over'],
          },
        ],
        sampleAnswer: 'Du Bois argues that the slave trade was a continent-wide catastrophe for Africa. It encouraged states such as Dahomey that were built on war to capture people for sale, disrupted African industries, and weakened families and governments for centuries, a damage that earlier historians had glossed over.',
      },
      {
        label: '(b)',
        prompt: "Briefly explain how ONE specific piece of evidence from the period 1450–1750 could be used to support Du Bois's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains supporting evidence. Acceptable: Dahomey\'s and Asante\'s wars of expansion and their trade of captives for European firearms (the "gun-slave cycle"); King Afonso I of Kongo\'s letters to the king of Portugal (1526) complaining that Portuguese traders were seizing and depopulating his kingdom; the loss of roughly 4–5 million people by 1750 (about 12.5 million over the whole trade) and the resulting gender imbalance in West and West Central Africa.',
            keywords: ["dahomey's wars", 'ouidah', 'agaja', 'asante', 'ashanti', 'firearm', 'guns', 'afonso', 'affonso', 'kongo', '1526', 'gender', 'imbalance', 'population', 'depopulat', 'raid', 'captive', '12 million', 'twelve million'],
          },
        ],
        sampleAnswer: 'In 1526 King Afonso I of Kongo, a Christian ally of Portugal, wrote to the Portuguese king that traders were kidnapping his free subjects and even nobles to sell as slaves, and that his kingdom was being depopulated. A ruler describing his own state being weakened by the trade supports Du Bois\'s argument.',
      },
      {
        label: '(c)',
        prompt: "Briefly explain how ONE specific piece of evidence from the period 1450–1750 could be used to challenge or modify Du Bois's argument.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains challenging or modifying evidence. Acceptable: African rulers and merchants, not Europeans, controlled the capture and sale of captives and set the terms of trade, and some states (Dahomey, Oyo, Asante) grew stronger and more centralized through it; the Kingdom of Benin restricted the sale of male captives for long periods; Queen Nzinga of Ndongo and Matamba resisted Portuguese power while also taking part in the trade; trade in gold, textiles, and other goods continued alongside the slave trade.',
            keywords: ['african rulers', 'african merchants', 'african elites', 'profit', 'controlled', 'terms of trade', 'stronger', 'centraliz', 'benin', 'oyo', 'nzinga', 'ndongo', 'matamba', 'gold', 'textile', 'cowrie'],
          },
        ],
        sampleAnswer: 'The rise of Dahomey can also modify Du Bois\'s argument. Its kings controlled the trade at the port of Ouidah, taxed it, and used European guns to build a highly centralized state, so for some African rulers the trade produced stronger states rather than simply weaker ones, even as it devastated the people they captured.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'wh-saq-2-2',
    type: 'saq',
    unit: 6,
    saqSet: 2,
    saqSlot: 2,
    title: 'SAQ 2 (Primary Source): The Qianlong Emperor to King George III (1793)',
    prompt: `**SAQ 2 — Primary text source.** Use the excerpt below to answer all parts of the question.

> "Hitherto, all European nations, including your own country's barbarian merchants, have carried on their trade with our Celestial Empire at Canton. Such has been the procedure for many years, although our Celestial Empire possesses all things in prolific abundance and lacks no product within its own borders. There was therefore no need to import the manufactures of outside barbarians in exchange for our own produce. But as the tea, silk and porcelain which the Celestial Empire produces, are absolute necessities to European nations and to yourselves, we have permitted, as a signal mark of favour, that foreign hongs [merchant firms] should be established at Canton, so that your wants might be supplied and your country thus participate in our beneficence."

*The Qianlong Emperor of the Qing dynasty, edict to King George III of Great Britain, responding to the trade requests of the British embassy led by Lord Macartney, 1793; translated by E. Backhouse and J. O. P. Bland, 1914*`,
    parts: [
      {
        label: '(a)',
        prompt: "Briefly describe the emperor's view of trade with Great Britain as expressed in the excerpt.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the view: China is self-sufficient and does not need British manufactures; trade is a favor the emperor grants to supply Europeans with tea, silk, and porcelain; trade must stay confined to Canton under Qing rules; Britain is an inferior, "barbarian" kingdom.',
            keywords: ['self-sufficient', 'self sufficient', 'abundance', 'favor', 'favour', 'canton', 'guangzhou', 'tribut', 'barbarian', 'superior', 'inferior', 'restrict', 'tea trade', 'silk', 'porcelain'],
          },
        ],
        sampleAnswer: 'The emperor views trade with Britain as an unnecessary favor. China already has everything it needs, so it allows British merchants to buy tea, silk, and porcelain at Canton only as a "mark of favour" to a barbarian kingdom.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development that led Britain to send the Macartney embassy to China in 1793.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a development. Acceptable: the Canton System (from 1757), which confined European trade to Guangzhou under licensed Chinese merchants (the Cohong); Britain\'s large trade deficit, since British demand for Chinese tea was paid for in silver; the East India Company\'s search for new markets for British manufactured goods as industrialization began; the Qing tributary system, which treated foreign states as subordinate.',
            keywords: ['canton system', '1757', 'cohong', 'hong merchants', 'silver', 'trade deficit', 'trade imbalance', 'tea trade', 'east india company', 'tributary', 'tribute system', 'industrial', 'new markets'],
          },
        ],
        sampleAnswer: 'British demand for Chinese tea had grown enormously, but China bought few British goods, so Britain paid for tea in silver and ran a large trade deficit. Under the Canton System, all of this trade was confined to Guangzhou, so Britain sent Macartney to ask for more ports and lower restrictions.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE way relations between China and Britain changed in the period 1793–1900.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a change. Acceptable: British traders sold opium to reverse the silver flow; Britain defeated China in the Opium War (1839–1842) and imposed the Treaty of Nanjing (1842), gaining Hong Kong and five treaty ports; unequal treaties and extraterritoriality; the Second Opium War (1856–1860); spheres of influence in the 1890s; the Boxer Rebellion (1899–1901).',
            keywords: ['opium', 'nanjing', 'nanking', '1842', 'hong kong', 'treaty port', 'unequal treat', 'extraterritorial', 'spheres of influence', 'sphere of influence', 'boxer'],
          },
        ],
        sampleAnswer: 'The relationship was reversed. To stop the drain of silver, British merchants smuggled Indian opium into China, and when the Qing tried to end the trade, Britain won the Opium War (1839–1842). The Treaty of Nanjing forced China to give Britain Hong Kong and open five treaty ports, so Britain, not the emperor, now set the terms of trade.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'wh-saq-2-3',
    type: 'saq',
    unit: 8,
    saqSet: 2,
    saqSlot: 3,
    title: 'SAQ 3 (Non-Text Source): United Nations Membership, 1945–2000',
    prompt: `**SAQ 3 — Non-text source.** Use the data below to answer all parts of the question.

**Number of member states of the United Nations**

- 1945: 51
- 1955: 76
- 1960: 99
- 1965: 117
- 1970: 127
- 1975: 144
- 1980: 154
- 1990: 159
- 2000: 189

In 1960 alone, 17 states joined the United Nations; 16 of them were newly independent African states.

*Source: United Nations, "Growth in United Nations Membership"*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Briefly describe ONE pattern shown in the data.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a pattern: membership more than tripled between 1945 and 2000; the fastest growth came between 1955 and 1975; growth slowed in the 1980s and rose again in the 1990s.',
            keywords: ['increase', 'grew', 'tripl', 'doubl', 'rose', 'jump', 'sharp', 'fastest', 'slowed'],
          },
        ],
        sampleAnswer: 'UN membership more than tripled, from 51 states in 1945 to 189 in 2000. The fastest growth came between 1955 and 1975, when membership nearly doubled.',
      },
      {
        label: '(b)',
        prompt: 'Briefly explain ONE specific historical development that caused the growth in membership between 1955 and 1975.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause: decolonization in Africa and Asia after the Second World War weakened European empires. Acceptable: Ghana\'s independence under Kwame Nkrumah (1957); the "Year of Africa" (1960); Algeria\'s war of independence against France (1954–1962); Kenya after the Mau Mau rebellion (1963); Guinea-Bissau (1974) and Mozambique (1975) after wars against Portugal; nationalist movements appealing to self-determination.',
            keywords: ['decoloniz', 'independence', 'ghana', 'nkrumah', 'algeria', 'kenya', 'kenyatta', 'mau mau', 'guinea-bissau', 'mozambique', 'year of africa', 'nationalis', 'self-determination', 'world war ii', 'second world war'],
          },
        ],
        sampleAnswer: 'Decolonization caused the growth. The Second World War left Britain and France weakened, and nationalist movements demanded self-determination. Ghana won independence under Kwame Nkrumah in 1957, and in 1960 alone sixteen newly independent African states joined the UN.',
      },
      {
        label: '(c)',
        prompt: 'Briefly explain ONE specific historical development that caused the growth in membership between 1990 and 2000.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a cause: the end of the Cold War and the collapse of the Soviet Union (1991), which produced fifteen successor states, twelve of them new UN members (e.g., the Baltic states, Georgia, Kazakhstan), since Russia took over the Soviet seat and Ukraine and Belarus had been members since 1945; the breakup of Yugoslavia (Slovenia, Croatia, Bosnia and Herzegovina); the division of Czechoslovakia (1993).',
            keywords: ['soviet union', 'ussr', 'collapse', '1991', 'cold war', 'yugoslavia', 'czechoslovakia', 'baltic', 'georgia', 'kazakhstan', 'gorbachev', 'dissol', 'breakup', 'break up', 'broke up'],
          },
        ],
        sampleAnswer: 'The collapse of the Soviet Union in 1991 produced fifteen successor states. Russia took over the Soviet seat, and Ukraine and Belarus had been UN members since 1945, but the other twelve, such as the Baltic states, Georgia, and Kazakhstan, joined as new members. The breakup of Yugoslavia added Slovenia, Croatia, and Bosnia and Herzegovina.',
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

/** The College Board AP World History LEQ rubric (6 points), with prompt-specific examples. */
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

const leqFRQs: WorldHistoryFRQ[] = [
  {
    id: 'wh-leq-1',
    type: 'leq',
    unit: 3,
    title: 'LEQ: Religion and State Power, 1200–1750',
    prompt: LEQ_DIRECTIONS + `

**Prompt:** Between 1200 and 1750, rulers across Afro-Eurasia and the Americas, from the Mongol khans and the mansas of Mali to the Ottoman sultans, the Mughal emperors, and the rulers of the Mexica (Aztec) and Inca states, built and expanded powerful states. Many of them drew on religious beliefs and institutions to justify and hold their power.

Evaluate the extent to which rulers used religion to legitimize and consolidate their power in the period from 1200 to 1750.

*You may focus on one or more of the developments in the prompt; you are not expected to address the entire period.*`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your long essay in response to the prompt above. When you grade it, check your essay against each row of the 6-point rubric.',
        maxPoints: 6,
        rubric: leqRubric({
          thesisKeywords: ['to a great extent', 'to a large extent', 'to a limited extent', 'to some extent', 'largely', 'primarily', 'although'],
          context: 'older traditions linking rule and religion, such as the Chinese Mandate of Heaven, the Abbasid caliphate, Byzantine emperors\' authority over the church, and the spread of Islam, Buddhism, and Christianity along trade routes before 1200.',
          contextKeywords: ['mandate of heaven', 'abbasid', 'caliph', 'byzantine', 'confucian', 'spread of islam', 'spread of buddhism', 'silk road', 'charlemagne', 'pope'],
          evidence: 'Mansa Musa\'s pilgrimage to Mecca (1324) and mosque building; the Mexica cult of Huitzilopochtli and human sacrifice; the Sapa Inca as son of the sun god Inti; the Mongols\' tolerance of many religions and the Ilkhanate\'s conversion to Islam; the Ottoman sultans\' role as protectors of Mecca and Medina after 1517; Safavid Shah Ismail making Shi\'a Islam the state religion; Akbar\'s religious tolerance and Aurangzeb\'s reimposition of the jizya; Louis XIV and divine right; the Qing emperors\' patronage of Confucianism and Tibetan Buddhism.',
          evidenceKeywords: ['mansa musa', 'hajj', 'huitzilopochtli', 'human sacrifice', 'sapa inca', 'inti', 'sun god', 'ilkhan', 'yuan', 'tibetan buddhism', 'delhi sultanate'],
          supportKeywords: ['caliph', 'sunni', 'safavid', 'shia', "shi'a", 'ismail', 'akbar', 'aurangzeb', 'jizya', 'louis xiv', 'divine right', 'qing', 'kangxi', 'philip ii', 'inquisition', 'henry viii', 'devshirme', 'janissar'],
          complexity: 'contrasting rulers who imposed one faith (Safavids, Aurangzeb, Philip II) with those who tolerated many (Mongols, Akbar, the Ottoman millet system); weighing religion against military power, bureaucracy, and tax systems; explaining how religious legitimacy could also threaten rulers (the Protestant Reformation, Sikh resistance to the Mughals).',
        }),
        sampleAnswer: `**Thesis:** Between 1200 and 1750, rulers used religion to legitimize and consolidate their power to a large extent, both by claiming sacred authority and by building religious institutions. However, the most durable empires often combined that legitimacy with religious tolerance, military force, and bureaucracy, so religion was one tool of power rather than its only basis.

**Contextualization:** Long before 1200, rulers had linked their authority to religion. Chinese emperors claimed the Mandate of Heaven, the Abbasid caliphs ruled as successors to the Prophet, and Byzantine emperors presided over the church. As Islam, Buddhism, and Christianity spread along trade routes, new rulers adopted these faiths to connect themselves to wider networks and to strengthen their claims.

**Religion as legitimacy:** In West Africa, Mansa Musa made his famous pilgrimage to Mecca in 1324 and built mosques in Timbuktu, which presented him as a great Muslim ruler and tied Mali to the Islamic world. In the Americas, the Mexica rulers justified constant warfare as service to Huitzilopochtli, because captives were needed for human sacrifice, and the Sapa Inca was honored as the son of the sun god Inti. In the Safavid Empire, Shah Ismail made Shi'a Islam the state religion, which set his state apart from its Sunni Ottoman rivals and bound his subjects to the dynasty.

**Religion and consolidation:** After conquering Egypt in 1517, the Ottoman sultans took the title Servant of the Two Holy Sanctuaries and presented themselves as leaders of Sunni Islam, which strengthened their authority over Sunni Muslims. In France, Louis XIV claimed to rule by divine right and revoked the Edict of Nantes (1685) to impose religious unity.

**Complexity:** Religion could also be managed through tolerance rather than uniformity. The Mongols tolerated Buddhists, Muslims, and Christians alike, and Akbar won the loyalty of Hindu elites in the Mughal Empire by abolishing the jizya. In contrast, when Aurangzeb reimposed the jizya in 1679, he provoked resistance that weakened the empire. Religion therefore legitimized many rulers, but how they used it, through imposed unity or careful tolerance, often decided whether it consolidated their power or undermined it.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'wh-leq-2',
    type: 'leq',
    unit: 7,
    title: 'LEQ: Nationalism and Political Authority, 1750–2001',
    prompt: LEQ_DIRECTIONS + `

**Prompt:** From the Atlantic revolutions of the late 1700s to the end of the Cold War, nationalism, the belief that a people sharing a language, culture, or history should govern itself, reshaped the world's political map. It unified some states, broke apart multiethnic empires, and fueled movements for independence from colonial rule.

Evaluate the extent to which nationalism changed political authority in the period from 1750 to 2001.

*You may focus on one or more of the developments in the prompt; you are not expected to address the entire period.*`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your long essay in response to the prompt above. When you grade it, check your essay against each row of the 6-point rubric.',
        maxPoints: 6,
        rubric: leqRubric({
          thesisKeywords: ['to a great extent', 'to a large extent', 'to a limited extent', 'to some extent', 'largely', 'primarily', 'although', 'transformed'],
          context: 'before 1750, most states were dynastic monarchies or multiethnic empires (Ottoman, Habsburg, Qing, Mughal) whose authority rested on divine right or dynastic loyalty rather than on the nation; the Peace of Westphalia (1648) and the sovereign state system; Enlightenment ideas of popular sovereignty (Locke, Rousseau).',
          contextKeywords: ['enlightenment', 'locke', 'rousseau', 'popular sovereignty', 'westphalia', 'divine right', 'absolut', 'dynast', 'social contract'],
          evidence: 'the French Revolution and Napoleon; the Haitian Revolution; Latin American independence (Bolívar); the unification of Italy (Cavour, Garibaldi) and Germany (Bismarck); Ottoman responses such as the Tanzimat and the Young Turks; Zionism; the Indian National Congress (1885); the breakup of Austria-Hungary and the Ottoman Empire after World War I; Atatürk; Gandhi and Indian independence (1947); Ho Chi Minh; Kwame Nkrumah; the breakup of the Soviet Union and Yugoslavia.',
          evidenceKeywords: ['french revolution', 'napoleon', 'haitian revolution', 'haiti', 'bolivar', 'bolívar', 'latin american independence', 'italian unification', 'unification of italy', 'garibaldi', 'cavour', 'german unification', 'unification of germany', 'bismarck', 'tanzimat', 'young turks', 'zionism', 'indian national congress'],
          supportKeywords: ['world war i', 'first world war', 'austria-hungary', 'fourteen points', 'self-determination', 'ataturk', 'atatürk', 'mustafa kemal', 'gandhi', 'indian independence', 'ho chi minh', 'nkrumah', 'pan-african', 'algeria', 'mussolini', 'nazi', 'yugoslavia', 'soviet union', 'mandela', 'apartheid'],
          complexity: 'showing that nationalism both unified states (Italy, Germany) and destroyed empires (Austria-Hungary, the Ottoman Empire); explaining how new nation-states often kept older forms of authority (monarchy in Germany, authoritarian one-party rule after independence); comparing European and anticolonial nationalism; noting that imperial powers used nationalism to justify expansion.',
        }),
        sampleAnswer: `**Thesis:** From 1750 to 2001, nationalism changed political authority to a great extent by replacing dynastic and imperial rule with nation-states that claimed to rest on the will of a people. However, nationalism often kept power in the hands of elites or authoritarian leaders, so it changed the basis of authority more than the way power was exercised.

**Contextualization:** Before 1750, most people lived in dynastic monarchies or multiethnic empires such as the Ottoman, Habsburg, and Qing empires, whose rulers claimed authority from God or dynasty rather than from a nation. During the Enlightenment, thinkers like Locke and Rousseau argued that sovereignty belongs to the people, which gave nationalists a new source of legitimacy.

**Revolutions and unification:** The French Revolution declared that sovereignty resided in the nation, and Napoleon's armies spread national feeling across Europe, partly by provoking resistance to French rule. In the nineteenth century, nationalism created new states: Cavour and Garibaldi unified Italy, and Bismarck unified Germany in 1871. Nationalism also threatened multiethnic empires, which led the Ottomans to attempt the Tanzimat reforms and later produced the Young Turks.

**Collapse of empires:** After World War I, Wilson's principle of national self-determination helped break Austria-Hungary and the Ottoman Empire into nation-states, and Mustafa Kemal Atatürk built a Turkish republic from the Ottoman core. Anticolonial nationalism then ended European empires: Gandhi's mass campaigns led to Indian independence in 1947, and Kwame Nkrumah led Ghana to independence in 1957. Finally, nationalism helped break apart the Soviet Union and Yugoslavia in the early 1990s.

**Complexity:** Yet nationalism did not always bring popular government. Bismarck's Germany was ruled by a Prussian king, and many newly independent states became one-party regimes. In contrast to anticolonial movements, fascist leaders like Mussolini used nationalism to justify dictatorship and conquest. Nationalism therefore transformed who claimed authority, from dynasties to nations, while the exercise of power often showed continuity with older authoritarian patterns.`,
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

/** The College Board AP World History: Modern DBQ rubric (7 points), with prompt-specific examples. */
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

const dbqFRQs: WorldHistoryFRQ[] = [
  {
    id: 'wh-dbq-1',
    type: 'dbq' as const,
    unit: 4,
    title: 'DBQ: Economic Motives and Iberian Expansion, 1492–1650',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which economic motives shaped European interactions with the peoples of the Americas and West Central Africa in the period from 1492 to 1650.

---

**Document 1**

*Source: Christopher Columbus, letter to Luis de Santángel, an official of the Spanish court who helped finance the voyage, written on the return voyage in February 1493 and printed in Spain that year (adapted from an English translation).*

> "They are so guileless and so generous with all they possess, that no one would believe it who has not seen it. . . . [Their Highnesses] may see that I shall give them as much gold as they need . . . and slaves, as many as they shall order to be shipped, and these shall be from the idolaters."

---

**Document 2**

*Source: The* Requerimiento *("Requirement"), a statement drafted for the Spanish Crown by the jurist Juan López de Palacios Rubios in 1513 and read aloud, in Spanish, by conquistadors to Indigenous peoples before battle (English translation).*

> "But if you do not do this, and maliciously make delay in it, I certify to you that, with the help of God, we shall powerfully enter into your country, and shall make war against you in all ways and manners that we can, and shall subject you to the yoke and obedience of the Church and of their Highnesses; we shall take you and your wives and your children, and shall make slaves of them . . . and we shall take away your goods . . ."

---

**Document 3**

*Source: Afonso I (Nzinga Mbemba), Christian king of Kongo, letter to King João III of Portugal, July 6, 1526 (adapted from an English translation).*

> "Each day the traders are kidnapping our people—children of this country, sons of our nobles and vassals, even people of our own family. . . . This corruption and depravity are so widespread that our land is entirely depopulated. . . . It is our will that in these Kingdoms there should not be any trade of slaves nor outlet for them."

---

**Document 4**

*Source: Bartolomé de las Casas, Spanish Dominican friar and former* encomendero, *A Short Account of the Destruction of the Indies, written in 1542 for the future King Philip II and published in 1552 (adapted).*

> "The reason the Christians have killed and destroyed such an infinite number of souls is solely that they have made gold their ultimate aim, seeking to grow rich in a very short time and to rise to high positions out of all proportion to their station."

---

**Document 5**

*Source: The New Laws, issued by King Charles I of Spain (Holy Roman Emperor Charles V), 1542 (adapted from an English translation).*

> "We order and command that from now on, for no cause of war or any other, even that of rebellion, nor by ransom nor in any other manner, can an Indian be made a slave, and we wish that they be treated as our vassals of the Crown of Castile, since they are such."

---

**Document 6**

*Source: Juan Ginés de Sepúlveda, Spanish humanist scholar and royal chronicler, arguing against Las Casas in* Democrates Alter, *written c. 1544 and debated at Valladolid in 1550–1551 (adapted from an English translation).*

> "The Spanish have a perfect right to rule these barbarians of the New World and the adjacent islands, who in prudence, skill, virtues, and humanity are as inferior to the Spanish as children to adults, or women to men."

---

**Document 7**

*Source: Felipe Guaman Poma de Ayala, Andean nobleman, summary of his* First New Chronicle and Good Government, *a nearly 1,200-page illustrated letter addressed to King Philip III of Spain, completed around 1615 (adapted).*

> Guaman Poma complained to the king that Spanish colonial magistrates (*corregidores*), priests, and *encomenderos* seized Andean people's goods, forced them into unpaid labor, and sent them to the mines under the *mita* labor draft, from which many never returned, so that the Indigenous towns of Peru were being emptied of people.`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'economic', 'religious', 'gold', 'extent', 'primarily', 'but'],
          context: 'the Reconquista (completed 1492) and Iberian traditions of crusading conquest; Portuguese voyages along the West African coast after 1415 in search of gold and a sea route to Asian spices; Ottoman control of eastern Mediterranean trade routes; new maritime technology (caravel, astrolabe) and state-sponsored exploration.',
          contextKeywords: ['Reconquista', '1492', 'Henry the Navigator', 'Portugal', 'Portuguese', 'spice', 'Ottoman', 'caravel', 'astrolabe', 'mercantilism'],
          outside: 'the encomienda system; the mita at Potosí (silver discovered 1545); Spanish silver flowing to Ming China through Manila (founded 1571); sugar plantations in Brazil and the Atlantic islands; the Columbian Exchange and smallpox epidemics; the Treaty of Tordesillas (1494); Cortés and the conquest of Tenochtitlan (1521); Queen Nzinga of Ndongo and Matamba resisting Portugal.',
          outsideKeywords: ['encomienda', 'Potosí', 'Potosi', 'silver', 'Manila', 'sugar', 'Brazil', 'Columbian Exchange', 'smallpox', 'Tordesillas', 'Cortés', 'Cortes', 'Tenochtitlan', 'Nzinga', 'mercantilism'],
          complexity: 'weighing economic motives against religious and political ones and showing how they reinforced each other; contrasting Crown policy (Doc 5) with practice in the colonies (Doc 7); comparing the Americas with Kongo, where an African state set the terms of trade for a time.',
        }),
        sampleAnswer: `**Thesis:** Between 1492 and 1650, the search for gold, silver, and enslaved labor was the main force behind European interactions with the Americas and West Central Africa. Religious and legal arguments sometimes restrained that drive, but more often they served to justify it, and Crown reforms meant to protect Indigenous people were overwhelmed by the profits of mining and the slave trade.

**Contextualization:** Iberian expansion grew out of the Reconquista, which ended with the fall of Granada in 1492 and combined religious war with the reward of conquered land. From the 1420s, Portuguese voyages along the West African coast searched for gold and a sea route to Asian spices, partly to bypass Muslim and Venetian middlemen in the eastern Mediterranean. New ships and navigational tools let monarchs sponsor these ventures in the hope of quick returns.

**Economic motives:** From the first voyage, profit framed European views of other peoples. Columbus (Doc 1) followed his praise of the Taínos' generosity with a promise of "as much gold as they need" and "slaves." Because he was writing to Santángel, an official who had helped pay for the voyage, his purpose was to prove the venture would pay off, which explains why he stressed gold. Las Casas (Doc 4), a former *encomendero* himself, concluded that the destruction of Indigenous peoples came "solely" from the colonists' desire for gold. In Africa, Afonso of Kongo (Doc 3) complained that Portuguese traders were "kidnapping our people" so fast that his kingdom was being depopulated. Beyond the documents, the discovery of silver at Potosí in 1545 made the Andes the center of a global silver trade that reached Ming China through Manila after 1571. Guaman Poma (Doc 7) shows the human cost of that wealth: the *mita* labor draft emptied Andean towns to supply the mines.

**Religious and legal justifications:** Economic aims were wrapped in religious and legal language. The *Requerimiento* (Doc 2) threatened to enslave anyone who refused the Church, making conversion the legal pretext for seizing people and "goods." Sepúlveda (Doc 6), a royal chronicler arguing at Valladolid, used Aristotle's idea of natural inferiority to defend Spanish rule. As a scholar writing for an elite audience of jurists and theologians, he gave colonists an intellectual defense of the labor systems they already relied on.

**Complexity:** Economic motives did not go unchallenged. The New Laws of 1542 (Doc 5) banned the enslavement of Indians, showing that the Crown, influenced by critics like Las Casas, sometimes put religious duty and royal control ahead of colonists' profits. In practice, though, colonists revolted against the New Laws in Peru, and the Crown later relied on the *mita* for its own silver revenue, as Doc 7 shows. Kongo's experience also qualifies the argument. Afonso was a Christian ally who welcomed Portuguese priests and teachers, and although this letter asks for an end to the slave trade, he later accepted its continuation under royal inspection. African rulers like him tried to set the terms of the trade even as it damaged their kingdoms. Profit was the dominant motive, but it worked through religious ideas and political negotiation rather than replacing them.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
  {
    id: 'wh-dbq-2',
    type: 'dbq' as const,
    unit: 5,
    title: 'DBQ: Revolutions and the Expansion of Rights, 1789–1830',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which the revolutions in the Atlantic world expanded political rights in the period from 1789 to 1830.

---

**Document 1**

*Source: Declaration of the Rights of Man and of the Citizen, adopted by the French National Assembly, August 26, 1789 (English translation).*

> "Article 1. Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good. . . .
>
> Article 6. Law is the expression of the general will. Every citizen has a right to participate personally, or through his representative, in its foundation."

---

**Document 2**

*Source: Summary of the voting rules in the French Constitution of 1791, written by the National Assembly.*

> The Constitution divided adult men into "active citizens," who could vote, and "passive citizens," who could not. To be an active citizen, a man had to be at least 25 years old, live in the same place for at least a year, not work as a household servant, and pay a direct tax equal to at least three days' wages. Women could not vote.

---

**Document 3**

*Source: Olympe de Gouges, French playwright, Declaration of the Rights of Woman and the Female Citizen, a pamphlet addressed to Queen Marie Antoinette, 1791 (English translation).*

> "Article 1. Woman is born free and lives equal to man in her rights. Social distinctions can be based only on the common utility. . . .
>
> Article 10. . . . [W]oman has the right to mount the scaffold; she must equally have the right to mount the rostrum."

---

**Document 4**

*Source: Decree of the French National Convention, February 4, 1794 (16 Pluviôse, Year II), passed after delegates elected in Saint-Domingue, including the formerly enslaved Jean-Baptiste Belley, took their seats (English translation).*

> "The National Convention declares that the slavery of Negroes in all the colonies is abolished; consequently it decrees that all men, without distinction of color, domiciled in the colonies, are French citizens and will enjoy all the rights assured by the constitution."

---

**Document 5**

*Source: Constitution of the French colony of Saint-Domingue, issued under the authority of Toussaint Louverture, the colony's formerly enslaved governor and military commander, 1801 (adapted from an English translation).*

> "Article 3. There can be no slaves on this territory; servitude has been forever abolished. All men are born, live and die there free and French."

---

**Document 6**

*Source: French Civil Code (the Napoleonic Code), promulgated by First Consul Napoleon Bonaparte, 1804 (English translation).*

> "Article 213. The husband owes protection to his wife, the wife obedience to her husband."

---

**Document 7**

*Source: Simón Bolívar, leader of independence movements in South America, letter written in exile in Kingston, Jamaica, to a British resident of the island, September 6, 1815 (English translation).*

> "We are, moreover, neither Indian nor European, but a species midway between the legitimate proprietors of this country and the Spanish usurpers. In short, though Americans by birth we derive our rights from Europe, and we have to assert these rights against the rights of the natives, and at the same time we must defend ourselves against the invaders."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'expanded', 'limited', 'excluded', 'extent', 'elite', 'but'],
          context: 'Enlightenment ideas of natural rights, popular sovereignty, and social contract (Locke, Rousseau, Montesquieu); the American Revolution (1775–1783) as a model; the French monarchy\'s debt crisis and the Estates-General of 1789; Atlantic plantation economies built on slavery; the rigid casta system and peninsular privilege in Spanish America.',
          contextKeywords: ['Enlightenment', 'Locke', 'Rousseau', 'Montesquieu', 'social contract', 'natural rights', 'American Revolution', '1776', 'Estates-General', 'debt', 'casta', 'peninsular'],
          outside: 'the Haitian Revolution and Haitian independence (1804); Napoleon\'s restoration of slavery in the French colonies (1802); the Reign of Terror and the execution of Olympe de Gouges (1793); Mary Wollstonecraft\'s A Vindication of the Rights of Woman (1792); the Congress of Vienna (1815); Hidalgo\'s revolt in Mexico (1810); creole elites keeping power in independent Latin America; Brazil\'s independence under Pedro I (1822).',
          outsideKeywords: ['Haiti', 'Haitian', '1804', '1802', 'Terror', 'Robespierre', 'Wollstonecraft', 'Congress of Vienna', '1815', 'Hidalgo', 'creole', 'criollo', 'Brazil', 'Pedro', 'Dessalines'],
          complexity: 'distinguishing the expansion of rights in principle (Docs 1, 4) from limits in practice (Docs 2, 6); showing that rights expanded and then contracted, as with slavery\'s abolition (1794) and restoration (1802); comparing how class, gender, and race shaped who gained rights in France, Haiti, and Spanish America.',
        }),
        sampleAnswer: `**Thesis:** The Atlantic revolutions of 1789–1830 expanded political rights in principle more than in practice. They declared rights to be universal and, in Saint-Domingue, ended slavery, but property qualifications, the exclusion of women, and the dominance of creole elites meant that most new rights went to propertied men of European descent.

**Contextualization:** Enlightenment writers such as Locke and Rousseau argued that legitimate government rests on natural rights and the consent of the governed, and the American Revolution showed that a colony could win independence on those grounds. In France, the monarchy's debt crisis forced Louis XVI to call the Estates-General in 1789, opening the way to revolution. Across the Atlantic, plantation colonies depended on enslaved labor, and Spanish America was ruled by a racial hierarchy that placed peninsular Spaniards above American-born creoles.

**Expansion in principle:** The Declaration of the Rights of Man (Doc 1) proclaimed that men are "born and remain free and equal in rights" and that every citizen may take part in making law. Enslaved and free people of color pushed these principles further than the National Assembly intended. The Convention's 1794 decree (Doc 4) abolished slavery and made all men in the colonies citizens. Its historical situation matters: it came after the Saint-Domingue uprising of 1791 and after Jean-Baptiste Belley, a formerly enslaved deputy, took his seat, so abolition was forced by revolt as much as granted by principle. Toussaint Louverture's 1801 constitution (Doc 5) wrote that abolition into the colony's fundamental law. Beyond the documents, Haiti declared independence in 1804, the first state founded by formerly enslaved people.

**Limits in practice:** Political rights were narrower than the rhetoric. The Constitution of 1791 (Doc 2) excluded "passive citizens," servants, the poor, and all women from voting. Olympe de Gouges (Doc 3) used the language of Doc 1 to demand equal rights for women, pointing out that women could be executed but not heard. As a woman with no vote of her own, writing for a public that had just heard the Assembly's promises, she turned the language of Doc 1 against its authors; she was guillotined in 1793. Napoleon's Civil Code (Doc 6) then wrote wives' "obedience" into law, and in 1802 he restored slavery in the French colonies. In Spanish America, Bolívar (Doc 7) described creoles as "neither Indian nor European." As a creole leader writing in exile to a British reader, his purpose was to justify independence and attract British support, but his words also show that the creoles' main dispute was with Spain over who would rule, not over extending rights to Indigenous and African-descended people.

**Complexity:** Rights expanded in waves and then contracted: slavery was abolished in 1794 and restored in 1802, and the universal language of 1789 gave way to the order of the Napoleonic Code. Yet the documents' principles outlived their authors' limits. Groups excluded in 1791, including women, the enslaved, and the poor, used the same language in later struggles, which makes this period a lasting expansion of the idea of rights even where it did not expand the vote.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
  {
    id: 'wh-dbq-3',
    type: 'dbq' as const,
    unit: 7,
    title: 'DBQ: The First World War and Colonized Peoples, 1914–1923',
    prompt: DBQ_DIRECTIONS + `

**Question:** Evaluate the extent to which the First World War and the peace settlement that followed changed the relationship between imperial powers and colonized or semi-colonized peoples in the period from 1914 to 1923.

---

**Document 1**

*Source: Arthur James Balfour, British foreign secretary, letter to Lord Rothschild, a leader of the British Jewish community, November 2, 1917 (the Balfour Declaration).*

> "His Majesty's Government view with favour the establishment in Palestine of a national home for the Jewish people, and will use their best endeavours to facilitate the achievement of this object, it being clearly understood that nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine, or the rights and political status enjoyed by Jews in any other country."

---

**Document 2**

*Source: President Woodrow Wilson, address to a joint session of the U.S. Congress (the Fourteen Points), January 8, 1918, Point V.*

> "A free, open-minded, and absolutely impartial adjustment of all colonial claims, based upon a strict observance of the principle that in determining all such questions of sovereignty the interests of the populations concerned must have equal weight with the equitable claims of the government whose title is to be determined."

---

**Document 3**

*Source: Emir Faisal, son of Sharif Hussein of Mecca and commander of the Arab Revolt against the Ottoman Empire, memorandum to the Paris Peace Conference, January 1, 1919 (adapted).*

> "The aim of the Arab nationalist movements . . . is to unite the Arabs eventually into one nation. . . . In our opinion, if our independence be conceded and our local competence established, the natural influences of race, language, and interest will soon draw us together into one people."

---

**Document 4**

*Source: Declaration of Independence read by Korean religious and civic leaders in Seoul, March 1, 1919, beginning the March First Movement against Japanese rule (English translation).*

> "We herewith proclaim the independence of Korea and the liberty of the Korean people. We tell it to the world in witness of the equality of all nations and we pass it on to our posterity as their inherent right."

---

**Document 5**

*Source: Manifesto distributed by students in Beijing, May 4, 1919, after news that the Paris Peace Conference would give Germany's rights in Shandong province to Japan (adapted from an English translation).*

> "Japan's demand for the possession of Qingdao and other rights in Shandong is now going to be acceded to in the Paris Peace Conference. . . . China's territory may be conquered, but it cannot be given away! The Chinese people may be massacred, but they will not surrender!"

---

**Document 6**

*Source: Covenant of the League of Nations, Article 22, part of the Treaty of Versailles, signed June 28, 1919.*

> "To those colonies and territories which as a consequence of the late war have ceased to be under the sovereignty of the States which formerly governed them and which are inhabited by peoples not yet able to stand by themselves under the strenuous conditions of the modern world, there should be applied the principle that the well-being and development of such peoples form a sacred trust of civilisation . . . [and] the tutelage of such peoples should be entrusted to advanced nations . . ."

---

**Document 7**

*Source: Summary of "Demands of the Annamite People," a petition delivered to the Paris Peace Conference in June 1919 by a group of Vietnamese nationalists in France and signed "Nguyen Ai Quoc," a name later associated with Ho Chi Minh (summary).*

> The petition did not ask for independence. It asked France for an amnesty for Vietnamese political prisoners, equal legal rights for Vietnamese and Europeans in Indochina, freedom of the press and of association, freedom to emigrate and travel abroad, freedom of education with technical and professional schools in every province, rule by law rather than by decree, and permanent Vietnamese representation in the French parliament.`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'self-determination', 'mandate', 'nationalism', 'extent', 'disillusion', 'but'],
          context: 'the "New Imperialism" of the late 1800s (the Berlin Conference, 1884–1885; spheres of influence in China); rising anticolonial nationalism before 1914 (the Indian National Congress, 1885; the 1911 Chinese revolution); the war\'s global reach, including the mobilization of colonial soldiers and laborers; the collapse of the Ottoman, Russian, Austro-Hungarian, and German empires.',
          contextKeywords: ['New Imperialism', 'Berlin Conference', '1884', 'spheres of influence', 'Indian National Congress', 'nationalism', 'colonial soldiers', 'Ottoman', 'collapse', 'total war', 'Russian Revolution', 'Lenin'],
          outside: 'the Sykes–Picot Agreement (1916); more than a million Indian soldiers serving Britain; the Amritsar massacre (April 1919); Gandhi\'s non-cooperation movement (1920–1922); the Egyptian revolution of 1919; Japan\'s rejected racial equality proposal at Paris (1919); the Pan-African Congress (1919); French and British mandates in Syria, Lebanon, Iraq, and Palestine; the Turkish War of Independence and the Treaty of Lausanne (1923); the founding of the Chinese Communist Party (1921).',
          outsideKeywords: ['Sykes', 'Picot', 'Amritsar', 'Gandhi', 'non-cooperation', 'Egypt', 'Zaghloul', 'racial equality', 'Pan-African', 'Du Bois', 'mandate', 'Lausanne', 'Atatürk', 'Ataturk', 'Kemal', 'Chinese Communist', 'sepoy', 'Indian soldiers'],
          complexity: 'distinguishing the rhetoric of self-determination (Doc 2) from the mandate system that extended imperial control (Doc 6); comparing responses across East Asia, the Middle East, and Southeast Asia; showing that the settlement failed to change formal empire in the short run but changed the political aims and methods of colonized peoples in the long run.',
        }),
        sampleAnswer: `**Thesis:** The First World War and the peace settlement did little to change the formal structure of empire. Britain and France gained new territory through the mandate system, and the promise of self-determination was applied only in Europe. They did, however, change colonized peoples' expectations and methods, setting off mass nationalist movements that would challenge imperial rule for the rest of the century.

**Contextualization:** By 1914, European powers had divided Africa after the Berlin Conference and carved spheres of influence in China, while Japan had annexed Korea in 1910. Educated nationalist movements were already growing, such as the Indian National Congress, founded in 1885. The war mobilized empires totally, drawing on colonial soldiers and laborers, and it destroyed the Ottoman, Russian, Austro-Hungarian, and German empires, leaving their lands open for the victors to divide.

**Rising expectations:** Wartime diplomacy raised hopes. Wilson's Fourteen Points (Doc 2) said the "interests of the populations concerned" must count in colonial settlements. Because Wilson was speaking to Congress in early 1918, his purpose was to give the war a liberal aim and to answer the Bolsheviks' call for self-determination, not to dismantle the British and French empires. Colonized peoples took him at his word anyway. Faisal (Doc 3), who had led the Arab Revolt with British support, asked the conference to recognize Arab independence. Korean leaders (Doc 4) proclaimed independence "in witness of the equality of all nations," echoing Wilson's language, and the Vietnamese petitioners of 1919 (Doc 7) asked for equal rights within the French empire.

**Continuity of empire:** The settlement largely ignored these demands. Article 22 of the League Covenant (Doc 6) described former Ottoman and German territories as inhabited by peoples "not yet able to stand by themselves" and placed them under the "tutelage" of "advanced nations," which gave colonial rule a new legal form. Beyond the documents, the secret Sykes–Picot Agreement of 1916 had already divided the Arab lands between Britain and France, and in 1920 France drove Faisal from Damascus. The Balfour Declaration (Doc 1), written while Britain was fighting the Ottomans and seeking Jewish support for the war, promised Palestine to two peoples at once and planted a lasting conflict. Japan kept Korea and crushed the March First Movement, and the conference gave Germany's rights in Shandong to Japan rather than to China.

**Complexity:** This disappointment itself changed the relationship between empires and their subjects. The Beijing students (Doc 5), writing for a domestic audience, turned anger at Paris into the May Fourth Movement, which helped give rise to the Chinese Communist Party in 1921. The Vietnamese petitioner later known as Ho Chi Minh moved from asking for reform to demanding independence, and in India the Amritsar massacre of 1919 led Gandhi to launch mass non-cooperation. Formal empire survived and even expanded after 1919, but colonized peoples lost faith that the imperial powers would reform themselves, and anticolonial nationalism became a mass movement.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '60 minutes (incl. 15-min reading period)',
    calculatorAllowed: false,
  },
]


export const apWorldHistoryFRQs: WorldHistoryFRQ[] = [...saqFRQs, ...dbqFRQs, ...leqFRQs]

export function getApWorldHistoryFRQs(): WorldHistoryFRQ[] {
  return apWorldHistoryFRQs
}

export function getSAQs(): WorldHistoryFRQ[] {
  return saqFRQs
}

export function getDBQs(): WorldHistoryFRQ[] {
  return dbqFRQs
}

export function getLEQs(): WorldHistoryFRQ[] {
  return leqFRQs
}

/**
 * One Section II in exam order: SAQ 1–3 from one complete set (so the three SAQs use a
 * secondary text, a primary text, and a non-text source from three different periods),
 * then one DBQ, then one LEQ. 3 + 3 + 3 + 7 + 6 = 22 points in 140 minutes.
 */
export function generateFullExamFRQs(pool: WorldHistoryFRQ[] = apWorldHistoryFRQs): {
  questions: WorldHistoryFRQ[]
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
    .filter((q): q is WorldHistoryFRQ => Boolean(q))
  const dbq = shuffleArray(pool.filter((q) => q.type === 'dbq'))[0]
  const leq = shuffleArray(pool.filter((q) => q.type === 'leq'))[0]
  const questions = [...pickedSAQs, dbq, leq].filter((q): q is WorldHistoryFRQ => Boolean(q))
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: WORLD_FRQ_TYPES.reduce((sum, t) => sum + t.minutes, 0),
  }
}
