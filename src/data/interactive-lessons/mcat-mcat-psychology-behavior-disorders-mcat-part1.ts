export const mcatPsychDisordersPart1Data = {
  topicSlug: 'mcat-psychology-behavior-disorders-mcat',
  sections: [
    {
      id: 'dis1-intro',
      type: 'text' as const,
      content: `# Psychological Disorders

**Part 1 of 4 — Classifying Disorders: DSM Logic, Anxiety, OCD & Trauma**

### What Makes Something a Disorder?

No single feature suffices. The working standard combines:

- **Dysfunction** in psychological, biological, or developmental processes
- **Distress** to the person and/or **impairment** in social, occupational, or daily functioning
- NOT merely: statistical rarity, social deviance, or conflict with society — unusual beliefs, nonconformity, or protest alone never qualify

The **DSM-5** is the classification standard: **categorical** (diagnosis met or not, via symptom-count and duration criteria), deliberately **atheoretical** about causes. The dominant explanatory frame is **biopsychosocial** — and the **diathesis-stress model** (a predisposition expressed only under sufficient stress) is its workhorse. Contrast with a purely **biomedical** model, which the MCAT usually presents as too narrow.

### Anxiety Disorders (fear/worry disproportionate and impairing)

| Disorder | Core pattern | Discriminating detail |
|----------|--------------|----------------------|
| **Generalized anxiety disorder** | Excessive, *uncontrollable* worry about MANY domains, more days than not, **≥ 6 months**, with somatic tension/sleep/concentration symptoms | Breadth + duration + uncontrollability separate it from normal worry |
| **Specific phobia** | Intense fear of a particular object/situation; immediate response; avoidance | Person usually recognizes the fear as excessive |
| **Social anxiety disorder** | Fear of scrutiny and negative evaluation in social/performance situations | Fear of embarrassment specifically |
| **Panic disorder** | Recurrent *unexpected* **panic attacks** (surge peaking in minutes: palpitations, dyspnea, derealization, fear of dying) PLUS ≥ 1 month of worry about attacks or maladaptive behavior change | The attack is an event; the DISORDER is the fear-of-the-fear cycle |
| **Agoraphobia** | Fear/avoidance of situations where escape/help might be unavailable (crowds, transit, open/enclosed spaces) | Often, but not necessarily, follows panic attacks |

Panic attacks mimic cardiac emergencies — passages love the ER vignette with normal workup.

### Obsessive-Compulsive & Related

- **Obsessions**: intrusive, unwanted, anxiety-producing thoughts/urges/images the person tries to suppress — recognized as products of their own mind
- **Compulsions**: repetitive behaviors or mental acts performed to neutralize obsession-driven anxiety or by rigid rules
- The maintaining engine is **negative reinforcement** (learning lesson tie-in): the ritual briefly removes anxiety, strengthening the ritual — which is why exposure WITH response prevention is the behavioral treatment
- Related: body dysmorphic disorder, hoarding disorder

### Trauma & Stressor-Related

**PTSD** requires a qualifying traumatic exposure plus four symptom clusters:
1. **Intrusion** (flashbacks, nightmares, intrusive memories)
2. **Avoidance** of reminders
3. **Negative alterations in cognition/mood** (blame, detachment, anhedonia)
4. **Alterations in arousal/reactivity** (hypervigilance, exaggerated startle, sleep disturbance)

Duration boundary: symptoms **> 1 month** = PTSD; a similar picture lasting up to 1 month = **acute stress disorder**. Adjustment disorder = disproportionate distress after a stressor, usually an ordinary one; after a trauma it applies only when PTSD or acute stress disorder criteria are not met.

<!-- yield:low -->
- Acute stress disorder's window formally runs from 3 days to 1 month after the trauma.
<!-- /yield -->`
    },
    {
      id: 'dis1-worked',
      type: 'text' as const,
      content: `### Worked Example — An Emergency-Department Vignette, Fully Read

**Problem 1.** A 23-year-old student has had three episodes in six weeks of abrupt palpitations, breathlessness and a sense of dying, peaking within ten minutes and gone within the hour. Cardiac and thyroid workups are normal. The episodes "come out of nowhere," one waking her from sleep.

- **(a)** What are the episodes themselves?
- **(b)** Why does the normal medical workup matter?
- **(c)** What does "out of nowhere," including from sleep, tell you?
- **(d)** She also has long-standing, manageable nervousness before presentations. Does it justify a social anxiety diagnosis?

**(a) Panic attacks.** An abrupt surge that peaks within minutes and resolves within the hour, a somatic storm, and catastrophic cognition make each episode a panic attack. An attack is an event, not yet a diagnosis.

**(b) Mimics removed.** Cardiac and thyroid disease are the great mimics of panic, and any competent item mentions ruling them out. A normal workup is the vignette's signal to think panic.

**(c) Unexpected attacks.** Attacks without a trigger, even from sleep, are UNEXPECTED. That points away from specific phobia and social anxiety, where attacks are cued by an identifiable trigger.

**(d) No.** Her presentation nervousness is subclinical and situational. It is a distractor planted to invite an unjustified social anxiety diagnosis.

**Problem 2.** The same student, since her first episode six weeks ago, has stopped attending lectures held in the large auditorium, sits near exits, and repeatedly checks her pulse.

- **(a)** Does she now meet criteria for panic disorder?
- **(b)** What does avoiding the auditorium and sitting near exits signal?
- **(c)** What cycle keeps the attacks coming?
- **(d)** Which behavioral treatment follows, and what must happen to the pulse-checking and exit-sitting?

**(a) Yes, from the inter-attack syndrome.** The diagnosis rests on what happens BETWEEN attacks: recurrent unexpected attacks followed by a month-plus of worry about more attacks or maladaptive behavior change. Her six weeks of avoidance and pulse-checking supply it; attacks alone would not suffice.

**(b) Early agoraphobia.** Avoiding places where escape would be hard if an attack struck is early agoraphobic avoidance. If it generalizes to two or more situation types (transit, crowds, leaving home) for 6+ months, agoraphobia becomes a second diagnosis.

**(c) An interoceptive loop.** Bodily sensations → catastrophic appraisal → sympathetic surge → stronger sensations. Each pass through the loop confirms the fear.

**(d) Interoceptive exposure.** Deliberately inducing the feared sensations breaks the association. The safety behaviors must be withdrawn, because they act as negative reinforcers that preserve the fear: the same operant engine as OCD rituals.`
    },
    {
      id: 'dis1-quiz1',
      type: 'multiple-choice' as const,
      content: `**DSM Logic, Anxiety & Trauma** 🎯`,
      exercise: {
        questions: [
          {
            question: `Over two months, a man has had four sudden surges of palpitations, sweating, and fear of dying that peak within minutes, some during calm activities. Cardiac and thyroid workups are normal. Between attacks he does not worry about having more, and he has changed nothing in his routine. Does he meet criteria for panic disorder?`,
            options: [`Yes; four unexpected attacks in two months meet the recurrence threshold`, `No; attacks during calm activities point to generalized anxiety disorder`, `No; he also needs a month of worry or behavior change between attacks`, `Yes, because his normal cardiac and thyroid workups confirm panic`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Panic attacks are events that occur across many disorders and in healthy people; panic DISORDER needs recurrent unexpected attacks PLUS the inter-attack syndrome — at least a month of worry about more attacks or maladaptive behavior change. He has the attacks but not the syndrome, so neither the count of four attacks nor the normal workup completes the diagnosis (the workup only removes mimics). Attacks during calm activities are uncued, which fits panic rather than generalized anxiety disorder, whose core is broad, uncontrollable worry.`
          },
          {
            question: `A woman spends two hours nightly checking that appliances are off. Intrusive images of her house burning cause mounting anxiety that only the checking relieves — briefly, until the images return. In learning terms, the checking persists because it is:`,
            options: [`Positively reinforced by the sense of accomplishment each check provides`, `Negatively reinforced, since each ritual removes the obsession-driven anxiety`, `Classically conditioned to the sight of the appliances themselves`, `A motor tic, performed without any preceding intrusive thought`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The compulsion's consequence is the removal of an aversive internal state (anxiety), the definition of negative reinforcement — which is why the ritual strengthens despite its costs, and why exposure with response prevention (blocking the ritual so anxiety extinguishes) is the targeted treatment. The preceding intrusive images are obsessions, distinguishing this from a tic.`
          },
          {
            question: `Three weeks after a serious car accident, a patient has nightmares, avoids driving, feels detached, and startles at engine sounds. An identical picture in a second patient has persisted for three months. The correct diagnostic distinction is:`,
            options: [`Both have PTSD, since identical symptom clusters outweigh the difference in timing`, `Both have adjustment disorder, since a car accident is a common stressor`, `The first has generalized anxiety disorder; the second has PTSD`, `The first has acute stress disorder; the second has PTSD`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The symptom clusters (intrusion, avoidance, negative mood, hyperarousal) are shared; DURATION draws the line — up to one month after trauma is acute stress disorder, beyond one month is PTSD. Adjustment disorder applies after a trauma only when PTSD or acute stress disorder criteria are not met, and both patients meet them; GAD requires pervasive multi-domain worry, not trauma-locked symptoms.`
          },
          {
            question: `A political dissident is described by state media as mentally ill because her views are statistically rare and socially disruptive. Under the DSM's working definition of disorder, this attribution fails PRIMARILY because:`,
            options: [`Rarity and social deviance are not disorder absent dysfunction with distress or impairment`, `Mental disorders by definition cannot involve political or ideological beliefs`, `Only biological tests, such as brain imaging or blood markers, can establish a psychiatric diagnosis`, `Her views are held by too many people to count as statistically rare`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The definitional core is harmful dysfunction WITHIN the individual — disturbed cognition, emotion regulation, or behavior — accompanied by distress or functional impairment. Socially deviant behavior or conflict between an individual and society is explicitly excluded unless it stems from such dysfunction. This boundary exists precisely to prevent diagnosis from being used as social control.`
          },
          {
            question: `One patient worries intensely for months about an upcoming licensing exam but functions well otherwise. A second worries most days, for over a year, about health, finances, work, and family simultaneously, cannot control the worry, and has muscle tension and insomnia. Only the second qualifies for generalized anxiety disorder because:`,
            options: [`The first patient's worry concerns a real, identifiable event rather than an imagined one`, `GAD criteria exclude worry whose content concerns academic or exam performance`, `GAD requires uncontrollable worry across multiple domains for six months or more`, `The second patient's symptoms include insomnia, which alone establishes the diagnosis`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Focused, time-limited, controllable worry about a genuine stressor — however intense — is normal-range anxiety. GAD's criteria demand pervasiveness (many domains), chronicity (six months or more, most days), uncontrollability, and accompanying somatic/functional symptoms. Real-world grounding does not exempt worry from GAD, and content topic is never the criterion.`
          }
        ]
      }
    },
    {
      id: 'dis1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **DSM logic.** DSM-5 is categorical and atheoretical; diathesis-stress (vulnerability plus stress) is the default causal frame.
- **The anxiety map.** GAD: broad, uncontrollable worry for 6+ months; phobias: cued fear; agoraphobia: fear of no escape.
- **OCD runs on relief.** Rituals remove obsession-driven anxiety (negative reinforcement); exposure with response prevention treats it.
- **PTSD by the calendar.** Four clusters: over 1 month is PTSD, up to 1 month acute stress disorder; adjustment: ordinary stressor.

**Common traps**

- **Diagnosing the attack.** A panic attack is an event; panic disorder needs a month of worry or behavior change between attacks.
- **Rarity as disorder.** Rare or socially deviant views are not a disorder without dysfunction and distress or impairment.
- **Cued vs. uncued.** Attacks with a clear trigger point to phobia or social anxiety; attacks "out of nowhere" point to panic.
- **Rituals as reward.** Compulsions persist because they remove anxiety (negative reinforcement), not because they please.

<!-- yield:low -->
**Low-yield extras**

- Acute stress disorder's formal window starts 3 days after the trauma.
<!-- /yield -->`
    }
  ]
};
