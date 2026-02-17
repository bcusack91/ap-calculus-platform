import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Study Mondo",
  description: "Get in touch with Study Mondo - we'd love to hear your feedback, questions, or suggestions",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950 dark:via-gray-900 dark:to-blue-950 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Have questions, feedback, or found an error? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* Why Contact Us */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                We Value Your Input
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="p-4">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Suggestions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Have ideas for new features or content?
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-3">🐛</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bug Reports</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Found a typo or technical issue?
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-3">❓</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Questions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Need help or have general questions?
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
              <ContactForm />
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-sm mb-2">
                    For technical issues, bug reports, or feature requests, you can open an issue on our GitHub repository:
                  </p>
                  <a 
                    href="https://github.com/bcusack91/ap-calculus-platform" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline text-sm"
                  >
                    github.com/bcusack91/ap-calculus-platform
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm">
                    We typically respond to inquiries within 2-3 business days. Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                    Is this platform really completely free?
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">
                    Yes! All educational content is 100% free with no hidden costs, subscriptions, or paywalls. 
                    The platform is supported by non-intrusive advertisements.
                  </p>
                </details>

                <details className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                    Are you affiliated with the College Board?
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    No, we are not affiliated with, endorsed by, or sponsored by the College Board. 
                    All content is created independently by our team of educators.
                  </p>
                </details>

                <details className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                    Can I use this as my only study resource?
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    While our platform provides comprehensive coverage, we recommend using it as a supplementary 
                    resource alongside official College Board materials, textbooks, and guidance from qualified teachers.
                  </p>
                </details>

                <details className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                    How often is content updated?
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    We regularly review and update content to ensure accuracy and alignment with current AP curriculum frameworks. 
                    User feedback helps us identify areas that need improvement or clarification.
                  </p>
                </details>

                <details className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                    I found an error. How do I report it?
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    Please use the contact form above to report any errors. Include the course name, topic, and specific 
                    details about the error. We appreciate your help in maintaining content accuracy!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
