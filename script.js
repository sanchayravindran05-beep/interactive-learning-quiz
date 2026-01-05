// 🔗 CHANGE THIS TO YOUR GOOGLE SITES LINK
const GOOGLE_SITES_URL = "https://sites.google.com/view/tcs-sulam-occ11t3/references";


// 📚 QUIZZES — QUESTIONS & ANSWERS EXACTLY FROM PDFs
const quizzes = {
  1: {
    title: "Batu Seremban",
    questions: [
      { q: "What is Batu Seremban played with?", options: ["Five stones or beanbags", "A ball and a bat", "A wooden board"], answer: 0 },
      { q: "How many levels are there in Batu Seremban?", options: ["Three", "Five", "Seven"], answer: 2 },
      { q: "What happens if you miss catching the stone?", options: ["You get another chance", "You are out", "You restart the level"], answer: 1 },
      { q: "As the levels increase, what changes?", options: ["You throw the stone higher", "You collect more stones at once", "You play faster"], answer: 1 },
      { q: "Which tip helps you play better?", options: ["Throw the stone as high as possible", "Watch the stones on the table", "Relax your palm while playing"], answer: 2 }
    ]
  },

  2: {
    title: "Congkak",
    questions: [
      { q: "How many players are needed to play Congkak?", options: ["One", "Two", "Four"], answer: 1 },
      { q: "How many small holes are on each side of a Congkak board?", options: ["Five", "Seven", "Nine"], answer: 1 },
      { q: "How many marbles are placed in each hole at the start?", options: ["Five", "Seven", "Ten"], answer: 1 },
      { q: "When do you get another turn in Congkak?", options: ["When you capture marbles", "When your last marble falls into your own store", "When your opponent misses a move"], answer: 1 },
      { q: "What happens if your last marble lands in an empty hole on your side?", options: ["You lose your turn", "Nothing happens", "You capture the opposite marbles"], answer: 2 }
    ]
  },

  3: {
    title: "Main Guli",
    questions: [
      { q: "What is the main goal of Main Guli?", options: ["To stack marbles", "To knock opponents’ marbles out of the circle", "To count marbles"], answer: 1 },
      { q: "What is the larger striking marble called?", options: ["Guli Biasa", "Batu", "Jago"], answer: 2 },
      { q: "Where do players flick the Jago from?", options: ["Inside the circle", "Outside the circle", "Anywhere on the ground"], answer: 1 },
      { q: "What happens if your Jago stays inside the circle after a shot?", options: ["You get another turn", "You lose your turn", "You win the round"], answer: 1 },
      { q: "Which technique helps improve accuracy in Main Guli?", options: ["Throwing the marble high", "Using the side of your thumb to flick", "Standing far away"], answer: 1 }
    ]
  },

  4: {
    title: "Galah Panjang",
    questions: [
      { q: "What is the main objective for attackers in Galah Panjang?", options: ["To tag defenders", "To cross the field without getting tagged", "To block the lines"], answer: 1 },
      { q: "What are defenders allowed to do during the game?", options: ["Run anywhere on the field", "Stand still in one spot", "Move only along the lines"], answer: 2 },
      { q: "What happens if an attacker is tagged by a defender?", options: ["They score a point", "They are out or switch roles", "The game restarts"], answer: 1 },
      { q: "What do attackers need to do to score a point?", options: ["Tag a defender", "Reach the final zone safely", "Cross only one line"], answer: 1 },
      { q: "Which action helps attackers avoid defenders?", options: ["Running straight without stopping", "Using fake moves and quick direction changes", "Standing still"], answer: 1 }
    ]
  },

  5: {
    title: "Sabah Uncharted: A Journey Through the Land Below the Wind",
    questions: [
      { q: "According to the opening of the video, on which island is Sabah located?", options: ["Borneo", "Sumatra", "Java", "Luzon"], answer: 0 },
      { q: "Who is the Pesta Kaamatan festival meant to honour?", options: ["Kinoingan", "Huminodun", "The Bobohizan", "Bambaazon (The Rice Spirit)"], answer: 3 },
      { q: "The Unduk Ngadau, a highlight of the festival, is what kind of event?", options: ["A singing contest", "A cooking competition", "A beauty pageant", "A boat race"], answer: 2 },
      { q: "The \"Kuda Pasu\" dance imitates the movements of which animal?", options: ["A snake", "A horse", "A tiger", "A bird"], answer: 1 },
      { q: "What is the \"Liliput\" dance from Beaufort used for?", options: ["To celebrate a wedding", "To cast away evil spirits", "To prepare for war", "To welcome a new baby"], answer: 1 }
    ]
  },

  6: {
    title: "Sarawak: Carved In Woods, Written In Stones",
    questions: [
      { q: "What is the \"Kelirieng,\" a giant carved pole, used for?", options: ["To hold the bones of a chief", "To support the roof of a longhouse", "To catch fish in the river", "To mark a farming boundary"], answer: 0 },
      { q: "The Iban people carve the \"Burong Kenyalang\" to represent which animal?", options: ["A crocodile", "A hornbill", "A tiger", "An eagle"], answer: 1 },
      { q: "What was the original purpose of Fort Margherita?", options: ["To store rice harvests", "To serve as a school", "To guard the Sarawak River", "To be a shopping market"], answer: 2 },
      { q: "What is significant about the Sarawak Museum?", options: ["It is one of the oldest cultural buildings in Borneo", "It is the tallest building in Sarawak", "It was built recently in 2020", "It is made entirely of gold"], answer: 0 },
      { q: "The \"Istana\" serves as the official residence for whom?", options: ["The police chief", "The museum curator", "The high priest", "Sarawak’s Head of State"], answer: 3 }
    ]
  },

  7: {
    title: "The Forest's First Whisper: Unveiling the World of the Orang Asli",
    questions: [
      { q: "According to the video, which group is described as the oldest and smallest of the Orang Asli?", options: ["The Aboriginal Malays", "The Negritos", "The Dayak", "The Senoi"], answer: 1 },
      { q: "The Senoi people are mentioned as being skilled with which hunting tool?", options: ["The fishing net", "The bow and arrow", "The blowpipe", "The spear"], answer: 2 },
      { q: "What natural material is traditional Orang Asli clothing often made from?", options: ["Treated tree bark", "Woven silk", "Cotton", "Animal leather"], answer: 0 },
      { q: "In Orang Asli beliefs, who is called upon to drive away evil spirits during sickness?", options: ["The soul bird", "The hunter", "The medicine man", "The village chief"], answer: 2 },
      { q: "Most traditional Orang Asli musical instruments, like the 'chat-tong,' are made of what?", options: ["Stone", "Clay", "Metal", "Bamboo"], answer: 3 }
    ]
  },

  8: {
    title: "Beyond the Tracks: The Heart and Heritage of Brickfields",
    questions: [
      { q: "Who operates the Annalakshmi Restaurant at the Temple of Fine Arts?", options: ["Government workers", "Professional chefs", "Students", "Volunteers"], answer: 3 },
      { q: "What distinctive statue is found inside the long hall of the Buddhist Vihara?", options: ["A Reclining Buddha", "A Golden Dragon", "A Stone Lion", "A Jade Elephant"], answer: 0 },
      { q: "What unique project does the Tamil Methodist Church run to help support its programs?", options: ["A bakery", "A clothing store", "A small chicken farm", "A printing press"], answer: 2 },
      { q: "In 1973, the YMCA created a special center for which group of people?", options: ["The hearing impaired", "Foreign tourists", "Professional athletes", "University students"], answer: 0 },
      { q: "Besides teaching arts, what other free service does the Temple of Fine Arts provide?", options: ["A medical clinic", "A public swimming pool", "A movie theatre", "A taxi service"], answer: 0 }
    ]
  }
};

// ───────── LOGIC (unchanged) ─────────
const params = new URLSearchParams(window.location.search);
const video = params.get("video") || 1;
const quiz = quizzes[video];

let current = 0;
let score = 0;
let selected = null;

document.getElementById("video-title").innerText = quiz.title;
document.getElementById("total-q").innerText = quiz.questions.length;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const qNum = document.getElementById("q-num");
const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

const endScreen = document.getElementById("end-screen");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");
const retryBtn = document.getElementById("retry-btn");
const exitBtn = document.getElementById("exit-btn");

loadQuestion();

function loadQuestion() {
  selected = null;
  nextBtn.disabled = true;
  questionEl.innerText = quiz.questions[current].q;
  qNum.innerText = current + 1;
  scoreEl.innerText = score;
  progressBar.style.width = `${(current / quiz.questions.length) * 100}%`;
  optionsEl.innerHTML = "";

  quiz.questions[current].options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
      selected = i;
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(div);
  });
}

nextBtn.onclick = () => {
  if (selected === quiz.questions[current].answer) score++;
  current++;
  if (current < quiz.questions.length) loadQuestion();
  else finishQuiz();
};

function finishQuiz() {
  progressBar.style.width = "100%";
  document.querySelector(".score-bar").classList.add("hidden");
  questionEl.classList.add("hidden");
  optionsEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalScore.innerText = `Final Score: ${score}/${quiz.questions.length}`;

  if (score >= 3) {
    endMessage.innerText = "PASS 🎉";
    retryBtn.classList.add("hidden");
  } else {
    endMessage.innerText = "FAIL ❌";
  }
}

retryBtn.onclick = () => location.reload();
exitBtn.onclick = () => window.location.href = GOOGLE_SITES_URL;

