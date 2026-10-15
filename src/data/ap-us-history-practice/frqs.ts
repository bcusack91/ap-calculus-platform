import type { SAQItem, DBQItem, LEQItem } from '@/components/FullLengthPracticeExam'

/* ============================================================== */
/*  SAQs — 3 required questions, all with sources (May 2027+ exam):
    1 secondary text, 1 primary text, 1 non-text source            */
/* ============================================================== */

export const SAQS: SAQItem[] = [
  /* ---------- SAQ 1 (Secondary-source — required) ---------- */
  {
    type: 'saq',
    topic: 'period-3-1754-1800',
    prompt:
      'SAQ 1 — Required. Use the passage to answer parts (a), (b), and (c).\n\n' +
      '"The American Revolution was, on its political side, a struggle for power between two systems of government — the older system of imperial control… and the newer system of self-government that had grown up in the colonies. The Revolution did not so much create the political institutions of the United States as it ratified institutions that had already developed in the colonies during the previous century and a half."\n' +
      '— Charles M. Andrews, historian, The Colonial Background of the American Revolution, 1924 (adapted)\n\n' +
      '"The Revolution made America\'s society democratic. It made the interests and prosperity of ordinary people — their pursuits of happiness — the goal of society and government… It transformed monarchical Americans, taught to be subjects of a king, into republican citizens, conscious of their equal rights."\n' +
      '— Gordon S. Wood, historian, The Radicalism of the American Revolution, 1991 (adapted)',
    parts: [
      {
        letter: 'a',
        question:
          'Briefly describe ONE major difference between Andrews\'s and Wood\'s historical interpretations of the American Revolution.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Identify a clear interpretive difference',
            description:
              'Response must explicitly contrast a difference between the two passages. Acceptable: Andrews sees continuity / political institutional struggle, while Wood sees rupture / social-democratic transformation. Naming both authors and the contrast earns the point.',
          },
        ],
      },
      {
        letter: 'b',
        question:
          'Briefly explain how ONE specific event, development, or piece of evidence from the period 1763–1800 that is NOT directly mentioned in the passages could be used to support Andrews\'s interpretation.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Specific evidence supports Andrews (continuity / institutional)',
            description:
              'Acceptable evidence (with explanation): committees of correspondence and colonial assemblies (already self-governing); Articles of Confederation preserving state autonomy; the Constitution\'s adoption of British common law and bicameralism; continued political dominance by colonial elites (Washington, Adams, Jefferson, etc.). Must EXPLAIN how it supports the continuity thesis.',
          },
        ],
      },
      {
        letter: 'c',
        question:
          'Briefly explain how ONE specific event, development, or piece of evidence from the period 1763–1800 that is NOT directly mentioned in the passages could be used to support Wood\'s interpretation.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Specific evidence supports Wood (radical / democratic)',
            description:
              'Acceptable evidence (with explanation): expansion of the franchise in state constitutions; Pennsylvania\'s 1776 unicameral constitution; gradual emancipation laws in northern states; rise of evangelical and dissenter religious authority; abolition of primogeniture and entail; Shays\' Rebellion as evidence of plebeian politics. Must EXPLAIN how it supports the radical-transformation thesis.',
          },
        ],
      },
    ],
    sampleResponse:
      '(a) Andrews argues the Revolution mostly ratified self-governing institutions that already existed in the colonies, framing it as political continuity. Wood argues the Revolution was radically transformative because it democratized American society and converted subjects into republican citizens.\n\n' +
      '(b) The Articles of Confederation (1781) preserved the dominance of state legislatures — institutions that had matured during the colonial period — supporting Andrews\'s view that independence ratified rather than created American political institutions. Lower-house assemblies in Virginia, Massachusetts, and Pennsylvania simply continued to govern after 1776, exercising powers they had already claimed by the 1760s.\n\n' +
      '(c) Pennsylvania\'s 1776 state constitution replaced the property qualification for voting with a taxpaying qualification, enfranchising most adult free men, and created a single unicameral legislature, replacing the colonial governor and council with a plural executive. This was a dramatic break from colonial-era hierarchies and supports Wood\'s claim that the Revolution made American society democratic.',
  },

  /* ---------- SAQ 2 (Primary text source — required) ---------- */
  {
    type: 'saq',
    topic: 'period-4-1800-1848',
    prompt:
      'SAQ 2 — Required. Use the excerpt to answer parts (a), (b), and (c).\n\n' +
      '"We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness. . . . The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her. . . . He has never permitted her to exercise her inalienable right to the elective franchise."\n' +
      '— Declaration of Sentiments, drafted chiefly by Elizabeth Cady Stanton and adopted at the women\'s rights convention in Seneca Falls, New York, July 1848',
    parts: [
      {
        letter: 'a',
        question:
          'Briefly describe ONE argument the authors make in the excerpt about the status of women in the United States.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Describe an argument in the excerpt',
            description:
              'Acceptable: women are equal to men and possess the same natural rights the Declaration of Independence promised; men have deliberately kept women subordinate ("absolute tyranny"); denying women the vote violates their inalienable rights. Must describe what the excerpt argues, not just quote it.',
          },
        ],
      },
      {
        letter: 'b',
        question:
          'Briefly explain ONE specific historical development from the period 1800–1848 that contributed to the reform movement that produced the Declaration.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Explain a contributing development',
            description:
              'Acceptable: the Second Great Awakening encouraging perfectionism and reform; women\'s work in the abolitionist and temperance movements (for example, women delegates such as Lucretia Mott being excluded from the 1840 World Anti-Slavery Convention in London, where Stanton met Mott); the market revolution and the ideology of separate spheres, or "cult of domesticity"; women wage workers in the Lowell mills. Must EXPLAIN how it led to organized women\'s rights activism.',
          },
        ],
      },
      {
        letter: 'c',
        question:
          'Briefly explain ONE way the movement for women\'s rights changed OR remained the same in the period from 1848 to 1920.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Explain a change or continuity',
            description:
              'Change: the movement split in 1869 over the Fifteenth Amendment (NWSA and AWSA) and reunited as NAWSA in 1890; western territories and states such as Wyoming (1869) granted women the vote; Progressive Era activists and Alice Paul\'s National Woman\'s Party used new mass tactics; the Nineteenth Amendment (1920) achieved suffrage. Continuity: the focus on the vote as the key to equality; the exclusion or marginalization of Black women within major suffrage organizations. Must EXPLAIN the change or continuity.',
          },
        ],
      },
    ],
    sampleResponse:
      '(a) The authors argue that women have the same natural rights as men, and they deliberately echo the Declaration of Independence ("all men and women are created equal") to show that American principles had been denied to half the population, most obviously by refusing women the vote.\n\n' +
      '(b) Many of the convention\'s leaders gained their organizing experience in abolitionism. When Lucretia Mott and other American women delegates were refused seats at the World Anti-Slavery Convention in London in 1840, Mott and Elizabeth Cady Stanton resolved to hold a convention on women\'s rights, which became the Seneca Falls meeting of 1848.\n\n' +
      '(c) The movement changed after the Civil War when it split over the Fifteenth Amendment, which enfranchised Black men but not women. Stanton and Susan B. Anthony formed the National Woman Suffrage Association in 1869 to push for a federal amendment, a goal achieved when the Nineteenth Amendment was ratified in 1920.',
  },

  /* ---------- SAQ 3 (Non-text source — required) ---------- */
  {
    type: 'saq',
    topic: 'period-7-1890-1945',
    prompt:
      'SAQ 3 — Required. Use the image to answer parts (a), (b), and (c).\n\n' +
      'Image (described): Udo J. Keppler, "Next!," a political cartoon published in Puck magazine, September 7, 1904. A Standard Oil Company storage tank is drawn as an enormous octopus. Its tentacles wrap around the U.S. Capitol, a state house, and copper, steel, and shipping industries, and one free tentacle reaches toward the White House.',
    parts: [
      {
        letter: 'a',
        question:
          'Briefly describe ONE perspective about the United States in the early twentieth century expressed by the cartoon.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Identify a perspective expressed by the cartoon',
            description:
              'Acceptable: the cartoon expresses concern that monopolistic corporations (Standard Oil) had captured both political institutions and other industries; corporate power threatened American democracy and the public interest. Must reference what the cartoon actually shows.',
          },
        ],
      },
      {
        letter: 'b',
        question:
          'Briefly explain ONE specific historical development from the period 1890–1920 that contributed to the perspective shown in the cartoon.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Specific development that produced concern over corporate power',
            description:
              'Acceptable: rise of horizontal integration and monopolistic trusts (Standard Oil, U.S. Steel); investigative journalism / muckrakers (Ida Tarbell\'s History of the Standard Oil Company, 1902–04); industrial concentration and political corruption associated with corporate lobbying and machine politics. Must EXPLAIN the link.',
          },
        ],
      },
      {
        letter: 'c',
        question:
          'Briefly explain ONE specific federal government action taken during the period 1890–1920 that responded to the perspective shown in the cartoon.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Specific federal regulatory action responding to corporate power',
            description:
              'Acceptable: Sherman Antitrust Act (1890); Theodore Roosevelt\'s "trust-busting" prosecution of Northern Securities (1904); Hepburn Act (1906) regulating railroads; Pure Food and Drug Act and Meat Inspection Act (1906); Clayton Antitrust Act and Federal Trade Commission Act (1914); breakup of Standard Oil (1911). Must EXPLAIN how it responded to corporate-power concerns.',
          },
        ],
      },
    ],
    sampleResponse:
      '(a) The cartoon expresses the perspective that monopolistic corporations like Standard Oil had grown so powerful that they could control state and federal governments along with other industries — threatening the independence of democratic institutions.\n\n' +
      '(b) Ida Tarbell\'s muckraking History of the Standard Oil Company (1902–04) exposed John D. Rockefeller\'s use of secret rebates and predatory pricing to monopolize American oil refining. Tarbell\'s reporting helped convince the public that Standard Oil and similar trusts were corrupting both markets and politics — exactly the concern the cartoon dramatizes.\n\n' +
      '(c) In 1911 the federal government, under the Sherman Antitrust Act, won a Supreme Court ruling (Standard Oil Co. of New Jersey v. United States) that broke Standard Oil into 34 separate companies. This action directly responded to the perception shown in the cartoon by using federal antitrust authority to dismantle a monopoly that had captured both economic and political power.',
  },
]

/* ============================================================== */
/*  DBQ — Civil Rights Movement, 1945–1965                         */
/* ============================================================== */

export const DBQ: DBQItem = {
  type: 'dbq',
  topic: 'period-8-1945-1980',
  prompt:
    'Evaluate the extent to which the federal government responded to the demands of the African American civil rights movement in the period from 1945 to 1965.\n\n' +
    'In your response you should do the following:\n' +
    '• Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n' +
    '• Describe a broader historical context relevant to the prompt.\n' +
    '• Support an argument in response to the prompt using at least four documents.\n' +
    '• Use at least one additional piece of specific historical evidence (beyond that found in the documents) relevant to an argument about the prompt.\n' +
    '• For at least two documents, explain how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument.\n' +
    '• Demonstrate a complex understanding of the historical development that is the focus of the prompt, using evidence to corroborate, qualify, or modify an argument that addresses the question.',
  documents: [
    {
      number: 1,
      source:
        'Source: President Harry S. Truman, Executive Order 9981, July 26, 1948.',
      content:
        '"It is hereby declared to be the policy of the President that there shall be equality of treatment and opportunity for all persons in the armed services without regard to race, color, religion, or national origin. This policy shall be put into effect as rapidly as possible, having due regard to the time required to effectuate any necessary changes…"',
    },
    {
      number: 2,
      source:
        'Source: U.S. Supreme Court, Brown v. Board of Education of Topeka, opinion by Chief Justice Earl Warren, May 17, 1954.',
      content:
        '"We come then to the question presented: Does segregation of children in public schools solely on the basis of race… deprive the children of the minority group of equal educational opportunities? We believe that it does… We conclude that in the field of public education the doctrine of \'separate but equal\' has no place. Separate educational facilities are inherently unequal."',
    },
    {
      number: 3,
      source:
        'Source: "Declaration of Constitutional Principles" (the "Southern Manifesto"), read into the Congressional Record on March 12, 1956, and ultimately signed by 19 senators and 82 representatives from Southern states.',
      content:
        '"We regard the decisions of the Supreme Court in the school cases as a clear abuse of judicial power. It climaxes a trend in the Federal Judiciary undertaking to legislate, in derogation of the authority of Congress, and to encroach upon the reserved rights of the States and the people… We pledge ourselves to use all lawful means to bring about a reversal of this decision which is contrary to the Constitution and to prevent the use of force in its implementation."',
    },
    {
      number: 4,
      source:
        'Source: President Dwight D. Eisenhower, radio and television address to the American people on the situation in Little Rock, Arkansas, September 24, 1957.',
      content:
        '"This morning the mob again gathered in front of the Central High School of Little Rock, obviously for the purpose of again preventing the carrying out of the Court\'s order relating to the admission of Negro children to that school… I have today issued an Executive Order directing the use of troops under Federal authority to aid in the execution of Federal law at Little Rock, Arkansas. This became necessary when my Proclamation of yesterday was not observed, and the obstruction of justice still continues."',
    },
    {
      number: 5,
      source:
        'Source: Martin Luther King Jr., "Letter from Birmingham Jail," April 16, 1963.',
      content:
        '"For years now I have heard the word \'Wait!\' It rings in the ear of every Negro with piercing familiarity. This \'Wait\' has almost always meant \'Never.\' We must come to see, with one of our distinguished jurists, that \'justice too long delayed is justice denied\'… I had hoped that the white moderate would understand that law and order exist for the purpose of establishing justice and that when they fail in this purpose they become the dangerously structured dams that block the flow of social progress."',
    },
    {
      number: 6,
      source:
        'Source: Civil Rights Act of 1964, signed into law by President Lyndon B. Johnson, July 2, 1964.',
      content:
        '"All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, and privileges, advantages, and accommodations of any place of public accommodation, as defined in this section, without discrimination or segregation on the ground of race, color, religion, or national origin… It shall be an unlawful employment practice for an employer— (1) to fail or refuse to hire or to discharge any individual, or otherwise to discriminate against any individual… because of such individual\'s race, color, religion, sex, or national origin."',
    },
    {
      number: 7,
      source:
        'Source: Fannie Lou Hamer, testimony before the Credentials Committee of the Democratic National Convention on behalf of the Mississippi Freedom Democratic Party, August 22, 1964.',
      content:
        '"All of this is on account of we want to register, to become first-class citizens. And if the Freedom Democratic Party is not seated now, I question America. Is this America, the land of the free and the home of the brave, where we have to sleep with our telephones off the hooks because our lives be threatened daily, because we want to live as decent human beings, in America?"',
    },
  ],
  rubric: [
    {
      id: 'thesis',
      label: 'A: Thesis / Claim (1 pt)',
      description:
        'Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning. Must do more than restate the prompt — should evaluate "to what extent" by acknowledging both action and limits/resistance (e.g., "The federal government responded substantially through the courts and 1964–65 legislation, but only after sustained activist pressure and only partially with regard to economic and voting rights.").',
    },
    {
      id: 'context',
      label: 'B: Contextualization (1 pt)',
      description:
        'Describes a broader historical context relevant to the prompt. Acceptable: Jim Crow segregation and disenfranchisement after Reconstruction; Great Migration; African American military service in WWII and the "Double V" campaign; Cold War critique of U.S. racial discrimination.',
    },
    {
      id: 'use-3',
      label: 'C: Evidence from the Documents — 3 documents (1 pt)',
      description:
        'Accurately uses the content of at least three documents to address the topic of the prompt.',
    },
    {
      id: 'use-4',
      label: 'C: Evidence from the Documents — support an argument with 4 documents (2nd pt)',
      description:
        'Supports an argument in response to the prompt by accurately using the content of at least four documents (builds on the 3-document point above for a total of 2 evidence points).',
    },
    {
      id: 'outside-evidence',
      label: 'D: Outside Evidence (1 pt)',
      description:
        'Uses at least one specific piece of historical evidence beyond the documents that is relevant to an argument about the prompt. Acceptable: Montgomery Bus Boycott (1955–56); SNCC and the sit-in movement (1960); Freedom Rides (1961); March on Washington (1963); Voting Rights Act of 1965; Selma march (1965); the Civil Rights Act of 1957; the Twenty-fourth Amendment (1964).',
    },
    {
      id: 'sourcing',
      label: 'E: Sourcing — POV / Purpose / Audience / Situation for 2 docs (1 pt)',
      description:
        'For at least two documents, explains how or why the document\'s point of view, purpose, historical situation, and/or audience is relevant to an argument. (Just naming the author is not enough; you must explain the relevance.)',
    },
    {
      id: 'complexity',
      label: 'F: Complexity (1 pt)',
      description:
        'Demonstrates a complex understanding by, for example: corroborating an argument across multiple themes (legal vs. legislative vs. executive responses); qualifying it (federal action lagged behind activist demand and stopped short of economic equality); or considering multiple perspectives (federal officials, Southern segregationists, activists, the Cold War audience).',
    },
  ],
  sampleResponse:
    'Sample thesis (1 pt): "Although the federal government took significant steps to dismantle de jure segregation between 1945 and 1965 — including military desegregation, the Brown decision, and the Civil Rights Act — its responses consistently lagged behind African American activism, were resisted by white Southern officials, and stopped short of addressing the economic and political grievances voiced by activists like Hamer."\n\n' +
    'Contextualization (1 pt): The post-Reconstruction Jim Crow regime had legalized segregation and disenfranchisement across the South for half a century; the Great Migration and African American military service in WWII (the "Double V" campaign) and the Cold War context — in which Soviet propaganda exploited American racism — combined to make federal inaction increasingly costly.\n\n' +
    'Document use with sourcing (examples): Doc 1 (Truman EO 9981) — purpose: a presidential response to wartime activism and Cold War image concerns, demonstrating that executive action was possible without congressional approval. Doc 3 (Southern Manifesto) — point of view: 19 Southern senators committing to "all lawful means" to resist Brown; shows the federal response provoked sustained legislative resistance. Doc 7 (Hamer) — audience: addressed to the national Democratic Party as the country watched on television, illustrating that even after major federal action, voting rights for southern Black citizens remained unfulfilled.\n\n' +
    'Outside evidence (1 pt): The 1965 Selma campaign and the resulting Voting Rights Act extended the federal response into voting protection — directly addressing the grievance Hamer raised in 1964.\n\n' +
    'Complexity (1 pt): Federal action proceeded across all three branches but on different timelines (judicial action by 1954, executive enforcement at Little Rock 1957, sustained legislative action only in 1964–65) and was repeatedly catalyzed — not initiated — by African American activism (Montgomery, sit-ins, Freedom Rides, Birmingham, Selma).',
}

/* ============================================================== */
/*  LEQ — one required broad prompt (May 2027+ exam format)        */
/* ============================================================== */

export const LEQ: LEQItem = {
  type: 'leq',
  topic: 'leq-choice',
  promptOptions: [
    {
      label: 'Long Essay Question (1800–1945)',
      prompt:
        'In the period from 1800 to 1945, the United States changed from a largely agricultural nation into the world\'s leading industrial economy, reshaping how Americans worked, where they lived, and how they organized politically. Evaluate the extent to which industrialization transformed American economic and social life in the period from 1800 to 1945. (You may focus on one or more of the developments referenced in the prompt; you are not expected to address the entire period.)',
    },
  ],
  rubric: [
    {
      id: 'thesis',
      label: 'A: Thesis / Claim (1 pt)',
      description:
        'Responds to the prompt with a historically defensible thesis or claim that establishes a line of reasoning. Must address "to what extent" — typically by acknowledging both change AND continuity (or both expansion AND limits).',
    },
    {
      id: 'context',
      label: 'B: Contextualization (1 pt)',
      description:
        'Describes a broader historical context relevant to the prompt (developments before, during, or after, but outside the prompt period). Must be more than a passing reference.',
    },
    {
      id: 'evidence-1',
      label: 'C: Evidence — Specific examples (1 pt)',
      description:
        'Provides specific historical examples of evidence relevant to the topic of the prompt (at least two pieces of specific evidence).',
    },
    {
      id: 'evidence-2',
      label: 'C: Evidence — Supports argument (additional 1 pt)',
      description:
        'Supports an argument in response to the prompt using specific and relevant examples of evidence (must build on the previous evidence point — i.e., evidence is woven into the argument, not just listed).',
    },
    {
      id: 'reasoning',
      label: 'D: Historical Reasoning (1 pt)',
      description:
        'Uses historical reasoning (e.g., comparison, causation, continuity and change) to frame or structure an argument that addresses the prompt.',
    },
    {
      id: 'complexity',
      label: 'E: Complexity (1 pt)',
      description:
        'Demonstrates a complex understanding — for example, by analyzing multiple variables, showing both continuity and change, considering multiple perspectives, comparing across regions or groups, or qualifying the argument.',
    },
  ],
  sampleResponses: [
    {
      promptLabel: 'Long Essay Question (1800–1945)',
      response:
        'Sample thesis (focused on the nineteenth century, which the broad prompt allows): "Between 1800 and 1898 industrialization and the market revolution fundamentally transformed the United States from a predominantly agrarian society into the world\'s largest industrial economy, restructuring labor, geography, and class relations — though plantation agriculture and rural life persisted, and benefits were unequally distributed by race and region."\n\n' +
        'Contextualization: The United States industrialized in the wake of Britain\'s Industrial Revolution, which began in British textile manufacturing in the late 1700s. Britain tried to keep its machine designs secret, but Samuel Slater carried them to America and opened a water-powered spinning mill in Pawtucket, Rhode Island, in 1790, and Alexander Hamilton\'s Report on Manufactures (1791) soon urged federal support for American industry.\n\n' +
        'Argument with evidence + reasoning (continuity and change + causation):\n' +
        '• CHANGE — labor: New England textile mills employed wage-earning women in the 1820s–30s, displacing household production; by the late 1800s, mass immigration from Ireland, Germany, southern, and eastern Europe filled industrial cities; the Knights of Labor and AFL organized industrial workers in response.\n' +
        '• CHANGE — capital and corporate form: railroads (nearly 200,000 miles of track by 1900), Carnegie Steel, and Standard Oil illustrate the rise of vertically and horizontally integrated corporations on a national scale, supported by federal land grants and protective tariffs.\n' +
        '• CHANGE — geography: Chicago, Pittsburgh, and New York grew into vast industrial cities; the South became economically dependent on northern capital while sharecropping replaced slavery as the dominant agricultural labor system.\n' +
        '• CONTINUITY: cotton remained the dominant southern crop; rural and small-town life predominated demographically until the 1920 census; Native dispossession via the Dawes Act (1887) opened additional land for white settlers but left tribal sovereignty curtailed.\n\n' +
        'Complexity: Industrialization\'s benefits were unequally distributed — the Gilded Age combined enormous corporate wealth with extreme working-class poverty (Homestead Strike, 1892; Pullman Strike, 1894), prompting the Populist movement and setting the stage for Progressive reform after 1900.',
    },
  ],
}
