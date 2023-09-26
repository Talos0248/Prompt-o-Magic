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

// Radio Buttons
const singleIdeaRadio = document.getElementById("single-idea");
const ideaListRadio = document.getElementById("idea-list");
const storyRadio = document.getElementById("story");

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
    "Lila Steel, Inventive Engineer": "An inventive engineer with a knack for creating fantastical contraptions. They create gadgets that are sought after by adventurers and explorers alike.",
    "Max Shadow, Rogue Adventurer": "A daring rogue adventurer who never shies away from danger. They are known for infiltrating the most secure places and retrieving priceless artifacts.",
    "Aria Frost, Ice Mage": "A powerful ice mage with the ability to freeze entire landscapes. They possess icy magic that conceals a warm heart caring deeply for friends and allies.",
    "Evan Storm, Time-Traveling Explorer": "A time-traveling explorer who journeys through history's most pivotal moments. They seek to unravel the mysteries of time and space.",
    "Athena Gray, Galactic Explorer": "A fearless galactic explorer who roams the cosmos in search of new frontiers. Their starship is their home among the stars.",
    "Lyra Stone, Magical Scholar": "A dedicated magical scholar who spends their days poring over ancient tomes and deciphering arcane secrets. Their knowledge is a source of power and wonder.",
    "Finn Swift, Bounty Hunter": "A skilled bounty hunter known for always getting their target. They operate in the shadows, pursuing fugitives across diverse worlds.",
    "Elara Nightshade, Shadowy Assassin": "A shadowy assassin whose skills are unmatched. They serve as a mysterious and lethal agent in the world of espionage.",
    "Rowan Stormrider, Pirate Captain": "A daring pirate captain who commands a crew of swashbucklers on a legendary ship. They seek treasure and adventure on the high seas.",
    "Nova Starlight, Space Rebel": "A space rebel fighting against oppressive forces in the galaxy. Their mission is to bring freedom and justice to distant worlds.",
    "Kai Fireheart, Elemental Sorcerer": "An elemental sorcerer with command over fire. Their fiery powers are tempered by wisdom and a sense of responsibility.",
    "Eris Wildwood, Druidic Shaman": "A druidic shaman who communicates with nature and protects the balance of the forest. They are a guardian of the ancient woods.",
    "Lark Skylark, Airship Pilot": "A skilled airship pilot who soars through the skies on fantastical flying vessels. Their airships are known for their speed and grace.",
    "Kira Moonshadow, Intergalactic Spy": "An intergalactic spy skilled in infiltration and espionage. Their missions take them to the farthest reaches of the universe.",
    "Soren Blackthorn, Monster Hunter": "A fearless monster hunter who battles creatures of legend and myth. They are humanity's last line of defense against the supernatural.",
    "Nyx Silverblade, Rogue Elf": "A rogue elf known for agility and stealth. They are a master of archery and swordplay, navigating the world with grace and precision.",
    "Zara Blaze, Fire-Dancing Performer": "A fire-dancing performer who dazzles audiences with fiery displays. Their performances are a blend of artistry and danger.",
    "Caden Moonstrider, Astral Nomad": "An astral nomad who traverses the cosmos in search of cosmic knowledge. Their journey takes them to celestial realms and beyond.",
    "Sorrel Ironfist, Dwarven Warrior": "A dwarven warrior with an indomitable spirit. They wield a mighty warhammer and defend the dwarven kingdom with honor.",
    "Selene Ravenwing, Moonlit Enchantress": "A moonlit enchantress who weaves spells under the light of the moon. Their magic is intimately connected to the lunar cycle.",
    "Orion Thunderstrike, Thunderous Hero": "A thunderous hero who harnesses the power of storms. Their lightning strikes are legendary, and they stand as a protector of the realm.",
    "Emma Smith, College Student": "A college student juggling the challenges of academics, friendships, and self-discovery. They aspire to make their mark on the world.",
    "Michael Johnson, Small-Town Bartender": "A small-town bartender who knows the secrets and stories of every patron. Their bar is the heart of the community.",
    "Grace Walker, Wildlife Photographer": "A wildlife photographer capturing the beauty and majesty of nature. Their lens reveals the wonders of the animal kingdom.",
    "Lucas Miller, Park Ranger": "A dedicated park ranger who safeguards the wilderness and educates visitors. They are a steward of the natural world.",
    "Sophie Anderson, High School Teacher": "A high school teacher shaping the minds of the future. Their classroom is a place of learning, growth, and inspiration.",
    "Miles Turner, Detective": "A brilliant detective known for solving the most perplexing cases. Their deductive skills are unmatched, and justice is their mission.",
    "Olivia Parker, Graphic Designer": "A creative graphic designer who brings visions to life through art and design. Their work is a fusion of innovation and aesthetics.",
    "Ella Bennett, Nurse": "A compassionate nurse providing care and comfort to those in need. Their healing touch and empathy make them a pillar of support.",
    "Daniel Foster, Archaeologist": "An adventurous archaeologist delving into ancient ruins and mysteries. Their excavations uncover the secrets of civilizations long past.",
    "Liam Cooper, Barista": "A barista crafting exquisite coffee and fostering a sense of community in a cozy café. They create a haven for caffeine enthusiasts.",
    "Isabella Rodriguez, Chef": "A talented chef creating culinary masterpieces that delight the senses. Their restaurant is a gastronomic adventure.",
    "Noah White, Musician": "A passionate musician whose melodies resonate with the soul. Their music transcends genres and speaks to the heart.",
    "Ava Robinson, Librarian": "A diligent librarian curating knowledge and preserving the wisdom of ages. Their library is a sanctuary of books and discovery.",
    "Mason Wright, Firefighter": "A brave firefighter rushing into the flames to save lives and property. Their courage is unwavering in the face of danger.",
    "Chloe Hayes, Botanist": "A dedicated botanist studying the secrets of plant life and the wonders of nature. Their discoveries expand our understanding of the natural world.",
    "Ethan Hughes, Sports Coach": "A sports coach guiding athletes to greatness through discipline and teamwork. Their coaching instills values that extend beyond the field.",
    "Zoe Carter, Flight Attendant": "A friendly flight attendant ensuring safe and comfortable journeys through the skies. Their flights are marked by hospitality and care.",
    "Caleb Mitchell, Private Investigator": "A resourceful private investigator uncovering truths in the shadows. Their investigations reveal the hidden side of the city.",
    "Lily Walker, Environmental Activist": "An environmental activist advocating for a sustainable and greener world. Their passion drives positive change for the planet.",
    "William Turner, Plumber": "A skilled plumber fixing leaks and restoring order to plumbing systems. Their dedication ensures that water flows smoothly, even in the trickiest situations.",
    "Thalia Moonshadow, Elven Diplomat": "An elven diplomat with a gift for negotiation and diplomacy. They represent their people with grace and strive for peaceful coexistence among all races.",
    "Brom Stoneforge, Dwarven Smith": "A dwarven smith renowned for crafting legendary weapons and armor. Their creations are sought after by warriors throughout the realm.",
    "Seraphina Sunwing, Winged Fairy": "A winged fairy whose radiant presence brings light and joy wherever they go. Their wings grant them the gift of flight and a connection to nature's beauty.",
    "Rolan Swiftclaw, Lycanthropic Tracker": "A lycanthropic tracker with the ability to transform into a wolf. They use their keen senses and shapeshifting to navigate the wilderness and protect their pack.",
    "Glimmerstar, Mischievous Pixie": "A mischievous pixie known for playful tricks and magical pranks. Their laughter is contagious, and they spread whimsy wherever they fly.",
    "Gruff Thunderhoof, Troll Bridge Guardian": "A troll bridge guardian with a gruff exterior and a heart of gold. They ensure that travelers safely cross their bridge, even as they enforce the toll.",
    "Aria Dreamweaver, Dream Elf": "A dream elf who weaves dreams for the world's sleepers. Their dreamscapes are both enchanting and profound, offering glimpses into the subconscious.",
    "Bumblefluff, Talking Animal Companion": "A talking animal companion with a keen sense of humor. They accompany adventurers on their quests, providing witty commentary and sage advice.",
    "Zephyr Windwhisper, Air Elemental Guide": "An air elemental guide who can manipulate the winds and create paths through the sky. They are a guardian of travelers and a whisperer of secrets."
};

// Randomization
function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function displayRandomItemInTextbox(array, textbox) {
    textbox.value = getRandomItemFromArray(array);
}

// Example usage:
randomizeGenre.addEventListener('click', () => {
    displayRandomItemInTextbox(genresArray, genre);
});

randomizeSetting.addEventListener('click', () => {
    displayRandomItemInTextbox(settingsArray, setting);
});

randomizeTone.addEventListener('click', () => {
    displayRandomItemInTextbox(tonesArray, tone);
});

randomizeTheme.addEventListener('click', () => {
    displayRandomItemInTextbox(themesArray, theme);
});

randomizeCharacterMotivation.addEventListener('click', () => {
    displayRandomItemInTextbox(characterMotivationsArray, characterMotivation);
});

randomizeMainCharacter.addEventListener('click', function () {
    let characterNames = Object.keys(mainCharactersArray);
    let randomCharacterName = characterNames[Math.floor(Math.random() * characterNames.length)];
    let randomCharacterDescription = mainCharactersArray[randomCharacterName];

    mainCharacter.value = randomCharacterName;
    characterDescription.value = randomCharacterDescription;
})

generateButton.addEventListener("click", function () {

    // Create the formatted output
    let formattedOutput = ""
    formattedOutput += `Generate ${(singleIdeaRadio.checked) ? "a single, detailed writing idea with possible twists and arcs" : (ideaListRadio.checked) ? "a list of multiple writing ideas" : "a complete story synopsis"} based on the criteria below:\n\n`;

    if (genre.value.trim() !== "") formattedOutput += `Genre: ${genre.value}\n`;
    if (setting.value.trim() !== "") formattedOutput += `Setting: ${setting.value}\n`;
    if (tone.value.trim() !== "") formattedOutput += `Tone: ${tone.value}\n`;
    if (theme.value.trim() !== "") formattedOutput += `Theme: ${theme.value}\n`;
    if (mainCharacter.value.trim() !== "") formattedOutput += `Main Character: ${mainCharacter.value}\n`;
    if (characterMotivation.value.trim() !== "") formattedOutput += `Character Motivation: ${characterMotivation.value}\n`;
    if (characterDescription.value.trim() !== "") formattedOutput += `Character Description: ${characterDescription.value}\n`;
    if (worldInformation.value.trim() !== "") formattedOutput += `World Information: ${worldInformation.value}\n`;
    if (additionalInformation.value.trim() !== "") formattedOutput += `Additional Information: ${additionalInformation.value}\n`;

    outputTextArea.value = formattedOutput;
});

// Add an event listener to the "Copy" button
copyButton.addEventListener("click", function () {
    const outputTextArea = document.getElementById("output");
    outputTextArea.select();
    outputTextArea.setSelectionRange(0, 99999)
    document.execCommand("copy"); // Copy the selected text to the clipboard
    copyButton.textContent = "Copied!"
    setTimeout(function(){copyButton.textContent = "Copy"}, 2000)
});

clearAllButton.addEventListener("click", function () {
    // Clear the values of all input fields
    genre.value = "";
    setting.value = "";
    tone.value = "";
    theme.value = "";
    mainCharacter.value = "";
    characterMotivation.value = "";
    characterDescription.value = "";
    worldInformation.value = "";
    additionalInformation.value = "";

    // Clear the output text area
    outputTextArea.value = "";
});