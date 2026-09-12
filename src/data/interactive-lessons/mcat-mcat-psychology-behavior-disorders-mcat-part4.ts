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

**Passage.** 480 adults with moderate MDD are randomized to SSRI, pill placebo, CBT, or waitlist. Raters blind to condition score symptoms at 0, 8, and 24 weeks. At 8 weeks: SSRI improves 11.2 points from baseline, placebo 8.1, CBT 10.8, waitlist 4.9 (drug vs placebo p = 0.03, d = 0.28). At 24 weeks, relapse among responders is 41% for discontinued SSRI, 22% for CBT. Dropout: 31% SSRI (mostly side effects), 12% CBT. An editorial concludes "antidepressants barely beat sugar pills, so depression is not biological."

**Step 1 — read the four arms as machinery.** Waitlist improvement (4.9) estimates natural course plus regression to the mean — enrollees start near their nadir. Placebo (8.1) adds expectancy and clinical contact. Only the drug-minus-placebo gap (3.1, d = 0.28) is the pharmacological effect. Never grade any arm against baseline; grade arms against each other.

**Step 2 — evaluate the effect honestly.** The drug effect is statistically significant but small (d = 0.28) — a statistical-vs-clinical significance flag. CBT matches the drug acutely and HALVES relapse after treatment ends, the classic durability advantage of learned skills over discontinued medication. Differential dropout (31% vs 12%) biases completer analyses toward the drug — intention-to-treat analysis is the requested fix.

**Step 3 — dismantle the editorial.** Its inference commits a category error twice. First, a modest drug-placebo gap does not mean the drug does nothing — placebo arms in depression trials capture real improvement processes (expectancy, contact, regression), inflating the comparator. Second, treatment response NEVER certifies etiology in either direction: aspirin relieving headaches does not prove headaches are aspirin-deficiency diseases, and CBT working does not prove depression is "just thoughts." Etiology claims need etiological designs (Part 4 of the development lesson), not outcome trials.

**Step 4 — the anticipated items.** "Why include placebo rather than waitlist alone?" — to separate expectancy/contact effects from natural course. "Why blind the raters?" — observer expectations distort self-report-adjacent measures (the Rosenhan lesson operationalized). "Which patients does the trial's conclusion cover?" — moderate MDD completers under trial conditions; generalization beyond that is an external-validity question the data cannot settle.`
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
            explanation: `Graded exposure plus a trained incompatible response is systematic desensitization: the feared stimulus is repeatedly presented without catastrophe (classical extinction) while relaxation replaces fear (counterconditioning). Flooding would begin at maximum intensity with no hierarchy; token economies are operant institutional programs; free association belongs to the psychodynamic framework entirely.`
          },
          {
            question: `Patients with chronic pain enrolled in an uncontrolled trial "when symptoms became unbearable" improve markedly on a new supplement. Before crediting the supplement, the FIRST rival explanation a reader should raise is:`,
            options: [`The supplement's dose was too low to produce a real effect`, `The supplement works only for patients with the most severe pain`, `The improvement proves the patients' pain was imaginary all along`, `Regression to the mean plus expectancy, given enrollment at peak symptoms`],
            correctAnswer: 3,
            explanation: `Enrollment at an extreme guarantees average improvement by regression to the mean, and open-label treatment adds expectancy effects — together they can produce large "responses" to inert treatments. This is precisely what control arms exist to absorb. The other options either assume the supplement acted, posit a dosing problem that would not explain the improvement at all, or confuse improvement mechanisms with symptom reality.`
          },
          {
            question: `Match the first-line maintenance pharmacotherapy to the condition: recurrent cycling between manic and depressive episodes is most specifically treated with:`,
            options: [`Lithium, the prototype mood stabilizer`, `A benzodiazepine, such as lorazepam`, `A cholinesterase inhibitor, such as donepezil`, `L-DOPA, a dopamine precursor`],
            correctAnswer: 0,
            explanation: `Lithium is the prototype mood stabilizer for bipolar disorder, reducing both poles and suicide risk; the paired exam fact is that unopposed antidepressants risk switching a bipolar patient into mania. Benzodiazepines are short-term GABAergic anxiolytics, cholinesterase inhibitors target Alzheimer's cholinergic deficit, and L-DOPA replaces striatal dopamine in Parkinson's.`
          },
          {
            question: `In a drug trial, neither the patients nor the clinicians rating symptom severity know who receives active medication. The specific inferential threat this double-blind arrangement removes is:`,
            options: [`Failure of random assignment to balance groups at baseline`, `Regression to the mean in patients enrolled at their worst`, `Expectancy effects in both patients and symptom raters`, `Attrition of participants who drop out before the endpoint`],
            correctAnswer: 2,
            explanation: `Blinding targets expectations: unblinded patients respond to the belief they are treated, and unblinded raters — like Rosenhan's staff reading normal behavior as pathological — bend judgment toward what they expect to see. Randomization (a separate procedure) handles baseline confounds; regression to the mean is handled by having a control group at all; attrition must be addressed analytically, e.g., intention-to-treat.`
          },
          {
            question: `A study reports that a treatment works for "pure" social anxiety disorder, excluding anyone with depression or substance use. A critic notes most real-world patients with social anxiety carry such comorbidity. The critic is questioning the study's:`,
            options: [`Internal validity, because randomization failed to balance groups`, `External validity, since the screened sample is unrepresentative`, `Statistical significance, because the sample was too small`, `Blinding procedures, because raters knew the diagnoses`],
            correctAnswer: 1,
            explanation: `Excluding comorbid patients strengthens internal validity (cleaner causal inference) at the price of external validity: results from an unrepresentative "pure" sample may not transfer to typical patients, since comorbidity is the rule in psychiatric populations. Nothing in the criticism concerns randomization, blinding, or the statistics computed within the sample — it concerns to WHOM the finding applies.`
          }
        ]
      }
    },
    {
      id: 'dis4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Frameworks map to treatments: behavioral = exposure/extinction and counterconditioning (desensitization, flooding, response prevention, token economies); cognitive = restructuring; biological = the drug-class map (SSRIs, benzodiazepines, D2 antagonists, lithium, cholinesterase inhibitors, L-DOPA); biopsychosocial integrates
- Treatment response never proves etiology — in either direction
- Labels communicate and predict but also stigmatize and steer observer perception (Rosenhan's enduring lesson, methods critiques notwithstanding); medicalization is the social-construction flip side
- Trial reading: compare arms, never baselines (regression to the mean); placebo isolates expectancy; double-blind protects both patient response and rater judgment; watch differential dropout, comorbidity exclusions (external validity), and effect size vs p-value
- Criteria bookkeeping wins items: 2 weeks MDD, 6 months GAD and schizophrenia, 1 month PTSD and panic disorder's worry criterion — most wrong diagnoses in answer choices fail on duration`
    }
  ]
};
