import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:1d3c143ae912946d": {
    "options": [
      "$-1$",
      "$2$",
      "$6$",
      "$4$"
    ],
    "explanations": [
      "$-1$ is the input to $Q$, not its output. After finding $k=2$ the quotient is $Q(x)=x+5$, and substituting $x=-1$ still has to be done: $Q(-1)=4$.",
      "$2$ is the value of $k$, found by requiring the numerator to be $0$ at $x=3$ ($3k-6=0$). That is only the intermediate step; the question asks for $Q(-1)$, which is $4$.",
      "$6$ is $Q(1)=1+5$, evaluating the quotient at $x=1$ instead of $x=-1$, a sign slip on the input. With $Q(x)=x+5$, the correct value is $Q(-1)=4$.",
      "No remainder means $x-3$ is a factor, so the numerator is $0$ at $x=3$: $9+3k-15=0$ and $k=2$. Then $x^{2}+2x-15=(x+5)(x-3)$, so $Q(x)=x+5$ and $Q(-1)=4$."
    ]
  },
  "q:e503b257cd8d057c": {
    "options": [
      "$5$",
      "$20$",
      "$25$",
      "$60$"
    ],
    "explanations": [
      "$5$ is the doubling time: $8=2^3$ means three doublings in $15$ years, so one doubling takes $5$ years. That intermediate must still be multiplied by the five doublings needed to reach $32=2^5$.",
      "$20$ counts only $4$ doublings at $5$ years each, an off-by-one from counting the factors between $2$ and $32$ rather than from the start. Reaching $32=2^5$ times the start takes $5$ doublings, or $25$ years.",
      "Since $8=2^3$, three doublings take $15$ years, so each doubling takes $5$ years. Reaching $32=2^5$ times the initial value needs $5$ doublings, so $5\\times 5=25$ years.",
      "$60$ scales the time proportionally, $15\\times\\frac{32}{8}$, as if $4$ times the growth needed $4$ times the time. Exponential growth multiplies, so going from $8$ to $32$ is only two more doublings, $10$ more years."
    ]
  },
  "q:def2d84bbbb41fdb": {
    "options": [
      "54 and 40",
      "62 and 50",
      "40 and 54",
      "58 and 72"
    ],
    "explanations": [
      "Row R1 adds across: $22+32=54$. Column C1 adds down: $22+18=40$. Listed in the requested order, row total first, that is 54 and 40.",
      "62 and 50 add along the diagonals: $22+40=62$ and $18+32=50$. A row total adds across one row and a column total adds down one column, giving 54 and 40.",
      "40 and 54 are the right two totals in the wrong order. The question asks for the R1 row total ($54$) first and the C1 column total ($40$) second.",
      "58 and 72 are the totals for the other row and column: R2 is $18+40=58$ and C2 is $32+40=72$. The question asks about R1 and C1, which give 54 and 40."
    ]
  },
  "q:cd6742455cddcf7d": {
    "options": [
      "$x > 0$",
      "All real numbers",
      "$x \\ge 5$",
      "$x \\ge -5$"
    ],
    "explanations": [
      "$x>0$ is a restriction remembered from $\\sqrt{x}$ alone, and it is also strict. Here the radicand is $x+5$, which is allowed to equal $0$, so the domain is $x\\ge -5$.",
      "Not every real number works: for $x=-6$ the radicand $x+5=-1$ is negative and the square root is undefined. The domain requires $x+5\\ge 0$, so $x\\ge -5$.",
      "$x\\ge 5$ flips the sign when solving $x+5\\ge 0$. Subtracting $5$ gives $x\\ge -5$; for example, $x=0$ gives $\\sqrt{5}$, which is defined even though $0<5$.",
      "A square root is defined only when its radicand is nonnegative, so $x+5\\ge 0$, which gives $x\\ge -5$."
    ]
  },
  "q:8bcefe964ce2f5f8": {
    "options": [
      "18",
      "38",
      "131",
      "151"
    ],
    "explanations": [
      "The radius is $2$, so the tank holds $\\pi(2)^2(9)=36\\pi\\approx 113.1$ cubic feet. After $20$ minutes, $60$ cubic feet are in, leaving $53.1$; at $3$ per minute that takes about $17.7$, or $18$ minutes.",
      "$38$ is the total fill time from empty, $113.1\\div 3\\approx 37.7$. The question asks how much longer after the first $20$ minutes, so those minutes must be subtracted: $37.7-20\\approx 18$.",
      "$131$ uses the diameter $4$ as the radius, giving a volume of $144\\pi\\approx 452.4$ and a remaining time of $(452.4-60)\\div 3\\approx 131$. The radius is half the diameter, $2$.",
      "$151$ makes two errors: it uses the diameter $4$ as the radius ($144\\pi\\approx 452.4$ cubic feet) and then gives the total time from empty, $452.4\\div 3\\approx 151$, ignoring the $20$ minutes already pumped."
    ]
  },
  "q:344713dbe1a075f0": {
    "options": [
      "$2$",
      "$4$",
      "$16$",
      "$8$"
    ],
    "explanations": [
      "$2$ fails the equations: $y=2$ would force $x=1$, and then $x^{3}=1$ while $8y=16$. It comes from taking an extra square root after $x^{2}=16$; the correct values are $x=4$ and $y=8$.",
      "$4$ is $x$, the value the algebra finds first from $x^{2}=16$. The question asks for $y$, and $y=2x=8$.",
      "$16$ is $x^{2}$ from the step $x^{2}=16$, one square root short of $x$ itself. It also fails the system: $y=16$ means $x=8$, but $8^{3}=512\\ne 8(16)$.",
      "Substituting $y=2x$ gives $x^{3}=16x$, and since $x>0$, $x^{2}=16$ and $x=4$. Then $y=2(4)=8$, and the check $4^{3}=64=8(8)$ works."
    ]
  },
  "q:abd14af082399fae": {
    "options": [
      "$6\\%$",
      "$6.17\\%$",
      "$6.50\\%$",
      "$7.20\\%$"
    ],
    "explanations": [
      "$6\\%$ is the nominal annual rate. Because each month's interest earns interest in later months, the actual one-year growth is $(1.005)^{12}-1\\approx 6.17\\%$, slightly more than $6\\%$.",
      "Each month multiplies the balance by $1+\\frac{0.06}{12}=1.005$. After $12$ months the factor is $(1.005)^{12}\\approx 1.0617$, a growth of about $6.17\\%$.",
      "$6.50\\%$ overstates the compounding effect, as if the nominal $6\\%$ picked up an extra half-percent month on top. The actual factor is $(1.005)^{12}\\approx 1.0617$, so compounding adds only about $0.17$ of a percentage point.",
      "$7.20\\%$ takes the monthly rate as $0.6\\%$ (dividing $6$ by $10$ instead of $12$) and multiplies by $12$. The monthly rate is $0.5\\%$, and twelve months of compounding give about $6.17\\%$."
    ]
  },
  "q:06c7017ba7245927": {
    "options": [
      "3",
      "6",
      "4",
      "9"
    ],
    "explanations": [
      "$3$ is the factor for lengths. Area depends on two dimensions, each multiplied by $3$, so the area is multiplied by $3\\times 3=9$.",
      "$6$ doubles the scale factor, $2\\times 3$, instead of squaring it. A square with side $s$ has area $s^2$; with side $3s$ the area is $9s^2$, so the factor is $9$.",
      "$4$ does not follow from the scaling: a side of $1$ becomes $3$, so an area of $1$ becomes $3^2=9$, not $4$. The area factor is the square of the length factor.",
      "Each side is multiplied by $3$, and area is side times side, so the area is multiplied by $3^2=9$."
    ]
  },
  "q:fd75e6fa9f069a5d": {
    "options": [
      "0",
      "3",
      "2",
      "1"
    ],
    "explanations": [
      "$0$ would mean the graph never reaches the $x$-axis, but $y=(x-2)^2$ equals $0$ at $x=2$. The vertex $(2,0)$ sits on the axis, so there is one point of contact.",
      "$3$ is impossible here: a parabola can meet a horizontal line at most twice. Setting $(x-2)^2=0$ gives only $x=2$, so the graph meets the axis once.",
      "$2$ assumes every quadratic has two distinct roots. Here $(x-2)^2=0$ has the repeated root $x=2$, so the vertex just touches the axis at a single point.",
      "Setting $y=0$ gives $(x-2)^2=0$, so $x=2$ is the only solution, a repeated root. The vertex $(2,0)$ touches the $x$-axis at exactly one point."
    ]
  },
  "q:c7d3275ed812b229": {
    "options": [
      "$-6$",
      "$-3$",
      "$3$",
      "$6$"
    ],
    "explanations": [
      "$-6$ matches $2x+k$ against the unreduced numerator $4x-6$. The right side reduces to $\\frac{2x-3}{3}$, so the constants must match as $k=-3$; with $k=-6$ the two sides never agree.",
      "The right side simplifies: $\\frac{4x-6}{6}=\\frac{2x-3}{3}$. The equation is then $\\frac{2x+k}{3}=\\frac{2x-3}{3}$, which holds for every $x$ exactly when $k=-3$.",
      "$3$ has the right size but the wrong sign. With $k=3$ the equation becomes $2x+3=2x-3$, which is never true, giving no solution rather than infinitely many.",
      "$6$ makes the left side $\\frac{2x+6}{3}$ while the right side is $\\frac{2x-3}{3}$. The $x$-terms match but the constants differ, so there are no solutions; infinitely many needs $k=-3$."
    ]
  },
  "q:1c1899dcce69227e": {
    "options": [
      "9.5",
      "20.0",
      "38.0",
      "19.0"
    ],
    "explanations": [
      "$9.5$ adds one long side and one short side, $\\sqrt{40}+\\sqrt{10}\\approx 9.49$, which is only half the perimeter. A rectangle has two of each side, so the perimeter is about $19.0$.",
      "$20.0$ is the area, $\\sqrt{40}\\cdot\\sqrt{10}=\\sqrt{400}=20$, not the perimeter. The perimeter adds the sides: $2(\\sqrt{40}+\\sqrt{10})\\approx 19.0$.",
      "$38.0$ doubles the perimeter, counting each of the four sides twice. The sides are $\\sqrt{40}\\approx 6.32$ and $\\sqrt{10}\\approx 3.16$, and $2(6.32+3.16)\\approx 19.0$.",
      "From $(4,3)$ the vectors to the other points are $(-6,-2)$ and $(1,-3)$, with dot product $0$, so $(4,3)$ is the right-angle corner. The sides are $\\sqrt{40}\\approx 6.32$ and $\\sqrt{10}\\approx 3.16$, so the perimeter is about $19.0$."
    ]
  },
  "q:9432edcb22e7b788": {
    "options": [
      "$\\frac{20}{30}$",
      "$\\frac{20}{50}$",
      "$\\frac{25}{50}$",
      "$\\frac{30}{50}$"
    ],
    "explanations": [
      "$\\frac{20}{30}$ divides heads by tails, which is the ratio of heads to tails, not a probability. Experimental probability divides by all $50$ flips: $\\frac{20}{50}$.",
      "Experimental probability is the number of observed successes over the number of trials: $20$ heads in $50$ flips, or $\\frac{20}{50}$.",
      "$\\frac{25}{50}$ is the theoretical probability for a fair coin, $\\frac{1}{2}$. The question asks for what the experiment actually observed, $20$ heads out of $50$ flips.",
      "$\\frac{30}{50}$ is the experimental probability of tails, the $50-20=30$ flips that were not heads. Heads occurred $20$ times, so the answer is $\\frac{20}{50}$."
    ]
  },
  "q:7f8f4630689b4ef8": {
    "options": [
      "113",
      "402",
      "452",
      "1257"
    ],
    "explanations": [
      "$113$ is the path's area, $\\pi(10^2-8^2)=36\\pi\\approx 113.1$ square meters. That still must be multiplied by the depth $0.1$ m and by $40$ dollars per cubic meter, giving about $452$.",
      "$402$ approximates the ring's area as inner circumference times width, $2\\pi(8)(2)\\approx 100.5$, which undercounts the outer part of the ring. The exact area is $36\\pi\\approx 113.1$, and $113.1(0.1)(40)\\approx 452$.",
      "The outer radius is $8+2=10$, so the path's area is $\\pi(10^2-8^2)=36\\pi\\approx 113.1$ square meters. The volume is $113.1(0.1)\\approx 11.31$ cubic meters, costing $11.31(40)\\approx 452$ dollars.",
      "$1257$ gravels the whole outer circle, $100\\pi\\approx 314.2$ square meters, instead of just the ring. The garden inside gets no gravel, so the area is $\\pi(10^2-8^2)=36\\pi$, which leads to about $452$."
    ]
  },
  "q:20748bbe9940dfed": {
    "options": [
      "$36$",
      "$72$",
      "$144$",
      "$288$"
    ],
    "explanations": [
      "$36$ multiplies $9$ by $2^2=4$, counting only two half-lives between the $24$-year and $60$-year marks. The gap is $36$ years, which is three half-lives, so the amount is $9\\times 8=72$.",
      "The $24$-year mark is $60-24=36$ years, or $3$ half-lives, before the $60$-year measurement. Going backward doubles the amount once per half-life: $9\\times 2^{3}=72$ grams.",
      "$144$ is the original $288$ grams halved only once, as if $24$ years were one half-life. Twenty-four years is two half-lives, so $288\\div 4=72$ grams.",
      "$288$ is the original amount, $9\\times 2^{5}$, from undoing all five half-lives in $60$ years. The question asks for the amount at $24$ years, after two halvings: $72$ grams."
    ]
  },
  "q:cf38a69988fbc828": {
    "options": [
      "$1$",
      "$-9$",
      "$10$",
      "$9$"
    ],
    "explanations": [
      "$1$ is the extraneous candidate created by squaring. Checking it: $\\sqrt{2(1)+7}=3$ but $1-4=-3$, and a square root cannot equal a negative number, so it is not a solution.",
      "$-9$ comes from a sign error in factoring $x^{2}-10x+9$. It does not work anyway: $2(-9)+7=-11$ is negative, so the square root is undefined. The only solution is $9$.",
      "$10$ is the sum of both candidates, $1+9$, from never checking them in the original equation. $x=1$ gives $\\sqrt{9}=3$ on the left but $-3$ on the right, so it must be rejected.",
      "Squaring gives $x^{2}-10x+9=0$, so $x=1$ or $x=9$. Only $x=9$ checks: $\\sqrt{25}=5=9-4$. Since $x=1$ is extraneous, the sum of all solutions is $9$."
    ]
  },
  "q:235d937e54c8dc30": {
    "options": [
      "$100$",
      "$220$",
      "$300$",
      "$660$"
    ],
    "explanations": [
      "The child weighs $44\\div 2.2=20$ kg, so the daily amount is $20\\times 15=300$ mg. Dosing every $8$ hours means $3$ doses a day, so each dose is $300\\div 3=100$ mg.",
      "$220$ skips the pound-to-kilogram conversion, using $44\\times 15=660$ mg per day, and then divides by $3$. The rate is per kilogram, so first convert $44$ pounds to $20$ kilograms.",
      "$300$ is the total daily amount, $20\\times 15$. That day's medication is split into $3$ equal doses given every $8$ hours, so each dose is $100$ mg.",
      "$660$ multiplies the weight in pounds by the per-kilogram rate, $44\\times 15$, and also stops at a daily total. Converting to $20$ kg and splitting into $3$ doses gives $100$ mg."
    ]
  },
  "q:b7a331600a89bc65": {
    "options": [
      "2,309",
      "1,264",
      "3,325",
      "5,199"
    ],
    "explanations": [
      "$2{,}309$ applies the overall Poor rate, $243/1000$, which blends all three locations. The estimate is for Location B customers only, so use the Location B row: $133/380=0.35$.",
      "$1{,}264$ divides the Location B Poor count by the whole survey, $133/1000$. A rate for Location B must use that location's own total, $133/380=0.35$, giving $3{,}325$.",
      "Only Location B's row describes Location B customers: $133/380=0.35$ of them rated the service Poor. Applying that rate gives $0.35(9{,}500)=3{,}325$.",
      "$5{,}199$ uses $133/243\\approx 0.547$, the share of all Poor ratings that came from Location B. That is a fraction of Poor ratings, not of Location B's customers; the right rate is $133/380$."
    ]
  },
  "q:491ad3f6dfa71860": {
    "options": [
      "9",
      "12",
      "8",
      "10"
    ],
    "explanations": [
      "$9$ is an arithmetic slip in the subtraction: $5(2)-2=10-2=8$, not $9$. The absolute value of $8$ is just $8$.",
      "$12$ adds the $2$ instead of subtracting it, computing $5(2)+2$. The expression inside the bars is $5x-2$, so $g(2)=|10-2|=8$.",
      "Substitute $x=2$: $g(2)=|5(2)-2|=|8|=8$. Because $8$ is already positive, the absolute value does not change it.",
      "$10$ is $5(2)$ alone, dropping the $-2$ inside the absolute value bars. Completing the expression gives $|10-2|=8$."
    ]
  },
  "q:4fba63088c12df16": {
    "options": [
      "81",
      "36",
      "57",
      "18"
    ],
    "explanations": [
      "The area of a square is its side length multiplied by itself, so a side of $9$ gives an area of $9^2=81$ square units.",
      "$36$ is the perimeter, $4\\times 9$, which adds the four sides instead of multiplying length by width. The area is $9\\times 9=81$.",
      "$57$ is not $9\\times 9$. A square with side $9$ is covered by $9$ rows of $9$ unit squares, which is $81$ square units.",
      "$18$ doubles the side, $2\\times 9$, instead of squaring it. The area of a square is side times side, so $9\\times 9=81$."
    ]
  },
  "q:4edddb5a4d242ecb": {
    "options": [
      "All workers in the same city",
      "Only the 250 employees surveyed",
      "Only employees with long commutes",
      "All 1700 employees at the company"
    ],
    "explanations": [
      "All workers in the city reaches beyond the population that was sampled. The $250$ were chosen only from this company's employees, so the results cannot be extended to other employers.",
      "Limiting the results to the $250$ surveyed ignores the point of random sampling. Because they were chosen at random from all $1700$ employees, they represent that whole group.",
      "Nothing in the sampling selected people with long commutes; the $250$ were a random sample of all employees. The results describe the whole company, short and long commutes alike.",
      "A random sample represents the population it was drawn from. The $250$ were randomly selected from the company's $1700$ employees, so the results generalize to all $1700$, and no further."
    ]
  },
  "q:7483d0b4cbd24fbd": {
    "options": [
      "$(4, 1)$",
      "$(-4, 1)$",
      "$(1, 4)$",
      "$(4, -1)$"
    ],
    "explanations": [
      "Replacing $x$ with $x-4$ shifts the graph right $4$ units, and adding $1$ shifts it up $1$ unit. The vertex moves from $(0,0)$ to $(4,1)$.",
      "$(-4,1)$ reads $x-4$ as a shift left. The absolute value is $0$ when $x-4=0$, at $x=4$, so the shift is right $4$ and the vertex is $(4,1)$.",
      "$(1,4)$ swaps the coordinates. The horizontal shift comes from inside the absolute value ($x=4$) and the vertical shift from the added constant ($y=1$), so the vertex is $(4,1)$.",
      "$(4,-1)$ flips the vertical shift. Adding $1$ outside the absolute value moves the graph up, so the lowest point is at $y=0+1=1$, giving $(4,1)$."
    ]
  },
  "q:d2729394c235c827": {
    "options": [
      "$x^2 - 1$",
      "$x^2 + 1$",
      "$x^2 + 5$",
      "$5x^2 + 5$"
    ],
    "explanations": [
      "$x^2-1$ gets the constant wrong: $3-2=1$, not $-1$. Distributing the minus sign to both terms gives $3x^2+3-2x^2-2=x^2+1$.",
      "Distribute the minus sign to both terms of the second polynomial: $3x^2+3-2x^2-2$. Combining like terms gives $x^2+1$.",
      "$x^2+5$ subtracts the $x^2$ terms but adds the constants, $3+2$. The minus sign applies to the $+2$ as well, so the constant is $3-2=1$.",
      "$5x^2+5$ adds the polynomials instead of subtracting them. Subtracting like terms one at a time gives $(3-2)x^2+(3-2)=x^2+1$."
    ]
  },
  "q:71b9bff50982418c": {
    "options": [
      "12",
      "6",
      "1",
      "11"
    ],
    "explanations": [
      "$12$ is the numerator $-2+\\sqrt{4+192}=-2+14$ before dividing by $2a=2$. Completing the quadratic formula gives $12\\div 2=6$.",
      "With $a=1$, $b=2$, $c=-48$, the discriminant is $4+192=196$, so $x=\\frac{-2\\pm 14}{2}$, giving $6$ and $-8$. The larger solution is $6$.",
      "$1$ is not a solution: $1^2+2(1)-48=-45\\ne 0$. The quadratic formula gives $\\frac{-2\\pm 14}{2}$, which is $6$ or $-8$.",
      "$11$ is not a solution: $11^2+2(11)-48=95\\ne 0$. The roots are $\\frac{-2\\pm 14}{2}$, so the larger one is $6$."
    ]
  },
  "q:4bebd94f391c7297": {
    "options": [
      "5007",
      "4800",
      "5867",
      "4679"
    ],
    "explanations": [
      "$5007$ is not a whole number of doublings of $600$; it is about $8.35$ times $600$. Eighteen hours is exactly $3$ doublings, a factor of $2^3=8$, giving $4800$.",
      "Eighteen hours contains $18\\div 6=3$ doubling periods, so the count is multiplied by $2^3=8$: $600\\times 8=4800$.",
      "$5867$ is about $9.78$ times $600$, which matches no whole number of doublings. Three doublings multiply by exactly $8$, so the count is $4800$.",
      "$4679$ is about $7.80$ times $600$, slightly short of three doublings. Doubling three times multiplies by exactly $8$, giving $600\\times 8=4800$."
    ]
  },
  "q:71cea92889cfb51b": {
    "options": [
      "$(x-6)^2+(y-1)^2=16$",
      "$(x-1)^2+(y-6)^2=16$",
      "$(x-1)^2+(y-6)^2=4$",
      "$(x+1)^2+(y+6)^2=16$"
    ],
    "explanations": [
      "This equation swaps the coordinates, putting the center at $(6,1)$. The $x$-coordinate $1$ belongs with $x$ and the $y$-coordinate $6$ with $y$: $(x-1)^2+(y-6)^2=16$.",
      "The standard form of a circle is $(x-h)^2+(y-k)^2=r^2$. With center $(1,6)$ and radius $4$, that gives $(x-1)^2+(y-6)^2=16$.",
      "This equation puts the radius $4$ itself on the right side, but the right side must be $r^2=16$. As written it describes a circle of radius $2$.",
      "This equation flips both signs, putting the center at $(-1,-6)$. Standard form subtracts the center's coordinates, so center $(1,6)$ gives $(x-1)^2+(y-6)^2=16$."
    ]
  },
  "q:738bc201f0a12487": {
    "options": [
      "$1.35$",
      "$1.37$",
      "$1.41$",
      "$11{,}955$"
    ],
    "explanations": [
      "$1.35$ treats the growth as simple, $1+0.023(15)=1.345$, adding $2.3\\%$ of the original population each year. The model compounds, so the ratio is $(1.023)^{15}\\approx 1.41$.",
      "$1.37$ is $(1.023)^{14}$, an off-by-one in the number of years. From $2010$ to $2025$ is $15$ years, so the ratio is $(1.023)^{15}\\approx 1.41$.",
      "The year $2025$ is $t=15$. Dividing $P(15)$ by $P(0)$ cancels the initial $8{,}500$, leaving $(1.023)^{15}\\approx 1.41$.",
      "$11{,}955$ is the $2025$ population itself, $8{,}500(1.023)^{15}$. The question asks how many times the $2010$ population that is, so divide by $8{,}500$ to get about $1.41$."
    ]
  },
  "q:cbeba1419c43485a": {
    "options": [
      "$2.5$",
      "$5$",
      "$9$",
      "$3$"
    ],
    "explanations": [
      "$2.5$ ignores $f$ and solves $g(x)=4$, that is $2x-1=4$. But $4$ is the output of $f$; the input to $f$ that gives $4$ is $5$, so $2x-1=5$ and $x=3$.",
      "$5$ is the value of $g(x)$, since $f(5)=4$. That intermediate must still be run backward through $g$: $2x-1=5$ gives $x=3$.",
      "$9$ correctly finds that the input to $f$ must be $5$ but then applies $g$ forward, $g(5)=9$, instead of undoing it. Solving $2x-1=5$ gives $x=3$.",
      "From the table, $f(5)=4$, so $g(x)$ must equal $5$. Then $2x-1=5$ gives $x=3$. Check: $g(3)=5$ and $f(5)=4$."
    ]
  },
  "q:b320f741eca9fa7b": {
    "options": [
      "$6$",
      "$30$",
      "$12$",
      "$24$"
    ],
    "explanations": [
      "$6$ is $x$, the liters of pure acid added, where the algebra ends; it also equals the starting amount of acid. The question asks for the total volume, $24+6=30$ liters.",
      "Setting $\\frac{6+x}{24+x}=0.4$ gives $6+x=9.6+0.4x$, so $0.6x=3.6$ and $x=6$ liters added. The total volume is then $24+6=30$ liters.",
      "$12$ is the final amount of acid, $6+6$ liters, not the total volume. Acid makes up $40\\%$ of the solution, and $12\\div 0.4=30$ liters in all.",
      "$24$ is the original volume, before any acid was added. Adding the $6$ liters of pure acid needed to reach $40\\%$ raises the total to $30$ liters."
    ]
  },
  "q:d0c0a704bcf4219a": {
    "options": [
      "$\\$1240.00$",
      "$\\$1061.36$",
      "$\\$1060.90$",
      "$\\$1060.00$"
    ],
    "explanations": [
      "\\$1240.00 applies the full annual $6\\%$ in each of the $4$ quarters, $1000(1+0.06\\cdot 4)$. Each quarter earns only $1.5\\%$, so $A=1000(1.015)^{4}$, about \\$1061.36.",
      "Quarterly compounding uses the rate $\\frac{0.06}{4}=0.015$ for $4$ periods: $A=1000(1.015)^{4}\\approx 1061.36$, so the balance is \\$1061.36.",
      "\\$1060.90 compounds semiannually, $1000(1.03)^{2}$, using $2$ periods at $3\\%$. Quarterly means $4$ periods at $1.5\\%$: $1000(1.015)^{4}\\approx 1061.36$.",
      "\\$1060.00 is simple interest, $1000(1.06)$, which ignores compounding. Interest earned in the early quarters earns more interest later, giving $1000(1.015)^{4}\\approx 1061.36$."
    ]
  },
  "q:0dca2707ed3cd144": {
    "options": [
      "The model predicts a mass of 5.95 grams for a seedling 7 days after planting.",
      "The model predicts that a seedling's mass increases by 5.95 grams per day during its first week.",
      "The model predicts that a seedling's mass at planting was 5.95 grams less than 2.4 grams.",
      "The model predicts that a seedling's mass increases by about 5.95 grams over any 7-day span within the modeled interval."
    ],
    "explanations": [
      "This reading confuses an amount of change with a predicted level. The mass at $d=7$ includes the intercept: $0.85(7)+2.4=8.35$ grams. The product $0.85(7)$ alone is the gain over $7$ days.",
      "An increase of $5.95$ grams per day contradicts the slope, which says the gain is $0.85$ grams per day. Multiplying by $7$ days already turned the rate into a total change over a week.",
      "This attaches $5.95$ to the intercept. The intercept $2.4$ is the model's starting value, while $0.85(7)$ is a change across seven days, not a comparison with the mass at planting, which lies outside $2\\le d\\le 30$ anyway.",
      "The slope $0.85$ is grams gained per day, so $0.85(7)=5.95$ is the predicted gain over $7$ days. Because the model is linear, that holds for any $7$-day span within $2\\le d\\le 30$."
    ]
  },
  "q:c2a1326364bd363b": {
    "options": [
      "3.2",
      "7.2",
      "12.8",
      "19.8"
    ],
    "explanations": [
      "$3.2$ is the distance from the midpoint $M(3,-1)$ to the origin, $\\sqrt{10}\\approx 3.2$. The question asks about $B=(10,-8)$, whose distance is $\\sqrt{164}\\approx 12.8$.",
      "$7.2$ is the distance from $A(-4,6)$ to the origin, $\\sqrt{52}\\approx 7.2$, the wrong endpoint. Point $B$ is $(10,-8)$, at distance $\\sqrt{164}\\approx 12.8$.",
      "Solving the midpoint equations $\\frac{-4+x}{2}=3$ and $\\frac{6+y}{2}=-1$ gives $B=(10,-8)$. Its distance from the origin is $\\sqrt{10^2+8^2}=\\sqrt{164}\\approx 12.8$.",
      "$19.8$ is the length of $\\overline{AB}$, from $(-4,6)$ to $(10,-8)$: $\\sqrt{14^2+14^2}\\approx 19.8$. The question asks for the distance from $B$ to the origin, about $12.8$."
    ]
  },
  "q:65ca9e7eac90cca4": {
    "options": [
      "$10.8$",
      "$10$",
      "$14$",
      "$116$"
    ],
    "explanations": [
      "The legs are the roots, $4$ and $10$ (sum $14$, product $40$). Then $c^2=4^2+10^2=116$, so the hypotenuse is $c=\\sqrt{116}\\approx 10.8$ centimeters.",
      "$10$ is the longer leg, the larger root, mistaken for the hypotenuse. The hypotenuse must be longer than either leg: $\\sqrt{4^2+10^2}\\approx 10.8$.",
      "$14$ is the sum of the legs, $4+10$, read from the coefficient $-14x$. The hypotenuse comes from the Pythagorean theorem, $\\sqrt{16+100}\\approx 10.8$, not from adding the legs.",
      "$116$ is $c^2=4^2+10^2$, one step before taking the square root. The hypotenuse itself is $\\sqrt{116}\\approx 10.8$ centimeters."
    ]
  },
  "q:3be47f0c088601cc": {
    "options": [
      "$9$",
      "$108$",
      "$252$",
      "$760$"
    ],
    "explanations": [
      "$9$ is the number of hours billed at the discounted rate, $252\\div 28$. Each of those hours would cost $12$ dollars more at the flat rate, so the difference is $9\\times 12=108$ dollars.",
      "The first $10$ hours cost $400$ dollars, so $252$ dollars bought $252\\div 28=9$ more hours, $19$ in all. At $40$ dollars per hour that is $760$ dollars, which is $760-652=108$ dollars more.",
      "$252$ is the amount billed in the second tier, $652-400$, an early intermediate. It covers $9$ discounted hours, each $12$ dollars cheaper, so the difference is $108$ dollars.",
      "$760$ is the flat-rate bill itself, $19\\times 40$. The question asks how much greater that is than the actual $652$ dollar bill: $760-652=108$."
    ]
  },
  "q:5985a9e3c919f13d": {
    "options": [
      "$x^2 - 12x + 37 = 0$",
      "$x^2 - 12x + 36 = 0$",
      "$x^2 - 9x + 36 = 0$",
      "$x^2 - 12x + 34 = 0$"
    ],
    "explanations": [
      "$x^2-12x+37=0$ has discriminant $144-148=-4$, which is negative, so it has no real solutions. Exactly one solution needs a discriminant of $0$.",
      "The discriminant is $(-12)^2-4(1)(36)=0$, so the equation has exactly one real solution. It is the perfect square $(x-6)^2=0$, with only $x=6$.",
      "$x^2-9x+36=0$ has discriminant $81-144=-63$, so it has no real solutions. Exactly one solution requires a discriminant of exactly $0$.",
      "$x^2-12x+34=0$ has discriminant $144-136=8$, which is positive, so it has two real solutions. Exactly one solution requires a discriminant of $0$."
    ]
  },
  "q:fff3961670e01e40": {
    "options": [
      "56",
      "78",
      "44",
      "35"
    ],
    "explanations": [
      "$56$ is the percent of males who said No, $\\frac{27}{48}\\approx 56\\%$. The question asks about Yes: $\\frac{21}{48}\\approx 44\\%$.",
      "$78$ divides Yes by No, $\\frac{21}{27}\\approx 78\\%$, comparing the two answers instead of taking a percent of all $48$ males. The correct value is $\\frac{21}{48}\\approx 44\\%$.",
      "Divide the number who said Yes by all males surveyed: $\\frac{21}{48}=0.4375$, which rounds to $44\\%$.",
      "$35$ does not match the counts: $35\\%$ of $48$ is about $17$ males, not $21$. The percent saying Yes is $\\frac{21}{48}\\approx 44\\%$."
    ]
  },
  "q:b99b6189f07eb5df": {
    "options": [
      "$x = -5$ and $x = 3$",
      "$x = 5$ and $x = 3$",
      "$x = 0$ and $x = 5$",
      "$x = 5$ and $x = -3$"
    ],
    "explanations": [
      "$x=-5$ and $x=3$ flip both signs. The factor $x-5$ is $0$ at $x=5$, and $x+3$ is $0$ at $x=-3$, so those are the excluded values.",
      "$x=5$ and $x=3$ gets the factor $x-5$ right but reads $x+3$ as zero at $x=3$. Setting $x+3=0$ gives $x=-3$.",
      "$x=0$ and $x=5$ wrongly excludes $0$, the zero of the numerator. A numerator of $0$ is allowed; only the denominator's zeros, $5$ and $-3$, are excluded.",
      "A rational expression is undefined where its denominator is $0$: $(x-5)(x+3)=0$ when $x=5$ or $x=-3$."
    ]
  },
  "q:95411c588b60aee6": {
    "options": [
      "$-24$",
      "$12$",
      "$18$",
      "$24$"
    ],
    "explanations": [
      "$-24$ computes $a-b=-6-18$, reversing the order of the subtraction. The question asks for $b$ minus $a$, which is $18-(-6)=24$.",
      "$12$ is $b+a=18+(-6)$, which drops the subtraction of a negative. Subtracting $a=-6$ adds $6$: $b-a=18+6=24$.",
      "$18$ is $b$ alone, the constant after simplifying the left side to $-6x+18$. The question asks for $b-a$, and $a=-6$, so $18-(-6)=24$.",
      "Distributing, the left side is $8-2(3x-5)=8-6x+10=-6x+18$, so matching coefficients with $ax+b$ gives $a=-6$ and $b=18$. Then $b-a=18-(-6)=24$."
    ]
  },
  "q:281ef852a965e198": {
    "options": [
      "17",
      "25",
      "16",
      "11"
    ],
    "explanations": [
      "$17$ would require $3x=15$, which means $x=5$, not the given $x=3$. Substituting $x=3$ gives $y=3(3)+2=9+2=11$.",
      "$25$ would require $3x=23$, so it does not correspond to $x=3$. Substituting into the line gives $y=3(3)+2=11$.",
      "$16$ would require $3x=14$, so it is not the value at $x=3$. Multiply first, then add: $y=3(3)+2=9+2=11$.",
      "Substitute $x=3$ into the equation of the line: $y=3(3)+2=9+2=11$, so the point on the line is $(3,11)$."
    ]
  },
  "q:e1d26982aef5c11c": {
    "options": [
      "8,100",
      "2,991",
      "7,255",
      "6,646"
    ],
    "explanations": [
      "Region 1's row describes Region 1: $108/240=0.45$ of the sampled households there use Type B. Applying that rate gives $0.45(18{,}000)=8{,}100$.",
      "$2{,}991$ divides by the grand total, $108/650\\approx 0.166$, mixing a rate over all three regions with a population from one region. The rate within Region 1 is $108/240=0.45$.",
      "$7{,}255$ scales the Type B column total, $262/650$, which pools all three regions. The estimate is for Region 1 only, so use $108/240=0.45$, giving $8{,}100$.",
      "$6{,}646$ scales $240/650$, Region 1's share of the whole sample, which says nothing about service type. The Type B rate within Region 1 is $108/240=0.45$."
    ]
  },
  "q:6d887fdd5c4f3010": {
    "options": [
      "1.2",
      "2.4",
      "3.6",
      "4.8"
    ],
    "explanations": [
      "$1.2$ is the time to pump out the $6$ cubic feet that remain at depth $1$ ft, $6\\div 5$. The pump must remove the water above that level, $24-6=18$ cubic feet, taking $3.6$ minutes.",
      "$2.4$ assumes half the depth means half the volume, $12\\div 5$. The triangle narrows toward the bottom, so the lowest foot holds only $6$ of the $24$ cubic feet, and $18$ must be removed.",
      "Full volume is $\\frac{1}{2}(3)(2)(8)=24$ cubic feet. At depth $1$ ft the width is $1.5$ ft, leaving $\\frac{1}{2}(1.5)(1)(8)=6$. Removing $18$ cubic feet at $5$ per minute takes $3.6$ minutes.",
      "$4.8$ is the time to empty the whole trough, $24\\div 5$. Pumping stops at depth $1$ ft, when $6$ cubic feet still remain, so only $18$ cubic feet are removed."
    ]
  },
  "q:92435e085d7c1ca7": {
    "options": [
      "$0.17$",
      "$5.83$",
      "$6.00$",
      "$11.83$"
    ],
    "explanations": [
      "Completing the square gives $(x+4)^2+(y-2)^2=36$: center $(-4,2)$, radius $6$. $P$ is $\\sqrt{34}\\approx 5.83$ from the center, so it is inside, and the nearest point on the circle is $6-5.83=0.17$ away.",
      "$5.83$ is the distance from $P$ to the center, $\\sqrt{5^2+3^2}$, an intermediate. Since that is less than the radius $6$, $P$ is inside, and the gap to the circle is $6-5.83=0.17$.",
      "$6.00$ is the radius, the distance from the center to the circle. $P$ is not at the center; it is $5.83$ from it, so the shortest distance is $6-5.83=0.17$.",
      "$11.83$ adds the radius to the center distance, $5.83+6$, which is the distance to the far side of the circle. The nearest point is on the near side: $6-5.83=0.17$."
    ]
  },
  "q:d68850ed15c2e27a": {
    "options": [
      "$1$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "explanations": [
      "$1$ is $b$ alone, the constant term after combining $2(x-1)+3(x+1)=5x+1$. The question asks for $a+b=5+1=6$.",
      "$4$ pairs each numerator with the wrong factor: $2(x+1)+3(x-1)=5x-1$. The term $\\frac{2}{x+1}$ needs the missing factor $x-1$, giving $2(x-1)+3(x+1)=5x+1$.",
      "$5$ is $a$ alone, the coefficient of $x$ in $5x+1$. Adding the constant $b=1$ gives $a+b=6$.",
      "Rewrite both fractions over the common denominator $x^{2}-1=(x+1)(x-1)$: $2(x-1)+3(x+1)=2x-2+3x+3=5x+1$. So $a=5$, $b=1$, and $a+b=6$."
    ]
  },
  "q:5a497e2718922105": {
    "options": [
      "-4",
      "-3",
      "-13",
      "-8"
    ],
    "explanations": [
      "$-4$ halves $-8$, as if dividing by the leading coefficient $2$. That coefficient stretches the graph but does not move the vertex; $x+8=0$ gives $x=-8$.",
      "$-3$ is not where the minimum occurs: at $x=-3$, $y=2(5)^2+9=59$. The squared term is $0$, and $y$ is smallest, only when $x+8=0$, at $x=-8$.",
      "$-13$ is not where the minimum occurs: at $x=-13$, $y=2(-5)^2+9=59$, the same height as $x=-3$. The vertex lies midway, where $x+8=0$, at $x=-8$.",
      "In $y=a(x-h)^2+k$ the vertex is $(h,k)$. Writing $x+8$ as $x-(-8)$ gives $h=-8$, so the vertex's $x$-coordinate is $-8$."
    ]
  },
  "q:6be76b551f23f2ab": {
    "options": [
      "$32$",
      "$33$",
      "$92$",
      "$34$"
    ],
    "explanations": [
      "$32$ is $92-60$, the off-by-one that forgets to count both endpoints. The whole numbers from $60$ through $92$ number $92-60+1=33$.",
      "The budget gives $250+19g\\le 2000$, so $g\\le 92.1$ and at most $92$ guests. With $g\\ge 60$, the possible counts are $60$ through $92$, which is $92-60+1=33$ values.",
      "$92$ is the largest allowed guest count, from $19g\\le 1750$. The question asks how many whole-number guest counts are possible, from $60$ through $92$: $33$.",
      "$34$ rounds $92.1$ up to $93$ before counting. But $93$ guests would cost $250+19(93)=2017$ dollars, over budget, so the counts run $60$ through $92$, which is $33$."
    ]
  },
  "q:03a57e02677e1af0": {
    "options": [
      "$3.3\\times 10^{9}$",
      "$5.6\\times 10^{7}$",
      "$2.0\\times 10^{11}$",
      "$5.6\\times 10^{10}$"
    ],
    "explanations": [
      "$3.3\\times 10^{9}$ is the rate per minute, $4.8\\times 10^{12}\\div 1440$. A minute has $60$ seconds, so divide again by $60$ to get about $5.6\\times 10^{7}$ per second.",
      "A day has $24\\times 60\\times 60=8.64\\times 10^{4}$ seconds. Then $\\frac{4.8\\times 10^{12}}{8.64\\times 10^{4}}\\approx 0.556\\times 10^{8}=5.6\\times 10^{7}$ bytes per second.",
      "$2.0\\times 10^{11}$ is the rate per hour, $4.8\\times 10^{12}\\div 24$. Each hour has $3600$ seconds, so the rate per second is about $5.6\\times 10^{7}$.",
      "$5.6\\times 10^{10}$ has the right digits but divides by $86.4$ instead of $86{,}400$, a three-place exponent slip. Dividing by $8.64\\times 10^{4}$ gives $5.6\\times 10^{7}$."
    ]
  },
  "q:6c70bd9aff61fae8": {
    "options": [
      "$(x + 3)(x + 4)$",
      "$(x + 7)(x + 1)$",
      "$(x - 3)(x - 4)$",
      "$(x + 12)(x + 1)$"
    ],
    "explanations": [
      "Find two numbers that multiply to $12$ and add to $7$: $3$ and $4$. So $x^2+7x+12=(x+3)(x+4)$, and expanding gives $x^2+4x+3x+12$ back.",
      "$(x+7)(x+1)$ expands to $x^2+8x+7$; it uses the middle coefficient $7$ as a factor. The constant must be $12$, which needs $3$ and $4$.",
      "$(x-3)(x-4)$ expands to $x^2-7x+12$, with the wrong sign on the middle term. Both numbers must be positive to multiply to $12$ and add to $+7$.",
      "$(x+12)(x+1)$ gets the product $12$ right but expands to $x^2+13x+12$. The two numbers must also add to $7$, which means $3$ and $4$."
    ]
  },
  "q:16f22ef0ffbd815a": {
    "options": [
      "$200$",
      "$90$",
      "$335$",
      "$290$"
    ],
    "explanations": [
      "$200$ is the tier threshold. Selling exactly $200$ items nets $1200-480=720$ dollars, short of $1{,}530$, so the vendor sold $90$ more at $9$ dollars each, $290$ in all.",
      "$90$ is the number of items sold beyond the first $200$, from $810\\div 9$, an intermediate. The total sold is $200+90=290$.",
      "$335$ treats every item as earning $6$ dollars, $(1530+480)\\div 6$. Items after the first $200$ earn $9$ dollars each, so fewer items are needed: $290$.",
      "The first $200$ items net $200(6)-480=720$ dollars. The remaining $1530-720=810$ dollars came at $9$ dollars each, so $90$ more items, for $290$ in all."
    ]
  },
  "q:519cebbb35160054": {
    "options": [
      "$-2 \\le x \\le 3$",
      "All real numbers",
      "No solution",
      "$x \\ge -2$ only"
    ],
    "explanations": [
      "$-2\\le x\\le 3$ solves $|2x-1|\\le 5$, changing both the direction and the sign of the bound. An absolute value is never negative, so it is always at least $-5$.",
      "An absolute value is always at least $0$, and $0>-5$, so $|2x-1|\\ge -5$ holds for every real $x$.",
      "No solution would fit $|2x-1|\\le -5$, which an absolute value can never satisfy. Here the inequality asks for at least $-5$, and every absolute value is at least $0$.",
      "$x\\ge -2$ solves $2x-1\\ge -5$, dropping the absolute value. Since $|2x-1|$ is never negative, every $x$ works, including $x=-10$, where $|-21|=21\\ge -5$."
    ]
  },
  "q:07ac28ef37075b11": {
    "options": [
      "Infinitely many solutions",
      "Exactly two solutions",
      "Exactly one solution",
      "No solution"
    ],
    "explanations": [
      "Infinitely many solutions requires the same line, with equal slopes and equal intercepts. Here the slopes are $2$ and $4$, so the lines are different and cross once.",
      "Two distinct lines can cross at most once, so exactly two solutions is impossible for a linear system. Slopes $2$ and $4$ differ, giving one intersection.",
      "The slopes $2$ and $4$ differ, so the lines intersect at exactly one point. Solving $2x+5=4x+1$ gives $x=2$ and $y=9$.",
      "No solution happens only for parallel lines, which share a slope but not an intercept. Slopes $2$ and $4$ differ, so the lines meet once, at $(2,9)$."
    ]
  },
  "q:9a33b39ea7a7edf6": {
    "options": [
      "77",
      "20",
      "60",
      "49"
    ],
    "explanations": [
      "$77$ is not a perfect square, so it cannot be $g$ of the whole number $f(4)=7$. Working from the inside out, $f(4)=7$ and then $g(7)=49$.",
      "$20$ is not a perfect square, so it cannot be an output of $g(x)=x^2$ at $f(4)=7$. Working from the inside out, $g(7)=7^2=49$.",
      "$60$ is not a perfect square, so it cannot be $g$ of the whole number $f(4)=7$. Squaring $7$ gives $g(f(4))=49$.",
      "Composition works from the inside out: first $f(4)=4+3=7$, then apply $g$ to that output: $g(7)=7^2=49$."
    ]
  },
  "q:07e14d42c5abbd67": {
    "options": [
      "$[2, \\infty)$",
      "$(0, \\infty)$",
      "$[0, \\infty)$",
      "$(-\\infty, \\infty)$"
    ],
    "explanations": [
      "$[2,\\infty)$ confuses the range with a shifted input. The $+2$ only shifts the graph left; the smallest output is $\\sqrt{0}=0$ at $x=-2$, so the range is $[0,\\infty)$.",
      "$(0,\\infty)$ leaves out $0$, but $f(-2)=\\sqrt{0}=0$ is an output. The range includes its endpoint, so it is $[0,\\infty)$.",
      "A principal square root is never negative, $f(-2)=0$, and the outputs grow without bound as $x$ increases. So the range is every value from $0$ up: $[0,\\infty)$.",
      "$(-\\infty,\\infty)$ would include negative outputs, but a square root never returns a negative number. The outputs start at $0$, so the range is $[0,\\infty)$."
    ]
  },
  "q:1db9a17053701408": {
    "options": [
      "24",
      "14",
      "32",
      "26"
    ],
    "explanations": [
      "The scale factor is $\\frac{DE}{AB}=\\frac{24}{6}=4$, so corresponding side $EF$ is $4$ times $BC$: $4\\times 6=24$. Since $AB=BC$, the similar triangle also has $DE=EF$.",
      "$14$ would make $\\frac{EF}{BC}=\\frac{14}{6}$, which does not match $\\frac{DE}{AB}=4$. Similar triangles keep one scale factor for every pair of sides, so $EF=4(6)=24$.",
      "$32$ gives $\\frac{EF}{BC}=\\frac{32}{6}\\approx 5.3$, not the scale factor $4$. Since $AB=BC=6$, the matching sides $DE$ and $EF$ must be equal: $EF=24$.",
      "$26$ gives a ratio $\\frac{26}{6}$ that differs from $\\frac{DE}{AB}=4$, so the triangles would not be similar. Scaling $BC$ by $4$ gives $EF=4\\times 6=24$."
    ]
  },
  "q:401592bba2066c01": {
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{6}$",
      "$\\frac{2}{6}$"
    ],
    "explanations": [
      "$\\frac{1}{6}$ is the probability of rolling a 2, the event being excluded. The probability of NOT rolling a 2 is the complement: $1-\\frac{1}{6}=\\frac{5}{6}$.",
      "$\\frac{1}{2}$ treats the roll as a two-way split, 2 or not 2, as if both were equally likely. Five of the six faces are not 2, so the probability is $\\frac{5}{6}$.",
      "Five of the six equally likely faces (1, 3, 4, 5, 6) are not 2, so the probability is $\\frac{5}{6}$, the complement of $\\frac{1}{6}$.",
      "$\\frac{2}{6}$ uses the face value $2$ as a count of outcomes. Only one face shows a 2, and the other five do not, so the probability is $\\frac{5}{6}$."
    ]
  },
  "q:f0847b37675b1ab1": {
    "options": [
      "$1$",
      "$-2$",
      "$3$",
      "$5$"
    ],
    "explanations": [
      "Factoring gives $\\frac{x(x-2)(x+2)}{(x-3)(x+2)}$. The canceled $x+2$ makes a hole at $x=-2$, and the remaining $x-3$ gives a vertical asymptote at $x=3$, so the sum is $-2+3=1$.",
      "$-2$ is only the hole's $x$-coordinate, from the canceled factor $x+2$. The question also adds the vertical asymptote at $x=3$: $-2+3=1$.",
      "$3$ is only the vertical asymptote, from the factor $x-3$ that stays in the denominator. Adding the hole at $x=-2$ gives $3+(-2)=1$.",
      "$5$ is the distance between the two values, $3-(-2)$, subtracting instead of adding. The sum of the hole at $-2$ and the asymptote at $3$ is $1$."
    ]
  },
  "q:4a2e3cf191e1cb69": {
    "options": [
      "127",
      "112",
      "139",
      "131"
    ],
    "explanations": [
      "$127$ would require $3(6)^2$ to equal $123$, but $3\\times 36=108$. The $y$-intercept is the value at $x=0$, which is $f(0)=108+4=112$.",
      "The $y$-intercept is where the graph crosses the $y$-axis, so it is the output at $x=0$: $f(0)=3(0+6)^2+4=3(36)+4=108+4=112$.",
      "$139$ would need $3(6)^2=135$, which is $3\\times 45$, not $3\\times 36$. Evaluating $f(0)=3(36)+4$ gives $112$.",
      "$131$ would require $3(6)^2=127$, which is not even a multiple of $3$, so it cannot come from $3(36)$. Correctly, $f(0)=108+4=112$."
    ]
  },
  "q:00b9976dd9295732": {
    "options": [
      "15",
      "13",
      "19",
      "18"
    ],
    "explanations": [
      "$15$ adult tickets leave $5$ child tickets, bringing in $8(15)+12(5)=180$ dollars, not $188$. The equations $a+c=20$ and $8a+12c=188$ give $a=13$.",
      "From $a+c=20$, the number of child tickets is $c=20-a$. Substitute into $8a+12c=188$: $8a+240-12a=188$, so $-4a=-52$ and $a=13$. Check: $8(13)+12(7)=104+84=188$.",
      "$19$ adult tickets leave $1$ child ticket, giving $8(19)+12(1)=164$ dollars, not $188$. Solving the system gives $a=13$ adult tickets.",
      "$18$ adult tickets leave $2$ child tickets, giving $144+24=168$ dollars, not $188$. Solving $8a+12(20-a)=188$ gives $a=13$."
    ]
  },
  "q:80be839b077f8f51": {
    "options": [
      "$x < 1$",
      "$x > -1$",
      "$x > 1$",
      "$x < -1$"
    ],
    "explanations": [
      "$x<1$ forgets to flip the inequality when dividing by $-3$. From $-3x<-3$, dividing by a negative reverses the sign: $x>1$. Check: $x=0$ gives $7<4$, which is false.",
      "$x>-1$ loses a sign on the right side when dividing $-3x<-3$. Since $-3\\div(-3)=1$, the solution is $x>1$; $x=0$ fails the original inequality.",
      "Subtract $7$: $-3x<-3$. Dividing by $-3$ reverses the inequality, giving $x>1$. Check: $x=2$ gives $1<4$, which is true.",
      "$x<-1$ makes two slips: a sign error on the right and no flip of the inequality. From $-3x<-3$, dividing by $-3$ gives $x>1$."
    ]
  },
  "q:86eb1a6dad7f519f": {
    "options": [
      "Vertex $(2, 2)$, opens upward",
      "Vertex $(-2, 2)$, opens downward",
      "Vertex $(2, 2)$, opens downward",
      "Vertex $(2, -2)$, opens downward"
    ],
    "explanations": [
      "The vertex $(2,2)$ is right, but $a=-2$ is negative, so the parabola opens downward, not upward. The vertex is a maximum, not a minimum.",
      "$(-2,2)$ misreads $x-2$ as a shift left. The squared term is $0$ when $x=2$, so the vertex is $(2,2)$, and the graph opens downward.",
      "Matching the form $a(x-h)^2+k$, the vertex is $(h,k)=(2,2)$, and the leading coefficient $a=-2<0$ makes the parabola open downward.",
      "$(2,-2)$ takes the leading coefficient $-2$ as the vertex's $y$-coordinate. The $y$-coordinate is the added constant $k=2$, so the vertex is $(2,2)$."
    ]
  },
  "q:6225235052efdcfa": {
    "options": [
      "It decreases",
      "It stays the same",
      "It is multiplied by 10",
      "It increases by 10"
    ],
    "explanations": [
      "Adding $10$ moves every value the same distance, so no value gets closer to the mean. The spread, and so the standard deviation, does not decrease; it stays the same.",
      "Adding a constant shifts every value and the mean by $10$, so each deviation from the mean is unchanged. The standard deviation stays the same.",
      "Multiplying every value by $10$ would multiply the standard deviation by $10$. Adding $10$ only shifts the data, leaving the spread unchanged.",
      "Adding $10$ raises the mean by $10$, not the standard deviation. Each value's distance from the new mean is the same as before, so the standard deviation does not change."
    ]
  },
  "q:6e46cfb3d8b00b2b": {
    "options": [
      "$49\\pi$",
      "$14\\pi$",
      "$7\\pi$",
      "$16\\pi$"
    ],
    "explanations": [
      "$49\\pi$ is $\\pi r^2$, the area, using $r^2=49$. The question asks for the circumference, $2\\pi r=2\\pi(7)=14\\pi$.",
      "The right side of the equation is $r^2=49$, so $r=7$, and the circumference is $2\\pi r=2\\pi(7)=14\\pi$.",
      "$7\\pi$ is $\\pi r$, forgetting the factor of $2$ in $2\\pi r$. With $r=7$, the circumference is $14\\pi$.",
      "$16\\pi$ does not come from $r=7$; it would need a radius of $8$. Since $r^2=49$, $r=7$ and $C=2\\pi(7)=14\\pi$."
    ]
  },
  "q:f8fe709131de9373": {
    "options": [
      "-1",
      "-9",
      "-3",
      "-6"
    ],
    "explanations": [
      "$-1$ fails the check: $7(-1)-11=-18$, not $-32$. Adding $11$ to both sides gives $7x=-21$, so $x=-3$.",
      "$-9$ fails the check: $7(-9)-11=-74$, not $-32$. To solve, undo the subtraction first: $7x=-32+11=-21$, so $x=-3$.",
      "Undo the subtraction by adding $11$ to both sides: $7x=-21$. Then divide both sides by $7$: $x=-3$. Check: $7(-3)-11=-21-11=-32$.",
      "$-6$ gives $7(-6)-11=-53$, not $-32$. Adding $11$ to both sides gives $7x=-21$, so $x=-3$, half of $-6$."
    ]
  },
  "q:c2dc6c71af95fc8d": {
    "options": [
      "6",
      "22",
      "15",
      "13"
    ],
    "explanations": [
      "$6$ is too small: a $6\\%$ increase on $160$ is only $9.6$, reaching about $169.6$. The actual increase is $24$, and $\\frac{24}{160}=15\\%$.",
      "$22$ overshoots: $22\\%$ of $160$ is $35.2$, which would reach $195.2$. The increase of $24$ is $\\frac{24}{160}=15\\%$ of the starting value.",
      "The increase is $184-160=24$, and the growth rate compares it with the starting value: $\\frac{24}{160}=0.15$, or $15\\%$.",
      "$13$ divides the increase by the ending value, $\\frac{24}{184}\\approx 13\\%$. A growth rate is measured against the starting value: $\\frac{24}{160}=15\\%$."
    ]
  },
  "q:e699f1a075974196": {
    "options": [
      "a smaller slope and a smaller y-intercept.",
      "a smaller slope and a greater y-intercept.",
      "a greater slope and a greater y-intercept.",
      "a greater slope and a smaller y-intercept."
    ],
    "explanations": [
      "A smaller slope keeps the line flattened, but the high point at the far left was what flattened it. Removing that point lets the line steepen, so the slope increases, although the intercept does drop.",
      "This reverses both effects. The high point at the far left was lifting the left end and flattening the line, so removing it lowers the intercept and raises the slope.",
      "The slope does increase, but the intercept cannot rise too. The removed point was high at the far left, so without it the line's left end drops and the $y$-intercept decreases.",
      "The removed point was high at the smallest $x$, pulling the left end of the line up and flattening it. Without it the left end drops, so the $y$-intercept decreases, and the line steepens, so the slope increases."
    ]
  },
  "q:928e7ec228f67f6c": {
    "options": [
      "-1",
      "-13",
      "-16",
      "-2"
    ],
    "explanations": [
      "$-1$ would require a prediction of $71$, but the prediction is $72$. The residual is actual minus predicted: $70-72=-2$.",
      "$-13$ would require a prediction of $83$, not $72$. The residual is actual minus predicted, $70-72=-2$.",
      "$-16$ would require a prediction of $86$, not $72$. The residual is actual minus predicted: $70-72=-2$.",
      "The residual equals actual minus predicted: $70-72=-2$. It is negative because the model overpredicted by $2$."
    ]
  },
  "q:7aab8439d846dcf9": {
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "explanations": [
      "$\\frac{1}{2}$ is $\\sin 30°$, from the $30°$-$60°$-$90°$ triangle. At $45°$ the legs are equal, and $\\sin 45°=\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$.",
      "$1$ is $\\sin 90°$, and it is also $\\tan 45°$, the ratio of two equal legs. The sine is opposite over hypotenuse: $\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$.",
      "In a $45°$-$45°$-$90°$ triangle with legs of length $1$, the hypotenuse is $\\sqrt{2}$, so sine, opposite over hypotenuse, is $\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$.",
      "$\\frac{\\sqrt{3}}{2}$ is $\\sin 60°$, from the $30°$-$60°$-$90°$ triangle. At $45°$ the two legs are equal, giving $\\frac{\\sqrt{2}}{2}$."
    ]
  },
  "q:a414ab47bb3346cd": {
    "options": [
      "Points form a cloud with no upward or downward trend",
      "Points drift upward but are widely scattered",
      "Points drift downward and are widely scattered",
      "Points rise and stay close to a straight line"
    ],
    "explanations": [
      "A cloud with no upward or downward trend shows no association at all. A weak positive association still needs an upward drift, even if the points are widely scattered around it.",
      "Positive means the points tend upward from left to right, and weak means they are widely scattered around that trend. Drifting upward but widely scattered fits both parts.",
      "Drifting downward makes the association negative, even though the wide scatter does make it weak. A weak positive association drifts upward.",
      "Points that rise and stay close to a straight line show a strong positive association. Weak means the points are widely scattered around the trend."
    ]
  },
  "q:ca22066c04f47508": {
    "options": [
      "2772",
      "3503",
      "1795",
      "2765"
    ],
    "explanations": [
      "Each year keeps $1-0.21=0.79$ of the value, so after $2$ years the car is worth $4442(0.79)^2=4442(0.6241)\\approx 2772$ dollars.",
      "$3503$ is roughly one year's worth of depreciation ($4442(0.79)\\approx 3509$), stopping a year short. Two years means multiplying by $0.79$ twice: $4442(0.79)^2\\approx 2772$.",
      "$1795$ is only about $40\\%$ of the original value, more than two years at $21\\%$ could remove. Two years keep $(0.79)^2\\approx 62\\%$, so the value is about $2772$.",
      "$2765$ is close but does not match $4442(0.79)^2=2772.25$, which rounds to $2772$. A rounding slip in the factor, such as using $0.6225$ instead of $0.6241$, produces the gap."
    ]
  },
  "q:fc9db939067de66a": {
    "options": [
      "11",
      "5",
      "10",
      "0"
    ],
    "explanations": [
      "$11$ fails the check: $f(11)=33-15=18$, not $0$. Setting the function equal to zero, $3x-15=0$ gives $3x=15$ and $x=5$.",
      "Set the function equal to zero: $3x-15=0$, so adding $15$ gives $3x=15$, and dividing by $3$ gives $x=5$. Check: $f(5)=15-15=0$.",
      "$10$ fails the check: $f(10)=30-15=15$, not $0$. Solving $3x=15$ requires dividing by $3$, which gives $x=5$.",
      "$0$ is the output the question sets, not the input. At $x=0$, $f(0)=-15$; the input that gives an output of $0$ is $x=5$."
    ]
  },
  "q:277410a0baac8586": {
    "options": [
      "No linear association",
      "Weak negative linear",
      "Strong positive linear",
      "Strong negative linear"
    ],
    "explanations": [
      "No linear association contradicts both clues: the slope $-3$ shows a clear trend, and the points cluster tightly around the line, so the association is strong and negative.",
      "Weak negative gets the direction right but not the strength. Points tightly clustered around the line of best fit indicate a strong association.",
      "Strong positive gets the strength right but not the direction. The slope $-3$ is negative, so $y$ tends to decrease as $x$ increases.",
      "The slope $-3$ is negative, so $y$ decreases as $x$ increases, and tight clustering around the line makes the association strong and linear."
    ]
  },
  "q:6119045ccafd1e61": {
    "options": [
      "$25\\pi$",
      "$5\\pi$",
      "$10\\pi$",
      "$50\\pi$"
    ],
    "explanations": [
      "The equation $x^2+y^2=25$ is a circle centered at the origin with $r^2=25$, so $r=5$ and the enclosed area is $\\pi r^2=25\\pi$.",
      "$5\\pi$ is $\\pi r$, using the radius without squaring it. The area enclosed by the circle is $\\pi r^2=\\pi(5)^2=25\\pi$.",
      "$10\\pi$ is the circumference, $2\\pi r$, the distance around the circle rather than the region it encloses. The area is $\\pi(5)^2=25\\pi$.",
      "$50\\pi$ doubles the area, as if the formula were $2\\pi r^2$. With $r=5$, the area is $\\pi r^2=25\\pi$."
    ]
  },
  "q:a6d0c3ed5f647bd7": {
    "options": [
      "10",
      "6",
      "8",
      "13"
    ],
    "explanations": [
      "$3^{10}$ would equal $3^{6}\\cdot 3^{4}$, not $3^{6}\\cdot 3^{2}$. Multiplying powers of the same base adds the exponents: $6+2=8$.",
      "$6$ keeps only the first exponent, ignoring the factor $3^{2}$. Multiplying by $3^{2}=9$ raises the exponent by $2$, giving $3^{8}$.",
      "Multiplying powers with the same base adds the exponents: $3^{6}\\cdot 3^{2}=3^{6+2}=3^{8}$, so the exponent is $8$.",
      "$3^{13}$ would equal $3^{6}\\cdot 3^{7}$, far larger than $3^{6}\\cdot 3^{2}$. Adding the exponents gives $6+2=8$; even multiplying them would give $12$, not $13$."
    ]
  },
  "q:247a0c19fdef3042": {
    "options": [
      "$14\\pi$",
      "$8\\pi$",
      "$50\\pi$",
      "$7\\pi$"
    ],
    "explanations": [
      "Circumference is $2\\pi r$, the distance around the circle, so a radius of $7$ gives $2\\pi(7)=14\\pi$.",
      "$8\\pi$ does not come from $r=7$; it is the circumference of a circle with radius $4$. With $r=7$, $C=2\\pi(7)=14\\pi$.",
      "$50\\pi$ is not a formula result for $r=7$: the area would be $49\\pi$ and the circumference $14\\pi$. The question asks for the circumference, $14\\pi$.",
      "$7\\pi$ is $\\pi r$, dropping the factor $2$ in $2\\pi r$, which is the same as using the radius in place of the diameter. The circumference is $14\\pi$."
    ]
  },
  "q:a3d7974466f023ab": {
    "options": [
      "The sum of all $4$ scores must be $\\le 324$",
      "The sum of all $4$ scores must be $\\ge 324$",
      "The sum of all $4$ scores must equal $324$",
      "The sum of all $4$ scores must be $\\ge 81$"
    ],
    "explanations": [
      "$\\le 324$ reverses the direction. An average of at least $81$ means $81$ or more, so the total must be at least $81\\times 4=324$.",
      "The average is the total divided by $4$, and it must be at least $81$. Multiplying both sides by $4$ gives a total of at least $324$.",
      "Requiring exactly $324$ ignores that higher totals also give an average of at least $81$. The condition is an inequality: the total must be $\\ge 324$.",
      "$\\ge 81$ applies the average requirement to the sum without multiplying by the $4$ assignments. A total of $81$ averages only about $20$; the total must be at least $324$."
    ]
  },
  "q:a7146fda7b1cc74a": {
    "options": [
      "$\\frac{19}{25}$",
      "$\\frac{19}{27}$",
      "$\\frac{8}{27}$",
      "$\\frac{19}{55}$"
    ],
    "explanations": [
      "$\\frac{19}{25}$ divides by the Male row total, giving the probability that a male owns a cat. The condition is being a cat owner, so divide by the Cat column total: $\\frac{19}{27}$.",
      "Given that the owner has a cat, use only the Cat column: $19$ male cat owners out of $19+8=27$ cat owners, so the probability is $\\frac{19}{27}$.",
      "$\\frac{8}{27}$ is the probability that a randomly chosen cat owner is female. The question asks for male, $19$ of the $27$ cat owners: $\\frac{19}{27}$.",
      "$\\frac{19}{55}$ divides by everyone in the table, giving the chance of a male cat owner among all people. The selection is from cat owners only, so the denominator is $27$."
    ]
  },
  "q:85192aa76b5c61a6": {
    "options": [
      "$64\\pi$",
      "$81\\pi$",
      "$18\\pi$",
      "$9\\pi$"
    ],
    "explanations": [
      "$64\\pi$ corresponds to a radius of $8$, not $9$. From $2\\pi r=18\\pi$, $r=9$, so the area is $\\pi(9)^2=81\\pi$.",
      "Dividing $2\\pi r=18\\pi$ by $2\\pi$ shows the radius is $9$, so the area is $\\pi r^2=\\pi(9)^2=81\\pi$.",
      "$18\\pi$ is the circumference given in the problem, not the area. The radius is $9$, so the area is $\\pi(9)^2=81\\pi$.",
      "$9\\pi$ is $\\pi r$ with $r=9$, forgetting to square the radius. The area is $\\pi r^2=81\\pi$."
    ]
  },
  "q:b52a52fc0ffd9c4c": {
    "options": [
      "Exactly one solution",
      "Exactly two solutions",
      "No solution",
      "Infinitely many solutions"
    ],
    "explanations": [
      "Exactly one solution needs different slopes, but both lines have slope $3$. With equal slopes and different intercepts, the lines are parallel and never meet.",
      "Two distinct lines can never meet twice, so exactly two solutions is impossible. These lines share slope $3$ and never meet at all.",
      "Both lines have slope $3$ but different $y$-intercepts, $10$ and $11$, so they are parallel and never intersect. Setting $3x+10=3x+11$ gives $10=11$, which is false.",
      "Infinitely many solutions needs the same line, but the intercepts $10$ and $11$ differ. Parallel, distinct lines share no points, so there is no solution."
    ]
  },
  "q:35d1ccaaa8243141": {
    "options": [
      "1414",
      "1356",
      "1386",
      "1437"
    ],
    "explanations": [
      "$1414$ falls short of $\\frac{4}{3}\\pi(7)^3=\\frac{1372}{3}\\pi\\approx 1436.8$. Cubing the radius, $7^3=343$, and keeping the $\\frac{4}{3}$ factor gives $1437$.",
      "$1356$ is too small for $\\frac{4}{3}\\pi(343)\\approx 1436.8$. The formula needs the radius cubed, $343$, times $\\frac{4}{3}\\pi$, which rounds to $1437$.",
      "$1386$ is about $50$ short of $\\frac{4}{3}\\pi(343)\\approx 1436.8$. Even rounding $\\pi$ to $3.14$ gives about $1436$, so $1386$ does not come from the sphere formula.",
      "The volume of a sphere is $\\frac{4}{3}\\pi r^3$, and with $r=7$ that is $\\frac{4}{3}\\pi(343)\\approx 1436.76$, which rounds to $1437$."
    ]
  },
  "q:a88cac5a631b93ca": {
    "options": [
      "-7",
      "4",
      "-5",
      "-11"
    ],
    "explanations": [
      "$-7$ does not fit the given roots: with $c=-7$, $x=-1$ gives $1+4-7=-2\\ne 0$. The constant term is the product of the roots, $(-1)(5)=-5$.",
      "$4$ is the sum of the roots, $-1+5$, which matches the coefficient $-4$, not $c$. The constant term is the product of the roots, $(-1)(5)=-5$.",
      "The quadratic with roots $-1$ and $5$ is $(x+1)(x-5)=x^2-4x-5$, so $c=-5$, the product of the roots.",
      "$-11$ does not fit the given roots: with $c=-11$, $x=-1$ gives $1+4-11=-6\\ne 0$. The constant is the product of the roots, $(-1)(5)=-5$."
    ]
  },
  "q:20e4d0010bb574e2": {
    "options": [
      "$x = 1$ or $x = -6$",
      "$x = 1$ or $x = 6$",
      "$x = -1$ or $x = 6$",
      "$x = -1$ or $x = -6$"
    ],
    "explanations": [
      "The expression is undefined where its denominator is $0$: $(x-1)(x+6)=0$ when $x=1$ or $x=-6$, so those two values are excluded.",
      "$x=1$ or $x=6$ gets the factor $x-1$ right but reads $x+6$ as zero at $x=6$. Setting $x+6=0$ gives $x=-6$.",
      "$x=-1$ or $x=6$ flips both signs. The factor $x-1$ is zero at $x=1$, and the factor $x+6$ is zero at $x=-6$.",
      "$x=-1$ or $x=-6$ gets $x+6$ right but flips the sign for $x-1$, which is zero at $x=1$, not at $x=-1$."
    ]
  },
  "q:4b92e7a25fab9414": {
    "options": [
      "Ages 30-49, 0.36",
      "Ages 18-29, 0.15",
      "Ages 30-49, 0.48",
      "Ages 18-29, 0.60"
    ],
    "explanations": [
      "Ages 30-49 with 0.36 divides by the Weekly column total, $144/396$, which is the share of weekly visitors who are 30-49. Within that group the probability is $144/300=0.48$, still below $132/220=0.60$.",
      "Ages 18-29 is the right group, but 0.15 divides by the grand total, $132/900$. A person chosen from the 18-29 group visits weekly with probability $132/220=0.60$.",
      "Ages 30-49 with 0.48 is computed correctly, $144/300$, but that group leads only in the raw weekly count. The 18-29 group's rate, $132/220=0.60$, is higher.",
      "Each probability uses its own row total: $132/220=0.60$, $144/300=0.48$, and $120/380\\approx 0.32$. The 18-29 group is greatest, at $0.60$."
    ]
  },
  "q:a62ac97ac02beade": {
    "options": [
      "A survey at one location always reaches too few people",
      "Surveys cannot be used to estimate how often people exercise",
      "The researcher should have surveyed only volunteers instead",
      "Gym visitors likely exercise more than most residents"
    ],
    "explanations": [
      "Sample size is not the problem here; even a large sample taken at a gym would be biased. The issue is who is reached: gym visitors exercise more than typical residents.",
      "Surveys can estimate exercise habits when the sample represents the population. The flaw is where this sample was taken, not the use of a survey.",
      "Volunteers would add self-selection bias, not remove it. The fix is a random sample of all residents; the problem is that gym visitors exercise more than most residents.",
      "People leaving a gym likely exercise more than the typical resident, so the sample over-represents frequent exercisers and would overstate how often residents exercise."
    ]
  },
  "q:45558f4edf5d3cda": {
    "options": [
      "2",
      "-5",
      "-1",
      "0"
    ],
    "explanations": [
      "$2$ would mean $f$ rises $2$ for each unit of $x$, but $f(1)-f(0)=0-1=-1$. The slope of $-x+1$ is $-1$ on every interval.",
      "$-5$ would mean $f$ drops $5$ per unit of $x$, but $f(1)-f(0)=-1$. A line's rate of change is its slope, $-1$, on every interval.",
      "$f(x)=-x+1$ is linear with slope $-1$, the coefficient of $x$, so its average rate of change is $-1$ over every interval.",
      "$0$ would describe a constant function, but $f$ changes: $f(0)=1$ and $f(1)=0$. The slope is $-1$, the coefficient of $x$."
    ]
  },
  "q:855b73f7d10926c3": {
    "options": [
      "12",
      "18",
      "14",
      "17"
    ],
    "explanations": [
      "$x^2=36$ gives the two solutions $x=6$ and $x=-6$, and the distance between them on the number line is $6-(-6)=12$.",
      "$18$ would place the solutions at $\\pm 9$, which square to $81$, not $36$. The solutions are $\\pm 6$, and the distance between them is $12$.",
      "$14$ would put the solutions at $\\pm 7$, whose square is $49$, not $36$. The solutions are $\\pm 6$, so the distance between them is $12$.",
      "$17$ would put the solutions $8.5$ units on each side of $0$, but $8.5^2\\ne 36$. The solutions are $\\pm 6$, so the distance is $12$."
    ]
  },
  "q:79f0a9904bc0ea44": {
    "options": [
      "No solution",
      "Exactly two solutions",
      "Exactly one solution",
      "Infinitely many solutions"
    ],
    "explanations": [
      "No solution needs parallel lines with different intercepts. Here multiplying the first equation by $-2$ gives the second exactly, constant included, so they are the same line.",
      "Two distinct lines meet at most once, so exactly two solutions is impossible. These two equations describe the same line, so every point on it is a solution.",
      "Exactly one solution needs different slopes, but both equations have slope $\\frac{2}{3}$. In fact the second is $-2$ times the first, so the lines coincide.",
      "Multiplying $2x-3y=7$ by $-2$ gives $-4x+6y=-14$, exactly the second equation. Both describe the same line, so there are infinitely many solutions."
    ]
  },
  "q:baed30266cee3006": {
    "options": [
      "357",
      "273",
      "303",
      "403"
    ],
    "explanations": [
      "Substitute $t=1$: $f(1)=337(1.06)=357.22$, which rounds to $357$. One period of $6\\%$ growth adds about $20$ to the starting $337$.",
      "$273$ is below the starting value $337$, as if the model described decay. The factor $1.06$ is greater than $1$, so $f(1)=337(1.06)\\approx 357$.",
      "$303$ is about $337(0.9)$, a decrease, but the factor $1.06$ is greater than $1$, so the population grows: $f(1)=337(1.06)\\approx 357$.",
      "$403$ is about $20\\%$ more than $337$, far beyond one period at $6\\%$. One period multiplies by $1.06$: $337(1.06)\\approx 357$."
    ]
  },
  "q:3862db7cfd1becc0": {
    "options": [
      "-9",
      "-5",
      "-16",
      "-11"
    ],
    "explanations": [
      "The residual is the actual value minus the predicted value: $88-97=-9$. It is negative because the model's prediction was too high.",
      "$-5$ would require a predicted value of $93$, not $97$. The residual is the actual value minus the predicted value: $88-97=-9$.",
      "$-16$ would require a predicted value of $104$, not $97$. The residual is the actual value minus the predicted value: $88-97=-9$.",
      "$-11$ would require a predicted value of $99$, not $97$. With the given prediction, the residual is actual minus predicted: $88-97=-9$."
    ]
  },
  "q:2597bd16a186acda": {
    "options": [
      "85",
      "76",
      "87",
      "24"
    ],
    "explanations": [
      "$85$ would mean about $18$ of the $21$ marbles are red, but only $16$ are. The probability is $\\frac{16}{21}\\approx 0.762$, or $76\\%$.",
      "Divide the number of red marbles by the total number of marbles: $\\frac{16}{21}\\approx 0.762$, which is $76\\%$ to the nearest percent.",
      "$87$ is too high: $87\\%$ of $21$ is about $18.3$ marbles, but only $16$ are red. The probability is $\\frac{16}{21}\\approx 76\\%$.",
      "$24$ is the probability of NOT drawing a red marble, $\\frac{5}{21}\\approx 24\\%$. The question asks for red: $\\frac{16}{21}\\approx 76\\%$."
    ]
  },
  "q:6f181562e79048be": {
    "options": [
      "75882",
      "65536",
      "41221",
      "47382"
    ],
    "explanations": [
      "$75882$ cannot be a power of $4$: its last two digits, $82$, are not divisible by $4$. The exponent rule gives $4^{a+b}=4^a\\cdot 4^b=256\\cdot 256=65536$.",
      "Split the exponent using the product rule for powers with the same base: $4^{a+b}=4^a\\cdot 4^b=256\\cdot 256=65536$. (Here $a=b=4$, and $4^{8}=65536$.)",
      "$41221$ is odd, so it cannot be a power of $4$. The exponent rule gives $4^{a+b}=4^a\\cdot 4^b=256\\cdot 256=65536$.",
      "$47382$ cannot be a power of $4$: its last two digits, $82$, are not divisible by $4$. Multiplying gives $4^{a+b}=256\\cdot 256=65536$."
    ]
  },
  "q:d3863fca6f324325": {
    "options": [
      "3",
      "4",
      "10",
      "1"
    ],
    "explanations": [
      "$3$ fails the check: $3(3-5)=-6$, but $3-7=-4$. Distributing and solving $3x-15=x-7$ gives $2x=8$ and $x=4$.",
      "Distribute the $3$ on the left: $3x-15=x-7$. Then subtract $x$ and add $15$: $2x=8$, so $x=4$. Check: $3(4-5)=-3$ and $4-7=-3$.",
      "$10$ fails when substituted back: the left side is $3(10-5)=15$, but the right side is $10-7=3$. Distributing and solving $3x-15=x-7$ gives $x=4$.",
      "$1$ fails when substituted back: the left side is $3(1-5)=-12$, but the right side is $1-7=-6$. Distributing gives $3x-15=x-7$, so $2x=8$ and $x=4$."
    ]
  },
  "q:fe12ed859ca7628e": {
    "options": [
      "531",
      "455",
      "525",
      "540"
    ],
    "explanations": [
      "$531$ adds the current renewal counts, $315+216$, keeping the Premium subscribers' own behavior. The question says all $750$ renew at the current Plus rate, $315/450=0.70$, giving $525$.",
      "$455$ uses the overall renewal rate, $819/1350\\approx 0.607$, which blends in the weaker Basic plan. The specified rate is the Plus rate, $315/450=0.70$.",
      "The current Plus renewal rate is computed within the Plus row: $315/450=0.70$. Applying it to all $750$ subscribers gives $0.70(750)=525$.",
      "$540$ uses the Premium renewal rate, $216/300=0.72$, the rate of the group being moved. The question specifies the current Plus rate, so $0.70(750)=525$."
    ]
  },
  "q:f784d49c8c376e89": {
    "options": [
      "$15$",
      "$17$",
      "$30$",
      "$40$"
    ],
    "explanations": [
      "$15$ is the longer leg, where the algebra stops: $64+a^2=(a+2)^2$ gives $a=15$. The perimeter adds all three sides: $8+15+17=40$.",
      "$17$ is the hypotenuse, $15+2$, an intermediate value. The question asks for the perimeter, $8+15+17=40$ centimeters.",
      "$30$ fails the setup: the perimeter is $8+a+(a+2)=2a+10$, so $30$ would mean $a=10$, but $8^2+10^2=164\\ne 12^2$. The sides are $8$, $15$, and $17$.",
      "With longer leg $a$, $8^2+a^2=(a+2)^2$ gives $64=4a+4$, so $a=15$ and the hypotenuse is $17$. The perimeter is $8+15+17=40$ centimeters."
    ]
  },
  "q:de302b10d60681d6": {
    "options": [
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$-1$"
    ],
    "explanations": [
      "$\\frac{1}{2}$ is $\\sin 30°$. At $0°$ the point on the unit circle is $(1,0)$, and sine is the $y$-coordinate, $0$.",
      "At $0°$ the point on the unit circle is $(1,0)$, and sine is the $y$-coordinate of that point, so $\\sin 0°=0$.",
      "$1$ is $\\cos 0°$, the $x$-coordinate of $(1,0)$, and also $\\sin 90°$. Sine is the $y$-coordinate, which is $0$ at $0°$.",
      "$-1$ is $\\sin 270°$, at the bottom of the unit circle. At $0°$ the point is $(1,0)$, so $\\sin 0°=0$."
    ]
  },
  "q:81fd4d18c82014b9": {
    "options": [
      "96",
      "19",
      "84",
      "27"
    ],
    "explanations": [
      "$96$ does not come from $3^3$; for comparison, even the surface area is only $6\\times 3^2=54$. Volume multiplies length, width, and height: $3\\times 3\\times 3=27$.",
      "$19$ is not $3^3$. A cube with edge $3$ is built from $3$ layers of $3\\times 3=9$ unit cubes, which is $27$ unit cubes.",
      "$84$ is far more than $3\\times 3\\times 3$. A cube with edge $3$ holds $3$ layers of $9$ unit cubes, so its volume is $27$.",
      "The volume of a cube is its edge length cubed: $3^3=3\\times 3\\times 3=27$ cubic units."
    ]
  },
  "q:836079befac75ab2": {
    "options": [
      "$x = 9$ or $x = 1$",
      "No solution",
      "$x = -1$ or $x = -9$",
      "$x = -1$ only"
    ],
    "explanations": [
      "$x=9$ or $x=1$ flips the sign of the $5$, solving $|x-5|=4$ instead. Check: $|9+5|=14$, not $4$. The correct cases give $x=-1$ and $x=-9$.",
      "No solution would fit an absolute value set equal to a negative number. Here the right side is $4$, which is positive, so there are two solutions.",
      "Split into two cases: $x+5=4$ gives $x=-1$, and $x+5=-4$ gives $x=-9$. Both check: $|4|=4$ and $|-4|=4$.",
      "$x=-1$ only misses the negative case. Since $|x+5|=4$ also holds when $x+5=-4$, $x=-9$ is a second solution."
    ]
  },
  "q:b0649a498a2e1832": {
    "options": [
      "14",
      "16",
      "15",
      "13"
    ],
    "explanations": [
      "$14$ is not the average of the two middle values. With six values in order, the median is $\\frac{13+17}{2}=15$.",
      "$16$ is not the average of the middle pair, $13$ and $17$. Averaging the third and fourth values gives $\\frac{30}{2}=15$.",
      "With six values in order, the median is the average of the third and fourth values: $\\frac{13+17}{2}=15$.",
      "$13$ takes only the lower of the two middle values. With an even count, the middle values $13$ and $17$ are averaged, giving $15$."
    ]
  },
  "q:b497a7ed753e6736": {
    "options": [
      "-4",
      "-5",
      "-10",
      "-12"
    ],
    "explanations": [
      "Substituting $x=17$ into the model, the predicted value is $2(17)+14=48$, so the residual is actual minus predicted: $44-48=-4$.",
      "$-5$ would require a predicted value of $49$, but the model gives $2(17)+14=48$. The residual is $44-48=-4$.",
      "$-10$ would require a predicted value of $54$, but the model gives $2(17)+14=48$. The residual is actual minus predicted, $44-48=-4$.",
      "$-12$ would require a predicted value of $56$, but the model gives $2(17)+14=48$. The residual is actual minus predicted, $44-48=-4$."
    ]
  },
  "q:2206ebdd70824882": {
    "options": [
      "-24",
      "-26",
      "-16",
      "-20"
    ],
    "explanations": [
      "$-24$ would require $f(-3)=27$, but substituting gives $-5(-3)+8=15+8=23$. With $f(1)=3$, the difference is $3-23=-20$.",
      "$-26$ would require $f(-3)=29$, but substituting gives $-5(-3)+8=23$ and $f(1)=3$. The difference is $f(1)-f(-3)=3-23=-20$.",
      "$-16$ would require $f(-3)=19$, but $-5(-3)+8=23$. The difference is $3-23=-20$, which also equals the slope $-5$ times the change in $x$, $4$.",
      "$f(1)=-5+8=3$ and $f(-3)=15+8=23$, so $f(1)-f(-3)=3-23=-20$. Equivalently, the slope $-5$ times the change in $x$, $1-(-3)=4$, is $-20$."
    ]
  },
  "q:04e9135ae6b5e5b6": {
    "options": [
      "11",
      "2",
      "8",
      "9"
    ],
    "explanations": [
      "$11$ is the total number of targets hit, not the special ones. Solving $h+s=11$ and $2h+3s=30$ gives $s=8$.",
      "$2$ special targets leave $9$ regular ones, scoring $9(2)+2(3)=24$ points, not $30$. Solving the system gives $s=8$.",
      "Substitute $h=11-s$: $2(11-s)+3s=30$, so $22+s=30$ and $s=8$. Check: $3$ regular and $8$ special give $6+24=30$ points.",
      "$9$ special targets leave $2$ regular ones, scoring $2(2)+9(3)=31$ points, not $30$. Solving the system gives $s=8$."
    ]
  },
  "q:cbd0a8231beade78": {
    "options": [
      "$8$",
      "$40$",
      "$51.3$",
      "$24$"
    ],
    "explanations": [
      "$8$ is $|k|$, from $k^2+36=100$, the value the condition $AC=10$ produces. It is not the area; with base $8$ and height $6$, the area is $24$.",
      "$40$ uses $AC=10$ as a base with $8$ as the height, $\\frac{1}{2}(10)(8)$. But $8$ is not the height to side $\\overline{AC}$; base $\\overline{AB}=8$ with height $6$ gives $24$.",
      "$51.3$ takes $BC=\\sqrt{16^2+6^2}\\approx 17.1$ as the base with height $6$. But $6$ is the height to $\\overline{AB}$, not to $\\overline{BC}$, so the area is $\\frac{1}{2}(8)(6)=24$.",
      "Side $\\overline{AB}$ lies on the $x$-axis with length $8$, and $C$ is $6$ units above it, so the area is $\\frac{1}{2}(8)(6)=24$ no matter what $k$ is."
    ]
  },
  "q:dea4f76af23430d5": {
    "options": [
      "6",
      "7",
      "12",
      "3"
    ],
    "explanations": [
      "$6$ matches exponents without rewriting the base, but $4^x$ and $2^6$ have different bases. Writing $4^x=2^{2x}$ gives $2x=6$, so $x=3$.",
      "$7$ fails the check: $4^7=(2^2)^7=2^{14}$, which is not $2^6$. Since $4^x=2^{2x}$, set $2x=6$ to get $x=3$.",
      "$12$ multiplies by $2$ instead of dividing: from $2x=6$, $x=3$, not $12$. Check: $4^{12}=2^{24}$, far larger than $2^6$.",
      "Rewrite $4$ as $2^2$ so both sides share a base: $4^x=2^{2x}$. Setting $2^{2x}=2^6$ gives $2x=6$, so $x=3$. Check: $4^3=64=2^6$."
    ]
  },
  "q:37dd588f53bb062c": {
    "options": [
      "$2$",
      "$5$",
      "$7$",
      "$9$"
    ],
    "explanations": [
      "$2$ is the smaller nonzero depth alone. Factoring gives $-2x(x-2)(x-7)$, so the depths are $2$ and $7$, and their positive difference is $5$.",
      "Factoring gives $A(x)=-2x(x^{2}-9x+14)=-2x(x-2)(x-7)$, so the other zeros are $2$ and $7$. Their positive difference is $7-2=5$.",
      "$7$ is the larger depth, where the factoring ends. The question asks for the difference between the depths $2$ and $7$, which is $5$.",
      "$9$ is the sum of the depths, $2+7$, read off the $-9x$ in the quadratic factor. The question asks for their difference, $7-2=5$."
    ]
  },
  "q:ac8a0d63862ca503": {
    "options": [
      "7",
      "3",
      "12",
      "8"
    ],
    "explanations": [
      "Factoring gives $(x-3)(x-4)=0$, so the roots are $3$ and $4$, and their sum is $7$, which also equals $-\\frac{b}{a}=7$.",
      "$3$ is only one of the two roots. Factoring gives $(x-3)(x-4)=0$, so the roots are $3$ and $4$ and their sum is $7$.",
      "$12$ is the product of the roots, $\\frac{c}{a}$, not their sum. The sum of the roots is $-\\frac{b}{a}=7$, or $3+4$.",
      "$8$ does not match the roots: $3+4=7$. Both factoring, $(x-3)(x-4)$, and the formula $-\\frac{b}{a}$ give a sum of $7$."
    ]
  },
  "q:1ef00dc16ec15b88": {
    "options": [
      "16",
      "60",
      "36",
      "43"
    ],
    "explanations": [
      "$16$ reverses the balance ratio, $24\\times\\frac{1.2}{1.8}$. The combined mean $9.8$ is closer to Q's mean ($1.2$ away) than to P's ($1.8$ away), so Q must be the larger sample, $36$.",
      "$60$ is the combined sample size, $24+36$, found after solving correctly. The question asks only for the number of leaves in Sample Q, which is $36$.",
      "Let $n$ be the size of Sample Q and set the combined mean $\\frac{24(8.0)+11n}{24+n}=9.8$: $192+11n=235.2+9.8n$, so $1.2n=43.2$ and $n=36$ leaves in Sample Q.",
      "$43$ is $43.2$, the value of $1.2n$, with the final division by $1.2$ skipped. Dividing gives $n=36$ leaves in Sample Q."
    ]
  },
  "q:792aa9cba7033acc": {
    "options": [
      "73",
      "42",
      "45",
      "59"
    ],
    "explanations": [
      "$73$ does not make the angles sum to $90°$: $45+73=118$. Complementary angles total $90°$, so $x=90-45=45$.",
      "$42$ gives a sum of $45+42=87°$, which falls short of $90°$. Complementary angles total exactly $90°$, so $x=90-45=45$.",
      "By definition, complementary angles add to $90°$, so $x=90-45=45$. The two angles are equal, $45°$ each.",
      "$59$ gives a sum of $45+59=104°$, which is more than $90°$. For the angles to be complementary, $x=90-45=45$."
    ]
  },
  "q:1802585f60fc8a5d": {
    "options": [
      "$\\frac{x}{3}$",
      "$\\sqrt[3]{x}$",
      "$x^3$",
      "$3\\sqrt{x}$"
    ],
    "explanations": [
      "$\\frac{x}{3}$ divides by $3$, but a fractional exponent is not division. The denominator of the exponent $\\frac{1}{3}$ names the root, so $x^{1/3}=\\sqrt[3]{x}$.",
      "A fractional exponent $\\frac{1}{n}$ means the $n$th root, so $x^{1/3}=\\sqrt[3]{x}$, the cube root of $x$.",
      "$x^3$ uses $3$ as the exponent instead of $\\frac{1}{3}$. Cubing undoes the cube root; the cube root itself is $x^{1/3}=\\sqrt[3]{x}$.",
      "$3\\sqrt{x}$ puts the $3$ in front as a coefficient and takes a square root. The $3$ belongs as the index of the radical: $\\sqrt[3]{x}$."
    ]
  }
}

export default ENTRIES
