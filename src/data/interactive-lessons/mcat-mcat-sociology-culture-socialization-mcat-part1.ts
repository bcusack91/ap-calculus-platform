export const mcatSocioCulturePart1Data = {
  topicSlug: 'mcat-sociology-culture-socialization-mcat',
  sections: [
    {
      id: 'cult1-intro',
      type: 'text' as const,
      content: `# Culture & Socialization — Deep Dive

**Part 1 of 4 — Culture: Norms, Values & Cultural Dynamics**

### What Culture Is

**Culture** is a group's entire shared way of life — transmitted socially, not genetically. Split it into:

- **Material culture**: physical objects a group creates and uses (tools, clothing, architecture, technology).
- **Nonmaterial (symbolic) culture**: the intangibles — language, beliefs, values, norms, rituals. The MCAT's default question: classify an item correctly (a wedding RING is material; the meaning of marriage is nonmaterial).

### The Normative Ladder

**Values** are a culture's abstract standards of what is good and desirable (freedom, achievement, family honor); **beliefs** are what a culture holds to be true; **norms** are the enforceable rules translating values into behavior. Norms come in grades of seriousness:

| Norm type | Violation feels... | Example | Typical sanction |
|-----------|--------------------|---------|------------------|
| **Folkway** | Rude, odd | Facing backwards in an elevator | Stares, mild disapproval |
| **More** (MOR-ay) | Immoral | Adultery, cheating on an exam | Serious condemnation, ostracism |
| **Taboo** | Unthinkable, revolting | Incest, cannibalism | Revulsion, expulsion, criminalization |
| **Law** | Illegal (formalized norm) | Theft | State-administered punishment |

**Sanctions** enforce norms: positive (rewards) or negative (punishments), formal (administered by institutions — diplomas, fines) or informal (administered by anyone — smiles, gossip). A police ticket is a formal negative sanction; an eye-roll is an informal negative one.

### Language — Culture's Operating System

Language transmits culture across generations and, per the **Sapir-Whorf hypothesis** (linguistic relativity), the categories of one's language INFLUENCE habitual thought and perception. The MCAT expects the weak version (language shapes and nudges cognition), not the discredited strong version (language rigidly determines what can be thought).

### Cultures Within and Against

- **Subculture**: a group with distinctive norms and values coexisting inside the dominant culture (medical students, gamers, immigrant enclaves).
- **Counterculture**: a group whose norms and values actively OPPOSE the dominant culture's (militant separatists, 1960s communes).
- **Assimilation**: minority group absorbs the dominant culture, shedding distinctiveness; **multiculturalism** endorses coexisting distinct cultures; **amalgamation** melts groups into a genuinely new blend. A "melting pot" describes amalgamation; a "salad bowl" describes multiculturalism.

### Judging Across Cultures

- **Ethnocentrism**: evaluating other cultures by the standards of your own — usually finding them inferior. Functional for in-group cohesion; corrosive for intergroup relations and for science (it biases observation).
- **Cultural relativism**: methodological stance of understanding practices within THEIR OWN cultural context before judging. It is a research discipline, not a claim that all practices are morally equal.
- **Culture shock**: disorientation when immersed in an unfamiliar culture — the subjective experience of losing one's taken-for-granted norms.

### Culture in Motion

- **Innovation** (discovery + invention), **diffusion** (spread of cultural elements between groups), and **globalization** (worldwide integration accelerating diffusion) change cultures.
- **Culture lag** (Ogburn): material culture changes FASTER than nonmaterial culture — technology arrives before the norms for using it (gene editing exists; consensus ethics for it does not). The mismatch is a reliable exam scenario.`
    },
    {
      id: 'cult1-worked',
      type: 'text' as const,
      content: `### Worked Example — Classifying Culture Under Pressure

**Passage-style problem.** An anthropology team observes a fishing village. Excerpts from their field notes:

1. "Villagers consider it disgraceful — though not criminal — for an able adult to refuse a share of a rescue expedition; two men who declined last year are still excluded from communal feasts."
2. "Outboard motors arrived eight years ago and every boat now has one, but disputes over who may fish which waters are still argued under rules written for paddled canoes; conflicts have tripled."
3. "A junior researcher wrote in her notes that the villagers' food-sharing rules are 'primitive and inefficient compared to proper markets.' The team lead struck the sentence and asked her to first document what the sharing rules accomplish within village life."
4. "Teenagers who study in the mainland city return wearing city clothes and using city slang, but still attend net-mending circles; villagers call them 'the city kids' with a mix of pride and teasing."

**Note 1** describes a **more**, not a folkway: violation triggers moral condemnation and durable exclusion (a strong informal negative sanction), yet no formal law is involved. The grading of norms is by the REACTION to violation, not by the topic of the rule.

**Note 2** is textbook **culture lag**: material culture (motors) outran nonmaterial culture (allocation norms), and the gap itself generates conflict. The tripled disputes are the measurable consequence the exam likes to ask about.

**Note 3** contrasts **ethnocentrism** (judging sharing rules by market standards) with **cultural relativism** as a METHOD — the team lead demands the practice be understood within its own context first. Note that the lead issued no moral verdict; relativism here is a discipline of observation, which is why it belongs in a scientific protocol.

**Note 4** shows a **subculture** forming (city-schooled youth with distinctive dress and slang) that remains integrated — they still mend nets. If the returning students organized to abolish communal fishing rights, THAT would be a counterculture: the line is active opposition to dominant norms, not mere distinctiveness.

**Strategy transfer.** Every classification above turned on a functional criterion — how violations are punished, which culture component moved first, whose standards judge, whether difference opposes or coexists. Memorizing definitions without these criteria is what the wrong answers are priced to exploit.`
    },
    {
      id: 'cult1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Culture, Norms & Cultural Dynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Wearing pajamas to a formal lecture draws amused glances; falsifying research data ends careers and triggers institutional investigation. In normative terms, the first act violates a ______ while the second violates a ______.`,
            options: [`taboo; folkway`, `more; law`, `law; taboo`, `folkway; more (also formally sanctioned)`],
            correctAnswer: 3,
            explanation: `Norm grades are read off the reaction: mild amusement marks a folkway (etiquette-level rule), while moral outrage plus institutional punishment marks a more — here one that institutions also formally sanction. Data falsification is not generally a taboo (taboos provoke visceral revulsion at the very thought, like incest) nor typically a criminal law matter, and pajamas break no law.`
          },
          {
            question: `A society develops inexpensive facial-recognition cameras years before any shared norms about consent, privacy, or acceptable use develop; conflict over the devices surges. Ogburn would call this period:`,
            options: [`Cultural relativism`, `Culture lag — nonmaterial culture failing to keep pace with material change`, `Culture shock`, `Counterculture formation`],
            correctAnswer: 1,
            explanation: `Culture lag is precisely this asymmetry: material culture (technology) changes quickly while the nonmaterial culture regulating it — norms, laws, ethics — adapts slowly, and the gap produces social conflict. Culture shock is an individual's disorientation in an unfamiliar culture, relativism is a methodological stance, and no oppositional group is described.`
          },
          {
            question: `A study finds that speakers of a language with obligatory grammatical marking of cardinal directions (rather than left/right) perform far better at dead-reckoning navigation, though they remain fully capable of learning left/right concepts. This finding best supports:`,
            options: [`The weak (relativist) version of the Sapir-Whorf hypothesis: linguistic categories shape habitual cognition without strictly determining what can be thought`, `The strong version of the Sapir-Whorf hypothesis: language determines the limits of possible thought`, `Ethnocentrism in the researchers`, `The claim that language is material culture`],
            correctAnswer: 0,
            explanation: `Enhanced habitual performance shows language INFLUENCES cognition (weak version); the speakers' preserved ability to learn left/right concepts directly refutes determinism (strong version), which would predict such concepts are unthinkable for them. Language is a paradigm case of nonmaterial culture, and no cross-cultural value judgment by the researchers appears.`
          },
          {
            question: `Group A maintains distinctive religious dress and dietary rules while participating fully in national schools, employment, and politics. Group B arms itself, rejects the legitimacy of the state, and works to replace the constitutional order. Sociologically:`,
            options: [`Both are countercultures, since both differ from the mainstream`, `A is a counterculture; B is a subculture`, `A is a subculture (distinct but coexisting); B is a counterculture (norms in active opposition to the dominant culture)`, `Both are subcultures, since both have shared norms`],
            correctAnswer: 2,
            explanation: `The subculture/counterculture line is drawn at OPPOSITION, not distinctiveness: Group A layers distinctive practices atop participation in dominant institutions, while Group B's defining norms reject and seek to overturn the dominant order. Difference alone never makes a counterculture — that is the trap in option A.`
          },
          {
            question: `A medical researcher initially dismisses a community's postpartum food restrictions as "ignorant superstition," then is instructed to instead document the practice's origins, internal logic, and effects before drawing conclusions. The instruction converts which stance into which?`,
            options: [`Culture shock into assimilation`, `Multiculturalism into amalgamation`, `Cultural relativism into ethnocentrism`, `Ethnocentrism into cultural relativism as a methodological discipline`],
            correctAnswer: 3,
            explanation: `Judging the practice by the researcher's own culture's standards — and finding it deficient — is ethnocentrism; suspending that judgment to understand the practice within its own context is cultural relativism functioning as research method. The instruction does not require endorsing the practice, which is why relativism is compatible with later evidence-based health recommendations.`
          }
        ]
      }
    },
    {
      id: 'cult1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Culture = material (objects) + nonmaterial (language, beliefs, values, norms); values are ideals, norms are enforceable rules
- Grade norms by the reaction to violation: folkways (rudeness) → mores (immorality) → taboos (revulsion); laws formalize norms; sanctions are positive/negative and formal/informal
- Sapir-Whorf on the MCAT = weak version: language shapes habitual thought, never rigidly determines it
- Subculture coexists, counterculture opposes; assimilation absorbs, multiculturalism preserves (salad bowl), amalgamation blends (melting pot)
- Ethnocentrism judges by one's own standards; cultural relativism is a method of understanding in context; culture lag = material change outrunning norms, generating conflict`
    }
  ]
};
