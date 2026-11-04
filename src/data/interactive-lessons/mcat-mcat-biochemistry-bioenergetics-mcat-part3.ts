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

The free energy of each electron transfer follows from the reduction potentials: $\\Delta G^{\\circ\\prime} = -nF\\Delta E^{\\circ\\prime}$, with $\\Delta E^{\\circ\\prime} = E^{\\circ\\prime}_{\\text{acceptor}} - E^{\\circ\\prime}_{\\text{donor}}$; NADH ($-0.32$ V) → O$_2$ ($+0.82$ V) releases $\\approx -220$ kJ/mol.

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
      id: 'be3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — ETC Experiments

**Problem 1.** In poisoned mitochondria, NADH, CoQ and Complex III are all found fully REDUCED, while cytochrome c and Complex IV are fully OXIDIZED.

- **(a)** What redox state do carriers upstream and downstream of a block take?
- **(b)** Where is the reduced/oxidized boundary here?
- **(c)** Which step is blocked, and which inhibitor fits?

**(a) The rule.** Everything UPSTREAM of a block backs up in the reduced state (electrons pile up); everything downstream drains to the oxidized state. This is the ETC's version of a dammed river.

**(b) The boundary.** Between Complex III (reduced) and cytochrome c (oxidized).

**(c) The target.** Electron transfer from Complex III to cytochrome c is blocked — the behavior of antimycin A, a Complex III inhibitor. "Reduced before, oxidized after": find the boundary and you have found the inhibitor's target.

<!-- yield:low -->
- Problem 1 aside: within Complex III, antimycin A binds the Q cycle's matrix-facing quinone site (Qi), stalling electron flow through the complex.
<!-- /yield -->

**Problem 2.** Severe salicylate (aspirin) toxicity produces hyperthermia, increased O$_2$ consumption, and falling ATP despite abundant fuel.

- **(a)** What do toxic doses of salicylate do at the inner membrane?
- **(b)** Why do O$_2$ consumption and body temperature rise?
- **(c)** Why does ATP fall despite abundant fuel?

**(a) Uncoupling.** At toxic doses salicylates act as protonophore UNCOUPLERS: they shuttle H$^+$ across the inner membrane, dissipating the gradient.

**(b) Oxygen and heat.** Electron transport races to rebuild the gradient → O$_2$ consumption rises; the gradient's energy is lost as heat → hyperthermia.

**(c) No ATP.** No gradient reaches ATP synthase → ATP synthesis falls, even with the ETC running at maximum. The triad "more O$_2$, less ATP, more heat" always means uncoupling — the same physiology as brown-fat thermogenin, just pathological.

**Problem 3.** One NADH is made inside the matrix by isocitrate dehydrogenase. A liver cell oxidizes one cytosolic NADH via the malate-aspartate shuttle; a muscle cell oxidizes one via the glycerol-3-phosphate shuttle.

- **(a)** About how much ATP does the matrix NADH yield?
- **(b)** About how much ATP does the liver's cytosolic NADH yield?
- **(c)** About how much ATP does the muscle's cytosolic NADH yield?
- **(d)** How do the three yields rank?

**(a) Matrix NADH.** It enters Complex I directly → ~2.5 ATP.

**(b) Liver shuttle.** The malate-aspartate shuttle regenerates NADH INSIDE the matrix → also ~2.5 ATP.

**(c) Muscle shuttle.** The glycerol-3-P shuttle delivers the electrons via FAD to CoQ, skipping Complex I → ~1.5 ATP.

**(d) Ranking.** From (a)–(c): matrix = liver shuttle > muscle shuttle. Ask ONE question about any NADH: do its electrons reach Complex I or skip to CoQ? That single fact sets the yield.

**Problem 4.** Electrons pass from NADH ($E^{\\circ\\prime} = -0.32$ V) to O$_2$ ($E^{\\circ\\prime} = +0.82$ V). Use $\\Delta G^{\\circ\\prime} = -nF\\Delta E^{\\circ\\prime}$ with $F \\approx 96.5$ kJ/(mol·V).

- **(a)** What is $\\Delta E^{\\circ\\prime}$ for the transfer?
- **(b)** What is $\\Delta G^{\\circ\\prime}$ per NADH oxidized?
- **(c)** If one NADH yields ~2.5 ATP at 30.5 kJ/mol each, what fraction of that free energy is captured?

**(a) Potential difference.** $\\Delta E^{\\circ\\prime} = E^{\\circ\\prime}_{\\text{acceptor}} - E^{\\circ\\prime}_{\\text{donor}} = +0.82 - (-0.32) = +1.14$ V. A positive $\\Delta E^{\\circ\\prime}$ means electrons flow downhill, toward O$_2$.

**(b) Free energy.** NADH donates 2 electrons ($n = 2$), so with $\\Delta E^{\\circ\\prime} = +1.14$ V from (a): $\\Delta G^{\\circ\\prime} = -(2)(96.5)(1.14) \\approx -220$ kJ/mol.

**(c) Efficiency.** $2.5 \\times 30.5 \\approx 76$ kJ/mol is captured as ATP — about 35% of the 220 kJ/mol from (b) under standard conditions. The rest is released as heat.`
    },
    {
      id: 'be3-quiz1',
      type: 'multiple-choice' as const,
      content: `**ETC & Oxidative Phosphorylation** 🎯`,
      exercise: {
        questions: [
          {
            question: `FADH$_2$ yields less ATP than NADH because:`,
            options: [`FADH$_2$ donates only one electron per molecule to CoQ`, `Its electrons bypass Complex I's proton pumping`, `Its electrons bypass Complex III's proton pumping`, `Its electrons bypass Complex IV's proton pumping`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Complex II transfers succinate/FADH$_2$ electrons to CoQ without pumping protons, so fewer protons per electron pair cross the membrane — roughly 1.5 ATP versus 2.5 for NADH, which enters at the proton-pumping Complex I. FADH$_2$'s electrons still pass through Complexes III and IV, and like NADH it donates two electrons.`
          },
          {
            question: `Mitochondria treated with oligomycin stop consuming oxygen. Adding DNP to these same mitochondria will:`,
            options: [`Further decrease oxygen consumption`, `Restore oxygen consumption but not ATP synthesis`, `Restore both oxygen consumption and ATP synthesis`, `Have no effect, because Complex IV is blocked`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Oligomycin blocks the proton channel of ATP synthase; the gradient builds until pumping (and thus electron flow and O$_2$ use) stalls. DNP ferries protons across the membrane, collapsing the gradient — electron transport and O$_2$ consumption resume, but with no gradient, ATP synthase still makes no ATP. This classic experiment PROVES chemiosmotic coupling.`
          },
          {
            question: `Cyanide poisoning halts oxygen consumption entirely, while rotenone only reduces it. The difference is that rotenone:`,
            options: [`Blocks Complex I, leaving Complex II entry intact`, `Is a partial, reversible inhibitor of Complex IV`, `Blocks Complex II, leaving Complex I entry intact`, `Blocks Complex III, downstream of both entry points`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Rotenone blocks only the NADH entry point (Complex I); succinate-derived FADH$_2$ electrons still enter at Complex II and reach O$_2$. Cyanide blocks Complex IV — the single final doorway to O$_2$ — so ALL electron flow stops. Rotenone does not act on Complex II, III, or IV; a Complex III block would sit downstream of both entry points and, like cyanide, stop all O$_2$ consumption.`
          },
          {
            question: `The proton-motive force that drives ATP synthase consists of:`,
            options: [`Only a pH difference across the inner membrane`, `Only a membrane potential, with the matrix positive`, `Both a pH gradient and a membrane potential`, `Both a pH gradient and potential across the outer membrane`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Pumping H$^+$ into the intermembrane space makes the matrix relatively alkaline (chemical component) and negative (electrical component). Both contribute to the free energy released when protons re-enter through F$_o$. The outer membrane is porous and holds no gradient.`
          },
          {
            question: `In muscle using the glycerol-3-phosphate shuttle, each cytosolic NADH from glycolysis ultimately yields about:`,
            options: [`2.5 ATP`, `1.5 ATP`, `Zero ATP`, `4 ATP`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The shuttle hands cytosolic NADH electrons to a membrane-bound FAD, producing FADH$_2$-level entry at CoQ — bypassing Complex I. The malate-aspartate shuttle (heart/liver) preserves the NADH level (~2.5 ATP); this difference is why glucose's total yield is a range.`
          }
        ]
      }
    },
    {
      id: 'be3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **The electron path.** NADH → I → CoQ → III → cyt c → IV → O$_2$; FADH$_2$ enters at II, which pumps no protons.
- **A gradient couples it.** Proton-motive force ($\\Delta$pH + $\\Delta\\psi$ across the INNER membrane) drives rotary ATP synthase.
- **Inhibitors vs. uncouplers.** Rotenone (I), antimycin A (III), cyanide (IV), oligomycin (ATP synthase) cut O$_2$ use; uncouplers raise it.
- **Complex I sets the yield.** Electrons reaching Complex I give ~2.5 ATP; entering at CoQ (FADH$_2$, glycerol-3-P shuttle) ~1.5.

**Common traps**

- **Uncouplers stop respiration.** Uncouplers (DNP, aspirin overdose) speed O$_2$ use while ATP falls and heat rises.
- **Oligomycin blocks the chain.** It blocks ATP synthase; O$_2$ use stops only secondarily, as the gradient backs up.
- **Rotenone acts like cyanide.** Rotenone blocks only NADH entry, so succinate electrons still reach O$_2$; cyanide stops all flow.
- **FADH$_2$ carries fewer electrons.** Both carry 2 e$^-$; FADH$_2$ gives ~1.5 ATP because Complex II pumps no protons.

<!-- yield:low -->
- Low-yield extras: antimycin A acts at Complex III's Qi site, the matrix-facing quinone-binding site of the Q cycle
<!-- /yield -->`
    }
  ]
};
