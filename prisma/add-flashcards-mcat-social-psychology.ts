import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT social psychology flashcards...\n');

  const slug = 'mcat-social-psychology-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What is the fundamental attribution error?', back: 'The tendency to **overemphasize dispositional (personality) explanations** and underemphasize situational ones **when judging others\' behavior**.\n\nWe blame their character but excuse our own behavior on circumstances (the actor-observer bias).', hint: 'Judging others: "they\'re a bad person" (disposition) over "tough situation."' },
      { topicId: topic.id, front: 'Distinguish dispositional from situational attribution and the self-serving bias.', back: '**Dispositional (internal)**: behavior caused by personality/character.\n**Situational (external)**: behavior caused by environment/circumstances.\n\n**Self-serving bias**: attribute our **successes** to internal factors and our **failures** to external ones.', hint: 'Self-serving: my wins = me; my losses = the situation.' },
      { topicId: topic.id, front: 'What is cognitive dissonance and how is it resolved?', back: 'The **mental discomfort** from holding two conflicting cognitions or acting against one\'s beliefs (Festinger).\n\nResolved by **changing the attitude or behavior** to restore consistency (e.g., "I did boring work for $1, so it must have been fun" — justification).', hint: 'Discomfort from inconsistency → change attitude to match behavior.' },
      { topicId: topic.id, front: 'What did Asch\'s conformity study demonstrate?', back: '**Conformity**: participants gave obviously wrong answers (line-length task) to match a unanimous group.\n\nShows **normative social influence** — conforming to be accepted/fit in, even against clear evidence. Conformity dropped sharply with even one dissenting ally.', hint: 'Asch = line study = conformity to group (normative influence).' },
      { topicId: topic.id, front: 'What did Milgram\'s obedience study show?', back: 'Participants delivered what they believed were dangerous "shocks" because an **authority figure** instructed them.\n\nDemonstrated high **obedience to authority** even against personal conscience. Obedience = compliance with a direct command from an authority.', hint: 'Milgram = shocks = obedience to authority.' },
      { topicId: topic.id, front: 'What did Zimbardo\'s Stanford Prison Experiment illustrate?', back: 'Ordinary students assigned "guard" or "prisoner" roles rapidly adopted abusive/submissive behaviors.\n\nIllustrates the power of **social roles, situational forces, and deindividuation** to shape behavior, overriding individual disposition.', hint: 'Zimbardo = prison roles = power of the situation/roles.' },
      { topicId: topic.id, front: 'Distinguish conformity, compliance, and obedience.', back: '**Conformity**: matching attitudes/behavior to a **group norm** (Asch).\n**Compliance**: changing behavior due to a **direct request** (foot-in-the-door, door-in-the-face).\n**Obedience**: following a **direct order** from an authority (Milgram).', hint: 'Conformity = group; compliance = request; obedience = command.' },
      { topicId: topic.id, front: 'What is the bystander effect and diffusion of responsibility?', back: '**Bystander effect**: the more people present, the **less likely** any one person helps in an emergency.\n\nDue to **diffusion of responsibility** (everyone assumes someone else will act) and pluralistic ignorance. (Darley & Latané, after the Kitty Genovese case.)', hint: 'More bystanders = less help (responsibility is diffused).' },
      { topicId: topic.id, front: 'Distinguish social facilitation from social loafing.', back: '**Social facilitation**: presence of others **improves** performance on simple/well-learned tasks (and worsens complex ones).\n\n**Social loafing**: individuals exert **less effort** in a group than alone, because individual contribution isn\'t identifiable.', hint: 'Facilitation = others boost easy tasks; loafing = slacking in a group.' },
      { topicId: topic.id, front: 'What is group polarization and groupthink?', back: '**Group polarization**: group discussion **strengthens** the members\' initial leaning toward a more extreme position.\n\n**Groupthink**: desire for harmony/conformity in a group leads to **poor decision-making** by suppressing dissent and realistic appraisal.', hint: 'Polarization = group goes more extreme; groupthink = harmony kills good decisions.' },
      { topicId: topic.id, front: 'What are stereotype threat and the self-fulfilling prophecy?', back: '**Stereotype threat**: anxiety about confirming a negative stereotype about one\'s group **impairs performance**.\n\n**Self-fulfilling prophecy**: an expectation about someone causes behavior that makes the expectation come true (e.g., Pygmalion/Rosenthal effect).', hint: 'Stereotype threat = fear of confirming → worse performance.' },
      { topicId: topic.id, front: 'What factors increase interpersonal attraction?', back: '**Proximity** (mere exposure effect — familiarity breeds liking), **similarity** (shared attitudes), **physical attractiveness** (halo effect), and **reciprocity** of liking.\n\nMere exposure: repeated exposure to a stimulus increases liking.', hint: 'Proximity, similarity, attractiveness, reciprocity. Familiarity → liking.' },
      { topicId: topic.id, front: 'Distinguish discrimination, prejudice, and ethnocentrism in social terms.', back: '**Prejudice**: a (negative) attitude toward a group.\n**Discrimination**: differential treatment/action against a group.\n**Ethnocentrism**: judging another culture by the standards of one\'s own (seeing one\'s own as superior).\n**Cultural relativism**: judging a culture by its own standards.', hint: 'Ethnocentrism = "my culture is the standard"; relativism = judge on own terms.' },
      { topicId: topic.id, front: 'What is the difference between an in-group and out-group, and in-group bias?', back: '**In-group**: a group one identifies with ("us").\n**Out-group**: a group one is not part of ("them").\n\n**In-group bias**: favoring one\'s own group. **Out-group homogeneity**: perceiving out-group members as "all the same."', hint: 'In-group = us (favored); out-group = them (seen as all alike).' },
    ],
  });

  console.log('✅ Created 14 MCAT social psychology flashcards');
  console.log('\n✅ All MCAT social psychology flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
