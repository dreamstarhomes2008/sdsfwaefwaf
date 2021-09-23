
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notes);
  console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let note1 = document.getElementById("notes");
  note1.innerHTML = html;
}
function deleteNote(index) {
  // console.log("i am deleting"+ index)
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

  let searchval = search.value;

  let notetxt = document.getElementsByClassName("cardtext");

  Array.from(notetxt).forEach(function(element) {
   let caedtext = element.getElementsByTagName|("p")[0].innerHTML ;
   if(caedtext.includes(searchval)){
    element.style.display = "block";
}
else{
    element.style.display = "none";

}
  });
});

