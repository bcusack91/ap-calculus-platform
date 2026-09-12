export const mcatBioenergeticsPart3Data = {
  topicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  sections: [
    {
      id: 'be3-intro',
      type: 'text' as const,
      content: `# Bioenergetics

**Part 3 of 4 — Electron Transport & Oxidative Phosphorylation**

### The Chain: Four Complexes, Two Mobile Carriers

Electrons flow down an electrochemical staircase in the **inner mitochondrial membrane**, from carriers with more negative reduction potential toward O$_2$ (the most positive):

| Component | Accepts electrons from | Passes to | Pumps protons? |
|-----------|------------------------|-----------|----------------|
| Complex I (NADH dehydrogenase) | NADH | CoQ | Yes (~4 H$^+$) |
| Complex II (succinate dehydrogenase) | FADH$_2$ (succinate) | CoQ | **No** |
| CoQ (ubiquinone) | I and II | III | Mobile, lipid-soluble |
| Complex III | CoQH$_2$ | Cytochrome c | Yes (~4 H$^+$) |
| Cytochrome c | III | IV | Mobile, peripheral protein |
| Complex IV (cytochrome c oxidase) | Cyt c | O$_2$ → H$_2$O | Yes (~2 H$^+$) |

Because FADH$_2$ enters at Complex II (no pumping), its electrons drive fewer proton translocations: **~2.5 ATP per NADH vs. ~1.5 ATP per FADH$_2$**.

### Chemiosmosis

Proton pumping creates a **proton-motive force** across the inner membrane — part concentration gradient ($\\Delta$pH, matrix alkaline) and part electrical potential ($\\Delta\\psi$, matrix negative). Protons flow back through **ATP synthase** (F$_o$ membrane channel spins the rotor; F$_1$ catalytic heads make ATP). ETC and ATP synthesis are **coupled**: block one and the other stalls.

### Inhibitors & Uncouplers — Know the Map

| Agent | Target | Consequence |
|-------|--------|-------------|
| Rotenone | Complex I | NADH backs up; FADH$_2$ electrons still flow |
| Antimycin A | Complex III | Blocks both NADH and FADH$_2$ paths |
| Cyanide, CO, azide | Complex IV | Total ETC arrest; O$_2$ consumption stops |
| Oligomycin | ATP synthase (F$_o$) | Gradient builds until pumping stalls; O$_2$ use stops SECONDARILY |
| DNP, aspirin overdose | Uncoupler (protonophore) | Gradient dissipated as HEAT; O$_2$ use RISES; ATP falls |
| Thermogenin (UCP1) | Physiological uncoupler | Brown fat nonshivering thermogenesis |

**The uncoupler signature:** oxygen consumption UP, ATP synthesis DOWN, temperature UP. Inhibitors stop O$_2$ use; uncouplers accelerate it.

### Getting Cytosolic NADH Inside: The Shuttles

Glycolytic NADH is cytosolic, and the inner membrane is impermeable to NADH.

- **Malate-aspartate shuttle** (heart, liver): NADH → matrix NADH → Complex I (~2.5 ATP).
- **Glycerol-3-phosphate shuttle** (muscle, brain): NADH → FADH$_2$ on the inner membrane → CoQ (~1.5 ATP). Faster but less efficient.

This shuttle choice is why total ATP per glucose is quoted as a **range (~30-32)** rather than a single number.`
    },
    {
      id: 'be3-quiz1',
      type: 'multiple-choice' as const,
      content: `**ETC & Oxidative Phosphorylation** 🎯`,
      exercise: {
        questions: [
          {
            question: `FADH$_2$ yields less ATP than NADH because:`,
            options: [`FADH$_2$ carries only one electron`, `Its electrons enter at Complex II, bypassing Complex I's proton pumping`, `It is oxidized in the cytosol`, `It binds ATP synthase directly`],
            correctAnswer: 1,
            explanation: `Complex II transfers succinate/FADH$_2$ electrons to CoQ without pumping protons, so fewer protons per electron pair cross the membrane — roughly 1.5 ATP versus 2.5 for NADH, which enters at the proton-pumping Complex I.`
          },
          {
            question: `Mitochondria treated with oligomycin stop consuming oxygen. Adding DNP to these same mitochondria will:`,
            options: [`Further decrease oxygen consumption`, `Restore oxygen consumption without restoring ATP synthesis`, `Restore both oxygen consumption and ATP synthesis`, `Have no effect, because Complex IV is blocked`],
            correctAnswer: 1,
            explanation: `Oligomycin blocks the proton channel of ATP synthase; the gradient builds until pumping (and thus electron flow and O$_2$ use) stalls. DNP ferries protons across the membrane, collapsing the gradient — electron transport and O$_2$ consumption resume, but with no gradient, ATP synthase still makes no ATP. This classic experiment PROVES chemiosmotic coupling.`
          },
          {
            question: `Cyanide poisoning halts oxygen consumption entirely, while rotenone only reduces it. The difference is that rotenone:`,
            options: [`Blocks Complex I, leaving the Complex II entry route for electrons intact`, `Is a weaker inhibitor of Complex IV`, `Only inhibits ATP synthase`, `Uncouples the membrane`],
            correctAnswer: 0,
            explanation: `Rotenone blocks only the NADH entry point (Complex I); succinate-derived FADH$_2$ electrons still enter at Complex II and reach O$_2$. Cyanide blocks Complex IV — the single final doorway to O$_2$ — so ALL electron flow stops.`
          },
          {
            question: `The proton-motive force that drives ATP synthase consists of:`,
            options: [`Only a pH difference across the inner membrane`, `Only a membrane electrical potential`, `Both a pH gradient (matrix alkaline) and an electrical potential (matrix negative)`, `A sodium gradient across the outer membrane`],
            correctAnswer: 2,
            explanation: `Pumping H$^+$ into the intermembrane space makes the matrix relatively alkaline (chemical component) and negative (electrical component). Both contribute to the free energy released when protons re-enter through F$_o$. The outer membrane is porous and holds no gradient.`
          },
          {
            question: `In muscle using the glycerol-3-phosphate shuttle, each cytosolic NADH from glycolysis ultimately yields about:`,
            options: [`2.5 ATP, the same as matrix NADH`, `1.5 ATP, because the electrons arrive at CoQ via FAD`, `Zero ATP`, `4 ATP`],
            correctAnswer: 1,
            explanation: `The shuttle hands cytosolic NADH electrons to a membrane-bound FAD, producing FADH$_2$-level entry at CoQ — bypassing Complex I. The malate-aspartate shuttle (heart/liver) preserves the NADH level (~2.5 ATP); this difference is why glucose's total yield is a range.`
          }
        ]
      }
    },
    {
      id: 'be3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Electron path: NADH → I → CoQ → III → cyt c → IV → O$_2$; FADH$_2$ enters at II (no pumping) → ~1.5 vs ~2.5 ATP
- Proton-motive force = $\\Delta$pH + $\\Delta\\psi$ across the INNER membrane; ATP synthase (F$_o$F$_1$) is a rotary motor
- Inhibitor map: rotenone I, antimycin A III, CN/CO/azide IV, oligomycin ATP synthase
- Uncouplers (DNP, thermogenin): O$_2$ consumption UP, ATP DOWN, heat UP — opposite O$_2$ signature from inhibitors
- Shuttles for cytosolic NADH: malate-aspartate (keeps NADH value) vs. glycerol-3-phosphate (drops to FADH$_2$ value)`
    },
    {
      id: 'be3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — ETC Experiments

<details>
<summary><b>Example 1: Diagnose the site of a block from carrier redox states</b></summary>

**Question:** In poisoned mitochondria, NADH, CoQ, and Complex III are all found fully REDUCED, while cytochrome c and Complex IV are fully OXIDIZED. Where is the block?

**Solution:**
1. Everything UPSTREAM of a block backs up in the reduced state (electrons pile up); everything downstream drains to the oxidized state.
2. The reduced/oxidized boundary lies between Complex III and cytochrome c.
3. The inhibitor blocks electron transfer from Complex III to cytochrome c — the behavior of antimycin A (acting within Complex III's Q cycle at the cyt c-facing side).

**MCAT Strategy:** "Reduced before, oxidized after" — find the boundary and you have found the inhibitor's target. This is the ETC's version of a dammed river.
</details>

<details>
<summary><b>Example 2: Why does aspirin overdose cause fever and metabolic derangement?</b></summary>

**Question:** Severe salicylate toxicity produces hyperthermia, increased O$_2$ consumption, and falling ATP despite abundant fuel. Which single mechanism explains all three findings?

**Solution:**
1. Salicylates at toxic doses act as protonophore UNCOUPLERS: they shuttle H$^+$ across the inner membrane, dissipating the gradient.
2. Electron transport races to rebuild the gradient → O$_2$ consumption rises; the gradient's energy is lost as heat → hyperthermia.
3. No gradient reaches ATP synthase → ATP synthesis falls even though the ETC is running at maximum.

**MCAT Strategy:** The triad "more O$_2$, less ATP, more heat" always means uncoupling — the same physiology as brown-fat thermogenin, just pathological.
</details>

<details>
<summary><b>Example 3: ATP arithmetic for one NADH under different conditions</b></summary>

**Question:** A liver cell oxidizes one cytosolic NADH via the malate-aspartate shuttle; a muscle cell oxidizes one via the glycerol-3-phosphate shuttle; a third NADH is generated inside the matrix by isocitrate dehydrogenase. Rank the ATP yields.

**Solution:**
1. Matrix NADH (isocitrate DH): enters Complex I directly → ~2.5 ATP.
2. Liver cytosolic NADH: malate-aspartate shuttle regenerates NADH INSIDE the matrix → also ~2.5 ATP.
3. Muscle cytosolic NADH: glycerol-3-P shuttle delivers electrons via FAD to CoQ → ~1.5 ATP.
4. Ranking: matrix = liver shuttle > muscle shuttle.

**MCAT Strategy:** Ask ONE question about any NADH: do its electrons reach Complex I or skip to CoQ? That single fact sets the yield.
</details>`
    }
  ]
};
