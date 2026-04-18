export const macroPhillipsCurvePart1Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {id:'macrophill1-intro',type:'text' as const,content:`
# 📉 The Phillips Curve

**Part 1 of 7 — Inflation-Unemployment Tradeoff**

---

| Section |
|---------|
| 📖 Short-Run Phillips Curve (SRPC) |
| Long-Run Phillips Curve (LRPC) |
| Shifts vs. Movements |
| Stagflation & Supply Shocks |

> 🔑 **Key Concept:** The Phillips Curve shows the **inverse relationship** between inflation and unemployment in the short run. In the long run, the Phillips Curve is vertical at the natural rate of unemployment (NRU). The AP exam heavily tests this graph and its relationship to the AD-AS model.
`},
    {id:'macrophill1-srpc',type:'text' as const,content:`
## 📖 Short-Run Phillips Curve (SRPC)

### The Tradeoff
In the short run, there is an **inverse (negative) relationship** between inflation and unemployment:
- **Lower unemployment → Higher inflation** (economy overheating; too much demand)
- **Higher unemployment → Lower inflation** (economy slowing; insufficient demand)

### Connection to AD-AS

| AD-AS | Phillips Curve |
|---|---|
| AD shifts RIGHT → Higher PL, Higher Y | Move UP and LEFT along SRPC → higher inflation, lower unemployment |
| AD shifts LEFT → Lower PL, Lower Y | Move DOWN and RIGHT along SRPC → lower inflation, higher unemployment |

### Key Insight
- **Movement ALONG the SRPC** = changes in aggregate demand (AD shifts)
- **Shift of the SRPC** = changes in aggregate supply (SRAS shifts) or changes in inflation expectations

### What Shifts the SRPC?

| Shifts SRPC RIGHT (worse tradeoff) | Shifts SRPC LEFT (better tradeoff) |
|---|---|
| Higher inflation expectations | Lower inflation expectations |
| Negative supply shock (oil price spike) | Positive supply shock (new technology) |
| Higher input costs | Lower input costs |

> 🔑 **AP Connection:** The most common mistake is confusing a MOVEMENT along the SRPC (AD change) with a SHIFT of the SRPC (supply shock or expectations change). The AP exam tests this distinction every year.
`},
    {id:'macrophill1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'In the short-run Phillips Curve model, an increase in aggregate demand (AD shifts right) would cause:',options:['A movement UP and to the LEFT along the SRPC — inflation rises and unemployment falls','A shift of the entire SRPC to the right — both inflation and unemployment increase at every point','A movement DOWN and to the RIGHT along the SRPC — both inflation and unemployment increase simultaneously','A shift of the entire SRPC to the left — the inflation-unemployment tradeoff improves at every point'],correctAnswer:0,explanation:'When AD increases (shifts right), the economy produces more output → unemployment falls → but the price level rises (inflation increases). On the Phillips Curve, this is a movement UP and to the LEFT along the existing SRPC — lower unemployment at the cost of higher inflation. This is a movement, not a shift, because it\'s caused by a demand change.'},
      {question:'What would cause the Short-Run Phillips Curve to shift to the RIGHT (upward)?',options:['An increase in government spending that boosts aggregate demand and reduces unemployment','A positive supply shock, such as a dramatic decrease in global oil prices, that reduces production costs','An increase in inflation expectations or a negative supply shock (like a surge in oil prices) that raises costs across the economy','A decrease in aggregate demand caused by a contractionary monetary policy from the Federal Reserve'],correctAnswer:2,explanation:'The SRPC shifts right (upward) when the tradeoff between inflation and unemployment gets WORSE — the economy experiences higher inflation at every level of unemployment. This happens with: (1) negative supply shocks (oil price spikes raise costs), or (2) higher inflation expectations (workers demand higher wages, firms raise prices preemptively). Both correspond to an SRAS shift LEFT in the AD-AS model.'}
    ]}},
    {id:'macrophill1-lrpc',type:'text' as const,content:`
## 📖 Long-Run Phillips Curve (LRPC)

### The LRPC Is Vertical at the Natural Rate of Unemployment (NRU)

In the long run, there is **NO tradeoff** between inflation and unemployment. The economy gravitates to the NRU regardless of the inflation rate.

### Why?
- In the long run, workers and firms **adjust expectations** to match actual inflation
- If the government tries to keep unemployment permanently below the NRU by stimulating demand:
  1. Initially: unemployment falls, inflation rises (move along SRPC)
  2. Workers notice higher prices → demand higher wages
  3. Higher wages → firms\' costs rise → they reduce hiring
  4. Unemployment returns to NRU, but now at a **higher inflation rate**
  5. The SRPC **shifts up** to reflect new, higher inflation expectations

### Stagflation
- **Stagflation** = high inflation + high unemployment simultaneously
- Caused by a **negative supply shock** (e.g., 1970s oil crisis)
- SRPC shifts RIGHT → both inflation and unemployment increase
- Regular fiscal and monetary policy can't fix both problems at once:
  - Expansionary policy → reduces unemployment but worsens inflation
  - Contractionary policy → reduces inflation but worsens unemployment

> 🔑 **AP Connection:** The LRPC being vertical at NRU means that in the long run, attempts to keep unemployment permanently below the natural rate will only produce **accelerating inflation** without lasting employment gains. This is tested in the FRQ regularly.
`},
    {id:'macrophill1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'Why is the Long-Run Phillips Curve (LRPC) vertical at the natural rate of unemployment?',options:['The government permanently controls both inflation and unemployment in the long run through automatic stabilizers','In the long run, inflation expectations fully adjust to actual inflation, so there is no lasting tradeoff between inflation and unemployment — the economy returns to the natural rate regardless of the inflation rate','The natural rate of unemployment is always zero in the long run because all frictional and structural unemployment is eliminated','Monetary policy becomes perfectly effective in the long run, allowing the Federal Reserve to set both inflation and unemployment at whatever level it prefers'],correctAnswer:1,explanation:'The key insight is expectations adjustment. If the government pushes unemployment below the NRU through expansionary policy, inflation rises. Initially, workers don\'t realize inflation has increased — but eventually they notice and demand higher wages. Higher wages raise firms\' costs, causing them to reduce hiring. Unemployment returns to the NRU, but at a higher inflation rate. This process repeats, meaning you can have any inflation rate at the NRU — hence the LRPC is vertical.'},
      {question:'Stagflation (high inflation + high unemployment) creates a policy dilemma because:',options:['Expansionary policy would reduce both inflation and unemployment simultaneously, so there is no dilemma','Fiscal and monetary policy tools can address only one problem at a time — fighting inflation (contractionary policy) worsens unemployment, while fighting unemployment (expansionary policy) worsens inflation','The Federal Reserve loses all ability to influence the economy during periods of stagflation','Congress is constitutionally prohibited from passing fiscal policy legislation during periods of stagflation'],correctAnswer:1,explanation:'Stagflation is caused by a supply shock (SRAS shifts left / SRPC shifts right). The economy suffers both rising prices and rising unemployment simultaneously. Expansionary policy (shifting AD right) would fight unemployment but push inflation even higher. Contractionary policy (shifting AD left) would fight inflation but push unemployment even higher. Both traditional tools make one problem worse while helping the other — there\'s no easy solution.'}
    ]}}
  ]
};
