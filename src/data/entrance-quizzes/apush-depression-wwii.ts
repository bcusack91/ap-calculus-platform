/**
 * Entrance Quiz — The Great Depression and World War II (1920–1945)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushdep-ent-1a',
    question: 'Which best describes the economic and cultural character of the 1920s?',
    options: [
      "The 1920s saw mass-consumer capitalism (automobile production tripling, ~26 million cars by 1929; radio, mass advertising, installment credit), urban cultural ferment (Harlem Renaissance: Hughes, Hurston, Du Bois; Lost Generation: Hemingway, Fitzgerald; jazz), and Republican economic policy (Mellon tax cuts under Harding/Coolidge/Hoover, Fordney-McCumber Tariff 1922) — but also persistent agricultural depression (farm prices collapsed after WWI), restrictionist immigration (Emergency Quota 1921, National Origins Act 1924), nativism (Sacco & Vanzetti executed 1927; KKK revival peaking ~4 million members 1924), and growing cultural conflict (Scopes Trial 1925, Prohibition 1920–33) — making 'the Roaring Twenties' a partial truth that masked structural fragility",
      'The 1920s saw no mass-consumer capitalism, no Harlem Renaissance, no Lost Generation, no Mellon tax cuts, no agricultural depression, no restrictionist immigration, no nativism, and no cultural conflict of any kind during the entire period in any region',
      'The 1920s saw no Republican economic policy and no Mellon tax cuts of any kind during the entire period from 1921 through 1929 in any region of the United States during the period in any region of the country',
      'The 1920s were a period of uniform prosperity with no agricultural depression, no nativism, no restrictionist immigration, no Scopes Trial, no Prohibition, and no cultural conflict of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: '1920s: mass-consumer capitalism (autos, radio, advertising, credit) + urban culture (Harlem Renaissance, Lost Generation, jazz) + Republican policy (Mellon cuts, Fordney-McCumber 1922) BUT agricultural depression + restrictionist immigration (1921, 1924) + nativism (Sacco-Vanzetti 1927, KKK ~4M 1924) + cultural conflict (Scopes 1925, Prohibition 1920-33).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushdep-ent-1b',
    question: "Which best describes the basic shape of FDR's New Deal (1933–1939)?",
    options: [
      "FDR's New Deal proceeded in two phases: the First New Deal (1933, 'Hundred Days') focused on recovery and relief through banking stabilization (Emergency Banking Act, Bank Holiday, Glass-Steagall/FDIC), agricultural recovery (AAA), industrial recovery (NIRA), conservation (CCC, TVA), and homeowner relief (HOLC); the Second New Deal (1935+) focused on long-term economic security and labor rights through the Wagner Act (NLRB), Social Security Act, WPA, and Rural Electrification Administration; the First New Deal's centerpieces were struck down (NIRA in *Schechter* 1935, AAA in *Butler* 1936) but the Second New Deal survived the constitutional crisis after the 1937 'switch in time' (*West Coast Hotel*, *NLRB v. Jones & Laughlin*, *Helvering v. Davis*)",
      "FDR's New Deal had no two-phase structure with no First New Deal, no Second New Deal, no Hundred Days, no Wagner Act, no Social Security, no Schechter, no Butler, and no 'switch in time' of any kind during the entire period in any region",
      "FDR's New Deal occurred in 1860 under Abraham Lincoln with no Emergency Banking Act, no Glass-Steagall, no Wagner Act, no Social Security, no Schechter, and no 1937 'switch in time' of any kind during the entire period in any region",
      "There was no FDR New Deal of any kind during the entire period from 1933 through 1939 in any region of the United States with no First New Deal, no Second New Deal, no banking reform, no agricultural reform, no labor rights, no Social Security, and no constitutional crisis of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: "New Deal two phases: First (1933 Hundred Days) recovery/relief = Emergency Banking + Glass-Steagall/FDIC + AAA + NIRA + CCC + TVA + HOLC; Second (1935+) security/labor = Wagner/NLRB + Social Security + WPA + REA. First struck down (Schechter NIRA 1935, Butler AAA 1936); Second survives post-1937 switch (West Coast Hotel, NLRB v. Jones & Laughlin, Helvering v. Davis).",
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushdep-ent-2a',
    question: 'Which best describes the financial mechanisms of the New Deal regulatory state?',
    options: [
      "The New Deal created the modern U.S. financial regulatory architecture: the Emergency Banking Act (March 9, 1933) closed insolvent banks and reopened solvent ones (restoring confidence and ending bank runs); the Glass-Steagall Banking Act (June 16, 1933) separated commercial from investment banking and created the Federal Deposit Insurance Corporation (FDIC) insuring deposits up to initially $2,500; the Securities Act (1933) required disclosure for new securities issues; the Securities Exchange Act (1934) created the Securities and Exchange Commission (SEC) regulating securities markets and prohibiting insider trading and market manipulation; the Banking Act of 1935 strengthened Federal Reserve control over monetary policy through the FOMC — establishing the regulatory framework that would govern U.S. finance for the rest of the 20th century",
      'The New Deal created no financial regulatory architecture of any kind with no Emergency Banking Act, no Glass-Steagall, no FDIC, no Securities Act, no SEC, and no Banking Act of 1935 of any kind during the entire period in any region of the United States during the period',
      'The New Deal financial mechanisms were limited to repealing Hamilton\'s Bank of the United States with no Emergency Banking Act, no Glass-Steagall, no FDIC, no SEC, and no Banking Act of 1935 of any kind during the entire period in any region of the United States during the period',
      "There was no New Deal financial regulatory architecture of any kind during the entire period from 1933 through 1939 in any region of the United States with no Emergency Banking Act, no Glass-Steagall, no FDIC, no Securities Act, no SEC, and no Banking Act of 1935 of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'New Deal financial architecture: Emergency Banking Act (March 9 1933) + Glass-Steagall (June 16 1933, separates commercial/investment banking + creates FDIC) + Securities Act 1933 (disclosure) + Securities Exchange Act 1934 (creates SEC; insider trading) + Banking Act 1935 (strengthens Fed/FOMC) → governs US finance for rest of 20thC.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushdep-ent-2b',
    question: "Which best describes the process of U.S. mobilization for World War II (1939–1945)?",
    options: [
      "U.S. mobilization proceeded in stages: pre-entry steps included Cash-and-Carry (1939, Allies pay cash and transport themselves), Destroyers-for-Bases (Sept 1940, 50 destroyers to UK for Caribbean basing rights), the Selective Service Act (Sept 1940, first peacetime draft), Lend-Lease (March 1941, ~$50 billion in aid), and the Atlantic Charter (Aug 1941, Anglo-American war aims); after Pearl Harbor (Dec 7, 1941) home-front mobilization included the War Production Board converting industry to military output (~12 million in armed forces; ~$300 billion in war production); War Labor Board wage controls; Office of Price Administration price controls and rationing; massive war-bond drives; women in war industries ('Rosie the Riveter') and military auxiliaries (WAACs/WAVES); the Bracero Program (1942–64) for Mexican agricultural labor; and the Manhattan Project (~$2 billion atomic-weapons program)",
      'U.S. mobilization for WWII had no pre-entry steps and no home-front mobilization of any kind with no Cash-and-Carry, no Destroyers-for-Bases, no Selective Service, no Lend-Lease, no Atlantic Charter, no Pearl Harbor, no War Production Board, no Bracero Program, and no Manhattan Project of any kind during the entire period in any region',
      "U.S. mobilization for WWII began only after Pearl Harbor (Dec 1941) with no pre-entry steps of any kind during the entire period from 1939 through 1941 in any region of the United States during the period",
      "There was no U.S. mobilization for WWII of any kind during the entire period from 1939 through 1945 in any region of the United States with no pre-entry steps, no home-front mobilization, no Manhattan Project, and no atomic-weapons program of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'WWII mobilization: pre-entry (Cash-and-Carry 1939 + Destroyers-for-Bases Sept 1940 + Selective Service Sept 1940 + Lend-Lease March 1941 + Atlantic Charter Aug 1941) → Pearl Harbor (Dec 7 1941) → home-front (War Production Board ~$300B output + War Labor Board + OPA + war bonds + Rosie + WAACs/WAVES + Bracero 1942-64 + Manhattan Project ~$2B).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushdep-ent-3a',
    question: 'Which best illustrates the racial limits of the New Deal?',
    options: [
      "The New Deal was a racially-stratified social-democratic settlement: the Social Security Act (1935) excluded farmworkers and domestic workers (concentrating Black exclusion in the South where ~75% of Black workers were so employed); the Federal Housing Administration (FHA, 1934) institutionalized residential redlining through its underwriting maps that designated Black and integrated neighborhoods as 'hazardous' — locking in racial segregation in U.S. housing finance for generations and producing the postwar racial wealth gap; AAA acreage-reduction payments often went to white landlords rather than Black tenants and sharecroppers (accelerating Black displacement from Southern agriculture); CCC camps were segregated; and Southern Democratic congressional power blocked anti-lynching legislation throughout the period (Costigan-Wagner 1934 filibustered)",
      'The New Deal had no racial limits of any kind with no Social Security exclusions, no FHA redlining, no AAA white-landlord payments, no segregated CCC, and no Southern Democratic blocking of anti-lynching of any kind during the entire period in any region',
      'The New Deal completely eliminated racial inequality in American economic and housing life with no Social Security exclusions, no FHA redlining, and no need for a Civil Rights Movement of any kind during the entire period in any region of the United States during the period',
      'The New Deal had no programs of any kind during the entire period from 1933 through 1939 in any region of the United States with no Social Security, no FHA, no AAA, no CCC, and no Costigan-Wagner anti-lynching bill of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: 'New Deal racial limits: Soc Sec excluded farmworkers/domestics (~75% of Black workers) + FHA redlining (housing segregation + postwar racial wealth gap) + AAA payments → white landlords (Black sharecropper displacement) + segregated CCC + Southern Dem block on anti-lynching (Costigan-Wagner 1934 filibustered).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushdep-ent-3b',
    question: 'Which best illustrates the WWII home-front transformation of women and African Americans?',
    options: [
      "WWII produced major (though incomplete) shifts: ~6 million women entered the paid workforce ('Rosie the Riveter'), with ~350,000 in military auxiliaries (WAACs Army, WAVES Navy, SPARS Coast Guard, WASPs flying); A. Philip Randolph's threatened March on Washington (1941) forced FDR's Executive Order 8802 (June 1941) banning racial discrimination in defense industries and creating the Fair Employment Practices Committee (FEPC); the Second Great Migration (1940–70) moved ~5 million African Americans from the rural South to Northern and Western cities for war-industry jobs; the 'Double V Campaign' (Pittsburgh Courier, 1942) demanded victory abroad against fascism and victory at home against racism; and African Americans served in segregated units (Tuskegee Airmen, 761st 'Black Panthers' tank battalion) — laying groundwork for the postwar Civil Rights Movement",
      "WWII produced no shifts for women or African Americans of any kind with no Rosie the Riveter, no WAACs/WAVES, no Randolph, no EO 8802, no FEPC, no Second Great Migration, no Double V Campaign, and no Tuskegee Airmen of any kind during the entire period in any region",
      'WWII shifts for women and African Americans were limited to a single program with no Rosie the Riveter, no WAACs/WAVES, no Randolph, no EO 8802, no FEPC, no Second Great Migration, no Double V Campaign, and no Tuskegee Airmen of any kind during the entire period in any region',
      "There were no WWII home-front shifts for women or African Americans of any kind during the entire period from 1941 through 1945 in any region of the United States with no Rosie the Riveter, no Randolph, no EO 8802, no FEPC, no Second Great Migration, and no Double V Campaign of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'WWII home-front: ~6M women in workforce (Rosie) + ~350K military auxiliaries (WAACs/WAVES/SPARS/WASPs) + Randolph threatens March 1941 → EO 8802 (June 1941) bans defense-industry discrim + FEPC + Second Great Migration ~5M (1940-70) + Double V (Pittsburgh Courier 1942) + segregated units (Tuskegee Airmen, 761st) → groundwork for CRM.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushdep-ent-4a',
    question: 'Which best describes the constitutional connection between the New Deal and the modern federal regulatory state?',
    options: [
      "The New Deal triggered a constitutional crisis (1935–1937) over the scope of federal power: the conservative-majority Hughes Court struck down NIRA (*Schechter* May 1935, unanimous, on nondelegation and narrow interstate-commerce grounds) and AAA (*United States v. Butler* Jan 1936, on spending-clause grounds); FDR responded with his court-packing plan (Judicial Procedures Reform Bill, Feb 5, 1937) after his 1936 landslide; the bill failed in Congress, but Justice Owen Roberts shifted vote in *West Coast Hotel v. Parrish* (March 29, 1937) — the famous 'switch in time that saved nine' — and the Court upheld the Wagner Act in *NLRB v. Jones & Laughlin Steel* (April 1937) and Social Security in *Helvering v. Davis* (May 1937), establishing the expansive interstate-commerce and spending-power doctrines that would govern federal regulation until *United States v. Lopez* (1995)",
      'The New Deal had no constitutional crisis and no relationship to the modern federal regulatory state of any kind with no Schechter, no Butler, no court-packing plan, no West Coast Hotel switch, no NLRB v. Jones & Laughlin, and no Helvering v. Davis of any kind during the entire period in any region',
      "The New Deal occurred in 1860 under Abraham Lincoln with no constitutional crisis, no Schechter, no Butler, no court-packing plan, no West Coast Hotel switch, no NLRB v. Jones & Laughlin, and no Helvering v. Davis of any kind during the entire period in any region of the United States",
      "There was no New Deal of any kind during the entire period from 1933 through 1939 in any region of the United States with no Schechter, no Butler, no court-packing plan, no West Coast Hotel switch, no NLRB v. Jones & Laughlin, and no Helvering v. Davis of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'New Deal constitutional crisis (1935-37): Schechter (May 1935 NIRA) + Butler (Jan 1936 AAA) → FDR court-packing plan (Feb 5 1937) → bill fails BUT Roberts switches in West Coast Hotel (March 29 1937, "switch in time that saved nine") → Court upholds Wagner in NLRB v. Jones & Laughlin (April 1937) + Soc Sec in Helvering v. Davis (May 1937) → expansive commerce + spending doctrines until US v. Lopez 1995.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushdep-ent-4b',
    question: 'Which best describes the connection between WWII diplomacy (Yalta-Potsdam) and the emerging Cold War?',
    options: [
      "WWII Allied diplomacy laid the groundwork for the Cold War: at Tehran (Nov-Dec 1943), Yalta (Feb 1945, FDR/Churchill/Stalin), and Potsdam (July-Aug 1945, Truman/Stalin/Churchill→Attlee), the Big Three coordinated wartime strategy and divided postwar Europe into occupation zones (Germany into four zones; Berlin into four sectors); Stalin agreed to enter the Pacific war within three months of Germany's surrender (delivered Aug 8-9, 1945) in exchange for territorial concessions in East Asia; tensions emerged over the political fate of Eastern Europe (Stalin's commitment to 'free elections' in Poland was largely ignored — Soviet-backed Lublin government installed); the U.S. atomic monopoly (Trinity test July 16, 1945; Hiroshima Aug 6; Nagasaki Aug 9) introduced a new strategic dimension; by 1947 the wartime alliance had collapsed into the Truman Doctrine (March 1947) and the Marshall Plan (June 1947) — the formal beginning of the Cold War",
      'WWII Allied diplomacy had no relationship to the Cold War of any kind with no Tehran, no Yalta, no Potsdam, no Big Three, no Eastern Europe occupation, no atomic monopoly, no Truman Doctrine, and no Marshall Plan of any kind during the entire period in any region',
      'WWII Allied diplomacy was limited to a single conference with no Tehran, no Yalta, no Potsdam, no Big Three, and no occupation zones of any kind during the entire period from 1943 through 1947 in any region of the United States during the period',
      "There was no WWII Allied diplomacy of any kind during the entire period from 1943 through 1947 in any region of the United States with no Tehran, no Yalta, no Potsdam, no Big Three, no Eastern Europe occupation, and no Cold War origins of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'WWII diplomacy → Cold War: Tehran (Nov-Dec 1943) + Yalta (Feb 1945) + Potsdam (Jul-Aug 1945) → divides Europe (4 occupation zones; Berlin) + Stalin enters Pacific war (Aug 8-9 1945 for E Asia concessions) + Eastern Europe tension (Polish "free elections" → Lublin gov) + US atomic monopoly (Trinity July 16 + Hiroshima Aug 6 + Nagasaki Aug 9) → Truman Doctrine (March 1947) + Marshall Plan (June 1947) = formal Cold War start.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushdep-ent-5a',
    question: 'Which best describes change over time in U.S. economic policy from 1929 to 1945?',
    options: [
      "U.S. economic policy underwent a fundamental transformation: Hoover (1929–33) responded to the Great Depression with limited federal action — voluntary business cooperation, the Reconstruction Finance Corporation (RFC, Jan 1932) for emergency loans to banks and railroads, and the disastrous Smoot-Hawley Tariff (1930) that worsened global depression — rooted in laissez-faire and balanced-budget orthodoxy; FDR's New Deal (1933–39) rejected this orthodoxy with massive federal intervention through banking regulation, agricultural and industrial recovery programs, public-works spending, labor rights, and the welfare state; WWII mobilization (1940–45) completed the transformation with deficit-financed military spending pulling the economy out of depression (unemployment fell from 14% in 1940 to 1.2% in 1944), wage and price controls, the War Production Board converting industry to military output, and the Bretton Woods system (1944) establishing U.S. dollar dominance",
      'U.S. economic policy did not change from 1929 to 1945 with no Hoover voluntarism, no RFC, no Smoot-Hawley, no New Deal intervention, no WWII deficit spending, and no Bretton Woods of any kind during the entire period in any region',
      'U.S. economic policy moved from active federal intervention (Hoover) to laissez-faire (FDR) with no New Deal, no Wagner Act, no Social Security, no WWII mobilization, and no Bretton Woods of any kind during the entire period in any region of the United States during the period',
      "There was no U.S. economic policy of any kind during the entire period from 1929 through 1945 in any region of the United States with no Hoover, no FDR, no New Deal, no WWII mobilization, and no Bretton Woods of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Economic policy 1929-45: Hoover (1929-33) limited federal action (voluntarism + RFC Jan 1932 + Smoot-Hawley 1930) → FDR New Deal (1933-39) massive federal intervention (banking + agricultural + industrial + public works + labor + welfare) → WWII mobilization (1940-45) deficit-financed military spending (unemployment 14% → 1.2%) + wage/price controls + War Production Board + Bretton Woods 1944 (US$ dominance).',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushdep-ent-5b',
    question: 'Which best describes change over time in the U.S. position in the world from 1920 to 1945?',
    options: [
      "The U.S. position in the world transformed from interwar isolation to postwar superpower: in the 1920s the U.S. rejected League of Nations membership (Senate rejection 1919-20), pursued naval-arms-limitation diplomacy (Washington Naval Conference 1921-22) and the Kellogg-Briand Pact (1928), and maintained restrictionist immigration; the 1930s deepened isolation with the Neutrality Acts (1935, 1936, 1937, 1939); FDR moved gradually toward the Allies after 1939 (Cash-and-Carry, Destroyers-for-Bases, Lend-Lease, Atlantic Charter); Pearl Harbor (Dec 7, 1941) ended isolation; by 1945 the U.S. had emerged from WWII as the world's preeminent economic (~50% of world GDP) and military (atomic monopoly until 1949) power, the leader of the United Nations (chartered June 1945), the architect of the Bretton Woods system (1944), and the principal western antagonist in the emerging Cold War with the Soviet Union",
      "The U.S. position in the world did not change from 1920 to 1945 with no League rejection, no Washington Naval Conference, no Kellogg-Briand, no Neutrality Acts, no Lend-Lease, no Pearl Harbor, no atomic monopoly, no UN charter, and no Bretton Woods of any kind during the entire period in any region",
      'The U.S. position in the world moved from postwar superpower (1920) to interwar isolation (1945) with no League rejection, no Neutrality Acts, no Pearl Harbor, no atomic monopoly, no UN charter, and no Bretton Woods of any kind during the entire period in any region of the United States during the period',
      "There was no change in the U.S. position in the world from 1920 to 1945 of any kind during the entire period in any region of the United States with no League rejection, no Neutrality Acts, no Pearl Harbor, no atomic monopoly, no UN charter, and no Bretton Woods of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: "US world position 1920-45: 1920s isolation (League rejection 1919-20 + Washington Naval Conf 1921-22 + Kellogg-Briand 1928 + restrictionist immigration) → 1930s deeper (Neutrality Acts 1935/36/37/39) → gradual move toward Allies post-1939 (Cash-and-Carry + Destroyers-for-Bases + Lend-Lease + Atlantic Charter) → Pearl Harbor (Dec 7 1941) ends isolation → 1945 superpower (~50% world GDP + atomic monopoly until 1949 + UN June 1945 + Bretton Woods 1944 + Cold War).",
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushdep-ent-6a',
    question: "Which historical context is most essential for sourcing FDR's First Inaugural Address (March 4, 1933)?",
    options: [
      "The address was delivered on March 4, 1933, three and a half years after the October 1929 stock market crash, at the very bottom of the Great Depression — unemployment ~25%, the banking system collapsed (~9,000 bank failures since 1929 with most state banking systems closed by inauguration day), industrial production halved, and approximately one-third of farms in foreclosure; intended audience is the frightened American public, the banking system (FDR closed all U.S. banks the next day in the Bank Holiday and passed the Emergency Banking Act on March 9), and the Republican opposition; purpose is to restore public confidence and prepare the political ground for the Hundred Days legislative program (March 9–June 16, 1933); POV is incoming Democratic president articulating the activist federal vision that would define 20th-century American liberalism",
      'The address was delivered in 1789 with no relationship to the Depression, the banking crisis, or the Hundred Days of any kind during the entire period in any region of the United States during the period',
      'The address was delivered in 1965 with no relationship to the Depression, the banking crisis, or the Hundred Days of any kind during the entire period in any region of the United States during the period',
      "There was no FDR First Inaugural Address of any kind during the entire period from 1929 through 1945 in any region of the United States with no Depression, no banking crisis, no Bank Holiday, and no Hundred Days of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'FDR 1st Inaugural (March 4 1933) context: 25% unemployment + ~9,000 bank failures (most state banking systems closed by inauguration day) + industrial production halved + 1/3 farms in foreclosure → addressed to public + banks + GOP → restore confidence → next-day Bank Holiday + March 9 Emergency Banking Act → Hundred Days (March 9-June 16, 1933).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushdep-ent-6b',
    question: 'Which best describes the purpose of Executive Order 9066 (Feb 19, 1942)?',
    options: [
      "EO 9066, signed by FDR on February 19, 1942 (ten weeks after Pearl Harbor, December 7, 1941), authorized the Secretary of War to designate 'military areas' from which 'any or all persons may be excluded'; under this authority approximately 120,000 Japanese Americans (two-thirds U.S. citizens) were forcibly removed from the West Coast to inland concentration camps (Manzanar, Tule Lake, etc.); the order was driven by perceived military necessity and significant West Coast political and economic pressure (including racist agitation and competing-grower interests); was upheld in *Hirabayashi v. United States* (1943) and *Korematsu v. United States* (December 1944, 6-3, Justice Black for the majority, dissents from Murphy/Roberts/Jackson); the Civil Liberties Act of 1988 (signed by President Reagan) issued a formal apology and $20,000 reparations to surviving internees; *Korematsu* was repudiated in dicta in *Trump v. Hawaii* (2018)",
      'EO 9066 protected Japanese Americans from internment during the entire period from 1942 through 1945 in any region of the United States with no forced removal, no concentration camps, no Korematsu, and no Civil Liberties Act of 1988 of any kind during the entire period in any region',
      "There was no EO 9066, no Korematsu, and no Civil Liberties Act of 1988 of any kind during the entire period from 1942 through 1988 in any region of the United States with no Japanese internment of any kind during the entire period",
      'EO 9066 was signed in 1820 by Andrew Jackson with no relationship to Pearl Harbor, the West Coast, Japanese internment, Korematsu, or the Civil Liberties Act of 1988 of any kind during the entire period in any region of the United States during the period'
    ],
    correctIndex: 0,
    explanation: 'EO 9066 (Feb 19 1942, 10 weeks after Pearl Harbor): authorizes military areas excluding "any or all persons" → ~120K Japanese Americans interned (2/3 US citizens; Manzanar, Tule Lake) → upheld in Hirabayashi (1943) + Korematsu (Dec 1944, 6-3, Black; dissents Murphy/Roberts/Jackson) → Civil Liberties Act 1988 (Reagan): apology + $20K → Korematsu repudiated in dicta in Trump v. Hawaii (2018).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushdep-ent-7a',
    question: "DBQ prompt: 'Evaluate the extent to which the New Deal (1933–1939) transformed the relationship between the federal government and the American people.' Which thesis is most defensible?",
    options: [
      "The New Deal (1933–1939) fundamentally transformed the federal-citizen relationship by establishing federal responsibility for economic security (Social Security Act 1935), labor rights (Wagner Act 1935 + NLRB), banking stability (FDIC 1933, Glass-Steagall 1933), securities regulation (SEC 1934), and minimum labor standards (FLSA 1938) — but the transformation was selective by race, region, and sector (farmworkers and domestic workers excluded from Social Security; FHA redlining; AAA payments often to white landlords; segregated CCC; Southern Democratic veto on anti-lynching) and contested constitutionally until the 1937 'switch in time' reset the Court's relationship to the activist federal regulatory state",
      'The New Deal had no impact on the federal-citizen relationship of any kind with no Social Security, no Wagner Act, no FDIC, no Glass-Steagall, no SEC, no FLSA, and no constitutional contestation of any kind during the entire period in any region',
      'The New Deal completely transformed the federal-citizen relationship without any racial, regional, or sectoral selectivity and without any constitutional contestation of any kind during the entire period from 1933 through 1939 in any region of the United States',
      "There was no New Deal of any kind during the entire period from 1933 through 1939 in any region of the United States with no Social Security, no Wagner Act, no FDIC, no Glass-Steagall, no SEC, no FLSA, no court-packing plan, and no 'switch in time' of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: "Defensible thesis: federal responsibility transformations (Social Security + Wagner/NLRB + FDIC + Glass-Steagall + SEC + FLSA) AND racial/regional/sectoral selectivity (Soc Sec exclusions + FHA redlining + AAA → white landlords + segregated CCC + Southern Dem anti-lynching veto) AND constitutional contestation (until 1937 switch). Earns thesis + complexity.",
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushdep-ent-7b',
    question: 'Which best demonstrates AP comparison skill across the Great Depression presidencies (Hoover vs. FDR)?',
    options: [
      "Hoover (R, 1929–33) and FDR (D, 1933–45) both faced the Great Depression but responded with fundamentally different philosophies: Hoover, rooted in Progressive-engineering and laissez-faire orthodoxy, pursued voluntary business cooperation, modest federal aid through the Reconstruction Finance Corporation (Jan 1932), and a balanced budget — and signed the disastrous Smoot-Hawley Tariff (1930) that worsened global depression; FDR rejected this orthodoxy with the activist New Deal — banking regulation (FDIC, Glass-Steagall), agricultural and industrial recovery (AAA, NIRA), public works (CCC, WPA, TVA), labor rights (Wagner Act), and the welfare state (Social Security) — establishing the modern federal government's responsibility for economic security; both, however, used executive power expansively, both struggled with constitutional limits (Smoot-Hawley vs. Schechter/Butler), and both presided over genuine but partial recoveries (Hoover's voluntarism failed; FDR's New Deal stabilized but did not end the Depression — only WWII spending did)",
      "Hoover and FDR had no shared themes and no meaningful differences of any kind during the entire period from 1929 through 1945 in any region of the United States with no Depression response of any kind during the period in any region of the country",
      "Neither Hoover nor FDR served as president during the entire period from 1929 through 1945 in any region of the United States with no Depression response, no RFC, no Smoot-Hawley, no New Deal, and no welfare state of any kind during the entire period in any region",
      "Hoover and FDR were entirely identical in their approach to the Great Depression with no meaningful differences of any kind during the entire period from 1929 through 1945 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'AP comparison Hoover vs. FDR: shared theme (Great Depression + expansive executive + constitutional struggles + partial recoveries) AND specific differences (Hoover: voluntarism + RFC Jan 1932 + Smoot-Hawley 1930 + balanced budget; FDR: activist New Deal — FDIC + Glass-Steagall + AAA + NIRA + CCC + WPA + TVA + Wagner + Social Security; only WWII spending ended Depression).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
