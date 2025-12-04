---
id: Question Bank
title: Asked Questions
---

# Interview Question
Following Questions were asked by **AMD**


# PC1 -------- SW1 -------- PC2

## How communication happens between PC1 and PC2?
Assume all devices are freshly booted (no ARP or MAC entries).

---

## ARP Packet Details

### How ARP packet looks?

- **Source IP:** PC1's IP
- **Destination IP:** PC2's IP (but ARP request uses 0.0.0.0 for target IP field)
- **Source MAC:** PC1 MAC
- **Destination MAC:** FF:FF:FF:FF:FF:FF (broadcast)

### Ethernet Frame Contents
- **Source MAC:** PC1 MAC  
- **Destination MAC:** FF:FF:FF:FF:FF:FF  
- **EtherType:** 0x0806 (ARP)  
- **Payload:** ARP Request

---

## What does PC2 check when ARP request is received?
- First checks **L2 broadcast MAC**
- Then checks ARP payload:  
  - If **Target IP = PC2 IP**, then reply

---

## ARP Response Contents

**ARP Header:**
- Sender IP: PC2 IP
- Sender MAC: PC2 MAC
- Target IP: PC1 IP
- Target MAC: PC1 MAC

**Ethernet Frame:**
- Source MAC: PC2 MAC  
- Destination MAC: PC1 MAC (unicast)

---

## Does PC2 use L2 or L3 while generating ARP response?
- Uses **L3** to identify target IP (PC1)  
- Uses **L2** to form the Ethernet frame toward PC1  
- ARP uses both layers.

---

## Switch Behaviour

### How to send ARP request on only 10 ports out of 24?
Normal switch floods ARP to all ports in VLAN.  
To limit it to 10 ports:
- Separate VLAN  
- Port isolation  
- Private VLAN  
- ARP ACL / DAI (special cases)

---

## Port Roles in VLAN
- **Access Port:** Carries 1 VLAN, no tags to end devices  
- **Trunk Port:** Carries multiple VLANs, uses 802.1Q tags

---

## If both ports are Access Ports in VLAN10
- Both PCs in same VLAN  
- Communication works  
- **Incoming packet does NOT include VLAN tag** (PCs do not tag frames)

---

## If both ports are configured as Trunk
- PCs cannot send tagged frames  
- Connectivity fails unless native VLAN matches  
- Untagged frames → placed in native VLAN

---

## Replacing Switch with Router
- Router works at L3  
- PCs must be in different networks  
- ARP happens only between:
  - PC1 ↔ Router  
  - PC2 ↔ Router  
- Router forwards based on routing table

---

## How PC knows destination IP is in a different network?
PC performs AND operation with subnet mask.

Example:
- PC1 IP: 192.168.1.10  
- Mask: 255.255.255.0  
- Destination: 192.168.2.20  

# What happens if ARP request is sent, MAC learning happens, but the switch MAC table flushes before ARP response arrives?

## Scenario
- PC1 sends an **ARP request** to learn PC2's MAC.
- Switch **learns PC1’s MAC** from the ARP request.
- Before PC2 replies, the switch’s **MAC address table is cleared**.

---

## What happens next?

### 1. PC2 sends ARP Response
- **Source MAC:** PC2 MAC  
- **Destination MAC:** PC1 MAC  
- This is a **unicast** frame.

### 2. Switch receives the ARP reply
- The switch now **does NOT have PC1’s MAC** in its MAC table.

### 3. What does the switch do?
When a switch receives a **unicast frame with unknown destination MAC**, it performs:

# 👉 **Unknown Unicast Flooding**
The switch sends the ARP reply out **all ports in the VLAN** (except the incoming port).

---

## 4. PC1 receives the ARP reply
- PC1 updates its **ARP table** with PC2’s MAC.
- Switch learns **PC2’s MAC** from the reply.
- When PC1 sends the next packet (like the IP packet), the switch learns **PC1’s MAC again**.

---

## Final Outcome
- Communication still works correctly.
- Only temporary network impact: **switch floods the ARP reply**.
- No packet drop unless special features exist (port security, PVLAN, etc.).

---

## Summary
- ARP Request → PC1 MAC learned  
- MAC Table flushed → no stored MACs  
- ARP Reply arrives → switch floods unknown unicast  
- PC1 receives reply → communication continues normally  
