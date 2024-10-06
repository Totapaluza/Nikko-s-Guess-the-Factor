const decreaseMAC = [
    "Hypothermia", "Increasing age*", "Pregnancy", "Postpartum (returns to normal in 24-72 hours)",
    "Acute alcohol ingestion or intoxication", "Hypoxia (PaO2 < 38 mmHg", "Hypotension (MAP < 50 mmHg)",
    "Hypercapnea (if > 95 mmHg)", "Metabolic acidosis", "Anemia (Hct < 10%)", "α2 agonists", "Lithium",
    "Lidocaine", "Hyponatremia", "Hypercalcemia", "Hypoosmolality", "Barbiturates", "Opioids",
    "Benzodiazepines", "Ketamine", "Lidocaine", "THC", "Reserpine", "Chronic amphetamines", "Levodopa",
    "Cardiopulmonary bypass", "Neuraxial opioids?"
];

const increaseMAC = [
    "Hyperthermia", "Excess pheomelanin production (red hair)", "Hypernatremia", "MAO inhibitors",
    "Acute amphetamines", "Cocaine", "Ephedrine", "Chronic alcohol abuse WITH Enzyme Induction", "Young age*"
];

const noChange = [
    "Duration of anesthesia?", "Gender", "Metabolic alkalosis", "PaCO2 between 15 and 95 mmHg",
    "PaO2 > 38 mmHg", "Magnesium", "Hyperosmolality", "Chronic alcohol abuse WITHOUT Enzyme  Induction", "Anesthetic metabolism",
    "Blood pressure > 40 mmHg", "Thyroid gland dysfunction", "Hyperkalemia/hypokalemia"
];

let currentTopic = '';
let currentCategory = '';

function generateNewTopic() {
    resetGame();
    const categories = ["DECREASE MAC", "INCREASE MAC", "NO CHANGE"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    if (randomCategory === "DECREASE MAC") {
        currentCategory = "DECREASE MAC";
        currentTopic = decreaseMAC[Math.floor(Math.random() * decreaseMAC.length)];
    } else if (randomCategory === "INCREASE MAC") {
        currentCategory = "INCREASE MAC";
        currentTopic = increaseMAC[Math.floor(Math.random() * increaseMAC.length)];
    } else {
        currentCategory = "NO CHANGE";
        currentTopic = noChange[Math.floor(Math.random() * noChange.length)];
    }

    document.getElementById('topic-box').innerText = currentTopic;
}

function resetGame() {
    document.getElementById('topic-box').classList.remove('correct', 'wrong');
    document.getElementById('decrease-btn').classList.remove('correct', 'wrong');
    document.getElementById('nochange-btn').classList.remove('correct', 'wrong');
    document.getElementById('increase-btn').classList.remove('correct', 'wrong');
}

document.getElementById('decrease-btn').addEventListener('click', () => {
    checkAnswer("DECREASE MAC");
});

document.getElementById('nochange-btn').addEventListener('click', () => {
    checkAnswer("NO CHANGE");
});

document.getElementById('increase-btn').addEventListener('click', () => {
    checkAnswer("INCREASE MAC");
});

function checkAnswer(selectedCategory) {
    if (selectedCategory === currentCategory) {
        document.getElementById('topic-box').classList.add('correct');
        document.getElementById(getButtonId(currentCategory)).classList.add('correct');
        playSound('correct-sound');
    } else {
        document.getElementById('topic-box').classList.add('wrong');
        document.getElementById(getButtonId(currentCategory)).classList.add('correct');
        document.getElementById(getButtonId(selectedCategory)).classList.add('wrong');
        playSound('wrong-sound');
    }
    document.getElementById('generate-btn').style.display = 'inline-block';
}

function getButtonId(category) {
    if (category === "DECREASE MAC") return 'decrease-btn';
    if (category === "NO CHANGE") return 'nochange-btn';
    return 'increase-btn';
}

function playSound(soundId) {
    document.getElementById(soundId).play();
}
