export const psychTreatmentPart5Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 5 of 7 — Biomedical Treatments**

> 🔑 **Key Concept:** Biomedical treatments come from the **biological perspective**. Psychoactive medications **interact with specific neurotransmitters in the central nervous system** to address possible biochemical causes of disorders, and surgical or invasive procedures act on the brain directly (CED 5.5.G). To reason about any drug on the exam, connect it to what you learned about the synapse in Unit 1.

### Unit 1 review: three ways a drug can act at the synapse

| Action | What it does | Effect on the neurotransmitter's activity |
|---|---|---|
| **Agonist** | Mimics a neurotransmitter or boosts its effect at the receptor | Increases |
| **Antagonist** | Blocks the receptor so the neurotransmitter cannot bind | Decreases |
| **Reuptake inhibitor** | Blocks the sending neuron from reabsorbing the neurotransmitter, so more stays in the synapse longer | Increases |

### Neurotransmitters you need here

Only neurotransmitters on the CED list are tested. For treatment, the key ones are **serotonin** and **norepinephrine** (antidepressants), **GABA** (antianxiety drugs), and **dopamine** (antipsychotics and tardive dyskinesia).

| Category of treatment | Covered in this part |
|---|---|
| Antidepressants | Yes |
| Antianxiety drugs | Yes |
| Lithium | Yes |
| Antipsychotics | Yes |
| ECT, TMS, psychosurgery, lobotomy | Yes |
      `
    },
    {
      id: 'treatment-therapy-p5-s2-medications',
      type: 'text' as const,
      content: `
## Psychoactive Medications

| Class | Main use | How it acts | Notes and side effects |
|---|---|---|---|
| **Antidepressants: SSRIs** (selective serotonin reuptake inhibitors) | Depressive disorders; also many anxiety disorders and OCD | Block **reuptake of serotonin**, leaving more serotonin in the synapse | Full benefit usually takes several weeks; side effects can include nausea, sleep changes, and sexual side effects |
| **Antidepressants: SNRIs** and older classes | Depressive disorders | Increase the activity of **serotonin and norepinephrine** | Older classes tend to have more side effects |
| **Antianxiety drugs: benzodiazepines** | Short-term relief of anxiety and panic | Enhance the inhibitory effect of **GABA**, calming neural activity | Act quickly; risk of tolerance and dependence; dangerous when combined with alcohol, another depressant |
| **Lithium** | **Bipolar disorder**: a mood stabilizer that reduces manic and depressive episodes | Exact mechanism is not fully understood | The effective dose is close to a harmful dose, so blood levels are checked regularly |
| **Antipsychotics** | Schizophrenia spectrum disorders and other conditions with psychotic symptoms | Block **dopamine receptors** (dopamine antagonists); newer ("atypical") drugs also act on serotonin | Reduce positive symptoms such as hallucinations and delusions; long-term use of dopamine-blocking drugs can cause **tardive dyskinesia** |

### Tardive dyskinesia

The CED names one side effect specifically: **tardive dyskinesia**, a **movement disorder related to the regulation of dopamine**. "Tardive" means late-appearing. After long-term use of antipsychotics that block dopamine, some people develop **involuntary movements**, often of the face, lips, and tongue (lip smacking, tongue movements, grimacing), and sometimes of the limbs. It links back to Unit 1: dopamine helps regulate movement as well as mood and reward.

### Worked Example: Reasoning from the synapse

**Question.** Why would an SSRI increase serotonin's effect, even though it does not add any new serotonin?

**Step 1: Normal process.** A sending neuron releases serotonin into the synapse. Some binds to receptors on the receiving neuron; the rest is quickly reabsorbed by the sending neuron (reuptake).

**Step 2: The drug's action.** An SSRI blocks the reuptake channel for serotonin.

**Step 3: The result.** Serotonin stays in the synapse longer and keeps activating receptors. The total amount released has not changed; it simply lingers.

**Step 4: Connect to the disorder.** A biological account of depression points to low serotonin activity (see Mood and Psychotic Disorders), so prolonging serotonin's action is meant to address that possible biochemical cause.

### Worked Example: Predicting a side effect

**Question.** A man with schizophrenia has taken a first-generation antipsychotic for many years. Why might he develop involuntary facial movements?

**Step 1.** First-generation antipsychotics are **dopamine antagonists**.

**Step 2.** Dopamine also helps regulate **movement**.

**Step 3.** Long-term dopamine blockade can disrupt motor regulation, producing **tardive dyskinesia**.

> 🔑 **AP Connection:** Always name the neurotransmitter **and** the direction. "SSRIs increase serotonin activity by blocking reuptake" earns credit; "SSRIs affect serotonin" usually does not.
      `
    },
    {
      id: 'treatment-therapy-p5-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Medications** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A selective serotonin reuptake inhibitor increases serotonin activity mainly by",
            options: [
              "causing the sending neuron to release more serotonin",
              "blocking the sending neuron from reabsorbing serotonin",
              "breaking down serotonin faster in the synaptic gap",
              "blocking serotonin receptors on the membrane of the receiving neuron"
            ],
            correctAnswer: 1,
            explanation: "SSRIs block reuptake, so released serotonin stays in the synapse longer. Blocking receptors would decrease serotonin's effect, and SSRIs do not increase how much serotonin is released."
          },
          {
            question: "A person with panic disorder is prescribed a benzodiazepine for short-term relief. The drug reduces anxiety mainly by",
            options: [
              "blocking dopamine receptors in the brain",
              "increasing the calming effect of GABA",
              "slowing the reuptake of serotonin",
              "mimicking the effect of endorphins"
            ],
            correctAnswer: 1,
            explanation: "Benzodiazepines enhance GABA, the main inhibitory neurotransmitter, which calms neural activity. Blocking dopamine describes antipsychotics, and slowing serotonin reuptake describes SSRIs."
          },
          {
            question: "After many years of taking a first-generation antipsychotic, a man with schizophrenia develops involuntary lip smacking, tongue thrusting, and facial grimacing. This is best explained as",
            options: [
              "a withdrawal reaction linked to reduced GABA activity",
              "a lithium side effect from its narrow safe dose range",
              "a movement disorder from long-term dopamine blockade",
              "memory loss linked to treatment-induced brain seizures"
            ],
            correctAnswer: 2,
            explanation: "These symptoms describe tardive dyskinesia, a movement disorder tied to long-term use of dopamine-blocking antipsychotics. The man is not taking lithium or a GABA-acting drug, and seizures are induced only in ECT."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p5-s4-procedures',
      type: 'text' as const,
      content: `
## Surgical and Invasive Interventions

The CED lists three: **psychosurgery** (which may involve lesioning), **TMS**, and **electroconvulsive therapy**, plus the history of the **lobotomy** (5.5.G.2).

| Intervention | What happens | Main use today | Key facts |
|---|---|---|---|
| **Electroconvulsive therapy (ECT)** | A brief electric current passed through the brain triggers a controlled seizure | **Severe depression** that has not responded to other treatment | Given under **general anesthesia** with a **muscle relaxant**, usually as a series of sessions; the main side effect is memory loss for events around the treatment period |
| **Transcranial magnetic stimulation (TMS)** | An electromagnetic coil held against the scalp delivers repeated magnetic pulses that stimulate neurons in a targeted brain area | Depression that has not responded to medication | **Noninvasive**: no surgery, no anesthesia, no seizure intended; the person is awake; side effects are usually mild, such as headache or scalp discomfort |
| **Psychosurgery** | Surgery that removes or destroys brain tissue; **lesioning** destroys a precise area | A last resort for a very small number of people with severe disorders that have not responded to any other treatment | **Irreversible**, so it is used extremely rarely |
| **Lobotomy** | A form of psychosurgery that cut connections between the prefrontal cortex and deeper brain regions | None | **Popular in the mid-20th century; rarely, if ever, performed today.** It often left people lethargic, emotionally flat, and impaired |

### ECT today vs. its reputation

Popular images of ECT often show a fully awake person convulsing violently. That picture does not describe modern practice: the person is under anesthesia, the muscle relaxant prevents violent movement, and the procedure is a medical treatment, not a punishment. ECT remains in use because it can help some people with severe depression for whom medications and psychotherapy have failed.

### Why the lobotomy disappeared

The lobotomy spread in the mid-20th century, when few effective treatments existed for severe disorders. It was crude and irreversible, and it often caused lasting harm. Once antipsychotic medications became available, the procedure fell out of use. It now serves as a historical example of why treatments must be tested carefully, and of the ethical principle of **nonmaleficence** from Part 1.

### Worked Example: Comparing ECT and TMS

| Question | ECT | TMS |
|---|---|---|
| What reaches the brain? | Electric current | Magnetic pulses |
| Is a seizure the goal? | Yes, a controlled seizure | No |
| Anesthesia? | Yes, general anesthesia and a muscle relaxant | No; the person is awake |
| Invasive? | More invasive | Noninvasive |
| Typical candidate | Severe depression that has not responded to other treatment | Depression that has not responded to medication |

**Reasoning tip.** The words "magnetic," "coil," and "awake" point to TMS. The words "anesthesia," "seizure," and "electric current" point to ECT.

> 🔑 **AP Connection:** Do not describe ECT as a punishment or as something done to a conscious person. Do not describe the lobotomy as a current treatment. Both are common wrong-answer traps.
      `
    },
    {
      id: 'treatment-therapy-p5-s5-input',
      type: 'input-boxes' as const,
      content: `
**Name the Neurotransmitter** ✍️

Type the single neurotransmitter each treatment acts on most directly.
      `,
      exercise: {
        questions: [
          {
            question: 'Benzodiazepines reduce anxiety by enhancing the inhibitory effect of which neurotransmitter?',
            answer: 'GABA',
            acceptableAnswers: ['gamma-aminobutyric acid', 'gamma aminobutyric acid'],
            explanation: 'Benzodiazepines boost GABA, the brain\'s main inhibitory neurotransmitter.'
          },
          {
            question: 'Antipsychotic medications reduce hallucinations by blocking receptors for which neurotransmitter?',
            answer: 'dopamine',
            acceptableAnswers: ['DA'],
            explanation: 'Antipsychotics are dopamine antagonists; long-term use can cause tardive dyskinesia.'
          },
          {
            question: 'SSRIs block the reuptake of which neurotransmitter?',
            answer: 'serotonin',
            acceptableAnswers: ['5-HT', '5HT'],
            explanation: 'Selective serotonin reuptake inhibitors keep serotonin in the synapse longer.'
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p5-s6-evaluate',
      type: 'text' as const,
      content: `
## Evaluating Biomedical Treatments

### Strengths and limits

| Strengths | Limits |
|---|---|
| Can reduce severe symptoms, such as psychosis or mania, that make other treatment impossible | Side effects range from mild to serious, such as tardive dyskinesia or dependence on benzodiazepines |
| Some act quickly (benzodiazepines) or help when nothing else has (ECT for severe depression) | Symptoms may return when medication stops; medication alone does not teach coping skills |
| Work well **combined** with psychotherapy, the current preferred approach (Part 1) | Not everyone responds to the first medication tried; finding the right one can take time |

### Medication and the placebo effect

Because people who **expect** to feel better often do, drug trials compare the real medication with a **placebo** (an inactive pill) and are run **double-blind**, so neither participants nor the researchers who assess them know who received which. Part 6 looks at how outcome studies are designed.

### Worked Example: Choosing a biomedical option

| Person | Situation | Most fitting biomedical option | Why |
|---|---|---|---|
| Aisha, 45 | Bipolar I disorder with repeated manic episodes | **Lithium** | Mood stabilizer that reduces manic and depressive episodes |
| Ben, 52 | Severe major depressive disorder; several medications and psychotherapy have not helped | **ECT** | Used for severe depression that has not responded to other treatment |
| Carmen, 30 | Hears voices and holds fixed false beliefs during a psychotic episode | **Antipsychotic** | Blocks dopamine receptors to reduce positive symptoms |
| Dev, 38 | Depression that has not responded to two medications; wants to avoid anesthesia | **TMS** | Noninvasive magnetic stimulation; the person stays awake |

In every case, a current treatment plan would usually pair the biomedical option with psychotherapy.

> 🔑 **AP Connection:** In a free-response answer, a biomedical explanation earns credit when it names the **mechanism**, such as "lithium stabilizes mood" or "an antipsychotic blocks dopamine receptors, reducing hallucinations." Saying only "medication helps" is too vague.
      `
    },
    {
      id: 'treatment-therapy-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Biomedical Treatments** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A woman with severe major depressive disorder has not improved after several medications. Her psychiatrist recommends a series of sessions in which she receives general anesthesia and a muscle relaxant before a brief electric current induces a controlled seizure. Which treatment is this?",
            options: [
              "Transcranial magnetic stimulation",
              "Electroconvulsive therapy",
              "Prefrontal lobotomy",
              "Electrical lesioning of the amygdala"
            ],
            correctAnswer: 1,
            explanation: "An electric current that induces a controlled seizure under anesthesia is ECT, used for severe depression that has not responded to other treatment. TMS uses magnetic pulses without anesthesia or a seizure."
          },
          {
            question: "Which feature best distinguishes transcranial magnetic stimulation from electroconvulsive therapy?",
            options: [
              "TMS destroys a small area of brain tissue to ease symptoms",
              "TMS is given to an awake person with no anesthesia required",
              "TMS triggers a controlled seizure under general anesthesia",
              "TMS is used mainly for schizophrenia instead of depression"
            ],
            correctAnswer: 1,
            explanation: "TMS is noninvasive: magnetic pulses are delivered through the scalp while the person is awake. Triggering a seizure under anesthesia describes ECT, and destroying tissue describes lesioning."
          },
          {
            question: "Which statement about the lobotomy is accurate?",
            options: [
              "It was introduced in the late 20th century to replace medication",
              "It was popular in the mid-20th century and is rarely if ever done today",
              "It remains a first-line 21st-century treatment for schizophrenia",
              "It is a noninvasive procedure that leaves brain tissue unchanged"
            ],
            correctAnswer: 1,
            explanation: "The lobotomy was a form of psychosurgery popular in the mid-20th century and is rarely, if ever, performed today. It was invasive and irreversible, and medication helped replace it rather than the other way around."
          },
          {
            question: "A man with bipolar I disorder is prescribed a mood stabilizer to reduce his manic episodes, and he needs regular blood tests because the effective dose is close to a harmful one. The medication is most likely",
            options: [
              "lithium",
              "an SSRI",
              "a benzodiazepine",
              "an antipsychotic drug"
            ],
            correctAnswer: 0,
            explanation: "Lithium is the mood stabilizer used for bipolar disorder, and its narrow safe range requires blood-level monitoring. An SSRI targets depression, and a benzodiazepine targets anxiety."
          }
        ]
      }
    }
  ]
}
