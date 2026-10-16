/**
 * Entrance Quiz — The Civil War (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushciv-ent-1a',
    question: 'Seven states of the Lower South seceded between Lincoln\'s election in November 1860 and his inauguration in March 1861. Which of the following best explains their decision?',
    options: ['Lincoln had pledged during the campaign to abolish slavery in every state', 'Lincoln won only free states, so a Northern party alone could now win the presidency', 'Lincoln lost the popular vote and was chosen by the House of Representatives', 'Lincoln\'s party had taken control of the Supreme Court and vowed to reverse it'],
    correctIndex: 1,
    explanation: 'Lincoln carried only free states, and Southern leaders concluded that a purely Northern party opposed to slavery\'s expansion now controlled the presidency. Lincoln promised not to touch slavery in the states, he won a clear electoral majority, and Republicans did not control the Court.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushciv-ent-1b',
    question: 'The Emancipation Proclamation affected the diplomacy of the Civil War mainly by',
    options: ['making British support for a slaveholding Confederacy harder to defend', 'persuading France to send warships to help enforce the Union blockade', 'ending the Trent Affair by releasing two Confederate envoys to Britain', 'convincing Britain to stop buying cotton from its suppliers in Egypt and India'],
    correctIndex: 0,
    explanation: 'Once the Union fought openly against slavery, British leaders found it politically costly to recognize the Confederacy. France never joined the blockade, the Trent Affair was settled in 1861, and Britain relied more on Egyptian and Indian cotton, not less.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: The Collapse of Compromise, 1846–1861
  {
    id: 'apushciv-ent-2a',
    question: 'Historians often call the Fugitive Slave Act of 1850 an unintended consequence of the Compromise of 1850 mainly because the law',
    options: ['ended Southern demands for new slave territory in the West', 'turned many moderate Northerners against slavery', 'rebuilt the Whig Party as a strong force in the South', 'led Congress to admit California as a slave state'],
    correctIndex: 1,
    explanation: 'Meant to satisfy the South, the law brought slave catchers and federal marshals into Northern towns, as in the Anthony Burns case in Boston, and pushed moderates toward the antislavery side. Southern territorial demands grew, the Whigs collapsed, and California entered as a free state.',
    partNumber: 2,
    partTitle: 'The Collapse of Compromise, 1846–1861',
  },
  {
    id: 'apushciv-ent-2b',
    question: 'In a causation essay on secession, which of the following is best classified as a long-term cause rather than a short-term cause or a trigger?',
    options: ['The firing on Fort Sumter in April 1861', 'The failure of the Crittenden plan in December 1860', 'The rival free-labor and proslavery ideologies of the 1830s and 1840s', 'The election of Abraham Lincoln in November 1860'],
    correctIndex: 2,
    explanation: 'The free-labor and positive-good ideologies grew over decades and made every new territory a contest between two societies. Lincoln\'s election, the failure of Crittenden and Fort Sumter all came in 1860–1861 and acted as triggers.',
    partNumber: 2,
    partTitle: 'The Collapse of Compromise, 1846–1861',
  },
  // Part 3: Secession and War Aims in the Sources, 1860–1865
  // source: "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi from the Federal Union," January 1861; verbatim
  {
    id: 'apushciv-ent-3a',
    question: '"Our position is thoroughly identified with the institution of slavery—the greatest material interest of the world."\n— Declaration of the Immediate Causes of the Secession of Mississippi, January 1861\n\nThe declaration is best understood in the context of',
    options: ['the Supreme Court\'s decision in Dred Scott v. Sandford', 'the passage of the Thirteenth Amendment by Congress', 'a Republican victory in the presidential race', 'the announcement of the Emancipation Proclamation'],
    correctIndex: 2,
    explanation: 'Mississippi seceded weeks after Lincoln, whose party pledged to keep slavery out of the territories, won the presidency. Dred Scott had favored the South, and the Emancipation Proclamation and the Thirteenth Amendment came years after secession.',
    partNumber: 3,
    partTitle: 'Secession and War Aims in the Sources, 1860–1865',
  },
  // source: Abraham Lincoln, Annual Message to Congress, December 1, 1862; verbatim
  {
    id: 'apushciv-ent-3b',
    question: '"In giving freedom to the slave, we assure freedom to the free—honorable alike in what we give, and what we preserve."\n— Abraham Lincoln, Annual Message to Congress, December 1, 1862\n\nCompared with Lincoln\'s public letter to Horace Greeley in August 1862, this passage shows that Lincoln',
    options: ['now tied emancipation to the Union\'s own survival', 'had decided to abandon the war for the Union itself', 'still refused to take any public position on slavery', 'planned to free people in the loyal border states first'],
    correctIndex: 0,
    explanation: 'In August Lincoln described slavery policy only as a means of saving the Union; by December, after the preliminary proclamation, he presented freeing the enslaved as part of preserving freedom for all. He never gave up the Union cause, and the Proclamation exempted the border states.',
    partNumber: 3,
    partTitle: 'Secession and War Aims in the Sources, 1860–1865',
  },
  // Part 4: Two Home Fronts and the Union Victory
  {
    id: 'apushciv-ent-4a',
    question: 'Which of the following best explains why prices rose far less in the Union than in the Confederacy during the war?',
    options: ['The Union paid a larger share of its costs with taxes and bonds', 'The Union refused to issue any paper money until the war ended', 'The Union tied the value of the dollar to cotton sold in Europe', 'The Union seized enough gold in the South to cover its expenses'],
    correctIndex: 0,
    explanation: 'Income and excise taxes and bond drives absorbed money in the North, while the Confederacy paid its bills mostly by printing currency. The Union did print greenbacks, cotton backed Confederate rather than Union credit, and captured gold paid for little.',
    partNumber: 4,
    partTitle: 'Two Home Fronts and the Union Victory',
  },
  {
    id: 'apushciv-ent-4b',
    question: 'Which evidence best supports the claim that Union strategy in 1864, and not superior resources alone, decided the outcome of the war?',
    options: ['The Union had more than twice the population of the Confederacy', 'Britain and France never recognized the Confederacy as a nation', 'Northern factories produced about nine-tenths of the nation\'s goods', 'Union armies had the same advantages in 1861–1863 yet lost major battles'],
    correctIndex: 3,
    explanation: 'If resources had been enough, the Union would have won earlier; the change came when Grant and Sherman applied those resources through coordinated pressure and the capture of Atlanta. The other choices describe advantages that existed all along.',
    partNumber: 4,
    partTitle: 'Two Home Fronts and the Union Victory',
  },
  // Part 5: Emancipation as a Process, the War in the West, and Misconceptions
  {
    id: 'apushciv-ent-5a',
    question: 'Why did Lincoln and congressional Republicans push for the Thirteenth Amendment even after the Emancipation Proclamation took effect?',
    options: ['The Supreme Court had struck down the Proclamation as unconstitutional in 1864', 'The Proclamation had freed enslaved people only in the loyal border states', 'Britain demanded a constitutional amendment before it would resume trade', 'As a war measure, the Proclamation might not survive later court challenges'],
    correctIndex: 3,
    explanation: 'Lincoln justified the Proclamation under his war powers, so its force after the war was uncertain; an amendment made abolition permanent and reached the border states. The Court never struck it down, it exempted rather than targeted the border states, and Britain made no such demand.',
    partNumber: 5,
    partTitle: 'Emancipation as a Process, the War in the West, and Misconceptions',
  },
  {
    id: 'apushciv-ent-5b',
    question: 'The Dakota War in Minnesota (1862) and the Sand Creek Massacre in Colorado (1864) are best used as evidence that',
    options: ['Native nations of the West stayed untouched by the war years', 'the Union army shielded Native lands from settlers during the war', 'federal and state power was turned against Western Native nations', 'most Western Native nations fought for the Confederacy to regain land'],
    correctIndex: 2,
    explanation: 'With regular troops pulled east, volunteers and territorial governments waged brutal campaigns against the Dakota, Cheyenne and Arapaho. Settlement and conflict accelerated rather than paused, and the nations that signed Confederate treaties were in Indian Territory, not the Plains and Minnesota.',
    partNumber: 5,
    partTitle: 'Emancipation as a Process, the War in the West, and Misconceptions',
  },
  // Part 6: Problem-Solving Workshop
  // source: Abraham Lincoln, First Inaugural Address, March 4, 1861; verbatim
  {
    id: 'apushciv-ent-6a',
    question: '"In your hands, my dissatisfied fellow countrymen, and not in mine, is the momentous issue of civil war. The government will not assail you. You can have no conflict, without being yourselves the aggressors."\n— Abraham Lincoln, First Inaugural Address, March 4, 1861\n\nLincoln\'s purpose in this passage was most likely to',
    options: ['announce that Union armies would invade the seceded states at once', 'offer to recognize the Confederacy in return for a lasting peace', 'blame the South in advance for any war and hold the Upper South', 'promise to free all enslaved people if the seceded states returned'],
    correctIndex: 2,
    explanation: 'By pledging not to strike first, Lincoln put the burden of starting a war on the seceded states, which mattered to the slave states of the Upper South that had not yet left. He denied that secession was legal, so he offered no recognition, and he promised not to interfere with slavery in the states.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushciv-ent-6b',
    question: 'A historian wants to use one Union soldier\'s 1864 letter praising emancipation as evidence of Northern opinion. Which limitation should the historian weigh most carefully?',
    options: ['Wartime letters cannot serve as evidence about the war itself', 'One soldier may not speak for all who fought for the nation', 'Soldiers were barred by law from writing home about slavery', 'The letter must be forged, since emancipation was not yet policy'],
    correctIndex: 1,
    explanation: 'Most Union soldiers enlisted to preserve the Union, and opinions on emancipation varied widely, so a single letter cannot stand for the whole North. Letters are valuable evidence, no law barred soldiers from discussing slavery, and emancipation had been policy since January 1863.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushciv-ent-7a',
    question: 'Which event is the best choice for the turning point at which Union war aims expanded from restoring the Union to ending slavery?',
    options: ['The First Battle of Bull Run', 'The surrender at Appomattox', 'The Confederate firing on Fort Sumter', 'The proclamation after Antietam'],
    correctIndex: 3,
    explanation: 'After the Union victory at Antietam in September 1862, Lincoln issued the preliminary Emancipation Proclamation, making emancipation a Union war aim. Fort Sumter and Bull Run came while the war was still only for the Union, and Appomattox ended the war.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushciv-ent-7b',
    question: 'An essay prompt asks: "Evaluate the extent to which the Civil War expanded the power of the federal government." Which thesis is most defensible?',
    options: ['The war expanded federal power in many different ways, and these changes were important', 'The war greatly expanded federal power through new taxes and a national draft, though some of it faded after 1865', 'The war left federal power unchanged, because the Constitution barred any wartime expansion', 'The war reduced federal power, because the Confederacy won most of the battles fought before 1863'],
    correctIndex: 1,
    explanation: 'This thesis takes a position on extent, names specific evidence (the income tax, national banks and conscription) and qualifies the claim, since the income tax lapsed and the army demobilized. The "many different ways" thesis makes no claim about extent, and the other two are contradicted by the record.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Collapse of Compromise, 1846–1861' },
    { partNumber: 3, partTitle: 'Secession and War Aims in the Sources, 1860–1865' },
    { partNumber: 4, partTitle: 'Two Home Fronts and the Union Victory' },
    { partNumber: 5, partTitle: 'Emancipation as a Process, the War in the West, and Misconceptions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
