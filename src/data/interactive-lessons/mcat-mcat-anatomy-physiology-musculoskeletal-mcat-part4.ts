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
| Myasthenia gravis | AUTOANTIBODIES against nicotinic ACh receptors (type II hypersensitivity) | Weakness that WORSENS with use — repeated firing depletes ACh while fewer receptors remain to catch it; classically droopy eyelids, improves with acetylcholinesterase inhibitors |
| Botulinum toxin | Blocks ACh RELEASE from the motor neuron | FLACCID paralysis — no signal reaches the muscle at all |
| Tetanus toxin | Blocks release of INHIBITORY neurotransmitters (glycine/GABA) in the spinal cord | SPASTIC paralysis — motor neurons fire unchecked (lockjaw); note the contrast: botulinum silences, tetanus disinhibits |
| Curare / nicotinic blockers | Competitively block the nicotinic receptor | Flaccid paralysis; overcome by raising ACh (acetylcholinesterase inhibitors) |

### Deeper Muscle Pathology (concept level)

- **Malignant hyperthermia**: an inherited hyperactive **ryanodine receptor**; certain anesthetics trigger massive SR calcium release → sustained contraction, runaway ATP consumption, and dangerous heat production. Treated by blocking the ryanodine receptor.
- **Duchenne muscular dystrophy (DMD)**: X-linked loss of **dystrophin**, the protein anchoring the sarcomere lattice to the sarcolemma; contraction shears the unanchored membrane, fibers die and are replaced by fat and fibrous tissue → progressive weakness in boys.

<!-- yield:low -->
- The ryanodine-receptor blocker used to treat malignant hyperthermia is **dantrolene**.
<!-- /yield -->

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

**Problem 1.** An isolated frog skeletal muscle with intact nerve sits on a force transducer; at baseline, single twitches and 50 Hz tetanus both relax fully. It is then perfused with Drug X, a selective SERCA inhibitor, and the protocol is repeated.

- **(a)** The first twitch after Drug X has near-normal amplitude. Why?
- **(b)** Force now fails to return to baseline between stimuli, and after a brief train the muscle stays partially contracted for minutes. Why?
- **(c)** What happens to twitch amplitude over a LONG stimulus train with Drug X?

**(a) A normal first twitch.** Everything upstream of SERCA is intact: ACh release, end-plate potential, action potential, DHP-ryanodine coupling, and SR calcium release all proceed, and the SR still holds its pre-drug calcium load. Only reuptake is blocked.

**(b) Failure to relax.** Relaxation requires cytosolic calcium removal by SERCA. With the pump blocked, calcium lingers, troponin stays occupied, tropomyosin stays displaced, and cross-bridges keep cycling: a contracture. "Contraction is active, relaxation is passive" is false; relaxation costs ATP.

**(c) A long train.** Amplitude declines. Calcium that cannot return to the SR is slowly extruded from the cell or buffered, so the SR store empties and each ryanodine-mediated release is smaller. Early: sustained force from cytosolic calcium; late: a shrinking releasable pool.

**Problem 2.** The same preparation is tested with Drug Y, which blocks nicotinic receptors (curare-like), and with Drug Z, which locks ryanodine receptors open (malignant-hyperthermia-like).

- **(a)** What does nerve stimulation produce with Drug Y?
- **(b)** Would DIRECT electrical stimulation of the muscle membrane still work with Drug Y?
- **(c)** What does Drug Z do to the muscle without any nerve input?
- **(d)** Drug X and Drug Z both end in a rigid muscle. How do they differ?

**(a) Drug Y, via the nerve.** Drug Y acts at the nicotinic receptor: no end-plate potential, no AP, no calcium release. The preparation is flaccid, with zero force.

**(b) Drug Y, direct stimulation.** Yes. Stimulating the muscle membrane directly bypasses the blocked receptor, so the AP, calcium release and contraction still occur.

**(c) Drug Z.** It floods the cytosol with SR calcium independent of stimulation: sustained contracture WITHOUT nerve input, plus heavy ATP consumption (cycling cross-bridges and futile pumping) that generates heat.

**(d) X vs. Z.** Same rigid endpoint, but Drug X requires stimulation to start whereas Drug Z self-triggers. Locate the lesion on the chain and the phenotypes separate cleanly.`
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
            yield: 'HIGH',
            explanation: `ATP BINDING is what releases myosin from actin; with no ATP, cross-bridges lock in the attached state, stiffening muscles. Blaming a failure to cock the heads misses that leaked calcium plus already-cocked heads allow attachment before ATP runs out entirely — attachment happens, release cannot. Protease degradation is what eventually RESOLVES rigor days later, and power strokes cannot repeat without detachment/re-cocking, so muscles stiffen rather than shorten.`
          },
          {
            question: `A patient has drooping eyelids and muscle weakness that worsens over the day and with repeated activity, improving with rest and with acetylcholinesterase-inhibitor treatment. The underlying mechanism is most likely:`,
            options: [`Autoantibodies against end-plate acetylcholine receptors`, `A toxin blocking acetylcholine release from motor nerves`, `Loss of dystrophin anchoring the muscle cytoskeleton`, `Hyperactive ryanodine receptors leaking excess calcium`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Use-dependent weakness that responds to boosting synaptic ACh is myasthenia gravis: with fewer functional receptors (an antibody-mediated, type II hypersensitivity attack), the safety margin of transmission is thin, and normal ACh rundown during repeated firing pushes transmission below threshold. Blocked ACh release (botulism) causes weakness that does not improve with cholinesterase inhibition this way; dystrophin loss (DMD) is progressive childhood degeneration, and ryanodine hyperactivity causes rigidity and hyperthermia, not fatigable weakness.`
          },
          {
            question: `Botulinum and tetanus toxins both act on neurotransmitter release, yet produce opposite motor pictures because:`,
            options: [`Botulinum acts on spinal interneurons, whereas tetanus acts at the end plate`, `Both block ACh release at the neuromuscular junction, but tetanus acts faster`, `Botulinum blocks the neuromuscular junction while tetanus blocks inhibitory interneurons`, `Botulinum activates nicotinic receptors at the junction while tetanus destroys them`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Botulinum blocks ACh release at the NMJ, silencing the excitatory signal — muscles receive nothing and go flaccid. Tetanus toxin blocks glycine/GABA release from spinal inhibitory interneurons, removing INHIBITION upstream, so motor neurons fire unchecked and muscles lock in spasm (lockjaw). Swapping the two toxins' targets would swap the phenotypes. Neither toxin acts by receptor activation or destruction, and "same mechanism, different speed" cannot yield opposite phenotypes.`
          },
          {
            question: `Chronic hyperparathyroidism causes net bone loss, yet intermittent low-dose PTH injections are used to TREAT osteoporosis. The best resolution of this paradox is:`,
            options: [`Injected PTH is a chemically different form that binds only osteoclasts`, `Chronic PTH acts on the kidney, while intermittent PTH acts only on the intestine`, `Bone loss in hyperparathyroidism is really caused by calcitonin, not PTH`, `Continuous PTH sustains resorption, while brief pulses favor bone formation`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The skeletal response depends on exposure PATTERN: continuous elevation keeps osteoclast-driven resorption switched on (serum calcium defended at bone's expense), while short pulses favor the anabolic osteoblast response before resorption ramps up. PTH receptors are on osteoblasts either way, so an osteoclast-only injected form is false; the renal and intestinal actions occur in both settings, so a kidney-versus-intestine split fails; and calcitonin OPPOSES resorption rather than causing it.`
          },
          {
            question: `Compared with a motor unit in the quadriceps, a motor unit in a hand muscle that controls precise finger movements has:`,
            options: [`Larger individual fibers, so each unit's twitch is stronger and steadier`, `Only fast glycolytic fibers, so its force can be changed very quickly`, `Several motor neurons per fiber, so each fiber's force is finely graded`, `Fewer fibers, so recruiting it raises force only slightly`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A motor unit is one motor neuron plus every fiber it innervates. Precision muscles have small units, so recruiting one more adds only a small force increment and force can be graded finely; power muscles like the quadriceps have huge units that add large increments. Fiber size is not what grades force finely; the number of fibers per unit is, and larger, stronger twitches would make each step coarser, not finer. Small units are typically slow, fatigue-resistant fibers rather than fast glycolytic ones, and each skeletal fiber is innervated by a single motor neuron.`
          }
        ]
      }
    },
    {
      id: 'msk4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Rigor mortis.** With no ATP, leaked calcium lets cross-bridges form and myosin cannot detach, so muscles lock stiff.
- **NMJ lesion map.** Myasthenia: receptor antibodies; botulinum: no ACh release; curare: receptor block; tetanus toxin: no spinal inhibition.
- **PTH timing.** Chronically high PTH resorbs bone; brief intermittent PTH pulses build it and treat osteoporosis.
- **Lesion on the chain.** Place the defect on neuron → ACh → receptor → AP → DHP → ryanodine → Ca → SERCA; upstream works, downstream fails.

**Common traps**

- **MH as a fever.** Malignant hyperthermia is runaway RyR calcium release; its heat comes from ATP-burning contracture, not a hypothalamic set point.
- **Swapping the toxins.** Botulinum silences the NMJ (flaccid); tetanus toxin removes spinal inhibition (spastic).
- **Myasthenia as release failure.** Myasthenia attacks nicotinic receptors, not ACh release; weakness worsens with use and eases with AChE inhibitors.
- **Misplacing a contracture.** Force that will not relax points to SERCA; force without any stimulation points to leaky ryanodine receptors.

<!-- yield:low -->
**Low-yield extras**

- Dantrolene is the ryanodine-receptor blocker used for malignant hyperthermia
<!-- /yield -->`
    }
  ]
};
