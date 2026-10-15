export const bioBiotechPart3Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p3-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 3 of 7 — PCR: Amplifying DNA**

---

### Topics in This Part

| Section |
|---------|
| What PCR Needs |
| The Three Steps of a Cycle |
| The Math of Doubling |
| Primers, Controls and Uses |

> 🔑 **Key Concept:** **During polymerase chain reaction (PCR), DNA fragments are amplified** (EK 6.8.A.1). PCR copies one chosen region of DNA over and over in a test tube, doubling the number of copies with every cycle, so a few molecules become billions in a few hours.

## What PCR Needs

PCR is DNA replication carried out in a tube, so it needs the same raw materials that replication does in a cell.

| Ingredient | Role | Link to cellular replication |
|---|---|---|
| **Template DNA** | The DNA that contains the target region | The parent strands |
| **Two primers** | Short single-stranded DNA pieces that base-pair at the two ends of the target | In cells, short RNA primers are laid down |
| **DNA nucleotides** | Building blocks of the new strands | Same building blocks |
| **Heat-tolerant DNA polymerase** | Adds nucleotides to the 3′ end of each primer | DNA polymerase, which also needs a primer's free 3′ end |
| **Heating and cooling** | Separates the strands, then lets primers bind | No equivalent: cells use helicase instead of heat |

Why primers? DNA polymerase cannot start a new strand from nothing. It can only **add nucleotides to an existing 3′ end**. The primers provide those 3′ ends, and their positions decide exactly which stretch of DNA gets copied.`
    },
    {
      id: 'bio-biotechnology-p3-s2-steps',
      type: 'text' as const,
      content: `## The Three Steps of a Cycle

The CED describes PCR as three steps: **denaturing** DNA, **annealing** primers to the original strands, and **extending** the new DNA molecule.

| Step | What happens | Bonds affected |
|---|---|---|
| **1. Denaturation** | Heating separates the two strands of the template | Hydrogen bonds between bases break |
| **2. Annealing** | On cooling, primers base-pair with their complementary sequences on each single strand | New hydrogen bonds form between primer and template |
| **3. Extension** | DNA polymerase adds nucleotides to each primer's 3′ end, building a new strand 5′→3′ | New covalent bonds form in the backbone |

One run of these three steps is one **cycle**, and a PCR repeats the cycle many times.

### Why the polymerase must tolerate heat
The heating step is hot enough to **denature** most proteins: their hydrogen bonds and other weak interactions break and they lose their shape. A human DNA polymerase would be destroyed in the first cycle. PCR therefore uses a polymerase from a bacterium that lives in hot springs, whose structure stays functional at high temperature.

This is a clear case of **structure determining function**, and of evolution: the enzyme's stability is an adaptation to the bacterium's environment that biotechnology borrowed.

(The exact temperatures, times and enzyme names used in PCR are details beyond the scope of the AP exam.)`
    },
    {
      id: 'bio-biotechnology-p3-s3-mcq-steps',
      type: 'multiple-choice' as const,
      content: `**Concept Check — The PCR Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In PCR, what is the purpose of heating the reaction at the start of each cycle?',
            options: [
              'To break the hydrogen bonds between the two template strands',
              'To activate the primers so they can bind to the template',
              'To break the phosphodiester bonds in the DNA backbone',
              'To speed up DNA polymerase as it adds new nucleotides'
            ],
            correctAnswer: 0,
            explanation: 'High heat separates the double helix by breaking the hydrogen bonds between complementary bases. The covalent backbone stays intact, primers bind during the cooler annealing step, and heat is not what drives the polymerase to add nucleotides.'
          },
          {
            question: 'A student replaces the heat-stable polymerase with a polymerase purified from human cells. What result is most likely?',
            options: [
              'Copies form only in the first cycle and then stop',
              'Copies form normally, since all DNA polymerases are alike',
              'Copies form faster, since the human enzyme matches human DNA',
              'Copies form, but each one carries RNA nucleotides instead'
            ],
            correctAnswer: 0,
            explanation: 'The first heating step denatures the human enzyme, so at most one round of synthesis (if any) happens before it stops working. Heat stability, not the DNA source, is what matters here.'
          },
          {
            question: 'Why does PCR require primers at all?',
            options: [
              'Primers break the hydrogen bonds that hold the template together',
              'Polymerase can only add nucleotides to an existing 3′ end',
              'Primers supply the nucleotides that polymerase joins together',
              'Polymerase uses the primers as an energy source for synthesis'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase cannot begin a strand on its own; it extends a free 3′ end, which the primer provides. Heat separates the strands, and the dNTPs supply both the nucleotides and the energy for each new bond.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p3-s4-math',
      type: 'text' as const,
      content: `## The Math of Doubling

Under ideal conditions, every double-stranded copy of the target is copied once per cycle, so the number of copies **doubles** each cycle:

$$N = N_0 \\times 2^{n}$$

where $N_0$ is the starting number of target copies and $n$ is the number of cycles.

### Worked Example 1: from one molecule
Starting from 1 copy, after 30 cycles:
$$N = 1 \\times 2^{30} = 1{,}073{,}741{,}824 \\approx 1.07 \\times 10^{9}$$
About a billion copies, enough to see as a bright band on a gel.

### Worked Example 2: from a small sample
Starting from 100 copies, after 10 cycles:
$$N = 100 \\times 2^{10} = 100 \\times 1{,}024 = 102{,}400$$

### Worked Example 3: working backward
How many cycles turn 500 copies into 64,000 copies?
$$\\frac{64{,}000}{500} = 128 = 2^{7} \\quad \\Rightarrow \\quad 7 \\text{ cycles}$$

### Why the product is the region between the primers
Each new strand starts at a primer, and each copy then serves as a template in the next cycle. After a few cycles, copies that begin at one primer and end at the other vastly outnumber everything else, so the final product is almost entirely the region **between the two primers**.

### Why real reactions level off
The doubling formula is an ideal. After many cycles the reaction slows and reaches a **plateau** because primers and nucleotides are used up and the polymerase cannot keep pace with so many templates. Exponential growth lasts only while ingredients are in excess, the same logic as population growth reaching a carrying capacity.`
    },
    {
      id: 'bio-biotechnology-p3-s5-input',
      type: 'input-boxes' as const,
      content: `**PCR Calculations** 🧮

Assume perfect doubling each cycle. Enter numbers only (no commas needed).`,
      exercise: {
        questions: [
          {
            question: 'A reaction starts with 1 copy of a target. How many copies are present after 5 cycles?',
            answer: '32',
            explanation: '1 × 2^5 = 32 copies.'
          },
          {
            question: 'A reaction starts with 20 copies of a target. How many copies are present after 8 cycles?',
            answer: '5120',
            acceptableAnswers: ['5,120'],
            explanation: '20 × 2^8 = 20 × 256 = 5,120 copies.'
          },
          {
            question: 'How many cycles are needed to turn 50 copies into 3,200 copies?',
            answer: '6',
            acceptableAnswers: ['six'],
            explanation: '3,200 ÷ 50 = 64 = 2^6, so 6 cycles.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p3-s6-uses',
      type: 'text' as const,
      content: `## Primers, Controls and Uses

### Primers define the target
The two primers bind to **opposite strands** at the two ends of the target, with their 3′ ends pointing **toward each other**. Polymerase extends each primer across the target region. Change the primer sequences and you change which region is copied. Because a sequence of about 20 nucleotides is very unlikely to occur by chance elsewhere in a genome, well-designed primers bind only at the intended site.

### Controls in a PCR experiment

| Control | What is in it | What it checks |
|---|---|---|
| **Negative control** | Every ingredient except template DNA | Contamination: a band here means stray DNA got into the reagents |
| **Positive control** | A template known to contain the target | That the reagents and cycling program work |

Because PCR amplifies even a single stray molecule into billions, contamination is the most common source of false results.

### What PCR is used for

| Use | How PCR helps |
|---|---|
| Diagnosing infections | Detects a pathogen's genetic material; for RNA viruses, the RNA is first copied into DNA by reverse transcriptase |
| Forensics | Amplifies DNA from a tiny sample, such as a hair root or a drop of blood |
| Genetic testing | Copies a gene region so it can be cut, run on a gel or sequenced |
| Studying ancient or degraded DNA | Copies short surviving fragments from old specimens |
| Cloning | Produces many copies of a gene to insert into a plasmid |

### Misconceptions to avoid
- PCR does **not** copy the whole genome; it copies only the region between the primers.
- PCR does **not** make DNA from nothing; with no template, there is no product.
- PCR does **not** tell you the sequence by itself; it makes enough copies to analyze (by gel or sequencing).

> 🔑 **AP Connection:** In FRQs, name the step and the bond: denaturation breaks **hydrogen bonds**; extension forms **covalent bonds** in the sugar-phosphate backbone. Saying only "heat separates DNA" earns less credit than naming what breaks.`
    },
    {
      id: 'bio-biotechnology-p3-s7-mcq-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯

A clinic tests swabs for a bacterial pathogen using PCR with primers specific to one of the pathogen's genes. Results after 30 cycles are run on a gel.

| Lane | Sample | Band at the expected size? |
|---|---|---|
| 1 | Patient swab | Yes |
| 2 | Known pathogen DNA | Yes |
| 3 | Water instead of template | Yes |`,
      exercise: {
        questions: [
          {
            question: 'What is the best conclusion from lanes 1–3?',
            options: [
              'The patient is infected, and lane 3 confirms the primers work',
              'The test is unreliable, since the no-template lane is contaminated',
              'The patient is not infected, since water gave the same band',
              'The primers are not specific and copied human DNA instead'
            ],
            correctAnswer: 1,
            explanation: 'The water lane is the negative control and should show no band, so a band there means the reagents contain stray target DNA, and the patient\'s band cannot be trusted. A human-DNA explanation fails because lane 3 contains no human DNA.'
          },
          {
            question: 'In a repeat run with clean reagents, a sample starts with 10 copies of the target. Assuming perfect doubling, how many copies are present after 6 cycles?',
            options: [
              '60 copies',
              '640 copies',
              '320 copies',
              '1,280 copies'
            ],
            correctAnswer: 1,
            explanation: 'Each cycle doubles the number of copies: 10 × 2^6 = 10 × 64 = 640. Multiplying 10 by 6 treats PCR as adding a fixed amount per cycle, and 320 and 1,280 are the counts after 5 and 7 cycles.'
          },
          {
            question: 'The clinic redesigns its primers so they bind farther apart on the pathogen\'s gene. How will the PCR product change?',
            options: [
              'It will be shorter, since primers that bind farther apart copy less DNA',
              'It will be longer, since it covers a longer stretch of DNA between primers',
              'It will be the same length, since PCR always copies the whole gene',
              'It will disappear, since primers must bind right next to each other'
            ],
            correctAnswer: 1,
            explanation: 'The primers set the two ends of the PCR product, so moving them farther apart lengthens the copied region. PCR copies only the stretch between the primers, not the whole gene, and primers bound some distance apart are exactly how PCR defines its target.'
          }
        ]
      }
    }
  ]
};
