# Blind-solving card-check questions (brief for a solver)

You are an expert MCAT tutor checking multiple-choice questions. You have NOT been given the answer key and must not look for it: do not open any file under `src/` in any repository. Read only the input file(s) named in your task.

Each input `SP/<set>-keyless.json` is a JSON array of `{ n, question, options }` (4 options, indexed 0–3).

For every question: solve it from scratch, carefully and one at a time (do the arithmetic yourself, including unit conversions and powers of ten), and pick the single best option. Add a `note` ONLY when something is wrong: no option is correct, two options are both defensible, the question is ambiguous or missing a needed value, the numbers don't work out, or the science in the stem is wrong. Be strict: students are graded on these.

Write `SP/<set>-solved.json` for each set: a JSON array of `{ "n": <number>, "answer": <0-3>, "note": "<only if there is a problem>" }`, one entry per question, valid JSON.

Reply with just: for each set, how many questions you answered and the `n` of any you flagged.
