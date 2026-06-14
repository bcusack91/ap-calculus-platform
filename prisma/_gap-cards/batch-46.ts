export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "rational-irrational-numbers-grade8",
    cards: [
      {
        front: "What is a rational number?",
        back: "A rational number is any number that can be written as a fraction $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\neq 0$. Examples include $\\frac{3}{4}$, $-2$, $0.5$, and $0.\\overline{3}$.",
        hint: "Think 'ratio' of two integers.",
      },
      {
        front: "What is an irrational number?",
        back: "An irrational number cannot be written as a fraction of two integers. Its decimal form goes on forever without repeating. Examples include $\\pi$, $\\sqrt{2}$, and $\\sqrt{5}$.",
        hint: "Non-repeating, non-terminating decimal.",
      },
      {
        front: "How can you tell from its decimal whether a number is rational or irrational?",
        back: "If the decimal terminates (ends) or repeats a pattern forever, the number is rational. If it never ends and never repeats, the number is irrational.",
        hint: "Terminate or repeat = rational.",
      },
      {
        front: "Is $0.\\overline{6}$ (0.6666...) rational or irrational?",
        back: "It is rational. A repeating decimal can be written as a fraction; $0.\\overline{6} = \\frac{2}{3}$.",
        hint: "Repeating = rational.",
      },
      {
        front: "Is the square root of a perfect square rational or irrational?",
        back: "Rational. For example $\\sqrt{9} = 3$ and $\\sqrt{16} = 4$ are integers. Only square roots of non-perfect-squares (like $\\sqrt{2}$ or $\\sqrt{7}$) are irrational.",
        hint: "Perfect square roots come out clean.",
      },
      {
        front: "Convert the repeating decimal $0.\\overline{3}$ to a fraction.",
        back: "Let $x = 0.\\overline{3}$. Then $10x = 3.\\overline{3}$. Subtracting gives $9x = 3$, so $x = \\frac{3}{9} = \\frac{1}{3}$.",
        hint: "Multiply by 10, subtract, solve.",
      },
      {
        front: "Are all integers rational numbers?",
        back: "Yes. Every integer $n$ can be written as $\\frac{n}{1}$, so all integers (including negatives and 0) are rational.",
      },
      {
        front: "Between which two consecutive integers does $\\sqrt{50}$ lie?",
        back: "Between 7 and 8, because $7^2 = 49$ and $8^2 = 64$, and $49 < 50 < 64$. So $\\sqrt{50} \\approx 7.07$.",
        hint: "Find the perfect squares just below and above.",
      },
      {
        front: "Common trap: Is $\\pi$ equal to $\\frac{22}{7}$?",
        back: "No. $\\frac{22}{7}$ is only a rational approximation of $\\pi$. The true value of $\\pi$ is irrational and never ends or repeats.",
        hint: "Approximation is not equality.",
      },
      {
        front: "How do you estimate $\\sqrt{30}$ to one decimal place?",
        back: "Since $5^2 = 25$ and $6^2 = 36$, $\\sqrt{30}$ is between 5 and 6, closer to 5.5. Testing $5.5^2 = 30.25$, so $\\sqrt{30} \\approx 5.5$.",
        hint: "Trap the value between perfect squares, then refine.",
      },
      {
        front: "Is the product of a nonzero rational and an irrational number rational or irrational?",
        back: "It is always irrational. For example, $2 \\times \\sqrt{3}$ is irrational. (Multiplying by a nonzero rational cannot 'fix' the non-repeating decimal.)",
      },
      {
        front: "Which is larger, $\\sqrt{8}$ or 3?",
        back: "3 is larger. $\\sqrt{8} \\approx 2.83$ because $\\sqrt{9} = 3$ and $8 < 9$, so $\\sqrt{8} < 3$.",
        hint: "Compare to the nearest perfect square.",
      },
    ],
  },
  {
    slug: "slope-linear-functions-grade8",
    cards: [
      {
        front: "What is slope?",
        back: "Slope measures the steepness of a line: how much $y$ changes for each unit change in $x$. It is the rate of change, often called 'rise over run'.",
        hint: "Rise over run.",
      },
      {
        front: "What is the slope formula given two points?",
        back: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$, where $(x_1, y_1)$ and $(x_2, y_2)$ are two points on the line. Use it to find slope from any two points.",
        hint: "Change in y over change in x.",
      },
      {
        front: "Find the slope of the line through $(1, 2)$ and $(4, 11)$.",
        back: "$m = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$. The line rises 3 units for every 1 unit right.",
        hint: "Subtract y's, subtract x's, divide.",
      },
      {
        front: "What is slope-intercept form?",
        back: "$y = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept (the $y$-value where the line crosses the $y$-axis at $x = 0$).",
        hint: "m is slope, b is where it crosses the y-axis.",
      },
      {
        front: "In $y = -2x + 5$, what are the slope and y-intercept?",
        back: "The slope is $-2$ and the $y$-intercept is $5$ (the point $(0, 5)$). The negative slope means the line goes down from left to right.",
      },
      {
        front: "What does a positive vs. negative slope look like?",
        back: "A positive slope rises from left to right (uphill). A negative slope falls from left to right (downhill).",
        hint: "Uphill vs. downhill reading left to right.",
      },
      {
        front: "What is the slope of a horizontal line? A vertical line?",
        back: "A horizontal line has slope $0$ (no rise). A vertical line has an undefined slope (run is 0, so you can't divide).",
        hint: "Flat = 0; straight up = undefined.",
      },
      {
        front: "What is a proportional relationship and how does its graph look?",
        back: "A proportional relationship has the form $y = mx$ (no $b$). Its graph is a straight line through the origin $(0, 0)$, and $m$ is the constant of proportionality (unit rate).",
        hint: "Line through the origin; b = 0.",
      },
      {
        front: "Why is slope the same between any two points on a line?",
        back: "Because a line has a constant rate of change. The triangles formed by rise and run are similar everywhere, so $\\frac{\\text{rise}}{\\text{run}}$ stays the same.",
        hint: "Similar triangles give constant ratio.",
      },
      {
        front: "Common trap: How do you keep the signs straight in the slope formula?",
        back: "Subtract the coordinates in the same order in both numerator and denominator. If $y_2$ comes first on top, $x_2$ must come first on bottom. Mixing the order flips the sign incorrectly.",
        hint: "Same point first, top and bottom.",
      },
      {
        front: "Write the equation of a line with slope $4$ that passes through $(0, -3)$.",
        back: "Since $(0, -3)$ is the $y$-intercept, $b = -3$ and $m = 4$, so the equation is $y = 4x - 3$.",
        hint: "The point at x = 0 gives b directly.",
      },
      {
        front: "How do you find the y-intercept if you know the slope and one point?",
        back: "Substitute the slope and the point's coordinates into $y = mx + b$ and solve for $b$. Example: slope 2 through $(3, 5)$: $5 = 2(3) + b$, so $b = -1$.",
        hint: "Plug in and solve for b.",
      },
      {
        front: "A graph shows a line passing through $(0, 4)$ and going down 2 for every 1 right. What is its equation?",
        back: "The slope is $-2$ (down 2, right 1) and the $y$-intercept is $4$, so $y = -2x + 4$.",
      },
    ],
  },
  {
    slug: "solving-linear-equations-grade8",
    cards: [
      {
        front: "What is the goal when solving a linear equation?",
        back: "To isolate the variable on one side, finding the value that makes the equation true. You do this using inverse operations while keeping both sides balanced.",
        hint: "Get the variable alone.",
      },
      {
        front: "What does it mean to 'keep the equation balanced'?",
        back: "Whatever operation you do to one side, you must do to the other side. This keeps both sides equal and preserves the solution.",
        hint: "Same operation, both sides.",
      },
      {
        front: "Solve $3x + 5 = 20$.",
        back: "Subtract 5: $3x = 15$. Divide by 3: $x = 5$. Check: $3(5) + 5 = 20$. Correct.",
        hint: "Undo addition first, then multiplication.",
      },
      {
        front: "Solve $2(x - 4) = 10$.",
        back: "Distribute: $2x - 8 = 10$. Add 8: $2x = 18$. Divide by 2: $x = 9$.",
        hint: "Distribute first, then isolate.",
      },
      {
        front: "How do you solve an equation with variables on both sides, like $5x + 2 = 3x + 10$?",
        back: "Move all variable terms to one side and constants to the other. Subtract $3x$: $2x + 2 = 10$. Subtract 2: $2x = 8$. So $x = 4$.",
        hint: "Get all x's on one side.",
      },
      {
        front: "What is the order of inverse operations when isolating a variable?",
        back: "Undo addition/subtraction first, then undo multiplication/division. (It is the reverse of the order of operations.)",
        hint: "Reverse PEMDAS.",
      },
      {
        front: "How do you handle fractions in an equation like $\\frac{x}{3} + 2 = 5$?",
        back: "First subtract 2: $\\frac{x}{3} = 3$. Then multiply both sides by 3: $x = 9$. (Or clear the fraction first by multiplying everything by 3.)",
        hint: "Multiply by the denominator to clear it.",
      },
      {
        front: "When does a linear equation have NO solution?",
        back: "When the variables cancel and you get a false statement, like $3 = 7$. The lines are parallel and never meet.",
        hint: "False number statement = no solution.",
      },
      {
        front: "When does a linear equation have INFINITELY many solutions?",
        back: "When the variables cancel and you get a true statement, like $5 = 5$ or $0 = 0$. Both sides are identical, so every value of $x$ works.",
        hint: "True statement that's always true.",
      },
      {
        front: "Solve $4x - 3 = 4x + 1$. What does the result mean?",
        back: "Subtract $4x$: $-3 = 1$, which is false. There is NO solution.",
        hint: "Watch what happens when the x's vanish.",
      },
      {
        front: "Common trap: distributing a negative sign. Expand $-3(x - 2)$.",
        back: "$-3(x - 2) = -3x + 6$. Be careful: $-3 \\times -2 = +6$, not $-6$.",
        hint: "Negative times negative is positive.",
      },
      {
        front: "Why should you check your solution?",
        back: "Substituting your answer back into the original equation confirms both sides are equal. It catches sign errors and distribution mistakes.",
        hint: "Plug it back in.",
      },
      {
        front: "Solve $\\frac{1}{2}x + 3 = 7$.",
        back: "Subtract 3: $\\frac{1}{2}x = 4$. Multiply by 2: $x = 8$. Check: $\\frac{1}{2}(8) + 3 = 7$. Correct.",
        hint: "Isolate the fraction term, then clear the fraction.",
      },
    ],
  },
  {
    slug: "radicals-integer-exponents-grade8",
    cards: [
      {
        front: "What does the product of powers rule say?",
        back: "When multiplying powers with the same base, add the exponents: $a^m \\cdot a^n = a^{m+n}$. Example: $2^3 \\cdot 2^4 = 2^7$.",
        hint: "Same base, add exponents.",
      },
      {
        front: "What does the quotient of powers rule say?",
        back: "When dividing powers with the same base, subtract the exponents: $\\frac{a^m}{a^n} = a^{m-n}$. Example: $\\frac{5^6}{5^2} = 5^4$.",
        hint: "Same base, subtract exponents.",
      },
      {
        front: "What is the power of a power rule?",
        back: "When raising a power to a power, multiply the exponents: $(a^m)^n = a^{mn}$. Example: $(3^2)^4 = 3^8$.",
        hint: "Multiply the exponents.",
      },
      {
        front: "What does a zero exponent equal?",
        back: "Any nonzero number raised to the power 0 equals 1: $a^0 = 1$. Example: $7^0 = 1$ and $(-5)^0 = 1$.",
        hint: "Anything (nonzero) to the 0 is 1.",
      },
      {
        front: "What does a negative exponent mean?",
        back: "A negative exponent means take the reciprocal: $a^{-n} = \\frac{1}{a^n}$. Example: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.",
        hint: "Flip it to make the exponent positive.",
      },
      {
        front: "Simplify $\\frac{4^5}{4^5}$ two different ways.",
        back: "Direct: anything divided by itself is 1. By rule: $4^{5-5} = 4^0 = 1$. Both give 1, showing why $a^0 = 1$.",
        hint: "This is why the zero exponent rule works.",
      },
      {
        front: "Simplify $3^{-2}$.",
        back: "$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.",
        hint: "Reciprocal of the positive power.",
      },
      {
        front: "What is a square root, and what is the radical symbol?",
        back: "A square root of a number $n$ is a value that, when squared, gives $n$. The radical symbol is $\\sqrt{\\phantom{x}}$. Example: $\\sqrt{49} = 7$ because $7^2 = 49$.",
        hint: "Undoes squaring.",
      },
      {
        front: "What is a cube root?",
        back: "A cube root of $n$ is a value that, when cubed, gives $n$, written $\\sqrt[3]{n}$. Example: $\\sqrt[3]{27} = 3$ because $3^3 = 27$.",
        hint: "Undoes cubing; small 3 on the radical.",
      },
      {
        front: "Solve $x^2 = 25$.",
        back: "$x = \\pm 5$, because both $5^2 = 25$ and $(-5)^2 = 25$. Equations with $x^2$ usually have two solutions.",
        hint: "Don't forget the negative root.",
      },
      {
        front: "Common trap: Does $(-2)^4$ equal $-2^4$?",
        back: "No. $(-2)^4 = 16$ (the negative is part of the base, raised to an even power). But $-2^4 = -16$ (only the 2 is raised, then negated). Parentheses matter.",
        hint: "Parentheses decide what gets the exponent.",
      },
      {
        front: "Simplify $(2^3)^2 \\cdot 2$.",
        back: "$(2^3)^2 = 2^6$. Then $2^6 \\cdot 2^1 = 2^7 = 128$.",
        hint: "Power of a power first, then product rule.",
      },
      {
        front: "What is $\\sqrt[3]{64}$?",
        back: "$\\sqrt[3]{64} = 4$, because $4^3 = 64$.",
        hint: "What number cubed gives 64?",
      },
    ],
  },
  {
    slug: "understanding-functions-grade8",
    cards: [
      {
        front: "What is a function?",
        back: "A function is a rule that assigns exactly one output to each input. Each input value has only one output value.",
        hint: "One input, one output.",
      },
      {
        front: "What is the difference between input and output?",
        back: "The input is the value you put into the function (often $x$, the independent variable). The output is what comes out (often $y$, the dependent variable).",
        hint: "x in, y out.",
      },
      {
        front: "What is the vertical line test?",
        back: "A graph represents a function if no vertical line crosses it more than once. If any vertical line hits the graph twice, it is not a function.",
        hint: "One x can't map to two y's.",
      },
      {
        front: "Is this table a function: inputs 1, 2, 2 with outputs 5, 6, 9?",
        back: "No. The input 2 has two different outputs (6 and 9), which breaks the 'one output per input' rule.",
        hint: "Check for a repeated input with different outputs.",
      },
      {
        front: "What does function notation $f(x)$ mean?",
        back: "$f(x)$ names the output of function $f$ at input $x$. For example, if $f(x) = 2x + 1$, then $f(3) = 2(3) + 1 = 7$.",
        hint: "f(x) is 'the output when the input is x'.",
      },
      {
        front: "How do you tell if a function is linear from its equation?",
        back: "A linear function can be written as $y = mx + b$, with $x$ to the first power only (no $x^2$, no $x$ in a denominator). Its graph is a straight line.",
        hint: "Straight line; x has exponent 1.",
      },
      {
        front: "What makes a function nonlinear?",
        back: "A nonlinear function does not graph as a straight line. Its rate of change is not constant. Examples include $y = x^2$ and $y = \\frac{1}{x}$.",
        hint: "Curved graph, changing rate.",
      },
      {
        front: "How do you find the rate of change from a table of a linear function?",
        back: "Compute $\\frac{\\text{change in } y}{\\text{change in } x}$ between rows. If this ratio is constant, the function is linear and that ratio is the slope.",
        hint: "Constant ratio = linear.",
      },
      {
        front: "Evaluate $f(x) = -3x + 4$ at $x = 2$.",
        back: "$f(2) = -3(2) + 4 = -6 + 4 = -2$.",
        hint: "Substitute 2 for x.",
      },
      {
        front: "How can you compare two functions given in different forms (equation vs. table)?",
        back: "Find a common feature like the rate of change (slope) or initial value (y-intercept) for each, then compare. Example: compare slopes to see which grows faster.",
        hint: "Translate both to slope and y-intercept.",
      },
      {
        front: "Common trap: Is $y = x^2$ a function?",
        back: "Yes. Each input $x$ gives exactly one output $y$. (It is nonlinear, but still a function. Many inputs sharing the same output is allowed.)",
        hint: "Repeated outputs are fine; repeated inputs are not.",
      },
      {
        front: "What is the initial value of a function?",
        back: "The initial value is the output when the input is 0, which is the $y$-intercept $b$ in $y = mx + b$. It tells you where the function 'starts'.",
        hint: "Output at x = 0.",
      },
      {
        front: "A linear function passes through $(0, 2)$ and $(1, 5)$. Write its equation.",
        back: "The slope is $\\frac{5 - 2}{1 - 0} = 3$ and the initial value is $2$, so $y = 3x + 2$.",
        hint: "Find slope and y-intercept from the two points.",
      },
    ],
  },
  {
    slug: "inequalities-grade7",
    cards: [
      {
        front: "What do the symbols $<$, $>$, $\\leq$, and $\\geq$ mean?",
        back: "$<$ means less than, $>$ means greater than, $\\leq$ means less than or equal to, and $\\geq$ means greater than or equal to.",
        hint: "The line under the symbol means 'or equal to'.",
      },
      {
        front: "What is the key rule that makes solving inequalities different from equations?",
        back: "When you multiply or divide both sides by a negative number, you must FLIP the inequality sign. Otherwise, solve them just like equations.",
        hint: "Negative multiply/divide flips the sign.",
      },
      {
        front: "Solve $x + 4 < 9$.",
        back: "Subtract 4 from both sides: $x < 5$. (No flip needed since you only subtracted.)",
        hint: "Subtract 4; sign stays the same.",
      },
      {
        front: "Solve $-2x > 6$.",
        back: "Divide both sides by $-2$ and FLIP the sign: $x < -3$.",
        hint: "Dividing by a negative flips >.",
      },
      {
        front: "How do you graph $x \\geq 3$ on a number line?",
        back: "Put a closed (filled) circle at 3 and shade to the right. The closed circle means 3 is included.",
        hint: "Closed circle for 'or equal to'.",
      },
      {
        front: "How do you graph $x < 2$ on a number line?",
        back: "Put an open (hollow) circle at 2 and shade to the left. The open circle means 2 is NOT included.",
        hint: "Open circle for strict < or >.",
      },
      {
        front: "When do you use an open circle vs. a closed circle?",
        back: "Use an open circle for $<$ or $>$ (endpoint not included) and a closed circle for $\\leq$ or $\\geq$ (endpoint included).",
        hint: "'Or equal to' means filled in.",
      },
      {
        front: "Solve $3x - 5 \\leq 7$.",
        back: "Add 5: $3x \\leq 12$. Divide by 3: $x \\leq 4$. (No flip; you divided by a positive.)",
        hint: "Treat like an equation; positive divide keeps the sign.",
      },
      {
        front: "Common trap: a student solves $-x < 4$ and writes $x < -4$. What went wrong?",
        back: "They forgot to flip the sign when dividing by $-1$. The correct answer is $x > -4$.",
        hint: "Dividing by negative one requires a flip.",
      },
      {
        front: "Write an inequality for: 'You must be at least 13 to sign up.'",
        back: "If $a$ is age, then $a \\geq 13$. 'At least' means 'greater than or equal to'.",
        hint: "'At least' = greater than or equal to.",
      },
      {
        front: "Write an inequality for: 'The total must be under $50.'",
        back: "If $t$ is the total, then $t < 50$. 'Under' or 'less than' means strictly $<$ (not included).",
        hint: "'Under' is strict, not 'or equal to'.",
      },
      {
        front: "How many solutions does an inequality usually have?",
        back: "Infinitely many. An inequality like $x > 5$ is satisfied by every number greater than 5, not just one value.",
        hint: "A whole range, not a single answer.",
      },
      {
        front: "Solve and graph $\\frac{x}{-3} \\geq 2$.",
        back: "Multiply both sides by $-3$ and FLIP: $x \\leq -6$. Graph with a closed circle at $-6$ shading left.",
        hint: "Multiplying by a negative flips the sign.",
      },
    ],
  },
  {
    slug: "two-step-equations-grade7",
    cards: [
      {
        front: "What is a two-step equation?",
        back: "An equation that requires two inverse operations to solve, such as $2x + 3 = 11$. You undo the operations one at a time to isolate the variable.",
        hint: "Two operations to undo.",
      },
      {
        front: "What order do you undo operations in a two-step equation?",
        back: "Undo addition or subtraction first, then undo multiplication or division. This is the reverse of the order of operations.",
        hint: "Reverse of PEMDAS: add/subtract before multiply/divide.",
      },
      {
        front: "Solve $2x + 3 = 11$.",
        back: "Subtract 3: $2x = 8$. Divide by 2: $x = 4$. Check: $2(4) + 3 = 11$. Correct.",
        hint: "Undo the +3 first, then the times 2.",
      },
      {
        front: "Solve $\\frac{x}{4} - 2 = 3$.",
        back: "Add 2: $\\frac{x}{4} = 5$. Multiply by 4: $x = 20$.",
        hint: "Undo subtraction, then undo division.",
      },
      {
        front: "Solve $5x - 7 = 18$.",
        back: "Add 7: $5x = 25$. Divide by 5: $x = 5$.",
        hint: "Add 7 first, then divide by 5.",
      },
      {
        front: "Solve $-3x + 6 = -9$.",
        back: "Subtract 6: $-3x = -15$. Divide by $-3$: $x = 5$.",
        hint: "Watch the negatives carefully.",
      },
      {
        front: "Why must you do the same operation to both sides?",
        back: "To keep the equation balanced and equal. Doing something to only one side would change the solution.",
        hint: "Balance the scale.",
      },
      {
        front: "Common trap: In $2x + 3 = 11$, a student divides by 2 first and gets $x + 3 = 5.5$. Is that wrong?",
        back: "Not wrong, but you must divide EVERY term by 2: $x + 1.5 = 5.5$. The student forgot to divide the 3. Undoing addition first avoids this mistake.",
        hint: "If you divide, divide every term.",
      },
      {
        front: "Solve $\\frac{x + 4}{2} = 6$.",
        back: "Multiply by 2: $x + 4 = 12$. Subtract 4: $x = 8$. (Here the whole side is over 2, so clear the fraction first.)",
        hint: "Clear the denominator first when the whole expression is divided.",
      },
      {
        front: "How do you write a two-step equation for: 'A taxi charges $3 plus $2 per mile; the ride cost $15. How many miles?'",
        back: "Let $m$ = miles. The equation is $2m + 3 = 15$. Solving: $2m = 12$, so $m = 6$ miles.",
        hint: "Flat fee is the constant; per-mile is the coefficient.",
      },
      {
        front: "Solve $7 = 4 + 3x$.",
        back: "Subtract 4: $3 = 3x$. Divide by 3: $x = 1$. (The variable can be on the right; just isolate it.)",
        hint: "Variable on the right is fine.",
      },
      {
        front: "How do you check a solution to a two-step equation?",
        back: "Substitute your answer back into the original equation and verify both sides are equal. Example: for $x = 4$ in $2x + 3 = 11$: $2(4) + 3 = 11$. True.",
        hint: "Plug it back in to verify.",
      },
    ],
  },
  {
    slug: "scale-drawings-grade7",
    cards: [
      {
        front: "What is a scale drawing?",
        back: "A scale drawing represents a real object with all lengths reduced or enlarged by the same ratio (the scale). The shape stays the same; only the size changes.",
        hint: "Same shape, proportional size.",
      },
      {
        front: "What is a scale (or scale factor)?",
        back: "The scale is the ratio of a drawing length to the actual length, such as 1 inch : 4 feet. The scale factor is the number you multiply by to go from drawing to actual (or back).",
        hint: "Drawing length : actual length.",
      },
      {
        front: "If the scale is 1 cm : 5 m, what real length does 3 cm represent?",
        back: "Multiply: $3 \\times 5 = 15$ meters. Each centimeter stands for 5 meters.",
        hint: "Multiply the drawing length by the scale.",
      },
      {
        front: "How do you set up a proportion to solve a scale problem?",
        back: "Write $\\frac{\\text{drawing}}{\\text{actual}} = \\frac{\\text{drawing}}{\\text{actual}}$, keeping units consistent across both ratios, then cross-multiply to solve for the unknown.",
        hint: "Match drawing-to-actual on both sides.",
      },
      {
        front: "A map scale is 1 in : 20 mi. Two cities are 3.5 in apart on the map. How far apart are they really?",
        back: "$3.5 \\times 20 = 70$ miles. Each inch represents 20 miles.",
        hint: "Multiply map distance by the scale.",
      },
      {
        front: "On a 1 cm : 4 m scale, a real wall is 12 m long. How long is it in the drawing?",
        back: "Divide by the scale: $12 \\div 4 = 3$ cm. To go from actual to drawing, you reverse the multiplication.",
        hint: "Going from actual to drawing, divide.",
      },
      {
        front: "What is a scale factor as a single number, and how do you find it?",
        back: "Convert the scale to a unit-free ratio (same units), then simplify. For 1 cm : 200 cm, the scale factor is $\\frac{1}{200}$. A factor less than 1 means the drawing is smaller than the real object.",
        hint: "Same units, then simplify to one number.",
      },
      {
        front: "Common trap: What must you check before using a scale ratio in a proportion?",
        back: "The units must match within each comparison. Convert (e.g., feet to inches) so both quantities use the same unit before cross-multiplying.",
        hint: "Convert units first.",
      },
      {
        front: "How does the scale factor affect area in a scale drawing?",
        back: "Area scales by the SQUARE of the scale factor. If lengths are scaled by 3, the area is scaled by $3^2 = 9$.",
        hint: "Square the length scale factor.",
      },
      {
        front: "A drawing uses scale 2 cm : 1 m. The real garden is 6 m by 4 m. What are its drawing dimensions?",
        back: "Each meter is 2 cm, so $6 \\times 2 = 12$ cm by $4 \\times 2 = 8$ cm. The drawing is 12 cm by 8 cm.",
        hint: "Multiply each real length by 2 cm per meter.",
      },
      {
        front: "If a 1 : 50 model car is 8 cm long, how long is the real car?",
        back: "$8 \\times 50 = 400$ cm $= 4$ m. In a 1 : 50 scale, the real object is 50 times the model.",
        hint: "Multiply the model length by 50.",
      },
      {
        front: "Why must every length use the same scale in a scale drawing?",
        back: "So the drawing stays similar (proportional) to the real object. If different lengths used different scales, the shape would be distorted.",
        hint: "Equal scaling keeps the shape accurate.",
      },
    ],
  },
];
