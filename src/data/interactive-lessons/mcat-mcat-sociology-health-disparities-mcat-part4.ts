export const mcatSocioHealthPart4Data = {
  topicSlug: 'mcat-sociology-health-disparities-mcat',
  sections: [
    {
      id: 'hdis4-intro',
      type: 'text' as const,
      content: `# Health & Healthcare Disparities — Deep Dive

**Part 4 of 4 — MCAT Integration: Theories at the Bedside & the Disparities Passage Playbook**

### The Paradigms Round on Medicine

Every disparities passage can be theory-tagged, and questions ask you to do it:

- **Functionalist**: medicine maintains a healthy workforce; the sick role regulates legitimate withdrawal from obligations; disparities appear as system "dysfunctions" to be corrected. Weakness the exam cites: treats existing arrangements as consensual.
- **Conflict**: health is a resource distributed by power — care rationed by ability to pay, medical knowledge gatekept, pharmaceutical agendas set by profit, and the "second sickness" produced by injustice. Predicts disparities are STRUCTURAL outputs, not accidents.
- **Interactionist**: illness meanings negotiated in encounters — labeling (diagnosis as label, stigma as spoiled identity), the self-fulfilling prophecies of provider expectations, and how "compliance" talk assigns blame. Micro data (recorded consultations, interviews) signal this lens.
- **Fundamental cause** (the field's own theory): flexible resources track every new health technology — the through-line connecting all four parts of this lesson.

### The Intervention Ladder — Match Remedy to Level

A signature MCAT question format: "Which intervention targets the mechanism identified in Study N?" Build the map before test day:

| Level | Mechanism located in... | Interventions |
|-------|------------------------|---------------|
| Structural/policy | Segregation, income, insurance design | Coverage expansion, housing mobility, pollution zoning, income support |
| Institutional | Hospital placement, protocols, algorithms | Site placement, default/automatic screening, algorithm audits, interpreters |
| Encounter | Provider judgment, communication | Decision support, standardized criteria, bias feedback, shared decision-making training |
| Individual/behavioral | Knowledge, trust, navigation | Health literacy programs, community health workers, patient navigation |

Two exam-grade principles: (1) interventions relying on personal resources (information campaigns, opt-in programs) are captured fastest by the advantaged and can WIDEN gaps (fundamental cause logic); default/automatic designs narrow them. (2) "Downstream" fixes do not discharge "upstream" causes — a navigation program does not answer a hospital-closure finding.

### The Disparities Passage Playbook

1. **Inventory the studies**: for each, note design (ecological, cohort, vignette experiment, audit, interview), level (structural/institutional/encounter/individual), and the measure used (incidence vs. prevalence, crude vs. adjusted, absolute vs. relative).
2. **Assign each finding a causal privilege**: randomized designs (vignette/audit) license causal claims about their manipulated variable; matched observational studies localize but do not prove; ecological data suggest and never transfer to individuals (ecological fallacy); interviews supply mechanism and meaning, not magnitude.
3. **Watch the four recurring traps**:
   - Prevalence read as burden when it reflects survival duration
   - Mediator adjustment read as refutation (the over-adjustment fallacy)
   - Group-difference findings read as fixed biology when the design cannot separate exposure from ancestry
   - Institutionally produced patterns re-described as individual choice ("noncompliance," "lifestyle")
4. **For "which additional finding would strengthen..." items**: the right answer completes the causal chain at its weakest link — temporal order for cross-sectional claims, individual-level data for ecological claims, a dose-response or natural experiment for confounded claims.
5. **For ethics-flavored stems** (community trust, research in disadvantaged groups): answers weighting community partnership, transparency, and returning benefit outrank efficiency-first options — the sociology section's ethics questions reward structural awareness, not paternalism.

### The Course-Wide Web

This lesson is the sociology section's hub: stratification supplies SES and capitals (Part 1's gradient), culture/socialization supplies norms and illness meanings, groups/interaction supplies bias mechanisms and encounter dynamics, demographics supplies the rates and pyramids, and the biology lessons supply the stress-axis wiring (HPA, allostatic load) that turns social structure into pathology. A full-length MCAT will cross these freely; so should your review.`
    },
    {
      id: 'hdis4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Capstone Passage, Played by the Book

**Passage.** A state introduces automatic (opt-out) colorectal screening mailers for all residents aged 45 or more, replacing the previous physician-referral system. Researchers report:

- Study 1 (before/after ecological): statewide screening completion rises from 55 to 74 percent; the rise is 12 points in the top income quartile and 27 points in the bottom quartile, narrowing the screening gap by more than half.
- Study 2 (cohort): among screened patients, time-to-treatment after a positive result remains 2.5 times longer for uninsured patients.
- Study 3 (interviews): low-income patients describe the mailed kit as "the first time the system came to me," while several report discarding kits due to instructions written at college reading level.
- A commentator objects: "Screening gaps closed because poor residents finally took responsibility."

**Question 1 — Why did an opt-out design narrow the gradient when decades of awareness campaigns widened it?**
Fundamental cause logic: campaigns are information — a flexible resource the advantaged deploy faster. Defaults require NO personal resources; they equalize by removing the resource-dependent step (remembering, scheduling, transportation to a referral visit). The differential gain (27 vs. 12 points) is the theory's fingerprint in reverse — remove resource dependence and the disadvantaged gain most because the barrier was never motivation.

**Question 2 — What does Study 2 add?**
The intervention fixed ONE stage of the access cascade (initiation) and left another (post-screening treatment) untouched: insurance still gates treatment speed. Expect the item "which intervention addresses Study 2's finding?" — the answer lives at the structural/coverage level, not more mailers, not navigation alone. Disparities relocate to the stages a policy does not reach.

**Question 3 — Evaluate the commentator.**
The claim converts a DESIGN effect into a trait explanation ("responsibility") — the individual-choice trap. The data directly contradict it: the same individuals under the referral system screened less; what changed was the system's architecture, not residents' character. This is also the interactionist point about "compliance" language assigning moral blame for structural facts.

**Question 4 — What do the interviews contribute, and what can't they?**
Mechanism and meaning: the "system came to me" narrative explains WHY defaults work here (they reverse the institutional burden of navigation), and the reading-level complaint identifies a health-literacy refinement (a real equity leak inside a successful program). As interview data, they quantify nothing — using them to estimate effect sizes would be the wrong-tool answer.

**Question 5 — Which additional finding would MOST strengthen the causal claim for the mailer program?**
Study 1 is ecological and uncontrolled — secular trends could contribute. Strongest strengthener: a neighboring comparable state without the program showing flat screening over the same period (difference-in-differences logic), or staggered county-level rollout with screening rising county-by-county as the program arrives. Both supply the missing counterfactual; "larger sample" answers do not.`
    },
    {
      id: 'hdis4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integration & Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A theorist argues that pharmaceutical firms shape which conditions get researched, that care is rationed by ability to pay, and that the resulting disparities are predictable outputs of a profit-organized system rather than correctable accidents. This account of medicine is:`,
            options: [`Functionalism`, `Interactionism`, `Conflict theory`, `Fundamental cause theory`],
            correctAnswer: 2,
            explanation: `Power, profit, gatekeeping, and disparities-as-structure are conflict theory's signature reading of medicine. A functionalist would foreground medicine's system-maintaining role and treat disparities as dysfunctions; an interactionist would analyze encounter-level meaning-making. Fundamental cause theory, though compatible, is specifically about flexible resources tracking new health technologies, which this account does not invoke.`
          },
          {
            question: `A city finds that ITS opt-in diabetes-prevention workshops enrolled mostly college-educated residents, widening the participation gap. Which redesign follows most directly from fundamental cause reasoning?`,
            options: [`More sessions with better advertising`, `Automatic enrollment with an easy opt-out`, `A small enrollment fee to boost commitment`, `Enrollment limited to likely completers`],
            correctAnswer: 1,
            explanation: `Fundamental cause theory locates the widening in resource dependence: opt-in designs reward information, time, and confidence — flexible resources concentrated up the SES ladder. The corrective is architectural: defaults that require no resources to enter. More advertising is more information (same failure mode, larger), fees add a resource barrier, and limiting enrollment to likely completers abandons the disadvantaged entirely.`
          },
          {
            question: `An ecological study shows counties with more fast-food outlets have higher cardiovascular mortality. Which additional finding would MOST strengthen a causal interpretation at the individual level?`,
            options: [`A larger sample of counties showing the same correlation`, `A county time series showing mortality rose after outlets opened`, `A cross-sectional survey linking individuals' intake to heart disease`, `An SES-controlled cohort linking individuals' intake to later events`],
            correctAnswer: 3,
            explanation: `The ecological design's two fatal gaps are level (county correlations cannot transfer to individuals — the ecological fallacy) and temporality/confounding. Only the SES-controlled individual cohort repairs both: individual-level exposure and outcome, temporal ordering (consumption BEFORE events), and control of the SES confounding that plagues neighborhood food environments. More counties replicate the same limitation at larger scale; a county time series adds timing but remains ecological; an individual cross-sectional survey fixes the level but not temporal order or confounding.`
          },
          {
            question: `Hospital data show minority patients rated as "noncompliant" with follow-up at higher rates; chart review reveals their follow-up clinics average three bus transfers away and offer no evening hours. A sociologist's principal objection to the "noncompliance" framing is that it:`,
            options: [`Relabels a structural access barrier as individual failing`, `Relies on too small a sample to support group comparisons`, `Ignores genetic differences in treatment response`, `Understates patients' personal responsibility for attendance`],
            correctAnswer: 0,
            explanation: `The chart review localizes the mechanism in institutional geography and scheduling — structural facts patients cannot choose their way around — while the "noncompliant" label moralizes the outcome as individual failing (the interactionist critique of compliance language, and the individual-choice trap in disparities reading). The framing error matters practically: it points interventions at lectures for patients instead of clinic hours and locations. Objecting that the label understates personal responsibility repeats the very trait attribution the chart review undercuts.`
          },
          {
            question: `Researchers propose studying stress biomarkers in a historically exploited community. Which approach best reflects the research-ethics standard the MCAT's sociology section rewards?`,
            options: [`Minimize community contact to keep the collected data objective`, `Offer large payments to guarantee enrollment and retention`, `Co-design with community partners, sharing data use and benefits`, `Inform the community only after publication to avoid bias`],
            correctAnswer: 2,
            explanation: `For communities with documented histories of research exploitation, the recognized standard is community-based partnership: shared design authority, transparency about data use, and reciprocal benefit — rebuilding the trust whose absence both harms health and undermines research validity. Distance masquerading as objectivity repeats the exploitative pattern; oversized payments raise undue-inducement concerns; informing after publication forecloses consent.`
          }
        ]
      }
    },
    {
      id: 'hdis4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Theory-tag medicine passages: system maintenance (functionalist), power and profit (conflict), negotiated meaning and labels (interactionist), flexible resources chasing technology (fundamental cause)
- Match intervention to mechanism level — structural, institutional, encounter, individual; resource-dependent designs (opt-in, information) widen gaps, defaults narrow them; fixing one cascade stage relocates disparities to the next
- The four traps: prevalence-as-burden, mediator-adjustment-as-refutation, exposure-vs-ancestry conflation, and structure relabeled as individual choice
- Strengthen-the-claim answers complete the weakest causal link: counterfactual comparisons (difference-in-differences, staggered rollout) for ecological claims, individual longitudinal data for level jumps
- Ethics stems reward community partnership, transparency, and returned benefit — and the whole sociology section rewards connecting this hub lesson to stratification, interaction, demographics, and the stress biology that embodies them`
    }
  ]
};
