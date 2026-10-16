export const bioPhylogeneticsCladisticsPart2Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl2-intro',
      type: 'text' as const,
      content: `# Building Cladograms

**Part 2 of 7 — Phylogenetics & Cladistics**

A **cladogram** is a branching diagram that groups organisms by **shared derived characters**. Building one from a table of traits — and reading one that someone else built — is a core AP Biology skill.

### Key terminology

- **Character** — any heritable trait that can be compared across taxa (e.g., vertebral column, feathers, mammary glands, a DNA base at one position)
- **Ancestral character** — a trait already present in the common ancestor of the whole group, so it is usually shared with the out-group
- **Derived character** — a trait that changed within the group being studied; it can be a trait that was **gained** (feathers) or one that was **lost** (legs in snakes)
- **Shared derived character** — a derived trait present in two or more lineages, inherited from the common ancestor in which it first appeared. These are the informative characters for building trees and cladograms.

> 🦴 **Example:** Having a vertebral column is an **ancestral** character for mammals (shared with fish, amphibians, reptiles). Having **hair/fur** is a **derived** character that unites mammals specifically.

### Why ancestral characters don't help

A trait that every taxon in the analysis has — including the out-group — was present before any of the splits you are trying to sort out, so it cannot tell you which ingroup taxa are closest relatives.`
    },
    {
      id: 'phyl2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Characters** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which type of character is most useful for building a cladogram?',
            options: [
              'A derived trait shared by two or more lineages',
              'An ancestral trait shared by every lineage and the out-group',
              'A similar trait that evolved independently in two lineages',
              'A derived trait found in only one of the lineages studied'
            ],
            correctAnswer: 0,
            explanation: 'Shared derived characters indicate that taxa inherited a new trait from a common ancestor, so they reveal which lineages belong together. Ancestral traits are shared too broadly to sort the ingroup, a trait found in one lineage groups nothing, and independently evolved similarities point to relationships that do not exist.'
          },
          {
            question: 'A student notes that both sharks and dolphins have streamlined bodies and fins. Should this shared trait be used to group them together on a cladogram?',
            options: [
              'No, because the similarity arose by convergent evolution',
              'Yes, because any shared body form shows common ancestry',
              'Yes, because a streamlined body is a shared derived trait of both',
              'No, because cladograms can use only molecular evidence'
            ],
            correctAnswer: 0,
            explanation: 'Sharks (cartilaginous fish) and dolphins (mammals) evolved similar body shapes independently under similar selective pressures in water. These are analogous structures, not inherited from a common ancestor that had them, so using them would group unrelated lineages. Cladograms can be built from morphological as well as molecular data.'
          }
        ]
      }
    },
    {
      id: 'phyl2-outgroups',
      type: 'text' as const,
      content: `## Out-groups & Building the Cladogram

### What is an out-group?

An **out-group** is a taxon that diverged *before* the group being studied (the **ingroup**) diversified. It is the lineage least closely related to the rest of the organisms in the analysis, and it serves as a reference point.

### Why do we need an out-group?

The out-group lets us decide which state of each character is ancestral and which is derived:

1. If the out-group shares a trait with some ingroup members → the trait is likely **ancestral**
2. If only some ingroup members have the trait (and the out-group does not) → the trait is likely **derived**

> 🐸 **Example:** When studying mammals, a frog can serve as an out-group. Because the frog lacks hair, we infer that hair is a **derived** character that evolved in the ancestor of the mammals.

### Steps to build a cladogram

1. **Select taxa** to include (ingroup) and an appropriate out-group
2. **List characters** and record each taxon's state (present/absent; 1/0)
3. **Use the out-group** to sort ancestral states from derived states
4. **Group taxa** by shared derived characters
5. **Draw the cladogram** — taxa sharing the most derived characters are grouped most closely
6. **Mark character changes** on branches with hash marks or labels

### Character matrix example

| Character | Out-group (Frog) | Mouse | Cat | Dog |
|---|---|---|---|---|
| Vertebral column | ✅ | ✅ | ✅ | ✅ |
| Hair/fur | ❌ | ✅ | ✅ | ✅ |
| Retractable claws | ❌ | ❌ | ✅ | ❌ |
| Carnassial teeth | ❌ | ❌ | ✅ | ✅ |

From this matrix: the vertebral column is ancestral (the out-group has it). Hair unites all three mammals. Carnassial teeth unite cat + dog. Retractable claws appear only in the cat, so they do not group the cat with anyone.

**The resulting cladogram:** (Frog, (Mouse, (Cat, Dog))). Mark "hair" on the branch leading to the three mammals, "carnassial teeth" on the branch leading to cat + dog, and "retractable claws" on the cat's own branch.`
    },
    {
      id: 'phyl2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Out-groups & Cladogram Construction** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the primary purpose of including an out-group when constructing a cladogram?',
            options: [
              'To tell ancestral character states apart from derived ones',
              'To make the tree look more complete by adding extra species',
              'To represent the oldest living species included in the study',
              'To act as the direct ancestor of every taxon in the ingroup'
            ],
            correctAnswer: 0,
            explanation: 'The out-group is the reference for deciding character states: traits shared with the out-group are inferred to be ancestral, while traits found only in the ingroup are inferred to be derived. The out-group is a separate lineage, not the ancestor of the ingroup, and it need not be the oldest species — it only needs to have diverged before the ingroup did.'
          },
          {
            question: 'In the character matrix above, which character is a shared derived character uniting cat and dog but not mouse?',
            options: [
              'Carnassial teeth',
              'Vertebral column',
              'Hair/fur',
              'Retractable claws'
            ],
            correctAnswer: 0,
            explanation: 'Carnassial teeth are present in both cat and dog but absent in the mouse and the out-group (frog), so they are a shared derived character that places cat and dog together. Retractable claws occur only in the cat, hair is shared by all three mammals, and the vertebral column is ancestral.'
          }
        ]
      }
    },
    {
      id: 'phyl2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Cladogram Construction** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A trait present in the common ancestor of the whole group, and usually in the out-group, is a(n)', options: ['ancestral character', 'derived character', 'shared derived character', 'analogous character'] },
          { label: 'A new trait inherited by two or more taxa from the ancestor in which it first appeared is a(n)', options: ['shared derived character', 'shared ancestral character', 'analogous structure', 'vestigial structure'] },
          { label: 'The reference taxon used to decide which traits are ancestral is the', options: ['out-group', 'ingroup', 'sister taxon', 'root'] },
          { label: 'A cladogram groups organisms based on', options: ['shared derived characters', 'overall physical similarity', 'similar body size and shape', 'shared geographic range'] }
        ],
        correctAnswers: ['ancestral character', 'shared derived character', 'out-group', 'shared derived characters'],
        hint1: 'Ancestral traits are widespread; derived traits arose more recently and are restricted to particular lineages.',
        hint2: 'Shared derived characters are the evidence that defines groups on a cladogram.',
        hint3: 'The out-group is chosen because it diverged before the ingroup and helps us distinguish old vs. new traits.',
        explanation: 'Ancestral characters are broadly shared and do not sort the ingroup. Shared derived characters are the key evidence for building cladograms. The out-group serves as the reference for deciding which traits are ancestral and which are derived.'
      }
    },
    {
      id: 'phyl2-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Applying Cladistic Principles** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'If the out-group possesses a trait and some ingroup members also have it, the trait is likely', options: ['ancestral', 'derived', 'convergent', 'analogous'] },
          { label: 'Snakes lack legs, but their ancestors had them. For a cladogram of reptiles, leglessness is a(n)', options: ['derived character', 'ancestral character', 'analogous character', 'out-group character'] },
          { label: 'Similar traits that evolved independently in unrelated lineages are called', options: ['analogous structures', 'homologous structures', 'shared derived characters', 'ancestral characters'] }
        ],
        correctAnswers: ['ancestral', 'derived character', 'analogous structures'],
        hint1: 'If the out-group also has the trait, it likely evolved before the ingroup diversified.',
        hint2: 'A derived character can be a trait that was lost, not only one that was gained.',
        hint3: 'Convergent evolution produces similar-looking traits that are NOT evidence of common ancestry.',
        explanation: 'Traits shared with the out-group are ancestral. The loss of legs happened within the reptile lineage, so leglessness is a derived character shared by snakes. Analogous structures arise through convergent evolution and mislead cladistic analysis if treated as shared derived characters.'
      }
    }
  ]
};
