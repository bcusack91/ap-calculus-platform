import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Biology - Unit 5: Heredity (Genetics)...')

  const bioCourse = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
  })

  if (!bioCourse) {
    throw new Error('AP Biology course not found')
  }

  const heredityCategory = await prisma.category.upsert({
    where: { slug: 'biology-heredity' },
    update: {},
    create: {
      slug: 'biology-heredity',
      name: 'Heredity',
      description: 'Mendelian genetics, inheritance patterns, and chromosomal basis',
      order: 5,
      courseId: bioCourse.id,
    },
  })

  console.log('✓ Created category: Heredity')

  // Topic 1: Mendelian Genetics
  const mendelTopic = await prisma.topic.upsert({
    where: { slug: 'mendelian-genetics' },
    update: {},
    create: {
      slug: 'mendelian-genetics',
      title: 'Mendelian Genetics',
      description: 'Laws of inheritance, Punnett squares, and probability',
      order: 1,
      categoryId: heredityCategory.id,
      isPremium: false,
      textContent: `
# 🌱 Mendelian Genetics

## Terminology

**Gene:** Unit of heredity, codes for trait
**Allele:** Alternative version of gene
**Dominant:** Allele that masks other (uppercase, e.g., A)
**Recessive:** Allele that is masked (lowercase, e.g., a)
**Homozygous:** Same alleles (AA or aa)
**Heterozygous:** Different alleles (Aa)
**Genotype:** Genetic makeup (e.g., Aa)
**Phenotype:** Physical appearance (e.g., tall)

## Mendel's Laws

### Law of Segregation
- Each parent has **two alleles** for each gene
- Alleles **separate** during gamete formation
- Each gamete gets **one allele**
- Fertilization restores pairs

### Law of Independent Assortment
- Genes for different traits **assort independently**
- Applies to genes on different chromosomes
- Exception: **linked genes** on same chromosome

## Monohybrid Cross

**One trait** considered

**Example:** Tall (T) × Short (t) pea plants
- P generation: TT × tt
- F₁ generation: All Tt (100% tall)
- F₁ × F₁: Tt × Tt
- F₂ generation: 1 TT : 2 Tt : 1 tt
  - **Genotypic ratio: 1:2:1**
  - **Phenotypic ratio: 3:1** (3 tall : 1 short)

## Dihybrid Cross

**Two traits** considered

**Example:** Round Yellow (RRYY) × Wrinkled Green (rryy)
- F₁: All RrYy (round, yellow)
- F₂ (RrYy × RrYy): **9:3:3:1 ratio**
  - 9 Round Yellow
  - 3 Round Green
  - 3 Wrinkled Yellow
  - 1 Wrinkled Green

## Testcross

**Purpose:** Determine unknown genotype

**Method:** Cross with homozygous recessive (tt)
- If offspring all dominant phenotype → unknown is TT
- If offspring 1:1 ratio → unknown is Tt

## Probability Rules

### Product Rule (AND)
- Probability of **independent events together**
- **Multiply** probabilities
- Example: Probability of Tt AND Yy?
  - P(Tt) = 1/2, P(Yy) = 1/2
  - P(Tt AND Yy) = 1/2 × 1/2 = 1/4

### Sum Rule (OR)
- Probability of **alternative events**
- **Add** probabilities
- Example: Probability of TT OR Tt?
  - P(TT) = 1/4, P(Tt) = 1/2
  - P(TT OR Tt) = 1/4 + 1/2 = 3/4

## Pedigree Analysis

**Pedigree:** Family tree showing trait inheritance

**Symbols:**
- Circle = female
- Square = male
- Filled = affected
- Half-filled = carrier
- Horizontal line = mating
- Vertical line = offspring

**Determining inheritance pattern:**
- **Dominant:** appears in every generation
- **Recessive:** skips generations, affected children from unaffected parents

## Key Concepts

1. **Dominant alleles** mask recessive alleles
2. **Segregation:** alleles separate during gamete formation
3. **Independent assortment:** different genes assort independently
4. **Monohybrid F₂:** 3:1 phenotypic ratio
5. **Dihybrid F₂:** 9:3:3:1 phenotypic ratio
6. **Testcross:** reveals unknown genotype
7. **Product rule:** multiply probabilities (AND)
8. **Sum rule:** add probabilities (OR)
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: mendelTopic.id,
        front: 'Define genotype vs. phenotype.',
        back: 'Genotype: genetic makeup (allele combination, e.g., Aa). Phenotype: physical appearance or trait expression (e.g., tall).',
      },
      {
        topicId: mendelTopic.id,
        front: 'What is the Law of Segregation?',
        back: 'Each parent has two alleles for each gene. Alleles separate during gamete formation, so each gamete gets one allele. Fertilization restores pairs.',
      },
      {
        topicId: mendelTopic.id,
        front: 'What is the Law of Independent Assortment?',
        back: 'Genes for different traits assort independently during gamete formation. Applies to genes on different chromosomes. Exception: linked genes on same chromosome.',
      },
      {
        topicId: mendelTopic.id,
        front: 'What is the phenotypic ratio for a monohybrid cross (Aa × Aa)?',
        back: '3:1 (3 dominant phenotype : 1 recessive phenotype). Genotypic ratio is 1:2:1 (1 AA : 2 Aa : 1 aa).',
      },
      {
        topicId: mendelTopic.id,
        front: 'What is the phenotypic ratio for a dihybrid cross F₂?',
        back: '9:3:3:1. (9 both dominant, 3 first dominant/second recessive, 3 first recessive/second dominant, 1 both recessive).',
      },
      {
        topicId: mendelTopic.id,
        front: 'What is a testcross and what is its purpose?',
        back: 'Cross unknown genotype with homozygous recessive (tt). If all offspring show dominant phenotype → unknown is homozygous (TT). If 1:1 ratio → unknown is heterozygous (Tt).',
      },
      {
        topicId: mendelTopic.id,
        front: 'When do you use the product rule vs. sum rule in genetics?',
        back: 'Product rule (multiply): probability of independent events occurring together (AND). Sum rule (add): probability of alternative events (OR).',
      },
    ],
  })

  console.log('✓ Created topic: Mendelian Genetics')

  // Topic 2: Non-Mendelian Genetics
  const nonMendelTopic = await prisma.topic.upsert({
    where: { slug: 'non-mendelian-genetics' },
    update: {},
    create: {
      slug: 'non-mendelian-genetics',
      title: 'Non-Mendelian Inheritance',
      description: 'Incomplete dominance, codominance, multiple alleles, polygenic traits',
      order: 2,
      categoryId: heredityCategory.id,
      isPremium: false,
      textContent: `
# 🧬 Non-Mendelian Inheritance

## Incomplete Dominance

**Neither allele completely dominant**
- Heterozygote shows **intermediate phenotype**
- Blend of two alleles

**Example: Snapdragon flowers**
- RR = Red
- WW = White  
- RW = **Pink** (intermediate)
- F₂ ratio: 1 Red : 2 Pink : 1 White

**Note:** Genotypic ratio = Phenotypic ratio (1:2:1)

## Codominance

**Both alleles fully expressed**
- Heterozygote shows **both phenotypes simultaneously**
- No blending

**Example: ABO blood type**
- I^A I^A or I^A i = Type A
- I^B I^B or I^B i = Type B
- I^A I^B = **Type AB** (both A and B antigens)
- ii = Type O

**Example: Roan cattle**
- RR = Red coat
- WW = White coat
- RW = **Roan** (both red and white hairs)

## Multiple Alleles

**More than two alleles** exist for a gene in population
- Individual still has only two alleles

**ABO Blood Type:**
- Three alleles: I^A, I^B, i
- I^A and I^B are codominant
- Both dominant to i
- **6 possible genotypes:**
  - I^A I^A, I^A i → Type A
  - I^B I^B, I^B i → Type B
  - I^A I^B → Type AB
  - ii → Type O

## Polygenic Inheritance

**Multiple genes** control one trait
- Produces **continuous variation**
- Range of phenotypes

**Examples:**
- **Height:** controlled by many genes
- **Skin color:** controlled by 3-4 genes
- **Eye color:** multiple genes
- **Intelligence:** highly polygenic

**Characteristics:**
- Bell curve distribution
- Environmental influence common
- Quantitative trait

## Pleiotropy

**One gene affects multiple traits**

**Example: Sickle cell disease**
- Single gene mutation (hemoglobin)
- **Multiple effects:**
  - Sickle-shaped red blood cells
  - Anemia
  - Pain crises
  - Organ damage
  - Malaria resistance (heterozygotes)

**Example: PKU (phenylketonuria)**
- One enzyme deficiency
- Affects: brain development, skin pigmentation, hair color

## Epistasis

**One gene masks expression of another gene**
- Gene interaction

**Example: Labrador coat color**
- Gene E: deposits pigment
  - EE or Ee = pigment deposited
  - ee = no pigment (yellow)
- Gene B: determines color
  - BB or Bb = black
  - bb = brown

**Phenotypes:**
- B_E_ = Black (9/16)
- bbE_ = Brown (3/16)
- _ _ee = Yellow (4/16)

## Sex-Linked Traits

**Genes on sex chromosomes** (usually X)

**X-linked recessive:**
- More common in males (XY - only one X)
- Females need two copies (XX)

**Examples:**
- **Hemophilia:** blood clotting disorder
- **Color blindness:** red-green
- **Duchenne muscular dystrophy**

**Notation:**
- X^H = normal, X^h = hemophilia
- Males: X^H Y (normal) or X^h Y (affected)
- Females: X^H X^H (normal), X^H X^h (carrier), X^h X^h (affected)

## Environmental Effects

**Environment influences phenotype**

**Examples:**
- **Temperature:** Himalayan rabbit coat color
- **Nutrition:** height in humans
- **Light:** chlorophyll in plants
- **pH:** hydrangea flower color

## Key Concepts

1. **Incomplete dominance:** heterozygote is intermediate (blend)
2. **Codominance:** both alleles fully expressed
3. **Multiple alleles:** >2 alleles in population (ABO blood)
4. **Polygenic:** multiple genes control one trait (continuous variation)
5. **Pleiotropy:** one gene affects multiple traits
6. **Epistasis:** one gene masks another
7. **Sex-linked:** genes on sex chromosomes, often X-linked recessive
8. **Environment** can influence gene expression
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: nonMendelTopic.id,
        front: 'Incomplete dominance vs. codominance?',
        back: 'Incomplete dominance: heterozygote shows intermediate/blended phenotype (e.g., pink flowers). Codominance: both alleles fully expressed simultaneously (e.g., AB blood type).',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'What is the phenotypic ratio for incomplete dominance F₂?',
        back: '1:2:1 (same as genotypic ratio). Example: 1 Red : 2 Pink : 1 White. Each genotype has unique phenotype.',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'Explain ABO blood type inheritance.',
        back: 'Multiple alleles: I^A, I^B, i. I^A and I^B are codominant and both dominant to i. Type A (I^A I^A or I^A i), Type B (I^B I^B or I^B i), Type AB (I^A I^B), Type O (ii).',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'What is polygenic inheritance?',
        back: 'Multiple genes control one trait, producing continuous variation (range of phenotypes). Examples: height, skin color. Shows bell curve distribution.',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'What is pleiotropy?',
        back: 'One gene affects multiple phenotypic traits. Example: sickle cell allele affects blood cells, anemia, pain, organ damage, and malaria resistance.',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'What is epistasis?',
        back: 'One gene masks the expression of another gene (gene interaction). Example: Labrador coat color - E gene determines if pigment is deposited, B gene determines color.',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'Why are X-linked recessive traits more common in males?',
        back: 'Males have only one X chromosome (XY). One recessive allele causes the trait. Females need two recessive alleles (XX) to show the trait.',
      },
      {
        topicId: nonMendelTopic.id,
        front: 'Give examples of environmental effects on phenotype.',
        back: 'Temperature (Himalayan rabbit coat color), nutrition (height), light (chlorophyll production), pH (hydrangea flower color). Genotype provides potential, environment influences expression.',
      },
    ],
  })

  console.log('✓ Created topic: Non-Mendelian Inheritance')

  // Topic 3: Chromosomal Basis of Inheritance
  const chromTopic = await prisma.topic.upsert({
    where: { slug: 'chromosomal-inheritance' },
    update: {},
    create: {
      slug: 'chromosomal-inheritance',
      title: 'Chromosomal Basis of Inheritance',
      description: 'Linkage, recombination, and chromosomal disorders',
      order: 3,
      categoryId: heredityCategory.id,
      isPremium: false,
      textContent: `
# 🧬 Chromosomal Basis of Inheritance

## Chromosome Theory of Inheritance

**Key principles:**
1. Genes located on chromosomes
2. Chromosomes segregate during meiosis
3. Explains Mendel's laws at cellular level

## Linked Genes

**Genes on same chromosome** tend to be inherited together
- **Linkage:** genes close together on chromosome
- **Violates independent assortment**
- Linked genes don't assort independently

**Parental types:** Original allele combinations
**Recombinant types:** New allele combinations (from crossing over)

## Recombination and Gene Mapping

**Crossing over** can separate linked genes
- Occurs during Prophase I of meiosis
- Exchanges DNA between homologous chromosomes

**Recombination frequency:**
- % of offspring showing recombinant phenotypes
- Depends on distance between genes
- **1% recombination = 1 map unit (m.u.) or centimorgan (cM)**

**Closer genes:**
- Less likely to be separated by crossing over
- Lower recombination frequency
- More tightly linked

**Farther genes:**
- More likely to be separated
- Higher recombination frequency
- Less tightly linked

**Maximum recombination:** 50% (genes on different chromosomes or very far apart)

## Gene Mapping Example

If genes A and B show 20% recombination → **20 map units apart**

If three genes:
- A-B: 20% recombination
- B-C: 10% recombination  
- A-C: 30% recombination

**Gene order:** A----B--C (B is between A and C)

## Sex Determination

**Humans:**
- **XX = female** (homogametic)
- **XY = male** (heterogametic)
- Y chromosome has SRY gene → male development

**Sex ratio:** ~1:1 (50% male, 50% female)

**Other systems:**
- Birds: ZW female, ZZ male
- Bees: diploid females, haploid males
- Some reptiles: temperature determines sex

## X-Inactivation (Dosage Compensation)

**In female mammals:**
- One X chromosome randomly inactivated in each cell
- Forms **Barr body** (condensed, inactive X)
- Equalizes gene expression between XX and XY

**Example: Calico cats**
- Heterozygous for coat color gene on X
- Random X-inactivation creates patches
- Orange and black patches
- Only females can be calico (need two X chromosomes)

## Chromosomal Alterations

### Changes in Chromosome Number

**Polyploidy:** Extra complete sets of chromosomes
- **Triploidy (3n):** usually lethal in animals
- **Tetraploidy (4n):** common in plants (larger, hardier)

**Aneuploidy:** Missing or extra individual chromosomes
- **Monosomy (2n-1):** one chromosome missing
- **Trisomy (2n+1):** one extra chromosome

**Human aneuploidies:**
- **Down syndrome:** Trisomy 21 (3 copies chromosome 21)
- **Edwards syndrome:** Trisomy 18
- **Patau syndrome:** Trisomy 13
- **Turner syndrome:** 45, X (monosomy X)
- **Klinefelter syndrome:** 47, XXY

### Changes in Chromosome Structure

**Deletion:** Segment of chromosome lost
**Duplication:** Segment repeated
**Inversion:** Segment reversed
**Translocation:** Segment moved to another chromosome

**Effects:**
- Often harmful
- Can cause genetic disorders
- Can lead to evolution (duplications)

## Key Concepts

1. **Linked genes** on same chromosome don't assort independently
2. **Recombination frequency** indicates distance between genes
3. **1% recombination = 1 map unit**
4. **Sex determination:** XY system in humans
5. **X-inactivation:** one X randomly inactivated in female cells
6. **Aneuploidy:** abnormal chromosome number (monosomy, trisomy)
7. **Structural changes:** deletion, duplication, inversion, translocation
`,
    },
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: chromTopic.id,
        front: 'What are linked genes?',
        back: 'Genes located on the same chromosome that tend to be inherited together. They violate the law of independent assortment.',
      },
      {
        topicId: chromTopic.id,
        front: 'How does recombination frequency relate to gene distance?',
        back: '% recombinant offspring indicates distance between genes. 1% recombination = 1 map unit (centimorgan). Closer genes have lower recombination frequency.',
      },
      {
        topicId: chromTopic.id,
        front: 'What is the maximum recombination frequency and what does it mean?',
        back: '50%. Means genes are on different chromosomes or very far apart on same chromosome, so they assort independently.',
      },
      {
        topicId: chromTopic.id,
        front: 'How is biological sex determined in humans?',
        back: 'Sex chromosomes: XX = female, XY = male. SRY gene on Y chromosome triggers male development. Sex ratio is ~1:1.',
      },
      {
        topicId: chromTopic.id,
        front: 'What is X-inactivation and why does it occur?',
        back: 'In female mammals, one X chromosome is randomly inactivated in each cell (forms Barr body). Dosage compensation: equalizes gene expression between XX females and XY males.',
      },
      {
        topicId: chromTopic.id,
        front: 'Why are calico cats almost always female?',
        back: 'Coat color gene on X chromosome. Random X-inactivation creates orange and black patches. Males (XY) have only one X, so can\'t have both colors (except rare XXY males).',
      },
      {
        topicId: chromTopic.id,
        front: 'Define aneuploidy and give examples.',
        back: 'Abnormal number of individual chromosomes. Monosomy (2n-1): Turner syndrome (45,X). Trisomy (2n+1): Down syndrome (Trisomy 21), Klinefelter (47,XXY).',
      },
      {
        topicId: chromTopic.id,
        front: 'What are the four types of chromosomal structural changes?',
        back: 'Deletion (segment lost), Duplication (segment repeated), Inversion (segment reversed), Translocation (segment moved to different chromosome).',
      },
    ],
  })

  console.log('✓ Created topic: Chromosomal Basis of Inheritance')

  console.log('\n✅ Successfully seeded AP Biology - Unit 5: Heredity!')
  console.log('   Topics: 3')
  console.log('   Flashcards: 23')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
