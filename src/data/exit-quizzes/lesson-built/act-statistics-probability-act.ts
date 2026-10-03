/**
 * Exit-quiz pool for the ACT Statistics & Probability lesson (mean, median,
 * mode and weighted averages; data displays and spread; counting principles;
 * basic probability; combinations and permutations; two-way tables and
 * conditional probability; expected value, sampling and mixed review), written
 * from the lesson itself and tagged by exam-yield tier (see ../lesson-built.ts).
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ─────────────── Part 1 — Mean, median, mode, and weighted averages ───────────────
  {
    question: `Which statement about the data set 8, 5, 11, 5, 8, 14, 2 is true?`,
    options: [
      `Both 5 and 8 are modes, and the median is 8`,
      `The only mode is 5, and the median is 8`,
      `The modes are 5 and 8, and the median is 5`,
      `There is no mode, and the median is 8`,
    ],
    correctAnswer: 0,
    explanation: `Sorted, the data are 2, 5, 5, 8, 8, 11, 14. The values 5 and 8 each appear twice, more than any other value, so both are modes, and the median is the 4th of the 7 sorted values, 8. A median of 5 comes from taking the middle entry of the unsorted list. Naming 5 as the only mode overlooks that 8 ties it, and a set with repeated values always has at least one mode.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Tomas has taken 4 tests, and the mean of his scores is 85. What score does he need on his 5th test so that the mean of all 5 scores is 88?`,
    options: [`91`, `94`, `97`, `100`],
    correctAnswer: 3,
    explanation: `A mean of 88 on 5 tests requires $5 \\times 88 = 440$ points; he has $4 \\times 85 = 340$, so he needs $440 - 340 = 100$. Equivalently, the new score must be 88 plus 3 points for each of the 4 earlier tests. Scores of 91, 94, and 97 make up the 3-point shortfall for only one, two, or three of those tests.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `A morning section of 15 students has a mean quiz score of 88, and an afternoon section of 25 students has a mean quiz score of 80. What is the mean quiz score of all 40 students?`,
    options: [`80`, `83`, `84`, `85`],
    correctAnswer: 1,
    explanation: `Weight each mean by its section size: $\\frac{15(88) + 25(80)}{40} = \\frac{1320 + 2000}{40} = \\frac{3320}{40} = 83$. Averaging 88 and 80 gives 84, which ignores that the afternoon section is larger, and swapping the section sizes gives 85. A combined mean must lie strictly between the two group means, so 80, the larger section's mean, is impossible.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `The mean of a list of 8 numbers is 14. After one more number is added to the list, the mean of the 9 numbers is 13. What number was added?`,
    options: [`13`, `27`, `5`, `117`],
    correctAnswer: 2,
    explanation: `The original total is $8 \\times 14 = 112$ and the new total is $9 \\times 13 = 117$, so the added number is $117 - 112 = 5$. The value 117 is the new total, which still includes the original 8 numbers, and 13 is the new mean rather than the added value. Adding the two means gives 27, which has no meaning here.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `The annual salaries, in thousands of dollars, of the six employees at a small firm are 42, 45, 47, 50, 51, and 250. Which measure, with its value, best describes a typical salary at the firm?`,
    options: [
      `The mean, about 80.8`,
      `The median, 48.5`,
      `The median, 47`,
      `The mean, 50`,
    ],
    correctAnswer: 1,
    explanation: `The 250 is an outlier that drags the mean up to $485 \\div 6 \\approx 80.8$, above five of the six salaries, so the median describes a typical salary better. With six values, the median is $(47 + 50) \\div 2 = 48.5$; 47 is only one of the two middle values. A mean of 50 is not the result of any correct calculation on this data.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `In a course, labs count for 30% of the final grade, quizzes count for 20%, and the final exam counts for 50%. Ana's averages are 96 on labs, 81 on quizzes, and 75 on the final exam. What is Ana's final grade?`,
    options: [`82.5`, `84`, `84.3`, `86.7`],
    correctAnswer: 0,
    explanation: `Multiply each score by its weight and add: $0.30(96) + 0.20(81) + 0.50(75) = 28.8 + 16.2 + 37.5 = 82.5$. The value 84 is the unweighted mean of the three scores, which ignores that the final counts most. Swapping the final's 50% weight with the quizzes' 20% gives 84.3, and swapping it with the labs' 30% gives 86.7.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },

  // ─────────────── Part 2 — Data displays and spread ───────────────
  {
    question: `The high temperatures, in degrees Fahrenheit, recorded in a city over six days were 58, 64, 49, 71, 66, and 53. What is the range of these temperatures?`,
    options: [`13`, `18`, `71`, `22`],
    correctAnswer: 3,
    explanation: `Range is the maximum minus the minimum: $71 - 49 = 22$. The value 13 subtracts the first listed temperature instead of the minimum, and 18 subtracts the last listed temperature. The value 71 is the maximum alone, not a spread.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `The data set below lists 10 values in order.

8, 15, 22, 30, 41, 48, 55, 62, 79, 120

What is the interquartile range (IQR) of the data?`,
    options: [`17.5`, `40`, `44.5`, `112`],
    correctAnswer: 1,
    explanation: `The median is $(41 + 48) \\div 2 = 44.5$. $Q_1$ is the median of the lower five values (8, 15, 22, 30, 41), which is 22, and $Q_3$ is the median of the upper five (48, 55, 62, 79, 120), which is 62, so the IQR is $62 - 22 = 40$. The value 44.5 is the median, and 112 is the range, which the outlier 120 inflates. The value 17.5 runs only from the median to $Q_3$, half of the box.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 2,
  },
  {
    question: `A librarian recorded how many books each of 25 students read over winter break.

| Books read | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Number of students | 3 | 5 | 8 | 6 | 2 | 1 |

What is the median number of books read?`,
    options: [`2`, `2.08`, `2.5`, `13`],
    correctAnswer: 0,
    explanation: `With 25 students, the median is the 13th value in order. Running totals: students 1 to 3 read 0 books, 4 to 8 read 1, and 9 to 16 read 2, so the 13th student read 2 books. The value 2.08 is the mean, $52 \\div 25$. The value 13 is the median's position, not its value, and 2.5 is the middle of the 0-to-5 scale rather than the middle student.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `A box plot summarizes the heights, in inches, of 40 students: minimum 58, first quartile 62, median 65, third quartile 68, and maximum 75. About how many of the students have heights from 62 inches to 68 inches?`,
    options: [`6`, `10`, `20`, `30`],
    correctAnswer: 2,
    explanation: `The box runs from $Q_1 = 62$ to $Q_3 = 68$ and holds about 50% of the data, and half of 40 is 20. About 10 students (25%) fall between $Q_1$ and the median alone, and about 30 (75%) are at or above $Q_1$. The value 6 is the IQR in inches, not a number of students.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 2,
  },
  {
    question: `Each data set below has a mean of 100. Which data set has the largest standard deviation?`,
    options: [
      `70, 100, 100, 100, 130`,
      `80, 100, 100, 110, 110`,
      `90, 100, 100, 105, 105`,
      `75, 75, 100, 125, 125`,
    ],
    correctAnswer: 3,
    explanation: `Standard deviation measures the typical distance of the values from the mean. In 75, 75, 100, 125, 125, four of the five values sit 25 away from 100. The set 70, 100, 100, 100, 130 has the widest range, but three of its values sit exactly at the mean, so its typical distance is smaller. The other two sets have values no more than 20 or 10 away from the mean, with two values right at it.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 2,
  },
  {
    question: `A data set has a mean of 30 and a standard deviation of 4. Every value in the set is doubled, and then 5 is added to each result. What are the mean and standard deviation of the new data set?`,
    options: [
      `Mean 65, standard deviation 13`,
      `Mean 70, standard deviation 8`,
      `Mean 35, standard deviation 9`,
      `Mean 65, standard deviation 8`,
    ],
    correctAnswer: 3,
    explanation: `Doubling multiplies both the mean and the standard deviation by 2, giving 60 and 8. Adding 5 then shifts the mean to 65 but leaves the spread unchanged, so the standard deviation stays 8. A standard deviation of 13 wrongly adds the 5 to the spread, a mean of 70 adds 5 before doubling, and a mean of 35 with a standard deviation of 9 ignores the doubling altogether.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 2,
  },

  // ─────────────── Part 3 — Counting principles ───────────────
  {
    question: `A café's breakfast combo includes 1 of 4 drinks, 1 of 6 pastries, and 1 of 5 fruits. How many different breakfast combos are possible?`,
    options: [`15`, `24`, `64`, `120`],
    correctAnswer: 3,
    explanation: `Each choice is a separate step, so multiply: $4 \\times 6 \\times 5 = 120$. Adding the choices gives 15, which counts single items rather than full combos, and 24 leaves out the fruit. The value 64 is $4^3$, which treats every step as having 4 options.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `A student ID consists of 1 letter followed by 3 digits. Any of the 26 letters may be used, and the 3 digits must all be different from one another. How many different IDs are possible?`,
    options: [`746`, `16,848`, `18,720`, `26,000`],
    correctAnswer: 2,
    explanation: `Fill the slots: $26 \\times 10 \\times 9 \\times 8 = 18{,}720$, with one fewer digit choice in each later slot. The value 26,000 lets the digits repeat, and 16,848 also bars 0 from the first digit, a rule for whole numbers that an ID code does not follow. Adding 26 and 720 gives 746, which treats the letter and the digits as separate cases instead of steps.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Six friends line up in a row for a photo. Lee must stand at one of the two ends of the row. In how many different orders can the six friends line up?`,
    options: [`120`, `240`, `600`, `720`],
    correctAnswer: 1,
    explanation: `Place Lee first: with Lee at the left end, the other 5 friends can be arranged in $5! = 120$ ways, and the same is true with Lee at the right end. These are separate cases, so add them: $120 + 120 = 240$. The value 120 counts only one end, 720 ignores the restriction, and 600 is $720 - 120$, the orders in which Lee is not at the left end.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 3,
  },
  {
    question: `A 3-character code is made from the letters A, B, C, D, E, and F, and letters may repeat. How many such codes contain at least one repeated letter?`,
    options: [`96`, `90`, `120`, `216`],
    correctAnswer: 0,
    explanation: `Count the complement: all codes, $6^3 = 216$, minus codes with three different letters, $6 \\times 5 \\times 4 = 120$, leaves 96. The value 216 is every code, and 120 is the codes with no repeats, the opposite of what was asked. The value 90 counts codes with exactly one pair but misses the 6 codes such as AAA that use one letter three times.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 3,
  },
  {
    question: `A control panel has 7 switches, and each switch can be set to either on or off. How many different settings of the 7 switches are possible?`,
    options: [`14`, `49`, `128`, `5,040`],
    correctAnswer: 2,
    explanation: `Each switch is a 2-way choice, so there are $2^7 = 128$ settings. The value 14 is $2 \\times 7$, which multiplies by the number of switches instead of multiplying 2 by itself once per switch, and 49 is $7^2$. The value 5,040 is $7!$, which arranges 7 different objects in a row, but the switches stay in place and each one only chooses between two states.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 3,
  },

  // ─────────────── Part 4 — Basic probability ───────────────
  {
    question: `A drawer holds 9 black socks, 3 gray socks, and 8 white socks. One sock is taken at random. What is the probability that it is NOT gray?`,
    options: [`$\\frac{3}{20}$`, `$\\frac{3}{17}$`, `$\\frac{9}{20}$`, `$\\frac{17}{20}$`],
    correctAnswer: 3,
    explanation: `There are 20 socks and 17 are not gray, so the probability is $\\frac{17}{20}$, which is also $1 - \\frac{3}{20}$. The value $\\frac{3}{20}$ is the probability of gray itself, and $\\frac{9}{20}$ is the probability of black only. The value $\\frac{3}{17}$ compares gray socks to non-gray socks instead of to all socks.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `At a high school, the probability that a randomly chosen student plays soccer is 0.45, the probability that the student is in the band is 0.30, and the probability that the student does both is 0.12. What is the probability that a randomly chosen student does neither?`,
    options: [`0.25`, `0.37`, `0.55`, `0.63`],
    correctAnswer: 1,
    explanation: `By the addition rule, $P(\\text{soccer or band}) = 0.45 + 0.30 - 0.12 = 0.63$, so $P(\\text{neither}) = 1 - 0.63 = 0.37$. The value 0.63 answers "soccer or band," the opposite of what was asked. Forgetting to subtract the overlap gives $1 - 0.75 = 0.25$, and 0.55 is only the probability of not playing soccer.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `An integer from 1 to 60, inclusive, is chosen at random. What is the probability that it is a multiple of 4 or a multiple of 10?`,
    options: [`$\\frac{1}{20}$`, `$\\frac{1}{4}$`, `$\\frac{3}{10}$`, `$\\frac{7}{20}$`],
    correctAnswer: 2,
    explanation: `There are 15 multiples of 4 and 6 multiples of 10, and 3 numbers (20, 40, 60) are multiples of both, so $15 + 6 - 3 = 18$ numbers qualify and the probability is $\\frac{18}{60} = \\frac{3}{10}$. Skipping the overlap gives $\\frac{21}{60} = \\frac{7}{20}$. The value $\\frac{1}{4} = \\frac{15}{60}$ subtracts the overlap twice (it also equals the multiples of 4 alone), and $\\frac{1}{20}$ counts only the numbers in both groups.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `A spinner is divided into 5 equal sections, 2 of which are red. The spinner is spun once, and a fair coin is flipped once. What is the probability that the spinner lands on red and the coin lands heads?`,
    options: [`$\\frac{1}{5}$`, `$\\frac{2}{5}$`, `$\\frac{7}{10}$`, `$\\frac{9}{10}$`],
    correctAnswer: 0,
    explanation: `The spin and the flip are independent, so multiply: $\\frac{2}{5} \\times \\frac{1}{2} = \\frac{1}{5}$. Adding the two probabilities gives $\\frac{9}{10}$, and $\\frac{7}{10} = \\frac{2}{5} + \\frac{1}{2} - \\frac{1}{5}$ is the probability of red or heads, not red and heads. The value $\\frac{2}{5}$ ignores the coin entirely.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `A box contains 10 batteries, 4 of which are dead. Two batteries are taken at random, one after the other, without replacement. What is the probability that the first battery is dead and the second is good?`,
    options: [`$\\frac{6}{25}$`, `$\\frac{4}{15}$`, `$\\frac{8}{15}$`, `$\\frac{2}{3}$`],
    correctAnswer: 1,
    explanation: `The first battery is dead with probability $\\frac{4}{10}$; then 6 good batteries remain among 9, so $\\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90} = \\frac{4}{15}$. The value $\\frac{6}{25} = \\frac{4}{10} \\times \\frac{6}{10}$ treats the first battery as if it were put back. The value $\\frac{8}{15}$ counts both orders (dead then good, or good then dead), and $\\frac{2}{3}$ is the second draw's probability alone.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `A quiz has 3 multiple-choice questions, each with 4 answer choices, exactly one of which is correct. A student guesses randomly on all 3 questions, and the guesses are independent. What is the probability that the student answers at least one question correctly?`,
    options: [`$\\frac{1}{64}$`, `$\\frac{27}{64}$`, `$\\frac{37}{64}$`, `$\\frac{3}{4}$`],
    correctAnswer: 2,
    explanation: `Use the complement: the student misses all 3 with probability $\\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$, so $P(\\text{at least one correct}) = 1 - \\frac{27}{64} = \\frac{37}{64}$. The value $\\frac{27}{64}$ is the probability of no correct answers, the opposite event. Adding $\\frac{1}{4}$ three times gives $\\frac{3}{4}$, which counts overlapping outcomes more than once, and $\\frac{1}{64}$ is the probability that all 3 are correct.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },

  // ─────────────── Part 5 — Combinations and permutations ───────────────
  {
    question: `A 9-member robotics team will choose a captain, a co-captain, and a manager, and no member may fill two roles. In how many different ways can the three roles be filled?`,
    options: [`24`, `84`, `72`, `504`],
    correctAnswer: 3,
    explanation: `The roles are different, so order matters: $9 \\times 8 \\times 7 = 504$. The value 84 is $C(9, 3)$, which counts groups of 3 with no roles. The value 72 is $9 \\times 8$, which fills only two of the three roles, and 24 adds $9 + 8 + 7$ instead of multiplying.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `A teacher will choose 4 of her 8 students to represent the class at a meeting, and all 4 representatives have the same role. How many different groups of 4 are possible?`,
    options: [`70`, `280`, `420`, `1,680`],
    correctAnswer: 0,
    explanation: `Order does not matter, so divide the ordered count by the $4! = 24$ orders of each group: $\\frac{8 \\times 7 \\times 6 \\times 5}{24} = \\frac{1680}{24} = 70$. The value 1,680 is the ordered count, which would fit 4 different roles, and 420 and 280 divide it by only 4 or by $3! = 6$ instead of by $4! = 24$.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `In which of the following situations does the order of the selection matter?`,
    options: [
      `Assigning 3 of 12 volunteers to 3 different shifts`,
      `Selecting 3 of 15 students to attend a conference`,
      `Choosing 5 of 20 photos to mail in one envelope`,
      `Picking 6 of 30 players for a practice squad`,
    ],
    correctAnswer: 0,
    explanation: `The shifts are different positions, so swapping two of the chosen volunteers gives a different schedule, which makes it a permutation. A group of conference attendees, a set of photos in an envelope, and a practice squad are the same no matter what order the members were picked in, so those are combinations.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `In a league of 10 teams, each team plays every other team exactly once. How many games are played in all?`,
    options: [`45`, `20`, `90`, `100`],
    correctAnswer: 0,
    explanation: `Each game is an unordered pair of teams, so the count is $C(10, 2) = \\frac{10 \\times 9}{2} = 45$. The value 90 is $10 \\times 9$, which counts each game twice, once from each team's schedule. The value 100 is $10^2$, which includes teams playing themselves, and 20 is $10 \\times 2$.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 5,
  },
  {
    question: `A box holds 6 chocolate cupcakes and 4 vanilla cupcakes. Three cupcakes are chosen at random. What is the probability that exactly 2 of the 3 are chocolate?`,
    options: [`$\\frac{1}{8}$`, `$\\frac{1}{6}$`, `$\\frac{1}{2}$`, `$\\frac{3}{5}$`],
    correctAnswer: 2,
    explanation: `There are $C(10, 3) = 120$ possible groups. A favorable group has 2 of the 6 chocolate and 1 of the 4 vanilla: $C(6, 2) \\times C(4, 1) = 15 \\times 4 = 60$, so the probability is $\\frac{60}{120} = \\frac{1}{2}$. Using only $C(6, 2) = 15$ in the numerator gives $\\frac{1}{8}$, which forgets the vanilla cupcake. The value $\\frac{1}{6} = \\frac{20}{120}$ is the probability that all 3 are chocolate, and $\\frac{3}{5}$ is the chance for a single cupcake.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 5,
  },

  // ─────────────── Part 6 — Two-way tables and conditional probability ───────────────
  {
    question: `The table shows the club that each of 160 students chose.

| | Band | Art | Robotics | Total |
|---|---|---|---|---|
| Juniors | 24 | 18 | 38 | 80 |
| Seniors | 16 | 30 | 34 | 80 |
| Total | 40 | 48 | 72 | 160 |

If one of the 160 students is chosen at random, what is the probability that the student chose art?`,
    options: [`$\\frac{9}{40}$`, `$\\frac{3}{10}$`, `$\\frac{3}{8}$`, `$\\frac{5}{8}$`],
    correctAnswer: 1,
    explanation: `No condition is given, so divide the 48 art students by all 160 students: $\\frac{48}{160} = \\frac{3}{10}$. The value $\\frac{9}{40} = \\frac{18}{80}$ is the art rate among juniors only, and $\\frac{3}{8} = \\frac{30}{80}$ is the rate among seniors only. The value $\\frac{5}{8} = \\frac{30}{48}$ is the share of art students who are seniors.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `The table shows the club that each of 160 students chose.

| | Band | Art | Robotics | Total |
|---|---|---|---|---|
| Juniors | 24 | 18 | 38 | 80 |
| Seniors | 16 | 30 | 34 | 80 |
| Total | 40 | 48 | 72 | 160 |

A student who chose robotics is chosen at random. What is the probability that the student is a senior?`,
    options: [`$\\frac{17}{80}$`, `$\\frac{17}{40}$`, `$\\frac{9}{20}$`, `$\\frac{17}{36}$`],
    correctAnswer: 3,
    explanation: `The condition is "chose robotics," so the denominator is the 72 robotics students, and 34 of them are seniors: $\\frac{34}{72} = \\frac{17}{36}$. The value $\\frac{17}{40} = \\frac{34}{80}$ reverses the condition, giving the robotics rate among seniors. The value $\\frac{17}{80} = \\frac{34}{160}$ is P(senior and robotics), and $\\frac{9}{20} = \\frac{72}{160}$ is the overall share of robotics students.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `The table shows the club that each of 160 students chose.

| | Band | Art | Robotics | Total |
|---|---|---|---|---|
| Juniors | 24 | 18 | 38 | 80 |
| Seniors | 16 | 30 | 34 | 80 |
| Total | 40 | 48 | 72 | 160 |

If one of the 160 students is chosen at random, what is the probability that the student is a junior or chose band?`,
    options: [`$\\frac{3}{20}$`, `$\\frac{9}{20}$`, `$\\frac{3}{4}$`, `$\\frac{3}{5}$`],
    correctAnswer: 3,
    explanation: `Add the junior total and the band total, then subtract the 24 junior band members counted in both: $\\frac{80 + 40 - 24}{160} = \\frac{96}{160} = \\frac{3}{5}$. Skipping the subtraction gives $\\frac{120}{160} = \\frac{3}{4}$, and subtracting the overlap twice gives $\\frac{72}{160} = \\frac{9}{20}$. The value $\\frac{3}{20} = \\frac{24}{160}$ is the probability of junior and band.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A bookstore surveyed 150 customers about the kind of book they prefer. Some cells of the table are missing.

| | Fiction | Nonfiction | Total |
|---|---|---|---|
| Adults | | 42 | 90 |
| Teens | 32 | | |
| Total | | 70 | 150 |

If a teen in the survey is chosen at random, what is the probability that the teen prefers nonfiction?`,
    options: [`$\\frac{14}{75}$`, `$\\frac{2}{5}$`, `$\\frac{7}{15}$`, `$\\frac{8}{15}$`],
    correctAnswer: 2,
    explanation: `The teens number $150 - 90 = 60$, and the teens who prefer nonfiction number $70 - 42 = 28$, so the probability is $\\frac{28}{60} = \\frac{7}{15}$. Dividing those 28 by the 70 nonfiction readers gives $\\frac{2}{5}$, which reverses the condition, and dividing by all 150 customers gives $\\frac{14}{75}$. The value $\\frac{8}{15} = \\frac{32}{60}$ is the share of teens who prefer fiction.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `The table shows whether 150 students used a study app and whether they passed an exam.

| | Passed | Did not pass | Total |
|---|---|---|---|
| Used the app | 45 | 15 | 60 |
| Did not use it | 63 | 27 | 90 |
| Total | 108 | 42 | 150 |

Which statement is best supported by the table?`,
    options: [
      `Students who used the app passed at a higher rate`,
      `Non-users of the app passed at a higher rate`,
      `Passing and app use appear independent here`,
      `Most of the students who passed had used the app`,
    ],
    correctAnswer: 0,
    explanation: `Compare rates, not counts: $\\frac{45}{60} = 75\\%$ of app users passed, compared with $\\frac{63}{90} = 70\\%$ of non-users. More non-users passed (63 versus 45) only because there are more non-users, so their rate is not higher. The rates differ, so the variables do not appear independent, and only 45 of the 108 students who passed used the app, which is not most.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 6,
  },
  {
    question: `At a gym, 30% of the members are under 25 years old. Of the members under 25, 70% use the pool; of the members 25 or older, 30% use the pool. A member who uses the pool is chosen at random. What is the probability that the member is under 25?`,
    options: [`$\\frac{3}{10}$`, `$\\frac{21}{100}$`, `$\\frac{1}{2}$`, `$\\frac{7}{10}$`],
    correctAnswer: 2,
    explanation: `Imagine 1,000 members: 300 are under 25 and 700 are 25 or older. Pool users number $0.70(300) = 210$ and $0.30(700) = 210$, or 420 in all, so the probability is $\\frac{210}{420} = \\frac{1}{2}$. The value $\\frac{7}{10}$ is P(pool given under 25), the reverse condition, and $\\frac{21}{100} = \\frac{210}{1000}$ is P(under 25 and pool). The value $\\frac{3}{10}$ is the share of all members who are under 25, which ignores the condition.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 6,
  },

  // ─────────────── Part 7 — Expected value, sampling, and mixed review ───────────────
  {
    question: `The number of pets, $x$, in a randomly chosen household in a town has the probability distribution below.

| Pets, $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Probability | 0.25 | 0.4 | $p$ | 0.15 |

What is the expected number of pets per household?`,
    options: [`0.85`, `1`, `1.5`, `1.25`],
    correctAnswer: 3,
    explanation: `The probabilities add to 1, so $p = 1 - (0.25 + 0.4 + 0.15) = 0.2$. Then $E(x) = 0(0.25) + 1(0.4) + 2(0.2) + 3(0.15) = 0.4 + 0.4 + 0.45 = 1.25$. Leaving out the term with $p$ gives 0.85, and 1.5 is the plain average of 0, 1, 2, and 3. The value 1 is the most likely number of pets, not the long-run average.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `A game costs 4 points to play. The player rolls a fair six-sided die and wins 9 points for a 6, wins 3 points for a 4 or a 5, and wins nothing otherwise. What is the player's expected net gain per game?`,
    options: [`$-2$ points`, `$-1.5$ points`, `$1.5$ points`, `$2.5$ points`],
    correctAnswer: 1,
    explanation: `Expected winnings are $9 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{2}{6} = 1.5 + 1 = 2.5$ points, and subtracting the 4-point cost gives $-1.5$ points per game. A gain of 2.5 points forgets the cost, and a gain of 1.5 points has the sign backward, since the cost exceeds the expected winnings. A net gain of $-2$ points counts the 3-point prize for only one of the two faces that pay it.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 7,
  },
  {
    question: `At an electronics store, the probability that a customer who buys a laptop also buys a warranty is 0.15, independently from customer to customer. Of the next 40 laptop buyers, how many are expected to buy a warranty?`,
    options: [`34`, `6`, `15`, `266.7`],
    correctAnswer: 1,
    explanation: `The expected count is $n \\times p = 40 \\times 0.15 = 6$. The value 34 is the expected number who do not buy a warranty, and 15 is the percent rather than a count of customers. The value 266.7 divides 40 by 0.15 instead of multiplying, giving more buyers than there are customers.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 7,
  },
  {
    question: `A city council wants to estimate the percent of all city residents who support adding a new bus route. Which survey method is most likely to produce a representative sample?`,
    options: [
      `Randomly select 300 people from a complete list of residents`,
      `Survey 300 riders waiting at the city's busiest bus stop`,
      `Use the first 2,000 responses to a poll on the city website`,
      `Survey 300 members of a neighborhood group along the route`,
    ],
    correctAnswer: 0,
    explanation: `Random selection from a complete list gives every resident the same chance of being chosen, so the sample should resemble the whole city. Riders at a bus stop already use buses and likely favor more routes, and people living along the route are a single group with a direct stake. The 2,000 website responses come from self-selected volunteers, and a larger sample does not fix that bias.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 7,
  },
  {
    question: `The five numbers 3, 9, $x$, 4, and 21 have a mean of 10. What is the median of the five numbers?`,
    options: [`13`, `9`, `10`, `18`],
    correctAnswer: 1,
    explanation: `A mean of 10 for 5 numbers means the sum is 50, so $x = 50 - 37 = 13$. In order the numbers are 3, 4, 9, 13, 21, and the median is the middle value, 9. The value 13 is $x$ itself (and the middle entry of the unsorted list), 10 is the mean, and 18 is the range.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Two fair six-sided dice are rolled. What is the probability that the sum of the two numbers rolled is 8?`,
    options: [`$\\frac{1}{12}$`, `$\\frac{1}{11}$`, `$\\frac{5}{36}$`, `$\\frac{1}{6}$`],
    correctAnswer: 2,
    explanation: `There are $6 \\times 6 = 36$ equally likely outcomes, and 5 of them sum to 8: (2, 6), (3, 5), (4, 4), (5, 3), and (6, 2), so the probability is $\\frac{5}{36}$. Counting unordered pairs gives only 3 outcomes and $\\frac{3}{36} = \\frac{1}{12}$, but (2, 6) and (6, 2) are different rolls. The value $\\frac{1}{11}$ treats the 11 possible sums as equally likely, and $\\frac{1}{6} = \\frac{6}{36}$ counts (4, 4) twice.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-statistics-probability-act')
