export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "one-step-equations-grade6",
    cards: [
      {
        front: "What is an equation?",
        back: "An equation is a math sentence stating that two expressions are equal, shown with an equals sign. Example: $x + 5 = 12$.",
        hint: "Look for the = sign.",
      },
      {
        front: "What does it mean to 'solve' a one-step equation?",
        back: "It means finding the value of the variable that makes the equation true. You isolate the variable by doing one inverse operation to both sides.",
        hint: "Get the letter alone.",
      },
      {
        front: "What are inverse operations?",
        back: "Operations that undo each other: addition undoes subtraction, and multiplication undoes division. You use the inverse to isolate the variable.",
        hint: "Opposites.",
      },
      {
        front: "Solve $x + 7 = 15$.",
        back: "Subtract 7 from both sides: $x = 15 - 7 = 8$. Check: $8 + 7 = 15$.",
        hint: "Undo adding 7.",
      },
      {
        front: "Solve $x - 4 = 9$.",
        back: "Add 4 to both sides: $x = 9 + 4 = 13$. Check: $13 - 4 = 9$.",
        hint: "Undo subtracting 4.",
      },
      {
        front: "Solve $6x = 30$.",
        back: "Divide both sides by 6: $x = 30 \\\\div 6 = 5$. Check: $6 \\\\times 5 = 30$.",
        hint: "Undo multiplying by 6.",
      },
      {
        front: "Solve $\\\\frac{x}{4} = 5$.",
        back: "Multiply both sides by 4: $x = 5 \\\\times 4 = 20$. Check: $20 \\\\div 4 = 5$.",
        hint: "Undo dividing by 4.",
      },
      {
        front: "Why must you do the same operation to BOTH sides of an equation?",
        back: "To keep the equation balanced and true. Whatever you do to one side, you must do to the other so the two sides stay equal.",
        hint: "Think of a balance scale.",
      },
      {
        front: "Common trap: solving $x + 8 = 20$ by adding 8 instead of subtracting.",
        back: "Use the INVERSE operation. Since 8 is added, you subtract 8 from both sides: $x = 12$. Adding 8 would not isolate x.",
        hint: "Use the opposite operation.",
      },
      {
        front: "How do you check the solution to an equation?",
        back: "Substitute your answer back into the original equation. If both sides are equal, the solution is correct.",
        hint: "Plug it back in.",
      },
      {
        front: "Write an equation: 'A number times 3 equals 21.'",
        back: "$3n = 21$, where $n$ is the unknown number. Solving gives $n = 7$.",
        hint: "Times means multiply.",
      },
      {
        front: "Solve $\\\\frac{x}{2} = 9$ and explain the step.",
        back: "Since x is divided by 2, multiply both sides by 2: $x = 18$. Multiplication undoes division.",
        hint: "Multiply by the denominator.",
      },
      {
        front: "Is $x = 4$ a solution to $x + 5 = 10$?",
        back: "No. Substituting gives $4 + 5 = 9$, which does not equal 10. The correct solution is $x = 5$.",
        hint: "Substitute and compare.",
      },
    ],
  },
  {
    slug: "surface-area-volume-grade6",
    cards: [
      {
        front: "What is volume?",
        back: "Volume is the amount of space inside a 3D object, measured in cubic units (like $cm^3$ or cubic inches).",
        hint: "Space inside; cubic units.",
      },
      {
        front: "What is surface area?",
        back: "Surface area is the total area of all the outside faces of a 3D object, measured in square units (like $cm^2$).",
        hint: "Cover all faces; square units.",
      },
      {
        front: "Formula for the volume of a rectangular prism.",
        back: "$V = l \\\\times w \\\\times h$, where $l$ is length, $w$ is width, and $h$ is height. Use it for box shapes.",
        hint: "Length times width times height.",
      },
      {
        front: "Formula for the volume of a cube.",
        back: "$V = s^3$, where $s$ is the side length. All edges of a cube are equal.",
        hint: "Side cubed.",
      },
      {
        front: "Find the volume of a box with $l = 5$, $w = 3$, $h = 4$ cm.",
        back: "$V = 5 \\\\times 3 \\\\times 4 = 60$ cubic cm ($cm^3$).",
        hint: "Multiply all three.",
      },
      {
        front: "How many faces, edges, and vertices does a rectangular prism have?",
        back: "It has 6 faces, 12 edges, and 8 vertices.",
        hint: "6, 12, 8.",
      },
      {
        front: "How do you find the surface area of a rectangular prism using a net?",
        back: "Unfold it into 6 rectangles, find the area of each ($length \\\\times width$), then add all 6 areas together.",
        hint: "Add all 6 faces.",
      },
      {
        front: "Surface area formula for a rectangular prism.",
        back: "$SA = 2lw + 2lh + 2wh$, where $l$, $w$, $h$ are length, width, height. Each pair of opposite faces is counted twice.",
        hint: "Three pairs of faces.",
      },
      {
        front: "Surface area of a cube with side $s = 4$ cm.",
        back: "A cube has 6 equal square faces: $SA = 6s^2 = 6 \\\\times 4^2 = 6 \\\\times 16 = 96$ square cm.",
        hint: "Six times side squared.",
      },
      {
        front: "What is a net?",
        back: "A net is a flat (2D) pattern that folds up to form a 3D solid. Nets help you see and add up every face for surface area.",
        hint: "Unfolded 3D shape.",
      },
      {
        front: "Common trap: using cubic units for surface area.",
        back: "Surface area is always in SQUARE units ($cm^2$); volume is in CUBIC units ($cm^3$). Match the unit to what you measured.",
        hint: "Square vs cubic.",
      },
      {
        front: "A cube has volume $27\\\\ cm^3$. What is its side length?",
        back: "Since $V = s^3$, find the number whose cube is 27: $s = 3$ cm (because $3 \\\\times 3 \\\\times 3 = 27$).",
        hint: "Cube root of 27.",
      },
      {
        front: "Why does a rectangular prism have fractional volume when sides are fractions?",
        back: "The formula $V = l \\\\times w \\\\times h$ still works with fractions. For example, $\\\\frac{1}{2} \\\\times \\\\frac{1}{2} \\\\times 2 = \\\\frac{1}{2}\\\\ unit^3$.",
        hint: "Same formula, multiply fractions.",
      },
    ],
  },
  {
    slug: "area-polygons-grade6",
    cards: [
      {
        front: "What is area?",
        back: "Area is the amount of flat space a 2D shape covers, measured in square units (like $cm^2$).",
        hint: "Space inside a flat shape.",
      },
      {
        front: "Area formula for a rectangle.",
        back: "$A = l \\\\times w$, where $l$ is length (base) and $w$ is width (height).",
        hint: "Base times height.",
      },
      {
        front: "Area formula for a triangle.",
        back: "$A = \\\\frac{1}{2} b h$, where $b$ is the base and $h$ is the height (perpendicular to the base).",
        hint: "Half of base times height.",
      },
      {
        front: "Area formula for a parallelogram.",
        back: "$A = b h$, where $b$ is the base and $h$ is the perpendicular height (not the slanted side).",
        hint: "Base times straight-up height.",
      },
      {
        front: "Area formula for a trapezoid.",
        back: "$A = \\\\frac{1}{2}(b_1 + b_2) h$, where $b_1$ and $b_2$ are the two parallel sides and $h$ is the height between them.",
        hint: "Average the bases, times height.",
      },
      {
        front: "Find the area of a triangle with base 8 cm and height 5 cm.",
        back: "$A = \\\\frac{1}{2} \\\\times 8 \\\\times 5 = \\\\frac{1}{2} \\\\times 40 = 20$ square cm.",
        hint: "Half of 40.",
      },
      {
        front: "Common trap: using the slanted side as the height of a parallelogram or triangle.",
        back: "Always use the PERPENDICULAR height (straight up from the base), not the slanted side length.",
        hint: "Height must form a right angle with base.",
      },
      {
        front: "How do you find the area of an irregular polygon?",
        back: "Decompose it into rectangles and triangles, find each area, then add them up (or subtract a missing piece).",
        hint: "Break into simple shapes.",
      },
      {
        front: "Find the area of a parallelogram with base 10 and height 6.",
        back: "$A = b h = 10 \\\\times 6 = 60$ square units.",
        hint: "Just multiply.",
      },
      {
        front: "Find the area of a trapezoid with parallel sides 6 and 10 and height 4.",
        back: "$A = \\\\frac{1}{2}(6 + 10)(4) = \\\\frac{1}{2}(16)(4) = 32$ square units.",
        hint: "Add bases first.",
      },
      {
        front: "Why is a triangle's area half a rectangle's?",
        back: "A triangle is exactly half of a parallelogram (or rectangle) with the same base and height, so its area is $\\\\frac{1}{2} b h$.",
        hint: "Two triangles make a rectangle.",
      },
      {
        front: "What does 'composing' a shape mean in area problems?",
        back: "Composing means joining simpler shapes to form a larger one; decomposing means breaking a complex shape into simple ones to find area.",
        hint: "Build up or break apart.",
      },
      {
        front: "A polygon is made of a 4-by-3 rectangle plus a triangle (base 4, height 2). Find total area.",
        back: "Rectangle: $4 \\\\times 3 = 12$. Triangle: $\\\\frac{1}{2} \\\\times 4 \\\\times 2 = 4$. Total $= 12 + 4 = 16$ square units.",
        hint: "Add the two pieces.",
      },
    ],
  },
  {
    slug: "integer-operations-grade6",
    cards: [
      {
        front: "What are integers?",
        back: "Integers are whole numbers and their opposites, including negatives, zero, and positives: ... -3, -2, -1, 0, 1, 2, 3 ... (no fractions or decimals).",
        hint: "Whole numbers plus negatives.",
      },
      {
        front: "Rule for adding two integers with the SAME sign.",
        back: "Add their absolute values and keep the common sign. Example: $-4 + (-3) = -7$.",
        hint: "Same sign: add, keep sign.",
      },
      {
        front: "Rule for adding two integers with DIFFERENT signs.",
        back: "Subtract the smaller absolute value from the larger, and keep the sign of the number with the larger absolute value. Example: $-7 + 3 = -4$.",
        hint: "Different signs: subtract, keep bigger's sign.",
      },
      {
        front: "How do you subtract integers?",
        back: "Add the opposite: change subtraction to adding the opposite. Example: $5 - 8 = 5 + (-8) = -3$.",
        hint: "Keep-change-change.",
      },
      {
        front: "Rule for the sign when MULTIPLYING or DIVIDING two integers.",
        back: "Same signs give a positive result; different signs give a negative result. Example: $-6 \\\\times -2 = 12$; $-6 \\\\times 2 = -12$.",
        hint: "Like signs positive, unlike negative.",
      },
      {
        front: "What is the absolute value of a number?",
        back: "The distance of a number from 0 on the number line, always nonnegative. Written $|x|$. Example: $|-5| = 5$.",
        hint: "Distance from zero.",
      },
      {
        front: "What is the opposite (additive inverse) of a number?",
        back: "The number the same distance from 0 but on the other side. The opposite of 7 is $-7$, and they add to 0.",
        hint: "Flip the sign; sum is 0.",
      },
      {
        front: "Compute $-5 + 9$.",
        back: "Different signs: $9 - 5 = 4$, keep the sign of 9 (larger absolute value), so the answer is $+4$.",
        hint: "Subtract, keep bigger's sign.",
      },
      {
        front: "Compute $-3 - (-7)$.",
        back: "Add the opposite: $-3 + 7 = 4$.",
        hint: "Two minuses make a plus.",
      },
      {
        front: "Compute $-12 \\\\div 4$.",
        back: "Different signs give a negative quotient: $-12 \\\\div 4 = -3$.",
        hint: "Unlike signs: negative.",
      },
      {
        front: "Common trap: thinking $-(-4)$ is negative.",
        back: "The opposite of $-4$ is $+4$. Two negatives cancel: $-(-4) = 4$.",
        hint: "Negative of a negative is positive.",
      },
      {
        front: "What is the result of multiplying three negative numbers?",
        back: "Negative. An ODD number of negative factors gives a negative product; an EVEN number gives a positive product.",
        hint: "Count the negatives.",
      },
      {
        front: "Compute $-2 \\\\times 5 \\\\times (-3)$.",
        back: "$-2 \\\\times 5 = -10$, then $-10 \\\\times -3 = 30$. Two negatives make the result positive.",
        hint: "Multiply left to right.",
      },
    ],
  },
  {
    slug: "writing-evaluating-expressions-grade6",
    cards: [
      {
        front: "What is an algebraic expression?",
        back: "A combination of numbers, variables, and operations with NO equals sign. Example: $3x + 5$.",
        hint: "No equals sign.",
      },
      {
        front: "What is a variable?",
        back: "A letter or symbol that stands for an unknown or changing number, like $x$ or $n$.",
        hint: "A letter for a number.",
      },
      {
        front: "What is a coefficient?",
        back: "The number multiplied by a variable. In $7x$, the coefficient is 7.",
        hint: "Number in front of the variable.",
      },
      {
        front: "What is a term?",
        back: "A single number, variable, or product of them, separated by + or - signs. In $4x + 9$, the terms are $4x$ and $9$.",
        hint: "Parts separated by + or -.",
      },
      {
        front: "What does it mean to 'evaluate' an expression?",
        back: "Substitute given values for the variables and compute the result, following the order of operations.",
        hint: "Plug in and simplify.",
      },
      {
        front: "What is the order of operations (PEMDAS)?",
        back: "Parentheses, Exponents, Multiplication/Division (left to right), then Addition/Subtraction (left to right).",
        hint: "Please Excuse My Dear Aunt Sally.",
      },
      {
        front: "Evaluate $3x + 4$ when $x = 5$.",
        back: "$3(5) + 4 = 15 + 4 = 19$.",
        hint: "Multiply before adding.",
      },
      {
        front: "Write an expression: '5 more than twice a number n.'",
        back: "$2n + 5$. 'Twice' means multiply by 2; 'more than' means add.",
        hint: "Multiply then add.",
      },
      {
        front: "Write an expression: 'the quotient of a number x and 6.'",
        back: "$\\\\frac{x}{6}$ (or $x \\\\div 6$). 'Quotient' means division.",
        hint: "Quotient = divide.",
      },
      {
        front: "What are like terms?",
        back: "Terms with the exact same variable part. $3x$ and $5x$ are like terms; $3x$ and $3y$ are not.",
        hint: "Same variable.",
      },
      {
        front: "Combine like terms: $4x + 2 + 3x + 5$.",
        back: "Add coefficients of like terms: $4x + 3x = 7x$; constants $2 + 5 = 7$. Result: $7x + 7$.",
        hint: "Group x's and numbers.",
      },
      {
        front: "Common trap: $x^2$ means $x \\\\times 2$.",
        back: "No. $x^2$ means $x \\\\times x$. The exponent tells how many times to multiply the base by itself.",
        hint: "Exponent is repeated multiplication.",
      },
      {
        front: "Evaluate $2(a + 3)$ when $a = 4$.",
        back: "Parentheses first: $a + 3 = 7$, then $2 \\\\times 7 = 14$.",
        hint: "Do inside parentheses first.",
      },
      {
        front: "Use the distributive property to expand $3(x + 4)$.",
        back: "Multiply 3 by each term inside: $3 \\\\times x + 3 \\\\times 4 = 3x + 12$.",
        hint: "Multiply across the parentheses.",
      },
    ],
  },
  {
    slug: "data-displays-grade6",
    cards: [
      {
        front: "What is a statistical question?",
        back: "A question that anticipates variability in the data, like 'How tall are the students in my class?' (answers will differ).",
        hint: "Expects different answers.",
      },
      {
        front: "What is the mean?",
        back: "The average: add all values and divide by the number of values. It is a measure of center.",
        hint: "Sum divided by count.",
      },
      {
        front: "What is the median?",
        back: "The middle value when data is ordered from least to greatest. With an even count, average the two middle values.",
        hint: "Middle of ordered list.",
      },
      {
        front: "What is the mode?",
        back: "The value that appears most often in a data set. A set can have no mode, one mode, or several.",
        hint: "Most frequent value.",
      },
      {
        front: "What is the range?",
        back: "A measure of spread: the largest value minus the smallest value.",
        hint: "Max minus min.",
      },
      {
        front: "Find the mean of 4, 6, 8, 10.",
        back: "$(4 + 6 + 8 + 10) \\\\div 4 = 28 \\\\div 4 = 7$.",
        hint: "Add, then divide by 4.",
      },
      {
        front: "Find the median of 3, 7, 9, 12, 15.",
        back: "Ordered already; the middle value (3rd of 5) is 9.",
        hint: "Pick the center value.",
      },
      {
        front: "What is a dot plot (line plot)?",
        back: "A display where each data value is a dot above a number line; it shows frequency and clusters at a glance.",
        hint: "Dots stacked on a number line.",
      },
      {
        front: "What is a histogram?",
        back: "A bar graph for numerical data grouped into equal intervals (bins); bar height shows how many values fall in each interval. Bars touch.",
        hint: "Bars over number intervals.",
      },
      {
        front: "What is a box plot (box-and-whisker plot)?",
        back: "A display showing the five-number summary: minimum, Q1, median, Q3, and maximum. The box spans Q1 to Q3.",
        hint: "Five-number summary picture.",
      },
      {
        front: "What is the interquartile range (IQR)?",
        back: "$IQR = Q3 - Q1$. It measures the spread of the middle 50 percent of the data and resists outliers.",
        hint: "Q3 minus Q1.",
      },
      {
        front: "Common trap: forgetting to ORDER data before finding the median.",
        back: "Always sort least-to-greatest first. The middle of an UNORDERED list is not the median.",
        hint: "Sort first, then find center.",
      },
      {
        front: "Which measure of center is best when there is an outlier?",
        back: "The median, because it is not strongly affected by extreme values, while the mean gets pulled toward the outlier.",
        hint: "Median resists outliers.",
      },
      {
        front: "What does the shape of a distribution describe?",
        back: "Whether the data is symmetric, skewed (tail to one side), or has clusters, gaps, peaks, or outliers.",
        hint: "Symmetric, skewed, clusters.",
      },
    ],
  },
  {
    slug: "understanding-ratios-grade6",
    cards: [
      {
        front: "What is a ratio?",
        back: "A comparison of two quantities by division. The ratio of a to b can be written $a : b$, $\\\\frac{a}{b}$, or 'a to b'.",
        hint: "Compares two amounts.",
      },
      {
        front: "What is a rate?",
        back: "A ratio that compares two quantities with DIFFERENT units, like 60 miles per 2 hours.",
        hint: "Ratio with different units.",
      },
      {
        front: "What is a unit rate?",
        back: "A rate with a denominator of 1, like 30 miles per 1 hour (30 mph). You find it by dividing.",
        hint: "Per one unit.",
      },
      {
        front: "Find the unit rate: 150 words in 5 minutes.",
        back: "$150 \\\\div 5 = 30$ words per minute.",
        hint: "Divide to get per 1 minute.",
      },
      {
        front: "What are equivalent ratios?",
        back: "Ratios that name the same comparison, found by multiplying or dividing both terms by the same number. $2:3$ equals $4:6$.",
        hint: "Scale both parts equally.",
      },
      {
        front: "Common trap: a ratio of $3:2$ being the same as $2:3$.",
        back: "Order matters in a ratio. $3:2$ (3 for every 2) is different from $2:3$ (2 for every 3).",
        hint: "Order matters.",
      },
      {
        front: "In a recipe, the ratio of flour to sugar is $4:1$. How much sugar for 12 cups of flour?",
        back: "Scale up: $4 \\\\times 3 = 12$ cups of flour, so sugar is $1 \\\\times 3 = 3$ cups.",
        hint: "Multiply both parts by the same number.",
      },
      {
        front: "How do you use a ratio table?",
        back: "List equivalent ratios in columns; multiply or divide both rows by the same number to find a missing value.",
        hint: "Same operation on both rows.",
      },
      {
        front: "What is a part-to-whole ratio?",
        back: "A ratio comparing one part to the total. If there are 3 red and 2 blue marbles, red-to-total is $3:5$.",
        hint: "Part compared to the total.",
      },
      {
        front: "A ratio is $2:3$ boys to girls in a class of 25. How many boys?",
        back: "Total parts $= 2 + 3 = 5$. Each part $= 25 \\\\div 5 = 5$ students. Boys $= 2 \\\\times 5 = 10$.",
        hint: "Add the parts to find the whole.",
      },
      {
        front: "How do you compare which is the better buy using unit rates?",
        back: "Find the price per single unit (price divided by quantity) for each option; the lower unit price is the better buy.",
        hint: "Cost per one unit.",
      },
      {
        front: "Which is cheaper: 12 oz for 3 dollars or 20 oz for 4 dollars?",
        back: "$3 \\\\div 12 = 0.25$ per oz; $4 \\\\div 20 = 0.20$ per oz. The 20 oz size is cheaper per ounce.",
        hint: "Divide price by ounces.",
      },
      {
        front: "How can a double number line help with ratios?",
        back: "It shows two related quantities aligned; equal jumps on both lines keep the ratio constant, helping you find missing values.",
        hint: "Two aligned number lines.",
      },
    ],
  },
  {
    slug: "integers-number-line-grade6",
    cards: [
      {
        front: "Where are positive and negative integers on a number line?",
        back: "Zero is in the middle; positive integers go to the RIGHT and negative integers go to the LEFT.",
        hint: "Negatives left, positives right.",
      },
      {
        front: "What are opposite integers on a number line?",
        back: "Two numbers the same distance from 0 but on opposite sides, like 5 and $-5$. They are reflections across zero.",
        hint: "Same distance, opposite sides.",
      },
      {
        front: "On a number line, which is greater: $-3$ or $-7$?",
        back: "$-3$, because it is farther to the right. Numbers increase as you move right, so $-3 > -7$.",
        hint: "Rightmost is greater.",
      },
      {
        front: "Common trap: thinking $-8$ is greater than $-2$ because 8 is bigger.",
        back: "For negatives, the number closer to zero is greater. So $-2 > -8$, even though 8 has a larger absolute value.",
        hint: "Closer to zero = greater (for negatives).",
      },
      {
        front: "What is the absolute value of an integer on a number line?",
        back: "Its distance from 0, regardless of direction. $|-6| = 6$ and $|6| = 6$.",
        hint: "Distance from zero.",
      },
      {
        front: "Order from least to greatest: $-4, 2, -1, 0, 3$.",
        back: "$-4, -1, 0, 2, 3$. Reading left-to-right on a number line gives least-to-greatest.",
        hint: "Left to right on the line.",
      },
      {
        front: "What does a negative number represent in real life?",
        back: "Quantities below a reference point, like temperatures below 0, depths below sea level, or money owed (debt).",
        hint: "Below, owed, or lost.",
      },
      {
        front: "How do you write 'greater than' and 'less than' symbols?",
        back: "The symbol $>$ means greater than; $<$ means less than. The open end always points to the larger number.",
        hint: "Open side faces the bigger number.",
      },
      {
        front: "Compare using $<$ or $>$: $-5$ ___ $-9$.",
        back: "$-5 > -9$, since $-5$ is farther right (closer to 0) on the number line.",
        hint: "Which is closer to zero?",
      },
      {
        front: "What integer is 4 units to the LEFT of $-1$?",
        back: "Moving left means subtracting: $-1 - 4 = -5$.",
        hint: "Left means go more negative.",
      },
      {
        front: "How are integers used to compare elevations?",
        back: "Above sea level is positive, below sea level is negative. A point at $-200$ m is lower than one at $50$ m.",
        hint: "Below sea level is negative.",
      },
      {
        front: "What is the opposite of the opposite of 6?",
        back: "The opposite of 6 is $-6$, and the opposite of $-6$ is 6. So it returns to $6$.",
        hint: "Two flips return you to start.",
      },
      {
        front: "On a vertical number line, which direction increases?",
        back: "Upward. Higher positions are greater, so values increase as you go up and decrease as you go down.",
        hint: "Up is greater.",
      },
    ],
  },
];
