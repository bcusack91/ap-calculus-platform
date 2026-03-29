const systemInteractions = [
  {
    systems: 'Nervous <-> Endocrine',
    whyItMatters:
      'The hypothalamus and pituitary translate neural signals into hormone changes, coordinating stress, growth, and reproductive signaling.',
    mcatHook:
      'Connect negative feedback loops to homeostasis and predict how one axis disruption propagates downstream.',
  },
  {
    systems: 'Respiratory <-> Circulatory',
    whyItMatters:
      'Ventilation and blood flow must stay matched for efficient oxygen loading and carbon dioxide removal.',
    mcatHook:
      'Use this pair to reason through acid-base compensation and V/Q mismatch scenarios in passages.',
  },
  {
    systems: 'Renal <-> Circulatory',
    whyItMatters:
      'Kidneys regulate blood pressure, osmolarity, and pH by adjusting filtration, reabsorption, and hormone release.',
    mcatHook:
      'Expect RAAS and ADH questions that link dehydration, blood pressure, and electrolyte findings.',
  },
  {
    systems: 'Digestive <-> Hepatic',
    whyItMatters:
      'Absorbed nutrients enter portal circulation and are processed by the liver for storage, detoxification, or release.',
    mcatHook:
      'Tie fed/fasted states to glycogen handling, gluconeogenesis, and lipid transport decisions.',
  },
  {
    systems: 'Immune <-> Lymphatic',
    whyItMatters:
      'Lymphatic vessels return interstitial fluid and provide trafficking routes for immune surveillance and activation.',
    mcatHook:
      'Use this relationship to explain edema, infection spread, and antigen presentation contexts.',
  },
  {
    systems: 'Musculoskeletal <-> Nervous',
    whyItMatters:
      'Motor neurons drive contraction and sensory feedback supports reflexes, posture, and coordinated movement.',
    mcatHook:
      'Map action potentials, calcium handling, and ATP demand in neuromuscular passage questions.',
  },
]

export default function MCATOrganSystemChart() {
  return (
    <section className="container pb-12">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Organ System Interaction Chart
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            High-yield system pairs that appear across Bio/Biochem and Chem/Phys passages.
            Learn interactions, not isolated facts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {systemInteractions.map(item => (
            <article
              key={item.systems}
              className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20"
            >
              <h3 className="text-base font-semibold text-emerald-800 dark:text-emerald-300">
                {item.systems}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.whyItMatters}</p>
              <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                <span className="font-semibold">MCAT Hook:</span> {item.mcatHook}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
