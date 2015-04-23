# Networking
> The Internet is like a global phone system for computers: a computer can "call" another computer on the internet to get or send a little information.

## LAN - Local Area Network
- Ethernet, wired LAN
- Wi-Fi, wireless LAN

### Packets
- The way to send data from one computer to another
- Break data (image, text file, etc) into (x number of bit sized) packets, then LAN transmits one packet between computers

#### Packet Errors -- Checksum Re-Send
- Receiver can detect that the packet was received correctly
 - Ex. Sender adds up all packet's bytes (e.g. sum 157231) the last 2 digits, 31, is the "checksum" of the packet
 - If that is not matching on both ends receiver asks the sender to re-send that packet

### Ethernet Design
- Layout: one wire, shared by all the computers
- No central control -- distributed, collaborative
- Like talking at a party
- Suppose one computer wants to send to another on the wire
  - Send:
    -Every computer has a unique address on the wire
    -Packet includes to:addr of recipient
    -Sender waits for period of silence on the wire, sends packet
    -Packet spreads out on wire, reaching all computers
    -More "broadcast" than "send"
  - Receive:
    -All computers listen to the wire all the time
    -Pick out packets addressed to them, ignore other packets
- Ethernet Collision
  - Two computers transmit at the same time
    -Data collides on the wire, hopelessly garbled
    -Senders notice the collision, stop sending
    -Both senders wait a random amount of time, then try again
- Summary:
  - Shared -- there's just the one wire and everybody uses it (cheap)
  - Distributed and Collaborative -- no central control, depends on each computer following the collaborative protocol in good faith
  - Insecure -- not to hard to listen and pick up packets not intended for you (shared)
  - Performance degrades but does not break as more computers use the shared medium
  - Incredibly successful design strategy -- getting great performance out of minimal hardware

## WIFI
- Work similarly to Ethernet but uses radio waves

## Internet - TCP/IP (Transmission Control Protocol / Internet Protocol)
- Internet is a world-wide network
- Like a phone system for computers
  - Every computer has a unique address and can try to "call" any other computer
- Worldwide Internet is built on the TCP/IP family of standards which solves the problem of sending packets between computers across the whole internet
- Free and open, vendor-neutral standards

### IP
- Every computer on the internet has an IP address
- 4 bytes, written between dots, like "171.64.2.3"

#### Domain Names
- Essentially alternate names for IP addresses, ex. google.com
  - Easy for people to remember and type
  - Domain system can look up an IP addr from a domain name
  - So when you use a domain name, it is looked up to get an IP addr for the actual packets

#### Routers
- Router has multiple connections, and copies/routes packets between them
- Ex. My office computer is at 171.64.64.166, that computer connects "upstream" to router 171.64.64.1 which is a router that handles traffic for a few local computers

#### How Does a Packet Get Across The Internet?
- Packet has to/from IP information
- Packet hops from computer to router, and then to upstream routers until it finds the right neighborhood and then searches downstream for that IP and then sends it back (tree structure, or capillary/artery system)
  - Your computer is down at the capillary level, your packet gets forwarded up to larger and larger arteries, makes its way over to the right area, and then down to smaller and smaller capillaries again, finally arriving at its destination
- Each router knows enough to figure the next hop, not the whole route
- The original computer does not typically know much, delegating to routers
- "Core" routers, towards the middle (top of the tree)
 - Can handle many connections, are more expensive, and make more complicated routing decisions
- Routers measure connection functionality/breakage all the time, route around
- Routers are another distributed, collaborative system

#### What Does it Mean to Be On the Internet?
- Connect to a Wi-Fi router
  1. Computer connects to an upstream router to handle traffic. Most Wi-Fi access points combine Wi-Fi radios and a router.
  1. The router typically gives the computer an IP address to use. The computer cannot pick an arbitrary IP address, since the left part of the address depends on the location on the internet ... details known by the router
1. DHCP "Dynamic Host Configuration Protocol" - automatically configure network settings to work locally. Computers very often use this feature to get needed network configuration from the router automatically. DHCP facilitates connecting to a router; establishing a temporary connection, and the router gives your computer an IP address to use temporarily. Typically DHCP is used when you connect to a Wi-Fi access point.
