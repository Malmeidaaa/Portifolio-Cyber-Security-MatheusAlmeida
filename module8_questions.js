const questions = [
    {
        id: 1,
        text: "A group of threat actors has a strong aversion to certain political ideologies. They launch a cyberattack against the organization to which its perceived adversarial counterpart belongs. This type of threat actor could most appropriately be classified under what category?",
        options: [
            "Hacktivist",
            "Competitors",
            "Brokers",
            "Nation-state actors"
        ],
        correct: [0],
        explanation: "A group that is strongly motivated by philosophical/political beliefs (ideology for the sake of principles) is classified as hacktivists. The term is commonly used by security researchers and journalists to distinguish them from other types of threat actors. Attacks by hacktivists are often used to \"make a statement.\""
    },
    {
        id: 2,
        text: "An attacker is the first malicious actor to discover a vulnerability in a software application and exploits it for considerable financial gain. What could have been done to prevent this situation?",
        options: [
            "Ensure the internal software testing is more comprehensive.",
            "When coding, closely follow the security specifications in the requirements.",
            "There is a high probability that it could not have been prevented.",
            "Have the app tested by an external agency before releasing it."
        ],
        correct: [2],
        explanation: "The question describes a zero-day vulnerability in the app because there are zero days of warning. They are extremely serious as systems are open to attack with no security fixes available. Even if all the precautions stated in the responses were applied, it may not have been preventable."
    },
    {
        id: 3,
        text: "Evin thinks one of the computer systems where he works may have been compromised. He does not currently have a good way of determining if an unauthorized user logged in successfully. Which of the following can Evin implement that will, going forward, help him identify who logs in?",
        options: [
            "Authentication",
            "Availability",
            "Authorization",
            "Accounting"
        ],
        correct: [3],
        explanation: "Accounting is a component of the security principle that involves controlling access to information. Accounting creates a record that is preserved of who accessed the enterprise network, what resources they accessed, and when they disconnected from the network."
    },
    {
        id: 4,
        text: "A new piece of hardware has a specific IP address and supports Telnet and FTP connections so that it could be configured through a network connection. Leaving the device in this state could lead to a breach due to what type of vulnerability? Select three.",
        options: [
            "Open ports and services",
            "Firmware",
            "Unsecure protocols",
            "Zero-day",
            "Default settings"
        ],
        correct: [0, 2, 4],
        explanation: "Misconfiguration vulnerabilities include known default settings on new devices such as an IP address, open ports and services (FTP, for example), and unsecure protocols such as Telnet. Note that Telnet allows remote connections, but the traffic is not encrypted."
    },
    {
        id: 5,
        text: "A friend gets a virus and asks if you can help them fix the problem. You boot the computer with a bootable flash drive containing security-related tools and remove the virus. What type of control did you employ?",
        options: [
            "Corrective",
            "Compensating",
            "Directive",
            "Deterrent"
        ],
        correct: [0],
        explanation: "A corrective control lessens the damage from an attack. An example is cleaning a virus from an infected system; the corrective action occurs after the attack has taken place."
    },
    {
        id: 6,
        text: "A broker launches a variety of attacks to find a weakness that will lead to financial gain. What activity is the broker most likely to engage in?",
        options: [
            "Sell information about a discovered vulnerability",
            "Create and sell malicious software to the highest bidder",
            "Obtain, repackage, and sell pirated software",
            "Steal classified information against a competitor"
        ],
        correct: [0],
        explanation: "Brokers sell their knowledge of a weakness to other attackers or governments. They do not report the weaknesses to the software vendor. Instead, they sell them to the highest bidder, who are willing to pay a high price for the unknown weakness."
    },
    {
        id: 7,
        text: "A work-study student works at the registrar's office and is given limited access to a student database. The student is very technologically savvy and figures out a way of gaining additional privileges. The student is not pleased with one of their grades and changes it. Which of the following best describes the type of scenario this activity characterizes?",
        options: [
            "Shadow IT",
            "Revenge",
            "Insider threat",
            "Cyberterrorism"
        ],
        correct: [2],
        explanation: "A serious threat to an enterprise comes from its own employees, contractors, and business partners, called insiders. They pose an insider threat because the threat is coming from an entity who is in a position of trust, so they will not be suspected."
    },
    {
        id: 8,
        text: "Which of the following best describes what a nation-state actor is most likely to do if their attacks against a target are not successful?",
        options: [
            "Move on to a different target.",
            "Continue trying until successful.",
            "Use different attack tools.",
            "Hire more malicious actors."
        ],
        correct: [1],
        explanation: "With nation-state actors, their target is very specific, and they keep working until they are successful. This is because state-sponsored attackers are highly skilled and have enough government resources to breach almost any security defense."
    },
    {
        id: 9,
        text: "A malicious actor lacking technical knowledge uses an attack tool to perform a sophisticated attack. If the attacker is successful penetrating the defenses of the targeted organization, what type of activity are they most likely to perform? Select two.",
        options: [
            "Disrupt service",
            "Manipulate data",
            "Blackmail",
            "Corrupt data",
            "Copy data"
        ],
        correct: [0, 4],
        explanation: "Unskilled attackers employ easy-to-use attack tools to carry out their attacks. They can often be successful in penetrating defenses, particularly if the defenses are weak. Their motivation is usually data exfiltration (unauthorized copying of data) or service disruption (obstructing normal business electronic processes)."
    },
    {
        id: 10,
        text: "As a security professional Anvi works for an organization authoring documents that define policies and procedures outlining security controls. What type of resource does the organization provide?",
        options: [
            "Standard",
            "Framework",
            "Benchmark",
            "Regulation"
        ],
        correct: [1],
        explanation: "An information security framework is a series of documented processes used to define policies and procedures for implementation and management of security controls in an enterprise environment."
    },
    {
        id: 11,
        text: "A large complex is being constructed on a restricted site. They require a very high-speed, low maintenance (from a physical perspective) classified network. What type of PDS should they install?",
        options: [
            "Secure carrier PDS",
            "Alarmed carrier PDS",
            "Protected carrier PDS",
            "Hardened carrier PDS"
        ],
        correct: [1],
        explanation: "An alarmed carrier protected distribution system (PDS) is deployed with specialized optical fibers in a conduit that can sense acoustic vibrations that occur when an intruder attempts to gain access to the cables, which triggers an alarm. It provides continuous monitoring and eliminates the need for periodic visual inspections (low maintenance) as required in a hardened carrier PDS."
    },
    {
        id: 12,
        text: "Which of the following most accurately describes the differences or similarities between typo squatting and cybersquatting? Select two.",
        options: [
            "Typo squatting will very likely render an \"HTTP Error 404 Not Found\" message in a browser.",
            "A domain name with a one-letter change relative to an authentic site is an example of typo squatting.",
            "Cybersquatting changes a letter in a domain hoping to capitalize on a single-bit error.",
            "Cybersquatting is registering a domain that contains trademarks and then selling it."
        ],
        correct: [1, 3],
        explanation: "Fake sites may pretend to be legitimate sites or just be filled with ads for which the attacker receives money for traffic generated to the site. They exist because attackers purchase and register the domain names of sites that are spelled similarly to actual sites. This is called typo squatting. Cybersquatting involves registering an Internet domain name that contains trademarks for the sole purpose of selling that domain name to the trademark owner."
    },
    {
        id: 13,
        text: "Which of the following statements best describes how a Faraday cage prevents data leakage?",
        options: [
            "It is used in cable conduits to protect data during transmission.",
            "It is used to prevent EMI from escaping the enclosure.",
            "It is used to trigger an alarm if data devices are removed from the area.",
            "It is used in a crime scene to prevent the loss of data."
        ],
        correct: [1],
        explanation: "Computer systems, printers, and similar digital electronic devices all emit electromagnetic fields. These can often result in interference called electromagnetic interference (EMI). Unauthorized persons could detect and read these electromagnetic signals. A Faraday cage can be used to protect against this type of eavesdropping. It is a metallic enclosure that prevents the entry or escape of an electromagnetic field."
    },
    {
        id: 14,
        text: "Gemalyn enters websiteA.com in the address bar of a browser but is redirected to websiteB.com due to an infected DNS. What type of exploit did Gemalyn experience?",
        options: [
            "A redirection technique called pharming.",
            "A redirection technique due to a single-bit error in Gemalyn's computer.",
            "A redirection technique due to bitsquatting.",
            "A redirection technique due to a single-bit error in a DNS server."
        ],
        correct: [0],
        explanation: "Pharming is a redirection technique that attempts to exploit how a URL is converted to its corresponding Internet protocol address. A threat actor may install malware on a user's computer that performs the redirection when the user enters the URL in a web browser. A variation is to infect a DNS that would then direct large numbers of users to the fake site."
    },
    {
        id: 15,
        text: "An intruder breaks into a large storehouse. An ultrasonic sensor triggers the alarm one-quarter of a second after detecting the intruder. About how far was the intruder when the alarm was sounded?",
        options: [
            "343 meters",
            "172 meters",
            "86 meters",
            "43 meters",
            "21 meters"
        ],
        correct: [3],
        explanation: "The measurement formula for an ultrasonic sensor at sea level is: Distance = 1/2 (Time) x 343. When you plug in 1/4 of a second for Time, we get: Distance = 1/2 (0.25) x 343 = 0.125 x 343 = 42.875. Thus, the intruder was about 43 meters away."
    },
    {
        id: 16,
        text: "A company designs an artifact. To secure protection against competitors who may attempt to copy it, the company applies for, and is granted, a patent. What type of data is being protected?",
        options: [
            "Trade secret",
            "IP (Intellectual Property)",
            "Restricted",
            "Regulated"
        ],
        correct: [1],
        explanation: "Intellectual property (IP) data is an invention or a work that is the result of creativity. The owner of IP can apply for protection from others who attempt to duplicate it. One of these protections over IP or its expression is a patent."
    },
    {
        id: 17,
        text: "The CEO of a small retail chain is visiting a client. They call the help desk in a panic and request a password reset because it expired. The technician says they are not allowed to manually reset passwords but to kindly use the online password reset system. The CEO gets irate, says \"You're fired,\" and hangs up. Which of the following best characterizes what happened, or what should have happened?",
        options: [
            "The technician should have requested approval from the manager.",
            "This is an example of social engineering.",
            "The technician should have changed the password.",
            "The technician did the right thing."
        ],
        correct: [3],
        explanation: "Since the question says the CEO called and not someone pretending to be the CEO, this is not necessarily social engineering. If the caller had falsely claimed to be the CEO, then it could be characterized as social engineering. The technician did the right thing by not succumbing to pressure that would violate one of the company's security policies."
    },
    {
        id: 18,
        text: "You are tasked with installing a system in a large warehouse that is capable of detecting levels of daylight to dim interior lights to conserve energy. In addition, if an intruder enters the warehouse an alarm should be triggered. The system you install will most likely support what type of signal/radio wave?",
        options: [
            "Wi-Fi",
            "Microwave",
            "Passive infrared",
            "Ultrasonic"
        ],
        correct: [1],
        explanation: "A microwave sensor uses high-frequency radio waves and functions similarly to radar. Microwave sensors are effective in monitoring large areas such as a warehouse to determine if an intruder has entered a restricted area. It can also sense levels of daylight and dim interior lights to save energy."
    },
    {
        id: 19,
        text: "Which of the following most accurately describes the differences or similarities between misinformation and disinformation? Select two.",
        options: [
            "One is false and the other is inaccurate.",
            "Disinformation is a type of misinformation.",
            "Misinformation comes with a malicious intent.",
            "Misinformation is a hoax.",
            "A false warning is an example of disinformation."
        ],
        correct: [1, 4],
        explanation: "Misinformation is false or inaccurate information, regardless of the intent to mislead; it does not consider the intent. Disinformation is false or inaccurate misinformation that comes from a malicious intent. One example of cyber disinformation is a hoax or a false warning."
    },
    {
        id: 20,
        text: "Which of the following most accurately describes the similarities and/or differences between spear phishing and whaling? Select two.",
        options: [
            "Whaling involves sending millions of generic email messages.",
            "Spear phishing uses email messages; whaling does not.",
            "While spear phishing is a form of phishing, whaling is not.",
            "Whaling targets wealthy individuals and senior executives in a business.",
            "Spear phishing uses customized information to target specific users."
        ],
        correct: [3, 4],
        explanation: "Whaling is a type of spear phishing. It targets the wealthy individuals or senior executives within a business who typically would have larger sums of money in a bank account that an attacker could access. Whereas phishing usually sends generic email messages to millions of users, spear phishing targets specific users. The emails used in spear phishing are customized to the recipient."
    },
    {
        id: 21,
        text: "An attacker is scanning wireless networks and discovers that one of them is set up to support the two most recent protocols. What type of attack is the malicious actor most likely to launch to try to breach the security settings of the wireless device?",
        options: [
            "Upgrade attack",
            "Protocol attack",
            "Entropy attack",
            "Downgrade attack"
        ],
        correct: [3],
        explanation: "In a downgrade attack, an attacker forces the system to abandon the current higher-security mode of operation and instead \"fall back\" to implementing an older and less secure mode. This then allows the threat actor to attack the weaker mode."
    },
    {
        id: 22,
        text: "Salvadori wants to send a message halfway around the world via email. He would like to convey the hash corresponding to the message over the phone to the recipient. Which of the following hash algorithms should Salvadori use? Select three.",
        options: [
            "RipeMD",
            "Whirlpool",
            "SHA-2",
            "SHA-4",
            "MDRipe",
            "MD5",
            "ECC"
        ],
        correct: [0, 1, 2],
        explanation: "RACE Integrity Primitives Evaluation Message Digest (RipeMD), SHA-2, and Whirlpool are secure hash algorithms. RipeMD uses two different and independent parallel chains of computation. SHA-2 has six variations (e.g., SHA-256). Whirlpool uses a block cipher and takes a message of any length less than 2256 bits and returns a 512-bit message digest."
    },
    {
        id: 23,
        text: "How does Blockchain use cryptography to ensure the integrity of data?",
        options: [
            "It uses cryptographic hash algorithms to record transactions.",
            "It uses asymmetric cryptographic algorithms to record transactions.",
            "It uses symmetric cryptographic algorithms to record transactions.",
            "It uses cryptographic hash algorithms to encrypt transactions."
        ],
        correct: [0],
        explanation: "Blockchain relies heavily on cryptographic hash algorithms, most notably SHA-256, to record its transactions. This makes it computationally infeasible to try to replace a block or insert a new block of information without the approval of all entities involved."
    },
    {
        id: 24,
        text: "Which key combination would the recipient of a message use to confirm the integrity of the message as well as the authenticity of the sender?",
        options: [
            "The sender's private key and the recipient's private key",
            "The sender's private key and the recipient's public key",
            "The sender's public key and the recipient's public key",
            "The sender's public key and the recipient's private key"
        ],
        correct: [3],
        explanation: "To decrypt the message, confirm it has not been altered (integrity), and verify the sender, use the sender's public key along with the recipient's private key. If the message is successfully decrypted and the hash is a match, message integrity and the sender's authenticity are confirmed."
    },
    {
        id: 25,
        text: "Which of the following represents a true statement regarding software and hardware encryption? Select three.",
        options: [
            "The trusted execution environment is a very secure software model.",
            "HSM is a software-based encryption engine with extremely secure keys.",
            "TEE protects the confidentiality and integrity of its code and data.",
            "Hardware encryption cannot be exploited like software encryption.",
            "SEDs require successful authentication before access is granted."
        ],
        correct: [2, 3, 4],
        explanation: "Hardware encryption cannot be exploited like software encryption. Hardware encryption can be incorporated into a USB device or hard drive. Self-encrypting drives (SEDs) are hard drives that can protect all the data written to them. Trusted execution environment (TEE) is a secure cryptoprocessor that is internal to the computer itself; it protects the confidentiality and integrity of the code and data stored on it."
    },
    {
        id: 26,
        text: "Which of the following statements best describes the benefits of cryptography? Select two.",
        options: [
            "It is a hashing technique.",
            "It can hide the existence of data.",
            "It is a mitigation technique.",
            "Cipher algorithms are secret.",
            "It is a hardening technique."
        ],
        correct: [2, 4],
        explanation: "Hiding information through encryption so that threat actors cannot view it is considered one of several different mitigation techniques that enterprises can use to protect information. It is also considered a hardening technique that makes a system more resilient to attacks."
    },
    {
        id: 27,
        text: "Barrabi mined Bitcoin years ago that is now worth millions of dollars. He encrypted the password but can't remember the key he used to encrypt it. Upon employing the services of Barnum, a skilled security professional, he was eventually able to determine the key. Which of the following best explains what Barnum did or used to determine the key?",
        options: [
            "He performed a cyphertext attack.",
            "He performed a collision attack.",
            "He used a reverse hashing algorithm.",
            "He used a quantum computer."
        ],
        correct: [0],
        explanation: "Sophisticated statistical tools exist that can be used to perform an analysis of the ciphertext in an attempt to discover a pattern in the ciphertexts, which then may be useful in revealing the plaintext or key. This is called a known ciphertext attack or ciphertext-only attack."
    },
    {
        id: 28,
        text: "Rico sends a message to Lola. However, based on how the message was sent, Lola cannot verify it was sent from Rico, but she can verify it has not been altered. What could Rico have done that would have enabled Lola to verify the sender? Select two.",
        options: [
            "Use her public key to encrypt the message instead of her private key.",
            "Generate a digest and encrypt it with his private key.",
            "Use his public key to encrypt the message instead of his private key.",
            "Generate a digest and encrypt it with his digital signature.",
            "Generate a digital signature and attach it to the message."
        ],
        correct: [1, 4],
        explanation: "A digital signature serves to confirm the identity of the person from whom the electronic message originated. To generate a digital signature, Rico would generate a digest on the message and encrypt the digest using his private key."
    },
    {
        id: 29,
        text: "Which of the following statements correctly describes the differences or similarities between a stream cipher and a block cipher? Select two.",
        options: [
            "Stream ciphers are less secure.",
            "Stream ciphers randomize the output.",
            "Block ciphers replace characters one at a time.",
            "Both are like a one-time pad.",
            "Block ciphers reset after each iteration."
        ],
        correct: [0, 4],
        explanation: "Stream ciphers are less secure because the engine that generates the stream does not vary; the only change is the plaintext itself. Block ciphers are considered more secure because the output is more random; the cipher is reset to its original state after each block is processed."
    },
    {
        id: 30,
        text: "Quinto wants to set up an encrypted folder on his computer running Microsoft Windows. Which of the following is Quinto most likely to use?",
        options: [
            "FDE",
            "GnuPG",
            "TDE",
            "EFS",
            "FileVault"
        ],
        correct: [3],
        explanation: "Microsoft's Encrypting File System (EFS) is a natively supported cryptography system for the Windows operating systems that use Windows NTFS."
    },
    {
        id: 31,
        text: "Which of the following represents attributes, or attribute examples, that an X.509 digital certificate must include? Select three.",
        options: [
            "Revocation status field",
            "*.mysite.com",
            "URL",
            "Encryption keys",
            "IP address of end device",
            "www.mysite.com"
        ],
        correct: [1, 3, 5],
        explanation: "Attributes that must be included in an X.509 digital certificate are the certificate validity period, end-host identity information, encryption keys, the signature of the issuing certificate authority, and the common name (CN). CN is the name of the device protected by the digital certificate. The CN can reference a single device (www.mysite.com) or multiple devices with a wildcard certificate (*.mysite.com) but is not the URL."
    },
    {
        id: 32,
        text: "Which of the following represents an improvement made to the current version of TLS outlined in this module? Select two.",
        options: [
            "Encrypts handshake messages after the ServerHello exchange.",
            "Provides support for SSL to ensure backward compatibility.",
            "Uses Perfect Forward Secrecy for public key-based key exchange.",
            "Removes support for MD5 and replaces it with SHA-224."
        ],
        correct: [0, 2],
        explanation: "The current version of TLS, v1.3, is considered a significant upgrade over TLS v1.2. It removes support for MD5 and SHA-224, requires use of Perfect Forward Secrecy for public key-based key exchange, and encrypts handshake messages after the ServerHello exchange."
    },
    {
        id: 33,
        text: "Three entities know and trust each other completely. In a public key infrastructure setting, which of the following could be used to describe this type of trust? Select two.",
        options: [
            "Web of trust",
            "Bridge trust",
            "Distributed trust",
            "Third-party trust",
            "Direct trust"
        ],
        correct: [0, 4],
        explanation: "The web of trust model is based on direct trust. Each user signs a digital certificate and then exchanges certificates with all other users. Because all users trust each other, each user can sign the certificate of all other users."
    },
    {
        id: 34,
        text: "Charlie, a manager, wants to implement TLS because he thinks it is easier to configure. However, Perry recommends using IPSec instead. Which of the following statements could be used to justify implementing one over the other? Select two.",
        options: [
            "TLS uses ISAKMP/Oakley to generate keys and authenticate users using digital certificates.",
            "IPSec manages the keys to ensure they are not intercepted by unauthorized parties.",
            "IPSec authenticates that packets received were sent from the source.",
            "IPSec supports tunnel mode while TLS supports transport mode to transmit and receive data.",
            "TLS uses ESP to ensure that no other parties can view the contents."
        ],
        correct: [1, 2],
        explanation: "IPSec authenticates that packets received were sent from the source. This is identified in the header of the packet to ensure that no specific attacks took place to alter the contents of the packet. IPSec manages the keys through ISAKMP/Oakley."
    },
    {
        id: 35,
        text: "IPSec is considered a transparent protocol. Which of the following statements best describes what this means? Select two.",
        options: [
            "IPSec advertises its existence to deter malicious actors.",
            "Programs do not need to be modified to run under IPSec.",
            "IPSec can be easily configured to operate on any piece of hardware.",
            "IPSec is natively part of the IPv4 and IPv6 protocol.",
            "Users do not need to be trained on specific security procedures."
        ],
        correct: [1, 4],
        explanation: "In terms of applications, programs do not have to be modified to run under IPSec. Relative to users, they do not need to be trained on specific security procedures, such as encrypting with a specific application."
    },
    {
        id: 36,
        text: "Which of the following statements is true relative to the concept of certificate chaining? Select two.",
        options: [
            "There should not be more than one intermediate CA between the \"root\" CA and the end of the chain.",
            "Root digital certificates are self-signed.",
            "Root CAs validate all digital certificates.",
            "The endpoint of a chain is a user digital certificate."
        ],
        correct: [1, 3],
        explanation: "A root digital certificate is created and verified by a certificate authority (CA). Because there is no higher-level authority than a CA, root digital certificates are self-signed. The endpoint of the chain is the user digital certificate itself."
    },
    {
        id: 37,
        text: "As a security compliance specialist, you are asked to produce CP and CPS documents. Which of the following statements most accurately defines these two types of documents? Select three.",
        options: [
            "A CP includes information on how end-users register for a digital certificate.",
            "A CPS can be referenced in the OID of a digital certificate.",
            "A CP is a set of rules that govern the operation of a PKI.",
            "The CPS provides recommended baseline security requirements for the operation of CAs.",
            "A CPS is a more technical document than a CP.",
            "A CP describes in detail how the CA uses and manages certificates."
        ],
        correct: [1, 2, 4],
        explanation: "A certificate practice statement (CPS) is a more technical document than a CP. A CPS describes in detail how the certificate authority (CA) uses and manages certificates. A certificate policy (CP) is a published set of rules that govern the operation of a PKI."
    },
    {
        id: 38,
        text: "A key was revoked before it expired. Xan takes the revoked key out of the revocation state and reactivates it to extract and decrypt old messages from an email archival system. What is this type of key reactivation called?",
        options: [
            "Key recovery",
            "A revoked key cannot be reinstated.",
            "Key reestablishment",
            "Key reinstatement"
        ],
        correct: [1],
        explanation: "A key can be revoked prior to its expiration date. However, revoked keys cannot be reinstated; the revocation of a key is permanent. The certificate authority should be immediately notified so they can take additional measures."
    },
    {
        id: 39,
        text: "Which of the following most accurately describes the CSR generation process?",
        options: [
            "Create keys, sign request with public key, send private key to RA, CA issues digital certificate.",
            "Create keys, sign request with private key, send public key to RA, CA issues digital certificate.",
            "Create keys, sign request with private key, send private key to RA, CA issues digital certificate.",
            "Create keys, sign request with public key, send public key to RA, CA issues digital certificate."
        ],
        correct: [3],
        explanation: "The certificate signing request (CSR) generation process allows a user to obtain a digital certificate. First create the public and private keys and provide the requested information. The user electronically signs it by affixing their public key and sending it to a registration authority (RA)."
    },
    {
        id: 40,
        text: "Vladimiro adopted a key storage policy at his company that includes both a hardware and a software solution. Which of the following statements represents issues he may need to consider? Select two.",
        options: [
            "Store keys in folders that are password protected.",
            "Encrypted keys can be shared in plaintext but not unencrypted keys.",
            "Back up expired keys and place them in an offline medium.",
            "Treat unrevoked keys with the same level of security as active keys.",
            "Store keys in folders that are themselves encrypted."
        ],
        correct: [0, 4],
        explanation: "Whether private keys are stored in hardware or software, they must be adequately protected. To ensure basic protection, never share the key in plaintext, always store keys in files or folders that are themselves password protected or encrypted."
    },
    {
        id: 41,
        text: "A company is developing an online app that will require users to sign in using their email and a password. What should the company do to prevent SQLi attacks?",
        options: [
            "Filter outputs",
            "Physically secure the database servers",
            "Filter inputs",
            "Require an OTP"
        ],
        correct: [2],
        explanation: "A successful Structured Query Language injection (SQLi) attack is the result of improperly filtering the input. The attacker can then formulate an input string which will induce the database to display information the attacker is not authorized to access."
    },
    {
        id: 42,
        text: "Which of the following represents a true statement regarding the similarities or differences between keyloggers and spyware?",
        options: [
            "Spyware and keyloggers capture keystrokes.",
            "Keyloggers can probe installed programs to capture sensitive information.",
            "Keyloggers can track user activity by using the computer's resources.",
            "Spyware does not capture keyboard input."
        ],
        correct: [3],
        explanation: "Spyware typically secretly monitors users but, unlike a keylogger, makes no attempts to gather sensitive user keyboard input. It collects information without the user's approval by using the computer's resources."
    },
    {
        id: 43,
        text: "Which of the following statements accurately describe similarities or differences between a CSRF and a SSRF attack? Select three.",
        options: [
            "A SSRF attack targets a user.",
            "A CSRF attack pretends to be an authorized user.",
            "A SSRF attack can inject harmful data.",
            "A CSRF attack takes advantage of an authentication token.",
            "A CSRF and a SSRF attack are not necessarily web-based attacks."
        ],
        correct: [1, 2, 3],
        explanation: "A cross-site request forgery (CSRF) takes advantage of an authentication \"token\" that a website sends to a user's web browser. It forces the target to perform an action on behalf of the attacker. A server-side request forgery (SSRF) takes advantage of a trusting relationship between web servers. If an attacker can modify that target URL, they can potentially extract sensitive information or inject untrusted input."
    },
    {
        id: 44,
        text: "Which of the following statements best describes a TOCTTOU race condition?",
        options: [
            "When software is used to trap a memory error condition.",
            "When the TOC expires before the corresponding data in memory is retrieved.",
            "When data is written to the wrong memory location.",
            "When one thread overwrites the data created by another thread."
        ],
        correct: [3],
        explanation: "If two threads have access to the same location in memory, a second thread may overwrite the data stored in the memory location before the first thread is done. This is called a time of check (TOC) to time of use (TOU) race condition (TOCTTOU)."
    },
    {
        id: 45,
        text: "On December 15, a small company starts transitioning to a new accounting package during their holiday break. Suddenly, on January 2, when employees return to work at 9:00 a.m., all computers in the accounting department repeatedly shut down within 15 minutes of being powered up. What type of malware is likely to have infected the computers?",
        options: [
            "IoA triggered by an IoC",
            "Logic bomb",
            "Backdoor",
            "Rootkit"
        ],
        correct: [1],
        explanation: "A logic bomb is computer code that is typically added to a legitimate program but lies dormant and evades detection until a specific logical event triggers it. Once it is started, the program then deletes data or performs other malicious activities."
    },
    {
        id: 46,
        text: "Jefferson downloads a version of PowerShell that is purported to have capabilities that exceed those of the native version. Shortly thereafter his computer starts to exhibit unusual behavior. The installed anti-malware tool does not reveal anything he does not already know. What type of malware is most likely to be installed on the system?",
        options: [
            "File-based virus",
            "Fileless virus",
            "Bot",
            "Worm"
        ],
        correct: [1],
        explanation: "Unlike a file-based virus, a fileless virus does not infect a file and wait for that file to be launched. The malicious code is loaded directly in the computer's random access memory (RAM) through living-off-the-land binaries (LOLBins), such as PowerShell."
    },
    {
        id: 47,
        text: "Jennifer's computer is infected due to a phishing scam. Based on the message presented, she is willing to pay in Bitcoin to regain access to her computer because she does not want to lose her video productions. However, she is having a difficult time launching a browser to pay the ransom. What type of malware was most likely installed?",
        options: [
            "Blocking ransomware",
            "Crypto ransomware",
            "Encrypting ransomware",
            "Locking ransomware"
        ],
        correct: [0],
        explanation: "Blocking ransomware infects the computer and then manipulates the operating system (OS) in such a way as to block all normal access to the device, such as the inability to launch a browser. This type of infection can make it more difficult to pay the ransom."
    },
    {
        id: 48,
        text: "A user is browsing a website when they get a popup from what appears to be a government agency. The message says the computer is involved in an illegal activity and they need to pay a fine online by entering their credit card number. The user tries to close the message, but they cannot. What category of action did the user most likely experience?",
        options: [
            "Extortion",
            "Kidnap",
            "Malware",
            "Blackmail"
        ],
        correct: [1],
        explanation: "Diverse types of malware can be categorized based on the primary action the malware performs. In this case, the attacker performs \"kidnapping\" of the user's device and holds it \"hostage\" until a ransom is paid."
    },
    {
        id: 49,
        text: "You are serving as a contractor at a company to help harden endpoints. Which of the following could you implement to help achieve the goal? Select two.",
        options: [
            "Disable all ports and protocols.",
            "Install antivirus software.",
            "Install a HIPS, HIDS, and/or an EDR.",
            "Use a patch management system.",
            "Use an application allow list"
        ],
        correct: [3, 4],
        explanation: "Hardening endpoints involves patch management and OS protections. One of the most important steps in hardening an endpoint computer is patching. Hardening the OS includes employing application allow listing (approving only specific applications to run)."
    },
    {
        id: 50,
        text: "Hissana enters information on a compromised website, which does a poor job sanitizing the input. As a result, the web server sends back a response that infects her system. What type of attack is this?",
        options: [
            "XSS",
            "SSRF",
            "CSRF",
            "Replay"
        ],
        correct: [0],
        explanation: "In a cross-site scripting (XSS) attack, a website that accepts user input without validating it (called \"sanitizing\") and uses that input in a response can be exploited. An attacker can trick a valid website into feeding a malicious script to another user's web browser."
    },
    {
        id: 51,
        text: "At a software development company, team Alpha is responsible for static code analysis while team Beta is responsible for dynamic code analysis. Which of the following statements accurately describes the differences or similarities relative to how the teams conduct their analysis? Select two.",
        options: [
            "Static code analysis may include actively examining each line of code visually.",
            "Static code analysis is performed on executable files while they are not running.",
            "Dynamic code analysis is performed while the code is running.",
            "Dynamic code analysis uses an automated process before the code is compiled."
        ],
        correct: [0, 2],
        explanation: "In a manual peer review (static analysis), software engineers and developers team up to examine each line of source code looking for vulnerabilities. Security testing should also be performed after the source code is compiled (dynamic code analysis or runtime verification) and when all components are integrated and running."
    },
    {
        id: 52,
        text: "Which of the following best describes characteristics of embedded systems? Select two.",
        options: [
            "They are contained within a larger system.",
            "Due to their size and degree of difficulty to access, they are easier to secure.",
            "They are designed for a specific function.",
            "They are fully functional computers integrated into a single chip.",
            "They have specialized ports used for direct human input."
        ],
        correct: [0, 2],
        explanation: "Not all computing systems are desktop or mobile devices designed for direct human input. An embedded system is computer hardware and software contained within a larger system that is designed for a specific function."
    },
    {
        id: 53,
        text: "Guang buys a mobile device at an Apple store. He wants to harden the device using two strong methods of authentication. Which of the following would you advise Guang to use? Select two.",
        options: [
            "A PIN with at least four digits",
            "Use the Smart Lock feature",
            "Swipe pattern",
            "Facial recognition",
            "Password"
        ],
        correct: [3, 4],
        explanation: "Although passwords are the most secure option, most users opt not to configure their device with a password due to convenience. Swipe patterns and PINs are considered weak. The Smart Lock feature is available on Android devices, but Guang has an Apple device. Thus, the advisable strong methods are a password and facial recognition."
    },
    {
        id: 54,
        text: "A parent, who is a small business owner, takes their child on a business trip. The child uses the parent's phone during the flight. Unfortunately, the child leaves the phone on the plane, but the parent realizes it after it is too late to retrieve it. What kind of security could have prevented this type of vulnerability?",
        options: [
            "Location tracking",
            "Remote wipe",
            "Screen lock",
            "Physical security"
        ],
        correct: [3],
        explanation: "The greatest asset of a mobile device is also one of its greatest vulnerabilities—its portability. Locations outside of the enterprise's protected physical perimeter expose mobile devices to the risk of theft or being lost. Maintaining physical security of the device is the primary prevention against loss."
    },
    {
        id: 55,
        text: "Excel is watching a game with friends in a public forum. He is an avid fan and enjoys debating how his favorite player happens to be the best player in the league. Shortly after the game he receives a message on his mobile device with a link purporting to be advertising T-shirts and other merchandise with his favorite player. What may have caused this to happen?",
        options: [
            "Someone in the public forum who knows Excel is a threat actor.",
            "Malware on his phone turned on the geotracking app.",
            "Malware on his phone was engaged in unauthorized recording.",
            "The Bluetooth-enabled television heard his conversation."
        ],
        correct: [2],
        explanation: "Unauthorized recording occurs when the video camera and/or microphone on mobile devices have been compromised. By infecting a device with malware, a threat actor can secretly spy on an unsuspecting victim and record conversations or videos to target them."
    },
    {
        id: 56,
        text: "A firm is developing a new generation of a complex app for mobile devices. They expect the digital user's guide to contain at least 300 pages. It will be created in a collaborative effort authored by six individuals who work remotely. What tool can they use to help them keep track of editing history and version control regarding the user's guide?",
        options: [
            "MCM",
            "MVC",
            "GIT",
            "MAM",
            "MCC",
            "MHC"
        ],
        correct: [0],
        explanation: "Mobile content management (MCM) is used to support the creation and subsequent editing and modification of digital content by multiple employees. It can include tracking editing history, version control (recording changes and \"rolling back\" to a previous version), indexing, and searching."
    },
    {
        id: 57,
        text: "As part of your software test engineering role at a corporation, you need to set up a system that generates random input to trigger events such as exceptions, memory corruption, and other security breaches. Which of the following will you deploy? Select two.",
        options: [
            "Static code analysis",
            "Fuzzing process",
            "Random input tester",
            "Deterministic test engine",
            "Dynamic code analysis"
        ],
        correct: [1, 4],
        explanation: "Some of the most common dynamic code analysis tools use a process called fuzzing. Fuzzing provides random input to a program in an attempt to trigger exceptions, such as memory corruption, program crashes, or security breaches."
    },
    {
        id: 58,
        text: "Jailbreaking an Apple iOS device or rooting on Android devices opens opportunities that allow the user to download and install apps from a larger pool of available sources. What are the risks, if any, associated with this type of activity?",
        options: [
            "There are no significant risks due to the built-in security protections.",
            "Downloaded apps may contain malware that bypass the phone's security.",
            "It gives the user too much access and they may accidentally corrupt the OS.",
            "Apps downloaded from unofficial sites will void the warranty and risk not receiving OS updates."
        ],
        correct: [1],
        explanation: "Jailbreaking and rooting give access to the underlying OS and file system, typically to download apps from unofficial third-parties (sideloading). Because these apps have not been vetted, they often contain malware that cannot be trapped by the smartphone's security protections."
    },
    {
        id: 59,
        text: "A small company decides to adopt the COPE enterprise deployment model and supplies Android devices to its employees. Due to a significant downturn in the economy, they have not upgraded the devices in five years. What should the company do to limit the risk relative to the mobile devices?",
        options: [
            "Ensure OTA updates are being applied.",
            "Use the CYOD enterprise deployment model instead.",
            "Replace the devices with newer models.",
            "Ensure devices are not used for personal activities."
        ],
        correct: [2],
        explanation: "Limited updates is a vulnerability to which older mobile devices may be susceptible. This can result in a mobile device being used that is no longer receiving over-the-air (OTA) security updates. Replacing devices with newer models will relax this restriction and ensure security patches are available."
    },
    {
        id: 60,
        text: "An individual places a new USB cable near one of the charging stations at a busy airport. They wait from a nearby distance hoping someone will use the cable. What is the intent of the individual?",
        options: [
            "To be able to use someone else's internet connection.",
            "To use the cable as an antenna to intercept traffic.",
            "To send malicious commands to the device.",
            "To use the cable as a tracking device."
        ],
        correct: [2],
        explanation: "This is a connection vulnerability called juice jacking. The USB cable could be embedded with a Wi-Fi controller that can receive commands from a nearby device to send malicious commands to the connected mobile device, recognizing the cable as a human interface device."
    },
    {
        id: 61,
        text: "If MAC is more restrictive than DAC, why does Windows include the use of DAC when granting access?",
        options: [
            "Because Windows assigns users, processes, and devices a privilege label in its DAC implementation.",
            "Because Windows' version of DAC includes SIDs and integrity levels on every object.",
            "Because Windows uses a highly secure version of DAC that provides the needed level of protection.",
            "Because it first checks any requests against MIC and, if they pass, it then checks DAC.",
            "Because it first checks any requests against MAC and, if they pass, it then checks DAC."
        ],
        correct: [3],
        explanation: "Microsoft Windows uses a MAC implementation called Mandatory Integrity Control (MIC) that ensures data integrity by controlling access to securable objects. MIC works in addition to Windows DAC: Windows first checks any requests against MIC and, if they pass, it then checks DAC."
    },
    {
        id: 62,
        text: "Which of the following are likely reasons why Attaqui, a threat actor, prefers to use password spraying attacks when targeting accounts? Select two.",
        options: [
            "It typically has a considerable degree of success.",
            "It is less likely to raise any alarms.",
            "It does not require a lot of processing power.",
            "It is a high-outcome attack.",
            "It will not lock out the user account."
        ],
        correct: [1, 4],
        explanation: "A password spraying attack takes one or a small number of commonly used passwords and then uses this same password when trying to log in to several different user accounts. Because this targeted guess is spread across many different accounts, it is less likely to raise alarms or lock out the user account compared to brute-forcing a single account."
    },
    {
        id: 63,
        text: "A large company wants to manage passwords in such a way to, among other things, require users to log a valid reason for accessing specific resources. In addition, they want to revoke access to those resources after a user session to safeguard privileged accounts. Which of the following should the company implement?",
        options: [
            "Dynamic passwords",
            "Password manager",
            "Password keys",
            "Password vaulting"
        ],
        correct: [3],
        explanation: "Enterprise-level password vaulting stores user password credentials in a highly protected database (vault). It can require users to document a valid reason for accessing a particular resource and revoke access after a user session to safeguard privileged accounts."
    },
    {
        id: 64,
        text: "Viraa works at a virology lab that requires her to place her hand on a specialized \"medical\" device to scan certain genetic characteristics before being granted access. Which of the following is being used to prove her authenticity?",
        options: [
            "Something you exhibit",
            "Something you are",
            "Something you have",
            "Someone you are"
        ],
        correct: [0],
        explanation: "The element \"something you exhibit\" is often linked to specialized attributes. It may include neurological traits that can be identified by specialized medical equipment, distinct from standard \"something you are\" biometrics like fingerprints."
    },
    {
        id: 65,
        text: "Pooma is researching the viability of implementing keystroke dynamics to authenticate users. She writes a report highlighting some of the benefits. Which of the following statements is she most likely to include in the report as well as consider in the implementation plan? Select two.",
        options: [
            "The required security key is linked to the keyboard, making security breaches extremely difficult.",
            "It is widely used and very effective.",
            "No additional steps are required beyond entering the username and password.",
            "It only requires a specialized keyboard that is not too expensive.",
            "It requires no specialized hardware."
        ],
        correct: [2, 4],
        explanation: "Keystroke dynamics is a type of behavioral biometrics that recognizes a user's unique typing rhythm. It requires no specialized hardware, and because the user does not have to take any additional steps beyond entering a username and password, it is seen as a frictionless security layer."
    },
    {
        id: 66,
        text: "A security engineer needs to implement password authentication on a highly specialized system. A requirement is that if two different users specify the same password, the stored digests will not be the same. How can this be accomplished?",
        options: [
            "Use a different asymmetrical encryption key for each user.",
            "Use peppering techniques that slightly modify the password hashing function.",
            "Implement salting to make dictionary and brute-force attacks more difficult.",
            "Use SHA instead of MD5 as the hashing algorithm to create the digest."
        ],
        correct: [2],
        explanation: "Salting consists of a random string added to the user's plaintext password before it is hashed. Because the salt is unique per user, even if two users have the same password, the resulting hash (digest) will be different."
    },
    {
        id: 67,
        text: "An experienced threat actor manages to steal a password digest with 4 million entries. Their plan is to use a methodical series of password attack tools to try to crack as many passwords as possible but none of the passwords are available in plaintext. Which of the following will most likely be the next attack tool they will use?",
        options: [
            "Hybrid attack",
            "Dictionary attack",
            "Brute-force attack",
            "Mask attack"
        ],
        correct: [1],
        explanation: "A common sequence of password attacks starts with wordlists. If a sample of the passwords in plaintext form cannot be examined (skipping steps 1 and 2 of custom wordlists), most attacks will skip to step 3: a dictionary attack. This helps crack enough passwords to develop rules for subsequent hybrid or mask attacks."
    },
    {
        id: 68,
        text: "An organization has been using a password management system/vault for their employees. However, they are concerned because they believe it is susceptible to malware. Which of the following is a possible solution to help minimize the concern?",
        options: [
            "Use a strengthening strategy called peppering.",
            "Use a hardened password vault.",
            "Use a hardware password key.",
            "Use a secure software password manager."
        ],
        correct: [2],
        explanation: "A weakness of software vaults is that they could be susceptible to malware on the host system. More secure hardware-based solutions, called hardware password keys, can store passwords in a separate device, insulating them from software-based attacks."
    },
    {
        id: 69,
        text: "Divya logs in to her online bank account using a username and password, then proceeds to transfer money from one bank account to another. What likely safeguards has the bank implemented to secure her login credentials?",
        options: [
            "The username and password are combined and then a hash is created.",
            "The password is encrypted with a strong encryption algorithm.",
            "A digest of the current password Divya set is stored for comparison.",
            "The password is stored in plaintext in a very secure repository.",
            "It uses the PIN as the private key to encrypt the password."
        ],
        correct: [2],
        explanation: "The server converts the password to a scrambled set of characters using a one-way hash algorithm, creating a message digest. The server stores only this digest, not the password itself, so that even if the server is compromised, the actual passwords are not revealed."
    },
    {
        id: 70,
        text: "Zarak is researching methods of authentication that do not rely on passwords. He comes across a novel alternative called passkeys. Which of the following accurately describes its characteristics? Select two.",
        options: [
            "It is a USB device that unlocks a specific piece of hardware.",
            "It stores authentication information in hardware.",
            "It is a new generation of TPM.",
            "It uses multifactor authentication."
        ],
        correct: [1, 3],
        explanation: "Passkeys store authentication information in hardware and combine multiple authentication factors into a single package managed by the device's OS. They are resistant to credential phishing."
    },
    {
        id: 71,
        text: "Which of the following represents a benefit of using DMARC? Select two.",
        options: [
            "It acts as a proxy for the organization's email server.",
            "It allows the administrator to configure a secure end-to-end email tunnel.",
            "It can extend SPF and DKIM.",
            "It allows the administrator to specify more than one mechanism when sending emails."
        ],
        correct: [2, 3],
        explanation: "Domain-based Message Authentication, Reporting, and Conformance (DMARC) extends SPF and DKIM. It allows the administrative owner of a domain to publish a policy specifying which mechanism (DKIM, SPF, or both) is used and how to handle failures."
    },
    {
        id: 72,
        text: "An administrator configures a DNS MX record to point to a server with proxy-like characteristics. Which of the following best describes what the administrator is trying to accomplish?",
        options: [
            "Redirect traffic to a SEG to inspect email for malicious content.",
            "Redirect traffic to a SEG to ensure DMARC policies are enforced.",
            "Making provision for a secondary email server in case the primary email server fails.",
            "Configure a SEG to segway email traffic to a redundant server for load balancing purposes."
        ],
        correct: [0],
        explanation: "A secure email gateway (SEG) acts as a proxy for the organization's email server. Administrators configure the DNS MX record to point to the SEG so that all incoming email is filtered and inspected for malicious content before being forwarded to the internal server."
    },
    {
        id: 73,
        text: "A company has adopted anomaly-based monitoring and establishes a secure baseline. If the company does not maintain baselines on a timely basis, what is a potential consequence?",
        options: [
            "Too many true negatives",
            "Too many true positives",
            "Too many false positives",
            "Too many false negatives"
        ],
        correct: [2],
        explanation: "With anomaly-based monitoring, an alarm is raised when there is a significant deviation from the baseline. Since normal behavior changes over time, if baselines are not updated, normal activities may be flagged as anomalies, resulting in excessive false positives."
    },
    {
        id: 74,
        text: "An attacker tries to break into a DNS server to redirect traffic to his website. After multiple unsuccessful attempts, the attacker decides to take a more basic approach and starts by sending a request to a valid DNS server to resolve the name of his website. How can the attacker's goal of redirecting traffic be thwarted?",
        options: [
            "Enable DNS Guard on all internet-facing interfaces on the DNS server.",
            "Install anti-DNS hijacking software on all DNS servers under the organization's control.",
            "Ensure all DNS zone transfers use a tunnel to encrypt traffic between DNS servers.",
            "Validate DNS responses to ensure they are from an authoritative source."
        ],
        correct: [3],
        explanation: "This describes an attempt at DNS poisoning/hijacking. If the DNS server does not correctly validate responses to ensure they are from an authoritative source, it may cache fraudulent entries. Validating responses prevents the server from accepting and spreading the attacker's malicious IP addresses."
    },
    {
        id: 75,
        text: "An attacker successfully intercepts traffic from a client and then sends a fake digital certificate to the intended target. What is the attacker possibly trying to achieve? Select two.",
        options: [
            "Decrypt the traffic.",
            "Intercept traffic.",
            "Perform a MITM attack.",
            "Poison DNS entries to redirect traffic."
        ],
        correct: [0, 2],
        explanation: "In a man-in-the-middle (MITM) attack, the attacker sits between two devices. By sending a fake digital certificate, the attacker tricks the victim into encrypting data with a key the attacker controls, allowing the attacker to decrypt, read, and re-encrypt the traffic."
    },
    {
        id: 76,
        text: "An internal user installs malware on an internal system they want to target. However, the security product that is deployed in the organization was able to automatically initiate a response by placing the system into quarantine and generating an alert. Which of the following systems is capable of this type of response?",
        options: [
            "SOAR",
            "SCAP",
            "SEIM",
            "Syslog"
        ],
        correct: [0],
        explanation: "A Security Orchestration, Automation, and Response (SOAR) product is designed to manage high volumes of security warnings and automate incident responses, such as isolating a compromised machine, without human intervention."
    },
    {
        id: 77,
        text: "Two online companies sell similar products and are competing for increased market share. One of the companies is less honorable so they hire an attacker who launches an attack to make the other company appear less trustworthy and thus a less favorable option from which to buy. What type of attack did the malicious actor most likely launch?",
        options: [
            "DNS replay attack",
            "Domain reputation attack",
            "DDoS attack",
            "DNS reflection attack"
        ],
        correct: [1],
        explanation: "A competitor could hire an attacker to use a DNS attack to cause a competitor's domain to earn a low domain reputation score (e.g., by associating it with spam or malware). This impacts the trust and sales of the target, known as a domain reputation attack."
    },
    {
        id: 78,
        text: "A threat actor manages to spoof the MAC address in the cache of a computer with the goal of redirecting traffic. What type of attack is the threat actor launching?",
        options: [
            "MAC cloning",
            "CAM spoofing",
            "MAC cache attack",
            "ARP poisoning",
            "MAC flooding"
        ],
        correct: [3],
        explanation: "Threat actors take advantage of the ARP cache, which maps IP addresses to MAC addresses. By sending falsified ARP messages (ARP poisoning), they can link their MAC address with the IP address of a legitimate server (like a gateway), redirecting traffic to themselves."
    },
    {
        id: 79,
        text: "A rogue employee had been coordinating via email with an outside threat actor to compromise an internal system containing sensitive information. Fortunately, the company has a system in place that allowed them to identify the individual and their intentions and released the individual before they were able to launch the attack. What type of system does the company have in place?",
        options: [
            "UIMP",
            "GIMP",
            "DMARC",
            "EMXaminer",
            "SIEM"
        ],
        correct: [4],
        explanation: "A Security Information and Event Management (SIEM) system can perform user behavior analysis (UEBA) and sentiment analysis on communications. This allows it to detect unusual behavior or malicious intent (insider threats) before an attack is fully executed."
    },
    {
        id: 80,
        text: "A threat actor launches an attack to restrict access to a particular website. The attack targets NTP to realize a significant increase in traffic compared to the amount of traffic originally sent. Which of the following best describes the type of attack the threat actor is engaging in? Select three.",
        options: [
            "Reflection attack",
            "Amplification attack",
            "DDoS attack",
            "NTP multiplier attack",
            "Augmentation attack"
        ],
        correct: [0, 1, 2],
        explanation: "Attackers use amplified attacks as a form of Distributed Denial of Service (DDoS). By sending small requests to a third-party server (like NTP) with a spoofed source IP (Reflection), they trigger a much larger response (Amplification) directed at the victim. NTP can generate a massive increase in throughput (206-fold)."
    },
    {
        id: 81,
        text: "Which attack intercepts communications between a web browser and the underlying OS?",
        options: [
            "MITM",
            "MRTR",
            "MTTR",
            "MITB"
        ],
        correct: [3],
        explanation: "A man-in-the-browser (MITB) attack intercepts and manipulates the communication between the web browser and the security mechanisms of the computer. This is distinct from a MITM attack, which intercepts communication between two endpoints, such as two users or a user and a server."
    },
    {
        id: 82,
        text: "Himari needs to protect against potential attacks on DNS. What are the locations she would need to protect?",
        options: [
            "Web server buffer and host DNS server",
            "Reply referrer and domain buffer",
            "Web browser and browser add-on",
            "Local host file and external DNS server"
        ],
        correct: [3],
        explanation: "DNS attacks typically target two specific locations: the local host file on a device (used in DNS poisoning) and the external DNS server (used in DNS hijacking)."
    },
    {
        id: 83,
        text: "What is the result of an ARP poisoning attack?",
        options: [
            "The ARP cache is compromised.",
            "Users cannot reach a DNS server.",
            "MAC addresses are altered.",
            "An internal DNS must be used instead of an external DNS."
        ],
        correct: [0],
        explanation: "In an ARP poisoning attack, threat actors exploit the MAC address stored in a software ARP cache, changing the data so that an IP address points to a different device (usually the attacker's). This effectively compromises the ARP cache."
    },
    {
        id: 84,
        text: "Yua has discovered that the network switch is broadcasting all packets to all devices. She suspects it is the result of an attack that has overflowed the switch MAC address table. Which type of attack would she report?",
        options: [
            "MAC spoofing attack",
            "MAC cloning attack",
            "MAC flooding attack",
            "MAC overflow attack"
        ],
        correct: [2],
        explanation: "In a MAC flooding attack, a threat actor overflows the switch with spoofed Ethernet packets to consume all the memory in the MAC address table. Once the table is full, the switch enters a \"fail-open\" mode and broadcasts frames to all ports, allowing the attacker to capture traffic."
    },
    {
        id: 85,
        text: "Sakura is explaining to a colleague the different types of DNS attacks. Which DNS attack would only impact a single user?",
        options: [
            "DNS hijack attack",
            "DNS poisoning attack",
            "DNS overflow attack",
            "DNS resource attack"
        ],
        correct: [1],
        explanation: "DNS poisoning involves modifying the local host file on a specific device to redirect that device to a malicious site. In contrast, DNS hijacking infects an external DNS server, which has the advantage (for the attacker) of redirecting all users who access that server."
    },
    {
        id: 86,
        text: "Which type of monitoring methodology looks for statistical deviations from a baseline?",
        options: [
            "Behavioral monitoring",
            "Signature-based monitoring",
            "Anomaly monitoring",
            "Heuristic monitoring"
        ],
        correct: [2],
        explanation: "Anomaly monitoring is designed to detect statistical anomalies. It works by compiling a secure baseline of normal activities and raising an alarm whenever there is a significant deviation from this baseline."
    },
    {
        id: 87,
        text: "Ichika suspects that there may be infected devices on the network that are sending regular beacons to a threat actor’s C&C server. Which type of analysis would she use to determine if this is true?",
        options: [
            "Traffic analysis",
            "Port analysis",
            "Packet analysis",
            "Probe analysis"
        ],
        correct: [2],
        explanation: "Packet analysis can be used extensively for security, including detecting unusual behavior and discovering regular connections (beacons) to a threat actor's command and control (C&C) server."
    },
    {
        id: 88,
        text: "Akari has been asked to install a packet analysis tool on a Linux web server. Because this server does not do anything unnecessary so it reduces the footprint that a threat actor could exploit, all applications on the server are command-line applications and there is no graphical user interface (GUI). Which tool would Akari install?",
        options: [
            "Ethereal",
            "Tcpdump",
            "Network General",
            "Sniffer"
        ],
        correct: [1],
        explanation: "Tcpdump is a command-line packet analyzer that operates on UNIX and Linux operating systems. Because it is command-line based, it is suitable for a server without a GUI, unlike Wireshark which is a GUI-based tool."
    },
    {
        id: 89,
        text: "Which of the following is NOT a reason that threat actors use PowerShell for attacks?",
        options: [
            "It cannot be detected by anti-malware running on the computer.",
            "It leaves behind no evidence on a hard drive.",
            "It can be invoked prior to system boot.",
            "Most applications flag it as a trusted application."
        ],
        correct: [2],
        explanation: "Threat actors use PowerShell because it allows them to inject code without storing malicious code on the hard drive (leaving no evidence), it can be configured to avoid detection by anti-malware, and it is generally flagged as a \"trusted\" application. The ability to invoke it prior to system boot is not mentioned as a feature or reason for its use in attacks."
    },
    {
        id: 90,
        text: "Which attack uses the fewest number of computers to launch the attack?",
        options: [
            "DoS",
            "DDoS",
            "DoSS",
            "DooS"
        ],
        correct: [0],
        explanation: "A Denial of Service (DoS) attack typically involves only one source making bogus requests. In contrast, a Distributed Denial of Service (DDoS) attack involves hundreds, thousands, or millions of sources. Therefore, a DoS uses the fewest computers."
    },
    {
        id: 91,
        text: "Which of the following is used to write macros?",
        options: [
            "PowerShell",
            "Python",
            "Bash",
            "VBA"
        ],
        correct: [3],
        explanation: "Visual Basic for Applications (VBA) is the language most often used to create macros. Macros are generally written using VBA and are stored within user documents like Excel worksheets or Word files."
    },
    {
        id: 92,
        text: "Which of the following is NOT correct about an email header?",
        options: [
            "As email is transferred from MTA to MTA, information is added to the email header.",
            "Email headers are encrypted to prevent someone from altering the contents.",
            "The email header contains information about the sender, recipient, email’s route through MTAs, and various authentication details.",
            "Each MTA along the path adds its own information to the top of the email header."
        ],
        correct: [1],
        explanation: "The text states that as an email travels from the sender through multiple MTAs, any MTA along the way can alter the content of the message or change the header information. This indicates that headers are not encrypted or protected from alteration during transit between MTAs."
    },
    {
        id: 93,
        text: "Which of the following is NOT correct about forwarding emails?",
        options: [
            "Corporations routinely allow employees to forward emails.",
            "Employees may “auto-forward” corporate emails to utilize enhanced spam filtering.",
            "Forwarded emails may not be available for email evidence.",
            "Unauthorized users could access forwarded emails."
        ],
        correct: [0],
        explanation: "The text identifies email forwarding as a significant risk, noting that sensitive messages could be distributed outside the corporate environment and that threat actors exploit forwarding rules. It does not state that corporations routinely allow this; rather, it highlights the dangers and mentions that CISA warns against threat actors exploiting these rules."
    },
    {
        id: 94,
        text: "Which of the following email defenses uses a digital signature?",
        options: [
            "SPC",
            "DKIM",
            "DMARC",
            "It depends on whether or not the email payload has been encrypted."
        ],
        correct: [1],
        explanation: "Domain Keys Identified Mail (DKIM) is an authentication technique that validates the content of the email message itself through the use of a digital signature."
    },
    {
        id: 95,
        text: "Aoi uses the Python programming language and does not want her code to contain vulnerabilities. Which of the following best practices would she NOT use?",
        options: [
            "Only use compiled and not interpreted Python code.",
            "Use the latest version of Python.",
            "Use caution when formatting strings.",
            "Download only vetted libraries."
        ],
        correct: [0],
        explanation: "The text lists several best practices for using Python: using the latest version, staying current on vulnerabilities, being careful when formatting strings, and downloading only vetted libraries. It does not suggest limiting use to compiled code; furthermore, Python is generally described as a language that can run on different OS platforms."
    },
    {
        id: 96,
        text: "What is Bash?",
        options: [
            "The command-language interpreter for Linux/UNIX OSs",
            "The open-source scripting language that contains many vulnerabilities",
            "A substitute for SSH",
            "The underlying platform on which macOS is built"
        ],
        correct: [0],
        explanation: "Bash is explicitly defined as the command language interpreter (called the \"shell\") for the Linux/UNIX operating system."
    },
    {
        id: 97,
        text: "Which of the following is a tool for editing packets and then putting the packets back onto the network to observe their behavior?",
        options: [
            "Tcpreplay",
            "Tcpdump",
            "Wireshark",
            "Packetdump"
        ],
        correct: [0],
        explanation: "Tcpreplay is a tool designed for editing packets and then \"replaying\" those packets back onto the network to observe their behavior."
    },
    {
        id: 98,
        text: "Which of the following is NOT a limitation of an SEG?",
        options: [
            "Slow processing speed",
            "Single-layer security",
            "Multiple root domains",
            "Revealing protections"
        ],
        correct: [0],
        explanation: "The text specifically lists the limitations of a Secure Email Gateway (SEG) as: Single-layer security (often disabling built-in provider security), Exposing protections (by changing DNS MX records), and Multiple root domains (which can allow bypassing the SEG). Slow processing speed is not mentioned as a limitation."
    },
    {
        id: 99,
        text: "Amari has been asked to compare an organization’s security against a set of open security standards. Which of the following would he choose?",
        options: [
            "SCAP",
            "NFLOW",
            "SOAR",
            "SPF"
        ],
        correct: [0],
        explanation: "Security Content Automation Protocols (SCAP) is made up of several open security standards that serve as security benchmarks or points of reference for comparison and assessment."
    },
    {
        id: 100,
        text: "What does an SNMP trap do that is different from the normal SNMP function?",
        options: [
            "SNMP traps do not use PDU.",
            "SNMP traps can only respond to administrator queries once per hour.",
            "SNMP traps can send unsolicited messages.",
            "SNMP traps require authentication while normal SNMP does not."
        ],
        correct: [2],
        explanation: "While normal SNMP usually involves a manager querying an agent, an SNMP trap is a special type of PDU where the agent sends an unsolicited message or notification to the manager about critical events."
    }
];
