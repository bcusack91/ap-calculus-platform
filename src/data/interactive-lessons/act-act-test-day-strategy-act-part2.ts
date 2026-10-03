export const actTestDayPart2Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p2-intro',
      type: 'text' as const,
      content: `
# 🎒 What to Bring

**Part 2 of 7 — Admission Ticket, ID, Pencils, Calculator, and What Stays Home**

The easiest points to lose on the ACT are the ones you lose before the test starts: being turned away for a missing ID, sitting down with a calculator that is not allowed, or spending the first section worried about a phone in your pocket. All of this is preventable with a checklist you pack the night before.

## The Test-Day Packing List

| Item | Required? | Details |
|------|-----------|---------|
| **Printed admission ticket** | Yes (at test centers) | Print it from MyACT. It shows your registration photo and test center. |
| **Acceptable photo ID** | Yes | Current, official photo ID whose name matches your ticket (for example, a driver's license, passport, or current school ID that meets ACT's rules). Check act.org's ID requirements. |
| **Sharpened No. 2 pencils** | Yes for paper testing | Wooden pencils with good erasers. **No mechanical pencils and no ink pens.** Bring several. |
| **Eraser** | Strongly recommended | Incomplete erasures can be read as a second answer on a paper answer document. |
| **Approved calculator** | Optional, Math only | Must meet ACT's calculator policy. Fresh batteries; a backup calculator is fine. |
| **Watch** | Recommended | A simple analog or digital watch with **no alarm sound and no internet or communication features**. |
| **Snack and water** | Recommended | For the break only, stored where the proctor tells you. |
| **Layers of clothing** | Recommended | Test rooms can be cold or warm, and you will sit for hours. |

**If you test online at a test center**, you still need your ticket and ID. You test on a center computer that has built-in tools (such as flagging questions and crossing out answer choices), and scratch paper is provided under the center's rules. Bring pencils anyway, and confirm the current online-testing details on act.org.

## What Stays Home (or Off and Out of Reach)

- **Phones, smartwatches, fitness trackers, earbuds, and any device that can communicate or record.** If you bring a phone, it must be **powered off and stored** as instructed. A phone that makes noise or is accessed during testing or during the break can get you dismissed and your scores cancelled.
- **Notes, books, dictionaries, highlighters, colored pens, and your own scratch paper.**
- **Any calculator that breaks the rules** (see below), or a borrowed calculator you have never used.

## The Calculator Policy, in General Terms

The calculator is allowed **only on the Math section**. When Math ends, it goes away; using it on English, Reading, or Science is a violation, and Science is designed to be done without one.

| Generally allowed | Generally prohibited |
|-------------------|----------------------|
| Four-function calculators | Calculators with a built-in **computer algebra system (CAS)**, such as models in the TI-89 and TI-Nspire CAS families |
| Scientific calculators | Phones, tablets, laptops, and smartwatches used as calculators |
| Most graphing calculators **without** CAS | Devices with a typewriter-style (QWERTY) keyboard |
| | Calculators with wireless, internet, or recording features |

Some calculators are allowed **only after a modification**: remove paper tape, turn off sound, cover an infrared data port, or unplug a power cord. Programs that give a calculator CAS-like abilities must be removed. ACT updates its list of specific prohibited models, so **check the current calculator policy on act.org a few weeks before your test**, not the night before.

**Calculator strategy:**
- Bring the calculator you **practice with**. A brand-new model on test day costs you time hunting for keys.
- Put in **fresh batteries** the week of the test, and bring spares or a backup calculator.
- Many ACT Math questions are faster by hand or by reasoning. The calculator is a tool, not a requirement.

## The Night-Before and Morning-Of Routine

**Night before (pack once, check once):**
1. Print the admission ticket and put it in a folder with your photo ID.
2. Sharpen 4 or more No. 2 pencils; add an eraser.
3. Put the calculator (fresh batteries) and spare batteries in the bag.
4. Pack a water bottle and a snack you know agrees with you.
5. Look up the route, travel time, and parking for your test center. If you have never been there, do a practice drive or look at a map so the morning has no surprises.

**Morning of:**
- Check the bag against the list one more time: **ticket, ID, pencils, calculator, watch, snack, water.**
- Leave early enough to arrive **before the reporting time printed on your ticket.** Late arrivals are generally not admitted, and then you lose the whole test date.
- If you bring a phone, plan where it goes before you walk into the room.

## Why This Matters for Your Score

None of these items earns a point directly, but each one protects points. A missing ID means no test. A dead calculator means doing every Math computation by hand. An alarm going off on a watch can end your test. A five-minute checklist eliminates all three risks.
      `
    },
    {
      id: 'act-tday-p2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Choosing which calculator to bring</b></summary>

**Question:** Devon owns a TI-Nspire CX CAS that his older sister gave him and a non-CAS graphing calculator he has used all year in class. Which should he bring?

**Solution:**
1. **Check the CAS rule.** Calculators with a built-in computer algebra system are prohibited, and the TI-Nspire CAS family is a standard example. The CAS model is out.
2. **Check the non-CAS calculator.** Most non-CAS graphing calculators are allowed, as long as they do not have prohibited features (QWERTY keyboard, wireless communication, and so on). He confirms his model against ACT's current policy on act.org.
3. **Familiarity bonus.** He has practiced all year on the non-CAS calculator, so he knows its menus. That is a second reason to choose it.
4. **Prep the device.** Fresh batteries the week of the test, and spare batteries in his bag.

**Takeaway:** Bring an allowed calculator you know well. A powerful calculator that gets you dismissed is worth zero.
</details>

<details>
<summary><b>Example 2: Sorting a backpack</b></summary>

**Question:** The night before, Kira's bag holds: printed ticket, expired passport, current school photo ID, mechanical pencil, three No. 2 pencils, smartwatch, simple digital watch, granola bar, water bottle, highlighter, and her phone. What should change?

**Solution:**
1. **ID:** The passport is **expired**, so it does not count. Her **current** school photo ID can work if it meets ACT's ID requirements, which she checks on act.org.
2. **Pencils:** Remove the **mechanical pencil**; keep and sharpen the No. 2 pencils (add one more and an eraser).
3. **Watches:** Leave the **smartwatch** at home; bring the simple digital watch with any alarm turned off.
4. **Highlighter:** Leave it home; it is not permitted.
5. **Phone:** Either leave it in the car or plan to power it off completely and store it as instructed.
6. **Snack and water:** Keep both for the break.

**Takeaway:** Pack from a list, and check each item against the rules, not against what seems reasonable.
</details>
      `
    },
    {
      id: 'act-tday-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Packing Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "The night before the test, Luis discovers his passport expired last month. He also has a current school photo ID. What should he do?",
            options: [
              "Bring his current school ID after checking ACT's ID rules",
              "Bring the expired passport, since the photo still matches his face",
              "Bring his birth certificate, since it shows his full legal name",
              "Bring nothing and plan to have a parent vouch for him at check-in"
            ],
            correctAnswer: 0,
            explanation: "ACT requires current, official photo ID whose name matches the ticket, and a current school ID can qualify. An expired document does not meet the requirement even if the photo matches, a birth certificate has no photo, and a parent's word is not an ID."
          },
          {
            question: "Which writing tools should a student bring for a paper ACT?",
            options: [
              "A mechanical pencil with extra lead and a pen",
              "A fine-point black pen for clean, dark marks",
              "Colored pencils to code questions she skipped",
              "Several sharpened No. 2 wooden pencils and an eraser"
            ],
            correctAnswer: 3,
            explanation: "The paper answer document is read by machine and requires No. 2 pencil marks; mechanical pencils and ink pens are not allowed. Colored pencils are not permitted either. A good eraser matters because a faint leftover mark can be read as a second answer."
          },
          {
            question: "During Science, Tasha wants to use her approved calculator to compute a percent change from a table. What is the rule?",
            options: [
              "She may use it, since the calculator is approved for the test",
              "She may use it only for the data tables, not for the text",
              "She may not: calculators are allowed only during Math",
              "She may use it if she asks the proctor for permission first"
            ],
            correctAnswer: 2,
            explanation: "The calculator is permitted only on the Math section; Science is built to be done by estimating and reading data. Approval of the device does not extend it to other sections, there is no tables-only exception, and a proctor cannot override the policy."
          },
          {
            question: "Owen wants to keep his phone in his pocket on silent so he can text his parent during the break. What is the best plan?",
            options: [
              "Keep it on silent; silent phones are allowed in pockets",
              "Power it off and store it as instructed, or leave it home",
              "Keep it on vibrate so it makes no audible noise in the room",
              "Hand it to a classmate to hold during the test sections"
            ],
            correctAnswer: 1,
            explanation: "Phones must be powered off and stored as instructed, and accessing one during the test or the break can lead to dismissal and cancelled scores. Silent or vibrate settings still leave the device on and accessible, and handing it to another tester just moves the violation."
          }
        ]
      }
    },
    {
      id: 'act-tday-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Bring It or Leave It?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A non-CAS graphing calculator you used all year:',
            options: ['Bring it', 'Leave it home', 'Bring it only for Science']
          },
          {
            label: 'A mechanical pencil with extra lead:',
            options: ['Bring it', 'Leave it home', 'Bring it as a backup only']
          },
          {
            label: 'A smartwatch with notifications turned off:',
            options: ['Bring it', 'Leave it home', 'Bring it if it is in airplane mode']
          },
          {
            label: 'A printed admission ticket:',
            options: ['Bring it', 'Leave it home', 'Only needed for online testing']
          }
        ],
        correctAnswers: ['Bring it', 'Leave it home', 'Leave it home', 'Bring it'],
        hint1: 'Non-CAS graphing calculators are generally allowed, but only on Math.',
        hint2: 'Only No. 2 wooden pencils are permitted for the answer document.',
        hint3: 'Smartwatches are prohibited no matter what settings are on.',
        explanation: 'Bring an allowed calculator you know (Math only) and your printed ticket. Mechanical pencils and smartwatches are not permitted; settings like airplane mode do not change that.'
      }
    },
    {
      id: 'act-tday-p2-actpractice',
      type: 'text' as const,
      content: `
## ACT Readiness Check

| Situation | Best move |
|-----------|-----------|
| Your calculator still uses the batteries from last year | Replace them this week and pack spares |
| Your calculator has a paper-tape printer | Remove the tape (or bring a different allowed calculator) |
| You have never been to your test center | Look up the route and parking the day before, or do a practice drive |
| Your watch beeps every hour | Turn off the chime or bring a different watch |
| You are not sure your calculator model is allowed | Check ACT's current calculator policy on act.org weeks ahead |

**ACT Tip:** Keep the ticket, ID, and pencils in one clear folder. At check-in you will be asked for the ticket and ID together.
      `
    },
    {
      id: 'act-tday-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Test-Morning Scenarios** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Which watch is the best choice for pacing on the ACT?",
            options: [
              "A smartwatch set to Do Not Disturb mode",
              "A fitness tracker with its screen dimmed",
              "A simple watch with its alarm turned off",
              "A phone set to airplane mode on the desk"
            ],
            correctAnswer: 2,
            explanation: "A basic analog or digital watch with no alarm sound lets you track checkpoints without breaking rules. Smartwatches and fitness trackers are prohibited regardless of settings, and a phone may not be out at all, even in airplane mode."
          },
          {
            question: "Jae's allowed scientific calculator makes a beep on every key press. What should he do before the test?",
            options: [
              "Nothing; the beeps are too quiet to matter in a test room",
              "Turn off the sound, or bring a different allowed calculator",
              "Ask to sit in the back row so the beeps bother fewer people",
              "Use it only on the last ten questions to limit the noise"
            ],
            correctAnswer: 1,
            explanation: "Calculators that make noise must have the sound turned off to be used. Seating changes or limiting use do not fix the rule problem, and a noisy calculator can be taken away or lead to dismissal."
          },
          {
            question: "Mia is testing at a high school across town that she has never visited. Her ticket lists an early reporting time. What is the smartest preparation?",
            options: [
              "Leave at the usual school time; the test cannot start without her",
              "Plan to arrive right at the reporting time to minimize waiting",
              "Check the route and parking the day before and leave with extra time",
              "Skip breakfast so she can leave the house as early as possible"
            ],
            correctAnswer: 2,
            explanation: "Late arrivals are generally not admitted, so a dry run (or at least a route and parking check) plus a time cushion protects the whole test date. Cutting it close leaves no room for traffic, and skipping breakfast costs focus later in the morning."
          },
          {
            question: "Ethan's graphing calculator dies at the start of Math, and he has no spare batteries. Which plan gives him the best chance at a strong Math score?",
            options: [
              "Stop working and wait for the proctor to find him batteries",
              "Use his phone's calculator, since it is just for arithmetic",
              "Leave the computation questions blank and do the rest",
              "Keep working by hand and estimation, guessing where needed"
            ],
            correctAnswer: 3,
            explanation: "The clock keeps running, so waiting wastes minutes, and using a phone is a violation that can cancel his scores. Leaving questions blank throws away free chances because there is no wrong-answer penalty. Many Math questions are doable by hand, and next time he packs spares."
          }
        ]
      }
    },
    {
      id: 'act-tday-p2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Must-haves:** printed admission ticket, current acceptable photo ID (name matches the ticket), several sharpened No. 2 wooden pencils, and an eraser.
- **Calculator:** Math section only. Most four-function, scientific, and non-CAS graphing calculators are allowed; CAS models, phones, and devices with QWERTY keyboards or wireless features are not. Some need modification (sound off, paper tape removed). Check act.org for the current list.
- **Bring the calculator you practice with**, with fresh batteries and spares.
- **Leave at home or power off and store:** phones, smartwatches, fitness trackers, earbuds, notes, highlighters, mechanical pencils, and pens.
- **Pack the night before**, check the route and parking, and arrive before the reporting time; late arrivals are generally not admitted.
      `
    }
  ]
};
