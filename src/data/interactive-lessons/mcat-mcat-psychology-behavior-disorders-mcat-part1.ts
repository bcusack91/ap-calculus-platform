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

Duration boundary: symptoms **> 1 month** = PTSD; a similar picture lasting 3 days-1 month = **acute stress disorder**. Adjustment disorder = disproportionate distress after a NON-catastrophic stressor.`
    },
    {
      id: 'dis1-worked',
      type: 'text' as const,
      content: `### Worked Example — An Emergency-Department Vignette, Fully Read

**Vignette.** A 23-year-old graduate student has three episodes in six weeks of abrupt palpitations, chest tightness, shortness of breath, dizziness, and an overwhelming feeling that she is dying, each peaking within about ten minutes and resolving within the hour. Cardiac and thyroid workups are normal. Since the second episode she has stopped attending lectures held in the large auditorium, sits near exits, and repeatedly checks her pulse. She reports the episodes "come out of nowhere," including one that woke her from sleep. She also mentions long-standing but manageable nervousness before presentations.

**Step 1 — name the events, then the disorder.** The episodes are panic attacks: abrupt surge, rapid peak, somatic storm plus catastrophic cognition. The DIAGNOSIS of panic disorder is supported by what happens BETWEEN attacks — a month-plus of anticipatory worry and maladaptive behavior change (avoiding the auditorium, exit-sitting, pulse-checking). Attacks alone, without the inter-attack syndrome, would not suffice.

**Step 2 — use the discriminators the vignette planted.** "Out of nowhere," including from sleep = UNEXPECTED attacks, pointing away from specific phobia or social anxiety, where attacks are cued by an identifiable trigger. Her presentation nervousness is subclinical and situational — a distractor inviting an unjustified social anxiety diagnosis. The normal medical workup removes the great mimics (cardiac, thyroid) that any competent item will mention.

**Step 3 — track the developing complication.** Avoidance of the auditorium and preference for escape routes is early agoraphobic avoidance — fear of situations where escape would be difficult if an attack struck. If it generalizes (transit, crowds, leaving home), agoraphobia becomes a second diagnosis.

**Step 4 — connect mechanism to treatment logic.** The maintaining cycle is interoceptive: bodily sensations → catastrophic appraisal → sympathetic surge → stronger sensations. Behavioral treatment (interoceptive exposure — deliberately inducing the feared sensations) breaks the association, and the safety behaviors (pulse-checking, exit-sitting) must be withdrawn because they function as negative reinforcers preserving the fear — the same operant engine as OCD rituals.`
    },
    {
      id: 'dis1-quiz1',
      type: 'multiple-choice' as const,
      content: `**DSM Logic, Anxiety & Trauma** 🎯`,
      exercise: {
        questions: [
          {
            question: `A man experiences sudden surges of palpitations, sweating, and fear of dying that peak within minutes, sometimes during calm activities. For the past two months he has restructured his life around avoiding another episode and worries about them daily. Distinguishing his DISORDER from his ATTACKS, the diagnosis of panic disorder rests on:`,
            options: [`The intensity of the physical symptoms during each episode, which must exceed a severity threshold`, `Having more than two attacks in a lifetime, regardless of what happens between them`, `Recurrent unexpected attacks plus a month or more of worry or behavioral change`, `The presence of an identifiable situational trigger preceding each attack`],
            correctAnswer: 2,
            explanation: `Panic attacks are events that occur across many disorders and in healthy people; panic DISORDER is defined by unexpected recurrence plus the inter-attack syndrome — anticipatory fear-of-the-fear and behavior change lasting at least a month. Identifiable triggers would point toward phobic disorders, and neither attack intensity nor a lifetime count defines the diagnosis.`
          },
          {
            question: `A woman spends two hours nightly checking that appliances are off. Intrusive images of her house burning cause mounting anxiety that only the checking relieves — briefly, until the images return. In learning terms, the checking persists because it is:`,
            options: [`Positively reinforced by the sense of accomplishment each check provides`, `Negatively reinforced, since each ritual removes the obsession-driven anxiety`, `Classically conditioned to the sight of the appliances themselves`, `A motor tic, performed without any preceding intrusive thought`],
            correctAnswer: 1,
            explanation: `The compulsion's consequence is the removal of an aversive internal state (anxiety), the definition of negative reinforcement — which is why the ritual strengthens despite its costs, and why exposure with response prevention (blocking the ritual so anxiety extinguishes) is the targeted treatment. The preceding intrusive images are obsessions, distinguishing this from a tic.`
          },
          {
            question: `Three weeks after a serious car accident, a patient has nightmares, avoids driving, feels detached, and startles at engine sounds. An identical picture in a second patient has persisted for three months. The correct diagnostic distinction is:`,
            options: [`Both have PTSD, since the symptom clusters are identical`, `Both have adjustment disorder, since a car accident is a common stressor`, `The first has generalized anxiety disorder; the second has PTSD`, `The first has acute stress disorder; the second has PTSD`],
            correctAnswer: 3,
            explanation: `The symptom clusters (intrusion, avoidance, negative mood, hyperarousal) are shared; DURATION draws the line — up to one month after trauma is acute stress disorder, beyond one month is PTSD. Adjustment disorder requires a NON-catastrophic stressor, and GAD requires pervasive multi-domain worry, not trauma-locked symptoms.`
          },
          {
            question: `A political dissident is described by state media as mentally ill because her views are statistically rare and socially disruptive. Under the DSM's working definition of disorder, this attribution fails PRIMARILY because:`,
            options: [`Rarity and social deviance are not disorder absent dysfunction with distress or impairment`, `Mental disorders by definition cannot involve political or ideological beliefs`, `Only biological tests, such as brain imaging or blood markers, can establish a psychiatric diagnosis`, `Her views are held by too many people to count as statistically rare`],
            correctAnswer: 0,
            explanation: `The definitional core is harmful dysfunction WITHIN the individual — disturbed cognition, emotion regulation, or behavior — accompanied by distress or functional impairment. Socially deviant behavior or conflict between an individual and society is explicitly excluded unless it stems from such dysfunction. This boundary exists precisely to prevent diagnosis from being used as social control.`
          },
          {
            question: `One patient worries intensely for months about an upcoming licensing exam but functions well otherwise. A second worries most days, for over a year, about health, finances, work, and family simultaneously, cannot control the worry, and has muscle tension and insomnia. Only the second qualifies for generalized anxiety disorder because:`,
            options: [`The first patient's worry concerns a real, identifiable event rather than an imagined one`, `GAD criteria exclude worry whose content concerns academic or exam performance`, `GAD requires uncontrollable worry across multiple domains for six months or more`, `The second patient's symptoms include insomnia, which alone establishes the diagnosis`],
            correctAnswer: 2,
            explanation: `Focused, time-limited, controllable worry about a genuine stressor — however intense — is normal-range anxiety. GAD's criteria demand pervasiveness (many domains), chronicity (six months or more, most days), uncontrollability, and accompanying somatic/functional symptoms. Real-world grounding does not exempt worry from GAD, and content topic is never the criterion.`
          }
        ]
      }
    },
    {
      id: 'dis1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Disorder = internal dysfunction + distress/impairment; rarity and social deviance never suffice; DSM-5 is categorical and atheoretical; diathesis-stress is the default causal frame
- Anxiety map: GAD = broad, uncontrollable, 6+ months; phobia/social anxiety = cued fear; panic disorder = unexpected attacks PLUS a month of fear-of-the-fear; agoraphobia = fear of unescapable situations
- Panic attacks are events, not a diagnosis — the inter-attack syndrome makes the disorder; normal cardiac workup is the vignette's signal
- OCD: ego-dystonic obsessions + anxiety-neutralizing compulsions run on negative reinforcement (hence exposure with response prevention)
- PTSD's four clusters (intrusion, avoidance, negative cognition/mood, hyperarousal); over 1 month = PTSD, under = acute stress disorder; adjustment disorder = ordinary stressor, disproportionate response`
    }
  ]
};
