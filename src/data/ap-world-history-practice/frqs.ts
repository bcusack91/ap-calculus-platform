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
      '"For most of the period between 1450 and 1900, the great land-based empires of Eurasia — Ottoman, Safavid, Mughal, Qing, and Romanov — built power on agrarian taxation, gunpowder armies, and a stable but decentralized political settlement with provincial elites. By the second half of the nineteenth century, however, the Safavid and Mughal dynasties had fallen, and the surviving land empires — Ottoman, Qing, and Romanov — faced a common crisis. Industrial competitors in Western Europe and Japan possessed economies, weapons, and bureaucracies that the agrarian empires struggled to match, and the resulting pressures destabilized each in turn."\n— Adapted from a recent textbook on early modern and modern world history',
    parts: [
      {
        letter: 'a',
        question:
          'Identify ONE specific way that one land-based empire of the period 1450–1750 used administrative or military innovation to consolidate political power.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies a specific administrative or military innovation tied to a named empire (e.g., the Ottoman devshirme/Janissary system; the Mughal mansabdari system; Qing banner armies; the Russian boyar service nobility / streltsy; the Safavid ghulam slave corps under Shah Abbas; or any equivalent specific institution).',
        ),
      },
      {
        letter: 'b',
        question:
          'Explain ONE economic or technological development of the period 1750–1900 that put pressure on the agrarian empires described in the passage.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a specific industrial-era development (e.g., mechanized textile production undercutting Indian or Egyptian handloom weavers; steam-powered gunboats enabling the Opium Wars; railroad construction reshaping internal trade; financial penetration by European banks; the debts incurred by Egypt and the Ottoman state, including for the Suez Canal) and connects it to imperial weakness.',
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
      '(a) The Ottoman devshirme system collected Christian boys from the Balkans, converted them to Islam, and trained them as Janissaries and palace administrators. This created a corps of slaves loyal directly to the sultan, which let the Ottomans bypass the Turkic timar nobility and centralize state power.\n\n(b) Mechanized British cotton manufacturing in the early 1800s undercut Indian and Egyptian handloom weavers by flooding their domestic markets with cheap cloth. Because the British East India Company, and after 1858 the British Raj, controlled India\'s trade terms, Indian artisans lost their internal market, deindustrializing the subcontinent and weakening the agrarian tax base on which Indian princely and earlier Mughal authority had rested.\n\n(c) The Meiji government in Japan abolished the samurai class, built a national rail network, and adopted a Prussian-style constitution between 1868 and 1890. This program of "defensive modernization" let Japan industrialize quickly enough to escape the unequal-treaty fate of Qing China and to defeat Russia in 1905, demonstrating that targeted state-led adoption of Western institutions could preserve sovereignty.',
  },

  // ---------- SAQ 2: Stimulus-based, primary source ----------
  {
    type: 'saq',
    topic: 'unit-7-decolonization',
    prompt:
      '"\'All men are created equal. They are endowed by their Creator with certain inalienable rights; among these are Life, Liberty, and the pursuit of Happiness.\' This immortal statement was made in the Declaration of Independence of the United States of America in 1776. In a broader sense, this means: All the peoples on the earth are equal from birth, all the peoples have a right to live, to be happy and free. . . . Nevertheless, for more than eighty years, the French imperialists, abusing the standard of Liberty, Equality, and Fraternity, have violated our Fatherland and oppressed our fellow-citizens."\n' +
      '— Hồ Chí Minh, Declaration of Independence of the Democratic Republic of Vietnam, read in Hanoi, September 2, 1945 (English translation)',
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
          'Identifies AND explains one specific effect: the proliferation of newly independent UN member states changing General Assembly politics; the formation of the Non-Aligned Movement; the eruption of partition or civil conflicts (India/Pakistan 1947, Palestine 1948, Nigeria 1967, the Congo Crisis 1960–65); Cold War proxy wars in Korea, Vietnam, Angola, Afghanistan; the redrawing of postcolonial borders inherited from European empires.',
        ),
      },
    ],
    sampleResponse:
      '(a) Hồ Chí Minh quoted the U.S. Declaration of Independence to cast Vietnamese independence as an extension of the same universal principles the United States claimed to champion, and to appeal directly to U.S. policymakers in 1945 to discourage U.S. support for the restoration of French colonial rule.\n\n(b) World War II severely weakened the major European colonial powers: Britain and France emerged exhausted and indebted, the Netherlands had been occupied, and Japan had demonstrated that European rule in Asia could be overturned. This loss of imperial capacity, combined with the wartime Atlantic Charter\'s principle of self-determination, encouraged colonial nationalists like Hồ to press for immediate independence rather than gradual reform.\n\n(c) Decolonization led to a wave of new sovereign states whose competing alignments turned former colonies into Cold War battlegrounds. In Vietnam itself, the U.S. fought a war from 1965 to 1973 against the communist North that Hồ founded, which conquered the South in 1975; the war killed more than two million Vietnamese and reshaped U.S. domestic politics. Cold War conflicts also erupted in Korea, Angola, and Afghanistan, demonstrating that decolonization and the Cold War were structurally intertwined.',
  },

  // ---------- SAQ 3: Non-text source (data table) ----------
  {
    type: 'saq',
    topic: 'unit-4-transoceanic-interconnections',
    prompt:
      'Use the table to answer all parts of the question that follows.\n\n' +
      '**Estimated number of enslaved Africans embarked on ships in the trans-Atlantic slave trade, by century**\n\n' +
      '| Period | Enslaved Africans embarked (estimate, rounded) |\n' +
      '|---|---|\n' +
      '| 1501–1600 | about 278,000 |\n' +
      '| 1601–1700 | about 1,876,000 |\n' +
      '| 1701–1800 | about 6,495,000 |\n' +
      '| 1801–1866 | about 3,874,000 |\n' +
      '| Total, 1501–1866 | about 12.5 million |\n\n' +
      'Source: Trans-Atlantic Slave Trade Database (SlaveVoyages), estimates compiled by historians David Eltis and David Richardson.',
    parts: [
      {
        letter: 'a',
        question:
          'Describe ONE pattern in the trans-Atlantic slave trade shown in the table.',
        rubric: SAQ_PART_RUBRIC(
          'Accurately describes a pattern in the data: the trade grew sharply from the 1500s to the 1700s, with the 1700s accounting for roughly half of all embarkations; the trade remained very large in the 1800s even after Britain (1807) and the United States (1808) banned it; most of the trade took place after 1650. Must describe the data, not just restate one number.',
        ),
      },
      {
        letter: 'b',
        question:
          'Explain ONE cause of the growth of the trans-Atlantic slave trade between 1600 and 1800.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains a cause: the spread of sugar plantations in Brazil and the Caribbean (and later tobacco, rice, and cotton) that demanded large labor forces; the collapse of Indigenous American populations from smallpox and other diseases of the Columbian Exchange; mercantilist competition among Portugal, Britain, France, and the Netherlands, including chartered companies such as the Royal African Company; the participation of African states such as Dahomey and Asante that sold captives for firearms, textiles, and cowrie shells.',
        ),
      },
      {
        letter: 'c',
        question:
          'Explain ONE effect of the trans-Atlantic slave trade on societies in West Africa OR in the Americas between 1500 and 1800.',
        rubric: SAQ_PART_RUBRIC(
          'Identifies AND explains an effect. Africa: demographic loss and gender imbalance (more men than women were taken); the rise of slave-trading states such as Dahomey and the decline of others such as Kongo; increased warfare and kidnapping. Americas: plantation economies and African-majority populations in the Caribbean and Brazil; new racial hierarchies such as the casta system; syncretic religions and cultures such as Vodou, Santería, and Candomblé; resistance through maroon communities such as Palmares in Brazil.',
        ),
      },
    ],
    sampleResponse:
      '(a) The trade grew dramatically over time: about 278,000 Africans were embarked in the 1500s, but about 6.5 million were embarked in the 1700s, roughly half of the entire total.\n\n(b) The spread of sugar plantations in Brazil and the Caribbean after 1600 created enormous demand for labor. Because Indigenous populations had collapsed from smallpox and other diseases, planters turned to enslaved Africans, and European chartered companies competed to supply them.\n\n(c) In the Americas, the trade created African-majority societies in the Caribbean and Brazil. There, enslaved people blended West African and Catholic traditions into new religions such as Vodou in Saint-Domingue and Candomblé in Brazil, preserving African culture under slavery.',
  },
]

/* ============================ 1 DBQ ============================ */

export const DBQ: DBQItem = {
  type: 'dbq',
  topic: 'unit-5-and-6-industrialization',
  prompt:
    'Evaluate the extent to which industrialization changed the lives of workers in the period from 1750 to 1900.\n\n' +
    'In your response you should do the following:\n' +
    '• Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n' +
    '• Describe a broader historical context relevant to the prompt.\n' +
    '• Support an argument in response to the prompt using at least four documents.\n' +
    '• Use at least one additional piece of specific historical evidence (beyond that found in the documents) relevant to an argument about the prompt.\n' +
    '• For at least two documents, explain how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument.\n' +
    '• Use evidence to corroborate, qualify, or modify an argument that addresses the prompt.',
  documents: [
    {
      number: 1,
      source:
        'Source: Testimony of Elizabeth Bentley, age 23, who began work in a flax mill in Leeds at age 6, before the parliamentary committee on child labor chaired by Michael Sadler, Britain, 1832. The committee was gathering evidence for a bill to limit factory hours.',
      content:
        'Q: What were your hours of labour in that mill? — A: From 5 in the morning till 9 at night, when they were thronged.\n' +
        'Q: What were your usual hours of labour when you were not so thronged? — A: From 6 in the morning till 7 at night.\n' +
        'Q: What time was allowed for your meals? — A: Forty minutes at noon.\n' +
        'Q: Suppose you flagged a little, or were too late, what would they do? — A: Strap us.',
    },
    {
      number: 2,
      source:
        'Source: Summary of the Factory Act of 1833, passed by the British Parliament.',
      content:
        'The act banned the employment of children under 9 in textile mills (silk mills excepted), limited children aged 9 to 13 to 9 hours of work a day, limited young people aged 13 to 18 to 12 hours a day, required children under 13 to receive 2 hours of schooling a day, and created a small corps of government factory inspectors to enforce these rules.',
    },
    {
      number: 3,
      source:
        'Source: Friedrich Engels, son of a German textile manufacturer who worked in his family\'s cotton business in Manchester, The Condition of the Working Class in England, 1845 (English translation, 1887).',
      content:
        '"The employment of women at once breaks up the family; for when the wife spends twelve or thirteen hours every day in the mill, and the husband works the same length of time there or elsewhere, what becomes of the children? They grow up like wild weeds; they are put out to nurse for a shilling or eighteenpence a week, and how they are treated may be imagined."',
    },
    {
      number: 4,
      source:
        'Source: Karl Marx and Friedrich Engels, The Communist Manifesto, written for the Communist League and published in London, 1848 (English translation, 1888).',
      content:
        '"Owing to the extensive use of machinery and to division of labour, the work of the proletarians has lost all individual character, and consequently, all charm for the workman. He becomes an appendage of the machine, and it is only the most simple, most monotonous, and most easily acquired knack, that is required of him."',
    },
    {
      number: 5,
      source:
        'Source: Samuel Smiles, Scottish journalist and reformer, Self-Help, a best-selling book of biographies of self-made men, Britain, 1859.',
      content:
        '"\'Heaven helps those who help themselves\' is a well-tried maxim, embodying in a small compass the results of vast human experience. The spirit of self-help is the root of all genuine growth in the individual; and, exhibited in the lives of many, it constitutes the true source of national vigour and strength."',
    },
    {
      number: 6,
      source:
        'Source: Summary of a petition from cotton-mill workers in Bombay (Mumbai), British India, organized by the labor activist Narayan Meghaji Lokhande and presented to the Bombay Factory Commission, 1884 (adapted).',
      content:
        'Several thousand mill workers asked for a weekly day of rest on Sunday, a half-hour break at midday, a working day ending at sunset, payment of wages no later than the middle of the following month, and compensation for workers injured on the job.',
    },
    {
      number: 7,
      source:
        'Source: Pope Leo XIII, Rerum Novarum ("Of New Things"), an encyclical (letter to Catholic bishops worldwide) on the condition of the working classes, 1891 (English translation).',
      content:
        '"[T]he hiring of labor and the conduct of trade are concentrated in the hands of comparatively few; so that a small number of very rich men have been able to lay upon the teeming masses of the laboring poor a yoke little better than that of slavery itself."',
    },
  ],
  rubric: [
    {
      id: 'thesis',
      label: 'Thesis / Claim (1 pt)',
      description:
        'Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning, in the introduction or conclusion. Must do more than restate the prompt; must take a position on the EXTENT to which industrialization changed workers\' lives (for example, "transformed the pace, place, and discipline of work, but reforms and labor organizing only slowly improved conditions").',
    },
    {
      id: 'context',
      label: 'Contextualization (1 pt)',
      description:
        'Describes a broader historical context relevant to the prompt, in more than a phrase: for example, pre-industrial household and cottage production; Britain\'s advantages (coal, capital, colonial markets, the agricultural revolution); the spread of industrialization to continental Europe, the United States, Russia, Japan, and parts of India; urbanization and migration from the countryside.',
    },
    {
      id: 'evidence-docs-3',
      label: 'Evidence from the Documents (1 pt)',
      description:
        'Uses the content of at least THREE documents to address the topic of the prompt (accurately describes, not just quotes, what each says).',
    },
    {
      id: 'evidence-docs-4',
      label: 'Evidence from the Documents (2nd pt)',
      description:
        'Supports an argument in response to the prompt using at least FOUR documents.',
    },
    {
      id: 'evidence-beyond',
      label: 'Evidence Beyond the Documents (1 pt)',
      description:
        'Uses at least one specific piece of historical evidence beyond the documents that is relevant to an argument about the prompt: for example, the Chartist movement (1838–1848); the Ten Hours Act (1847); the Lowell mill workers in the United States; the Tomioka silk mill and women workers in Meiji Japan; the formation of trade unions and socialist parties such as Germany\'s SPD; Bismarck\'s social insurance laws (1880s); the Haymarket affair (1886).',
    },
    {
      id: 'sourcing',
      label: 'Sourcing (1 pt)',
      description:
        'For at least TWO documents, explains how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument: for example, Bentley testifying to a committee gathering evidence for a factory bill; Engels writing as a socialist from inside the Manchester cotton trade; Smiles writing for an aspiring middle-class and artisan audience; Leo XIII addressing Catholic bishops as socialism spread among European workers.',
    },
    {
      id: 'complexity',
      label: 'Complexity (1 pt)',
      description:
        'Demonstrates a complex understanding of the historical development, for example by distinguishing changes in conditions from changes in workers\' political responses; comparing Britain with later industrializers such as India; or weighing different contemporary interpretations (Docs 4, 5, 7) of what industrialization meant for workers. Must be substantive, not a single sentence.',
    },
  ],
  sampleResponse:
    '**Thesis:** Between 1750 and 1900, industrialization transformed the lives of workers by moving work from homes and workshops into factories governed by machines and clocks, and by exposing women and children to long, dangerous shifts. Workers and reformers responded by winning the first limits on factory labor, but those gains were slow and uneven, and by 1900 many observers still described industrial work as close to slavery.\n\n' +
    '**Contextualization:** Before industrialization, most families worked in agriculture or in cottage industries, spinning and weaving at home on their own schedules. Beginning in Britain in the late 1700s, coal, capital from trade and empire, and inventions such as the water frame and the steam engine allowed manufacturers to concentrate production in mills. Over the 1800s, industrialization spread to continental Europe, the United States, Japan, and colonial cities such as Bombay, drawing millions of rural people into growing industrial cities.\n\n' +
    '**Transformation of work:** Factory work imposed long hours and harsh discipline. Elizabeth Bentley (Doc 1) worked from five in the morning until nine at night in busy seasons and was "strapped" if she slowed down. Her testimony was given to Sadler\'s committee, which was gathering evidence for a bill to limit hours, so she and the committee had reason to stress the worst abuses, but its details match other evidence of mill discipline. Engels (Doc 3) argued that when both parents worked twelve- or thirteen-hour shifts, the family itself broke down, and Marx and Engels (Doc 4) claimed that machinery made the worker "an appendage of the machine." As revolutionary socialists writing for the Communist League, they wanted to show that these conditions were built into capitalism and could not be fixed by reform.\n\n' +
    '**Responses and limits of change:** Workers\' lives did change in response to protest and reform. Britain\'s Factory Act of 1833 (Doc 2) banned work by children under 9 in textile mills and created inspectors to enforce it, and beyond the documents, the Ten Hours Act of 1847 limited women and young people to ten-hour days. The same demands appeared wherever factories spread: Bombay mill workers in 1884 (Doc 6) asked for a weekly day of rest and a midday break, half a century after British workers had begun winning similar limits on factory labor. Not everyone saw the factory system as oppression. Samuel Smiles (Doc 5), writing for ambitious artisans and the middle class, argued that "self-help" let individuals rise through their own effort.\n\n' +
    '**Complexity:** The documents show that industrialization changed workers\' lives most dramatically in the pace and discipline of work, while improvements in conditions came slowly and unevenly across regions. By 1891, even the pope (Doc 7) described the condition of the "laboring poor" as "little better than that of slavery," showing that sixty years of reform had not resolved the problem. Leo XIII was writing to Catholic bishops as socialist parties gained support among European workers, so his purpose was to offer a Christian alternative to socialism that defended private property while demanding fair wages. Industrialization created a new working class whose lives were transformed, and whose struggle to improve them shaped politics into the twentieth century.',
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
      label: 'Long Essay Question (c. 1200–c. 1750)',
      prompt:
        'In the period c. 1200 to c. 1750, networks of exchange expanded across Afro-Eurasia and, after 1492, across the Atlantic and Pacific Oceans, carrying goods, people, ideas, technologies, and diseases. Evaluate the extent to which expanding networks of exchange transformed societies in the period c. 1200 to c. 1750. (You may focus on one or more of the developments referenced in the prompt; you are not expected to address the entire period.)',
    },
  ],
  rubric: LEQ_RUBRIC,
  sampleResponses: [
    {
      promptLabel: 'Long Essay Question (c. 1200–c. 1750)',
      response:
        'Sample (focused on the Mongol era, which the broad prompt allows):\n\nThe Mongol Empire (c. 1206–1368) transformed long-distance trade and cultural exchange in Eurasia by securing the overland Silk Road through state-sponsored institutions like the yam relay system, by deliberately patronizing merchants and resettling skilled artisans across the empire, and by enabling — for better and for worse — the Eurasian movement of ideas, technologies, and pathogens. While maritime exchange in the Indian Ocean continued under its own monsoon-driven logic largely independent of Mongol policy, the overland integration the Mongols created produced a Pax Mongolica without precedent in scale, and its breakdown in the mid-fourteenth century carried equally Eurasian consequences in the form of the Black Death.\n\n[Contextualization] Before the Mongol conquests, the Silk Road existed as a series of regional, fragmented exchanges rather than a continuous integrated route. Persian, Arab, and Sogdian merchants moved goods across overlapping commercial spheres, but warfare among the Khwarazmian, Kara-Khitan, and Jin states made long-distance overland transit slow, dangerous, and expensive. By 1260, however, the Mongols controlled territory from Korea to the Black Sea.\n\n[Evidence + reasoning — causation] The Mongols deliberately built infrastructure to capture commercial value. The yam relay-station network — stations roughly twenty-five miles apart where messengers could change horses — let imperial agents and merchants move from Karakorum to Persia in weeks rather than months. The Mongols issued paiza — bronze, silver, or gold passport tablets — that guaranteed protection and provisions to bearers. They deliberately resettled skilled artisans across the empire, transferring Persian astronomers and Chinese siege engineers to one another\'s capitals. As the account of Marco Polo, who returned from Khubilai\'s court in the 1290s, attests, this was a sustained imperial project, not an incidental side effect.\n\n[Evidence — cultural exchange] The Mongol order also enabled durable cultural exchange. Tibetan Buddhism reached the Yuan court; Nestorian Christianity flourished among Mongol elites; Franciscan friars (William of Rubruck, John of Plano Carpini) reached the great khan; and the Ilkhanate\'s adoption of Islam in the late thirteenth century integrated former pagan steppe rulers into the dar al-Islam. Persian scholars under Hülegü built the Maragheh observatory drawing on Chinese astronomy.\n\n[Complexity — qualification] The argument that the Mongols "transformed" Eurasian exchange must be qualified, however. First, Indian Ocean maritime trade, which already moved more bulk cargo than the Silk Road by 1200, intensified under the monsoon-driven sailing of Arab, Gujarati, and Chinese merchants for reasons largely external to Mongol policy. Second, the Mongol contribution included the catastrophic spread of the Black Death after 1347, which spread along precisely the routes the empire had secured and killed perhaps one-third of Europe\'s population. The same integration that diffused gunpowder and knowledge of paper money diffused Yersinia pestis. Finally, the breakdown of the unified empire after 1260 into competing khanates already qualified the Pax — and once those khanates fragmented in the fourteenth century, overland exchange contracted again.\n\n[Conclusion] On balance, the Mongol Empire did fundamentally transform overland Eurasian exchange between roughly 1240 and 1340, both by enabling unprecedented integration through state infrastructure and by spreading the diseases and ideas that integration carried. The transformation was not total — Indian Ocean maritime exchange operated largely independently — but the Mongol century is rightly identified as the one in which Afro-Eurasia first became a continuously linked commercial and cultural system.',
    },
  ],
}
