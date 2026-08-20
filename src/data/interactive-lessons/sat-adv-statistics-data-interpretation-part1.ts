export const lessonData = {
  topicSlug: 'sat-statistics-data-interpretation-advanced',
  sections: [
    {
      id: 'sdi-adv-p1-intro',
      type: 'text' as const,
      content: `# Statistics & Data Interpretation: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

At this level the questions are about **center and spread**: mean, median, standard deviation. You will almost never be asked "what is the mean?" You will be asked what happens to the mean, or what the mean forces some other value to be. Three archetypes cover nearly every hard item.

### Archetype 1: The Mean Is a Total in Disguise

The single most useful sentence in this topic:

$$\\text{sum} = n \\times \\text{mean}$$

Every hard item that mentions a mean is really handing you a **total**. Convert immediately, work with the total, convert back at the end.

- **Missing value.** Nine seedlings, mean 46 g. Total is $9 \\times 46 = 414$. Add the eight known masses, subtract, and the ninth appears.
- **Removed value.** Ten sheets, mean 6.4. Total 64. Remove a 9.1 sheet: new total 54.9 across **nine** sheets, so the new mean is $54.9/9 = 6.1$. The classic error is dividing by 10 again.
- **Corrected entry.** 25 scores with mean 79.2, but a 58 was typed as 85. The total is $27$ too high, so subtract 27 from the **total** (not from the mean) and re-divide.
- **Added values.** 20 values with mean 47, then 52 and 64 join. New total $940 + 116 = 1056$, new count 22, new mean 48.

The trap in every one of these: the question usually asks for a *change* or a *second statistic*, and the intermediate total or the intermediate mean is sitting right there in the answer choices.

### Archetype 2: How Mean and Median React to a Change

Hard items love "which of the following describes the effect on the mean and on the median?" Memorize how each statistic responds:

| Change | Mean | Median |
|---|---|---|
| Add a value equal to the current mean | unchanged | usually moves |
| Change only the largest (or smallest) value | moves by $\\dfrac{\\text{change}}{n}$ | unchanged |
| Remove an extreme value | moves a lot | moves half a step |
| Remove two values that average to the mean | unchanged | may be unchanged |

Two facts do the heavy lifting. First, the mean feels **every** value, so an extreme value drags it; the median only feels **position**. Second, when you add or remove a value the list changes parity, so the median position shifts by half a step even if nothing near the middle changed.

**Never answer this archetype from intuition.** Compute both statistics before and after. The distractors are built precisely from "the median must move too" and "the mean must move too."`
    },
    {
      id: 'sdi-adv-p1-weighted',
      type: 'text' as const,
      content: `### Archetype 3: Weighted Means and the Lever

Two groups, two means, one combined mean. **The average of two averages is almost never the combined average** — it is only correct when the groups are the same size. This single idea generates a whole family of hard items.

The reliable method is totals:

$$\\text{combined mean} = \\frac{n_1 m_1 + n_2 m_2}{n_1 + n_2}$$

**Worked example.** 18 students average 84 and 12 students average 91. Total $= 18(84) + 12(91) = 2604$, so the combined mean is $2604/30 = 86.8$ — not $87.5$, which is what averaging 84 and 91 gives.

**The lever shortcut.** The combined mean always lands closer to the **larger** group. If the combined mean sits $a$ above group 1's mean and $b$ below group 2's mean, then

$$\\frac{n_1}{n_2} = \\frac{b}{a}$$

The sizes are proportional to the **opposite** distances. Group means 26 and 34 with a combined mean of 29? The distances are 3 and 5, so the sizes are in ratio $5:3$ — group 1 is bigger, which is why the combined mean drifted toward 26. Writing the ratio as $3:5$ is the single most common error on this archetype, and it is always an answer choice.

The same lever solves "how many more must be added": if you need the mean to reach a target, remember that new members enlarge the **denominator** too. Set up $\\dfrac{S + vt}{n + t} = \\text{target}$ and solve — never $vt = \\text{shortfall}$.

### The Fourth Statistic: Standard Deviation

You will never compute one. You will only **compare** two, and the rule is always the same: standard deviation measures typical distance from the mean.

- Same mean and same median tells you **nothing** about spread.
- More distinct values does not mean more spread.
- A distribution piled up at the center has a small SD; one hollowed out at the center with weight at both ends has a large SD, even when both are symmetric with identical mean and median.`
    },
    {
      id: 'sdi-adv-p1-q1',
      type: 'quiz' as const,
      question: 'A researcher recorded the lengths, in millimeters, of nine crystals. Eight of the lengths were 21, 24, 26, 29, 31, 34, 37, and 40. The mean length of all nine crystals was 30 millimeters. What is the median length, in millimeters?',
      options: [
        '$28$',
        '$30$',
        '$29$',
        '$31$'
      ],
      correctAnswer: 2,
      explanation: 'Nine values with mean 30 means a total of $9(30) = 270$. The eight known lengths sum to 242, so the missing length is $270 - 242 = 28$. Ordered, the nine values are 21, 24, 26, 28, 29, 31, 34, 37, 40, and the median is the fifth, which is 29. Choice A is 28, the missing value recovered in step one — the intermediate result, not the median. Choice B is the mean, chosen by assuming mean and median must agree. Choice D is the sixth value, an off-by-one slip in locating the middle of a nine-value list.'
    },
    {
      id: 'sdi-adv-p1-q2',
      type: 'quiz' as const,
      question: 'At a college, the 24 students in a morning lab section earned a mean score of 76 on a practical exam, and the 16 students in an afternoon section earned a mean score of 88. A student newspaper reports the overall average by averaging the two section means. By how much does the newspaper’s reported value exceed the actual mean score of all 40 students?',
      options: [
        '$80.8$',
        '$82$',
        '$6$',
        '$1.2$'
      ],
      correctAnswer: 3,
      explanation: 'The actual mean is weighted: $\\frac{24(76) + 16(88)}{40} = \\frac{1824 + 1408}{40} = 80.8$. The newspaper computes $(76 + 88)/2 = 82$. The excess is $82 - 80.8 = 1.2$. Choice A is the true weighted mean and choice B is the newspaper’s unweighted value; both are intermediate values, and the question asked for the gap between them. Choice C is half the spread between the section means, $(88 - 76)/2$, which mistakes the distance between the groups for the size of the reporting error.'
    },
    {
      id: 'sdi-adv-p1-q3',
      type: 'quiz' as const,
      question: 'Group A has a mean weight of 42 kilograms and Group B has a mean weight of 58 kilograms. Combined, the two groups have a mean weight of 46 kilograms. What is the ratio of the number of members in Group A to the number in Group B?',
      options: [
        '3 to 1',
        '1 to 3',
        '21 to 29',
        '2 to 1'
      ],
      correctAnswer: 0,
      explanation: 'The combined mean of 46 sits 4 above Group A’s mean and 12 below Group B’s mean. Group sizes are proportional to the opposite distances, so A to B is $12 : 4 = 3 : 1$; the combined mean drifted toward 42 precisely because Group A is larger. Check with 3 and 1: $\\frac{3(42) + 1(58)}{4} = \\frac{184}{4} = 46$. Choice B is the distances in the order they were computed, $4 : 12$, the reversed-lever error, which would drag the combined mean up near 58. Choice C is the ratio of the two means, $42 : 58$, reduced. Choice D would give a combined mean of $\\frac{2(42) + 58}{3} = 47.3$.'
    }
  ]
};
