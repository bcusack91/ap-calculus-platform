import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP African American Studies — 60 MCQs, matching Section I of the real exam
 * (60 questions, 70 minutes, 60% of the score). Most questions come in
 * source-based sets of three around a shared text, image description, or
 * data table, as on the College Board exam.
 *
 * Distribution by CED unit (2024 framework weights):
 *   Unit 1 — Origins of the African Diaspora (20–25%)          13
 *   Unit 2 — Freedom, Enslavement, and Resistance (30–35%)     20
 *   Unit 3 — The Practice of Freedom (20–25%)                  13
 *   Unit 4 — Movements and Debates (20–25%)                    14
 */

/* ---------- Shared sources ---------- */

const CATALAN_ATLAS =
  'The following describes part of the Catalan Atlas, a world map made on the Mediterranean island of Majorca around 1375 for European readers.\n\nIn the West African section, the mapmaker drew a crowned Black ruler seated on a throne, holding a gold nugget in one hand and a scepter in the other. A veiled rider on a camel approaches him from the north. The caption names the ruler as the lord of Mali and calls him the richest and most noble king in the region because of the abundance of gold gathered in his land.'

const LEO_AFRICANUS =
  '"Here are great store of doctors, judges, priests, and other learned men, that are bountifully maintained at the king\'s cost and charges. And hither are brought diverse manuscripts or written books out of Barbary, which are sold for more money than any other merchandise."\n— Leo Africanus (al-Hasan al-Wazzan), describing Timbuktu, which he visited in the early 1500s (English translation, 1600). "Barbary" refers to North Africa.'

const AFONSO_LETTER =
  '"Each day the traders are kidnapping our people—children of this country, sons of our nobles and vassals, even people of our own family. . . . This corruption and depravity are so widespread that our land is entirely depopulated. . . . We need in this kingdom only priests and schoolteachers, and no merchandise, unless it is wine and flour for Mass. . . . It is our wish that this Kingdom not be a place for the trade or transport of slaves."\n— Afonso I (Nzinga Mbemba), king of Kongo, letter to King João III of Portugal, 1526 (translated)'

const IDIA_MASK =
  'The following describes an ivory pendant mask carved in the Kingdom of Benin, in present-day Nigeria, in the early 1500s.\n\nThe face is identified as Idia, mother of the Oba (king) Esigie. She was honored for helping her son secure the throne and for the military and spiritual support she gave during his wars. The Oba wore such pendants at the hip during royal ceremonies. Above the face, the crown is carved with small heads of bearded Portuguese men.'

const BROOKES_PRINT =
  'The following describes a print first published by abolitionists in Plymouth, England, in 1788 and soon reproduced in London and Philadelphia.\n\nThe print shows the deck plans of the British slave ship Brookes, viewed from above and in cross-section. Hundreds of small, identical figures of enslaved Africans lie in tight rows, shoulder to shoulder, filling every level of the ship.'

const ARRIVALS_TABLE =
  'Estimated number of enslaved Africans who survived the Atlantic crossing, by region of arrival, 1501–1866\n\nBrazil: 4.9 million\nBritish Caribbean: 2.3 million\nSpanish Americas: 1.3 million\nFrench Caribbean: 1.1 million\nDutch Americas: 0.4 million\nMainland North America: 0.4 million\nOther destinations: 0.3 million\n\nTotal arriving: about 10.7 million, out of about 12.5 million people embarked in Africa.\n— Data from the Trans-Atlantic Slave Trade Database'

const FORT_MOSE =
  'In 1693 the Spanish Crown offered freedom to enslaved people who escaped from the British colonies to Spanish Florida and accepted Catholicism. In 1738 Florida\'s governor established Gracia Real de Santa Teresa de Mose (Fort Mose), a settlement of free Black men and women and their families, about two miles north of St. Augustine. Its militia, led by Francisco Menéndez, helped defend the colony against British attacks.'

const DOUGLASS_JULY =
  '"What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity."\n— Frederick Douglass, speech in Rochester, New York, July 5, 1852'

const JACOBS_INCIDENTS =
  '"Slavery is terrible for men; but it is far more terrible for women. Superadded to the burden common to all, they have wrongs, and sufferings, and mortifications peculiarly their own."\n— Harriet Jacobs, Incidents in the Life of a Slave Girl, published in 1861 under the pseudonym Linda Brent'

const VIRGINIA_1662 =
  '"Whereas some doubts have arisen whether children got by any Englishman upon a negro woman should be slave or free, Be it therefore enacted and declared by this present grand assembly, that all children borne in this country shall be held bond or free only according to the condition of the mother."\n— Law passed by the Virginia General Assembly, 1662'

const RECONSTRUCTION_AMENDMENTS =
  '"Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction."\n— Thirteenth Amendment, Section 1 (1865)\n\n"The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude."\n— Fifteenth Amendment, Section 1 (1870)'

const DU_BOIS_SOULS =
  '"It is a peculiar sensation, this double-consciousness, this sense of always looking at one\'s self through the eyes of others, of measuring one\'s soul by the tape of a world that looks on in amused contempt and pity. One ever feels his twoness,—an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body, whose dogged strength alone keeps it from being torn asunder."\n— W. E. B. Du Bois, The Souls of Black Folk, 1903'

const HUGHES_RIVERS =
  'I\'ve known rivers:\nI\'ve known rivers ancient as the world and older than the flow of human blood in human veins.\n\nMy soul has grown deep like the rivers.\n\nI bathed in the Euphrates when dawns were young.\nI built my hut near the Congo and it lulled me to sleep.\nI looked upon the Nile and raised the pyramids above it.\nI heard the singing of the Mississippi when Abe Lincoln went down to New Orleans, and I\'ve seen its muddy bosom turn all golden in the sunset.\n— Langston Hughes, "The Negro Speaks of Rivers," published in The Crisis, 1921'

const KING_BIRMINGHAM =
  '"Nonviolent direct action seeks to create such a crisis and foster such a tension that a community which has constantly refused to negotiate is forced to confront the issue. . . .\n\nI must confess that over the past few years I have been gravely disappointed with the white moderate. I have almost reached the regrettable conclusion that the Negro\'s great stumbling block in his stride toward freedom is not the White Citizen\'s Counciler or the Ku Klux Klanner, but the white moderate, who is more devoted to \'order\' than to justice."\n— Martin Luther King Jr., "Letter from Birmingham Jail," 1963'

const HAMER_TESTIMONY =
  'In August 1964 Fannie Lou Hamer, a former sharecropper and a field secretary for the Student Nonviolent Coordinating Committee (SNCC), testified before the Credentials Committee of the Democratic National Convention. She described being forced off the plantation where she worked after she tried to register to vote in Mississippi, and later being jailed and beaten.\n\n"All of this is on account of we want to register, to become first-class citizens, and if the Freedom Democratic Party is not seated now, I question America. Is this America, the land of the free and the home of the brave, where we have to sleep with our telephones off of the hooks because our lives be threatened daily, because we want to live as decent human beings, in America?"'

const COMBAHEE =
  '"We are actively committed to struggling against racial, sexual, heterosexual, and class oppression, and see as our particular task the development of integrated analysis and practice based upon the fact that the major systems of oppression are interlocking. . . . We realize that the only people who care enough about us to work consistently for our liberation are us."\n— Combahee River Collective Statement, 1977'

export const MCQS: MCQItem[] = [
  /* ===== UNIT 1: Origins of the African Diaspora (13) ===== */
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: CATALAN_ATLAS,
    question: 'The image most directly reflects which development?',
    options: [
      'Mali\'s conquest of the North African trading cities, which put Mediterranean gold markets under Malian control',
      'European knowledge of Mali\'s wealth, carried north by the caravans that moved West African gold across the Sahara',
      'Mali\'s conversion of Mediterranean merchants to Islam, which gave Malian traders direct access to European ports',
      'The collapse of trans-Saharan trade, which forced Mali to sell its gold to Europeans through newly built Atlantic ports',
    ],
    correctAnswer: 1,
    explanation:
      'By 1375 Europeans knew of Mali\'s gold through the trans-Saharan caravan trade, which the camel rider approaching the king represents. Mali never ruled the North African trading cities; its gold reached Mediterranean markets through North African merchants who crossed the desert.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: CATALAN_ATLAS,
    question: 'The ruler shown is usually identified as Mansa Musa. His pilgrimage to Mecca in 1324 is best remembered for',
    options: [
      'demanding tribute from the rulers of Egypt and Arabia, which extended Mali\'s authority to the Red Sea.',
      'spending and giving away so much gold in Cairo that the value of gold there fell for years afterward.',
      'arranging a marriage alliance with the sultan of Egypt, which made Cairo the protector of Mali\'s trade.',
      'bringing Islam to Mali for the first time, after he met Muslim scholars on his journey through Cairo.',
    ],
    correctAnswer: 1,
    explanation:
      'Arab writers reported that Mansa Musa spent and gave away so much gold in Cairo that its value there dropped for years, which spread Mali\'s reputation for wealth to the Mediterranean world. Islam had reached Mali\'s rulers well before Musa, so his hajj was an expression of an existing faith, not its introduction.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: CATALAN_ATLAS,
    question: 'Which statement best describes the place of Islam in the Mali Empire?',
    options: [
      'Rulers banned Islam to protect the authority of Indigenous priests, while merchants practiced it in secret.',
      'All subjects were required to convert to Islam after Sundiata\'s conquests, which ended Indigenous practices.',
      'Islam arrived only with European traders in the 1400s, after Mali\'s rulers had already lost their power.',
      'Rulers and merchants practiced Islam, while many rural subjects kept Indigenous religious practices.',
    ],
    correctAnswer: 3,
    explanation:
      'In Mali, Islam was strongest among rulers, scholars, and merchants tied to trans-Saharan trade, while many farming communities continued Indigenous religious practices. Forced mass conversion did not occur, and Islam came to West Africa across the Sahara centuries before any European traders arrived.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: LEO_AFRICANUS,
    question: 'The excerpt best supports which characterization of Timbuktu in the early 1500s?',
    options: [
      'A center of Islamic scholarship whose scholars were funded by royal patronage and by trade',
      'A Christian mission town where European priests ran schools for the sons of the region\'s local rulers',
      'A coastal port whose wealth came mainly from selling captives to Portuguese slave traders',
      'A small farming village with little commerce that relied on scholars sent from North Africa',
    ],
    correctAnswer: 0,
    explanation:
      'The excerpt describes judges and scholars maintained at the king\'s expense and a lucrative trade in books, marking Timbuktu as a center of Islamic learning and commerce. Timbuktu lies on the Niger bend far inland, not on the coast, and its wealth came from trans-Saharan trade rather than the Atlantic slave trade.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: LEO_AFRICANUS,
    question: 'Which development most directly made the book trade described in the excerpt possible?',
    options: [
      'The growth of Timbuktu\'s own paper mills, which let local scribes copy books cheaply for export',
      'The spread of Islam and Arabic literacy along the caravan routes that crossed the Sahara',
      'The rise of the Atlantic slave trade, which brought European books into the African interior',
      'The fall of Mali, which pushed North African scholars to flee south and sell their libraries',
    ],
    correctAnswer: 1,
    explanation:
      'Manuscripts from North Africa reached Timbuktu because Islam and Arabic literacy had spread along the trans-Saharan routes, creating readers, scholars, and judges who valued books. The excerpt says the books were brought from North Africa, and Timbuktu\'s scribes relied on imported paper rather than local mills.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: LEO_AFRICANUS,
    question: 'A historian could best use the excerpt to challenge which claim?',
    options: [
      'That trans-Saharan trade carried manuscripts in addition to goods such as gold and salt',
      'That rulers of the Sudanic empires supported learning as a source of prestige and authority',
      'That West African societies lacked written intellectual traditions before European colonization',
      'That Islamic law shaped how judges in West African cities settled disputes among merchants',
    ],
    correctAnswer: 2,
    explanation:
      'A city full of scholars, judges, and costly manuscripts directly contradicts the claim that West Africa had no written intellectual tradition before colonization. The excerpt supports, rather than challenges, the claim that rulers patronized learning, since it says scholars were maintained at the king\'s cost.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: AFONSO_LETTER,
    question: 'The letter provides the most direct evidence of which development?',
    options: [
      'The Portuguese conquest of Kongo, which by 1526 had made the kingdom a colony ruled from Lisbon',
      'The slave trade\'s destabilizing effect on Kongo, including the kidnapping of free people',
      'Kongo\'s refusal to trade with Europeans, which led Portugal to seek captives in other regions',
      'A famine in Kongo that forced families to sell their own relatives to Portuguese merchants',
    ],
    correctAnswer: 1,
    explanation:
      'Afonso complains that traders are kidnapping free people, including nobles and his own relatives, and that the land is being depopulated, showing how the slave trade destabilized Kongo. Afonso writes as an independent king addressing a fellow monarch, so Kongo had not been conquered or made a Portuguese colony.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: AFONSO_LETTER,
    question: 'Afonso\'s request for priests and schoolteachers best reflects that Kongo\'s rulers',
    options: [
      'had rejected Christianity and wanted teachers who could restore Kongo\'s older religious practices.',
      'had been forced by Portuguese soldiers to accept missionaries as the price of keeping the throne.',
      'had adopted Christianity and sought ties with Portugal on terms that served their own kingdom.',
      'wanted to end all contact with Europeans once Kongo\'s children could read and write Portuguese.',
    ],
    correctAnswer: 2,
    explanation:
      'Afonso was a Catholic convert who asked Portugal for priests and teachers while trying to limit the trade in people, pursuing the relationship on Kongo\'s terms. He was not seeking to cut off Europeans entirely, since he requests continued religious and educational exchange with Portugal.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: AFONSO_LETTER,
    question: 'Which later development is most directly connected to the process Afonso described?',
    options: [
      'Kongo became Portugal\'s main source of gold after its kings ended the trade in captives.',
      'West Central Africa became the largest source region of Africans carried across the Atlantic.',
      'The Portuguese abandoned the West Central African coast and moved their trade to East Africa.',
      'Kongo\'s kings banned the export of captives and ended the trade in their region by 1600.',
    ],
    correctAnswer: 1,
    explanation:
      'The trade Afonso protested kept growing, and over the following centuries West Central Africa supplied more captives to the Atlantic trade than any other African region. Kongo\'s rulers were unable to stop the trade, so the claim that they ended it by 1600 is false.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: IDIA_MASK,
    question: 'The mask best illustrates which feature of political life in Benin?',
    options: [
      'The rule of the kingdom by elected councils of women after the death of each Oba',
      'The authority some royal women held through kinship roles such as queen mother',
      'The exclusion of women from the public religious and political life of the court',
      'The transfer of royal power from the Obas to Portuguese governors in the 1500s',
    ],
    correctAnswer: 1,
    explanation:
      'Idia was honored as the Oba\'s mother for political, military, and spiritual support, showing how royal women could hold real authority through kinship roles. Benin remained an independent kingdom under its Obas, so the mask does not reflect Portuguese rule.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: IDIA_MASK,
    question: 'The carved Portuguese heads on the crown most likely reflect',
    options: [
      'Benin\'s conversion to Catholicism, which led artists to portray Portuguese priests as holy figures.',
      'Benin\'s defeat by Portuguese forces, which the Oba commemorated to show loyalty to his conquerors.',
      'the presence of Portuguese artists at court, who signed their work by carving their own portraits.',
      'Benin\'s trade and diplomatic ties with Portugal, which the court treated as a source of royal wealth.',
    ],
    correctAnswer: 3,
    explanation:
      'Benin traded with the Portuguese from the late 1400s, and the court represented the Portuguese as bringers of wealth from across the sea, adding to the Oba\'s prestige. The kingdom was never conquered by Portugal, and the mask was made by Benin\'s own royal guild of ivory carvers.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    stimulus: IDIA_MASK,
    question: 'Njinga Mbande, another woman leader studied alongside Idia, is best known for',
    options: [
      'leading Kongo\'s conversion to Christianity and exchanging letters with the king of Portugal.',
      'founding the city of Timbuktu and endowing its mosques with gold from the mines of Mali.',
      'using diplomacy and warfare to resist Portuguese expansion into Ndongo and Matamba.',
      'uniting the Swahili city-states of the East African coast against Portuguese attacks.',
    ],
    correctAnswer: 2,
    explanation:
      'In the 1600s Njinga ruled Ndongo and Matamba in West Central Africa, negotiating with and fighting the Portuguese to protect her kingdoms. The conversion of Kongo and the letters to Portugal belong to Afonso I, a different ruler of a neighboring kingdom.',
  },
  {
    type: 'mcq',
    topic: 'unit-1',
    question: 'Which development best explains why closely related languages are spoken across much of central, eastern, and southern Africa today?',
    options: [
      'Arab conquests of the African interior, which imposed Arabic-based languages, laws, and religious practice',
      'The Atlantic slave trade, which mixed captives from many regions, languages, and societies on the coast',
      'European colonial rule, which required schools, courts, and markets to use a few shared languages',
      'Gradual migrations of Bantu-speaking farmers, who carried agriculture, ironworking, and their languages',
    ],
    correctAnswer: 3,
    explanation:
      'Over many centuries Bantu-speaking peoples migrated from the region of present-day Nigeria and Cameroon across much of the southern half of the continent, spreading farming, ironworking, and related languages. Colonial rule came much later and spread European languages, which do not account for the shared Bantu language family.',
  },

  /* ===== UNIT 2: Freedom, Enslavement, and Resistance (20) ===== */
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: BROOKES_PRINT,
    question: 'The print was most likely created to',
    options: [
      'show ship captains how to fit more captives aboard while meeting new limits on crowding.',
      'turn public opinion against the slave trade by making the crowding of the voyage visible.',
      'advertise the safety of British ships to merchants who invested in the Atlantic trade.',
      'record the names, ages, and origins of the Africans aboard for colonial courts in the Americas.',
    ],
    correctAnswer: 1,
    explanation:
      'Abolitionists published and reprinted the Brookes plan to show the public how tightly captives were packed during the crossing, making it one of the most widely circulated images of the antislavery campaign. Although it looks like a technical loading plan, its publishers were abolitionists, not shipowners.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: BROOKES_PRINT,
    question: 'The voyage depicted in the print is known as the Middle Passage because it',
    options: [
      'formed the middle stage of a captive\'s journey, between capture inland and sale on the African coast.',
      'took place during the middle years of the Atlantic slave trade, between the 1600s and the 1700s.',
      'was the leg of the triangular trade that carried captive Africans across the Atlantic.',
      'followed a route through the middle of the ocean to avoid ships that patrolled the coasts.',
    ],
    correctAnswer: 2,
    explanation:
      'The Middle Passage was the middle leg of the triangular trade, between the voyage from Europe to Africa and the return voyage to Europe, in which captives were carried to the Americas. Capture and the march to the coast came before the Middle Passage rather than forming it.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: BROOKES_PRINT,
    question: 'Which source from the same period did abolitionists use for a purpose most similar to the print\'s?',
    options: [
      'Thomas Jefferson\'s 1785 Notes on the State of Virginia, which speculated about racial difference',
      'Olaudah Equiano\'s 1789 narrative, which described his capture in Africa and the ocean crossing',
      'The French Code Noir of 1685, which set rules for the treatment of enslaved people in colonies',
      'The U.S. Constitution of 1787, which barred Congress from ending the slave trade before 1808',
    ],
    correctAnswer: 1,
    explanation:
      'Equiano\'s narrative gave British readers a firsthand account of capture and the Middle Passage and was used, like the Brookes print, to build support for abolishing the slave trade. Jefferson\'s Notes speculated about Black inferiority and was not an abolitionist tool.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: ARRIVALS_TABLE,
    question: 'Which conclusion is best supported by the data?',
    options: [
      'Most Africans carried across the Atlantic were taken to British colonies in the Caribbean and North America.',
      'Mainland North America received less than one-tenth as many enslaved Africans as Brazil did.',
      'The Spanish Americas received more enslaved Africans than any other region shown in the table.',
      'The French and Dutch colonies together received about as many enslaved Africans as Brazil.',
    ],
    correctAnswer: 1,
    explanation:
      'About 0.4 million people arrived in mainland North America compared with about 4.9 million in Brazil, which is less than one-tenth. British colonies together received about 2.7 million of 10.7 million arrivals, well short of a majority.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: ARRIVALS_TABLE,
    question: 'By 1860 the enslaved population of the United States was nearly 4 million, far more than the number shown arriving in mainland North America. Which factor best explains the difference?',
    options: [
      'Smuggling after the 1808 federal ban brought in more Africans than the legal trade had carried before it.',
      'Natural increase, as births among enslaved people steadily outnumbered deaths in the American South.',
      'Most of the growth came from Caribbean re-exports, which the table does not count as North American arrivals.',
      'Free Black migrants from Canada and Haiti were counted as enslaved once they settled in Southern states.',
    ],
    correctAnswer: 1,
    explanation:
      'In the United States the enslaved population grew through natural increase, while in Caribbean sugar colonies brutal labor and disease meant deaths exceeded births and planters relied on new imports. Smuggling after 1808 did occur, but on a scale far too small to explain the growth.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: ARRIVALS_TABLE,
    question: 'Which statement about slavery in Brazil, the largest destination in the table, is accurate?',
    options: [
      'Brazil abolished slavery in 1834 under the same law that ended it in the British colonies.',
      'Brazil abolished slavery in 1865 after a civil war between its northern and southern provinces.',
      'Brazil abolished slavery in 1804 after a revolution modeled on the one in Haiti.',
      'Brazil abolished slavery in 1888, later than any other nation in the Americas.',
    ],
    correctAnswer: 3,
    explanation:
      'Brazil ended slavery with the Golden Law of 1888, the last nation in the Americas to do so. The 1834 date belongs to the British Slavery Abolition Act, which applied to British colonies, not to Brazil.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: FORT_MOSE,
    question: 'Spain\'s policy toward people escaping from the British colonies is best explained by',
    options: [
      'Spain\'s religious opposition to slavery, which had led it to abolish slavery throughout its colonies.',
      'Spain\'s rivalry with Britain, since the offer weakened Carolina and gave Florida armed defenders.',
      'Spain\'s need for skilled sugar workers, since Florida had become the center of its plantation economy.',
      'Spain\'s treaty obligations to Britain, which required it to shelter refugees from colonial wars.',
    ],
    correctAnswer: 1,
    explanation:
      'Offering freedom drained labor from British Carolina and created a free Black militia, as at Fort Mose, that helped defend Spanish Florida. Spain itself kept slavery in its colonies, so the policy was strategic rather than a rejection of slavery.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: FORT_MOSE,
    question: 'In 1739, armed enslaved people near the Stono River in South Carolina marched south before the colonial militia defeated them. The direction of their march is best explained by',
    options: [
      'their plan to join Native allies in Georgia, a colony that had banned slavery in 1735.',
      'their plan to reach Spanish Florida, where the policy described promised freedom.',
      'their plan to seize a port and sail to the free Black republic of Haiti.',
      'their plan to join the British army, which had promised freedom to enslaved soldiers.',
    ],
    correctAnswer: 1,
    explanation:
      'The Stono rebels headed toward Spanish Florida, where escaped people from the British colonies could claim freedom, as Fort Mose showed. Haiti did not become independent until 1804, decades after the rebellion.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: FORT_MOSE,
    question: 'South Carolina\'s legislature responded to the Stono Rebellion by passing the Negro Act of 1740, which',
    options: [
      'offered freedom to enslaved people who reported plots, served in the militia, or fought against Spain.',
      'granted enslaved people the right to a jury trial, to own property, and to marry under colonial law.',
      'tightened control over enslaved people by limiting their movement, assembly, and education.',
      'required enslavers to teach Christianity, reading, and a skilled trade to every enslaved child.',
    ],
    correctAnswer: 2,
    explanation:
      'The Negro Act of 1740 tightened control over enslaved people by limiting their movement, assembly, and literacy. It did not expand legal rights; it reduced the few customary freedoms enslaved people had held.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: DOUGLASS_JULY,
    question: 'Douglass\'s central argument in the excerpt is that',
    options: [
      'the Fourth of July should be dropped as a national holiday until Congress outlaws slavery in every state.',
      'celebrations of American liberty are hypocritical while the nation continues to hold people in slavery.',
      'enslaved people should celebrate the holiday because the Constitution promises their future freedom.',
      'the nation\'s founders meant slavery to be permanent, so the Constitution itself must be rejected.',
    ],
    correctAnswer: 1,
    explanation:
      'Douglass calls the celebration a "sham" and its boasted liberty "an unholy license," arguing that praising freedom while holding millions in slavery is hypocritical. By 1852 he read the Constitution as an antislavery document, so he was not calling for it to be rejected.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: DOUGLASS_JULY,
    question: 'Douglass first gained wide attention with his 1845 Narrative of the Life of Frederick Douglass, an American Slave, which was published mainly to',
    options: [
      'raise money to buy the freedom of the family members Douglass had left behind in Maryland.',
      'persuade free Black Northerners to emigrate to Liberia under the American Colonization Society.',
      'give a firsthand account that exposed the brutality of bondage and refuted claims of Black inferiority.',
      'describe life in the free states for enslaved Southerners who were planning their own escapes.',
    ],
    correctAnswer: 2,
    explanation:
      'The Narrative was an abolitionist text whose eloquent firsthand testimony exposed slavery\'s cruelty and undercut proslavery claims about Black inferiority. Douglass opposed the American Colonization Society, so promoting emigration to Liberia was not its purpose.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: DOUGLASS_JULY,
    question: 'During the Civil War, Douglass acted on the ideas in the excerpt by',
    options: [
      'urging Black Northerners to stay out of the war until Lincoln promised to free every enslaved person.',
      'advising Lincoln to send freed people to Central America once the Union had won the war.',
      'recruiting Black men for the Union army, arguing that service would strengthen their claim to citizenship.',
      'organizing a separate Black army that fought apart from Union commanders in the South.',
    ],
    correctAnswer: 2,
    explanation:
      'Douglass recruited Black soldiers, including for the 54th Massachusetts, arguing that military service would make Black citizenship impossible to deny. Lincoln, not Douglass, had considered colonization in Central America, a plan Douglass publicly opposed.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: JACOBS_INCIDENTS,
    question: 'Jacobs\'s main point in the excerpt is that enslaved women',
    options: [
      'faced sexual exploitation and threats to their children on top of the labor all enslaved people endured.',
      'were usually spared the hardest field labor and therefore suffered less than enslaved men did.',
      'held more power than men within enslaved communities because they controlled family life.',
      'were more likely than enslaved men to be freed in their enslavers\' wills after years of service.',
    ],
    correctAnswer: 0,
    explanation:
      'Jacobs argues that enslaved women carried the burdens common to all enslaved people plus wrongs "peculiarly their own," above all sexual exploitation and threats to their children. The excerpt says slavery was "far more terrible" for women, the opposite of claiming they suffered less.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: JACOBS_INCIDENTS,
    question: 'Jacobs addressed her narrative especially to free white women in the North. This choice was most likely meant to',
    options: [
      'win their support for abolition by appealing to shared ideals of womanhood and motherhood.',
      'persuade them to buy enslaved women\'s freedom directly instead of supporting new antislavery laws.',
      'warn them that Black women in the North were treated as harshly as women in the South.',
      'convince them to stop hiring free Black women as domestic servants in Northern homes.',
    ],
    correctAnswer: 0,
    explanation:
      'Jacobs appealed to Northern white women as wives and mothers, asking them to recognize how slavery violated the family and virtue they valued and to join the antislavery cause. Her narrative contrasts the North with slavery in the South rather than claiming Northern treatment was equally harsh.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: JACOBS_INCIDENTS,
    question: 'Sojourner Truth\'s 1851 speech in Akron, Ohio, often titled "Ain\'t I a Woman?", shared which purpose with Jacobs\'s narrative?',
    options: [
      'Arguing that the women\'s rights movement should wait until slavery had been abolished nationwide',
      'Urging enslaved women to escape to Canada along the routes of the Underground Railroad',
      'Insisting that Black women\'s experiences belonged at the center of debates over freedom and rights',
      'Defending the right of free Black women to vote in the elections held in the Northern states',
    ],
    correctAnswer: 2,
    explanation:
      'Truth, speaking at a women\'s rights convention, and Jacobs, writing for Northern women, both placed Black women\'s experiences at the center of the abolition and women\'s rights movements. Neither argued that women\'s rights should wait for the end of slavery.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    stimulus: VIRGINIA_1662,
    question: 'The law most directly contributed to',
    options: [
      'freeing the children of enslaved women whose fathers were free Englishmen living in Virginia.',
      'limiting slavery to people born in Africa while freeing all children born in the colony.',
      'making slavery a hereditary status passed through enslaved mothers, regardless of the father.',
      'allowing enslaved fathers to claim legal custody of their children born in the colony.',
    ],
    correctAnswer: 2,
    explanation:
      'By tying a child\'s status to the mother, the law made the children of enslaved women enslaved even when their fathers were free white men, turning slavery into an inherited condition. Under English common law a child\'s status had usually followed the father, which is why the law rejected that rule.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    question: 'The Haitian Revolution (1791–1804) affected the United States most directly by',
    options: [
      'leading Congress to recognize Haiti at once and open trade with the new Black republic.',
      'inspiring enslaved and free Black Americans while deepening white Southern fears of rebellion.',
      'persuading Southern states to adopt gradual emancipation laws to prevent a similar uprising.',
      'ending the domestic slave trade, since planters feared buying people from the Caribbean.',
    ],
    correctAnswer: 1,
    explanation:
      'The revolution created an independent Black nation from a successful slave revolt, which Black abolitionists such as David Walker celebrated and which slaveholders feared would spread. The United States withheld diplomatic recognition of Haiti until 1862, largely because of Southern opposition.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    question: 'After Nat Turner\'s 1831 rebellion in Southampton County, Virginia, Southern legislatures most commonly responded by',
    options: [
      'adopting gradual emancipation plans after Virginia\'s legislature debated ending slavery in 1832.',
      'passing stricter laws against teaching enslaved people to read and against Black preaching.',
      'banning the interstate slave trade so that rebels could not be sold from one state to another.',
      'allowing enslaved people to testify in court so that planned revolts could be reported early.',
    ],
    correctAnswer: 1,
    explanation:
      'Southern states responded to the rebellion with harsher slave codes that restricted literacy, Black preaching, and assembly, since Turner was a literate preacher. Virginia\'s legislature did debate gradual emancipation in 1831–1832, but it rejected the idea.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    question: 'Harriet Tubman\'s work on the Underground Railroad is best described as',
    options: [
      'directing a federal agency that resettled people who escaped slavery in Canada and the North.',
      'publishing an antislavery newspaper that printed maps of escape routes for readers in the South.',
      'returning repeatedly to Maryland after her own escape to guide relatives and others to freedom.',
      'running a network of tunnels and rail lines that carried people from Virginia to Pennsylvania.',
    ],
    correctAnswer: 2,
    explanation:
      'After escaping slavery in 1849, Tubman made repeated dangerous trips back to Maryland to lead family members and others north. The Underground Railroad was a secret network of people and safe houses, not literal tunnels or rail lines.',
  },
  {
    type: 'mcq',
    topic: 'unit-2',
    question: 'Religious traditions such as Vodou in Haiti, Santería in Cuba, and Candomblé in Brazil are best understood as',
    options: [
      'Catholic religious orders that European missionaries founded to convert enslaved Africans.',
      'Protestant revival movements that spread from the United States to the Caribbean and Brazil.',
      'blends of West and West Central African religious practice with elements of Catholicism.',
      'Islamic brotherhoods that enslaved West African Muslims rebuilt in the Americas.',
    ],
    correctAnswer: 2,
    explanation:
      'These traditions combine Yoruba, Fon, Kongo, and other African religious practices with Catholic saints and rituals, showing how enslaved Africans preserved and adapted their beliefs. They were created by African-descended communities, not founded by Catholic missionaries, who often tried to suppress them.',
  },

  /* ===== UNIT 3: The Practice of Freedom (13) ===== */
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: RECONSTRUCTION_AMENDMENTS,
    question: 'In the decades after 1865, Southern states most directly used the exception in the first excerpt to',
    options: [
      'require freedpeople to serve in state militias as a penalty for having supported the Union.',
      'arrest Black workers under vagrancy laws and lease convicted prisoners to private employers.',
      'return freedpeople to their former enslavers if they could not prove their emancipation.',
      'deny freedpeople the right to marry until they had completed a term of contract labor.',
    ],
    correctAnswer: 1,
    explanation:
      'Because the amendment allowed involuntary servitude as punishment for crime, Southern states used vagrancy laws and Black Codes to convict Black workers and lease them as forced labor. Freedpeople did not have to prove emancipation, since the amendment ended slavery everywhere in the United States.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: RECONSTRUCTION_AMENDMENTS,
    question: 'By the early 1900s, most Black men in the South could not vote despite the second excerpt. Which method was most responsible?',
    options: [
      'Federal laws that limited voting to men who owned land, paid taxes, and had served in the army',
      'Poll taxes, literacy tests, and other voting rules that avoided naming race',
      'State constitutions that openly barred citizens of African descent from registering to vote',
      'Supreme Court rulings that limited the amendment to federal elections, leaving state voting unprotected',
    ],
    correctAnswer: 1,
    explanation:
      'Southern states got around the Fifteenth Amendment with poll taxes, literacy tests, grandfather clauses, and white primaries that did not mention race on their face. Openly racial voting bans would have violated the amendment directly, which is why states avoided them.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: RECONSTRUCTION_AMENDMENTS,
    question: 'Federal enforcement of these amendments in the South largely ended after',
    options: [
      'the Civil Rights Act of 1875, which transferred enforcement of voting rights from Congress to the states.',
      'the impeachment of Andrew Johnson in 1868, which ended military rule in the former Confederate states.',
      'the Compromise of 1877, which withdrew the army from state capitals to settle a contested election.',
      'the Plessy v. Ferguson decision of 1896, which applied the Fifteenth Amendment only to federal elections.',
    ],
    correctAnswer: 2,
    explanation:
      'To settle the disputed Hayes-Tilden election, Republicans agreed to withdraw federal troops from Southern statehouses, ending Reconstruction and leaving Black rights to hostile state governments. Plessy v. Ferguson concerned segregation under the Fourteenth Amendment, not voting rights.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: DU_BOIS_SOULS,
    question: 'In the excerpt, "double-consciousness" refers to',
    options: [
      'the choice between rural Southern life and Northern city life faced by Black migrants after 1900.',
      'the strain of seeing oneself through the eyes of a society that regards Black people with contempt.',
      'the status of Black Americans as citizens of both a state and the nation under the Fourteenth Amendment.',
      'the split between Black leaders who favored vocational training and those who favored higher education.',
    ],
    correctAnswer: 1,
    explanation:
      'Du Bois describes "looking at one\'s self through the eyes of others" who view Black people "in amused contempt and pity," while holding two identities, American and Negro. The split over education was a real debate Du Bois took part in, but it is not what the term means in the excerpt.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: DU_BOIS_SOULS,
    question: 'In the same book, Du Bois criticized Booker T. Washington chiefly for',
    options: [
      'urging Black Southerners to leave the South for Northern cities where factory jobs were open.',
      'urging Black Americans to emigrate to Africa instead of seeking equality in the United States.',
      'urging Black voters to abandon the Republican Party in exchange for Southern Democratic patronage.',
      'urging Black Southerners to give up political and civil rights in exchange for economic gains.',
    ],
    correctAnswer: 3,
    explanation:
      'Du Bois argued that Washington\'s accommodationist program asked Black people to give up, at least for the present, political power, insistence on civil rights, and higher education. Washington urged Black Southerners to stay in the South, so encouraging migration north was not the basis of the critique.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: DU_BOIS_SOULS,
    question: 'Du Bois helped found the NAACP in 1909. In its early decades, the organization relied mainly on',
    options: [
      'lawsuits, lobbying, and publicity, including Du Bois\'s magazine The Crisis, to demand full civil rights.',
      'armed self-defense units that protected Black neighborhoods from white mobs during the Red Summer.',
      'plans to resettle Black Southerners in all-Black towns, farms, and colonies in the West and in Africa.',
      'a network of Black-owned banks, stores, and newspapers to build economic independence in the South.',
    ],
    correctAnswer: 0,
    explanation:
      'The early NAACP fought segregation, disfranchisement, and lynching through court cases, lobbying, and publicity in The Crisis, which Du Bois edited. Building Black-owned businesses for economic independence was closer to the programs of Booker T. Washington and Marcus Garvey than to the NAACP\'s civil rights agenda.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: HUGHES_RIVERS,
    question: 'The poem\'s references to the Euphrates, the Congo, and the Nile most directly express',
    options: [
      'a Black identity rooted in ancient African and world civilizations, older than slavery in America.',
      'a wish for African Americans to return to Africa and rebuild the ancient kingdoms of the Nile.',
      'a protest against the colonial rule that European powers imposed on Africa in the 1880s.',
      'a description of the routes captives followed from the African interior to the coast.',
    ],
    correctAnswer: 0,
    explanation:
      'The speaker claims a soul as old as the world\'s first civilizations, linking Black Americans to a heritage that long predates slavery. The poem envisions Africa as a source of identity and pride rather than calling for a physical return.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: HUGHES_RIVERS,
    question: 'The poem is most representative of the Harlem Renaissance in that it',
    options: [
      'drew on dialect to argue that rural Southern life was more authentic than life in Northern cities.',
      'sought to win white patrons by avoiding themes of race that might offend Northern readers.',
      'used art to express pride in Black heritage and to claim a place for Black voices in American culture.',
      'used poetry to call for armed resistance against the white mobs of the Red Summer of 1919.',
    ],
    correctAnswer: 2,
    explanation:
      'Harlem Renaissance writers like Hughes used literature and art to assert pride in Black history and culture and to establish Black voices in American letters. Claude McKay\'s "If We Must Die" responded to the Red Summer, but this poem is a meditation on heritage, not a call to arms.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    stimulus: HUGHES_RIVERS,
    question: 'Alain Locke\'s 1925 anthology The New Negro, which featured writers like Hughes, argued that',
    options: [
      'Black writers should model their work on European classics to prove their equality with white authors.',
      'a self-confident generation was replacing old stereotypes with self-defined images of Black life.',
      'Black artists should leave the United States for Paris, where they would face less discrimination.',
      'Black literature should focus on the suffering of slavery rather than on modern city life.',
    ],
    correctAnswer: 1,
    explanation:
      'Locke presented the "New Negro" as a modern, self-assured generation defining Black identity for itself instead of accepting stereotypes. He encouraged artists to draw on African and African American traditions rather than imitate European models.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    question: 'Which of the following was a major activity of the Freedmen\'s Bureau, created by Congress in 1865?',
    options: [
      'Granting land, tools, and mules from confiscated plantations to most freed families as permanent property',
      'Helping freedpeople find separated relatives, negotiate labor contracts, and attend new schools',
      'Writing the Black Codes that defined the legal rights and duties of freedpeople in each Southern state',
      'Organizing the units of Black soldiers that guarded polling places in elections across the South',
    ],
    correctAnswer: 1,
    explanation:
      'The Bureau helped reunite families, oversaw labor contracts, provided relief, and supported thousands of schools, some of which grew into historically Black colleges. Most land set aside for freedpeople was returned to former owners under President Johnson, so permanent land grants never reached most families.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    question: 'In pamphlets such as Southern Horrors (1892), Ida B. Wells-Barnett challenged the common justification for lynching by',
    options: [
      'arguing that lynching would end only when Black Southerners won the right to serve on Southern juries.',
      'showing that most victims had not been accused of rape and that lynching enforced white dominance.',
      'proving that lynching happened mainly in Northern cities rather than in the rural South.',
      'calling on Black Southerners to emigrate to Africa, since the federal government would not act.',
    ],
    correctAnswer: 1,
    explanation:
      'Wells documented that most lynching victims had not even been accused of rape and argued that lynching was terror used to keep Black people economically and politically subordinate. Lynching was concentrated in the South, which is why her investigations focused there.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    question: 'Which pair of factors best explains the Great Migration of African Americans between about 1910 and 1970?',
    options: [
      'Federal homestead grants in the West and the closing of Southern factories during the Great Depression',
      'The end of slavery in Brazil and new immigration quotas that favored migrants from the Caribbean',
      'Jim Crow violence and sharecropping debt in the South, and industrial jobs in Northern and Western cities',
      'The desegregation of Southern schools and the arrival of European immigrant workers in Northern factories',
    ],
    correctAnswer: 2,
    explanation:
      'About 6 million African Americans left the South to escape segregation, racial violence, and sharecropping, drawn by industrial jobs that opened especially during the two world wars. Southern schools were not desegregated until after Brown in 1954, so desegregation could not have driven a migration that began around 1910.',
  },
  {
    type: 'mcq',
    topic: 'unit-3',
    question: 'Marcus Garvey\'s Universal Negro Improvement Association (UNIA) differed most from the NAACP in that the UNIA',
    options: [
      'stressed lawsuits, lobbying, and interracial alliances rather than independent Black organizations.',
      'stressed labor unions, strikes, and alliances with white socialists rather than racial solidarity.',
      'stressed nonviolent protest, voter registration, and church networks rather than separatism.',
      'stressed racial pride, Black-owned businesses, and ties to Africa rather than integration.',
    ],
    correctAnswer: 3,
    explanation:
      'The UNIA built a mass movement around racial pride, Black economic independence such as the Black Star Line, and Pan-African solidarity. Lawsuits, lobbying, and interracial alliances describe the NAACP, the organization Garvey\'s movement is being contrasted with.',
  },

  /* ===== UNIT 4: Movements and Debates (14) ===== */
  {
    type: 'mcq',
    topic: 'unit-4',
    question: 'The Négritude movement, developed in the 1930s by French-speaking writers such as Aimé Césaire and Léopold Sédar Senghor, is best described as',
    options: [
      'a French government program that trained colonial subjects to become teachers in Africa.',
      'a literary and political affirmation of Black identity that rejected French colonial assimilation.',
      'a religious revival that spread Catholicism among Black communities in the Caribbean and Africa.',
      'an artistic movement that urged Black writers to adopt French forms to prove their equality.',
    ],
    correctAnswer: 1,
    explanation:
      'Négritude writers from the Caribbean and Africa celebrated Black cultural identity and rejected the French colonial demand that colonized people assimilate to French culture. They wrote in French but used it to affirm African heritage, not to prove themselves by French standards.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    question: 'The Double V campaign, launched by the Pittsburgh Courier in 1942, called for',
    options: [
      'victory over both Germany and Japan before any civil rights demands were raised.',
      'victory over fascism abroad and victory over racial discrimination at home.',
      'victory for the Democratic Party in Congress and in the 1944 presidential election.',
      'victory over Japan through a second front opened by Black regiments in the Pacific.',
    ],
    correctAnswer: 1,
    explanation:
      'The Courier linked Black military service in World War II to the fight against segregation and discrimination in the United States. The campaign explicitly refused to postpone civil rights demands until the war ended.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    question: 'In Brown v. Board of Education (1954), the Supreme Court ruled that',
    options: [
      'segregated public schools were permissible if states spent equal amounts on Black and white students.',
      'segregated public schools violated the Fifteenth Amendment because they denied Black parents a voice.',
      'segregated public schools were inherently unequal and violated the Equal Protection Clause.',
      'segregated private schools had to integrate, though public schools could stay separate for ten years.',
    ],
    correctAnswer: 2,
    explanation:
      'The Court unanimously held that separate schools are inherently unequal and violate the Fourteenth Amendment\'s Equal Protection Clause, overturning Plessy v. Ferguson in public education. Equal spending was the old "separate but equal" standard that Brown rejected.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    question: 'The Montgomery Bus Boycott of 1955–1956 is significant because it',
    options: [
      'ended in a city ordinance that desegregated the buses after only a few days of protest led by students.',
      'was organized by the federal government to enforce the Brown decision in Alabama\'s public transit.',
      'made King a national figure and proved that a year-long refusal to ride could end segregated seating.',
      'was led mainly by white ministers who persuaded the city council to change its bus seating rules.',
    ],
    correctAnswer: 2,
    explanation:
      'Black residents of Montgomery stayed off the buses for more than a year, organizing carpools until a federal court ruling, upheld by the Supreme Court, ended bus segregation. Martin Luther King Jr. led the Montgomery Improvement Association and rose to national prominence, and the boycott was a Black-led local campaign, not a federal effort.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: KING_BIRMINGHAM,
    question: 'King wrote the letter primarily in response to',
    options: [
      'Black nationalist critics who had called nonviolence a form of surrender.',
      'white clergymen who had called the Birmingham demonstrations unwise and untimely.',
      'federal officials who had ordered him to end the protests in Birmingham.',
      'segregationist politicians who had demanded the arrest of all protesters in the city.',
    ],
    correctAnswer: 1,
    explanation:
      'King answered a public statement by eight white Alabama clergymen who called the protests "unwise and untimely," which is why he addresses the white moderate. He dismisses open segregationists like the Klan as a lesser obstacle, so they are not the letter\'s audience.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: KING_BIRMINGHAM,
    question: 'According to the excerpt, the purpose of creating tension through direct action was to',
    options: [
      'provoke violent arrests that would justify armed self-defense by Black residents.',
      'persuade the federal government to send troops to take control of the city.',
      'show white moderates that segregation would soon collapse on its own without any outside pressure.',
      'force a community that had refused to negotiate to confront the injustice of segregation.',
    ],
    correctAnswer: 3,
    explanation:
      'King says direct action creates a crisis so that "a community which has constantly refused to negotiate is forced to confront the issue." He criticizes white moderates for preferring order over justice, so he is not claiming segregation would collapse on its own.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: KING_BIRMINGHAM,
    question: 'Later in the 1960s, advocates of Black Power, a slogan Stokely Carmichael popularized in 1966, differed from the approach in the excerpt chiefly by',
    options: [
      'emphasizing interracial coalitions, federal legislation, and appeals to white moderates.',
      'emphasizing court cases, lobbying, and patience with gradual change in the Southern states.',
      'emphasizing self-determination, community control, and the right of self-defense.',
      'emphasizing nonviolent marches, mass arrests, and moral appeals to the national conscience.',
    ],
    correctAnswer: 2,
    explanation:
      'Black Power advocates called for Black self-determination, control of community institutions, and the right to defend against violence, instead of King\'s interracial nonviolent strategy. Nonviolent marches and moral appeals describe King\'s own approach, not the contrast.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: HAMER_TESTIMONY,
    question: 'Hamer\'s testimony was part of an effort to',
    options: [
      'seat the Mississippi Freedom Democratic Party\'s delegates in place of the all-white state delegation.',
      'nominate Hamer as the Democratic Party\'s candidate for vice president in the 1964 election.',
      'persuade the Republican Party to adopt a civil rights platform before the 1964 election.',
      'form a new national party for Black voters that would run its own candidates separately from the Democrats.',
    ],
    correctAnswer: 0,
    explanation:
      'The Mississippi Freedom Democratic Party challenged the seating of Mississippi\'s all-white regular delegation, which had been chosen in a process that excluded Black voters. The MFDP sought recognition within the Democratic Party rather than a separate national party.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: HAMER_TESTIMONY,
    question: 'Ella Baker, who helped found SNCC in 1960, shaped organizers like Hamer by promoting',
    options: [
      'centralized leadership that took its direction from the ministers of the Southern Christian Leadership Conference',
      'legal strategies that relied on NAACP lawyers to challenge discriminatory voting laws in federal court',
      'group-centered leadership that developed local people instead of relying on one charismatic leader',
      'armed self-defense groups that protected rural voter registration workers from Klan attacks',
    ],
    correctAnswer: 2,
    explanation:
      'Baker believed movements should develop leadership among ordinary local people, such as Hamer, rather than depend on a single prominent figure. She encouraged SNCC to stay independent of the Southern Christian Leadership Conference, the minister-led group she had worked for.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: HAMER_TESTIMONY,
    question: 'The Voting Rights Act of 1965 addressed the conditions Hamer described by',
    options: [
      'abolishing poll taxes in federal elections through a constitutional amendment ratified that year.',
      'requiring every state to register all adult citizens automatically when they turned twenty-one.',
      'allowing the Justice Department to seat convention delegates when states discriminated.',
      'suspending literacy tests in covered states and sending federal examiners to register voters.',
    ],
    correctAnswer: 3,
    explanation:
      'The act suspended literacy tests in covered jurisdictions, sent federal examiners to register voters, and required those jurisdictions to get federal preclearance for voting changes. Poll taxes in federal elections had already been banned by the Twenty-fourth Amendment in 1964.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: COMBAHEE,
    question: 'The main argument of the excerpt is that',
    options: [
      'racism should be challenged first, since gains against it would end sexism and class oppression.',
      'class oppression is the root of racism, sexism, and homophobia, so labor organizing should come first.',
      'Black women should withdraw from political movements and build separate communities.',
      'racism, sexism, homophobia, and class oppression are linked and must be fought together.',
    ],
    correctAnswer: 3,
    explanation:
      'The Collective describes the major systems of oppression as "interlocking" and calls for an integrated analysis that addresses race, sex, sexuality, and class at once. Ranking one oppression ahead of the others is exactly what the statement rejects.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: COMBAHEE,
    question: 'The statement most directly responded to',
    options: [
      'racism in the mainstream women\'s movement and sexism within Black liberation organizations.',
      'the defeat of the Equal Rights Amendment in Congress, which ended the push for women\'s equality.',
      'the Brown decision, which Black feminists argued had left Black girls out of desegregation plans.',
      'the decline of the Black Arts Movement after Black writers began publishing with white-owned firms.',
    ],
    correctAnswer: 0,
    explanation:
      'Black feminists formed groups like the Combahee River Collective because white-led feminism often ignored racism while Black liberation groups often sidelined women. The Equal Rights Amendment passed Congress in 1972, so its defeat in Congress was not the context.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    stimulus: COMBAHEE,
    question: 'Kimberlé Crenshaw\'s 1989 concept of intersectionality built on ideas like these by showing that',
    options: [
      'Black women faced less discrimination than Black men because employers wanted diverse workforces.',
      'antidiscrimination law that treated race and sex separately could miss discrimination against Black women.',
      'race had replaced sex as the main source of workplace discrimination after the Civil Rights Act of 1964.',
      'courts should judge discrimination claims by income alone, since class shapes every other inequality.',
    ],
    correctAnswer: 1,
    explanation:
      'Crenshaw showed that courts examining race and sex discrimination separately failed Black women, whose experience of combined discrimination fit neither category alone. Her argument centers on overlapping identities rather than reducing inequality to class.',
  },
  {
    type: 'mcq',
    topic: 'unit-4',
    question: 'Hip-hop, which emerged in the South Bronx in the 1970s, is best described as',
    options: [
      'a style of rhythm and blues developed by Detroit record labels that combined gospel vocals, horns, and dance beats.',
      'a poetry movement of Black Arts writers that combined spoken verse, jazz backing, and political protest.',
      'a cultural movement of Black and Latino youth that combined DJing, rapping, breakdancing, and graffiti.',
      'a commercial dance style created by record companies that combined disco, funk, and pop music.',
    ],
    correctAnswer: 2,
    explanation:
      'Hip-hop grew out of Black and Latino neighborhoods in the South Bronx as a culture of DJing, MCing, breakdancing, and graffiti before it became a global industry. Spoken-word poets of the Black Arts era influenced rap, but hip-hop was a broader street culture born in the South Bronx, not a literary movement or a record-label sound.',
  },
]
