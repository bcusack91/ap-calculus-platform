import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP CS Principles flashcards...\n');

  const topicSlugs = [
    'csp-binary-data', 'csp-algorithms',
    'csp-computing-systems-networks', 'csp-impact-of-computing',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'csp-binary-data' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'How to convert binary to decimal?', back: 'Each binary digit represents a **power of 2** (right to left):\n\n`1011` = 1×2³ + 0×2² + 1×2¹ + 1×2⁰\n= 8 + 0 + 2 + 1 = **11**', hint: 'Each position is a power of 2.' },
        { topicId: t1.id, front: 'What is overflow error?', back: 'When a number is **too large** to be represented with the available number of bits.\n\nWith n bits, max unsigned value = **2ⁿ − 1**.\n\n8 bits: max = 255\n16 bits: max = 65,535', hint: 'Number exceeds the bit limit.' },
        { topicId: t1.id, front: 'Lossy vs. lossless compression?', back: '**Lossless**: original data can be **perfectly reconstructed** (ZIP, PNG)\n**Lossy**: some data is **permanently lost** for smaller file size (JPEG, MP3)\n\nLossy is smaller but irreversible.', hint: 'Lossy = smaller but loses data; Lossless = perfect but larger.' },
      ],
    });
    console.log('✅ Binary & Data flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'csp-algorithms' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is an algorithm?', back: 'A **finite set of instructions** that accomplish a specific task.\n\nProperties:\n• **Sequencing**: steps in order\n• **Selection**: decisions (if/else)\n• **Iteration**: repetition (loops)\n\nMust be **clear, finite, and produce a result**.', hint: 'Sequence, selection, iteration.' },
        { topicId: t2.id, front: 'Linear search vs. binary search?', back: '**Linear search**: check **every element** in order. Works on any list.\n• Time: O(n)\n\n**Binary search**: repeatedly **halve the search space**. Requires **sorted** list.\n• Time: O(log n)', hint: 'Linear = every item; Binary = halve sorted list.' },
        { topicId: t2.id, front: 'What is algorithm efficiency?', back: 'How many steps an algorithm takes relative to input size:\n\n• **Reasonable**: polynomial time — O(n), O(n²), O(n³)\n• **Unreasonable**: exponential/factorial — O(2ⁿ), O(n!)\n\nUnreasonable algorithms become **impractical** for large inputs.', hint: 'Polynomial = reasonable; Exponential = unreasonable.' },
      ],
    });
    console.log('✅ Algorithms flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'csp-computing-systems-networks' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is the Internet vs. World Wide Web?', back: '**Internet**: the global **network of networks** — physical infrastructure (cables, routers, protocols)\n\n**World Wide Web**: a **service on the Internet** — web pages accessed via HTTP/HTTPS and browsers\n\nThe Web runs ON the Internet, but they are not the same thing.', hint: 'Internet = infrastructure; Web = service on top.' },
        { topicId: t3.id, front: 'What are protocols?', back: 'Agreed-upon **rules** for communication between devices:\n• **TCP/IP**: core Internet protocols (reliable data delivery)\n• **HTTP/HTTPS**: web page transfer (S = secure)\n• **DNS**: translates domain names → IP addresses\n• **SMTP**: email sending', hint: 'Rules for how devices communicate.' },
        { topicId: t3.id, front: 'What is fault tolerance?', back: 'A system\'s ability to **continue operating** despite failures.\n\nThe Internet achieves fault tolerance through:\n• **Redundancy**: multiple paths between nodes\n• **Packet switching**: data split into packets, each routed independently', hint: 'Keeps working even when parts fail.' },
      ],
    });
    console.log('✅ Computing Systems & Networks flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'csp-impact-of-computing' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is the digital divide?', back: 'The **gap** between those who have access to technology/Internet and those who do not.\n\nFactors: **income, geography, age, education, disability**\n\nConsequences: unequal access to information, education, economic opportunities.', hint: 'Technology haves vs. have-nots.' },
        { topicId: t4.id, front: 'What is algorithmic bias?', back: 'When a computer system reflects the **implicit biases** of its creators or training data.\n\nExamples: facial recognition less accurate for darker skin tones; hiring algorithms favoring certain demographics.\n\nCaused by biased **training data** or biased **design choices**.', hint: 'Bias in data or design → biased results.' },
        { topicId: t4.id, front: 'Crowdsourcing?', back: 'Obtaining input, ideas, or services from a **large group of people**, typically via the Internet.\n\nExamples:\n• **Wikipedia**: collaborative knowledge\n• **Citizen science**: distributed data collection\n• **Open source**: collaborative software development', hint: 'Many people contributing to solve a problem.' },
      ],
    });
    console.log('✅ Impact of Computing flashcards');
  }

  console.log('\n✅ All AP CS Principles flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
