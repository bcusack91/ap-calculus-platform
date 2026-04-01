const { getInteractiveLessonData, hasInteractiveLesson } = await import('../src/data/interactive-lessons/registry.ts');
const exists = hasInteractiveLesson('mcat-quantitative-skills-mcat');
console.log('In registry:', exists);
if (!exists) { console.log('FAIL'); process.exit(1); }
const data = await getInteractiveLessonData('mcat-quantitative-skills-mcat', 0);
console.log('Loaded:', !!data);
const quiz = data?.sections?.find(s => s.type === 'multiple-choice');
console.log('Quiz questions:', quiz?.exercise?.questions?.length ?? 0);
console.log('PASS');
