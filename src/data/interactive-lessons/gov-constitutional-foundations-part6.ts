export const govConstitutionalFoundationsPart6Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| Document analysis framework for AP Gov |
| Five required documents in detail |
| AP argumentative essay structure |
| Common AP traps |

> 🔑 Key idea: AP Gov tests your ability to apply foundational documents to specific scenarios. Your job is not just to recognize the documents, but to deploy them as evidence in arguments about contemporary constitutional problems.
      `
    },
    {
      id: 'govconst6-content',
      type: 'text' as const,
      content: `
## Document Analysis Framework

For any AP Gov foundational-document scenario, ask:

| Question | Why It Matters |
|---|---|
| Which document(s) speak to this scenario? | The College Board signals which document(s) are relevant — your job is to apply them, not just summarize |
| What is the document\'s core argument? | Argument essays require deploying the document\'s thesis, not just citing the document |
| What competing argument exists in another document? | The strongest essays acknowledge counter-evidence (e.g., Federalist No. 10 + Brutus No. 1 together) |
| How does the document apply to the specific scenario? | The application step is where most students lose points |
| What real-world example reinforces the argument? | Required for the evidence point on argument essays |

## Five Required Documents — Deep Dive

> **Declaration of Independence** (Jefferson, July 4, 1776)
> "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed."

- **Application scenarios:** natural rights claims, civil disobedience, popular sovereignty, the moral foundation of constitutional government, contemporary debates over equality and citizenship (Frederick Douglass\' "What to the Slave Is the Fourth of July?" 1852; Lincoln\'s Gettysburg Address 1863; Dr. King\'s "Letter from Birmingham Jail" 1963; *Obergefell v. Hodges* 2015 majority opinion)

> **Articles of Confederation** (drafted 1777, ratified 1781)

- **Application scenarios:** weakness of confederal arrangements; the post-Articles centralization; debates over states\' rights vs. federal authority; comparisons to other federal systems

> **U.S. Constitution** (drafted 1787, effective 1789)

- **Application scenarios:** virtually every AP Gov question; the Articles I, II, III architecture; specific clauses (Necessary and Proper, Supremacy, Commerce, Establishment, Free Exercise, Due Process, Equal Protection); the amendment process

> **Federalist No. 10** (Madison, Nov 22, 1787)

- **Application scenarios:** factions and interest groups; majority tyranny; representation vs. direct democracy; large-republic theory; political parties (note: Madison didn\'t anticipate parties as he understood them but his faction analysis applies); contemporary polarization

> **Federalist No. 51** (Madison, Feb 6, 1788)

- **Application scenarios:** separation of powers; checks and balances; bicameralism; federalism; "double security"; presidential vs. congressional power conflicts; judicial review; impeachment; war powers

> **Brutus No. 1** (likely Robert Yates, Oct 18, 1787)

- **Application scenarios:** Anti-Federalist concerns about federal authority; Necessary and Proper Clause critique; commerce-clause expansion critique; concerns about a standing army; concerns about consolidated federal taxation; arguments for state sovereignty; contemporary federalism revival arguments

## AP Argumentative Essay Structure

| Component | Description | Worth |
|---|---|---|
| **Defensible thesis** | A claim that establishes a line of reasoning AND responds to the prompt | 1 point |
| **Evidence — required documents** | At least 1 piece of evidence from one of the required foundational documents | 1 point |
| **Evidence — additional** | At least 1 additional piece of evidence (second required document, additional foundational document, OR specific course content from any unit) | 1 point |
| **Reasoning** | Explain how/why your evidence supports your thesis | 1 point |
| **Responding to alternative perspective** | Identify a counter-argument AND respond to it (refute, concede, OR rebut) | 1 point |
| **Total** | | 6 points |

## Common AP Traps

| Trap | Why It Costs Points |
|---|---|
| Summarizing rather than applying | The College Board wants you to use the document, not just describe it |
| Failing to take a position | Argument essays require a defensible thesis (yes/no, more/less, etc.) |
| Citing only one document | Strongest essays use 2+ documents to construct an argument |
| Missing the alternative perspective | Without addressing the counter-argument, you cap your score at 5/6 |
| Using only a single example | Specific real-world examples (cases, statutes, contemporary debates) earn the evidence point |
| Vague or general language | "The government does things" earns nothing; "Congress, under its commerce-clause authority, regulated X in 1965 statute Y" earns the evidence point |
| Ignoring SCOTUS-required cases | Argument essays often reward connecting required documents to required cases (e.g., Federalist 51 + *Marbury v. Madison*) |

> 🔑 Key takeaway: Foundational documents are tools, not just facts. Your job is to apply them to argue about contemporary scenarios — the AP rubric rewards thesis + evidence + reasoning + counter-argument.
      `
    },
    {
      id: 'govconst6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Document Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'AP scenario: A presidential administration claims unilateral authority to negotiate a binding international agreement without Senate ratification. Which AP-required foundational document provides the strongest argument AGAINST this claim?',
            options: [
              "*Federalist No. 51* (Madison, Feb 6, 1788) — which argues that 'ambition must be made to counteract ambition' through the structural separation of powers and that bicameralism, federalism, and checks among the branches create a 'double security' for the rights of the people; the Senate\'s Article II treaty role (advice and consent with 2/3 vote) is precisely the kind of structural check that Federalist 51 defends as necessary to prevent any one branch from exercising unchecked authority over matters of national importance — and the modern executive-agreement workaround (now ~90% of international agreements vs. treaties) illustrates exactly the kind of structural erosion that Madison warned would occur if branches were not 'constantly aiming to expand their authority'",
              "There is no AP-required foundational document of any kind that addresses presidential authority over international agreements during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
              "*Federalist No. 10* (Madison, Nov 22, 1787) — its extended-republic theory directly addresses presidential authority over international agreements with no relevance to separation of powers, bicameralism, or executive checks of any kind during the entire period in any region",
              "There are no AP-required foundational documents of any kind during the entire period from 1787 onward in any region of the United States with no Federalist No. 51, no Federalist No. 10, no Brutus No. 1, no Constitution, no Declaration of Independence, and no Articles of Confederation of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Federalist No. 51 strongest against unilateral executive treaty: "ambition must be made to counteract ambition" + bicameralism/federalism/checks = "double security" → Senate advice and consent (2/3) on treaties is exactly the structural check Madison defends. Modern executive agreement workaround (~90% intl agreements vs treaties) = exactly the erosion Madison warned of.'
          },
          {
            question: 'AP scenario: A federal statute requires state law-enforcement officers to perform background checks on prospective handgun purchasers, with no federal funding to support the requirement. Which AP-required foundational document provides the strongest argument AGAINST this statute?',
            options: [
              "*Brutus No. 1* (Oct 18, 1787) — which argues that consolidated federal authority will inevitably absorb state sovereignty and that the Necessary and Proper Clause combined with the Supremacy Clause will leave no genuine state authority; *Brutus*\' concern about federal commandeering of state institutions is directly applicable, and the Supreme Court adopted a similar reasoning in *Printz v. United States* (1997), striking down the relevant provisions of the Brady Handgun Violence Prevention Act of 1993 on anti-commandeering grounds (the federal government cannot conscript state officers to enforce federal regulatory programs, a doctrine grounded in the 10th Amendment\'s reserved-powers principle and the structure of dual sovereignty)",
              "There is no AP-required foundational document of any kind that addresses federal-state relationships during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
              "*Federalist No. 10* (Madison, Nov 22, 1787) — its extended-republic theory directly addresses federal commandeering of state law-enforcement officers with no relevance to federalism, the 10th Amendment, or anti-commandeering doctrine of any kind during the entire period in any region",
              "There are no AP-required foundational documents of any kind during the entire period from 1787 onward in any region of the United States with no Federalist No. 10, no Federalist No. 51, no Brutus No. 1, no Constitution, no Declaration of Independence, and no Articles of Confederation of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Brutus No. 1 strongest against federal commandeering: warns federal authority will absorb state sovereignty + Necessary and Proper + Supremacy → no genuine state authority. Court adopted similar reasoning in Printz v. United States (1997) striking Brady Act commandeering on 10th Amendment + dual sovereignty grounds.'
          }
        ]
      }
    },
    {
      id: 'govconst6-input',
      type: 'input-boxes' as const,
      content: `**Application sprint — name the document**`,
      exercise: {
        questions: [
          {
            prompt: 'The AP-required foundational document that argues "ambition must be made to counteract ambition" through separation of powers and federalism.',
            answer: 'Federalist No. 51',
            acceptableAnswers: ['Federalist No. 51', 'Federalist 51', 'Federalist No 51'],
            hint: 'Madison, Feb 6, 1788 — the locus classicus of the separation-of-powers argument.'
          },
          {
            prompt: 'The AP-required foundational document that argues a large extended republic is the best protection against the mischiefs of faction.',
            answer: 'Federalist No. 10',
            acceptableAnswers: ['Federalist No. 10', 'Federalist 10', 'Federalist No 10'],
            hint: 'Madison, Nov 22, 1787 — the extended-republic theory.'
          },
          {
            prompt: 'The AP-required foundational document that argues a free republic cannot survive across a vast territory and that consolidated federal power threatens liberty.',
            answer: 'Brutus No. 1',
            acceptableAnswers: ['Brutus No. 1', 'Brutus 1', 'Brutus No 1'],
            hint: 'Oct 18, 1787 — the canonical Anti-Federalist statement.'
          }
        ]
      }
    },
    {
      id: 'govconst6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each scenario to the most relevant AP-required document.**`,
      exercise: {
        dropdowns: [
          {
            label: "A scenario asking whether a large diverse republic is the best protection against majority tyranny: ___",
            options: ['Federalist No. 10', 'Federalist No. 51', 'Brutus No. 1', 'Declaration of Independence']
          },
          {
            label: "A scenario asking whether the President has unchecked unilateral authority over a particular policy area: ___",
            options: ['Federalist No. 10', 'Federalist No. 51', 'Brutus No. 1', 'Declaration of Independence']
          },
          {
            label: "A scenario asking whether the federal government can use the Necessary and Proper Clause to absorb state authority: ___",
            options: ['Federalist No. 10', 'Federalist No. 51', 'Brutus No. 1', 'Declaration of Independence']
          }
        ],
        correctAnswers: ['Federalist No. 10', 'Federalist No. 51', 'Brutus No. 1'],
        hint1: 'Large diverse republic + majority tyranny → Madison\'s Federalist No. 10 extended-republic argument.',
        hint2: 'Presidential authority + checks → Federalist No. 51 separation-of-powers argument.',
        hint3: 'Necessary and Proper + state authority erosion → Brutus No. 1\'s central concern.',
        explanation: 'Application mapping: Fed 10 = factions + large republic + majority tyranny; Fed 51 = separation of powers + checks + double security; Brutus 1 = Necessary and Proper critique + state sovereignty + standing army; Declaration = natural rights + consent + revolution.'
      }
    },
    {
      id: 'govconst6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Argument Essay Construction**`,
      exercise: {
        questions: [
          {
            question: 'AP argumentative essay prompt: "Develop an argument that explains whether the constitutional design of the U.S. national government is more democratic or more anti-democratic in character." Which thesis is most defensible?',
            options: [
              "The U.S. constitutional design is fundamentally hybrid — democratic in foundational legitimacy but substantially counter-majoritarian in operation: democratically, the Preamble grounds authority in 'We the People' (Rousseau), the House is directly elected (Article I, § 2), the 17th Amendment (1913) made the Senate directly elected, the 19th Amendment (1920) and 26th Amendment (1971) expanded the franchise; counter-majoritarianly, the Senate over-represents low-population states (Wyoming and California each have 2 senators), the Electoral College has elected the popular-vote loser five times (1824, 1876, 1888, 2000, 2016), the filibuster requires 60 votes for ordinary legislation, the Supreme Court is unelected with life tenure and can strike down popular legislation, and the Article V amendment process requires supermajorities so demanding that only 27 amendments have been ratified in 230+ years; this hybrid design reflects the Federalist No. 10 conviction that pure democracy is dangerous and the Anti-Federalist concession of the Bill of Rights — making U.S. constitutional democracy structurally distinctive among modern democracies",
              'The U.S. constitutional design is purely democratic with no counter-majoritarian features of any kind with no Senate over-representation, no Electoral College, no filibuster, no Supreme Court, and no Article V supermajorities of any kind during the entire period from 1789 onward in any region of the United States during the period',
              'The U.S. constitutional design is purely anti-democratic with no democratic features of any kind with no Preamble, no House direct election, no 17th Amendment, no 19th Amendment, and no 26th Amendment of any kind during the entire period in any region of the United States during the period',
              "There is no U.S. constitutional design of any kind during the entire period from 1789 onward in any region of the United States with no Preamble, no House, no Senate, no Electoral College, no Supreme Court, no Article V, no 17th Amendment, no 19th Amendment, and no 26th Amendment of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Defensible thesis: hybrid — democratic foundationally (We the People + House direct + 17th + 19th + 26th) BUT counter-majoritarian operationally (Senate over-rep + Electoral College popular-vote losers 1824/1876/1888/2000/2016 + filibuster + unelected Court + Article V supermajorities → only 27 amendments). Reflects Fed 10 + Anti-Fed Bill of Rights compromise.'
          },
          {
            question: 'Which response best uses AP foundational documents to address an alternative perspective?',
            options: [
              "Although Federalist No. 10\'s extended-republic theory has been substantially vindicated by U.S. constitutional practice (no national majority faction has produced sustained tyranny in 230+ years; competing-coalition politics has been the norm; rapid factional reversals of pure democracies have been avoided), the Anti-Federalist critique in Brutus No. 1 has also been substantially vindicated: Brutus warned that the Necessary and Proper Clause combined with the Supremacy Clause would allow federal authority to absorb state sovereignty, and the post-New Deal commerce-clause expansion (Wickard v. Filburn 1942) and the post-1965 civil-rights enforcement framework have done exactly that; Brutus warned that a standing army would be the instrument of tyranny, and the post-WWII national-security state with its ~\\$800-billion annual defense budget vastly exceeds anything the founders contemplated; Brutus warned that consolidated federal taxation would leave no resource to the states, and the modern federal-grant system makes states substantially dependent on federal funding — making the Federalist victory in 1788 a partial rather than total constitutional triumph",
              "Federalist No. 10 has been completely vindicated and Brutus No. 1 has been completely refuted with no concerns of any kind about federal authority absorbing state sovereignty, no standing army growth, and no federal-grant dependence of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "Brutus No. 1 has been completely vindicated and Federalist No. 10 has been completely refuted with no concerns of any kind about majority faction, no extended-republic success, and no coalition politics of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There is no Federalist No. 10 and no Brutus No. 1 of any kind during the entire period from 1787 onward in any region of the United States with no faction analysis, no extended-republic theory, no Necessary and Proper critique, and no constitutional debate of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Strong AP alternative-perspective: BOTH partially vindicated — Fed 10 vindicated (no national majority tyranny; coalition politics norm; no rapid factional reversals) AND Brutus 1 vindicated (Necessary and Proper + Supremacy → federal absorbs state — Wickard 1942 + post-1965 civil-rights; standing army → ~\\$800B defense; consolidated taxation → federal-grant dependence). Earns thesis + evidence + counter-argument.'
          }
        ]
      }
    }
  ]
}
