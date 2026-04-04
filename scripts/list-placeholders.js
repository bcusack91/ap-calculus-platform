const fs = require('fs');
const dir = 'src/data/interactive-lessons';
const files = fs.readdirSync(dir).filter(f => {
  const content = fs.readFileSync(dir + '/' + f, 'utf8');
  return content.includes('correctAnswers: ["correct"]');
});
const topics = {};
for (const f of files) {
  const m = f.match(/^(.+)-part(\d+)\.ts$/);
  if (!m) continue;
  const content = fs.readFileSync(dir + '/' + f, 'utf8');
  const titleMatch = content.match(/title:\s*['"](.+?)['"]/) || content.match(/title:\s*`(.+?)`/);
  const topicKey = m[1];
  const partNum = parseInt(m[2]);
  if (!topics[topicKey]) topics[topicKey] = [];
  topics[topicKey].push({ part: partNum, title: titleMatch ? titleMatch[1] : 'unknown', file: f });
}
for (const [topic, parts] of Object.entries(topics).sort()) {
  parts.sort((a, b) => a.part - b.part);
  console.log(topic + ' (' + parts.length + ' parts):');
  for (const p of parts) console.log('  Part ' + p.part + ': ' + p.title);
}
console.log('Total topics:', Object.keys(topics).length, ', files:', files.length);
