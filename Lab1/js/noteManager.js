/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * note.js
 * 
 * The NoteManager class handles the notes.
 * 
 * note: code generated by ChatGPT has been commented where used.
 */


class NoteManager {
    constructor() {
        this.notes = [];
        this.nextId = 1;
        this.loadNotes(); 
    }

    createNote() {
        const note = new Note(this.nextId++);
        this.notes.push(note);
        this.saveNotes();
        this.renderNotes(); // Re-render all notes to adjust positions
        return note;
    }

    getNotes() {
        return this.notes.map((note) => note.noteToJSON()); 
    }

    saveNotes() {
        console.log("Saving notes to local storage..");
        const notes = this.getNotes();
        localStorage.setItem("notes", JSON.stringify(notes));
        const event = new Event("notesSaved");
        document.dispatchEvent(event);
    }

    loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        let lastNote = null;

        savedNotes.forEach(noteData => {
            const note = new Note(noteData.id, noteData.top, noteData.left);
            note.text = noteData.text; 
            this.notes.push(note);
            document.getElementById("notes-container").appendChild(note.getNoteElement());
            note.updateTextFromElement(); 

            lastNote = note; 
        });

        this.lastNote = lastNote; 
    }
    renderNotes() {
        const notesContainer = document.getElementById("notes-container");
        notesContainer.innerHTML = ''; // Clear current notes
        this.notes.forEach(note => {
            notesContainer.appendChild(note.getNoteElement());
        });
    }

    getLastNote() {
        return this.lastNote;
    }

    updateLastNote(note) {
        this.lastNote = note;
    }

    removeNoteById(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
    }
}