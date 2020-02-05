import apiManager from "./data";

const addFilterMoodEventListener = () => {
    const radioButtons = document.getElementsByName("mood");

    radioButtons.forEach(button => {
        button.addEventListener("click", event => {
            const mood = event.target.value

            console.log(mood)

            apiManager.getEntries().filter(entry => entry.mood === mood).then(render)
        })
    })

    

}

export default addFilterMoodEventListener;

