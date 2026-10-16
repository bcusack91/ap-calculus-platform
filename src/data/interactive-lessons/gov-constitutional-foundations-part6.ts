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
| Six of the 13 required documents in detail |
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

## Six of the 13 Required Documents — Deep Dive

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
| **Evidence** | Two pieces of specific, relevant evidence that support the thesis, at least one of them from a required foundational document (the second can be another required document or specific course content) | 0–3 points |
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
              "Federalist No. 51, which argues that ambition must counteract ambition so that the Senate's treaty role checks the President",
              "Federalist No. 70, which argues that energy in the executive requires the President to conduct foreign policy without interference from Congress",
              "Federalist No. 10, which argues that a large republic controls factions by placing all treaty decisions in the hands of the House rather than the Senate",
              "Brutus No. 1, which argues that the Supremacy Clause makes every executive agreement binding law over the objections of the states"
            ],
            correctAnswer: 0,
            explanation: 'Federalist No. 51 strongest against unilateral executive treaty: "ambition must be made to counteract ambition" + bicameralism/federalism/checks = "double security" → Senate advice and consent (2/3) on treaties is exactly the structural check Madison defends. Modern executive agreement workaround (~90% intl agreements vs treaties) = exactly the erosion Madison warned of.'
          },
          {
            question: 'AP scenario: A federal statute requires state and local governments to make all of their public buildings accessible to people with disabilities, with no federal funding to pay for the changes. Which AP-required foundational document provides the strongest argument AGAINST this statute?',
            options: [
              "Brutus No. 1, which warns that the Necessary and Proper and Supremacy Clauses would let the national government absorb the states' own powers",
              "Federalist No. 78, which argues that courts must defer to Congress whenever a federal statute imposes duties on the states",
              "Federalist No. 51, which argues that federalism lets the national government require the states to carry out its policies",
              "The Articles of Confederation, which let Congress order state officials to carry out national laws and so offer a precedent for the statute's requirements"
            ],
            correctAnswer: 0,
            explanation: 'Brutus No. 1 is the strongest argument against the statute: it warns that the Necessary and Proper and Supremacy Clauses would let national authority absorb the states\' own powers. The statute is an unfunded federal MANDATE (EK 1.7.A.5.iv), a national requirement placed on the states, exactly the kind of national power Anti-Federalists feared. Federalist 78 defends judicial independence rather than deference, Federalist 51 describes federalism as a check on power, and the Articles gave Congress no power to compel the states or their officials.'
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
              "The design mixes democratic and counter-majoritarian features, with an elected House alongside institutions like the Senate and Electoral College that restrain majorities",
              'The design is purely democratic, since the Constitution has required direct popular election of the President and senators since 1789',
              'The design is anti-democratic, since the Constitution still gives voters no direct role in choosing any federal officeholder',
              "The design became fully democratic in 1913, when the 17th Amendment abolished both the Electoral College and the Senate filibuster and gave voters direct control over every federal office"
            ],
            correctAnswer: 0,
            explanation: 'Defensible thesis: hybrid — democratic foundationally (We the People + House direct + 17th + 19th + 26th) BUT counter-majoritarian operationally (Senate over-rep + Electoral College popular-vote losers 1824/1876/1888/2000/2016 + filibuster + unelected Court + Article V supermajorities → only 27 amendments). Reflects Fed 10 + Anti-Fed Bill of Rights compromise.'
          },
          {
            question: 'Which response best uses AP foundational documents to address an alternative perspective?',
            options: [
              "Conceding that Federalist No. 10's theory has held up, then showing that Brutus No. 1 correctly predicted the growth of federal power",
              "Listing every required foundational document in a single paragraph so that the reader can see the full range of evidence available on both sides",
              "Restating the thesis in different words and adding that some people disagree, without naming a document or explaining why they disagree",
              "Quoting Federalist No. 51 at length and summarizing its argument about checks and balances, with no counterargument or rebuttal included"
            ],
            correctAnswer: 0,
            explanation: 'Strong AP alternative-perspective: BOTH partially vindicated — Fed 10 vindicated (no national majority tyranny; coalition politics norm; no rapid factional reversals) AND Brutus 1 vindicated (Necessary and Proper + Supremacy → federal absorbs state — Wickard 1942 + post-1965 civil-rights; standing army → ~\\$800B defense; consolidated taxation → federal-grant dependence). Earns thesis + evidence + counter-argument.'
          }
        ]
      }
    }
  ]
}
