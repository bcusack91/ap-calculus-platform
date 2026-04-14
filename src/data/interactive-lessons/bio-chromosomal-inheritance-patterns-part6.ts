export const bioChromosomalInheritancePatternsPart6Data = {
  topicSlug: 'chromosomal-inheritance-patterns',
  sections: [
    {
      id: 'chr6-intro',
      type: 'text' as const,
      content: `# Genomic Imprinting & Extranuclear Inheritance

Not all inheritance follows standard Mendelian patterns. **Genomic imprinting** and **extranuclear inheritance** demonstrate that the source of an allele (which parent) and the location of genes (nucleus vs. organelles) can both influence phenotype.

## Genomic Imprinting

**Genomic imprinting** is an epigenetic phenomenon where certain genes are expressed differently depending on whether they were inherited from the **mother or the father**.

### How It Works

- Specific genes are **silenced** (imprinted) by DNA methylation during gamete formation
- The imprint is **parent-of-origin specific**: one parental allele is always silenced
- Result: **only one allele** is expressed (monoallelic expression)
- Imprints are **erased and reset** each generation during gametogenesis

### Key Points
- ~100–200 imprinted genes have been identified in mammals
- Imprinting does NOT change the DNA sequence — it's **epigenetic** (methylation, histone modification)
- Both the maternal AND paternal copies are needed for normal development`
    },
    {
      id: 'chr6-imprintex',
      type: 'text' as const,
      content: `## Imprinting Disorders

### Prader-Willi Syndrome vs. Angelman Syndrome

These two syndromes beautifully illustrate genomic imprinting — both involve the **same region of chromosome 15** (15q11-13) but result from losing the contribution of different parents.

| Feature | Prader-Willi Syndrome | Angelman Syndrome |
|---------|----------------------|-------------------|
| **Affected allele** | Paternal genes silenced/deleted | Maternal genes silenced/deleted |
| **Which parent's copy is needed** | Father's (normally active) | Mother's (normally active) |
| **Cause** | Loss of paternal 15q11-13 | Loss of maternal 15q11-13 |
| **Symptoms** | Obesity, intellectual disability, short stature, hypogonadism | Severe intellectual disability, seizures, inappropriate laughter, puppet-like gait |
| **Mechanism** | ~70% deletion, ~25% maternal UPD | ~70% deletion, ~10% paternal UPD, ~10% UBE3A mutation |

> 💡 **UPD (Uniparental Disomy)**: Inheriting both copies of a chromosome from ONE parent. If both copies come from the "wrong" parent (the one whose genes are normally imprinted), disease results.

### Igf2 Gene (Insulin-like Growth Factor 2)
- Classic example of an imprinted gene
- **Maternally imprinted** (maternal copy is silenced)
- Only the **paternal copy** is expressed
- Promotes fetal growth — "parental conflict" hypothesis: father's genes favor larger offspring, mother's genes limit offspring size`
    },
    {
      id: 'chr6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A child inherits a deletion of 15q11-13 from their father. The child will most likely develop:',
            options: [
              'Prader-Willi syndrome',
              'Angelman syndrome',
              'Down syndrome',
              'No disorder — the maternal copy compensates'
            ],
            correctAnswer: 0,
            explanation: 'The paternal copy of 15q11-13 contains genes that are normally active (the maternal copies of these specific genes are imprinted/silenced). Losing the paternal copy means no functional copy is expressed → Prader-Willi syndrome.'
          },
          {
            question: 'Genomic imprinting differs from standard Mendelian inheritance because:',
            options: [
              'Gene expression depends on which parent transmitted the allele',
              'It involves changes to the DNA sequence',
              'Both parental alleles are always expressed equally',
              'It only affects sex-linked genes'
            ],
            correctAnswer: 0,
            explanation: 'In genomic imprinting, the same allele can be expressed or silenced depending on whether it came from the mother or father. This parent-of-origin effect is epigenetic — the DNA sequence is unchanged, but methylation patterns differ.'
          }
        ]
      }
    },
    {
      id: 'chr6-extranuclear',
      type: 'text' as const,
      content: `## Extranuclear (Cytoplasmic) Inheritance

Some genes are located outside the nucleus — in **mitochondria** and **chloroplasts**. These organelles have their own circular DNA and show a unique pattern of inheritance.

### Mitochondrial DNA (mtDNA)

- Human mtDNA: **16,569 bp**, circular, encodes 37 genes
- Encodes: 13 proteins (electron transport chain), 22 tRNAs, 2 rRNAs
- **Maternal inheritance**: mitochondria in the egg are passed to all offspring; sperm contribute essentially no mitochondria
- **No recombination**: mtDNA is clonally inherited
- **High mutation rate**: ~10× higher than nuclear DNA (no histones, limited repair)
- **Heteroplasmy**: A cell can contain a mix of normal and mutant mitochondria

### Mitochondrial Diseases

| Disease | Mutation | Symptoms |
|---------|----------|----------|
| **MELAS** | tRNA mutation | Muscle weakness, seizures, stroke-like episodes |
| **MERRF** | tRNA mutation | Myoclonic epilepsy, ragged red fibers |
| **Leber hereditary optic neuropathy (LHON)** | Complex I genes | Sudden vision loss, usually in young adults |
| **Kearns-Sayre syndrome** | Large deletion | Progressive external ophthalmoplegia, cardiac conduction defects |

### Inheritance Pattern
- **Affected mother** → all children may be affected (maternal inheritance)
- **Affected father** → no children affected
- Severity can vary due to **heteroplasmy** — the proportion of mutant vs. normal mitochondria

## Maternal Effect Genes

**Maternal effect** (not the same as maternal inheritance): Gene products deposited in the egg by the mother determine early embryonic phenotype.

### Example: Snail Shell Coiling in *Lymnaea*
- The **mother's genotype** (not the offspring's) determines the direction of shell coiling
- Dextral (right-coiling, D) is dominant over sinistral (left-coiling, d)
- A dd mother will produce sinistral offspring even if the offspring are Dd
- The effect is delayed one generation because maternal mRNA in the egg directs early development`
    },
    {
      id: 'chr6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Mitochondrial DNA is inherited exclusively from the ___',
            options: ['mother', 'father', 'both parents equally', 'random parent']
          },
          {
            label: 'A cell containing a mix of normal and mutant mitochondria exhibits ___',
            options: ['heteroplasmy', 'homoplasmy', 'aneuploidy', 'polyploidy']
          },
          {
            label: 'In maternal effect inheritance, the ___ genotype determines the offspring phenotype',
            options: ["mother's", "offspring's", "father's", "grandparent's"]
          },
          {
            label: 'Genomic imprinting involves ___ silencing of genes based on parental origin',
            options: ['epigenetic', 'mutational', 'translational', 'chromosomal']
          }
        ],
        correctAnswers: ['mother', 'heteroplasmy', "mother's", 'epigenetic'],
        hint1: 'Sperm contribute almost no cytoplasm (and few mitochondria) to the zygote.',
        hint2: '"Hetero" = different, "plasmy" relates to cytoplasmic organelles.',
        hint3: 'Think about snail shell coiling — which generation\'s genes control the phenotype?',
        explanation: 'Mitochondria are maternally inherited via the egg cytoplasm. Heteroplasmy = mix of mutant and normal mitochondria. In maternal effect, the mother\'s genotype controls offspring phenotype through mRNA deposited in the egg. Imprinting uses epigenetic marks (methylation).'
      }
    },
    {
      id: 'chr6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A woman with a mitochondrial disease has children with an unaffected man. What proportion of their children could be affected?',
            options: [
              'All children of both sexes may be affected',
              'Only daughters will be affected',
              'Only sons will be affected',
              '25% of children will be affected'
            ],
            correctAnswer: 0,
            explanation: 'Mitochondria are inherited from the mother only. ALL children (sons and daughters) receive their mitochondria from their mother, so all may be affected. The severity may vary due to heteroplasmy and the random distribution of mitochondria during cell division.'
          },
          {
            question: 'A Dd snail (maternal effect gene, D = dextral dominant) mates with a dd snail. If the mother is Dd, the offspring will be:',
            options: [
              'All dextral (right-coiling), regardless of offspring genotype',
              'Half dextral, half sinistral',
              'All sinistral (left-coiling)',
              'Dextral only if they inherit D'
            ],
            correctAnswer: 0,
            explanation: 'In maternal effect inheritance, the MOTHER\'s genotype determines offspring phenotype. Since the mother is Dd (heterozygous with dominant D), she produces mRNA for dextral coiling → all her offspring will be dextral, regardless of their own genotypes.'
          }
        ]
      }
    }
  ]
};
