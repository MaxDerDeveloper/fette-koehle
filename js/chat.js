var chat_ol = document.getElementById("chat-ol");
var input_form = document.getElementById("chat-form");

input_form.onsubmit = (event) => {
	event.preventDefault();

	var msg = event.target.children[0].value;

	// Prevent empty messages from being sent.
	if (msg === "") { return; }

	appendMessage(document.username, msg);
	event.target.children[0].value = "";
}

function appendMessage(author, message, isBot) {
	var author_p = document.createElement("p");
	if (isBot) {
		author_p.innerHTML = author;
	} else {
		author_p.innerText = author;
	}
	author_p.classList.add("chat-message-author");

	var content_p = document.createElement("p");
	if (isBot) {
		content_p.innerHTML = message;
	} else {
		// Prevents XSS by users.
		content_p.innerText = message;
	}
	content_p.classList.add("chat-message-content")

	var li = document.createElement("li");
	li.classList.add("message-wrapper");

	li.appendChild(author_p);
	li.appendChild(content_p);
	chat_ol.appendChild(li);

	scrollToMessage(li);

	return li;
}

botMessages = {
	insufficient_funds: [
		"Du hast nicht genug Köhle!",
		"Ohne Köhle gibt's nichts zu höle!"
	],

	winning_streak: [
		"Das muss das Finanzamt ja nicht wissen...",
		"Harte Arbeit, karger Lohn. Aber wen interessiert das schon",
		"Heute Fahrrad morgen S-Klasse, bei Fette Köhle klingelt die Kasse!"
	],

	losing_streak: [
		"Geht nicht vor Verzweiflung auf alle Viere, verpfändet lieber eine Niere!",
		"Sei kein Shrek, leg die Kohle auf's Roulette",
		"Wer jetzt gewinnt, verdient später noch mehr als der Peter.",
		"Ich atme ein, ich raste aus."
	],

	no_money_left: [
		"Psst...<br>Wenn die Kohle aus ist, kannst du eine deiner Niere verpfänden, indem du <i>TAB<i> drückst."
	],

	equal_streak: [
		"Harte Arbeit, karger Lohn, wer nicht erhöht ist ein H*********!",
	],

	all_in: [
		"Das Leben erwidert den Einsatz später: Hab Vertrauen in den Peter!",
	],

	above_1000: [
		"Geringverdiener aus dem Weg, hier macht jemand die <i>Fette Köhle<i>",
		"Deine Taschen laufen über vor Geld!"
	],

	bet_during_spin: [
		"Wenn das Rad sich dreht, ist's zum Wetten zu spät :("
	],

	invalid_bet: [
		"So eine unseriöse Wette nehmen wir nicht an."
	],

	no_bet: [
		"Du musst erst 'was setzen, das würden wir sehr schätzen."
	]
}

function chooseRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function sendBotMessage(message) {
	var li = appendMessage(
		"<span style='text-decoration:underline;'>Köhle Bot 🤖</span>",
		message,
		true
	);
	li.classList.add("bot-username");
}

function sendRandomBotMessage(reason) {
	var choices = botMessages[reason];
	sendBotMessage(chooseRandomElement(choices))
}

function scrollToMessage(target_li) {
	var scrollY = 0;

	for (var li of chat_ol.children) {
		if (li == target_li) { break; }

		scrollY += li.offsetHeight;
	}
	chat_ol.scrollTo({
		left:0,
		top:scrollY,
		behavior: "smooth"
	});
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function sendKidneySellingMessage() {
	appendMessage(
		"<span style='position:relative; left:25px; color:#0066ff; line-height:150%;'>Dr. Seriös</span>",
		"<div style='height:128px;'><img src='/img/doctor.jpg' style='float:left; margin-right:15px; border-radius: 64px' height=128 width=128><p>Vielen Dank, " + escapeHtml(document.username) + "!<br>Hier hast du 500 Köhle-Chips für deine Niere.</p></div>",
		true
	);
}


function main() {
	appendMessage("Max", "Wow, was für ein wohl durchdachtes und gut implementiertes Chatsystem!",);
	appendMessage("Oliver", "Ich stimme dir zu! Wer auch immer das programmiert hat, hat Ahnung von seinem Job!",);
	appendMessage("Mika", "Respeeekt 💯",);

	sendBotMessage(`Hallo, ${document.username}!<br>Hab viel Spaß beim Spielen von Fette Köhle! Und sei nicht knausrig bei den Einsätzen!`);
}

// setTimeout(main, 1000);
main();

// function dash () Y= 00 # 
// submit/ roll if max= waiser == pro 



