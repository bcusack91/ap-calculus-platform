// BI2 — csp-binary-data. Bespoke AP-quality content.

import type { Topic } from '../types';
import { bi2ExtraTopics } from './bi2-extra';

const cspBinaryData: Topic = {
  slug: 'csp-binary-data',
  display: 'Binary & Data Representation',
  emoji: '🔢',
  exportPrefix: 'cspBinaryData',
  idPrefix: 'cspbd',
  parts: {
    2: {
      introMd: `## How Computers Encode Everything in Binary

A computer represents every kind of data — numbers, text, images, sound — using only two digits: **0 and 1**. The trick is **agreement**: a sender and receiver agree on a code, then the same bit pattern can mean a number, a letter, or a pixel color.

| Data type | Encoding scheme |
|-----------|-----------------|
| Whole number | Place values 1, 2, 4, 8, 16, … (binary) |
| Text | A code mapping bit pattern → character (e.g., ASCII) |
| Color (pixel) | Three numbers: R, G, B — each 8 bits |
| Sound | Repeated samples of air-pressure amplitude |`,
      quiz1: [
        { q: 'A sequence of 8 bits (1 byte) can represent how many distinct values?', opts: ['8', '16', '128', '256'], a: 3, exp: '2⁸ = 256.' },
        { q: 'What is the decimal value of the 8-bit binary number 00010110?', opts: ['11', '22', '24', '44'], a: 1, exp: 'Place values 16 + 4 + 2 = 22.' },
      ],
      contentMd: `## Reading Binary Like a Pro

To convert binary to decimal, line up the bits with their place values from the right and add the place values where the bit is 1.

| Place value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-------------|-----|----|----|----|---|---|---|---|
| Bit | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |

Sum the places where the bit is 1: 64 + 16 + 8 + 1 = **89**.

## Going The Other Way

To convert decimal → binary, repeatedly subtract the largest power of 2 that fits.

Convert **45**:

- 32 fits → bit on; remainder 13.
- 16 doesn't fit; bit off.
- 8 fits → bit on; remainder 5.
- 4 fits → bit on; remainder 1.
- 2 doesn't fit; bit off.
- 1 fits → bit on; remainder 0.

Result: **00101101** (8 bits).

## Why "n bits = 2ⁿ values"

Each new bit doubles the patterns:

| Bits | Patterns |
|------|---------|
| 1 | 2 |
| 2 | 4 |
| 4 | 16 |
| 8 | 256 |
| 16 | 65,536 |
| 32 | ~4.3 billion |

Memorize 2⁸ = 256 and 2¹⁶ = 65,536 — both appear constantly on the AP exam.`,
      inputs: {
        prompts: [
          'A single binary digit (0 or 1) is called a _______.',
          'The number of distinct values that can be represented with n bits is 2 to the _______ power.',
          'The decimal number 5 in 4-bit binary is _______.',
        ],
        answers: ['bit', 'n', '0101'],
        hints: ['Short for "binary digit".', 'The exponent equals the number of bits.', '4 + 1 with place values 8, 4, 2, 1.'],
        explanation: 'Bit = binary digit. n bits → 2ⁿ patterns. 5 = 4 + 1 = 0101.',
      },
      dropdowns: {
        items: [
          { label: 'Binary 11000000 in decimal is ___', options: ['96', '128', '192', '224'] },
          { label: '2¹⁰ equals ___', options: ['100', '256', '1024', '2048'] },
          { label: 'A 4-bit number can store ___ distinct values', options: ['4', '8', '16', '32'] },
        ],
        correct: ['192', '1024', '16'],
        hints: ['128 + 64.', 'About 1000 — the "kilo" of computing.', '2⁴.'],
        explanation: '11000000 = 128 + 64 = 192. 2¹⁰ = 1024 (the "k" in KiB). 2⁴ = 16.',
      },
      strategyMd: `## AP Exam Strategy: Binary Conversions

- Write the place-value row first; then plug in the bits.
- Memorize: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2¹⁰=1024.
- Decimal → binary: greedy subtraction by largest power of 2.
- For "how many bits do I need to represent N values?" use ⌈log₂ N⌉.`,
      applied: [
        { q: 'A school ID system needs to give each of 600 students a unique binary code. What is the minimum number of bits required?', opts: ['8', '9', '10', '12'], a: 2, exp: '2⁹ = 512 < 600; 2¹⁰ = 1024 ≥ 600. So 10 bits.' },
        { q: 'A device samples sensor values from 0 to 7 and stores each in the smallest number of bits possible. After 1,000,000 samples, total storage is ___', opts: ['1,000,000 bytes', '375,000 bytes', '8,000,000 bytes', '125,000 bytes'], a: 1, exp: '8 values need 3 bits; 1,000,000 × 3 / 8 = 375,000 bytes.' },
      ],
    },
    3: {
      introMd: `## Patterns of Encoding

Computers use **conventions** to encode data types. Understanding the convention is half the work.

| Convention | Pattern |
|-----------|---------|
| **Unsigned integer** | Plain place-value binary. |
| **Signed integer** | Reserves one bit for sign (e.g., two's complement). |
| **Text (ASCII)** | 7-bit code; "A" = 65, "a" = 97. |
| **Text (Unicode)** | Variable-length; supports every script. |
| **RGB color** | Three 8-bit channels: 0–255 red, green, blue. |
| **Sample (audio)** | Integer amplitude, repeated at sample rate. |`,
      quiz1: [
        { q: 'In ASCII the letter "A" is 65. The letter "B" is ___', opts: ['64', '65', '66', '97'], a: 2, exp: 'ASCII assigns consecutive code points to letters in order.' },
        { q: 'A pure red pixel in 24-bit RGB has the byte values ___', opts: ['(0, 0, 0)', '(255, 0, 0)', '(255, 255, 0)', '(255, 255, 255)'], a: 1, exp: 'Maximum red, no green or blue.' },
      ],
      contentMd: `## Worked Example: Decoding Text

Bytes: 72, 73, 33

- 72 = "H"
- 73 = "I"
- 33 = "!"

Output: **HI!** Since text is just numbers under an agreed mapping, *any* file is bytes — the difference is only how the program *interprets* them.

## Worked Example: Building a Color

A pixel is three bytes. To make a strong purple:

| Channel | Value (0–255) |
|---------|---------------|
| R | 128 |
| G | 0 |
| B | 128 |

In hex (the form you see in CSS): **#800080**. Each pair of hex digits = one byte (0x80 = 128).

## Worked Example: Interpreting Audio

A WAV-style audio file stores **samples** of air-pressure amplitude:

- **Sample rate**: how many samples per second (e.g., 44,100 Hz for CD quality).
- **Bit depth**: bits per sample (e.g., 16 bits → 65,536 possible amplitudes).
- **Channels**: 1 (mono) or 2 (stereo).

A 60-second 16-bit stereo CD-quality clip = 60 × 44,100 × 2 (bytes/sample) × 2 (channels) = **10.6 MB**.`,
      inputs: {
        prompts: [
          'In ASCII the letters A and a have code points 65 and _______.',
          'A 24-bit RGB pixel uses _______ bytes.',
          'A digital audio file is built from repeated _______ of amplitude.',
        ],
        answers: ['97', '3', 'samples'],
        hints: ['Lowercase is 32 above uppercase.', 'One per channel.', 'Discrete time slices.'],
        explanation: 'ASCII a = 97 (A + 32). 24 bits = 3 bytes. Audio = sequence of amplitude samples.',
      },
      dropdowns: {
        items: [
          { label: 'A pixel with R=255, G=255, B=255 appears ___', options: ['black', 'white', 'red', 'blue'] },
          { label: 'A pixel with R=0, G=0, B=0 appears ___', options: ['white', 'gray', 'black', 'transparent'] },
          { label: 'Doubling the sample rate of a digital audio file ___ the file size', options: ['halves', 'leaves unchanged', 'doubles', 'quadruples'] },
        ],
        correct: ['white', 'black', 'doubles'],
        hints: ['All channels max.', 'All channels off.', 'Twice as many samples per second.'],
        explanation: '255 across all channels is white; 0 across all is black. Doubling the sample rate doubles the bytes-per-second.',
      },
      strategyMd: `## AP Exam Strategy: Encoding Conventions

- "How many bytes for a pixel?" → 3 bytes for 24-bit RGB; 4 bytes if there's an alpha channel.
- "How many bytes per second of audio?" → sampleRate × bytesPerSample × channels.
- ASCII letter math: subtract 65 to get the alphabetical position of an uppercase letter.
- Hex pairs = bytes. #FF0000 = 255-0-0 = bright red.`,
      applied: [
        { q: 'A 1024 × 768 image is stored uncompressed as 24-bit RGB. Approximate file size?', opts: ['100 KB', '786 KB', '2.4 MB', '24 MB'], a: 2, exp: '1024 × 768 × 3 bytes ≈ 2.4 MB.' },
        { q: 'A 5-minute song is stored at 44,100 Hz, 16-bit, stereo (uncompressed). Closest size?', opts: ['5 MB', '25 MB', '50 MB', '500 MB'], a: 2, exp: '300 s × 44,100 × 2 × 2 ≈ 53 MB.' },
      ],
    },
    4: {
      introMd: `## Why Binary Connects To Everything Else

The "everything is bits" idea makes the rest of the course possible.

| Topic | Connection |
|-------|-----------|
| **Internet (BI 4)** | All packets are bits, regardless of media (fiber, copper, radio). |
| **Algorithms (BI 3)** | Algorithms manipulate bit patterns — search, sort, compress. |
| **Compression (BI 2)** | Encode the same data in fewer bits. |
| **Security (BI 4)** | Encryption transforms bits into other bits unreadable without a key. |
| **Impact (BI 5)** | A digital file is trivial to copy and share — that changes society. |`,
      quiz1: [
        { q: 'A photograph and an audio clip are sent over the same network connection. From the network\'s perspective, ___', opts: ['the photograph travels faster.', 'both are sequences of bits and travel through the same packets.', 'the audio clip is stored as text.', 'photographs need a special "photo channel".'], a: 1, exp: 'On the wire, all data is bits packaged into packets.' },
        { q: 'A 100 KB text file is encrypted into a different 100 KB file. The encrypted bytes ___', opts: ['no longer need any encoding scheme.', 'still represent some bit pattern, just not meaningful as text without the key.', 'cannot be sent over the Internet.', 'are guaranteed to be smaller.'], a: 1, exp: 'Encryption is a transformation of bits, not a removal of bits.' },
      ],
      contentMd: `## Bits Are Format-Agnostic

A network router doesn't know whether the bits it forwards are an image, a song, or a chess move. It only knows source/destination headers and the payload bits. This is why a single Internet works for so many uses — the binary layer is universal.

## Same Bytes, Different Meaning

A 4-byte sequence 01000001 01000010 01000011 01000100 could mean:

- **Text (ASCII)**: "ABCD"
- **Four small unsigned integers**: 65, 66, 67, 68
- **One 32-bit unsigned integer**: 1,094,861,636
- **Pixels**: ¼ of a row of an image (each byte a grayscale level)

The interpretation lives in the program reading the file, not in the file itself. **File extensions** (".txt", ".png") and **headers** (magic bytes at the start of the file) tell programs how to interpret bytes.

## Lossless Encoding Connections

Compression (next part) takes a bit pattern and produces a shorter one that decodes back to the same original. Encryption takes a bit pattern and produces a same-length one that only decodes with a key. Both rely on the universality of bits.`,
      inputs: {
        prompts: [
          'On a network, all data — text, image, video — is transmitted as _______.',
          'The same byte sequence can have different meanings depending on how the program _______ it.',
          'A short magic-bytes signature at the start of a file tells programs the file _______.',
        ],
        answers: ['bits', 'interprets', 'format'],
        hints: ['The base-2 universal layer.', 'Reading-side decision.', 'PNG, JPEG, GIF — these are all formats.'],
        explanation: 'All network data = bits. Bytes need an interpretation. File format is signaled by headers and extensions.',
      },
      dropdowns: {
        items: [
          { label: 'Encrypting a 1 MB document produces a ciphertext that is approximately ___', options: ['1 MB', '0.5 MB', '2 MB', '0 bytes'] },
          { label: 'A network router primarily reads ___ when forwarding a packet', options: ['the headers (source / destination)', 'the file extension', 'the encryption key', 'the user\'s name'] },
          { label: 'The same 8 bits 01000001 mean "A" only when interpreted as ___', options: ['ASCII text', 'an audio sample', 'a CSS color', 'a Wi-Fi password'] },
        ],
        correct: ['1 MB', 'the headers (source / destination)', 'ASCII text'],
        hints: ['Encryption preserves length (roughly).', 'Routers care about routing.', 'Interpretation gives meaning.'],
        explanation: 'Encryption preserves size. Routers route by header. Interpretation gives bit patterns meaning.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Binary Questions

- "How is X transmitted on the Internet?" → bits, regardless of X.
- "What does a byte sequence MEAN?" → the encoding scheme decides.
- Encryption and compression are both bit-pattern transformations.
- File extension ≠ guarantee: malicious bytes can be mislabeled. (Hence: never rely on extension for security.)`,
      applied: [
        { q: 'A video conferencing app simultaneously sends video frames, audio samples, and chat text. From a network standpoint, ___', opts: ['each of the three media must travel on its own physically separate channel between the endpoints.', 'all three are sequences of bits sent in packets, distinguished by metadata in the application protocol.', 'the video stream bypasses transport-layer encryption while the audio and chat streams are still encrypted.', 'the chat text must arrive at the recipient before any of the video frames or audio samples are processed.'], a: 1, exp: 'Different media share the same physical and Internet protocols; the application layer separates them.' },
        { q: 'A user receives a file labeled "vacation.jpg" but the file\'s magic bytes correspond to a Windows executable. What is the most accurate concern?', opts: ['The image will simply appear inverted or color-shifted when the user opens it in a normal image viewer.', 'The file extension can be misleading; opening the file as an executable may run unexpected code on the device.', 'A file\'s magic bytes are guaranteed by the operating system to always match the file extension on disk.', 'There is no concern at all, since file extensions on a downloaded file always honestly describe the contents.'], a: 1, exp: 'Mismatched magic bytes / extensions are a classic malware-delivery technique.' },
      ],
    },
    5: {
      introMd: `## How Storage And Encoding Have Scaled

Storage costs have collapsed and bit budgets have grown. The same data that filled a hard drive in 2000 fits in a phone\'s photo cache today.

| Era | Typical "lots of data" |
|-----|------------------------|
| 1980s | Megabytes. ASCII text dominated. |
| 1990s | Hundreds of MB. JPEG and MP3 made images/audio mainstream. |
| 2000s | Gigabytes. DVDs, MP3 collections, digital cameras. |
| 2010s | Terabytes. Streaming video became default. |
| 2020s | Petabytes (in datacenters). 4K, 8K video, AI training datasets. |`,
      quiz1: [
        { q: 'Why has streaming video become practical?', opts: ['Bits got smaller.', 'Compression algorithms and bandwidth both improved dramatically.', 'Video files no longer use bytes.', 'Cameras stopped using color.'], a: 1, exp: 'Better codecs (H.264 → H.265 → AV1) plus higher bandwidth made streaming feasible.' },
        { q: 'Which choice trades **smaller file size for some loss of fidelity**?', opts: ['Lossless compression (e.g., ZIP, PNG).', 'Lossy compression (e.g., JPEG, MP3).', 'No compression.', 'Encryption.'], a: 1, exp: 'Lossy compression discards information humans rarely notice.' },
      ],
      contentMd: `## Lossless vs. Lossy

| Type | Guarantee | Examples | When to use |
|------|----------|----------|-------------|
| **Lossless** | Decoded data = original, bit for bit. | ZIP, PNG, FLAC | Documents, source code, medical imaging. |
| **Lossy** | Decoded data is approximately the original. | JPEG, MP3, MP4 | Photos, music, video where small artifacts are tolerable. |

## Why Both Exist

- **Lossless** can\'t compress beyond a hard math limit (entropy). For a truly random file, no lossless compression helps.
- **Lossy** can compress much further by exploiting human perception (we don\'t notice many high frequencies in audio or subtle color shifts in images).

A 24-bit RGB photo: ~6 MB raw, ~600 KB as JPEG (10× smaller, almost identical to the eye).

## Storage Scaling Has Changed Behavior

- Cheap storage made it normal to keep **everything** (logs, backups).
- AI training relies on **datasets** that would have been physically impossible to store in 2000.
- Cheap copies = quick spread = new questions about consent, copyright, and privacy.`,
      inputs: {
        prompts: [
          'Compression that decodes back to a bit-for-bit identical original is called _______.',
          'Compression that throws away some data to shrink the file is called _______.',
          'JPEG and MP3 are examples of _______ compression.',
        ],
        answers: ['lossless', 'lossy', 'lossy'],
        hints: ['No information is lost.', 'Some information is lost.', 'They exploit human perception.'],
        explanation: 'Lossless preserves; lossy approximates. JPEG/MP3 are canonical lossy formats.',
      },
      dropdowns: {
        items: [
          { label: 'For a legal contract you should use ___ compression', options: ['lossless', 'lossy', 'no compression', 'JPEG'] },
          { label: 'For a photograph attached to a casual email, ___ compression is usually fine', options: ['lossy', 'lossless', 'no compression', 'encryption'] },
          { label: 'The reason lossless compression cannot shrink truly random data is the ___ limit', options: ['entropy', 'bandwidth', 'sampling', 'pixel'] },
        ],
        correct: ['lossless', 'lossy', 'entropy'],
        hints: ['Every character matters.', 'Eye-acceptable artifacts are fine.', 'Information-theoretic minimum.'],
        explanation: 'Use lossless when fidelity matters. Use lossy when perceptual loss is acceptable. Entropy bounds lossless compression.',
      },
      strategyMd: `## AP Exam Strategy: Compression Choices

- "Original must be perfectly recoverable" → lossless.
- "File needs to be much smaller and small artifacts are okay" → lossy.
- "JPEG / MP3 / MP4" = lossy. "ZIP / PNG / FLAC" = lossless.
- Storage growth doesn\'t eliminate need for compression; it just changes the threshold of what\'s feasible.`,
      applied: [
        { q: 'A radiologist needs to share a chest X-ray for diagnosis. Which compression choice is most appropriate?', opts: ['Lossy JPEG compression, because making the image file size as small as possible matters most.', 'Lossless compression (e.g., DICOM with lossless coding) so subtle diagnostic features are not lost.', 'No compression at all, since uncompressed is the only way to preserve diagnostic features in any image.', 'Lossy MP3 compression, on the grounds that it is the most widely supported lossy format on the internet.'], a: 1, exp: 'Diagnosis requires preservation of fine detail; lossless is the standard for medical imaging.' },
        { q: 'A streaming service must deliver a movie to millions over varying connection speeds. The most appropriate strategy is ___', opts: ['send the raw uncompressed video file to every viewer regardless of their actual connection speed.', 'use lossy compression at multiple bitrates and adapt to each viewer\'s available bandwidth in real time.', 'use only lossless compression formats and force every viewer to wait for the complete file to download.', 'send only the audio track to viewers on slower connections and skip the video portion of the movie entirely.'], a: 1, exp: 'Adaptive lossy streaming (multiple bitrates) is the modern standard.' },
      ],
    },
    6: {
      introMd: `## Binary & Data Workshop

Practice the calculations and design choices the AP exam asks under a time crunch.`,
      quiz1: [
        { q: 'A system needs to assign a unique binary code to each of 50 students. The minimum number of bits required is ___', opts: ['5', '6', '7', '8'], a: 1, exp: '2⁵ = 32 < 50; 2⁶ = 64 ≥ 50.' },
        { q: 'Convert binary 10110010 to decimal.', opts: ['170', '178', '180', '210'], a: 1, exp: '128 + 32 + 16 + 2 = 178.' },
      ],
      contentMd: `## Worked: Bit-Width Sizing

**Question:** "We have 5 different statuses to encode in each record. Minimum bits per record?"

- 2² = 4 (too small).
- 2³ = 8 ≥ 5 ✓.
- Use **3 bits**.

**Question:** "We have 1,000,000 user IDs. Minimum bits per ID?"

- 2¹⁹ = 524,288 (too small).
- 2²⁰ = 1,048,576 ≥ 1M ✓.
- Use **20 bits**.

## Worked: Storage Estimation

**Question:** "Estimate the storage for 10,000 1024×1024 RGB photos, uncompressed."

- One photo: 1024 × 1024 × 3 ≈ 3 MB.
- 10,000 photos: ~30 GB.

**With JPEG (~10×):** ~3 GB.

## Worked: Conversions Both Ways

| Decimal | Binary (8-bit) |
|---------|---------------|
| 5 | 00000101 |
| 17 | 00010001 |
| 64 | 01000000 |
| 100 | 01100100 |
| 200 | 11001000 |
| 255 | 11111111 |`,
      inputs: {
        prompts: [
          'For 100 students, the minimum bits required for unique IDs is _______.',
          'A 32-bit number can store roughly _______ billion distinct values.',
          'Binary 11111111 in decimal is _______.',
        ],
        answers: ['7', '4', '255'],
        hints: ['2⁶ = 64 < 100; 2⁷ = 128 ≥ 100.', '2³² ≈ 4.3 × 10⁹.', 'Sum 1+2+4+…+128.'],
        explanation: '7 bits suffice. 2³² ≈ 4 billion. 11111111 = 255.',
      },
      dropdowns: {
        items: [
          { label: 'Decimal 100 in 8-bit binary is ___', options: ['01100100', '01100110', '10100100', '01101000'] },
          { label: 'A 24-bit RGB pixel can show ___ distinct colors', options: ['~16 million', '~256', '~65,000', '~4 billion'] },
          { label: 'For uncompressed CD-quality audio, 1 second of stereo is about ___', options: ['176 KB', '44 KB', '1.4 MB', '11 MB'] },
        ],
        correct: ['01100100', '~16 million', '176 KB'],
        hints: ['64 + 32 + 4.', '2²⁴ = 16,777,216.', '44,100 × 2 bytes × 2 channels = 176,400 bytes.'],
        explanation: '100 = 64 + 32 + 4. 2²⁴ ≈ 16 million colors. CD audio ≈ 176 KB/s stereo.',
      },
      strategyMd: `## AP Exam Strategy: Quick Calculations

- For "minimum bits for N values" → smallest n where 2ⁿ ≥ N.
- For "storage of M items, each k bits" → M·k / 8 bytes.
- For audio: bytes/sec = sampleRate × bytesPerSample × channels.
- For images: bytes = width × height × bytesPerPixel.
- Don\'t worry about hex on the AP — it\'s rarely tested. Decimal/binary conversions and 2ⁿ values are the core.`,
      applied: [
        { q: 'A weather station records temperature once per minute as an 8-bit value. How much storage for one year?', opts: ['~525 KB', '~525 KB but compressed', '~525 bytes', '~525 GB'], a: 0, exp: '60·24·365 = 525,600 samples × 1 byte ≈ 525 KB.' },
        { q: 'A school stores 24-bit RGB profile photos for 50,000 students at 200 × 200 pixels each, uncompressed. Total storage?', opts: ['~6 GB', '~600 MB', '~60 MB', '~6 MB'], a: 0, exp: 'One photo: 200·200·3 = 120,000 bytes ≈ 120 KB. ×50,000 ≈ 6 GB.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Binary & Data

Final cheat sheet of the binary and data-representation facts most tested on the AP exam.`,
      quiz1: [
        { q: 'The smallest unit of digital information is the ___', opts: ['byte', 'bit', 'pixel', 'sample'], a: 1, exp: 'A bit is one binary digit (0 or 1). A byte = 8 bits.' },
        { q: 'To represent each of 1,000 distinct values, the minimum number of bits required is ___', opts: ['8', '9', '10', '12'], a: 2, exp: '2⁹ = 512 < 1000; 2¹⁰ = 1024 ≥ 1000.' },
      ],
      contentMd: `## Quick-Reference Table

| Memorize | Value |
|----------|-------|
| 1 byte | 8 bits |
| 2⁸ | 256 |
| 2¹⁰ | 1,024 (≈ 1 KB) |
| 2¹⁶ | 65,536 |
| 2²⁰ | ≈ 1 million (≈ 1 MB) |
| 2³² | ≈ 4.3 billion (≈ 4 GB) |

## Common Misconceptions to Avoid

- "Binary uses 0 and 1 because computers think in numbers." (No — because hardware reliably represents two voltage levels.)
- "Lossy compression destroys the file." (No — it produces a smaller approximation; original can be saved separately.)
- "More bits is always better." (No — wasted bits = wasted storage / bandwidth. Use the minimum sufficient.)
- "Encryption shrinks data." (No — it transforms data; size stays roughly the same.)

## Common Calculations

- Min bits for N values: ⌈log₂ N⌉.
- Image bytes: W × H × bytesPerPixel.
- Audio bytes/sec: sampleRate × bytesPerSample × channels.
- Total storage of M items × k bytes each: M·k.`,
      inputs: {
        prompts: [
          '8 bits = 1 _______.',
          'The binary number 10000000 in decimal equals _______.',
          'For 1,000,000 distinct IDs, the minimum number of bits required is _______.',
        ],
        answers: ['byte', '128', '20'],
        hints: ['Standard grouping unit.', 'Place value 128.', '2²⁰ ≈ 1,048,576.'],
        explanation: '8 bits = 1 byte. 10000000₂ = 128. 20 bits cover 1M values.',
      },
      dropdowns: {
        items: [
          { label: 'PNG is a ___ image format', options: ['lossless', 'lossy', 'audio-only', 'video'] },
          { label: 'JPEG is a ___ image format', options: ['lossy', 'lossless', 'text', 'audio'] },
          { label: 'Encrypting a file changes its ___', options: ['interpretation, not size (roughly)', 'size dramatically', 'magic bytes only', 'pixel count'] },
        ],
        correct: ['lossless', 'lossy', 'interpretation, not size (roughly)'],
        hints: ['PNG round-trips perfectly.', 'JPEG sacrifices fidelity for size.', 'Same byte count, different meaning.'],
        explanation: 'PNG = lossless, JPEG = lossy. Encryption preserves roughly the same byte count.',
      },
      strategyMd: `## Final Exam Tips

- "Smallest number of bits to represent N values" → ⌈log₂ N⌉. Always.
- Distinguish lossless (perfectly reversible) from lossy (approximate).
- Encryption ≠ compression: encryption preserves size, compression shrinks it.
- Different file types are just different conventions for interpreting the SAME underlying bits.
- For storage estimates, multiply: items × bytes-per-item.`,
      applied: [
        { q: 'A government agency must archive scanned legal documents and ensure they can be read decades from now. The most appropriate format choice is ___', opts: ['A widely supported lossless archival format such as PDF/A or TIFF with lossless compression for the scans.', 'A high-compression lossy JPEG format optimized for the smallest file size that the human eye still tolerates.', 'A proprietary single-vendor format whose specification is not publicly documented or supported by other tools.', 'A plain ASCII text representation of each document, with no embedded image data preserved from the original scan.'], a: 0, exp: 'Lossless + open/standardized formats best support long-term archival fidelity.' },
        { q: 'A research dataset with 4 billion records needs a unique integer ID per record. Which integer width is most appropriate?', opts: ['8-bit unsigned integers, which allow up to 256 distinct values per record across the entire dataset.', '16-bit unsigned integers, which allow up to 65,536 distinct values per record across the entire dataset.', '32-bit unsigned integers, which allow up to about 4.3 billion distinct values across the entire dataset.', '64-bit unsigned integers as the only sufficient option, since smaller widths cannot represent the dataset.'], a: 2, exp: '2³² ≈ 4.29 billion ≥ 4 billion. 32-bit is the smallest sufficient size.' },
      ],
    },
  },
};

export const bi2Topics: Topic[] = [cspBinaryData, ...bi2ExtraTopics];
