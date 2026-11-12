// ---------- 1. Live greeting ----------
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");

nameInput.addEventListener("input", function () {
	const name = nameInput.value;
	if (name === "") {
		greeting.textContent = "Hello, friend!";
	} else {
		greeting.textContent = "Hello, " + name + "!";
	}
	console.log("Name typed:", name);
});

// ---------- 2. Click counter ----------
const clickBtn = document.querySelector("#clickBtn");
const message = document.querySelector("#message");
let clicks = 0;

clickBtn.addEventListener("click", function () {
	clicks = clicks + 1;
	clickBtn.textContent = "Clicks: " + clicks;

	if (clicks >= 5) {
		message.textContent = "You're on fire!";
	} else {
		message.textContent = "Keep going...";
	}
	console.log("Clicks so far:", clicks);
});

// ---------- 3. Task list ----------
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const tasks = []; // an array to store our tasks

function showTasks() {
	taskList.innerHTML = ""; // clear the list
	for (let i = 0; i < tasks.length; i++) {
		const item = document.createElement("li");
		item.textContent = tasks[i].text; // each task is an object
		taskList.appendChild(item);
	}
}

taskForm.addEventListener("submit", function (event) {
	event.preventDefault(); // stop the page reloading
	if (taskInput.value === "") {
		console.log("Empty task, nothing added");
		return;
	}
	tasks.push({ text: taskInput.value });
	taskInput.value = "";
	showTasks();
	console.log("All tasks:", tasks);
});
