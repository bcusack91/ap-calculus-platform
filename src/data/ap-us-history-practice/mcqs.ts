import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 55 AP US History MCQs in 20 source-based sets of 2–4 questions, modeled on
 * Section I, Part A of the College Board AP US History exam.
 *
 * Sets (stimulus type → periods):
 *   1  Bernal Díaz on Tenochtitlan (primary)            P1 ×3
 *   2  Winthrop, "A Model of Christian Charity" (primary) P2 ×2
 *   3  Bacon, "Declaration in the Name of the People"  P2 ×2
 *   4  Stamp Act Congress resolutions (primary)         P3 ×3
 *   5  Madison, Federalist No. 51 (primary)             P3 ×3
 *   6  Washington, Farewell Address (primary)           P3 ×2
 *   7  Erie Canal freight costs (data)                  P4 ×3
 *   8  Declaration of Sentiments (primary)              P4 ×3
 *   9  Jackson, Second Annual Message (primary)         P4 ×2
 *  10  O'Sullivan, "Annexation" (primary)               P5 ×3
 *  11  Douglass, Fourth of July speech (primary)        P5 ×2
 *  12  Historian's view of Reconstruction (secondary)   P5 ×3
 *  13  Keppler, "The Bosses of the Senate" (image)      P6 ×3
 *  14  People's Party Omaha Platform (primary)          P6 ×3, P7 ×1
 *  15  Immigrant origins, 1880s vs 1900s (data)         P6 ×1, P7 ×2
 *  16  Wilson, war message (primary)                    P7 ×3
 *  17  F. D. Roosevelt, First Inaugural (primary)       P7 ×2
 *  18  Kennan, "The Sources of Soviet Conduct" (primary) P8 ×3
 *  19  King, "Letter from Birmingham Jail" (primary)    P8 ×3
 *  20  Reagan, First Inaugural (primary)                P9 ×3
 *
 * Period totals follow the CED weightings: P1 3, P2 4, P3 8, P4 8, P5 8,
 * P6 7, P7 8, P8 6, P9 3.
 */

const DIAZ =
  '"When we saw so many cities and villages built in the water and other great towns on dry land and that straight and level causeway going towards Mexico, we were amazed and said that it was like the enchantments they tell of in the legend of Amadis, on account of the great towers and cues and buildings rising from the water, and all built of masonry."\n\n— Bernal Díaz del Castillo, a soldier with Hernán Cortés, The True History of the Conquest of New Spain, written c. 1568, recalling the Spanish approach to the Mexica capital of Tenochtitlan in 1519 ("cues" were temples)'

const WINTHROP =
  '"For we must consider that we shall be as a city upon a hill. The eyes of all people are upon us. So that if we shall deal falsely with our God in this work we have undertaken . . . we shall be made a story and a by-word through the world."\n\n— John Winthrop, "A Model of Christian Charity," sermon delivered to colonists sailing to Massachusetts Bay, 1630'

const BACON =
  '"For having, upon specious pretences of public works, raised great unjust taxes upon the commonalty for the advancement of private favourites . . . For having protected, favoured, and emboldened the Indians against His Majesty\'s loyal subjects, never contriving, requiring, or appointing any due or proper means of satisfaction for their many invasions, robberies, and murders committed upon us . . ."\n\n— Adapted from Nathaniel Bacon, "Declaration in the Name of the People," charges against Governor William Berkeley, Virginia, 1676'

const STAMP_ACT_CONGRESS =
  '"That it is inseparably essential to the freedom of a people, and the undoubted right of Englishmen, that no taxes be imposed on them, but with their own consent, given personally, or by their representatives.\n\nThat the people of these colonies are not, and from their local circumstances cannot be, represented in the House of Commons in Great Britain."\n\n— Adapted from the Declaration of Rights and Grievances, adopted by delegates from nine colonies at the Stamp Act Congress, New York, October 1765'

const FEDERALIST_51 =
  '"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself."\n\n— James Madison, The Federalist No. 51, published in New York newspapers, February 1788'

const FAREWELL =
  '"It is our true policy to steer clear of permanent alliances with any portion of the foreign world . . .\n\nLet me now . . . warn you in the most solemn manner against the baneful effects of the spirit of party generally."\n\n— George Washington, Farewell Address, published September 1796'

const ERIE_CANAL =
  'Approximate cost of shipping one ton of freight from Buffalo to New York City\n\n• 1817, by wagon road: about \\$100 per ton\n• 1825, by the newly opened Erie Canal: about \\$10 per ton\n\nData adapted from nineteenth-century estimates cited in histories of the Erie Canal, which the state of New York financed and built between 1817 and 1825'

const SENECA_FALLS =
  '"The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her. To prove this, let facts be submitted to a candid world. He has never permitted her to exercise her inalienable right to the elective franchise."\n\n— Declaration of Sentiments, adopted at the women\'s rights convention at Seneca Falls, New York, July 1848'

const JACKSON_1830 =
  '"It will separate the Indians from immediate contact with settlements of whites; free them from the power of the States; enable them to pursue happiness in their own way and under their own rude institutions; will retard the progress of decay, which is lessening their numbers, and perhaps cause them gradually, under the protection of the Government and through the influence of good counsels, to cast off their savage habits and become an interesting, civilized, and Christian community."\n\n— Adapted from President Andrew Jackson, Second Annual Message to Congress, December 1830'

const OSULLIVAN =
  '"Other nations have undertaken to intrude themselves . . . for the avowed object of thwarting our policy and hampering our power, limiting our greatness and checking the fulfilment of our manifest destiny to overspread the continent allotted by Providence for the free development of our yearly multiplying millions."\n\n— John L. O\'Sullivan, "Annexation," United States Magazine and Democratic Review, July–August 1845'

const DOUGLASS =
  '"What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license."\n\n— Frederick Douglass, speech to the Rochester Ladies\' Anti-Slavery Society, Rochester, New York, July 5, 1852'

const RECONSTRUCTION_HISTORIAN =
  '"Reconstruction remade the nation\'s founding law. The Fourteenth and Fifteenth Amendments wrote the principle of equal citizenship regardless of race into the Constitution, and for a time Black men voted, served on juries, and held office across the South. Yet within a generation the national government had abandoned enforcement of those guarantees, and much of what Reconstruction promised was deferred for nearly a century."\n\n— Adapted from a historian\'s interpretation of Reconstruction'

const BOSSES_OF_THE_SENATE =
  'The image described below is a political cartoon by Joseph Keppler, "The Bosses of the Senate," published in Puck magazine in January 1889.\n\nEnormous, bloated figures shaped like bags of money, each labeled with the name of a trust (among them the "Standard Oil Trust," the "Steel Beam Trust," the "Copper Trust," and the "Sugar Trust"), crowd the back of the U.S. Senate chamber and loom over the much smaller senators seated at their desks. A sign on the wall declares that this is a Senate "of the Monopolists, by the Monopolists and for the Monopolists!" The gallery door marked "People\'s Entrance" is shut and barred, while the "Entrance for Monopolists" stands open.'

const OMAHA_PLATFORM =
  '"We meet in the midst of a nation brought to the verge of moral, political, and material ruin. Corruption dominates the ballot-box, the Legislatures, the Congress, and touches even the ermine of the bench. . . . The fruits of the toil of millions are boldly stolen to build up colossal fortunes for a few, unprecedented in the history of mankind."\n\n— Preamble to the platform of the People\'s (Populist) Party, adopted at its national convention in Omaha, Nebraska, July 1892'

const IMMIGRANT_ORIGINS =
  'Origins of immigrants arriving in the United States (approximate share of all arrivals in each decade)\n\n• 1881–1890: northern and western Europe 72%; southern and eastern Europe 18%; all other regions 10%\n• 1901–1910: northern and western Europe 22%; southern and eastern Europe 71%; all other regions 7%\n\nData adapted from U.S. Bureau of the Census, Historical Statistics of the United States'

const WILSON_1917 =
  '"The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty. We have no selfish ends to serve. We desire no conquest, no dominion. We seek no indemnities for ourselves, no material compensation for the sacrifices we shall freely make."\n\n— President Woodrow Wilson, address to Congress asking for a declaration of war against Germany, April 2, 1917'

const FDR_1933 =
  '"This great Nation will endure as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself . . . Our greatest primary task is to put people to work. This is no unsolvable problem if we face it wisely and courageously."\n\n— President Franklin D. Roosevelt, First Inaugural Address, March 4, 1933'

const KENNAN =
  '"In these circumstances it is clear that the main element of any United States policy toward the Soviet Union must be that of a long-term, patient but firm and vigilant containment of Russian expansive tendencies."\n\n— George F. Kennan, State Department official, writing as "X," "The Sources of Soviet Conduct," Foreign Affairs, July 1947'

const KING_1963 =
  '"We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed. Frankly, I have yet to engage in a direct-action campaign that was \'well timed\' in the view of those who have not suffered unduly from the disease of segregation."\n\n— Martin Luther King Jr., "Letter from Birmingham Jail," written while he was jailed for leading protests in Birmingham, Alabama, April 1963'

const REAGAN_1981 =
  '"In this present crisis, government is not the solution to our problem; government is the problem. . . . It is my intention to curb the size and influence of the Federal establishment."\n\n— President Ronald Reagan, First Inaugural Address, January 20, 1981'

export const MCQS: MCQItem[] = [
  /* ============== SET 1 — PERIOD 1: 1491–1607 ============== */
  {
    type: 'mcq',
    stimulus: DIAZ,
    question: 'The passage best supports which of the following claims about the Americas before European contact?',
    options: [
      'Most Native societies were mobile hunting bands with few permanent settlements.',
      'Some Native societies had built large cities sustained by intensive agriculture.',
      'Native societies had developed few political institutions above the village level.',
      'Native peoples of Mesoamerica relied mainly on herding large domesticated animals.',
    ],
    correctAnswer: 1,
    explanation:
      'Díaz describes a city of causeways, towers, and masonry temples, evidence of an urban society fed by intensive maize farming such as the Mexica chinampas. Mobile hunting bands did exist in parts of North America, but they cannot account for the large, permanent city the passage describes.',
    topic: 'period-1-1491-1607',
  },
  {
    type: 'mcq',
    stimulus: DIAZ,
    question: 'Which of the following most directly helped a small Spanish force conquer the society Díaz describes within two years of 1519?',
    options: [
      'Mexica leaders\' surrender to a Spaniard they took to be a returning god',
      'Large reinforcements of soldiers shipped directly from Spain to Mexico',
      'A Mexica civil war over succession like the one that divided the Inca',
      'Epidemic disease and alliances with Native enemies of the Mexica',
    ],
    correctAnswer: 3,
    explanation:
      'Smallpox devastated Tenochtitlan in 1520, and tens of thousands of Tlaxcalan and other Native allies who resented Mexica tribute demands fought alongside Cortés. The story that the Mexica surrendered to Cortés as a returning god comes from later colonial accounts, and in fact the Mexica fought on and the city fell only after a long siege in 1521.',
    topic: 'period-1-1491-1607',
  },
  {
    type: 'mcq',
    stimulus: DIAZ,
    question: 'In the decades after the events Díaz describes, Spanish colonizers in Mexico most commonly obtained labor through',
    options: [
      'indentured servitude, which brought laborers from Spain on fixed contracts',
      'the encomienda system, which required Native communities to provide tribute and labor',
      'free wage labor, in which Native workers bargained with employers for pay',
      'the headright system, which granted land to colonists who imported workers',
    ],
    correctAnswer: 1,
    explanation:
      'The encomienda granted Spanish colonists the tribute and labor of Native communities in return for nominal protection and Christian instruction. The headright system belonged to English Virginia, where it rewarded planters with land for paying the passage of indentured servants.',
    topic: 'period-1-1491-1607',
  },

  /* ============== SETS 2–3 — PERIOD 2: 1607–1754 ============== */
  {
    type: 'mcq',
    stimulus: WINTHROP,
    question: 'Winthrop\'s sermon most directly reflects which of the following?',
    options: [
      'A Quaker commitment to religious toleration and peaceful relations with Native peoples',
      'An Anglican effort to extend the established Church of England to the new colonies',
      'A Puritan aim to build a model community bound by a covenant with God',
      'A Chesapeake focus on growing staple crops for profit in the Atlantic market',
    ],
    correctAnswer: 2,
    explanation:
      'Winthrop casts Massachusetts Bay as a community in covenant with God whose success or failure the world would watch. Quaker toleration shaped Pennsylvania half a century later, whereas Puritan leaders in Massachusetts enforced religious conformity.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    stimulus: WINTHROP,
    question: 'Compared with the Chesapeake colonies in the 1600s, the colony Winthrop helped found was distinctive in that it',
    options: [
      'depended more heavily on enslaved African labor for its farming',
      'drew migrants in family groups and had a balanced sex ratio',
      'granted wide religious freedom to dissenters such as Anne Hutchinson',
      'was governed directly by royal officials appointed from London',
    ],
    correctAnswer: 1,
    explanation:
      'Puritans migrated largely as families, so New England had a balanced sex ratio and stable households, unlike the young, male, servant-heavy Chesapeake. Massachusetts banished dissenters such as Anne Hutchinson and Roger Williams rather than tolerating them.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    stimulus: BACON,
    question: 'Bacon\'s charges most directly reflected tensions over which of the following?',
    options: [
      'Parliament\'s efforts to tax the colonies without their own consent',
      'Access to frontier land and the colony\'s policy toward Native peoples',
      'Religious conflict between Puritan and Anglican settlers in the Virginia colony',
      'Competition between English and French traders for the fur trade',
    ],
    correctAnswer: 1,
    explanation:
      'Bacon\'s followers, many of them landless former servants on the frontier, accused Governor Berkeley of protecting Native peoples to preserve his allies\' trade and of blocking their access to land. Parliamentary taxation became the central colonial grievance only after 1763, nearly a century later.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    stimulus: BACON,
    question: 'Which of the following was a significant long-term effect of the rebellion Bacon led?',
    options: [
      'The English Crown revoked Virginia\'s charter and made it a royal colony.',
      'Planters came to rely more on enslaved Africans than on servants.',
      'Virginia\'s assembly ended the use of indentured servitude by statute.',
      'Virginia\'s leaders abandoned tobacco in favor of wheat and other grains.',
    ],
    correctAnswer: 1,
    explanation:
      'An armed alliance of poor whites, servants, and some enslaved people alarmed Chesapeake elites, who accelerated the shift to racial slavery and sharpened legal lines between Black and white laborers. Virginia had become a royal colony in 1624, half a century before the rebellion.',
    topic: 'period-2-1607-1754',
  },

  /* ============== SETS 4–6 — PERIOD 3: 1754–1800 ============== */
  {
    type: 'mcq',
    stimulus: STAMP_ACT_CONGRESS,
    question: 'The resolutions were most directly a response to which of the following?',
    options: [
      'British efforts to raise revenue from the colonies after the Seven Years\' War',
      'British limits on colonial settlement west of the Appalachian Mountains',
      'British laws requiring colonial trade to pass through English ports',
      'British decisions to station troops in Boston to enforce customs laws',
    ],
    correctAnswer: 0,
    explanation:
      'The Stamp Act of 1765 was part of Britain\'s effort to make the colonies help pay war debts and the costs of imperial defense, and the delegates denied Parliament\'s right to tax them directly. The Proclamation of 1763 also angered colonists, but it restricted settlement and is not about the taxation and consent these resolutions address.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: STAMP_ACT_CONGRESS,
    question: 'The delegates\' argument drew most directly on which of the following?',
    options: [
      'Mercantilist ideas about the economic value of colonies to the home country',
      'English constitutional traditions linking taxation to representation',
      'Puritan beliefs about the covenant between rulers and the ruled',
      'Iroquois Confederacy practices of decision-making by consensus',
    ],
    correctAnswer: 1,
    explanation:
      'The delegates claim "the undoubted right of Englishmen" to be taxed only by their own representatives, a principle rooted in Magna Carta and the English Bill of Rights. Mercantilism justified regulating colonial trade for the empire\'s benefit and offered no basis for limiting Parliament\'s power to tax.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: STAMP_ACT_CONGRESS,
    question: 'Which of the following was an immediate response by many colonists to the law the delegates protested?',
    options: [
      'Forming a Continental Army under the command of George Washington',
      'Petitioning Parliament for colonial seats in the House of Commons',
      'Declaring independence through the Continental Congress',
      'Organizing boycotts of British goods through nonimportation agreements',
    ],
    correctAnswer: 3,
    explanation:
      'Merchants signed nonimportation agreements and groups such as the Sons of Liberty enforced them, helping force repeal of the Stamp Act in 1766. Colonists did not seek seats in Parliament; the second resolution argues that the colonies could not be represented there at all.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: FEDERALIST_51,
    question: 'Madison\'s argument best supports which of the following features of the Constitution?',
    options: [
      'A national government whose powers match those of the Articles',
      'A written list of individual rights that government may not violate',
      'Equal representation of the states in both houses of Congress',
      'Separate branches, each with the means to check the others',
    ],
    correctAnswer: 3,
    explanation:
      'Madison argues that government must be designed to "control itself," which the Constitution achieves by giving each branch tools such as the veto, Senate confirmation, and judicial independence to resist the others. A bill of rights was added later, in 1791, largely at the urging of the Constitution\'s critics.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: FEDERALIST_51,
    question: 'Antifederalists who opposed ratification of the Constitution most commonly argued that',
    options: [
      'a strong central government without a bill of rights would endanger liberty',
      'the proposed government would still be too weak to collect taxes',
      'the states should be merged into one consolidated national government',
      'the new Constitution should abolish slavery throughout the United States',
    ],
    correctAnswer: 0,
    explanation:
      'Antifederalists feared that a distant, powerful national government would threaten individual liberty and the states, and they demanded a bill of rights. The claim that the government would be too weak to tax was the Federalists\' complaint about the Articles, not an Antifederalist objection to the Constitution.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: FEDERALIST_51,
    question: 'The debate in which Madison wrote this essay arose most directly from',
    options: [
      'concern that the Confederation Congress had grown too powerful over the states',
      'concern that the Northwest Ordinance would let slavery spread north of the Ohio',
      'concern that the French alliance would drag the nation into European wars',
      'concern that the Articles of Confederation had left Congress too weak',
    ],
    correctAnswer: 3,
    explanation:
      'Congress\'s inability to tax or regulate trade under the Articles, along with unrest such as Shays\' Rebellion, led to the Philadelphia Convention and the ratification debate of 1787–1788. Critics of the Articles complained that Congress was too weak, not too strong; it could not tax, regulate trade, or compel the states to comply.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: FAREWELL,
    question: 'Washington\'s warnings most directly reflected which of the following?',
    options: [
      'Partisan conflict between Federalists and Democratic-Republicans over Britain and France',
      'Sectional conflict between the North and the South over slavery in the western territories',
      'Colonial resentment of the trade restrictions Britain imposed after the war with France',
      'Disputes between Congress and the states over taxation under the Articles of Confederation',
    ],
    correctAnswer: 0,
    explanation:
      'By 1796 Federalists and Democratic-Republicans were bitterly divided over the French Revolution and the Jay Treaty with Britain, which is why Washington paired foreign alliances with the dangers of party. Sectional conflict over slavery in the West became the dominant national issue later, beginning with the Missouri crisis of 1819–1820.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    stimulus: FAREWELL,
    question: 'Washington\'s foreign-policy advice was most directly shaped by which experience of his presidency?',
    options: [
      'Spain\'s closing of the lower Mississippi River to American shipping',
      'Pressure to aid France under the 1778 alliance once France went to war with Britain',
      'Native resistance in the Northwest Territory led by Little Turtle',
      'Western farmers\' armed protest against the federal excise tax on whiskey',
    ],
    correctAnswer: 1,
    explanation:
      'When revolutionary France went to war with Britain in 1793, supporters of France expected help under the 1778 treaty, but Washington proclaimed neutrality and the French envoy Edmond Genêt campaigned against him. Spain\'s closing of the Mississippi was a serious diplomatic problem, but it concerned navigation rights and was settled by treaty in 1795, not by an alliance.',
    topic: 'period-3-1754-1800',
  },

  /* ============== SETS 7–9 — PERIOD 4: 1800–1848 ============== */
  {
    type: 'mcq',
    stimulus: ERIE_CANAL,
    question: 'The change shown in the data most directly contributed to which of the following?',
    options: [
      'Stronger trade links between the cotton South and the textile mills of Britain',
      'Closer economic ties between the Northeast and the farms of the Old Northwest',
      'A decline in New York City\'s population as commerce shifted to western towns',
      'Greater reliance on the Mississippi River to ship western grain to the East',
    ],
    correctAnswer: 1,
    explanation:
      'Cheap canal shipping let farmers in the Great Lakes region send grain east and buy northeastern goods, binding the Old Northwest to the Northeast and making New York City the nation\'s leading port. Cotton exports to Britain did grow in this period, but they moved through southern ports and owed nothing to a canal across New York.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: ERIE_CANAL,
    question: 'The data best illustrate which of the following developments of the early nineteenth century?',
    options: [
      'A transportation revolution that lowered the cost of moving goods to market',
      'An agricultural decline that pushed northeastern farm families into factories',
      'A rise in federal spending on roads and canals under the American System',
      'A shift of the economy toward exports of finished manufactured goods',
    ],
    correctAnswer: 0,
    explanation:
      'Canals, steamboats, and later railroads cut freight costs sharply and drew farmers into a national market economy. The Erie Canal was financed by New York State, not Congress, and federal internal-improvement bills were repeatedly vetoed, so it does not illustrate federal spending under the American System.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: ERIE_CANAL,
    question: 'Politicians who championed projects like the one reflected in the data were most likely to also support',
    options: [
      'holding federal spending to the levels of the Jefferson years',
      'a protective tariff and a national bank to promote development',
      'the rapid expansion of slavery into the western territories',
      'leaving banking and road-building policy to the individual states',
    ],
    correctAnswer: 1,
    explanation:
      'Advocates of internal improvements such as Henry Clay and later the Whig Party combined them with a protective tariff and a national bank in the American System. Leaving such matters to the states was the position of their Jacksonian opponents, who distrusted federal economic programs.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: SENECA_FALLS,
    question: 'The document\'s structure and language most directly draw on which of the following?',
    options: [
      'The Bill of Rights',
      'The Declaration of Independence',
      'The Federalist essays',
      'The Articles of Confederation',
    ],
    correctAnswer: 1,
    explanation:
      'The Declaration of Sentiments copies the 1776 Declaration\'s form, listing a "history of repeated injuries and usurpations" and submitting "facts . . . to a candid world," with "man" in place of King George III. The Bill of Rights protects individual liberties but does not share this structure of grievances against a tyrant.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: SENECA_FALLS,
    question: 'The Seneca Falls convention is best understood in the context of which of the following?',
    options: [
      'Labor movements in northern factory towns seeking a ten-hour workday',
      'Reform movements inspired by the religious revivals of the Second Great Awakening',
      'Nativist movements opposing Catholic immigration from Ireland and Germany',
      'Expansionist movements calling for the annexation of Texas and Oregon',
    ],
    correctAnswer: 1,
    explanation:
      'Revivalists of the Second Great Awakening taught that individuals could perfect themselves and society, inspiring the abolition, temperance, and women\'s rights crusades. Labor movements were active in the 1840s too, but the Seneca Falls organizers were middle-class reformers seeking legal and political equality, not factory workers seeking shorter hours.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: SENECA_FALLS,
    question: 'Many organizers of the Seneca Falls convention had gained experience in which of the following?',
    options: [
      'The nativist movement',
      'The Anti-Masonic movement',
      'The Brook Farm community',
      'The abolitionist movement',
    ],
    correctAnswer: 3,
    explanation:
      'Elizabeth Cady Stanton and Lucretia Mott met at the World Anti-Slavery Convention in London in 1840, where women delegates were barred from the floor, and Frederick Douglass attended Seneca Falls. Nativism, by contrast, targeted Catholic immigrants and drew few of the convention\'s organizers, who came largely from Quaker and antislavery circles.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: JACKSON_1830,
    question: 'Jackson\'s message was most directly intended to justify',
    options: [
      'the allotment of reservation lands to individual Native families',
      'the confinement of Plains nations to reservations after the Civil War',
      'the removal of southeastern Native nations to the West',
      'the creation of boarding schools to assimilate Native children',
    ],
    correctAnswer: 2,
    explanation:
      'Jackson defended the Indian Removal Act of 1830, which led to the forced relocation of the Cherokee, Creek, Choctaw, Chickasaw, and Seminole nations. Allotment of reservation land came later, under the Dawes Act of 1887.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    stimulus: JACKSON_1830,
    question: 'The Cherokee Nation\'s response to the policy Jackson defends differed from that of some other Native nations in that the Cherokee',
    options: [
      'fought a prolonged war in the Florida swamps under the leader Osceola',
      'joined Tecumseh\'s confederacy and allied with Britain in the War of 1812',
      'ceded most of present-day Ohio to the United States in the Treaty of Greenville',
      'took their case to the Supreme Court and won a ruling in Worcester v. Georgia',
    ],
    correctAnswer: 3,
    explanation:
      'The Cherokee, who had adopted a written constitution, pursued legal resistance, and in Worcester v. Georgia (1832) the Court held that Georgia law had no force in Cherokee territory, a ruling Jackson declined to enforce. Armed resistance under Osceola was the Seminole response in the Second Seminole War.',
    topic: 'period-4-1800-1848',
  },

  /* ============== SETS 10–12 — PERIOD 5: 1844–1877 ============== */
  {
    type: 'mcq',
    stimulus: OSULLIVAN,
    question: 'O\'Sullivan\'s argument was used most directly to justify',
    options: [
      'the purchase of Alaska from Russia',
      'the annexation of Texas and war with Mexico',
      'the removal of Native nations from the Southeast',
      'the acquisition of Florida from Spain',
    ],
    correctAnswer: 1,
    explanation:
      'O\'Sullivan wrote as Texas was being annexed in 1845, and "manifest destiny" became the rallying cry for the war with Mexico in 1846–1848. Indian removal also cleared land for white settlement, but it took place in the 1830s, before the phrase was coined.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: OSULLIVAN,
    question: 'The territorial expansion O\'Sullivan promoted most directly led to which of the following?',
    options: [
      'Renewed conflict with Britain over territory in Canada',
      'Renewed debate over rechartering a national bank',
      'Renewed conflict over slavery in the new territories',
      'Renewed conflict between states and Congress over tariffs',
    ],
    correctAnswer: 2,
    explanation:
      'The Mexican Cession reopened the question of slavery\'s expansion, producing the Wilmot Proviso, the Compromise of 1850, and the sectional crisis that followed. The fight over a national bank peaked during Jackson\'s war on the Second Bank in the 1830s.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: OSULLIVAN,
    question: 'Which of the following groups most strongly opposed the war that O\'Sullivan\'s argument was used to support?',
    options: [
      'Southern Democrats seeking new land for cotton cultivation',
      'Western farmers hoping to settle along the Pacific coast',
      'Northern Democrats loyal to President James K. Polk',
      'Whigs and abolitionists who saw a plot to expand slavery',
    ],
    correctAnswer: 3,
    explanation:
      'Whigs such as Abraham Lincoln and abolitionists warned that the war was a scheme by the "Slave Power" to add slave territory. Northern Democrats loyal to Polk largely backed the war, though some later supported the Wilmot Proviso to keep slavery out of the new lands.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: DOUGLASS,
    question: 'Douglass\'s speech is best understood in the context of which of the following?',
    options: [
      'Growing abolitionist activism after the Fugitive Slave Act of 1850',
      'Growing temperance activism for state laws banning the sale of alcohol',
      'Growing support for resettling freed African Americans in Africa',
      'Growing labor activism against the spread of factory wage work',
    ],
    correctAnswer: 0,
    explanation:
      'The Fugitive Slave Act of 1850 forced northerners to assist in capturing people who had escaped slavery, radicalizing antislavery opinion and sharpening speeches like this one. Douglass opposed colonization schemes, insisting that African Americans were Americans entitled to freedom in the United States.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: DOUGLASS,
    question: 'Douglass\'s argument relies most directly on which of the following strategies?',
    options: [
      'Rejecting the Constitution as a proslavery pact that abolitionists should renounce',
      'Contrasting the nation\'s professed ideals of liberty with the reality of slavery',
      'Arguing that slave labor was economically less efficient than free labor',
      'Urging enslaved people to rise up in armed rebellion against their enslavers',
    ],
    correctAnswer: 1,
    explanation:
      'Douglass turns the Fourth of July against his audience, calling its celebration of liberty a "sham" while millions remained enslaved. The economic case against slave labor belonged to free-soil writers, not to this speech, which makes a moral argument about hypocrisy.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: RECONSTRUCTION_HISTORIAN,
    question: 'Which of the following would best support the historian\'s claim that Reconstruction expanded equal citizenship?',
    options: [
      'The passage of Black Codes by southern legislatures in 1865 and 1866',
      'The return of confiscated plantation lands to their former owners',
      'The election of Black men to Congress and state legislatures',
      'The spread of sharecropping and crop liens across the cotton South',
    ],
    correctAnswer: 2,
    explanation:
      'During Radical Reconstruction, Black men voted in large numbers, and more than 1,500 held public office, including Hiram Revels and Blanche K. Bruce in the U.S. Senate. The Black Codes restricted freedpeople\'s rights and so would undercut, not support, the claim.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: RECONSTRUCTION_HISTORIAN,
    question: 'Which of the following most directly reflects the abandonment of enforcement the historian describes?',
    options: [
      'The withdrawal of the last federal troops from the South after the 1876 election',
      'The ratification of the Fifteenth Amendment barring racial voting discrimination',
      'The creation of the Freedmen\'s Bureau to aid formerly enslaved people',
      'The passage of the Enforcement Acts to suppress the Ku Klux Klan',
    ],
    correctAnswer: 0,
    explanation:
      'Under the Compromise of 1877, the remaining federal troops were withdrawn and "Redeemer" Democrats took full control of southern governments. The Enforcement Acts of 1870–1871 were an effort to enforce Reconstruction, not an abandonment of it.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    stimulus: RECONSTRUCTION_HISTORIAN,
    question: 'The historian\'s statement that Reconstruction\'s promise was "deferred for nearly a century" refers most directly to the fact that',
    options: [
      'women\'s suffrage, debated during Reconstruction, was not won until 1920',
      'sharecropping persisted until cotton picking was mechanized in the 1950s',
      'courts applied the Fourteenth Amendment to protect corporations instead',
      'federal enforcement of civil rights in the South resumed only in the 1950s and 1960s',
    ],
    correctAnswer: 3,
    explanation:
      'The Reconstruction amendments stayed in the Constitution but went largely unenforced until Brown v. Board of Education, the Civil Rights Act of 1964, and the Voting Rights Act of 1965. Sharecropping did last into the mid-twentieth century, but it was an economic arrangement, whereas the historian refers to constitutional guarantees of equal citizenship that went unenforced.',
    topic: 'period-5-1844-1877',
  },

  /* ============== SETS 13–15 — PERIOD 6: 1865–1898 ============== */
  {
    type: 'mcq',
    stimulus: BOSSES_OF_THE_SENATE,
    question: 'The cartoonist\'s main point is that',
    options: [
      'organized labor unions dominated the members of the Senate',
      'federal regulation was stifling the growth of American industry',
      'wealthy trusts held undue influence in the Senate',
      'immigrant political machines chose the members of the Senate',
    ],
    correctAnswer: 2,
    explanation:
      'The trusts tower over the senators while the people\'s entrance is barred, suggesting that corporate wealth, not voters, controlled the Senate. Labor unions are absent from the image, and in this era they had little influence in Congress.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: BOSSES_OF_THE_SENATE,
    question: 'The cartoon is best understood in the context of which of the following?',
    options: [
      'The consolidation of industries such as oil and sugar into giant combinations',
      'The expansion of federal regulatory agencies under the New Deal',
      'The breakup of large firms by Progressive Era trust-busting presidents',
      'The shift of the national economy from industry back to agriculture',
    ],
    correctAnswer: 0,
    explanation:
      'In the 1880s firms such as Standard Oil used trusts and horizontal integration to dominate whole industries, and state legislatures, which then chose senators, were open to their influence. Progressive trust-busting under Theodore Roosevelt began only after 1901, more than a decade after the cartoon.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: BOSSES_OF_THE_SENATE,
    question: 'Which of the following was a federal response to the concerns the cartoon expresses?',
    options: [
      'The Pendleton Act, which created a civil service based on merit',
      'The Sherman Antitrust Act, which outlawed combinations in restraint of trade',
      'The Dawes Act, which divided reservation lands into individual allotments',
      'The Homestead Act, which offered western land to settlers who farmed it',
    ],
    correctAnswer: 1,
    explanation:
      'Congress passed the Sherman Antitrust Act in 1890 in response to public anger at the trusts, though courts enforced it weakly at first. The Pendleton Act of 1883 addressed the spoils system in federal hiring, not the power of corporations.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: OMAHA_PLATFORM,
    question: 'The grievances in the platform most directly reflected the experiences of which of the following groups?',
    options: [
      'Northeastern factory owners facing stiff competition from British imports',
      'Southern and western farmers burdened by debt and falling crop prices',
      'Urban reformers seeking to end machine control of city governments',
      'Immigrant workers seeking protection from nativist restrictions',
    ],
    correctAnswer: 1,
    explanation:
      'The People\'s Party grew out of the Farmers\' Alliances, whose members blamed railroads, banks, and a tight money supply for falling crop prices and mounting debt. Urban reformers attacking political machines became prominent in the Progressive Era and were not the base of the Populist movement.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: OMAHA_PLATFORM,
    question: 'Which of the following demands was most closely associated with the movement that produced the platform?',
    options: [
      'A strict gold standard to protect the value of the dollar',
      'Civil service exams to replace patronage in federal jobs',
      'A nationwide ban on the sale of alcoholic beverages',
      'The free coinage of silver to expand the money supply',
    ],
    correctAnswer: 3,
    explanation:
      'Populists demanded free coinage of silver to inflate the currency and ease farmers\' debts, along with government ownership of the railroads and a graduated income tax. The gold standard was the position of eastern bankers and the Republican Party, which the Populists opposed.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: OMAHA_PLATFORM,
    question: 'In the presidential election of 1896, the movement that produced the platform',
    options: [
      'ran James B. Weaver again as an independent candidate',
      'allied with eastern Republicans to elect William McKinley',
      'endorsed the Democratic nominee, William Jennings Bryan',
      'joined the Socialists in backing Eugene V. Debs',
    ],
    correctAnswer: 2,
    explanation:
      'After the Democrats adopted free silver and nominated Bryan, the Populists endorsed him too, and the movement faded after McKinley\'s victory. McKinley was the Republican, gold-standard candidate whom the Populists opposed.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: OMAHA_PLATFORM,
    question: 'Which of the following Progressive Era reforms fulfilled a demand of the movement that produced the platform?',
    options: [
      'The Eighteenth Amendment prohibiting the manufacture and sale of alcoholic beverages',
      'The Seventeenth Amendment providing for the direct election of senators',
      'The Nineteenth Amendment barring sex discrimination in voting',
      'The Pure Food and Drug Act requiring accurate labeling of medicines',
    ],
    correctAnswer: 1,
    explanation:
      'The Omaha Platform called for the popular election of senators, which the Seventeenth Amendment achieved in 1913, and for a graduated income tax, which the Sixteenth achieved the same year. Prohibition was the goal of the temperance movement and the Anti-Saloon League, not a Populist demand.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: IMMIGRANT_ORIGINS,
    question: 'Which of the following most directly contributed to the change shown in the data?',
    options: [
      'Rural poverty and religious persecution in southern and eastern Europe',
      'The repeal of Chinese exclusion, which reopened immigration across the Pacific',
      'The Irish potato famine, which drove millions to seek work in American cities',
      'Federal quotas that gave preference to southern and eastern Europeans',
    ],
    correctAnswer: 0,
    explanation:
      'Land shortages in Italy and the Austro-Hungarian Empire and anti-Jewish pogroms in the Russian Empire pushed millions to emigrate, while cheap steamship travel and industrial jobs pulled them to America. The Irish famine of the 1840s produced an earlier wave of immigration from northern and western Europe.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    stimulus: IMMIGRANT_ORIGINS,
    question: 'Which of the following was a common response by Progressive reformers to the immigration shown in the data?',
    options: [
      'Federal programs that paid immigrants to return to their home countries',
      'Settlement houses offering immigrants English classes and social services',
      'Laws granting immigrants the right to vote on the day they arrived',
      'Campaigns by the American Federation of Labor to recruit unskilled immigrants',
    ],
    correctAnswer: 1,
    explanation:
      'Reformers such as Jane Addams at Hull House offered English classes, kindergartens, and other services in immigrant neighborhoods. The American Federation of Labor organized mainly skilled, native-born craft workers and often supported restricting immigration.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: IMMIGRANT_ORIGINS,
    question: 'The trend shown in the data contributed most directly to which of the following in the 1920s?',
    options: [
      'Laws ending long-standing restrictions on immigration from China and Japan',
      'Laws setting national-origin quotas that favored northern Europeans',
      'Laws giving priority to refugees from the war-torn nations of eastern Europe',
      'Laws giving priority to the spouses and relatives of naturalized citizens',
    ],
    correctAnswer: 1,
    explanation:
      'The Immigration Act of 1924 set quotas based on the 1890 census, sharply cutting arrivals from southern and eastern Europe and barring most Asian immigrants. Preference for the relatives of citizens came with the Immigration and Nationality Act of 1965, which abolished the national-origin quotas.',
    topic: 'period-7-1890-1945',
  },

  /* ============== SETS 16–17 — PERIOD 7: 1890–1945 ============== */
  {
    type: 'mcq',
    stimulus: WILSON_1917,
    question: 'Wilson\'s argument is best understood as',
    options: [
      'a call for the United States to remain neutral toward the warring powers',
      'a justification for war that framed American aims as defending democracy',
      'a demand that the United States receive territory in a peace settlement',
      'a defense of American investments in Latin America against German threats',
    ],
    correctAnswer: 1,
    explanation:
      'Wilson presented entry into World War I as an idealistic cause, disclaiming conquest and indemnities in favor of a world "safe for democracy." He had urged neutrality from 1914 to 1917, but this address asked Congress to declare war.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: WILSON_1917,
    question: 'Which of the following was a domestic consequence of the decision Wilson asked Congress to make?',
    options: [
      'Prosecution of war critics under the Espionage and Sedition Acts',
      'A sharp fall in northern factory jobs as war orders dried up',
      'Internment of more than 100,000 German Americans in camps',
      'A halt to African American migration from the South to the North',
    ],
    correctAnswer: 0,
    explanation:
      'The Espionage Act of 1917 and the Sedition Act of 1918 were used to imprison war critics such as Eugene Debs. Several thousand German nationals were interned as enemy aliens, but mass internment on the scale of 100,000 people happened to Japanese Americans in World War II, not to German Americans in World War I.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: WILSON_1917,
    question: 'The Senate\'s refusal to ratify the Treaty of Versailles after the war most directly reflected',
    options: [
      'anger that the treaty treated defeated Germany too leniently',
      'fear that the treaty would make the United States pay reparations',
      'objections that the treaty denied the United States new colonies',
      'concern that the League of Nations would limit Congress\'s war powers',
    ],
    correctAnswer: 3,
    explanation:
      'Senators led by Henry Cabot Lodge objected that Article X of the League Covenant could commit the United States to war without congressional approval. Germany, not the United States, was required to pay reparations under the treaty.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: FDR_1933,
    question: 'Roosevelt\'s address is best understood in the context of which of the following?',
    options: [
      'Labor shortages and inflation during mobilization for World War I',
      'Social tension and nativism during the Red Scare after World War I',
      'Consumer spending and stock speculation during the boom of the 1920s',
      'Mass unemployment and bank failures during the Great Depression',
    ],
    correctAnswer: 3,
    explanation:
      'Roosevelt took office with unemployment near 25 percent and the banking system collapsing, so "to put people to work" was his first task. The speculation of the 1920s helped cause the 1929 crash, but by 1933 the boom had long since ended.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    stimulus: FDR_1933,
    question: 'The policies that followed the address differed from those of the preceding administration chiefly in that they',
    options: [
      'relied on voluntary cooperation by business instead of federal rules',
      'cut federal spending to balance the budget and reassure investors',
      'used direct federal spending to provide relief and create jobs',
      'placed the major banks and industries under government ownership',
    ],
    correctAnswer: 2,
    explanation:
      'Programs such as the Civilian Conservation Corps and the Works Progress Administration hired millions directly, a break from Hoover\'s reliance on voluntarism and local relief. Reliance on voluntary business cooperation describes Hoover\'s approach, the one the New Deal moved away from.',
    topic: 'period-7-1890-1945',
  },

  /* ============== SETS 18–19 — PERIOD 8: 1945–1980 ============== */
  {
    type: 'mcq',
    stimulus: KENNAN,
    question: 'The policy Kennan describes is most clearly consistent with which of the following?',
    options: [
      'The Neutrality Acts\' limits on loans and arms sales to nations at war',
      'The Good Neighbor policy\'s pledge not to intervene in Latin America',
      'The Open Door notes\' call for equal trading rights in China',
      'The Truman Doctrine\'s aid to governments resisting communist pressure',
    ],
    correctAnswer: 3,
    explanation:
      'In March 1947 Truman asked Congress for aid to Greece and Turkey, pledging to support "free peoples" resisting subjugation, the same containment strategy Kennan had urged inside the government since 1946 and explained publicly that July. The Neutrality Acts of the 1930s aimed to keep the United States out of foreign wars, the opposite of an active global strategy.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    stimulus: KENNAN,
    question: 'Which of the following was a domestic development associated with the policy Kennan recommended?',
    options: [
      'Steep and lasting cuts to the military budget after the end of the Korean War',
      'Investigations of alleged communist influence in government and Hollywood',
      'Federal internment of Americans of German and Italian ancestry',
      'Reductions in federal spending on science and higher education',
    ],
    correctAnswer: 1,
    explanation:
      'Cold War fears fueled the Second Red Scare, including loyalty reviews, the House Un-American Activities Committee\'s Hollywood hearings, and McCarthyism. Federal spending on science and education rose rather than fell, especially through the National Defense Education Act of 1958 after Sputnik.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    stimulus: KENNAN,
    question: 'Critics in the 1960s and 1970s argued that applying containment in Southeast Asia',
    options: [
      'mistook a Vietnamese nationalist struggle for Soviet-directed expansion',
      'failed because it relied on economic aid rather than on military force',
      'neglected Southeast Asia in order to concentrate on defending Europe',
      'succeeded in Vietnam but drained funds from the space program',
    ],
    correctAnswer: 0,
    explanation:
      'Critics such as Senator J. William Fulbright, and later Kennan himself, argued that Vietnam\'s conflict was rooted in anticolonial nationalism and that treating it as Soviet expansion led to a costly, unwinnable war. The war was fought with more than 500,000 American troops at its peak, so it did not fail for lack of military force.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    stimulus: KING_1963,
    question: 'King\'s letter most directly defends which of the following strategies?',
    options: [
      'Patient negotiation with white officials while avoiding public protest',
      'Armed self-defense by Black communities against segregationist violence',
      'Nonviolent protest designed to force a response from those in power',
      'Reliance on federal lawsuits rather than mass action to end segregation',
    ],
    correctAnswer: 2,
    explanation:
      'King answers clergymen who called the Birmingham demonstrations "untimely," arguing that nonviolent direct action creates a crisis that forces negotiation. He rejects waiting for officials to act, insisting that freedom "must be demanded by the oppressed."',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    stimulus: KING_1963,
    question: 'The Birmingham campaign contributed most directly to',
    options: [
      'the Supreme Court\'s ruling in Brown v. Board of Education',
      'President Truman\'s order desegregating the armed forces',
      'the passage of the Civil Rights Act of 1964',
      'the Montgomery bus boycott\'s victory over bus segregation',
    ],
    correctAnswer: 2,
    explanation:
      'Televised images of police using dogs and fire hoses on young marchers in Birmingham led President Kennedy to propose the civil rights bill that became the Civil Rights Act of 1964. The Montgomery bus boycott ended in victory in 1956, seven years before the Birmingham campaign.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    stimulus: KING_1963,
    question: 'Later in the 1960s, many advocates of Black Power differed from King chiefly in that they',
    options: [
      'emphasized racial pride and self-defense over integration',
      'opposed mass demonstrations in favor of lawsuits in federal court',
      'worked mainly through the southern leadership of the Democratic Party',
      'focused on desegregating public schools in the rural South',
    ],
    correctAnswer: 0,
    explanation:
      'Leaders such as Stokely Carmichael and the Black Panthers stressed Black pride, community control, and armed self-defense, questioning integration and strict nonviolence. Reliance on federal lawsuits was the NAACP\'s long-standing approach, not a feature of Black Power.',
    topic: 'period-8-1945-1980',
  },

  /* ============== SET 20 — PERIOD 9: 1980–PRESENT ============== */
  {
    type: 'mcq',
    stimulus: REAGAN_1981,
    question: 'Reagan\'s statement is best understood in the context of which of the following?',
    options: [
      'Rising public confidence in federal economic management during the 1970s',
      'Strong economic growth and low inflation in the late 1970s',
      'Stagflation and declining public trust in government during the 1970s',
      'Broad public support for expanding the Great Society in the 1970s',
    ],
    correctAnswer: 2,
    explanation:
      'High inflation combined with unemployment, the energy crises, and the shocks of Vietnam and Watergate left many Americans skeptical of government, which helped Reagan win in 1980. The late 1970s brought double-digit inflation and slow growth, not the strong economy and low inflation that would have made his message less appealing.',
    topic: 'period-9-1980-present',
  },
  {
    type: 'mcq',
    stimulus: REAGAN_1981,
    question: 'Which of the following policies of the 1980s most directly reflected the goal Reagan stated?',
    options: [
      'An expansion of federal antipoverty programs modeled on the Great Society',
      'Cuts in defense spending to shrink the growing federal budget deficit',
      'Federal controls on wages and prices to bring down high inflation',
      'Reductions in income tax rates and in federal regulation of industry',
    ],
    correctAnswer: 3,
    explanation:
      'The Economic Recovery Tax Act of 1981 and later reforms cut income tax rates sharply, and the administration loosened regulation of industries such as energy and banking. Defense spending rose under Reagan, so a defense cut would contradict his record.',
    topic: 'period-9-1980-present',
  },
  {
    type: 'mcq',
    stimulus: REAGAN_1981,
    question: 'Which of the following later developments most directly continued the ideas Reagan expressed?',
    options: [
      'The 2010 Affordable Care Act expanding federal health insurance subsidies',
      'The 1990 Americans with Disabilities Act imposing new rules on employers',
      'The 2003 law adding a prescription drug benefit to Medicare',
      'The 1996 welfare reform law adding work requirements and time limits',
    ],
    correctAnswer: 3,
    explanation:
      'The 1996 Personal Responsibility and Work Opportunity Reconciliation Act, signed by President Clinton, replaced open-ended welfare entitlements with time-limited aid tied to work. The Affordable Care Act, the Americans with Disabilities Act, and the Medicare drug benefit all enlarged federal programs or federal regulation, the opposite of curbing "the size and influence of the Federal establishment."',
    topic: 'period-9-1980-present',
  },
]
