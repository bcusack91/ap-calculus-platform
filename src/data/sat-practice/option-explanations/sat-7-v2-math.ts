import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:2a71147726c0ff03": {
    "options": [
      "4.86",
      "8.25",
      "25.63",
      "26.25"
    ],
    "explanations": [
      "Dividing both withdrawal counts by the grand total $1{,}050$ gives $10.00$ percent and $5.14$ percent, a difference of $4.86$. That measures each cell as a share of all students, not as a rate within its own format, which is the wrong denominator.",
      "The online rate is $105/400 = 26.25$ percent and the hybrid rate is $54/300 = 18.00$ percent, each using its own format total as the denominator. The difference is $26.25 - 18.00 = 8.25$ percentage points.",
      "Dividing by the Withdrew column total $199$ gives $52.76$ percent and $27.14$ percent, a difference of $25.63$. That denominator answers the reversed question, what share of withdrawals came from each format, not the withdrawal rate within a format.",
      "$26.25$ is the online withdrawal rate by itself, $105/400$. The question asks how far that rate exceeds the hybrid rate, so the hybrid rate of $18.00$ percent still has to be subtracted."
    ]
  },
  "q:4ebc2b1dc70005d7": {
    "options": [
      "$-13$",
      "$6$",
      "$11$",
      "$15$"
    ],
    "explanations": [
      "$-13$ comes from a sign slip that makes the matching coefficient $p = -6$, then $2(-6) - 1 = -13$. Distributing $\\frac{3}{4}(8x - 12)$ gives $+6x$, so $p$ must be positive $6$.",
      "$6$ is the value of $p$ itself, the intermediate result. The question asks for $2p - 1$, so one more step is needed: $2(6) - 1 = 11$.",
      "Distributing gives $6x - 9 = px + 5$. A linear equation has no solution when the $x$-coefficients match but the constants differ, so $p = 6$ (and $-9 \\ne 5$ confirms it). Then $2p - 1 = 2(6) - 1 = 11$.",
      "$15$ comes from skipping the $\\frac{3}{4}$ and matching $p$ to the $8$ in $8x$, giving $2(8) - 1 = 15$. The left side must be distributed first, which makes the $x$-coefficient $6$, not $8$."
    ]
  },
  "q:903bb88d48cd9c27": {
    "options": [
      "$(2, 1)$",
      "$(1, -1)$",
      "$(-1, 3)$",
      "$(0, 5)$"
    ],
    "explanations": [
      "Substituting $(2, 1)$: $1 < 2 + 3 = 5$ is true and $1 > -2 + 1 = -1$ is true. Both strict inequalities hold, so this point is in the solution region.",
      "$(1, -1)$ satisfies $y < x + 3$ since $-1 < 4$, but it fails the second inequality: $-1 > -1 + 1 = 0$ is false. A point must satisfy both inequalities, not just one.",
      "$(-1, 3)$ satisfies $y > -x + 1$ since $3 > 2$, but $y < x + 3$ becomes $3 < 2$, which is false. The point lies above the line $y = x + 3$, outside the region.",
      "$(0, 5)$ gives $5 < 0 + 3 = 3$, which is false, so it fails $y < x + 3$. It does satisfy $5 > 1$, but checking only the second inequality is the trap here."
    ]
  },
  "q:e962fbef3ff79bf9": {
    "options": [
      "10",
      "2",
      "5",
      "8"
    ],
    "explanations": [
      "A height of $10$ gives $\\pi(6)^2(10) = 360\\pi$, double the stated volume. This comes from dividing $180$ by $18$, treating $3r$ rather than $r^2 = 36$ as the base factor.",
      "A height of $2$ gives $\\pi(36)(2) = 72\\pi$, far less than $180\\pi$. It would require a base area of $90\\pi$, which does not match a radius of $6$.",
      "Use $V = \\pi r^2 h$: $180\\pi = \\pi(6)^2 h = 36\\pi h$. Dividing both sides by $36\\pi$ gives $h = 180/36 = 5$ units.",
      "A height of $8$ gives $\\pi(36)(8) = 288\\pi$, not $180\\pi$. The base area is fixed at $36\\pi$, so only $h = 5$ produces the stated volume."
    ]
  },
  "q:94d01486427df6ff": {
    "options": [
      "5",
      "7",
      "1",
      "6"
    ],
    "explanations": [
      "Set up $49 + 3n = 64$. Subtracting the monthly charge leaves $3n = 15$, and dividing by the per-text rate gives $n = 5$ messages. Check: $49 + 15 = 64$.",
      "Seven messages would cost $49 + 3(7) = 70$ dollars, which exceeds the $\\$64$ bill. This value overshoots because it adds $21$ rather than the $15$ in texts that remains after the base charge.",
      "One message would make the bill $49 + 3 = 52$ dollars, not $64$. This comes from mistaking the $\\$15$ left over after the base charge for a count of texts, then dividing incorrectly.",
      "Six messages would cost $49 + 18 = 67$ dollars, three dollars over the bill. Only $15$ dollars is available for texts, and $15/3 = 5$, not $6$."
    ]
  },
  "q:190b1c27be4e217d": {
    "options": [
      "159",
      "120",
      "125",
      "118"
    ],
    "explanations": [
      "$159$ does not correspond to a $20\\%$ increase on $\\$100$; it would be a $59\\%$ increase. The increase is $100 \\times 0.20 = 20$, so the new price must be $120$.",
      "A $20\\%$ increase on $\\$100$ adds $100 \\times 0.20 = 20$ dollars, so the new price is $100 + 20 = 120$. Equivalently, multiply by $1.20$.",
      "$125$ is the result of a $25\\%$ increase, not $20\\%$. Twenty percent of $100$ is exactly $20$, so the price rises to $120$.",
      "$118$ is an $18\\%$ increase, not $20\\%$. Because the original is $\\$100$, the percent increase translates directly into dollars: $20\\%$ means $\\$20$ more."
    ]
  },
  "q:3a4da2f09d12af20": {
    "options": [
      "53",
      "78",
      "69",
      "76"
    ],
    "explanations": [
      "$53$ would need $g$ of some input to equal $53$, meaning $4x + 5 = 53$ or $x = 12$, but $f(4) = 16$, not $12$. The inner value must be $4^2 = 16$.",
      "$78$ is not $g(16)$; $4(16) + 5 = 69$. This value overshoots by $9$, consistent with adding $5$ twice or mis-multiplying. Compute the inner function first, then apply $g$ exactly once.",
      "$(g \\circ f)(4)$ means $g(f(4))$. First $f(4) = 4^2 = 16$, then $g(16) = 4(16) + 5 = 64 + 5 = 69$.",
      "$76 = 4(16) + 12$ comes from adding the wrong constant after multiplying. The rule for $g$ adds $5$, so $4(16) + 5 = 69$."
    ]
  },
  "q:7f204d50a2307034": {
    "options": [
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "explanations": [
      "$5$ is $20 \\div 4$, applying the first-hour rate of $\\$4$ to every hour. Only the first hour costs $\\$4$; each additional hour costs $\\$2.50$, so the money lasts longer than $5$ hours.",
      "$6$ is the number of additional hours after the first, the intermediate quantity $h - 1$ in $2.50(h - 1) \\le 16$. The question asks for total hours, which includes the first hour: $6 + 1 = 7$.",
      "Total cost is $4 + 2.50(h - 1) \\le 20$, so $2.50(h - 1) \\le 16$ and $h - 1 \\le 6.4$, giving $h \\le 7.4$. The greatest whole number is $7$ hours, costing $4 + 2.50(6) = \\$19$.",
      "$8$ rounds $7.4$ up instead of down. Eight hours would cost $4 + 2.50(7) = \\$21.50$, more than the $\\$20$ the driver has."
    ]
  },
  "q:3aa65ac9549256c3": {
    "options": [
      "It lies 68 thousand dollars above the predicted value, and removing it would decrease the slope.",
      "It lies 68 thousand dollars below the predicted value, and removing it would decrease the slope.",
      "It lies 195 thousand dollars below the predicted value, and removing it would increase the slope.",
      "It lies 68 thousand dollars below the predicted value, and removing it would increase the slope."
    ],
    "explanations": [
      "The predicted revenue at $40$ employees is $6.2(40) + 15 = 263$ thousand dollars, and the actual $195$ is below that, not above. This option has the magnitude right but the wrong side of the line.",
      "The $68$ thousand below the line is correct, but the leverage effect is reversed. A far-right point sitting below the line pulls the slope down; removing it releases that pull and the slope rises.",
      "$195$ is the branch's actual revenue, not its residual. The residual is actual minus predicted, $195 - 263 = -68$, so the gap is $68$ thousand dollars, not $195$.",
      "Predicted revenue is $6.2(40) + 15 = 263$, so the residual is $195 - 263 = -68$: the branch is $68$ thousand below the line. As the largest-$x$ point below the line, it drags the slope down, so removing it increases the slope."
    ]
  },
  "q:8cece7bc7186985c": {
    "options": [
      "$0.8$",
      "$10$",
      "$13\\frac{1}{3}$",
      "$450$"
    ],
    "explanations": [
      "$0.8$ comes from subtracting the setup fee correctly to get $\\$36$ but then dividing by the page rate $45$ instead of the cost per minute $3.6$. Dividing dollars by pages per minute mixes units.",
      "Pages after $t$ minutes are $45t$, so cost in terms of time is $0.08(45t) + 12 = 3.6t + 12$. Setting $3.6t + 12 = 48$ gives $3.6t = 36$ and $t = 10$ minutes.",
      "$13\\frac{1}{3}$ comes from ignoring the $\\$12$ setup fee and solving $3.6t = 48$. The fee is part of the $\\$48$ and must be subtracted first, leaving $\\$36$ for printing time.",
      "$450$ is the number of pages, from solving $0.08p + 12 = 48$. The question asks for minutes, so one more step divides by $45$ pages per minute: $450/45 = 10$."
    ]
  },
  "q:ba297e4e835151eb": {
    "options": [
      "1",
      "5",
      "-1",
      "-3"
    ],
    "explanations": [
      "Substitute $x = 1$ directly: $p(1) = 1^2 + 4(1) - 4 = 1 + 4 - 4 = 1$.",
      "$5$ is $1 + 4$, which drops the constant term $-4$. All three terms of the polynomial must be evaluated and combined.",
      "$-1$ comes from treating $1^2$ as $-1$, as if the squared term were negative: $-1 + 4 - 4 = -1$. The square of $1$ is $+1$.",
      "$-3$ is $1 - 4$, which skips the middle term $4x$. At $x = 1$ that term contributes $+4$, bringing the total to $1$."
    ]
  },
  "q:602a481fe27f6c67": {
    "options": [
      "24",
      "20",
      "29",
      "22"
    ],
    "explanations": [
      "For a monic quadratic the constant term is the product of the roots, so $c = 4 \\times 6 = 24$. Check: $(x - 4)(x - 6) = x^2 - 10x + 24$, matching the $-10x$ term.",
      "$20$ is double the sum of the roots, $2(4 + 6)$, mixing up which coefficient the roots control. The sum $10$ matches the middle coefficient; the constant must be the product, $24$.",
      "$29$ is not the product of $4$ and $6$. Substituting $x = 4$ gives $16 - 40 + 29 = 5 \\ne 0$, so $4$ would not be a root.",
      "$22$ fails the root check: at $x = 6$, $36 - 60 + 22 = -2 \\ne 0$. The constant must equal the product of the roots, which is $24$."
    ]
  },
  "q:8e00c34a8aa16c6b": {
    "options": [
      "$-9$",
      "$-3$",
      "$9$",
      "$36$"
    ],
    "explanations": [
      "For no solution the coefficient pairs must be proportional while the constants are not. The $y$-coefficients give the factor $12/(-4) = -3$, so $a = 3(-3) = -9$. The constants $9(-3) = -27 \\ne 5$ confirm the lines are distinct.",
      "$-3$ is the scale factor between the two equations, $12 \\div (-4)$, an intermediate value. The question asks for $a$, which is $3$ times that factor: $-9$.",
      "$9$ has the right magnitude but ignores the sign of $-4$. Multiplying the first equation by $+3$ would give $-12y$, not $+12y$, so the factor must be $-3$ and $a = -9$.",
      "$36$ is $3 \\times 12$, multiplying the two known coefficients instead of finding the proportion between the equations. Proportionality requires $a/3 = 12/(-4)$, so $a = -9$."
    ]
  },
  "q:2ce90ac4bbff6b90": {
    "options": [
      "$(3, 1)$",
      "$(2, 3)$",
      "$(1, 3)$",
      "$(3, 3)$"
    ],
    "explanations": [
      "$(3, 1)$ gives $(3 + 2)^2 + 1^2 = 25 + 1 = 26$, not $25$, so it lies just outside the circle.",
      "Substitute $(2, 3)$: $(2 + 2)^2 + 3^2 = 16 + 9 = 25$, exactly the right side, so the point is on the circle.",
      "$(1, 3)$ gives $(1 + 2)^2 + 3^2 = 9 + 9 = 18 < 25$, so it lies inside the circle, not on it.",
      "$(3, 3)$ gives $(3 + 2)^2 + 3^2 = 25 + 9 = 34 > 25$, so it lies outside the circle. Note the center is $(-2, 0)$, since the equation has $x + 2$."
    ]
  },
  "q:8a9eaf553fe677e2": {
    "options": [
      "$3$",
      "$4$",
      "$-8$",
      "$8$"
    ],
    "explanations": [
      "$3$ comes from skipping the base conversion and setting the exponents $2x - 1 = x + 2$ equal directly. The bases $9$ and $27$ differ, so they must first be written as powers of $3$.",
      "$4$ converts only the left side, solving $4x - 2 = x + 2$. The right side must also be converted: $27^{x+2} = 3^{3x+6}$, giving $4x - 2 = 3x + 6$.",
      "$-8$ is a sign error when isolating $x$ in $4x - 2 = 3x + 6$. Subtracting $3x$ and adding $2$ gives $x = +8$.",
      "Write both sides in base $3$: $9^{2x-1} = 3^{4x-2}$ and $27^{x+2} = 3^{3x+6}$. Equal bases force equal exponents: $4x - 2 = 3x + 6$, so $x = 8$."
    ]
  },
  "q:d95f701dfe563764": {
    "options": [
      "46",
      "85",
      "86",
      "65"
    ],
    "explanations": [
      "$46$ comes from dividing the change by the new value, $65/141 \\approx 0.46$. Percent increase always uses the original value as the denominator.",
      "$85$ truncates $65/76 = 0.8553\\ldots$ instead of rounding. To the nearest whole percent this is $86$, not $85$.",
      "Change is $141 - 76 = 65$, and percent increase divides by the original: $65/76 \\approx 0.855$, which rounds to $86\\%$.",
      "$65$ is the raw change $141 - 76$, not a percent. It still has to be divided by the original value $76$ and converted to a percent."
    ]
  },
  "q:24b9df6579065ce7": {
    "options": [
      "$720$",
      "$960$",
      "$2{,}160$",
      "$2{,}880$"
    ],
    "explanations": [
      "The extra work is $\\frac{3}{4} - \\frac{1}{3} = \\frac{5}{12}$ of the lot, so $\\frac{5}{12}A = 1200$ and $A = 2880$. Cleared is $\\frac{3}{4}(2880) = 2160$, leaving $2880 - 2160 = 720$ square feet.",
      "$960$ is $\\frac{1}{3}$ of the $2{,}880$ square-foot lot, the amount cleared before the additional work. The uncleared part after reaching $\\frac{3}{4}$ is $\\frac{1}{4}$ of the lot, $720$.",
      "$2{,}160$ is the cleared portion, $\\frac{3}{4}$ of $2{,}880$. The question asks for what remains uncleared, which is the other $\\frac{1}{4}$: $720$ square feet.",
      "$2{,}880$ is the total area of the lot, an intermediate value. The uncleared amount is $\\frac{1}{4}$ of that, $720$ square feet."
    ]
  },
  "q:ed8f50f012aa535a": {
    "options": [
      "$-4$",
      "$-2$",
      "$3$",
      "$4$"
    ],
    "explanations": [
      "The product of the zeros is $12$, so $2(-3)r = 12$ gives the third zero $r = -2$. Then $b$ is the sum of pairwise products: $(2)(-3) + (2)(-2) + (-3)(-2) = -6 - 4 + 6 = -4$.",
      "$-2$ is the third zero, found from the product of zeros, an intermediate value. The coefficient $b$ comes from the pairwise products of all three zeros, which sum to $-4$.",
      "$3$ is the value of $a$, not $b$: the sum of zeros is $2 - 3 - 2 = -3 = -a$, so $a = 3$. The question asks for $b$, the sum of pairwise products.",
      "$4$ is a sign error in the pairwise sum, such as $-6 + 4 + 6$. With the third zero $-2$, the products are $-6$, $-4$, and $+6$, totaling $-4$."
    ]
  },
  "q:51635cdc2ae53c7d": {
    "options": [
      "$150$",
      "$2{,}700$",
      "$3{,}600$",
      "$5{,}040$"
    ],
    "explanations": [
      "$150$ is the number of minutes the machine runs: the cost rate is $24 \\times 0.75 \\times 1.40 = \\$25.20$ per minute and $3780/25.20 = 150$. The question asks for bottles, so multiply by $24$: $3{,}600$.",
      "$2{,}700$ is the number of liters purchased, $3780 \\div 1.40$. Each bottle holds $0.75$ liter, so one more division gives $2700/0.75 = 3600$ bottles.",
      "Each bottle uses $0.75$ liter at $\\$1.40$ per liter, costing $\\$1.05$. Then $3780 \\div 1.05 = 3600$ bottles. Check: $3600 \\times 0.75 = 2700$ liters, and $2700 \\times 1.40 = 3780$.",
      "$5{,}040$ divides the budget by liters per bottle, $3780 \\div 0.75$, mixing dollars with liters. The budget must be divided by dollars per bottle, $\\$1.05$."
    ]
  },
  "q:9009988a1d327f2a": {
    "options": [
      "$10$",
      "$11$",
      "$12$",
      "$13$"
    ],
    "explanations": [
      "At $10$ years Tree A is $2(1.15)^{10} \\approx 8.09$ m while Tree B is $5 + 4 = 9.0$ m, so A is still shorter. Stopping here misjudges the comparison.",
      "At $11$ years Tree A is about $9.30$ m and Tree B is $9.4$ m, so A is still slightly shorter. The gap is tiny, so rounding or stopping one year early lands here.",
      "Compare $2(1.15)^n$ with $5 + 0.4n$. At $n = 11$: $9.30$ versus $9.4$, A still shorter. At $n = 12$: $2(1.15)^{12} \\approx 10.70$ versus $9.8$, so A is first taller after $12$ years.",
      "$13$ comes from labeling the current heights as year $1$ instead of year $0$, which shifts every count by one. A already exceeds B at $n = 12$ ($10.70$ m versus $9.8$ m)."
    ]
  },
  "q:926441e9ca074625": {
    "options": [
      "4",
      "-4",
      "-8",
      "8"
    ],
    "explanations": [
      "$4$ is the single value that makes $g(x) = 0$, not the solutions of $f(g(x)) = 0$. The composition is zero when $g(x) = \\pm 4$, giving $x = 6$ and $x = 2$, whose sum is $8$.",
      "$-4$ has the wrong sign and is only one of the roots of $f$, not a sum of $x$-values. Solving $2x - 8 = -4$ gives $x = 2$, and $2x - 8 = 4$ gives $x = 6$; their sum is $8$.",
      "$-8$ is a sign error: the solutions $x = 6$ and $x = 2$ are both positive. Solving $2x - 8 = \\pm 4$ and adding gives $\\frac{12}{2} + \\frac{4}{2} = 8$, not $-8$.",
      "$f(g(x)) = (2x - 8)^2 - 16 = 0$ means $2x - 8 = \\pm 4$, so $x = 6$ or $x = 2$. The sum is $6 + 2 = 8$; the $\\pm 4$ terms cancel, leaving $16/2$."
    ]
  },
  "q:19d7aeba2013b5ea": {
    "options": [
      "0",
      "9",
      "1",
      "0.5"
    ],
    "explanations": [
      "$0$ assumes adding values only at the top leaves the median unchanged. But the middle position moves from between the 20th and 21st values to the 23rd, which crosses from the $8$-day group into the $9$-day group.",
      "$9$ is the new median itself, not the change. The question asks by how much the median increases, so subtract the old median $8$: the increase is $1$.",
      "Old cumulative counts $4, 10, 22, 32, 40$ put the 20th and 21st values at $8$, so the median is $8$. With $45$ stations the median is the 23rd value, which falls in positions $23$ to $32$ at $9$ days. Increase: $9 - 8 = 1$.",
      "$0.5$ comes from averaging the old and new medians, $(8 + 9)/2$ minus $8$, instead of subtracting them. The median moves from exactly $8$ to exactly $9$, a change of $1$."
    ]
  },
  "q:4ce7ffe9e55012ac": {
    "options": [
      "About 13.5 milliliters per minute",
      "About 225 milliliters per minute",
      "About 810 milliliters per minute",
      "About 0.225 milliliters per minute"
    ],
    "explanations": [
      "About $13.5$ keeps the number and only swaps the unit labels. Converting liters to milliliters multiplies by $1{,}000$ and converting hours to minutes divides by $60$, so the number changes to $225$.",
      "The slope is $13.5$ liters per hour. Convert: $13.5$ liters is $13{,}500$ milliliters, and one hour is $60$ minutes, so $13{,}500/60 = 225$ milliliters per minute.",
      "About $810$ is $13.5 \\times 60$, which multiplies by $60$ instead of dividing (a per-hour rate becomes smaller per minute) and never converts liters to milliliters.",
      "About $0.225$ divides $13.5$ by $60$ correctly but skips the liter-to-milliliter conversion, so it is actually $0.225$ liters per minute mislabeled as milliliters."
    ]
  },
  "q:0fd5cf193cebc139": {
    "options": [
      "30",
      "75",
      "80",
      "125"
    ],
    "explanations": [
      "$30$ subtracts $45$ from $75$, which itself came from scaling the area by the linear ratio $\\frac{5}{3}$ instead of its square. The correct whole-triangle area is $125$, so the quadrilateral is $80$.",
      "$75$ is $45 \\cdot \\frac{5}{3}$, applying the linear ratio $AD:AB = 3:5$ directly to areas. Areas of similar triangles scale by the square of the linear ratio, $\\frac{25}{9}$.",
      "$AD:DB = 3:2$ makes $AD:AB = 3:5$, so triangles $ADE$ and $ABC$ are similar with area ratio $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$. Then $[ABC] = 45 \\cdot \\frac{25}{9} = 125$ and $[DBCE] = 125 - 45 = 80$.",
      "$125$ is the area of the whole triangle $ABC$, an intermediate value. The quadrilateral $DBCE$ is what remains after removing triangle $ADE$: $125 - 45 = 80$."
    ]
  },
  "q:7c9801f53790eefd": {
    "options": [
      "$90$",
      "$10$",
      "$45$",
      "$180$"
    ],
    "explanations": [
      "Set $\\frac{45 + 4p}{p} \\le 4.5$. Since $p > 0$, multiplying by $p$ keeps the direction: $45 + 4p \\le 4.5p$, so $45 \\le 0.5p$ and $p \\ge 90$. The least such job is $90$ pages.",
      "$10$ is $45 \\div 4.5$, dividing the warm-up time by the target average and ignoring the $4$ seconds of printing per page. At $10$ pages the average is $(45 + 40)/10 = 8.5$ seconds.",
      "$45$ reuses the warm-up time in seconds as a page count, a units slip. At $45$ pages the average is $(45 + 180)/45 = 5$ seconds, still above $4.5$.",
      "$180$ comes from solving $45 \\le 0.25p$, treating $4.5 - 4$ as $0.25$ instead of $0.5$. A $180$-page job does meet the target, but it is not the least such number; $90$ already works."
    ]
  },
  "q:ae660d9fa36900ab": {
    "options": [
      "$150$",
      "$225$",
      "$270$",
      "$375$"
    ],
    "explanations": [
      "With $x + y = 600$ and $0.30x + 0.70y = 0.45(600) = 270$, substituting $x = 600 - y$ gives $180 + 0.40y = 270$, so $y = 225$ and $x = 375$. The difference is $375 - 225 = 150$ milliliters.",
      "$225$ is the volume of the $70$ percent solution alone, one of the two intermediate values. The question asks how many more milliliters of the $30$ percent solution are used, which is $375 - 225 = 150$.",
      "$270$ is the number of milliliters of pure acid in the final mixture, $0.45 \\times 600$. It is a step in setting up the equation, not the difference between the two solution volumes.",
      "$375$ is the volume of the $30$ percent solution alone, an intermediate value. The question asks for the difference between the two volumes, $375 - 225 = 150$."
    ]
  },
  "q:d23bff3c8787c696": {
    "options": [
      "$7$",
      "$14$",
      "$12$",
      "$16$"
    ],
    "explanations": [
      "$7$ is $2^3 - 1$, the factor left after pulling $2^n$ out of the numerator, but it forgets that dividing by $2^{n-1} = 2^n/2$ contributes another factor of $2$. The result is $7 \\cdot 2 = 14$.",
      "Factor the numerator: $2^{n+3} - 2^n = 2^n(8 - 1) = 7 \\cdot 2^n$. Dividing by $2^{n-1} = 2^n/2$ gives $7 \\cdot 2 = 14$, the same for every $n$.",
      "$12$ comes from $(8 - 2) \\cdot 2$, mis-simplifying $2^n$ as if it were a plain factor of $2$. Factoring correctly gives $2^n(8 - 1)$, and the $2^n$ cancels against the denominator.",
      "$16$ is $2^{n+3} \\div 2^{n-1} = 2^4$, which ignores the subtracted $2^n$ in the numerator. The subtraction reduces the factor from $8$ to $7$, so the quotient is $7 \\cdot 2 = 14$."
    ]
  },
  "q:c6b04dcc23b81aaa": {
    "options": [
      "$(2,2)$",
      "$(9,3)$",
      "$(1,-1)$",
      "$(3,1)$"
    ],
    "explanations": [
      "Completing the square gives center $(6, -1)$ and radius $5$. The point $(2, 2)$ is $\\sqrt{16 + 9} = 5$ from the center, so it lies exactly on the circle, not in its interior.",
      "$(9, 3)$ is $\\sqrt{9 + 16} = 5$ from the center $(6, -1)$, which equals the radius. Points at distance exactly $5$ are on the circle rather than inside it.",
      "$(1, -1)$ is $\\sqrt{25 + 0} = 5$ from the center $(6, -1)$, so it sits on the circle itself. Interior points must be strictly closer than the radius $5$.",
      "Rewrite as $(x - 6)^2 + (y + 1)^2 = 25$: center $(6, -1)$, radius $5$. The point $(3, 1)$ is $\\sqrt{9 + 4} = \\sqrt{13} \\approx 3.6$ from the center, less than $5$, so it is interior."
    ]
  },
  "q:9d90b87e83885742": {
    "options": [
      "11",
      "12",
      "2",
      "6"
    ],
    "explanations": [
      "$11$ is $44 \\div 4$, dividing the whole bill by the child price as if no adults attended. The two adults account for $\\$20$ first, leaving only $\\$24$ for children.",
      "$12$ counts children as if each cost $\\$2$ after the adults, $24 \\div 2$, or doubles the correct answer. At $\\$4$ each, the $\\$24$ remaining buys $6$ child tickets.",
      "$2$ is the number of adults given in the problem, not the number of children. Two adults cost $\\$20$; the remaining $\\$24$ divided by $\\$4$ gives $6$ children.",
      "Two adults cost $10(2) = 20$ dollars, so $20 + 4c = 44$. Subtracting gives $4c = 24$, and dividing by the child price gives $c = 6$ children."
    ]
  },
  "q:66dc2db81d2a453f": {
    "options": [
      "55%",
      "53%",
      "57%",
      "59%"
    ],
    "explanations": [
      "$55\\%$ is the sample estimate itself, the center of the plausible range. The margin of error extends the plausible values $2$ points in each direction, so the greatest plausible value is higher.",
      "$53\\%$ is $55 - 2$, the least plausible value in the range. The question asks for the greatest, which adds the margin instead of subtracting it.",
      "The margin of error gives a plausible range of $55 \\pm 2$, from $53\\%$ to $57\\%$. The greatest plausible value is the upper end, $57\\%$.",
      "$59\\%$ adds twice the margin of error, $55 + 4$. The margin of $2$ percentage points is applied once in each direction, so the range tops out at $57\\%$."
    ]
  },
  "q:f599e8f873e7eab7": {
    "options": [
      "1",
      "7",
      "3",
      "10"
    ],
    "explanations": [
      "An exponent of $1$ would make the expression just $2$, but $(2^5)^2 = 32^2 = 1024$, a far larger number. Raising a power to a power multiplies the exponents.",
      "$7$ is $5 + 2$, adding the exponents. Addition applies when multiplying powers with the same base, such as $2^5 \\cdot 2^2$. A power of a power multiplies: $5 \\times 2 = 10$.",
      "$3$ is $5 - 2$, subtracting the exponents as if dividing powers. Here the power is raised to another power, so the exponents are multiplied, giving $10$.",
      "By the power rule, $(a^m)^n = a^{mn}$, so $(2^5)^2 = 2^{5 \\times 2} = 2^{10}$. Check: $32^2 = 1024 = 2^{10}$."
    ]
  },
  "q:7d641ecf1409655c": {
    "options": [
      "-9",
      "24",
      "-24",
      "26"
    ],
    "explanations": [
      "$-9$ would come from $-10 + 1$, treating $(-5)^2$ as $-5 \\cdot 2 = -10$. Squaring means multiplying $-5$ by itself, which gives $+25$.",
      "$24$ is $25 - 1$, subtracting the constant instead of adding it. The rule is $x^2 + 1$, so after squaring you add $1$: $25 + 1 = 26$.",
      "$-24$ is $-25 + 1$, carrying the negative sign through the square. A negative number squared is positive: $(-5)^2 = (-5)(-5) = 25$.",
      "Substitute $-5$: $f(-5) = (-5)^2 + 1 = 25 + 1 = 26$. The square of a negative number is positive, so the sign disappears before adding $1$."
    ]
  },
  "q:6820d3ea82981879": {
    "options": [
      "$1$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "explanations": [
      "$\\cos 0° = 1$, not $\\cos 30°$. At $30°$ the adjacent side of the reference triangle is $\\sqrt{3}$ of the hypotenuse $2$, so the cosine is less than $1$.",
      "In a $30$-$60$-$90$ triangle with hypotenuse $2$, the side adjacent to the $30°$ angle is $\\sqrt{3}$, so $\\cos 30° = \\frac{\\sqrt{3}}{2}$.",
      "$\\frac{1}{2}$ is $\\sin 30°$ (or $\\cos 60°$), the ratio using the short leg opposite the $30°$ angle. Cosine uses the adjacent leg, which is the longer leg $\\sqrt{3}$.",
      "$\\frac{\\sqrt{2}}{2}$ is $\\cos 45°$, from the isosceles right triangle. The $30°$ angle belongs to the $30$-$60$-$90$ triangle, whose adjacent leg is $\\sqrt{3}$, not $\\sqrt{2}$."
    ]
  },
  "q:e7c1d3b6a508b1e8": {
    "options": [
      "31",
      "48",
      "40",
      "35"
    ],
    "explanations": [
      "$31$ is too low: $31\\%$ of $57$ is about $17.7$ points, not $23$. The ratio $23/57$ is a little over $0.4$.",
      "$48$ overstates the score: $48\\%$ of $57$ would be about $27.4$ points. The correct ratio $23/57 \\approx 0.4035$ rounds to $40\\%$.",
      "Divide the score by the total: $23/57 \\approx 0.4035$. Multiplying by $100$ and rounding to the nearest whole number gives $40\\%$.",
      "$35\\%$ of $57$ is about $20$ points, not $23$. The actual ratio $23/57$ is about $0.40$, so the percent is $40$."
    ]
  },
  "q:7aefbbd9231cccf2": {
    "options": [
      "4",
      "5",
      "6",
      "1"
    ],
    "explanations": [
      "Half of the $x$-coefficient is $4/2 = 2$, and squaring gives $2^2 = 4$. Adding $4$ makes $x^2 + 4x + 4 = (x + 2)^2$, a perfect square.",
      "$5$ does not produce a perfect square: $x^2 + 4x + 5$ has discriminant $16 - 20 < 0$ and cannot be written as $(x + k)^2$. The constant must be $(4/2)^2 = 4$.",
      "$6$ does not complete the square; $x^2 + 4x + 6$ is not $(x + k)^2$ for any $k$. The required constant is the square of half the linear coefficient, $(4/2)^2 = 4$.",
      "$1$ would be the right constant for $x^2 + 2x$, where half the coefficient is $1$. Here the coefficient is $4$, so half is $2$ and its square is $4$."
    ]
  },
  "q:d7ee1cb527bf38e5": {
    "options": [
      "-11",
      "-7",
      "-9",
      "-5"
    ],
    "explanations": [
      "$-11$ subtracts $4$ twice, as in $-3 - 4 - 4$. The rule subtracts $4$ only once after negating $x$: $-3 - 4 = -7$.",
      "Replace $x$ with $3$: $h(3) = -(3) - 4 = -3 - 4 = -7$.",
      "$-9$ would come from $-3 \\cdot 3$ or from $-(3 + 4) - 2$, neither of which matches the rule. The rule is $-x - 4$, so $h(3) = -3 - 4 = -7$.",
      "$-5$ comes from treating $-x$ as $-1$ and computing $-1 - 4$, or from a sign slip such as $3 - 4 - 4$. The negation of $3$ is $-3$, and $-3 - 4 = -7$."
    ]
  },
  "q:55949ce8f4f33070": {
    "options": [
      "$x = -5$",
      "$x = -6$",
      "$x = 5$",
      "$x = 6$"
    ],
    "explanations": [
      "$x = -5$ flips the sign of the numerator's root. Substituting gives $\\frac{-10}{1} = -10$, not $0$. The numerator $x - 5$ is zero when $x = +5$.",
      "$x = -6$ makes the denominator zero, so the expression is undefined there, not equal to $0$. A fraction is zero only when its numerator is zero and its denominator is not.",
      "A fraction equals $0$ exactly when its numerator is $0$ and its denominator is not. $x - 5 = 0$ gives $x = 5$, and the denominator there is $5 + 6 = 11 \\ne 0$.",
      "$x = 6$ flips the sign of the denominator's value and is not a zero of the numerator: $\\frac{1}{12} \\ne 0$. Only $x = 5$ makes the numerator zero."
    ]
  },
  "q:6fdf6bcadaf0a215": {
    "options": [
      "25",
      "28",
      "33",
      "16"
    ],
    "explanations": [
      "By the Pythagorean theorem, $c^2 = 7^2 + 24^2 = 49 + 576 = 625$, so $c = 25$. This is the familiar $7$-$24$-$25$ right triangle.",
      "$28$ fails the check: $28^2 = 784 \\ne 625$. The hypotenuse must satisfy $c^2 = 49 + 576 = 625$, which gives $25$.",
      "$33$ is roughly the sum of the legs plus $2$, but the hypotenuse is not found by adding legs. $33^2 = 1089$, far more than $49 + 576 = 625$.",
      "$16$ is shorter than the leg $24$, which is impossible since the hypotenuse is the longest side. Also $16^2 = 256 \\ne 625$."
    ]
  },
  "q:73c9c28e74d9404d": {
    "options": [
      "Exactly one solution",
      "Infinitely many solutions",
      "Exactly two solutions",
      "No solution"
    ],
    "explanations": [
      "Exactly one solution requires lines with different slopes that cross once. Here both equations reduce to $x + y = 1$, so they are the same line, not two intersecting lines.",
      "The second equation is $3$ times the first; both simplify to $x + y = 1$ and describe the same line. Every point on that line satisfies both equations, so there are infinitely many solutions.",
      "Two distinct lines in a plane can never meet in exactly two points, so a linear system cannot have exactly two solutions. The possibilities are one, none, or infinitely many.",
      "No solution would require parallel but distinct lines, where the left sides are proportional but the constants are not. Here $6 = 3 \\cdot 2$ matches the constants too, so the lines coincide."
    ]
  },
  "q:231185b3d39a0d57": {
    "options": [
      "The point at $x = 12$, residual $-1.7$",
      "The point at $x = 6$, residual $-1.4$",
      "The point at $x = 15$, residual $-2.6$",
      "The point at $x = 15$, residual $2.6$"
    ],
    "explanations": [
      "The residual at $x = 12$ is $32.1 - 33.8 = -1.7$, the largest negative residual, but $2.6$ at $x = 15$ has a greater magnitude. Ignoring positive residuals leads here.",
      "The residual at $x = 6$ is $18.0 - 19.4 = -1.4$, only the second-largest negative residual and smaller in magnitude than both $-1.7$ and $2.6$.",
      "The point is right, but the sign is reversed. Residual is actual minus predicted, $43.6 - 41.0 = +2.6$; $-2.6$ comes from predicted minus actual. The point lies above the line.",
      "Residuals (actual minus predicted) are $1.3$, $-1.4$, $1.2$, $-1.7$, and $43.6 - 41.0 = 2.6$. The greatest magnitude is $2.6$ at $x = 15$, positive because the actual value is above the line."
    ]
  },
  "q:af74b3d7a0ffb7e5": {
    "options": [
      "$x = -2$",
      "$x = -3$",
      "$x = 2$",
      "$x = 0$"
    ],
    "explanations": [
      "$x = -2$ flips the sign of the denominator's zero. Substituting gives $\\frac{1}{-4}$, a perfectly defined value. The denominator $x - 2$ is zero at $x = +2$.",
      "$x = -3$ makes the numerator zero, so the expression equals $0$, which is a defined value. Undefined points come from the denominator, not the numerator.",
      "A rational expression is undefined where its denominator is $0$: $x - 2 = 0$ gives $x = 2$. There the numerator is $5$, so the expression is $5/0$, undefined.",
      "At $x = 0$ the expression is $\\frac{3}{-2} = -1.5$, which is defined. Zero is not special here; the denominator $x - 2$ vanishes only at $x = 2$."
    ]
  },
  "q:7be2bc4d782735af": {
    "options": [
      "Increasing then decreasing",
      "Increasing on its entire domain",
      "Decreasing on its entire domain",
      "Constant"
    ],
    "explanations": [
      "A linear function has a single constant slope, so it cannot increase and then decrease. Changing direction requires a nonlinear graph such as a parabola.",
      "Increasing would require a positive slope. The slope of $f(x) = -3x + 3$ is $-3$, negative, so the function falls as $x$ grows. The positive $y$-intercept $3$ does not change this.",
      "The slope is $-3$, which is negative, so $f$ decreases on its entire domain: as $x$ increases by $1$, $f(x)$ drops by $3$.",
      "Constant would mean a slope of $0$, as in $f(x) = 3$. This function has slope $-3$, so its output changes with $x$."
    ]
  },
  "q:1510596eb33a1fa0": {
    "options": [
      "$10$",
      "$11$",
      "$12$",
      "$2$"
    ],
    "explanations": [
      "$10$ GB is the tier threshold, where the bill would be $25 + 8(12) = 121$ dollars. The actual bill of $137$ is $16$ dollars higher, so the customer used more than $10$ GB.",
      "$11$ comes from dividing the $16$-dollar excess by $12$ instead of $8$. Above $10$ GB the rate is $8$ dollars per GB, so $16$ dollars buys $2$ extra GB, not $1$.",
      "Reaching $10$ GB costs $25 + 8(12) = 121$ dollars. The remaining $137 - 121 = 16$ dollars at $8$ dollars per GB buys $2$ more GB, so the total is $10 + 2 = 12$ GB.",
      "$2$ is the number of GB used above the $10$ GB threshold (and also the included allowance), an intermediate value. The total usage adds it to the threshold: $10 + 2 = 12$ GB."
    ]
  },
  "q:25bafb54359d707a": {
    "options": [
      "10",
      "4",
      "7",
      "12"
    ],
    "explanations": [
      "$10^2 = 100$, not $49$. The square root of $49$ is the number that multiplies by itself to give $49$, which is $7$.",
      "$4^2 = 16$, not $49$. Four would be the square root of $16$; the square root of $49$ is $7$.",
      "The square root of $49$ is the positive number whose square is $49$. Since $7 \\times 7 = 49$, $\\sqrt{49} = 7$.",
      "$12^2 = 144$, not $49$. Twelve is far too large; the value whose square is $49$ is $7$."
    ]
  },
  "q:df79e8c762bcb374": {
    "options": [
      "Yes, because the data show a strong correlation",
      "No, because correlation does not show cause",
      "Yes, because the two variables rise and fall together",
      "No, because the two events happen in different places"
    ],
    "explanations": [
      "A strong correlation only shows the two variables move together; it does not establish that one causes the other. Both likely rise with hot weather, a confounding variable.",
      "Correlation does not imply causation. Ice cream sales and drownings both increase in hot weather, so a third variable explains the pattern without ice cream causing anything.",
      "Rising and falling together is exactly what correlation means, so this reasoning just restates the correlation. It does not rule out a shared cause such as summer heat.",
      "The conclusion is right but the reason is not: the events could happen in the same places and still not be causally linked. The real objection is that correlation alone cannot show cause."
    ]
  },
  "q:95be843a5b8e1d61": {
    "options": [
      "1126",
      "417",
      "618",
      "1296"
    ],
    "explanations": [
      "Block volume is $12 \\cdot 8 \\cdot 5 = 480$ cm$^3$; the hole has radius $2$, so its volume is $\\pi(2)^2(5) = 20\\pi \\approx 62.8$. Remaining volume $\\approx 417.2$, and $417.2 \\times 2.7 \\approx 1126$ grams.",
      "$417$ is the remaining volume in cubic centimeters, never multiplied by the density. Mass requires one more step: $417.2 \\times 2.7 \\approx 1126$ grams.",
      "$618$ uses the diameter $4$ as the radius, making the hole $\\pi(4)^2(5) \\approx 251$ cm$^3$ and leaving about $229$ cm$^3$, or $618$ grams. The radius is half the diameter, $2$ cm.",
      "$1296$ is $480 \\times 2.7$, the mass of the solid block with no hole drilled. The cylindrical hole removes about $62.8$ cm$^3$ of aluminum, which must be subtracted first."
    ]
  },
  "q:82b9fe3817c16988": {
    "options": [
      "8.8",
      "5.4",
      "4.4",
      "3.4"
    ],
    "explanations": [
      "$8.8$ is about double the correct value. Since $8.8^2 \\approx 77$, far more than $19$, this cannot be $\\sqrt{19}$.",
      "$5.4^2 \\approx 29.2$, well above $19$. The square root of $19$ must lie between $4$ and $5$ because $16 < 19 < 25$.",
      "Since $4^2 = 16$ and $5^2 = 25$, $\\sqrt{19}$ is between $4$ and $5$. More precisely $\\sqrt{19} \\approx 4.359$, which rounds to $4.4$.",
      "$3.4^2 \\approx 11.6$, well below $19$. Because $19 > 16 = 4^2$, the square root must exceed $4$."
    ]
  },
  "q:84f417e847fd7f2d": {
    "options": [
      "$45$",
      "$11$",
      "$50$",
      "$55$"
    ],
    "explanations": [
      "Full coverage needs $3 \\cdot 2^k = 6144$, so $2^k = 2048$ and $k = 11$ doublings, or $55$ days. A quarter of the lake is two doublings earlier: $9$ doublings, $9 \\times 5 = 45$ days.",
      "$11$ is the number of doublings needed for full coverage, not a number of days. Each doubling takes $5$ days, and a quarter of the lake is reached after $9$ doublings, or $45$ days.",
      "$50$ is one doubling before full coverage, when the bloom covers half the lake. A quarter is two doublings back, at $55 - 10 = 45$ days.",
      "$55$ is the day of full coverage, $11$ doublings times $5$ days. The question asks when the bloom covers one quarter of the lake, which is $10$ days earlier."
    ]
  },
  "q:9d8781699dd8c8a0": {
    "options": [
      "$(2x-3-5y)^{2}$",
      "$(2x-3-5y)(2x-3+5y)$",
      "$(2x+3-5y)(2x+3+5y)$",
      "$(4x-9-25y)(x+1)$"
    ],
    "explanations": [
      "$(2x - 3 - 5y)^2$ is a perfect square of a trinomial; it expands to include cross terms like $-20xy + 30y$ that the original expression does not have.",
      "The first three terms are a perfect square, $(2x - 3)^2$, so the expression is $(2x - 3)^2 - (5y)^2$. As a difference of squares it factors as $(2x - 3 - 5y)(2x - 3 + 5y)$.",
      "This uses $(2x + 3)^2 = 4x^2 + 12x + 9$, whose middle term is $+12x$. The original has $-12x$, so the binomial must be $2x - 3$.",
      "$(4x - 9 - 25y)(x + 1)$ is a random regrouping; it expands to include a $4x^2 - 5x$ start and a $-25xy$ term, which do not match $4x^2 - 12x + 9 - 25y^2$."
    ]
  },
  "q:864eb1332dc8a8f6": {
    "options": [
      "$15$",
      "$2$",
      "$4$",
      "$3$"
    ],
    "explanations": [
      "$15$ counts every integer from $61$ to $75$, ignoring that settings must be multiples of $4$. Only $64$, $68$, and $72$ qualify.",
      "$2$ drops one of the valid settings, such as $64$ or $72$. The interval $61 \\le T \\le 75$ contains three multiples of $4$: $64$, $68$, and $72$.",
      "$4$ comes from including $60$ or $76$, but $|60 - 68| = 8 > 7$ and $|76 - 68| = 8 > 7$, so both fall outside the allowed interval $61 \\le T \\le 75$.",
      "$|T - 68| \\le 7$ means $61 \\le T \\le 75$. The multiples of $4$ in that interval are $64$, $68$, and $72$, so there are $3$ allowed settings."
    ]
  },
  "q:fb8d467a2e3718d5": {
    "options": [
      "12",
      "15",
      "10",
      "7"
    ],
    "explanations": [
      "$12$ does not fit the $30$-$60$-$90$ ratios $1 : \\sqrt{3} : 2$. With shorter leg $5$ the sides are $5$, $5\\sqrt{3} \\approx 8.66$, and $10$; nothing equals $12$.",
      "$15$ is $3 \\times 5$, tripling the shorter leg. In a $30$-$60$-$90$ triangle the hypotenuse is exactly twice the shorter leg, not three times.",
      "In a $30$-$60$-$90$ triangle the hypotenuse is twice the shorter leg (the leg opposite the $30°$ angle). So the hypotenuse is $2(5) = 10$.",
      "$7$ is $5 + 2$, adding the ratio number instead of multiplying by it. The side ratio $1 : 2$ means the hypotenuse is $2 \\times 5 = 10$."
    ]
  },
  "q:7a8ebde4191d5c65": {
    "options": [
      "$[2, \\infty)$",
      "$(-\\infty, \\infty)$",
      "$[0, \\infty)$",
      "$(2, \\infty)$"
    ],
    "explanations": [
      "Since $x^2 \\ge 0$ for every real $x$, $f(x) = x^2 + 2 \\ge 2$, with equality at $x = 0$. The outputs are all values $2$ and above, so the range is $[2, \\infty)$.",
      "$(-\\infty, \\infty)$ is the domain, not the range. The output can never be below $2$, because $x^2$ is never negative.",
      "$[0, \\infty)$ is the range of $x^2$ alone, forgetting the $+2$ shift. Adding $2$ raises every output, so the minimum becomes $2$, not $0$.",
      "$(2, \\infty)$ excludes $2$, but $f(0) = 0 + 2 = 2$ is actually attained. The bracket at $2$ must be closed, giving $[2, \\infty)$."
    ]
  },
  "q:ac39757b1473a911": {
    "options": [
      "1",
      "8",
      "4",
      "6"
    ],
    "explanations": [
      "At $t = 1$, $h = 64 - 16 = 48$ feet, so the projectile is still in the air. It only reaches the ground when $h = 0$, which requires $64 - 16t = 0$.",
      "At $t = 8$, $h = 512 - 1024 = -512$, which is below ground; the projectile already landed earlier. Eight comes from doubling the correct $4$, as if the flight were twice as long.",
      "Set $h(t) = 0$: $64t - 16t^2 = 16t(4 - t) = 0$, so $t = 0$ (launch) or $t = 4$. The projectile hits the ground after $4$ seconds.",
      "At $t = 6$, $h = 384 - 576 = -192 < 0$, so the projectile is past the landing time. The flight ends when $16t(4 - t) = 0$, at $t = 4$."
    ]
  },
  "q:1938ccb3de69672d": {
    "options": [
      "$3x^{2}y\\sqrt[3]{2xy}$",
      "$2x^{2}y\\sqrt[3]{3xy}$",
      "$3x^{2}y^{2}\\sqrt[3]{2x}$",
      "$3xy\\sqrt[3]{2x^{4}y}$"
    ],
    "explanations": [
      "Write $54 = 27 \\cdot 2$, $x^7 = x^6 \\cdot x$, and $y^4 = y^3 \\cdot y$. The perfect cubes come out as $\\sqrt[3]{27x^6y^3} = 3x^2y$, leaving $\\sqrt[3]{2xy}$ inside.",
      "$2x^2y\\sqrt[3]{3xy}$ pulls $2$ outside and leaves $3$ inside, which represents $8 \\cdot 3 = 24$, not $54$. The perfect-cube factor of $54$ is $27$, so $3$ comes out and $2$ stays.",
      "$3x^2y^2\\sqrt[3]{2x}$ takes $y^2$ out of $y^4$, which treats the root as a square root. For a cube root, $y^4 = y^3 \\cdot y$, so only one $y$ comes out and one stays inside.",
      "$3xy\\sqrt[3]{2x^4y}$ removes only one factor of $x^3$ from $x^7$, leaving $x^4$ inside, which still contains a perfect cube. Fully simplified, $x^6$ comes out as $x^2$ and only $x$ remains."
    ]
  },
  "q:acebb85b8b8a6dfb": {
    "options": [
      "$\\$2.75$",
      "$\\$4.00$",
      "$\\$6.75$",
      "$\\$8.75$"
    ],
    "explanations": [
      "$\\$2.75$ is the price of one drink alone, found after $h = 4.00$ from $2d = 17.50 - 12$. The question asks for a hot dog plus a drink together.",
      "$\\$4.00$ is the price of one hot dog alone, from subtracting $5h + 4d = 31$ from the doubled first equation $6h + 4d = 35$. Adding the drink gives $6.75$.",
      "Doubling $3h + 2d = 17.50$ gives $6h + 4d = 35.00$; subtracting $5h + 4d = 31.00$ leaves $h = 4.00$. Then $2d = 17.50 - 12 = 5.50$, so $d = 2.75$, and $h + d = 6.75$.",
      "$\\$8.75$ is $17.50 \\div 2$, treating the first purchase as two identical pairs. But $3$ hot dogs and $2$ drinks do not split into equal hot-dog-plus-drink pairs."
    ]
  },
  "q:5edc5683cce81fe0": {
    "options": [
      "14",
      "8",
      "3",
      "13"
    ],
    "explanations": [
      "$14$ is $7 \\times 2$, but substituting gives $|14 - 7| = 7 \\ne 1$. Solutions must be exactly $1$ unit from $7$.",
      "$|x - 7| = 1$ means $x - 7 = 1$ or $x - 7 = -1$, so $x = 8$ or $x = 6$. Since $6$ is given, the other solution is $8$, one unit above $7$.",
      "$|3 - 7| = 4 \\ne 1$, so $3$ is not a solution. The two solutions are the numbers $1$ unit on either side of $7$: $6$ and $8$.",
      "$13$ is $7 + 6$, adding the given solution to the center. Checking, $|13 - 7| = 6 \\ne 1$. The other solution is $7 + 1 = 8$."
    ]
  },
  "q:49f35350ed85f7c5": {
    "options": [
      "$\\sin\\theta$",
      "$\\cos\\theta$",
      "$-\\cos\\theta$",
      "$\\tan\\theta$"
    ],
    "explanations": [
      "$\\sin\\theta$ equals $\\sin(90° - \\theta)$ only when $\\theta = 45°$. In general the complement swaps sine and cosine, so $\\sin(90° - \\theta)$ is $\\cos\\theta$.",
      "The two acute angles of a right triangle are complementary, and the side opposite one angle is adjacent to the other. So $\\sin(90° - \\theta) = \\cos\\theta$.",
      "For an acute angle $\\theta$, both $\\sin(90° - \\theta)$ and $\\cos\\theta$ are positive, so the negative sign is wrong. The cofunction identity has no sign change.",
      "$\\tan\\theta$ is the ratio of sine to cosine, not a cofunction of sine. The complement of an angle relates sine to cosine, giving $\\cos\\theta$."
    ]
  },
  "q:f6c6ec588ee78898": {
    "options": [
      "3",
      "-4",
      "1",
      "2"
    ],
    "explanations": [
      "$3$ is the $x$-coordinate of the second point, not the slope. The slope is the change in $y$ over the change in $x$: $(7 - 5)/(3 - 2) = 2$.",
      "$-4$ has the wrong sign and magnitude; the line rises from $(2, 5)$ to $(3, 7)$, so the slope is positive. It could come from mixing coordinates, such as $(3 - 7)$ in the numerator.",
      "$1$ is the change in $x$ alone, $3 - 2$, or the run without the rise. The slope divides the rise $7 - 5 = 2$ by that run, giving $2$.",
      "Slope is rise over run: $\\frac{7 - 5}{3 - 2} = \\frac{2}{1} = 2$."
    ]
  },
  "q:74021f461de5530c": {
    "options": [
      "$\\frac{7}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{7}$",
      "$\\frac{5}{12}$"
    ],
    "explanations": [
      "$\\frac{7}{12}$ counts the $7$ numbers that are NOT greater than $21$ (those $21$ or less), the complement of the event asked about.",
      "$\\frac{1}{2}$ counts $6$ numbers by including $21$ itself, answering \"at least $21$.\" Since $21$ is not greater than $21$, only $5$ numbers qualify.",
      "$\\frac{5}{7}$ compares the $5$ favorable numbers to the $7$ unfavorable ones, a ratio of odds. Probability divides by the total number of outcomes, $12$.",
      "The numbers greater than $21$ are $22, 33, 34, 39, 40$, five of the twelve listed. The probability is $\\frac{5}{12}$."
    ]
  },
  "q:fa92cce90fefc499": {
    "options": [
      "About 67%",
      "About 66%",
      "About 33%",
      "About 48%"
    ],
    "explanations": [
      "About $67\\%$ is the share who do NOT prefer that option, $171/256$. The question asks about those who do prefer it, $85/256 \\approx 33\\%$.",
      "About $66\\%$ is roughly the complement, close to $171/256 \\approx 66.8\\%$, the share who did not pick that option. The share who did is $85/256 \\approx 33\\%$.",
      "Divide those who prefer that option by everyone surveyed: $85/256 \\approx 0.332$, which is about $33\\%$.",
      "About $48\\%$ would be roughly $123$ of $256$ people, but only $85$ prefer that option. The correct ratio $85/256$ is about one third."
    ]
  },
  "q:e0d68d5e3004cfb3": {
    "options": [
      "x-intercept: $2$, y-intercept: $4$",
      "x-intercept: $16$, y-intercept: $16$",
      "x-intercept: $4$, y-intercept: $8$",
      "x-intercept: $8$, y-intercept: $4$"
    ],
    "explanations": [
      "$2$ and $4$ are the coefficients of $x$ and $y$, not the intercepts. Intercepts come from setting the other variable to $0$: $x = 16/2 = 8$ and $y = 16/4 = 4$.",
      "$16$ is the constant on the right side, not an intercept. Setting $y = 0$ gives $2x = 16$, so $x = 8$; setting $x = 0$ gives $4y = 16$, so $y = 4$.",
      "An $x$-intercept of $4$ and $y$-intercept of $8$ swaps the two: dividing $16$ by the $y$-coefficient $4$ gives the $y$-intercept, and dividing by the $x$-coefficient $2$ gives the $x$-intercept.",
      "For the $x$-intercept set $y = 0$: $2x = 16$, so $x = 8$. For the $y$-intercept set $x = 0$: $4y = 16$, so $y = 4$."
    ]
  },
  "q:f67b10ae46dc7ca8": {
    "options": [
      "3",
      "5",
      "6",
      "10"
    ],
    "explanations": [
      "$3$ is half the chord, the leg of the right triangle $\\sqrt{5^2 - 4^2}$. The full chord spans both sides of the perpendicular from the center, so it is $2 \\times 3 = 6$.",
      "$5$ is the radius of the circle, found from completing the square. The chord at $y = 8$ is $4$ units from the center, so its half-length is $\\sqrt{25 - 16} = 3$, not $5$.",
      "Completing the square gives $(x - 3)^2 + (y - 4)^2 = 25$, center $(3, 4)$, radius $5$. The line $y = 8$ is $4$ from the center, so half the chord is $\\sqrt{25 - 16} = 3$ and the chord is $6$.",
      "$10$ is the diameter, the longest possible chord, which only a line through the center $(3, 4)$ produces. The line $y = 8$ misses the center by $4$ units, so its chord is shorter."
    ]
  },
  "q:6ca254e502bebc95": {
    "options": [
      "It has a vertical asymptote at the line $x = 2$",
      "It crosses the $x$-axis at $x = 2$ and changes sign",
      "It touches the $x$-axis at $x = 2$ and turns around",
      "It is undefined at $x = 2$, leaving a hole"
    ],
    "explanations": [
      "Vertical asymptotes occur where a denominator is zero. This is a polynomial with no denominator, so it is defined everywhere and has no asymptotes.",
      "Crossing with a sign change happens at a zero of odd multiplicity, like the factor $x + 1$ at $x = -1$. The factor $(x - 2)^2$ has even multiplicity, so no sign change occurs at $x = 2$.",
      "The factor $(x - 2)^2$ has even multiplicity, so $f$ is zero at $x = 2$ but keeps the same sign on both sides. The graph touches the $x$-axis there and turns around.",
      "A hole requires a factor that cancels from a numerator and denominator. This polynomial has no denominator, and $f(2) = 0$ is perfectly defined."
    ]
  },
  "q:fc2f0c3952d8fc5c": {
    "options": [
      "$10$",
      "$27$",
      "$37$",
      "$270$"
    ],
    "explanations": [
      "$10$ is the width, found from $3w + 7 = 37$. The question asks for the area, which multiplies width by length: $10 \\times 27 = 270$.",
      "$27$ is the length, $2(10) + 7$. It is an intermediate value; the area is length times width, $27 \\times 10 = 270$ square feet.",
      "$37$ is the half-perimeter $l + w = 74/2$, the value one step before solving for the dimensions. The area needs $l$ and $w$ individually: $27 \\times 10 = 270$.",
      "From $2(l + w) = 74$, $l + w = 37$. With $l = 2w + 7$: $3w + 7 = 37$, so $w = 10$ and $l = 27$. Area $= 10 \\times 27 = 270$ square feet."
    ]
  },
  "q:f045a84b0418afd4": {
    "options": [
      "11",
      "15",
      "16",
      "19"
    ],
    "explanations": [
      "$11$ does not come from any correct reading of $64^{2/3}$. The cube root of $64$ is $4$, and $4^2 = 16$.",
      "$15$ is not a power of $4$. $64^{2/3}$ means square the cube root: $\\sqrt[3]{64} = 4$, then $4^2 = 16$.",
      "The denominator $3$ is the root and the numerator $2$ is the power: $64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = 16$.",
      "$19$ is not $64^{2/3}$. Taking the cube root first gives $4$, and squaring gives $16$; $19$ matches neither step."
    ]
  },
  "q:e26f689a2fe802de": {
    "options": [
      "$20$",
      "$50$",
      "$80$",
      "$100$"
    ],
    "explanations": [
      "$20$ is the number of hardcovers, from $60h = 1200$. The question asks for all books sold, which adds the $4(20) = 80$ paperbacks: $100$.",
      "$50$ is $1200 \\div 24$, the number of books if every sale were a hardcover. It ignores the $\\$9$ paperbacks that make up most of the sales.",
      "$80$ is the number of paperbacks, $4 \\times 20$. It is an intermediate value; the total number of books also includes the $20$ hardcovers, giving $100$.",
      "With $h$ hardcovers and $4h$ paperbacks, $24h + 9(4h) = 60h = 1200$, so $h = 20$ and paperbacks number $80$. Total books: $20 + 80 = 100$."
    ]
  },
  "q:91832eda8d6d46aa": {
    "options": [
      "$8$",
      "$9$",
      "$11$",
      "$13$"
    ],
    "explanations": [
      "$8$ is the $x$-coordinate of $Q$, since two steps of $3$ right from $x = 2$ give $8$. The question asks for the $y$-coordinate, which is $3 + 8 = 11$.",
      "$9$ uses slope $\\frac{3}{4}$ instead of the perpendicular slope $\\frac{4}{3}$, stepping $4$ right and $3$ up twice to reach $y = 3 + 6 = 9$. The perpendicular to slope $-\\frac{3}{4}$ has slope $+\\frac{4}{3}$.",
      "The line $3x + 4y = 12$ has slope $-\\frac{3}{4}$, so $\\ell$ has slope $\\frac{4}{3}$: each $3$ right and $4$ up covers $5$ units. Ten units is two steps, so $Q = (2 + 6, 3 + 8) = (8, 11)$.",
      "$13$ adds the full $10$ units to the $y$-coordinate, as if $\\ell$ were vertical. The distance of $10$ is split between horizontal and vertical change; the vertical part is $8$."
    ]
  },
  "q:2ae2511050ac8ec2": {
    "options": [
      "$10$",
      "$20$",
      "$30$",
      "$40$"
    ],
    "explanations": [
      "$10$ is the length of the perpendicular side $w$ in the requested shape, an intermediate value. The side parallel to the wall is $60 - 2(10) = 40$.",
      "$20$ is the other root for $w$, and also the parallel side of the OTHER rectangle ($60 - 2 \\cdot 20$). The question asks about the shape with the shorter perpendicular side, $w = 10$.",
      "$30$ is half the fencing, what $w$ would be if the fencing covered just two sides. With three fenced sides, $w(60 - 2w) = 400$ gives $w = 10$ or $20$, not $30$.",
      "With perpendicular sides $w$, the parallel side is $60 - 2w$, and $w(60 - 2w) = 400$ gives $w^2 - 30w + 200 = 0$, so $w = 10$ or $20$. The shorter perpendicular side is $10$, making the parallel side $60 - 20 = 40$ feet."
    ]
  },
  "q:9461e02ee621d4e6": {
    "options": [
      "At least 20 items",
      "At most 18 items",
      "21 items",
      "Exactly 18 items"
    ],
    "explanations": [
      "\"At least\" points the wrong way: the budget caps spending, so it bounds the number of items from above, not below. Twenty items would cost $43 + 60 = 103$ dollars, over budget.",
      "The constraint is $43 + 3n \\le 98$, so $3n \\le 55$ and $n \\le 18.33$. Since items are whole, the customer can buy at most $18$ items; fewer is also fine.",
      "$21$ items would cost $43 + 63 = 106$ dollars, exceeding the $\\$98$ budget. Only $\\$55$ is available for items, which buys at most $18$.",
      "\"Exactly $18$\" is too restrictive: buying fewer than $18$ items also stays within budget. The inequality $n \\le 18.33$ describes an upper limit, so \"at most $18$\" is the right description."
    ]
  },
  "q:214b67dbfd777983": {
    "options": [
      "$460$",
      "$528$",
      "$543$",
      "$560$"
    ],
    "explanations": [
      "$460$ is $500 \\times 0.92$, multiplying by the exchange rate when converting euros back to dollars requires dividing. It also ignores the fee.",
      "$528$ comes from $500 \\div (0.92 \\times 1.03)$, treating the $3$ percent as an addition that reduces the dollars needed. The fee is deducted from the euros, so the traveler keeps only $97$ percent.",
      "$543$ is $500 \\div 0.92$, ignoring the fee entirely. After the $3$ percent deduction only $0.97 \\times 0.92d$ euros are handed over, so more dollars are needed.",
      "From $d$ dollars the bank produces $0.92d$ euros and hands over $97$ percent: $0.92 \\times 0.97d = 0.8924d$. Setting $0.8924d = 500$ gives $d \\approx 560.3$, about $\\$560$."
    ]
  },
  "q:1c9aa7712968f599": {
    "options": [
      "2",
      "6",
      "9",
      "3"
    ],
    "explanations": [
      "$2$ comes from the $x + 2$ in the equation, which gives the center's $x$-coordinate $-2$, not the radius. The radius is the square root of the right side, $\\sqrt{9} = 3$.",
      "$6$ is the diameter, twice the radius. The equation's right side is $r^2 = 9$, so $r = 3$ and the diameter is $6$.",
      "$9$ is $r^2$, the right side of the equation, not $r$ itself. Taking the square root gives the radius, $3$.",
      "In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$. Here $r^2 = 9$, so $r = \\sqrt{9} = 3$."
    ]
  },
  "q:f253deae14ea2bea": {
    "options": [
      "$90$",
      "$89.5$",
      "$91$",
      "$88$"
    ],
    "explanations": [
      "The unit tests total $349$. With the exam counted twice, $\\frac{349 + 2x}{6} \\ge 88$ gives $2x \\ge 179$, so $x \\ge 89.5$. Scores are whole numbers, so the lowest qualifying score is $90$.",
      "$89.5$ is the exact boundary from the inequality $2x \\ge 179$, but scores must be whole numbers, so it is not a possible score. The lowest whole number at or above $89.5$ is $90$.",
      "$91$ solves the unweighted version $\\frac{349 + x}{5} \\ge 88$, which ignores that the exam counts twice. With double weight the exam needs only $x \\ge 89.5$, so $90$ suffices.",
      "$88$ is the target final grade, not the required exam score. A final exam of $88$ gives $\\frac{349 + 176}{6} = 87.5$, which falls short of $88$."
    ]
  },
  "q:144a1b9b479d0f1b": {
    "options": [
      "$3x + 7$",
      "$x - 1$",
      "$3x - 7$",
      "$2x + 12$"
    ],
    "explanations": [
      "Combine like terms: $2x + x = 3x$ and $3 + 4 = 7$, so the sum is $3x + 7$.",
      "$x - 1$ comes from subtracting the second binomial instead of adding it: $(2x - x) + (3 - 4)$. The problem adds, giving $3x + 7$.",
      "$3x - 7$ adds the $x$-terms correctly but subtracts the constants. Both constants are positive and are being added: $3 + 4 = 7$.",
      "$2x + 12$ multiplies the constants ($3 \\times 4$) and drops the $x$ from the second binomial. Addition combines like terms: $2x + x = 3x$ and $3 + 4 = 7$."
    ]
  },
  "q:313093a9c2d0ac09": {
    "options": [
      "71",
      "162",
      "160",
      "164"
    ],
    "explanations": [
      "$71$ does not come from the scale; $4 \\times 40 = 160$. A $1 : 40$ scale means the real car is $40$ times the model, so $71$ is far too short.",
      "$162$ is two more than $4 \\times 40$; it does not match multiplying the model length by the scale factor. The real length is exactly $160$ inches.",
      "A $1 : 40$ scale means every inch on the model is $40$ inches on the real car, so the real length is $4 \\times 40 = 160$ inches.",
      "$164$ is $4 \\times 41$ or $160 + 4$, an arithmetic slip. The scale factor is exactly $40$, so the real length is $160$ inches."
    ]
  },
  "q:d3c5201b41b96ed3": {
    "options": [
      "$\\sqrt{3} + \\sqrt{7}$",
      "$3\\sqrt{7}$",
      "$\\sqrt{21}$",
      "$\\sqrt{10}$"
    ],
    "explanations": [
      "$\\sqrt{3} + \\sqrt{7}$ is a sum, not a product. Multiplying radicals combines them under one root; adding them does not, and $\\sqrt{3} + \\sqrt{7} \\approx 4.38$ while $\\sqrt{21} \\approx 4.58$.",
      "$3\\sqrt{7}$ equals $\\sqrt{9} \\cdot \\sqrt{7} = \\sqrt{63}$, which would need $\\sqrt{9}$ as the first factor, not $\\sqrt{3}$. The product $\\sqrt{3} \\cdot \\sqrt{7}$ keeps $3$ inside the radical.",
      "For nonnegative numbers, $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$, so $\\sqrt{3} \\cdot \\sqrt{7} = \\sqrt{21}$. Since $21 = 3 \\cdot 7$ has no perfect-square factor, it is fully simplified.",
      "$\\sqrt{10}$ adds the radicands, $3 + 7$, instead of multiplying them. The product rule multiplies: $\\sqrt{3 \\cdot 7} = \\sqrt{21}$."
    ]
  },
  "q:80c77a2f7ab264e7": {
    "options": [
      "Zero",
      "Undefined",
      "Positive",
      "Negative"
    ],
    "explanations": [
      "A zero association would show as a best-fit line with slope $0$, a horizontal line. This line has slope $-3$, so $y$ changes steadily as $x$ changes.",
      "\"Undefined\" describes the slope of a vertical line, not an association. This line has a well-defined slope of $-3$.",
      "A positive association requires a positive slope, with $y$ rising as $x$ rises. Here the slope is $-3$, so $y$ falls as $x$ rises. The positive intercept $50$ does not determine direction.",
      "The slope of the best-fit line is $-3$, which is negative: as $x$ increases, $y$ tends to decrease. That is a negative association."
    ]
  },
  "q:b19a836516d968ad": {
    "options": [
      "-4",
      "4",
      "6",
      "1"
    ],
    "explanations": [
      "$-4$ has the wrong sign to be $x$ and does not satisfy either equation: $-4 - y = 3$ would need $y = -7$, and then $2(-4) + 3(-7) \\ne 11$.",
      "$4$ is the value of $x$, not $y$. From $x = 3 + y$ with $y = 1$, $x = 4$. The question asks for $y$, which is $1$.",
      "$6$ fails both equations: if $y = 6$ then $x = 9$ from the first equation, and $2(9) + 3(6) = 36 \\ne 11$.",
      "From $x - y = 3$, $x = 3 + y$. Substituting: $2(3 + y) + 3y = 11$, so $6 + 5y = 11$ and $y = 1$ (with $x = 4$; check $8 + 3 = 11$)."
    ]
  },
  "q:0637b2aa5d9175c7": {
    "options": [
      "There is no solution.",
      "$x=3$",
      "$x=-3$",
      "$x=0$"
    ],
    "explanations": [
      "Clearing the denominator gives $2x = (x - 3) + 6$, so $x = 3$. But $x = 3$ makes $x - 3 = 0$, so it is extraneous. With the only candidate eliminated, the equation has no solution.",
      "$x = 3$ is the algebraic candidate, but it makes the denominator $x - 3$ equal to zero, so both fractions are undefined there. It is extraneous and must be rejected.",
      "$x = -3$ is a sign error on the candidate root. Checking: $\\frac{-6}{-6} = 1$ on the left, while the right is $1 + \\frac{6}{-6} = 0$, so the equation fails.",
      "$x = 0$ comes from multiplying only the fraction on the right by $x - 3$ and not the $1$. Checking directly: the left side is $0$ and the right is $1 - 2 = -1$, so it is not a solution."
    ]
  },
  "q:4ddfca50c5918432": {
    "options": [
      "It equals $1$",
      "It equals $-1$",
      "It equals $0$",
      "It is undefined"
    ],
    "explanations": [
      "$\\tan 45° = 1$, where sine and cosine are equal. At $90°$ the cosine is $0$, so the ratio $\\sin/\\cos$ has a zero denominator.",
      "$-1$ would be $\\tan 135°$ or $\\tan(-45°)$. At $90°$, $\\cos 90° = 0$, so the tangent is not a number at all.",
      "$0$ is the value of $\\cos 90°$, or of $\\tan 0°$. Tangent is $\\sin/\\cos$, and at $90°$ that is $1/0$, which is not zero.",
      "$\\tan 90° = \\frac{\\sin 90°}{\\cos 90°} = \\frac{1}{0}$, and division by zero is undefined. The graph of tangent has a vertical asymptote there."
    ]
  },
  "q:57ee96d19d642bab": {
    "options": [
      "$(x - 4)^2$",
      "$(x + 4)^2$",
      "$(x - 16)(x + 1)$",
      "$(x - 4)(x + 4)$"
    ],
    "explanations": [
      "$(x - 4)^2 = x^2 - 8x + 16$, which has a middle term and a $+16$ constant. The original has no $x$-term and a $-16$.",
      "$(x + 4)^2 = x^2 + 8x + 16$, a perfect square with a positive constant. The expression $x^2 - 16$ has a negative constant and no middle term.",
      "$(x - 16)(x + 1) = x^2 - 15x - 16$, which introduces a $-15x$ term absent from $x^2 - 16$.",
      "$x^2 - 16$ is a difference of squares, $x^2 - 4^2$, which factors as $(x - 4)(x + 4)$. The $x$-terms cancel when multiplied back out."
    ]
  },
  "q:d2114e6dd7088879": {
    "options": [
      "5",
      "11",
      "7",
      "10"
    ],
    "explanations": [
      "From $x = 25 - 4y$, substituting into $2x - y = 5$ gives $50 - 8y - y = 5$, so $9y = 45$ and $y = 5$. Then $x = 25 - 20 = 5$.",
      "$11$ fails the second equation: if $x = 11$ then $y = 2(11) - 5 = 17$, and $11 + 4(17) = 79 \\ne 25$.",
      "$7$ does not satisfy the system: $2(7) - y = 5$ gives $y = 9$, but then $7 + 36 = 43 \\ne 25$.",
      "$10$ comes from a slip such as $2x = 10$ read as $x = 10$. Checking, $x = 10$ gives $y = 15$ from the second equation, and $10 + 60 \\ne 25$."
    ]
  },
  "q:5fe5df5fa2b87b99": {
    "options": [
      "41",
      "5",
      "14",
      "31"
    ],
    "explanations": [
      "$41$ is roughly what remains after about $1.45$ half-lives, not $3$. Fifteen years is three full half-lives, which cuts $112$ in half three times to $14$.",
      "$5$ is the half-life in years, not an amount of substance. After $15$ years the remaining mass is $112/2^3 = 14$ g.",
      "$15$ years is $15/5 = 3$ half-lives, so the mass is halved three times: $112 \\to 56 \\to 28 \\to 14$ g.",
      "$31$ would be about two half-lives ($112/4 = 28$, slightly more). Fifteen years is three half-lives, giving $112/8 = 14$ g."
    ]
  },
  "q:1db173aec7c84d66": {
    "options": [
      "$3$",
      "$27$",
      "$243$",
      "$81$"
    ],
    "explanations": [
      "$3$ is the value of $x$ itself, since $3^x = 27$ gives $x = 3$. The question asks for $3^{x+2} = 3^5 = 243$.",
      "$27$ is $3^x$, the intermediate value from $4 \\cdot 3^x = 108$. The question asks for $3^{x+2}$, which is $9 \\cdot 27 = 243$.",
      "Factor: $3^{x+1} + 3^x = 3^x(3 + 1) = 4 \\cdot 3^x = 108$, so $3^x = 27$. Then $3^{x+2} = 9 \\cdot 3^x = 9 \\cdot 27 = 243$.",
      "$81$ is $3^{x+1} = 3 \\cdot 27$, one power short. The question asks for $3^{x+2}$, which is $3 \\cdot 81 = 243$."
    ]
  },
  "q:418c54d25287a21c": {
    "options": [
      "The mean decreases by 5 and the median is unchanged.",
      "The mean decreases by 5 and the median decreases by 1.",
      "The median decreases by 1 and the mean is unchanged.",
      "The mean decreases by 1 and the median decreases by 5."
    ],
    "explanations": [
      "The mean does drop by $5$, but the median is not immune: removing a value shifts the middle from the sixth value ($16$) to the average of the fifth and sixth ($15$), a decrease of $1$.",
      "The sum drops from $231$ to $160$, so the mean goes from $231/11 = 21$ to $160/10 = 16$, a decrease of $5$. The median moves from the sixth value, $16$, to $(14 + 16)/2 = 15$, a decrease of $1$.",
      "The median change is right, but the mean is far from unchanged: removing the outlier $71$ drops the total by $71$ and the mean from $21$ to $16$.",
      "This swaps the two effects. The mean, which is sensitive to the outlier, drops by $5$; the median, which is resistant, drops only by $1$."
    ]
  },
  "q:67c261fef0101860": {
    "options": [
      "$59t - 49t \\ge 219$",
      "$49t + 59t \\le 219$",
      "$49t + 59t \\ge 219$",
      "$49t - 59t \\ge 219$"
    ],
    "explanations": [
      "$59t - 49t$ is the gap between cars traveling in the SAME direction. Going opposite ways, the distances add, so the separation is $49t + 59t$.",
      "The sum $49t + 59t$ is right, but \"at least $219$\" means the separation is $219$ or more, so the inequality must be $\\ge$, not $\\le$.",
      "In opposite directions the distances add: separation $= 49t + 59t = 108t$. \"At least $219$ miles apart\" means $108t \\ge 219$.",
      "$49t - 59t$ is negative for every positive $t$, so it can never reach $219$. Opposite directions mean the two distances add rather than subtract."
    ]
  },
  "q:81b32daaed962899": {
    "options": [
      "Let each participant choose whether to use the app",
      "Recruit a much larger group of volunteer app users",
      "Compare only the participants who finish the whole study",
      "Randomly assign participants to use the app or not"
    ],
    "explanations": [
      "Letting participants choose creates self-selection: more motivated students may pick the app, so any score gain could reflect motivation, not the app.",
      "A larger sample reduces random error but does not fix the bias of a volunteer group. Without random assignment, volunteers may differ systematically from non-users.",
      "Comparing only those who finish introduces survivorship bias: dropouts may differ from completers, distorting the comparison without addressing cause.",
      "Random assignment balances motivation, prior ability, and other hidden factors across the two groups, so a difference in scores can be attributed to the app itself."
    ]
  },
  "q:304eb9e6af84903d": {
    "options": [
      "$12$",
      "$30$",
      "$360$",
      "$84$"
    ],
    "explanations": [
      "$12$ is the greatest whole-number width, from $6w + 12 \\le 84$. It is an intermediate value; the area multiplies it by the length $30$ to get $360$.",
      "$30$ is the length, $2(12) + 6$, an intermediate value. The question asks for the area, $12 \\times 30 = 360$ square feet.",
      "With width $w$ and length $2w + 6$, perimeter $6w + 12 \\le 84$ gives $w \\le 12$. The largest whole width is $12$, length $30$, so the greatest area is $12 \\times 30 = 360$.",
      "$84$ is the perimeter limit in feet, reused as if it were an area. Perimeter and area are different quantities; the area at the maximum width is $360$ square feet."
    ]
  },
  "q:3c7ecc37f1b44b58": {
    "options": [
      "15",
      "48",
      "24",
      "43"
    ],
    "explanations": [
      "$15$ does not come from the area formula; it is close to adding $12 + 4 - 1$. The area is half of base times height, $\\frac{1}{2}(12)(4) = 24$.",
      "$48$ is base times height without the one-half, the area of a $12 \\times 4$ rectangle. A triangle is half of that: $24$.",
      "The area of a triangle is half the base times the height: $\\frac{1}{2}bh = \\frac{1}{2}(12)(4) = 24$ square units.",
      "$43$ is not a product of the given dimensions; $\\frac{1}{2}(12)(4) = 24$. Nothing in the formula produces $43$."
    ]
  },
  "q:c5caf8d6ee3723d3": {
    "options": [
      "295",
      "426",
      "361",
      "303"
    ],
    "explanations": [
      "$295$ is less than the maximum $361$; for instance a $17 \\times 21$ rectangle (perimeter $76$) already has area $357$. The maximum occurs at the square.",
      "$426$ is impossible with perimeter $76$: the sides sum to $38$, and $x(38 - x)$ never exceeds $19^2 = 361$.",
      "The sides sum to $38$, so area is $x(38 - x)$, a downward parabola maximized at $x = 19$. The square with side $19$ gives the greatest area, $19^2 = 361$.",
      "$303$ is below the maximum; a $19 \\times 19$ square with the same perimeter has area $361$. For a fixed perimeter, the square always maximizes area."
    ]
  },
  "q:fbada9927fedc153": {
    "options": [
      "-2",
      "-12",
      "-5",
      "-4"
    ],
    "explanations": [
      "$-2$ is $-5 + 3$, dropping the coefficient $3$ in the first piece. The rule is $3x + 3$, so at $x = -5$ it gives $-15 + 3 = -12$.",
      "Since $-5 < 0$, use the first piece: $f(-5) = 3(-5) + 3 = -15 + 3 = -12$.",
      "$-5$ is the input, not the output. The first piece applies because $-5 < 0$, and it gives $3(-5) + 3 = -12$.",
      "$-4$ does not come from either piece: $3(-5) + 3 = -12$ and $(-5)^2 = 25$. Only the first piece applies here since $-5 < 0$."
    ]
  },
  "q:ed924f60af9e514b": {
    "options": [
      "$21$",
      "$24$",
      "$25$",
      "$34$"
    ],
    "explanations": [
      "$21$ divides the whole budget by the design rate, $1200 \\div 55 \\approx 21.8$, which answers about design hours, not planting hours.",
      "The required $6$ design hours cost $6(55) = 330$ dollars, leaving $1200 - 330 = 870$ for planting. Since $870/35 \\approx 24.86$, the greatest whole number is $24$ hours (total $\\$1{,}170$).",
      "$25$ rounds $24.86$ up instead of down. Twenty-five planting hours plus $6$ design hours would cost $875 + 330 = 1205$ dollars, over the budget.",
      "$34$ ignores the required design work: $1200 \\div 35 \\approx 34.3$. The $6$ mandatory design hours use $\\$330$ of the budget first."
    ]
  },
  "q:798341455199b905": {
    "options": [
      "0.372",
      "0.343",
      "0.500",
      "0.333"
    ],
    "explanations": [
      "Each bag is chosen with probability $\\frac{1}{3}$, then a blue chip is drawn at that bag's own rate: $\\frac{1}{3}\\left(\\frac{10}{20} + \\frac{5}{30} + \\frac{9}{20}\\right) = \\frac{1}{3}(0.500 + 0.167 + 0.450) \\approx 0.372$.",
      "$0.343$ is $24/70$, treating all $70$ chips as equally likely. That pools the bags and over-weights the $30$-chip bag, but the procedure gives every bag an equal one-third chance.",
      "$0.500$ is Bag 1's blue rate alone, $10/20$. It is just one branch of the two-stage process; the other two bags contribute their own rates.",
      "$0.333$ is the probability of choosing any one particular bag, the first stage only. It says nothing about which chip is drawn afterward."
    ]
  },
  "q:0a6f88f3aa0c71fc": {
    "options": [
      "5975",
      "4800",
      "3883",
      "4479"
    ],
    "explanations": [
      "$5975$ is not $300$ times a power of $2$. Four doublings multiply by $2^4 = 16$, giving $4800$.",
      "$40/10 = 4$ doublings, so the population is $300 \\times 2^4 = 300 \\times 16 = 4800$.",
      "$3883$ is not a whole number of doublings from $300$. Four doublings in $40$ hours give $300 \\times 16 = 4800$.",
      "$4479$ does not equal $300 \\times 2^4$; it is a bit short of $4800$ and matches no doubling count."
    ]
  },
  "q:22af7ab85339b4c9": {
    "options": [
      "2556",
      "2592",
      "2476",
      "2501"
    ],
    "explanations": [
      "The mean is the total divided by the count, so the total is $n \\times \\text{mean} = 36 \\times 71 = 2556$.",
      "$2592$ is $36 \\times 72$, using a mean one point too high. The mean is $71$, so the total is $36 \\times 71 = 2556$.",
      "$2476$ is $80$ less than $36 \\times 71 = 2556$; it does not equal the count times the mean.",
      "$2501$ is not $36 \\times 71$. Multiplying the number of students by the mean gives $2556$."
    ]
  },
  "q:98cdb2009f0091a2": {
    "options": [
      "$12$",
      "$13$",
      "$14$",
      "$29$"
    ],
    "explanations": [
      "$12$ is $29 - 17$, which forgets to count both endpoints. The integers from $17$ through $29$ inclusive number $29 - 17 + 1 = 13$.",
      "From $200 \\le 12n < 350$, dividing gives $16.67 \\le n < 29.17$, so $n$ runs from $17$ through $29$. That is $29 - 17 + 1 = 13$ values.",
      "$14$ comes from starting at $n = 16$, but $12(16) = 192$ pounds is below the $200$-pound minimum. The smallest valid $n$ is $17$.",
      "$29$ is the largest allowed value of $n$ ($12 \\times 29 = 348 < 350$), not the count of possible values. The count is $13$."
    ]
  },
  "q:47e6fb887b5e70bf": {
    "options": [
      "$9$",
      "$63$",
      "$105$",
      "$150$"
    ],
    "explanations": [
      "$9$ is the number of vans, an intermediate value. The question asks how many passengers travel by van, which is $7 \\times 9 = 63$.",
      "With $v + b = 15$ and $7v + 25b = 213$, substituting $v = 15 - b$ gives $105 + 18b = 213$, so $b = 6$ and $v = 9$. Van passengers: $7(9) = 63$.",
      "$105$ is $7 \\times 15$, treating all $15$ vehicles as vans. Only $9$ are vans, so the van passengers number $63$.",
      "$150$ is $25 \\times 6$, the passengers traveling by bus. The question asks about van passengers, $7 \\times 9 = 63$."
    ]
  },
  "q:2e027b2725403294": {
    "options": [
      "$g(x) = 5x + 19$",
      "$g(x) = 5x - 19$",
      "$g(x) = 5x - 11$",
      "$g(x) = 5x + 1$"
    ],
    "explanations": [
      "$5x + 19$ comes from $5(x + 3) + 4$, shifting the wrong way. The input is $x - 3$, so $5(x - 3) + 4 = 5x - 11$.",
      "$5x - 19$ comes from $5(x - 3) - 4$, subtracting the $4$ instead of adding it. The definition adds $4$, giving $5x - 15 + 4 = 5x - 11$.",
      "Replace $x$ with $x - 3$ in $f$ and add $4$: $g(x) = 5(x - 3) + 4 = 5x - 15 + 4 = 5x - 11$.",
      "$5x + 1$ comes from $5x - 3 + 4$, forgetting to multiply the $-3$ by $5$. Since $f$ multiplies its whole input, $f(x - 3) = 5x - 15$."
    ]
  },
  "q:a5b5b1d18aefef67": {
    "options": [
      "$32$",
      "$48$",
      "$50$",
      "$40$"
    ],
    "explanations": [
      "$32$ finds that $48$ kilograms are affordable but divides by the scoop rate $1.5$ instead of the kilogram rate $1.2$. The feeder dispenses $1.2$ kg per minute, so $48/1.2 = 40$.",
      "$48$ divides $60$ by the price per kilogram, giving kilograms, not minutes. Each minute dispenses $1.2$ kilograms, so $48$ kg takes $40$ minutes.",
      "$50$ divides $60$ by $1.5 \\times 0.8 = 1.2$ as if it were dollars per minute, dropping the price. The cost per minute is $1.2 \\times 1.25 = \\$1.50$.",
      "Chain the rates: $1.5$ scoops/min $\\times$ $0.8$ kg/scoop $= 1.2$ kg/min, and $1.2 \\times \\$1.25 = \\$1.50$ per minute. Then $1.50t \\le 60$ gives $t \\le 40$ minutes."
    ]
  },
  "q:b100748439888f5c": {
    "options": [
      "4",
      "5",
      "11",
      "2"
    ],
    "explanations": [
      "$4$ does not fit: substituting $y = 4$ into the first equation gives $x = 2.4$, and then $3(2.4) + 16 = 23.2 \\ne 26$.",
      "Doubling the first equation gives $10x + 4y = 40$; subtracting $3x + 4y = 26$ leaves $7x = 14$, so $x = 2$. Then $10 + 2y = 20$ gives $y = 5$.",
      "$11$ fails both equations: with $y = 11$ the first gives $x = -0.4$, and $3(-0.4) + 44 \\ne 26$.",
      "$2$ is the value of $x$, not $y$. After finding $x = 2$, substitute back: $5(2) + 2y = 20$, so $y = 5$."
    ]
  },
  "q:9edbb81e59334943": {
    "options": [
      "2.19",
      "0.80",
      "0.46",
      "0.53"
    ],
    "explanations": [
      "Each selection is made within its own group, so each probability uses its row total: early $210/400 = 0.525$, regular $264/1100 = 0.24$. The ratio is $0.525/0.24 \\approx 2.19$.",
      "$0.80$ is $210/264$, the ratio of raw accepted counts, which ignores that there are nearly three times as many regular applicants. Using the grand total for both probabilities gives the same wrong value.",
      "$0.46$ is $0.24/0.525$, the regular probability divided by the early one. The question asks how many times the early probability is of the regular one, the inverse comparison.",
      "$0.53$ is the early acceptance probability by itself, $210/400$. It is an intermediate value; the question asks for the ratio to the regular probability."
    ]
  },
  "q:b11e10444f39f94c": {
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{7}{4}$",
      "$\\frac{7}{8}$",
      "$\\frac{1}{8}$"
    ],
    "explanations": [
      "$\\frac{3}{4}$ is the exponent after only the middle radical is processed, $\\sqrt{6 \\cdot 6^{1/2}} = 6^{3/4}$. The outer factor of $6$ and the outer square root still have to be applied.",
      "$\\frac{7}{4}$ is the exponent of $6 \\cdot 6^{3/4} = 6^{7/4}$, just before the outermost square root. Taking that final root halves the exponent to $\\frac{7}{8}$.",
      "Work from the inside: $\\sqrt{6} = 6^{1/2}$, then $\\sqrt{6 \\cdot 6^{1/2}} = \\sqrt{6^{3/2}} = 6^{3/4}$, then $\\sqrt{6 \\cdot 6^{3/4}} = \\sqrt{6^{7/4}} = 6^{7/8}$. So $k = \\frac{7}{8}$.",
      "$\\frac{1}{8}$ multiplies the three halves, $\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2}$, ignoring the factor of $6$ sitting outside each inner radical. Those factors add $1$ to the exponent at each stage."
    ]
  },
  "q:d6cedbb6e857602e": {
    "options": [
      "2019",
      "2018",
      "2014",
      "2012"
    ],
    "explanations": [
      "Set $940 + 74t > 1180 + 46t$: $28t > 240$, so $t > 8.57$. The first whole year is $t = 9$, which is $2010 + 9 = 2019$.",
      "$2018$ truncates $8.57$ to $t = 8$, but at $t = 8$ City Q predicts $1532$ and City P predicts $1548$, so Q has not yet passed P. The inequality needs $t \\ge 9$.",
      "$2014$ divides the intercept gap by City Q's slope alone, $240/74 \\approx 3.2$, ignoring that City P's rent also rises. The gap closes at only $74 - 46 = 28$ dollars per year.",
      "$2012$ adds the slopes instead of subtracting, $240/120 = 2$. The rents are both increasing, so the gap closes at the difference of the slopes, $28$ per year."
    ]
  },
  "q:ac740f68f0616391": {
    "options": [
      "47",
      "54",
      "60",
      "73"
    ],
    "explanations": [
      "$47$ uses the cylinder alone, $300\\pi/20 \\approx 47.1$, leaving out the hemispherical dome on top.",
      "$54$ uses the cone formula $\\frac{1}{3}\\pi r^3$ for the dome instead of the hemisphere formula $\\frac{2}{3}\\pi r^3$, undercounting the dome's volume by half.",
      "Cylinder: $\\pi(5)^2(12) = 300\\pi \\approx 942.5$ m$^3$. Hemisphere: $\\frac{2}{3}\\pi(5)^3 \\approx 261.8$ m$^3$. Total $\\approx 1204.3$, and $1204.3/20 \\approx 60.2$, so about $60$ minutes.",
      "$73$ uses a whole sphere, $\\frac{4}{3}\\pi r^3 \\approx 523.6$, for the dome instead of a hemisphere. Only half a sphere sits on top, about $261.8$ m$^3$."
    ]
  },
  "q:d651d5f7aa7ed438": {
    "options": [
      "$4$",
      "$3$",
      "$2$",
      "$-4$"
    ],
    "explanations": [
      "$x^2 - 9$ gives simple zeros at $\\pm 3$ (crossings). A touch needs a repeated zero, so $x^2 - 4x + k$ must be a perfect square: discriminant $16 - 4k = 0$ gives $k = 4$, with double zero $x = 2$.",
      "$k = 3$ makes $x^2 - 4x + 3 = (x - 1)(x - 3)$, which is not a perfect square, so the quadratic factor itself has two distinct zeros. The intended condition is that the touch point come from the quadratic factor having a double zero, which requires a zero discriminant: $16 - 4k = 0$, so $k = 4$.",
      "$2$ is the repeated zero of $x^2 - 4x + 4 = (x - 2)^2$, not the value of $k$. The constant that makes the quadratic a perfect square is $k = 4$.",
      "$-4$ is a sign error in solving $16 - 4k = 0$. With $k = -4$ the quadratic $x^2 - 4x - 4$ has two distinct real zeros, giving four crossings and no touch point."
    ]
  },
  "q:73bb995d0b8a864e": {
    "options": [
      "$6$",
      "$9$",
      "$10$",
      "$11$"
    ],
    "explanations": [
      "$6$ is one of the break-even months, a root of $(m - 6)(m - 16)$, not a count. At $m = 6$ the profit is exactly zero, not negative.",
      "Factor: $m^2 - 22m + 96 = (m - 6)(m - 16)$, negative strictly between the roots. The whole numbers from $7$ through $15$ number $15 - 7 + 1 = 9$.",
      "$10$ is $16 - 6$, the length of the interval, not the count of whole numbers strictly inside it. Excluding both endpoints leaves $7$ through $15$, nine values.",
      "$11$ counts $6$ through $16$ inclusive, but at those two endpoints the profit is zero, not a loss. Only the nine months strictly between them have $P(m) < 0$."
    ]
  },
  "q:fb1a3ebd4c5d90b8": {
    "options": [
      "$-\\frac{10}{3}$",
      "$\\frac{10}{3}$",
      "$\\frac{3}{10}$",
      "$\\frac{7}{3}$"
    ],
    "explanations": [
      "$-\\frac{10}{3}$ is $\\frac{xy}{x - y}$, a sign error in factoring $y^2 - x^2 = (y - x)(y + x)$. The direct check $\\frac{0.7}{0.21}$ is positive.",
      "Numerator: $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy}$. Denominator: $\\frac{y^2 - x^2}{x^2y^2} = \\frac{(y - x)(y + x)}{x^2y^2}$. Dividing gives $\\frac{xy}{y - x}$, which at $x = 2$, $y = 5$ is $\\frac{10}{3}$.",
      "$\\frac{3}{10}$ is the reciprocal, from flipping the wrong fraction when dividing. Checking directly, $\\frac{0.5 + 0.2}{0.25 - 0.04} = \\frac{0.7}{0.21}$, which is greater than $1$.",
      "$\\frac{7}{3}$ comes from adding numerators and denominators separately or mishandling the negative exponents. The correct simplified form is $\\frac{xy}{y - x} = \\frac{10}{3}$."
    ]
  },
  "q:98e2a47aec1ae6e1": {
    "options": [
      "$c + s \\le 90$, $3c + 2s \\le 210$, $c \\ge 20$",
      "$c + s \\le 90$, $3c + 2s \\le 210$, $c \\le 20$",
      "$c + s \\ge 90$, $3c + 2s \\le 210$, $c \\ge 20$",
      "$c + s \\le 90$, $2c + 3s \\le 210$, $c \\ge 20$"
    ],
    "explanations": [
      "\"At most $90$ acres\" is $c + s \\le 90$; $3$ hours per corn acre and $2$ per soybean acre with \"no more than $210$\" is $3c + 2s \\le 210$; \"at least $20$ acres of corn\" is $c \\ge 20$.",
      "$c \\le 20$ turns \"at least $20$ acres of corn\" into a maximum. \"At least\" sets a lower bound, so the corn constraint must be $c \\ge 20$.",
      "$c + s \\ge 90$ turns \"at most $90$ acres\" into a minimum. \"At most\" caps the total, so the acreage constraint is $c + s \\le 90$.",
      "$2c + 3s \\le 210$ swaps the labor rates, charging $2$ hours per corn acre and $3$ per soybean acre. Corn takes $3$ hours and soybeans $2$, so the term is $3c + 2s$."
    ]
  },
  "q:c825e16ecaf160d0": {
    "options": [
      "$45$",
      "$44$",
      "$55$",
      "$56$"
    ],
    "explanations": [
      "Accepted rods satisfy $23.4 \\le 24.5 - 0.02n \\le 24.6$. The upper bound always holds; the lower gives $n \\le 55$. So rods $1$ to $55$ are accepted and the $100 - 55 = 45$ rods numbered $56$ to $100$ are rejected.",
      "$44$ is an off-by-one count, from treating rod $56$ as the last accepted rod. At $n = 55$ the length is exactly $23.4$ (accepted), and at $n = 56$ it is $23.38$ (rejected), so $45$ rods are rejected.",
      "$55$ is the number of rods ACCEPTED, the natural end of the inequality work. The question asks for the rejected count, the complement: $100 - 55 = 45$.",
      "$56$ is the number of the first rejected rod, not a count. The rejected rods are $56$ through $100$, which is $45$ rods."
    ]
  },
  "q:03ae0b7d24b15fa3": {
    "options": [
      "4.58",
      "5.00",
      "9.17",
      "10.00"
    ],
    "explanations": [
      "$4.58$ is the half-chord, $\\sqrt{25 - 4} = \\sqrt{21}$. The full chord extends on both sides of the perpendicular from the center, so it is $2\\sqrt{21} \\approx 9.17$.",
      "$5.00$ is the radius from completing the square. The $y$-axis is $2$ units from the center $(2, -3)$, so the chord is shorter than a diameter but is not the radius.",
      "Completing the square gives $(x - 2)^2 + (y + 3)^2 = 25$, center $(2, -3)$, radius $5$. The $y$-axis is $2$ from the center, so the half-chord is $\\sqrt{25 - 4} = \\sqrt{21}$ and the chord is $2\\sqrt{21} \\approx 9.17$.",
      "$10.00$ is the diameter, which only a line through the center produces. The $y$-axis misses the center $(2, -3)$ by $2$ units, so its chord is shorter."
    ]
  },
  "q:03152f73b32d3093": {
    "options": [
      "$6$",
      "$2$",
      "$7$",
      "$3$"
    ],
    "explanations": [
      "$6$ is the greatest possible number of units of Y, from $16 + 5y \\le 46$. It is one bound, not the count of possible values, which is $3$.",
      "$2$ is $6 - 4$, subtracting the bounds without counting both endpoints. The values $4$, $5$, and $6$ are all possible, so the count is $3$.",
      "$7$ counts every value from $0$ to $6$, ignoring the profit requirement. Profit $720 + 200y \\ge 1500$ needs $y \\ge 4$, which rules out $0$ through $3$.",
      "Machine time: $2(8) + 5y \\le 46$ gives $y \\le 6$. Profit: $90(8) + 200y \\ge 1500$ gives $y \\ge 3.9$, so $y \\ge 4$. The possible values are $4$, $5$, $6$: three possibilities."
    ]
  },
  "q:2d8cbf936ae50b5d": {
    "options": [
      "$-5$",
      "$1$",
      "$3$",
      "$5$"
    ],
    "explanations": [
      "$-5$ is a sign error on the last step. With $c = -5$ the left side is $-7x - 20$, which is not identical to $3x + 20$, so the equation would have exactly one solution.",
      "$1$ comes from mis-solving $c - 2 = 3$ as $c = 3 - 2$. Adding $2$ to both sides gives $c = 5$, and the constants $4c = 20$ confirm it.",
      "$3$ ignores the $-2x$ term and matches $c$ directly to the $3$ on the right. The full $x$-coefficient on the left is $c - 2$, so $c - 2 = 3$ gives $c = 5$.",
      "The left side is $(c - 2)x + 4c$. Infinitely many solutions require both sides identical: $c - 2 = 3$ gives $c = 5$, and $4c = 20$ also gives $c = 5$."
    ]
  },
  "q:de2c05e69b9eeaa0": {
    "options": [
      "$\\$46$",
      "$\\$140$",
      "$\\$186$",
      "$\\$274.17$"
    ],
    "explanations": [
      "$\\$46$ is the flat fee, $94 - 0.40(120)$, an intermediate value. The $350$-mile trip adds mileage: $46 + 0.40(350) = 186$.",
      "$\\$140$ is the mileage charge alone, $0.40 \\times 350$, with the flat fee left off. Adding the $\\$46$ fee gives $\\$186$.",
      "Rate: $\\frac{126 - 94}{200 - 120} = 0.40$ dollars per mile. Flat fee: $94 - 0.40(120) = 46$. A $350$-mile trip costs $46 + 0.40(350) = 186$ dollars.",
      "$\\$274.17$ treats the first trip as pure mileage, $94/120 \\approx 0.783$ per mile, times $350$. That ignores the flat fee and the second data point that pins down the real rate."
    ]
  },
  "q:59f06b505480c080": {
    "options": [
      "-24",
      "-35",
      "-60",
      "-54"
    ],
    "explanations": [
      "$-24$ does not match $b^2 - 4ac$ for these coefficients; $49 - 84 = -35$. It could come from mis-multiplying $4ac$ as $73$ or misreading a coefficient.",
      "The discriminant is $b^2 - 4ac = 7^2 - 4(3)(7) = 49 - 84 = -35$. Being negative, it confirms the equation has no real roots.",
      "$-60$ could come from $24 - 84$, computing $b^2$ wrongly. The correct $b^2$ is $49$, so the discriminant is $49 - 84 = -35$.",
      "$-54$ does not equal $49 - 84$. With $a = 3$, $b = 7$, $c = 7$, the product $4ac = 84$ and the discriminant is $-35$."
    ]
  },
  "q:fd7b95e765c5b002": {
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{3}$",
      "$\\frac{5x^2}{3}$",
      "$\\frac{5}{3x}$"
    ],
    "explanations": [
      "$\\frac{3}{5}$ is the reciprocal of the correct answer, as if the fractions had been divided the other way. Multiplying straight across gives $\\frac{5x}{3x} = \\frac{5}{3}$.",
      "Multiply numerators and denominators: $\\frac{5x \\cdot 1}{3 \\cdot x} = \\frac{5x}{3x}$. The $x$ cancels (it is nonzero), leaving $\\frac{5}{3}$.",
      "$\\frac{5x^2}{3}$ multiplies by $x$ instead of by $\\frac{1}{x}$. Multiplying by $\\frac{1}{x}$ divides by $x$, which cancels the $x$ in the numerator.",
      "$\\frac{5}{3x}$ puts the $x$ in the denominator but forgets the $x$ already in the numerator. The two cancel, leaving $\\frac{5}{3}$."
    ]
  },
  "q:004f5553e1f4f5e6": {
    "options": [
      "-2",
      "3",
      "7",
      "4"
    ],
    "explanations": [
      "$-2$ is negative and its square is $4$, not $9$. The exponent $\\frac{1}{2}$ means the principal (nonnegative) square root, which is $3$.",
      "An exponent of $\\frac{1}{2}$ means the square root: $9^{1/2} = \\sqrt{9} = 3$, since $3^2 = 9$.",
      "$7^2 = 49$, not $9$. The square root of $9$ is $3$.",
      "$4$ is close to $9 \\times \\frac{1}{2} = 4.5$, treating the exponent as multiplication. A fractional exponent of $\\frac{1}{2}$ means a square root, and $\\sqrt{9} = 3$."
    ]
  },
  "q:6c9377ce7e30ee53": {
    "options": [
      "7",
      "5",
      "11",
      "2"
    ],
    "explanations": [
      "$7$ is $35 \\div 5$, dividing by $y$ instead of substituting it. Substituting $y = 5$ gives $4x + 15 = 35$, so $x = 5$.",
      "Substitute $y = 5$: $4x + 3(5) = 35$, so $4x = 20$ and $x = 5$.",
      "$11$ comes from adding $15$ instead of subtracting, $4x = 50$ read loosely, or similar. Correctly, $4x = 35 - 15 = 20$, so $x = 5$.",
      "$2$ would give $4(2) + 15 = 23 \\ne 35$. After substituting $y = 5$, the equation $4x = 20$ gives $x = 5$."
    ]
  },
  "q:f21588faa0c8f713": {
    "options": [
      "$x = 8$ or $x = 2$",
      "$x = 16$",
      "$x = 10$",
      "$x = -8$ or $x = -2$"
    ],
    "explanations": [
      "By the zero product property, a product is zero when a factor is zero: $x - 8 = 0$ or $x - 2 = 0$, so $x = 8$ or $x = 2$.",
      "$16$ is the product of the roots $8 \\times 2$, the constant term of the expanded quadratic, not a solution. Substituting $x = 16$ gives $8 \\times 14 \\ne 0$.",
      "$10$ is the sum of the roots $8 + 2$, not a solution. Substituting gives $(10 - 8)(10 - 2) = 16 \\ne 0$.",
      "$x = -8$ or $x = -2$ flips the signs. The factor $x - 8$ is zero when $x = +8$, not $-8$; at $x = -8$ the product is $(-16)(-10) = 160$."
    ]
  },
  "q:b3c522ca1e748d48": {
    "options": [
      "115",
      "109",
      "124",
      "119"
    ],
    "explanations": [
      "$115$ is $5(15) + 40$, using the wrong intercept. The intercept is $49$, so $75 + 49 = 124$.",
      "$109$ is $5(12) + 49$, substituting $12$ instead of $15$. With $x = 15$, $5(15) + 49 = 124$.",
      "Substitute $x = 15$ into the line: $\\hat{y} = 5(15) + 49 = 75 + 49 = 124$.",
      "$119$ is $5(14) + 49$, an off-by-one in $x$. The requested input is $x = 15$, giving $124$."
    ]
  },
  "q:4a231062c495a228": {
    "options": [
      "$[0, \\infty)$",
      "$(1, \\infty)$",
      "$(-\\infty, \\infty)$",
      "$(0, \\infty)$"
    ],
    "explanations": [
      "$[0, \\infty)$ includes $0$, but $3^x$ never equals $0$; it only approaches $0$ as $x \\to -\\infty$. The endpoint must be open.",
      "$(1, \\infty)$ ignores negative inputs: for $x < 0$, $3^x$ is between $0$ and $1$, for example $3^{-1} = \\frac{1}{3}$. The range extends below $1$.",
      "$(-\\infty, \\infty)$ is the domain, not the range. An exponential with positive base is never zero or negative.",
      "$3^x$ is positive for every real $x$, gets arbitrarily close to $0$ without reaching it, and grows without bound, so the range is $(0, \\infty)$."
    ]
  },
  "q:1440fe5eaa518354": {
    "options": [
      "Exactly one solution",
      "Infinitely many solutions",
      "Exactly two solutions",
      "No solution"
    ],
    "explanations": [
      "Exactly one solution would require the $x$-coefficients to differ after simplifying. Here both sides become $4x + 16$, so the $x$-terms cancel completely.",
      "Distributing the left side gives $4x + 16$, identical to the right side. The equation is true for every $x$, so there are infinitely many solutions.",
      "A linear equation can never have exactly two solutions; the possibilities are one, none, or infinitely many. Here the two sides are identical.",
      "No solution would require matching $x$-coefficients but different constants, as in $4x + 16 = 4x + 10$. Here the constants also match, so every $x$ works."
    ]
  },
  "q:6cb8b06f55bd1054": {
    "options": [
      "$19$",
      "$18$",
      "$36$",
      "$37$"
    ],
    "explanations": [
      "No real solutions requires $b^2 - 4ac < 0$: $144 - 8c < 0$, so $c > 18$. The least integer greater than $18$ is $19$.",
      "$18$ makes the discriminant exactly $0$, which gives one repeated real solution ($x = 3$), not zero solutions. The inequality is strict, so $c$ must exceed $18$.",
      "$36$ comes from $144 - 4c < 0$, forgetting the leading coefficient $a = 2$ in $4ac$. With $4ac = 8c$, the boundary is $c = 18$, not $36$.",
      "$37$ is the least integer past the mistaken boundary $c > 36$, which drops the factor $a = 2$ from $4ac$. The correct discriminant $144 - 8c$ gives $c > 18$."
    ]
  },
  "q:9620f00d717794ce": {
    "options": [
      "Crossing lines",
      "Parallel lines",
      "The same line",
      "Perpendicular"
    ],
    "explanations": [
      "Crossing lines have different slopes. These lines both have slope $-3$, so they never intersect.",
      "Both lines have slope $-3$, so they rise and fall at the same rate, but their $y$-intercepts differ ($2$ versus $5$). Same slope, different intercept means parallel.",
      "The same line would need identical slope and identical intercept. The intercepts here are $2$ and $5$, so the lines are distinct.",
      "Perpendicular lines have slopes whose product is $-1$, such as $-3$ and $\\frac{1}{3}$. Both of these slopes are $-3$, with product $9$."
    ]
  },
  "q:0afa1be16486940b": {
    "options": [
      "$20$",
      "$36$",
      "$275.2$",
      "$303$"
    ],
    "explanations": [
      "$K(C(86)) = K(30) = 303$ and $K(C(122)) = K(50) = 323$, so the increase is $323 - 303 = 20$ kelvins. Equivalently, the composite has slope $\\frac{5}{9}$, and $\\frac{5}{9}(36) = 20$.",
      "$36$ is the change in the Fahrenheit reading, $122 - 86$, the input change rather than the output change. Each Fahrenheit degree is only $\\frac{5}{9}$ kelvin, so the kelvin change is $20$.",
      "$275.2$ feeds the difference $36$ through the whole composite, $\\frac{5}{9}(36 - 32) + 273$. The $-32$ and $+273$ offsets apply to readings, not to a change; only the slope $\\frac{5}{9}$ applies to a difference.",
      "$303$ is the kelvin reading at $86°$F, an intermediate value, not the increase. The reading at $122°$F is $323$, so the change is $20$."
    ]
  },
  "q:9c4f99e3dcc198dc": {
    "options": [
      "$-6$",
      "$-5$",
      "$-10$",
      "$4$"
    ],
    "explanations": [
      "$-6$ is the value of $a$, found from $4a = -24$. The question asks for $P(1) = 1 + a + b = 1 - 6 - 5 = -10$.",
      "$-5$ is the value of $b$, from $b = a + 1$. It is an intermediate value; $P(1) = 1 + a + b = -10$.",
      "$P(3) = 27 + 3a + b = 4$ gives $3a + b = -23$, and $P(-1) = -1 - a + b = 0$ gives $b = a + 1$. So $4a + 1 = -23$, $a = -6$, $b = -5$, and $P(1) = 1 - 6 - 5 = -10$.",
      "$4$ is the given remainder, which equals $P(3)$ by the remainder theorem, not $P(1)$. Evaluating at $1$ with $a = -6$ and $b = -5$ gives $-10$."
    ]
  },
  "q:2d807117d9d7f4eb": {
    "options": [
      "$\\frac{3}{2}$",
      "$\\frac{1}{9}$",
      "$\\frac{1}{27}$",
      "$27$"
    ],
    "explanations": [
      "$\\frac{3}{2}$ is the value of $x$, from $-2x = 2x - 6$. The question asks for $9^{x-3}$, which is $9^{-3/2} = \\frac{1}{27}$.",
      "$\\frac{1}{9}$ is $9^{-1}$, treating the exponent $x - 3$ as $-1$. With $x = \\frac{3}{2}$, the exponent is $-\\frac{3}{2}$, giving $\\frac{1}{27}$.",
      "In base $3$: $3^{-2x} = 3^{2x-6}$, so $-2x = 2x - 6$ and $x = \\frac{3}{2}$. Then $9^{x-3} = 9^{-3/2} = \\frac{1}{(\\sqrt{9})^3} = \\frac{1}{27}$.",
      "$27$ drops the negative sign in the exponent, computing $9^{3/2}$ instead of $9^{-3/2}$. Since $x - 3 = -\\frac{3}{2}$ is negative, the value is the reciprocal, $\\frac{1}{27}$."
    ]
  },
  "q:a6baa371c6316702": {
    "options": [
      "$\\$14$",
      "$\\$210$",
      "$\\$234$",
      "$\\$444$"
    ],
    "explanations": [
      "$\\$14$ is the number of pounds of $\\$15$ beans, not a cost. The question asks for the total cost of those beans, $15 \\times 14 = 210$ dollars.",
      "With $x + y = 40$ and $9x + 15y = 11.10(40) = 444$, substituting $x = 40 - y$ gives $360 + 6y = 444$, so $y = 14$ pounds. The $\\$15$ beans cost $15(14) = 210$ dollars.",
      "$\\$234$ is $9 \\times 26$, the cost of the $\\$9$ beans, the other component of the blend. The question asks about the $\\$15$ beans, which cost $\\$210$.",
      "$\\$444$ is the total cost of the whole $40$-pound blend, $11.10 \\times 40$. It is the right side of the cost equation, not the cost of the $\\$15$ beans alone."
    ]
  },
  "q:1b62e3e55bddd2d3": {
    "options": [
      "$x = 9$ or $x = -3$",
      "$x = 9$ or $x = 3$",
      "$x = 9$ only",
      "$x = 6$ or $x = -6$"
    ],
    "explanations": [
      "$|x - 3| = 6$ means $x - 3 = 6$ or $x - 3 = -6$. The first gives $x = 9$ and the second gives $x = -3$.",
      "$x = 3$ gives $|3 - 3| = 0 \\ne 6$. The second case $x - 3 = -6$ leads to $x = -3$, not $3$; this choice drops the sign when solving.",
      "$9$ is only one solution. An absolute value equation with a positive right side has two: $x - 3$ can be $6$ or $-6$, and the second gives $x = -3$.",
      "$x = \\pm 6$ solves $|x| = 6$, ignoring the $-3$ inside the absolute value. Checking $x = 6$: $|6 - 3| = 3 \\ne 6$."
    ]
  },
  "q:bda2c4d191ee60ad": {
    "options": [
      "$1.5$",
      "$3$",
      "$3.5$",
      "$6$"
    ],
    "explanations": [
      "$g(x) = 10$ means $f(2x) + 3 = 10$, so $f(2x) = 7$. The table gives $f(3) = 7$, so $2x = 3$ and $x = 1.5$.",
      "$3$ is the value of $2x$, the input to $f$ that produces $7$. The question asks for $x$ itself, which is half of that: $1.5$.",
      "$3.5$ ignores the function $f$ entirely and solves $2x + 3 = 10$. The rule applies $f$ to $2x$ before adding $3$, and $f(2x)$ must equal $7$.",
      "$6$ comes from reading the rule as $f(x/2) + 3$, which would need $x/2 = 3$. The rule uses $2x$, a horizontal compression, so $2x = 3$ gives $x = 1.5$."
    ]
  },
  "q:bc790181d4ab5a78": {
    "options": [
      "$\\$17$",
      "$\\$368$",
      "$\\$414$",
      "$\\$782$"
    ],
    "explanations": [
      "$\\$17$ is the number of months, from $8m - 90 = 46$, not an amount paid. Plan B's total after $17$ months is $130 + 14(17) = 368$ dollars.",
      "Plan A totals $40 + 22m$ and Plan B totals $130 + 14m$. Setting $(40 + 22m) - (130 + 14m) = 46$ gives $8m = 136$, so $m = 17$. Plan B's total is $130 + 14(17) = 368$.",
      "$\\$414$ is Plan A's total at $17$ months, $40 + 22(17)$. The question asks for Plan B's total, which is $\\$46$ less: $\\$368$.",
      "$\\$782$ is the sum of both plans' totals, $414 + 368$. The question asks only for the amount paid under Plan B."
    ]
  },
  "q:3d2c8502b740a79b": {
    "options": [
      "$\\frac{12x^2}{4}$",
      "$\\frac{7x}{8}$",
      "$\\frac{7x}{4}$",
      "$\\frac{7x}{16}$"
    ],
    "explanations": [
      "$\\frac{12x^2}{4}$ multiplies the numerators ($3x \\cdot 4x$) instead of adding them. Adding fractions with a common denominator adds the numerators: $3x + 4x = 7x$.",
      "$\\frac{7x}{8}$ adds the denominators as well as the numerators. With a common denominator, the denominator stays $4$; only the numerators are added.",
      "The denominators are already equal, so add the numerators and keep the denominator: $\\frac{3x + 4x}{4} = \\frac{7x}{4}$.",
      "$\\frac{7x}{16}$ multiplies the denominators, $4 \\cdot 4$, as if finding a new common denominator were needed. The denominators already match, so the result keeps $4$."
    ]
  },
  "q:b4288eb6fe6e5479": {
    "options": [
      "$\\frac{8}{9}$",
      "$\\frac{9}{8}$",
      "$8$",
      "$9$"
    ],
    "explanations": [
      "Infinitely many solutions means the equations are proportional. The $y$-coefficients show the first is $2$ times the second, so $a = 2(4) = 8$ and $18 = 2c$ gives $c = 9$. Then $\\frac{a}{c} = \\frac{8}{9}$.",
      "$\\frac{9}{8}$ is $\\frac{c}{a}$, the reciprocal of what was asked. With $a = 8$ and $c = 9$, $\\frac{a}{c} = \\frac{8}{9}$.",
      "$8$ is the value of $a$ alone, an intermediate value. The question asks for the ratio $\\frac{a}{c}$, which is $\\frac{8}{9}$.",
      "$9$ is the value of $c$ alone, an intermediate value. The requested quantity is $\\frac{a}{c} = \\frac{8}{9}$."
    ]
  },
  "q:503b34246a79364f": {
    "options": [
      "54",
      "50",
      "40",
      "45"
    ],
    "explanations": [
      "Expected count is probability times number of trials: $0.03 \\times 1800 = 54$ defective bulbs.",
      "$50$ is close but does not equal $0.03 \\times 1800$; it would correspond to a defect rate of about $2.8\\%$. The exact expected value is $54$.",
      "$40$ would be the expected count at a rate of about $2.2\\%$, not $3\\%$. Three percent of $1800$ is $54$.",
      "$45$ is $2.5\\%$ of $1800$, not $3\\%$. Multiplying $1800$ by $0.03$ gives $54$."
    ]
  },
  "q:99862b1566dbc9f8": {
    "options": [
      "$26$",
      "$25$",
      "$30$",
      "$38$"
    ],
    "explanations": [
      "Morning volunteers give $20(4) = 80$ hours, so afternoon volunteers must supply $260 - 80 = 180$ hours. $7a \\ge 180$ gives $a \\ge 25.71$, so the least whole number is $26$ (total $46$ volunteers, within the cap).",
      "$25$ rounds $25.71$ down, but $25$ afternoon volunteers give only $175$ hours, which with the $80$ morning hours falls short of $260$.",
      "$30$ is $50 - 20$, the greatest number of afternoon volunteers the cap allows, not the least number needed. The question asks for the minimum that meets the hours requirement.",
      "$38$ ignores the morning volunteers, dividing all $260$ hours by $7$. The $80$ morning hours reduce what the afternoon group must cover to $180$ hours."
    ]
  },
  "q:2080d9ed51ad7a73": {
    "options": [
      "8.0",
      "16.9",
      "25.9",
      "48.0"
    ],
    "explanations": [
      "$8.0$ is the length of the chord alone, from $x = 0$ to $x = 8$. The triangle's other two sides are radii of length $\\sqrt{20}$, which must be added.",
      "At $y = 3$: $(x - 4)^2 + 4 = 20$, so $x = 0$ or $8$, a chord of length $8$. The other two sides are radii $\\sqrt{20} \\approx 4.47$. Perimeter $\\approx 8 + 2(4.47) = 16.9$.",
      "$25.9$ uses the diameter $2\\sqrt{20}$ for each of the two sides from the center. Those sides run from the center to the circle, so each is a radius, $\\sqrt{20}$.",
      "$48.0$ treats $20$ as the radius instead of $r^2$, giving $8 + 2(20)$. The equation's right side is $r^2 = 20$, so $r = \\sqrt{20} \\approx 4.47$."
    ]
  },
  "q:371c6244776ba35f": {
    "options": [
      "4",
      "2",
      "6",
      "3"
    ],
    "explanations": [
      "$x^{-2} = \\frac{1}{x^2}$, so $\\frac{1}{x^2} = \\frac{1}{16}$ and $x^2 = 16$. With $x > 0$, $x = 4$.",
      "$2$ would give $x^{-2} = \\frac{1}{4}$, not $\\frac{1}{16}$. This treats the equation as $x^2 = 4$, or confuses $16 = 2^4$ with a square.",
      "$6$ gives $x^{-2} = \\frac{1}{36}$, not $\\frac{1}{16}$. The equation requires $x^2 = 16$.",
      "$3$ gives $x^{-2} = \\frac{1}{9}$, not $\\frac{1}{16}$. The square that equals $16$ is $4^2$."
    ]
  },
  "q:c374a2f5e1a1b68a": {
    "options": [
      "$\\$1.35$",
      "$\\$9.72$",
      "$\\$16.20$",
      "$\\$32.40$"
    ],
    "explanations": [
      "$\\$1.35$ is the mass of butter in kilograms, $\\frac{3}{10} \\times 4.5$, not a cost. Multiplying by $\\$7.20$ per kilogram gives $\\$9.72$.",
      "The ratio has $10$ parts, so butter is $\\frac{3}{10}$ of the dough: $0.3 \\times 4.5 = 1.35$ kg. At $\\$7.20$ per kilogram, the cost is $1.35 \\times 7.20 = \\$9.72$.",
      "$\\$16.20$ prices $2.25$ kilograms, treating butter as half the dough. Butter is only $3$ of the $10$ ratio parts, or $1.35$ kg.",
      "$\\$32.40$ prices the entire $4.5$ kilograms of dough at the butter rate, $4.5 \\times 7.20$. Only the butter portion, $1.35$ kg, should be priced."
    ]
  },
  "q:1b7c00cddd307894": {
    "options": [
      "$\\frac{14}{35}$ and $\\frac{10}{36}$",
      "$\\frac{14}{71}$ and $\\frac{10}{71}$",
      "$\\frac{14}{24}$ and $\\frac{10}{24}$",
      "$\\frac{14}{36}$ and $\\frac{10}{35}$"
    ],
    "explanations": [
      "$\\frac{14}{35}$ and $\\frac{10}{36}$ swap the group sizes, dividing the boys' count by the number of girls and vice versa. Each rate must use its own group's size.",
      "Dividing both by $71$ gives each count's share of the whole group, not the rate within boys or within girls. A shared denominator just compares the raw counts $14$ and $10$.",
      "Dividing by $24$, the total who made that choice, answers what fraction of those choosers were boys or girls, the reversed question. A rate within a group divides by that group's size.",
      "A rate within a group divides that group's count by its own size: boys $\\frac{14}{36}$ and girls $\\frac{10}{35}$. These can be compared directly."
    ]
  },
  "q:c36326faec0877cd": {
    "options": [
      "$\\frac{3\\pi}{2}$",
      "$4\\pi$",
      "$6\\pi$",
      "$2\\pi$"
    ],
    "explanations": [
      "$\\frac{3\\pi}{2}$ is $6 \\cdot \\frac{\\pi}{4}$, using a central angle of $\\frac{\\pi}{4}$ instead of $\\frac{\\pi}{3}$.",
      "$4\\pi$ is $6 \\cdot \\frac{2\\pi}{3}$, doubling the central angle. The given angle is $\\frac{\\pi}{3}$, so $s = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$.",
      "$6\\pi$ is $r \\cdot \\pi$, half the circumference, as if the angle were $\\pi$ radians. The angle $\\frac{\\pi}{3}$ is one sixth of a full turn.",
      "Arc length is $s = r\\theta$ with $\\theta$ in radians: $s = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$. Equivalently, $\\frac{\\pi}{3}$ is one sixth of the $12\\pi$ circumference."
    ]
  },
  "q:4485332430fa0a34": {
    "options": [
      "$5x - 2$",
      "$6x + 1$",
      "$3x - 5$",
      "$6x - 12$"
    ],
    "explanations": [
      "$5x - 2$ is $f(x) + g(x)$, adding the two functions instead of composing them. Composition substitutes $f(x)$ into $g$.",
      "$g(f(x))$ substitutes $f(x) = 3x + 3$ into $g$: $2(3x + 3) - 5 = 6x + 6 - 5 = 6x + 1$.",
      "$3x - 5$ mixes the slope of $f$ with the constant of $g$; it is neither composition. Substituting $3x + 3$ into $g$ doubles the whole expression first.",
      "$6x - 12$ is $f(g(x)) = 3(2x - 5) + 3$, the composition in the opposite order. The question asks for $g(f(x))$, which is $6x + 1$."
    ]
  },
  "q:14260b3206460474": {
    "options": [
      "$26$",
      "$34$",
      "$52$",
      "$60$"
    ],
    "explanations": [
      "$26$ is the number of fruit cups, from $4f = 104$, an intermediate value. The total adds the $34$ granola bars: $60$.",
      "$34$ is the number of granola bars, $26 + 8$, an intermediate value. The question asks for all items, $26 + 34 = 60$.",
      "$52$ doubles the fruit-cup count $26$, which would be right only if the two counts were equal. Granola bars number $8$ more, so the total is $26 + 34 = 60$.",
      "With $f$ fruit cups and $f + 8$ granola bars, $1.75(f + 8) + 2.25f = 118$ gives $4f + 14 = 118$, so $f = 26$ and bars $= 34$. Total items: $26 + 34 = 60$."
    ]
  },
  "q:d544c0ae08e150de": {
    "options": [
      "$-12$",
      "$-3$",
      "$0$",
      "$40$"
    ],
    "explanations": [
      "$-12$ is the value of $m$, found from the zero discriminant $(6 + m)^2 - 36 = 0$ with $m$ negative. It is the first intermediate, not the $y$-coordinate.",
      "$-3$ is the $x$-coordinate of the intersection, from $x^2 + 6x + 9 = 0$. The question asks for the $y$-coordinate, $(-3)^2 - 6(-3) + 13 = 40$.",
      "$0$ is the rejected value of $m$ from $6 + m = 6$; it is not negative, so it does not fit. It is also not a coordinate of the intersection point.",
      "Setting $x^2 - 6x + 13 = mx + 4$ gives $x^2 - (6 + m)x + 9 = 0$. One intersection needs $(6 + m)^2 = 36$, so $m = -12$ (negative). Then $x = -3$ and $y = 9 + 18 + 13 = 40$."
    ]
  },
  "q:4f593d784e8aac7a": {
    "options": [
      "95",
      "65",
      "137",
      "63"
    ],
    "explanations": [
      "Two years is exactly one half-life, so the amount is halved once: $190/2 = 95$ grams.",
      "$65$ is not half of $190$. After one half-life exactly half remains, $95$ grams.",
      "$137$ is more than half of $190$, but one full half-life has passed, which leaves exactly half: $95$ grams.",
      "$63$ is about one third of $190$, which does not correspond to a half-life. One half-life leaves $190/2 = 95$ grams."
    ]
  },
  "q:42538d593e8169a6": {
    "options": [
      "$x=2$",
      "$x=4$",
      "$x=\\frac{13}{2}$",
      "$x=\\frac{9}{2}$"
    ],
    "explanations": [
      "$x = 2$ is an excluded value: it makes $x - 2$ and $x^2 - 4$ zero, so the equation is undefined there. It cannot be a solution.",
      "$x = 4$ comes from dropping the $5$ when clearing denominators, solving $x + 2 = 3(x - 2)$. The full numerator is $5 + (x + 2)$.",
      "Since $x^2 - 4 = (x - 2)(x + 2)$, multiply through by it: $5 + (x + 2) = 3(x - 2)$, so $x + 7 = 3x - 6$ and $x = \\frac{13}{2}$, which is not an excluded value.",
      "$x = \\frac{9}{2}$ comes from expanding $3(x - 2)$ as $3x - 2$ instead of $3x - 6$. Distributing correctly gives $x + 7 = 3x - 6$, so $x = \\frac{13}{2}$."
    ]
  },
  "q:d5779c2af7a0cd4d": {
    "options": [
      "$-16$",
      "$-20$",
      "$1$",
      "$20$"
    ],
    "explanations": [
      "Expand: $(x - 2)^2 = x^2 - 4x + 4$, and $(x^2 - 4x + 4)(x + 5) = x^3 + x^2 - 16x + 20$. The linear coefficient is $-20x + 4x = -16x$, so $b = -16$.",
      "$-20$ collects only the $-20x$ term from $-4x \\cdot 5$ and forgets the $+4x$ from $4 \\cdot x$. Together they give $-16x$.",
      "$1$ is the value of $a$, the $x^2$-coefficient ($5x^2 - 4x^2$). The question asks for $b$, the coefficient of $x$, which is $-16$.",
      "$20$ is the value of $c$, the constant term $4 \\cdot 5$. The question asks for $b$, the coefficient of $x$, which is $-16$."
    ]
  },
  "q:55888ae544f74cae": {
    "options": [
      "28",
      "14",
      "32.2",
      "56"
    ],
    "explanations": [
      "The fourth vertex is $S = P + \\overrightarrow{QR} = (3, 8)$. With sides $\\overrightarrow{PQ} = (5, 1)$ and $\\overrightarrow{PS} = (2, 6)$, the area is $|5 \\cdot 6 - 1 \\cdot 2| = 28$.",
      "$14$ halves the correct area, treating the figure as triangle $PQR$. A parallelogram is two such triangles, so its area is $28$.",
      "$32.2$ multiplies the side lengths $\\sqrt{26}$ and $\\sqrt{40}$, which gives the area only if the sides are perpendicular. They are not, so this overstates the area.",
      "$56$ doubles the correct area, as if the cross-product value $28$ were a triangle's area needing to be doubled. The determinant already gives the parallelogram's area."
    ]
  },
  "q:d459343e1aba5f17": {
    "options": [
      "30",
      "18",
      "23",
      "14"
    ],
    "explanations": [
      "$30$ is the maximum value in the list, not the range. The range is the spread from minimum to maximum, $30 - 16 = 14$.",
      "$18$ is the median of the list ($16, 17, 18, 22, 30$), not the range. The range measures spread: $30 - 16 = 14$.",
      "$23$ does not equal the difference between the largest and smallest values. The maximum is $30$ and the minimum is $16$, so the range is $14$.",
      "The range is the maximum minus the minimum. The largest value is $30$ and the smallest is $16$, so the range is $30 - 16 = 14$."
    ]
  },
  "q:67e757b7b4bc2881": {
    "options": [
      "Dashed line, shading below",
      "Dashed line, shading above",
      "Solid line, shading above",
      "Solid line, shading below"
    ],
    "explanations": [
      "A dashed line is used for strict inequalities ($<$ or $>$). The symbol $\\le$ includes the boundary, so the line must be solid.",
      "This gets both parts wrong: $\\le$ includes the boundary (solid line), and $y \\le$ something means $y$-values below the line.",
      "The solid line is right, but $y \\le x + 3$ means $y$ is at or below the line, so the shading goes below, not above.",
      "The $\\le$ symbol includes the boundary, so the line $y = x + 3$ is solid. Points satisfying $y \\le x + 3$ have $y$-values at or below the line, so shade below."
    ]
  },
  "q:015a10b324b11ba4": {
    "options": [
      "3",
      "1",
      "6",
      "2"
    ],
    "explanations": [
      "$3$ does not equal $\\frac{10}{5}$. The rise from $19$ to $29$ is $10$ over a run of $5$, giving slope $2$.",
      "$1$ would mean $y$ rises one unit per unit of $x$, but $y$ rises $10$ over $5$ units of $x$. The slope is $\\frac{10}{5} = 2$.",
      "$6$ could come from dividing $29$ by $5$ and rounding, forgetting to subtract the starting $y$-value $19$. Slope uses the change in $y$, $29 - 19 = 10$.",
      "Slope is rise over run: $\\frac{29 - 19}{5 - 0} = \\frac{10}{5} = 2$."
    ]
  },
  "q:2238f965b73b3193": {
    "options": [
      "$6$",
      "$12$",
      "$18$",
      "$20$"
    ],
    "explanations": [
      "$6$ is the largest allowed value of $k$, from $12 + 3k \\le 30$, an intermediate value. The question asks for the sum of all allowed integers, $3 + 4 + 5 + 6 = 18$.",
      "$12$ excludes $k = 6$, treating $4x + 3y \\le 30$ as strict. At $(3, 6)$, $12 + 18 = 30$, which satisfies $\\le 30$, so $6$ is included.",
      "At $x = 3$: $k > 2(3) - 4 = 2$, so $k \\ge 3$; and $12 + 3k \\le 30$, so $k \\le 6$. The integers $3, 4, 5, 6$ sum to $18$.",
      "$20$ includes $k = 2$, but the first inequality is strict: $2 > 2$ is false, so $(3, 2)$ lies on the boundary line and is not in the region."
    ]
  },
  "q:711e56dd8419838b": {
    "options": [
      "$0$",
      "$1$",
      "$-1$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "explanations": [
      "$0$ is $\\sin 0°$ or $\\cos 90°$. At $90°$ the unit-circle point is $(0, 1)$, whose $y$-coordinate, the sine, is $1$.",
      "At $90°$ the terminal point on the unit circle is $(0, 1)$, and sine is the $y$-coordinate, so $\\sin 90° = 1$.",
      "$-1$ is $\\sin 270°$, at the bottom of the unit circle. At $90°$ the point is at the top, $(0, 1)$, so the sine is $+1$.",
      "$\\frac{\\sqrt{2}}{2}$ is $\\sin 45°$. At $90°$ the sine reaches its maximum value of $1$."
    ]
  },
  "q:6f98dec9481cc615": {
    "options": [
      "The amount $f(x)$ increases each step",
      "The value of $f(x)$ when $x = 1$",
      "The value of $f(x)$ when $x = 0$",
      "The factor $f(x)$ is multiplied by each step"
    ],
    "explanations": [
      "An exponential function does not increase by a fixed amount each step; it multiplies. The constant $211$ is the starting value, not an additive increment.",
      "$f(1) = 211 \\cdot 3^1 = 633$, not $211$. The coefficient equals the output at $x = 0$, since $3^0 = 1$.",
      "At $x = 0$, $3^0 = 1$, so $f(0) = 211 \\cdot 1 = 211$. The coefficient in front of the power is the initial value of the function.",
      "The factor applied each step is the base, $3$: every time $x$ increases by $1$, the output triples. $211$ is the initial value, not the growth factor."
    ]
  },
  "q:ab255faeb1efff37": {
    "options": [
      "7",
      "-3",
      "2",
      "1"
    ],
    "explanations": [
      "$7$ gives $x^2 = 49$, not $1$. The intersection requires $x^2 = 1$, so $x = \\pm 1$.",
      "$-3$ is negative and $(-3)^2 = 9 \\ne 1$. The question asks for the positive solution of $x^2 = 1$, which is $1$.",
      "$2$ gives $x^2 = 4 \\ne 1$. Substituting $y = 1$ into $y = x^2$ requires $x^2 = 1$.",
      "Setting the equations equal gives $x^2 = 1$, so $x = \\pm 1$. The positive $x$-value is $1$."
    ]
  },
  "q:ba824e9d8437bb79": {
    "options": [
      "7",
      "5",
      "6",
      "4"
    ],
    "explanations": [
      "$7$ is the exponent in the denominator, left unchanged. The quotient rule subtracts the exponents: $12 - 7 = 5$.",
      "Dividing powers with the same base subtracts the exponents: $\\frac{5^{12}}{5^7} = 5^{12 - 7} = 5^5$.",
      "$6$ is an arithmetic slip; $12 - 7 = 5$, not $6$. The quotient rule gives $5^5$.",
      "$4$ does not equal $12 - 7$. Subtracting the exponents correctly gives $5$."
    ]
  },
  "q:3cf0c924af6fb100": {
    "options": [
      "$163x$ hours",
      "$\\frac{163}{x}$ hours",
      "$\\frac{x}{163}$ hours",
      "$\\frac{163}{60x}$ hours"
    ],
    "explanations": [
      "$163x$ multiplies distance by speed, which gives units of miles squared per hour, not time. Time is distance divided by speed.",
      "Distance equals rate times time, so time is distance divided by rate: $\\frac{163}{x}$ hours.",
      "$\\frac{x}{163}$ divides speed by distance, inverting the formula. Faster speed should mean less time, but this expression grows with $x$.",
      "$\\frac{163}{60x}$ introduces a factor of $60$ as if converting to minutes or hours, but the speed is already in miles per hour, so no conversion is needed."
    ]
  },
  "q:af35f8ab00558009": {
    "options": [
      "$2{,}178.58$",
      "$3{,}240.00$",
      "$9{,}924.62$",
      "$12{,}103.20$"
    ],
    "explanations": [
      "$V(2) = 18000(0.82)^2 = 12{,}103.20$ and $V(3) = 18000(0.82)^3 = 9{,}924.62$. The loss during the third year is $12103.20 - 9924.62 = \\$2{,}178.58$.",
      "$3{,}240.00$ is $18$ percent of the original $\\$18{,}000$, the loss during the FIRST year. Each year's $18$ percent applies to a smaller value, so the third-year loss is less.",
      "$9{,}924.62$ is the truck's value at $t = 3$, an intermediate value. The loss during the third year is the drop from $V(2)$ to $V(3)$.",
      "$12{,}103.20$ is the truck's value at $t = 2$, the start of the third year. The question asks how much is lost during that year, $V(2) - V(3)$."
    ]
  },
  "q:73c5ce6e612f88ae": {
    "options": [
      "The mean increases and the median is unchanged.",
      "The mean is unchanged and the median increases by 1.",
      "Both the mean and the median decrease.",
      "Both the mean and the median are unchanged."
    ],
    "explanations": [
      "The median is indeed unchanged, but the mean is too: the removed values $12$ and $30$ average to $21$, exactly the original mean, so removing them does not shift it.",
      "The mean is unchanged, but so is the median: the remaining list $15, 15, 19, 22, 24, 24, 28$ has middle value $22$, the same as before.",
      "Neither decreases. The removed pair $12$ and $30$ is balanced around the mean $21$, so the mean stays $21$, and the middle value of the remaining seven is still $22$.",
      "The mean is $189/9 = 21$ and the median is $22$. Removing $12$ and $30$ (which total $42 = 2 \\times 21$) leaves $147/7 = 21$, and the new middle value is still $22$. Both are unchanged."
    ]
  },
  "q:862fff27e1ec8deb": {
    "options": [
      "Exactly two solutions",
      "No solution",
      "Exactly one solution",
      "Infinitely many solutions"
    ],
    "explanations": [
      "Two distinct lines cannot meet in exactly two points. A linear system has one, zero, or infinitely many solutions.",
      "Doubling the first equation gives $6x + 8y = 2$, but the second says $6x + 8y = 5$. Same left side, different constants: the lines are parallel and never meet.",
      "Exactly one solution requires lines with different slopes. Both equations have slope $-\\frac{3}{4}$, so they are parallel, not crossing.",
      "Infinitely many solutions would need the second equation to be an exact multiple of the first, including the constant. $2 \\times 1 = 2 \\ne 5$, so the lines are distinct."
    ]
  },
  "q:6d5d7e34f48dd764": {
    "options": [
      "$9$",
      "$-9$",
      "$\\frac{1}{9}$",
      "$\\frac{-1}{9}$"
    ],
    "explanations": [
      "$9$ is $3^2$, ignoring the negative exponent. A negative exponent means a reciprocal: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.",
      "$-9$ treats the negative exponent as making the result negative. A negative exponent indicates a reciprocal, not a sign change; the value is positive $\\frac{1}{9}$.",
      "A negative exponent means the reciprocal of the positive power: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.",
      "$\\frac{-1}{9}$ takes the reciprocal correctly but also attaches a negative sign. Powers of a positive base are always positive, so $3^{-2} = \\frac{1}{9}$."
    ]
  },
  "q:78ab5e2a8b43c99f": {
    "options": [
      "9",
      "12",
      "2",
      "24"
    ],
    "explanations": [
      "$9$ does not come from the proportion. At $\\$2$ each, $12$ items cost $\\$24$; $9$ would be fewer than $5$ items' worth.",
      "$12$ is the number of items, not their cost. Each item costs $14/7 = 2$ dollars, so $12$ items cost $\\$24$.",
      "$2$ is the unit price in dollars, $14 \\div 7$, an intermediate value. The cost of $12$ items is $12 \\times 2 = 24$ dollars.",
      "The unit price is $14/7 = 2$ dollars per item, so $12$ items cost $12 \\times 2 = 24$ dollars."
    ]
  },
  "q:136832103a7a7a32": {
    "options": [
      "$-3$",
      "$1$",
      "$3$",
      "$7$"
    ],
    "explanations": [
      "$-3$ is the constant term of the original numerator $2x^2 - 5x - 3$, not the intercept of the simplified line. After cancelling, the line is $y = 2x + 1$.",
      "Factor: $2x^2 - 5x - 3 = (2x + 1)(x - 3)$, so $f(x) = 2x + 1$ for $x \\ne 3$. The line's $y$-intercept is $f(0) = 1$.",
      "$3$ is the $x$-coordinate of the hole, where the cancelled factor $x - 3$ is zero. The $y$-intercept is the line's value at $x = 0$, which is $1$.",
      "$7$ is the $y$-coordinate of the hole, $2(3) + 1$, the value most students compute along the way. The $y$-intercept is at $x = 0$: $2(0) + 1 = 1$."
    ]
  },
  "q:cfe2261f1d24b0fc": {
    "options": [
      "$4$",
      "$16$",
      "$5$",
      "$25$"
    ],
    "explanations": [
      "$4$ is $\\sqrt{x}$, the value of the other radical. The question asks for $\\sqrt{x + 9}$, which is $1$ more: $5$.",
      "$16$ is the value of $x$, the intermediate most students stop at. The question asks for $\\sqrt{x + 9} = \\sqrt{25} = 5$.",
      "Isolate and square: $\\sqrt{x + 9} = 1 + \\sqrt{x}$ gives $x + 9 = 1 + 2\\sqrt{x} + x$, so $\\sqrt{x} = 4$ and $x = 16$. Then $\\sqrt{x + 9} = \\sqrt{25} = 5$ (check: $5 - 4 = 1$).",
      "$25$ is $x + 9$, the quantity under the requested radical, one step short of taking the square root. $\\sqrt{25} = 5$."
    ]
  },
  "q:d45bb436c89cc96a": {
    "options": [
      "20",
      "40",
      "60",
      "2400"
    ],
    "explanations": [
      "$20$ uses the minimum depth $1$ m everywhere, giving $300$ m$^3$. The floor slopes to $3$ m, so the average depth is $2$ m and the volume is $600$ m$^3$.",
      "The trapezoidal cross-section has area $\\frac{1 + 3}{2} \\cdot 25 = 50$ m$^2$, so the volume is $50 \\cdot 12 = 600$ m$^3$. At $0.25$ m$^3$ per minute, filling takes $2400$ minutes, or $40$ hours.",
      "$60$ uses the maximum depth $3$ m everywhere, giving $900$ m$^3$. Because the floor slopes uniformly from $1$ m to $3$ m, the average depth is $2$ m.",
      "$2400$ is the filling time in minutes, not hours. Dividing by $60$ converts it: $2400/60 = 40$ hours."
    ]
  },
  "q:0d96f2110bd8a934": {
    "options": [
      "$9$",
      "$36$",
      "$45$",
      "$55$"
    ],
    "explanations": [
      "$9$ is the largest allowed value of $x$, from $2x \\le 18$, an intermediate value. The question asks for the sum of all positive integers from $1$ through $9$, which is $45$.",
      "$36$ is the sum of $1$ through $8$, treating the inequality as strict and excluding $9$. At $x = 9$, $5(7) = 35 \\le 35$ holds, so $9$ is included.",
      "Expanding gives $5x - 10 \\le 3x + 8$, so $2x \\le 18$ and $x \\le 9$. The positive integers $1$ through $9$ sum to $\\frac{9 \\cdot 10}{2} = 45$.",
      "$55$ is the sum of $1$ through $10$, including $x = 10$. But $5(8) = 40$ while $3(10) + 8 = 38$, so $x = 10$ fails the inequality."
    ]
  },
  "q:3165fcc2b2ef3130": {
    "options": [
      "$(2.4,1.8)$",
      "$(4,3)$",
      "$(5.6,4.2)$",
      "$(8,6)$"
    ],
    "explanations": [
      "The centers are $\\sqrt{64 + 36} = 10 = 3 + 7$ apart, so the circles are externally tangent and touch on the segment between centers, $3$ units from the origin: $\\frac{3}{10}(8, 6) = (2.4, 1.8)$.",
      "$(4, 3)$ is the midpoint of the two centers, which would be the tangent point only if the radii were equal. The radii are $3$ and $7$, so the point is closer to circle $A$'s center.",
      "$(5.6, 4.2)$ is $7$ units from the origin along the segment, using circle $B$'s radius measured from circle $A$'s center. The point is $3$ units from $(0, 0)$ and $7$ from $(8, 6)$.",
      "$(8, 6)$ is the center of circle $B$, not a point on either circle. The tangent point lies on the segment joining the centers, $3$ units from the origin."
    ]
  },
  "q:df565f4d4d3f103b": {
    "options": [
      "9",
      "8",
      "10",
      "15"
    ],
    "explanations": [
      "Half of $-8$ is $-4$, and $(-4)^2 = 16$, so $y = (x^2 - 8x + 16) + 9 = (x - 4)^2 + 9$. Since the parabola opens upward, the minimum value is $9$.",
      "$8$ is the coefficient of $x$, not the vertex value. Completing the square gives $(x - 4)^2 + 9$, so the minimum is $9$.",
      "$10$ does not match $25 - 16 = 9$. The minimum of $(x - 4)^2 + 9$ occurs at $x = 4$ and equals $9$.",
      "$15$ does not come from completing the square correctly. Half of $-8$ squared is $16$, and $25 - 16 = 9$ is the minimum value."
    ]
  },
  "q:339b4ca4648b4018": {
    "options": [
      "8",
      "2",
      "-2",
      "3"
    ],
    "explanations": [
      "$8$ would make $y = -1$ from the first equation, and then $4(8) - 1 = 31 \\ne 16$. Subtracting the equations gives $3x = 9$, so $x = 3$.",
      "$2$ gives $y = 5$ from the first equation, but then $4(2) + 5 = 13 \\ne 16$. The correct value is $x = 3$.",
      "$-2$ is a sign error. Subtracting the first equation from the second gives $3x = 9$, so $x = +3$, and $x = -2$ would give $y = 9$ with $4(-2) + 9 = 1 \\ne 16$.",
      "Subtracting $x + y = 7$ from $4x + y = 16$ eliminates $y$: $3x = 9$, so $x = 3$ (and $y = 4$; check $12 + 4 = 16$)."
    ]
  },
  "q:310b1e0cb78f1398": {
    "options": [
      "$5$",
      "$10$",
      "$25$",
      "$50$"
    ],
    "explanations": [
      "$5$ is the time in hours at which the maximum occurs, not the concentration. At $t = 5$, $C(5) = \\frac{1250}{50} = 25$ mg/L.",
      "$10$ is twice the time of the maximum, or a misread of the peak. The concentration at the peak is $C(5) = 25$ mg/L.",
      "Setting $\\frac{250t}{t^2 + 25} = k$ gives $kt^2 - 250t + 25k = 0$, which has a real solution only when $62500 - 100k^2 \\ge 0$, so $k \\le 25$. The maximum $25$ occurs at $t = 5$.",
      "$50$ comes from $\\frac{250(5)}{25}$, dropping the $t^2$ term in the denominator. At $t = 5$ the denominator is $25 + 25 = 50$, so $C(5) = 25$."
    ]
  },
  "q:29818a69f4560bfc": {
    "options": [
      "1",
      "8",
      "6",
      "17"
    ],
    "explanations": [
      "$1$ day would require $88$ workers. Eleven workers complete $88$ worker-days of work in $88/11 = 8$ days.",
      "The job takes $8 \\times 11 = 88$ worker-days. With $11$ workers, $88/11 = 8$ days. More workers means fewer days, an inverse relationship.",
      "$6$ does not come from the worker-days calculation; $88/11 = 8$. Six days with $11$ workers would be only $66$ worker-days, short of the $88$ needed.",
      "$17$ comes from adding $11 + 6$ or treating the relationship as direct. More workers should take fewer days, not more; $17$ days would be $187$ worker-days."
    ]
  },
  "q:543c3b3dd8c89c32": {
    "options": [
      "$\\frac{1}{3}$",
      "$3$",
      "$-3$",
      "$12$"
    ],
    "explanations": [
      "$\\frac{1}{3}$ is the reciprocal, from writing $a = \\frac{2}{6}$ instead of $\\frac{6}{2}$. Matching $x$-coefficients requires $2a = 6$, so $a = 3$.",
      "Expanding gives $6x + 3 = 2ax - a + 7$. No solution requires equal $x$-coefficients, $2a = 6$, so $a = 3$. The constants then differ ($3 \\ne 4$), confirming no solution.",
      "$-3$ comes from distributing $a(2x - 1)$ as $-2ax + a$, a sign error. The $x$-coefficient on the right is $+2a$, so $2a = 6$ gives $a = 3$.",
      "$12$ multiplies $6 \\cdot 2$ instead of dividing. The condition $2a = 6$ requires dividing by $2$, giving $a = 3$."
    ]
  },
  "q:02fdb4eddcd56972": {
    "options": [
      "40",
      "37",
      "24",
      "17"
    ],
    "explanations": [
      "$40$ is the maximum value in the list, not the range. The range is maximum minus minimum, $40 - 23 = 17$.",
      "$37$ is the median of the ordered list $23, 36, 37, 38, 40$, not the range. The range is $40 - 23 = 17$.",
      "$24$ does not equal the difference between the largest and smallest values. With maximum $40$ and minimum $23$, the range is $17$.",
      "The range is the maximum minus the minimum: $40 - 23 = 17$."
    ]
  },
  "q:221f0c7c89933887": {
    "options": [
      "$x^{5}$",
      "$x^{-5}$",
      "$x^{104}$",
      "$\\frac{1}{x^{21}}$"
    ],
    "explanations": [
      "$x^5$ has the wrong sign; it comes from $13 - 8$ instead of $8 - 13$. Subtract the denominator's exponent from the numerator's: $8 - 13 = -5$.",
      "Dividing powers with the same base subtracts exponents: $\\frac{x^8}{x^{13}} = x^{8 - 13} = x^{-5}$, equivalently $\\frac{1}{x^5}$.",
      "$x^{104}$ multiplies the exponents, $8 \\times 13$. Multiplying exponents applies to a power of a power, not to a quotient of powers.",
      "$\\frac{1}{x^{21}}$ adds the exponents, $8 + 13$, as if multiplying powers. A quotient subtracts them: $8 - 13 = -5$."
    ]
  },
  "q:5748e98b7f467e51": {
    "options": [
      "$4$",
      "$15$",
      "$20$",
      "$25$"
    ],
    "explanations": [
      "$4$ is the number of $5$-minute periods needed, an intermediate not yet converted to minutes. Four periods is $4 \\times 5 = 20$ minutes.",
      "At $15$ minutes the difference is $120(0.75)^3 \\approx 50.6$, so the coffee is about $120.6$ degrees, still above $110$. One more period is needed.",
      "The difference starts at $120$ and is multiplied by $0.75$ every $5$ minutes: $90$, $67.5$, $50.6$, $38.0$. Below $110$ means a difference under $40$, first reached at $20$ minutes (about $108$ degrees).",
      "$25$ is one period too many. The coffee is already below $110$ degrees at $20$ minutes, when the difference is about $38$ degrees."
    ]
  },
  "q:7b27954bd2f39cc5": {
    "options": [
      "0",
      "5",
      "-6",
      "3"
    ],
    "explanations": [
      "Compose: $f(g(x)) = -2(4x + 1) + 6 = -8x + 4$. Setting $-8x + 4 = 4$ gives $-8x = 0$, so $x = 0$.",
      "$5$ fails the check: $g(5) = 21$ and $f(21) = -42 + 6 = -36 \\ne 4$. Since $f(g(x)) = -8x + 4$, the only solution is $x = 0$.",
      "$-6$ fails: $g(-6) = -23$ and $f(-23) = 46 + 6 = 52 \\ne 4$. The composite $-8x + 4$ equals $4$ only when $x = 0$.",
      "$3$ fails: $g(3) = 13$ and $f(13) = -26 + 6 = -20 \\ne 4$. Solving $-8x + 4 = 4$ gives $x = 0$."
    ]
  },
  "q:4b913546e2373809": {
    "options": [
      "$x = -3$ or $x = 3$",
      "$x = 3$ only",
      "$x = 0$ or $x = 3$",
      "$x = 0$ or $x = -3$"
    ],
    "explanations": [
      "$x = \\pm 3$ solves $x^2 = 9$, not $x^2 - 3x = 0$. Checking $x = -3$: $9 + 9 = 18 \\ne 0$.",
      "$x = 3$ alone misses a solution. Dividing both sides by $x$ loses $x = 0$, which also satisfies $0 - 0 = 0$.",
      "Factor: $x(x - 3) = 0$, so $x = 0$ or $x = 3$. Do not divide by $x$, which would discard the $x = 0$ solution.",
      "$x = -3$ has the wrong sign: the factor is $x - 3$, which is zero at $x = +3$. Checking $x = -3$ gives $9 + 9 = 18 \\ne 0$."
    ]
  },
  "q:1adbbf866d3e7dc9": {
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "explanations": [
      "Only zeros of odd multiplicity produce crossings. $x = 1$ has multiplicity $2$ (touch), $x = -2$ has multiplicity $3$ (cross), and $x^2 + 4$ has no real zeros. Exactly $1$ crossing.",
      "$2$ counts the distinct real zeros, $1$ and $-2$, ignoring multiplicity. At $x = 1$ the even multiplicity means the graph touches without crossing.",
      "$3$ counts one zero from each factor, as if $x^2 + 4$ had a real zero. It does not ($x^2 = -4$ has no real solution), and $x = 1$ is only a touch point.",
      "$4$ treats $x^2 + 4$ as contributing two real zeros. Its zeros are imaginary, and of the two real zeros only $x = -2$ is a crossing."
    ]
  },
  "q:932485bb719b62c7": {
    "options": [
      "$(2, 1)$",
      "$(1, -4)$",
      "$(4, 3)$",
      "$(5, 6)$"
    ],
    "explanations": [
      "Test $(2, 1)$: $1 \\ge 2(2) - 5 = -1$ is true, and $3(2) + 2(1) = 8 < 18$ is true. Both inequalities hold, so it is a solution.",
      "$(1, -4)$ satisfies $3 - 8 = -5 < 18$ but fails the first inequality: $-4 \\ge 2(1) - 5 = -3$ is false, since $-4$ is below $-3$.",
      "$(4, 3)$ satisfies the first inequality as an equality ($3 \\ge 3$), but $3(4) + 2(3) = 18$ is not strictly less than $18$. The strict inequality excludes the boundary.",
      "$(5, 6)$ satisfies $6 \\ge 5$ but gives $3(5) + 2(6) = 27$, far above $18$, so it fails the second inequality."
    ]
  },
  "q:bab07bc42233ef07": {
    "options": [
      "0.90",
      "25.45",
      "28.27",
      "2.83"
    ],
    "explanations": [
      "$0.90$ is the coefficient of $\\pi$ in the difference, $9\\pi - 8.1\\pi = 0.9\\pi$, before multiplying by $\\pi$. The actual difference is $0.9\\pi \\approx 2.83$.",
      "$25.45$ is the area of sector $B$ alone, $\\frac{1}{2}(81)\\left(\\frac{\\pi}{5}\\right) = 8.1\\pi$. The question asks for the difference between the two sector areas.",
      "$28.27$ is the area of sector $A$ alone, $\\frac{40}{360}\\pi(81) = 9\\pi$. The question asks for the difference, $9\\pi - 8.1\\pi$.",
      "Sector $A$: $\\frac{40}{360}\\pi(9)^2 = 9\\pi$. Sector $B$: $\\frac{1}{2}(9)^2\\left(\\frac{\\pi}{5}\\right) = 8.1\\pi$. Difference: $0.9\\pi \\approx 2.83$ square centimeters."
    ]
  },
  "q:46f9451c9ebfeee6": {
    "options": [
      "$1.013$",
      "$1.120$",
      "$1.601$",
      "$1.125$"
    ],
    "explanations": [
      "$1.013$ is $(1.04)^{1/3}$, dividing the exponent by $3$ instead of multiplying. A quarter is $3$ months, so the quarterly factor is $(1.04)^3$, larger than the monthly one.",
      "$1.120$ treats growth as simple interest, $3 \\times 4\\% = 12\\%$. Compounding over three months gives $(1.04)^3 \\approx 1.1249$, slightly more.",
      "$1.601$ is $(1.04)^{12}$, the annual growth factor, using $12$ months per period. A quarter has only $3$ months.",
      "Since $m = 3q$, $S = 1200(1.04)^{3q} = 1200\\left[(1.04)^3\\right]^q$. So $b = (1.04)^3 \\approx 1.124864$, which rounds to $1.125$."
    ]
  },
  "q:6336f1220599f0d0": {
    "options": [
      "4.2",
      "5.4",
      "7.2",
      "9.6"
    ],
    "explanations": [
      "The hypotenuse is $15$. Each leg is the geometric mean of the hypotenuse and its adjacent segment, so the segments are $9^2/15 = 5.4$ and $12^2/15 = 9.6$. Their difference is $4.2$.",
      "$5.4$ is the shorter segment alone, $9^2/15$. The question asks for the difference between the two segments, $9.6 - 5.4 = 4.2$.",
      "$7.2$ is the altitude to the hypotenuse, $\\frac{9 \\cdot 12}{15}$, not a segment of the hypotenuse or the difference between segments.",
      "$9.6$ is the longer segment alone, $12^2/15$. The question asks for the difference between the segments, $9.6 - 5.4 = 4.2$."
    ]
  },
  "q:d37ddf2b1d17eb77": {
    "options": [
      "$4$",
      "$36$",
      "$40$",
      "$150$"
    ],
    "explanations": [
      "The vertex is at $x = \\frac{0.48}{2(0.0016)} = 150$. Substituting, $y = 0.0016(22500) - 0.48(150) + 40 = 36 - 72 + 40 = 4$ meters, the least height.",
      "$36$ is just the $x^2$ term at the vertex, $0.0016(150)^2$, before combining with $-72$ and $+40$. The full height is $4$ meters.",
      "$40$ is the height at $x = 0$, the $y$-intercept at the tower. The parabola opens upward, so the tower is a high point, not the low point.",
      "$150$ is the horizontal distance at which the minimum occurs, the $x$-coordinate of the vertex. The question asks for the height, the $y$-value there, which is $4$."
    ]
  },
  "q:5dd5bfa6bd9d3f40": {
    "options": [
      "$63 \\le S \\le 73$",
      "$145.4 \\le S \\le 163.4$",
      "$149.4 \\le S \\le 159.4$",
      "$154.4 \\le S \\le 172.4$"
    ],
    "explanations": [
      "$63 \\le S \\le 73$ is the range of $T$ in Celsius, never converted. The sensor reports $S = 1.8T + 32$, so both endpoints must be converted.",
      "$|T - 68| \\le 5$ gives $63 \\le T \\le 73$. Since $S = 1.8T + 32$ is increasing, convert both endpoints: $1.8(63) + 32 = 145.4$ and $1.8(73) + 32 = 163.4$.",
      "$149.4 \\le S \\le 159.4$ converts the center ($1.8 \\cdot 68 + 32 = 154.4$) but keeps the tolerance $\\pm 5$. The tolerance must also be scaled by $1.8$, giving $\\pm 9$.",
      "$154.4 \\le S \\le 172.4$ places the converted center $154.4$ at the bottom and adds the full width $18$ above it. The center should sit in the middle, $\\pm 9$."
    ]
  },
  "q:c11e8819082db6ed": {
    "options": [
      "8.8",
      "23.2",
      "20.0",
      "46.7"
    ],
    "explanations": [
      "$8.8$ divides both bus counts by the grand total $500$, giving $16.8\\%$ and $8.0\\%$. That measures the share of all students, not the rate within each grade.",
      "$23.2$ divides by the Bus column total $190$, giving $44.2\\%$ and $21.1\\%$. That answers \"what percent of bus riders are in each grade,\" the reversed question.",
      "Grade 9 bus rate: $84/180 = 46.7\\%$. Grade 11 bus rate: $40/150 = 26.7\\%$. Each uses its own row total, and the difference is $46.7 - 26.7 = 20.0$ percentage points.",
      "$46.7$ is the Grade 9 bus rate by itself, $84/180$. The question asks how much it exceeds the Grade 11 rate of $26.7\\%$, a difference of $20.0$."
    ]
  },
  "q:9fa23456a43c480e": {
    "options": [
      "6",
      "-4",
      "0",
      "-1"
    ],
    "explanations": [
      "Adding the two equations eliminates $y$: $(x - y) + (2x + y) = 3x$, and $2 + 4 = 6$. So $3x = 6$ directly.",
      "$-4$ has the wrong sign; it could come from subtracting the equations in the wrong order. Adding them gives $3x = 6$, and $x = 2$ checks in both equations.",
      "$0$ is the value of $y$ (since $x = 2$ and $x - y = 2$), not $3x$. The question asks for $3x = 6$.",
      "$-1$ does not fit: it would mean $x = -\\frac{1}{3}$, but then $x - y = 2$ gives $y = -\\frac{7}{3}$, and $2x + y = -3 \\ne 4$."
    ]
  },
  "q:c90a32dd0e1e4db7": {
    "options": [
      "$432$",
      "$7.2$",
      "$648$",
      "$3{,}600$"
    ],
    "explanations": [
      "Depth $2$ feet means $V/1800 = 2$, so $V = 3600$ gallons. Then $9000 - 750t = 3600$ gives $t = 7.2$ hours, which is $7.2 \\times 60 = 432$ minutes.",
      "$7.2$ is the time in hours, the natural end of the algebra. The question asks for minutes, so multiply by $60$: $432$.",
      "$648$ comes from setting $V = 1800 \\div 2 = 900$ instead of $1800 \\times 2 = 3600$, reciprocating the depth relation. That gives $t = 10.8$ hours, or $648$ minutes.",
      "$3{,}600$ is the volume in gallons at a depth of $2$ feet, an earlier intermediate. The question asks for the time in minutes, $432$."
    ]
  },
  "q:2e185800b326e492": {
    "options": [
      "The mean increases by 14 and the median is unchanged.",
      "The median increases by 2 and the mean is unchanged.",
      "The mean increases by 2 and the median is unchanged.",
      "Both the mean and the median increase by 2."
    ],
    "explanations": [
      "The mean does not rise by the raw change of $14$; that change is spread over seven values, so the mean rises by $14/7 = 2$. The median part is right.",
      "This swaps the two statistics. Changing the largest value cannot move the middle value, which stays $11$; the mean, sensitive to extremes, rises from $12$ to $14$.",
      "The sum rises from $84$ to $98$, so the mean goes from $12$ to $14$, up $2$. The change is at the top of the ordered list, so the fourth value stays $11$: the median is unchanged.",
      "The median does not move: replacing $26$ with $40$ changes only the largest value, so the fourth of seven ordered values is still $11$. Only the mean rises."
    ]
  },
  "q:b8f44c835c189642": {
    "options": [
      "$x > -2$",
      "$x \\leq -2$",
      "$x \\geq -2$",
      "All real numbers"
    ],
    "explanations": [
      "$x > -2$ excludes $x = -2$, but $\\sqrt{-2 + 2} = \\sqrt{0} = 0$ is defined. The radicand may equal zero, so the endpoint is included.",
      "$x \\le -2$ points the wrong way: for $x < -2$ the radicand $x + 2$ is negative, and the square root of a negative number is not real.",
      "The radicand must be nonnegative: $x + 2 \\ge 0$, so $x \\ge -2$. At $x = -2$ the output is $0$, which is allowed.",
      "Not all real numbers work: for example $x = -5$ gives $\\sqrt{-3}$, which is not a real number. The radicand must be at least $0$."
    ]
  },
  "q:d0c21abad11d2465": {
    "options": [
      "Square root",
      "Exponential",
      "Quadratic",
      "Linear"
    ],
    "explanations": [
      "A square root function grows more and more slowly, the opposite of tripling. Tripling each year is accelerating multiplicative growth.",
      "Tripling every year is a constant multiplicative change, a growth factor of $3$ per year. That is the defining feature of an exponential function, $y = a \\cdot 3^t$.",
      "A quadratic grows by increasing additive amounts, not by a constant factor. Repeated multiplication by $3$ outpaces any quadratic.",
      "A linear function adds the same amount each year. Tripling multiplies by the same factor each year, which is exponential, not linear."
    ]
  },
  "q:c6a82db584390740": {
    "options": [
      "$(x + 5)(x + 3)$",
      "$(x + 5)(x - 3)$",
      "$(x - 5)(x + 3)$",
      "$(x - 5)(x - 3)$"
    ],
    "explanations": [
      "$(x + 5)(x + 3) = x^2 + 8x + 15$, with a positive middle term. The original has $-8x$, so both constants must be negative.",
      "$(x + 5)(x - 3) = x^2 + 2x - 15$. The constant is negative and the middle term is $+2x$, matching neither the $+15$ nor the $-8x$ of the original.",
      "$(x - 5)(x + 3) = x^2 - 2x - 15$, which has a negative constant and middle term $-2x$. The original needs a product of $+15$ and a sum of $-8$.",
      "Two numbers multiplying to $15$ and adding to $-8$ are $-5$ and $-3$, so $x^2 - 8x + 15 = (x - 5)(x - 3)$. Check: $(x - 5)(x - 3) = x^2 - 8x + 15$."
    ]
  },
  "q:1bb8a08b4c39e9ff": {
    "options": [
      "Points show no upward or downward trend",
      "Points loosely follow a rising line",
      "Points lie very close to a falling line",
      "Points loosely follow a falling line"
    ],
    "explanations": [
      "Points with no upward or downward trend show no linear association at all, the weakest possible case.",
      "Loosely following a rising line is a weak-to-moderate positive association. Strength depends on closeness to the line, and \"loosely\" means the points scatter widely.",
      "Strength is about how tightly the points cluster around a line, regardless of direction. Points lying very close to a falling line show a strong (negative) association, stronger than any loose fit.",
      "Loosely following a falling line is a weak-to-moderate negative association. The direction matches the strongest option, but \"loosely\" means much more scatter than \"very close.\""
    ]
  },
  "q:e3c22bcc2c030031": {
    "options": [
      "9",
      "64",
      "32",
      "16"
    ],
    "explanations": [
      "$9$ does not come from any perimeter calculation; it is near $8 + 1$. The perimeter adds all four sides: $8 + 8 + 8 + 8 = 32$.",
      "$64$ is the area, $8 \\times 8$, not the perimeter. Perimeter is the total distance around, $2(8 + 8) = 32$.",
      "Perimeter is $2(l + w) = 2(8 + 8) = 32$. Since all sides are $8$, this is a square with four sides of $8$.",
      "$16$ is $l + w$, only two of the four sides. The perimeter doubles this: $2(16) = 32$."
    ]
  },
  "q:fbaef80d9ab22804": {
    "options": [
      "They intersect at one point",
      "They are parallel lines",
      "They are perpendicular lines",
      "They are the same line"
    ],
    "explanations": [
      "Lines that intersect at one point have different slopes. Both of these lines have slope $1$, so they never cross.",
      "Both lines have slope $1$ but different $y$-intercepts, $5$ and $7$. Equal slopes with distinct intercepts mean the lines are parallel.",
      "Perpendicular lines have slopes whose product is $-1$, such as $1$ and $-1$. Both slopes here are $1$, with product $1$.",
      "The same line would need identical slopes and identical intercepts. The intercepts differ ($5$ versus $7$), so the lines are distinct."
    ]
  },
  "q:cb39720b4554f22e": {
    "options": [
      "$10\\sqrt{4}$",
      "$24\\sqrt{2}$",
      "$10\\sqrt{2}$",
      "$\\sqrt{20}$"
    ],
    "explanations": [
      "$10\\sqrt{4}$ adds the radicands as well as the coefficients. The radicand stays $2$ when combining like radicals; only the coefficients add. Also $10\\sqrt{4} = 20$, not $10\\sqrt{2}$.",
      "$24\\sqrt{2}$ multiplies the coefficients, $6 \\times 4$, instead of adding them. Like radicals combine by adding coefficients: $6 + 4 = 10$.",
      "Both terms have the same radical $\\sqrt{2}$, so add the coefficients: $(6 + 4)\\sqrt{2} = 10\\sqrt{2}$.",
      "$\\sqrt{20}$ treats the sum as $\\sqrt{(6 + 4) \\cdot 2}$ or similar. Like radicals keep $\\sqrt{2}$ and combine coefficients: $10\\sqrt{2} = \\sqrt{200}$, not $\\sqrt{20}$."
    ]
  },
  "q:0b6cde83ac05da5f": {
    "options": [
      "2",
      "8",
      "6",
      "4"
    ],
    "explanations": [
      "$2$ is not the difference in the Yes column; $22 - 18 = 4$. It may come from misreading the rows.",
      "$8$ is $22 - 14$, the difference between Yes and No within Row 1, or $26 - 18$ within Row 2. The question compares Yes counts across rows.",
      "$6$ does not equal $22 - 18$. The Yes column shows $22$ for Row 1 and $18$ for Row 2, a difference of $4$.",
      "Compare the Yes column across the two rows: $22 - 18 = 4$ more people in Row 1 answered Yes."
    ]
  },
  "q:239c39a761db9763": {
    "options": [
      "$5\\pi$",
      "$25\\pi$",
      "$10\\pi$",
      "$50\\pi$"
    ],
    "explanations": [
      "$5\\pi$ uses $r$ instead of $r^2$. The area formula squares the radius: $\\pi(5)^2 = 25\\pi$.",
      "The area of a circle is $\\pi r^2$. With radius $5$, that is $\\pi(5)^2 = 25\\pi$ square units.",
      "$10\\pi$ is the circumference, $2\\pi r = 2\\pi(5)$, not the area. Area uses $r^2$: $25\\pi$.",
      "$50\\pi$ is $2\\pi r^2$, doubling the area formula or confusing it with $2\\pi r$ times $r$. The area is $\\pi r^2 = 25\\pi$."
    ]
  }
}

export default ENTRIES
