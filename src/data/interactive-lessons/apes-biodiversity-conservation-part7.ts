export const apesBiodiversityConservationPart7Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod7-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 🧭 The Topic on One Page |
| One Island, Every Idea |
| Final Checklist |

> 🔑 **Key Concept:** Conservation questions on the AP exam rarely stay inside one idea. A single scenario can ask you to name a HIPPCO threat, explain why a species is vulnerable, calculate a population change and propose a solution with a trade-off. This review links all of it.

## 🧭 The Topic on One Page

| Part | Big idea | What you should be able to do |
|---|---|---|
| 1 | HIPPCO, laws, strategies | Classify a threat; match ESA, CITES, Lacey Act and MMPA to what they regulate |
| 2 | Invasive species | Name invader traits; trace an invader's effects; explain why early response is cheapest |
| 3 | Endangered species | Name risk traits; explain listing, take and critical habitat; distinguish CITES Appendix I and II |
| 4 | Monitoring | Calculate mark-recapture and quadrat estimates; spot violated assumptions; describe a trend |
| 5 | Human impacts and solutions | Rank habitat loss first; compare in-situ and ex-situ; name trade-offs |
| 6 | Exam skills | Match each task verb to the kind of answer it needs |

### Calculations from this topic

| Calculation | Formula | Typical use |
|---|---|---|
| Percent change | $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ | Recovery or decline of a species |
| Doubling spread | $\\text{start} \\times 2^{n}$ | Area covered by an invader after $n$ doublings |
| Mark-recapture | $N = \\dfrac{M \\times C}{R}$ | Size of a mobile animal population |
| Density | total count ÷ total area sampled | Quadrat surveys |
| Scaling up | density × area (1 ha = 10,000 m²; 1 km² = 100 ha) | Whole-site population |
| Average rate | change ÷ years | Animals gained or lost per year |
      `
    },
    {
      id: 'apesbiod7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing correctly matches a law or treaty to what it regulates?',
            options: [
              'CITES: international trade in threatened species and their products',
              'ESA: international trade in ivory between other nations',
              'Lacey Act: designation of critical habitat for listed plants',
              'MMPA: protection of migratory songbirds from hunting'
            ],
            correctAnswer: 0,
            explanation: 'CITES regulates cross-border trade in listed species and products such as ivory and pelts. The ESA is a U.S. law, the Lacey Act targets trade in illegally taken wildlife, and the MMPA protects marine mammals.'
          },
          {
            question: 'A fish species is a generalist feeder, matures in one year and lays thousands of eggs. In which situation is this profile most worrying?',
            options: [
              'When the fish is introduced to a lake where it has no predators',
              'When the fish loses half of its native spawning habitat',
              'When the fish is listed under Appendix I of CITES',
              'When the fish is held in a captive-breeding program'
            ],
            correctAnswer: 0,
            explanation: 'Generalist feeding and rapid, abundant reproduction are the traits of a successful invader, especially where enemy release removes predation. The same traits help a native population recover from habitat loss rather than making it highly vulnerable.'
          },
          {
            question: 'Which conservation approach protects the greatest number of species per dollar in most cases?',
            options: [
              'Safeguarding large areas of intact habitat',
              'Captive breeding of each endangered species in turn',
              'Banking seeds of rare plants in cold storage',
              'Relocating threatened animals to new reserves abroad'
            ],
            correctAnswer: 0,
            explanation: 'Protecting habitat shelters every species that lives there, along with the ecosystem services the habitat provides. Captive breeding and relocation help one species at a time and do not remove the original threat.'
          }
        ]
      }
    },
    {
      id: 'apesbiod7-island',
      type: 'text' as const,
      content: `
## One Island, Every Idea

An island nature reserve of 30 km² is home to a flightless ground-nesting bird found nowhere else. Rats arrived on supply boats and eat eggs. (Illustrative data.)

| Year | Rats per hectare (trap index) | Bird population (mark-recapture estimate) |
|---|---|---|
| 2014 | 2 | 1,000 |
| 2017 | 8 | 700 |
| 2020 | 16 | 420 |

### Worked Example: Following the Connections

**1. Classify the threat.** Rats are an **invasive species** (the I in HIPPCO). They arrived by a human pathway (boats), reproduce rapidly, and eat almost anything.

**2. Explain the bird's vulnerability.** It is **endemic** (one island), flightless and ground-nesting, so it cannot escape egg predators, and its whole species is in one place.

**3. Quantify the invasion.** The rat index rose from 2 to 16 per hectare, a factor of 8. That is three doublings ($2^{3} = 8$) in six years, or about one doubling every 2 years on average. Growth slowed in the second period (a factor of 4, then 2), a hint that the rats may be nearing the island's carrying capacity.

**4. Quantify the decline.**
$$\\frac{420 - 1{,}000}{1{,}000} \\times 100 = -58\\%$$

**5. Check one estimate.** In 2020 researchers marked 84 birds, later caught 60, and 12 were marked:
$$N = \\frac{84 \\times 60}{12} = 420$$

**6. Scale the rat problem.** Area: $30\\ \\text{km}^2 \\times 100 = 3{,}000$ ha. At 16 rats per ha, about $16 \\times 3{,}000 = 48{,}000$ rats.

**7. Propose a solution with a trade-off.** Eradicate rats with island-wide baiting, then require rodent checks on every supply boat (prevention). *Trade-off:* bait can poison non-target species such as native birds of prey that eat poisoned rats, so baiting must be timed and placed to limit that risk.

**8. Name the law.** If the island is U.S. territory, the bird could be listed under the **ESA**, which would bring a recovery plan and protection of its critical habitat.
      `
    },
    {
      id: 'apesbiod7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or units. Values are illustrative.

1) A 2017 survey on the island marked 70 birds and later caught 50, of which 5 were marked. Estimate the bird population.

2) What was the percent decrease in the bird population from 2017 (700 birds) to 2020 (420 birds)?

3) An invasive weed covers 5 ha of the island and doubles in area every year. How many hectares will it cover after 3 years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['700', '40', '40'],
        hint1: 'N = (marked × second catch) ÷ recaptured.',
        hint2: '(700 − 420) ÷ 700 × 100.',
        hint3: 'Three doublings multiply the area by 2³ = 8.',
        explanation: '1) (70 × 50) ÷ 5 = 700 birds. 2) 280 ÷ 700 × 100 = 40 percent. 3) 5 × 2³ = 40 ha.'
      }
    },
    {
      id: 'apesbiod7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Island managers can afford only one action this year to protect the ground-nesting bird. Which would most directly address the cause of its decline?',
            options: [
              'Removing rats from the island and checking boats for new ones',
              'Moving a few birds into a captive-breeding facility on the mainland',
              'Banning tourists from walking the island trails during nesting season',
              'Planting native shrubs around nesting areas to give the birds cover'
            ],
            correctAnswer: 0,
            explanation: 'Rats eating eggs are the cause of the decline, so eradication followed by prevention removes the threat itself. Captive breeding buys time but leaves the rats in place, and cover does not protect eggs from rats.'
          },
          {
            question: 'Why is the flightless bird more likely to go extinct than a widespread songbird facing the same rat density?',
            options: [
              'Its entire species lives on one island',
              'It lays more eggs than the songbird does',
              'It feeds at a lower trophic level than songbirds',
              'It is a generalist that competes with the rats for food'
            ],
            correctAnswer: 0,
            explanation: 'An endemic species with one small range can be lost entirely to a single threat, while a widespread species keeps populations in places without rats. Laying more eggs would help a species recover, not make it more vulnerable.'
          },
          {
            question: 'A manager proposes releasing a non-native snake to eat the rats. What is the strongest objection to this plan?',
            options: [
              'The snake could become invasive and also eat the rare bird and its eggs',
              'Snakes need warm weather and will not survive anywhere on an island',
              'Rats reproduce too slowly for any predator to control their numbers',
              'The ESA forbids releasing any reptile species on an island reserve'
            ],
            correctAnswer: 0,
            explanation: 'A generalist predator released without testing can switch to easier prey, including a flightless ground-nesting bird, as cane toads did in Australia. Rats actually reproduce quickly, and the ESA has no blanket ban on reptile releases.'
          }
        ]
      }
    },
    {
      id: 'apesbiod7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

| ✅ | I can... |
|---|---|
| ☐ | Classify any threat into a HIPPCO category and name habitat loss as the leading cause |
| ☐ | List the traits of successful invaders and of extinction-prone species, and see that they are near opposites |
| ☐ | Explain why early detection is cheaper than later control, using exponential growth |
| ☐ | Describe ESA listing, take, critical habitat and recovery plans, and the two main CITES appendices |
| ☐ | Calculate a mark-recapture estimate and a quadrat-based total, and say how a broken assumption shifts the answer |
| ☐ | Calculate percent change and average annual change from a population table |
| ☐ | Compare in-situ and ex-situ conservation and name a trade-off for each solution I propose |

**You have completed Biodiversity Conservation.** Revisit Part 4 if mark-recapture still feels shaky, and Part 6 for FRQ wording.
      `
    }
  ]
};
