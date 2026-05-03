import type { SAQItem, LEQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP US Government & Politics — Free Response.
 * Mirrors official CB exam structure:
 *   FRQ 1 — Concept Application (3 parts: A, B, C)
 *   FRQ 2 — Quantitative Analysis (4 parts: A, B, C, D)
 *   FRQ 3 — SCOTUS Comparison (3 parts: A, B, C)
 *   FRQ 4 — Argument Essay (LEQ-style, student picks among prompt options)
 */

export const SAQS: SAQItem[] = [
  /* ------------- FRQ 1 — CONCEPT APPLICATION ------------- */
  {
    type: 'saq',
    topic: 'unit-2-branches',
    prompt:
      'FRQ 1 — Concept Application (3 parts).\n\n' +
      'Scenario: In 2025, a divided U.S. Senate spends three months unable to confirm the president\'s nominee for Secretary of Defense. The president\'s party holds 51 Senate seats, but several senators from the president\'s own party publicly oppose the nominee. Meanwhile, the minority party uses procedural delays to slow committee hearings, and floor debate is repeatedly extended. After multiple cloture votes fail, the nomination is ultimately withdrawn.\n\n' +
      'After reading the scenario, respond to parts A, B, and C below.',
    parts: [
      {
        letter: 'A',
        question:
          'Describe the constitutional power exercised by the Senate when it considers presidential nominees for executive positions such as Secretary of Defense.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Identifies advice and consent / confirmation power',
            description:
              'Must describe the Senate\'s Article II "advice and consent" power, which requires a simple majority of the Senate to confirm presidential nominations to executive offices.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          'In the context of the scenario, explain how Senate procedural rules (such as the filibuster or cloture) can affect the confirmation of executive-branch nominees.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Explains procedural rule + effect on confirmation',
            description:
              'Must explain how filibuster/cloture rules allow a Senate minority to slow or block consideration of a nomination, requiring 60 votes for cloture on most matters (though for executive-branch nominations the Senate has lowered the threshold to a simple majority via the "nuclear option" — either accurate explanation earns the point).',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'In the context of the scenario, explain how the failed confirmation could affect the relationship between Congress and the president — including the president\'s ability to govern.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Explains effect on inter-branch relationship / governance',
            description:
              'Acceptable: weakens the president\'s political capital and signals limits on unilateral authority; forces the president to rely on acting officials (limited by the Federal Vacancies Reform Act); strains relationships even within the president\'s own party; may push the president toward executive orders or recess-appointment workarounds.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) Under Article II, Section 2, the Senate exercises "advice and consent" by confirming presidential nominees to executive offices like Secretary of Defense. A simple majority of senators is required for confirmation.\n\n' +
      '(B) Senate procedural rules — particularly the filibuster — allow individual senators or the minority party to extend debate on nominations. To end a filibuster, 60 senators must vote for cloture (though the Senate has reduced the threshold for executive-branch nominees to a simple majority). When senators withhold cloture votes, nominations stall in committee or on the floor, as in the scenario.\n\n' +
      '(C) The failed confirmation weakens the president\'s political position. Without a confirmed Secretary of Defense, the department is led by an acting official whose authority under the Federal Vacancies Reform Act is limited. The president must spend additional political capital to negotiate with both opposition senators and dissenters in the president\'s own party. The episode may push the president to rely more heavily on executive orders and signing statements rather than legislative cooperation, intensifying inter-branch tension.',
  },

  /* ------------- FRQ 2 — QUANTITATIVE ANALYSIS ------------- */
  {
    type: 'saq',
    topic: 'unit-5-political-participation',
    prompt:
      'FRQ 2 — Quantitative Analysis (4 parts).\n\n' +
      'Stimulus (described): A two-line graph titled "U.S. Voter Turnout in Federal Elections, 1980–2020." The x-axis shows election years (1980, 1984, ..., 2020). The y-axis shows percentage of eligible voters who voted (from 30% to 70%).\n\n' +
      '  • The PRESIDENTIAL-year line: hovers between 51%–58% from 1980 to 2000, climbs to 60–62% in 2004, 2008, 2012, and 2016, then peaks at 66.8% in 2020.\n' +
      '  • The MIDTERM-year line: hovers between 36%–41% from 1982 to 2014, then jumps to 50.0% in 2018 — the highest midterm turnout since the 1910s.\n\n' +
      'Source: U.S. Elections Project, McDonald (2024).',
    parts: [
      {
        letter: 'A',
        question:
          'Identify the year, by category (presidential or midterm), with the highest voter turnout shown in the stimulus.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Correct identification',
            description:
              'Must say 2020 (presidential, 66.8%). Note the highest midterm shown is 2018 (50%).',
          },
        ],
      },
      {
        letter: 'B',
        question:
          'Describe a difference between presidential-year and midterm-year voter turnout shown in the stimulus.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Describes a turnout gap',
            description:
              'Must describe that presidential-year turnout is consistently higher than midterm-year turnout (typically by 15–20 percentage points across the entire period).',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'Draw a conclusion about what the data in the stimulus suggest about U.S. political participation since 2016.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Reasonable conclusion grounded in the data',
            description:
              'Acceptable: turnout has increased substantially in both presidential and midterm elections since 2016 (2018 midterm at 50% and 2020 presidential at 66.8% are modern highs); polarization, mobilization, and expanded mail/early voting are plausible drivers — but the conclusion must be linked to the data.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          'Explain how a structural factor (such as voter ID laws, mail-in voting, or registration requirements) could help explain the trends in the stimulus.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Structural factor + plausible link',
            description:
              'Must NAME a structural factor and show how it plausibly raises or lowers turnout. Acceptable: expansion of no-excuse mail-in voting and early voting in 2020 (especially during COVID-19) reduced the cost of voting and helped drive the 2020 peak; same-day or automatic registration in some states raises turnout; strict voter-ID laws can lower turnout among certain groups.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The highest turnout shown is in the 2020 presidential election, at 66.8%.\n\n' +
      '(B) Presidential-year turnout is consistently higher than midterm-year turnout — typically by about 15 to 20 percentage points across the 1980–2020 period shown.\n\n' +
      '(C) The data suggest U.S. political participation has surged since 2016 in both election types: the 2018 midterm reached 50% turnout (the highest since the 1910s) and the 2020 presidential election reached 66.8% (a modern record). This pattern indicates rising mobilization and engagement among American voters in the late 2010s and early 2020s.\n\n' +
      '(D) Expanded no-excuse mail-in voting and early voting — particularly during the 2020 COVID-19 pandemic, when many states made mail ballots universally available — reduced the time and travel cost of voting. Lower costs of participation are associated with higher turnout, helping to explain the 2020 peak shown in the stimulus.',
  },

  /* ------------- FRQ 3 — SCOTUS COMPARISON ------------- */
  {
    type: 'saq',
    topic: 'unit-3-civil-liberties-rights',
    prompt:
      'FRQ 3 — SCOTUS Comparison (3 parts).\n\n' +
      'Required case: Tinker v. Des Moines Independent Community School District (1969). In Tinker, the Supreme Court held 7–2 that public-school students wearing black armbands to silently protest the Vietnam War were engaged in symbolic speech protected by the First Amendment, because their conduct did not "materially and substantially interfere" with school operation.\n\n' +
      'Non-required case (described): Morse v. Frederick (2007). A high-school principal suspended a student for unfurling a banner reading "BONG HiTS 4 JESUS" during a school-supervised event. The Supreme Court held 5–4 that the suspension did NOT violate the First Amendment because public schools may restrict student speech that is reasonably viewed as promoting illegal drug use.',
    parts: [
      {
        letter: 'A',
        question:
          'Identify the constitutional clause common to both Tinker v. Des Moines and Morse v. Frederick.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Free Speech Clause / First Amendment',
            description:
              'Must identify the Free Speech Clause of the First Amendment.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          'Explain how the facts of Morse v. Frederick led the Supreme Court to a different outcome than the Court reached in Tinker v. Des Moines.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Distinguishes the two cases on facts/reasoning',
            description:
              'Must explain that the speech in Tinker (silent armbands protesting a war) was viewpoint expression that did not materially disrupt school operations, while the banner in Morse was reasonably interpreted as promoting illegal drug use, and the Court has long allowed schools to restrict such speech in the educational setting.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain how an interest group concerned with student First Amendment rights could respond to the holding in Morse v. Frederick.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Plausible interest-group response',
            description:
              'Acceptable: filing amicus briefs in subsequent student-speech cases; lobbying state legislatures to pass statutes (like California\'s Education Code §48907) that protect student speech beyond the federal floor; organizing public-awareness campaigns; supporting plaintiffs in future test cases. Must NAME a tactic and link it to challenging or limiting Morse.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) Both cases involve the Free Speech Clause of the First Amendment.\n\n' +
      '(B) In Tinker, the students wore black armbands to silently protest the Vietnam War — pure political viewpoint expression that the Court found did not "materially and substantially" disrupt the school. In Morse, by contrast, the student displayed a banner that the principal reasonably viewed as promoting illegal drug use at a school-supervised event. The Court held that schools have a special interest in deterring student drug use, so the speech could be restricted even though it would be protected outside the school context.\n\n' +
      '(C) An interest group like the American Civil Liberties Union could respond by filing amicus briefs in future student-speech cases urging courts to read Morse narrowly, lobbying state legislatures to enact stronger statutory protections for student speech (as California has done in Education Code §48907), and organizing public-awareness campaigns to support student plaintiffs in test cases.',
  },
]

/* ------------- FRQ 4 — ARGUMENT ESSAY (LEQ-style) ------------- */
export const ARGUMENT_ESSAY: LEQItem[] = [
  {
    type: 'leq',
    topic: 'unit-1-foundations',
    promptOptions: [
      {
        label: 'A',
        prompt:
          'Develop an argument that explains whether the Constitution\'s system of FEDERALISM or its system of SEPARATION OF POWERS more effectively protects individual liberty.\n\n' +
          'In your essay, you must:\n' +
          '  • Articulate a defensible claim or thesis that responds to the prompt and establishes a line of reasoning.\n' +
          '  • Support your claim with at least TWO pieces of accurate and relevant information:\n' +
          '       – At least ONE piece of evidence must come from one of the following foundational documents:\n' +
          '            (a) The Constitution\n' +
          '            (b) Federalist No. 10\n' +
          '            (c) Federalist No. 51\n' +
          '            (d) Brutus No. 1\n' +
          '       – A second piece of evidence may come from any other foundational document listed above OR from your knowledge of U.S. government and politics.\n' +
          '  • Use reasoning to explain how your evidence supports your claim.\n' +
          '  • Respond to an opposing or alternative perspective.',
      },
      {
        label: 'B',
        prompt:
          'Develop an argument that explains whether INTEREST GROUPS or POLITICAL PARTIES are more effective in representing the policy preferences of ordinary Americans.\n\n' +
          'In your essay, you must:\n' +
          '  • Articulate a defensible claim or thesis that responds to the prompt and establishes a line of reasoning.\n' +
          '  • Support your claim with at least TWO pieces of accurate and relevant information:\n' +
          '       – At least ONE piece of evidence must come from one of the following foundational documents:\n' +
          '            (a) Federalist No. 10\n' +
          '            (b) The Letter from a Birmingham Jail\n' +
          '            (c) The Constitution\n' +
          '       – A second piece of evidence may come from any other foundational document above OR from your knowledge of U.S. government and politics.\n' +
          '  • Use reasoning to explain how your evidence supports your claim.\n' +
          '  • Respond to an opposing or alternative perspective.',
      },
      {
        label: 'C',
        prompt:
          'Develop an argument that explains whether the JUDICIAL BRANCH or the LEGISLATIVE BRANCH has been more effective at protecting the civil rights of marginalized groups in the United States since 1950.\n\n' +
          'In your essay, you must:\n' +
          '  • Articulate a defensible claim or thesis that responds to the prompt and establishes a line of reasoning.\n' +
          '  • Support your claim with at least TWO pieces of accurate and relevant information:\n' +
          '       – At least ONE piece of evidence must come from one of the following foundational documents:\n' +
          '            (a) The Letter from a Birmingham Jail\n' +
          '            (b) The Constitution\n' +
          '            (c) Federalist No. 78\n' +
          '       – A second piece of evidence may come from any other foundational document above OR from your knowledge of U.S. government and politics.\n' +
          '  • Use reasoning to explain how your evidence supports your claim.\n' +
          '  • Respond to an opposing or alternative perspective.',
      },
    ],
    rubric: [
      {
        id: 'thesis',
        label: '1 pt — Defensible thesis/claim',
        description:
          'Responds to the prompt with a defensible claim or thesis that establishes a line of reasoning. Must take a clear position (NOT restate the prompt).',
      },
      {
        id: 'evidence-1',
        label: '1 pt — Evidence from a required foundational document',
        description:
          'Provides specific and relevant evidence from at least ONE of the listed required foundational documents (e.g., Federalist 10, Federalist 51, Federalist 78, Brutus 1, the Constitution, the Letter from a Birmingham Jail).',
      },
      {
        id: 'evidence-2',
        label: '1 pt — Second piece of accurate evidence',
        description:
          'Provides a SECOND piece of accurate and relevant evidence — either another foundational document or specific outside knowledge (e.g., a Supreme Court case, a federal statute, a historical example).',
      },
      {
        id: 'reasoning',
        label: '1 pt — Reasoning that ties evidence to thesis',
        description:
          'Uses reasoning to EXPLAIN how the evidence supports the thesis. Cannot simply list facts — must show the logical connection.',
      },
      {
        id: 'rebuttal',
        label: '1 pt — Responds to opposing/alternative perspective',
        description:
          'Identifies AND responds to (refutes, concedes, or rebuts) an opposing or alternative perspective. A simple acknowledgement is not enough.',
      },
    ],
    sampleResponses: [
      {
        promptLabel: 'A',
        response:
          'The Constitution\'s system of separation of powers more effectively protects individual liberty than its system of federalism, because separation of powers operates inside every level of government, while federalism only divides authority between the national government and the states.\n\n' +
          'In Federalist No. 51, Madison argues that "ambition must be made to counteract ambition" — that the surest defense against tyranny is to give each branch of government "the necessary constitutional means and personal motives to resist encroachments of the others." Separation of powers does this directly: the legislative, executive, and judicial branches each check the other through powers like the veto, override, advice and consent, and judicial review. When Congress confirms or rejects a Supreme Court nominee, or when the Court strikes down an executive order as in Youngstown Sheet & Tube Co. v. Sawyer (1952), individual liberty is protected by inter-branch competition.\n\n' +
          'A second example comes from outside the foundational documents. In United States v. Nixon (1974), the Supreme Court ordered the president to turn over the Watergate tapes — a clear demonstration that even the most powerful executive can be checked by the judiciary. No appeal to federalism would have produced that result; only a working separation of powers did.\n\n' +
          'It might be argued that federalism better protects liberty because, as Brutus No. 1 warned, a distant national government cannot be trusted to safeguard local rights. There is force to that view: state laboratories of democracy have expanded liberty in areas like marijuana legalization and same-sex marriage. But federalism has also been used to perpetuate oppression — for example, southern states relied on states\' rights to defend slavery and Jim Crow segregation. By contrast, separation of powers, by ensuring that no single branch can dominate, has consistently functioned across both eras as a structural defense against tyranny.',
      },
    ],
  },
]
