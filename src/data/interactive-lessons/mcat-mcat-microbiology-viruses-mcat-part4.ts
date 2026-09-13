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
| **Viroid** | Naked circular RNA, ~300 nt, NO protein coat, encodes NOTHING | Copied by host RNA polymerase; pathogenic via RNA structure/silencing effects | Plant diseases (potato spindle tuber) |
| **Prion** | Misfolded PROTEIN only — no nucleic acid at all | PrP-Sc template converts normal alpha-helical PrP-C into beta-sheet-rich PrP-Sc: a conformational chain reaction | Creutzfeldt-Jakob, kuru, BSE; spongiform encephalopathies |
| Defective/satellite viruses | Genome lacking essential genes | Replicate only with a **helper virus** co-infecting (hepatitis D needs hepatitis B's surface antigen) | Hepatitis D |

Prions violate every nucleic-acid expectation: no genome to mutate, **no UV or nuclease sensitivity**, extreme resistance to heat and standard autoclaving, no immune response (PrP is a self protein), and inheritance of SHAPE rather than sequence. Protease resistance of the beta-sheet aggregate is the standard lab signature.

### Host Defenses & Viral Countermoves (Rapid Tour)

Infected cells secrete **interferons**, warning neighbors to degrade RNA and slow translation; **cytotoxic T cells** kill cells displaying viral peptides on MHC I; **antibodies** neutralize free virions. Viruses answer with latency (Part 3), antigenic variation (above), and MHC downregulation — which exposes them to **natural killer cells** (the missing-self backup). This arms race is a standing MCAT crossover with immunology.

### The Capstone Habit

Any virus question yields to four sorted facts: **(1)** genome class → route to mRNA → what the virion must carry; **(2)** enveloped or naked → transmission and stability; **(3)** persistence mode → prophage/provirus/episome → curability; **(4)** mutation engine → proofreading-free polymerase, segments or not → drift/shift/therapy strategy. Practice stating all four for HIV, influenza, herpes, and polio — those four organisms span the entire logical space.`
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
            explanation: `Drift erodes immunity gradually — most people retain partial protection, so outbreaks stay seasonal. Shift swaps in a wholly novel HA (or NA) segment from another host lineage in one step via reassortment; essentially nobody has even partial immunity, and the virus sweeps globally. Segmentation is the structural prerequisite.`
          },
          {
            question: `An infectious agent from brain tissue transmits disease after treatment with UV light, nucleases, and formaldehyde, but loses infectivity after harsh protein denaturation. The agent is most likely:`,
            options: [`A retrovirus`, `A viroid`, `A prion`, `A DNA virus`],
            correctAnswer: 2,
            explanation: `Resistance to UV and nucleases means no essential nucleic acid — that excludes every virus and viroid. Sensitivity to protein denaturation identifies the infectious moiety as protein: a prion, propagating by templated misfolding of PrP-C into protease-resistant PrP-Sc.`
          },
          {
            question: `Hepatitis D virus causes disease only in patients simultaneously or previously infected with hepatitis B, because HDV:`,
            options: [`Needs HBV surface antigen to envelop its particles`, `Can only enter hepatocytes already damaged by HBV`, `Uses HBV's reverse transcriptase to copy its genome`, `Is a prion whose misfolding is triggered by HBV`],
            correctAnswer: 0,
            explanation: `HDV's tiny RNA genome encodes no envelope protein of its own; it parasitizes HBV's surface antigen (HBsAg) to build infectious particles — a satellite/defective agent needing a helper virus. Consequently, HBV vaccination also prevents hepatitis D.`
          },
          {
            question: `A live attenuated viral vaccine is contraindicated in a severely immunocompromised patient primarily because:`,
            options: [`Attenuated strains contain endotoxin that triggers shock`, `The vaccine cannot stimulate any immune response in such patients`, `Inactivated vaccines are always more immunogenic`, `The attenuated virus still replicates and can disseminate`],
            correctAnswer: 3,
            explanation: `Attenuation reduces, but does not eliminate, replication; safety depends on the host winning an easy fight. With T-cell immunity absent, the attenuated strain can replicate unchecked (and potentially revert). Killed or subunit vaccines, which cannot replicate, are the safe substitutes — though responses may be weaker.`
          },
          {
            question: `Several herpesviruses downregulate MHC class I on the cells they infect. The host's compensating defense is:`,
            options: [`Increased antibody production against free virions`, `Natural killer cells, which kill cells low in MHC I`, `Interferon-induced MHC II display to CD8 T cells`, `Complement-mediated lysis of the latent episome`],
            correctAnswer: 1,
            explanation: `Hiding peptides from cytotoxic T cells (which need MHC I) is a classic viral evasion — but NK cells are tuned oppositely: inhibitory receptors read normal MHC I as 'self,' so its ABSENCE ('missing self') releases NK killing. The paired surveillance closes the loophole. MHC II presents to CD4 helper cells, not CD8 cells, and complement cannot attack intracellular DNA.`
          }
        ]
      }
    },
    {
      id: 'vir4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Drift = gradual point mutations (epidemics, annual vaccines); shift = segment reassortment, novel antigen (pandemics); shift needs a segmented genome
- Vaccines: live attenuated (strong, replicates — avoid in immunocompromised), killed (safe, weaker), subunit (target the attachment protein), mRNA (deliver the message)
- Viroid = naked noncoding circular RNA (plants); prion = protein-only conformational replicator (UV/nuclease-resistant, protease-resistant PrP-Sc); HDV = satellite needing HBV's HBsAg
- Defense stack: interferon (warn), CTL via MHC I (kill infected), antibody (neutralize free), NK cells (missing self backup when viruses hide MHC I)
- Capstone sort for any virus: genome → mRNA route; envelope → transmission; persistence mode → curability; polymerase fidelity + segments → evolution and therapy`
    },
    {
      id: 'vir4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integration Passages

<details>
<summary><b>Example 1: Prove protein-only inheritance</b></summary>

**Question:** Design the two key experiments that distinguish a prion from a slow conventional virus, and state the expected results for each hypothesis.

**Solution:**
1. **Radiation/nuclease attack:** UV and nucleases destroy nucleic acid function. Virus: infectivity falls sharply. Prion: infectivity unchanged (observed result for scrapie — an early anomaly).
2. **Genetic specificity test:** infectious material's properties should track the HOST's PrP gene, not an agent genome. Mice lacking PrP-C entirely (PrP knockout) are COMPLETELY resistant and cannot propagate the agent — no substrate, no conversion. A virus would still replicate in knockout mice.
3. Together: the information is conformational, templated onto a host-encoded protein.

**MCAT Strategy:** The knockout-resistance result is the single most decisive fact; expect passages to present it and ask what it implies.
</details>

<details>
<summary><b>Example 2: Choose the vaccine antigen rationally</b></summary>

**Question:** A (+)RNA respiratory virus enters cells when its spike protein binds a host receptor; a nucleocapsid protein is highly abundant and strongly antigenic but internal. Which protein belongs in a subunit vaccine, and why do anti-nucleocapsid antibodies fail to protect?

**Solution:**
1. Antibody protection against infection requires NEUTRALIZATION — physically blocking attachment or fusion. Only the SPIKE is exposed on the virion surface and mediates entry.
2. Anti-nucleocapsid antibodies bind a protein hidden inside the particle: they cannot prevent entry (they may still serve as an infection marker, and internal antigens matter for T-cell responses).
3. Choose the spike; ideally its receptor-binding domain, the region where binding antibodies most directly block the attachment step (Part 1's cycle logic).

**MCAT Strategy:** Map every proposed antigen onto the life-cycle step its antibody could physically interrupt; abundance and antigenicity without accessibility protect nothing.
</details>

<details>
<summary><b>Example 3: Run the four-fact capstone on two viruses</b></summary>

**Question:** Apply the capstone sort (genome, envelope, persistence, evolution engine) to polio and HIV, and derive one clinical consequence from each fact.

**Solution:**
1. **Polio:** (+)ssRNA, naked, no persistence mechanism, drift-only. Consequences: genome alone is infectious (lab safety); fecal-oral spread and surface stability (sanitation matters); complete clearance possible (eradication is feasible); antigenically stable enough for a fixed vaccine.
2. **HIV:** (+)ssRNA retrovirus (RT + integrase), enveloped, provirus persistence, hypermutable RT. Consequences: unique enzymes = drug targets; fragile envelope = no casual-contact transmission; integrated reservoir = suppressible but not yet curable; quasispecies = combination therapy and no vaccine so far.
3. Same nucleic acid class, almost opposite clinical realities — the downstream facts, not the genome label, carry the medicine.

**MCAT Strategy:** This paired contrast is worth rehearsing verbatim; passages that seem novel are usually one of these four axes wearing a costume.
</details>`
    }
  ]
};
