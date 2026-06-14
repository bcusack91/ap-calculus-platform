import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Study Mondo",
  description: "Privacy Policy for Study Mondo - free math and science study platform",
  alternates: {
    canonical: 'https://www.studymondo.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground">
          <strong>Last Updated:</strong> February 17, 2026
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. 
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          <p className="mt-4">
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes 
            by updating the &quot;Last Updated&quot; date of this Privacy Policy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Information You Provide</h3>
          <p>
            Our Service offers optional user registration and account creation. When you create an account, we collect:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Account Information:</strong> Name, email address, and password (hashed and securely stored)</li>
            <li><strong>OAuth Data:</strong> If you sign in with Google, we receive your name, email, and profile picture from Google</li>
            <li><strong>Learning Progress:</strong> Topic completion, quiz scores, flashcard review data, and competitive match history</li>
            <li><strong>Profile Data:</strong> Avatar selections and display preferences</li>
          </ul>
          <p className="mt-4">
            We may also collect information you voluntarily provide through contact forms or feedback mechanisms.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <p>
            When you visit our Service, we and our third-party partners may automatically collect certain information about your device and usage, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Device Information:</strong> Browser type, operating system, device type (mobile/desktop)</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, navigation paths</li>
            <li><strong>Technical Data:</strong> IP address, referring URLs, timestamps</li>
            <li><strong>Performance Data:</strong> Page load times, error messages</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Cookies and Tracking Technologies</h3>
          <p>
            We and our third-party advertising partners use cookies, web beacons, and similar tracking technologies to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our Service</li>
            <li>Deliver personalized advertisements</li>
            <li>Measure advertising effectiveness</li>
            <li>Improve Service performance and user experience</li>
          </ul>
          <p className="mt-4">
            Types of cookies we use:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Essential Cookies:</strong> Required for basic Service functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand user behavior and improve the Service</li>
            <li><strong>Advertising Cookies:</strong> Used by third-party advertisers to deliver relevant ads</li>
            <li><strong>Preference Cookies:</strong> Remember your settings (e.g., dark mode, language)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. Third-Party Advertising and Analytics</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Advertising Partners</h3>
          <p>
            We use third-party advertising networks to display advertisements on our Service. These advertising partners may use cookies 
            and similar technologies to collect information about your visits to this and other websites to provide relevant advertisements 
            about goods and services that may interest you.
          </p>
          <p className="mt-4">
            Common advertising partners may include (but are not limited to):
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Google AdSense</li>
            <li>Google Ad Manager</li>
            <li>Other display advertising networks</li>
          </ul>
          <p className="mt-4">
            <strong>Google AdSense and the DART Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on our Service.
            Google&apos;s use of the DART cookie enables it and its partners to serve ads to our users based on their visit to our Service
            and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the
            {" "}
            <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google ad and content network privacy policy
            </a>.
            We may also use third-party advertising companies that use cookies, web beacons, and other tracking technologies to gather
            information about your visits to our Service and other websites in order to provide advertisements about goods and services
            of interest to you.
          </p>
          <p className="mt-4">
            <strong>Consent and Non-Personalized Ads:</strong> If you have not consented to advertising cookies (or if your jurisdiction
            requires opt-in consent), we instruct Google AdSense to serve <em>non-personalized</em> ads only. Non-personalized ads are
            not based on your past behavior; they are targeted using contextual information about the page you are viewing.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Analytics Services</h3>
          <p>
            We may use third-party analytics services to help us understand how users interact with our Service:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Google Analytics:</strong> Tracks user behavior, demographics, and interests</li>
            <li><strong>Vercel Analytics:</strong> Monitors Service performance and usage patterns</li>
            <li><strong>Microsoft Clarity:</strong> Session replay and heatmaps that record how pages are used (clicks, scrolls, navigation). Clarity loads only after you grant analytics consent, and is never enabled for accounts identified as under 13.</li>
          </ul>
          <p className="mt-4">
            These services may collect information such as:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>How you found our Service (search engines, referral sites)</li>
            <li>Which pages you visit and how long you stay</li>
            <li>What content you interact with</li>
            <li>Geographic location (country/region level)</li>
            <li>Device and browser information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Third-Party Privacy Policies</h3>
          <p>
            Our advertising and analytics partners have their own privacy policies. We encourage you to review:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Advertising Privacy & Terms
              </a>
            </li>
            <li>
              <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Vercel Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide, operate, and maintain our Service</li>
            <li>Improve, personalize, and expand our Service</li>
            <li>Understand and analyze how you use our Service</li>
            <li>Develop new features, products, and services</li>
            <li>Communicate with you (if you contact us)</li>
            <li>Detect and prevent technical issues or security threats</li>
            <li>Display relevant advertisements through third-party partners</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Third-Party Service Providers</h3>
          <p>We may share information with:</p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Advertising Networks:</strong> To display relevant advertisements</li>
            <li><strong>Analytics Providers:</strong> To analyze Service usage and performance</li>
            <li><strong>Hosting Services:</strong> To host and deliver our Service (e.g., Vercel)</li>
            <li><strong>Database Providers:</strong> To store educational content (e.g., Neon, PostgreSQL)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law or in response to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Valid legal requests from government authorities</li>
            <li>Court orders or subpoenas</li>
            <li>Protection of our legal rights or safety</li>
            <li>Prevention of fraud or security threats</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. 
            We will provide notice before your information is transferred and becomes subject to a different privacy policy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. 
            These measures include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>HTTPS encryption for data transmission</li>
            <li>Secure hosting infrastructure</li>
            <li>Regular security updates and monitoring</li>
            <li>Access controls for sensitive systems</li>
          </ul>
          <p className="mt-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, 
            we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights and Choices</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Cookie Controls</h3>
          <p>
            Most web browsers allow you to control cookies through settings. You can:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Block all cookies</li>
            <li>Accept only first-party cookies</li>
            <li>Delete cookies after browsing sessions</li>
            <li>Receive notifications when cookies are set</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> Blocking cookies may affect your ability to use certain features of our Service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Advertising Opt-Out</h3>
          <p>You can opt out of personalized advertising through:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <a href="https://adssettings.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
            </li>
            <li>
              <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance (DAA) Opt-Out
              </a>
            </li>
            <li>
              <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative (NAI) Opt-Out
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Do Not Track</h3>
          <p>
            Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Currently, there is no industry standard for responding to DNT signals. 
            We do not currently respond to DNT signals, but we will update this policy if standards are established.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.4 Rights for EU/UK Users (GDPR)</h3>
          <p>If you are located in the European Union or United Kingdom, you have certain rights under GDPR:</p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Right to Access:</strong> Request copies of your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Right to Object:</strong> Object to certain types of processing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">7.5 Rights for California Users (CCPA)</h3>
          <p>If you are a California resident, you have rights under CCPA:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to request deletion of personal information</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> We do not sell personal information to third parties.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
          <p>
            Our Service covers a wide range of learners — from elementary and middle-school math (grades 4&ndash;8) through
            high-school and AP®-level courses. Because some of our content is intended for children under 13, we ask for a
            birth year at sign-up and apply additional protections to accounts identified as under 13:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Non-personalized advertising only</strong>, with ads tagged for child-directed treatment (no
              interest-based/behavioral ad targeting), regardless of cookie-consent choices.</li>
            <li><strong>No session-replay analytics</strong> (Microsoft Clarity is never loaded for under-13 accounts).</li>
            <li>We collect only the information needed to operate the learning features, and a child&apos;s name is shown to
              other students as a first name and last initial only.</li>
          </ul>
          <p className="mt-4">
            <strong>Parents and guardians:</strong> we encourage you to be involved in your child&apos;s use of the Service and to
            review this policy with them. You may contact us at any time to review, correct, or delete your child&apos;s
            information, or to delete the account entirely. We are continuing to expand our verifiable parental-consent process;
            if you have questions about how your child&apos;s data is handled, please reach out.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on servers located outside of your state, province, country, 
            or other governmental jurisdiction where data protection laws may differ. By using our Service, you consent to the 
            transfer of your information to the United States and other countries where our service providers operate.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
          <p>
            We retain automatically collected information (analytics, cookies) for as long as necessary to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide and improve the Service</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain business records</li>
          </ul>
          <p className="mt-4">
            Typically, analytics data is aggregated and anonymized over time. Cookie data is retained according to the settings 
            of each specific cookie (see Section 7.1).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, 
            operational, or regulatory reasons. We will notify you of material changes by:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Posting a notice on our homepage (for significant changes)</li>
          </ul>
          <p className="mt-4">
            Your continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us through our repository:
          </p>
          <p className="mt-4">
            <a href="https://github.com/bcusack91/ap-calculus-platform" className="text-blue-600 hover:underline">
              https://github.com/bcusack91/ap-calculus-platform
            </a>
          </p>
          <p className="mt-4">
            You can also delete your account and its associated data yourself at any time from your{' '}
            <a href="/profile" className="text-blue-600 hover:underline">Profile page</a>{' '}
            (Danger zone &rarr; Delete account).
          </p>
          <p className="mt-4">
            For specific privacy requests (access, deletion, opt-out), please include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Your request type (access, deletion, etc.)</li>
            <li>Sufficient information to identify your data</li>
            <li>Verification of your identity</li>
            <li>Preferred contact method</li>
          </ul>
        </section>

        <section className="mt-8 p-6 bg-slate-50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <strong>Legal Disclaimer:</strong> This Privacy Policy is provided as a template and should be reviewed by a qualified attorney 
            before deployment to production. Privacy laws vary by jurisdiction and may require additional disclosures or safeguards. 
            Consider consulting with legal counsel familiar with GDPR, CCPA, COPPA, and other applicable privacy regulations.
          </p>
        </section>
      </div>
    </div>
  );
}
