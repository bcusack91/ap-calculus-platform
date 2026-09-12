export const mcatSocioGroupsPart3Data = {
  topicSlug: 'mcat-sociology-groups-interaction-mcat',
  sections: [
    {
      id: 'grp3-intro',
      type: 'text' as const,
      content: `# Groups & Social Interaction — Deep Dive

**Part 3 of 4 — The Interaction Order: Dramaturgy, Networks & Bureaucracy**

### Goffman's Dramaturgy — Life as Staged Performance

Goffman analyzed everyday interaction with theater's vocabulary. People perform roles for audiences, and the performance is the social reality:

- **Impression management**: the continuous work of controlling how others define you — dress, setting, tone, props (the framed diploma, the white coat).
- **Front stage**: where the performance runs and the audience watches; behavior conforms to the role's script (the server's cheerful table manner).
- **Back stage**: audience excluded; the performer drops the script, rehearses, and repairs (the kitchen, where the same server vents). Back stage is defined RELATIVE to an audience — the kitchen is front stage for impressing the head chef.
- Teams perform together and keep each other's secrets; a **performance disruption** (the doctor visibly panicking) threatens the shared definition of the situation, and audiences often TACTFULLY help repair it — because everyone's definition of reality is at stake.
- **Face-work**: maintaining one's own and others' claimed social value; embarrassment is the emotion of a failed performance.

### Emotion as Managed Labor

**Feeling rules** specify what one SHOULD feel (grief at funerals, joy at weddings); **emotional labor** (Hochschild) is managing feelings as part of paid work — flight attendants manufacturing warmth, medical staff manufacturing calm. Surface acting (faking the display) vs. deep acting (inducing the feeling); chronic mismatch between felt and required emotion predicts burnout — a favorite bridge to health passages.

### Social Networks — The Architecture Between Groups

A **network** is the web of ties linking actors; its structure carries consequences no individual intends:

- **Strong ties** (close friends/family): dense, redundant — everyone knows everyone and the same information circulates.
- **Weak ties** (acquaintances): sparse BRIDGES between clusters. Granovetter's "strength of weak ties": novel information — job leads especially — flows disproportionately through weak ties, because strong-tie clusters already share what they know.
- Network position is capital: brokers who span **structural holes** between clusters control information flow (this is social capital's plumbing, connecting to the stratification lesson).
- Networks also transmit health behaviors, norms, and even emotions across multiple degrees of separation — the empirical base of social contagion studies.

### Formal Organizations & Weber's Bureaucracy

Modern goals are pursued through **formal organizations** — deliberately designed secondary groups. Weber's **ideal type** of bureaucracy (an analytic model, not praise) has five tested features:

1. **Division of labor** — specialized offices
2. **Hierarchy of authority** — each office supervised by a higher one
3. **Written rules and records** — impersonal procedures outlive persons
4. **Impersonality** — cases treated by category, not by relationship
5. **Employment by technical qualification** — credentials, careers, promotion by merit/seniority

The design goal is predictability and efficiency; authority is rational-legal (obeying the OFFICE). But the same features generate the tested pathologies:

- **Trained incapacity / goal displacement**: rules become ends in themselves ("red tape"); officials enforce procedure even when it defeats the mission.
- **The iron cage** (Weber): rationalization traps modern life in efficiency logic, draining meaning.
- **McDonaldization** (Ritzer's update): efficiency, calculability, predictability, and control through automation spreading from fast food to education and medicine — with irrational consequences (dehumanization) as the fifth act.
- **Iron law of oligarchy** (Michels): even democratic organizations drift toward rule by a small leadership elite, because day-to-day control requires delegation and expertise concentrates.

### Interaction Meets Organization

The two halves of this part are one story: bureaucracies script front-stage performances (service smiles, standardized phrases — McDonaldization of emotion), while back stages and informal networks are where the ACTUAL work-arounds, norms, and loyalties live. Studies of hospitals repeatedly find patient care coordinated as much through informal ties as through the formal hierarchy — the exam expects you to see both layers in any organizational vignette.`
    },
    {
      id: 'grp3-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Hospital Through Both Lenses

**Passage-style problem.** An ethnographer spends six months in a teaching hospital. Condensed field notes:

1. "At bedside, residents speak in measured, confident tones and never disagree with attendings in front of patients. In the workroom, the same residents debate diagnoses heatedly, mock the electronic chart's phrasing requirements, and rehearse how to present bad news."
2. "Nurses say the official transfer protocol takes hours, so experienced nurses call friends on other floors to arrange transfers informally; new nurses without such contacts wait for the paperwork."
3. "The billing office rejected an urgent-scan request because the form used last year's code — staff acknowledged the scan was medically necessary but said 'the system can't process it without the right code.'"
4. "Job-seeking interns report that positions come less from close friends — who know the same openings they do — than from former rotation acquaintances at other hospitals."

**Note 1 — front stage and back stage.** Bedside is the front stage: a TEAM performance (residents protecting the attending's authority before the audience) sustaining the definition "this team is unified and certain." The workroom is back stage: script dropped, rehearsals ("how to present bad news") and repairs run openly. The rehearsal detail is diagnostic — back stage is where performances are PREPARED, not merely where people relax.

**Note 2 — informal networks doing the organization's real work.** The formal structure (protocol) is slow; strong informal ties bypass it. Note the stratifying consequence: nurses WITHOUT network capital wait — network position converts directly into effectiveness, an inequality invisible on the organization chart.

**Note 3 — goal displacement.** The rule (correct code) has displaced the goal (necessary care): impersonal proceduralism, a written-records requirement, and hierarchy all functioning AS DESIGNED, yet producing an outcome everyone recognizes as irrational. This is the Weberian pathology answer, not "employee laziness" — the individuals are following the system faithfully; the defect is structural.

**Note 4 — the strength of weak ties.** Close friends share a redundant information pool; acquaintances bridge to OTHER clusters where unknown openings live. Granovetter's finding, reproduced in miniature.

**Integration question to expect:** "Which observation best illustrates that bureaucratic dysfunction is structural rather than attitudinal?" Answer: Note 3 — staff AGREED the scan was needed and still could not act; the block lay in the rule system. Distractors will point to Note 1 (that is dramaturgy, not dysfunction) or Note 2 (that is informal adaptation — evidence the formal structure is inadequate, but the note documents a work-around, not a rule defeating its own goal)."`
    },
    {
      id: 'grp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Dramaturgy, Networks & Bureaucracy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A funeral director maintains solemn composure with grieving families, then jokes casually with colleagues in the preparation room, where families never enter. Goffman would describe the preparation room as:`,
            options: [`A total institution`, `The back stage — a region closed to the audience where the front-stage performance is dropped and maintained`, `An out-group`, `A reference group`],
            correctAnswer: 1,
            explanation: `Regions are defined by audience access: with families (the audience) present, the director performs the solemn front-stage role; the preparation room excludes that audience, permitting out-of-character behavior and performance maintenance. Note the relativity — if the boss visited the preparation room, it would become front stage for THAT audience. The other terms belong to different frameworks entirely.`
          },
          {
            question: `A flight attendant reports that she no longer merely fakes warmth toward difficult passengers but actively conjures sympathetic thoughts until she genuinely feels warm — yet after years of this she feels estranged from her own emotions. Hochschild would classify her technique and her risk as:`,
            options: [`Surface acting; groupthink`, `Impression management; role exit`, `Informational influence; deindividuation`, `Deep acting; the burnout and self-estrangement costs of sustained emotional labor`],
            correctAnswer: 3,
            explanation: `Inducing the required feeling itself — rather than just arranging the outward display — is deep acting, the more thorough form of emotional labor. Hochschild's central warning is exactly the reported outcome: chronically manufacturing feelings for an employer can estrange workers from their own emotional signals and feed burnout. Surface acting is the display-only strategy she moved beyond.`
          },
          {
            question: `In job-search studies, new positions are disproportionately found through acquaintances rather than close friends. The structural explanation is that:`,
            options: [`Weak ties bridge otherwise disconnected clusters, carrying novel information that dense strong-tie networks — where everyone already knows the same things — cannot provide`, `Acquaintances feel more obligation to help than friends do`, `Close friends actively withhold job information as competition`, `Strong ties transmit information more slowly per interaction`],
            correctAnswer: 0,
            explanation: `Granovetter's argument is structural, not motivational: strong-tie clusters are dense and redundant, so their information pool is shared and stale; weak ties are the bridges into other clusters where different information circulates. Friends are typically MORE willing to help — they simply know the same openings you do. Speed per interaction is not the operative variable; novelty of the reachable information is.`
          },
          {
            question: `A benefits clerk denies an application because one signature sits in the wrong box, although the applicant is present, indisputably eligible, and could sign correctly on the spot. The clerk agrees it is absurd but says rules forbid on-site corrections. This scenario BEST illustrates:`,
            options: [`Charismatic authority`, `The iron law of oligarchy`, `Goal displacement — bureaucratic rules, designed as means, being enforced as ends even when they defeat the organization's purpose`, `Social loafing by the clerk`],
            correctAnswer: 2,
            explanation: `The rule (correct signatures ensure valid applications) exists to serve a goal (benefits to the eligible); enforcing it here defeats that goal while the clerk complies faithfully — the definition of goal displacement, a structural pathology of rule-governed impersonality. No elite capture (oligarchy), personal magnetism, or effort-withholding is involved; the clerk is working exactly as the system directs.`
          },
          {
            question: `A grassroots organization founded on radical internal democracy grows to 200,000 members; a decade later, a small permanent staff sets the agenda, controls information, and runs uncontested elections. Michels would say this outcome:`,
            options: [`Proves the founders secretly wanted power`, `Resulted from groupthink among ordinary members`, `Could have been avoided by stronger shared values alone`, `Illustrates the iron law of oligarchy — large-scale organization itself concentrates control in a leadership few, regardless of democratic ideals`],
            correctAnswer: 3,
            explanation: `Michels's claim is structural inevitability, not hidden motive: coordinating a mass organization requires full-time delegation, which concentrates expertise, information, and agenda control in the delegates — who then entrench. Because the mechanism is organizational scale itself, ideals and values do not immunize; that is what makes the "law" iron. Member psychology (option B) is not the engine.`
          }
        ]
      }
    },
    {
      id: 'grp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Dramaturgy: interaction is teamed performance — impression management on the front stage, script-dropping and rehearsal on the (audience-relative) back stage; face-work and tact keep shared definitions of reality intact
- Feeling rules script what to feel; emotional labor sells it — surface acting fakes the display, deep acting manufactures the feeling, and chronic mismatch predicts burnout
- Networks: strong ties give redundant support, weak ties bridge clusters and carry novel information (jobs!); spanning structural holes is social capital in action
- Weber's bureaucracy (division of labor, hierarchy, written rules, impersonality, technical qualification) buys predictability at the price of goal displacement, the iron cage, and McDonaldization's dehumanizing rationality
- Michels: scale itself breeds oligarchy; and in every organizational vignette, read BOTH layers — the formal chart and the informal network doing the real coordination`
    }
  ]
};
