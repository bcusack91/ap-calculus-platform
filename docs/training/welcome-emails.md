# Welcome email drafts

Drafts only. Nothing here is wired to send. The owner decides whether and how
to send them, using the existing email infrastructure.

Conventions:

- One idea and one button (CTA) per email.
- `{firstName}`, `{courseName}`, `{diagnosticUrl}`, `{className}` are placeholders. Fall back gracefully when a value is missing, for example "Hi there".
- Every email needs the standard footer: unsubscribe link, postal address and a "Why am I getting this?" line.
- Suggested GA4 tagging: `?utm_source=welcome&utm_medium=email&utm_campaign=<id>`.
- Suppression rules (suggested): skip an email when the student already did its action. For example, skip Day 0 if a diagnostic was already taken, and skip Day 5 if they already reviewed flashcards. Skip all student emails for accounts under 13 unless the school consent path covers them.

---

## Student sequence

### S0: Day 0, right after sign-up: "Take your diagnostic"

**Subject:** Your first step on StudyMondo (takes about 20 minutes)
**Preview text:** Find out exactly what to study, for free.

> Hi {firstName},
>
> Welcome to StudyMondo.
>
> Your first step is a free diagnostic for {courseName}. It's a practice test,
> not a grade. It shows what you already know.
>
> Your results become a study plan: a short list of the topics that will help
> you most.
>
> Guessing is fine. Set aside about 20 minutes so your plan is accurate.
>
> **[Take my diagnostic →]({diagnosticUrl})**
>
> Stuck? studymondo.com/help

**CTA:** Take my diagnostic → `{diagnosticUrl}` (fallback: `/topics`)

### S1: Day 2: "Your plan and your first lesson"

**Subject:** Your study plan is ready. Start with topic #1
**Preview text:** One topic, one lesson, one quiz.

> Hi {firstName},
>
> Your study plan lives on your Dashboard. Start with the first topic on the
> list.
>
> Here's how a topic works:
>
> 1. Open the interactive lesson. (Optional: take the entrance quiz first and skip parts you already know.)
> 2. Work through the parts.
> 3. Take the exit quiz. **80% or better clears the topic.**
>
> One topic a day adds up fast.
>
> **[Open my study plan →](https://www.studymondo.com/dashboard)**

**CTA:** Open my study plan → `/dashboard`
**Variant:** if no diagnostic yet, resend S0 with the subject "Still time to find your starting point".

### S2: Day 5: "The flashcard habit"

**Subject:** 5 minutes a day keeps it in your head
**Preview text:** Your flashcards are waiting.

> Hi {firstName},
>
> When you finish a topic's lesson and take its exit quiz, that topic's
> flashcards join your deck.
>
> Review the cards that are due once a day. It takes about five minutes.
> Rate each card honestly: Again, Hard, Good or Easy. Cards you know come back
> less often. Cards you miss come back sooner.
>
> **[Review today's cards →](https://www.studymondo.com/flashcards)**
>
> No cards yet? Finish one topic's lesson and exit quiz. Your first cards
> appear right away.

**CTA:** Review today's cards → `/flashcards`
**Variant for class students:** add one line: "Your class has its own deck. Your personal deck keeps every card you earn."

---

## Teacher sequence

### T0: right after teacher activation: "Create your class"

**Subject:** Your StudyMondo classroom is one click away
**Preview text:** Create a class, then share one code.

> Hi {firstName},
>
> Your free teacher account is on. Next, create your class.
>
> 1. Open **My Classes** and choose **New Classroom**.
> 2. Share the join code, link or QR code with your students. Or import your roster from a CSV.
>
> Setup takes about five minutes.
>
> **[Create my class →](https://www.studymondo.com/teacher)**
>
> Quick-start guide: studymondo.com/help/getting-started-teachers

**CTA:** Create my class → `/teacher`

### T1: Day 2, or when the first student joins: "Give your first diagnostic"

**Subject:** Find out what {className} needs this week
**Preview text:** One diagnostic, one ranked list of topics.

> Hi {firstName},
>
> A diagnostic shows what each student, and the whole class, needs.
>
> - **SAT or MCAT:** in your class, open **Insights › Class plan** and choose **Assign diagnostic**. Everyone gets the same test.
> - **Other courses:** share your course's diagnostic link with students.
>
> The **Class plan** then ranks the topics your class most needs, so you know
> what to teach first.
>
> **[Open my class →](https://www.studymondo.com/teacher)**

**CTA:** Open my class → `/teacher`
**Variant:** if the class has 0 students on Day 2, send a "Add your students" nudge instead (join code, QR code, CSV import) with CTA → `/help/roster-import`.

### T2: Day 5: "Assign, then check Needs Attention"

**Subject:** Your weekly rhythm in 3 steps
**Preview text:** Assign a lesson, watch the results, follow up.

> Hi {firstName},
>
> Here's a simple weekly rhythm:
>
> 1. **Assign** a lesson for the top Class plan topic (**Work › Assignments**). Keep the target at 80%, the site's pass mark.
> 2. **Watch** results arrive in **Performance** and the **Gradebook**.
> 3. **Follow up** from **Needs Attention** on your dashboard. It lists students who missed work, scored below target or went quiet.
>
> Want a change of pace? Run a class review game from **Class Lobby**.
>
> **[Go to my dashboard →](https://www.studymondo.com/teacher)**

**CTA:** Go to my dashboard → `/teacher`

---

## Before sending

- Confirm the menu and tab names against the live site. The Phase 3 teacher changes may move class diagnostics to Work › Assignments and Export CSV to Gradebook.
- Once `privacy@` exists, add it to the footer (see standing owner items).
- Decide the sender (for example "Brendan at StudyMondo") and the reply-to inbox.
