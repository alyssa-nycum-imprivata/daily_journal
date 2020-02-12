const moodContainer = document.querySelector("#Mood");

const createMoodHtml = (id, mood) => {
    moodContainer.innerHTML += `<option value=${id}>${mood}</option>`
}