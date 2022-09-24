from browser import document
import random

first = ["Deep",
        "Iron",
        "DNS",
        "Point",
        "Crowd",
        "Fort",
        "Ping",
        "Proof",
        "Cyber",
        "Fire",
        "Force",
        "Blue",
        "Clear",
        "Risk",
        "Laser",
        "Digital",
        "Keep",
        "Defender",
        "Total",
        "Howl",
        "Absolute",
        "Securo",
        "Veri",
        "Private",
        "Pro",
        "Dark",
        "Strong"
        ]

single_word_only =["Veri",
        "Securo"
        ]

second = ["Strike",
        "Bow",
        "Identity",
        "Security",
        "Watch",
        "Guard",
        "Trust",
        "Point",
        "Secure",
        "Root",
        "Net",
        "Cloud",
        "Filter",
        "Patrol",
        "Safe",
        "Gate",
        "Token",
        "Wolf",
        "Wall",
        "Shield",
        "Fortress",
        "Gladiator"
        ]

third = ["Group",
        "Software",
        "Labs",
        "Security"
        ]
check_size = 100




def show(e):
    # select random word from first
    rand_num = random.randint(1, check_size) % len(first)
    rand_word = first[rand_num]

    # insert space half the time if first half not in single_word_only list
    if rand_word not in single_word_only:
        space = bool(random.getrandbits(1))
        if space == True:
            rand_word += " "

    # select random word from second
    rand_num = random.randint(1, check_size) % len(second)
    rand_word += second[rand_num]

    # add a suffix 20% of the time
    if random.randint(1, 10) > 8:
        rand_num = random.randint(1, check_size) % len(third)
        rand_word += (" " + third[rand_num])

    # add trailing separator
    rand_word += " ~ "

    # show the word
    document['randoms'] <= rand_word

document['go-button'].bind('click', show)