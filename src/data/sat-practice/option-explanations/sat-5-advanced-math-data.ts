import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:acf722aa151b3571": {
    "options": [
      "314",
      "377",
      "408",
      "1131"
    ],
    "explanations": [
      "This is the volume alone: $\\tfrac{1}{3}\\pi(5)^2(12)=100\\pi\\approx 314$ cubic centimeters. The question asks for mass, so the density of $1.2$ grams per cubic centimeter still has to be applied.",
      "The slant height is not the height: $h=\\sqrt{13^2-5^2}=12$. Volume is $\\tfrac{1}{3}\\pi(5)^2(12)=100\\pi\\approx 314.2$ cubic centimeters, and mass is $314.2\\times 1.2\\approx 377$ grams.",
      "This uses the slant height $13$ as the cone's height: $\\tfrac{1}{3}\\pi(25)(13)\\times 1.2\\approx 408$. The slant height is the hypotenuse of the radius-height right triangle, so the actual height is $12$.",
      "This uses the cylinder formula $\\pi r^2 h=300\\pi$ and then multiplies by $1.2$, getting about $1131$. A cone holds only one third of the matching cylinder, so the factor $\\tfrac{1}{3}$ is missing."
    ]
  },
  "q:28b895a9e1ba0dad": {
    "options": [
      "3 to 5",
      "5 to 3",
      "13 to 17",
      "1 to 1"
    ],
    "explanations": [
      "This reverses the lever: the combined mean $29$ is $3$ from Group A and $5$ from Group B, and the group CLOSER to the combined mean is the larger one. With 3 A-runners and 5 B-runners the combined mean would be $31$, not $29$.",
      "The combined mean $29$ lies $3$ above Group A's $26$ and $5$ below Group B's $34$, so group sizes are inversely proportional to those gaps: A to B is $5:3$. Check: $\\frac{5(26)+3(34)}{8}=29$.",
      "$13:17$ is just the ratio of the two means, $26:34$, reduced. The means themselves say nothing about how many runners are in each group; only the distances from the combined mean do.",
      "Equal group sizes would put the combined mean exactly halfway between $26$ and $34$, at $30$. The actual combined mean is $29$, closer to Group A, so Group A must have more runners."
    ]
  },
  "q:ed007a0cc3e6fa06": {
    "options": [
      "$y \\leq 1$",
      "$y \\geq -1$",
      "$y \\geq 1$",
      "All real numbers"
    ],
    "explanations": [
      "$y\\leq 1$ would be the range if the parabola opened downward with a maximum of $1$. Here the leading coefficient $4$ is positive, so $1$ is a minimum, not a maximum.",
      "This flips the sign of the vertex's $y$-coordinate. In $4(x+5)^2+1$ the constant added outside the square is $+1$, so the minimum value is $1$, not $-1$. (The $+5$ inside affects only the $x$-coordinate.)",
      "Since $(x+5)^2\\geq 0$ and the coefficient $4$ is positive, the smallest value of $4(x+5)^2$ is $0$, reached at $x=-5$. Adding $1$ gives a minimum output of $1$, so the range is $y\\geq 1$.",
      "All real numbers is the DOMAIN of this quadratic, not its range. A parabola is bounded on one side by its vertex, so its outputs cannot take every real value."
    ]
  },
  "q:0fe5371b42ae76d9": {
    "options": [
      "$3^{2/3}$",
      "$3^{3/2}$",
      "$\\sqrt{3}$",
      "$9$"
    ],
    "explanations": [
      "With $S=kV^{2/3}$, replacing $V$ by $3V$ gives $k(3V)^{2/3}=3^{2/3}\\cdot kV^{2/3}$, so the surface area is multiplied by $3^{2/3}\\approx 2.08$. The constant $k$ does not change because the shape stays the same.",
      "$3^{3/2}$ inverts the exponent, using $\\frac{3}{2}$ instead of $\\frac{2}{3}$. That would be the factor if volume were proportional to $S^{2/3}$, i.e., if the roles of $S$ and $V$ were swapped.",
      "$\\sqrt{3}=3^{1/2}$ comes from reading $V^{2/3}$ as a plain square root. The exponent is two thirds, so the factor is the cube root of $3$ squared, not the square root of $3$.",
      "$9$ treats the exponent as $2$: it applies the factor $3$ and then squares, ignoring the cube root entirely. The correct factor is $(3^2)^{1/3}=\\sqrt[3]{9}$, which is about $2.08$, far less than $9$."
    ]
  },
  "q:72d42dd5c839e73c": {
    "options": [
      "$53$",
      "$202$",
      "$101$",
      "$1{,}496$"
    ],
    "explanations": [
      "$53$ is the number of gallons used, $1496\\div 28\\approx 53.4$. That is the input to the cost function $C$, not the cost itself; the gallons still have to be multiplied by $\\$3.79$.",
      "A round trip is $2\\times 34=68$ miles, so the month totals $22\\times 68=1{,}496$ miles. Gallons: $1496\\div 28\\approx 53.43$. Cost: $3.79\\times 53.43\\approx \\$202$, the composition $C(g(1496))$.",
      "$101$ counts only one direction of each trip: $22\\times 34=748$ miles, about $26.7$ gallons, about $\\$101$. A round trip covers $34$ miles each way, so the mileage is twice that.",
      "$1{,}496$ is the number of miles driven in the month, $22\\times 68$. It is the first intermediate value and has not yet been converted to gallons or to dollars."
    ]
  },
  "q:e9560bd6365e0cf3": {
    "options": [
      "$-14$",
      "$1$",
      "$2$",
      "$6$"
    ],
    "explanations": [
      "By the remainder theorem, dividing by $x-3$ leaves remainder $q(3)$, so $q(3)=6$: $27-36+3k+12=6$ gives $k=1$. Then substitute $-2$: $q(-2)=(-2)^3-4(-2)^2+(-2)+12=-8-16-2+12=-14$.",
      "$1$ is the value of $k$, found from $q(3)=6$. The question asks for $q(-2)$ after $k$ is known, so stopping at $k$ answers the intermediate step rather than the question.",
      "$2$ comes from treating $(-2)^3$ as $+8$: $8-16-2+12=2$. The cube of a negative number is negative, so the first term should be $-8$, which lowers the result to $-14$.",
      "$6$ is $q(2)$, from substituting $+2$ instead of $-2$: $8-16+2+12=6$. It also happens to be the given remainder, which makes it feel familiar, but it is not $q(-2)$."
    ]
  },
  "q:57f14f831380f69f": {
    "options": [
      "Keep both answers, since squaring is reversible",
      "Square both sides a second time to confirm",
      "Check each answer in the original equation",
      "Discard any negative answers automatically"
    ],
    "explanations": [
      "Squaring is NOT reversible: $x=-3$ and $x=3$ both square to $9$. That is exactly why squaring both sides can create extraneous solutions that do not satisfy the original equation.",
      "Squaring a second time only moves further from the original equation and cannot reveal which solutions were introduced by the first squaring. Verification has to happen in the ORIGINAL equation.",
      "Squaring both sides can introduce extraneous solutions, because $a^2=b^2$ does not imply $a=b$. Substituting each candidate back into the original radical equation is the only reliable way to keep the genuine ones.",
      "Negative values are often perfectly valid solutions of radical equations (for example $\\sqrt{x+5}=2$ gives $x=-1$). What must be rejected is any value that fails the original equation, whatever its sign."
    ]
  },
  "q:caa97ee4a5e02254": {
    "options": [
      "$6\\pi$",
      "$18\\pi$",
      "$72\\pi$",
      "$36\\pi$"
    ],
    "explanations": [
      "$6\\pi$ is the length of the semicircle's curved edge, $\\pi r=6\\pi$. The question asks for area, which uses $r^2$, not the arc length.",
      "The diameter is $12$, so the radius is $6$. A full circle of radius $6$ has area $\\pi(6)^2=36\\pi$, and a semicircle is half of that: $18\\pi$.",
      "$72\\pi$ uses the diameter $12$ in place of the radius: $\\frac{\\pi(12)^2}{2}=72\\pi$. The radius is half the diameter, $6$, which makes the area four times smaller.",
      "$36\\pi$ is the area of the whole circle of radius $6$. A semicircle is half of the circle, so the factor $\\frac{1}{2}$ is still needed."
    ]
  },
  "q:e4dc96a3a2a9a5e9": {
    "options": [
      "$\\frac{x^2+5}{x^2+4}$",
      "$\\frac{(x+5)^2}{(x+4)^2}$",
      "$\\frac{2(x+5)}{2(x+4)}$",
      "$\\frac{x^2+25}{x^2+16}$"
    ],
    "explanations": [
      "Squaring a fraction squares the whole numerator and whole denominator, not just the variable: $(x+5)^2=x^2+10x+25$, not $x^2+5$. This distributes the exponent incorrectly.",
      "Multiplying a fraction by itself squares it, and the square applies to the entire numerator and the entire denominator: $\\frac{x+5}{x+4}\\cdot\\frac{x+5}{x+4}=\\frac{(x+5)(x+5)}{(x+4)(x+4)}=\\frac{(x+5)^2}{(x+4)^2}$.",
      "Multiplying is not adding. $\\frac{2(x+5)}{2(x+4)}$ would come from adding the two identical numerators and denominators, and it simplifies right back to the original fraction, which cannot equal its own square.",
      "$(x+5)^2$ is $x^2+10x+25$, not $x^2+25$. Dropping the middle term is the classic error of squaring each term of a binomial separately."
    ]
  },
  "q:e9b945ed07daebc1": {
    "options": [
      "Neither, because both sites have similar rates",
      "Site 2, because more of its employees attended",
      "Site 1, because its attendance rate is higher",
      "Site 2, because its attendance rate is higher"
    ],
    "explanations": [
      "The rates are far apart, not similar: Site 1 is $\\frac{25}{31}\\approx 81\\%$ while Site 2 is $\\frac{37}{79}\\approx 47\\%$. A difference of over 30 percentage points is a clear gap.",
      "Site 2 had more attendees ($37$ versus $25$) only because it has far more employees ($79$ versus $31$). Likelihood is about rate, and $\\frac{37}{79}$ is less than half.",
      "Likelihood means rate, so divide by each site's own total: Site 1 is $\\frac{25}{31}\\approx 81\\%$ and Site 2 is $\\frac{37}{79}\\approx 47\\%$. Site 1 employees were far more likely to attend.",
      "Site 2's attendance rate is $\\frac{37}{79}\\approx 47\\%$, which is LOWER than Site 1's $\\frac{25}{31}\\approx 81\\%$. The reasoning (compare rates) is right, but the comparison itself is backward."
    ]
  },
  "q:b78093609a85e81d": {
    "options": [
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\sqrt{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{3}$"
    ],
    "explanations": [
      "$\\frac{\\sqrt{3}}{2}$ is $\\sin 60^{\\circ}$, not $\\tan 60^{\\circ}$. The angle $3a=60^{\\circ}$ is right, but the question asks for the tangent, which is $\\frac{\\sin}{\\cos}=\\frac{\\sqrt{3}/2}{1/2}=\\sqrt{3}$.",
      "For acute angles, $\\sin\\theta=\\cos\\phi$ exactly when $\\theta+\\phi=90^{\\circ}$. So $3a+(a+10)=90$, giving $a=20$ and $3a=60^{\\circ}$. Then $\\tan 60^{\\circ}=\\sqrt{3}$.",
      "$\\frac{1}{2}$ is $\\cos 60^{\\circ}$, not $\\tan 60^{\\circ}$. It uses the correct angle but the wrong trigonometric ratio.",
      "$\\frac{\\sqrt{3}}{3}=\\tan 30^{\\circ}$, which is the tangent of the OTHER angle, $a+10=30^{\\circ}$. The question asks for $\\tan(3a)$, where $3a=60^{\\circ}$."
    ]
  },
  "q:cc7d1a9fd52e4424": {
    "options": [
      "1",
      "0",
      "-4",
      "4"
    ],
    "explanations": [
      "Any nonzero base raised to the power $0$ equals $1$, because $4^0=\\frac{4^1}{4^1}=1$ by the quotient rule. So $4^0=1$.",
      "$0$ confuses the exponent with the result. A zero exponent does not make the value zero; it means no factors of $4$ are multiplied, leaving the multiplicative identity $1$.",
      "$-4$ has no basis here: a zero exponent never changes the sign of a base, and $4^0$ is not the negative of the base.",
      "$4$ is $4^1$, not $4^0$. Raising to the first power leaves the base unchanged; raising to the zeroth power gives $1$."
    ]
  },
  "q:f0c558a7d5958b6e": {
    "options": [
      "Shifts $f(x)$ left by $8$ units",
      "Shifts $f(x)$ right by $8$ units",
      "Shifts $f(x)$ up by $8$ units",
      "Shifts $f(x)$ down by $8$ units"
    ],
    "explanations": [
      "Subtracting inside the function shifts RIGHT, not left: the input that used to be $0$ now has to be $x=8$ to produce the same output, so every point moves 8 units right. A left shift would be $f(x+8)$.",
      "Replacing $x$ with $x-8$ shifts the graph horizontally in the direction opposite the sign: $g(8)=f(0)$, so the point that was at $x=0$ moves to $x=8$. That is a shift right by $8$ units.",
      "A vertical shift up by $8$ would be $f(x)+8$, with the $8$ added OUTSIDE the function. Here the $8$ is inside the parentheses, so it affects the input and moves the graph horizontally.",
      "A vertical shift down by $8$ would be $f(x)-8$, with the subtraction OUTSIDE the function. Here the subtraction is inside, so it changes the input and moves the graph horizontally, not vertically."
    ]
  },
  "q:2d4a2c5052968af0": {
    "options": [
      "15",
      "18",
      "13",
      "35"
    ],
    "explanations": [
      "$15$ would come from adding all the numbers: $2+5+8$. The $2$ is a slope that multiplies $x$, so the first step is $2\\times 5=10$, not $2+5$.",
      "Substitute $x=5$ into the line of best fit and follow the order of operations: multiply first, then add. $y=2(5)+8=10+8=18$, so the predicted value is $18$.",
      "$13$ is $5+8$, which skips the slope entirely. The line multiplies $x$ by $2$ before adding $8$, so $5$ must first become $10$.",
      "$35$ does not come from the equation: checking, $y=35$ would require $2x=27$, so $x=13.5$, not $5$. It likely comes from multiplying rather than adding the constant."
    ]
  },
  "q:0b71c5a6f40d8215": {
    "options": [
      "$(x + 3)(x - 3)$",
      "$(x + 3)^2$",
      "$(x - 3)^2$",
      "$(x + 9)(x - 1)$"
    ],
    "explanations": [
      "$x^2-9$ is a difference of two squares, $x^2-3^2$, which always factors as (sum)(difference): $(x+3)(x-3)$. Check by expanding: $x^2-3x+3x-9=x^2-9$.",
      "$(x+3)^2=x^2+6x+9$, a perfect square trinomial with a $+9$ and a middle term. The given expression has $-9$ and no $x$ term, so it is not a perfect square.",
      "$(x-3)^2=x^2-6x+9$. It has a middle term of $-6x$ and ends in $+9$, neither of which matches $x^2-9$.",
      "$(x+9)(x-1)=x^2+8x-9$. The constant $-9$ matches, but the middle term $8x$ does not vanish, so this is not a factorization of $x^2-9$."
    ]
  },
  "q:34ac2105acdf29a3": {
    "options": [
      "14",
      "12",
      "5",
      "6"
    ],
    "explanations": [
      "$14$ does not follow from the equation: it is neither the radius $6$ nor twice it. Checking, a circle of diameter $14$ would have radius $7$ and equation $x^2+y^2=49$.",
      "In $x^2+y^2=r^2$, the constant $36$ is $r^2$, so the radius is $\\sqrt{36}=6$. The diameter is twice the radius: $2(6)=12$.",
      "$5$ has no basis in $x^2+y^2=36$; it would be the radius of $x^2+y^2=25$. Here $r^2=36$, so $r=6$ and the diameter is $12$.",
      "$6$ is the radius, $\\sqrt{36}$. The question asks for the diameter, which is twice the radius, $12$."
    ]
  },
  "q:9ee8b521d743349b": {
    "options": [
      "-1",
      "2",
      "4",
      "0"
    ],
    "explanations": [
      "$-1$ is the value of $b$, not $c$. In $x^2+bx+c$ the constant term is the PRODUCT of the roots, which here is $1\\times 0=0$.",
      "$2$ would be the product if the second root were $2$, but then the sum would be $1+2=3$, not $1$. With sum $1$ and one root $1$, the other root must be $0$.",
      "$4$ cannot be the product of two roots whose sum is $1$ when one of them is $1$: the other root is forced to be $0$, so the product is $0$.",
      "The sum of the roots is $1$ and one root is $1$, so the other root is $1-1=0$. The constant $c$ equals the product of the roots, $1\\times 0=0$. Check: $x^2-x=x(x-1)$ has roots $0$ and $1$."
    ]
  },
  "q:6981e29903b3c92d": {
    "options": [
      "$0.5$",
      "$2$",
      "$25$",
      "$37$"
    ],
    "explanations": [
      "$0.5$ is the EARLIER time, in seconds, at which the heights are equal. The question asks for a height, in feet, at the later meeting time.",
      "$2$ is the later TIME, in seconds, not a height. It is the intermediate value; the height must still be found by substituting $t=2$ into either height formula.",
      "$25$ is the height at the earlier time: $8(0.5)+21=25$. It answers the right kind of question (a height) about the wrong moment.",
      "Setting $-16t^2+48t+5=8t+21$ gives $2t^2-5t+2=0$, so $(2t-1)(t-2)=0$ and $t=0.5$ or $t=2$. At the later time $t=2$, the height is $8(2)+21=37$ feet; the ball agrees: $-64+96+5=37$."
    ]
  },
  "q:b5b825ca9742f6df": {
    "options": [
      "$(-2, 0)$",
      "$(2, 0)$",
      "$(4, 0)$",
      "$(-4, 0)$"
    ],
    "explanations": [
      "A fraction is zero only when its numerator is zero: $x+2=0$ gives $x=-2$, and the denominator there is $-6\\neq 0$. So the x-intercept is $(-2,0)$.",
      "$(2,0)$ is a sign error: $x+2=0$ gives $x=-2$, not $2$. Checking, $f(2)=\\frac{4}{-2}=-2$, which is not zero.",
      "$x=4$ makes the DENOMINATOR zero, so $f$ is undefined there; $x=4$ is the vertical asymptote, not an intercept. A function never crosses the x-axis where it is undefined.",
      "$(-4,0)$ flips the sign of the denominator's constant and uses the wrong part of the fraction. Checking, $f(-4)=\\frac{-2}{-8}=\\frac{1}{4}$, which is not zero."
    ]
  },
  "q:138c0e4c1aba9600": {
    "options": [
      "$-4$",
      "$-2$",
      "$-1$",
      "$1$"
    ],
    "explanations": [
      "$-4$ is the value of $c$ that makes the discriminant zero, not the solution. The question asks for the single $x$-value that solves the resulting equation $x^2+2x+1=0$.",
      "$-2$ is $-b$ rather than $-\\frac{b}{2}$. For a repeated root of $x^2+bx+c=0$, $x=-\\frac{b}{2a}=-\\frac{2}{2}=-1$; forgetting to halve gives $-2$.",
      "Rearranging gives $x^2+2x+(c+5)=0$. One real solution means the discriminant is zero: $4-4(c+5)=0$, so $c=-4$. The equation is $x^2+2x+1=(x+1)^2=0$, so $x=-1$.",
      "$1$ is a sign error, reading the perfect square as $(x-1)^2$. The equation is $x^2+2x+1=(x+1)^2$, whose root is $x=-1$. Checking, $x=1$ gives $1+6-4=3$ versus $4-5=-1$."
    ]
  },
  "q:2aa2e35aa0aaf46e": {
    "options": [
      "$\\frac{x + 3}{x(x+3)}$",
      "$\\frac{2}{2x + 3}$",
      "$\\frac{2x + 3}{x(x+3)}$",
      "$\\frac{2x + 3}{x^2+3}$"
    ],
    "explanations": [
      "$\\frac{x+3}{x(x+3)}$ is only the first fraction rewritten over the common denominator. The second fraction, which becomes $\\frac{x}{x(x+3)}$, has not been added in yet.",
      "$\\frac{2}{2x+3}$ comes from adding numerators to numerators and denominators to denominators. Fractions are not added that way; a common denominator is required.",
      "The common denominator is $x(x+3)$, so rewrite each fraction over it and then add the numerators: $\\frac{x+3}{x(x+3)}+\\frac{x}{x(x+3)}=\\frac{(x+3)+x}{x(x+3)}=\\frac{2x+3}{x(x+3)}$.",
      "The numerator $2x+3$ is right, but $x(x+3)=x^2+3x$, not $x^2+3$. Dropping the $3x$ when expanding the denominator is the slip here."
    ]
  },
  "q:3d33da6dfecaa935": {
    "options": [
      "72",
      "648",
      "1013",
      "1296"
    ],
    "explanations": [
      "$72$ is the base AREA, $a^2$, found from $2a^2+81=225$. It is an intermediate value; the volume multiplies it by the height $9$.",
      "The space diagonal of a box with square base edge $a$ and height $9$ satisfies $a^2+a^2+9^2=15^2$, so $2a^2=144$ and $a^2=72$. Volume is base area times height: $72\\times 9=648$.",
      "$1013$ (really $1012.5$) comes from ignoring the height in the diagonal equation, setting $2a^2=225$ so $a^2=112.5$, and then multiplying by $9$. The $9^2$ term belongs in the space-diagonal relation.",
      "$1296$ uses the base diagonal $12$ as the base EDGE: $12^2\\times 9=1296$. The base diagonal satisfies $d^2+9^2=15^2$ so $d=12$, but the edge is $\\frac{12}{\\sqrt{2}}$, giving base area $72$."
    ]
  },
  "q:dbf85a683cb53f43": {
    "options": [
      "$600$",
      "$1{,}697$",
      "$15{,}000$",
      "$16{,}697$"
    ],
    "explanations": [
      "$600$ treats the $7$ percent as simple (straight-line) depreciation: $24000(1-0.35)=15{,}600$, minus $15{,}000$. Plan B compounds, taking $7$ percent of a shrinking value each year, so it loses less than $35$ percent overall.",
      "Plan A after $5$ years: $24000-5(1800)=15{,}000$. Plan B: $24000(0.93)^5\\approx 16{,}697$. The difference is about $\\$1{,}697$.",
      "$15{,}000$ is the Plan A value after $5$ years, $24000-5(1800)$. It is one of the two values being compared, not the difference between them.",
      "$16{,}697$ is the Plan B value after $5$ years, $24000(0.93)^5$. The question asks how much it EXCEEDS the Plan A value, so $15{,}000$ must be subtracted."
    ]
  },
  "q:bb942a4247b451a0": {
    "options": [
      "610",
      "750",
      "364",
      "1,257"
    ],
    "explanations": [
      "$610$ applies the overall late rate, $\\frac{160}{1050}\\approx 15.2\\%$, to the Express shipments. That rate is dominated by Standard packages; the question specifies the Express late rate.",
      "$750$ uses $\\frac{30}{160}=18.75\\%$, the share of LATE packages that were Express. That conditional runs the wrong way; it would need to be applied to a count of late packages, not to shipments.",
      "The late rate among Express packages uses the Express column total as the denominator: $\\frac{30}{330}\\approx 0.0909$. Applied to $4{,}000$ Express packages: $0.0909\\times 4000\\approx 364$.",
      "$1{,}257$ scales $\\frac{330}{1050}$, the Express share of all shipments. That measures how many packages were Express, not how often Express packages arrive late."
    ]
  },
  "q:867a00bada388148": {
    "options": [
      "$93$",
      "$560$",
      "$86$",
      "$87$"
    ],
    "explanations": [
      "$93$ divides the $560$ affordable labor-hours by $6$ and ignores the fixed $40$-hour setup. Only $520$ hours are left for assembly after setup, giving $86$ bicycles.",
      "$560$ is the number of labor-hours the budget buys, $17920\\div 32$. It is an intermediate; the hours must still be converted to bicycles through $h(n)=6n+40$.",
      "Cost of $n$ bicycles is $c(h(n))=32(6n+40)=192n+1280$. Requiring $192n+1280\\leq 17920$ gives $n\\leq 86.67$, and since only whole bicycles count, the maximum is $86$.",
      "$87$ rounds $86.67$ UP. Checking, $87$ bicycles cost $192(87)+1280=17{,}984$ dollars, which exceeds the $\\$17{,}920$ budget."
    ]
  },
  "q:88f56d8be0343db5": {
    "options": [
      "-16",
      "8",
      "-10",
      "16"
    ],
    "explanations": [
      "$-16$ cannot be right: a positive base raised to any real power is positive. It also uses $16=4^2$, treating the exponent $\\frac{3}{2}$ as $2$, and then flips the sign.",
      "A fractional exponent means take the root given by the denominator, then the power given by the numerator: $4^{3/2}=(\\sqrt{4})^3=2^3=8$. Equivalently, $\\sqrt{4^3}=\\sqrt{64}=8$.",
      "$-10$ is impossible for a positive base, and $10$ matches no step in the computation. Check: $8^2=64=4^3$, so $8$ is the value with square $4^3$.",
      "$16$ is $4^2$, which treats $\\frac{3}{2}$ as if it were $2$ (or multiplies $4\\times 4$ after taking the root). The exponent $\\frac{3}{2}$ means square root, then cube: $2^3=8$."
    ]
  },
  "q:768b8828796bb507": {
    "options": [
      "$-4 < x < 8$",
      "$x < -4$ or $x > 8$",
      "$x = -4$ or $x = 8$",
      "No solution"
    ],
    "explanations": [
      "$|x-2|<6$ means the distance from $x$ to $2$ is less than $6$, so $-6<x-2<6$. Adding $2$ throughout gives $-4<x<8$.",
      "$x<-4$ or $x>8$ describes the points MORE than $6$ units from $2$, which solves $|x-2|>6$. The inequality here is 'less than', so the solution is the interval between.",
      "$x=-4$ or $x=8$ solves the EQUATION $|x-2|=6$. The question is an inequality, so the answer is a whole interval of values, not two isolated points.",
      "There are plenty of solutions: $x=2$ gives $|0|=0<6$. An absolute-value inequality has no solution only when it is compared against a negative number, as in $|x-2|<-6$."
    ]
  },
  "q:9b6f35d86364a79b": {
    "options": [
      "24",
      "26",
      "19",
      "16"
    ],
    "explanations": [
      "The hypotenuse is the longest side, so the missing leg satisfies $b^2=26^2-10^2=676-100=576$, giving $b=24$. This is the $5$-$12$-$13$ triple doubled.",
      "$26$ is the hypotenuse itself. A leg must be shorter than the hypotenuse, so the other leg cannot also be $26$.",
      "$19$ does not satisfy the Pythagorean theorem: $19^2+10^2=461$, not $676$. It roughly comes from $26-10+3$, which is not a valid shortcut.",
      "$16$ is $26-10$, subtracting the lengths directly. The Pythagorean theorem subtracts SQUARES: $\\sqrt{676-100}=24$, not $26-10$."
    ]
  },
  "q:d2917c5858e39e4a": {
    "options": [
      "$\\frac{5}{(x+1)(x+2)}$",
      "$\\frac{4}{(x+1)(x+2)}$",
      "$\\frac{6}{x+1+x+2}$",
      "$\\frac{6}{(x+1)(x+2)}$"
    ],
    "explanations": [
      "$\\frac{5}{(x+1)(x+2)}$ is just the first fraction with the second one dropped. Adding $\\frac{1}{(x+1)(x+2)}$ raises the numerator from $5$ to $6$.",
      "$\\frac{4}{(x+1)(x+2)}$ subtracts the numerators, $5-1$. The expression is a sum, so the numerators are added: $5+1=6$.",
      "The numerator $6$ is right, but the denominators are NOT added when fractions are combined. Both fractions already share $(x+1)(x+2)$, which stays as the common denominator.",
      "Both fractions have the same denominator, so add the numerators and keep the denominator: $\\frac{5+1}{(x+1)(x+2)}=\\frac{6}{(x+1)(x+2)}$."
    ]
  },
  "q:7782497470fd0db1": {
    "options": [
      "$a^2 + b^2 = c$",
      "$a^2 - b^2 = c^2$",
      "$a^2 + b^2 = c^2$",
      "$(a + b)^2 = c^2$"
    ],
    "explanations": [
      "$a^2+b^2=c$ leaves the hypotenuse unsquared, so the units do not even match (area versus length). The hypotenuse must also be squared: $c^2$.",
      "$a^2-b^2=c^2$ subtracts the legs' squares. Rearranging the true statement gives $c^2-a^2=b^2$, so a difference of squares equals a LEG squared, never the hypotenuse squared.",
      "In a right triangle with legs $a$ and $b$ and hypotenuse $c$, the squares of the legs add to the square of the hypotenuse: $a^2+b^2=c^2$. Check with $3$-$4$-$5$: $9+16=25$.",
      "$(a+b)^2$ expands to $a^2+2ab+b^2$, which carries an extra $2ab$ term that the theorem does not have. Check with the $3$-$4$-$5$ triangle: $(3+4)^2=49$, but $c^2=25$."
    ]
  },
  "q:49621ca6379ed06a": {
    "options": [
      "3",
      "7",
      "6",
      "5"
    ],
    "explanations": [
      "A degree-$n$ polynomial has at most $n-1$ turning points, because its derivative has degree $n-1$ and so at most $n-1$ zeros. For degree $4$ that is $3$.",
      "$7$ is $2n-1$, which has no meaning here. The number of turning points is bounded by $n-1=3$; a quartic cannot wiggle seven times.",
      "$6$ exceeds the degree itself. A polynomial of degree $4$ can have at most $4$ x-intercepts and at most $3$ turning points, never $6$.",
      "$5$ is $n+1$, going the wrong direction. The bound is $n-1$: a turning point occurs between consecutive zeros of the polynomial, and a degree-$4$ polynomial has at most $4$ zeros, so at most $3$ turns."
    ]
  },
  "q:0bb512386604f48d": {
    "options": [
      "3",
      "13",
      "9",
      "10"
    ],
    "explanations": [
      "$x=3$ predicts $\\hat{y}=2(3)+22=28$, not $40$. It is the residual $18$ divided by $6$ rather than by the slope $2$.",
      "$x=13$ predicts $\\hat{y}=2(13)+22=48$, not $40$. That is $8$ too high; the correct input is $9$.",
      "Set the predicted value equal to $40$ and solve for the input: $2x+22=40$, so $2x=18$ and $x=9$. Check by substituting back: $2(9)+22=40$.",
      "$x=10$ predicts $\\hat{y}=2(10)+22=42$, not $40$. It comes from rounding $\\frac{18}{2}$ carelessly or subtracting $20$ instead of $22$."
    ]
  },
  "q:15d6e46b720b0691": {
    "options": [
      "$(\\cos\\theta, \\sin\\theta)$",
      "$(1, \\theta)$",
      "$(\\tan\\theta, 1)$",
      "$(\\sin\\theta, \\cos\\theta)$"
    ],
    "explanations": [
      "On the unit circle the radius is $1$, so the horizontal coordinate is $\\cos\\theta$ and the vertical coordinate is $\\sin\\theta$: the point is $(\\cos\\theta,\\sin\\theta)$.",
      "$(1,\\theta)$ mixes a distance and an angle, which is polar-style notation, not $xy$-coordinates. Only at $\\theta=0$ does the point actually sit at $(1,0)$.",
      "$(\\tan\\theta,1)$ puts every point on the horizontal line $y=1$, which touches the unit circle only at the top. Points on the circle satisfy $x^2+y^2=1$, which this fails.",
      "$(\\sin\\theta,\\cos\\theta)$ swaps the two coordinates. At $\\theta=0$ it gives $(0,1)$, but the point at angle $0$ is $(1,0)$ on the positive $x$-axis."
    ]
  },
  "q:453621544c9f0b1b": {
    "options": [
      "$x = 8$",
      "$x = -6$",
      "$x = -8$",
      "$x = 6$"
    ],
    "explanations": [
      "$x=8$ uses the vertex's $y$-coordinate. The axis of symmetry is a vertical line through the vertex, so it uses the $x$-coordinate $h=6$, not $k=8$.",
      "$x=-6$ flips the sign: in vertex form $a(x-h)^2+k$, the factor $(x-6)$ means $h=6$. The axis of symmetry is $x=6$, where the squared term is zero.",
      "$x=-8$ both uses the wrong coordinate ($k$ instead of $h$) and flips its sign. The axis is the vertical line through the vertex $(6,8)$, namely $x=6$.",
      "In vertex form $y=a(x-h)^2+k$, the vertex is $(h,k)=(6,8)$ and the axis of symmetry is the vertical line $x=h$. Here that is $x=6$."
    ]
  },
  "q:c8fb169c5d48fba6": {
    "options": [
      "Shifts down 6 units",
      "Shifts up 6 units",
      "Shifts right 6 units",
      "Shifts left 6 units"
    ],
    "explanations": [
      "A shift down 6 units would be $f(x)-6$, with the $6$ subtracted OUTSIDE the function. Here the $6$ is added to the input, so the shift is horizontal.",
      "A shift up 6 units would be $f(x)+6$, with the $6$ added OUTSIDE the function. Here the $6$ is inside the parentheses, changing the input, so the graph moves horizontally.",
      "Adding inside the function shifts LEFT, not right: $f(x+6)$ at $x=-6$ equals $f(0)$, so the point that was at $0$ moves to $-6$. A shift right by 6 would be $f(x-6)$.",
      "Replacing $x$ with $x+6$ moves the graph opposite to the sign: $f(x+6)$ reaches the value $f(0)$ when $x=-6$, so every point moves $6$ units left."
    ]
  },
  "q:6abed8e6f7618dc6": {
    "options": [
      "$0.07$",
      "$0.93$",
      "$1.07$",
      "$7$"
    ],
    "explanations": [
      "$0.07$ is the growth RATE (as a decimal), the amount by which the factor exceeds $1$. The growth factor is the full base that multiplies the value each period, $1.07$.",
      "$0.93=1-0.07$ would be a DECAY factor for a $7\\%$ decrease. The base here is $1.07$, which is greater than $1$, so the quantity grows.",
      "In $y=a\\cdot b^t$, the growth factor is the base $b$ that the value is multiplied by each time period. Here $b=1.07$, meaning a $7\\%$ increase per period.",
      "$7$ is the growth rate expressed as a percent. Multiplying by $7$ each period would be a $600\\%$ increase, not $7\\%$; the factor is $1.07$."
    ]
  },
  "q:f08e15684e7d2ff8": {
    "options": [
      "6",
      "3",
      "10",
      "5"
    ],
    "explanations": [
      "Absolute value gives a number's distance from zero, so a positive number is unchanged: $|6|=6$.",
      "$3$ halves the number. Absolute value is not division by $2$; it only removes a negative sign, and $6$ is already positive.",
      "$10$ matches no operation here. Absolute value never increases a number's magnitude, so $|6|$ cannot be larger than $6$.",
      "$5$ is one less than $6$ and has no connection to absolute value. $|6|$ keeps the value $6$ exactly."
    ]
  },
  "q:e9012c23077419d3": {
    "options": [
      "36",
      "126",
      "189",
      "225"
    ],
    "explanations": [
      "The side ratio is $\\frac{6}{15}=\\frac{2}{5}$, so the area ratio is $\\left(\\frac{2}{5}\\right)^2=\\frac{4}{25}$. If $[ABC]=k$, then $[DEF]=\\frac{25}{4}k$, and $\\frac{25}{4}k-k=\\frac{21}{4}k=189$ gives $k=36$. Check: $225-36=189$.",
      "$126$ uses the linear ratio $\\frac{5}{2}$ for the areas, solving $\\frac{5}{2}k-k=189$. Areas of similar figures scale by the SQUARE of the side ratio, $\\frac{25}{4}$.",
      "$189$ is simply the given difference between the two areas restated. The question asks for the area of the smaller triangle, which is $36$.",
      "$225$ is the area of triangle $DEF$, the larger triangle ($36+189$). The question asks for the area of triangle $ABC$."
    ]
  },
  "q:8e5f4c9bf9647a13": {
    "options": [
      "$1{,}050$",
      "$1{,}054$",
      "$1{,}056$",
      "$1{,}056.25$"
    ],
    "explanations": [
      "$1{,}050$ is $R(5)=(700)(1.50)$, from waiting one week too long past the vertex at $w=3.75$. Week $4$ gives $1{,}056$, which is higher.",
      "$1{,}054$ is $R(3)=(620)(1.70)$, from rounding the vertex $w=3.75$ DOWN. Since the vertex is closer to $4$, week $4$ gives the larger revenue, $1{,}056$.",
      "Revenue is $R(w)=(500+40w)(2-0.1w)=1000+30w-4w^2$, with vertex at $w=3.75$. Only whole weeks are allowed, so compare $R(3)=1054$ and $R(4)=(660)(1.60)=1056$. The maximum is $\\$1{,}056$.",
      "$1{,}056.25$ is $R(3.75)$, the vertex value, but the farmer can only harvest after a whole number of weeks, so $w=3.75$ is not available. The best whole week is $w=4$."
    ]
  },
  "q:a107251a9c779a2e": {
    "options": [
      "$\\sqrt{7}$",
      "$2\\sqrt{7}$",
      "$4$",
      "$8$"
    ],
    "explanations": [
      "$\\sqrt{7}$ is the horizontal distance from the center's $x$-coordinate $5$ to ONE intercept. The two intercepts are at $5\\pm\\sqrt{7}$, so the distance between them is twice that.",
      "Completing the square gives $(x-5)^2+(y+3)^2=16$, center $(5,-3)$, radius $4$. At $y=0$: $(x-5)^2=16-9=7$, so $x=5\\pm\\sqrt{7}$ and the intercepts are $2\\sqrt{7}$ apart.",
      "$4$ is the radius. The $x$-axis is $3$ units from the center, so it cuts a chord shorter than the diameter but not equal to the radius: $2\\sqrt{16-9}=2\\sqrt{7}$.",
      "$8$ is the diameter, which would be the chord length only if the $x$-axis passed through the center. The center is at $(5,-3)$, $3$ units off the axis, so the chord is shorter."
    ]
  },
  "q:a84bb07f07e1f873": {
    "options": [
      "10",
      "13",
      "7",
      "12"
    ],
    "explanations": [
      "Evaluate the composition from the inside out. First $f(0)=4(0)+2=2$, then feed that result back in: $f(2)=4(2)+2=10$. So $f(f(0))=10$.",
      "$13$ does not arise from this composition. After $f(0)=2$, the outer step is $4(2)+2=10$; no legitimate slip adds $3$ more.",
      "$7$ cannot be produced by $4x+2$ with an integer input, since $4x+2$ is always even. The inner value is $2$ and the outer value is $10$.",
      "$12$ adds the constant twice at the end, $4(2)+2+2$, or doubles the inner output incorrectly. The correct outer step is $4(2)+2=10$."
    ]
  },
  "q:41596d1e978bcdfa": {
    "options": [
      "16",
      "44",
      "25",
      "38"
    ],
    "explanations": [
      "$16$ comes from forgetting the $+1$ in $g$: $(2\\cdot 2)^2=16$. With $g(2)=2(2)+1=5$, the square is $25$.",
      "$44$ does not match the composition in either order: $f(g(2))=5^2=25$ and $g(f(2))=2(4)+1=9$. No single slip in evaluating these functions produces $44$.",
      "$(f\\circ g)(2)$ means $f(g(2))$: apply $g$ first, then $f$. First $g(2)=2(2)+1=5$, then square that output: $f(5)=5^2=25$.",
      "$38$ matches no reasonable path: neither $f(g(2))=25$ nor $g(f(2))=9$. Composition means feeding one output into the other function, not combining them arithmetically."
    ]
  },
  "q:f88518bbe24b9ec1": {
    "options": [
      "242",
      "256",
      "146",
      "290"
    ],
    "explanations": [
      "$242$ is not a power of $4$ or any product of them; $4\\cdot 4^3=4^4=256$. It may come from an arithmetic slip near $243=3^5$.",
      "Evaluate the exponent first: $4^3=64$. Then multiply by the leading coefficient $4$: $4\\cdot 64=256$. Equivalently, $4\\cdot 4^3=4^{1+3}=4^4=256$.",
      "$146$ matches no step in the calculation: $4^3=64$ and $4\\cdot 64=256$. Substituting back, no whole-number exponent makes $4\\cdot 4^x$ equal to $146$.",
      "$290$ is not a power of $4$ and matches no slip in $4\\cdot 4^3$. Multiplying the bases adds exponents, so the result must be $4^4=256$."
    ]
  },
  "q:ac2ec9523fd56b20": {
    "options": [
      "$x = \\frac{5}{2}$",
      "$x = 2$",
      "$x = -\\frac{2}{5}$",
      "$x = \\frac{2}{5}$"
    ],
    "explanations": [
      "$x=\\frac{5}{2}$ inverts the fraction. Setting $5x-2=0$ gives $5x=2$, so $x=\\frac{2}{5}$, not $\\frac{5}{2}$. Check: $5\\cdot\\frac{5}{2}-2=\\frac{21}{2}\\neq 0$.",
      "$x=2$ ignores the coefficient $5$. At $x=2$ the factor is $5(2)-2=8$, not zero, so $2$ is not a zero of $f$.",
      "$x=-\\frac{2}{5}$ is a sign error. $5x-2=0$ means $5x=+2$, so $x=+\\frac{2}{5}$; at $x=-\\frac{2}{5}$ the factor equals $-4$.",
      "A factor $5x-2$ is zero exactly when $5x-2=0$, which gives $x=\\frac{2}{5}$. By the factor theorem, $f\\!\\left(\\frac{2}{5}\\right)=0$."
    ]
  },
  "q:5f1e595beeb4d536": {
    "options": [
      "a greater slope and a smaller y-intercept.",
      "a greater slope and a greater y-intercept.",
      "a smaller slope and a greater y-intercept.",
      "a smaller slope and a smaller y-intercept."
    ],
    "explanations": [
      "A greater slope would require the new point to reinforce the upward trend. Instead it sits far right and far BELOW the line, which drags the right end down and reduces the slope.",
      "Both claims fail: a point far to the right and far below the line pulls the slope down, not up. When the slope decreases while the line still passes near the data's center, the intercept rises rather than falls.",
      "The new point is at the far right (largest $x$) and far below the pattern, so it pulls the right end of the line down: the slope decreases. The line pivots around the center of the data, so its left end rises and the y-intercept increases.",
      "The slope does decrease, but a line pivoting down on its right while passing through roughly the same center must rise on its left, so the y-intercept increases rather than decreases."
    ]
  },
  "q:b3df3591f151f0ae": {
    "options": [
      "$240$",
      "$320$",
      "$560$",
      "$80$"
    ],
    "explanations": [
      "$240$ is the CURRENT production level, found from $\\frac{4800+12x}{x}=32$, so $20x=4800$. The question asks how many more units beyond this are needed.",
      "$320$ is the NEW production level, from $\\frac{4800+12x}{x}=27$, so $15x=4800$. The question asks for the increase, $320-240$, not the final total.",
      "$560$ adds the two production levels, $240+320$. The additional units are the DIFFERENCE between the target level and the current level, $320-240=80$.",
      "Current level: $4800+12x=32x$ gives $x=240$. Target level: $4800+12x=27x$ gives $x=320$. The additional units needed are $320-240=80$."
    ]
  },
  "q:3322943a8db53ece": {
    "options": [
      "$\\frac{18}{85}$",
      "$\\frac{35}{85}$",
      "$\\frac{18}{35}$",
      "$\\frac{17}{35}$"
    ],
    "explanations": [
      "$\\frac{18}{85}$ divides by all $85$ club members. The question restricts to a randomly chosen 9th grader, so the denominator must be the $35$ 9th graders, not the whole club.",
      "$\\frac{35}{85}$ is the probability that a randomly chosen club member is a 9th grader. That is a different event; the question asks about Spanish among 9th graders.",
      "The condition 'a 9th grader is chosen' limits the sample space to the $35$ 9th graders, of whom $18$ take Spanish. The probability is $\\frac{18}{35}$.",
      "$\\frac{17}{35}$ has the right denominator but counts the $35-18=17$ 9th graders who do NOT take Spanish. That is the complementary event."
    ]
  },
  "q:0f251940ca2c4aed": {
    "options": [
      "12",
      "18",
      "9",
      "15"
    ],
    "explanations": [
      "$12$ is $\\frac{2}{3}$ of the hypotenuse, which matches no side of a $30$-$60$-$90$ triangle. The side opposite $30^{\\circ}$ is exactly half the hypotenuse, $9$.",
      "$18$ is the hypotenuse itself. The side opposite $30^{\\circ}$ is a leg, so it must be shorter than the hypotenuse.",
      "In a right triangle, $\\sin 30^{\\circ}=\\frac{1}{2}=\\frac{\\text{opposite}}{18}$, so the side opposite the $30^{\\circ}$ angle is $\\frac{18}{2}=9$. The shortest side is always half the hypotenuse in a $30$-$60$-$90$ triangle.",
      "$15$ approximates the OTHER leg, $9\\sqrt{3}\\approx 15.6$, which is opposite the $60^{\\circ}$ angle. The side opposite $30^{\\circ}$ is the shorter leg, $9$."
    ]
  },
  "q:a174ffe518e2bf0a": {
    "options": [
      "Asking the first 100 students who arrive at school today",
      "Randomly choosing students from the school roster",
      "Posting an optional poll on the school website for a week",
      "Surveying all students enrolled in a single AP class"
    ],
    "explanations": [
      "The first $100$ arrivals are a convenience sample. Early arrivers may share traits (bus riders, athletes with morning practice) that make them unrepresentative of the whole school.",
      "Random selection from the complete roster gives every student an equal chance of being chosen, which is what allows results to generalize to the entire school population.",
      "An optional web poll is a voluntary-response sample: only students who feel strongly or happen to visit the site respond, so it over-represents certain opinions.",
      "Students in a single AP class share a grade level and academic profile, so they are a cluster that does not reflect the diversity of the whole school."
    ]
  },
  "q:5f0fc4cec222bde8": {
    "options": [
      "$-4$",
      "$3$",
      "$18$",
      "$4$"
    ],
    "explanations": [
      "$-4$ is the sign error $\\frac{b}{a}$ instead of $-\\frac{b}{a}$. For $3x^3-12x^2+\\dots$, the sum of the zeros is $-\\frac{-12}{3}=+4$.",
      "$3$ is the PRODUCT of the zeros, $-\\frac{d}{a}=-\\frac{-9}{3}=3$. That is the right kind of relation (Vieta's formulas) applied to the wrong quantity.",
      "$18$ is the value of $k$, from $P(1)=3-12+k-9=0$. It is a tempting intermediate, but the sum of the zeros does not depend on $k$ at all.",
      "For a cubic $ax^3+bx^2+cx+d$, the sum of the zeros is $-\\frac{b}{a}$, here $-\\frac{-12}{3}=4$. That holds regardless of $k$ (which is $18$, from $P(1)=0$)."
    ]
  },
  "q:6908f7c2cd3ccdc6": {
    "options": [
      "$2.5$",
      "$4.5$",
      "$9$",
      "$10$"
    ],
    "explanations": [
      "$2.5$ is $\\frac{5}{2}$, which mixes up the two Vieta relations: the PRODUCT of the solutions is $\\frac{c}{a}=\\frac{k}{2}$ (given as $5$). The sum is $-\\frac{b}{a}$, a different ratio.",
      "For $ax^2+bx+c=0$ the sum of the solutions is $-\\frac{b}{a}$. Here that is $-\\frac{-9}{2}=4.5$, independent of $k$. The product condition only fixes $k=10$ and is not needed for the sum.",
      "$9$ is $-b$ without dividing by the leading coefficient $a=2$. The sum of the solutions is $-\\frac{b}{a}=\\frac{9}{2}$, not $9$.",
      "$10$ is the value of $k$, found from $\\frac{k}{2}=5$. It is the intermediate the product condition leads to, but the question asks for the sum of the solutions, which is $\\frac{9}{2}$."
    ]
  },
  "q:46de857ebe373175": {
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "explanations": [
      "A quadratic can cross the $x$-axis at most twice, so three $x$-intercepts is impossible. The two factors give exactly two zeros, $x=-3$ and $x=4$.",
      "One $x$-intercept would require a repeated factor such as $(x-4)^2$, where the graph just touches the axis. Here the factors $(x+3)$ and $(x-4)$ give two DIFFERENT zeros.",
      "Setting $f(x)=0$ makes a product zero, so one factor must be zero: $x+3=0$ gives $x=-3$ and $x-4=0$ gives $x=4$. Two distinct zeros mean two $x$-intercepts.",
      "Zero $x$-intercepts would mean the quadratic never equals zero, which happens only when it does not factor over the reals. This one is already factored with real zeros $-3$ and $4$."
    ]
  },
  "q:73c0be093cd5f0d2": {
    "options": [
      "$\\frac{35}{57}$",
      "$\\frac{63}{103}$",
      "$\\frac{35}{103}$",
      "$\\frac{35}{63}$"
    ],
    "explanations": [
      "$\\frac{35}{57}$ divides by the Group A total only, which is the CONDITIONAL probability of Yes given Group A. The question selects from everyone, so the denominator is the grand total $103$.",
      "$\\frac{63}{103}$ counts everyone who said Yes ($35+28=63$), which is the probability of Yes alone. The question requires Group A AND Yes, a single cell.",
      "The event 'Group A AND Yes' is one cell, $35$ people. The selection is from everyone, so the denominator is the grand total $35+22+28+18=103$: the probability is $\\frac{35}{103}$.",
      "$\\frac{35}{63}$ divides by the Yes column total, giving the conditional probability of Group A given Yes. The selection here is from the whole table, not just the Yes respondents."
    ]
  },
  "q:5e88c1ed0245b4e0": {
    "options": [
      "$0$",
      "$2\\sqrt{5}$",
      "$-4$",
      "$4$"
    ],
    "explanations": [
      "$0$ assumes the two fractions are equal because their denominators are conjugates. They are not: $\\sqrt{5}-2\\approx 0.236$ and $\\sqrt{5}+2\\approx 4.236$, so the first fraction is far larger than the second.",
      "$2\\sqrt{5}$ comes from ADDING the rationalized forms: $(\\sqrt{5}+2)+(\\sqrt{5}-2)=2\\sqrt{5}$. The expression is a difference, so the $\\sqrt{5}$ terms cancel and the $2$'s combine to $4$.",
      "$-4$ reverses the order of subtraction, computing $(\\sqrt{5}-2)-(\\sqrt{5}+2)$. The first fraction has the smaller denominator and so is the larger value, making the difference positive.",
      "Rationalize each fraction by its conjugate: $\\frac{1}{\\sqrt{5}-2}=\\frac{\\sqrt{5}+2}{5-4}=\\sqrt{5}+2$ and $\\frac{1}{\\sqrt{5}+2}=\\frac{\\sqrt{5}-2}{5-4}=\\sqrt{5}-2$. Their difference is $(\\sqrt{5}+2)-(\\sqrt{5}-2)=4$, since the radical terms cancel."
    ]
  },
  "q:43aaf0d2ced6bfd2": {
    "options": [
      "$\\frac{3}{2x}$",
      "$\\frac{2}{x}$",
      "$\\frac{2}{x^2}$",
      "$\\frac{3}{x}$"
    ],
    "explanations": [
      "$\\frac{3}{2x}$ has the right numerator but doubles the denominator. When fractions share a denominator, that denominator is kept as is, not added to itself.",
      "$\\frac{2}{x}$ is just the first fraction with the second one dropped. Adding $\\frac{1}{x}$ increases the numerator from $2$ to $3$.",
      "$\\frac{2}{x^2}$ multiplies the fractions ($2\\cdot 1$ over $x\\cdot x$) instead of adding them. Addition with a common denominator combines only the numerators.",
      "Both fractions already have the common denominator $x$, so add the numerators and keep the denominator: $\\frac{2+1}{x}=\\frac{3}{x}$."
    ]
  },
  "q:d2a2381ecd231a1f": {
    "options": [
      "2",
      "4",
      "1",
      "9"
    ],
    "explanations": [
      "$2$ applies the LINEAR ratio to the areas. Area is two-dimensional, so doubling every side multiplies the area by $2\\times 2=4$, not by $2$.",
      "If corresponding sides are in the ratio $1:2$, every length doubles, and area (a product of two lengths) is multiplied by $2^2=4$. So the areas are in the ratio $1:4$ and $x=4$.",
      "$1$ would mean the two triangles have equal areas, which is impossible when one has sides twice as long as the other.",
      "$9$ is $3^2$, the area ratio for sides in the ratio $1:3$. Here the side ratio is $1:2$, so the area ratio is $1:2^2=1:4$."
    ]
  },
  "q:452d6d5f92afc341": {
    "options": [
      "10",
      "5",
      "6",
      "9"
    ],
    "explanations": [
      "$2^{10}=1024$, not $32$. $10$ comes from doubling $5$, perhaps by confusing $2^x$ with $2x$ and then adjusting, but $32$ is the fifth power of $2$.",
      "Write $32$ as a power of $2$: $2\\cdot 2\\cdot 2\\cdot 2\\cdot 2=32$, so $32=2^5$. Matching exponents in $2^x=2^5$ gives $x=5$.",
      "$2^6=64$, which is twice $32$. Counting one factor of $2$ too many is the slip here; $32$ requires exactly five factors of $2$.",
      "$2^9=512$, far larger than $32$. The exponent counts how many factors of $2$ multiply to $32$, and that count is $5$."
    ]
  },
  "q:d92a495823c65712": {
    "options": [
      "17.7 percent and 23.0 percent",
      "23.0 percent and 17.7 percent",
      "6.6 percent and 23.0 percent",
      "17.7 percent and 6.6 percent"
    ],
    "explanations": [
      "The Downtown total is $46+58+31=135$. Among SUVs, the denominator is the SUV column total: $\\frac{31}{175}\\approx 17.7$ percent. Among Downtown vehicles, the denominator is the row total: $\\frac{31}{135}\\approx 23.0$ percent.",
      "This reverses the two rates. 'Of the vehicles that are SUVs' restricts to the SUV column (total $175$), giving $17.7$ percent, while 'of the vehicles in the Downtown lot' restricts to the row (total $135$), giving $23.0$ percent.",
      "$6.6$ percent is $\\frac{31}{470}$, the share of ALL vehicles that are Downtown SUVs. The first question restricts to SUVs only, so the denominator should be $175$, not the grand total.",
      "The first rate is right, but $6.6$ percent is $\\frac{31}{470}$, the grand-total share. The second question restricts to the Downtown lot, so the denominator is the row total $135$, giving $23.0$ percent."
    ]
  },
  "q:02bdbfe91db73ee8": {
    "options": [
      "$2\\sqrt{7}+4$",
      "$2\\sqrt{7}-4$",
      "$6\\sqrt{7}+12$",
      "$\\frac{6\\sqrt{7}+12}{11}$"
    ],
    "explanations": [
      "Multiply numerator and denominator by the conjugate $\\sqrt{7}+2$: $\\frac{6(\\sqrt{7}+2)}{7-4}=\\frac{6\\sqrt{7}+12}{3}=2\\sqrt{7}+4$. The difference of squares clears the radical from the denominator.",
      "$2\\sqrt{7}-4$ comes from multiplying by $\\sqrt{7}-2$ again instead of by the conjugate. That gives a denominator of $11-4\\sqrt{7}$, which still contains a radical, so the result is not equivalent.",
      "$6\\sqrt{7}+12$ is the new numerator alone, with the division by the new denominator $(\\sqrt{7})^2-2^2=3$ forgotten. Dividing by $3$ gives $2\\sqrt{7}+4$.",
      "$\\frac{6\\sqrt{7}+12}{11}$ uses $7+4=11$ as the denominator. The conjugate product is a DIFFERENCE of squares, $(\\sqrt{7})^2-2^2=7-4=3$, not a sum."
    ]
  },
  "q:a544cc178253fa00": {
    "options": [
      "2.4",
      "0.3",
      "1.2",
      "2.9"
    ],
    "explanations": [
      "$2.4$ is $\\frac{240}{100}$, the ratio of the raw counts. It ignores that the groups have different sizes ($450$ members versus $550$ non-members), so the counts must be converted to rates first.",
      "$0.3$ inverts the requested comparison, computing roughly $\\frac{0.182}{0.533}$. The question asks how many times the MEMBER probability is the non-member probability, so the member rate goes on top.",
      "$1.2$ is $\\frac{550}{450}$, the ratio of the two group sizes. That compares how many people are in each group, not how likely each type of person is to have visited 3 or more times.",
      "Each person is chosen within their own group, so each probability uses that group's row total: members $\\frac{240}{450}\\approx 0.533$, non-members $\\frac{100}{550}\\approx 0.182$. The ratio is $\\frac{0.533}{0.182}\\approx 2.9$."
    ]
  },
  "q:1d9131dfc9763e35": {
    "options": [
      "$7$",
      "$32$",
      "$700$",
      "$32{,}000$"
    ],
    "explanations": [
      "$7$ is the value of $x$ at the vertex, midway between the zeros $3$ and $11$. But $x$ counts HUNDREDS of units, so the number of units is $7\\times 100=700$.",
      "$32$ is the maximum profit in thousands of dollars, $P(7)=-2(4)(-4)=32$. The question asks how many units to produce, not what the profit is.",
      "The zeros are $x=3$ and $x=11$, so by symmetry the vertex is at $x=\\frac{3+11}{2}=7$. Since $x$ is in hundreds of units, production should be $7\\times 100=700$ units.",
      "$32{,}000$ is the maximum profit converted to dollars ($32$ thousand). It is still a profit figure, not a quantity of units."
    ]
  },
  "q:efb9697c28d95f5f": {
    "options": [
      "$80$",
      "$84$",
      "$128$",
      "$204.8$"
    ],
    "explanations": [
      "Let $m$ be miles; the distance is $1.6m$ kilometers, so pay is $0.62(1.6m)+4=0.992m+4$. Setting this equal to $83.36$ gives $0.992m=79.36$, so $m=80$ miles.",
      "$84$ comes from forgetting the $\\$4$ flat fee: $83.36\\div 0.62\\approx 134.45$ km, then $\\div 1.6\\approx 84$ miles. The fee must be subtracted before dividing by the per-kilometer rate.",
      "$128$ is the distance in KILOMETERS, $(83.36-4)\\div 0.62$. The question asks for miles, so it still has to be divided by $1.6$ km per mile.",
      "$204.8$ converts in the wrong direction, multiplying $128$ km by $1.6$ instead of dividing. Since a mile is longer than a kilometer, the mile count must be smaller than the kilometer count."
    ]
  },
  "q:86479b171304aa64": {
    "options": [
      "39",
      "234",
      "246",
      "480"
    ],
    "explanations": [
      "$39$ is the plot's AREA in square meters, not the cost. Sod costs $6$ dollars per square meter, so the cost is $39\\times 6=234$ dollars.",
      "Enclose the plot in the $10\\times 8$ rectangle (area $80$) and subtract the four corner right triangles: $\\frac{6\\cdot 4}{2}+\\frac{4\\cdot 3}{2}+\\frac{6\\cdot 5}{2}+\\frac{4\\cdot 4}{2}=12+6+15+8=41$. Area is $80-41=39$ m$^2$, so cost is $39(6)=234$ dollars.",
      "$246$ is $41\\times 6$, the cost of sodding the four corner triangles that are OUTSIDE the plot. The plot itself has area $80-41=39$, costing $234$ dollars.",
      "$480$ is $80\\times 6$, the cost of the entire enclosing rectangle. The four corner triangles (total area $41$) are not part of the plot and must be removed first."
    ]
  },
  "q:985f7b609ab613e3": {
    "options": [
      "$(x + 3)(2x - 2)$",
      "$(2x + 3)(x + 2)$",
      "$(2x - 3)(x - 2)$",
      "$(2x + 2)(x + 3)$"
    ],
    "explanations": [
      "$(x+3)(2x-2)=2x^2+4x-6$. The constant is $-6$ rather than $+6$ and the middle term is wrong, so this does not expand to the given trinomial.",
      "Split the middle term using factors of $2\\cdot 6=12$ that add to $7$, namely $4$ and $3$: $2x^2+4x+3x+6=2x(x+2)+3(x+2)=(2x+3)(x+2)$. Check: $2x^2+4x+3x+6$.",
      "$(2x-3)(x-2)=2x^2-7x+6$. The constant matches but the middle term is $-7x$, the opposite sign of the one needed.",
      "$(2x+2)(x+3)=2x^2+8x+6$. The middle term is $8x$, not $7x$; the factor pairing of $4$ and $3$ (not $2$ and $6$) is required."
    ]
  },
  "q:d9f7e9cec548c850": {
    "options": [
      "$15.40$",
      "$23.44$",
      "$24.40$",
      "$31.44$"
    ],
    "explanations": [
      "$15.40$ is the charge for the $8.4$-pound package alone, $9+4(1.60)$. The $3.2$-pound package adds another $\\$9.00$, bringing the total to $24.40$.",
      "$23.44$ charges the heavy package for exactly $3.4$ extra pounds, $9+3.4(1.60)=14.44$. Any part of a pound counts as a full pound, so the overage is $4$ pounds, not $3.4$.",
      "The $3.2$-pound package costs the base $\\$9.00$. The $8.4$-pound package is $3.4$ pounds over, which rounds up to $4$ chargeable pounds: $9+4(1.60)=15.40$. Total $9.00+15.40=\\$24.40$.",
      "$31.44$ applies the $\\$1.60$ rate to the heavy package's ENTIRE $8.4$ pounds, $9+8.4(1.60)=22.44$, plus $9$. The per-pound rate applies only to weight above $5$ pounds."
    ]
  },
  "q:8e564462a1c56489": {
    "options": [
      "17.5",
      "30.3",
      "52.5",
      "65.3"
    ],
    "explanations": [
      "$17.5$ is $35\\cos 60^{\\circ}$ alone, which would be the vertical offset from the center after only $60^{\\circ}$ of rotation. The wheel turns $150^{\\circ}$, and the height must be measured from the boarding point.",
      "$30.3$ is the rider's height above the CENTER of the wheel, $-35\\cos 150^{\\circ}$. The boarding point is $35$ m below the center, so the height above it is $35+30.3=65.3$.",
      "$52.5$ treats $\\frac{5\\pi}{6}$ as if it were $60^{\\circ}$ from the bottom: $35+35\\cos 60^{\\circ}=52.5$. But $\\frac{5\\pi}{6}=150^{\\circ}$, which carries the rider past horizontal, giving $35+30.3$.",
      "The radius is $35$ m and the center is $35$ m above the boarding point. After $\\frac{5\\pi}{6}=150^{\\circ}$ from the bottom, the rider is $35\\cos 150^{\\circ}\\approx -30.3$ m below the center, i.e. $30.3$ m above it. Height: $35+30.3=65.3$ m."
    ]
  },
  "q:a9216299eadfd2ec": {
    "options": [
      "$\\frac{1}{5} = \\frac{1}{t}$",
      "$\\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{t}$",
      "$\\frac{1}{2} + \\frac{1}{3} = \\frac{1}{t}$",
      "$\\frac{1}{2} + \\frac{1}{3} = t$"
    ],
    "explanations": [
      "$\\frac{1}{5}=\\frac{1}{t}$ adds the TIMES ($2+3=5$) and treats the sum as if it were a time, giving $t=5$ hours. Two pipes together must be faster than either alone, not slower than both.",
      "Multiplying the rates has no meaning here: $\\frac{1}{2}\\cdot\\frac{1}{3}=\\frac{1}{6}$ would give $t=6$ hours, slower than either pipe alone. Rates of pipes working together ADD.",
      "Pipe A fills $\\frac{1}{2}$ of the pool per hour and Pipe B fills $\\frac{1}{3}$ per hour. Together they fill $\\frac{1}{2}+\\frac{1}{3}$ per hour, which equals $\\frac{1}{t}$ when $t$ is the combined time (so $t=\\frac{6}{5}$ hours).",
      "$\\frac{1}{2}+\\frac{1}{3}=t$ sets the combined RATE equal to the time. The combined rate $\\frac{5}{6}$ pool per hour is the reciprocal of the time, so the right side should be $\\frac{1}{t}$."
    ]
  },
  "q:906a2c322319d2d9": {
    "options": [
      "$2x(x + 9)$",
      "$18x(x + 1)$",
      "$2x(x + 18)$",
      "$x(2x + 9)$"
    ],
    "explanations": [
      "Both terms share $2$ and $x$, so the greatest common factor is $2x$. Dividing each term by it: $2x^2\\div 2x=x$ and $18x\\div 2x=9$, giving $2x(x+9)$.",
      "$18x(x+1)=18x^2+18x$, not $2x^2+18x$. The factor $18x$ does not divide $2x^2$, so it cannot be pulled out of the first term.",
      "$2x(x+18)=2x^2+36x$. After removing $2x$ from $18x$, the leftover is $9$, not $18$; the $2$ has already been factored out.",
      "$x(2x+9)=2x^2+9x$, not $2x^2+18x$. This pulls out only $x$ and then also halves the second coefficient, so it is not even a correct partial factorization."
    ]
  },
  "q:63b633e4357b7db1": {
    "options": [
      "The x-value where the function is undefined",
      "The largest output the function reaches",
      "The point where the graph crosses the x-axis",
      "The y-value approached as $x \\to \\pm\\infty$"
    ],
    "explanations": [
      "An $x$-value where the function is undefined describes a VERTICAL asymptote (or a hole), not a horizontal one. Horizontal asymptotes concern the output's long-run behavior.",
      "A horizontal asymptote is not a maximum: a graph may cross it or approach it from below without ever reaching a largest value. It describes end behavior, not an attained output.",
      "The point where the graph crosses the $x$-axis is an $x$-intercept, where $y=0$. An asymptote is a line the graph approaches, not a crossing point.",
      "A horizontal asymptote is the line $y=L$ that the graph gets arbitrarily close to as $x$ goes to $+\\infty$ or $-\\infty$; it describes the function's end behavior."
    ]
  },
  "q:ad520088a3ad75f4": {
    "options": [
      "$x \\geq 0$",
      "$x > 0$",
      "$x \\neq 0$",
      "All real numbers"
    ],
    "explanations": [
      "The expression under a square root must be nonnegative: $5x\\geq 0$, and dividing by the positive $5$ gives $x\\geq 0$. Zero is allowed because $\\sqrt{0}=0$ is defined.",
      "$x>0$ wrongly excludes $x=0$. The radicand there is $5(0)=0$, and $\\sqrt{0}=0$ is perfectly defined, so $0$ belongs in the domain.",
      "$x\\neq 0$ is the kind of restriction a denominator would create. A square root instead forbids NEGATIVE radicands, so all negative $x$ must be excluded while $0$ is allowed.",
      "All real numbers would require $5x$ to be nonnegative for every $x$, but negative $x$ makes $5x$ negative and the square root undefined in the real numbers."
    ]
  },
  "q:ed6c0811552edaca": {
    "options": [
      "$A = P(1 + rt)$",
      "$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$",
      "$A = P\\left(1 + \\frac{n}{r}\\right)^{nt}$",
      "$A = P\\left(1 + \\frac{r}{n}\\right)^{t}$"
    ],
    "explanations": [
      "$A=P(1+rt)$ is the SIMPLE interest formula: interest grows linearly with time because it is always computed on the original principal, never on accumulated interest.",
      "Compound interest multiplies the principal by $\\left(1+\\frac{r}{n}\\right)$ once per compounding period, and there are $nt$ periods in $t$ years, giving $A=P\\left(1+\\frac{r}{n}\\right)^{nt}$.",
      "$\\left(1+\\frac{n}{r}\\right)$ inverts the fraction. The periodic rate is the annual rate divided by the number of periods per year, $\\frac{r}{n}$, not the other way around.",
      "The exponent $t$ counts only years, but interest compounds $n$ times per year, so the number of compounding periods is $nt$. Using $t$ alone undercounts the periods."
    ]
  },
  "q:47b3e1c63986ac3d": {
    "options": [
      "$\\frac{7}{15}$",
      "$\\frac{8}{15}$",
      "$\\frac{9}{17}$",
      "$\\frac{10}{17}$"
    ],
    "explanations": [
      "$\\frac{7}{15}$ is the probability that a customer DOES order coffee, the given value. The complement, not ordering coffee, has probability $1-\\frac{7}{15}$.",
      "Ordering coffee and not ordering coffee are complementary events, so their probabilities sum to $1$: $1-\\frac{7}{15}=\\frac{15}{15}-\\frac{7}{15}=\\frac{8}{15}$.",
      "$\\frac{9}{17}$ adds $2$ to both numerator and denominator, which has no probabilistic meaning. The complement keeps the denominator $15$ and subtracts the numerator from $15$.",
      "$\\frac{10}{17}$ changes the denominator, but the complement of an event uses the same sample space, so the denominator stays $15$: the answer is $\\frac{15-7}{15}$."
    ]
  },
  "q:3e60dc9b258f86f4": {
    "options": [
      "1",
      "-11",
      "-5",
      "-1"
    ],
    "explanations": [
      "$1$ reverses the sign of the constant $k=-5$ and shifts it, which matches no step. The vertex form reads off the maximum directly as the constant added outside the square, $-5$.",
      "$-11$ combines the inside and outside constants, $-5-6$. The $+6$ inside the parentheses sets the $x$-coordinate of the vertex ($x=-6$) and does not affect the maximum value.",
      "In vertex form $a(x-h)^2+k$, the vertex is $(h,k)=(-6,-5)$. Since $a=-2<0$ the parabola opens downward, so the vertex is the highest point and the maximum value is $k=-5$.",
      "$-1$ matches no step: the maximum value is the constant $k$ outside the squared term, which is $-5$. Substituting the vertex $x=-6$ confirms $f(-6)=-2(0)-5=-5$."
    ]
  },
  "q:a7fb6002e893c1c9": {
    "options": [
      "17",
      "11",
      "24",
      "18"
    ],
    "explanations": [
      "Follow the order of operations: square the input first, then multiply by $2$, then subtract $1$. So $f(3)=2(3)^2-1=2(9)-1=18-1=17$.",
      "$11$ comes from treating $2x^2$ as $(2x)\\cdot 2$ or as $2\\cdot 3\\cdot 2$: $12-1=11$. The exponent applies to $x$ alone, so $3^2=9$ and $2(9)=18$.",
      "$24$ matches no correct order of operations; for example, $2(3)^2=18$ and $(2\\cdot 3)^2=36$, neither of which gives $24$ after subtracting $1$.",
      "$18$ is $2(3)^2$ with the final $-1$ forgotten. The function subtracts $1$ after the squared term is doubled, so the value is $18-1=17$."
    ]
  },
  "q:a8d95b7cc5385c47": {
    "options": [
      "44",
      "33",
      "60",
      "46"
    ],
    "explanations": [
      "$44$ is $90-46$, the COMPLEMENT of the given angle. Alternate interior angles are not complementary; when the lines are parallel they are congruent.",
      "$33$ has no relationship to $46$ here. Alternate interior angles formed by parallel lines are equal, so the answer must be $46$ itself.",
      "$60$ has no relationship to the given $46^{\\circ}$ angle. For parallel lines, alternate interior angles are congruent, so the measure is $46^{\\circ}$.",
      "When parallel lines are cut by a transversal, alternate interior angles are congruent. So the alternate interior angle also measures $46^{\\circ}$."
    ]
  },
  "q:0b7fdc172de76c75": {
    "options": [
      "$\\sin^2\\theta - \\cos^2\\theta = 1$",
      "$\\sin^2\\theta + \\cos^2\\theta = 1$",
      "$\\sin\\theta + \\cos\\theta = 1$",
      "$\\sin^2\\theta \\cdot \\cos^2\\theta = 1$"
    ],
    "explanations": [
      "$\\sin^2\\theta-\\cos^2\\theta$ equals $-\\cos 2\\theta$, which varies with $\\theta$ and is not always $1$. At $\\theta=0$ it is $-1$. The identity uses a sum of squares.",
      "On the unit circle a point is $(\\cos\\theta,\\sin\\theta)$ and satisfies $x^2+y^2=1$, so $\\cos^2\\theta+\\sin^2\\theta=1$ for every angle. That is the Pythagorean identity.",
      "$\\sin\\theta+\\cos\\theta$ is not constant: at $\\theta=45^{\\circ}$ it equals $\\sqrt{2}$, and at $\\theta=0$ it equals $1$. The identity involves the SQUARES of sine and cosine.",
      "$\\sin^2\\theta\\cdot\\cos^2\\theta$ is at most $\\frac{1}{4}$ (at $45^{\\circ}$) and is $0$ at $\\theta=0$, so it can never equal $1$. The squares are added, not multiplied."
    ]
  },
  "q:1c24bd76f53d4fd8": {
    "options": [
      "$0$",
      "Undefined",
      "$1$",
      "$\\sqrt{3}$"
    ],
    "explanations": [
      "$0$ is $\\tan 0^{\\circ}$ (or $\\sin 0^{\\circ}$). At $45^{\\circ}$ the opposite and adjacent sides are equal, so the tangent is $1$, not $0$.",
      "Tangent is undefined at $90^{\\circ}$, where $\\cos 90^{\\circ}=0$. At $45^{\\circ}$ cosine is $\\frac{\\sqrt{2}}{2}$, not zero, so the tangent is defined.",
      "In a $45$-$45$-$90$ triangle the legs are equal, so $\\tan 45^{\\circ}=\\frac{\\text{opposite}}{\\text{adjacent}}=1$. Equivalently $\\frac{\\sin 45^{\\circ}}{\\cos 45^{\\circ}}=\\frac{\\sqrt{2}/2}{\\sqrt{2}/2}=1$.",
      "$\\sqrt{3}$ is $\\tan 60^{\\circ}$, from the $30$-$60$-$90$ triangle. At $45^{\\circ}$ the two legs are equal, so the ratio is exactly $1$."
    ]
  },
  "q:a33c852ad2d5166d": {
    "options": [
      "$(-2, 3)$",
      "$(2, -3)$",
      "$(0, 0)$",
      "$(2, 3)$"
    ],
    "explanations": [
      "$(-2,3)$ flips the sign of $h$. In $(x-h)^2+k$ the factor $(x-2)$ means $h=2$, because the squared term is zero when $x=2$, not when $x=-2$.",
      "$(2,-3)$ flips the sign of $k$. The constant added outside the square is $+3$, so the vertex's $y$-coordinate is $3$.",
      "$(0,0)$ is the vertex of the parent function $x^2$. This graph has been shifted right $2$ and up $3$, so its vertex has moved to $(2,3)$.",
      "Vertex form is $f(x)=(x-h)^2+k$ with vertex $(h,k)$. Here $h=2$ and $k=3$, so the vertex is $(2,3)$; check: $f(2)=0+3=3$ is the minimum."
    ]
  },
  "q:9a250dd877e0c9a7": {
    "options": [
      "$\\frac{26}{58}$",
      "$\\frac{26}{40}$",
      "$\\frac{32}{58}$",
      "$\\frac{8}{58}$"
    ],
    "explanations": [
      "The two events are disjoint cells: group A and Yes has $8$ people, group B and No has $18$. Add them, $8+18=26$, and divide by the grand total $8+15+17+18=58$: $\\frac{26}{58}$.",
      "$\\frac{26}{40}$ has the right numerator but the wrong denominator. The selection is from all $58$ people in the table; $40$ is not the total of any row, column, or the whole table.",
      "$\\frac{32}{58}$ uses the OTHER diagonal, $15+17$ (group A and No, group B and Yes). The question asks for group A with Yes and group B with No.",
      "$\\frac{8}{58}$ counts only group A and Yes, leaving out the $18$ people in group B who said No. 'OR' means both cells are included."
    ]
  },
  "q:7194a33d027e0bce": {
    "options": [
      "Neither",
      "Both",
      "Maximum",
      "Minimum"
    ],
    "explanations": [
      "Every quadratic function has exactly one extreme value, since its graph is a parabola with a vertex. 'Neither' would apply to a linear or cubic function, not a quadratic.",
      "A parabola cannot have both a maximum and a minimum: it is unbounded in one direction. Only one extreme value exists, determined by the sign of the leading coefficient.",
      "The leading coefficient is $a=-2$, which is negative, so the parabola opens downward and its vertex is the highest point. The function therefore has a maximum (and no minimum).",
      "A minimum would require the parabola to open upward, i.e. a positive leading coefficient. Here $a=-2<0$, so the graph opens downward and has a maximum instead."
    ]
  },
  "q:19e2cf28da0baf1b": {
    "options": [
      "3",
      "4",
      "10",
      "1"
    ],
    "explanations": [
      "$3$ is the constant in the factor that CANCELS, $(x+3)$. After cancelling, the remaining factor is $x+4$, so $k=4$.",
      "Factor the numerator into two binomials whose constants multiply to $12$ and add to $7$: $x^2+7x+12=(x+3)(x+4)$. Cancelling the common factor $(x+3)$ leaves $x+4$, so $k=4$.",
      "$10$ would make $x+k$ equal $x+10$, whose product with $(x+3)$ is $x^2+13x+30$, not the given numerator. The factor pair must multiply to $12$ and add to $7$.",
      "$1$ cannot be right: $(x+3)(x+1)=x^2+4x+3$, which does not match $x^2+7x+12$. The factors of $12$ that add to $7$ are $3$ and $4$."
    ]
  },
  "q:7039002accff551f": {
    "options": [
      "$2x^2 + 3x + 9$",
      "$4x^2 + 9$",
      "$4x^2 + 6x + 9$",
      "$4x^2 + 12x + 9$"
    ],
    "explanations": [
      "$2x^2+3x+9$ fails to square the coefficient $2$ (it should be $4x^2$) and uses $3x$ instead of the doubled cross term $12x$.",
      "$4x^2+9$ squares each term separately and drops the middle term. A binomial square always has a cross term, here $2(2x)(3)=12x$.",
      "$4x^2+6x+9$ has the cross term $(2x)(3)=6x$ counted only once. In $(a+b)^2=a^2+2ab+b^2$ the product $ab$ is doubled, giving $12x$.",
      "Use the binomial square pattern $(a+b)^2=a^2+2ab+b^2$ with $a=2x$ and $b=3$. That gives $(2x)^2+2(2x)(3)+3^2=4x^2+12x+9$; the middle term is the doubled cross product."
    ]
  },
  "q:8c4d2df61649bf1d": {
    "options": [
      "$-4$",
      "$2$",
      "$12$",
      "$8$"
    ],
    "explanations": [
      "$-4$ comes from $2-6$, undoing the shift in the wrong direction. From $k-6=2$ the step is to ADD $6$, giving $k=8$.",
      "$2$ is the input to $f$ that produces $12$, i.e. $k-6=2$. The question asks for $k$ itself, which is $2+6=8$.",
      "$12$ is the value of $f(k-6)$, the intermediate obtained after subtracting $5$ from $17$. It is an output of $f$, not the input $k$.",
      "$g(k)=17$ means $f(k-6)+5=17$, so $f(k-6)=12$. The table gives $f(2)=12$, so $k-6=2$ and $k=8$. Check: $g(8)=f(2)+5=17$."
    ]
  },
  "q:df07be9f95ba4215": {
    "options": [
      "$\\frac{73}{143}$",
      "$\\frac{48}{143}$",
      "$\\frac{25}{143}$",
      "$\\frac{78}{143}$"
    ],
    "explanations": [
      "The Yes answers total $48+25=73$ and all respondents total $48+30+25+40=143$. Selecting from everyone, the probability of a Yes is $\\frac{73}{143}$.",
      "$\\frac{48}{143}$ counts only the males who said Yes, omitting the $25$ females who also answered Yes. The question asks about any respondent who said Yes.",
      "$\\frac{25}{143}$ counts only the females who said Yes, omitting the $48$ males who also answered Yes. Both groups' Yes answers belong in the numerator.",
      "$\\frac{78}{143}$ uses the total number of MALES ($48+30=78$), which is the probability of selecting a male, not of selecting a Yes answer."
    ]
  },
  "q:9b40abab475c19a5": {
    "options": [
      "$11 \\times 10^{16}$",
      "$3 \\times 10^{9}$",
      "$3 \\times 10^{8}$",
      "$30 \\times 10^{9}$"
    ],
    "explanations": [
      "$11\\times 10^{16}$ adds the coefficients ($6+5$) and multiplies the exponents ($4\\times 4$). Multiplication multiplies the coefficients and ADDS the exponents.",
      "Multiply the coefficients and add the exponents: $6\\times 5=30$ and $10^4\\cdot 10^4=10^8$, giving $30\\times 10^8$. In scientific notation the coefficient must be between $1$ and $10$, so this is $3\\times 10^9$.",
      "$3\\times 10^8$ correctly adds the exponents but then rewrites $30$ as $3$ without raising the exponent by one. $30\\times 10^8=3\\times 10^9$.",
      "$30\\times 10^9$ has a coefficient of $30$, which is not in proper scientific notation, and the exponent is already $9$, making the value ten times too large: $30\\times 10^8=3\\times 10^9$."
    ]
  },
  "q:f470945238d25ebb": {
    "options": [
      "21.8",
      "38.2",
      "60.0",
      "81.8"
    ],
    "explanations": [
      "$21.8$ is the vertical drop from the observer's eye level to the shorter roof, $60\\tan 20^{\\circ}$. The shorter building's height is $60$ minus this drop.",
      "The $45^{\\circ}$ depression to the base means the horizontal distance equals the height, $60$ m. The line of sight to the shorter roof drops $60\\tan 20^{\\circ}\\approx 21.8$ m, so that roof is at $60-21.8\\approx 38.2$ m.",
      "$60.0$ is the taller building's height, which also equals the horizontal distance between the buildings (from the $45^{\\circ}$ angle). The shorter building must be lower than $60$ m.",
      "$81.8$ ADDS the $21.8$ m drop to $60$ instead of subtracting it. An angle of depression means the observer looks downward, so the shorter roof is below the observer."
    ]
  },
  "q:110edebd858cc485": {
    "options": [
      "54",
      "25",
      "36",
      "35"
    ],
    "explanations": [
      "$54$ matches no step: at the vertex $t=1.5$, $48(1.5)=72$ and $16(1.5)^2=36$, and $72-36=36$. Substituting back, $h(t)=54$ has no real solution since $36$ is the maximum.",
      "$25$ matches no step in finding the vertex: the vertex time is $t=\\frac{48}{32}=1.5$, and $h(1.5)=72-36=36$. A height of $25$ occurs at non-vertex times.",
      "The height function $h(t)=-16t^2+48t$ is a downward parabola, so its maximum is at the vertex, $t=-\\frac{b}{2a}=\\frac{48}{32}=1.5$ seconds. Then $h(1.5)=48(1.5)-16(1.5)^2=72-36=36$ feet.",
      "$35$ is one less than the actual maximum, $36$, likely from an arithmetic slip such as $16(2.25)=37$. The vertex gives exactly $72-36=36$."
    ]
  },
  "q:de399296fab5e0ed": {
    "options": [
      "17",
      "7",
      "12",
      "6"
    ],
    "explanations": [
      "$17$ matches no step: substituting $-3$ into $-x+9$ gives $3+9=12$. Perhaps $9$ was doubled or $-3$ was mishandled, but no single slip produces $17$.",
      "$7$ matches no step: $-(-3)+9=12$. It is not $9-3+1$ or any consistent evaluation of the function at $-3$.",
      "Substitute $x=-3$ into the function: $f(-3)=-(-3)+9$. The negative of a negative number is positive, so $-(-3)=3$ and $f(-3)=3+9=12$.",
      "$6$ is $-3+9$, which ignores the negative sign in front of $x$. The function is $-x+9$, so the input $-3$ becomes $-(-3)=+3$ first."
    ]
  },
  "q:003a004f234cbb8f": {
    "options": [
      "$4$",
      "$24$",
      "$32$",
      "$40$"
    ],
    "explanations": [
      "$4$ is the NUMBER of half-lives needed ($240\\to 120\\to 60\\to 30\\to 15$), not the number of days. Multiplying by the $8$-day half-life gives $32$ days.",
      "At $24$ days three half-lives have passed and $30$ mg remain, which is still at least $20$ mg, so the tracer is kept. One more half-life is needed.",
      "Halve every $8$ days: $120$ mg at $8$ days, $60$ at $16$, $30$ at $24$, $15$ at $32$. The amount first drops below $20$ mg at $32$ days, so that is when the tracer is discarded.",
      "$40$ days is one half-life too many ($7.5$ mg). The tracer is discarded the FIRST time the amount is under $20$ mg, which happens at $32$ days when $15$ mg remain."
    ]
  },
  "q:beedc9c9f600386a": {
    "options": [
      "10",
      "11",
      "42",
      "168"
    ],
    "explanations": [
      "The outline is a trapezoid with parallel vertical sides $15$ and $9$ and width $14$: area $\\frac{15+9}{2}(14)=168$ m$^2$. Each $4\\times 4$ panel covers $16$ m$^2$, and $168\\div 16=10.5$, so at most $10$ whole panels fit by area.",
      "$11$ rounds $10.5$ up. Eleven panels would need $11\\times 16=176$ m$^2$, more than the $168$ m$^2$ available, so only $10$ whole panels fit.",
      "$42$ divides the area $168$ by $4$, the panel's side length, instead of by its area $16$. A $4\\times 4$ panel covers $16$ square meters.",
      "$168$ is the area of the outline in square meters, not a number of panels. Dividing by $16$ m$^2$ per panel gives $10.5$, so $10$ whole panels."
    ]
  },
  "q:99b5a75065671d14": {
    "options": [
      "The mean is larger",
      "The mode is larger than both",
      "They are equal",
      "The median is larger"
    ],
    "explanations": [
      "The mean is $\\frac{67+60+51+80+74}{5}=\\frac{332}{5}=66.4$, which is LESS than the median $67$. The low value $51$ pulls the mean below the middle value.",
      "This data set has no repeated value, so there is no mode. Even if there were, the question asks about the mean and the median.",
      "They are not equal: the mean is $66.4$ and the median is $67$. The values are not symmetric about the middle, so the two measures differ.",
      "Ordered, the data are $51,60,67,74,80$, so the median is $67$. The mean is $\\frac{332}{5}=66.4$. Since $67>66.4$, the median is larger; the low value $51$ drags the mean down."
    ]
  },
  "q:d86433cbe797238f": {
    "options": [
      "$-\\frac{5}{2}$",
      "$\\frac{3}{2}$",
      "$\\frac{7}{2}$",
      "$2$"
    ],
    "explanations": [
      "$-\\frac{5}{2}$ comes from distributing $-3$ over $(x-2)$ as $-3x-6$ instead of $-3x+6$, giving the numerator $-2x-5$. The correct numerator is $-2x+7$.",
      "$\\frac{3}{2}$ comes from not distributing the $-3$ to the $-2$: $x+1-3x+2=-2x+3$. Multiplying $-3$ by $(x-2)$ gives $-3x+6$, so the numerator is $-2x+7$.",
      "Over the common denominator $(x-2)(x+1)$, the numerator is $(x+1)-3(x-2)=-2x+7$. A fraction is zero when its numerator is zero, so $x=\\frac{7}{2}$, which is not an excluded value.",
      "$x=2$ makes the denominator $x-2$ equal to zero, so $g(2)$ is undefined. An excluded value of the domain can never be a solution of $g(x)=0$."
    ]
  },
  "q:cf0595ed38198476": {
    "options": [
      "The predicted change in $x$ per unit change in $y$",
      "The predicted change in $y$ per 1-unit increase in $x$",
      "The average of all the $x$ and $y$ values",
      "The predicted value of $y$ when $x$ equals zero"
    ],
    "explanations": [
      "This inverts the roles of the variables. The slope measures how $y$ (the response) changes per unit of $x$ (the predictor), not how $x$ changes per unit of $y$.",
      "The slope $m$ is the rate of change of the line: for each $1$-unit increase in $x$, the predicted $y$ changes by $m$ units. That is what $m$ means in context.",
      "The average of the $x$ and $y$ values is not a parameter of the equation. The regression line does pass through $(\\bar{x},\\bar{y})$, but the slope is a rate, not an average.",
      "The predicted $y$ when $x=0$ is the $y$-intercept $b$, not the slope. The slope describes change in $y$ as $x$ increases."
    ]
  },
  "q:a4ca089fb1b1892a": {
    "options": [
      "$-6$",
      "$-3$",
      "$-2$",
      "$3$"
    ],
    "explanations": [
      "$-6$ is $P(1)=6+1-19+6$, the dividend at $x=1$, without dividing by the divisor's value $3(1)-1=2$. Since $P(1)=Q(1)\\cdot 2$, the quotient sum is $-3$.",
      "Polynomial division gives $6x^3+x^2-19x+6=(3x-1)(2x^2+x-6)$, so $a=2$, $b=1$, $c=-6$ and $a+b+c=-3$. Faster: $a+b+c$ equals the quotient at $x=1$, which is $\\frac{P(1)}{3(1)-1}=\\frac{-6}{2}=-3$.",
      "$-2$ would mean the quotient is $2x^2+x-5$, but $(3x-1)(2x^2+x-5)$ has constant term $+5$, not $+6$. The constant of the quotient must be $-6$ so that $(-1)(-6)=6$.",
      "$3$ takes the quotient's constant term as $+6\\div 2=+3$ with the wrong sign, or flips the final sum. The constant term must be $-6$, since the product of $-1$ and $c$ has to equal $+6$."
    ]
  },
  "q:d0d5eb9b7fff4e2a": {
    "options": [
      "$-7$",
      "$-6$",
      "$1$",
      "$8$"
    ],
    "explanations": [
      "$-7$ is only ONE solution, from the case $x-5=2(x+1)$. The other case, $x-5=-2(x+1)$, gives $x=1$, and the question asks for the sum of all solutions.",
      "Two cases: $x-5=2(x+1)$ gives $x=-7$, and $x-5=-2(x+1)$ gives $3x=3$, $x=1$. Both check ($12=12$ and $4=4$), and the sum is $-7+1=-6$.",
      "$1$ is only ONE solution, from the case $x-5=-2(x+1)$. The other case gives $x=-7$, so the sum of all solutions is $-6$.",
      "$8$ is the positive DIFFERENCE between the two solutions, $1-(-7)$. The question asks for their sum, $-7+1=-6$."
    ]
  },
  "q:ff91587c02c6e8ee": {
    "options": [
      "230",
      "254",
      "343",
      "284"
    ],
    "explanations": [
      "$230$ matches no step in $\\pi r^2 h$ with $r=3$ and $h=9$: $81\\pi\\approx 254.5$. It is roughly $81\\times 2.84$, which is not $\\pi$.",
      "The volume of a cylinder is the base area times the height: $V=\\pi r^2 h=\\pi(3)^2(9)=81\\pi\\approx 254.5$ cubic units, which rounds to $254$.",
      "$343$ is $7^3$, which has no connection to this cylinder. The formula is $\\pi r^2 h=81\\pi\\approx 254$.",
      "$284$ is close to $90\\pi\\approx 282.7$ or $9^2\\cdot 3.5$, neither of which is the correct computation. With $r=3$ and $h=9$, $\\pi r^2 h=81\\pi\\approx 254$."
    ]
  },
  "q:97b59fd0d669b5ca": {
    "options": [
      "$8.9$",
      "$13.8$",
      "$17.8$",
      "$250$"
    ],
    "explanations": [
      "$8.9$ is the RADIUS in feet, $\\sqrt{250/\\pi}\\approx 8.92$. The question asks for the time, so one more step is needed: $0.5t=8.92$ gives $t\\approx 17.8$ seconds.",
      "$13.8$ skips the water-usage step, setting $\\pi r^2=150$ directly instead of first finding the area $A=\\frac{150}{0.6}=250$. That gives $r\\approx 6.91$ and $t\\approx 13.8$, but the $0.6$ gallons per square foot cannot be ignored.",
      "Work backward: $0.6A=150$ gives $A=250$ ft$^2$; $\\pi r^2=250$ gives $r\\approx 8.92$ ft; and $0.5t=8.92$ gives $t\\approx 17.8$ seconds.",
      "$250$ is the AREA in square feet, $150\\div 0.6$, the first intermediate. It still has to be converted to a radius and then to a time."
    ]
  },
  "q:46f866b78a533f81": {
    "options": [
      "2.9",
      "44.0",
      "88.0",
      "2520.0"
    ],
    "explanations": [
      "$2.9$ is the distance traveled in ONE second, $0.35\\cdot\\frac{8\\pi}{3}\\approx 2.93$ m. Over $15$ seconds the bicycle goes $15$ times that far.",
      "Each second the contact point advances the arc length $s=r\\theta=0.35\\cdot\\frac{8\\pi}{3}\\approx 2.932$ m. In $15$ seconds: $15\\times 2.932\\approx 44.0$ m.",
      "$88.0$ uses the diameter $0.7$ m instead of the radius in $s=r\\theta$, doubling the distance. The arc-length formula requires the radius, $0.35$ m.",
      "$2520.0$ converts $\\frac{8\\pi}{3}$ to $480$ degrees and then multiplies by $0.35$ and $15$. The arc-length formula $s=r\\theta$ works only with $\\theta$ in radians."
    ]
  },
  "q:d40c1ecade928c7f": {
    "options": [
      "$\\frac{1}{6}$",
      "$-\\frac{1}{6}$",
      "$-\\frac{1}{3}$",
      "$-\\frac{1}{12}$"
    ],
    "explanations": [
      "$\\frac{1}{6}$ misses the sign flip: $3-x=-(x-3)$, so cancelling $(x-3)$ leaves $-\\frac{1}{3x}$, not $\\frac{1}{3x}$. At $x=2$ that is $-\\frac{1}{6}$.",
      "Combine the numerator: $\\frac{1}{x}-\\frac{1}{3}=\\frac{3-x}{3x}=\\frac{-(x-3)}{3x}$. Dividing by $x-3$ cancels that factor, leaving $-\\frac{1}{3x}$. At $x=2$: $-\\frac{1}{6}$.",
      "$-\\frac{1}{3}$ drops the $x$ from the denominator, as if the expression simplified to a constant. The simplified form is $-\\frac{1}{3x}$, which at $x=2$ is $-\\frac{1}{6}$.",
      "$-\\frac{1}{12}$ comes from an incorrect cancellation that leaves $-\\frac{1}{3x^2}$. Only the factor $(x-3)$ cancels; the denominator $3x$ is not squared."
    ]
  },
  "q:7e6e5a1890f793a4": {
    "options": [
      "$\\frac{4}{5}$",
      "$\\frac{5}{4}$",
      "$4$",
      "$5$"
    ],
    "explanations": [
      "Slope is rise over run: $m=\\frac{4-0}{10-5}=\\frac{4}{5}$. Moving from $(5,0)$ to $(10,4)$ rises $4$ while running $5$.",
      "$\\frac{5}{4}$ is run over rise, the reciprocal. Slope puts the change in $y$ (here $4$) on top and the change in $x$ (here $5$) on the bottom.",
      "$4$ is the change in $y$ alone, without dividing by the change in $x$, which is $5$. The slope is the ratio $\\frac{4}{5}$.",
      "$5$ is the change in $x$ alone (or the $x$-coordinate of the first point). Slope is the change in $y$ divided by the change in $x$: $\\frac{4}{5}$."
    ]
  },
  "q:fe7a9349d901cdae": {
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "explanations": [
      "At year $3$, Company A has $400+180=580$ thousand and Company B has $250(1.25)^3\\approx 488$ thousand, so B is still well behind. Choosing $3$ compares growth rates rather than actual revenues.",
      "At year $4$, Company A has $400+240=640$ thousand and Company B has $250(1.25)^4\\approx 610$ thousand. B is close but still BELOW A, so this is one year too early.",
      "Company A: $400+60t$ thousand dollars. Company B: $250(1.25)^t$ thousand. At year $4$: A $=640$, B $\\approx 610$ (B behind). At year $5$: A $=700$, B $\\approx 763$. Year $5$ is the first year B exceeds A.",
      "$6$ comes from labeling the current year as year $1$ instead of year $0$, which shifts every value by one year. With this year as year $0$, B first exceeds A at year $5$."
    ]
  },
  "q:8f325c7acac3cf15": {
    "options": [
      "-5",
      "2",
      "10",
      "-3"
    ],
    "explanations": [
      "$-5$ matches no consistent substitution: with $x=1$, $1-3+k=0$ gives $k=2$. Checking, $1-3-5=-7\\neq 0$, so $x=1$ would not be a root.",
      "A root makes the equation true, so substitute $x=1$: $1^2-3(1)+k=0$, which is $1-3+k=0$, so $k=2$. Check: $x^2-3x+2=(x-1)(x-2)$ has root $1$.",
      "$10$ fails the check: $1-3+10=8\\neq 0$. It may come from computing $1+3$ instead of $1-3$ and then mishandling the sign, but no valid step produces it.",
      "$-3$ is the coefficient of $x$, not the value of $k$. Substituting $x=1$ gives $1-3+k=0$, so $k=2$; with $k=-3$ the left side would be $-5$."
    ]
  },
  "q:d7cdfc7c778c9995": {
    "options": [
      "$15$",
      "$30$",
      "$450$",
      "$6{,}750$"
    ],
    "explanations": [
      "Revenue $R(p)=-30p^2+900p$ is a downward parabola, so its maximum is at the vertex: $p=-\\frac{b}{2a}=-\\frac{900}{2(-30)}=15$ dollars. Equivalently, the roots are $0$ and $30$, and the vertex is midway at $15$.",
      "$30$ is the other root of $-30p(p-30)=0$, the price at which revenue drops back to ZERO. The maximum occurs midway between the roots, at $p=15$.",
      "$450$ is $\\frac{900}{2}$, from leaving out the leading coefficient in $-\\frac{b}{2a}$. Dividing by $2a=-60$ (and flipping the sign) gives $15$, not $450$.",
      "$6{,}750$ is the MAXIMUM REVENUE, $R(15)=-30(225)+900(15)=6750$ dollars. The question asks for the ticket price that produces it, which is $15$."
    ]
  },
  "q:e653e57f382bcde6": {
    "options": [
      "The range of $f$ must equal the range of $g$",
      "The outputs of $f$ must lie in the domain of $g$",
      "The outputs of $g$ must lie in the domain of $f$",
      "The domain of $g$ must equal the domain of $f$"
    ],
    "explanations": [
      "The ranges do not need to match. What matters is that the outputs of the INNER function $g$ are acceptable inputs for $f$; the range of $f$ plays no role in whether $f(g(x))$ is defined.",
      "This reverses the order. In $f(g(x))$, $g$ is applied first and its outputs feed into $f$; the outputs of $f$ are the final results and are never fed into $g$.",
      "In $f(g(x))$, the inner function $g$ runs first and its output $g(x)$ becomes the input to $f$. So $f(g(x))$ is defined only when each output of $g$ lies in the domain of $f$.",
      "The domains do not need to be equal. For example $f(x)=\\sqrt{x}$ and $g(x)=x^2+1$ have different domains, yet $f(g(x))$ is defined for every real $x$ because every output of $g$ is positive."
    ]
  },
  "q:43a2c9750c3e68d6": {
    "options": [
      "Neither, since sample size does not affect it",
      "The sample of 100, since fewer people were surveyed",
      "Neither, since both samples were chosen at random",
      "The sample of 300, since more people were surveyed"
    ],
    "explanations": [
      "Sample size directly affects the margin of error: it shrinks roughly in proportion to $\\frac{1}{\\sqrt{n}}$. A larger random sample gives a tighter estimate.",
      "Fewer people surveyed means MORE sampling variability, not less. The margin of error is larger for the sample of $100$, not smaller.",
      "Random selection removes bias but does not by itself determine precision. Both samples are random, yet the larger one still has less sampling variability and so a smaller margin of error.",
      "The margin of error decreases as sample size increases (roughly with $\\frac{1}{\\sqrt{n}}$), so the $300$-person sample gives the more precise estimate, with a margin of error about $\\frac{1}{\\sqrt{3}}$ as large."
    ]
  },
  "q:ef3b29b20e73f75a": {
    "options": [
      "$x = 0$",
      "No solution",
      "$x = 7$ or $x = -7$",
      "$x = -7$"
    ],
    "explanations": [
      "$|0|=0$, not $-7$, so $x=0$ does not satisfy the equation. No value of $x$ can, because an absolute value is never negative.",
      "Absolute value measures distance from zero, so $|x|\\geq 0$ for every real $x$. Since $-7$ is negative, $|x|=-7$ has no solution.",
      "$x=7$ or $x=-7$ solves $|x|=7$, a positive right-hand side. Both of those values give $|x|=7$, not $-7$.",
      "$|-7|=7$, not $-7$. Taking the absolute value of a negative number produces a positive result, so $x=-7$ does not satisfy $|x|=-7$."
    ]
  },
  "q:80debf47916e7558": {
    "options": [
      "$y = 1$",
      "$x = 0$",
      "There is no asymptote",
      "$y = 0$"
    ],
    "explanations": [
      "$y=1$ is the $y$-INTERCEPT, since $3^0=1$, not an asymptote. The graph passes through $(0,1)$ and keeps falling toward $0$ as $x$ decreases.",
      "$x=0$ is a vertical line (the $y$-axis), so it cannot be a horizontal asymptote. Exponential functions have no vertical asymptotes; they are defined for all real $x$.",
      "The function does have a horizontal asymptote: as $x\\to -\\infty$, $3^x$ gets arbitrarily close to $0$ without reaching it. Only the right side rises without bound.",
      "As $x\\to -\\infty$, $3^x=\\frac{1}{3^{|x|}}$ approaches $0$ but never reaches it, so the line $y=0$ is the horizontal asymptote of $f(x)=3^x$."
    ]
  },
  "q:e183f7a987baca6f": {
    "options": [
      "18",
      "12",
      "2",
      "30"
    ],
    "explanations": [
      "$18$ is twice the area ($2\\times 9$) or six times the side, neither of which is the perimeter. A square has four equal sides, so the perimeter is $4\\times 3=12$.",
      "A square has four sides of equal length, and the perimeter is the total distance around the figure. With side length $3$, the perimeter is $4s=4(3)=12$.",
      "$2$ matches no measurement of this square; it is not the side, the area, or the perimeter. The perimeter adds all four sides: $3+3+3+3=12$.",
      "$30$ matches no step; it would be ten times the side length. The perimeter is four times the side length, $4(3)=12$."
    ]
  },
  "q:38b511f33cf84ef0": {
    "options": [
      "$12$",
      "$4$",
      "$4x$",
      "$3$"
    ],
    "explanations": [
      "$12$ is just the constant in the numerator and ignores the $4x$ term. Factoring the numerator as $4(x+3)$ and cancelling $(x+3)$ leaves $4$.",
      "Factor the numerator: $4x+12=4(x+3)$. The common factor $(x+3)$ cancels with the denominator, leaving $4$ (for $x\\neq -3$).",
      "$4x$ cancels only the $12$ with the $3$, which is not valid: terms cannot be cancelled across a sum. The entire factor $(x+3)$ cancels, leaving $4$.",
      "$3$ is the constant in the denominator's factor, not the simplified value. After factoring $4(x+3)$ and cancelling, the result is $4$."
    ]
  },
  "q:8adbc95e6854be71": {
    "options": [
      "Neither",
      "Growth",
      "Decay",
      "Linear growth"
    ],
    "explanations": [
      "It is clearly one or the other: a function of the form $a\\cdot b^t$ with $b>0$, $b\\neq 1$ is exponential, and the base $0.95$ tells us the direction is decay.",
      "Growth would require a base greater than $1$. Here the base is $0.95$, so each period the value is multiplied by less than $1$ and shrinks.",
      "The base $0.95$ is between $0$ and $1$, so each step multiplies the value by $0.95$, a $5\\%$ decrease. That is exponential decay.",
      "Linear growth adds a constant each period. This function MULTIPLIES by $0.95$ each period, so it is exponential, and since $0.95<1$ it decreases."
    ]
  },
  "q:c2e22c546b21b3f1": {
    "options": [
      "15",
      "14",
      "17",
      "3"
    ],
    "explanations": [
      "The mode is the most frequent value. $15$ appears three times, while every other value appears once, so the mode is $15$.",
      "$14$ appears only once. The mode is the value that occurs most often, and $15$ occurs three times.",
      "$17$ does not appear in the data at all. The mode must be an actual data value, and the most frequent one is $15$.",
      "$3$ is how many TIMES the mode appears, not the mode itself. The value that appears three times is $15$."
    ]
  },
  "q:9c3b9a10d6f58f85": {
    "options": [
      "$\\frac{4}{5}$",
      "$\\frac{5}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{3}{5}$"
    ],
    "explanations": [
      "$\\frac{4}{5}$ is $\\cos(x^{\\circ})$ (and also $\\sin(y^{\\circ})$), from the $3$-$4$-$5$ triangle. The question asks for $\\cos(y^{\\circ})$, which equals $\\sin(x^{\\circ})$ because $x$ and $y$ are complementary.",
      "$\\frac{5}{3}$ is the reciprocal of $\\sin(x^{\\circ})$, which would be the cosecant. A cosine of an acute angle can never exceed $1$.",
      "$\\frac{3}{4}$ is $\\tan(x^{\\circ})$, the ratio of the two legs. The question asks for a cosine, and $\\cos(y^{\\circ})=\\sin(x^{\\circ})=\\frac{3}{5}$.",
      "The acute angles of a right triangle add to $90^{\\circ}$, and the sine of an angle equals the cosine of its complement. So $\\cos(y^{\\circ})=\\sin(x^{\\circ})=\\frac{3}{5}$."
    ]
  },
  "q:dbd5fe4eb518ec31": {
    "options": [
      "1",
      "3",
      "4",
      "5"
    ],
    "explanations": [
      "$1$ is the exponent on the $-x$ term, not the highest exponent. The degree is determined by the largest exponent present, which is $5$.",
      "$3$ is the leading COEFFICIENT, the number in front of $x^5$. The degree is the exponent on that term, $5$.",
      "$4$ is the exponent on the second term, $2x^4$. The degree is the highest exponent in the polynomial, which is the $5$ on $3x^5$.",
      "The degree of a polynomial is the highest exponent on the variable. The term $3x^5$ has exponent $5$, which is larger than any other, so the degree is $5$."
    ]
  },
  "q:8aff5408ed909dbf": {
    "options": [
      "Two real solutions",
      "No real solutions",
      "Two negative real solutions",
      "One real solution"
    ],
    "explanations": [
      "Two real solutions require a POSITIVE discriminant. Here $b^2-4ac=16-20=-4$ is negative, so the square root in the quadratic formula is not real.",
      "The discriminant $-4$ is negative, so $\\sqrt{-4}$ is not a real number and the quadratic formula produces no real solutions. The parabola $y=x^2+4x+5$ never crosses the $x$-axis.",
      "There are no real solutions at all, so they cannot be negative. The sign of the solutions is irrelevant when the discriminant is negative.",
      "Exactly one real solution requires a discriminant of ZERO (a repeated root). A negative discriminant means no real solutions."
    ]
  },
  "q:07f9351f033cc25a": {
    "options": [
      "96",
      "90",
      "88",
      "92"
    ],
    "explanations": [
      "$96$ is the MEDIAN: in order the values are $77,90,96,98,99$, and $96$ is the middle one. The mean divides the sum $460$ by $5$, giving $92$.",
      "$90$ is one of the five data values, not the mean. The mean is the sum of all values divided by the count: $\\frac{460}{5}=92$.",
      "$88$ matches no step; perhaps from a sum of $440$. The actual sum is $99+98+90+77+96=460$, and $\\frac{460}{5}=92$.",
      "The mean is the sum of the values divided by how many there are. Add: $99+98+90+77+96=460$. Divide by $5$: $\\frac{460}{5}=92$."
    ]
  },
  "q:bfb9c2c1b37dcdc7": {
    "options": [
      "$\\frac{4^2}{2^2}$",
      "$-\\frac{4^2}{2^2}$",
      "$\\frac{4}{2}$",
      "$\\frac{2^2}{4^2}$"
    ],
    "explanations": [
      "A negative exponent means take the reciprocal, then apply the positive exponent: $\\left(\\frac{2}{4}\\right)^{-2}=\\left(\\frac{4}{2}\\right)^{2}=\\frac{4^2}{2^2}$ (which equals $4$).",
      "A negative exponent does NOT make the result negative; it means reciprocal. Any positive base to any power is positive, so $-\\frac{4^2}{2^2}$ is impossible.",
      "$\\frac{4}{2}$ is the reciprocal with the exponent $2$ not yet applied, which would be $\\left(\\frac{2}{4}\\right)^{-1}$. The exponent $-2$ requires squaring after flipping.",
      "$\\frac{2^2}{4^2}$ applies the exponent $2$ but ignores the negative sign, which calls for the reciprocal. That is $\\left(\\frac{2}{4}\\right)^{2}$, not $\\left(\\frac{2}{4}\\right)^{-2}$."
    ]
  },
  "q:c18ab3bbe66064fa": {
    "options": [
      "37.2",
      "56.4",
      "21.2",
      "62.3"
    ],
    "explanations": [
      "$37.2$ percent is $\\frac{167}{449}$, using the Dogs column total. That answers 'of all dogs treated, what percent were at Clinic B,' the reverse of what was asked.",
      "Fill in the missing values first: Clinic B dogs $=449-154-128=167$, so Clinic B's total is $95+167+34=296$ (check: $268+296+225=789$). The percent that were dogs is $\\frac{167}{296}\\approx 56.4$.",
      "$21.2$ percent is $\\frac{167}{789}$, using the grand total. The question restricts to animals treated at Clinic B, so the denominator is Clinic B's own total, $296$.",
      "$62.3$ percent is $\\frac{167}{268}$, using Clinic A's row total instead of Clinic B's. Clinic B's total must be computed: $95+167+34=296$."
    ]
  },
  "q:23ba38d54504cb57": {
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "explanations": [
      "$1$ comes from solving the first condition in the wrong order: reading $f(k)=4$ gives $k=3$, and then $g(3)=1$. But $f(g(k))=4$ requires $g(k)=3$, so $k=4$.",
      "$2$ is $f(k)=f(4)$, the intermediate from the second composition. Stopping before applying $g$ leaves the answer one step short; $g(2)=4$.",
      "$3$ is $g(k)$, the intermediate from the first half of the problem (since $f(3)=4$ forces $g(k)=3$). The question asks for $g(f(k))$, not $g(k)$.",
      "Since $f(3)=4$ is the only input giving $4$, the condition $f(g(k))=4$ requires $g(k)=3$. From the $g$ table, $g(4)=3$, so $k=4$. Then $g(f(4))=g(2)=4$."
    ]
  },
  "q:5e5464ad14bd3a56": {
    "options": [
      "The spring probability is about 0.40 and the fall probability is about 0.30, so a spring day was more likely to be rainy.",
      "The spring probability is about 0.44 and the fall probability is about 0.33, because 36 and 27 are shares of the 81 rainy days.",
      "The two probabilities are equal, because each season has about 90 days.",
      "The spring probability is about 0.13 and the fall probability is about 0.10, so the difference between the seasons is negligible."
    ],
    "explanations": [
      "Each day is chosen within its own season, so each probability uses the season's row total: spring $\\frac{36}{90}=0.40$, fall $\\frac{27}{91}\\approx 0.30$. A spring day was more likely to be rainy.",
      "$0.44$ and $0.33$ are $\\frac{36}{81}$ and $\\frac{27}{81}$, dividing by the Rain column total. Those answer 'of the rainy days, what share fell in each season,' which is the reversed conditional.",
      "Nearly equal season lengths do not make the probabilities equal. The rain counts differ ($36$ versus $27$), so $\\frac{36}{90}=0.40$ is well above $\\frac{27}{91}\\approx 0.30$.",
      "$0.13$ and $0.10$ are $\\frac{36}{273}$ and $\\frac{27}{273}$, dividing by the grand total. Each day is selected from one season, so the denominators should be $90$ and $91$, and the resulting gap is not negligible."
    ]
  },
  "q:f93a79c280bd769f": {
    "options": [
      "$4\\sqrt{6}$",
      "$2\\sqrt{6}$",
      "$5$",
      "$10$"
    ],
    "explanations": [
      "Complete the square: $(x-1)^2+y^2=25$, center $(1,0)$, radius $5$. At $x=0$: $1+y^2=25$, so $y=\\pm\\sqrt{24}=\\pm 2\\sqrt{6}$. The intercepts are $4\\sqrt{6}\\approx 9.80$ apart.",
      "$2\\sqrt{6}$ is the distance from the origin to ONE intercept. The two intercepts are at $y=2\\sqrt{6}$ and $y=-2\\sqrt{6}$, so the distance between them is twice that.",
      "$5$ is the radius. The $y$-axis is $1$ unit from the center, so it cuts a chord of length $2\\sqrt{25-1}=4\\sqrt{6}$, which is neither the radius nor the diameter.",
      "$10$ is the diameter, which would be the chord length only if the $y$-axis passed through the center $(1,0)$. It misses by $1$ unit, so the chord is slightly shorter: $4\\sqrt{6}\\approx 9.80$."
    ]
  },
  "q:fdeaf4ba8f2d6a88": {
    "options": [
      "$400$",
      "$1{,}191$",
      "$1{,}300$",
      "$900$"
    ],
    "explanations": [
      "$400$ is the usage ABOVE the $500$ kilowatt-hour threshold, $(143-67)\\div 0.19$. The total usage adds the first $500$ kilowatt-hours back: $900$.",
      "$1{,}191$ removes the $\\$12$ service charge but bills everything at the first-tier rate, $(143-12)\\div 0.11$. Usage beyond $500$ kilowatt-hours is billed at $\\$0.19$, not $\\$0.11$.",
      "$1{,}300$ bills everything at $\\$0.11$ and also ignores the $\\$12$ service charge, $143\\div 0.11$. Both the fixed charge and the higher second-tier rate must be accounted for.",
      "The charge plus first tier is $12+500(0.11)=\\$67$. Since $143>67$, usage exceeded $500$ kilowatt-hours; the remaining $\\$76$ at $\\$0.19$ covers $400$ more. Total: $500+400=900$ kilowatt-hours."
    ]
  },
  "q:d01b93a0128f9998": {
    "options": [
      "8.1",
      "9.6",
      "11.5",
      "19.6"
    ],
    "explanations": [
      "In right triangle $ABD$, $AD=15\\cos 40^{\\circ}\\approx 11.49$. In triangle $ABC$, $AC=\\frac{15}{\\cos 40^{\\circ}}\\approx 19.58$. So $DC=AC-AD\\approx 19.58-11.49=8.1$.",
      "$9.6$ is the altitude $BD=15\\sin 40^{\\circ}$, the perpendicular from $B$ to the hypotenuse. The question asks for $DC$, the piece of the hypotenuse beyond $D$.",
      "$11.5$ is $AD=15\\cos 40^{\\circ}$, the OTHER piece of the hypotenuse, from $A$ to the foot of the altitude. $DC$ is what remains after subtracting $AD$ from $AC$.",
      "$19.6$ is the whole hypotenuse $AC=\\frac{15}{\\cos 40^{\\circ}}$. $DC$ is only the part of it from $D$ to $C$, about $8.1$."
    ]
  },
  "q:2e384f519a7709ee": {
    "options": [
      "The horizontal asymptote is $y = 1$",
      "The horizontal asymptote is $y = 0$",
      "There is no horizontal asymptote",
      "The horizontal asymptote is $y = -1$"
    ],
    "explanations": [
      "$y=1$ would be the horizontal asymptote if the numerator and denominator had the SAME degree with leading coefficients in ratio $1$. Here the numerator's degree is higher, so the function is unbounded.",
      "$y=0$ is the horizontal asymptote when the denominator's degree is GREATER than the numerator's. Here it is the reverse, so the function grows without bound.",
      "The numerator has degree $2$ and the denominator degree $1$, so $f(x)$ behaves like $x$ for large $|x|$ and grows without bound. There is no horizontal asymptote (the graph has a slant asymptote $y=x+1$).",
      "$y=-1$ matches no rule for horizontal asymptotes. Since the numerator's degree exceeds the denominator's, the function has no horizontal asymptote at all."
    ]
  },
  "q:ca4e08b9b4075e64": {
    "options": [
      "$x = -3$ or $x = -1$",
      "$x = 3$ or $x = 1$",
      "$x = -4$ or $x = -3$",
      "$x = -3$ or $x = 1$"
    ],
    "explanations": [
      "Factor: find two numbers that multiply to $3$ and add to $4$, namely $3$ and $1$. Then $(x+3)(x+1)=0$, so $x=-3$ or $x=-1$. Check: $9-12+3=0$.",
      "$x=3$ or $x=1$ flips both signs; these are the zeros of $x^2-4x+3$. Checking, $3^2+4(3)+3=24\\neq 0$.",
      "$x=-4$ or $x=-3$ uses the coefficients $4$ and $3$ directly as the (negated) roots. The roots must multiply to $3$ and add to $-4$: $-3$ and $-1$.",
      "$x=-3$ is right, but $x=1$ is not: $1+4+3=8\\neq 0$. The factors are $(x+3)$ and $(x+1)$, so the second zero is $-1$."
    ]
  },
  "q:d684094d9c989aee": {
    "options": [
      "5",
      "1",
      "4",
      "9"
    ],
    "explanations": [
      "In vertex form $y=a(x-h)^2+k$, the vertex is $(h,k)$. Here $h=-8$ and $k=5$, so the vertex is $(-8,5)$ and its $y$-coordinate is $5$.",
      "$1$ matches no step. The $y$-coordinate of the vertex is the constant $k$ added outside the square, which is $5$; substituting $x=-8$ confirms $y=-(0)+5=5$.",
      "$4$ matches no step in reading the vertex form. The vertex $y$-coordinate is $k=5$, since the squared term is zero at $x=-8$.",
      "$9$ matches no step; it may combine the two constants. The $8$ inside the parentheses sets the $x$-coordinate ($-8$), and the $y$-coordinate is $5$."
    ]
  },
  "q:a1ffd73de6dbbfff": {
    "options": [
      "$3$",
      "$5$",
      "$6$",
      "$10$"
    ],
    "explanations": [
      "$3$ is the $x$-coordinate of the center, the midpoint of $A$ and $B$. The two possible $k$ values are symmetric about it ($0$ and $6$), and their sum is $6$.",
      "$5$ is the radius, half of $AB=\\sqrt{8^2+6^2}=10$. It is used to set up $(k-3)^2+16=25$, but it is not the requested sum.",
      "The center is the midpoint $(3,1)$ and the radius is $\\frac{10}{2}=5$. For $C(k,5)$: $(k-3)^2+(5-1)^2=25$, so $(k-3)^2=9$ and $k=0$ or $k=6$. The sum is $6$.",
      "$10$ is the diameter $AB$. The possible values of $k$ are $0$ and $6$, which sum to $6$, not $10$."
    ]
  },
  "q:21797ca5ab2956de": {
    "options": [
      "84.24",
      "356.40",
      "434.16",
      "440.64"
    ],
    "explanations": [
      "$84.24$ is the cost of the coating alone ($4.68$ m$^2$ at $\\$18$). The question asks for the total including the concrete, $356.40$.",
      "$356.40$ is the cost of the concrete alone ($3.24$ m$^3$ at $\\$110$). The nonslip coating on the sloped top, $\\$84.24$, must be added.",
      "$434.16$ uses the horizontal run $3.6$ m as the sloped length, giving a coated area of $4.32$ m$^2$ and $\\$77.76$. The slope is the hypotenuse, $\\sqrt{3.6^2+1.5^2}=3.9$ m.",
      "Concrete: $\\frac{1}{2}(3.6)(1.5)(1.2)=3.24$ m$^3$, costing $3.24(110)=356.40$. Slope length $\\sqrt{3.6^2+1.5^2}=3.9$ m, so coated area $3.9(1.2)=4.68$ m$^2$, costing $84.24$. Total $440.64$."
    ]
  },
  "q:ec5bc55eab432c9b": {
    "options": [
      "2.9",
      "4.0",
      "0.4",
      "1.4"
    ],
    "explanations": [
      "$2.9$ is $\\frac{40}{14}$, the ratio of raw defect COUNTS. It ignores that Line C inspected $700$ units versus Line B's $500$; the rates must be compared.",
      "Line B's defect rate is $\\frac{40}{500}=0.08$ and Line C's is $\\frac{14}{700}=0.02$. The ratio is $\\frac{0.08}{0.02}=4.0$.",
      "$0.4$ is roughly $\\frac{14}{40}$, which both uses raw counts instead of rates and flips the comparison to Line C over Line B. The question asks for B's rate divided by C's.",
      "$1.4$ is $\\frac{700}{500}$, the ratio of the numbers of units inspected. That compares line sizes, not how often defects occurred."
    ]
  },
  "q:1d7ce5b4fc8f9a8b": {
    "options": [
      "$2x^2$",
      "$2x$",
      "$x$",
      "$2$"
    ],
    "explanations": [
      "$2x^2$ is a common denominator but not the LEAST one; the denominators $2$ and $x$ have no repeated factor, so no $x^2$ is needed.",
      "The denominators are $2$ and $x$, which share no common factor, so the least common denominator is their product, $2x$. Rewrite as $\\frac{x}{2x}+\\frac{2}{2x}$.",
      "$x$ alone is not divisible by $2$, so $\\frac{1}{2}$ cannot be rewritten with denominator $x$ using whole multiples. The LCD must include both $2$ and $x$.",
      "$2$ alone is not a multiple of $x$, so $\\frac{1}{x}$ cannot be rewritten over the denominator $2$. The LCD must include the factor $x$ as well: $2x$."
    ]
  },
  "q:dd7f32cee75290af": {
    "options": [
      "$-4$",
      "$0$",
      "$2$",
      "$4$"
    ],
    "explanations": [
      "$-4$ is $a-b=-2-2$, the difference taken in the wrong order. The question asks for $b-a=2-(-2)=4$.",
      "$0$ is $a+b=-2+2$, adding the two coefficients when the question asks for their difference. With $a=-2$ and $b=2$, the requested value is $b-a=4$.",
      "$2$ is the value of $k$ (and also of $b$ alone), an intermediate. The question asks for $b-a=2-(-2)=4$.",
      "Since $x+4$ is a factor, $P(-4)=-64+16k+24+8=0$ gives $k=2$. Dividing $x^3+2x^2-6x+8$ by $x+4$ gives $x^2-2x+2$, so $a=-2$, $b=2$, and $b-a=4$."
    ]
  },
  "q:a37dfae764b2b8a7": {
    "options": [
      "$(0, \\infty)$",
      "$(-\\infty, \\infty)$",
      "$[3, \\infty)$",
      "$(-\\infty, 3]$"
    ],
    "explanations": [
      "$(0,\\infty)$ ignores the $-3$ inside the radical. For $0<x<3$ the radicand $x-3$ is negative and the function is undefined; also $x=3$ itself is allowed.",
      "All real numbers would require $x-3\\geq 0$ for every $x$, but negative radicands (for $x<3$) are undefined in the real numbers.",
      "The radicand must be nonnegative: $x-3\\geq 0$, so $x\\geq 3$. The $+3$ outside the radical shifts outputs, not the domain. In interval notation that is $[3,\\infty)$.",
      "$(-\\infty,3]$ reverses the inequality. For $x<3$, $x-3$ is negative and the square root is undefined; the domain is $x\\geq 3$."
    ]
  },
  "q:de542d4800931e7c": {
    "options": [
      "No real solutions",
      "Two distinct real solutions",
      "Infinitely many solutions",
      "Exactly one real solution"
    ],
    "explanations": [
      "The discriminant $b^2-4ac=9-48=-39$ is negative, so the quadratic formula involves $\\sqrt{-39}$, which is not real. The equation has no real solutions.",
      "Two distinct real solutions require a POSITIVE discriminant. Here it is $-39$, so the graph of $y=x^2-3x+12$ never crosses the $x$-axis.",
      "A quadratic equation can have at most two solutions; infinitely many is impossible unless both sides are identical expressions, which is not the case here.",
      "Exactly one real solution requires a discriminant of ZERO (a repeated root). A discriminant of $-39$ is negative, which means no real solutions."
    ]
  },
  "q:387e5865264a0eaf": {
    "options": [
      "Linear — it has a constant difference",
      "Quadratic — it has a squared term",
      "Exponential — it has a constant ratio",
      "Neither — no pattern can be found"
    ],
    "explanations": [
      "The differences are $8$, $24$, $72$, which are not constant, so the sequence is not linear. The RATIOS are constant ($3$), which signals exponential growth.",
      "A quadratic pattern would have constant SECOND differences. Here the differences $8,24,72$ have second differences $16,48$, which are not constant; the ratios are constant instead.",
      "Each term is $3$ times the previous: $\\frac{12}{4}=\\frac{36}{12}=\\frac{108}{36}=3$. A constant ratio between consecutive terms is the signature of exponential growth.",
      "There is a clear pattern: multiply by $3$ each time. The sequence is $4\\cdot 3^n$, an exponential function."
    ]
  },
  "q:09ba6d9e77af0605": {
    "options": [
      "$\\frac{9}{52}$",
      "$\\frac{9}{28}$",
      "$\\frac{15}{24}$",
      "$\\frac{9}{24}$"
    ],
    "explanations": [
      "$\\frac{9}{52}$ divides by all $52$ participants. The selection is restricted to the morning session, so the denominator should be the $24$ morning participants.",
      "$\\frac{9}{28}$ divides by the EVENING session total ($9+19=28$). The question restricts to the morning session, whose total is $15+9=24$.",
      "$\\frac{15}{24}$ has the right denominator but counts the morning participants who DID complete the program. The question asks about those who did not, $9$.",
      "The condition restricts the sample space to the $15+9=24$ morning participants, of whom $9$ did not complete. The probability is $\\frac{9}{24}$."
    ]
  },
  "q:ed74c7fe20799fe5": {
    "options": [
      "$x \\geq 5$",
      "All real numbers",
      "$x \\neq 5$",
      "$x \\neq -5$"
    ],
    "explanations": [
      "$x\\geq 5$ is the kind of restriction a square root would impose. A denominator only forbids the single value that makes it zero; values below $5$ are fine.",
      "Not all real numbers work: at $x=5$ the denominator is $0$ and the function is undefined. That one value must be excluded.",
      "A fraction is undefined when its denominator is zero: $x-5=0$ at $x=5$. Every other real number is allowed, so the domain is $x\\neq 5$.",
      "$x\\neq -5$ is a sign error. The denominator $x-5$ is zero when $x=5$, not $-5$; at $x=-5$ the function equals $-\\frac{1}{10}$, which is defined."
    ]
  },
  "q:cf42d5738ae1b7da": {
    "options": [
      "71",
      "70.6",
      "68",
      "68.2"
    ],
    "explanations": [
      "$71$ is the target MEAN, not an allowable score. Shooting $71$ would give a total of $570.8$ and an $8$-round mean of $71.35$, above the goal.",
      "$70.6$ subtracts the $0.4$-stroke shortfall only once from $71.0$. The shortfall accumulated over all $7$ rounds is $7(0.4)=2.8$ strokes, so the eighth score must be $71-2.8=68.2$ or less.",
      "Her $7$-round total is $7(71.4)=499.8$. For a mean of at most $71.0$ over $8$ rounds, the total must be at most $568$, so the eighth score satisfies $s\\leq 68.2$. Since scores are whole numbers, the greatest is $68$.",
      "$68.2$ is the exact bound from $499.8+s\\leq 568$, but a round score must be a whole number of strokes, so the greatest allowable score is $68$."
    ]
  },
  "q:2cd1be9e81e42f7d": {
    "options": [
      "$-8$",
      "$-2$",
      "$-5$",
      "$3$"
    ],
    "explanations": [
      "$-8$ is the LOWER tangent line, $-5-3$. The question asks for the greater of the two values, which is the top of the circle at $-5+3=-2$.",
      "Completing the square: $(x-4)^2+(y+5)^2=9$, center $(4,-5)$, radius $3$. A horizontal line is tangent only at the top or bottom, $y=-5\\pm 3$, so the greater value is $c=-2$.",
      "$-5$ is the $y$-coordinate of the center. The line $y=-5$ passes through the center and meets the circle at TWO points, not one.",
      "$3$ is the radius, not a $y$-value. The tangent lines are at $y=-5\\pm 3$, i.e. $-2$ and $-8$; the line $y=3$ misses the circle entirely."
    ]
  },
  "q:909bbec4e0f1c6b9": {
    "options": [
      "$8$",
      "$7$",
      "$28$",
      "$56$"
    ],
    "explanations": [
      "Combining gives $\\frac{(x+1)-x}{x(x+1)}=\\frac{1}{x(x+1)}=\\frac{1}{56}$, so $x(x+1)=56$. Consecutive integers with product $56$ are $7$ and $8$, so $x=7$ and $x+1=8$.",
      "$7$ is $x$ itself, the natural stopping point of the algebra. The question asks for $x+1$, which is $8$.",
      "$28$ is $\\frac{56}{2}$, from reading the combined numerator as $2$ instead of $1$. The numerator is $(x+1)-x=1$, so $x(x+1)=56$.",
      "$56$ is the product $x(x+1)$, not $x+1$. Factoring $56=7\\times 8$ as consecutive integers gives $x+1=8$."
    ]
  },
  "q:f5e2aee6c5e0ac4d": {
    "options": [
      "$5x + 1$",
      "$25x + 1$",
      "$5x + 6$",
      "$5x + 2$"
    ],
    "explanations": [
      "$5x+1$ is $f(x)$ itself, left unchanged. Replacing the input $x$ with $x+1$ must change the expression: $5(x+1)+1=5x+5+1=5x+6$.",
      "$25x+1$ multiplies the coefficient by $5$, which matches no step. Substituting $x+1$ for $x$ gives $5(x+1)+1$, and $5$ distributes as $5x+5$.",
      "To find $f(x+1)$, replace every $x$ in the rule with the new input $x+1$, then simplify: $f(x+1)=5(x+1)+1=5x+5+1=5x+6$.",
      "$5x+2$ adds $1$ to the output instead of to the input; that is $f(x)+1$. The input $x+1$ is multiplied by $5$ first, contributing $5$, not $1$."
    ]
  },
  "q:8dc60b4ec67e67bd": {
    "options": [
      "$(x^2 - 4)(x^2 + 5)$",
      "$(x^2 + 4)(x^2 - 5)$",
      "$(x^2 + 4)(x^2 + 5)$",
      "$(x + 4)(x - 5)$"
    ],
    "explanations": [
      "$(x^2-4)(x^2+5)=x^4+x^2-20$, with a middle term of $+x^2$. The given expression has $-x^2$, so the signs are swapped.",
      "Let $u=x^2$, so the expression is $u^2-u-20$. Factors of $-20$ that add to $-1$ are $4$ and $-5$: $(u+4)(u-5)=(x^2+4)(x^2-5)$. Check: $x^4-5x^2+4x^2-20$.",
      "$(x^2+4)(x^2+5)=x^4+9x^2+20$. Both the middle term and the constant have the wrong sign; the constant $-20$ requires one negative factor.",
      "$(x+4)(x-5)=x^2-x-20$, a quadratic, not a quartic. The substitution $u=x^2$ must be undone with $x^2$ in each factor, not $x$."
    ]
  },
  "q:14bd76df49e4d0f6": {
    "options": [
      "The number of additional gallons of paint needed to cover $1{,}250$ square feet rather than $900$ square feet",
      "The cost, in dollars, of the paint needed to cover $350$ square feet",
      "The additional cost, in dollars, of the paint needed to cover $1{,}250$ square feet rather than $900$ square feet",
      "The cost, in dollars, per square foot of wall covered"
    ],
    "explanations": [
      "The gallons difference would be $f(1250)-f(900)$, with no $g$ applied. Applying $g$ converts each gallon amount into dollars, so the expression is a difference in dollars, not gallons.",
      "$g(f(350))$ would equal $g(f(1250))-g(f(900))$ only if both functions were directly proportional. The problem says neither is assumed proportional, so the cost for $350$ square feet is a different quantity.",
      "$f(1250)$ and $f(900)$ are gallon amounts, and $g$ turns each into a dollar cost. Subtracting the two costs gives the additional dollars needed to cover $1{,}250$ square feet rather than $900$.",
      "Cost per square foot would be a QUOTIENT (dollars divided by square feet). This expression is a difference of two dollar amounts, not a rate."
    ]
  },
  "q:c57e2407de650b69": {
    "options": [
      "$50$",
      "$250$",
      "$12{,}000$",
      "$12{,}500$"
    ],
    "explanations": [
      "$50$ is the optimal monthly FEE, $40+2(5)$, an intermediate. The question asks for the revenue, which is fee times members: $50\\times 250$.",
      "$250$ is the number of members at the optimal fee, $300-10(5)$, an intermediate. Revenue is $50\\times 250=12{,}500$ dollars.",
      "$12{,}000$ is the CURRENT revenue, $40\\times 300$, which corresponds to $n=0$ increases. The vertex of the revenue function is at $n=5$, where revenue is higher.",
      "With $n$ two-dollar increases, revenue is $R(n)=(40+2n)(300-10n)=12000+200n-20n^2$, maximized at $n=\\frac{200}{40}=5$. Then the fee is $\\$50$, membership $250$, and revenue $50\\times 250=\\$12{,}500$."
    ]
  },
  "q:bbe1f87b6d7b6e58": {
    "options": [
      "$8{,}000$",
      "$12{,}000$",
      "$16{,}000$",
      "$11{,}300$"
    ],
    "explanations": [
      "$8{,}000$ is the count after ONE doubling, at $6$ p.m. Three more hours pass before $9$ p.m., during which the culture keeps growing.",
      "$12{,}000$ interpolates LINEARLY: $8{,}000$ plus half of the next $8{,}000$ gain. Exponential growth is not linear within a period; half a doubling multiplies by $\\sqrt{2}$, not $1.5$.",
      "$16{,}000$ counts two full doublings, which would take $12$ hours (until midnight). Only $9$ hours pass, which is $1.5$ doubling periods.",
      "Noon to $9$ p.m. is $9$ hours, or $\\frac{9}{6}=1.5$ doubling periods. The count is $4000\\cdot 2^{1.5}=4000\\cdot 2\\sqrt{2}\\approx 11{,}314$, about $11{,}300$ cells."
    ]
  },
  "q:83085fcbca859628": {
    "options": [
      "4.03",
      "3.50",
      "7.21",
      "8.06"
    ],
    "explanations": [
      "Let $C=(0,y)$ and set the squared distances equal: $16+(y-3)^2=4+(y-7)^2$ gives $25-6y=53-14y$, so $8y=28$ and $y=3.5$. Then $CA=\\sqrt{4^2+0.5^2}=\\sqrt{16.25}\\approx 4.03$.",
      "$3.50$ is the $y$-coordinate of $C$, the intermediate value. The question asks for the distance from $C=(0,3.5)$ to $A(4,3)$, which is $\\sqrt{16.25}\\approx 4.03$.",
      "$7.21$ is the length of $\\overline{AB}=\\sqrt{6^2+4^2}=\\sqrt{52}$. The question asks for the distance from $C$ to $A$, not between $A$ and $B$.",
      "$8.06$ is $CA+CB$, twice the requested distance (since $CA=CB$). The distance from $C$ to $A$ alone is about $4.03$."
    ]
  },
  "q:02a44f6756a1924e": {
    "options": [
      "$\\theta \\times r^2$",
      "$\\frac{\\theta}{360} \\times 2\\pi r$",
      "$\\frac{\\theta}{360} \\times \\pi r^2$",
      "$\\pi r^2$"
    ],
    "explanations": [
      "$\\theta\\times r^2$ omits the $\\pi$ and the division by $360$. With $\\theta$ in degrees, the sector's fraction of the circle is $\\frac{\\theta}{360}$, applied to the full area $\\pi r^2$.",
      "$\\frac{\\theta}{360}\\times 2\\pi r$ is the ARC LENGTH of the sector, since $2\\pi r$ is the circumference. Area uses $\\pi r^2$.",
      "A sector is the fraction $\\frac{\\theta}{360}$ of the whole circle, so its area is that fraction of the full area: $\\frac{\\theta}{360}\\times\\pi r^2$.",
      "$\\pi r^2$ is the area of the ENTIRE circle, which corresponds to $\\theta=360^{\\circ}$. A sector with a smaller central angle has only a fraction of that area."
    ]
  },
  "q:ca08a9aef8cd28b6": {
    "options": [
      "Cross multiply the two fractions",
      "Find a common denominator",
      "Multiply straight across",
      "Multiply by its reciprocal"
    ],
    "explanations": [
      "Cross multiplying is a technique for solving a PROPORTION (an equation of two fractions), not for dividing one expression by another.",
      "A common denominator is needed to ADD or subtract rational expressions, not to divide them. Division works by flipping the divisor and multiplying.",
      "Multiplying straight across is the rule for MULTIPLYING fractions. For division, the second fraction must first be inverted.",
      "Dividing by a fraction is the same as multiplying by its reciprocal: $\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$. Flip the divisor, then multiply."
    ]
  },
  "q:f7ce12cc7ff1a4d0": {
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{1}{5}$",
      "$\\frac{2}{7}$",
      "$\\frac{4}{5}$"
    ],
    "explanations": [
      "$\\frac{3}{4}$ matches no count here; it would require $3$ correct out of $4$ questions. The student answered $4$ of $5$ correctly.",
      "$\\frac{1}{5}$ is the fraction of questions the student got WRONG ($1$ of $5$). The question asks about getting a question right.",
      "$\\frac{2}{7}$ matches no count on this quiz, which had $5$ questions and $4$ correct answers. Experimental probability is successes over trials, $\\frac{4}{5}$.",
      "Experimental probability is the number of successes divided by the number of trials: $4$ correct out of $5$ questions, so $\\frac{4}{5}$."
    ]
  },
  "q:e1b7705cb17721f2": {
    "options": [
      "Exponential always starts at a higher value than linear",
      "Linear grows by adding; exponential grows by multiplying",
      "Linear always grows faster than exponential does",
      "Linear grows by multiplying; exponential grows by adding"
    ],
    "explanations": [
      "Starting values are irrelevant to the type of growth. An exponential function can start lower than a linear one and still eventually overtake it; the distinction is how each step changes the value.",
      "Linear growth adds a constant each step; exponential growth multiplies by a constant factor each step. Equal differences versus equal ratios is the defining distinction.",
      "Linear growth does not always grow faster. Exponential growth (with a factor greater than $1$) eventually outpaces any linear growth, no matter the starting values.",
      "This reverses the two. It is LINEAR growth that adds a fixed amount each step and EXPONENTIAL growth that multiplies by a fixed factor."
    ]
  },
  "q:cef5f42413ca3645": {
    "options": [
      "Falls left, rises right",
      "Rises left, falls right",
      "Rises on both ends",
      "Falls on both ends"
    ],
    "explanations": [
      "Falls left, rises right describes an ODD-degree polynomial with a positive leading coefficient, like $x^3$. Degree $4$ is even, so both ends go the same direction.",
      "Rises left, falls right describes an odd-degree polynomial with a NEGATIVE leading coefficient, like $-x^3$. This polynomial has even degree and a positive leading coefficient.",
      "The leading term $2x^4$ dominates for large $|x|$. Even degree means both ends point the same way, and the positive coefficient means they point UP: the graph rises on both ends.",
      "Falls on both ends would require an even degree with a NEGATIVE leading coefficient, like $-2x^4$. Here the leading coefficient $2$ is positive."
    ]
  },
  "q:a68c56bae407d435": {
    "options": [
      "Reflects $f(x)$ across the $x$-axis",
      "Rotates $f(x)$ by $180^\\circ$",
      "Shifts $f(x)$ down by $1$ unit",
      "Reflects $f(x)$ across the $y$-axis"
    ],
    "explanations": [
      "Multiplying every output by $-1$ flips each point $(x,y)$ to $(x,-y)$. Points above the $x$-axis move below it and vice versa, which is a reflection across the $x$-axis.",
      "A $180^{\\circ}$ rotation about the origin would send $(x,y)$ to $(-x,-y)$, which corresponds to $-f(-x)$. Negating only the output changes just the sign of $y$.",
      "A shift down by $1$ would be $f(x)-1$. Multiplying by $-1$ is not the same as subtracting $1$; it flips the sign of every output.",
      "A reflection across the $y$-axis sends $(x,y)$ to $(-x,y)$, which is $f(-x)$, negating the INPUT. Here the output is negated, so the flip is across the $x$-axis."
    ]
  },
  "q:134354563688e23f": {
    "options": [
      "5",
      "0",
      "11",
      "8"
    ],
    "explanations": [
      "An exponent of $\\frac{1}{3}$ means the cube root: the number whose cube is $125$. Since $5\\cdot 5\\cdot 5=125$, $\\sqrt[3]{125}=5$, so $125^{1/3}=5$.",
      "$0$ is impossible: a positive base raised to any power is positive. The cube root of $125$ is the number whose cube is $125$, namely $5$.",
      "$11$ is not the cube root of $125$: $11^3=1331$. The value is $5$, since $5^3=125$.",
      "$8$ is not the cube root of $125$: $8^3=512$. (The cube root of $512$ is $8$, and $8$ is also $125^{1/3}$ confused with $2^3$.) The correct value is $5$."
    ]
  },
  "q:6a09a668bd9f46c6": {
    "options": [
      "53",
      "50",
      "48",
      "79"
    ],
    "explanations": [
      "$53$ matches no step: $\\pi(4)^2=16\\pi\\approx 50.27$. A slightly inflated value of $\\pi$ or a rounding slip does not account for $53$.",
      "The area of a circle is $\\pi r^2$. With radius $4$, that is $\\pi(4)^2=16\\pi\\approx 50.27$ square units, which rounds to $50$.",
      "$48$ is $3\\times 16$, using $3$ as a crude approximation of $\\pi$. With $\\pi\\approx 3.14$, $16\\pi\\approx 50$.",
      "$79$ is approximately $25\\pi$, the area of a circle with radius $5$, not $4$. With $r=4$, $\\pi r^2=16\\pi\\approx 50$."
    ]
  },
  "q:8657a38859dec612": {
    "options": [
      "$x = \\sqrt{2}$",
      "$x = \\pm\\frac{2}{2}$",
      "$x = \\pm 2$",
      "$x = \\pm\\sqrt{2}$"
    ],
    "explanations": [
      "$x=\\sqrt{2}$ gives only the positive root. Since $(-\\sqrt{2})^2=2$ as well, the negative root must be included.",
      "$\\pm\\frac{2}{2}=\\pm 1$, and $1^2=1\\neq 2$. Dividing by $2$ is not how a square is undone; the inverse of squaring is the square root.",
      "$x=\\pm 2$ gives $x^2=4$, not $2$. This confuses $x^2=2$ with $x^2=4$ (or takes half of the exponent incorrectly).",
      "Taking the square root of both sides of $x^2=2$ gives two solutions, $x=\\sqrt{2}$ and $x=-\\sqrt{2}$, because both square to $2$. So $x=\\pm\\sqrt{2}$."
    ]
  },
  "q:9904540374579ba4": {
    "options": [
      "75",
      "13",
      "25",
      "50"
    ],
    "explanations": [
      "$75$ percent is the probability of NOT drawing a club ($\\frac{39}{52}$), the complement of the requested event.",
      "$13$ is the NUMBER of clubs, not a percent. The probability is $\\frac{13}{52}=\\frac{1}{4}$, which is $25$ percent.",
      "There are $13$ clubs among $52$ cards, so the probability is $\\frac{13}{52}=\\frac{1}{4}=25$ percent. Equivalently, clubs are one of four equally likely suits.",
      "$50$ percent would correspond to two of the four suits (such as all black cards). Clubs alone are one suit, so $\\frac{1}{4}=25$ percent."
    ]
  },
  "q:b848b5cb6878ee5f": {
    "options": [
      "$(4x + 3)^2$",
      "$(4x + 3)(4x - 3)$",
      "$(16x + 3)(x - 3)$",
      "$(4x - 3)^2$"
    ],
    "explanations": [
      "$(4x+3)^2=16x^2+24x+9$, a perfect square trinomial with a middle term and a $+9$. The given expression has $-9$ and no $x$ term.",
      "$16x^2-9$ is a difference of two squares, $(4x)^2-3^2$, which factors as (sum)(difference): $(4x+3)(4x-3)$. Check: $16x^2-12x+12x-9=16x^2-9$.",
      "$(16x+3)(x-3)=16x^2-45x-9$. The middle term $-45x$ does not vanish, so this is not a factorization of $16x^2-9$.",
      "$(4x-3)^2=16x^2-24x+9$. The constant is $+9$ rather than $-9$, and there is a middle term, so it does not match."
    ]
  },
  "q:b9cec0dc6d4c8522": {
    "options": [
      "$2$",
      "$36$",
      "$44$",
      "$52$"
    ],
    "explanations": [
      "$2$ is the frame WIDTH in inches, the intermediate found from $(8+2x)(10+2x)=168$. The question asks for the perimeter of the outer edge, which uses the outer dimensions $12$ by $14$.",
      "$36$ is the perimeter of the photograph itself, $2(8+10)$, with the frame ignored. The outer edge is $12$ by $14$, giving perimeter $52$.",
      "$44$ comes from adding the width $x=2$ only once to each dimension, giving $10$ by $12$. The frame surrounds the photo on BOTH sides, so each dimension grows by $2x=4$.",
      "Let $x$ be the frame width: $(8+2x)(10+2x)=168$ gives $x^2+9x-22=0$, so $(x+11)(x-2)=0$ and $x=2$. The outer rectangle is $12$ by $14$, with perimeter $2(12+14)=52$ inches."
    ]
  },
  "q:305d11df2120cdf8": {
    "options": [
      "16",
      "4",
      "27",
      "10"
    ],
    "explanations": [
      "The mode is the most frequent value. $16$ appears three times, while every other value appears once, so the mode is $16$.",
      "$4$ matches no value or count in the data. The most frequent value is $16$, which appears three times.",
      "$27$ does not appear in the data. The mode must be an actual data value, and the one that repeats most is $16$.",
      "$10$ does not appear in the data at all. The mode is the value occurring most often, which is $16$."
    ]
  },
  "q:4b68180147f90144": {
    "options": [
      "6",
      "8",
      "9.6",
      "48"
    ],
    "explanations": [
      "$6$ is half of $BC$, the segment the altitude from $A$ creates on the base. It is a step toward the area, not the requested altitude.",
      "$8$ is the altitude from $A$ to $\\overline{BC}$, $\\sqrt{10^2-6^2}$. The question asks for a DIFFERENT altitude, the one from $B$ to $\\overline{AC}$.",
      "The altitude from $A$ to $\\overline{BC}$ is $\\sqrt{10^2-6^2}=8$, so the area is $\\frac{1}{2}(12)(8)=48$. Using $\\overline{AC}=10$ as the base, $48=\\frac{1}{2}(10)h$ gives $h=9.6$.",
      "$48$ is the AREA of the triangle, an intermediate. The altitude to $\\overline{AC}$ is found from $48=\\frac{1}{2}(10)h$, giving $9.6$."
    ]
  },
  "q:56493525fea4a874": {
    "options": [
      "192",
      "240",
      "276",
      "204"
    ],
    "explanations": [
      "$192$ uses the pyramid's height $4$ as its slant height, giving a lateral area of $4\\cdot\\frac{1}{2}(6)(4)=48$. The slant height is $\\sqrt{4^2+3^2}=5$, so the lateral area is $60$.",
      "$240$ includes the cube's bottom face ($36$ cm$^2$), which rests on the table and is not varnished. Only the four vertical faces of the cube count.",
      "$276$ counts all six faces of the cube ($216$) plus the pyramid's $60$. The bottom face is on the table and the top face is hidden under the pyramid, so only $144$ of the cube counts.",
      "The cube's four vertical faces give $4(36)=144$ cm$^2$. The pyramid's slant height is $\\sqrt{4^2+3^2}=5$, so its lateral area is $4\\cdot\\frac{1}{2}(6)(5)=60$. Total varnished area: $144+60=204$."
    ]
  },
  "q:73f33801664b4f37": {
    "options": [
      "All real numbers",
      "All real numbers except $x = 0$",
      "All real numbers except $x = 4$",
      "All real numbers except $x = -4$"
    ],
    "explanations": [
      "Not all real numbers work: at $x=4$ the denominator $x-4$ is zero and the function is undefined, so that value must be excluded.",
      "$x=0$ gives $f(0)=\\frac{1}{-4}$, which is perfectly defined. The excluded value is where the DENOMINATOR is zero, $x=4$.",
      "A fraction is undefined when its denominator is zero. $x-4=0$ at $x=4$, so the domain is all real numbers except $4$.",
      "$x=-4$ is a sign error: $x-4$ is zero when $x=4$, not $-4$. At $x=-4$ the function equals $-\\frac{1}{8}$, which is defined."
    ]
  },
  "q:57927ab42d5f69fb": {
    "options": [
      "$4 + \\frac{4}{x^2}$",
      "$4x + \\frac{4}{x}$",
      "$4 + \\frac{4}{x}$",
      "$1 + \\frac{4}{x}$"
    ],
    "explanations": [
      "$4+\\frac{4}{x^2}$ has the wrong denominator in the second term. Dividing $4$ by $x$ gives $\\frac{4}{x}$, not $\\frac{4}{x^2}$.",
      "$4x+\\frac{4}{x}$ divides only the second term by $x$. Both terms of $4x+4$ must be divided by $x$: $\\frac{4x}{x}=4$, not $4x$.",
      "Distribute the $4$ in the numerator, then split the fraction into two terms over the same denominator: $\\frac{4(x+1)}{x}=\\frac{4x+4}{x}=\\frac{4x}{x}+\\frac{4}{x}=4+\\frac{4}{x}$.",
      "$1+\\frac{4}{x}$ drops the coefficient from the first term. Dividing $4x$ by $x$ gives $4$, not $1$, so the constant term is $4$."
    ]
  },
  "q:7a06cf4448f842f6": {
    "options": [
      "$5.3$",
      "$12$",
      "$20.4$",
      "$101$"
    ],
    "explanations": [
      "$5.3$ ignores the reimbursement completely, solving $29+6n=60.60$. The $\\$60.60$ is only $60$ percent of the gym charge, so the charge is larger.",
      "The member pays $60$ percent of the charge: $0.6(29+6n)=60.60$. Dividing by $0.6$ gives $29+6n=101$, so $6n=72$ and $n=12$ classes.",
      "$20.4$ divides by $0.4$ instead of $0.6$, as if the member paid the reimbursed share: $60.60\\div 0.4=151.50$, then $(151.50-29)\\div 6$. The member pays the $60$ percent NOT reimbursed.",
      "$101$ is the full gym charge in dollars, $60.60\\div 0.6$, an intermediate. The question asks for the number of classes, $(101-29)\\div 6=12$."
    ]
  },
  "q:bae514c957ffb218": {
    "options": [
      "Only positive numbers",
      "$x > 0$",
      "All real numbers",
      "Only integers"
    ],
    "explanations": [
      "Positive numbers describe the RANGE of $5^x$ (its outputs are always positive), not its domain. Any real number, including negatives and zero, can be an exponent.",
      "$x>0$ excludes zero and negatives, but $5^0=1$ and $5^{-1}=\\frac{1}{5}$ are both defined. The exponent can be any real number.",
      "An exponential function $b^x$ with $b>0$ is defined for every real exponent: positive, negative, zero, fractional, or irrational. The domain is all real numbers.",
      "Exponents need not be integers: $5^{1/2}=\\sqrt{5}$ and $5^{\\pi}$ are defined. The domain includes all real numbers."
    ]
  },
  "q:d192c1cc03f0e3f8": {
    "options": [
      "$-4$",
      "$-3$",
      "$-2$",
      "$0$"
    ],
    "explanations": [
      "$-4$ comes from flipping the inequality incorrectly when dividing by $-8$, getting $c<-3$. Dividing by a negative does flip the sign, and the correct result is $c>-3$.",
      "$-3$ is the boundary value where the discriminant is zero and the graphs are TANGENT, sharing exactly one point. 'No points in common' requires $c$ strictly greater than $-3$.",
      "Setting $2x^2+8x+c=4x-5$ gives $2x^2+4x+(c+5)=0$. No intersection means a negative discriminant: $16-8(c+5)<0$, so $c>-3$. The least integer greater than $-3$ is $-2$.",
      "$0$ comes from using $a=1$ in the discriminant instead of $a=2$: $16-4(c+5)<0$ gives $c>-1$. The quadratic's leading coefficient is $2$, which gives $c>-3$."
    ]
  },
  "q:ba7ba0dba94b83d7": {
    "options": [
      "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$",
      "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$",
      "$\\frac{\\text{opposite}}{\\text{adjacent}}$",
      "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$"
    ],
    "explanations": [
      "By SOH-CAH-TOA, sine is opposite over hypotenuse: $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$. Since the hypotenuse is the longest side, this ratio is always at most $1$.",
      "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$ is the reciprocal of sine (the cosecant). Sine of an acute angle is never greater than $1$, but this ratio always is.",
      "$\\frac{\\text{opposite}}{\\text{adjacent}}$ is the TANGENT ratio (the TOA in SOH-CAH-TOA), not the sine. Sine compares the opposite side to the hypotenuse.",
      "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$ is the COSINE ratio (the CAH in SOH-CAH-TOA), not the sine. Sine uses the side opposite the angle, not the adjacent one."
    ]
  },
  "q:3c07ac16f8b1ff23": {
    "options": [
      "-3",
      "-1",
      "-9",
      "2"
    ],
    "explanations": [
      "Write $\\frac{1}{8}$ as a power of $2$: since $8=2^3$, $\\frac{1}{8}=\\frac{1}{2^3}=2^{-3}$. Matching exponents in $2^x=2^{-3}$ gives $x=-3$.",
      "$2^{-1}=\\frac{1}{2}$, not $\\frac{1}{8}$. The reciprocal of $8$ needs three factors of $2$ in the denominator, so the exponent is $-3$.",
      "$2^{-9}=\\frac{1}{512}$, far smaller than $\\frac{1}{8}$. This may come from squaring $3$ instead of using it directly; $8=2^3$, so $x=-3$.",
      "$2^2=4$, which is neither $8$ nor $\\frac{1}{8}$. A fraction less than $1$ with base $2$ requires a NEGATIVE exponent."
    ]
  },
  "q:7adbe882a1e7e43c": {
    "options": [
      "$15.0\\%$",
      "$16.6\\%$",
      "$18.0\\%$",
      "$83.4\\%$"
    ],
    "explanations": [
      "$15.0\\%$ matches no correct step; it resembles the monthly rate $1.5\\%$ with the decimal point shifted. Twelve months of compounding at $1.5\\%$ gives about $16.6\\%$.",
      "Each month multiplies the value by $1-0.015=0.985$. Over $12$ months the factor is $(0.985)^{12}\\approx 0.834$, so the value decreases by $1-0.834\\approx 16.6$ percent.",
      "$18.0\\%$ is $12\\times 1.5\\%$, treating the decrease as linear. Because each month's $1.5\\%$ is taken from a smaller value, the compounded annual loss is less than $18\\%$.",
      "$83.4\\%$ is the percent of the value REMAINING after a year, $(0.985)^{12}\\approx 0.834$. The question asks for the percent decrease, its complement, $16.6\\%$."
    ]
  },
  "q:e60329e54a74e9ef": {
    "options": [
      "$0$",
      "$6$",
      "$8$",
      "$12$"
    ],
    "explanations": [
      "$0$ is the LEAST zero. With $n=6$ the polynomial is $x(x-6)(x-12)$, and the question asks for the greatest zero.",
      "$6$ is the value of $n$, and it is also one of the zeros, but not the greatest. The zeros are $0$, $6$, and $12$.",
      "$8$ comes from mis-factoring $x^2-18x+72$ as $(x-8)(x-9)$. That product has constant $72$ but middle term $-17x$; the correct factors are $(x-6)(x-12)$.",
      "Substituting $x=n$: $n^3-3n^3+2n^3+n-6=n-6=0$, so $n=6$. The polynomial becomes $x^3-18x^2+72x=x(x-6)(x-12)$, with zeros $0$, $6$, $12$. The greatest is $12$."
    ]
  },
  "q:8b7f92fa37ad6f2f": {
    "options": [
      "$\\frac{23}{76}$",
      "$\\frac{17}{40}$",
      "$\\frac{23}{40}$",
      "$\\frac{23}{35}$"
    ],
    "explanations": [
      "$\\frac{23}{76}$ divides by all $76$ students. The question asks about boys only, so the denominator is the number of boys, $40$.",
      "$\\frac{17}{40}$ has the right denominator but counts the boys who do NOT like math. The question asks for the fraction who do, $23$.",
      "The question restricts to boys, so use the Boys row: $23$ of the $40$ boys like math, giving $\\frac{23}{40}$.",
      "$\\frac{23}{35}$ divides by the total who like math ($23+12=35$), which answers 'what fraction of math-likers are boys,' the reversed conditional."
    ]
  },
  "q:d774104210c3f409": {
    "options": [
      "6.1",
      "17.9",
      "19.2",
      "37.1"
    ],
    "explanations": [
      "$6.1$ is $15\\tan 22^{\\circ}$, which inverts the ratio. The horizontal distance is the height divided by the tangent, $\\frac{15}{\\tan 22^{\\circ}}\\approx 37.1$.",
      "The horizontal distances are $\\frac{15}{\\tan 22^{\\circ}}\\approx 37.1$ m and $\\frac{15}{\\tan 38^{\\circ}}\\approx 19.2$ m. The boat moved from the farther to the nearer position, a distance of $37.1-19.2\\approx 17.9$ m.",
      "$19.2$ is the boat's distance from the lighthouse at the SECOND sighting, $\\frac{15}{\\tan 38^{\\circ}}$. The question asks how far the boat traveled between the sightings.",
      "$37.1$ is the boat's distance from the lighthouse at the FIRST sighting, $\\frac{15}{\\tan 22^{\\circ}}$, not the distance traveled."
    ]
  },
  "q:b116420df2c72f45": {
    "options": [
      "$x = -5$",
      "$x = 1$",
      "$x = \\frac{-5}{2}$",
      "$x = \\frac{5}{2}$"
    ],
    "explanations": [
      "$x=-5$ is $-b$ with the leading coefficient ignored and the sign mishandled. The axis is $x=-\\frac{b}{2a}=-\\frac{-5}{2(-1)}=-\\frac{5}{2}$.",
      "$x=1$ uses the constant term $c$, which affects only the vertical position of the parabola, not its axis of symmetry.",
      "The axis of symmetry of $y=ax^2+bx+c$ is the vertical line $x=-\\frac{b}{2a}$. With $a=-1$ and $b=-5$: $x=-\\frac{-5}{2(-1)}=\\frac{5}{-2}=-\\frac{5}{2}$.",
      "$x=\\frac{5}{2}$ is a sign error that forgets the leading coefficient $a=-1$ is negative. Computing carefully, $-\\frac{b}{2a}=\\frac{5}{2(-1)}=-\\frac{5}{2}$."
    ]
  },
  "q:01955397eb398ced": {
    "options": [
      "$y \\geq 0$",
      "$y \\geq 2$",
      "All real numbers",
      "$y \\leq 2$"
    ],
    "explanations": [
      "$y\\geq 0$ is the range of $|x-4|$ alone, with the $+2$ forgotten. Adding $2$ to every output raises the minimum from $0$ to $2$.",
      "An absolute value is never negative, so $|x-4|\\geq 0$ with equality at $x=4$. Adding $2$ gives $f(x)\\geq 2$, so the range is $y\\geq 2$ and the minimum output is $f(4)=2$.",
      "All real numbers is the DOMAIN of this function, not its range. The V-shaped graph has a lowest point at $(4,2)$ and never goes below $y=2$.",
      "$y\\leq 2$ would be the range of $-|x-4|+2$, an inverted V with a maximum of $2$. Here the absolute value is added, so $2$ is a minimum, not a maximum."
    ]
  },
  "q:2d142fcb6a0502b8": {
    "options": [
      "48",
      "52.5",
      "52.8",
      "58"
    ],
    "explanations": [
      "The original total is $20(47)=940$. Adding $52$ and $64$ gives $1056$ across $22$ values, so the new mean is $\\frac{1056}{22}=48$.",
      "$52.5$ averages the old mean $47$ with the new values' mean $58$ without weighting. The original group has $20$ values and dominates, so the true mean is only slightly above $47$.",
      "$52.8$ divides the correct new total $1056$ by the OLD count $20$ instead of the new count $22$.",
      "$58$ is the mean of just the two added values, $\\frac{52+64}{2}$. The question asks for the mean of all $22$ values."
    ]
  },
  "q:e956110afa0e2f66": {
    "options": [
      "$-4$",
      "$-3$",
      "$-7$",
      "$3$"
    ],
    "explanations": [
      "$-4$ is $a$ alone. From the zeros $3,-2,3$, the sum is $4=-a$ so $a=-4$, but the question asks for $a+b$, and $b=-3$.",
      "$-3$ is $b$ alone, the sum of pairwise products of the zeros. The question asks for $a+b=-4+(-3)=-7$.",
      "$x^2-x-6=(x-3)(x+2)$, so $3$ and $-2$ are zeros. The product of all three zeros is $-18$, so the third is $r=3$. Then $a=-(3-2+3)=-4$ and $b=3(-2)+3(3)+(-2)(3)=-3$, so $a+b=-7$.",
      "$3$ is the third zero of the cubic, found from $3(-2)r=-18$. It is an intermediate, not $a+b$."
    ]
  },
  "q:213ac2298b6cad5d": {
    "options": [
      "78.12",
      "80.28",
      "78.08",
      "52.2"
    ],
    "explanations": [
      "The recorded total was $25(79.2)=1980$. The entry $85$ was $27$ points too high, so the correct total is $1980-27=1953$ and the mean is $\\frac{1953}{25}=78.12$.",
      "$80.28$ ADDS the $27$-point correction, $\\frac{1980+27}{25}$. The recorded score was too high, so the total must go down.",
      "$78.08$ spreads the $27$-point correction over $24$ values instead of $25$: $79.2-\\frac{27}{24}=78.075$. All $25$ scores remain in the data set.",
      "$52.2$ subtracts the entire $27$-point error from the MEAN, $79.2-27$, as if every score dropped by $27$. Only one score changed, so the mean drops by $\\frac{27}{25}=1.08$."
    ]
  },
  "q:093dcccd05e60cb0": {
    "options": [
      "240,000",
      "300,000",
      "400,000",
      "1,200,000"
    ],
    "explanations": [
      "The shortest path is the perpendicular distance from $(6,8)$ to $4x+3y-24=0$: $\\frac{|4(6)+3(8)-24|}{\\sqrt{4^2+3^2}}=\\frac{24}{5}=4.8$ km. Cost: $4.8\\times 50{,}000=240{,}000$ dollars.",
      "$300{,}000$ measures to the road's $y$-intercept $(0,8)$, a horizontal distance of $6$ km. That is not the shortest path; the perpendicular distance is $4.8$ km.",
      "$400{,}000$ measures to the road's $x$-intercept $(6,0)$, a vertical distance of $8$ km. The perpendicular distance, $4.8$ km, is shorter.",
      "$1{,}200{,}000$ uses the numerator $24$ from the distance formula without dividing by $\\sqrt{4^2+3^2}=5$. The actual distance is $4.8$ km."
    ]
  },
  "q:6fff22ec69145669": {
    "options": [
      "$29, 46, 54$",
      "$28, 45, 53$",
      "$29, 45, 53$",
      "$28, 44, 53$"
    ],
    "explanations": [
      "$29^2+46^2=841+2116=2957$, but $54^2=2916$. The squares do not match, so this is not a right triangle.",
      "$28^2+45^2=784+2025=2809$, and $53^2=2809$. The Pythagorean theorem holds, so these can be the sides of a right triangle.",
      "$29^2+45^2=841+2025=2866$, but $53^2=2809$. Changing the $28$ to $29$ breaks the Pythagorean equality, so this is not a right triangle.",
      "$28^2+44^2=784+1936=2720$, but $53^2=2809$. Changing the $45$ to $44$ breaks the Pythagorean equality, so this is not a right triangle."
    ]
  },
  "q:d6718280fa0c67cc": {
    "options": [
      "$960$",
      "$20$",
      "$1{,}186$",
      "$1{,}700$"
    ],
    "explanations": [
      "Solve $85n+400=2100$: $85n=1700$, so $n=20$ pallets. Each pallet holds $48$ cases, so $20\\times 48=960$ cases were shipped.",
      "$20$ is the number of PALLETS, the value the algebra ends at. The question asks for cases, so multiply by $48$ cases per pallet.",
      "$1{,}186$ ignores the fixed $\\$400$ fee: $2100\\div 85\\approx 24.7$ pallets, then $24.7\\times 48$. The fee must be subtracted first, leaving $1700$ for the pallets.",
      "$1{,}700$ is the variable part of the cost in DOLLARS, $2100-400$, an early intermediate. It is neither pallets nor cases."
    ]
  },
  "q:dd338a6b7214c6ef": {
    "options": [
      "Correct; the rates differ by 7.2 percentage points.",
      "Correct; the rates differ by 6.5 percentage points.",
      "Incorrect; the rates differ by 7.2 percentage points.",
      "Incorrect; the rates differ by 15.5 percentage points."
    ],
    "explanations": [
      "The gap of $7.2$ points is right, but the claim is not: the weekend rate ($49.1\\%$) is HIGHER than the weekday evening rate ($41.9\\%$), so the manager is wrong.",
      "$6.5$ points comes from dividing both counts by the grand total $1300$ ($13.5\\%$ and $20.0\\%$). Each rate should use its own row total, and the claim is also incorrect.",
      "Each buying rate uses its own row total: weekday evening $\\frac{176}{420}\\approx 41.9\\%$, weekend $\\frac{260}{530}\\approx 49.1\\%$. The weekend rate is higher, so the claim is incorrect, by $49.1-41.9=7.2$ points.",
      "$15.5$ points comes from dividing both counts by the Bought column total $541$ ($32.5\\%$ and $48.1\\%$). That answers 'of the buyers, what share came at each time,' not the buying rate."
    ]
  },
  "q:d02f5946548b16ad": {
    "options": [
      "755",
      "1113",
      "808",
      "731"
    ],
    "explanations": [
      "$755$ matches no step in the compound-interest computation. The balance is $1500(1.09)^5\\approx 2308$, so the interest is $2308-1500=808$.",
      "$1113$ matches no step; it is far more than the interest earned. Compounding $\\$1500$ at $9\\%$ for $5$ years yields about $\\$808$ in interest.",
      "The balance after $5$ years is $A=1500(1.09)^5\\approx 1500(1.5386)\\approx 2308$ dollars. The interest earned is the growth, $2308-1500\\approx 808$ dollars.",
      "$731$ matches no step. Simple interest would give $1500(0.09)(5)=675$, and compound interest gives $808$; $731$ is neither."
    ]
  },
  "q:3488cf1474747dad": {
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$9$"
    ],
    "explanations": [
      "$2$ is $\\sqrt{x}$, one of the intermediate values. The question asks for $\\sqrt{x+5}$, which is $1$ more than $\\sqrt{x}$, namely $3$.",
      "Isolate one radical and square: $\\sqrt{x+5}=1+\\sqrt{x}$ gives $x+5=1+2\\sqrt{x}+x$, so $\\sqrt{x}=2$ and $x=4$. Then $\\sqrt{x+5}=\\sqrt{9}=3$; check: $3-2=1$.",
      "$4$ is $x$ itself, the natural end of the solving process. The question asks for $\\sqrt{x+5}=\\sqrt{9}=3$.",
      "$9$ is $x+5$, the radicand, one square root short of the requested quantity. The question asks for $\\sqrt{x+5}=\\sqrt{9}=3$."
    ]
  },
  "q:0a76f8ca4cbeda34": {
    "options": [
      "$30$",
      "$40$",
      "$15$",
      "$20$"
    ],
    "explanations": [
      "With $n$ original members, $\\frac{600}{n}-\\frac{600}{n+5}=10$ gives $n^2+5n-300=0$, so $(n+20)(n-15)=0$ and $n=15$. After $5$ join, $20$ members split $\\$600$: $\\frac{600}{20}=30$ dollars each.",
      "$40$ is the ORIGINAL cost per person, $\\frac{600}{15}$. After $5$ more members join, the cost drops by $\\$10$ to $\\$30$.",
      "$15$ is the original NUMBER of members, a count rather than a dollar amount. The question asks for the new cost per person.",
      "$20$ is the new NUMBER of members, not a cost. Dividing the $\\$600$ among them gives $\\$30$ per person."
    ]
  },
  "q:ffe725a41889ce7d": {
    "options": [
      "$5$",
      "$7$",
      "$11$",
      "$6$"
    ],
    "explanations": [
      "$5$ drops one valid integer, likely the endpoint $k=-5$. The integers from $-5$ to $0$ inclusive number six: $-5,-4,-3,-2,-1,0$.",
      "$7$ includes $k=1$, where the discriminant is zero and the graphs are TANGENT at a single point. Two distinct intersections require $k<1$ strictly.",
      "$11$ is the total number of integers from $-5$ to $5$, ignoring the intersection condition entirely. Only those with $k<1$ work.",
      "Setting $x^2+k=4x-3$ gives $x^2-4x+(k+3)=0$. Two intersections need a positive discriminant: $16-4(k+3)>0$, so $k<1$. The integers in $[-5,5]$ below $1$ are $-5,\\dots,0$: six values."
    ]
  },
  "q:75b6347e6b68b3e8": {
    "options": [
      "$270°$",
      "$180°$",
      "$540°$",
      "$360°$"
    ],
    "explanations": [
      "$270^{\\circ}$ is three right angles, which no triangle's interior angles can total. The sum is always $180^{\\circ}$.",
      "The interior angles of any triangle sum to $180^{\\circ}$, a straight angle. This follows from drawing a line through one vertex parallel to the opposite side.",
      "$540^{\\circ}$ is the interior angle sum of a PENTAGON, $(5-2)\\times 180^{\\circ}$. A triangle has $(3-2)\\times 180^{\\circ}=180^{\\circ}$.",
      "$360^{\\circ}$ is the interior angle sum of a QUADRILATERAL (or the sum of a triangle's exterior angles). A triangle's interior angles total $180^{\\circ}$."
    ]
  },
  "q:1743a3f56e6655c2": {
    "options": [
      "$\\frac{1}{2x}$",
      "$\\frac{1}{x}$",
      "$\\frac{20}{x}$",
      "$\\frac{9}{x^2}$"
    ],
    "explanations": [
      "$\\frac{1}{2x}$ has the right numerator but doubles the denominator. When fractions share a denominator, that denominator is kept, not combined.",
      "Both fractions have the same denominator $x$, so subtract the numerators and keep the denominator: $\\frac{5-4}{x}=\\frac{1}{x}$.",
      "$\\frac{20}{x}$ multiplies the numerators ($5\\times 4$) instead of subtracting them. The expression is a difference, so the numerator is $5-4=1$.",
      "$\\frac{9}{x^2}$ adds the numerators and multiplies the denominators, mixing up two operations. Subtraction with a common denominator gives $\\frac{1}{x}$."
    ]
  },
  "q:3185387c98ff6df7": {
    "options": [
      "$1.18$",
      "$0.18$",
      "$0.82$",
      "$-0.18$"
    ],
    "explanations": [
      "$1.18$ is a GROWTH factor for an $18\\%$ increase. A decrease means the factor is less than $1$: $1-0.18=0.82$.",
      "$0.18$ is the decay RATE as a decimal, the fraction lost each period. The decay factor is the fraction that remains, $1-0.18=0.82$.",
      "A decrease of $18\\%$ leaves $100\\%-18\\%=82\\%$ of the quantity each period, so the decay factor is $1-0.18=0.82$.",
      "A negative factor would flip the sign of the quantity each period, which is not what a percent decrease does. The factor is $1-0.18=0.82$, a positive number less than $1$."
    ]
  },
  "q:3cb9a87ffbc9b133": {
    "options": [
      "$\\frac{\\text{opposite}}{\\text{adjacent}}$",
      "$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$",
      "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$",
      "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$"
    ],
    "explanations": [
      "$\\frac{\\text{opposite}}{\\text{adjacent}}$ is the TANGENT ratio (the TOA in SOH-CAH-TOA), not the cosine. Cosine involves the hypotenuse.",
      "$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$ is the reciprocal of cosine (the secant). Cosine of an acute angle is at most $1$, but this ratio always exceeds $1$.",
      "By SOH-CAH-TOA, cosine is adjacent over hypotenuse: $\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$. Since the hypotenuse is the longest side, this ratio is at most $1$.",
      "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$ is the SINE ratio (the SOH in SOH-CAH-TOA), not the cosine. Cosine uses the side adjacent to the angle."
    ]
  },
  "q:e38fbe52c298b11a": {
    "options": [
      "Nonlinear — y rises, then falls as x increases",
      "Positive linear — as x increases, y also increases",
      "Negative linear — as x increases, y decreases",
      "No association — y does not change with x"
    ],
    "explanations": [
      "The $y$-values never fall: $19,26,31,39,46$ increase at every step, so there is no rise-then-fall pattern.",
      "As $x$ goes from $1$ to $5$, $y$ rises steadily from $19$ to $46$, by roughly $7$ each step ($7,5,8,7$). Consistent increases of about the same size indicate a positive linear association.",
      "A negative association would have $y$ DECREASING as $x$ increases. Here $y$ increases at every step.",
      "$y$ clearly changes with $x$, rising from $19$ to $46$. There is a strong association, not none."
    ]
  },
  "q:63c124f61200d5d8": {
    "options": [
      "$x = 9$ only",
      "No solution",
      "$x = 81$ or $x = -81$",
      "$x = 9$ or $x = -9$"
    ],
    "explanations": [
      "$x=9$ is one solution, but $|-9|=9$ as well. Both values that are $9$ units from zero must be included.",
      "There are solutions: $|9|=9$ and $|-9|=9$. An absolute-value equation has no solution only when the right side is negative.",
      "$x=\\pm 81$ squares $9$ instead of undoing the absolute value. $|81|=81$, not $9$. The solutions are $\\pm 9$.",
      "$|x|=9$ means $x$ is $9$ units from zero on the number line, which happens at $x=9$ and at $x=-9$."
    ]
  },
  "q:95c1f14ccc7e5f99": {
    "options": [
      "Upward",
      "To the right",
      "To the left",
      "Downward"
    ],
    "explanations": [
      "Upward would require a POSITIVE leading coefficient. Here the coefficient of $x^2$ is $-1$, so the parabola opens downward.",
      "A parabola of the form $y=ax^2+bx+c$ opens up or down, never sideways. Opening to the right describes an equation like $x=y^2$.",
      "Opening to the left describes a parabola of the form $x=-y^2+\\dots$. An equation solved for $y$ in terms of $x^2$ opens vertically.",
      "The leading coefficient is $a=-1$, which is negative, so the parabola opens downward and its vertex is a maximum. The other coefficients do not affect the direction."
    ]
  },
  "q:07715e20cfb527ed": {
    "options": [
      "$\\text{actual} - \\text{predicted}$",
      "$\\text{predicted} - \\text{actual}$",
      "$\\text{actual} \\times \\text{predicted}$",
      "$\\frac{\\text{actual}}{\\text{predicted}}$"
    ],
    "explanations": [
      "A residual is the observed (actual) value minus the value predicted by the model. A positive residual means the point lies above the line; a negative one means it lies below.",
      "$\\text{predicted}-\\text{actual}$ has the right magnitude but the wrong sign. By convention the residual is actual minus predicted, so points above the line have positive residuals.",
      "Multiplying actual by predicted gives no meaningful measure of error. A residual measures the vertical gap between a data point and the line.",
      "Dividing actual by predicted gives a ratio, not a residual. The residual is a difference, $\\text{actual}-\\text{predicted}$."
    ]
  },
  "q:1dad5a3ab9a25087": {
    "options": [
      "3",
      "-3",
      "-1",
      "-2"
    ],
    "explanations": [
      "Write $8$ as a power of $2$: $2\\cdot 2\\cdot 2=8$, so $8=2^3$. Matching exponents in $2^x=2^3$ gives $x=3$.",
      "$2^{-3}=\\frac{1}{8}$, not $8$. A negative exponent produces a reciprocal, and $8$ is greater than $1$, so the exponent must be positive.",
      "$2^{-1}=\\frac{1}{2}$, not $8$. A negative exponent gives a reciprocal less than $1$; since $8>1$, the exponent must be positive, and $2^3=8$.",
      "$2^{-2}=\\frac{1}{4}$, not $8$. A negative exponent produces a fraction less than $1$; reaching $8$ requires the positive exponent $3$, since $2^3=8$."
    ]
  },
  "q:3bb9b57a78182502": {
    "options": [
      "Quadrinomial",
      "Binomial",
      "Monomial",
      "Trinomial"
    ],
    "explanations": [
      "A quadrinomial has four terms. $5x^2+3x-7$ has only three terms, $5x^2$, $3x$, and $-7$, so it does not qualify.",
      "A binomial has two terms, like $5x^2-7$. This expression has three terms, so it is a trinomial.",
      "A monomial is a single term, like $5x^2$. This expression has three terms separated by $+$ and $-$ signs.",
      "The expression has three terms, $5x^2$, $3x$, and $-7$, so it is a trinomial. (Its degree is $2$, so it is also a quadratic trinomial.)"
    ]
  }
}

export default ENTRIES
