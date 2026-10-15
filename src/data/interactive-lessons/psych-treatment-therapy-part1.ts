export const psychTreatmentPart1Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 1 of 7 — The Treatment Landscape: Trends, Formats, and Ethics**

> 🔑 **Key Concept:** Every treatment for a psychological disorder answers three questions: **what** is being changed (thoughts, behaviors, feelings, or brain chemistry), **where and with whom** it happens (hospital or community, alone or in a group), and **by what rules** the professional must act (ethical principles set by the American Psychological Association). This part builds that frame; Parts 2 to 5 fill in the specific therapies.

### Topics in This Part

| Section | What you will be able to do |
|---------|-----------------------------|
| Two families of treatment | Classify a treatment as a psychotherapy or a biomedical therapy |
| From asylums to community care | Explain deinstitutionalization and today's decentralized, combined treatment |
| Individual vs. group formats | Compare individual, group, family, and self-help formats |
| Ethics in therapy | Apply nonmaleficence, fidelity, integrity, and respect for people's rights and dignity |

## Two Families of Treatment

**Psychotherapy** is treatment that uses psychological techniques: a trained professional and a client talk, practice skills, and change patterns of thinking, feeling, and behaving. **Biomedical therapy** changes the body directly, through medication or through procedures that act on the brain.

| | Psychotherapy | Biomedical therapy |
|---|---|---|
| **Comes from** | Psychodynamic, humanistic, behavioral, and cognitive perspectives | The biological perspective |
| **Assumes the problem lies in** | Unconscious conflicts, blocked growth, learned behaviors, or distorted thinking | Brain chemistry, brain circuits, or other physical processes |
| **Examples** | Free association, person-centered therapy, systematic desensitization, cognitive restructuring | Antidepressants, antipsychotics, lithium, ECT, TMS |
| **Covered in** | Parts 2, 3, and 4 | Part 5 |

Many professionals draw on more than one perspective at once. A therapist might use behavioral exposure exercises in one session and challenge a client's catastrophic thoughts in the next; a psychiatrist might prescribe an antidepressant and refer the same person to a cognitive-behavioral therapist.

### Who provides treatment?

| Professional | Typical training | Can prescribe medication? |
|---|---|---|
| **Psychiatrist** | Medical degree plus specialized training in mental health | Yes; psychiatrists are physicians |
| **Clinical or counseling psychologist** | Doctoral degree in psychology; trained in assessment, research, and psychotherapy | Generally no in most of the United States |
| **Licensed counselor or clinical social worker** | Master's degree plus supervised clinical practice | No |

> 🔑 **AP Connection:** The exam rarely asks about job titles, but it often asks you to **classify a treatment by perspective**. Ask yourself what the technique is trying to change. If it changes a neurotransmitter or the brain directly, it is biomedical. If it changes thoughts, behaviors, or self-understanding, it is a psychotherapy.
      `
    },
    {
      id: 'treatment-therapy-p1-s2-history',
      type: 'text' as const,
      content: `
## From Asylums to Community Care

For much of the 19th and early 20th centuries, people with severe psychological disorders in the United States were often housed for years in large state hospitals and asylums. Many of these institutions were crowded, and treatment was limited.

### Deinstitutionalization

**Deinstitutionalization** is the large-scale release of people from psychiatric hospitals and asylums into the community. The CED identifies its main driver: **the increased use and effectiveness of psychotropic medication**. Once antipsychotic and antidepressant medications let many people manage their symptoms, long hospital stays were no longer the only option, and hospitals released massive numbers of people in the **late 20th century**.

| Era | Typical setting | What changed |
|---|---|---|
| Before the mid-20th century | Large state hospitals and asylums; stays could last years | Few effective treatments existed for severe disorders |
| Mid-20th century | Psychotropic medications enter wide use | Many people could now manage symptoms outside a hospital |
| Late 20th century | **Deinstitutionalization**: patient populations in state hospitals fell sharply | Care shifted toward outpatient and community settings |
| Today | **Decentralized** care in clinics, private practices, primary care offices, schools, and online | Treatment often **combines medication with psychological therapy** |

### What "decentralized" means

Decentralized treatment is spread across many smaller settings instead of concentrated in one large institution. A person might see a psychiatrist at one office for medication checks, a psychologist at another for weekly therapy, and attend a peer support group in the evening. Short hospital stays still happen during a crisis, but the goal is to return the person to everyday life as quickly and safely as possible.

### Combined treatment

Therapists now prefer to treat many disorders with a **combination** of medication and psychological therapy. The two act on different parts of the problem:

- Medication can reduce symptoms such as severe low mood or hallucinations enough for a person to engage in therapy.
- Psychotherapy teaches skills, such as challenging negative thoughts or facing feared situations, that the person keeps after therapy ends.

### Unintended consequences

Deinstitutionalization was not a simple success story. Community services did not always grow fast enough to support everyone released from hospitals. Some people lost access to housing or steady care, and critics link the shift to later problems such as homelessness among some people with severe, untreated disorders. A strong AP answer can describe both the benefit (more freedom and community-based treatment) and the cost (gaps in support).

> 🔑 **AP Connection:** If a question asks **why** deinstitutionalization happened, the CED answer is psychotropic medication. If it asks what treatment looks like **now**, the answer is decentralized care, often combining medication and psychotherapy.
      `
    },
    {
      id: 'treatment-therapy-p1-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Trends in Treatment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A historian asks why state psychiatric hospitals in the United States released massive numbers of people in the late 20th century. According to the AP Psychology framework, which factor best explains this shift?",
            options: [
              "The growing use and success of psychotropic medication",
              "A ruling that psychotherapy could be given only in private offices",
              "Evidence that most severe disorders resolve without treatment",
              "The replacement of medication with psychoanalysis in hospitals"
            ],
            correctAnswer: 0,
            explanation: "Deinstitutionalization followed the increased use and effectiveness of psychotropic medication, which let many people manage symptoms outside a hospital. Severe disorders do not usually resolve on their own, and psychoanalysis did not replace medication in hospitals."
          },
          {
            question: "Marisol, who has major depressive disorder, sees a psychiatrist at one clinic every month for medication and a psychologist at another office every week for talk therapy. Her treatment best illustrates which current trend?",
            options: [
              "Institutional care that keeps every service inside one hospital",
              "Biomedical care that replaces talk therapy with medication",
              "Decentralized care that pairs medication with talk therapy",
              "Insight therapy that avoids medication during the treatment"
            ],
            correctAnswer: 2,
            explanation: "Marisol receives care in several community settings rather than one institution, and she combines medication with psychotherapy. That is the decentralized, combined treatment the CED describes as the current preference."
          },
          {
            question: "Which of the following treatments comes from the biological perspective?",
            options: [
              "Transcranial magnetic stimulation",
              "Systematic desensitization",
              "Rational-emotive behavior therapy",
              "Person-centered therapy"
            ],
            correctAnswer: 0,
            explanation: "Transcranial magnetic stimulation acts on the brain directly with magnetic fields, so it is biomedical. Systematic desensitization is behavioral, rational-emotive behavior therapy is cognitive-behavioral, and person-centered therapy is humanistic."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p1-s4-formats',
      type: 'text' as const,
      content: `
## Individual vs. Group Formats

The same therapeutic approach can be delivered in different formats. The CED asks you to explain how **group therapy differs from individual therapy**.

| Format | Who is in the room | Main advantages | Main limits |
|---|---|---|---|
| **Individual therapy** | One client and one therapist | Full attention on one person; plan tailored to that person; strongest privacy | Costs more per person; no chance to practice skills with peers in session |
| **Group therapy** | One or two therapists and several clients who often share a similar concern | Lower cost per person; clients see that others share their problem; feedback and support from peers; a safe place to practice social skills | Less individual attention; therapist cannot guarantee that other members keep what is said private; some clients feel too anxious to speak |
| **Family therapy** | A therapist and members of one family | Treats the family as a **system**: changing how members communicate can reduce one member's symptoms | Requires several people to commit; members may disagree about the goal |
| **Self-help and support groups** | People who share a problem, usually without a professional leader | Free or low cost; long-term peer support; widely available | No trained professional; quality varies; not a substitute for treatment of a severe disorder |

### Why groups can help

Group members often report relief at discovering that **they are not the only one** with a problem. Groups also turn the session into a practice ground. A client with social anxiety can rehearse starting a conversation with real people, not just describe the situation to a therapist. Hearing how another member handled a setback can model a new strategy.

### Worked Case: choosing a format

**Case.** Devon, 34, recently lost his job and feels isolated. He has mild depressive symptoms, a tight budget, and says, "Everyone else seems to have it together." A second client, Priya, 27, has a history of trauma she has never told anyone and says she could not speak about it in front of strangers.

**Step 1: Identify the needs.** Devon's needs are cost, connection, and seeing that others struggle too. Priya's needs are privacy and close, tailored attention.

**Step 2: Match needs to format strengths.** Group therapy is lower in cost per person and directly counters Devon's belief that he is alone. Individual therapy gives Priya the privacy and focus she needs; confidentiality is easier to protect with one therapist than with several group members.

**Step 3: Note the limit.** If Devon's symptoms became severe, a group alone might not give him enough individual attention, and his plan would need adjusting.

**Conclusion.** Group therapy fits Devon; individual therapy fits Priya. Neither format is better in general. The right choice depends on the client.

> 🔑 **AP Connection:** A strong comparison names a specific advantage of the group format (lower cost, social support, realizing others share the problem, practicing social skills) **and** a specific limit (less individual attention, weaker guarantee of confidentiality). "Group therapy is cheaper" alone is only half an answer.
      `
    },
    {
      id: 'treatment-therapy-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Format** 🧩

Choose the treatment format each description shows.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Eight clients with social anxiety meet weekly with one psychologist and practice introducing themselves to each other. This is _____.',
            options: ['individual therapy', 'group therapy', 'family therapy', 'a self-help group']
          },
          {
            label: 'A therapist meets with a teenager, both parents, and a younger sibling to change how the household handles conflict. This is _____.',
            options: ['group therapy', 'a self-help group', 'family therapy', 'individual therapy']
          },
          {
            label: 'Adults recovering from alcohol use meet in a church basement, with no professional leader, to share their progress. This is _____.',
            options: ['a self-help group', 'family therapy', 'individual therapy', 'group therapy']
          }
        ],
        correctAnswers: ['group therapy', 'family therapy', 'a self-help group'],
        hint1: 'Several unrelated clients plus a professional leader is the classic group format.',
        hint2: 'When the people in the room belong to one household, the family is treated as a system.',
        hint3: 'No trained leader means the meeting is peer-run.',
        explanation: 'Unrelated clients led by a psychologist form a therapy group. A household meeting together with a therapist is family therapy. A peer-led meeting without a professional is a self-help or support group.'
      }
    },
    {
      id: 'treatment-therapy-p1-s6-ethics',
      type: 'text' as const,
      content: `
## Ethics in Therapy

Psychologists who treat clients must follow ethical principles established by the **American Psychological Association (APA)**. The CED names four you must know.

| Principle | What it requires | What it looks like in therapy | A violation |
|---|---|---|---|
| **Nonmaleficence** | Do no harm; avoid or minimize harm to clients | Choosing treatments with research support; stopping a technique that worsens symptoms; referring a client whose needs exceed the therapist's training | Continuing an exposure exercise after a client becomes severely distressed and asks to stop |
| **Fidelity** | Be trustworthy and faithful to professional responsibilities; avoid conflicts of interest | Keeping commitments, showing up for scheduled sessions, avoiding multiple relationships such as becoming a client's business partner or friend | Hiring a current client to work for the therapist's company |
| **Integrity** | Be honest, accurate, and truthful | Describing a treatment's evidence honestly; billing accurately; never claiming credentials one does not hold | Promising a client a "guaranteed cure" for anxiety in three sessions |
| **Respect for people's rights and dignity** | Protect privacy, confidentiality, and self-determination; respect cultural and individual differences | Obtaining **informed consent**; keeping session content **confidential**; letting the client make informed choices about treatment | Discussing a client's diagnosis with the client's employer without permission |

### Informed consent and confidentiality

- **Informed consent:** before treatment, the client learns what the therapy involves, its likely benefits and risks, the fees, other options, and the limits of confidentiality, then agrees voluntarily. A client may withdraw at any time.
- **Confidentiality:** what a client says in therapy stays private. It has legal limits: a therapist may need to break confidentiality when a client poses a serious risk of harm to self or others, or when child abuse must be reported. Clients are told these limits at the start.

### Worked Case: naming the principle

**Case.** Dr. Lee treats Sam for panic disorder. Sam owns a restaurant and offers Dr. Lee a discount on catering for her daughter's wedding if she will "go a little easier" on the homework assignments. Dr. Lee also tells Sam that a new technique she read about online "works for everyone," although she has never seen any research on it.

**Step 1: Separate the actions.** There are two issues: a proposed business arrangement with a current client, and an inaccurate claim about a technique.

**Step 2: Match each to a principle.** Accepting the catering deal would create a conflict of interest and a multiple relationship, a **fidelity** problem. Claiming the technique works for everyone without evidence is a dishonest statement, an **integrity** problem.

**Step 3: Check for harm.** If the new technique were untested and risky, using it could also violate **nonmaleficence**.

**Conclusion.** Dr. Lee should decline the arrangement, describe the new technique accurately (or not use it), and stick with treatments that have research support.

> 🔑 **AP Connection:** These are ethics for **treatment**. The AAQ asks about ethics in **research** (informed consent, debriefing, confidentiality, protection from harm). The ideas overlap, so learn both lists and read the stem to see which setting it describes.
      `
    },
    {
      id: 'treatment-therapy-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Ethical Principles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A therapist agrees to become the business partner of a client she is currently treating for depression. Which APA ethical principle does this arrangement most directly violate?",
            options: [
              "Integrity",
              "Fidelity",
              "Nonmaleficence",
              "Respect for people's rights and dignity"
            ],
            correctAnswer: 1,
            explanation: "Fidelity requires trustworthiness and avoiding conflicts of interest, and a business partnership with a current client creates a multiple relationship. Integrity concerns honesty, and the arrangement involves no false statement."
          },
          {
            question: "A counselor mentions a client's diagnosis to the client's soccer coach, without asking the client, so the coach can 'be more understanding.' Which principle has the counselor violated?",
            options: [
              "Fidelity, by keeping a promise to the coach instead of the client",
              "Integrity, by giving the coach an inaccurate account of the diagnosis",
              "Nonmaleficence, by choosing a treatment that lacks research support",
              "Respect for rights and dignity, by breaking the client's confidentiality"
            ],
            correctAnswer: 3,
            explanation: "Sharing a diagnosis without permission breaks confidentiality, which falls under respect for people's rights and dignity. The counselor's account was not described as inaccurate, and no treatment choice is involved."
          },
          {
            question: "Before a first session, a psychologist explains what therapy will involve, its likely benefits and risks, the fees, and when confidentiality might have to be broken, and the client then agrees to begin. This procedure is called",
            options: [
              "debriefing",
              "informed consent",
              "a therapeutic alliance",
              "nonmaleficence"
            ],
            correctAnswer: 1,
            explanation: "Explaining the treatment and its limits so the client can agree voluntarily is informed consent. Debriefing happens after a research study, and the therapeutic alliance is the working relationship that develops during therapy."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p1-s8-wrap',
      type: 'text' as const,
      content: `
## Putting Part 1 Together

| Big idea | One-sentence version |
|---|---|
| Two families of treatment | Psychotherapies change thoughts, feelings, and behaviors; biomedical therapies change the brain and body directly. |
| Deinstitutionalization | Psychotropic medication allowed massive numbers of people to leave hospitals and asylums in the late 20th century. |
| Treatment today | Care is decentralized, often combining medication with psychological therapy. |
| Group vs. individual | Groups offer lower cost, peer support, and skill practice; individual therapy offers more attention and stronger privacy. |
| Ethics | Nonmaleficence, fidelity, integrity, and respect for people's rights and dignity guide every therapist. |

### Looking ahead

| Part | Focus |
|---|---|
| 2 | Insight therapies: psychodynamic and person-centered, plus hypnosis |
| 3 | Behavior therapies built on applied behavior analysis |
| 4 | Cognitive and cognitive-behavioral therapies, including DBT and REBT |
| 5 | Biomedical treatments: medication, ECT, TMS, and psychosurgery |
| 6 | Evidence that therapy works, plus AAQ and EBQ practice |
| 7 | Synthesis: matching perspectives, techniques, and cases |

For the symptoms of the disorders these treatments target, see the Mood and Psychotic Disorders lesson.
      `
    }
  ]
}
