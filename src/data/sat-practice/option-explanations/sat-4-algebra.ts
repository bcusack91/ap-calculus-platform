import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:ecfd1da1fef00072": {
    "options": [
      "$h = 13$",
      "$h \\ge 13$",
      "$h > 13$",
      "$h \\le 13$"
    ],
    "explanations": [
      "An equation says the worker earns exactly $\\$247$, but \"at most\" allows any earnings up to that amount, so the hours can be fewer than $13$. The situation needs an inequality, not an equals sign.",
      "$h \\ge 13$ points the wrong way: it says the worker must work at least $13$ hours, which would push earnings above $\\$247$. \"At most\" caps the total, so the hours are bounded above, not below.",
      "$h > 13$ both reverses the direction and excludes $13$ itself. Earning at most $\\$247$ means $19h \\le 247$, which bounds $h$ from above and allows exactly $13$ hours.",
      "\"At most $\\$247$\" means total pay is less than or equal to $247$, so $19h \\le 247$. Dividing by the positive number $19$ keeps the direction: $h \\le 13$."
    ]
  },
  "q:0da10166c3da0957": {
    "options": [
      "5",
      "8",
      "10",
      "4"
    ],
    "explanations": [
      "Adults plus children make up the total: $22 + c = 27$, so $c = 27 - 22 = 5$ children.",
      "$8$ is not $27 - 22$; it would mean $22 + 8 = 30$ people in total, three more than the $27$ at the concert. Eight children is too many.",
      "$10$ would give $22 + 10 = 32$ people, five more than the $27$ stated. It does not come from subtracting the adults from the total.",
      "$4$ is one short: $22 + 4 = 26$, not $27$. It is an off-by-one subtraction slip; the count must be exactly $27 - 22 = 5$."
    ]
  },
  "q:e297525c201072a5": {
    "options": [
      "$9$",
      "$20$",
      "$41$",
      "$81$"
    ],
    "explanations": [
      "$9$ is $x + y = 4 + 5$, the sum of the variables, not the sum of their squares. The question asks for $x^2 + y^2$, so each value must be squared before adding.",
      "$20$ is the product $xy = 4 \\cdot 5$, a different combination of the two solutions. Squaring each value and adding gives $16 + 25$, not $20$.",
      "From $y = 17 - 3x$, substitute: $x - 2(17 - 3x) = -6$, so $7x = 28$, $x = 4$, and $y = 5$. Then $x^2 + y^2 = 16 + 25 = 41$.",
      "$81$ is $(x + y)^2 = 9^2$, which is not $x^2 + y^2$ because expanding it adds the extra term $2xy = 40$. The square of a sum and the sum of squares are different quantities."
    ]
  },
  "q:1b073601b61ba86e": {
    "options": [
      "$29$ centimeters",
      "$44$ centimeters",
      "$73$ centimeters",
      "$88$ centimeters"
    ],
    "explanations": [
      "With first piece $f$, the pieces are $f$, $2f$, and $2f - 15$; their sum $5f - 15 = 205$ gives $f = 44$. The third piece is $88 - 15 = 73$, and $73 - 44 = 29$ centimeters longer than the first.",
      "$44$ centimeters is the length of the first piece itself, the value of $f$ after solving. The question asks how much longer the third piece is than the first, which requires a subtraction.",
      "$73$ centimeters is the length of the third piece ($88 - 15$). It is an intermediate value; the requested difference is $73 - 44 = 29$.",
      "$88$ centimeters is the second piece, $2f$. It is not one of the two pieces being compared, and the question asks for a difference, not a piece length."
    ]
  },
  "q:83253808305b7ca3": {
    "options": [
      "$4$",
      "$5$",
      "$9$",
      "$63$"
    ],
    "explanations": [
      "$4$ is the value of $x$ alone (check: $2(4) + 5(5) = 33$). The question asks for the sum $x + y$, so stopping at one variable is incomplete.",
      "$5$ is $y$ alone. Both variables must be found, or better, the equations added to get $7(x + y) = 63$ directly.",
      "Adding the equations gives $7x + 7y = 63$, so $x + y = 63 \\div 7 = 9$. Solving fully confirms $x = 4$ and $y = 5$.",
      "$63$ is the right-hand side after adding the two equations, $7x + 7y = 63$, before dividing by the common factor $7$. Leaving off that last step gives $7(x + y)$, not $x + y$."
    ]
  },
  "q:9b6f1ace79a88549": {
    "options": [
      "$\\$131.25$",
      "$\\$336$",
      "$\\$525$",
      "$\\$2{,}100$"
    ],
    "explanations": [
      "$\\$131.25$ multiplies the blueprint area $3.5 \\times 6 = 21$ square inches by $\\$6.25$ without ever converting to feet. The scale must be applied before pricing.",
      "$\\$336$ is the room's area in square feet ($14 \\times 24$), an intermediate value. It still has to be multiplied by the $\\$6.25$ per square foot price.",
      "$\\$525$ comes from scaling the $21$ square inch area by $4$ instead of $4^2 = 16$, giving $84$ square feet. Area scales by the square of the linear scale factor.",
      "Convert each dimension first: $3.5 \\times 4 = 14$ feet and $6 \\times 4 = 24$ feet. The area is $14 \\times 24 = 336$ square feet, and $336 \\times 6.25 = \\$2{,}100$."
    ]
  },
  "q:880a4ec428f89dbd": {
    "options": [
      "$y = -4x + 10$",
      "$y < -4x + 10$",
      "$y \\le -4x + 10$",
      "$y > -4x + 10$"
    ],
    "explanations": [
      "$y = -4x + 10$ describes only the boundary line itself, not the region above it. A region of the plane needs an inequality.",
      "$y < -4x + 10$ describes the region below the line, where $y$-values are smaller than the line's. Above the line means larger $y$-values, so the direction is reversed.",
      "$y \\le -4x + 10$ shades below the line and includes the line. Points above have $y$ greater than $-4x + 10$, so both the direction and the inclusion are wrong.",
      "A point lies above a line when its $y$-coordinate exceeds the line's $y$-value at that $x$, so the region above $y = -4x + 10$ is $y > -4x + 10$. The negative slope does not change this."
    ]
  },
  "q:956c9ab01547ed0c": {
    "options": [
      "$\\$0.60$",
      "$\\$1.80$",
      "$\\$4.20$",
      "$\\$6.60$"
    ],
    "explanations": [
      "$\\$0.60$ is the price of one pen, found from $21p = 12.60$. It is an intermediate value, not the cost of $2$ notebooks and $5$ pens.",
      "$\\$1.80$ is the price of one notebook ($3 \\times 0.60$). The question asks for the total of $2$ notebooks and $5$ pens, so this stops too early.",
      "$\\$4.20$ is $12.60 \\div 3$, from guessing that fewer items means one-third the cost. The items have different prices, so the total must be built from unit prices: $2(1.80) + 5(0.60)$.",
      "Let a pen cost $p$ and a notebook $3p$: $4(3p) + 9p = 21p = 12.60$, so $p = 0.60$ and a notebook is $\\$1.80$. Then $2(1.80) + 5(0.60) = 3.60 + 3.00 = \\$6.60$."
    ]
  },
  "q:943a44cbfaa980d3": {
    "options": [
      "$\\$48$",
      "$\\$12$",
      "$\\$53$",
      "$\\$40$"
    ],
    "explanations": [
      "The discount is $20\\%$ of $60$, which is $0.20 \\times 60 = \\$12$. Subtracting from the original price gives $60 - 12 = \\$48$.",
      "$\\$12$ is the discount amount, $20\\%$ of $\\$60$, not the sale price. The sale price is what remains after subtracting that discount from $\\$60$.",
      "$\\$53$ would mean a discount of only $\\$7$, which is not $20\\%$ of $\\$60$. The discount is $0.20 \\times 60 = 12$ dollars, so the shirt costs $\\$48$.",
      "$\\$40$ subtracts $\\$20$, treating \"$20\\%$ off\" as \"$\\$20$ off.\" A percent discount is a fraction of the price, and $20\\%$ of $60$ is $12$, not $20$."
    ]
  },
  "q:f452fb5b2751db6a": {
    "options": [
      "2",
      "-2",
      "3",
      "-6"
    ],
    "explanations": [
      "In slope-intercept form $y = mx + b$, the coefficient of $x$ is the slope. Here that coefficient is $m = 2$.",
      "$-2$ flips the sign of the coefficient. The $x$-term is $+2x$, so the slope is positive $2$; only the constant term, $-6$, is negative.",
      "$3$ does not appear anywhere in the equation. The slope is the coefficient of $x$, which is $2$, not a value read from somewhere else.",
      "$-6$ is the $y$-intercept $b$, the constant term, not the slope. The slope is the number multiplying $x$."
    ]
  },
  "q:3267a4cda929ffa0": {
    "options": [
      "$(4, 18)$",
      "$(5, 9)$",
      "$(7, 8)$",
      "$(9, 6)$"
    ],
    "explanations": [
      "$(4, 18)$ gives $22$ items, meeting the count, but costs $4(4) + 18(1.50) = 16 + 27 = \\$43$, which exceeds the $\\$40$ budget.",
      "$(5, 9)$ costs $20 + 13.50 = \\$33.50$, within budget, but totals only $14$ items, one short of the required $15$.",
      "$(7, 8)$ costs $7(4) + 8(1.50) = 28 + 12 = \\$40$, satisfying \"at most $\\$40$,\" and $7 + 8 = 15$ items meets \"at least $15$.\" Both conditions hold exactly at their limits.",
      "$(9, 6)$ has exactly $15$ items but costs $36 + 9 = \\$45$, over budget. Checking only the item count misses the cost constraint."
    ]
  },
  "q:674d87220e125764": {
    "options": [
      "$8$",
      "$12$",
      "$18$",
      "$26$"
    ],
    "explanations": [
      "With $a + b = 44$ cartons and $12a + 18b = 636$ eggs, substitute $a = 44 - b$: $528 + 6b = 636$, so $b = 18$ and $a = 26$. The difference is $26 - 18 = 8$ cartons.",
      "$12$ is the difference in eggs, $18(18) - 12(26) = 324 - 312$, or simply a carton size. It is not the difference in carton counts, which is $26 - 18 = 8$.",
      "$18$ is the number of $18$-egg cartons sold, an intermediate value. The question asks how many more $12$-egg cartons were sold than $18$-egg cartons.",
      "$26$ is the number of $12$-egg cartons sold, not the difference between the two counts. Subtracting the $18$ larger cartons gives $8$."
    ]
  },
  "q:efa98bd9a52df424": {
    "options": [
      "$(1, -6)$",
      "$(10, 18)$",
      "$(12, 20)$",
      "$(2, 0)$"
    ],
    "explanations": [
      "$(1, -6)$ satisfies $-6 > 3 - 12 = -9$ but fails the first inequality: $5(1) - 2(-6) = 5 + 12 = 17$, which is not $\\le 14$. The double negative is the trap.",
      "$(10, 18)$ gives $50 - 36 = 14 \\le 14$, which holds, but $18 > 3(10) - 12 = 18$ is false because the inequality is strict. A point on a dashed boundary is not a solution.",
      "$(12, 20)$ fails both inequalities: $60 - 40 = 20$ is not $\\le 14$, and $20 > 36 - 12 = 24$ is false.",
      "For $(2, 0)$: $5(2) - 2(0) = 10 \\le 14$ holds, and $0 > 3(2) - 12 = -6$ holds. Both inequalities are satisfied, so the point is in the solution set."
    ]
  },
  "q:0d5a3a1f63ec9b32": {
    "options": [
      "$34$",
      "$33$",
      "$23$",
      "$22$"
    ],
    "explanations": [
      "$34$ ignores the required chairs and then rounds $1500 \\div 45 = 33.3$ up. The $\\$480$ for chairs was never subtracted, and rounding a maximum up breaks the budget.",
      "$33$ is $1500 \\div 45$ rounded down, which forgets the $40$ required chairs costing $\\$480$. With the chairs included, $33$ tables would total $\\$1{,}965$.",
      "$23$ rounds $1020 \\div 45 = 22.67$ up. Twenty-three tables plus the chairs cost $1035 + 480 = \\$1{,}515$, over the $\\$1{,}500$ limit; a maximum must round down.",
      "Chairs take at least $40(12) = \\$480$, leaving at most $\\$1{,}020$ for tables. $1020 \\div 45 = 22.67$, so she can buy $22$ tables ($\\$990$), for a total of $\\$1{,}470$."
    ]
  },
  "q:d85993c502ee55fd": {
    "options": [
      "$-84$",
      "$3$",
      "$36$",
      "$60$"
    ],
    "explanations": [
      "$-84$ is $12(-7)$, using the first line's $y$-intercept in place of $m$. Parallel lines are determined by equal slopes, not by intercepts.",
      "$3$ is the value of $m$ itself. The question asks for $12m$, so stopping here leaves off the final multiplication.",
      "Two distinct lines in slope-intercept form never meet exactly when their slopes are equal and their intercepts differ, so $m = 3$ (and $-7 \\ne 5$). Then $12m = 36$.",
      "$60$ is $12 \\cdot 5$, using the second line's intercept $5$ instead of the slope. No solution means parallel lines, which is a condition on slopes."
    ]
  },
  "q:32d8c289399e2dc7": {
    "options": [
      "$120$",
      "$140$",
      "$180$",
      "$320$"
    ],
    "explanations": [
      "$120$ is the total saline in the mixture, $0.24(500)$, a quantity of salt rather than a volume of either solution. It is a step in the setup, not the requested difference.",
      "With $x + y = 500$ and $0.15x + 0.40y = 0.24(500) = 120$, substituting $x = 500 - y$ gives $75 + 0.25y = 120$, so $y = 180$ and $x = 320$. The difference is $320 - 180 = 140$.",
      "$180$ is the volume of the $40\\%$ solution alone, an intermediate value. The question asks how much more $15\\%$ solution was used, so subtract: $320 - 180$.",
      "$320$ is the volume of the $15\\%$ solution alone. It must be compared with the $180$ milliliters of $40\\%$ solution to get the difference of $140$."
    ]
  },
  "q:ad1cc23289776338": {
    "options": [
      "$2$",
      "$3$",
      "$5$",
      "$4$"
    ],
    "explanations": [
      "$2$ shirts cost $29.50 + 6.95 = \\$36.45$, well under $\\$60$, so more shirts are affordable. Stopping here rounds down far too much.",
      "$3$ comes from assuming shipping is always charged: $14.75n + 6.95 \\le 60$ gives $n \\le 3.59$. But $4$ shirts total $\\$59.00$, which crosses the $\\$50$ free-shipping threshold and fits the budget.",
      "$5$ shirts cost $5(14.75) = \\$73.75$, which exceeds the $\\$60$ budget even with free shipping.",
      "Four shirts cost $4(14.75) = \\$59.00$, which is at least $\\$50$, so shipping is free and the total $\\$59.00$ fits the $\\$60$ budget. Five shirts would cost $\\$73.75$, too much."
    ]
  },
  "q:49a47f3faef847ce": {
    "options": [
      "$50$",
      "$43$",
      "$42$",
      "$32$"
    ],
    "explanations": [
      "$50$ is the total crate limit for the truck. It does not subtract the $18$ large crates already on board, so it is not the number of small crates that can be added.",
      "$43$ rounds the weight quotient $1010 \\div 24 = 42.08$ up, which alone would exceed the weight limit, and it also ignores the crate-count limit of $50 - 18 = 32$.",
      "$42$ is the maximum allowed by weight alone ($1010 \\div 24 = 42.08$ rounded down). But $18 + 42 = 60$ crates exceeds the $50$-crate limit, so the count constraint is the binding one.",
      "Large crates weigh $18(55) = 990$ pounds, so weight alone would permit $42$ small crates, but the count limit allows only $50 - 18 = 32$ more crates. Both must hold, so the answer is $32$."
    ]
  },
  "q:13cf41d054c940ab": {
    "options": [
      "$\\$45$",
      "$\\$91$",
      "$\\$181$",
      "$\\$362$"
    ],
    "explanations": [
      "$\\$45$ is the cost for one week ($400$ miles, about $11.8$ gallons). The question asks about $4$ weeks, so this omits the factor of $4$.",
      "$\\$91$ counts only one direction of the commute, $40$ miles per day, giving $800$ miles over four weeks. The round trip is $80$ miles each day.",
      "Round trip $80$ miles $\\times 5$ days $\\times 4$ weeks $= 1{,}600$ miles. Gallons: $1600 \\div 34 \\approx 47.06$; cost: $47.06 \\times 3.85 \\approx \\$181$.",
      "$\\$362$ doubles the round trip a second time, using $3{,}200$ miles. The $80$-mile daily figure already includes both directions."
    ]
  },
  "q:35296d7659cb4085": {
    "options": [
      "$23$",
      "$24$",
      "$30$",
      "$34$"
    ],
    "explanations": [
      "Type-A boxes weigh $9(55) = 495$ pounds, leaving $2400 - 495 = 1905$ pounds. $1905 \\div 80 = 23.8$, so $23$ type-B boxes fit ($1840$ pounds); $24$ would exceed the limit.",
      "$24$ rounds $23.8$ up. Twenty-four type-B boxes weigh $1920$ pounds, and $1920 + 495 = 2415$ exceeds $2{,}400$. A capacity question must round down.",
      "$30$ is $2400 \\div 80$, ignoring the $9$ type-A boxes already in the elevator. Their $495$ pounds must be subtracted first.",
      "$34$ divides the remaining $1905$ pounds by $55$, the type-A weight, instead of by $80$. The question asks about type-B boxes."
    ]
  },
  "q:fb0e55a568fd997b": {
    "options": [
      "No; it fails only the second inequality",
      "No; it fails both of the inequalities",
      "Yes; it satisfies both inequalities",
      "No; it fails only the first inequality"
    ],
    "explanations": [
      "The second inequality actually holds: $2(3) + 2 = 8 \\le 9$. It is the first inequality, $3 + 2 = 5 \\le 3$, that fails.",
      "Only one inequality fails. $x + y = 5$ is not $\\le 3$, but $2x + y = 8$ is $\\le 9$, so the point does not fail both.",
      "The point does not satisfy both. $3 + 2 = 5$ is greater than $3$, so the first inequality fails, and a point must satisfy every inequality to be in the solution set.",
      "Substitute $(3, 2)$: $3 + 2 = 5 > 3$, so the first inequality fails; $2(3) + 2 = 8 \\le 9$, so the second holds. Failing one is enough to exclude the point."
    ]
  },
  "q:7f93fa3687bc9506": {
    "options": [
      "It flips direction",
      "It stays the same",
      "It becomes an equals sign",
      "It disappears"
    ],
    "explanations": [
      "Subtracting $1$ gives $-6x \\le 18$; dividing by $-6$ reverses the inequality: $x \\ge -3$. Multiplying or dividing by a negative number always flips the direction.",
      "Keeping the sign unchanged gives $x \\le -3$, which is wrong: test $x = 0$, where $-6(0) + 1 = 1 \\le 19$ is true, yet $0 \\le -3$ is false. The direction must reverse.",
      "An inequality never becomes an equation through division. The solution is a range of values, $x \\ge -3$, not a single number.",
      "The inequality sign does not vanish; the relationship between the two sides still exists, just reversed. Dividing $-6x \\le 18$ by $-6$ yields $x \\ge -3$."
    ]
  },
  "q:0f92f2a777c1d0d8": {
    "options": [
      "15",
      "21",
      "12",
      "17"
    ],
    "explanations": [
      "$15$ would make the right side $\\frac{12}{15} = 0.8$, but the left side $\\frac{4}{4}$ equals $1$. The two fractions would not be equal.",
      "$21$ gives $\\frac{12}{21} \\approx 0.57$, which does not equal $\\frac{4}{4} = 1$. Cross-multiplying gives $4x = 48$, not $84$.",
      "Since $\\frac{4}{4} = 1$, the right side must also equal $1$, so $x = 12$. Cross-multiplying confirms it: $4x = 48$, $x = 12$.",
      "$17$ gives $\\frac{12}{17} \\approx 0.71$, not $1$. Substituting it back shows the proportion is not satisfied; the denominator must equal the numerator $12$."
    ]
  },
  "q:6bd025740169c94a": {
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "explanations": [
      "$3$ fails the check: if $x = 3$ then $y = 12$ and $x + y = 15$, not $10$.",
      "$5$ comes from splitting $10$ in half, as if $x$ and $y$ were equal. Check: $x = 5$ gives $y = 20$ and $x + y = 25 \\ne 10$.",
      "Substitute $y = 4x$ into $x + y = 10$: $x + 4x = 5x = 10$, so $x = 2$ (and $y = 8$; check $2 + 8 = 10$).",
      "$6$ fails: $y = 24$ and $x + y = 30$, not $10$. Note that $x = 6$ with $y = 4$ would satisfy the sum but violate $y = 4x$."
    ]
  },
  "q:0aea406961f7218e": {
    "options": [
      "2",
      "-20",
      "-9",
      "-2"
    ],
    "explanations": [
      "$2$ is positive, but a number that divides by positive $3$ to give $-3$ must be negative. Check: $\\frac{2}{3} \\ne -3$.",
      "$-20$ does not satisfy the equation: $\\frac{-20}{3} \\approx -6.67$, not $-3$. The solution multiplies $-3$ by $3$, giving $-9$.",
      "Multiply both sides by $3$ to undo the division: $x = -3 \\times 3 = -9$. Check: $\\frac{-9}{3} = -3$.",
      "$-2$ comes from treating the $3$ as something to add or subtract rather than multiply. Check: $\\frac{-2}{3} \\ne -3$."
    ]
  },
  "q:f7aa39131bffe001": {
    "options": [
      "Shade below the line $y = 3x - 2$",
      "Shade on and below the line $y = 3x - 2$",
      "Shade to the right of the line $y = 3x - 2$",
      "Shade above the line $y = 3x - 2$"
    ],
    "explanations": [
      "For $y < 3x - 2$, solutions have $y$-values smaller than the line's, which are the points below the line. The strict inequality means the dashed line itself is excluded.",
      "\"On and below\" would be correct for $y \\le 3x - 2$. With a strict $<$, points on the line are not solutions, which is why the line is drawn dashed.",
      "Shading left or right describes inequalities solved for $x$, like $x > 3$. This inequality is solved for $y$, so the shading is above or below the line.",
      "Shading above corresponds to $y > 3x - 2$. The given inequality has $y$ less than the expression, so the region is below."
    ]
  },
  "q:33b8220a7937b698": {
    "options": [
      "5",
      "-1",
      "3",
      "-3"
    ],
    "explanations": [
      "$5$ does not satisfy the system: it would require $3y = -17$ from the first equation and $3y = -13$ from the second, which is impossible.",
      "$-1$ is a sign slip. Adding the equations gives $2x = 6$, so $x$ is positive $3$; $-1$ may come from mishandling $-12 + 18$.",
      "Adding the two equations eliminates $y$: $2x = -12 + 18 = 6$, so $x = 3$. (Then $3y = -15$, so $y = -5$.)",
      "$-3$ flips the sign of the correct answer, perhaps from computing $-12 - 18$ or $12 - 18$. Adding $-12$ and $18$ gives $+6$, so $x = 3$."
    ]
  },
  "q:1576bcac79315b00": {
    "options": [
      "$138$",
      "$139$",
      "$150$",
      "$223$"
    ],
    "explanations": [
      "$138$ rounds $138.9$ down. That gives $138(18) = \\$2{,}484$ from adults, which with $\\$1{,}500$ from students totals $\\$3{,}984$, short of the $\\$4{,}000$ goal.",
      "Students bring in $150(10) = \\$1{,}500$, so adults must supply at least $\\$2{,}500$: $18a \\ge 2500$ gives $a \\ge 138.9$, so $139$ adults. Attendance of $289$ is within the $300$ limit.",
      "$150$ is $300 - 150$, the largest number of adults the hall can hold alongside $150$ students, not the smallest number needed to reach $\\$4{,}000$.",
      "$223$ ignores the student revenue, solving $18a \\ge 4000$. It would also put $373$ people in a hall that holds $300$."
    ]
  },
  "q:cfa8628a18d6b00a": {
    "options": [
      "$-3$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "explanations": [
      "$-3$ comes from a sign error when moving $15$ across in $9 \\ge -2k + 15$. Check: $(-3, 9)$ gives $9 \\le 4(-3) + 3 = -9$, which is false.",
      "$2$ satisfies only the first inequality ($9 \\le 11$). In the second, $9 \\ge -4 + 15 = 11$ is false, so $k = 2$ is not a solution.",
      "From $9 \\le 4k + 3$, $k \\ge 1.5$; from $9 \\ge -2k + 15$, $2k \\ge 6$ so $k \\ge 3$. Both must hold, so the least integer is $3$.",
      "$6$ stops at $2k \\ge 6$ without dividing by $2$. Although $k = 6$ is a solution, it is not the least one; $k = 3$ also works."
    ]
  },
  "q:93bbbda129e292a7": {
    "options": [
      "$17$",
      "$20$",
      "$24$",
      "$19$"
    ],
    "explanations": [
      "$17$ is the number of additional pounds beyond the first $2$, found from $w - 2 \\le 17.2$. The package weight is $17 + 2 = 19$ pounds.",
      "$20$ rounds $19.2$ up. A $20$-pound package costs $8.50 + 1.25(18) = \\$31.00$, over the $\\$30$ limit.",
      "$24$ is $30 \\div 1.25$, ignoring the $\\$8.50$ base charge and the $2$ pounds it already covers.",
      "The cost is $8.50 + 1.25(w - 2) \\le 30$, so $w - 2 \\le 17.2$ and $w \\le 19.2$. The greatest whole weight is $19$ pounds, costing $\\$29.75$."
    ]
  },
  "q:5529fa6c16d65df7": {
    "options": [
      "3",
      "-1",
      "9",
      "2"
    ],
    "explanations": [
      "The intersection point is the shared solution $x = 2$, $y = 1$, so $x + y = 2 + 1 = 3$.",
      "$-1$ is $y - x = 1 - 2$, a difference rather than the requested sum of the coordinates.",
      "$9$ is $(x + y)^2 = 3^2$, squaring the sum. The question asks only for $x + y$, which is $3$.",
      "$2$ is the $x$-coordinate alone. The sum must also include the $y$-coordinate $1$, giving $3$."
    ]
  },
  "q:78c2fa79d9cf1d6f": {
    "options": [
      "2",
      "5",
      "6",
      "1"
    ],
    "explanations": [
      "Driving toward each other, the cars close the gap at $58 + 53 = 111$ mph combined. Time $= 222 \\div 111 = 2$ hours.",
      "$5$ is roughly $222 \\div 53 \\approx 4.2$ rounded up, as if only the slower car were moving. Both cars reduce the distance, so their speeds add.",
      "$6$ does not fit: in $6$ hours the cars would together cover $111 \\times 6 = 666$ miles, three times the starting distance.",
      "$1$ hour covers only $111$ miles combined, half the $222$-mile gap. The cars still have $111$ miles between them after one hour."
    ]
  },
  "q:0b15c5dd2daacf8d": {
    "options": [
      "$150$",
      "$120$",
      "$255$",
      "$270$"
    ],
    "explanations": [
      "$150$ is the mileage included in the base price. The bill exceeded $\\$39$, so the customer drove beyond $150$ miles.",
      "$120$ is the number of miles beyond the $150$ included, from $34.80 \\div 0.29$. The total distance driven adds the included miles: $150 + 120 = 270$.",
      "$255$ is about $73.80 \\div 0.29$, treating the whole bill as mileage charges and ignoring the $\\$39$ base fee.",
      "The mileage charge is $73.80 - 39 = \\$34.80$, which is $34.80 \\div 0.29 = 120$ miles over the allowance. Total miles $= 150 + 120 = 270$."
    ]
  },
  "q:e4053be10a551c19": {
    "options": [
      "$7$",
      "$8$",
      "$9$",
      "$11$"
    ],
    "explanations": [
      "$7$ is $12 - 5$, the hours that satisfy only the minimum-hours condition. Earnings would be $75 + 77 = \\$152$, below the $\\$170$ goal.",
      "$8$ rounds $8.64$ down. Eight hours at $\\$11$ yields $\\$88$, for a total of $\\$163$, which is short of $\\$170$.",
      "Job A earns $5(15) = \\$75$, so Job B must earn at least $\\$95$: $11b \\ge 95$ gives $b \\ge 8.64$, so $9$ hours. Total hours $14$ satisfy both the $12$ minimum and the $16$ maximum.",
      "$11$ is $16 - 5$, the most hours allowed at Job B, not the least needed. It satisfies the conditions but is not the minimum."
    ]
  },
  "q:e729cb8cced492c1": {
    "options": [
      "2",
      "7",
      "1",
      "-7"
    ],
    "explanations": [
      "$2$ is $y$ alone (solving fully gives $x = -1$, $y = 2$). The question asks for the sum $x + y$, which adding the equations gives directly: $3(x + y) = 3$.",
      "$7$ does not fit: adding the equations gives $3x + 3y = 3$, so $x + y = 1$. Checking $x = -1$, $y = 2$ confirms a sum of $1$, not $7$.",
      "Adding the equations: $3x + 3y = 3$, so $x + y = 1$. (Individually, $x = -1$ and $y = 2$.)",
      "$-7$ is a sign-flipped miss; solving gives $x = -1$ and $y = 2$, whose sum is $1$, not $-7$."
    ]
  },
  "q:0b87c8d76c6488d5": {
    "options": [
      "19",
      "21",
      "16",
      "26"
    ],
    "explanations": [
      "$19$ is the smaller number ($40 - 21$). The question asks for the larger of the two numbers.",
      "With $a + b = 40$ and $a - b = 2$, adding gives $2a = 42$, so the larger number is $a = 21$ (and $b = 19$).",
      "$16$ pairs with $24$ to sum to $40$, but their difference is $8$, not $2$, and $16$ would be the smaller one anyway.",
      "$26$ pairs with $14$ to sum to $40$, but their difference is $12$, not $2$. Only $21$ and $19$ satisfy both conditions."
    ]
  },
  "q:2938e7f720f00ec2": {
    "options": [
      "$13$",
      "$14$",
      "$17$",
      "$12$"
    ],
    "explanations": [
      "After the binder, $75 - 18.50 = \\$56.50$ remains. $56.50 \\div 4.25 = 13.29$, so she can buy $13$ notebooks ($\\$55.25$), for a total of $\\$73.75$.",
      "$14$ rounds $13.29$ up. Fourteen notebooks cost $\\$59.50$, and with the binder the total is $\\$78$, over budget.",
      "$17$ is $75 \\div 4.25 \\approx 17.6$ rounded down, forgetting the required $\\$18.50$ binder.",
      "$12$ is affordable but not the greatest possible: $13$ notebooks also fit, since $18.50 + 13(4.25) = 73.75 \\le 75$."
    ]
  },
  "q:3d0b6806184b3a45": {
    "options": [
      "3",
      "-7",
      "4",
      "-2"
    ],
    "explanations": [
      "$3$ fails the check: $2(3) - 7 + 4(3) = 11$, not $-19$. It may come from a sign slip when moving the $-7$.",
      "$-7$ is the constant term in the equation, not the solution. Substituting gives $6(-7) - 7 = -49 \\ne -19$.",
      "$4$ gives $6(4) - 7 = 17$, not $-19$; a sign error on the $-12$ would produce a positive result. The correct quotient is $-12 \\div 6 = -2$.",
      "Combine like terms: $6x - 7 = -19$. Add $7$: $6x = -12$. Divide: $x = -2$. Check: $-4 - 7 - 8 = -19$."
    ]
  },
  "q:2ca756b072a4e33d": {
    "options": [
      "The slope is undefined, so the line is perfectly vertical",
      "The slope is negative, so the line goes down from left to right",
      "The slope is zero, so the line is horizontal across the whole plane",
      "The slope is positive, so the line goes up from left to right"
    ],
    "explanations": [
      "A vertical line has an undefined slope and an equation like $x = c$. This line has slope $3$, a defined number.",
      "A negative slope would appear as $y \\ge -3x + 5$. Here the coefficient of $x$ is $+3$, so the line rises, not falls.",
      "A zero slope gives a horizontal line like $y = 5$. The $3x$ term means $y$ changes as $x$ changes.",
      "The boundary line is $y = 3x + 5$, whose slope $m = 3$ is positive, so the line rises from left to right."
    ]
  },
  "q:8a2f36879f0fbe1c": {
    "options": [
      "$10$",
      "$22$",
      "$12$",
      "$31$"
    ],
    "explanations": [
      "$10$ is the HCF used above the $12$ HCF threshold ($60 \\div 6$). Total usage adds the first $12$: $22$ HCF.",
      "Base plus first tier: $22 + 12(3.10) = \\$59.20$. The remaining $119.20 - 59.20 = \\$60$ at $\\$6$ per HCF is $10$ more HCF, so total usage is $12 + 10 = 22$.",
      "$12$ is the tier threshold. A bill of $\\$119.20$ is far more than the $\\$59.20$ that $12$ HCF would cost, so usage went beyond it.",
      "$31$ is $(119.20 - 22) \\div 3.10 \\approx 31.4$ rounded down, billing all usage at the lower rate and ignoring the $\\$6$ tier above $12$ HCF."
    ]
  },
  "q:710d2fee40327fbb": {
    "options": [
      "$24$",
      "$36$",
      "$60$",
      "$72$"
    ],
    "explanations": [
      "$24$ is the smaller number ($4s = 96$). The question asks for the larger, $84 - 24 = 60$.",
      "$36$ is the difference between the two numbers, $60 - 24$, not either number itself.",
      "Let $s + l = 84$ and $3s - l = 12$. Adding gives $4s = 96$, so $s = 24$ and $l = 60$. Check: $3(24) = 72 = 60 + 12$.",
      "$72$ is three times the smaller number, $3s$, which exceeds the larger number by $12$. The larger number itself is $72 - 12 = 60$."
    ]
  },
  "q:0ffc6adc2cdb40df": {
    "options": [
      "5",
      "4",
      "10",
      "7"
    ],
    "explanations": [
      "With $a + b = 11$ and $3a + 5b = 45$, substitute $b = 11 - a$: $3a + 55 - 5a = 45$, so $-2a = -10$ and $a = 5$ pounds.",
      "$4$ pounds of A with $7$ pounds of B costs $12 + 35 = \\$47$, not $\\$45$, so it fails the price condition.",
      "$10$ pounds of A leaves $1$ pound of B: $30 + 5 = \\$35$, not $\\$45$. Too much of the cheaper coffee makes the blend too cheap.",
      "$7$ pounds of A with $4$ pounds of B costs $21 + 20 = \\$41$, not $\\$45$, so it fails the price condition."
    ]
  },
  "q:ef3cf31107d58195": {
    "options": [
      "$x \\ge 71$",
      "$x > 73$",
      "$x = 71$",
      "$x \\le 71$"
    ],
    "explanations": [
      "Two tests averaging at least $73$ need a total of at least $146$. With $75$ already earned, the last test needs $x \\ge 146 - 75 = 71$.",
      "$x > 73$ confuses the required average with the required score and uses a strict inequality. The score needed is $71$, and exactly $71$ works, since $(75 + 71) \\div 2 = 73$.",
      "$x = 71$ gives only the minimum score. Any score above $71$ also keeps the average at or above $73$, so the answer must be an inequality, not a single value.",
      "$x \\le 71$ points the wrong way: scores below $71$ would pull the average under $73$. \"At least\" sets a lower bound on the score, not an upper bound."
    ]
  },
  "q:c28c90a19f5c6fb2": {
    "options": [
      "$4x + 3y \\le 22$, $x \\ge 0$, $y \\ge 0$",
      "$4x + 3y \\le 22$, $x \\le 0$, $y \\le 0$",
      "$4x + 3y \\ge 22$, $x \\ge 0$, $y \\ge 0$",
      "$4x + 3y = 22$, $x \\ge 0$, $y \\ge 0$"
    ],
    "explanations": [
      "Resource use $4x + 3y$ cannot exceed the $22$ units available, so $4x + 3y \\le 22$. Production counts cannot be negative, giving $x \\ge 0$ and $y \\ge 0$.",
      "$x \\le 0$ and $y \\le 0$ would allow only zero or negative production, the reverse of \"non-negative production.\" Those constraints should read $\\ge 0$.",
      "$4x + 3y \\ge 22$ requires using at least $22$ units, but the factory has only $22$ units in total, so usage is capped from above. The direction is reversed.",
      "An equation forces the factory to use exactly $22$ units. Having $22$ units available allows using fewer, so the constraint is an inequality, $\\le 22$."
    ]
  },
  "q:ceff84b2f04aca5d": {
    "options": [
      "$\\$39$",
      "$\\$241$",
      "$\\$308$",
      "$\\$549$"
    ],
    "explanations": [
      "$\\$39$ is the difference in the number of tickets, $61 - 22$, not in revenue. Each ticket type has a different price, so the counts must be multiplied by prices before comparing.",
      "With $a$ adult tickets, student tickets are $3a - 5$: $14a + 9(3a - 5) = 857$ gives $41a = 902$, so $a = 22$ and $61$ student tickets. Revenue difference: $9(61) - 14(22) = 549 - 308 = \\$241$.",
      "$\\$308$ is the adult ticket revenue, $14(22)$, one of the two amounts being compared rather than their difference.",
      "$\\$549$ is the student ticket revenue, $9(61)$. The question asks how much more this is than the adult revenue, so $\\$308$ must be subtracted."
    ]
  },
  "q:13b7ae2e007a00aa": {
    "options": [
      "$-7 \\le x \\le 7$",
      "$x = 7$",
      "$x > -7$",
      "$x \\le -7$ or $x \\ge 7$"
    ],
    "explanations": [
      "$|x| \\le 7$ means the distance from $x$ to $0$ is at most $7$, so $x$ lies between $-7$ and $7$ inclusive: $-7 \\le x \\le 7$.",
      "$x = 7$ is only one boundary point. Many other values, such as $0$ or $-3$, also have absolute value at most $7$, so the solution is an interval, not a single number.",
      "$x > -7$ captures only the left boundary and allows values like $100$, whose absolute value far exceeds $7$. The right bound $x \\le 7$ is missing, and the strict sign is wrong.",
      "$x \\le -7$ or $x \\ge 7$ describes values at least $7$ away from zero, which is the solution to $|x| \\ge 7$, the opposite inequality."
    ]
  },
  "q:9574a4bd86c23d47": {
    "options": [
      "Double line",
      "Solid line",
      "Dashed line",
      "No line"
    ],
    "explanations": [
      "A double line is not a graphing convention for inequalities. Boundaries are drawn either solid (included) or dashed (excluded).",
      "The inequality $\\ge$ is non-strict, so points on the line $y = 2x + 4$ satisfy it. An included boundary is drawn as a solid line.",
      "A dashed line is used for strict inequalities ($<$ or $>$), where points on the line are not solutions. Here $\\ge$ includes the line.",
      "The boundary line must be drawn; it separates the solutions from the non-solutions, and here it is itself part of the solution set."
    ]
  },
  "q:e1e527511b528737": {
    "options": [
      "-1",
      "-8",
      "-2",
      "-4"
    ],
    "explanations": [
      "$-1$ does not appear in the equation and does not come from setting $x = 0$. The $y$-intercept is the constant term, $-4$.",
      "$-8$ might come from combining $-2$ and $-4$ in some way, but the $y$-intercept is simply $b$ in $y = mx + b$, which is $-4$.",
      "$-2$ is the slope, the coefficient of $x$, not the $y$-intercept. The $y$-intercept is the constant term.",
      "In $y = mx + b$, the $y$-intercept is $b$, the constant term. Setting $x = 0$ gives $y = -4$, so the line crosses the $y$-axis at $(0, -4)$."
    ]
  },
  "q:efb7bd9c4deebafd": {
    "options": [
      "283",
      "284",
      "275",
      "270"
    ],
    "explanations": [
      "$283$ is not a multiple of $55$ and cannot be $55 \\times 5$. Distance equals speed times time, and $55 \\times 5 = 275$ miles.",
      "$284$ is not the product of $55$ and $5$. Distance equals speed times time, and $55 \\times 5 = 275$ miles.",
      "Distance equals speed times time: $55 \\times 5 = 275$ miles, since the car covers $55$ miles in each of the $5$ hours.",
      "$270$ is $54 \\times 5$, five miles short. The speed is $55$ mph, so the product is $275$ miles."
    ]
  },
  "q:2f7f7a7517ef47ab": {
    "options": [
      "$1 : 3$",
      "$3 : 1$",
      "$8 : 6$",
      "$6 : 2$"
    ],
    "explanations": [
      "$1 : 3$ reverses the order. The first quantity, $6$, is the larger one, so the simplified ratio must have the larger number first: $3 : 1$.",
      "Divide both parts by their greatest common factor, $2$: $6 \\div 2 = 3$ and $2 \\div 2 = 1$, giving $3 : 1$.",
      "$8 : 6$ adds $2$ to each part instead of dividing. Adding changes a ratio: $8 : 6$ simplifies to $4 : 3$, which is not equivalent to $6 : 2$.",
      "$6 : 2$ is the original ratio, not simplified. Both parts share the factor $2$, so it reduces further to $3 : 1$."
    ]
  },
  "q:411c56c306569c33": {
    "options": [
      "$\\$3.25$",
      "$\\$4.00$",
      "$\\$7.25$",
      "$\\$14.50$"
    ],
    "explanations": [
      "$\\$3.25$ is the price of one muffin, an intermediate value. The question asks for two muffins and two scones together.",
      "$\\$4.00$ is the price of one scone ($3.25 + 0.75$). It must be combined with the muffin price and doubled.",
      "$\\$7.25$ is $m + s$, the cost of one muffin and one scone. The question asks for two of each, so this is exactly half the answer.",
      "Substituting $s = m + 0.75$ into $4m + 3s = 25$: $7m + 2.25 = 25$, so $m = 3.25$ and $s = 4.00$. Then $2(3.25) + 2(4.00) = \\$14.50$."
    ]
  },
  "q:7b8c2058d5fbc718": {
    "options": [
      "18",
      "19",
      "24",
      "23"
    ],
    "explanations": [
      "$18$ does not satisfy both equations: it would require $x = 8$ from the sum, but then $2(8) + 5 = 21 \\ne 18$.",
      "Substitute $y = 2x + 5$ into $x + y = 26$: $3x + 5 = 26$, so $x = 7$ and $y = 2(7) + 5 = 19$. Check: $7 + 19 = 26$.",
      "$24$ would leave $x = 2$ from the sum, but $2(2) + 5 = 9 \\ne 24$. It may come from $26 - 2$, misusing the coefficient as a value.",
      "$23$ would require $x = 3$ from $x + y = 26$, but then $y = 2(3) + 5 = 11$, not $23$, so it fails the first equation."
    ]
  },
  "q:4a938a68bebea274": {
    "options": [
      "$\\$25$",
      "$\\$252$",
      "$\\$630$",
      "$\\$750$"
    ],
    "explanations": [
      "$\\$25$ is the number of banners sold, a count rather than a dollar amount. Banner revenue multiplies that count by the $\\$30$ price.",
      "$\\$252$ is the poster revenue, $12(21)$, the other category. The question asks for the money from banners.",
      "$\\$630$ is $30(21)$, pairing the banner price with the poster count. There were $25$ banners, not $21$.",
      "With $p + b = 46$ and $12p + 30b = 1002$, substituting $p = 46 - b$ gives $552 + 18b = 1002$, so $b = 25$. Banner revenue is $30(25) = \\$750$."
    ]
  },
  "q:29ff5b48f9afaf3f": {
    "options": [
      "$(-1, -8)$",
      "$(1, -3)$",
      "$(0, -5)$",
      "$(-2, -6)$"
    ],
    "explanations": [
      "At $x = -1$, the line gives $3(-1) - 3 = -6$. The point's $y$-value $-8$ is less than $-6$, so it lies below the line and fails $y \\ge 3x - 3$.",
      "At $x = 1$, $3(1) - 3 = 0$, and $-3 \\ge 0$ is false. This point is below the line.",
      "At $x = 0$, $3(0) - 3 = -3$, and $-5 \\ge -3$ is false. The point sits below the $y$-intercept.",
      "At $x = -2$, $3(-2) - 3 = -9$, and $-6 \\ge -9$ is true. The point is above the line, so it satisfies $y \\ge 3x - 3$."
    ]
  },
  "q:fd9d125f5d8cb521": {
    "options": [
      "$\\frac{3}{2}$",
      "$\\frac{2}{2}$",
      "$\\frac{0}{2}$",
      "$\\frac{4}{3}$"
    ],
    "explanations": [
      "Subtract $4x$ from both sides: $2x + 1 = 4$. Subtract $1$: $2x = 3$. Divide by $2$: $x = \\frac{3}{2}$. Check: $6(1.5) + 1 = 10 = 4(1.5) + 4$.",
      "$\\frac{2}{2} = 1$ fails the check: $6(1) + 1 = 7$ while $4(1) + 4 = 8$. It would come from $2x = 2$, a slip in subtracting the constants.",
      "$\\frac{0}{2} = 0$ fails: the left side is $1$ and the right side is $4$. It comes from dropping the constants entirely and solving $2x = 0$.",
      "$\\frac{4}{3}$ divides the wrong way around, as if $3x = 4$. Collecting terms gives $2x = 3$, so $x = \\frac{3}{2}$, not $\\frac{4}{3}$."
    ]
  },
  "q:4b69b97fb1f63b6a": {
    "options": [
      "$x > 3$ or $x < -3$",
      "$-3 < x < 3$",
      "$x < 3$ or $x > -3$",
      "$x > 3$ or $x > -3$"
    ],
    "explanations": [
      "$|x| > 3$ means $x$ is more than $3$ units from zero in either direction, so $x > 3$ or $x < -3$.",
      "$-3 < x < 3$ is the solution to $|x| < 3$, the values close to zero. The given inequality asks for values far from zero.",
      "$x < 3$ or $x > -3$ covers every real number, since any value satisfies at least one part, which is far too much. The negative branch should be $x < -3$.",
      "$x > 3$ or $x > -3$ reduces to $x > -3$, which wrongly includes values like $0$ where $|0| = 0$ is not greater than $3$. The second branch must be $x < -3$."
    ]
  },
  "q:e07031a1fa45bcbc": {
    "options": [
      "1",
      "-6",
      "0",
      "-2"
    ],
    "explanations": [
      "$1$ fails: adding the equations gives $6x = -12$, not $6$. Substituting $x = 1$ into both equations gives conflicting $y$-values.",
      "$-6$ comes from dividing $-12$ by $2$ instead of by $6$, the combined $x$-coefficient. $6x = -12$ gives $x = -2$.",
      "$0$ would make the equations read $3y = -10$ and $-3y = -2$, which give different $y$-values, so it is not a solution.",
      "Adding the equations eliminates $y$: $6x = -10 + (-2) = -12$, so $x = -2$. (Then $3y = -6$, so $y = -2$.)"
    ]
  },
  "q:09fd21e0ce178696": {
    "options": [
      "It is the y-intercept of the boundary line",
      "It sets which side of the line is shaded",
      "It is the x-intercept of the boundary line",
      "It sets if the line is solid or dashed"
    ],
    "explanations": [
      "The boundary line is $y = x + 2$. In slope-intercept form the constant term is the $y$-intercept, so the line crosses the $y$-axis at $(0, 2)$.",
      "The side to shade is set by the inequality symbol ($<$ means below), not by the constant $2$. Changing the $2$ would move the line, not change which side is shaded.",
      "The $x$-intercept is where $y = 0$: $0 = x + 2$ gives $x = -2$, not $2$. The constant is the $y$-intercept.",
      "Solid versus dashed depends on whether the inequality is strict ($<$ or $>$ gives dashed), not on the constant term."
    ]
  },
  "q:0a1a6efed96c3c0a": {
    "options": [
      "-6",
      "-10",
      "-2",
      "-3"
    ],
    "explanations": [
      "Subtract $2$ from both sides: $-4x = 24$. Divide by $-4$: $x = -6$. Check: $-4(-6) + 2 = 26$.",
      "$-10$ fails the check: $-4(-10) + 2 = 42 \\ne 26$. It would come from treating the $2$ as something to add rather than subtract.",
      "$-2$ fails: $-4(-2) + 2 = 10 \\ne 26$. It may come from dividing $-4$ by $2$ or another coefficient mix-up.",
      "$-3$ fails: $-4(-3) + 2 = 14 \\ne 26$. It would result from dividing $24$ by $-8$ instead of $-4$."
    ]
  },
  "q:79f9446284473ddd": {
    "options": [
      "11",
      "0",
      "6",
      "3"
    ],
    "explanations": [
      "$11$ is the sum $x + y$, not $x$. If $x = 11$ then $y = 0$ and $x - y = 11 \\ne 1$.",
      "$0$ fails: with $x = 0$, $y$ would be $11$ from the first equation and $-1$ from the second, a contradiction.",
      "Adding the equations eliminates $y$: $2x = 12$, so $x = 6$ (and $y = 5$; check $6 - 5 = 1$).",
      "$3$ is half of $6$, from dividing $12$ by $4$ or dividing by $2$ twice. $2x = 12$ gives $x = 6$."
    ]
  },
  "q:f6e97cfefb2143cc": {
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "explanations": [
      "Add $3x$ to both sides: $8x - 7 = 9$. Add $7$: $8x = 16$. Divide: $x = 2$. Check: $5(2) - 7 = 3 = 9 - 3(2)$.",
      "$3$ fails the check: $5(3) - 7 = 8$ but $9 - 3(3) = 0$. The two sides are not equal.",
      "$5$ fails: $5(5) - 7 = 18$ but $9 - 15 = -6$. It is the coefficient of $x$, not the solution.",
      "$6$ fails: $5(6) - 7 = 23$ but $9 - 18 = -9$. The sides move apart as $x$ grows, so only $x = 2$ balances them."
    ]
  },
  "q:2cae17ec23076d6d": {
    "options": [
      "$2x + 2y \\le 43$",
      "$2x + 2y \\ge 43$",
      "$2x + 2y = 43$",
      "$2x - 2y \\le 43$"
    ],
    "explanations": [
      "Buying $x$ of item A and $y$ of item B costs $2x + 2y$ dollars, and this cannot exceed the $\\$43$ available, so $2x + 2y \\le 43$.",
      "$2x + 2y \\ge 43$ says the customer must spend at least $\\$43$, which reverses the budget constraint. Having $\\$43$ limits spending from above.",
      "An equation requires spending exactly $\\$43$, which is impossible with $\\$2$ items anyway, and it leaves out all the cheaper combinations the customer can afford.",
      "$2x - 2y$ subtracts the cost of item B, as if buying B returned money. Both items add to the total cost."
    ]
  },
  "q:e72a7e96aef7a10e": {
    "options": [
      "$2.5$",
      "$4$",
      "$5$",
      "$8$"
    ],
    "explanations": [
      "$2.5$ is $\\frac{x}{2}$ with $x = 5$, from dividing before adding $3$. The expression is $\\frac{x + 3}{2}$, so add first.",
      "Distribute: $6x - 8 = 3x + 12 - 5 = 3x + 7$, so $3x = 15$ and $x = 5$. Then $\\frac{x + 3}{2} = \\frac{8}{2} = 4$.",
      "$5$ is $x$ itself, the intermediate value. The question asks for $\\frac{x + 3}{2}$, which is $4$.",
      "$8$ is the numerator $x + 3$ with the division by $2$ left undone."
    ]
  },
  "q:ee3430dc07cafeb8": {
    "options": [
      "$200$",
      "$300$",
      "$360$",
      "$675$"
    ],
    "explanations": [
      "Selling $f$ floor and $500 - f$ balcony tickets gives revenue $75f + 40(500 - f) = 35f + 20{,}000$. Requiring at least $27{,}000$: $35f \\ge 7{,}000$, so $f \\ge 200$.",
      "$300$ is the number of balcony tickets when $200$ floor tickets are sold, the other group rather than the one asked about.",
      "$360$ is $27{,}000 \\div 75$, as if floor tickets alone had to produce all the revenue. Balcony tickets contribute $\\$40$ each, which lowers the number of floor tickets needed.",
      "$675$ is $27{,}000 \\div 40$, using the balcony price, and it exceeds the $500$-seat capacity, so it is impossible."
    ]
  },
  "q:064e37fda4b7ec63": {
    "options": [
      "$7$",
      "$35$",
      "$49$",
      "$63$"
    ],
    "explanations": [
      "$7$ is the value of $x$ itself, found from $4x = 28$. The question asks for $x^2 - 2x$, not $x$.",
      "Simplify: $6x - 12 + 5 = 2x + 18 + 3$ gives $6x - 7 = 2x + 21$, so $4x = 28$ and $x = 7$. Then $x^2 - 2x = 49 - 14 = 35$.",
      "$49$ is $x^2$ alone, with the $-2x = -14$ term dropped from the expression.",
      "$63$ is $x^2 + 2x = 49 + 14$, a sign error on the second term of the expression."
    ]
  },
  "q:b21eedfdbd5a54fe": {
    "options": [
      "$\\$60$",
      "$\\$210$",
      "$\\$252$",
      "$\\$480$"
    ],
    "explanations": [
      "$\\$60$ is the number of burritos sold, a count rather than revenue. Multiply by the $\\$8$ price to get $\\$480$.",
      "$\\$210$ is $3.50(60)$, pairing the burrito count with the taco price instead of the burrito price.",
      "$\\$252$ is $3.50(72)$, the taco revenue, which is the other category of sales rather than the burrito revenue asked for.",
      "With $t + b = 132$ and $3.5t + 8b = 732$, substituting $t = 132 - b$ gives $462 + 4.5b = 732$, so $b = 60$. Burrito revenue is $8(60) = \\$480$."
    ]
  },
  "q:6296a03b9ef0b93b": {
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$8$"
    ],
    "explanations": [
      "$2$ is the least allowed value of $b$ (from $b \\ge 6 - 4$), the wrong end of the range $2 \\le b < 4$.",
      "At $x = 6$: $b < -\\frac{2}{3}(6) + 8 = 4$ (strict) and $b \\ge 6 - 4 = 2$. So $2 \\le b < 4$, and the greatest integer is $3$.",
      "$4$ is the boundary value of the first inequality. Because that inequality is strict ($<$), $b = 4$ is excluded.",
      "$8$ is the $y$-intercept of the first boundary line, its value at $x = 0$, not at $x = 6$, where the line gives $4$."
    ]
  },
  "q:53926efe45bf7faf": {
    "options": [
      "$0.012$",
      "$0.072$",
      "$7.2$",
      "$72$"
    ],
    "explanations": [
      "$0.012$ grams is the amount delivered in one hour ($60$ minutes), from forgetting to convert $6$ hours to $360$ minutes.",
      "Six hours is $360$ minutes, delivering $2.5 \\times 360 = 900$ milliliters. Drug: $\\frac{8}{100} \\times 900 = 72$ milligrams $= 0.072$ grams.",
      "$7.2$ comes from dividing $72$ milligrams by $10$ instead of $1{,}000$. There are $1{,}000$ milligrams in a gram.",
      "$72$ is the correct amount in milligrams, not grams. The question asks for grams, so divide by $1{,}000$."
    ]
  },
  "q:94f1a5cc3ce1c575": {
    "options": [
      "$\\$300$",
      "$\\$8{,}100$",
      "$\\$8{,}400$",
      "$\\$9{,}000$"
    ],
    "explanations": [
      "$\\$300$ is the break-even production level in units ($15n = 4500$), not a cost in dollars.",
      "$\\$8{,}100$ is the company's own cost and revenue at break-even, $27(300)$. The question asks for the competitor's cost at that production level.",
      "Break-even: $4500 + 12n = 27n$, so $n = 300$. The competitor's cost there is $6000 + 8(300) = \\$8{,}400$.",
      "$\\$9{,}000$ comes from setting the two cost functions equal, $4500 + 12n = 6000 + 8n$, giving $n = 375$. The question specifies the company's own break-even with its revenue."
    ]
  },
  "q:9d53721e24fc42ed": {
    "options": [
      "Solid line, shaded below",
      "Dashed line, shaded below",
      "Dashed line, shaded above",
      "Solid line, shaded above"
    ],
    "explanations": [
      "Shading below corresponds to $y \\le$; here $y \\ge$ means $y$-values at or above the line. The solid line is right, but the side is wrong.",
      "Both parts are wrong: a dashed line is for strict inequalities, and $\\ge$ shades above, not below.",
      "Shading above is right, but a dashed line is for strict inequalities ($>$). Since $\\ge$ includes the boundary, the line must be solid.",
      "$\\ge$ is non-strict, so points on the line are solutions and the boundary is solid; $y \\ge$ means $y$-values at or above the line, so shade above."
    ]
  },
  "q:aa98211081a1f183": {
    "options": [
      "Yes — it satisfies both inequalities",
      "No — it fails only the first inequality",
      "No — it fails both of the inequalities",
      "No — it fails only the second inequality"
    ],
    "explanations": [
      "The point fails the second inequality: $2(-1) + 1 = -1$, and $1 < -1$ is false. A point must satisfy both inequalities to be in the solution set.",
      "The first inequality holds: $y > x$ becomes $1 > -1$, which is true. It is the second inequality that fails.",
      "Only one inequality fails. $1 > -1$ makes $y > x$ true, so the point does not fail both.",
      "$y > x$: $1 > -1$ is true. $y < 2x + 1$: $1 < -1$ is false. The point satisfies the first but not the second, so it is not a solution."
    ]
  },
  "q:2c51863bddab0702": {
    "options": [
      "43",
      "48",
      "36",
      "37"
    ],
    "explanations": [
      "$43$ does not come from the identity; $(x + y)^2 = 81$ and $81 - 45 = 36$. Substituting back, $45 + 43 = 88 \\ne 81$.",
      "$48$ is an arithmetic slip; $81 - 45 = 36$, not $48$. Check: $45 + 48 = 93 \\ne 81$.",
      "Expand $(x + y)^2 = x^2 + 2xy + y^2$: $81 = 45 + 2xy$, so $2xy = 36$.",
      "$37$ is $81 - 44$, an arithmetic slip. Since $81 - 45 = 36$, that is the value of $2xy$."
    ]
  },
  "q:5752ca7ad084abcd": {
    "options": [
      "The x-intercept",
      "The maximum value",
      "The starting value (y-intercept)",
      "The rate of change (slope)"
    ],
    "explanations": [
      "The $x$-intercept is where $f(x) = 0$: $5x + 44 = 0$ gives $x = -8.8$, not $5$.",
      "A linear function with a nonzero slope has no maximum; it increases without bound. The $5$ tells how fast it increases.",
      "The starting value, or $y$-intercept, is $44$, the output when $x = 0$. The $5$ multiplies $x$ and is not the starting value.",
      "In $f(x) = mx + b$, the coefficient of $x$ is the slope, the change in $f(x)$ for each unit increase in $x$. Here that coefficient is $5$."
    ]
  },
  "q:884cac10e90ff5f1": {
    "options": [
      "-1",
      "-3",
      "2",
      "6"
    ],
    "explanations": [
      "$-1$ is a sign slip: adding $7$ and $-3$ gives $+4$, so $2x = 4$ and $x = 2$. Check: $x = -1$ would need $y = 8$, but $-1 - 8 = -9 \\ne -3$.",
      "$-3$ is the right side of the second equation, not the solution. If $x = -3$, then $y = 10$ and $x - y = -13 \\ne -3$.",
      "Add the equations to eliminate $y$: $2x = 7 + (-3) = 4$, so $x = 2$ (and $y = 5$; check $2 - 5 = -3$).",
      "$6$ would require $y = 1$ to make the sum $7$, but then $x - y = 5$, not $-3$."
    ]
  },
  "q:ac0607fa110f5a8d": {
    "options": [
      "$\\$20$",
      "$\\$160$",
      "$\\$280$",
      "$\\$420$"
    ],
    "explanations": [
      "$\\$20$ is the number of necklaces that can be made, a count rather than revenue.",
      "$\\$160$ is $20(8)$, the correct necklace count paired with the bracelet price. Necklaces sell for $\\$14$.",
      "Beads allow $15n \\le 300$, so $n \\le 20$; clasps allow $2n \\le 60$, so $n \\le 30$. The tighter limit is $20$ necklaces, earning $20(14) = \\$280$.",
      "$\\$420$ is $30(14)$, using only the clasp limit. Thirty necklaces would need $450$ beads, but only $300$ are available."
    ]
  },
  "q:30a1e873c0e92e7d": {
    "options": [
      "-27",
      "-28",
      "-19",
      "-20"
    ],
    "explanations": [
      "$-27$ fails the check: $\\frac{-27}{5} - 8 = -5.4 - 8 = -13.4$, not $-12$. It would come from subtracting $8$ rather than adding it before multiplying by $5$.",
      "$-28$ fails the check: $\\frac{-28}{5} - 8 = -5.6 - 8 = -13.6$, not $-12$. It is an arithmetic slip; $-4 \\times 5 = -20$.",
      "$-19$ fails the check: $\\frac{-19}{5} - 8 = -11.8$, not $-12$. It is one off from the correct $-20$.",
      "Add $8$ to both sides: $\\frac{1}{5}x = -4$. Multiply by $5$: $x = -20$. Check: $\\frac{-20}{5} - 8 = -4 - 8 = -12$."
    ]
  },
  "q:fa9d64933581e63a": {
    "options": [
      "$x = -3$",
      "$-5 < x < -1$",
      "All real numbers",
      "No solution"
    ],
    "explanations": [
      "$x = -3$ makes $|x + 3| = 0$, and $0 < -2$ is false. No value of $x$ can make a non-negative quantity less than $-2$.",
      "$-5 < x < -1$ would be the solution to $|x + 3| < 2$. The right side here is $-2$, a negative number, so nothing works.",
      "\"All real numbers\" would be the solution to $|x + 3| > -2$, since absolute values are always at least $0$. For \"less than $-2$\" the opposite happens: nothing works.",
      "An absolute value is never negative, so $|x + 3|$ is always at least $0$ and can never be less than $-2$. There is no solution."
    ]
  },
  "q:16f9063c7928fb66": {
    "options": [
      "Exactly one solution",
      "No solution",
      "Exactly two solutions",
      "Infinitely many solutions"
    ],
    "explanations": [
      "There is no single solution: subtracting $5x$ removes the variable entirely and leaves $4 = 5$, so no value of $x$ works.",
      "Subtracting $5x$ from both sides leaves $4 = 5$, which is false for every $x$. The equation has no solution.",
      "A linear equation can never have exactly two solutions; it has one, none, or infinitely many.",
      "Infinitely many solutions would require an identity like $4 = 4$ after simplifying. Here the constants differ ($4 \\ne 5$), so there are none."
    ]
  },
  "q:2dc5a60c7470a80e": {
    "options": [
      "Infinitely many",
      "Exactly two",
      "Exactly one",
      "Zero"
    ],
    "explanations": [
      "Infinitely many intersections would require the same line, with the same slope and intercept. The slopes $-3$ and $3$ differ.",
      "Two straight lines can cross at most once; two intersection points would force them to be the same line.",
      "The slopes are different ($-3$ versus $3$), so the lines are not parallel and must cross at exactly one point.",
      "Zero intersections means parallel lines with equal slopes but different intercepts. These slopes differ, so the lines meet."
    ]
  },
  "q:7ef22ee91b1f514d": {
    "options": [
      "$k = 6$",
      "$k = 3$",
      "$k = 8$",
      "Any value of $k$"
    ],
    "explanations": [
      "Multiplying $2x + 3y = 3$ by $2$ gives $4x + 6y = 6$. The second equation is the same line, with infinitely many shared solutions, only when $k = 6$.",
      "$k = 3$ keeps the right side unchanged while the left side doubles. That gives parallel lines, $4x + 6y = 3$ versus $4x + 6y = 6$, with no solution.",
      "$k = 8$ makes $4x + 6y = 8$, parallel to $4x + 6y = 6$ but distinct, so the system has no solution.",
      "Not every value works: the left sides are proportional with factor $2$, so only $k = 6$ makes the two equations identical. Other values give parallel, non-intersecting lines."
    ]
  },
  "q:0be538c9a622a4f2": {
    "options": [
      "-4",
      "2",
      "4",
      "5"
    ],
    "explanations": [
      "$-4$ comes from a sign slip when combining the right sides; $4 + (-2) = 2$, not $-4$. Solving fully gives $x = 0$, $y = 2$, and $4(0) + 2 = 2$.",
      "Adding the two equations gives $(x + 2y) + (3x - y) = 4x + y$ on the left and $4 + (-2) = 2$ on the right. So $4x + y = 2$ directly.",
      "$4$ is the right side of the first equation alone, ignoring the $-2$ from the second equation when adding.",
      "$5$ is not what the sum produces; $4 + (-2) = 2$. Solving fully, $x = 0$ and $y = 2$, and $4(0) + 2 = 2$, not $5$."
    ]
  },
  "q:d6fdfe68ef216372": {
    "options": [
      "$26$",
      "$25$",
      "$24$",
      "$23$"
    ],
    "explanations": [
      "$26$ ignores the $30$-minute break ($360 \\div 14 = 25.7$) and then rounds up. It also exceeds the $25$-stop cap.",
      "$25$ is the stated maximum, but only $330$ working minutes are available, and $25$ stops need $350$ minutes.",
      "$24$ rounds $23.57$ up; $24$ stops would need $336$ minutes, more than the $330$ available.",
      "The shift is $360$ minutes minus a $30$-minute break, leaving $330$ minutes. $330 \\div 14 = 23.57$, so $23$ stops ($322$ minutes), which is within the $18$-to-$25$ range."
    ]
  },
  "q:58b474f59baaf191": {
    "options": [
      "$y > -4$: vertical dashed line, shade right",
      "$y > -4$: horizontal dashed line, shade above",
      "$y > -4$: horizontal solid line, shade above",
      "$y > -4$: horizontal dashed line, shade below"
    ],
    "explanations": [
      "A vertical line is the graph of an equation in $x$ alone, like $x = -4$. The inequality $y > -4$ involves $y$, so its boundary is horizontal.",
      "$y > -4$ has boundary $y = -4$, a horizontal line. The strict $>$ makes it dashed, and $y$ greater than $-4$ means the region above.",
      "A solid line would be used for $y \\ge -4$. Since the inequality is strict, points on $y = -4$ are not solutions and the line is dashed.",
      "Shading below would represent $y < -4$. Greater $y$-values are above the line, so the shading goes above."
    ]
  },
  "q:9656fd8ebf5d1580": {
    "options": [
      "$47$",
      "$7$",
      "$40$",
      "$50.5$"
    ],
    "explanations": [
      "The first $40$ hours pay $40(18) = \\$720$. The remaining $909 - 720 = \\$189$ at $\\$27$ per hour is $7$ overtime hours, so she worked $40 + 7 = 47$ hours.",
      "$7$ is the number of overtime hours, the intermediate value. Total hours include the first $40$: $47$.",
      "$40$ is the overtime threshold. Working exactly $40$ hours pays only $\\$720$, less than the $\\$909$ earned.",
      "$50.5$ is $909 \\div 18$, paying every hour at the regular rate and ignoring the higher overtime rate for hours beyond $40$."
    ]
  },
  "q:2ecb4341d0de0d3d": {
    "options": [
      "$20$",
      "$21$",
      "$22$",
      "$24$"
    ],
    "explanations": [
      "$20$ is the permit threshold. Twenty boxes cost $\\$425$ and leave money unused; $21$ boxes, including the permit, cost $\\$483$ and still fit the budget.",
      "For more than $20$ boxes the cost is $65 + 40 + 18b \\le 500$, so $18b \\le 395$ and $b \\le 21.9$. Thus $21$ boxes ($\\$483$); $22$ would cost $\\$501$.",
      "$22$ rounds $21.94$ up. Twenty-two boxes cost $105 + 396 = \\$501$, one dollar over the budget.",
      "$24$ ignores the $\\$40$ permit: $65 + 18b \\le 500$ gives $b \\le 24.2$. With the permit, $24$ boxes cost $\\$537$."
    ]
  },
  "q:38ef44d0c3e342e9": {
    "options": [
      "-4",
      "8",
      "7",
      "9"
    ],
    "explanations": [
      "$-4$ fails: with $x = 5$ and $y = 4$, $x^2 - y^2 = 25 - 16 = 9$, a positive number since $x > y$.",
      "$8$ does not equal $25 - 16$. Adding the equations gives $3x = 15$, so $x = 5$, $y = 4$, and $x^2 - y^2 = (x + y)(x - y) = 9 \\cdot 1 = 9$.",
      "$7$ is not $25 - 16$. Adding the equations gives $3x = 15$, so $x = 5$ and $y = 4$; then $x^2 - y^2 = 9$.",
      "Adding the equations: $3x = 15$, so $x = 5$ and $y = 4$. Then $x^2 - y^2 = (x + y)(x - y) = 9 \\cdot 1 = 9$."
    ]
  },
  "q:b55096552e859551": {
    "options": [
      "$-32$",
      "$-24$",
      "$-16$",
      "$32$"
    ],
    "explanations": [
      "For infinitely many solutions the second equation must be a multiple of the first. Multiplying $2x - 3y = 8$ by $-3$ gives $-6x + 9y = -24$, so $k = -24$ and $k - 8 = -32$.",
      "$-24$ is $k$ itself, the intermediate value. The question asks for $k - 8$.",
      "$-16$ is $k + 8 = -24 + 8$, adding $8$ instead of subtracting it.",
      "$32$ has the correct magnitude but the wrong sign. The multiplier from $2x$ to $-6x$ is $-3$, making $k = -24$ negative, so $k - 8 = -32$."
    ]
  },
  "q:53f92229baaaf09e": {
    "options": [
      "$(9, 9)$",
      "$(10, 1)$",
      "$(2, 1)$",
      "$(0, 2)$"
    ],
    "explanations": [
      "$(9, 9)$ gives $2(9) + 2(9) = 36$, far more than $17$, so it fails the first inequality.",
      "$(10, 1)$ satisfies $x \\ge 1$ and $y \\ge 1$ but gives $2(10) + 2(1) = 22 > 17$, failing the first inequality.",
      "$(2, 1)$: $2(2) + 2(1) = 6 \\le 17$, $2 \\ge 1$, and $1 \\ge 1$. All three inequalities hold.",
      "$(0, 2)$ has $x = 0$, which violates $x \\ge 1$, even though $2(0) + 2(2) = 4 \\le 17$."
    ]
  },
  "q:98a00575826c89b6": {
    "options": [
      "$83$",
      "$125$",
      "$110$",
      "$80$"
    ],
    "explanations": [
      "$83$ is $1000 \\div 12$, as if the fast rate lasted the whole time. It applies only for the first $30$ minutes.",
      "$125$ is $1000 \\div 8$, filling the entire pool at the slow rate and ignoring the faster first $30$ minutes.",
      "The first $30$ minutes add $30(12) = 360$ gallons, leaving $640$. At $8$ gallons per minute that takes $80$ minutes, so the total is $30 + 80 = 110$ minutes.",
      "$80$ is only the time spent at the slower rate. The $30$ minutes at the fast rate must be added, giving $110$."
    ]
  },
  "q:e148dcd47d1d468e": {
    "options": [
      "$28$",
      "$68$",
      "$60$",
      "$84$"
    ],
    "explanations": [
      "$28$ is the number of students beyond the first $40$, the intermediate value. Total students are $40 + 28 = 68$.",
      "Flat fee plus the first $40$ students: $520 + 280 = \\$800$, leaving $\\$140$. At $\\$5$ each that covers $28$ more students, so $40 + 28 = 68$.",
      "$60$ is $(940 - 520) \\div 7$, charging every student at the higher first-tier rate and ignoring the cheaper rate beyond $40$.",
      "$84$ is $(940 - 520) \\div 5$, charging every student at the lower rate, including the first $40$ who cost $\\$7$ each."
    ]
  },
  "q:f8324894f1e08a56": {
    "options": [
      "$38$",
      "$56$",
      "$57$",
      "$70$"
    ],
    "explanations": [
      "$38$ comes from the lower bound $85t \\ge 3300$, giving $t \\ge 38.8$. It is about the least running time needed, not the greatest allowed, and $38$ minutes does not even reach $4{,}500$ gallons.",
      "The pool must satisfy $1200 + 85t \\le 6000$, so $85t \\le 4800$ and $t \\le 56.47$. The greatest whole number is $56$ minutes ($5{,}960$ gallons), which also exceeds $4{,}500$.",
      "$57$ rounds $56.47$ up. After $57$ minutes the pool holds $1200 + 4845 = 6{,}045$ gallons, over the limit.",
      "$70$ is $6000 \\div 85$, ignoring the $1{,}200$ gallons already in the pool."
    ]
  },
  "q:f70b662635f088e9": {
    "options": [
      "$\\$84.00$",
      "$\\$94.38$",
      "$\\$105.00$",
      "$\\$111.30$"
    ],
    "explanations": [
      "$\\$84.00$ is the discounted price before tax ($89.04 \\div 1.06$), an intermediate value. The listed price is before the $20\\%$ discount is applied.",
      "$\\$94.38$ comes from multiplying $89.04$ by $1.06$ instead of dividing, moving away from the listed price rather than back toward it.",
      "Paid $= P \\times 0.80 \\times 1.06 = 0.848P$, so $P = 89.04 \\div 0.848 = \\$105$. Check: $105 \\times 0.8 = 84$ and $84 \\times 1.06 = 89.04$.",
      "$\\$111.30$ is $89.04 \\div 0.80$, removing only the discount and leaving the $6\\%$ tax in the price."
    ]
  },
  "q:bb8818a717d99ffd": {
    "options": [
      "$-6$",
      "$4$",
      "$10$",
      "$16$"
    ],
    "explanations": [
      "$-6$ is the value of $c$ alone, an intermediate value. The question asks for $c + d$.",
      "The second equation must be $\\frac{4}{6} = \\frac{2}{3}$ times the first: $c = -9 \\cdot \\frac{2}{3} = -6$ and $d = 15 \\cdot \\frac{2}{3} = 10$. So $c + d = 4$.",
      "$10$ is the value of $d$ alone, an intermediate value. The question asks for $c + d$.",
      "$16$ is $d - c = 10 - (-6)$, from subtracting or from dropping the negative sign on $c$."
    ]
  },
  "q:f8af1859eb9fd578": {
    "options": [
      "Shade the side with the larger area in the viewing window",
      "Test a point like $(0, 0)$ and shade the side that works",
      "Always shade above the line, whatever the inequality says",
      "Always shade the side that contains the origin $(0, 0)$"
    ],
    "explanations": [
      "Area in the viewing window has nothing to do with which side satisfies the inequality; both half-planes are infinite.",
      "Pick a convenient point not on the line, usually $(0, 0)$, and substitute. If the inequality is true, shade that side; if false, shade the other side.",
      "Shading above is correct only for $y >$ or $y \\ge$ forms. Inequalities like $y < x + 1$ shade below, so there is no \"always.\"",
      "The origin's side is shaded only if the origin makes the inequality true. For $x + y > 2$, the origin fails, so the opposite side is shaded."
    ]
  },
  "q:e2978185f6b4d583": {
    "options": [
      "10",
      "21",
      "16",
      "15"
    ],
    "explanations": [
      "$10$ fails: $10 + 4 = 14$, not $20$. It may come from dividing $20$ by $2$ instead of subtracting $4$.",
      "$21$ fails: $21 + 4 = 25$, not $20$. It may come from adding $1$ instead of subtracting $4$.",
      "Subtract $4$ from both sides: $x = 20 - 4 = 16$. Check: $16 + 4 = 20$.",
      "$15$ fails: $15 + 4 = 19$, one short of $20$. It is an off-by-one subtraction slip."
    ]
  },
  "q:0ea58bb5298903ab": {
    "options": [
      "$\\$96$",
      "$\\$27$",
      "$\\$48$",
      "$\\$72$"
    ],
    "explanations": [
      "$\\$96$ is $24 \\times 4$, one hour too many. Three hours gives $24 \\times 3 = 72$ dollars.",
      "$\\$27$ adds $24 + 3$ instead of multiplying. Pay is the hourly rate times the number of hours.",
      "$\\$48$ is $24 \\times 2$, which is two hours of pay rather than the three hours the worker put in.",
      "Total pay equals the hourly rate times hours worked: $24 \\times 3 = \\$72$."
    ]
  },
  "q:7be79f1ce5b3fba5": {
    "options": [
      "A dashed vertical line at $x = 8$, shading right",
      "A solid vertical line at $x = 8$, shading right",
      "A solid horizontal line at $y = 8$, shading above",
      "A solid vertical line at $x = 8$, shading left"
    ],
    "explanations": [
      "A dashed line is for strict inequalities. Since $\\ge$ includes $x = 8$, the line must be solid.",
      "$x \\ge 8$ has boundary $x = 8$, a vertical line. The $\\ge$ includes the line (solid), and larger $x$-values lie to the right.",
      "$y = 8$ is a horizontal line, which would graph an inequality in $y$. This inequality involves $x$, so the boundary is vertical.",
      "Shading left gives $x \\le 8$, the smaller $x$-values. Values greater than or equal to $8$ are to the right."
    ]
  },
  "q:004f7122996f4a93": {
    "options": [
      "0",
      "2",
      "1",
      "Infinitely many"
    ],
    "explanations": [
      "Zero solutions would occur for $|x| = -10$, since absolute values cannot be negative. $10$ is positive, so there are solutions.",
      "$|x| = 10$ means $x$ is $10$ units from zero in either direction, so $x = 10$ or $x = -10$: two solutions.",
      "One solution occurs only for $|x| = 0$. For a positive right side, both $10$ and $-10$ work.",
      "Infinitely many solutions would need an identity. Only two numbers, $10$ and $-10$, have absolute value $10$."
    ]
  },
  "q:b4b5d89a3226c7ea": {
    "options": [
      "Only the points that lie on the line itself",
      "The half-plane above the line, excluding the line",
      "The half-plane below the line, excluding the line",
      "The half-plane below the line, including the line"
    ],
    "explanations": [
      "Points on the line satisfy $y = x + 4$, not $y < x + 4$. The solution set is a region, not just the line.",
      "The half-plane above corresponds to $y > x + 4$. Here $y$ is less than $x + 4$, so the region is below.",
      "$y < x + 4$ holds for points whose $y$-coordinate is less than the line's value, the half-plane below. The strict $<$ excludes the line itself.",
      "Including the line would be correct for $y \\le x + 4$. With a strict inequality, points on the line are not solutions."
    ]
  },
  "q:4226619d0ac9885c": {
    "options": [
      "$y \\le 3x - 6$",
      "$y > 3x - 6$",
      "$y = 3x - 6$",
      "$y \\ge 3x - 6$"
    ],
    "explanations": [
      "The line is $y = 3x - 6$. \"On or below\" means $y$-values at most the line's value, including the boundary, so $y \\le 3x - 6$.",
      "$y > 3x - 6$ describes points strictly above the line, the opposite region, and it excludes the line.",
      "$y = 3x - 6$ gives only the points on the line, not the region below it.",
      "$y \\ge 3x - 6$ includes the line but shades above it. \"Below\" requires $\\le$."
    ]
  },
  "q:b99743f115c5dd06": {
    "options": [
      "-1",
      "-4",
      "1",
      "3"
    ],
    "explanations": [
      "$-1$ is a sign slip: subtracting the equations gives $8y = 1 - (-7) = 8$, not $-8$. (Note that $x = -1$, which may be the source of confusion.)",
      "$-4$ confuses the coefficient of $y$ in the second equation with the solution. $8y = 8$ gives $y = 1$.",
      "Subtracting the second equation from the first eliminates $x$: $8y = 1 - (-7) = 8$, so $y = 1$ (then $x = -1$).",
      "$3$ would require $3x = 1 - 12 = -11$ from the first equation and $3x = -7 + 12 = 5$ from the second, a contradiction."
    ]
  },
  "q:4960a3fa6d8a5a35": {
    "options": [
      "28",
      "20",
      "26",
      "23"
    ],
    "explanations": [
      "A ratio of $4 : 4$ simplifies to $1 : 1$, so $x$ and $y$ are equal. Since $x = 28$, $y = 28$.",
      "$20$ would make $x : y = 28 : 20 = 7 : 5$, not $4 : 4$. The two quantities must be equal.",
      "$26$ gives $28 : 26 = 14 : 13$, which is not a $1 : 1$ ratio.",
      "$23$ gives $28 : 23$, which does not reduce to $4 : 4 = 1 : 1$."
    ]
  },
  "q:79c1dc19e9701b73": {
    "options": [
      "$y = 3x + 9$",
      "$y = 3x - 9$",
      "$y = -3x - 9$",
      "$y = -9x + 3$"
    ],
    "explanations": [
      "$y = 3x + 9$ has the right slope but the $y$-intercept $+9$. The given intercept is $-9$, so this is a sign error.",
      "Slope-intercept form $y = mx + b$ with $m = 3$ and $b = -9$ gives $y = 3x - 9$.",
      "$y = -3x - 9$ has the correct intercept but a negative slope. The slope is $+3$.",
      "$y = -9x + 3$ swaps the roles: it uses $-9$ as the slope and $3$ as the intercept."
    ]
  },
  "q:9c3f9747c9a1f1e1": {
    "options": [
      "$14$",
      "$18$",
      "$42$",
      "$54$"
    ],
    "explanations": [
      "$14$ is the slower cyclist's speed in miles per hour, not a distance.",
      "$18$ is the faster cyclist's speed in miles per hour. Distance in $3$ hours is $3(18) = 54$ miles.",
      "$42$ is $3(14)$, the distance ridden by the slower cyclist; the two distances sum to $96$.",
      "If the slower speed is $r$, then $3r + 3(r + 4) = 96$ gives $6r = 84$, so $r = 14$. The faster cyclist rides at $18$ mph for $3$ hours: $54$ miles."
    ]
  },
  "q:597074330e606bb0": {
    "options": [
      "6",
      "1",
      "4",
      "2"
    ],
    "explanations": [
      "$6$ pencils and $4$ pens cost $18 + 20 = \\$38$, not $\\$42$, so this fails the price condition.",
      "$1$ pencil and $9$ pens cost $3 + 45 = \\$48$, too much for the $\\$42$ total.",
      "With $p + n = 10$ and $3p + 5n = 42$, substitute $n = 10 - p$: $3p + 50 - 5p = 42$, so $2p = 8$ and $p = 4$ pencils (check: $12 + 30 = 42$).",
      "$2$ pencils and $8$ pens cost $6 + 40 = \\$46$, not $\\$42$, so this fails the price condition."
    ]
  },
  "q:cdef9a2bf87d765a": {
    "options": [
      "An open interval from $4$ to $6$",
      "Two rays: $x < 4$ or $x > 6$",
      "A single point at $x = 5$",
      "A closed interval from $4$ to $6$"
    ],
    "explanations": [
      "$|x - 5| < 1$ means $x$ is less than $1$ unit from $5$: $4 < x < 6$. The strict inequality makes the endpoints open.",
      "Two rays $x < 4$ or $x > 6$ is the solution to $|x - 5| > 1$, the values far from $5$.",
      "A single point would be the solution to $|x - 5| = 0$. Here any $x$ within $1$ of $5$ works, an entire interval.",
      "A closed interval would include $4$ and $6$, but at those values $|x - 5| = 1$, which is not less than $1$. The strict inequality excludes them."
    ]
  },
  "q:b4ebd68c8dcd3100": {
    "options": [
      "$6$",
      "$8$",
      "$9$",
      "$20$"
    ],
    "explanations": [
      "$6$ is the minimum required over the remaining two weeks ($3$ per week), the floor rather than the ceiling.",
      "$8$ treats the cap as \"fewer than $20$\" instead of \"no more than $20$.\" Twenty visits in total is allowed, so $9$ more are permitted.",
      "The monthly cap allows $20 - 11 = 9$ more visits. The weekly minimum of $3$ requires at least $6$, which does not reduce the maximum, so the greatest is $9$.",
      "$20$ is the monthly cap itself and ignores the $11$ visits already made; $31$ in total would exceed the cap."
    ]
  },
  "q:c85e075c312b7561": {
    "options": [
      "Outside both lines",
      "Below both lines",
      "Between the lines",
      "Above both lines"
    ],
    "explanations": [
      "\"Outside both lines\" does not describe the region; each $\\le$ inequality selects the side below its line, and the solution is where those two regions overlap.",
      "Each inequality has the form $y \\le$ an expression, so each selects the half-plane below its line. The solution region is where both hold: below both lines.",
      "Between the lines would correspond to being above one line and below the other, like $y \\ge 2x + 1$ with $y \\le -x + 5$.",
      "Above both lines would be the solution to $y \\ge 2x + 1$ and $y \\ge -x + 5$. The given inequalities use $\\le$."
    ]
  },
  "q:db850ad3debe1b6c": {
    "options": [
      "3",
      "-3",
      "-4",
      "2"
    ],
    "explanations": [
      "$3$ fails: subtracting the equations gives $2x = 4$, so $x = 2$. With $x = 3$, the first equation gives $y = 2.5$ and the second $y = 3.5$.",
      "$-3$ comes from a sign error; $14 - 10 = 4$ is positive, so $x$ is positive $2$.",
      "$-4$ could come from $10 - 14$ with the coefficient dropped. Subtracting gives $2x = 4$, so $x = 2$.",
      "Subtracting the second equation from the first eliminates $y$: $2x = 14 - 10 = 4$, so $x = 2$ (and $y = 4$)."
    ]
  },
  "q:a53b30cd0ed5862f": {
    "options": [
      "$58n$",
      "$50n + 8$",
      "$50 + 8n$",
      "$8(50 + n)$"
    ],
    "explanations": [
      "$58n$ charges $\\$58$ for every class, as if the one-time fee were paid each time. The $\\$50$ is paid only once.",
      "$50n + 8$ reverses the roles: it charges $\\$50$ per class and a one-time $\\$8$.",
      "The one-time fee of $\\$50$ is added once; each of the $n$ classes adds $\\$8$, for $8n$. Total: $50 + 8n$.",
      "$8(50 + n) = 400 + 8n$ multiplies the one-time fee by $8$, which has no meaning in this situation."
    ]
  },
  "q:b861bafcd4438cb0": {
    "options": [
      "42",
      "32",
      "37",
      "35"
    ],
    "explanations": [
      "$42$ adds $2$ instead of subtracting it: $37 + 2$. To isolate $5x$, subtract the $2$.",
      "$32$ subtracts $5$ instead of $2$, confusing the coefficient with the constant.",
      "$37$ is the value of $5x + 2$, not $5x$. The $2$ still has to be removed.",
      "Subtract $2$ from both sides: $5x = 37 - 2 = 35$. There is no need to solve for $x$ itself."
    ]
  },
  "q:3669caa30050b627": {
    "options": [
      "$6x + 2y \\le 55$ and $x + y \\ge 9$",
      "$2x + 6y \\le 55$ and $x + y \\ge 9$",
      "$2x + 6y \\ge 55$ and $x + y \\ge 9$",
      "$2x + 6y \\le 55$ and $x + y \\le 9$"
    ],
    "explanations": [
      "$6x + 2y \\le 55$ pairs the prices with the wrong items: notebooks ($x$) cost $\\$2$ and pens ($y$) cost $\\$6$.",
      "Cost is $2x + 6y$, and \"at most $\\$55$\" gives $2x + 6y \\le 55$. Items total $x + y$, and \"at least $9$\" gives $x + y \\ge 9$.",
      "$2x + 6y \\ge 55$ says the student must spend at least $\\$55$, reversing the budget constraint.",
      "$x + y \\le 9$ caps the items at $9$, but \"at least $9$\" is a minimum, so the direction is reversed."
    ]
  },
  "q:9eb3e6905952fd03": {
    "options": [
      "16",
      "18",
      "22",
      "17"
    ],
    "explanations": [
      "Let the integers be $x, x + 1, \\ldots, x + 5$. Their sum is $6x + 15 = 111$, so $6x = 96$ and $x = 16$. Check: $16 + 17 + 18 + 19 + 20 + 21 = 111$.",
      "$18$ is close to the average $111 \\div 6 = 18.5$, a middle value, not the smallest. Starting at $18$ gives a sum of $123$.",
      "$22$ comes from adding $15$ instead of subtracting it, $(111 + 21) \\div 6$. Starting at $22$ gives a sum of $147$.",
      "$17$ is one too high: $17 + 18 + 19 + 20 + 21 + 22 = 117$, not $111$."
    ]
  },
  "q:9a5b7eccac1339ca": {
    "options": [
      "$12a + 10c \\le 53$ where $a - c = 6$",
      "$12a + 10c \\le 53$ where $a + c = 6$",
      "$10a + 12c \\le 53$ where $a + c = 6$",
      "$12a + 10c \\ge 53$ where $a + c = 6$"
    ],
    "explanations": [
      "$a - c = 6$ says the adults outnumber the children by $6$, but $6$ is the total number of people, so the count equation is $a + c = 6$.",
      "The group totals $6$ people, so $a + c = 6$. Spending is $12a + 10c$ and cannot exceed $\\$53$: $12a + 10c \\le 53$.",
      "$10a + 12c$ swaps the prices: adults cost $\\$12$ and children $\\$10$.",
      "$12a + 10c \\ge 53$ requires spending at least $\\$53$, reversing the budget limit."
    ]
  },
  "q:90b853054a8094a3": {
    "options": [
      "6",
      "4",
      "10",
      "8"
    ],
    "explanations": [
      "$6$ dimes and $5$ nickels are worth $60 + 25 = 85$ cents, not $95$.",
      "$4$ dimes and $7$ nickels are worth $40 + 35 = 75$ cents, not $95$.",
      "$10$ dimes and $1$ nickel are worth $100 + 5 = 105$ cents, too much.",
      "With $n + d = 11$ and $5n + 10d = 95$, substitute $n = 11 - d$: $55 + 5d = 95$, so $d = 8$ dimes (check: $80 + 15 = 95$)."
    ]
  },
  "q:1cd14d63974963a8": {
    "options": [
      "$47$",
      "$91$",
      "$92$",
      "$93$"
    ],
    "explanations": [
      "$47$ comes from mixing approaches, such as using denominator $6$ and then halving. Substituting $47$ gives an average of $\\frac{447 + 94}{7} \\approx 77$, far below $90$.",
      "$91$ rounds $91.5$ down. With $91$, the average is $\\frac{447 + 182}{7} \\approx 89.86$, just under $90$.",
      "The five tests sum to $447$. Need $\\frac{447 + 2x}{7} \\ge 90$, so $2x \\ge 183$ and $x \\ge 91.5$. The least whole score is $92$.",
      "$93$ comes from ignoring the double weight and solving $\\frac{447 + x}{6} \\ge 90$. With the correct weighting, $92$ already suffices."
    ]
  },
  "q:e93ba8b74a5db0a7": {
    "options": [
      "2",
      "6",
      "9",
      "8"
    ],
    "explanations": [
      "$2$ does not match $2(4) + 0$. Setting $x - 4 = -x + 4$ gives $x = 4$ and $y = 0$, so $2a + b = 8$.",
      "$6$ would need, say, $a = 3$, but the lines meet where $x - 4 = -x + 4$, which is $x = 4$, with $b = 0$.",
      "$9$ is not $2(4) + 0$; it might come from mistaking $b$ for $1$. At $x = 4$, $y = 4 - 4 = 0$.",
      "Set the expressions equal: $x - 4 = -x + 4$, so $2x = 8$, $x = 4$, and $y = 0$. Then $2a + b = 2(4) + 0 = 8$."
    ]
  },
  "q:79b1202553acb89a": {
    "options": [
      "No solution",
      "Infinitely many solutions",
      "Exactly one solution, $x = \\frac{6}{55}$",
      "Exactly one solution, $x = -\\frac{2}{3}$"
    ],
    "explanations": [
      "Multiplying by $12$: $3x + 2(x - 3) = 5x - 1$, so $5x - 6 = 5x - 1$. Subtracting $5x$ leaves $-6 = -1$, which is false, so there is no solution.",
      "Infinitely many solutions would require the constants to match after the $x$-terms cancel, giving an identity like $-6 = -6$. Here $-6 \\ne -1$.",
      "$x = \\frac{6}{55}$ comes from multiplying the right side by $12$ twice, giving $5x - 6 = 60x - 12$.",
      "$x = -\\frac{2}{3}$ comes from dropping the denominators term by term, $x + (x - 3) = 5x - 1$, instead of multiplying every term by $12$."
    ]
  },
  "q:1a598d6264e6f659": {
    "options": [
      "10",
      "8",
      "9",
      "7"
    ],
    "explanations": [
      "$10$ fails the check: $-2(10) = -20$, not $-14$. Dividing $-14$ by $-2$ gives $7$.",
      "$8$ fails the check: $-2(8) = -16$, not $-14$. Dividing $-14$ by $-2$ gives $7$.",
      "$9$ fails the check: $-2(9) = -18$, not $-14$. Dividing $-14$ by $-2$ gives $7$.",
      "Divide both sides by $-2$: $x = \\frac{-14}{-2} = 7$. A negative divided by a negative is positive. Check: $-2(7) = -14$."
    ]
  },
  "q:334fce0982419464": {
    "options": [
      "Define a variable, write the inequality, solve, check",
      "Use an equation instead and never check the answer",
      "Guess and check numbers until one seems to work",
      "Multiply both sides by $-1$ before doing anything else"
    ],
    "explanations": [
      "Define a variable, translate the words into an inequality (watching for \"at least\" and \"at most\"), solve it, and check the answer against the context, including the inequality direction.",
      "Word problems with \"at most\" or \"at least\" describe a range of values, so an equation loses information, and skipping the check misses direction and rounding errors.",
      "Guess and check is slow and gives no guarantee of finding the boundary value or the full range of solutions; writing the inequality does.",
      "Multiplying by $-1$ is never a required first step, and it flips the inequality direction, which introduces errors if done without reason."
    ]
  },
  "q:9c17b2ccacb63cab": {
    "options": [
      "No line",
      "Dashed line",
      "Solid line",
      "Double line"
    ],
    "explanations": [
      "The boundary must be drawn to separate solutions from non-solutions; it is simply dashed to show it is excluded.",
      "The inequality is strict ($<$), so points on $y = 4x + 6$ are not solutions. A dashed line shows the boundary is excluded.",
      "A solid line is used for $\\le$ or $\\ge$, where the boundary points are solutions. A strict $<$ excludes them.",
      "A double line is not a graphing convention for inequalities; boundaries are either solid or dashed."
    ]
  },
  "q:bac3ae65cb12efb2": {
    "options": [
      "$x > -12$",
      "$x > 2$",
      "$x < -12$",
      "$x < 2$"
    ],
    "explanations": [
      "$x > -12$ flips the direction, but subtracting $7$ from both sides never changes the inequality sign. Only multiplying or dividing by a negative does.",
      "$x > 2$ both flips the sign and adds $7$ to $-5$ instead of subtracting. Check: $x = 3$ gives $10 < -5$, which is false.",
      "Subtract $7$ from both sides: $x < -5 - 7 = -12$. Subtraction does not reverse the inequality.",
      "$x < 2$ adds $7$ to $-5$ instead of subtracting it. Check: $x = 0$ gives $7 < -5$, which is false."
    ]
  },
  "q:318515c4b77fb4c5": {
    "options": [
      "28",
      "20",
      "11",
      "21"
    ],
    "explanations": [
      "$28$ is $4a$ with $a = 7$, one multiple too many. Adding the equations gives $3a = 21$ directly.",
      "$20$ is $2 \\times 10$ or a miscount; the sum of the right sides is $10 + 11 = 21$, which equals $3a$.",
      "$11$ is the right side of the second equation alone. Adding both equations eliminates $b$ and gives $3a = 21$.",
      "Adding the equations eliminates $b$: $(a + b) + (2a - b) = 3a$ and $10 + 11 = 21$, so $3a = 21$."
    ]
  },
  "q:e9e9ae2c0563a024": {
    "options": [
      "Infinitely many solutions",
      "Exactly one solution",
      "Exactly two solutions",
      "No solution"
    ],
    "explanations": [
      "Infinitely many solutions requires identical lines, with the same intercept too. These intercepts differ ($9$ versus $12$).",
      "Exactly one solution needs different slopes so the lines cross. Both slopes are $3$, so the lines never meet.",
      "Two straight lines cannot intersect at exactly two points; a linear system has one, none, or infinitely many solutions.",
      "Both lines have slope $3$ but different $y$-intercepts ($9 \\ne 12$), so they are parallel and never intersect: no solution."
    ]
  }
}

export default ENTRIES
