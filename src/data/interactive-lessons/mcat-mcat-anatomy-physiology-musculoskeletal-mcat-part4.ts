export const mcatMskPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-musculoskeletal-mcat',
  sections: [
    {
      id: 'msk4-intro',
      type: 'text' as const,
      content: `# Musculoskeletal System — Deep Dive

**Part 4 of 4 — MCAT Integration: Rigor Mortis, Disease Logic & Experimental Data**

### Rigor Mortis: The Ultimate Cross-Bridge Question

After death, ATP production stops. Two consequences combine:

1. Without SERCA activity, calcium leaks from the SR into the cytosol → tropomyosin moves aside → cross-bridges form
2. Without new ATP, myosin heads **cannot DETACH** from actin (remember: ATP BINDING is what releases the head)

Result: muscles lock stiff for 1-3 days, until enzymatic degradation of the machinery. Rigor mortis is a pure test of the "ATP binding releases" fact — a corpse is rigid not because it contracts, but because its cross-bridges cannot let go.

### NMJ Diseases and Toxins — Lesion Mapping

| Condition | Lesion | Presentation logic |
|-----------|--------|--------------------|
| Myasthenia gravis | AUTOANTIBODIES against nicotinic ACh receptors (type II autoimmunity) | Weakness that WORSENS with use — repeated firing depletes ACh while fewer receptors remain to catch it; classically droopy eyelids, improves with acetylcholinesterase inhibitors |
| Botulinum toxin | Blocks ACh RELEASE from the motor neuron | FLACCID paralysis — no signal reaches the muscle at all |
| Tetanus toxin | Blocks release of INHIBITORY neurotransmitters (glycine/GABA) in the spinal cord | SPASTIC paralysis — motor neurons fire unchecked (lockjaw); note the contrast: botulinum silences, tetanus disinhibits |
| Curare / nicotinic blockers | Competitively block the nicotinic receptor | Flaccid paralysis; overcome by raising ACh (acetylcholinesterase inhibitors) |

### Deeper Muscle Pathology (concept level)

- **Malignant hyperthermia**: an inherited hyperactive **ryanodine receptor**; certain anesthetics trigger massive SR calcium release → sustained contraction, runaway ATP consumption, and dangerous heat production. Treated by blocking the ryanodine receptor (dantrolene).
- **Duchenne muscular dystrophy (DMD)**: X-linked loss of **dystrophin**, the protein anchoring the sarcomere lattice to the sarcolemma; contraction shears the unanchored membrane, fibers die and are replaced by fat and fibrous tissue → progressive weakness in boys.

### Bone Endocrinology Revisited

- **Osteoporosis logic**: estrogen normally restrains osteoclasts; postmenopausal estrogen loss → net resorption → trabecular thinning. Interventions follow the mechanism: weight-bearing exercise (loading favors formation), calcium + vitamin D (substrate), antiresorptive drugs (osteoclast inhibition).
- **PTH paradox**: CHRONICALLY high PTH (hyperparathyroidism) causes net bone LOSS — sustained osteoclast activation defends serum calcium at the skeleton's expense. Yet brief INTERMITTENT PTH dosing is an anabolic osteoporosis therapy (stimulates osteoblasts more than osteoclasts). Passages love this dose-timing reversal.

### Reading Experimental Figures

- **Force vs. stimulation frequency**: rises from single twitches through summation to a tetanic plateau. A rightward/lower curve after a drug suggests impaired calcium release or receptor function; an inability to RETURN to baseline between stimuli suggests impaired reuptake (SERCA).
- **Length-tension curve**: an inverted U. Points on the descending (overstretched) limb mean reduced overlap; the ascending limb reflects filament crowding. Shifts in the curve's height (not position) usually mean altered cross-bridge number or calcium availability.
- **Fatigue curves**: type II fiber preparations decline within seconds to a minute; type I preparations hold. A preparation that maintains force under nitrogen (no oxygen) briefly is running on phosphagen + glycolysis.

The universal strategy: place the lesion ON THE CHAIN — neuron → ACh release → receptor → sarcolemma AP → T-tubule → DHP → ryanodine → Ca → troponin/tropomyosin → cross-bridge → SERCA — then predict everything downstream fails while everything upstream still works.`
    },
    {
      id: 'msk4-worked',
      type: 'text' as const,
      content: `### Worked Example — Drug X on an Isolated Muscle Preparation

**Passage-style problem.** An isolated frog skeletal muscle is mounted on a force transducer with intact nerve. Baseline: single nerve stimuli give normal twitches with complete relaxation between them; 50 Hz stimulation gives smooth tetanus that relaxes fully when stimulation stops. The muscle is then perfused with Drug X, a selective SERCA inhibitor, and the protocol is repeated. Observed: the first twitch after Drug X has near-normal amplitude, but force fails to return to baseline between stimuli, and after a brief stimulus train the muscle remains partially contracted for minutes.

**Question 1 — Why is the first twitch nearly normal?** Everything upstream of SERCA is intact: ACh release, end-plate potential, action potential, DHP-ryanodine coupling, and SR calcium release all proceed, and the SR still holds its pre-drug calcium load. Contraction machinery is untouched — only reuptake is blocked.

**Question 2 — Explain the failure to relax.** Relaxation requires cytosolic calcium removal by SERCA. With the pump blocked, calcium lingers, troponin stays occupied, tropomyosin stays displaced, and cross-bridges keep cycling — a contracture. This dissociates "contraction is active / relaxation is passive" (false): relaxation costs ATP.

**Question 3 — Predict what happens to twitch amplitude over a LONG stimulus train with Drug X.** It declines. Calcium that cannot be returned to the SR is slowly extruded from the cell or buffered; the SR store progressively empties, so each ryanodine-mediated release is smaller. Early: sustained force from cytosolic calcium; late: shrinking releasable pool.

**Question 4 — Contrast with Drug Y (blocks nicotinic receptors, curare-like) and Drug Z (locks ryanodine receptors open, malignant-hyperthermia-like).** Drug Y acts at the top of the chain: no end-plate potential, no AP, no calcium release — flaccid, zero-force preparation, though DIRECT electrical stimulation of the muscle membrane would still work. Drug Z floods the cytosol with SR calcium independent of stimulation: sustained contracture WITHOUT nerve input, plus heavy ATP consumption (cycling cross-bridges and futile pumping) generating heat. Same rigid endpoint as Drug X, but Drug X requires stimulation to start whereas Drug Z self-triggers — locate the lesion on the chain and the phenotypes separate cleanly.`
    },
    {
      id: 'msk4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MSK Integration & Experimental Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rigor mortis develops after death because, in the absence of ATP, myosin heads:`,
            options: [`Cannot be cocked into the high-energy state, preventing all actin binding`, `Cannot detach from actin, since detachment requires ATP binding`, `Are degraded by calcium-activated proteases within minutes`, `Continue power strokes indefinitely, contracting muscles fully`],
            correctAnswer: 1,
            explanation: `ATP BINDING is what releases myosin from actin; with no ATP, cross-bridges lock in the attached state, stiffening muscles. Choice A misses that leaked calcium plus already-cocked heads allow attachment before ATP runs out entirely — attachment happens, release cannot. Protease degradation is what eventually RESOLVES rigor days later, and power strokes cannot repeat without detachment/re-cocking, so muscles stiffen rather than shorten.`
          },
          {
            question: `A patient has drooping eyelids and muscle weakness that worsens over the day and with repeated activity, improving with rest and with acetylcholinesterase-inhibitor treatment. The underlying mechanism is most likely:`,
            options: [`Autoantibodies destroying nicotinic acetylcholine receptors at the end plate`, `A toxin preventing acetylcholine release from motor neurons`, `Loss of dystrophin anchoring in muscle fibers`, `Hyperactive ryanodine receptors releasing excess calcium`],
            correctAnswer: 0,
            explanation: `Use-dependent weakness that responds to boosting synaptic ACh is myasthenia gravis: with fewer functional receptors (a type II autoimmune attack), the safety margin of transmission is thin, and normal ACh rundown during repeated firing pushes transmission below threshold. Blocked ACh release (botulism) causes weakness that does not improve with cholinesterase inhibition this way; dystrophin loss (DMD) is progressive childhood degeneration, and ryanodine hyperactivity causes rigidity and hyperthermia, not fatigable weakness.`
          },
          {
            question: `Botulinum and tetanus toxins both act on neurotransmitter release, yet produce opposite motor pictures because:`,
            options: [`Botulinum blocks inhibitory interneurons while tetanus blocks the neuromuscular junction`, `Both block ACh release, but tetanus acts faster`, `Botulinum blocks ACh release at the NMJ (flaccid paralysis), while tetanus blocks inhibitory glycine/GABA release in the spinal cord (spastic paralysis)`, `Botulinum activates nicotinic receptors while tetanus destroys them`],
            correctAnswer: 2,
            explanation: `Botulinum silences the excitatory NMJ signal — muscles receive nothing and go flaccid. Tetanus toxin removes INHIBITION upstream, so motor neurons fire unchecked and muscles lock in spasm (lockjaw). Choice A assigns each toxin the other's target. Neither toxin acts by receptor activation or destruction, and "same mechanism, different speed" cannot yield opposite phenotypes.`
          },
          {
            question: `Chronic hyperparathyroidism causes net bone loss, yet intermittent low-dose PTH injections are used to TREAT osteoporosis. The best resolution of this paradox is:`,
            options: [`Injected PTH is chemically different and only binds osteoclasts`, `Chronic PTH acts on the kidney, while intermittent PTH acts only on the intestine`, `Bone loss in hyperparathyroidism is caused by calcitonin, not PTH`, `Continuous PTH exposure sustains osteoclast-driven resorption, whereas brief intermittent pulses preferentially stimulate osteoblast bone formation`],
            correctAnswer: 3,
            explanation: `The skeletal response depends on exposure PATTERN: continuous elevation keeps resorption switched on (serum calcium defended at bone's expense), while short pulses favor the anabolic osteoblast response before resorption ramps up. PTH receptors are on osteoblasts either way (choice A is false), the renal and intestinal actions occur in both settings (choice B), and calcitonin OPPOSES resorption rather than causing it.`
          },
          {
            question: `In an isolated-muscle experiment, a drug produces these results: single twitches have normal amplitude, but between closely spaced stimuli the force never returns to baseline, and relaxation after a tetanus takes minutes. The drug most likely inhibits:`,
            options: [`Acetylcholine release at the motor terminal`, `Voltage-gated sodium channels in the sarcolemma`, `The SERCA calcium pump of the sarcoplasmic reticulum`, `The ryanodine receptor calcium-release channel`],
            correctAnswer: 2,
            explanation: `Normal twitch generation shows the entire excitation-release-contraction chain is intact; the selective defect is in RELAXATION, which depends on SERCA pumping calcium back into the SR. Blocking ACh release or sodium channels would abolish or shrink the twitch itself, and blocking ryanodine receptors would prevent calcium release — weak or absent contraction, the opposite finding.`
          }
        ]
      }
    },
    {
      id: 'msk4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Rigor mortis: no ATP → calcium leaks in AND myosin cannot DETACH (ATP binding = release); stiffness resolves only when the machinery degrades
- NMJ lesion map: myasthenia gravis = autoantibodies vs. nicotinic receptors (fatigable weakness, helped by cholinesterase inhibitors); botulinum = no ACh release (flaccid); tetanus toxin = no spinal inhibition (spastic); curare = receptor blockade (flaccid, competitive)
- Malignant hyperthermia = runaway ryanodine-receptor calcium release under anesthetics; DMD = X-linked dystrophin loss shearing the sarcolemma
- Bone endocrinology: estrogen loss → unrestrained osteoclasts → osteoporosis; CHRONIC PTH resorbs bone, INTERMITTENT PTH pulses build it
- Figure strategy: locate the lesion on the chain (neuron → ACh → receptor → AP → T-tubule → DHP → ryanodine → Ca → troponin → cross-bridge → SERCA); upstream steps still work, downstream steps fail
- Relaxation defects (force not returning to baseline) point to SERCA/reuptake; absent contraction points upstream; contraction without stimulation points to spontaneous calcium release`
    }
  ]
};
