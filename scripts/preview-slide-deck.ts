import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })

// Dry-run: print a deck's slide sequence (no writes) to eyeball the teaching
// arc — intro → concepts → worked example → matched poll → … → review → quiz.
async function main() {
  const { generateSlideDeck } = await import('../src/lib/slide-deck')
  for (const slug of process.argv.slice(2)) {
    const deck = await generateSlideDeck(slug)
    console.log(`\n=== ${slug} — "${deck.title}" (${deck.slides.length} slides) ===`)
    deck.slides.forEach((s, i) => {
      if (s.kind === 'title') console.log(`${String(i + 1).padStart(2)}. TITLE   ${s.title}`)
      else if (s.kind === 'content') console.log(`${String(i + 1).padStart(2)}. content ${s.title}  [${s.blocks[0]?.slice(0, 60).replace(/\n/g, ' ')}…]`)
      else if (s.kind === 'poll') console.log(`${String(i + 1).padStart(2)}. POLL    ${s.question.slice(0, 90).replace(/\n/g, ' ')}`)
      else console.log(`${String(i + 1).padStart(2)}. QUIZ    → exit quiz`)
    })
  }
  process.exit(0)
}
main()
