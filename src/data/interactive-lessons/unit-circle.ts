export const unitCircleLessonData = {
  topicSlug: 'the-unit-circle',
  sections: [
    {
      id: 'intro',
      type: 'text' as const,
      content: `
        <h2 class="text-3xl font-bold mb-4 text-foreground">Welcome to the Interactive Unit Circle Lesson!</h2>
        <p class="text-lg mb-4 text-foreground">
          In this interactive lesson, you'll master the unit circle through a simple counting technique 
          that makes memorizing those tricky values super easy!
        </p>
        <p class="text-lg text-foreground">
          Click "Next" when you're ready to begin learning the counting method.
        </p>
      `
    },
    {
      id: 'step1-intro',
      type: 'text' as const,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-foreground">Step 1: Count from 0 to 4</h2>
        <p class="text-lg mb-4 text-foreground">
          The first step is simple: we're going to count from 0 to 4, including both 0 and 4.
        </p>
        <p class="text-lg text-foreground">
          These five numbers will become the foundation for remembering all the key sine and cosine values!
        </p>
      `
    },
    {
      id: 'step1-practice',
      type: 'input-boxes' as const,
      content: `
        <h3 class="text-xl font-bold mb-6 text-foreground">Now it's your turn!</h3>
        <p class="text-lg mb-6 text-foreground">
          Fill in the boxes below by counting from 0 to 4:
        </p>
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['0', '1', '2', '3', '4']
      }
    },
    {
      id: 'step2-intro',
      type: 'text' as const,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-foreground">Step 2: Put Each Number Under a Square Root</h2>
        <p class="text-lg mb-4 text-foreground">
          Great job! Now we're going to take those numbers (0, 1, 2, 3, 4) and put each one under a square root symbol.
        </p>
        <p class="text-lg mb-4 text-foreground">
          So we get: √0, √1, √2, √3, √4
        </p>
        <p class="text-lg text-foreground">
          This might seem strange, but trust the process - it's about to make perfect sense!
        </p>
      `
    },
    {
      id: 'step3-intro',
      type: 'text' as const,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-foreground">Step 3: Simplify the Perfect Squares</h2>
        <p class="text-lg mb-4 text-foreground">
          Now we simplify any perfect squares in our list: √0, √1, √2, √3, √4
        </p>
        <p class="text-lg mb-4 text-foreground">
          Remember: A perfect square is a number whose square root is a whole number.
        </p>
        <ul class="list-disc list-inside space-y-2 text-lg ml-6 mb-4 text-foreground">
          <li>√0 = 0 (because 0² = 0)</li>
          <li>√1 = 1 (because 1² = 1)</li>
          <li>√2 stays as √2 (not a perfect square)</li>
          <li>√3 stays as √3 (not a perfect square)</li>
          <li>√4 = 2 (because 2² = 4)</li>
        </ul>
      `
    },
    {
      id: 'step3-practice',
      type: 'dropdown-select' as const,
      content: `
        <h3 class="text-xl font-bold mb-6 text-foreground">Practice: Simplify the Square Roots</h3>
        <p class="text-lg mb-6 text-foreground">
          Select the correct simplified form for each square root:
        </p>
      `,
      exercise: {
        dropdowns: [
          {
            label: '√0 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√1 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√2 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√3 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√4 =',
            options: ['0', '1', '√2', '√3', '2']
          }
        ],
        correctAnswers: ['0', '1', '√2', '√3', '2']
      }
    },
    {
      id: 'step4-intro',
      type: 'text' as const,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-foreground">Step 4: Divide Everything by 2</h2>
        <p class="text-lg mb-4 text-foreground">
          Almost there! Now we take our simplified values (0, 1, √2, √3, 2) and divide each by 2.
        </p>
        <p class="text-lg mb-4 text-foreground">
          This gives us:
        </p>
        <div class="text-center text-2xl font-bold my-6 text-foreground">
          0/2, 1/2, √2/2, √3/2, 2/2
        </div>
        <p class="text-lg mb-4 text-foreground">
          Which simplifies to:
        </p>
        <div class="text-center text-2xl font-bold my-6 text-green-600 dark:text-green-400">
          0, 1/2, √2/2, √3/2, 1
        </div>
      `
    },
    {
      id: 'revelation',
      type: 'text' as const,
      content: `
        <h2 class="text-3xl font-bold mb-4 text-foreground">🎉 You Did It!</h2>
        <div class="bg-yellow-100 dark:bg-yellow-900/30 border-4 border-yellow-400 dark:border-yellow-600 rounded-lg p-6 mb-6">
          <p class="text-xl font-bold mb-4 text-center text-foreground">
            These are the SINE values for 0°, 30°, 45°, 60°, and 90°!
          </p>
          <div class="text-center text-2xl font-bold text-green-700 dark:text-green-400 space-y-2">
            <div>sin(0°) = 0</div>
            <div>sin(30°) = 1/2</div>
            <div>sin(45°) = √2/2</div>
            <div>sin(60°) = √3/2</div>
            <div>sin(90°) = 1</div>
          </div>
        </div>
        <p class="text-lg mb-4 text-foreground">
          <strong>BONUS TIP:</strong> For cosine values, just reverse the order!
        </p>
        <div class="text-center text-xl font-bold text-blue-700 dark:text-blue-400 space-y-2">
          <div>cos(0°) = 1</div>
          <div>cos(30°) = √3/2</div>
          <div>cos(45°) = √2/2</div>
          <div>cos(60°) = 1/2</div>
          <div>cos(90°) = 0</div>
        </div>
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
        <h2 class="text-3xl font-bold mb-4 text-center text-foreground">🌟 Lesson Complete! 🌟</h2>
        <p class="text-lg text-center mb-6 text-foreground">
          Congratulations! You've mastered the counting method for memorizing unit circle values.
        </p>
        <p class="text-lg text-center text-foreground">
          Practice this technique a few times, and you'll never forget these values again!
        </p>
      `
    }
  ]
}
