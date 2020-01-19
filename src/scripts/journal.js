const journalEntry1 = {
    date: "01/10/20",
    concepts: "HTML, CSS, Flexbox, Git/GitHub, Command Line",
    entry: "This week we worked on the chapters in book one about HTML and CSS. I felt comfortable with all of the concepts and examples talked about in class because it was the same info as in the pre-work. We also learned Flexbox which I struggled a bit to understand. I'm not able to get elements where I want them to go. Finally, we started talking about Git and GitHub and writing commands from the command line to prepare for our first group project next week. I'm not totally understanding the work flow, but I feel like I will after doing it several times next week.",
    mood: "Okay",
 }
  
 const journalEntry2 = {
    date: "01/15/20",
    concepts: "Group Project",
    entry: "For the last three days, we've been working on our first group project, which is building a celebrity tribute webpage. I was in a group with Sofia, Bito, and Chris. The first day was a bit chaotic and we could have done better with communication. We were also struggle a lot with Git and GitHub. The second and third days went more smoothly. I was also able to figure out Flexbox better.",
    mood: "Good"
 }
  
 const journalEntry3 = {
    date: "01/17/20",
    concepts: "Functions and Advanced Objects",
    entry: "Today we covered the functions and objects representings things chapters in book 2. I felt comfortable with all of the concepts and examples in the class lesson because it was the same info as in the pre-work. I completed all the practice exercises in both chapters. I practiced writing functions with for loops and writing methods inside of objects. I found that I sometimes have difficulty reading written directions and understanding what exactly they want me to do in some of the practice exercises.",
    mood: "Okay",
 };
  
 const journalCollection = [];
  
 const pushEntry = function (entry) {
    journalCollection.push(entry);
 };
  
 pushEntry(journalEntry1);
 pushEntry(journalEntry2);
 pushEntry(journalEntry3);
 console.log(journalCollection);
 