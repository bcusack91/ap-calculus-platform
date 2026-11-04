export const mcatVirusesPart4Data = {
  topicSlug: 'mcat-microbiology-viruses-mcat',
  sections: [
    {
      id: 'vir4-intro',
      type: 'text' as const,
      content: `# Viruses

**Part 4 of 4 — Viral Evolution, Subviral Agents & MCAT Integration**

### Drift, Shift, and Vaccine Logic

- **Antigenic drift:** the steady accumulation of point mutations in surface antigens (sloppy RdRp, Part 3). Antibodies from last year bind a little worse each season → annual influenza vaccine reformulation; epidemics.
- **Antigenic shift:** abrupt appearance of a novel surface protein via **reassortment** of segmented genomes in a co-infected host (classically pig cells co-infected with human and avian influenza — the 'mixing vessel'). No pre-existing population immunity → pandemics. Shift requires segments; non-segmented viruses can only drift and recombine.
- Vaccine platforms map onto virology: **live attenuated** (replicates weakly; strong, broad immunity including mucosal; risky in immunocompromised patients), **inactivated/killed** (safe, weaker, boosters needed), **subunit** (one purified antigen — choose the protein whose neutralization blocks attachment), and **mRNA** (host cells translate the delivered (+)-sense message into antigen — the same trick a (+)RNA virus plays on the ribosome).

### Smaller Than Viruses

| Agent | Composition | Replication logic | Disease examples |
|-------|-------------|-------------------|------------------|
| **Viroid** | Small naked circular RNA, NO protein coat, encodes NOTHING | Copied by host RNA polymerase; pathogenic via RNA structure/silencing effects | Plant diseases |
| **Prion** | Misfolded PROTEIN only — no nucleic acid at all | PrP-Sc template converts normal alpha-helical PrP-C into beta-sheet-rich PrP-Sc: a conformational chain reaction | Creutzfeldt-Jakob, kuru, BSE; spongiform encephalopathies |
| Defective/satellite viruses | Genome lacking essential genes | Replicate only with a **helper virus** co-infecting (hepatitis D needs hepatitis B's surface antigen) | Hepatitis D |

<!-- yield:low -->
- Viroid specifics: genomes of only ~250-400 nucleotides; the classic example is potato spindle tuber viroid.
<!-- /yield -->

Prions violate every nucleic-acid expectation: no genome to mutate, **no UV or nuclease sensitivity**, extreme resistance to heat and standard autoclaving, no immune response (PrP is a self protein), and inheritance of SHAPE rather than sequence. Protease resistance of the beta-sheet aggregate is the standard lab signature.

### Host Defenses & Viral Countermoves (Rapid Tour)

Infected cells secrete **interferons**, warning neighbors to degrade RNA and slow translation; **cytotoxic T cells** kill cells displaying viral peptides on MHC I; **antibodies** neutralize free virions. Viruses answer with latency (Part 3), antigenic variation (above), and MHC downregulation — which exposes them to **natural killer cells** (the missing-self backup). This arms race is a standing MCAT crossover with immunology.

### The Capstone Habit

Any virus question yields to four sorted facts: **(1)** genome class → route to mRNA → what the virion must carry; **(2)** enveloped or naked → transmission and stability; **(3)** persistence mode → prophage/provirus/episome → curability; **(4)** mutation engine → proofreading-free polymerase, segments or not → drift/shift/therapy strategy. Practice stating all four for HIV, influenza, herpes, and polio — those four organisms span the entire logical space.`
    },
    {
      id: 'vir4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Passages

**Problem 1.** An infectious agent from brain tissue causes a slow spongiform disease. Two hypotheses compete: a prion, or a slow conventional virus.

- **(a)** How should UV light and nucleases affect infectivity under each hypothesis?
- **(b)** How should mice lacking PrP-C (PrP knockouts) respond under each hypothesis?
- **(c)** What do the two results together imply?

**(a) Radiation and nuclease attack.** UV and nucleases destroy nucleic acid function. Virus: infectivity falls sharply. Prion: infectivity is unchanged, the result actually observed for scrapie (an early anomaly).

**(b) The knockout test.** Prion: knockout mice are COMPLETELY resistant and cannot propagate the agent (no substrate, no conversion). Virus: it would still replicate in them, since its properties track its own genome rather than the host's PrP gene.

**(c) The conclusion.** The information is conformational, templated onto a host-encoded protein. The knockout-resistance result is the single most decisive fact; expect passages to present it and ask what it implies.

**Problem 2.** Polio vs HIV. Apply the four-fact capstone sort (genome, envelope, persistence, evolution engine) to both viruses, deriving a clinical consequence of each fact for each virus.

- **(a)** What genome class does each carry, and what follows?
- **(b)** Is each enveloped, and what does that mean for transmission?
- **(c)** How does each persist, and what does that mean for cure?
- **(d)** What drives each one's evolution, and what follows for vaccines and therapy?

**(a) Genome.** Both are (+)ssRNA. Polio's genome alone is infectious (lab safety). HIV is a retrovirus carrying RT and integrase, unique enzymes that are drug targets.

**(b) Envelope.** Polio is naked: fecal-oral spread and surface stability mean sanitation matters. HIV is enveloped and fragile, so there is no casual-contact transmission.

**(c) Persistence.** Polio has no persistence mechanism, so complete clearance is possible and eradication is feasible. HIV's integrated provirus reservoir is suppressible but not yet curable.

**(d) Evolution engine.** Polio drifts only (no segments) and is antigenically stable enough for a fixed vaccine. HIV's hypermutable RT creates quasispecies, so combination therapy is required and no vaccine exists so far. Same nucleic acid class, almost opposite clinical realities.

**Problem 3.** A (+)RNA respiratory virus enters cells when its spike protein binds a host receptor. Its nucleocapsid protein is highly abundant and strongly antigenic but sits inside the particle.

- **(a)** What must an antibody do to protect against infection?
- **(b)** Would antibodies against the nucleocapsid protein protect, and why?
- **(c)** Which protein, and which region of it, belongs in a subunit vaccine?

**(a) Neutralization.** Antibody protection against infection requires NEUTRALIZATION: physically blocking attachment or fusion.

**(b) The nucleocapsid.** No. It is hidden inside the particle, so antibodies against it cannot prevent entry (they may still mark infection, and internal antigens matter for T-cell responses).

**(c) The spike.** Only the SPIKE is exposed on the surface and mediates entry; ideally use its receptor-binding domain, where bound antibody most directly blocks attachment (Part 1's cycle logic). Abundance and antigenicity without accessibility protect nothing.`
    },
    {
      id: 'vir4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evolution, Prions & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Influenza pandemics (as opposed to seasonal epidemics) arise from antigenic shift because shift:`,
            options: [`Accumulates point mutations far faster than drift does`, `Introduces a novel HA or NA by segment reassortment`, `Occurs in non-segmented viruses by RNA recombination`, `Increases the virus's replication rate in host airways`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Drift erodes immunity gradually — most people retain partial protection, so outbreaks stay seasonal. Shift swaps in a wholly novel HA (or NA) segment from another host lineage in one step via reassortment; essentially nobody has even partial immunity, and the virus sweeps globally. Segmentation is the structural prerequisite.`
          },
          {
            question: `Brain homogenate from an animal with a spongiform encephalopathy is injected into normal mice and into mice lacking the PrP gene. Only the normal mice develop disease, and only their brains accumulate new infectious agent. This result best supports which conclusion?`,
            options: [`Loss of normal PrP-C function is what causes the disease`, `The agent replicates its own nucleic acid in neurons`, `Propagation requires host-made PrP-C`, `Knockout-mouse proteases destroy the injected PrP-Sc`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A prion has no genome; it propagates by templating the host's own PrP-C into PrP-Sc, so mice that make no PrP-C give it nothing to convert. If losing PrP-C function caused the disease, the knockout mice, which have no PrP-C at all, would be sick, yet they stay healthy. An agent copying its own nucleic acid would not depend on the host's PrP gene and should replicate in knockouts too. PrP-Sc is protease-resistant, so destruction by proteases cannot explain the resistance; the missing substrate does.`
          },
          {
            question: `Hepatitis D virus causes disease only in patients simultaneously or previously infected with hepatitis B, because HDV:`,
            options: [`Needs HBV surface antigen for its envelope`, `Can only enter hepatocytes already damaged by HBV`, `Uses HBV's reverse transcriptase to copy its genome`, `Is a prion whose misfolding is triggered by HBV`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `HDV's tiny RNA genome encodes no envelope protein of its own; it parasitizes HBV's surface antigen (HBsAg) to build infectious particles — a satellite/defective agent needing a helper virus. Consequently, HBV vaccination also prevents hepatitis D.`
          },
          {
            question: `A live attenuated viral vaccine is contraindicated in a severely immunocompromised patient primarily because:`,
            options: [`Attenuated strains contain endotoxin that triggers shock`, `The vaccine cannot stimulate any immune response in such patients`, `Inactivated vaccines are always more immunogenic`, `The attenuated virus still replicates and can disseminate`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Attenuation reduces, but does not eliminate, replication; safety depends on the host winning an easy fight. With T-cell immunity absent, the attenuated strain can replicate unchecked (and potentially revert). Killed or subunit vaccines, which cannot replicate, are the safe substitutes — though responses may be weaker.`
          },
          {
            question: `Several herpesviruses downregulate MHC class I on the cells they infect. The host's compensating defense is:`,
            options: [`Increased antibody production against free virions`, `Natural killer cells, which kill cells low in MHC I`, `Interferon-induced MHC II display to CD8 T cells`, `Complement-mediated lysis of the latent episome`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Hiding peptides from cytotoxic T cells (which need MHC I) is a classic viral evasion — but NK cells are tuned oppositely: inhibitory receptors read normal MHC I as 'self,' so its ABSENCE ('missing self') releases NK killing. The paired surveillance closes the loophole. MHC II presents to CD4 helper cells, not CD8 cells, and complement cannot attack intracellular DNA.`
          }
        ]
      }
    },
    {
      id: 'vir4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Drift vs shift.** Drift is gradual point mutation (epidemics, yearly vaccines); shift is segment reassortment (pandemics).
- **Vaccine platforms.** Live attenuated: strong but replicates; killed: safe, weaker; subunit: attachment protein; mRNA: cells make antigen.
- **Subviral agents.** Viroids are naked noncoding RNA; prions are misfolded protein only; HDV needs HBV's surface antigen.
- **Defense stack.** Interferon warns, CTLs kill via MHC I, antibodies neutralize, and NK cells kill cells that hide MHC I.

**Common traps**

- **Shift without segments.** Non-segmented viruses can only drift and recombine; antigenic shift requires a segmented genome.
- **Live vaccines for everyone.** An attenuated virus still replicates and can disseminate in a severely immunocompromised patient.
- **Prions as tiny viruses.** With no nucleic acid, prions stay infectious after UV and nucleases; only harsh protein denaturation destroys infectivity.
- **Abundant antigen, best vaccine.** An internal protein cannot neutralize, however antigenic; only exposed entry proteins block attachment.

<!-- yield:low -->
**Low-yield extras**

- Viroid genomes are only ~250-400 nucleotides, and potato spindle tuber viroid is the classic example
<!-- /yield -->`
    }
  ]
};
