---
id: TCP-UDP
title: TCP UDP Related Questions
---

import Quiz from '@site/src/components/Quiz';

<Quiz 
  questions={[
    {
      questionText: 'Is TCP connection-oriented or connectionless?',
      options: ['Connection-oriented', 'Connectionless', 'Both', 'Neither'],
      answer: 'Connection-oriented',
    },
    {
      questionText: 'Which protocol is faster?',
      options: ['UDP', 'TCP', 'Both are same', 'Depends on cable'],
      answer: 'UDP',
    },
    {
      questionText: 'Which flag initiates a TCP connection?',
      options: ['SYN', 'ACK', 'FIN', 'RST'],
      answer: 'SYN',
    },
    {
      questionText: 'What is the 3-Way Handshake?',
      options: ['SYN, SYN-ACK, ACK', 'SYN, ACK, FIN', 'ACK, ACK, SYN', 'Connect, Accept, Send'],
      answer: 'SYN, SYN-ACK, ACK',
    },
    {
      questionText: 'Does UDP guarantee delivery?',
      options: ['No', 'Yes', 'Sometimes', 'Only on LAN'],
      answer: 'No',
    }
  ]}
/>

<br/>



# TCP UDP
This is TCP UDP contents

# TCP/UDP

# ***fundamentals, troubleshooting, packet loss on the network —> Important***

TCP

![TCP Header](/img/TCPHeader.png)

UDP

![UDP Header](/img/UDPHeader.png)

- **6. What is TCP windowing?**
    
    **TCP windowing** is a flow control mechanism in the **Transmission Control Protocol (TCP)** that manages how much data can be sent **before requiring an acknowledgment (ACK)** from the receiver. It ensures that the sender doesn't overwhelm the receiver or the network.
    
    ---
    
    ## 🧠 **Explain Like I’m 5 (ELI5) Analogy:**
    
    Imagine you’re passing books to a friend across a table.
    
    - Your friend has only **two hands**, so they can only hold a few books at a time.
    - You can **only hand them more books once they’ve placed the old ones on the shelf** and told you, “I’m ready for more!”
    
    This is **TCP windowing**:
    
    You, the sender, can only send a certain number of “books” (bytes) at a time—based on what the receiver can handle.
    
    ---
    
    ## 🔍 Key Concepts:
    
    ### ✅ 1. **TCP Window Size**
    
    - It defines the **amount of data (in bytes)** the receiver can accept **without sending an ACK**.
    - Advertised by the **receiver** in each ACK packet.
    
    ### ✅ 2. **Sliding Window**
    
    - As ACKs come in, the sender **"slides" the window forward** and sends more data.
    - This allows continuous data transmission without waiting for an ACK for every single segment.
    
    ### ✅ 3. **Congestion Window (cwnd)**
    
    - TCP also uses a **congestion window** to limit data based on **network conditions**.
    - The **actual window** = `min(receiver window, congestion window)`
    
    ### ✅ 4. **Window Scaling (RFC 1323)**
    
    - In high-bandwidth networks, standard 16-bit windows (max 65,535 bytes) are too small.
    - Window scaling allows TCP to support much **larger windows** (up to 1 GB) by using a scaling factor.
    
    ---
    
    ## 📈 Example:
    
    Let’s say:
    
    - Receiver window = 10,000 bytes
    - Sender sends 10,000 bytes
    - Receiver sends an ACK for all 10,000 bytes
    - Sender slides the window forward and sends the next 10,000 bytes
    
    ---
    
    ## 🚨 What Happens If You Ignore It?
    
    Without TCP windowing:
    
    - **Fast senders** could overflow **slow receivers** (buffer overflow)
    - Leads to **packet loss**, **retransmissions**, and **poor performance**
    
    ---
    
    ## 📦 Use in Real Networks:
    
    TCP windowing is especially important in:
    
    - **High-latency** or **long-distance** networks (e.g., satellite, transcontinental links)
    - **Performance tuning** (e.g., using `TCP Window Scaling` in Linux or routers)
    - **Troubleshooting throughput issues**: e.g., low bandwidth despite high capacity → could be a small window size
- **7. Describe TCP congestion control mechanisms.**
    
    TCP congestion control mechanisms are critical for maintaining **network stability and efficiency**. These mechanisms dynamically adjust how much data a sender can transmit based on **network congestion signals**—mostly inferred from **packet loss or delay**.
    
    ---
    
    ## 🔍 Key TCP Congestion Control Mechanisms
    
    ### 1. **Slow Start**
    
    - When a connection begins, TCP doesn’t know the network capacity.
    - It starts with a **small congestion window (cwnd)**, typically 1 MSS (Maximum Segment Size).
    - For every ACK received, **cwnd doubles (exponential growth)**.
    - Continues until:
        - A loss is detected, or
        - It reaches a threshold called **ssthresh** (slow start threshold).
    
    ### 2. **Congestion Avoidance**
    
    - Once cwnd > ssthresh, TCP enters **congestion avoidance mode**.
    - cwnd grows **linearly**, not exponentially.
    - For each RTT (round-trip time), cwnd increases by **1 MSS**.
    
    ### 3. **Fast Retransmit**
    
    - If the sender receives **3 duplicate ACKs**, it assumes a packet was lost **before the retransmission timer expires**.
    - Retransmits the missing segment **immediately**.
    - This avoids long timeouts.
    
    ### 4. **Fast Recovery**
    
    - After **fast retransmit**, TCP **halves the cwnd** (multiplicative decrease).
    - Sets **ssthresh = cwnd / 2**.
    - Continues in **congestion avoidance** rather than slow start.
    
    ---
    
    ## 🔄 Lifecycle Summary:
    
    | Phase | cwnd Growth | Trigger to Enter | Exit Condition |
    | --- | --- | --- | --- |
    | **Slow Start** | Exponential | Connection start | Reaches ssthresh or loss |
    | **Cong. Avoid.** | Linear | cwnd > ssthresh | Packet loss |
    | **Fast Retrans.** | Immediate Retrans. | 3 dup ACKs | Retransmission |
    | **Fast Recovery** | cwnd reduced (×0.5) | After Fast Retransmit | ACK for missing segment |
    
    ---
    
    ## 🧠 Congestion Detection Signals:
    
    - **Packet loss** = main congestion signal.
    - **Delay (RTT increase)** is a softer indicator in some modern variants (e.g., BBR, TCP Vegas).
    
    ---
    
    ## 🚀 Modern Enhancements (Advanced TCP Variants):
    
    - **TCP Reno**: Traditional behavior (Slow Start, Fast Recovery).
    - **TCP NewReno**: Improved handling of multiple lost packets.
    - **TCP Cubic**: Default in Linux; better for high-bandwidth networks.
    - **TCP BBR (Bottleneck Bandwidth and RTT)**: Google’s algorithm, estimates actual bandwidth and RTT, doesn't rely on loss for control.
    
    ---
    
    ## 🔧 Real-World Use:
    
    - Congestion control directly impacts:
        - **Throughput**
        - **Network fairness**
        - **Application performance (e.g., file transfers, video streaming)**
- Slow Start, Congestion Avoidance (AIMD), Fast Retransmit, and Fast Recovery help manage congestion. These respond to perceived congestion via packet loss or delay.

**8. How would you identify and fix TCP retransmissions or slowness?**

- Use Wireshark or `netstat`, check for high RTT, window sizes, duplicate ACKs, interface drops, or queuing delays.

**9. What’s the difference between TCP and UDP? Use case examples?**

- TCP is reliable (email, web browsing). UDP is faster but unreliable (VoIP, video streaming).

### 🔹 **Basic Understanding**

- **What is TCP and how is it different from UDP?**
    
    ### ✅ What is TCP and How is It Different from UDP?
    
    ---
    
    ## 🔹 What is TCP?
    
    **TCP (Transmission Control Protocol)** is a **connection-oriented**, **reliable** transport layer protocol (Layer 4 in OSI) used to **guarantee delivery** of data between devices over a network.
    
    It is used by protocols like:
    
    - HTTP/HTTPS (Web browsing)
    - FTP (File Transfer)
    - SMTP (Email)
    - SSH (Remote access)
    
    ---
    
    ## 🧱 Key Features of TCP:
    
    | Feature | Description |
    | --- | --- |
    | 🔁 Connection-oriented | Uses a **3-way handshake** to establish a session |
    | 🔐 Reliable delivery | Guarantees **no data loss** (with ACKs and retransmissions) |
    | 📦 Ordered delivery | Ensures **data arrives in correct order** |
    | 🔁 Flow control | Prevents overwhelming the receiver (via sliding window) |
    | 🛑 Congestion control | Adjusts data rate to avoid network congestion |
    
    ---
    
    ## 🔹 What is UDP?
    
    **UDP (User Datagram Protocol)** is a **connectionless**, **unreliable** protocol — best for applications where speed matters more than reliability.
    
    Used by:
    
    - DNS
    - VoIP
    - Video streaming
    - Online gaming
    
    ---
    
    ## ⚖️ TCP vs. UDP – Comparison Table
    
    | Feature | **TCP** | **UDP** |
    | --- | --- | --- |
    | Connection setup | Yes (3-way handshake) | No setup needed |
    | Reliability | Guaranteed (ACKs, retransmission) | Not guaranteed |
    | Order of data | Guaranteed | Not guaranteed |
    | Speed | Slower (more overhead) | Faster (less overhead) |
    | Packet loss handling | Retransmits lost packets | Ignores lost packets |
    | Flow control | Yes (sliding window, buffer management) | No |
    | Use cases | Web, Email, File transfer | Video, DNS, Real-time apps |
    
    ---
    
    ## 🎯 Use Case Analogy:
    
    - **TCP = Registered Mail 📬**
        - You get a receipt, confirmation of delivery, and retries if it fails.
    - **UDP = Postcard 📮**
        - It’s fast, but if it gets lost, you’ll never know.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP is a reliable, connection-oriented protocol ensuring data arrives correctly and in order. UDP is faster but connectionless and unreliable, ideal for time-sensitive use cases like voice or video where latency matters more than reliability.
    > 
- **What are the key features of TCP?**
    - (e.g., reliable, ordered, connection-oriented, etc.)
    - 
    
    ## ✅ Key Features of TCP
    
    ---
    
    ### 1. 🔁 **Connection-Oriented Protocol**
    
    - TCP **establishes a connection** before any data is exchanged.
    - Uses the **3-way handshake** (SYN, SYN-ACK, ACK) to start communication.
    
    > 🔹 Ensures both sender and receiver are ready.
    > 
    
    ---
    
    ### 2. 🔐 **Reliable Data Transfer**
    
    - Guarantees that data:
        - **Reaches the destination**
        - Is **retransmitted** if lost or corrupted
    
    > 🔹 Uses ACKs, sequence numbers, and checksums for reliability.
    > 
    
    ---
    
    ### 3. 🧱 **Ordered Delivery**
    
    - Data is reassembled in the **exact order** it was sent.
    - If packets arrive out of order, TCP buffers them until missing pieces arrive.
    
    > 🔹 Critical for apps like file transfers, web browsing, and email.
    > 
    
    ---
    
    ### 4. 📦 **Byte-Oriented Stream**
    
    - TCP treats data as a continuous stream of bytes (not individual packets).
    - Applications read/write byte streams (e.g., `recv()` returns a byte stream, not discrete messages).
    
    > 🔹 Enables smooth handling of large files or long sessions.
    > 
    
    ---
    
    ### 5. 🔁 **Flow Control**
    
    - Prevents sender from overwhelming the receiver.
    - Achieved using the **sliding window** protocol and **advertised window size** in TCP headers.
    
    > 🔹 Dynamically adjusts how much data can be sent at once.
    > 
    
    ---
    
    ### 6. 🌊 **Congestion Control**
    
    - Detects and reacts to **network congestion**.
    - Algorithms like:
        - **Slow Start**
        - **Congestion Avoidance**
        - **Fast Retransmit**
        - **Fast Recovery**
    
    > 🔹 Helps avoid packet loss and maintain stability under load.
    > 
    
    ---
    
    ### 7. 🛡️ **Error Detection**
    
    - Each segment includes a **checksum** to detect data corruption.
    - Corrupted segments are discarded and retransmitted.
    
    ---
    
    ### 8. 🧼 **Full-Duplex Communication**
    
    - TCP allows **bi-directional** (simultaneous) data exchange.
    - Both ends can send and receive independently at the same time.
    
    ---
    
    ### 9. 🛑 **Graceful Connection Termination**
    
    - Uses a **4-way FIN handshake** to cleanly close the connection.
    - Ensures all data is sent and acknowledged before termination.
    
    ---
    
    ### 🔍 Bonus: Other Features
    
    | Feature | Description |
    | --- | --- |
    | **Ports** | Uses port numbers to identify services |
    | **Segment retransmission** | Lost segments are resent automatically |
    | **Push flag (PSH)** | Forces immediate delivery to the app |
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP is a reliable, connection-oriented, stream-based transport protocol. It guarantees ordered and error-free delivery, provides flow and congestion control, and enables full-duplex communication. These features make it ideal for applications like web browsing, file transfers, and email.
    > 
- TCP Sliding Window Protocol - **Explain the concept of sliding window in TCP.**
    
    ### 🎯 Purpose:
    
    - Controls **how much data** the sender can transmit before waiting for an acknowledgment (ACK).
    - Enables **flow control** between sender and receiver.
    - Improves **network utilization** and throughput.
    
    ---
    
    ### 🔍 How Sliding Window Works:
    
    - **Window size** = Number of bytes the sender can send without receiving an ACK.
    - The sender can send multiple segments (up to window size) before needing an ACK.
    - Receiver advertises a **receive window (rwnd)**, indicating how much buffer it has.
    - Sender maintains **sequence numbers** to track sent but unacknowledged data.
    
    ---
    
    ### Example:
    
    | Event | Action |
    | --- | --- |
    | Window size = 4 packets | Sender can send 4 packets without ACK |
    | Sender sends packets 1-4 | Waits for ACK |
    | Receives ACK for packet 1 | Window slides forward by 1 packet |
    | Now can send packet 5 | And so on |
    
    ---
    
    ### Benefits:
    
    - Allows **continuous data flow** without waiting for every packet.
    - Enables **flow control**: receiver controls how much sender can send to avoid buffer overflow.
    - Efficient utilization of network bandwidth.
- TCP Congestion Control
    
    ### 🎯 Purpose:
    
    - Prevents network congestion by **adjusting sending rate**.
    - Avoids **packet loss** and **network collapse** due to overload.
    
    ---
    
    ### Key Algorithms:
    
    ---
    
    ### 1. **Slow Start**
    
    - TCP starts with a small congestion window (`cwnd`), usually 1 or 2 MSS (Maximum Segment Size).
    - Increases `cwnd` **exponentially** each RTT (doubling every RTT).
    - Goal: Quickly find network capacity.
    
    ---
    
    ### 2. **Congestion Avoidance**
    
    - When `cwnd` reaches a threshold (`ssthresh`), growth slows to **linear** increase.
    - Increases by roughly 1 MSS per RTT.
    - Prevents overwhelming network.
    
    ---
    
    ### 3. **Fast Retransmit**
    
    - On detecting **3 duplicate ACKs** (indicating a lost packet), sender retransmits the missing packet **without waiting for timeout**.
    
    ---
    
    ### 4. **Fast Recovery**
    
    - After fast retransmit, TCP reduces `cwnd` and `ssthresh` but doesn’t drop to 1 MSS.
    - Instead, `cwnd` is reduced to `ssthresh` and grows linearly.
    - Quickly recovers from packet loss without restarting slow start.
    
    ---
    
    ### Visual Summary of cwnd Over Time:
    
    ```
    sql
    CopyEdit
    cwnd (congestion window)
    │               /\/\/\/\/\/\/
    │             /
    │           /
    │         /
    │       /
    │-----/---------------------> time
        slow start      congestion avoidance
    
    ```
    
    ---
    
    ### Parameters:
    
    | Parameter | Description |
    | --- | --- |
    | `cwnd` | Congestion window (max unACKed data) |
    | `ssthresh` | Slow start threshold (switch point between slow start & congestion avoidance) |
    | MSS | Maximum Segment Size (bytes) |
    
    ---
    
    ### Why Congestion Control is Crucial?
    
    - Without it, multiple TCP senders could flood the network.
    - Results in **packet loss**, retransmissions, and degraded performance.
    - Congestion control dynamically balances throughput and fairness.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP’s sliding window manages flow control by letting the sender transmit multiple packets before needing an ACK, based on receiver’s buffer size.
    > 
    > 
    > TCP’s **congestion control** algorithms (slow start, congestion avoidance, fast retransmit, and fast recovery) dynamically adjust the sending rate to avoid network congestion and ensure reliable data transfer.
    > 
- Nagle’s Algorithm and Delayed ACK
    
    ### 🎯 Purpose:
    
    - To **reduce the number of small packets** (tiny segments) sent over the network, which wastes bandwidth and increases overhead (known as the “small packet problem” or “tinygram problem”).
    
    ---
    
    ### 🔍 How It Works:
    
    - When data is sent, TCP immediately sends the first small segment.
    - Then, **Nagle’s algorithm holds back sending any more small segments until:**
        1. An **ACK** is received for the previously sent data, or
        2. The outgoing data buffer accumulates enough data to fill a full-sized segment (Maximum Segment Size - MSS).
    
    ---
    
    ### 🎯 Result:
    
    - Combines many small writes into fewer, larger TCP segments.
    - Reduces network congestion and packet overhead.
    
    ---
    
    ### ⚠️ Example Scenario Without Nagle:
    
    - Application sends many small chunks (e.g., 1 byte at a time).
    - TCP sends a TCP segment for each small write.
    - Network flooded with tiny packets → inefficient.
    
    ---
    
    # ✅ Delayed ACK
    
    ---
    
    ### 🎯 Purpose:
    
    - To **reduce the number of ACK packets** sent by the receiver.
    
    ---
    
    ### 🔍 How It Works:
    
    - Instead of immediately sending an ACK for every received TCP segment, the receiver **delays the ACK** for a short interval (usually up to 200 ms).
    - If more data arrives during this interval, a **single ACK can acknowledge multiple packets**.
    - If the receiver has data to send, it can **piggyback** the ACK onto outgoing data, saving packets.
    
    ---
    
    ### 🎯 Result:
    
    - Fewer ACK packets → less network traffic.
    - Improved efficiency, especially in duplex communication.
    
    ---
    
    # ⚠️ Interaction Between Nagle’s Algorithm and Delayed ACK
    
    ---
    
    ### The "Small-Write" Problem / Performance Issue:
    
    - Nagle waits to send new small data until previous data is ACKed.
    - Delayed ACK postpones ACKs up to 200 ms.
    - This can cause **significant latency**, especially for interactive applications (e.g., Telnet, SSH).
    
    ---
    
    ### Example:
    
    - Client sends 1 byte.
    - TCP sends it immediately (Nagle allows first send).
    - Client waits for ACK before sending more.
    - Server delays ACK due to delayed ACK timer.
    - Client waits ~200ms before sending more data → **latency spike**.
    
    ---
    
    # ✅ How to Mitigate This Issue?
    
    - Disable **Nagle’s algorithm** (e.g., TCP_NODELAY socket option) for latency-sensitive apps.
    - Tune **delayed ACK timers** on the receiver (not common).
    - Combine writes to send larger chunks if possible.
    
    ---
    
    # 🧠 Interview Summary:
    
    > Nagle’s algorithm reduces the number of small TCP packets by buffering small segments until previous data is acknowledged or enough data accumulates.
    > 
    > 
    > **Delayed ACK** reduces ACK traffic by delaying acknowledgments to batch them.
    > 
    > However, when combined, they can introduce delays for small writes due to waiting on ACKs, causing latency spikes in interactive applications.
    > 
- **Explain the TCP 3-way handshake.**
    
    # ✅ TCP 3-Way Handshake Explained
    
    ---
    
    ### 🎯 Purpose:
    
    - Establish a **reliable connection** between a TCP client and server.
    - Synchronize **initial sequence numbers (ISNs)** and other TCP parameters.
    - Ensure **both sides are ready** to communicate.
    
    ---
    
    ### 🔍 How It Works — Step by Step:
    
    | Step | Action | Description |
    | --- | --- | --- |
    | **1** | **SYN (Synchronize)** from Client → Server | Client sends a TCP segment with the **SYN flag set** and an **initial sequence number (ISN)**, e.g., `Seq=1000`. This indicates the client wants to open a connection. |
    | **2** | **SYN-ACK** from Server → Client | Server responds with a TCP segment with **SYN and ACK flags set**. It:  - Acknowledges client's SYN (`Ack=Client_ISN + 1`)  - Sends its own SYN with server’s ISN, e.g., `Seq=3000`. |
    | **3** | **ACK** from Client → Server | Client sends an ACK segment back to the server:  - Acknowledges server’s SYN (`Ack=Server_ISN + 1`)  - Connection is now established. |
    
    ---
    
    ### Visual Timeline:
    
    ```
    pgsql
    CopyEdit
    Client                              Server
       | --- SYN (Seq=1000) ----------> |
       | <--- SYN-ACK (Seq=3000, Ack=1001) --- |
       | --- ACK (Ack=3001) ----------> |
    Connection Established! Both sides synchronized.
    
    ```
    
    ---
    
    ### Key Points:
    
    - **Sequence numbers** are used to track bytes sent.
    - Each side **acknowledges** the other’s SYN by incrementing ISN by 1.
    - After handshake, data transfer begins using these synchronized sequence numbers.
    - The handshake helps prevent **half-open connections** and **spoofed requests**.
    
    ---
    
    ### Why 3 Steps?
    
    - The **3-way handshake** ensures:
        - Both client and server agree on initial sequence numbers.
        - Both sides confirm the other is reachable and ready.
    - Prevents issues with delayed or duplicate packets from previous connections.
    
    ---
    
    ### Failure Cases:
    
    - If any step is lost (e.g., SYN-ACK not received), the client retries.
    - If retries fail, the connection attempt times out.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > The TCP 3-way handshake establishes a reliable connection by exchanging SYN and ACK packets between client and server. It synchronizes initial sequence numbers and confirms readiness, enabling ordered, reliable data transfer.
    > 
- TCP Connection Termination (4-Way Handshake)
    
    # ✅ TCP Connection Termination (4-Way Handshake)
    
    ---
    
    ### 🎯 Purpose:
    
    - Gracefully close a TCP connection.
    - Ensure both sides have finished sending data.
    - Avoid data loss during connection close.
    
    ---
    
    ### 🔍 How It Works — Step by Step:
    
    | Step | Action | Description |
    | --- | --- | --- |
    | **1** | **FIN** from Client → Server | The side that wants to close the connection (e.g., client) sends a **FIN** segment indicating it has finished sending data. |
    | **2** | **ACK** from Server → Client | Server acknowledges the FIN with an **ACK** (`Ack = FIN_seq + 1`). At this point, the client → server direction is closed, but server → client can still send data. |
    | **3** | **FIN** from Server → Client | Server sends its own **FIN** when it’s ready to close its side of the connection. |
    | **4** | **ACK** from Client → Server | Client acknowledges the server’s FIN with an **ACK** (`Ack = FIN_seq + 1`). Connection fully closed. |
    
    ---
    
    ### Visual Timeline:
    
    ```
    pgsql
    CopyEdit
    Client                               Server
       | --- FIN (Seq=x) -------------> |
       | <--- ACK (Ack=x+1) ------------ |
       | <--- FIN (Seq=y) ------------- |
       | --- ACK (Ack=y+1) ------------ |
    Connection Closed.
    
    ```
    
    ---
    
    ### Key Points:
    
    - The connection is **half-closed** after step 2: client can't send more data, but server can.
    - Both sides must **close their side independently**.
    - This ensures **all pending data** in both directions is delivered before closing.
    - After final ACK, connection goes into **TIME_WAIT** state on the side that closed last (usually the client).
    - TIME_WAIT allows delayed packets to arrive and prevents confusion from delayed duplicates.
    
    ---
    
    ### TIME_WAIT State:
    
    - Last ACK sender keeps the socket in TIME_WAIT for typically 2× Maximum Segment Lifetime (MSL).
    - Prevents issues if delayed packets from old connections arrive after new connections reuse the same ports.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP connection termination uses a 4-way handshake where each side independently closes its data stream by sending a FIN, and the other side acknowledges it. This process ensures an orderly shutdown, allowing any remaining data to be transmitted and avoiding data loss.
    > 
- TCP Connection States
    
    ### TCP connection management is often represented as a **state machine** — each state reflects where the connection is in the process of setup, data transfer, or teardown.
    
    ---
    
    ## 🔑 Important TCP States
    
    | State | Description |
    | --- | --- |
    | **CLOSED** | No connection exists or connection is fully closed. |
    | **LISTEN** | Server is waiting for incoming connection requests (SYN). |
    | **SYN_SENT** | Client has sent SYN, waiting for SYN-ACK from server. |
    | **SYN_RECEIVED** | Server received SYN, sent SYN-ACK, waiting for ACK from client. |
    | **ESTABLISHED** | Connection is open; data can be sent and received freely. |
    | **FIN_WAIT_1** | Endpoint has sent FIN to close connection, waiting for ACK. |
    | **FIN_WAIT_2** | FIN acknowledged, waiting for FIN from the other side. |
    | **CLOSING** | Both sides sent FIN; waiting for ACK of own FIN. |
    | **TIME_WAIT** | Waiting for enough time to ensure delayed packets are gone. |
    | **CLOSE_WAIT** | Received FIN, waiting for application to close. |
    | **LAST_ACK** | Sent FIN after receiving FIN, waiting for final ACK. |
    
    ---
    
    ## 🔍 Typical Connection Lifecycle
    
    ### 1. **Connection Establishment**
    
    - Client starts in **CLOSED**
    - Client → Server: send **SYN** → **SYN_SENT**
    - Server → Client: receive SYN, send **SYN-ACK** → **SYN_RECEIVED**
    - Client → Server: receive SYN-ACK, send **ACK** → **ESTABLISHED**
    - Server → Client: receive ACK → **ESTABLISHED**
    
    ---
    
    ### 2. **Data Transfer**
    
    - Both sides in **ESTABLISHED**
    - Bidirectional data flow.
    
    ---
    
    ### 3. **Connection Termination**
    
    - Endpoint initiating close sends **FIN** → **FIN_WAIT_1**
    - After receiving ACK for FIN → **FIN_WAIT_2**
    - When receiving FIN from peer → **TIME_WAIT**
    - After timeout → **CLOSED**
    - Peer receiving FIN goes into **CLOSE_WAIT** while waiting for application to close.
    - After application calls close and sends FIN → **LAST_ACK**
    - After ACK received → **CLOSED**
    
    ---
    
    ## 🧠 State Transitions Diagram (Simplified):
    
    ```
    objectivec
    CopyEdit
    CLOSED → SYN_SENT → ESTABLISHED → FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED
                   ↘
                 SYN_RECEIVED → ESTABLISHED
    ESTABLISHED → CLOSE_WAIT → LAST_ACK → CLOSED
    
    ```
    
    ---
    
    ## Why Are These States Important?
    
    - They help the TCP stack track **progress and ensure reliable connection management**.
    - TIME_WAIT prevents **old delayed packets** from interfering with new connections.
    - Proper handling avoids resource leaks and ensures graceful teardown.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP connections transition through multiple states from CLOSED to ESTABLISHED and back to CLOSED, passing through states like SYN_SENT, SYN_RECEIVED, FIN_WAIT, and TIME_WAIT. These states ensure reliable connection setup, data transfer, and graceful termination.
    > 
- TCP TIME_WAIT State Explained
    
    # ✅ TCP TIME_WAIT State Explained
    
    ---
    
    ### 🎯 What is TIME_WAIT?
    
    - **TIME_WAIT** (also called the **2MSL wait state**) is a **TCP connection state** after the connection has been closed by the side that performed the **active close** (the side that sent the final ACK).
    - The connection remains in TIME_WAIT for a duration of **twice the Maximum Segment Lifetime (2 × MSL)**.
    
    ---
    
    ### 🔍 Why Does TIME_WAIT Exist?
    
    1. **Ensure all delayed packets are expired:**
        - TCP packets can be delayed or arrive out of order in the network.
        - TIME_WAIT ensures that any delayed or duplicate packets from the old connection **expire in the network** before a new connection with the same socket (IP + port) can be established.
    2. **Allow proper connection termination:**
        - The final ACK sent by the active closer might get lost.
        - If the server doesn’t receive the ACK, the other side will retransmit the FIN.
        - TIME_WAIT allows retransmitting the final ACK if needed.
    3. **Prevent confusion from reused sockets:**
        - Without TIME_WAIT, a new connection using the same IP and port pair might receive **old duplicate packets** and cause data corruption.
    
    ---
    
    ### ⏳ How Long is TIME_WAIT?
    
    - TIME_WAIT duration = **2 × MSL (Maximum Segment Lifetime)**
    - MSL is typically defined as **30 seconds** or **60 seconds**, so TIME_WAIT lasts around **1 to 2 minutes**.
    - Exact value depends on the OS implementation.
    
    ---
    
    ### 🔧 Who Enters TIME_WAIT?
    
    - The **side that actively closes** the connection (calls `close()` first and sends the last ACK) enters TIME_WAIT.
    - The passive closer (the side that receives the first FIN) usually goes to **CLOSE_WAIT** and then closes without TIME_WAIT.
    
    ---
    
    ### 🔍 What Happens During TIME_WAIT?
    
    - The connection remains in the OS’s TCP table.
    - No new connection with the same 4-tuple (source IP, source port, dest IP, dest port) can be established until TIME_WAIT expires.
    - If duplicate FINs arrive, the OS resends the last ACK to ensure proper connection close.
    
    ---
    
    ### Why TIME_WAIT is Important for Network Reliability?
    
    | Reason | Explanation |
    | --- | --- |
    | Prevents old packets reuse | Avoids confusion from delayed/duplicate packets |
    | Ensures proper connection teardown | Retransmits final ACK if lost |
    | Protects against connection collision | Prevents overlapping connections from same sockets |
    
    ---
    
    ### Potential Issues with TIME_WAIT
    
    - On busy servers with many short-lived TCP connections, TIME_WAIT can cause **port exhaustion**.
    - Some OSes implement **TIME_WAIT reuse** or **fast recycling**, but these can risk data integrity.
    - Tuning TCP stack parameters can help mitigate but must be done carefully.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > The TCP TIME_WAIT state is a mandatory waiting period after connection termination to ensure that delayed packets expire and the final ACK is properly received. It prevents old duplicate packets from interfering with new connections using the same socket, ensuring reliable and clean connection teardown
    > 
- **What is the purpose of sequence numbers and ACKs in TCP?**
    
    # ✅ Purpose of Sequence Numbers and ACKs in TCP
    
    ---
    
    ### 🔢 **Sequence Numbers**
    
    - **Sequence numbers** are used to **label each byte of data** sent over a TCP connection.
    - The sender assigns a sequence number to every byte in the data stream.
    - They help:
        - **Order data correctly** at the receiver.
        - Detect **lost or duplicate packets**.
        - Allow **retransmission** of missing data.
    - The initial sequence number (ISN) is randomly chosen during the 3-way handshake to avoid confusion with old connections.
    
    ---
    
    ### ✔️ **Acknowledgments (ACKs)**
    
    - The receiver uses **ACK numbers** to tell the sender **which bytes have been successfully received**.
    - An ACK number indicates the **next expected byte** the receiver wants.
    - ACKs provide **feedback** to the sender, enabling it to know:
        - What data has arrived safely.
        - What data needs to be retransmitted (in case of packet loss).
    - TCP uses **cumulative acknowledgments** (acknowledging all bytes up to a certain point).
    
    ---
    
    ### 🔄 How They Work Together
    
    1. **Sender** transmits data bytes numbered using sequence numbers.
    2. **Receiver** receives data and sends back an ACK with the next expected sequence number.
    3. **Sender** moves its **send window forward** based on ACKs and sends more data.
    4. If ACKs are not received in time, the sender retransmits the missing data.
    
    ---
    
    ### Why Are They Important?
    
    | Feature | Role of Sequence Numbers & ACKs |
    | --- | --- |
    | **Reliability** | Detect lost packets and trigger retransmission |
    | **Ordered Delivery** | Reassemble data in the correct order |
    | **Flow Control** | Manage how much data is in transit |
    | **Connection Management** | Help establish and terminate connections correctly |
    
    ---
    
    ### Visual Simplification:
    
    ```
    vbnet
    CopyEdit
    Data Stream:  [Byte 1][Byte 2][Byte 3]...[Byte N]
    
    Sender: Assign Seq # to each byte → sends packets
    Receiver: Receives packets → sends ACK with next expected Seq #
    
    Example:
    Sender sends bytes 1-100 (Seq # 1-100)
    Receiver ACKs 101 (means all bytes up to 100 received)
    
    ```
    
    ---
    
    ## 🧠 Interview Summary:
    
    > Sequence numbers uniquely identify each byte in the TCP data stream, enabling the receiver to reorder data and detect losses. ACKs inform the sender about successfully received bytes, facilitating reliable, ordered delivery and retransmission when necessary.
    > 
- **What is the difference between a port and a socket?**
    
    # Difference Between Port and Socket
    
    ---
    
    ### 🔹 **Port**
    
    - A **port** is a **logical endpoint** in the TCP/IP stack.
    - It is a **16-bit number (0–65535)** used to identify a **specific process or service** on a host.
    - Common ports:
        - HTTP → 80
        - HTTPS → 443
        - SSH → 22
    - Ports allow multiple networked applications to run on the same IP address simultaneously by distinguishing traffic for each app.
    
    ---
    
    ### 🔹 **Socket**
    
    - A **socket** is the **combination of:**
        
        ```
        css
        CopyEdit
        (IP address, Protocol, Port number)
        
        ```
        
    - It uniquely identifies a **network communication endpoint**.
    - Example for TCP: `(192.168.1.5, TCP, port 8080)`
    - At the OS level, a socket represents one endpoint of a two-way communication link.
    - When both client and server sockets combine, they form a connection.
    
    ---
    
    ### ⚖️ Summary Table
    
    | Aspect | Port | Socket |
    | --- | --- | --- |
    | Definition | Numeric identifier for a service | Combination of IP + protocol + port |
    | Uniqueness | Unique per host for a protocol | Unique per connection endpoint |
    | Role | Identifies app/service on host | Identifies communication endpoint |
    | Example | Port 80 for HTTP | (192.168.1.10, TCP, 80) |
    
    ---
    
    ### 🧠 Interview Summary:
    
    > A port is a number that identifies a specific application or service on a host, while a socket is the combination of an IP address, protocol (TCP/UDP), and port number, uniquely identifying an endpoint for network communication.
    > 
- **How does TCP ensure reliability?**
    
    # ✅ How TCP Ensures Reliability
    
    ---
    
    TCP provides **reliable, ordered, and error-checked delivery** of data between applications running on hosts communicating over an IP network, which itself is unreliable.
    
    ---
    
    ### Key Mechanisms TCP Uses to Ensure Reliability:
    
    ---
    
    ### 1. **Sequence Numbers**
    
    - Every byte of data is assigned a **sequence number**.
    - Enables the receiver to **reassemble data in order** and detect missing segments.
    
    ---
    
    ### 2. **Acknowledgments (ACKs)**
    
    - The receiver sends back **ACKs** to confirm receipt of data.
    - TCP uses **cumulative ACKs** — acknowledging all data up to a certain sequence number.
    - If the sender doesn’t receive an ACK within a timeout, it **retransmits** the lost data.
    
    ---
    
    ### 3. **Retransmission**
    
    - TCP retransmits packets that are lost or corrupted.
    - Loss detection mechanisms include:
        - Timeout expiration (Retransmission Timeout - RTO)
        - Duplicate ACKs (indicate potential packet loss)
    
    ---
    
    ### 4. **Checksums**
    
    - Every TCP segment includes a **checksum** to detect data corruption.
    - Segments with invalid checksums are discarded.
    
    ---
    
    ### 5. **Flow Control (Sliding Window)**
    
    - Controls the amount of data sent before waiting for ACKs.
    - Prevents overwhelming the receiver’s buffer.
    - Uses **window size** advertised by the receiver.
    
    ---
    
    ### 6. **Ordered Delivery**
    
    - TCP buffers out-of-order packets.
    - Delivers data to the application in the **correct order**.
    
    ---
    
    ### 7. **Connection Management**
    
    - Uses a **3-way handshake** to establish a connection ensuring both ends are ready.
    - Uses a **4-way handshake** for graceful connection teardown.
    
    ---
    
    ### 8. **Congestion Control**
    
    - Prevents congestion collapse by adjusting sending rates.
    - Helps reduce packet loss, indirectly supporting reliability.
    
    ---
    
    ### Summary Table:
    
    | Mechanism | How It Ensures Reliability |
    | --- | --- |
    | Sequence Numbers | Order packets and detect loss |
    | Acknowledgments (ACKs) | Confirm receipt, trigger retransmissions |
    | Retransmissions | Resend lost or corrupted data |
    | Checksums | Detect corrupted data |
    | Flow Control | Prevent buffer overflow at receiver |
    | Ordered Delivery | Deliver data to app in correct sequence |
    | Connection Management | Ensures both sides are synchronized and ready |
    | Congestion Control | Reduces packet loss by preventing network overload |
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP ensures reliability through sequence numbers, acknowledgments, retransmissions, checksums, flow control, and ordered delivery. It establishes and maintains connections that guarantee data arrives intact, in order, and without duplication.
    > 
- TCP Retransmissions and Timeout Mechanism
- **What happens if a TCP packet is lost?**
    
    # ✅ TCP Retransmissions and Timeout Mechanism
    
    ---
    
    ### 🎯 Purpose:
    
    - To detect and recover from **lost or delayed packets** in the network.
    - Ensure data eventually reaches the receiver even if packets get lost.
    
    ---
    
    ## 1. **How TCP Detects Packet Loss**
    
    ---
    
    ### a) **Timeouts (Retransmission Timeout - RTO)**
    
    - TCP starts a timer when it sends a segment.
    - If an **ACK for that segment is not received before the timer expires**, TCP assumes the packet is lost and **retransmits** it.
    - The RTO timer dynamically adjusts based on **Round-Trip Time (RTT) measurements** to adapt to network conditions.
    
    ---
    
    ### b) **Duplicate ACKs**
    
    - When the receiver gets out-of-order packets, it sends **duplicate ACKs** for the last in-order byte received.
    - If the sender receives **3 duplicate ACKs** for the same sequence number, it assumes a segment was lost and performs a **fast retransmit** without waiting for the timeout.
    
    ---
    
    ## 2. **How Retransmissions Work**
    
    ---
    
    - When retransmission is triggered (timeout or 3 duplicate ACKs), the sender **resends the lost segment**.
    - After retransmission, the timer restarts for that segment.
    - Retransmissions continue until the sender receives an ACK for that data.
    
    ---
    
    ## 3. **Dynamic Timeout Calculation (RTO)**
    
    ---
    
    - TCP uses algorithms (like **Jacobson/Karels algorithm**) to estimate RTT and its variance.
    - This adaptive RTO avoids premature retransmissions in slow networks or excessive delays.
    
    Formula outline (simplified):
    
    ```
    ini
    CopyEdit
    EstimatedRTT = (1 - α) * EstimatedRTT + α * SampleRTT
    DevRTT = (1 - β) * DevRTT + β * |SampleRTT - EstimatedRTT|
    RTO = EstimatedRTT + 4 * DevRTT
    
    ```
    
    where α and β are smoothing factors (e.g., 1/8 and 1/4).
    
    ---
    
    ## 4. **Fast Retransmit & Fast Recovery**
    
    - **Fast Retransmit:** Resends lost segment after 3 duplicate ACKs.
    - **Fast Recovery:** Avoids slow start by reducing congestion window less drastically after retransmission.
    
    ---
    
    ### 5. **Benefits**
    
    - Detects loss quickly via duplicate ACKs (fast retransmit).
    - Avoids long idle waiting through adaptive RTO.
    - Maintains throughput by quickly recovering from packet loss.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP retransmits lost packets either after a retransmission timeout (RTO) expires or upon receiving 3 duplicate ACKs (fast retransmit). The timeout adapts dynamically based on measured round-trip times, ensuring timely recovery without unnecessary retransmissions.
    > 
- **What is flow control in TCP and how does it work?**
    
    # ✅ What is Flow Control in TCP?
    
    ---
    
    ### 🎯 Purpose:
    
    - **Flow control** ensures that the sender **does not send data faster than the receiver can process and buffer it**.
    - It prevents **receiver buffer overflow**, which could cause packet loss and retransmission.
    
    ---
    
    ### How Flow Control Works in TCP:
    
    ---
    
    ### 1. **Receiver Window (rwnd)**
    
    - The receiver advertises a **window size** (called the **receive window** or `rwnd`) to the sender.
    - This window size represents the **amount of free buffer space** available at the receiver.
    - It tells the sender the **maximum number of bytes** it can send without waiting for an ACK.
    
    ---
    
    ### 2. **Sliding Window Protocol**
    
    - The sender maintains a **send window** — the amount of unacknowledged data that can be in transit.
    - The send window size is limited by the receiver’s advertised `rwnd`.
    - The window **“slides” forward** as the receiver acknowledges received data and frees up buffer space.
    
    ---
    
    ### 3. **Dynamic Adjustment**
    
    - As the receiver processes data and frees buffer space, it updates the `rwnd` in the ACK packets.
    - If the receiver’s buffer is full, it can advertise a **window size of zero**, signaling the sender to **pause sending**.
    - Once buffer space is available again, the receiver advertises a larger window, allowing the sender to resume.
    
    ---
    
    ### 4. **Example**
    
    | Step | Action |
    | --- | --- |
    | Receiver buffer size = 10,000 bytes | Receiver advertises `rwnd = 10,000` |
    | Sender sends up to 10,000 bytes | Waits for ACK before sending more |
    | Receiver consumes 5,000 bytes | Advertises `rwnd = 5,000` in ACK |
    | Sender can now send additional 5,000 bytes | Keeps sliding window within the receiver window |
    
    ---
    
    ### Why Flow Control is Important
    
    - Protects the receiver from **buffer overflow**.
    - Prevents unnecessary **packet loss and retransmissions**.
    - Allows smooth, efficient data transfer adapting to receiver capacity.
    
    ---
    
    ## 🧠 Interview Summary:
    
    > TCP flow control uses the receiver’s advertised window (rwnd) to limit the sender’s data transmission rate. The sender respects this window size, ensuring it does not overwhelm the receiver’s buffer, enabling smooth and reliable data transfer.
    > 

---

### 🔹 **Intermediate-Level / System-Oriented**

- **What are the differences between TCP’s slow start, congestion avoidance, and fast recovery?**
    
    # ✅ Differences Between TCP’s Slow Start, Congestion Avoidance, and Fast Recovery
    
    ---
    
    ### 1. **Slow Start**
    
    - **When it runs:**
        - At the **beginning of a connection**, or
        - After a **timeout (packet loss)** occurs.
    - **How it works:**
        - Starts with a **small congestion window (cwnd)**, typically 1 MSS (Maximum Segment Size).
        - **Exponentially increases** cwnd each round-trip time (RTT): doubles cwnd every RTT by increasing by 1 MSS for every ACK received.
        - This rapid growth continues **until cwnd reaches a threshold called `ssthresh`** (slow start threshold).
    - **Goal:**
        - Quickly probe the network capacity.
    
    ---
    
    ### 2. **Congestion Avoidance**
    
    - **When it runs:**
        - After **cwnd exceeds `ssthresh`** (i.e., after slow start).
    - **How it works:**
        - Increases cwnd **linearly** instead of exponentially.
        - Typically increases cwnd by about **1 MSS per RTT** (e.g., increase cwnd by MSS/cwnd for each ACK).
        - This slower growth prevents congestion from building up too quickly.
    - **Goal:**
        - Avoid congestion by carefully probing available bandwidth.
    
    ---
    
    ### 3. **Fast Recovery**
    
    - **When it runs:**
        - After **detecting packet loss via 3 duplicate ACKs** (not timeout).
    - **How it works:**
        - Sets `ssthresh` to **half of the current cwnd**.
        - Reduces cwnd to `ssthresh` (instead of dropping to 1 MSS as in slow start).
        - Enters **fast recovery phase**, where cwnd increases linearly again until a new ACK confirms recovery.
        - Avoids slow start, thus maintaining higher throughput.
    - **Goal:**
        - Quickly recover from isolated packet loss without drastically reducing sending rate.
    
    ---
    
    # 🔄 Summary Table:
    
    | Algorithm | When Used | Growth Rate | Reaction to Packet Loss | Purpose |
    | --- | --- | --- | --- | --- |
    | **Slow Start** | Connection start or timeout | Exponential (doubling) | Sets `ssthresh`, resets cwnd to 1 MSS | Quickly find available bandwidth |
    | **Congestion Avoidance** | After slow start (cwnd > ssthresh) | Linear (additive increase) | Reduce cwnd & ssthresh on loss | Avoid congestion, steady growth |
    | **Fast Recovery** | After 3 duplicate ACKs (fast retransmit) | Linear (congestion window ~ ssthresh) | Cut cwnd to ssthresh, avoid slow start | Quickly recover from loss |
    
    ---
    
    # 🧠 Interview Summary:
    
    > TCP slow start rapidly increases sending rate exponentially to quickly probe network capacity.
    > 
    > 
    > **Congestion avoidance** follows with a cautious linear increase to prevent congestion.
    > 
    > **Fast recovery** kicks in after detecting loss via duplicate ACKs, reducing the sending rate moderately and recovering without reverting to slow start.
    > 
- **What causes TCP congestion and how is it controlled?**
    
    # ✅ What Causes TCP Congestion?
    
    ---
    
    ### TCP congestion happens when:
    
    - **Too many packets are sent into the network too quickly**, exceeding the capacity of routers, switches, or links.
    - Network devices have **limited buffer sizes**, so excess packets get **queued**.
    - If queues overflow, **packet loss occurs** (dropped packets).
    - Packet loss triggers retransmissions, further increasing traffic and worsening congestion (congestion collapse).
    
    ---
    
    ### Common causes:
    
    | Cause | Description |
    | --- | --- |
    | High data sending rate | Sender transmits faster than the network can handle |
    | Bursty traffic | Sudden spikes of data cause buffer overflow |
    | Network failures or routing changes | Can temporarily reduce available capacity |
    | Multiple TCP connections | Competing flows saturate shared links |
    
    ---
    
    # ✅ How TCP Controls Congestion
    
    ---
    
    TCP uses several **congestion control algorithms** to detect and react to congestion, adjusting its sending rate dynamically:
    
    ---
    
    ### 1. **Slow Start**
    
    - Starts sending data slowly.
    - Increases sending rate exponentially to probe network capacity.
    - Avoids flooding the network initially.
    
    ---
    
    ### 2. **Congestion Avoidance**
    
    - After detecting the network capacity, increases sending rate linearly.
    - Prevents overshooting network limits.
    
    ---
    
    ### 3. **Fast Retransmit & Fast Recovery**
    
    - Detects lost packets quickly via duplicate ACKs.
    - Reduces sending rate moderately instead of drastic slowdown.
    - Recovers quickly without restarting slow start.
    
    ---
    
    ### 4. **Retransmission Timeout**
    
    - When ACKs don’t arrive, TCP waits a timeout period.
    - On timeout, TCP assumes severe congestion, reduces sending rate drastically.
    - Then restarts slow start.
    
    ---
    
    ### 5. **Adjusting Congestion Window (cwnd)**
    
    - TCP controls the number of unacknowledged bytes in flight using the **congestion window**.
    - cwnd grows or shrinks based on the congestion signals.
    
    ---
    
    # 🔄 Summary Table:
    
    | Signal | TCP Reaction |
    | --- | --- |
    | No packet loss (ACK received) | Increase cwnd (slow start or congestion avoidance) |
    | 3 duplicate ACKs | Fast retransmit, reduce cwnd to ssthresh, fast recovery |
    | Timeout | Drastic cwnd reduction, restart slow start |
    
    ---
    
    # 🧠 Interview Summary:
    
    > TCP congestion is caused by sending more data than the network can handle, leading to packet loss and delays. TCP controls congestion by dynamically adjusting its sending rate using slow start, congestion avoidance, fast retransmit, and retransmission timeout algorithms to maintain efficient and stable network performance.
    > 
- **Explain the difference between Nagle’s Algorithm and Delayed ACK.**
- **How does TCP handle duplicate packets or out-of-order packets?**
- **What is the TIME_WAIT state and why is it important?**
- **Explain SYN flood attack and how it affects TCP servers.**
- **What is the purpose of MSS (Maximum Segment Size)?**
- **What is the difference between RTO (Retransmission Timeout) and RTT (Round-Trip Time)?**
- **Can a TCP connection be half-closed? What does that mean?**

---

### 🔹 **Advanced / FAANG-Level**

- **Design a reliable messaging system using TCP over unreliable networks. What challenges will you face?**
- **Explain TCP head-of-line blocking and how it affects throughput.**
- **How would you tune TCP for a high-latency, high-bandwidth network?**
- **Compare TCP Reno vs TCP Cubic vs BBR — when would you use each?**
- **How does QUIC improve over TCP and why are companies like Google moving to it?**
- **Explain the significance of TCP keepalive and heartbeat mechanisms.**
- **What changes would you make to TCP if you were optimizing for video streaming?**

---

### 🔹 **System Design-Informed TCP Questions**

- **You’re seeing dropped connections on a high-throughput API server. How would you investigate TCP-level issues?**
- **If a client experiences slow downloads, how would you determine whether it’s a TCP, DNS, or application issue?**
- **In microservices with TCP backends, how would you monitor and debug TCP socket-level problems?**
- **How would you implement graceful shutdown in a TCP server under load?**
- **In a distributed system with 1M+ concurrent TCP connections, how would you scale and tune your kernel/network stack?**

---

### 🚀 Bonus Hands-On Questions

- Show what happens during a TCP handshake using Wireshark.
- Write a Python socket program that implements TCP client/server.
- Simulate a TCP retransmission scenario — what logs or metrics would you look at?

---

## 📝 Test Your Knowledge

<Quiz 
  questions={[
    {
      questionText: 'Which protocol is connection-oriented and reliable?',
      options: ['UDP', 'TCP', 'IP', 'ICMP'],
      answer: 'TCP',
    },
    {
      questionText: 'What is the first step of the TCP 3-Way Handshake?',
      options: ['SYN-ACK', 'ACK', 'SYN', 'FIN'],
      answer: 'SYN',
    },
    {
      questionText: 'Which windowing mechanism is used for flow control?',
      options: ['Congestion Window', 'Sliding Window', 'Scaling Window', 'Fixed Window'],
      answer: 'Sliding Window',
    },
    {
      questionText: 'Which protocol is best for real-time video streaming?',
      options: ['TCP', 'UDP', 'HTTP', 'FTP'],
      answer: 'UDP',
    }
  ]}
/>