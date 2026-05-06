/**
 * Entrance Quiz — The Internet & Protocols (AP CS Principles)
 * 14 questions · 7 parts (2 per part)
 * Big Idea 4: protocols, IP addressing, DNS, HTTP, TCP/UDP, scalability, redundancy.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cspi-ent-1a', question: 'A network protocol is BEST described as:', options: ['A piece of physical hardware', 'An agreed-upon set of rules that govern how data is formatted and transmitted between devices', 'A type of operating system', 'A user’s password'], correctIndex: 1, explanation: 'Protocols are shared rules. Devices from any manufacturer can interoperate as long as they follow the same protocol.', partNumber: 1, partTitle: 'Protocols' },
  { id: 'cspi-ent-1b', question: 'Standard protocols are valuable PRIMARILY because they:', options: ['Make every device use the same brand', 'Allow devices made by different manufacturers to interoperate', 'Eliminate the need for hardware', 'Slow down communication'], correctIndex: 1, explanation: 'Open standards let any compliant device communicate with any other compliant device, enabling massive interoperability.', partNumber: 1, partTitle: 'Protocols' },
  { id: 'cspi-ent-2a', question: 'An IP address is BEST described as:', options: ['A unique numeric identifier assigned to a device on a network', 'A type of cable', 'A web browser', 'A user’s email address'], correctIndex: 0, explanation: 'IP addresses (e.g., 172.217.0.46) identify devices so packets can be routed to them.', partNumber: 2, partTitle: 'IP & Addressing' },
  { id: 'cspi-ent-2b', question: 'IPv6 was developed PRIMARILY because:', options: ['IPv4 addresses are too long to remember', 'The number of devices on the Internet exceeded what IPv4’s ~4.3 billion addresses could uniquely identify', 'IPv6 is required by law', 'IPv4 was made by a single company'], correctIndex: 1, explanation: 'IPv6 expands the address space dramatically (128 bits vs 32 bits) to support billions of new devices.', partNumber: 2, partTitle: 'IP & Addressing' },
  { id: 'cspi-ent-3a', question: 'When a user types www.example.com into a browser, which system translates that name into the IP address of the server?', options: ['HTTP', 'DNS (Domain Name System)', 'TCP', 'HTML'], correctIndex: 1, explanation: 'DNS is the “phone book of the Internet” — it translates human-readable domain names into IP addresses.', partNumber: 3, partTitle: 'DNS & Names' },
  { id: 'cspi-ent-3b', question: 'Caching DNS lookups MAINLY:', options: ['Encrypts the URL', 'Reduces lookup time and load on DNS servers for popular domains', 'Removes the need for IP addresses entirely', 'Forces use of IPv4 only'], correctIndex: 1, explanation: 'Caching avoids repeating the same lookup, speeding up access and reducing traffic on root and authoritative servers.', partNumber: 3, partTitle: 'DNS & Names' },
  { id: 'cspi-ent-4a', question: 'TCP differs from UDP MAINLY in that TCP:', options: ['Is faster but unreliable', 'Provides reliable, in-order delivery with retransmission of lost packets', 'Cannot be used over the Internet', 'Encrypts data automatically'], correctIndex: 1, explanation: 'TCP guarantees ordered, complete delivery (with retransmission). UDP is faster but does not guarantee delivery or order — better for live streaming and games.', partNumber: 4, partTitle: 'TCP, UDP & HTTP' },
  { id: 'cspi-ent-4b', question: 'HTTP is the protocol used PRIMARILY for:', options: ['Sending email between mail servers', 'Transferring web pages and resources between browsers and web servers', 'Routing IP packets', 'Translating domain names to IPs'], correctIndex: 1, explanation: 'HTTP is the application-layer protocol that browsers use to request web pages from servers and receive responses.', partNumber: 4, partTitle: 'TCP, UDP & HTTP' },
  { id: 'cspi-ent-5a', question: 'The Internet is designed to be scalable and fault tolerant PRIMARILY because:', options: ['It uses a single central server', 'It is decentralized, with redundant paths and distributed control', 'It is owned by one company', 'It uses only one protocol for everything'], correctIndex: 1, explanation: 'Scalability and fault tolerance come from the Internet’s decentralized, redundant design — no single point of failure controls the whole network.', partNumber: 5, partTitle: 'Scalability & Redundancy' },
  { id: 'cspi-ent-5b', question: 'A major undersea cable is severed. Internet traffic between the affected continents:', options: ['Stops completely', 'Is automatically rerouted along other available paths, possibly with degraded performance', 'Is converted to email', 'Is encrypted retroactively'], correctIndex: 1, explanation: 'Redundant paths in the Internet allow traffic to be rerouted around failures — the system degrades gracefully rather than failing entirely.', partNumber: 5, partTitle: 'Scalability & Redundancy' },
  { id: 'cspi-ent-6a', question: 'A user requests https://example.com/page and the page contains 30 images, each fetched separately. The browser MOST likely:', options: ['Sends a single packet for everything', 'Issues multiple HTTP requests, often in parallel, then assembles the page', 'Calls the website owner directly', 'Stops after the first image'], correctIndex: 1, explanation: 'Browsers fetch the HTML, then fire many concurrent HTTP requests for embedded resources (images, CSS, JS), often using HTTP/2 multiplexing.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspi-ent-6b', question: 'A live multiplayer game prefers UDP over TCP MAINLY because:', options: ['UDP guarantees no packets are ever lost', 'Low latency matters more than perfectly ordered delivery; an old position update is useless even if it eventually arrives', 'UDP is more secure than TCP', 'TCP cannot be used in games'], correctIndex: 1, explanation: 'In real-time games, late information is worthless. UDP’s lower overhead and lack of retransmission delays favor responsiveness.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspi-ent-7a', question: 'Which BEST describes how the Internet is governed?', options: ['It is run entirely by one government', 'No single entity controls it; it works through open standards (IETF, W3C, etc.) and cooperating networks', 'A single company owns all infrastructure', 'It is illegal to add devices to it'], correctIndex: 1, explanation: 'The Internet has no central owner. Standards bodies define protocols, and many independent networks (ISPs, organizations, governments) cooperate using those standards.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cspi-ent-7b', question: 'HTTPS differs from HTTP MAINLY in that HTTPS:', options: ['Is faster but less reliable', 'Adds encryption (TLS) so traffic between browser and server cannot be easily read or tampered with by intermediaries', 'Replaces TCP with UDP', 'Eliminates the need for DNS'], correctIndex: 1, explanation: 'HTTPS = HTTP over TLS. It provides confidentiality, integrity, and server authentication for web traffic.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Protocols' },
    { partNumber: 2, partTitle: 'IP & Addressing' },
    { partNumber: 3, partTitle: 'DNS & Names' },
    { partNumber: 4, partTitle: 'TCP, UDP & HTTP' },
    { partNumber: 5, partTitle: 'Scalability & Redundancy' },
    { partNumber: 6, partTitle: 'Applied Practice' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
