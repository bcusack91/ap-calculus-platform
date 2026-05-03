import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 55 stimulus-based AP US History MCQs modeled on the College Board
 * AP US History Course and Exam Description practice exam.
 *
 * Distribution roughly matches CB period weightings:
 *   Period 1 (1491–1607)   3 questions
 *   Period 2 (1607–1754)   5 questions
 *   Period 3 (1754–1800)   8 questions
 *   Period 4 (1800–1848)   8 questions
 *   Period 5 (1844–1877)   8 questions
 *   Period 6 (1865–1898)   7 questions
 *   Period 7 (1890–1945)   8 questions
 *   Period 8 (1945–1980)   6 questions
 *   Period 9 (1980–present) 2 questions
 *
 * Each question references a brief primary or secondary source; distractors
 * are matched in length and use plausible historical content.
 */
export const MCQS: MCQItem[] = [
  /* ============== PERIOD 1: 1491–1607 ============== */
  {
    type: 'mcq',
    question:
      '"There were among them many wise men and many sorcerers, of whom no one knows the number, so much they were given to making idols and the worship of them. They had their books of figures and characters by which they preserved an account of their history."\n— Bartolomé de las Casas, Apologetic History of the Indies, c. 1561, describing pre-contact Mesoamerican societies\n\nThe passage best supports which of the following claims about the Americas before European contact?',
    options: [
      'The major societies of the Americas had developed sophisticated religious, political, and recordkeeping institutions.',
      'Indigenous American societies before 1492 lacked any system of writing or quantitative recordkeeping.',
      'The peoples of the Americas had largely abandoned settled agriculture in favor of nomadic foraging.',
      'Most American societies in 1491 were small, egalitarian bands without specialized priests or scribes.',
    ],
    correctAnswer: 0,
    explanation:
      'Las Casas describes the priestly and codex-keeping institutions of complex Mesoamerican societies (Aztec, Maya). The other options contradict the archaeological and ethnohistorical record of pre-contact urban civilizations like Tenochtitlán and the Maya city-states.',
    topic: 'period-1-1491-1607',
  },
  {
    type: 'mcq',
    question:
      'Within roughly a century of 1492, the indigenous population of the Americas declined by an estimated 80–90 percent, while maize, potatoes, and tobacco spread across Eurasia and Africa.\n\nThe developments described above are best understood as part of which of the following?',
    options: [
      'The Columbian Exchange of biological and agricultural materials between the Old and New Worlds.',
      'The success of Spanish missionary efforts in introducing European agriculture to indigenous farmers.',
      'A coordinated indigenous trade policy that exported Andean and Mesoamerican crops to Eurasia.',
      'The rise of an Atlantic free-trade zone in which European powers renounced colonial monopolies.',
    ],
    correctAnswer: 0,
    explanation:
      'Disease-driven demographic collapse plus crop diffusion is the canonical Columbian Exchange. Spanish missions did not drive crop exchange; indigenous polities did not coordinate Eurasian trade; mercantilist colonial monopolies expanded, not contracted.',
    topic: 'period-1-1491-1607',
  },
  {
    type: 'mcq',
    question:
      'The Spanish encomienda system granted conquistadors the right to demand tribute and labor from indigenous communities in exchange for instructing them in Christianity and providing nominal protection.\n\nThe encomienda system best illustrates which of the following early Spanish colonial strategies?',
    options: [
      'The use of coerced indigenous labor and Christian conversion as twin pillars of imperial extraction.',
      'A reliance on free-wage indigenous labor regulated by elected representative town councils.',
      'A policy of strict racial separation barring Spanish settlers from any contact with native peoples.',
      'The replacement of indigenous tributary obligations by trans-Atlantic shipments of African gold.',
    ],
    correctAnswer: 0,
    explanation:
      'Encomienda combined coerced labor with mandated religious instruction — the "two republics" model justified imperial extraction. The other options describe systems Spain did not implement in this period.',
    topic: 'period-1-1491-1607',
  },

  /* ============== PERIOD 2: 1607–1754 ============== */
  {
    type: 'mcq',
    question:
      '"We shall be as a city upon a hill. The eyes of all people are upon us, so that if we shall deal falsely with our God in this work we have undertaken, we shall shame the faces of many of God\'s worthy servants."\n— John Winthrop, "A Model of Christian Charity," 1630\n\nWinthrop\'s sermon is best understood as evidence of which of the following?',
    options: [
      'Puritan migrants understood their settlement of Massachusetts Bay as a religious mission with broader spiritual stakes.',
      'New England settlers explicitly rejected any religious motivation in favor of secular commercial goals at Plymouth.',
      'Anglican royal officials in 1630 commissioned Puritan colonization to spread the established Church of England.',
      'Massachusetts Bay was founded primarily as a refuge for Catholics fleeing persecution in Stuart England.',
    ],
    correctAnswer: 0,
    explanation:
      'Winthrop\'s sermon expresses the Puritan idea of a covenanted religious community modeling reformed Christianity for the world. The other options invert the actual religious history of Puritan New England.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    question:
      'Bacon\'s Rebellion (1676) saw frontier farmers, indentured servants, and enslaved Africans together attack both Native Americans and the Virginia colonial government before being suppressed.\n\nThe rebellion contributed most directly to which of the following developments?',
    options: [
      'A shift by Chesapeake planters from English indentured servants to enslaved African labor.',
      'The immediate abolition of slavery throughout the British North American mainland colonies.',
      'The political union of Virginia and Maryland into a single Catholic-led proprietary colony.',
      'The withdrawal of Native American populations from all of the Virginia colony by the year 1690.',
    ],
    correctAnswer: 0,
    explanation:
      'After the multiracial rebellion, Chesapeake elites accelerated the transition from servitude to chattel slavery to prevent future cross-racial alliances among the laboring poor. The other options did not occur.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    question:
      'Between roughly 1700 and 1750, the Atlantic slave trade brought hundreds of thousands of enslaved Africans to the British North American colonies, with the largest concentrations on Chesapeake tobacco plantations and South Carolina rice plantations.\n\nThe pattern described best supports which of the following claims about the colonial labor system by 1750?',
    options: [
      'The colonial economy of the southern colonies depended fundamentally on enslaved African labor.',
      'Indentured servitude continued to provide the majority of agricultural labor in the southern colonies.',
      'The northern colonies in this period contained no enslaved African population of any kind.',
      'British policy banned the further importation of enslaved Africans into all mainland colonies.',
    ],
    correctAnswer: 0,
    explanation:
      'By the mid-1700s southern plantation economies were structurally dependent on slavery. Indentured servitude was declining; the northern colonies had smaller but real enslaved populations; and Britain encouraged, not banned, the trade.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    question:
      'The First Great Awakening of the 1730s and 1740s drew large crowds to outdoor sermons by ministers such as George Whitefield and Jonathan Edwards.\n\nThe Great Awakening contributed most directly to which of the following long-term developments?',
    options: [
      'The growth of religious pluralism and a tradition of voluntary, emotional, mass-audience evangelicalism.',
      'The voluntary unification of all British North American congregations under the Anglican Church.',
      'The decline of religious affiliation in the colonies and the rise of state-sponsored deism by 1760.',
      'The complete suppression of itinerant preaching by colonial assemblies after 1745 in every colony.',
    ],
    correctAnswer: 0,
    explanation:
      'The Awakening fragmented established churches, empowered itinerant preachers, and produced lasting evangelical Protestant traditions. The other options invert what happened.',
    topic: 'period-2-1607-1754',
  },
  {
    type: 'mcq',
    question:
      'New England colonies relied on shipbuilding, fishing, and trade with the West Indies; Middle colonies exported wheat and other grains; Southern colonies produced tobacco, rice, and indigo on plantations.\n\nThe regional pattern described above best illustrates which of the following features of colonial British North America by 1750?',
    options: [
      'Distinct regional economies shaped by climate, soil, and labor systems within a shared imperial trade framework.',
      'A single homogeneous economy in which all colonies produced identical staple crops by the mid-1700s.',
      'A general absence of overseas trade because British navigation laws barred all colonial export shipping.',
      'The dominance of subsistence agriculture in every colony, with virtually no commodity exports to Britain.',
    ],
    correctAnswer: 0,
    explanation:
      'The regional-specialization pattern within the Atlantic mercantilist system is the canonical structure of British North America by 1750. The other options contradict it.',
    topic: 'period-2-1607-1754',
  },

  /* ============== PERIOD 3: 1754–1800 ============== */
  {
    type: 'mcq',
    question:
      'The Proclamation of 1763, the Stamp Act of 1765, and the Townshend Acts of 1767 were all enacted in the years immediately following the British victory in the Seven Years\' War.\n\nThe legislation listed best illustrates which of the following British strategies after 1763?',
    options: [
      'An attempt to consolidate imperial control and recover war debts by tightening administration of the colonies.',
      'A deliberate policy of granting greater self-government to mainland North American colonial assemblies.',
      'A British effort to extend the same trade privileges to French Canadian merchants as to British settlers.',
      'A general British retreat from North American affairs after the cession of Canada by France in 1763.',
            ],
    correctAnswer: 0,
    explanation:
      'After 1763 Britain tried to recover the costs of the Seven Years\' War and police a much larger empire — the proximate cause of colonial protest. The other options invert post-war British policy.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      '"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."\n— Declaration of Independence, 1776\n\nThe principles expressed in the passage drew most directly upon which of the following intellectual traditions?',
    options: [
      'Enlightenment theories of natural rights and popular sovereignty associated with John Locke and similar thinkers.',
      'Anglican doctrines of divine-right monarchy reaffirmed by the Stuart kings of seventeenth-century England.',
      'Mercantilist arguments about the productive value of colonial settlers to the British imperial treasury.',
      'Iroquois Confederacy traditions of consensus government, which Jefferson and Adams explicitly cited as their primary source.',
    ],
    correctAnswer: 0,
    explanation:
      'Lockean natural rights and popular-sovereignty arguments structure the Declaration. Divine-right and mercantilist frameworks are exactly what the document rejects, and Iroquois influence (while debated) was not the explicit framework cited by the Continental Congress.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      'Under the Articles of Confederation (1781–1789), the national government could not levy taxes, regulate interstate commerce, or compel state compliance with treaties it signed.\n\nThe weaknesses described above contributed most directly to which of the following developments?',
    options: [
      'The drafting of the U.S. Constitution at the Philadelphia Convention of 1787 to create a stronger central government.',
      'The peaceful dissolution of the United States into thirteen separate independent republics by 1789.',
      'A successful national tax program that retired the Revolutionary War debt within five years of independence.',
      'The voluntary surrender of state sovereignty to a restored British colonial administration in the 1780s.',
    ],
    correctAnswer: 0,
    explanation:
      'Shays\' Rebellion and fiscal paralysis under the Articles spurred the 1787 Convention. The other options describe outcomes that did not occur.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      'The Three-Fifths Compromise, the Connecticut (Great) Compromise, and the Compromise on the Slave Trade were all reached during the drafting of the U.S. Constitution in 1787.\n\nThe agreements described above best support which of the following claims about the Constitutional Convention?',
    options: [
      'The framers\' agreement on a stronger national government required substantial concessions to slaveholding states and small states alike.',
      'The framers achieved consensus on national policy without making any concessions to sectional or state-size interests.',
      'The Constitution explicitly prohibited slavery in all states north of the Ohio River starting in the year 1787.',
      'The framers gave slaveholding states the same number of representatives as their free-population counts alone.',
    ],
    correctAnswer: 0,
    explanation:
      'The Constitution was a compromise document accommodating both small/large state and free/slave state interests. The other options contradict the historical record.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      '"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself."\n— James Madison, Federalist No. 51, 1788\n\nMadison\'s argument best supports which of the following constitutional principles?',
    options: [
      'A separation of powers and system of checks and balances designed to limit the abuse of governmental authority.',
      'The concentration of all federal authority in a single executive branch led by a hereditary monarch.',
      'The grant of unchecked legislative authority to a single national parliament without judicial review.',
      'The complete elimination of state governments in favor of a unitary national administrative state.',
    ],
    correctAnswer: 0,
    explanation:
      'Federalist 51 is the classical defense of separation of powers and checks and balances. The other options describe constitutional arrangements Madison explicitly opposed.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      'Alexander Hamilton\'s financial program in the early 1790s included federal assumption of state Revolutionary War debts, the chartering of a national bank, and the imposition of a federal excise tax on whiskey.\n\nHamilton\'s program is best understood as an effort to:',
    options: [
      'Strengthen the new federal government by tying the interests of wealthy creditors to its long-term success.',
      'Devolve as much economic authority as possible from the federal government to the individual states.',
      'Pay off the Revolutionary War debt by selling western public lands cheaply to subsistence farmers.',
      'Establish a strict gold-standard currency by forbidding all federal paper money issuance after 1791.',
    ],
    correctAnswer: 0,
    explanation:
      'Hamilton\'s program centralized fiscal authority and aligned creditor interests with federal stability — the central Federalist project. The other options invert his actual policies.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      'In his 1796 Farewell Address, George Washington warned Americans against "permanent alliances with any portion of the foreign world" and against the dangers of intense partisan faction at home.\n\nWashington\'s warnings most directly anticipated which of the following early national developments?',
    options: [
      'The intensification of partisan conflict between Federalists and Democratic-Republicans over both foreign and domestic policy.',
      'The voluntary dissolution of all U.S. political parties in the years immediately following 1796.',
      'The annexation of large parts of Mexico by the United States during the John Adams administration.',
      'The formal alliance of the U.S. with revolutionary France against Britain throughout the 1790s.',
    ],
    correctAnswer: 0,
    explanation:
      'Washington spoke as the first party system was already forming around Hamilton and Jefferson — and the Quasi-War with France soon tested his foreign-policy advice. The other options describe events that did not occur.',
    topic: 'period-3-1754-1800',
  },
  {
    type: 'mcq',
    question:
      'The Alien and Sedition Acts of 1798 made it a federal crime to publish "false, scandalous, and malicious" criticism of the federal government and lengthened the residency requirement for naturalization.\n\nThe acts provoked which of the following responses from Thomas Jefferson and James Madison?',
    options: [
      'The Virginia and Kentucky Resolutions, which articulated the doctrine that states could oppose unconstitutional federal laws.',
      'The Hartford Convention, which proposed New England\'s secession from the United States in protest of the laws.',
      'The Whiskey Rebellion, which led the federal government to repeal both the Alien and Sedition Acts in 1799.',
      'A constitutional amendment immediately ratified by all sixteen states banning future federal sedition statutes.',
    ],
    correctAnswer: 0,
    explanation:
      'Jefferson and Madison wrote the Virginia and Kentucky Resolutions, which became foundational texts for later doctrines of state interposition and nullification. The Hartford Convention came in 1814; the Whiskey Rebellion was 1794; and no such amendment was ratified.',
    topic: 'period-3-1754-1800',
  },

  /* ============== PERIOD 4: 1800–1848 ============== */
  {
    type: 'mcq',
    question:
      'In Marbury v. Madison (1803), Chief Justice John Marshall held that "it is emphatically the province and duty of the judicial department to say what the law is."\n\nThe decision is most significant for establishing which of the following constitutional principles?',
    options: [
      'The power of the federal judiciary to declare acts of Congress unconstitutional, known as judicial review.',
      'The unlimited authority of the federal executive branch to ignore Supreme Court rulings it disagreed with.',
      'The right of state legislatures to nullify any act of Congress within their respective state borders.',
      'The replacement of the Supreme Court by an elected congressional committee on constitutional matters.',
    ],
    correctAnswer: 0,
    explanation:
      'Marbury established judicial review, the foundational power of the federal courts. The other options describe principles Marshall specifically rejected or that no court adopted.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      'Through the Louisiana Purchase of 1803, the United States acquired roughly 828,000 square miles from France, doubling the size of the country.\n\nThe Louisiana Purchase is best understood in the context of which of the following early-nineteenth-century developments?',
    options: [
      'The expansion of U.S. territorial control westward across the North American continent.',
      'A Federalist Party project to limit western settlement in favor of New England commercial growth.',
      'The voluntary cession of French Caribbean colonies in exchange for U.S. recognition of Haitian independence.',
      'A coordinated multinational treaty by which Britain, Spain, and France divided the Mississippi watershed.',
    ],
    correctAnswer: 0,
    explanation:
      'The purchase is the foundational act of nineteenth-century westward expansion. Federalists actually opposed it, the U.S. did not recognize Haiti for decades, and no such multinational treaty existed.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      '"The American System will… by the establishment of a home market, give to our agriculturists a vent for their surplus produce; will provide a home demand for the products of the farmer, and will protect the manufacturer from foreign competition."\n— Henry Clay, speech in Congress, 1824\n\nClay\'s American System included all of the following EXCEPT:',
    options: [
      'A federal program to gradually emancipate enslaved laborers across the southern states.',
      'A protective tariff to shield American manufacturing from British imports.',
      'Federal funding for internal improvements such as roads and canals.',
      'Rechartering and use of a national bank to stabilize credit and currency.',
    ],
    correctAnswer: 0,
    explanation:
      'Clay\'s American System combined a tariff, internal improvements, and the Bank — but not emancipation. The other three were its three explicit pillars.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      'Andrew Jackson\'s presidency (1829–1837) saw the Indian Removal Act of 1830, the destruction of the Second Bank of the United States, and a sharp rise in voter participation by white men.\n\nThe developments described above best illustrate which of the following features of "Jacksonian Democracy"?',
    options: [
      'Expanded political participation for white men paired with intensified federal policies of expansion and forced removal of Native peoples.',
      'A general extension of voting rights to women, Native Americans, and free African Americans throughout the southern states.',
      'A consistent commitment by the Jackson administration to the constitutional sovereignty of the Cherokee Nation in Georgia.',
      'A voluntary withdrawal of the federal government from regulation of national banking, currency, and tariff policy.',
    ],
    correctAnswer: 0,
    explanation:
      'Jacksonian "democracy" combined wider white-male suffrage with hostility to the Bank and to indigenous sovereignty (Worcester v. Georgia notwithstanding). The other options invert the record.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      '"The injuries and usurpations on the part of man toward woman… have as their direct object the establishment of an absolute tyranny over her. To prove this, let facts be submitted to a candid world."\n— Declaration of Sentiments, Seneca Falls Convention, 1848\n\nThe document\'s rhetorical structure most directly draws on which of the following?',
    options: [
      'The U.S. Declaration of Independence, repurposed to frame women\'s grievances as parallel to those of the colonies in 1776.',
      'A papal encyclical of the early nineteenth century calling for the legal subordination of married Catholic women.',
      'The Federalist Papers, particularly the essays of Alexander Hamilton on standing armies and judicial review.',
      'British common-law doctrines of coverture, which the Seneca Falls organizers explicitly endorsed in 1848.',
    ],
    correctAnswer: 0,
    explanation:
      'The Declaration of Sentiments deliberately mirrors the 1776 Declaration of Independence. The Seneca Falls organizers attacked, not endorsed, coverture, and the document drew nothing from papal documents or the Federalist Papers.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      'Between 1820 and 1850, evangelical revivalism, abolitionism, temperance societies, women\'s rights conventions, and asylum reform all expanded across the northern United States.\n\nThe pattern described above is best understood as part of which of the following?',
    options: [
      'A broad antebellum reform movement linking evangelical religion to social and moral improvement.',
      'A Catholic Counter-Reformation initiative to restore traditional sacramental practice in the U.S. South.',
      'A federal program funded by the Jackson administration to rebuild urban communities in the Northeast.',
      'A coordinated reform program led by southern planters to extend slavery into northern free states.',
    ],
    correctAnswer: 0,
    explanation:
      'These movements form the antebellum reform tradition rooted in the Second Great Awakening. The other options misidentify the actors and the religious context.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      'The Erie Canal (opened 1825), the spread of textile mills in Lowell and other New England towns, and the construction of state-funded turnpikes are all examples of:',
    options: [
      'The early-nineteenth-century market revolution that integrated regional economies and transformed American labor.',
      'A southern plantation initiative to expand cotton exports through canals along the Mississippi River system.',
      'A Jacksonian program to abolish federal funding for any infrastructure crossing state boundaries after 1828.',
      'A coordinated effort by Native nations of the Northeast to reclaim land lost in the eighteenth century.',
    ],
    correctAnswer: 0,
    explanation:
      'The "market revolution" of the early 1800s integrated regional economies through transport infrastructure and factory production. The other options misidentify the actors and outcomes.',
    topic: 'period-4-1800-1848',
  },
  {
    type: 'mcq',
    question:
      'Between 1830 and 1850, more than a million Irish and German immigrants arrived in the United States, settling especially in northeastern cities and in the Old Northwest.\n\nThe immigration described above contributed most directly to which of the following?',
    options: [
      'The rise of nativist political movements such as the Know-Nothing Party in the 1850s.',
      'A widespread political consensus welcoming Catholic immigration to the U.S. during the early 1850s.',
      'The collapse of the U.S. urban manufacturing economy due to insufficient industrial labor supply.',
      'The mass migration of Irish and German settlers to the South to work on cotton plantations.',
    ],
    correctAnswer: 0,
    explanation:
      'Irish and German Catholic immigration spurred Protestant nativism, expressed through the American (Know-Nothing) Party. The other options contradict the historical pattern.',
    topic: 'period-4-1800-1848',
  },

  /* ============== PERIOD 5: 1844–1877 ============== */
  {
    type: 'mcq',
    question:
      '"Our manifest destiny is to overspread the continent allotted by Providence for the free development of our yearly multiplying millions."\n— John L. O\'Sullivan, United States Magazine and Democratic Review, 1845\n\nO\'Sullivan\'s argument was used most directly to justify which of the following?',
    options: [
      'U.S. territorial expansion across North America, including the annexation of Texas and war with Mexico.',
      'A federal program to gradually emancipate enslaved laborers in the territory acquired from Mexico by 1850.',
      'The voluntary withdrawal of U.S. claims to Oregon Country in favor of joint British-Russian administration.',
      'A constitutional amendment limiting U.S. territorial growth to lands east of the Mississippi River.',
    ],
    correctAnswer: 0,
    explanation:
      '"Manifest Destiny" became the ideological frame for annexation of Texas (1845) and the U.S.-Mexican War (1846–48). The other options invert the historical record.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'The Compromise of 1850 admitted California as a free state, organized New Mexico and Utah territories under "popular sovereignty," abolished the slave trade in Washington, D.C., and enacted a stronger Fugitive Slave Act.\n\nThe Fugitive Slave Act provision is best understood as:',
    options: [
      'A concession to slaveholding states that intensified northern opposition to the institution of slavery in the 1850s.',
      'A guarantee that no enslaved person would ever be returned to a southern enslaver against their will.',
      'A recognition of the personal-liberty laws passed by northern states protecting fugitives from rendition.',
      'A general consensus that ended sectional conflict over slavery for more than a generation.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1850 Fugitive Slave Act radicalized northern opinion (e.g., Uncle Tom\'s Cabin, the Anthony Burns case) and accelerated, rather than ended, the sectional crisis. The other options contradict its actual provisions and effects.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'In the Dred Scott v. Sandford decision (1857), the U.S. Supreme Court held that African Americans could not be U.S. citizens and that Congress had no constitutional authority to prohibit slavery in federal territories.\n\nThe Dred Scott decision contributed most directly to which of the following?',
    options: [
      'The collapse of any remaining sectional compromise on slavery and the rise of the Republican Party as a national force.',
      'The voluntary emancipation of enslaved people throughout the southern United States by the end of 1858.',
      'A constitutional amendment passed in 1858 immediately overturning the decision and enfranchising Black Americans.',
      'A formal alliance between the Republican and Democratic parties to defend the Missouri Compromise of 1820.',
    ],
    correctAnswer: 0,
    explanation:
      'Dred Scott invalidated the Missouri Compromise framework and accelerated the breakdown of national parties — directly fueling the Republican rise that elected Lincoln in 1860. The other options describe outcomes that did not occur.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      '"The Union is older than any of the States, and, in fact, it created them as States… No State, upon its own mere motion, can lawfully get out of the Union."\n— Abraham Lincoln, First Inaugural Address, March 4, 1861\n\nLincoln\'s argument is best understood as a response to which of the following?',
    options: [
      'The secession of seven southern states between December 1860 and February 1861 in response to Lincoln\'s election.',
      'A British proposal to recognize the Confederacy as an independent state under the Treaty of Ghent in 1861.',
      'The voluntary readmission of the Confederate states to the Union under the Crittenden Compromise of 1861.',
      'A Supreme Court ruling in 1861 that explicitly authorized the secession of any U.S. state by majority vote.',
    ],
    correctAnswer: 0,
    explanation:
      'Lincoln\'s First Inaugural denied the constitutional legitimacy of secession after South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana, and Texas had seceded. The other options describe events that did not happen.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'During the Civil War, the Union government issued paper "greenback" currency, levied the first federal income tax, established a national banking system, and conscripted soldiers through a federal draft.\n\nThese measures best illustrate which of the following developments?',
    options: [
      'A wartime expansion of federal authority that significantly enlarged the powers of the national government.',
      'A general retreat of federal authority over the economy in favor of state-level Confederate-style decentralization.',
      'A successful Union effort to abolish the federal income tax and the national banking system within five years.',
      'A continuation of the limited antebellum federal state, with no significant change in federal capacity.',
    ],
    correctAnswer: 0,
    explanation:
      'The Civil War created a sharply more powerful federal state (Greenbacks, income tax, National Banking Acts, the draft) — a precondition for Reconstruction and later federal action. The other options invert the record.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'The Thirteenth Amendment (1865), Fourteenth Amendment (1868), and Fifteenth Amendment (1870) abolished slavery, granted birthright citizenship and equal protection, and protected the right to vote regardless of race.\n\nThe Reconstruction amendments are best understood as:',
    options: [
      'A constitutional foundation for federal civil rights enforcement that was sharply contested in subsequent decades.',
      'An explicit constitutional guarantee that women throughout the Union would have full voting rights by 1870.',
      'A rollback of federal authority that allowed southern states to define citizenship on their own terms after 1868.',
      'A set of treaty agreements between the United States and the Confederate States ratified in 1865.',
    ],
    correctAnswer: 0,
    explanation:
      'The Reconstruction amendments expanded federal authority over civil rights, although their enforcement was undermined for nearly a century. They did not enfranchise women, did not return authority to states, and were constitutional amendments, not treaties.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'The Compromise of 1877 resolved the disputed presidential election of 1876 in favor of Republican Rutherford B. Hayes in exchange for the withdrawal of remaining federal troops from the South.\n\nThe Compromise of 1877 is most directly significant for:',
    options: [
      'Marking the end of Reconstruction and the beginning of southern "Redemption" by Democratic state governments.',
      'Producing a long-term Republican Party majority in southern state legislatures into the 1890s.',
      'Establishing a federal commission to enforce voting rights for Black southerners until the early 1900s.',
      'Inaugurating direct federal occupation of Texas and Louisiana for the next twenty-five years.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1877 Compromise effectively ended Reconstruction and allowed the rise of one-party Democratic "Redeemer" rule in the South. The other options invert the actual outcome.',
    topic: 'period-5-1844-1877',
  },
  {
    type: 'mcq',
    question:
      'The sharecropping system that emerged in the post-Civil War South tied formerly enslaved African Americans (and many poor whites) to landowners through perpetual debt for tools, seed, and supplies.\n\nThe sharecropping system is best understood as:',
    options: [
      'A coercive labor arrangement that, while not slavery, sharply constrained the economic mobility of southern Black workers.',
      'A system of independent yeoman farming on land granted to formerly enslaved people by the Freedmen\'s Bureau.',
      'A return to large-scale gang labor on plantations identical in legal structure to antebellum slavery.',
      'A system of high-wage industrial employment in southern textile mills owned by formerly enslaved workers.',
    ],
    correctAnswer: 0,
    explanation:
      'Sharecropping was an exploitative crop-lien system that constrained but did not legally enslave Black laborers. The other options misrepresent its structure.',
    topic: 'period-5-1844-1877',
  },

  /* ============== PERIOD 6: 1865–1898 ============== */
  {
    type: 'mcq',
    question:
      'Between 1865 and 1900, U.S. industrial output rose more than fivefold, the rail network grew from roughly 35,000 miles to nearly 200,000 miles, and corporations such as Standard Oil and Carnegie Steel achieved unprecedented size.\n\nThe developments described are best understood in the context of which of the following?',
    options: [
      'The Gilded Age expansion of large-scale industrial capitalism and corporate consolidation in the United States.',
      'A federal program of nationalization that placed the railroads and major industrial firms under public ownership.',
      'The decline of U.S. manufacturing in the face of large-scale British industrial imports from 1865 onward.',
      'A general retreat of corporations from interstate commerce in favor of small-scale artisanal production.',
    ],
    correctAnswer: 0,
    explanation:
      'The Gilded Age was defined by industrial expansion, corporate consolidation, and the rise of the modern corporation. The other options contradict the basic economic record.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      'Between 1880 and 1920, more than 20 million immigrants entered the United States, with growing numbers from southern and eastern Europe joining earlier flows from Ireland, Germany, and Scandinavia.\n\nThe pattern described above contributed most directly to which of the following?',
    options: [
      'A significant transformation of urban demography accompanied by nativist political backlash and new restrictionist legislation.',
      'A general legal welcome of all European immigrants into U.S. cities under federally guaranteed citizenship by 1900.',
      'The voluntary departure of most U.S.-born city dwellers to rural areas in response to the new immigration.',
      'A sharp decline of urban industrial employment because the new immigrants refused to take factory jobs.',
    ],
    correctAnswer: 0,
    explanation:
      'Late-19th-century immigration transformed U.S. cities and produced lasting nativist responses (e.g., Chinese Exclusion 1882; literacy tests; ultimately the 1924 quotas). The other options contradict the historical record.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      'The Knights of Labor, the American Federation of Labor, and the Populist Party all emerged in the late nineteenth century in response to:',
    options: [
      'The economic and political consequences of industrialization, including low wages, long hours, and corporate political power.',
      'A general decline in U.S. industrial output that left most factory workers permanently unemployed by 1885.',
      'A federal program of mandatory eight-hour workdays adopted by Congress in 1880 and applied nationwide.',
      'A consensus among industrial leaders that organized labor should set national wage levels by the late 1880s.',
    ],
    correctAnswer: 0,
    explanation:
      'These organizations responded to industrial-era labor and political grievances. The other options invert the historical record (industrial output rose; the federal eight-hour day was not adopted; industrialists overwhelmingly opposed labor power).',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      'In the 1880s and 1890s, southern state governments enacted poll taxes, literacy tests, and "grandfather clauses" that effectively disenfranchised most Black voters; the Supreme Court in Plessy v. Ferguson (1896) upheld racially segregated public facilities under the doctrine of "separate but equal."\n\nThe developments described above are best understood as part of which of the following?',
    options: [
      'The post-Reconstruction consolidation of legalized racial segregation and Black disenfranchisement, often called the Jim Crow system.',
      'A federal program of equal protection that effectively guaranteed Black voting rights across the South after 1890.',
      'A southern state-level expansion of Reconstruction-era civil rights that included integrated public schooling by 1896.',
      'A general extension of voting rights to women and immigrants without regard to race throughout the South.',
    ],
    correctAnswer: 0,
    explanation:
      'Post-Reconstruction southern states built the Jim Crow system, codified by Plessy. The other options invert the actual record.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      'The Dawes Severalty Act of 1887 broke up communal Native American reservations into individual allotments and opened "surplus" land to white settlement.\n\nThe Dawes Act is best understood as:',
    options: [
      'A federal effort to dissolve tribal landholding and assimilate Native Americans into Anglo-American property norms.',
      'A federal guarantee of permanent communal Native landholding free from any further white encroachment.',
      'A treaty among the Plains nations that voluntarily redistributed lands to white settlers after 1887.',
      'A successful program that restored to Native nations roughly two-thirds of the lands they had lost since 1850.',
    ],
    correctAnswer: 0,
    explanation:
      'Dawes was an assimilationist statute that resulted in the loss of roughly two-thirds of remaining tribal land by the 1930s. The other options invert its actual effect.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      '"You shall not press down upon the brow of labor this crown of thorns; you shall not crucify mankind upon a cross of gold."\n— William Jennings Bryan, "Cross of Gold" speech, Democratic National Convention, 1896\n\nBryan\'s speech most directly advocated which of the following positions?',
    options: [
      'The free coinage of silver to expand the money supply on behalf of debtors and farmers.',
      'A return to a strict gold-only monetary standard supported by eastern banking interests.',
      'The federal nationalization of all U.S. railroads under government ownership by the year 1900.',
      'The withdrawal of the United States from any international trade treaties signed before 1896.',
    ],
    correctAnswer: 0,
    explanation:
      'Bryan\'s speech demanded bimetallism (free silver) to inflate the money supply on behalf of indebted farmers. The other options misrepresent his platform.',
    topic: 'period-6-1865-1898',
  },
  {
    type: 'mcq',
    question:
      'In 1898, the United States went to war with Spain following the explosion of the U.S.S. Maine in Havana harbor, and at the war\'s end annexed Puerto Rico, Guam, and the Philippines.\n\nThe Spanish-American War is best understood as a turning point because:',
    options: [
      'It marked the U.S. emergence as an overseas imperial power with possessions outside the North American continent.',
      'It ended permanent U.S. interest in territorial acquisition outside the original thirteen colonies.',
      'It established a constitutional amendment requiring all future overseas annexations to be approved by referendum.',
      'It produced an immediate U.S. withdrawal from the Caribbean and Pacific that lasted into the 1940s.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1898 war marked U.S. entry into formal overseas empire. The other options invert the historical outcome.',
    topic: 'period-6-1865-1898',
  },

  /* ============== PERIOD 7: 1890–1945 ============== */
  {
    type: 'mcq',
    question:
      'Between 1900 and 1917, Progressive Era reformers secured federal regulation of food and drugs (Pure Food and Drug Act, 1906), the breakup of major industrial trusts, the direct election of U.S. senators (Seventeenth Amendment, 1913), and a federal income tax (Sixteenth Amendment, 1913).\n\nThe pattern described above is best understood as evidence of:',
    options: [
      'An expansion of federal regulatory authority in response to industrial-era inequalities and corporate concentration.',
      'A general retreat of federal authority over the economy in favor of complete state-level deregulation.',
      'A consensus among industrial leaders that the federal government should nationalize railroads, banks, and steel.',
      'A successful effort by southern Democrats to secure full voting rights for African American men by 1917.',
    ],
    correctAnswer: 0,
    explanation:
      'Progressivism expanded federal regulatory capacity. The other options invert the historical record (Black voting rights were stripped, not extended, in this period).',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      '"The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty."\n— Woodrow Wilson, war message to Congress, April 1917\n\nWilson\'s argument is best understood as:',
    options: [
      'An effort to frame U.S. entry into World War I as a moral and ideological crusade rather than a narrow national interest.',
      'A request that Congress declare U.S. neutrality in the European conflict and refuse to enter the war.',
      'A treaty proposal that would unite the U.S. with the Central Powers against Britain, France, and Russia.',
      'A constitutional amendment proposal to abolish the U.S. armed forces by the end of 1917.',
    ],
    correctAnswer: 0,
    explanation:
      'Wilson framed U.S. belligerency in idealist terms — democracy, self-determination, the League of Nations. The other options invert his actual position.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      'The Eighteenth Amendment (1919) prohibited the manufacture, sale, and transportation of alcoholic beverages; the Nineteenth Amendment (1920) prohibited the denial of voting rights on the basis of sex.\n\nThe two amendments together best illustrate which of the following features of early-twentieth-century American politics?',
    options: [
      'The success of long-running Progressive Era reform movements at securing constitutional change at the national level.',
      'A general decline of organized political activism among American women between 1900 and 1920.',
      'A federal commitment to the regulation of personal morality that endured uninterrupted until the year 2000.',
      'An effort by southern state legislatures to extend the vote to African American women throughout the South.',
    ],
    correctAnswer: 0,
    explanation:
      'Both amendments capped decades of organized reform activism (temperance and suffrage). Prohibition was repealed in 1933, and Jim Crow continued to disenfranchise Black women in the South — qualifying the optimism of the era.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      'The Great Migration brought roughly six million African Americans from the rural South to northern and western cities between 1910 and 1970.\n\nWhich of the following best explains the pattern described above?',
    options: [
      'A combination of southern racial violence, sharecropping debt, and northern industrial wartime labor demand.',
      'A federal program initiated by President Wilson in 1916 to relocate Black agricultural workers to northern cities.',
      'A successful campaign by southern state governments to attract Black migrants from the urban North after 1910.',
      'The voluntary return of Black Americans to West Africa under the auspices of the American Colonization Society.',
    ],
    correctAnswer: 0,
    explanation:
      'Push factors (Jim Crow, lynching, debt peonage) combined with pull factors (WWI/WWII industrial labor demand) drove the Great Migration. The other options misidentify both the actors and the direction.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      'Between 1929 and 1933 U.S. unemployment rose from roughly 3 percent to nearly 25 percent, and U.S. GDP fell by roughly a quarter.\n\nThe federal response under Franklin Roosevelt\'s New Deal (1933–1939) is best characterized as:',
    options: [
      'A significant expansion of federal authority over the economy through relief, recovery, and reform programs.',
      'A complete withdrawal of federal involvement in the economy in favor of state-level laissez-faire policies.',
      'A federal program that explicitly nationalized all U.S. banks, railroads, and steel mills by 1935.',
      'A return to the Hamiltonian financial program of the 1790s, including a strict bullionist gold-only currency.',
    ],
    correctAnswer: 0,
    explanation:
      'The New Deal expanded federal authority through agencies like the WPA, CCC, SEC, NLRB, and Social Security — without nationalizing major industries. The other options misrepresent its scope.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      'During World War II, the U.S. federal government built more than two million units of war housing, contracted directly with industrial firms to produce more than 300,000 aircraft, conscripted more than 10 million soldiers, and interned roughly 120,000 people of Japanese descent on the West Coast.\n\nThe wartime developments listed above best illustrate which of the following?',
    options: [
      'A dramatic expansion of federal mobilization, economic management, and authority over civil liberties during total war.',
      'A general withdrawal of federal authority during wartime in favor of state-level industrial planning boards.',
      'A federal program of voluntary military service that filled the U.S. armed forces without any draft after 1941.',
      'A federal commitment to civil liberties that prevented any restriction on the rights of any U.S. resident during wartime.',
    ],
    correctAnswer: 0,
    explanation:
      'WWII marked an enormous expansion of federal capacity — and, in the case of Japanese internment, a sweeping wartime restriction of civil liberties. The other options invert the record.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      'In August 1945 the United States dropped atomic bombs on Hiroshima and Nagasaki, killing more than 100,000 civilians and prompting Japan\'s surrender within days.\n\nThe long-term world-historical significance of these events is best understood as:',
    options: [
      'The opening of the nuclear age, which subsequently structured U.S. strategic competition with the Soviet Union.',
      'The voluntary renunciation of nuclear weapons by all wartime belligerents under the United Nations Charter.',
      'The end of all interstate warfare between major powers from 1945 to the present in any region of the globe.',
      'The conversion of Imperial Japan into a permanent member of the United Nations Security Council in 1945.',
    ],
    correctAnswer: 0,
    explanation:
      'The 1945 atomic bombings opened the nuclear age and shaped Cold War strategy. The UN Charter did not renounce nuclear weapons; major-power proxy wars continued; and Japan was not given a UNSC permanent seat.',
    topic: 'period-7-1890-1945',
  },
  {
    type: 'mcq',
    question:
      '"As the Negro is here, and here to stay, it is for us to adjust ourselves to his presence… in all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress."\n— Booker T. Washington, Atlanta Compromise speech, 1895\n\nW. E. B. Du Bois\'s critique of Washington\'s position is best summarized as:',
    options: [
      'An insistence that African Americans had to demand full civil and political rights immediately, not accept gradualist accommodation.',
      'An argument that African Americans should permanently abandon any pursuit of higher education or skilled trades.',
      'A defense of literacy tests and poll taxes as legitimate prerequisites for Black voting rights in the South.',
      'A proposal that African Americans return to West Africa under federal auspices in the early twentieth century.',
    ],
    correctAnswer: 0,
    explanation:
      'Du Bois (in The Souls of Black Folk and through the NAACP) demanded immediate civil and political equality and the cultivation of a "Talented Tenth" — explicitly opposing Washington\'s gradualist accommodation.',
    topic: 'period-7-1890-1945',
  },

  /* ============== PERIOD 8: 1945–1980 ============== */
  {
    type: 'mcq',
    question:
      'Between 1947 and 1989, the United States and the Soviet Union avoided direct military confrontation but supplied opposing sides in Korea, Vietnam, Angola, and Afghanistan, while the U.S. organized NATO and the Warsaw Pact organized eastern Europe.\n\nThe pattern described best illustrates which of the following Cold War features?',
    options: [
      'The use of alliances and proxy wars to pursue superpower competition without direct nuclear escalation.',
      'A general U.S. withdrawal from European and Asian security commitments after the end of WWII.',
      'A consistent willingness of both superpowers to deploy strategic nuclear weapons in regional conflicts.',
      'The successful neutrality of the United Nations in containing all major regional conflicts after 1945.',
    ],
    correctAnswer: 0,
    explanation:
      'Cold War strategy combined alliance-building with proxy warfare under the constraint of mutually assured destruction. The other options invert the record.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    question:
      'The Servicemen\'s Readjustment Act ("GI Bill," 1944), the Federal-Aid Highway Act of 1956, and the Federal Housing Administration\'s mortgage insurance programs together contributed most directly to which of the following postwar trends?',
    options: [
      'The growth of suburban housing, automobile commuting, and a federally subsidized middle class — predominantly white in the early decades.',
      'A federal program that integrated suburban housing across racial lines beginning immediately after World War II.',
      'A general decline of urban populations because federal subsidies favored rural agricultural housing throughout the 1950s.',
      'The mass migration of suburban families back to inner cities under direct federal relocation orders in the 1960s.',
    ],
    correctAnswer: 0,
    explanation:
      'GI Bill, FHA mortgage insurance, and the interstate highway program built the postwar suburbs — and through redlining and FHA underwriting practices, those subsidies disproportionately benefited white families. The other options invert the record.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    question:
      'In Brown v. Board of Education (1954), the Supreme Court unanimously held that "in the field of public education, the doctrine of \'separate but equal\' has no place."\n\nBrown is best understood as:',
    options: [
      'A constitutional repudiation of Plessy v. Ferguson that became a cornerstone of the modern civil rights movement.',
      'An affirmation of the 1896 Plessy doctrine that public schools could be segregated by race if facilities were equal.',
      'A federal program guaranteeing equal funding to all U.S. public school districts regardless of race or geography.',
      'A constitutional amendment ratified by all 48 states in 1954 outlawing school segregation in every state.',
    ],
    correctAnswer: 0,
    explanation:
      'Brown overturned Plessy in the public-school context and became the legal foundation of the modern civil rights movement. It was a Supreme Court decision, not an amendment, and it did not equalize school funding.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    question:
      '"I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood."\n— Martin Luther King Jr., March on Washington, August 1963\n\nThe march and speech contributed most directly to which of the following?',
    options: [
      'The political momentum behind passage of the Civil Rights Act of 1964 and the Voting Rights Act of 1965.',
      'The voluntary repeal of all southern Jim Crow laws by state legislatures within six months of August 1963.',
      'A constitutional amendment ratified in 1963 that abolished the U.S. Supreme Court\'s judicial-review power.',
      'A federal program of mandatory racial segregation in all public accommodations south of the Mason-Dixon line.',
    ],
    correctAnswer: 0,
    explanation:
      'The march and King\'s speech mobilized the political pressure that helped pass the 1964 Civil Rights Act and the 1965 Voting Rights Act. The other options describe outcomes that did not occur.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    question:
      'Between 1965 and 1973, the United States deployed more than 500,000 troops to South Vietnam, dropped more bombs on Indochina than were used in all of World War II, and sustained more than 58,000 American military deaths.\n\nThe long-term political consequences of the Vietnam War in the United States most directly included:',
    options: [
      'A profound decline of public trust in the federal government and reform of the executive\'s war-making powers.',
      'A consensus among the American public that future U.S. wars in Asia should be even larger and longer.',
      'A general renewal of public confidence in the U.S. presidency that endured uninterrupted into the 21st century.',
      'A successful U.S. diplomatic settlement that produced a unified non-communist government in Vietnam by 1976.',
    ],
    correctAnswer: 0,
    explanation:
      'Vietnam shattered public trust and produced the War Powers Resolution of 1973. Saigon fell to the North in 1975, unifying Vietnam under communist rule, and U.S. confidence in the presidency was further undermined by Watergate.',
    topic: 'period-8-1945-1980',
  },
  {
    type: 'mcq',
    question:
      'The "Second Wave" feminist movement of the 1960s and 1970s organized around publications such as Betty Friedan\'s The Feminine Mystique (1963), the founding of the National Organization for Women (1966), and Title IX of the Education Amendments of 1972.\n\nWhich of the following best describes one significant outcome of this movement?',
    options: [
      'A substantial expansion of women\'s legal protections in employment and education, even though the Equal Rights Amendment fell short of ratification.',
      'A successful ratification of the Equal Rights Amendment by all 50 states by the federal deadline in 1982.',
      'A general consensus among American religious denominations that ordained women as clergy beginning in 1965.',
      'A federal program that achieved full pay parity between men and women for equivalent work by the year 1980.',
    ],
    correctAnswer: 0,
    explanation:
      'Second Wave feminism produced major statutory and judicial gains (Title IX, Roe v. Wade, EEOC enforcement) — but the ERA was not ratified, and pay parity has not been achieved. The other options overstate the outcomes.',
    topic: 'period-8-1945-1980',
  },

  /* ============== PERIOD 9: 1980–PRESENT ============== */
  {
    type: 'mcq',
    question:
      'Between 1981 and 1989, President Ronald Reagan reduced the top federal income-tax rate from 70 percent to 28 percent, deregulated several major industries, and increased federal defense spending sharply.\n\nReagan\'s domestic program is best understood as:',
    options: [
      'A conservative effort to reduce direct federal regulation while reorienting federal spending toward defense.',
      'A continuation of New Deal–style federal expansion of welfare and labor regulation throughout the 1980s.',
      'A successful federal program that fully balanced the U.S. budget by the end of the 1980s.',
      'A constitutional amendment ratified in 1981 that abolished federal income taxation in the United States.',
    ],
    correctAnswer: 0,
    explanation:
      'Reaganomics combined tax cuts, deregulation, and a defense build-up, while running large deficits. The other options invert the record.',
    topic: 'period-9-1980-present',
  },
  {
    type: 'mcq',
    question:
      'The 2008 financial crisis triggered the deepest U.S. recession since the Great Depression, the bipartisan TARP bailout of major financial institutions, and the federal stimulus package of 2009.\n\nThe federal response to the crisis is best understood as:',
    options: [
      'An expansion of federal economic intervention to stabilize the financial system and the broader macroeconomy.',
      'A consistent application of strict laissez-faire policy that allowed major U.S. banks to fail without intervention.',
      'A federal commitment to the gold standard restored by congressional statute in late 2008.',
      'A successful program that prevented the U.S. unemployment rate from rising at all between 2008 and 2010.',
    ],
    correctAnswer: 0,
    explanation:
      'The 2008–2009 response (TARP, the Recovery Act, Federal Reserve interventions) was a major expansion of federal economic action. The other options contradict the record.',
    topic: 'period-9-1980-present',
  },
]
