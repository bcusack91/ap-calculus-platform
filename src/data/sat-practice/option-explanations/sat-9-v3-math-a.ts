import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:97484d5f0759edc5": {
    "options": [
      "$\\frac{7}{2}$ hours",
      "$\\frac{1}{7}$ hours",
      "$\\frac{10}{7}$ hours",
      "$\\frac{7}{10}$ hours"
    ],
    "explanations": [
      "$\\frac{7}{2}$ hours averages the two solo times, $\\frac{5+2}{2}$. Working together must take less time than the faster worker's $2$ hours alone, so any answer above $2$ is impossible.",
      "$\\frac{1}{7}$ hours comes from adding the times, $5+2=7$, and taking the reciprocal. Rates add, not times: the combined rate is $\\frac{1}{5}+\\frac{1}{2}=\\frac{7}{10}$ job per hour.",
      "Add the hourly rates: $\\frac{1}{5}+\\frac{1}{2}=\\frac{7}{10}$ of the job per hour. The time for one whole job is the reciprocal, $\\frac{10}{7}$ hours, which is sensibly under the faster worker's $2$ hours.",
      "$\\frac{7}{10}$ is the combined rate, the fraction of the job done per hour, not the time. One more step is needed: the time is the reciprocal, $\\frac{10}{7}$ hours."
    ]
  },
  "q:769f89e424d4e683": {
    "options": [
      "216",
      "32",
      "120",
      "152"
    ],
    "explanations": [
      "$216$ is the volume of the larger mold itself, $6^3$. The question asks how much it exceeds the original volume, so $64$ still has to be subtracted.",
      "$32$ is $50$ percent of the original volume $64$, as if the volume grew by $50$ percent. Every edge grows by $50$ percent, so the volume scales by $1.5^3$, not $1.5$.",
      "$120$ is $216-96$, subtracting the original surface area from the new volume. That mixes square and cubic units; the original volume is $4^3=64$, not $96$.",
      "$6e^2=96$ gives $e=4$, so the original volume is $64$. The new edge is $1.5(4)=6$, giving volume $216$, and the increase is $216-64=152$ cubic centimeters."
    ]
  },
  "q:eac2d1b400bc43bf": {
    "options": [
      "$3$",
      "$36$",
      "$81$",
      "$54$"
    ],
    "explanations": [
      "$3$ is the constant $k$, found from $8k=24$. It is an intermediate value; the question asks for $Q$ at $d=9$, which is $3\\cdot 9^{3/2}=81$.",
      "$36$ scales $24$ by $\\sqrt{\\frac{9}{4}}=1.5$, as if the exponent were $\\frac{1}{2}$. The $\\frac{3}{2}$ power means the scale factor is $\\left(\\frac{9}{4}\\right)^{3/2}=\\frac{27}{8}$.",
      "First use the given pair: $4^{3/2}=8$, so $8k=24$ and $k=3$. Then at the new length, $9^{3/2}=(\\sqrt{9})^3=27$, so $Q=3(27)=81$.",
      "$54$ treats $Q$ as directly proportional to $d$, $24\\cdot\\frac{9}{4}=54$. That ignores the $\\frac{3}{2}$ exponent, which makes the scale factor $\\frac{27}{8}$ rather than $\\frac{9}{4}$."
    ]
  },
  "q:88a04f63e951cb07": {
    "options": [
      "$\\$600$",
      "$\\$704$",
      "$\\$800$",
      "$\\$838.10$"
    ],
    "explanations": [
      "$\\$600$ is $528\\div 0.88$, reversing only the March cut. Both reductions were applied, so the June price is $0.88\\times 0.75=0.66$ of the original.",
      "$\\$704$ is $528\\div 0.75$, reversing only the June cut. That is the price after March, an intermediate value; the March $12$ percent cut still has to be undone.",
      "Successive cuts multiply: the June price is $0.88\\times 0.75=0.66$ of the original. So the original is $528\\div 0.66=800$ dollars, and $800\\times0.88\\times0.75=528$ checks.",
      "$\\$838.10$ is $528\\div 0.63$, from adding the cuts into one $37$ percent reduction. The second cut applies to the already-reduced price, so the combined factor is $0.66$, not $0.63$."
    ]
  },
  "q:47d11e26b0141519": {
    "options": [
      "$800$",
      "$300$",
      "$644$",
      "$936$"
    ],
    "explanations": [
      "The first $500$ kWh cost $55$ dollars, leaving $48$ dollars at $0.16$ per kWh, which is $300$ more kWh. Total usage is $500+300=800$ kWh.",
      "$300$ is only the usage beyond $500$ kWh, the intermediate value $\\frac{48}{0.16}$. The question asks for total usage, so the first $500$ kWh must be added back.",
      "$644$ is $\\frac{103}{0.16}$, billing every kWh at the higher rate. Only usage above $500$ kWh is billed at $0.16$; the first $500$ kWh cost $0.11$ each.",
      "$936$ is $\\frac{103}{0.11}$, billing every kWh at the lower rate. Usage past $500$ kWh costs $0.16$ each, so the true total is smaller."
    ]
  },
  "q:e173b80d20d88906": {
    "options": [
      "6",
      "18",
      "14",
      "17"
    ],
    "explanations": [
      "$6$ looks like adding only the slope terms, $3+3$, while dropping the constants. In fact the $x$-terms cancel, $12+(-12)=0$, and it is the two $7$s that survive, giving $14$.",
      "$18$ would require $f(-4)=-1$, but $3(-4)+7=-12+7=-5$. With $f(4)=19$, the sum is $19+(-5)=14$, not $18$.",
      "Evaluate each one separately: $f(4)=12+7=19$ and $f(-4)=-12+7=-5$. The $x$-terms cancel and the two constants remain, so the sum is $7+7=14$.",
      "$17$ would require $f(-4)=-2$, an arithmetic slip; $3(-4)+7=-5$. The sum is $19+(-5)=14$."
    ]
  },
  "q:1e759a9af65a24c7": {
    "options": [
      "58",
      "51",
      "45",
      "25"
    ],
    "explanations": [
      "Group 1 has $18+13=31$ respondents, and $18$ said Yes. $\\frac{18}{31}\\approx 0.58$, so about $58$ percent.",
      "$51$ comes from $\\frac{18}{35}$, dividing by the total Yes count for both groups. That gives Group 1's share of all Yes answers, not the percent of Group 1 that said Yes.",
      "$45$ percent would mean fewer than half of Group 1 said Yes, but $18$ of $31$ is more than half. The correct denominator is Group 1's row total, giving $\\frac{18}{31}\\approx 58$ percent.",
      "$25$ comes from $\\frac{18}{73}$, dividing by the grand total of both groups. The question asks about Group 1 only, so the denominator is $31$."
    ]
  },
  "q:d9cbc2b08377720e": {
    "options": [
      "36",
      "27",
      "38",
      "33"
    ],
    "explanations": [
      "The $10$ parts are worth $90\\div10=9$ dollars each. The shares are $63$ and $27$ dollars, which differ by $4$ parts, $4\\times9=36$ dollars.",
      "$27$ is the smaller share, $3\\times9$. The question asks how many more dollars the larger share gets, which is $63-27=36$.",
      "$38$ is not a whole number of $9$-dollar parts. The shares differ by exactly $7-3=4$ parts, so the difference is $4\\times9=36$ dollars.",
      "$33$ is not a multiple of the $9$-dollar part, so it cannot be the gap between the shares. That gap is $4$ parts, $36$ dollars."
    ]
  },
  "q:5c1e3b5dc58158b6": {
    "options": [
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "explanations": [
      "$\\frac{\\sqrt{3}}{2}$ is $\\sin(60°)$, equivalently $\\cos(30°)$. In a 30-60-90 triangle the side opposite $30°$ is the short leg, $1$, over hypotenuse $2$.",
      "In a 30-60-90 triangle with sides $1$, $\\sqrt{3}$, $2$, the side opposite $30°$ is $1$ and the hypotenuse is $2$. So $\\sin(30°)=\\frac{1}{2}$.",
      "$\\frac{\\sqrt{3}}{3}$ is $\\tan(30°)=\\frac{1}{\\sqrt{3}}$, opposite over adjacent. Sine uses the hypotenuse, giving $\\frac{1}{2}$.",
      "$\\frac{\\sqrt{2}}{2}$ is $\\sin(45°)$, from the 45-45-90 triangle. For $30°$ the ratio is opposite $1$ over hypotenuse $2$, which is $\\frac{1}{2}$."
    ]
  },
  "q:0a52f8a7eb066ed6": {
    "options": [
      "$3$",
      "$4$",
      "$9$",
      "$16$"
    ],
    "explanations": [
      "$3$ is $\\sqrt{2+7}$, from the extraneous root $x=2$. At $x=2$ the right side is $2-5=-3$, which cannot equal a square root, so that root is rejected.",
      "Squaring gives $x^2-11x+18=0$, so $x=2$ or $x=9$. Only $x=9$ checks: $\\sqrt{16}=4$ and $9-5=4$. So $\\sqrt{x+7}=4$.",
      "$9$ is the valid solution $x$ itself, the intermediate value. The question asks for $\\sqrt{x+7}$, which is $\\sqrt{16}=4$.",
      "$16$ is $x+7$, the value under the radical. Taking the square root is the last step: $\\sqrt{16}=4$."
    ]
  },
  "q:dd47318ec2a4b31a": {
    "options": [
      "1004",
      "1080",
      "1231",
      "1006"
    ],
    "explanations": [
      "$1004$ is not a multiple of $180$, but every polygon's interior angle sum is $(n-2)\\times180$. For $8$ sides that is $6\\times180=1080$ degrees.",
      "The interior angle sum is $(n-2)\\times180$. With $n=8$, that is $6\\times180=1080$ degrees.",
      "$1231$ is not a multiple of $180$, so it cannot be an interior angle sum. An octagon splits into $6$ triangles, giving $6\\times180=1080$ degrees.",
      "$1006$ is not a multiple of $180$, which any interior angle sum must be. The formula $(8-2)\\times180$ gives $1080$ degrees."
    ]
  },
  "q:829530787738a3e9": {
    "options": [
      "130",
      "450",
      "900",
      "78"
    ],
    "explanations": [
      "$130$ uses the grand total $900$ as both denominators, giving rates of about $0.187$ and $0.100$. Each enrollment rate must use its own program total, $280$ and $300$.",
      "Program 1 enrolls $\\frac{168}{280}=0.60$ and Program 3 enrolls $\\frac{90}{300}=0.30$. With $1{,}500$ applicants each, that is $900-450=450$ more Program 1 enrollees.",
      "$900$ is Program 1's expected enrollment alone, $0.60(1{,}500)$. The question asks how many more than Program 3, so subtract $450$.",
      "$78$ is the raw table difference $168-90$. It is never scaled to $1{,}500$ applicants, and the two programs had different applicant totals in the table."
    ]
  },
  "q:93574385df2a6e79": {
    "options": [
      "$3$",
      "$\\frac{12}{5}$",
      "$2$",
      "$-3$"
    ],
    "explanations": [
      "$3$ is the horizontal asymptote, the ratio of leading coefficients $\\frac{3}{1}$. The hole's $y$-value comes from the simplified function at $x=2$, which is $\\frac{12}{5}$.",
      "Factoring gives $\\frac{3(x-2)(x+2)}{(x+3)(x-2)}$; the $x-2$ cancels, leaving a hole at $x=2$. The simplified $\\frac{3(x+2)}{x+3}$ at $x=2$ is $\\frac{12}{5}$.",
      "$2$ is the $x$-coordinate of the hole, where the factor $x-2$ cancels. The question asks for the $y$-coordinate, $\\frac{3(2+2)}{2+3}=\\frac{12}{5}$.",
      "$-3$ is where the vertical asymptote sits, the excluded value that does not cancel. The hole is at $x=2$, with $y=\\frac{12}{5}$."
    ]
  },
  "q:d0a8b6b55b3931a4": {
    "options": [
      "$13$",
      "$\\frac{13}{5}$",
      "$2$",
      "$\\frac{7}{5}$"
    ],
    "explanations": [
      "$13$ is the value of $5x$ from $5x-3=10$, stopping before the last division. Then $x=\\frac{13}{5}$.",
      "Rewrite every power in base $2$: the left side is $2^{2x}\\cdot2^{3x-3}=2^{5x-3}$ and the right side is $32^2=2^{10}$. Setting exponents equal, $5x-3=10$, so $x=\\frac{13}{5}$.",
      "$2$ comes from dropping the $-3$ in $8^{x-1}=2^{3x-3}$ and solving $5x=10$. Keeping it gives $5x-3=10$, so $x=\\frac{13}{5}$.",
      "$\\frac{7}{5}$ comes from writing $32^2$ as $2^{5+2}=2^7$, adding exponents instead of multiplying. A power of a power multiplies: $(2^5)^2=2^{10}$."
    ]
  },
  "q:2e2cb953c1e6e2e8": {
    "options": [
      "The standard deviation of List X is greater, because the values of List X lie farther from 50 on average.",
      "The standard deviation of List Y is greater, because List Y contains more distinct values.",
      "The standard deviations are equal, because the two lists have the same mean and the same median.",
      "The comparison cannot be made without computing both standard deviations."
    ],
    "explanations": [
      "Standard deviation measures typical distance from the mean. Six of List X's values sit $30$ from $50$, while no List Y value is more than $10$ away, so List X is more spread out.",
      "Counting distinct values does not measure spread. List Y's seven values are tightly packed within $10$ of $50$, so its standard deviation is the smaller one.",
      "Mean and median describe the center, not the spread. Two lists can share both and still differ in how far the values lie from that center, as these do.",
      "No calculation is needed: every List X value except $50$ is $30$ from the mean, while every List Y value is within $10$. That settles which spread is larger by inspection."
    ]
  },
  "q:7a5addc8915ec532": {
    "options": [
      "$2$",
      "$4$",
      "$10$",
      "$20$"
    ],
    "explanations": [
      "Exactly one common point means the line $y=k$ touches the parabola only at its vertex. The vertex is at $t=-\\frac{20}{2(-5)}=2$ seconds.",
      "$4$ is when the ball lands, the other root of $-5t(t-4)=0$. A horizontal line meets the path only once at the vertex, which is halfway to landing, $t=2$.",
      "$10$ is $\\frac{20}{2}$, using $-\\frac{b}{2a}$ but forgetting the $a=-5$. The vertex time is $\\frac{20}{2(5)}=2$ seconds.",
      "$20$ is the height $k$ of the bird's path, the maximum height $h(2)$. The question asks for the time, which is $t=2$ seconds."
    ]
  },
  "q:d9a1735f99492f94": {
    "options": [
      "-5",
      "-6",
      "-2",
      "1"
    ],
    "explanations": [
      "Checking $x=-5$: $4(-5)-1=-21$, not $-9$. Solving correctly, $4x-1=-9$ gives $4x=-8$, so $x=-2$.",
      "Checking $x=-6$: $4(-6)-1=-25$, not $-9$. The equation $4x-1=-9$ gives $4x=-8$ and $x=-2$.",
      "Set $4x-1=-9$. Adding $1$ to both sides gives $4x=-8$, so $x=-2$; check: $4(-2)-1=-9$.",
      "Checking $x=1$: $4(1)-1=3$, which is positive, not $-9$. Solving $4x-1=-9$ gives $x=-2$."
    ]
  },
  "q:7fc879b8868d8acf": {
    "options": [
      "$12$",
      "$9$",
      "$0$",
      "$11$"
    ],
    "explanations": [
      "The input $3$ satisfies $3\\ge2$, so the second rule applies, not the first. That gives $f(3)=2(3)+6=12$.",
      "$9$ is $3^2$, from the first rule, which applies only when $x<2$. Since $3\\ge2$, the second rule gives $2(3)+6=12$.",
      "$0$ is not produced by either rule at $x=3$: the first gives $9$ and the second gives $12$. Because $3\\ge2$, the correct value is $12$.",
      "$11$ does not come from either piece at $x=3$; the second rule gives $2(3)+6=12$, not $11$. That is the rule to use, since $3\\ge2$."
    ]
  },
  "q:3891a9b4a160a070": {
    "options": [
      "8",
      "3",
      "5",
      "4"
    ],
    "explanations": [
      "$k=8$ would give $y=8(4)=32$, not $20$. Dividing $y$ by $x$ gives $k=\\frac{20}{4}=5$.",
      "Testing this value, $k=3$ would give $y=3(4)=12$, not the stated $20$. The constant is found by dividing, $\\frac{y}{x}=\\frac{20}{4}=5$.",
      "Solve $y=kx$ for the constant by dividing both sides by $x$: $k=\\frac{y}{x}=\\frac{20}{4}=5$. Checking, $5(4)=20$, which matches the given $y$.",
      "$4$ is the given value of $x$, not the constant. $k=4$ would give $y=16$; the constant is $\\frac{20}{4}=5$."
    ]
  },
  "q:9d800939f86a5f3c": {
    "options": [
      "Dashed line, shaded below",
      "Dashed line, shaded above",
      "Solid line, shaded above",
      "Solid line, shaded below"
    ],
    "explanations": [
      "A strict $<$ excludes the boundary, so the line is dashed. Since $y$ is less than $3x-2$, the solutions lie below the line.",
      "The dashed line is right for a strict inequality, but shading above flips the direction. $y<3x-2$ means points below the line.",
      "Both parts are wrong: a solid line would include the boundary, which $<$ excludes, and shading above would represent $y>3x-2$.",
      "Shading below is right, but a solid line includes points on $y=3x-2$. The strict $<$ excludes them, so the line must be dashed."
    ]
  },
  "q:cf9592f3d097b2ef": {
    "options": [
      "$5$",
      "$8$",
      "$10$",
      "$14$"
    ],
    "explanations": [
      "$5$ is half of $AB$, the distance from the midpoint to an endpoint. The full length is $\\sqrt{8^2+6^2}=10$.",
      "$8$ is only the horizontal change from $x=-3$ to $x=5$. The vertical change of $6$ must also be included, giving $\\sqrt{64+36}=10$.",
      "The midpoint is $\\left(1,\\tfrac{2+y}{2}\\right)$, and putting it on the line gives $\\tfrac{2+y}{2}=2(1)-3=-1$, so $y=-4$. The changes are $8$ across and $6$ down, so $AB=\\sqrt{64+36}=10$.",
      "$14$ adds the horizontal and vertical changes, $8+6$. Distance uses the Pythagorean theorem, $\\sqrt{8^2+6^2}=10$."
    ]
  },
  "q:145602b1689db38a": {
    "options": [
      "$216$",
      "$281$",
      "$315$",
      "$146$"
    ],
    "explanations": [
      "Take the square root first, which gives $\\sqrt{36}=6$. Then cube that result: $6\\cdot6\\cdot6=216$, so $(\\sqrt{36})^3=216$.",
      "$281$ is not a perfect cube, so it cannot be $(\\sqrt{36})^3$. Since $\\sqrt{36}=6$, the value is $6^3=216$.",
      "$315$ is not a perfect cube, so it cannot equal $6^3$. Taking the root first gives $6$, and $6\\cdot6\\cdot6=216$.",
      "$146$ is not a perfect cube; $5^3=125$ and $6^3=216$. Since $\\sqrt{36}=6$, the answer is $216$."
    ]
  },
  "q:d62747fd635b5596": {
    "options": [
      "1",
      "7",
      "2",
      "5"
    ],
    "explanations": [
      "At $1$ week Alice has $139$ dollars and Bob has $97$, so they are not equal. Solving $119+20w=35+62w$ gives $w=2$.",
      "At $7$ weeks Alice has $259$ dollars and Bob has $469$; Bob passed her long before. Setting the amounts equal gives $84=42w$, so $w=2$.",
      "Set the two savings expressions equal: $119+20w=35+62w$. Then $84=42w$, so $w=2$, and both people have $159$ dollars at that point.",
      "At $5$ weeks Alice has $219$ dollars and Bob has $345$, so they are not equal. The gap of $84$ closes at $42$ dollars per week, giving $w=2$."
    ]
  },
  "q:98dd179df6117200": {
    "options": [
      "Juniors, 1.67",
      "Freshmen, 0.49",
      "Sophomores, 1.03",
      "Freshmen, 1.50"
    ],
    "explanations": [
      "$1.67$ is the juniors' No-to-Yes ratio, $\\frac{150}{90}$, the reciprocal of what was asked. Their Yes-to-No ratio is $\\frac{90}{150}=0.60$, the lowest of the three.",
      "$0.49$ is $\\frac{156}{320}$, the freshmen Yes count over their row total. That is the proportion answering Yes, not the Yes-to-No ratio.",
      "The sophomores' ratio is $\\frac{132}{128}\\approx1.03$, which is correct for them, but it is not the greatest; the freshmen's $1.50$ is larger.",
      "Freshmen: $\\frac{156}{104}=1.50$; sophomores: $\\frac{132}{128}\\approx1.03$; juniors: $\\frac{90}{150}=0.60$. The freshmen have the greatest ratio, $1.50$."
    ]
  },
  "q:e0df08c7f20cdb81": {
    "options": [
      "$1.5$",
      "$3.00$",
      "$3.12$",
      "$48$"
    ],
    "explanations": [
      "$1.5$ is the time of the maximum height, $\\frac{48}{32}$, an intermediate step. The ball still has to fall from $42$ feet to the ground.",
      "$3.00$ doubles the time to the peak, which works only for a launch from ground level. Starting at $6$ feet, the ball falls farther than it rose, so it lands later.",
      "The peak height is $6+\\frac{v^2}{64}=42$, so $v=48$. Solving $-16t^2+48t+6=0$ gives the positive root $t=\\frac{24+\\sqrt{672}}{16}\\approx3.12$ seconds.",
      "$48$ is the initial speed $v$ in feet per second, the first intermediate value. The question asks for the landing time, about $3.12$ seconds."
    ]
  },
  "q:74af40025c0025dd": {
    "options": [
      "$1$",
      "$x - 2$",
      "$0$",
      "$-1$"
    ],
    "explanations": [
      "$1$ ignores the sign: $2-x$ and $x-2$ are opposites, not equal. Their quotient is $-1$.",
      "$x-2$ would mean a factor survives the cancellation. The numerator and denominator are opposites, $2-x=-(x-2)$, so everything cancels except the constant $-1$.",
      "$0$ treats dividing opposites as subtracting them. A nonzero quantity divided by its opposite is $-1$, not $0$.",
      "The numerator is the opposite of the denominator, since $2-x=-(x-2)$. So the fraction is $\\frac{-(x-2)}{x-2}$, which equals $-1$ for every allowed $x$."
    ]
  },
  "q:2431195d4bf2740c": {
    "options": [
      "$1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$-1$"
    ],
    "explanations": [
      "$1$ is $\\cos(0°)$, the point $(1,0)$ on the unit circle. At $180°$ the point is $(-1,0)$, so the cosine is $-1$.",
      "$0$ is the $y$-coordinate of the point $(-1,0)$, which is $\\sin(180°)$. Cosine is the $x$-coordinate, so $\\cos(180°)=-1$.",
      "$\\frac{1}{2}$ is $\\cos(60°)$, a special-triangle value that does not apply here. At $180°$ the unit-circle point is $(-1,0)$, giving $-1$.",
      "On the unit circle, $180°$ lands at the point $(-1,0)$. Cosine is the $x$-coordinate of that point, so $\\cos(180°)=-1$."
    ]
  },
  "q:1fb4c8cc2c93940a": {
    "options": [
      "$\\$21$",
      "$\\$67.20$",
      "$\\$8{,}000$",
      "$\\$67{,}200$"
    ],
    "explanations": [
      "$\\$21$ is the mass in kilograms, $\\frac{8.4\\times2500}{1000}$, an intermediate value. It still has to be multiplied by the rate: $21\\times3.20=67.20$ dollars.",
      "Mass is $8.4\\times2500=21{,}000$ grams, which is $21$ kilograms. At $3.20$ dollars per kilogram the cost is $21\\times3.20=67.20$ dollars.",
      "$\\$8{,}000$ is $2{,}500\\times3.20$, charging the rate on the volume. Shipping is priced by mass, so convert volume to mass first using the density.",
      "$\\$67{,}200$ is $21{,}000\\times3.20$, applying the per-kilogram rate to the mass in grams. The $21{,}000$ grams must first be converted to $21$ kilograms."
    ]
  },
  "q:6444887429e81a5f": {
    "options": [
      "$-\\frac{1}{2}$",
      "$1$",
      "$\\frac{5}{2}$",
      "$2$"
    ],
    "explanations": [
      "$-\\frac{1}{2}$ is the sum of all three zeros, $-\\frac{a}{2}$ with $a=1$. The zero $-3$ must be excluded: $-\\frac{1}{2}-(-3)=\\frac{5}{2}$.",
      "$1$ is the value of $a$ found from $p(-3)=9a-9=0$. That is an intermediate step; the question asks for the sum of the two remaining zeros.",
      "$p(-3)=0$ gives $9a-9=0$, so $a=1$. Dividing by $x+3$ leaves $2x^2-5x+2=(2x-1)(x-2)$, whose zeros $\\frac{1}{2}$ and $2$ sum to $\\frac{5}{2}$.",
      "$2$ is only one of the two remaining zeros, from the factor $x-2$. The other is $\\frac{1}{2}$, so the sum is $\\frac{5}{2}$."
    ]
  },
  "q:05813737b321265b": {
    "options": [
      "$1{,}650$",
      "$1{,}875$",
      "$2{,}259$",
      "$2{,}475$"
    ],
    "explanations": [
      "$1{,}650$ is $1250\\times1.32$, applying the increase but keeping the $8$-hour shift. The new shift is $12$ hours long, so use the hourly rate.",
      "$1{,}875$ is $156.25\\times12$, a $12$-hour shift at the old rate. It leaves out the $32$ percent upgrade.",
      "$2{,}259$ comes from $(156.25+32)\\times12$, adding $32$ units per hour instead of $32$ percent. A percent increase multiplies the rate by $1.32$.",
      "The original rate is $1250\\div8=156.25$ units per hour. The upgrade makes it $156.25\\times1.32=206.25$, and $12$ hours give $206.25\\times12=2{,}475$ units."
    ]
  },
  "q:10855faa577b581d": {
    "options": [
      "-2",
      "2",
      "6",
      "9"
    ],
    "explanations": [
      "$-2$ would need $x$ and $y$ to have opposite signs, but $x=3$ and $y=2$ are both positive. Their product is $6$.",
      "$2$ is the value of $y$, an intermediate result. The question asks for the product $xy=3\\cdot2=6$.",
      "Adding the equations gives $2x=6$, so $x=3$, and then $y=5-3=2$. The product is $xy=3\\cdot2=6$.",
      "$9$ is $x^2=3^2$, squaring $x$ instead of multiplying by $y$. With $y=2$, the product $xy$ is $6$."
    ]
  },
  "q:f42a15d286e9db0c": {
    "options": [
      "$(0, 2)$",
      "$(1, 10)$",
      "$(0, 5)$",
      "$(2, 0)$"
    ],
    "explanations": [
      "The $y$-intercept is where $x=0$. Since $5^0=1$, $f(0)=2\\cdot1=2$, giving the point $(0,2)$.",
      "$(1,10)$ is the point at $x=1$, where $f(1)=2\\cdot5=10$. The $y$-intercept requires $x=0$.",
      "$(0,5)$ uses the base $5$ as the intercept. At $x=0$ the base contributes $5^0=1$, so the intercept is the coefficient, $2$.",
      "$(2,0)$ swaps the coordinates of the intercept and would be an $x$-intercept. An exponential like $2\\cdot5^x$ is always positive, so it never reaches $y=0$."
    ]
  },
  "q:7bedf6329df0c5f5": {
    "options": [
      "8",
      "9",
      "16",
      "4"
    ],
    "explanations": [
      "$8$ is the exponent on base $2$, not on base $4$. Since $4^x=2^{2x}$, the equation is $2x=8$, giving $x=4$.",
      "$4^9=2^{18}$, far larger than $2^8$. Rewriting $4^x$ as $2^{2x}$ and matching exponents gives $2x=8$, so $x=4$.",
      "$16$ comes from multiplying by $2$ instead of dividing in $2x=8$. Check: $4^{16}=2^{32}$, not $2^8$.",
      "Write $4$ as $2^2$, so $4^x=2^{2x}$. Matching exponents, $2x=8$ and $x=4$; check: $4^4=256=2^8$."
    ]
  },
  "q:0b625e17375fd00d": {
    "options": [
      "$-1$",
      "$-\\frac{1}{6}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{6}$"
    ],
    "explanations": [
      "$-1$ is the sum of the other two zeros themselves, $-3+2$. The question asks for the sum of their reciprocals, $-\\frac{1}{3}+\\frac{1}{2}=\\frac{1}{6}$.",
      "$-\\frac{1}{6}$ comes from reading $(x+3)(x-2)$ as zeros $3$ and $-2$, a sign flip. The zeros are $-3$ and $2$, whose reciprocals sum to $+\\frac{1}{6}$.",
      "$\\frac{1}{2}$ is the reciprocal of the zero $2$ alone. The reciprocal of $-3$, which is $-\\frac{1}{3}$, must be added, giving $\\frac{1}{6}$.",
      "Dividing by $x-1$ gives $x^2+x-6=(x+3)(x-2)$, so the other zeros are $-3$ and $2$. Their reciprocals sum to $-\\frac{1}{3}+\\frac{1}{2}=\\frac{1}{6}$."
    ]
  },
  "q:1c87b9aeecefa797": {
    "options": [
      "2.25",
      "5.65",
      "11.31",
      "15.08"
    ],
    "explanations": [
      "$2.25$ is the number of revolutions in $45$ seconds, $3(0.75)$, not a distance. Each revolution moves a rim point $2\\pi(0.8)$ meters.",
      "$5.65$ uses $\\pi r$ per revolution, half the circumference. One full turn moves a rim point $2\\pi(0.8)\\approx5.027$ m, so the distance is $11.31$ m.",
      "One revolution is $2\\pi(0.8)\\approx5.027$ m. In $45$ seconds, or $0.75$ minute, the stone turns $2.25$ times, so the distance is $2.25(5.027)\\approx11.31$ m.",
      "$15.08$ is the distance for a full minute, $3$ revolutions. The time is $45$ seconds, only $0.75$ of a minute, giving $2.25$ revolutions."
    ]
  },
  "q:d51920c2f33a8a6a": {
    "options": [
      "3.03",
      "8.25",
      "25.00",
      "6.06"
    ],
    "explanations": [
      "$3.03$ is $\\frac{25}{\\sqrt{68}}$, forgetting the $\\frac{1}{2}$ in the area formula when solving for $h$. From $25=\\frac{1}{2}\\sqrt{68}\\,h$, $h=\\frac{50}{\\sqrt{68}}\\approx6.06$.",
      "$8.25$ is the length of the base from $(-3,1)$ to $(5,-1)$, $\\sqrt{68}$. The altitude is a different segment, found from the area.",
      "$25.00$ is the triangle's area, an intermediate value. The altitude comes from $25=\\frac{1}{2}\\sqrt{68}\\,h$.",
      "The triangle's area is $25$, from the enclosing $8$ by $7$ rectangle minus three right triangles. The base is $\\sqrt{68}$, so $h=\\frac{50}{\\sqrt{68}}\\approx6.06$."
    ]
  },
  "q:99f50d0601dc43ba": {
    "options": [
      "$x = 0$",
      "$-3 < x < 3$",
      "$x < -3$ or $x > 3$",
      "$-3 \\le x \\le 3$"
    ],
    "explanations": [
      "$x=0$ is one solution, but not the only one. Every number within $3$ units of $0$ works, such as $x=2$ or $x=-1.5$.",
      "$|x|<3$ means $x$ is less than $3$ units from $0$. That is every number strictly between $-3$ and $3$: $-3<x<3$.",
      "$x<-3$ or $x>3$ is the solution of $|x|>3$, the points farther than $3$ from $0$. The inequality direction is reversed.",
      "$-3\\le x\\le3$ includes the endpoints, but $|3|=3$ is not less than $3$. A strict inequality excludes them."
    ]
  },
  "q:fba7067c580dc47c": {
    "options": [
      "4,760",
      "1,587",
      "1,400",
      "2,100"
    ],
    "explanations": [
      "$4{,}760$ uses $\\frac{340}{450}$, the column total for all groups over the parents row total. The numerator must be the parents' own count, $100$.",
      "$1{,}587$ applies $\\frac{340}{1350}$, the strongly-agree rate for everyone surveyed, to a parents-only population. The rate must come from the parents row.",
      "The missing cell is $340-84-156=100$, which checks against $100+220+130=450$. The parents' rate is $\\frac{100}{450}$, and $\\frac{100}{450}(6{,}300)=1{,}400$.",
      "$2{,}100$ scales $\\frac{450}{1350}$, the parents' share of the sample, to $6{,}300$. That fraction says nothing about agreement."
    ]
  },
  "q:dfe5f361228bc4c0": {
    "options": [
      "350",
      "50",
      "200",
      "300"
    ],
    "explanations": [
      "The top piece is a pyramid similar to the original with scale factor $\\frac{1}{2}$, so its volume is $\\left(\\frac{1}{2}\\right)^3(400)=50$. The base piece is $400-50=350$.",
      "$50$ is the volume of the top piece, the small pyramid containing the apex. The question asks for the base piece, $400-50=350$.",
      "$200$ assumes cutting at half the height splits the volume in half. Volume scales with the cube of the length ratio, so the top is only $\\frac{1}{8}$ of the whole.",
      "$300$ gives the top piece $\\left(\\frac{1}{2}\\right)^2(400)=100$, applying the area factor. Volume scales by the cube, $\\frac{1}{8}$, so the top is $50$."
    ]
  },
  "q:9cd49f1282664096": {
    "options": [
      "$16x$",
      "$-8x - 1$",
      "$-4x + 4$",
      "$16x + 4$"
    ],
    "explanations": [
      "$16x$ distributes the $-4$ to the $-4x$ only and drops the $-1$. The constant also gets multiplied: $-4(-1)=4$.",
      "$-8x-1$ is $f(x)+g(x)$, adding the functions instead of composing them. Composition substitutes $g(x)$ into $f$.",
      "$-4x+4$ multiplies only the constant by $-4$ and leaves $-4x$ unchanged. Both terms must be multiplied: $-4(-4x)=16x$.",
      "Composition means substituting the whole expression $g(x)$ into $f$: $f(g(x))=-4(-4x-1)$. Distributing the $-4$ to both terms gives $16x+4$."
    ]
  },
  "q:64467171e9a1388c": {
    "options": [
      "$375$",
      "$500$",
      "$250$",
      "$125$"
    ],
    "explanations": [
      "At $125$ feet, $v=2\\sqrt{625}=50$. Doubling to $100$ gives $\\sqrt{5d}=50$, so $d=500$. The additional distance is $500-125=375$ feet.",
      "$500$ is the new stopping distance at $100$ miles per hour. The question asks how many more feet, so subtract the original $125$.",
      "$250$ assumes stopping distance doubles when speed doubles. Since $d$ is under a square root, doubling $v$ multiplies $d$ by $4$.",
      "$125$ is the original stopping distance, a given value. At twice the speed the distance becomes $500$, which is $375$ feet more."
    ]
  },
  "q:c27e0e46d217a883": {
    "options": [
      "5.9",
      "21.9",
      "75.0",
      "6.1"
    ],
    "explanations": [
      "$5.9$ is $21(0.28)$, multiplying the run by the sine. The sine relates the rise to the rafter (hypotenuse), not to the horizontal run, so find the rafter first.",
      "$21.9$ is the rafter's length, $\\frac{21}{0.96}\\approx21.875$, an intermediate value. The rise is that length times $0.28$, about $6.1$ feet.",
      "$75.0$ is $\\frac{21}{0.28}$, treating the run as the side opposite the angle. The run is adjacent, so it pairs with cosine, not sine.",
      "$\\cos x=\\sqrt{1-0.28^2}=0.96$, so the rafter is $\\frac{21}{0.96}=21.875$ feet. The rise is $21.875(0.28)\\approx6.1$ feet."
    ]
  },
  "q:c08e98a340bb6a4c": {
    "options": [
      "$5000(1.02)^{m/3}$",
      "$5000(1.02)^{3m}$",
      "$5000(1.08)^{m/12}$",
      "$5000(1.0067)^{m}$"
    ],
    "explanations": [
      "Each quarter multiplies the balance by $1.02$, and $m$ months contain $\\frac{m}{3}$ quarters. So the value is $5000(1.02)^{m/3}$.",
      "$5000(1.02)^{3m}$ inverts the conversion, counting three quarters per month. There is one quarter per three months, so the exponent is $\\frac{m}{3}$.",
      "$5000(1.08)^{m/12}$ compounds once a year at $8$ percent, ignoring the quarterly compounding. It understates the growth of the account described.",
      "$5000(1.0067)^{m}$ divides the annual rate by $12$, which describes monthly compounding. This account compounds quarterly by $1.02$."
    ]
  },
  "q:b5ff7dbd2b8f4fa8": {
    "options": [
      "Unchanged in strength and direction",
      "Stronger, and now positive",
      "Stronger, and still negative",
      "Weaker, and still negative"
    ],
    "explanations": [
      "The association is not unchanged: the removed point lay far from the trend, so without it the remaining points lie closer to a line and the association gets stronger.",
      "Strength does increase, but the direction does not flip. The other $19$ points already show a negative trend, and removing an outlier cannot reverse it.",
      "The removed point lay far from the trend, so without it the points cluster more tightly around a line: stronger. The remaining points still trend downward: negative.",
      "Removing an outlier that lay far from the trend makes the fit tighter, not looser. The association becomes stronger, not weaker."
    ]
  },
  "q:816c0e971fa900fe": {
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "explanations": [
      "$\\frac{1}{2}$ is $\\cos(60°)$ or $\\sin(30°)$. In a 45-45-90 triangle the ratio is $\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$.",
      "$\\frac{\\sqrt{3}}{2}$ is $\\cos(30°)$, from the 30-60-90 triangle. A $45°$ angle uses the 45-45-90 triangle, giving $\\frac{\\sqrt{2}}{2}$.",
      "$1$ is $\\cos(0°)$, or $\\tan(45°)$, since the legs are equal. Cosine divides the leg $1$ by the hypotenuse $\\sqrt{2}$.",
      "A 45-45-90 triangle has sides $1$, $1$, $\\sqrt{2}$. Cosine is the adjacent leg over the hypotenuse, so $\\cos(45°)=\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$."
    ]
  },
  "q:32d77525a3977a99": {
    "options": [
      "The predicted price, in dollars, after 10 years",
      "The number of years until the price is 230 dollars",
      "The predicted yearly increase in price, in dollars",
      "The predicted price, in dollars, of the bicycle in 2005"
    ],
    "explanations": [
      "The price after $10$ years would be $10(10)+220=320$ dollars. The $10$ in the equation is the slope, not a number of years.",
      "A price of $230$ dollars occurs at $x=1$, so that reading confuses the constant with a time. $220$ is the value of $y$ when $x=0$.",
      "The yearly increase is the slope, $10$ dollars per year. $220$ is the constant term, the starting value.",
      "When $x=0$, which is the year 2005, $y=220$. So $220$ is the predicted price in 2005."
    ]
  },
  "q:a9b1d070161e8417": {
    "options": [
      "-5",
      "-9",
      "1",
      "-6"
    ],
    "explanations": [
      "The $y$-intercept is the output where the graph crosses the $y$-axis, at $x=0$. Substituting, $f(0)=-0-5=-5$.",
      "$-9$ is $f(4)=-4-5$, the output at a nonzero input. The $y$-intercept requires $x=0$, giving $-5$.",
      "$1$ is $f(-6)=6-5$, the output at $x=-6$. At $x=0$ the value is $-5$.",
      "$-6$ is $f(1)=-1-5$, using $x=1$ instead of $x=0$. The $y$-intercept is $f(0)=-5$."
    ]
  },
  "q:595b22b3143ff76e": {
    "options": [
      "$y \\ge 0$",
      "$y \\ge 6$",
      "All real numbers",
      "$y \\ge -6$"
    ],
    "explanations": [
      "$y\\ge0$ is the range of $|x|$ alone. Multiplying by $5$ and adding $6$ shifts the minimum up to $6$.",
      "Since $|x|\\ge0$, the smallest output is $5(0)+6=6$, and outputs grow without bound. The range is $y\\ge6$.",
      "All real numbers ignores the absolute value. $5|x|$ is never negative, so $f(x)$ is never below $6$.",
      "$y\\ge-6$ flips the sign of the constant. The function adds $6$, so its minimum is $+6$."
    ]
  },
  "q:9e2c8eece9fd11ab": {
    "options": [
      "$-\\frac{5}{2}$",
      "$5$",
      "$\\frac{15}{2}$",
      "$\\frac{5}{2}$"
    ],
    "explanations": [
      "$-\\frac{5}{2}$ is the $y$-intercept value alone, $f(0)$. The question asks for its sum with the $x$-intercept $5$.",
      "$5$ is the $x$-intercept alone, from $x-5=0$. The $y$-intercept $-\\frac{5}{2}$ must be added.",
      "$\\frac{15}{2}$ is $5-\\left(-\\frac{5}{2}\\right)$, subtracting the $y$-intercept instead of adding it, which loses its negative sign. The sum is $5+\\left(-\\frac{5}{2}\\right)=\\frac{5}{2}$.",
      "The $x$-intercept is where $x-5=0$, so $x=5$. The $y$-intercept is $f(0)=-\\frac{5}{2}$. Their sum is $\\frac{5}{2}$."
    ]
  },
  "q:a305b1463ab92b7e": {
    "options": [
      "$11.5$",
      "$12$",
      "$20$",
      "$16$"
    ],
    "explanations": [
      "$11.5$ is $\\frac{26.50-3.50}{2.00}$, charging every mile at the first-tier rate. Only the first $4$ miles cost $2.00$ each.",
      "$12$ is the mileage beyond the first $4$ miles, $\\frac{15.00}{1.25}$, an intermediate value. The trip total is $4+12=16$ miles.",
      "$20$ adds the $8$ dollars for the first $4$ miles to the $12$ extra miles instead of adding $4$ miles. A $20$-mile trip would cost $31.50$ dollars.",
      "The first $4$ miles cost $3.50+8.00=11.50$ dollars. The remaining $15.00$ dollars buys $\\frac{15.00}{1.25}=12$ more miles, so the trip was $16$ miles."
    ]
  },
  "q:d16a43fcd1b8d990": {
    "options": [
      "2.75",
      "2.4",
      "3.5",
      "3.1"
    ],
    "explanations": [
      "$2.75$ averages $4.5$ and $1.0$ without weighting. That works only for equal group sizes, but there are $150$ researchers and $100$ students.",
      "$2.4$ reverses the group sizes: $\\frac{100(4.5)+150(1.0)}{250}$. Researchers are the $60$ percent, so there are $150$ of them.",
      "$3.5$ is $4.5-1.0$, the difference between the group means. That measures a gap, not the overall mean.",
      "There are $150$ researchers and $100$ students. Total experience is $150(4.5)+100(1.0)=775$ years, so the mean is $\\frac{775}{250}=3.1$."
    ]
  },
  "q:0cb29ad62e71fc1a": {
    "options": [
      "19",
      "23",
      "34",
      "26"
    ],
    "explanations": [
      "$19$ comes from making the second-smallest value as large as possible, $18$, which leaves $d=19$. That minimizes the second-largest value instead of maximizing it.",
      "$23$ splits the remaining sum $b+d=37$ nearly evenly. To maximize $d$, make $b$ as small as possible, $11$, which gives $26$.",
      "$34$ is the largest value in the set. The question asks for the second-largest, the fourth value in order.",
      "The values are $11, b, 18, d, 34$ with total $100$, so $b+d=37$. The smallest allowed $b$ is $11$, giving $d=26$, which fits $18\\le26\\le34$."
    ]
  },
  "q:b176f0507a016766": {
    "options": [
      "143",
      "271",
      "253",
      "284"
    ],
    "explanations": [
      "$143$ is smaller than the starting $254$, but the population grows. A $12$ percent increase gives $254(1.12)\\approx284$.",
      "$271$ adds only about $17$, less than the $12$ percent increase of $254(0.12)\\approx30.5$. The new population is $254(1.12)\\approx284$.",
      "$253$ is slightly below $254$, which would mean a small decrease. Growth of $12$ percent multiplies by $1.12$, giving about $284$.",
      "Growing $12$ percent multiplies the population by $1.12$. So after one year it is $254(1.12)=284.48$, which rounds to $284$."
    ]
  },
  "q:c96acaa212d97f64": {
    "options": [
      "0.17",
      "0.32",
      "0.47",
      "0.40"
    ],
    "explanations": [
      "$0.17$ is $\\frac{84}{500}$, dividing by all members. The selection is only among the $260$ members who do not attend in the evening, so the denominator is $260$.",
      "Non-evening members are $160+100=260$. Of them, $60+24=84$ prefer Spin, so the probability is $\\frac{84}{260}\\approx0.32$.",
      "$0.47$ is $\\frac{84}{180}$, dividing by the Spin row total. That answers the reversed question: what fraction of Spin members avoid the evening.",
      "$0.40$ is $\\frac{96}{240}$, the Spin share of the evening members. Those are exactly the members the question excludes."
    ]
  },
  "q:8ae8ad3e800cb688": {
    "options": [
      "32",
      "25",
      "18",
      "13"
    ],
    "explanations": [
      "$32$ is far more than the circumference $2\\pi(2)\\approx12.57$. It does not come from the formula $C=2\\pi r$ with $r=2$.",
      "$25$ is about $2\\pi(4)$, using the diameter $4$ as if it were the radius. With $r=2$, the circumference is $2\\pi(2)\\approx13$.",
      "$18$ does not match $2\\pi(2)\\approx12.57$. The circumference of a circle with radius $2$ rounds to $13$.",
      "Circumference uses the formula $C=2\\pi r$. With a radius of $2$, $C=4\\pi\\approx12.57$, which rounds to the nearest integer $13$."
    ]
  },
  "q:6fd2cf33e3dfba47": {
    "options": [
      "25",
      "7",
      "16",
      "3"
    ],
    "explanations": [
      "$25$ does not arise from evaluating $g(1)=1$ and then $f(1)=3$. Even the reversed order gives $g(f(1))=9$, not $25$.",
      "$7$ does not come from the correct steps. Work inside out: $g(1)=1$, then $f(1)=1+2=3$.",
      "$16$ does not come from the composition. The inside function gives $g(1)=1^2=1$, and the outside gives $f(1)=3$.",
      "Work from the inside out. First $g(1)=1^2=1$, and then that output goes into $f$: $f(1)=1+2=3$, so $f(g(1))=3$."
    ]
  },
  "q:2c4256c8cba1946f": {
    "options": [
      "$72\\pi$",
      "$36\\pi$",
      "$144\\pi$",
      "$25\\pi$"
    ],
    "explanations": [
      "$72\\pi$ is $2\\pi r^2$, doubling the area. The area formula is $\\pi r^2=\\pi(6)^2=36\\pi$.",
      "The area of a circle is $\\pi$ times the radius squared, $A=\\pi r^2$. With a radius of $6$, $A=\\pi(36)=36\\pi$.",
      "$144\\pi$ is $\\pi(12)^2$, using the diameter $12$ instead of the radius $6$. The area is $\\pi(6)^2=36\\pi$.",
      "$25\\pi$ is $\\pi(5)^2$, the area for radius $5$. With radius $6$, the area is $36\\pi$."
    ]
  },
  "q:58be4de0dba33369": {
    "options": [
      "$w \\ge 22$",
      "$w < 19$",
      "$w = 22$",
      "$w \\le 22$"
    ],
    "explanations": [
      "$w\\ge22$ reverses the inequality. Perimeter at most $82$ caps the width: $38+2w\\le82$ gives $w\\le22$.",
      "$w<19$ compares the width to the length, which the problem never requires. The perimeter condition gives $w\\le22$.",
      "$w=22$ is only the largest allowed width. 'At most $82$' allows any perimeter up to $82$, so $w\\le22$.",
      "The perimeter is $2(19)+2w=38+2w$. Requiring that it be at most $82$ gives $38+2w\\le82$, so $2w\\le44$ and $w\\le22$."
    ]
  },
  "q:af6e4d9a5702f263": {
    "options": [
      "$x \\ge 0$",
      "$0 \\le x \\le 6$",
      "$x < 0$ or $x > 6$",
      "$x = 3$"
    ],
    "explanations": [
      "$x\\ge0$ keeps only the lower bound. $|x-3|\\le3$ also requires $x\\le6$, so values like $x=10$ fail.",
      "$|x-3|\\le3$ means $x$ is within $3$ of $3$. So $-3\\le x-3\\le3$, giving $0\\le x\\le6$.",
      "$x<0$ or $x>6$ is the solution of $|x-3|>3$, the points farther than $3$ from $3$. The direction is reversed.",
      "$x=3$ is only the center, where $|x-3|=0$. Every $x$ within $3$ units of $3$ also satisfies the inequality."
    ]
  },
  "q:06a772e8b615ba92": {
    "options": [
      "There is no solution.",
      "$x=1$",
      "$x=0$ and $x=1$",
      "$x=0$"
    ],
    "explanations": [
      "There is a solution: $x=0$ makes no denominator zero and satisfies the equation, since $\\frac{0}{-1}-2=-2$ and $\\frac{2}{-1}=-2$. Only $x=1$ is discarded.",
      "$x=1$ is the extraneous root. It makes $x-1$ and $x^2-1$ zero, so the original equation is undefined there.",
      "Both values come from $x(x-1)=0$, but $x=1$ was never checked. It makes the denominators zero, so it must be discarded.",
      "Multiplying by $(x-1)(x+1)$ gives $x(x+1)-2(x-1)=2$, so $x^2-x=0$ and $x=0$ or $x=1$. Since $x=1$ makes denominators zero, only $x=0$ remains."
    ]
  },
  "q:c355bcac3ebae0ee": {
    "options": [
      "679",
      "170",
      "1357",
      "1810"
    ],
    "explanations": [
      "The sector area is $\\frac{135}{360}\\pi(12)^2\\approx169.6$ m$^2$. In $30$ minutes the depth is $0.004$ m, so the volume is about $0.6786$ m$^3$, or $679$ liters.",
      "$170$ is the sector's area in square meters, not a volume. It still has to be multiplied by the depth and converted to liters.",
      "$1357$ uses a full hour of watering, a depth of $0.8$ cm. In $30$ minutes the depth is only $0.4$ cm, half as much.",
      "$1810$ waters the entire circle, $144\\pi$ m$^2$. The sprinkler covers only a $135$-degree sector, $\\frac{3}{8}$ of the circle."
    ]
  },
  "q:f79e8c9011be4d16": {
    "options": [
      "4,800",
      "12,500",
      "18,000",
      "17,280"
    ],
    "explanations": [
      "Hybrid mid-size vehicles are $\\frac{96}{900}$ of the sample. Scaling to $45{,}000$ gives $\\frac{96}{900}(45{,}000)=4{,}800$.",
      "$12{,}500$ scales the Hybrid row total, $\\frac{250}{900}$, which counts hybrids of every size. Only the mid-size cell, $96$, applies.",
      "$18{,}000$ scales the Mid-size column total, $\\frac{360}{900}$, which counts mid-size vehicles of every fuel type. Only the hybrid cell, $96$, applies.",
      "$17{,}280$ applies $\\frac{96}{250}$, the fraction of hybrids that are mid-size, to all $45{,}000$ vehicles. That rate belongs to hybrids only, not the full population."
    ]
  },
  "q:09741824708df6e8": {
    "options": [
      "$x^2 + (y + 4)^2 = 4$",
      "$x^2 + (y - 4)^2 = 16$",
      "$x^2 + (y + 4)^2 = 32$",
      "$x^2 + (y + 4)^2 = 16$"
    ],
    "explanations": [
      "The right side must be $r^2$, not $r$. With radius $4$ it is $16$, so $4$ describes a circle of radius $2$.",
      "$(y-4)^2$ puts the center at $(0,4)$, a sign flip. A center at $y=-4$ requires $(y+4)^2$.",
      "$32$ is $2r^2$ rather than $r^2$. The right side should be $4^2=16$.",
      "The standard form is $(x-h)^2+(y-k)^2=r^2$. With center $(0,-4)$ and $r=4$, that is $x^2+(y+4)^2=16$."
    ]
  },
  "q:0246438cbdd6b74a": {
    "options": [
      "$-31$",
      "$2$",
      "$5$",
      "$9$"
    ],
    "explanations": [
      "From $(5,9)$, $4a=8$ so $a=2$. Setting $2x^2-12x+19=8x+b$ gives $2x^2-20x+(19-b)=0$, and a zero discriminant, $400-8(19-b)=0$, gives $b=-31$.",
      "$2$ is the value of $a$, the first intermediate step. It fixes the parabola, but $b$ still comes from the tangency condition.",
      "$5$ is the $x$-coordinate of the point of tangency, the double root of $2(x-5)^2=0$. The question asks for the intercept $b$.",
      "$9$ is the $y$-coordinate of the tangency point, which is also the given point $(5,9)$. The line's intercept is $b=9-8(5)=-31$."
    ]
  },
  "q:22b77f807016e40b": {
    "options": [
      "$18$",
      "$8$",
      "$6$",
      "$4$"
    ],
    "explanations": [
      "$18$ pairs the least value $2$ with $16$, the bound from the first inequality. That bound is not binding, because $y\\ge x-2$ forces $a\\le6$.",
      "With $y=4$: the first inequality gives $a\\le16$, the second $a\\ge2$, the third $a\\le6$. So $2\\le a\\le6$, and $2+6=8$.",
      "$6$ is the greatest value alone, an intermediate result. The least value $2$ must be added.",
      "$4$ is $6-2$, the difference of the extremes. The question asks for the sum, $2+6=8$."
    ]
  },
  "q:0deb50bc07fbde12": {
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$3$",
      "$6$"
    ],
    "explanations": [
      "$\\frac{3}{4}$ is the original $y$-coefficient, used without scaling. To match $2x$ the first equation must be multiplied by $4$, making the $y$-coefficient $3$.",
      "$\\frac{4}{3}$ is the reciprocal of $\\frac{3}{4}$. Scaling the first equation by $4$ gives $2x+3y=28$, so parallel lines need $k=3$.",
      "Multiplying the first equation by $4$ gives $2x+3y=28$. With $k=3$ the left sides match but $28\\ne19$, so the lines are parallel and there is no solution.",
      "$6$ comes from multiplying the first equation by $8$, which makes its $x$-coefficient $4$, not $2$. The coefficients no longer match, so the lines would intersect."
    ]
  },
  "q:9c339f3f1b4c9ac2": {
    "options": [
      "72",
      "35",
      "59",
      "38"
    ],
    "explanations": [
      "At $72$ mph the car would cover $144$ miles in $2$ hours, not $118$. Average speed is $\\frac{118}{2}=59$ mph.",
      "At $35$ mph the car would cover only $70$ miles in $2$ hours. Dividing the distance by the time gives $59$ mph.",
      "Average speed is total distance over total time: $\\frac{118}{2}=59$ miles per hour.",
      "At $38$ mph the car would travel $76$ miles in $2$ hours. The given $118$ miles over $2$ hours is $59$ mph."
    ]
  },
  "q:0aea043cffca86d4": {
    "options": [
      "$1$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$0$",
      "$\\sqrt{3}$"
    ],
    "explanations": [
      "In a 45-45-90 triangle the two legs are equal, so opposite over adjacent is $1$. Equivalently, $\\frac{\\sin45°}{\\cos45°}=1$.",
      "$\\frac{\\sqrt{3}}{3}$ is $\\tan(30°)$, from the 30-60-90 triangle. At $45°$ the legs are equal, giving $1$.",
      "$0$ is $\\tan(0°)$, where the opposite side has no length. At $45°$ the opposite and adjacent legs are equal, giving $1$.",
      "$\\sqrt{3}$ is $\\tan(60°)$. At $45°$, sine and cosine are equal, so their ratio is $1$."
    ]
  },
  "q:5b5cd5fa13973fb5": {
    "options": [
      "78",
      "80",
      "59",
      "105"
    ],
    "explanations": [
      "The area of a rectangle is its length times its width. Here that is $13\\times6=78$ square units.",
      "$80$ is not $13\\times6$; it is close but $2$ too large. Multiplying the dimensions gives $78$.",
      "$59$ does not match $13\\times6=78$. Any arithmetic slip that drops the product below $78$ is wrong.",
      "$105$ is too large; it would need a width of about $8$. The area is $13\\times6=78$."
    ]
  },
  "q:c7b98171547ead5b": {
    "options": [
      "$6 \\times 10^{4}$",
      "$6 \\times 10^{5}$",
      "$6 \\times 10^{3}$",
      "$6 \\times 10^{-4}$"
    ],
    "explanations": [
      "Moving the decimal point $4$ places left turns $60{,}000$ into $6$, so $60{,}000=6\\times10^4$.",
      "$6\\times10^5$ is $600{,}000$, one place too many. $60{,}000$ has four zeros after the $6$, so the exponent is $4$.",
      "$6\\times10^3$ is $6{,}000$, one place too few. The exponent must be $4$ to reach $60{,}000$.",
      "$6\\times10^{-4}$ is $0.0006$, a small number. A negative exponent is for values below $1$; $60{,}000$ needs $+4$."
    ]
  },
  "q:b8b53c62a7379487": {
    "options": [
      "$8a + 13b \\ge 500$, $a + b \\le 50$, $a \\ge 2b$",
      "$8a + 13b \\ge 500$, $a + b \\le 50$, $2a \\ge b$",
      "$8a + 13b \\le 500$, $a + b \\le 50$, $a \\ge 2b$",
      "$8a + 13b \\ge 500$, $a + b \\ge 50$, $a \\ge 2b$"
    ],
    "explanations": [
      "Weight at least $500$ gives $8a+13b\\ge500$; no more than $50$ boxes gives $a+b\\le50$; at least twice as many type-A gives $a\\ge2b$.",
      "$2a\\ge b$ attaches the multiplier to the wrong variable. 'At least twice as many type-A as type-B' means $a\\ge2b$.",
      "$8a+13b\\le500$ turns the weight minimum into a maximum. 'At least $500$ pounds' requires $\\ge$.",
      "$a+b\\ge50$ turns the box cap into a minimum. 'No more than $50$ boxes' requires $a+b\\le50$."
    ]
  },
  "q:5d514c52e9448477": {
    "options": [
      "$8x(x + 1)$",
      "$2x(4x + 1)$",
      "$x(8x + 1)$",
      "$4x(2x + 1)$"
    ],
    "explanations": [
      "$8x(x+1)$ expands to $8x^2+8x$, not $8x^2+2x$. The factor $8x$ does not divide $2x$ evenly.",
      "The greatest common factor of $8x^2$ and $2x$ is $2x$. Dividing it out leaves $4x+1$, so $8x^2+2x=2x(4x+1)$.",
      "$x(8x+1)$ expands to $8x^2+x$, not $8x^2+2x$. It also leaves the common factor $2$ unfactored.",
      "$4x(2x+1)$ expands to $8x^2+4x$, not $8x^2+2x$. The greatest common factor is $2x$, not $4x$."
    ]
  },
  "q:12f4bbf96cc87a2d": {
    "options": [
      "$8$",
      "$11$",
      "$10$",
      "$7$"
    ],
    "explanations": [
      "$8$ drinks with $5$ buckets cost $37.50+34.00=71.50$ dollars, so it is allowed but not the greatest. The group can afford $10$ drinks.",
      "$11$ drinks means $8$ buckets, costing $60+46.75=106.75$ dollars, over the $95$-dollar limit. That comes from rounding $p$ up.",
      "With $p$ buckets and $p+3$ drinks, $11.75p+12.75\\le95$ gives $p\\le7$. So the group buys $7+3=10$ drinks, costing exactly $95$ dollars.",
      "$7$ is the number of popcorn buckets, the value the inequality solves for. The question asks for drinks, $7+3=10$."
    ]
  },
  "q:528dea3baaf34ca6": {
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "explanations": [
      "$\\frac{1}{2}$ is $\\sin(30°)$. At $60°$ the opposite side is the longer leg $\\sqrt{3}$, so the sine is $\\frac{\\sqrt{3}}{2}$.",
      "$\\frac{\\sqrt{3}}{3}$ is $\\tan(30°)$, which divides two legs. Sine divides the opposite side by the hypotenuse $2$, which gives $\\frac{\\sqrt{3}}{2}$ at $60°$.",
      "In a 30-60-90 triangle with sides $1$, $\\sqrt{3}$, $2$, the side opposite $60°$ is $\\sqrt{3}$. So $\\sin(60°)=\\frac{\\sqrt{3}}{2}$.",
      "$\\frac{\\sqrt{2}}{2}$ is $\\sin(45°)$, from the 45-45-90 triangle. At $60°$ the value is $\\frac{\\sqrt{3}}{2}$."
    ]
  },
  "q:4353789200bd18d6": {
    "options": [
      "$\\frac{13}{27}$",
      "$\\frac{13}{14}$",
      "$\\frac{1}{13}$",
      "$\\frac{14}{27}$"
    ],
    "explanations": [
      "The chooser is a soccer player, so the denominator is all $27$ soccer players. Of them, $13$ play basketball, giving $\\frac{13}{27}$.",
      "$\\frac{13}{14}$ divides by the $14$ soccer players who do not play basketball. The pool is all $27$ soccer players.",
      "$\\frac{1}{13}$ treats the problem as picking one specific basketball player out of $13$. The probability counts the $13$ favorable players out of all $27$ soccer players.",
      "$\\frac{14}{27}$ is the probability that the player does not play basketball. It is the complement of $\\frac{13}{27}$."
    ]
  },
  "q:6a19c87be004ea4d": {
    "options": [
      "$y = 1188 - 13t$",
      "$y = 1188(13)^{-t}$",
      "$y = 1188(0.87)^t$",
      "$y = 1188(1.13)^t$"
    ],
    "explanations": [
      "$y=1188-13t$ subtracts a fixed $13$ each year, which is linear decay. Percent decay multiplies by $0.87$ each year.",
      "$y=1188(13)^{-t}$ divides by $13$ each year, a far faster drop. Losing $13$ percent keeps $87$ percent, a factor of $0.87$.",
      "Decaying $13$ percent leaves $1-0.13=0.87$ of the amount each year. So $y=1188(0.87)^t$.",
      "$y=1188(1.13)^t$ grows by $13$ percent each year. Decay requires a factor less than $1$, namely $0.87$."
    ]
  },
  "q:4c959273be67eb82": {
    "options": [
      "Both are equal",
      "Set B",
      "Set A",
      "Cannot determine"
    ],
    "explanations": [
      "The two are not equal. Set A's standard deviation is $0$ because every value is identical, while Set B's values are spread from $2$ to $18$, so its standard deviation is positive.",
      "Set A's values are identical, so its standard deviation is $0$. Set B's values lie from $2$ to $18$, spread around $10$, so its standard deviation is greater.",
      "Set A has no spread at all, with every value $10$, so its standard deviation is $0$. Set B's spread makes its standard deviation larger.",
      "No computation is needed. Identical values give a standard deviation of $0$, and any spread, as in Set B, gives a larger one."
    ]
  },
  "q:9e36ced179035ad9": {
    "options": [
      "$11$",
      "$12$",
      "$15$",
      "$29$"
    ],
    "explanations": [
      "Pallets weigh $870$ pounds; with the driver the load is $1060$. The remaining $740$ pounds allow $\\frac{740}{62}\\approx11.9$ crates, so $11$ fit.",
      "$12$ rounds $11.93$ up. Twelve crates bring the total to $1804$ pounds, over the $1{,}800$-pound limit.",
      "$15$ forgets the driver: $\\frac{1800-870}{62}=15$. The driver's $190$ pounds count toward the maximum.",
      "$29$ ignores both the pallets and the driver, $\\frac{1800}{62}\\approx29$. The van already holds $1060$ pounds."
    ]
  },
  "q:c78f56eac7de2368": {
    "options": [
      "$(1, 9)$",
      "$(1, 13)$",
      "$(2, 13)$",
      "$(4, 13)$"
    ],
    "explanations": [
      "$(1,9)$ applies the horizontal compression but forgets the $4$-unit shift up. The new $y$-value is $f(2)+4=13$.",
      "The transformed function is $g(x)=f(2x)+4$. Since $f(2)=9$, take $2x=2$, so $x=1$ and $g(1)=9+4=13$, giving the point $(1,13)$.",
      "$(2,13)$ applies the shift up but forgets the compression. Compressing toward the $y$-axis by a factor of $2$ halves the $x$-coordinate, from $2$ to $1$.",
      "$(4,13)$ doubles the $x$-coordinate, which is a horizontal stretch. A compression toward the $y$-axis halves it, giving $x=1$."
    ]
  },
  "q:44d7b1cb74c79eb1": {
    "options": [
      "78",
      "85",
      "82",
      "56"
    ],
    "explanations": [
      "$78$ would mean a tip of $29$ dollars, about $59$ percent of the bill. A $15$ percent tip on $49$ is about $7$, so the total is $56$.",
      "$85$ would mean a tip of $36$ dollars, far more than $15$ percent of $49$. The tip is $49(0.15)\\approx7$, giving $56$.",
      "$82$ would mean a tip of $33$ dollars, well over $15$ percent. The tip rounds to $7$ dollars, so the total is $49+7=56$.",
      "The tip is $49\\times0.15=7.35$, which rounds to $7$ dollars. The total is $49+7=56$ dollars."
    ]
  },
  "q:6812550464a33169": {
    "options": [
      "$8$",
      "$13$",
      "$19$",
      "$20$"
    ],
    "explanations": [
      "$8$ is $120\\div15$, dividing the sitting fee by one per-photo rate. The totals must be compared: $15p<120+9p$ gives $p<20$.",
      "$13$ is about $120\\div9$, dividing the sitting fee by the first studio's rate. Comparing totals, $6p<120$, so $p<20$ and the greatest count is $19$.",
      "The second studio is cheaper when $15p<120+9p$, so $6p<120$ and $p<20$. The greatest whole number is $19$: $285$ dollars versus $291$.",
      "$20$ is the break-even count, where both studios charge $300$ dollars. The second studio must be strictly less, so the greatest count is $19$."
    ]
  },
  "q:7c3f4a5cdcf9306f": {
    "options": [
      "$4$",
      "$6.5$",
      "$10$",
      "$12$"
    ],
    "explanations": [
      "$4$ is only the midpoint's $x$-coordinate, $\\frac{-2+10}{2}$. The $y$-coordinate $2.5$ must be added, giving $6.5$.",
      "$(a+2)^2+5^2=169$ gives $a+2=12$, so $a=10$ and $P=(10,5)$. The midpoint is $(4,2.5)$, and $4+2.5=6.5$.",
      "$10$ is the value of $a$, an intermediate step. The question asks for the sum of the midpoint's coordinates, $4+2.5=6.5$.",
      "$12$ is $a+2$, the horizontal distance from $A$ to $P$. It is a step toward finding $a$, not the midpoint's coordinate sum, which is $6.5$."
    ]
  },
  "q:d4e3898505a13a13": {
    "options": [
      "The Chess Club has the greater mean and the greater median.",
      "The two clubs have equal means, because each club has 15 members.",
      "The Robotics Club has the greater median, but the Chess Club has the greater mean.",
      "The Robotics Club has the greater mean and the greater median."
    ],
    "explanations": [
      "This reverses the comparison. Chess has total $19$, mean about $1.27$, median $1$; Robotics has total $33$, mean $2.2$, median $2$.",
      "Equal membership does not make the means equal. The totals differ, $19$ siblings for Chess and $33$ for Robotics, so the means are about $1.27$ and $2.2$.",
      "Robotics does have the greater median, $2$ versus $1$, but not a smaller mean. Its mean is $2.2$, above Chess's $1.27$.",
      "Each club has $15$ members. Robotics's mean is $\\frac{33}{15}=2.2$ and median $2$; Chess's mean is $\\frac{19}{15}\\approx1.27$ and median $1$. Robotics is higher on both."
    ]
  },
  "q:7e7604a65e64737c": {
    "options": [
      "$8$",
      "$12$",
      "$20$",
      "$28$"
    ],
    "explanations": [
      "$8$ is the value of $y$ alone, an intermediate result. The question asks for $x-y=20-8=12$.",
      "Subtracting the second equation from the first gives $x-y=104-92=12$ in one step. Solving fully, $x=20$ and $y=8$, which agrees.",
      "$20$ is the value of $x$ alone, one of the intermediate results of solving the system. Subtracting $y=8$ gives the requested $x-y=12$.",
      "$28$ is $x+y$, from adding the equations to get $7x+7y=196$. The question asks for the difference, which comes from subtracting them: $12$."
    ]
  },
  "q:ac81adb1a7892013": {
    "options": [
      "$15$",
      "$7$",
      "$8$",
      "$23$"
    ],
    "explanations": [
      "From $\\ell+w=23$ and $\\ell w=120$, the sides are roots of $x^2-23x+120=0$, which are $15$ and $8$. The longer side is $15$ meters.",
      "$7$ is $\\sqrt{529-480}$, the square-root term in the quadratic formula. The sides are $\\frac{23\\pm7}{2}$, so the computation is unfinished.",
      "$8$ is the shorter side, the other root of $x^2-23x+120=0$. The question asks for the longer side, $15$.",
      "$23$ is the semi-perimeter $\\ell+w$, the first step after halving $46$. A side cannot equal the sum of both sides."
    ]
  },
  "q:a720090d6b62ccef": {
    "options": [
      "$(2, -2)$",
      "$(1, -1)$",
      "$(-1, 1)$",
      "$(-1, -1)$"
    ],
    "explanations": [
      "$(2,-2)$ doubles the numbers in the binomials. In $(x-h)^2+(y-k)^2=r^2$, the center is $(h,k)$ exactly, which is $(1,-1)$.",
      "In the form $(x-h)^2+(y-k)^2=r^2$, $x-1$ gives $h=1$ and $y+1=y-(-1)$ gives $k=-1$. The center is $(1,-1)$.",
      "$(-1,1)$ flips both signs, reading the numbers as written. The form subtracts the center, so $x-1$ means $h=1$ and $y+1$ means $k=-1$.",
      "$(-1,-1)$ flips the sign of the $x$-coordinate only. Since $x-1$ appears, $h=+1$, so the center is $(1,-1)$."
    ]
  },
  "q:14a2f4610e052b44": {
    "options": [
      "A line segment on the line $x + y = 14$",
      "A square in the first quadrant",
      "The entire first quadrant and its axes",
      "A right triangle in the first quadrant"
    ],
    "explanations": [
      "The region is not just a segment on $x+y=14$. The $\\le$ includes every point below that line, down to the axes, which fills an area.",
      "A square would need two more vertical and horizontal boundaries. Here the slanted line $x+y=14$ cuts the corner, making a triangle.",
      "The entire first quadrant ignores $x+y\\le14$, which cuts off every point beyond that line. The region is bounded.",
      "The axes $x\\ge0$, $y\\ge0$ and the line $x+y\\le14$ bound a right triangle with vertices $(0,0)$, $(14,0)$ and $(0,14)$."
    ]
  },
  "q:f7296ca54f8165a2": {
    "options": [
      "$0$",
      "$5$",
      "$6$",
      "$8.9$"
    ],
    "explanations": [
      "Setting $x^2-4x-1=2x-6$ gives $(x-1)(x-5)=0$. On the line, the points are $(1,-4)$ and $(5,4)$, so the $y$-coordinates sum to $0$.",
      "$5$ is the product of the $x$-coordinates, $1\\cdot5$, from the constant of $x^2-6x+5$. The question asks for the sum of the $y$-coordinates.",
      "$6$ is the sum of the $x$-coordinates, $1+5$, the $-\\frac{b}{a}$ shortcut applied to the wrong variable. The $y$-values are $-4$ and $4$.",
      "$8.9$ is the distance between the points, $\\sqrt{4^2+8^2}=\\sqrt{80}$. That answers a different question; the $y$-coordinates sum to $0$."
    ]
  },
  "q:5c4ae26df316e6bb": {
    "options": [
      "1404",
      "1718",
      "1479",
      "1552"
    ],
    "explanations": [
      "Compounding yearly at $5$ percent multiplies by $1.05$ each year. So $A=1100(1.05)^5\\approx1100(1.2763)\\approx1404$ dollars.",
      "$1718$ is far too large; $1100(1.05)^5$ grows the principal by only about $28$ percent. That total implies a higher rate or more years.",
      "$1479$ implies about $34$ percent growth, more than $(1.05)^5\\approx1.276$ allows. The correct amount is about $1404$ dollars.",
      "$1552$ implies about $41$ percent growth, as if compounding ran about $7$ years. Five years at $5$ percent gives about $1404$ dollars."
    ]
  },
  "q:bee0ed7002da590c": {
    "options": [
      "$(8, 5)$",
      "$(0, 9)$",
      "$(6, 3)$",
      "$(2, -2)$"
    ],
    "explanations": [
      "$(8,5)$ is where the boundary lines cross. The first inequality is strict, and $-\\frac{1}{2}(8)+9=5$, so $5<5$ is false.",
      "$(0,9)$ lies on the boundary $y=-\\frac{1}{2}x+9$, so $9<9$ is false. The strict inequality excludes that line.",
      "For $(6,3)$: $-\\frac{1}{2}(6)+9=6$, and $3<6$ is true. Also $6-3=3$, and $3\\ge3$ holds because the second inequality includes its boundary.",
      "$(2,-2)$ satisfies the first inequality, $-2<8$, but fails the second: $-2\\ge2-3=-1$ is false."
    ]
  },
  "q:7733e897bbdce71c": {
    "options": [
      "$\\$57.00$",
      "$\\$57.60$",
      "$\\$58.68$",
      "$\\$59.76$"
    ],
    "explanations": [
      "$\\$57.00$ is the fixed fee, $58.08-9(0.12)$, an intermediate value. The overage for $14$ gigabytes, $1.68$ dollars, must be added.",
      "$\\$57.60$ adds only $5$ gigabytes of overage, the increase from $9$ to $14$, to the fixed fee. The full $14$ gigabytes must be charged: $57.00+1.68$.",
      "The first month's overage was $9(0.12)=1.08$, so the fixed fee is $57.00$. With $14$ gigabytes the bill is $57.00+14(0.12)=58.68$ dollars.",
      "$\\$59.76$ adds the new overage to the old bill, $58.08+1.68$. That double-counts the first month's overage charge."
    ]
  },
  "q:831833f3aec658ba": {
    "options": [
      "$8$",
      "$24$",
      "$26$",
      "$50$"
    ],
    "explanations": [
      "$8$ is the value $D$ approaches for very large $x$, the horizontal asymptote. It is a defect rate, not a number of weeks.",
      "$24$ is when the rate first reaches $12$, from $120+8x=12x+24$. The question asks for the time between that and reaching $10$.",
      "$D(x)=12$ gives $96=4x$, so $x=24$. $D(x)=10$ gives $100=2x$, so $x=50$. The time between them is $50-24=26$ weeks.",
      "$50$ is when the rate reaches $10$, measured from the start of training. The question asks how long after week $24$, which is $26$ weeks."
    ]
  },
  "q:67a65c5dd9f6c6b3": {
    "options": [
      "$-15$",
      "$-9$",
      "$-5$",
      "$4$"
    ],
    "explanations": [
      "$-15$ is $P(2)=2(-9)+3$, the remainder for division by $x-2$. The question asks for the remainder for $x-1$, which is $-5$.",
      "$-9$ is the value of $m$ from $2m+3=3(m+4)$. It is an intermediate step; the remainder is $P(1)=m+4=-5$.",
      "The remainders are $P(2)=2m+3$ and $P(1)=m+4$. Setting $2m+3=3(m+4)$ gives $m=-9$, so $P(1)=-9+4=-5$.",
      "$4$ is $P(1)$ with $m=0$, ignoring the unknown term. With $m=-9$, $P(1)=-5$."
    ]
  },
  "q:f6f09f097033a6a2": {
    "options": [
      "Every tree in the data set had a trunk circumference of 9.4 centimeters when it was planted.",
      "Every tree in the data set gained exactly 5.8 centimeters of circumference each year.",
      "The model predicts that a tree's trunk circumference increases by about 29 centimeters over any 5-year span between ages 3 and 25.",
      "The model predicts that a 25-year-old tree has a trunk circumference of about 145 centimeters."
    ],
    "explanations": [
      "The intercept $9.4$ is a model value at $x=0$, outside the $3$-to-$25$-year data range. A line of best fit describes a trend, not each tree's measurement.",
      "The slope $5.8$ is an average predicted rate for the trend, not an exact yearly gain for every tree. Individual trees scatter around the line.",
      "The slope $5.8$ is the predicted increase in circumference per year. Over any $5$-year span in the data range, the model predicts $5.8(5)=29$ centimeters.",
      "$145$ is $5.8(25)$, which omits the intercept. The model predicts $5.8(25)+9.4=154.4$ centimeters at age $25$."
    ]
  },
  "q:c96136bf11d34ba5": {
    "options": [
      "$2.875$",
      "$3$",
      "$6$",
      "$12$"
    ],
    "explanations": [
      "$2.875$ is $\\frac{23}{8}$, the product of the two times, using the wrong Vieta ratio. The sum is $-\\frac{b}{a}=\\frac{48}{8}=6$.",
      "$3$ is the vertex time, the average of the two times. The question asks for their sum, which is twice that, $6$.",
      "Setting the height to $50$ gives $8t^2-48t+23=0$. The sum of the roots is $-\\frac{b}{a}=\\frac{48}{8}=6$ seconds.",
      "$12$ is $\\frac{96}{8}$, mixing the original coefficient $96$ with the reduced $8$. In $8t^2-48t+23=0$, the sum is $\\frac{48}{8}=6$."
    ]
  },
  "q:0cc9c1fb9fb46bc5": {
    "options": [
      "41",
      "49",
      "23",
      "13"
    ],
    "explanations": [
      "Vertical angles, the angles opposite each other at the intersection, are always equal. So the vertical angle also measures $41°$.",
      "$49°$ is the complement of $41°$, which would apply only to angles summing to $90°$. Vertical angles are equal, so the answer is $41°$.",
      "$23°$ has no relation to the given $41°$. Vertical angles are congruent, so the measure is $41°$.",
      "$13°$ does not follow from any angle relationship here. The vertical angle equals the given angle, $41°$."
    ]
  },
  "q:cb403e3d07afa108": {
    "options": [
      "106",
      "82",
      "71",
      "63"
    ],
    "explanations": [
      "$106$ miles would need about $11.8$ inches on the map. Each inch is $9$ miles, so $7$ inches is $63$ miles.",
      "$82$ miles is not a multiple of $9$, so it cannot come from whole inches at this scale. The distance is $7\\times9=63$ miles.",
      "$71$ miles is not a multiple of $9$. Multiplying the map distance by the scale gives $7\\times9=63$ miles.",
      "Each map inch stands for $9$ miles, so $7$ inches represent $7\\times9=63$ miles."
    ]
  },
  "q:f3bab25274a40e1e": {
    "options": [
      "$\\frac{9}{11}$",
      "$\\frac{6}{11}$",
      "$\\frac{7}{10}$",
      "$\\frac{3}{10}$"
    ],
    "explanations": [
      "$\\frac{9}{11}$ uses a denominator of $11$, but the spinner has $10$ equal sections. Blue covers $7$ of them, so the probability is $\\frac{7}{10}$.",
      "$\\frac{6}{11}$ miscounts both the blue sections and the total. There are $7$ blue sections out of $10$, giving $\\frac{7}{10}$.",
      "With $10$ equally likely sections and $7$ of them blue, the probability of blue is $\\frac{7}{10}$.",
      "$\\frac{3}{10}$ is the probability of not landing on blue, the $3$ other sections. Blue is the complement, $\\frac{7}{10}$."
    ]
  },
  "q:e76cfa89a459907c": {
    "options": [
      "$x \\geq 0$",
      "$x > 0$",
      "All real numbers",
      "All real numbers except $x = 0$"
    ],
    "explanations": [
      "$x\\ge0$ is a restriction for square roots, which this function does not have. A polynomial accepts every real input, including negatives.",
      "$x>0$ excludes $0$ and every negative number, but $f(0)=5$ and $f(-1)=9$ are defined. A polynomial's domain is all real numbers.",
      "A polynomial has no denominator and no even root, so it is defined for every real $x$. The domain is all real numbers.",
      "Excluding $x=0$ applies to a function with $x$ in a denominator. Here $f(0)=5$ is perfectly defined."
    ]
  },
  "q:e6e624a019eddc31": {
    "options": [
      "$0.82$",
      "$0.91$",
      "$0.09$",
      "$1.91$"
    ],
    "explanations": [
      "$0.82$ is the difference $\\sin^2\\theta-\\cos^2\\theta$, which is $0.91-0.09$, not $\\cos^2\\theta$ itself. The identity $\\sin^2\\theta+\\cos^2\\theta=1$ gives $\\cos^2\\theta=0.09$.",
      "$0.91$ repeats the value of $\\sin^2\\theta$. Sine and cosine squared are equal only at $45°$, where each is $0.5$.",
      "For any angle, the Pythagorean identity says $\\sin^2\\theta+\\cos^2\\theta=1$. So the cosine squared is whatever is left over: $\\cos^2\\theta=1-0.91=0.09$.",
      "$1.91$ adds $1$ and $0.91$ instead of subtracting. Since the squares sum to $1$, $\\cos^2\\theta=1-0.91=0.09$."
    ]
  },
  "q:21878c35f42f4fc7": {
    "options": [
      "2.67",
      "10.67",
      "12.00",
      "5.33"
    ],
    "explanations": [
      "$2.67$ is the $x$-intercept, $\\frac{8}{3}$, an intermediate value. The triangle's area is $\\frac{1}{2}\\left(\\frac{8}{3}\\right)(4)\\approx5.33$.",
      "$10.67$ multiplies the legs $\\frac{8}{3}$ and $4$ but omits the $\\frac{1}{2}$. The triangle's area is half that, $5.33$.",
      "$12.00$ uses the perpendicular slope $\\frac{2}{3}$, which gives an $x$-intercept of $-6$. A parallel line keeps the slope $-\\frac{3}{2}$.",
      "Line $k$ is $y=-\\frac{3}{2}x+4$, with intercepts $4$ and $\\frac{8}{3}$. The triangle's area is $\\frac{1}{2}\\left(\\frac{8}{3}\\right)(4)=\\frac{16}{3}\\approx5.33$."
    ]
  },
  "q:4e174af58631a249": {
    "options": [
      "$(0, 0)$",
      "$(1, 5)$",
      "$(0, 1)$",
      "$(0, -1)$"
    ],
    "explanations": [
      "$(0,0)$ lies on the boundary $y=3x$, and $0<0$ is false. The strict inequality excludes boundary points.",
      "$(1,5)$ gives $5<3(1)=3$, which is false. The point lies above the line $y=3x$.",
      "$(0,1)$ gives $1<3(0)=0$, which is false. The point is above the boundary line.",
      "At $x=0$ the boundary value is $3(0)=0$. Since $-1<0$, the point $(0,-1)$ satisfies $y<3x$."
    ]
  },
  "q:f08ce24313197785": {
    "options": [
      "No association at all",
      "Moderate negative",
      "Moderate positive",
      "Perfect positive"
    ],
    "explanations": [
      "A general upward trend is an association. No association would show no consistent pattern as study hours increase.",
      "Negative would mean scores fall as study hours rise. The trend described is upward, which is positive.",
      "An upward trend means a positive association, and the visible scatter around the trend makes it moderate rather than perfect.",
      "A perfect association would have every point exactly on a line. The scatter described makes it moderate."
    ]
  },
  "q:2fdf0f4809b66142": {
    "options": [
      "$-5$",
      "$7$",
      "$12$",
      "$17$"
    ],
    "explanations": [
      "$-5$ is $r(0)$, the constant term of $r(x)=4x-5$. The question asks for $r(3)=12-5=7$.",
      "Long division gives the quotient $x-2$, and $(x^2+1)(x-2)=x^3-2x^2+x-2$. Subtracting this from the polynomial leaves $r(x)=4x-5$, so $r(3)=12-5=7$.",
      "$12$ is $4\\cdot3$, dropping the constant $-5$ of the remainder. The full value is $r(3)=12-5=7$.",
      "$17$ is the original polynomial at $x=3$. That shortcut works only for a linear divisor; with the quadratic $x^2+1$, find $r(x)=4x-5$ first."
    ]
  }
}

export default ENTRIES
