import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT sociology flashcards...\n');

  const slug = 'mcat-sociology-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What are the three major sociological theoretical paradigms?', back: '**Functionalism**: society as interrelated parts working for stability (Durkheim).\n**Conflict theory**: society as competition over scarce resources, power inequality (Marx).\n**Symbolic interactionism**: society built from everyday interactions and shared meanings/symbols (micro-level; Mead, Goffman).', hint: 'Functionalism (stability), conflict (inequality), symbolic interactionism (micro meanings).' },
      { topicId: topic.id, front: 'Distinguish manifest from latent functions.', back: '**Manifest functions**: intended, recognized consequences of a social structure.\n**Latent functions**: unintended, hidden consequences.\n\n**Dysfunctions**: consequences that disrupt social stability. (Merton, functionalist terms.)', hint: 'Manifest = intended; latent = unintended/hidden.' },
      { topicId: topic.id, front: 'Distinguish achieved, ascribed, and master status.', back: '**Ascribed status**: assigned at birth or involuntarily (race, sex).\n**Achieved status**: earned through effort/choice (occupation, education).\n**Master status**: the status that dominates how others see you and that organizes your identity.', hint: 'Ascribed = born with; achieved = earned; master = the dominant one.' },
      { topicId: topic.id, front: 'Distinguish social stratification systems: caste vs. class.', back: '**Caste system**: closed, status fixed at birth, no mobility (ascribed).\n**Class system**: open, allows **social mobility** based on achievement and economic factors.\n\n**Meritocracy**: an idealized system where position is based purely on ability/effort.', hint: 'Caste = closed (no mobility); class = open (mobility possible).' },
      { topicId: topic.id, front: 'Distinguish types of social mobility.', back: '**Intragenerational**: status change within one person\'s lifetime.\n**Intergenerational**: status change across generations (parent → child).\n**Vertical** (up/down) vs. **horizontal** (same level, different position).\n\n**Structural mobility**: caused by societal/economic changes.', hint: 'Intra = one lifetime; inter = across generations.' },
      { topicId: topic.id, front: 'What is the demographic transition model?', back: 'A model of population change as societies industrialize:\n**Stage 1**: high birth & death rates (stable).\n**Stage 2**: death rate falls (rapid growth).\n**Stage 3**: birth rate falls (growth slows).\n**Stage 4**: low birth & death rates (stable, low growth).', hint: 'Death rate drops first (Stage 2), then birth rate (Stage 3).' },
      { topicId: topic.id, front: 'What are push and pull factors in migration?', back: '**Push factors**: drive people **away** from an area (war, famine, unemployment, persecution).\n**Pull factors**: **attract** people to a new area (jobs, safety, freedom, family).\n\nMigration shaped by both, plus immigration policy.', hint: 'Push = leave (bad); pull = attract (good).' },
      { topicId: topic.id, front: 'Distinguish key demographic terms.', back: '**Fertility rate**: avg births per woman.\n**Mortality rate**: deaths per 1,000.\n**Immigration/emigration**: in/out of a region.\n\nA society needs a **total fertility rate ~2.1** (replacement level) to maintain population size without migration.', hint: 'Replacement fertility ≈ 2.1 children per woman.' },
      { topicId: topic.id, front: 'What are the agents of socialization?', back: 'Family (primary, first), school, peers, mass media, religion, and the workplace.\n\n**Primary socialization** occurs in childhood (family); **secondary** occurs later (school, work). The **hidden curriculum** teaches norms implicitly in school.', hint: 'Family is primary/first; school, peers, media are secondary.' },
      { topicId: topic.id, front: 'Distinguish primary from secondary groups.', back: '**Primary group**: small, intimate, long-term, emotional bonds (family, close friends).\n**Secondary group**: larger, impersonal, goal-oriented, temporary (coworkers, classmates).\n\n**In-group/out-group**: groups one identifies with vs. against.', hint: 'Primary = close/emotional; secondary = impersonal/goal-driven.' },
      { topicId: topic.id, front: 'Distinguish prejudice, discrimination, and stereotypes.', back: '**Stereotype**: oversimplified belief/idea about a group (cognitive).\n**Prejudice**: a (usually negative) **attitude/feeling** toward a group (affective).\n**Discrimination**: differential **action/behavior** toward a group (behavioral).', hint: 'Stereotype = thought; prejudice = attitude; discrimination = action.' },
      { topicId: topic.id, front: 'What are the sociological theories of deviance?', back: '**Strain theory** (Merton): deviance from gap between cultural goals and legitimate means.\n**Labeling theory**: deviance from being labeled by society (primary vs. secondary deviance).\n**Differential association**: deviance learned through interaction.', hint: 'Strain (goals vs means); labeling (society\'s label); differential association (learned).' },
      { topicId: topic.id, front: 'What are the major social institutions and their roles?', back: 'Family, education, religion, government/economy, and medicine — patterned systems that meet basic societal needs.\n\n**Medicalization**: the process by which human conditions become defined and treated as medical problems (e.g., the sick role — Parsons).', hint: 'Family, education, religion, government, medicine = social institutions.' },
      { topicId: topic.id, front: 'Distinguish socioeconomic status, poverty types, and social capital.', back: '**SES**: composite of income, education, occupation.\n**Absolute poverty**: lacking basic necessities for survival.\n**Relative poverty**: below the standard of one\'s society.\n**Social capital**: resources/benefits gained from one\'s social networks.', hint: 'Absolute = can\'t survive; relative = below society\'s norm. Social capital = network value.' },
    ],
  });

  console.log('✅ Created 14 MCAT sociology flashcards');
  console.log('\n✅ All MCAT sociology flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
