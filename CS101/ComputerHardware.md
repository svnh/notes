# Computer Hardware

## Chips and Transistors

Chip: silicon, contains transistors and other tiny electronic components

Transistor: amplifying valve for a flow of electrons. **"Solid state"** - no moving parts.

Moore's law: (Gordon Moore, Intel co-founder) states that the density of transistors on a chip doubles about every 2 years or so
- Transistors get smaller about every 18-24 months
- Can fit twice as many per chip
- It is a general observation, not actually a scientific "law"
- In effect, transistors/computers get cheaper (powerful)
- Why computers are everywhere - in cars, thermostats
- $50 MP3 player bigger every couple years: 2GB, 4GB, 8GB
- Exponential -- 10 doublings, about 1000 x

## Computer Hardware

1. CPU (Central Processing Unit - brains)
- Performs simple operations
- Say a computer can run 2 billion operations per second - that's the CPU
- Run code, manipulate data

2. RAM (Random Access Memory - temporary storage)
- RAM is effectively a storage area of bytes under the control of the CPU.
- RAM is relatively fast, able to retrieve the value of any particular byte in a few nanoseconds (1 nanosecond is 1 billionth of a second).
- Temporary, working storage bytes - only keeps its state so long as it is supplied with power
  - RAM is "volatile", not "persistent".
- e.g. You're working on a doc, then power goes out (vs. "Save")
- used to store code and data that are being actively used

3. Hard Drive, Flash Drive (persistent storage)
- Persistent storage - "non volatile" .. preserved when not powered
- Hard drive (aka "hard disk") - stores bytes as a magnetic pattern on a spinning disk
- Flash drive (aka "flash memory" or "Solid State Disk" - SSD) - solid state, stores bytes as electrons in a silicon chip
  - Faster and uses less power than a hard disk, but is significantly more expensive
  - Much slower than RAM, so it is not a good replacement
- Data is stored and retreived by the head moving via magnetism North and South to indicate 0s and 1s

### File System:
- Hard drive or flash drive provides persistent storage as a flat area of bytes without much structure
- Formatted with a "file system" which organizes the bytes into the familiar pattern of files and directories
- Each file in the file system refers to a block of bytes
- Gives the user a name (and probably an icon) for a block of data bytes, and allows the user to perform operations on that data, and tracks information about the bytes (how many there are, the time they were last modified)
- Microsoft uses the proprietary NTFS file system
- Mac OS X has its Apple proprietary HFS+ equivalent
- Many devices (cameras, MP3 players) use the very old Microsoft FAT32 file system on their flash cards - old and primitive file system, but it is good where wide support is important

