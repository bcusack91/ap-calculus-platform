import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:cffaefb9c65baf20": {
    "options": [
      "$(-5, -1)$",
      "$(-30, 74)$",
      "$(5, -1)$",
      "$(5, 1)$"
    ],
    "explanations": [
      "$(-5,-1)$ flips the sign of the $x$-coordinate. The vertex is at $x=-\\frac{b}{2a}=\\frac{30}{6}=5$, not $-5$; forgetting the negative in $-\\frac{b}{2a}$ gives $-5$.",
      "$(-30,74)$ just reads off the coefficients $b=-30$ and $c=74$. Those are not coordinates of any point on the vertex; the vertex is at $x=\\frac{30}{6}=5$, where $y=-1$.",
      "The vertex is at $x=-\\frac{b}{2a}=\\frac{30}{6}=5$, and $y=3(25)-150+74=-1$. Equivalently, completing the square gives $y=3(x-5)^2-1$, so the vertex is $(5,-1)$.",
      "$(5,1)$ has the right $x$-coordinate but the wrong sign on $y$. Completing the square gives $3(x-5)^2-75+74$, and $74-75=-1$; subtracting in the reverse order, $75-74$, gives $1$."
    ]
  },
  "q:c3aa4e03680565e0": {
    "options": [
      "55.4",
      "31.4",
      "150.0",
      "188.5"
    ],
    "explanations": [
      "The arc length is $r\\theta=12\\cdot\\frac{5\\pi}{6}=10\\pi\\approx 31.4$ cm. The perimeter adds the two radii, $31.4+24=55.4$ cm.",
      "31.4 is the arc length $10\\pi$ alone. The perimeter of a sector also includes the two $12$ cm radii, so it is $31.4+24=55.4$ cm.",
      "150.0 is the central angle $\\frac{5\\pi}{6}$ converted to degrees, $150^\\circ$. That is an angle measure, not a length, so it cannot be the perimeter.",
      "188.5 is the sector's area, $\\frac{1}{2}r^2\\theta=\\frac{1}{2}(144)\\cdot\\frac{5\\pi}{6}=60\\pi$, in square centimeters. The question asks for the perimeter, $10\\pi+24\\approx 55.4$ cm."
    ]
  },
  "q:c23a0f97dc418de7": {
    "options": [
      "14",
      "12",
      "13",
      "31"
    ],
    "explanations": [
      "14 is not the line's value at $x=10$; the line gives 14 only when $x\\approx 15.7$. Substituting $x=10$ gives $-3(10)+61=31$.",
      "12 is not what the line predicts at $x=10$; it would require $x\\approx 16.3$. Substituting correctly gives $\\hat{y}=-30+61=31$.",
      "13 does not come from substituting $x=10$; the line reaches 13 only at $x=16$. The prediction at $x=10$ is $-3(10)+61=31$.",
      "Substitute $x=10$ into the line of best fit: $\\hat{y}=-3(10)+61=-30+61=31$. The slope is negative, so the prediction drops $3$ for every unit of $x$."
    ]
  },
  "q:241cab4110bdd143": {
    "options": [
      "$12$",
      "$13$",
      "$7$",
      "$14$"
    ],
    "explanations": [
      "At $12$ months the total is $96+22(12)=360$ dollars, and $\\frac{360}{12}=30$ exactly. An average equal to $30$ dollars is not below $30$, so $12$ is the boundary, not the answer.",
      "For $m>6$ the total is $96+22m$, and $\\frac{96+22m}{m}<30$ gives $96<8m$, so $m>12$. The first whole month is $13$, with an average of $\\frac{382}{13}\\approx 29.38$ dollars.",
      "$7$ is the first month billed at the lower $22$-dollar rate. At $7$ months the total is $96+154=250$ dollars, an average of about $35.71$, still well above $30$.",
      "$14$ overshoots by one month. The average already drops below $30$ dollars at $13$ months ($\\frac{382}{13}\\approx 29.38$), and the question asks when it first does."
    ]
  },
  "q:a3746d6bae258e61": {
    "options": [
      "$54\\%$ to $64\\%$",
      "$49\\%$ to $69\\%$",
      "$54\\%$ to $59\\%$",
      "$59\\%$ to $64\\%$"
    ],
    "explanations": [
      "The margin of error extends on both sides of the estimate: $59\\%-5\\%=54\\%$ and $59\\%+5\\%=64\\%$, so plausible values run from $54\\%$ to $64\\%$.",
      "$49\\%$ to $69\\%$ uses $\\pm 10\\%$, doubling the margin of error. The stated margin is $\\pm 5\\%$, so the interval is $59\\%\\pm 5\\%$, from $54\\%$ to $64\\%$.",
      "$54\\%$ to $59\\%$ applies the margin only below the estimate. The true value could just as plausibly lie above $59\\%$, up to $64\\%$.",
      "$59\\%$ to $64\\%$ applies the margin only above the estimate. The interval must extend $5\\%$ below $59\\%$ as well, down to $54\\%$."
    ]
  },
  "q:3ae9548d6c688253": {
    "options": [
      "3.16",
      "2.00",
      "5.00",
      "5.66"
    ],
    "explanations": [
      "$P$ lies on the perpendicular bisector of $\\overline{AB}$, $y=-x+5$. Solving with $y=2x-1$ gives $P=(2,3)$, so $PA=\\sqrt{1^2+3^2}=\\sqrt{10}\\approx 3.16$.",
      "2.00 is the $x$-coordinate of $P=(2,3)$, found when solving $-x+5=2x-1$. The distance to $A(1,0)$ still has to be computed: $\\sqrt{1^2+3^2}\\approx 3.16$.",
      "5.00 is the constant in the perpendicular bisector's equation, $y=-x+5$, not a distance. The distance from $P(2,3)$ to $A(1,0)$ is $\\sqrt{10}\\approx 3.16$.",
      "5.66 is the length of $\\overline{AB}$ itself, $\\sqrt{4^2+4^2}=\\sqrt{32}$. The question asks for $PA$, the distance from $P(2,3)$ to $A$, which is $\\sqrt{10}\\approx 3.16$."
    ]
  },
  "q:b33e489eb0551063": {
    "options": [
      "8.5",
      "15.0",
      "17.0",
      "14.2"
    ],
    "explanations": [
      "8.5 is $AM$, half of $AB=17$. The question asks for $CM$, the segment from $C(8,0)$ to $M(-4,7.5)$, which is $\\sqrt{12^2+7.5^2}\\approx 14.2$.",
      "15.0 is the given altitude from $A$ to $\\overline{BC}$, a different segment. The median from $C$ to $M(-4,7.5)$ has length $\\sqrt{200.25}\\approx 14.2$.",
      "17.0 is $AB=\\sqrt{8^2+15^2}$, a value found along the way. $CM$ runs from $C(8,0)$ to the midpoint $M(-4,7.5)$, giving $\\sqrt{144+56.25}\\approx 14.2$.",
      "With $B(-8,0)$, $C(8,0)$, $A(0,15)$, the midpoint of $\\overline{AB}$ is $M(-4,7.5)$. Then $CM=\\sqrt{12^2+7.5^2}=\\sqrt{200.25}\\approx 14.2$."
    ]
  },
  "q:9255933798d6b49a": {
    "options": [
      "Shifted up",
      "Reflected across the $x$-axis",
      "Reflected across the $y$-axis",
      "Stretched vertically"
    ],
    "explanations": [
      "A vertical shift up would add a constant, as in $2^x+k$. Here the exponent changes from $x$ to $-x$, which flips the graph left to right rather than moving it up.",
      "A reflection across the $x$-axis would be $-2^x$, with the negative outside the power, making every output negative. $2^{-x}$ stays positive; the negative is on the input.",
      "Replacing $x$ with $-x$ reflects a graph across the $y$-axis. So $2^{-x}=\\left(\\frac{1}{2}\\right)^x$ is the mirror image of $2^x$, decreasing instead of increasing.",
      "A vertical stretch multiplies the output, as in $k\\cdot 2^x$ with $k>1$. Changing $x$ to $-x$ does not scale outputs; it reflects the graph across the $y$-axis."
    ]
  },
  "q:bd88f852b0afcbc5": {
    "options": [
      "14",
      "10",
      "12",
      "8"
    ],
    "explanations": [
      "14 does not come from setting the models equal. At $w=14$, A predicts $191$ and B predicts $161$, so A is already well ahead; the models meet at $w=8$.",
      "10 divides the starting gap of $40$ by B's rate of $4$ alone. The gap closes at the difference of the rates, $9-4=5$ per week, so $w=\\frac{40}{5}=8$.",
      "12 is not where the models meet: at $w=12$, A predicts $173$ and B predicts $153$. Setting $65+9w=105+4w$ gives $5w=40$, so $w=8$.",
      "Set the models equal: $65+9w=105+4w$, so $5w=40$ and $w=8$. Check: both predict $137$ subscribers at $8$ weeks."
    ]
  },
  "q:f8164a28f0c6c3f5": {
    "options": [
      "$\\frac{24}{62}$",
      "$\\frac{20}{35}$",
      "$\\frac{38}{62}$",
      "$\\frac{20}{62}$"
    ],
    "explanations": [
      "$\\frac{24}{62}$ is the fraction who FAILED: $15+9=24$. The question asks for the students who passed, $20+18=38$, out of $62$.",
      "$\\frac{20}{35}$ is the pass rate only among students who studied. The question asks about all students, so the denominator must be $62$ and the numerator $20+18=38$.",
      "Add the Pass column, $20+18=38$, and divide by the grand total, $35+27=62$. So $\\frac{38}{62}$ of all students passed.",
      "$\\frac{20}{62}$ counts only the students who studied and passed. It leaves out the $18$ students who passed without studying; all passers total $38$."
    ]
  },
  "q:52cc1ce7424669a5": {
    "options": [
      "117",
      "135",
      "153",
      "162"
    ],
    "explanations": [
      "117 paints only the side: $2\\pi rh=48\\pi\\approx 150.8$ square meters needs $13$ liters. The tank is closed, so the top and bottom ($18\\pi$) must be included too.",
      "135 includes only one circular end: $9\\pi+48\\pi=57\\pi\\approx 179.1$ square meters, or $15$ liters. Both the top and the bottom must be painted.",
      "153 buys $17$ liters, rounding $17.3$ down. Seventeen liters cover only $204$ square meters, less than the $207.3$ needed, so an $18$th liter is required.",
      "Total area $=2\\pi r^2+2\\pi rh=66\\pi\\approx 207.3$ square meters, needing $17.3$ liters. Paint comes in whole liters, so buy $18$, costing $18\\times 9=162$ dollars."
    ]
  },
  "q:ddc2e0409da71a99": {
    "options": [
      "$32\\pi$",
      "$6\\pi$",
      "$8\\pi$",
      "$4\\pi$"
    ],
    "explanations": [
      "$32\\pi$ would use $2\\pi r$ with a radius of $16$, doubling the diameter instead of halving it. The radius is $4$, so $C=2\\pi(4)=8\\pi$.",
      "$6\\pi$ would be the circumference of a circle with diameter $6$ or radius $3$. Neither number appears here; with diameter $8$, $C=\\pi d=8\\pi$.",
      "Circumference is $\\pi$ times the diameter: $C=\\pi(8)=8\\pi$, the same as $2\\pi r$ with $r=4$.",
      "$4\\pi$ is $\\pi r$, which leaves out the factor of $2$ in $2\\pi r$. With radius $4$, the circumference is $2\\pi(4)=8\\pi$."
    ]
  },
  "q:b05c34aa33ad64b6": {
    "options": [
      "$y=-5$",
      "$y=1$",
      "$y=7$",
      "$y=13$"
    ],
    "explanations": [
      "$y=-5$ subtracts the diameter $12$ from the center's $y$-coordinate $7$. A tangent line sits one radius, $6$, from the center, at $y=1$.",
      "Completing the square gives $(x+3)^2+(y-7)^2=36$, so the center is $(-3,7)$ and the radius is $6$. The lowest point is at $y=7-6=1$, so the line is $y=1$.",
      "$y=7$ is the horizontal line through the center $(-3,7)$. It cuts through the circle rather than touching it; the tangent below is one radius lower, at $y=1$.",
      "$y=13$ is the horizontal tangent ABOVE the circle, $7+6$. The question asks for the line below the circle, at $7-6=1$."
    ]
  },
  "q:cecfe6f69043f579": {
    "options": [
      "$2$",
      "$5$",
      "$10$",
      "$12.5$"
    ],
    "explanations": [
      "$2$ is the height alone, the distance from $P(2,5)$ to the $y$-axis. The area also needs the base $AB=5$ and the factor $\\frac{1}{2}$: $\\frac{1}{2}(5)(2)=5$.",
      "$P=(2,5)$, $A=(0,1)$, $B=(0,6)$. Base $AB=5$ lies on the $y$-axis, and the height is $P$'s $x$-coordinate, $2$, so the area is $\\frac{1}{2}(5)(2)=5$.",
      "$10$ is base times height, $5\\times 2$, without the factor $\\frac{1}{2}$ for a triangle. The area is $\\frac{1}{2}(5)(2)=5$.",
      "$12.5$ uses $P$'s $y$-coordinate, $5$, as the height. Since the base lies on the $y$-axis, the height is the horizontal distance, $P$'s $x$-coordinate $2$, giving area $5$."
    ]
  },
  "q:c80cc507c76c61ad": {
    "options": [
      "$\\frac{2}{x(x+2)}$",
      "$\\frac{1}{x^2+2}$",
      "$\\frac{1}{x(x+2)}$",
      "$\\frac{x+2}{x}$"
    ],
    "explanations": [
      "$\\frac{2}{x(x+2)}$ puts a $2$ in the numerator, but the only numerator is the $1$ in $\\frac{1}{x}$. The $2$ belongs inside the factor $x+2$ in the denominator, so the result is $\\frac{1}{x(x+2)}$.",
      "$\\frac{1}{x^2+2}$ multiplies $x$ into only the first term of $x+2$. The full product is $x(x+2)=x^2+2x$, so the expression is $\\frac{1}{x(x+2)}$.",
      "Dividing by $x+2$ is the same as multiplying by its reciprocal, $\\frac{1}{x+2}$. So $\\frac{1}{x}\\cdot\\frac{1}{x+2}=\\frac{1}{x(x+2)}$, with both factors in the denominator.",
      "$\\frac{x+2}{x}$ multiplies $\\frac{1}{x}$ by $x+2$ instead of dividing by it. Dividing by $x+2$ puts that factor in the denominator: $\\frac{1}{x(x+2)}$."
    ]
  },
  "q:c1a7dc9c1a65d750": {
    "options": [
      "72",
      "40",
      "86",
      "37"
    ],
    "explanations": [
      "Add all four cells: $25+12+15+20=72$. Equivalently, the row totals $37+35$ or the column totals $40+32$ both give $72$.",
      "40 is the total of the Yes column only, $25+15$. It leaves out the $32$ people who answered No; everyone surveyed totals $72$.",
      "86 is more than the sum of all four cells, $72$, so it would require counting $14$ people who are not in the table. No combination of the table's entries gives $86$.",
      "37 is the Male row total, $25+12$. It leaves out the $35$ females surveyed; the whole table totals $72$."
    ]
  },
  "q:1ea16bbabe139763": {
    "options": [
      "$\\frac{7}{25}$",
      "$\\frac{24}{7}$",
      "$\\frac{24}{25}$",
      "$\\frac{7}{24}$"
    ],
    "explanations": [
      "Sine is opposite over hypotenuse. For angle $A$, the opposite side is $BC=7$ and the hypotenuse is $AB=25$, so $\\sin A=\\frac{7}{25}$.",
      "$\\frac{24}{7}$ is adjacent over opposite, which is $\\cot A$, the reciprocal of $\\tan A$. Sine uses the hypotenuse: $\\frac{7}{25}$.",
      "$\\frac{24}{25}$ is adjacent over hypotenuse, which is $\\cos A$ (and also $\\sin B$). For $\\sin A$, use the side opposite $A$, $BC=7$: $\\frac{7}{25}$.",
      "$\\frac{7}{24}$ is opposite over adjacent, which is $\\tan A$. Sine divides the opposite side by the hypotenuse, $25$, giving $\\frac{7}{25}$."
    ]
  },
  "q:44bb467377914463": {
    "options": [
      "Kazemi's translation is more faithful to the Persian original than Whitfield's is, because it keeps the poem's meter.",
      "Persian poetry cannot be translated into English, as both versions fail to reproduce the original.",
      "Reviewers of translated poetry rarely read the original language and so misjudge which version is faithful.",
      "The translations reflect different choices about which feature of the original to keep, since English cannot carry both."
    ],
    "explanations": [
      "Calling Kazemi's version \\\"more faithful\\\" adopts the reviewers' faithful-versus-free framing that the text sets aside. Each translator keeps one kind of fidelity: Kazemi the meter, Whitfield every image.",
      "\\\"Cannot be translated\\\" overstates the text. Both translations exist; the passage says only that the meter and the density of imagery \\\"cannot both be carried\\\" into English, a tradeoff, not an impossibility.",
      "The text never says reviewers fail to read the original language. It questions their faithful-versus-free labels, not their competence, so this introduces an unsupported claim.",
      "The text calls the difference \\\"a decision about which kind of fidelity to purchase,\\\" because the pattern and the imagery \\\"cannot both be carried\\\" into English. That is exactly a choice about which feature to keep."
    ]
  },
  "q:cff5b05d0d48fb77": {
    "options": [
      "$y = 7x + 11$",
      "$y = 17x + 5$",
      "$y = -5x + 47$",
      "$y = 5x + 17$"
    ],
    "explanations": [
      "$y=7x+11$ fits the middle point exactly ($32$ at $x=3$) but is too steep: it gives $18$ at $x=1$ and $46$ at $x=5$, missing both end points by $5$.",
      "$y=17x+5$ swaps the slope and intercept of $5x+17$. It rises $17$ per unit and gives $90$ at $x=5$, far above the actual $41$.",
      "$y=-5x+47$ has a negative slope, but the $y$-values increase as $x$ increases. It gives $42$ at $x=1$ and $22$ at $x=5$, reversing the trend.",
      "The $y$-values rise about $5$ per unit of $x$, so the slope is about $5$. The line $y=5x+17$ gives $22,27,32,37,42$, each within $1$ unit of the data."
    ]
  },
  "q:ac13685867ccde0b": {
    "options": [
      "It increases by $5$ percent.",
      "It increases by $4$ percent.",
      "It decreases by $4$ percent.",
      "It decreases by $5$ percent."
    ],
    "explanations": [
      "\\\"Increases by $5$ percent\\\" subtracts the percent changes, $25-20=5$, and also gets the direction backward. Economy is a ratio: $\\frac{1.20}{1.25}=0.96$, a $4$ percent decrease.",
      "\\\"Increases by $4$ percent\\\" has the right size but the wrong direction. It comes from the reciprocal ratio $\\frac{1.25}{1.20}\\approx 1.04$; fuel used is in the denominator, so economy falls.",
      "The new economy is $\\frac{1.20d}{1.25g}=0.96\\cdot\\frac{d}{g}$. That is $96$ percent of the old value, a $4$ percent decrease.",
      "\\\"Decreases by $5$ percent\\\" subtracts the percent changes, $25-20$. Scale factors combine by division, not subtraction: $\\frac{1.20}{1.25}=0.96$, a $4$ percent decrease."
    ]
  },
  "q:b4eee0bce9508ec4": {
    "options": [
      "Set A, whose values are closer to 50",
      "Neither, since both have the same number of values",
      "Neither, since both have mean 50",
      "Set B, whose values are farther from 50"
    ],
    "explanations": [
      "Values close to the mean indicate a SMALL spread. Set A's values lie within $2$ of $50$, so its standard deviation is the smaller one, not the greater.",
      "The number of values does not determine spread. Both sets have three values, but Set B's lie $20$ from the mean while Set A's lie only $2$ away.",
      "A shared mean says nothing about spread. Both sets center on $50$, yet Set B's values are much farther from that center, so its standard deviation is larger.",
      "Standard deviation measures how far values typically lie from the mean. Set B's values are $20$ from $50$, versus $2$ for Set A, so Set B has the greater standard deviation."
    ]
  },
  "q:8e2347fbac2691a7": {
    "options": [
      "800",
      "2240",
      "3200",
      "6080"
    ],
    "explanations": [
      "800 scales the bronze by $16$ and the leaf by $4$: $5(16)(7)+60(4)=560+240$. Mass scales by the cube of $4$, $64$, and area by the square, $16$.",
      "2240 is the bronze alone, $5\\times 64\\times 7$. It leaves out the gold leaf, which scales with area: $60\\times 16=960$ dollars.",
      "Bronze scales with volume: $5\\times 4^3=320$ kg, costing $2240$ dollars. Gold leaf scales with area: $60\\times 4^2=960$ dollars. Total $=3200$ dollars.",
      "6080 scales the gold leaf by the volume factor $64$, giving $3840$ dollars. Surface area scales by $4^2=16$, so the leaf costs $960$ dollars and the total is $3200$."
    ]
  },
  "q:8e1d8e3efd7cc5d9": {
    "options": [
      "$\\$41.76$",
      "$\\$139.20$",
      "$\\$864$",
      "$\\$1{,}252.80$"
    ],
    "explanations": [
      "\\$41.76 is the cost for a single day: $28.8$ liters $\\times 1.45$. The question asks for a $30$-day month, so multiply by $30$ to get \\$1,252.80.",
      "\\$139.20 omits the $9$ hours per day: $3.2\\times 30\\times 1.45$. The generator burns $3.2\\times 9=28.8$ liters each day, not $3.2$.",
      "864 is the month's fuel in liters, $28.8\\times 30$, an intermediate value rather than a cost. Multiplying by \\$1.45 per liter gives \\$1,252.80.",
      "Daily fuel is $3.2\\times 9=28.8$ liters, so the month uses $28.8\\times 30=864$ liters. At \\$1.45 per liter, the cost is $864\\times 1.45=$ \\$1,252.80."
    ]
  },
  "q:3fa8f0c72a6475e3": {
    "options": [
      "$9.50$",
      "$12.50$",
      "$13.75$",
      "$23.25$"
    ],
    "explanations": [
      "$9.50$ is the second driver's charge alone, $4+2(2.75)$. The question asks for the difference between the two charges, $22.00-9.50=12.50$ dollars.",
      "The $7.5$-hour charge would be $4+7(2.75)=23.25$ dollars, but the daily maximum caps it at $22.00$. The $3$-hour charge is $9.50$, so the difference is $12.50$ dollars.",
      "$13.75$ is $23.25-9.50$, using the first driver's uncapped charge. The daily maximum limits that charge to $22.00$ dollars, so the difference is $12.50$.",
      "$23.25$ is the first driver's uncapped charge, $4+7(2.75)$. It ignores the $22.00$-dollar daily maximum and is a single charge, not the difference the question asks for."
    ]
  },
  "q:81daa2105397c7d1": {
    "options": [
      "$45$",
      "$73$",
      "$74$",
      "$160$"
    ],
    "explanations": [
      "$45$ is the cycling MINIMUM, the smallest allowed amount. The question asks for the greatest, which the time budget sets: $220$ minutes $\\div 3$ gives $73$ whole miles.",
      "Running takes $26(10)=260$ minutes, leaving $480-260=220$ minutes. At $3$ minutes per mile that is $73.3$ miles, so the most whole miles is $73$ ($219$ minutes), above the $45$-mile minimum.",
      "$74$ rounds $73.3$ up. Seventy-four miles takes $222$ minutes, but only $220$ remain after running, so it breaks the $8$-hour limit.",
      "$160$ is $480\\div 3$, which spends the entire $8$ hours on cycling. The $260$ minutes of running must come out first, leaving room for only $73$ miles."
    ]
  },
  "q:b2fd17cf000a5916": {
    "options": [
      "$800$",
      "$2{,}700$",
      "$4{,}800$",
      "$8{,}000$"
    ],
    "explanations": [
      "$800$ would require the gap to shrink by $7{,}200$ people, and no single slip with these numbers produces it. Compounding gives X about $21{,}673$ and Y about $24{,}404$, a gap of about $2{,}700$.",
      "Town X: $12000(1.03)^{20}\\approx 21{,}673$. Town Y: $20000(1.01)^{20}\\approx 24{,}404$. The difference is about $2{,}731$, which rounds to $2{,}700$.",
      "$4{,}800$ uses simple growth: $12000(1.60)=19{,}200$ and $20000(1.20)=24{,}000$. Percent growth compounds each year, so X reaches about $21{,}673$ and the gap is about $2{,}700$.",
      "$8{,}000$ is today's difference, $20{,}000-12{,}000$, ignoring the $20$ years of growth. Town X grows faster, so the gap shrinks to about $2{,}700$."
    ]
  },
  "q:8152f537fb3a31f2": {
    "options": [
      "113",
      "126",
      "138",
      "226"
    ],
    "explanations": [
      "113 is the lateral surface only, $2\\pi rh=36\\pi$. The question asks for total surface area, which adds both circular ends, $8\\pi$, for $44\\pi\\approx 138$.",
      "126 includes only one circular end, $36\\pi+4\\pi=40\\pi$. A closed cylinder has two ends, so the total is $44\\pi\\approx 138$.",
      "The sphere's volume is $\\frac{4}{3}\\pi(3)^3=36\\pi$, so $\\pi(2)^2h=36\\pi$ gives $h=9$. Total area $=2\\pi(2)^2+2\\pi(2)(9)=44\\pi\\approx 138$.",
      "226 uses the sphere's radius $3$ in the area formula, $2\\pi(3)^2+2\\pi(3)(9)=72\\pi$. The cylinder's radius is $2$, giving $44\\pi\\approx 138$."
    ]
  },
  "q:6921afebe111e9d5": {
    "options": [
      "32",
      "22",
      "33",
      "28"
    ],
    "explanations": [
      "32 is the Juniors row total, $22+10$. The question asks for everyone who chose Walk, which is the Walk column: $22+11=33$.",
      "22 counts only the juniors who walk. The $11$ seniors who walk must be added, for $33$.",
      "Add down the Walk column: $22$ juniors plus $11$ seniors gives $33$.",
      "28 is the Bus column total, $10+18$. The question asks about Walk, whose total is $22+11=33$."
    ]
  },
  "q:dc965e16c10425bc": {
    "options": [
      "The mean is 23 and the median is 21.",
      "The mean is 26 and the median is 24.",
      "The mean is 26 and the median is 21.",
      "The mean is 20 and the median is 18."
    ],
    "explanations": [
      "Mean 23 and median 21 double first and then add 3: $2(10)+3$ and $2(9)+3$. The order is add 3 first, then double, so each becomes $2(x+3)$: mean 26, median 24.",
      "The original mean is $10$ and median $9$. Each value becomes $2(x+3)$, and the mean and median transform the same way: $2(13)=26$ and $2(12)=24$.",
      "Mean 26 and median 21 is half right: the mean uses the correct order, $2(10+3)$, but the median uses the reversed order, $2(9)+3$. Correctly, the median is $2(9+3)=24$.",
      "Mean 20 and median 18 only double the values and never add 3. Adding 3 first raises the mean to $13$ and median to $12$ before doubling, giving 26 and 24."
    ]
  },
  "q:09b83e5736d35071": {
    "options": [
      "25.0 percent",
      "36.0 percent",
      "76.0 percent",
      "11.8 percent"
    ],
    "explanations": [
      "25.0 percent is Brand X's charge at that moment, the given value. The question asks for Brand Y's charge at the same time, $h=10$: $96-60=36.0$ percent.",
      "Brand X hits 25 percent when $100-7.5h=25$, so $h=10$. At that time Brand Y has $96-6.0(10)=36.0$ percent.",
      "76.0 percent drops the $100$ when solving for time, using $7.5h=25$ to get $h\\approx 3.33$. The correct equation $100-7.5h=25$ gives $h=10$, where Brand Y has $36.0$ percent.",
      "11.8 is the number of HOURS for Brand Y to reach 25 percent, $h=\\frac{71}{6}\\approx 11.8$. That is a time, not a charge; Brand Y's charge at $h=10$ is $36.0$ percent."
    ]
  },
  "q:c68581078be7603f": {
    "options": [
      "$\\frac{5}{5}$",
      "$\\frac{5}{12}$",
      "$\\frac{7}{12}$",
      "$\\frac{1}{12}$"
    ],
    "explanations": [
      "$\\frac{5}{5}$ divides the red marbles by the red marbles, giving a probability of $1$. The denominator must be all $12$ marbles: $\\frac{5}{12}$.",
      "Probability is favorable outcomes over total outcomes. There are $5$ red marbles out of $5+7=12$, so the probability is $\\frac{5}{12}$.",
      "$\\frac{7}{12}$ is the probability of drawing BLUE. The question asks about red, with $5$ favorable marbles: $\\frac{5}{12}$.",
      "$\\frac{1}{12}$ is the chance of drawing one particular marble. Any of the $5$ red marbles counts, so the probability is $\\frac{5}{12}$."
    ]
  },
  "q:a9cacfb304534871": {
    "options": [
      "By denying that the stock biomass recovered under the quota system within the eight years reported.",
      "By arguing that seasonal closures would have restored the biomass more quickly and kept more crews working.",
      "By recommending that individual catch quotas be prohibited in other fisheries because they displace crews.",
      "By accepting the biomass recovery while noting that the policy also displaced crews, which Text 1 treats as mere consolidation."
    ],
    "explanations": [
      "Text 2 states outright that \\\"The biomass recovered,\\\" so it would not deny the recovery. It accepts that result and adds a second fact beside it.",
      "Text 2 never mentions seasonal closures; that comparison belongs to Text 1. Text 2 does not claim any other policy would have worked faster or kept more crews employed.",
      "Text 2 does not call for prohibiting quotas. It says success \\\"depends on what one is measuring,\\\" a point about how to judge the outcome, not a recommended ban.",
      "Text 2 grants that \\\"The biomass recovered\\\" but adds that the crews \\\"did not become quota holders,\\\" insisting \\\"Both statements describe the same policy.\\\" Text 1 calls that loss consolidation."
    ]
  },
  "q:1407a286a5910f59": {
    "options": [
      "$-1$",
      "$4$",
      "$12$",
      "$3$"
    ],
    "explanations": [
      "$-1$ is the $x$-value where the minimum occurs, from $g(x)=(x+1)^2+3$. The question asks for the minimum VALUE of $g$, which is $g(-1)=3$.",
      "$4$ is $g(0)$, the constant term of $x^2+2x+4$. The parabola's lowest point is not at $x=0$ but at $x=-1$, where $g=3$.",
      "$12$ is $g(2)=4+4+4$, the value at the excluded point $x=2$. That is not the minimum; completing the square shows the minimum is $3$ at $x=-1$.",
      "Factoring gives $x^3-8=(x-2)(x^2+2x+4)$, so $g(x)=x^2+2x+4=(x+1)^2+3$. The minimum value is $3$, at $x=-1$, which is in the domain."
    ]
  },
  "q:2e25a7c0c5c8954f": {
    "options": [
      "More than half of the respondents who answered Frequently were ages 12-17.",
      "The percent of respondents ages 30-49 who answered Never is more than three times the percent of respondents ages 12-17 who answered Never.",
      "A larger number of respondents ages 30-49 answered Frequently than answered Occasionally.",
      "The percent of respondents ages 12-17 who answered Frequently exceeds the percent of respondents ages 18-29 who answered Frequently by more than 11 percentage points."
    ],
    "explanations": [
      "Of the $483$ Frequently responses, $180$ came from ages 12-17, which is $37.3$ percent, not more than half. $180$ is the largest entry in that column, but not a majority.",
      "The rates are $\\frac{78}{380}\\approx 20.5$ percent and $\\frac{24}{300}=8.0$ percent, a ratio of about $2.6$, not more than $3$. Only the raw counts, $\\frac{78}{24}=3.25$, exceed three.",
      "This reads the 30-49 row backward: $148$ answered Frequently and $154$ answered Occasionally, so more answered Occasionally.",
      "Ages 12-17: $\\frac{180}{300}=60.0$ percent answered Frequently. Ages 18-29: $\\frac{155}{320}\\approx 48.4$ percent. The gap is about $11.6$ percentage points, which is more than $11$."
    ]
  },
  "q:c3691916e9d428a6": {
    "options": [
      "$525$ euros",
      "$490$ euros",
      "$588$ euros",
      "$658.56$ euros"
    ],
    "explanations": [
      "The new rate is $0.14\\times 1.20=0.168$ dollars per word, so $3{,}500$ words cost $588$ dollars. Converting, $588\\div 1.12=525$ euros.",
      "$490$ is $0.14\\times 3500$, the charge at the old rate, and it is still in dollars. Applying the $20$ percent raise and converting gives $525$ euros.",
      "$588$ is the new charge in DOLLARS, $0.168\\times 3500$. One euro costs $1.12$ dollars, so dividing gives $525$ euros.",
      "$658.56$ multiplies by the exchange rate, $588\\times 1.12$. Since a euro is worth more than a dollar, converting dollars to euros means dividing: $588\\div 1.12=525$."
    ]
  },
  "q:0083c0850d239bd9": {
    "options": [
      "100",
      "200",
      "900",
      "50"
    ],
    "explanations": [
      "The sample proportion is $\\frac{5}{50}=10$ percent, and $10$ percent of $1000$ students is $100$.",
      "$200$ is $1000\\div 5$, dividing the population by the number of walkers. The correct estimate scales the sample rate: $\\frac{5}{50}\\times 1000=100$.",
      "$900$ estimates the students who do NOT walk, $1000-100$. The question asks how many walk, which is $100$.",
      "$50$ treats the $5$ walkers as $5$ percent of the school. The $5$ walkers come from a sample of $50$, a rate of $10$ percent, so the estimate is $100$."
    ]
  },
  "q:86a86df352246c74": {
    "options": [
      "$3.0\\times 10^{5}$",
      "$1.8\\times 10^{7}$",
      "$1.08\\times 10^{9}$",
      "$1.08\\times 10^{12}$"
    ],
    "explanations": [
      "$3.0\\times 10^{5}$ is the SPEED in kilometers per second, $3.0\\times 10^8\\div 1000$. It is a rate, not a distance; multiplying by $3600$ seconds gives $1.08\\times 10^9$ km.",
      "$1.8\\times 10^{7}$ km is the distance for one MINUTE, $3.0\\times 10^8\\times 60\\div 1000$. An hour has $3600$ seconds, giving $1.08\\times 10^{9}$ km.",
      "In one hour, $3600$ seconds, light travels $3.0\\times 10^8\\times 3.6\\times 10^3=1.08\\times 10^{12}$ meters. Dividing by $1000$ gives $1.08\\times 10^9$ kilometers.",
      "$1.08\\times 10^{12}$ is the correct distance but in METERS. The question asks for kilometers, so divide by $1000$: $1.08\\times 10^{9}$."
    ]
  },
  "q:4b6fd3833dc338ee": {
    "options": [
      "78",
      "98",
      "80",
      "42"
    ],
    "explanations": [
      "78 would mean a discount of $62$ dollars, about $44$ percent off. A $30$ percent discount is $0.3\\times 140=42$ dollars, leaving $98$.",
      "The discount is $0.30\\times 140=42$ dollars, so the sale price is $140-42=98$ dollars. Equivalently, $0.70\\times 140=98$.",
      "80 would mean a discount of $60$ dollars, about $43$ percent off. Thirty percent of $140$ is only $42$, so the price is $98$.",
      "42 is the discount amount, $0.3\\times 140$, not the sale price. Subtracting it from the regular price gives $140-42=98$."
    ]
  },
  "q:f88538446cc24fd4": {
    "options": [
      "Positive linear",
      "No association",
      "Negative linear",
      "Exponential growth"
    ],
    "explanations": [
      "A positive association means $y$ rises as $x$ increases. Points that decrease from left to right show the opposite direction.",
      "A clear pattern of points falling from left to right is an association. \\\"No association\\\" would describe points scattered with no trend.",
      "Points that decrease from left to right show that $y$ tends to fall as $x$ increases, which is a negative association.",
      "Exponential growth rises from left to right, increasingly steeply. These points fall from left to right, the wrong direction."
    ]
  },
  "q:9a2b22c3851fdbc4": {
    "options": [
      "$\\approx 8.6$",
      "$\\approx 2.0$",
      "$\\approx 12.0$",
      "$\\approx 11.0$"
    ],
    "explanations": [
      "By the Pythagorean theorem, the hypotenuse satisfies $c^2=5^2+7^2=25+49=74$, so $c=\\sqrt{74}\\approx 8.6$. It is longer than either leg, as a hypotenuse must be.",
      "$2.0$ is the difference of the legs, $7-5$. The hypotenuse is the longest side, so it must exceed $7$: $\\sqrt{74}\\approx 8.6$.",
      "$12.0$ adds the legs, $5+7$. The hypotenuse comes from squaring and adding, then taking a square root: $\\sqrt{25+49}\\approx 8.6$.",
      "$11.0$ would require $c^2=121$, but $5^2+7^2=74$. Also, it is close to the sum of the legs, $12$, which a hypotenuse can never reach; the value is $\\sqrt{74}\\approx 8.6$."
    ]
  },
  "q:021131b370478026": {
    "options": [
      "$(-2, 3)$",
      "$(-1, 2)$",
      "$(3, -2)$",
      "$(2, -3)$"
    ],
    "explanations": [
      "Set $2x+7=-x+1$, so $3x=-6$ and $x=-2$. Then $y=-(-2)+1=3$, and the first line agrees: $2(-2)+7=3$.",
      "$(-1,2)$ lies on $y=-x+1$ but not on $y=2x+7$, which gives $5$ at $x=-1$. An intersection must satisfy both equations; solving gives $x=-2$.",
      "$(3,-2)$ swaps the coordinates of the solution $(-2,3)$. At $x=3$ the first line gives $13$, so this point is not on it.",
      "$(2,-3)$ flips the signs of both coordinates of $(-2,3)$. At $x=2$, the lines give $11$ and $-1$, neither of which is $-3$."
    ]
  },
  "q:ac96dd4c094adc28": {
    "options": [
      "Positive linear",
      "Negative linear",
      "No association",
      "Exponential growth"
    ],
    "explanations": [
      "Points rising from left to right in a roughly straight pattern show $y$ increasing at a steady rate as $x$ increases: a positive linear association.",
      "A negative association falls from left to right. These points rise, the opposite direction.",
      "The points follow a clear rising trend, so there is an association. \\\"No association\\\" would mean points scattered with no pattern.",
      "Exponential growth curves upward more and more steeply. These points form a roughly straight line, which is linear, not exponential."
    ]
  },
  "q:7adc224d11abd28e": {
    "options": [
      "$10\\pi$",
      "$100\\pi$",
      "$20\\pi$",
      "$12\\pi$"
    ],
    "explanations": [
      "Arc length is the arc’s fraction of the full circumference. A $180^\\circ$ arc is half the circle: $\\frac{180}{360}\\times 2\\pi(10)=10\\pi$.",
      "$100\\pi$ is the AREA of the whole circle, $\\pi r^2$. Arc length uses the circumference, $2\\pi r=20\\pi$, and half of that is $10\\pi$.",
      "$20\\pi$ is the full circumference, $2\\pi(10)$. A $180^\\circ$ arc is only half the circle, so it is $10\\pi$.",
      "$12\\pi$ would require a radius of $12$ or an arc of $216^\\circ$; neither fits. Half of the circumference $20\\pi$ is $10\\pi$."
    ]
  },
  "q:3031d187091e1cb6": {
    "options": [
      "18",
      "30",
      "40",
      "72"
    ],
    "explanations": [
      "18 is the leg $AC$ alone, $0.6\\times 30$. The perimeter adds all three sides: $24+30+18=72$.",
      "30 is the hypotenuse $AB$ alone, from $\\sin A=0.8=\\frac{24}{AB}$. The perimeter also includes the legs $24$ and $18$, for $72$.",
      "40 is $24\\div 0.6$, using cosine with $BC$, the side OPPOSITE $A$. Cosine pairs with the adjacent side; with $\\sin A=0.8$, $AB=30$ and the perimeter is $72$.",
      "$\\cos A=0.6$ gives $\\sin A=0.8=\\frac{BC}{AB}$, so $AB=\\frac{24}{0.8}=30$. Then $AC=0.6(30)=18$, and the perimeter is $24+30+18=72$."
    ]
  }
}

export default ENTRIES
