/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * clock.js
 */ 

class Clock {
    constructor() {
        this.updateClock();

        // CHATGPT: Listen for custom "noteSaved" event
        document.addEventListener("notesSaved", () => {
            console.log("Saving notes to local storage..");
            this.updateClock();
        });
        document.addEventListener("notesRetrieved", () => {
            console.log("Retrieving notes from local storage..");
            this.updateClock();
        })
    }

    getTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    getDate() {
        const now = new Date();
        return now.toLocaleDateString();
    }

    // getDateTime() {
    //     const now = new Date();
    //     return now.toLocaleString();
    // }

    updateClock() {
        const now = new Date();
        document.getElementById('clockDisplay').innerText = now.toLocaleString();
    }

}