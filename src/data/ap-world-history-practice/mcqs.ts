import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 55 AP World History: Modern MCQs in 20 source-based sets (2–4 questions
 * per stimulus), modeled on the College Board exam format. Each stimulus is
 * defined once below and shared by every question in its set.
 *
 * Unit spread (CED weights: Units 1, 2, 7, 8, 9 at 8–10%; Units 3–6 at 12–15%):
 *   Unit 1 (The Global Tapestry, c. 1200–1450)                        5
 *   Unit 2 (Networks of Exchange, c. 1200–1450)                       5
 *   Unit 3 (Land-Based Empires, c. 1450–1750)                         7
 *   Unit 4 (Transoceanic Interconnections, c. 1450–1750)              8
 *   Unit 5 (Revolutions, incl. the Industrial Revolution, c. 1750–1900)  8
 *   Unit 6 (Consequences of Industrialization, c. 1750–1900)          7
 *   Unit 7 (Global Conflict, c. 1900–present)                         5
 *   Unit 8 (Cold War and Decolonization, c. 1900–present)             5
 *   Unit 9 (Globalization, c. 1900–present)                           5
 *
 * Sets:
 *   SRC_SONG       historian's interpretation, Song economy c. 1200      3 (U1)
 *   SRC_MALI       Ibn Battuta on Mali, 1350s (adapted)                  3 (U1, U2)
 *   SRC_INCA       historian's interpretation, Inca mit'a               2 (U1, U4)
 *   SRC_CAFFA      de' Mussis on the siege of Caffa, c. 1348 (adapted)   3 (U2)
 *   SRC_BUSBECQ    Busbecq on Ottoman officials, c. 1555 (adapted)       3 (U3)
 *   SRC_AKBAR      Mughal painting of Akbar's debates, c. 1605           2 (U3, U4)
 *   SRC_LUTHER     Luther, To the Christian Nobility, 1520 (adapted)     3 (U3)
 *   SRC_ATLANTIC   Afonso I of Kongo, 1526 + slave-trade data table      4 (U4)
 *   SRC_SILVER     Flynn and Giráldez on world trade, 1995 (adapted)     2 (U4)
 *   SRC_RIGHTS     Rights of Man 1789 + de Gouges 1791                   3 (U5)
 *   SRC_INDUSTRY   Sadler Committee testimony 1832 + Communist Manifesto 4 (U5, U7)
 *   SRC_MEIJI      Japanese woodblock print of the 1889 constitution     2 (U5)
 *   SRC_EMPIRE     Ferry speech 1885 + map of Africa in 1914             4 (U6)
 *   SRC_INDENTURE  table of Indian indentured migration, 1838–1917      3 (U6)
 *   SRC_KEYNES     Keynes, Economic Consequences of the Peace, 1919      2 (U7)
 *   SRC_POSTER     "We Can Do It!" poster, 1943                          2 (U7)
 *   SRC_DECOL      historian on Partition + Nkrumah, 1960                4 (U8)
 *   SRC_REAGAN     Reagan at the Brandenburg Gate, 1987                  2 (U8, U9)
 *   SRC_CO2        table of atmospheric carbon dioxide, 1850–2020       2 (U9)
 *   SRC_UDHR       Universal Declaration of Human Rights, 1948          2 (U9)
 */

const SRC_SONG = `Adapted from a historian's interpretation, 2000s

"By the early 1200s, the Song economy had been transformed. Fast-ripening Champa rice, brought from Southeast Asia, let farmers in the south harvest two crops a year. Canals and rivers carried grain, silk, and porcelain to booming cities, and the state, short of copper, issued paper money that merchants accepted across the empire. Iron production had risen so sharply that some scholars compare Song China with eighteenth-century Britain on the eve of industrialization."`

const SRC_MALI = `Adapted from Ibn Battuta, a Moroccan traveler, describing his visit to the Mali Empire in 1352–1353

"The people of Mali possess some admirable qualities. They are seldom unjust, and have a greater abhorrence of injustice than any other people. Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country. Neither traveler nor inhabitant in it has anything to fear from robbers or men of violence. … They are careful to observe the hours of prayer, … and they are zealous in learning the Qur'an by heart."`

const SRC_INCA = `Adapted from a historian's interpretation, 2010s

"The Inca state had no markets and no money as Europeans understood them. Instead, each household owed the state a share of its labor, called the mit'a. Men took turns farming state lands, building roads and terraces, and serving in the army, and the harvests they produced filled thousands of storehouses along the royal roads. Officials recorded these obligations on knotted cords called khipu."`

const SRC_CAFFA = `Adapted from Gabriele de' Mussis, an Italian notary, describing the siege of the Genoese trading city of Caffa on the Black Sea, c. 1348

"The Tartars, worn out by the plague and dying in thousands, ordered corpses to be placed in catapults and lobbed into the city, in the hope that the intolerable stench would kill everyone inside. … Soon the air was infected and the water poisoned. … Some of the Genoese escaped by ship, but they carried the disease with them to the ports of Italy."`

const SRC_BUSBECQ = `Adapted from Ogier Ghiselin de Busbecq, Habsburg ambassador to the Ottoman court, letter, c. 1555

"In making his appointments the Sultan pays no regard to any pretensions on the score of wealth or rank. … It is by merit that men rise in the service. … Those who receive the highest offices from the Sultan are for the most part the sons of shepherds or herdsmen, and so far from being ashamed of their parentage, they actually glory in it. … Our method is very different; there is no room for merit, but everything depends on birth."`

const SRC_AKBAR = `The image described below is a Mughal painting from about 1605, made for an illustrated history of the reign of the emperor Akbar (r. 1556–1605).

The painting shows Akbar seated in his House of Worship (Ibadat Khana) at Fatehpur Sikri. Before him, Muslim scholars of rival schools argue over open books, and two Jesuit priests in black robes, sent from the Portuguese colony of Goa, sit among them. Akbar also invited Hindu, Jain, and Zoroastrian thinkers to such debates, and he abolished the jizya, a tax on non-Muslims.`

const SRC_LUTHER = `Adapted from Martin Luther, To the Christian Nobility of the German Nation, 1520

"The Romanists have, with great adroitness, drawn three walls round themselves. … First, they have affirmed that the temporal power has no jurisdiction over them, but that the spiritual power is above the temporal. Secondly, … that no one may interpret the Scriptures but the Pope. Thirdly, … that no one may call a council but the Pope. … May God help us, and give us one of those trumpets that overthrew the walls of Jericho."`

const SRC_ATLANTIC = `**Source 1**

"Many of our people, keenly desirous as they are of the wares and things of your Kingdoms, which are brought here by your people, and in order to satisfy their voracious appetite, seize many of our people, freed and exempt men; and very often it happens that they kidnap even noblemen and the sons of noblemen, and our relatives, and take them to be sold to the white men who are in our Kingdoms."
— King Afonso I of Kongo, letter to King João III of Portugal, 1526

**Source 2**

Approximate share of all enslaved Africans who arrived in the Americas, 1501–1866, by region of arrival (adapted from the Trans-Atlantic Slave Trade Database)

| Region of arrival | Share |
| --- | --- |
| Brazil | 45% |
| British Caribbean | 22% |
| Spanish Americas | 12% |
| French Caribbean | 10% |
| Dutch Americas | 4% |
| Mainland North America | 4% |
| Other | 3% |`

const SRC_SILVER = `Adapted from historians Dennis O. Flynn and Arturo Giráldez, 1995

"Global trade emerged when all important populated continents began to exchange products continuously, both directly with each other and indirectly through other continents, and in values large enough to have crucial effects on all the trading partners. This happened in 1571, when the Spanish founded the city of Manila. … China was the dominant buyer of silver, and its demand drew the Americas, Europe, and Asia into one trading world."`

const SRC_RIGHTS = `**Source 1**

"Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good."
— Declaration of the Rights of Man and of the Citizen, France, 1789, Article 1

**Source 2**

"Woman is born free and lives equal to man in her rights. Social distinctions can be based only on the common utility."
— Olympe de Gouges, Declaration of the Rights of Woman and of the Female Citizen, 1791, Article 1`

const SRC_INDUSTRY = `**Source 1**

"What time did you begin to work at a factory? — When I was six years old. … What were your hours of labour in that mill? — From 5 in the morning till 9 at night, when they were thronged."
— Testimony of Elizabeth Bentley, a textile worker, to a British parliamentary committee (the Sadler Committee), 1832

**Source 2**

"The history of all hitherto existing society is the history of class struggles. … The proletarians have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!"
— Karl Marx and Friedrich Engels, The Communist Manifesto, 1848`

const SRC_MEIJI = `The image described below is a Japanese woodblock print made in 1889.

The print shows the Meiji emperor, dressed in a Western-style military uniform, handing the new constitution of Japan to the prime minister in a hall lit by chandeliers. The officials and court ladies around him wear European-style uniforms and gowns. The constitution, modeled in part on Prussia's, created an elected legislature with limited powers.`

const SRC_EMPIRE = `**Source 1**

"We must say openly that indeed the higher races have a right over the lower races. … I repeat, that the superior races have a right because they have a duty. They have the duty to civilize the inferior races."
— Jules Ferry, speech to the French Chamber of Deputies, 28 July 1885

**Source 2**

The map described here shows Africa in 1914. Nearly the entire continent is shaded in the colors of seven European powers: Britain, France, Germany, Belgium, Italy, Portugal, and Spain. Only two states are shown as independent: Liberia and Ethiopia.`

const SRC_INDENTURE = `Approximate number of indentured laborers from British India who arrived in selected colonies, 1838–1917

| Colony | Arrivals |
| --- | --- |
| Mauritius | 453,000 |
| British Guiana (Guyana) | 239,000 |
| Natal (South Africa) | 152,000 |
| Trinidad | 144,000 |
| Fiji | 61,000 |
| Jamaica | 36,000 |
| Suriname | 34,000 |`

const SRC_KEYNES = `"If we aim deliberately at the impoverishment of Central Europe, vengeance, I dare predict, will not limp."
— John Maynard Keynes, British economist and Treasury representative at the Paris Peace Conference, The Economic Consequences of the Peace, 1919`

const SRC_POSTER = `The image described below is a poster produced in 1943 for the Westinghouse Electric company's war-production factories in the United States.

The poster shows a woman in a blue work shirt and a red polka-dot bandana rolling up her sleeve and flexing her arm beneath the words "We Can Do It!"`

const SRC_DECOL = `**Source 1**

Adapted from a historian's interpretation, 2000s

"The British departure from India in August 1947 was hurried. A boundary commission drew the line between India and Pakistan in about five weeks, and the new border was announced only after independence. Some fourteen million people crossed it in fear, and hundreds of thousands died in communal violence among Hindus, Muslims, and Sikhs."

**Source 2**

"We face neither East nor West: we face forward."
— Kwame Nkrumah, leader of newly independent Ghana, 1960`

const SRC_REAGAN = `"General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization: Come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!"
— U.S. President Ronald Reagan, speech at the Brandenburg Gate, West Berlin, 1987`

const SRC_CO2 = `Approximate concentration of carbon dioxide in Earth's atmosphere, in parts per million (ppm), from ice-core records and, after 1958, direct measurement

| Year | CO2 (ppm) |
| --- | --- |
| 1850 | 285 |
| 1900 | 296 |
| 1950 | 311 |
| 1980 | 339 |
| 2000 | 370 |
| 2020 | 413 |`

const SRC_UDHR = `"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."
— Universal Declaration of Human Rights, adopted by the United Nations General Assembly, 1948, Article 1`

export const MCQS: MCQItem[] = [
  /* ============ SET 1: Song economy (Unit 1) ============ */
  {
    type: 'mcq',
    stimulus: SRC_SONG,
    question: 'Which of the following best explains the growth of cities described in the passage?',
    options: [
      'The Mongol conquest, which joined northern and southern China into a single trading zone',
      'Higher farm yields, which freed rural labor and supplied food to urban markets',
      'The arrival of American food crops such as maize and sweet potatoes, which fed a larger population',
      'The migration of Central Asian merchants, who founded new trading cities along the Silk Roads',
    ],
    correctAnswer: 1,
    explanation:
      'Champa rice allowed two harvests a year, and the larger food surplus fed growing cities and freed workers for crafts and trade. The Mongol explanation is the strongest trap, but the Mongols did not conquer the Southern Song until 1279, after the developments the passage describes.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    stimulus: SRC_SONG,
    question: 'Which of the following was a feature of Chinese government in both the Song and Ming dynasties?',
    options: [
      'Rule by a nomadic conquest elite that kept Han Chinese out of the highest offices',
      'Reliance on paper money as the main currency for paying taxes and settling trade',
      'Recruitment of many officials through examinations based on Confucian texts',
      'Official support for Buddhism as the state religion in place of Confucian learning',
    ],
    correctAnswer: 2,
    explanation:
      'The civil service examinations, built on the Confucian classics, selected officials under the Song and again under the Ming; the Yuan had suspended them from 1279 to 1315. Paper money did not last as a main currency: Ming paper currency lost value, and by the 1500s the state was collecting taxes in silver.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    stimulus: SRC_SONG,
    question: 'The historian\'s comparison with eighteenth-century Britain is most likely intended to suggest that',
    options: [
      'Song China built steam-powered factories much like those that later appeared in Britain',
      'Song prosperity depended on silver shipped from overseas colonies, as Britain\'s later did',
      'Song China grew mainly by conquering overseas territories, as Britain later did in Asia',
      'Song China reached a level of manufacturing and commerce unusual for a preindustrial economy',
    ],
    correctAnswer: 3,
    explanation:
      'The comparison stresses the scale of Song iron output and commercial activity, which approached what Britain reached only centuries later. Song China had no steam-powered factories, so reading the comparison as a claim about identical technology goes beyond what the historian says.',
    topic: 'unit-1-global-tapestry',
  },

  /* ============ SET 2: Ibn Battuta on Mali (Units 1–2) ============ */
  {
    type: 'mcq',
    stimulus: SRC_MALI,
    question: 'Ibn Battuta\'s point of view in the passage was most likely shaped by his',
    options: [
      'role as a diplomat whom the Mali court had sent to win allies among North African rulers',
      'work as a merchant hoping to buy gold directly from the West African mines',
      'identity as a devout Muslim scholar who judged societies by Islamic law and practice',
      'service to the Mamluk sultan, who wanted reports on the gold trade',
    ],
    correctAnswer: 2,
    explanation:
      'The excerpt praises exactly what a devout Muslim scholar would value, strict justice, regular prayer, and Qur\'an study, and Ibn Battuta was in fact a qadi (judge) trained in Islamic law. He was a traveling scholar rather than a gold trader, and nothing in the passage reflects a merchant\'s commercial interests.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    stimulus: SRC_MALI,
    question: 'The security for travelers that Ibn Battuta praises most directly supported which of the following?',
    options: [
      'Portuguese coastal trade, which drew West African gold away from desert routes',
      'Indian Ocean trade linking West African ports with merchants from Gujarat',
      'Mongol relay routes that connected the Mali court with merchants in China',
      'Caravan trade across the Sahara that exchanged West African gold for salt and goods',
    ],
    correctAnswer: 3,
    explanation:
      'Safe roads under Mali\'s rulers protected the camel caravans that carried gold north across the Sahara and brought salt, cloth, and other goods south. The Portuguese explanation is anachronistic, since Portuguese ships reached West Africa only in the mid-1400s, a century after this visit.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    stimulus: SRC_MALI,
    question: 'The religious practices that Ibn Battuta observed in Mali are best explained by',
    options: [
      'the spread of Islam into West Africa through merchants and scholars on trade routes',
      'the conquest of Mali by Arab armies that required its people to adopt Islam as their faith',
      'Sufi missionaries who arrived on Portuguese ships along the Atlantic coast of Africa',
      'teachers whom the Christian rulers of Ethiopia sent west to found schools in the Sahel',
    ],
    correctAnswer: 0,
    explanation:
      'Islam reached West Africa mainly through trans-Saharan merchants and scholars, and rulers like those of Mali adopted it while trade tied them to the wider Muslim world. The conquest explanation is the most common misconception; Mali\'s rulers embraced Islam by choice, without being conquered by Arab armies.',
    topic: 'unit-2-networks-of-exchange',
  },

  /* ============ SET 3: Inca mit'a (Units 1, 4) ============ */
  {
    type: 'mcq',
    stimulus: SRC_INCA,
    question: 'The Inca system described in the passage was most similar to which of the following in Mesoamerica?',
    options: [
      'The Maya building of trading ports that linked the Yucatán with the Caribbean islands',
      'The use of cacao beans as money in the markets of the Valley of Mexico',
      'The Aztec demand for tribute from conquered city-states to supply Tenochtitlan',
      'The chinampa raised fields that Aztec farmers built in the lake beds around their capital',
    ],
    correctAnswer: 2,
    explanation:
      'Both empires drew food and labor from conquered peoples into an imperial center: the Inca through the mit\'a, the Mexica through tribute. The cacao-money explanation is a contrast rather than a similarity, since the passage stresses that the Inca had no markets or money.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    stimulus: SRC_INCA,
    question: 'After the Spanish conquest, the labor system described in the passage was most directly adapted to',
    options: [
      'supply enslaved Africans to the sugar plantations of the Peruvian coast',
      'draft Indigenous workers for the silver mines at Potosí',
      'recruit Andean soldiers for Spanish campaigns in Europe',
      'staff Jesuit missions that converted Andean villages to Christianity',
    ],
    correctAnswer: 1,
    explanation:
      'Spanish officials turned the mit\'a into a colonial labor draft that sent thousands of Andean men to the silver mines of Potosí each year. Enslaved Africans worked on coastal plantations, but that was a separate system rather than an adaptation of the Inca labor draft.',
    topic: 'unit-4-transoceanic-connections',
  },

  /* ============ SET 4: Plague at Caffa (Unit 2) ============ */
  {
    type: 'mcq',
    stimulus: SRC_CAFFA,
    question: 'The spread of disease described in the passage was most directly made possible by',
    options: [
      'Portuguese voyages that connected East Asian ports directly with the Mediterranean',
      'Crusader armies returning from the Levant to their homes in Western Europe',
      'trade routes that linked Mongol-ruled Central Asia with Italian colonies on the Black Sea',
      'Ottoman conquests that opened the Black Sea to Venetian and Genoese shipping',
    ],
    correctAnswer: 2,
    explanation:
      'Caffa was a Genoese colony at the western end of caravan routes through the Mongol khanates, and its ships carried the plague to Italy. The Ottoman explanation reverses the chronology: the Ottomans took Constantinople in 1453 and later closed the Black Sea to Italian merchants.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    stimulus: SRC_CAFFA,
    question: 'A historian could best use this account as evidence that the period of Mongol dominance',
    options: [
      'ended trade between Europeans and Central Asian peoples for more than a century',
      'led European rulers to ban Italian merchants from trading at Black Sea ports',
      'forced Italian merchants to route all their Asian trade through Mamluk Egypt',
      'spread diseases and goods alike along the trade networks it helped connect',
    ],
    correctAnswer: 3,
    explanation:
      'The account shows plague moving from a Mongol army to a Genoese trading city and then by ship to Italy, the same path that carried goods. Trade did not stop for a century; Italian merchants were back in the Black Sea within a few years of the epidemic.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    stimulus: SRC_CAFFA,
    question: 'Which of the following was a long-term consequence in Western Europe of the epidemic described?',
    options: [
      'Labor shortages that raised wages and loosened the bonds of serfdom',
      'Stricter manorial controls as lords bound the surviving peasants to the land',
      'A collapse of Italian trade with Egypt and the other ports of the eastern Mediterranean',
      'The replacement of the Catholic Church by new Protestant churches in northern Europe',
    ],
    correctAnswer: 0,
    explanation:
      'With perhaps a third of Europe\'s population dead, surviving workers could demand higher wages, and serfdom weakened in much of Western Europe. Lords did try to cap wages and tie peasants to the land, but in Western Europe those efforts failed over the long run; a stricter serfdom took hold in Eastern Europe instead.',
    topic: 'unit-2-networks-of-exchange',
  },

  /* ============ SET 5: Busbecq on the Ottomans (Unit 3) ============ */
  {
    type: 'mcq',
    stimulus: SRC_BUSBECQ,
    question: 'The pattern of promotion Busbecq describes was made possible chiefly by the Ottoman',
    options: [
      'timar system, which granted land revenues to cavalrymen in return for military service',
      'devshirme, which took Christian boys from the Balkans and trained them for state service',
      'millet system, which let religious communities govern many of their own internal affairs',
      'tax-farming system, which sold the right to collect provincial taxes to wealthy bidders',
    ],
    correctAnswer: 1,
    explanation:
      'The devshirme brought boys of humble rural origin into the palace schools, where talent decided whether they became Janissaries or high officials. The timar system was real but did the opposite of what Busbecq praises, rewarding cavalry service with land revenues rather than opening high office to men of low birth.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    stimulus: SRC_BUSBECQ,
    question: 'Busbecq\'s purpose in contrasting Ottoman and European practice was most likely to',
    options: [
      'criticize the weight given to noble birth in the Habsburg lands he served',
      'warn European rulers that Ottoman officials were too poorly trained to govern',
      'encourage Christian converts to seek office in the Ottoman administration',
      'persuade the sultan to adopt European rules of aristocratic succession',
    ],
    correctAnswer: 0,
    explanation:
      'Busbecq ends by saying that in Europe "everything depends on birth," using Ottoman practice as a mirror to criticize his own society. The warning about poorly trained officials reverses his argument, which praises Ottoman officials as chosen for merit.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    stimulus: SRC_BUSBECQ,
    question: 'The approach to recruiting officials described in the passage was most similar to the',
    options: [
      'Tokugawa practice of reserving government posts for hereditary samurai families',
      'French sale of royal offices to wealthy families under the Bourbon monarchy',
      'Mughal practice of granting mansab ranks mainly to Rajput princes who had submitted',
      'Ming and Qing selection of officials through competitive civil service examinations',
    ],
    correctAnswer: 3,
    explanation:
      'Like the devshirme, the Chinese examination system aimed to fill office by ability rather than birth. The French sale of offices was the opposite, since wealth and family bought positions, which is the European pattern Busbecq criticizes.',
    topic: 'unit-3-land-based-empires',
  },

  /* ============ SET 6: Akbar's debates (Units 3–4) ============ */
  {
    type: 'mcq',
    stimulus: SRC_AKBAR,
    question: 'Akbar\'s policies shown in the painting are best understood as an effort to',
    options: [
      'convert the Hindu majority to Islam by defeating rival scholars in public debate',
      'replace Islamic law with Catholic teaching at the urging of Portuguese advisers',
      'win the loyalty of a religiously diverse population in a large land-based empire',
      'ally with Safavid Iran by adopting Twelver Shia practice at the Mughal court',
    ],
    correctAnswer: 2,
    explanation:
      'By hosting debates among many faiths and abolishing the jizya, Akbar built support among the Hindus and others who made up most of his subjects. The conversion explanation misreads the debates, which explored ideas rather than pressing anyone to convert.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    stimulus: SRC_AKBAR,
    question: 'The presence of the Jesuit priests in the painting is best explained by',
    options: [
      'Catholic missionary activity that accompanied Portuguese expansion in the Indian Ocean',
      'Mughal conquests that had placed Portuguese Goa under Akbar\'s direct rule',
      'the Protestant Reformation, which drove Catholic clergy out of Europe and into Asia',
      'Mughal trade treaties that required European merchants to bring Christian clergy',
    ],
    correctAnswer: 0,
    explanation:
      'Jesuit missionaries traveled with Portuguese merchants and officials to Goa and from there to Asian courts, including Akbar\'s. The Reformation explanation is the strongest trap, but the Jesuits were founded to spread Catholicism, not driven out of Europe, and Goa remained Portuguese rather than Mughal.',
    topic: 'unit-4-transoceanic-connections',
  },

  /* ============ SET 7: Luther (Unit 3) ============ */
  {
    type: 'mcq',
    stimulus: SRC_LUTHER,
    question: 'Luther\'s appeal to the German nobility is best understood in the context of',
    options: [
      'Ottoman advances that forced German princes to seek papal military protection',
      'disputes over religious authority that divided Christianity in Western Europe',
      'Enlightenment criticism of revealed religion by French philosophers',
      'humanist efforts to restore papal authority over national churches',
    ],
    correctAnswer: 1,
    explanation:
      'Luther urged secular rulers to reject papal claims about Scripture and councils, fueling the Protestant Reformation. The Enlightenment explanation is anachronistic; the philosophes wrote more than two centuries later and attacked revealed religion, not papal power alone.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    stimulus: SRC_LUTHER,
    question: 'Which of the following was a result of appeals like Luther\'s in the sixteenth century?',
    options: [
      'German princes gained the right to choose the religion of their own territories.',
      'The papacy agreed to let national church councils elect future popes.',
      'The Holy Roman Emperor became Lutheran and closed the monasteries of the empire.',
      'The German princes united their lands into a single Protestant kingdom.',
    ],
    correctAnswer: 0,
    explanation:
      'The Peace of Augsburg (1555) let each German prince decide whether his territory would be Lutheran or Catholic, giving rulers new power over churches. The Habsburg emperors remained Catholic, and the empire stayed politically divided rather than uniting as one Protestant kingdom.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    stimulus: SRC_LUTHER,
    question: 'The religious division that followed Luther\'s challenge was most similar to which development in the Islamic world?',
    options: [
      'The Mughal emperor Akbar\'s sponsorship of debates among scholars of many faiths',
      'The spread of Sufi brotherhoods along the trade routes of West Africa',
      'The Ottoman conquest of Constantinople and conversion of Hagia Sophia',
      'The rivalry between the Sunni Ottomans and the Shia Safavid state',
    ],
    correctAnswer: 3,
    explanation:
      'Just as the Reformation split Latin Christianity into rival confessions backed by states, Safavid Shi\'ism hardened a Sunni–Shia divide that fed long wars with the Ottomans. Akbar\'s debates are a contrast rather than a parallel, since they aimed to reduce religious conflict instead of dividing states by faith.',
    topic: 'unit-3-land-based-empires',
  },

  /* ============ SET 8: The Atlantic slave trade (Unit 4) ============ */
  {
    type: 'mcq',
    stimulus: SRC_ATLANTIC,
    question: 'Afonso\'s complaint in Source 1 is best understood in the context of',
    options: [
      'growing European demand for enslaved labor that drew African traders into raiding',
      'the Portuguese conquest of Kongo, which had made it a colony ruled from Lisbon',
      'Kongo\'s rejection of Christianity after conflicts with Portuguese missionaries',
      'Ottoman demand for enslaved soldiers, which pulled captives north across the Sahara',
    ],
    correctAnswer: 0,
    explanation:
      'Afonso complains that the desire for Portuguese goods led his own subjects to kidnap free people and nobles for sale, a sign of how Atlantic demand reshaped African societies. The conquest explanation fails because Kongo was an independent kingdom whose Christian king wrote to Portugal\'s king as an equal.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    stimulus: SRC_ATLANTIC,
    question: 'Afonso most likely wrote to the king of Portugal in order to',
    options: [
      'request Portuguese troops to help him conquer his neighbors and take more captives',
      'offer Kongo\'s copper mines to Portugal in exchange for an end to missionary activity',
      'seek a fellow Christian king\'s help in limiting a trade that weakened his rule',
      'announce that Kongo would sell captives to Dutch and English merchants instead',
    ],
    correctAnswer: 2,
    explanation:
      'As a Catholic ally of Portugal, Afonso appealed to João III to rein in Portuguese traders whose purchases were undermining royal authority in Kongo. The Dutch and English explanation is anachronistic; those powers did not become major slave traders until the seventeenth century.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    stimulus: SRC_ATLANTIC,
    question: 'The data in Source 2 best support which of the following claims?',
    options: [
      'Spanish silver mines in Mexico and Peru received most of the enslaved Africans sent to the Americas.',
      'Sugar colonies in Brazil and the Caribbean received most of the enslaved Africans sent to the Americas.',
      'Mainland North America was among the leading destinations of the trans-Atlantic slave trade.',
      'Dutch ships carried most of the trade because the Dutch controlled the main Caribbean ports.',
    ],
    correctAnswer: 1,
    explanation:
      'Brazil and the British and French Caribbean, the great sugar economies, together account for more than three-quarters of arrivals. The Spanish Americas received only about 12 percent, so the data do not support a claim that silver mining was the main destination.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    stimulus: SRC_ATLANTIC,
    question: 'Mainland North America received a small share of arrivals, yet by 1860 it had the largest enslaved population in the Americas. Which of the following best explains this?',
    options: [
      'Most enslaved people there were Indigenous Americans captured in frontier wars.',
      'Planters there bought large numbers of enslaved people from Brazil after 1850.',
      'Enslaved communities there grew through natural increase, unlike those on sugar plantations.',
      'Ships continued to bring enslaved Africans there legally from West Africa until the Civil War began.',
    ],
    correctAnswer: 2,
    explanation:
      'Deadly labor on Caribbean and Brazilian sugar plantations kept enslaved populations from growing, while in North America the enslaved population grew by natural increase. The legal-import explanation fails because the United States banned the importation of enslaved Africans in 1808.',
    topic: 'unit-4-transoceanic-connections',
  },

  /* ============ SET 9: Silver and world trade (Unit 4) ============ */
  {
    type: 'mcq',
    stimulus: SRC_SILVER,
    question: 'Which of the following developments most directly supports the authors\' argument?',
    options: [
      'Venetian merchants buying Asian pepper through Ottoman ports in the eastern Mediterranean',
      'Spanish galleons carrying American silver from Acapulco to Manila for Chinese silk and porcelain',
      'Portuguese caravels carrying West African gold to Lisbon along the coast of Africa',
      'Russian traders exchanging Siberian furs for Chinese tea across the Central Asian steppe',
    ],
    correctAnswer: 1,
    explanation:
      'The Manila galleons linked American silver to Chinese goods, completing a trade circuit that joined every inhabited continent, which is the authors\' central claim. The Venetian pepper trade was older and connected only Asia and Europe, so it cannot show the global link the authors date to 1571.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    stimulus: SRC_SILVER,
    question: 'The Chinese demand for silver mentioned in the passage is best explained by',
    options: [
      'Ming policies that required many taxes to be paid in silver',
      'Mongol tribute demands that drained silver from the Chinese treasury',
      'Ming bans that stopped Chinese mints from producing copper coins',
      'Chinese merchants\' use of silver to buy African gold and ivory',
    ],
    correctAnswer: 0,
    explanation:
      'Ming reforms such as the Single Whip system of the 1570s and 1580s commuted taxes into silver payments, creating enormous demand that drew silver from Japan and the Americas. The Mongol explanation is anachronistic, since the Yuan dynasty had fallen in 1368.',
    topic: 'unit-4-transoceanic-connections',
  },

  /* ============ SET 10: Declarations of rights (Unit 5) ============ */
  {
    type: 'mcq',
    stimulus: SRC_RIGHTS,
    question: 'The ideas in Source 1 drew most directly on',
    options: [
      'Catholic teachings on the divine right of kings to rule over their subjects',
      'mercantilist ideas about how to strengthen the royal treasury through trade',
      'Enlightenment ideas of natural rights and popular sovereignty',
      'Romantic nationalist ideas about a shared folk culture and language',
    ],
    correctAnswer: 2,
    explanation:
      'The claim that people are born free and equal in rights comes from Enlightenment natural-rights theory, especially Locke and Rousseau. Romantic nationalism, with its stress on folk culture, developed mainly in the early nineteenth century and did not shape this 1789 text.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_RIGHTS,
    question: 'De Gouges most likely modeled Source 2 on Source 1 in order to',
    options: [
      'show support for the monarchy and its restoration of traditional family law',
      'argue that women\'s rights should depend on their husbands\' citizenship',
      'praise the National Assembly for granting women the vote in 1789',
      'point out that the rights proclaimed in 1789 had been withheld from women',
    ],
    correctAnswer: 3,
    explanation:
      'By rewriting Article 1 with "woman" in place of "men," de Gouges exposed how the 1789 Declaration left women out of the rights it proclaimed. The National Assembly did not give women the vote, so her text protests an exclusion rather than praising a reform.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_RIGHTS,
    question: 'Which of the following developments in the Americas most directly drew on ideas like those in Source 1?',
    options: [
      'The Spanish crown\'s creation of new viceroyalties to tighten colonial control',
      'The expansion of plantation slavery in Brazil under Portuguese rule',
      'The founding of Jesuit missions among the Guaraní in Paraguay',
      'The revolt in Saint-Domingue that ended slavery and created Haiti',
    ],
    correctAnswer: 3,
    explanation:
      'Free people of color and enslaved rebels in Saint-Domingue invoked the French Revolution\'s language of liberty and equality, and the revolt ended in Haitian independence in 1804. The new Spanish viceroyalties were Bourbon administrative reforms meant to strengthen royal control, not to expand rights.',
    topic: 'unit-5-revolutions',
  },

  /* ============ SET 11: Industrial society (Units 5, 7) ============ */
  {
    type: 'mcq',
    stimulus: SRC_INDUSTRY,
    question: 'Source 1 most directly supports which of the following claims about early industrialization?',
    options: [
      'Factory production drew young children into long hours of wage labor.',
      'Factory owners relied mainly on skilled adult artisans organized in guilds.',
      'Rural families kept their children at home as factory wages rose.',
      'Textile production remained centered in rural households.',
    ],
    correctAnswer: 0,
    explanation:
      'Bentley began mill work at six and worked sixteen-hour days in busy periods, evidence of children\'s place in the factory labor force. The guild-artisan explanation reverses the pattern; mills replaced skilled craft labor with cheap, unskilled workers, many of them women and children.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_INDUSTRY,
    question: 'Which of the following was a response in Britain to conditions like those described in Source 1?',
    options: [
      'Workers formed the Chartist movement chiefly to shorten children\'s hours in mills.',
      'Parliament raised tariffs on imported cloth to protect the wages of mill workers.',
      'Parliament set a national minimum wage for adult workers in textile mills.',
      'Parliament passed laws limiting children\'s working hours in textile mills.',
    ],
    correctAnswer: 3,
    explanation:
      'The Sadler Committee\'s findings led to the Factory Act of 1833, which limited child labor in textile mills and created factory inspectors. The Chartists were real, but they campaigned for voting rights and parliamentary reform, not for a return to guild control.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_INDUSTRY,
    question: 'The argument in Source 2 is best understood as a reaction to',
    options: [
      'the power of hereditary nobles in the Russian and Ottoman empires',
      'the inequalities that industrial capitalism created between owners and workers',
      'the spread of absolutist monarchy in eighteenth-century Western Europe',
      'the decline of British manufacturing as world trade shifted toward Asian producers',
    ],
    correctAnswer: 1,
    explanation:
      'Marx and Engels wrote in industrializing Western Europe and addressed the "proletarians," the wage workers created by factory capitalism. They focused on class conflict between industrial owners and workers, not on the landed nobility of agrarian empires.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_INDUSTRY,
    question: 'Ideas like those in Source 2 most directly influenced which twentieth-century development?',
    options: [
      'The founding of the League of Nations in Geneva in 1920',
      'The rise of fascist movements in 1920s Italy',
      'The Bolshevik seizure of power in Russia in 1917',
      'The Young Turk constitutional revolt of 1908',
    ],
    correctAnswer: 2,
    explanation:
      'Lenin\'s Bolsheviks were Marxists who claimed to lead a workers\' revolution and founded the first communist state. Italian fascism was a strong distractor because it also attacked liberal politics, but it was hostile to Marxism and crushed socialist movements.',
    topic: 'unit-7-global-conflict',
  },

  /* ============ SET 12: Meiji constitution print (Unit 5) ============ */
  {
    type: 'mcq',
    stimulus: SRC_MEIJI,
    question: 'The print is best understood as evidence of which Meiji policy?',
    options: [
      'Restoration of samurai privileges that the Tokugawa shogunate had taken away',
      'Selective adoption of Western institutions to resist foreign domination',
      'Acceptance of a constitution imposed by Western powers after a military defeat',
      'Transfer of real power from the emperor to an elected parliamentary majority',
    ],
    correctAnswer: 1,
    explanation:
      'Western uniforms, a European-style hall, and a constitution modeled on Prussia\'s show Meiji leaders borrowing Western forms to build a state strong enough to resist imperial powers. The constitution was granted by the emperor and kept power with him and his ministers rather than with an elected majority.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    stimulus: SRC_MEIJI,
    question: 'Compared with the Meiji reforms, the Qing Self-Strengthening Movement of the 1860s–1890s',
    options: [
      'abolished the Confucian civil service examinations in its first decade of reform',
      'adopted Western weapons and arsenals but made fewer political changes',
      'produced a constitution with an elected legislature decades before Japan',
      'ended Qing rule and replaced it with a republic modeled on the United States',
    ],
    correctAnswer: 1,
    explanation:
      'Qing officials built arsenals, shipyards, and modern armies but left the imperial political system largely unchanged, while Japan rebuilt its government as well. The examination explanation is wrong because the Qing kept the Confucian civil service examinations until 1905, long after Self-Strengthening began.',
    topic: 'unit-5-revolutions',
  },

  /* ============ SET 13: The New Imperialism (Unit 6) ============ */
  {
    type: 'mcq',
    stimulus: SRC_EMPIRE,
    question: 'Ferry\'s argument in Source 1 is best described as',
    options: [
      'an Enlightenment argument that natural rights required ending overseas empires',
      'a free-trade argument that formal colonies cost more than they returned',
      'a claim of racial and cultural hierarchy used to justify colonial expansion',
      'a mercantilist argument that colonies existed to supply gold and silver',
    ],
    correctAnswer: 2,
    explanation:
      'Ferry justified French expansion by claiming that "superior races" had a right and a duty to rule "inferior" ones, the logic of the civilizing mission and Social Darwinism. Some liberals did make the free-trade case against colonies, but Ferry was arguing for expansion, not against it.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    stimulus: SRC_EMPIRE,
    question: 'Which of the following most directly enabled the expansion shown in Source 2?',
    options: [
      'Military alliances between European states and the Zulu, Asante, and Ndebele kingdoms',
      'Steamships, quinine, and repeating rifles produced by industrial economies',
      'Large-scale European settlement in West Africa that began in the 1500s',
      'Mass conversion to Christianity, which led African rulers to accept colonial rule',
    ],
    correctAnswer: 1,
    explanation:
      'Steamships carried Europeans up African rivers, quinine protected them from malaria, and repeating rifles and machine guns gave small forces a decisive advantage. The Zulu and Asante fought wars against British expansion rather than allying with it.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    stimulus: SRC_EMPIRE,
    question: 'Ethiopia\'s independence, as shown in Source 2, is best explained by',
    options: [
      'a Berlin Conference decision to reserve Ethiopia for later British settlement',
      'an alliance with the Ottoman Empire, which protected Ethiopia from invasion',
      'Menelik II\'s defeat of an invading Italian army at Adwa in 1896',
      'Ethiopia\'s acceptance of a French protectorate over its foreign relations',
    ],
    correctAnswer: 2,
    explanation:
      'Menelik II built a large army equipped with modern rifles and crushed the Italians at Adwa, forcing Italy to recognize Ethiopian independence. No European protectorate covered Ethiopia; it kept control of its own foreign relations and was even admitted to the League of Nations in 1923.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    stimulus: SRC_EMPIRE,
    question: 'European presence in Africa before 1800 differed from the situation shown in Source 2 mainly because earlier Europeans',
    options: [
      'ruled most of the continent through chartered trading companies',
      'held mostly coastal trading forts rather than large inland territories',
      'had already conquered the kingdoms of the Sahel and the Congo basin',
      'settled in larger numbers than they did in the late nineteenth century',
    ],
    correctAnswer: 1,
    explanation:
      'Before the nineteenth century, Europeans in Africa mostly traded from coastal forts and depended on African states for access to the interior. Chartered companies did operate in Africa, but they held trading posts, not most of the continent.',
    topic: 'unit-6-industrialization',
  },

  /* ============ SET 14: Indentured migration (Unit 6) ============ */
  {
    type: 'mcq',
    stimulus: SRC_INDENTURE,
    question: 'Which of the following most directly contributed to the migration shown in the table?',
    options: [
      'The Indian Rebellion of 1857, after which British officials deported rebels overseas',
      'Gold rushes in Australia and California, which drew workers away from India',
      'The opening of the Suez Canal, which shortened the voyage from India to the Caribbean',
      'The abolition of slavery in the British Empire, which left planters seeking new workers',
    ],
    correctAnswer: 3,
    explanation:
      'After Britain abolished slavery in 1833, sugar planters in Mauritius, the Caribbean, and elsewhere recruited indentured workers from India to replace formerly enslaved laborers. The 1857 explanation fails because indentured migration began nearly two decades earlier and relied on contracts, not deportation.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    stimulus: SRC_INDENTURE,
    question: 'A long-term effect of the migration shown in the table was the',
    options: [
      'growth of South Asian communities that shaped Caribbean and Indian Ocean societies',
      'mass conversion of Indian laborers to Christianity on the plantations',
      'end of sugar production in the colonies that received indentured workers',
      'adoption of Hindi as the official language of the receiving colonies',
    ],
    correctAnswer: 0,
    explanation:
      'Many indentured workers stayed after their contracts ended, and their descendants are a large share of the population in places such as Mauritius, Guyana, Trinidad, and Fiji. The conversion explanation fails because most indentured workers kept their Hindu or Muslim faith and built the temples and mosques that still stand in these societies.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    stimulus: SRC_INDENTURE,
    question: 'The migration shown in the table was most similar to the',
    options: [
      'movement of Irish families to the United States and Britain after the potato famine of the 1840s',
      'forced relocation of Armenians from Anatolia during the First World War',
      'movement of Chinese contract laborers to Cuban plantations and Peruvian guano mines',
      'movement of Russian peasants to Siberia after the abolition of serfdom',
    ],
    correctAnswer: 2,
    explanation:
      'Chinese "coolie" laborers, like Indian indentured workers, signed long contracts to replace enslaved labor on plantations and in mines after abolition. Irish emigration after the famine was a mass migration, but it was mostly free, unindentured movement into wage labor.',
    topic: 'unit-6-industrialization',
  },

  /* ============ SET 15: Keynes on Versailles (Unit 7) ============ */
  {
    type: 'mcq',
    stimulus: SRC_KEYNES,
    question: 'Keynes was most directly criticizing',
    options: [
      'the reparations and territorial losses imposed on Germany by the Treaty of Versailles',
      'the Allied decision to admit Germany to the League of Nations in 1919',
      'the American refusal to lend money to Britain and France during the war',
      'the breakup of Austria-Hungary, which Germany had demanded at the peace talks',
    ],
    correctAnswer: 0,
    explanation:
      'Keynes warned that crushing reparations would impoverish Germany and its neighbors and breed revenge. Germany was not admitted to the League until 1926, so a 1919 admission could not have been his target.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    stimulus: SRC_KEYNES,
    question: 'Which of the following developments of the 1920s and 1930s would most strengthen Keynes\'s prediction?',
    options: [
      'The Locarno treaties, in which Germany accepted its new western borders',
      'Germany\'s admission to the League of Nations in 1926',
      'Nazi propaganda that blamed the peace settlement for Germany\'s economic hardship',
      'The Dawes Plan, which made Germany\'s reparations payments easier to meet on schedule',
    ],
    correctAnswer: 2,
    explanation:
      'Hitler\'s movement exploited resentment of the treaty and economic crisis to win power, the "vengeance" Keynes predicted. Locarno, League membership, and the Dawes Plan all pointed toward reconciliation, so they would weaken rather than strengthen his prediction.',
    topic: 'unit-7-global-conflict',
  },

  /* ============ SET 16: Wartime poster (Unit 7) ============ */
  {
    type: 'mcq',
    stimulus: SRC_POSTER,
    question: 'The poster is best understood as evidence of',
    options: [
      'efforts to return women to domestic roles after the war ended',
      'the women\'s suffrage campaign that won the vote in the United States',
      'opposition among American workers to producing weapons for the war',
      'the mobilization of women into industrial labor as part of total war',
    ],
    correctAnswer: 3,
    explanation:
      'The poster encouraged women working in war plants, part of a total-war mobilization that drew millions of women into industry. American women had won the vote in 1920, so the poster cannot belong to the suffrage campaign.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    stimulus: SRC_POSTER,
    question: 'Which of the following was a similarity between the First and Second World Wars?',
    options: [
      'Governments filled their armies mainly with volunteers rather than conscripts.',
      'Bombing raids on cities caused the largest share of civilian deaths.',
      'Governments directed civilian economies and recruited women into war industries.',
      'Colonial troops were kept at home rather than sent to fight in other regions.',
    ],
    correctAnswer: 2,
    explanation:
      'Both were total wars in which states controlled production, rationed goods, and brought women into factories. Conscription was used in both wars, and colonial troops from India, Africa, and elsewhere fought in large numbers in each.',
    topic: 'unit-7-global-conflict',
  },

  /* ============ SET 17: Decolonization (Unit 8) ============ */
  {
    type: 'mcq',
    stimulus: SRC_DECOL,
    question: 'Source 1 is best understood in the context of which of the following?',
    options: [
      'The creation of new states from Ottoman lands after the First World War',
      'The division of former colonies into Soviet and American occupation zones',
      'The spread of fascist movements among anticolonial leaders in South Asia',
      'The end of European empires in Asia and Africa after the Second World War',
    ],
    correctAnswer: 3,
    explanation:
      'Indian independence and partition were part of the wave of decolonization that followed 1945, as weakened European powers withdrew from their colonies. The partition line was drawn by a British commission, not by the superpowers, so the occupation-zone explanation does not fit.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    stimulus: SRC_DECOL,
    question: 'According to Source 1, which of the following contributed to the violence of partition?',
    options: [
      'British troops\' long stay in the Punjab to police the new boundary line',
      'Gandhi\'s campaign of mass civil disobedience against the new border line',
      'A hasty British exit with a border made public only after the handover',
      'A war between India and China over the new northern Himalayan frontier',
    ],
    correctAnswer: 2,
    explanation:
      'The historian stresses that the British left in haste and announced the new border only after independence, leaving millions uncertain and afraid. British troops did not stay on to police the border, since the passage stresses a hurried exit, and Gandhi used fasts to stop the killing rather than to protest the border.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    stimulus: SRC_DECOL,
    question: 'Nkrumah\'s statement in Source 2 most directly reflects',
    options: [
      'Ghana\'s formal alliance with the United States through NATO',
      'Ghana\'s entry into the Warsaw Pact in exchange for Soviet aid',
      'the refusal of nonaligned states to join either Cold War bloc',
      'the British Commonwealth\'s policy of neutrality in the Cold War',
    ],
    correctAnswer: 2,
    explanation:
      '"Neither East nor West" expresses nonalignment, the refusal of many new states to join the American or Soviet bloc. Ghana never joined the Warsaw Pact, and accepting aid from both sides was part of nonaligned strategy rather than a formal alliance.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    stimulus: SRC_DECOL,
    question: 'Which leader pursued a foreign policy most similar to the one expressed in Source 2?',
    options: [
      'Syngman Rhee of South Korea, who depended on American military protection',
      'Jawaharlal Nehru of India, a founder of the Non-Aligned Movement',
      'Ho Chi Minh of North Vietnam, who relied on Soviet and Chinese aid in war',
      'Chiang Kai-shek of Taiwan, who signed a defense treaty with the United States',
    ],
    correctAnswer: 1,
    explanation:
      'Nehru, along with Nasser, Sukarno, and Tito, led the Non-Aligned Movement that took shape after the 1955 Bandung Conference. Ho Chi Minh accepted aid from both communist powers, but he fought as part of the communist camp rather than standing apart from the blocs.',
    topic: 'unit-8-cold-war-decolonization',
  },

  /* ============ SET 18: Reagan at the Berlin Wall (Units 8–9) ============ */
  {
    type: 'mcq',
    stimulus: SRC_REAGAN,
    question: 'Reagan\'s reference to liberalization most directly refers to',
    options: [
      'the economic plans for rapid growth of heavy industry that Stalin had introduced',
      'the reform policies of glasnost and perestroika that Gorbachev had begun',
      'the market reforms in China that Deng Xiaoping had begun in the late 1970s',
      'the Soviet invasion of Afghanistan that Leonid Brezhnev had ordered in 1979',
    ],
    correctAnswer: 1,
    explanation:
      'By 1987 Gorbachev had launched glasnost (openness) and perestroika (restructuring), and Reagan challenged him to extend that reform to Eastern Europe. Deng\'s market reforms were real liberalization, but they were China\'s policies, not something Reagan was asking the Soviet leader to pursue.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    stimulus: SRC_REAGAN,
    question: 'Which of the following developments of the 1990s followed most directly from the changes Reagan called for?',
    options: [
      'A reunified Germany left NATO and became a neutral state in Central Europe.',
      'Former Soviet-bloc states turned to market economies and global trade.',
      'The Warsaw Pact expanded to include several Western European states.',
      'Eastern European states formed a new communist trade bloc with China.',
    ],
    correctAnswer: 1,
    explanation:
      'After the Wall fell and the Soviet Union dissolved, former communist states moved to market economies and joined institutions such as the WTO, deepening globalization. Reunified Germany stayed in NATO rather than turning neutral, and the Warsaw Pact dissolved in 1991 rather than expanding.',
    topic: 'unit-9-globalization',
  },

  /* ============ SET 19: Atmospheric carbon dioxide (Unit 9) ============ */
  {
    type: 'mcq',
    stimulus: SRC_CO2,
    question: 'The trend shown in the table is most directly the result of',
    options: [
      'volcanic eruptions that became more frequent during the twentieth century',
      'natural changes in solar activity that warmed the oceans after 1850',
      'burning fossil fuels in industrial and industrializing economies',
      'the spread of rice paddies and cattle herds in Asia after 1950',
    ],
    correctAnswer: 2,
    explanation:
      'The rise tracks the burning of coal, oil, and natural gas since the Industrial Revolution, and it accelerates as industrialization spreads after 1950. Rice paddies and cattle release mainly methane, so they cannot explain most of the carbon dioxide increase.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    stimulus: SRC_CO2,
    question: 'Which of the following was an international response to the trend shown in the table?',
    options: [
      'The Montreal Protocol, which phased out chemicals that thin the ozone layer',
      'The Bretton Woods agreements, which set up fixed currency exchange rates',
      'The Green Revolution, which spread high-yield seeds and chemical fertilizers',
      'The Kyoto Protocol and Paris Agreement, which set targets for cutting emissions',
    ],
    correctAnswer: 3,
    explanation:
      'The Kyoto Protocol (1997) and Paris Agreement (2015) committed states to limit greenhouse-gas emissions. The Montreal Protocol is the strongest trap because it was also a global environmental agreement, but it addressed ozone-depleting chemicals rather than carbon dioxide.',
    topic: 'unit-9-globalization',
  },

  /* ============ SET 20: Universal Declaration of Human Rights (Unit 9) ============ */
  {
    type: 'mcq',
    stimulus: SRC_UDHR,
    question: 'The declaration was adopted most directly in response to',
    options: [
      'the collapse of the Soviet Union and the end of the Cold War',
      'the outbreak of the Korean War between North and South Korea',
      'mass atrocities of the Second World War, including the Holocaust',
      'the Great Depression, which had pushed many states toward free trade',
    ],
    correctAnswer: 2,
    explanation:
      'The UN adopted the declaration in 1948, as the world confronted the Holocaust and other wartime atrocities. The Korean War began in 1950, two years after the declaration was adopted.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    stimulus: SRC_UDHR,
    question: 'Compared with the 1789 Declaration of the Rights of Man and of the Citizen, the 1948 declaration',
    options: [
      'grounded rights in religious law rather than in human reason and conscience',
      'limited its protections to citizens of the nations that had won the Second World War',
      'used similar natural-rights language but applied it to humanity rather than one nation\'s citizens',
      'was binding international law that overrode the constitutions of UN member states',
    ],
    correctAnswer: 2,
    explanation:
      'Both documents declare people "born free and equal" in rights, but the 1948 text speaks of "all human beings" rather than male citizens of one nation. The binding-law explanation is wrong because the declaration was a statement of principles, not a treaty that overrode national constitutions.',
    topic: 'unit-9-globalization',
  },
]
