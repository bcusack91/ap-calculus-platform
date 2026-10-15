export const apushReconstructionPart3Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Reconstruction

**Part 3 of 7 — Freedom in Practice: Freedpeople's Voices and the Land Question**

---

| Section |
|---------|
| 📖 What Did Freedom Mean? |
| Source 1: The Savannah Meeting (January 1865) |
| Source 2: Special Field Order No. 15 (January 1865) |
| Source 3: Jourdon Anderson's Letter (August 1865) |
| Source 4: The Edisto Island Freedmen (October 1865) |
| Building Free Communities |

> 🔑 **Key Concept:** The CED stresses that freedpeople were **actors**, not just recipients of federal policy. They defined freedom for themselves: control over their own labor and families, land to farm, schools, churches and the vote. This part reads their own words. Part 6 works with documents written about them by lawmakers and judges (the Black Codes, Johnson's veto, the 14th Amendment, Douglass, *Plessy*).
      `
    },
    {
      id: 'apushrec3-savannah',
      type: 'text' as const,
      content: `
## 📖 What Did Freedom Mean?

| Goal | What Freedpeople Did |
|---|---|
| **Control of labor** | Refused gang labor under overseers; many women and children withdrew from field work to work for their own households |
| **Land** | Asked for land of their own, often land they had worked as enslaved people |
| **Family** | Searched for relatives sold away, placed "Information Wanted" notices in newspapers, and legalized marriages |
| **Education** | Built schools and paid teachers, often before any government helped |
| **Religion** | Left white-controlled churches to found independent Black congregations |
| **Politics** | Held conventions demanding equal rights and, after 1867, voted and held office |

## Source 1: The Savannah Meeting (January 12, 1865)

After Sherman captured Savannah, Secretary of War Edwin Stanton and General Sherman met with twenty Black ministers and church leaders, most of whom had been enslaved. They chose **Garrison Frazier**, a 67-year-old Baptist minister who had bought his own and his wife's freedom, as their spokesman. A clerk recorded his answers.

Asked what he understood by slavery and freedom, Frazier answered:

> "Slavery is, receiving by irresistible power the work of another man, and not by his consent. The freedom, as I understand it, promised by the proclamation, is taking us from under the yoke of bondage, and placing us where we could reap the fruit of our own labor, take care of ourselves and assist the Government in maintaining our freedom."

Asked how they could best support themselves:

> "The way we can best take care of ourselves is to have land, and turn it and till it by our own labor..."
>
> — Garrison Frazier, Colloquy with Black Ministers, Savannah, Georgia, January 12, 1865

### Close Reading

| Feature | What It Shows |
|---|---|
| Slavery defined as taking another man's work "not by his consent" | Freedom is defined by **control of one's own labor**, not only by the end of ownership |
| "reap the fruit of our own labor" | Echoes the **free-labor ideology** Republicans used (Civil War, Part 2) |
| "to have land" | Land was the practical guarantee of independence; working for wages under former owners was not enough |
| "assist the Government" | Frazier presents freedpeople as **allies** of the Union with claims on it |

Asked whether they would rather live scattered among white people or in colonies by themselves, Frazier said he preferred to live by themselves, "for there is a prejudice against us in the South that will take years to get over."
      `
    },
    {
      id: 'apushrec3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Practice: Garrison Frazier, 1865** 🎯

> "The way we can best take care of ourselves is to have land, and turn it and till it by our own labor..."
>
> — Garrison Frazier, Savannah, January 12, 1865
      `,
      exercise: {
        questions: [
          {
            question: 'Frazier\'s statement most directly reflects which of the following goals of freedpeople after emancipation?',
            options: [
              'Economic independence through ownership of the land they farmed',
              'Higher wages for work on large plantations run by white owners',
              'Resettlement in Liberia under the American Colonization Society',
              'Factory jobs in Northern cities that were short of workers'
            ],
            correctAnswer: 0,
            explanation: 'Frazier asked for land to farm by their own labor, the goal freedpeople pressed most often in 1865. He rejected dependence on former owners, did not ask for emigration, and the Great Migration to Northern factories came decades later.'
          },
          {
            question: 'The meeting in the excerpt most directly led to which of the following?',
            options: [
              'The Homestead Act opening public land in the West to settlers',
              'Sherman\'s order setting aside coastal land for Black families',
              'The Black Codes passed by Southern legislatures in late 1865',
              'The founding of the Freedmen\'s Bureau by Congress in 1865'
            ],
            correctAnswer: 1,
            explanation: 'Four days after the meeting, Sherman issued Special Field Order No. 15, reserving coastal land for freed families. The Homestead Act dated from 1862, the Black Codes were a white Southern reaction, and Congress created the Freedmen\'s Bureau in March for broader reasons.'
          }
        ]
      }
    },
    {
      id: 'apushrec3-sfo',
      type: 'text' as const,
      content: `
## Source 2: Special Field Order No. 15 (January 16, 1865)

Sherman's army was followed by thousands of refugees from slavery. Four days after the Savannah meeting, Sherman issued an order:

> "The islands from Charleston, south, the abandoned rice fields along the rivers for thirty miles back from the sea, and the country bordering the St. Johns river, Florida, are reserved and set apart for the settlement of the negroes now made free by the acts of war and the proclamation of the President of the United States."

Each family was to receive "not more than (40) forty acres of tillable ground." The army later lent some families mules, which is the origin of the phrase **"forty acres and a mule."**

> — General William T. Sherman, Special Field Orders No. 15, January 16, 1865

### HIPP Walkthrough

| Element | Analysis |
|---|---|
| **Historical context** | Sherman's March to the Sea had ended at Savannah; refugees were following the army |
| **Intended audience** | Army officers, freedpeople, and Northern officials |
| **Purpose** | A **military** solution: to settle refugees so they would not slow the army, not a planned land reform |
| **Point of view** | Sherman was no abolitionist; he acted from military necessity after meeting Black leaders |

By June 1865 about **40,000** freedpeople had settled on roughly 400,000 acres. But the order was a wartime measure that gave **possessory** titles, not full ownership. In the fall of 1865 President Johnson ordered most of the land **returned to pardoned owners**, and the army removed many families.
      `
    },
    {
      id: 'apushrec3-anderson',
      type: 'text' as const,
      content: `
## Source 3: Jourdon Anderson's Letter (August 7, 1865)

Jourdon Anderson had been enslaved in Tennessee for 32 years. He received free papers from the Union army in 1864 and moved his family to Dayton, Ohio. His former owner, Colonel P. H. Anderson, wrote asking him to come back. Anderson dictated a reply, which was printed in newspapers that summer.

> "I get twenty-five dollars a month, with victuals and clothing; have a comfortable home for Mandy,—the folks call her Mrs. Anderson,—and the children—Milly, Jane, and Grundy—go to school and are learning well."

He then made a proposal:

> "Mandy says she would be afraid to go back without some proof that you were disposed to treat us justly and kindly; and we have concluded to test your sincerity by asking you to send us our wages for the time we served you.... I served you faithfully for thirty-two years, and Mandy twenty years. At twenty-five dollars a month for me, and two dollars a week for Mandy, our earnings would amount to eleven thousand six hundred and eighty dollars."
>
> — Jourdon Anderson to his former owner, Dayton, Ohio, August 7, 1865

### What the Letter Shows

| Detail | Meaning of Freedom It Reveals |
|---|---|
| Wages, "victuals and clothing" | Paid labor by contract, which slavery had denied |
| "the folks call her Mrs. Anderson" | **Respect and dignity**, including titles white Southerners refused to use for Black adults |
| The children "go to school" | **Education**, which most slave states had barred for enslaved people |
| Demand for back wages | A claim that slavery was **theft of labor**, made with sharp irony |

**Sourcing caution:** Anderson could not write, so he dictated the letter to Valentine Winters, a white Dayton abolitionist, and its polished irony may reflect Winters's hand. Historians have traced Jourdon and Amanda Anderson in later Dayton records, so the people and situation are real even if the wording was shaped by the man who wrote it down. Asking **who produced** a source is a key part of sourcing.
      `
    },
    {
      id: 'apushrec3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Sourcing Point to Its HIPP Element** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sherman issued Field Order No. 15 mainly to settle refugees who were following his army. This is the order\'s ___',
            options: ['point of view', 'historical context', 'intended audience', 'purpose']
          },
          {
            label: 'Anderson\'s letter was printed in Northern newspapers within weeks of being written. This bears most on the letter\'s ___',
            options: ['intended audience', 'purpose', 'historical context', 'point of view']
          },
          {
            label: 'The Savannah meeting took place just after Sherman\'s March to the Sea reached the coast. This is the meeting\'s ___',
            options: ['historical context', 'point of view', 'purpose', 'intended audience']
          }
        ],
        correctAnswers: ['purpose', 'intended audience', 'historical context'],
        hint1: 'What was Sherman trying to accomplish?',
        hint2: 'Who was expected to read a letter that was published in newspapers?',
        hint3: 'This places the meeting in a sequence of military events.',
        explanation: 'Sherman\'s goal of settling refugees is the order\'s purpose. Publication in newspapers shows that the letter was meant for a wide Northern readership as well as its addressee, which is intended audience. The end of the March to the Sea is historical context.'
      }
    },
    {
      id: 'apushrec3-edisto',
      type: 'text' as const,
      content: `
## Source 4: The Edisto Island Freedmen (October 1865)

In October 1865 Freedmen's Bureau head Oliver O. Howard came to Edisto Island, South Carolina, with Johnson's order to return land to its former owners. He asked the freedpeople to accept labor contracts instead. A committee of three, Henry Bram, Ishmael Moultrie and Yates Sampson, answered him in writing:

> "General we want Homestead's; we were promised Homestead's by the government..."
>
> — Committee of Freedmen on Edisto Island to General O. O. Howard, October 20 or 21, 1865

A week later they petitioned President Johnson directly:

> "This is our home, we have made These lands what they are. we were the only true and Loyal people that were found in posession of these Lands."
>
> — Committee of Freedmen on Edisto Island to President Andrew Johnson, October 28, 1865

(The spelling and capitalization are the committee's own.)

### Close Reading

| Feature | What It Shows |
|---|---|
| "we were promised" | Freedpeople understood Sherman's order as a **promise** by the government |
| "we have made These lands what they are" | A claim to land based on **labor**, the same argument Frazier made in Savannah |
| "true and Loyal" | Contrasts loyal freedpeople with pardoned **rebels**, turning Johnson's own talk of loyalty against his policy |

Johnson did not change course. Most Edisto families had to sign contracts with the returning planters or leave. The land question was settled **against** the freedpeople, which is the most important reason sharecropping emerged (Part 4).

## Building Free Communities

Even without land, freedpeople built institutions that outlasted Reconstruction.

| Institution | Examples |
|---|---|
| **Churches** | The African Methodist Episcopal (AME) Church grew rapidly in the South; independent Black Baptist congregations multiplied. Churches served as schools, meeting halls and political centers |
| **Schools** | Freedpeople, the Freedmen's Bureau and Northern groups such as the American Missionary Association opened thousands of schools; Black colleges included Fisk (1866), Howard (1867) and Hampton (1868) |
| **Families** | Couples registered marriages, and parents fought "apprenticeship" laws that bound Black children to former owners |
| **Political conventions** | Black conventions in 1865–1866 demanded equal rights, the vote and access to the courts |

> 🔑 **AP Connection:** These institutions answer the misconception that freedpeople were passive. They also give you strong **CCOT** evidence: churches and colleges founded in the 1860s became organizing centers of the civil rights movement ninety years later.
      `
    },
    {
      id: 'apushrec3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Comparing Sources** 🎯

> "This is our home, we have made These lands what they are."
>
> — Edisto Island freedmen to President Andrew Johnson, October 28, 1865
      `,
      exercise: {
        questions: [
          {
            question: 'The petition in the excerpt was most directly a response to which policy?',
            options: [
              'Congress\'s decision to divide the South into military districts',
              'Johnson\'s order restoring confiscated land to pardoned owners',
              'The Freedmen\'s Bureau plan to resettle freedpeople in the West',
              'A Supreme Court ruling that Sherman\'s order was unconstitutional'
            ],
            correctAnswer: 1,
            explanation: 'Johnson ordered abandoned and confiscated land returned to pardoned planters in 1865, and Howard brought that order to Edisto. Military districts came in 1867, the Bureau had no Western resettlement plan, and no court struck down Sherman\'s order.'
          },
          {
            question: 'The petition and Garrison Frazier\'s statement in Savannah are most similar in that both',
            options: [
              'requested passage to Liberia for any freedpeople who wanted to leave',
              'claimed the vote for Black men as the first step toward real freedom',
              'based freedpeople\'s claim to land on the labor they had performed',
              'urged freedpeople to sign yearly labor contracts with former owners'
            ],
            correctAnswer: 2,
            explanation: 'Frazier asked for land to till "by our own labor," and the Edisto committee said they had made the land what it was. Neither source asked for emigration, neither centered on voting, and the Edisto freedmen were resisting the labor contracts Howard offered.'
          },
          {
            question: 'Which of the following best explains why the hopes in these sources were mostly not met?',
            options: [
              'Freedpeople preferred to work for wages rather than farm their own land',
              'Congress gave the land to railroads before freedpeople could claim it',
              'Most of the land on the coast proved too poor for farming of any kind',
              'Johnson pardoned planters and returned land that had been redistributed'
            ],
            correctAnswer: 3,
            explanation: 'Johnson\'s pardons gave planters back their property, and Congress never passed the land redistribution that Stevens proposed. The sources show that freedpeople wanted land, railroad grants were in the West, and the Sea Islands were valuable cotton land.'
          }
        ]
      }
    }
  ]
}
