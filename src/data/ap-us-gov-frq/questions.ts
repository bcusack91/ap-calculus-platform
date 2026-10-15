// AP US Government and Politics — Free-Response Practice Bank
// Built to the real exam: four typed FRQs per exam, 100 minutes.
//   Concept Application 3 · Quantitative Analysis 4 · SCOTUS Comparison 4 · Argument Essay 6
// Two questions per type (two complete exams). Units follow the CED:
// 1 Foundations of American Democracy, 2 Interactions Among Branches of Government,
// 3 Civil Liberties and Civil Rights, 4 American Political Ideologies and Beliefs,
// 5 Political Participation.
// The 2026-27 CED adds four required foundational documents (Federalist No. 39, the
// Gettysburg Address, the Emancipation Proclamation, and The Wealth of Nations). They
// appear in gov-frq-ca-2 (Smith), gov-frq-ae-1 (Emancipation Proclamation) and
// gov-frq-ae-2 (Federalist No. 39, Gettysburg Address).
// Every rubric line is worth one point. The Argument Essay's 0-3 evidence row is split into
// three cumulative one-point lines, which gives the same totals as the official rubric.

import { shuffleArray } from '@/lib/shuffle-options'

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type USGovFRQType =
  | 'concept-application'
  | 'quantitative-analysis'
  | 'scotus-comparison'
  | 'argument-essay'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const US_GOV_FRQ_TYPES: { type: USGovFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'concept-application', label: 'Concept Application', short: 'CA', points: 3, minutes: 20 },
  { type: 'quantitative-analysis', label: 'Quantitative Analysis', short: 'QA', points: 4, minutes: 20 },
  { type: 'scotus-comparison', label: 'SCOTUS Comparison', short: 'SCOTUS', points: 4, minutes: 20 },
  { type: 'argument-essay', label: 'Argument Essay', short: 'Essay', points: 6, minutes: 40 },
]

export interface USGovFRQ {
  id: string
  type: USGovFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const SCOTUS_INTRO =
  'This question requires you to compare a Supreme Court case you studied in class with one you have not studied in class. A summary of the Supreme Court case you did not study in class is presented below and provides all of the information you need to know about this case to answer the prompt.'

const ESSAY_DIRECTIONS =
  'In your response, you should do the following:\n\n' +
  '- Respond to the prompt with a defensible claim or thesis that establishes a line of reasoning.\n' +
  '- Support your claim with at least TWO pieces of specific and relevant evidence.\n' +
  '  - One piece of evidence must come from one of the foundational documents listed above.\n' +
  '  - A second piece of evidence can come from any other foundational document not used as your first piece of evidence, or it may be from your knowledge of course concepts.\n' +
  '- Use reasoning to explain why your evidence supports your claim or thesis.\n' +
  '- Respond to an opposing or alternate perspective using refutation, concession, or rebuttal.'

const usGovFRQs: USGovFRQ[] = [
  // =========================================================================
  // Concept Application 1 — Conditional highway grants (Unit 1)
  // =========================================================================
  {
    id: 'gov-frq-ca-1',
    type: 'concept-application',
    unit: 1,
    title: 'Concept Application: Strings Attached to Highway Money',
    prompt:
      'Respond to parts A, B, and C.\n\n' +
      '*The following scenario is hypothetical.*\n\n' +
      '> Congress has passed a transportation law that sends billions of dollars to the states for highway and bridge repair. The money can be spent only on roads and bridges, and a state receives its full share only if it adopts a law banning the use of handheld phones while driving. A state that does not adopt the ban within two years loses 10 percent of its highway money. Several governors objected. "Traffic laws have always been a state decision," one governor said. "Washington is using our own taxpayers\' money to make that decision for us." Supporters in Congress answered that distracted driving on interstate highways is a national problem and that states remain free to turn the money down.',
    totalPoints: 3,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt: 'Describe the type of federal grant used in the scenario.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Describes a categorical grant: federal money given for a specific purpose (highway and bridge repair) with conditions attached that the state must meet to receive it. Describing "conditions of aid" or "strings attached" also earns the point.',
            keywords: ['categorical grant', 'categorical', 'conditions of aid', 'strings attached', 'specific purpose', 'conditional grant', 'conditions attached'],
          },
        ],
        sampleAnswer:
          'The law uses a categorical grant. Congress gives the states money that can be spent only for a specific purpose (highway and bridge repair) and attaches conditions: a state must adopt a handheld-phone ban to receive its full share.',
      },
      {
        label: 'B',
        prompt:
          'In the context of the scenario, explain how the use of this type of grant affects the balance of power between the national government and the state governments.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains that conditional grants shift power toward the national government: Congress uses its spending power to influence a policy area (traffic law) normally reserved to the states, because states that depend on federal money feel pressure to comply.',
            keywords: ['increases the power of the national', 'more power to the national', 'shifts power', 'national government more power', 'influence state', 'dependent on federal', 'depend on federal', 'spending power', 'power of the purse', 'leverage', 'pressure'],
          },
        ],
        sampleAnswer:
          'The grant shifts power toward the national government. Congress cannot simply order every state to pass a phone ban, because traffic laws are a power reserved to the states. By attaching the ban to highway money, Congress uses its spending power to get the same result: states depend on federal funds for road repair, so most will adopt the ban rather than lose 10 percent of their money. The national government gains influence over a policy area that the states traditionally controlled.',
      },
      {
        label: 'C',
        prompt:
          'Explain how the governors who object in the scenario could use the political process or the courts to resist the condition.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains a realistic avenue and how it would work: suing in federal court on the grounds that the condition is coercive or violates the Tenth Amendment\'s reserved powers, or lobbying their state\'s members of Congress to amend the law or convert the money to a block grant.',
            keywords: ['tenth amendment', '10th amendment', 'reserved powers', 'lawsuit', 'sue', 'in court', 'coercive', 'coercion', 'lobby', 'block grant'],
          },
        ],
        sampleAnswer:
          'The governors could sue in federal court, arguing that the condition is so large that it coerces the states and violates the Tenth Amendment, which reserves powers such as traffic regulation to the states. They could also lobby their states\' senators and representatives to amend the law so that the money comes as a block grant, which states may spend with more discretion and without the phone-ban condition.',
      },
    ],
  },

  // =========================================================================
  // Concept Application 2 — Steel tariffs and The Wealth of Nations (Unit 4)
  // =========================================================================
  {
    id: 'gov-frq-ca-2',
    type: 'concept-application',
    unit: 4,
    title: 'Concept Application: A Steel Tariff and the Free-Market Critique',
    prompt:
      'Respond to parts A, B, and C.\n\n' +
      '*The following scenario is hypothetical.*\n\n' +
      '> A bill in Congress would place a 50 percent tariff on imported steel and give domestic steel producers a tax credit for each new mill they build. Its sponsors, who represent districts with steel plants, say the bill will protect American jobs. A coalition of automakers, appliance makers, and builders that buy large amounts of steel opposes the bill and is meeting with members of the committee that must approve it. A free-market think tank also opposes the bill, quoting Adam Smith\'s *The Wealth of Nations* (1776): "It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest." The think tank argues that consumers and businesses, competing in open markets, should decide where steel is bought, not the government.',
    totalPoints: 3,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'Describe the economic principle from *The Wealth of Nations* that the think tank in the scenario is relying on.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Describes free enterprise (the free-market or laissez-faire principle): individuals pursuing their own self-interest in competitive markets, guided by the "invisible hand," produce the goods society wants, so government should limit its interference in the economy.',
            keywords: ['free enterprise', 'free market', 'free-market', 'laissez-faire', 'laissez faire', 'invisible hand', 'self-interest', 'self interest', 'limited government intervention'],
          },
        ],
        sampleAnswer:
          'The think tank relies on Adam Smith\'s principle of free enterprise. Smith argued that when individuals pursue their own self-interest in competitive markets, they are led as if by an "invisible hand" to produce what society wants at the best price. Government should therefore play a limited role in the economy rather than choosing which producers win, as a tariff and subsidy would.',
      },
      {
        label: 'B',
        prompt:
          'In the context of the scenario, explain how a member of Congress\'s political ideology could shape that member\'s position on the bill.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains how a specific ideology leads to a position on the bill: a libertarian (or free-market conservative) would oppose it because tariffs and subsidies are government intervention in the market; a liberal may support it because government action to protect workers and industries is acceptable.',
            keywords: ['libertarian', 'conservative', 'liberal', 'government intervention', 'intervene in the economy', 'role of government', 'regulate the economy'],
          },
        ],
        sampleAnswer:
          'A libertarian member of Congress would likely vote against the bill. Libertarians believe government should interfere as little as possible in the economy, and a tariff and a tax credit for one industry are exactly that kind of interference; they raise prices for every business that buys steel. A liberal member might support the bill, because liberals generally accept a larger government role in the economy when it protects workers\' jobs.',
      },
      {
        label: 'C',
        prompt:
          'Explain how the coalition of steel-buying industries in the scenario could try to influence the outcome of the bill.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains an interest-group tactic and how it could affect the bill: lobbying or testifying before the committee to show the cost to steel buyers; giving campaign contributions through a PAC; or mobilizing employees and customers to contact their members of Congress (grassroots lobbying).',
            keywords: ['lobby', 'testify', 'testimony', 'hearing', 'pac', 'campaign contribution', 'donat', 'grassroots', 'contact their members', 'write to'],
          },
        ],
        sampleAnswer:
          'The coalition could lobby the members of the committee that must approve the bill. Its representatives could testify at a committee hearing with data showing that a 50 percent tariff would raise the cost of cars, appliances, and houses and cost more jobs in steel-using industries than it saves in steel mills. Because a bill that the committee does not report rarely reaches the floor, persuading committee members could stop the bill or lead them to cut the tariff.',
      },
    ],
  },

  // =========================================================================
  // Quantitative Analysis 1 — House seats and the midterm loss (Units 2 and 5)
  // =========================================================================
  {
    id: 'gov-frq-qa-1',
    type: 'quantitative-analysis',
    unit: 5,
    title: 'Quantitative Analysis: House Seats Won by Each Party, 2012–2024',
    prompt:
      'The table shows the number of seats each major party won in elections to the U.S. House of Representatives in each year from 2012 to 2024, along with the party of the president at the time of the election. The House has 435 seats, and 218 seats is a majority.\n\n' +
      'Use the table to respond to parts A, B, C, and D.',
    dataTableHtml:
      '<table><tr><th>Election year</th><th>Type of election</th><th>President at time of election</th><th>Democratic seats</th><th>Republican seats</th><th>House majority</th></tr>' +
      '<tr><td>2012</td><td>Presidential</td><td>Obama (D)</td><td>201</td><td>234</td><td>Republican</td></tr>' +
      '<tr><td>2014</td><td>Midterm</td><td>Obama (D)</td><td>188</td><td>247</td><td>Republican</td></tr>' +
      '<tr><td>2016</td><td>Presidential</td><td>Obama (D)</td><td>194</td><td>241</td><td>Republican</td></tr>' +
      '<tr><td>2018</td><td>Midterm</td><td>Trump (R)</td><td>235</td><td>199*</td><td>Democratic</td></tr>' +
      '<tr><td>2020</td><td>Presidential</td><td>Trump (R)</td><td>222</td><td>212*</td><td>Democratic</td></tr>' +
      '<tr><td>2022</td><td>Midterm</td><td>Biden (D)</td><td>213</td><td>222</td><td>Republican</td></tr>' +
      '<tr><td>2024</td><td>Presidential</td><td>Biden (D)</td><td>215</td><td>220</td><td>Republican</td></tr></table>' +
      '<p>*One seat was vacant at the start of the Congress because the result in one district had not yet been certified; it was later filled by a Republican.</p>' +
      '<p>Source: Office of the Clerk, U.S. House of Representatives, "Party Divisions of the House of Representatives."</p>',
    totalPoints: 4,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'Using the data in the table, identify the midterm election in which the president\'s party lost the most House seats compared with the previous election.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Identifies 2018: the Republicans, the president\'s party, fell from 241 seats to 199 (Democrats gained 41 seats). The president\'s party lost 13 seats in 2014 and 9 in 2022.',
            keywords: ['2018'],
          },
        ],
        sampleAnswer:
          'The 2018 midterm. President Trump\'s party, the Republicans, fell from 241 seats to 199, while Democrats rose from 194 to 235.',
      },
      {
        label: 'B',
        prompt:
          'Describe a pattern in the data in how the president\'s party performs in midterm elections compared with presidential-year elections.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Describes the pattern: the president\'s party lost House seats in every midterm shown (2014, 2018, 2022), while it gained seats in every presidential-year election shown after 2012 (2016, 2020, 2024).',
            keywords: ['lost house seats', 'loses house seats', 'lose house seats', 'lost seats in every midterm', 'loses seats in midterm', 'lose seats in midterm', 'lost seats in each midterm', 'lost seats in the midterm', 'loses seats', 'lost seats', 'lose seats', 'midterm loss'],
          },
        ],
        sampleAnswer:
          'The president\'s party lost House seats in every midterm shown: Democrats lost 13 seats in 2014, Republicans lost 42 in 2018, and Democrats lost 9 in 2022. In each presidential-year election after 2012, by contrast, the president\'s party gained seats (Democrats +6 in 2016, Republicans +13 in 2020, Democrats +2 in 2024).',
      },
      {
        label: 'C',
        prompt: 'Draw a conclusion about why the pattern you described in part B occurs.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Draws a reasonable conclusion tied to the pattern: midterms act as a referendum on the president, so voters unhappy with the president vote against his party; there are no presidential coattails in a midterm; or midterm turnout is lower and the out-party\'s voters are more motivated to turn out.',
            keywords: ['referendum', 'coattail', 'lower turnout', 'turnout is lower', 'surge and decline', 'approval', 'unhappy with the president', 'dissatisf', 'more motivated', 'check on the president'],
          },
        ],
        sampleAnswer:
          'Midterm elections act as a referendum on the president. Without the president on the ballot, there are no coattails to carry the party\'s House candidates, and voters who are unhappy with the president\'s performance (and the out-party\'s voters, who tend to be more motivated) are more likely to turn out, so the president\'s party loses seats.',
      },
      {
        label: 'D',
        prompt:
          'Explain how the results of the 2018 and 2022 midterm elections shown in the table could affect the president\'s ability to achieve his policy agenda.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains that both midterms gave the opposing party a House majority, creating divided government, so the president\'s bills are harder to pass (gridlock); the House can use its oversight power to investigate the administration; and the president may turn to executive orders or vetoes instead.',
            keywords: ['divided government', 'gridlock', 'oversight', 'investigat', 'executive order', 'veto', 'harder to pass', 'difficult to pass', 'block'],
          },
        ],
        sampleAnswer:
          'In both 2018 and 2022 the House majority switched to the party opposed to the president, creating divided government. The new majority could refuse to take up the president\'s bills, which leads to gridlock, and could use committee oversight to investigate the administration. As a result, the president is more likely to act through executive orders, which a later president can easily reverse, than through new laws.',
      },
    ],
  },

  // =========================================================================
  // Quantitative Analysis 2 — Supreme Court confirmation votes (Unit 2)
  // =========================================================================
  {
    id: 'gov-frq-qa-2',
    type: 'quantitative-analysis',
    unit: 2,
    title: 'Quantitative Analysis: Senate Votes on Supreme Court Nominees, 1993–2022',
    prompt:
      'The table shows the final Senate vote on each Supreme Court nominee confirmed from 1993 to 2022.\n\n' +
      'Use the table to respond to parts A, B, C, and D.',
    dataTableHtml:
      '<table><tr><th>Nominee</th><th>Year confirmed</th><th>Nominating president</th><th>Yea</th><th>Nay</th></tr>' +
      '<tr><td>Ruth Bader Ginsburg</td><td>1993</td><td>Clinton (D)</td><td>96</td><td>3</td></tr>' +
      '<tr><td>Stephen Breyer</td><td>1994</td><td>Clinton (D)</td><td>87</td><td>9</td></tr>' +
      '<tr><td>John Roberts</td><td>2005</td><td>G. W. Bush (R)</td><td>78</td><td>22</td></tr>' +
      '<tr><td>Samuel Alito</td><td>2006</td><td>G. W. Bush (R)</td><td>58</td><td>42</td></tr>' +
      '<tr><td>Sonia Sotomayor</td><td>2009</td><td>Obama (D)</td><td>68</td><td>31</td></tr>' +
      '<tr><td>Elena Kagan</td><td>2010</td><td>Obama (D)</td><td>63</td><td>37</td></tr>' +
      '<tr><td>Neil Gorsuch</td><td>2017</td><td>Trump (R)</td><td>54</td><td>45</td></tr>' +
      '<tr><td>Brett Kavanaugh</td><td>2018</td><td>Trump (R)</td><td>50</td><td>48</td></tr>' +
      '<tr><td>Amy Coney Barrett</td><td>2020</td><td>Trump (R)</td><td>52</td><td>48</td></tr>' +
      '<tr><td>Ketanji Brown Jackson</td><td>2022</td><td>Biden (D)</td><td>53</td><td>47</td></tr></table>' +
      '<p>Source: United States Senate, "Supreme Court Nominations (1789–Present)."</p>',
    totalPoints: 4,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt: 'Using the data in the table, identify the nominee who was confirmed by the widest margin.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies Ruth Bader Ginsburg (1993), confirmed 96–3, a margin of 93 votes.',
            keywords: ['ginsburg'],
          },
        ],
        sampleAnswer: 'Ruth Bader Ginsburg, confirmed 96–3 in 1993, a margin of 93 votes.',
      },
      {
        label: 'B',
        prompt:
          'Describe a trend in the number of "nay" votes cast against Supreme Court nominees from 1993 to 2022.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Describes the increase: nay votes rose from 3 (Ginsburg, 1993) and 9 (Breyer, 1994) to between 45 and 48 for every nominee confirmed from 2017 through 2022.',
            keywords: ['increase', 'increasing', 'rose', 'risen', 'grew', 'more nay', 'more votes against', 'went up', 'higher'],
          },
        ],
        sampleAnswer:
          'The number of nay votes increased over the period. Ginsburg received only 3 nay votes in 1993 and Breyer 9 in 1994, but every nominee from 2017 through 2022 received between 45 and 48 nay votes.',
      },
      {
        label: 'C',
        prompt:
          'Draw a conclusion about what the trend you described in part B suggests about the Senate\'s confirmation process.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Concludes that confirmation has become more partisan or polarized: senators increasingly vote along party lines, so nominees are now confirmed mainly by the votes of the president\'s party.',
            keywords: ['polariz', 'partisan', 'party line', 'party-line', 'along party', 'party lines'],
          },
        ],
        sampleAnswer:
          'The Senate\'s confirmation process has become more polarized. In the 1990s most senators of both parties voted to confirm a qualified nominee, but recent nominees have been confirmed almost entirely by senators of the president\'s party, with the other party voting no. Confirmation votes now largely follow party lines.',
      },
      {
        label: 'D',
        prompt:
          'In 2017 the Senate changed its rules so that debate on a Supreme Court nomination can be ended by a simple majority vote instead of 60 votes. Explain how this rule change relates to the data in the table.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains the connection: each nominee confirmed after the change received fewer than 60 yea votes (54, 50, 52, and 53), so under the old 60-vote cloture rule the minority party could have filibustered and blocked them; the change let the majority party confirm nominees without any support from the other party.',
            keywords: ['fewer than 60', 'less than 60', 'under 60', 'below 60', 'did not have 60', 'without 60', 'nuclear option', 'cloture'],
          },
        ],
        sampleAnswer:
          'All four nominees confirmed after the 2017 change received fewer than 60 yea votes: Gorsuch 54, Kavanaugh 50, Barrett 52, and Jackson 53. Under the old rule, ending debate (cloture) required 60 votes, so the minority party could have filibustered these nominations. The rule change (the "nuclear option") let a majority confirm nominees with no support from the other party, which helps explain why the votes became so close and so partisan.',
      },
    ],
  },

  // =========================================================================
  // SCOTUS Comparison 1 — Gideon v. Wainwright and Argersinger v. Hamlin (Unit 3)
  // =========================================================================
  {
    id: 'gov-frq-scotus-1',
    type: 'scotus-comparison',
    unit: 3,
    title: 'SCOTUS Comparison: Gideon v. Wainwright and Argersinger v. Hamlin',
    prompt:
      SCOTUS_INTRO +
      '\n\n' +
      '> Jon Argersinger, who could not afford a lawyer, was charged in Florida with carrying a concealed weapon, an offense punishable by up to six months in jail and a $1,000 fine. At the time, Florida appointed lawyers for poor defendants only in cases punishable by more than six months in jail. Argersinger was tried by a judge without a lawyer, convicted, and sentenced to 90 days in jail. He argued that his conviction violated his right to a lawyer. In *Argersinger v. Hamlin* (1972), the Supreme Court unanimously ruled in his favor, holding that, unless a defendant knowingly gives up the right, no person may be sent to jail for any offense, whether it is classified as a misdemeanor or a felony, unless that person was represented by a lawyer at trial.\n\n' +
      'Based on the information above, respond to parts A, B, and C.',
    totalPoints: 4,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'Identify the constitutional provision that is common to both *Gideon v. Wainwright* (1963) and *Argersinger v. Hamlin* (1972).',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Identifies the Sixth Amendment\'s right to the assistance of counsel (applied to the states through the due process clause of the Fourteenth Amendment).',
            keywords: ['sixth amendment', '6th amendment', 'right to counsel', 'assistance of counsel', 'right to an attorney', 'right to a lawyer'],
          },
        ],
        sampleAnswer:
          'Both cases involve the Sixth Amendment\'s guarantee of the assistance of counsel, which applies to the states through the due process clause of the Fourteenth Amendment.',
      },
      {
        label: 'B',
        prompt:
          'Based on the constitutional provision identified in part A, explain why the facts of *Gideon v. Wainwright* and *Argersinger v. Hamlin* led to similar holdings.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Describes the relevant facts or holding of Gideon: Clarence Earl Gideon, who could not afford a lawyer, was charged in Florida with a felony (breaking and entering), was denied an appointed lawyer, and was convicted; the Court held unanimously that states must provide lawyers to defendants in felony cases who cannot afford one.',
            keywords: ['felony', 'breaking and entering', 'poolroom', 'pool hall', 'denied a lawyer', 'denied counsel', 'represented himself', 'states must provide', 'must provide a lawyer', 'must provide an attorney'],
          },
          {
            points: 1,
            description:
              'Explains why Argersinger\'s facts led to a similar holding: like Gideon, Argersinger could not afford a lawyer, was tried without one, and lost his liberty, so the Court extended the right to appointed counsel to any case that results in jail time, even a misdemeanor.',
            keywords: ['misdemeanor', 'jail', 'imprison', 'loss of liberty', 'lost his liberty', 'extended', 'regardless of'],
          },
        ],
        sampleAnswer:
          'In Gideon v. Wainwright, Clarence Earl Gideon was charged in Florida with breaking and entering, a felony. He could not afford a lawyer, the judge refused to appoint one, and he was convicted after representing himself. The Supreme Court unanimously held that the Sixth Amendment right to counsel applies to the states and that states must provide a lawyer to felony defendants who cannot afford one.\n\nArgersinger\'s facts were similar in the way that mattered. Like Gideon, he was poor, was tried without a lawyer, and was sent to jail. Even though his offense was a misdemeanor, he lost his liberty just as Gideon did, so the Court extended Gideon\'s reasoning: any defendant who is sentenced to jail has a right to a lawyer, whether the crime is a felony or a misdemeanor.',
      },
      {
        label: 'C',
        prompt:
          'Explain how state governments could respond to the holding in *Argersinger v. Hamlin*.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains a state response: legislatures could fund or expand public defender offices to represent poor misdemeanor defendants, or states could reduce the use of jail sentences for minor offenses (for example, punishing them with fines only) so that appointed counsel is not required.',
            keywords: ['public defender', 'fund', 'appropriat', 'budget', 'hire more', 'fines instead', 'fine instead', 'only a fine', 'no jail', 'without jail'],
          },
        ],
        sampleAnswer:
          'State legislatures could increase funding for public defender offices so that every poor defendant who faces possible jail time has a lawyer. Alternatively, a state could change its laws so that minor offenses are punished only with fines, because Argersinger requires a lawyer only when a defendant is actually sentenced to jail.',
      },
    ],
  },

  // =========================================================================
  // SCOTUS Comparison 2 — United States v. Lopez and Gonzales v. Raich (Unit 1)
  // =========================================================================
  {
    id: 'gov-frq-scotus-2',
    type: 'scotus-comparison',
    unit: 1,
    title: 'SCOTUS Comparison: United States v. Lopez and Gonzales v. Raich',
    prompt:
      SCOTUS_INTRO +
      '\n\n' +
      '> California\'s Compassionate Use Act of 1996 allows seriously ill residents to grow and use marijuana for medical purposes with a doctor\'s recommendation. Angel Raich and Diane Monson used marijuana that was grown locally (by Monson herself, and by caregivers for Raich) under the state law. In 2002, federal agents seized and destroyed Monson\'s marijuana plants under the federal Controlled Substances Act, which bans the manufacture and possession of marijuana. Raich and Monson sued, arguing that Congress had no power to regulate marijuana that was grown and used within one state and was never bought or sold. In *Gonzales v. Raich* (2005), the Supreme Court ruled 6–3 against them. The Court held that Congress could ban the local growing and use of marijuana because, taken together, such activity could substantially affect the national market for marijuana, which Congress has the power to regulate.\n\n' +
      'Based on the information above, respond to parts A, B, and C.',
    totalPoints: 4,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'A',
        prompt:
          'Identify the constitutional clause that is common to both *United States v. Lopez* (1995) and *Gonzales v. Raich* (2005).',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies the commerce clause (Article I, Section 8: the power to regulate commerce among the states).',
            keywords: ['commerce clause', 'interstate commerce', 'regulate commerce', 'article i, section 8', 'article 1, section 8', 'article i section 8', 'article 1 section 8'],
          },
        ],
        sampleAnswer:
          'Both cases concern the commerce clause in Article I, Section 8, which gives Congress the power to regulate commerce among the states.',
      },
      {
        label: 'B',
        prompt:
          'Based on the constitutional clause identified in part A, explain why the facts of *United States v. Lopez* led to a different holding than the holding in *Gonzales v. Raich*.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Describes the relevant facts or holding of Lopez: a high school student in Texas brought a handgun to school and was charged under the federal Gun-Free School Zones Act of 1990; the Court ruled 5–4 that Congress exceeded its commerce power because carrying a gun near a school is not an economic activity that substantially affects interstate commerce.',
            keywords: ['gun-free school zones', 'gun free school zones', 'handgun', 'gun to school', 'gun near a school', 'not economic', 'noneconomic', 'non-economic', 'exceeded'],
          },
          {
            points: 1,
            description:
              'Explains why the facts differ: growing marijuana produces a commodity that is traded in an established national market, so homegrown marijuana, taken together, affects supply and demand in that market and is part of Congress\'s broader regulation of drugs; carrying a gun near a school has no connection to any market.',
            keywords: ['economic activity', 'market', 'aggregate', 'taken together', 'commodity', 'supply', 'demand'],
          },
        ],
        sampleAnswer:
          'In United States v. Lopez, Alfonso Lopez, a high school senior in San Antonio, Texas, carried a concealed handgun to school and was charged under the federal Gun-Free School Zones Act of 1990. The Court ruled 5–4 that Congress had exceeded its commerce clause power, because carrying a gun near a school is not an economic activity and has no substantial effect on interstate commerce.\n\nThe facts in Raich were different because growing marijuana is economic activity: it produces a commodity for which there is a national market, even if this particular marijuana was never sold. Taken together, homegrown marijuana affects the supply of and demand for marijuana across the country, so Congress could reach it as part of its regulation of that market. Lopez\'s gun had no connection to any market, so the commerce clause did not reach it.',
      },
      {
        label: 'C',
        prompt: 'Explain how states that disagree with the holding in *Gonzales v. Raich* could respond to it.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains a state response: states can keep or expand their own legalization laws and decline to use state police to enforce the federal ban (the national government cannot require state officials to enforce federal law), or state officials can lobby Congress to change how the Controlled Substances Act treats marijuana.',
            keywords: ['legaliz', 'state law', 'lobby', 'reschedul', 'not enforce', 'refuse to enforce', 'decline to enforce', 'commandeer', 'change the law'],
          },
        ],
        sampleAnswer:
          'States can keep and even expand their own marijuana laws, because Raich allows federal enforcement but does not require states to ban marijuana, and the national government cannot force state police to enforce a federal law. Many states have since legalized marijuana under state law. State officials and their congressional delegations can also lobby Congress to change how the Controlled Substances Act treats marijuana.',
      },
    ],
  },

  // =========================================================================
  // Argument Essay 1 — Presidential power in a crisis (Unit 2)
  // =========================================================================
  {
    id: 'gov-frq-ae-1',
    type: 'argument-essay',
    unit: 2,
    title: 'Argument Essay: Presidential Power in a Crisis',
    prompt:
      'Develop an argument that explains whether the expansion of presidential power during national crises is consistent with the Founders\' design of the executive branch.\n\n' +
      'Use at least one piece of evidence from one of the following foundational documents:\n\n' +
      '- Federalist No. 51\n' +
      '- Federalist No. 70\n' +
      '- The Emancipation Proclamation\n\n' +
      ESSAY_DIRECTIONS,
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your argument essay. Your response is scored on the six-point rubric below.',
        maxPoints: 6,
        rubric: [
          {
            points: 1,
            description:
              'Claim or thesis: responds to the prompt with a defensible claim that establishes a line of reasoning (for example, that crisis powers are consistent with the Founders\' "energetic" executive, or that they upset the checks and balances the Founders designed). Restating the prompt does not earn the point.',
            keywords: ['is consistent with', 'is not consistent with', 'is inconsistent with', 'consistent with the founders', 'inconsistent with the founders', 'goes beyond', 'exceeds'],
          },
          {
            points: 1,
            description:
              'Evidence (1 of 3): provides one piece of specific evidence relevant to presidential power, such as a foundational document, a constitutional power (commander in chief, executive orders), a law such as the War Powers Resolution, or a historical example.',
            keywords: ['federalist no. 70', 'federalist 70', 'federalist no. 51', 'federalist 51', 'emancipation proclamation', 'commander in chief', 'commander-in-chief', 'war powers resolution', 'executive order'],
          },
          {
            points: 1,
            description:
              'Evidence (2 of 3): uses one piece of specific evidence from the listed documents (Federalist No. 51, Federalist No. 70, or the Emancipation Proclamation) to SUPPORT the claim, not just mention it.',
            keywords: ['energy in the executive', 'unity', 'decision, activity, secrecy', 'ambition must be made to counteract ambition', 'ambition counteract ambition', 'war measure', 'commander-in-chief', 'henceforward shall be free', 'in rebellion', 'forever free'],
          },
          {
            points: 1,
            description:
              'Evidence (3 of 3): uses a SECOND piece of specific evidence to support the claim: another listed document, a different foundational document (such as Brutus No. 1), the War Powers Resolution of 1973, the Thirteenth Amendment, or another specific example.',
            keywords: ['war powers resolution', '60 days', 'sixty days', '48 hours', 'thirteenth amendment', '13th amendment', 'brutus', 'checks and balances', 'separation of powers', 'impeach', 'power of the purse'],
          },
          {
            points: 1,
            description:
              'Reasoning: explains why or how the evidence supports the claim (for example, that a single president can act with the speed a crisis requires, or that Congress\'s checks keep crisis powers temporary).',
            keywords: ['this shows', 'this demonstrates', 'which shows', 'therefore', 'this means', 'because of this', 'as a result'],
          },
          {
            points: 1,
            description:
              'Alternative perspective: responds to an opposing or alternate perspective using refutation, concession, or rebuttal. Simply stating that others disagree does not earn the point.',
            keywords: ['opponents', 'critics', 'some argue', 'others argue', 'some may argue', 'one might argue', 'it could be argued', 'admittedly', 'although', 'while it is true'],
          },
        ],
        sampleAnswer:
          'The expansion of presidential power during national crises is consistent with the Founders\' design, because they created a single, energetic executive precisely so that the government could act decisively in emergencies, while leaving Congress and the courts the tools to rein that power in once the crisis passes.\n\n' +
          'In Federalist No. 70, Alexander Hamilton argued that "energy in the executive is a leading character in the definition of good government." He explained that "decision, activity, secrecy, and dispatch" are found in one person far more than in a group. The Founders chose a single president, rather than a council, because a nation facing invasion or rebellion cannot wait for a committee to agree. When a president acts quickly in a crisis, he is using the very quality the Founders built into the office.\n\n' +
          'The Emancipation Proclamation shows this design working. In 1863 Abraham Lincoln declared that enslaved people in the areas in rebellion "are, and henceforward shall be free," acting "as Commander-in-Chief" and as "a fit and necessary war measure for suppressing said rebellion." Lincoln grounded the order in his constitutional war power rather than claiming unlimited authority, and it applied only to the areas in rebellion. Making abolition permanent required the Thirteenth Amendment, passed by Congress and ratified by the states in 1865. This shows that a crisis power was used energetically but stayed within the system: the lasting change came through the normal constitutional process.\n\n' +
          'Critics argue that crisis powers upset the separation of powers Madison defended in Federalist No. 51, where he wrote that "ambition must be made to counteract ambition." They point to presidents who sent troops into long conflicts without a declaration of war. This concern is real, but it shows that the checks still work rather than that the design failed. Congress responded with the War Powers Resolution of 1973, which requires the president to notify Congress within 48 hours of sending troops and to withdraw them within 60 days (plus a 30-day withdrawal period) without congressional authorization, and Congress still controls the money for any military action. Because Congress can push back, temporary growth in presidential power during a crisis is consistent with a constitution that gives the president energy and the other branches the means to check him.',
      },
    ],
  },

  // =========================================================================
  // Argument Essay 2 — Does the republic reflect the will of the people? (Unit 1)
  // =========================================================================
  {
    id: 'gov-frq-ae-2',
    type: 'argument-essay',
    unit: 1,
    title: 'Argument Essay: Representative Democracy and the Will of the People',
    prompt:
      'Develop an argument that explains whether the Constitution\'s system of representative democracy produces a government that reflects the will of the people.\n\n' +
      'Use at least one piece of evidence from one of the following foundational documents:\n\n' +
      '- Brutus No. 1\n' +
      '- Federalist No. 10\n' +
      '- Federalist No. 39\n' +
      '- The Gettysburg Address\n\n' +
      ESSAY_DIRECTIONS,
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your argument essay. Your response is scored on the six-point rubric below.',
        maxPoints: 6,
        rubric: [
          {
            points: 1,
            description:
              'Claim or thesis: responds to the prompt with a defensible claim that establishes a line of reasoning (for example, that representation refines the people\'s will while keeping government accountable to them, or that features such as the Electoral College and the Senate prevent the government from reflecting the majority). Restating the prompt does not earn the point.',
            keywords: ['reflects the will', 'does not reflect', 'fails to reflect', 'does reflect', 'reflect the will of the people', 'reflects what the people want', 'does not represent the will'],
          },
          {
            points: 1,
            description:
              'Evidence (1 of 3): provides one piece of specific evidence relevant to representation or popular sovereignty, such as a foundational document, the Electoral College, the Seventeenth Amendment, or a court case on representation.',
            keywords: ['federalist no. 10', 'federalist 10', 'federalist no. 39', 'federalist 39', 'brutus', 'gettysburg', 'electoral college', 'seventeenth amendment', '17th amendment', 'baker v. carr'],
          },
          {
            points: 1,
            description:
              'Evidence (2 of 3): uses one piece of specific evidence from the listed documents (Brutus No. 1, Federalist No. 10, Federalist No. 39, or the Gettysburg Address) to SUPPORT the claim, not just mention it.',
            keywords: ['derives all its powers', 'great body of the people', 'refine and enlarge', 'chosen body of citizens', 'extend the sphere', 'large republic', 'of the people, by the people, for the people', 'of the people, by the people', 'new birth of freedom', 'know the minds', 'too large', 'extensive republic'],
          },
          {
            points: 1,
            description:
              'Evidence (3 of 3): uses a SECOND piece of specific evidence to support the claim: another listed document, a different foundational document, an amendment or court case, or a specific example (such as a president who lost the popular vote).',
            keywords: ['seventeenth amendment', '17th amendment', 'electoral college', 'popular vote', 'baker v. carr', 'one person, one vote', 'one person one vote', 'nineteenth amendment', '19th amendment', 'twenty-sixth amendment', '26th amendment', 'voting rights act', 'gerrymander', 'senate'],
          },
          {
            points: 1,
            description:
              'Reasoning: explains why or how the evidence supports the claim (for example, that elections hold representatives accountable, or that equal Senate representation gives small-state minorities disproportionate power).',
            keywords: ['this shows', 'this demonstrates', 'which shows', 'therefore', 'this means', 'because of this', 'as a result'],
          },
          {
            points: 1,
            description:
              'Alternative perspective: responds to an opposing or alternate perspective using refutation, concession, or rebuttal. Simply stating that others disagree does not earn the point.',
            keywords: ['opponents', 'critics', 'some argue', 'others argue', 'some may argue', 'one might argue', 'it could be argued', 'admittedly', 'although', 'while it is true'],
          },
        ],
        sampleAnswer:
          'The Constitution\'s system of representative democracy produces a government that reflects the will of the people, because every part of the government ultimately draws its authority from the people, and the system has grown more democratic as the people have used it to expand who votes and how leaders are chosen.\n\n' +
          'In Federalist No. 39, James Madison defined a republic as "a government which derives all its powers directly or indirectly from the great body of the people." House members are elected directly, senators have been elected directly since 1913, and presidents and judges are chosen through officials whom the people elect. No branch holds power by birth or by its own appointment. This shows that the people\'s will is the source of all federal power, even when it reaches an office indirectly, and voters can replace their representatives at regular elections if those representatives ignore them.\n\n' +
          'The system has also become more responsive over time. The Seventeenth Amendment (1913) moved the election of senators from state legislatures to the voters, and the Nineteenth and Twenty-sixth Amendments extended the vote to women and to eighteen-year-olds. In Baker v. Carr (1962), the Supreme Court allowed federal courts to hear challenges to unequal legislative districts, which led to the principle of "one person, one vote." Each change shows the people using the Constitution\'s own amendment and judicial processes to make representation reflect them more closely, in the spirit of Lincoln\'s call in the Gettysburg Address for "government of the people, by the people, for the people."\n\n' +
          'Critics, following Brutus No. 1, argue that a republic as large as the United States cannot truly reflect the people, and they point to the Electoral College, which in 2000 and 2016 elected a president who lost the national popular vote. That is a real limit on majority rule. But Madison argued in Federalist No. 10 that representation will "refine and enlarge the public views, by passing them through the medium of a chosen body of citizens," and that a large republic makes it harder for a single majority faction to oppress minorities. Reflecting the will of the people does not mean carrying out every momentary majority; it means a government that answers to the people over time. Because representatives face regular elections and the people have repeatedly expanded their own power, the system does reflect the will of the people.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

/** Static bank, also imported by prisma/import-frq.ts and the /api/frq fallback. */
export const apUSGovFRQs: USGovFRQ[] = usGovFRQs

export function getApUSGovFRQs(): USGovFRQ[] {
  return usGovFRQs
}

export function getUSGovFRQsByType(type: USGovFRQType, pool: USGovFRQ[] = usGovFRQs): USGovFRQ[] {
  return pool.filter((q) => q.type === type)
}

/**
 * One FRQ of each real type, in exam order (Concept Application, Quantitative Analysis,
 * SCOTUS Comparison, Argument Essay): 17 points in 100 minutes.
 */
export function generateFullExamFRQs(pool: USGovFRQ[] = usGovFRQs): {
  questions: USGovFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = US_GOV_FRQ_TYPES.map(({ type }) => {
    const ofType = getUSGovFRQsByType(type, pool)
    return shuffleArray(ofType.length > 0 ? ofType : getUSGovFRQsByType(type))[0]
  })
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 100,
  }
}
