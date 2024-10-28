// setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input fieled
window.onload = function() {
    theInput.focus();
};

// adding the task
theAddButton.onclick = function (){

    // if input is empty 
    if (theInput.value === '') {
        console.log("No Value");

    } else{

        let noTasksMsg = document.querySelector(".no-tasks-message");

        // check if span with no tasks message is exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

        //remove no tasks messsage
        noTasksMsg.remove();
    }

    //create main span element 
    let mainSpain = document.createElement("span");

    // create delete button 
    let deleteElement = document.createElement("span");

    // create text to main spain
    let text = document.createTextNode(theInput.value);

    // create text to delete button
    let deleteText = document.createTextNode("Delete");

    // add text to main span 
    mainSpain.appendChild(text);

    // add class to main span
    mainSpain.className = 'task-box';

    //add text delete to delete element
    deleteElement.appendChild(deleteText);

    // add class to delete button
    deleteElement.className = 'delete';

    // add delete button to main span 
    mainSpain.appendChild(deleteElement);

    // add the task to the container
    tasksContainer.appendChild(mainSpain);

    // empty the input 
    theInput.value = '';

    // focus on field
    theInput.focus();
    
    // calculate tasks
    calculateTasks();
}

};

document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delete') {
  
      // Remove Current Task
      e.target.parentNode.remove();
       // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {

        createNoTasks();
    }
  
    }
  
    // Finish Task
    if (e.target.classList.contains('task-box')) {
  
      // Toggle Class 'finished'
      e.target.classList.toggle("finished");

    }

    //calculate tasks
    calculateTasks();
});

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");
  
    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");
  
    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);
  
    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
  
    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
  
  }

  // Function To Calculate Tasks
function calculateTasks() {

  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
    
  
