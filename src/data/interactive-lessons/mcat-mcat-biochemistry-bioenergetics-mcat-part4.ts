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
2. **ADP added:** O$_2$ use accelerates — proof that respiration is coupled to phosphorylation.
3. **ADP exhausted:** slows again.
4. **Oligomycin:** O$_2$ use stops (synthase blocked, gradient maxed).
5. **Uncoupler (DNP):** O$_2$ use surges to maximum with NO ATP made (uncoupled).

<!-- yield:low -->
- Lab labels: ADP-stimulated respiration is called "state 3" and the slower rate after ADP runs out "state 4"; FCCP is a laboratory uncoupler used like DNP.
<!-- /yield -->

Also expect the **P/O ratio** (ATP made per oxygen atom reduced): higher for NADH-linked substrates (malate/glutamate) than for succinate — because of Complex I.`
    },
    {
      id: 'be4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Quantitative Integration

**Problem 1.** One glucose is fully oxidized in a muscle cell that uses the glycerol-3-phosphate shuttle. Use 2.5 ATP per NADH and 1.5 ATP per FADH$_2$.

- **(a)** How many ATP and GTP are made directly?
- **(b)** How much ATP comes from matrix NADH?
- **(c)** How much ATP comes from FADH$_2$ and from the cytosolic NADH?
- **(d)** What is the total, and how would the malate-aspartate shuttle change it?

**(a) Direct.** 2 ATP (glycolysis) + 2 GTP (TCA) = 4.

**(b) Matrix NADH.** 2 (PDH) + 6 (TCA) = 8 → $8 \\times 2.5 = 20$.

**(c) FADH$_2$ and cytosolic NADH.** 2 FADH$_2$ (TCA) → $2 \\times 1.5 = 3$. The 2 cytosolic NADH enter via the glycerol-3-P shuttle, so they count at the FADH$_2$ value: $2 \\times 1.5 = 3$.

**(d) Total.** From (a)–(c): $4 + 20 + 3 + 3 = 30$ ATP. With the malate-aspartate shuttle the 2 cytosolic NADH count as $2 \\times 2.5 = 5$, giving 32. Memorize the inventory (10 NADH, 2 FADH$_2$, 4 direct) and adjust only the two cytosolic NADH.

**Problem 2.** An oxygen-electrode trace: malate added (slow O$_2$ decline) → ADP added (fast decline) → the decline slows again → compound X added (decline stops) → compound Y added (fastest decline of all).

- **(a)** What do the ADP response and the later slowing show?
- **(b)** What is compound X?
- **(c)** What is compound Y?

**(a) Coupled respiration.** Normal coupled respiration: fast while ADP is available, slow again once it is used up.

**(b) Compound X.** X halts O$_2$ consumption with substrate still present, so it blocks either the chain or the synthase. Because Y later RESTORES rapid O$_2$ use, the chain must be intact — X is **oligomycin** (ATP synthase block; gradient back-pressure stops electron flow).

**(c) Compound Y.** Y bypasses the synthase by collapsing the gradient: an **uncoupler** such as DNP — maximum electron flow, zero ATP. Only an uncoupler INCREASES O$_2$ use after oligomycin; had Y been cyanide, the trace would have stayed flat.

**Problem 3.** A 100 m sprinter accumulates lactate, while a marathoner mostly does not.

- **(a)** Which ATP sources carry the sprint, and why does lactate build up?
- **(b)** How does the marathoner meet ATP demand without lactate?
- **(c)** What does each athlete trade off?

**(a) Sprint.** ATP demand outpaces oxidative ramp-up. Creatine phosphate covers seconds; then anaerobic glycolysis dominates — fast ATP (2/glucose), with NAD$^+$ regenerated by lactate dehydrogenase, so lactate accumulates.

**(b) Marathon.** Steady-state demand sits within oxidative phosphorylation's capacity; muscle burns glucose and increasingly fatty acids (~106 ATP per palmitate), and NADH is reoxidized by the ETC, not LDH.

**(c) Rate vs. yield.** The sprinter trades efficiency for POWER (ATP per second); the marathoner trades power for efficiency (ATP per gram of fuel). Glycolysis is low-yield but fast and O$_2$-independent; oxidation is high-yield but O$_2$- and time-limited.`
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
            yield: 'HIGH',
            explanation: `Anaerobic glycolysis nets 2 ATP per glucose versus ~30 aerobically: a ~15-fold gap. This is why hypoxic tissues and glycolytic tumor cells (Warburg effect) exhibit enormous glucose uptake.`
          },
          {
            question: `Isolated mitochondria given malate consume little O$_2$ until ADP is added, after which respiration accelerates sharply. This observation demonstrates that:`,
            options: [`ADP is an allosteric activator of Complex I`, `Electron transport is coupled to ATP synthesis`, `ADP is an electron donor for the chain`, `Oxygen is not the final electron acceptor`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Without ADP, ATP synthase has no substrate; protons cannot re-enter, the gradient backs up, and electron flow (hence O$_2$ use) is restrained. Supplying ADP lets protons flow through the synthase, unleashing respiration — respiratory control, the hallmark of coupling.`
          },
          {
            question: `Adenylate kinase interconverts 2 ADP $\\rightleftharpoons$ ATP + AMP. Why is AMP a more sensitive indicator of energy stress than ADP?`,
            options: [`AMP is present at much higher concentrations than ATP`, `Small ATP drops cause far larger fractional AMP rises`, `Adenylate kinase converts AMP directly into cAMP`, `AMP changes by a smaller fraction than ADP does`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Because cellular AMP levels are tiny compared to ATP, the adenylate kinase equilibrium amplifies changes: a small percentage fall in ATP shifts a comparatively huge percentage rise in AMP. AMPK exploits this amplified signal as the cell's fuel gauge.`
          },
          {
            question: `Mitochondria respiring on succinate show a lower P/O ratio than mitochondria respiring on malate because succinate-derived electrons:`,
            options: [`Reduce oxygen only partially, to superoxide`, `Enter at Complex II, skipping Complex I`, `Bypass Complex III and cytochrome c`, `Generate more heat per electron`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Malate oxidation generates matrix NADH (enters at Complex I; ~2.5 ATP per pair of electrons), while succinate reduces FAD at Complex II (~1.5). Fewer protons pumped per electron pair = less ATP per oxygen atom consumed = lower P/O ratio.`
          },
          {
            question: `During fasting, liver PDH is largely switched off as PDH kinase is induced and PDH's own products, acetyl-CoA and NADH, build up. The metabolic purpose is to:`,
            options: [`Accelerate glucose oxidation in the liver`, `Preserve pyruvate carbons for gluconeogenesis`, `Divert pyruvate into hepatic fatty acid synthesis`, `Block fatty acid oxidation in the liver`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The fasting hormonal state acts on PDH only indirectly: it induces PDH kinase, and fatty-acid oxidation supplies acetyl-CoA and NADH that further inhibit the complex. Acetyl-CoA carbons cannot return to glucose (PDH is irreversible). Switching PDH off routes pyruvate, lactate, and alanine toward oxaloacetate and gluconeogenesis, while the liver burns fatty acids for its own ATP — the essence of fasting fuel logic.`
          }
        ]
      }
    },
    {
      id: 'be4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **The glucose ledger.** 4 direct (2 ATP + 2 GTP) plus 10 NADH and 2 FADH$_2$ → ~30-32 ATP; anaerobic glycolysis gives 2.
- **Shuttles set the range.** The 2 cytosolic NADH count ~2.5 each (malate-aspartate) or ~1.5 each (glycerol-3-P).
- **AMP is the alarm.** Adenylate kinase amplifies AMP rises, which activate AMPK; high ATP, NADH and citrate signal plenty.
- **Reading respirometry.** ADP speeds O$_2$ use (coupling), oligomycin stops it, and an uncoupler maximizes it with no ATP.

**Common traps**

- **Succinate matches malate.** Succinate's electrons skip Complex I, so its P/O ratio is lower than NADH-linked malate's.
- **PDH stays on in fasting.** Fasting turns PDH off (muscle and liver) to spare pyruvate carbon for gluconeogenesis.
- **ADP as a fuel.** ADP speeds respiration as ATP synthase's substrate (coupling), not as an electron donor.
- **Any poison after oligomycin.** Only an uncoupler restores O$_2$ use after oligomycin; cyanide leaves the trace flat.

<!-- yield:low -->
- Low-yield extras: respirometry jargon — ADP-stimulated respiration is "state 3", the post-ADP rate is "state 4"; FCCP is a lab uncoupler that behaves like DNP
<!-- /yield -->`
    }
  ]
};
