

const portfolioItems = [
    {
          name: "The New Normal",
          description: "Current News Website with current events, concerts and covid tracking",
          image: "./news.jpg",
          technologies: ["JavaScript", "HTML5", "CSS3",  "Axios", "Responsive Web Design"],
          live: "https://the-new-normal-informative.netlify.app/",
    },
    {
          name: "Would You Rather",
          description: "A budget tracking progressive web application where users can add, edit, and delete their expenses. Since this is a PWA, users are able to use it on and offline thanks to indexedDB. This PWA can also be installed on the user's mobile device or computer and will act like a native application",
          image: "./wouldyou.jpg",
          technologies: ["Progressive Web App", "Node.js", "Express", "MongoDB Atlas", "IndexedDB", "Mongoose", "Heroku", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
          live: "https://would-you-rather-nine.vercel.app/main",
    },
    {
          name: "My Reads",
          description: "MyWorkout is a fitness tracking application that allows users to create and track daily workouts and see them visualized.",
          image: "./myreads.jpg",
          technologies: ["Progressive Web App", "Node.js", "Express", "MongoDB Atlas", "IndexedDB", "Mongoose", "Heroku", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
          live: "https://my-reads-update.vercel.app/"
    },
    {
          name: "Gap Japan Website",
          description: "An app that hits the Marvel API for any character the user chooses and grabs an abundance of information about the selected character. The app then hits the IMDb API to get data on the movies and comics featuring the character. The character and movie data is displayed on the home page. When a user visits the character's profile page, this app hits Ebay API to find comics featuring the character that are for sale and lists them out along with their prices and descriptions.",
          image: "./gapimg.jpg",
          technologies: ["HTML5", "CSS3", "JavaScript", "Materialize CSS", "Responsive Web Design", "Marvel API", "IMDb API", "ebay API"],
          live: "https://www.gap.co.jp/"
    },
    {
          name: "Emed Digital Healthcare Website",
          description: "An app that allows users to create and save notes. Users can also edit and delete their notes. This app is built with React and uses the Context API to share data between components.",
          image: "./emed.webp",
          technologies: ["React", "Context API", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
          live: "https://www.emed.com/"
    },
    {
          name: "Florda Fine Foods Website",
          description: "This is a quiz developed to help you test your coding skills. It is a timed quiz. For every answer you get incorrect, you lose 5 seconds of time. Your ending score is the amount of time you have remaining at the end of the quiz. The coding quiz gives you the ability to save your highscore, so that you can track your progress as you learn more about development.",
          image: "./florafinefoods.png",
          technologies: ["HTML5", "JavaScript", "CSS3", "Local Storage", "Responsive Web Design"], 
          live: "https://florafoods.com/"
    }
]



export default portfolioItems;
