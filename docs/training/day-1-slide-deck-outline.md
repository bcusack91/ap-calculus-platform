# "Day 1 with StudyMondo": slide deck outline

A 10–12 minute deck a teacher projects on the first day. Students follow along
on their own devices and finish the class with an account, a class
membership and a diagnostic under way.

**Audience:** students (grades 7–12 and test prep).
**Length:** 12 slides, about 1 minute each, plus diagnostic time.
**Teacher prep:** create the class first and have its join code or QR code ready.

## Building it with the site's slide system

The live-lesson slide system (`src/lib/slide-deck.ts`) supports four slide
kinds: `title`, `content` (a title plus up to 5 short markdown blocks, 700
characters max), `poll` (multiple choice with a revealed answer) and `quiz`
(hand-off to a topic's exit quiz). Every slide below maps to one of those
kinds, so the deck can be presented in a **live class session** with working
polls.

What would need building (not done, owner decision):

- Decks today are generated per curriculum topic (`TopicSlideDeck`, keyed by
  `topicSlug`) and listed in the Slide Library by course. A Day 1 deck is not a
  curriculum topic. It needs either a hand-authored `TopicSlideDeck` row under
  a reserved slug (for example `studymondo-day-1`) plus a way to pick it in
  "Present slides", or a small "starter decks" list in the Slide Library.
- The join code and QR code are per class. Slide 3 should render the
  presenting class's code dynamically rather than hard-coding one.
- Simpler interim option: build the same outline as a slide deck (Google
  Slides, PowerPoint or a claude.ai slides artifact) and project it.

## Slides

| # | Kind | Title | Content (on the slide) | Teacher says / does |
|---|---|---|---|---|
| 1 | title | Day 1 with StudyMondo | "How we'll study this year" | Introduce the site as our study home base. |
| 2 | content | What you need | • A phone, tablet or laptop · • Your school email · • 10 minutes | Ask everyone to open a browser. |
| 3 | content | Join our class | • Go to **studymondo.com/join-class** · • Type code **[CLASS CODE]** · • Or scan the QR code · • Sign up free if asked. You join right after. | Show the QR code from the class page. Wait until most students see "You're in!" |
| 4 | poll | Check: did it work? | "What do you see now?" A) You're in! B) Invalid code C) Still signing up | Help the B and C groups. Invalid code usually means a typo. |
| 5 | content | Where things are | • **Dashboard**: your next step · • **My Class**: our assignments · • **Flashcards**: daily review | Point at the menu on the projected screen. |
| 6 | content | How StudyMondo works | Diagnostic → study plan → lesson → exit quiz → flashcards → retake | Walk through the loop once. |
| 7 | content | Step 1: the diagnostic | • A practice test for the whole course · • It is not graded · • It shows what YOU need · • Guessing is fine | Reassure: this measures, it doesn't grade. |
| 8 | content | Step 2: your study plan | • Your results become a list of topics · • Start at the top · • High priority first | |
| 9 | content | How a topic works | • Optional entrance quiz: ace a part to skip it · • Interactive lesson, in parts · • Exit quiz at the end · • **80% or better = cleared** | Stress: 80% is the one number that matters. |
| 10 | poll | Check: what clears a topic? | A) Finishing the lesson B) 80% or better on the exit quiz C) Taking the diagnostic | Reveal B. Point out that finishing the lesson alone does not count. |
| 11 | content | The flashcard habit | • Lesson + exit quiz add that topic's cards · • Review once a day, 5–10 minutes · • Rate honestly: Again / Hard / Good / Easy · • Our class has its own deck. Your personal deck keeps everything | Suggest a fixed time: start of class or before bed. |
| 12 | content | Your turn: start now | • Open **My Class** · • Start the diagnostic · • Stuck? **studymondo.com/help** | Students begin the assigned diagnostic in the remaining time. |

## Optional add-ons

- **Class game teaser (2 min):** end with a quick Free-for-all game from Class Lobby on an easy review topic, so the first day ends on a win.
- **Parent note:** attach the student welcome email text (see `welcome-emails.md`) to your class announcement.
