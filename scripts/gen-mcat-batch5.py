#!/usr/bin/env python3
"""Generate MCAT Batch 5: Genetics & Evolution (7), Anatomy & Physiology (7), Microbiology (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# GENETICS & EVOLUTION (7 parts)
###############################################################################

def gen_genetics():
    parts = {}
    parts[1] = r"""export const mcatGeneticsPart1Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge1-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 1 of 7 — Mendelian Genetics**

### Mendel's Laws

1. **Law of Segregation**: Two alleles for each gene separate during gamete formation
2. **Law of Independent Assortment**: Genes on different chromosomes sort independently

### Key Terminology

| Term | Definition |
|------|-----------|
| Genotype | Genetic makeup (e.g., Aa) |
| Phenotype | Physical expression |
| Homozygous | Same alleles (AA or aa) |
| Heterozygous | Different alleles (Aa) |
| Dominant | Expressed in heterozygote |
| Recessive | Only expressed when homozygous |

### Cross Types

**Monohybrid cross** (Aa $\\times$ Aa):
- Genotype ratio: 1 AA : 2 Aa : 1 aa
- Phenotype ratio: 3 dominant : 1 recessive

**Test cross**: Cross unknown genotype with homozygous recessive (aa)
- If all offspring dominant → parent was AA
- If 50% dominant, 50% recessive → parent was Aa

### MCAT Punnett Square Strategy

Always set up the cross systematically. For dihybrid crosses (AaBb $\\times$ AaBb), use the 4$\\times$4 Punnett square or the shortcut:
$$\\text{9 A_B_} : \\text{3 A_bb} : \\text{3 aaB_} : \\text{1 aabb}$$`
    },
    {
      id: 'ge1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mendelian Genetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a cross between two heterozygous parents (Aa $\\times$ Aa), what fraction of offspring are EXPECTED to be heterozygous?',
            options: ['1/2 (50%)', '1/4 (25%)', '3/4 (75%)', '1/3 (33%)'],
            correctAnswer: 0,
            explanation: 'Aa $\\times$ Aa → 1 AA : 2 Aa : 1 aa. Heterozygous (Aa) = 2/4 = 1/2. A common MCAT trap: 3/4 is the phenotype ratio (dominant), not the genotype ratio for heterozygotes.'
          },
          {
            question: 'A test cross reveals half the offspring are recessive. The tested parent must be:',
            options: ['Heterozygous (Aa)', 'Homozygous dominant (AA)', 'Homozygous recessive (aa)', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Test cross = unknown $\\times$ aa. If Aa $\\times$ aa → 1/2 Aa (dominant) : 1/2 aa (recessive). If AA $\\times$ aa → all Aa (all dominant). Since half are recessive, the parent is Aa.'
          }
        ]
      }
    },
    {
      id: 'ge1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Mendelian ratios: Monohybrid 3:1, Dihybrid 9:3:3:1
- Test cross with homozygous recessive reveals unknown genotype
- Law of Segregation: alleles separate. Independent Assortment: genes on different chromosomes sort independently
- The 3:1 ratio is PHENOTYPIC; genotypic ratio is 1:2:1`
    }
  ]
};
"""

    parts[2] = r"""export const mcatGeneticsPart2Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge2-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 2 of 7 — Non-Mendelian Inheritance**

### Extensions to Mendel

| Pattern | Description | Example |
|---------|-------------|---------|
| **Incomplete dominance** | Heterozygote = intermediate phenotype | Red $\\times$ White → Pink flowers |
| **Codominance** | Both alleles fully expressed | Blood type AB (both A and B antigens) |
| **Multiple alleles** | >2 alleles exist in population | ABO blood type ($I^A$, $I^B$, i) |
| **Pleiotropy** | One gene → multiple phenotypic effects | Sickle cell anemia |
| **Epistasis** | One gene masks another gene's expression | Coat color in labs |
| **Polygenic** | Multiple genes → one trait | Height, skin color |

### ABO Blood Type (MCAT FAVORITE)

| Genotype | Blood Type | Antigens | Antibodies |
|----------|-----------|----------|-----------|
| $I^AI^A$ or $I^Ai$ | A | A antigen | Anti-B |
| $I^BI^B$ or $I^Bi$ | B | B antigen | Anti-A |
| $I^AI^B$ | AB | Both A and B | Neither |
| ii | O | Neither | Anti-A and Anti-B |

- $I^A$ and $I^B$ are **codominant** to each other
- Both are **dominant** over i
- Type O = universal donor (no antigens)
- Type AB = universal recipient (no antibodies)`
    },
    {
      id: 'ge2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Mendelian** 🎯',
      exercise: {
        questions: [
          {
            question: 'A mother with blood type A (genotype $I^Ai$) and a father with blood type B (genotype $I^Bi$) can have children with which blood types?',
            options: ['A, B, AB, or O — all four are possible', 'Only A or B', 'Only AB', 'Only A, B, or AB'],
            correctAnswer: 0,
            explanation: 'Cross $I^Ai \\times I^Bi$: offspring can be $I^AI^B$ (AB), $I^Ai$ (A), $I^Bi$ (B), or ii (O). All four blood types are possible — a classic MCAT genetics question.'
          }
        ]
      }
    },
    {
      id: 'ge2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Incomplete dominance: blending. Codominance: both expressed (AB blood).
- ABO: $I^A$ and $I^B$ codominant, both dominant over i
- Pleiotropy = one gene, many effects. Epistasis = one gene masks another.
- Polygenic traits show continuous variation (bell curve)`
    }
  ]
};
"""

    parts[3] = r"""export const mcatGeneticsPart3Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge3-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 3 of 7 — Sex-Linked Inheritance & Pedigrees**

### X-Linked Inheritance

- Males (XY) only have ONE X chromosome → hemizygous
- X-linked recessive diseases affect males more (no second X to compensate)
- Carrier females ($X^AX^a$) pass the trait to ~50% of sons

### Common X-Linked Recessive Diseases

- Color blindness
- Hemophilia A and B
- Duchenne muscular dystrophy
- G6PD deficiency

### Pedigree Analysis

Key patterns to recognize:

**Autosomal Dominant**: Affected in every generation, males and females equally affected, unaffected parents don't transmit

**Autosomal Recessive**: Can skip generations, often appears in consanguineous (related) parents, 25% of carrier $\\times$ carrier offspring affected

**X-Linked Recessive**: Mostly males affected, carrier mother → 50% sons affected, no male-to-male transmission

**X-Linked Dominant**: Affected fathers pass to ALL daughters (never sons), more females affected

### MCAT Pedigree Strategy

1. Check for male-to-male transmission → if yes, NOT X-linked
2. Check if trait skips generations → if yes, likely recessive
3. Count affected males vs. females → more males = X-linked recessive`
    },
    {
      id: 'ge3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pedigrees** 🎯',
      exercise: {
        questions: [
          {
            question: 'A trait appears in a grandfather and his grandson through his daughter (who is unaffected). This is most consistent with:',
            options: ['X-linked recessive — the daughter is a carrier', 'Autosomal dominant', 'Autosomal recessive', 'Mitochondrial inheritance'],
            correctAnswer: 0,
            explanation: 'Grandfather ($X^aY$) → Daughter ($X^AX^a$, carrier) → Grandson ($X^aY$, affected). The trait skips the daughter because she has a normal X to compensate. This classic pattern = X-linked recessive.'
          }
        ]
      }
    },
    {
      id: 'ge3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- X-linked recessive: mainly males affected, no male-to-male transmission, carrier females
- Autosomal recessive: can skip generations, 25% risk from carrier parents
- Autosomal dominant: every generation, 50% chance if one parent affected
- Pedigree strategy: check male-to-male, skipping, and sex ratios`
    }
  ]
};
"""

    parts[4] = r"""export const mcatGeneticsPart4Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge4-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 4 of 7 — Population Genetics**

### Hardy-Weinberg Equilibrium

For a population NOT evolving:

$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

Where: $p$ = frequency of dominant allele, $q$ = frequency of recessive allele

| Term | Represents |
|------|-----------|
| $p^2$ | Frequency of homozygous dominant |
| $2pq$ | Frequency of heterozygous (carriers) |
| $q^2$ | Frequency of homozygous recessive |

### Conditions for Hardy-Weinberg (no evolution)

1. No mutations
2. No migration (gene flow)
3. No natural selection
4. Large population (no genetic drift)
5. Random mating

If ANY condition is violated → population is evolving!

### MCAT Shortcut

Usually given: "$q^2$ = frequency of affected individuals (recessive phenotype)"
- Calculate $q = \\sqrt{q^2}$
- Then $p = 1 - q$
- Carrier frequency = $2pq$`
    },
    {
      id: 'ge4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Hardy-Weinberg** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a population, 1 in 10,000 individuals has a recessive genetic disease. The carrier frequency is approximately:',
            options: ['2% ($2pq \\approx 0.02$)', '1%', '0.01%', '10%'],
            correctAnswer: 0,
            explanation: '$q^2 = 1/10{,}000 = 0.0001$, so $q = 0.01$ and $p = 0.99$. Carrier frequency = $2pq = 2(0.99)(0.01) = 0.0198 \\approx 2\\%$. Note: carrier frequency is MUCH higher than disease frequency — this is clinically important!'
          }
        ]
      }
    },
    {
      id: 'ge4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Hardy-Weinberg: $p^2 + 2pq + q^2 = 1$ (only if 5 conditions met)
- Start with $q^2$ (recessive phenotype frequency), then work backward
- Carrier frequency ($2pq$) is always much higher than disease frequency ($q^2$)
- Any violation of the 5 conditions = evolution occurring`
    }
  ]
};
"""

    parts[5] = r"""export const mcatGeneticsPart5Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge5-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 5 of 7 — Evolution & Natural Selection**

### Mechanisms of Evolution

| Mechanism | Description | Direction |
|-----------|-------------|-----------|
| **Natural selection** | Differential survival/reproduction based on fitness | Adaptive |
| **Genetic drift** | Random changes in allele frequency | Random |
| **Gene flow** | Migration between populations | Reduces differences |
| **Mutation** | New alleles introduced | Random, raw material |

### Types of Natural Selection

| Type | Effect on Distribution | Example |
|------|----------------------|---------|
| **Stabilizing** | Narrows distribution (favors average) | Birth weight in humans |
| **Directional** | Shifts mean one way | Antibiotic resistance |
| **Disruptive** | Favors extremes, disfavors average | Beak size in finches |

### Genetic Drift

- **Bottleneck effect**: Disaster reduces population → random alleles lost
- **Founder effect**: Small group colonizes new area → reduced genetic diversity
- Both are RANDOM (unlike natural selection, which is adaptive)

### Fitness

$$\\text{Fitness} = \\text{Reproductive success (# of viable offspring)}$$

It's NOT about being strongest — it's about who reproduces most successfully.`
    },
    {
      id: 'ge5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Evolution** 🎯',
      exercise: {
        questions: [
          {
            question: 'After a hurricane destroys 90% of a lizard population, the surviving 10% have different allele frequencies than the original population. This is:',
            options: ['Bottleneck effect (genetic drift) — random survivors, not selected by fitness', 'Natural selection', 'Gene flow', 'Directional selection'],
            correctAnswer: 0,
            explanation: 'A bottleneck drastically reduces population size randomly. Survivors aren\'t necessarily more fit — they were just lucky. Their allele frequencies may differ from the original population purely by chance.'
          }
        ]
      }
    },
    {
      id: 'ge5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Natural selection is adaptive; genetic drift is random
- Stabilizing: favors average. Directional: shifts mean. Disruptive: favors extremes.
- Bottleneck and founder effects reduce genetic diversity randomly
- Fitness = reproductive success, not strength or survival alone`
    }
  ]
};
"""

    parts[6] = r"""export const mcatGeneticsPart6Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge6-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 6 of 7 — Speciation & Phylogenetics**

### Speciation

**Biological species concept**: Species = organisms that can interbreed and produce fertile offspring

| Type | Barrier | Example |
|------|---------|---------|
| **Allopatric** | Geographic isolation | River divides population |
| **Sympatric** | Reproductive isolation (same location) | Polyploidy in plants |

### Reproductive Barriers

**Prezygotic** (prevent mating/fertilization):
- Temporal isolation (different mating seasons)
- Behavioral isolation (different courtship rituals)
- Habitat isolation (different microhabitats)
- Mechanical isolation (incompatible anatomy)
- Gametic isolation (gametes can't fuse)

**Postzygotic** (hybrid problems):
- Hybrid inviability (embryo doesn't survive)
- Hybrid sterility (mule = horse $\\times$ donkey)
- Hybrid breakdown (F2 generation problems)

### Phylogenetics

- **Homologous structures**: Same Origin, different function (human arm vs. whale flipper) → common ancestor
- **Analogous structures**: Different origin, same function (bird wing vs. insect wing) → convergent evolution
- **Vestigial structures**: Reduced/nonfunctional remnants (human appendix, whale hip bones)`
    },
    {
      id: 'ge6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Speciation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two species of frogs live in the same pond but breed in different months. This is an example of:',
            options: ['Temporal (seasonal) isolation — a prezygotic barrier', 'Postzygotic isolation', 'Allopatric speciation', 'Hybrid sterility'],
            correctAnswer: 0,
            explanation: 'Temporal isolation means the two species breed at different times, preventing interbreeding. It\'s prezygotic because it prevents mating from occurring in the first place.'
          }
        ]
      }
    },
    {
      id: 'ge6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Allopatric: geographic separation. Sympatric: same location, different mechanism.
- Prezygotic barriers prevent mating; postzygotic barriers reduce hybrid fitness
- Homologous = same origin = common ancestor. Analogous = convergent evolution.
- Species concept: can interbreed + produce FERTILE offspring`
    }
  ]
};
"""

    parts[7] = r"""export const mcatGeneticsPart7Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge7-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 7 of 7 — Genetic Diseases & Chromosomal Abnormalities**

### Autosomal Dominant Diseases

| Disease | Gene/Feature |
|---------|-------------|
| Huntington's disease | HTT gene, trinucleotide repeat (CAG) |
| Marfan syndrome | Fibrillin-1, connective tissue |
| Familial hypercholesterolemia | LDL receptor deficiency |
| Achondroplasia | FGFR3 mutation, dwarfism |

### Autosomal Recessive Diseases

| Disease | Feature | Population |
|---------|---------|-----------|
| Cystic fibrosis | CFTR chloride channel (thick mucus) | European descent |
| Sickle cell anemia | HbS (Glu→Val), pleiotropic | African descent |
| Phenylketonuria (PKU) | Can't metabolize phenylalanine | Newborn screening |
| Tay-Sachs | Hexosaminidase A deficiency | Ashkenazi Jewish |

### Chromosomal Abnormalities

| Condition | Karyotype | Features |
|-----------|----------|---------|
| Down syndrome | Trisomy 21 | Most common viable trisomy |
| Turner syndrome | 45,X (monosomy X) | Female, short, infertile |
| Klinefelter syndrome | 47,XXY | Male, tall, infertile |

### Heterozygote Advantage

Sickle cell carriers (HbAS) are resistant to malaria → explains high frequency of sickle cell allele in malaria-endemic regions. This is **balancing selection**.`
    },
    {
      id: 'ge7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Genetic Diseases** 🎯',
      exercise: {
        questions: [
          {
            question: 'Sickle cell disease persists at high frequency in malaria-endemic regions because:',
            options: ['Heterozygote advantage — carriers (HbAS) have malaria resistance without severe disease', 'Sickle cell is dominant', 'There is no selective pressure against it', 'The mutation is beneficial in all individuals'],
            correctAnswer: 0,
            explanation: 'HbAS carriers have mild sickling that kills malaria parasites in RBCs but don\'t have the severe complications of HbSS. This heterozygote advantage (balancing selection) maintains the allele at ~20% frequency in affected regions.'
          }
        ]
      }
    },
    {
      id: 'ge7-summary',
      type: 'text' as const,
      content: `### Genetics & Evolution — Complete! ✅

From Mendel to Hardy-Weinberg to natural selection to genetic diseases — genetics and evolution are heavily tested on the MCAT. Master Punnett squares, pedigree analysis, and population genetics calculations for test day.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-genetics-evolution-mcat-part{i}.ts', parts[i])


###############################################################################
# ANATOMY & PHYSIOLOGY (7 parts)
###############################################################################

def gen_anat_phys():
    parts = {}
    parts[1] = r"""export const mcatAnatPhysPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap1-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 1 of 7 — Musculoskeletal System**

### Muscle Contraction: Sliding Filament Theory

1. Ca$^{2+}$ released from sarcoplasmic reticulum (SR)
2. Ca$^{2+}$ binds troponin → tropomyosin moves → exposes actin binding sites
3. Myosin heads bind actin (cross-bridge formation)
4. Power stroke: myosin pulls actin toward center (uses ATP)
5. ATP binds myosin → detachment → cycle repeats

### Sarcomere Structure

| Band/Zone | Changes during contraction? | What it contains |
|-----------|---------------------------|------------------|
| A band | NO (stays same length) | Full myosin length (+ overlap region) |
| I band | DECREASES | Actin only (no myosin overlap) |
| H zone | DECREASES | Myosin only (no actin overlap) |
| Z line | Move closer together | Boundary of sarcomere |

**Mnemonic**: "**H**appy **I** **S**hrink" — H zone and I band shrink during contraction. A band stays the same.

### Bone Structure

- **Osteoblasts**: BUILD bone (deposit calcium)
- **Osteoclasts**: Break down (CLAST = break) bone (resorb calcium)
- **Osteocytes**: Mature bone cells (maintenance)

Bone remodeling regulated by PTH (stimulates osteoclasts → Ca$^{2+}$ into blood) and calcitonin (stimulates osteoblasts → Ca$^{2+}$ into bone).`
    },
    {
      id: 'ap1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Muscle & Bone** 🎯',
      exercise: {
        questions: [
          {
            question: 'During muscle contraction, the A band:',
            options: ['Stays the same length — it represents the full length of thick filaments', 'Gets shorter', 'Gets longer', 'Disappears'],
            correctAnswer: 0,
            explanation: 'The A band = full length of myosin (thick filaments). Since neither actin nor myosin gets shorter (they slide past each other), the A band doesn\'t change. Only H zone and I band decrease.'
          },
          {
            question: 'Rigor mortis occurs because:',
            options: ['No ATP is available to detach myosin from actin after death', 'Calcium leaks back into the SR', 'Muscles receive excess nervous stimulation', 'Tropomyosin permanently covers binding sites'],
            correctAnswer: 0,
            explanation: 'ATP is needed for myosin to release from actin (and for Ca$^{2+}$ pump to return Ca$^{2+}$ to SR). After death, ATP production stops → myosin locked to actin → muscles remain stiff.'
          }
        ]
      }
    },
    {
      id: 'ap1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sliding filament: Ca$^{2+}$ → troponin → tropomyosin moves → cross-bridge cycling
- A band = constant. H zone and I band shrink during contraction.
- Osteoblasts build. Osteoclasts break. PTH raises blood Ca$^{2+}$.
- ATP needed for both contraction AND relaxation (rigor mortis!)`
    }
  ]
};
"""

    parts[2] = r"""export const mcatAnatPhysPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap2-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 2 of 7 — Reproductive System**

### Male Reproductive System

- **Testes**: Spermatogenesis (Sertoli cells support; Leydig cells produce testosterone)
- **Epididymis**: Sperm maturation and storage
- **Vas deferens**: Transports sperm
- **Seminal vesicles**: Fructose (energy for sperm)
- **Prostate**: Alkaline fluid (neutralizes vaginal acidity)

### Female Reproductive System

- **Ovaries**: Oogenesis, estrogen, progesterone
- **Fallopian tubes (oviduct)**: Fertilization site
- **Uterus**: Implantation and fetal development
- **Endometrium**: Uterine lining (shed during menstruation)

### Menstrual Cycle (28 days)

| Phase | Days | Hormones | Events |
|-------|------|----------|--------|
| Follicular | 1-14 | FSH ↑, Estrogen ↑ | Follicle develops, endometrium thickens |
| Ovulation | ~Day 14 | LH surge | Egg released |
| Luteal | 14-28 | Progesterone ↑ (corpus luteum) | Endometrium maintained |
| Menstruation | 1-5 | Progesterone ↓ | Endometrium shed |

### MCAT Key Fact: LH Surge

- LH surge triggers ovulation (~day 14)
- This is an example of POSITIVE feedback (high estrogen → triggers LH surge)
- After ovulation, the follicle becomes the corpus luteum (makes progesterone)`
    },
    {
      id: 'ap2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Reproductive System** 🎯',
      exercise: {
        questions: [
          {
            question: 'The corpus luteum produces mainly:',
            options: ['Progesterone — which maintains the endometrium during the luteal phase', 'Estrogen only', 'FSH', 'Testosterone'],
            correctAnswer: 0,
            explanation: 'After ovulation, the ruptured follicle becomes the corpus luteum, producing progesterone (and some estrogen). Progesterone maintains the endometrium for possible implantation. If no pregnancy, the corpus luteum degenerates → progesterone drops → menstruation.'
          }
        ]
      }
    },
    {
      id: 'ap2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Follicular phase: FSH + estrogen (follicle grows). Luteal phase: progesterone (corpus luteum).
- LH surge → ovulation (positive feedback from high estrogen)
- Sertoli cells = sperm support. Leydig cells = testosterone.
- If no pregnancy → corpus luteum dies → progesterone drops → menstruation`
    }
  ]
};
"""

    parts[3] = r"""export const mcatAnatPhysPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap3-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 3 of 7 — Embryology & Development**

### Early Development

| Stage | Description | Timing |
|-------|-------------|--------|
| Fertilization | Sperm + egg → zygote | Day 0 |
| Cleavage | Mitotic divisions (no growth) | Days 1-4 |
| Morula | Solid ball of 16+ cells | Day 3-4 |
| Blastula/Blastocyst | Hollow ball, inner cell mass + trophoblast | Day 5-6 |
| Implantation | Blastocyst embeds in endometrium | Day 6-12 |
| Gastrulation | 3 germ layers form | Week 3 |

### Three Germ Layers (ULTRA HIGH YIELD)

| Layer | Becomes |
|-------|---------|
| **Ectoderm** | Nervous system (brain, spinal cord), skin (epidermis), hair, nails, lens of eye |
| **Mesoderm** | Muscle, bone, cardiovascular, kidneys, gonads, blood |
| **Endoderm** | GI tract lining, lungs, liver, pancreas, thyroid |

### Mnemonic for Germ Layers

- **Ectoderm**: Everything you can see or think with (skin + nervous system)
- **Mesoderm**: "Meso-derm" = Middle = Muscle, bone, blood
- **Endoderm**: Endoderm = Inner lining = digestive/respiratory lining`
    },
    {
      id: 'ap3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Embryology** 🎯',
      exercise: {
        questions: [
          {
            question: 'The nervous system develops from which germ layer?',
            options: ['Ectoderm — via neurulation (neural plate → neural tube)', 'Mesoderm', 'Endoderm', 'Trophoblast'],
            correctAnswer: 0,
            explanation: 'The ectoderm forms the neural plate, which folds into the neural tube (future brain and spinal cord). This process is neurulation. Neural crest cells (also from ectoderm) form PNS, melanocytes, adrenal medulla.'
          }
        ]
      }
    },
    {
      id: 'ap3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Fertilization → Cleavage → Morula → Blastocyst → Gastrulation
- Three germ layers: Ecto (skin/nervous), Meso (muscle/bone/blood), Endo (GI/lung lining)
- Neurulation: neural plate → neural tube (from ectoderm)
- Germ layer derivatives are GUARANTEED MCAT questions`
    }
  ]
};
"""

    parts[4] = r"""export const mcatAnatPhysPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap4-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 4 of 7 — Skin & Integumentary System**

### Skin Layers

From outside to inside:
1. **Epidermis** (epithelial): Keratinocytes, melanocytes, no blood vessels
2. **Dermis**: Connective tissue, blood vessels, hair follicles, nerve endings, sweat glands
3. **Hypodermis** (subcutaneous): Fat storage, insulation

### Skin Functions

| Function | Mechanism |
|----------|-----------|
| Protection | Barrier against pathogens, UV (melanin) |
| Thermoregulation | Sweat (evaporative cooling), vasoconstriction/vasodilation |
| Sensation | Mechanoreceptors, thermoreceptors, nociceptors |
| Vitamin D synthesis | UV converts 7-dehydrocholesterol → cholecalciferol |
| Excretion | Sweat removes small amounts of waste |

### Thermoregulation

**Hot environment**:
- Vasodilation (increased blood flow to skin → heat loss)
- Sweating (evaporative cooling)

**Cold environment**:
- Vasoconstriction (reduced blood flow to skin → conserves heat)
- Shivering (muscle contraction generates heat)
- Piloerection (goosebumps — minimal effect in humans)`
    },
    {
      id: 'ap4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integumentary** 🎯',
      exercise: {
        questions: [
          {
            question: 'A burn that destroys the epidermis and part of the dermis is classified as:',
            options: ['Second-degree (partial thickness) — blistering occurs because fluid leaks between layers', 'First-degree (superficial)', 'Third-degree (full thickness)', 'Fourth-degree'],
            correctAnswer: 0,
            explanation: 'First-degree = epidermis only (sunburn). Second-degree = epidermis + partial dermis (blistering). Third-degree = through the full dermis (painless because nerve endings destroyed). Second-degree burns are actually the most painful.'
          }
        ]
      }
    },
    {
      id: 'ap4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Epidermis = outer, no blood vessels. Dermis = inner, blood supply.
- Thermoregulation: vasodilation + sweating (hot) or vasoconstriction + shivering (cold)
- Vitamin D synthesis begins in skin with UV exposure
- Melanin protects against UV damage`
    }
  ]
};
"""

    parts[5] = r"""export const mcatAnatPhysPart5Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap5-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 5 of 7 — Special Senses**

### Vision

| Structure | Function |
|-----------|----------|
| Cornea | Refracts light (most refraction here!) |
| Lens | Fine-tunes focus (accommodation) |
| Retina | Contains photoreceptors |
| Rods | Dim light, peripheral vision (no color) |
| Cones | Color vision, high acuity (3 types: R, G, B) |
| Fovea | Highest cone density = sharpest vision |

### Hearing

Sound waves → Pinna → Ear canal → Tympanic membrane (vibrates) → Ossicles (malleus, incus, stapes) → Oval window → Cochlea → Hair cells → Auditory nerve → Brain

- **Cochlea**: Tonotopic organization (base = high frequency, apex = low frequency)
- **Hair cells**: Stereocilia bend → mechanotransduction → neural signal

### Taste & Smell

- **Taste**: 5 basic modalities (sweet, salty, sour, bitter, umami)
- **Smell**: Olfactory receptors in nasal epithelium → olfactory bulb → limbic system
- Smell is the ONLY sense that bypasses the thalamus (connects directly to limbic system → emotional memories)`
    },
    {
      id: 'ap5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Senses** 🎯',
      exercise: {
        questions: [
          {
            question: 'A person with damage to the fovea would have difficulty with:',
            options: ['Detailed central vision (reading, face recognition) — the fovea has the highest concentration of cones', 'Peripheral vision', 'Night vision', 'Hearing'],
            correctAnswer: 0,
            explanation: 'The fovea contains the highest density of cones (responsible for color and fine detail vision). Foveal damage destroys central/sharp vision while peripheral vision (rod-dependent) may be preserved — this is macular degeneration.'
          }
        ]
      }
    },
    {
      id: 'ap5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Rods = dim light/peripheral. Cones = color/acuity (concentrated in fovea).
- Hearing: sound → ossicles → cochlea → hair cells (mechanotransduction)
- Smell is unique: bypasses thalamus, connects directly to limbic system
- Cornea does most light refraction; lens fine-tunes it`
    }
  ]
};
"""

    parts[6] = r"""export const mcatAnatPhysPart6Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap6-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 6 of 7 — Blood & Lymphatic System**

### Blood Components

| Component | % of Blood | Function |
|-----------|-----------|----------|
| Plasma | ~55% | Water, proteins (albumin, fibrinogen, antibodies), electrolytes |
| RBCs (erythrocytes) | ~45% | O$_2$ transport (hemoglobin) |
| WBCs (leukocytes) | <1% | Immune defense |
| Platelets (thrombocytes) | <1% | Clotting |

### Hemostasis (Blood Clotting)

1. **Vascular spasm**: Blood vessel constricts
2. **Platelet plug**: Platelets adhere to collagen, aggregate
3. **Coagulation cascade**: Fibrinogen → Fibrin (via thrombin) → stable clot

### Hematocrit

$$\\text{Hematocrit} = \\frac{\\text{Volume of RBCs}}{\\text{Total blood volume}} \\times 100$$

Normal: ~45%. Elevated in dehydration or polycythemia. Decreased in anemia.

### Lymphatic System

- Returns excess interstitial fluid to blood
- **Lymph nodes**: Filter lymph, contain B and T cells
- **Spleen**: Filters blood, removes old RBCs
- **Thymus**: T cell maturation`
    },
    {
      id: 'ap6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Blood & Lymph** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient is severely dehydrated. Their hematocrit would be:',
            options: ['Elevated — plasma volume decreases, but RBC count stays the same (relative polycythemia)', 'Decreased', 'Normal', 'Zero'],
            correctAnswer: 0,
            explanation: 'Dehydration decreases plasma volume. Since hematocrit = RBC volume / total blood volume, the RBC percentage increases (even though absolute RBC count hasn\'t changed). This is called relative polycythemia.'
          }
        ]
      }
    },
    {
      id: 'ap6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Blood: 55% plasma + 45% RBCs (hematocrit) + <1% WBCs/platelets
- Clotting cascade: vascular spasm → platelet plug → fibrin mesh
- Lymphatic system: returns fluid, filters pathogens, T cell maturation (thymus)
- Spleen filters blood; lymph nodes filter lymph`
    }
  ]
};
"""

    parts[7] = r"""export const mcatAnatPhysPart7Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap7-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 7 of 7 — Homeostasis & Integration**

### Homeostasis

Maintenance of a stable internal environment despite external changes.

**Negative feedback** (most common):
- Response opposes the stimulus
- Example: Blood glucose rises → insulin secreted → glucose drops → insulin stops

**Positive feedback** (amplifying):
- Response AMPLIFIES the stimulus
- Examples: Oxytocin during labor, LH surge, blood clotting cascade

### Acid-Base Balance

$$\\text{pH} = -\\log[\\text{H}^+]$$

| Condition | pH | Cause |
|-----------|----|----|
| Respiratory acidosis | Low | Hypoventilation (CO$_2$ retention) |
| Respiratory alkalosis | High | Hyperventilation (CO$_2$ loss) |
| Metabolic acidosis | Low | Excess acid (diabetic ketoacidosis) or bicarbonate loss |
| Metabolic alkalosis | High | Excess bicarbonate or acid loss (vomiting) |

### Compensation

- Respiratory problems → kidneys compensate (slow, days)
- Metabolic problems → lungs compensate (fast, minutes to hours)

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$`
    },
    {
      id: 'ap7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Homeostasis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient with uncontrolled diabetes develops ketoacidosis (metabolic acidosis). The body compensates by:',
            options: ['Hyperventilation — blowing off CO$_2$ to raise blood pH (respiratory compensation)', 'Hypoventilation', 'Increasing ketone production', 'Raising insulin levels'],
            correctAnswer: 0,
            explanation: 'Metabolic acidosis → lungs compensate by hyperventilating (Kussmaul breathing). Blowing off CO$_2$ shifts the equilibrium left, reducing H$^+$ and raising pH. This is fast but incomplete — treating the underlying cause is essential.'
          }
        ]
      }
    },
    {
      id: 'ap7-summary',
      type: 'text' as const,
      content: `### Anatomy & Physiology — Complete! ✅

Integration is key for the MCAT. Every organ system connects to others — the kidneys regulate blood pressure, the nervous system controls heart rate, hormones link everything. Think in systems and connections, not isolated facts.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-anatomy-physiology-mcat-part{i}.ts', parts[i])


###############################################################################
# MICROBIOLOGY (7 parts)
###############################################################################

def gen_micro():
    parts = {}
    parts[1] = r"""export const mcatMicroPart1Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi1-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 1 of 7 — Bacteria: Structure & Classification**

### Bacterial Cell Structure

| Structure | Function | Notes |
|-----------|----------|-------|
| Cell wall | Protection, shape | Peptidoglycan |
| Plasma membrane | Selective barrier | No cholesterol |
| Nucleoid | Circular DNA | No membrane-bound nucleus |
| Ribosomes | Protein synthesis | 70S (target for antibiotics!) |
| Plasmid | Accessory genes | Often carry antibiotic resistance |
| Flagella | Motility | Chemotaxis |
| Pili | Attachment, conjugation | Sex pili for DNA transfer |
| Capsule | Immune evasion | Prevents phagocytosis |

### Gram Stain Classification

| Feature | Gram Positive | Gram Negative |
|---------|-------------|-------------|
| Stain color | Purple/Blue | Pink/Red |
| Cell wall | Thick peptidoglycan | Thin peptidoglycan |
| Outer membrane | No | Yes (contains LPS) |
| LPS (endotoxin) | No | Yes |

### LPS (Lipopolysaccharide) — HIGH YIELD

- Found ONLY in Gram-negative outer membrane
- Released when bacteria lyse → triggers massive immune response
- Can cause septic shock, fever, disseminated intravascular coagulation (DIC)`
    },
    {
      id: 'mi1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bacteria Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'A Gram-negative bacterium is more difficult to treat with certain antibiotics because:',
            options: ['The outer membrane acts as an additional barrier, blocking drug entry', 'It has a thicker peptidoglycan layer', 'It lacks a cell wall', 'It has no ribosomes'],
            correctAnswer: 0,
            explanation: 'Gram-negative bacteria have an outer membrane (with LPS) that many antibiotics cannot penetrate. This is why Gram-negative infections (E. coli, Pseudomonas) are often harder to treat than Gram-positive.'
          }
        ]
      }
    },
    {
      id: 'mi1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Gram-positive: thick peptidoglycan, no outer membrane (stains purple)
- Gram-negative: thin peptidoglycan + outer membrane with LPS (stains pink)
- LPS = endotoxin → fever, shock
- Bacterial ribosomes = 70S (antibiotics target these)`
    }
  ]
};
"""

    parts[2] = r"""export const mcatMicroPart2Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi2-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 2 of 7 — Bacterial Growth & Metabolism**

### Bacterial Growth Curve

| Phase | Description |
|-------|-------------|
| **Lag** | Adapting to environment, synthesizing enzymes |
| **Log (Exponential)** | Rapid binary fission, most sensitive to antibiotics |
| **Stationary** | Growth rate = death rate (resources depleted) |
| **Death** | Death rate > growth rate |

### Binary Fission

$$N = N_0 \\times 2^n$$

Where $N$ = final number, $N_0$ = initial number, $n$ = number of generations

### Bacterial Metabolism

| Type | Energy Source | Carbon Source |
|------|-------------|-------------|
| Photoautotroph | Light | CO$_2$ |
| Photoheterotroph | Light | Organic compounds |
| Chemoautotroph | Inorganic chemicals | CO$_2$ |
| Chemoheterotroph | Organic compounds | Organic compounds |

### Oxygen Requirements

| Type | O$_2$ Needed? | Example |
|------|-------------|---------|
| Obligate aerobe | Yes | *M. tuberculosis* |
| Obligate anaerobe | No (O$_2$ is toxic!) | *Clostridium spp.* |
| Facultative anaerobe | Either way (prefers O$_2$) | *E. coli* |`
    },
    {
      id: 'mi2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bacterial Growth** 🎯',
      exercise: {
        questions: [
          {
            question: 'Antibiotics are most effective during which growth phase?',
            options: ['Log (exponential) phase — bacteria are actively dividing and most vulnerable', 'Lag phase', 'Stationary phase', 'Death phase'],
            correctAnswer: 0,
            explanation: 'During the log phase, bacteria are rapidly dividing. Many antibiotics target processes active during division (cell wall synthesis, DNA replication, translation), making this the most effective time to administer them.'
          }
        ]
      }
    },
    {
      id: 'mi2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Growth curve: Lag → Log → Stationary → Death
- Binary fission: $N = N_0 \\times 2^n$ (exponential growth)
- Obligate aerobes need O$_2$; obligate anaerobes are killed by O$_2$
- Antibiotics most effective during log phase (active division)`
    }
  ]
};
"""

    parts[3] = r"""export const mcatMicroPart3Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi3-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 3 of 7 — Bacterial Genetics & Antibiotic Resistance**

### Horizontal Gene Transfer

| Mechanism | How it works |
|-----------|-------------|
| **Transformation** | Bacteria picks up free DNA from environment |
| **Transduction** | Bacteriophage transfers DNA between bacteria |
| **Conjugation** | Direct DNA transfer via sex pilus (F plasmid) |

### Antibiotic Resistance Mechanisms

| Mechanism | Example |
|-----------|---------|
| Enzyme degradation | $\\beta$-lactamase destroys penicillin |
| Target modification | Altered ribosome binding site → macrolide resistance |
| Efflux pumps | Pump drug out of cell → tetracycline resistance |
| Decreased permeability | Porin mutations → reduced drug entry |

### MCAT Connection: Antibiotic Targets

| Antibiotic Class | Target | Spectrum |
|-----------------|--------|----------|
| $\\beta$-lactams (penicillin) | Cell wall synthesis | Bacteria only |
| Aminoglycosides | 30S ribosomal subunit | Bacteria only |
| Macrolides (erythromycin) | 50S ribosomal subunit | Bacteria only |
| Fluoroquinolones | DNA gyrase (topoisomerase) | Bacteria only |
| Sulfonamides | Folate synthesis | Bacteria only |

Antibiotics DON'T work against viruses — viruses use host machinery!`
    },
    {
      id: 'mi3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bacterial Genetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bacterium acquires antibiotic resistance after being infected by a bacteriophage carrying resistance genes from another bacterium. This is:',
            options: ['Transduction — phage-mediated DNA transfer between bacteria', 'Transformation', 'Conjugation', 'Mutation'],
            correctAnswer: 0,
            explanation: 'Transduction = bacteriophage accidentally packages bacterial DNA and transfers it to a new host. Generalized transduction transfers random genes; specialized transduction transfers genes near the phage integration site.'
          }
        ]
      }
    },
    {
      id: 'mi3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Horizontal gene transfer: Transformation (naked DNA), Transduction (phage), Conjugation (pilus)
- Antibiotic resistance: enzyme degradation, target modification, efflux pumps
- Know antibiotic targets: cell wall, 30S/50S ribosome, DNA gyrase, folate
- Antibiotics target bacteria, NOT viruses`
    }
  ]
};
"""

    parts[4] = r"""export const mcatMicroPart4Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi4-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 4 of 7 — Viruses**

### Virus Structure

- **NOT cells** — obligate intracellular parasites
- Nucleic acid (DNA or RNA, never both) + protein coat (capsid)
- Some have a lipid **envelope** (from host membrane)

### Viral Classification

| Feature | Types |
|---------|-------|
| Genome | dsDNA, ssDNA, dsRNA, ssRNA (+) or (-) |
| Envelope | Enveloped or naked |
| Shape | Icosahedral, helical, complex |

### Replication Cycles

**Lytic cycle**: Attach → Inject DNA → Replicate → Assemble → Lyse → Release
**Lysogenic cycle**: Viral DNA integrates into host genome (prophage) → replicates with host → can switch to lytic under stress

### Baltimore Classification (Important for MCAT)

| Class | Genome | Key Feature |
|-------|--------|-------------|
| I | dsDNA | Direct transcription (herpes, adenovirus) |
| IV | (+)ssRNA | mRNA-ready → immediate translation (COVID-19, Zika) |
| V | (-)ssRNA | Needs RNA-dependent RNA Pol (influenza, Ebola) |
| VI | ssRNA-RT | Reverse transcriptase → DNA (HIV) |
| VII | dsDNA-RT | Reverse transcriptase intermediate (Hepatitis B) |`
    },
    {
      id: 'mi4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Virology** 🎯',
      exercise: {
        questions: [
          {
            question: 'Enveloped viruses are generally more susceptible to disinfection because:',
            options: ['The lipid envelope is easily disrupted by detergents, alcohol, and desiccation', 'They have thicker capsids', 'They replicate more slowly', 'They lack nucleic acid'],
            correctAnswer: 0,
            explanation: 'The lipid envelope is fragile — destroyed by soap, alcohol, heat, and drying. Without their envelope, these viruses can\'t attach to host cells. Naked viruses (no envelope) are more resistant to environmental conditions.'
          }
        ]
      }
    },
    {
      id: 'mi4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Viruses are obligate intracellular parasites (not alive by themselves)
- (+)ssRNA can be directly translated. (-)ssRNA needs RNA-dependent RNA Pol.
- Retroviruses (HIV): RNA → DNA via reverse transcriptase
- Enveloped viruses = fragile. Naked viruses = environmental survivors.`
    }
  ]
};
"""

    parts[5] = r"""export const mcatMicroPart5Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi5-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 5 of 7 — Fungi, Parasites & Prions**

### Fungi

| Feature | Details |
|---------|---------|
| Cell wall | **Chitin** (not peptidoglycan!) |
| Cell membrane | Contains **ergosterol** (target for antifungals) |
| Nutrition | Heterotrophs, absorptive feeding |
| Forms | Yeasts (unicellular), molds (multicellular), dimorphic (both) |

### Fungal Reproduction

- **Asexual**: Budding (yeasts), spore formation
- **Sexual**: Occurs under stress conditions

### Parasitology (Key MCAT Parasites)

| Organism | Type | Disease | Transmission |
|----------|------|---------|-------------|
| *Plasmodium* | Protozoan | Malaria | Mosquito (*Anopheles*) |
| *Trypanosoma* | Protozoan | Sleeping sickness | Tsetse fly |
| *Giardia* | Protozoan | Giardiasis (diarrhea) | Contaminated water |
| *Toxoplasma* | Protozoan | Toxoplasmosis | Cat feces, undercooked meat |
| Tapeworms | Helminth | Intestinal infection | Undercooked meat |

### Prions

- Misfolded proteins (PrP$^{Sc}$) — NO nucleic acid
- Convert normal PrP$^{C}$ to misfolded form
- Cannot be sterilized by standard methods (resist heat, UV, chemicals)
- Cause spongiform encephalopathies (BSE, CJD, kuru)`
    },
    {
      id: 'mi5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Fungi & Parasites** 🎯',
      exercise: {
        questions: [
          {
            question: 'Antifungal drugs target ergosterol because:',
            options: ['Ergosterol is in fungal membranes but not human membranes (humans use cholesterol)', 'Ergosterol is in all cell walls', 'It disrupts bacterial growth too', 'Ergosterol is the same as cholesterol'],
            correctAnswer: 0,
            explanation: 'Fungal membranes use ergosterol instead of cholesterol. Drugs like amphotericin B bind ergosterol (creating pores) and azoles block ergosterol synthesis. Since humans use cholesterol, these drugs selectively target fungi.'
          }
        ]
      }
    },
    {
      id: 'mi5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Fungi: chitin cell wall, ergosterol in membrane (drug target)
- Malaria (*Plasmodium*) transmitted by *Anopheles* mosquito
- Prions: misfolded proteins with NO nucleic acid — unique infectious agents
- Antifungals target ergosterol (azoles) or chitin — not peptidoglycan`
    }
  ]
};
"""

    parts[6] = r"""export const mcatMicroPart6Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi6-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 6 of 7 — Immune Response to Infection**

### First Line of Defense (Barriers)

- Skin (physical), mucous membranes, stomach acid, lysozyme (tears/saliva), normal flora

### Second Line (Innate Immune Response)

| Component | Function |
|-----------|----------|
| **Neutrophils** | First responders, phagocytosis (most abundant WBC) |
| **Macrophages** | Phagocytosis + antigen presentation (APC) |
| **NK cells** | Kill virus-infected and tumor cells (no antigen specificity) |
| **Complement** | Opsonization, membrane attack complex (MAC), inflammation |
| **Inflammation** | Vasodilation, increased permeability, cell recruitment |

### Third Line (Adaptive Immune Response)

| Arm | Cells | Function |
|-----|-------|----------|
| Humoral | B cells → Plasma cells | Produce antibodies (target extracellular pathogens) |
| Cell-mediated | T cells (CD4+, CD8+) | CD4+ helps, CD8+ kills infected cells |

### Vaccination

- **Active immunity**: Exposure to antigen → immune response → memory (vaccines, natural infection)
- **Passive immunity**: Receiving pre-formed antibodies (maternal IgG, antiserum)
  - Passive = immediate but temporary. Active = delayed but long-lasting.`
    },
    {
      id: 'mi6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Immune Response** 🎯',
      exercise: {
        questions: [
          {
            question: 'A newborn has IgG antibodies from its mother. This is an example of:',
            options: ['Passive immunity — antibodies were transferred, not produced by the baby\'s own immune system', 'Active immunity', 'Innate immunity', 'Cell-mediated immunity'],
            correctAnswer: 0,
            explanation: 'Maternal IgG crosses the placenta, providing passive immunity. The baby didn\'t mount its own immune response. This protection is immediate but temporary (fades as maternal antibodies are degraded over months).'
          }
        ]
      }
    },
    {
      id: 'mi6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Three lines of defense: barriers → innate (neutrophils, complement) → adaptive (B and T cells)
- Active immunity: long-lasting, requires time. Passive: immediate but temporary.
- Neutrophils = first responders. Macrophages = APCs + phagocytes.
- Vaccines = active immunity (memory cells formed)`
    }
  ]
};
"""

    parts[7] = r"""export const mcatMicroPart7Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi7-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 7 of 7 — Immune Disorders & Clinical Microbiology**

### Immune System Disorders

| Disorder | Type | Description |
|----------|------|-------------|
| **Allergies** | Hypersensitivity Type I | IgE-mediated, mast cell degranulation (histamine) |
| **Autoimmune diseases** | Self-tolerance failure | Immune system attacks own tissues (lupus, MS, T1DM) |
| **HIV/AIDS** | Immunodeficiency | Destroys CD4+ T cells → opportunistic infections |
| **SCID** | Immunodeficiency | No functional T or B cells (severe combined) |

### Antibody Classes (HIGH YIELD)

| Class | Function | Location |
|-------|----------|----------|
| **IgG** | Most abundant, crosses placenta | Blood |
| **IgM** | First to respond, pentamer | Blood |
| **IgA** | Mucosal protection | Saliva, breast milk, gut |
| **IgE** | Allergies, parasites | Mast cells |
| **IgD** | B cell receptor | B cell surface |

**Mnemonic**: "**G**reatest amount, **M** is fi**M**rst, **A** on **A**ll surfaces, **E** for all**E**rgies"

### Koch's Postulates

1. Organism found in all cases of disease
2. Organism isolated and grown in pure culture
3. Cultured organism causes disease in healthy host
4. Organism re-isolated from new host = original organism`
    },
    {
      id: 'mi7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Immune Disorders** 🎯',
      exercise: {
        questions: [
          {
            question: 'HIV primarily targets:',
            options: ['CD4+ helper T cells — leading to progressive immunodeficiency', 'CD8+ cytotoxic T cells', 'B cells directly', 'Neutrophils'],
            correctAnswer: 0,
            explanation: 'HIV binds CD4 receptor (on helper T cells) + CCR5/CXCR4 co-receptors. As CD4+ T cells are destroyed, the immune system progressively fails. When CD4 count drops below 200, susceptibility to opportunistic infections defines AIDS.'
          }
        ]
      }
    },
    {
      id: 'mi7-summary',
      type: 'text' as const,
      content: `### Microbiology — Complete! ✅

From bacteria to viruses to immune function, microbiology bridges molecular biology with clinical medicine. The MCAT loves testing infectious disease mechanisms, immune responses, and antibody functions. Know Koch's postulates, vaccine types, and immune disorders.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-microbiology-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 5: Genetics & Evolution ===")
gen_genetics()
print("\n=== MCAT Batch 5: Anatomy & Physiology ===")
gen_anat_phys()
print("\n=== MCAT Batch 5: Microbiology ===")
gen_micro()
print(f"\nBatch 5 complete! Total files: 21")
