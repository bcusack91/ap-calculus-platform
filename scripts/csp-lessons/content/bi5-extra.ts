// BI5 (extra) — csp-safe-computing and csp-social-ethical-impacts. Bespoke AP-quality content.

import type { Topic } from '../types';

const cspSafeComputing: Topic = {
  slug: 'csp-safe-computing',
  display: 'Safe Computing',
  emoji: '🔐',
  exportPrefix: 'cspSafeComputing',
  idPrefix: 'cspsc',
  parts: {
    2: {
      introMd: `## Safe Computing Is About Personal Practice

CSP\'s "safe computing" topic focuses on what individuals and organizations DO to protect themselves: choices, habits, and configuration — not just the underlying tech.

| Practice | What it does |
|----------|-------------|
| **Strong unique passwords** | Limits damage of any one breach. |
| **Multi-factor authentication** | Makes a stolen password insufficient. |
| **Software updates** | Closes known vulnerabilities. |
| **Backups** | Recover from ransomware / mistakes. |
| **Awareness of phishing** | Block attacks that exploit users, not code. |`,
      quiz1: [
        { q: 'A breach exposes the password "qwerty123" used at 14 different sites by the same person. The biggest direct consequence is ___', opts: ['no measurable impact, since each site stores its own independent password copy.', 'attackers can try the same password on the user\'s other sites — credential stuffing.', 'the user\'s connection to those sites runs slightly slower because of the breach.', 'the user\'s browser refuses to compress requests sent to any of the breached sites.'], a: 1, exp: 'Password reuse + breach = credential stuffing.' },
        { q: 'A user delays installing OS updates for 6 months. The biggest practical risk is ___', opts: ['no risk at all, since the operating system already shipped with security defaults.', 'known vulnerabilities patched in those updates remain exploitable on this device.', 'the device\'s file compression algorithm becomes slightly slower than freshly patched ones.', 'the device removes its support for transport-layer security on outbound connections.'], a: 1, exp: 'Patches close known vulnerabilities.' },
      ],
      contentMd: `## Password Hygiene

| Anti-pattern | Better practice |
|-------------|----------------|
| Same password everywhere | Use a password manager + unique passwords. |
| Short / common passwords | Long passphrases or generated random strings. |
| Sharing passwords | Use account delegation features. |
| Writing them on a sticky note | Encrypted vault. |

## Phishing And Social Engineering

Most modern breaches start with a person, not a zero-day. Recognize warning signs:

- Urgency / threats ("Your account will be locked in 24 hours").
- Mismatched sender / domain.
- Generic greetings.
- Asking for credentials, MFA codes, or money.
- Links that don\'t match where they claim to go.

## Personal Data Footprint

Every account is a target. Reduce risk by:

- Closing unused accounts.
- Limiting what each app can access (permissions).
- Reviewing privacy settings periodically.`,
      inputs: {
        prompts: [
          'Reusing the same password across sites is risky because of the _______ stuffing attack.',
          'A separate device or app providing a one-time code is the second _______ in MFA.',
          'A common starting point of attacks targets users via _______ (deceptive emails, texts, or calls).',
        ],
        answers: ['credential', 'factor', 'phishing'],
        hints: ['Reuse attack name.', 'MFA term.', 'Social engineering.'],
        explanation: 'Credential stuffing, second factor, phishing.',
      },
      dropdowns: {
        items: [
          { label: 'A password manager primarily helps by ___', options: ['enabling unique strong passwords for every site without memorizing them', 'shortening passwords', 'compressing data', 'replacing TLS'] },
          { label: 'An email asking for an MFA code "to verify your account" is most likely ___', options: ['phishing — never share MFA codes', 'a legitimate request', 'a CDN issue', 'a TLS handshake'] },
          { label: 'Limiting an app\'s permissions reduces ___', options: ['the data it can access if compromised', 'compression ratio', 'TLS overhead', 'IPv6 routing'] },
        ],
        correct: ['enabling unique strong passwords for every site without memorizing them', 'phishing — never share MFA codes', 'the data it can access if compromised'],
        hints: ['Manager solves reuse.', 'Codes are private.', 'Least privilege.'],
        explanation: 'Password managers, never-share-codes, least privilege.',
      },
      strategyMd: `## AP Exam Strategy: Safe Computing Basics

- Unique strong passwords + password manager + MFA = the modern baseline.
- Don\'t share MFA codes; legitimate services never ask.
- Patch promptly; phishing is the most common entry point.`,
      applied: [
        { q: 'A user gets a text "From [bank]: confirm transfer with code 482911". They didn\'t initiate a transfer. The most appropriate response is ___', opts: ['reply to the text with the code so the bank can finalize the transfer for them.', 'don\'t share the code; contact the bank directly using a known channel — likely phishing.', 'click any link in the text to investigate the source of the unexpected transfer.', 'reset every personal password without first contacting the bank to verify the text.'], a: 1, exp: 'Never share codes; verify out-of-band.' },
        { q: 'A school encourages students to use the same password on every system "for convenience". The most CSP-aligned critique is ___', opts: ['no critique — password reuse is a reasonable trade-off for student convenience here.', 'a single breach exposes every system; teach unique passwords + a manager + MFA instead.', 'transport-layer security on each login form fully replaces the need for unique passwords.', 'compressing each password before storage would resolve the underlying reuse problem here.'], a: 1, exp: 'Reuse compounds breach impact.' },
      ],
    },
    3: {
      introMd: `## Patterns Of Personal Data Risk

| Pattern | Why it\'s risky |
|---------|----------------|
| **Oversharing** | Public posts reveal patterns / locations. |
| **Old accounts** | Forgotten accounts may be breached. |
| **Default passwords** | IoT devices shipped with "admin/admin". |
| **Public Wi-Fi without HTTPS** | Eavesdropping risk. |
| **Browser auto-fill on shared devices** | Credentials leak to whoever uses next. |`,
      quiz1: [
        { q: 'A new IoT camera is installed with default credentials "admin/admin". The most direct risk is ___', opts: ['no measurable risk, since attackers cannot easily find new IoT devices on the internet.', 'attackers can access the camera (and possibly the home network) using widely known defaults.', 'the camera\'s built-in compression algorithm becomes less efficient than recently shipped models.', 'the camera\'s transport-layer security handshake slows down measurably under default credentials.'], a: 1, exp: 'Default creds are scanned and exploited at scale.' },
        { q: 'Posting daily location-tagged stories during a vacation publicly ___', opts: ['has no measurable impact on the safety of the home left empty during the vacation period.', 'tells anyone watching the public posts that your home is currently unoccupied for days.', 'compresses your stored vacation photos to a smaller size than untagged photos would be.', 'speeds up your residential internet connection slightly while you are away from home.'], a: 1, exp: 'Location patterns enable physical-world risks.' },
      ],
      contentMd: `## Privacy Settings Are Defaults Worth Reviewing

Defaults often favor sharing. Periodically review:

- Who can see your posts / location / photos.
- What apps have what permissions.
- What third-party logins are connected.
- Which devices are signed in to your accounts.

## Public Wi-Fi Caveats

Modern HTTPS protects most traffic on public Wi-Fi. But:

- Some apps still use unencrypted endpoints.
- A malicious access point can present invalid certificates (don\'t bypass).
- Using a trusted VPN adds an extra layer for higher-risk activities.

## Account-Takeover Recovery Plan

| Step | Why |
|------|-----|
| Sign out everywhere | Force attackers off if you re-secure. |
| Reset password + MFA | Lock attackers out. |
| Check connected apps | Revoke anything suspicious. |
| Check recovery email + phone | Attackers often change these. |
| Notify contacts if needed | They may receive impostor messages. |`,
      inputs: {
        prompts: [
          'A device shipped with "admin/admin" credentials uses a _______ password.',
          'Public Wi-Fi is much safer when sites use _______ rather than HTTP.',
          'After an account compromise, you should also check connected apps and the recovery _______.',
        ],
        answers: ['default', 'HTTPS', 'email'],
        hints: ['Out of the box.', 'Encrypted web.', 'Recovery channel.'],
        explanation: 'Default passwords, HTTPS, recovery email.',
      },
      dropdowns: {
        items: [
          { label: 'Default credentials should be ___', options: ['changed immediately on setup', 'left as-is', 'shared with neighbors', 'compressed'] },
          { label: 'A browser warning "your connection is not private" should ___', options: ['be taken seriously, especially on public Wi-Fi', 'always be ignored', 'be compressed', 'be encrypted further'] },
          { label: 'After an account takeover, you should also ___', options: ['check (and reset) recovery email, phone, and connected apps', 'tell no one and continue normally', 'compress logs', 'switch to UDP'] },
        ],
        correct: ['changed immediately on setup', 'be taken seriously, especially on public Wi-Fi', 'check (and reset) recovery email, phone, and connected apps'],
        hints: ['Setup hardening.', 'TLS warnings.', 'Recovery surface.'],
        explanation: 'Change defaults; respect TLS warnings; reset recovery surface after compromise.',
      },
      strategyMd: `## AP Exam Strategy: Personal Data Risks

- Defaults favor sharing; review privacy settings.
- Default device passwords are widely known and scanned.
- Don\'t bypass TLS warnings.`,
      applied: [
        { q: 'A friend\'s social account starts sending suspicious links to everyone. The most CSP-aligned response from the friend is ___', opts: ['ignore the situation entirely and continue using the account normally without any changes.', 'sign out everywhere, reset password + MFA, audit recovery email/phone and connected apps.', 'reply to the contacts with the requested credentials so the friend can confirm the activity.', 'switch to a brand new account immediately with no warning to existing contacts at all.'], a: 1, exp: 'Standard account-recovery checklist.' },
        { q: 'A school deploys 200 IoT thermostats with default passwords. The biggest CSP-aligned concern is ___', opts: ['no measurable concern, since the thermostats only control room temperatures within the school.', '200 devices easily found and exploited via default-credential scans, possibly pivoting onward.', 'each thermostat\'s built-in compression algorithm becomes slightly less efficient than newer models.', 'each thermostat\'s transport-layer security handshake will slow down by a small amount over time.'], a: 1, exp: 'Default creds at scale = mass exploitation surface.' },
      ],
    },
    4: {
      introMd: `## Safe Computing Connects Across CSP

| Connection | Why |
|-----------|-----|
| Safe computing ↔ Security | Personal practice is part of defense in depth. |
| Safe computing ↔ Networks | Most attacks reach you over a network. |
| Safe computing ↔ Data | Your data is what attackers want. |
| Safe computing ↔ Impact | Bad practice harms others (forwarded malware, stolen contacts). |`,
      quiz1: [
        { q: 'A compromised personal account that automatically forwarded contacts\' info caused phishing attacks against them. The most accurate framing is ___', opts: ['no measurable impact on others, since the original compromise affected only one user account.', 'the user\'s safe-computing posture has effects on people connected to them — a network effect.', 'each affected contact\'s transport-layer security handshake will slow down for several days.', 'the affected contacts\' inboxes will simply compress less efficiently for several weeks afterward.'], a: 1, exp: 'One person\'s lapse can harm many.' },
        { q: 'A user installs random browser extensions for novelty. The most direct risk is ___', opts: ['no risk, since browser extensions run inside a fully isolated sandbox by default everywhere.', 'extensions can read browsing data, inject scripts, and exfiltrate credentials — vet permissions.', 'each installed extension speeds up the browser\'s transport-layer security handshake noticeably.', 'each installed extension forces the browser to abandon its built-in compression of cached data.'], a: 1, exp: 'Browser extensions are powerful and abusable.' },
      ],
      contentMd: `## Defense In Depth For Individuals

| Layer | Personal practice |
|-------|------------------|
| Identity | Unique passwords + MFA. |
| Devices | Updates + lock screens + encryption-at-rest (FileVault / BitLocker). |
| Apps | Install from trusted stores; review permissions. |
| Network | Trusted networks; HTTPS; trusted VPN when needed. |
| Backups | Off-device backups (cloud or external drive). |
| Awareness | Recognize phishing; healthy skepticism. |

## Threat Modeling For Yourself

Different people face different threats:

- **General public**: opportunistic phishing, scams.
- **High-profile**: targeted phishing, account takeover.
- **Activists / journalists**: state-level adversaries; need stronger ops.

Match your defenses to your realistic threat model.`,
      inputs: {
        prompts: [
          'Personal full-disk encryption on macOS / Windows is provided by _______ / BitLocker.',
          'A useful exercise to identify YOUR specific risks is personal _______ modeling.',
          'Restoring a lost laptop\'s data depends on having _______ off the device.',
        ],
        answers: ['FileVault', 'threat', 'backups'],
        hints: ['Apple disk encryption.', 'Adversary thinking.', 'Off-device.'],
        explanation: 'FileVault / BitLocker, threat modeling, backups.',
      },
      dropdowns: {
        items: [
          { label: 'Locking your screen when leaving a device ___', options: ['blocks casual physical access to your accounts', 'has no benefit', 'speeds up TLS', 'compresses data'] },
          { label: 'A backup that lives only on the same device ___', options: ['does not protect against device loss / theft / ransomware', 'is the safest possible setup', 'replaces encryption', 'eliminates phishing risk'] },
          { label: 'Trusted browser extensions should be ___', options: ['installed only from reputable stores with reviewed permissions', 'installed from any random site', 'never reviewed', 'always silent'] },
        ],
        correct: ['blocks casual physical access to your accounts', 'does not protect against device loss / theft / ransomware', 'installed only from reputable stores with reviewed permissions'],
        hints: ['Lock screens block casual access.', 'Off-device matters.', 'Permissions review.'],
        explanation: 'Lock screens, off-device backups, vet extensions.',
      },
      strategyMd: `## AP Exam Strategy: Personal Defense In Depth

- Layer defenses: identity + device + app + network + backups + awareness.
- Match defenses to your real threat model.
- Personal lapses can harm your network of contacts.`,
      applied: [
        { q: 'A high-profile journalist\'s threat model includes targeted state-level adversaries. The most appropriate baseline is ___', opts: ['just a strong password and nothing else added on top of it for the journalist\'s accounts.', 'hardware-key MFA, full-disk encryption, vetted device + app sources, OPSEC training, and a plan.', 'just multi-factor authentication via SMS text messages and no other defenses for the accounts.', 'just transport-layer security on the journalist\'s outbound traffic and no other defenses at all.'], a: 1, exp: 'High-risk targets need stronger defenses, including hardware MFA.' },
        { q: 'A teenager streams video games and shares their schedule publicly. The most accurate concern is ___', opts: ['no measurable concern, since publicly shared streaming schedules are normal among gamers.', 'predictable presence + visible patterns may enable harassment, swatting, or physical-world risks.', 'the streamer\'s transport-layer security handshake will slow down because of the public schedule.', 'the streamer\'s upload connection will simply compress less efficiently while a stream is live.'], a: 1, exp: 'Public exposure of patterns enables real-world risks.' },
      ],
    },
    5: {
      introMd: `## How Safe Computing Has Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Antivirus + "don\'t open weird attachments". |
| 2000s | Spyware, popups, browser hardening. |
| 2010s | Mobile phishing; MFA mainstream. |
| 2020s | Passkeys, AI-assisted phishing, cloud account takeovers. |`,
      quiz1: [
        { q: 'Passkeys (FIDO2) primarily replace ___', opts: ['encryption of stored data with a fundamentally different cryptographic primitive', 'passwords with cryptographic device-bound credentials that resist phishing', 'compression of the user\'s authentication request before it reaches the server', 'IPv6 addressing of authentication endpoints with a more compact alternative'], a: 1, exp: 'Passkeys replace passwords with phishing-resistant cryptography.' },
        { q: 'AI-assisted phishing is concerning because ___', opts: ['it produces grammatically clean, personalized lures at scale.', 'it makes passwords weaker.', 'it removes TLS.', 'it shrinks attachments.'], a: 0, exp: 'Personalized, fluent lures are harder to spot.' },
      ],
      contentMd: `## Passwordless Future

Industry is moving toward **passkeys** (FIDO2 / WebAuthn): the user\'s device holds a private key; the site only ever sees a public key + signed challenge. This is phishing-resistant by design.

## Cloud Account Takeover

Modern attackers target the **cloud account** itself (email, identity provider) because that often unlocks dozens of services. Defenses:

- MFA on the identity provider.
- Audit which services are connected.
- Review session activity.

## What Hasn\'t Changed

- Patches still matter.
- Phishing still works.
- Backups still save you.
- Healthy skepticism still beats most attacks.`,
      inputs: {
        prompts: [
          'A modern phishing-resistant alternative to passwords is called a _______.',
          'A single account that grants access to many services is often the user\'s _______ provider.',
          'Despite new attacks, _______ patches remain essential.',
        ],
        answers: ['passkey', 'identity', 'software'],
        hints: ['FIDO2.', 'IdP.', 'Patch hygiene.'],
        explanation: 'Passkeys / identity provider / software patches.',
      },
      dropdowns: {
        items: [
          { label: 'Passkeys are phishing-resistant because ___', options: ['the private key never leaves the device and the signature is bound to the real site', 'they use longer passwords', 'they use TLS only', 'they compress data'] },
          { label: 'Compromise of the user\'s primary email account often ___', options: ['enables password resets and account takeovers across many other services', 'has no other consequences', 'speeds up TLS', 'compresses data'] },
          { label: 'AI-generated phishing emails ___', options: ['are typically more polished and personalized than older phishing', 'are easier to spot', 'remove TLS', 'compress data'] },
        ],
        correct: ['the private key never leaves the device and the signature is bound to the real site', 'enables password resets and account takeovers across many other services', 'are typically more polished and personalized than older phishing'],
        hints: ['Origin-bound crypto.', 'Email = master key.', 'Quality boost.'],
        explanation: 'Passkeys are origin-bound; email is high-value; AI improves phishing quality.',
      },
      strategyMd: `## AP Exam Strategy: Modern Safe Computing

- Passkeys are the modern direction.
- Identity providers are high-value targets — protect them.
- AI raises the floor of phishing quality.`,
      applied: [
        { q: 'A user\'s personal email is compromised. Within hours, attackers reset passwords on 12 other services. The most accurate framing is ___', opts: ['unrelated — the email compromise has no causal connection to the other twelve service resets.', 'email is the recovery channel for those services; protecting it (MFA / passkey) protects them all.', 'transport-layer security on the email account would have slowed but not blocked the takeovers.', 'compressing the user\'s mailbox would have prevented the attackers from acting on the breach.'], a: 1, exp: 'Email is the master account.' },
        { q: 'A site offers passkeys instead of passwords. The most CSP-aligned reason to enable them is ___', opts: ['no compelling reason, since passwords with MFA are equivalent to passkeys in every way.', 'they resist phishing because the credential is bound to the real site\'s origin and stays on device.', 'they compress the user\'s authentication request to a smaller size than passwords would do.', 'they shorten the URL the browser uses when sending the user\'s authentication challenge.'], a: 1, exp: 'Passkeys = phishing-resistant by construction.' },
      ],
    },
    6: {
      introMd: `## Safe Computing Workshop`,
      quiz1: [
        { q: 'A user asks if MFA via SMS is enough for an admin account. The most accurate answer is ___', opts: ['SMS MFA is the strongest possible second factor available for any sensitive admin account.', 'SMS MFA helps but is vulnerable to SIM-swap; use an authenticator app or hardware key instead.', 'No multi-factor authentication is needed at all on a properly configured admin account.', 'Transport-layer security on the admin login fully covers everything multi-factor would add.'], a: 1, exp: 'SMS > nothing, but app/hardware factor is stronger.' },
        { q: 'Using a unique random password per site requires ___', opts: ['memorizing each random password yourself, as humans can reliably recall hundreds of strings.', 'a password manager — humans cannot reliably memorize hundreds of unique random passwords.', 'no tool whatsoever, since browsers will autofill any random password without storing it.', 'transport-layer security on the login form to make each random password short enough.'], a: 1, exp: 'Password managers enable real uniqueness.' },
      ],
      contentMd: `## Worked: A Personal Security Checkup

| Area | Action |
|------|--------|
| Passwords | Move to manager + unique per site. |
| MFA | Enable on email, banking, social. |
| Email | Audit forwarding rules and recovery info. |
| Devices | Enable OS encryption; auto-update; lock screen. |
| Backups | Off-device backups; test restore. |
| Browser | Review extensions and permissions. |
| Apps | Audit installed apps and permissions. |

## Worked: A Phishing Smell-Test

If a message:

1. Pressures urgency, OR
2. Asks for credentials / MFA codes / money, OR
3. Has a mismatched sender / domain, OR
4. Has a link whose actual destination differs from its text,

…treat as phishing until proven otherwise. Verify out-of-band.

## Worked: Recovering A Compromised Account

1. Sign out from all sessions.
2. Change password (long, unique, manager-stored).
3. Reset MFA; remove old factors.
4. Audit recovery email + phone — change if compromised.
5. Audit connected apps and revoke unknown ones.
6. Notify contacts.
7. Run an antivirus / malware scan if you suspect device compromise.`,
      inputs: {
        prompts: [
          'After a compromise, after changing the password you should reset _______.',
          'You should audit connected _______ to revoke anything unfamiliar.',
          'If you suspect device-level compromise, run an _______ scan.',
        ],
        answers: ['MFA', 'apps', 'antivirus'],
        hints: ['Reset second factor.', 'Third-party access.', 'Malware scan.'],
        explanation: 'MFA reset / connected apps audit / antivirus scan.',
      },
      dropdowns: {
        items: [
          { label: 'A password manager primarily makes ___ practical', options: ['unique strong passwords for every site', 'memorizing one password for all sites', 'no passwords at all', 'compression of passwords'] },
          { label: 'A long passphrase like "correct-horse-battery-staple" is ___', options: ['stronger than a short complex password and easier to remember', 'weaker than "P@ss1"', 'always invalid', 'always rejected'] },
          { label: 'Reviewing privacy settings periodically is ___', options: ['important because defaults and policies change over time', 'unnecessary', 'a TLS feature', 'a compression feature'] },
        ],
        correct: ['unique strong passwords for every site', 'stronger than a short complex password and easier to remember', 'important because defaults and policies change over time'],
        hints: ['Manager solves uniqueness.', 'Length wins.', 'Settings drift.'],
        explanation: 'Manager + uniqueness; long passphrases; review settings periodically.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Personal security checkup as a habit, not a one-time event.
- Phishing smell-test = urgency + creds/codes/money + mismatched sender + suspicious link.
- Account recovery = sign out + reset password + reset MFA + audit recovery channels + audit connected apps.`,
      applied: [
        { q: 'A user gets an authenticator-app push they did NOT initiate. The most appropriate response is ___', opts: ['approve the push so the notification disappears and the user can return to what they were doing.', 'deny the push, then change the password and review account activity — someone has the password.', 'turn off multi-factor authentication on the account so future spurious pushes will not appear.', 'compress the authenticator app\'s notification log so the spurious push will be hidden inside.'], a: 1, exp: '"MFA bombing" deny + investigate is the right answer.' },
        { q: 'A teacher wants to recommend ONE upgrade to student safety. The single highest-impact change is ___', opts: ['use shorter passwords so students will reliably memorize them across every account they own.', 'enable MFA on the student email account, since it\'s the recovery channel for everything else.', 'disable transport-layer security on the student\'s outbound browser traffic to simplify access.', 'install a wide variety of unfamiliar browser extensions to extend the student\'s capabilities.'], a: 1, exp: 'MFA on email is highest-leverage.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Safe Computing`,
      quiz1: [
        { q: 'Which is most clearly NOT safe-computing best practice?', opts: ['Unique strong passwords per site.', 'MFA on important accounts.', 'Sharing the same password everywhere "for convenience".', 'Patching software promptly.'], a: 2, exp: 'Password reuse is the antithesis of safe computing.' },
        { q: 'A "passkey" is ___', opts: ['a physical key only.', 'a phishing-resistant credential bound to a device and the real site origin.', 'a compression algorithm.', 'a CDN feature.'], a: 1, exp: 'Passkeys = origin-bound device credential.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Password manager | Stores unique strong passwords. |
| MFA | Multi-factor authentication. |
| Phishing | Social-engineering attack. |
| Default credentials | Out-of-box passwords. |
| Patch | Software security update. |
| Backups | Off-device data copies. |
| Threat modeling | Identifying realistic adversaries. |
| Passkey | Phishing-resistant device credential. |
| Identity provider | Account that unlocks many services. |

## Common Pitfalls

- Reusing passwords across sites.
- Skipping MFA on email.
- Sharing MFA codes.
- Ignoring TLS warnings.
- Leaving default device credentials.
- No off-device backups.
- Treating safe computing as one-time, not ongoing.`,
      inputs: {
        prompts: [
          'Sharing the same password across sites enables _______ stuffing.',
          'A modern alternative to passwords that resists phishing is the _______.',
          'Backups stored off the device protect against device loss, theft, and _______.',
        ],
        answers: ['credential', 'passkey', 'ransomware'],
        hints: ['Reuse attack.', 'FIDO2.', 'Encrypted-extortion attack.'],
        explanation: 'Credential stuffing / passkeys / ransomware.',
      },
      dropdowns: {
        items: [
          { label: 'A password should be ___', options: ['unique per site, generated by a password manager', 'identical across all sites', 'shared with friends', 'compressed'] },
          { label: 'A "click any link to verify" email is ___', options: ['highly suspicious — verify out-of-band first', 'always safe', 'always compressed', 'always TLS-protected'] },
          { label: 'Email + MFA is the foundation of personal safe computing because ___', options: ['email is the recovery channel for almost every other account', 'email is the smallest file', 'TLS routes through email', 'compression depends on it'] },
        ],
        correct: ['unique per site, generated by a password manager', 'highly suspicious — verify out-of-band first', 'email is the recovery channel for almost every other account'],
        hints: ['Uniqueness.', 'Verify first.', 'Master account.'],
        explanation: 'Unique passwords; verify before clicking; protect email = protect everything.',
      },
      strategyMd: `## Final Exam Tips

- Personal safe computing = unique passwords + MFA + patches + backups + skepticism.
- Email is the master account — protect it first.
- Passkeys are the future of authentication.
- Safe computing affects others connected to you.`,
      applied: [
        { q: 'A grandparent forwards "click here to claim a prize" emails. The CSP-aligned response is ___', opts: ['mock them for falling for an obvious scam and refuse to discuss safer practices with them.', 'gently educate: explain phishing patterns, set up MFA on important accounts, install browser protection.', 'recommend that the grandparent upgrade to the latest transport-layer security version on all devices.', 'recommend that the grandparent compress every forwarded email before resending it to other relatives.'], a: 1, exp: 'Education + MFA + browser protection = inclusive safe computing.' },
        { q: 'A school deploys 1,000 student laptops. The single most impactful safe-computing default is ___', opts: ['no special default — each student should configure their own laptop without any baseline policy.', 'enforce MFA on student accounts, OS auto-updates, full-disk encryption, and unique passwords.', 'configure a single shared admin account on every laptop so technicians can support them faster.', 'disable operating-system updates on every laptop so students are not interrupted by restarts.'], a: 1, exp: 'Defaults that favor security at fleet scale.' },
      ],
    },
  },
};

const cspSocialEthicalImpacts: Topic = {
  slug: 'csp-social-ethical-impacts',
  display: 'Social & Ethical Impacts',
  emoji: '⚖️',
  exportPrefix: 'cspSocialEthicalImpacts',
  idPrefix: 'cspsei',
  parts: {
    2: {
      introMd: `## Computing Reshapes Society

Every major innovation has social, economic, and ethical impacts — often unevenly distributed.

| Domain | Example impact |
|--------|---------------|
| Communication | Global messaging in seconds. |
| Work | Remote jobs; automation displacement. |
| Education | Online learning at scale. |
| Health | Telemedicine, fitness tracking. |
| Civic life | Online voting info, activism. |
| Privacy | Data collection at unprecedented scale. |

The same technology can enable opportunity AND harm. Both happen at once.`,
      quiz1: [
        { q: 'A new app helps users connect AND enables harassment. The most accurate framing is ___', opts: ['it has only positive effects on the people who choose to use the app to connect with each other.', 'computing innovations typically have BOTH beneficial and harmful effects, often for different groups.', 'it has only negative effects on every population that ends up exposed to the app indirectly.', 'its effects on people are essentially random and cannot be evaluated systematically in advance.'], a: 1, exp: 'Dual-use is the norm.' },
        { q: 'When evaluating a new technology, the most rigorous approach is ___', opts: ['consider only the technology\'s intended use case as described by the original designers.', 'consider intended use, foreseeable misuse, and unintended consequences for different stakeholders.', 'consider only the public statements and press releases that the technology\'s makers issue.', 'consider only the marketing material the technology\'s makers prepare for general consumers.'], a: 1, exp: 'Holistic stakeholder analysis.' },
      ],
      contentMd: `## Beneficial vs. Harmful — A Useful Lens

| Beneficial | Harmful |
|-----------|---------|
| Access to information | Misinformation spreads fast |
| New careers | Old jobs displaced |
| Inclusion (assistive tech) | New divides (digital, broadband) |
| Civic participation | Online harassment, manipulation |
| Lifesaving medicine | Surveillance, breach |

## Stakeholder Thinking

For any technology, list:

- Direct users.
- People affected indirectly (gig workers, local businesses).
- Vulnerable populations (children, those with disabilities, marginalized groups).
- Future generations (data retained forever).

## Bias In Computing Systems

| Source | Result |
|--------|--------|
| Biased training data | Biased ML predictions. |
| Biased design assumptions | Excludes some users. |
| Biased deployment | Disproportionate harm to certain groups. |

Bias is rarely intentional but always real. The CSP-aligned response is to test for it explicitly across populations.`,
      inputs: {
        prompts: [
          'When evaluating a new technology you should consider both _______ and harmful effects.',
          'People affected by a technology, even indirectly, are called _______.',
          'A system whose outcomes systematically disadvantage some groups exhibits _______.',
        ],
        answers: ['beneficial', 'stakeholders', 'bias'],
        hints: ['Positive side.', 'Affected parties.', 'Unequal outcomes.'],
        explanation: 'Beneficial / stakeholders / bias are core CSP impact vocabulary.',
      },
      dropdowns: {
        items: [
          { label: 'A new technology typically ___', options: ['has both beneficial and harmful effects, often for different groups', 'has only positive effects', 'has only negative effects', 'has no measurable effects'] },
          { label: 'A facial-recognition system that performs much worse on dark-skinned faces demonstrates ___', options: ['bias often rooted in training-data composition', 'random errors only', 'a TLS issue', 'a compression issue'] },
          { label: 'Vulnerable populations include ___', options: ['children, people with disabilities, marginalized groups, and others', 'no one in particular', 'only adults', 'only English speakers'] },
        ],
        correct: ['has both beneficial and harmful effects, often for different groups', 'bias often rooted in training-data composition', 'children, people with disabilities, marginalized groups, and others'],
        hints: ['Dual nature.', 'Data-driven bias.', 'Thoughtful inclusion.'],
        explanation: 'Dual nature, training-data bias, broad vulnerable populations.',
      },
      strategyMd: `## AP Exam Strategy: Social & Ethical Basics

- Always consider BOTH beneficial and harmful effects.
- List stakeholders explicitly.
- Bias is real and testable.
- "It wasn\'t intentional" doesn\'t neutralize harm.`,
      applied: [
        { q: 'A school adopts facial-recognition attendance. The most CSP-aligned analysis is ___', opts: ['only the convenience of how much faster student attendance can be recorded each morning.', 'weigh benefits against bias risks, surveillance impact, data retention, consent, and alternatives.', 'only the transport-layer security implications of the camera traffic between the cameras and server.', 'only the storage compression ratio of recorded attendance data over a typical academic year.'], a: 1, exp: 'Stakeholder + bias + privacy + alternatives = full analysis.' },
        { q: 'A gig-economy app benefits riders and consumers but precarious workers face inconsistent income. The most accurate framing is ___', opts: ['the app is purely beneficial to every party that interacts with it through the gig-economy model.', 'computing reshapes work — benefits and harms are unevenly distributed across stakeholder groups.', 'the app has no measurable impact on the precarious workers who fulfill the gig-economy requests.', 'the app raises only a transport-layer-security issue between worker devices and the central server.'], a: 1, exp: 'Uneven impact across stakeholder groups.' },
      ],
    },
    3: {
      introMd: `## Common Patterns Of Impact

| Pattern | Example |
|---------|---------|
| **Disintermediation** | Direct seller-to-buyer; cuts middlemen. |
| **Network effects** | Each user adds value for others (and lock-in). |
| **Algorithmic amplification** | Engagement-driven feeds boost extreme content. |
| **Surveillance creep** | Data collection grows past stated purpose. |
| **Automation shift** | Tasks shift from people to machines. |`,
      quiz1: [
        { q: 'A social platform\'s engagement-optimizing feed surfaces sensational content because ___', opts: ['users explicitly request sensational content through clearly labeled platform settings each session.', 'sensational content reliably drives more clicks and time-on-platform; the optimizer rewards it.', 'transport-layer security on the user\'s connection automatically rewards more sensational posts.', 'compression algorithms favor sensational text content because it shrinks more efficiently than calm text.'], a: 1, exp: 'Optimizing engagement amplifies what gets engagement.' },
        { q: 'A platform whose value rises with each new user has ___', opts: ['network effects — each additional user makes the platform more valuable to existing users', 'compression — each additional user makes the platform store less data per active interaction', 'transport-layer security — each additional user strengthens the platform\'s cryptography', 'a content-delivery network — each additional user routes other users\' traffic geographically'], a: 0, exp: 'Network effects = value scales with users.' },
      ],
      contentMd: `## Misinformation And Disinformation

| Term | Meaning |
|------|---------|
| **Misinformation** | False information shared without intent to mislead. |
| **Disinformation** | False information shared deliberately to mislead. |
| **Malinformation** | True information shared with malicious intent (out of context). |

Computing speeds the spread of all three. Algorithmic feeds, generative AI, and synthetic media (deepfakes) raise the stakes.

## Open Vs. Closed Platforms

| | Open | Closed |
|---|------|--------|
| Modify | Yes | No |
| Vendor lock-in | Low | High |
| Examples | Linux, Wikipedia | iOS app store, proprietary services |

Open systems enable wider participation; closed systems may offer easier UX or stronger curation.

## Crowdsourcing\'s Double Edge

Wikipedia harnesses thousands of editors. Same model can be exploited (vandalism, brigading). Governance matters.`,
      inputs: {
        prompts: [
          'False information spread WITHOUT intent to mislead is called _______.',
          'A system whose value rises as more users join exhibits _______ effects.',
          'AI-generated synthetic videos of real people are called _______.',
        ],
        answers: ['misinformation', 'network', 'deepfakes'],
        hints: ['Unintentional.', 'Scaling with users.', 'Synthetic video.'],
        explanation: 'Misinformation / network effects / deepfakes.',
      },
      dropdowns: {
        items: [
          { label: 'An algorithmically-curated feed optimized for engagement tends to ___', options: ['amplify content that drives engagement, not necessarily content that is accurate or beneficial', 'show only government news', 'remove all content', 'compress content'] },
          { label: 'A vendor-locked platform makes it ___', options: ['hard for users to switch to a competitor', 'easy to switch competitors', 'free to use forever', 'compressible'] },
          { label: 'A crowdsourced project benefits from ___', options: ['governance: clear contribution rules and trusted maintainers', 'no rules', 'a single contributor', 'only experts'] },
        ],
        correct: ['amplify content that drives engagement, not necessarily content that is accurate or beneficial', 'hard for users to switch to a competitor', 'governance: clear contribution rules and trusted maintainers'],
        hints: ['Optimizer follows clicks.', 'Lock-in.', 'Crowdsourcing needs governance.'],
        explanation: 'Engagement amplification; lock-in; crowdsourcing governance.',
      },
      strategyMd: `## AP Exam Strategy: Impact Patterns

- Distinguish mis / dis / mal information.
- Algorithmic amplification is a structural force, not just an editorial choice.
- Open vs. closed has real trade-offs.`,
      applied: [
        { q: 'A new social app personalizes feeds with no "show me the opposite view" option. A long-term concern is ___', opts: ['no measurable concern, since users naturally seek out diverse opinions on their own anyway.', 'filter bubbles + echo chambers can narrow user perspectives and amplify polarization over time.', 'transport-layer security on each user\'s connection becomes slower as the personalization improves.', 'compression of personalized feeds becomes less efficient than compression of unpersonalized feeds.'], a: 1, exp: 'Personalization without diversity = echo chamber.' },
        { q: 'A community Wikipedia for a small topic faces vandalism. The most CSP-aligned response is ___', opts: ['close the wiki entirely so that no further vandalism can be added by anonymous contributors.', 'add governance: clear policies, trusted editors, version history, and rate limits on edits per hour.', 'switch the wiki\'s underlying transport from TCP to UDP to discourage repeat vandalism attempts.', 'compress every page on the wiki more aggressively to make vandalized content harder to read.'], a: 1, exp: 'Crowdsourcing scales only with governance.' },
      ],
    },
    4: {
      introMd: `## Social & Ethical Impact Connects Everywhere

| Connection | Why |
|-----------|-----|
| Impact ↔ Data | What data we collect shapes what we can do. |
| Impact ↔ Algorithms | Algorithm choices encode policy. |
| Impact ↔ Networks | Connectivity drives access (and divide). |
| Impact ↔ Security | Breaches = real human harm. |`,
      quiz1: [
        { q: 'A predictive-policing model trained on historic arrest data may ___', opts: ['perfectly predict every future criminal incident across every neighborhood it is deployed in.', 'reproduce historical biases in policing patterns, harming the same communities again — bias laundering.', 'eliminate every form of bias automatically by virtue of being a statistical machine-learning model.', 'compress the historic arrest dataset to a smaller form than any human analyst could produce.'], a: 1, exp: '"Bias laundering" — historical patterns replicated as objective predictions.' },
        { q: 'A region without high-speed Internet ___', opts: ['has no measurable impact on the residents\' daily access to opportunities and public services.', 'faces limited access to telehealth, online education, and modern jobs — the digital divide is real.', 'has lower transport-layer-security overhead than connected regions on the same continental backbone.', 'has consistently better data compression than connected regions because of reduced background traffic.'], a: 1, exp: 'Connectivity = access to opportunity.' },
      ],
      contentMd: `## Algorithm Choices Are Policy Choices

When a credit-score, hiring, or healthcare-triage algorithm is deployed, its rules become policy. CSP frames this as a design and accountability concern:

- **Transparency**: can outsiders audit the system?
- **Accountability**: who is responsible for harms?
- **Recourse**: can affected people appeal?

## Intellectual Property And Creative Commons

| License | Effect |
|---------|--------|
| Public domain | No restrictions. |
| Creative Commons (CC-BY) | Reuse with attribution. |
| Open source (MIT, GPL) | Reuse under license terms. |
| Proprietary | All rights reserved. |

CSP-aligned thinking: respect creators\' intent, give credit, understand what AI training and remix imply.

## Privacy Expectations

Different cultures, populations, and contexts have different expectations. A "public" post in a small-town context becomes very different when amplified globally. **Contextual integrity** is the CSP framing: data should flow in ways consistent with the original context\'s norms.`,
      inputs: {
        prompts: [
          'A property of a system that lets outsiders examine how it works is called _______.',
          'A property that allows affected users to appeal a decision is called _______.',
          'A privacy framework that asks whether data flows match the original context\'s norms is called contextual _______.',
        ],
        answers: ['transparency', 'recourse', 'integrity'],
        hints: ['Visibility.', 'Appeal mechanism.', 'Context-aware.'],
        explanation: 'Transparency / recourse / contextual integrity.',
      },
      dropdowns: {
        items: [
          { label: 'A hiring algorithm that disproportionately rejects qualified candidates from a group is ___', options: ['exhibiting bias that needs investigation, regardless of intent', 'unbiased', 'a TLS issue', 'a compression issue'] },
          { label: 'Reusing a CC-BY image requires ___', options: ['attribution to the creator under the license terms', 'no acknowledgment', 'payment to the creator', 'TLS only'] },
          { label: 'Privacy expectations vary by ___', options: ['context, culture, and population', 'never — they\'re universal', 'only file size', 'only TLS version'] },
        ],
        correct: ['exhibiting bias that needs investigation, regardless of intent', 'attribution to the creator under the license terms', 'context, culture, and population'],
        hints: ['Outcome bias.', 'Attribution.', 'Context matters.'],
        explanation: 'Outcome bias matters; attribution required; context-dependent privacy.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Impact

- Algorithm + data choices encode policy.
- Transparency, accountability, recourse for high-stakes systems.
- Respect creator licenses and contextual privacy norms.`,
      applied: [
        { q: 'A school deploys a predictive model to flag "at-risk" students. The most CSP-aligned design includes ___', opts: ['fully automated decisions with no human review of any individual flag the model produces during use.', 'human review of every flag, transparency about the criteria, audited bias across demographics, and appeals.', 'no documentation of how the model works, on the grounds that disclosure would let students game it.', 'no review process at all, on the grounds that the model\'s training data is statistically representative.'], a: 1, exp: 'Transparency + accountability + recourse + bias audits = ethical deployment.' },
        { q: 'A user remixes a CC-BY song without attribution and posts it. The most CSP-aligned framing is ___', opts: ['no measurable concern, since the user has remixed the song into something that sounds different.', 'CC-BY requires attribution; using without it violates the license and disrespects the creator\'s terms.', 'transport-layer security on the upload of the remix would have prevented the licensing issue here.', 'compressing the remix more aggressively before upload would have prevented the licensing issue here.'], a: 1, exp: 'CC-BY = attribution required.' },
      ],
    },
    5: {
      introMd: `## How Computing\'s Impact Has Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Email + web democratize publishing. |
| 2000s | Social media; Wikipedia; smartphones. |
| 2010s | Algorithmic feeds; gig economy; ML decisions. |
| 2020s | Generative AI; deepfakes; LLM-mediated information. |`,
      quiz1: [
        { q: 'Generative AI most directly raises new questions about ___', opts: ['compression ratio of the model\'s output relative to its training set on a per-token basis', 'authorship, attribution, training-data consent, misinformation, and creative-labor displacement', 'the transport-layer security handshake speed between the AI client and the model\'s server', 'the IPv6 routing of packets between the AI client and the model\'s underlying inference server'], a: 1, exp: 'Generative AI surfaces all of these social concerns.' },
        { q: 'A deepfake video of a politician saying things they never said most directly threatens ___', opts: ['compression efficiency of video streams during the broadcast of the synthesized speech', 'public trust in media and elections — an information-integrity concern at societal scale', 'transport-layer security between the viewer\'s browser and the originating broadcast server', 'IPv6 routing of the synthesized video between the original publisher and downstream viewers'], a: 1, exp: 'Deepfakes erode trust in media.' },
      ],
      contentMd: `## Generative AI Stakes

| Concern | Example |
|---------|---------|
| Authorship | Whose work is in the training data? |
| Consent | Did sources agree? |
| Bias | What populations are over / under represented? |
| Hallucination | Confident but wrong outputs. |
| Labor | Displacement of certain creative / knowledge work. |
| Energy | Training large models is energy-intensive. |

## Platform Power And Regulation

A handful of platforms now mediate much of public discourse, commerce, and labor. Regulators worldwide are responding (data-protection laws, antitrust, age-verification debates). CSP framing: **technology design embeds policy**, so policy must engage with design.

## Long-Term Sustainability

Compute uses electricity, water (cooling), rare materials. Decisions about which problems are worth computing on (and at what scale) have environmental impact.`,
      inputs: {
        prompts: [
          'Confident but factually wrong AI outputs are called _______.',
          'AI-generated synthetic videos of real people are called _______.',
          'Computing\'s electricity, water, and materials use raises questions about its environmental _______.',
        ],
        answers: ['hallucinations', 'deepfakes', 'sustainability'],
        hints: ['"Made-up" outputs.', 'Synthetic video.', 'Environmental footprint.'],
        explanation: 'Hallucinations / deepfakes / sustainability.',
      },
      dropdowns: {
        items: [
          { label: 'AI training raises ___ concerns about sources of training data', options: ['consent and attribution', 'compression', 'TLS', 'IPv6'] },
          { label: 'Energy use of large model training is ___', options: ['significant and a growing sustainability concern', 'negligible always', 'unrelated to the environment', 'a TLS issue'] },
          { label: 'A small handful of platforms mediating public discourse raises ___', options: ['questions about platform power, governance, and accountability', 'TLS issues only', 'compression issues only', 'IPv6 routing'] },
        ],
        correct: ['consent and attribution', 'significant and a growing sustainability concern', 'questions about platform power, governance, and accountability'],
        hints: ['Source ethics.', 'Real footprint.', 'Concentrated influence.'],
        explanation: 'AI ethics / sustainability / platform power.',
      },
      strategyMd: `## AP Exam Strategy: Modern Impact

- Generative AI raises authorship, consent, bias, hallucination, labor, and energy concerns.
- Platforms shape public life; their design choices are policy.
- Sustainability matters as compute scales.`,
      applied: [
        { q: 'A user submits a school essay generated by an LLM as their own work. The most CSP-aligned framing is ___', opts: ['no measurable concern, since the LLM\'s output is technically the property of whoever prompted it.', 'an academic-integrity concern that also raises authorship and attribution questions; norms must be explicit.', 'a transport-layer-security concern between the user\'s browser and the underlying language-model server.', 'a compression concern, since the model\'s output happens to compress more efficiently than human writing.'], a: 1, exp: 'Academic integrity + clear AI-use norms.' },
        { q: 'An AI chatbot confidently states a wrong historical fact a student then cites. The CSP-aligned response is ___', opts: ['always trust the AI chatbot\'s output, on the grounds that confident answers are usually correct.', 'verify factual claims against authoritative sources; AI hallucinations are common and confidence ≠ correctness.', 'compress the chatbot\'s response before citing it, so that any factual error becomes harder to detect later.', 'switch the chatbot\'s underlying transport from TCP to UDP so that future hallucinations stop occurring.'], a: 1, exp: 'AI hallucinations require verification.' },
      ],
    },
    6: {
      introMd: `## Social & Ethical Impact Workshop`,
      quiz1: [
        { q: 'A new app helps the deaf community communicate AND collects voice samples for training. The most CSP-aligned framing is ___', opts: ['only the benefit to deaf users, with no further consideration of how voice samples are reused.', 'evaluate stakeholders: benefits to direct users PLUS privacy / consent for voice samples and downstream use.', 'only the implementation cost of building the underlying voice-sample collection and training pipeline.', 'only the transport-layer security between the app and the server that receives the voice samples.'], a: 1, exp: 'Stakeholder + privacy + consent analysis.' },
        { q: 'A "neutral" app exposes a digital divide because some students lack home internet. The most CSP-aligned response is ___', opts: ['ignore the divide on the grounds that home connectivity is the family\'s responsibility, not the school\'s.', 'provide alternative access (devices, hotspots, library hours) AND evaluate whether the design degrades gracefully.', 'upgrade the school\'s outbound transport-layer security to a newer version on every classroom workstation.', 'compress the app\'s assets more aggressively so the existing connections will load slightly faster.'], a: 1, exp: 'Alternative access + design-time consideration.' },
      ],
      contentMd: `## Worked: Stakeholder Analysis Of A New Tool

| Stakeholder | Benefit | Risk |
|------------|---------|------|
| End users | Faster task completion | Data collected |
| Workers | New roles | Displacement of older roles |
| Vulnerable groups | Possibly better access | Possibly worse if poorly designed |
| Society | Productivity gains | Concentration of power |

## Worked: Bias Audit Sketch

1. Define metric (accuracy, error rate, false-positive rate).
2. Compute the metric across demographic groups.
3. Investigate and report disparities.
4. Iterate design / data; re-test.
5. Document the audit process.

## Worked: Responsible AI Use

| Question | Why it matters |
|---------|----------------|
| Where did training data come from? | Provenance & consent. |
| Who is over / under represented? | Bias risk. |
| What can go wrong if the model is wrong? | Stakes. |
| Is there human review? | Accountability. |
| Is there recourse for affected users? | Justice. |`,
      inputs: {
        prompts: [
          'A formal exercise to measure bias across demographic groups is called a bias _______.',
          'Identifying everyone who might be affected by a system is called a _______ analysis.',
          'A way for affected users to appeal a system\'s decision is called _______.',
        ],
        answers: ['audit', 'stakeholder', 'recourse'],
        hints: ['Measure + report.', 'Affected parties.', 'Appeal mechanism.'],
        explanation: 'Bias audit, stakeholder analysis, recourse.',
      },
      dropdowns: {
        items: [
          { label: 'A school deploying an automated scheduling tool should also ___', options: ['offer humans a way to override and appeal', 'lock decisions in permanently', 'forbid all overrides', 'compress logs'] },
          { label: 'A bias audit reports ___', options: ['error rates broken down by relevant groups', 'compression ratio', 'TLS handshake time', 'IPv6 latency'] },
          { label: 'Stakeholder analysis explicitly includes ___', options: ['vulnerable populations who may be hardest hit', 'only paying customers', 'only developers', 'only managers'] },
        ],
        correct: ['offer humans a way to override and appeal', 'error rates broken down by relevant groups', 'vulnerable populations who may be hardest hit'],
        hints: ['Recourse.', 'Disaggregated metrics.', 'Inclusive list.'],
        explanation: 'Override + recourse, group-level metrics, inclusive stakeholder lists.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Always do stakeholder analysis (including vulnerable populations).
- Bias audits: report metrics by group, not just overall.
- Build in human override + recourse for high-stakes decisions.`,
      applied: [
        { q: 'A team launches a hiring screener. The most CSP-aligned ethical guard is ___', opts: ['no formal guard at all, on the grounds that the screener\'s training data is statistically representative.', 'audit pass-rates by demographic group, document criteria, allow human review, and let candidates appeal.', 'compress incoming resumes more aggressively so the screener\'s decisions execute faster on each application.', 'switch the screener\'s outbound traffic from TCP to UDP so that pass-rate decisions arrive sooner downstream.'], a: 1, exp: 'Audit + transparency + review + appeal.' },
        { q: 'A volunteer crowdsources a community map. The most CSP-aligned guardrail against vandalism is ___', opts: ['no guardrail at all, on the grounds that volunteer contributors will self-police one another\'s edits.', 'governance: clear contribution policy, trusted moderators, change history, and well-defined escalation paths.', 'transport-layer security on every contributor\'s connection, with no other defenses against vandalism added.', 'aggressive compression of every map tile, with no other defenses against contributor-introduced vandalism.'], a: 1, exp: 'Crowdsourcing + governance.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Social & Ethical Impacts`,
      quiz1: [
        { q: 'Computing innovations typically have ___', opts: ['only positive effects on every population they reach across society as a whole.', 'both positive AND negative effects, often unevenly distributed across stakeholder groups.', 'only negative effects on every population that they reach in any direct or indirect way.', 'no measurable effects at all on the populations they reach in any direct or indirect way.'], a: 1, exp: 'Dual-use is the rule.' },
        { q: 'A "digital divide" refers to ___', opts: ['differences between popular file-compression formats used by different operating systems', 'unequal access to computing and connectivity, which leads to unequal opportunity in society', 'transport-layer-security version mismatches between web browsers and the servers they call', 'differences between IPv4 and IPv6 addressing across consumer-grade home internet connections'], a: 1, exp: 'Digital divide = unequal access.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Beneficial / harmful effects | Both come with most innovations. |
| Stakeholders | Anyone affected, directly or indirectly. |
| Bias | Systematic outcome disparities. |
| Mis / dis / mal information | False or misleading information by intent. |
| Network effects | Value scales with users. |
| Algorithmic amplification | Optimizers boost what gets engagement. |
| Digital divide | Unequal access to computing. |
| Transparency / accountability / recourse | Three ethical-design properties. |
| Contextual integrity | Data should flow as the original context expected. |
| Open vs. closed | Modify-friendly vs. controlled platforms. |

## Common Pitfalls

- Listing only benefits or only harms.
- Forgetting indirect stakeholders.
- "It wasn\'t intentional" treated as exoneration.
- Treating algorithm output as objective truth.
- Ignoring environmental and labor impacts.
- Over-trusting AI / hallucinations.`,
      inputs: {
        prompts: [
          'Inequality of access to computing and connectivity is called the digital _______.',
          'The principle that data should flow consistently with original-context norms is called contextual _______.',
          'AI outputs that are confident but factually wrong are called _______.',
        ],
        answers: ['divide', 'integrity', 'hallucinations'],
        hints: ['Access gap.', 'Norm-respecting flow.', 'Confident-wrong AI.'],
        explanation: 'Digital divide / contextual integrity / hallucinations.',
      },
      dropdowns: {
        items: [
          { label: 'A high-stakes algorithmic decision should provide ___', options: ['transparency, accountability, and recourse', 'only the result', 'no documentation', 'no appeal'] },
          { label: 'AI training-data ethics centers on ___', options: ['provenance, consent, attribution, and bias', 'compression ratio', 'TLS handshake', 'IPv6 routing'] },
          { label: 'Computing innovations\' impacts are typically ___', options: ['unevenly distributed across groups', 'identical for everyone', 'always negligible', 'always positive'] },
        ],
        correct: ['transparency, accountability, and recourse', 'provenance, consent, attribution, and bias', 'unevenly distributed across groups'],
        hints: ['Three properties.', 'AI ethics.', 'Equity matters.'],
        explanation: 'Three ethical properties, AI training ethics, unequal impact.',
      },
      strategyMd: `## Final Exam Tips

- Stakeholder + benefit + harm framing for every impact question.
- Bias is real; audit and address.
- Algorithm choices are policy choices; design transparency, accountability, and recourse in.
- Digital divide framing for access questions.
- AI raises new authorship, consent, and accuracy concerns.`,
      applied: [
        { q: 'A new translation app makes communication easier across languages but reinforces stereotypes through gendered defaults. The most CSP-aligned response is ___', opts: ['ignore the stereotypes on the grounds that the underlying translation accuracy is statistically high overall.', 'audit outputs across demographic groups, document the issue, fix gendered defaults, and offer overrides.', 'remove the translation app entirely from circulation rather than attempt to fix the underlying defaults.', 'compress the app\'s training data more aggressively so the gendered defaults will be harder to surface.'], a: 1, exp: 'Audit + fix + user agency.' },
        { q: 'A school district deploys an algorithm to allocate counseling resources. The MOST important guardrails are ___', opts: ['no specific guardrails, on the grounds that any algorithm that ships in production has already been reviewed.', 'transparent criteria, human review of high-stakes decisions, bias audits across student groups, and an appeal path.', 'transport-layer security on the algorithm\'s outbound traffic, with no other guardrails on its decision process.', 'aggressive compression of the algorithm\'s training data, with no other guardrails on its decision process at all.'], a: 1, exp: 'Full ethical-design framing for high-stakes algorithms.' },
      ],
    },
  },
};

export const bi5ExtraTopics: Topic[] = [cspSafeComputing, cspSocialEthicalImpacts];
