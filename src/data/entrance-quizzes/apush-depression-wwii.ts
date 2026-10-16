/**
 * Entrance Quiz — The Great Depression & World War II (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushdep-ent-1a',
    question: 'New Deal measures are often sorted into relief, recovery and reform. Which of the following is best classified as reform?',
    options: ['The Civilian Conservation Corps', 'The Works Progress Administration', 'The Federal Emergency Relief Administration', 'The Securities and Exchange Commission'],
    correctIndex: 3,
    explanation: 'The SEC regulated the stock market to prevent the abuses of the 1920s from recurring, a lasting structural change. The CCC, WPA and FERA gave jobs or aid to people in immediate need, which is relief.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushdep-ent-1b',
    question: 'Which wartime development best illustrates that World War II opened new but unequal opportunities at home?',
    options: ['Japanese Americans were exempted from the draft and left free to farm', 'Women won equal pay with men and kept their factory jobs after 1945', 'Black workers won defense jobs but served in segregated units', 'Mexican braceros received citizenship after working a single harvest'],
    correctIndex: 2,
    explanation: 'Executive Order 8802 opened defense work to Black Americans, yet they served in segregated units until 1948. Japanese Americans were incarcerated, women were paid less and many were laid off, and braceros were temporary contract workers.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: From Crash to New Deal: How the Crisis Deepened and How Washington Responded
  {
    id: 'apushdep-ent-2a',
    question: 'Economists who stress monetary causes of the Great Depression point most directly to which of the following?',
    options: ['A one-third drop in the money supply as banks failed', 'The cost of New Deal relief programs after 1933', 'Inflation caused by printing too much paper money', 'High tariffs set by the Fordney-McCumber Act of 1922'],
    correctIndex: 0,
    explanation: 'Between 1929 and 1933 bank failures shrank the money supply by about a third while the Federal Reserve did little, deepening deflation. Prices fell rather than rose, and the New Deal came after the worst of the collapse.',
    partNumber: 2,
    partTitle: 'From Crash to New Deal: How the Crisis Deepened and How Washington Responded',
  },
  {
    id: 'apushdep-ent-2b',
    question: 'Which action best supports the claim that Herbert Hoover responded to the Depression more actively than his reputation suggests?',
    options: ['He set up federal loans to banks, railroads and insurers', 'He ordered the Bonus Army\'s veterans paid in full in 1932', 'He vetoed every farm relief bill that Congress sent to him', 'He signed the Social Security Act to provide old-age pensions'],
    correctIndex: 0,
    explanation: 'The Reconstruction Finance Corporation (1932) put federal money into banks, railroads and insurers, more intervention than any earlier president had tried, though not direct relief to individuals. Hoover created the Federal Farm Board, had the Bonus Army driven out, and Social Security came under Roosevelt.',
    partNumber: 2,
    partTitle: 'From Crash to New Deal: How the Crisis Deepened and How Washington Responded',
  },
  // Part 3: Voices of the Depression, Read Closely (1928–1937)
  {
    id: 'apushdep-ent-3a',
    question: 'Which of the following best explains why most Black voters outside the South shifted from the Republicans to the Democrats between 1932 and 1936?',
    options: ['Roosevelt signed a federal anti-lynching law in his first term', 'Relief programs and Eleanor Roosevelt\'s visible support', 'Democrats ended legal segregation in the Southern states', 'Social Security covered domestic and farm workers from the start'],
    correctIndex: 1,
    explanation: 'Relief jobs, the "Black Cabinet" and Eleanor Roosevelt\'s public stands drew Black voters to the party despite its Southern wing. Roosevelt did not back anti-lynching bills, segregation remained, and Social Security first excluded domestic and farm workers.',
    partNumber: 3,
    partTitle: 'Voices of the Depression, Read Closely (1928–1937)',
  },
  {
    id: 'apushdep-ent-3b',
    question: 'A historian using Farm Security Administration photographs of Dust Bowl migrants as evidence should consider most carefully that',
    options: ['the agency made them to build public support for federal aid', 'cameras of the 1930s could not record people\'s faces clearly', 'migrants were paid by the government to leave camps for good', 'the photographs were taken after the Second World War ended'],
    correctIndex: 0,
    explanation: 'Photographers such as Dorothea Lange worked for a New Deal agency whose purpose was to win sympathy for rural relief, so the images were framed to move viewers. The other statements are false.',
    partNumber: 3,
    partTitle: 'Voices of the Depression, Read Closely (1928–1937)',
  },
  // Part 4: From Isolation to Intervention, 1921–1941
  // source: Franklin D. Roosevelt, Annual Message to Congress ("Four Freedoms"), January 6, 1941; verbatim
  {
    id: 'apushdep-ent-4a',
    question: '"In the future days, which we seek to make secure, we look forward to a world founded upon four essential human freedoms."\n— Franklin D. Roosevelt, Annual Message to Congress, January 6, 1941\n\nThe speech is best understood in the context of',
    options: ['Roosevelt\'s response to the attack on Pearl Harbor', 'the Allied victory in Europe and the rise of the UN', 'the debate over the first Neutrality Act of 1935', 'his push to aid Britain without entering the war'],
    correctIndex: 3,
    explanation: 'Delivered as Congress took up Lend-Lease, the speech defined what American aid to Britain would defend. Pearl Harbor came eleven months later, the first Neutrality Act six years earlier, and victory in Europe in 1945.',
    partNumber: 4,
    partTitle: 'From Isolation to Intervention, 1921–1941',
  },
  {
    id: 'apushdep-ent-4b',
    question: 'Which policy best challenges the description of the United States in the 1920s as isolationist?',
    options: ['The Senate\'s rejection of the League of Nations in 1919–1920', 'The Dawes Plan\'s U.S. loans for German reparations', 'The Neutrality Act of 1935 banning arms sales to nations at war', 'The immigration quotas set by the National Origins Act of 1924'],
    correctIndex: 1,
    explanation: 'Under the Dawes Plan, American banks financed a cycle of German reparations and Allied debt payments, deep involvement in Europe without an alliance. The League vote, the 1935 act and the quotas all fit the isolationist label.',
    partNumber: 4,
    partTitle: 'From Isolation to Intervention, 1921–1941',
  },
  // Part 5: The Home Front and Victory, 1941–1945
  {
    id: 'apushdep-ent-5a',
    question: 'A historian who holds the revisionist view of the atomic bombings of Japan would most likely cite which evidence?',
    options: ['Fierce Japanese resistance on Iwo Jima and Okinawa in 1945', 'Truman\'s eye on the Soviets at Potsdam and Japanese peace feelers', 'Military estimates of the casualties of invading the home islands', 'The enormous cost of the Manhattan Project from 1942 to 1945'],
    correctIndex: 1,
    explanation: 'Revisionists such as Gar Alperovitz argue that Japan was near surrender and that the bombs were meant partly to impress the Soviet Union. Okinawa and invasion estimates are the evidence of the traditional view.',
    partNumber: 5,
    partTitle: 'The Home Front and Victory, 1941–1945',
  },
  {
    id: 'apushdep-ent-5b',
    question: 'Which statement best describes change and continuity for American women during World War II?',
    options: ['They entered paid work for the first time and kept those jobs after 1945', 'They left paid work in 1942 as men returned to the factories from the front', 'They served in combat units and won equal-pay laws before the war ended', 'They moved into better-paid industrial jobs but still earned less than the men'],
    correctIndex: 3,
    explanation: 'The war moved many women, some of whom already worked, into shipyards and aircraft plants, yet they earned less than men and many were laid off in 1945–1946. Women were barred from combat, and no equal-pay law passed.',
    partNumber: 5,
    partTitle: 'The Home Front and Victory, 1941–1945',
  },
  // Part 6: Problem-Solving Workshop
  // source: Executive Order 9066, February 19, 1942 (preamble); verbatim
  {
    id: 'apushdep-ent-6a',
    question: '"Whereas the successful prosecution of the war requires every possible protection against espionage and against sabotage to national-defense material, national-defense premises, and national-defense utilities..."\n— Executive Order 9066, February 19, 1942\n\nThe order is best understood in the context of',
    options: ['a Supreme Court ruling that required the removal of noncitizens', 'proven sabotage by Japanese Americans on the West Coast', 'fear and racial prejudice on the West Coast in the weeks after Pearl Harbor', 'the travel bans of the Neutrality Acts passed in the 1930s'],
    correctIndex: 2,
    explanation: 'The order came ten weeks after Pearl Harbor amid fear of invasion and long-standing anti-Asian prejudice; no Japanese American was convicted of sabotage. The Court ruled on the policy later, in Korematsu (1944), and the Neutrality Acts concerned travel on belligerent ships.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // source: Franklin D. Roosevelt, First Inaugural Address, March 4, 1933; verbatim
  {
    id: 'apushdep-ent-6b',
    question: '"Our greatest primary task is to put people to work."\n— Franklin D. Roosevelt, First Inaugural Address, March 4, 1933\n\nWhich program of the Hundred Days most directly put this goal into practice?',
    options: ['The Social Security Act', 'The Civilian Conservation Corps', 'The Fair Labor Standards Act', 'The Securities Exchange Act'],
    correctIndex: 1,
    explanation: 'The CCC, created in March 1933, hired young men for conservation work. Social Security (1935) and the Fair Labor Standards Act (1938) came later, and the 1934 securities law regulated markets rather than creating jobs.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushdep-ent-7a',
    question: 'Which decision marks the turning point after which the Supreme Court stopped striking down New Deal economic laws?',
    options: ['Schechter Poultry Corp. v. United States (1935)', 'United States v. Butler (1936)', 'West Coast Hotel v. Parrish (1937)', 'Korematsu v. United States (1944)'],
    correctIndex: 2,
    explanation: 'In West Coast Hotel the Court upheld a state minimum-wage law, and soon afterward it upheld the Wagner Act and Social Security. Schechter and Butler struck down the NIRA and AAA, and Korematsu concerned wartime incarceration.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushdep-ent-7b',
    question: 'An essay prompt asks: "Evaluate the extent to which World War II changed the role of the federal government in the economy." Which thesis is most defensible?',
    options: ['The war vastly enlarged Washington\'s role in spending and taxing and in directing industry', 'The war returned economic decisions to the states after the experiment of the New Deal', 'The war changed the economy in many important ways for many different Americans', 'The war ended the income tax because war bonds paid for all of the fighting'],
    correctIndex: 0,
    explanation: 'This thesis makes a claim about extent and links it to evidence such as the War Production Board, the mass income tax with withholding, and a tenfold rise in spending. The "many important ways" thesis makes no claim, and the other two contradict the record.',
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
    { partNumber: 2, partTitle: 'From Crash to New Deal: How the Crisis Deepened and How Washington Responded' },
    { partNumber: 3, partTitle: 'Voices of the Depression, Read Closely (1928–1937)' },
    { partNumber: 4, partTitle: 'From Isolation to Intervention, 1921–1941' },
    { partNumber: 5, partTitle: 'The Home Front and Victory, 1941–1945' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
