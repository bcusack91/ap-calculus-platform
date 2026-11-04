export const mcatPsychDisordersPart4Data = {
  topicSlug: 'mcat-psychology-behavior-disorders-mcat',
  sections: [
    {
      id: 'dis4-intro',
      type: 'text' as const,
      content: `# Psychological Disorders — Deep Dive

**Part 4 of 4 — MCAT Integration: Etiology Models, Treatment Logic & Reading Clinical Studies**

### The Etiology Frameworks (match the mechanism in the stem)

| Framework | Disorder is... | Treatment follows as... |
|-----------|----------------|------------------------|
| **Biological/biomedical** | Neurotransmitter, structural, genetic dysfunction | Medication, brain stimulation |
| **Behavioral** | Learned associations and reinforcement histories | Unlearning: exposure, conditioning-based methods |
| **Cognitive** | Distorted appraisals and maladaptive automatic thoughts | Restructuring thoughts (with behavior experiments = CBT) |
| **Psychodynamic** | Unconscious conflict | Insight-oriented therapy |
| **Humanistic** | Blocked growth, conditions of worth | Client-centered, unconditional positive regard |
| **Sociocultural** | Social context, stressors, stigma, inequities | System- and community-level intervention |

**Diathesis-stress** integrates them; the biopsychosocial answer is usually the credited one when frameworks compete.

### Treatment Logic You Can Derive (not memorize)

- **Exposure therapies** = classical extinction: present the CS (feared object, bodily sensation, memory) without the feared outcome until the fear response extinguishes. **Systematic desensitization** adds counterconditioning — relaxation paired stepwise up an anxiety hierarchy; **flooding** starts at the top; **exposure + response prevention** (OCD) blocks the negatively reinforcing ritual
- **Token economies** = operant secondary reinforcement in institutional settings; **aversion therapy** = counterconditioning with an unpleasant US
- **Drug-class map** (MCAT altitude): **SSRIs** — first-line for depression AND most anxiety disorders/OCD (weeks-long lag); **benzodiazepines** — rapid GABA-enhancing anxiolytics, dependence risk, short-term; **antipsychotics** — D2 blockade (positive symptoms; motor side effects); **lithium** — bipolar maintenance; cholinesterase inhibitors — Alzheimer's; L-DOPA — Parkinson's
- Psychotherapy + medication generally outperforms either alone for many conditions

### Labeling, Stigma & the Rosenhan Problem

- Diagnostic labels enable communication, prediction, and treatment — but carry **stigma**: labeled individuals face discrimination, and observers reinterpret normal behavior through the label (in Rosenhan's famous pseudopatient study, ordinary note-taking was charted as pathological "writing behavior"). Its methods have been seriously criticized, but the labeling lesson — expectation shapes clinical perception — remains the tested point
- **Medicalization**: redefining human variation as disorder expands treatment but risks pathologizing normality (connect to the sociology lessons' social-construction thread)
- Respectful framing matters clinically: the person HAS a disorder; the person IS not the disorder

### Reading Clinical Studies — the Checklist

1. **RCT anatomy**: random assignment (equates groups on unmeasured confounds), **placebo control** (expectancy effects are large in psychiatry), **double-blinding** (patient AND rater expectations)
2. **Regression to the mean**: patients enroll at their worst; untreated improvement is guaranteed on average — the placebo arm absorbs this, which is why "improved from baseline" proves nothing
3. **Comorbidity** (disorders co-occurring at high rates) muddies specificity claims; **self-report scales** import reporting biases; dropout (attrition) biases completers toward success
4. **Statistical vs. clinical significance**: a tiny symptom-scale difference can be "significant" in a huge sample yet meaningless at the bedside — check effect sizes and functional outcomes
5. Diagnostic criteria in passages: count symptoms, check DURATION boundaries (2 weeks MDD; 6 months GAD/schizophrenia; 1 month PTSD/panic's inter-attack worry), and confirm impairment — most pseudo-diagnoses in answer choices fail on duration`
    },
    {
      id: 'dis4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Antidepressant-Trial Passage, Fully Read

**Problem 1.** 480 adults with moderate MDD are randomized to SSRI, pill placebo, CBT, or waitlist; raters blind to condition score symptoms at 0, 8, and 24 weeks. At 8 weeks: SSRI improves 11.2 points from baseline, placebo 8.1, CBT 10.8, waitlist 4.9 (drug vs placebo p = 0.03, d = 0.28).

- **(a)** What does the waitlist's improvement estimate?
- **(b)** What does the placebo arm add on top of that?
- **(c)** How large is the pharmacological effect?
- **(d)** Is that effect clinically meaningful?

**(a) Natural course.** The waitlist's 4.9 points estimate natural course plus regression to the mean: enrollees start near their nadir.

**(b) Expectancy and contact.** Placebo (8.1) adds expectancy and clinical contact. Never grade any arm against baseline; grade arms against each other.

**(c) The drug-minus-placebo gap.** Only that gap, 11.2 − 8.1 = 3.1 points (d = 0.28), is the pharmacological effect.

**(d) Probably not on its own.** p = 0.03 makes it statistically significant, but d = 0.28 is small: a statistical-vs-clinical significance flag.

**Problem 2.** In the same trial, SSRI and CBT were close at 8 weeks (11.2 vs 10.8 points). At 24 weeks, relapse among responders is 41% after the SSRI is stopped and 22% after CBT. Dropout: 31% SSRI (mostly side effects), 12% CBT.

- **(a)** What does the relapse comparison show?
- **(b)** How does the dropout difference bias an analysis of completers only?
- **(c)** Which analysis is the fix?

**(a) CBT lasts.** CBT matched the drug acutely (10.8 vs 11.2 points) and roughly HALVES relapse after treatment ends (22% vs 41%): the classic durability advantage of learned skills over discontinued medication.

**(b) Toward the drug.** Differential dropout (31% vs 12%) leaves the SSRI arm's completers a selected, better-tolerating group, biasing completer analyses toward the drug.

**(c) Intention-to-treat.** Analyzing everyone as randomized, dropouts included, is the requested fix.

**Problem 3.** Citing the trial's 8-week drug-placebo gap (11.2 vs 8.1 points), an editorial concludes: "Antidepressants barely beat sugar pills, so depression is not biological."

- **(a)** Does a modest drug-placebo gap mean the drug does nothing?
- **(b)** Can a treatment's success or failure tell you a disorder's cause?
- **(c)** What kind of evidence would an etiology claim need?

**(a) No.** Placebo arms in depression trials capture real improvement processes (expectancy, contact, regression), inflating the comparator. A modest gap does not mean an inert drug.

**(b) Never, in either direction.** Aspirin relieving headaches does not prove headaches are aspirin-deficiency diseases, and CBT working does not prove depression is "just thoughts." The editorial commits this category error twice.

**(c) Etiological designs.** Etiology claims need etiological designs (Part 4 of the development lesson), not outcome trials.

**Problem 4.** Expect three follow-up items on the same trial's design.

- **(a)** Why include a placebo arm rather than a waitlist alone?
- **(b)** Why blind the raters?
- **(c)** Which patients does the trial's conclusion cover?

**(a) To separate effects.** A placebo arm separates expectancy and contact effects from natural course.

**(b) Observer expectations.** Raters' expectations distort self-report-adjacent measures: the Rosenhan lesson operationalized.

**(c) Only those studied.** It covers adults with moderate MDD like those enrolled, under trial conditions. Generalizing beyond them is an external-validity question the data cannot settle.`
    },
    {
      id: 'dis4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Etiology, Treatment & Trial Reading** 🎯`,
      exercise: {
        questions: [
          {
            question: `A therapist treats a flying phobia by teaching deep muscle relaxation, then pairing it with a graded hierarchy: photographs of planes, airport visits, sitting in a parked cabin, and finally a short flight. The technique and its learning-theory mechanism are:`,
            options: [`Flooding, via operant punishment of the avoidance response`, `Systematic desensitization, via counterconditioning with relaxation`, `Token economy, via secondary reinforcement of approach behaviors`, `Free association, via insight into the phobia's unconscious origins`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Graded exposure plus a trained incompatible response is systematic desensitization: the feared stimulus is repeatedly presented without catastrophe (classical extinction) while relaxation replaces fear (counterconditioning). Flooding would begin at maximum intensity with no hierarchy; token economies are operant institutional programs; free association belongs to the psychodynamic framework entirely.`
          },
          {
            question: `Patients with chronic pain enrolled in an uncontrolled trial "when symptoms became unbearable" improve markedly on a new supplement. Before crediting the supplement, the FIRST rival explanation a reader should raise is:`,
            options: [`The supplement's dose was too low to produce a real effect`, `The supplement works only for patients with the most severe pain`, `The improvement proves the patients' pain was imaginary all along`, `Regression to the mean plus expectancy, given enrollment at peak symptoms`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Enrollment at an extreme guarantees average improvement by regression to the mean, and open-label treatment adds expectancy effects — together they can produce large "responses" to inert treatments. This is precisely what control arms exist to absorb. The other options either assume the supplement acted, posit a dosing problem that would not explain the improvement at all, or confuse improvement mechanisms with symptom reality.`
          },
          {
            question: `Match the first-line maintenance pharmacotherapy to the condition: recurrent cycling between manic and depressive episodes is most specifically treated with:`,
            options: [`Lithium, the prototype mood stabilizer`, `A benzodiazepine, such as lorazepam`, `A cholinesterase inhibitor, such as donepezil`, `L-DOPA, a dopamine precursor`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Lithium is the prototype mood stabilizer for bipolar disorder, reducing both poles and suicide risk; the paired exam fact is that unopposed antidepressants risk switching a bipolar patient into mania. Benzodiazepines are short-term GABAergic anxiolytics, cholinesterase inhibitors target Alzheimer's cholinergic deficit, and L-DOPA replaces striatal dopamine in Parkinson's.`
          },
          {
            question: `In a randomized drug trial, patients do not know whether they receive the drug or a placebo, but the clinicians rating symptom severity do know. Rated improvement favors the drug. The inferential threat this design leaves open is:`,
            options: [`Failure of random assignment to balance groups at baseline`, `Patient expectancy, since patients knew which arm they were in`, `Rater expectancy biasing the symptom scores toward the drug`, `Regression to the mean in patients enrolled at their worst`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Only the patients are blinded, so the raters' expectations remain free to bend their scores toward the drug — the Rosenhan lesson, where staff read normal behavior through the label, applied to symptom ratings. Patient expectancy is controlled here, because patients were blinded and never knew their arm. Random assignment is a separate procedure that handles baseline confounds, and regression to the mean occurs in both arms, so the placebo comparison absorbs it.`
          },
          {
            question: `A study reports that a treatment works for "pure" social anxiety disorder, excluding anyone with depression or substance use. A critic notes most real-world patients with social anxiety carry such comorbidity. The critic is questioning the study's:`,
            options: [`Internal validity, because randomization failed to balance groups`, `External validity, since the screened sample is unrepresentative`, `Statistical significance, because the sample was too small`, `Blinding procedures, because raters knew the diagnoses`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Excluding comorbid patients strengthens internal validity (cleaner causal inference) at the price of external validity: results from an unrepresentative "pure" sample may not transfer to typical patients, since comorbidity is the rule in psychiatric populations. Nothing in the criticism concerns randomization, blinding, or the statistics computed within the sample — it concerns to WHOM the finding applies.`
          }
        ]
      }
    },
    {
      id: 'dis4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Frameworks map to treatments.** Behavioral → exposure, cognitive → restructuring, biological → drugs; biopsychosocial integrates.
- **Exposure is extinction.** Desensitization adds relaxation up a hierarchy; flooding starts at the top; response prevention blocks rituals.
- **The drug-class map.** SSRIs: depression, anxiety; benzodiazepines: short-term anxiety; lithium: bipolar; D2 blockers: psychosis.
- **Criteria bookkeeping.** 2 weeks MDD; 6 months GAD and schizophrenia; 1 month PTSD and panic's worry. Most wrong answers fail on duration.

**Common traps**

- **Grading against baseline.** Regression to the mean guarantees average improvement; compare arms, never baselines.
- **Response proves cause.** A treatment working, or failing, never proves a disorder's etiology, in either direction.
- **p-value as importance.** A significant difference can be tiny; check the effect size and functional outcomes.
- **Pure samples generalize.** Excluding comorbid patients helps internal validity but weakens external validity.`
    }
  ]
};
