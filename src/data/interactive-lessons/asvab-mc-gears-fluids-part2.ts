export const asvabMcGearsFluidsPart2Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf2-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 2 of 7 — Gears and Gear Trains**

### Rule 1: direction alternates

Two meshed gears always turn in **opposite** directions. In a chain of gears in a row, the direction **alternates**:

| Gear in the row | 1st | 2nd | 3rd | 4th | 5th |
|:---|:---:|:---:|:---:|:---:|:---:|
| Direction | clockwise | counter | clockwise | counter | clockwise |

**Shortcut:** odd-numbered gears turn the same way as the first; even-numbered gears turn the opposite way.

An **idler gear** is a gear placed between two others just so they turn the **same** direction. It does **not** change the speed ratio between the first and last gear.

Gears fixed on the **same shaft** turn **together**: same direction, same rpm.

### Rule 2: teeth × rpm is the same for meshed gears

Every tooth that passes on one gear pushes one tooth on the other, so

$$\\text{teeth}_1 \\times \\text{rpm}_1 = \\text{teeth}_2 \\times \\text{rpm}_2$$

- The **smaller** gear turns **faster**; the **larger** gear turns **slower**.
- Speed and turning force trade off: a small gear driving a big gear gives **less speed and more torque** (a low gear for climbing); a big gear driving a small one gives **more speed and less torque**.

**Worked example.** A $10$-tooth gear at $300$ rpm drives a $30$-tooth gear. $10 \\times 300 = 30 \\times \\text{rpm}$, so the big gear turns at $100$ rpm, one-third as fast but with three times the torque.

**Worked example.** In a row of three gears, $A$ ($20$ teeth) drives idler $B$ ($8$ teeth), which drives $C$ ($40$ teeth). Skip the idler for speed: $20 \\times \\text{rpm}_A = 40 \\times \\text{rpm}_C$. If $A$ turns at $60$ rpm, $C$ turns at $30$ rpm, in the **same** direction as $A$.`
    },
    {
      id: 'mgf2-pair-input',
      type: 'input-boxes' as const,
      content: `**Gear speed.** ✍️ Use the figure.

Gear A has $12$ teeth and turns clockwise at $90$ rpm. It drives gear B, which has $36$ teeth.

**1)** How fast does gear B turn, in rpm? (number only)

**2)** How many full turns does gear A make for each one turn of gear B? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 186" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="83.9,84.3 89.9,83.2 90.6,86.0 84.9,88.0 84.9,92.0 84.9,92.0 90.6,94.0 89.9,96.8 83.9,95.7 81.9,99.1 81.9,99.1 85.8,103.8 83.8,105.8 79.1,101.9 75.7,103.9 75.7,103.9 76.8,109.9 74.0,110.6 72.0,104.9 68.0,104.9 68.0,104.9 66.0,110.6 63.2,109.9 64.3,103.9 60.9,101.9 60.9,101.9 56.2,105.8 54.2,103.8 58.1,99.1 56.1,95.7 56.1,95.7 50.1,96.8 49.4,94.0 55.1,92.0 55.1,88.0 55.1,88.0 49.4,86.0 50.1,83.2 56.1,84.3 58.1,80.9 58.1,80.9 54.2,76.2 56.2,74.2 60.9,78.1 64.3,76.1 64.3,76.1 63.2,70.1 66.0,69.4 68.0,75.1 72.0,75.1 72.0,75.1 74.0,69.4 76.8,70.1 75.7,76.1 79.1,78.1 79.1,78.1 83.8,74.2 85.8,76.2 81.9,80.9 83.9,84.3" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="91.0,92.2 85.0,91.3 85.0,88.7 91.0,87.8 91.4,83.3 91.4,83.3 85.7,81.4 86.1,78.8 92.2,79.0 93.4,74.7 93.4,74.7 88.0,71.7 88.9,69.3 94.9,70.5 96.8,66.5 96.8,66.5 92.0,62.6 93.3,60.4 99.0,62.6 101.5,59.0 101.5,59.0 97.5,54.4 99.2,52.4 104.4,55.5 107.5,52.4 107.5,52.4 104.4,47.2 106.4,45.5 111.0,49.5 114.6,47.0 114.6,47.0 112.4,41.3 114.6,40.0 118.5,44.8 122.5,42.9 122.5,42.9 121.3,36.9 123.7,36.0 126.7,41.4 131.0,40.2 131.0,40.2 130.8,34.1 133.4,33.7 135.3,39.4 139.8,39.0 139.8,39.0 140.7,33.0 143.3,33.0 144.2,39.0 148.7,39.4 148.7,39.4 150.6,33.7 153.2,34.1 153.0,40.2 157.3,41.4 157.3,41.4 160.3,36.0 162.7,36.9 161.5,42.9 165.5,44.8 165.5,44.8 169.4,40.0 171.6,41.3 169.4,47.0 173.0,49.5 173.0,49.5 177.6,45.5 179.6,47.2 176.5,52.4 179.6,55.5 179.6,55.5 184.8,52.4 186.5,54.4 182.5,59.0 185.0,62.6 185.0,62.6 190.7,60.4 192.0,62.6 187.2,66.5 189.1,70.5 189.1,70.5 195.1,69.3 196.0,71.7 190.6,74.7 191.8,79.0 191.8,79.0 197.9,78.8 198.3,81.4 192.6,83.3 193.0,87.8 193.0,87.8 199.0,88.7 199.0,91.3 193.0,92.2 192.6,96.7 192.6,96.7 198.3,98.6 197.9,101.2 191.8,101.0 190.6,105.3 190.6,105.3 196.0,108.3 195.1,110.7 189.1,109.5 187.2,113.5 187.2,113.5 192.0,117.4 190.7,119.6 185.0,117.4 182.5,121.0 182.5,121.0 186.5,125.6 184.8,127.6 179.6,124.5 176.5,127.6 176.5,127.6 179.6,132.8 177.6,134.5 173.0,130.5 169.4,133.0 169.4,133.0 171.6,138.7 169.4,140.0 165.5,135.2 161.5,137.1 161.5,137.1 162.7,143.1 160.3,144.0 157.3,138.6 153.0,139.8 153.0,139.8 153.2,145.9 150.6,146.3 148.7,140.6 144.2,141.0 144.2,141.0 143.3,147.0 140.7,147.0 139.8,141.0 135.3,140.6 135.3,140.6 133.4,146.3 130.8,145.9 131.0,139.8 126.7,138.6 126.7,138.6 123.7,144.0 121.3,143.1 122.5,137.1 118.5,135.2 118.5,135.2 114.6,140.0 112.4,138.7 114.6,133.0 111.0,130.5 111.0,130.5 106.4,134.5 104.4,132.8 107.5,127.6 104.4,124.5 104.4,124.5 99.2,127.6 97.5,125.6 101.5,121.0 99.0,117.4 99.0,117.4 93.3,119.6 92.0,117.4 96.8,113.5 94.9,109.5 94.9,109.5 88.9,110.7 88.0,108.3 93.4,105.3 92.2,101.0 92.2,101.0 86.1,101.2 85.7,98.6 91.4,96.7 91.0,92.2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="70.0" cy="90.0" r="3" fill="currentColor"/><circle cx="142.0" cy="90.0" r="3" fill="currentColor"/><g class="fig-accent"><path d="M43.0 82.8 A28 28 0 0 1 84.0 65.8" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="90.1,69.3 81.8,69.6 86.2,61.9" fill="currentColor"/></g><text x="70.0" y="140.0" font-size="12" fill="currentColor" text-anchor="middle">A: 12 teeth</text><text x="70.0" y="156.0" font-size="11" fill="currentColor" text-anchor="middle">(driver, clockwise)</text><text x="142.0" y="176.0" font-size="12" fill="currentColor" text-anchor="middle">B: 36 teeth</text></svg>',
        alt: 'A small gear A with 12 teeth, turning clockwise, meshed with a large gear B with 36 teeth on its right.',
        caption: 'Figure 1. A 12-tooth gear drives a 36-tooth gear.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['30', '3'],
        hint1: '12 × 90 = 36 × rpm of B.',
        hint2: 'B has 3 times as many teeth.',
        hint3: '1080 ÷ 36',
        explanation: '(1) $12 \\times 90 = 1{,}080 = 36 \\times \\text{rpm}_B$, so B turns at $30$ rpm. (2) B has $36 \\div 12 = 3$ times as many teeth, so A turns $3$ times for each turn of B. (B turns counterclockwise.)'
      }
    },
    {
      id: 'mgf2-idler',
      type: 'multiple-choice' as const,
      content: '**Three in a row.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="84.4,84.5 92.7,84.2 93.5,88.6 85.8,91.5 85.8,98.5 85.8,98.5 93.5,101.4 92.7,105.8 84.4,105.5 81.7,112.0 81.7,112.0 87.8,117.5 85.3,121.3 77.8,117.8 72.8,122.8 72.8,122.8 76.3,130.3 72.5,132.8 67.0,126.7 60.5,129.4 60.5,129.4 60.8,137.7 56.4,138.5 53.5,130.8 46.5,130.8 46.5,130.8 43.6,138.5 39.2,137.7 39.5,129.4 33.0,126.7 33.0,126.7 27.5,132.8 23.7,130.3 27.2,122.8 22.2,117.8 22.2,117.8 14.7,121.3 12.2,117.5 18.3,112.0 15.6,105.5 15.6,105.5 7.3,105.8 6.5,101.4 14.2,98.5 14.2,91.5 14.2,91.5 6.5,88.6 7.3,84.2 15.6,84.5 18.3,78.0 18.3,78.0 12.2,72.5 14.7,68.7 22.2,72.2 27.2,67.2 27.2,67.2 23.7,59.7 27.5,57.2 33.0,63.3 39.5,60.6 39.5,60.6 39.2,52.3 43.6,51.5 46.5,59.2 53.5,59.2 53.5,59.2 56.4,51.5 60.8,52.3 60.5,60.6 67.0,63.3 67.0,63.3 72.5,57.2 76.3,59.7 72.8,67.2 77.8,72.2 77.8,72.2 85.3,68.7 87.8,72.5 81.7,78.0 84.4,84.5" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="94.2,98.4 86.1,97.3 86.1,92.7 94.2,91.6 96.0,85.1 96.0,85.1 89.5,80.0 91.8,76.0 99.4,79.2 104.2,74.4 104.2,74.4 101.0,66.8 105.0,64.5 110.1,71.0 116.6,69.2 116.6,69.2 117.7,61.1 122.3,61.1 123.4,69.2 129.9,71.0 129.9,71.0 135.0,64.5 139.0,66.8 135.8,74.4 140.6,79.2 140.6,79.2 148.2,76.0 150.5,80.0 144.0,85.1 145.8,91.6 145.8,91.6 153.9,92.7 153.9,97.3 145.8,98.4 144.0,104.9 144.0,104.9 150.5,110.0 148.2,114.0 140.6,110.8 135.8,115.6 135.8,115.6 139.0,123.2 135.0,125.5 129.9,119.0 123.4,120.8 123.4,120.8 122.3,128.9 117.7,128.9 116.6,120.8 110.1,119.0 110.1,119.0 105.0,125.5 101.0,123.2 104.2,115.6 99.4,110.8 99.4,110.8 91.8,114.0 89.5,110.0 96.0,104.9 94.2,98.4" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="154.1,91.3 146.3,88.8 146.9,84.5 155.1,84.1 157.0,77.0 157.0,77.0 150.1,72.5 151.7,68.5 159.8,70.2 163.4,63.9 163.4,63.9 157.9,57.8 160.6,54.3 167.9,58.1 173.1,52.9 173.1,52.9 169.3,45.6 172.8,42.9 178.9,48.4 185.2,44.8 185.2,44.8 183.5,36.7 187.5,35.1 192.0,42.0 199.1,40.1 199.1,40.1 199.5,31.9 203.8,31.3 206.3,39.1 213.7,39.1 213.7,39.1 216.2,31.3 220.5,31.9 220.9,40.1 228.0,42.0 228.0,42.0 232.5,35.1 236.5,36.7 234.8,44.8 241.1,48.4 241.1,48.4 247.2,42.9 250.7,45.6 246.9,52.9 252.1,58.1 252.1,58.1 259.4,54.3 262.1,57.8 256.6,63.9 260.2,70.2 260.2,70.2 268.3,68.5 269.9,72.5 263.0,77.0 264.9,84.1 264.9,84.1 273.1,84.5 273.7,88.8 265.9,91.3 265.9,98.7 265.9,98.7 273.7,101.2 273.1,105.5 264.9,105.9 263.0,113.0 263.0,113.0 269.9,117.5 268.3,121.5 260.2,119.8 256.6,126.1 256.6,126.1 262.1,132.2 259.4,135.7 252.1,131.9 246.9,137.1 246.9,137.1 250.7,144.4 247.2,147.1 241.1,141.6 234.8,145.2 234.8,145.2 236.5,153.3 232.5,154.9 228.0,148.0 220.9,149.9 220.9,149.9 220.5,158.1 216.2,158.7 213.7,150.9 206.3,150.9 206.3,150.9 203.8,158.7 199.5,158.1 199.1,149.9 192.0,148.0 192.0,148.0 187.5,154.9 183.5,153.3 185.2,145.2 178.9,141.6 178.9,141.6 172.8,147.1 169.3,144.4 173.1,137.1 167.9,131.9 167.9,131.9 160.6,135.7 157.9,132.2 163.4,126.1 159.8,119.8 159.8,119.8 151.7,121.5 150.1,117.5 157.0,113.0 155.1,105.9 155.1,105.9 146.9,105.5 146.3,101.2 154.1,98.7 154.1,91.3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="50.0" cy="95.0" r="3" fill="currentColor"/><circle cx="120.0" cy="95.0" r="3" fill="currentColor"/><circle cx="210.0" cy="95.0" r="3" fill="currentColor"/><g class="fig-accent"><path d="M24.9 88.3 A26 26 0 0 1 63.0 72.5" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="69.1,76.0 60.8,76.4 65.2,68.6" fill="currentColor"/></g><text x="50.0" y="158.0" font-size="12" fill="currentColor" text-anchor="middle">A: 16 teeth</text><text x="50.0" y="174.0" font-size="11" fill="currentColor" text-anchor="middle">clockwise</text><text x="120.0" y="50.0" font-size="12" fill="currentColor" text-anchor="middle">B: 12 teeth</text><text x="210.0" y="180.0" font-size="12" fill="currentColor" text-anchor="middle">C: 24 teeth</text></svg>',
        alt: 'Three gears in a row. Gear A on the left has 16 teeth and turns clockwise. It meshes with gear B in the middle, which has 12 teeth. B meshes with gear C on the right, which has 24 teeth.',
        caption: 'Figure 2. Gear B sits between A and C.'
      },
      exercise: {
        questions: [
          {
            question: 'Gear A ($16$ teeth) turns clockwise at $60$ rpm and drives B ($12$ teeth), which drives C ($24$ teeth). Which way and how fast does C turn?',
            options: ['Clockwise at 40 rpm', 'Counterclockwise at 40 rpm', 'Clockwise at 90 rpm', 'Counterclockwise at 30 rpm'],
            correctAnswer: 0,
            explanation: 'Direction alternates: A clockwise, B counterclockwise, C clockwise. B is an idler, so for speed compare A and C directly: $16 \\times 60 = 24 \\times \\text{rpm}_C$, giving $40$ rpm. (B itself spins at $80$ rpm.)'
          }
        ]
      }
    },
    {
      id: 'mgf2-compound',
      type: 'multiple-choice' as const,
      content: '**Two gears on one shaft.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="106.9,85.5 112.8,83.8 113.6,86.3 107.9,88.4 107.9,91.6 107.9,91.6 113.6,93.7 112.8,96.2 106.9,94.5 105.1,97.1 105.1,97.1 108.4,102.1 106.3,103.7 102.5,98.9 99.6,99.9 99.6,99.9 99.3,105.9 96.7,105.9 96.4,99.9 93.5,98.9 93.5,98.9 89.7,103.7 87.6,102.1 90.9,97.1 89.1,94.5 89.1,94.5 83.2,96.2 82.4,93.7 88.1,91.6 88.1,88.4 88.1,88.4 82.4,86.3 83.2,83.8 89.1,85.5 90.9,82.9 90.9,82.9 87.6,77.9 89.7,76.3 93.5,81.1 96.4,80.1 96.4,80.1 96.7,74.1 99.3,74.1 99.6,80.1 102.5,81.1 102.5,81.1 106.3,76.3 108.4,77.9 105.1,82.9 106.9,85.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="90" r="41.0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><polygon points="162.1,95.0 166.3,98.0 165.0,100.1 160.4,98.0 158.0,100.4 158.0,100.4 160.1,105.0 158.0,106.3 155.0,102.1 151.7,103.0 151.7,103.0 151.2,108.1 148.8,108.1 148.3,103.0 145.0,102.1 145.0,102.1 142.0,106.3 139.9,105.0 142.0,100.4 139.6,98.0 139.6,98.0 135.0,100.1 133.7,98.0 137.9,95.0 137.0,91.7 137.0,91.7 131.9,91.2 131.9,88.8 137.0,88.3 137.9,85.0 137.9,85.0 133.7,82.0 135.0,79.9 139.6,82.0 142.0,79.6 142.0,79.6 139.9,75.0 142.0,73.7 145.0,77.9 148.3,77.0 148.3,77.0 148.8,71.9 151.2,71.9 151.7,77.0 155.0,77.9 155.0,77.9 158.0,73.7 160.1,75.0 158.0,79.6 160.4,82.0 160.4,82.0 165.0,79.9 166.3,82.0 162.1,85.0 163.0,88.3 163.0,88.3 168.1,88.8 168.1,91.2 163.0,91.7 162.1,95.0" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="161.9,104.5 158.1,99.7 159.7,98.1 164.5,101.9 167.4,99.6 167.4,99.6 165.0,94.1 167.0,92.9 170.6,97.8 174.0,96.4 174.0,96.4 173.1,90.4 175.4,89.8 177.6,95.4 181.2,95.0 181.2,95.0 181.9,88.9 184.3,88.9 184.9,95.0 188.6,95.4 188.6,95.4 190.8,89.8 193.1,90.4 192.2,96.4 195.6,97.8 195.6,97.8 199.2,92.9 201.2,94.1 198.8,99.6 201.7,101.9 201.7,101.9 206.4,98.1 208.1,99.7 204.3,104.5 206.5,107.4 206.5,107.4 212.1,105.0 213.3,107.0 208.4,110.6 209.8,114.0 209.8,114.0 215.8,113.1 216.4,115.4 210.8,117.6 211.2,121.2 211.2,121.2 217.3,121.9 217.3,124.3 211.2,124.9 210.8,128.6 210.8,128.6 216.4,130.8 215.8,133.1 209.8,132.2 208.4,135.6 208.4,135.6 213.3,139.2 212.1,141.2 206.5,138.8 204.3,141.7 204.3,141.7 208.1,146.4 206.4,148.1 201.7,144.3 198.8,146.5 198.8,146.5 201.2,152.1 199.2,153.3 195.6,148.4 192.2,149.8 192.2,149.8 193.1,155.8 190.8,156.4 188.6,150.8 184.9,151.2 184.9,151.2 184.3,157.3 181.9,157.3 181.2,151.2 177.6,150.8 177.6,150.8 175.4,156.4 173.1,155.8 174.0,149.8 170.6,148.4 170.6,148.4 167.0,153.3 165.0,152.1 167.4,146.5 164.5,144.3 164.5,144.3 159.7,148.1 158.1,146.4 161.9,141.7 159.6,138.8 159.6,138.8 154.1,141.2 152.9,139.2 157.8,135.6 156.4,132.2 156.4,132.2 150.4,133.1 149.8,130.8 155.4,128.6 155.0,124.9 155.0,124.9 148.9,124.3 148.9,121.9 155.0,121.2 155.4,117.6 155.4,117.6 149.8,115.4 150.4,113.1 156.4,114.0 157.8,110.6 157.8,110.6 152.9,107.0 154.1,105.0 159.6,107.4 161.9,104.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="98.0" cy="90.0" r="3" fill="currentColor"/><circle cx="150.0" cy="90.0" r="3" fill="currentColor"/><circle cx="183.1" cy="123.1" r="3" fill="currentColor"/><text x="98.0" y="124.0" font-size="11" fill="currentColor" text-anchor="middle">A: 10 teeth</text><text x="150.0" y="40.0" font-size="11" fill="currentColor" text-anchor="middle">B: 30 teeth (dashed, behind C)</text><line x1="162" y1="82" x2="208" y2="66" stroke="currentColor" stroke-width="1" class="fig-muted"/><text x="212.0" y="66.0" font-size="11" fill="currentColor" text-anchor="start">C: 12 teeth</text><text x="221.1" y="163.1" font-size="11" fill="currentColor" text-anchor="start">D: 24 teeth</text><text x="10.0" y="16.0" font-size="11" fill="currentColor" text-anchor="start">B and C are fixed together on one shaft.</text></svg>',
        alt: 'A compound gear train. Gear A with 10 teeth meshes with gear B, which has 30 teeth. Gear C, with 12 teeth, is fixed on the same shaft as B, in front of it. Gear C meshes with gear D, which has 24 teeth.',
        caption: 'Figure 3. B and C turn together on one shaft.'
      },
      exercise: {
        questions: [
          {
            question: 'Gear A ($10$ teeth) turns at $90$ rpm and drives gear B ($30$ teeth). Gear C ($12$ teeth) is fixed to B\'s shaft and drives gear D ($24$ teeth). How fast does D turn?',
            options: ['15 rpm', '30 rpm', '45 rpm', '180 rpm'],
            correctAnswer: 0,
            explanation: 'A to B: $10 \\times 90 = 30 \\times \\text{rpm}_B$, so B turns at $30$ rpm. C is on B\'s shaft, so C also turns at $30$ rpm. C to D: $12 \\times 30 = 24 \\times \\text{rpm}_D$, so D turns at $15$ rpm.'
          }
        ]
      }
    },
    {
      id: 'mgf2-types',
      type: 'text' as const,
      content: `## Kinds of gears

| Gear type | What it does | Where you see it |
|:---|:---|:---|
| **Spur gears** | straight teeth on parallel shafts | clocks, simple gearboxes |
| **Bevel gears** | cone-shaped gears that turn the motion through an **angle** (usually $90^\\circ$) | a hand drill, a car's differential |
| **Worm and worm gear** | a screw-like worm turns a gear; a **big speed reduction**, and the gear usually **cannot turn the worm back** | winches, gate openers, guitar tuning pegs |
| **Rack and pinion** | a round gear (pinion) on a straight toothed bar (rack); turns **rotation into straight-line motion** | car steering |
| **Planetary gears** | small "planet" gears around a central "sun" gear inside a ring gear | automatic transmissions |

**Worm gear fact:** with a single-thread worm, one full turn of the worm moves the worm gear by just **one tooth**. A $40$-tooth worm gear needs $40$ turns of the worm to go around once.`
    },
    {
      id: 'mgf2-types-fig',
      type: 'multiple-choice' as const,
      content: '**Name the gear.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="160.0" y1="6.0" x2="160.0" y2="234.0" stroke="currentColor" stroke-width="1" class="fig-muted"/><line x1="6.0" y1="120.0" x2="314.0" y2="120.0" stroke="currentColor" stroke-width="1" class="fig-muted"/><polygon points="62.1,57.0 67.1,56.1 67.8,58.5 63.0,60.3 63.0,63.7 63.0,63.7 67.8,65.5 67.1,67.9 62.1,67.0 60.4,70.0 60.4,70.0 63.6,73.9 61.9,75.6 58.0,72.4 55.0,74.1 55.0,74.1 55.9,79.1 53.5,79.8 51.7,75.0 48.3,75.0 48.3,75.0 46.5,79.8 44.1,79.1 45.0,74.1 42.0,72.4 42.0,72.4 38.1,75.6 36.4,73.9 39.6,70.0 37.9,67.0 37.9,67.0 32.9,67.9 32.2,65.5 37.0,63.7 37.0,60.3 37.0,60.3 32.2,58.5 32.9,56.1 37.9,57.0 39.6,54.0 39.6,54.0 36.4,50.1 38.1,48.4 42.0,51.6 45.0,49.9 45.0,49.9 44.1,44.9 46.5,44.2 48.3,49.0 51.7,49.0 51.7,49.0 53.5,44.2 55.9,44.9 55.0,49.9 58.0,51.6 58.0,51.6 61.9,48.4 63.6,50.1 60.4,54.0 62.1,57.0" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="68.2,63.8 63.1,63.2 63.1,60.8 68.2,60.2 68.9,56.7 68.9,56.7 64.4,54.2 65.4,52.0 70.3,53.4 72.3,50.4 72.3,50.4 69.1,46.4 70.8,44.7 74.8,47.9 77.8,45.9 77.8,45.9 76.4,41.0 78.6,40.0 81.1,44.5 84.6,43.8 84.6,43.8 85.2,38.7 87.6,38.7 88.2,43.8 91.7,44.5 91.7,44.5 94.2,40.0 96.4,41.0 95.0,45.9 98.0,47.9 98.0,47.9 102.0,44.7 103.7,46.4 100.5,50.4 102.5,53.4 102.5,53.4 107.4,52.0 108.4,54.2 103.9,56.7 104.6,60.2 104.6,60.2 109.7,60.8 109.7,63.2 104.6,63.8 103.9,67.3 103.9,67.3 108.4,69.8 107.4,72.0 102.5,70.6 100.5,73.6 100.5,73.6 103.7,77.6 102.0,79.3 98.0,76.1 95.0,78.1 95.0,78.1 96.4,83.0 94.2,84.0 91.7,79.5 88.2,80.2 88.2,80.2 87.6,85.3 85.2,85.3 84.6,80.2 81.1,79.5 81.1,79.5 78.6,84.0 76.4,83.0 77.8,78.1 74.8,76.1 74.8,76.1 70.8,79.3 69.1,77.6 72.3,73.6 70.3,70.6 70.3,70.6 65.4,72.0 64.4,69.8 68.9,67.3 68.2,63.8" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="241.7,61.0 241.2,66.1 238.8,66.1 238.3,61.0 235.0,60.1 235.0,60.1 232.0,64.3 229.9,63.0 232.0,58.4 229.6,56.0 229.6,56.0 225.0,58.1 223.7,56.0 227.9,53.0 227.0,49.7 227.0,49.7 221.9,49.2 221.9,46.8 227.0,46.3 227.9,43.0 227.9,43.0 223.7,40.0 225.0,37.9 229.6,40.0 232.0,37.6 232.0,37.6 229.9,33.0 232.0,31.7 235.0,35.9 238.3,35.0 238.3,35.0 238.8,29.9 241.2,29.9 241.7,35.0 245.0,35.9 245.0,35.9 248.0,31.7 250.1,33.0 248.0,37.6 250.4,40.0 250.4,40.0 255.0,37.9 256.3,40.0 252.1,43.0 253.0,46.3 253.0,46.3 258.1,46.8 258.1,49.2 253.0,49.7 252.1,53.0 252.1,53.0 256.3,56.0 255.0,58.1 250.4,56.0 248.0,58.4 248.0,58.4 250.1,63.0 248.0,64.3 245.0,60.1 241.7,61.0" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="176.0,78 177.6,70 180.1,70 181.7,78 184.2,78 185.8,70 188.3,70 189.9,78 192.4,78 194.0,70 196.5,70 198.1,78 200.6,78 202.2,70 204.7,70 206.3,78 208.8,78 210.4,70 212.9,70 214.5,78 217.0,78 218.6,70 221.1,70 222.7,78 225.2,78 226.8,70 229.3,70 230.9,78 233.4,78 235.0,70 237.5,70 239.1,78 241.6,78 243.2,70 245.7,70 247.3,78 249.8,78 251.4,70 253.9,70 255.5,78 258.0,78 259.6,70 262.1,70 263.7,78 266.2,78 267.8,70 270.3,70 271.9,78 274.4,78 276.0,70 278.5,70 280.1,78 282.6,78 284.2,70 286.7,70 288.3,78 290.8,78 292.4,70 294.9,70 296.5,78 299.0,78 300.6,70 303.1,70 304.7,78 " fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="176.0" y="78.0" width="132.0" height="14.0" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="110.0,150.0 110.0,190.0 80.0,220.0 80.0,120.0" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="110.0,190.0 150.0,190.0 180.0,220.0 80.0,220.0" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="80.0" y1="170.0" x2="24.0" y2="170.0" stroke="currentColor" stroke-width="3"/><line x1="130.0" y1="220.0" x2="130.0" y2="238.0" stroke="currentColor" stroke-width="3"/><rect x="186.0" y="140.0" width="110.0" height="22.0" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="192.0" y1="140.0" x2="198.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="203.0" y1="140.0" x2="209.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="214.0" y1="140.0" x2="220.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="225.0" y1="140.0" x2="231.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="236.0" y1="140.0" x2="242.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="247.0" y1="140.0" x2="253.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="258.0" y1="140.0" x2="264.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="269.0" y1="140.0" x2="275.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="280.0" y1="140.0" x2="286.0" y2="162.0" stroke="currentColor" stroke-width="1.2"/><line x1="176.0" y1="151.0" x2="186.0" y2="151.0" stroke="currentColor" stroke-width="3"/><line x1="296.0" y1="151.0" x2="306.0" y2="151.0" stroke="currentColor" stroke-width="3"/><polygon points="239.3,165.6 239.9,160.5 242.1,160.5 242.7,165.6 246.0,166.1 246.0,166.1 248.2,161.5 250.2,162.2 249.2,167.1 252.2,168.7 252.2,168.7 255.7,164.9 257.4,166.2 255.0,170.7 257.3,173.0 257.3,173.0 261.8,170.6 263.1,172.3 259.3,175.8 260.9,178.8 260.9,178.8 265.8,177.8 266.5,179.8 261.9,182.0 262.4,185.3 262.4,185.3 267.5,185.9 267.5,188.1 262.4,188.7 261.9,192.0 261.9,192.0 266.5,194.2 265.8,196.2 260.9,195.2 259.3,198.2 259.3,198.2 263.1,201.7 261.8,203.4 257.3,201.0 255.0,203.3 255.0,203.3 257.4,207.8 255.7,209.1 252.2,205.3 249.2,206.9 249.2,206.9 250.2,211.8 248.2,212.5 246.0,207.9 242.7,208.4 242.7,208.4 242.1,213.5 239.9,213.5 239.3,208.4 236.0,207.9 236.0,207.9 233.8,212.5 231.8,211.8 232.8,206.9 229.8,205.3 229.8,205.3 226.3,209.1 224.6,207.8 227.0,203.3 224.7,201.0 224.7,201.0 220.2,203.4 218.9,201.7 222.7,198.2 221.1,195.2 221.1,195.2 216.2,196.2 215.5,194.2 220.1,192.0 219.6,188.7 219.6,188.7 214.5,188.1 214.5,185.9 219.6,185.3 220.1,182.0 220.1,182.0 215.5,179.8 216.2,177.8 221.1,178.8 222.7,175.8 222.7,175.8 218.9,172.3 220.2,170.6 224.7,173.0 227.0,170.7 227.0,170.7 224.6,166.2 226.3,164.9 229.8,168.7 232.8,167.1 232.8,167.1 231.8,162.2 233.8,161.5 236.0,166.1 239.3,165.6" fill="none" stroke="currentColor" stroke-width="1.5"/><g font-size="14" font-weight="bold" fill="currentColor"><text x="12" y="22">1</text><text x="170" y="22">2</text><text x="12" y="140">3</text><text x="170" y="138">4</text></g></svg>',
        alt: 'Four gear arrangements. 1: two round toothed gears meshed side by side on parallel shafts. 2: a round toothed gear sitting on top of a long straight bar with teeth along its top. 3: two cone-shaped gears meeting at a right angle, with their shafts at 90 degrees. 4: a threaded, screw-like cylinder lying across the top of a round toothed gear.',
        caption: 'Figure 4. Four kinds of gearing, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) two round gears side by side, (2) a round gear on a straight toothed bar, (3) two cone-shaped gears at a right angle, and (4) a screw-like cylinder across a round gear. Which arrangement turns rotation into straight-line motion?',
            options: ['Arrangement 2', 'Arrangement 1', 'Arrangement 3', 'Arrangement 4'],
            correctAnswer: 0,
            explanation: 'Arrangement 2 is a rack and pinion: as the pinion turns, the rack slides in a straight line, which is how many cars steer. 1 is a pair of spur gears, 3 is bevel gears and 4 is a worm and worm gear.'
          },
          {
            question: 'Using the same figure, which arrangement gives a very large speed reduction and normally cannot be driven backward from the gear side?',
            options: ['Arrangement 4', 'Arrangement 3', 'Arrangement 2', 'Arrangement 1'],
            correctAnswer: 0,
            explanation: 'Arrangement 4 is a worm drive. Each turn of the worm advances the gear only one tooth (or a few), and friction keeps the gear from turning the worm, so a winch with a worm drive holds its load.'
          }
        ]
      }
    },
    {
      id: 'mgf2-dd',
      type: 'dropdown-select' as const,
      content: '**Gear rules.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'In a row of 5 gears, if the first turns clockwise, the fifth turns:',
            options: ['clockwise', 'counterclockwise', 'not at all', 'back and forth'],
            correctAnswer: 0
          },
          {
            label: 'An idler gear between two gears changes:',
            options: ['only the direction', 'only the speed', 'both direction and speed', 'neither'],
            correctAnswer: 0
          },
          {
            label: 'Two gears fixed on the same shaft turn at:',
            options: ['the same rpm', 'rpm set by their teeth', 'opposite directions', 'half each other\'s rpm'],
            correctAnswer: 0
          },
          {
            label: 'A small gear driving a large gear gives the large gear:',
            options: ['less speed, more torque', 'more speed, less torque', 'more speed and torque', 'the same speed'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['clockwise', 'only the direction', 'the same rpm', 'less speed, more torque'],
        hint1: 'Odd-numbered gears match the first.',
        hint2: 'The idler drops out of the teeth × rpm comparison.',
        hint3: 'Same shaft, same motion.',
        explanation: 'The fifth gear is odd-numbered, so it matches the first. An idler reverses the output direction without changing the overall ratio. Gears on one shaft share rpm. A large driven gear turns slower but with more torque.'
      }
    },
    {
      id: 'mgf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Meshed gears turn **opposite** ways; odd-numbered gears in a row match the first
- An **idler** changes direction only; gears on the **same shaft** turn together
- **teeth × rpm** is equal for meshed gears: small gear = fast, large gear = slow but more torque
- **Bevel** = change of angle; **worm** = big reduction, no back-driving; **rack and pinion** = rotation to straight line

> **Up Next:** Part 3 — belts, chains, cams, cranks and springs.`
    }
  ]
};
