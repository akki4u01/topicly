# IP/MPLS

### IP/MPLS & Routing

1. How does MPLS differ from traditional IP routing?
2. Explain how VRF works in an MPLS environment.
3. Describe a real-world issue you solved involving BGP or OSPF convergence.
4. What is the difference between control plane and data plane in network devices?
5. How do you troubleshoot a VRF route leaking issue?
6. What are your steps for designing a redundant WAN link using OSPF/BGP?

### Security

1. Explain how IPSec VPNs function. How do you troubleshoot tunnel failures?
2. What kind of access control lists (ACLs) have you implemented and for what purpose?
3. What are some best practices for securing a network at Layer 3?

### Tools & Automation

1. How have you used IXIA or TRex to benchmark network performance?
2. Describe a scenario where you used Python for network automation.
3. What monitoring tools have you worked with for real-time traffic visibility?

### NOC & Operations

1. How do you handle an after-hours P1 network outage?
2. Give an example where you worked with a vendor to resolve a complex issue.
3. How do you validate a network change before going live?

- MPLS - Its a technique of IP Routing
- RIB, FIB, LIB, LFIB
    
    ### 📚 **1️⃣ RIB — Routing Information Base**
    
    - **What it is:** A database of **all** routes learned by the router via routing protocols (like OSPF, BGP, EIGRP) or static routes.
    - **Where it lives:** Control Plane.
    - **What it does:** The router uses the RIB to figure out the **best path** for each destination network.
    - ✅ **Key point:** Not all routes in the RIB get used for actual forwarding — only the best ones do.
    
    ### 📚 **2️⃣ FIB — Forwarding Information Base**
    
    - **What it is:** A table used for **actual packet forwarding**.
    - **Where it lives:** Data Plane.
    - **What it does:** Stores only the best routes (next-hop, outgoing interface) taken from the RIB.
    - ✅ **Key point:** When a packet arrives, the router consults the FIB to decide **where to send it next** as fast as possible.
    
    ### 📚 **3️⃣ LIB — Label Information Base (MPLS)**
    
    - **What it is:** A control-plane table that stores label bindings.
    - **Where it lives:** Control Plane (MPLS-specific).
    - **What it does:** Keeps track of which MPLS label to use for which destination prefix, learned via LDP or RSVP.
    - ✅ **Key point:** LIB is like the MPLS version of the RIB — it stores all learned label mappings.
    
    ### 📚 **4️⃣ LFIB — Label Forwarding Information Base**
    
    - **What it is:** A forwarding table for MPLS packets.
    - **Where it lives:** Data Plane.
    - **What it does:** When an MPLS-labeled packet arrives, the LFIB says:
        
        ➜ which label to pop/swap/push
        
        ➜ where to forward the packet next.
        
    - ✅ **Key point:** LFIB is to MPLS forwarding what the FIB is to IP forwarding.
    
    ## 🧩 How they connect:
    
    | Control Plane | Data Plane |
    | --- | --- |
    | RIB | FIB |
    | LIB | LFIB |
    - Routing protocols fill the **RIB** → best routes go to **FIB**
    - Label protocols (LDP, RSVP) fill the **LIB** → label operations go to **LFIB**
    
    ✅ **So, in short:**
    
    - **RIB** → *All possible routes*
    - **FIB** → *Used to forward IP packets*
    - **LIB** → *All label bindings*
    - **LFIB** → *Used to forward MPLS packets*
    
    # Interview Answer
    
    > . In a router, there are four key tables used for routing and forwarding, especially when MPLS is involved:
    > 
    > 
    > **1️⃣ RIB (Routing Information Base) - Control plane**
    > 
    > - *This is the control plane database that stores **all possible routes** learned from routing protocols like OSPF, BGP, EIGRP, as well as static and connected routes.*
    > - *It contains destination prefixes, the next-hop IP, routing protocol metrics, administrative distances, and route attributes.*
    > - *The router selects the **best route** for each destination from the RIB.*
    > 
    > **2️⃣ FIB (Forwarding Information Base) - Data Plane**
    > 
    > - *The FIB lives in the data plane and is built from the RIB.*
    > - *It contains only the **best routes** — the destination prefixes, next-hop IP address, outgoing interface, and Layer 2 encapsulation info.*
    > - *It’s used for fast packet forwarding.*
    > 
    > **3️⃣ LIB (Label Information Base) - Control plane**
    > 
    > - *In MPLS-enabled routers, the LIB is part of the control plane.*
    > - *It stores **all label bindings** received and advertised via label distribution protocols like LDP or RSVP.*
    > - *It maps destination prefixes to incoming and outgoing labels.*
    > 
    > **4️⃣ LFIB (Label Forwarding Information Base) -  Data Plane**
    > 
    > - *The LFIB is the data plane table for MPLS.*
    > - *It contains only the **active label forwarding entries**, mapping incoming labels to outgoing labels and outgoing interfaces.*
    > - *When an MPLS-labeled packet arrives, the router uses the LFIB to know whether to pop, swap, or push a label and where to send the packet next.”*
    > 
    > *“In short: the RIB and LIB are control plane databases with full information, while the FIB and LFIB are optimized data plane tables for actual packet forwarding.”*
    > 
    
    ---
    
    ## ✅ **What they contain (summary table)**
    
    | Table | What it Contains |
    | --- | --- |
    | **RIB** | All destination prefixes, next hops, metrics, protocol info |
    | **FIB** | Best routes only: destination prefix, next hop, outgoing interface, Layer 2 rewrite info |
    | **LIB** | All label bindings: prefix ↔ incoming label ↔ outgoing label |
    | **LFIB** | Active label forwarding: incoming label ↔ outgoing label ↔ action (pop/swap/push) ↔ outgoing interface |
    
    ---
    
    ## 🔑 **Bonus Tip (for extra points)**
    
    If the interviewer digs deeper, you can add:
    
    > “The separation of control plane (RIB/LIB) and data plane (FIB/LFIB) ensures efficient forwarding performance while allowing flexible routing and label distribution.”
    > 

![MPLS+Fundamentals+-+RIB+,+LIB+,+FIB+,+LFIB+-+GNS3.png](MPLSFundamentals-RIBLIBFIBLFIB-GNS3.png)