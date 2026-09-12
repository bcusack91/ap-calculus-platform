export const mcatSocioGroupsPart4Data = {
  topicSlug: 'mcat-sociology-groups-interaction-mcat',
  sections: [
    {
      id: 'grp4-intro',
      type: 'text' as const,
      content: `# Groups & Social Interaction — Deep Dive

**Part 4 of 4 — MCAT Integration: Prejudice, Discrimination & Reading Interaction Experiments**

### The Tripartite Distinction the Exam Never Stops Testing

| Component | Nature | Definition |
|-----------|--------|------------|
| **Stereotype** | Cognitive (belief) | Overgeneralized belief about a group's attributes |
| **Prejudice** | Affective (attitude) | Evaluative feeling — usually negative — toward people BECAUSE of group membership |
| **Discrimination** | Behavioral (action) | Differential TREATMENT based on group membership |

They dissociate, and the dissociations are the questions: a landlord who privately harbors prejudice but rents to everyone (prejudice without discrimination); a hiring algorithm that never "feels" anything yet filters out one group's zip codes (discrimination without prejudice). Merton's classic grid — all four combinations of prejudiced/unprejudiced with discriminator/non-discriminator — exists precisely because attitude and behavior track situations, incentives, and laws, not just each other.

### Individual vs. Institutional Discrimination

- **Individual discrimination**: one actor treating people unequally.
- **Institutional discrimination**: unequal outcomes produced by an institution's ordinary rules and procedures — no bigoted individual required. Seniority systems layered on historically exclusionary hiring, school funding via local property taxes, medical algorithms calibrated on unrepresentative samples. The tell: replace every employee with unprejudiced people and the disparity PERSISTS, because it lives in the rules.
- **Side-effect discrimination**: one institution's disparity feeding another's (biased arrest records used in hiring). **Past-in-present discrimination**: neutral rules amplifying historical exclusion (legacy admissions).

### Where Prejudice Comes From — The Group Machinery

Parts 1-3 built the mechanisms; here they assemble:

- **In-group/out-group dynamics** (Part 1): minimal distinctions generate favoritism; out-groups get homogenized ("they're all alike" — out-group homogeneity).
- **Realistic conflict**: competition over scarce resources sharpens intergroup hostility; cooperation toward **superordinate goals** — goals neither group can reach alone — reduces it (the classic boys-camp field experiment sequence: competition bred hostility, mere contact failed, joint problem-solving healed).
- **Contact hypothesis**, properly stated: intergroup contact reduces prejudice ONLY under conditions — equal status within the situation, common goals, cooperation, and institutional support. Unstructured contact can backfire; the conditions are the answer, not "contact" alone.
- **Scapegoating**: frustration displaced onto low-power out-groups; prejudice rises with economic stress.
- **Stereotype threat**: awareness that one's group is negatively stereotyped creates performance-impairing anxiety on evaluative tasks — a situational effect, reversible by changing the framing, and a standard experimental passage.
- **Self-fulfilling prophecy** (Parts 2-3 of the culture lesson): expectations alter treatment, which elicits the expected behavior — the micro engine converting stereotype into "confirming" data.

### Reading Interaction Experiments — The Design Checklist

Interaction research is where the MCAT most often shows you an actual EXPERIMENT. Audit in order:

1. **Manipulation**: what was randomly varied? (Resume names, confederate behavior, group composition.) Random assignment is what converts a disparity into evidence of discrimination.
2. **Blinding and demand characteristics**: did subjects know what was studied? Hawthorne/observer effects and social-desirability bias (people underreport prejudice) make SELF-REPORT the weakest measure — behavioral and audit measures dominate.
3. **Confederates and deception**: staged interactions isolate the social variable; debriefing handles the ethics question stem.
4. **Operationalization**: "prejudice" measured as attitude scale vs. seating distance vs. callback rate are DIFFERENT constructs — answers that swap them are wrong. Match the conclusion to the operationalized variable.
5. **Field audit studies** (matched fictitious resumes differing only in group-signaling names): the gold standard for institutional-level discrimination because they hold qualifications constant by construction.`
    },
    {
      id: 'grp4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Audit Study Passage, Dissected

**Passage.** Researchers mail 5,000 fictitious resumes to real job postings, randomly assigning each resume a name pretested to signal either Group A or Group B membership; qualifications are otherwise identical. Group B names receive 40 percent fewer callbacks. In a follow-up survey, the same firms' recruiters score LOW on a prejudice attitude scale, and most endorse diversity goals. A second experiment finds the callback gap disappears at firms using software that strips names before screening, and DOUBLES at firms where a single manager reviews all resumes under time pressure.

**Question 1 — What does the 40 percent gap demonstrate?**
Because names were RANDOMLY assigned to otherwise identical resumes, qualifications cannot explain the gap; the manipulation isolates group signaling. This is discrimination measured BEHAVIORALLY (callback rate). Note what it does not show: which cognitive/affective mechanism produced it.

**Question 2 — Reconcile the low prejudice scores with the callback gap.**
Three compatible readings, all testable: (a) social desirability contaminates the attitude scale (self-report is the weak measure); (b) discrimination without conscious prejudice — implicit associations or statistical assumptions operating under time pressure; (c) Merton's "unprejudiced discriminator" — conforming to organizational habits. The WRONG answer will claim the survey "disproves" the audit result: behavior measured by randomized audit outranks self-reported attitude, full stop.

**Question 3 — Interpret the two moderators.**
Name-stripping software removing the gap localizes the discrimination to the group-signaling information itself — and is a REMEDY at the procedural level: institutional design, not attitude change. The doubling under a single time-pressured reviewer fits stereotype-as-cognitive-shortcut accounts: load and haste increase reliance on category-based processing. Together the moderators argue the gap is substantially situational/institutional rather than a fixed property of prejudiced individuals.

**Question 4 — A critic says the study lacks realism because no real applicants were involved. Best response?**
The design trades surface realism for INTERNAL validity (random assignment, matched qualifications) while retaining strong field realism — real firms, real decisions with real stakes for the firms. It measures actual hiring behavior, not lab intentions; external validity concerns would target the specific occupations and cities sampled, not the fictitious applicants.

**The integrative habit.** Map every intergroup passage onto the three-layer grid: cognitive (stereotype), affective (prejudice), behavioral (discrimination) — then ask at which layer the DATA live and at which layer each answer choice lives. Layer mismatches are the wrong answers.`
    },
    {
      id: 'grp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Prejudice, Discrimination & Experimental Reading** 🎯`,
      exercise: {
        questions: [
          {
            question: `A rental algorithm, built with no attitudinal input, systematically rejects applicants from historically segregated zip codes, producing group-differential outcomes. A sociologist would classify this as:`,
            options: [`Institutional discrimination absent individual prejudice`, `Prejudice without discrimination, since no one intends harm`, `A stereotype, because the algorithm holds beliefs`, `Scapegoating of residents from segregated areas`],
            correctAnswer: 0,
            explanation: `The differential treatment (behavioral layer) is real and group-patterned, yet no actor holds an attitude — the pattern lives in rules and inherited geography, the defining mark of institutional discrimination compounded by past-in-present dynamics. Prejudice without discrimination reverses the dissociation (this is discrimination WITHOUT prejudice), and algorithms hold no beliefs or displaced frustrations.`
          },
          {
            question: `At a summer camp, two boys' groups became hostile after competitive tournaments; joint pizza parties did nothing, but hostility fell sharply after the groups had to cooperate to fix the camp's failed water supply. The variable that reduced prejudice was:`,
            options: [`Repeated contact at shared meals and parties`, `Adult sanctions that punished hostile behavior`, `A shared superordinate goal requiring cooperation`, `Separating the groups to let hostility cool`],
            correctAnswer: 2,
            explanation: `The field experiment's sequence is the lesson: competition manufactured hostility, unstructured contact (parties) failed and even sparked food fights, and only superordinate goals — the broken water supply, the stuck truck — dissolved group lines by making the out-group instrumental to in-group success. Neither punishment nor separation produced the drop; cooperation did. This is also why the contact hypothesis requires cooperation and common goals, not proximity.`
          },
          {
            question: `Students from a negatively stereotyped group score worse on a test described as "diagnostic of intellectual ability" but equal to controls when the SAME test is described as a "problem-solving exercise." This pattern demonstrates:`,
            options: [`That the ability difference is real but small`, `Stereotype threat triggered by the task's framing`, `Institutional discrimination by the test-makers`, `General test anxiety unrelated to group identity`],
            correctAnswer: 1,
            explanation: `Identical test, different framing, different scores: the deficit cannot be ability (ability did not change between conditions) — it is produced by the evaluative situation activating the stereotype, and it vanishes when the diagnostic frame is lifted. That reversibility is the finding's signature and its practical hope. No test content or institutional rule differed between conditions, and generic test anxiety would not single out the stereotyped group.`
          },
          {
            question: `In an audit study, why does RANDOMLY ASSIGNING group-signaling names to otherwise identical resumes license a causal conclusion that observational hiring data cannot support?`,
            options: [`Because large samples rule out chance and therefore confounding`, `Because recruiters were unaware of being studied and acted naturally`, `Because fictitious resumes eliminate survey social desirability bias`, `Because randomization makes the name the only systematic difference`],
            correctAnswer: 3,
            explanation: `Observational disparities are always vulnerable to the rejoinder that groups differed in qualifications; random assignment severs any link between the group signal and every other resume property, known or unknown, making the signal the only systematic difference. Recruiter unawareness helps validity but does not create the causal license — randomization does; sample size addresses chance, never confounding.`
          },
          {
            question: `A teacher told that certain randomly selected students are "about to bloom intellectually" gives those students more attention and richer feedback; months later those students show real achievement gains. The mechanism converting the (false) expectation into real performance is:`,
            options: [`The self-fulfilling prophecy`, `Stereotype threat`, `Confirmation bias in grading`, `The fundamental attribution error`],
            correctAnswer: 0,
            explanation: `The students were selected at RANDOM, so the gains cannot reflect detected talent; the expectation changed the teacher's behavior (attention, feedback), which changed learning — the definitional loop of a self-fulfilling prophecy, and the micro engine that lets stereotypes manufacture their own supporting evidence. Stereotype threat runs the opposite direction, impairing performance under negative expectations; confirmation bias in grading could not produce REAL achievement gains; and the fundamental attribution error is a bias in explaining behavior, not a mechanism that changes it.`
          }
        ]
      }
    },
    {
      id: 'grp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Keep the three layers straight: stereotype = belief (cognitive), prejudice = attitude (affective), discrimination = treatment (behavioral); they dissociate in every direction (Merton's grid)
- Institutional discrimination lives in rules and procedures — it persists with unprejudiced personnel; watch for side-effect and past-in-present variants
- Prejudice reduction has conditions: contact works only with equal status, common goals, cooperation, institutional support; superordinate goals are the strongest lever; competition and scarcity run it backwards
- Stereotype threat is situational and reversible (framing manipulations); self-fulfilling prophecies convert expectations into confirming data via differential treatment
- Experimental reading: random assignment licenses causation; behavior outranks self-report (social desirability); match every conclusion to the operationalized variable — and diagnose answer choices by which of the three layers they live on`
    }
  ]
};
