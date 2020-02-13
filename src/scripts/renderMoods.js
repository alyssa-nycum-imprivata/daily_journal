import createMoodHtml from './createMoodHtml.js'

const renderMoods = (moods) => {
    const moodContainer = document.querySelector("#Mood");
    moods.forEach(mood => {
        const moodHtml = createMoodHtml(mood);
        moodContainer.innerHTML += moodHtml
    })
}

export default renderMoods;