function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }
  
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  function handleTaskCompletion(btn) {
    alert("Board Update Successfully");
  
    const taskNumElem = document.getElementById("task-number");
    let taskCount = parseInt(taskNumElem.innerText, 10);
    if (taskCount > 0) {
      taskCount--;
      taskNumElem.innerText = taskCount < 10 ? "0" + taskCount : taskCount;
    }
  
    const devNumElem = document.getElementById("dev-number");
    let devCount = parseInt(devNumElem.innerText, 10);
    devCount++;
    devNumElem.innerText = devCount;
  
    // Get the task title from the card.
    // Assumes the task title is in the first h3 element of the card container.
    const card = btn.closest(".bg-blue-50.rounded-lg.p-4");
    const taskTitleElem = card.querySelector("h3");
    const taskTitle = taskTitleElem ? taskTitleElem.innerText : "Unknown Task";
  
    // Log activity in the Activity Log section
    const activityLog = document.getElementById("activityLog");
    const p = document.createElement("p");
    p.className = "text-sm text-gray-600 mb-4";
    p.innerText = `You have Completed The Task "${taskTitle}" at ${getCurrentTime()}`;
    activityLog.appendChild(p);
  
    // Disable the button after completion
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
  }
  
  // Add event listeners for all Completed buttons
  const completeButtons = document.querySelectorAll(".complete-btn");
  completeButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      // Prevent double-clicking on an already disabled button.
      if (!btn.disabled) {
        handleTaskCompletion(btn);
      }
    });
  });
  
  // Event listener for Clear History button
  document
    .getElementById("clear-history-btn")
    .addEventListener("click", function () {
      const activityLog = document.getElementById("activityLog");
      activityLog.innerHTML = "";
    });
  
  document.getElementById("theme").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });


  function updateDateTime() {
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("date");
  
    const now = new Date();
    const options = {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
  
    const formattedDate = now.toLocaleDateString("en-US", options);
    const [weekday, month, day, year] = formattedDate.split(" ");
  
    dayElement.innerText = `${weekday}`;
    dateElement.innerText = `${month} ${day} ${year}`;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();