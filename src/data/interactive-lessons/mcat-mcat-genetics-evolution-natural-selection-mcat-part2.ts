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

Disruptive selection is the one with speciation potential: if the two favored extremes also begin mating assortatively (like with like), the population can split — a thread picked up in Part 3.

### Sexual Selection: Fitness Includes Mating Success

Sexual selection is differential reproductive success arising from competition for MATES. Two channels:

- **Intersexual selection (mate choice)**: members of one sex (usually females, the higher-investing sex) choose among the other. Drives ornaments — peacock trains, bright plumage, courtship displays.
- **Intrasexual selection (same-sex competition)**: typically male-male combat or display for access to mates. Drives weapons and size — antlers, horns, sexual dimorphism in body mass.

**Why do costly ornaments persist when they reduce survival?** Because fitness is reproduction, not survival. A train that costs a peacock some predation risk but multiplies his matings can raise net fitness. Choice for such ornaments can be maintained because ornaments serve as **indicators of male condition or genetic quality** — only a healthy male can afford the handicap — or through runaway preference dynamics. The result is a survival/mating trade-off, and sexual dimorphism is its visible signature.

### Altruism, Kin Selection & Hamilton's Rule

Behavior that lowers the actor's own reproduction while raising a recipient's (alarm calling, helping at the nest, sterile worker castes) looks paradoxical — until genes are counted through RELATIVES. Your relatives carry your alleles with predictable probabilities (the **coefficient of relatedness** r): offspring and full siblings $r = 0.5$; half-siblings, grandchildren, aunts/uncles-to-nieces/nephews $r = 0.25$; first cousins $r = 0.125$.

**Inclusive fitness** = own reproduction (direct) + effects on relatives' reproduction, weighted by r (indirect). **Kin selection** favors an altruistic act when **Hamilton's rule** holds:

$rB > C$

where B is the benefit to the recipient and C the cost to the actor, both in offspring-equivalents. Predictions that data confirm: alarm calls in Belding's ground squirrels are given overwhelmingly by females living near kin; help flows preferentially to closer relatives; sterile insect workers raise siblings rather than offspring.

### The Group-Selection Caveat

"For the good of the species" is almost never the right explanation. A self-sacrificing allele that benefits the group is undermined from within by cheaters who accept benefits without paying costs — individual-level selection is usually the stronger force. Apparent group-beneficial behavior on the MCAT should be re-explained via kin selection ($rB > C$) or reciprocity, not species-level benefit.`
    },
    {
      id: 'ns2-worked',
      type: 'text' as const,
      content: `### Worked Example — Applying Hamilton's Rule to an Alarm Call

**Problem.** A ground squirrel spots a hawk. Giving an alarm call raises her own chance of being taken, at an expected cost of $C = 1$ offspring-equivalent. Staying silent lets the hawk take a nearby juvenile. Evaluate whether calling is favored by kin selection when the juvenile at risk is (a) her full sibling, whose survival is worth $B = 3$ offspring-equivalents, and (b) her first cousin, same benefit.

**Setup.** Hamilton's rule: calling is favored when $rB > C$.

**(a) Full sibling, r = 0.5.**
$rB = 0.5 \\times 3 = 1.5 > 1 = C$

Calling is favored: the actor loses 1 offspring-equivalent directly but recovers 1.5 through the sibling's survival — her inclusive fitness rises by 0.5.

**(b) First cousin, r = 0.125.**
$rB = 0.125 \\times 3 = 0.375 < 1 = C$

Calling is NOT favored; the indirect gain cannot cover the cost. For a cousin, the benefit would need to exceed $C/r = 1/0.125 = 8$ offspring-equivalents before calling paid.

**Interpretation.** This is the quantitative core of Haldane's quip that he would lay down his life "for two brothers or eight cousins": with $B$ measured in lives-worth-of-offspring, $2 \\times 0.5 = 1$ and $8 \\times 0.125 = 1$ just balance the cost of one self.

**Data connection.** In Belding's ground squirrels, alarm calling is concentrated in females — the philopatric sex that lives surrounded by mothers, sisters, and daughters — while males, who disperse away from kin, rarely call. That sex difference is exactly what kin selection predicts and what a "predator-confusion benefits everyone equally" account does not.`
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
            explanation: `Selection removing both extremes and favoring the intermediate is stabilizing: the population mean stays put while variance is trimmed. Directional selection would favor one tail (steadily heavier or lighter babies); disruptive would favor both tails over the middle, which is the opposite of this pattern.`
          },
          {
            question: `During industrialization, soot darkened tree trunks and the frequency of dark (melanic) peppered moths rose sharply as birds preferentially found and ate light moths. This is an example of:`,
            options: [`Stabilizing selection on wing color`, `Sexual selection by female moths for dark males`, `Directional selection favoring one extreme phenotype`, `Genetic drift in a small moth population`],
            correctAnswer: 2,
            explanation: `Predation consistently favored one end of the phenotype range (dark), shifting the population mean in that single direction — directional selection. The agent was differential predation, not mate choice, and the shift was consistent and environment-linked (reversing after clean-air laws), which rules out directionless drift.`
          },
          {
            question: `A peacock's enormous train increases his predation risk. Its persistence over evolutionary time is best explained by the fact that:`,
            options: [`Traits that harm survival cannot actually be heritable`, `Fitness includes mating success — females preferentially mate with elaborate-trained males, and the ornament can signal male condition`, `The train protects peacocks from predators by startling them, so it raises survival overall`, `Peahens are forced to mate with the nearest male regardless of his train`],
            correctAnswer: 1,
            explanation: `This is intersexual selection: a survival cost can be outweighed by a mating-success benefit, and an honest-indicator (handicap) logic explains why choice for the ornament persists — only high-condition males can afford it. The startle idea contradicts the premise that the train raises predation risk, and denying heritability contradicts the trait's evolutionary elaboration.`
          },
          {
            question: `An individual can perform an act that costs it C = 2 offspring-equivalents and gives a full sibling (r = 0.5) a benefit of B = 6 offspring-equivalents. According to Hamilton's rule, the act:`,
            options: [`Is not favored, because C is greater than r`, `Is not favored, because altruism can never evolve`, `Is favored only if the whole group benefits`, `Is favored, because rB = 3 exceeds C = 2`],
            correctAnswer: 3,
            explanation: `Hamilton's rule favors altruism when $rB > C$: here $0.5 \\times 6 = 3 > 2$. Comparing C directly to r confuses the rule's terms, and no group-level benefit is required — the accounting runs entirely through shared alleles in the relative. Kin-directed altruism evolves readily; what rarely works is species-benefit ("group selection") reasoning.`
          },
          {
            question: `In African seedcrackers, birds with large bills efficiently crack hard seeds and birds with small bills efficiently process soft seeds, while intermediate-billed birds handle both poorly. Continued selection of this kind, combined with a tendency of birds to mate with similar-billed partners, would most likely produce:`,
            options: [`A single intermediate bill size with reduced variance`, `A steady increase in mean bill size`, `A bimodal bill-size distribution — a possible first step toward sympatric speciation`, `No evolutionary change, since both extremes are favored equally`],
            correctAnswer: 2,
            explanation: `Favoring both extremes over the middle is disruptive selection, which inflates variance and can split the distribution into two modes. Adding assortative mating restricts gene flow between the modes — the recipe for sympatric divergence. Reduced variance around the middle would be stabilizing selection, and a steady mean increase would be directional; "no change" is wrong because the intermediate class is actively being removed.`
          }
        ]
      }
    },
    {
      id: 'ns2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Directional selection shifts the mean (finch beaks, peppered moths, antibiotic resistance); stabilizing trims variance (birth weight); disruptive inflates variance and can produce bimodality (seedcrackers)
- Disruptive selection + assortative mating is the population-level on-ramp to sympatric speciation
- Sexual selection: intersexual = mate choice (ornaments), intrasexual = same-sex competition (weapons, size); both produce sexual dimorphism
- Costly ornaments persist because fitness includes mating success; ornaments can be honest indicators of condition
- Kin selection: relatedness r discounts benefits to relatives; altruism favored when $rB > C$; inclusive fitness = direct + indirect components
- Relatedness ladder: offspring/full sib 0.5, half-sib/grandchild/niece 0.25, first cousin 0.125; "good of the species" explanations lose to cheater invasion — reframe via kin selection or reciprocity`
    }
  ]
};
