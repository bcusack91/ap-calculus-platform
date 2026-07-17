export const mcatAnatPhysPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap1-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 1 of 7 — Musculoskeletal System**

### Muscle Contraction: Sliding Filament Theory

1. Action potential travels down the motor neuron → ACh released at the **neuromuscular junction** → binds nicotinic receptors → end-plate depolarization.
2. Depolarization spreads along the sarcolemma and down **T-tubules**, activating voltage-sensing **DHP receptors**, which mechanically gate **ryanodine receptors** on the SR.
3. Ca$^{2+}$ released from sarcoplasmic reticulum (SR) into the cytosol.
4. Ca$^{2+}$ binds **troponin C** → tropomyosin shifts off the actin groove → exposes myosin-binding sites.
5. Myosin heads (pre-cocked by prior ATP hydrolysis) bind actin → **power stroke** pulls actin toward the M-line, releasing ADP + Pi.
6. New ATP binds myosin → cross-bridge detaches; ATP hydrolysis re-cocks the head → cycle repeats while Ca$^{2+}$ remains elevated.
7. Relaxation: SERCA pump uses ATP to return Ca$^{2+}$ to the SR → tropomyosin re-covers actin.

### Sarcomere Structure

| Band/Zone | Changes during contraction? | What it contains |
|-----------|---------------------------|------------------|
| A band | NO (stays same length) | Full thick (myosin) filament length + overlap |
| I band | DECREASES | Thin (actin) only — no myosin overlap |
| H zone | DECREASES | Thick (myosin) only — no actin overlap |
| Z line | Move closer together | Boundary of the sarcomere |

**Mnemonic**: "**H**appy **I** **S**hrink" — H zone and I band shrink during contraction. The A band stays constant because the filaments **slide**, they do not shorten.

\`\`\`
Sarcomere (relaxed):   Z|====I====|=====A=====|====I====|Z
                                   <-H zone->
Sarcomere (contracted):  Z|=I=|========A========|=I=|Z   (Z lines closer, I & H shrunk)
\`\`\`

### Excitation–Contraction Coupling & Fiber Types

| Property | Type I (slow oxidative) | Type IIx (fast glycolytic) |
|----------|-------------------------|----------------------------|
| ATP source | Oxidative phosphorylation | Anaerobic glycolysis |
| Myoglobin / mitochondria | High (red) | Low (white) |
| Fatigue resistance | High (marathon) | Low (sprint) |
| Contraction speed | Slow | Fast |

### Muscle Tissue Comparison

| Feature | Skeletal | Cardiac | Smooth |
|---------|----------|---------|--------|
| Striated | Yes | Yes | No |
| Control | Voluntary | Involuntary | Involuntary |
| Nuclei | Multinucleate | Uninucleate | Uninucleate |
| Gap junctions / syncytium | No | Yes (intercalated discs) | Yes (single-unit) |
| Ca$^{2+}$ source | Mostly SR | SR + extracellular (Ca-induced Ca release) | Largely extracellular; uses **calmodulin → MLCK**, not troponin |

### Bone Structure & Remodeling

- **Osteoblasts**: BUILD bone (deposit osteoid + hydroxyapatite, Ca$_{10}$(PO$_4$)$_6$(OH)$_2$).
- **Osteoclasts**: Break down (CLAST = break) bone; multinucleate, secrete H$^+$ and acid hydrolases.
- **Osteocytes**: Mature cells in lacunae; mechanosensors that coordinate remodeling.

Remodeling is hormonally controlled:
- **PTH** → stimulates osteoclast activity (indirectly via RANKL on osteoblasts) → raises blood Ca$^{2+}$; also ↑ renal Ca reabsorption and ↑ active vitamin D.
- **Calcitonin** → inhibits osteoclasts → lowers blood Ca$^{2+}$.
- **Vitamin D (calcitriol)** → ↑ intestinal Ca$^{2+}$ absorption.

**Clinical correlations:** Myasthenia gravis (autoantibodies vs. ACh receptors → weakness that worsens with use); osteoporosis (resorption > formation, common post-menopause as estrogen's restraint on osteoclasts is lost); tetanus toxin (blocks inhibitory interneurons → unopposed contraction).`
    },
    {
      id: 'ap1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Muscle & Bone** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher adds a drug that blocks the SERCA pump in isolated skeletal muscle fibers, then stimulates them once. Compared with normal fibers, the treated fibers will most likely:`,
            options: [`Fail to relax normally, remaining contracted because cytosolic $Ca^{2+}$ cannot be cleared`, `Fail to contract at all because $Ca^{2+}$ never reaches troponin`, `Contract more weakly because less ATP is hydrolyzed by myosin`, `Relax faster because $Ca^{2+}$ is pumped out of the cell`],
            correctAnswer: 0,
            explanation: `SERCA pumps cytosolic $Ca^{2+}$ back into the SR to terminate contraction. Block it and $Ca^{2+}$ stays high, keeping troponin occupied and tropomyosin off the binding sites → sustained contraction (impaired relaxation). The trap "fail to contract" confuses SERCA (relaxation) with the ryanodine release channel (contraction) — $Ca^{2+}$ release is unaffected here. SERCA pumps into the SR, not out of the cell.`
          },
          {
            question: `An experimental sarcomere is stretched so far that thick and thin filaments barely overlap, then stimulated. The force it generates is much lower than at resting length. This is best explained by:`,
            options: [`Fewer cross-bridges can form between myosin and actin at extreme length`, `Less $Ca^{2+}$ is released from the SR at long sarcomere lengths`, `Troponin loses its affinity for $Ca^{2+}$ when stretched`, `ATP hydrolysis is inhibited by the increased length`],
            correctAnswer: 0,
            explanation: `Active force depends on the number of cross-bridges, which depends on filament overlap (the length–tension relationship). At extreme stretch, overlap is minimal, so few heads can bind actin and force falls. $Ca^{2+}$ release, troponin affinity, and ATP hydrolysis are not the length-dependent limiters here — the geometry of overlap is. This is the molecular basis of the Frank–Starling-style length–tension curve.`
          },
          {
            question: `A patient with chronic kidney disease cannot activate vitamin D and develops low blood $Ca^{2+}$. The expected compensatory hormonal change and its effect on bone is:`,
            options: [`Increased PTH, which stimulates osteoclast-mediated resorption, releasing $Ca^{2+}$ from bone`, `Increased calcitonin, which drives $Ca^{2+}$ into bone`, `Decreased PTH, which spares bone from resorption`, `Increased calcitonin, which stimulates osteoblasts to absorb $Ca^{2+}$`],
            correctAnswer: 0,
            explanation: `Low blood $Ca^{2+}$ is sensed by the parathyroid glands → PTH rises. PTH increases osteoclast activity (via RANKL), liberating $Ca^{2+}$ from bone, and boosts renal $Ca^{2+}$ reabsorption. Chronically this causes renal osteodystrophy (weakened bone). Calcitonin would *lower* blood $Ca^{2+}$ — the wrong direction for a hypocalcemic patient — so the calcitonin options are traps.`
          }
        ]
      }
    },
    {
      id: 'ap1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Musculoskeletal Physiology

<details>
<summary><b>Example 1: Trace the events from nerve signal to relaxation</b></summary>

**Question:** Put the following in the correct order and identify which step requires ATP: (a) $Ca^{2+}$ binds troponin, (b) ACh binds nicotinic receptors, (c) SERCA returns $Ca^{2+}$ to SR, (d) power stroke, (e) ryanodine receptors open.

**Solution:**
1. **(b)** ACh binds receptors → end-plate depolarization.
2. Depolarization travels down T-tubules → DHP receptors trigger **(e)** ryanodine receptor opening → $Ca^{2+}$ into cytosol.
3. **(a)** $Ca^{2+}$ binds troponin → tropomyosin moves → binding sites exposed.
4. **(d)** Power stroke — myosin pulls actin (ADP + Pi released). ATP needed to **detach** and re-cock the head.
5. **(c)** SERCA pumps $Ca^{2+}$ back into SR — **requires ATP** — allowing relaxation.

**MCAT note:** ATP is consumed at *two* points: detachment/re-cocking of myosin AND SERCA pumping. This is why rigor mortis (no ATP) locks myosin onto actin. ✓
</details>

<details>
<summary><b>Example 2: Predict bands on an electron micrograph</b></summary>

**Question:** A micrograph of relaxed muscle shows an A band of 1.6 µm and an I band of 0.8 µm (sarcomere length 2.4 µm). After contraction, the sarcomere shortens to 2.0 µm. What happens to the A band and I band?

**Solution:**
1. The **A band stays 1.6 µm** — it equals the thick-filament length, which is fixed; filaments slide, they don't shorten.
2. The sarcomere lost 0.4 µm; this comes entirely from the non-overlap (I-band) regions on both sides.
3. New I band ≈ 0.8 − 0.4 = **0.4 µm** (the H zone shrinks similarly). ✓

**High-yield connection:** If an exam says "the A band shortened," that is the *distractor* — it never does. Only I band and H zone shrink.
</details>

<details>
<summary><b>Example 3: Reason about a calcium-channel experiment</b></summary>

**Question:** Cardiac muscle is bathed in $Ca^{2+}$-free extracellular fluid; skeletal muscle is treated identically. Both are then stimulated. Predict the result for each and explain.

**Solution:**
- **Skeletal muscle still contracts (at least initially):** its $Ca^{2+}$ for contraction comes almost entirely from the SR, released by mechanical DHP–ryanodine coupling — independent of extracellular $Ca^{2+}$.
- **Cardiac muscle fails to contract normally:** it depends on **$Ca^{2+}$-induced $Ca^{2+}$ release** — extracellular $Ca^{2+}$ entering through L-type channels triggers SR release. Remove extracellular $Ca^{2+}$ and the trigger is gone. ✓

**Interpretation:** This experiment distinguishes the two excitation–contraction mechanisms — a classic MCAT discrimination point and the reason cardiac (not skeletal) function is sensitive to $Ca^{2+}$-channel blockers.
</details>`
    },
    {
      id: 'ap1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sliding filament: ACh → depolarization → T-tubule/DHP → ryanodine → Ca$^{2+}$ → troponin → tropomyosin moves → cross-bridge cycling.
- A band = constant. H zone and I band shrink during contraction (filaments slide).
- ATP needed for contraction (detachment) AND relaxation (SERCA) → rigor mortis when ATP gone.
- Osteoblasts build, osteoclasts break; PTH raises blood Ca$^{2+}$, calcitonin lowers it.
- Cardiac contraction needs extracellular Ca$^{2+}$ (Ca-induced Ca release); skeletal does not.`
    }
  ]
};
