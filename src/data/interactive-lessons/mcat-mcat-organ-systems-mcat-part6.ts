export const mcatOrganSysPart6Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os6-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 6 of 7 — Nervous System**

### Organization

- **CNS**: Brain + Spinal cord
- **PNS**: Everything else
  - **Somatic**: Voluntary (skeletal muscle)
  - **Autonomic**: Involuntary
    - **Sympathetic**: Fight-or-flight (increases HR, dilates pupils, inhibits digestion)
    - **Parasympathetic**: Rest-and-digest (decreases HR, constricts pupils, promotes digestion)

### Neuron Structure & the Action Potential (Figure)

The membrane potential trace over time:

| Phase | Channel event | Ion movement | $V_m$ effect |
|---|---|---|---|
| **Resting (~$-70$ mV)** | $Na^{+}/K^{+}$ ATPase + $K^{+}$ leak | 3 $Na^{+}$ out / 2 $K^{+}$ in | Stable, polarized |
| **Threshold (~$-55$ mV)** | Voltage-gated $Na^{+}$ channels open | $Na^{+}$ rushes IN | Rapid rise |
| **Depolarization (→ +30 mV)** | $Na^{+}$ channels fully open | $Na^{+}$ IN | Overshoot positive |
| **Repolarization** | $Na^{+}$ channels inactivate, $K^{+}$ channels open | $K^{+}$ OUT | Falls back |
| **Hyperpolarization** | $K^{+}$ channels slow to close | $K^{+}$ OUT (overshoot) | Below $-70$ mV |

**All-or-none:** once threshold is reached the spike is fixed in amplitude; stimulus strength is encoded by **frequency**, not size. The **Nernst equation** sets each ion's equilibrium potential:

$$E_{ion} = \\frac{61}{z} \\log\\frac{[\\text{ion}]_{out}}{[\\text{ion}]_{in}} \\;\\text{mV}$$

$E_{K} \\approx -90$ mV and $E_{Na} \\approx +60$ mV; resting $V_m$ sits near $E_K$ because the membrane is most permeable to $K^{+}$ at rest.

### Refractory Periods (Why APs Go One Way)

- **Absolute refractory period**: $Na^{+}$ channels inactivated → no new AP regardless of stimulus. Ensures unidirectional propagation and caps maximum firing rate.
- **Relative refractory period**: some $Na^{+}$ channels recovered, but $K^{+}$ efflux makes threshold harder → only a strong stimulus fires.

### Saltatory Conduction

Myelin (Schwann cells in PNS, oligodendrocytes in CNS) insulates axons; APs regenerate only at **nodes of Ranvier**, "jumping" node to node. This speeds conduction ~10–100×. **Multiple sclerosis** demyelinates CNS axons → conduction slows or fails.

### Synaptic Transmission (Flow)

$$\\text{AP reaches terminal} \\to \\text{Ca}^{2+}\\text{ influx} \\to \\text{Vesicle fusion} \\to \\text{NT release} \\to \\text{Binds receptor}$$

- **EPSP** (e.g., glutamate → $Na^{+}$ in) depolarizes; **IPSP** (e.g., GABA → $Cl^{-}$ in / $K^{+}$ out) hyperpolarizes.
- **Summation**: temporal (rapid repeats from one synapse) + spatial (many synapses at once) determine whether threshold is reached at the axon hillock.

### Key Neurotransmitters

- **ACh**: NMJ (excitatory), parasympathetic; degraded by acetylcholinesterase
- **Norepinephrine**: Sympathetic postganglionic
- **Dopamine**: Reward, movement (low in Parkinson's)
- **Serotonin**: Mood, sleep (targeted by SSRIs)
- **GABA**: Main inhibitory NT in brain $(Cl^{-} channels)$
- **Glutamate**: Main excitatory NT in brain`
    },
    {
      id: 'os6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nervous System** 🎯`,
      exercise: {
        questions: [
          {
            question: `Multiple sclerosis destroys myelin sheaths. This would:`,
            options: [`Slow or block action potential conduction (loss of saltatory conduction)`, `Speed up conduction`, `Have no effect on signal transmission`, `Only affect the CNS, not the PNS`],
            correctAnswer: 0,
            explanation: `Myelin insulates axons, enabling saltatory conduction (the AP jumps between nodes of Ranvier). Without myelin, current leaks across the membrane and conduction slows dramatically or fails, causing motor and sensory deficits. Demyelination never speeds conduction (option 2) and MS specifically targets CNS myelin made by oligodendrocytes.`
          },
          {
            question: `A neurotoxin blocks voltage-gated $Na^{+}$ channels (like tetrodotoxin). What is the direct effect on neurons?`,
            options: [`Action potentials cannot fire because depolarization to threshold is blocked`, `Neurons fire continuously because they cannot repolarize`, `Resting potential becomes more negative than $E_K$`, `Only the relative refractory period is affected`],
            correctAnswer: 0,
            explanation: `The rising phase of the AP depends on voltage-gated $Na^{+}$ influx. Block those channels and the membrane cannot depolarize to +30 mV, so no AP fires → paralysis. Option 2 describes a channel that fails to inactivate (the opposite). Resting potential is set mainly by $K^{+}$ leak, not these channels (option 3), and the entire spike — not just the relative refractory period — is abolished.`
          },
          {
            question: `An inhibitory interneuron releases GABA onto a postsynaptic cell, opening $Cl^{-}$ channels. How does this make the postsynaptic neuron less likely to fire?`,
            options: [`$Cl^{-}$ influx hyperpolarizes the cell (IPSP), moving $V_m$ further from threshold`, `$Cl^{-}$ efflux depolarizes the cell toward threshold`, `It triggers $Ca^{2+}$ influx and immediate vesicle release`, `It permanently inactivates the $Na^{+}/K^{+}$ ATPase`],
            correctAnswer: 0,
            explanation: `Opening $Cl^{-}$ channels drives $Cl^{-}$ into the neuron (its equilibrium is near/below rest), hyperpolarizing the membrane — an inhibitory postsynaptic potential (IPSP). This moves $V_m$ away from the $-55$ mV threshold, so more excitatory input is needed to fire. $Cl^{-}$ enters (not exits) and the effect is inhibitory, ruling out options 2–4.`
          }
        ]
      }
    },
    {
      id: 'os6-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Neurophysiology

<details>
<summary><b>Example 1: Compute an equilibrium potential with the Nernst equation</b></summary>

**Question:** Extracellular [$K^{+}$] = 5 mM, intracellular [$K^{+}$] = 140 mM, at body temperature. Estimate $E_K$.

**Solution:**
$$E_K = \\frac{61}{+1}\\log\\frac{[K^+]_{out}}{[K^+]_{in}} = 61\\log\\frac{5}{140} = 61\\log(0.0357)$$
$$= 61 \\times (-1.45) \\approx \\textbf{-88 mV} \\;✓$$

**MCAT note:** Resting $V_m$ (~$-70$ mV) sits close to $E_K$ because the membrane is most $K^{+}$-permeable at rest. **Hyperkalemia** (raised external $K^{+}$) makes $E_K$ less negative → resting cells partially depolarize → dangerous cardiac arrhythmias.
</details>

<details>
<summary><b>Example 2: Predict the effect of an acetylcholinesterase inhibitor</b></summary>

**Question:** An organophosphate pesticide inhibits acetylcholinesterase at the neuromuscular junction. Predict the effect on muscle.

**Solution:**
1. Acetylcholinesterase normally clears ACh from the synapse.
2. Inhibit it → ACh accumulates → receptors are continuously activated → **sustained depolarization**.
3. The motor end plate cannot repolarize/reset → **depolarizing block** → muscle fasciculations then paralysis. ✓

**Interpretation:** Too much "go" signal is as paralyzing as too little — the channels stay inactivated. This is why nerve-agent poisoning causes the "SLUDGE" cholinergic crisis plus respiratory muscle failure.
</details>

<details>
<summary><b>Example 3: Reason about synaptic summation</b></summary>

**Question:** A neuron has threshold at $-55$ mV and rests at $-70$ mV. A single EPSP depolarizes it by +8 mV; a single IPSP hyperpolarizes by $-5$ mV. If two EPSPs and one IPSP arrive nearly simultaneously, does the neuron fire?

**Solution:**
1. Net change = $2(+8) + 1(-5) = +16 - 5 = +11$ mV.
2. New $V_m = -70 + 11 = -59$ mV. ✓
3. $-59$ mV has NOT reached the $-55$ mV threshold → **no action potential**.

**High-yield connection:** This is **spatial summation** at the axon hillock — the neuron integrates excitatory and inhibitory inputs. One more EPSP (+8) would push it to $-51$ mV and trigger a spike. Stimulus strength is then coded by firing FREQUENCY, not spike size.
</details>`
    },
    {
      id: 'os6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Sympathetic: fight-or-flight. Parasympathetic: rest-and-digest.
- Action potential: resting → depolarization (Na$^+$ in) → repolarization (K$^+$ out); all-or-none, frequency-coded
- Resting $V_m$ sits near $E_K$ (~$-90$ mV by Nernst); refractory periods enforce one-way propagation
- Myelin enables saltatory conduction (faster signaling); MS demyelinates CNS axons
- Synapse: $Ca^{2+}$ influx → vesicle fusion → NT release; EPSP/IPSP summation decides firing`
    }
  ]
};
