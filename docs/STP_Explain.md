---
id: STP_Explain
title: STP & RSTP Master Class
---

import Quiz from '@site/src/components/Quiz';

# 🌳 STP Master Class: Loop Prevention

Welcome to the world of Spanning Tree. It's the reason your network doesn't melt down when you plug two cables into the same switch.

---

## 👑 The Root Election (Game of Switch-Thrones)

Every STP network needs a **King** (Root Bridge).

1.  **The Rule**: The Switch with the **Lowest Bridge ID** wins.
2.  **Bridge ID**: `Priority + MAC Address`.
    *   **Default Priority**: 32768.
    *   **Tie-Breaker**: If priorities are equal, the Lowest MAC Address wins.

> **Best Practice**: Manually set your core switch priority to **4096** or **8192** to ensure it stays Root. Never leave it at default (32768), or a cheap access switch might become King!

---

## 🏗️ The 4-Step Decision Process

Every Non-Root switch must find the best path to the King.

1.  **Lowest Root Cost**: "Which path is cheapest?" (100Mbps=19, 1Gbps=4, 10Gbps=2).
2.  **Lowest Sender Bridge ID**: "My neighbor Upstream-A has a lower (better) Bridge ID than Upstream-B."
3.  **Lowest Sender Port Priority**: Neighbor says "I am sending this on my Port 1 (Priority 128)".
4.  **Lowest Sender Port ID**: Neighbor says "I am sending this on Port Fa0/1".

---

## 🎭 Port Roles

| Role | Meaning | State |
| :--- | :--- | :--- |
| **Root Port (RP)** | My *best* path to the Root. (1 per switch). | Forwarding |
| **Designated Port (DP)**| The path *away* from Root. Sends BPDUs down. | Forwarding |
| **Blocking (BLK)**| Redundant path. "I hear BPDUs but I don't use them." | Blocking |

---

## ⏱️ STP Timers (802.1D Legacy)

Standard STP is **SLOW**. It takes 30-50 seconds to converge.

1.  **Hello Time**: 2 seconds (Heartbeat).
2.  **Max Age**: 20 seconds ("King is dead" timeout).
3.  **Forward Delay**: 15 seconds (Listening -> Learning) + 15 seconds (Learning -> Forwarding).
    *   **Total**: 50 seconds max downtime.

---

## ⚡ RSTP (Rapid STP - 802.1w)

RSTP is **FAST**. It converges in sub-seconds (~1-2s).

**Major Differences**:
1.  **New States**: `Discarding`, `Learning`, `Forwarding` (Removed 'Blocking' and 'Listening').
2.  **New Roles**:
    *   **Alternate Port**: Backup for the Root Port.
    *   **Backup Port**: Backup for a Designated Port (Hub scenario).
3.  **Mechanism**: Uses a Proposal/Agreement handshake (Sync) rather than waiting for timers.

---

## 🛡️ Security Features

1.  **BPDU Guard**:
    *   Configured on Edge Ports (PC/Phone).
    *   If a BPDU is received (someone plugged in a switch), **Shutdown** the port immediately.
    *   Protects against loops from unauthorized devices.

2.  **Root Guard**:
    *   Configured on Core ports facing downstream.
    *   If a superior BPDU is received ("I am the new King!"), ignore it and put port in inconsistent state.
    *   Protects your core from being overthrown.

---

## 🎓 Ultimate Spanning Tree Quiz (20 Questions)

<Quiz 
  questions={[
    {
      questionText: 'What combines to form the Bridge ID?',
      options: ['Priority + MAC Address', 'IP Address + MAC', 'VLAN ID + Port', 'Priority + IP'],
      answer: 'Priority + MAC Address',
    },
    {
      questionText: 'What is the default STP Priority?',
      options: ['1', '4096', '32768', '65535'],
      answer: '32768',
    },
    {
      questionText: 'Which switch wins the Root Election?',
      options: ['Lowest Bridge ID', 'Highest Bridge ID', 'Lowest IP Address', 'Switch with most ports'],
      answer: 'Lowest Bridge ID',
    },
    {
      questionText: 'What is the cost of a 1 Gbps link in standard STP (IEEE)?',
      options: ['4', '19', '100', '1'],
      answer: '4',
    },
    {
      questionText: 'In RSTP, which state replaces "Blocking"?',
      options: ['Discarding', 'Listening', 'Alternative', 'Backup'],
      answer: 'Discarding',
    },
    {
      questionText: 'How long is the default "Max Age" timer?',
      options: ['2 seconds', '15 seconds', '20 seconds', '50 seconds'],
      answer: '20 seconds',
    },
    {
      questionText: 'Which port role exists on the Root Bridge?',
      options: ['All ports are Designated Ports', 'All ports are Root Ports', 'All ports are Blocking', 'Mix of Root and Designated'],
      answer: 'All ports are Designated Ports',
    },
    {
      questionText: 'What does BPDU Guard do if it sees a BPDU?',
      options: ['Ignores it', 'Shuts down the port', 'Becomes Root', 'Send an alert only'],
      answer: 'Shuts down the port',
    },
    {
      questionText: 'RSTP uses which mechanism to converge quickly?',
      options: ['Timers', 'Proposal / Agreement (Sync)', 'Broadcasts', 'VTP'],
      answer: 'Proposal / Agreement (Sync)',
    },
    {
      questionText: 'Which command enables RSTP on a Cisco switch?',
      options: ['spanning-tree mode rapid-pvst', 'spanning-tree mode rstp', 'spanning-tree enable', 'feature rstp'],
      answer: 'spanning-tree mode rapid-pvst',
    },
    {
      questionText: 'What is an "Alternate Port" in RSTP?',
      options: ['A backup for the Root Port', 'A backup for a Designated Port', 'A port connecting to a Hub', 'An unused port'],
      answer: 'A backup for the Root Port',
    },
    {
      questionText: 'If priorities are tied, what is the tie-breaker for Root Election?',
      options: ['Lowest MAC Address', 'Highest MAC Address', 'Lowest Port ID', 'Lowest Uptime'],
      answer: 'Lowest MAC Address',
    },
    {
      questionText: 'What is the cost of a 100 Mbps link?',
      options: ['100', '19', '4', '10'],
      answer: '19',
    },
    {
      questionText: 'Which feature prevents a downstream switch from becoming Root?',
      options: ['BPDU Filter', 'Root Guard', 'Loop Guard', 'UDLD'],
      answer: 'Root Guard',
    },
    {
      questionText: 'In which state does a switch populate its MAC table but NOT forward frames?',
      options: ['Blocking', 'Listening', 'Learning', 'Forwarding'],
      answer: 'Learning',
    },
    {
      questionText: 'PortFast should be enabled on...',
      options: ['Trunk ports', 'Edge ports (End devices)', 'Router ports', 'All ports'],
      answer: 'Edge ports (End devices)',
    },
    {
      questionText: 'Does RSTP support the "Listening" state?',
      options: ['Yes', 'No, merged into Discarding', 'No, merged into Learning', 'Only for compatibility'],
      answer: 'No, merged into Discarding',
    },
    {
      questionText: 'What is the multicast address for STP BPDUs?',
      options: ['01:80:C2:00:00:00', 'FF:FF:FF:FF:FF:FF', '01:00:5E:00:00:01', '00:00:0C:07:AC:01'],
      answer: '01:80:C2:00:00:00',
    },
    {
      questionText: 'If a link fails, how fast can RSTP converge?',
      options: ['30 seconds', '50 seconds', 'Sub-second / milliseconds', '5 minutes'],
      answer: 'Sub-second / milliseconds',
    },
    {
      questionText: 'Which protocol allows different VLANs to have different Root Bridges?',
      options: ['STP (802.1D)', 'RSTP (802.1w)', 'PVST+ / MSTP', 'VTP'],
      answer: 'PVST+ / MSTP',
    }
  ]}
/>
