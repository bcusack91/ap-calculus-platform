import type { SAQItem, DBQItem, LEQItem, RubricPoint } from '@/components/FullLengthPracticeExam'

/* ------------------------------------------------------------------ */
/*  Rubric helpers — modeled on official College Board AP World rubrics */
/* ------------------------------------------------------------------ */

const SAQ_PART_RUBRIC = (description: string): RubricPoint[] => [
  { id: 'point', label: '1 point', description },
]

/* ============================ 3 SAQs ============================ */

export const SAQS: SAQItem[] = [
  // ---------- SAQ 1: Stimulus-based, secondary source ----------
  {
    type: 'saq',
    topic: 'unit-4-and-6-empires-and-industrialization',
    prompt:
      '"For most of the period between 1450 and 1900, the great land-based empires of Eurasia — Ottoman, Safavid, Mughal, Qing, and Romanov — built power on agrarian taxation, gunpowder armies, and a stable but decentralized political settlement with provincial elites. By the second half of the nineteenth century, however, the same empires faced a common crisis. Industrial competitors in Western Europe and Japan possessed economies, weapons, and bureaucracies that the agrarian empires struggled to match, and the resulting pressures destabilized each in turn."\n— Adapted from a recent textbook on early modern and modern world history',
    parts: [
      {
        letter: 'a',
        question:
          'Identify ONE specific way that one land-based empire of the period 1450–1750 used administrative or military innovation to consolidate political power.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies a specific administrative or military innovation tied to a named empire (e.g., the Ottoman devshirme/Janissary system; the Mughal mansabdari system; Qing banner armies; the Russian boyar service nobility / streltsy; Safavid Qizilbash cavalry; or any equivalent specific institution).',
        ),
      },
      {
        letter: 'b',
        question:
          'Explain ONE economic or technological development of the period 1750–1900 that put pressure on the agrarian empires described in the passage.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a specific industrial-era development (e.g., mechanized textile production undercutting Indian or Egyptian handloom weavers; steam-powered gunboats enabling the Opium Wars; railroad construction reshaping internal trade; financial penetration by European banks; the Suez Canal\'s effect on Ottoman finance) and connects it to imperial weakness.',
        ),
      },
      {
        letter: 'c',
        question:
          'Explain ONE response by a non-Western state to the pressures described above between 1750 and 1900.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a specific defensive-modernization or reform program (e.g., Meiji Restoration in Japan; Tanzimat reforms in the Ottoman Empire; Qing Self-Strengthening Movement; Egypt under Muhammad Ali) and explains how it tried to address industrial-era pressure.',
        ),
      },
    ],
    sampleResponse:
      '(a) The Ottoman devshirme system collected Christian boys from the Balkans, converted them to Islam, and trained them as Janissaries and palace administrators. This created a corps of slaves loyal directly to the sultan, which let the Ottomans bypass the Turkic timar nobility and centralize state power.\n\n(b) Mechanized British cotton manufacturing in the early 1800s undercut Indian and Egyptian handloom weavers by flooding their domestic markets with cheap cloth. Because Britain controlled trade terms (especially under the Mughal-successor Raj after 1858), Indian artisans lost their internal market, deindustrializing the subcontinent and weakening the agrarian tax base on which Indian princely and earlier Mughal authority had rested.\n\n(c) The Meiji government in Japan abolished the samurai class, built a national rail network, and adopted a Prussian-style constitution between 1868 and 1890. This program of "defensive modernization" let Japan industrialize quickly enough to escape the unequal-treaty fate of Qing China and to defeat Russia in 1905, demonstrating that targeted state-led adoption of Western institutions could preserve sovereignty.',
  },

  // ---------- SAQ 2: Stimulus-based, primary source ----------
  {
    type: 'saq',
    topic: 'unit-7-decolonization',
    prompt:
      '"We hold these truths to be self-evident: that all men are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness… The Indian people likewise are entitled to enjoy freedom and independence."\n— Hồ Chí Minh, Declaration of Independence of the Democratic Republic of Vietnam, September 2, 1945\n\n(Hồ Chí Minh quoted from the U.S. Declaration of Independence at the start of his speech announcing independence from France.)',
    parts: [
      {
        letter: 'a',
        question:
          'Identify ONE reason Hồ Chí Minh quoted the U.S. Declaration of Independence in 1945.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies a specific rhetorical or political reason — e.g., to appeal to U.S. sympathy and discourage U.S. support for restored French colonial rule; to claim universal principles of self-determination; to align Vietnamese nationalism with the post-WWII discourse of human rights and the Atlantic Charter.',
        ),
      },
      {
        letter: 'b',
        question:
          'Explain ONE specific cause of mid-twentieth-century decolonization movements like the one announced in the passage.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains one cause: weakening of European empires by WWII; the Atlantic Charter / UN Charter principles of self-determination; the mobilization of colonial soldiers in WWI/WWII raising political expectations; the rise of educated nationalist elites under colonial rule; Cold War superpower competition for postcolonial alignment.',
        ),
      },
      {
        letter: 'c',
        question:
          'Explain ONE specific effect of decolonization between 1945 and 1991 on global politics.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains one specific effect: the proliferation of newly independent UN member states changing General Assembly politics; the formation of the Non-Aligned Movement; the eruption of partition or civil conflicts (India/Pakistan 1947, Palestine 1948, Nigeria 1967, Rwanda 1994); Cold War proxy wars in Korea, Vietnam, Angola, Afghanistan; the redrawing of postcolonial borders inherited from European empires.',
        ),
      },
    ],
    sampleResponse:
      '(a) Hồ Chí Minh quoted the U.S. Declaration of Independence to cast Vietnamese independence as an extension of the same universal principles the United States claimed to champion, and to appeal directly to U.S. policymakers in 1945 to discourage U.S. support for the restoration of French colonial rule.\n\n(b) World War II severely weakened the major European colonial powers: Britain and France emerged exhausted and indebted, the Netherlands had been occupied, and Japan had demonstrated that European rule in Asia could be overturned. This loss of imperial capacity, combined with the wartime Atlantic Charter\'s principle of self-determination, encouraged colonial nationalists like Hồ to press for immediate independence rather than gradual reform.\n\n(c) Decolonization led to a wave of new sovereign states whose competing alignments turned former colonies into Cold War battlegrounds. In Vietnam itself, the U.S. ultimately fought a proxy war from 1965–1975 against the communist North that Hồ founded, killing more than two million Vietnamese and reshaping U.S. domestic politics. Similar proxy conflicts erupted in Korea, Angola, and Afghanistan, demonstrating that decolonization and the Cold War were structurally intertwined.',
  },

  // ---------- SAQ 3: No stimulus (student-choice style) ----------
  {
    type: 'saq',
    topic: 'unit-2-networks-of-exchange',
    prompt:
      'Answer all parts of the question that follows. (No stimulus accompanies this question.)',
    parts: [
      {
        letter: 'a',
        question:
          'Identify ONE specific way that the Mongol Empire (c. 1206–1368) facilitated long-distance exchange across Afro-Eurasia.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies a specific Mongol-era practice: the yam relay-station postal system; protection of Silk Road merchant caravans; tax exemptions for merchants; resettlement of skilled artisans across the empire; standardization of paiza passports; or the Pax Mongolica more generally with a concrete example.',
        ),
      },
      {
        letter: 'b',
        question:
          'Explain ONE specific way that the spread of religion contributed to long-distance exchange in Afro-Eurasia between 1200 and 1450.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a specific religious-exchange linkage: Islamic networks of merchants, scholars, and Sufi missionaries linking West Africa to Southeast Asia; Buddhist monastic networks across Tibet, China, and Korea; the Christian missions of Franciscans/Dominicans to the Mongol khans; Jewish trade diasporas (e.g., Cairo Geniza); the role of pilgrimages such as the hajj or Christian pilgrimages to Jerusalem.',
        ),
      },
      {
        letter: 'c',
        question:
          'Explain ONE specific consequence of long-distance exchange in Afro-Eurasia between 1200 and 1450.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a specific consequence: the spread of the Black Death along Mongol-era trade routes after 1347; the diffusion of technologies such as gunpowder, printing, or the magnetic compass from China to the Mediterranean; the urbanization of Indian Ocean ports such as Kilwa or Calicut; the diffusion of crops such as bananas to East Africa or sugar to the Mediterranean; the cultural diffusion of art forms (e.g., Chinese porcelain in Mamluk Egypt).',
        ),
      },
    ],
    sampleResponse:
      '(a) The Mongol Empire built a relay-station postal network called the yam, with stations roughly 25 miles apart where messengers could change horses. By securing the Silk Road and providing this infrastructure, the Mongols enabled news, merchants, and missionaries to move from Karakorum to Persia in weeks rather than months.\n\n(b) Islamic networks of merchants, scholars, and Sufi missionaries linked West Africa, the Indian Ocean basin, and Southeast Asia in this period. Because a Muslim merchant could rely on shared Arabic literacy, sharia courts, and hospitality at any Friday mosque, Islam created an Afro-Eurasian institutional infrastructure for trade. Ibn Battuta\'s 14th-century travels from Tangier to Sumatra illustrate exactly this dynamic.\n\n(c) The most catastrophic consequence of intensified Afro-Eurasian exchange was the spread of the Black Death between 1346 and 1353. Plague bacillus traveled along the Mongol-secured Silk Road and Black Sea routes, killing roughly one-third of Europe\'s population, devastating Egypt and the Levant, and triggering long-term demographic, economic, and religious upheaval — including peasant revolts and labor renegotiations in postplague Western Europe.',
  },
]

/* ============================ 1 DBQ ============================ */

export const DBQ: DBQItem = {
  type: 'dbq',
  topic: 'unit-6-industrialization',
  prompt:
    'Evaluate the extent to which industrialization between 1750 and 1900 transformed the lives of women in industrializing societies.',
  documents: [
    {
      number: 1,
      source:
        'Source: Sir Frederic Eden, The State of the Poor (Britain), 1797. Eden was a wealthy social reformer documenting the conditions of the laboring poor.',
      content:
        '"In the manufacturing districts of Lancashire and Yorkshire, it is now common to find the wife and the elder children of the laborer employed in the spinning factory or the mill. The wages they earn, though small, are in many families the chief support of the household, the husband\'s own earnings being insufficient. The traditional household economy of the cottage spinner has been almost wholly replaced."',
    },
    {
      number: 2,
      source:
        'Source: Testimony of Elizabeth Bentley, age 23, before the British Sadler Committee on Factory Conditions, 1832. Bentley had begun work in a flax mill at age 6.',
      content:
        '"I worked from five in the morning to nine at night. We had forty minutes for dinner. If I was too late I was quartered — that is, fined. The overlooker would strap us if we slackened. By the time I was thirteen I was crooked and small for my age, and my health has been broken ever since."',
    },
    {
      number: 3,
      source:
        'Source: Photograph (described). Lewis Hine, "Doffer girls in a Georgia cotton mill, USA," 1909. Hine was a sociologist photographing child labor for the U.S. National Child Labor Committee.',
      content:
        '[Description: Three girls, perhaps 10–12 years old, stand barefoot among the looms. Their hair is tied back with cloth strips. The youngest reaches up to thread a spool while the foreman watches from the right. The caption reads: "Some of them have been in the mill since they were six years old."]',
    },
    {
      number: 4,
      source:
        'Source: Friedrich Engels, The Condition of the Working Class in England, 1845. Engels was a German manufacturer\'s son writing about Manchester.',
      content:
        '"The employment of women at once breaks up the family; for when the wife spends twelve or thirteen hours a day in the mill, and the husband works the same time at the same or another mill, what becomes of the children? They grow up like wild weeds; they are put out to nurse for a shilling or eighteen pence a week."',
    },
    {
      number: 5,
      source:
        'Source: Lowell Mill Girls\' Petition to the Massachusetts state legislature, 1845. Female mill workers petitioning for a ten-hour workday.',
      content:
        '"We the undersigned peaceably assembled, freeborn women of the Commonwealth, do humbly petition that the hours of labor in the manufactories of this State be limited to ten in any one day. We are aware of no good reason why we, employed in tending machinery, should be doomed to thirteen hours\' confinement when our brothers in the mechanic\'s shop have lately been granted ten."',
    },
    {
      number: 6,
      source:
        'Source: Bárbara García, oral history collected in Mexico City, 1908, recalling her work as a domestic servant for an upper-class family in Porfirian Mexico.',
      content:
        '"My mother sent me from the village to the city when I was eleven. I worked in the kitchen and minded the children of the patrón. I slept on the floor of the laundry room. I sent my wages home each month. There was no factory for women in our town; this was the only way for a girl to earn money for the family."',
    },
    {
      number: 7,
      source:
        'Source: Emmeline Pankhurst, speech in London, 1908. Pankhurst was the founder of the Women\'s Social and Political Union, a militant British suffrage organization.',
      content:
        '"We have worked in the mills, we have worked in the mines, we have worked in the schools, we have worked in the offices. Every year more of our sex earn their own bread by their own labor, and yet the law treats us as if we were children, denying us the vote that the meanest male laborer enjoys. The factory has changed us; the law must change with us."',
    },
  ],
  rubric: [
    {
      id: 'thesis',
      label: 'Thesis / Claim (1 pt)',
      description:
        'Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning. Must be more than restating the prompt; must take a position on the EXTENT to which industrialization transformed women\'s lives (e.g., "fundamentally transformed in industrial regions but reproduced older patterns elsewhere"). Located in introduction or conclusion.',
    },
    {
      id: 'context',
      label: 'Contextualization (1 pt)',
      description:
        'Describes a broader historical context relevant to the prompt (e.g., the rise of factory production in Britain after 1750; the spread of industrialization to continental Europe, the U.S., and Japan; pre-industrial household economies; the reform/labor/feminist movements of the 19th century). Must be more than a single phrase or reference.',
    },
    {
      id: 'evidence-docs-3',
      label: 'Evidence from Documents (1 pt)',
      description:
        'Uses the content of at least THREE documents to address the prompt. Must accurately describe what the documents say in service of the argument (not merely cite them).',
    },
    {
      id: 'evidence-docs-6',
      label: 'Evidence from Documents (2nd point — 1 pt)',
      description:
        'Uses the content of at least SIX documents to support an argument in response to the prompt. Each used document must be accurately described in support of the thesis or a sub-argument.',
    },
    {
      id: 'evidence-beyond',
      label: 'Evidence Beyond the Documents (1 pt)',
      description:
        'Uses at least ONE specific piece of historical evidence beyond what the documents provide that is relevant to an argument about the prompt (e.g., the Married Women\'s Property Act of 1882 in Britain; Ellen Richards and the home-economics movement; Lancashire cotton famine; Japanese silk-mill women under Meiji; passage of the British Factory Acts of 1833 and 1844).',
    },
    {
      id: 'sourcing',
      label: 'Sourcing (1 pt)',
      description:
        'For at least TWO documents, explains how or why the document\'s point of view, purpose, historical situation, or audience is relevant to the argument. (E.g., "Pankhurst, as a suffrage leader in 1908, frames factory labor as a political claim, not just an economic fact, suggesting that industrial work radicalized women\'s political demands.")',
    },
    {
      id: 'complexity',
      label: 'Complexity (1 pt)',
      description:
        'Demonstrates a complex understanding of the historical development by, e.g., comparing industrialized regions to less-industrialized ones (Doc 6 vs. Docs 1–5, 7), addressing both transformation and continuity, weighing competing causes, qualifying a counterargument with evidence, or showing that "transformation" varied sharply by class, age, region, or race. Must be substantive, not formulaic.',
    },
  ],
  sampleResponse:
    'Between 1750 and 1900, industrialization fundamentally transformed the lives of women in industrializing regions of Western Europe and North America by drawing them into wage labor outside the home, restructuring family life, and ultimately enabling new political demands — but the depth of that transformation depended sharply on class, age, and region, and women in less-industrialized societies often saw older patterns of household and domestic labor persist or simply migrate, rather than disappear.\n\n[Contextualization] Before mechanization, most women in agrarian Eurasia worked in mixed household economies, contributing labor in fields, dairies, weaving, and brewing alongside men in the same household. The growth of mechanized cotton production in Britain after 1750, and its spread to the continental United States and continental Europe by 1850, separated production from the household for the first time on a mass scale. By 1900, the same dynamic had begun to reach Japan, Russia, Mexico, and India.\n\n[Body — transformation] Documents 1, 2, 3, and 4 together make clear that in the British and U.S. textile core, industrialization recruited women and girls into long, dangerous factory shifts. Eden in 1797 (Doc 1) already observes that the wife and elder children "are in many families the chief support of the household." Bentley\'s 1832 testimony (Doc 2) — "I worked from five in the morning to nine at night… I was strapped" — and Hine\'s 1909 photograph of barefoot Georgia mill girls (Doc 3) demonstrate that this labor was coercive, dangerous, and often began in childhood. Engels (Doc 4) connects this to the disintegration of the working-class household: when both parents worked thirteen-hour shifts, children were "put out to nurse." Bentley\'s testimony is especially valuable because it was given to a parliamentary committee considering the Factory Acts of 1833 and 1844 — beyond the documents, the very fact that Britain passed those statutes shows that working women\'s testimony reshaped political possibility.\n\n[Body — politicization] The Lowell petition (Doc 5) and Pankhurst\'s 1908 speech (Doc 7) show that factory work also created the conditions for collective political action by women. The Lowell women explicitly cite their male coworkers\' ten-hour day to demand parity, and Pankhurst forty years later argues that industrial labor itself had "changed us" and entitled women to the vote. Pankhurst\'s point of view is critical to evaluate (sourcing): writing as a militant suffragist in 1908, she has every reason to portray female wage labor as politically radicalizing, but the New Zealand (1893) and British (1918) extensions of the franchise to women confirm that her argument had political traction.\n\n[Body — qualification / complexity] Document 6, however, qualifies the claim that industrialization transformed women\'s lives universally. Bárbara García\'s recollection of leaving a Mexican village at age 11 to work as a domestic servant in Porfirian Mexico City shows that for many women outside the industrial core, the transformation was geographic and economic but not industrial: rural-to-urban migration into household service rather than factory wage labor. Eden (Doc 1) and Hine (Doc 3) come from observers writing for elite reformist audiences with a clear normative concern about the laboring classes — their selection of evidence emphasizes the most disrupted households. Across the period, peasant women in much of Russia, the Ottoman empire, China, and rural India continued patterns of household production largely unchanged by factory mechanization until well into the twentieth century.\n\n[Conclusion] Industrialization between 1750 and 1900 thus fundamentally restructured women\'s lives where it took hold: it pulled them out of household production into wage labor under harsh, dangerous, and politically galvanizing conditions, and ultimately equipped them to demand the vote (Doc 7). Yet that transformation was uneven. For working-class women in Lancashire, Lowell, and Manchester, the change was total. For women in less industrialized regions, as Doc 6 demonstrates, older patterns of domestic and rural labor persisted, often relocated rather than transformed.',
}

/* ============================ 1 LEQ ============================ */

const LEQ_RUBRIC: RubricPoint[] = [
  {
    id: 'thesis',
    label: 'Thesis / Claim (1 pt)',
    description:
      'Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning. Must be more than a restatement of the prompt; must take a clear position on the question. Located in introduction or conclusion.',
  },
  {
    id: 'context',
    label: 'Contextualization (1 pt)',
    description:
      'Describes a broader historical context relevant to the prompt — must be more than a passing reference; should describe the long-term or wider conditions in which the developments at issue occurred.',
  },
  {
    id: 'evidence-2',
    label: 'Evidence — at least 2 pieces (1 pt)',
    description:
      'Provides at least TWO specific examples of historical evidence relevant to the prompt. Evidence must be accurate (real names, dates, places, events) and relevant to the argument.',
  },
  {
    id: 'evidence-supports',
    label: 'Evidence supports an argument (1 pt — requires Evidence pt)',
    description:
      'Uses at least TWO specific historical examples to support an argument in response to the prompt. The evidence must be tied to the thesis or a clear sub-claim, not merely listed.',
  },
  {
    id: 'analysis',
    label: 'Historical Reasoning (1 pt)',
    description:
      'Uses a specific historical reasoning skill (causation, comparison, or continuity and change over time) to frame or structure an argument that addresses the prompt — not just listed events but explained relationships among them.',
  },
  {
    id: 'complexity',
    label: 'Complexity (1 pt)',
    description:
      'Demonstrates a complex understanding of the historical development at issue. Examples: addressing nuance through specific evidence; explaining both similarity and difference, or both continuity and change, or both cause and effect; qualifying a counter-argument with evidence; corroborating or modifying an argument by considering diverse perspectives; or making insightful connections within and across periods. Must run through the essay, not be a single sentence.',
  },
]

export const LEQ: LEQItem = {
  type: 'leq',
  topic: 'multi-period',
  promptOptions: [
    {
      label: 'A',
      prompt:
        'In the period c. 1200 to c. 1450, networks of exchange across Afro-Eurasia changed in significant ways. Develop an argument that evaluates the extent to which the Mongol Empire transformed long-distance trade and cultural exchange in Eurasia in this period.',
    },
    {
      label: 'B',
      prompt:
        'In the period c. 1450 to c. 1900, European maritime expansion reshaped the political and economic order of the Atlantic world. Develop an argument that evaluates the extent to which the trans-Atlantic slave trade transformed African societies in this period.',
    },
    {
      label: 'C',
      prompt:
        'In the period c. 1900 to the present, the global order has been reshaped by mass political ideologies, world wars, and decolonization. Develop an argument that evaluates the extent to which the Cold War (c. 1945–1991) shaped the politics of the decolonizing world.',
    },
  ],
  rubric: LEQ_RUBRIC,
  sampleResponses: [
    {
      promptLabel: 'A',
      response:
        'The Mongol Empire (c. 1206–1368) transformed long-distance trade and cultural exchange in Eurasia by securing the overland Silk Road through state-sponsored institutions like the yam relay system, by deliberately patronizing merchants and resettling skilled artisans across the empire, and by enabling — for better and for worse — the Eurasian movement of ideas, technologies, and pathogens. While maritime exchange in the Indian Ocean continued under its own monsoon-driven logic largely independent of Mongol policy, the overland integration the Mongols created produced a Pax Mongolica without precedent in scale, and its breakdown in the mid-fourteenth century carried equally Eurasian consequences in the form of the Black Death.\n\n[Contextualization] Before the Mongol conquests, the Silk Road existed as a series of regional, fragmented exchanges rather than a continuous integrated route. Persian, Arab, and Sogdian merchants moved goods across overlapping commercial spheres, but warfare among the Khwarazmian, Kara-Khitan, and Jin states made long-distance overland transit slow, dangerous, and expensive. By 1260, however, the Mongols controlled territory from Korea to the Black Sea.\n\n[Evidence + reasoning — causation] The Mongols deliberately built infrastructure to capture commercial value. The yam relay-station network — stations roughly twenty-five miles apart where messengers could change horses — let imperial agents and merchants move from Karakorum to Persia in weeks rather than months. The Mongols issued paiza — bronze, silver, or gold passport tablets — that guaranteed protection and provisions to bearers. They deliberately resettled skilled artisans across the empire, transferring Persian astronomers and Chinese siege engineers to one another\'s capitals. As the chronicler Marco Polo (returning from Khubilai\'s court in the 1290s) and the Korean Goryeo court records both attest, this was a sustained imperial project, not an incidental side effect.\n\n[Evidence — cultural exchange] The Mongol order also enabled durable cultural exchange. Tibetan Buddhism reached the Yuan court; Nestorian Christianity flourished among Mongol elites; Franciscan friars (William of Rubruck, John of Plano Carpini) reached the great khan; and the Ilkhanate\'s adoption of Islam in the late thirteenth century integrated former pagan steppe rulers into the dar al-Islam. Persian scholars under Hülegü built the Maragheh observatory drawing on Chinese astronomy.\n\n[Complexity — qualification] The argument that the Mongols "transformed" Eurasian exchange must be qualified, however. First, Indian Ocean maritime trade, which already moved more bulk cargo than the Silk Road by 1200, intensified under the monsoon-driven sailing of Arab, Gujarati, and Chinese merchants for reasons largely external to Mongol policy. Second, the Mongol contribution included the catastrophic spread of the Black Death after 1347, which spread along precisely the routes the empire had secured and killed perhaps one-third of Europe\'s population. The same integration that diffused gunpowder and the magnetic compass diffused Yersinia pestis. Finally, the breakdown of the unified empire after 1260 into competing khanates already qualified the Pax — and once those khanates fragmented in the fourteenth century, overland exchange contracted again.\n\n[Conclusion] On balance, the Mongol Empire did fundamentally transform overland Eurasian exchange between roughly 1240 and 1340, both by enabling unprecedented integration through state infrastructure and by spreading the diseases and ideas that integration carried. The transformation was not total — Indian Ocean maritime exchange operated largely independently — but the Mongol century is rightly identified as the one in which Afro-Eurasia first became a continuously linked commercial and cultural system.',
    },
  ],
}
