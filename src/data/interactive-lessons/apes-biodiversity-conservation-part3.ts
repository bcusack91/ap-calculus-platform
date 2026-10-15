export const apesBiodiversityConservationPart3Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod3-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 3 of 7 — Endangered Species: Who Is at Risk and How Recovery Works**

---

| Section |
|---------|
| 📖 Traits That Raise Extinction Risk |
| How the Endangered Species Act Works |
| CITES and the Wildlife Trade |
| Recovery Stories, by the Numbers |

> 🔑 **Key Concept:** Extinction risk is not random. Species with certain traits decline first when HIPPCO pressures rise. This part explains those traits, how U.S. and international law respond once a species is in trouble, and how to measure a recovery with percent change.
      `
    },
    {
      id: 'apesbiod3-traits',
      type: 'text' as const,
      content: `
## 📖 Traits That Raise Extinction Risk

| Trait | Why it raises risk | Example |
|---|---|---|
| **Specialist** diet or habitat | Losing one food or habitat type leaves no fallback | Giant panda (bamboo); Florida panther (large wild tracts) |
| **K-selected** reproduction | Few offspring and late maturity mean slow recovery from losses | California condor: one egg per nesting attempt, often not every year |
| **Small or isolated range** | One fire, storm or disease can affect the whole species | Species found on a single island |
| **Large territory** | Needs big unbroken areas, so fragmentation hits hard | Tigers, grizzly bears |
| **Low genetic diversity** | Less variation to adapt to disease or change | Cheetahs; Florida panthers before 1995 |
| **Migratory** | Depends on several habitats; losing any one breaks the cycle | Monarch butterflies; shorebirds |
| **High commercial value** | Targeted by poachers and illegal trade | Rhinos (horn), elephants (ivory), pangolins (scales) |
| **Top predator** | Small populations; exposed to biomagnified toxins | Bald eagle and peregrine falcon during the DDT era |

Notice how the traits stack. A large, slow-breeding, specialist predator with a small range is about as vulnerable as a species can be.

### Extirpation versus extinction

- **Extirpation:** a species disappears from one area but survives elsewhere (gray wolves vanished from Yellowstone by the 1920s but survived in Canada).
- **Extinction:** the last individual of the species dies anywhere on Earth (passenger pigeon, 1914).

> 🔑 **AP Connection:** Questions often give a species profile and ask which trait makes it vulnerable. Pick the trait and link it to a consequence: "Because the condor lays only one egg per nesting attempt, the population cannot quickly replace adults killed by lead poisoning."
      `
    },
    {
      id: 'apesbiod3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which species profile describes the animal most vulnerable to extinction from habitat loss?',
            options: [
              'A small rodent that eats the seeds of many different plants and breeds several times a year',
              'A large cat that hunts one kind of prey over a wide range and breeds every two years',
              'A songbird that nests in many kinds of trees and lays five eggs every spring',
              'A beetle that feeds on decaying wood of any kind and lays hundreds of eggs'
            ],
            correctAnswer: 1,
            explanation: 'The large cat combines specialist feeding, a large territory and slow reproduction, so habitat loss removes its prey and space faster than it can recover. The other three are generalists with high reproductive output.'
          },
          {
            question: 'Gray wolves disappeared from Yellowstone by the 1920s but survived in Canada and Alaska. Which term describes what happened in Yellowstone?',
            options: [
              'Extinction',
              'Extirpation',
              'Speciation',
              'Fragmentation'
            ],
            correctAnswer: 1,
            explanation: 'Extirpation is the loss of a species from one area while it survives elsewhere. Extinction would mean no gray wolves left anywhere, and fragmentation describes habitat being broken into pieces rather than a species being eliminated.'
          },
          {
            question: 'Peregrine falcons and bald eagles declined sharply in the mid-1900s while many smaller songbirds did not. Which trait best explains the difference?',
            options: [
              'Their position as top predators, which exposed them to biomagnified DDT',
              'Their need for old-growth forest that was being cleared for farmland',
              'Their migration routes that crossed regions with heavy hunting pressure',
              'Their small clutch sizes, which made them more sensitive to egg collectors'
            ],
            correctAnswer: 0,
            explanation: 'DDT became more concentrated at each trophic level, so top predators carried the highest doses, which thinned their eggshells. Songbirds feed lower in the food chain and received far smaller doses.'
          }
        ]
      }
    },
    {
      id: 'apesbiod3-esa',
      type: 'text' as const,
      content: `
## How the Endangered Species Act Works

The **Endangered Species Act (ESA, 1973)** is administered by the **U.S. Fish and Wildlife Service** (land and freshwater species) and **NOAA Fisheries** (most marine species).

| Step | What happens |
|---|---|
| **Listing** | A species is listed as **endangered** (in danger of extinction throughout all or a significant part of its range) or **threatened** (likely to become endangered in the foreseeable future). Listing decisions must rest on the best available scientific data, not on economic cost. |
| **Protection from "take"** | It becomes illegal to harass, harm, pursue, hunt, shoot, wound, kill, trap, capture or collect listed animals. "Harm" can include significant habitat modification that kills or injures wildlife. |
| **Critical habitat** | Areas essential to the species' recovery are designated. Federal agencies must make sure projects they fund or permit do not destroy or adversely modify that habitat. |
| **Recovery plan** | Scientists set measurable goals (population size, number of breeding sites) for reclassifying or removing the species from the list. |
| **Delisting** | When recovery goals are met, the species is removed from the list and monitored. |

Plants can be listed too, though the ESA's take prohibition protects them less broadly than it protects animals.

## CITES and the Wildlife Trade

**CITES** (the Convention on International Trade in Endangered Species of Wild Fauna and Flora) controls trade **across borders**; it does not regulate hunting inside a country.

| Appendix | Status | Trade rule |
|---|---|---|
| **Appendix I** | Threatened with extinction (tigers, most rhinos, pangolins) | International commercial trade is generally prohibited |
| **Appendix II** | Not necessarily threatened now, but could become so if trade is not controlled | Trade allowed only with export permits |

Poaching continues because black-market prices for horn, ivory and scales are high and enforcement in remote areas is difficult. Reducing demand in consumer countries is as important as patrolling parks.
      `
    },
    {
      id: 'apesbiod3-recovery',
      type: 'text' as const,
      content: `
## Recovery Stories, by the Numbers

| Species | Main threat | What changed | Outcome |
|---|---|---|---|
| **Bald eagle** | DDT thinned eggshells | U.S. banned DDT in 1972; ESA protection of nests | Removed from the ESA list in 2007 |
| **American alligator** | Hunting for hides; habitat loss | Hunting controls and habitat protection | Declared recovered in 1987 |
| **California condor** | Lead from bullet fragments in carcasses | All 27 remaining birds were taken into captivity in 1987 for breeding | More than 500 birds today, many flying free, though lead remains a threat |
| **Gray wolf** | Hunting and trapping | Reintroduced to Yellowstone in 1995–96 | Populations re-established in the northern Rockies |

### Worked Example 1: Percent Change in a Recovery

Bald eagles in the lower 48 states fell to fewer than 500 nesting pairs in the early 1960s and grew to nearly 10,000 pairs by 2007. Using the rounded values 500 and 10,000:

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100 = \\frac{10{,}000 - 500}{500} \\times 100 = 1{,}900\\%$$

A 1,900% increase means the population is 20 times its low point: $10{,}000 \\div 500 = 20$.

### Worked Example 2: Average Annual Growth

A captive-breeding program (illustrative data) grows a population from 30 to 270 birds over 20 years.

1. Total increase: $270 - 30 = 240$ birds
2. Average increase per year: $240 \\div 20 = 12$ birds per year
3. Growth factor: $270 \\div 30 = 9$, so the population is 9 times its starting size

Averages hide the shape of growth. Early years added only a few birds; later years added many more because more adults were breeding.

### Worked Example 3: Percent Decline

A rhino population (illustrative data) fell from 2,400 to 1,560 animals in a decade of heavy poaching.

$$\\frac{1{,}560 - 2{,}400}{2{,}400} \\times 100 = \\frac{-840}{2{,}400} \\times 100 = -35\\%$$
      `
    },
    {
      id: 'apesbiod3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas, units or percent signs. Values are illustrative.

1) A turtle population grew from 400 nests to 1,100 nests. What was the percent increase?

2) An antelope population fell from 5,000 to 3,500 because of poaching. What was the percent decrease?

3) A captive-bred population grew from 22 to 286 animals over 24 years. What was the average increase, in animals per year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['175', '30', '11'],
        hint1: 'Percent change = (new − old) ÷ old × 100. The old value is 400.',
        hint2: 'Find the drop, 5,000 − 3,500, then divide by the starting value.',
        hint3: 'Find the total increase first, then divide by the number of years.',
        explanation: '1) (1,100 − 400) ÷ 400 × 100 = 175 percent. 2) (5,000 − 3,500) ÷ 5,000 × 100 = 30 percent. 3) (286 − 22) ÷ 24 = 264 ÷ 24 = 11 animals per year.'
      }
    },
    {
      id: 'apesbiod3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A developer plans to build on private land that a federally listed frog uses for breeding. The project needs a federal wetland permit. Which ESA provision most directly applies?',
            options: [
              'The agency granting approval must avoid jeopardizing the frog',
              'The frog must be moved to a zoo until the construction is finished',
              'The project may proceed if the frog is common in a nearby state',
              'The developer must pay an export fee under the CITES treaty'
            ],
            correctAnswer: 0,
            explanation: 'Because a federal permit is involved, the agency must consult to make sure the action does not jeopardize the listed species or destroy its critical habitat, and harming the frogs would also count as take. CITES governs international trade, not construction.'
          },
          {
            question: 'Elephant ivory is traded illegally across national borders despite international controls. Which response would most directly reduce this trade?',
            options: [
              'Listing elephants as threatened under the U.S. ESA',
              'Moving elephants into captive-breeding programs',
              'Cutting demand among buyers in importing countries',
              'Planting corridors between the parks where elephants live'
            ],
            correctAnswer: 2,
            explanation: 'Poaching persists because buyers pay high prices, so lowering demand in importing countries removes the incentive. Corridors and captive breeding address habitat and population size, not the market that drives poaching.'
          },
          {
            question: 'In 1987 all 27 remaining California condors were taken into captivity. Why does the species still need management even though more than 500 now exist?',
            options: [
              'Lead fragments in carcasses keep poisoning wild birds',
              'Condors can no longer find suitable mates without human help',
              'Wild condors have lost the ability to digest most carrion',
              'Captive-bred condors cannot fly well once they are released'
            ],
            correctAnswer: 0,
            explanation: 'Condors scavenge carcasses that often contain lead bullet fragments, and lead poisoning remains a leading cause of death in wild birds. Captive breeding increased their numbers but did not remove that threat.'
          }
        ]
      }
    },
    {
      id: 'apesbiod3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Risk traits | Specialist, K-selected, small range, large territory, low genetic diversity, migratory, valuable, top predator |
| Extirpation vs extinction | Lost from one area vs lost everywhere |
| Endangered vs threatened | In danger of extinction now vs likely to become endangered |
| ESA tools | Listing on science, take prohibition, critical habitat, recovery plans, delisting |
| CITES | Controls international trade; Appendix I bans commercial trade, Appendix II requires permits |
| Recoveries | Bald eagle (delisted 2007), alligator (recovered 1987), condor (27 birds in 1987 to more than 500) |
| Percent change | (new − old) ÷ old × 100 |

**Next:** Part 4 shows how scientists get the population numbers these laws depend on: mark-recapture, quadrat sampling and reading population trend data.
      `
    }
  ]
};
