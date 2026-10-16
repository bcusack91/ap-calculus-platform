/**
 * Entrance Quiz — Resistance & Abolition (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasra-ent-1a',
    question: 'During harvest on a Maryland farm, an enslaved woman repeatedly feigns illness, while her brother hides in a nearby swamp for two weeks and then returns. Their actions are best classified as',
    options: ['armed revolt, since both acts openly challenged the enslaver\'s authority by force', 'everyday resistance and truancy, which pushed back against control short of revolt or permanent flight', 'moral suasion, since both acts were meant to change white public opinion', 'political abolition, since both acts aimed to influence the state legislature'],
    correctIndex: 1,
    explanation: 'Feigning illness is everyday resistance, and "lying out" in nearby woods or swamps before returning is truancy; both limited exploitation inside slavery without armed force or permanent escape. Moral suasion and political abolition were strategies of the antislavery movement.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasra-ent-1b',
    question: 'In 1845 a Massachusetts abolitionist refuses to vote, saying the Constitution protects slavery, and instead lectures and gathers petitions to change public opinion. She is following',
    options: ['the gradualist program of the Pennsylvania Abolition Society', 'the political strategy of the Liberty Party\'s candidates', 'the colonization plan of the American Colonization Society', 'the moral suasion strategy of William Lloyd Garrison\'s wing'],
    correctIndex: 3,
    explanation: 'Garrison\'s wing rejected voting under a proslavery Constitution and relied on lectures, newspapers and petitions to change hearts. The Liberty Party pursued political action through elections, which she rejects.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Armed Revolt in North America: Cases, Causes and Consequences
  // source: Trial testimony on Gabriel's planned rebellion, Virginia, 1800 ("Death or Liberty" flag); verbatim
  {
    id: 'aasra-ent-2a',
    question: 'Trial testimony said Gabriel\'s rebels in 1800 planned to carry a flag reading "Death or Liberty," and witnesses at Denmark Vesey\'s 1822 trial said he hoped for help from Haiti. Together these details suggest that rebels drew on',
    options: ['promises of aid from Northern antislavery societies', 'orders sent by British officials in Canada', 'Atlantic revolutionary ideals and examples', 'the Liberty Party\'s plan for emancipation'],
    correctIndex: 2,
    explanation: 'Gabriel borrowed the language of the American Revolution, and Vesey looked to the Haitian Revolution, so both plots drew on the revolutionary ideas circulating in the Atlantic world. The Liberty Party did not exist until 1840.',
    partNumber: 2,
    partTitle: 'Armed Revolt in North America: Cases, Causes and Consequences',
  },
  {
    id: 'aasra-ent-2b',
    question: 'Which statement accurately compares the Stono Rebellion (1739) and the German Coast Uprising (1811)?',
    options: ['Both were crushed by armed forces, and the remains of rebels were displayed as warnings.', 'Both freed most of their participants, who escaped to Spanish Florida and Mexico.', 'Each was betrayed by informants before any rebels took up arms against planters.', 'Both led their colonies to adopt gradual emancipation laws within a few short years.'],
    correctIndex: 0,
    explanation: 'Militia crushed Stono, and militia and U.S. troops crushed the German Coast rising; in both cases rebels\' remains were displayed as warnings. Unlike the plots of Gabriel and Vesey, both risings actually began, and neither led to emancipation.',
    partNumber: 2,
    partTitle: 'Armed Revolt in North America: Cases, Causes and Consequences',
  },
  // Part 3: Self-Emancipation: Flight, Vigilance Committees and the Fugitive Slave Act
  // source: Fugitive Slave Act of 1850, Section 6 (9 Stat. 462); verbatim
  {
    id: 'aasra-ent-3a',
    question: '"In no trial or hearing under this act shall the testimony of such alleged fugitive be admitted in evidence"\n— Fugitive Slave Act of 1850, Section 6\n\nThis provision most directly helps explain why',
    options: ['Southern states demanded that escapees receive jury trials in Northern courts', 'Congress repealed the law after the Christiana confrontation in 1851', 'most escapees chose to settle in Northern cities rather than in Canada', 'free Black northerners feared that a claimant\'s word alone could enslave them'],
    correctIndex: 3,
    explanation: 'Because the accused could not speak in his or her own defense, a claimant\'s affidavit could send even a free person south, so thousands of Black northerners moved to Canada. The law was not repealed during the 1850s.',
    partNumber: 3,
    partTitle: 'Self-Emancipation: Flight, Vigilance Committees and the Fugitive Slave Act',
  },
  {
    id: 'aasra-ent-3b',
    question: 'A museum panel states that white Quakers ran a fixed network of tunnels and safe houses that carried most escapees straight to Canada. Which correction is best supported by the evidence?',
    options: ['Escapees relied mainly on maps sewn into quilts, which guided them north on their own.', 'Black communities and vigilance committees did most of the work, and help was often improvised.', 'Federal marshals quietly ran the network, since they were paid for each escapee they moved.', 'Southern churches organized the routes, sending escapees north through their congregations.'],
    correctIndex: 1,
    explanation: 'Escapees, free Black neighborhoods, Black churches and committees such as Philadelphia\'s took most of the risk, and most help was a meal, a ride or a warning; many escapees settled in Northern cities. Quilt codes have no support in sources from the period.',
    partNumber: 3,
    partTitle: 'Self-Emancipation: Flight, Vigilance Committees and the Fugitive Slave Act',
  },
  // Part 4: The Abolitionist Movement: Strategies and Splits
  // source: William Lloyd Garrison, "To the Public," The Liberator, January 1, 1831; verbatim (checked against a facsimile of the first issue)
  {
    id: 'aasra-ent-4a',
    question: '"I shall strenuously contend for the immediate enfranchisement of our slave population. ... I unreflectingly assented to the popular but pernicious doctrine of gradual abolition. I seize this opportunity to make a full and unequivocal recantation"\n— William Lloyd Garrison, The Liberator (1831)\n\nThis passage best illustrates which shift in the antislavery movement?',
    options: ['From step-by-step emancipation to emancipation at once', 'From moral suasion to a new political party that would run its own candidates', 'From abolition at home to colonization of free Black Americans in West Africa', 'From petitions to Congress to armed raids on federal arsenals in the South'],
    correctIndex: 0,
    explanation: 'Garrison renounces the gradual abolition he once supported and demands emancipation at once, the defining change of the second wave, which free Black activists had pressed for. He remained committed to moral suasion and opposed colonization.',
    partNumber: 4,
    partTitle: 'The Abolitionist Movement: Strategies and Splits',
  },
  {
    id: 'aasra-ent-4b',
    question: 'At the 1843 National Convention of Colored Citizens, Henry Highland Garnet urged enslaved people to resist their enslavers; the convention narrowly declined to endorse his address, and Douglass opposed it at the time. This episode shows that',
    options: ['Black abolitionists had given up on the antislavery cause by the 1840s', 'the convention supported colonization in Liberia as a safer course', 'Black leaders disagreed over whether to call for a violent uprising', 'Garnet and Douglass both rejected political action under the Constitution'],
    correctIndex: 2,
    explanation: 'Garnet called for resistance while Douglass, then still close to Garrison, argued against the address, and the delegates split almost evenly. The episode reflects debate over tactics, not withdrawal from the cause or support for colonization.',
    partNumber: 4,
    partTitle: 'The Abolitionist Movement: Strategies and Splits',
  },
  // Part 5: War and Emancipation, 1861–1865: How Slavery Ended
  // source: Abraham Lincoln, Emancipation Proclamation, January 1, 1863 (National Archives transcript); verbatim
  {
    id: 'aasra-ent-5a',
    question: '"And upon this act, sincerely believed to be an act of justice, warranted by the Constitution, upon military necessity, I invoke the considerate judgment of mankind, and the gracious favor of Almighty God."\n— Abraham Lincoln, Emancipation Proclamation (1863)\n\nThe proclamation\'s reliance on "military necessity" helps explain why abolitionists pressed for',
    options: ['a federal law paying slaveholders in the border states for each person freed', 'a Supreme Court ruling that the Constitution extended the order to loyal states', 'a new Fugitive Slave Act to return escapees who had reached Union lines', 'a constitutional amendment, for a wartime order might not outlast the war'],
    correctIndex: 3,
    explanation: 'A measure justified by war powers could be challenged once the fighting ended, so abolitionists sought the Thirteenth Amendment to make abolition permanent. They did not seek compensation, a new fugitive law or a court ruling.',
    partNumber: 5,
    partTitle: 'War and Emancipation, 1861–1865: How Slavery Ended',
  },
  // source: U.S. Constitution, Thirteenth Amendment, Section 1, 1865; verbatim
  {
    id: 'aasra-ent-5b',
    question: 'The Thirteenth Amendment banned slavery and involuntary servitude "except as a punishment for crime whereof the party shall have been duly convicted." For a change-and-continuity argument, this clause is best used as evidence of',
    options: ['a change: Congress also gave freedpeople land as part of the same amendment', 'a continuity: a legal gap later used to force freed Black people to labor', 'a change: Black men gained the vote in every state when it was ratified', 'a continuity: slavery stayed legal in the border states until the 1870s'],
    correctIndex: 1,
    explanation: 'Slavery ended in law in 1865, but the punishment exception left room for convict labor that later forced Black people to work. The amendment gave no land or votes, and it ended slavery in the border states too.',
    partNumber: 5,
    partTitle: 'War and Emancipation, 1861–1865: How Slavery Ended',
  },
  // Part 6: Source Workshop: Voices of Resistance
  // source: original
  {
    id: 'aasra-ent-6a',
    question: 'The following description, written for this question, summarizes a kind of source: in 1850 a white editor publishes the story of a man who escaped slavery, writing his speech in heavy dialect and adding a dramatic scene that the man never mentions in his own narrative published later. How should a historian treat the editor\'s version?',
    options: ['As evidence of the editor\'s framing, checked against the man\'s own words', 'As the most accurate version, since it was printed before the man\'s own book', 'As useless, since anything a white editor recorded must be thrown out entirely', 'As a word-for-word transcript, since newspapers printed exactly what was said'],
    correctIndex: 0,
    explanation: 'A mediated source can show how white reformers shaped Black voices for their audiences, as Frances Dana Gage did with Sojourner Truth, but its quotations should be checked against the speaker\'s own words. Being earlier does not make an edited version more accurate.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices of Resistance',
  },
  // source: David Walker, Appeal to the Coloured Citizens of the World, 1829 (short phrase in explanation); verbatim
  {
    id: 'aasra-ent-6b',
    question: 'Walker\'s Appeal (1829), Garnet\'s Address (1843) and Douglass\'s Fourth of July speech (1852) share which rhetorical strategy?',
    options: ['Each praised the framers for setting slavery on the road to a gradual end.', 'Each urged free Black Americans to settle in Liberia or Haiti for safety.', 'Each turned the founding language of liberty against slavery.', 'Each asked Southern legislatures for emancipation with compensation.'],
    correctIndex: 2,
    explanation: 'Walker challenged Americans to "understand your own language," Garnet invoked the right to liberty, and Douglass showed what the Fourth of July meant to the enslaved, each using national ideals to condemn slavery. Walker and Douglass both rejected colonization.',
    partNumber: 6,
    partTitle: 'Source Workshop: Voices of Resistance',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aasra-ent-7a',
    question: 'Which statement best describes a limit of flight as a strategy against slavery?',
    options: ['It drew no attention from slaveholders or national politics.', 'It was most open to young men near the free states.', 'It always required help from white Quakers in the South.', 'It was illegal under Northern state law before the 1850s.'],
    correctIndex: 1,
    explanation: 'Successful escapees were mostly young men from the Upper South, who knew the roads and had fewer children depending on them; women and Deep South residents faced far greater obstacles. Flight did alarm slaveholders and drove the politics of the 1850s.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aasra-ent-7b',
    question: 'Which evidence best supports the claim that Black resistance helped drive the national political crisis of the 1850s?',
    options: ['Escapes and courtroom rescues provoked the 1850 Act, then Northern personal liberty laws in response.', 'The founding of the American Colonization Society in 1816 by Henry Clay and others.', 'Virginia\'s debate over gradual emancipation in its legislature in 1831 and 1832.', 'The Pennsylvania Abolition Society\'s legal aid for free Black residents in the 1790s.'],
    correctIndex: 0,
    explanation: 'Escapes pushed slaveholders to demand the Fugitive Slave Act of 1850, and rescues such as Shadrach Minkins\'s and the resistance at Christiana turned many Northerners against federal enforcement. The other developments came well before the 1850s.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Armed Revolt in North America: Cases, Causes and Consequences' },
    { partNumber: 3, partTitle: 'Self-Emancipation: Flight, Vigilance Committees and the Fugitive Slave Act' },
    { partNumber: 4, partTitle: 'The Abolitionist Movement: Strategies and Splits' },
    { partNumber: 5, partTitle: 'War and Emancipation, 1861–1865: How Slavery Ended' },
    { partNumber: 6, partTitle: 'Source Workshop: Voices of Resistance' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
