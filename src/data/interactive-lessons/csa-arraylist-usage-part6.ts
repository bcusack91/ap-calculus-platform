export const csaArraylistUsagePart6Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray6-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 6 of 7 — AP-Style Practice**

---

This part practices list algorithms the way the exam presents them: multiple-choice traces, then a full free-response question in the style of **Data Analysis with ArrayList**. Use only the Java Quick Reference subset.

### How to Attack a List Algorithm

| Step | Do this |
|---|---|
| 1 | Find the loop's direction and whether the body changes the size. |
| 2 | After every add or remove, rewrite the list and decide which element the next pass will see. |
| 3 | For a result list, find where it is created: once before the loop, or wrongly inside it. |
| 4 | For objects, track references: \`remove(i)\` and \`get(i)\` both hand back the object itself. |
| 5 | Check the return: inside the loop (an early answer) or after it (the default answer). |
      `
    },
    {
      id: 'csaarray6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

**Segment A** (list holds [3, 6, 2, 8, 5])
\`\`\`java
for (int i = list.size() - 1; i > 0; i--) {
    if (list.get(i) > list.get(i - 1)) {
        list.remove(i - 1);
    }
}
\`\`\`

**Segment B** (w holds [go, stop, go, slow, go])
\`\`\`java
int pos = -1;
int count = 0;
for (int i = 0; i < w.size(); i++) {
    if (w.get(i).equals("go")) {
        count++;
        pos = i;
    }
}
System.out.println(count + " " + pos);
\`\`\`

**Segment C** (a holds [1, 2, 3])
\`\`\`java
ArrayList<Integer> b = new ArrayList<Integer>();
for (int x : a) {
    b.add(0, x * x);
}
a.set(0, b.get(0));
System.out.println(a + " " + b);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does list hold after Segment A runs?',
            options: [
              '[8, 5]',
              '[6, 8, 5]',
              '[3, 8, 5]',
              '[3, 6, 8, 5]'
            ],
            correctAnswer: 0,
            explanation: 'At i = 3, 8 beats 2, so 2 is removed; then at i = 2, 8 beats 6, and at i = 1, 8 beats 3. Each removal pulls 8 one index lower, so it keeps being compared with the element before it.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '3 4',
              '3 0',
              '2 4',
              '3 2'
            ],
            correctAnswer: 0,
            explanation: 'Three elements equal "go", and pos is overwritten at every match, so it ends at the last one, index 4. To keep the first index, the loop would have to return or stop updating pos.'
          },
          {
            question: 'What is printed by Segment C?',
            options: [
              '[9, 2, 3] [9, 4, 1]',
              '[1, 2, 3] [9, 4, 1]',
              '[1, 2, 3] [1, 4, 9]',
              '[9, 2, 3] [1, 4, 9]'
            ],
            correctAnswer: 0,
            explanation: 'Adding each square at index 0 builds b in reverse order: [9, 4, 1]. Then a.set(0, 9) replaces the 1 in a, which is a separate list.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Question — StudyLog

\`\`\`java
public class Session {
    private String subject;
    private int minutes;

    public Session(String s, int m) {
        subject = s;
        minutes = m;
    }

    public String getSubject() { return subject; }
    public int getMinutes() { return minutes; }
}
\`\`\`

\`\`\`java
public class StudyLog {
    private ArrayList<Session> sessions;

    // constructor and other methods not shown

    /** Returns the total minutes of all sessions for subject */
    public int minutesFor(String subject)
    { /* part (a) */ }

    /** Removes every session shorter than min minutes and returns a list of
        the subjects of the removed sessions, in their original order */
    public ArrayList<String> removeShort(int min)
    { /* part (b) */ }
}
\`\`\`

**Example.** sessions holds (math, 30), (bio, 10), (math, 5), (art, 45), (bio, 20).

| Call | Returns | sessions afterward |
|---|---|---|
| \`minutesFor("math")\` | 35 | unchanged |
| \`minutesFor("chem")\` | 0 | unchanged |
| \`removeShort(15)\` | [bio, math] | (math, 30), (art, 45), (bio, 20) |

### Part (a) Solution

\`\`\`java
public int minutesFor(String subject) {
    int total = 0;
    for (Session s : sessions) {
        if (s.getSubject().equals(subject)) {
            total += s.getMinutes();
        }
    }
    return total;
}
\`\`\`

### Part (b) Solution

\`\`\`java
public ArrayList<String> removeShort(int min) {
    ArrayList<String> removed = new ArrayList<String>();
    for (int i = sessions.size() - 1; i >= 0; i--) {
        if (sessions.get(i).getMinutes() < min) {
            removed.add(0, sessions.remove(i).getSubject());
        }
    }
    return removed;
}
\`\`\`

- The backward loop makes each removal safe.
- \`sessions.remove(i)\` returns the Session it removed, so \`.getSubject()\` can be called on it in the same statement.
- Visiting the list backward finds the short sessions in reverse order, and \`add(0, ...)\` puts each subject in front of the ones found after it, restoring the original order.

### What a Rubric Looks For

| Part | Point | Earned by |
|---|---|---|
| (a) | Traversal | visits every session with no out-of-bounds access |
| (a) | Comparison | compares subjects with \`equals\`, using the getter |
| (a) | Result | adds the minutes of matching sessions only, and returns the total after the loop |
| (b) | Removal | removes every session shorter than min without skipping any |
| (b) | Result list | creates one list before the loop and adds the removed subjects in their original order |
| (b) | Return | returns the list of subjects |
      `
    },
    {
      id: 'csaarray6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About StudyLog** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes removeShort with a forward loop that never adjusts i and appends each subject with removed.add(...). What does removeShort(15) return for the example?',
            options: [
              '[bio]',
              '[bio, math]',
              '[math, bio]',
              '[]'
            ],
            correctAnswer: 0,
            explanation: 'Removing (bio, 10) at index 1 slides (math, 5) into index 1, and the loop moves on to index 2, so the 5-minute session is never checked. Only bio is removed and returned.'
          },
          {
            question: 'In the solution to part (b), removed.add(0, ...) is changed to removed.add(...). What does removeShort(15) return for the example?',
            options: [
              '[math, bio]',
              '[bio, math]',
              '[bio]',
              '[math]'
            ],
            correctAnswer: 0,
            explanation: 'The backward loop finds (math, 5) first and (bio, 10) second. Appending keeps that reverse order, so the list is [math, bio]; adding at the front is what restores [bio, math].'
          },
          {
            question: 'A student writes the test in part (a) as s.getSubject() == subject. Why can this fail?',
            options: [
              '== compares references, so equal text can fail to match',
              '== cannot be used on a value returned by a getter',
              'Strings cannot be compared inside an enhanced for loop',
              '== compares lengths, so different words can match'
            ],
            correctAnswer: 0,
            explanation: 'Two String objects with the same characters can be different objects, and == only asks whether they are the same object. equals compares the characters.'
          }
        ]
      }
    },
    {
      id: 'csaarray6-trace',
      type: 'input-boxes' as const,
      content: `
**Trace the Example** ✍️

The example StudyLog runs \`removeShort(15)\` and then \`minutesFor("bio")\`.

1) How many subjects are in the list that removeShort(15) returns?

2) What does minutesFor("bio") return afterward?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2', '20'],
        hint1: 'Only sessions shorter than 15 minutes are removed: check 30, 10, 5, 45 and 20.',
        hint2: 'The (bio, 10) session is gone after the removal.',
        hint3: 'One bio session remains.',
        explanation: 'The sessions with 10 and 5 minutes are removed, so the returned list holds 2 subjects. The only bio session left is (bio, 20), so minutesFor("bio") returns 20.'
      }
    },
    {
      id: 'csaarray6-deductions',
      type: 'text' as const,
      content: `
## Mistakes That Cost Points on This Question

| Mistake | Why it fails |
|---|---|
| \`sessions[i]\` or \`sessions.length\` | array syntax on a list does not compile |
| \`sessions.get(i).minutes\` | minutes is private to Session: use \`getMinutes()\` |
| a forward removal loop with no adjustment | skips the session after each removal |
| creating \`removed\` inside the loop | a new empty list replaces it on every pass |
| \`return\` inside the loop of part (a) | returns after the first matching session |
| removing inside \`for (Session s : sessions)\` | can throw a ConcurrentModificationException |
| returning the subjects in reverse order | the prompt asks for their original order |

> 📝 **AP Connection:** Write each part so it works on its own. Part (b) may call part (a) or other methods in the class when that helps, and you may assume they work as specified.
      `
    }
  ]
}
