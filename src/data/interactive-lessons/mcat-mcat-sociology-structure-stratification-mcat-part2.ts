export const mcatSocioStratPart2Data = {
  topicSlug: 'mcat-sociology-structure-stratification-mcat',
  sections: [
    {
      id: 'strat2-intro',
      type: 'text' as const,
      content: `# Social Structure & Stratification — Deep Dive

**Part 2 of 4 — Social Institutions: Family, Education, Religion, Government & Medicine**

### What Counts as an Institution

A **social institution** is a durable complex of statuses, roles, norms, and values organized around a basic societal need — reproducing members, transmitting knowledge, allocating power, managing meaning, maintaining health. Institutions outlive the individuals who occupy them; that persistence is exactly what the paradigms of Part 1 compete to explain.

### Family

- Forms: **nuclear** (parents + children) vs. **extended** (additional generations/kin); patterns of authority (patriarchal, matriarchal, egalitarian) and descent.
- Marriage patterns: **monogamy**, **polygamy** (polygyny = multiple wives, polyandry = multiple husbands); **endogamy** (marrying within a group — reinforces boundaries) vs. **exogamy** (marrying outside).
- Functionalist read: socialization of children, emotional support, status transmission. Conflict read: property and inequality are inherited through families — the family is stratification's transmission belt.

### Education

- **Hidden curriculum**: the unofficial lessons schools teach — punctuality, obedience to authority, competition, acceptance of ranking. Nobody writes it in a syllabus; everyone learns it.
- **Tracking**: sorting students into ability groups; defended as efficient instruction (functionalist), criticized because track assignment correlates with class and race and becomes self-fulfilling (conflict + labeling).
- **Teacher expectancy / Pygmalion effect**: teachers' beliefs about a student alter their behavior toward that student, changing the student's actual performance — a micro mechanism carrying macro inequality.
- **Credentialism**: requiring ever-higher degrees as job filters, independent of the skills the job needs.

### Religion

- Organizational spectrum: **church/ecclesia** (large, integrated with society, born into it) → **denomination** → **sect** (smaller, higher tension with society, often formed by schism) → **cult/new religious movement** (novel beliefs, highest tension).
- **Secularization**: declining public influence of religion with modernization; complicated by persistent and revived **fundamentalism** (strict return to foundational texts and practices).
- Durkheim: religion separates **sacred** from **profane** and generates collective solidarity; Marx: religion soothes the pain of inequality and thereby preserves it; Weber: religious ethics (the Protestant ethic) can drive economic transformation — three paradigm-flavored theses about one institution.

### Government & Economy

- Power vs. authority: **power** is the capacity to impose one's will; **authority** is power accepted as legitimate. Weber's three types: **traditional** (custom — monarchy), **charismatic** (personal qualities of a leader — unstable, must be "routinized"), **rational-legal** (rules and offices — modern bureaucracies; obedience is to the OFFICE, not the person).
- Economic ideal types: **capitalism** (private ownership, market allocation, profit motive) vs. **socialism** (collective ownership, planned allocation); real economies mix both. **Division of labor** increases interdependence — Durkheim's shift from mechanical solidarity (likeness) to **organic solidarity** (interdependence of specialists).

### Medicine

- **Medicalization**: redefining conditions as medical problems requiring treatment (ADHD, childbirth, addiction); demedicalization runs the reverse direction (homosexuality removed from the DSM).
- The **sick role** (Parsons, functionalist): the sick are exempted from normal roles and not blamed — BUT must want to recover and must seek competent help; failure to comply forfeits the exemptions. Critics: chronic illness fits poorly, and access to the role is unequal.
- Conflict read of medicine: profit motives shape what gets defined as disease, and gatekeeping (insurance, licensure) rations care by class.`
    },
    {
      id: 'strat2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing One Mechanism Through Two Institutions

**Problem 1.** A longitudinal study follows 2,000 students to age 30. At age 8, a test with a known socioeconomic score gradient assigns them to "gifted" or "standard" tracks. Teachers give gifted-track students more time and call them "college material," even when compared with standard-track students within one point of the cutoff.

- **(a)** Why do the researchers compare students just above and just below the cutoff?
- **(b)** What mechanism does the differential treatment show?
- **(c)** Does the near-cutoff comparison make the study an experiment?

**(a) The near-cutoff comparison.** It is the analytic heart of the study: students on either side of the line are essentially identical in measured ability, so any later divergence cannot be attributed to the ability the test measured.

**(b) Teacher expectancy.** The differential treatment (time, expectations, labels) is the **teacher expectancy** mechanism operating on institutionally created categories: beliefs about a student change how the student is taught.

**(c) Design caution.** No. Because track assignment was not random, the comparison approximates, but does not equal, an experiment. Confounding by unmeasured family factors is reduced, not eliminated. Expect a question testing whether you notice this.

**Problem 2.** In the same tracking study, by age 16 just-above-cutoff (gifted-track) students outperform just-below-cutoff students by far more than their one-point age-8 gap. At age 30, track assignment at age 8 predicts occupational prestige better than the age-8 test score itself.

- **(a)** When does the age-16 gap open relative to the label, and what process does that show?
- **(b)** Which paradigm's claim does the age-30 result support?
- **(c)** How does education carry small childhood differences into adult inequality?
- **(d)** How could a functionalist respond, and what makes the strongest MCAT answer here?

**(a) Self-fulfilling prophecy.** Initially similar students diverge AFTER the label is applied. The definition ("gifted") changed treatment, treatment changed performance, and performance now appears to justify the label: the Thomas theorem embedded inside an institution.

**(b) Social reproduction.** Track, an institutional variable, outpredicts measured ability. This is the conflict/social-reproduction claim in quantitative form.

**(c) Converting small gaps.** Education converts small (and class-correlated) initial differences into large, legitimated adult inequalities. The credential system then transmits position to the labor market.

**(d) Paradigm cross-check.** A functionalist could still argue tracking's manifest function is instructional efficiency; the study documents a latent dysfunction with a micro mechanism. The strongest answers name the MECHANISM (expectancy → treatment → performance), not just the paradigm.`
    },
    {
      id: 'strat2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Institutions** 🎯`,
      exercise: {
        questions: [
          {
            question: `Students in a strict academy learn to line up silently, defer to adults, and accept rank orderings posted publicly — none of which appears in any course syllabus. Sociologists call this learning:`,
            options: [`Credential inflation`, `The manifest curriculum`, `Educational tracking`, `The hidden curriculum`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The hidden curriculum is the set of unofficial norms — obedience, punctuality, acceptance of hierarchy — that schools transmit alongside official content. Credential inflation concerns rising degree requirements as job filters, tracking is the sorting of students into ability groups, and the manifest curriculum is precisely the official syllabus content this learning is NOT part of.`
          },
          {
            question: `A religious group formed by breaking away from an established denomination, demanding stricter observance and existing in high tension with mainstream society while recruiting adult converts, is best classified as a:`,
            options: [`Sectarian group`, `Ecclesia`, `Established church`, `Denomination`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Schismatic origin, strictness, tension with society, and adult conversion are the defining sect features. Churches and ecclesiae are large, low-tension bodies integrated with society into which members are typically born; denominations are established, socially accepted organizations. The spectrum runs church → denomination → sect → cult as tension with the surrounding society rises.`
          },
          {
            question: `Citizens obey a newly elected tax commissioner they personally dislike, because statutes define the office's powers. When she leaves office, obedience transfers seamlessly to her successor. Weber would classify this authority as:`,
            options: [`Charismatic, because she won a personal following in the election`, `Rational-legal, because legitimacy resides in the office`, `Traditional, because taxation is an old custom`, `Coercive power, because taxes are mandatory`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The tell is that obedience survives the officeholder's replacement: legitimacy resides in codified rules and the office itself. Charismatic authority attaches to an individual's extraordinary qualities and famously struggles with succession; traditional authority rests on custom and inheritance. Coercive power without legitimacy is not authority at all — and the citizens here comply out of accepted legitimacy, not mere force.`
          },
          {
            question: `Over two decades, ordinary shyness is increasingly diagnosed as "social anxiety disorder," treated pharmacologically, and covered by insurance. A sociologist labels this process medicalization. Which additional finding would BEST support a conflict-theory reading of it?`,
            options: [`Patients report that diagnosis relieved their self-blame`, `The diagnosis spread across many countries' clinical manuals`, `Diagnoses tracked drug-maker profits, not symptom rates`, `Shyness has measurable physiological and genetic correlates`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Conflict theory asks who benefits from redefining a condition as disease; evidence that commercial interests drove the definitional change — decoupled from underlying symptom rates — directly serves that argument. Relief of self-blame describes a consequence for patients (closer to interactionist identity work); cross-national presence and physiological correlates say nothing about whose interests the redefinition serves.`
          },
          {
            question: `Under Parsons's sick-role concept, a patient loses the role's protections (exemption from obligations, freedom from blame) primarily when he:`,
            options: [`Has an illness that is difficult to diagnose`, `Recovers more slowly than his physician predicted`, `Contracts a stigmatized rather than a respectable disease`, `Refuses competent help and makes no effort to recover`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The sick role is a bargain: society grants exemptions and suspends blame IN EXCHANGE for the patient treating sickness as undesirable — wanting recovery and cooperating with competent treatment. Violating those obligations, not slow recovery or diagnostic difficulty, dissolves the bargain. Stigma affects how the role is granted in practice (a standard criticism of Parsons) but is not part of the role's formal obligations.`
          }
        ]
      }
    },
    {
      id: 'strat2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Education's tested trio.** Hidden curriculum teaches norms; tracking sorts; teacher expectancy: beliefs change treatment, which changes performance.
- **Religion's tension axis.** Church → denomination → sect → cult rises in tension; Durkheim: solidarity, Marx: preserves inequality, Weber: drives economies.
- **Authority is legitimate power.** Weber's types: traditional (custom), charismatic (the person), rational-legal (the office and rules).
- **Medicine redefines and exempts.** Medicalization turns conditions into disease; the sick role trades exemptions for seeking help.

**Common traps**

- **Slow recovery ends the sick role.** Only refusing competent help or not trying to recover forfeits it; slow recovery does not.
- **Obeying the person.** Rational-legal obedience belongs to the office, so it passes to a successor; charisma struggles with succession.
- **Track gaps prove ability gaps.** Near-cutoff students start equal; the later gap follows the label, a self-fulfilling prophecy.
- **Cutoff comparison as experiment.** Track assignment was not random, so confounding is reduced, not eliminated.`
    }
  ]
};
