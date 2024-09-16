/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonCreateNote.js
 * 
 * This button handles creating a new note object.
 * 
 * note: code generated by ChatGPT has been commented where used.
 */


class ButtonCreateNote {
    constructor(noteManager) {
        this.button = document.getElementById("createNote");
        this.noteManager = noteManager;
        this.button.addEventListener('click', () => this.createNote());
    }
    createNote() {
        this.noteManager.createNote();
    }

}