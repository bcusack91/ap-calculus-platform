export const microMonopolisticOligopolyPart4Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon4-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 4 of 7 — Reading Payoff Matrices**

---

| Section |
|---------|
| 📖 How a Payoff Matrix Works |
| Worked Game: One Player Has a Dominant Strategy |
| Worked Game: Two Nash Equilibria |
| Common Matrix Mistakes |

> 🔑 **Key Concept:** Every game-theory question on the AP exam can be solved with one method: **find each player's best response** to each choice the rival could make. A strategy that is the best response to **every** rival choice is a **dominant strategy**. A cell where **both** players are playing best responses is a **Nash equilibrium**.
      `
    },
    {
      id: 'micromon4-basics',
      type: 'text' as const,
      content: `
## 📖 How a Payoff Matrix Works

A payoff matrix shows a **simultaneous, one-time game** between two players who know all the payoffs.

- One player's choices label the **rows**; the other's label the **columns**.
- Each cell lists **two payoffs**. In this lesson, the **first number belongs to the row player** and the second to the column player. AP questions always state this convention, so read it before anything else.

### The Best-Response Method
1. **Fix the column player's choice.** Look down that column and compare only the **row player's** payoffs (the first numbers). Mark the larger one.
2. Repeat for the other column.
3. **Fix the row player's choice.** Look across that row and compare only the **column player's** payoffs (the second numbers). Mark the larger one.
4. Repeat for the other row.
5. A player whose marks are on the **same strategy** both times has a **dominant strategy**.
6. Any cell with **both numbers marked** is a **Nash equilibrium**: neither player can do better by changing only its own choice.

> 🔑 **AP Connection:** Compare payoffs for the **same player** across different cells. Comparing the row player's payoff with the column player's payoff in one cell tells you nothing about either player's choice.
      `
    },
    {
      id: 'micromon4-gameA',
      type: 'text' as const,
      content: `
## Worked Game: One Player Has a Dominant Strategy

Two streaming services, Reel (rows) and Flick (columns), each choose a High or Low monthly price. Payoffs are monthly profits in millions of dollars, listed (Reel, Flick).

| | Flick: High | Flick: Low |
|---|---|---|
| **Reel: High** | 12, 9 | 5, 10 |
| **Reel: Low** | 8, 4 | 6, 6 |

### Reel's Best Responses (first numbers)
- If Flick chooses **High**: Reel compares 12 (High) with 8 (Low) → **High**.
- If Flick chooses **Low**: Reel compares 5 (High) with 6 (Low) → **Low**.
- Reel's best choice **depends on Flick**, so Reel has **no dominant strategy**.

### Flick's Best Responses (second numbers)
- If Reel chooses **High**: Flick compares 9 (High) with 10 (Low) → **Low**.
- If Reel chooses **Low**: Flick compares 4 (High) with 6 (Low) → **Low**.
- Low is best either way, so Flick's **dominant strategy is Low**.

### The Nash Equilibrium
Reel knows Flick will choose Low, and Reel's best response to Low is Low. So the Nash equilibrium is **(Low, Low)**, with payoffs **\\$6 million each**.

Check it: from (Low, Low), Reel switching to High would drop it from 6 to 5, and Flick switching to High would drop it from 6 to 4. Neither wants to move ✓.

Notice that (High, High) gives Reel 12 and Flick 9, both better than 6. It is still not an equilibrium, because from (High, High) Flick would switch to Low and earn 10.
      `
    },
    {
      id: 'micromon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Two bakeries, Rise (rows) and Crust (columns), decide whether to open on Sundays. Payoffs are weekly profits in hundreds of dollars, listed (Rise, Crust).

| | Crust: Open | Crust: Closed |
|---|---|---|
| **Rise: Open** | 3, 3 | 7, 2 |
| **Rise: Closed** | 4, 6 | 5, 5 |
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about dominant strategies in the bakery game is correct?',
            options: [
              'Crust has one, and Rise does not',
              'Rise has one, and Crust does not',
              'Both bakeries have one',
              'Neither bakery has one'
            ],
            correctAnswer: 0,
            explanation: 'Crust earns more by opening whether Rise opens (3 > 2) or closes (6 > 5), so Open is dominant for Crust. Rise prefers Closed when Crust opens (4 > 3) but Open when Crust closes (7 > 5), so Rise has no dominant strategy.'
          },
          {
            question: 'What is the Nash equilibrium of the bakery game?',
            options: [
              'Rise closes and Crust opens',
              'Both bakeries open on Sundays',
              'Rise opens and Crust closes',
              'Both bakeries close on Sundays'
            ],
            correctAnswer: 0,
            explanation: 'Crust will open because it is dominant, and Rise\'s best response to an open Crust is to close (4 > 3). At (Closed, Open), Rise would drop to 3 by opening and Crust would drop to 5 by closing, so neither moves. Both closing pays more in total, but Crust would switch to Open from there.'
          }
        ]
      }
    },
    {
      id: 'micromon4-gameB',
      type: 'text' as const,
      content: `
## Worked Game: Two Nash Equilibria

Two console makers, Nova (rows) and Orbit (columns), each choose a charging port. Buyers want accessories that fit both consoles, so matching pays. Payoffs in millions of dollars, listed (Nova, Orbit):

| | Orbit: Port X | Orbit: Port Y |
|---|---|---|
| **Nova: Port X** | 8, 6 | 2, 1 |
| **Nova: Port Y** | 1, 2 | 6, 8 |

### Best Responses
- If Orbit picks X, Nova prefers X (8 > 1). If Orbit picks Y, Nova prefers Y (6 > 2). **No dominant strategy** for Nova.
- If Nova picks X, Orbit prefers X (6 > 1). If Nova picks Y, Orbit prefers Y (8 > 2). **No dominant strategy** for Orbit.

### Equilibria
- **(X, X)**: both numbers are best responses → Nash equilibrium.
- **(Y, Y)**: both numbers are best responses → Nash equilibrium.
- (X, Y) and (Y, X) are not equilibria: either firm would switch to match the other.

### What This Game Teaches

| Idea | Lesson from the port game |
|---|---|
| A game can have **more than one** Nash equilibrium | Both matching cells are stable |
| A Nash equilibrium does **not** need a dominant strategy | Neither firm has one here |
| A dominant-strategy equilibrium **is** a Nash equilibrium, but not the reverse | Every Nash equilibrium needs only best responses to the rival's actual choice |
| The model may not predict **which** equilibrium occurs | Nova prefers (X, X); Orbit prefers (Y, Y) |
      `
    },
    {
      id: 'micromon4-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Game** ✍️

Two grocery chains, North (rows) and South (columns), each decide whether to Expand or Hold. Payoffs are listed (North, South).

| | South: Expand | South: Hold |
|---|---|---|
| **North: Expand** | 3, 4 | 9, 2 |
| **North: Hold** | 5, 7 | 8, 5 |

1) What is North's payoff in the Nash equilibrium?

2) What is South's payoff in the Nash equilibrium?

3) How many of the two players have a dominant strategy?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '7', '1'],
        hint1: 'Check South first: compare its second numbers in each row. Is one choice best in both rows?',
        hint2: 'Once you know South\'s choice, find North\'s best response to it.',
        hint3: 'North\'s best response changes with South\'s choice; South\'s does not.',
        explanation: 'South\'s dominant strategy is Expand (4 > 2 and 7 > 5). North\'s best response to Expand is Hold (5 > 3), even though North would choose Expand if South held (9 > 8). The equilibrium is (Hold, Expand) with payoffs 5 and 7, and only South has a dominant strategy.'
      }
    },
    {
      id: 'micromon4-mistakes',
      type: 'text' as const,
      content: `
## Common Matrix Mistakes

| Mistake | Why it fails | Fix |
|---|---|---|
| Picking the cell with the **largest total** | Totals are not what each player maximizes | Use best responses, one player at a time |
| Comparing the two numbers **inside one cell** | Those belong to different players | Compare one player's payoffs across cells |
| Reading the wrong number for a player | The order is set by the question | Check which payoff is listed first |
| Calling the strategy with the **single biggest payoff** dominant | Dominant means best against **every** rival choice | Check both columns (or both rows) |
| Assuming a game has exactly one equilibrium | Some games have two | Test all four cells |

### The Four-Cell Test
When in doubt, test each cell by asking two questions:
1. Could the row player gain by switching rows while the column player stays put?
2. Could the column player gain by switching columns while the row player stays put?

If the answer to **both** is no, the cell is a Nash equilibrium.

> 🔑 **AP Connection:** Free-response questions usually ask you to "identify the dominant strategy, if one exists" and to "explain using numbers from the matrix." Write the comparison out: "If Flick chooses High, Reel earns 12 from High and 8 from Low, so it chooses High."
      `
    },
    {
      id: 'micromon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a pricing game, Firm X does best by choosing High when Firm Y chooses High, and by choosing Low when Firm Y chooses Low. Firm X',
            options: [
              'has no dominant strategy',
              'has a dominant strategy of High',
              'has a dominant strategy of Low',
              'cannot be part of any Nash equilibrium'
            ],
            correctAnswer: 0,
            explanation: 'A dominant strategy must be the best response to every choice the rival makes, and Firm X\'s best response changes with Firm Y\'s choice. Firm X can still be part of a Nash equilibrium, as both firms are in the port game.'
          },
          {
            question: 'In the port game, why is the cell where Nova picks Port X and Orbit picks Port Y not a Nash equilibrium?',
            options: [
              'Each firm could gain by switching to match its rival',
              'Neither firm has a dominant strategy in the game',
              'Its total payoff is lower than the totals in other cells',
              'Nova earns more than Orbit does in that cell'
            ],
            correctAnswer: 0,
            explanation: 'From (X, Y), Nova would switch to Y (6 > 2) and Orbit would switch to X (6 > 1), so the cell fails the test of no profitable one-sided move. The matching cells are equilibria without dominant strategies, and comparing totals or the two firms\' payoffs is not how equilibrium is judged.'
          },
          {
            question: 'Which statement is true of every Nash equilibrium?',
            options: [
              'No player can gain by changing only its own strategy',
              'The players earn the highest combined payoff',
              'Both players are using their dominant strategies',
              'The two players earn equal payoffs'
            ],
            correctAnswer: 0,
            explanation: 'The definition of a Nash equilibrium is that each player is making its best response to the other, so no one-sided change helps. The streaming game shows the combined payoff can be lower than elsewhere, the port game has no dominant strategies, and payoffs in equilibrium can differ.'
          }
        ]
      }
    }
  ]
}
