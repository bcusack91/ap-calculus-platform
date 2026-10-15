import type { SAQItem, DBQItem, RubricPoint } from '@/components/FullLengthPracticeExam'

/**
 * AP African American Studies — free-response section, matching the real exam
 * (AP Central): 3 short-answer questions in 40 minutes (Q1 text-based source,
 * 4 points; Q2 non-text source, 3 points; Q3 no source, 3 points) and 1
 * document-based question with 5 sources in 45 minutes (7 points).
 *
 * The Exam Day Validation question about the student's Individual Student
 * Project is not represented. Every rubric point is worth 1 point; frqPossible
 * (src/lib/ap-practice-grading.ts) counts them.
 */

const point = (id: string, label: string, description: string): RubricPoint[] => [{ id, label, description }]

export const SAQS: SAQItem[] = [
  /* ---- SAQ 1: Text-based source (4 points) ---- */
  {
    type: 'saq',
    topic: 'unit-3-reconstruction',
    prompt: `**Question 1 — Text-Based Source (4 points)**

*Source: Frederick Douglass, "What the Black Man Wants," speech to the annual meeting of the Massachusetts Anti-Slavery Society, Boston, January 26, 1865.*

"Everybody has asked the question, and they learned to ask it early of the abolitionists, 'What shall we do with the Negro?' I have had but one answer from the beginning. Do nothing with us! Your doing with us has already played the mischief with us. Do nothing with us! If the apples will not remain on the tree of their own strength, if they are wormeaten at the core, if they are early ripe and disposed to fall, let them fall! . . . All I ask is, give him a chance to stand on his own legs! Let him alone! . . . If you will only untie his hands, and give him a chance, I think he will live."

Respond to all parts of the question. Use complete sentences.`,
    parts: [
      {
        letter: 'a',
        question: 'Describe ONE claim Douglass makes in the excerpt about what formerly enslaved Black Americans need from white Americans and the government.',
        rubric: point('a1', '1 pt — Describes a claim in the source', 'Acceptable: Douglass rejects paternalistic schemes to "do something with" Black Americans and asks instead that obstacles be removed ("untie his hands") so they can stand on their own; he claims Black Americans need equal rights and a fair chance, not charity or supervision.'),
      },
      {
        letter: 'b',
        question: 'Describe the historical context in which Douglass gave this speech.',
        rubric: point('b1', '1 pt — Describes a relevant historical context', 'Acceptable: the final months of the Civil War; the Emancipation Proclamation (1863) and the fight to pass the Thirteenth Amendment (passed by Congress in January 1865); the service of about 180,000 Black soldiers in the Union Army; national debate over Black suffrage and what freedom would mean after the war; proposals for colonization or federal guardianship of freedpeople.'),
      },
      {
        letter: 'c',
        question: 'Explain how ONE specific development during Reconstruction (1865–1877) supported OR contradicted Douglass\'s vision in the excerpt.',
        rubric: point('c1', '1 pt — Explains a specific Reconstruction-era development', 'Supporting: the Fourteenth (1868) and Fifteenth (1870) Amendments; the Civil Rights Act of 1866; the election of Black officeholders such as Senators Hiram Revels and Blanche K. Bruce; the founding of Black schools, colleges, and churches. Contradicting: the Black Codes (1865–66); Ku Klux Klan violence; the failure to redistribute land ("40 acres and a mule"); sharecropping; the Compromise of 1877. Must explain the link to Douglass\'s call for equal rights and an equal chance.'),
      },
      {
        letter: 'd',
        question: 'Using a specific example, explain how ONE African American leader or organization between 1895 and 1925 extended OR challenged Douglass\'s argument.',
        rubric: point('d1', '1 pt — Explains a later extension or challenge', 'Acceptable: W. E. B. Du Bois and the Niagara Movement (1905) or NAACP (1909) extending Douglass\'s demand for full civil and political rights; Booker T. Washington\'s Atlanta address (1895) partly challenging it by accepting segregation in exchange for economic opportunity; Ida B. Wells\'s anti-lynching campaign insisting on protection the law refused to give; Marcus Garvey\'s UNIA challenging the idea that Black Americans\' future lay within the United States. Must name the leader or organization AND explain the connection.'),
      },
    ],
    sampleResponse:
      '(a) Douglass claims that white Americans have already done enough harm by trying to manage Black lives. What formerly enslaved people need is not supervision but the removal of obstacles, a "chance to stand on [their] own legs" with the same rights as other Americans.\n\n' +
      '(b) Douglass spoke in 1865, as the Civil War was ending. The Emancipation Proclamation and the service of about 180,000 Black Union soldiers had made emancipation a war aim, and Congress was debating the Thirteenth Amendment. Northerners were now arguing over what freedom should mean, including whether Black men should vote.\n\n' +
      '(c) The Fifteenth Amendment (1870) supported Douglass\'s vision by barring states from denying the vote on account of race. Black men voted and won office across the South, including Hiram Revels, who became the first Black U.S. senator in 1870.\n\n' +
      '(d) W. E. B. Du Bois extended Douglass\'s argument. In the Niagara Movement (1905) and then the NAACP (1909), he demanded full political and civil rights immediately, rejecting Booker T. Washington\'s acceptance of segregation, much as Douglass had demanded equal rights rather than paternalism.',
  },

  /* ---- SAQ 2: Non-text source (3 points) ---- */
  {
    type: 'saq',
    topic: 'unit-3-great-migration',
    prompt: `**Question 2 — Non-Text Source (3 points)**

*Source: Jacob Lawrence, African American painter,* The Migration Series, *Panel 1, 1940–1941, casein tempera on hardboard.*

**Image description:** A dense crowd of Black travelers, many carrying bags, bundles, and suitcases, presses toward three gateways at a railroad station. Above the gateways are the names of three destinations: CHICAGO, NEW YORK, and ST. LOUIS. The figures are painted in flat, simplified shapes and bold colors, and most face away from the viewer. Lawrence's original caption reads: "During the World War there was a great migration North by Southern Negroes."

Respond to all parts of the question. Use complete sentences.`,
    parts: [
      {
        letter: 'a',
        question: 'Describe ONE way Lawrence\'s painting portrays the Great Migration.',
        rubric: point('a1', '1 pt — Describes the source\'s portrayal', 'Acceptable: the Migration appears as a mass, collective movement rather than individual journeys (the crowded station); it portrays migration as purposeful and directed toward specific Northern and Midwestern cities; the travelers\' bags and bundles suggest whole families uprooting their lives; the flat, simplified style emphasizes the shared experience of ordinary people.'),
      },
      {
        letter: 'b',
        question: 'Explain ONE cause of the Great Migration between 1910 and 1930.',
        rubric: point('b1', '1 pt — Explains a cause', 'Acceptable: wartime labor shortages in Northern industry as immigration from Europe fell during World War I; recruitment by labor agents and newspapers such as the Chicago Defender; Jim Crow segregation, disfranchisement, and lynching in the South; the boll weevil and falling cotton prices undermining sharecroppers; the hope of better schools and wages. Must explain how the factor pushed or pulled migrants.'),
      },
      {
        letter: 'c',
        question: 'Explain ONE effect of the Great Migration on African American culture OR politics between 1915 and 1940.',
        rubric: point('c1', '1 pt — Explains an effect', 'Acceptable: the Harlem Renaissance and the growth of Black urban culture (jazz and blues in Chicago and New York); the rise of Black voting power in Northern cities, such as Oscar De Priest\'s election to Congress from Chicago in 1928; growing NAACP and UNIA membership; new Black newspapers, churches, and businesses; racial violence such as the Chicago riot of 1919 and the spread of residential segregation in the North.'),
      },
    ],
    sampleResponse:
      '(a) Lawrence portrays the Great Migration as a mass, collective movement. The crowd at the station, all heading toward gates marked Chicago, New York, and St. Louis, shows ordinary Southern families leaving together for specific Northern destinations.\n\n' +
      '(b) World War I created a labor shortage in Northern factories because immigration from Europe nearly stopped while war production expanded. Labor agents and Black newspapers like the Chicago Defender advertised these jobs, pulling Black Southerners away from sharecropping and Jim Crow.\n\n' +
      '(c) The Migration concentrated Black voters in Northern cities, where they could vote freely. In 1928 Chicago voters elected Oscar De Priest, the first Black congressman elected from a Northern state, showing that migration created new political power.',
  },

  /* ---- SAQ 3: No source (3 points) ---- */
  {
    type: 'saq',
    topic: 'unit-4-movements-and-debates',
    prompt: `**Question 3 — No Source (3 points)**

The mid-20th-century freedom struggle is sometimes told as a single, unified movement led by Martin Luther King Jr. Historians, however, have emphasized its diversity of strategies, leaders, and ideas.

Respond to all parts of the question. Use complete sentences.`,
    parts: [
      {
        letter: 'a',
        question: 'Identify TWO distinct strategies or ideological approaches used by Black Americans in the freedom struggle between 1954 and 1975.',
        rubric: point('a1', '1 pt — Identifies two distinct approaches', 'Acceptable: nonviolent direct action (King, SCLC); legal and courtroom strategy (NAACP Legal Defense Fund, Thurgood Marshall); grassroots voter registration (SNCC, Freedom Summer); Black Power and armed self-defense (SNCC under Stokely Carmichael, the Black Panther Party); Black nationalism and Pan-Africanism (Malcolm X); economic boycotts (Montgomery bus boycott); separatism (Nation of Islam). Both must be substantively different.'),
      },
      {
        letter: 'b',
        question: 'Describe ONE specific event in which the strategies you identified in (a) intersected, conflicted, or coexisted.',
        rubric: point('b1', '1 pt — Describes a specific event linking the approaches', 'Acceptable: the Selma-to-Montgomery marches (1965), combining SNCC voter registration with SCLC nonviolent marches; the March Against Fear (1966), where Carmichael popularized "Black Power" alongside King; Freedom Summer (1964), uniting SNCC, CORE, and the NAACP; Black Panther community programs operating in cities where nonviolent groups also organized. Must name the event AND describe the interaction.'),
      },
      {
        letter: 'c',
        question: 'Explain ONE consequence of this diversity of strategies for the outcomes of the freedom struggle.',
        rubric: point('c1', '1 pt — Explains a consequence', 'Acceptable: combined legal and direct-action pressure produced Brown v. Board (1954), the Civil Rights Act of 1964, and the Voting Rights Act of 1965; Black Power pushed organizations to address economic inequality, policing, and community control; ideological divisions created internal tensions (for example, between SNCC and SCLC); the movement\'s reach widened to housing, employment, and education. Must explain how the diversity produced the outcome.'),
      },
    ],
    sampleResponse:
      '(a) Two distinct approaches were nonviolent direct action, used by King and the SCLC in campaigns such as Birmingham, and Black Power, which SNCC adopted under Stokely Carmichael and which emphasized Black self-determination and self-defense.\n\n' +
      '(b) During the March Against Fear in Mississippi in 1966, King and Carmichael marched together, but Carmichael\'s call for "Black Power" openly challenged King\'s emphasis on nonviolence and interracial coalition, showing both strategies side by side.\n\n' +
      '(c) The diversity of strategies broadened the movement\'s goals. After the legal victories of 1964–65, Black Power advocates focused on economic inequality, police violence, and community control in Northern cities, issues that the earlier campaigns against Southern segregation had not addressed.',
  },
]

/* ---- DBQ: 5 sources, 7 points ---- */

export const DBQ: DBQItem = {
  type: 'dbq',
  topic: 'unit-3-harlem-renaissance',
  prompt:
    '**Question 4 — Document-Based Question (7 points, 45 minutes)**\n\n' +
    'Explain the extent to which writers of the Harlem Renaissance agreed about the purpose of Black art and literature.\n\n' +
    'In your response you should do the following:\n' +
    '• Respond to the prompt with a defensible thesis or claim that establishes a line of reasoning.\n' +
    '• Describe a broader historical context relevant to the topic of the prompt.\n' +
    '• Support an argument in response to the prompt using at least three sources.\n' +
    '• Use at least one additional piece of specific evidence (beyond that found in the sources) relevant to an argument about the prompt.\n' +
    '• For at least two sources, explain how or why the source\'s perspective, purpose, context, and/or audience is relevant to an argument.\n' +
    '• Use reasoning (for example, causation, comparison, or change and continuity across time or geography) to set up an argument that addresses the prompt.',
  documents: [
    {
      number: 1,
      source: 'Source: Claude McKay, Jamaican-born poet living in the United States, "If We Must Die," published in the radical magazine The Liberator, July 1919, during the "Red Summer" of white mob attacks on Black communities.',
      content:
        '"If we must die, let it not be like hogs\n' +
        'Hunted and penned in an inglorious spot, . . .\n' +
        'Like men we\'ll face the murderous, cowardly pack,\n' +
        'Pressed to the wall, dying, but fighting back!"',
    },
    {
      number: 2,
      source: 'Source: Alain Locke, Howard University philosopher, "The New Negro," the opening essay of The New Negro: An Interpretation, an anthology of Black writing and art that Locke edited, 1925.',
      content:
        '"In the very process of being transplanted, the Negro is becoming transformed. . . . The Negro to-day wishes to be known for what he is, even in his faults and shortcomings, and scorns a craven and precarious survival at the price of seeming to be what he is not."',
    },
    {
      number: 3,
      source: 'Source: W. E. B. Du Bois, editor of the NAACP magazine The Crisis, "Criteria of Negro Art," a speech to the NAACP\'s annual conference in Chicago, published in The Crisis, October 1926.',
      content:
        '"Thus all Art is propaganda and ever must be, despite the wailing of the purists. I stand in utter shamelessness and say that whatever art I have for writing has been used always for propaganda for gaining the right of black folk to love and enjoy. I do not care a damn for any art that is not used for propaganda."',
    },
    {
      number: 4,
      source: 'Source: Langston Hughes, poet, "The Negro Artist and the Racial Mountain," published in The Nation, a national magazine with a largely white readership, June 23, 1926.',
      content:
        '"We younger Negro artists who create now intend to express our individual dark-skinned selves without fear or shame. If white people are pleased we are glad. If they are not, it doesn\'t matter. We know we are beautiful. And ugly too. . . . If colored people are pleased we are glad. If they are not, their displeasure doesn\'t matter either."',
    },
    {
      number: 5,
      source: 'Source: Zora Neale Hurston, novelist and anthropologist who grew up in the all-Black town of Eatonville, Florida, "How It Feels to Be Colored Me," published in The World Tomorrow magazine, May 1928.',
      content:
        '"But I am not tragically colored. There is no great sorrow dammed up in my soul, nor lurking behind my eyes. I do not mind at all. I do not belong to the sobbing school of Negrohood who hold that nature somehow has given them a lowdown dirty deal and whose feelings are all hurt about it."',
    },
  ],
  rubric: [
    { id: 'thesis', label: 'A: Thesis/Claim (1 pt)', description: 'Responds to the prompt with a defensible thesis/claim that establishes a line of reasoning, in one place in the introduction or conclusion. Must do more than restate the prompt, for example: "Harlem Renaissance writers agreed that Black art should reject old stereotypes, but they disagreed over whether it should serve as political propaganda or express individual artistic freedom."' },
    { id: 'context', label: 'B: Context (1 pt)', description: 'Describes a broader historical context relevant to the topic of the prompt, in more than a phrase. Acceptable: the Great Migration and the growth of Harlem as a Black cultural capital; the Red Summer of 1919 and the "nadir" of race relations; Black veterans returning from World War I; the "New Negro" movement and Garvey\'s UNIA; white patrons and publishers\' new interest in Black culture in the 1920s.' },
    { id: 'evidence-2', label: 'C: Evidence from Sources (1 pt)', description: 'Accurately describes, rather than simply quotes, the content of at least TWO sources to address the topic of the prompt.' },
    { id: 'evidence-3', label: 'C: Evidence from Sources (2nd point)', description: 'Supports an argument in response to the prompt by accurately using the content of at least THREE sources. The sources can support sub-arguments or counterarguments.' },
    { id: 'evidence-beyond', label: 'C: Evidence Beyond Sources (1 pt)', description: 'Uses at least one specific piece of evidence not found in the sources, relevant to an argument about the prompt, for example: Hughes\'s The Weary Blues (1926); Hurston\'s Their Eyes Were Watching God (1937); the magazine Fire!! (1926); Countee Cullen or Jean Toomer\'s Cane (1923); Aaron Douglas\'s illustrations; jazz and blues artists such as Duke Ellington or Bessie Smith; the role of white patrons such as Charlotte Osgood Mason.' },
    { id: 'source-use', label: 'D: Source Use (1 pt)', description: 'For at least TWO sources, explains how or why the source\'s perspective, purpose, context, and/or audience is relevant to an argument (for example, McKay writing during the Red Summer; Du Bois speaking as an NAACP leader to an NAACP audience; Hughes addressing the largely white readership of The Nation).' },
    { id: 'reasoning', label: 'E: Reasoning (1 pt)', description: 'Uses reasoning (causation, comparison, or change and continuity across time or geography) to set up an argument, for example by comparing Du Bois\'s "propaganda" view with Hughes\'s and Hurston\'s defense of individual expression, or by explaining how the Great Migration and the Red Summer caused a new, assertive tone in Black art.' },
  ],
  sampleResponse:
    '**Thesis:** Harlem Renaissance writers agreed that Black art should reject the old stereotypes of submission and inferiority, but they disagreed about its purpose. Du Bois and McKay treated art as a weapon in the struggle for equal rights, while Hughes and Hurston argued that Black artists should be free to portray Black life on their own terms, whether or not it served a political goal.\n\n' +
    '**Context:** During and after World War I, the Great Migration brought hundreds of thousands of Black Southerners to Northern cities, and Harlem became the cultural capital of Black America. Black veterans came home demanding the democracy they had fought for, but in the Red Summer of 1919 white mobs attacked Black neighborhoods in Chicago, Washington, and other cities. In this atmosphere, the term "New Negro" came to stand for a more assertive, self-respecting generation.\n\n' +
    '**Agreement:** All five writers rejected the image of the humble, submissive "Old Negro." McKay (Source 1) urged Black people to die "fighting back" rather than "like hogs." His context explains his tone: he wrote during the Red Summer, so the poem was a direct answer to mob violence. Locke (Source 2) said the Negro "scorns" survival bought "at the price of seeming to be what he is not," and Hurston (Source 5) refused to belong to the "sobbing school of Negrohood."\n\n' +
    '**Disagreement:** They split over what art was for. Du Bois (Source 3) declared that "all Art is propaganda" and that he did not care for art that was not. His purpose matters: speaking as an NAACP leader to an NAACP conference, he wanted artists to serve the organization\'s fight for civil rights, which is why he worried about writers who portrayed Black life unflatteringly for white readers. Hughes (Source 4) answered that young artists would express their "individual dark-skinned selves" whether white or Black readers were "pleased" or not. Writing in The Nation, a largely white national magazine, he was telling white readers that Black artists would not perform for their approval, and telling Black critics the same. Beyond the sources, Hughes and Hurston helped publish the magazine Fire!! in 1926, which deliberately featured working-class and controversial subjects that older leaders disliked.\n\n' +
    '**Reasoning (comparison):** The divide was partly generational. Older leaders like Du Bois, who had fought disfranchisement since the 1900s, saw culture as a tool for winning rights, while younger writers who came of age after the Great Migration saw free expression itself as a sign of the freedom they wanted. They agreed that Black art should assert Black dignity but disagreed about whether it had to serve politics to do so.',
}
