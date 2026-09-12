export const mcatMskPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-musculoskeletal-mcat',
  sections: [
    {
      id: 'msk3-intro',
      type: 'text' as const,
      content: `# Musculoskeletal System — Deep Dive

**Part 3 of 4 — Muscle Energetics, Fiber Types & the Three Muscle Tissues**

### Fueling Contraction: The ATP Timeline

A fiber's ATP store lasts only a few seconds of hard work. The backup systems come online in order:

1. **Stored ATP** (~2-3 s)
2. **Creatine phosphate**: transfers its phosphate directly to ADP (creatine kinase) — very fast, no oxygen needed, exhausted in ~10-15 s (sprints, single lifts)
3. **Anaerobic glycolysis**: glucose/glycogen → pyruvate → lactate; fast but low yield (2 ATP per glucose), dominates ~15 s to ~1-2 min
4. **Oxidative phosphorylation**: slow to ramp up but nearly unlimited with fuel and oxygen (~30-32 ATP per glucose, plus fatty acids); dominates endurance work

**Oxygen debt / EPOC** (excess post-exercise oxygen consumption): after exercise you keep breathing hard to reload myoglobin and hemoglobin, replenish ATP and creatine phosphate, process lactate (largely to glucose in the liver — Cori cycle), and pay for elevated temperature and heart rate.

### Fiber Types

| Feature | Type I (slow-oxidative) | Type II (fast-glycolytic) |
|---------|-------------------------|---------------------------|
| Primary ATP source | Oxidative phosphorylation | Glycolysis |
| Myoglobin | High → RED fibers | Low → WHITE fibers |
| Mitochondria & capillaries | Many | Few |
| Contraction speed | Slow | Fast |
| Fatigue | Very resistant | Rapid |
| Built for | Posture, marathons | Sprints, jumps |

Memory hook: "slow red ox" — slow, red, oxidative. (An intermediate fast-oxidative type IIa exists; the MCAT mostly tests the two poles.)

### Motor Units, Recruitment & Graded Tension

A **motor unit** = one motor neuron + every fiber it innervates. Fine-control muscles (eye, fingers) have small units; power muscles (quadriceps) have huge ones. The nervous system grades force two ways:

- **Recruitment**: activating more (and progressively larger) motor units
- **Frequency**: a single stimulus gives a **twitch**; stimuli arriving before full relaxation add together (**summation** — cytosolic calcium stays elevated); at high frequency the responses fuse into a smooth maximal contraction (**tetanus**)

**Length-tension relationship**: tension is maximal at intermediate sarcomere length, where actin-myosin overlap allows the most cross-bridges. Overstretched → little overlap → weak; over-shortened → thin filaments collide/overlap improperly and thick filaments hit Z lines → weak. Pure overlap logic.

### Three Muscle Tissues Compared

| Feature | Skeletal | Cardiac | Smooth |
|---------|----------|---------|--------|
| Striated? | Yes | Yes | NO |
| Nuclei | Many, peripheral | 1-2, central | One, central |
| Control | Voluntary (somatic) | Involuntary (autonomic modulates) | Involuntary (autonomic, hormones, stretch) |
| Cell junctions | None between fibers | **Intercalated discs with gap junctions** — a functional syncytium | Gap junctions (single-unit type) |
| Ca trigger source | SR only (DHP-ryanodine mechanical link) | Extracellular Ca entry triggers SR release (calcium-induced calcium release) | Mostly extracellular; Ca acts via calmodulin (no troponin) |
| Pacemaker? | No — needs a neuron | YES — self-depolarizing pacemaker cells (SA node) | Some spontaneous (slow waves in gut) |

Cardiac muscle's long action-potential plateau (Ca influx) also enforces a long refractory period, so the heart CANNOT be tetanized — it must relax to refill.

### Skeleton + Muscle = Lever System

Muscles only PULL. Movement therefore requires **antagonistic pairs** across joints: a flexor (biceps) bends while its extensor partner (triceps) relaxes, and vice versa. Each muscle runs from an **origin** (stationary bone) to an **insertion** (bone that moves); bones act as levers pivoting at joints, trading force for speed and range of motion.`
    },
    {
      id: 'msk3-worked',
      type: 'text' as const,
      content: `### Worked Example — Sprinter vs. Marathoner Biopsies

**Passage-style problem.** Muscle biopsies from the gastrocnemius of an elite sprinter (Athlete S) and an elite marathoner (Athlete M) are stained and tested:

- Athlete S: fibers are pale, large-diameter, few mitochondria, high glycogen and creatine kinase activity; isolated fibers reach peak tension quickly and fatigue within a minute of repeated tetani
- Athlete M: fibers are deep red, smaller-diameter, dense mitochondria and capillaries; fibers reach peak tension more slowly but hold near-constant tension for many minutes

**Question 1 — Classify each fiber population.** Athlete S is dominated by type II fast-glycolytic fibers (white: little myoglobin; glycolytic machinery and creatine phosphate support brief maximal power). Athlete M is dominated by type I slow-oxidative fibers (red: myoglobin-rich, mitochondria-dense, fatigue-resistant).

**Question 2 — Both athletes perform a 10-second maximal sprint. Which energy systems supply most of the ATP, regardless of fiber type?** Stored ATP plus creatine phosphate, with anaerobic glycolysis ramping in — 10 seconds is too short for oxidative phosphorylation to dominate. This is why creatine kinase activity is high in sprint-adapted fibers.

**Question 3 — After the marathoner finishes a race, oxygen consumption stays elevated for hours. List the debts being repaid.** Reloading myoglobin/hemoglobin oxygen stores, resynthesizing ATP and creatine phosphate, converting accumulated lactate back to glucose (hepatic Cori cycle), and supporting still-elevated temperature, ventilation, and heart rate — collectively EPOC.

**Question 4 — During a laboratory test, Athlete M's fiber is stimulated at increasing frequencies: 1 Hz gives discrete twitches, 10 Hz gives larger, partially fused responses, 50 Hz gives one smooth plateau of maximal force. Explain.** At low frequency, calcium is fully resequestered between stimuli (isolated twitches). At intermediate frequency, each stimulus arrives before relaxation completes, so cytosolic calcium and tension stack — summation. At high frequency, calcium stays saturating and tension fuses into tetanus. The same experiment on cardiac muscle would fail: its long refractory period prevents summation, protecting the pumping cycle.`
    },
    {
      id: 'msk3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Energetics, Fiber Types & Muscle Tissues** 🎯`,
      exercise: {
        questions: [
          {
            question: `During the first 10 seconds of a maximal sprint, most ATP is regenerated by:`,
            options: [`Oxidative phosphorylation of fatty acids`, `Anaerobic glycolysis of liver glycogen`, `Creatine phosphate transferring phosphate directly to ADP`, `Beta-oxidation within peroxisomes`],
            correctAnswer: 2,
            explanation: `The creatine phosphate system is the fastest ATP buffer — one enzymatic step, no oxygen — and covers roughly the first 10-15 seconds after stored ATP is spent. Oxidative phosphorylation is far too slow to ramp up in 10 seconds, glycolysis becomes dominant only after the phosphagen store fades (and uses MUSCLE glycogen), and beta-oxidation is a slow aerobic pathway.`
          },
          {
            question: `Which feature set correctly describes type I (slow-oxidative) fibers?`,
            options: [`White color, few mitochondria, rapid fatigue, sprint specialists`, `Red color, abundant myoglobin and mitochondria, high fatigue resistance`, `Red color, glycolytic metabolism, rapid peak tension`, `White color, abundant myoglobin, posture maintenance`],
            correctAnswer: 1,
            explanation: `Type I fibers are the "slow red ox": myoglobin-rich (red), mitochondria- and capillary-dense, oxidative, slow to peak but extremely fatigue-resistant — ideal for posture and endurance. Choice A describes type II fibers. Choices C and D mix the columns: red pairs with oxidative (not glycolytic), and abundant myoglobin makes a fiber red, not white.`
          },
          {
            question: `Cardiac muscle cannot be driven into tetanus like skeletal muscle because cardiac cells have:`,
            options: [`No sarcomeres and therefore no summation machinery`, `Too few gap junctions to synchronize contraction`, `No calcium influx during the action potential`, `A long action potential plateau and refractory period that outlast the contraction`],
            correctAnswer: 3,
            explanation: `The cardiac action potential's calcium-driven plateau keeps the cell refractory until the twitch is nearly over, so stimuli cannot summate — the heart must relax and refill between beats. Cardiac muscle IS striated with sarcomeres (choice A) and is rich in gap junctions at intercalated discs (choice B); the plateau exists BECAUSE of calcium influx, contradicting choice C.`
          },
          {
            question: `A muscle is passively stretched far beyond its optimal length and then stimulated. Active tension is low because:`,
            options: [`Actin-myosin overlap is reduced, so few cross-bridges can form`, `The sarcoplasmic reticulum ruptures at long lengths`, `Excess overlap causes thin filaments to collide at the M line`, `Tropomyosin binds calcium at long sarcomere lengths`],
            correctAnswer: 0,
            explanation: `The length-tension curve is overlap logic: overstretching pulls thin filaments away from myosin heads, leaving few cross-bridge sites within reach. Thin-filament collision (choice C) explains weakness at OVER-SHORTENED lengths — the other end of the curve. The SR does not rupture with physiologic stretch, and calcium binds troponin, never tropomyosin.`
          },
          {
            question: `Which property is shared by cardiac and single-unit smooth muscle but absent from skeletal muscle?`,
            options: [`Striations visible under the microscope`, `Voluntary control through somatic motor neurons`, `Gap junctions that spread excitation directly between cells`, `Multiple peripheral nuclei per cell`],
            correctAnswer: 2,
            explanation: `Cardiac cells (via intercalated discs) and single-unit smooth muscle both use gap junctions to conduct depolarization cell-to-cell, acting as functional syncytia; skeletal fibers are electrically isolated and each needs its own neuromuscular input. Striations exist in skeletal AND cardiac but not smooth muscle (choice A); voluntary somatic control and multinucleated peripheral nuclei are exclusively skeletal traits.`
          }
        ]
      }
    },
    {
      id: 'msk3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- ATP timeline: stored ATP (seconds) → creatine phosphate (~10-15 s) → anaerobic glycolysis (to ~1-2 min, lactate) → oxidative phosphorylation (endurance); EPOC repays myoglobin oxygen, phosphagen stores, and lactate processing (Cori cycle)
- Type I = slow, red, oxidative, myoglobin/mitochondria-rich, fatigue-resistant (posture, marathons); type II = fast, white, glycolytic, quickly fatigued (sprints)
- Force is graded by motor-unit recruitment and stimulation frequency: twitch → summation → tetanus; small motor units = fine control
- Length-tension: maximal force at intermediate length where actin-myosin overlap maximizes cross-bridges; weak when overstretched or over-shortened
- Skeletal (striated, voluntary, multinucleated, no cell coupling) vs. cardiac (striated, involuntary, intercalated discs/gap junctions, pacemaker, calcium-induced calcium release, cannot tetanize) vs. smooth (non-striated, involuntary, calmodulin instead of troponin)
- Muscles only pull: antagonistic flexor-extensor pairs across joints move bones as levers, origin stationary, insertion moving`
    }
  ]
};
