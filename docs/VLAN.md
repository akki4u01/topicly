---
id: VLAN
title: VLAN Related Questions
---

# VLAN
This is VLAN contents

# VLAN

## **Basic VLAN Interview Questions**

- **What is a VLAN and why is it used?**
    
    ### ✅ What is a VLAN?
    
    A **VLAN (Virtual Local Area Network)** is a **logical segmentation** of a physical network. It allows network administrators to group devices together based on **function, department, or application**, regardless of their physical location.
    
    Think of it like creating **virtual “rooms”** within a building, even though the devices may be on different floors — they behave as if they are on the same floor.
    
    ---
    
    ### 🎯 Why is VLAN used?
    
    ### 1. **Network Segmentation**
    
    - VLANs break up a large broadcast domain into smaller, isolated domains.
    - This reduces unnecessary traffic and improves network efficiency.
    
    ### 2. **Improved Security**
    
    - Devices in different VLANs **cannot communicate directly** without a Layer 3 device (like a router or L3 switch).
    - For example, guest users can be isolated from internal corporate resources.
    
    ### 3. **Better Management**
    
    - You can assign users to VLANs logically (e.g., HR, Finance, Engineering), making it easier to apply group-specific policies.
    
    ### 4. **Traffic Prioritization (QoS)**
    
    - VLANs allow you to prioritize traffic types (e.g., VoIP on a voice VLAN) to ensure better quality of service.
    
    ### 5. **Scalability**
    
    - VLANs reduce broadcast traffic and allow scalable expansion of the network while maintaining control.
    
    ---
    
    ### 📦 Real-world Example:
    
    Let’s say you have:
    
    - **HR Dept.** → VLAN 10
    - **Finance Dept.** → VLAN 20
    - **Engineering Dept.** → VLAN 30
    - **Guest Wi-Fi** → VLAN 99
    
    They are on **the same switch**, but thanks to VLANs:
    
    - HR and Finance cannot talk to Guests.
    - Broadcasts stay within each VLAN.
    - Routing between them is only allowed through Layer 3 devices (if permitted).
    
    ---
    
    ### 🔄 Without VLANs:
    
    - All devices are in the same broadcast domain.
    - A single broadcast floods every device — which leads to:
        - **Poor performance**
        - **Security risks**
        - **No logical separation**
    
    ---
    
    ### Summary Table:
    
    | Feature | With VLAN | Without VLAN |
    | --- | --- | --- |
    | Broadcast Domains | Isolated per VLAN | Single large domain |
    | Security | Better isolation | All devices reachable |
    | Flexibility | Logical grouping | Physical cabling matters |
    | Performance | Less broadcast traffic | More broadcast congestion |
- **What is the difference between a VLAN and a subnet?**
    
    ### 📊 Key Differences Between VLAN and Subnet
    
    | Feature | **VLAN** | **Subnet** |
    | --- | --- | --- |
    | **Definition** | A logical separation of devices at Layer 2 | A logical grouping of IP addresses at Layer 3 |
    | **OSI Layer** | Layer 2 (Data Link Layer) | Layer 3 (Network Layer) |
    | **Identification** | Identified by a VLAN ID (1–4094) | Identified by an IP address and subnet mask |
    | **Purpose** | Isolate traffic and control broadcast domains | Manage IP addressing and route traffic |
    | **Device Grouping** | Based on switch port assignments | Based on IP addresses |
    | **Communication** | Inter-VLAN communication requires routing | Inter-subnet communication requires routing |
    | **Configured On** | Switches (Layer 2 and Layer 3) | Routers, Layer 3 switches, hosts |
    | **Tagging** | Uses 802.1Q trunk tagging | No tagging — just IP headers |
    
    ---
    
    ### 🧠 Think of it like this:
    
    - **VLAN** = Creates **virtual LANs** to isolate Layer 2 traffic.
    - **Subnet** = Groups **IP addresses** to manage and route Layer 3 traffic.
    
    ---
    
    ### 📦 Real-World Example
    
    Suppose you have:
    
    - **VLAN 10** for HR
    - **VLAN 20** for Engineering
    
    You typically assign:
    
    - **Subnet 192.168.10.0/24** to VLAN 10
    - **Subnet 192.168.20.0/24** to VLAN 20
    
    So:
    
    - VLAN separates the Layer 2 domain → Controls broadcast.
    - Subnet controls IP addressing and routing → Manages Layer 3 reachability.
    
    ---
    
    ### 🧩 Do VLANs and Subnets Always Go 1:1?
    
    Not necessarily, but it’s **best practice** to keep them in a **1:1 relationship** for clarity and security:
    
    - One VLAN = One Subnet
    
    ---
    
    ### 🔐 Summary
    
    - **VLAN** is about **broadcast domain isolation**.
    - **Subnet** is about **IP address management and routing**.
- **How does VLAN improve network segmentation and security?**
    
    VLANs (Virtual Local Area Networks) **significantly improve both network segmentation and security** by allowing you to logically divide a physical network into multiple isolated networks — even if devices are connected to the same switch.
    
    ---
    
    ## 🔐 1. **Improved Network Segmentation**
    
    ### ✅ How VLANs segment networks:
    
    - Each VLAN creates a **separate Layer 2 broadcast domain**.
    - Devices in one VLAN **cannot communicate** with devices in another VLAN **without a router or Layer 3 switch**.
    
    ### 📦 Example:
    
    - VLAN 10 → HR Department
    - VLAN 20 → Finance Department
    - VLAN 30 → Guest Wi-Fi
    
    > Even if all users are connected to the same physical switch, they are virtually isolated.
    > 
    
    ### 🔄 Without VLANs:
    
    - All devices are in the **same broadcast domain**.
    - Broadcast traffic like ARP floods all devices → causes **congestion and potential data leakage**.
    
    ---
    
    ## 🔐 2. **Enhanced Security**
    
    ### 🔒 VLANs restrict unauthorized access:
    
    - VLANs **isolate sensitive traffic**. For example:
        - Guest VLAN cannot access internal corporate resources.
        - HR VLAN is isolated from Engineering VLAN to protect sensitive employee data.
    
    ### 🔒 Control via ACLs and Firewall:
    
    - Layer 3 devices between VLANs can enforce **Access Control Lists (ACLs)**.
    - You can allow or block communication between VLANs selectively.
    
    ### 🔐 Prevents VLAN Hopping:
    
    - VLAN configurations (access vs trunk ports, native VLAN handling) help defend against **VLAN hopping attacks** when properly secured.
    
    ---
    
    ## 🎯 Real-World Use Cases:
    
    | Use Case | VLAN Benefit |
    | --- | --- |
    | Separate departments (HR, IT) | Isolation of data and broadcasts |
    | Guest Wi-Fi | Prevents access to internal network |
    | Voice VLAN (VoIP phones) | Prioritization and isolation |
    | Data center zones (DMZ, internal) | Policy-based access between zones |
    
    ---
    
    ## 🧠 Summary
    
    | Feature | Without VLANs | With VLANs |
    | --- | --- | --- |
    | Broadcast Containment | No | Yes (each VLAN is its own domain) |
    | Logical Segmentation | Limited by physical layout | Flexible, regardless of location |
    | Access Control | Difficult to enforce | Easy with ACLs and routing policies |
    | Security Zones | Flat and risky | Clearly isolated |
- **What is the default VLAN on a switch? Can it be changed?**
    
    ### ✅ What is the Default VLAN on a Switch?
    
    On most Ethernet switches (especially Cisco), the **default VLAN is VLAN 1**.
    
    ---
    
    ### 📌 Key Characteristics of VLAN 1:
    
    | Property | Description |
    | --- | --- |
    | **VLAN ID** | `1` |
    | **Assigned to** | All switch ports by default (until reconfigured) |
    | **Used for** | Internal switch operations like control protocols (CDP, STP, VTP) |
    | **Tagging on Trunks** | Traffic for VLAN 1 is **not tagged** by default (native VLAN in 802.1Q) |
    | **Special** | Some protocols rely on VLAN 1; hence it's best practice **not to use it** |
    
    ---
    
    ### 🔄 Can the Default VLAN Be Changed?
    
    **No**, the actual **default VLAN ID (1)** **cannot be deleted or renumbered** — it is hardcoded into most switches.
    
    However, you **can change the VLAN assignment** of:
    
    - User ports (move them from VLAN 1 to another VLAN like 10 or 20)
    - Native VLAN on trunk ports (from VLAN 1 to, say, VLAN 99)
    
    ---
    
    ### ⚠️ Best Practice:
    
    - **Avoid using VLAN 1** for user data traffic.
        - Reason: It’s a default target for attacks (like VLAN hopping).
    - Create a **separate management VLAN** and user VLANs for better security and clarity.
    
    ---
    
    ### 🔧 Example (Cisco-style):
    
    ```bash
    bash
    CopyEdit
    ! Assign port to VLAN 10 (instead of default VLAN 1)
    switch(config)# interface fastethernet 0/1
    switch(config-if)# switchport mode access
    switch(config-if)# switchport access vlan 10
    
    ```
    
    ```bash
    bash
    CopyEdit
    ! Change native VLAN on trunk port (from default VLAN 1)
    switch(config)# interface gig0/1
    switch(config-if)# switchport trunk native vlan 99
    
    ```
    
    ---
    
    ### 📌 Summary
    
    | Question | Answer |
    | --- | --- |
    | Default VLAN ID | VLAN 1 |
    | Can it be deleted or changed? | ❌ No (but you can avoid using it) |
    | Best practice | Use other VLANs for users, secure VLAN 1 |
- **What is the range of VLAN IDs? Which are reserved?**
    
    ## **Range of VLAN IDs (IEEE 802.1Q Standard)**
    
    | **VLAN ID Range** | **VLAN Type** | **Purpose / Notes** |
    | --- | --- | --- |
    | **0** | Reserved | Used to indicate **priority tagging** (802.1p). No VLAN info. |
    | **1** | Default VLAN | Default VLAN on switches; used for control plane traffic (e.g., CDP, STP). |
    | **2 – 1001** | Standard VLANs | Usable VLANs for user-defined networks. |
    | **1002 – 1005** | Reserved (Cisco legacy) | Used for legacy purposes (e.g., FDDI and Token Ring). |
    | **1006 – 4094** | Extended VLANs | Supported only in **VTP transparent mode** or **VTPv3**. |
    | **4095** | Reserved | Reserved by the standard; used for **implementation-specific** functions. |
    
    ---
    
    ## 🧠 Key Notes:
    
    - VLANs are defined using a **12-bit field** in the 802.1Q tag → so the maximum ID is `2¹² - 1 = 4095`.
    - **VLAN 0 and VLAN 4095** are **reserved** and **cannot be used** for user traffic.
    - Most enterprise switches support **1–4094**, but only **2–1001** are guaranteed across all platforms.
    - **Extended VLANs (1006–4094)** are often used in large or cloud-scale networks.
    
    ---
    
    ## 🔐 Reserved VLAN IDs Summary:
    
    | VLAN ID | Reserved For |
    | --- | --- |
    | **0** | Priority-tagged frames (no VLAN) |
    | **1** | Default VLAN |
    | **1002-1005** | Cisco legacy support (FDDI, Token Ring) |
    | **4095** | Reserved for system use |
    
    ---
    
    ## ✅ Best Practices:
    
    - Avoid using **VLAN 1** for user or sensitive traffic.
    - Use VLANs from **2–1001** for typical enterprise segmentation.
    - Use VLANs **above 1005** only if:
        - Your switches **support extended VLANs**.
        - You’re operating in **VTP transparent mode** (for Cisco gear).
        - You need more than ~1,000 VLANs (e.g., in data centers or service provider networks).
- What is VxLAN ?
    
    ### What is VXLAN (Virtual Extensible LAN)?
    
    **VXLAN** is a network virtualization technology that allows you to **extend Layer 2 networks across Layer 3 infrastructure** — meaning it lets you create VLAN-like segments that span across different physical locations using IP networks.
    
    It’s defined in **RFC 7348**.
    
    ---
    
    ### 🔑 Key Concepts
    
    | Feature | Description |
    | --- | --- |
    | **VXLAN ID (VNI)** | 24-bit ID (up to 16 million segments) — like an extended VLAN ID |
    | **Overlay Network** | Virtual Layer 2 network running over Layer 3 infrastructure |
    | **Underlay Network** | The physical IP-based transport network (e.g., data center fabric) |
    | **Encapsulation** | VXLAN encapsulates Ethernet frames into UDP packets |
    | **Port** | Uses **UDP port 4789** by default |
    
    ---
    
    ### 📦 How VXLAN Works (Simple View)
    
    ```
    css
    CopyEdit
    [Host A] ──> [VTEP A] ── L3 Underlay ──> [VTEP B] ──> [Host B]
    
    ```
    
    - **VTEP (VXLAN Tunnel Endpoint)**: A device (switch or virtual switch) that encapsulates/decapsulates VXLAN traffic.
    - VXLAN wraps the original Ethernet frame inside a **UDP packet**.
    - That UDP packet is routed like any IP packet through the underlay network.
    
    ---
    
    ### 🏢 Why VXLAN is Used (Benefits)
    
    | Benefit | Explanation |
    | --- | --- |
    | **Massive Scalability** | Supports **16 million VNIs** vs 4K VLANs |
    | **Data Center Flexibility** | Enables **multi-tenant isolation** across distributed data centers |
    | **Layer 2 Over Layer 3** | Seamless VM mobility across subnets and physical locations |
    | **Cloud Native/SDN Support** | Works well with OpenStack, Kubernetes, and Software-Defined Networking (SDN) |
    | **Decouples network** | Separates physical infrastructure from logical network design |
    
    ---
    
    ### 🔍 Real-World Use Case
    
    - Imagine you have VMs in:
        - **Data Center A** in London
        - **Data Center B** in New York
    - VXLAN allows them to **appear in the same L2 broadcast domain** — so applications think they’re on the same LAN, even though they’re across the world.
    
    ---
    
    ### 📑 VXLAN Header Structure (Simplified)
    
    - Ethernet Header
    - IP Header
    - UDP Header (Port 4789)
    - VXLAN Header (8 bytes with 24-bit VNI)
    - Original Ethernet Frame (payload)
    
    ---
    
    ### ⚠️ VXLAN vs VLAN
    
    | Feature | VLAN | VXLAN |
    | --- | --- | --- |
    | ID Size | 12-bit (4094 VLANs) | 24-bit (16 million VNIs) |
    | Network Scope | Layer 2, same subnet | Layer 2 over Layer 3 (IP transport) |
    | Encapsulation | None | Ethernet-in-UDP |
    | Multitenancy | Limited | High isolation at scale |
    
    ---
    
    ### 🔧 Where VXLAN Is Used
    
    - **Data Centers** (Cloud-scale, Multi-Tenant)
    - **VM Mobility** in virtualized networks
    - **Overlay networks** in Kubernetes, OpenStack
    - **Multi-site connectivity**
- VXLAN Packet Structure ?
    
    Here's a detailed breakdown of the **VXLAN packet structure**, showing all the headers involved when a Layer 2 Ethernet frame is encapsulated inside a Layer 3 VXLAN-over-UDP packet.
    
    ---
    
    ## 📦 VXLAN Packet Structure (Encapsulation)
    
    ```
    text
    CopyEdit
    ┌─────────────────────────────┐
    │ Outer Ethernet Header       │ → Between VTEPs (source/destination MAC)
    ├─────────────────────────────┤
    │ Outer IP Header             │ → VXLAN source/destination IPs (VTEP IPs)
    ├─────────────────────────────┤
    │ Outer UDP Header            │ → Destination Port: 4789 (VXLAN)
    ├─────────────────────────────┤
    │ VXLAN Header (8 bytes)      │ → Contains VNI (VXLAN Network Identifier)
    ├─────────────────────────────┤
    │ Inner Ethernet Frame        │ → Original Layer 2 Ethernet frame
    └─────────────────────────────┘
    
    ```
    
    ---
    
    ## 🔍 VXLAN Header (8 Bytes)
    
    | Field Name | Size (bits) | Description |
    | --- | --- | --- |
    | Reserved | 8 | Must be 0 |
    | Flags | 8 | Bit 3 (I flag) must be set to 1 (indicates VNI is valid) |
    | Reserved | 24 | Must be 0 |
    | **VNI** | 24 | VXLAN Network Identifier (like VLAN ID, but 16 million) |
    | Reserved | 8 | Must be 0 |
    
    ### I Flag = 1
    
    - This must be set to **1** to indicate the VNI field is valid.
    - It's always the 4th bit of the second byte in the VXLAN header.
    
    ---
    
    ## 📑 Summary of VXLAN Packet Flow
    
    | Header Type | Purpose |
    | --- | --- |
    | **Outer Ethernet** | Routes the packet between VTEPs |
    | **Outer IP** | Routes across Layer 3 infrastructure |
    | **UDP** | VXLAN uses UDP port **4789** |
    | **VXLAN Header** | Contains **VNI** and flags |
    | **Inner Ethernet** | The original Layer 2 frame being sent |
    
    ---
    
    ### 🧠 Analogy
    
    Think of VXLAN as putting a letter (your original Ethernet frame) inside **an envelope (VXLAN + UDP/IP)** so it can travel across postal systems (IP routers), then be **unwrapped at the destination VTEP** to deliver the original message.
    
    ---
    
    ## 🚨 Example: Packet Sizes
    
    | Layer | Overhead (bytes) |
    | --- | --- |
    | Outer Ethernet | 14 |
    | IP Header | 20 (IPv4) or 40 (IPv6) |
    | UDP Header | 8 |
    | VXLAN Header | 8 |
    | **Total Encapsulation Overhead** | ~50 bytes |
    
    > If using standard 1500-byte MTU, VXLAN can cause fragmentation unless jumbo frames are enabled.
    > 
- Difference between VLAN and VXLAN and how they can be implemented ?
    
    ## VLAN vs VXLAN: Key Differences
    
    | Feature | VLAN | VXLAN |
    | --- | --- | --- |
    | **Definition** | Virtual LAN for segmenting a Layer 2 network within a local physical LAN | Overlay technology that extends Layer 2 segments over Layer 3 networks via encapsulation |
    | **ID size** | 12-bit VLAN ID (max 4094 VLANs) | 24-bit VXLAN Network Identifier (VNI), supports up to 16 million segments |
    | **Encapsulation** | No encapsulation; native Ethernet frames | Encapsulates Ethernet frames inside UDP packets (UDP port 4789) |
    | **Network Scope** | Limited to same physical LAN or bridged LAN segment | Can span geographically dispersed data centers over routed IP networks |
    | **Use cases** | Network segmentation within LAN, department isolation | Large-scale multi-tenant cloud networks, VM mobility, data center overlays |
    | **Transport Protocol** | Ethernet (Layer 2) | UDP over IP (Layer 3) |
    | **Scalability** | Limited (~4094 VLANs max) | Highly scalable (up to 16 million VNIs) |
    | **Devices** | Managed Layer 2 switches | VXLAN Tunnel Endpoints (VTEPs) — switches, hypervisors, routers with VXLAN support |
    | **Inter-segment routing** | Requires Layer 3 routing (router or L3 switch) | Underlay network routes VXLAN packets; VXLAN segments are Layer 2 overlays |
    
    ---
    
    ## How VLANs Are Implemented
    
    1. **Configure VLANs on Layer 2 switches** with VLAN IDs.
    2. Assign ports as **access ports** (single VLAN) or **trunk ports** (carry multiple VLANs with 802.1Q tagging).
    3. Use **routers or Layer 3 switches** for communication between VLANs (inter-VLAN routing).
    4. Common in enterprise LANs for departmental segmentation, security, and traffic management.
    
    **Example (Cisco CLI):**
    
    ```bash
    bash
    CopyEdit
    vlan 10
     name HR
    !
    interface GigabitEthernet0/1
     switchport mode access
     switchport access vlan 10
    
    ```
    
    ---
    
    ## How VXLAN Is Implemented
    
    1. **Deploy VXLAN Tunnel Endpoints (VTEPs)** — these can be physical switches, virtual switches (like VMware NSX, Linux bridges), or routers that support VXLAN encapsulation/decapsulation.
    2. VTEPs encapsulate original Ethernet frames into UDP packets with VXLAN headers.
    3. VXLAN packets travel over the **Layer 3 underlay network** between VTEPs.
    4. Supports VM mobility across different Layer 3 segments or data centers.
    5. Often integrated with SDN controllers and orchestration platforms for automation.
    
    **Example:**
    
    - Configure VXLAN interfaces on VTEPs.
    - Map VNIs to VLANs or directly to virtual networks.
    - Use IP routing for the underlay to forward VXLAN traffic.
    
    ---
    
    ### Summary
    
    | Aspect | VLAN | VXLAN |
    | --- | --- | --- |
    | Layer | 2 | 2 over 3 (Overlay on Underlay) |
    | Scalability | Limited (~4K VLANs) | Large (16 million VNIs) |
    | Network size | LAN or campus | Data center, multi-site, cloud |
    | Mobility support | Limited | High (VM mobility across Layer 3) |
    | Encapsulation | None | Ethernet in UDP/IP |

---

## 🔧 **VLAN Configuration & Operation**

- **How do you configure a VLAN on a switch (e.g., Cisco or Juniper)?**
    
    ## **1. Cisco Switch VLAN Configuration**
    
    ### Step 1: Create a VLAN
    
    ```bash
    bash
    CopyEdit
    Switch# configure terminal
    Switch(config)# vlan 10
    Switch(config-vlan)# name HR
    Switch(config-vlan)# exit
    
    ```
    
    ### Step 2: Assign a port to the VLAN (Access Port)
    
    ```bash
    bash
    CopyEdit
    Switch(config)# interface GigabitEthernet0/1
    Switch(config-if)# switchport mode access
    Switch(config-if)# switchport access vlan 10
    Switch(config-if)# exit
    
    ```
    
    ### Step 3: (Optional) Configure trunk port to carry multiple VLANs
    
    ```bash
    bash
    CopyEdit
    Switch(config)# interface GigabitEthernet0/24
    Switch(config-if)# switchport mode trunk
    Switch(config-if)# switchport trunk allowed vlan 10,20,30
    Switch(config-if)# exit
    
    ```
    
    ### Step 4: Save the configuration
    
    ```bash
    bash
    CopyEdit
    Switch# write memory
    
    ```
    
    ---
    
    ## **2. Juniper Switch VLAN Configuration (JunOS)**
    
    ### Step 1: Define VLAN and assign VLAN ID
    
    ```bash
    bash
    CopyEdit
    set vlans HR vlan-id 10
    
    ```
    
    ### Step 2: Assign VLAN to an interface (access mode)
    
    ```bash
    bash
    CopyEdit
    set interfaces ge-0/0/1 unit 0 family ethernet-switching port-mode access
    set interfaces ge-0/0/1 unit 0 family ethernet-switching vlan members HR
    
    ```
    
    ### Step 3: Configure trunk port (allow multiple VLANs)
    
    ```bash
    bash
    CopyEdit
    set interfaces ge-0/0/24 unit 0 family ethernet-switching port-mode trunk
    set interfaces ge-0/0/24 unit 0 family ethernet-switching vlan members [ HR Finance Sales ]
    
    ```
    
    ### Step 4: Commit configuration
    
    ```bash
    bash
    CopyEdit
    commit
    
    ```
    
    ---
    
    ### Summary Table
    
    | Action | Cisco CLI | Juniper CLI |
    | --- | --- | --- |
    | Create VLAN | `vlan 10` + `name HR` | `set vlans HR vlan-id 10` |
    | Assign port to VLAN (access) | `switchport mode access` + `switchport access vlan 10` | `set interfaces ge-0/0/1 unit 0 family ethernet-switching port-mode access` + `vlan members HR` |
    | Configure trunk port | `switchport mode trunk` + `allowed vlan` | `port-mode trunk` + `vlan members [list]` |
    | Save/Commit | `write memory` | `commit` |
- **What is the difference between an access port and a trunk port?**
    
    
    | Feature | Access Port | Trunk Port |
    | --- | --- | --- |
    | **Purpose** | Connects to end devices (PCs, printers, servers) | Connects switches or network devices to carry multiple VLANs |
    | **VLAN Membership** | Assigned to **one VLAN only** | Carries traffic for **multiple VLANs** simultaneously |
    | **Tagging** | Frames are **untagged** when sent/received | Frames are **tagged** with 802.1Q VLAN tags (except native VLAN) |
    | **Typical Use Case** | User device port | Switch-to-switch or switch-to-router links |
    | **VLAN Traffic** | Traffic belongs to a **single VLAN** | Traffic for **many VLANs multiplexed on the same link** |
    | **Configuration Example (Cisco)** | `switchport mode access` + `switchport access vlan X` | `switchport mode trunk` + `switchport trunk allowed vlan ...` |
    | **Native VLAN** | Not applicable | Has a native VLAN (untagged VLAN on trunk) |
    
    ---
    
    ### Summary:
    
    - **Access port**: Simple port for one VLAN, no VLAN tags.
    - **Trunk port**: Carries many VLANs using tags to identify VLAN membership.
- **How does a trunk port carry traffic for multiple VLANs?**
    
    ## How a Trunk Port Carries Multiple VLANs
    
    ### 1. **VLAN Tagging Using 802.1Q**
    
    - When a frame is sent from a device on a particular VLAN, the **switch adds an 802.1Q VLAN tag** to the Ethernet frame before sending it out the trunk port.
    - This VLAN tag identifies **which VLAN the frame belongs to**.
    - The tag is inserted into the Ethernet frame **after the source MAC address and before the EtherType/Length field**.
    
    ---
    
    ### 2. **Structure of 802.1Q Tag**
    
    | Field | Size (bits) | Description |
    | --- | --- | --- |
    | TPID (Tag Protocol ID) | 16 | Always `0x8100` indicating VLAN tag |
    | TCI (Tag Control Info) | 16 | Contains VLAN ID (12 bits) + Priority bits |
    
    ---
    
    ### 3. **Multiple VLANs on One Link**
    
    - Each frame sent on the trunk is tagged with its VLAN ID.
    - At the receiving end, the switch reads the VLAN tag to know which VLAN the frame belongs to.
    - This way, **multiple VLANs’ traffic can flow simultaneously over the same physical trunk link**, each frame marked with its VLAN tag.
    
    ---
    
    ### 4. **Native VLAN Exception**
    
    - The native VLAN’s traffic is sent **untagged** on the trunk.
    - The native VLAN is often VLAN 1 by default but can be changed.
    - Frames arriving untagged on the trunk are assumed to belong to the native VLAN.
    
    ---
    
    ### 5. **Summary Flow**
    
    | Frame Type | VLAN Tagging on Trunk |
    | --- | --- |
    | VLAN 10 Frame | Tagged with VLAN ID 10 |
    | VLAN 20 Frame | Tagged with VLAN ID 20 |
    | Native VLAN Frame | Sent **untagged** |
    
    ---
    
    ### 6. **Why Trunking?**
    
    - Efficiently use a single physical link to carry traffic for many VLANs.
    - Simplifies switch interconnection in multi-VLAN environments.
- **What is 802.1Q tagging?**
    
    ## What is 802.1Q Tagging?
    
    **802.1Q** is the **IEEE standard for VLAN tagging** in Ethernet frames. It defines how VLAN information is inserted into Ethernet frames so that multiple VLANs can share the same physical network link.
    
    ---
    
    ## Why is 802.1Q Tagging Needed?
    
    - In a **trunk link** carrying traffic for multiple VLANs, each Ethernet frame must indicate **which VLAN it belongs to**.
    - 802.1Q provides a **standardized way** to insert VLAN information into Ethernet frames, so switches know how to separate and forward frames per VLAN.
    
    ---
    
    ## How Does 802.1Q Tagging Work?
    
    - When a frame is sent out a trunk port, the switch inserts a **4-byte VLAN tag** inside the Ethernet frame.
    - The tag is added **after the Source MAC address and before the EtherType/Length field**.
    - This tag carries the VLAN ID and priority information.
    
    ---
    
    ## Structure of an 802.1Q Tagged Frame
    
    ```
    diff
    CopyEdit
    +----------------+----------------+----------------+----------------+
    | Destination MAC| Source MAC     | VLAN Tag (4 B) | EtherType/Length|
    +----------------+----------------+----------------+----------------+
    
    ```
    
    ### VLAN Tag Breakdown (4 bytes / 32 bits)
    
    | Field Name | Size (bits) | Description |
    | --- | --- | --- |
    | TPID (Tag Protocol ID) | 16 | Always `0x8100` — identifies the frame as VLAN tagged |
    | TCI (Tag Control Info) | 16 | Contains VLAN ID and priority |
    
    ---
    
    ## Details of TCI Field (16 bits)
    
    | Subfield | Size (bits) | Description |
    | --- | --- | --- |
    | Priority (PCP) | 3 | Priority Code Point (QoS priority) |
    | DEI (Drop Eligible Indicator) | 1 | Used for congestion notification |
    | VLAN ID | 12 | VLAN Identifier (0-4095) |
    - VLAN IDs 0 and 4095 are reserved; usable VLAN IDs range from 1 to 4094.
    
    ---
    
    ## Example
    
    - A frame from VLAN 10 will have VLAN tag with VLAN ID = 10.
    - Switches use this tag to forward the frame only to ports assigned to VLAN 10.
    
    ---
    
    ## Native VLAN Exception
    
    - Frames belonging to the **native VLAN** are sent **without VLAN tags** on trunk links to maintain backward compatibility with devices that don’t understand VLAN tagging.
    
    ---
    
    ## Summary
    
    - 802.1Q tagging enables **multiple VLANs to share a single physical link**.
    - Adds a **4-byte VLAN tag** inside Ethernet frames.
    - Helps switches **identify VLAN membership** for each frame.
- **What is a native VLAN and what is its role on a trunk link?**
    
    ## What is a Native VLAN?
    
    - The **Native VLAN** is a special VLAN assigned to a **trunk port** on a switch.
    - Frames belonging to the native VLAN are **sent untagged** across the trunk link.
    - On the receiving end, **untagged frames on a trunk port are assumed to belong to the native VLAN**.
    
    ---
    
    ## Role of Native VLAN on a Trunk Link
    
    | Aspect | Explanation |
    | --- | --- |
    | **Backward Compatibility** | Allows devices that don’t understand VLAN tagging to communicate over a trunk link using the native VLAN’s untagged traffic. |
    | **Untagged Frames** | Frames from the native VLAN are transmitted without 802.1Q tags. |
    | **Default VLAN** | By default, VLAN 1 is the native VLAN on Cisco switches, but it can (and should) be changed for security reasons. |
    | **Traffic Separation** | All other VLANs’ frames are tagged; native VLAN traffic is separated by being untagged. |
    | **Potential Security Risk** | Misconfiguration can lead to VLAN hopping attacks if native VLAN is not carefully managed. |
    
    ---
    
    ## How Native VLAN Works in Practice
    
    - Suppose Native VLAN is VLAN 99.
    - A frame on VLAN 99 leaving the trunk port **will not have a VLAN tag**.
    - When the frame arrives at the other switch’s trunk port, it’s recognized as belonging to VLAN 99 because it is **untagged**.
    - Frames belonging to other VLANs **will have 802.1Q tags** identifying their VLANs.
    
    ---
    
    ## Summary Table
    
    | Frame Type | VLAN Tag on Trunk | VLAN Association |
    | --- | --- | --- |
    | Native VLAN Frame | **Untagged** | Native VLAN (e.g., VLAN 99) |
    | Other VLANs Frame | Tagged | Corresponding VLAN ID |
    
    ---
    
    ### Important Notes
    
    - Native VLAN must **match on both ends** of a trunk link to avoid misinterpretation.
    - For security, it’s a best practice to **change the native VLAN from VLAN 1** to a different unused VLAN.
    - Some switches allow configuring the native VLAN explicitly:
        
        **Cisco example:**
        
        ```bash
        bash
        CopyEdit
        interface GigabitEthernet0/1
         switchport trunk native vlan 99
        
        ```
        
- **How does a switch determine which VLAN a frame belongs to?**
    
    ## How a Switch Determines Which VLAN a Frame Belongs To
    
    ### 1. **Based on Port Type: Access or Trunk**
    
    | Port Type | How VLAN is Determined |
    | --- | --- |
    | **Access Port** | All frames arriving on an access port are **assigned to the VLAN configured on that port**. Frames are **untagged** and belong to a single VLAN. |
    | **Trunk Port** | Frames carry **802.1Q VLAN tags** (except native VLAN frames). The switch reads the VLAN tag to determine VLAN membership. Untagged frames on trunk port are assumed to belong to the **native VLAN**. |
    
    ---
    
    ### 2. **Access Port VLAN Assignment**
    
    - If a port is configured as an access port for VLAN 10, all untagged frames arriving on that port are considered VLAN 10 traffic.
    - When forwarding, the switch sends frames out access ports untagged and assigns them to that VLAN.
    
    ---
    
    ### 3. **Trunk Port VLAN Tagging**
    
    - Frames arriving on a trunk port usually have an **802.1Q tag** indicating their VLAN.
    - The switch reads this tag to know the VLAN.
    - Frames without a tag on a trunk port are associated with the native VLAN.
    
    ---
    
    ### 4. **Special Cases**
    
    - **Native VLAN frames:** Untagged frames on trunk ports belong to the native VLAN.
    - **VLAN hopping attack risk:** If the native VLAN is misconfigured or default VLAN 1 is used, attackers might exploit this.
    
    ---
    
    ### Summary Table
    
    | Incoming Frame | Port Type | VLAN Determination |
    | --- | --- | --- |
    | Untagged frame | Access port | VLAN assigned to that access port |
    | Tagged frame (802.1Q) | Trunk port | VLAN ID in the 802.1Q tag |
    | Untagged frame | Trunk port | Native VLAN of that trunk port |
    
    ---
    
    ### Bonus: How Switch Learns VLAN Membership
    
    - The switch learns the VLAN membership of devices based on the **port configuration**.
    - It builds **MAC address tables per VLAN** to forward traffic correctly.
- **Can two hosts on different VLANs communicate directly? Why or why not?**
    
    ## 🔒 **Why Communication Between VLANs Is Not Allowed by Default**
    
    ### 1. **VLANs Create Separate Layer 2 Domains**
    
    - VLANs are like separate "virtual switches" inside a physical switch.
    - Each VLAN has its **own broadcast domain** and **MAC address table**.
    - A switch **does not forward frames** from one VLAN to another on its own — it **isolates traffic** between them.
    
    ---
    
    ## 🚫 Example
    
    - **Host A** on VLAN 10 with IP `192.168.10.5`
    - **Host B** on VLAN 20 with IP `192.168.20.5`
    
    Even though both hosts are connected to the same physical switch:
    
    - **Their traffic is isolated** unless an external device routes between them.
    
    ---
    
    ## ✅ **How Can They Communicate? → Inter-VLAN Routing**
    
    To enable communication between hosts on different VLANs, you need a **Layer 3 device** like:
    
    ### Option 1: **Router-on-a-stick**
    
    - A router with **sub-interfaces** for each VLAN
    - Uses 802.1Q trunking to handle traffic for multiple VLANs
    
    ### Option 2: **Layer 3 Switch**
    
    - A switch with routing capabilities (`ip routing` enabled)
    - Creates **SVIs (Switch Virtual Interfaces)** for VLANs to act as default gateways
    
    ---
    
    ## 🧠 Summary
    
    | Question | Answer |
    | --- | --- |
    | Can hosts on different VLANs talk directly? | ❌ No — VLANs are isolated at Layer 2 |
    | Why not? | VLANs are separate broadcast domains |
    | How can they communicate? | ✅ Via a router or Layer 3 switch (Inter-VLAN routing) |

---

## 🌐 **VLAN Routing and Inter-VLAN Communication**

- **What is inter-VLAN routing and how is it implemented?**
    
    ### 🔄 What is Inter-VLAN Routing?
    
    **Inter-VLAN routing** is the process of allowing **devices on different VLANs** to communicate with each other.
    
    Since VLANs are **Layer 2 broadcast domains**, devices in different VLANs **cannot talk directly** unless a **Layer 3 device (router)** helps route traffic between them.
    
    ---
    
    ### 🧠 Why Is It Needed?
    
    - VLANs are isolated for security, segmentation, and performance.
    - But sometimes, you **need communication across VLANs** — for example:
        - A web server in VLAN 20 serving users from VLAN 10.
        - A printer in VLAN 30 accessed by clients in VLAN 40.
    
    ---
    
    ### ✅ How Is Inter-VLAN Routing Implemented?
    
    You need a **Layer 3 device** to route traffic between VLANs. There are **two main ways**:
    
    ---
    
    ## 🔧 1. **Router-on-a-Stick (Legacy Method)**
    
    - Use a **single router interface** with multiple **subinterfaces**.
    - Each subinterface handles one VLAN using **802.1Q tagging**.
    
    ### 🖥️ Example:
    
    ```bash
    bash
    CopyEdit
    interface GigabitEthernet0/0.10
     encapsulation dot1Q 10
     ip address 192.168.10.1 255.255.255.0
    
    interface GigabitEthernet0/0.20
     encapsulation dot1Q 20
     ip address 192.168.20.1 255.255.255.0
    
    ```
    
    ### 📌 Pros:
    
    - Simple for small networks.
    
    ### ❌ Cons:
    
    - Bottleneck at the router interface.
    - Doesn’t scale well.
    
    ---
    
    ## ⚙️ 2. **Layer 3 Switch with SVIs (Modern Method)**
    
    - Create **Switch Virtual Interfaces (SVIs)** — one for each VLAN.
    - Switch routes traffic **internally in hardware** — fast and scalable.
    
    ### Example:
    
    ```bash
    bash
    CopyEdit
    ip routing
    
    interface Vlan10
     ip address 192.168.10.1 255.255.255.0
    
    interface Vlan20
     ip address 192.168.20.1 255.255.255.0
    
    ```
    
    ### 📌 Pros:
    
    - High-speed routing (hardware-based)
    - Scales well with multiple VLANs
    
    ### ❌ Cons:
    
    - Requires a Layer 3 switch (more expensive)
    
    ---
    
    ### 📊 Comparison Table
    
    | Feature | Router-on-a-Stick | Layer 3 Switch with SVIs |
    | --- | --- | --- |
    | Device Required | Router | Layer 3 Switch |
    | Routing Location | Router Interface | Inside switch (SVIs) |
    | Performance | Slower (software-based) | Faster (hardware switching) |
    | Scalability | Low (limited interfaces) | High (supports many VLANs) |
    | Trunk Required | Yes | Optional |
    
    ---
    
    ### 🔁 Traffic Flow in Inter-VLAN Routing (Simplified)
    
    ```
    css
    CopyEdit
    Host A (VLAN 10) → Switch → SVI for VLAN 10
     → Switch routes it → SVI for VLAN 20 → Host B (VLAN 20)
    
    ```
    
- **What is a router-on-a-stick topology?**
    
    ### 🌐 What is a Router-on-a-Stick Topology?
    
    **Router-on-a-stick** is a network design where **a single physical interface on a router** is used to route traffic between **multiple VLANs** by creating **logical subinterfaces**, each associated with a different VLAN.
    
    It enables **inter-VLAN routing** without requiring a Layer 3 switch.
    
    ---
    
    ### 📌 Key Concepts
    
    - **One physical router interface** (e.g., `Gig0/0`)
    - **Multiple subinterfaces** (e.g., `Gig0/0.10`, `Gig0/0.20`) — one for each VLAN
    - Each subinterface is configured with:
        - **802.1Q VLAN encapsulation**
        - **IP address** as the **default gateway** for its VLAN
    - The link between the switch and router is configured as a **trunk port** to carry multiple VLANs.
    
    ---
    
    ### 🔧 Example Topology
    
    ```
    pgsql
    CopyEdit
         +---------+                         +------------+
         | Host A  | VLAN 10     VLAN 10     |            |
         | 192.168.10.10  +------+           |            |
         +---------+      | SW1  |-----------|   Router   |
                          |      | VLAN 20   | (Router-on-|
         +---------+ VLAN 20     +------+    |  -a-Stick) |
         | Host B  | 192.168.20.10        ----|            |
         +---------+                         +------------+
    
    ```
    
    ---
    
    ### ⚙️ Configuration Example
    
    ### 🔹 On the Router:
    
    ```bash
    bash
    CopyEdit
    interface GigabitEthernet0/0.10
     encapsulation dot1Q 10
     ip address 192.168.10.1 255.255.255.0
    
    interface GigabitEthernet0/0.20
     encapsulation dot1Q 20
     ip address 192.168.20.1 255.255.255.0
    
    ```
    
    ### 🔹 On the Switch:
    
    ```bash
    bash
    CopyEdit
    interface GigabitEthernet0/1
     switchport trunk encapsulation dot1q
     switchport mode trunk
    
    ```
    
    ---
    
    ### ✅ Benefits
    
    - Allows routing between VLANs without a Layer 3 switch.
    - Cost-effective for small networks.
    
    ---
    
    ### ❌ Drawbacks
    
    | Limitation | Description |
    | --- | --- |
    | **Single Point of Failure** | Only one interface handles all inter-VLAN traffic. |
    | **Performance Bottleneck** | All routed traffic goes through a single port. |
    | **Not Scalable** | Not suitable for large or high-throughput networks. |
    
    ---
    
    ### 🧠 Summary
    
    | Feature | Router-on-a-Stick |
    | --- | --- |
    | Device Used | Router |
    | VLAN Routing | Yes (via subinterfaces) |
    | Interface Requirement | One physical trunk link to the switch |
    | Use Case | Small to medium networks, testing labs |
- **How do Layer 3 switches enable inter-VLAN communication?**
    
    ### 🌐 How Do Layer 3 Switches Enable Inter-VLAN Communication?
    
    Layer 3 switches enable inter-VLAN communication by **combining the speed of a Layer 2 switch with the routing capabilities of a Layer 3 router** — all in one device.
    
    They do this using **SVIs (Switch Virtual Interfaces)**.
    
    ---
    
    ## 🧠 What Is a Layer 3 Switch?
    
    - It’s a network switch that can perform **routing functions** in addition to regular switching.
    - It supports **inter-VLAN routing** directly in hardware, unlike a router-on-a-stick (which uses a single physical router interface).
    
    ---
    
    ## 🔄 What Is Inter-VLAN Communication?
    
    By default, **devices in different VLANs can’t talk to each other**.
    
    Inter-VLAN routing enables traffic between VLANs — for example:
    
    - A computer in **VLAN 10** (192.168.10.0/24) talking to a printer in **VLAN 20** (192.168.20.0/24).
    
    ---
    
    ## 🔧 How Does a Layer 3 Switch Do It?
    
    ### ✅ 1. **Enable IP Routing**
    
    ```bash
    bash
    CopyEdit
    Switch(config)# ip routing
    
    ```
    
    ### ✅ 2. **Create SVIs (One per VLAN)**
    
    Each VLAN gets a **Switch Virtual Interface (SVI)** — a logical Layer 3 interface with an IP address.
    
    ```bash
    bash
    CopyEdit
    interface Vlan10
     ip address 192.168.10.1 255.255.255.0
     no shutdown
    
    interface Vlan20
     ip address 192.168.20.1 255.255.255.0
     no shutdown
    
    ```
    
    These SVIs act as **default gateways** for hosts in each VLAN.
    
    ### ✅ 3. **Assign VLANs to Access Ports**
    
    ```bash
    bash
    CopyEdit
    interface GigabitEthernet0/1
     switchport mode access
     switchport access vlan 10
    
    interface GigabitEthernet0/2
     switchport mode access
     switchport access vlan 20
    
    ```
    
    ### ✅ 4. **Switch Routes Between SVIs**
    
    When a host in VLAN 10 sends traffic to VLAN 20, the switch:
    
    - Receives the frame on VLAN 10
    - Routes it via the **SVI for VLAN 10 → VLAN 20**
    - Forwards it to the destination in VLAN 20 — all within the switch!
    
    ---
    
    ## ⚡ Why Layer 3 Switches Are Fast
    
    Unlike traditional routers, Layer 3 switches perform routing **in hardware (ASICs)** — resulting in **very high throughput** and **low latency**.
    
    ---
    
    ## 🧾 Summary Table
    
    | Feature | Layer 3 Switch |
    | --- | --- |
    | Does switching (L2)? | ✅ Yes |
    | Does routing (L3)? | ✅ Yes (inter-VLAN via SVIs) |
    | Uses SVIs? | ✅ One per VLAN |
    | Requires external router? | ❌ No |
    | Speed | ⚡ High (hardware-accelerated routing) |
    
    ---
    
    ### 🧠 Key Terms Recap:
    
    - **SVI (Switch Virtual Interface)**: A virtual Layer 3 interface on the switch
    - **ip routing**: Command that enables routing between SVIs
    - **Default Gateway**: IP address of the SVI per VLAN
- **How do you secure inter-VLAN routing?**
    
    Securing **inter-VLAN routing** is critical to prevent unauthorized access between network segments. Since inter-VLAN routing allows communication between different VLANs, without proper controls, it can become a **security risk** — especially in enterprise or multi-tenant environments.
    
    ---
    
    ### 🔐 **Ways to Secure Inter-VLAN Routing**
    
    Here’s a detailed breakdown of techniques used to secure inter-VLAN communication:
    
    ---
    
    ## 1. ✅ **Use Access Control Lists (ACLs)**
    
    **ACLs (standard or extended)** allow you to control which devices or subnets can communicate across VLANs.
    
    ### 🔧 Example (Cisco):
    
    ```bash
    bash
    CopyEdit
    ip access-list extended BLOCK_VLAN20
     deny ip 192.168.20.0 0.0.0.255 192.168.10.0 0.0.0.255
     permit ip any any
    
    interface Vlan20
     ip access-group BLOCK_VLAN20 in
    
    ```
    
    ### 🔍 Purpose:
    
    - Allow only necessary communication.
    - Block sensitive VLANs (like servers or management) from open access.
    
    ---
    
    ## 2. ✅ **Limit VLAN Routing Using VRFs or Private VLANs**
    
    - Use **VRFs (Virtual Routing and Forwarding)** to isolate routing tables between departments or tenants.
    - Use **Private VLANs (PVLANs)** to isolate hosts within the same VLAN at Layer 2 while allowing external routing control.
    
    ---
    
    ## 3. ✅ **Disable Unused SVIs**
    
    Only enable SVIs for VLANs that **need** inter-VLAN routing. Unused VLANs should not have IP interfaces.
    
    ```bash
    bash
    CopyEdit
    interface Vlan999
     shutdown
    
    ```
    
    ---
    
    ## 4. ✅ **Use Firewall or Security Appliance Between VLANs**
    
    - For sensitive communication (e.g., between guest VLAN and internal VLAN), route traffic through a **firewall** instead of routing directly on the Layer 3 switch.
    - This allows deep packet inspection, logging, NAT, and more advanced security controls.
    
    ---
    
    ## 5. ✅ **Port Security & DHCP Snooping**
    
    Even though not directly related to inter-VLAN routing, securing the **access layer** helps:
    
    - Prevent rogue devices from accessing VLANs.
    - **DHCP snooping** helps prevent rogue DHCP servers and can be combined with **dynamic ARP inspection**.
    
    ---
    
    ## 6. ✅ **Use VLAN-Based Segmentation Wisely**
    
    - Group devices based on **security zones** (e.g., User VLAN, Server VLAN, DMZ VLAN).
    - Use **least privilege** principles — only allow necessary communication (e.g., clients can access servers, but not each other).
    
    ---
    
    ## 7. ✅ **Logging and Monitoring**
    
    - Monitor inter-VLAN traffic using **NetFlow**, **SPAN**, or security tools.
    - Look for unusual access patterns across VLANs.
    
    ---
    
    ## 🔐 Example Scenario
    
    | VLAN | Name | Allowed Access |
    | --- | --- | --- |
    | 10 | HR Users | Can access internal web server only |
    | 20 | Finance | Can access HR DB server only |
    | 30 | Guest WiFi | Internet only — no access to VLAN 10/20 |
    
    This can be enforced with **ACLs or firewall policies** between SVIs.
    
    ---
    
    ### 🧾 Summary Table
    
    | Security Technique | Description |
    | --- | --- |
    | Access Control Lists (ACLs) | Granular control over inter-VLAN traffic |
    | VRFs / PVLANs | Logical isolation of routing domains or devices |
    | Disable Unused SVIs | Prevent unnecessary routing |
    | Firewall Between VLANs | Deep inspection and tighter control |
    | VLAN Segmentation | Group and restrict communication by role/function |
    | Port Security | Prevent unauthorized devices from joining VLANs |
    | DHCP Snooping / ARP Guard | Prevent spoofing attacks at Layer 2 |
    | Logging & Monitoring | Visibility into inter-VLAN communications |
- **What role does the default gateway play in VLANs?**
    
    ### 🌐 **What Is a Default Gateway in VLANs?**
    
    In a VLAN environment, the **default gateway** is the **Layer 3 IP address** (usually configured on a router or Layer 3 switch) that hosts use to send traffic **outside their subnet/VLAN**.
    
    > 💡 It’s typically the IP address of the Switch Virtual Interface (SVI) for that VLAN.
    > 
    
    ---
    
    ### 🧠 **Why Is It Needed?**
    
    Hosts in the **same VLAN** can communicate directly via Layer 2 switching (MAC address learning).
    
    But when a host needs to communicate with a device in **another VLAN**, it must send the traffic to its **default gateway**, which:
    
    1. **Receives the Layer 3 packet**
    2. **Routes it to the destination VLAN**
    3. **Forwards it via the appropriate SVI**
    
    ---
    
    ### 📶 **Example**
    
    Let's say you have this setup:
    
    | Host | VLAN | IP Address | Default Gateway |
    | --- | --- | --- | --- |
    | A | 10 | 192.168.10.10 | 192.168.10.1 |
    | B | 20 | 192.168.20.20 | 192.168.20.1 |
    
    On a **Layer 3 switch**:
    
    ```bash
    bash
    CopyEdit
    interface Vlan10
     ip address 192.168.10.1 255.255.255.0
     no shutdown
    
    interface Vlan20
     ip address 192.168.20.1 255.255.255.0
     no shutdown
    
    ```
    
    📌 When **Host A** wants to ping **Host B**, it sends the packet to `192.168.10.1`, its **default gateway** — the switch then **routes** the packet to `192.168.20.0/24` and forwards it to Host B.
    
    ---
    
    ### 📦 **Key Functions of Default Gateway in VLANs**
    
    | Function | Description |
    | --- | --- |
    | Inter-VLAN Routing | Enables communication between VLANs (e.g., VLAN 10 ↔ VLAN 20) |
    | Path to External Networks | Acts as the next hop for internet or WAN-bound traffic |
    | Local Subnet Exit Point | Handles all traffic that doesn't match a host's local subnet/VLAN |
    | Common Gateway IP Address | Hosts in the same VLAN share the same gateway IP (the SVI for their VLAN) |
    
    ---
    
    ### 🧾 Summary
    
    - A **default gateway** is essential for **Layer 3 communication** between VLANs or external networks.
    - In VLANs, the gateway is typically the **SVI IP address** on a router or Layer 3 switch.
    - Without it, **inter-VLAN communication cannot happen**.

---

## 🔍 **VLAN Troubleshooting**

- **A host cannot reach another host in a different VLAN — how do you troubleshoot?**
    
    ### 🌐 **What Is a Default Gateway in VLANs?**
    
    In a VLAN environment, the **default gateway** is the **Layer 3 IP address** (usually configured on a router or Layer 3 switch) that hosts use to send traffic **outside their subnet/VLAN**.
    
    > 💡 It’s typically the IP address of the Switch Virtual Interface (SVI) for that VLAN.
    > 
    
    ---
    
    ### 🧠 **Why Is It Needed?**
    
    Hosts in the **same VLAN** can communicate directly via Layer 2 switching (MAC address learning).
    
    But when a host needs to communicate with a device in **another VLAN**, it must send the traffic to its **default gateway**, which:
    
    1. **Receives the Layer 3 packet**
    2. **Routes it to the destination VLAN**
    3. **Forwards it via the appropriate SVI**
    
    ---
    
    ### 📶 **Example**
    
    Let's say you have this setup:
    
    | Host | VLAN | IP Address | Default Gateway |
    | --- | --- | --- | --- |
    | A | 10 | 192.168.10.10 | 192.168.10.1 |
    | B | 20 | 192.168.20.20 | 192.168.20.1 |
    
    On a **Layer 3 switch**:
    
    ```bash
    bash
    CopyEdit
    interface Vlan10
     ip address 192.168.10.1 255.255.255.0
     no shutdown
    
    interface Vlan20
     ip address 192.168.20.1 255.255.255.0
     no shutdown
    
    ```
    
    📌 When **Host A** wants to ping **Host B**, it sends the packet to `192.168.10.1`, its **default gateway** — the switch then **routes** the packet to `192.168.20.0/24` and forwards it to Host B.
    
    ---
    
    ### 📦 **Key Functions of Default Gateway in VLANs**
    
    | Function | Description |
    | --- | --- |
    | Inter-VLAN Routing | Enables communication between VLANs (e.g., VLAN 10 ↔ VLAN 20) |
    | Path to External Networks | Acts as the next hop for internet or WAN-bound traffic |
    | Local Subnet Exit Point | Handles all traffic that doesn't match a host's local subnet/VLAN |
    | Common Gateway IP Address | Hosts in the same VLAN share the same gateway IP (the SVI for their VLAN) |
    
    ---
    
    ### 🧾 Summary
    
    - A **default gateway** is essential for **Layer 3 communication** between VLANs or external networks.
    - In VLANs, the gateway is typically the **SVI IP address** on a router or Layer 3 switch.
    - Without it, **inter-VLAN communication cannot happen**.
    
    ---
    
    Would you like to see a packet flow diagram showing how a host uses the default gateway to reach another VLAN?
    
    ### You said:
    
    A host cannot reach another host in a different VLAN — how do you troubleshoot?
    
    ### ChatGPT said:
    
    Troubleshooting inter-VLAN connectivity can feel like peeling an onion 🧅 — you must go layer by layer (L1 → L3). Here's a **step-by-step FAANG-style** guide to troubleshoot why **Host A in VLAN 10 can't reach Host B in VLAN 20**.
    
    ---
    
    ## 🛠️ Step-by-Step Troubleshooting Guide
    
    ### ✅ 1. **Check Host IP Configuration**
    
    On both hosts:
    
    | Item | Expected Value |
    | --- | --- |
    | IP Address | Correct for VLAN subnet (e.g., 192.168.10.10) |
    | Subnet Mask | Matches VLAN subnet mask (e.g., /24) |
    | Default Gateway | Matches SVI IP (e.g., 192.168.10.1) |
    
    Use `ipconfig` (Windows) or `ifconfig`/`ip a` (Linux) to verify.
    
    ---
    
    ### ✅ 2. **Verify VLAN Assignment on Switch Ports**
    
    Make sure each host is connected to the correct VLAN.
    
    ```bash
    bash
    CopyEdit
    show vlan brief
    
    ```
    
    Check that:
    
    - Host A's port is in VLAN 10
    - Host B's port is in VLAN 20
    
    ```bash
    bash
    CopyEdit
    interface Gig0/2
     switchport mode access
     switchport access vlan 10
    
    ```
    
    ---
    
    ### ✅ 3. **Verify SVIs on the Layer 3 Switch**
    
    Ensure SVIs are configured and **UP**.
    
    ```bash
    bash
    CopyEdit
    show ip interface brief
    
    ```
    
    You should see:
    
    - `Vlan10` with IP like `192.168.10.1` (UP/UP)
    - `Vlan20` with IP like `192.168.20.1` (UP/UP)
    
    If an SVI is **administratively down** or **not up**, bring it up:
    
    ```bash
    bash
    CopyEdit
    interface Vlan10
     no shutdown
    
    ```
    
    ---
    
    ### ✅ 4. **Check That Routing Is Enabled**
    
    For inter-VLAN routing, **Layer 3 switch must have IP routing enabled**.
    
    ```bash
    bash
    CopyEdit
    show run | include ip routing
    
    ```
    
    If not:
    
    ```bash
    bash
    CopyEdit
    ip routing
    
    ```
    
    ---
    
    ### ✅ 5. **Test Reachability to Gateway (Ping the SVI)**
    
    From each host, try to ping its **own default gateway**:
    
    ```bash
    bash
    CopyEdit
    ping 192.168.10.1   # From Host A
    ping 192.168.20.1   # From Host B
    
    ```
    
    If fails:
    
    - Host might be in wrong VLAN
    - Switch port might be misconfigured
    - SVI might be down
    
    ---
    
    ### ✅ 6. **Test Inter-VLAN Routing**
    
    From Host A (VLAN 10), try to ping Host B (VLAN 20):
    
    ```bash
    bash
    CopyEdit
    ping 192.168.20.10
    
    ```
    
    If fails:
    
    - Check ACLs (see next step)
    - Check routing table
    - Check ARP and MAC address tables
    
    ---
    
    ### ✅ 7. **Look for ACLs Blocking Traffic**
    
    Check for any **ACL applied to SVIs** or interfaces:
    
    ```bash
    bash
    CopyEdit
    show access-lists
    show run | include access-group
    
    ```
    
    Remove or adjust if it's blocking inter-VLAN traffic:
    
    ```bash
    bash
    CopyEdit
    ip access-group BLOCK_TRAFFIC in
    
    ```
    
    ---
    
    ### ✅ 8. **Check the ARP Table**
    
    On the switch:
    
    ```bash
    bash
    CopyEdit
    show ip arp
    
    ```
    
    Make sure the MAC address of the other host is resolved correctly.
    
    If not, ARP is failing → Layer 2 problem or SVI issue.
    
    ---
    
    ### ✅ 9. **Check MAC Address Table (Switching)**
    
    Ensure the switch learns MACs in the correct VLANs:
    
    ```bash
    bash
    CopyEdit
    show mac address-table vlan 10
    show mac address-table vlan 20
    
    ```
    
    ---
    
    ### ✅ 10. **Check Trunk Ports**
    
    If traffic is routed via another switch (e.g., router-on-a-stick), ensure the **trunk link is carrying both VLANs**:
    
    ```bash
    bash
    CopyEdit
    show interface trunk
    
    ```
    
    Look for:
    
    - Trunking enabled
    - Allowed VLANs include 10, 20
    
    ---
    
    ## 📦 Additional Tools for Debugging
    
    | Tool/Command | Purpose |
    | --- | --- |
    | `ping`, `traceroute` | Test Layer 3 reachability |
    | `show cdp neighbors` | Verify L2 connections between switches |
    | `debug ip routing` | Check real-time routing behavior |
    | `show spanning-tree vlan X` | Ensure VLAN isn't being blocked |
    
    ---
    
    ## 🧾 Summary Table
    
    | Check | Description |
    | --- | --- |
    | IP config on hosts | Correct subnet, gateway |
    | VLAN membership | Access port in right VLAN |
    | SVI status | Up/up with correct IP |
    | IP routing enabled | `ip routing` on Layer 3 switch |
    | Gateway reachability | Host ↔ SVI ping works |
    | No blocking ACLs | No deny between VLANs |
    | ARP and MAC tables | Lookups working |
    | Trunking (if applicable) | Carrying correct VLANs |
- **What might cause a VLAN to stop forwarding traffic?**
    
    A VLAN might **stop forwarding traffic** due to a variety of issues across **Layer 1 to Layer 3**. Here's a structured breakdown of possible causes and how to troubleshoot them.
    
    ---
    
    ## 🚫 Common Reasons Why a VLAN Might Stop Forwarding Traffic
    
    ### 1. ❌ **Interface Down or Misconfigured**
    
    - **Access ports** assigned to the VLAN may be administratively shut down or unplugged.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show interface status
        interface Gig0/1
          no shutdown
        
        ```
        
    
    ---
    
    ### 2. ❌ **VLAN Does Not Exist or Is Not Active**
    
    - The VLAN might have been **deleted** or is not created on the switch.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show vlan brief
        vlan 10   --> must be listed
        vlan 10
          name Users
        
        ```
        
    
    ---
    
    ### 3. ❌ **No Active Ports Assigned to VLAN**
    
    - A VLAN becomes **inactive** if no ports are assigned to it.
    - Switch may **not forward traffic** for inactive VLANs.
    - **Fix:** Ensure at least one port is assigned to the VLAN.
    
    ---
    
    ### 4. ❌ **STP Blocking the VLAN**
    
    - **Spanning Tree Protocol** might block ports in the VLAN to prevent loops.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show spanning-tree vlan 10
        
        ```
        
        Look for ports in **blocking** or **listening** state.
        
    
    ---
    
    ### 5. ❌ **Native VLAN Mismatch on Trunks**
    
    - VLAN traffic dropped due to **trunk port misconfiguration** (especially native VLAN mismatch).
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show interfaces trunk
        
        ```
        
        Make sure native VLANs match on both ends.
        
    
    ---
    
    ### 6. ❌ **VTP Misconfiguration (if used)**
    
    - **VTP (VLAN Trunking Protocol)** may delete VLANs on other switches if a switch with a **higher revision number** advertises outdated VLAN info.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show vtp status
        
        ```
        
        Be cautious when connecting new switches to the network.
        
    
    ---
    
    ### 7. ❌ **Trunk Port Not Allowing VLAN**
    
    - If the VLAN isn’t **allowed** on the trunk link, traffic won’t pass between switches.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        switchport trunk allowed vlan 10,20
        
        ```
        
    
    ---
    
    ### 8. ❌ **Port Security or MAC Filtering**
    
    - **Port security** may be blocking traffic from certain MAC addresses.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show port-security interface Gig0/1
        
        ```
        
    
    ---
    
    ### 9. ❌ **Misconfigured ACLs**
    
    - ACLs on SVIs or router interfaces might **block intra-VLAN** or **inter-VLAN** traffic.
    - **Fix:**
        
        ```bash
        bash
        CopyEdit
        show access-lists
        
        ```
        
    
    ---
    
    ### 10. ❌ **Duplicate IP or MAC Conflict**
    
    - Duplicate addressing may cause switches to **blackhole** traffic.
    - **Fix:** Check for IP conflicts using `arp -a` or `show ip arp`.
    
    ---
    
    ### 11. ❌ **Broadcast Storm or Loop**
    
    - A loop or broadcast storm can saturate the VLAN and bring it down.
    - **Fix:** Make sure STP is enabled and functioning correctly.
    
    ---
    
    ### 12. ❌ **SVI Interface Down**
    
    - If the SVI (e.g., `interface Vlan10`) is **down**, the VLAN won’t route traffic.
    - **Fix:**
        - Ensure at least one port in VLAN is **up**.
        - Ensure SVI is **not administratively shut down**.
    
    ---
    
    ### ✅ How to Start Troubleshooting
    
    | Step | Command Example |
    | --- | --- |
    | Verify VLAN exists | `show vlan brief` |
    | Check trunk configuration | `show interface trunk` |
    | Check SVI status | `show ip interface brief` |
    | Check STP blocking | `show spanning-tree vlan <id>` |
    | Check port assignment | `show interface status` |
    | Look for security violations | `show port-security` |
    | Verify ARP/MAC table | `show mac address-table` and `show arp` |
- **How would you verify VLAN tagging across a trunk link?**
    
    To **verify VLAN tagging across a trunk link**, you need to confirm that:
    
    1. The trunk is **operational and forwarding traffic**.
    2. The **correct VLANs are allowed and tagged** across the trunk.
    3. **Native VLAN is consistent** between both ends.
    4. No **misconfiguration or mismatched encapsulation** exists.
    
    Here’s a **step-by-step guide** (FAANG-style) to verify VLAN tagging:
    
    ---
    
    ## ✅ Step 1: Check Trunk Status
    
    ```bash
    bash
    CopyEdit
    show interfaces trunk
    
    ```
    
    ### 🔍 Key Fields to Look At:
    
    | Field | Meaning |
    | --- | --- |
    | **Port** | Interface acting as a trunk |
    | **Mode** | `on`, `desirable`, `auto`, `trunk` |
    | **Encapsulation** | `802.1q` (or `isl` if legacy) |
    | **Status** | Should be `trunking` |
    | **Vlans allowed on trunk** | VLANs configured to pass |
    | **Vlans allowed and active** | VLANs allowed and currently active |
    | **Vlans in spanning tree forwarding state and not pruned** | Actually forwarding |
    
    ---
    
    ## ✅ Step 2: Check Native VLAN Configuration
    
    VLANs not tagged (native VLAN) must match on both ends, or **CDP/LLDP warnings** may occur.
    
    ```bash
    bash
    CopyEdit
    show interfaces <interface> switchport
    
    ```
    
    Check:
    
    - Operational Mode: `trunk`
    - Native VLAN: same on both sides
    - Administrative and Operational Trunking Encapsulation
    
    ---
    
    ## ✅ Step 3: Validate VLANs Are Allowed on the Trunk
    
    Ensure required VLANs are **not filtered** on the trunk:
    
    ```bash
    bash
    CopyEdit
    show running-config interface <trunk-interface>
    
    ```
    
    Look for:
    
    ```bash
    bash
    CopyEdit
    switchport trunk allowed vlan 10,20,30
    
    ```
    
    If missing:
    
    ```bash
    bash
    CopyEdit
    switchport trunk allowed vlan add <VLAN_ID>
    
    ```
    
    ---
    
    ## ✅ Step 4: Use CDP/LLDP to Verify Remote End
    
    Check what VLANs and trunking protocol the **neighboring switch** is using.
    
    ```bash
    bash
    CopyEdit
    show cdp neighbors detail
    
    ```
    
    Or:
    
    ```bash
    bash
    CopyEdit
    show lldp neighbors detail
    
    ```
    
    ---
    
    ## ✅ Step 5: Verify VLANs Are Actually Tagging (Optional Packet Capture)
    
    If you're doing **deep validation**, check traffic using:
    
    - **SPAN (Switched Port Analyzer)**:
        
        ```bash
        bash
        CopyEdit
        monitor session 1 source interface <trunk>
        monitor session 1 destination interface <monitor-port>
        
        ```
        
    - Look for **802.1Q tags** in Wireshark (tagged VLAN = 4-byte field in Ethernet frame).
    
    ---
    
    ## ✅ Step 6: Check MAC and ARP Tables
    
    Verify MAC address learning across VLANs:
    
    ```bash
    bash
    CopyEdit
    show mac address-table vlan 10
    show arp
    
    ```
    
    If hosts in a remote VLAN are visible, VLAN tagging is working correctly.
    
    ---
    
    ## 🧾 Summary Checklist
    
    | Check | Command |
    | --- | --- |
    | Trunk status and VLANs allowed | `show interfaces trunk` |
    | Native VLAN match | `show interfaces switchport` |
    | VLAN exists and is active | `show vlan brief` |
    | Neighbor trunk settings | `show cdp/lldp neighbors detail` |
    | Verify MAC learning across VLANs | `show mac address-table vlan <ID>` |
    | Packet-level verification (optional) | SPAN + Wireshark for 802.1Q tags |
- **How do you diagnose and fix VLAN mismatches between switches?**
    
    Diagnosing and fixing **VLAN mismatches between switches** is essential to prevent issues like traffic drops, inconsistent connectivity, or spanning-tree problems.
    
    Let’s break this down like a FAANG-level network engineer would — step by step.
    
    ---
    
    ## 🔍 What Is a VLAN Mismatch?
    
    A **VLAN mismatch** occurs when two switches connected via a **trunk port** have:
    
    - **Different native VLANs**, or
    - **Inconsistent allowed VLANs**, or
    - One switch in **trunk mode**, the other in **access mode**
    
    This leads to:
    
    - Traffic being **unintentionally dropped or flooded**
    - **CDP/LLDP warnings**
    - Broken **inter-VLAN** communication
    
    ---
    
    ## 🛠️ Step-by-Step: How to Diagnose VLAN Mismatches
    
    ### ✅ 1. **Check Interface Trunk Status**
    
    ```bash
    bash
    CopyEdit
    show interfaces trunk
    
    ```
    
    Check:
    
    - Interface status: Should say `trunking`
    - Allowed VLANs
    - Native VLAN
    
    > 🔎 Use this on both switches connected via trunk link.
    > 
    
    ---
    
    ### ✅ 2. **Check Native VLAN Settings**
    
    ```bash
    bash
    CopyEdit
    show interfaces <interface> switchport
    
    ```
    
    Look for:
    
    - Operational mode: `trunk`
    - Native VLAN: should be **same on both ends**
    
    ⚠️ If they differ, **CDP/LLDP** may show a warning:
    
    ```
    makefile
    CopyEdit
    %CDP-4-NATIVE_VLAN_MISMATCH: Native VLAN mismatch discovered
    
    ```
    
    ---
    
    ### ✅ 3. **Check Allowed VLAN List**
    
    Ensure the same VLANs are allowed on both ends of the trunk:
    
    ```bash
    bash
    CopyEdit
    show run interface <interface>
    
    ```
    
    Look for:
    
    ```bash
    bash
    CopyEdit
    switchport trunk allowed vlan 10,20,30
    
    ```
    
    Fix by:
    
    ```bash
    bash
    CopyEdit
    switchport trunk allowed vlan add 20
    
    ```
    
    ---
    
    ### ✅ 4. **Check VLAN Status**
    
    On both switches, verify the VLANs are created and active:
    
    ```bash
    bash
    CopyEdit
    show vlan brief
    
    ```
    
    If the VLAN is **missing**, traffic in that VLAN will be dropped even if tagging is correct.
    
    ---
    
    ### ✅ 5. **Check for VTP Mismatches (if VTP is used)**
    
    ```bash
    bash
    CopyEdit
    show vtp status
    
    ```
    
    Issues:
    
    - Domain mismatch
    - Different VTP modes (e.g., server/client)
    - Unexpected pruning
    
    ---
    
    ### ✅ 6. **Use CDP or LLDP to Spot Mismatches**
    
    ```bash
    bash
    CopyEdit
    show cdp neighbors detail
    
    ```
    
    It will often **warn you of native VLAN mismatches** or mismatched trunk modes.
    
    ---
    
    ## 🔧 How to Fix VLAN Mismatches
    
    | Issue | Fix |
    | --- | --- |
    | Native VLAN mismatch | Set same native VLAN on both ends of the trunk |
    | Trunk not negotiated properly | Force `switchport mode trunk` on both ends |
    | VLAN not allowed | Add VLAN to trunk's allowed list |
    | VLAN not created on one switch | Use `vlan <id>` to create it |
    | Mismatched access/trunk ports | Set both ports to `trunk` or `access`, as needed |
    
    ### Example:
    
    ```bash
    bash
    CopyEdit
    interface Gig0/1
     switchport trunk encapsulation dot1q
     switchport mode trunk
     switchport trunk native vlan 99
     switchport trunk allowed vlan 10,20,30
    
    ```
    
    Repeat similarly on the peer switch.
    
    ---
    
    ## 🧾 Summary: VLAN Mismatch Troubleshooting Checklist
    
    | ✅ Check | 🔍 Command |
    | --- | --- |
    | Interface trunking status | `show interfaces trunk` |
    | Native VLAN configured correctly | `show interfaces switchport` |
    | VLAN exists and is active | `show vlan brief` |
    | Allowed VLANs match on both ends | `show run interface <intf>` |
    | CDP/LLDP warnings | `show cdp neighbors detail` |
    | VTP status (if applicable) | `show vtp status` |
- **What commands would you use to view VLAN assignments and status?**
    
    ## 🚀 On **Cisco IOS** Switches (most common in interviews)
    
    ### 🔹 1. `show vlan brief`
    
    **Purpose:** Shows VLANs configured, their names, status, and ports assigned.
    
    ```bash
    bash
    CopyEdit
    Switch# show vlan brief
    
    ```
    
    **Sample Output:**
    
    ```
    swift
    CopyEdit
    VLAN Name                             Status    Ports
    ---- -------------------------------- --------- -------------------------------
    1    default                          active    Fa0/1, Fa0/2
    10   Users                            active    Fa0/3, Fa0/4
    20   Voice                            active    Fa0/5
    
    ```
    
    ---
    
    ### 🔹 2. `show interfaces switchport`
    
    **Purpose:** Shows Layer 2 configuration of interfaces, including:
    
    - Access or trunk mode
    - VLAN assignment
    - Native VLAN
    - Operational status
    
    ```bash
    bash
    CopyEdit
    Switch# show interfaces GigabitEthernet0/1 switchport
    
    ```
    
    **Sample Output:**
    
    ```
    yaml
    CopyEdit
    Administrative Mode: static access
    Operational Mode: static access
    Access Mode VLAN: 10 (Users)
    Trunking Native Mode VLAN: 1 (default)
    
    ```
    
    ---
    
    ### 🔹 3. `show interfaces trunk`
    
    **Purpose:** Displays which interfaces are **trunking**, and which VLANs are **allowed, active, and forwarding**.
    
    ```bash
    bash
    CopyEdit
    Switch# show interfaces trunk
    
    ```
    
    **Sample Output:**
    
    ```
    nginx
    CopyEdit
    Port      Mode         Encapsulation  Status        Native vlan
    Gi0/1     on           802.1q         trunking      1
    
    Vlans allowed on trunk: 10,20,30
    Vlans in STP forwarding state: 10,20
    
    ```
    
    ---
    
    ### 🔹 4. `show mac address-table`
    
    **Purpose:** Shows MAC address learning per VLAN and interface.
    
    ```bash
    bash
    CopyEdit
    Switch# show mac address-table vlan 10
    
    ```
    
    Useful for verifying traffic forwarding and MAC learning.
    
    ---
    
    ### 🔹 5. `show running-config interface <interface>`
    
    **Purpose:** See exact configuration of an interface, including VLAN mode and ID.
    
    ```bash
    bash
    CopyEdit
    Switch# show run interface FastEthernet0/3
    
    ```
    
    **Example Output:**
    
    ```
    kotlin
    CopyEdit
    interface FastEthernet0/3
     switchport mode access
     switchport access vlan 10
    
    ```
    
    ---
    
    ## 🚀 On **Juniper (JunOS)** Switches
    
    ### 🔹 1. `show vlans`
    
    **Purpose:** List VLANs configured and assigned interfaces.
    
    ```bash
    bash
    CopyEdit
    show vlans
    
    ```
    
    ### 🔹 2. `show ethernet-switching interfaces`
    
    **Purpose:** Shows VLAN membership per interface.
    
    ```bash
    bash
    CopyEdit
    show ethernet-switching interfaces
    
    ```
    
    ### 🔹 3. `show configuration interfaces <interface>`
    
    **Purpose:** Check interface access or trunk config, and VLAN assignment.
    
    ```bash
    bash
    CopyEdit
    show configuration interfaces ge-0/0/1
    
    ```
    
    ---
    
    ## 🧾 Summary Table
    
    | Function | Cisco Command | Juniper Command |
    | --- | --- | --- |
    | View all VLANs and port assignment | `show vlan brief` | `show vlans` |
    | View VLAN config of a specific port | `show interfaces switchport` | `show ethernet-switching interfaces` |
    | Check trunk ports and allowed VLANs | `show interfaces trunk` | `show configuration interfaces <intf>` |
    | View port config (mode, VLAN) | `show run interface <interface>` | `show configuration interfaces <intf>` |
    | MAC address learning per VLAN | `show mac address-table vlan <id>` | `show ethernet-switching table` |

---

## 🔐 **Security & Best Practices**

- **What are VLAN hopping attacks and how do you prevent them?**
    
    **VLAN Hopping Attacks** are a serious security threat where an attacker on one VLAN manages to send packets to another VLAN, bypassing the VLAN segmentation designed to isolate traffic. This breaks the network isolation VLANs are meant to provide.
    
    ---
    
    ## What is VLAN Hopping?
    
    **VLAN hopping** allows an attacker to gain access to traffic on VLANs they shouldn’t have access to, by exploiting switch configurations or VLAN tagging mechanisms.
    
    Two common VLAN hopping techniques:
    
    ### 1. **Switch Spoofing**
    
    - Attacker’s device pretends to be a switch by negotiating a trunk link.
    - If successful, it can send and receive tagged frames for multiple VLANs, gaining access beyond its assigned VLAN.
    
    ### 2. **Double Tagging**
    
    - The attacker sends frames with two VLAN tags.
    - The first (outer) tag is stripped off by the first switch (native VLAN).
    - The second tag remains and is forwarded to the VLAN represented by the inner tag.
    - This allows the attacker to send packets to a different VLAN.
    
    ---
    
    ## How VLAN Hopping Works: A Simple Example
    
    - The attacker is on VLAN 10.
    - The native VLAN on trunk ports is VLAN 1.
    - The attacker crafts a packet tagged for VLAN 1 (native VLAN) plus VLAN 20.
    - The first switch removes VLAN 1 tag and forwards the packet to VLAN 20.
    - Thus, the attacker reaches VLAN 20 traffic, bypassing segmentation.
    
    ---
    
    ## How to Prevent VLAN Hopping Attacks
    
    ### 1. **Set Native VLAN to an Unused VLAN ID**
    
    - Avoid using VLAN 1 as the native VLAN on trunks.
    - Use a dedicated, unused VLAN (e.g., VLAN 999) as native VLAN.
    
    ```bash
    bash
    CopyEdit
    switchport trunk native vlan 999
    
    ```
    
    ---
    
    ### 2. **Disable Auto-Trunking on Access Ports**
    
    - Explicitly configure ports as access ports; prevent negotiation protocols (DTP).
    
    ```bash
    bash
    CopyEdit
    switchport mode access
    switchport nonegotiate
    
    ```
    
    ---
    
    ### 3. **Use VLAN Access Control Lists (VACLs) or Private VLANs**
    
    - Implement filtering rules to control VLAN traffic flow.
    
    ---
    
    ### 4. **Prune Unused VLANs on Trunks**
    
    - Allow only necessary VLANs on trunk ports.
    
    ```bash
    bash
    CopyEdit
    switchport trunk allowed vlan 10,20,30
    
    ```
    
    ---
    
    ### 5. **Enable Port Security**
    
    - Limit MAC addresses per port to prevent rogue devices.
    
    ```bash
    bash
    CopyEdit
    switchport port-security
    switchport port-security maximum 1
    switchport port-security violation restrict
    
    ```
    
    ---
    
    ### 6. **Avoid Using VLAN 1**
    
    - VLAN 1 is default VLAN and often carries management traffic; avoid using it for user data.
    
    ---
    
    ### 7. **Monitor and Audit Switch Ports**
    
    - Use tools to detect rogue trunk ports or unexpected trunk negotiations.
    
    ---
    
    ## Summary Table
    
    | Prevention Method | Description |
    | --- | --- |
    | Change native VLAN to unused | Prevent double tagging on VLAN 1 |
    | Disable trunk negotiation (DTP) | Avoid unauthorized trunk ports |
    | Prune VLANs on trunks | Limit VLANs passing through trunks |
    | Enable port security | Restrict MAC addresses and block rogue devices |
    | Avoid VLAN 1 for user data | VLAN 1 is common target for attacks |
    | Use VACLs or Private VLANs | Filter traffic between VLANs |
- **Why is it a best practice to avoid using VLAN 1?**
- **How do private VLANs (PVLANs) work and what are they used for?**
    
    **Private VLANs (PVLANs)** are an advanced VLAN feature that provide **layer 2 isolation within the same VLAN**. They allow more granular segmentation of devices in the same VLAN, preventing communication between certain ports while still allowing connectivity to shared resources like a router or gateway.
    
    ---
    
    ## What are Private VLANs?
    
    PVLANs divide a single VLAN into **multiple sub-VLANs** to isolate devices without requiring multiple VLAN IDs.
    
    ### PVLAN Types:
    
    | PVLAN Type | Description | Communication Allowed |
    | --- | --- | --- |
    | **Primary VLAN** | The main VLAN that includes all PVLAN subtypes | Communicates with all ports in the PVLAN group |
    | **Isolated VLAN** | Ports cannot communicate with any other ports except promiscuous ports | No communication with other isolated or community ports |
    | **Community VLAN** | Ports can communicate with other ports in the same community VLAN and promiscuous ports | Communication within community and promiscuous ports |
    
    ### Port Roles:
    
    | Role | Description |
    | --- | --- |
    | **Promiscuous** | Can communicate with all ports in the PVLAN (primary, isolated, community) |
    | **Isolated** | Can communicate only with promiscuous ports; isolated from others |
    | **Community** | Can communicate within the community VLAN and promiscuous ports |
    
    ---
    
    ## How PVLANs Work: Example
    
    - Primary VLAN: 100
    - Isolated VLAN: 101
    - Community VLAN: 102
    - Devices in VLAN 101 cannot talk to each other but can talk to promiscuous ports (like a default gateway).
    - Devices in VLAN 102 can talk to each other and to promiscuous ports.
    - Promiscuous ports (like router interfaces) communicate with all.
    
    ---
    
    ## Why Use PVLANs?
    
    - **Increase security** by isolating devices on the same subnet/VLAN.
    - Useful in **service provider environments** (e.g., hosting multiple customers on the same VLAN).
    - Control communication in environments like **data centers, hotels, or ISPs**.
    - Avoid multiple VLANs while enforcing isolation.
    
    ---
    
    ## How to Configure PVLANs (Cisco example):
    
    ```bash
    bash
    CopyEdit
    ! Create primary VLAN
    vlan 100
     private-vlan primary
    
    ! Create isolated VLAN
    vlan 101
     private-vlan isolated
    
    ! Create community VLAN
    vlan 102
     private-vlan community
    
    ! Associate secondary VLANs with primary VLAN
    vlan 100
     private-vlan association 101,102
    
    ! Configure ports
    interface GigabitEthernet0/1
     switchport mode private-vlan host
     switchport private-vlan host-association 100 101
    
    interface GigabitEthernet0/2
     switchport mode private-vlan host
     switchport private-vlan host-association 100 102
    
    interface GigabitEthernet0/3
     switchport mode private-vlan promiscuous
     switchport private-vlan mapping 100 101,102
    
    ```
    
    ---
    
    ## Summary
    
    | Aspect | Description |
    | --- | --- |
    | Purpose | Layer 2 isolation within a VLAN |
    | PVLAN types | Primary, Isolated, Community |
    | Port roles | Promiscuous, Isolated, Community |
    | Use cases | Data centers, service providers, security zones |
    | Benefits | Security, better segmentation, fewer VLANs required |
- **How does dynamic VLAN assignment work (e.g., using RADIUS)?**
- **How does voice VLAN differ from data VLAN?**
    
    ## Voice VLAN vs Data VLAN
    
    | Aspect | Voice VLAN | Data VLAN |
    | --- | --- | --- |
    | **Purpose** | Dedicated VLAN for **VoIP (voice) traffic** | VLAN for general **data traffic** (PCs, servers) |
    | **Traffic Type** | Real-time voice packets (e.g., SIP, RTP) | Standard data packets (e.g., HTTP, FTP, etc.) |
    | **QoS Priority** | High priority with QoS for low latency and jitter | Normal or best-effort QoS |
    | **Tagging** | Tagged with voice VLAN ID using 802.1Q | Tagged with data VLAN ID or sometimes untagged for access ports |
    | **Switchport Setup** | Typically configured as a trunk or hybrid port carrying both voice and data VLANs | Usually access ports for data VLAN only |
    | **Device Types** | IP phones and sometimes PC connected through phone's switch port | PCs, printers, servers, etc. |
    | **Security** | Voice VLAN traffic often isolated for better security and performance | Data VLAN carries normal user traffic |
    
    ---
    
    ## How It Works in Practice
    
    - A typical **IP phone** connects to a switch port.
    - The switch port is configured as a **“voice VLAN” port**, allowing:
        - **Data VLAN** traffic from the PC connected to the phone’s PC port (untagged or tagged for data VLAN).
        - **Voice VLAN** traffic from the phone itself, tagged with the voice VLAN ID.
    - Switch differentiates and prioritizes voice packets to ensure call quality.
    
    ---
    
    ## Example Cisco Config Snippet
    
    ```bash
    bash
    CopyEdit
    interface GigabitEthernet0/1
     switchport access vlan 10          ! Data VLAN for PC
     switchport voice vlan 20           ! Voice VLAN for IP phone
     switchport mode access
    
    ```
    
    ---
    
    **Summary:**
    
    Voice VLAN isolates and prioritizes voice traffic to maintain call quality, while data VLAN carries regular network data traffic.
    

---

## 🏗️ **Design & Architecture**

- **How would you design a VLAN plan for a multi-floor office building?**
    
    Designing a VLAN plan for a multi-floor office building requires thoughtful segmentation, scalability, and security. Here's a FAANG-style detailed approach:
    
    ---
    
    ## Step 1: Understand Requirements
    
    - Number of floors, departments per floor
    - Types of devices (PCs, IP phones, printers, IoT)
    - Security zones (guest Wi-Fi, admin, finance)
    - Future growth and scalability
    - Management and monitoring needs
    
    ---
    
    ## Step 2: Define VLAN Structure
    
    **Option 1: Per Floor VLANs**
    
    - Assign one VLAN per floor for data
    - Example: Floor 1 → VLAN 10, Floor 2 → VLAN 20, etc.
    - Simple, easy to manage physically
    
    **Option 2: Per Department VLANs**
    
    - Separate VLANs for each department across floors
    - Example: Finance VLAN 100, Engineering VLAN 200
    - Good for logical segmentation across floors
    
    **Option 3: Hybrid**
    
    - VLANs per floor + per service
    - e.g., Floor 1 Data VLAN 10, Voice VLAN 110
    - Floor 2 Data VLAN 20, Voice VLAN 120
    - Separate guest VLAN across all floors (e.g., VLAN 999)
    
    ---
    
    ## Step 3: Plan VLAN IDs
    
    - Use a structured numbering scheme (e.g., floor number × 10 or 100 + service code)
    - Avoid VLAN 1 (default) for security
    - Reserve ranges for voice, wireless, guest, management
    
    ---
    
    ## Step 4: IP Addressing Scheme (Optional but recommended)
    
    - Map VLANs to subnet ranges, e.g., VLAN 10 → 10.1.10.0/24 (Floor 1 Data)
    - Ensures clarity in routing and troubleshooting
    
    ---
    
    ## Step 5: Configure Trunks and Access Ports
    
    - **Access ports:** Assigned to VLAN based on location/device type
    - **Trunk ports:** Between switches and to routers, carry allowed VLANs
    
    ---
    
    ## Step 6: Security & QoS
    
    - Implement **Private VLANs** or ACLs for sensitive areas
    - Use **Voice VLANs** for IP phones with QoS prioritization
    - Prune unnecessary VLANs on trunks
    - Use port security to limit unauthorized access
    
    ---
    
    ## Step 7: Redundancy and Scalability
    
    - Use **spanning-tree protocol** to prevent loops
    - Design for **easy addition** of VLANs or floors
    - Centralized VLAN management with tools like Cisco Prime or network controllers
    
    ---
    
    ## Example VLAN Plan Summary Table:
    
    | Floor | VLAN Data | VLAN Voice | VLAN Guest | VLAN Management |
    | --- | --- | --- | --- | --- |
    | 1 | 10 | 110 | 910 | 9100 |
    | 2 | 20 | 120 | 910 | 9100 |
    | 3 | 30 | 130 | 910 | 9100 |
    
    ---
    
    ## Additional Tips:
    
    - Document VLAN assignments and IP schemes clearly
    - Use consistent naming conventions
    - Regularly audit VLANs and remove unused ones
- **What is the role of VLANs in data center design?**
- **How do you scale VLANs across multiple switches or sites?**
- **What are the limitations of traditional VLANs in large networks?**
- **How do VLANs integrate with cloud or SDN environments?**

---

## 🧠 **Scenario-Based / Advanced Questions**

- **You see untagged traffic on a trunk port — what could be wrong?**
    
    ## Possible Causes for Untagged Traffic on a Trunk Port
    
    ### 1. **Native VLAN Mismatch or Presence**
    
    - The **native VLAN** on a trunk port is the VLAN for which traffic is sent **untagged**.
    - If a device sends traffic tagged with the native VLAN ID, the switch strips the tag and forwards it **untagged**.
    - If the native VLAN is different on each side of the trunk, untagged frames can be misinterpreted or cause security issues.
    
    ### 2. **Access Port Configured as Trunk**
    
    - Sometimes a port configured as trunk still receives untagged frames from devices connected that do not tag VLANs.
    - For example, an access device (PC, printer) connected directly to a trunk port sends untagged frames.
    
    ### 3. **Misconfigured Switchport Mode**
    
    - The port may be set as `trunk` but actually should be `access` for the connected device.
    - Or, the port is negotiating trunks via DTP (Dynamic Trunking Protocol) and causing untagged traffic.
    
    ### 4. **Devices Not Tagging VLANs Properly**
    
    - End devices like IP phones, wireless APs, or non-managed switches sometimes send untagged traffic even when connected to trunk ports.
    
    ### 5. **Native VLAN Carrying User Data**
    
    - Carrying important user VLANs on the native VLAN is discouraged because native VLAN traffic is untagged and can be a security risk.
    
    ---
    
    ## How to Troubleshoot
    
    | Step | Command / Check |
    | --- | --- |
    | Check native VLAN on both ends | `show interfaces trunk` / `show interfaces switchport` |
    | Verify port mode | `show run interface <interface>` |
    | Check if device connected is tagging VLANs | Inspect device config or use packet capture |
    | Disable DTP and force trunk/access mode | `switchport nonegotiate` + `switchport mode trunk/access` |
    | Change native VLAN to unused | `switchport trunk native vlan <unused VLAN>` |
    
    ---
    
    ## Best Practices to Avoid Untagged Traffic Issues
    
    - Set native VLAN to a dedicated unused VLAN (e.g., VLAN 999).
    - Avoid carrying user data on the native VLAN.
    - Disable DTP on access ports.
    - Ensure end devices connect to access ports, not trunks.
    - Prune unnecessary VLANs on trunk ports.
- **Describe how VLANs can isolate IoT devices from critical systems.**
- **How would you implement VLAN-based guest and corporate network separation?**
- **A trunk port is down, and VLANs aren't propagating — how do you troubleshoot?**
- **How would you use VLANs in a campus network to implement security zones?**