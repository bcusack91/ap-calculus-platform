import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Statistics Batch 9 (Final 3 topics)...\n');

  // Topic 1: Paired Data
  const pairedDataTopic = await prisma.topic.findFirst({
    where: {
      slug: 'paired-data',
      category: {
        course: {
          slug: 'ap-statistics'
        }
      }
    }
  });

  if (pairedDataTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: pairedDataTopic.id,
          question: 'A researcher wants to test if a new study technique improves test scores. She records the scores of 10 students before and after using the technique. Why should she use a paired t-test rather than a two-sample t-test?',
          solution: 'She should use a paired t-test because the same students are measured twice (before and after), creating natural pairs. This violates the independence assumption required for two-sample t-tests. The paired design is more powerful because it controls for individual student differences in baseline ability.\n\nKey considerations:\n• Each student serves as their own control\n• Focus is on the difference within each pair\n• Reduces variability by eliminating between-student differences',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          question: 'Ten married couples were asked to rate their happiness on a scale from 1 to 10. The differences (husband - wife) in ratings were: 2, -1, 0, 3, -2, 1, 0, 2, -1, 1. Construct a 95% confidence interval for the mean difference in happiness ratings.',
          solution: 'Step 1: Calculate statistics from differences\nd̄ = (2 + (-1) + 0 + 3 + (-2) + 1 + 0 + 2 + (-1) + 1) / 10 = 0.5\n\nStep 2: Calculate standard deviation\nsd = √[Σ(di - d̄)² / (n-1)] = √[14.5 / 9] ≈ 1.27\n\nStep 3: Find t* for df = 9, 95% confidence\nt* = 2.262\n\nStep 4: Calculate confidence interval\nCI = d̄ ± t*(sd/√n)\nCI = 0.5 ± 2.262(1.27/√10)\nCI = 0.5 ± 0.91\nCI = (-0.41, 1.41)\n\nConclusion: We are 95% confident that the true mean difference in happiness ratings (husband - wife) is between -0.41 and 1.41 points.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          question: 'A coach wants to know if a new training program improves 100m sprint times. He records the times of 8 runners before and after the program. The mean difference (before - after) is 0.3 seconds with a standard deviation of 0.4 seconds. Test at α = 0.05 if the program improves times.',
          solution: 'H₀: μd = 0 (no improvement)\nHₐ: μd > 0 (improvement, before > after)\n\nTest statistic:\nt = (d̄ - 0) / (sd/√n)\nt = (0.3 - 0) / (0.4/√8)\nt = 0.3 / 0.141\nt ≈ 2.12\n\ndf = n - 1 = 7\n\nP-value (one-tailed):\nP(t > 2.12) ≈ 0.036\n\nDecision:\nSince p-value (0.036) < α (0.05), reject H₀\n\nConclusion: There is sufficient evidence at the 5% significance level to conclude that the training program improves 100m sprint times.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          question: 'A pharmaceutical company tests a new medication on 15 patients with high blood pressure. Each patient\'s blood pressure is measured before treatment and after 3 months. The differences (before - after) have a mean of 8 mmHg and standard deviation of 6 mmHg. Can we conclude at α = 0.01 that the medication lowers blood pressure?',
          solution: 'H₀: μd = 0 (no change)\nHₐ: μd > 0 (blood pressure decreases)\n\nTest statistic:\nt = (d̄ - 0) / (sd/√n)\nt = (8 - 0) / (6/√15)\nt = 8 / 1.549\nt ≈ 5.16\n\ndf = 14\n\nP-value (one-tailed):\nP(t > 5.16) < 0.0001\n\nDecision:\nSince p-value < 0.01, reject H₀\n\nConclusion: There is very strong evidence (p < 0.01) that the medication lowers blood pressure. The large t-statistic (5.16) indicates the effect is both statistically significant and likely clinically meaningful.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: pairedDataTopic.id,
          question: 'A nutritionist studies whether eating breakfast affects students\' performance on a math test. She has 20 students take a test after skipping breakfast and another test after eating breakfast (order randomized). Why is this a paired design? What are the advantages and potential concerns?',
          solution: 'Why it\'s paired:\nEach student takes both tests (no breakfast and with breakfast), creating natural pairs. We analyze the difference in scores for each student.\n\nAdvantages:\n• Controls for individual differences in math ability\n• More powerful than independent samples design\n• Requires fewer subjects (20 vs 40 for independent groups)\n• Each student serves as their own control\n\nPotential concerns:\n1. Practice effect: Students might do better on the second test regardless of breakfast\n   Solution: Randomize which condition comes first\n\n2. Carryover effect: Effects from first test might influence second test\n   Solution: Sufficient time between tests\n\n3. Different test difficulty: If tests aren\'t equivalent, this confounds results\n   Solution: Use equivalent forms or counterbalance test versions\n\n4. Learning between tests: Students might study between tests\n   Solution: Control time between tests, avoid giving feedback',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: pairedDataTopic.id,
          front: 'What makes data "paired" or "matched"?',
          back: 'Data is paired when each observation in one group has a natural connection to exactly one observation in the other group. Common examples: before/after measurements on the same subject, twins, matched controls.',
          hint: 'Think about whether observations are connected or independent',
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          front: 'In a paired t-test, what do we actually analyze?',
          back: 'We analyze the differences within each pair, treating these differences as our data. We then perform a one-sample t-test on these differences to see if the mean difference is significantly different from zero.',
          hint: 'We transform paired data into single-sample data',
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          front: 'What are the assumptions for a paired t-test?',
          back: '1. Random sample of pairs\n2. The differences are approximately normally distributed (or n ≥ 30)\n3. No extreme outliers in the differences',
          hint: 'Check conditions on the differences, not the original values',
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          front: 'Why is a paired design generally more powerful than an independent samples design?',
          back: 'Pairing removes variability due to individual differences. By using each subject as their own control, we isolate the treatment effect from natural variation between subjects, making it easier to detect real differences.',
          hint: 'Think about what sources of variation are eliminated',
          isPremium: false
        },
        {
          topicId: pairedDataTopic.id,
          front: 'What is the degrees of freedom for a paired t-test with n pairs?',
          back: 'df = n - 1, where n is the number of pairs. This is because we treat the n differences as a single sample.',
          hint: 'Same as one-sample t-test since we analyze differences',
          isPremium: true
        },
        {
          topicId: pairedDataTopic.id,
          front: 'How do you decide between a paired t-test and a two-sample t-test?',
          back: 'Use paired t-test if: observations are naturally connected (same subjects measured twice, twins, matched pairs). Use two-sample t-test if: observations are independent (different subjects in each group, no natural pairing).',
          hint: 'Ask: "Are the observations connected or independent?"',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Paired Data');
  }

  // Topic 2: Chi-Square Tests
  const chiSquareTopic = await prisma.topic.findFirst({
    where: {
      slug: 'chi-square-tests',
      category: {
        course: {
          slug: 'ap-statistics'
        }
      }
    }
  });

  if (chiSquareTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: chiSquareTopic.id,
          question: 'A candy company claims their candy bags contain equal proportions of red, blue, green, and yellow candies. A bag contains 30 red, 25 blue, 20 green, and 25 yellow candies. What type of chi-square test should be used, and what are the expected counts?',
          solution: 'Test type: Chi-square goodness-of-fit test\n(Testing if observed distribution matches a claimed distribution)\n\nTotal candies = 30 + 25 + 20 + 25 = 100\n\nIf proportions are equal, each color should be 25% of total:\nExpected count for each color = 100 × 0.25 = 25\n\nExpected counts:\n• Red: 25\n• Blue: 25\n• Green: 25\n• Yellow: 25\n\nAll expected counts ≥ 5, so conditions are met.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          question: 'A researcher surveys 200 people about their exercise habits and stress levels. The results are shown below. Calculate the chi-square test statistic.\n\n               Low Stress | High Stress\nExercise       60         | 40\nNo Exercise    30         | 70',
          solution: 'Step 1: Calculate expected counts\nRow totals: Exercise = 100, No Exercise = 100\nColumn totals: Low Stress = 90, High Stress = 110\nGrand total = 200\n\nExpected = (row total × column total) / grand total\n\nExpected counts:\n• Exercise & Low: (100 × 90)/200 = 45\n• Exercise & High: (100 × 110)/200 = 55\n• No Exercise & Low: (100 × 90)/200 = 45\n• No Exercise & High: (100 × 110)/200 = 55\n\nStep 2: Calculate χ²\nχ² = Σ[(Observed - Expected)² / Expected]\n\nχ² = (60-45)²/45 + (40-55)²/55 + (30-45)²/45 + (70-55)²/55\nχ² = 225/45 + 225/55 + 225/45 + 225/55\nχ² = 5 + 4.09 + 5 + 4.09\nχ² ≈ 18.18\n\ndf = (rows - 1)(columns - 1) = (2-1)(2-1) = 1',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          question: 'A die is rolled 120 times with the following results: 1(15), 2(18), 3(22), 4(25), 5(20), 6(20). Test at α = 0.05 if the die is fair.',
          solution: 'H₀: The die is fair (all outcomes equally likely)\nHₐ: The die is not fair\n\nExpected count for fair die: 120/6 = 20 for each outcome\n\nχ² = Σ[(O - E)² / E]\nχ² = (15-20)²/20 + (18-20)²/20 + (22-20)²/20 + (25-20)²/20 + (20-20)²/20 + (20-20)²/20\nχ² = 25/20 + 4/20 + 4/20 + 25/20 + 0/20 + 0/20\nχ² = 1.25 + 0.2 + 0.2 + 1.25 + 0 + 0\nχ² = 2.9\n\ndf = 6 - 1 = 5\n\nP-value: P(χ² > 2.9) ≈ 0.715\n\nDecision: Since p-value (0.715) > α (0.05), fail to reject H₀\n\nConclusion: There is insufficient evidence to conclude the die is unfair.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          question: 'A study examines the relationship between smoking status and lung disease in 500 people:\n\n               Disease | No Disease\nSmoker         80      | 120\nNon-smoker     20      | 280\n\nPerform a chi-square test at α = 0.01 to determine if smoking and lung disease are independent.',
          solution: 'H₀: Smoking status and lung disease are independent\nHₐ: Smoking status and lung disease are associated\n\nStep 1: Calculate expected counts\nRow totals: Smoker = 200, Non-smoker = 300\nColumn totals: Disease = 100, No Disease = 400\nTotal = 500\n\nExpected counts:\n• Smoker & Disease: (200×100)/500 = 40\n• Smoker & No Disease: (200×400)/500 = 160\n• Non-smoker & Disease: (300×100)/500 = 60\n• Non-smoker & No Disease: (300×400)/500 = 240\n\nStep 2: Calculate χ²\nχ² = (80-40)²/40 + (120-160)²/160 + (20-60)²/60 + (280-240)²/240\nχ² = 1600/40 + 1600/160 + 1600/60 + 1600/240\nχ² = 40 + 10 + 26.67 + 6.67\nχ² ≈ 83.34\n\ndf = (2-1)(2-1) = 1\n\nP-value: P(χ² > 83.34) < 0.0001\n\nDecision: Reject H₀\n\nConclusion: There is very strong evidence (p < 0.01) that smoking status and lung disease are associated.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: chiSquareTopic.id,
          question: 'A school surveys students from three grades about their favorite subject. Results:\n\nGrade 9:  Math(40), Science(30), English(30)\nGrade 10: Math(35), Science(35), English(30)\nGrade 11: Math(25), Science(45), English(30)\n\nTest if the distribution of favorite subject is the same across grades at α = 0.05.',
          solution: 'H₀: Distribution of favorite subject is the same across grades\nHₐ: Distribution differs by grade\n\nStep 1: Set up table\n          Math | Science | English | Total\nGrade 9    40  |   30    |   30    | 100\nGrade 10   35  |   35    |   30    | 100\nGrade 11   25  |   45    |   30    | 100\nTotal     100  |  110    |   90    | 300\n\nStep 2: Calculate expected counts\nE = (row total × column total) / grand total\n\nFor each cell:\nGrade 9 & Math: (100×100)/300 = 33.33\nGrade 9 & Science: (100×110)/300 = 36.67\nGrade 9 & English: (100×90)/300 = 30\n[Continue for all cells...]\n\nStep 3: Calculate χ²\nχ² = (40-33.33)²/33.33 + (30-36.67)²/36.67 + ... (all 9 cells)\nχ² ≈ 1.33 + 1.21 + 0 + 0.09 + 0.08 + 0 + 2.08 + 1.89 + 0\nχ² ≈ 6.68\n\ndf = (3-1)(3-1) = 4\n\nP-value: P(χ² > 6.68) ≈ 0.154\n\nDecision: Fail to reject H₀\n\nConclusion: There is insufficient evidence that the distribution of favorite subject differs across grades.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: chiSquareTopic.id,
          front: 'What are the two main types of chi-square tests?',
          back: '1. Goodness-of-fit test: Tests if a sample distribution matches a claimed population distribution\n2. Test of independence (or homogeneity): Tests if two categorical variables are independent',
          hint: 'One for single variable, one for relationship between variables',
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          front: 'What is the formula for the chi-square test statistic?',
          back: 'χ² = Σ[(Observed - Expected)² / Expected]\n\nSum over all categories or cells, where:\n• Observed = actual count\n• Expected = count under H₀',
          hint: 'Measures how far observed counts are from expected',
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          front: 'What are the conditions for using a chi-square test?',
          back: '1. Random sample or random assignment\n2. Independence: each observation counts in only one category\n3. All expected counts ≥ 5 (some sources say ≥ 1 with all ≥ 5 for most)',
          hint: 'Check expected counts, not observed counts',
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          front: 'How do you calculate expected counts in a two-way table?',
          back: 'Expected count = (row total × column total) / grand total\n\nCalculate for each cell in the table.',
          hint: 'Uses marginal totals',
          isPremium: false
        },
        {
          topicId: chiSquareTopic.id,
          front: 'What are the degrees of freedom for a goodness-of-fit test? For a test of independence?',
          back: 'Goodness-of-fit: df = (number of categories) - 1\n\nTest of independence: df = (rows - 1) × (columns - 1)',
          hint: 'Count categories or cells, then subtract',
          isPremium: true
        },
        {
          topicId: chiSquareTopic.id,
          front: 'Why are chi-square tests always right-tailed?',
          back: 'The test statistic χ² = Σ[(O-E)²/E] is always ≥ 0 (squared differences). Large values indicate poor fit or strong association, providing evidence against H₀. We only reject H₀ for large χ² values.',
          hint: 'Think about the formula - squaring makes all terms positive',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Chi-Square Tests');
  }

  // Topic 3: Scatter Plots and Correlation
  const scatterplotsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'scatterplots-correlation-stats',
      category: {
        course: {
          slug: 'ap-statistics'
        }
      }
    }
  });

  if (scatterplotsTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: scatterplotsTopic.id,
          question: 'A scatterplot shows a strong positive linear relationship between hours studied and test scores. What does this tell you about the correlation coefficient r?',
          solution: 'For a strong positive linear relationship:\n• r will be close to +1\n• r will be positive (between 0 and 1)\n• The closer r is to +1, the stronger the relationship\n\nTypical ranges:\n• r = 0.8 to 1.0: Strong positive\n• r = 0.5 to 0.8: Moderate positive\n• r = 0.2 to 0.5: Weak positive\n\nKey point: "Strong" and "positive" both describe r. The correlation coefficient quantifies what we see visually in the scatterplot.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          question: 'For five students, hours studied (x) and test scores (y) are: (2,70), (3,75), (4,85), (5,90), (6,95). Calculate the correlation coefficient r.',
          solution: 'Step 1: Calculate means\nx̄ = (2+3+4+5+6)/5 = 4\nȳ = (70+75+85+90+95)/5 = 83\n\nStep 2: Calculate deviations and products\n(x,y): (x-x̄), (y-ȳ), (x-x̄)(y-ȳ), (x-x̄)², (y-ȳ)²\n(2,70): -2, -13, 26, 4, 169\n(3,75): -1, -8, 8, 1, 64\n(4,85): 0, 2, 0, 0, 4\n(5,90): 1, 7, 7, 1, 49\n(6,95): 2, 12, 24, 4, 144\n\nStep 3: Calculate sums\nΣ(x-x̄)(y-ȳ) = 26+8+0+7+24 = 65\nΣ(x-x̄)² = 4+1+0+1+4 = 10\nΣ(y-ȳ)² = 169+64+4+49+144 = 430\n\nStep 4: Calculate r\nr = Σ(x-x̄)(y-ȳ) / √[Σ(x-x̄)² × Σ(y-ȳ)²]\nr = 65 / √(10 × 430)\nr = 65 / √4300\nr = 65 / 65.57\nr ≈ 0.991\n\nThe very high positive correlation (r ≈ 0.99) indicates a strong positive linear relationship.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          question: 'A study finds r = -0.85 between temperature and heating costs. Interpret this value and explain what it does NOT mean.',
          solution: 'Interpretation:\n• Strong negative linear association (|r| = 0.85 is strong)\n• As temperature increases, heating costs tend to decrease\n• 85% of the strength of a perfect negative linear relationship\n\nWhat r does NOT mean:\n\n1. NOT causation: Correlation doesn\'t prove temperature causes heating cost changes (though we might infer this from context)\n\n2. NOT r² = 72%: We cannot say "72% of variation explained" without calculating r²\n\n3. NOT applicable to nonlinear relationships: r only measures linear association\n\n4. NOT robust to outliers: r can be heavily influenced by extreme points\n\n5. NOT a slope: r = -0.85 doesn\'t mean "heating costs decrease by $0.85 per degree"\n\nCommon mistake: Confusing r with r² or interpreting r as causation.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          question: 'Two variables have r = 0.02. A researcher concludes there is no relationship between the variables. Why might this conclusion be incorrect? Give two reasons.',
          solution: 'Reason 1: Nonlinear relationships\nr only measures LINEAR association. The variables could have a strong curved relationship (quadratic, exponential, etc.) that r = 0.02 doesn\'t detect.\n\nExample: y = x² has r ≈ 0 for x ranging from -5 to 5, but there\'s a perfect (nonlinear) relationship.\n\nReason 2: Restricted range\nIf the data only covers a small portion of the full range of values, r might be near zero even if a strong relationship exists over a wider range.\n\nExample: Height vs. weight for adults aged 30-31 might show r ≈ 0, but for adults aged 2-80, r would be much stronger.\n\nOther possibilities:\n• Outliers depressing r\n• Separate groups each with their own relationship\n• Measurement error reducing observed correlation\n\nConclusion: Always examine the scatterplot! r alone doesn\'t tell the full story.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: scatterplotsTopic.id,
          question: 'A scatterplot of (height in inches, weight in pounds) has r = 0.70. If height is converted to centimeters and weight to kilograms, what is the new correlation? What if we swap which variable is x and which is y?',
          solution: 'Converting units:\nNew correlation = 0.70 (unchanged)\n\nExplanation: Correlation is unitless and unaffected by linear transformations (multiplying by a constant or adding a constant). Converting inches to cm (multiply by 2.54) and pounds to kg (divide by 2.2) are linear transformations.\n\nSwapping x and y:\nNew correlation = 0.70 (unchanged)\n\nExplanation: Correlation is symmetric. The strength of linear association between height and weight is the same as between weight and height.\n\nProperties of r:\n• -1 ≤ r ≤ 1\n• Unitless\n• Symmetric: r(x,y) = r(y,x)\n• Unchanged by linear transformations\n• Measures only LINEAR relationships\n\nWhat WOULD change r:\n• Nonlinear transformations (log, square, etc.)\n• Adding/removing data points\n• Changing the data itself',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: scatterplotsTopic.id,
          front: 'What does a scatterplot display?',
          back: 'A scatterplot displays the relationship between two quantitative variables. Each point represents one individual/case, with the x-coordinate showing one variable\'s value and the y-coordinate showing the other variable\'s value.',
          hint: 'Two quantitative variables, each case is one point',
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          front: 'What four features should you describe when analyzing a scatterplot?',
          back: '1. Direction (positive, negative, or no association)\n2. Form (linear, curved, clusters)\n3. Strength (how closely points follow the form)\n4. Outliers (unusual points)',
          hint: 'Remember: Direction, Form, Strength, Outliers',
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          front: 'What is the correlation coefficient r and what does it measure?',
          back: 'r measures the strength and direction of a LINEAR relationship between two quantitative variables. Values range from -1 to +1, where:\n• r close to ±1: strong linear relationship\n• r close to 0: weak linear relationship',
          hint: 'Quantifies linear association only',
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          front: 'What are important properties of the correlation coefficient r?',
          back: '• Unitless\n• Symmetric: r(x,y) = r(y,x)\n• -1 ≤ r ≤ 1\n• Only measures LINEAR relationships\n• Sensitive to outliers\n• Does NOT imply causation',
          hint: 'What stays the same? What does it measure? What are its limits?',
          isPremium: false
        },
        {
          topicId: scatterplotsTopic.id,
          front: 'If r = 0, does that mean there is no relationship between the variables?',
          back: 'No! r = 0 only means there is no LINEAR relationship. There could still be a strong nonlinear relationship (curved, U-shaped, etc.). Always look at the scatterplot!',
          hint: 'r only measures one type of relationship',
          isPremium: true
        },
        {
          topicId: scatterplotsTopic.id,
          front: 'How can outliers affect correlation?',
          back: 'Outliers can dramatically increase or decrease r, depending on whether they follow or contradict the general pattern. A single outlier can make a strong relationship appear weak, or create the appearance of a relationship where none exists for most data.',
          hint: 'r is not resistant to outliers',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Scatter Plots and Correlation');
  }

  console.log('\n🎉 Batch 9 complete!\n');

  // Check overall progress
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-statistics' },
    include: {
      categories: {
        include: {
          topics: {
            include: {
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true
                }
              }
            }
          }
        }
      }
    }
  });

  if (course) {
    const totalTopics = course.categories.reduce((sum, cat) => sum + cat.topics.length, 0);
    const topicsWithProblems = course.categories.reduce(
      (sum, cat) => sum + cat.topics.filter(t => t._count.exampleProblems > 0).length,
      0
    );

    console.log(`📈 Overall Progress: ${topicsWithProblems}/${totalTopics} topics (${Math.round(topicsWithProblems/totalTopics * 100)}%)`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
