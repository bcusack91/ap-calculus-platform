export const apushRevolutionIndependencePart6Data = {
  topicSlug: 'apush-revolution-independence',
  sections: [
    {
      id: 'apushrev6-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Revolution & Independence

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| HIPP for Revolutionary-era documents |
| Document bank: Stamp Act Resolves, Common Sense, Declaration of Independence, Abigail Adams letter, Treaty of Paris |
| AP SAQ structure for 1754–1800 prompts |
| Common AP traps to avoid |

> 🔑 Key idea: Revolutionary documents look universal ("all men are created equal") but were produced in specific moments by specific authors with specific audiences. HIPP recovers the politics behind the rhetoric.
      `
    },
    {
      id: 'apushrev6-content',
      type: 'text' as const,
      content: `
## HIPP for Revolutionary-Era Documents

| Letter | Question | Revolutionary Application |
|---|---|---|
| **H**istorical context | What stage of the imperial crisis? | Pre/post Stamp Act 1765? Pre/post Tea Act 1773? Pre/post Lexington & Concord 1775? |
| **I**ntended audience | Who was being persuaded? | Other colonists? Parliament? European powers? Loyalists? |
| **P**urpose | What was the document trying to do? | Justify resistance? Recruit support? Define independence? Build a wartime alliance? |
| **P**oint of view | What position? | Patriot leader? Loyalist? Enslaved African? Patriot wife? European observer? |

## Document Bank

> **1. Virginia Stamp Act Resolves (1765)**
> "The General Assembly of this Colony have the only and sole exclusive Right and Power to lay Taxes and Impositions upon the Inhabitants of this Colony."

- **HIPP:** Resolutions introduced by Patrick Henry in the Virginia House of Burgesses in May 1765 (this fifth resolve passed narrowly and was rescinded the next day, but colonial newspapers printed it anyway); intended audience is Parliament, the Crown, and other colonial assemblies; purpose is to assert that only the Virginia assembly can tax Virginians, framing colonial resistance as a defense of constitutional English liberty rather than rebellion; POV is Virginia colonial elites within the legal-constitutional framework of English subjects.

> **2. Thomas Paine, *Common Sense* (1776)**
> "Of more worth is one honest man to society, and in the sight of God, than all the crowned ruffians that ever lived."

- **HIPP:** Pamphlet published in Philadelphia in January 1776 in plain accessible English; intended audience is ordinary American colonists (widely reprinted; Paine claimed about 120,000 copies were sold in the first months, a figure many historians think is inflated); purpose is to convert moderate colonists from reconciliation with Britain to outright independence by demolishing the legitimacy of monarchy itself; POV is recently arrived English radical writer with no stake in colonial elite politics, deliberately writing in plain language for common readers.

> **3. Declaration of Independence (1776)**
> "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights."

- **HIPP:** Document drafted by Thomas Jefferson and edited by the Continental Congress in July 1776; intended audience is the American colonies, the British Crown, and especially European powers (notably France) whose alliance was essential; purpose is to legally justify independence and recruit foreign support by enumerating grievances and asserting Enlightenment natural-rights theory; POV is Continental Congress representing the political class of thirteen colonies; the document's claim of universal equality coexists with Jefferson's role as enslaver and the Congress's removal of an anti-slave-trade clause.

> **4. Abigail Adams to John Adams (March 31, 1776)**
> "I desire you would Remember the Ladies, and be more generous and favourable to them than your ancestors... Do not put such unlimited power into the hands of the Husbands."

- **HIPP:** Personal letter from Abigail Adams in Massachusetts to her husband John Adams in Philadelphia at the Continental Congress; intended audience is John (and through him, the framers); purpose is to apply Revolutionary natural-rights logic to the legal status of married women; POV is a politically literate Patriot wife pressing the implications of liberty on a male political class that did not extend it.

> **5. Treaty of Paris (1783)**
> "His Brittanic Majesty acknowledges the said United States... to be free Sovereign and independent States."

- **HIPP:** Peace treaty negotiated by Benjamin Franklin, John Adams, and John Jay with Britain to end the Revolutionary War; intended audience is the American Congress, the British Parliament, and European powers; purpose is to formalize American independence, establish boundaries (Mississippi River as western border), and secure fishing rights; POV is American negotiators; notably ignores Indigenous nations whose territory was transferred without consultation.

## AP SAQ Structure

From May 2027 all three SAQs are required and all three are sourced: SAQ 1 uses a secondary text, SAQ 2 a primary text, and SAQ 3 a primary or secondary non-text source (an image, map or chart), each from a different period. A Period 3 SAQ built on one of these documents typically asks you to:

- **A. Identify** one specific event, document, or development
- **B. Explain** how that event/document/development shaped colonial-British relations or independence
- **C. Compare** to a different event/document, OR explain a perspective (Loyalist, Indigenous, enslaved, women) that complicates the standard Patriot narrative

## Common AP Traps

| Trap | Why It Costs Points |
|---|---|
| Treating the Revolution as inevitable from 1754 | The imperial crisis escalated through specific decisions (Stamp Act 1765, Tea Act 1773, Coercive Acts 1774); reconciliation was a live option |
| Ignoring Loyalists | ~20% of colonists; postwar exile and property confiscation are real events |
| Ignoring Indigenous nations | Most Indigenous groups allied with Britain; the Revolution was a disaster for Indigenous sovereignty |
| Ignoring enslaved Africans | Lord Dunmore's 1775 proclamation offered freedom for joining British forces; tens of thousands self-emancipated |
| Quoting documents without HIPP | Required for the complexity point |

> 🔑 Key takeaway: Revolutionary documents do political work. The Declaration's universal language, Common Sense's plain English, Abigail Adams's letter, and the Treaty of Paris's silence on Indigenous nations are each products of specific authors writing for specific audiences in specific moments.
      `
    },
    {
      id: 'apushrev6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Document Sourcing** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which historical situation is most essential for sourcing Thomas Paine's *Common Sense* (January 1776)?",
            options: [
              'Published after fighting began, when many colonists still hoped for reconciliation',
              'Published after the Stamp Act, when colonists first protested parliamentary taxation',
              'Published after the Declaration, when Congress needed support for the war effort',
              'Published after Yorktown, when Americans debated the terms of the peace treaty'
            ],
            correctAnswer: 0,
            explanation: 'Common Sense appeared nine months after Lexington and Concord and six months before the Declaration, when many colonists and members of Congress still hoped to reconcile with Britain; Paine wrote to change their minds. The other situations come either a decade too early or after independence had already been declared.'
          },
          {
            question: 'Which best identifies the point of view of the 1776 Declaration of Independence?',
            options: [
              'Congress delegates speaking for colonial elites',
              'Royal officials explaining British policy to European courts',
              'Ordinary farmers and artisans drafting a petition to the king',
              'Loyalist exiles defending the empire from abroad in London'
            ],
            correctAnswer: 0,
            explanation: 'The Declaration was drafted by Jefferson and revised by the Continental Congress, whose members were mostly wealthy colonial leaders, many of them slaveholders. That point of view helps explain why its universal language coexisted with slavery. It was not a royal, Loyalist or popular petition.'
          }
        ]
      }
    },
    {
      id: 'apushrev6-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — match the document to its author/event**`,
      exercise: {
        questions: [
          {
            question: 'The recently arrived English radical whose January 1776 pamphlet *Common Sense* converted moderate colonists to independence.',
            answer: 'Thomas Paine',
            acceptableAnswers: ['Thomas Paine', 'Paine'],
            hint: 'Wrote in plain English for ordinary readers.'
          },
          {
            question: 'The Massachusetts Patriot wife whose March 1776 letter urged her husband to "Remember the Ladies."',
            answer: 'Abigail Adams',
            acceptableAnswers: ['Abigail Adams', 'A. Adams'],
            hint: 'Wife of John Adams, who was at the Continental Congress in Philadelphia.'
          },
          {
            question: 'The 1783 peace treaty that formally ended the Revolutionary War and established American independence.',
            answer: 'Treaty of Paris',
            acceptableAnswers: ['Treaty of Paris', 'Treaty of Paris 1783', 'Treaty of Paris of 1783'],
            hint: 'Negotiated by Franklin, Adams, and Jay with Britain.'
          }
        ]
      }
    },
    {
      id: 'apushrev6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each document to the HIPP element it most directly tests.**`,
      exercise: {
        dropdowns: [
          {
            label: "Knowing the Declaration of Independence was drafted to recruit French support and justify independence to European powers is most useful for: ___",
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: "Knowing Abigail Adams was a politically literate Patriot wife pressing Revolutionary logic on a male political class is most useful for: ___",
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: "Knowing *Common Sense* was published after Lexington and Concord but before independence had been declared is most useful for: ___",
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          }
        ],
        correctAnswers: ['purpose', 'point of view', 'historical context'],
        hint1: 'Recruiting French support and justifying to European powers names what the document was trying to do — that is purpose.',
        hint2: 'Politically literate Patriot wife pressing logic on a male political class names her position — that is POV.',
        hint3: 'Pamphlet between Lexington/Concord and independence situates the moment — that is context.',
        explanation: 'Each HIPP element does different work: function → purpose; identity → POV; situation → context.'
      }
    },
    {
      id: 'apushrev6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — SAQ format**`,
      exercise: {
        questions: [
          {
            question: 'An SAQ asks: "Briefly explain ONE way an event from 1763–1776 shaped relations between the colonies and Britain." Which response would earn the point?',
            options: [
              'The Stamp Act of 1765 taxed colonists without consent, which led to the Stamp Act Congress and boycotts that forced repeal',
              'The Stamp Act of 1765 was a British law passed by Parliament, and it was one of the most famous events before the Revolution',
              'The Stamp Act of 1765 taxed tea imports, which led colonists to dump tea into Boston Harbor in protest',
              'The Proclamation of 1763 closed western lands, which made colonists in Boston riot against stamp collectors'
            ],
            correctAnswer: 0,
            explanation: 'The strongest response names the event, explains the colonial reaction, and connects it to a change in colonial-British relations. The second only identifies the act, the third confuses the Stamp Act with the Tea Act, and the fourth invents a causal link between the Proclamation and the stamp riots.'
          },
          {
            question: 'Which short answer best demonstrates AP "complexity" about the American Revolution?',
            options: [
              'Patriots won independence, yet many Loyalists and Native nations fought against them',
              'Nearly all colonists united behind independence from the Stamp Act onward',
              'French intervention alone explains independence, since Patriots lost most battles',
              'Enslaved people backed the Patriots after independence ended slavery everywhere'
            ],
            correctAnswer: 0,
            explanation: 'The strongest answer pairs the Patriot victory with the many colonists and Native peoples who opposed it, showing that the Revolution was contested. Colonists were not united, French aid was one cause among several, and independence did not end slavery.'
          }
        ]
      }
    }
  ]
}
