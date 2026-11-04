export const mcatSocioStratPart1Data = {
  topicSlug: 'mcat-sociology-structure-stratification-mcat',
  sections: [
    {
      id: 'strat1-intro',
      type: 'text' as const,
      content: `# Social Structure & Stratification — Deep Dive

**Part 1 of 4 — Theoretical Paradigms: The Lenses Sociology Looks Through**

### Macro vs. Micro — Choose Your Altitude First

Every sociological theory operates at a characteristic scale. **Macro** theories analyze society-wide structures and institutions; **micro** theories analyze face-to-face interaction and meaning-making. MCAT questions often hinge on nothing more than matching a claim to its altitude.

### The Three Core Paradigms

| Paradigm | Scale | Society is... | Key vocabulary |
|----------|-------|---------------|----------------|
| **Functionalism** (Durkheim, Parsons, Merton) | Macro | An organism of interdependent parts, each serving a function that maintains stability | Manifest/latent function, dysfunction, social facts, equilibrium |
| **Conflict theory** (Marx, Weber's extensions) | Macro | An arena where groups compete for scarce resources; institutions preserve the advantage of the powerful | Class conflict, power, inequality, dominant ideology |
| **Symbolic interactionism** (Mead, Blumer, Goffman) | Micro | An ongoing product of everyday interactions; people act toward things based on the MEANINGS those things carry, meanings negotiated through interaction | Symbols, meaning, definition of the situation, labeling |

### Functionalism's Precision Tools

- **Manifest function**: the intended, recognized consequence of a structure (schools transmit knowledge).
- **Latent function**: the unintended, unrecognized consequence (schools provide childcare and matchmaking).
- **Latent dysfunction**: an unintended consequence that DISRUPTS stability (schools reproduce inequality via tracking).
- If an institution endures, ask what it does for the system — even deviance gets a function (Durkheim: it clarifies moral boundaries and builds solidarity).

### Conflict Theory's Core Move

Whatever functionalism calls "stabilizing," conflict theory re-reads as "stabilizing FOR WHOM?" Institutions are not neutral: law, education, and medicine encode the interests of dominant groups, and apparent consensus reflects **ideology** — beliefs that make inequality seem natural. Change, not equilibrium, is the normal state; it arrives through struggle.

### The Interactionist Wager

Society has no existence apart from repeated interactions. The **Thomas theorem** captures the stakes: situations defined as real are real in their consequences — a rumor of bank failure empties a solvent bank. **Social constructionism** extends this: categories that feel natural (race, illness, gender, money's value) are built and maintained by collective agreement, and can be built differently elsewhere.

### Two Supporting Theories

- **Rational choice / social exchange**: interaction is a running ledger of rewards and costs; relationships persist when benefits exceed alternatives (micro, economic logic).
- **Feminist theory**: gender is a fundamental axis of stratification; examines how institutions produce and justify gender inequality (macro and micro variants).

### How the MCAT Tests This

Passages rarely name the paradigm. They describe a researcher's CLAIM, and you infer the lens: talk of stability, cohesion, and purpose = functionalism; talk of power, competing interests, and who benefits = conflict; talk of meanings, labels, and situated interaction = symbolic interactionism. Scale + vocabulary = paradigm.`
    },
    {
      id: 'strat1-worked',
      type: 'text' as const,
      content: `### Worked Example — One Institution, Three Readings

**Problem 1.** Researcher A says admissions testing persists because it sorts students by ability and keeps the education system coordinated and stable. Researcher B says it persists because affluent families buy prep that turns money into "merit," passing position to their children.

- **(a)** At what scale does Researcher A argue, and through which paradigm?
- **(b)** Which paradigm does Researcher B use, and how does B treat "merit"?
- **(c)** Could Researcher A accept Researcher B's data without abandoning A's own paradigm?

**(a) Macro functionalism.** Macro: the account concerns an institution and the system as a whole. The argument form is persistence-because-function (sorting, coordination, stability), and the institution serves the SYSTEM, not any particular group.

**(b) Conflict theory.** The same institution is re-read as a mechanism of social reproduction organized by "who benefits?" "Merit" is analyzed as ideology that legitimizes inherited advantage: it makes a purchased outcome look earned.

**(c) Paradigms as frames.** Yes. A functionalist would classify inequality transmission as a **latent dysfunction** of testing, without abandoning the claim that sorting is its manifest function. Paradigms are interpretive frames, not disjoint facts.

**Problem 2.** Researcher C finds a low score changes how students talk about themselves ("I'm just not a math person"), shaping the courses they attempt. Researcher D finds students prep only while admission benefits exceed study-time costs, quitting once admission is guaranteed.

- **(a)** At what scale does Researcher C work, what is the causal engine, and which paradigm is it?
- **(b)** Which principle from this part does C's score-to-courses chain put into action?
- **(c)** Which theory does Researcher D's account express?
- **(d)** What separates C's account from D's?

**(a) Micro interactionism.** Micro, and the engine is MEANING: a score becomes a label, the label is internalized into self-concept, and the redefined self alters behavior. That makes Researcher C a **symbolic interactionist**.

**(b) Thomas theorem.** A situation defined as real ("I'm not a math person") becomes real in its consequences: the student attempts fewer math courses.

**(c) Exchange logic.** That cost-benefit ledger is **social exchange / rational choice**: behavior continues while rewards exceed costs and stops when the payoff disappears.

**(d) Different engines.** Both are micro, but D's is driven by calculated utility rather than negotiated meaning. Distinguishing those two neighbors is a favorite MCAT discrimination.`
    },
    {
      id: 'strat1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Theoretical Paradigms** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sociologist argues that religious congregations persist in modern cities primarily because they integrate newcomers, reinforce shared norms, and stabilize communities during economic shocks. This account is best classified as:`,
            options: [`Symbolic interactionist, because it concerns shared norms`, `Functionalist, because it explains persistence by function`, `Conflict theory, because economic shocks are mentioned`, `Social constructionist, since religion is a human creation`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Persistence-because-stability is functionalism's signature argument form: the institution endures because it serves system-maintaining functions (integration, norm reinforcement). Mentioning norms does not make an account interactionist — interactionism requires the micro machinery of meaning and interaction, and conflict theory would ask which groups religion advantages, which this account never does.`
          },
          {
            question: `Which claim is the clearest example of a LATENT function, as Merton defined it?`,
            options: [`Hospitals intend to treat illness and succeed in doing so`, `Prisons fail to rehabilitate, undermining their stated purpose`, `Universities publish admission standards to attract applicants`, `Farmers' markets come to serve as hubs of local political organizing`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A latent function is an UNINTENDED and largely unrecognized consequence that nonetheless serves the community — here, produce markets incidentally sustaining civic life. Hospitals treating illness is a manifest function (intended and recognized); prisons failing to rehabilitate is a dysfunction relative to a manifest goal; publishing admission standards is simply an intended practice. The manifest/latent split is about intention and recognition, not about success.`
          },
          {
            question: `The Thomas theorem states that situations defined as real are real in their consequences. Which observation most directly illustrates it?`,
            options: [`A false rumor about a safe vaccine collapses clinic attendance`, `Vaccine side effects occur at the biologically expected rate`, `Wealthier neighborhoods have more clinics per capita`, `A new law raises vaccination by mandating it for school entry`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The theorem's point is that the DEFINITION of the situation — not its objective accuracy — drives behavior and thus produces real outcomes: a false belief empties real clinics. Side effects at the expected rate are a biological fact with no definitional component, clinic density is structural inequality, and the school mandate is behavior driven by formal sanction rather than by a collectively held definition.`
          },
          {
            question: `A researcher documents that occupational-licensing laws, publicly justified as consumer protection, were historically written by incumbent practitioners and consistently restrict market entry by poorer workers. The theoretical framework organizing this analysis is:`,
            options: [`Functionalism, because licensing coordinates the labor market`, `Rational choice theory, because workers weigh licensing costs`, `Conflict theory, because the rationale masks group interests`, `Symbolic interactionism, because licenses are symbols of competence`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `The analytic moves — asking who wrote the rules, who benefits, and treating the public rationale as legitimating ideology — are conflict theory's toolkit. The mere presence of a symbol (a license) does not make analysis interactionist; interactionism would study how licensing changes face-to-face encounters and self-definitions, not how it distributes group advantage.`
          },
          {
            question: `Two micro-level researchers study friendship dissolution. Researcher X finds friendships end when the effort a partner invests exceeds the companionship received relative to alternative friends. Researcher Y finds friendships end after one partner reinterprets shared rituals as signs of obligation rather than affection. How should the two accounts be classified?`,
            options: [`Both are symbolic interactionist, since both are micro-level`, `X is social exchange theory; Y is symbolic interactionism`, `X is functionalist; Y is conflict theory`, `X is symbolic interactionism; Y is social exchange theory`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Sharing the micro scale does not make theories identical — the causal engine differs. X explains behavior through calculated rewards, costs, and comparison to alternatives: exchange/rational choice. Y explains the SAME breakup through a shift in what the rituals MEAN to a participant: interactionism. Calling both interactionist is the standard trap of collapsing all micro theories together; labeling X interactionist and Y exchange reverses the two engines; functionalism and conflict theory are macro frameworks that fit neither account.`
          }
        ]
      }
    },
    {
      id: 'strat1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Altitude first.** Functionalism and conflict theory are macro; symbolic interactionism and exchange theory are micro.
- **Functionalism's tools.** It explains persistence by function: manifest is intended, latent is unintended, dysfunctions disrupt.
- **Conflict asks who benefits.** It re-reads every "stabilizing" institution for whom it serves; official rationales become ideology.
- **Interactionism runs on meaning.** Thomas theorem: a definition acted on is real in its consequences; constructionism: natural-feeling categories are built.

**Common traps**

- **Symbols mean interactionism.** Mentioning norms or a symbol is not enough; interactionism needs meanings negotiated in interaction.
- **Lumping micro theories together.** Exchange theory runs on cost-benefit ledgers; interactionism runs on meanings and labels.
- **Latent means failed.** Manifest vs. latent is about intention and recognition, not success; failing a stated goal is a dysfunction.
- **Requiring a true definition.** The Thomas theorem needs a definition only to be acted on: a false rumor still empties a solvent bank.`
    }
  ]
};
