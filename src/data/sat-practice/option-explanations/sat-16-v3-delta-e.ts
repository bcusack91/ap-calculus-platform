import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:a10a53c1b50c02a0": {
    "options": [
      "$\\frac{110\\sqrt{3}}{3}$",
      "$110$",
      "$110\\sqrt{3}$",
      "$220$"
    ],
    "explanations": [
      "The height is opposite the $60°$ angle and the distance is adjacent, so $\\tan(60°)=\\frac{110}{d}$. Then $d=\\frac{110}{\\sqrt{3}}=\\frac{110\\sqrt{3}}{3}\\approx 63.5$ ft.",
      "A distance of $110$ ft equal to the height would require $\\tan\\theta=1$, which is a $45°$ angle. At $60°$ the observer is closer than the building is tall, since $\\tan(60°)=\\sqrt{3}>1$.",
      "This multiplies the height by $\\tan(60°)$ instead of dividing by it, effectively treating the distance as the side opposite the $60°$ angle. Since $\\tan(60°)=\\frac{110}{d}$, the distance is $\\frac{110}{\\sqrt{3}}$, not $110\\sqrt{3}$.",
      "This divides $110$ by $\\cos(60°)=\\frac{1}{2}$, using cosine where the opposite-over-adjacent ratio, tangent, belongs. The height and ground distance are the opposite and adjacent legs, so $d=\\frac{110}{\\tan(60°)}=\\frac{110\\sqrt{3}}{3}$."
    ]
  },
  "q:44bb8a4e3029e90c": {
    "options": [
      "5",
      "14",
      "18",
      "22"
    ],
    "explanations": [
      "No standard misstep produces $5$. Checking it, $\\frac{5+4}{15}=\\frac{9}{15}=\\frac{3}{5}$, which is only half of $\\frac{6}{5}$. Cross-multiplying gives $5(x+4)=90$, so $x=14$.",
      "Cross-multiplying gives $5(x+4)=6\\cdot 15=90$, so $x+4=18$, and subtracting $4$ gives $x=14$. Check by substituting: $\\frac{14+4}{15}=\\frac{18}{15}=\\frac{6}{5}$, matching the right side.",
      "$18$ is the value of $x+4$, not $x$. Solving stopped one step early; subtracting $4$ from both sides of $x+4=18$ gives $x=14$.",
      "This adds $4$ to $18$ instead of subtracting it. From $x+4=18$, undoing the $+4$ requires subtracting, so $x=14$, not $22$."
    ]
  },
  "q:51958f90d67be0bb": {
    "options": [
      "10",
      "28",
      "45",
      "62"
    ],
    "explanations": [
      "$10$ is the value of $x$, an intermediate result. The question asks for an angle, so substitute: $5(10)+12=62$ degrees.",
      "$28$ is the smaller acute angle, $2(10)+8$. The question asks for the larger one, $5(10)+12=62$ degrees.",
      "$45$ assumes the two acute angles are equal, as in an isosceles right triangle. Here the expressions differ, and solving $7x+20=90$ gives angles of $28$ and $62$ degrees.",
      "The acute angles of a right triangle sum to $90°$: $(2x+8)+(5x+12)=90$, so $7x=70$ and $x=10$. The angles are $28°$ and $62°$, and the larger is $62°$."
    ]
  },
  "q:79d9fa6aa4ef42e0": {
    "options": [
      "0.83",
      "0.38",
      "0.22",
      "0.58"
    ],
    "explanations": [
      "This computes $132/160$, dividing by the tutor row total. That is the share of tutor-prepared students who passed, the reversed conditional; the student is chosen from those who passed, so the denominator must be $345$.",
      "The student is chosen from those who passed, so the denominator is the Passed total, $345$. Of those, $132$ prepared with a tutor: $132/345\\approx 0.38$.",
      "This computes $132/600$, dividing by the grand total. It ignores the condition that the selected student is already known to have passed, which restricts the denominator to $345$.",
      "This is $345/600$, the overall pass rate. It drops the tutoring condition entirely and answers a different question; the required value is $132/345\\approx 0.38$."
    ]
  },
  "q:fb8d523bfc330681": {
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{5}{12}$",
      "$\\frac{12}{13}$",
      "$\\frac{13}{12}$"
    ],
    "explanations": [
      "This repeats $\\sin(\\theta)$. Sine uses the opposite side over the hypotenuse; cosine uses the adjacent side, $\\sqrt{13^2-5^2}=12$, so $\\cos(\\theta)=\\frac{12}{13}$.",
      "$\\frac{5}{12}$ is opposite over adjacent, which is $\\tan(\\theta)$, not $\\cos(\\theta)$. Cosine divides the adjacent side $12$ by the hypotenuse $13$.",
      "With opposite $5$ and hypotenuse $13$, the adjacent leg is $\\sqrt{169-25}=12$. Cosine is adjacent over hypotenuse, so $\\cos(\\theta)=\\frac{12}{13}$.",
      "$\\frac{13}{12}$ is hypotenuse over adjacent, the reciprocal of cosine (secant). It is also greater than $1$, which no cosine can be; the correct value is $\\frac{12}{13}$."
    ]
  },
  "q:a87c09edec19ed40": {
    "options": [
      "$1.2h(t - 5)$",
      "$1.2h(t + 5)$",
      "$h(1.2t - 5)$",
      "$1.2h(t) - 5$"
    ],
    "explanations": [
      "At time $t$ the second plant is $t-5$ days old, so a first-variety plant that age is $h(t-5)$ tall. The second variety is $20$ percent taller, so scale the output by $1.2$: $1.2h(t-5)$.",
      "Using $t+5$ shifts in the wrong direction, treating the later-planted flower as $5$ days older than the first rather than $5$ days younger. Its age is $t-5$.",
      "This applies the $1.2$ factor to the input (time) instead of the output (height). Being $20$ percent taller multiplies the height, so the factor belongs outside: $1.2h(t-5)$.",
      "This treats the $5$-day delay as a $5$-centimeter drop in height, confusing a horizontal shift with a vertical one. The delay changes the plant's age, so it belongs inside the function as $t-5$."
    ]
  },
  "q:ab0aa0557b56521f": {
    "options": [
      "55",
      "53",
      "43",
      "59"
    ],
    "explanations": [
      "No row or column of the table sums to $55$: Group A totals $49$, the Yes column $59$, and the No column $43$. It is likely an addition slip; Group B's row gives $29+24=53$.",
      "Group B's total is the sum across its row: $29$ who said yes plus $24$ who said no, $29+24=53$.",
      "$43$ is $19+24$, the total of the No column. It adds down a column, mixing Group A's no responses with Group B's, instead of across Group B's row.",
      "$59$ is $30+29$, the total of the Yes column. It adds down a column, mixing Group A with Group B, instead of across Group B's row, $29+24=53$."
    ]
  },
  "q:8ba3d3840ceec0de": {
    "options": [
      "$\\$1{,}200$",
      "$\\$1{,}428.57$",
      "$\\$1{,}500$",
      "$\\$1{,}875$"
    ],
    "explanations": [
      "This is $1500\\times 0.80$, applying the $20$ percent decrease forward to the ending value instead of reversing both changes. Working backward, the starting value is $1500\\div(1.25\\times 0.80)=1500$.",
      "This adds the percent changes to get a net $5$ percent gain and computes $1500\\div 1.05$. Percent changes on different bases cannot be added; $1.25\\times 0.80=1.00$, so there is no net change.",
      "The changes multiply: $1.25\\times 0.80=1.00$, so the share ends where it started. Check: $1500\\times 1.25=1875$, and $1875\\times 0.80=1500$. The starting value was \\$1,500.",
      "\\$1,875 is the value at the end of the first year, $1500\\times 1.25$, an intermediate value. The question asks for the value at the beginning of the first year."
    ]
  },
  "q:d232e92f745feec1": {
    "options": [
      "$1$",
      "$\\frac{5}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{7}{12}$"
    ],
    "explanations": [
      "Every ball in the bag is red or blue, so the event is certain: $\\frac{7+5}{12}=\\frac{12}{12}=1$.",
      "$\\frac{5}{12}$ is the probability of blue alone. The event \\\"red OR blue\\\" also includes the $7$ red balls, so it covers all $12$ balls.",
      "$\\frac{1}{2}$ treats red and blue as two equally likely outcomes, or averages them. The event \\\"red OR blue\\\" includes every ball in the bag, so its probability is $1$.",
      "$\\frac{7}{12}$ is the probability of red alone. Including the $5$ blue balls as the OR requires gives $\\frac{12}{12}=1$."
    ]
  },
  "q:e12bfa30981fa5a9": {
    "options": [
      "$0.06$",
      "$6000$",
      "$0.006$",
      "$0.0006$"
    ],
    "explanations": [
      "$0.06$ moves the decimal only $2$ places left, which is $6\\times 10^{-2}$. The exponent $-3$ requires $3$ places.",
      "$6000$ moves the decimal to the right, which is $6\\times 10^{3}$. A negative exponent makes the number smaller, moving the decimal left.",
      "A negative exponent of $-3$ means dividing by $1000$, since $10^{-3}=0.001$. So $6\\times 10^{-3}=0.006$: move the decimal point $3$ places to the left.",
      "$0.0006$ moves the decimal $4$ places, or writes three zeros after the decimal point before the $6$. That is $6\\times 10^{-4}$; three places left gives $0.006$."
    ]
  },
  "q:c48b0331d9954c95": {
    "options": [
      "$136.08$",
      "$1{,}008$",
      "$1{,}082.40$",
      "$4{,}082.40$"
    ],
    "explanations": [
      "$136.08$ is the daily cost, $1008\\times 0.135$, an intermediate value. It still has to be multiplied by $30$ days and compared with the budget.",
      "$1{,}008$ is the daily energy use in kilowatt-hours, $42\\times 24$. It is an early intermediate and is not even in dollars.",
      "Daily use is $42\\times 24=1008$ kWh, costing $1008\\times 0.135=136.08$ dollars. Over $30$ days that is $4082.40$ dollars, which exceeds the budget by $4082.40-3000=1082.40$ dollars.",
      "$4{,}082.40$ is the total monthly cost. The question asks how much the cost exceeds the budget, so subtract the $3{,}000$ budget: $1{,}082.40$."
    ]
  },
  "q:08a57bf39abb6ca1": {
    "options": [
      "The poll question was too short to measure opinions",
      "An online poll always gets too few responses to use",
      "People with strong opinions are more likely to respond",
      "Online polls always overestimate support for policies"
    ],
    "explanations": [
      "Nothing in the scenario concerns question length, and a short question can measure opinions well. The flaw lies in who chooses to respond, not in how the question is worded.",
      "\\\"Always\\\" is too strong, and the number of responses is not the core issue. Even a huge voluntary sample stays unrepresentative because respondents select themselves.",
      "In a voluntary response poll, people choose whether to answer, and those with strong opinions are more likely to do so. This voluntary response bias keeps the sample from representing the general public.",
      "Voluntary response bias does not push results in one fixed direction; it over-represents strong opinions on whichever side feels most strongly. The claim that such polls \\\"always\\\" overestimate support is unfounded."
    ]
  },
  "q:c63d953f21267775": {
    "options": [
      "$-15$",
      "$-12.5$",
      "$2.5$",
      "$12.5$"
    ],
    "explanations": [
      "$-15$ is the value of $b$ alone, an intermediate result. The question asks for $a+b$, so add $a=2.5$: $2.5+(-15)=-12.5$.",
      "Expanding gives $4ax-6a=10x+b$. Matching coefficients, $4a=10$, so $a=2.5$; matching constants, $b=-6a=-15$. Then $a+b=-12.5$.",
      "$2.5$ is the value of $a$ alone, found from $4a=10$. The constant terms must also match, giving $b=-6(2.5)=-15$, and $a+b=-12.5$.",
      "$12.5$ has the right size but the wrong sign. Writing $b=+15$ would give $17.5$, not $12.5$, so it comes from dropping the negative on the final sum; $2.5+(-15)=-12.5$."
    ]
  },
  "q:4510d079f8de5e8a": {
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{12}{13}$",
      "$\\frac{13}{12}$",
      "$\\frac{25}{156}$"
    ],
    "explanations": [
      "$\\frac{5}{13}$ is $\\cos R$ alone. It stops before dividing by $\\tan P=\\frac{5}{12}$; completing the step gives $\\frac{12}{13}$.",
      "$P$ and $R$ are complementary, so $\\cos R=\\sin P=\\frac{5}{13}$. The third side is $12$, so $\\tan P=\\frac{5}{12}$, and $\\frac{5/13}{5/12}=\\frac{12}{13}$.",
      "$\\frac{13}{12}$ is the reciprocal of the answer, $\\frac{\\tan P}{\\cos R}=\\frac{5/12}{5/13}$. It inverts the division, putting $\\tan P$ on top.",
      "$\\frac{25}{156}$ is $\\frac{5}{13}\\cdot\\frac{5}{12}$, multiplying $\\cos R$ by $\\tan P$ instead of dividing. Dividing by $\\frac{5}{12}$ means multiplying by $\\frac{12}{5}$, which gives $\\frac{12}{13}$."
    ]
  },
  "q:ec39258a2a4a6095": {
    "options": [
      "20.0",
      "41.3",
      "42.3",
      "640.0"
    ],
    "explanations": [
      "$20.0$ is the number of years from 2005 to 2025, the change in $t$. The question asks how many times larger the predicted count is, $13{,}110/310\\approx 42.3$.",
      "This computes $12{,}800/310$, leaving the intercept out of the 2025 value. The model's 2025 prediction is $640(20)+310=13{,}110$, and $13{,}110/310\\approx 42.3$.",
      "In 2005, $t=0$ and $E=310$. In 2025, $t=20$ and $E=640(20)+310=13{,}110$. The ratio is $13{,}110/310\\approx 42.3$.",
      "$640$ is the slope, the predicted increase in vehicles per year. It is a rate of change, not the factor by which the 2025 count exceeds the 2005 count."
    ]
  },
  "q:26c6a1905caff4bb": {
    "options": [
      "Above the line by 8",
      "Below the line by 8",
      "Above the line by 13",
      "Below the line by 13"
    ],
    "explanations": [
      "This has the right distance but the wrong direction. The line predicts $2(6)+13=25$, and the actual $17$ is less than that, so the point lies below the line, not above.",
      "At $x=6$ the line predicts $2(6)+13=25$. The actual value $17$ is $8$ less, so the residual is $-8$ and the point is $8$ below the line.",
      "$13$ is the line's $y$-intercept, not the vertical gap at $x=6$, and the point is not above the line. The prediction is $25$, so the point sits $8$ below it.",
      "$13$ is the line's $y$-intercept, the prediction at $x=0$, not the gap at $x=6$. The direction is right, but the prediction there is $25$, so the point is only $8$ below."
    ]
  },
  "q:3b7bef153643189a": {
    "options": [
      "$\\frac{8}{13}$",
      "$\\frac{5}{13}$",
      "$\\frac{6}{13}$",
      "$\\frac{3}{14}$"
    ],
    "explanations": [
      "$\\frac{8}{13}$ is the probability that the marble IS red. The question asks for NOT red, the complement: $1-\\frac{8}{13}=\\frac{5}{13}$.",
      "The non-red marbles are $3$ green and $2$ blue, $5$ in all, out of $8+3+2=13$ marbles. The probability is $\\frac{5}{13}$.",
      "$6$ is $3\\times 2$, multiplying the green and blue counts instead of adding them. There are $3+2=5$ non-red marbles, so the probability is $\\frac{5}{13}$.",
      "No natural step gives $\\frac{3}{14}$: it counts only the $3$ green marbles and divides by $14$, which is not the number of marbles. The bag holds $13$, and $5$ are not red."
    ]
  },
  "q:f65aa83a1a04f85f": {
    "options": [
      "Eliminating fares had no effect on bus ridership in the corridor once riders shifting between routes are counted.",
      "Faster boarding was the principal cause of the ridership increase on the fare-free routes, more than the removal of fares itself.",
      "Transit agencies should eliminate fares on all routes, since doing so raised ridership by thirty-one percent.",
      "Most of the fare-free routes' gain came from riders leaving nearby paid routes, so the corridor-wide rise was much smaller."
    ],
    "explanations": [
      "\\\"No effect\\\" overstates the deflation. The final sentence says corridor-wide ridership did rise, by roughly a fifth of the headline figure, so the effect was smaller, not zero.",
      "The text mentions faster boarding only as a side effect and never identifies it as a cause of the gain. It attributes most of the gain to riders shifting from routes that still charged.",
      "This recommends a policy the text never offers, and it treats the thirty-one percent figure at face value, which is exactly what the agency's analysis undercuts.",
      "The agency found most added riders \\\"had simply shifted from routes that still charged,\\\" and corridor-wide ridership rose by \\\"roughly a fifth of the headline figure.\\\" This choice captures both points."
    ]
  },
  "q:cd46eed8e471303b": {
    "options": [
      "$10$",
      "$11$",
      "$12$",
      "$20$"
    ],
    "explanations": [
      "$10$ is $30-20$, an off-by-one count that forgets both endpoints are included. The integers $20$ through $30$ number $30-20+1=11$.",
      "For $n\\ne 10$, $P(n)=\\frac{(n-10)(n+10)}{n-10}=n+10$. So $P(n)\\ge 30$ means $n\\ge 20$, and the integers $20$ through $30$ number $11$.",
      "$12$ counts from $19$ through $30$, wrongly including $n=19$. But $P(19)=29$, which is less than $30$; the smallest qualifying value is $n=20$.",
      "$20$ is the smallest group size that qualifies, an intermediate value. The question asks how many integers qualify, which is $20$ through $30$, or $11$ values."
    ]
  },
  "q:ddf94b3b45cce182": {
    "options": [
      "$\\frac{1}{2}$",
      "$2$",
      "$\\frac{1}{8}$",
      "$8$"
    ],
    "explanations": [
      "$\\frac{1}{2}$ is $y^{1/3}$, the value before cubing. Since $y^{1/3}=\\frac{1}{2}$, cubing gives $y=\\frac{1}{8}$.",
      "$2$ is $y^{-1/3}$, found from $3y^{-1/3}=6$. Two steps remain: take the reciprocal to get $y^{1/3}=\\frac{1}{2}$, then cube to get $\\frac{1}{8}$.",
      "With $x=9$, $9^{1/2}=3$, so $3y^{-1/3}=6$ and $y^{-1/3}=2$. Then $y^{1/3}=\\frac{1}{2}$, and cubing gives $y=\\frac{1}{8}$.",
      "$8$ ignores the negative exponent, treating $y^{-1/3}=2$ as $y^{1/3}=2$ and cubing. A negative exponent means a reciprocal, so $y^{1/3}=\\frac{1}{2}$ and $y=\\frac{1}{8}$."
    ]
  },
  "q:b2c8ad858e40e2f6": {
    "options": [
      "65",
      "62",
      "57",
      "53"
    ],
    "explanations": [
      "Substitute the $12$ hours for $x$ in the line of best fit: $\\hat{y}=0.5(12)+59=6+59=65$. The model predicts a score of $65$.",
      "No natural step gives $62$. It would need the hours term to add only $3$, as if $x$ were $6$ or the slope were $0.25$. With $x=12$, $0.5(12)=6$, so the prediction is $65$.",
      "No natural step gives $57$. It is below the intercept $59$, but the slope is positive, so any positive number of hours predicts a score above $59$: $0.5(12)+59=65$.",
      "$53$ subtracts the hours term instead of adding it, computing $59-0.5(12)=53$. The slope is positive, so more study raises the predicted score: $59+6=65$."
    ]
  },
  "q:200a9b5951a2ed27": {
    "options": [
      "20",
      "236",
      "471",
      "2828"
    ],
    "explanations": [
      "$20$ uses a length of $6$ inches instead of $6$ feet. With the full $72$-inch length, the volume is $39\\cdot 72=2808$ cubic inches, or $1.625$ cubic feet.",
      "The trapezoid's area is $\\frac{8+5}{2}\\cdot 6=39$ square inches. Times $72$ inches of length gives $2808$ cubic inches, or $2808\\div 1728=1.625$ cubic feet, and $1.625\\times 145\\approx 236$ pounds.",
      "$471$ forgets the $\\frac{1}{2}$ in the trapezoid area formula, using $78$ square inches instead of $39$. That doubles the volume and the weight.",
      "$2828$ divides by $144$, the square inches in a square foot, instead of $1728$, the cubic inches in a cubic foot. Volume needs the cubic conversion: $2808\\div 1728=1.625$ cubic feet."
    ]
  },
  "q:901d0ddc37d35271": {
    "options": [
      "$15$",
      "$30$",
      "$60$",
      "$125$"
    ],
    "explanations": [
      "$15$ halves the width one time too many, or treats $30$ as the half-width of the $r$-interval. The unflagged readings run from $110$ to $140$, a width of $30$.",
      "Not flagged means $|2r-250|<30$, so $220<2r<280$ and $110<r<140$. The width is $140-110=30$ grams.",
      "$60$ is the width of the interval for $2r$, $280-220$. Solving stopped before dividing by $2$; the interval for $r$ is $110<r<140$, a width of $30$.",
      "$125$ is the center of the interval, $250\\div 2$, not its width. The unflagged readings run from $110$ to $140$, a width of $30$."
    ]
  },
  "q:b4bb5c2f93bb0989": {
    "options": [
      "$\\frac{9a^{4}b^{6}}{4}$",
      "$\\frac{4a^{4}b^{6}}{9}$",
      "$\\frac{4b^{6}}{9a^{4}}$",
      "$\\frac{2a^{4}b^{6}}{3}$"
    ],
    "explanations": [
      "This applies the $\\frac{2}{3}$ power correctly but forgets that the negative exponent inverts the fraction, so $4$ and $9$ end up swapped.",
      "The negative exponent flips the fraction: $\\left(\\frac{8a^{6}b^{9}}{27}\\right)^{2/3}$. Then $8^{2/3}=4$, $27^{2/3}=9$, $(a^{6})^{2/3}=a^{4}$, and $(b^{9})^{2/3}=b^{6}$, giving $\\frac{4a^{4}b^{6}}{9}$.",
      "This flips the fraction but leaves the $a$ factor in the denominator. Moving $a^{-6}$ out of a denominator makes it $a^{6}$ in the numerator, so $a^{4}$ belongs on top.",
      "$\\frac{2}{3}$ uses $8^{1/3}=2$ and $27^{1/3}=3$, applying only the cube root to the coefficients and dropping the square. The $\\frac{2}{3}$ power gives $4$ and $9$."
    ]
  }
}

export default ENTRIES
