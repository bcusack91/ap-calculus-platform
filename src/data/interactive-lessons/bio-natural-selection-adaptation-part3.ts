export const bioNatSelectionPart3Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp3-intro',
      type: 'text' as const,
      content: `
## Sexual Selection

**Part 3 of 7**

Darwin himself was puzzled by traits that seemed to *reduce* an organism's chance of survival — the peacock's enormous, conspicuous tail being the famous example. Why would natural selection produce a structure that makes its bearer slower, more visible to predators, and metabolically expensive? His answer was a *second* mode of selection: **sexual selection**, the differential reproductive success that arises from variation in the ability to **obtain mates**.

Sexual selection is a **subset of natural selection** in the broad sense (it acts through differential reproduction), but AP Biology treats it as a distinct concept because the selective agent is **mating success**, not survival. A trait can spread through a population even while *lowering* survival, as long as it raises mating success enough to more than compensate.

> **Anchor idea:** Natural (survival) selection asks "Can you survive long enough to reproduce?" Sexual selection asks "Once you've survived, can you actually secure a mate?" The two can **pull in opposite directions**.
      `
    },
    {
      id: 'nsp3-two-types',
      type: 'text' as const,
      content: `
### Two Forms of Sexual Selection

| Form | Definition | Who is "competing"? | Typical traits produced | Example |
|------|------------|---------------------|-------------------------|---------|
| **Intrasexual selection** | Competition **among members of the same sex** (usually males) for access to mates | Male vs. male (within-sex) | Weapons and large body size: antlers, horns, large canines, fighting strength | Bighorn sheep ramming heads; elephant seal beachmasters |
| **Intersexual selection** ("mate choice") | Members of one sex **choose** mates from the other based on displayed traits | Choosy sex (usually females) evaluates the other | Ornaments and displays: bright plumage, elaborate songs, courtship dances | Peahen choosing peacock with the showiest tail |

**Intrasexual selection** ("same-sex competition") favors traits that help win direct contests — these are often *weapons* and *body size*. The losers may be excluded from mating entirely.

**Intersexual selection** ("between-sex choice") favors traits that the choosing sex finds attractive — these are often *ornaments* and *displays*. The peacock's tail evolved because peahens preferentially mate with males bearing larger, more symmetric, more eyespot-rich tails.

> **Memory aid:** **Intra**- means "within" (within one sex → male–male combat). **Inter**- means "between" (between the sexes → one sex chooses the other). Mixing these up is a frequent AP error.
      `
    },
    {
      id: 'nsp3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Intrasexual vs. Intersexual
      `,
      exercise: {
        questions: [
          {
            question: 'In a species of beetle, males possess enormous forked horns that they use to physically pry rival males off of females and out of competition. Females lack horns entirely. The evolution of these horns is BEST explained by:',
            options: [
              'Intersexual selection, because females choose horned males',
              'Intrasexual selection, because the horns function as weapons in male–male competition for access to mates',
              'Natural (survival) selection, because horns help the beetles escape predators',
              'Stabilizing selection, because intermediate horn size is favored'
            ],
            correctAnswer: 1,
            explanation: 'Horns used as WEAPONS in direct male-vs-male contests are the signature of INTRAsexual selection (competition WITHIN one sex). Option A is the trap: the scenario describes males fighting each other, not females CHOOSING males based on horn display, so it is intra-, not inter-sexual. Note also the sexual dimorphism (only males have horns), which is itself a hallmark of sexual selection rather than survival selection.'
          },
          {
            question: 'Male bowerbirds build and decorate elaborate structures ("bowers") with colorful objects. Females visit multiple bowers and mate with the male whose bower they find most impressive; the bower has no role in survival. This is the clearest example of:',
            options: [
              'Intrasexual selection through male–male combat',
              'Intersexual selection through female mate choice',
              'Disruptive selection on building behavior',
              'Gene flow between bowerbird populations'
            ],
            correctAnswer: 1,
            explanation: 'Females evaluating and CHOOSING among males based on a displayed trait is INTERsexual selection (mate choice, "between the sexes"). Option A is the trap: there is no direct male–male fighting here — males compete indirectly by attracting choosy females, which is mate choice, not combat. The display has no survival function, ruling out ordinary natural selection.'
          }
        ]
      }
    },
    {
      id: 'nsp3-dimorphism',
      type: 'text' as const,
      content: `
### Secondary Sexual Characteristics and Sexual Dimorphism

**Secondary sexual characteristics** are traits that differ between the sexes but are **not** directly part of the reproductive organs — bright plumage, antlers, manes, larger body size, elaborate songs. They develop around sexual maturity and function in competition or attraction.

**Sexual dimorphism** is the systematic difference in appearance between males and females of the same species (size, color, ornamentation). Pronounced sexual dimorphism is a strong *signature* of sexual selection:

- **Intrasexual selection** tends to produce dimorphism in **size and weaponry** (e.g., male elephant seals are several times larger than females).
- **Intersexual selection** tends to produce dimorphism in **ornamentation and color** (e.g., the brilliant male mallard vs. the drab, camouflaged female).

Why is the **female** usually the choosier, more cryptic sex and the **male** the ornamented one? The deepest cause is **differential parental investment (anisogamy)**: eggs are large and costly and often paired with greater parental care, while sperm are cheap and abundant. The sex that invests more per offspring (usually females) becomes a *limiting resource*, so members of the other sex (males) compete and the choosy sex evolves discriminating preferences.

> **Connection:** Sexual dimorphism is the *observable evidence* of sexual selection in the same way that homologous structures are observable evidence of common descent. Seeing strong dimorphism on an exam should prompt you to consider sexual selection.
      `
    },
    {
      id: 'nsp3-goodgenes',
      type: 'text' as const,
      content: `
### "Good Genes," the Handicap Principle, and the Survival Trade-off

Why should a female "prefer" an exaggerated ornament? Two leading hypotheses explain how mate choice can be **adaptive** rather than arbitrary:

- **"Good genes" hypothesis:** An elaborate ornament is an **honest signal** of heritable quality. A male that can grow a large, symmetric tail despite the cost must have, e.g., a robust immune system and efficient metabolism. By choosing him, a female obtains *good genes* for her offspring, who inherit both his quality and (in sons) the attractive trait.
- **Handicap principle (Zahavi):** The ornament is reliable *precisely because* it is **costly**. Only a genuinely high-quality male can afford to "waste" resources on a giant tail and still survive. A low-quality male cannot fake the signal, so the handicap guarantees the signal's honesty. The cost is the point.

**The survival trade-off.** This is the crux of the part: sexual selection can directly **oppose** survival (natural) selection.

| Force | Acts on | Effect on peacock tail |
|-------|---------|------------------------|
| **Sexual selection** | Mating success | Favors a **larger, brighter** tail (more attractive to peahens) |
| **Survival (natural) selection** | Survival | Favors a **smaller** tail (less visible to predators, less energetically costly, easier to escape) |

The tail size we observe represents an **equilibrium** between these opposing pressures. The trait stops growing when the *marginal mating benefit* of a bigger tail no longer outweighs the *marginal survival cost*. This is why sexual selection can produce traits that, viewed through survival alone, look maladaptive — they are favored because **fitness is reproductive success, and getting a mate is half of reproducing.**

> **AP framing:** When a trait seems to *hurt* survival yet persists or spreads, suspect sexual selection. The fitness payoff comes from increased mating, which can outweigh a survival cost.
      `
    },
    {
      id: 'nsp3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Good Genes and the Trade-off
      `,
      exercise: {
        questions: [
          {
            question: 'Male widowbirds have extremely long tail feathers that make flight slower and more energetically costly, increasing predation risk. In an experiment, males with artificially lengthened tails attracted MORE mates than controls, while males with shortened tails attracted fewer. Which statement BEST explains the persistence of long tails despite the survival cost?',
            options: [
              'Long tails increase survival, so natural selection alone favors them',
              'The increased mating success from intersexual selection outweighs the survival cost, raising overall reproductive fitness',
              'The tails are a vestigial structure with no current function',
              'Long tails arose by genetic drift and have no effect on fitness'
            ],
            correctAnswer: 1,
            explanation: 'The experiment shows long tails RAISE mating success via female choice (intersexual selection), and because fitness = reproductive success, the mating gain can outweigh the survival cost — so the trait spreads despite hurting survival. Option A is the trap: it directly contradicts the stated FACT that long tails REDUCE survival; the trait persists in spite of survival selection, not because of it.'
          },
          {
            question: 'According to the handicap principle, why does a costly ornament like a heavy, conspicuous tail serve as a RELIABLE ("honest") signal of male quality to choosy females?',
            options: [
              'Because the ornament directly improves the male\'s ability to gather food',
              'Because only a genuinely high-quality male can bear the cost of the ornament and still survive, so the signal cannot be faked by low-quality males',
              'Because the ornament reduces the male\'s metabolic rate, conserving energy',
              'Because females cannot actually perceive the ornament, so it has no real effect'
            ],
            correctAnswer: 1,
            explanation: 'The handicap principle states that the COST is what makes the signal honest: a low-quality male simply cannot afford a large ornament and survive, so only high-quality males display them, making the trait a reliable indicator of "good genes." Option C is the trap — it reverses the logic; the ornament is metabolically EXPENSIVE (a handicap), not energy-saving, and that very expense is what guarantees its honesty.'
          }
        ]
      }
    },
    {
      id: 'nsp3-quantify',
      type: 'text' as const,
      content: `
### Quantifying the Trade-off — When Does a Costly Ornament Spread?

A costly sexual ornament spreads only if its **mating benefit outweighs its survival cost** in terms of total reproductive output. We can make this concrete with relative fitness.

Suppose in a bird population we compare long-tailed males to short-tailed males over a breeding season:

| Male type | Probability of surviving the season | Average mates IF it survives | Expected offspring (survival × mates) |
|-----------|-------------------------------------|------------------------------|----------------------------------------|
| Short tail | 0.80 | 1.0 | $0.80 \\times 1.0 = 0.80$ |
| Long tail | 0.50 | 2.0 | $0.50 \\times 2.0 = 1.00$ |

Even though the long tail **cuts survival** from 0.80 to 0.50 (a real survival cost imposed by natural selection), the long-tailed male's *expected reproductive output* (1.00) **exceeds** the short-tailed male's (0.80). So the long-tail allele has higher overall fitness and will **spread** — sexual selection wins the tug-of-war here.

Now flip the mating advantage to a smaller value — say long-tailed males average only 1.4 mates:

$0.50 \\times 1.4 = 0.70 < 0.80$

Now the survival cost dominates: the long tail yields *fewer* total offspring than the short tail, so natural selection wins and the ornament does **not** spread. The trait's evolution depends entirely on **whether the mating gain exceeds the survival loss**, which is exactly the equilibrium described by the peacock-tail trade-off.

**Runaway sexual selection (Fisherian).** When a female preference and a male trait are both heritable and become genetically correlated, choosing the trait *also* propagates the preference. This positive feedback can drive the ornament to ever-more-exaggerated extremes far beyond the survival optimum — until the survival cost finally halts the runaway. This is one proposed explanation for why some ornaments (like the peacock's tail) become so spectacularly elaborate.

> **AP framing:** Sexual selection is not a violation of "survival of the fittest" — it is a clarification of it. Fitness = total reproductive success, and a trait that *trades* some survival for a larger *mating* gain can have the **highest net fitness** of all, which is why it spreads.
      `
    },
    {
      id: 'nsp3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Natural vs. Sexual Selection
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following observations would MOST strongly suggest that a trait evolved by sexual selection rather than ordinary survival selection?',
            options: [
              'The trait is present equally in both males and females and helps the organism digest food',
              'The trait is found only in one sex, is energetically costly, and appears to lower survival while increasing mating success',
              'The trait helps individuals of both sexes camouflage against predators',
              'The trait is identical across all individuals and shows no variation'
            ],
            correctAnswer: 1,
            explanation: 'A sexually dimorphic (one-sex), costly trait that LOWERS survival but RAISES mating success is the textbook profile of sexual selection — the survival cost rules out plain natural selection as the sole driver. Option C is the trap: a camouflage trait shared by both sexes that improves survival is a SURVIVAL (natural) selection trait, the opposite of a sexually selected ornament.'
          },
          {
            question: 'A trait increases an individual\'s probability of surviving to old age but renders that individual completely sterile. From an evolutionary standpoint, how does sexual (and natural) selection treat this trait, and why?',
            options: [
              'It is strongly favored because the individual lives a long time',
              'It is selected against because fitness is reproductive success; a sterile individual contributes zero offspring regardless of how long it lives',
              'It is neutral because survival and reproduction are weighted equally',
              'It is favored only by sexual selection but not by natural selection'
            ],
            correctAnswer: 1,
            explanation: 'Fitness is measured by CONTRIBUTION OF OFFSPRING to the next generation. A trait causing sterility yields zero reproductive output, so its bearer\'s fitness is zero and the trait is selected AGAINST no matter how long the individual survives. Option A is the trap — it equates longevity with fitness, but survival matters ONLY insofar as it leads to reproduction, which sterility prevents entirely.'
          }
        ]
      }
    }
  ]
};
