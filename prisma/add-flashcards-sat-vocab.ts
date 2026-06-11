import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding SAT vocabulary flashcards...\n');

  const topicSlugs = [
    'sat-vocabulary-context',
    'sat-reading-comprehension',
    'sat-central-ideas-details',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'sat-vocabulary-context' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Aberration', back: '**A departure from what is normal or expected.**\n\nExample: "The warm December day was an aberration from the usual frigid weather."', hint: 'Something that deviates from the norm.' },
        { topicId: t1.id, front: 'Ambivalent', back: '**Having mixed or conflicting feelings about something.**\n\nExample: "She was ambivalent about the job offer — excited but nervous."', hint: 'Ambi = both sides.' },
        { topicId: t1.id, front: 'Austere', back: '**Severe or strict in manner; having no comforts or luxuries.**\n\nExample: "The monastery had an austere lifestyle with few possessions."', hint: 'Think of a plain, strict environment.' },
        { topicId: t1.id, front: 'Bolster', back: '**To support, strengthen, or reinforce.**\n\nExample: "New evidence bolstered the scientist\'s hypothesis."', hint: 'To prop up or boost.' },
        { topicId: t1.id, front: 'Candid', back: '**Truthful and straightforward; frank.**\n\nExample: "Her candid assessment of the situation was refreshing."', hint: 'Honest and direct.' },
        { topicId: t1.id, front: 'Contentious', back: '**Causing or likely to cause disagreement or argument.**\n\nExample: "Immigration reform remains a contentious political issue."', hint: 'Controversial, debatable.' },
        { topicId: t1.id, front: 'Cursory', back: '**Hasty and therefore not thorough; superficial.**\n\nExample: "A cursory glance at the report revealed several errors."', hint: 'Quick and shallow, not detailed.' },
        { topicId: t1.id, front: 'Elicit', back: '**To draw out or evoke (a response or reaction).**\n\nExample: "The comedian\'s jokes elicited laughter from the audience."', hint: 'Don\'t confuse with "illicit" (illegal).' },
        { topicId: t1.id, front: 'Empirical', back: '**Based on observation or experience rather than theory.**\n\nExample: "The study provided empirical evidence supporting the treatment."', hint: 'Based on data and experiments.' },
        { topicId: t1.id, front: 'Equivocal', back: '**Open to more than one interpretation; ambiguous.**\n\nExample: "The results were equivocal, making it hard to draw conclusions."', hint: 'Unclear, could go either way.' },
      ],
    });
    console.log('✅ SAT Vocabulary in Context flashcards (set 1)');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'sat-reading-comprehension' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Fervent', back: '**Having or displaying passionate intensity.**\n\nExample: "The fervent supporters cheered loudly at every play."', hint: 'Intensely enthusiastic.' },
        { topicId: t2.id, front: 'Galvanize', back: '**To shock or excite someone into taking action.**\n\nExample: "The crisis galvanized the community into organizing a relief effort."', hint: 'To energize into action.' },
        { topicId: t2.id, front: 'Impervious', back: '**Not allowing something to pass through; unable to be affected.**\n\nExample: "She seemed impervious to criticism."', hint: 'Nothing gets through.' },
        { topicId: t2.id, front: 'Nuanced', back: '**Characterized by subtle differences or distinctions.**\n\nExample: "The author presented a nuanced argument, acknowledging both sides."', hint: 'Not black and white — shades of gray.' },
        { topicId: t2.id, front: 'Pragmatic', back: '**Dealing with things in a practical, realistic way rather than theoretical.**\n\nExample: "The pragmatic approach focused on what could actually be implemented."', hint: 'Practical > idealistic.' },
      ],
    });
    console.log('✅ SAT Vocabulary in Context flashcards (set 2)');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'sat-central-ideas-details' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Skeptical', back: '**Not easily convinced; having doubts.**\n\nExample: "Scientists remained skeptical of the findings until they could be replicated."', hint: 'Questioning, not taking things at face value.' },
        { topicId: t3.id, front: 'Substantiate', back: '**To provide evidence to support or prove the truth of something.**\n\nExample: "The researcher needed more data to substantiate her claims."', hint: 'To back up with proof.' },
        { topicId: t3.id, front: 'Undermine', back: '**To weaken or damage, especially gradually.**\n\nExample: "The scandal undermined public trust in the institution."', hint: 'To slowly erode or weaken from below.' },
        { topicId: t3.id, front: 'Volatile', back: '**Liable to change rapidly and unpredictably, especially for the worse.**\n\nExample: "The volatile stock market made investors nervous."', hint: 'Unstable and potentially explosive.' },
        { topicId: t3.id, front: 'Advocate (v.)', back: '**To publicly recommend or support.**\n\nExample: "She advocated for increased funding for public schools."', hint: 'To speak on behalf of a cause.' },
      ],
    });
    console.log('✅ SAT Vocabulary in Context flashcards (set 3)');
  }

  console.log('\n✅ All SAT vocabulary flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
