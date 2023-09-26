// Text Fields
const genre = document.getElementById('genre');
const setting = document.getElementById('setting');
const tone = document.getElementById('tone');
const theme = document.getElementById('theme');
const mainCharacter = document.getElementById('main-character');
const characterMotivation = document.getElementById('character-motivation');
const characterDescription = document.getElementById('character-description');
const worldInformation = document.getElementById('world-information');
const additionalInformation = document.getElementById('additional-information');
const output = document.getElementById('output');

// Randomize Buttons
const randomizeGenre = document.getElementById('randomize-genre');
const randomizeSetting = document.getElementById('randomize-setting');
const randomizeTone = document.getElementById('randomize-tone');
const randomizeTheme = document.getElementById('randomize-theme');
const randomizeMainCharacter = document.getElementById('randomize-main-character');
const randomizeCharacterMotivation = document.getElementById('randomize-character-motivation');

// Output
const outputTextArea = document.getElementById('output');
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const clearAllButton = document.getElementById("clear-all");

// Arrays
const genresArray = ["Science Fiction", "Fantasy", "Mystery", "Romance", "Adventure", "Thriller", "Horror", "Historical Fiction", "Dystopian", "Crime", "Action", "Biography", "Western", "Modern Fantasy", "Slice of Life"];
const settingsArray = ["Medieval Fantasy World", "Urban City", "Dystopian Future", "Space Colony", "Victorian London", "Post-Apocalyptic Wasteland", "Ancient Mythological Realm", "Small Town USA", "Cyberpunk Metropolis", "Wild West", "Mystical Forest", "Underwater City", "Alternate History", "Tropical Island", "Haunted Mansion", "Parallel Universe", "Steampunk World", "Futuristic Sci-Fi City", "Historical Ancient Civilization", "Magical Academy", "Interstellar Spaceship", "Countryside Farm", "Enchanted Kingdom", "Time-Traveling Adventures", "Jungle Expedition", "Artificial Intelligence Hub", "Desert Oasis", "Hidden Temple", "Pirate Ship", "Surreal Dream World", "Cybernetic Megacity", "Cosmic Space Station", "Neon-lit Cyber Alley", "Floating Sky City", "Subterranean City", "Underground Rebel Hideout", "Suburban Neighborhood", "Moon Base Colony"];
const tonesArray = ["Dramatic", "Humorous", "Eldritch Horror", "Mysterious", "Romantic", "Suspenseful", "Dark", "Light-hearted", "Adventure", "Hopeful", "Satirical", "Gothic", "Melancholic", "Whimsical", "Cynical", "Epic", "Tragic", "Surreal", "Heartwarming", "Cinematic", "Eerie", "Absurd", "Magical", "Introspective"];
const themesArray = ["Love and Romance", "Friendship", "Coming of Age", "Good vs. Evil", "Survival", "Identity", "Betrayal", "Redemption", "Justice", "Power and Corruption", "Family", "Loss and Grief", "Adventure", "Discovery", "Isolation", "War and Conflict", "Technology and Progress", "Nature vs. Man", "Time Travel", "Society and Class", "Ambition", "Freedom", "Moral Dilemmas", "Fate and Destiny", "Revenge", "Forgiveness", "Sacrifice", "Legacy", "Immortality", "Transformation"];
const characterMotivationsArray = ["Seeking Revenge", "Finding True Love", "Discovering Self-Identity", "Seeking Justice", "Achieving Personal Growth", "Exploring New Horizons", "Gaining Power and Influence", "Surviving Against All Odds", "Protecting Loved Ones", "Overcoming Fear and Insecurity", "Obtaining Wealth and Success", "Redemption and Forgiveness", "Exploring the Unknown", "Defending the Innocent", "Seeking Knowledge and Wisdom", "Reclaiming Lost Glory", "Breaking Free from Oppression", "Uncovering Hidden Truths", "Fulfilling a Prophecy", "Avenging a Loved One", "Finding Inner Peace", "Escaping a Troubled Past", "Building a Better World", "Conquering Personal Demons", "Preserving Tradition", "Exploring Creativity and Artistry", "Cherishing Everyday Moments", "Nurturing Family Bonds", "Establishing a Sense of Home", "Savoring Simple Pleasures", "Cultivating Meaningful Friendships", "Pursuing Career Aspirations", "Balancing Work and Life", "Embracing New Beginnings", "Dealing with Loss and Grief", "Navigating Parenthood", "Adapting to Change", "Living in the Moment", "Creating a Life of Contentment", "Finding Joy in the Ordinary", "Fulfilling Personal Hobbies and Passions", "Appreciating the Beauty of Nature", "Supporting Community and Charity", "Building Lasting Memories", "Coping with Aging and Reflection"];
const mainCharactersArray = {
    "Lila Steel, Inventive Engineer": "An inventive engineer with a knack for creating fantastical contraptions. Lila's gadgets are sought after by adventurers and explorers alike.",
    "Max Shadow, Rogue Adventurer": "A daring rogue adventurer who never shies away from danger. Max is known for infiltrating the most secure places and retrieving priceless artifacts.",
    "Aria Frost, Ice Mage": "A powerful ice mage with the ability to freeze entire landscapes. Aria's icy magic conceals a warm heart that cares deeply for her friends and allies.",
    "Evan Storm, Time-Traveling Explorer": "A time-traveling explorer who journeys through history's most pivotal moments. Evan seeks to unravel the mysteries of time and space.",
    "Athena Gray, Galactic Explorer": "A fearless galactic explorer who roams the cosmos in search of new frontiers. Athena's starship is her home among the stars.",
    "Lyra Stone, Magical Scholar": "A dedicated magical scholar who spends her days poring over ancient tomes and deciphering arcane secrets. Lyra's knowledge is a source of power and wonder.",
    "Finn Swift, Bounty Hunter": "A skilled bounty hunter known for always getting his target. Finn operates in the shadows, pursuing fugitives across diverse worlds.",
    "Elara Nightshade, Shadowy Assassin": "A shadowy assassin whose skills are unmatched. Elara serves as a mysterious and lethal agent in the world of espionage.",
    "Rowan Stormrider, Pirate Captain": "A daring pirate captain who commands a crew of swashbucklers on a legendary ship. Rowan seeks treasure and adventure on the high seas.",
    "Nova Starlight, Space Rebel": "A space rebel fighting against oppressive forces in the galaxy. Nova's mission is to bring freedom and justice to distant worlds.",
    "Kai Fireheart, Elemental Sorcerer": "An elemental sorcerer with command over fire. Kai's fiery powers are tempered by wisdom and a sense of responsibility.",
    "Eris Wildwood, Druidic Shaman": "A druidic shaman who communicates with nature and protects the balance of the forest. Eris is a guardian of the ancient woods.",
    "Lark Skylark, Airship Pilot": "A skilled airship pilot who soars through the skies on fantastical flying vessels. Lark's airships are known for their speed and grace.",
    "Kira Moonshadow, Intergalactic Spy": "An intergalactic spy skilled in infiltration and espionage. Kira's missions take her to the farthest reaches of the universe.",
    "Soren Blackthorn, Monster Hunter": "A fearless monster hunter who battles creatures of legend and myth. Soren is humanity's last line of defense against the supernatural.",
    "Nyx Silverblade, Rogue Elf": "A rogue elf known for agility and stealth. Nyx is a master of archery and swordplay, navigating the world with grace and precision.",
    "Zara Blaze, Fire-Dancing Performer": "A fire-dancing performer who dazzles audiences with her fiery displays. Zara's performances are a blend of artistry and danger.",
    "Caden Moonstrider, Astral Nomad": "An astral nomad who traverses the cosmos in search of cosmic knowledge. Caden's journey takes him to celestial realms and beyond.",
    "Sorrel Ironfist, Dwarven Warrior": "A dwarven warrior with an indomitable spirit. Sorrel wields a mighty warhammer and defends the dwarven kingdom with honor.",
    "Selene Ravenwing, Moonlit Enchantress": "A moonlit enchantress who weaves spells under the light of the moon. Selene's magic is intimately connected to the lunar cycle.",
    "Orion Thunderstrike, Thunderous Hero": "A thunderous hero who harnesses the power of storms. Orion's lightning strikes are legendary, and he stands as a protector of the realm.",
    "Emma Smith, College Student": "A college student juggling the challenges of academics, friendships, and self-discovery. Emma aspires to make her mark on the world.",
    "Michael Johnson, Small-Town Bartender": "A small-town bartender who knows the secrets and stories of every patron. Michael's bar is the heart of the community.",
    "Grace Walker, Wildlife Photographer": "A wildlife photographer capturing the beauty and majesty of nature. Grace's lens reveals the wonders of the animal kingdom.",
    "Lucas Miller, Park Ranger": "A dedicated park ranger who safeguards the wilderness and educates visitors. Lucas is a steward of the natural world.",
    "Sophie Anderson, High School Teacher": "A high school teacher shaping the minds of the future. Sophie's classroom is a place of learning, growth, and inspiration.",
    "Miles Turner, Detective": "A brilliant detective known for solving the most perplexing cases. Miles's deductive skills are unmatched, and justice is his mission.",
    "Olivia Parker, Graphic Designer": "A creative graphic designer who brings visions to life through art and design. Olivia's work is a fusion of innovation and aesthetics.",
    "Ella Bennett, Nurse": "A compassionate nurse providing care and comfort to those in need. Ella's healing touch and empathy make her a pillar of support.",
    "Daniel Foster, Archaeologist": "An adventurous archaeologist delving into ancient ruins and mysteries. Daniel's excavations uncover the secrets of civilizations long past.",
    "Liam Cooper, Barista": "A barista crafting exquisite coffee and fostering a sense of community in a cozy café. Liam's café is a haven for caffeine enthusiasts.",
    "Isabella Rodriguez, Chef": "A talented chef creating culinary masterpieces that delight the senses. Isabella's restaurant is a gastronomic adventure.",
    "Noah White, Musician": "A passionate musician whose melodies resonate with the soul. Noah's music transcends genres and speaks to the heart.",
    "Ava Robinson, Librarian": "A diligent librarian curating knowledge and preserving the wisdom of ages. Ava's library is a sanctuary of books and discovery.",
    "Mason Wright, Firefighter": "A brave firefighter rushing into the flames to save lives and property. Mason's courage is unwavering in the face of danger.",
    "Chloe Hayes, Botanist": "A dedicated botanist studying the secrets of plant life and the wonders of nature. Chloe's discoveries expand our understanding of the natural world.",
    "Ethan Hughes, Sports Coach": "A sports coach guiding athletes to greatness through discipline and teamwork. Ethan's coaching instills values that extend beyond the field.",
    "Zoe Carter, Flight Attendant": "A friendly flight attendant ensuring safe and comfortable journeys through the skies. Zoe's flights are marked by hospitality and care.",
    "Caleb Mitchell, Private Investigator": "A resourceful private investigator uncovering truths in the shadows. Caleb's investigations reveal the hidden side of the city.",
    "Lily Walker, Environmental Activist": "An environmental activist advocating for a sustainable and greener world. Lily's passion drives positive change for the planet.",
    "William Turner, Plumber": "A skilled plumber fixing leaks and restoring order to plumbing systems. William's dedication ensures that water flows smoothly, even in the trickiest situations.",
    "Thalia Moonshadow, Elven Diplomat": "An elven diplomat with a gift for negotiation and diplomacy. Thalia represents her people with grace and strives for peaceful coexistence among all races.",
    "Brom Stoneforge, Dwarven Smith": "A dwarven smith renowned for crafting legendary weapons and armor. Brom's creations are sought after by warriors throughout the realm.",
    "Seraphina Sunwing, Winged Fairy": "A winged fairy whose radiant presence brings light and joy wherever she goes. Seraphina's wings grant her the gift of flight and a connection to nature's beauty.",
    "Rolan Swiftclaw, Lycanthropic Tracker": "A lycanthropic tracker with the ability to transform into a wolf. Rolan uses his keen senses and shapeshifting to navigate the wilderness and protect his pack.",
    "Glimmerstar, Mischievous Pixie": "A mischievous pixie known for her playful tricks and magical pranks. Glimmerstar's laughter is contagious, and she spreads whimsy wherever she flies.",
    "Gruff Thunderhoof, Troll Bridge Guardian": "A troll bridge guardian with a gruff exterior and a heart of gold. Gruff ensures that travelers safely cross his bridge, even as he enforces the toll.",
    "Aria Dreamweaver, Dream Elf": "A dream elf who weaves dreams for the world's sleepers. Aria's dreamscapes are both enchanting and profound, offering glimpses into the subconscious.",
    "Bumblefluff, Talking Animal Companion": "A talking animal companion with a keen sense of humor. Bumblefluff accompanies adventurers on their quests, providing witty commentary and sage advice.",
    "Zephyr Windwhisper, Air Elemental Guide": "An air elemental guide who can manipulate the winds and create paths through the sky. Zephyr is a guardian of travelers and a whisperer of secrets."
};

generateButton.addEventListener("click", function () {

    let formattedOutput = ""

    // Create the formatted output

});