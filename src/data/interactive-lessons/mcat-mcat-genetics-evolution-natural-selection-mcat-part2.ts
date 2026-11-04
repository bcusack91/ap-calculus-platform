export const mcatNatSelPart2Data = {
  topicSlug: 'mcat-genetics-evolution-natural-selection-mcat',
  sections: [
    {
      id: 'ns2-intro',
      type: 'text' as const,
      content: `# Natural Selection — Deep Dive

**Part 2 of 4 — Modes of Selection, Sexual Selection & Altruism**

### The Three Modes, With Their Classic Examples

| Mode | Favors | Classic example | Distribution outcome |
|------|--------|-----------------|----------------------|
| Directional | One extreme | Beak depth in Galápagos finches after drought; industrial melanism in peppered moths; antibiotic resistance | Mean shifts toward the favored extreme |
| Stabilizing | The intermediate | Human birth weight (historically, very small and very large newborns had elevated mortality) | Mean unchanged, variance shrinks |
| Disruptive | Both extremes | African seedcrackers: large-billed birds crack hard seeds, small-billed handle soft seeds efficiently; intermediates do neither well | Variance grows; distribution can become bimodal |

Disruptive selection is the mode with speciation potential WITHIN a single population: if the two favored extremes also begin mating assortatively (like with like), the population can split — a thread picked up in Part 3.

### Sexual Selection: Fitness Includes Mating Success

Sexual selection is differential reproductive success arising from competition for MATES. Two channels:

- **Intersexual selection (mate choice)**: members of one sex (usually females, the higher-investing sex) choose among the other. Drives ornaments — peacock trains, bright plumage, courtship displays.
- **Intrasexual selection (same-sex competition)**: typically male-male combat or display for access to mates. Drives weapons and size — antlers, horns, sexual dimorphism in body mass.

**Why do costly ornaments persist when they reduce survival?** Because fitness is reproduction, not survival. A train that costs a peacock some predation risk but multiplies his matings can raise net fitness. Choice for such ornaments can be maintained because ornaments serve as **indicators of male condition or genetic quality** — only a healthy male can afford the handicap. The result is a survival/mating trade-off, and sexual dimorphism is its visible signature.

<!-- yield:low -->
A second route is runaway (Fisherian) selection: the female preference and the male ornament become genetically correlated, so each generation's choice amplifies both.
<!-- /yield -->

### Altruism, Kin Selection & Hamilton's Rule

Behavior that lowers the actor's own reproduction while raising a recipient's (alarm calling, helping at the nest, sterile worker castes) looks paradoxical — until genes are counted through RELATIVES. Your relatives carry your alleles with predictable probabilities (the **coefficient of relatedness** r): offspring and full siblings $r = 0.5$; half-siblings, grandchildren, aunts/uncles-to-nieces/nephews $r = 0.25$; first cousins $r = 0.125$.

**Inclusive fitness** = own reproduction (direct) + effects on relatives' reproduction, weighted by r (indirect). **Kin selection** favors an altruistic act when **Hamilton's rule** holds:

$rB > C$

where B is the benefit to the recipient and C the cost to the actor, both in offspring-equivalents. Predictions that data confirm: alarm calls in Belding's ground squirrels are given overwhelmingly by females living near kin; help flows preferentially to closer relatives; sterile insect workers raise siblings rather than offspring.

### The Group-Selection Caveat

"For the good of the species" is almost never the right explanation. A self-sacrificing allele that benefits the group is undermined from within by cheaters who accept benefits without paying costs — individual-level selection is usually the stronger force. Apparent group-beneficial behavior on the MCAT should be re-explained via kin selection ($rB > C$) or reciprocity, not species-level benefit.`
    },
    {
      id: 'ns2-worked-modes',
      type: 'text' as const,
      content: `### Worked Example — Reading the Mode of Selection From a Distribution

**Problem.** In a lake fish population, adult body length is heritable and roughly bell-shaped: mean $20\\;\\text{cm}$, range $12$ to $28\\;\\text{cm}$. Consider three ways fishing could remove fish before they breed.

- **(a)** A new net catches every fish longer than $24\\;\\text{cm}$. Which mode of selection is this, and what happens to the mean?
- **(b)** Suppose instead that fish shorter than $15\\;\\text{cm}$ and fish longer than $25\\;\\text{cm}$ are both removed. Which mode, and what happens to the mean and the variance?
- **(c)** Suppose instead that only fish between $17$ and $23\\;\\text{cm}$ are caught. Which mode, and what happens to the variance and the shape of the distribution?

**(a) Directional.** Only one extreme (the largest fish) is removed, so the shorter end is favored. The next generation's mean shifts below $20\\;\\text{cm}$, toward the favored extreme.

**(b) Stabilizing.** Both extremes are removed and the intermediate is favored. The mean stays near $20\\;\\text{cm}$ while the variance shrinks.

**(c) Disruptive.** The intermediates are removed and both extremes are favored. The variance grows, and the distribution can become bimodal, with peaks of short and long fish, even if the mean stays near $20\\;\\text{cm}$.`
    },
    {
      id: 'ns2-worked',
      type: 'text' as const,
      content: `### Worked Example — Applying Hamilton's Rule to an Alarm Call

**Problem 1.** A ground squirrel spots a hawk. An alarm call raises her own risk of being taken, at an expected cost of $C = 1$ offspring-equivalent; staying silent lets the hawk take a nearby juvenile whose survival is worth $B = 3$ offspring-equivalents.

- **(a)** Is calling favored by kin selection if the juvenile is her full sibling?
- **(b)** Is calling favored if the juvenile is her first cousin?
- **(c)** What is the break-even benefit $B$ for a first cousin?
- **(d)** How many full siblings, and how many first cousins, must one self-sacrifice save to break even?

**(a) Full sibling, $r = 0.5$.** Hamilton's rule favors calling when $rB > C$: here $rB = 0.5 \\times 3 = 1.5 > 1 = C$. Calling is favored: she loses 1 offspring-equivalent directly but recovers 1.5 through the sibling's survival, so her inclusive fitness rises by 0.5.

**(b) First cousin, $r = 0.125$.** $rB = 0.125 \\times 3 = 0.375 < 1 = C$. Calling is NOT favored; the indirect gain cannot cover the cost.

**(c) Break-even benefit.** Calling breaks even when $rB = C$, so $B = C/r = 1/0.125 = 8$ offspring-equivalents; only a benefit above 8 would make calling pay for a cousin.

**(d) Two brothers or eight cousins.** With $B$ measured in lives-worth-of-offspring, $2 \\times 0.5 = 1$ and $8 \\times 0.125 = 1$: two full siblings or eight first cousins just balance the cost of one self. This is the quantitative core of the famous quip about laying down one's life "for two brothers or eight cousins".

<!-- yield:low -->
The quip is the geneticist J.B.S. Haldane's.
<!-- /yield -->`
    },
    {
      id: 'ns2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Selection Modes & Social Evolution** 🎯`,
      exercise: {
        questions: [
          {
            question: `Historically, human newborns of intermediate birth weight had the lowest mortality, while very small and very large newborns died more often. This pattern illustrates:`,
            options: [`Stabilizing selection`, `Directional selection`, `Disruptive selection`, `Frequency-dependent selection`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Selection removing both extremes and favoring the intermediate is stabilizing: the population mean stays put while variance is trimmed. Directional selection would favor one tail (steadily heavier or lighter babies); disruptive would favor both tails over the middle, which is the opposite of this pattern.`
          },
          {
            question: `During industrialization, soot darkened tree trunks and the frequency of dark (melanic) peppered moths rose sharply as birds preferentially found and ate light moths. This is an example of:`,
            options: [`Stabilizing selection on wing color`, `Sexual selection by female moths for dark males`, `Directional selection favoring one extreme phenotype`, `Genetic drift in a small moth population`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Predation consistently favored one end of the phenotype range (dark), shifting the population mean in that single direction — directional selection. The agent was differential predation, not mate choice, and the shift was consistent and environment-linked (reversing after clean-air laws), which rules out directionless drift.`
          },
          {
            question: `A peacock's enormous train increases his predation risk. Its persistence over evolutionary time is best explained by the fact that:`,
            options: [`Traits that harm survival cannot actually be heritable`, `Females prefer elaborate trains, raising mating success`, `The train startles predators, so it raises survival overall`, `Peahens must mate with the nearest male regardless of train`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Fitness includes mating success, and females preferentially mate with elaborate-trained males. This is intersexual selection: a survival cost can be outweighed by a mating-success benefit, and an honest-indicator (handicap) logic explains why choice for the ornament persists — only high-condition males can afford it. The startle idea contradicts the premise that the train raises predation risk, denying heritability contradicts the trait's evolutionary elaboration, and forced mating with the nearest male would remove any selection on the train at all.`
          },
          {
            question: `An individual can perform an act that costs it C = 2 offspring-equivalents and gives a full sibling (r = 0.5) a benefit of B = 6 offspring-equivalents. According to Hamilton's rule, the act:`,
            options: [`Is not favored, because C is greater than r`, `Is not favored, because altruism can never evolve`, `Is favored only if the whole group benefits`, `Is favored, because rB = 3 exceeds C = 2`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Hamilton's rule favors altruism when $rB > C$: here $0.5 \\times 6 = 3 > 2$. Comparing C directly to r confuses the rule's terms, and no group-level benefit is required — the accounting runs entirely through shared alleles in the relative. Kin-directed altruism evolves readily; what rarely works is species-benefit ("group selection") reasoning.`
          },
          {
            question: `In African seedcrackers, birds with large bills efficiently crack hard seeds and birds with small bills efficiently process soft seeds, while intermediate-billed birds handle both poorly. Continued selection of this kind, combined with a tendency of birds to mate with similar-billed partners, would most likely produce:`,
            options: [`A single intermediate bill size with reduced variance`, `A steady increase in the mean bill size`, `A bimodal distribution of bill sizes`, `No evolutionary change, since both extremes are favored equally`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Favoring both extremes over the middle is disruptive selection, which inflates variance and can split the distribution into two modes. Adding assortative mating restricts gene flow between the modes — the recipe for sympatric divergence, so the bimodal outcome is a possible first step toward sympatric speciation. Reduced variance around the middle would be stabilizing selection, and a steady mean increase would be directional; "no change" is wrong because the intermediate class is actively being removed.`
          }
        ]
      }
    },
    {
      id: 'ns2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Three modes.** Directional shifts the mean, stabilizing trims variance, disruptive inflates variance and can split the distribution.
- **Two kinds of sexual selection.** Mate choice (intersexual) builds ornaments; same-sex competition (intrasexual) builds weapons and size.
- **Hamilton's rule.** Altruism is favored when $rB > C$; inclusive fitness = direct + indirect (r-weighted) reproduction.
- **Relatedness ladder.** r = 0.5 for offspring and full sibs, 0.25 for half-sibs and grandchildren, 0.125 for first cousins.

**Common traps**

- **Ornaments as survival aids.** Costly ornaments persist because fitness includes mating success, not because they help survival.
- **For the good of the species.** Group-benefit altruism is undermined by cheaters; explain it by kin selection or reciprocity instead.
- **Comparing C with r.** Hamilton's rule weighs the cost against rB, the benefit discounted by relatedness, never against r alone.
- **Disruptive means no change.** Favoring both extremes removes the intermediates, so variance grows even when the mean holds.

<!-- yield:low -->
**Low-yield extras**

- Runaway (Fisherian) selection, in which a genetically correlated preference and ornament amplify each other, is a second route to elaborate ornaments; the "two brothers or eight cousins" quip is J.B.S. Haldane's
<!-- /yield -->`
    }
  ]
};
