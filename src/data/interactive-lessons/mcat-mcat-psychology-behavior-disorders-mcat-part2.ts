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
- **Monoamine hypothesis**: reduced serotonin/norepinephrine signaling; supported by antidepressant pharmacology, but the weeks-long therapeutic lag despite immediate synaptic effects shows it is incomplete (current work emphasizes downstream neuroplasticity)

<!-- yield:low -->
- The best-studied neuroplasticity signal is brain-derived neurotrophic factor (BDNF), which chronic antidepressant treatment raises.
<!-- /yield -->

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

Two or more of five criteria (delusions, hallucinations, disorganized speech, disorganized/catatonic behavior, negative symptoms) for a **1-month active phase**, with continuous disturbance **≥ 6 months** and major functional decline; at least one must be delusions, hallucinations, or disorganized speech. The criteria group as:

- **Positive symptoms** (added to experience): **delusions** (fixed false beliefs — persecutory, grandiose, referential), **hallucinations** (perceptions without stimuli — auditory most common), **disorganized speech** (derailment, word salad)
- Grossly disorganized or **catatonic** behavior
- **Negative symptoms** (subtracted): flat/blunted affect, **avolition** (loss of motivation), **alogia** (poverty of speech), anhedonia, asociality — these predict functional outcome best and respond worst to classic drugs

Beyond the diagnostic criteria, **cognitive symptoms** (working memory, attention deficits) are increasingly emphasized.

Timeline: **prodrome** (withdrawal, odd beliefs) → active phase → residual. Schizophreni**form** = same picture 1-6 months; **brief psychotic disorder** < 1 month; **schizoaffective** = psychosis meeting schizophrenia criteria PLUS major mood episodes, with delusions/hallucinations also present at times WITHOUT mood symptoms.

<!-- yield:low -->
- Schizoaffective disorder's formal rule: at least 2 weeks of delusions or hallucinations in the absence of a major mood episode.
<!-- /yield -->

**Dopamine hypothesis**: excess mesolimbic dopamine → positive symptoms (supported by D2-blocking antipsychotics and amphetamine-induced psychosis); mesocortical HYPOactivity linked to negative/cognitive symptoms — one transmitter, two pathways, opposite directions. Glutamate (NMDA hypofunction) is the major newer thread. Etiology: strong heritability + prenatal insults + stress — the diathesis-stress showcase.`
    },
    {
      id: 'dis2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Two-Pathway Pharmacology Passage, Fully Read

**Problem 1.** A 21-year-old junior has had a month of conviction that campus cameras broadcast his thoughts, two voices commenting on his actions, and tangential speech. His roommate describes a year of withdrawal, declining hygiene and abandoned activities before that.

- **(a)** Which of his symptoms are positive symptoms?
- **(b)** What is the year that came before, and which symptoms does it contain?
- **(c)** Does his course meet schizophrenia's duration criteria?

**(a) The active phase.** The thought-broadcasting delusion, the commenting voices and the tangential speech are all positive symptoms, and together they make up a 1-month active phase.

**(b) The prodrome.** The preceding year of withdrawal and decline is the prodrome. Its abandoned activities and withdrawal (avolition, asociality) are negative symptoms.

**(c) Yes.** A 1-month active phase plus a year of prodrome exceeds the 6 months of continuous disturbance. Both criteria columns are satisfied: the vignette is built to make you assemble the timeline.

**Problem 2.** On a D2-antagonist antipsychotic, his voices and delusion fade within weeks, but he remains flat, unmotivated, and socially disengaged; he also develops tremor and rigidity.

- **(a)** What does the relief of his voices and delusion suggest about mesolimbic dopamine?
- **(b)** Why do the flat affect and low motivation persist?
- **(c)** Where do the tremor and rigidity come from?

**(a) Mesolimbic excess.** D2 blockade relieves positive symptoms, which is consistent with mesolimbic dopamine EXCESS.

**(b) Mesocortical hypofunction.** Negative symptoms fit an underactive mesocortical pathway. Blocking dopamine cannot fix a pathway that is already underactive, and it may worsen it.

**(c) The nigrostriatal pathway.** D2 blockade in this third pathway produces parkinsonism. Connect it to Parkinson's disease pharmacology, where the therapeutic direction is reversed.

**Problem 3.** A research aside notes that amphetamine at high doses reproduces paranoid psychosis in healthy users, and that an NMDA antagonist (ketamine) transiently produces BOTH positive-like and negative-like symptoms in volunteers.

- **(a)** What does the amphetamine finding support?
- **(b)** What does the ketamine finding add?

**(a) Dopamine for positive symptoms.** Amphetamine, a dopamine releaser, reproduces ONLY paranoid positive symptoms. That supports dopamine's sufficiency for that cluster.

**(b) Glutamate upstream.** Ketamine reproducing both clusters is the standard argument that NMDA/glutamate hypofunction sits upstream. It explains what the dopamine hypothesis alone cannot: the negative and cognitive symptoms.

**Problem 4.** A passage item asks which feature best distinguishes his negative symptoms from a co-occurring major depressive episode.

- **(a)** What would mark a major depressive episode?
- **(b)** What marks primary negative symptoms?
- **(c)** What course would bring schizoaffective disorder into the differential?

**(a) Depressed mood.** Depression carries prominent depressed MOOD and guilt, with idea generation intact.

**(b) Absence.** Primary negative symptoms present as absence: flat affect and avolition without the subjective sadness. They also predate the mood-reactive picture.

**(c) Mood episodes plus psychosis outside them.** If a full mood episode dominated the course while psychosis also persisted outside it, schizoaffective disorder would enter the differential. Course bookkeeping decides.`
    },
    {
      id: 'dis2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mood Disorders & Psychosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient has had two episodes of four days of expansive mood, racing thoughts, and feeling rested on three hours of sleep — during which she remained employed and was never psychotic — plus one prior two-month episode of major depression. Her diagnosis, and the feature that rules OUT the alternative, are:`,
            options: [`Bipolar II; her elevated episodes are hypomanic, never manic`, `Bipolar I, because a major depressive episode has occurred alongside elevated mood`, `Cyclothymia, because four-day elevated episodes fall short of the hypomanic threshold`, `Major depressive disorder with insomnia, since her three-hour nights mark depressive sleep loss`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Four-day elevated episodes without severe impairment, psychosis, or hospitalization are hypomania; hypomania plus at least one major depressive episode defines Bipolar II. Bipolar I requires full mania (a week, or any duration if hospitalized) and does NOT require depression. Four days is exactly the hypomanic threshold, so her episodes exceed cyclothymia's subthreshold fluctuations, and her major depressive episode rules out cyclothymia outright. Feeling RESTED on little sleep is decreased need for sleep — the opposite of insomnia.`
          },
          {
            question: `Six months into treatment, a patient with schizophrenia no longer hears voices, but rarely speaks spontaneously, initiates no activities, and shows little facial expression. Compared with the voices he once heard, these residual features are the ones that:`,
            options: [`Will clear once his D2-blocker dose is raised further`, `Show that the diagnosis was brief psychotic disorder`, `Signal that the voices will return within a few weeks`, `Best predict his long-term social and job functioning`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Poverty of speech, loss of motivation, and blunted affect are negative (subtracted) symptoms, and negative symptoms predict functional outcome better than positive ones while responding worst to classic antipsychotics. A higher D2-blocker dose quiets mesolimbic excess but cannot restore an underactive mesocortical pathway, so these features will not simply clear. Six months of illness rules out brief psychotic disorder (under one month), and persisting negative symptoms carry no forecast that the voices will return.`
          },
          {
            question: `Two observations historically anchored the dopamine hypothesis of psychosis: clinical potency of early antipsychotics correlated with D2-receptor affinity, and:`,
            options: [`Light therapy improved seasonal depression by shifting circadian timing`, `L-DOPA can trigger hallucinations and paranoia in Parkinson's patients`, `Lithium stabilized mood swings in patients with bipolar disorder`, `Benzodiazepines reduced anxiety by enhancing GABA-A receptor activity`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The hypothesis rests on converging pharmacology: blocking D2 receptors relieves positive symptoms, and boosting dopamine (L-DOPA given for Parkinson's disease, or high-dose amphetamine) can CREATE them. Together they bracket dopamine from both directions. The lithium, light-therapy, and GABA facts are true but belong to other disorders and carry no evidence about psychosis mechanisms.`
          },
          {
            question: `A patient reports two weeks of profound loss of interest in previously enjoyed activities, weight loss, insomnia, fatigue, worthlessness, and poor concentration, but insists his mood is "fine, just numb." Can he meet criteria for major depressive disorder?`,
            options: [`No; depressed mood is a mandatory criterion that anhedonia cannot replace`, `No; he needs these symptoms most days for at least six months before diagnosis`, `Yes; anhedonia can stand in for depressed mood as the cardinal symptom`, `Only if psychotic features, such as mood-congruent delusions, are present`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `MDD requires five of nine symptoms for two weeks, with at least ONE being depressed mood OR anhedonia — the two cardinal symptoms are alternatives, not co-requirements. His pervasive loss of interest satisfies the cardinal criterion, and he lists six symptoms total. The six-month duration belongs to GAD and schizophrenia, not MDD, and psychosis is a specifier, never a requirement.`
          },
          {
            question: `Adoption studies show that children of biological parents with schizophrenia raised in healthy adoptive homes develop the disorder at elevated rates — but far below 100% — and that rates climb further when the adoptive environment is highly dysfunctional. This pattern best supports:`,
            options: [`The diathesis-stress model: inherited vulnerability plus environmental adversity`, `A purely genetic account, since biological parentage predicts the disorder`, `A purely environmental account, since dysfunctional rearing raises the rates`, `The monoamine hypothesis linking depression to neurotransmitter levels`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Elevated risk following biological (not adoptive) parentage demonstrates a genetic diathesis; penetrance far below 100% plus amplification by adverse rearing demonstrates environmental modulation. Neither pure account survives both findings — the interaction IS the diathesis-stress model, and schizophrenia is its textbook showcase. The monoamine hypothesis concerns depression's neurochemistry, not schizophrenia's etiology.`
          }
        ]
      }
    },
    {
      id: 'dis2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **MDD criteria.** Five symptoms for 2+ weeks, one being depressed mood or anhedonia; dysthymia is milder but lasts 2+ years.
- **Bipolar bookkeeping.** Mania (1+ week, or hospitalized) = Bipolar I; hypomania (4+ days) + major depression = II; cyclothymia: 2 years subthreshold.
- **Schizophrenia criteria.** Two of five symptoms, one of them core psychotic: a 1-month active phase within 6+ months.
- **Dopamine, two pathways.** Mesolimbic excess is linked to positive symptoms; mesocortical deficit to negative ones.

**Common traps**

- **Need vs. inability to sleep.** Feeling rested on 3 hours is decreased need for sleep (mania); insomnia is tired yet sleepless.
- **Requiring depressed mood.** Anhedonia can replace depressed mood as the cardinal symptom of MDD.
- **Calling short psychosis schizophrenia.** Under 1 month is brief psychotic disorder; 1–6 months is schizophreniform.
- **Fearing to ask about suicide.** Asking directly assesses risk and does not create it.

<!-- yield:low -->
**Low-yield extras**

- BDNF as the best-studied neuroplasticity signal in depression; schizoaffective disorder's formal 2-week rule for psychosis without a mood episode.
<!-- /yield -->`
    }
  ]
};
