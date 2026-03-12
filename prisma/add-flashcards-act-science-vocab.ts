import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding ACT Science vocabulary flashcards...\n');

  const topicSlugs = [
    'act-science',
    'act-data-representation',
    'act-research-summaries',
    'act-conflicting-viewpoints',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'act-science' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is an independent variable?', back: 'The variable that the experimenter **deliberately changes** or manipulates. Also called the "manipulated variable."\n\nOn a graph, it is typically on the **x-axis**.', hint: 'The cause in a cause-and-effect relationship.' },
        { topicId: t1.id, front: 'What is a dependent variable?', back: 'The variable that is **measured or observed** in response to changes in the independent variable. Also called the "responding variable."\n\nOn a graph, it is typically on the **y-axis**.', hint: 'The effect — it depends on what you change.' },
        { topicId: t1.id, front: 'What is a control group?', back: 'The group in an experiment that does **not** receive the treatment. It serves as a **baseline** for comparison with the experimental group.', hint: 'The group left unchanged for comparison.' },
        { topicId: t1.id, front: 'Direct vs. inverse relationship?', back: '**Direct (positive)**: as one variable increases, the other increases.\n**Inverse (negative)**: as one variable increases, the other decreases.\n\nLook at graph trends or data table patterns.', hint: 'Same direction = direct, opposite = inverse.' },
        { topicId: t1.id, front: 'What is a hypothesis?', back: 'A **testable prediction** about the relationship between variables. Usually written as an "if...then..." statement.\n\nA good hypothesis is specific and falsifiable.', hint: 'If [change this], then [this will happen].' },
      ],
    });
    console.log('✅ ACT Science general flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'act-data-representation' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'How to read a scatter plot on the ACT?', back: '1. Check **axis labels and units**\n2. Look for **trends** (positive, negative, no correlation)\n3. Identify **outliers**\n4. Estimate values by tracing from axis to data points\n5. Line of best fit shows the overall trend', hint: 'Always start with axis labels before analyzing data.' },
        { topicId: t2.id, front: 'How to interpolate vs. extrapolate?', back: '**Interpolation**: estimating a value **within** the data range. More reliable.\n\n**Extrapolation**: estimating a value **beyond** the data range. Less reliable — the trend may not continue.', hint: 'Inter = between data points, Extra = beyond.' },
        { topicId: t2.id, front: 'How to read a data table on the ACT?', back: '1. Read the **title** and **column headers**\n2. Identify which column is independent (usually leftmost)\n3. Look for **trends** as the independent variable changes\n4. Note any **patterns, maximums, or minimums**\n5. Compare rows to find relationships', hint: 'Scan headers first, then look for patterns.' },
        { topicId: t2.id, front: 'What does "held constant" mean in an experiment?', back: 'A variable that is kept the **same** across all trials. These are **controlled variables** (not the same as the control group).\n\nThey ensure the experiment is a **fair test** — only the independent variable changes.', hint: 'Controlled variables prevent confounding results.' },
      ],
    });
    console.log('✅ ACT Data Representation flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'act-research-summaries' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'How to approach Research Summary passages?', back: '1. Read the **intro** for background context\n2. For each experiment, identify:\n   - **Purpose** (what question it tests)\n   - **Independent variable** (what changed)\n   - **Dependent variable** (what was measured)\n   - **Controls** (what stayed the same)\n3. Compare experiments to find differences', hint: 'Focus on what changed between experiments.' },
        { topicId: t3.id, front: 'What makes a valid experiment?', back: '- Only **one variable** changes at a time\n- Has a **control group** or baseline\n- **Large enough sample size** for reliable results\n- Results are **repeatable/reproducible**\n- Variables are **controlled** (held constant)', hint: 'One change at a time with proper controls.' },
        { topicId: t3.id, front: 'How to identify a flaw in an experimental design?', back: 'Common flaws:\n- **No control group** for comparison\n- **Multiple variables** changed simultaneously (confounding)\n- **Sample size too small**\n- **Not repeated** to verify results\n- **Biased measurements** or procedures', hint: 'Look for confounding variables and missing controls.' },
      ],
    });
    console.log('✅ ACT Research Summaries flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'act-conflicting-viewpoints' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'How to approach Conflicting Viewpoints passages?', back: '1. Read each viewpoint **separately** and summarize in 1 sentence\n2. Identify what they **agree** on\n3. Identify where they **disagree**\n4. Note the **evidence** each side uses\n5. Questions often ask you to compare positions', hint: 'Summarize each viewpoint before comparing.' },
        { topicId: t4.id, front: 'What type of evidence would weaken or strengthen a viewpoint?', back: '**Weakens**: Evidence that contradicts the viewpoint\'s predictions or assumptions.\n\n**Strengthens**: Evidence that supports the viewpoint\'s predictions.\n\nAsk: "If this viewpoint is correct, what should we observe?"', hint: 'Match predictions to evidence.' },
        { topicId: t4.id, front: 'Key science terms: pH, concentration, density?', back: '**pH**: measure of acidity (0-14). Low = acidic, 7 = neutral, high = basic.\n\n**Concentration**: amount of solute per volume of solution (g/L or mol/L).\n\n**Density**: mass per unit volume ($d = m/v$). Determines if objects float or sink.', hint: 'These terms appear frequently across all passage types.' },
      ],
    });
    console.log('✅ ACT Conflicting Viewpoints flashcards');
  }

  console.log('\n✅ All ACT Science vocabulary flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
