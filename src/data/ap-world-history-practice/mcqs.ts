import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 55 stimulus-based AP World History MCQs modeled on the College Board
 * AP World History: Modern Course and Exam Description practice exam.
 *
 * Distribution (matches CB unit weighting roughly):
 *   Unit 1 (Global Tapestry, 1200–1450)            6 questions
 *   Unit 2 (Networks of Exchange, 1200–1450)       6 questions
 *   Unit 3 (Land-Based Empires, 1450–1750)         6 questions
 *   Unit 4 (Transoceanic Connections, 1450–1750)   7 questions
 *   Unit 5 (Revolutions, 1750–1900)                6 questions
 *   Unit 6 (Industrialization, 1750–1900)          7 questions
 *   Unit 7 (Global Conflict, 1900–present)         7 questions
 *   Unit 8 (Cold War & Decolonization, 1945–1991)  5 questions
 *   Unit 9 (Globalization, 1900–present)           5 questions
 */
export const MCQS: MCQItem[] = [
  /* ============== UNIT 1: GLOBAL TAPESTRY (1200–1450) ============== */
  {
    type: 'mcq',
    question:
      'In the eleventh and twelfth centuries, the Song dynasty produced more iron than any state would until eighteenth-century Britain, used woodblock printing to disseminate civil-service exam manuals, and minted enough copper coins to support the world\'s first widespread paper money.\n\nWhich of the following best explains the developments described above?',
    options: [
      'The expansion of state-supported infrastructure and commercial networks under the Song fueled productivity gains across the empire.',
      'The collapse of the Tang allowed regional warlords to monopolize iron production and currency for tribute payments to nomads.',
      'Mongol overlords introduced new metallurgical and printing techniques that Song officials adapted for civilian use.',
      'Confucian reformers banned private commerce, forcing all production into more efficient state-managed workshops in the capital.',
    ],
    correctAnswer: 0,
    explanation:
      'Song commercialization, state investment in iron and printing, and the issuance of jiaozi paper money drove the productivity boom described. The Mongols had not yet conquered Song China; the Tang collapse predates these developments by roughly two centuries; and Confucian doctrine in this period encouraged, rather than banned, commerce.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    question:
      '"I traveled from Tangier to the Mali empire, from Constantinople to Sumatra, and was received as a learned man at every Friday mosque. Wherever Muslims rule, the law of God is one."\n— Ibn Battuta, Rihla, c. 1355\n\nThe passage best illustrates which of the following developments in Afro-Eurasia between 1200 and 1450?',
    options: [
      'The replacement of regional legal traditions by a single centralized caliphal court system based in Cairo.',
      'The role of shared Islamic institutions in facilitating long-distance travel and exchange across Afro-Eurasia.',
      'The use of Sufi pilgrimage routes to spread Islamic mysticism deep into the Korean peninsula and Japan.',
      'The decline of trans-Saharan commerce after the political fragmentation of the Almoravid empire in West Africa.',
    ],
    correctAnswer: 1,
    explanation:
      'The dar al-Islam created shared cultural, legal, and religious institutions (sharia, mosques, Arabic literacy, hospitality networks) that made elite Muslim travel and trade across Afro-Eurasia far easier — exactly the experience Ibn Battuta describes. There was no single caliphal court in 1355; Sufism did not penetrate East Asia by this route; and trans-Saharan trade was thriving under Mali.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    question:
      'By 1450, the Aztec capital Tenochtitlan housed roughly 200,000 people on an island connected to the mainland by causeways and supplied with food from chinampa agriculture and tribute from subject city-states.\n\nWhich Andean development is most directly comparable to the system described above?',
    options: [
      'The Incan use of mit\'a labor obligations and qollqa storehouses to support Cuzco and the royal court.',
      'The Mayan reliance on slash-and-burn agriculture managed by independent kingdoms in the Yucatan lowlands.',
      'The Chimú abandonment of large-scale irrigation in favor of pastoral economies on the northern coast.',
      'The Mississippian use of mound complexes to coordinate trans-Pacific trade with Polynesian voyagers.',
    ],
    correctAnswer: 0,
    explanation:
      'Both the Aztec tribute-and-chinampa system and the Inca mit\'a-and-storehouse system were imperial mechanisms for concentrating food and labor in a capital. The Maya and Chimú options misstate those societies\' actual economies, and the Mississippians had no Pacific contact.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    question:
      '"In our cathedrals, every window, every column, every carved figure pointed the unlettered worshipper toward heaven, while the bells regulated the labor of the surrounding fields."\n— Modern historian, describing thirteenth-century Western Europe\n\nThe passage best supports which of the following claims about European society between 1200 and 1450?',
    options: [
      'The Catholic Church organized cultural and economic life in much of Latin Christendom before the Reformation.',
      'European peasants in the High Middle Ages had largely abandoned Christianity in favor of folk religion.',
      'Cathedral construction in this period was funded almost entirely by Byzantine emperors based in Constantinople.',
      'The papacy in this era had renounced any claim to political authority over kings and secular rulers.',
    ],
    correctAnswer: 0,
    explanation:
      'The Catholic Church\'s integration of religious symbol, ritual, and economic timekeeping defined medieval European society — the central claim the passage illustrates. Christianity remained near-universal in Latin Europe; cathedrals were locally and royally funded; and papal political claims (e.g., Innocent III) reached their high point in this era.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    question:
      'The kingdom of Great Zimbabwe (c. 1100–1450) controlled trade in gold and ivory between the inland plateau and the Swahili Coast, and at its peak supported a stone-walled capital housing perhaps 18,000 people.\n\nThe development described above most directly illustrates which of the following?',
    options: [
      'The integration of sub-Saharan African states into Indian Ocean commercial networks before 1450.',
      'The dominance of Portuguese trading posts along the southeast African coast in the fourteenth century.',
      'The use of trans-Saharan caravan routes by Bantu-speaking states to import East Asian luxury goods.',
      'The political unification of all of southern Africa under a centralized Christian monarchy at Aksum.',
    ],
    correctAnswer: 0,
    explanation:
      'Great Zimbabwe\'s wealth came from feeding gold and ivory into the Swahili-Indian Ocean trade network — direct evidence of African integration into pre-Portuguese maritime commerce. The Portuguese arrived only after 1488; the route was Indian Ocean, not trans-Saharan; and Aksum was an earlier, distant Ethiopian kingdom.',
    topic: 'unit-1-global-tapestry',
  },
  {
    type: 'mcq',
    question:
      '"The samurai must above all keep constantly in mind, by day and by night, the manner in which he must die. If he dies in the right manner, his name will not be tarnished and he will live in the memory of men."\n— Yamamoto Tsunetomo, Hagakure, early 1700s (recalling earlier samurai ideals)\n\nThe passage reflects which of the following features of Japanese society in the period 1200–1450?',
    options: [
      'The decentralized political order in which warrior elites held land in return for military service to a regional lord.',
      'A pacifist Buddhist consensus that prohibited warriors from carrying swords or engaging in combat under any circumstances.',
      'The replacement of the imperial court by a centralized Confucian bureaucracy modeled on the Tang dynasty.',
      'The dominance of merchant guilds, which had largely displaced both samurai and aristocracy by 1300.',
    ],
    correctAnswer: 0,
    explanation:
      'Medieval Japan under the Kamakura and early Ashikaga shogunates was a feudal system in which samurai held land in return for service to daimyo or the shogun — paralleling European feudalism. The other options describe systems Japan did not have in this period.',
    topic: 'unit-1-global-tapestry',
  },

  /* ============ UNIT 2: NETWORKS OF EXCHANGE (1200–1450) ============ */
  {
    type: 'mcq',
    question:
      '"Genghis Khan organized his empire into a system of relay stations called the yam, where messengers could change horses every twenty-five miles, carrying news from Karakorum to Persia in weeks rather than months."\n\nThe system described most directly contributed to which of the following?',
    options: [
      'The intensification of commercial and cultural exchange across Eurasia during the Pax Mongolica.',
      'The decline of Indian Ocean maritime trade as overland routes captured most long-distance Asian commerce.',
      'The conversion of all Mongol subjects to Tibetan Buddhism through standardized state-run religious schools.',
      'The independent invention of the European printing press by Mongol envoys returning from East Asia.',
    ],
    correctAnswer: 0,
    explanation:
      'Yam relay stations, secured caravan routes, and Mongol patronage of merchants intensified Silk Road exchange in the thirteenth and fourteenth centuries. Indian Ocean trade actually grew in this period; the Mongols never converted en masse to Tibetan Buddhism; and the European press has separate origins.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    question:
      'Between 1200 and 1450, Swahili city-states such as Kilwa and Mombasa exported gold, ivory, and enslaved people in exchange for Chinese porcelain, Indian cotton textiles, and Arabian glassware.\n\nThe pattern of exchange described best supports which of the following claims about the Indian Ocean network?',
    options: [
      'It depended on European naval escorts based in Goa to protect cargo from East African piracy.',
      'It linked African producers to Asian manufactured goods through monsoon-driven seasonal shipping.',
      'It collapsed after the introduction of the magnetic compass disrupted older Arab sailing routes.',
      'It was monopolized by a single state that taxed all incoming vessels at the port of Calicut.',
    ],
    correctAnswer: 1,
    explanation:
      'Indian Ocean trade was structured around the monsoon winds and connected African raw materials to Asian finished goods through Swahili, Arab, Gujarati, and Chinese merchants. Europeans did not arrive until 1498; the compass enabled, rather than disrupted, navigation; and no single state monopolized the network.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    question:
      'Mansa Musa\'s 1324 hajj reportedly distributed so much gold in Cairo that the local price of gold there fell for more than a decade.\n\nThis anecdote is most useful as evidence for which of the following?',
    options: [
      'The Mali empire\'s command of West African gold supplies and its integration into broader Afro-Eurasian networks.',
      'The collapse of Mamluk Egyptian currency reserves following the Mongol Ilkhanate\'s invasions of Syria.',
      'The Portuguese diversion of West African gold around the Cape of Good Hope to circumvent Cairo.',
      'The replacement of cowrie shells by minted gold dinars throughout sub-Saharan African marketplaces.',
    ],
    correctAnswer: 0,
    explanation:
      'The story illustrates Mali\'s wealth from the Bambuk and Bure goldfields and its integration into the Islamic world via the hajj and trans-Saharan trade. Mamluk Egypt was politically stable in 1324; the Portuguese arrived in West Africa more than a century later; and cowries remained the dominant small-change currency.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    question:
      'Between 1346 and 1353, the bubonic plague killed an estimated one-third of Europe\'s population, devastated the populations of Egypt and the Levant, and disrupted commerce from Crimea to England.\n\nThe rapid spread of the Black Death is most directly attributable to which of the following developments of the preceding century?',
    options: [
      'The expansion of trans-regional trade routes secured under the Mongol khanates of Eurasia.',
      'The Portuguese reconnaissance voyages that opened a sea route to Asia around southern Africa.',
      'The introduction of trans-Atlantic slave shipping between West Africa and the Caribbean.',
      'The Ming dynasty\'s ban on private maritime trade with Southeast Asia after Zheng He\'s voyages.',
    ],
    correctAnswer: 0,
    explanation:
      'Plague bacillus traveled along the same Mongol-secured Silk Road and Black Sea routes that carried silks and silver. Portuguese voyages and the trans-Atlantic trade post-date the Black Death by 150 years, and Ming maritime restrictions are also later.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    question:
      'The Polynesian double-hulled canoe, the Arab dhow with its lateen sail, and the Chinese junk with its watertight bulkheads were all in widespread use by 1300.\n\nThe technologies listed best support which of the following generalizations about the period 1200–1450?',
    options: [
      'Maritime exchange across the world\'s oceans depended on a variety of regional shipbuilding and navigational traditions.',
      'A single global standard for ship construction had emerged by 1300, centered on shipyards in Venice and Genoa.',
      'European caravels dominated long-distance commerce on the Pacific and Indian Oceans before 1400.',
      'Most maritime cargo before 1450 was carried in galleys rowed by enslaved laborers chained to oars.',
    ],
    correctAnswer: 0,
    explanation:
      'The point is regional diversity: Polynesians, Arabs, and Chinese had independently developed sophisticated ocean-going vessels suited to their waters and trades. There was no single standard, no European caravel presence in the Indian Ocean before 1498, and most long-distance bulk cargo went by sail, not galley.',
    topic: 'unit-2-networks-of-exchange',
  },
  {
    type: 'mcq',
    question:
      '"In the year 1405, the eunuch admiral Zheng He set sail with a fleet of more than 300 ships, some over 400 feet long, carrying as many as 28,000 men, bearing imperial gifts to courts as far away as Calicut, Hormuz, and Malindi."\n\nThe Zheng He voyages are best understood as evidence for which of the following?',
    options: [
      'The Ming use of large-scale state-sponsored maritime expeditions to project tributary diplomacy across the Indian Ocean.',
      'A Ming attempt to colonize East Africa and divert Indian Ocean trade through new Chinese settlements at Malindi.',
      'The continuation of Mongol naval policy aimed at conquering Japan, Java, and the Vijayanagara empire by force.',
      'The discovery of the Americas by Chinese mariners decades before the voyages of Christopher Columbus in 1492.',
    ],
    correctAnswer: 0,
    explanation:
      'Zheng He\'s expeditions enrolled foreign rulers in the Ming tributary system and broadcast imperial prestige; they did not establish colonies, conquer foreign states, or reach the Americas. They were ended by the Ming court after 1433.',
    topic: 'unit-2-networks-of-exchange',
  },

  /* ============ UNIT 3: LAND-BASED EMPIRES (1450–1750) ============ */
  {
    type: 'mcq',
    question:
      'Boys taken in the Ottoman devshirme were collected from Christian villages in the Balkans, converted to Islam, trained at the palace school, and assigned either to the elite Janissary corps or to high administrative office.\n\nThe system described best illustrates which Ottoman strategy?',
    options: [
      'A reliance on hereditary Turkic aristocrats to staff the central imperial bureaucracy in Istanbul.',
      'The use of an enslaved corps personally loyal to the sultan to bypass rival Turkic noble families.',
      'The outsourcing of imperial tax collection to French and Venetian merchant houses in the Aegean.',
      'A recruitment policy that drew administrators only from established Sunni Arab clerical families.',
    ],
    correctAnswer: 1,
    explanation:
      'Devshirme created the kapikulu, an enslaved-by-status administrative and military corps loyal directly to the sultan, deliberately counterbalancing the Turkic timar-holding aristocracy. The other options describe practices the Ottomans avoided or used only marginally.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    question:
      'The Mughal emperor Akbar (r. 1556–1605) abolished the jizya tax on non-Muslims, married a Rajput princess, and convened debates among Sunni, Shia, Hindu, Jain, Zoroastrian, and Jesuit scholars at Fatehpur Sikri.\n\nAkbar\'s actions are best understood as an attempt to:',
    options: [
      'Convert his Hindu majority subjects to Sunni Islam through the persuasive power of public theological debate.',
      'Build political legitimacy across diverse religious communities in a large land-based agrarian empire.',
      'Adopt European Christianity as the official faith of the Mughal court at the urging of Jesuit missionaries.',
      'Restore the orthodox Sunni religious practices of the earlier Delhi Sultanate against popular Hindu opinion.',
    ],
    correctAnswer: 1,
    explanation:
      'Akbar\'s sulh-i kul ("universal peace") policies were aimed at consolidating rule over a religiously diverse subcontinent. He did not seek mass conversion, did not adopt Christianity despite hosting Jesuits, and explicitly broke from earlier Delhi Sultanate orthodoxy.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    question:
      'In 1501 the Safavid ruler Shah Ismail declared Twelver Shia Islam the state religion of Iran, executing or exiling Sunni clerics who refused to convert.\n\nWhich of the following was a long-term consequence of this policy?',
    options: [
      'Persistent religious conflict between the Safavid and Ottoman empires along their shared Mesopotamian frontier.',
      'The conversion of the Mughal court to Twelver Shia Islam under the later emperor Aurangzeb.',
      'The unification of the major Islamic empires under a single revived caliph based in Safavid Isfahan.',
      'The complete withdrawal of Iranian merchants from the Indian Ocean trading network after 1600.',
    ],
    correctAnswer: 0,
    explanation:
      'Safavid Shi\'ism produced a durable Sunni–Shia divide that drove repeated Ottoman–Safavid wars (e.g., Chaldiran 1514, the Treaty of Zuhab 1639). The Mughals remained Sunni (Aurangzeb especially); no unified caliphate emerged; Iran continued participating in Indian Ocean trade.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    question:
      '"Cannons of bronze, three braces in length, were mounted on the walls of the new fortress and along every gate. From these, the sultan\'s gunners broke the ancient walls of Constantinople in fifty-three days."\n— Greek chronicler, c. 1453\n\nThe events described in the passage most directly illustrate which of the following long-term changes?',
    options: [
      'The role of gunpowder weapons in enabling the consolidation and expansion of large land-based empires.',
      'The replacement of permanent imperial armies by smaller mercenary infantry units across western Eurasia.',
      'The decline of long-distance trade routes between the Mediterranean and the Black Sea after the fall of Byzantium.',
      'The voluntary surrender of European fortifications to Ottoman authority following the spread of cannon technology.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1453 fall of Constantinople is the canonical example of the gunpowder revolution that helped Ottomans, Safavids, Mughals, Ming, and Russians build large early modern empires. The other options describe trends inconsistent with the historical record.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    question:
      'Russian tsars from Ivan IV (r. 1547–1584) onward expanded eastward across Siberia, granting noble landowners (boyars) the right to bind peasants to the land in return for service to the crown.\n\nThe arrangement described best supports which of the following claims about early modern Russian society?',
    options: [
      'Russian state-building relied on a service nobility supported by a coerced agricultural labor force.',
      'Russian peasants in this period enjoyed greater legal mobility than peasants in contemporary Western Europe.',
      'Russian tsars systematically dismantled noble landholding in favor of independent free-farmer communities.',
      'Russian eastward expansion depended on volunteer urban merchant corps rather than the rural nobility.',
    ],
    correctAnswer: 0,
    explanation:
      'Tsarist Russia tied serfdom to military and administrative service obligations from the boyar nobility — the opposite of trends in Western Europe, where serfdom was weakening. The other options reverse the historical pattern.',
    topic: 'unit-3-land-based-empires',
  },
  {
    type: 'mcq',
    question:
      'Louis XIV of France (r. 1643–1715) housed thousands of nobles at his palace at Versailles, where elaborate court ceremony required the nobility\'s daily attendance on the king.\n\nThe practice described above is best understood as an example of which of the following early modern strategies?',
    options: [
      'A monarchical effort to centralize political authority by reducing the independent power of the high nobility.',
      'The voluntary delegation of executive authority by the king to the regional parlements of Bordeaux and Toulouse.',
      'A Catholic Counter-Reformation policy aimed at converting Huguenot nobles to Calvinist Protestantism.',
      'A systematic program of land redistribution from the crown to peasant households in the surrounding villages.',
    ],
    correctAnswer: 0,
    explanation:
      'Versailles was a tool of absolutist centralization: by ritualizing court life Louis XIV neutralized the political independence of the high nobility — the same logic Akbar used at Fatehpur Sikri or the Ottomans used with the devshirme. The other options describe the opposite of his policy.',
    topic: 'unit-3-land-based-empires',
  },

  /* ========== UNIT 4: TRANSOCEANIC CONNECTIONS (1450–1750) ========== */
  {
    type: 'mcq',
    question:
      'Within a century of 1492, maize and sweet potatoes were grown across southern China, the potato had become a staple in the Andes and Ireland, and roughly ninety percent of the pre-contact population of the Americas had died.\n\nThe developments described best illustrate which of the following?',
    options: [
      'The biological and demographic transformations of the Columbian Exchange across the Atlantic basin.',
      'The success of Spanish missionaries in introducing European agricultural techniques to indigenous farmers.',
      'The decline of Afro-Eurasian populations because of new staple crops imported from the American interior.',
      'The replacement of indigenous Andean foodways by exclusively European wheat and barley grains.',
    ],
    correctAnswer: 0,
    explanation:
      'New World crops fed Old World population booms while Old World pathogens devastated Native American populations — the canonical Columbian Exchange. Option B understates disease; C reverses the actual demographic effect on Eurasia; D contradicts the continued centrality of potatoes and maize in Andean diets.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      'By 1700, sugar plantations on Barbados, Saint-Domingue, and Brazil consumed roughly two-thirds of all enslaved Africans transported across the Atlantic.\n\nThis pattern most directly supports which of the following claims?',
    options: [
      'Plantation cash crops were the primary economic driver of the trans-Atlantic slave trade.',
      'The encomienda system required African labor because indigenous populations were legally protected by 1500.',
      'European demand for African gold consistently outstripped European demand for plantation field labor.',
      'Most enslaved Africans were transported to North American tobacco colonies along the Chesapeake Bay.',
    ],
    correctAnswer: 0,
    explanation:
      'Caribbean and Brazilian sugar drove the largest share of the trans-Atlantic slave trade. Encomienda was largely a Spanish-mainland institution that predates the sugar peak; gold demand was secondary; and only about five percent of enslaved Africans landed in mainland North America.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      'In 1602 the States General of the Netherlands granted the Dutch East India Company (VOC) the right to wage war, sign treaties, mint coins, and establish colonies throughout the Indian Ocean.\n\nThe charter described most directly reflects which of the following developments?',
    options: [
      'The use of joint-stock companies as semi-sovereign agents of European overseas commercial expansion.',
      'A general decline of state authority in Europe in favor of independent merchant republics on the continent.',
      'The Dutch decision to abandon Asian trade in favor of plantation agriculture in the Atlantic basin.',
      'The establishment of free-trade norms guaranteed by neutral pan-European international institutions.',
    ],
    correctAnswer: 0,
    explanation:
      'Joint-stock chartered companies (VOC, English EIC) were the institutional innovation that allowed states to project armed commercial power overseas at low public cost. The Dutch state remained strong, expanded in Asia, and the VOC pursued monopoly by force — the opposite of free trade.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      'Spanish colonial officials at the silver mines of Potosí drafted thousands of indigenous Andean men annually under a modified form of the Inca mit\'a labor obligation.\n\nThe example best supports which of the following generalizations about labor in the early modern period?',
    options: [
      'European empires often adapted preexisting indigenous institutions to extract American resources.',
      'Indigenous labor systems disappeared everywhere European empires established colonial control.',
      'Silver mining in the Americas relied primarily on enslaved African labor by the year 1600.',
      'The encomienda was abolished by royal decree before any Spanish silver actually reached Europe.',
    ],
    correctAnswer: 0,
    explanation:
      'Potosí is the textbook case of Spanish adaptation of an Inca institution (mit\'a) for colonial extraction. African slavery was central in Caribbean sugar but not in Andean silver; encomienda persisted into the sixteenth century alongside the silver trade; indigenous labor obviously did not disappear.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      '"Although the soil and climate of New Spain are well suited to the cultivation of European wheat, the Indians prefer their maize, and so the colony exports its silver bullion to Manila in exchange for the silks and porcelains of China."\n— Spanish colonial official, c. 1620\n\nThe trade pattern described in the passage best illustrates which of the following?',
    options: [
      'The integration of the Americas into a global silver-based commercial network linking Europe, the Americas, and Asia.',
      'The Spanish ban on direct trade between New Spain and the Asian markets controlled by Ming China.',
      'The tendency of indigenous American consumption to drive most early-modern trans-Pacific bulk shipping volume.',
      'The decline of Chinese demand for American silver after the Ming dynasty\'s shift to a paper-currency tax system.',
    ],
    correctAnswer: 0,
    explanation:
      'The Manila galleon trade is the textbook case of American silver tying together a global economy. Spain authorized (not banned) the Acapulco–Manila run; trans-Pacific cargo was driven by Spanish, not indigenous, demand; and Ming China actually intensified silver demand under the Single Whip tax reforms.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      'Between 1500 and 1700, an estimated 80 percent of the silver mined in the Americas eventually reached China, often via Manila or via the Cape of Good Hope.\n\nWhich of the following best explains this trans-Pacific and trans-Eurasian flow of silver?',
    options: [
      'Chinese demand for silver to monetize taxation and commerce sustained an exceptionally high price for silver in East Asia.',
      'The Spanish crown deliberately devalued silver in the Americas to reduce inflation in metropolitan Madrid and Seville.',
      'Mughal emperors imported large quantities of American silver to finance their conquest of Ming Beijing in the 1640s.',
      'European bullionist monarchs systematically banned the export of silver to Asia after the Treaty of Tordesillas in 1494.',
    ],
    correctAnswer: 0,
    explanation:
      'Ming and Qing tax monetization (especially the Single Whip reforms) created sustained demand that pulled silver east. Spanish policy did not deliberately devalue silver; the Mughals never invaded Ming Beijing; and bullionist policies tried to retain — not export — silver, but Chinese demand pulled it to Asia anyway.',
    topic: 'unit-4-transoceanic-connections',
  },
  {
    type: 'mcq',
    question:
      'Maroon communities in seventeenth-century Brazil and Jamaica were settlements established by escaped enslaved Africans who often defended their independence by force for decades and sometimes negotiated treaties with colonial governments.\n\nThe existence of maroon communities is most useful as evidence of which of the following?',
    options: [
      'Resistance by enslaved peoples that imposed real military and political costs on Atlantic plantation regimes.',
      'A general policy of colonial governments to grant freedom to all African captives upon arrival in the Americas.',
      'The replacement of plantation agriculture by smallholder farming in the seventeenth-century Caribbean basin.',
      'The willingness of European empires to abolish slavery throughout their colonies by the end of the 1600s.',
    ],
    correctAnswer: 0,
    explanation:
      'Maroon communities (Palmares in Brazil; the Jamaican Maroons) demonstrate sustained, organized resistance that forced colonial states to negotiate or fight protracted wars. The other options describe policies that would not occur for one to two more centuries.',
    topic: 'unit-4-transoceanic-connections',
  },

  /* ============== UNIT 5: REVOLUTIONS (1750–1900) ============== */
  {
    type: 'mcq',
    question:
      '"Men are born and remain free and equal in rights. Social distinctions may be founded only on the common utility."\n— Declaration of the Rights of Man and of the Citizen, France, 1789\n\nThe principles expressed in the passage most directly drew upon which of the following?',
    options: [
      'Enlightenment theories of natural rights and popular sovereignty articulated by writers such as Locke and Rousseau.',
      'Catholic doctrines of divine-right monarchy reaffirmed at the sixteenth-century Council of Trent in northern Italy.',
      'Mercantilist arguments about the economic value of a productive peasantry to the early modern royal treasury.',
      'Confucian principles of hierarchical social harmony adapted from the imperial examination system in Qing China.',
    ],
    correctAnswer: 0,
    explanation:
      'The Declaration\'s language directly reflects Enlightenment natural-rights theory (Locke, Rousseau) and explicitly rejects the divine-right, mercantilist, and hierarchical frameworks listed in the other options.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    question:
      'By 1804 formerly enslaved people in Saint-Domingue had defeated French, Spanish, and British armies and declared the independent state of Haiti.\n\nThe Haitian Revolution is most significant in world history for which of the following reasons?',
    options: [
      'It produced the first independent state in the Americas in which formerly enslaved people held political power.',
      'It restored the pre-revolutionary plantation system under indigenous Taíno leadership across the island.',
      'It prompted the immediate legal abolition of chattel slavery throughout the entire Atlantic world.',
      'It led directly to the political unification of mainland Latin America under the leadership of Simón Bolívar.',
    ],
    correctAnswer: 0,
    explanation:
      'Haiti was the first state founded by a successful slave revolt and the second independent republic in the Americas. The plantation system was dismantled, abolition elsewhere came decades later, and Bolívar\'s campaigns were a separate (though Haitian-aided) movement.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    question:
      'Both the American Revolution (1776) and the Mexican War of Independence (1810–1821) produced independent republics, but the social composition of each movement\'s leadership differed in important ways.\n\nWhich of the following best identifies that difference?',
    options: [
      'American leaders were primarily British-born aristocrats; Mexican leaders were peninsular-born Catholic clergy from Spain.',
      'American leaders were colonial-born merchants and planters; Mexican leadership shifted from creole priests to creole military officers.',
      'American leaders were enslaved laborers organizing on plantations; Mexican leaders were serving Spanish viceroys in Mexico City.',
      'Both revolutions were led by indigenous councils that displaced European settlers and restored pre-conquest forms of government.',
    ],
    correctAnswer: 1,
    explanation:
      'U.S. founders were colonial-born elites — creoles, in Latin American terms — drawn from merchant and planter classes. Mexican independence began with creole priests Hidalgo and Morelos and was completed by creole military officers like Iturbide.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    question:
      '"It is the duty of woman to demand her place at the side of man in every domain of human activity, from the schoolroom to the legislative chamber."\n— Olympe de Gouges, Declaration of the Rights of Woman, 1791\n\nThe argument advanced in this passage is best understood as a response to which of the following?',
    options: [
      'The exclusion of women from the political rights claimed in male revolutionary documents of the late eighteenth century.',
      'A papal decree confining female religious orders to cloistered convents in Catholic territories of southern Europe.',
      'The expansion of women\'s suffrage to all literate adult women throughout French-controlled territories in 1789.',
      'The Napoleonic Civil Code\'s grant of equal property and divorce rights to husbands and wives across France.',
    ],
    correctAnswer: 0,
    explanation:
      'De Gouges directly criticized the 1789 Declaration of the Rights of Man for excluding women, the dominant pattern of the era\'s revolutionary documents. Female suffrage was not granted, and the later Napoleonic Code actually restricted women\'s legal rights.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    question:
      'Between 1810 and 1830, José de San Martín, Simón Bolívar, and other creole-led armies won independence for nearly all of Spain\'s mainland American colonies, producing roughly a dozen new republics.\n\nThe Latin American wars of independence are best understood in the context of which of the following developments?',
    options: [
      'The Atlantic-world spread of Enlightenment political ideas combined with creole resentment of peninsular Spanish control.',
      'The voluntary withdrawal of Spanish authority from the Americas at the urging of Pope Pius VII in Rome.',
      'A coordinated indigenous uprising that abolished private landownership across the entire Andean and Mesoamerican regions.',
      'The military intervention of the United Kingdom\'s Royal Navy on behalf of restored Bourbon authority in Madrid.',
    ],
    correctAnswer: 0,
    explanation:
      'Latin American independence was driven by Atlantic Enlightenment politics plus creole frustration at peninsular monopolies, accelerated by Napoleon\'s 1808 invasion of Spain. The other options either invert the historical record or invent events that did not happen.',
    topic: 'unit-5-revolutions',
  },
  {
    type: 'mcq',
    question:
      'In 1861 Tsar Alexander II issued an Emancipation Manifesto formally freeing more than 23 million Russian serfs, while requiring them to make redemption payments to their former landlords for decades afterward.\n\nThe reform described is most usefully compared with which of the following?',
    options: [
      'The U.S. emancipation of enslaved people in the 1860s, which similarly freed people from coerced labor without securing land or capital for them.',
      'The Mexican Revolution of 1910, which redistributed all hacienda land to landless peasants within five years of its outbreak.',
      'The British abolition of the slave trade in 1807, which immediately ended chattel slavery throughout the British empire.',
      'The Meiji Restoration in Japan, which abolished the Tokugawa shogunate by granting universal male suffrage in 1868.',
    ],
    correctAnswer: 0,
    explanation:
      'Russian emancipation and U.S. emancipation are the canonical paired example of nineteenth-century legal freedom granted without meaningful land or economic security. The Mexican land reform was slow and partial; British 1807 abolished the trade only (slavery itself ended in 1833); and Meiji did not grant universal suffrage.',
    topic: 'unit-5-revolutions',
  },

  /* =============== UNIT 6: INDUSTRIALIZATION (1750–1900) =============== */
  {
    type: 'mcq',
    question:
      'Between 1750 and 1850, Britain\'s coal output rose more than tenfold, its raw-cotton imports rose more than twentyfold, and its urban population grew from roughly twenty percent to more than fifty percent of the total.\n\nWhich combination of factors best explains the developments described above?',
    options: [
      'Access to coal and colonial raw materials, combined with new mechanized factory production in textiles and metallurgy.',
      'State-mandated price controls that forced rural agricultural laborers into urban guild workshops in the Midlands.',
      'The replacement of steam engines by waterwheels in cotton manufacturing and large-scale ironworking after 1800.',
      'The opening of British markets to large quantities of Qing manufactured silk, porcelain, and finished cotton textiles.',
    ],
    correctAnswer: 0,
    explanation:
      'British industrialization rested on domestic coal, colonial cotton from India and the U.S. South, and factory mechanization. There were no such price controls; steam replaced (not vice versa) waterwheels; and Britain ran a large deficit, not a surplus, with Qing China.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      'At the Berlin Conference of 1884–1885, European powers established formal rules for partitioning Africa among themselves without inviting any African representatives to the negotiations.\n\nThe Berlin Conference is best understood as a response to which of the following?',
    options: [
      'The Scramble for Africa following industrial demand for raw materials and strategic coaling stations.',
      'African requests for European arbitration of internal succession disputes among Sahelian dynasties.',
      'The collapse of the trans-Atlantic slave trade and the need to compensate displaced European traders.',
      'The unification of Italy and Germany, which removed European interest in further overseas colonization.',
    ],
    correctAnswer: 0,
    explanation:
      'Berlin formalized the late-nineteenth-century race for African resources, ports, and prestige driven by industrial economies. Africans did not invite European arbitration; the slave trade had ended decades earlier; and unification actually increased European competition for colonies.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      'After defeating Qing China in the First Opium War, Britain compelled the Qing to cede Hong Kong, open five "treaty ports," and grant British subjects extraterritorial legal rights in Chinese cities.\n\nThe Treaty of Nanjing (1842) best exemplifies which of the following nineteenth-century developments?',
    options: [
      'The use of "unequal treaties" to integrate non-European states into European-dominated trade systems on disadvantageous terms.',
      'The reciprocal opening of major British ports to Qing imperial commissioners under matching extraterritorial guarantees.',
      'The voluntary Qing adoption of free-trade economic policy under the influence of Confucian reform ministers in Beijing.',
      'The end of European imperialism in East Asia following decisive Qing land victories over British and French forces.',
    ],
    correctAnswer: 0,
    explanation:
      'The "unequal treaties" pattern (Nanjing 1842, Tianjin 1858, Shimonoseki 1895) is the textbook example of nineteenth-century economic imperialism. British ports were not opened reciprocally, the Qing did not voluntarily liberalize, and the Qing lost the war.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      'Between 1868 and 1890, the Meiji government in Japan abolished the samurai class, built a national rail network, established compulsory primary education, and adopted a Prussian-style constitution.\n\nThe Meiji reforms are best understood as an example of which of the following?',
    options: [
      'Defensive modernization aimed at preventing semi-colonial subordination by the Western industrial powers.',
      'The forced imposition of European political institutions by an occupying American military government.',
      'A Confucian rejection of foreign technology in favor of restoring traditional Tokugawa shogunate governance.',
      'A peasant-led revolution that abolished the imperial throne and replaced it with a parliamentary republic.',
    ],
    correctAnswer: 0,
    explanation:
      'Meiji leaders consciously borrowed Western institutions to escape the unequal-treaty fate of Qing China — the canonical "defensive modernization." Japan was not occupied; the reforms reversed Tokugawa policy; and the emperor was elevated rather than abolished.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      '"The factory system tears asunder the family. The mother is at her loom in the mill, the father is in the mine, the children are at the spinning frame for twelve hours a day, and there is no longer such a thing as the peasant household."\n— English social reformer, 1843\n\nThe author\'s observations most directly support which of the following claims about the Industrial Revolution?',
    options: [
      'Industrialization restructured family economies by separating workplace and household and drawing women and children into wage labor.',
      'Industrialization left the structure of the rural peasant household entirely unchanged across nineteenth-century Britain.',
      'Industrialization eliminated wage labor for women and children by enforcing strict family-only artisan workshops.',
      'Industrialization slowed urban migration by anchoring families to traditional rural village landholdings throughout the period.',
    ],
    correctAnswer: 0,
    explanation:
      'The passage describes the canonical separation of work from home and the entry of women and children into the industrial wage workforce, with rapid urbanization. The other options invert the historical pattern.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      '"From each according to his ability, to each according to his needs."\n— Karl Marx, Critique of the Gotha Program, 1875\n\nMarx\'s slogan is best understood in the context of which of the following nineteenth-century developments?',
    options: [
      'The growth of industrial wage labor and the emergence of socialist critiques of capitalist political economy.',
      'The establishment of constitutional monarchies modeled on Japan\'s Meiji constitution across continental Europe.',
      'A general consensus among nineteenth-century European industrialists that private property must be abolished by 1880.',
      'The successful implementation of Marx\'s program by working-class revolutions in Britain, Germany, and France before 1900.',
    ],
    correctAnswer: 0,
    explanation:
      'Marxism arose as a response to the inequalities and dislocations of nineteenth-century industrial capitalism. The Meiji constitution did not influence Europe; industrialists overwhelmingly defended private property; and no successful working-class revolution occurred in those countries before 1900.',
    topic: 'unit-6-industrialization',
  },
  {
    type: 'mcq',
    question:
      'The Sepoy Rebellion of 1857 was triggered in part by the issuance of new rifle cartridges greased with cow and pig fat, offending Hindu and Muslim sepoys serving in the British East India Company\'s army.\n\nThe long-term political consequence of the rebellion in India was:',
    options: [
      'The transfer of governing authority over India from the East India Company to direct British Crown rule under the British Raj.',
      'The withdrawal of all British troops from the Indian subcontinent and the restoration of Mughal rule in Delhi after 1858.',
      'The voluntary federation of all princely states with the British Empire on terms guaranteeing immediate self-government.',
      'The creation of an independent Indian republic led by the Indian National Congress at the conclusion of the rebellion.',
    ],
    correctAnswer: 0,
    explanation:
      'After the rebellion, the Government of India Act of 1858 dissolved the East India Company\'s political role and placed India under direct Crown rule (the Raj). The other options describe outcomes that did not occur.',
    topic: 'unit-6-industrialization',
  },

  /* ============= UNIT 7: GLOBAL CONFLICT (1900–present) ============= */
  {
    type: 'mcq',
    question:
      'In 1914, a system of interlocking European alliances, naval rivalry between Britain and Germany, nationalist tensions in the Balkans, and rapid mobilization timetables converted a single assassination in Sarajevo into a continental war.\n\nThe passage most directly supports which of the following claims about the outbreak of World War I?',
    options: [
      'Long-term structural causes amplified the impact of a short-term triggering event in the summer of 1914.',
      'The assassination of Archduke Franz Ferdinand was an isolated cause unconnected to broader European tensions.',
      'Naval rivalry between France and Russia in the Mediterranean was the central driver of general mobilization.',
      'Balkan nationalism had been definitively resolved by the Congress of Berlin convened in 1878.',
    ],
    correctAnswer: 0,
    explanation:
      'The stimulus is the textbook MAIN-causes framing: alliances, militarism, imperialism, and nationalism made the Sarajevo trigger catastrophic. The other options either isolate the trigger, misidentify the rivalry, or contradict the persistent Balkan instability of the early 1910s.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      'During World War II, the Soviet Union relocated more than 1,500 factories east of the Ural Mountains, the United States rationed gasoline and rubber, and Britain conscripted women into industrial and agricultural labor.\n\nThe examples described above best illustrate which of the following?',
    options: [
      'The mobilization of civilian populations and economies as a defining feature of twentieth-century total war.',
      'The replacement of mass conscript armies by smaller professional volunteer forces in all the major Allied states.',
      'A general decline of state authority over private heavy industry in the Allied economies during wartime.',
      'The reliance of the Allied war effort on neutral American manufacturing throughout the entire global conflict.',
    ],
    correctAnswer: 0,
    explanation:
      'Total war is defined by mobilizing entire economies and societies, exactly what the stimulus describes. Conscription expanded; state direction of industry expanded; and the United States was a belligerent from December 1941, not a neutral supplier.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      'Between 1915 and 1923, Ottoman and successor governments deported and killed an estimated one million Armenians; between 1941 and 1945 Nazi Germany murdered roughly six million Jews; between 1975 and 1979 the Khmer Rouge killed roughly 1.7 million Cambodians.\n\nThese twentieth-century events are most often grouped together to illustrate which of the following?',
    options: [
      'The use of state power to target civilian populations defined by ethnicity, religion, or class identity.',
      'The role of European colonial militias in resisting decolonization movements after the Second World War.',
      'The unintended demographic effects of industrial famines caused by sudden agricultural collectivization.',
      'The displacement of populations across borders by climate-driven migration in the late twentieth century.',
    ],
    correctAnswer: 0,
    explanation:
      'All three are paradigmatic state-directed mass atrocities targeting identity-defined groups. The other options describe unrelated phenomena (counterinsurgency, famine, climate migration).',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      'In October 1917, Bolshevik forces under Lenin seized the Winter Palace in Petrograd, dispersed the Provisional Government, and announced "peace, land, and bread."\n\nWhich long-term world-historical consequence followed most directly from the events described?',
    options: [
      'The establishment of the world\'s first state-socialist government and a model for later twentieth-century revolutionary movements.',
      'The immediate restoration of the Romanov dynasty in St. Petersburg under joint British and French military protection.',
      'The withdrawal of Russia from World War I, which simultaneously ended the conflict on the Western and Italian fronts.',
      'The creation of a stable parliamentary democracy in Russia modeled directly on the British Westminster system.',
    ],
    correctAnswer: 0,
    explanation:
      'The October Revolution founded the Soviet state, which influenced revolutionary movements in China, Vietnam, Cuba, and elsewhere. The Romanovs were executed; Russia exited WWI but the Western Front continued until November 1918; and the regime that emerged was a one-party dictatorship.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      '"The peace of Versailles imposed on Germany the loss of all colonies, the loss of Alsace-Lorraine, the demilitarization of the Rhineland, and the payment of reparations valued at 132 billion gold marks."\n— Modern textbook summary\n\nThe terms described above are most directly connected to which of the following developments of the 1920s and 1930s?',
    options: [
      'The growth in Germany of nationalist movements that exploited grievances over the Treaty of Versailles to gain political power.',
      'The successful integration of Weimar Germany into a stable, French-led European security architecture by 1925.',
      'The economic recovery of post-war Germany, which by 1929 had overtaken the United States in industrial output.',
      'The voluntary disarmament of Britain, France, and Italy in solidarity with the demilitarized German Rhineland.',
    ],
    correctAnswer: 0,
    explanation:
      'Resentment of Versailles fed the rise of nationalist and fascist parties — most consequentially the Nazi Party — through the Weimar period. The other options invert the actual political and economic record.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      'In August 1945 the United States dropped atomic bombs on Hiroshima and Nagasaki, killing more than 100,000 civilians and prompting Japan\'s surrender within days.\n\nThe long-term world-historical significance of these events is best understood as:',
    options: [
      'The opening of the nuclear age, which subsequently structured strategic competition during the Cold War.',
      'The voluntary renunciation of nuclear weapons by all wartime belligerents under the United Nations Charter of 1945.',
      'The end of all interstate warfare between major powers from 1945 to the present in any region of the globe.',
      'The conversion of Imperial Japan into a permanent member of the United Nations Security Council in 1945.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1945 atomic bombings opened the nuclear age, the central feature of post-war great-power strategy. The UN Charter did not renounce nuclear weapons; major-power wars continued through proxies; and Japan was not given a UNSC permanent seat.',
    topic: 'unit-7-global-conflict',
  },
  {
    type: 'mcq',
    question:
      '"Patriotic women of Germany! The hour calls upon you. The Reich needs every able pair of hands to feed our soldiers and to make the shells that will defend our homes."\n— German recruitment poster, c. 1916\n\nThe poster is most useful as evidence of which of the following developments during the First World War?',
    options: [
      'The expansion of women\'s wage labor in industrial economies as part of total-war mobilization.',
      'A general European consensus that women should be excluded from any form of war-related employment.',
      'The Allied propaganda strategy of urging Central Powers women to refuse to support their nations\' war efforts.',
      'The disappearance of mass-produced printed propaganda from European public life during World War I.',
    ],
    correctAnswer: 0,
    explanation:
      'Both the Central and Allied powers expanded women\'s industrial and agricultural labor as part of total war — a pattern continued and intensified in WWII. The other options contradict the historical record.',
    topic: 'unit-7-global-conflict',
  },

  /* ======== UNIT 8: COLD WAR & DECOLONIZATION (1945–1991) ======== */
  {
    type: 'mcq',
    question:
      'Between 1950 and 1989, the United States and the Soviet Union avoided direct military confrontation but supplied opposing sides in conflicts in Korea, Vietnam, Angola, and Afghanistan.\n\nThe pattern described best illustrates which of the following Cold War features?',
    options: [
      'The use of proxy wars to pursue superpower competition without triggering direct nuclear escalation between the two states.',
      'The collapse of the United Nations as a credible forum for managing international conflict after the Korean War.',
      'The willingness of both superpowers to deploy strategic nuclear weapons in regional conflicts across the developing world.',
      'The successful neutrality of the Non-Aligned Movement in keeping these particular conflicts localized and limited.',
    ],
    correctAnswer: 0,
    explanation:
      'Proxy war is the textbook Cold War strategy that allowed superpower competition under the constraint of mutually assured destruction. The UN persisted; nuclear weapons were never used in combat after 1945; and non-alignment did not contain these specific conflicts.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    question:
      'In 1947 British India was partitioned into the independent states of India and Pakistan, triggering the displacement of an estimated fourteen million people and the deaths of hundreds of thousands in communal violence.\n\nThe events described are best understood in the context of which of the following twentieth-century processes?',
    options: [
      'The post-WWII decolonization of Asia and Africa, often accompanied by ethnic and religious conflict at independence.',
      'The expansion of the British Empire across South Asia in the immediate aftermath of the Second World War.',
      'The voluntary federation of South Asian states under the British Commonwealth\'s unified military command structure.',
      'The Cold War\'s direct partitioning of South Asia between Soviet and American military spheres of influence in 1947.',
    ],
    correctAnswer: 0,
    explanation:
      'Partition is a canonical example of post-1945 decolonization producing communal violence (compare Palestine 1948, Cyprus 1974, Rwanda-Burundi). Britain was contracting; partition was anything but voluntary; and superpower spheres did not draw the line.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    question:
      'After Ghana\'s independence in 1957, Kwame Nkrumah pursued state-led industrialization, pan-Africanist diplomacy with leaders such as Sékou Touré and Julius Nyerere, and a policy of nonalignment in the Cold War.\n\nNkrumah\'s program is most representative of which of the following postwar trends?',
    options: [
      'The use of state planning and pan-regional solidarity by newly independent states to assert political and economic autonomy.',
      'A widespread rejection by African states of all forms of socialism in favor of immediate free-market liberalization at home.',
      'The voluntary return of African economies to colonial trade arrangements with their former European metropoles.',
      'The formal alignment of most sub-Saharan African states with the Warsaw Pact under Soviet military leadership.',
    ],
    correctAnswer: 0,
    explanation:
      'State-led development plus nonalignment plus pan-Africanism is the textbook profile of mid-century newly independent states (Nkrumah, Nehru, Nasser, Sukarno, Tito). The other options describe the opposite of Nkrumah\'s actual policies.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    question:
      'In 1979 the Iranian Revolution overthrew the Shah and established an Islamic Republic under the leadership of the cleric Ayatollah Khomeini, who rejected both Western liberalism and Soviet communism.\n\nThe Iranian Revolution is most usefully cited as an example of which of the following late-twentieth-century developments?',
    options: [
      'The rise of religiously framed political movements as a major alternative to Cold War secular ideologies.',
      'The successful imposition of Soviet-style state atheism on a non-Western society during the late Cold War.',
      'The voluntary modernization of Middle Eastern states along the political model of postwar Western Europe.',
      'A general decline of religious participation worldwide that accelerated after the energy crises of the 1970s.',
    ],
    correctAnswer: 0,
    explanation:
      'Khomeini\'s revolution exemplifies political Islam (and parallels other late-twentieth-century religious-political movements). It was explicitly anti-Soviet and anti-Western, not pro-Soviet or pro-Western, and ran against the global trend the question describes in option D.',
    topic: 'unit-8-cold-war-decolonization',
  },
  {
    type: 'mcq',
    question:
      '"The Berlin Wall, after standing for twenty-eight years as the most visible symbol of the Cold War division of Europe, was breached on the night of November 9, 1989, by East Germans gathered at the gates."\n\nThe event described is best understood as part of which of the following?',
    options: [
      'The collapse of Soviet-aligned communist regimes in Eastern Europe leading to the end of the Cold War.',
      'The reunification of Germany under a Soviet-backed communist government that would dissolve in 1991.',
      'The integration of all NATO members into the Warsaw Pact after secret negotiations in late 1989.',
      'The construction of a second physical wall between West Germany and France during the early 1990s.',
    ],
    correctAnswer: 0,
    explanation:
      'The fall of the Berlin Wall is the iconic moment of the 1989 collapse of Eastern European communist regimes, which preceded German reunification (1990) and the dissolution of the USSR (1991). The other options describe events that did not happen.',
    topic: 'unit-8-cold-war-decolonization',
  },

  /* ============== UNIT 9: GLOBALIZATION (1900–present) ============== */
  {
    type: 'mcq',
    question:
      'By 2000, components for a single laptop computer might be designed in California, manufactured in Malaysia and Mexico, assembled in coastal China, and sold worldwide under a brand owned by a corporation headquartered in the United States.\n\nThe example described best illustrates which of the following late-twentieth-century developments?',
    options: [
      'The creation of global supply chains by multinational corporations seeking lower production costs and specialized labor.',
      'The retreat of major multinational firms into single-country production after the end of the Cold War in 1991.',
      'The replacement of container shipping by long-haul air freight as the dominant mode of intercontinental trade in goods.',
      'The general decline of intellectual-property protections in advanced industrial economies during the 1990s.',
    ],
    correctAnswer: 0,
    explanation:
      'Globalized supply chains, enabled by containerization, trade liberalization, and information technology, are a defining feature of late-twentieth-century globalization. Production fragmented (not concentrated); shipping remained dominant; IP protections expanded under TRIPS in 1994.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    question:
      'In 1980 the World Health Organization declared smallpox eradicated; since then, however, HIV/AIDS, SARS, and COVID-19 have caused global pandemics responsible for many millions of deaths.\n\nThe pattern described best supports which of the following claims about disease in the contemporary period?',
    options: [
      'International cooperation has eliminated some diseases, but accelerating global integration creates conditions for new pandemics.',
      'Pandemics in the modern era have been confined to regions that lack any access to modern public-health infrastructure.',
      'Mass vaccination programs have made the global spread of any new viral pandemic effectively impossible since 1980.',
      'A general decline of international trade and travel after 1980 sharply reduced the worldwide spread of infectious disease.',
    ],
    correctAnswer: 0,
    explanation:
      'WHO-coordinated cooperation eradicated smallpox, but accelerated travel, trade, urbanization, and ecological change have made novel zoonotic pandemics easier — the central tension of contemporary global health. The other options are factually wrong.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    question:
      'Between 1970 and 2020, the share of women in national legislatures worldwide rose from roughly four percent to roughly twenty-five percent, and the number of countries legally recognizing women\'s right to vote rose to nearly all sovereign states.\n\nThe trends described are best understood in the context of which of the following developments?',
    options: [
      'The expansion of international human-rights frameworks and transnational women\'s movements after the Second World War.',
      'The replacement of national constitutions by binding United Nations directives mandating universal female suffrage worldwide.',
      'The reversal of the early-twentieth-century achievements of the Western women\'s suffrage movement in Europe and the Americas.',
      'A worldwide decline of literacy among women that prompted compensatory political reforms by male-dominated legislatures.',
    ],
    correctAnswer: 0,
    explanation:
      'Post-WWII human-rights regimes (the UDHR in 1948, CEDAW in 1979) and transnational feminist movements drove this pattern. UN documents are not legally binding national constitutions; the trend continued, rather than reversed, earlier gains; and women\'s literacy globally rose, not fell.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    question:
      '"In 1995, the World Trade Organization replaced the General Agreement on Tariffs and Trade, with binding dispute-resolution authority over its 123 founding members."\n— Modern textbook summary\n\nThe creation of the WTO is most directly an example of which of the following late-twentieth-century developments?',
    options: [
      'The construction of new international institutions to govern an increasingly integrated global economy.',
      'The replacement of the United Nations General Assembly by a smaller council of trade ministers.',
      'A successful effort by developing states to block trans-Pacific commerce on environmental grounds.',
      'The voluntary dismantling of all national tariff and quota schedules across the entire globe by 2000.',
    ],
    correctAnswer: 0,
    explanation:
      'The WTO is part of a broader post-1945 trend toward international institutions managing trade, finance, health, and security. The UN General Assembly was not replaced; developing states broadly joined; and tariff schedules were liberalized but not abolished.',
    topic: 'unit-9-globalization',
  },
  {
    type: 'mcq',
    question:
      'Mean global surface temperatures have risen about 1.1 °C since the late nineteenth century, with most of that increase occurring after 1975, alongside an estimated forty-five percent increase in atmospheric carbon dioxide.\n\nThe trends described are most directly attributable to which of the following?',
    options: [
      'The cumulative emissions of greenhouse gases by industrial and post-industrial economies since the eighteenth century.',
      'A natural cyclical warming period unrelated to any human industrial or agricultural activity since the year 1850.',
      'The replacement of coal-fired power plants by carbon-neutral solar facilities across the global economy after 1975.',
      'The voluntary reforestation of the equatorial tropics during the second half of the twentieth century.',
    ],
    correctAnswer: 0,
    explanation:
      'Anthropogenic greenhouse gas emissions — overwhelmingly $CO_{2}$ from fossil fuels — are the scientific consensus explanation for the warming described. The other options contradict the scientific record.',
    topic: 'unit-9-globalization',
  },
]
