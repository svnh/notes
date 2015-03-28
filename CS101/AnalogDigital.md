# Analog and Digital

## Analog [wikipedia](http://en.wikipedia.org/wiki/Analog_signal)
- Analog signal: a varying wave carrying information
- Frequency: how often the wave repeats per second
- Amplitude: how high/low the wave goes, bigger waves = louder
- Timbre:  the quality of a musical note, sound, or tone that distinguishes different types of sound production, the shape of the wave sounds different
- Analog is the pre-digital way of transmitting or storing a signal
  - Signal does not go through microphones, wires, magnets, etc. perfectly
    - Each step -- the wires, the magnets, etc. can introduce little errors
    - *Noise*: like little random wiggles around the true signal (+ other error forms), can sound like "hiss" .. e.g. AM radio, cassette tapes

## Digital
- Take samples: draw horizontal line through sine wave, sample over time from x=0 to the wave
  - The signal +- vs. the zero line
  - Happens very quickly, e.g. 44,000 times per second audio CD
  - Samples are recorded as 0's/1's
    - Noise is reduced because by the way they are recorded 0's/1's are obvious in difference
- [Digitization](http://en.wikipedia.org/wiki/Digitizing) is representation of an object, image, sound, document or a signal (usually an analog signal) by a discrete set of its points or samples
  - Playback: recreate the signal from the sample numbers
    - Look at each number, plot that height above/below zero line
    - Repeat for next number
    - Connect the dots .. draw the signal between the dots
  - A second layer of error-correction, the CD stores in a sense, redundant copies of the sample data. So if one section has errors, detected with a checksum scheme, the CD player can switch to use an alternate copy
- Compression: some cleverness to change the data to use fewer bytes
  - Lossless example:
    - Suppose we have this series of samples: 12000, 12002, 12006, 12007, 12010, 12005, 12006
    - The numbers are quite near to each other -- a typical result
    - What if we just record the first number
    - Then record the differences, one sample to the next (aka delta)
    - 12000, +2, +4, +1, +3, -5, +1
    - The numbers to record are much smaller (fewer bytes to store)
  - Lossy example (sound does not come back quite perfect):
    - Drop every other number. On playback, guess the missing samples as the average of the surrounding numbers
    - Saves 2x space
