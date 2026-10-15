export const englangEthosPathosLogosPart4Data = {
  topicSlug: 'englang-ethos-pathos-logos',
  sections: [
    {
      id: 'englange4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ethos, Pathos, and Logos

**Part 4 of 7 — Logos in Depth: Burke's Speech on Conciliation with America, 1775**

---

| Section |
|---------|
| Logos Is Reasoning, Not Just Numbers |
| Patterns of Reasoning |
| 📖 Close Reading: Burke, March 22, 1775 |
| Evaluating a Logical Appeal |

> 🔑 **Key Concept:** Students often equate logos with statistics. Logos is the appeal of **reasoning**: how a writer moves from premises and evidence to a conclusion the audience should accept. A speech with no numbers at all can be intensely logical, and a page of data can reason badly. The CED's skills on claims and evidence (3.A) and lines of reasoning (5.A) are where logos lives on the exam.
`
    },
    {
      id: 'englange4-patterns',
      type: 'text' as const,
      content: `
## Patterns of Reasoning

| Pattern | How it works | Example |
|---|---|---|
| **Deduction** | From a general principle to a specific conclusion | "Laws that cannot be enforced invite contempt; this law cannot be enforced; so it invites contempt." |
| **Enthymeme** | A deduction with one premise left unstated for the audience to supply | "We should repair the bridge; it carries ten thousand cars a day." (Unstated: heavily used structures deserve repair.) |
| **Induction** | From specific cases to a general conclusion | "Three neighboring towns that added bike lanes saw fewer crashes, so lanes tend to improve safety." |
| **Causal reasoning** | Traces causes or predicts effects | "Distance slows orders, so distant colonies govern themselves." |
| **Analogy** | Argues that what is true of a familiar case is true of this one | "As a gardener prunes to strengthen a tree, a budget cut can strengthen an agency." |
| **Division and elimination** | Breaks a question into parts or rejects alternatives one by one | "There are four objections to this plan. First..." |

### Kinds of Evidence

| Evidence | Strength | Limitation |
|---|---|---|
| Statistics and data | Scope and precision | Can hide individual cases; depends on method |
| Examples and anecdotes | Vivid and concrete | May be unrepresentative |
| Precedent and history | Shows what has happened before | Circumstances may differ |
| Expert testimony | Borrowed authority | Experts can disagree or exceed their field |
| Hypotheticals | Test a principle by imagining a case | Not proof that the case occurs |

> 🔑 **AP Connection:** Section I often asks what an argument **assumes**. That is the unstated premise of an enthymeme. Find it by asking: "What would someone have to believe for this evidence to support this claim?"
`
    },
    {
      id: 'englange4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"The library should stay open until midnight during exams; students study late." This enthymeme depends on which unstated premise?',
            options: [
              'Services should be available when people actually need them.',
              'Most students prefer studying at home rather than in a library building.',
              'Libraries are more expensive to operate at night than during the day.',
              'Exams are the most important assessments of student learning in a course.'
            ],
            correctAnswer: 0,
            explanation: 'For "students study late" to support later hours, one must believe services should match when people need them. The other statements either undercut the claim or are irrelevant to it.'
          },
          {
            question: 'A writer notes that five cities that banned plastic bags saw less litter and concludes that bag bans reduce litter. This reasoning is',
            options: [
              'inductive',
              'deductive',
              'circular',
              'analogical'
            ],
            correctAnswer: 0,
            explanation: 'Moving from several specific cases to a general conclusion is induction. Deduction moves from a general principle, circular reasoning assumes its conclusion, and an analogy compares two different cases.'
          }
        ]
      }
    },
    {
      id: 'englange4-passage',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Burke, March 22, 1775

### The Situation

| Component | Details |
|---|---|
| **Speaker** | Edmund Burke, an Irish-born member of the British House of Commons and a leading Whig |
| **Audience** | The House of Commons, where the government and most members favored using force to compel the American colonies to obey Parliament |
| **Exigence** | Colonial resistance to parliamentary taxation was hardening, and Britain was moving toward war |
| **Purpose** | To persuade Parliament to adopt resolutions for conciliation instead of coercion |
| **Outcome** | The House rejected Burke's resolutions; fighting began at Lexington and Concord four weeks later |

Text from the Gutenberg edition of *Burke's Speech on Conciliation with America*; an editor's footnote markers have been removed.

**The proposition**

> The proposition is peace. Not peace through the medium of war; not peace to be hunted through the labyrinth of intricate and endless negotiations; not peace to arise out of universal discord fomented, from principle, in all parts of the Empire, not peace to depend on the juridical determination of perplexing questions, or the precise marking the shadowy boundaries of a complex government. It is simple peace; sought in its natural course, and in its ordinary haunts.

**Four objections to force**

> First, Sir, permit me to observe that the use of force alone is but temporary. It may subdue for a moment, but it does not remove the necessity of subduing again; and a nation is not governed which is perpetually to be conquered.
>
> My next objection is its uncertainty. Terror is not always the effect of force, and an armament is not a victory. If you do not succeed, you are without resource; for, conciliation failing, force remains; but, force failing, no further hope of reconciliation is left.
>
> A further objection to force is, that you impair the object by your very endeavors to preserve it. The thing you fought for is not the thing which you recover; but depreciated, sunk, wasted, and consumed in the contest.
>
> ... Lastly, we have no sort of experience in favor of force as an instrument in the rule of our Colonies.

**One cause of the American spirit: distance**

> Three thousand miles of ocean lie between you and them. No contrivance can prevent the effect of this distance in weakening government. Seas roll, and months pass, between the order and the execution, and the want of a speedy explanation of a single point is enough to defeat a whole system. ... The Turk cannot govern Egypt and Arabia and Kurdistan as he governs Thrace; nor has he the same dominion in Crimea and Algiers which he has at Brusa and Smyrna.
>
> — Edmund Burke, Speech on Conciliation with America, House of Commons, March 22, 1775
`
    },
    {
      id: 'englange4-reading',
      type: 'text' as const,
      content: `
### The Proposition: A Thesis Defined by Elimination

Burke states his claim in four words, "The proposition is peace," then defines it by rejecting four kinds of peace he does **not** mean. Each "not peace" clause eliminates a misreading an opponent might use against him. What survives is "simple peace," a claim the House cannot easily distort.

### The Four Objections: A Line of Reasoning by Division

| Objection | Reasoning pattern | The logic |
|---|---|---|
| **1. Force is temporary** | Deduction (enthymeme) | Governing requires lasting obedience; force gives only momentary obedience; so force cannot govern. The premise is stated as a maxim: "a nation is not governed which is perpetually to be conquered." |
| **2. Force is uncertain** | Reasoning about consequences | Conciliation can be tried first with force held in reserve, but if force is tried first and fails, conciliation is gone. The order of the options matters. |
| **3. Force damages what it seeks to keep** | Causal reasoning | War consumes the colonies' wealth and spirit, so Britain would "recover" a ruined possession. |
| **4. No experience supports force** | Argument from precedent | The colonies grew under lenient rule; nothing in their history shows force works. |

Numbering the objections ("First," "My next," "A further," "Lastly") lets the House follow and remember the argument, and it makes the case look complete.

### Logic Delivered with Style

"Conciliation failing, force remains; but, force failing, no further hope of reconciliation is left" is a **chiasmus** (A-B, B-A). The mirrored form makes the logical asymmetry audible: the two options are not reversible. Style here serves logos.

### Causal Reasoning and Analogy

The distance passage reasons from a physical fact ("Three thousand miles of ocean") to a political effect (weaker government). Then Burke supports the cause with an **analogy** to other large empires: even the Ottoman sultan governs distant provinces more loosely than those near his capital. If the pattern holds for empires in general, Britain cannot expect to escape it.

## Evaluating a Logical Appeal

| Test | Applied to Burke |
|---|---|
| **Are the premises acceptable to this audience?** | Members of Parliament wanted lasting, profitable rule, so "a nation is not governed which is perpetually to be conquered" appeals to their own goal |
| **Is the evidence sufficient?** | The fourth objection argues from absence of experience, which is suggestive rather than conclusive |
| **Does the analogy hold?** | The Ottoman comparison works for distance but ignores other differences between empires |
| **Are alternatives addressed?** | Yes: each objection anticipates the case for force |

> 🔑 **AP Connection:** Analysis of logos should explain **why the reasoning would persuade this audience**, not merely label it. Burke's arguments work because they accept Parliament's own aim, keeping the colonies "in a profitable and subordinate connection," and show that force defeats that aim.
`
    },
    {
      id: 'englange4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The thing you fought for is not the thing which you recover; but depreciated, sunk, wasted, and consumed in the contest." Pattern: ___',
            options: ['causal reasoning', 'expert testimony', 'statistical evidence', 'circular reasoning']
          },
          {
            label: '"The Turk cannot govern Egypt and Arabia and Kurdistan as he governs Thrace." Pattern: ___',
            options: ['analogy to another empire', 'definition of a key term', 'concession to the opposition', 'appeal to authority']
          },
          {
            label: '"Lastly, we have no sort of experience in favor of force as an instrument in the rule of our Colonies." Pattern: ___',
            options: ['argument from precedent', 'emotional anecdote', 'hypothetical example', 'personal testimony']
          }
        ],
        correctAnswers: ['causal reasoning', 'analogy to another empire', 'argument from precedent'],
        hint1: 'Fighting produces a damaged result.',
        hint2: 'Another empire\'s experience is compared to Britain\'s.',
        hint3: 'He appeals to the history of how the colonies have been ruled.',
        explanation: 'War causing ruin is causal reasoning, the Ottoman comparison is an analogy, and the appeal to past experience in ruling the colonies is an argument from precedent.'
      }
    },
    {
      id: 'englange4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The series of clauses beginning "Not peace through the medium of war" serves primarily to',
            options: [
              'define Burke\'s proposal by excluding meanings that opponents could attack',
              'concede that peace with the colonies is no longer possible',
              'list the negotiations Burke has already conducted with the colonies',
              'shift the speech from argument to an appeal to the audience\'s fears'
            ],
            correctAnswer: 0,
            explanation: 'Each "not peace" clause rules out a version of peace that critics could ridicule, leaving "simple peace" as the defended claim. Burke concedes nothing, lists no negotiations, and stays in argument mode.'
          },
          {
            question: 'The statement "a nation is not governed which is perpetually to be conquered" functions in Burke\'s first objection as',
            options: [
              'an anecdote drawn from Burke\'s experience',
              'the general premise that leads to his conclusion',
              'a concession that force works in the short term only',
              'an expert opinion that Burke quotes from another writer'
            ],
            correctAnswer: 1,
            explanation: 'The maxim is the principle that, combined with "force is temporary," yields the conclusion that force cannot govern. It is not an anecdote or a quotation, and although Burke grants force a momentary effect, the maxim itself is his premise, not a concession.'
          },
          {
            question: 'Burke\'s sentence "conciliation failing, force remains; but, force failing, no further hope of reconciliation is left" is persuasive chiefly because',
            options: [
              'its chiasmus makes audible the point that the two options cannot be reversed',
              'it offers statistical proof that conciliation succeeds more often than force',
              'it appeals to the audience\'s fear of the colonists\' military strength',
              'it relies on Burke\'s reputation as an expert in colonial administration'
            ],
            correctAnswer: 0,
            explanation: 'The mirrored structure dramatizes the logic: try conciliation first and force is still available, but not the reverse. The sentence contains no statistics, does not dwell on fear, and depends on reasoning rather than reputation.'
          }
        ]
      }
    }
  ]
};
