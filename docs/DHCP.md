---
id: DHCP
title: DHCP Related Questions
sidebar_label: DHCP
---

import Quiz from '@site/src/components/Quiz';

<Quiz 
  questions={[
    {
      questionText: 'What is the correct order of the DHCP handshake?',
      options: ['DORA (Discover, Offer, Request, Ack)', 'DOAR (Discover, Offer, Ack, Request)', 'RODA (Request, Offer, Discover, Ack)', 'ORDA (Offer, Request, Discover, Ack)'],
      answer: 'DORA (Discover, Offer, Request, Ack)',
    },
    {
      questionText: 'Which UDP port does the DHCP Server listen on?',
      options: ['67', '68', '53', '80'],
      answer: '67',
    },
    {
      questionText: 'What happens when 50% of the lease time has expired?',
      options: ['Client broadcasts a request', 'Client sends a unicast renewal request', 'Client stops using IP', 'Server forces renewal'],
      answer: 'Client sends a unicast renewal request',
    }
  ]}
/>

<br/>

## Basic Level

### What is DHCP and why is it used?

- **DHCP (Dynamic Host Configuration Protocol)** is a network management protocol used to **automatically assign IP addresses and other network configuration parameters** to devices (clients) on a network.
- It allows devices to **obtain IP addresses dynamically** instead of requiring manual configuration.

#### Why is DHCP Used?

- **Simplifies network administration:** Automates the assignment of IP addresses, reducing manual errors and administrative overhead.
- **Efficient IP address management:** Avoids IP conflicts by dynamically allocating IPs from a predefined pool (scope).
- **Supports mobile and transient devices:** Devices can join and leave the network seamlessly, getting an IP address as needed.
- **Provides additional configuration:** DHCP can supply other important info like subnet mask, default gateway, DNS servers, and more.
- **Enables scalability:** Works well in large networks with many devices, making IP management practical.

> **Summary:** DHCP is used to automatically and dynamically assign IP addresses and network settings to devices, making network management easier, scalable, and less error-prone.


### Explain the DHCP lease process — how does a client obtain an IP address?

The DHCP lease process uses a four-step handshake — **DORA** (Discover, Offer, Request, and Acknowledge).

#### Step 1: DHCPDISCOVER (Client → Broadcast)
- When a device (client) connects to a network and needs an IP address, it **does not know any DHCP server’s IP**.
- It sends a **DHCPDISCOVER** message as a **broadcast** (`255.255.255.255`) from UDP 68 (Client) to UDP port 67 (Server) to find any available DHCP servers.
- This message basically says: "Is there a DHCP server out there? I need an IP address!"

#### Step 2: DHCPOFFER (Server → Broadcast/Unicast)
- One or more DHCP servers respond with a **DHCPOFFER** message.
- The offer contains:
    - An available **IP address** from the server’s pool (scope).
    - **Lease duration** (how long the client can use the IP).
    - Other network info (subnet mask, gateway, DNS servers, etc.).

#### Step 3: DHCPREQUEST (Client → Broadcast)
- The client selects one of the received offers (typically the first) and sends a **DHCPREQUEST** message.
- This message is broadcast to inform **all DHCP servers** about the selected server and the requested IP.
- It serves two purposes:
    1. **Requesting the offered IP address** formally.
    2. **Declining other offers**, so other servers know their offers were rejected.

#### Step 4: DHCPACK (Server → Broadcast/Unicast)
- The chosen DHCP server responds with a **DHCPACK (acknowledgment)** message.
- This confirms the lease of the IP address to the client and includes all network parameters.
- Once the client receives DHCPACK, it can configure its network interface.

#### Summary Flow Chart
```
Client                               DHCP Server(s)
  |                                     |
  | --- DHCPDISCOVER (broadcast) ----->|
  |                                     |
  | <----- DHCPOFFER (IP offer) --------|
  |                                     |
  | --- DHCPREQUEST (broadcast) ------->|
  |                                     |
  | <------ DHCPACK (lease assign) -----|
  |                                     |
Client configures IP and network settings
```

:::tip ELI5 Analogy: Getting a Library Card
- You walk into a **library** (network) but don’t have a membership card (IP).
- You shout out loud: **“Is there anyone here who can give me a card?”** (DHCPDISCOVER)
- Several librarians (DHCP servers) reply: **“I can give you card #12345 valid for 7 days.”** (DHCPOFFER)
- You choose one and say: **“I want card #12345 from you.”** (DHCPREQUEST)
- That librarian confirms: **“Here’s your card.”** (DHCPACK)
- Now you can use the library freely.
:::

### What are the different DHCP message types?

DHCP messages are carried inside UDP packets. Key message types include:

| Message Type | Purpose |
| --- | --- |
| **DHCPDISCOVER (1)** | Client broadcasts to locate available DHCP servers. |
| **DHCPOFFER (2)** | Server offers an IP address and configuration to the client. |
| **DHCPREQUEST (3)** | Client requests the offered IP address and signals intent to use it. |
| **DHCPDECLINE (4)** | Client informs the server the offered IP is already in use (conflict). |
| **DHCPACK (5)** | Server acknowledges and confirms the IP lease to the client. |
| **DHCPNAK (6)** | Server denies the request (e.g., IP no longer available). |
| **DHCPRELEASE (7)** | Client releases the IP address back to the server. |
| **DHCPINFORM (8)** | Client requests only local configuration parameters, not an IP lease. |


### What information can DHCP provide besides the IP address?

DHCP provides a **complete network configuration**. Common options include:

| Parameter | Description |
| --- | --- |
| **Subnet Mask (Option 1)** | Defines the network portion of the IP address. |
| **Default Gateway (Option 3)** | Router IP to send packets outside the local network. |
| **DNS Server (Option 6)** | IP addresses for domain name resolution. |
| **Domain Name (Option 15)** | The DNS domain name the client should use. |
| **Lease Time (Option 51)** | Duration the IP address lease is valid. |
| **NTP Servers (Option 42)** | Network Time Protocol servers for time synchronization. |


### What is the role of a DHCP relay agent?

A **DHCP Relay Agent** enables DHCP clients on one subnet to communicate with a DHCP server on a different subnet.

- **Why needed?** DHCPDISCOVER messages are broadcasts, which routers block by default. Without a relay, clients can't reach a server on another network segment.
- **How it works:**
    1. Relay agent (router/L3 switch) listens for broadcasts.
    2. Intercepts `DHCPDISCOVER` and forwards it as **unicast** to the central DHCP server.
    3. Includes `giaddr` (Gateway IP) to tell the server which subnet the client is on.
    4. Relays the server's reply back to the client.

## Intermediate Level

### How does DHCP handle IP address conflicts?

An IP conflict occurs when two devices share the same IP. DHCP mitigates this via:

1.  **Server-Side Check (Ping/ARP):** Before assigning an IP, the server may ping or ARP it. If a reply comes, the IP is marked as "In Use" and not assigned.
2.  **Client-Side Check (Gratuitous ARP):** After receiving an IP, the client sends an ARP probe. If another device replies, the client sends a **DHCPDECLINE** and requests a new IP.
3.  **Conflict Handling:** The server marks the conflicted IP as "BAD_ADDRESS" and excludes it from the pool until an admin investigates.

### What happens when a DHCP lease expires?

1.  **Renewal (T1 - 50% Time):** Client attempts to renew lease with the **same server** (unicast).
2.  **Rebinding (T2 - 87.5% Time):** If original server fails, client broadcasts request to **any server** to extend the lease.
3.  **Expiration (100% Time):** If no server responds, the client **must stop using the IP** and restart the DORA process.

### Difference between DHCP reservation and dynamic allocation

| Feature | Dynamic Allocation | DHCP Reservation |
| --- | --- | --- |
| **Assignment** | First-come, first-served from a pool | Manually bound to specific MAC address |
| **Consistency** | IP can change over time | Always the same IP for that device |
| **Use Case** | Laptops, phones, guest devices | Servers, printers, network gear |

### How does DHCPv6 differ from DHCPv4?

| Feature | DHCPv4 | DHCPv6 |
| --- | --- | --- |
| **IP Version** | IPv4 (32-bit) | IPv6 (128-bit) |
| **Ports** | UDP 67 (Server), 68 (Client) | UDP 547 (Server), 546 (Client) |
| **Identifier** | MAC Address | DUID (DHCP Unique Identifier) |
| **Types** | Stateful only | Stateful & Stateless (can work with SLAAC) |
| **Router Info** | Provides Default Gateway | Does NOT provide gateway (RA messages do) |

## Advanced Level

### How would you design a scalable DHCP server infrastructure?

1.  **Distributed Architecture:** Use regional DHCP servers to reduce latency and broadcast domain size.
2.  **Centralized Management (IPAM):** Integrate with IPAM for global visibility and conflict prevention.
3.  **High Availability:** Use DHCP failover (Active/Active or Active/Standby) or split scopes (80/20 rule) to ensure service continuity.
4.  **Security:** Implement DHCP Snooping, Port Security, and regular audits.
5.  **Relay Agents:** Use relays on routers to serve multiple VLANs from central clusters.

### What security vulnerabilities exist in DHCP?

| Vulnerability | Description | Mitigation |
| --- | --- | --- |
| **Rogue DHCP Server** | Attacker sets up a fake server to hand out bad IPs or gateways (MITM). | **DHCP Snooping** (only trust server ports). |
| **DHCP Starvation** | Attacker floods server with fake requests to exhaust IP pool. | **Port Security** (limit MACs per port). |
| **IP Spoofing** | Attacker impersonates a valid user IP. | **IP Source Guard** (validate source IP vs MAC). |

### Troubleshooting: Clients unable to obtain IP addresses

1.  **Physical Layer:** Check cable, link status, and VLAN mismatch.
2.  **Scope Exhaustion:** Check if the DHCP pool is full.
3.  **Connectivity:** Verify client can reach relay agent; check relay configuration (`ip helper-address`).
4.  **Snooping/ACLs:** Ensure DHCP Snooping isn't blocking legitimate packets or maxing out trust limits.
5.  **Packet Capture:** Use Wireshark to see if **DHCPOFFER** is returning. If CLIENT sends DISCOVER but hears silence, the Server or Relay is the issue.

### How DHCP works with multiple subnets (Relay Agent detailed)

Since routers block broadcasts, a **DHCP Relay Agent** is essential.
- Client broadcasts **DHCPDISCOVER**.
- Router (Relay) receives it, encapsulates it in unicast IP packet.
- Source IP becomes the Relay's interface IP (GIADDR).
- Server receives packet, looks at GIADDR to pick the correct scope (e.g., if GIADDR is 10.1.1.1, assign from 10.1.1.0/24 scope).
- Server sends unicast **DHCPOFFER** back to Relay.
- Relay broadcasts OFFER to client.

### DHCP Options and Custom Examples

DHCP allows custom configurations via options:
- **Option 43 (Vendor Specific):** Used by Wireless APs (to find controller) or IP Phones.
- **Option 66/67 (PXE Boot):** Hostname and Boot ID for imaging computers over network.
- **Option 150 (TFTP):** IP address of TFTP server (common for Cisco Phones).
- **Option 121 (Classless Static Route):** Pushes static routes to clients.

### Designing DHCP for Wired/Wireless + High Availability

**Scenario:** Office with Wired PCs, Wi-Fi Users, multiple VLANs.
**Design:**
1.  **Central Cluster:** Two DHCP servers in Failover mode.
2.  **Segmentation:** Separate scopes for Wired vs. Wi-Fi VLANs.
3.  **Wireless:** Short lease times (e.g., 2 hours) to recover IPs from transient users faster.
4.  **Relays:** Core switches configured as relays pointing to both cluster members.
5.  **Security:** Enable DAI (Dynamic ARP Inspection) and DHCP Snooping on access switches.