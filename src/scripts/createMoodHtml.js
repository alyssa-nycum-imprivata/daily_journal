const createMoodHtml = (mood) => {
        return `
        <option value=${mood.id}>${mood.mood}</option>
        `
    }

    export default createMoodHtml;
