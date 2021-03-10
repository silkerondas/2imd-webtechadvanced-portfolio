class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
      // HINT🤩 this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
  
      return newNote;
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      console.log("new note")
      let note = document.querySelector("#taskList").appendChild(this.element);
      note.innerHTML = this.title;
    }
  
    saveToStorage(note) {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      note = localStorage.getItem("notes");
      note = JSON.parse(note);
      note.push(this.title);
      localStorage.setItem("notes", JSON.stringify(note));
      console.log(note);
    }
  
    remove(note) {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage

      document.querySelector("#taskList").removeChild(this);
      note = localStorage.getItem("notes");
      note = JSON.parse(note);
      let title = this.innerHTML;
      let i = note.indexOf(title);
      note.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(note));

    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
      this.txtTodo = document.querySelector("#taskInput");
      this.txtTodo.addEventListener("keypress",this.createNote.bind(this));

      this.loadNotesFromStorage();
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      // this.txtTodo = ???
      // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage(note) {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      note = localStorage.getItem("notes");
      note = JSON.parse(note);
      
      if (note !== null) {
        //console.log('niet leeg');
        for(let i = 0; i < note.length; i++){
        let noteStorage = new Note(note[i]); 
        noteStorage.add();
        }        
      }
    }
  
    createNote(e) {
         if (e.key === "Enter"){
            e.preventDefault();
            let text = this.txtTodo.value;
            let note = new Note(text)
            note.add();
            this.reset();
            note.saveToStorage();
            console.log(text)
        }

      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
    }
  }
  
  let app = new App();
  