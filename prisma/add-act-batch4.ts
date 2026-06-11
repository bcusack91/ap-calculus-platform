import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - Batch 4 (3 topics)\n');

  // Topic 1: Data Representation in Science
  const dataRepTopic = await prisma.topic.findFirst({
    where: {
      slug: 'data-representation-science',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (dataRepTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dataRepTopic.id,
          question: 'The graph shows temperature (°C) vs. time (hours) for a chemical reaction. At hour 2, the temperature is 40°C. At hour 6, the temperature is 60°C. What is the average rate of temperature change?\n\nA) 5°C per hour\nB) 10°C per hour\nC) 20°C per hour\nD) 50°C per hour\nE) 100°C per hour',
          solution: 'Rate of change = (change in y) / (change in x)\n\nGiven data points:\n• Hour 2: 40°C\n• Hour 6: 60°C\n\nStep 1: Find change in temperature (Δy)\nΔTemp = 60°C - 40°C = 20°C\n\nStep 2: Find change in time (Δx)\nΔTime = 6 hours - 2 hours = 4 hours\n\nStep 3: Calculate rate\nRate = ΔTemp / ΔTime\nRate = 20°C / 4 hours = 5°C per hour\n\nAnswer: A) 5°C per hour\n\nThis is slope calculation:\nSlope = (y₂ - y₁) / (x₂ - x₁)\nSlope = (60 - 40) / (6 - 2) = 20/4 = 5\n\nACT Science tip:\n• Rate of change = slope of line\n• Units matter: °C per hour\n• Watch for trap answers (20 is the total change, not the rate)',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: dataRepTopic.id,
          question: 'A table shows pH levels of different solutions:\n\nSolution A: pH 3\nSolution B: pH 7  \nSolution C: pH 11\nSolution D: pH 14\n\nWhich solution is the strongest base?\n\nF) Solution A\nG) Solution B\nH) Solution C\nJ) Solution D',
          solution: 'Understanding the pH scale is essential for ACT Science.\n\npH Scale (0-14):\n• 0-6: Acidic (lower = stronger acid)\n• 7: Neutral\n• 8-14: Basic/Alkaline (higher = stronger base)\n\nGiven data:\n• Solution A: pH 3 (strong acid)\n• Solution B: pH 7 (neutral)\n• Solution C: pH 11 (base)\n• Solution D: pH 14 (strongest base)\n\nStep 1: Identify bases\nBases have pH > 7\nSolutions C and D are bases\n\nStep 2: Find strongest base\nHigher pH = stronger base\npH 14 > pH 11\n\nAnswer: J) Solution D\n\nRemember:\n• pH < 7: acid (lower = stronger)\n• pH = 7: neutral (water)\n• pH > 7: base (higher = stronger)\n• Each pH unit is 10x difference in concentration!\n\nExamples:\n• Lemon juice: pH 2 (acid)\n• Water: pH 7 (neutral)\n• Soap: pH 10 (base)\n• Drain cleaner: pH 14 (strong base)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: dataRepTopic.id,
          question: 'A scatter plot shows the relationship between hours studied and test scores for 20 students. The correlation coefficient is r = 0.85. What can be concluded?\n\nA) Studying causes higher test scores\nB) There is a strong positive correlation between studying and scores\nC) All students who study more get higher scores\nD) The correlation is weak\nE) There is a negative correlation',
          solution: 'Correlation coefficient (r) measures strength and direction of linear relationship.\n\nGiven: r = 0.85\n\nStep 1: Interpret correlation coefficient\nr ranges from -1 to +1:\n• r = +1: perfect positive correlation\n• r = -1: perfect negative correlation  \n• r = 0: no correlation\n• |r| > 0.7: strong correlation\n• |r| < 0.3: weak correlation\n\nStep 2: Analyze r = 0.85\n• Positive (0.85 > 0) ✓\n• Strong (0.85 > 0.7) ✓\n• Not perfect (0.85 ≠ 1.0)\n\nStep 3: Evaluate statements\n\nA) "Studying causes higher test scores"\n• Correlation ≠ Causation! ✗\n• Could be confounding variables\n\nB) "There is a strong positive correlation between studying and scores"\n• Accurate description of r = 0.85 ✓ CORRECT!\n\nC) "All students who study more get higher scores"\n• "All" is too absolute\n• Correlation isn\'t perfect ✗\n\nD) "The correlation is weak"\n• 0.85 is strong, not weak ✗\n\nE) "There is a negative correlation"\n• Positive, not negative ✗\n\nAnswer: B) There is a strong positive correlation between studying and scores\n\nCritical distinction:\n• Correlation: variables move together\n• Causation: one variable causes change in other\n\nACT Science loves testing this! Strong correlation ≠ proof of causation.',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: dataRepTopic.id,
          front: 'How do you calculate rate of change from a graph?',
          back: 'Rate of change = (change in y) / (change in x) = slope. Formula: (y₂ - y₁) / (x₂ - x₁). This gives the rate with appropriate units (e.g., °C per hour, meters per second).',
          hint: 'Change in y over change in x',
          isPremium: false
        },
        {
          topicId: dataRepTopic.id,
          front: 'What does the pH scale measure?',
          back: 'pH measures acidity/basicity from 0-14. pH < 7 is acidic (lower = stronger acid), pH = 7 is neutral, pH > 7 is basic (higher = stronger base). Each unit represents a 10x change in concentration.',
          hint: '0-6 acid, 7 neutral, 8-14 base',
          isPremium: false
        },
        {
          topicId: dataRepTopic.id,
          front: 'What is the correlation coefficient and what does it tell you?',
          back: 'Correlation coefficient (r) ranges from -1 to +1. Measures strength and direction of linear relationship. |r| > 0.7 = strong, |r| < 0.3 = weak. Positive r = variables increase together. Important: Correlation does NOT prove causation!',
          hint: 'r from -1 to +1, correlation ≠ causation',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${dataRepTopic.title}`);
  }

  // Topic 2: Scientific Investigation
  const sciInvestigationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'scientific-investigation',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (sciInvestigationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: sciInvestigationTopic.id,
          question: 'A scientist wants to test whether fertilizer increases plant growth. Which is the best control group?\n\nF) Plants with no fertilizer\nG) Plants with maximum fertilizer\nH) Plants in different temperatures\nJ) Plants of different species\nK) No control group needed',
          solution: 'A control group receives no treatment to provide a baseline for comparison.\n\nExperimental question: Does fertilizer increase plant growth?\n\nIndependent variable: Amount of fertilizer\nDependent variable: Plant growth\n\nStep 1: Define control group\nControl = baseline condition without the treatment being tested\n\nStep 2: Evaluate options\n\nF) "Plants with no fertilizer"\n• No treatment applied ✓\n• Same as experimental except fertilizer ✓\n• Perfect control! ✓ CORRECT!\n\nG) "Plants with maximum fertilizer"\n• This is a treatment group, not control ✗\n\nH) "Plants in different temperatures"\n• Introduces another variable ✗\n• Not controlling for fertilizer effect ✗\n\nJ) "Plants of different species"\n• Introduces species variable ✗\n• Can\'t isolate fertilizer effect ✗\n\nK) "No control group needed"\n• Always need control for comparison! ✗\n\nAnswer: F) Plants with no fertilizer\n\nControl group characteristics:\n• Identical to experimental group EXCEPT for variable being tested\n• Receives no treatment (or placebo)\n• Provides baseline for comparison\n• Helps prove treatment caused the effect\n\nExperiment design:\n• Control group: Plants + water (no fertilizer)\n• Experimental group: Plants + water + fertilizer\n• Keep all else constant: same light, temp, water, soil',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: sciInvestigationTopic.id,
          question: 'An experiment tests three different concentrations of salt water (5%, 10%, 15%) on plant growth. What is the independent variable?\n\nA) Plant growth\nB) Salt concentration\nC) Type of plant\nD) Amount of water\nE) Temperature',
          solution: 'Independent variable = what the experimenter CHANGES\nDependent variable = what is MEASURED as a result\n\nExperiment details:\n• Testing: 5%, 10%, 15% salt concentrations\n• Measuring: plant growth\n\nStep 1: Identify what\'s being manipulated\nThe scientist is CHANGING salt concentration (5%, 10%, 15%)\n\nStep 2: Identify what\'s being measured\nThe scientist is MEASURING plant growth\n\nStep 3: Determine independent variable\n\nA) "Plant growth"\n• This is being measured (dependent variable) ✗\n\nB) "Salt concentration"\n• This is being changed/manipulated ✓\n• The scientist controls this ✓ CORRECT!\n\nC) "Type of plant"\n• This should be constant (controlled variable) ✗\n\nD) "Amount of water"\n• Should be constant (controlled variable) ✗\n\nE) "Temperature"\n• Should be constant (controlled variable) ✗\n\nAnswer: B) Salt concentration\n\nVariable types:\n\n1. Independent (manipulated):\n   • What experimenter changes\n   • Plotted on x-axis\n   • "What I change"\n\n2. Dependent (responding):\n   • What experimenter measures\n   • Plotted on y-axis  \n   • "What I observe"\n   • Depends on independent variable\n\n3. Controlled (constant):\n   • Kept the same across all groups\n   • Examples: temperature, light, plant type\n   • Ensures fair test',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: sciInvestigationTopic.id,
          question: 'Two students measure the same object\'s length. Student A records 15.2 cm. Student B records 15.8 cm. The actual length is 15.5 cm. Which statement is most accurate?\n\nF) Both measurements are equally precise\nG) Student A is more accurate\nH) Student B\'s measurement is more precise\nJ) Both students have good accuracy\nK) The measurements are invalid',
          solution: 'Accuracy vs. Precision - crucial distinction in science!\n\nDefinitions:\n• Accuracy: How close to true value\n• Precision: How close repeated measurements are to each other\n\nGiven:\n• True length: 15.5 cm\n• Student A: 15.2 cm (error = 0.3 cm)\n• Student B: 15.8 cm (error = 0.3 cm)\n\nStep 1: Evaluate accuracy\nStudent A: |15.2 - 15.5| = 0.3 cm from true value\nStudent B: |15.8 - 15.5| = 0.3 cm from true value\n\nBoth are equally accurate! Both are 0.3 cm off.\n\nStep 2: Evaluate precision\nPrecision requires multiple measurements (not given here)\nCan\'t determine precision from single measurements\n\nStep 3: Evaluate options\n\nF) "Both measurements are equally precise"\n• Can\'t determine precision from one measurement each ✗\n\nG) "Student A is more accurate"\n• Both have same error (0.3 cm) ✗\n\nH) "Student B\'s measurement is more precise"\n• Can\'t determine precision from single measurement ✗\n\nJ) "Both students have good accuracy"\n• Both within 0.3 cm of true value ✓\n• Reasonably close ✓ CORRECT!\n\nK) "The measurements are invalid"\n• Small errors are normal ✗\n• Measurements are reasonable ✗\n\nAnswer: J) Both students have good accuracy\n\nAccuracy vs. Precision analogy:\nBullseye target:\n• Accurate: arrows hit center (close to true value)\n• Precise: arrows clustered together (consistent)\n• Ideal: accurate AND precise (clustered at center)\n\nExample scenarios:\n• High accuracy, low precision: 15.0, 16.0, 15.5 (average close, spread out)\n• Low accuracy, high precision: 18.0, 18.1, 18.0 (clustered but far from true)\n• High both: 15.4, 15.5, 15.6 (clustered near true value)',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: sciInvestigationTopic.id,
          front: 'What is a control group in an experiment?',
          back: 'A control group receives no treatment (or a placebo) and provides a baseline for comparison. It should be identical to experimental groups except for the variable being tested. This helps prove the treatment caused observed effects.',
          hint: 'Baseline for comparison, no treatment',
          isPremium: false
        },
        {
          topicId: sciInvestigationTopic.id,
          front: 'What is the difference between independent and dependent variables?',
          back: 'Independent variable: what the experimenter changes/manipulates (x-axis). Dependent variable: what is measured as a result (y-axis). The dependent variable "depends on" the independent variable. Controlled variables are kept constant.',
          hint: 'Independent = change, Dependent = measure',
          isPremium: false
        },
        {
          topicId: sciInvestigationTopic.id,
          front: 'What is the difference between accuracy and precision?',
          back: 'Accuracy: how close a measurement is to the true value. Precision: how close repeated measurements are to each other (consistency). You can be precise without being accurate, and vice versa. Ideal is both accurate and precise.',
          hint: 'Accuracy = correct, Precision = consistent',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${sciInvestigationTopic.title}`);
  }

  // Topic 3: Evaluation of Models and Experiments
  const evaluationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'evaluation-models-experiments',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (evaluationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: evaluationTopic.id,
          question: 'A scientist proposes that increasing temperature increases reaction rate. Which experiment would BEST test this hypothesis?\n\nA) Measure reaction rates at 20°C, 30°C, and 40°C\nB) Measure reaction rate at 25°C only\nC) Test different chemicals at the same temperature\nD) Change both temperature and concentration together\nE) Measure temperature but not reaction rate',
          solution: 'A good experiment tests ONE variable while controlling others.\n\nHypothesis: Temperature increase → Reaction rate increase\n\nIndependent variable: Temperature\nDependent variable: Reaction rate\n\nStep 1: Evaluate each experimental design\n\nA) "Measure reaction rates at 20°C, 30°C, and 40°C"\n• Multiple temperature values ✓\n• Can see if rate changes with temp ✓\n• Tests the hypothesis directly ✓ BEST!\n\nB) "Measure reaction rate at 25°C only"\n• Only one temperature ✗\n• Can\'t see relationship ✗\n\nC) "Test different chemicals at the same temperature"\n• Temperature not varied ✗\n• Doesn\'t test hypothesis ✗\n\nD) "Change both temperature and concentration together"\n• Two variables changing ✗\n• Can\'t isolate temperature effect ✗\n\nE) "Measure temperature but not reaction rate"\n• Doesn\'t measure dependent variable ✗\n• Can\'t test hypothesis ✗\n\nAnswer: A) Measure reaction rates at 20°C, 30°C, and 40°C\n\nGood experimental design:\n✓ Multiple values of independent variable\n✓ Measure dependent variable at each\n✓ Keep all other factors constant\n✓ Have enough data points to see patterns\n\nThis design:\n• 3 temperatures (independent variable)\n• Measure rate at each (dependent variable)\n• Same chemical, same concentration, same volume\n• Can graph temp vs. rate to see relationship',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: evaluationTopic.id,
          question: 'A model predicts that doubling CO₂ concentration will increase plant growth by 50%. Actual experiments show only a 20% increase. What is the best conclusion?\n\nF) The model is completely wrong and useless\nG) The experiments were done incorrectly\nH) The model overestimates the effect and needs revision\nJ) CO₂ has no effect on plant growth\nK) The model is perfect and the data is wrong',
          solution: 'Scientific models are simplified representations - rarely perfect matches to reality.\n\nModel prediction: 50% increase\nActual result: 20% increase\nDiscrepancy: Model predicted too much growth\n\nStep 1: Analyze the discrepancy\n• Model shows positive effect (increase)\n• Experiment shows positive effect (increase)\n• Direction matches! ✓\n• Magnitude differs (50% vs 20%)\n\nStep 2: Evaluate conclusions\n\nF) "The model is completely wrong and useless"\n• Too extreme - direction is correct ✗\n• Model shows the right trend ✗\n\nG) "The experiments were done incorrectly"\n• No evidence of experimental error ✗\n• Experiments could be valid ✗\n\nH) "The model overestimates the effect and needs revision"\n• Correctly identifies overestimation ✓\n• Acknowledges model needs adjustment ✓\n• Scientific approach! ✓ BEST!\n\nJ) "CO₂ has no effect on plant growth"\n• Data shows 20% increase ✗\n• Clearly false ✗\n\nK) "The model is perfect and the data is wrong"\n• Dismisses experimental evidence ✗\n• Unscientific ✗\n\nAnswer: H) The model overestimates the effect and needs revision\n\nScientific model evaluation:\n• Models are simplified representations of reality\n• Rarely 100% accurate\n• Discrepancies help improve models\n• Models are revised based on experimental data\n• Direction matters more than exact numbers\n\nWhy might the model overestimate?\n• May not account for limiting factors\n• Could ignore other variables (water, nutrients)\n• Simplified assumptions\n• Need to add complexity to improve accuracy',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: evaluationTopic.id,
          question: 'Two conflicting hypotheses about bird migration:\n\nHypothesis 1: Birds navigate using Earth\'s magnetic field.\nHypothesis 2: Birds navigate using star positions.\n\nWhich experiment would BEST distinguish between these hypotheses?\n\nA) Observe birds flying during daytime\nB) Test if birds can navigate in a planetarium with artificial stars but no magnetic field, and in darkness with magnetic field but no stars\nC) Count how many birds migrate each season\nD) Track birds using GPS\nE) Study bird anatomy',
          solution: 'To distinguish hypotheses, design an experiment where they predict DIFFERENT outcomes.\n\nHypothesis 1: Magnetic field navigation\nHypothesis 2: Star navigation\n\nKey: Create conditions where only ONE cue is available!\n\nStep 1: Determine what each hypothesis predicts\n\nIf H1 is correct (magnetic navigation):\n• Birds should navigate with magnetic field, even without stars\n• Birds should NOT navigate without magnetic field\n\nIf H2 is correct (star navigation):\n• Birds should navigate with stars, even without magnetic field\n• Birds should NOT navigate without stars\n\nStep 2: Evaluate experimental designs\n\nA) "Observe birds flying during daytime"\n• Both stars and magnetic field present ✗\n• Can\'t distinguish ✗\n\nB) "Test navigation with artificial stars (no magnetic) AND with magnetic field (no stars)"\n• Separates the two cues! ✓\n• Can see which one birds actually use ✓\n• Different predictions for each hypothesis ✓ PERFECT!\n\nResults would show:\n- If birds navigate with stars only: H2 correct\n- If birds navigate with magnetic only: H1 correct\n- If birds need both: new hypothesis!\n\nC) "Count how many birds migrate each season"\n• Doesn\'t test navigation mechanism ✗\n\nD) "Track birds using GPS"\n• Tells WHERE they go, not HOW they navigate ✗\n\nE) "Study bird anatomy"\n• Might find magnetic sensors or good eyes\n• But doesn\'t test which they actually USE ✗\n\nAnswer: B) Test if birds can navigate in a planetarium with artificial stars but no magnetic field, and in darkness with magnetic field but no stars\n\nCrucial experimental principle:\nTo choose between competing hypotheses, design conditions where they make DIFFERENT predictions!\n\nControl vs. Experimental conditions:\n• Condition 1: Stars only (no magnetic)\n• Condition 2: Magnetic only (no stars)\n• Condition 3: Both (control)\n• Condition 4: Neither (control)\n\nThis isolates each factor and tests its necessity!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: evaluationTopic.id,
          front: 'What makes a good experimental design to test a hypothesis?',
          back: 'Test multiple values of the independent variable, measure the dependent variable at each, keep all other factors constant, and collect enough data points to identify patterns. The design should directly test the relationship proposed in the hypothesis.',
          hint: 'Vary one thing, measure response, control others',
          isPremium: false
        },
        {
          topicId: evaluationTopic.id,
          front: 'How should you respond when a model\'s predictions don\'t match experimental data?',
          back: 'Evaluate the discrepancy scientifically: Check if the direction is correct, determine if the model overestimates or underestimates, and revise the model based on evidence. Models are simplified and rarely perfect - discrepancies help improve them.',
          hint: 'Revise model based on evidence',
          isPremium: false
        },
        {
          topicId: evaluationTopic.id,
          front: 'How do you design an experiment to distinguish between competing hypotheses?',
          back: 'Create conditions where the different hypotheses make DIFFERENT predictions. Isolate each proposed factor and test it separately. The hypothesis whose predictions match the experimental results is supported.',
          hint: 'Make hypotheses predict different outcomes',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${evaluationTopic.title}`);
  }

  console.log('\n🎉 ACT Prep Batch 4 complete! (12/17 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
