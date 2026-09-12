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
- Functionalists explain persistence: if an institution endures, ask what it does for the system — even deviance gets a function (Durkheim: it clarifies moral boundaries and builds solidarity).

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

**Passage-style problem.** Three sociologists study the rise of standardized college-admissions testing.

- Researcher A argues testing persists because it efficiently sorts students into roles matching their abilities, providing universities a shared yardstick that keeps the education system coordinated and stable.
- Researcher B argues testing persists because affluent families purchase preparation that converts economic advantage into "merit," letting elites transmit position to their children while the ideology of testing makes the outcome look earned.
- Researcher C interviews students and finds that receiving a low score changes how students talk about themselves ("I'm just not a math person"), which then shapes the courses they attempt.

**Researcher A is a functionalist**: the argument form is persistence-because-function — sorting, coordination, stability. Note the tell-tale claim that the institution serves the SYSTEM, not any particular group.

**Researcher B is a conflict theorist**: the same institution is re-read as a mechanism of social reproduction; "merit" is analyzed as ideology that legitimizes inherited advantage. The question "who benefits?" organizes the entire account.

**Researcher C is a symbolic interactionist**: micro scale, and the causal engine is MEANING — a score becomes a label, the label is internalized into self-concept, and the redefined self alters behavior (the Thomas theorem in action).

**Extension 1.** Could Researcher A acknowledge Researcher B's data? Yes — a functionalist would classify inequality transmission as a **latent dysfunction** of testing, without abandoning the claim that sorting is its manifest function. Paradigms are interpretive frames, not disjoint facts.

**Extension 2.** A fourth researcher notes that students continue test preparation only while perceived admission benefits exceed the cost of study time, quitting when a guaranteed-admission program is announced. That cost-benefit ledger is **social exchange / rational choice** — micro like interactionism, but driven by calculated utility rather than negotiated meaning. Distinguishing those two neighbors is a favorite MCAT discrimination.`
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
            explanation: `Persistence-because-stability is functionalism's signature argument form: the institution endures because it serves system-maintaining functions (integration, norm reinforcement). Mentioning norms does not make an account interactionist — interactionism requires the micro machinery of meaning and interaction, and conflict theory would ask which groups religion advantages, which this account never does.`
          },
          {
            question: `Which claim is the clearest example of a LATENT function, as Merton defined it?`,
            options: [`Hospitals intend to treat illness and succeed in doing so`, `Prisons fail to rehabilitate, undermining their stated purpose`, `Universities publish admission standards to attract qualified applicants`, `Farmers markets unintentionally becoming hubs of political organizing`],
            correctAnswer: 3,
            explanation: `A latent function is an UNINTENDED and largely unrecognized consequence that nonetheless serves the community — here, produce markets incidentally sustaining civic life. Hospitals treating illness is a manifest function (intended and recognized); prisons failing to rehabilitate is a dysfunction relative to a manifest goal; publishing admission standards is simply an intended practice. The manifest/latent split is about intention and recognition, not about success.`
          },
          {
            question: `The Thomas theorem states that situations defined as real are real in their consequences. Which observation most directly illustrates it?`,
            options: [`A false rumor about a safe vaccine collapses clinic attendance`, `Vaccine side effects occur at the biologically expected rate`, `Wealthier neighborhoods have more clinics per capita`, `A new law increases vaccination by mandating it for school entry`],
            correctAnswer: 0,
            explanation: `The theorem's point is that the DEFINITION of the situation — not its objective accuracy — drives behavior and thus produces real outcomes: a false belief empties real clinics. Side effects at the expected rate are a biological fact with no definitional component, clinic density is structural inequality, and the school mandate is behavior driven by formal sanction rather than by a collectively held definition.`
          },
          {
            question: `A researcher documents that occupational-licensing laws, publicly justified as consumer protection, were historically written by incumbent practitioners and consistently restrict market entry by poorer workers. The theoretical framework organizing this analysis is:`,
            options: [`Functionalism, because licensing coordinates the labor market`, `Rational choice theory, because workers weigh licensing costs`, `Conflict theory, because the rationale masks group interests`, `Symbolic interactionism, because licenses are symbols`],
            correctAnswer: 2,
            explanation: `The analytic moves — asking who wrote the rules, who benefits, and treating the public rationale as legitimating ideology — are conflict theory's toolkit. The mere presence of a symbol (a license) does not make analysis interactionist; interactionism would study how licensing changes face-to-face encounters and self-definitions, not how it distributes group advantage.`
          },
          {
            question: `Two micro-level researchers study friendship dissolution. Researcher X finds friendships end when the effort a partner invests exceeds the companionship received relative to alternative friends. Researcher Y finds friendships end after one partner reinterprets shared rituals as signs of obligation rather than affection. How should the two accounts be classified?`,
            options: [`Both are symbolic interactionist, since both are micro-level`, `X is social exchange theory; Y is symbolic interactionism`, `X is functionalist; Y is conflict theory`, `X is symbolic interactionism; Y is social exchange theory`],
            correctAnswer: 1,
            explanation: `Sharing the micro scale does not make theories identical — the causal engine differs. X explains behavior through calculated rewards, costs, and comparison to alternatives: exchange/rational choice. Y explains the SAME breakup through a shift in what the rituals MEAN to a participant: interactionism. Calling both interactionist is the standard trap of collapsing all micro theories together; labeling X interactionist and Y exchange reverses the two engines; functionalism and conflict theory are macro frameworks that fit neither account.`
          }
        ]
      }
    },
    {
      id: 'strat1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Match altitude first: functionalism and conflict theory are MACRO; symbolic interactionism and exchange theory are MICRO
- Functionalism explains persistence by function — distinguish manifest (intended, recognized) from latent (unintended) functions and from dysfunctions
- Conflict theory re-reads every "stabilizing" institution by asking who benefits; official justifications become ideology
- Symbolic interactionism runs on negotiated meaning: the Thomas theorem (definitions of situations produce real consequences) and social constructionism (felt-natural categories are collectively built)
- Micro neighbors differ by engine: exchange theory = cost-benefit ledgers; interactionism = meanings and labels — the MCAT loves this discrimination`
    }
  ]
};
