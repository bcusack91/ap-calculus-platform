import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:37331e60e552b880": {
    "options": [
      "$70$",
      "$105$",
      "$231$",
      "$420$"
    ],
    "explanations": [
      "$70$ is the patient's mass in kilograms, $154 \\div 2.2$. That is only the first step; the question asks for the milligrams in each dose, which still requires multiplying by $6$ and dividing by $4$.",
      "Convert the weight, $154 \\div 2.2 = 70$ kilograms, find the daily total, $70 \\times 6 = 420$ milligrams, and split it into $4$ doses: $420 \\div 4 = 105$ milligrams per dose.",
      "$231$ skips the pound-to-kilogram conversion and doses by pounds: $154 \\times 6 \\div 4 = 231$. The rate is per kilogram, so the weight must first be converted to $70$ kilograms.",
      "$420$ milligrams is the DAILY total, $70 \\times 6$. The daily amount is split into $4$ equal doses, so each dose is $420 \\div 4 = 105$ milligrams."
    ]
  },
  "q:4c7f7077aba49df6": {
    "options": [
      "$-\\frac{35}{6}$",
      "$-\\frac{1}{6}$",
      "$\\frac{1}{6}$",
      "$\\frac{35}{6}$"
    ],
    "explanations": [
      "$-\\frac{35}{6}$ treats every zero as negative, $-\\frac{5}{2}-3-\\frac{1}{3}$. Only $x+3$ has a negative zero; $2x-5=0$ gives $x=\\frac{5}{2}$ and $3x-1=0$ gives $x=\\frac{1}{3}$, both positive.",
      "The zeros are the values that make each factor zero: $x=\\frac{5}{2}$, $x=-3$, and $x=\\frac{1}{3}$. Their sum is $\\frac{15}{6}-\\frac{18}{6}+\\frac{2}{6}=-\\frac{1}{6}$.",
      "$\\frac{1}{6}$ has the right size but the wrong sign. It comes from taking each zero as the opposite of its true value, $-\\frac{5}{2}+3-\\frac{1}{3}$, or from dropping the negative in Vieta's $-\\frac{b}{a}=-\\frac{1}{6}$.",
      "$\\frac{35}{6}$ reads the zero of $x+3$ as $+3$ instead of $-3$: $\\frac{5}{2}+3+\\frac{1}{3}=\\frac{35}{6}$. Setting $x+3=0$ gives $x=-3$, which makes the sum $-\\frac{1}{6}$."
    ]
  },
  "q:5cce94114117a51d": {
    "options": [
      "12,555",
      "17,100",
      "7,695",
      "12,150"
    ],
    "explanations": [
      "12,555 uses the Yes column rate, $465/1000=0.465$, which mixes car owners, non-owners, and car-share users. The population is car owners only, so the rate must come from the Owns a car row.",
      "The population is car owners, so use the rate within that row: $285/450 \\approx 0.633$. Applying it to the county's car owners gives $\\frac{285}{450}(27{,}000)=17{,}100$.",
      "7,695 uses $285/1000$, dividing the car owners who said Yes by the whole survey. That rate then gets applied to car owners only, so the denominator should be the $450$ car owners, not all $1{,}000$ residents.",
      "12,150 scales $450/1000$, the car owners' share of the survey. That measures who was surveyed, not how they answered; it ignores the Yes column entirely."
    ]
  },
  "q:1c1c99173b98cb2b": {
    "options": [
      "156",
      "185",
      "171",
      "176"
    ],
    "explanations": [
      "Apply both percent changes as factors: $176 \\times 0.70 = 123.20$, then $123.20 \\times 1.27 \\approx 156.46$, which rounds to $156$ dollars.",
      "$185$ would mean the stock ended about $5\\%$ above its starting price, but a $30\\%$ drop followed by a $27\\%$ rise leaves it below \\$176. No single slip in $176 \\times 0.70 \\times 1.27$ produces it.",
      "$171$ combines the percents into a net $-3\\%$: $176 \\times 0.97 \\approx 171$. The $27\\%$ rise applies to the lower price of \\$123.20, not to \\$176, so the net loss is much larger.",
      "$176$ assumes the drop and the rise roughly cancel. They do not: the $27\\%$ rise is both smaller than the $30\\%$ drop and taken on a smaller base, so the final price is about $156$."
    ]
  },
  "q:50ace322b8e684f5": {
    "options": [
      "$5$",
      "$2$",
      "$7$",
      "$25$"
    ],
    "explanations": [
      "Solve $\\sqrt{3t+4}=t-2$: squaring gives $t^2-7t=0$, so $t=0$ or $t=7$. Only $t=7$ checks, and the mass then is $\\sqrt{25}=5$ grams.",
      "$2$ is the mass at $t=0$, $\\sqrt{3(0)+4}=2$. But $t=0$ is the extraneous root: the right side $t-2$ would be $-2$, and a square root cannot be negative.",
      "$7$ is the valid TIME in minutes, not the mass. The question asks for grams, so substitute: $\\sqrt{3(7)+4}=\\sqrt{25}=5$.",
      "$25$ is the quantity under the radical at $t=7$, $3(7)+4$. The mass is its square root, $5$ grams."
    ]
  },
  "q:22d85ed2fad43137": {
    "options": [
      "To promote natural-fiber clothing as a safer alternative",
      "To blame manufacturers for hiding plastic's health risks",
      "To inform readers about an emerging health concern",
      "To explain how plastic products are made and recycled"
    ],
    "explanations": [
      "The passage lists synthetic clothing fibers as one source of microplastics but never recommends natural fibers or any alternative. Promoting a product goes beyond the passage's neutral, informational content.",
      "The passage names industrial processes as a source but accuses no one of hiding anything. \\\"Blame\\\" and \\\"hiding\\\" add an accusatory tone the passage never takes.",
      "The passage reports where microplastics have been found, where they come from, and what early research suggests about health effects, while noting effects are \\\"still being studied.\\\" That is informing readers about an emerging concern.",
      "The passage mentions degrading plastic products only as a source of microplastics. It says nothing about how plastics are manufactured or recycled, so this purpose is unsupported."
    ]
  },
  "q:3acac7050acb5b4d": {
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$12$"
    ],
    "explanations": [
      "$3$ comes from flipping the inequality while solving, getting $4+2d<12$ and $d<4$. On day $3$ there are only $10$ workers, so the job takes $300 \\div 10=30$ hours, more than $25$.",
      "$4$ is the boundary: on day $4$ there are $12$ workers and the job takes exactly $300 \\div 12=25$ hours. The question requires FEWER than $25$ hours, so day $4$ does not qualify.",
      "Require $\\frac{300}{4+2d}<25$, so $300<25(4+2d)$, giving $12<4+2d$ and $d>4$. The first day is $5$, when $14$ workers finish in about $21.4$ hours.",
      "$12$ is the number of WORKERS needed at the boundary, from $300 \\div 25=12$. The question asks for the day, and $4+2d=12$ occurs on day $4$, so the first qualifying day is $5$."
    ]
  },
  "q:ff5bc14a1e27ebd8": {
    "options": [
      "$10$",
      "$16$",
      "$20$",
      "$40$"
    ],
    "explanations": [
      "$10$ is $t$, the number of minutes until the condition holds. The question asks for gallons in Tank A at that moment, $60-2(10)=40$.",
      "$16$ comes from reversing the relationship, $10+t=2(60-2t)$, which gives $t=22$ and Tank A at $60-44=16$. The stem says Tank A holds twice Tank B, not the other way around.",
      "$20$ is Tank B's amount at $t=10$, $10+10$. The question asks about Tank A, which holds twice that, $40$ gallons.",
      "Set $60-2t=2(10+t)$: $60-2t=20+2t$, so $t=10$. Tank A then holds $60-20=40$ gallons, twice Tank B's $20$."
    ]
  },
  "q:23d47fc1e3d3cef7": {
    "options": [
      "85",
      "77",
      "83",
      "93"
    ],
    "explanations": [
      "Adding the same constant to every value raises the sum by $8$ per value, so the mean shifts by exactly that constant: $77+8=85$.",
      "$77$ treats the mean as unchanged. That is true of the standard deviation, which measures spread, but every value moving up by $8$ moves the mean up by $8$ as well.",
      "$83$ would require the mean to rise by only $6$. Adding $8$ to every value raises the sum by $8n$ and the mean by exactly $8$, so nothing in the problem produces $83$.",
      "$93$ would require the mean to rise by $16$, double the stated increase. Each value goes up by $8$ once, so the mean rises by $8$ to $85$."
    ]
  },
  "q:1ed0bf172c4dced2": {
    "options": [
      "The predicted height, in centimeters, at day 0",
      "The predicted growth, in centimeters, for each day",
      "The predicted height, in centimeters, at day 9",
      "The predicted number of days until the height is 0 cm"
    ],
    "explanations": [
      "The constant $9$ is the value of $h$ when $d=0$: the predicted height, in centimeters, on the day of the first measurement.",
      "The predicted growth per day is the slope, $0.4$ centimeters per day, the coefficient of $d$. The constant $9$ does not change with $d$.",
      "This reads $9$ as an input value of $d$. At day $9$ the predicted height is $0.4(9)+9=12.6$ cm; the $9$ in the equation is the height when $d=0$.",
      "Height $0$ would require $0.4d+9=0$, or $d=-22.5$, which is not $9$. The $9$ is an output in centimeters, the starting height, not a number of days."
    ]
  },
  "q:c5933249e6db2674": {
    "options": [
      "30",
      "68",
      "34",
      "26"
    ],
    "explanations": [
      "$30$ misapplies the 3-4-5 triple, treating $24$ as $4 \\times 6$ so the diagonal would be $5 \\times 6$. That needs a $18$-inch width; with legs $10$ and $24$ the diagonal is $26$.",
      "$68$ is the perimeter, $2(24+10)$, not a length across the rectangle. The diagonal is the hypotenuse of a right triangle with legs $10$ and $24$.",
      "$34$ adds the legs, $24+10$. The Pythagorean theorem adds their squares and takes the root: $\\sqrt{10^2+24^2}=26$.",
      "The diagonal is the hypotenuse of a right triangle with legs $10$ and $24$: $\\sqrt{100+576}=\\sqrt{676}=26$ inches."
    ]
  },
  "q:d457557a8772b34a": {
    "options": [
      "$\\frac{x+5}{4x}$",
      "$\\frac{4}{x+5}$",
      "$\\frac{x+5}{4}$",
      "$4(x+5)$"
    ],
    "explanations": [
      "$\\frac{x+5}{4x}$ divides by $4$ alone and ignores the $x$ in the divisor $\\frac{4}{x}$. Multiplying by the reciprocal $\\frac{x}{4}$ cancels the $x$ in the denominator, leaving $\\frac{x+5}{4}$.",
      "$\\frac{4}{x+5}$ flips the first fraction instead of the divisor: $\\frac{x}{x+5} \\cdot \\frac{4}{x}$. It is the reciprocal of the correct answer.",
      "Dividing by $\\frac{4}{x}$ means multiplying by $\\frac{x}{4}$: $\\frac{x+5}{x} \\cdot \\frac{x}{4}=\\frac{x+5}{4}$, since the $x$ factors cancel.",
      "$4(x+5)$ multiplies by $4$ instead of dividing by it. After the $x$ factors cancel, what remains is $(x+5) \\div 4$, not $(x+5) \\times 4$."
    ]
  },
  "q:b631ab93523b48f3": {
    "options": [
      "$\\$0.30$",
      "$\\$22.50$",
      "$\\$187.50$",
      "$\\$2.25$"
    ],
    "explanations": [
      "\\$0.30 is the cost of ONE hour, $\\frac{12}{1000} \\times 25$. The job runs $7.5$ hours, so the cost is $7.5$ times that, \\$2.25.",
      "\\$22.50 treats the job as using $900$ grams instead of $90$, a factor-of-ten slip. $12 \\times 7.5=90$ grams, which is $0.09$ of a spool.",
      "\\$187.50 charges a full \\$25 spool for each of the $7.5$ hours. The job uses only $90$ grams in total, a small fraction of one $1{,}000$-gram spool.",
      "The job uses $12 \\times 7.5=90$ grams, which is $\\frac{90}{1000}=0.09$ of a spool. The cost is $0.09 \\times 25=$ \\$2.25."
    ]
  },
  "q:653e9e7e316cdad2": {
    "options": [
      "$5\\sqrt{2}$",
      "$10$",
      "$5\\sqrt{3}$",
      "$5$"
    ],
    "explanations": [
      "$5\\sqrt{2}$ uses the 45-45-90 ratio, where each leg is the hypotenuse divided by $\\sqrt{2}$. This triangle has a $60°$ angle, so it is 30-60-90.",
      "$10$ is the hypotenuse itself. The side adjacent to the $60°$ angle is a leg, and every leg is shorter than the hypotenuse.",
      "$5\\sqrt{3}$ is the side OPPOSITE the $60°$ angle. The adjacent leg is the one opposite the $30°$ angle, the shorter leg.",
      "In a 30-60-90 triangle the sides are in the ratio $1:\\sqrt{3}:2$. The side adjacent to $60°$ is opposite $30°$, so it is half the hypotenuse: $10 \\cos 60°=5$."
    ]
  },
  "q:0c910cbc2efffc2b": {
    "options": [
      "16",
      "36",
      "15",
      "18"
    ],
    "explanations": [
      "$16$ does not come from $\\frac{1}{2}bh$ with these values; it would require a product $bh$ of $32$, but $6 \\times 6=36$. The area is $\\frac{1}{2}(36)=18$.",
      "$36$ is $bh$, the area of the $6$-by-$6$ rectangle, forgetting the $\\frac{1}{2}$. A triangle with that base and height covers half of it, $18$.",
      "$15$ would require $bh=30$, but the base and height multiply to $36$. No step of $\\frac{1}{2}(6)(6)$ produces it; the area is $18$.",
      "A triangle covers half of the rectangle with the same base and height, so its area is $\\frac{1}{2}bh=\\frac{1}{2}(6)(6)=18$."
    ]
  },
  "q:b5371bd910926057": {
    "options": [
      "200",
      "203",
      "213",
      "259"
    ],
    "explanations": [
      "Each mile is about $1.6$ kilometers, so multiply the number of miles by the conversion factor: $125 \\times 1.6=200$ kilometers.",
      "$203$ would require a factor of about $1.62$, not the given $1.6$. Using the stated conversion exactly, $125 \\times 1.6=200$.",
      "$213$ corresponds to a factor of about $1.7$, not the given $1.6$. Using the stated conversion, $125 \\times 1.6=200$ kilometers.",
      "$259$ would require a factor of about $2.07$ kilometers per mile, far from the stated $1.6$. No step of $125 \\times 1.6$ produces it."
    ]
  },
  "q:307730986982a4cf": {
    "options": [
      "$12$",
      "$6\\sqrt{2}$",
      "$2\\sqrt{6}$",
      "$4\\sqrt{6}$"
    ],
    "explanations": [
      "$12$ divides $24$ by $2$ instead of taking its square root. Since $12^2=144$, not $24$, this cannot equal $\\sqrt{24}$.",
      "$6\\sqrt{2}$ swaps the factor outside the root and the one inside. It equals $\\sqrt{36 \\cdot 2}=\\sqrt{72}$, not $\\sqrt{24}$.",
      "Write $24$ as a perfect square times another factor, then take the square root of the perfect square: $\\sqrt{24}=\\sqrt{4 \\cdot 6}=\\sqrt{4}\\sqrt{6}=2\\sqrt{6}$.",
      "$4\\sqrt{6}$ pulls the perfect square $4$ out of the root without taking its square root. $\\sqrt{4}=2$, so $\\sqrt{4 \\cdot 6}=2\\sqrt{6}$; $4\\sqrt{6}=\\sqrt{96}$."
    ]
  },
  "q:be6f645ba6e0f65f": {
    "options": [
      "$29$",
      "$14$",
      "$28$",
      "$30$"
    ],
    "explanations": [
      "Solve $-0.5x^2+60x-700 \\ge 1000$, or $x^2-120x+3400 \\le 0$. The roots are $60 \\pm \\sqrt{200} \\approx 45.86$ and $74.14$, so $x$ runs from $46$ to $74$: $74-46+1=29$ values.",
      "$14$ is the half-width of the interval, $\\sqrt{200} \\approx 14.14$, an intermediate value. The count of whole numbers spans the full interval from $46$ to $74$.",
      "$28$ is $74-46$, which counts the gaps between the endpoints. Counting inclusively, from $46$ through $74$, adds $1$, giving $29$.",
      "$30$ rounds the lower endpoint $45.86$ down to $45$. But $P(45)=987.50$, below \\$1,000, so $45$ does not qualify; the count runs from $46$ to $74$."
    ]
  },
  "q:87a5cb06e497220a": {
    "options": [
      "$3$",
      "$3\\sqrt{2}$",
      "$3\\sqrt{3}$",
      "$6$"
    ],
    "explanations": [
      "$3$ is the edge length, from $6e^2=2e^3$. The longest rod runs corner to opposite corner through the interior, the space diagonal, which is longer than an edge.",
      "$3\\sqrt{2}$ is the diagonal of one face. A rod can go farther by running through the interior between opposite corners, a length of $3\\sqrt{3}$.",
      "From $6e^2=2e^3$, the edge is $e=3$. The longest rod is the space diagonal, $\\sqrt{3^2+3^2+3^2}=3\\sqrt{3}$ centimeters.",
      "$6$ comes from solving $6e^2=e^3$, dropping the factor of $2$ on the volume, and reporting that edge. With the factor, $e=3$ and the space diagonal is $3\\sqrt{3}$."
    ]
  },
  "q:37c01c0db88ac4e6": {
    "options": [
      "Strong negative linear association",
      "Non-linear association",
      "No association",
      "Weak positive association"
    ],
    "explanations": [
      "Points that closely follow a line show a strong linear association, and a line going down means $y$ decreases as $x$ increases, which is negative.",
      "The points follow a straight line, so the association is linear. A non-linear association would show a curved pattern.",
      "Points that closely follow a downward line show a clear pattern, so there is an association. No association would look like a scattered cloud with no trend.",
      "\\\"Weak\\\" contradicts points that follow the line closely, and \\\"positive\\\" contradicts the downward direction. Both parts of this description are reversed."
    ]
  },
  "q:8717628308d28877": {
    "options": [
      "6,503",
      "2,520",
      "4,650",
      "4,410"
    ],
    "explanations": [
      "6,503 divides by the row total, $168/310$, the share of customers 35 and over who prefer the website. That rate applies only to customers 35 and over, yet here it is multiplied by all $12{,}000$ customers.",
      "The group of interest is one cell, $168$ of the full sample of $800$: $168/800=0.21$, and $0.21(12{,}000)=2{,}520$.",
      "4,650 scales the row total, $310/800 \\times 12{,}000$. That estimates all customers ages 35 and over, ignoring the restriction to those who prefer the website.",
      "4,410 scales the column total, $294/800 \\times 12{,}000$. That estimates all customers who prefer the website, ignoring the restriction to ages 35 and over."
    ]
  },
  "q:fb175b6b85c0d8f8": {
    "options": [
      "$12$",
      "$16$",
      "$17$",
      "$20$"
    ],
    "explanations": [
      "$12$ is the axis of symmetry, the price with MAXIMUM profit, $P(12)=64$. Profit stays at or above $45$ for higher prices too, up to about $16.36$.",
      "Solve $-(x-4)(x-20) \\ge 45$, or $x^2-24x+125 \\le 0$. The boundaries are about $7.64$ and $16.36$, so the greatest integer price is $16$, where $P(16)=48$.",
      "$17$ rounds the boundary $16.36$ up instead of down. $P(17)=-(13)(-3)=39$, below the required $45$ thousand dollars.",
      "$20$ is a zero of $P$, where profit is $0$. It is the upper end of the allowed price range, not the upper end of the prices that earn at least $45$."
    ]
  },
  "q:65af8a59a7a78502": {
    "options": [
      "14",
      "26",
      "34",
      "40"
    ],
    "explanations": [
      "$14$ is the percent for tennis alone, $\\frac{7}{50}=14\\%$. The question asks for basketball OR tennis, so both counts must be added.",
      "$26$ is the percent for basketball alone, $\\frac{13}{50}=26\\%$. The question also includes tennis, so add its $7$ students.",
      "$34$ would require $17$ students, and no category or pair of categories totals $17$. Basketball and tennis together are $13+7=20$ students, or $40\\%$.",
      "Students who chose basketball or tennis number $13+7=20$ of the $50$ surveyed, and $\\frac{20}{50}=0.40$, or $40\\%$."
    ]
  }
}

export default ENTRIES
