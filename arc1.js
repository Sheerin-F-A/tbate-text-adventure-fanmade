// arc1.js

const story = {
    start: {
        art: "assets/01_void.png",
        text: "The cold throne is gone. The solitary life of King Grey is over. You open your eyes to a blinding light and two giant figures.",
        choices: [
            { text: "Cry out", next: "baby_cry" },
            { text: "Assess the situation", next: "baby_think" }
        ]
    },
    baby_cry: {
        art: "assets/02_nursery.png",
        text: "You open your mouth, but instead of a royal command, a pathetic 'Waaaah!' escapes. The woman smiles warmly.",
        choices: [
            { text: "Listen to them", next: "parents" }
        ]
    },
    baby_think: {
        art: "assets/02_nursery.png",
        text: "You try to move, but your limbs are uncoordinated and weak. You realize with a shock: you are an infant.",
        choices: [
            { text: "Listen to them", next: "parents" }
        ]
    },
    parents: {
        art: "assets/02_nursery.png",
        text: "'He has your eyes, Reynolds,' the woman whispers. You have been reincarnated. You are now Arthur Leywin.",
        choices: [
            { text: "Skip to age 3", next: "library" }
        ]
    },
    library: {
        art: "assets/03_library.png",
        text: "You are three years old. While your mother Alice is distracted, you sneak into your father's library. You find a heavy tome on 'Mana'.",
        choices: [
            { text: "Read the basics", next: "read_basics" },
            { text: "Try to sense mana immediately", next: "sense_mana" }
        ]
    },
    read_basics: {
        art: "assets/04_book.png",
        text: "The book says awakening normally happens in adolescence. Forcing a mana core to form too early could result in crippling injury or death.",
        choices: [
            { text: "I am King Grey. I won't wait.", next: "awaken" },
            { text: "Wait patiently (Boring)", next: "wait_years" }
        ]
    },
    sense_mana: {
        art: "assets/04_book.png",
        text: "Your old world used Ki, but this world relies on ambient mana. You close your eyes and begin to draw the glowing particles into your body.",
        choices: [
            { text: "Condense the core!", next: "awaken" }
        ]
    },
    wait_years: {
        art: "assets/02_nursery.png",
        text: "You decide to wait. Years pass normally. You live a painfully average life. \n\n[ BAD ENDING ]",
        choices: [
            { text: "Try Again", next: "start" },
            { text: "Return to Menu", next: "menu_return" }
        ]
    },
    awaken: {
        art: "assets/05_boom.png",
        text: "You draw the mana into your sternum. The pressure builds, condensing tighter and tighter until—KABOOM! You blow half the house away.",
        choices: [
            { text: "Check your core", next: "success" }
        ]
    },
    success: {
        art: "assets/05_boom.png",
        text: "Your parents rush in, terrified. But you sit amid the rubble, glowing faintly. You have successfully awakened as a mage at age three.",
        choices: [
            { text: "End Arc 1", next: "arc_complete" }
        ]
    },
    arc_complete: {
        art: "assets/01_void.png",
        text: "Congratulations! You have completed The Early Years. Your journey as Arthur Leywin has just begun.",
        choices: [
            { text: "Return to Arc Select", next: "menu_return" }
        ]
    }
};

const storyTextElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');
const artElement = document.getElementById('scene-art');

function renderScene(sceneId) {
    if (sceneId === 'menu_return') {
        window.location.href = "arc_menu.html";
        return;
    }

    const scene = story[sceneId];

    storyTextElement.innerText = scene.text;

    // --- THIS IS THE MAGIC ---
    // It takes the file path from the 'art' key and builds an HTML image tag
    artElement.innerHTML = `<img src="${scene.art}" alt="Scene Visual">`;

    choicesElement.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerText = `> ${choice.text}`;
        button.onclick = () => renderScene(choice.next);
        choicesElement.appendChild(button);
    });
}

renderScene('start');