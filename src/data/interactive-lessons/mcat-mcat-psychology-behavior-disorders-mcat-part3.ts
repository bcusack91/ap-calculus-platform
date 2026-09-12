export const mcatPsychDisordersPart3Data = {
  topicSlug: 'mcat-psychology-behavior-disorders-mcat',
  sections: [
    {
      id: 'dis3-intro',
      type: 'text' as const,
      content: `# Psychological Disorders

**Part 3 of 4 — Personality, Dissociative, Somatic & Neurocognitive Disorders**

### Personality Disorders (enduring, inflexible, pervasive patterns from early adulthood)

Personality disorders are **ego-syntonic** (experienced as "just how I am") — a key contrast with the ego-dystonic distress of anxiety disorders — and are grouped in three clusters:

| Cluster | Theme | Disorders (discriminating core) |
|---------|-------|---------------------------------|
| **A — odd/eccentric** | Social detachment, suspicion | **Paranoid** (pervasive distrust); **schizoid** (genuine indifference to relationships, flat); **schizotypal** (eccentric beliefs, magical thinking, perceptual oddities — schizophrenia-spectrum but no frank psychosis) |
| **B — dramatic/erratic** | Emotion dysregulation, self-focus | **Antisocial** (violation of others' rights, deceit, lack of remorse; ≥ 18 with conduct disorder history before 15); **borderline** (unstable relationships/self-image/affect, abandonment terror, **splitting** — all-good/all-bad, self-harm risk); **histrionic** (attention-seeking emotionality); **narcissistic** (grandiosity, need for admiration, fragile self-esteem beneath) |
| **C — anxious/fearful** | Anxiety-driven rigidity | **Avoidant** (desires closeness but fears rejection — contrast schizoid's indifference); **dependent** (submissive clinging, cannot decide alone); **obsessive-compulsive personality disorder (OCPD)** (perfectionism and control as a worldview) |

**OCD vs. OCPD** — a guaranteed item: OCD has intrusive obsessions and anxiety-driven rituals the person finds alien (ego-dystonic); OCPD is a lifelong, ego-syntonic perfectionism with NO true obsessions or compulsions — the person endorses the standards, others suffer them.

### Dissociative Disorders (disrupted integration of memory, identity, perception)

- **Dissociative identity disorder**: ≥ 2 distinct personality states with recurrent gaps in recall; strongly associated with severe early trauma; controversial but tested descriptively
- **Dissociative amnesia**: inability to recall important autobiographical information, usually trauma-linked, beyond ordinary forgetting — may include **fugue** (sudden travel with identity confusion)
- **Depersonalization/derealization disorder**: recurrent detachment from self (observing oneself from outside) or surroundings (world feels unreal), with **intact reality testing** — the person knows the experience is "not real," which separates it from psychosis

### Somatic Symptom & Related Disorders (distress expressed through the body)

- **Somatic symptom disorder**: ≥ 1 distressing physical symptom PLUS excessive thoughts/anxiety/time devoted to it — the symptom may or may not have medical explanation; the DISORDER lies in the disproportionate response
- **Illness anxiety disorder**: preoccupation with HAVING a serious disease with minimal or no somatic symptoms
- **Conversion disorder (functional neurological symptom disorder)**: neurological deficits (paralysis, blindness, seizures) incompatible with recognized pathology — deficits are NOT consciously produced
- Contrast (not somatic disorders): **factitious disorder** = intentional symptom production for the sick ROLE; **malingering** = intentional production for EXTERNAL gain (not a mental disorder)

### Neurocognitive Disorders (the biological-psychology bridge)

| | **Alzheimer's disease** | **Parkinson's disease** |
|--|------------------------|-------------------------|
| Pathology | **Amyloid-beta plaques**, **neurofibrillary tau tangles**, cortical/hippocampal atrophy, **acetylcholine** deficit | **Substantia nigra** degeneration → striatal **dopamine** deficit; **Lewy bodies** (alpha-synuclein) |
| Presentation | Insidious memory loss (anterograde first) → language, visuospatial, executive decline | Motor triad: **resting tremor, rigidity, bradykinesia**; postural instability; dementia may develop late |
| Treatment logic | Cholinesterase inhibitors (symptomatic) | **L-DOPA** (dopamine precursor crossing the blood-brain barrier) |

**Delirium** vs. dementia: delirium is ACUTE, fluctuating, with impaired attention/arousal and usually a medical precipitant (infection, drugs) — reversible; dementia is chronic, progressive, with attention relatively spared early. Depression in the elderly ("pseudodementia") can mimic dementia but shows effortful "I don't know" responses and improves with mood treatment.`
    },
    {
      id: 'dis3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Differential-Sorting Passage, Fully Read

**Passage.** Four hospital consults. Patient 1: a 74-year-old admitted for pneumonia becomes agitated and disoriented on night two, mistakes IV tubing for snakes, drifts in and out of lucidity, and cannot sustain attention; family insists she was "sharp as a tack" last week. Patient 2: a 71-year-old with two years of gradually worsening memory, now getting lost driving familiar routes, with fluent but emptying speech; alert and attentive in interview. Patient 3: a 68-year-old with a pill-rolling tremor at rest, cogwheel rigidity, slowed gait with reduced arm swing, and intact cognition. Patient 4: a 29-year-old with sudden left-arm paralysis after witnessing a violent assault; reflexes, imaging, and nerve conduction are normal, and she seems strikingly untroubled by the deficit.

**Step 1 — separate acute from chronic (Patients 1 vs 2).** Abrupt onset, FLUCTUATING course, impaired attention/arousal, visual misperceptions, and a medical precipitant (infection) = delirium — a reversible emergency, treated by finding the cause. Patient 2's insidious two-year decline with intact attention is a major neurocognitive disorder; anterograde-first memory loss with spatial disorientation makes Alzheimer's the leading etiology (hippocampus first, plaques and tangles, cholinergic deficit). The attention axis — not memory — is the fastest delirium/dementia discriminator.

**Step 2 — localize Patient 3.** Resting tremor + rigidity + bradykinesia is the Parkinson triad: substantia nigra dopaminergic loss with Lewy bodies. L-DOPA replaces the missing precursor. Cross-link: D2-blocking antipsychotics produce this same picture pharmacologically (Part 2's nigrostriatal pathway), and excess dopamine therapy can produce psychotic symptoms — the two disorders mirror each other across one transmitter.

**Step 3 — read Patient 4 without accusation.** Neurological deficit incompatible with anatomy plus normal studies after an acute stressor = conversion disorder (functional neurological symptom disorder). The deficit is not consciously feigned: no external incentive is evident (ruling out malingering) and she is not seeking the sick role through fabrication (ruling out factitious disorder). The calm indifference is a classically described but nonspecific feature — do not diagnose on it alone.

**Step 4 — the personality-disorder extension.** If a passage adds a lifelong pattern — say, a consultant who has always been rigidly perfectionistic, lists-and-rules driven, and proud of it — the ego-syntonic, trait-like quality (OCPD) separates personality pathology from the episodic, ego-dystonic disorders in this ward. Course and the patient's own attitude toward the symptoms are the two sorting axes for the entire passage.`
    },
    {
      id: 'dis3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Clusters, Dissociation & Neurocognitive Disorders** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 30-year-old lifelong loner dresses eccentrically, believes he can sense "energy fields" that guide his decisions, reports occasional fleeting sensations of a presence nearby, but has never had frank hallucinations or fixed delusions and maintains reality testing. The best classification is:`,
            options: [`Schizophrenia, given his magical beliefs and perceptual disturbances`, `Schizoid personality disorder, given his lifelong social detachment`, `Obsessive-compulsive disorder, given his ritualized decision-making`, `Schizotypal personality disorder, with cognitive oddities short of psychosis`],
            correctAnswer: 3,
            explanation: `Odd beliefs, unusual perceptual experiences, and social discomfort forming a stable personality pattern — without meeting psychosis criteria — define schizotypal personality disorder, the schizophrenia-spectrum member of Cluster A. Schizoid presents with indifference and flatness but WITHOUT the cognitive-perceptual oddities; schizophrenia requires frank delusions/hallucinations with functional collapse and duration criteria he does not meet.`
          },
          {
            question: `An accountant is proud of standards so exacting that projects stall and colleagues quit; he sees no problem — others are simply careless. Unlike a patient with OCD, he lacks:`,
            options: [`Ego-dystonic obsessions and the compulsions that relieve them`, `Any measurable impact of his traits on his occupational functioning`, `Membership in the anxious-fearful Cluster C of personality disorders`, `Any capacity for insight into his thoughts, motives, or behavior at all`],
            correctAnswer: 0,
            explanation: `The OCD/OCPD divide runs on two rails: symptom form (true obsessions and neutralizing rituals vs pervasive perfectionism and control) and the patient's stance (distressing and alien vs embraced as correct). His pattern harms functioning — via others' suffering and stalled work — so option two is false; OCPD is indeed Cluster C, and global lack of insight overstates the case.`
          },
          {
            question: `After a disaster, a woman is found in another city, unaware of how she traveled there and unable to recall her name or history; medical workup is negative. Weeks later her autobiographical memory returns. This episode is best described as:`,
            options: [`Korsakoff syndrome from thiamine deficiency after the disaster`, `Anterograde amnesia from hippocampal injury sustained in the disaster`, `Dissociative amnesia with fugue, precipitated by the trauma`, `Malingering, feigning memory loss to escape the aftermath`],
            correctAnswer: 2,
            explanation: `Sudden, selective loss of autobiographical identity after trauma, unexplained travel, negative workup, and later full recovery compose dissociative amnesia with fugue. Organic amnesias (Korsakoff, hippocampal) impair NEW learning and do not selectively erase identity while sparing skills — nor do they remit wholesale. Malingering requires evidence of intentional production for external gain, which nothing here supports.`
          },
          {
            question: `A 79-year-old develops confusion over hours during a urinary tract infection: she is drowsy, cannot sustain attention, misidentifies staff, and her lucidity waxes and wanes through the day. The feature that most reliably distinguishes this state from dementia is:`,
            options: [`Her advanced age, which makes a dementing process the more likely cause`, `Acute onset with a fluctuating course and impaired attention`, `The presence of memory difficulty, which dementia always involves`, `The misidentification of people, which signals hallucination`],
            correctAnswer: 1,
            explanation: `Delirium is defined by rapid onset, fluctuation, and a primary disturbance of ATTENTION and arousal, typically precipitated by infection, drugs, or metabolic insult — and it is reversible with treatment of the cause. Dementia develops insidiously over years with attention relatively preserved early. Memory problems and misidentification occur in both, and age is common to both, so none of those discriminate.`
          },
          {
            question: `Match the pathology to the disease: amyloid-beta plaques and tau neurofibrillary tangles with early hippocampal atrophy versus Lewy bodies with degeneration of the substantia nigra. Respectively, these describe:`,
            options: [`Parkinson's disease, then Alzheimer's disease`, `Alzheimer's disease, then Parkinson's disease`, `Delirium, then Korsakoff syndrome`, `Conversion disorder, then schizotypal personality disorder`],
            correctAnswer: 1,
            explanation: `Plaques, tangles, hippocampal-first atrophy, and cholinergic loss define Alzheimer's (hence cholinesterase inhibitors and anterograde-first memory failure); nigral degeneration with alpha-synuclein Lewy bodies and striatal dopamine deficit defines Parkinson's (hence L-DOPA and the motor triad). Keeping the transmitter-structure-treatment triplets paired is the highest-yield neurocognitive fact set on the exam.`
          }
        ]
      }
    },
    {
      id: 'dis3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Personality disorders are enduring, pervasive, ego-syntonic; Cluster A odd (paranoid/schizoid/schizotypal), B dramatic (antisocial/borderline/histrionic/narcissistic), C anxious (avoidant/dependent/OCPD)
- Sharp pairs: schizoid (indifferent) vs avoidant (wants but fears); schizotypal (odd, reality testing intact) vs schizophrenia; OCD (ego-dystonic obsessions/rituals) vs OCPD (ego-syntonic perfectionism); antisocial requires age 18 plus earlier conduct disorder
- Dissociative: DID (multiple states + recall gaps, trauma-linked), amnesia with possible fugue (reversible autobiographical loss), depersonalization/derealization (detachment WITH intact reality testing)
- Somatic family: somatic symptom (excessive response to symptoms), illness anxiety (disease fear, few symptoms), conversion (anatomy-incompatible deficits, not feigned); factitious = sick role, malingering = external gain and not a disorder
- Neurocognitive: Alzheimer's = plaques/tangles/ACh/hippocampus; Parkinson's = nigra/dopamine/Lewy bodies/L-DOPA; delirium = acute, fluctuating, attention-first, reversible — dementia is none of those`
    }
  ]
};
