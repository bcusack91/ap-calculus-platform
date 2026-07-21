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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
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
    "area": "algebra"
  },
  {
    "id": 31,
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
    "area": "advanced"
  },
  {
    "id": 32,
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
    "area": "advanced"
  },
  {
    "id": 33,
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
    "area": "advanced"
  },
  {
    "id": 34,
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
    "area": "advanced"
  },
  {
    "id": 35,
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
    "area": "advanced"
  },
  {
    "id": 36,
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
    "area": "advanced"
  },
  {
    "id": 37,
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
    "area": "advanced"
  },
  {
    "id": 38,
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
    "area": "advanced"
  },
  {
    "id": 39,
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
    "area": "advanced"
  },
  {
    "id": 40,
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
    "area": "advanced"
  },
  {
    "id": 41,
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
    "area": "advanced"
  },
  {
    "id": 42,
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
    "area": "advanced"
  },
  {
    "id": 43,
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
    "area": "advanced"
  },
  {
    "id": 44,
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
    "area": "advanced"
  },
  {
    "id": 45,
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
    "area": "advanced"
  },
  {
    "id": 46,
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
    "area": "advanced"
  },
  {
    "id": 47,
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
    "area": "advanced"
  },
  {
    "id": 48,
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
    "area": "advanced"
  },
  {
    "id": 49,
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
    "area": "advanced"
  },
  {
    "id": 50,
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
    "area": "advanced"
  },
  {
    "id": 51,
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
    "area": "advanced"
  },
  {
    "id": 52,
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
    "area": "advanced"
  },
  {
    "id": 53,
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
    "area": "advanced"
  },
  {
    "id": 54,
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
    "area": "advanced"
  },
  {
    "id": 55,
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
    "area": "advanced"
  },
  {
    "id": 56,
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
    "area": "advanced"
  },
  {
    "id": 57,
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
    "area": "advanced"
  },
  {
    "id": 58,
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
    "area": "advanced"
  },
  {
    "id": 59,
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
    "area": "advanced"
  },
  {
    "id": 60,
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
    "area": "advanced"
  },
  {
    "id": 61,
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
    "area": "problem-solving"
  },
  {
    "id": 62,
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
    "area": "problem-solving"
  },
  {
    "id": 63,
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
    "area": "problem-solving"
  },
  {
    "id": 64,
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
    "area": "problem-solving"
  },
  {
    "id": 65,
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
    "area": "problem-solving"
  },
  {
    "id": 66,
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
    "area": "problem-solving"
  },
  {
    "id": 67,
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
    "area": "problem-solving"
  },
  {
    "id": 68,
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
    "area": "problem-solving"
  },
  {
    "id": 69,
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
    "area": "problem-solving"
  },
  {
    "id": 70,
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
    "area": "problem-solving"
  },
  {
    "id": 71,
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
    "area": "problem-solving"
  },
  {
    "id": 72,
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
    "area": "problem-solving"
  },
  {
    "id": 73,
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
    "area": "problem-solving"
  },
  {
    "id": 74,
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
    "area": "problem-solving"
  },
  {
    "id": 75,
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
    "area": "problem-solving"
  },
  {
    "id": 76,
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
    "area": "problem-solving"
  },
  {
    "id": 77,
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
    "area": "problem-solving"
  },
  {
    "id": 78,
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
    "area": "problem-solving"
  },
  {
    "id": 79,
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
    "area": "problem-solving"
  },
  {
    "id": 80,
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
    "area": "problem-solving"
  },
  {
    "id": 81,
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
    "area": "problem-solving"
  },
  {
    "id": 82,
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
    "area": "problem-solving"
  },
  {
    "id": 83,
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
    "area": "problem-solving"
  },
  {
    "id": 84,
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
    "area": "problem-solving"
  },
  {
    "id": 85,
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
    "area": "problem-solving"
  },
  {
    "id": 86,
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
    "area": "problem-solving"
  },
  {
    "id": 87,
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
    "area": "problem-solving"
  },
  {
    "id": 88,
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
    "area": "problem-solving"
  },
  {
    "id": 89,
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
    "area": "problem-solving"
  },
  {
    "id": 90,
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
    "area": "problem-solving"
  },
  {
    "id": 91,
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
    "area": "geometry"
  },
  {
    "id": 92,
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
    "area": "geometry"
  },
  {
    "id": 93,
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
    "area": "geometry"
  },
  {
    "id": 94,
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
    "area": "geometry"
  },
  {
    "id": 95,
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
    "area": "geometry"
  },
  {
    "id": 96,
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
    "area": "geometry"
  },
  {
    "id": 97,
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
    "area": "geometry"
  },
  {
    "id": 98,
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
    "area": "geometry"
  },
  {
    "id": 99,
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
    "area": "geometry"
  },
  {
    "id": 100,
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
    "area": "geometry"
  },
  {
    "id": 101,
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
    "area": "geometry"
  },
  {
    "id": 102,
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
    "area": "geometry"
  },
  {
    "id": 103,
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
    "area": "geometry"
  },
  {
    "id": 104,
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
    "area": "geometry"
  },
  {
    "id": 105,
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
    "area": "geometry"
  },
  {
    "id": 106,
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
    "area": "geometry"
  },
  {
    "id": 107,
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
    "area": "geometry"
  },
  {
    "id": 108,
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
    "area": "geometry"
  },
  {
    "id": 109,
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
    "area": "geometry"
  },
  {
    "id": 110,
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
    "area": "geometry"
  },
  {
    "id": 111,
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
    "area": "geometry"
  },
  {
    "id": 112,
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
    "area": "geometry"
  },
  {
    "id": 113,
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
    "area": "geometry"
  },
  {
    "id": 114,
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
    "area": "geometry"
  },
  {
    "id": 115,
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
    "area": "geometry"
  },
  {
    "id": 116,
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
    "area": "geometry"
  },
  {
    "id": 117,
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
    "area": "geometry"
  },
  {
    "id": 118,
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
    "area": "geometry"
  },
  {
    "id": 119,
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
    "area": "geometry"
  },
  {
    "id": 120,
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
    "area": "geometry"
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
