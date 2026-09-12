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

**Passage-style problem.** A 14-year-old gymnast fractures her distal radius through the epiphyseal plate. Two findings from her workup: (1) radiographs confirm the fracture line runs through cartilage, not mineralized bone; (2) routine labs drawn later show mildly LOW serum calcium after she adopts a dairy-free diet with little sun exposure.

**Question 1 — Why is the epiphyseal plate cartilage rather than bone, and what does the injury threaten?** Long bones form by endochondral ossification: the plate is retained hyaline cartilage where chondrocytes proliferate (epiphyseal side) while older cartilage is replaced by bone (diaphyseal side) — this is how the radius lengthens. A fracture through the plate can disturb that proliferative zone and cause the injured radius to stop lengthening prematurely relative to the other arm.

**Question 2 — Predict the hormonal response to her low serum calcium.** Falling Ca is sensed by the parathyroid glands → PTH secretion rises. PTH (a) drives net bone resorption via osteoclast activation, (b) increases renal calcium reabsorption while promoting phosphate excretion, and (c) stimulates renal activation of vitamin D, boosting intestinal calcium absorption. Serum calcium is pulled back toward normal — partly at the skeleton's expense.

**Question 3 — Why does poor sun exposure make the problem worse?** Vitamin D synthesis begins in skin (UV-dependent) before liver and kidney hydroxylations. With little substrate, even high PTH cannot fully raise calcitriol, so intestinal absorption stays low and the burden shifts further onto bone resorption — in a growing athlete, exactly the wrong trade.

**Question 4 — If a drug mimicking calcitonin were given, what direction would each lab move?** Calcitonin inhibits osteoclasts: serum calcium would fall (or resist rising), and markers of bone resorption would decrease. Direction is the testable point: PTH raises serum Ca; calcitonin tones it down.`
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
            explanation: `Osteocytes sit in lacunae (small cavities between lamellae) and communicate with the central Haversian canal and each other through canaliculi. Choice A reverses the two terms — a classic trap. Trabeculae are the struts of SPONGY bone (no osteons), and lamellae are the concentric matrix rings themselves, not cell housing.`
          },
          {
            question: `The femur increases in length during childhood primarily through:`,
            options: [`Intramembranous ossification at the periosteum`, `Osteoclast resorption at the diaphysis`, `Cartilage proliferation and replacement at the epiphyseal plate (endochondral ossification)`, `Direct mitosis of osteocytes within lacunae`],
            correctAnswer: 2,
            explanation: `Long bones grow in length at the epiphyseal plate: chondrocytes divide on the epiphyseal side while cartilage is ossified on the diaphyseal side — endochondral ossification continuing after birth. Intramembranous ossification builds FLAT bones (and widens bones appositionally), resorption removes rather than adds bone, and osteocytes are post-mitotic cells locked in matrix.`
          },
          {
            question: `Why do injuries to the meniscus of the knee heal much more slowly than fractures of bone?`,
            options: [`Cartilage is avascular, so nutrients and repair cells arrive only by slow diffusion`, `Chondrocytes are more metabolically active than osteoblasts`, `Bone lacks a blood supply, forcing cartilage to donate nutrients`, `Fibrocartilage contains no cells capable of synthesis`],
            correctAnswer: 0,
            explanation: `Cartilage (including the fibrocartilage menisci) has no blood vessels; everything reaches chondrocytes by diffusion through the matrix, so repair is slow. Bone, by contrast, is richly vascularized (Haversian canals) and heals comparatively fast. Choice C inverts reality, choice B would speed rather than slow healing, and fibrocartilage does contain chondrocytes.`
          },
          {
            question: `Parathyroid hormone raises serum calcium through all of the following actions EXCEPT:`,
            options: [`Increasing osteoclast-mediated bone resorption`, `Increasing calcium reabsorption in the kidney`, `Promoting activation of vitamin D, enhancing intestinal calcium absorption`, `Directly stimulating osteoblasts to deposit calcium into bone matrix`],
            correctAnswer: 3,
            explanation: `Depositing calcium INTO bone would LOWER serum calcium — the opposite of PTH's job. PTH raises serum Ca via bone resorption (osteoclast activation), renal Ca reabsorption, and renal activation of vitamin D for gut absorption. (Nuance: PTH receptors sit on osteoblasts, which then signal osteoclasts — but the net PTH effect on sustained elevation is resorption, not deposition.)`
          },
          {
            question: `A postmenopausal woman's declining estrogen shifts bone remodeling balance. The expected skeletal consequence is:`,
            options: [`Excess osteoblast activity causing abnormally dense bone`, `Closure of the epiphyseal plates and loss of height by shortening bones`, `Net resorption exceeding formation, thinning trabeculae — osteoporosis`, `Conversion of compact bone into cartilage`],
            correctAnswer: 2,
            explanation: `Estrogen restrains osteoclasts; its decline lets resorption outpace formation, so trabecular struts thin and perforate — osteoporosis and fragility fractures. Abnormal densification (choice A) is the opposite process. Epiphyseal plates closed decades earlier at skeletal maturity (height loss in osteoporosis comes from vertebral compression, not bone shortening), and bone does not transform back into cartilage.`
          }
        ]
      }
    },
    {
      id: 'msk1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Compact bone = osteons: lamellae around a Haversian canal, osteocytes in lacunae connected by canaliculi; spongy bone = trabeculae with marrow, no osteons
- Matrix = collagen (tension) + hydroxyapatite (compression); osteoblasts build, osteoclasts resorb, osteocytes maintain — remodeling responds to mechanical load
- Endochondral ossification (cartilage model → bone) makes long bones; growth in length occurs at the epiphyseal plate until closure; intramembranous ossification (no cartilage) makes flat bones
- Cartilage is avascular and heals slowly; hyaline (joints, growth plates), elastic (ear, epiglottis), fibrocartilage (discs, menisci)
- PTH RAISES serum calcium: osteoclast resorption + renal Ca reabsorption + vitamin D activation → gut absorption; calcitonin "tones down" calcium by inhibiting osteoclasts
- Osteoporosis = chronic net resorption (age, estrogen loss, PTH excess) → thinned trabeculae and fragility fractures`
    }
  ]
};
