export const bioBiotechPart6Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p6-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 6 of 7 — AP Practice: Biotech Experiments and Data**

---

### Topics in This Part

| Section |
|---------|
| What FRQs Ask About Biotechnology |
| Scenario 1: Optimizing Transformation |
| Scenario 2: A Forensic Gel |
| Scenario 3: Testing Corn for a Transgene |

> 🔑 **Key Concept:** Biotechnology FRQs rarely ask you to recite steps. They hand you an experiment and data and ask you to **identify** variables and controls, **calculate**, **predict**, and **justify** with the mechanism behind each technique.

## What FRQs Ask About Biotechnology

AP Biology free-response questions include **interpreting and evaluating experimental results** (with or without graphing) and shorter questions on **scientific investigation** and **data analysis**. Biotechnology is a favorite context for all of them.

| Task verb | What a full-credit answer does | Biotech example |
|---|---|---|
| **Identify** | Names the item, no explanation needed | "Identify the dependent variable": number of colonies |
| **Describe** | Gives the relevant features or pattern | "Describe the trend": colonies rise, peak at 50 s, then fall |
| **Explain** | Gives the cause, the how or the why | Heat shock makes membranes more permeable to plasmid DNA |
| **Justify** | Supports a claim with evidence and reasoning | "Suspect 2 is excluded because the band at 3.1 kb has no match in the crime-scene lane" |
| **Predict** | States an expected result, often with a reason | "Fewer colonies, since longer heat damages cells" |
| **Calculate** | Shows the setup and the answer with units | Efficiency = 180 colonies ÷ 0.05 µg = 3,600 per µg |

### Experimental design vocabulary

| Term | Meaning |
|---|---|
| Independent variable | What the investigator deliberately changes |
| Dependent variable | What is measured in response |
| Negative control | A treatment expected to give **no** effect; detects false positives |
| Positive control | A treatment expected to give a **known** effect; shows the method works |
| Controlled variables | Conditions kept the same in every group |
| Replicates | Repeated trials that show whether a difference is consistent |`
    },
    {
      id: 'bio-biotechnology-p6-s2-scenario1',
      type: 'text' as const,
      content: `## Scenario 1: Optimizing Transformation

A student tests how the length of heat shock at 42°C affects transformation. Every tube gets the same cells and the same amount of a plasmid carrying an ampicillin-resistance gene. Each plate receives 0.05 µg of plasmid and contains ampicillin.

| Heat shock (s) | Colonies on ampicillin |
|---|---|
| 0 | 2 |
| 30 | 95 |
| 50 | 180 |
| 90 | 120 |
| 120 | 40 |

### Model answers

**Identify the independent and dependent variables.**
Independent: length of heat shock. Dependent: number of colonies on ampicillin plates (a measure of transformed cells).

**Calculate the transformation efficiency at 50 s.**
$$\\frac{180 \\text{ colonies}}{0.05\\ \\mu\\text{g}} = 3{,}600 \\text{ transformants per } \\mu\\text{g}$$

**Describe and explain the pattern.**
Colonies increase from 0 to 50 s and then decrease. A short heat shock briefly makes the membrane more permeable, so more cells take up plasmid. Longer exposure damages cells, for example by denaturing proteins, so fewer survive to form colonies.

**Propose a negative control and predict its result.**
Cells given **no plasmid**, heat-shocked for 50 s and plated on ampicillin. Predicted result: no colonies, showing that colonies in the experiment come from the plasmid and not from naturally resistant cells or contamination.

**Identify a limitation.**
Each time point has one plate. Replicate plates at each time would show whether the 50-s peak is consistent, and testing 40 s and 60 s would locate the optimum more precisely.`
    },
    {
      id: 'bio-biotechnology-p6-s3-mcq-scenario1',
      type: 'multiple-choice' as const,
      content: `**Scenario 1 Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following was a controlled variable in Scenario 1?',
            options: [
              'Length of the heat shock',
              'Number of colonies counted',
              'Plasmid amount per plate',
              'Transformation efficiency'
            ],
            correctAnswer: 2,
            explanation: 'Each plate received 0.05 µg of plasmid, so DNA amount was held constant. Heat-shock length was the independent variable, and colony number (and the efficiency calculated from it) was the dependent variable.'
          },
          {
            question: 'The student adds a plate of cells given the plasmid, heat-shocked for 50 s, and plated on LB without ampicillin. What would this plate most likely show?',
            options: [
              'A lawn, since untransformed cells can also grow there',
              'About 180 colonies, the same as the 50-s ampicillin plate',
              'No growth, since heat shock kills cells lacking the plasmid',
              'Only a few colonies, since ampicillin was needed for growth'
            ],
            correctAnswer: 0,
            explanation: 'Without ampicillin there is no selection, so the many untransformed cells grow along with transformed ones and form a lawn. This plate shows the cells survived the procedure but cannot be used to count transformants.'
          },
          {
            question: 'Which claim is best supported by the Scenario 1 data?',
            options: [
              'Heat shock has no effect on plasmid uptake by cells',
              'Longer heat shock steadily increases transformant numbers',
              'A heat shock near 50 s gave the most transformants',
              'Cells shocked for 120 s were killed by the heat'
            ],
            correctAnswer: 2,
            explanation: 'The 50-s plate had the most colonies of the five times tested. Colonies rise sharply from 0 s, so heat shock clearly matters, they fall after 50 s rather than rising steadily, and 40 colonies at 120 s show that many cells survived.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p6-s4-scenario2',
      type: 'text' as const,
      content: `## Scenario 2: A Forensic Gel

DNA from a crime scene and from three suspects is amplified at the same set of loci by PCR and run on a gel next to a ladder. The bands in each lane (sizes in kb):

| Lane | Bands (kb) |
|---|---|
| Ladder | 6.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.5 |
| Crime scene | 4.0, 2.5, 1.2 |
| Suspect 1 | 4.0, 2.5, 1.2 |
| Suspect 2 | 4.0, 3.1, 1.2 |
| Suspect 3 | 5.0, 2.5, 0.8 |

### Model answer (claim, evidence, reasoning)

**Claim:** Suspect 1 cannot be excluded as the source of the crime-scene DNA; Suspects 2 and 3 are excluded.

**Evidence:** Every band in the crime-scene lane (4.0, 2.5 and 1.2 kb) has a match in Suspect 1's lane. Suspect 2 has a 3.1-kb band and lacks the 2.5-kb band. Suspect 3 has 5.0- and 0.8-kb bands and lacks the 4.0- and 1.2-kb bands.

**Reasoning:** Fragments of the same length migrate the same distance, so matching band positions indicate matching fragment lengths at these loci. Because each person's fragment lengths are set by their DNA sequence, a band that does not match cannot come from the same person.

**Limitation:** Three bands is a small profile. Unrelated people, and especially relatives, can share some fragment lengths, so a stronger conclusion requires testing more loci and knowing how common each allele is in the population.

### Ranking fragments by migration
In the crime-scene lane, the **1.2-kb** fragment traveled farthest from the well and the **4.0-kb** fragment the least far. In every lane, order of distance is the reverse of order of size.`
    },
    {
      id: 'bio-biotechnology-p6-s5-input',
      type: 'input-boxes' as const,
      content: `**Scenario Calculations** 🧮`,
      exercise: {
        questions: [
          {
            question: 'Scenario 1: what is the transformation efficiency at 90 s, in transformants per µg?',
            answer: '2400',
            acceptableAnswers: ['2,400'],
            explanation: '120 colonies ÷ 0.05 µg = 2,400 transformants per µg.'
          },
          {
            question: 'Scenario 2: what is the size, in kb, of the fragment that traveled farthest in Suspect 3\'s lane?',
            answer: '0.8',
            explanation: 'The smallest fragment travels farthest; in Suspect 3\'s lane that is 0.8 kb.'
          },
          {
            question: 'Scenario 2: how many suspects are excluded as the source of the crime-scene DNA?',
            answer: '2',
            acceptableAnswers: ['two'],
            explanation: 'Suspects 2 and 3 each have bands that do not match the crime-scene lane.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p6-s6-scenario3',
      type: 'text' as const,
      content: `## Scenario 3: Testing Corn for a Transgene

Now you do the reasoning. A food-testing lab checks corn samples for a transgene that encodes an insecticidal protein. Each sample is run in a PCR with **two primer pairs**:

- **Pair T** amplifies part of the **transgene** (expected product: 300 bp).
- **Pair P** amplifies part of a **gene that all corn plants have** (expected product: 500 bp).

| Sample | 500-bp band (corn gene) | 300-bp band (transgene) |
|---|---|---|
| Corn A | Present | Present |
| Corn B | Present | Absent |
| Corn C | Absent | Absent |
| Certified transgenic corn | Present | Present |
| Water (no DNA) | Absent | Absent |

Think about the role of each row before answering:
- Which rows are controls, and what does each one check?
- What does the 500-bp band tell you about a sample, even though it says nothing about the transgene?
- Why can't Corn C be classified from these results?`
    },
    {
      id: 'bio-biotechnology-p6-s7-mcq-scenario3',
      type: 'multiple-choice' as const,
      content: `**Scenario 3 Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the purpose of primer pair P, which amplifies a gene found in all corn?',
            options: [
              'It removes plant DNA so only the transgene is copied',
              'It shows that the sample contained usable corn DNA',
              'It increases the amount of transgene product made',
              'It identifies which corn samples are transgenic'
            ],
            correctAnswer: 1,
            explanation: 'Every real corn sample with intact DNA should give the 500-bp band, so its presence shows that extraction and PCR worked. Only pair T distinguishes transgenic from non-transgenic corn.'
          },
          {
            question: 'What is the best interpretation of the Corn C result?',
            options: [
              'Corn C is not transgenic, since it has no 300-bp band',
              'Corn C is transgenic, but its transgene is not expressed',
              'Corn C cannot be classified, since its DNA did not amplify',
              'Corn C was contaminated with DNA from the water sample'
            ],
            correctAnswer: 2,
            explanation: 'Without the 500-bp band, there is no evidence that Corn C\'s DNA was amplifiable at all, so the missing transgene band could be a failed reaction. PCR detects DNA, not expression, and the water lane is clean.'
          },
          {
            question: 'The lab redesigns pair T so its primers bind 900 bp apart instead of 300 bp apart. How would the transgene band from Corn A change on the gel?',
            options: [
              'It would appear closer to the wells than before',
              'It would appear farther from the wells than before',
              'It would stay in the same place but look fainter',
              'It would vanish, since PCR cannot copy 900 bp'
            ],
            correctAnswer: 0,
            explanation: 'The primers set the ends of the product, so the new product is about 900 bp. Larger fragments move more slowly through the gel and stay closer to the wells.'
          }
        ]
      }
    }
  ]
};
