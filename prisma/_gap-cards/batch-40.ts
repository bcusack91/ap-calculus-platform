export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "rates-unit-rates-grade6",
    cards: [
      {
        front: "What is a ratio?",
        back: "A ratio compares two quantities. For example, 3 cups of flour to 2 cups of sugar is the ratio $3:2$, written $3:2$, $3$ to $2$, or $\\\\dfrac{3}{2}$.",
        hint: "A comparison of two amounts."
      },
      {
        front: "What is a rate?",
        back: "A rate is a ratio that compares two quantities with different units, such as miles to hours or dollars to pounds. Example: 120 miles in 2 hours.",
        hint: "A ratio with different units."
      },
      {
        front: "What is a unit rate?",
        back: "A unit rate is a rate written with a denominator of 1, telling how much of the first quantity goes with exactly one of the second. Example: 60 miles per 1 hour.",
        hint: "Per ONE of something."
      },
      {
        front: "How do you find a unit rate from a rate?",
        back: "Divide the first quantity by the second quantity. For 120 miles in 2 hours: $120 \\\\div 2 = 60$ miles per hour.",
        hint: "Divide to get 'per 1'."
      },
      {
        front: "A car travels 150 miles in 3 hours. What is the unit rate (speed)?",
        back: "$150 \\\\div 3 = 50$ miles per hour.",
        hint: "Miles divided by hours."
      },
      {
        front: "What is a unit price?",
        back: "A unit price is the cost for one unit of an item, such as the price per ounce or per pound. It lets you compare which deal is cheaper.",
        hint: "Cost per ONE unit."
      },
      {
        front: "Which is the better buy: 12 oz for \\$3.00 or 16 oz for \\$3.20?",
        back: "12 oz: $3.00 \\\\div 12 = \\$0.25$ per oz. 16 oz: $3.20 \\\\div 16 = \\$0.20$ per oz. The 16 oz package is the better buy at \\$0.20 per ounce.",
        hint: "Find price per ounce for each."
      },
      {
        front: "If 4 apples cost \\$2, what is the unit price per apple, and how much do 10 apples cost?",
        back: "Unit price: $2 \\\\div 4 = \\$0.50$ per apple. Ten apples cost $10 \\\\times 0.50 = \\$5.00$.",
        hint: "First find cost of one apple."
      },
      {
        front: "How can a double number line help with rates?",
        back: "A double number line lines up two related quantities (like miles and hours) so you can scale up or down by multiplying or dividing both lines by the same number.",
        hint: "Two lines, scaled together."
      },
      {
        front: "Common trap: writing a unit rate upside down. How do you avoid it?",
        back: "Match the unit rate to the words. 'Miles per hour' means miles divided by hours, so miles is on top (numerator). The word 'per' tells you what goes in the denominator (=1).",
        hint: "The word after 'per' becomes 1."
      },
      {
        front: "A recipe uses 2 cups of rice for 5 people. What is the unit rate of cups per person?",
        back: "$2 \\\\div 5 = 0.4$ cups per person.",
        hint: "Cups divided by people."
      },
      {
        front: "If a printer prints 90 pages in 6 minutes, how many pages does it print per minute, and how many in 10 minutes?",
        back: "Per minute: $90 \\\\div 6 = 15$ pages. In 10 minutes: $15 \\\\times 10 = 150$ pages.",
        hint: "Find pages per 1 minute first."
      },
      {
        front: "What does 'equivalent rates' mean?",
        back: "Equivalent rates describe the same relationship using different numbers, found by multiplying or dividing both quantities by the same value. Example: 60 mi/1 hr equals 120 mi/2 hr.",
        hint: "Same speed, scaled numbers."
      }
    ]
  },
  {
    slug: "mean-median-mode-range-grade6",
    cards: [
      {
        front: "What is the mean (average)?",
        back: "The mean is found by adding all the values, then dividing by how many values there are. It is the 'balance point' of the data.",
        hint: "Add them up, then divide by the count."
      },
      {
        front: "Find the mean of 4, 8, 6, 2, 10.",
        back: "Sum is $4+8+6+2+10 = 30$. There are 5 values, so the mean is $30 \\\\div 5 = 6$.",
        hint: "Add, then divide by 5."
      },
      {
        front: "What is the median?",
        back: "The median is the middle value when the data is arranged in order from least to greatest. If there are two middle values, average them.",
        hint: "Middle of the ordered list."
      },
      {
        front: "Find the median of 7, 3, 9, 1, 5.",
        back: "Order them: 1, 3, 5, 7, 9. The middle value is 5, so the median is 5.",
        hint: "Sort first, then find the center."
      },
      {
        front: "How do you find the median when there is an even number of values?",
        back: "Order the data, find the two middle values, then take their average (add them and divide by 2). For 2, 4, 6, 8 the median is $(4+6) \\\\div 2 = 5$.",
        hint: "Average the two middle numbers."
      },
      {
        front: "What is the mode?",
        back: "The mode is the value that appears most often in a data set. A data set can have no mode, one mode, or more than one mode.",
        hint: "Most frequent value."
      },
      {
        front: "Find the mode of 3, 5, 5, 2, 7, 5, 2.",
        back: "5 appears three times, more than any other value, so the mode is 5.",
        hint: "Which number repeats most?"
      },
      {
        front: "What is the range?",
        back: "The range is the difference between the greatest and least values: $\\\\text{range} = \\\\text{maximum} - \\\\text{minimum}$. It measures how spread out the data is.",
        hint: "Biggest minus smallest."
      },
      {
        front: "Find the range of 12, 7, 20, 3, 15.",
        back: "Maximum is 20, minimum is 3, so the range is $20 - 3 = 17$.",
        hint: "Subtract the smallest from the largest."
      },
      {
        front: "Common trap: forgetting to order the data before finding the median. Why does it matter?",
        back: "The median is the middle of the SORTED list, not the middle of the list as written. Always arrange the numbers from least to greatest first.",
        hint: "Sort before picking the middle."
      },
      {
        front: "Mean vs. median: which is more affected by an outlier?",
        back: "The mean is pulled toward an outlier (a very high or low value), while the median usually stays near the center. The median is more resistant to outliers.",
        hint: "One unusual value sways the mean."
      },
      {
        front: "Data: 2, 4, 4, 6, 9. Find mean, median, mode, and range.",
        back: "Mean: $(2+4+4+6+9) \\\\div 5 = 25 \\\\div 5 = 5$. Median: middle of sorted list is 4. Mode: 4 (appears twice). Range: $9 - 2 = 7$.",
        hint: "Compute all four step by step."
      },
      {
        front: "Together, what do mean, median, and mode describe, versus range?",
        back: "Mean, median, and mode are measures of center (a typical value), while range is a measure of spread (how far apart the values are).",
        hint: "Center vs. spread."
      }
    ]
  },
  {
    slug: "adding-subtracting-fractions-grade4",
    cards: [
      {
        front: "What is the rule for adding fractions with the same denominator?",
        back: "Add the numerators and keep the denominator the same: $\\\\dfrac{a}{d} + \\\\dfrac{b}{d} = \\\\dfrac{a+b}{d}$.",
        hint: "Add tops, keep the bottom."
      },
      {
        front: "Compute $\\\\dfrac{2}{5} + \\\\dfrac{1}{5}$.",
        back: "$\\\\dfrac{2}{5} + \\\\dfrac{1}{5} = \\\\dfrac{3}{5}$.",
        hint: "Add the numerators only."
      },
      {
        front: "What is the rule for subtracting fractions with the same denominator?",
        back: "Subtract the numerators and keep the denominator the same: $\\\\dfrac{a}{d} - \\\\dfrac{b}{d} = \\\\dfrac{a-b}{d}$.",
        hint: "Subtract tops, keep the bottom."
      },
      {
        front: "Compute $\\\\dfrac{7}{8} - \\\\dfrac{3}{8}$.",
        back: "$\\\\dfrac{7}{8} - \\\\dfrac{3}{8} = \\\\dfrac{4}{8}$, which simplifies to $\\\\dfrac{1}{2}$.",
        hint: "Subtract numerators, then simplify."
      },
      {
        front: "Why must the denominators be the same to add or subtract fractions?",
        back: "The denominator tells the size of each piece. You can only combine pieces that are the same size, so the denominators (piece sizes) must match.",
        hint: "Pieces must be equal-sized."
      },
      {
        front: "What is a mixed number?",
        back: "A mixed number combines a whole number and a fraction, like $2\\\\tfrac{3}{4}$, meaning $2 + \\\\dfrac{3}{4}$.",
        hint: "Whole part plus a fraction part."
      },
      {
        front: "Add the mixed numbers $1\\\\tfrac{1}{4} + 2\\\\tfrac{1}{4}$.",
        back: "Add the whole numbers: $1+2=3$. Add the fractions: $\\\\dfrac{1}{4}+\\\\dfrac{1}{4}=\\\\dfrac{2}{4}=\\\\dfrac{1}{2}$. The result is $3\\\\tfrac{1}{2}$.",
        hint: "Wholes with wholes, parts with parts."
      },
      {
        front: "How do you decompose a fraction like $\\\\dfrac{3}{5}$ into a sum of unit fractions?",
        back: "$\\\\dfrac{3}{5} = \\\\dfrac{1}{5} + \\\\dfrac{1}{5} + \\\\dfrac{1}{5}$. A unit fraction has a numerator of 1.",
        hint: "Break into copies of 1 over the denominator."
      },
      {
        front: "Subtract $4 - \\\\dfrac{2}{3}$.",
        back: "Rewrite 4 as $3\\\\tfrac{3}{3}$. Then $3\\\\tfrac{3}{3} - \\\\dfrac{2}{3} = 3\\\\tfrac{1}{3}$.",
        hint: "Borrow one whole as thirds."
      },
      {
        front: "Common trap: adding the denominators. Why is $\\\\dfrac{1}{4} + \\\\dfrac{1}{4} = \\\\dfrac{2}{8}$ wrong?",
        back: "You never add denominators. The denominator (piece size) stays the same. The correct answer is $\\\\dfrac{1}{4}+\\\\dfrac{1}{4}=\\\\dfrac{2}{4}=\\\\dfrac{1}{2}$.",
        hint: "Keep the bottom; add only the tops."
      },
      {
        front: "What does it mean to write a fraction in simplest form?",
        back: "A fraction is in simplest form when the numerator and denominator have no common factor other than 1. Example: $\\\\dfrac{4}{8}$ simplifies to $\\\\dfrac{1}{2}$.",
        hint: "Reduce by the common factor."
      },
      {
        front: "Compute $\\\\dfrac{5}{6} + \\\\dfrac{5}{6}$ and write the answer as a mixed number.",
        back: "$\\\\dfrac{5}{6} + \\\\dfrac{5}{6} = \\\\dfrac{10}{6}$, which simplifies to $\\\\dfrac{5}{3} = 1\\\\tfrac{2}{3}$.",
        hint: "Result is more than one whole."
      },
      {
        front: "A pizza is cut into 8 equal slices. You eat $\\\\dfrac{3}{8}$ and a friend eats $\\\\dfrac{2}{8}$. How much is left?",
        back: "Eaten: $\\\\dfrac{3}{8}+\\\\dfrac{2}{8}=\\\\dfrac{5}{8}$. Left: $\\\\dfrac{8}{8}-\\\\dfrac{5}{8}=\\\\dfrac{3}{8}$ of the pizza.",
        hint: "Whole pizza is $\\\\dfrac{8}{8}$."
      }
    ]
  },
  {
    slug: "act-algebra-functions",
    cards: [
      {
        front: "What is function notation $f(x)$, and how do you evaluate $f(3)$ for $f(x)=2x+1$?",
        back: "$f(x)$ names the output of function $f$ for input $x$. Substitute the input for $x$: $f(3)=2(3)+1=7$.",
        hint: "Plug the number in for x."
      },
      {
        front: "On the ACT, what is the slope-intercept form of a line, and what does each part mean?",
        back: "$y = mx + b$, where $m$ is the slope (rise over run) and $b$ is the $y$-intercept (where the line crosses the $y$-axis).",
        hint: "m is slope, b is the y-intercept."
      },
      {
        front: "What is the slope formula between two points?",
        back: "$m = \\\\dfrac{y_2 - y_1}{x_2 - x_1}$, the change in $y$ divided by the change in $x$. Use it whenever you have two points on a line.",
        hint: "Rise over run."
      },
      {
        front: "What is the quadratic formula and when do you use it?",
        back: "For $ax^2+bx+c=0$, the solutions are $x = \\\\dfrac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$. Use it to solve any quadratic, especially when it does not factor easily.",
        hint: "Memorize this; it always works."
      },
      {
        front: "What does the discriminant $b^2-4ac$ tell you?",
        back: "If $b^2-4ac>0$ there are two real solutions; if it equals 0 there is one real solution; if it is negative there are no real solutions (two complex).",
        hint: "Sign of the value under the root."
      },
      {
        front: "How do you multiply two binomials like $(x+3)(x-2)$?",
        back: "Use FOIL (First, Outer, Inner, Last): $x^2 - 2x + 3x - 6 = x^2 + x - 6$.",
        hint: "FOIL, then combine like terms."
      },
      {
        front: "Factor $x^2 + 5x + 6$.",
        back: "Find two numbers that multiply to 6 and add to 5: those are 2 and 3. So $x^2+5x+6=(x+2)(x+3)$.",
        hint: "Multiply to c, add to b."
      },
      {
        front: "What are the laws of exponents for multiplying and raising a power to a power?",
        back: "$x^a \\\\cdot x^b = x^{a+b}$ (add exponents when multiplying same base) and $(x^a)^b = x^{ab}$ (multiply exponents for a power of a power).",
        hint: "Add when multiplying, multiply when nesting."
      },
      {
        front: "How do you solve a system of two linear equations on the ACT quickly?",
        back: "Use substitution or elimination. Substitution: solve one equation for a variable and plug into the other. Elimination: add or subtract the equations to cancel a variable.",
        hint: "Substitution or elimination."
      },
      {
        front: "What is the domain of a function, and what common values must be excluded?",
        back: "The domain is the set of allowed inputs. Exclude inputs that make a denominator 0 or that make the inside of an even root negative.",
        hint: "No dividing by 0; no negative even roots."
      },
      {
        front: "For $f(x)=x^2$, how do $f(x)+3$ and $f(x+3)$ transform the graph?",
        back: "$f(x)+3$ shifts the graph UP 3 units. $f(x+3)$ shifts the graph LEFT 3 units. Adding outside moves vertically; adding inside moves horizontally (opposite direction).",
        hint: "Outside = vertical; inside = horizontal (opposite)."
      },
      {
        front: "Common trap: distributing a negative sign. Simplify $5 - (2x - 3)$.",
        back: "Distribute the negative to every term inside: $5 - 2x + 3 = 8 - 2x$. Forgetting to flip the sign of $-3$ is a frequent error.",
        hint: "The minus applies to both terms."
      },
      {
        front: "If $f(x) = 3x - 4$, find $x$ when $f(x) = 11$.",
        back: "Set $3x-4=11$, add 4 to get $3x=15$, divide by 3 to get $x=5$.",
        hint: "Solve the equation for x."
      },
      {
        front: "What is direct variation, and how is it written?",
        back: "Direct variation means $y$ is a constant multiple of $x$: $y = kx$, where $k$ is the constant of variation. As $x$ increases, $y$ increases proportionally.",
        hint: "y = kx, a line through the origin."
      }
    ]
  },
  {
    slug: "similar-figures-scale-factor-geo",
    cards: [
      {
        front: "What does it mean for two figures to be similar?",
        back: "Two figures are similar if they have the same shape but not necessarily the same size: corresponding angles are equal and corresponding side lengths are proportional. The symbol is $\\\\sim$.",
        hint: "Same shape, proportional sides."
      },
      {
        front: "What is the scale factor between two similar figures?",
        back: "The scale factor $k$ is the ratio of a side length in the new figure to the corresponding side length in the original: $k = \\\\dfrac{\\\\text{new length}}{\\\\text{original length}}$.",
        hint: "Ratio of corresponding sides."
      },
      {
        front: "If a triangle is enlarged by scale factor 3 and one side was 4 cm, what is the new side length?",
        back: "Multiply by the scale factor: $4 \\\\times 3 = 12$ cm.",
        hint: "New = original times scale factor."
      },
      {
        front: "What are the triangle similarity criteria (AA, SSS, SAS)?",
        back: "AA: two pairs of equal angles. SSS: all three pairs of sides proportional. SAS: two pairs of sides proportional with the included angles equal. Any one proves similarity.",
        hint: "Three shortcuts to prove similar."
      },
      {
        front: "How does the scale factor affect perimeter of similar figures?",
        back: "Perimeter scales by the same factor $k$. If the scale factor is $k$, the new perimeter is $k$ times the original perimeter.",
        hint: "Perimeter scales by k."
      },
      {
        front: "How does the scale factor affect area of similar figures?",
        back: "Area scales by the square of the scale factor, $k^2$. If linear dimensions are multiplied by $k$, area is multiplied by $k^2$.",
        hint: "Area scales by k squared."
      },
      {
        front: "Two similar rectangles have scale factor 2. The smaller has area 15. What is the larger area?",
        back: "Area scales by $k^2 = 2^2 = 4$, so the larger area is $15 \\\\times 4 = 60$ square units.",
        hint: "Multiply by the scale factor squared."
      },
      {
        front: "How do you set up a proportion to find a missing side in similar figures?",
        back: "Match corresponding sides as ratios and set them equal, then cross-multiply. For example $\\\\dfrac{a}{b} = \\\\dfrac{c}{d}$ gives $ad = bc$.",
        hint: "Corresponding sides form equal ratios; cross-multiply."
      },
      {
        front: "Triangle ABC ~ triangle DEF. AB = 6, DE = 9, and BC = 8. Find EF.",
        back: "Scale factor from ABC to DEF is $\\\\dfrac{9}{6} = 1.5$. So $EF = 8 \\\\times 1.5 = 12$.",
        hint: "Find the scale factor, then apply it."
      },
      {
        front: "What is a dilation?",
        back: "A dilation is a transformation that enlarges or reduces a figure by a scale factor from a fixed center point. It produces a figure similar to the original.",
        hint: "Resize from a center; keeps shape."
      },
      {
        front: "Common trap: matching the wrong corresponding sides. How do you avoid it?",
        back: "Use the order of the letters in the similarity statement. In $\\\\triangle ABC \\\\sim \\\\triangle DEF$, AB corresponds to DE, BC to EF, and CA to FD.",
        hint: "Letter order tells you what matches."
      },
      {
        front: "If the scale factor is between 0 and 1, is the image larger or smaller?",
        back: "Smaller. A scale factor less than 1 (but greater than 0) is a reduction; a factor greater than 1 is an enlargement.",
        hint: "Less than 1 shrinks the figure."
      },
      {
        front: "Why are all squares similar but not all rectangles?",
        back: "All squares have equal angles (90 degrees) and all sides in the ratio 1:1, so they are always similar. Rectangles can have different side ratios, so they are not always similar.",
        hint: "Squares always share the same proportions."
      }
    ]
  },
  {
    slug: "act-geometry-trigonometry",
    cards: [
      {
        front: "State the Pythagorean Theorem and when to use it.",
        back: "For a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2 + b^2 = c^2$. Use it to find a missing side of a right triangle.",
        hint: "Legs squared add to hypotenuse squared."
      },
      {
        front: "What are SOH-CAH-TOA definitions?",
        back: "$\\\\sin\\\\theta = \\\\dfrac{\\\\text{opposite}}{\\\\text{hypotenuse}}$, $\\\\cos\\\\theta = \\\\dfrac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$, $\\\\tan\\\\theta = \\\\dfrac{\\\\text{opposite}}{\\\\text{adjacent}}$.",
        hint: "Sine=O/H, Cosine=A/H, Tangent=O/A."
      },
      {
        front: "What is the area of a triangle, and the area of a circle?",
        back: "Triangle: $A = \\\\dfrac{1}{2}bh$, where $b$ is the base and $h$ the height. Circle: $A = \\\\pi r^2$, where $r$ is the radius.",
        hint: "Half base times height; pi r squared."
      },
      {
        front: "What is the circumference of a circle?",
        back: "$C = 2\\\\pi r$ or equivalently $C = \\\\pi d$, where $r$ is the radius and $d = 2r$ is the diameter.",
        hint: "Two pi r, or pi times diameter."
      },
      {
        front: "What do the angles in a triangle sum to, and in a quadrilateral?",
        back: "The interior angles of a triangle sum to $180^{\\\\circ}$, and the interior angles of any quadrilateral sum to $360^{\\\\circ}$.",
        hint: "180 for triangle, 360 for four-sided."
      },
      {
        front: "What are the side ratios of a 30-60-90 triangle?",
        back: "The sides opposite the 30, 60, 90 angles are in the ratio $1 : \\\\sqrt{3} : 2$. The shortest side is opposite 30 degrees.",
        hint: "1 : root 3 : 2."
      },
      {
        front: "What are the side ratios of a 45-45-90 triangle?",
        back: "The legs are equal and in the ratio $1 : 1 : \\\\sqrt{2}$ with the hypotenuse. So hypotenuse = leg $\\\\times \\\\sqrt{2}$.",
        hint: "Legs equal; hypotenuse is leg times root 2."
      },
      {
        front: "Find $\\\\sin\\\\theta$ if the opposite side is 3 and the hypotenuse is 5.",
        back: "$\\\\sin\\\\theta = \\\\dfrac{\\\\text{opposite}}{\\\\text{hypotenuse}} = \\\\dfrac{3}{5} = 0.6$.",
        hint: "Opposite over hypotenuse."
      },
      {
        front: "What is the volume of a rectangular box and of a cylinder?",
        back: "Box: $V = lwh$ (length times width times height). Cylinder: $V = \\\\pi r^2 h$, where $r$ is the base radius and $h$ the height.",
        hint: "lwh; pi r squared times h."
      },
      {
        front: "What is the distance formula between two points?",
        back: "$d = \\\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. It comes from the Pythagorean Theorem applied to coordinate differences.",
        hint: "Pythagoras on the coordinate plane."
      },
      {
        front: "What are complementary and supplementary angles?",
        back: "Complementary angles sum to $90^{\\\\circ}$; supplementary angles sum to $180^{\\\\circ}$.",
        hint: "Complement=90, Supplement=180."
      },
      {
        front: "Common trap: using sin/cos/tan with a non-right triangle. What should you check first?",
        back: "SOH-CAH-TOA only applies to right triangles. Confirm there is a 90-degree angle, or use the Law of Sines or Law of Cosines instead.",
        hint: "SOH-CAH-TOA needs a right angle."
      },
      {
        front: "A right triangle has legs 6 and 8. Find the hypotenuse.",
        back: "$c = \\\\sqrt{6^2 + 8^2} = \\\\sqrt{36+64} = \\\\sqrt{100} = 10$.",
        hint: "It's the 3-4-5 triangle doubled."
      },
      {
        front: "What is the relationship between vertical angles formed by two intersecting lines?",
        back: "Vertical angles are congruent (equal). When two lines cross, the angles opposite each other are equal.",
        hint: "Opposite angles are equal."
      }
    ]
  },
  {
    slug: "multiplying-fractions-whole-numbers-grade4",
    cards: [
      {
        front: "How do you multiply a whole number by a fraction?",
        back: "Multiply the whole number by the numerator and keep the denominator: $n \\\\times \\\\dfrac{a}{b} = \\\\dfrac{n \\\\times a}{b}$.",
        hint: "Multiply the top by the whole number."
      },
      {
        front: "Compute $3 \\\\times \\\\dfrac{2}{5}$.",
        back: "$3 \\\\times \\\\dfrac{2}{5} = \\\\dfrac{6}{5}$, which equals $1\\\\tfrac{1}{5}$.",
        hint: "Multiply 3 by the numerator."
      },
      {
        front: "Why is $4 \\\\times \\\\dfrac{1}{3}$ the same as repeated addition?",
        back: "Multiplying by a whole number means adding the fraction that many times: $\\\\dfrac{1}{3}+\\\\dfrac{1}{3}+\\\\dfrac{1}{3}+\\\\dfrac{1}{3} = \\\\dfrac{4}{3}$.",
        hint: "Whole number = how many copies."
      },
      {
        front: "What is a unit fraction, and how does it help with multiplication?",
        back: "A unit fraction has a numerator of 1, like $\\\\dfrac{1}{4}$. Any fraction is a whole number of unit fractions, so $5 \\\\times \\\\dfrac{1}{4} = \\\\dfrac{5}{4}$.",
        hint: "Top is 1; count the copies."
      },
      {
        front: "Compute $6 \\\\times \\\\dfrac{1}{2}$.",
        back: "$6 \\\\times \\\\dfrac{1}{2} = \\\\dfrac{6}{2} = 3$.",
        hint: "Half of 6."
      },
      {
        front: "How do you write an improper fraction like $\\\\dfrac{9}{4}$ as a mixed number?",
        back: "Divide: $9 \\\\div 4 = 2$ remainder 1, so $\\\\dfrac{9}{4} = 2\\\\tfrac{1}{4}$.",
        hint: "Divide top by bottom for the whole part."
      },
      {
        front: "Compute $5 \\\\times \\\\dfrac{3}{8}$ and write it as a mixed number.",
        back: "$5 \\\\times \\\\dfrac{3}{8} = \\\\dfrac{15}{8} = 1\\\\tfrac{7}{8}$.",
        hint: "Multiply top by 5, then convert."
      },
      {
        front: "Common trap: multiplying the denominator too. Why is $3 \\\\times \\\\dfrac{2}{5} = \\\\dfrac{6}{15}$ wrong?",
        back: "Only the numerator is multiplied by the whole number; the denominator stays the same. The correct answer is $\\\\dfrac{6}{5}$.",
        hint: "Leave the bottom alone."
      },
      {
        front: "A recipe needs $\\\\dfrac{2}{3}$ cup of sugar per batch. How much for 4 batches?",
        back: "$4 \\\\times \\\\dfrac{2}{3} = \\\\dfrac{8}{3} = 2\\\\tfrac{2}{3}$ cups.",
        hint: "Multiply the fraction by 4."
      },
      {
        front: "How can a number line model $3 \\\\times \\\\dfrac{1}{4}$?",
        back: "Make 3 equal jumps of $\\\\dfrac{1}{4}$ starting at 0. You land on $\\\\dfrac{3}{4}$.",
        hint: "Three hops of one-fourth."
      },
      {
        front: "Compute $2 \\\\times \\\\dfrac{4}{6}$ and simplify.",
        back: "$2 \\\\times \\\\dfrac{4}{6} = \\\\dfrac{8}{6}$, which simplifies to $\\\\dfrac{4}{3} = 1\\\\tfrac{1}{3}$.",
        hint: "Multiply, then reduce."
      },
      {
        front: "If each student gets $\\\\dfrac{1}{8}$ of a pizza and there are 5 students, how much pizza is needed?",
        back: "$5 \\\\times \\\\dfrac{1}{8} = \\\\dfrac{5}{8}$ of a pizza.",
        hint: "Five eighths."
      },
      {
        front: "Compute $10 \\\\times \\\\dfrac{3}{10}$.",
        back: "$10 \\\\times \\\\dfrac{3}{10} = \\\\dfrac{30}{10} = 3$.",
        hint: "The 10s cancel."
      }
    ]
  },
  {
    slug: "adding-unlike-fractions-grade5",
    cards: [
      {
        front: "What is a common denominator, and why do you need one to add unlike fractions?",
        back: "A common denominator is a shared bottom number for two fractions. You need it because you can only add fractions when the pieces are the same size.",
        hint: "Same-size pieces to combine."
      },
      {
        front: "What is the least common denominator (LCD)?",
        back: "The LCD is the least common multiple of the denominators. It is the smallest number both denominators divide into evenly.",
        hint: "Smallest shared multiple of the bottoms."
      },
      {
        front: "Find the LCD of $\\\\dfrac{1}{4}$ and $\\\\dfrac{1}{6}$.",
        back: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The least common multiple is 12, so the LCD is 12.",
        hint: "Smallest multiple of both 4 and 6."
      },
      {
        front: "How do you rewrite a fraction with a new denominator?",
        back: "Multiply the numerator and denominator by the same number. To change $\\\\dfrac{1}{4}$ to twelfths, multiply by $\\\\dfrac{3}{3}$: $\\\\dfrac{1}{4}=\\\\dfrac{3}{12}$.",
        hint: "Multiply top and bottom by the same value."
      },
      {
        front: "Compute $\\\\dfrac{1}{2} + \\\\dfrac{1}{3}$.",
        back: "LCD is 6. Rewrite: $\\\\dfrac{1}{2}=\\\\dfrac{3}{6}$ and $\\\\dfrac{1}{3}=\\\\dfrac{2}{6}$. Then $\\\\dfrac{3}{6}+\\\\dfrac{2}{6}=\\\\dfrac{5}{6}$.",
        hint: "Convert both to sixths."
      },
      {
        front: "Compute $\\\\dfrac{1}{4} + \\\\dfrac{1}{6}$.",
        back: "LCD is 12. $\\\\dfrac{1}{4}=\\\\dfrac{3}{12}$ and $\\\\dfrac{1}{6}=\\\\dfrac{2}{12}$. Then $\\\\dfrac{3}{12}+\\\\dfrac{2}{12}=\\\\dfrac{5}{12}$.",
        hint: "Both become twelfths."
      },
      {
        front: "What is the step-by-step procedure for adding unlike fractions?",
        back: "1) Find a common denominator. 2) Rewrite each fraction with that denominator. 3) Add the numerators, keeping the denominator. 4) Simplify if possible.",
        hint: "Common bottom, add tops, simplify."
      },
      {
        front: "Compute $\\\\dfrac{2}{3} + \\\\dfrac{1}{6}$.",
        back: "LCD is 6. $\\\\dfrac{2}{3}=\\\\dfrac{4}{6}$. Then $\\\\dfrac{4}{6}+\\\\dfrac{1}{6}=\\\\dfrac{5}{6}$.",
        hint: "Only the first fraction changes."
      },
      {
        front: "Common trap: adding the denominators. Why is $\\\\dfrac{1}{2}+\\\\dfrac{1}{3}=\\\\dfrac{2}{5}$ wrong?",
        back: "You must convert to a common denominator first, not add the bottoms. The correct answer is $\\\\dfrac{5}{6}$.",
        hint: "Never add denominators."
      },
      {
        front: "Compute $\\\\dfrac{3}{5} + \\\\dfrac{1}{2}$ and write as a mixed number.",
        back: "LCD is 10. $\\\\dfrac{3}{5}=\\\\dfrac{6}{10}$ and $\\\\dfrac{1}{2}=\\\\dfrac{5}{10}$. Sum is $\\\\dfrac{11}{10}=1\\\\tfrac{1}{10}$.",
        hint: "Result is more than one whole."
      },
      {
        front: "If two denominators share no factors (like 3 and 5), what is a quick way to find the LCD?",
        back: "When the denominators have no common factors, multiply them: $3 \\\\times 5 = 15$. So 15 is the LCD.",
        hint: "Just multiply them when they share nothing."
      },
      {
        front: "Add $\\\\dfrac{1}{8} + \\\\dfrac{3}{4}$.",
        back: "LCD is 8. $\\\\dfrac{3}{4}=\\\\dfrac{6}{8}$. Then $\\\\dfrac{1}{8}+\\\\dfrac{6}{8}=\\\\dfrac{7}{8}$.",
        hint: "Convert fourths to eighths."
      },
      {
        front: "Why should you simplify the final answer, and simplify $\\\\dfrac{4}{12}+\\\\dfrac{2}{12}$?",
        back: "Simplifying gives the answer in its clearest form. $\\\\dfrac{4}{12}+\\\\dfrac{2}{12}=\\\\dfrac{6}{12}=\\\\dfrac{1}{2}$.",
        hint: "Reduce by the common factor."
      }
    ]
  }
];
