export const mcatBiochemPart4Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc4-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 4 of 7 — TCA Cycle & Oxidative Phosphorylation**

### TCA Cycle (Mitochondrial Matrix)

$$\\text{Acetyl-CoA} + \\text{OAA} \\to \\text{Citrate} \\to \\cdots \\to \\text{OAA (regenerated)}$$

**Per acetyl-CoA**: 3 NADH, 1 FADH$_2$, 1 GTP

**Per glucose** (2 acetyl-CoA): 6 NADH, 2 FADH$_2$, 2 GTP from TCA

### Electron Transport Chain (Inner Mitochondrial Membrane)

| Complex | Accepts from | Pumps H$^+$ |
|---------|-------------|-------------|
| I (NADH dehydrogenase) | NADH | Yes (4 H$^+$) |
| II (Succinate dehydrogenase) | FADH$_2$ | No |
| III (Cytochrome bc1) | CoQ | Yes (4 H$^+$) |
| IV (Cytochrome c oxidase) | Cyt c → O$_2$ | Yes (2 H$^+$) |
| ATP Synthase (V) | H$^+$ gradient | Makes ATP |

### ATP Yield Per Glucose (approximate)

- Glycolysis: 2 ATP + 2 NADH (~3-5 ATP)
- PDH: 2 NADH (~5 ATP)
- TCA: 6 NADH (~15 ATP) + 2 FADH$_2$ (~3 ATP) + 2 GTP
- **Total: ~30-32 ATP per glucose**

Chemiosmosis links ETC to ATP synthase: proton-motive force (electrochemical gradient) drives ATP production.`
    },
    {
      id: 'bc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**TCA & ETC** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cyanide poisoning inhibits Complex IV. The IMMEDIATE effect is:`,
            options: [`NADH accumulates, ETC stops, no proton gradient, no ATP synthesis`, `Only Complex IV stops, others continue normally`, `ATP synthase runs in reverse`, `Glycolysis is inhibited`],
            correctAnswer: 0,
            explanation: `If Complex IV is blocked, electrons cannot pass to O$_2$. All upstream complexes become fully reduced and stop. No proton pumping → no gradient → no oxidative phosphorylation. NADH and FADH$_2$ accumulate.`
          },
          {
            question: `FADH$_2$ produces fewer ATP than NADH because:`,
            options: [`FADH$_2$ enters at Complex II, bypassing Complex I (fewer protons pumped)`, `FADH$_2$ has less energy than NADH`, `FADH$_2$ cannot cross the membrane`, `$FADH_2$ is used only in the TCA cycle`],
            correctAnswer: 0,
            explanation: `FADH$_2$ donates electrons to Complex II, which does NOT pump protons. NADH enters at Complex I, which DOES pump protons. So FADH$_2$ contributes to fewer H$^+$ pumped → fewer ATP (~1.5 vs ~2.5 per electron pair).`
          },
          {
            question: `The final electron acceptor in the ETC is:`,
            options: [`NAD+`, `FAD`, `O$_2$`, `CO$_2$`],
            correctAnswer: 2,
            explanation: `Oxygen accepts electrons at Complex IV and is reduced to water.`
          },
          {
            question: `An uncoupler primarily causes which immediate effect?`,
            options: [`Increased proton gradient`, `Reduced oxygen consumption`, `Dissipation of proton gradient with less ATP synthesis`, `Direct inhibition of glycolysis`],
            correctAnswer: 2,
            explanation: `Uncouplers allow protons to re-enter matrix without ATP synthase, reducing ATP yield despite ongoing electron transport.`
          }
        ]
      }
    },
    {
      id: 'bc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- TCA: 3 NADH + 1 FADH$_2$ + 1 GTP per acetyl-CoA
- ETC: NADH → Complex I; FADH$_2$ → Complex II (fewer ATP)
- Poisons: Rotenone (I), Antimycin A (III), Cyanide/CO (IV), Oligomycin (ATP synthase)
- ~30-32 ATP per glucose total (aerobic metabolism)`
    },
    {
      id: 'bc4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — TCA & Oxidative Phosphorylation

<details>
<summary><b>Example 1: Compute reducing equivalents from one glucose</b></summary>

**Question:** How many NADH and FADH$_2$ come from the TCA cycle per glucose?

**Solution:**
1. One acetyl-CoA yields 3 NADH and 1 FADH$_2$ in TCA.
2. One glucose gives 2 acetyl-CoA.
3. Multiply by 2: **6 NADH and 2 FADH$_2$**.

**MCAT tip:** Distinguish TCA output from total cellular output (which also includes glycolysis and PDH).
</details>

<details>
<summary><b>Example 2: Predict effects of cyanide at Complex IV</b></summary>

**Question:** Cyanide blocks cytochrome c oxidase. What are the immediate biochemical consequences?

**Solution:**
1. Electrons cannot transfer to oxygen.
2. Upstream carriers remain reduced and electron flow stalls.
3. Proton pumping collapses at I, III, and IV as flow stops.
4. ATP synthase loses proton-motive force, so oxidative ATP production drops sharply.
5. NADH accumulates, pushing metabolism toward anaerobic pathways.

**MCAT tip:** A block at Complex IV functionally backs up the entire chain.
</details>

<details>
<summary><b>Example 3: Distinguish uncouplers from ATP synthase inhibitors</b></summary>

**Question:** Compare DNP (uncoupler) with oligomycin (ATP synthase inhibitor).

**Solution:**
1. DNP carries protons across the inner membrane, dissipating the gradient.
2. With DNP, ETC can continue and oxygen consumption can increase, but ATP yield falls.
3. Oligomycin blocks proton flow through ATP synthase directly.
4. With oligomycin, proton backpressure slows ETC and oxygen use decreases.

**MCAT tip:** Uncoupler = high heat, low ATP; ATP synthase blocker = low ATP and reduced ETC throughput.
</details>`
    }
  ]
};
