var namesDataBase = [
    "NetScape 1991",
    "Carpenter",
    "Brut",
    "Miami",
    "Hollywood",
    "Windows",
    "Macintosh",
    "Cyber",
    "Razor",
    "1984",
    "Heat",
    "Summer",
    "Sony",
    "Silverhand",
    "Noir",
    "City",
    "Infiltrator",
    "Mega",
    "Dropzone",
    "Defender",
    "Neon",
    "L.A.",
    "Angel",
    "MadMax",
    "Stereo",
    "Roland",
    "808",
    "Buck",
    "Power",
    "Gloves",
    "Nintendo",
    "Turbo",
    "Nitro",
    "Thunder",
    "FM",
    "Cassette",
    "Night",
    "Stud",
    "Velvet",
    "Future",
    "Techno",
    "DX",
    "Transistor",
    "Cell",
    "Surrender",
    "Prophet",
    "Fairlight",
    "Jupiter",
    "Electro",
    "Venus",
    "Throttle",
    "Ferrarri",
    "Lamborghini",
    "Testarossa",
    "Cruise",
    "Atari",
    "Panther",
    "Viper",
    "Cobra",
    "Cycle",
    "Boulevard",
    "Metropolis",
    "Ninja",
    "Lipstick",
    "2049",
    "Violator",
    "Robotron",
    "Body",
    "Leotard",
    "Rouge",
    "BladeRunner",
    "Eyeshadow",
    "Filter",
    "Arpeggiator",
    "Lowpass",
    "Handheld",
    "2077",
    "VCR",
    "Betamax",
    "LP",
    "Burner",
    "Colecovision",
    "2600",
    "Omnicorp",
    "Madame",
    "Tech",
    "System",
    "Cyberdyne",
    "Bosch",
    "Trevor",
    "Tiffany",
    "Kylie",
    "Asteroid",
    "Polybius",
    "Odyssey",
    "Lazer",
    "Photon",
    "Tyrell",
    "Vinyl",
    "Arnold",
    "Magnum"
];

function start() {
    var div = document.getElementById('box');
    var h1 = document.createElement('h1');
    h1.textContent = generateName();
    div.appendChild(h1);

    document.getElementById('refresh').addEventListener('click', function() {
        div.innerHTML = "";
        h1.innerHTML = "";
        h1.textContent = generateName();
        div.appendChild(h1);
    });
}

window.addEventListener('load', start);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateName() {
    //var nameList = namesDataBase.split(' ');
    var listLength = (namesDataBase.length) - 1;
    var nameLength = getRandomNumber(2, 4);

    var PowerName = [];

    for (var count = 0; count < nameLength; count++) {
        var wordIndex = getRandomNumber(0, listLength);
        PowerName.push(namesDataBase[wordIndex]);
    }

    PowerName = PowerName.join(' ');

    return PowerName;
}
