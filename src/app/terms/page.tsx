import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Study Mondo",
  description: "Terms of Service for Study Mondo - free math and science study platform",
  alternates: {
    canonical: 'https://www.studymondo.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground">
          <strong>Last Updated:</strong> February 17, 2026
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website (&quot;Service&quot;), you accept and agree to be bound by the terms and provisions of this agreement. 
            If you do not agree to these Terms of Service, please do not use the Service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>
            This Service provides free educational content, study materials, flashcards, and practice problems for Advanced Placement (AP®) level courses 
            in mathematics and science subjects.
          </p>
          <p className="mt-4">
            <strong>Trademark Notice:</strong> AP® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. Educational Content</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Original Content</h3>
          <p>
            All educational materials, explanations, practice problems, and flashcards provided on this Service are original works created by our team 
            of educators and are protected by copyright. They are not official College Board materials.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 No Guarantee of Exam Success</h3>
          <p>
            While we strive to provide accurate and comprehensive study materials aligned with AP® curriculum frameworks, we make no guarantees regarding:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Your performance on official AP® examinations</li>
            <li>The appearance of specific content on actual AP® exams</li>
            <li>Complete coverage of all possible exam topics</li>
            <li>Absolute accuracy of all content (though we make reasonable efforts to ensure quality)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Educational Use Only</h3>
          <p>
            Content on this Service is intended for personal, non-commercial educational use only. You may not:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Republish or redistribute our content on other platforms</li>
            <li>Use our content for commercial purposes without written permission</li>
            <li>Remove copyright notices or attributions</li>
            <li>Claim authorship of our original content</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. The Service &amp; Subscriptions</h2>
          <p>
            The Service offers a free tier and an optional paid <strong>Premium</strong> subscription
            (see the pricing page for current features and prices). The Service does <strong>not</strong>{' '}
            display third-party advertising.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Use the Service for any unlawful purpose</li>
            <li>Use automated systems (bots, scrapers) to access the Service</li>
            <li>Attempt to reverse engineer or extract source code from the Service</li>
            <li>Overload or attempt to disrupt the Service infrastructure</li>
            <li>Upload malicious code or attempt to compromise Service security</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Our Content</h3>
          <p>
            All content on this Service, including but not limited to text, graphics, logos, code, and educational materials, 
            is the property of this Service or its content creators and is protected by copyright laws.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6.2 User License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to access and use the Service and its educational content 
            for personal, non-commercial educational purposes only.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimers and Limitation of Liability</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">7.1 &quot;AS IS&quot; Basis</h3>
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.2 No Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
            OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, 
            USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Your use or inability to use the Service</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of the Service</li>
            <li>Any errors or omissions in content</li>
            <li>Any conduct of third parties on the Service</li>
            <li>Any reliance on content for academic performance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Educational Guidance</h3>
          <p>
            This Service is a supplementary study tool and should not be your sole resource for AP® exam preparation. 
            We recommend using official College Board materials, textbooks, and qualified teachers as primary resources.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without notice. 
            We may also update course content, or add or remove features, without prior notification.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of material changes by 
            updating the &quot;Last Updated&quot; date at the top of this page. Your continued use of the Service after changes 
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Subscriptions, Billing &amp; Refunds</h2>
          <p>
            Parts of the Service are offered as a paid <strong>Premium</strong> subscription. By starting a subscription you agree to the following:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Billing &amp; auto-renewal:</strong> Premium is billed in advance on a recurring basis (e.g., monthly) through our payment processor, Stripe, and <strong>automatically renews</strong> at the then-current price until you cancel.</li>
            <li><strong>Cancellation:</strong> You may cancel at any time from your account&apos;s billing portal. Cancellation stops future renewals; you keep Premium access through the end of the current billing period.</li>
            <li><strong>Refunds:</strong> Except where required by law, payments are non-refundable and partial periods are not pro-rated. We may, at our discretion, offer refunds case-by-case.</li>
            <li><strong>Price changes:</strong> We may change subscription prices; changes apply to future billing periods and we will provide reasonable notice.</li>
            <li><strong>Payment information:</strong> Card details are handled by Stripe; we do not store full card numbers. See our Privacy Policy for how billing data is handled.</li>
            <li><strong>Free tier:</strong> A free tier is available; Premium unlocks additional features as described on the pricing page.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Eligibility, Age &amp; Children</h2>
          <p>
            The Service is used by students across a wide range of ages, including children under 13. By creating an account you confirm the age information you provide is accurate.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Under 13:</strong> Children under 13 receive additional protections. We do not serve advertising to students and do not use children&apos;s data for behavioral advertising or session-replay analytics. We encourage a parent, guardian, or teacher to be involved in a child&apos;s use of the Service, and a parent/guardian may contact us at any time to review or delete a child&apos;s information. See the &quot;Children&apos;s Privacy&quot; section of our Privacy Policy.</li>
            <li><strong>Accounts:</strong> You are responsible for the activity under your account and for keeping your credentials secure.</li>
            <li><strong>Schools &amp; teachers:</strong> Where a teacher creates classrooms or lobbies, the teacher is responsible for obtaining any consents required by their institution.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability,
            for any reason, including but not limited to breach of these Terms of Service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, 
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated 
            to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through the repository at:{" "}
            <a href="https://github.com/bcusack91/ap-calculus-platform" className="text-blue-600 hover:underline">
              https://github.com/bcusack91/ap-calculus-platform
            </a>
          </p>
        </section>

        <section className="mt-8 p-6 bg-slate-50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <strong>Important Notice:</strong> These Terms of Service are provided as a template and should be reviewed by a qualified attorney 
            before deployment to production. Legal requirements may vary by jurisdiction and intended use case.
          </p>
        </section>
      </div>
    </div>
  );
}
