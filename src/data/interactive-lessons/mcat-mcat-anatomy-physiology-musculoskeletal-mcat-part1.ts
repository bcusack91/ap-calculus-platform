export const mcatMskPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-musculoskeletal-mcat',
  sections: [
    {
      id: 'msk1-intro',
      type: 'text' as const,
      content: `# Musculoskeletal System — Deep Dive

**Part 1 of 4 — Bone, Cartilage & Calcium Homeostasis**

### What Bone Is For

Beyond support and locomotion (levers for muscles), bone protects organs, houses **hematopoietic marrow**, and serves as the body's **calcium and phosphate reservoir** — that last role makes bone an endocrine target organ, and the MCAT loves it.

### Bone Architecture

- **Compact (cortical) bone**: the dense outer shell, organized into **osteons** (Haversian systems). Each osteon is a set of concentric **lamellae** of mineralized matrix around a central **Haversian canal** carrying blood vessels and nerves. **Osteocytes** — mature bone cells — sit trapped in small cavities called **lacunae**, connected to each other and to the canal by tiny channels (**canaliculi**) through which nutrients and signals pass.
- **Spongy (cancellous) bone**: a lattice of **trabeculae** aligned along stress lines, found at bone ends and interiors; its spaces hold red marrow. No osteons — nutrients diffuse from marrow.

The matrix itself is roughly organic **collagen** (tensile strength, flexibility) plus inorganic **hydroxyapatite** (calcium phosphate crystals — compressive strength). Collagen without mineral is rubbery; mineral without collagen is brittle.

### The Cell Trio and Remodeling

| Cell | Job | Memory hook |
|------|-----|-------------|
| Osteoblast | BUILDS new matrix, then may become an osteocyte | Blast = build |
| Osteocyte | Maintains matrix, senses mechanical stress | Mature resident |
| Osteoclast | Resorbs (breaks down) bone, releasing Ca and phosphate | Clast = cleave |

Bone is continuously **remodeled**: osteoclasts carve, osteoblasts refill. Mechanical loading tips the balance toward building (why exercise strengthens bone); disuse, age, and estrogen loss tip it toward resorption.

### Making Bone: Two Ossification Routes

- **Endochondral ossification**: a hyaline **cartilage model** is progressively replaced by bone — the route for **long bones** (femur, humerus). Growth in LENGTH continues at the **epiphyseal (growth) plate**, where cartilage proliferates on the epiphyseal side and is ossified on the diaphyseal side. At maturity the plate closes (becomes the epiphyseal line) and lengthening stops.
- **Intramembranous ossification**: mesenchyme differentiates directly into bone with no cartilage intermediate — **flat bones** of the skull, and the clavicle.

### Cartilage

Cartilage matrix is secreted by **chondrocytes** and is **avascular** — nutrients arrive by diffusion, which is why cartilage injuries heal slowly. Three types:

- **Hyaline**: most common; articular surfaces, growth plates, trachea, fetal skeleton
- **Elastic**: flexible with elastin; outer ear, epiglottis
- **Fibrocartilage**: dense collagen, shock absorber; intervertebral discs, menisci, pubic symphysis

### Calcium Homeostasis — The Highest-Yield Loop

Serum calcium is tightly defended (nerve and muscle excitability depend on it):

**PTH (parathyroid hormone) RAISES serum calcium** when it falls:
1. Stimulates **osteoclast** activity (indirectly, via osteoblast signaling) → bone resorption releases Ca
2. Increases **renal Ca reabsorption** (while dumping phosphate)
3. Activates **vitamin D** (final hydroxylation to calcitriol in the kidney) → increased **intestinal Ca absorption**

**Calcitonin (from thyroid C cells) LOWERS serum calcium** — it "tones down" calcium by inhibiting osteoclasts. It is a minor player in adult humans, but its DIRECTION is tested constantly.

**Osteoporosis link**: chronically elevated resorption (age, postmenopausal estrogen decline, prolonged PTH excess) thins trabeculae and cortical bone → fragility fractures. Note the paradox for Part 4: continuous high PTH resorbs bone, even though calcium is being "defended" in serum.`
    },
    {
      id: 'msk1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Growth-Plate and Calcium Two-Parter

**Problem 1.** A 14-year-old gymnast fractures her distal radius through the epiphyseal plate. Radiographs confirm the fracture line runs through cartilage, not mineralized bone.

- **(a)** Which ossification route builds the radius?
- **(b)** Why is the epiphyseal plate cartilage rather than bone?
- **(c)** What does a fracture through the plate threaten?

**(a) Ossification route.** Long bones such as the radius form by endochondral ossification: a hyaline cartilage model is progressively replaced by bone.

**(b) Why cartilage.** The plate is retained hyaline cartilage where chondrocytes proliferate (epiphyseal side) while older cartilage is replaced by bone (diaphyseal side). This is how the radius lengthens.

**(c) What is at risk.** A fracture through the plate can disturb that proliferative zone and cause the injured radius to stop lengthening prematurely relative to the other arm.

**Problem 2.** Routine labs drawn later show the same gymnast's serum calcium is mildly LOW after she adopts a dairy-free diet with little sun exposure.

- **(a)** Which hormone rises in response, and through which three actions does it raise serum calcium?
- **(b)** Why does poor sun exposure make the problem worse?
- **(c)** If a drug mimicking calcitonin were given, which way would serum calcium and bone-resorption markers move?

**(a) The PTH response.** The parathyroids sense falling Ca and secrete more PTH. PTH drives osteoclast bone resorption, raises renal Ca reabsorption while promoting phosphate excretion, and activates vitamin D in the kidney for gut absorption. Serum calcium recovers, partly at the skeleton's expense.

**(b) The vitamin D bottleneck.** Vitamin D synthesis begins in skin (UV-dependent) before liver and kidney hydroxylations. With little substrate, even high PTH cannot fully raise calcitriol, so intestinal absorption stays low and the burden shifts further onto bone resorption — in a growing athlete, exactly the wrong trade.

**(c) Calcitonin's direction.** Calcitonin inhibits osteoclasts: serum calcium would fall (or resist rising), and markers of bone resorption would decrease. Direction is the testable point: PTH raises serum Ca; calcitonin tones it down.`
    },
    {
      id: 'msk1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bone, Cartilage & Calcium** 🎯`,
      exercise: {
        questions: [
          {
            question: `Within an osteon, mature osteocytes reside in spaces called ______ and exchange nutrients through channels called ______.`,
            options: [`Canaliculi; lacunae`, `Lacunae; canaliculi`, `Trabeculae; lamellae`, `Haversian canals; trabeculae`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Osteocytes sit in lacunae (small cavities between lamellae) and communicate with the central Haversian canal and each other through canaliculi. Swapping the two terms is a classic trap. Trabeculae are the struts of SPONGY bone (no osteons), and lamellae are the concentric matrix rings themselves, not cell housing.`
          },
          {
            question: `The femur increases in length during childhood primarily through:`,
            options: [`Intramembranous ossification at the periosteum`, `Osteoclast resorption and remodeling of the diaphysis`, `Endochondral ossification at the epiphyseal plate`, `Direct mitosis of osteocytes within lacunae`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Long bones grow in length at the epiphyseal plate: chondrocytes divide on the epiphyseal side while cartilage is ossified on the diaphyseal side — endochondral ossification continuing after birth. Intramembranous ossification builds FLAT bones (and widens bones appositionally), resorption removes rather than adds bone, and osteocytes are post-mitotic cells locked in matrix.`
          },
          {
            question: `Why do injuries to the meniscus of the knee heal much more slowly than fractures of bone?`,
            options: [`Cartilage is avascular, so repair relies on slow diffusion`, `Chondrocytes are more metabolically active than osteoblasts`, `Bone lacks a blood supply, forcing cartilage to donate nutrients`, `Fibrocartilage contains no cells capable of synthesizing matrix`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Cartilage (including the fibrocartilage menisci) has no blood vessels; everything reaches chondrocytes by diffusion through the matrix, so repair is slow. Bone, by contrast, is richly vascularized (Haversian canals) and heals comparatively fast. Saying bone lacks a blood supply inverts reality, chondrocytes more active than osteoblasts would speed rather than slow healing, and fibrocartilage does contain chondrocytes.`
          },
          {
            question: `Parathyroid hormone raises serum calcium through all of the following actions EXCEPT:`,
            options: [`Increasing osteoclast-mediated resorption of bone matrix`, `Increasing calcium reabsorption in the distal renal tubule`, `Promoting activation of vitamin D, enhancing intestinal calcium absorption`, `Directly stimulating osteoblasts to deposit calcium into bone matrix`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Depositing calcium INTO bone would LOWER serum calcium — the opposite of PTH's job. PTH raises serum Ca via bone resorption (osteoclast activation), renal Ca reabsorption, and renal activation of vitamin D for gut absorption. (Nuance: PTH receptors sit on osteoblasts, which then signal osteoclasts — but the net PTH effect on sustained elevation is resorption, not deposition.)`
          },
          {
            question: `A postmenopausal woman's declining estrogen shifts bone remodeling balance. The expected skeletal consequence is:`,
            options: [`Excess osteoblast activity causing abnormally dense bone`, `Epiphyseal plate closure that shortens the long bones`, `Net resorption exceeding formation, thinning the trabeculae`, `Conversion of compact bone back into hyaline cartilage`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Estrogen restrains osteoclasts; its decline lets resorption outpace formation, so trabecular struts thin and perforate — osteoporosis and fragility fractures. Abnormal densification from excess osteoblast activity is the opposite process. Epiphyseal plates closed decades earlier at skeletal maturity (height loss in osteoporosis comes from vertebral compression, not bone shortening), and bone does not transform back into cartilage.`
          }
        ]
      }
    },
    {
      id: 'msk1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Osteon architecture.** Compact bone is osteons: lamellae round a Haversian canal, osteocytes in lacunae linked by canaliculi.
- **Build, maintain, resorb.** Osteoblasts build, osteoclasts resorb; age and estrogen loss tip remodeling toward resorption (osteoporosis).
- **Two ossification routes.** Endochondral replaces a cartilage model (long bones, epiphyseal plate); intramembranous starts from mesenchyme (flat bones).
- **PTH raises calcium.** PTH drives osteoclast bone resorption, renal Ca reabsorption and vitamin D activation for gut absorption.

**Common traps**

- **Lacunae vs. canaliculi.** Osteocytes sit in lacunae; canaliculi are the channels linking them, so do not swap the terms.
- **PTH depositing bone.** Building bone would lower serum calcium; PTH's net effect on bone is resorption, which releases Ca.
- **Calcitonin's direction.** Calcitonin LOWERS serum calcium by inhibiting osteoclasts; it is minor in adults, but its direction is tested.
- **Cartilage healing fast.** Cartilage is avascular and fed by diffusion, so it heals slowly; vascular bone heals faster.`
    }
  ]
};
