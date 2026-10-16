/**
 * Entrance Quiz — The Great Migration & Harlem Renaissance (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasgm-ent-1a',
    question: 'In 1917 a Mississippi sharecropping family leaves for Chicago after the boll weevil ruins its cotton and a cousin writes about packinghouse jobs paying far more than farm work. These two influences are best classified as',
    options: ['two pull factors drawing the family north', 'two push factors driving the family out of the South', 'a push factor and a pull factor', 'a pull factor in the South and a push factor in the North'],
    correctIndex: 2,
    explanation: 'The ruined crop is a Southern condition driving the family out (push), and higher Northern wages draw it north (pull). Historians stress that push and pull worked together.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasgm-ent-1b',
    question: 'Which development best reflects the "New Negro" identity that writers described in the years after World War I?',
    options: ['Black Chicagoans fought back during the 1919 riot, as writers celebrated.', 'Black veterans returned south and pledged loyalty to the old racial order.', 'Black writers asked white critics to set the themes of their new work.', 'Black migrants gave up their Southern music in favor of European forms.'],
    correctIndex: 0,
    explanation: 'Unlike many earlier riots, Black residents in Chicago defended themselves in 1919, and writers of the time connected that refusal to submit to the self-confident "New Negro." The other options describe deference, not assertion.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: How the Migration Worked (1910–1940)
  {
    id: 'aasgm-ent-2a',
    question: 'Black population of Detroit (rounded census figures): 1910, 6,000; 1920, 41,000; 1930, 120,000 (about 8% of the city).\n\nWhich statement do these figures support?',
    options: ['Black residents made up most of Detroit\'s population by 1930.', 'The Black population grew about sevenfold from 1910 to 1920.', 'Its Black population only doubled from 1920 to 1930.', 'Detroit\'s Black population fell during the 1920s.'],
    correctIndex: 1,
    explanation: '41,000 is about 6.8 times 6,000, reflecting auto-industry hiring after 1914. From 1920 to 1930 the population roughly tripled, and Black residents were still only about 8% of the city.',
    partNumber: 2,
    partTitle: 'How the Migration Worked (1910–1940)',
  },
  {
    id: 'aasgm-ent-2b',
    question: 'Why did some white Southern officials confiscate copies of the Chicago Defender during World War I?',
    options: ['It printed federal orders that banned Black farm workers from traveling north.', 'It urged Black Southerners to stay on the land and save for farms of their own.', 'It was published by white planters who wanted to recruit cheaper workers.', 'Its job ads and editorials urged Black workers to leave, threatening the supply of cheap labor.'],
    correctIndex: 3,
    explanation: 'The Defender paired reports of Southern lynchings with Chicago job ads and promoted a "Great Northern Drive" in 1917, so officials who feared losing workers tried to suppress it. Pullman porters carried bundles south anyway.',
    partNumber: 2,
    partTitle: 'How the Migration Worked (1910–1940)',
  },
  // Part 3: Making the Black Metropolis: Work, Housing and Conflict
  {
    id: 'aasgm-ent-3a',
    question: 'Chicago\'s Black population rose about fivefold from 1910 to 1930, but the area where Black residents could live grew far more slowly. The most direct result was',
    options: ['crowded, overpriced kitchenettes in the Black Belt', 'a federal program building public housing in every ward', 'the end of restrictive covenants in Chicago\'s deeds', 'a rapid move of Black families into the suburbs'],
    correctIndex: 0,
    explanation: 'Hemmed in by covenants, violence and real estate practice, landlords cut apartments into one-room kitchenettes rented at high prices. Covenants stayed in force after Corrigan v. Buckley (1926), and suburbs stayed closed.',
    partNumber: 3,
    partTitle: 'Making the Black Metropolis: Work, Housing and Conflict',
  },
  {
    id: 'aasgm-ent-3b',
    question: 'In 1934 Arthur W. Mitchell, a Black Democrat, defeated Oscar De Priest, the Black Republican who had represented Chicago\'s South Side since 1929. This result best illustrates',
    options: ['the return of Black voting rights in the Deep South', 'the UNIA\'s success in electing members to Congress', 'a New Deal shift toward Roosevelt\'s party', 'a federal law requiring Black candidates in Northern districts'],
    correctIndex: 2,
    explanation: 'Concentrated Black voting blocs in Northern cities began moving from the party of Lincoln to Franklin Roosevelt\'s party in the 1930s. Southern disfranchisement continued, and the UNIA did not elect members of Congress.',
    partNumber: 3,
    partTitle: 'Making the Black Metropolis: Work, Housing and Conflict',
  },
  // Part 4: The New Negro in Words: Poems, Essays and the Debate over Art
  // source: Claude McKay, "America," Harlem Shadows, 1922; verbatim
  {
    id: 'aasgm-ent-4a',
    question: '"Although she feeds me bread of bitterness,\nAnd sinks into my throat her tiger\'s tooth,\nStealing my breath of life, I will confess\nI love this cultured hell that tests my youth!\nHer vigor flows like tides into my blood,\nGiving me strength erect against her hate."\n— Claude McKay, "America," Harlem Shadows (1922)\n\nThe speaker\'s attitude toward America is best described as',
    options: ['simple gratitude for the chances the nation has offered him', 'a wish to leave for Africa and never return to its shores', 'despair that ends in his surrender to the nation\'s hostility', 'defiant love for a country that wounds him'],
    correctIndex: 3,
    explanation: 'The speaker admits that America feeds him "bitterness" and "hate," yet he loves it and draws strength from it to stand "erect," the assertive stance of the New Negro. He neither surrenders nor plans to leave.',
    partNumber: 4,
    partTitle: 'The New Negro in Words: Poems, Essays and the Debate over Art',
  },
  {
    id: 'aasgm-ent-4b',
    question: 'In the late 1920s the white patron Charlotte Osgood Mason paid Langston Hughes and Zora Neale Hurston while expecting them to produce "primitive" folk material, and Hughes broke with her around 1930. This episode best illustrates',
    options: ['the NAACP\'s control over which writers The Crisis would publish', 'how wealthy sponsors could steer and limit what Black writers created', 'the federal arts programs that funded Harlem writers in the 1920s', 'the refusal of white publishers to print any Black writers at all'],
    correctIndex: 1,
    explanation: 'Patrons brought money and audiences but could press writers toward stereotypes, which is part of what Hughes\'s call for artistic independence answered. Federal arts programs came in the 1930s, and white firms such as Knopf did publish Black writers.',
    partNumber: 4,
    partTitle: 'The New Negro in Words: Poems, Essays and the Debate over Art',
  },
  // Part 5: Sound, Image and Reach: Music, Visual Art and the Wider Diaspora
  // source: Claude McKay, "The Tropics in New York," Harlem Shadows, 1922; verbatim
  {
    id: 'aasgm-ent-5a',
    question: '"Bananas ripe and green, and ginger-root,\nCocoa in pods and alligator pears,\nAnd tangerines and mangoes and grape fruit,\nFit for the highest prize at parish fairs,\n...\nMy eyes grew dim, and I could no more gaze;\nA wave of longing through my body swept"\n— Claude McKay, "The Tropics in New York," Harlem Shadows (1922)\n\nThe poem best reflects which feature of 1920s Harlem?',
    options: ['Its rent parties with stride pianists', 'Its jazz clubs with radio broadcasts', 'Its large Caribbean-born population', 'Its new factories hiring Southern migrants'],
    correctIndex: 2,
    explanation: 'McKay, born in Jamaica, recalls island fruit seen in a New York window, voicing the homesickness of the many Caribbean immigrants who lived in Harlem. The poem says nothing about music or factory work.',
    partNumber: 5,
    partTitle: 'Sound, Image and Reach: Music, Visual Art and the Wider Diaspora',
  },
  {
    id: 'aasgm-ent-5b',
    question: 'After Mamie Smith\'s "Crazy Blues" (1920) sold strongly, record companies created "race record" lines marketed to Black buyers. This development best shows that',
    options: ['migrants\' wages built demand that carried Black music nationwide', 'record companies refused to sell blues records outside the South', 'radio stations banned Black performers from their broadcasts', 'the blues faded once musicians moved to Northern cities'],
    correctIndex: 0,
    explanation: 'Black buyers, many of them migrants earning industrial wages, proved a large market, and records then carried blues and jazz across the country. The other options contradict how quickly the music spread.',
    partNumber: 5,
    partTitle: 'Sound, Image and Reach: Music, Visual Art and the Wider Diaspora',
  },
  // Part 6: Source Workshop: Migrant Letters, a Manifesto and an Image
  {
    id: 'aasgm-ent-6a',
    question: 'Jacob Lawrence painted the 60 panels of The Migration Series in 1940–41. Which consideration most affects how a historian should use the series as evidence about the migration of 1916–1919?',
    options: ['It was commissioned by Northern employers to recruit new workers in the South.', 'It is an artist\'s retrospective interpretation, made two decades later from memory and research.', 'It was painted by a white artist who had never visited Harlem or the South.', 'It shows only one family, so it cannot represent any wider pattern at all.'],
    correctIndex: 1,
    explanation: 'Lawrence, the Harlem-raised son of migrants, built the series from memory and research long after the first wave, so it is a powerful interpretation rather than an eyewitness record. It shows many people, not one family.',
    partNumber: 6,
    partTitle: 'Source Workshop: Migrant Letters, a Manifesto and an Image',
  },
  // source: original
  {
    id: 'aasgm-ent-6b',
    question: 'The following description, written for this question, summarizes a kind of source: a 1920 bulletin from a Chicago property owners\' association urges members to sign deed restrictions and warns that "invasion" by Black buyers will ruin property values. This source is best used as evidence of',
    options: ['federal housing policy written by Congress during World War I', 'Black realtors\' efforts to open Chicago blocks to Black renters', 'the success of racial zoning laws after Buchanan v. Warley', 'organized private efforts to keep neighborhoods segregated'],
    correctIndex: 3,
    explanation: 'Neighborhood associations organized restrictive covenants after the Supreme Court struck down racial zoning in 1917, so segregation in Northern cities rested on private agreements and pressure. The bulletin is not a federal or Black-authored source.',
    partNumber: 6,
    partTitle: 'Source Workshop: Migrant Letters, a Manifesto and an Image',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aasgm-ent-7a',
    question: 'Which claim best links the Great Migration to the Harlem Renaissance while also naming a limit?',
    options: ['Density supported magazines and audiences, but the same segregation trapped residents in crowded housing.', 'Migration ended segregation in the North, so writers were free to publish anywhere.', 'The renaissance began before the migration and drew few readers from migrant families.', 'Migration emptied Harlem, so writers moved to Paris to find patrons and readers.'],
    correctIndex: 0,
    explanation: 'Concentrated Black communities sustained The Crisis, Opportunity, clubs and audiences, yet covenants and the job ceiling kept most residents poor and crowded. The other options misstate the timing or the direction of the migration.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aasgm-ent-7b',
    question: 'For an essay arguing that the Great Migration changed Black life less than it seemed, which document would best support that side?',
    options: ['A 1917 migrant letter praising the vote and integrated schools', 'Hughes\'s 1926 essay claiming freedom for Black artists', 'The 1936 city report on poverty and police abuse in Harlem', 'Van Der Zee\'s photograph of a large UNIA parade in Harlem'],
    correctIndex: 2,
    explanation: 'The mayor\'s commission found unemployment, poor housing and police abuse behind the 1935 riot, evidence of continuing hardship. The letter, the essay and the parade photograph point to new rights, new art and mass politics.',
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
    { partNumber: 2, partTitle: 'How the Migration Worked (1910–1940)' },
    { partNumber: 3, partTitle: 'Making the Black Metropolis: Work, Housing and Conflict' },
    { partNumber: 4, partTitle: 'The New Negro in Words: Poems, Essays and the Debate over Art' },
    { partNumber: 5, partTitle: 'Sound, Image and Reach: Music, Visual Art and the Wider Diaspora' },
    { partNumber: 6, partTitle: 'Source Workshop: Migrant Letters, a Manifesto and an Image' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
