import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:44729d76f14dcefa": {
    "options": [
      "Section N has the greater standard deviation.",
      "Section M has the greater standard deviation.",
      "The two sections have equal standard deviations, because they have the same mean and the same median.",
      "Section N has the greater median."
    ],
    "explanations": [
      "Both sections are symmetric about 8, but Section N has 12 of its 20 scores 2 points from the mean and none at 8, while Section M has 8 scores exactly at 8. Section N's scores sit farther from the mean, so its standard deviation is greater.",
      "This reverses the comparison. Section M clusters at the center, with 8 students scoring exactly 8 and only 4 at the extremes of 6 and 10, so it is the less spread out section and has the smaller standard deviation.",
      "Matching means and medians describe only the center of each distribution, not its spread. Section N has 12 scores at 6 or 10 versus Section M's 4, so the standard deviations differ even though the centers agree.",
      "The stem states that both sections have a median of 8, and the table confirms it: Section M's middle scores are both 8, and Section N's middle scores, 7 and 9, average to 8. The sections differ in spread, not in median."
    ]
  },
  "q:1ebce97e5c554131": {
    "options": [
      "79",
      "65",
      "105",
      "50"
    ],
    "explanations": [
      "The three angles of any triangle sum to $180°$, so the third angle is whatever remains after the two given angles: $180-41-60=79°$.",
      "$65°$ does not satisfy the angle sum: $41+60+65=166$, not $180$. No single step of $180-41-60$ produces it; the third angle must be $79°$.",
      "$105°$ would make the angles total $41+60+105=206°$, more than the $180°$ a triangle allows. Subtracting both given angles from $180$ gives $79°$.",
      "$50°$ would make the angles total $41+60+50=151°$, short of $180°$. The third angle must make up the full difference, $180-101=79°$."
    ]
  },
  "q:dda21e930b7c5625": {
    "options": [
      "Store 1, 68.0 percent",
      "Store 1, 42.9 percent",
      "Store 2, 66.0 percent",
      "Store 1, 28.3 percent"
    ],
    "explanations": [
      "Each store's rate must use its own row total: Store 1 is $340/500=68.0$ percent, Store 2 is $264/400=66.0$ percent, and Store 3 is $189/300=63.0$ percent. Store 1 is highest at 68.0 percent.",
      "Store 1 is the right store, but 42.9 percent is $340/793$, dividing by the Recommend column total. That is the share of all recommenders who were at Store 1, not the share of Store 1's customers who recommend it.",
      "66.0 percent is Store 2's correct rate, $264/400$, but it is the runner-up. Store 1's rate, $340/500=68.0$ percent, is higher.",
      "Store 1 is the right store, but 28.3 percent is $340/1200$, dividing by the grand total. The rate for a store must use that store's own total of 500 customers, giving 68.0 percent."
    ]
  },
  "q:f48a2792c5a6f375": {
    "options": [
      "$-15$",
      "$5$",
      "$10$",
      "$20$"
    ],
    "explanations": [
      "$-15$ does make the line tangent, since $|5+(-15)|=10$, but it is the negative solution. The question asks for the positive value of $k$, which is $5$.",
      "Completing the square gives center $(2,-1)$ and radius $2\\sqrt{5}$. Setting the distance from the center to $2x-y+k=0$ equal to the radius gives $\\frac{|5+k|}{\\sqrt{5}}=2\\sqrt{5}$, so $|5+k|=10$ and the positive solution is $k=5$.",
      "$10$ is the value of $|5+k|$, one step before solving for $k$. With $k=10$ the distance from the center would be $\\frac{15}{\\sqrt{5}}=3\\sqrt{5}$, larger than the radius, so the line would miss the circle.",
      "$20$ is $r^2$ from $(x-2)^2+(y+1)^2=20$, but no correct setup yields $k=20$. With $k=20$ the distance from the center is $\\frac{25}{\\sqrt{5}}=5\\sqrt{5}$, far beyond the radius $2\\sqrt{5}$, so the line would not touch the circle."
    ]
  },
  "q:6b2b92ace506104c": {
    "options": [
      "It decreases by 36 percent.",
      "It decreases by 20 percent.",
      "It is unchanged.",
      "It increases by 5 percent."
    ],
    "explanations": [
      "A 36 percent decrease comes from squaring the radius factor, $(0.8)^2=0.64$, and stopping there. It ignores the 25 percent greater height, which multiplies the volume by $1.25$ to give $0.8$.",
      "Volume is $\\pi r^2h$, so the new volume is $(0.8)^2(1.25)=0.64\\times1.25=0.8$ times the old one, a 20 percent decrease.",
      "Calling it unchanged multiplies $0.8\\times1.25=1$, treating the radius as if it were not squared. In $\\pi r^2h$ the radius factor is $(0.8)^2=0.64$, so the volume falls to $0.8$ of its original value.",
      "A 5 percent increase just adds the percents, $-20+25=5$. Percent changes in a product multiply rather than add, and the radius is squared, giving $(0.8)^2(1.25)=0.8$, a 20 percent decrease."
    ]
  },
  "q:3affe223d222cac8": {
    "options": [
      "$12$",
      "$13$",
      "$-13$",
      "$\\sqrt{13}$"
    ],
    "explanations": [
      "$12$ is the simplified left side, $6(x+1)-6(x-1)=12$, before setting it equal to $x^2-1$. Solving $12=x^2-1$ gives $x^2=13$, and the product of $\\sqrt{13}$ and $-\\sqrt{13}$ is $-13$.",
      "$13$ is $x^2$, the intermediate value from $12=x^2-1$, or the product with the negative sign dropped. The solutions are $\\sqrt{13}$ and $-\\sqrt{13}$, whose product is $-13$.",
      "Multiplying by $(x-1)(x+1)$ gives $6(x+1)-6(x-1)=x^2-1$, so $12=x^2-1$ and $x=\\pm\\sqrt{13}$, neither of which is excluded. The product is $\\sqrt{13}\\cdot(-\\sqrt{13})=-13$.",
      "$\\sqrt{13}$ is one of the two solutions, not their product. The other solution is $-\\sqrt{13}$, and multiplying them gives $-13$."
    ]
  },
  "q:af873c45cc77fb78": {
    "options": [
      "$315$",
      "$540$",
      "$900$",
      "$4{,}500$"
    ],
    "explanations": [
      "$315$ comes from $189\\div0.60$, using only the language percent and skipping the 35 percent step. Spanish students are $0.60\\times0.35=0.21$ of the school, so the school has $189\\div0.21=900$ students.",
      "$540$ comes from $189\\div0.35$, which is the number of language students, an intermediate value. Dividing again by $0.60$ gives the whole school, $900$.",
      "Spanish students are 35 percent of the 60 percent who take a language, or $0.35\\times0.60=0.21$ of the school, so $189\\div0.21=900$. Check: $0.60\\times900=540$ and $0.35\\times540=189$.",
      "$4{,}500$ would need Spanish students to be $4.2$ percent of the school, but $0.60\\times0.35=0.21$, or 21 percent. Checking it fails: $0.35\\times(0.60\\times4500)=945$, not $189$."
    ]
  },
  "q:64300b423097de02": {
    "options": [
      "The 1912 wage cut was smaller in the mills that struck than in the mills that did not.",
      "Mechanical timekeeping systems were unpopular with mill workers in 1912, especially in the four mills that struck.",
      "The payroll books show that the wage cut alone does not explain which mills struck.",
      "The 1912 strike would not have occurred in any of the four mills if the wage cut had not been announced."
    ],
    "explanations": [
      "This invents a difference in the size of the cut. The text says the cut took effect in eleven mills but never says it was smaller or larger anywhere; it explains the strikes by the clock system, not by the cut's size.",
      "This is unsupported. The text never reports what workers thought of the clocks; it shows only that the four mills that struck were the ones that had installed them, a correlation rather than a statement about popularity.",
      "The payroll books show that the cut reached eleven mills but only four struck, the four with new clock systems. As the text concludes, 'Wage cuts... arrived everywhere; the strike arrived where a second grievance was already in place.'",
      "This overstates. The text argues the wage cut was not enough by itself to cause a strike, but it never says the cut was necessary, so it gives no basis for claiming the strikes would not have happened without it."
    ]
  },
  "q:57e07e6cf693effc": {
    "options": [
      "$1$",
      "$3$",
      "$5$",
      "$7$"
    ],
    "explanations": [
      "$1$ is the $x$-coordinate of one intersection point, an intermediate value. Plugging $x=1$ into the parabola gives the height $k=-1+6-2=3$.",
      "The axis of symmetry is $x=3$, so two points $4$ units apart sit at $x=1$ and $x=5$. Then $k=-(1)^2+6(1)-2=3$, and $x=5$ gives the same value.",
      "$5$ is the $x$-coordinate of the other intersection point, not the height of the line. Substituting $x=5$ gives $k=-25+30-2=3$.",
      "$7$ is the vertex height, $-9+18-2$. The line $y=7$ touches the parabola at only one point, so it cannot meet it at two points $4$ units apart."
    ]
  },
  "q:a312da61a8c7f3f3": {
    "options": [
      "0.60",
      "0.48",
      "0.22",
      "0.52"
    ],
    "explanations": [
      "0.60 is $210/350$, the share of rural residents who disapprove. It uses the Rural row as the denominator, but the selection is made from disapprovers, so the denominator must be 434.",
      "0.48 is $210/434$, the probability that the selected disapprover is rural. The question asks for not rural, the complement, which is $224/434\\approx0.52$.",
      "0.22 is $224/1000$, the right numerator over the grand total. Because the resident is chosen from those who disapprove, the denominator is the Disapprove total of 434, not all 1,000 residents.",
      "Choosing among disapprovers makes the denominator 434. The non-rural disapprovers are $84+140=224$, so the probability is $224/434\\approx0.516$, or 0.52."
    ]
  },
  "q:1b0f9f1f1023972c": {
    "options": [
      "35.9",
      "14.1",
      "41.1",
      "58.9"
    ],
    "explanations": [
      "35.9 is $115/320$, dividing by the Under 3 years row total. That gives the percent of young vehicles that are trucks, the reversed question; restricting to trucks requires the Truck total, 280.",
      "14.1 is $115/815$, dividing by the grand total. The question restricts to trucks, so the denominator is the 280 trucks, giving $115/280\\approx41.1$ percent.",
      "The missing truck count is $320-145-60=115$. Restricting to trucks makes the denominator the Truck total, 280, so $115/280\\approx41.1$ percent.",
      "58.9 is the complement, $165/280$, the percent of trucks that are 3 years old or older. The question asks for trucks under 3 years old, $115/280\\approx41.1$ percent."
    ]
  },
  "q:beb315096e913b85": {
    "options": [
      "7",
      "10",
      "0",
      "-5"
    ],
    "explanations": [
      "$7$ does not come from substituting $x=1$: $1+2-3=0$. Getting $7$ would require $x^2+2x=10$ at $x=1$, but those terms total only $3$.",
      "$10$ is not a value of $f$ at $x=1$; it would require $x^2+2x=13$ there, but $1+2=3$. By the remainder theorem the remainder is $f(1)=1+2-3=0$.",
      "By the remainder theorem, the remainder on division by $x-1$ is $f(1)=1^2+2(1)-3=0$, which also shows that $x-1$ is a factor.",
      "$-5$ is not produced by substituting $x=1$; even plugging in $x=-1$ by mistake gives $1-2-3=-4$. The correct value is $f(1)=1+2-3=0$."
    ]
  },
  "q:9e563ed73f024d99": {
    "options": [
      "10 minutes",
      "480 minutes",
      "600 minutes",
      "1,200 minutes"
    ],
    "explanations": [
      "10 is the answer in hours, relabeled as minutes. Solving $50-2x=30$ gives $x=10$ hours, which must be converted to $10\\times60=600$ minutes.",
      "480 minutes treats 46 as the $y$-intercept, solving $46-2x=30$ to get $8$ hours. But 46 is the temperature at $x=2$; the true intercept is $50$, giving 10 hours, or 600 minutes.",
      "The slope is $(22-46)/(14-2)=-2$, so the line is $y=50-2x$. Setting $50-2x=30$ gives $x=10$ hours, which is $10\\times60=600$ minutes.",
      "1,200 minutes takes the 20-degree drop from 50 to 30 as 20 hours, forgetting to divide by the cooling rate of 2 degrees per hour. The correct time is $20/2=10$ hours, or 600 minutes."
    ]
  },
  "q:47ced318b9649e72": {
    "options": [
      "$30$",
      "$32$",
      "$34$",
      "$36$"
    ],
    "explanations": [
      "$30$ is $n$, the smallest of the three integers, which is the value the inequality solves for. The largest integer is $n+4=34$.",
      "$32$ is the middle integer, $n+2$, in the triple $30, 32, 34$. The question asks for the largest of the three, which is $34$.",
      "The sum is $3n+6$, so $84<3n+6<102$ gives $26<n<32$. The largest even $n$ is $30$, making the largest integer $34$; check: $30+32+34=96$.",
      "$36$ comes from allowing $n=32$, but then the sum is $32+34+36=102$, which is not less than $102$. The strict inequality excludes it, so the largest possible value is $34$."
    ]
  },
  "q:48ec4ce63af49802": {
    "options": [
      "$8$",
      "$10$",
      "$24$",
      "$25$"
    ],
    "explanations": [
      "Each step of $12$ right and $5$ up covers $13$ units, so $26$ units is two steps: $24$ right and $10$ up. Starting from $(1,-2)$, $T=(25,8)$, and its $y$-coordinate is $8$.",
      "$10$ is the vertical change from $(1,-2)$ to $T$, not $T$'s $y$-coordinate. Adding it to the starting $y$-value gives $-2+10=8$.",
      "$24$ is the horizontal change, two steps of $12$, which belongs to the $x$-direction. The question asks for the $y$-coordinate, $-2+10=8$.",
      "$25$ is $T$'s $x$-coordinate, found by adding the horizontal change of $24$ to the starting $x$-value of $1$. The question asks for the $y$-coordinate, which is $-2+10=8$."
    ]
  },
  "q:b71ca6dec7faccf9": {
    "options": [
      "1",
      "0",
      "2",
      "Infinitely many"
    ],
    "explanations": [
      "One solution comes from solving $-5x+6=-9$ to get $x=3$. But $|-5(3)+6|=|-9|=9$, not $-9$, so $x=3$ fails the check.",
      "An absolute value is never negative, so $|-5x+6|$ can never equal $-9$. The equation has no solutions.",
      "Two solutions comes from splitting into $-5x+6=9$ and $-5x+6=-9$, as if the equation were $|-5x+6|=9$. Both resulting values give an absolute value of $9$, never $-9$.",
      "Infinitely many solutions would require the equation to hold for every $x$. Instead it holds for no $x$, because $|-5x+6|\\ge0$ can never equal $-9$."
    ]
  },
  "q:780df9a1f46b5097": {
    "options": [
      "$5$",
      "$10$",
      "$11$",
      "$12$"
    ],
    "explanations": [
      "$5$ is the half-width from $|q-18|\\le5$, where the algebra ends. That inequality describes the interval $13\\le q\\le23$, which contains 11 integers.",
      "$10$ is $23-13$, the length of the interval. Counting integers from 13 to 23 inclusive requires adding 1, giving 11.",
      "Requiring $400-25|q-18|\\ge275$ gives $-25|q-18|\\ge-125$, and dividing by $-25$ flips the sign: $|q-18|\\le5$, so $13\\le q\\le23$. That range holds $23-13+1=11$ integers.",
      "$12$ counts one integer too many, such as including $q=12$ or $q=24$. At either of those, $|q-18|=6$ and the profit is $400-150=250$, below 275."
    ]
  },
  "q:e4b60f9d9fa4ed88": {
    "options": [
      "Elm Street gained 630 riders while Ash Street lost 630, so the two streets' combined total stayed at 1,320.",
      "Elm Street's count rose from 310 in 2019 to 940 in 2023, roughly tripling in the years after the lane was added.",
      "Ash Street's count fell from 1,010 in 2019 to 380 in 2023, a drop of 630 cyclists on the street without a lane.",
      "In 2023 Elm Street carried more than twice as many cyclists as Ash Street, at 940 to 380."
    ],
    "explanations": [
      "The conclusion is that riders shifted rather than increased, so it needs one street's gain matched by the other's loss. Elm gained 630, Ash lost 630, and the combined total stayed at 1,320, which is exactly that evidence.",
      "The rise on Elm Street alone is equally consistent with the lane attracting brand-new riders. It says nothing about Ash Street, so it cannot show that riders were drawn off the parallel street.",
      "The drop on Ash Street alone could have many causes and does not tie the lost riders to Elm Street. Without the matching gain and unchanged total, it does not show a shift rather than a decline.",
      "Comparing the two streets within 2023 shows only their levels in one year. It says nothing about change over time, so it cannot show that riders moved from one street to the other."
    ]
  },
  "q:4817277998a60efd": {
    "options": [
      "would already publish",
      "had already published",
      "already published",
      "has already published"
    ],
    "explanations": [
      "\\\"Would already publish\\\" expresses a future or habitual action from a past viewpoint. The novels were finished before the 2015 offer, so the sentence needs the past perfect \\\"had already published.\\\"",
      "The publishing was completed before another past event, the 2015 offer, so the past perfect \\\"had already published\\\" is required. It also matches \\\"won\\\" as a second past perfect verb.",
      "\\\"Already published\\\" uses the simple past, which does not mark the novels as completed before the earlier past event introduced by \\\"by the time.\\\" That sequence calls for \\\"had already published.\\\"",
      "\\\"Has already published\\\" is present perfect, which links to the present and clashes with the past tense \\\"offered\\\" in 2015. An action completed before a past event needs \\\"had already published.\\\""
    ]
  },
  "q:6bb914a05448c55f": {
    "options": [
      "Thus,",
      "Rather,",
      "For example,",
      "Consequently,"
    ],
    "explanations": [
      "\\\"Thus\\\" presents what follows as a result of Galileo not inventing the telescope. His improving and using the instrument is not a consequence of that; it is what he did instead.",
      "The first sentence denies a popular belief, and the second states what Galileo actually did. \\\"Rather\\\" introduces that correction.",
      "\\\"For example\\\" would introduce an illustration of the first claim. Galileo improving an existing instrument does not illustrate his not inventing the telescope; it replaces the mistaken belief with the actual record.",
      "\\\"Consequently\\\" sets up a cause and effect, as if Galileo's improvements resulted from his not inventing the telescope. The second sentence corrects the belief instead of following from it."
    ]
  },
  "q:24ecdb9a58446789": {
    "options": [
      "$\\frac{\\sqrt{3}}{9}$",
      "$\\frac{1}{3}$",
      "$\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{3}$"
    ],
    "explanations": [
      "$\\frac{\\sqrt{3}}{9}$ computes $\\sqrt{3}\\cdot\\sqrt{3}$ as $9$, squaring the $3$ instead of the root. Since $\\sqrt{3}\\cdot\\sqrt{3}=3$, the result is $\\frac{\\sqrt{3}}{3}$.",
      "$\\frac{1}{3}$ multiplies only the denominator by $\\sqrt{3}$, which changes the value. Multiplying the numerator by $\\sqrt{3}$ as well keeps the value the same and gives $\\frac{\\sqrt{3}}{3}$.",
      "$\\sqrt{3}$ is the reciprocal of $\\frac{1}{\\sqrt{3}}$, moving the radical up without the denominator of $3$. Rationalizing gives $\\frac{\\sqrt{3}}{3}$, which is about $0.577$, not $1.732$.",
      "To clear the radical from the denominator, multiply the top and bottom by $\\sqrt{3}$, which does not change the value: $\\frac{1}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}}=\\frac{\\sqrt{3}}{3}$, since $\\sqrt{3}\\cdot\\sqrt{3}=3$."
    ]
  },
  "q:7dbb8223b7a561bf": {
    "options": [
      "$12x^2 + 3x + 3$",
      "$12x^2 + 15x + 3$",
      "$12x^2 + 3$",
      "$7x + 4$"
    ],
    "explanations": [
      "$12x^2+3x+3$ keeps only the outer product $3x\\cdot1=3x$ and drops the inner product $3\\cdot4x=12x$. Including both gives $15x$.",
      "Multiply each term of the first binomial by each term of the second: first $12x^2$, outer $3x$, inner $12x$, last $3$. Combining the middle terms gives $12x^2+15x+3$.",
      "$12x^2+3$ multiplies only the first terms and the last terms, leaving out both middle products. The outer and inner products, $3x$ and $12x$, add to $15x$.",
      "$7x+4$ adds the two binomials, $(3x+4x)+(3+1)$, instead of multiplying them. A product of two linear factors is quadratic: $12x^2+15x+3$."
    ]
  },
  "q:784ae428ebb922fb": {
    "options": [
      "$x < 8$",
      "$x \\geq 8$",
      "$x > 9$",
      "$x > 8$"
    ],
    "explanations": [
      "$x<8$ flips the inequality sign, which is only done when multiplying or dividing by a negative number. Dividing $5x>40$ by positive $5$ keeps the direction: $x>8$.",
      "$x\\geq8$ includes $8$, but at $x=8$ the left side is $45$, which is not greater than $45$. The inequality is strict, so the solution is $x>8$.",
      "$x>9$ comes from dividing $45$ by $5$ without first subtracting the $5$. Subtracting gives $5x>40$, and dividing by $5$ gives $x>8$.",
      "Subtract $5$ from both sides to get $5x>40$, then divide by positive $5$, which keeps the direction: $x>8$."
    ]
  },
  "q:422f73f44a4892c1": {
    "options": [
      "$\\approx 9.0$",
      "$\\approx 8.0$",
      "$\\approx 11.3$",
      "$\\approx 16.0$"
    ],
    "explanations": [
      "$9.0$ does not follow from the side length; it would need the diagonal squared to be $81$, but $8^2+8^2=128$. The diagonal is $\\sqrt{128}=8\\sqrt{2}\\approx11.3$.",
      "$8.0$ is the side length. The diagonal is the hypotenuse of a right triangle with two sides of $8$, so it must be longer: $8\\sqrt{2}\\approx11.3$.",
      "The diagonal is the hypotenuse of a right triangle with legs $8$ and $8$, so it is $\\sqrt{8^2+8^2}=8\\sqrt{2}\\approx11.3$.",
      "$16.0$ is $8+8$, the path along two sides, or $8\\times2$ in place of $8\\sqrt{2}$. The diagonal cuts across the corner, so it is shorter: $8\\sqrt{2}\\approx11.3$."
    ]
  },
  "q:e6a05dc1f5cf84de": {
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$"
    ],
    "explanations": [
      "$\\frac{1}{6}$ is the probability of rolling exactly $4$. \\\"4 or less\\\" includes $1$, $2$, $3$, and $4$, which is $\\frac{4}{6}=\\frac{2}{3}$.",
      "The outcomes $1$, $2$, $3$, and $4$ are $4$ of the $6$ equally likely outcomes, so the probability is $\\frac{4}{6}=\\frac{2}{3}$.",
      "$\\frac{1}{3}$ is $\\frac{2}{6}$, the chance of rolling $5$ or $6$, which is the complement of the event asked about. Rolling $4$ or less is $\\frac{4}{6}=\\frac{2}{3}$.",
      "$\\frac{1}{2}$ is $\\frac{3}{6}$, counting only $1$, $2$, and $3$ as if the event were \\\"less than 4.\\\" \\\"4 or less\\\" also includes $4$, giving $\\frac{2}{3}$."
    ]
  },
  "q:01f171e6e3ac65ac": {
    "options": [
      "The sonar used to study the twilight zone has likely driven fish to the surface",
      "Most twilight zone species would be too small to have any commercial value",
      "The twilight zone plays a smaller ecological role than the sunlit surface waters",
      "Overfishing the twilight zone could disrupt the world's largest animal migration"
    ],
    "explanations": [
      "Nothing in the passage links the sonar to the fish's movement. The passage presents the nightly rise and dawn descent as the animals' own feeding behavior, which scientists observed with sonar.",
      "The passage says nothing about the size of individual species or their commercial value. It compares the zone's total biomass to the world's fisheries, which if anything suggests large potential value.",
      "This contradicts the passage, which stresses the zone's huge biomass and calls its migration the largest animal movement on Earth. Nothing suggests its role is smaller than that of surface waters.",
      "The zone holds more fish biomass than all fisheries combined, and those fish make the largest animal migration on Earth. Heavy fishing there could therefore disrupt that migration."
    ]
  },
  "q:f53ac35ae045505b": {
    "options": [
      "Similarly,",
      "Therefore,",
      "Conversely,",
      "Otherwise,"
    ],
    "explanations": [
      "Bats and toothed whales both find their way by making sounds and interpreting the echoes. The second sentence describes a parallel case, so \\\"Similarly\\\" fits.",
      "\\\"Therefore\\\" signals a result, as if bats' echolocation caused dolphins to echolocate. The two sentences describe parallel abilities, not cause and effect.",
      "\\\"Conversely\\\" signals an opposite. Dolphins producing clicks and interpreting returning sound is the same strategy bats use, not a contrasting one.",
      "\\\"Otherwise\\\" introduces what happens if a condition is not met. The first sentence sets up no condition; it describes a strategy that the second sentence shows in another animal."
    ]
  },
  "q:b23d79cef9014e88": {
    "options": [
      "$\\frac{1}{x+3}$",
      "$\\frac{1}{x^2-9}$",
      "$\\frac{x-3}{x+3}$",
      "$\\frac{1}{x-3}$"
    ],
    "explanations": [
      "The factor $x-3$ appears in both the numerator and the denominator, so it cancels and leaves $\\frac{1}{x+3}$, for $x\\neq3$.",
      "$\\frac{1}{x^2-9}$ removes $x-3$ from the numerator but leaves it in the denominator, since $x^2-9=(x+3)(x-3)$. Cancelling must remove the factor from both, giving $\\frac{1}{x+3}$.",
      "$\\frac{x-3}{x+3}$ removes $x-3$ from the denominator only and keeps it in the numerator. The common factor must be cancelled from both places, leaving $\\frac{1}{x+3}$.",
      "$\\frac{1}{x-3}$ cancels the wrong factor, removing $x+3$, which does not appear in the numerator. The shared factor is $x-3$, so the result is $\\frac{1}{x+3}$."
    ]
  },
  "q:4d3e69e0e865b4e2": {
    "options": [
      "$y = -2$",
      "$y = 0$",
      "$y = 2$",
      "$y = 3$"
    ],
    "explanations": [
      "$y=-2$ shifts in the wrong direction. Adding $2$ moves the graph of $2^x$ up $2$ units, so the asymptote rises from $y=0$ to $y=2$.",
      "$y=0$ is the asymptote of the parent function $2^x$. The $+2$ shifts the whole graph up, moving the asymptote to $y=2$.",
      "As $x$ decreases, $2^x$ approaches $0$, so $f(x)=2^x+2$ approaches $0+2=2$. The horizontal asymptote is $y=2$.",
      "$y=3$ is the $y$-intercept, $f(0)=2^0+2=3$, a point on the graph. The asymptote is the value the graph approaches as $x$ decreases, $y=2$."
    ]
  },
  "q:7778a009be1ce0e4": {
    "options": [
      "$x^2 - 6$",
      "$x - 6$",
      "$x + 36$",
      "$x + 6$"
    ],
    "explanations": [
      "$x^2-6$ divides only the $36$ by $6$ and leaves $x^2$ alone. The numerator must be factored, $(x+6)(x-6)$, and then $x-6$ cancels to leave $x+6$.",
      "$x-6$ keeps the factor that cancels. Since $x^2-36=(x+6)(x-6)$, dividing by $x-6$ leaves the other factor, $x+6$.",
      "$x+36$ does not come from the factoring; multiplying back, $(x+36)(x-6)=x^2+30x-216$, not $x^2-36$. The quotient is $x+6$.",
      "The numerator is a difference of squares, $x^2-36=(x+6)(x-6)$. The common factor $x-6$ cancels: $\\frac{(x+6)(x-6)}{x-6}=x+6$, for $x\\neq6$."
    ]
  },
  "q:439888be75263155": {
    "options": [
      "$\\$2.94$",
      "$\\$6.30$",
      "$\\$9.24$",
      "$\\$10.50$"
    ],
    "explanations": [
      "\\$2.94 is only the flour cost, $10.5\\times0.28$. The milk also costs money, $14\\times0.45=6.30$ dollars, so the total is \\$9.24.",
      "\\$6.30 is only the milk cost, $14\\times0.45$. Adding the flour cost of $10.5\\times0.28=2.94$ dollars gives the total, \\$9.24.",
      "The flour is $\\frac{3}{4}\\times14=10.5$ cups, costing $10.5\\times0.28=2.94$ dollars, and the milk costs $14\\times0.45=6.30$ dollars. Together they cost \\$9.24.",
      "10.50 is the number of cups of flour, $\\frac{3}{4}\\times14$, reported as if it were dollars. It still has to be priced and added to the milk cost, giving \\$9.24."
    ]
  },
  "q:56fef8a999bddeed": {
    "options": [
      "$5^{2}$",
      "$5^{-2}$",
      "$\\frac{-1}{5^{2}}$",
      "$-5^{2}$"
    ],
    "explanations": [
      "A negative exponent in the denominator moves to the numerator as a positive exponent: $\\frac{1}{5^{-2}}=5^{2}$.",
      "$5^{-2}$ moves the power to the numerator but keeps the negative exponent, which equals $\\frac{1}{25}$. Moving it out of the denominator flips the sign of the exponent, giving $5^{2}$.",
      "$\\frac{-1}{5^{2}}$ turns the negative exponent into a negative sign on the value. A negative exponent means a reciprocal, not a negative number, so $\\frac{1}{5^{-2}}=5^{2}=25$.",
      "$-5^{2}$ equals $-25$, treating the negative exponent as a negative sign. A negative exponent signals a reciprocal, so $\\frac{1}{5^{-2}}=5^{2}=25$, which is positive."
    ]
  },
  "q:6ca304870c8547df": {
    "options": [
      "0.37",
      "1.30",
      "3.50",
      "0.77"
    ],
    "explanations": [
      "0.37 is $78/210$, comparing raw scholarship counts. In-state has 700 students to the international group's 200, so counts cannot be compared directly; the rates are $0.39$ and $0.30$.",
      "International students have $34+44=78$ scholarships out of 200, a rate of $0.39$; in-state students have $84+126=210$ out of 700, a rate of $0.30$. The ratio is $0.39/0.30=1.30$.",
      "3.50 is $700/200$, the ratio of the two group sizes, not of their scholarship rates. The rates are $78/200=0.39$ and $210/700=0.30$, and $0.39/0.30=1.30$.",
      "0.77 is $0.30/0.39$, inverting the comparison. The question asks how many times the in-state rate the international rate is, so the international rate goes on top: $0.39/0.30=1.30$."
    ]
  },
  "q:56c8515f8baac9c8": {
    "options": [
      "$x \\neq 2$ and $x \\neq -6$",
      "$x \\neq -2$ and $x \\neq 6$",
      "All real numbers",
      "$x \\neq 2$ and $x \\neq 6$"
    ],
    "explanations": [
      "The function is undefined where the denominator is zero. $x-2=0$ gives $x=2$ and $x+6=0$ gives $x=-6$, so the domain excludes both.",
      "$x\\neq-2$ and $x\\neq6$ flips the sign of both values. A factor $x-a$ is zero at $x=a$, so $x-2$ excludes $2$ and $x+6$ excludes $-6$.",
      "All real numbers ignores the denominator. The fraction is undefined when $(x-2)(x+6)=0$, so $x=2$ and $x=-6$ must be excluded.",
      "$x\\neq2$ and $x\\neq6$ gets $x-2$ right but reads $x+6$ as if it were zero at $x=6$. The factor $x+6$ is zero at $x=-6$."
    ]
  },
  "q:c2c69a391780ef90": {
    "options": [
      "57",
      "43",
      "54",
      "64"
    ],
    "explanations": [
      "The students who do not like math number $51-22=29$, so the probability is $\\frac{29}{51}\\approx0.569$, or about $57$ percent.",
      "$43$ percent is $\\frac{22}{51}$, the probability that the student does like math. The question asks for NOT liking math, the complement: $\\frac{29}{51}\\approx57$ percent.",
      "$54$ percent would correspond to about $27.5$ of the $51$ students, not a whole number; no counting step yields it. The non-math group is $29$ students, so the answer is $\\frac{29}{51}\\approx57$ percent.",
      "$64$ percent would require about $33$ of $51$ students not to like math, but only $51-22=29$ don't. That gives $\\frac{29}{51}\\approx57$ percent."
    ]
  },
  "q:9772e4c363626ac8": {
    "options": [
      "72",
      "60",
      "86",
      "82"
    ],
    "explanations": [
      "$72°$ added to $98°$ gives $170°$, not $180°$, so the two angles would not form a straight line. The adjacent interior angle is $180-98=82°$.",
      "$60°$ added to $98°$ gives only $158°$, so they would not be supplementary. An exterior angle and its adjacent interior angle form a straight line, so the interior angle is $82°$.",
      "$86°$ added to $98°$ gives $184°$, more than a straight angle. The interior angle must make the pair total exactly $180°$, so it is $82°$.",
      "An exterior angle and its adjacent interior angle lie on a straight line, so they are supplementary: $180-98=82°$."
    ]
  },
  "q:050c677c2b110c39": {
    "options": [
      "0",
      "1",
      "Infinitely many",
      "2"
    ],
    "explanations": [
      "An absolute value is a distance, so it is never negative. $|x|$ can never equal $-7$, so there are no solutions.",
      "One solution suggests $x=-7$, but $|-7|=7$, not $-7$. No value of $x$ has a negative absolute value.",
      "Infinitely many solutions would require the equation to hold for every $x$. In fact it holds for none, because $|x|\\geq0$ for all $x$.",
      "Two solutions, $x=7$ and $x=-7$, solve $|x|=7$, not $|x|=-7$. Both give an absolute value of $7$, so neither works."
    ]
  },
  "q:7508db36da5f8f20": {
    "options": [
      "$x \\ge -1$",
      "$x = -1$ or $x = 9$",
      "$-1 < x < 9$",
      "$x < -1$ or $x > 9$"
    ],
    "explanations": [
      "$x\\ge-1$ keeps only one boundary and reverses its direction. For example, $x=0$ satisfies it but $|0-4|=4$ is not greater than $5$.",
      "$x=-1$ or $x=9$ solves the equation $|x-4|=5$. At those points the distance from $4$ equals $5$, so they fail the strict inequality.",
      "$-1<x<9$ solves $|x-4|<5$, the points within $5$ units of $4$. The inequality asks for points more than $5$ units away, which lie outside that interval.",
      "$|x-4|>5$ means $x$ is more than $5$ units from $4$, so $x-4<-5$ or $x-4>5$. That gives $x<-1$ or $x>9$."
    ]
  },
  "q:ee6f1f4e7bd35af3": {
    "options": [
      "32%",
      "16%",
      "26%",
      "84%"
    ],
    "explanations": [
      "$32$ percent is double the correct rate; it matches $\\frac{24}{76}$ or $\\frac{12}{38}$, using half of 76 as the total. The correct rate is $\\frac{12}{76}\\approx16$ percent.",
      "The percent who chose pizza is the part over the whole: $\\frac{12}{76}\\approx0.158$, and multiplying by 100 and rounding to the nearest whole percent gives $16$ percent.",
      "$26$ percent would correspond to about $20$ of the $76$ students; no step with $12$ and $76$ produces it. The correct rate is $\\frac{12}{76}\\approx16$ percent.",
      "$84$ percent is $\\frac{64}{76}$, the percent who did not choose pizza. The question asks for those who chose it, $\\frac{12}{76}\\approx16$ percent."
    ]
  },
  "q:82fe1a64586bdc4f": {
    "options": [
      "Adichie-Bell deliberately misled her editor about a novel she never intended to write, as the two typists' recollections confirm.",
      "The letters are the only surviving evidence of the novel, and they do not show that it ever existed.",
      "Adichie-Bell completed the novel sometime after 1983 but destroyed the manuscript before her death.",
      "Adichie-Bell's essays, which her typists transcribed, were more accomplished than the novel she described."
    ],
    "explanations": [
      "This claims deliberate deception, an intention the text never supports. The typists only show that no novel was transcribed, and her 1983 restart suggests effort rather than fraud.",
      "The letters describe the novel in detail, but no manuscript has been found and the typists recall only essays. The only evidence is her own letters, and the scholars' debate shows those letters do not prove the novel existed.",
      "This invents events. The text never says she completed the novel or destroyed a manuscript; it says only that no manuscript has been found, which is equally consistent with the book never existing.",
      "The text never judges the quality of her essays or of the novel. It mentions the essays only to show what the typists transcribed, so this comparison is unsupported."
    ]
  },
  "q:6a1ce8ac3a633a0a": {
    "options": [
      "$2.5$",
      "$30.6$",
      "$32.1$",
      "$62.8$"
    ],
    "explanations": [
      "$2.5$ is the time of the maximum, $t=-\\frac{24.5}{2(-4.9)}$, not the height. Substituting it gives $h(2.5)\\approx32.1$ meters.",
      "$30.6$ is $4.9(2.5)^2=30.625$, just one of the three terms of $h(2.5)$, reported on its own. The full height is $-30.625+61.25+1.5\\approx32.1$ meters.",
      "The parabola opens downward, so the maximum height is at the vertex, $t=-\\frac{24.5}{2(-4.9)}=2.5$ seconds. Then $h(2.5)=-30.625+61.25+1.5=32.125\\approx32.1$ meters.",
      "$62.8$ is $24.5(2.5)+1.5$, the positive terms only, dropping $-4.9t^2$. Including that term subtracts $30.625$, giving about $32.1$ meters."
    ]
  },
  "q:3dbde1695d7e8baf": {
    "options": [
      "0.91",
      "5.49",
      "0.3",
      "6.1"
    ],
    "explanations": [
      "0.91 comes from dividing the reduced total by 10 instead of 9: $54.9/10=5.49$, and $6.4-5.49=0.91$. With 9 sheets left, the mean is $54.9/9=6.1$, a drop of 0.3.",
      "5.49 is $54.9/10$, a new mean computed with the wrong count, and it is a mean rather than a difference. Dividing by the 9 remaining sheets gives 6.1, which differs from 6.4 by 0.3.",
      "The ten sheets total $10(6.4)=64$ mm. Removing 9.1 leaves $54.9$ mm over 9 sheets, a mean of 6.1, which differs from 6.4 by $0.3$.",
      "6.1 is the new mean, an intermediate value. The question asks how much it differs from 6.4, which is $6.4-6.1=0.3$."
    ]
  },
  "q:7db07da5aa9ad8ab": {
    "options": [
      "27",
      "24",
      "29",
      "26"
    ],
    "explanations": [
      "27 is the median, the middle value of $16, 19, 27, 41, 42$. The mean adds all five values and divides by 5: $145/5=29$.",
      "24 matches dividing the sum by 6 instead of 5, $145/6\\approx24.2$. There are 5 values, so the mean is $145/5=29$.",
      "The values sum to $42+16+27+19+41=145$, and dividing by the 5 values gives a mean of 29.",
      "26 is the range, $42-16$, a measure of spread rather than center. The mean is the sum divided by the count: $145/5=29$."
    ]
  }
}

export default ENTRIES
