
// document.getElementById('btn-1').addEventListener('click', function(event){
//     event.preventDefault();
//     const devNumber=document.getElementById('dev-number').innerText;
//     const convertedDevNumber=parseFloat(devNumber);
//     const taskNumber=document.getElementById('task-number').innerText;
//     const convertedTaskNumber=parseFloat(taskNumber);
//     alert("Board Update Successfully");
// })


document.getElementById('cashout-box').addEventListener('click', function(event){
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('cashout').style.display = "block";
})








































// const completeButtons = document.querySelectorAll('.Completed');
// // Get the task assigned counter element
// const taskAssignedCounter = document.querySelector('.Task.Assigned + .05');
// // Get the navbar counter element
// const navbarCounter = document.querySelector('[class="23"]');

// // Initialize current counts
// let taskCount = 5; // Starting from 05
// let navbarCount = 23; // Starting from 23

// // Add click event listeners to all complete buttons
// completeButtons.forEach(button => {
//   button.addEventListener('click', function(e) {
//     // Prevent multiple clicks on the same button
//     if (this.disabled) return;
    
//     // Update task counter
//     if (taskCount > 0) {
//       taskCount -= 1;
//       taskAssignedCounter.textContent = String(taskCount).padStart(2, '0');
//     }
    
//     // Update navbar counter
//     navbarCount += 1;
//     navbarCounter.textContent = navbarCount;
    
//     // Disable the clicked button
//     this.disabled = true;
//     this.style.opacity = '0.5';
//     this.style.cursor = 'not-allowed';
    
//     // Prevent event bubbling
//     e.stopPropagation();
//   });
// });


// function setupTaskCompletionHandlers() {
//     // Get elements by their IDs (you'll need to add these IDs to your HTML elements)
//     const taskAssignedCount = document.getElementById('taskAssignedCount');
//     const navbarCount = document.getElementById('navbarCount');
    
//     // Get all completion buttons (assuming they have a class or ID)
//     const completeButtons = document.querySelectorAll('.complete-button');
    
//     // Add click handlers to each button
//     completeButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         // Update task count
//         if (taskAssignedCount) {
//           taskAssignedCount.textContent = '04';
//         }
        
//         // Update navbar count
//         if (navbarCount) {
//           navbarCount.textContent = '24';
//         }
        
//         // Disable the clicked button
//         this.disabled = true;
//         this.style.backgroundColor = '#a29bfe';
//         this.style.cursor = 'not-allowed';
//       });
//     });
//   }
  
//   // Call the setup function when the document is loaded
//   document.addEventListener('DOMContentLoaded', setupTaskCompletionHandlers);