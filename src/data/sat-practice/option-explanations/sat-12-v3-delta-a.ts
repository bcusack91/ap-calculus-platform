import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:f490ea8c24501550": {
    "options": [
      "The predicted number of guests at a cost of 0",
      "The predicted cost, in dollars, for 0 guests",
      "The predicted cost, in dollars, per added guest",
      "The predicted cost, in dollars, for 108 guests"
    ],
    "explanations": [
      "Role reversal. In $C = 23g + 108$, the 108 is a value of $C$, the cost, not of $g$. Setting the cost to 0 would mean solving for $g$, which gives a negative number of guests, not 108.",
      "When $g = 0$, $C = 23(0) + 108 = 108$. So 108 is the predicted cost, in dollars, for an order with 0 guests, a fixed fee before any per-guest charges.",
      "The cost per added guest is the slope, 23, the coefficient of $g$. Each extra guest raises $C$ by 23 dollars; the constant 108 does not change with $g$.",
      "Plugging in 108 guests gives $23(108) + 108 = 2{,}592$ dollars, not 108. This choice treats the constant as an input value of $g$ rather than the cost at $g = 0$."
    ]
  },
  "q:1abfecf9e684f2b2": {
    "options": [
      "$10$",
      "$4$",
      "$2$",
      "$7$"
    ],
    "explanations": [
      "Since $x = 2$ satisfies $x \\ge 2$, the second rule applies: $f(2) = 3(2) + 4 = 10$. The first rule covers only $x < 2$.",
      "Boundary trap. This uses the first rule, $2^2 = 4$, but that rule holds only for $x < 2$. At exactly $x = 2$ the condition $x \\ge 2$ sends you to $3x + 4$.",
      "This returns the input itself rather than evaluating the function. Neither rule gives 2: the correct rule at $x = 2$ is $3x + 4$, which yields 10.",
      "This adds 3 and 4 without multiplying 3 by the input. The rule is $3x + 4$, so $f(2) = 3 \\cdot 2 + 4 = 10$, not $3 + 4$."
    ]
  },
  "q:9c991d8c559b5582": {
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "explanations": [
      "The interior holds about $68.7$ liters, and $68.7/25 \\approx 2.75$. Two bags supply only 50 liters, so rounding down leaves the planter partly empty; you need the next whole bag.",
      "Interior radius $30 - 5 = 25$ cm and depth $40 - 5 = 35$ cm give $\\pi(25)^2(35) \\approx 68{,}722$ cubic cm, about $68.7$ L. Then $68.7/25 \\approx 2.75$, so 3 whole bags.",
      "This uses the outer radius 30 with the interior depth 35: $\\pi(30)^2(35) \\approx 98{,}960$ cubic cm, about 3.96 bags. It forgets that the 5 cm wall shrinks the interior radius.",
      "This uses the full outer dimensions, $\\pi(30)^2(40) \\approx 113{,}100$ cubic cm, about 4.5 bags, ignoring both the wall thickness and the solid base."
    ]
  },
  "q:83b0c05310daf844": {
    "options": [
      "76",
      "72",
      "78",
      "82"
    ],
    "explanations": [
      "Too low. The 70 carries only 2 of the 8 total weight units, while 78 and 95 carry 3 each, so the average must sit well above 78. The correct value is $659/8 \\approx 82$.",
      "Too low. A result this close to 70 would require the lowest score to dominate, but it has the smallest weight. Correctly, $\\frac{78(3) + 95(3) + 70(2)}{8} = \\frac{659}{8} \\approx 82$.",
      "This is the middle score, 78, ignoring the weights altogether. Because the high score 95 has weight 3 and the low score 70 only weight 2, the weighted average is pulled above 78, to about 82.",
      "Weighted sum: $78(3) + 95(3) + 70(2) = 234 + 285 + 140 = 659$. Divide by the total weight 8: $659/8 \\approx 82.4$, which rounds to 82."
    ]
  },
  "q:1831147fab47c2a3": {
    "options": [
      "$2.5$",
      "$150$",
      "$550$",
      "$250$"
    ],
    "explanations": [
      "Unit trap. The zeros $x = \\frac{3}{2}$ and $x = 4$ differ by $2.5$, but $x$ counts HUNDREDS of items. The question asks for items, so $2.5$ must be multiplied by 100.",
      "This is $\\frac{3}{2}$ hundred items, just one of the two production levels converted to items, not the difference between the two levels.",
      "This is the SUM of the two levels, $\\frac{3}{2} + 4 = 5.5$ hundred, converted to items. The question asks for the positive difference, $4 - \\frac{3}{2}$.",
      "Factor: $C(x) = x(2x - 3)(x - 4)$, so the nonzero zeros are $x = \\frac{3}{2}$ and $x = 4$ hundred items. Their difference is $2.5$ hundred, or $250$ items."
    ]
  },
  "q:29bea078b678b726": {
    "options": [
      "10",
      "16",
      "2",
      "11"
    ],
    "explanations": [
      "$f(5) = 3|5 - 2| + 1 = 3(3) + 1 = 10$. Evaluate inside the absolute value first, then multiply by 3, then add 1.",
      "This drops the $-2$ inside the absolute value, computing $3|5| + 1 = 16$. The input must be shifted first: $|5 - 2| = 3$.",
      "This forgets the coefficient 3 and subtracts instead of adding, as in $|5 - 2| - 1 = 2$. The 3 multiplies the absolute value and the 1 is added: $3(3) + 1 = 10$.",
      "Arithmetic slip. With $|5 - 2| = 3$, the expression is $3 \\cdot 3 + 1 = 9 + 1 = 10$, not 11; no correct order of these operations produces 11."
    ]
  },
  "q:28b22e17bb4da6f0": {
    "options": [
      "$1$",
      "$2$",
      "$2.8$",
      "$6.4$"
    ],
    "explanations": [
      "This is the distance from $P$ to the line, $\\frac{|3(7) - 4(2) - 8|}{5} = 1$. The question asks for the $y$-coordinate of the closest point, not how far away it is.",
      "This is $P$'s own $y$-coordinate. But $(7, 2)$ is not on the line, since $\\frac{3}{4}(7) - 2 = 3.25$, so the closest point on the line must have a different location.",
      "Project $P$ onto the line: from $(0,-2)$, the vector to $P$ is $(7, 4)$, and its projection onto direction $(4, 3)$ is $\\frac{40}{25} = 1.6$ units of $(4,3)$, giving $(6.4, 2.8)$. The $y$-coordinate is $2.8$.",
      "This is the $x$-coordinate of the closest point $(6.4, 2.8)$. The question asks for the $y$-coordinate, which is $\\frac{3}{4}(6.4) - 2 = 2.8$."
    ]
  },
  "q:8b1332ec85ff2bb1": {
    "options": [
      "0.300",
      "0.250",
      "0.267",
      "0.292"
    ],
    "explanations": [
      "This is $18/60$, treating all 60 marbles as equally likely, as if drawn from one combined pile. Because a box is chosen first, each box gets weight $\\frac{1}{3}$ regardless of its size.",
      "This is the green rate of Box 1 alone, $5/20$. It answers only one branch of the two-stage process instead of averaging all three boxes' green rates.",
      "This is the green rate of Box 3 alone, $4/15 \\approx 0.267$. The selected box is random, so the three boxes' rates must be averaged.",
      "Each box is equally likely, so average the three green rates: $\\frac{1}{3}\\left(\\frac{5}{20} + \\frac{9}{25} + \\frac{4}{15}\\right) = \\frac{1}{3}(0.250 + 0.360 + 0.267) \\approx 0.292$."
    ]
  },
  "q:be162dabe1806803": {
    "options": [
      "-7",
      "-1",
      "5",
      "-6"
    ],
    "explanations": [
      "$2^{-7} = \\frac{1}{128}$, far smaller than $\\frac{1}{2}$. A negative exponent is right, but only $-1$ gives a single reciprocal of 2.",
      "$\\frac{1}{2} = 2^{-1}$, so matching exponents gives $x = -1$. A negative exponent means a reciprocal.",
      "$2^{5} = 32$, which is greater than 1. Any positive exponent makes $2^x$ larger than 1, so it can never equal $\\frac{1}{2}$.",
      "$2^{-6} = \\frac{1}{64}$, not $\\frac{1}{2}$. Only one factor of 2 belongs in the denominator, so the exponent must be $-1$."
    ]
  },
  "q:a76886b7a05d83ea": {
    "options": [
      "$-\\frac{11}{3}$",
      "$-\\frac{3}{4}$",
      "$\\frac{27}{4}$",
      "$9$"
    ],
    "explanations": [
      "This is the $y$-intercept of the radius line through $(2,-1)$ and $(5,3)$, which has slope $\\frac{4}{3}$. The tangent must be perpendicular to that radius, with slope $-\\frac{3}{4}$.",
      "This is the tangent's slope, not its $y$-intercept. The slope $-\\frac{3}{4}$ is an intermediate step; you still need to substitute $x = 0$ into the line's equation.",
      "Radius slope $\\frac{3 - (-1)}{5 - 2} = \\frac{4}{3}$, so the tangent slope is $-\\frac{3}{4}$. Then $y - 3 = -\\frac{3}{4}(x - 5)$ gives $y = -\\frac{3}{4}x + \\frac{27}{4}$, so the $y$-intercept is $\\frac{27}{4}$.",
      "This is where the tangent crosses the $x$-axis: setting $y = 0$ in $y = -\\frac{3}{4}x + \\frac{27}{4}$ gives $x = 9$. The question asks for the $y$-axis crossing."
    ]
  },
  "q:454bad6a3f2470a7": {
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{7}{6}$",
      "$\\frac{4}{3}$",
      "$1$"
    ],
    "explanations": [
      "This reads only $\\sqrt[3]{x^{2}} = x^{2/3}$, ignoring the $\\sqrt{x}$ factor and the denominator. All three radicals must be combined into one exponent.",
      "This is $\\frac{1}{2} + \\frac{2}{3} = \\frac{7}{6}$, dropping the denominator $\\sqrt[6]{x}$. Dividing by $x^{1/6}$ subtracts $\\frac{1}{6}$ from the exponent.",
      "This adds the $\\frac{1}{6}$ instead of subtracting it: $\\frac{1}{2} + \\frac{2}{3} + \\frac{1}{6} = \\frac{4}{3}$. Division subtracts exponents.",
      "With $x^{1/2} \\cdot x^{2/3} / x^{1/6}$, add and subtract exponents: $\\frac{3}{6} + \\frac{4}{6} - \\frac{1}{6} = \\frac{6}{6} = 1$."
    ]
  },
  "q:087d047cc99a1a66": {
    "options": [
      "The slope increases substantially and the y-intercept decreases.",
      "The slope decreases substantially and the y-intercept increases.",
      "Both the slope and the y-intercept decrease.",
      "The slope changes very little, but the y-intercept increases."
    ],
    "explanations": [
      "Slope swings come from points extreme in $x$, which have leverage. This point sits near the mean $x$-value, so it cannot tilt the line much, and lying above the data it raises the line rather than lowering the intercept.",
      "A point near the mean $x$-value has almost no leverage, so the slope does not change substantially. Being extreme only in $y$ shifts the line up, not tilts it.",
      "Direction error. The new point lies far ABOVE the rest of the data, so it pulls the line upward. The intercept cannot decrease, and the slope barely changes.",
      "The fitted line passes through $(\\bar{x}, \\bar{y})$. The new point barely moves $\\bar{x}$ but raises $\\bar{y}$, shifting the line up. With almost no leverage at the mean $x$, the slope changes very little."
    ]
  },
  "q:a6ebce7c387bee2c": {
    "options": [
      "$7.24\\%$",
      "$7.50\\%$",
      "$15\\%$",
      "$32.25\\%$"
    ],
    "explanations": [
      "Rewrite with a yearly base: $V = 340\\left[(1.15)^{1/2}\\right]^{y}$, and $(1.15)^{1/2} \\approx 1.0724$. The value grows about $7.24\\%$ each year.",
      "This halves $15\\%$, treating two-year growth as if it were linear. Compound growth requires the square root: $\\sqrt{1.15} \\approx 1.0724$, about $7.24\\%$, not $7.50\\%$.",
      "This reads $1.15$ straight off the model. Because the exponent is $\\frac{y}{2}$, the $15\\%$ growth happens every TWO years, not every year.",
      "This is $(1.15)^2 - 1$, the conversion run backward: it squares the factor instead of taking the square root. That would be growth over four years."
    ]
  },
  "q:46052f2cc0f60778": {
    "options": [
      "$-\\frac{4}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$"
    ],
    "explanations": [
      "This uses $k = -5$, the rejected root of $(k - 3)^2 = 64$. The condition $k > 3$ requires $k = 11$, which gives a positive slope.",
      "Rise and run are inverted: $\\frac{6}{8}$ instead of $\\frac{8}{6}$. Slope is change in $y$ over change in $x$.",
      "$(2 + 4)^2 + (k - 3)^2 = 100$ gives $(k - 3)^2 = 64$, so $k = 11$ (since $k > 3$). Slope $= \\frac{11 - 3}{2 - (-4)} = \\frac{8}{6} = \\frac{4}{3}$.",
      "This puts the distance $AB = 10$ over the run 6. The rise is the vertical change $k - 3 = 8$, not the length of the segment."
    ]
  },
  "q:81d4fe719e5d440a": {
    "options": [
      "91",
      "103",
      "69",
      "81"
    ],
    "explanations": [
      "90 percent of a number is less than the number itself, so the answer must be below 90. 91 is larger than 90 and cannot be correct.",
      "Like any percent under 100, $90\\%$ of 90 must be less than 90. 103 exceeds the original number, so it fails at once.",
      "Too small. $90\\%$ of 90 removes only $10\\%$, which is 9, giving 81. A result of 69 would remove 21, more than twice the right amount.",
      "$90\\%$ of $90 = 0.9 \\times 90 = 81$. Equivalently, $10\\%$ of 90 is 9, and $90 - 9 = 81$."
    ]
  },
  "q:4fbe1e8d397a4199": {
    "options": [
      "1",
      "8",
      "7",
      "3"
    ],
    "explanations": [
      "This is $a - b = 4 - 3$. The question asks for the sum $a + b$, not the difference.",
      "This mixes bases: 8 is the exponent of 256 as a power of 2 ($2^8$). In base 4, $256 = 4^4$ and $64 = 4^3$, so the sum is 7.",
      "$4^4 = 256$ gives $a = 4$, and $4^3 = 64$ gives $b = 3$. So $a + b = 4 + 3 = 7$.",
      "This is $b$ alone, from $4^3 = 64$. The question asks for $a + b$, so $a = 4$ must be added."
    ]
  },
  "q:37a3e91b1f21f0fa": {
    "options": [
      "$(\\frac{1}{3}, 0)$",
      "$(0, \\frac{1}{3})$",
      "$(0, -\\frac{1}{3})$",
      "$(0, 3)$"
    ],
    "explanations": [
      "Coordinates swapped. A $y$-intercept lies on the $y$-axis, so its $x$-coordinate must be 0; $(\\frac{1}{3}, 0)$ sits on the $x$-axis.",
      "The $y$-intercept occurs at $x = 0$: $f(0) = \\frac{0 + 1}{0 + 3} = \\frac{1}{3}$, so the point is $(0, \\frac{1}{3})$.",
      "Sign error. $f(0) = \\frac{1}{3}$, with both numerator and denominator positive, so the intercept is positive, not $-\\frac{1}{3}$.",
      "This flips the fraction to $\\frac{3}{1}$. At $x = 0$ the numerator is 1 and the denominator is 3, giving $\\frac{1}{3}$."
    ]
  },
  "q:ee91c74359a2d949": {
    "options": [
      "The model predicts about -7,450 dollars, which is impossible; 15 years lies far outside the 1-to-8-year range of the data, so the model should not be applied there.",
      "The model predicts about 7,450 dollars, and the prediction is reliable because the model was built from real resale data.",
      "The model predicts about 0 dollars, which shows that a 15-year-old car is worthless.",
      "The model predicts about 7,600 dollars, which is reliable because 8 years lies within the data range."
    ],
    "explanations": [
      "$24800 - 2150(15) = -7450$ dollars, which is impossible for a resale value. The data cover only ages 1 to 8, so applying the model at 15 years is extrapolation it cannot support.",
      "This drops the negative sign of $-7450$ and calls the prediction reliable merely because the model came from real data. Real data do not license predictions far outside their range.",
      "The model does not give 0 for 15 years; it gives $-7450$. Even a prediction near 0 would be extrapolation, so it cannot show the car is worthless.",
      "7,600 dollars is the model's value at $a = 8$, not $a = 15$. Being inside the data range at age 8 says nothing about a 15-year-old car."
    ]
  },
  "q:d2f6bf92768d1fe7": {
    "options": [
      "45",
      "57",
      "36",
      "64"
    ],
    "explanations": [
      "This corresponds to about $\\frac{5}{11}$, not $\\frac{4}{11}$. Water is 4 of the 11 total liters, which is about $36\\%$.",
      "This is $\\frac{4}{7} \\approx 57\\%$, comparing water to juice instead of water to the whole mixture. The total is $4 + 7 = 11$ liters.",
      "Water is 4 of the $4 + 7 = 11$ liters: $\\frac{4}{11} \\times 100 \\approx 36\\%$.",
      "This is the JUICE share, $\\frac{7}{11} \\approx 64\\%$. The question asks what percent is water."
    ]
  },
  "q:e8c9dab8a1af2b55": {
    "options": [
      "9",
      "10",
      "0",
      "5"
    ],
    "explanations": [
      "This adds $a$ to 7 instead of subtracting it. Since $2^a \\cdot 2^b = 2^{a+b}$, we need $2 + b = 7$, so $b = 5$.",
      "Check: $2^2 \\cdot 2^{10} = 2^{12}$, not $2^7$. The exponents must sum to 7, so $b = 7 - 2 = 5$.",
      "Check: $2^2 \\cdot 2^0 = 2^2$, not $2^7$. With $b = 0$ the product stays at $2^2$.",
      "Multiplying powers of the same base adds exponents: $a + b = 7$, so $b = 7 - 2 = 5$."
    ]
  },
  "q:06e32c5f6004a2a5": {
    "options": [
      "45",
      "42",
      "46",
      "44"
    ],
    "explanations": [
      "The total is $9(46) = 414$; the eight known masses sum to 372, so the ninth is 42. Ordered, the nine masses are 38, 41, 42, 44, 45, 47, 50, 52, 55, and the fifth is 45.",
      "This is the missing mass found from the mean, an intermediate result. The median is the middle value after 42 is placed in the ordered list.",
      "This is the mean, reported as if mean and median had to match. Once the missing value 42 is inserted, the middle value is 45.",
      "Off-by-one. 44 is the fourth of the nine ordered values; the median of nine values is the fifth, 45."
    ]
  },
  "q:ef653fe92e929beb": {
    "options": [
      "$0.75$",
      "$2.4$",
      "$3.2$",
      "$5$"
    ],
    "explanations": [
      "This is the slope $m = \\frac{3}{4}$, an intermediate value from the tangency condition. The question asks for the $x$-coordinate of the point of contact.",
      "This is the $y$-coordinate of the tangency point $(3.2, 2.4)$, not its $x$-coordinate.",
      "Tangency: $\\frac{5m}{\\sqrt{m^2 + 1}} = 3$ gives $m = \\frac{3}{4}$. The foot of the perpendicular from $(5,0)$ is at $x = \\frac{5}{1 + (3/4)^2} = 3.2$, with $y = 2.4$.",
      "This is the center's $x$-coordinate. The center is inside the circle, not on it, so it cannot be where the tangent line touches."
    ]
  },
  "q:79396d8bc91ebf3a": {
    "options": [
      "$5$",
      "$16$",
      "$20$",
      "$24$"
    ],
    "explanations": [
      "This is the NUMBER of triplings needed, not the number of weeks. Each tripling takes 4 weeks, so 5 triplings take $5 \\times 4 = 20$ weeks.",
      "At 16 weeks the population is $50 \\cdot 3^4 = 4{,}050$, still below $10{,}000$. One more 4-week period is needed.",
      "From 50, triple every 4 weeks: 150, 450, 1,350, 4,050, then 12,150 at week 20. That is the first time the population exceeds $10{,}000$.",
      "At 24 weeks the population is $36{,}450$, but it already exceeded $10{,}000$ at week 20 (12,150). This is one period past the first crossing."
    ]
  },
  "q:5cc74be500e4aa19": {
    "options": [
      "$y = 7$",
      "$x = -7$",
      "$x = 0$",
      "$x = 7$"
    ],
    "explanations": [
      "This is a horizontal line. A vertical asymptote has the form $x = c$; $y = 7$ is not even a horizontal asymptote, which here is $y = 0$.",
      "Sign error. The denominator $x - 7$ is zero at $x = 7$, not $x = -7$; at $x = -7$ it equals $-14$.",
      "At $x = 0$ the function is defined, $f(0) = -\\frac{1}{7}$. A vertical asymptote occurs where the denominator, not $x$, equals 0.",
      "A vertical asymptote occurs where the denominator is zero: $x - 7 = 0$, so $x = 7$."
    ]
  },
  "q:911bf1d21ed4a986": {
    "options": [
      "The range and the standard deviation both increase",
      "The range and the standard deviation both decrease",
      "The range decreases, and the standard deviation increases",
      "The range stays the same, and the standard deviation decreases"
    ],
    "explanations": [
      "Wrong direction for both. Removing the outlier 99 shrinks the range from 66 to 9 and leaves the remaining values clustered tightly, so the spread falls.",
      "Without 99, the range falls from $99 - 33 = 66$ to $42 - 33 = 9$. The removed value was far from the rest, so the remaining values sit closer to their mean and the standard deviation decreases too.",
      "Half right. The range does decrease, but the standard deviation cannot rise: the extreme value 99 was the biggest source of spread, and removing it lowers it.",
      "The range does change: the maximum drops from 99 to 42, so the range shrinks from 66 to 9. Only the standard deviation part of this statement is right."
    ]
  },
  "q:dd5bfbcd4bd90fe0": {
    "options": [
      "$410$",
      "$1{,}952$",
      "$2{,}362$",
      "$3{,}200$"
    ],
    "explanations": [
      "This is the FOURTH month's sales alone, $512(0.8) = 409.6 \\approx 410$. The question asks for the total over all four months.",
      "This is $800 + 640 + 512$, the total of only the first THREE months. The fourth month's 409.6 copies must be added.",
      "Monthly sales are 800, 640, 512, and 409.6, each 0.8 times the last. The total is $2361.6$, which rounds to $2{,}362$ copies.",
      "This is $4 \\times 800$, as if sales stayed at 800 every month. Sales drop by $20\\%$ each month, so the total must be lower."
    ]
  },
  "q:8df056eea89532cc": {
    "options": [
      "39.6",
      "16.4",
      "6.4",
      "60.4"
    ],
    "explanations": [
      "Missing cell: $128 - 62 - 45 = 21$ under-30 poetry fans (check: $21 + 32 = 53$). Restricting to poetry readers, divide by the poetry total: $21/53 \\approx 39.6\\%$.",
      "This is $21/128$, the percent of under-30 members who prefer poetry. The question restricts to poetry readers, so the denominator must be the poetry total, 53.",
      "This is $21/330$, the percent of ALL members who are under 30 and prefer poetry. The condition \"of the members who prefer poetry\" makes 53 the denominator.",
      "This is $32/53$, the percent of poetry readers who are 30 and over, the complement of the requested group."
    ]
  },
  "q:51f5deb1a17824c9": {
    "options": [
      "$\\approx 16.0$",
      "$\\approx 40.0$",
      "$\\approx 30.5$",
      "$\\approx 28.0$"
    ],
    "explanations": [
      "This is $28 - 12$, subtracting the legs. The ladder is the hypotenuse, so it must be longer than either leg: $\\sqrt{28^2 + 12^2}$.",
      "This adds the legs, $28 + 12$. The Pythagorean theorem adds their SQUARES: $\\sqrt{784 + 144} = \\sqrt{928} \\approx 30.5$.",
      "The ladder is the hypotenuse: $\\sqrt{28^2 + 12^2} = \\sqrt{928} \\approx 30.5$ feet.",
      "This is just the height up the wall. The ladder also spans 12 feet horizontally, so as the hypotenuse it must be longer than 28 feet."
    ]
  },
  "q:ec3f150bd630459c": {
    "options": [
      "$(x + 2)^2$",
      "$(x - 2)^2$",
      "$(x + 4)(x + 1)$",
      "$(x + 2)(x - 2)$"
    ],
    "explanations": [
      "Perfect square: $4 = 2^2$ and $4x = 2 \\cdot 2 \\cdot x$, so $x^2 + 4x + 4 = (x + 2)^2$.",
      "Sign error. $(x - 2)^2 = x^2 - 4x + 4$, which has a negative middle term. The given $+4x$ requires $(x + 2)^2$.",
      "Expanding gives $(x + 4)(x + 1) = x^2 + 5x + 4$. The factors multiply to 4 but add to 5, not 4.",
      "This is a difference of squares: $(x + 2)(x - 2) = x^2 - 4$. It has no $x$ term and the wrong constant sign."
    ]
  },
  "q:830b05f5fa8cd5f5": {
    "options": [
      "No linear association",
      "Strong negative linear",
      "Strong positive linear",
      "Weak positive linear"
    ],
    "explanations": [
      "Points lying very close to a straight line are the definition of a clear linear association. \"No linear association\" would show random scatter.",
      "Direction error. Points that rise from left to right show a POSITIVE association; a negative one would fall from left to right.",
      "Rising from left to right makes it positive, and points lying very close to a straight line make it strong and linear.",
      "The direction is right, but the strength is wrong. Points lying very close to the line indicate a strong association; a weak one would be widely scattered."
    ]
  },
  "q:1d3faf85b69384f3": {
    "options": [
      "-2",
      "3",
      "2",
      "6"
    ],
    "explanations": [
      "This takes the sign inside $(x - 2)$ as the answer. The squared term is never negative, so with the $+3$ outside, $f(x)$ can never fall below 3.",
      "$3(x - 2)^2 \\ge 0$, and it equals 0 at $x = 2$. So the minimum value is $f(2) = 0 + 3 = 3$.",
      "This is the $x$-value where the minimum occurs, $x = 2$. The question asks for the minimum VALUE of $f$, which is $f(2) = 3$.",
      "This adds the leading coefficient 3 to the constant 3. At the vertex the squared term is 0, so the coefficient contributes nothing: $f(2) = 3$."
    ]
  },
  "q:4a5fa2b1faaf4000": {
    "options": [
      "8",
      "9",
      "11",
      "12"
    ],
    "explanations": [
      "Solve $\\frac{6 + x}{10 + x} = \\frac{7}{9}$: $54 + 9x = 70 + 7x$, so $x = 8$. Check: $\\frac{14}{18} = \\frac{7}{9}$.",
      "Check: adding 9 gives $\\frac{15}{19}$, which is not $\\frac{7}{9}$ (that would need $\\frac{14.78}{19}$). The equation $\\frac{6 + x}{10 + x} = \\frac{7}{9}$ gives $x = 8$.",
      "Check: adding 11 gives $\\frac{17}{21} \\approx 0.81$, more than $\\frac{7}{9} \\approx 0.78$. Too many red marbles have been added.",
      "Check: adding 12 gives $\\frac{18}{22} = \\frac{9}{11} \\approx 0.82$, above $\\frac{7}{9}$. Remember the total grows along with the red count."
    ]
  },
  "q:3d5b945b223e1366": {
    "options": [
      "61",
      "53",
      "66",
      "51"
    ],
    "explanations": [
      "Arithmetic slip: 61 is 8 more than the correct sum. The terms are $3(9) = 27$, $6(3) = 18$, and 8, and $27 + 18 + 8 = 53$.",
      "$f(3) = 3(3)^2 + 6(3) + 8 = 27 + 18 + 8 = 53$. Square 3 first, then multiply by 3.",
      "Too large by 13. Evaluating correctly, $3 \\cdot 9 + 6 \\cdot 3 + 8 = 53$; check that each term is computed separately before adding.",
      "Arithmetic slip: 51 is 2 less than the correct sum $27 + 18 + 8 = 53$."
    ]
  },
  "q:21c41c8eff268eb4": {
    "options": [
      "6.25",
      "19.75",
      "15.0",
      "10.7"
    ],
    "explanations": [
      "This divides the 75 points from the last stretch by 12, the full season. Those 75 points were scored in only 5 games, so $75/5 = 15$.",
      "This averages 18.5 and 21 without weighting. Besides, if the first 7 games beat the season mean, the last 5 must fall BELOW 18.5, not above it.",
      "Season total $12(18.5) = 222$; first seven games $7(21) = 147$. The last five games scored $222 - 147 = 75$ points, a mean of $75/5 = 15$.",
      "This divides the 75-point remainder by 7, the number of games in the wrong stretch. The remaining points came from the last 5 games."
    ]
  },
  "q:c363577e96aa6fa1": {
    "options": [
      "15",
      "12",
      "17",
      "22"
    ],
    "explanations": [
      "Adding the equations gives $(3x - 2y) + (x + y) = 10 + 5$, so $4x - y = 15$. Check: $x = 4$, $y = 1$ gives $16 - 1 = 15$.",
      "The system gives $x = 4$, $y = 1$, so $4x - y = 15$. 12 equals $3x$, a partial value rather than the requested expression.",
      "This is $4x + y = 16 + 1$, a sign slip on $y$. The expression asks for $4x - y = 16 - 1 = 15$.",
      "With $x = 4$ and $y = 1$, $4x - y = 15$, not 22. The quickest route is adding the two equations, which gives $10 + 5 = 15$ directly."
    ]
  },
  "q:c99c0ebfa6f0470a": {
    "options": [
      "Strong positive linear",
      "Strong negative linear",
      "No clear association",
      "Perfect linear association"
    ],
    "explanations": [
      "A strong positive association would show points clustered along a rising line. Random scatter with no pattern shows no such trend.",
      "A strong negative association would show points clustered along a falling line. Randomly scattered points show no direction at all.",
      "Points scattered randomly, with no visible pattern, show no clear association between the variables.",
      "A perfect linear association would put every point exactly on one line, the opposite of random scatter."
    ]
  },
  "q:4e19cbbbd914ccd1": {
    "options": [
      "$8$",
      "$9$",
      "$11$",
      "$12$"
    ],
    "explanations": [
      "Require $2150 - 185w \\ge 600$, so $w \\le \\frac{1550}{185} \\approx 8.38$. The greatest whole number is 8: after 8 weeks the balance is 670 dollars, still above the floor.",
      "This rounds $8.38$ up. After 9 weeks the balance is $2150 - 1665 = 485$ dollars, below the 600-dollar floor.",
      "This ignores the 600-dollar floor and divides the whole balance: $2150 \\div 185 \\approx 11.6$, rounded down. Marcus must keep at least 600 dollars.",
      "This ignores the 600-dollar floor and also rounds $11.6$ up. After 12 weeks the balance would be negative."
    ]
  },
  "q:4952574f20b45ae9": {
    "options": [
      "0",
      "-1",
      "-2",
      "-4"
    ],
    "explanations": [
      "This misses the pattern: $f$ decreases by 1 for each step in $x$. Since $f(2) = -3$ and $f(4) = -5$, $f(3)$ must lie between them.",
      "This is the slope, $\\frac{-5 - (-3)}{4 - 2} = -1$, not the function value. Use it: $f(3) = -3 + (-1)(1) = -4$.",
      "This is the total change in $f$ from $x = 2$ to $x = 4$. The value $f(3)$ must lie between $-3$ and $-5$.",
      "The slope is $\\frac{-5 - (-3)}{4 - 2} = -1$, so $f(3) = f(2) - 1 = -4$. It is also the midpoint of $-3$ and $-5$."
    ]
  },
  "q:a4f76ef8143f8a81": {
    "options": [
      "It stays exactly the same",
      "It is multiplied by 5",
      "It is multiplied by 25",
      "It increases by 5 units"
    ],
    "explanations": [
      "Adding a constant leaves the standard deviation unchanged, but multiplying stretches every distance from the mean by 5, so the spread grows.",
      "Multiplying every value by 5 multiplies every distance from the mean by 5, so the standard deviation is multiplied by 5.",
      "This is what happens to the VARIANCE, the square of the standard deviation. The standard deviation itself scales by 5, not 25.",
      "Adding 5 to the spread confuses multiplication with addition. Scaling values by 5 scales the standard deviation by a factor of 5."
    ]
  },
  "q:5807c848ba0cd9ba": {
    "options": [
      "The plant's maintenance cost is 890 dollars in a month when no machines are in operation.",
      "The model's predicted maintenance cost when no machines operate is 890 dollars, but $m = 0$ lies outside the range of the data, so this should not be treated as a measured fixed cost.",
      "Each machine adds 890 dollars to the monthly maintenance cost.",
      "The total maintenance cost is 890 dollars when 12 machines operate."
    ],
    "explanations": [
      "Right number, overreaching claim. 890 is the model's prediction at $m = 0$, but the data cover only 12 to 55 machines, so nothing observed shows what a month with no machines costs.",
      "The intercept is the predicted cost at $m = 0$, 890 dollars. Because the data span $m = 12$ to $m = 55$, $m = 0$ is extrapolation and should not be read as a measured fixed cost.",
      "This describes the slope, which is 46 dollars per machine. The 890 is the constant term and does not grow with $m$.",
      "At $m = 12$ the model predicts $46(12) + 890 = 1442$ dollars. This substitutes the lower edge of the data range for $m = 0$."
    ]
  },
  "q:945698775e741145": {
    "options": [
      "Both, because each line has four residuals",
      "Line P, because its residuals are closer to 0",
      "Neither, because no residual is equal to 0",
      "Line Q, because its residuals are larger in size"
    ],
    "explanations": [
      "Having the same number of residuals says nothing about fit quality. What matters is how close the residuals are to 0, and line P's are much closer.",
      "Residuals are vertical distances from the points to the line. Line P's residuals are all within 2 of zero, while line Q's are 7 to 9 away, so line P fits better.",
      "A line need not pass through any point exactly to fit well. Comparing sizes, line P's residuals (1 to 2) are far smaller than line Q's (7 to 9).",
      "Backward. Larger residuals mean the points lie FARTHER from the line, which is a worse fit, not a better one."
    ]
  },
  "q:89402920e4265fdc": {
    "options": [
      "Infinitely many solutions",
      "No solution",
      "Exactly one solution",
      "Exactly two solutions"
    ],
    "explanations": [
      "Infinitely many solutions would require the two equations to describe the same line. Here the slopes, $\\frac{2}{3}$ and $\\frac{3}{2}$, differ.",
      "No solution would require parallel lines, with equal slopes. The slopes $\\frac{2}{3}$ and $\\frac{3}{2}$ differ, so the lines cross.",
      "Solving for $y$ gives slopes $\\frac{2}{3}$ and $\\frac{3}{2}$. Different slopes mean the lines are not parallel, so they intersect at exactly one point.",
      "Two distinct lines can meet at most once. A linear system has zero, one, or infinitely many solutions, never exactly two."
    ]
  },
  "q:a65b359a56ce1c02": {
    "options": [
      "$13$",
      "$14$",
      "$16$",
      "$15$"
    ],
    "explanations": [
      "This is the number of months at the full rate: $235 - 27 = 208$ and $208/16 = 13$. The first 3 promotional months must be added, for 16.",
      "This is $\\frac{235}{16} \\approx 14.7$ rounded down, charging every month at 16 dollars. The first 3 months cost only 9 dollars each.",
      "The first 3 months cost $3(9) = 27$ dollars, leaving $235 - 27 = 208$ dollars at 16 dollars per month, or 13 months. Total: $3 + 13 = 16$ months.",
      "This is $\\frac{235}{16} \\approx 14.7$ rounded up, treating every month as a regular 16-dollar month and ignoring the cheaper first 3 months."
    ]
  },
  "q:bdda37becce22442": {
    "options": [
      "$84$",
      "$105$",
      "$101.92$",
      "$3{,}640$"
    ],
    "explanations": [
      "This rounds $4.85$ spools DOWN to 4, giving $4 \\times 21 = 84$ dollars. Four spools hold only 3,000 grams, short of the 3,640 grams needed.",
      "Filament: $260 \\times 14 = 3{,}640$ grams. Spools: $3640/750 \\approx 4.85$, so 5 full spools must be bought. Cost: $5 \\times 21 = 105$ dollars.",
      "This pays for a fractional spool, $4.853 \\times 21 \\approx 101.92$ dollars. Spools are sold whole, so the studio must buy 5.",
      "This is the filament needed in GRAMS, $260 \\times 14$, an intermediate value in the wrong units, not a dollar cost."
    ]
  },
  "q:d051d5a85960492e": {
    "options": [
      "60",
      "69",
      "540",
      "1080"
    ],
    "explanations": [
      "This uses the ratio numbers 8 and 15 as the actual legs, $\\frac{1}{2}(8)(15)$. The hypotenuse is 51, not 17, so each side scales by 3.",
      "This is the sum of the legs, $24 + 45$. Area multiplies the legs and halves the product.",
      "$\\sin D = \\frac{8}{17}$ fits the 8-15-17 triangle. With $17k = 51$, $k = 3$, so the legs are 24 and 45. Area $= \\frac{1}{2}(24)(45) = 540$.",
      "This is $24 \\times 45$ without the factor $\\frac{1}{2}$. A right triangle's area is half the product of its legs."
    ]
  },
  "q:b7041ae22788611b": {
    "options": [
      "40",
      "47",
      "59",
      "99"
    ],
    "explanations": [
      "This is the top ROW total, $20 + 20$. The first column is the left column: top-left plus bottom-left.",
      "The first column is the left column, so its marginal total is $20 + 27 = 47$.",
      "This is the bottom ROW total, $27 + 32$. The first column consists of top-left and bottom-left.",
      "This is the grand total of all four cells, $20 + 27 + 20 + 32$, not the total for one column."
    ]
  },
  "q:f99c4954b3e3f6b3": {
    "options": [
      "22.4",
      "44.9",
      "81.9",
      "160.2"
    ],
    "explanations": [
      "This is $\\pi\\sqrt{51}$, treating the radius as a diameter. Circumference is $2\\pi r$ with $r = \\sqrt{51}$.",
      "Divide by 2: $x^2 + y^2 - 6x + 10y - 17 = 0$, so $(x - 3)^2 + (y + 5)^2 = 51$ and $r = \\sqrt{51}$. Circumference $= 2\\pi\\sqrt{51} \\approx 44.9$.",
      "This completes the square without first dividing by 2, getting $r^2 = 170$. The squared terms must have coefficient 1 before reading off the radius.",
      "This is the AREA, $\\pi r^2 = 51\\pi \\approx 160.2$, not the circumference $2\\pi r$."
    ]
  },
  "q:f73ad5a7dcbb16eb": {
    "options": [
      "$36$",
      "$56$",
      "$67$",
      "$76$"
    ],
    "explanations": [
      "This is the number of packages BEYOND the first 20, $\\frac{184 - 85}{2.75} = 36$. The driver also delivered the first 20, for 56.",
      "Package pay: $184 - 85 = 99$ dollars, which is $\\frac{99}{2.75} = 36$ packages beyond the first 20. Total: $20 + 36 = 56$ packages.",
      "This is $\\frac{184}{2.75} \\approx 66.9$, ignoring the 85-dollar flat shift pay and the 20-package threshold.",
      "This adds 40 instead of 20 to the 36 extra packages, counting the threshold twice. Only the first 20 packages are unpaid."
    ]
  },
  "q:8f8b610ff508c2df": {
    "options": [
      "$12$",
      "$24$",
      "$144$",
      "$48$"
    ],
    "explanations": [
      "This is the side length: $s\\sqrt{2} = 12\\sqrt{2}$ gives $s = 12$. The perimeter is four sides, $4s$.",
      "This is $2s$, half the perimeter. A square has four equal sides, so the perimeter is $4(12) = 48$.",
      "This is the AREA, $s^2 = 144$ square centimeters, not the perimeter.",
      "A square's diagonal is $s\\sqrt{2}$, so $s = 12$ centimeters. The perimeter is $4s = 48$ centimeters."
    ]
  },
  "q:7e31f770b341856e": {
    "options": [
      "-2.9",
      "6.4",
      "2.9",
      "0.6"
    ],
    "explanations": [
      "This reports the change in the actual value as the residual, ignoring the first point's residual of 3.5. The new residual is $3.5 - 2.9 = 0.6$.",
      "This adds 2.9 instead of subtracting it. The second point's actual value is LOWER, so its residual drops: $3.5 - 2.9 = 0.6$.",
      "This reports the size of the shift itself, dropping both the sign and the starting residual of 3.5.",
      "Both points have prediction $4.6(8) + 11.2 = 48$. The first is $51.5$, so the second is $51.5 - 2.9 = 48.6$, and its residual is $48.6 - 48 = 0.6$."
    ]
  },
  "q:b35a10d237ae30a1": {
    "options": [
      "133",
      "120",
      "300",
      "100"
    ],
    "explanations": [
      "This applies the among-passers retake rate, $45/135 \\approx 33.3\\%$, to all 400 students. That rate belongs only to students who passed, about 300 of the 400.",
      "This uses the column total 150 as the denominator, $45/150 = 0.30$. That is Course C's share of all retake passers, not the retake rate within Course C.",
      "This is the expected number of Course C students who pass at all, $\\frac{135}{180}(400) = 300$, an intermediate value. Only some of them pass on a retake.",
      "In Course C, $45$ of $180$ students, or $0.25$, passed on a retake. Applying the same rate to 400 students gives $0.25(400) = 100$."
    ]
  },
  "q:69382594c024229d": {
    "options": [
      "$x = 9$ or $x = -9$",
      "$x = 3$ only",
      "No solution",
      "$x = 3$ or $x = -3$"
    ],
    "explanations": [
      "This squares 3. The absolute value is a distance, not a power: $|x| = 3$ means $x$ is 3 units from 0, so $x = \\pm 3$. Note $|9| = 9$, not 3.",
      "Half right. $x = 3$ works, but $|-3| = 3$ too. Absolute value equations with a positive right side have two solutions.",
      "An absolute value equation has no solution only when the right side is negative. Here it equals 3, a positive number, so solutions exist.",
      "Both 3 and $-3$ lie 3 units from 0, so $|x| = 3$ gives $x = 3$ or $x = -3$."
    ]
  },
  "q:cdf67d50af91741a": {
    "options": [
      "9",
      "10",
      "15",
      "14"
    ],
    "explanations": [
      "At $x = 0$ the terms $-4x^2$ and $6x$ both vanish, leaving only the constant 10. Nothing reduces it to 9.",
      "The $y$-intercept occurs at $x = 0$: $y = -4(0)^2 + 6(0) + 10 = 10$.",
      "At $x = 0$, $y$ equals just the constant term, 10. A value of 15 would require the other terms to contribute, but they are zero at $x = 0$.",
      "This adds the leading coefficient's size, 4, to the constant. At $x = 0$ the $-4x^2$ term is 0, so $y = 10$."
    ]
  },
  "q:2515f9a1889846ac": {
    "options": [
      "$61$",
      "$\\sqrt{65}$",
      "$\\sqrt{61}$",
      "$11$"
    ],
    "explanations": [
      "This is $c^2$, forgetting the square root. $6^2 + 5^2 = 61$ gives $c = \\sqrt{61}$, not 61.",
      "Addition slip. $6^2 + 5^2 = 36 + 25 = 61$, not 65, so the hypotenuse is $\\sqrt{61}$.",
      "The legs are 6 and 5, so the hypotenuse is $c = \\sqrt{6^2 + 5^2} = \\sqrt{36 + 25} = \\sqrt{61}$.",
      "This adds the legs, $6 + 5$. The Pythagorean theorem adds their squares and then takes a square root."
    ]
  },
  "q:d2fda6823f532984": {
    "options": [
      "4.0",
      "4.5",
      "40.5",
      "45.0"
    ],
    "explanations": [
      "This sets $\\frac{s}{36} = \\frac{5}{45}$, using the child's distance from the light in place of the distance from the base to the shadow's tip, $s + 36$.",
      "Adult: tip is $26 + 4 = 30$ ft out, so $\\frac{6}{h} = \\frac{4}{30}$ and the light is 45 ft. Child: $\\frac{5}{45} = \\frac{s}{s + 36}$, so $9s = s + 36$ and $s = 4.5$ ft.",
      "This is $36 + 4.5$, the distance from the light's base to the tip of the child's shadow, not the shadow's length.",
      "This is the height of the streetlight, $h = 45$ ft, the intermediate value from the adult's triangle."
    ]
  },
  "q:4b0e3ff9b12e5f49": {
    "options": [
      "59.0 minutes",
      "52.5 minutes",
      "34.0 minutes",
      "46.0 minutes"
    ],
    "explanations": [
      "This adds 6.5 instead of adding $-6.5$. A negative residual means the actual time was BELOW the prediction of 52.5 minutes.",
      "This is the predicted time, $0.9(45) + 12 = 52.5$. The residual of $-6.5$ still has to be applied to get the actual time.",
      "This computes $0.9(45) - 6.5$, dropping the intercept 12 before applying the residual.",
      "Predicted: $0.9(45) + 12 = 52.5$ minutes. Actual = predicted + residual $= 52.5 + (-6.5) = 46.0$ minutes."
    ]
  },
  "q:27bf97e84fbc3bff": {
    "options": [
      "12 weeks, 23.6 minutes",
      "12 weeks, 23.9 minutes",
      "7.5 weeks, 25.4 minutes",
      "20 weeks, 20.4 minutes"
    ],
    "explanations": [
      "Set the models equal: $28.4 - 0.40w = 25.4 - 0.15w$, so $3.0 = 0.25w$ and $w = 12$. Both give $28.4 - 4.8 = 23.6$ minutes.",
      "The week is right, but the time is a substitution slip: $28.4 - 0.40(12) = 23.6$ and $25.4 - 0.15(12) = 23.6$, not 23.9.",
      "This divides the gap 3.0 by Group A's slope alone, $3.0/0.40 = 7.5$. At 7.5 weeks Group B predicts about 24.3 minutes, so the times do not match.",
      "This divides the gap 3.0 by Group B's slope alone, $3.0/0.15 = 20$. At 20 weeks Group A gives 20.4 but Group B gives 22.4, so they differ."
    ]
  },
  "q:18d7ee74de1861a4": {
    "options": [
      "$(6, -5)$",
      "$(5, -5)$",
      "$(-1, -3)$",
      "$(4, -3)$"
    ],
    "explanations": [
      "The $x$-coordinate is off. Check: the midpoint of $(-3, 1)$ and $(6, -5)$ has $x = \\frac{-3 + 6}{2} = 1.5$, not 1.",
      "$B = 2M - A = (2(1) - (-3),\\ 2(-2) - 1) = (5, -5)$. Check: $\\frac{-3 + 5}{2} = 1$ and $\\frac{1 + (-5)}{2} = -2$.",
      "This computes $2M + A$ instead of $2M - A$: $(2 - 3, -4 + 1) = (-1, -3)$. The midpoint of $A$ and this point is $(-2, -1)$, not $M$.",
      "This is the displacement from $A$ to $M$, $(1 - (-3), -2 - 1) = (4, -3)$. That step must be added to $M$ once more to reach $B$."
    ]
  },
  "q:448b020a288a5b13": {
    "options": [
      "the conclusion Sandoval reached was that the last rupture predated the region's earliest written records.",
      "Sandoval concluded that the last rupture predated the region's earliest written records.",
      "it became clear to Sandoval that the last rupture predated the region's earliest written records.",
      "the scarp's cumulative offset convinced Sandoval that the last rupture predated the region's earliest written records."
    ],
    "explanations": [
      "Dangling modifier. The phrase \"Having spent eleven field seasons mapping\" must describe the subject, but here the subject is \"the conclusion,\" which did no fieldwork.",
      "The opening participial phrase needs a person as the subject, and \"Sandoval concluded\" supplies one: Sandoval is the one who spent eleven seasons mapping the scarp.",
      "Dangling modifier. The subject is the placeholder \"it,\" so the opening phrase has no person to describe. Sandoval appears only as an object, \"to Sandoval.\"",
      "Dangling modifier. The subject becomes \"the scarp's cumulative offset,\" the thing being mapped, not the person who spent field seasons mapping it."
    ]
  },
  "q:a8cb730336d2eb3f": {
    "options": [
      "By arguing that parking maximums reduce the number of housing units built on downtown parcels.",
      "By contending that removing design review mattered more to housing production than the parking rules did.",
      "By questioning whether the reported 40 percent increase actually occurred within the four years.",
      "By noting that several rules changed at once, so the increase cannot be credited to parking alone."
    ],
    "explanations": [
      "Text 2 never claims parking maximums reduce housing; it accepts that units rose. This reverses the observed direction rather than questioning its cause.",
      "Near miss. Text 2 names design review as another change, but says the record \"cannot say which of the three the developers were responding to,\" so it would not rank one above the others.",
      "Text 2 does not dispute that the increase happened. It treats the four-year record as real and questions only what caused it.",
      "Text 2 notes the ordinance also rezoned for height and removed a design review step, so \"the four-year record cannot say which of the three\" caused the increase."
    ]
  },
  "q:074886acd4b5939d": {
    "options": [
      "Research shows urban green spaces lower stress and anxiety and strengthen community bonds",
      "Parks are pleasant places to visit on weekends, and most city residents enjoy them",
      "Every city should build new green spaces so that residents have places to exercise",
      "Scientists measured cortisol in labs and found that stress rises in crowded cities"
    ],
    "explanations": [
      "This covers the passage's main claim, that green spaces reduce stress, and its key details: lower anxiety in the study and stronger community bonds.",
      "Off target. The passage reports research on stress and anxiety; weekend visits and general enjoyment of parks are never mentioned.",
      "This turns findings into a recommendation the passage never makes, and \"exercise\" is not among the benefits it lists.",
      "Distortion. The passage says green spaces LOWER cortisol; it says nothing about lab measurements or stress rising because cities are crowded."
    ]
  },
  "q:5d4f781af77a0958": {
    "options": [
      "Present for a short time",
      "Resting on the surface",
      "Widely spread throughout",
      "Arranged in neat layers"
    ],
    "explanations": [
      "\"Pervasive\" describes extent, not duration. Saying microplastics are pervasive in human bodies means they are found widely, not that they stay briefly.",
      "\"Pervasive\" means spreading throughout, the opposite of staying on the surface. The sentence says microplastics are found throughout human bodies.",
      "\"Pervasive\" means widely spread throughout, so the sentence says microplastics are present all through human bodies.",
      "\"Pervasive\" says nothing about orderly arrangement; it means spread throughout, often in an uncontrolled way."
    ]
  },
  "q:b9b41769e2d4999b": {
    "options": [
      "By granting that the policy has value while insisting that the average hides how that value is distributed.",
      "By arguing that calorie labeling produces no reduction in calories ordered, even among attentive diners.",
      "By claiming that restaurants bear costs from labeling that Text 1 has underestimated across millions of meals.",
      "By concluding that calorie labeling should be repealed in favor of a policy that reaches every diner equally."
    ],
    "explanations": [
      "Text 2 says a concentrated benefit \"is not weak,\" granting value, yet insists it is \"a different policy from the one the average describes\" and should be judged by \"whom it reaches.\"",
      "Text 2 reports that \"roughly a fifth of diners change their orders substantially,\" so it would not claim labeling produces no reduction at all.",
      "Text 2 never discusses restaurant costs. Its concern is how the benefit is spread across diners, not what the policy costs to implement.",
      "Too extreme. Text 2 says the policy \"is not weak\" and asks only that it be evaluated \"for whom it reaches\"; it never calls for repeal."
    ]
  },
  "q:55984618b2720dea": {
    "options": [
      "It supplies the fact that converts a settled explanation into a question requiring one.",
      "It questions whether the drought occurred at the time usually assigned to it by tree rings.",
      "It offers reservoir construction as the true cause of the later migration from the region.",
      "It shows that the ceramic record disagrees with the tree-ring evidence on the drought's severity."
    ],
    "explanations": [
      "The earlier drought, met by building reservoirs and staying, turns \"why people left a dry place\" into a real puzzle: why \"the same population responded to the same conditions in opposite ways.\"",
      "The second sentence says tree rings and other sources \"agree on its timing and severity.\" The third sentence adds a second drought; it does not doubt the first one's date.",
      "Reservoirs were built during the EARLIER drought by people who stayed. The text presents them as the opposite response to migration, not its cause.",
      "The text states that the ceramic record and tree rings \"agree on its timing and severity.\" The third sentence introduces no conflict between sources."
    ]
  },
  "q:08c0e5900fe9919f": {
    "options": [
      "It identifies a practice that the text goes on to argue misunderstands the scene's purpose.",
      "It provides evidence that the monologue is poorly written, since nothing in it advances the plot.",
      "It explains why the monologue is never referred to again in the play's later scenes.",
      "It shows that directors generally agree with the author's reading of the play's central problem."
    ],
    "explanations": [
      "The text names the practice of cutting the monologue, then turns with \"But\" to argue that the staging \"enacts\" the play's central problem, so cutting it misreads the scene.",
      "The cuts are not offered as evidence of poor writing. The text goes on to defend the monologue as the only scene where the audience experiences the play's problem.",
      "That the monologue is never mentioned again is a separate fact about the script stated earlier. Directors' cuts do not explain anything inside the play.",
      "Reversed. The directors' practice is what the author argues against; the author's reading explains why the cut monologue should stay."
    ]
  },
  "q:ec8d62e1df92b66d": {
    "options": [
      "The program school's attendance rose from 84.2 percent in 2021 to 91.5 percent in 2023, two years after the program began.",
      "Both schools fell to about 84 percent in 2021, from roughly 89 percent in 2019, before attendance began to recover at each.",
      "From 2021 to 2023 the program school gained 7.3 points to the comparison school's 2.9, ending above its 2019 level while the other ended below.",
      "In 2023 the program school's attendance, 91.5 percent, exceeded the comparison school's 86.9 percent by 4.6 percentage points."
    ],
    "explanations": [
      "Half the comparison. This shows only the program school's rebound; without the comparison school's change, nothing shows the recovery went beyond the other school's.",
      "This documents the shared decline both schools experienced, the common baseline. It says nothing about which school recovered more.",
      "This compares both rebounds, 7.3 points versus 2.9, and shows the program school ended above its 2019 level while the other did not, exactly the claim being made.",
      "This compares 2023 levels only. A higher final level alone could mean a school started higher; it does not show that one school's recovery exceeded the other's."
    ]
  },
  "q:7598a30c0e2bb392": {
    "options": [
      "Stress in cities cannot be reduced without lowering population density",
      "City planners should prioritize creating accessible green spaces",
      "Gyms do less for mental health than a walk through a city park",
      "City residents should move to rural areas to reduce their stress"
    ],
    "explanations": [
      "The passage never discusses population density. It points to green spaces as one way to lower stress, so \"cannot be reduced without\" contradicts it.",
      "The passage reports that green space lowers stress and that living within a 10-minute walk of it is linked to 30% lower anxiety, so prioritizing accessible green space follows reasonably.",
      "The passage never mentions gyms or compares any activity with walking in a park, so this comparison is unsupported.",
      "Too extreme and off target. The passage shows benefits of green space WITHIN cities; it never suggests leaving cities for rural areas."
    ]
  },
  "q:216c13854e145c65": {
    "options": [
      "It criticizes Kestenbaum for failing to make his argument explicit and leaving readers to guess at chapter four's point.",
      "It concedes a weakness in the biography that the reviewers had identified in its first fifty pages on patents.",
      "It signals that the argument lives in the book's arrangement rather than in any stated claim.",
      "It indicates that Kestenbaum was unaware of the connection between Vance's refusal to patent and her father's failures."
    ],
    "explanations": [
      "The text approves of the method: \"The choice pays off.\" The sentence describes a deliberate technique, not a failure to make the argument clear.",
      "This sides with the reviewers, but the text answers their complaint, showing that the opening fifty pages pay off in chapter four.",
      "The next sentence explains it: Kestenbaum \"simply arranges the two records so that the reader arrives at the connection unassisted.\" The argument is made through structure, not stated outright.",
      "Reversed. Deliberately arranging the records so readers find the connection implies that Kestenbaum knew of it; not saying something outright assumes knowing it."
    ]
  },
  "q:2cc2e925e7dc94cc": {
    "options": [
      "me",
      "mine",
      "myself",
      "I"
    ],
    "explanations": [
      "The pronoun is an object of \"asked,\" so it takes the objective case. Drop \"Samira and\" to test: \"The coach asked me.\"",
      "\"Mine\" is a possessive pronoun that stands for something owned, as in \"the notes are mine.\" The sentence needs a person being asked, so it takes \"me.\"",
      "A reflexive pronoun needs an antecedent in the same clause, as in \"I asked myself.\" Here the subject is \"the coach,\" so \"myself\" has nothing to reflect.",
      "\"I\" is a subject pronoun. As an object of \"asked\" it is wrong: no one would write \"The coach asked I.\""
    ]
  }
}

export default ENTRIES
