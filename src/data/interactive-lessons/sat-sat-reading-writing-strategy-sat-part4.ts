export const satRWStrategyPart4Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw4-intro',
      type: 'text' as const,
      content: `# Punctuation Inside the Sentence

**Part 4 of 7 — Supplements, Colons, and Lists**

Part 1 covered the boundary *between* clauses: periods, semicolons, and comma splices. Many Boundaries questions instead test punctuation *inside* a sentence: extra information set off from the main clause, colons, and items in a series.

### Supplements: Use a Matching Pair

A **supplement** (a nonessential element) adds information the sentence could do without. It is set off by a **matching pair** of marks:

| Pair | Example |
|---|---|
| Two commas | "The okapi**,** a relative of the giraffe**,** lives in the rainforests of Central Africa." |
| Two dashes | "The okapi**—**a relative of the giraffe**—**lives in the rainforests of Central Africa." |
| Two parentheses | "The okapi **(**a relative of the giraffe**)** lives in the rainforests of Central Africa." |

**Never mix the pair.** A supplement that opens with a dash must close with a dash, not a comma.

**The removal test:** delete everything between the marks. If the rest is a complete sentence with the same core meaning, the marks are placed correctly.

### Essential Elements Take No Commas

If the information identifies *which* one you mean, it is essential and gets no commas.

- ✅ "The novelist Toni Morrison won the Nobel Prize in 1993." (Which novelist? Morrison. No commas.)
- ✅ "Toni Morrison, the novelist, won the Nobel Prize in 1993." (The name already identifies her; "the novelist" is extra.)

### Colons

A colon must follow an **independent clause**, and what comes after it explains, lists, or specifies.

- ✅ "The recipe needs only three ingredients**:** flour, water, and salt."
- ❌ "The recipe needs**:** flour, water, and salt." (no complete clause before the colon)
- ❌ "The recipe needs ingredients such as**:** flour and salt." (never after "such as" or "including")

### Items in a Series

- Separate simple items with commas: "maps, compasses, and flashlights."
- If the items contain commas themselves, separate them with **semicolons**: "Austin, Texas; Denver, Colorado; and Portland, Oregon."`
    },
    {
      id: 'rw4-quiz',
      type: 'multiple-choice' as const,
      content: '**Supplements and Colons Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The ______ launched in 1990, has made more than a million observations of stars, galaxies, and planets. Which choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['Hubble Space Telescope, which was', 'Hubble Space Telescope—which was', 'Hubble Space Telescope which was', 'Hubble Space Telescope; which was'],
            correctAnswer: 0,
            explanation: 'The supplement "which was launched in 1990" closes with a comma after "1990," so it must open with a comma too. A dash would open a pair the comma cannot close, no punctuation leaves the closing comma unmatched, and a semicolon cannot introduce a relative clause.'
          },
          {
            question: 'The expedition\'s ship carried everything the crew would need for the ______ fuel, canned food, and spare parts for the engines. Which choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['winter:', 'winter;', 'winter, such as:', 'winter, and'],
            correctAnswer: 0,
            explanation: '"The expedition\'s ship carried everything the crew would need for the winter" is an independent clause, and the list that follows specifies "everything," so a colon fits. A semicolon needs an independent clause after it, a colon cannot follow "such as," and "and" joins the list to the clause as if it were one more item, which makes no sense.'
          }
        ]
      }    },
    {
      id: 'rw4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Reading the Punctuation Around a Blank

### Worked Example 1: Find the Other Half of the Pair

"Octopuses—animals with no bones at ______ can squeeze through gaps barely wider than their beaks."

| Step | Action |
|---|---|
| 1 | Spot the mark that opens the supplement: a dash after "Octopuses" |
| 2 | Find where the supplement ends: after "all" |
| 3 | Close with the same mark: "all—" |
| **Reject** | "all," (mixed pair), "all" (unclosed), "all;" (breaks the sentence in two) |

### Worked Example 2: Essential or Supplement?

| Sentence | Commas? | Why |
|---|---|---|
| "The painter Frida Kahlo was born in 1907." | None | The name tells *which* painter |
| "Frida Kahlo, a Mexican painter, was born in 1907." | Around "a Mexican painter" | The name already identifies her; the description is extra |
| "Students who study daily improve fastest." | None | "Who study daily" tells *which* students |
| "My sister, who studies daily, improved quickly." | Around "who studies daily" | "My sister" already identifies her |

### Worked Example 3: Colon Checklist

| Check | Question |
|---|---|
| Before the colon | Is it a complete sentence on its own? |
| After the colon | Does it explain, list, or specify something from before? |
| Trap words | Is the colon right after "such as," "including," or a verb like "are"? If so, delete it. |

### Worked Example 4: Series With Internal Commas

"The tour stops in Austin, Texas______ Denver, Colorado; and Portland, Oregon."

The later items are separated by semicolons, so the first break must be a semicolon too: "Texas;". A comma would make it impossible to tell where one item ends and the next begins.`
    },
    {
      id: 'rw4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Supplements, Colons, and Lists Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Rosetta Stone—a stone slab carved with the same decree in three different ______ helped scholars decode Egyptian hieroglyphs. Which choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['scripts—', 'scripts,', 'scripts', 'scripts;'],
            correctAnswer: 0,
            explanation: 'The supplement opens with a dash after "Rosetta Stone," so it must close with a dash after "scripts." A comma would mix the pair, no punctuation leaves the supplement unclosed, and a semicolon would split the subject from its verb "helped."'
          },
          {
            question: 'In 1993, the ______ became the first Black woman to win the Nobel Prize in Literature. Which choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['novelist Toni Morrison', 'novelist, Toni Morrison,', 'novelist, Toni Morrison', 'novelist Toni Morrison,'],
            correctAnswer: 0,
            explanation: '"The novelist" alone does not say which novelist, so the name is essential and takes no commas. Commas around the name would treat it as removable, leaving "the novelist became the first Black woman," and the one-comma versions put a single comma between the subject and its verb or between a noun and its name.'
          },
          {
            question: 'The traveling exhibit will open in Lyon, ______ Kyoto, Japan; and Lima, Peru. Which choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['France;', 'France,', 'France:', 'France'],
            correctAnswer: 0,
            explanation: 'Each item in this list contains a comma (city, country), so the items are separated by semicolons, as the later ones already are. A comma would blur where one item ends, a colon cannot separate list items, and no punctuation runs "France" into "Kyoto."'
          }
        ]
      }
    },
    {
      id: 'rw4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Inside-the-Sentence Punctuation Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A supplement that opens with a dash must close with a [dash|comma|colon|semicolon]',
          '"The poet Emily Dickinson" needs [no commas|commas around the name|a dash after "poet"|a colon after "poet"]',
          'A colon must follow [an independent clause|"such as"|"including"|a verb like "are"]',
          'List items that contain commas are separated by [semicolons|commas|colons|dashes]'
        ],
        correctAnswers: ['dash', 'no commas', 'an independent clause', 'semicolons'],
        hint1: 'Supplements are set off by a matching pair.',
        hint2: 'Which poet? The name tells you, so it is essential.',
        hint3: 'The words before a colon must be able to stand alone as a sentence.',
        explanation: 'Dash opens, dash closes. An identifying name after a title noun is essential, so no commas. A colon follows an independent clause. Items that contain commas are separated by semicolons.'
      }
    },
    {
      id: 'rw4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Concept | Key Rule |
|---|---|
| Supplement | Set off by a matching pair: two commas, two dashes, or two parentheses |
| Removal test | Delete the supplement; a complete sentence must remain |
| Essential element | Identifies which one, so no commas ("the novelist Toni Morrison") |
| Colon | Only after an independent clause; never after "such as" or "including" |
| Series | Commas between items; semicolons when items contain commas |

*Next: Pronoun Clarity & Agreement →*`    }
  ]
};
