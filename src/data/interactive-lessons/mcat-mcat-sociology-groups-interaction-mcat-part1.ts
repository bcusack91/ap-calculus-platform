export const mcatSocioGroupsPart1Data = {
  topicSlug: 'mcat-sociology-groups-interaction-mcat',
  sections: [
    {
      id: 'grp1-intro',
      type: 'text' as const,
      content: `# Groups & Social Interaction — Deep Dive

**Part 1 of 4 — Statuses, Roles & the Anatomy of Groups**

### Status — Your Address in Social Space

A **status** is a recognized social position; a person holds many at once (a **status set**: daughter, physician, coach, tenant).

- **Ascribed status**: assigned without choice — birth-order, inherited class origin, age, typically race and sex as socially classified.
- **Achieved status**: earned or chosen — physician, spouse, felon (achieved does not mean admirable; it means attained through action).
- **Master status**: the status that dominates how others see you and how you see yourself, overriding the rest — "the doctor" at every dinner party, or a stigmatized label like "ex-convict." A master status can be ascribed or achieved, and (per the deviance lesson) labels fight to become one.

### Roles — The Behavior a Status Rents

A **role** is the bundle of expected behaviors attached to a status; one status carries several audiences' expectations at once (a **role set**: the professor's role toward students, colleagues, deans). Failure modes are the tested content:

| Term | Definition | Example |
|------|-----------|---------|
| **Role conflict** | Incompatible expectations from TWO OR MORE different statuses | Physician-parent paged to the ER during her child's recital |
| **Role strain** | Incompatible expectations WITHIN ONE status | A professor expected to grade rigorously and be nurturing to the same students |
| **Role exit** | Disengaging from a central role and rebuilding identity | Retiring athlete, ex-nun; typically involves doubt → seeking alternatives → departure → building an "ex" identity |

Mnemonic discipline: count the statuses. Two statuses colliding = conflict; one status pulling against itself = strain.

### Groups — More Than People in Proximity

A **group** is people who interact and share identity. A crowd at a bus stop is an **aggregate**; people sharing a trait without interacting (all left-handers) are a **category**. Only groups have norms, roles, and boundaries.

- **Primary group** (Cooley): small, intimate, enduring, valued for its own sake — family, close friends. The self is built here.
- **Secondary group**: larger, impersonal, goal-oriented, often temporary — a project team, a lecture section. Modern life is the migration of functions from primary to secondary groups.
- **In-group/out-group**: the group one identifies with vs. the contrast group; in-group loyalty plus out-group derogation appears with astonishingly minimal provocation (mere symbolic distinctions suffice — the minimal group findings).
- **Reference group**: the group one uses as a standard for self-evaluation — which need not be a group one BELONGS to (premeds judging themselves against physicians). Reference groups drive relative deprivation: satisfaction depends on the comparison standard, not absolute conditions.

### Size Changes Everything — Simmel's Arithmetic

- **Dyad** (2): most intimate and most fragile — one departure destroys it; every member holds veto power.
- **Triad** (3): first group that survives a defection; enables coalitions (two against one), mediation, and majority pressure. Adding the THIRD member changes the group's nature more than any later addition.
- As size grows: stability and capacity rise; intimacy, individual contribution, and accountability fall — the doorway to social loafing (Part 2) and to formal organization (Part 3).`
    },
    {
      id: 'grp1-worked',
      type: 'text' as const,
      content: `### Worked Example — Diagnosing Role Trouble in a Clinical Vignette

**Passage-style problem.** A qualitative study interviews nurses in an intensive care unit. Three excerpts:

- Nurse 1: "The unit protocol says I advocate for the family's wishes, but it also says I follow the attending's orders. Last week those pointed in opposite directions for the same patient — and both duties are part of being THIS patient's nurse."
- Nurse 2: "My shift ran three hours over during a code, and I missed my son's championship game. My family says 'you're always a nurse first.' They're not wrong, and it's tearing at me."
- Nurse 3: "After twenty years I'm leaving the ICU for good. I keep noticing I don't know who I am when someone asks what I do. I've started introducing myself as 'a former ICU nurse' — like the old job is still doing the talking."

**Nurse 1: role strain.** Count the statuses: ONE (ICU nurse for this patient). The incompatible expectations — advocate vs. order-follower — both belong to that single status's role set. The exam's favorite distractor here is "role conflict," which requires a second status; the family-advocacy duty is part of the NURSING role, not a family status of her own.

**Nurse 2: role conflict.** Two statuses — nurse and parent — issue simultaneous, incompatible demands. Note the diagnostic sentence "you're always a nurse first": her occupational status is beginning to operate as a **master status** within her own family, coloring how others frame every other position she holds.

**Nurse 3: role exit.** The sequence matches the documented stages: sustained doubt, departure, and the awkward construction of an "ex" identity — the self still organized around a vacated status ("former ICU nurse" as self-introduction). Expect a question distinguishing role exit (identity reconstruction after leaving a CENTRAL role) from mere job change.

**Group-level extension.** The study also notes that ICU nurses describe their unit as "family," socialize exclusively together, and speak of "floor nurses" with mild disdain. The unit functions as a **primary group** (intimate, valued in itself — unusual for a workplace, which is normally secondary), with "floor nurses" as an **out-group**; if new nurses model themselves on senior ICU staff before earning the role, senior staff are serving as their **reference group** and the modeling is anticipatory socialization — four vocabulary systems meeting in one setting, which is precisely how the MCAT writes its hardest discrete questions.`
    },
    {
      id: 'grp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Statuses, Roles & Groups** 🎯`,
      exercise: {
        questions: [
          {
            question: `A medical student is expected by the same attending to ask questions freely AND to never slow down rounds. The tension she feels is best labeled:`,
            options: [`Role conflict, because two expectations collide`, `Role exit, because she wants to leave rounds`, `Role strain — competing expectations built into a single status (medical student)`, `Status inconsistency`],
            correctAnswer: 2,
            explanation: `Both expectations attach to ONE status: medical student on rounds. Strain is intra-status tension; conflict requires expectations from two DIFFERENT statuses (e.g., student vs. parent). The presence of "two expectations" alone never settles the question — count the statuses issuing them, which is the discrimination the exam is testing.`
          },
          {
            question: `"Convicted felon" often overrides a person's other statuses in hiring, housing, and everyday interaction, despite being attained through the person's own actions. This status is best described as:`,
            options: [`An achieved status functioning as a master status`, `An ascribed status functioning as a reference group`, `A role set`, `A primary group`],
            correctAnswer: 0,
            explanation: `Achieved means attained through action — including disvalued attainments like felon — while master status describes its FUNCTION: dominating others' perceptions and organizing the person's social existence. The pairing shows the two classifications are independent axes. A reference group is a comparison standard, and a role set is one status's bundle of role relationships.`
          },
          {
            question: `Commuters waiting at the same bus stop every morning without interacting or sharing identity constitute a(n) ______, whereas all licensed pilots in a country — sharing a trait but never assembling — constitute a(n) ______.`,
            options: [`primary group; secondary group`, `category; aggregate`, `in-group; out-group`, `aggregate; category`],
            correctAnswer: 3,
            explanation: `An aggregate is people physically together without interaction or shared identity (the bus stop); a category is people sharing an attribute without gathering at all (all pilots). Neither is a group — groups require interaction plus shared identity. Option B reverses the two terms, the standard trap.`
          },
          {
            question: `A hospital's second-year residents evaluate their own competence not against classmates or attendings, but against the idealized standards of a famous surgical program none of them attends. That program is functioning as their:`,
            options: [`Primary group`, `Reference group — a comparison standard for self-evaluation that requires no membership`, `Out-group`, `Dyad`],
            correctAnswer: 1,
            explanation: `Reference groups are the standards against which people measure themselves, and membership is not required — aspiration is enough. This is also why reference-group choice drives relative deprivation: the residents may feel inadequate despite objectively strong performance because the comparison bar is elite. An out-group would be defined by contrast and distancing, not emulation.`
          },
          {
            question: `Simmel argued that adding a third member to a dyad transforms the group more fundamentally than any subsequent addition because the triad is the first group in which:`,
            options: [`Coalitions, mediation, and majority pressure become possible, and the group can survive one member's departure`, `Intimacy reaches its maximum`, `Formal bureaucratic rules become necessary`, `Social loafing disappears`],
            correctAnswer: 0,
            explanation: `The dyad's defining fragility is that either member's exit ends it, and no alliance structure can exist between two people. The third member introduces two-against-one coalitions, a potential mediator role, and group survival beyond any individual — qualitative changes in kind. Intimacy is highest in the dyad and declines with size; bureaucracy and loafing belong to much larger scales.`
          }
        ]
      }
    },
    {
      id: 'grp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Statuses are positions (ascribed vs. achieved — achieved includes disvalued ones); a master status overrides the rest and can be either kind
- Roles are a status's expected behaviors: strain = tension WITHIN one status, conflict = collision BETWEEN statuses (always count the statuses); role exit = rebuilding identity after leaving a central role
- Groups need interaction + shared identity; aggregates share only space, categories only a trait
- Primary groups (intimate, ends in themselves) build the self; secondary groups (impersonal, goal-driven) run modern life; reference groups set the self-evaluation bar without requiring membership — fueling relative deprivation
- Simmel: dyads are intimate but fragile; the triad's third member brings coalitions, mediation, and survivability — size trades intimacy for stability`
    }
  ]
};
