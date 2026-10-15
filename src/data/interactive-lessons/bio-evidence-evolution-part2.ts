export const bioEvidencePart2Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 2 of 7 — Anatomical and Developmental Homology**

---

| Section |
|---------|
| Homologous structures: one plan, many uses |
| Homologous versus analogous structures |
| Vestigial structures |
| Embryological homology |
| Arguing ancestry from structure |

> 🔑 **Key Concept:** **Homologous structures** are similar because they were inherited from a common ancestor, even when they now do different jobs. **Analogous structures** do similar jobs but evolved independently. Only homology is evidence of shared ancestry.

### One plan, many uses: the vertebrate forelimb

Compare the front limbs of four mammals. Their functions could hardly be more different, yet the **same bones appear in the same order**:

| Bone | Human arm | Cat foreleg | Whale flipper | Bat wing |
|------|-----------|-------------|---------------|----------|
| Upper arm | 1 humerus | 1 humerus | 1 humerus (short, thick) | 1 humerus |
| Forearm | Radius + ulna | Radius + ulna | Radius + ulna (flattened) | Radius + ulna (thin, long) |
| Wrist | Carpals | Carpals | Carpals | Carpals |
| Hand | Metacarpals + phalanges (grasping) | Metacarpals + phalanges (walking) | Metacarpals + phalanges (paddle) | Metacarpals + very long phalanges (wing support) |

An engineer designing each limb from scratch for grasping, running, swimming, and flying would not reuse one bone plan. The shared plan makes sense only if all four species **inherited** it from a common ancestor, and natural selection then **modified** the proportions in each lineage. That is Darwin's phrase "descent with modification" in one table.

### Homology in plants

Homology is not limited to animals. Many plant structures are **modified leaves** that develop from the same tissue at the same position on the stem:

| Structure | Function | Origin |
|-----------|----------|--------|
| Cactus spine | Defense, reduced water loss | Modified leaf |
| Pea tendril | Climbing support | Modified leaf (leaflet) |
| Venus flytrap trap | Capturing insects | Modified leaf |
| Onion bulb layers | Food storage | Modified leaves |

Biologists recognize homology by the **underlying structure, position, and development** of a part, not by what it does.
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s2-analogy',
      type: 'text' as const,
      content: `
### Homologous versus analogous structures

**Analogous structures** have similar functions and often similar shapes, but they are built differently and develop from different starting points. They arise through **convergent evolution**: unrelated lineages face similar selection pressures, and natural selection favors similar solutions.

| Feature | Homologous structures | Analogous structures |
|---------|----------------------|----------------------|
| Origin | Inherited from a common ancestor | Evolved independently in separate lineages |
| Internal structure | Same basic plan | Different plans |
| Function | May be the same or different | Usually the same |
| Process | Divergent evolution from a shared starting point | Convergent evolution toward similar solutions |
| Evidence of close ancestry? | **Yes** | **No** |

#### Classic analogous pairs

- **Bird wing and insect wing.** The bird wing is a forelimb with bones and feathers; the insect wing is a thin outgrowth of the exoskeleton with no bones at all.
- **Shark and dolphin body shape.** A shark is a fish and a dolphin is a mammal, yet both have streamlined bodies and fins. Fast swimming in open water selects for the same shape.
- **Cactus spines and rose prickles.** Cactus spines are modified leaves; the prickles on a rose stem are outgrowths of the stem's outer tissue.

#### A tricky case: bat wings and bird wings

Bat wings and bird wings are **homologous as forelimbs** (both contain a humerus, radius, ulna, and wrist bones inherited from a four-limbed ancestor) but **analogous as wings**. Bats and birds evolved flight separately: the bat wing is skin stretched over long finger bones, while the bird wing is feathers anchored to the arm bones and fused hand bones. Always ask, "Similar **as what**?"

> 🔑 **AP Connection:** When a question asks which trait is evidence of close relatedness, eliminate traits that match only in function. Shared internal plans, shared developmental origins, and shared DNA sequences count; shared jobs do not.
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Homologous or Analogous?** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The forelimb of a human, the flipper of a whale, and the wing of a bat perform different functions but contain the same set of bones in the same arrangement. What does this pattern best indicate?',
            options: [
              'The three species inherited the limb plan from a shared ancestor',
              'Similar environments caused each limb to form the same bones',
              'Each limb was shaped independently to meet the same demand',
              'Using limbs for new tasks rearranged one original set of bones'
            ],
            correctAnswer: 0,
            explanation: 'A shared internal plan underneath different functions is homology, the signature of inheritance from a common ancestor. The environments and tasks differ, so neither environment nor use explains the shared plan, and independent origin would not produce identical bone sets.'
          },
          {
            question: 'Sharks are fish and dolphins are mammals, yet both have streamlined bodies and fins for steering. Which statement best explains these similarities?',
            options: [
              'Dolphins and sharks inherited these features from a recent shared ancestor',
              'Dolphins evolved from sharks after sharks had colonized the open ocean',
              'Comparable selection pressures in open water produced matching body shapes',
              'Sharks and dolphins share these traits as homologous body structures'
            ],
            correctAnswer: 2,
            explanation: 'Fast swimming in open water favors a streamlined shape in any lineage, so natural selection produced convergent, analogous traits. Sharks and dolphins are not closely related, and mammals did not descend from sharks.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s4-vestigial',
      type: 'text' as const,
      content: `
### Vestigial structures

A **vestigial structure** is a reduced version of a structure that served an important function in an ancestor. It may have **little function** or a **different, minor function** today. The CED treats vestigial structures as a type of morphological homology: they are features shared through common ancestry.

| Organism | Vestigial structure | Full version in relatives or ancestors |
|----------|--------------------|-----------------------------------------|
| Whales | Small pelvic bones embedded in the body wall, not attached to the spine | Hip bones that support hind legs in land mammals |
| Pythons and boas | Tiny pelvic bones and claw-like spurs near the vent | Hind limbs in lizards and early snakes |
| Humans | Tailbone (coccyx), formed from fused vertebrae | A full tail in most other primates |
| Humans | Muscles that raise body hair (goosebumps) | Fluffing fur for warmth or display in other mammals |
| Ostriches and emus | Wings that cannot produce flight | Flight wings in other birds |
| Blind cave fish | Eyes that begin to form in the embryo, then degenerate | Functional eyes in surface-dwelling populations of the same species |

#### Why vestigial structures are strong evidence

1. **They only make sense historically.** A python has no use for hip bones to walk. Pelvic bones in a legless animal are explained by descent from legged ancestors.
2. **They match the predicted relatives.** Whale pelvic bones resemble mammal hip bones, not fish fins, which is consistent with whales descending from land mammals.
3. **They connect to the fossil record.** Fossil whales such as *Basilosaurus* had small but complete hind legs, an intermediate step between full legs and the tiny pelvis of living whales.

#### Vestigial does not mean useless

Reduced structures are often **co-opted** for new, minor roles. Whale pelvic bones anchor muscles used in reproduction; male pythons use their spurs during courtship; ostriches use their wings for balance and display. The point is that the structure is **reduced from its ancestral function**, not that it does nothing.

> 🔑 **AP Connection:** If a question offers "the structure is vestigial, so it has no function," treat it with suspicion. The defensible claim is that the structure is a reduced, inherited version of an ancestral feature.
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify the Evidence** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A cat foreleg and a whale flipper contain the same arm and hand bones; they are _____ structures.',
            options: ['homologous', 'analogous', 'vestigial', 'convergent']
          },
          {
            label: 'An insect wing and a bird wing both produce flight but are built from different tissues; they are _____ structures.',
            options: ['homologous', 'analogous', 'vestigial', 'ancestral']
          },
          {
            label: 'The tiny pelvic bones inside a whale\'s body wall are _____ structures.',
            options: ['analogous', 'convergent', 'vestigial', 'transitional']
          },
          {
            label: 'Similar shapes in unrelated lineages, such as sharks and dolphins, arise through _____ evolution.',
            options: ['divergent', 'convergent', 'directional', 'neutral']
          }
        ],
        correctAnswers: ['homologous', 'analogous', 'vestigial', 'convergent'],
        hint1: 'Same bones with different jobs points to inheritance from a shared ancestor.',
        hint2: 'Same job but different construction means the trait evolved separately in each lineage.',
        hint3: 'A reduced remnant of an ancestral feature is vestigial; independent evolution of similar traits is convergent.',
        explanation: 'Shared bone plans in cat legs and whale flippers are homologous. Insect and bird wings are analogous because they were built independently. Whale pelvic bones are vestigial remnants of hind-limb support, and analogous traits in unrelated lineages come from convergent evolution.'
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s6-embryology',
      type: 'text' as const,
      content: `
### Embryological homology

Some of the most striking homologies are visible only **during development**. Early embryos of fish, amphibians, reptiles, birds, and mammals all share:

| Embryonic structure | In fish | In humans |
|---------------------|---------|-----------|
| **Pharyngeal pouches** (and the arches between them) | Develop into gill slits and the arches that support gills | Contribute to the middle-ear cavity and auditory tube, tonsils, thymus, and parathyroid glands |
| **Post-anal tail** | Becomes the tail used for swimming | Regresses by about week 8, leaving the tailbone (coccyx) |
| **Notochord** (a flexible rod along the back) | Largely replaced by the vertebral column | Largely replaced by vertebrae; remnants form the soft centers of spinal discs |

Human embryos never have working gills. What they share with fish embryos is a **developmental starting plan**: a set of pharyngeal pouches that, in different lineages, are modified into gill supports or into parts of the ear and throat. That shared starting plan is inherited from a common vertebrate ancestor.

#### Why development preserves ancestry

Development is built by layering changes onto an existing program. A mutation that wrecks an early stage usually disrupts everything built on top of it, so early stages tend to be **conserved**, while later stages are more free to diverge. As a result, related species often look more alike as embryos than as adults.

#### Misconception: "embryos replay evolution"

A 19th-century idea held that embryos pass through the **adult forms** of their ancestors (a human embryo becoming a fish, then a reptile). That is wrong. Embryos resemble the **embryos** of related species, not the adults. A human embryo's pharyngeal pouches are like a fish embryo's pouches, not like an adult fish's gills.

### Arguing ancestry from structure: a worked example

**Prompt:** Using anatomical evidence, support the claim that whales share a more recent common ancestor with land mammals than with sharks.

**Step 1 — Claim.** Whales are more closely related to land mammals than to sharks.

**Step 2 — Evidence (structure, not function).**
- Whale flippers contain a humerus, radius, ulna, carpals, and phalanges, the same bone plan as a land mammal's forelimb; shark fins are supported by cartilage rods with no such plan.
- Whales have small pelvic bones, vestigial remnants of the hips of four-legged mammals.
- Whale embryos briefly develop hind-limb buds that then regress.

**Step 3 — Reasoning.** These traits are homologous: they are explained by inheritance from a four-legged mammal ancestor. The streamlined shape whales share with sharks is analogous, the product of convergent evolution in open water, so it does not indicate close ancestry.

Notice that the response sorts each trait into **homologous** or **analogous** before using it. That sorting is the core skill.
      `
    },
    {
      id: 'bio-evidence-evolution-p2-s7-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Practice — Using Structural Evidence** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Some pythons have small pelvic bones and claw-like spurs where hind legs would attach, yet they move without legs. Which conclusion is best supported?',
            options: [
              'Pythons are evolving toward functional legs once more',
              'Python ancestors had hind limbs',
              'Python embryos form these bones to help them crawl',
              'Disuse of the legs over many lifetimes shrank them'
            ],
            correctAnswer: 1,
            explanation: 'Reduced pelvic bones in a legless animal are a vestigial homology, best explained by descent from ancestors that had hind limbs. Evolution has no goal of regrowing legs, and traits are not shrunk by the disuse of individuals.'
          },
          {
            question: 'Early embryos of fish, chickens, and humans all develop pharyngeal pouches and a tail extending past the anus. Which statement is best supported?',
            options: [
              'Human embryos pass through an adult fish stage before becoming human',
              'All three embryos must breathe through gill slits early in development',
              'Embryos look alike as a result of developing in similar watery places',
              'The three lineages inherited one shared program of embryo development'
            ],
            correctAnswer: 3,
            explanation: 'Shared embryonic structures are developmental homologies inherited from a common vertebrate ancestor. Human embryos never have working gills or pass through adult fish forms, and the similarity reflects ancestry rather than surroundings.'
          },
          {
            question: 'A student claims that butterfly wings and bird wings show that butterflies and birds share a recent common ancestor. Which observation most directly weakens this claim?',
            options: [
              'The two wings are built from different tissues and structures',
              'Both kinds of wing generate lift by pushing air downward',
              'Butterflies and birds both live in many types of habitat',
              'Bird wings are many times larger than butterfly wings'
            ],
            correctAnswer: 0,
            explanation: 'Different construction and developmental origin show that the wings are analogous, so they say nothing about close ancestry. Shared function and shared habitats are what convergent traits look like, and a difference in size does not address origin.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p2-s8-summary',
      type: 'text' as const,
      content: `
### Part 2 Summary

| Concept | Key detail |
|---------|-----------|
| Homologous structures | Same underlying plan from a common ancestor; function may differ |
| Analogous structures | Same function, different plan; produced by convergent evolution |
| "Similar as what?" | Bat and bird wings are homologous as forelimbs, analogous as wings |
| Vestigial structures | Reduced, inherited remnants of ancestral features; may keep minor roles |
| Embryological homology | Pharyngeal pouches, post-anal tail, and notochord in all vertebrate embryos |
| Development and ancestry | Early stages are conserved, so embryos resemble other embryos, not ancestral adults |

**Up next → Part 3: Molecular Evidence — DNA and Protein Sequences**
      `
    }
  ]
};
