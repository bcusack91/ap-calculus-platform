/**
 * Entrance Quiz — Computing Systems & Networks (AP CS Principles)
 * 14 questions · 7 parts (2 per part)
 * Big Idea 4: computing devices, networks, packets, routing, bandwidth, latency.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cspc-ent-1a', question: 'A computing device is BEST described as:', options: ['Only a desktop computer', 'Any physical artifact that can run a program (computer, phone, smart sensor, embedded controller, etc.)', 'A type of network cable', 'A printed book'], correctIndex: 1, explanation: 'Computing devices include any hardware that executes programs — from servers and laptops to phones, watches, and embedded sensors.', partNumber: 1, partTitle: 'Computing Devices' },
  { id: 'cspc-ent-1b', question: 'A computing system typically combines:', options: ['Only hardware', 'Hardware AND software, working together to perform tasks', 'Only software', 'Only data'], correctIndex: 1, explanation: 'A computing system is the combination of hardware (the device) and software (the programs) that together perform a task.', partNumber: 1, partTitle: 'Computing Devices' },
  { id: 'cspc-ent-2a', question: 'A computer network is BEST described as:', options: ['A single computer with no internet access', 'Two or more computing devices connected together to share resources or communicate', 'A type of programming language', 'A photo storage format'], correctIndex: 1, explanation: 'A network is two or more devices connected so they can exchange data or share resources.', partNumber: 2, partTitle: 'Networks' },
  { id: 'cspc-ent-2b', question: 'On a network, a path between any two given devices:', options: ['Always uses the exact same wires', 'Can typically be one of MANY possible routes — networks are designed with redundancy', 'Is fixed by the manufacturer of the device', 'Cannot exist if the devices are different brands'], correctIndex: 1, explanation: 'Networks (and the Internet) typically have many redundant paths between any two devices, which improves resilience and load balancing.', partNumber: 2, partTitle: 'Networks' },
  { id: 'cspc-ent-3a', question: 'When a large file is sent across the Internet, it is typically:', options: ['Sent as one giant continuous stream that cannot be interrupted', 'Broken into smaller PACKETS that travel independently and are reassembled at the destination', 'Sent as a single email attachment regardless of size', 'Encrypted into a single bit'], correctIndex: 1, explanation: 'Data is split into packets. Each packet may take a different route. The destination reassembles them in order.', partNumber: 3, partTitle: 'Packets & Routing' },
  { id: 'cspc-ent-3b', question: 'If a single packet is lost in transit, the MOST common response of a reliable transport protocol is to:', options: ['Discard the entire file and start over', 'Detect the loss and retransmit the missing packet', 'Crash the receiving device', 'Convert the file to a different language'], correctIndex: 1, explanation: 'Reliable protocols (e.g., TCP) detect lost packets and retransmit them, ensuring complete and ordered delivery.', partNumber: 3, partTitle: 'Packets & Routing' },
  { id: 'cspc-ent-4a', question: 'Bandwidth is BEST described as:', options: ['The total amount of data EVER transmitted on a network', 'The amount of data that can be transmitted per unit time (e.g., bits per second)', 'The physical length of a cable', 'The number of devices on a network'], correctIndex: 1, explanation: 'Bandwidth measures throughput: how much data per unit of time. Higher bandwidth = more data in less time.', partNumber: 4, partTitle: 'Bandwidth & Latency' },
  { id: 'cspc-ent-4b', question: 'Latency is BEST described as:', options: ['The time delay between sending a piece of data and it arriving at the destination', 'The total amount of data that can be sent', 'The number of users on a network', 'The wattage of a router'], correctIndex: 0, explanation: 'Latency measures delay (how long until data arrives). High bandwidth with high latency feels “slow to respond” in interactive applications.', partNumber: 4, partTitle: 'Bandwidth & Latency' },
  { id: 'cspc-ent-5a', question: 'A streaming service buffers a few seconds of video before playing it. The MAIN purpose of buffering is to:', options: ['Encrypt the video', 'Smooth playback through brief network slowdowns or jitter', 'Reduce the resolution of the video', 'Remove copyright protection'], correctIndex: 1, explanation: 'Buffering lets the player keep going during short network hiccups by always having upcoming content ready.', partNumber: 5, partTitle: 'Real-World Networking' },
  { id: 'cspc-ent-5b', question: 'A user reports that their video calls are choppy even though file downloads are fast. The MOST likely network issue is:', options: ['Low storage on the device', 'High latency or jitter, even though bandwidth is sufficient', 'A logic error in the calling app’s color picker', 'The device is too new'], correctIndex: 1, explanation: 'Real-time interaction (calls, games) is sensitive to latency and jitter, while bulk file downloads benefit mainly from bandwidth. The two are different metrics.', partNumber: 5, partTitle: 'Real-World Networking' },
  { id: 'cspc-ent-6a', question: 'A school connects 30 classrooms with networking equipment so they can share files and a printer. This is an example of a:', options: ['Local Area Network (LAN)', 'Cellular tower', 'Single-device system', 'Hard drive'], correctIndex: 0, explanation: 'A network of devices in a small geographic area (a building or campus) is a LAN. The Internet is a network of networks.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspc-ent-6b', question: 'Two routes between two cities have different speeds. Adding a third, redundant cable that connects them MAINLY:', options: ['Reduces the total bandwidth', 'Improves fault tolerance — traffic can be rerouted if one path fails', 'Eliminates all latency', 'Decreases security'], correctIndex: 1, explanation: 'Redundant paths improve fault tolerance: if one fails, traffic uses the others. This is a fundamental design principle of the Internet.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspc-ent-7a', question: 'Which of the following BEST describes the Internet?', options: ['A single, central computer that stores all websites', 'A global network of networks that uses agreed-upon protocols to exchange data', 'A type of programming language', 'A specific company’s product'], correctIndex: 1, explanation: 'The Internet is a global, decentralized network of networks. Devices communicate using shared protocols (e.g., TCP/IP).', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cspc-ent-7b', question: 'A high-bandwidth, high-latency satellite link would be MOST suitable for:', options: ['Real-time online gaming', 'Bulk file transfers where total throughput matters more than instant responsiveness', 'Live video conferencing', 'Stock-market trading'], correctIndex: 1, explanation: 'High bandwidth + high latency = good for moving lots of data overall, but bad for interactive uses where every round-trip delay matters.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Computing Devices' },
    { partNumber: 2, partTitle: 'Networks' },
    { partNumber: 3, partTitle: 'Packets & Routing' },
    { partNumber: 4, partTitle: 'Bandwidth & Latency' },
    { partNumber: 5, partTitle: 'Real-World Networking' },
    { partNumber: 6, partTitle: 'Applied Practice' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
