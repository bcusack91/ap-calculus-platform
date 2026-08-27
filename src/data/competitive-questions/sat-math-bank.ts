// SAT Math question bank for competitive mode, organized by the 4 Digital SAT
// math areas (Algebra, Advanced Math, Problem-Solving & Data Analysis,
// Geometry & Trigonometry). Assembled from per-area pools; 30 questions per area
// (10 easy / 10 medium / 10 hard). getSatMathQuestions(count, area?) filters by area.

export type SatMathArea = 'algebra' | 'advanced' | 'problem-solving' | 'geometry'

export interface SatMathQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  area: SatMathArea
  /** Official College Board skill this question targets (student-facing). */
  skill?: string
}

const MATH_AREAS: readonly SatMathArea[] = ['algebra', 'advanced', 'problem-solving', 'geometry']

const allQuestions: SatMathQuestion[] = [
  {
    "id": 1,
    "question": "If $2x - 7 = 9$, what is the value of $x$?",
    "options": [
      "$1$",
      "$-8$",
      "$8$",
      "$16$"
    ],
    "correctAnswer": 2,
    "explanation": "Add $7$ to both sides: $2x = 16$. Divide by $2$: $x = 8$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 2,
    "question": "The line $y = \\frac{3}{4}x + 2$ is graphed in the $xy$-plane. What is its slope?",
    "options": [
      "$\\frac{3}{4}$",
      "$2$",
      "$-\\frac{3}{4}$",
      "$\\frac{4}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "In $y = mx + b$, the slope is $m = \\frac{3}{4}$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 3,
    "question": "If $x + 11 = 4$, what is the value of $x$?",
    "options": [
      "$-7$",
      "$7$",
      "$15$",
      "$-15$"
    ],
    "correctAnswer": 0,
    "explanation": "Subtract $11$ from both sides: $x = 4 - 11 = -7$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 4,
    "question": "For the line $y = 5x - 3$, what is the $y$-intercept?",
    "options": [
      "$5$",
      "$3$",
      "$-5$",
      "$-3$"
    ],
    "correctAnswer": 3,
    "explanation": "In $y = mx + b$, the $y$-intercept is $b = -3$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 5,
    "question": "If $\\frac{x}{4} = 6$, what is the value of $x$?",
    "options": [
      "$10$",
      "$24$",
      "$2$",
      "$\\frac{3}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply both sides by $4$: $x = 6 \\times 4 = 24$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 6,
    "question": "If $5x = 35$, what is the value of $x$?",
    "options": [
      "$30$",
      "$40$",
      "$7$",
      "$175$"
    ],
    "correctAnswer": 2,
    "explanation": "Divide both sides by $5$: $x = 35 \\div 5 = 7$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 7,
    "question": "If $f(x) = 2x + 1$, what is $f(4)$?",
    "options": [
      "$7$",
      "$9$",
      "$6$",
      "$8$"
    ],
    "correctAnswer": 1,
    "explanation": "Substitute $x = 4$: $f(4) = 2(4) + 1 = 9$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 8,
    "question": "If $-3x = 12$, what is the value of $x$?",
    "options": [
      "$4$",
      "$36$",
      "$-36$",
      "$-4$"
    ],
    "correctAnswer": 3,
    "explanation": "Divide both sides by $-3$: $x = 12 \\div (-3) = -4$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 9,
    "question": "What is the slope of the line $y = -2x + 7$?",
    "options": [
      "$7$",
      "$-7$",
      "$-2$",
      "$2$"
    ],
    "correctAnswer": 2,
    "explanation": "In $y = mx + b$, the slope is $m = -2$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 10,
    "question": "If $x - 6 = 10$, what is the value of $x$?",
    "options": [
      "$4$",
      "$16$",
      "$-4$",
      "$60$"
    ],
    "correctAnswer": 1,
    "explanation": "Add $6$ to both sides: $x = 10 + 6 = 16$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 11,
    "question": "If $3x + 4 = x + 12$, what is the value of $x$?",
    "options": [
      "$4$",
      "$8$",
      "$-4$",
      "$2$"
    ],
    "correctAnswer": 0,
    "explanation": "Subtract $x$ from both sides: $2x + 4 = 12$. Then $2x = 8$, so $x = 4$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 12,
    "question": "Solve for $x$: $2(x - 3) = 10$.",
    "options": [
      "$2$",
      "$5$",
      "$11$",
      "$8$"
    ],
    "correctAnswer": 3,
    "explanation": "Distribute: $2x - 6 = 10$. Add $6$: $2x = 16$, so $x = 8$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 13,
    "question": "The system $x + y = 10$ and $x - y = 4$ has solution $(x, y)$. What is the value of $x$?",
    "options": [
      "$3$",
      "$6$",
      "$7$",
      "$5$"
    ],
    "correctAnswer": 2,
    "explanation": "Add the two equations: $2x = 14$, so $x = 7$ (and $y = 3$).",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 14,
    "question": "What is the slope of the line passing through the points $(1, 2)$ and $(4, 11)$?",
    "options": [
      "$\\frac{1}{3}$",
      "$3$",
      "$-3$",
      "$9$"
    ],
    "correctAnswer": 1,
    "explanation": "Slope $= \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 15,
    "question": "If $\\frac{2x + 1}{3} = 5$, what is the value of $x$?",
    "options": [
      "$8$",
      "$3$",
      "$7$",
      "$2$"
    ],
    "correctAnswer": 2,
    "explanation": "Multiply by $3$: $2x + 1 = 15$. Then $2x = 14$, so $x = 7$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 16,
    "question": "A line has slope $2$ and passes through the point $(0, -1)$. What is $y$ when $x = 3$?",
    "options": [
      "$6$",
      "$5$",
      "$7$",
      "$-1$"
    ],
    "correctAnswer": 1,
    "explanation": "The line is $y = 2x - 1$. At $x = 3$: $y = 2(3) - 1 = 5$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 17,
    "question": "Which of the following describes all solutions to $3x - 5 > 7$?",
    "options": [
      "$x < 4$",
      "$x > 4$",
      "$x > \\frac{2}{3}$",
      "$x > 12$"
    ],
    "correctAnswer": 1,
    "explanation": "Add $5$: $3x > 12$. Divide by $3$ (positive, keep direction): $x > 4$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 18,
    "question": "If $5x - 2 = 3x + 8$, what is the value of $x$?",
    "options": [
      "$5$",
      "$3$",
      "$10$",
      "$-5$"
    ],
    "correctAnswer": 0,
    "explanation": "Subtract $3x$: $2x - 2 = 8$. Add $2$: $2x = 10$, so $x = 5$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 19,
    "question": "A gym charges a $\\$20$ sign-up fee plus $\\$5$ per class. What is the total cost, in dollars, of $6$ classes?",
    "options": [
      "$30$",
      "$50$",
      "$25$",
      "$120$"
    ],
    "correctAnswer": 1,
    "explanation": "Total $= 20 + 5(6) = 20 + 30 = 50$ dollars.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 20,
    "question": "What is the $x$-coordinate of the $x$-intercept of the line $2x + 3y = 12$?",
    "options": [
      "$4$",
      "$12$",
      "$6$",
      "$-6$"
    ],
    "correctAnswer": 2,
    "explanation": "At the $x$-intercept, $y = 0$: $2x = 12$, so $x = 6$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 21,
    "question": "In the system $y = 2x + 1$ and $3x + y = 11$, what is the value of $y$?",
    "options": [
      "$2$",
      "$4$",
      "$5$",
      "$7$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute: $3x + (2x + 1) = 11$, so $5x = 10$ and $x = 2$. Then $y = 2(2) + 1 = 5$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 22,
    "question": "A car's fuel is modeled by $G = 12 - 0.05m$, where $G$ is gallons remaining after driving $m$ miles. What does the number $0.05$ represent?",
    "options": [
      "The number of gallons in a full tank",
      "The number of miles driven per gallon",
      "The total number of miles the car can drive",
      "The number of gallons used per mile driven"
    ],
    "correctAnswer": 3,
    "explanation": "The coefficient of $m$ is the rate of change of gallons with respect to miles, i.e. gallons used per mile.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 23,
    "question": "Which of the following describes all solutions to $4 - 2x \\geq 3x - 11$?",
    "options": [
      "$x \\geq 3$",
      "$x \\leq 3$",
      "$x \\leq -3$",
      "$x \\geq \\frac{7}{5}$"
    ],
    "correctAnswer": 1,
    "explanation": "Add $2x$ and $11$: $15 \\geq 5x$. Divide by $5$: $3 \\geq x$, i.e. $x \\leq 3$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 24,
    "question": "In the system $2x + 3y = 12$ and $4x - 3y = 6$, what is the value of $x + y$?",
    "options": [
      "$1$",
      "$3$",
      "$5$",
      "$2$"
    ],
    "correctAnswer": 2,
    "explanation": "Add the equations: $6x = 18$, so $x = 3$. Then $6 + 3y = 12$ gives $y = 2$, so $x + y = 5$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 25,
    "question": "A plumber's total charge is $C = 45 + 60h$, where $h$ is hours worked. What does the $45$ represent?",
    "options": [
      "The one-time fixed service fee",
      "The hourly rate charged",
      "The total charge for one hour",
      "The number of hours worked"
    ],
    "correctAnswer": 0,
    "explanation": "The constant term is the charge when $h = 0$, i.e. a fixed fee independent of hours worked.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 26,
    "question": "Line $\\ell$ is parallel to the line $y = 3x - 2$ and passes through the point $(1, 4)$. What is the $y$-intercept of line $\\ell$?",
    "options": [
      "$-2$",
      "$1$",
      "$4$",
      "$3$"
    ],
    "correctAnswer": 1,
    "explanation": "Parallel lines share slope $3$, so $y = 3x + b$. Using $(1, 4)$: $4 = 3(1) + b$, so $b = 1$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 27,
    "question": "A line is perpendicular to the line $y = \\frac{1}{2}x + 3$. What is the slope of this perpendicular line?",
    "options": [
      "$\\frac{1}{2}$",
      "$2$",
      "$-2$",
      "$-\\frac{1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "Perpendicular slopes are negative reciprocals: the negative reciprocal of $\\frac{1}{2}$ is $-2$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 28,
    "question": "The sum of two numbers is $24$, and one number is twice the other. What is the larger number?",
    "options": [
      "$8$",
      "$12$",
      "$16$",
      "$18$"
    ],
    "correctAnswer": 2,
    "explanation": "Let the smaller be $x$; then $x + 2x = 24$, so $x = 8$ and the larger is $2x = 16$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 29,
    "question": "A membership costs $\\$10$ per month plus a one-time $\\$25$ fee. If a member has paid $\\$95$ total, for how many months have they been a member?",
    "options": [
      "$7$",
      "$9$",
      "$6$",
      "$12$"
    ],
    "correctAnswer": 0,
    "explanation": "Solve $25 + 10m = 95$: $10m = 70$, so $m = 7$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 30,
    "question": "For what value of $k$ does the system $y = 4x + 3$ and $y = kx - 5$ have no solution?",
    "options": [
      "$-5$",
      "$-4$",
      "$4$",
      "$3$"
    ],
    "correctAnswer": 2,
    "explanation": "Two lines have no solution when they are parallel: equal slopes but different intercepts. So $k = 4$ (with $-5 \\neq 3$).",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 31,
    "question": "If $5x - 3 = 2x + 9$, what is the value of $x$?",
    "options": [
      "$4$",
      "$2$",
      "$-4$",
      "$6$"
    ],
    "correctAnswer": 0,
    "explanation": "Subtract $2x$ from both sides to get $3x - 3 = 9$, then add $3$ to get $3x = 12$, so $x = 4$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 32,
    "question": "The line $y = 3x + 2$ is graphed in the $xy$-plane. What are the coordinates of its $y$-intercept?",
    "options": [
      "$(0, 3)$",
      "$(0, 2)$",
      "$(2, 0)$",
      "$(0, -2)$"
    ],
    "correctAnswer": 1,
    "explanation": "The $y$-intercept occurs where $x = 0$. Substituting gives $y = 3(0) + 2 = 2$, so the point is $(0, 2)$. The value $3$ is the slope, not the intercept.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 33,
    "question": "If $2(x + 3) = 14$, what is the value of $x$?",
    "options": [
      "$7$",
      "$5$",
      "$4$",
      "$8$"
    ],
    "correctAnswer": 2,
    "explanation": "Divide both sides by $2$ to get $x + 3 = 7$, then subtract $3$ to find $x = 4$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 34,
    "question": "In the system $5x + 3y = 29$ and $x + 3y = 13$, what is the value of $x$?",
    "options": [
      "$3$",
      "$5$",
      "$4$",
      "$16$"
    ],
    "correctAnswer": 2,
    "explanation": "Subtract the second equation from the first to eliminate $y$: $(5x + 3y) - (x + 3y) = 29 - 13$, which gives $4x = 16$, so $x = 4$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 35,
    "question": "What value of $x$ satisfies $\\frac{2x + 1}{3} = \\frac{x - 4}{2}$?",
    "options": [
      "$14$",
      "$-2$",
      "$2$",
      "$-14$"
    ],
    "correctAnswer": 3,
    "explanation": "Cross-multiply: $2(2x + 1) = 3(x - 4)$, so $4x + 2 = 3x - 12$. Subtracting $3x$ and $2$ from both sides gives $x = -14$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 36,
    "question": "A candle burns at a constant rate. After $2$ hours it is $18$ cm tall, and after $5$ hours it is $12$ cm tall. What was the height of the candle, in cm, at the moment it was lit?",
    "options": [
      "$20$",
      "$22$",
      "$24$",
      "$18$"
    ],
    "correctAnswer": 1,
    "explanation": "The rate of change is $\\frac{12 - 18}{5 - 2} = -2$ cm per hour. Writing $h(t) = mt + b$ with $m = -2$ and using $h(2) = 18$ gives $18 = -4 + b$, so $b = 22$. The initial height is $22$ cm.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 37,
    "question": "The sum of three consecutive even integers is $84$. What is the largest of the three integers?",
    "options": [
      "$26$",
      "$28$",
      "$30$",
      "$32$"
    ],
    "correctAnswer": 2,
    "explanation": "Let the integers be $n$, $n+2$, and $n+4$. Then $3n + 6 = 84$, so $3n = 78$ and $n = 26$. The largest integer is $n + 4 = 30$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 38,
    "question": "If $-3(x - 4) \\geq 2x - 3$, what is the greatest possible value of $x$?",
    "options": [
      "$-3$",
      "$\\frac{9}{5}$",
      "$5$",
      "$3$"
    ],
    "correctAnswer": 3,
    "explanation": "Expand to get $-3x + 12 \\geq 2x - 3$. Add $3x$ and $3$ to both sides: $15 \\geq 5x$, so $x \\leq 3$. The greatest possible value is $3$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 39,
    "question": "In the system of equations $ax + 3y = 12$ and $8x + 6y = 15$, for what value of $a$ does the system have no solution?",
    "options": [
      "$16$",
      "$-4$",
      "$4$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "No solution means the lines are parallel: the $x$- and $y$-coefficient ratios match but the constant ratio differs. Setting $\\frac{a}{8} = \\frac{3}{6} = \\frac{1}{2}$ gives $a = 4$. Since $\\frac{12}{15} = \\frac{4}{5} \\neq \\frac{1}{2}$, the constants differ, so the system truly has no solution.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 40,
    "question": "In the system of equations $3x - y = 7$ and $9x - 3y = c$, for what value of $c$ does the system have infinitely many solutions?",
    "options": [
      "$7$",
      "$21$",
      "$-21$",
      "$\\frac{7}{3}$"
    ],
    "correctAnswer": 1,
    "explanation": "Infinitely many solutions require the second equation to be a scalar multiple of the first. Multiplying $3x - y = 7$ by $3$ gives $9x - 3y = 21$, so $c = 21$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 41,
    "question": "For what value of $k$ does the system $kx + 4y = 10$ and $3x + 2y = 7$ have exactly one solution?",
    "options": [
      "$k = 6$",
      "$k \\neq 12$",
      "$k \\neq \\frac{3}{2}$",
      "$k \\neq 6$"
    ],
    "correctAnswer": 3,
    "explanation": "A system of two lines has exactly one solution when the lines have different slopes, i.e. the coefficient ratios are unequal: $\\frac{k}{3} \\neq \\frac{4}{2} = 2$. This gives $k \\neq 6$. (When $k = 6$ the lines are parallel and share no unique solution.)",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 42,
    "question": "The system $y = \\frac{2}{5}x - 3$ and $y = (m + 1)x + 4$ has no solution. What is the value of $m$?",
    "options": [
      "$-\\frac{3}{5}$",
      "$\\frac{2}{5}$",
      "$\\frac{7}{5}$",
      "$-\\frac{2}{5}$"
    ],
    "correctAnswer": 0,
    "explanation": "No solution means the lines are parallel: equal slopes but different $y$-intercepts. Setting $m + 1 = \\frac{2}{5}$ gives $m = -\\frac{3}{5}$. The intercepts $-3$ and $4$ differ, confirming no solution.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 43,
    "question": "In the system of equations $6x + 2y = 8$ and $9x + 3y = t$, for what value of $t$ does the system have infinitely many solutions?",
    "options": [
      "$24$",
      "$\\frac{4}{3}$",
      "$12$",
      "$8$"
    ],
    "correctAnswer": 2,
    "explanation": "Infinitely many solutions require the two equations to be scalar multiples. Multiplying $6x + 2y = 8$ by $\\frac{3}{2}$ gives $9x + 3y = 12$, so $t = 12$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 44,
    "question": "For what value of $b$ does the system $2x - 5y = 9$ and $bx + 15y = 4$ have no solution?",
    "options": [
      "$6$",
      "$-6$",
      "$-\\frac{1}{3}$",
      "$\\frac{15}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "No solution requires the coefficient ratios to be equal: $\\frac{2}{b} = \\frac{-5}{15} = -\\frac{1}{3}$. Cross-multiplying gives $-b = 6$, so $b = -6$. Since $\\frac{9}{4} \\neq -\\frac{1}{3}$, the constants differ and the lines are parallel with no solution.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 45,
    "question": "For what value of $c$ does the system $cx + 5y = 8$ and $2x + 10y = 3$ have exactly one solution?",
    "options": [
      "$c = 1$",
      "$c \\neq 4$",
      "$c \\neq 1$",
      "$c \\neq \\frac{1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "Exactly one solution requires unequal slopes, so the coefficient ratios must differ: $\\frac{c}{2} \\neq \\frac{5}{10} = \\frac{1}{2}$. This gives $c \\neq 1$. (At $c = 1$ the lines are parallel.)",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 46,
    "question": "In the equation $4(x - 2) + 6 = 4x + c$, for what value of $c$ does the equation have infinitely many solutions?",
    "options": [
      "$-2$",
      "$2$",
      "$-8$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "Simplify the left side: $4x - 8 + 6 = 4x - 2$. The equation becomes $4x - 2 = 4x + c$, which is true for all $x$ only when $c = -2$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 47,
    "question": "For what value of $d$ does the equation $3(2x + 5) = 6x + d$ have no solution?",
    "options": [
      "$d = 15$",
      "$d \\neq 15$",
      "$d \\neq 5$",
      "$d \\neq -15$"
    ],
    "correctAnswer": 1,
    "explanation": "Expand the left side: $6x + 15 = 6x + d$. The $6x$ terms cancel, leaving $15 = d$. If $d \\neq 15$ the statement is impossible, so there is no solution; if $d = 15$ there are infinitely many.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 48,
    "question": "In the equation $ax + 12 = 3(2x + 4)$, for what value of $a$ does the equation have infinitely many solutions?",
    "options": [
      "$3$",
      "$2$",
      "$12$",
      "$6$"
    ],
    "correctAnswer": 3,
    "explanation": "Expand the right side: $ax + 12 = 6x + 12$. For the equation to hold for all $x$, the coefficients of $x$ must match, so $a = 6$ (the constants already agree at $12$).",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 49,
    "question": "Which of the following points $(x, y)$ satisfies both inequalities in the system $y > 2x - 1$ and $y \\leq -x + 4$?",
    "options": [
      "$(0, 5)$",
      "$(3, 0)$",
      "$(1, 2)$",
      "$(2, 3)$"
    ],
    "correctAnswer": 2,
    "explanation": "Test $(1, 2)$: for the first inequality, $2 > 2(1) - 1 = 1$ is true; for the second, $2 \\leq -1 + 4 = 3$ is true. The other points fail at least one condition (e.g., $(2,3)$ gives $3 > 3$, which is false).",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 50,
    "question": "A gym membership's total cost $C$, in dollars, after $m$ months is modeled by $C = 25m + 60$. Which statement best interprets the number $25$ in this context?",
    "options": [
      "The one-time sign-up fee is 25 dollars.",
      "The cost increases by 25 dollars for each additional month.",
      "The total cost after one month is 25 dollars.",
      "The membership is valid for 25 months."
    ],
    "correctAnswer": 1,
    "explanation": "The coefficient of $m$ is the slope, representing the rate of change: each additional month adds 25 dollars. The constant $60$ is the one-time fee, and the cost after one month is $25 + 60 = 85$ dollars.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 51,
    "question": "In the $xy$-plane, the line $y = (2p - 1)x + 5$ is parallel to the line $6x - 2y = 7$. What is the value of $p$?",
    "options": [
      "$\\frac{3}{2}$",
      "$1$",
      "$-2$",
      "$2$"
    ],
    "correctAnswer": 3,
    "explanation": "Rewrite $6x - 2y = 7$ as $y = 3x - \\frac{7}{2}$, so its slope is $3$. Parallel lines have equal slopes, so $2p - 1 = 3$, giving $2p = 4$ and $p = 2$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 52,
    "question": "One printing company charges a setup fee of 40 dollars plus 0.12 dollars per flyer. A competitor charges no setup fee but 0.20 dollars per flyer. For how many flyers do the two companies charge the same total amount?",
    "options": [
      "$200$",
      "$500$",
      "$400$",
      "$625$"
    ],
    "correctAnswer": 1,
    "explanation": "Set the costs equal: $40 + 0.12x = 0.20x$. Subtracting $0.12x$ gives $40 = 0.08x$, so $x = \\frac{40}{0.08} = 500$ flyers.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 53,
    "question": "The formula for the circumference of a circle is $C = 2\\pi r$, where $r$ is the radius. Which equation correctly solves for $r$ in terms of $C$?",
    "options": [
      "$r = \\frac{2\\pi}{C}$",
      "$r = 2\\pi C$",
      "$r = \\frac{C}{2\\pi}$",
      "$r = \\frac{C}{\\pi}$"
    ],
    "correctAnswer": 2,
    "explanation": "Divide both sides of $C = 2\\pi r$ by $2\\pi$ to isolate $r$, giving $r = \\frac{C}{2\\pi}$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 54,
    "question": "A phone plan's monthly cost is modeled by $C = 30 + 0.10m$, where $C$ is the cost in dollars and $m$ is the number of minutes used. What does the $30$ represent in this model?",
    "options": [
      "The fixed monthly cost when no minutes are used",
      "The cost in dollars for each minute used",
      "The number of minutes included in the plan",
      "The total cost of using the plan for 30 minutes"
    ],
    "correctAnswer": 0,
    "explanation": "When $m = 0$, $C = 30$. The constant term is the fixed cost incurred regardless of minutes used, while $0.10$ is the cost per minute.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 55,
    "question": "The table shows several values of a linear function $f$. Which equation defines $f(x)$?\n\n| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| $f(x)$ | 5 | 9 | 13 | 17 |",
    "options": [
      "$f(x) = 4x - 1$",
      "$f(x) = 3x + 2$",
      "$f(x) = 5x$",
      "$f(x) = 4x + 1$"
    ],
    "correctAnswer": 3,
    "explanation": "The output increases by $4$ each time $x$ increases by $1$, so the slope is $4$. Since $f(1) = 5$, the equation $f(x) = 4x + 1$ gives $4(1) + 1 = 5$, matching every row.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 56,
    "question": "What is the solution set of the equation $|2x - 3| = 7$?",
    "options": [
      "$\\{-2, 5\\}$",
      "$\\{2, 5\\}$",
      "$\\{-5, 2\\}$",
      "$\\{-2, -5\\}$"
    ],
    "correctAnswer": 0,
    "explanation": "Split into $2x - 3 = 7$, giving $x = 5$, and $2x - 3 = -7$, giving $x = -2$. The solution set is $\\{-2, 5\\}$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 57,
    "question": "Which of the following describes all values of $x$ that satisfy the compound inequality $-3 < 2x + 1 \\leq 7$?",
    "options": [
      "$-2 \\leq x < 3$",
      "$-2 < x \\leq 3$",
      "$-4 < x \\leq 6$",
      "$-1 < x \\leq 4$"
    ],
    "correctAnswer": 1,
    "explanation": "Subtract $1$ from all parts: $-4 < 2x \\leq 6$. Divide by $2$: $-2 < x \\leq 3$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 58,
    "question": "At a school play, adult tickets cost $\\$8$ each and child tickets cost $\\$5$ each. A total of $20$ tickets were sold for $\\$136$. How many adult tickets were sold?",
    "options": [
      "$8$",
      "$10$",
      "$12$",
      "$14$"
    ],
    "correctAnswer": 2,
    "explanation": "Let $a$ be adult tickets and $c$ child tickets. Then $a + c = 20$ and $8a + 5c = 136$. Substituting $c = 20 - a$: $8a + 5(20 - a) = 136$, so $3a + 100 = 136$ and $a = 12$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 59,
    "question": "A candle's height is modeled by $h = 12 - 1.5t$, where $h$ is the height in inches and $t$ is the time in hours after the candle is lit. What does the value $1.5$ represent?",
    "options": [
      "The initial height of the candle in inches",
      "The number of hours the candle burns",
      "The height increases by 1.5 inches each hour",
      "The height decreases by 1.5 inches each hour"
    ],
    "correctAnswer": 3,
    "explanation": "The coefficient of $t$ is the rate of change. Because it is negative, the height drops by $1.5$ inches for each additional hour the candle burns.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 60,
    "question": "The system of equations $3x + 2y = 19$ and $5x - 2y = 5$ has solution $(x, y)$. What is the value of $xy$?",
    "options": [
      "$8$",
      "$15$",
      "$18$",
      "$12$"
    ],
    "correctAnswer": 1,
    "explanation": "Adding the equations eliminates $y$: $8x = 24$, so $x = 3$. Then $3(3) + 2y = 19$ gives $2y = 10$ and $y = 5$. Thus $xy = 3 \\cdot 5 = 15$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 61,
    "question": "The system of equations $y = 3x - 4$ and $2x + ay = 10$ has a solution in which $x = 2$. What is the value of $a$?",
    "options": [
      "$3$",
      "$2$",
      "$5$",
      "$-3$"
    ],
    "correctAnswer": 0,
    "explanation": "At $x = 2$, the first equation gives $y = 3(2) - 4 = 2$. Substituting into $2x + ay = 10$: $2(2) + a(2) = 10$, so $2a = 6$ and $a = 3$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 62,
    "question": "The system of equations $\\frac{x}{2} + \\frac{y}{4} = 4$ and $x + y = 10$ has solution $(x, y)$. What is the value of $x$?",
    "options": [
      "$4$",
      "$8$",
      "$2$",
      "$6$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply the first equation by $4$: $2x + y = 16$. Subtracting $x + y = 10$ gives $x = 6$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 63,
    "question": "The table gives values of a linear function $f$. What is the value of $f(20)$?\n\n| $x$ | 2 | 5 | 8 | 11 |\n|---|---|---|---|---|\n| $f(x)$ | 3 | 12 | 21 | 30 |",
    "options": [
      "$60$",
      "$54$",
      "$57$",
      "$63$"
    ],
    "correctAnswer": 2,
    "explanation": "Each increase of $3$ in $x$ raises $f(x)$ by $9$, so the slope is $3$. Since $f(2) = 3$, the equation is $f(x) = 3x - 3$. Then $f(20) = 3(20) - 3 = 57$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 64,
    "question": "How many real solutions does the equation $|x - 4| = 2x + 1$ have?",
    "options": [
      "One",
      "Two",
      "Zero",
      "Infinitely many"
    ],
    "correctAnswer": 0,
    "explanation": "Case 1: $x - 4 = 2x + 1$ gives $x = -5$, but $|-5 - 4| = 9 \\neq 2(-5) + 1 = -9$, so it is rejected. Case 2: $-(x - 4) = 2x + 1$ gives $x = 1$, and $|1 - 4| = 3 = 2(1) + 1$, which checks. There is exactly one solution.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 65,
    "question": "Which of the following represents all solutions to the inequality $|3x - 6| \\leq 9$?",
    "options": [
      "$-3 \\leq x \\leq 5$",
      "$-1 \\leq x \\leq 5$",
      "$-1 \\leq x \\leq 3$",
      "$1 \\leq x \\leq 5$"
    ],
    "correctAnswer": 1,
    "explanation": "Rewrite as $-9 \\leq 3x - 6 \\leq 9$. Add $6$: $-3 \\leq 3x \\leq 15$. Divide by $3$: $-1 \\leq x \\leq 5$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 66,
    "question": "The sum of an arithmetic series is given by $S = \\frac{n}{2}(a + l)$, where $n$ is the number of terms, $a$ is the first term, and $l$ is the last term. Which expression gives $l$ in terms of $S$, $n$, and $a$?",
    "options": [
      "$l = \\frac{2S - a}{n}$",
      "$l = \\frac{2S}{n} + a$",
      "$l = \\frac{2S}{n} - a$",
      "$l = \\frac{S}{2n} - a$"
    ],
    "correctAnswer": 2,
    "explanation": "Multiply both sides by $\\frac{2}{n}$: $\\frac{2S}{n} = a + l$. Then subtract $a$: $l = \\frac{2S}{n} - a$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 67,
    "question": "A chemist mixes a $20\\%$ acid solution with a $50\\%$ acid solution to produce $60$ mL of a $30\\%$ acid solution. How many milliliters of the $20\\%$ solution are used?",
    "options": [
      "$20$",
      "$30$",
      "$45$",
      "$40$"
    ],
    "correctAnswer": 3,
    "explanation": "Let $x$ be mL of the $20\\%$ solution and $y$ of the $50\\%$ solution. Then $x + y = 60$ and $0.20x + 0.50y = 0.30(60) = 18$. Substituting $x = 60 - y$: $0.30y = 6$, so $y = 20$ and $x = 40$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 68,
    "question": "Which value of $x$ satisfies both inequalities $2x - 1 > 5$ and $3x + 2 < 20$?",
    "options": [
      "$5$",
      "$3$",
      "$6$",
      "$7$"
    ],
    "correctAnswer": 0,
    "explanation": "The first inequality gives $x > 3$ and the second gives $x < 6$, so $3 < x < 6$. Of the choices, only $5$ lies in this interval.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 69,
    "question": "A fish population is modeled by $P = 1200 - 45t$, where $P$ is the population and $t$ is the number of years since 2010. According to the model, in what year will the population first reach $750$?",
    "options": [
      "$2025$",
      "$2020$",
      "$2015$",
      "$2018$"
    ],
    "correctAnswer": 1,
    "explanation": "Set $1200 - 45t = 750$, so $45t = 450$ and $t = 10$. Ten years after 2010 is 2020.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 70,
    "question": "The system of equations $x + 2y = a$ and $3x - y = b$ has the solution $(4, 1)$. What is the value of $a + b$?",
    "options": [
      "$15$",
      "$13$",
      "$17$",
      "$18$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute $(4, 1)$: $a = 4 + 2(1) = 6$ and $b = 3(4) - 1 = 11$. Therefore $a + b = 17$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 71,
    "question": "How many integer values of $x$ satisfy the inequality $|x - 3| < 4$?",
    "options": [
      "$6$",
      "$8$",
      "$9$",
      "$7$"
    ],
    "correctAnswer": 3,
    "explanation": "The inequality is equivalent to $-4 < x - 3 < 4$, or $-1 < x < 7$. The integers strictly between $-1$ and $7$ are $0, 1, 2, 3, 4, 5, 6$, which is $7$ values.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 72,
    "question": "A motorboat travels $24$ km downstream in $2$ hours and the same $24$ km upstream in $3$ hours. What is the speed of the boat in still water, in kilometers per hour?",
    "options": [
      "$10$",
      "$8$",
      "$12$",
      "$6$"
    ],
    "correctAnswer": 0,
    "explanation": "Let $b$ be the boat's speed and $c$ the current. Downstream speed is $\\frac{24}{2} = 12 = b + c$; upstream speed is $\\frac{24}{3} = 8 = b - c$. Adding gives $2b = 20$, so $b = 10$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 73,
    "question": "If $5x + 3 = 23$, what is the value of $x$?",
    "options": [
      "$5$",
      "$20$",
      "$4$",
      "$\\frac{26}{5}$"
    ],
    "correctAnswer": 2,
    "explanation": "Subtract $3$ from both sides to get $5x = 20$, then divide by $5$ to get $x = 4$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 74,
    "question": "A gym charges a one-time sign-up fee of \\$25 plus \\$15 for each month of membership. Which equation gives the total cost $C$, in dollars, for $m$ months of membership?",
    "options": [
      "$C = 15 + 25m$",
      "$C = 25 + 15m$",
      "$C = 25m + 15$",
      "$C = 40m$"
    ],
    "correctAnswer": 1,
    "explanation": "The \\$25 sign-up fee is a one-time constant, and \\$15 is charged for each of the $m$ months, giving $C = 25 + 15m$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 75,
    "question": "What is the slope of the line given by the equation $y = -2x + 7$?",
    "options": [
      "$7$",
      "$-2$",
      "$2$",
      "$-7$"
    ],
    "correctAnswer": 1,
    "explanation": "In slope-intercept form $y = mx + b$, the coefficient of $x$ is the slope. Here that coefficient is $-2$.",
    "difficulty": "easy",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 76,
    "question": "A biologist models the height of a plant using $P = 8t + 40$, where $P$ is the height in centimeters and $t$ is the number of weeks since planting. What does the number $8$ represent in this model?",
    "options": [
      "The plant is 8 centimeters tall when it is planted.",
      "The plant grows for a total of 8 weeks.",
      "The plant's height increases by 8 centimeters each week.",
      "The plant reaches a maximum height of 8 centimeters."
    ],
    "correctAnswer": 2,
    "explanation": "The number $8$ is the slope, the coefficient of $t$. It gives the change in height per week, so the plant's height increases by 8 centimeters each week. The constant $40$ is the starting height.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 77,
    "question": "The graph of the line $3x + 4y = 12$ crosses the $x$-axis at which point?",
    "options": [
      "$(0, 3)$",
      "$(4, 0)$",
      "$(0, 4)$",
      "$(3, 0)$"
    ],
    "correctAnswer": 1,
    "explanation": "A line crosses the $x$-axis where $y = 0$. Substituting gives $3x = 12$, so $x = 4$, and the point is $(4, 0)$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 78,
    "question": "Which of the following is equivalent to the equation $2x + y = 6$ written in slope-intercept form?",
    "options": [
      "$y = 2x + 6$",
      "$y = -2x + 6$",
      "$y = 6x - 2$",
      "$y = -2x - 6$"
    ],
    "correctAnswer": 1,
    "explanation": "Solve for $y$ by subtracting $2x$ from both sides: $y = -2x + 6$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 79,
    "question": "For the system of equations $x + y = 10$ and $x - y = 4$, what is the value of $x$?",
    "options": [
      "$3$",
      "$6$",
      "$7$",
      "$14$"
    ],
    "correctAnswer": 2,
    "explanation": "Adding the two equations eliminates $y$: $(x + y) + (x - y) = 10 + 4$, so $2x = 14$ and $x = 7$.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 80,
    "question": "Which ordered pair $(x, y)$ is a solution to the inequality $y > 2x - 1$?",
    "options": [
      "$(1, 1)$",
      "$(2, 2)$",
      "$(0, 0)$",
      "$(4, 7)$"
    ],
    "correctAnswer": 2,
    "explanation": "Test each pair. For $(0, 0)$: $0 > 2(0) - 1$ gives $0 > -1$, which is true. The others give $1 > 1$, $2 > 3$, and $7 > 7$, all false.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 81,
    "question": "A food bank can store at most 500 pounds of food. Each bag of rice weighs 20 pounds and each bag of beans weighs 15 pounds. If $r$ is the number of bags of rice and $b$ is the number of bags of beans, which inequality represents this storage constraint?",
    "options": [
      "$20r + 15b \\geq 500$",
      "$15r + 20b \\leq 500$",
      "$20r + 15b < 500$",
      "$20r + 15b \\leq 500$"
    ],
    "correctAnswer": 3,
    "explanation": "The total weight is $20r + 15b$. \"At most 500\" means it can equal or be below 500, so $20r + 15b \\leq 500$. The strict inequality $<$ would wrongly exclude exactly 500 pounds.",
    "difficulty": "medium",
    "area": "algebra",
    "skill": "Linear inequalities in one or two variables"
  },
  {
    "id": 82,
    "question": "A salesperson earns a fixed daily wage of \\$180 plus a commission of \\$12 for each item sold. On a day when the salesperson earned a total of \\$456, how many items were sold?",
    "options": [
      "$21$",
      "$23$",
      "$26$",
      "$38$"
    ],
    "correctAnswer": 1,
    "explanation": "Let $n$ be the number of items. Then $180 + 12n = 456$, so $12n = 276$ and $n = 23$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in one variable"
  },
  {
    "id": 83,
    "question": "The total cost $C$, in dollars, to rent a banquet hall is given by $C = 45n + 300$, where $n$ is the number of guests. Which of the following is the best interpretation of the number $300$ in this context?",
    "options": [
      "The cost increases by $300 for each additional guest.",
      "The cost per guest is $300.",
      "The fixed cost of renting the hall, not including the per-guest charge.",
      "The hall can hold a maximum of 300 guests."
    ],
    "correctAnswer": 2,
    "explanation": "The constant term $300$ is the value of $C$ when $n = 0$. It represents the fixed cost of renting the hall before any per-guest charges. The $45$ is the cost per guest.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 84,
    "question": "A line in the $xy$-plane has a slope of $-\\frac{1}{2}$ and passes through the point $(0, 4)$. Which equation represents this line?",
    "options": [
      "$y = \\frac{1}{2}x + 4$",
      "$y = 4x - \\frac{1}{2}$",
      "$y = -\\frac{1}{2}x + 4$",
      "$y = -\\frac{1}{2}x - 4$"
    ],
    "correctAnswer": 2,
    "explanation": "The point $(0, 4)$ is the $y$-intercept, so $b = 4$, and the slope is $m = -\\frac{1}{2}$. In slope-intercept form this is $y = -\\frac{1}{2}x + 4$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 85,
    "question": "For the system of equations $2x + 3y = 16$ and $x = y + 3$, what is the value of $y$?",
    "options": [
      "$1$",
      "$2$",
      "$5$",
      "$-2$"
    ],
    "correctAnswer": 1,
    "explanation": "Substitute $x = y + 3$ into the first equation: $2(y + 3) + 3y = 16$, so $5y + 6 = 16$, giving $5y = 10$ and $y = 2$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Systems of two linear equations in two variables"
  },
  {
    "id": 86,
    "question": "A line in the $xy$-plane passes through the origin and has a slope of $\\frac{3}{4}$. What is the $y$-coordinate of the point on the line whose $x$-coordinate is $8$?",
    "options": [
      "$\\frac{32}{3}$",
      "$6$",
      "$\\frac{3}{4}$",
      "$8$"
    ],
    "correctAnswer": 1,
    "explanation": "A line through the origin with slope $\\frac{3}{4}$ is $y = \\frac{3}{4}x$. Substituting $x = 8$ gives $y = \\frac{3}{4}(8) = 6$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 87,
    "question": "The amount of water $W$, in gallons, remaining in a tank after $t$ minutes is given by $W = 50 - 2.5t$. What is the best interpretation of the value of $t$ for which $W = 0$?",
    "options": [
      "The tank starts with 20 gallons of water.",
      "The tank loses water at a rate of 20 gallons per minute.",
      "The tank becomes empty 20 minutes after the start.",
      "The tank becomes empty 50 minutes after the start."
    ],
    "correctAnswer": 2,
    "explanation": "Setting $W = 0$ gives $0 = 50 - 2.5t$, so $2.5t = 50$ and $t = 20$. This is the time when the tank is empty, 20 minutes after the start.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear functions"
  },
  {
    "id": 88,
    "question": "Which of the following equations is equivalent to $\\frac{1}{2}x - \\frac{1}{3}y = 1$?",
    "options": [
      "$3x - 2y = 1$",
      "$2x - 3y = 6$",
      "$3x + 2y = 6$",
      "$3x - 2y = 6$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply every term by the common denominator $6$: $6 \\cdot \\frac{1}{2}x - 6 \\cdot \\frac{1}{3}y = 6 \\cdot 1$, which gives $3x - 2y = 6$.",
    "difficulty": "hard",
    "area": "algebra",
    "skill": "Linear equations in two variables"
  },
  {
    "id": 89,
    "question": "What are the solutions to $x^2 - 7x + 12 = 0$?",
    "options": [
      "$x = -3$ and $x = -4$",
      "$x = 3$ and $x = 4$",
      "$x = 2$ and $x = 6$",
      "$x = 1$ and $x = 12$"
    ],
    "correctAnswer": 1,
    "explanation": "Factor: $(x-3)(x-4)=0$, so $x=3$ or $x=4$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 90,
    "question": "Simplify $x^5 \\cdot x^3$.",
    "options": [
      "$x^{15}$",
      "$x^2$",
      "$2x^8$",
      "$x^8$"
    ],
    "correctAnswer": 3,
    "explanation": "When multiplying like bases, add exponents: $x^{5+3}=x^8$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 91,
    "question": "Simplify $\\sqrt{72}$.",
    "options": [
      "$6\\sqrt{2}$",
      "$2\\sqrt{6}$",
      "$36\\sqrt{2}$",
      "$8\\sqrt{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\sqrt{72}=\\sqrt{36\\cdot 2}=6\\sqrt{2}$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 92,
    "question": "Factor $x^2 - 9$.",
    "options": [
      "$(x-3)^2$",
      "$(x-9)(x+1)$",
      "$(x-3)(x+3)$",
      "$(x+3)^2$"
    ],
    "correctAnswer": 2,
    "explanation": "Difference of squares: $x^2-9=(x-3)(x+3)$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 93,
    "question": "If $f(x) = x^2 + 2$, what is $f(3)$?",
    "options": [
      "$8$",
      "$11$",
      "$9$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "$f(3)=3^2+2=9+2=11$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 94,
    "question": "Simplify $\\dfrac{x^8}{x^2}$.",
    "options": [
      "$x^4$",
      "$x^{10}$",
      "$x^6$",
      "$x^{16}$"
    ],
    "correctAnswer": 2,
    "explanation": "When dividing like bases, subtract exponents: $x^{8-2}=x^6$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 95,
    "question": "What are the solutions to $x^2 = 25$?",
    "options": [
      "$x = 5$ only",
      "$x = 5$ and $x = -5$",
      "$x = 12.5$",
      "$x = -5$ only"
    ],
    "correctAnswer": 1,
    "explanation": "Taking the square root gives $x=\\pm 5$, so $x=5$ or $x=-5$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 96,
    "question": "Simplify $(x^3)^4$.",
    "options": [
      "$x^7$",
      "$x^{81}$",
      "$x^{12}$",
      "$4x^3$"
    ],
    "correctAnswer": 2,
    "explanation": "Raising a power to a power multiplies exponents: $x^{3\\cdot 4}=x^{12}$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 97,
    "question": "What is the value of $8^{2/3}$?",
    "options": [
      "$4$",
      "$16$",
      "$2$",
      "$6$"
    ],
    "correctAnswer": 0,
    "explanation": "$8^{2/3}=(\\sqrt[3]{8})^2=2^2=4$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 98,
    "question": "Factor $x^2 + 5x$.",
    "options": [
      "$x(x+5)$",
      "$(x+5)(x-1)$",
      "$5x^2$",
      "$(x+1)(x+5)$"
    ],
    "correctAnswer": 0,
    "explanation": "Factor out the common factor $x$: $x^2+5x=x(x+5)$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 99,
    "question": "What are the solutions to $2x^2 - 5x - 3 = 0$?",
    "options": [
      "$x = 3$ and $x = -\\dfrac{1}{2}$",
      "$x = -3$ and $x = \\dfrac{1}{2}$",
      "$x = 3$ and $x = \\dfrac{1}{2}$",
      "$x = 1$ and $x = -3$"
    ],
    "correctAnswer": 0,
    "explanation": "Factor: $(2x+1)(x-3)=0$, so $x=-\\tfrac{1}{2}$ or $x=3$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 100,
    "question": "If $f(x) = x^2 - 4x$, what is $f(x+1)$?",
    "options": [
      "$x^2 - 4x + 1$",
      "$x^2 - 2x - 3$",
      "$x^2 - 4x - 3$",
      "$x^2 + 2x - 3$"
    ],
    "correctAnswer": 1,
    "explanation": "$f(x+1)=(x+1)^2-4(x+1)=x^2+2x+1-4x-4=x^2-2x-3$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 101,
    "question": "Simplify $\\dfrac{x^2 - 9}{x + 3}$ for $x \\neq -3$.",
    "options": [
      "$x + 3$",
      "$x - 3$",
      "$x - 9$",
      "$x^2 - 3$"
    ],
    "correctAnswer": 1,
    "explanation": "Factor the numerator: $\\dfrac{(x-3)(x+3)}{x+3}=x-3$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 102,
    "question": "A population of bacteria doubles every hour. If it starts at $50$, which function gives the count after $t$ hours?",
    "options": [
      "$P(t) = 50 + 2t$",
      "$P(t) = 50 \\cdot 2^t$",
      "$P(t) = 50t^2$",
      "$P(t) = 2 \\cdot 50^t$"
    ],
    "correctAnswer": 1,
    "explanation": "Doubling each hour means multiply by $2$ each step: $P(t)=50\\cdot 2^t$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 103,
    "question": "What is the vertex of the parabola $y = (x - 2)^2 + 3$?",
    "options": [
      "$(2, 3)$",
      "$(-2, 3)$",
      "$(2, -3)$",
      "$(3, 2)$"
    ],
    "correctAnswer": 0,
    "explanation": "In vertex form $y=(x-h)^2+k$, the vertex is $(h,k)=(2,3)$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 104,
    "question": "Solve $\\sqrt{x + 4} = 5$.",
    "options": [
      "$x = 1$",
      "$x = 29$",
      "$x = 9$",
      "$x = 21$"
    ],
    "correctAnswer": 3,
    "explanation": "Square both sides: $x+4=25$, so $x=21$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 105,
    "question": "If $f(x) = 2x + 1$ and $g(x) = x^2$, what is $f(g(3))$?",
    "options": [
      "$19$",
      "$49$",
      "$13$",
      "$37$"
    ],
    "correctAnswer": 0,
    "explanation": "$g(3)=9$, then $f(9)=2(9)+1=19$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 106,
    "question": "The product of the roots of $x^2 - 8x + 15 = 0$ is:",
    "options": [
      "$8$",
      "$-15$",
      "$15$",
      "$-8$"
    ],
    "correctAnswer": 2,
    "explanation": "For $x^2+bx+c=0$, the product of roots is $c=15$ (roots are $3$ and $5$).",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 107,
    "question": "Simplify $\\dfrac{6x^{-2}}{3x^{-5}}$.",
    "options": [
      "$2x^3$",
      "$2x^{-7}$",
      "$\\dfrac{2}{x^7}$",
      "$9x^3$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\dfrac{6}{3}=2$ and $x^{-2-(-5)}=x^3$, giving $2x^3$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 108,
    "question": "For $f(x) = 3^x$, what is $\\dfrac{f(4)}{f(2)}$?",
    "options": [
      "$3$",
      "$81$",
      "$6$",
      "$9$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\dfrac{3^4}{3^2}=3^{4-2}=3^2=9$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 109,
    "question": "The quadratic $x^2 + 6x + c$ is a perfect square trinomial. What is $c$?",
    "options": [
      "$3$",
      "$36$",
      "$9$",
      "$12$"
    ],
    "correctAnswer": 2,
    "explanation": "A perfect square $(x+3)^2=x^2+6x+9$, so $c=9$ (half of $6$, squared).",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 110,
    "question": "Solve the system $y = x^2 - 1$ and $y = 3x + 3$. What are the $x$-values of the solutions?",
    "options": [
      "$x = -1$ and $x = 4$",
      "$x = 1$ and $x = -4$",
      "$x = -1$ and $x = -4$",
      "$x = 2$ and $x = 3$"
    ],
    "correctAnswer": 0,
    "explanation": "Set equal: $x^2-1=3x+3$, so $x^2-3x-4=0$, $(x-4)(x+1)=0$, giving $x=4$ or $x=-1$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 111,
    "question": "By completing the square, write $x^2 - 10x + 18$ in vertex form.",
    "options": [
      "$(x - 5)^2 - 7$",
      "$(x - 5)^2 + 7$",
      "$(x - 10)^2 - 82$",
      "$(x + 5)^2 - 7$"
    ],
    "correctAnswer": 0,
    "explanation": "$x^2-10x+25-25+18=(x-5)^2-7$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 112,
    "question": "If $f(x) = \\dfrac{x + 2}{3}$, what is the inverse $f^{-1}(x)$?",
    "options": [
      "$3x - 2$",
      "$\\dfrac{3}{x + 2}$",
      "$3x + 2$",
      "$\\dfrac{x - 2}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "Let $y=\\frac{x+2}{3}$, swap and solve: $x=\\frac{y+2}{3}\\Rightarrow 3x=y+2\\Rightarrow y=3x-2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 113,
    "question": "A value decays so that it is multiplied by $0.8$ each year, starting at $200$. Which expression gives the value after $t$ years, and what is it after $2$ years?",
    "options": [
      "$200(0.8)^t$; $128$",
      "$200(1.2)^t$; $288$",
      "$200(0.8)t$; $320$",
      "$200(0.2)^t$; $8$"
    ],
    "correctAnswer": 0,
    "explanation": "Decay factor $0.8$ gives $200(0.8)^t$; at $t=2$, $200(0.64)=128$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 114,
    "question": "The equation $x^2 + kx + 16 = 0$ has exactly one real solution. What is a possible value of $k$?",
    "options": [
      "$4$",
      "$8$",
      "$16$",
      "$32$"
    ],
    "correctAnswer": 1,
    "explanation": "One solution means discriminant $k^2-4(16)=0$, so $k^2=64$ and $k=8$ (or $-8$).",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 115,
    "question": "Simplify $\\dfrac{1}{x} + \\dfrac{1}{x + 1}$.",
    "options": [
      "$\\dfrac{2}{2x + 1}$",
      "$\\dfrac{2x + 1}{x(x + 1)}$",
      "$\\dfrac{1}{2x + 1}$",
      "$\\dfrac{2x + 1}{x + 1}$"
    ],
    "correctAnswer": 1,
    "explanation": "Common denominator $x(x+1)$: $\\dfrac{(x+1)+x}{x(x+1)}=\\dfrac{2x+1}{x(x+1)}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 116,
    "question": "If $f(x) = x^2 + 1$ and $f(g(x)) = x^2 - 4x + 5$, which of the following is $g(x)$?",
    "options": [
      "$x - 2$",
      "$x + 2$",
      "$x^2 - 4$",
      "$2x - 4$"
    ],
    "correctAnswer": 0,
    "explanation": "$f(g(x))=g(x)^2+1=x^2-4x+5$ means $g(x)^2=x^2-4x+4=(x-2)^2$, so $g(x)=x-2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 117,
    "question": "Using the quadratic formula, what are the solutions to $x^2 - 4x + 1 = 0$?",
    "options": [
      "$2 \\pm \\sqrt{3}$",
      "$4 \\pm \\sqrt{3}$",
      "$-2 \\pm \\sqrt{3}$",
      "$2 \\pm \\sqrt{5}$"
    ],
    "correctAnswer": 0,
    "explanation": "$x=\\dfrac{4\\pm\\sqrt{16-4}}{2}=\\dfrac{4\\pm 2\\sqrt{3}}{2}=2\\pm\\sqrt{3}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 118,
    "question": "The function $h(t) = -16t^2 + 32t + 48$ models height in feet. At what time $t > 0$ (seconds) does the object hit the ground?",
    "options": [
      "$t = 2$",
      "$t = 3$",
      "$t = 1$",
      "$t = 4$"
    ],
    "correctAnswer": 1,
    "explanation": "Set $h=0$: $-16t^2+32t+48=0\\Rightarrow t^2-2t-3=0\\Rightarrow (t-3)(t+1)=0$, so $t=3$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 119,
    "question": "Which of the following is a solution to $x^2 - 5x + 6 = 0$?",
    "options": [
      "$-2$",
      "$2$",
      "$1$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "Factor: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$, so the solutions are $x = 2$ and $x = 3$. Of the choices, only $x = 2$ works: $(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 120,
    "question": "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(3)$?",
    "options": [
      "$10$",
      "$28$",
      "$-2$",
      "$16$"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute $x = 3$: $f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$. Squaring must be done before multiplying by $2$; computing $(2 \\cdot 3)^2$ gives the wrong value $28$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 121,
    "question": "The graph of $y = (x - 4)^2 + 3$ is a parabola in the $xy$-plane. What are the coordinates of its vertex?",
    "options": [
      "$(-4, 3)$",
      "$(4, -3)$",
      "$(-4, -3)$",
      "$(4, 3)$"
    ],
    "correctAnswer": 3,
    "explanation": "In vertex form $y = (x - h)^2 + k$, the vertex is $(h, k)$. Here $y = (x - 4)^2 + 3$, so $h = 4$ and $k = 3$, giving the vertex $(4, 3)$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 122,
    "question": "What is the minimum value of $y = x^2 + 6x + 5$?",
    "options": [
      "$5$",
      "$-3$",
      "$-4$",
      "$-9$"
    ],
    "correctAnswer": 2,
    "explanation": "The minimum occurs at the vertex, $x = -\\frac{b}{2a} = -\\frac{6}{2} = -3$. Then $y = (-3)^2 + 6(-3) + 5 = 9 - 18 + 5 = -4$. The minimum value is $-4$ (the input $-3$ is the $x$-coordinate, not the minimum).",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 123,
    "question": "One solution to the system $y = x^2$ and $y = x + 6$ is $(3, 9)$. What is the other solution?",
    "options": [
      "$(-2, 4)$",
      "$(2, 4)$",
      "$(-2, -4)$",
      "$(-3, 3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Set the expressions equal: $x^2 = x + 6 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x - 3)(x + 2) = 0$. So $x = 3$ or $x = -2$. For $x = -2$, $y = (-2)^2 = 4$, giving $(-2, 4)$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 124,
    "question": "A quantity starts at $400$ and decreases by $15\\%$ each year. Which equation models the quantity after $t$ years?",
    "options": [
      "$400(1.15)^t$",
      "$400(0.85)^t$",
      "$400(0.15)^t$",
      "$400 - 15t$"
    ],
    "correctAnswer": 1,
    "explanation": "A decrease of $15\\%$ multiplies by $1 - 0.15 = 0.85$ each year, giving $400(0.85)^t$. Using $1.15$ would be a $15\\%$ increase, and $0.15$ would keep only $15\\%$ of the amount each year.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 125,
    "question": "If $f(x) = x + 3$ and $g(x) = 2x$, what is the value of $f(g(4))$?",
    "options": [
      "$14$",
      "$8$",
      "$22$",
      "$11$"
    ],
    "correctAnswer": 3,
    "explanation": "Work from the inside out: $g(4) = 2(4) = 8$, then $f(8) = 8 + 3 = 11$. Reversing the order gives $g(f(4)) = g(7) = 14$, a common mistake.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 126,
    "question": "Which of the following is a solution to $2x^2 + 7x + 3 = 0$?",
    "options": [
      "$\\frac{1}{2}$",
      "$-\\frac{1}{3}$",
      "$-\\frac{1}{2}$",
      "$1$"
    ],
    "correctAnswer": 2,
    "explanation": "Factor: $2x^2 + 7x + 3 = (2x + 1)(x + 3) = 0$, so $x = -\\frac{1}{2}$ or $x = -3$. Only $-\\frac{1}{2}$ appears among the choices: $2\\left(-\\frac{1}{2}\\right)^2 + 7\\left(-\\frac{1}{2}\\right) + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = 0$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 127,
    "question": "The equation $x^2 + kx + 25 = 0$ has exactly one real solution. What is the positive value of $k$?",
    "options": [
      "$10$",
      "$5$",
      "$25$",
      "$50$"
    ],
    "correctAnswer": 0,
    "explanation": "Exactly one real solution means the discriminant is $0$: $k^2 - 4(1)(25) = 0 \\Rightarrow k^2 = 100 \\Rightarrow k = \\pm 10$. The positive value is $k = 10$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 128,
    "question": "The equation $x^2 - 8x + k = 0$ has exactly one real solution. What is the value of $k$?",
    "options": [
      "$4$",
      "$16$",
      "$8$",
      "$32$"
    ],
    "correctAnswer": 1,
    "explanation": "Set the discriminant to $0$: $(-8)^2 - 4(1)(k) = 0 \\Rightarrow 64 - 4k = 0 \\Rightarrow k = 16$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 129,
    "question": "For which value of $c$ does the equation $x^2 + 4x + c = 0$ have no real solutions?",
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$2$"
    ],
    "correctAnswer": 2,
    "explanation": "No real solutions requires the discriminant to be negative: $4^2 - 4(1)(c) < 0 \\Rightarrow 16 - 4c < 0 \\Rightarrow c > 4$. Only $c = 5$ satisfies this. ($c = 4$ gives a discriminant of $0$, which is exactly one solution.)",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 130,
    "question": "The equation $2x^2 + 6x + k = 0$ has no real solutions. Which of the following must be true about $k$?",
    "options": [
      "$k > \\frac{9}{2}$",
      "$k < \\frac{9}{2}$",
      "$k = \\frac{9}{2}$",
      "$k < 3$"
    ],
    "correctAnswer": 0,
    "explanation": "No real solutions requires the discriminant to be negative: $6^2 - 4(2)(k) < 0 \\Rightarrow 36 - 8k < 0 \\Rightarrow k > \\frac{36}{8} = \\frac{9}{2}$. (Note: $k=\\frac{9}{2}$ gives a discriminant of $0$ — exactly one solution, not none.)",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 131,
    "question": "For which value of $k$ does the equation $x^2 - 6x + k = 0$ have two distinct real solutions?",
    "options": [
      "$9$",
      "$10$",
      "$12$",
      "$8$"
    ],
    "correctAnswer": 3,
    "explanation": "Two distinct real solutions require a positive discriminant: $(-6)^2 - 4(1)(k) > 0 \\Rightarrow 36 - 4k > 0 \\Rightarrow k < 9$. Only $k = 8$ works. ($k = 9$ gives a discriminant of $0$, which is a single repeated solution.)",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 132,
    "question": "The line $y = 6x + c$ is tangent to the parabola $y = x^2 + 2x + 10$. What is the value of $c$?",
    "options": [
      "$-6$",
      "$6$",
      "$4$",
      "$16$"
    ],
    "correctAnswer": 1,
    "explanation": "Tangent means the curves meet at exactly one point. Setting them equal: $x^2 + 2x + 10 = 6x + c \\Rightarrow x^2 - 4x + (10 - c) = 0$. One solution requires the discriminant to be $0$: $(-4)^2 - 4(1)(10 - c) = 0 \\Rightarrow 16 - 40 + 4c = 0 \\Rightarrow 4c = 24 \\Rightarrow c = 6$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 133,
    "question": "The line $y = 2x + k$ is tangent to the curve $y = x^2 - 4x + 7$. What is the value of $k$?",
    "options": [
      "$2$",
      "$4$",
      "$-2$",
      "$-8$"
    ],
    "correctAnswer": 2,
    "explanation": "Set the expressions equal: $x^2 - 4x + 7 = 2x + k \\Rightarrow x^2 - 6x + (7 - k) = 0$. Tangency means one solution, so the discriminant is $0$: $(-6)^2 - 4(1)(7 - k) = 0 \\Rightarrow 36 - 28 + 4k = 0 \\Rightarrow 4k = -8 \\Rightarrow k = -2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 134,
    "question": "The solutions to $x^2 + bx + 12 = 0$ are $2$ and $6$. What is the value of $b$?",
    "options": [
      "$8$",
      "$-8$",
      "$12$",
      "$-6$"
    ],
    "correctAnswer": 1,
    "explanation": "For $x^2 + bx + c = 0$, the sum of the roots equals $-b$. Here the roots sum to $2 + 6 = 8$, so $-b = 8 \\Rightarrow b = -8$. (The product $2 \\cdot 6 = 12$ confirms the constant term.)",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 135,
    "question": "In the equation $x^2 - 7x + c = 0$, the two solutions have a sum of $7$, and one of the solutions is $3$. What is the value of $c$?",
    "options": [
      "$21$",
      "$10$",
      "$4$",
      "$12$"
    ],
    "correctAnswer": 3,
    "explanation": "The roots sum to $7$, so the other root is $7 - 3 = 4$. For $x^2 - 7x + c = 0$, the product of the roots equals $c$: $c = 3 \\cdot 4 = 12$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 136,
    "question": "The function $f(x) = -2(x - 3)^2 + 8$ models the height, in feet, of a projectile. What is the maximum value of $f$?",
    "options": [
      "$3$",
      "$8$",
      "$-2$",
      "$11$"
    ],
    "correctAnswer": 1,
    "explanation": "Because the coefficient $-2$ is negative, the parabola opens downward and the vertex is a maximum. In vertex form $a(x - h)^2 + k$, the maximum value is $k = 8$ (occurring at $x = 3$).",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 137,
    "question": "The number of insects in a colony is modeled by $y = 250(1.4)^t$, where $t$ is the number of years. Which statement best describes the model?",
    "options": [
      "The colony increases by $140\\%$ each year.",
      "The colony increases by $4\\%$ each year.",
      "The colony increases by $40\\%$ each year.",
      "The colony increases by $1.4\\%$ each year."
    ],
    "correctAnswer": 2,
    "explanation": "In $y = a \\cdot b^t$, the growth factor $b = 1.4$ corresponds to a percent increase of $b - 1 = 0.4 = 40\\%$ per year. The base $1.4$ itself is not the percent, and $140\\%$ would require a factor of $2.4$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 138,
    "question": "If $f(x) = 3x - 5$, which of the following is $f^{-1}(x)$, the inverse of $f$?",
    "options": [
      "$\\frac{x - 5}{3}$",
      "$3x + 5$",
      "$\\frac{x + 5}{3}$",
      "$\\frac{1}{3x - 5}$"
    ],
    "correctAnswer": 2,
    "explanation": "Write $y = 3x - 5$ and solve for $x$: $y + 5 = 3x \\Rightarrow x = \\frac{y + 5}{3}$. Swapping variables gives $f^{-1}(x) = \\frac{x + 5}{3}$. The inverse is not the reciprocal $\\frac{1}{3x - 5}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 139,
    "question": "What is the solution to the equation $\\frac{x^2}{x - 3} = \\frac{9}{x - 3}$?",
    "options": [
      "$x = -3$",
      "$x = 3$",
      "$x = 3$ or $x = -3$",
      "There is no real solution."
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying both sides by $x - 3$ gives $x^2 = 9$, so $x = 3$ or $x = -3$. However, $x = 3$ makes the denominator $x - 3$ equal to $0$, so it is extraneous. The only valid solution is $x = -3$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 140,
    "question": "When the polynomial $p(x) = x^3 - 4x^2 + 2x + 5$ is divided by $x - 2$, what is the remainder?",
    "options": [
      "$5$",
      "$0$",
      "$-3$",
      "$1$"
    ],
    "correctAnswer": 3,
    "explanation": "By the Remainder Theorem, the remainder when dividing by $x - 2$ equals $p(2)$: $p(2) = (2)^3 - 4(2)^2 + 2(2) + 5 = 8 - 16 + 4 + 5 = 1$. Since the remainder is not $0$, $x - 2$ is not a factor.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 141,
    "question": "Which of the following is the complete factorization of $x^2 - 49$?",
    "options": [
      "$(x-7)^2$",
      "$(x-7)(x+7)$",
      "$(x+7)^2$",
      "$(x-49)(x+1)$"
    ],
    "correctAnswer": 1,
    "explanation": "This is a difference of squares $a^2 - b^2 = (a-b)(a+b)$ with $a = x$ and $b = 7$, giving $(x-7)(x+7)$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 142,
    "question": "If $f(x) = 3x - 5$, what is the value of $f(4)$?",
    "options": [
      "$7$",
      "$12$",
      "$17$",
      "$2$"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute $x = 4$: $f(4) = 3(4) - 5 = 12 - 5 = 7$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 143,
    "question": "For what values of $k$ does $x^2 - 8x + k = 0$ have two distinct real solutions?",
    "options": [
      "$k > 16$",
      "$k = 16$",
      "$k < -16$",
      "$k < 16$"
    ],
    "correctAnswer": 3,
    "explanation": "Two distinct real solutions require discriminant $> 0$: $(-8)^2 - 4k > 0 \\Rightarrow 64 > 4k \\Rightarrow k < 16$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 144,
    "question": "At how many points do the line $y = 2x + 5$ and the parabola $y = x^2$ intersect?",
    "options": [
      "$1$",
      "$2$",
      "$0$",
      "$3$"
    ],
    "correctAnswer": 1,
    "explanation": "Setting $x^2 = 2x + 5$ gives $x^2 - 2x - 5 = 0$. The discriminant is $(-2)^2 - 4(1)(-5) = 4 + 20 = 24 > 0$, so there are two real solutions and thus two intersection points.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 145,
    "question": "Which quadratic equation has roots $x = 3$ and $x = -5$?",
    "options": [
      "$x^2 + 2x - 15 = 0$",
      "$x^2 - 2x - 15 = 0$",
      "$x^2 + 2x + 15 = 0$",
      "$x^2 - 8x + 15 = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "The sum of the roots is $3 + (-5) = -2$ and the product is $(3)(-5) = -15$. A monic quadratic is $x^2 - (\\text{sum})x + (\\text{product}) = x^2 + 2x - 15$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 146,
    "question": "A population of $500$ doubles every $6$ years. Which expression gives the population after $t$ years?",
    "options": [
      "$500 \\cdot 2^{6t}$",
      "$500 \\cdot 6^{t/2}$",
      "$500 \\cdot 2^{t/6}$",
      "$500 \\cdot 2^{t} \\cdot 6$"
    ],
    "correctAnswer": 2,
    "explanation": "In $t$ years the population doubles $t/6$ times, so the model is $500 \\cdot 2^{t/6}$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 147,
    "question": "For which value(s) of $x$ is the expression $\\dfrac{x+2}{x^2 - 9}$ undefined?",
    "options": [
      "$x = -2$",
      "$x = 9 \\text{ or } x = -9$",
      "$x = 3 \\text{ or } x = -3$",
      "$x = 3 \\text{ only}$"
    ],
    "correctAnswer": 2,
    "explanation": "A rational expression is undefined where its denominator is zero: $x^2 - 9 = 0 \\Rightarrow x = \\pm 3$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 148,
    "question": "The equation $kx^2 + 4x + k = 0$ (with $k \\neq 0$) has exactly one real solution. What is a possible value of $k$?",
    "options": [
      "$4$",
      "$2$",
      "$1$",
      "$8$"
    ],
    "correctAnswer": 1,
    "explanation": "Exactly one real solution means the discriminant is zero: $4^2 - 4(k)(k) = 16 - 4k^2 = 0 \\Rightarrow k^2 = 4 \\Rightarrow k = \\pm 2$. Of the choices, only $2$ works.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 149,
    "question": "For what values of $c$ does $2x^2 + 4x + c = 0$ have no real solutions?",
    "options": [
      "$c < 2$",
      "$c = 2$",
      "$c > 2$",
      "$c > -2$"
    ],
    "correctAnswer": 2,
    "explanation": "No real solutions require discriminant $< 0$: $4^2 - 4(2)(c) = 16 - 8c < 0 \\Rightarrow 16 < 8c \\Rightarrow c > 2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 150,
    "question": "At how many points do the circle $x^2 + y^2 = 25$ and the line $y = 5$ intersect?",
    "options": [
      "$0$",
      "$2$",
      "$1$",
      "Infinitely many"
    ],
    "correctAnswer": 2,
    "explanation": "Substituting $y = 5$ gives $x^2 + 25 = 25 \\Rightarrow x^2 = 0 \\Rightarrow x = 0$. The single point $(0, 5)$ is where the line is tangent to the circle.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 151,
    "question": "The parabola $y = x^2$ is shifted $3$ units to the right and $4$ units down. What is the equation of the new parabola?",
    "options": [
      "$y = (x+3)^2 - 4$",
      "$y = (x-3)^2 + 4$",
      "$y = (x-4)^2 - 3$",
      "$y = (x-3)^2 - 4$"
    ],
    "correctAnswer": 3,
    "explanation": "A shift right by $3$ replaces $x$ with $x - 3$, and a shift down by $4$ subtracts $4$, giving $y = (x-3)^2 - 4$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 152,
    "question": "Which expression is equivalent to $4x^2 - 12x + 9$?",
    "options": [
      "$(2x-3)^2$",
      "$(2x+3)^2$",
      "$(4x-3)(x-3)$",
      "$(2x-3)(2x+3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Recognize a perfect square: $(2x)^2 - 2(2x)(3) + 3^2 = (2x - 3)^2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 153,
    "question": "Factor $x^3 - 2x^2 - 9x + 18$ completely.",
    "options": [
      "$(x+2)(x-3)(x+3)$",
      "$(x-2)(x-3)(x+3)$",
      "$(x-2)(x-3)^2$",
      "$(x-2)(x+3)^2$"
    ],
    "correctAnswer": 1,
    "explanation": "Group: $x^2(x-2) - 9(x-2) = (x-2)(x^2 - 9) = (x-2)(x-3)(x+3)$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 154,
    "question": "A radioactive sample has a half-life of $8$ days. If $240$ grams are present initially, how much remains after $24$ days?",
    "options": [
      "$60$ grams",
      "$15$ grams",
      "$80$ grams",
      "$30$ grams"
    ],
    "correctAnswer": 3,
    "explanation": "In $24$ days there are $24/8 = 3$ half-lives, so the amount remaining is $240 \\cdot \\left(\\tfrac{1}{2}\\right)^3 = \\dfrac{240}{8} = 30$ grams.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 155,
    "question": "An investment of $\\$1000$ earns $6\\%$ annual interest compounded quarterly. Which expression gives its value after $5$ years?",
    "options": [
      "$1000(1.06)^5$",
      "$1000(1.015)^{20}$",
      "$1000(1.06)^{20}$",
      "$1000(1.24)^5$"
    ],
    "correctAnswer": 1,
    "explanation": "Using $A = P\\left(1 + \\tfrac{r}{n}\\right)^{nt}$ with $r = 0.06$, $n = 4$, $t = 5$: $A = 1000\\left(1 + \\tfrac{0.06}{4}\\right)^{4 \\cdot 5} = 1000(1.015)^{20}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 156,
    "question": "Solve $9^x = 27^{x-1}$ for $x$.",
    "options": [
      "$1$",
      "$9$",
      "$3$",
      "$6$"
    ],
    "correctAnswer": 2,
    "explanation": "Write both sides with base $3$: $3^{2x} = 3^{3(x-1)}$. Equating exponents, $2x = 3x - 3 \\Rightarrow x = 3$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 157,
    "question": "What is the sum of all solutions to $\\dfrac{6}{x} = x - 1$?",
    "options": [
      "$-1$",
      "$5$",
      "$6$",
      "$1$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiplying by $x$ gives $6 = x^2 - x$, so $x^2 - x - 6 = 0$. By Vieta's formulas the sum of the roots is $-\\tfrac{-1}{1} = 1$ (the roots are $3$ and $-2$).",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 158,
    "question": "Simplify the compound fraction $\\dfrac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$.",
    "options": [
      "$-\\dfrac{1}{3x}$",
      "$\\dfrac{1}{3x}$",
      "$\\dfrac{1}{3x(x-3)}$",
      "$-\\dfrac{1}{3x^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "The numerator is $\\dfrac{1}{x} - \\dfrac{1}{3} = \\dfrac{3 - x}{3x}$. Dividing by $x - 3$: $\\dfrac{3 - x}{3x(x-3)} = \\dfrac{-(x-3)}{3x(x-3)} = -\\dfrac{1}{3x}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 159,
    "question": "If $f(x) = 2x - 1$ and $g(x) = x^2 + 3$, what is $g(f(x))$?",
    "options": [
      "$2x^2 + 5$",
      "$4x^2 + 4$",
      "$4x^2 - 4x + 2$",
      "$4x^2 - 4x + 4$"
    ],
    "correctAnswer": 3,
    "explanation": "$g(f(x)) = (2x - 1)^2 + 3 = 4x^2 - 4x + 1 + 3 = 4x^2 - 4x + 4$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 160,
    "question": "What is the only valid solution to $x = \\sqrt{x + 6}$?",
    "options": [
      "$x = -2$",
      "$x = 3 \\text{ or } x = -2$",
      "$x = 3$",
      "No real solution"
    ],
    "correctAnswer": 2,
    "explanation": "Squaring gives $x^2 = x + 6 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x-3)(x+2) = 0$, so $x = 3$ or $x = -2$. Checking, $x = -2$ gives $\\sqrt{4} = 2 \\neq -2$, so it is extraneous; only $x = 3$ is valid.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 161,
    "question": "Which expression is equivalent to $3x(x + 4)$?",
    "options": [
      "$3x^2 + 12x$",
      "$3x^2 + 4x$",
      "$3x + 12x$",
      "$3x^2 + 4$"
    ],
    "correctAnswer": 0,
    "explanation": "Distribute $3x$ across both terms: $3x \\cdot x + 3x \\cdot 4 = 3x^2 + 12x$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 162,
    "question": "Which of the following is equivalent to $\\sqrt{x}$ for $x \\ge 0$?",
    "options": [
      "$x^2$",
      "$x^{1/2}$",
      "$x^{-1/2}$",
      "$2x$"
    ],
    "correctAnswer": 1,
    "explanation": "A square root is a power of one-half: $\\sqrt{x} = x^{1/2}$. The negative exponent $x^{-1/2}$ would mean $\\frac{1}{\\sqrt{x}}$.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 163,
    "question": "The graph of $y = x^2 - 4x + 7$ is drawn in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept?",
    "options": [
      "$-4$",
      "$4$",
      "$0$",
      "$7$"
    ],
    "correctAnswer": 3,
    "explanation": "The $y$-intercept occurs where $x = 0$: $y = (0)^2 - 4(0) + 7 = 7$. The constant term of a polynomial gives the $y$-intercept.",
    "difficulty": "easy",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 164,
    "question": "Which expression is equivalent to $(3x^2 + 2x - 5) - (x^2 - 4x + 1)$?",
    "options": [
      "$2x^2 - 2x - 4$",
      "$2x^2 + 6x - 6$",
      "$2x^2 + 6x - 4$",
      "$2x^2 - 2x - 6$"
    ],
    "correctAnswer": 1,
    "explanation": "Distribute the negative sign and combine like terms: $(3x^2 - x^2) + (2x + 4x) + (-5 - 1) = 2x^2 + 6x - 6$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 165,
    "question": "The function $f$ is defined by $f(x) = (x - 2)(x + 5)$. At which values of $x$ does the graph of $f$ cross the $x$-axis?",
    "options": [
      "$x = -2$ and $x = 5$",
      "$x = 2$ and $x = 5$",
      "$x = 2$ and $x = -5$",
      "$x = -2$ and $x = -5$"
    ],
    "correctAnswer": 2,
    "explanation": "The graph crosses the $x$-axis where $f(x) = 0$. Setting each factor to zero: $x - 2 = 0 \\Rightarrow x = 2$ and $x + 5 = 0 \\Rightarrow x = -5$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 166,
    "question": "Which of the following is equivalent to $x^{3/4}$ for $x > 0$?",
    "options": [
      "$\\sqrt[3]{x^4}$",
      "$\\sqrt{x^3}$",
      "$4\\sqrt[3]{x}$",
      "$\\sqrt[4]{x^3}$"
    ],
    "correctAnswer": 3,
    "explanation": "A rational exponent converts to a radical as $x^{m/n} = \\sqrt[n]{x^m}$. Here the denominator $4$ is the index and the numerator $3$ is the power: $x^{3/4} = \\sqrt[4]{x^3}$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 167,
    "question": "A ball is thrown upward and its height in feet after $t$ seconds is $h(t) = -16t^2 + 24t + 5$. What does the constant term $5$ represent?",
    "options": [
      "The maximum height of the ball",
      "The time when the ball lands",
      "The height of the ball when it is released",
      "The height of the ball after $1$ second"
    ],
    "correctAnswer": 2,
    "explanation": "The constant term is the value of $h$ at $t = 0$: $h(0) = 5$. This is the height at the moment of release, before any time has elapsed.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 168,
    "question": "The area of a circle is given by $A = \\pi r^2$. Which equation correctly solves for the radius $r$ in terms of $A$, assuming $r > 0$?",
    "options": [
      "$r = \\dfrac{A}{\\pi}$",
      "$r = \\sqrt{\\dfrac{A}{\\pi}}$",
      "$r = \\dfrac{\\sqrt{A}}{\\pi}$",
      "$r = \\sqrt{A\\pi}$"
    ],
    "correctAnswer": 1,
    "explanation": "Divide both sides by $\\pi$ to get $r^2 = \\dfrac{A}{\\pi}$, then take the positive square root: $r = \\sqrt{\\dfrac{A}{\\pi}}$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 169,
    "question": "Which of the following is equivalent to $2x^2 + 8x$?",
    "options": [
      "$2x(x + 6)$",
      "$x(2x + 4)$",
      "$4x(x + 2)$",
      "$2x(x + 4)$"
    ],
    "correctAnswer": 3,
    "explanation": "The greatest common factor of $2x^2$ and $8x$ is $2x$. Factoring it out gives $2x(x + 4)$, since $2x \\cdot x = 2x^2$ and $2x \\cdot 4 = 8x$.",
    "difficulty": "medium",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 170,
    "question": "Which of the following is equivalent to $x^2 + 8x + 10$?",
    "options": [
      "$(x + 4)^2 + 10$",
      "$(x - 4)^2 - 6$",
      "$(x + 4)^2 - 6$",
      "$(x + 4)^2 + 6$"
    ],
    "correctAnswer": 2,
    "explanation": "Complete the square: half of $8$ is $4$, and $(x + 4)^2 = x^2 + 8x + 16$. To keep the constant at $10$, subtract $6$: $x^2 + 8x + 10 = (x + 4)^2 - 6$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 171,
    "question": "Which expression is equivalent to $(2x - 3)(x^2 + 4x - 1)$?",
    "options": [
      "$2x^3 + 5x^2 - 14x + 3$",
      "$2x^3 + 5x^2 - 2x + 3$",
      "$2x^3 + 11x^2 - 14x + 3$",
      "$2x^3 + 5x^2 - 14x - 3$"
    ],
    "correctAnswer": 0,
    "explanation": "Distribute each term: $2x(x^2 + 4x - 1) = 2x^3 + 8x^2 - 2x$ and $-3(x^2 + 4x - 1) = -3x^2 - 12x + 3$. Adding gives $2x^3 + 5x^2 - 14x + 3$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 172,
    "question": "The function is defined by $f(x) = -3x^4 + 2x^2 - 5$. What is the end behavior of the graph as $x \\to +\\infty$?",
    "options": [
      "$f(x) \\to +\\infty$",
      "$f(x) \\to -5$",
      "$f(x) \\to 0$",
      "$f(x) \\to -\\infty$"
    ],
    "correctAnswer": 3,
    "explanation": "End behavior is governed by the leading term $-3x^4$. As $x \\to +\\infty$, $x^4 \\to +\\infty$, so $-3x^4 \\to -\\infty$ and thus $f(x) \\to -\\infty$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 173,
    "question": "The expression $200 \\cdot 3^{t/5}$ can be written in the form $200 \\cdot b^t$. What is the value of $b$?",
    "options": [
      "$3^5$",
      "$\\dfrac{3}{5}$",
      "$\\sqrt[5]{3}$",
      "$\\sqrt{3}$"
    ],
    "correctAnswer": 2,
    "explanation": "Rewrite the exponent using power rules: $3^{t/5} = \\left(3^{1/5}\\right)^t$. Therefore $b = 3^{1/5} = \\sqrt[5]{3}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Equivalent expressions"
  },
  {
    "id": 174,
    "question": "For what value of $k$ is $(x - 3)$ a factor of the polynomial $x^3 - 2x^2 + kx - 3$?",
    "options": [
      "$-2$",
      "$2$",
      "$-4$",
      "$6$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Factor Theorem, $(x - 3)$ is a factor exactly when $P(3) = 0$: $27 - 2(9) + 3k - 3 = 0 \\Rightarrow 27 - 18 + 3k - 3 = 0 \\Rightarrow 6 + 3k = 0 \\Rightarrow k = -2$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 175,
    "question": "The volume of a cone is $V = \\dfrac{1}{3}\\pi r^2 h$. Which expression gives the radius $r$ in terms of $V$ and $h$, assuming $r > 0$ and $h > 0$?",
    "options": [
      "$r = \\dfrac{3V}{\\pi h}$",
      "$r = \\sqrt{\\dfrac{V}{3\\pi h}}$",
      "$r = \\dfrac{\\sqrt{3V}}{\\pi h}$",
      "$r = \\sqrt{\\dfrac{3V}{\\pi h}}$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply both sides by $3$: $3V = \\pi r^2 h$. Divide by $\\pi h$: $r^2 = \\dfrac{3V}{\\pi h}$. Take the positive square root: $r = \\sqrt{\\dfrac{3V}{\\pi h}}$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear equations in one variable and systems of equations in two variables"
  },
  {
    "id": 176,
    "question": "A shop's daily profit, in dollars, is modeled by $P(x) = -2(x - 25)^2 + 800$, where $x$ is the selling price in dollars. Which statement best interprets the vertex of this model?",
    "options": [
      "The maximum daily profit is $\\$25$.",
      "The profit is $\\$800$ when the price is $\\$0$.",
      "The maximum daily profit is $\\$800$, reached when the price is $\\$25$.",
      "The shop breaks even when the price is $\\$25$."
    ],
    "correctAnswer": 2,
    "explanation": "Because the coefficient $-2$ is negative, the parabola opens downward and the vertex $(25, 800)$ is a maximum. So the greatest daily profit of $\\$800$ occurs at a selling price of $\\$25$.",
    "difficulty": "hard",
    "area": "advanced",
    "skill": "Nonlinear functions"
  },
  {
    "id": 177,
    "question": "A car travels $150$ miles using $5$ gallons of gas. At this rate, how many miles can it travel on $8$ gallons?",
    "options": [
      "$120$",
      "$180$",
      "$210$",
      "$240$"
    ],
    "correctAnswer": 3,
    "explanation": "The rate is $150 \\div 5 = 30$ miles per gallon. On $8$ gallons: $30 \\times 8 = 240$ miles.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 178,
    "question": "The ratio of boys to girls in a class is $3:4$. If there are $12$ boys, how many girls are there?",
    "options": [
      "$9$",
      "$16$",
      "$14$",
      "$18$"
    ],
    "correctAnswer": 1,
    "explanation": "The scale factor is $12 \\div 3 = 4$. Girls: $4 \\times 4 = 16$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 179,
    "question": "A jacket priced at $80$ dollars is marked up by $15\\%$. What is the new price in dollars?",
    "options": [
      "$95$",
      "$68$",
      "$92$",
      "$88$"
    ],
    "correctAnswer": 2,
    "explanation": "$15\\%$ of $80$ is $12$. New price: $80 + 12 = 92$ dollars.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 180,
    "question": "The data set $\\{4, 7, 9, 4, 6\\}$ has what mode?",
    "options": [
      "$6$",
      "$4$",
      "$7$",
      "$9$"
    ],
    "correctAnswer": 1,
    "explanation": "The mode is the most frequent value. $4$ appears twice; all others appear once, so the mode is $4$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 181,
    "question": "A map has a scale where $1$ inch represents $20$ miles. How many miles do $3.5$ inches represent?",
    "options": [
      "$60$",
      "$50$",
      "$80$",
      "$70$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply the distance by the scale: $3.5 \\times 20 = 70$ miles.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 182,
    "question": "A recipe requires $2$ eggs for every $5$ pancakes. How many eggs are needed for $20$ pancakes?",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$10$"
    ],
    "correctAnswer": 2,
    "explanation": "The scale factor is $20 \\div 5 = 4$. Eggs needed: $2 \\times 4 = 8$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 183,
    "question": "What is the median of the data set $\\{12, 5, 8, 20, 15\\}$?",
    "options": [
      "$8$",
      "$15$",
      "$12$",
      "$10$"
    ],
    "correctAnswer": 2,
    "explanation": "Ordered: $5, 8, 12, 15, 20$. The middle value is $12$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 184,
    "question": "A store sells $60$ items in one day. If $25\\%$ of them are returned, how many items are returned?",
    "options": [
      "$15$",
      "$20$",
      "$12$",
      "$18$"
    ],
    "correctAnswer": 0,
    "explanation": "$25\\%$ of $60$ is $0.25 \\times 60 = 15$ items.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 185,
    "question": "A runner completes a $400$-meter lap in $80$ seconds. What is her average speed in meters per second?",
    "options": [
      "$4$",
      "$6$",
      "$5$",
      "$8$"
    ],
    "correctAnswer": 2,
    "explanation": "Speed equals distance over time: $400 \\div 80 = 5$ meters per second.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 186,
    "question": "In a bag of $50$ marbles, $10$ are red. What is the probability of drawing a red marble at random?",
    "options": [
      "$\\frac{1}{10}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{5}$"
    ],
    "correctAnswer": 3,
    "explanation": "Probability is favorable over total: $\\frac{10}{50} = \\frac{1}{5}$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 187,
    "question": "A quantity increases from $200$ to $250$. What is the percent increase?",
    "options": [
      "$20\\%$",
      "$25\\%$",
      "$50\\%$",
      "$15\\%$"
    ],
    "correctAnswer": 1,
    "explanation": "Percent change is $\\frac{250 - 200}{200} \\times 100 = \\frac{50}{200} \\times 100 = 25\\%$.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 188,
    "question": "A solution is made by mixing $3$ liters of water with $1$ liter of juice concentrate. To make $16$ liters of the same solution, how many liters of concentrate are needed?",
    "options": [
      "$12$",
      "$8$",
      "$3$",
      "$4$"
    ],
    "correctAnswer": 3,
    "explanation": "Concentrate is $\\frac{1}{4}$ of the mixture. For $16$ liters: $\\frac{1}{4} \\times 16 = 4$ liters.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 189,
    "question": "A car travels at $60$ miles per hour. How many feet does it travel in one second? (Use $1$ mile $= 5280$ feet.)",
    "options": [
      "$72$",
      "$88$",
      "$100$",
      "$60$"
    ],
    "correctAnswer": 1,
    "explanation": "$60$ mph $= \\frac{60 \\times 5280}{3600}$ feet per second $= \\frac{316800}{3600} = 88$ feet per second.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 190,
    "question": "The mean of five numbers is $14$. Four of the numbers are $10, 12, 16,$ and $18$. What is the fifth number?",
    "options": [
      "$16$",
      "$12$",
      "$14$",
      "$20$"
    ],
    "correctAnswer": 2,
    "explanation": "The total sum is $5 \\times 14 = 70$. The four known numbers sum to $56$, so the fifth is $70 - 56 = 14$.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 191,
    "question": "A table shows survey responses: $45$ people prefer tea, $30$ prefer coffee, and $25$ prefer water. What percent of respondents prefer coffee?",
    "options": [
      "$25\\%$",
      "$30\\%$",
      "$45\\%$",
      "$33\\%$"
    ],
    "correctAnswer": 1,
    "explanation": "Total respondents: $45 + 30 + 25 = 100$. Coffee percent: $\\frac{30}{100} \\times 100 = 30\\%$.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 192,
    "question": "A shirt's price is reduced by $20\\%$, and the new price is $32$ dollars. What was the original price in dollars?",
    "options": [
      "$38.40$",
      "$52$",
      "$40$",
      "$36$"
    ],
    "correctAnswer": 2,
    "explanation": "The sale price is $80\\%$ of the original: $0.80 \\times x = 32$, so $x = 32 \\div 0.80 = 40$ dollars.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 193,
    "question": "A scatterplot of study hours versus test scores has a line of best fit $y = 5x + 60$, where $x$ is hours studied and $y$ is the score. What score does the model predict for a student who studies $6$ hours?",
    "options": [
      "$66$",
      "$85$",
      "$95$",
      "$90$"
    ],
    "correctAnswer": 3,
    "explanation": "Substitute $x = 6$: $y = 5(6) + 60 = 30 + 60 = 90$.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 194,
    "question": "A two-way table shows that of $80$ students, $50$ play a sport and, of those, $30$ also play an instrument. What fraction of the sport-playing students also play an instrument?",
    "options": [
      "$\\frac{3}{8}$",
      "$\\frac{3}{5}$",
      "$\\frac{5}{8}$",
      "$\\frac{2}{5}$"
    ],
    "correctAnswer": 1,
    "explanation": "Of the $50$ sport players, $30$ play an instrument: $\\frac{30}{50} = \\frac{3}{5}$.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 195,
    "question": "Two data sets have the same mean of $50$. Set A is $\\{48, 49, 50, 51, 52\\}$ and Set B is $\\{30, 40, 50, 60, 70\\}$. Which statement is true?",
    "options": [
      "Set A has a greater standard deviation",
      "They have equal standard deviations",
      "Set B has a greater standard deviation",
      "Set A has a greater mean"
    ],
    "correctAnswer": 2,
    "explanation": "Standard deviation measures spread. Set B's values are much farther from the mean than Set A's, so Set B has the greater standard deviation.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 196,
    "question": "A recipe for $4$ servings uses $\\frac{3}{4}$ cup of sugar. How much sugar is needed for $10$ servings?",
    "options": [
      "$\\frac{3}{2}$ cups",
      "$2$ cups",
      "$\\frac{15}{8}$ cups",
      "$\\frac{7}{4}$ cups"
    ],
    "correctAnswer": 2,
    "explanation": "Sugar per serving is $\\frac{3}{4} \\div 4 = \\frac{3}{16}$ cup. For $10$ servings: $\\frac{3}{16} \\times 10 = \\frac{30}{16} = \\frac{15}{8}$ cups.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 197,
    "question": "A population of bacteria grows by $10\\%$ each hour. If it starts at $500$, what is the population after $2$ hours?",
    "options": [
      "$600$",
      "$605$",
      "$610$",
      "$550$"
    ],
    "correctAnswer": 1,
    "explanation": "After one hour: $500 \\times 1.10 = 550$. After two hours: $550 \\times 1.10 = 605$. Compound growth, not $500 + 100$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 198,
    "question": "An item's price increases by $20\\%$, then the new price decreases by $20\\%$. Compared to the original, the final price is:",
    "options": [
      "The same",
      "$4\\%$ higher",
      "$4\\%$ lower",
      "$20\\%$ lower"
    ],
    "correctAnswer": 2,
    "explanation": "Final factor is $1.20 \\times 0.80 = 0.96$, so the price is $96\\%$ of the original, a $4\\%$ decrease.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 199,
    "question": "A two-way table shows $120$ people: $70$ own a dog and $40$ of the dog owners also own a cat; $20$ of the non-dog owners own a cat. If a randomly chosen person owns a cat, what is the probability they also own a dog?",
    "options": [
      "$\\frac{4}{7}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$"
    ],
    "correctAnswer": 3,
    "explanation": "Total cat owners: $40 + 20 = 60$. Of those, $40$ own a dog: $\\frac{40}{60} = \\frac{2}{3}$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 200,
    "question": "In a scatterplot relating temperature (degrees) to ice cream sales (dollars), the line of best fit is $y = 8x - 40$. What is the best interpretation of the slope?",
    "options": [
      "Each additional degree is associated with an $8$-dollar increase in predicted sales",
      "Sales start at $8$ dollars",
      "Each additional degree is associated with a $40$-dollar decrease in sales",
      "Every $8$ degrees adds $1$ dollar in sales"
    ],
    "correctAnswer": 0,
    "explanation": "The slope $8$ is the change in $y$ per unit change in $x$: each extra degree predicts an $8$-dollar rise in sales. The $-40$ is the intercept, not the slope.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 201,
    "question": "A city surveys shoppers exiting a luxury store and concludes the average city resident spends $300$ dollars per week on clothing. Why is this inference likely invalid?",
    "options": [
      "The sample size is too large",
      "The sample is not representative of all city residents",
      "Averages cannot measure spending",
      "The survey should have used the median instead"
    ],
    "correctAnswer": 1,
    "explanation": "Sampling only luxury-store shoppers introduces bias; they are not representative of all residents, so the conclusion cannot be generalized.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Evaluating statistical claims: observational studies and experiments"
  },
  {
    "id": 202,
    "question": "A mixture is $40\\%$ acid. How many liters of pure acid must be added to $20$ liters of this mixture to make it $50\\%$ acid?",
    "options": [
      "$2$",
      "$5$",
      "$4$",
      "$10$"
    ],
    "correctAnswer": 2,
    "explanation": "Initial acid: $0.40 \\times 20 = 8$ liters. Adding $x$ liters of acid: $\\frac{8 + x}{20 + x} = 0.50$. Solving, $8 + x = 10 + 0.5x$, so $0.5x = 2$ and $x = 4$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 203,
    "question": "The mean of a data set of $6$ values is $15$. If a seventh value of $29$ is added, what is the new mean?",
    "options": [
      "$16$",
      "$17$",
      "$22$",
      "$15$"
    ],
    "correctAnswer": 1,
    "explanation": "Original sum: $6 \\times 15 = 90$. New sum: $90 + 29 = 119$. New mean: $\\frac{119}{7} = 17$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 204,
    "question": "A store's revenue rose $50\\%$ from Year 1 to Year 2, then fell $40\\%$ from Year 2 to Year 3. If Year 1 revenue was $200{,}000$ dollars, what was Year 3 revenue in dollars?",
    "options": [
      "$220{,}000$",
      "$120{,}000$",
      "$200{,}000$",
      "$180{,}000$"
    ],
    "correctAnswer": 3,
    "explanation": "Year 2: $200{,}000 \\times 1.50 = 300{,}000$. Year 3: $300{,}000 \\times 0.60 = 180{,}000$ dollars.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 205,
    "question": "A bag has $4$ red and $6$ blue marbles. Two marbles are drawn without replacement. What is the probability both are red?",
    "options": [
      "$\\frac{4}{25}$",
      "$\\frac{1}{5}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{6}$"
    ],
    "correctAnswer": 2,
    "explanation": "First red: $\\frac{4}{10}$. Second red without replacement: $\\frac{3}{9}$. Product: $\\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 206,
    "question": "A researcher randomly samples $200$ voters and finds $110$ support a measure, with a reported margin of error of $\\pm 5$ percentage points. Which conclusion is most appropriate?",
    "options": [
      "Exactly $55\\%$ of all voters support the measure",
      "The true support is plausibly between $50\\%$ and $60\\%$",
      "Fewer than half of all voters support the measure",
      "The sample is biased and unusable"
    ],
    "correctAnswer": 1,
    "explanation": "The sample proportion is $\\frac{110}{200} = 55\\%$. With a $\\pm 5$-point margin, the plausible range for true support is $50\\%$ to $60\\%$; the exact value is not known.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Inference from sample statistics and margin of error"
  },
  {
    "id": 207,
    "question": "A machine fills 24 bottles in 3 minutes at a constant rate. At this rate, how many bottles does it fill in 10 minutes?",
    "options": [
      "80",
      "72",
      "240",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "The rate is $24 \\div 3 = 8$ bottles per minute. In 10 minutes the machine fills $8 \\times 10 = 80$ bottles.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 208,
    "question": "The value of a car is modeled by $V = 20000(0.85)^t$, where $t$ is the number of years after purchase. Which statement is true?",
    "options": [
      "The car loses 85% of its value each year.",
      "The car's value starts at 850 dollars.",
      "The car loses 15 dollars in value each year.",
      "The car loses 15% of its value each year."
    ],
    "correctAnswer": 3,
    "explanation": "In $V = a(b)^t$, a base of $0.85$ means each year the value is multiplied by $0.85$, a loss of 15% per year; the starting value is $a = 20000$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 209,
    "question": "A survey of 100 students recorded how they travel to school: 40 walk and 60 ride the bus. If one of the 100 students is chosen at random, what is the probability that the student walks to school?",
    "options": [
      "0.6",
      "0.4",
      "0.04",
      "0.67"
    ],
    "correctAnswer": 1,
    "explanation": "There are 40 walkers out of 100 students, so the probability is $40/100 = 0.4$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 210,
    "question": "Which of the following situations is best modeled by a linear function?",
    "options": [
      "A savings account that increases by 3% each year.",
      "A colony of bacteria that doubles every hour.",
      "A savings account that increases by 50 dollars each month.",
      "An investment that triples every decade."
    ],
    "correctAnswer": 2,
    "explanation": "Adding a constant amount (50 dollars each month) is linear. A constant percent (3% per year), doubling, or tripling all describe exponential change.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 211,
    "question": "After a 20% increase, the price of a jacket is 60 dollars. What was the original price?",
    "options": [
      "48 dollars",
      "72 dollars",
      "40 dollars",
      "50 dollars"
    ],
    "correctAnswer": 3,
    "explanation": "Let $p$ be the original price. Then $1.20p = 60$, so $p = 60 \\div 1.20 = 50$ dollars.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 212,
    "question": "A line of best fit relating hours studied $x$ to a test score $y$ is $y = 6x + 52$. Which is the best interpretation of the number 6 in this model?",
    "options": [
      "The predicted increase in test score for each additional hour studied.",
      "The predicted test score of a student who studies 0 hours.",
      "The maximum possible test score.",
      "The number of hours needed to reach a score of 100."
    ],
    "correctAnswer": 0,
    "explanation": "In $y = 6x + 52$, the slope 6 is the change in $y$ per unit change in $x$: each additional hour studied raises the predicted score by 6. The 52 is the intercept (score at 0 hours).",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 213,
    "question": "In a class, 10 students scored an average of 70 on a test and 15 students scored an average of 80. What is the average score of all 25 students?",
    "options": [
      "75",
      "76",
      "74",
      "77"
    ],
    "correctAnswer": 1,
    "explanation": "Weighted mean $= \\frac{10(70) + 15(80)}{25} = \\frac{1900}{25} = 76$. A plain average of 70 and 80 (which is 75) ignores the different group sizes.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 214,
    "question": "Data set A is {50, 50, 50, 50, 50} and data set B is {30, 40, 50, 60, 70}. Both have a mean of 50. Which statement correctly compares their standard deviations?",
    "options": [
      "Data set A has the greater standard deviation because it has identical values.",
      "The two data sets have equal standard deviations because they have the same mean.",
      "Data set B has the greater standard deviation because its values are more spread out from the mean.",
      "Data set B has the smaller standard deviation because it has a larger range."
    ],
    "correctAnswer": 2,
    "explanation": "Both sets have mean 50, so center is not the issue. Set B's values sit farther from 50, giving greater spread and thus greater standard deviation.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 215,
    "question": "A quality inspector randomly selects 150 light bulbs from a factory's daily production of 12,000 bulbs and finds that 6 are defective. Which is the most reasonable conclusion?",
    "options": [
      "Exactly 480 bulbs produced that day are defective.",
      "Only the 150 bulbs tested are defective.",
      "The defect rate will be exactly 4% every day.",
      "About 4% of the bulbs produced that day are likely defective."
    ],
    "correctAnswer": 3,
    "explanation": "A random sample lets you generalize to the population, but only approximately: about 4% (6 out of 150) suggests roughly 4% of the day's bulbs are defective, not an exact count.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Inference from sample statistics and margin of error"
  },
  {
    "id": 216,
    "question": "A town's population is currently 500 and grows by 8% each year. Which expression gives the population $t$ years from now?",
    "options": [
      "$500(1.08)^t$",
      "$500(0.08)^t$",
      "$500 + 40t$",
      "$500(1.8)^t$"
    ],
    "correctAnswer": 0,
    "explanation": "Growth of 8% per year multiplies the population by $1.08$ each year: $500(1.08)^t$. The form $500 + 40t$ would be linear (a constant 40 added per year), not exponential.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 217,
    "question": "The price of a stock increased by 20% one day and then decreased by 20% the next day. Compared to its original price, the stock's final price is:",
    "options": [
      "exactly equal to the original price.",
      "4% less than the original price.",
      "4% more than the original price.",
      "20% less than the original price."
    ],
    "correctAnswer": 1,
    "explanation": "The final factor is $1.20 \\times 0.80 = 0.96$, so the price is 96% of the original, that is, 4% less. The percents do not cancel because they apply to different bases.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 218,
    "question": "A store sells an item for 91 dollars after adding a 30% markup to the price it paid for the item. How much did the store pay for the item?",
    "options": [
      "63.70 dollars",
      "61 dollars",
      "70 dollars",
      "118.30 dollars"
    ],
    "correctAnswer": 2,
    "explanation": "Let $c$ be the cost. A 30% markup gives $1.30c = 91$, so $c = 91 \\div 1.30 = 70$ dollars.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 219,
    "question": "A biologist models the relationship between water temperature $x$ (in degrees Celsius) and the number of algae $y$ (in thousands) in a pond as $y = 1.5x + 8$. What does the value 8 represent in this model?",
    "options": [
      "The predicted increase in algae (in thousands) for each 1 degree increase in temperature.",
      "The water temperature at which there are no algae.",
      "The maximum number of algae the pond can support.",
      "The predicted number of algae (in thousands) when the temperature is 0 degrees Celsius."
    ],
    "correctAnswer": 3,
    "explanation": "The intercept 8 is the predicted $y$-value when $x = 0$: about 8 thousand algae at 0 degrees Celsius. The slope $1.5$ (not 8) gives the change per degree.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 220,
    "question": "A line of best fit predicts that a house of a certain size will sell for 240,000 dollars. The house actually sold for 265,000 dollars. What is true about the residual for this data point?",
    "options": [
      "The residual is positive because the actual price is greater than the predicted price.",
      "The residual is negative because the actual price is greater than the predicted price.",
      "The residual is positive because the predicted price is greater than the actual price.",
      "The residual is zero because the point lies on the line of best fit."
    ],
    "correctAnswer": 0,
    "explanation": "Residual $=$ actual $-$ predicted $= 265000 - 240000 = 25000 > 0$. A positive residual means the actual value lies above the line.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 221,
    "question": "Two data sets each contain 6 values. Data set X is {19, 20, 20, 21, 20, 20} and data set Y is {5, 35, 18, 3, 40, 19}. Which data set has the greater standard deviation, and why?",
    "options": [
      "Data set X, because its values are clustered close together.",
      "Data set Y, because its values are more spread out from its mean.",
      "They have equal standard deviations because each has 6 values.",
      "Data set X, because it contains repeated values."
    ],
    "correctAnswer": 1,
    "explanation": "Standard deviation measures spread about the mean. Set Y's values range widely (from 3 to 40), while set X clusters near 20, so Y has the greater standard deviation.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 222,
    "question": "A data set consists of the values {12, 14, 15, 16, 18}. A new value, 90, is added to the data set. Which statement best describes the effect on the mean and the median?",
    "options": [
      "Both the mean and the median remain unchanged.",
      "The median increases much more than the mean.",
      "The mean increases much more than the median.",
      "The mean and the median increase by equal amounts."
    ],
    "correctAnswer": 2,
    "explanation": "Adding 90 barely shifts the median (from 15 to 15.5) but pulls the mean sharply upward (from 15 to 27.5). The mean is far more sensitive to an outlier.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 223,
    "question": "In a study, 45% of a random sample of voters favored a proposal, with a margin of error of 3 percentage points. Which statement best describes what this margin of error indicates?",
    "options": [
      "Exactly 3% of the surveyed voters were undecided.",
      "Exactly 45% of all voters favor the proposal.",
      "The sample size should be increased by 3%.",
      "The true percentage of all voters who favor the proposal is plausibly between 42% and 48%."
    ],
    "correctAnswer": 3,
    "explanation": "With a margin of error of 3 points around 45%, the plausible range for the true population percentage is $45 \\pm 3$, or 42% to 48%. It does not pin down an exact value.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Inference from sample statistics and margin of error"
  },
  {
    "id": 224,
    "question": "A pump moves water at a constant rate of 15 liters per minute. There are 1000 liters in one cubic meter. At this rate, how many cubic meters of water does the pump move in 2 hours?",
    "options": [
      "1.8",
      "0.9",
      "18",
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "$15$ liters/min $\\times 120$ min $= 1800$ liters. Dividing by 1000 liters per cubic meter gives $1.8$ cubic meters.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 225,
    "question": "A chemist mixes a solution that is 40% acid with a solution that is 10% acid to make 30 liters of a solution that is 20% acid. How many liters of the 40% acid solution are used?",
    "options": [
      "20 liters",
      "10 liters",
      "15 liters",
      "12 liters"
    ],
    "correctAnswer": 1,
    "explanation": "Let $x$ be liters of the 40% solution. Then $0.40x + 0.10(30 - x) = 0.20(30)$, so $0.30x = 3$ and $x = 10$ liters.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 226,
    "question": "A study recorded the exercise habits of 400 adults. Among the 240 adults under age 40, 168 exercise regularly and 72 do not. Among the 160 adults age 40 or older, 80 exercise regularly and 80 do not. If an adult who exercises regularly is selected at random, what is the probability that the adult is age 40 or older?",
    "options": [
      "$\\frac{80}{160}$",
      "$\\frac{80}{400}$",
      "$\\frac{80}{248}$",
      "$\\frac{168}{248}$"
    ],
    "correctAnswer": 2,
    "explanation": "Condition on the 248 adults who exercise regularly ($168 + 80$). Of these, 80 are age 40 or older, so the probability is $\\frac{80}{248}$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 227,
    "question": "A data set is summarized by the five-number summary: minimum 4, first quartile ($Q_1$) 10, median 15, third quartile ($Q_3$) 22, maximum 30. What is the interquartile range (IQR) of the data set?",
    "options": [
      "26",
      "7",
      "12",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "The interquartile range is $Q_3 - Q_1 = 22 - 10 = 12$. The range (maximum minus minimum) would instead be $30 - 4 = 26$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 228,
    "question": "A recipe that serves 4 people requires 3 cups of flour. Keeping the same ratio of ingredients, how many cups of flour are needed to serve 12 people?",
    "options": [
      "6 cups",
      "36 cups",
      "11 cups",
      "9 cups"
    ],
    "correctAnswer": 3,
    "explanation": "Serving 12 people is $12 \\div 4 = 3$ times the original recipe, so the flour needed is $3 \\times 3 = 9$ cups.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 229,
    "question": "Every value in a data set is multiplied by 4. If the original mean was 20, what is the mean of the new data set?",
    "options": [
      "24",
      "80",
      "20",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplying every value by 4 multiplies the mean by 4 as well: $20 \\times 4 = 80$.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 230,
    "question": "A souvenir in a European shop is priced at 18 euros. If 1 US dollar is worth 0.90 euros, what is the price of the souvenir in US dollars?",
    "options": [
      "16.20 dollars",
      "18.90 dollars",
      "20 dollars",
      "22 dollars"
    ],
    "correctAnswer": 2,
    "explanation": "Since 1 dollar $= 0.90$ euros, dollars $=$ euros $\\div 0.90 = 18 \\div 0.90 = 20$ dollars. Multiplying instead ($18 \\times 0.90 = 16.20$) converts in the wrong direction.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 231,
    "question": "Working alone, machine A can complete a job in 6 hours and machine B can complete the same job in 3 hours. Working together at their constant rates, how long will the two machines take to complete the job?",
    "options": [
      "4.5 hours",
      "9 hours",
      "1.5 hours",
      "2 hours"
    ],
    "correctAnswer": 3,
    "explanation": "Their combined rate is $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ job per hour, so together they finish in $2$ hours, faster than either machine alone.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 232,
    "question": "A student measured the mass of an object as 48 grams, but its actual mass is 50 grams. What is the percent error of the measurement?",
    "options": [
      "4%",
      "2%",
      "5%",
      "96%"
    ],
    "correctAnswer": 0,
    "explanation": "Percent error $= \\frac{|\\text{measured} - \\text{actual}|}{\\text{actual}} \\times 100 = \\frac{|48 - 50|}{50} \\times 100 = 4$%.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 233,
    "question": "The measures of the three angles of a triangle are in the ratio $2 : 3 : 4$. What is the measure of the largest angle?",
    "options": [
      "40 degrees",
      "80 degrees",
      "60 degrees",
      "90 degrees"
    ],
    "correctAnswer": 1,
    "explanation": "The parts total $2 + 3 + 4 = 9$, and the angles of a triangle sum to 180 degrees, so each part is $180 \\div 9 = 20$ degrees. The largest angle is $4 \\times 20 = 80$ degrees.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 234,
    "question": "A data set is {8, 9, 10, 11, 62}. If the value 62 is removed from the data set, what happens to the mean?",
    "options": [
      "The mean increases substantially.",
      "The mean stays the same.",
      "The mean decreases substantially.",
      "The mean decreases only slightly."
    ],
    "correctAnswer": 2,
    "explanation": "The value 62 is a high outlier that pulls the mean up (the original mean is $100 \\div 5 = 20$). Removing it drops the mean to $\\frac{8 + 9 + 10 + 11}{4} = 9.5$, a substantial decrease.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 235,
    "question": "A spinner has four equal-sized regions labeled 1 dollar, 2 dollars, 3 dollars, and 6 dollars. A player spins once and wins the amount shown. What is the expected (average) winning per spin?",
    "options": [
      "3.50 dollars",
      "6 dollars",
      "2 dollars",
      "3 dollars"
    ],
    "correctAnswer": 3,
    "explanation": "Each region is equally likely (probability $\\frac{1}{4}$), so the expected value is $\\frac{1 + 2 + 3 + 6}{4} = \\frac{12}{4} = 3$ dollars.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 236,
    "question": "A store increases the price of a coat by 25%, and later reduces that new price by 25%. Compared with the original price, the final price is:",
    "options": [
      "6.25% less than the original price.",
      "equal to the original price.",
      "6.25% more than the original price.",
      "25% less than the original price."
    ],
    "correctAnswer": 0,
    "explanation": "The combined factor is $1.25 \\times 0.75 = 0.9375$, so the final price is 93.75% of the original, that is, 6.25% less. The two 25% changes do not cancel because they apply to different base prices.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 237,
    "question": "A meal is listed at 50 dollars. A 20% tip is calculated on the 50-dollar meal price, and a 6% sales tax is also calculated on the 50-dollar meal price. What is the total amount paid?",
    "options": [
      "66 dollars",
      "63 dollars",
      "60 dollars",
      "63.60 dollars"
    ],
    "correctAnswer": 1,
    "explanation": "Tip $= 0.20 \\times 50 = 10$ dollars and tax $= 0.06 \\times 50 = 3$ dollars. Since both are based on the 50-dollar price, the total is $50 + 10 + 3 = 63$ dollars.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 238,
    "question": "A fair coin is flipped 3 times. What is the probability of getting at least one heads?",
    "options": [
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{7}{8}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "Use the complement: $P(\\text{at least one heads}) = 1 - P(\\text{no heads}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 239,
    "question": "A bag contains 5 red marbles and 3 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are red?",
    "options": [
      "$\\frac{25}{64}$",
      "$\\frac{5}{16}$",
      "$\\frac{2}{7}$",
      "$\\frac{5}{14}$"
    ],
    "correctAnswer": 3,
    "explanation": "The draws are dependent (no replacement): $P(\\text{both red}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$. Using $\\frac{5}{8} \\times \\frac{5}{8} = \\frac{25}{64}$ would wrongly treat the draws as independent.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 240,
    "question": "A square dartboard measures 10 inches on each side. A circle of radius 3 inches is painted at its center. Assuming a dart lands at a uniformly random point on the board, what is the probability that it lands inside the circle? (Use $\\pi \\approx 3.14$.)",
    "options": [
      "about 0.09",
      "about 0.28",
      "about 0.19",
      "about 0.57"
    ],
    "correctAnswer": 1,
    "explanation": "For a uniformly random landing point, the probability equals the fraction of area covered: $\\frac{\\pi (3)^2}{10^2} = \\frac{28.26}{100} \\approx 0.28$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 241,
    "question": "On a standardized test, a student's score is at the 80th percentile. Which statement is the correct interpretation?",
    "options": [
      "The student answered 80% of the questions correctly.",
      "About 80% of test-takers scored higher than the student.",
      "The student's score was 80 points.",
      "About 80% of test-takers scored at or below the student's score."
    ],
    "correctAnswer": 3,
    "explanation": "A percentile gives the percent of the group at or below a value: the 80th percentile means about 80% of test-takers scored at or below this student. It says nothing about the percent of questions answered correctly.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 242,
    "question": "Two classes took the same exam. On the box plot for Class A, the box spans from 70 to 84 with a median of 78. On the box plot for Class B, the box spans from 74 to 82 with a median of 78. Which conclusion is best supported?",
    "options": [
      "Class B's scores are higher on average than Class A's.",
      "Class A's median score is higher than Class B's.",
      "Class A's middle 50% of scores is more spread out than Class B's.",
      "The two classes have identical score distributions."
    ],
    "correctAnswer": 2,
    "explanation": "Both medians are 78, so center is equal. Class A's IQR is $84 - 70 = 14$ versus Class B's $82 - 74 = 8$, so Class A's middle 50% of scores is more spread out.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 243,
    "question": "Every value in a data set with a standard deviation of 5 is multiplied by 3. What is the standard deviation of the resulting data set?",
    "options": [
      "15",
      "5",
      "8",
      "45"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying every value by a constant $k$ scales the standard deviation by $|k|$: $5 \\times 3 = 15$. (Adding a constant, by contrast, would leave the standard deviation unchanged.)",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "One-variable data: distributions and measures of center and spread"
  },
  {
    "id": 244,
    "question": "A mixture contains red and blue paint in the ratio $3 : 2$, with a total volume of 25 liters. If 5 liters of blue paint are added, what is the new ratio of red paint to blue paint?",
    "options": [
      "$3 : 4$",
      "$1 : 1$",
      "$15 : 10$",
      "$5 : 6$"
    ],
    "correctAnswer": 1,
    "explanation": "Splitting 25 liters in the ratio $3 : 2$ gives red $= 15$ and blue $= 10$. Adding 5 liters of blue makes blue $= 15$, so the new ratio is $15 : 15 = 1 : 1$.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 245,
    "question": "A car travels 240 kilometers using 15 liters of fuel. Given that 1 kilometer $\\approx 0.62$ miles and 1 liter $\\approx 0.26$ gallons, which is closest to the car's fuel efficiency in miles per gallon?",
    "options": [
      "about 38 miles per gallon",
      "about 16 miles per gallon",
      "about 25 miles per gallon",
      "about 61 miles per gallon"
    ],
    "correctAnswer": 0,
    "explanation": "The efficiency is $\\frac{240 \\text{ km}}{15 \\text{ L}} = 16$ km per liter. Converting units: $16 \\times \\frac{0.62 \\text{ mi/km}}{0.26 \\text{ gal/L}} \\approx 38$ miles per gallon.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 246,
    "question": "A biologist records a quantity $y$ at times $x = 0, 1, 2, 3$ and obtains $y = 4, 12, 36, 108$. Which type of function best models this data?",
    "options": [
      "A linear function, because $y$ increases by a constant amount.",
      "A quadratic function, because the second differences are constant.",
      "An exponential function, because each $y$-value is 3 times the previous one.",
      "A linear function, because the ratio of consecutive $y$-values is constant."
    ],
    "correctAnswer": 2,
    "explanation": "Consecutive $y$-values are multiplied by a constant factor ($12 \\div 4 = 36 \\div 12 = 108 \\div 36 = 3$), the hallmark of exponential growth. Linear data would add a constant amount rather than multiply.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 247,
    "question": "A cyclist travels at a constant speed of 8 meters per second. What is this speed in kilometers per hour?",
    "options": [
      "2.22 km/h",
      "48 km/h",
      "28.8 km/h",
      "480 km/h"
    ],
    "correctAnswer": 2,
    "explanation": "To convert meters per second to kilometers per hour, multiply by 3600 seconds per hour and divide by 1000 meters per kilometer, which is the same as multiplying by 3.6. So 8 times 3.6 equals 28.8 km/h.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 248,
    "question": "A store's sales record shows that 200 items were sold in one day: 50 shirts, 80 pants, 40 hats, and 30 pairs of socks. What percent of the items sold were pants?",
    "options": [
      "80%",
      "40%",
      "25%",
      "20%"
    ],
    "correctAnswer": 1,
    "explanation": "The pants make up 80 of the 200 items sold. As a percent, 80 divided by 200 equals 0.40, or 40%.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 249,
    "question": "A survey recorded how 50 students travel to school: 12 walk, 18 bike, and 20 take the bus. If one of these students is chosen at random, what is the probability that the student bikes to school?",
    "options": [
      "0.18",
      "0.24",
      "0.40",
      "0.36"
    ],
    "correctAnswer": 3,
    "explanation": "The probability is the number of students who bike divided by the total number of students: 18 divided by 50 equals 0.36.",
    "difficulty": "easy",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 250,
    "question": "A gym recruited 300 of its members who volunteered for a study and randomly assigned them to follow either a new training plan or their usual routine. After eight weeks, the new-plan group showed greater fitness improvement. Which conclusion is best supported?",
    "options": [
      "The new plan causes greater improvement for everyone.",
      "Members who improve more tend to prefer the new plan.",
      "For these participants, the new plan likely caused greater improvement, but the result may not generalize to all gym members.",
      "No cause-and-effect conclusion is possible from this study."
    ],
    "correctAnswer": 2,
    "explanation": "Random ASSIGNMENT to the two groups supports a cause-and-effect conclusion for the participants. But because the participants were volunteers rather than a random SELECTION from a larger population, the result may not generalize beyond this group.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Evaluating statistical claims: observational studies and experiments"
  },
  {
    "id": 251,
    "question": "A poll estimates that 52% of voters support a measure, with a margin of error of 4 percentage points. Based on this poll, which is the most plausible range for the true percentage of all voters who support the measure?",
    "options": [
      "48% to 56%",
      "52% to 56%",
      "50% to 54%",
      "44% to 60%"
    ],
    "correctAnswer": 0,
    "explanation": "The plausible range for the population value is the estimate plus or minus the margin of error: 52% minus 4% is 48%, and 52% plus 4% is 56%, giving a range of 48% to 56%.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Inference from sample statistics and margin of error"
  },
  {
    "id": 252,
    "question": "A solid metal block has a mass of 240 grams and a volume of 30 cubic centimeters. What is the density of the metal?",
    "options": [
      "0.125 grams per cubic centimeter",
      "270 grams per cubic centimeter",
      "7200 grams per cubic centimeter",
      "8 grams per cubic centimeter"
    ],
    "correctAnswer": 3,
    "explanation": "Density equals mass divided by volume. So 240 grams divided by 30 cubic centimeters equals 8 grams per cubic centimeter.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 253,
    "question": "A jacket is priced at 120 dollars and a coat is priced at 150 dollars. The coat's price is what percent greater than the jacket's price?",
    "options": [
      "20%",
      "25%",
      "30%",
      "80%"
    ],
    "correctAnswer": 1,
    "explanation": "The increase is 150 minus 120, which is 30 dollars. As a percent of the jacket's price, 30 divided by 120 equals 0.25, or 25% greater. (Note that 20% is the percent by which the jacket is less than the coat, which is a different comparison.)",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 254,
    "question": "At equal time intervals, a biologist records a bacteria count of 200, then 400, then 800, then 1600. Which type of model best fits this data?",
    "options": [
      "Linear, because the count increases by a constant amount each interval.",
      "Quadratic, because the count increases and then decreases.",
      "Exponential, because the count is multiplied by a constant factor each interval.",
      "Constant, because the count does not change."
    ],
    "correctAnswer": 2,
    "explanation": "Each value is double the one before it, so the count is multiplied by the constant factor 2 at each interval. A quantity that changes by a constant factor is modeled by an exponential function.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 255,
    "question": "A spinner is designed so that the probability of landing on red is 0.15. If the spinner is spun 300 times, about how many times is it expected to land on red?",
    "options": [
      "15",
      "30",
      "20",
      "45"
    ],
    "correctAnswer": 3,
    "explanation": "The expected number of red outcomes over many trials is the probability times the number of trials: 0.15 times 300 equals 45.",
    "difficulty": "medium",
    "area": "problem-solving",
    "skill": "Probability and conditional probability"
  },
  {
    "id": 256,
    "question": "Researchers randomly selected 2,000 adults from across the country and found that those who reported drinking more coffee also reported sleeping more hours per night. The researchers did not assign how much coffee anyone drank. Which conclusion is best supported?",
    "options": [
      "Drinking more coffee causes people to sleep more.",
      "There is an association between coffee and sleep that can be generalized to the adult population, but the study does not establish that coffee causes more sleep.",
      "The association applies only to the 2,000 participants and cannot be generalized to others.",
      "There is no association between coffee and sleep."
    ],
    "correctAnswer": 1,
    "explanation": "Random SELECTION from the population supports generalizing the observed association to that population. But because coffee amounts were not randomly ASSIGNED, this observational study cannot establish a cause-and-effect relationship.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Evaluating statistical claims: observational studies and experiments"
  },
  {
    "id": 257,
    "question": "A company wants to determine whether a new lighting system causes workers to be more productive. Which study design would best support a cause-and-effect conclusion?",
    "options": [
      "Randomly assign workers to the new lighting or the old lighting and compare their productivity.",
      "Survey workers about whether they think the new lighting helps them work.",
      "Compare the productivity of workers who chose the new lighting to those who chose the old lighting.",
      "Measure productivity only after installing the new lighting throughout the building."
    ],
    "correctAnswer": 0,
    "explanation": "A cause-and-effect conclusion requires an experiment with random ASSIGNMENT to the treatment and control conditions, which balances other factors between the groups. The other designs are observational or based on opinion and cannot isolate the effect of the lighting.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Evaluating statistical claims: observational studies and experiments"
  },
  {
    "id": 258,
    "question": "Two surveys estimate the same population proportion using the same methods. Survey A samples 400 people, and Survey B samples 1,600 people. Which statement about the margin of error is correct?",
    "options": [
      "Survey A will have a smaller margin of error because it uses a smaller sample.",
      "Both surveys will have the same margin of error.",
      "A larger sample size increases the margin of error.",
      "Survey B will tend to have a smaller margin of error because it uses a larger sample size."
    ],
    "correctAnswer": 3,
    "explanation": "With the same methods, a larger sample size produces a smaller margin of error. Since Survey B samples more people, it will tend to have a smaller margin of error and a more precise estimate.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Inference from sample statistics and margin of error"
  },
  {
    "id": 259,
    "question": "The relationship between a plant's age $x$, in weeks, and its height $y$, in centimeters, is modeled by the equation $y = 2.5x + 4$. According to the model, what is the predicted height of the plant when it is 12 weeks old?",
    "options": [
      "30 centimeters",
      "34 centimeters",
      "42 centimeters",
      "16.5 centimeters"
    ],
    "correctAnswer": 1,
    "explanation": "Substitute $x = 12$ into the model: $y = 2.5(12) + 4 = 30 + 4 = 34$ centimeters.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 260,
    "question": "A ball is thrown straight up, and its height above the ground is recorded at equal time intervals as 5, 8, 9, 8, and 5 meters. Which type of model best describes the height over time?",
    "options": [
      "Linear, because the height changes by a constant amount each interval.",
      "Exponential, because the height is multiplied by a constant factor each interval.",
      "Quadratic, because the height rises to a maximum and then falls symmetrically.",
      "Constant, because the height stays the same."
    ],
    "correctAnswer": 2,
    "explanation": "The height increases to a peak of 9 meters and then decreases in a symmetric pattern. This rise-then-fall behavior with a single maximum is characteristic of a quadratic model.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Two-variable data: models and scatterplots"
  },
  {
    "id": 261,
    "question": "A bottling machine fills 240 bottles every 8 minutes at a constant rate. At this rate, how many bottles does the machine fill in 3 hours?",
    "options": [
      "1800",
      "720",
      "5400",
      "90"
    ],
    "correctAnswer": 2,
    "explanation": "The rate is 240 bottles divided by 8 minutes, which equals 30 bottles per minute. Three hours is 180 minutes, so the machine fills 30 times 180 equals 5400 bottles.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Ratios, rates, proportional relationships, and units"
  },
  {
    "id": 262,
    "question": "The price of a stock increased by 20% during one year and then decreased by 20% during the next year. Compared with its original price, the final price is:",
    "options": [
      "4% more than the original price.",
      "the same as the original price.",
      "40% less than the original price.",
      "4% less than the original price."
    ],
    "correctAnswer": 3,
    "explanation": "Starting from price P, a 20% increase gives 1.2P. A 20% decrease then multiplies by 0.8, giving 1.2 times 0.8 equals 0.96 times P. Since 0.96P is 4% less than P, the final price is 4% less than the original.",
    "difficulty": "hard",
    "area": "problem-solving",
    "skill": "Percentages"
  },
  {
    "id": 263,
    "question": "A triangle has two angles measuring $50^\\circ$ and $60^\\circ$. What is the measure of the third angle?",
    "options": [
      "$80^\\circ$",
      "$70^\\circ$",
      "$110^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "Angles in a triangle sum to $180^\\circ$: $180 - 50 - 60 = 70^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 264,
    "question": "A right triangle has legs of length $3$ and $4$. What is the length of the hypotenuse?",
    "options": [
      "$5$",
      "$7$",
      "$6$",
      "$\\sqrt{7}$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Pythagorean theorem, $c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 265,
    "question": "A circle has radius $5$. What is its circumference?",
    "options": [
      "$25\\pi$",
      "$5\\pi$",
      "$10\\pi$",
      "$20\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "Circumference $= 2\\pi r = 2\\pi (5) = 10\\pi$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 266,
    "question": "A rectangle has length $8$ and width $5$. What is its area?",
    "options": [
      "$13$",
      "$26$",
      "$40$",
      "$45$"
    ],
    "correctAnswer": 2,
    "explanation": "Area of a rectangle $= \\text{length} \\times \\text{width} = 8 \\times 5 = 40$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 267,
    "question": "A cube has an edge length of $4$. What is its volume?",
    "options": [
      "$16$",
      "$48$",
      "$12$",
      "$64$"
    ],
    "correctAnswer": 3,
    "explanation": "Volume of a cube $= s^3 = 4^3 = 64$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 268,
    "question": "In a right triangle, the angle $\\theta$ has an opposite side of length $6$ and a hypotenuse of length $10$. What is $\\sin\\theta$?",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{5}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{6}{10} = \\frac{3}{5}$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 269,
    "question": "Two angles are complementary. If one angle measures $35^\\circ$, what is the measure of the other?",
    "options": [
      "$145^\\circ$",
      "$65^\\circ$",
      "$55^\\circ$",
      "$45^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "Complementary angles sum to $90^\\circ$: $90 - 35 = 55^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 270,
    "question": "A square has a perimeter of $36$. What is the length of one side?",
    "options": [
      "$6$",
      "$9$",
      "$12$",
      "$18$"
    ],
    "correctAnswer": 1,
    "explanation": "A square has $4$ equal sides, so each side $= \\frac{36}{4} = 9$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 271,
    "question": "A circle has a diameter of $14$. What is its radius?",
    "options": [
      "$28$",
      "$7$",
      "$14\\pi$",
      "$49$"
    ],
    "correctAnswer": 1,
    "explanation": "The radius is half the diameter: $\\frac{14}{2} = 7$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 272,
    "question": "A triangle has a base of $10$ and a height of $6$. What is its area?",
    "options": [
      "$60$",
      "$16$",
      "$30$",
      "$36$"
    ],
    "correctAnswer": 2,
    "explanation": "Area of a triangle $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(10)(6) = 30$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 273,
    "question": "In a $45^\\circ$-$45^\\circ$-$90^\\circ$ right triangle, each leg has length $7$. What is the length of the hypotenuse?",
    "options": [
      "$7\\sqrt{2}$",
      "$14$",
      "$7\\sqrt{3}$",
      "$\\frac{7}{\\sqrt{2}}$"
    ],
    "correctAnswer": 0,
    "explanation": "In a $45$-$45$-$90$ triangle, the hypotenuse equals a leg times $\\sqrt{2}$: $7\\sqrt{2}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 274,
    "question": "In a $30^\\circ$-$60^\\circ$-$90^\\circ$ right triangle, the side opposite the $30^\\circ$ angle has length $5$. What is the length of the side opposite the $60^\\circ$ angle?",
    "options": [
      "$5\\sqrt{2}$",
      "$10$",
      "$5\\sqrt{3}$",
      "$\\frac{5}{2}$"
    ],
    "correctAnswer": 2,
    "explanation": "In a $30$-$60$-$90$ triangle, the sides are in ratio $1 : \\sqrt{3} : 2$. The side opposite $60^\\circ$ is $5\\sqrt{3}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 275,
    "question": "A sector of a circle of radius $6$ has a central angle of $60^\\circ$. What is the area of the sector?",
    "options": [
      "$6\\pi$",
      "$36\\pi$",
      "$12\\pi$",
      "$3\\pi$"
    ],
    "correctAnswer": 0,
    "explanation": "Sector area $= \\frac{60}{360} \\times \\pi r^2 = \\frac{1}{6} \\times \\pi (6)^2 = \\frac{1}{6}(36\\pi) = 6\\pi$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 276,
    "question": "An arc of a circle of radius $9$ subtends a central angle of $40^\\circ$. What is the arc length?",
    "options": [
      "$18\\pi$",
      "$2\\pi$",
      "$4\\pi$",
      "$9\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "Arc length $= \\frac{40}{360} \\times 2\\pi r = \\frac{1}{9} \\times 2\\pi (9) = \\frac{1}{9}(18\\pi) = 2\\pi$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 277,
    "question": "A right circular cylinder has radius $3$ and height $10$. What is its volume?",
    "options": [
      "$30\\pi$",
      "$60\\pi$",
      "$90\\pi$",
      "$300\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "Volume of a cylinder $= \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 278,
    "question": "Two similar triangles have corresponding sides in the ratio $2:5$. If a side of the smaller triangle is $8$, what is the length of the corresponding side of the larger triangle?",
    "options": [
      "$16$",
      "$20$",
      "$40$",
      "$11$"
    ],
    "correctAnswer": 1,
    "explanation": "Set up the proportion $\\frac{2}{5} = \\frac{8}{x}$, so $2x = 40$ and $x = 20$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 279,
    "question": "In a right triangle, $\\tan\\theta = \\frac{5}{12}$. What is $\\cos\\theta$?",
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{13}{12}$",
      "$\\frac{12}{13}$",
      "$\\frac{12}{5}$"
    ],
    "correctAnswer": 2,
    "explanation": "With opposite $= 5$ and adjacent $= 12$, the hypotenuse is $\\sqrt{5^2 + 12^2} = 13$. So $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 280,
    "question": "An angle measures $\\frac{\\pi}{3}$ radians. What is its measure in degrees?",
    "options": [
      "$45^\\circ$",
      "$90^\\circ$",
      "$120^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply by $\\frac{180^\\circ}{\\pi}$: $\\frac{\\pi}{3} \\times \\frac{180^\\circ}{\\pi} = 60^\\circ$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 281,
    "question": "A right circular cone has radius $6$ and height $8$. What is the slant height of the cone?",
    "options": [
      "$10$",
      "$14$",
      "$\\sqrt{28}$",
      "$48$"
    ],
    "correctAnswer": 0,
    "explanation": "The slant height satisfies $\\ell = \\sqrt{r^2 + h^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 282,
    "question": "A circle is defined by the equation $(x - 3)^2 + (y + 2)^2 = 25$. What is the center of the circle?",
    "options": [
      "$(-3, 2)$",
      "$(3, -2)$",
      "$(3, 2)$",
      "$(-3, -2)$"
    ],
    "correctAnswer": 1,
    "explanation": "In the form $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k) = (3, -2)$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 283,
    "question": "A circle has the equation $x^2 + y^2 - 6x + 8y + 9 = 0$. What is the radius of the circle?",
    "options": [
      "$3$",
      "$5$",
      "$4$",
      "$\\sqrt{34}$"
    ],
    "correctAnswer": 2,
    "explanation": "Complete the square: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16$, giving $(x-3)^2 + (y+4)^2 = 16$. The radius is $\\sqrt{16} = 4$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 284,
    "question": "An inscribed angle in a circle intercepts an arc of $110^\\circ$. What is the measure of the inscribed angle?",
    "options": [
      "$220^\\circ$",
      "$110^\\circ$",
      "$70^\\circ$",
      "$55^\\circ$"
    ],
    "correctAnswer": 3,
    "explanation": "By the inscribed-angle theorem, an inscribed angle is half the intercepted arc: $\\frac{110}{2} = 55^\\circ$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 285,
    "question": "In a right triangle, angles $A$ and $B$ are the two acute angles. If $\\sin A = \\frac{7}{25}$, what is $\\cos B$?",
    "options": [
      "$\\frac{7}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{25}{7}$",
      "$\\frac{24}{7}$"
    ],
    "correctAnswer": 0,
    "explanation": "In a right triangle the acute angles are complementary, so $\\cos B = \\sin A = \\frac{7}{25}$ by the complementary-angle identity $\\cos(90^\\circ - A) = \\sin A$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 286,
    "question": "A sphere has a surface area of $144\\pi$. What is the volume of the sphere?",
    "options": [
      "$288\\pi$",
      "$216\\pi$",
      "$144\\pi$",
      "$36\\pi$"
    ],
    "correctAnswer": 0,
    "explanation": "Surface area $= 4\\pi r^2 = 144\\pi$ gives $r^2 = 36$, so $r = 6$. Volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (6)^3 = \\frac{4}{3}\\pi (216) = 288\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 287,
    "question": "A regular hexagon has a side length of $10$. What is its area?",
    "options": [
      "$150\\sqrt{3}$",
      "$300$",
      "$60\\sqrt{3}$",
      "$100\\sqrt{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "The area of a regular hexagon with side $s$ is $\\frac{3\\sqrt{3}}{2}s^2 = \\frac{3\\sqrt{3}}{2}(100) = 150\\sqrt{3}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 288,
    "question": "A solid consists of a cylinder of radius $3$ and height $10$ with a hemisphere of radius $3$ attached on top. What is the total volume of the solid?",
    "options": [
      "$90\\pi$",
      "$108\\pi$",
      "$126\\pi$",
      "$99\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "Cylinder volume $= \\pi (3)^2 (10) = 90\\pi$. Hemisphere volume $= \\frac{1}{2} \\cdot \\frac{4}{3}\\pi (3)^3 = \\frac{2}{3}\\pi (27) = 18\\pi$. Total $= 90\\pi + 18\\pi = 108\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 289,
    "question": "A central angle of a circle measures $2.5$ radians and subtends an arc of length $20$. What is the radius of the circle?",
    "options": [
      "$50$",
      "$8$",
      "$10$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "Arc length $s = r\\theta$, so $20 = r(2.5)$, giving $r = \\frac{20}{2.5} = 8$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 290,
    "question": "In a right triangle, one acute angle is $30^\\circ$ and the hypotenuse has length $12$. What is the area of the triangle?",
    "options": [
      "$36$",
      "$18\\sqrt{3}$",
      "$36\\sqrt{3}$",
      "$72$"
    ],
    "correctAnswer": 1,
    "explanation": "The side opposite $30^\\circ$ is $\\frac{1}{2}(12) = 6$ and the side opposite $60^\\circ$ is $6\\sqrt{3}$. Area $= \\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 291,
    "question": "Two chords of a circle intersect inside the circle. One chord is divided into segments of length $4$ and $9$; the other chord is divided into a segment of length $6$ and an unknown segment $x$. What is $x$?",
    "options": [
      "$6$",
      "$3$",
      "$8$",
      "$\\frac{27}{2}$"
    ],
    "correctAnswer": 0,
    "explanation": "By the intersecting-chords theorem, the products of the segments are equal: $4 \\times 9 = 6 \\times x$, so $36 = 6x$ and $x = 6$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 292,
    "question": "A cone and a cylinder have the same radius $r$ and the same height $h$. If the volume of the cylinder is $45\\pi$, what is the volume of the cone?",
    "options": [
      "$45\\pi$",
      "$90\\pi$",
      "$22.5\\pi$",
      "$15\\pi$"
    ],
    "correctAnswer": 3,
    "explanation": "A cone's volume is $\\frac{1}{3}$ that of a cylinder with the same base and height: $\\frac{1}{3}(45\\pi) = 15\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 293,
    "question": "An angle measures $\\frac{\\pi}{6}$ radians. What is the measure of this angle in degrees?",
    "options": [
      "$15^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply by $\\frac{180^\\circ}{\\pi}$: $\\frac{\\pi}{6}\\cdot\\frac{180^\\circ}{\\pi} = 30^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 294,
    "question": "In a right triangle, one acute angle has measure $x^\\circ$ and $\\sin(x^\\circ) = 0.8$. What is the value of $\\cos(90^\\circ - x^\\circ)$?",
    "options": [
      "$0.2$",
      "$0.6$",
      "$0.8$",
      "$0.4$"
    ],
    "correctAnswer": 2,
    "explanation": "By the complementary-angle identity, $\\cos(90^\\circ - x^\\circ) = \\sin(x^\\circ) = 0.8$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 295,
    "question": "A circle in the $xy$-plane has center $(2, -3)$ and radius $4$. Which equation represents this circle?",
    "options": [
      "$(x-2)^2 + (y+3)^2 = 16$",
      "$(x+2)^2 + (y-3)^2 = 16$",
      "$(x-2)^2 + (y+3)^2 = 4$",
      "$(x-2)^2 + (y-3)^2 = 16$"
    ],
    "correctAnswer": 0,
    "explanation": "The standard form is $(x-h)^2 + (y-k)^2 = r^2$ with center $(h,k)=(2,-3)$ and $r=4$, giving $(x-2)^2 + (y+3)^2 = 16$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 296,
    "question": "A circle in the $xy$-plane is given by $x^2 + y^2 - 8x + 6y = 0$. What is the radius of the circle?",
    "options": [
      "$5$",
      "$25$",
      "$\\sqrt{5}$",
      "$50$"
    ],
    "correctAnswer": 0,
    "explanation": "Complete the square: $(x-4)^2 + (y+3)^2 = 16 + 9 = 25$, so $r = \\sqrt{25} = 5$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 297,
    "question": "A circle has radius $9$. A central angle of $40^\\circ$ intercepts an arc of the circle. What is the length of that arc?",
    "options": [
      "$4\\pi$",
      "$\\pi$",
      "$2\\pi$",
      "$18\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "Arc length $= \\frac{40}{360}\\cdot 2\\pi(9) = \\frac{1}{9}\\cdot 18\\pi = 2\\pi$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 298,
    "question": "In a circle, a central angle and an inscribed angle both intercept the same arc. If the central angle measures $80^\\circ$, what is the measure of the inscribed angle?",
    "options": [
      "$40^\\circ$",
      "$80^\\circ$",
      "$20^\\circ$",
      "$160^\\circ$"
    ],
    "correctAnswer": 0,
    "explanation": "An inscribed angle is half the central angle subtending the same arc: $\\frac{1}{2}(80^\\circ) = 40^\\circ$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 299,
    "question": "A right triangle has two legs, each of length $7$, meeting at the right angle. What is the length of the hypotenuse?",
    "options": [
      "$14$",
      "$7\\sqrt{3}$",
      "$7$",
      "$7\\sqrt{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "This is a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle, so the hypotenuse is $\\text{leg}\\cdot\\sqrt{2} = 7\\sqrt{2}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 300,
    "question": "Triangle $ABC$ is similar to triangle $DEF$, with $AB$ corresponding to $DE$ and $BC$ corresponding to $EF$. If $AB = 6$, $DE = 9$, and $BC = 8$, what is the length of $EF$?",
    "options": [
      "$10$",
      "$\\frac{16}{3}$",
      "$12$",
      "$11$"
    ],
    "correctAnswer": 2,
    "explanation": "Set up the proportion $\\frac{AB}{DE} = \\frac{BC}{EF}$: $\\frac{6}{9} = \\frac{8}{EF}$, so $EF = \\frac{9\\cdot 8}{6} = 12$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 301,
    "question": "In the $xy$-plane, a line passes through the points $(2, -1)$ and $(8, 3)$. What is the slope of the line?",
    "options": [
      "$\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$"
    ],
    "correctAnswer": 3,
    "explanation": "Slope $= \\frac{3 - (-1)}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 302,
    "question": "A circle in the $xy$-plane is given by $x^2 + y^2 + 10x - 4y - 7 = 0$. What are the coordinates of the center of the circle?",
    "options": [
      "$(5, -2)$",
      "$(-5, 2)$",
      "$(-10, 4)$",
      "$(10, -4)$"
    ],
    "correctAnswer": 1,
    "explanation": "Complete the square: $(x+5)^2 + (y-2)^2 = 7 + 25 + 4 = 36$, so the center is $(-5, 2)$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 303,
    "question": "In the $xy$-plane, the graph of $x^2 + y^2 - 6x + 8y + k = 0$ is a circle of radius $3$. What is the value of $k$?",
    "options": [
      "$9$",
      "$25$",
      "$34$",
      "$16$"
    ],
    "correctAnswer": 3,
    "explanation": "Completing the square gives $(x-3)^2 + (y+4)^2 = 9 + 16 - k = 25 - k$. For radius $3$, $25 - k = 9$, so $k = 16$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 304,
    "question": "A circle has radius $6$. A sector of the circle is formed by a central angle of $\\frac{\\pi}{3}$ radians. What is the area of the sector?",
    "options": [
      "$12\\pi$",
      "$3\\pi$",
      "$6\\pi$",
      "$18\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "Sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(6)^2\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}(36)\\left(\\frac{\\pi}{3}\\right) = 6\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 305,
    "question": "A circle has radius $8$. An arc of the circle is intercepted by a central angle of $\\frac{3\\pi}{4}$ radians. What is the length of the arc?",
    "options": [
      "$24\\pi$",
      "$6\\pi$",
      "$\\frac{3\\pi}{2}$",
      "$12\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "Arc length $= r\\theta = 8\\cdot\\frac{3\\pi}{4} = 6\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 306,
    "question": "In right triangle $ABC$, the right angle is at $C$, so angles $A$ and $B$ are complementary. If $\\cos(A) = \\frac{7}{25}$, what is the value of $\\sin(B)$?",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{25}{7}$",
      "$\\frac{7}{24}$",
      "$\\frac{7}{25}$"
    ],
    "correctAnswer": 3,
    "explanation": "Since $A + B = 90^\\circ$, angle $B = 90^\\circ - A$, so $\\sin(B) = \\sin(90^\\circ - A) = \\cos(A) = \\frac{7}{25}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 307,
    "question": "An equilateral triangle has side length $12$. What is the length of an altitude of the triangle (the segment from one vertex perpendicular to the opposite side)?",
    "options": [
      "$12\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "$6\\sqrt{2}$",
      "$6$"
    ],
    "correctAnswer": 1,
    "explanation": "The altitude splits the triangle into two $30^\\circ$-$60^\\circ$-$90^\\circ$ triangles with hypotenuse $12$ and short leg $6$. The altitude is the long leg: $6\\sqrt{3}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 308,
    "question": "In a right triangle, one acute angle $\\theta$ satisfies $\\tan(\\theta) = \\frac{3}{4}$, and the side adjacent to $\\theta$ has length $8$. What is the length of the side opposite $\\theta$?",
    "options": [
      "$\\frac{32}{3}$",
      "$24$",
      "$6$",
      "$10$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$, so opposite $= 8\\cdot\\tan(\\theta) = 8\\cdot\\frac{3}{4} = 6$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 309,
    "question": "A vertical tree casts a shadow $24$ feet long. At the same time, a nearby vertical pole $6$ feet tall casts a shadow $4$ feet long. The tree, its shadow, the pole, and its shadow form similar right triangles. What is the height of the tree, in feet?",
    "options": [
      "$16$",
      "$32$",
      "$9$",
      "$36$"
    ],
    "correctAnswer": 3,
    "explanation": "Similar triangles give $\\frac{h}{24} = \\frac{6}{4}$, so $h = 24\\cdot\\frac{6}{4} = 36$ feet.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 310,
    "question": "In the $xy$-plane, point $M(3, 4)$ is the midpoint of segment $PQ$. If $P = (-1, 1)$, what is the length of segment $PQ$?",
    "options": [
      "$5$",
      "$25$",
      "$10$",
      "$20$"
    ],
    "correctAnswer": 2,
    "explanation": "The distance from $P(-1,1)$ to $M(3,4)$ is $\\sqrt{(3-(-1))^2 + (4-1)^2} = \\sqrt{16+9} = 5$. Since $M$ is the midpoint, $PQ = 2(PM) = 10$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 311,
    "question": "A solid is formed by placing a cone directly on top of a cylinder so their circular faces coincide. The cylinder has radius $3$ and height $4$, and the cone has radius $3$ and height $4$. What is the total volume of the solid?",
    "options": [
      "$36\\pi$",
      "$48\\pi$",
      "$72\\pi$",
      "$12\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "Cylinder volume $= \\pi(3)^2(4) = 36\\pi$; cone volume $= \\frac{1}{3}\\pi(3)^2(4) = 12\\pi$. Total $= 36\\pi + 12\\pi = 48\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 312,
    "question": "A right circular cylinder has volume $100$. A second cylinder has the same height but twice the radius of the first. What is the volume of the second cylinder?",
    "options": [
      "$200$",
      "$800$",
      "$100$",
      "$400$"
    ],
    "correctAnswer": 3,
    "explanation": "Volume $= \\pi r^2 h$. Doubling the radius multiplies the volume by $2^2 = 4$, so the new volume is $4(100) = 400$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 313,
    "question": "In the $xy$-plane, line $\\ell$ is tangent to a circle at point $P$, and $\\overline{OP}$ is the radius drawn from center $O$ to the point of tangency $P$. What is the measure of the angle between line $\\ell$ and radius $\\overline{OP}$?",
    "options": [
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$180^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "A tangent line is perpendicular to the radius drawn to the point of tangency, so the angle between them is $90^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 314,
    "question": "What is the exact value of $\\tan 45^\\circ$?",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "In a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle the two legs are equal, so $\\tan 45^\\circ = \\frac{\\text{opposite}}{\\text{adjacent}} = 1$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 315,
    "question": "What is the sum of the measures of the interior angles of a pentagon (a five-sided polygon)?",
    "options": [
      "$360^\\circ$",
      "$450^\\circ$",
      "$540^\\circ$",
      "$720^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "The sum of the interior angles of an $n$-sided polygon is $(n-2)\\cdot 180^\\circ$. For $n=5$: $(5-2)\\cdot 180^\\circ = 540^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 316,
    "question": "From a point on level ground $50$ feet from the base of a vertical flagpole, the angle of elevation to the top of the pole is $30^\\circ$. What is the height of the flagpole, in feet?",
    "options": [
      "$\\frac{50\\sqrt{3}}{3}$",
      "$50\\sqrt{3}$",
      "$25\\sqrt{3}$",
      "$\\frac{50}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "The height $h$ satisfies $\\tan 30^\\circ = \\frac{h}{50}$, so $h = 50\\tan 30^\\circ = 50\\cdot\\frac{1}{\\sqrt{3}} = \\frac{50\\sqrt{3}}{3}$ feet.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 317,
    "question": "What is the measure of each interior angle of a regular octagon (a regular eight-sided polygon)?",
    "options": [
      "$120^\\circ$",
      "$135^\\circ$",
      "$144^\\circ$",
      "$108^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "Each interior angle of a regular $n$-gon measures $\\frac{(n-2)\\cdot 180^\\circ}{n}$. For $n=8$: $\\frac{6\\cdot 180^\\circ}{8} = 135^\\circ$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 318,
    "question": "Two spheres are similar. The radius of the larger sphere is $3$ times the radius of the smaller sphere. The volume of the larger sphere is how many times the volume of the smaller sphere?",
    "options": [
      "$3$",
      "$9$",
      "$27$",
      "$81$"
    ],
    "correctAnswer": 2,
    "explanation": "For similar solids with linear scale factor $k$, the volume ratio is $k^3$. Here $k=3$, so the volume ratio is $3^3 = 27$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 319,
    "question": "A circle in the $xy$-plane has a diameter with endpoints $(-2, 1)$ and $(4, 9)$. Which equation represents this circle?",
    "options": [
      "$(x-1)^2 + (y-5)^2 = 25$",
      "$(x-1)^2 + (y-5)^2 = 100$",
      "$(x+1)^2 + (y+5)^2 = 25$",
      "$(x-1)^2 + (y-5)^2 = 5$"
    ],
    "correctAnswer": 0,
    "explanation": "The center is the midpoint of the diameter: $\\left(\\frac{-2+4}{2}, \\frac{1+9}{2}\\right) = (1,5)$. The diameter length is $\\sqrt{6^2+8^2}=10$, so the radius is $5$ and $r^2 = 25$, giving $(x-1)^2 + (y-5)^2 = 25$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 320,
    "question": "A circle in the $xy$-plane is defined by $(x-3)^2 + (y+1)^2 = 25$. Which of the following points lies inside the circle?",
    "options": [
      "$(8, 3)$",
      "$(5, 1)$",
      "$(-2, -1)$",
      "$(3, 5)$"
    ],
    "correctAnswer": 1,
    "explanation": "A point is inside the circle when $(x-3)^2+(y+1)^2 < 25$. For $(5,1)$: $(5-3)^2+(1+1)^2 = 4+4 = 8 < 25$, so it lies inside. The other points give $41$ (outside), $25$ (on the circle), and $36$ (outside).",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 321,
    "question": "A triangle has vertices at $(0, 0)$, $(6, 0)$, and $(2, 5)$. What is the area of the triangle?",
    "options": [
      "$12.5$",
      "$15$",
      "$20$",
      "$30$"
    ],
    "correctAnswer": 1,
    "explanation": "Using the base from $(0,0)$ to $(6,0)$ of length $6$ and the corresponding height $5$ (the $y$-coordinate of the third vertex), the area is $\\frac{1}{2}\\cdot 6\\cdot 5 = 15$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 322,
    "question": "Two chords of a circle intersect at a point inside the circle. The first chord is divided by the intersection point into segments of length $6$ and $4$. The second chord is divided into segments of length $3$ and $x$. What is the value of $x$?",
    "options": [
      "$8$",
      "$2$",
      "$12$",
      "$18$"
    ],
    "correctAnswer": 0,
    "explanation": "When two chords intersect inside a circle, the products of the two segment lengths are equal: $6\\cdot 4 = 3\\cdot x$, so $24 = 3x$ and $x = 8$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 323,
    "question": "In right triangle $ABC$, the right angle is at $C$, angle $A$ measures $30^\\circ$, and the hypotenuse $AB$ has length $20$. What is the length of side $BC$, which is opposite angle $A$?",
    "options": [
      "$5$",
      "$10$",
      "$20$",
      "$10\\sqrt{3}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\sin A = \\frac{BC}{AB}$, so $BC = AB\\sin 30^\\circ = 20\\cdot\\frac{1}{2} = 10$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 324,
    "question": "A rectangular box (rectangular prism) has dimensions $3$ by $4$ by $12$. What is the length of the interior diagonal connecting two opposite vertices of the box?",
    "options": [
      "$13$",
      "$12$",
      "$\\sqrt{19}$",
      "$19$"
    ],
    "correctAnswer": 0,
    "explanation": "The space diagonal of a box with dimensions $a,b,c$ is $\\sqrt{a^2+b^2+c^2} = \\sqrt{3^2+4^2+12^2} = \\sqrt{9+16+144} = \\sqrt{169} = 13$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 325,
    "question": "A regular hexagon has a side length of $6$ and an apothem of length $3\\sqrt{3}$. What is the area of the hexagon?",
    "options": [
      "$18\\sqrt{3}$",
      "$27\\sqrt{3}$",
      "$54\\sqrt{3}$",
      "$108\\sqrt{3}$"
    ],
    "correctAnswer": 2,
    "explanation": "The area of a regular polygon is $\\frac{1}{2}\\cdot(\\text{perimeter})\\cdot(\\text{apothem})$. The perimeter is $6\\cdot 6 = 36$, so the area is $\\frac{1}{2}\\cdot 36\\cdot 3\\sqrt{3} = 54\\sqrt{3}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 326,
    "question": "Each exterior angle of a certain regular polygon measures $24^\\circ$. How many sides does the polygon have?",
    "options": [
      "$12$",
      "$15$",
      "$18$",
      "$24$"
    ],
    "correctAnswer": 1,
    "explanation": "The exterior angles of any convex polygon sum to $360^\\circ$. For a regular polygon with each exterior angle $24^\\circ$, the number of sides is $\\frac{360^\\circ}{24^\\circ} = 15$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 327,
    "question": "A solid is formed by placing a square pyramid on top of a cube so that the pyramid's square base exactly coincides with the top face of the cube. The cube has edge length $4$, and each of the pyramid's four triangular faces has a slant height of $5$. What is the total surface area of the solid, including its bottom face?",
    "options": [
      "$96$",
      "$104$",
      "$120$",
      "$136$"
    ],
    "correctAnswer": 2,
    "explanation": "The cube contributes its bottom face and $4$ side faces: $5\\cdot 4^2 = 80$ (the top face is hidden beneath the pyramid). The pyramid contributes $4$ triangles, each of area $\\frac{1}{2}\\cdot 4\\cdot 5 = 10$, totaling $40$. The total surface area is $80 + 40 = 120$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 328,
    "question": "A right circular cylinder has a radius of $5$ and a height of $12$. A plane slices through the cylinder along its central axis (perpendicular to the two circular bases). What is the area of the resulting cross-section?",
    "options": [
      "$60$",
      "$100$",
      "$120$",
      "$25\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "A plane through the central axis cuts the cylinder in a rectangle whose width equals the diameter $2\\cdot 5 = 10$ and whose height equals $12$. The area is $10\\cdot 12 = 120$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 329,
    "question": "A right circular cone has base radius $r$ and height $h$. If the radius is doubled and the height is halved, the volume of the new cone is how many times the volume of the original cone?",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$"
    ],
    "correctAnswer": 2,
    "explanation": "The volume is $V=\\frac{1}{3}\\pi r^2 h$. Replacing $r$ with $2r$ and $h$ with $\\frac{h}{2}$ gives $\\frac{1}{3}\\pi(2r)^2\\left(\\frac{h}{2}\\right) = \\frac{1}{3}\\pi\\cdot 4r^2\\cdot\\frac{h}{2} = 2\\cdot\\frac{1}{3}\\pi r^2 h$, which is $2$ times the original.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 330,
    "question": "What is the equation of the perpendicular bisector of the segment with endpoints $(1, 2)$ and $(5, 8)$?",
    "options": [
      "$y = -\\frac{2}{3}x + 7$",
      "$y = \\frac{3}{2}x + \\frac{1}{2}$",
      "$y = -\\frac{2}{3}x + 5$",
      "$y = \\frac{2}{3}x + 3$"
    ],
    "correctAnswer": 0,
    "explanation": "The midpoint is $(3,5)$ and the segment's slope is $\\frac{8-2}{5-1}=\\frac{3}{2}$, so the perpendicular bisector has slope $-\\frac{2}{3}$ and passes through $(3,5)$: $y - 5 = -\\frac{2}{3}(x-3)$, which simplifies to $y = -\\frac{2}{3}x + 7$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 331,
    "question": "Point $P(2, -5)$ is reflected across the line $y = -x$. What are the coordinates of its image?",
    "options": [
      "$(5, -2)$",
      "$(-5, 2)$",
      "$(-2, 5)$",
      "$(5, 2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Reflecting a point $(x,y)$ across the line $y=-x$ maps it to $(-y,-x)$. For $(2,-5)$ this gives $(-(-5),\\,-(2)) = (5,-2)$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 332,
    "question": "In triangle $ABC$, point $D$ lies on side $AB$ and point $E$ lies on side $AC$ so that segment $DE$ is parallel to side $BC$. Given $AD = 4$, $DB = 6$, and $DE = 5$, what is the length of $BC$?",
    "options": [
      "$7.5$",
      "$8$",
      "$10$",
      "$12.5$"
    ],
    "correctAnswer": 3,
    "explanation": "Because $DE\\parallel BC$, triangles $ADE$ and $ABC$ are similar with ratio $\\frac{AD}{AB} = \\frac{4}{4+6} = \\frac{2}{5}$. Then $\\frac{DE}{BC} = \\frac{2}{5}$, so $BC = 5\\cdot\\frac{5}{2} = 12.5$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 333,
    "question": "Two straight lines intersect at a single point, forming four angles. One of the four angles measures $47^\\circ$. What is the measure of the angle directly across from it (its vertical angle)?",
    "options": [
      "$133^\\circ$",
      "$47^\\circ$",
      "$43^\\circ$",
      "$94^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "When two lines intersect, the angles opposite each other (vertical angles) are congruent. So the vertical angle also measures $47^\\circ$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 334,
    "question": "A circle has a radius of $5$ units. What is the circumference of the circle?",
    "options": [
      "$25\\pi$",
      "$5\\pi$",
      "$10\\pi$",
      "$20\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "Circumference $= 2\\pi r = 2\\pi(5) = 10\\pi$ units.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 335,
    "question": "A line segment has endpoints at $(2, 4)$ and $(8, 10)$ in the coordinate plane. What are the coordinates of the midpoint of the segment?",
    "options": [
      "$(6, 6)$",
      "$(5, 6)$",
      "$(4, 7)$",
      "$(5, 7)$"
    ],
    "correctAnswer": 3,
    "explanation": "The midpoint is $\\left(\\frac{2+8}{2}, \\frac{4+10}{2}\\right) = (5, 7)$.",
    "difficulty": "easy",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 336,
    "question": "Two parallel lines are cut by a transversal. One of the interior angles formed on one side of the transversal measures $63^\\circ$. What is the measure of the alternate interior angle (on the opposite side of the transversal)?",
    "options": [
      "$117^\\circ$",
      "$27^\\circ$",
      "$126^\\circ$",
      "$63^\\circ$"
    ],
    "correctAnswer": 3,
    "explanation": "When parallel lines are cut by a transversal, alternate interior angles are congruent. So the alternate interior angle also measures $63^\\circ$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 337,
    "question": "In right triangle $ABC$, the right angle is at vertex $C$. Angle $A$ measures $30^\\circ$ and the hypotenuse $AB$ has length $20$. What is the length of side $BC$, the side opposite angle $A$?",
    "options": [
      "$20$",
      "$10$",
      "$10\\sqrt{3}$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "Using $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}}$: $\\sin 30^\\circ = \\frac{BC}{20}$, so $BC = 20 \\times \\frac{1}{2} = 10$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 338,
    "question": "In a circle, an arc is intercepted by a central angle that measures $90^\\circ$. What fraction of the full circumference is the length of this arc?",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{8}$"
    ],
    "correctAnswer": 0,
    "explanation": "The arc's fraction of the circumference equals the central angle divided by the full $360^\\circ$: $\\frac{90^\\circ}{360^\\circ} = \\frac{1}{4}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Circles"
  },
  {
    "id": 339,
    "question": "A rectangular garden measures $30$ feet by $40$ feet. A straight path runs diagonally from one corner to the opposite corner. What is the length of this diagonal path, in feet?",
    "options": [
      "$70$",
      "$35$",
      "$50$",
      "$2500$"
    ],
    "correctAnswer": 2,
    "explanation": "By the Pythagorean theorem, the diagonal $= \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ feet.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 340,
    "question": "A cylinder has a volume of $100\\pi$ cubic centimeters and a base radius of $5$ centimeters. The volume of a cylinder is $V = \\pi r^2 h$. What is the height of the cylinder, in centimeters?",
    "options": [
      "$8$",
      "$2$",
      "$20$",
      "$4$"
    ],
    "correctAnswer": 3,
    "explanation": "Substitute: $100\\pi = \\pi (5)^2 h = 25\\pi h$. Dividing both sides by $25\\pi$ gives $h = 4$ centimeters.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 341,
    "question": "In the coordinate plane, a line has a slope of $\\frac{2}{3}$. What is the slope of any line that is perpendicular to it?",
    "options": [
      "$\\frac{3}{2}$",
      "$-\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$"
    ],
    "correctAnswer": 1,
    "explanation": "Perpendicular lines have slopes that are negative reciprocals. The negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2}$.",
    "difficulty": "medium",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 342,
    "question": "In a triangle, one side is extended to form an exterior angle. The two interior angles not adjacent to this exterior angle (the remote interior angles) measure $35^\\circ$ and $80^\\circ$. What is the measure of the exterior angle?",
    "options": [
      "$65^\\circ$",
      "$145^\\circ$",
      "$115^\\circ$",
      "$100^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "By the exterior-angle theorem, an exterior angle equals the sum of the two remote interior angles: $35^\\circ + 80^\\circ = 115^\\circ$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 343,
    "question": "A triangle has two sides with lengths $7$ and $10$. Which of the following could be the length of the third side?",
    "options": [
      "$4$",
      "$2$",
      "$17$",
      "$20$"
    ],
    "correctAnswer": 0,
    "explanation": "By the triangle inequality, the third side must be greater than $10 - 7 = 3$ and less than $10 + 7 = 17$. Only $4$ falls strictly between $3$ and $17$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 344,
    "question": "In a right triangle, one of the acute angles $\\theta$ has $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$. Using the relationship $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, what is the value of $\\tan\\theta$?",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{3}{5}$",
      "$\\frac{5}{4}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{4/5} = \\frac{3}{5} \\times \\frac{5}{4} = \\frac{3}{4}$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Right triangles and trigonometry"
  },
  {
    "id": 345,
    "question": "A cone has a volume of $48\\pi$ cubic inches and a height of $9$ inches. The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$. What is the radius of the cone's base, in inches?",
    "options": [
      "$16$",
      "$8$",
      "$4$",
      "$12$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute: $48\\pi = \\frac{1}{3}\\pi r^2 (9) = 3\\pi r^2$. Dividing by $3\\pi$ gives $r^2 = 16$, so $r = 4$ inches.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Area and volume"
  },
  {
    "id": 346,
    "question": "In the coordinate plane, what is the distance between the points $(1, 2)$ and $(7, 10)$?",
    "options": [
      "$10$",
      "$14$",
      "$8$",
      "$\\sqrt{28}$"
    ],
    "correctAnswer": 0,
    "explanation": "Distance $= \\sqrt{(7-1)^2 + (10-2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 347,
    "question": "An isosceles triangle has two congruent sides. One of its base angles (an angle opposite a congruent side) measures $55^\\circ$. What is the measure of the vertex angle (the angle between the two congruent sides)?",
    "options": [
      "$55^\\circ$",
      "$70^\\circ$",
      "$125^\\circ$",
      "$110^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "The two base angles of an isosceles triangle are congruent, so both measure $55^\\circ$. The vertex angle is $180^\\circ - 55^\\circ - 55^\\circ = 70^\\circ$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Lines, angles, and triangles"
  },
  {
    "id": 348,
    "question": "The circumference of a circle is $12\\pi$. What is the area of the circle?",
    "options": [
      "$12\\pi$",
      "$144\\pi$",
      "$6\\pi$",
      "$36\\pi$"
    ],
    "correctAnswer": 3,
    "explanation": "From $C = 2\\pi r = 12\\pi$, the radius is $r = 6$. Then the area $= \\pi r^2 = \\pi (6)^2 = 36\\pi$.",
    "difficulty": "hard",
    "area": "geometry",
    "skill": "Circles"
  }
]

function pick(pool: SatMathQuestion[], count: number): SatMathQuestion[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Return `count` questions. When `area` names a valid area, draws only
 * from that area; otherwise draws from the whole bank (mixed). The optional
 * argument is backward-compatible — existing callers pass only a count.
 */
export function getSatMathQuestions(count: number = 10, area?: string): SatMathQuestion[] {
  const pool = area && (MATH_AREAS as readonly string[]).includes(area)
    ? allQuestions.filter(q => q.area === area)
    : allQuestions
  return pick(pool, count)
}
