export const mcatPsychDisordersPart2Data = {
  topicSlug: 'mcat-psychology-behavior-disorders-mcat',
  sections: [
    {
      id: 'dis2-intro',
      type: 'text' as const,
      content: `# Psychological Disorders

**Part 2 of 4 — Mood Disorders & Schizophrenia**

### Major Depressive Disorder (MDD)

Diagnosis requires **≥ 5 symptoms for ≥ 2 weeks**, including at least one of the two cardinal symptoms:

- **Depressed mood** most of the day, nearly every day
- **Anhedonia** — markedly diminished interest or pleasure

Plus: appetite/weight change, insomnia or hypersomnia, psychomotor agitation/retardation, fatigue, worthlessness or inappropriate guilt, impaired concentration, recurrent thoughts of death. **Persistent depressive disorder (dysthymia)**: milder but chronic — depressed mood more days than not for **≥ 2 years**. Seasonal pattern responds to light therapy.

**Biological correlates** (correlates, not proven single causes):
- **Monoamine hypothesis**: reduced serotonin/norepinephrine signaling; supported by antidepressant pharmacology, but the weeks-long therapeutic lag despite immediate synaptic effects shows it is incomplete (current work emphasizes downstream neuroplasticity, e.g., BDNF)
- **HPA axis** hyperactivity (elevated cortisol); reduced **hippocampal** volume in chronic illness
- Suicide risk assessment is part of any depression vignette: prior attempts, plan and means, hopelessness, substance use, social isolation — asking about suicide does NOT increase risk

### Bipolar Disorders (defined by the ELEVATED pole)

| Diagnosis | Requirement | Depression required? |
|-----------|-------------|----------------------|
| **Bipolar I** | ≥ 1 **manic** episode: ≥ 1 week (or any duration if hospitalized) of elevated/irritable mood + increased energy, with grandiosity, decreased **need** for sleep, pressured speech, flight of ideas, distractibility, risky spending/behavior; severe impairment, possibly **psychotic features** | No — mania alone suffices |
| **Bipolar II** | ≥ 1 **hypomanic** episode (≥ 4 days, same symptom list but NO marked impairment, NO psychosis, NO hospitalization) + ≥ 1 **major depressive** episode | Yes |
| **Cyclothymia** | ≥ 2 years of subthreshold hypomanic and depressive fluctuations | Subthreshold both poles |

Discriminator: decreased **need** for sleep (rested after 3 hours) vs. insomnia (tired, cannot sleep). First-line mood stabilizer: **lithium**; antidepressant monotherapy risks switching a bipolar patient into mania.

### Schizophrenia (psychosis = break with reality testing)

Two or more of the following for a **1-month active phase**, with continuous disturbance **≥ 6 months** and major functional decline (at least one symptom must be from the first three):

- **Positive symptoms** (added to experience): **delusions** (fixed false beliefs — persecutory, grandiose, referential), **hallucinations** (perceptions without stimuli — auditory most common), **disorganized speech** (derailment, word salad)
- Grossly disorganized or **catatonic** behavior
- **Negative symptoms** (subtracted): flat/blunted affect, **avolition** (loss of motivation), **alogia** (poverty of speech), anhedonia, asociality — these predict functional outcome best and respond worst to classic drugs
- Cognitive symptoms (working memory, attention deficits) — increasingly emphasized

Timeline: **prodrome** (withdrawal, odd beliefs) → active phase → residual. Schizophreni**form** = same picture 1-6 months; **brief psychotic disorder** < 1 month; **schizoaffective** = psychosis meeting schizophrenia criteria PLUS major mood episodes, with ≥ 2 weeks of delusions/hallucinations WITHOUT mood symptoms.

**Dopamine hypothesis**: excess mesolimbic dopamine → positive symptoms (supported by D2-blocking antipsychotics and amphetamine-induced psychosis); mesocortical HYPOactivity linked to negative/cognitive symptoms — one transmitter, two pathways, opposite directions. Glutamate (NMDA hypofunction) is the major newer thread. Etiology: strong heritability + prenatal insults + stress — the diathesis-stress showcase.`
    },
    {
      id: 'dis2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Two-Pathway Pharmacology Passage, Fully Read

**Passage.** A 21-year-old college junior is brought in after a month of conviction that campus cameras broadcast his thoughts, hearing two voices commenting on his actions, and increasingly tangential speech. His roommate reports a year of gradual withdrawal, declining hygiene, and abandoned activities preceding the acute symptoms. On a D2-antagonist antipsychotic, the voices and delusion fade within weeks, but he remains flat, unmotivated, and socially disengaged; he also develops tremor and rigidity. A research aside notes that amphetamine at high doses reproduces paranoid psychosis in healthy users, and that an NMDA antagonist (ketamine) transiently produces BOTH positive-like and negative-like symptoms in volunteers.

**Step 1 — inventory and classify the symptoms.** Thought broadcasting delusion + commenting voices + tangential speech = positive symptoms (1-month active phase). The preceding year of withdrawal, avolition, and decline = prodrome contributing to the 6-month duration criterion, and its avolition/flat affect are negative symptoms. Both criteria columns are satisfied — the vignette is built to make you assemble the timeline.

**Step 2 — read the treatment response as pathway evidence.** D2 blockade relieves positive symptoms → consistent with mesolimbic dopamine EXCESS. Persistence of negative symptoms fits mesocortical HYPOfunction — blocking dopamine cannot fix a pathway that is already underactive (and may worsen it). The motor side effects (tremor, rigidity) are the third pathway: nigrostriatal D2 blockade producing parkinsonism — connect to Parkinson's disease pharmacology, where the therapeutic direction is reversed.

**Step 3 — use the drug-model evidence.** Amphetamine (dopamine releaser) reproducing ONLY paranoid positive symptoms supports dopamine's sufficiency for that cluster; ketamine reproducing both clusters is the standard argument that NMDA/glutamate hypofunction sits upstream, explaining what the dopamine hypothesis alone cannot — the negative/cognitive symptoms.

**Step 4 — the discrimination item to expect.** "Which feature best distinguishes his negative symptoms from a co-occurring major depressive episode?" Depression carries prominent depressed MOOD and guilt with intact idea generation; primary negative symptoms present as absence — flat affect and avolition without the subjective sadness — and predate the mood-reactive picture. If a full mood episode dominated the course with psychosis persisting 2+ weeks outside it, schizoaffective disorder would enter the differential — duration bookkeeping decides.`
    },
    {
      id: 'dis2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mood Disorders & Psychosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient has had two episodes of four days of expansive mood, racing thoughts, and feeling rested on three hours of sleep — during which she remained employed and was never psychotic — plus one prior two-month episode of major depression. Her diagnosis, and the feature that rules OUT the alternative, are:`,
            options: [`Bipolar II; her elevated episodes are hypomanic, which excludes Bipolar I`, `Bipolar I, because a major depressive episode has occurred alongside elevated mood`, `Cyclothymia, because her elevated episodes lasted only four days each`, `Major depressive disorder with insomnia, since she slept only three hours`],
            correctAnswer: 0,
            explanation: `Four-day elevated episodes without severe impairment, psychosis, or hospitalization are hypomania; hypomania plus at least one major depressive episode defines Bipolar II. Bipolar I requires full mania (a week, or any duration with hospitalization/psychosis) and does NOT require depression. Her episodes exceed cyclothymia's subthreshold requirement, and feeling RESTED on little sleep is decreased need for sleep — the opposite of insomnia.`
          },
          {
            question: `Six months into treatment, a patient with schizophrenia no longer hears voices, but rarely speaks spontaneously, initiates no activities, and shows little facial expression. These residual features are classified as:`,
            options: [`Positive symptoms that are responding slowly to medication`, `Catatonia secondary to the underlying psychotic illness`, `Medication-induced parkinsonism from D2 blockade`, `Negative symptoms: alogia, avolition, and flat affect`],
            correctAnswer: 3,
            explanation: `Hallucinations and delusions are positive (added) phenomena; poverty of speech, loss of motivation, and blunted affect are negative (subtracted) phenomena. The dissociated treatment response is classic: D2 blockade quiets mesolimbic excess but does not restore mesocortical function. Parkinsonism would present with tremor and rigidity, and catatonia with posturing or stupor — neither is described.`
          },
          {
            question: `Two observations historically anchored the dopamine hypothesis of psychosis: clinical potency of early antipsychotics correlated with D2-receptor affinity, and:`,
            options: [`Light therapy improved seasonal depression by shifting circadian timing`, `High-dose amphetamine induces paranoid psychosis in people without schizophrenia`, `Lithium stabilized mood swings in patients with bipolar disorder`, `Benzodiazepines reduced anxiety by enhancing GABA-A receptor activity`],
            correctAnswer: 1,
            explanation: `The hypothesis rests on converging pharmacology: blocking D2 receptors relieves positive symptoms, and boosting dopamine (amphetamine, or L-DOPA in Parkinson's patients) can CREATE them. Together they bracket dopamine from both directions. The lithium, light-therapy, and GABA facts are true but belong to other disorders and carry no evidence about psychosis mechanisms.`
          },
          {
            question: `A patient reports two weeks of profound loss of interest in previously enjoyed activities, weight loss, insomnia, fatigue, worthlessness, and poor concentration, but insists his mood is "fine, just numb." Can he meet criteria for major depressive disorder?`,
            options: [`No; depressed mood is a mandatory criterion that anhedonia cannot replace`, `No; he needs these symptoms to persist for at least six months`, `Yes; anhedonia can substitute for depressed mood as the cardinal symptom`, `Only if psychotic features, such as mood-congruent delusions, are present`],
            correctAnswer: 2,
            explanation: `MDD requires five of nine symptoms for two weeks, with at least ONE being depressed mood OR anhedonia — the two cardinal symptoms are alternatives, not co-requirements. His pervasive loss of interest satisfies the cardinal criterion, and he lists six symptoms total. The six-month duration belongs to GAD and schizophrenia, not MDD, and psychosis is a specifier, never a requirement.`
          },
          {
            question: `Adoption studies show that children of biological parents with schizophrenia raised in healthy adoptive homes develop the disorder at elevated rates — but far below 100% — and that rates climb further when the adoptive environment is highly dysfunctional. This pattern best supports:`,
            options: [`The diathesis-stress model: inherited vulnerability plus environmental adversity`, `A purely genetic account, since biological parentage predicts the disorder`, `A purely environmental account, since dysfunctional rearing raises the rates`, `The monoamine hypothesis linking depression to neurotransmitter levels`],
            correctAnswer: 0,
            explanation: `Elevated risk following biological (not adoptive) parentage demonstrates a genetic diathesis; penetrance far below 100% plus amplification by adverse rearing demonstrates environmental modulation. Neither pure account survives both findings — the interaction IS the diathesis-stress model, and schizophrenia is its textbook showcase. The monoamine hypothesis concerns depression's neurochemistry, not schizophrenia's etiology.`
          }
        ]
      }
    },
    {
      id: 'dis2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- MDD: 5+ symptoms, 2+ weeks, cardinal = depressed mood OR anhedonia; dysthymia = 2+ years chronic; monoamine hypothesis is supported but incomplete (therapeutic lag → neuroplasticity); HPA/cortisol and hippocampal findings
- Bipolar bookkeeping: mania (1 week, impairment/psychosis/hospitalization) = Bipolar I, no depression needed; hypomania (4 days, no marked impairment) + major depression = Bipolar II; 2 years subthreshold = cyclothymia; decreased NEED for sleep is the tell; lithium stabilizes
- Schizophrenia: 2+ of delusions/hallucinations/disorganized speech (one mandatory) + catatonia/negative symptoms; 1-month active in 6+ months total; schizophreniform 1-6 months, brief psychotic under 1 month, schizoaffective = psychosis outlasting mood episodes by 2+ weeks
- Dopamine hypothesis: mesolimbic excess = positive symptoms (D2 blockers, amphetamine psychosis); mesocortical deficit = negative/cognitive; nigrostriatal blockade = parkinsonian side effects; NMDA hypofunction covers what dopamine alone cannot
- Ask about suicide directly — it assesses risk and does not create it`
    }
  ]
};
