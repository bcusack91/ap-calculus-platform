# Help-center video scripts

Three short screen recordings for /help and the teacher first-week checklist.
Each runs 60–90 seconds. Record at 1920×1080 in a clean browser profile, light
theme, zoom 110%. Use a fresh demo account for each video so no real student
data is on screen.

When a video is uploaded (YouTube, unlisted or public), add it to the matching
article in `src/data/help/articles.ts` with the `video` field:

```ts
video: { youtubeId: 'abc123XYZ', title: 'Your first 20 minutes on StudyMondo' },
```

The article page embeds it from youtube-nocookie.com (already allowed by the CSP).

| Video | Embed in |
|---|---|
| 1. Your first 20 minutes on StudyMondo | `getting-started-students` |
| 2. Set up your class in 5 minutes | `getting-started-teachers`, teacher checklist |
| 3. Run a diagnostic week | `class-diagnostics` |

**Before recording, check these against the live site.** Phases 1–3 of the UX
plan are landing in parallel, so labels may shift:

- The course hub button text ("Start with the free diagnostic").
- Where class diagnostics are assigned. Today it is Insights › Class plan, for SAT and MCAT only.
- Where Export CSV lives. Today it is on Insights › Performance, not Gradebook.
- Whether "Start live game" inside a class offers Teams / Free-for-all / Chaos. Today only Class Lobby does.

---

## 1. "Your first 20 minutes on StudyMondo" (student, ~85 s)

**Setup:** signed out, on the homepage. Pick a course with a short diagnostic
and a complete interactive lesson (for example Algebra 1). Before recording,
pre-run one topic on a second account so you can cut to its exit-quiz result.

| Time | Shot (what to click) | Narration | On-screen text |
|---|---|---|---|
| 0:00 | Homepage, hero visible | "Here's how to get the most out of StudyMondo in your first twenty minutes." | **Your first 20 minutes** |
| 0:05 | Click **Courses** › **All courses**, then pick the course | "Start by picking your course." | Step 1: Pick your course |
| 0:12 | Click **Start with the free diagnostic**. The sign-up page appears | "Every course starts with a free diagnostic. You need a free account so your results are saved." | Free account = your progress saves |
| 0:20 | Fill in sign-up, land back on the diagnostic, answer 2 questions (speed ramp the rest) | "The diagnostic checks what you already know. Guessing is fine." | Step 2: Take the diagnostic |
| 0:30 | Results screen, then click through to **Dashboard** and the study plan | "Your results become a study plan. Start at the top." | Step 3: Follow your study plan |
| 0:38 | Click the first plan topic, then **Start Interactive Lesson** | "Each topic has an interactive lesson." | |
| 0:42 | Entrance quiz intro; point at **Start Lesson Instead** | "The entrance quiz is optional. Get a whole part right, and you can skip that part." | Entrance quiz: optional |
| 0:50 | Scroll through one lesson part, answer a practice question | "Work through the parts. Practice is built in." | |
| 0:56 | Cut to the exit-quiz result screen showing "You cleared this topic!" | "At the end, take the exit quiz. Score eighty percent or better, and the topic is cleared." | **80% = cleared** |
| 1:05 | Flashcard toast, then **Flashcards** › start review; rate a card **Good** | "Finishing the lesson and taking the exit quiz adds that topic's flashcards to your deck. Review them once a day." | Step 4: Review flashcards daily |
| 1:15 | Back on Dashboard, plan shows one topic **Done** | "Clear every topic on your plan, then retake the diagnostic to see how much you've grown." | Step 5: Retake to see your growth |
| 1:22 | Help Center landing | "Stuck? Everything is explained at studymondo.com/help." | studymondo.com/help |

---

## 2. "Set up your class in 5 minutes" (teacher, ~80 s)

**Setup:** a signed-in account that is not yet a teacher. Have a 5-row CSV
ready (`name, email`) with demo addresses.

| Time | Shot (what to click) | Narration | On-screen text |
|---|---|---|---|
| 0:00 | /for-teachers hero | "StudyMondo is free for teachers. Here's how to set up your class in five minutes." | **Set up your class in 5 minutes** |
| 0:06 | Tick **I confirm I'm a teacher or educator**, click **Activate my free teacher account** | "First, turn on teacher features. It takes one click." | Step 1: Activate (free) |
| 0:14 | Teacher dashboard; click **New Classroom**, type "Period 3 AP Calculus", click **Create Classroom** | "Create a class and give it a name your students will recognize." | Step 2: Create a class |
| 0:24 | Open the class; highlight the join code, **copy link**, then the **QR code** | "Students join with this code. You can also share the link, or put the QR code on your projector." | Step 3: Share the code, link or QR |
| 0:36 | **Roster** › **Import students** › **Upload CSV** › **Preview import** › confirm | "Have a roster? Paste emails or upload a CSV. Students then sign in with that school email." | Or import a roster |
| 0:48 | Student view (second browser): /join-class, type code, **Join Class**, "You're in!" | "On the student side, joining takes a few seconds." | |
| 0:56 | Back to teacher: **Work › Assignments** › new assignment, pick **Interactive Lesson**, one topic, due Friday, target 80% | "Now assign your first lesson. Keep the target at eighty percent. That's the site's pass mark." | Step 4: Assign a lesson |
| 1:08 | Teacher dashboard, **Needs Attention** panel | "Each day, check Needs Attention. It shows who missed work or went quiet." | Step 5: Check Needs Attention |
| 1:15 | /help/getting-started-teachers | "The full checklist is at studymondo.com/help." | studymondo.com/help |

---

## 3. "Run a diagnostic week" (teacher, ~85 s)

**Setup:** an SAT or MCAT class with at least 6 demo students who have taken
an assigned diagnostic. Seed it beforehand. The Class plan needs results to rank.

| Time | Shot (what to click) | Narration | On-screen text |
|---|---|---|---|
| 0:00 | Class page header | "A diagnostic week tells you exactly what to teach. Here's the rhythm." | **Run a diagnostic week** |
| 0:05 | **Insights › Class plan** › **Assign diagnostic**, pick SAT, set a due date, **Assign to class** | "Monday: assign the diagnostic. Every student gets the same test." | Monday: assign the diagnostic |
| 0:16 | Student Dashboard banner for the assigned diagnostic | "Students see a banner on their dashboard until they take it." | |
| 0:22 | Back to Class plan: completion count, class average, weakest areas | "As results come in, you see who has taken it and where the class is weakest." | Tuesday: watch results arrive |
| 0:34 | Scroll to the ranked topic list in Class plan | "The Class plan ranks the topics your whole class most needs. Teach the top ones in class." | Wed–Thu: teach the top topics |
| 0:44 | Open a topic's slide deck from the plan (Slide Library preview) | "Every topic has a ready-made slide deck with polls you can present live." | Ready-made slides |
| 0:52 | Student Dashboard: personal study plan list | "Meanwhile, each student works their own study plan as homework." | Homework: each student's plan |
| 1:00 | Insights › **Performance** and **Gradebook** | "Exit-quiz results flow into Performance and the Gradebook. Eighty percent clears a topic." | 80% = cleared |
| 1:10 | Class plan: assign a second diagnostic (or show the growth column) | "When students clear their plans, assign the next diagnostic and compare the growth." | Next cycle: measure growth |
| 1:18 | /help/class-diagnostics | "More at studymondo.com/help." | studymondo.com/help |

**For AP and other courses:** only SAT and MCAT can be assigned from Class plan
today. For other courses, send students the course's diagnostic link. Their
results still feed the Class plan. If the recording uses a non-SAT/MCAT class,
replace shots 0:05–0:16 with sharing the course diagnostic link.
