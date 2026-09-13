export const mcatBioenergeticsPart4Data = {
  topicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  sections: [
    {
      id: 'be4-intro',
      type: 'text' as const,
      content: `# Bioenergetics

**Part 4 of 4 — ATP Accounting, Energy States & MCAT Integration**

### The Full Ledger for One Glucose (Aerobic)

| Stage | Location | ATP/GTP direct | Reduced carriers |
|-------|----------|----------------|------------------|
| Glycolysis | Cytosol | 2 ATP (net) | 2 NADH (cytosolic) |
| PDH (x2 pyruvate) | Matrix | 0 | 2 NADH |
| TCA cycle (x2 turns) | Matrix | 2 GTP | 6 NADH + 2 FADH$_2$ |

Oxidative phosphorylation converts carriers at ~2.5 ATP/NADH and ~1.5 ATP/FADH$_2$:

- 8 matrix NADH × 2.5 = 20
- 2 FADH$_2$ × 1.5 = 3
- 2 cytosolic NADH × 2.5 (malate-aspartate) or × 1.5 (glycerol-3-P) = 5 or 3
- Plus 4 direct (2 ATP + 2 GTP)

**Total ~30-32 ATP per glucose.** Anaerobic glycolysis alone: **2 ATP** — a 15-fold difference that explains why oxygen debt, fast-twitch fatigue, and the Warburg effect all matter.

### Energy State Sensing

- **High AMP** (via adenylate kinase: 2 ADP $\\rightleftharpoons$ ATP + AMP) is the cell's low-fuel alarm; it activates **AMPK**, which switches ON catabolism (glycolysis, fatty acid oxidation) and OFF biosynthesis.
- **ATP/citrate/NADH high** = fed, energy-rich signals that inhibit PFK-1, isocitrate DH, PDH.
- Creatine phosphate buffers ATP over seconds; glycogen over minutes; fat over days.

### Fed vs. Fasting Energy Flow (Preview of Metabolic Integration)

| State | Dominant fuel logic |
|-------|---------------------|
| Fed (insulin) | Glucose oxidation, glycogen + fat synthesis; PDH active |
| Fasting (glucagon) | Liver: glycogenolysis then gluconeogenesis; muscle/liver burn fatty acids; PDH off (spares carbons) |
| Prolonged fast | Ketones fuel brain; muscle protein spared |

### Passage Skills: Oxygen Electrode & Respirometry Experiments

MCAT bioenergetics passages often show O$_2$ consumption traces of isolated mitochondria:

1. **Substrate added (e.g., succinate or malate):** slow O$_2$ use (limited by ADP availability).
2. **ADP added:** O$_2$ use accelerates ("state 3") — proof that respiration is coupled to phosphorylation.
3. **ADP exhausted:** slows again ("state 4").
4. **Oligomycin:** O$_2$ use stops (synthase blocked, gradient maxed).
5. **DNP/FCCP:** O$_2$ use surges to maximum with NO ATP made (uncoupled).

Also expect the **P/O ratio** (ATP made per oxygen atom reduced): higher for NADH-linked substrates (malate/glutamate) than for succinate — because of Complex I.`
    },
    {
      id: 'be4-quiz1',
      type: 'multiple-choice' as const,
      content: `**ATP Accounting & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell forced to rely on anaerobic glycolysis must consume roughly how many times more glucose to maintain its ATP supply compared with full aerobic oxidation (~30 ATP/glucose)?`,
            options: [`About 2 times more`, `About 5 times more`, `About 15 times more`, `The same amount`],
            correctAnswer: 2,
            explanation: `Anaerobic glycolysis nets 2 ATP per glucose versus ~30 aerobically: a ~15-fold gap. This is why hypoxic tissues and glycolytic tumor cells (Warburg effect) exhibit enormous glucose uptake.`
          },
          {
            question: `Isolated mitochondria given malate consume little O$_2$ until ADP is added, after which respiration accelerates sharply. This observation demonstrates that:`,
            options: [`ADP is an allosteric activator of Complex I`, `Electron transport is coupled to ATP synthesis`, `ADP is an electron donor for the chain`, `Oxygen is not the final electron acceptor`],
            correctAnswer: 1,
            explanation: `Without ADP, ATP synthase has no substrate; protons cannot re-enter, the gradient backs up, and electron flow (hence O$_2$ use) is restrained. Supplying ADP lets protons flow through the synthase, unleashing respiration — respiratory control, the hallmark of coupling.`
          },
          {
            question: `Adenylate kinase interconverts 2 ADP $\\rightleftharpoons$ ATP + AMP. Why is AMP a more sensitive indicator of energy stress than ADP?`,
            options: [`AMP is present at much higher concentrations than ATP`, `Small ATP drops cause far larger fractional AMP rises`, `Adenylate kinase converts AMP directly into cAMP`, `AMP changes by a smaller fraction than ADP does`],
            correctAnswer: 1,
            explanation: `Because cellular AMP levels are tiny compared to ATP, the adenylate kinase equilibrium amplifies changes: a small percentage fall in ATP shifts a comparatively huge percentage rise in AMP. AMPK exploits this amplified signal as the cell's fuel gauge.`
          },
          {
            question: `Mitochondria respiring on succinate show a lower P/O ratio than mitochondria respiring on malate because succinate-derived electrons:`,
            options: [`Reduce oxygen only partially, to superoxide`, `Enter at Complex II, skipping Complex I`, `Bypass Complex III and cytochrome c`, `Generate more heat per electron`],
            correctAnswer: 1,
            explanation: `Malate oxidation generates matrix NADH (enters at Complex I; ~2.5 ATP per pair of electrons), while succinate reduces FAD at Complex II (~1.5). Fewer protons pumped per electron pair = less ATP per oxygen atom consumed = lower P/O ratio.`
          },
          {
            question: `During early fasting, glucagon signaling inactivates liver PDH. The metabolic purpose is to:`,
            options: [`Accelerate glucose oxidation in the liver`, `Preserve pyruvate carbons for gluconeogenesis`, `Divert pyruvate into hepatic fatty acid synthesis`, `Block fatty acid oxidation in the liver`],
            correctAnswer: 1,
            explanation: `Acetyl-CoA carbons cannot return to glucose (PDH is irreversible). Switching PDH off routes pyruvate, lactate, and alanine toward oxaloacetate and gluconeogenesis, while the liver burns fatty acids for its own ATP — the essence of fasting fuel logic.`
          }
        ]
      }
    },
    {
      id: 'be4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Glucose ledger: 2 ATP + 2 GTP direct, 10 NADH + 2 FADH$_2$ as carriers → ~30-32 ATP total; anaerobic = 2
- Yield range comes from the cytosolic-NADH shuttle choice (~2.5 vs ~1.5 each)
- AMP (amplified by adenylate kinase) → AMPK = low-energy alarm; ATP/NADH/citrate = abundance signals
- Respirometry: ADP addition speeds O$_2$ use (coupling), oligomycin stops it, uncoupler maximizes it without ATP
- P/O ratio: NADH-linked substrates > succinate (Complex I pumping); fasting turns PDH off to spare gluconeogenic carbon`
    },
    {
      id: 'be4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Quantitative Integration

<details>
<summary><b>Example 1: Full ATP count with a specified shuttle</b></summary>

**Question:** Compute the ATP yield from one glucose fully oxidized in a muscle cell using the glycerol-3-phosphate shuttle (use 2.5/NADH and 1.5/FADH$_2$).

**Solution:**
1. Direct: 2 ATP (glycolysis) + 2 GTP (TCA) = 4
2. Matrix NADH: 2 (PDH) + 6 (TCA) = 8 → $8 \\times 2.5 = 20$
3. FADH$_2$: 2 (TCA) → $2 \\times 1.5 = 3$
4. Cytosolic NADH: 2 via glycerol-3-P shuttle → counted at FADH$_2$ value: $2 \\times 1.5 = 3$
5. Total: $4 + 20 + 3 + 3 = 30$ ATP (32 with the malate-aspartate shuttle: the 2 cytosolic NADH count as $2 \\times 2.5 = 5$).

**MCAT Strategy:** Memorize the carrier inventory (10 NADH, 2 FADH$_2$, 4 direct) and just adjust the two cytosolic NADH for the shuttle in play.
</details>

<details>
<summary><b>Example 2: Interpret an oxygen-electrode trace</b></summary>

**Question:** A trace shows: malate added (slow O$_2$ decline) → ADP added (fast decline) → plateau → compound X added (O$_2$ decline stops) → compound Y added (fastest decline of all). Identify X and Y.

**Solution:**
1. The ADP response and later plateau are normal state 3/state 4 respiration.
2. X halts O$_2$ consumption with substrate still present: it blocks either the chain or the synthase. Because Y subsequently RESTORES rapid O$_2$ use, the chain must be intact — so X is **oligomycin** (ATP synthase block; gradient back-pressure stops electron flow).
3. Y bypasses the synthase by collapsing the gradient: an **uncoupler** (DNP/FCCP). Maximum electron flow, zero ATP.

**MCAT Strategy:** An uncoupler is the only agent that INCREASES O$_2$ consumption after oligomycin; if Y had been cyanide, the trace would have stayed flat.
</details>

<details>
<summary><b>Example 3: Fuel economics of a marathon vs. a sprint</b></summary>

**Question:** Explain why a 100 m sprinter accumulates lactate while a marathoner mostly does not, in bioenergetic terms.

**Solution:**
1. Sprint: ATP demand exceeds oxidative capacity's ramp-up. Creatine phosphate covers seconds; then anaerobic glycolysis dominates — fast ATP (2/glucose) with NAD$^+$ regenerated by lactate dehydrogenase → lactate accumulates.
2. Marathon: steady-state demand sits within oxidative phosphorylation's capacity; muscle burns glucose and increasingly fatty acids (~106 ATP per palmitate), and NADH is reoxidized by the ETC, not LDH.
3. The sprinter trades efficiency for POWER (ATP per second); the marathoner trades power for efficiency (ATP per gram fuel).

**MCAT Strategy:** Frame exercise questions as rate vs. yield: glycolysis is low-yield but fast and O$_2$-independent; oxidation is high-yield but O$_2$- and time-limited.
</details>`
    }
  ]
};
