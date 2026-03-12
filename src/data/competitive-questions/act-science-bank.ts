// ACT Science question bank for competitive mode

export interface ActScienceQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ActScienceQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the independent variable in an experiment?',
    options: ['The variable the researcher changes', 'The variable being measured', 'The variable held constant', 'The random error'],
    correctAnswer: 0,
    explanation: 'The independent variable is what the researcher deliberately manipulates.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What does a control group represent in an experiment?',
    options: ['A baseline for comparison with no treatment', 'The group that receives the treatment', 'A group that is discarded', 'The group with the most participants'],
    correctAnswer: 0,
    explanation: 'The control group does not receive the experimental treatment and serves as a comparison baseline.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'If a graph shows temperature on the x-axis and reaction rate on the y-axis, with an upward slope, what can you conclude?',
    options: ['As temperature increases, reaction rate increases', 'Temperature has no effect on reaction rate', 'Reaction rate decreases with temperature', 'The variables are unrelated'],
    correctAnswer: 0,
    explanation: 'A positive slope indicates a direct/positive relationship between the variables.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is the function of a hypothesis in a scientific investigation?',
    options: ['A testable prediction about the outcome', 'A proven fact', 'The final conclusion', 'A theory that has been confirmed'],
    correctAnswer: 0,
    explanation: 'A hypothesis is a testable prediction that guides the experimental design.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Which tool is best for measuring the volume of a liquid precisely?',
    options: ['Graduated cylinder', 'Beaker', 'Erlenmeyer flask', 'Test tube'],
    correctAnswer: 0,
    explanation: 'Graduated cylinders have precise markings making them ideal for accurate volume measurement.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is a dependent variable?',
    options: ['The variable that is measured/observed', 'The variable that is manipulated', 'A constant in the experiment', 'A confounding factor'],
    correctAnswer: 0,
    explanation: 'The dependent variable is what is measured — it "depends" on changes to the independent variable.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What pH value indicates an acidic solution?',
    options: ['Below 7', 'Exactly 7', 'Above 7', 'Above 14'],
    correctAnswer: 0,
    explanation: 'pH < 7 is acidic, pH = 7 is neutral, and pH > 7 is basic.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What is the purpose of repeating an experiment?',
    options: ['To increase reliability of results', 'To change the hypothesis', 'To eliminate the control group', 'To prove the theory right'],
    correctAnswer: 0,
    explanation: 'Repetition increases reliability by showing that results are consistent and reproducible.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'A data table shows that as soil pH increases from 5 to 8, plant growth first increases then decreases. This relationship is best described as:',
    options: ['An optimal range with peak around pH 6-7', 'A positive linear relationship', 'A negative linear relationship', 'No relationship'],
    correctAnswer: 0,
    explanation: 'Growth increasing then decreasing suggests an optimal range — typical of many biological processes.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Two scientists disagree about whether a chemical reaction is endothermic or exothermic. What evidence would resolve this?',
    options: ['Measuring the temperature change during the reaction', 'Counting the number of molecules', 'Observing the color of the solution', 'Measuring the volume of products'],
    correctAnswer: 0,
    explanation: 'Exothermic reactions release heat (temperature rises), endothermic reactions absorb heat (temperature drops).',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'A graph shows an inverse relationship between two variables. What does the curve look like?',
    options: ['A decreasing curve (hyperbola)', 'A straight line going up', 'A horizontal line', 'A parabola opening upward'],
    correctAnswer: 0,
    explanation: 'An inverse relationship ($y = k/x$) produces a decreasing hyperbolic curve.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'If a study finds a correlation between ice cream sales and drowning incidents, what is the most likely explanation?',
    options: ['A confounding variable (hot weather) affects both', 'Ice cream causes drowning', 'Drowning causes ice cream sales', 'The study is invalid'],
    correctAnswer: 0,
    explanation: 'Correlation does not imply causation — the confounding variable (summer heat) independently drives both.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'In a titration experiment, the equivalence point is where:',
    options: ['The acid and base have completely reacted', 'The pH is exactly 7', 'The indicator changes color', 'Half the acid has been neutralized'],
    correctAnswer: 0,
    explanation: 'The equivalence point is where stoichiometrically equal amounts of acid and base have reacted (note: pH may not be 7).',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'An experiment tests 5 fertilizer concentrations on plant growth. Which best represents the data?',
    options: ['A bar graph or scatter plot', 'A pie chart', 'A Venn diagram', 'A flow chart'],
    correctAnswer: 0,
    explanation: 'A bar graph (categorical) or scatter plot (continuous) best shows the relationship between concentration and growth.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What is the difference between accuracy and precision?',
    options: ['Accuracy is closeness to true value; precision is consistency of measurements', 'They mean the same thing', 'Accuracy is consistency; precision is closeness to true value', 'Neither is important in science'],
    correctAnswer: 0,
    explanation: 'Accuracy = how close to the true value. Precision = how reproducible the measurements are.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'A scientist observes that plants grow taller in blue light than red light. This is:',
    options: ['An observation that could lead to further testing', 'A proven theory', 'A law of nature', 'An invalid conclusion'],
    correctAnswer: 0,
    explanation: 'An observation is the starting point for hypothesis formation and further experimentation.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'Two experiments test the same hypothesis but use different methods and both get similar results. This demonstrates:',
    options: ['The results are likely reliable and valid', 'The hypothesis must be wrong', 'One method must be flawed', 'The results are coincidental'],
    correctAnswer: 0,
    explanation: 'Convergent evidence from different methods strengthens confidence in the results.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'In a genetics experiment, the chi-square test is used to:',
    options: ['Determine if observed data differs significantly from expected ratios', 'Calculate the probability of a trait', 'Determine which allele is dominant', 'Count the number of offspring'],
    correctAnswer: 0,
    explanation: 'The chi-square test compares observed vs. expected results to determine if deviations are statistically significant.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'A study finds that Experiment 1 used 10 trials and Experiment 2 used 100 trials. Which limitation applies to Experiment 1?',
    options: ['Smaller sample size reduces statistical reliability', 'Larger sample sizes are always worse', 'The number of trials doesn\'t matter', 'The results are automatically invalid'],
    correctAnswer: 0,
    explanation: 'Smaller sample sizes increase the margin of error and reduce statistical power.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'A student claims that all metals are magnetic. Which observation would disprove this claim?',
    options: ['Finding a non-magnetic metal like copper', 'Finding a magnetic metal like iron', 'Finding a magnetic non-metal', 'Not finding any magnets'],
    correctAnswer: 0,
    explanation: 'A single counterexample (non-magnetic metal) disproves a universal claim. Copper, aluminum, and gold are non-magnetic metals.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'Two scientists present conflicting viewpoints on climate data. The key to evaluating their claims is:',
    options: ['Examining the evidence and methods each scientist uses', 'Choosing the scientist with more publications', 'Agreeing with the majority opinion', 'Ignoring both viewpoints'],
    correctAnswer: 0,
    explanation: 'Scientific claims should be evaluated based on evidence quality, methodology, and logical reasoning.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'An enzyme\'s activity decreases above 40°C. This is most likely because:',
    options: ['The enzyme denatures at high temperatures', 'The enzyme becomes more efficient', 'The substrate runs out', 'The pH changes'],
    correctAnswer: 0,
    explanation: 'High temperatures disrupt hydrogen bonds that maintain enzyme shape (tertiary structure), reducing catalytic activity.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'In a conflicting viewpoints passage, Scientist 1 claims the extinction was caused by an asteroid and Scientist 2 claims volcanic activity. Both could be correct if:',
    options: ['Both factors contributed to the extinction event', 'Only one scientist can be right', 'The extinction never happened', 'The evidence is fabricated'],
    correctAnswer: 0,
    explanation: 'Scientific viewpoints can be complementary — multiple causal factors can contribute to a single event.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'A radioactive isotope has a half-life of 10 years. After 30 years, what fraction of the original sample remains?',
    options: ['$1/8$', '$1/4$', '$1/3$', '$1/16$'],
    correctAnswer: 0,
    explanation: '30 years = 3 half-lives. Remaining = $(1/2)^3 = 1/8$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'In an experimental design, what is the purpose of a double-blind procedure?',
    options: ['To prevent both researcher and subject bias', 'To double the sample size', 'To test two variables at once', 'To eliminate the control group'],
    correctAnswer: 0,
    explanation: 'Double-blind means neither the subjects nor the researchers know who receives the treatment, minimizing bias.',
    difficulty: 'hard',
  },
]

export function getActScienceQuestions(count: number = 10): ActScienceQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
