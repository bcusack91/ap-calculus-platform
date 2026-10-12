import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:1aac19ca248101bc": {
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$1$"
    ],
    "explanations": [
      "Write both sides as powers of $2$: $2^{x^{2}+4}=2^{5x}$, so $x^{2}-5x+4=0$, which factors as $(x-1)(x-4)=0$. The solutions are $1$ and $4$, and their positive difference is $4-1=3$.",
      "$4$ is the larger of the two solutions, $x=4$, from $(x-1)(x-4)=0$. The question asks for the positive difference between the solutions, which is $4-1=3$.",
      "$5$ is the sum of the solutions, $1+4$, which can also be read off the $-5x$ term of $x^{2}-5x+4=0$. The question asks for their difference, $4-1=3$.",
      "$1$ is the smaller solution, $x=1$, from the factor $x-1$. It is only one of the two values; the positive difference between $1$ and $4$ is $3$."
    ]
  },
  "q:c55eac2cca880f67": {
    "options": [
      "10.5",
      "20.9",
      "41.9",
      "83.8"
    ],
    "explanations": [
      "At depth $5$ ft the surface radius scales with depth: $r=\\frac{4}{10}(5)=2$. The water's volume is $\\frac{1}{3}\\pi(2)^{2}(5)=\\frac{20\\pi}{3}\\approx 20.9$ cubic feet, and at $2$ cubic feet per minute that takes about $10.5$ minutes.",
      "20.9 is the volume of water in cubic feet, $\\frac{20\\pi}{3}$, not the time. Dividing that volume by the fill rate of $2$ cubic feet per minute gives about $10.5$ minutes.",
      "41.9 keeps the radius at $4$ ft at a depth of $5$ ft, using $\\frac{1}{3}\\pi(4)^{2}(5)\\approx 83.8$ cubic feet and then halving. In a cone the water's radius shrinks with depth, so it is $2$ ft, giving about $10.5$ minutes.",
      "83.8 is the time to fill the whole cone, $\\frac{1}{3}\\pi(4)^{2}(10)\\approx 167.6$ cubic feet divided by $2$. The water only needs to reach $5$ ft, where the radius is $2$ ft, so it takes about $10.5$ minutes."
    ]
  },
  "q:98590513b563a78c": {
    "options": [
      "$-\\frac{1}{6}$",
      "$\\frac{17}{6}$",
      "$3$",
      "$-3$"
    ],
    "explanations": [
      "$-\\frac{1}{6}$ is only the $y$-coordinate of the hole, found by putting $x=3$ into the simplified function $\\frac{x-4}{x+3}$. The question asks for the sum of both coordinates, $3+\\left(-\\frac{1}{6}\\right)=\\frac{17}{6}$.",
      "Factoring gives $\\frac{(x-3)(x-4)}{(x-3)(x+3)}$, so $x-3$ cancels and the hole is at $x=3$. The simplified function $\\frac{x-4}{x+3}$ gives $y=-\\frac{1}{6}$ there, and $3-\\frac{1}{6}=\\frac{17}{6}$.",
      "$3$ is only the $x$-coordinate of the hole, from the cancelled factor $x-3$. The hole also has $y$-coordinate $-\\frac{1}{6}$, so the sum of the coordinates is $\\frac{17}{6}$.",
      "$-3$ is where the factor $x+3$ stays in the denominator after cancelling, so it is the vertical asymptote, not the hole. The hole comes from the cancelled factor $x-3$, at $\\left(3,-\\frac{1}{6}\\right)$, with coordinate sum $\\frac{17}{6}$."
    ]
  },
  "q:1bfa7d53614ca9fe": {
    "options": [
      "8.0",
      "34.8",
      "50.3",
      "18.8"
    ],
    "explanations": [
      "8.0 is the radius, from $\\frac{3}{8}\\pi r^{2}=24\\pi$, giving $r^{2}=64$. That is an intermediate step; the arc is $\\frac{3}{8}$ of the circumference, $\\frac{3}{8}(16\\pi)=6\\pi\\approx 18.8$ cm.",
      "34.8 is the sector's full perimeter: the arc $6\\pi\\approx 18.8$ plus two radii of $8$. The question asks only for the arc length, about $18.8$ cm.",
      "50.3 is the full circumference, $2\\pi(8)=16\\pi$. The $135$-degree sector takes only $\\frac{135}{360}=\\frac{3}{8}$ of it, so the arc is $6\\pi\\approx 18.8$ cm.",
      "The sector is $\\frac{135}{360}=\\frac{3}{8}$ of the circle, so $\\frac{3}{8}\\pi r^{2}=24\\pi$ gives $r=8$. The arc is $\\frac{3}{8}$ of the circumference: $\\frac{3}{8}(2\\pi\\cdot 8)=6\\pi\\approx 18.8$ cm."
    ]
  },
  "q:2e57d20829606702": {
    "options": [
      "50",
      "28",
      "35",
      "40"
    ],
    "explanations": [
      "$50$ is the complement of $40°$, as if the angles had to add to $90°$. Corresponding angles formed by a transversal crossing parallel lines are equal, so the angle is $40°$.",
      "$28$ has no geometric connection to a $40°$ angle. When a transversal crosses parallel lines, corresponding angles are congruent, so the corresponding angle is also $40°$.",
      "$35$ does not come from any angle relationship with $40°$. Corresponding angles along a transversal through parallel lines are equal, so the angle measures $40°$.",
      "When a transversal crosses two parallel lines, corresponding angles are congruent. The corresponding angle on the other line therefore also measures $40°$."
    ]
  },
  "q:7f97a714cdd6407b": {
    "options": [
      "$\\frac{x}{15}$",
      "$\\frac{5}{x}$",
      "$\\frac{x}{5}$",
      "$\\frac{3x}{5}$"
    ],
    "explanations": [
      "$\\frac{x}{15}$ cancels one factor of $x$ but leaves the $15$ untouched, forgetting that the $3$ in the numerator also divides into $15$. Cancelling $3x$ from both parts gives $\\frac{x}{5}$.",
      "$\\frac{5}{x}$ is the reciprocal of the correct result, as if the numerator and denominator were swapped. Since $3x^{2}$ has the extra factor of $x$, the $x$ stays on top: $\\frac{x}{5}$.",
      "The numerator is $3x\\cdot x$ and the denominator is $3x\\cdot 5$. Cancelling the common factor $3x$ leaves $\\frac{x}{5}$.",
      "$\\frac{3x}{5}$ divides $15$ by $3$ but leaves the $3$ in the numerator, so the $3$ is used twice. Cancelling $3x$ from both parts gives $\\frac{x}{5}$."
    ]
  },
  "q:f96748f717a68355": {
    "options": [
      "Treatment X has the highest improvement rate, and it exceeds the placebo rate by about 19 percentage points.",
      "Treatment Y has the highest improvement rate, because more participants improved with Y than with X.",
      "Treatment X has the highest improvement rate, and it exceeds the placebo rate by about 4.6 percentage points.",
      "Treatment Y has the highest improvement rate, and it exceeds the placebo rate by about 16 percentage points."
    ],
    "explanations": [
      "Each rate uses its own group's total: Treatment X is $126/250=50.4$ percent, Treatment Y is $144/300=48.0$ percent and placebo is $88/280\\approx 31.4$ percent. X is highest, and $50.4-31.4=19.0$ percentage points.",
      "This compares raw counts: $144$ improved with Treatment Y versus $126$ with X, but Y had $300$ participants and X only $250$. As rates, Y is $48.0$ percent and X is $50.4$ percent, so X is highest.",
      "This names the right treatment but finds the gap with the grand total $830$ as every denominator: $126/830\\approx 15.2$ percent and $88/830\\approx 10.6$ percent. Using each group's own total, the gap is $50.4-31.4=19$ points.",
      "This divides by the Improved column total $358$, giving $144/358\\approx 40.2$ percent and $88/358\\approx 24.6$ percent. With each group's own total, Treatment X ($50.4$ percent) beats Treatment Y ($48.0$ percent)."
    ]
  },
  "q:23c8d1230f1cfac8": {
    "options": [
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "explanations": [
      "$\\frac{\\sqrt{3}}{3}$ is $\\tan 30°$, the ratio of the opposite leg to the adjacent leg. In a $30$-$60$-$90$ triangle, sine is opposite over hypotenuse, so $\\sin 30°=\\frac{1}{2}$.",
      "In a $30$-$60$-$90$ triangle the side opposite $30°$ is half the hypotenuse, so $\\sin 30°=\\sin\\frac{\\pi}{6}=\\frac{1}{2}$.",
      "$\\frac{\\sqrt{2}}{2}$ is the sine of $45°$, from the isosceles right triangle. For $30°$, the opposite side is half the hypotenuse, so the sine is $\\frac{1}{2}$.",
      "$\\frac{\\sqrt{3}}{2}$ is $\\cos 30°$ (or $\\sin 60°$), the adjacent leg over the hypotenuse. The side opposite $30°$ is the short leg, half the hypotenuse, so $\\sin 30°=\\frac{1}{2}$."
    ]
  },
  "q:cfb4fb4cf6db729f": {
    "options": [
      "$45$",
      "$75$",
      "$111$",
      "$120$"
    ],
    "explanations": [
      "$45$ is the bonus for the late trip alone: $5$ full hours off gives $120-5(15)=45$. The question asks for the total over both trips, so the early trip's $\\$75$ must be added, giving $\\$120$.",
      "$75$ is the bonus for the early trip alone: $3$ full hours off gives $120-3(15)=75$. Adding the late trip's $\\$45$ gives the requested total of $\\$120$.",
      "$111$ uses the exact deviations instead of full hours: $120-3.4(15)=69$ and $120-5.2(15)=42$. Only full hours count, so the deductions are for $3$ and $5$ hours, giving $75+45=120$.",
      "Only full hours count, in either direction. Early by $3.4$ hours is $3$ full hours: $120-45=75$. Late by $5.2$ hours is $5$ full hours: $120-75=45$. The total is $75+45=\\$120$."
    ]
  },
  "q:30aa3b506645ec85": {
    "options": [
      "Yes — the evening group is larger than the morning group",
      "Yes — more evening customers than morning ones ordered coffee",
      "No — both groups ordered coffee at the same 50% rate",
      "No — a table of counts cannot reveal an association"
    ],
    "explanations": [
      "The size of a group does not show an association; groups of different sizes are compared by rate. Both groups ordered coffee at $50$ percent ($30/60$ and $45/90$), so there is no association.",
      "More evening customers did order coffee, $45$ versus $30$, but there were also more evening customers. As rates, $45/90$ and $30/60$ are both $50$ percent, so the data show no association.",
      "Comparing rates rather than counts: morning is $30/60=50$ percent and evening is $45/90=50$ percent. Equal rates mean ordering coffee does not depend on time of day in these data.",
      "This reaches the right conclusion for a wrong reason. A table of counts can reveal an association once counts are turned into rates; here the rates are both $50$ percent, which is why there is none."
    ]
  },
  "q:15a311294403cdf6": {
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "explanations": [
      "The unit price is the total cost divided by the number of items: $\\$44\\div 11=\\$4$ per notebook.",
      "$3$ would make $11$ notebooks cost $11\\times 3=\\$33$, not $\\$44$. Dividing the total cost by the number of notebooks gives $\\$44\\div 11=\\$4$.",
      "$1$ would make $11$ notebooks cost only $\\$11$. The unit price is the total divided by the count: $\\$44\\div 11=\\$4$ per notebook.",
      "$2$ would make $11$ notebooks cost $\\$22$, half the stated total. Dividing $\\$44$ by $11$ gives $\\$4$ per notebook."
    ]
  },
  "q:9b5df9bf35dfede2": {
    "options": [
      "1",
      "-3",
      "7",
      "0"
    ],
    "explanations": [
      "Substitute $x=-1$ into $y=x^{2}$: $y=(-1)^{2}=1$. The line agrees, $-3(-1)-2=1$, which confirms the intersection point is $(-1,1)$.",
      "$-3$ is the slope of the line $y=-3x-2$, not a $y$-value. Substituting $x=-1$ into either equation gives $y=1$.",
      "$7$ does not satisfy either equation at $x=-1$: the parabola gives $(-1)^{2}=1$ and the line gives $3-2=1$. The $y$-value at the intersection is $1$.",
      "$0$ would mean the point lies on the $x$-axis, but $(-1)^{2}=1$, not $0$. Both equations give $y=1$ at $x=-1$."
    ]
  },
  "q:6c19904641868331": {
    "options": [
      "408",
      "500",
      "552",
      "613"
    ],
    "explanations": [
      "$15$ percent of $408$ is about $61.2$, not $75$, so $408$ is too small to be the whole. Solving $0.15x=75$ gives $x=75\\div 0.15=500$.",
      "Write the statement as $75=0.15x$. Dividing both sides by $0.15$ gives $x=500$, and indeed $0.15(500)=75$.",
      "$15$ percent of $552$ is $82.8$, which is more than $75$, so $552$ is too large to be the whole. Solving $0.15x=75$ gives $x=500$.",
      "$15$ percent of $613$ is about $92$, well above $75$, so $613$ is too large to be the whole. Dividing $75$ by $0.15$ gives $500$."
    ]
  },
  "q:2723f6fb6c76807b": {
    "options": [
      "Use a volunteer sample",
      "Increase the sample size",
      "Survey a different city",
      "Ask more questions"
    ],
    "explanations": [
      "A volunteer sample is self-selected, which adds bias and makes the results less trustworthy. It does nothing to shrink random sampling error; a larger random sample does.",
      "The margin of error shrinks as a random sample grows, because larger samples vary less from the true value. Increasing the sample size is the change that reduces it.",
      "Surveying a different city changes the population being studied rather than making the estimate more precise. The margin of error depends on sample size, so a larger sample is needed.",
      "Asking more questions adds more estimates but does not make any single estimate more precise. Precision comes from the number of people sampled, so increase the sample size."
    ]
  },
  "q:1739b67e8ee9b763": {
    "options": [
      "$9$",
      "$19$",
      "$20$",
      "$17$"
    ],
    "explanations": [
      "$9$ is the number of extra hours at the $35$-dollar rate, $\\frac{340}{35}\\approx 9.71$ rounded down. The student also gets the first $10$ hours, so the total is $19$ hours.",
      "The first $10$ hours cost $450$ dollars, leaving $340$. That buys $\\frac{340}{35}\\approx 9.71$, so $9$ whole extra hours. The total is $10+9=19$ hours, costing $765$ dollars.",
      "$20$ rounds $9.71$ up to $10$ extra hours, but the twentieth hour would bring the cost to $800$ dollars, over the $790$-dollar budget. The greatest affordable total is $19$ hours.",
      "$17$ charges every hour at $45$ dollars, $\\frac{790}{45}\\approx 17.6$. Hours after the tenth cost only $35$ dollars, so the budget stretches to $19$ hours."
    ]
  },
  "q:15e790c72d6bbe04": {
    "options": [
      "4",
      "10",
      "2",
      "5"
    ],
    "explanations": [
      "Squaring both sides removes the radical: $x-3=1$, so $x=4$. Checking in the original equation works: $\\sqrt{4-3}=\\sqrt{1}=1$.",
      "$10$ fails the check: $\\sqrt{10-3}=\\sqrt{7}$, not $1$. Squaring both sides of the equation gives $x-3=1$, so the solution is $x=4$.",
      "$2$ subtracts instead of adding, $3-1$. It also fails the check: $\\sqrt{2-3}=\\sqrt{-1}$ is not a real number. Solving $x-3=1$ gives $x=4$.",
      "$5$ fails the check: $\\sqrt{5-3}=\\sqrt{2}$, not $1$. Squaring both sides of the equation gives $x-3=1$, so the solution is $x=4$."
    ]
  },
  "q:af57d587915e6d10": {
    "options": [
      "17",
      "15",
      "21",
      "22"
    ],
    "explanations": [
      "$17$ is the hypotenuse, which the question already gives. A leg must be shorter than the hypotenuse: $\\sqrt{17^{2}-8^{2}}=\\sqrt{225}=15$.",
      "By the Pythagorean theorem, a leg squared equals the hypotenuse squared minus the other leg squared, so the missing leg is $\\sqrt{17^{2}-8^{2}}=\\sqrt{289-64}=\\sqrt{225}=15$.",
      "$21$ is longer than the hypotenuse $17$, which is impossible for a leg of a right triangle. The other leg is $\\sqrt{17^{2}-8^{2}}=15$.",
      "$22$ is longer than the hypotenuse $17$, which no leg can be. Subtracting squares gives $\\sqrt{289-64}=\\sqrt{225}=15$."
    ]
  },
  "q:64fa00a043f829ff": {
    "options": [
      "Infinitely many points",
      "Two points",
      "One point",
      "No points"
    ],
    "explanations": [
      "Infinitely many points would require the two graphs to coincide, but a parabola and a horizontal line are different curves. Setting $x^{2}-5=-2$ gives $x^{2}=3$, which has two solutions.",
      "Set $x^{2}-5=-2$, so $x^{2}=3$ and $x=\\pm\\sqrt{3}$. Two real solutions mean the graphs meet at two points.",
      "One point would happen only if the line touched the vertex at $y=-5$. The line $y=-2$ lies above the vertex, and $x^{2}=3$ gives two solutions, $\\pm\\sqrt{3}$.",
      "No points would happen only if the line were below the vertex at $y=-5$. Since $-2>-5$, $x^{2}=3$ has two real solutions, so there are two points."
    ]
  },
  "q:d26a4cbb65c5b7cd": {
    "options": [
      "43",
      "37",
      "34",
      "79"
    ],
    "explanations": [
      "A $79$ average over $4$ tests needs a total of $79\\times 4=316$. The current total is $95+90+88=273$, so the next test needs $316-273=43$.",
      "$37$ falls short: $273+37=310$, and $310\\div 4=77.5$. The fourth score must bring the total to $316$, so it must be $43$.",
      "$34$ falls short: $273+34=307$, and $307\\div 4=76.75$. Reaching a $79$ average needs a total of $316$, so the score must be $43$.",
      "$79$ is the target average, not the needed score. Because the current scores are well above $79$, the fourth test can be much lower: $316-273=43$."
    ]
  },
  "q:1221c195d283665d": {
    "options": [
      "$\\approx 5.0$",
      "$\\approx 4.1$",
      "$\\approx 1.1$",
      "$\\approx 6.1$"
    ],
    "explanations": [
      "$5.0$ adds the horizontal and vertical gaps, $4+1$, instead of combining them with the Pythagorean theorem. The distance is $\\sqrt{4^{2}+1^{2}}=\\sqrt{17}\\approx 4.1$.",
      "The coordinate differences are $-1-3=-4$ and $4-5=-1$. The distance formula squares and adds them: $d=\\sqrt{(-4)^{2}+(-1)^{2}}=\\sqrt{17}\\approx 4.1$.",
      "$1.1$ is too short; the horizontal gap alone is $4$, so the distance must be at least $4$. The distance is $\\sqrt{16+1}=\\sqrt{17}\\approx 4.1$.",
      "$6.1$ is too long; it exceeds the sum of the two gaps, $4+1=5$, which a straight-line distance never can. The distance is $\\sqrt{17}\\approx 4.1$."
    ]
  },
  "q:c12eea5a549dab38": {
    "options": [
      "Brand B, since it costs less per ounce",
      "Neither, because the unit prices are equal",
      "Brand A, since it costs less per ounce",
      "Brand B, because its package is bigger"
    ],
    "explanations": [
      "Brand B costs $\\$4\\div 25=\\$0.16$ per ounce, which is more than Brand A's $\\$2\\div 13\\approx\\$0.154$. The claim that B costs less per ounce gets the comparison backward.",
      "The unit prices are not equal: Brand A is $\\$2\\div 13\\approx\\$0.154$ per ounce and Brand B is $\\$4\\div 25=\\$0.16$ per ounce. Brand A is slightly cheaper per ounce.",
      "Compare unit prices: Brand A costs $\\$2\\div 13\\approx\\$0.154$ per ounce and Brand B costs $\\$4\\div 25=\\$0.16$ per ounce. Brand A costs less per ounce, so it is the better deal.",
      "A bigger package is not automatically a better deal; the comparison is price per ounce. Brand B costs $\\$0.16$ per ounce, more than Brand A's $\\$0.154$, so Brand A is better."
    ]
  },
  "q:40512f7e2ba5d256": {
    "options": [
      "16",
      "20",
      "15",
      "6"
    ],
    "explanations": [
      "Because $4\\ge 0$, the second piece applies: $f(4)=4^{2}=16$. The first piece, $2x+1$, is only for negative inputs.",
      "$20$ is not the value of either piece at $x=4$: the second piece gives $4^{2}=16$, and the first gives $9$. Since $4\\ge 0$, the correct piece gives $16$.",
      "$15$ is one less than $4^{2}$, a value neither piece produces. Since $4\\ge 0$, use $x^{2}$: $f(4)=16$.",
      "$6$ is not what either piece gives at $x=4$; the first piece would give $2(4)+1=9$ and the second gives $16$. Because $4\\ge 0$, the answer is $x^{2}=16$."
    ]
  },
  "q:5326006ba720b410": {
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "explanations": [
      "The function is zero when any factor is zero: $x=3$, $x=-4$ or $x=4$. These are three different values, so the graph has three $x$-intercepts.",
      "$1$ counts only one root, perhaps just $x=3$. Each of the three factors gives its own zero, $3$, $-4$ and $4$, so there are three $x$-intercepts.",
      "$2$ treats $x+4$ and $x-4$ as giving the same intercept because of the matching $4$. They give $x=-4$ and $x=4$, two different points, plus $x=3$, for three intercepts.",
      "$0$ would mean the graph never touches the $x$-axis, but each linear factor makes $f$ zero somewhere. The zeros $3$, $-4$ and $4$ give three $x$-intercepts."
    ]
  },
  "q:5f399911f2ef6384": {
    "options": [
      "711",
      "683",
      "713",
      "503"
    ],
    "explanations": [
      "$711$ is close to the answer but too low: $600(1.09)^{2}=600(1.1881)\\approx 712.86$, which rounds to $713$, not $711$. Keep the full growth factor $1.1881$ until the final step.",
      "$683$ is too low; it amounts to roughly $13.8$ percent total growth. Compounding $9$ percent for two years multiplies by $1.09^{2}=1.1881$, so the population is about $713$.",
      "Growth of $9$ percent per year multiplies by $1.09$ each year: $600(1.09)^{2}=600(1.1881)\\approx 712.86$, which rounds to $713$.",
      "$503$ is less than the starting $600$, so it describes a decrease, not growth. A population growing $9$ percent per year becomes $600(1.09)^{2}\\approx 713$."
    ]
  },
  "q:490c685ebb74414f": {
    "options": [
      "4",
      "3",
      "5",
      "1"
    ],
    "explanations": [
      "$4$ does not keep the product constant: $20\\times 4=80$, not $60$. In inverse variation $xy$ stays at $10\\times 6=60$, so $y=60\\div 20=3$.",
      "Inverse variation means $xy=k$. Here $k=10\\times 6=60$, so when $x=20$, $y=\\frac{60}{20}=3$. Doubling $x$ halves $y$.",
      "$5$ gives $20\\times 5=100$, not the constant $60$. With inverse variation, doubling $x$ from $10$ to $20$ halves $y$ from $6$ to $3$.",
      "$1$ gives $20\\times 1=20$, far below the constant product $60$. Inverse variation requires $xy=60$, so $y=3$ when $x=20$."
    ]
  },
  "q:b753d4213b8de141": {
    "options": [
      "$\\frac{13}{12}$",
      "$\\frac{12}{5}$",
      "$\\frac{12}{13}$",
      "$\\frac{5}{13}$"
    ],
    "explanations": [
      "$\\frac{13}{12}$ is hypotenuse over opposite, which is $\\csc\\theta$, not tangent. Tangent is opposite over adjacent: $\\frac{12}{5}$.",
      "Tangent is opposite over adjacent. The side opposite $\\theta$ is $12$ and the adjacent leg is $5$, so $\\tan\\theta=\\frac{12}{5}$.",
      "$\\frac{12}{13}$ is opposite over hypotenuse, which is $\\sin\\theta$. Tangent divides the opposite side by the adjacent leg: $\\frac{12}{5}$.",
      "$\\frac{5}{13}$ is adjacent over hypotenuse, which is $\\cos\\theta$, not tangent. Tangent divides the opposite side $12$ by the adjacent leg $5$, giving $\\frac{12}{5}$."
    ]
  },
  "q:6af1985785e82eec": {
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$"
    ],
    "explanations": [
      "$\\frac{2}{3}$ flips the ratio: it solves $3x=2$ instead of $2x=3$. Writing $9^{x}=3^{2x}$ and $27=3^{3}$ gives $2x=3$, so $x=\\frac{3}{2}$.",
      "Write both sides as powers of $3$: $9^{x}=3^{2x}$ and $27=3^{3}$. Setting the exponents equal gives $2x=3$, so $x=\\frac{3}{2}$.",
      "$2$ fails the check: $9^{2}=81$, not $27$. Rewriting both sides with base $3$ gives $3^{2x}=3^{3}$, so $2x=3$ and $x=\\frac{3}{2}$.",
      "$3$ is the exponent on $27=3^{3}$, not the value of $x$; $9^{3}=729$. Since $9^{x}=3^{2x}$, the equation $2x=3$ gives $x=\\frac{3}{2}$."
    ]
  },
  "q:e765f5734a1b23be": {
    "options": [
      "$\\frac{6}{5}$",
      "$\\frac{1}{30}$",
      "$\\frac{5}{6}$",
      "$\\frac{5}{30}$"
    ],
    "explanations": [
      "$\\frac{6}{5}$ is the reciprocal of the answer, from dividing the bottom fraction by the top one. Dividing by $\\frac{1}{5}$ means multiplying by $5$: $\\frac{1}{6}\\cdot 5=\\frac{5}{6}$.",
      "$\\frac{1}{30}$ multiplies the two fractions, $\\frac{1}{6}\\cdot\\frac{1}{5}$, instead of dividing. Dividing by $\\frac{1}{5}$ means multiplying by its reciprocal $5$, giving $\\frac{5}{6}$.",
      "The complex fraction means $\\frac{1}{6}$ divided by $\\frac{1}{5}$, and dividing by a fraction means multiplying by its reciprocal: $\\frac{1}{6}\\cdot\\frac{5}{1}=\\frac{5}{6}$.",
      "$\\frac{5}{30}$ multiplies both the numerator and the denominator by $5$, which leaves the value at $\\frac{1}{6}$. Only the numerator should be multiplied by $5$: $\\frac{5}{6}$."
    ]
  },
  "q:06ec3b3e99892451": {
    "options": [
      "5",
      "10",
      "1",
      "11"
    ],
    "explanations": [
      "Factor as a difference of squares: $(x+5)(x-5)=0$, so $x=-5$ or $x=5$. The positive solution is $5$.",
      "$10$ doubles the square root; $10^{2}-25=75$, not $0$. Since $x^{2}=25$, the positive solution is $x=5$.",
      "$1$ gives $1-25=-24$, not $0$. Solving $x^{2}=25$ gives $x=\\pm 5$, and the positive solution is $5$.",
      "$11$ gives $121-25=96$, not $0$. Solving $x^{2}=25$ gives $x=\\pm 5$, so the positive solution is $5$."
    ]
  },
  "q:1a14d37063618bf4": {
    "options": [
      "$(x - 8)(x - 5)$",
      "$(x + 8)(x + 5)$",
      "$(x - 8)(x + 5)$",
      "$(x + 8)(x - 5)$"
    ],
    "explanations": [
      "The factors need a product of $+40$ and a sum of $-13$, so both are negative: $-8$ and $-5$. That gives $(x-8)(x-5)$.",
      "$(x+8)(x+5)$ expands to $x^{2}+13x+40$, with the wrong sign on the middle term. The middle term is $-13x$, so both factors need minus signs: $(x-8)(x-5)$.",
      "$(x-8)(x+5)$ expands to $x^{2}-3x-40$, with a negative constant. For $+40$ both signs must match, and for $-13x$ both must be negative: $(x-8)(x-5)$.",
      "$(x+8)(x-5)$ expands to $x^{2}+3x-40$, wrong in both the middle term and the constant. The correct factorization is $(x-8)(x-5)$, which gives $-13x$ and $+40$."
    ]
  },
  "q:311a5434dc279fc5": {
    "options": [
      "Section 1, 80.0 percent",
      "Section 1, 72.0 percent",
      "Section 3, 70.0 percent",
      "Section 3, 38.2 percent"
    ],
    "explanations": [
      "Remove the absent students first. Section 1 has $135$ present, so $108/135=80.0$ percent; Section 2 is $96/144\\approx 66.7$ percent; Section 3 is $126/168=75.0$ percent. Section 1 is highest at $80.0$ percent.",
      "This names the right section but divides by the full total $150$, $108/150=72.0$ percent, which includes the $15$ absent students the question excludes. Among the $135$ present, the rate is $80.0$ percent.",
      "This divides Section 3's passes by its full total, $126/180=70.0$ percent, including the absent students. Even so, Section 3's correct rate, $126/168=75.0$ percent, is below Section 1's $80.0$ percent.",
      "$38.2$ percent is $126/330$, Section 3's share of all passing students. The question asks for a pass rate within each section among those present, and Section 1 is highest at $80.0$ percent."
    ]
  },
  "q:b43c571f49ec904f": {
    "options": [
      "$8x^{10}$",
      "$x^{10}$",
      "$x^{7}$",
      "$x^{3}$"
    ],
    "explanations": [
      "$8x^{10}$ multiplies the exponents and also invents a coefficient of $8$. Multiplying powers with the same base adds the exponents and keeps coefficient $1$: $x^{5+2}=x^{7}$.",
      "$x^{10}$ multiplies the exponents, $5\\times 2$, which is the rule for a power raised to a power. For a product of powers with the same base, add them: $x^{7}$.",
      "When powers with the same base are multiplied, the exponents are added and the base stays the same: $x^{5}\\cdot x^{2}=x^{5+2}=x^{7}$.",
      "$x^{3}$ subtracts the exponents, $5-2$, which is the rule for dividing powers. Multiplying powers with the same base adds them: $x^{7}$."
    ]
  },
  "q:3cd59c51721cebba": {
    "options": [
      "19",
      "5",
      "17",
      "11"
    ],
    "explanations": [
      "$19$ is the fifth value of seven, one place past the middle. With seven values in order, the median is the fourth, which is $17$.",
      "$5$ is not even in the data set and is below the minimum of $11$, so it cannot be the median. The middle (fourth) of the seven ordered values is $17$.",
      "The list is already in order and has seven values, so the median is the fourth value: $11, 13, 17, \\mathbf{17}, 19, 20, 25$. The median is $17$.",
      "$11$ is the smallest value, the minimum, not the middle. The median of these seven ordered values is the fourth one, $17$."
    ]
  },
  "q:332384113a3eb863": {
    "options": [
      "9",
      "4",
      "1",
      "5"
    ],
    "explanations": [
      "The ratio $2:3$ splits $15$ into $2+3=5$ equal parts of $15\\div 5=3$ each. The larger quantity is $3\\times 3=9$ (and the smaller is $6$).",
      "$4$ is not one of the quantities; the two parts are $6$ and $9$. With $5$ total parts of $3$ each, the larger quantity is $3\\times 3=9$.",
      "$1$ cannot be a quantity here: the parts are $2\\times 3=6$ and $3\\times 3=9$. The larger quantity is $9$.",
      "$5$ is the total number of ratio parts, $2+3$, not a quantity. Each part is $15\\div 5=3$, so the larger quantity is $3\\times 3=9$."
    ]
  },
  "q:543fbf6276523065": {
    "options": [
      "$\\frac{15}{8}$",
      "$-\\frac{7}{8}$",
      "$\\frac{7}{8}$",
      "$\\frac{8}{7}$"
    ],
    "explanations": [
      "$\\frac{15}{8}$ has the right run, $5-(-3)=8$, but the wrong rise. The rise is $2-(-5)=7$, so the slope is $\\frac{7}{8}$.",
      "$-\\frac{7}{8}$ has a sign error. Going from $(-3,-5)$ to $(5,2)$, both $y$ and $x$ increase, so the slope is positive: $\\frac{7}{8}$.",
      "Slope is the change in $y$ over the change in $x$. From $(-3,-5)$ to $(5,2)$ the rise is $2-(-5)=7$ and the run is $5-(-3)=8$, so the slope is $\\frac{7}{8}$.",
      "$\\frac{8}{7}$ inverts the slope, dividing the change in $x$ by the change in $y$. Slope is the change in $y$ over the change in $x$: $\\frac{7}{8}$."
    ]
  },
  "q:be9a1d209ea18d66": {
    "options": [
      "91",
      "78",
      "84",
      "87"
    ],
    "explanations": [
      "A mean of $81$ over $5$ tests needs a total of $81\\times 5=405$. Subtracting the current sum gives $405-314=91$.",
      "$78$ is roughly the current mean, $314\\div 4=78.5$. Scoring that would keep the average near $78.5$; reaching $81$ needs a total of $405$, so the fifth score must be $91$.",
      "$84$ is too low: $314+84=398$, and $398\\div 5=79.6$. The five scores must total $405$, so the fifth score must be $91$.",
      "$87$ is too low: $314+87=401$, and $401\\div 5=80.2$. Reaching a mean of $81$ needs a total of $405$, so the fifth score is $91$."
    ]
  },
  "q:b046307481eeed71": {
    "options": [
      "$(-3, -1)$",
      "$(3, 1)$",
      "$(0, 4)$",
      "$(-3, 1)$"
    ],
    "explanations": [
      "$(-3,-1)$ gets the vertical shift backward. The $+1$ outside the absolute value moves the graph up $1$, so the vertex is $(-3,1)$.",
      "$(3,1)$ gets the horizontal shift backward. $|x+3|$ is zero at $x=-3$, so the graph shifts left $3$ and the vertex is $(-3,1)$.",
      "$(0,4)$ is the $y$-intercept, $f(0)=|3|+1=4$, not the vertex. The vertex is where $x+3=0$, at $(-3,1)$.",
      "The vertex is where the expression inside the absolute value is zero, $x=-3$, and there $f(-3)=0+1=1$. The vertex is $(-3,1)$."
    ]
  },
  "q:173eae42c1898bf9": {
    "options": [
      "$x^2 - y^2 = 49$",
      "$x^2 + y^2 = 7$",
      "$(x - 7)^2 + y^2 = 49$",
      "$x^2 + y^2 = 49$"
    ],
    "explanations": [
      "$x^{2}-y^{2}=49$ has a minus sign, which makes a hyperbola, not a circle. A circle centered at the origin is $x^{2}+y^{2}=r^{2}=49$.",
      "$x^{2}+y^{2}=7$ uses the radius on the right side instead of its square, which gives radius $\\sqrt{7}$. With radius $7$, the right side is $7^{2}=49$.",
      "$(x-7)^{2}+y^{2}=49$ is centered at $(7,0)$, not the origin, because $7$ was used as a shift. Centered at the origin, the equation is $x^{2}+y^{2}=49$.",
      "A circle with center $(h,k)$ and radius $r$ is $(x-h)^{2}+(y-k)^{2}=r^{2}$. With center $(0,0)$ and $r=7$: $x^{2}+y^{2}=49$."
    ]
  },
  "q:1438dc540f3213f0": {
    "options": [
      "$-6$",
      "$-3$",
      "$2$",
      "$6$"
    ],
    "explanations": [
      "$-6$ is $f(1)-2$, the value after the translation with the reflection left out. Reflecting across the $x$-axis negates everything: $g(4)=-(f(1)-2)=6$.",
      "$-3$ translates left instead of right, using $f(4+3)=f(7)=5$ and then $-5+2$. A shift right by $3$ means $g(4)$ uses $f(4-3)=f(1)=-4$, giving $6$.",
      "$2$ negates only $f$ and keeps the $-2$, giving $-f(1)-2=4-2$. The reflection negates the whole translated expression: $g(x)=-f(x-3)+2$, so $g(4)=6$.",
      "Moving right $3$ and down $2$ gives $f(x-3)-2$; reflecting across the $x$-axis negates all of it, so $g(x)=-f(x-3)+2$. Then $g(4)=-f(1)+2=-(-4)+2=6$."
    ]
  },
  "q:829018737990c7c6": {
    "options": [
      "$(-4, 1)$",
      "$(0.5, 3.5)$",
      "$(1.5, 2.5)$",
      "$(5, 6)$"
    ],
    "explanations": [
      "$(-4,1)$ takes the $x$-coordinate of the first point and the $y$-coordinate of the second instead of averaging. The midpoint averages each pair: $(0.5,3.5)$.",
      "The midpoint averages the $x$-coordinates and the $y$-coordinates separately: $\\frac{-4+5}{2}=0.5$ and $\\frac{6+1}{2}=3.5$. The midpoint is $(0.5,3.5)$.",
      "$(1.5,2.5)$ does not average the coordinates; its $y$-value $2.5$ is half the difference $6-1$, not half the sum. The midpoint is $\\left(\\frac{-4+5}{2},\\frac{6+1}{2}\\right)=(0.5,3.5)$.",
      "$(5,6)$ just takes the larger $x$-value and the larger $y$-value from the two points. A midpoint averages each pair of coordinates instead: $\\left(\\frac{-4+5}{2},\\frac{6+1}{2}\\right)=(0.5,3.5)$."
    ]
  },
  "q:31c63ab5b5c22611": {
    "options": [
      "$(x - 5)(x - 6)$",
      "$(x + 5)(x + 6)$",
      "$(x + 5)(x - 6)$",
      "$(x - 5)(x + 6)$"
    ],
    "explanations": [
      "$(x-5)(x-6)$ expands to $x^{2}-11x+30$: the constant is positive and the middle term is wrong. The constant must be $-30$, so the factors need opposite signs: $(x-5)(x+6)$.",
      "$(x+5)(x+6)$ expands to $x^{2}+11x+30$, with a positive constant. A constant of $-30$ requires one positive and one negative factor, as in $(x-5)(x+6)$.",
      "$(x+5)(x-6)$ has the signs swapped: it expands to $x^{2}-x-30$, a middle term of $-x$ instead of $+x$. The larger number must be positive: $(x-5)(x+6)$.",
      "Look for two numbers whose product is $-30$ and whose sum is $1$: $-5$ and $6$. So the trinomial factors as $(x-5)(x+6)$, which expands back to $x^{2}+x-30$."
    ]
  },
  "q:58f88dfceee9090b": {
    "options": [
      "$0.05$",
      "$-0.05$",
      "$1.05$",
      "$0.95$"
    ],
    "explanations": [
      "$0.05$ is the rate of decrease, not the decay factor. Each period keeps $100-5=95$ percent of the quantity, so the factor is $1-0.05=0.95$.",
      "$-0.05$ is the rate written as a negative change, but a decay factor is what the quantity is multiplied by each period. Keeping $95$ percent means multiplying by $0.95$.",
      "$1.05$ is a growth factor, adding $5$ percent each period. A decrease subtracts the rate from $1$: $1-0.05=0.95$.",
      "A quantity that loses $5$ percent each period keeps $95$ percent of its value, so it is multiplied by $1-0.05=0.95$ each period."
    ]
  },
  "q:02cf5e13974ae9e1": {
    "options": [
      "44",
      "28",
      "24",
      "88"
    ],
    "explanations": [
      "$44$ is the average of the quartiles, $\\frac{32+56}{2}$, not their spread. The interquartile range is the difference: $56-32=24$.",
      "$28$ is not the gap between the quartiles; it would place $Q_3$ at $60$. The interquartile range is $Q_3-Q_1=56-32=24$.",
      "The interquartile range measures the spread of the middle half of the data, the distance between the third and first quartiles: $Q_3-Q_1=56-32=24$.",
      "$88$ adds the quartiles, $32+56$, instead of subtracting. The interquartile range is a difference: $56-32=24$."
    ]
  },
  "q:bc452d093602bc09": {
    "options": [
      "$3\\sqrt{2}$",
      "$\\sqrt{6}$",
      "$6$",
      "$2\\sqrt{3}$"
    ],
    "explanations": [
      "Pull out the largest perfect-square factor of $18$, which is $9$: since $18=9\\cdot 2$, $\\sqrt{18}=\\sqrt{9}\\cdot\\sqrt{2}=3\\sqrt{2}$, and no square factor remains under the radical.",
      "$\\sqrt{6}$ divides the number under the radical by $3$, but taking a factor outside multiplies by its square root. Squaring gives $6$, not $18$; the correct form is $3\\sqrt{2}$.",
      "$6$ squared is $36$, not $18$, so it is twice too large inside the radical. Since $18=9\\cdot 2$, $\\sqrt{18}=3\\sqrt{2}\\approx 4.24$.",
      "$2\\sqrt{3}$ squared is $4\\cdot 3=12$, not $18$; it swaps the roles of $2$ and $3$. Since $18=9\\cdot 2$, the simplified form is $3\\sqrt{2}$."
    ]
  },
  "q:4f8120207be787a5": {
    "options": [
      "-10",
      "34",
      "33",
      "39"
    ],
    "explanations": [
      "$-10$ is not $h(4)$; a negative height would mean the ball is below the ground. Evaluating carefully, $-16(16)+70(4)+15=-256+280+15=39$.",
      "$34$ is off by $5$ from the correct value. Squaring first and then multiplying, $-16(16)+280+15=-256+295=39$.",
      "$33$ is off by $6$ from the correct value. The terms are $-16(4)^{2}=-256$, $70(4)=280$ and $15$, which add to $39$.",
      "Substitute $t=4$ and square before multiplying by $-16$: $h(4)=-16(4)^{2}+70(4)+15=-256+280+15=39$, so the ball is $39$ units high at that moment."
    ]
  },
  "q:51e985bb0c403d1f": {
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{2}$"
    ],
    "explanations": [
      "$\\frac{2}{3}$ would mean $20$ of the $30$ integers are multiples of $2$. Exactly every other integer is even, which is $15$, so the probability is $\\frac{15}{30}=\\frac{1}{2}$.",
      "$\\frac{1}{3}$ is the probability of a multiple of $3$ ($10$ of the $30$ integers). The multiples of $2$ are $2, 4, \\ldots, 30$, which is $15$ numbers, so the probability is $\\frac{1}{2}$.",
      "$\\frac{3}{4}$ would mean $22.5$ of the $30$ integers are even, which is not even a whole count. There are $15$ even integers from $1$ to $30$, giving $\\frac{1}{2}$.",
      "The multiples of $2$ from $1$ to $30$ are $2, 4, \\ldots, 30$, which is $15$ of the $30$ integers. The probability is $\\frac{15}{30}=\\frac{1}{2}$."
    ]
  },
  "q:9c7881ec65caa9a6": {
    "options": [
      "421",
      "378",
      "438",
      "420"
    ],
    "explanations": [
      "$421$ is more than the correct cost. Two months at $\\$49$ add only $98$ to the $\\$280$ fee: $C(2)=98+280=378$.",
      "Substitute $m=2$ into the cost function: $C(2)=49(2)+280=98+280=378$, which is the one-time sign-up fee plus two months of membership.",
      "$438$ overshoots the correct cost by $60$. The fee is charged once and $\\$49$ is charged for each of the $2$ months: $C(2)=98+280=378$.",
      "$420$ is too large. Evaluating the function gives $49(2)+280=98+280=378$, so two months cost $\\$378$ in total."
    ]
  },
  "q:7de4c43b11f3d8be": {
    "options": [
      "80",
      "135",
      "185",
      "240"
    ],
    "explanations": [
      "$80$ is $320-240$, which treats the water as $\\frac{3}{4}$ of the volume. Volume scales with the cube of the height ratio, so the water is $\\frac{27}{64}$ of $320$, or $135$, leaving $185$ mL of room.",
      "$135$ mL is the water already in the cup, $320\\cdot\\left(\\frac{3}{4}\\right)^{3}$. The question asks how much more fits, which is $320-135=185$ mL.",
      "The water forms a similar cone with height ratio $\\frac{3}{4}$, so its volume is $\\left(\\frac{3}{4}\\right)^{3}=\\frac{27}{64}$ of the cup: $320\\cdot\\frac{27}{64}=135$ mL. The room left is $320-135=185$ mL.",
      "$240$ is $\\frac{3}{4}$ of $320$, scaling the volume by the height ratio itself. Volume scales by the cube of that ratio, so the water is $135$ mL and $185$ mL more can be added."
    ]
  },
  "q:30b2bfbae2d2501f": {
    "options": [
      "-5.9",
      "5.9",
      "150.9",
      "27.0"
    ],
    "explanations": [
      "The predicted value at $27$ degrees is $118+4.7(27-20)=150.9$. The residual is actual minus predicted: $145-150.9=-5.9$, so the cricket chirped less than the model predicts.",
      "$5.9$ subtracts in the wrong order, predicted minus actual, $150.9-145$. A residual is actual minus predicted, which is $-5.9$ because the observation falls below the line.",
      "$150.9$ is the predicted number of chirps at $27$ degrees, an intermediate value. The residual compares it with the observed $145$: $145-150.9=-5.9$.",
      "$27.0$ is $145-118$, treating the given point's $118$ as the prediction at $27$ degrees. The line rises $4.7(7)=32.9$ from $20$ to $27$ degrees, so the prediction is $150.9$ and the residual is $-5.9$."
    ]
  },
  "q:e2b0a7c1d5ec20f4": {
    "options": [
      "262",
      "248",
      "282",
      "179"
    ],
    "explanations": [
      "A cone holds one third of the matching cylinder: $V=\\frac{1}{3}\\pi r^{2}h=\\frac{1}{3}\\pi(5)^{2}(10)=\\frac{250\\pi}{3}\\approx 261.8$, which rounds to $262$.",
      "$248$ is too small; it would need $\\pi$ to be about $2.98$. The volume is $\\frac{250\\pi}{3}\\approx 261.8$, which rounds to $262$.",
      "$282$ is too large; it is about $20$ more than $\\frac{1}{3}\\pi(25)(10)$. The cone's volume is $\\frac{250\\pi}{3}\\approx 261.8$, or $262$.",
      "$179$ is far too small for $\\frac{1}{3}\\pi(25)(10)$. Computing exactly, the volume is $\\frac{250\\pi}{3}\\approx 261.8$, which rounds to $262$."
    ]
  },
  "q:5c84214b87c7d518": {
    "options": [
      "$2x^2(x + 5)$",
      "$2x(x^2 + x + 4)$",
      "$2(x^3 + x + 4)$",
      "$x(2x^2 + x + 4)$"
    ],
    "explanations": [
      "$2x^{2}(x+5)$ expands to $2x^{3}+10x^{2}$, which has no $8x$ term. The greatest common factor of all three terms is only $2x$: $2x(x^{2}+x+4)$.",
      "Every term shares the factor $2x$, leaving $x^{2}+x+4$. No two integers multiply to $4$ and add to $1$, so $2x(x^{2}+x+4)$ is completely factored.",
      "$2(x^{3}+x+4)$ divides only the coefficients by $2$ and mangles the terms: it expands to $2x^{3}+2x+8$. Every term also contains $x$, so the full factor is $2x$: $2x(x^{2}+x+4)$.",
      "$x(2x^{2}+x+4)$ expands to $2x^{3}+x^{2}+4x$, not the original. It also leaves the common factor $2$ inside; factoring out $2x$ gives $2x(x^{2}+x+4)$."
    ]
  },
  "q:6e4a4d00a7abda6f": {
    "options": [
      "$\\frac{5}{6}$",
      "$\\frac{1}{6}$",
      "$\\frac{2}{6}$",
      "$\\frac{4}{6}$"
    ],
    "explanations": [
      "The outcomes $2, 3, 4, 5, 6$ are all at least $2$, which is $5$ of the $6$ equally likely outcomes. The probability is $\\frac{5}{6}$.",
      "$\\frac{1}{6}$ is the probability of the only outcome that fails, rolling a $1$. The event includes everything else, so its probability is $1-\\frac{1}{6}=\\frac{5}{6}$.",
      "$\\frac{2}{6}$ counts only two outcomes, but every roll except $1$ qualifies. The outcomes $2$ through $6$ give $\\frac{5}{6}$.",
      "$\\frac{4}{6}$ counts the outcomes strictly greater than $2$, leaving out $2$ itself. Greater than or equal to $2$ includes $2, 3, 4, 5, 6$, so the probability is $\\frac{5}{6}$."
    ]
  },
  "q:6b20a70613c145b7": {
    "options": [
      "$y = 769(15)^t$",
      "$y = 769 + 15t$",
      "$y = 769(1.15)^t$",
      "$y = 769(0.85)^t$"
    ],
    "explanations": [
      "$y=769(15)^{t}$ uses the percent as the base, which would multiply the quantity by $15$ each year. Growing $15$ percent multiplies by $1+0.15=1.15$: $y=769(1.15)^{t}$.",
      "$y=769+15t$ adds a fixed $15$ each year, which is linear growth. Percent growth multiplies by the same factor each year: $y=769(1.15)^{t}$.",
      "Percent growth multiplies the quantity by $1+r$ each year, so the model is exponential. With rate $r=0.15$ and starting value $769$: $y=769(1+0.15)^{t}=769(1.15)^{t}$.",
      "$y=769(0.85)^{t}$ is decay, losing $15$ percent per year. Growth adds the rate to $1$, giving $y=769(1.15)^{t}$."
    ]
  },
  "q:7724a4da76e314ae": {
    "options": [
      "Negative and linear",
      "Positive and linear",
      "Positive and nonlinear",
      "Negative and nonlinear"
    ],
    "explanations": [
      "Negative is right, since temperature falls as time passes, but linear is wrong: the points drop steeply and then level off, which is a curve. The association is negative and nonlinear.",
      "The temperature falls as minutes increase, so the association is negative, not positive. The leveling off also makes it nonlinear rather than linear.",
      "Nonlinear is right, because the points curve and level off, but positive is wrong. Temperature decreases as time increases, so the association is negative.",
      "The temperatures fall as time increases, which makes the association negative. They drop steeply and then level off, which is a curve, so the association is also nonlinear."
    ]
  },
  "q:eef72bc28de160b1": {
    "options": [
      "4",
      "8",
      "6",
      "7"
    ],
    "explanations": [
      "$4$ fails the check: $f(4)=2(16)-8=24$, not $64$. Solving $2t^{2}-8=64$ gives $2t^{2}=72$ and $t^{2}=36$, so $t=6$.",
      "$8$ gives $f(8)=2(64)-8=120$, not $64$; it confuses the output $64$ with $t^{2}$. Solving $2t^{2}=72$ gives $t^{2}=36$ and $t=6$.",
      "Set the function equal to $64$: $2t^{2}-8=64$. Then $2t^{2}=72$ and $t^{2}=36$, so $t=\\pm 6$. Because $t>0$, $t=6$.",
      "$7$ gives $f(7)=2(49)-8=90$, not $64$. Solving $2t^{2}-8=64$ gives $t^{2}=36$, and the positive root is $6$."
    ]
  },
  "q:17265178833eb0a7": {
    "options": [
      "$y \\geq 0$",
      "$y \\leq -6$",
      "All real numbers",
      "$y \\geq -6$"
    ],
    "explanations": [
      "$y\\geq 0$ is the range of $x^{2}$ alone, ignoring the $-6$. Subtracting $6$ shifts every output down, so the range is $y\\geq -6$.",
      "$y\\leq -6$ points the wrong way. The parabola opens up with minimum $-6$ at $x=0$, so the outputs are $-6$ and above.",
      "All real numbers would require outputs below $-6$, but $x^{2}\\geq 0$ means $x^{2}-6\\geq -6$. The range is $y\\geq -6$.",
      "Since $x^{2}\\geq 0$ for every $x$, $x^{2}-6\\geq -6$, with the minimum $-6$ reached at $x=0$. The range is $y\\geq -6$."
    ]
  },
  "q:55b7c459742a9647": {
    "options": [
      "$36\\pi$",
      "$72\\pi$",
      "$45\\pi$",
      "$18\\pi$"
    ],
    "explanations": [
      "The volume of a sphere is $V=\\frac{4}{3}\\pi r^{3}$. With $r=3$, the radius cubed is $27$, so $V=\\frac{4}{3}\\pi(27)=36\\pi$.",
      "$72\\pi$ is double the correct volume, as if the formula's coefficient were $\\frac{8}{3}$ instead of $\\frac{4}{3}$. With $r=3$, $V=\\frac{4}{3}\\pi(27)=36\\pi$.",
      "$45\\pi$ does not come from the sphere formula $\\frac{4}{3}\\pi r^{3}$ with $r=3$. Cubing the radius gives $27$, and $\\frac{4}{3}\\cdot 27\\pi=36\\pi$.",
      "$18\\pi$ is half the volume, as if the formula used $\\frac{2}{3}$ instead of $\\frac{4}{3}$. With $r=3$, $V=\\frac{4}{3}\\pi(27)=36\\pi$."
    ]
  },
  "q:a6419da04b9528b0": {
    "options": [
      "$\\cos(30°)$",
      "$\\sin(60°)$",
      "$\\cos(60°)$",
      "$\\tan(30°)$"
    ],
    "explanations": [
      "$\\cos(30°)=\\frac{\\sqrt{3}}{2}$, while $\\sin(30°)=\\frac{1}{2}$. The cofunction rule pairs complementary angles, so $\\sin(30°)$ equals the cosine of $60°$, not of $30°$.",
      "$\\sin(60°)=\\frac{\\sqrt{3}}{2}$, which is not $\\frac{1}{2}$. The complementary-angle rule switches sine to cosine as well as changing the angle, so $\\sin(30°)=\\cos(60°)$.",
      "The sine of an angle equals the cosine of its complement: $\\sin(30°)=\\cos(90°-30°)=\\cos(60°)$, and both equal $\\frac{1}{2}$.",
      "$\\tan(30°)=\\frac{\\sqrt{3}}{3}\\approx 0.577$, which is not equal to $\\sin(30°)=\\frac{1}{2}$. Tangent is not a cofunction of sine; by the complementary-angle rule, $\\sin(30°)=\\cos(60°)$."
    ]
  }
}

export default ENTRIES
