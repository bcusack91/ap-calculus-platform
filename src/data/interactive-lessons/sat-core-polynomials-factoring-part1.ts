export const lessonData = {
  topicSlug: 'sat-polynomials-factoring-core-skills',
  sections: [
    {
      id: 'poly-core-p1-intro',
      type: 'text' as const,
      content: `# Polynomials and Factoring: The Basics

**Part 1 of 2 — One Skill, One Idea**

A **polynomial** is an expression made of terms added or subtracted together, where each term is a number times a power of $x$. For example, $4x^{3} - 2x^{2} + 7$.

Three words to know:

- The **exponent** is the small raised number. It tells you how many times to multiply $x$ by itself.
- The **degree** is the largest exponent in the whole polynomial. In $4x^{3} - 2x^{2} + 7$, the degree is $3$.
- The **leading coefficient** is the number in front of the term with the largest exponent. Here it is $4$.

To **factor** means to rewrite something as a multiplication.

### The one move: pull out what every term shares

This is called factoring out the **greatest common factor**, or GCF. Look at every term. Find the biggest number and the most $x$ letters that all of them share. Pull that out in front.

### Worked example

Factor $6x^{2} + 15x$ completely.

Step 1 — Look at the numbers, $6$ and $15$. The biggest number that divides both is $3$.

Step 2 — Look at the letters. The first term has $x^{2}$, which is $x \\times x$. The second term has one $x$. Both have at least one $x$, so you can pull out one $x$.

Step 3 — The GCF is $3x$. Write it in front of a new set of parentheses: $3x( \\quad )$.

Step 4 — Divide each original term by $3x$ to fill the parentheses. First, $6x^{2} \\div 3x = 2x$. Second, $15x \\div 3x = 5$.

Step 5 — Write the answer: $3x(2x + 5)$.

Check by multiplying back out: $3x \\times 2x = 6x^{2}$ and $3x \\times 5 = 15x$. That matches, so the factoring is correct.

### Zeros and factors

A **zero** of a function is a value of $x$ that makes the function equal $0$. If $f(3) = 0$, then $3$ is a zero, and that also means $(x - 3)$ is one of the factors of $f(x)$. Zeros and factors are two ways of saying the same thing.`
    },
    {
      id: 'poly-core-p1-q1',
      type: 'quiz' as const,
      question: 'What is the degree of $4x^{3} - 2x^{2} + 7$?',
      options: ['$2$', '$4$', '$3$', '$7$'],
      correctAnswer: 2,
      explanation: 'The answer is $3$. The degree is the largest exponent anywhere in the polynomial. The exponents present are $3$ on the first term and $2$ on the second term, and the $7$ has no $x$ at all. The largest of those is $3$. The choice $4$ is the leading coefficient, which is the number out front, not the exponent.'
    },
    {
      id: 'poly-core-p1-q2',
      type: 'quiz' as const,
      question: 'Factor $5x^{2} + 20x$ completely.',
      options: ['$5x(x + 4)$', '$5(x^{2} + 4x)$', '$x(5x + 20)$', '$20x(x + 1)$'],
      correctAnswer: 0,
      explanation: 'The answer is $5x(x + 4)$. Both numbers, $5$ and $20$, are divisible by $5$, and both terms contain at least one $x$, so the greatest common factor is $5x$. Divide each term by $5x$: $5x^{2} \\div 5x = x$ and $20x \\div 5x = 4$. That gives $5x(x + 4)$. The choices $5(x^{2} + 4x)$ and $x(5x + 20)$ each pulled out only part of the shared factor, so they are not factored completely.'
    },
    {
      id: 'poly-core-p1-q3',
      type: 'quiz' as const,
      question: 'What is the leading coefficient of $-7x^{4} + 3x - 1$?',
      options: ['$4$', '$3$', '$-1$', '$-7$'],
      correctAnswer: 3,
      explanation: 'The answer is $-7$. The leading coefficient is the number in front of the term with the largest exponent. The largest exponent here is $4$, that term is $-7x^{4}$, and the number in front of it is $-7$. The minus sign is part of the coefficient, so it stays. The choice $4$ is the degree, which is the exponent itself.'
    },
    {
      id: 'poly-core-p1-q4',
      type: 'quiz' as const,
      question: 'If $f(3) = 0$, what does that tell you about $f(x)$?',
      options: ['$f(x)$ is equal to $0$ for every value of $x$', '$(x - 3)$ is a factor of $f(x)$', '$(x + 3)$ is a factor of $f(x)$', '$f(0) = 3$'],
      correctAnswer: 1,
      explanation: 'The answer is that $(x - 3)$ is a factor of $f(x)$. When putting $3$ in for $x$ gives an output of $0$, the number $3$ is a zero of the function, and every zero comes from a factor. The factor that gives the zero $3$ is $(x - 3)$, because setting $x - 3 = 0$ gives $x = 3$. The choice $(x + 3)$ would give the zero $x = -3$ instead.'
    }
  ]
}
