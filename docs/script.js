let projects_data = [
    {
        "title": "Stat Binge",
        "description": "This is an on-going project that I'm developing with two friends. It is a react frontend with a Flask API backend. The goal is to create a show ranking website, with social features, lots of statistics, and show recommendations. This is all to get more practice with actually working on production code. The main goal of this project is to launch a site and then to maintain the site as well as worry about security and storing user data and all of those extra tasks that are hard to come accross in regular solo projects.",
        "image": "Assets/stat-binge-photo.png",
        "links": []
    },
    {
        "title": "Perline Noise Map Generation",
        "description": "For a speaking project I needed to give a speach about a concept and teach it to the class. I have for a long time been interested in perlin noise and its use with video game map generation, specifically in a game like Minecraft. So while researching for this speech I made a Python project that takes a perlin noise png and analyzes the gray levels in each pixel. From there it generates a text file that has different values based on the percentage of gray the pixel was. Then I made a Unity project with C# that would read from the text file, apply those percentages to a total height and generate a world from the height-map. That world is the image to the left.<br><br>It was really cool to see this come together, especially when I had it color the blocks blue, green, or gray based on height. It was a relatively quick project but generated convincing landscapes, which I think is really cool and a big reason why it's so widely used in video games.",
        "image": "Assets/perlinNoise.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/PerlinNoise"
            }
        ]
    },
    {
        "title": "Weather Website",
        "description": "For this project I completed a CSS/html challenge. The goal was to recreate the site as close as we could to the original. I hooked the site up with a weather api and it accurately tells the weather of Cary, NC. This was really good CSS practice especially for grid. Still plenty that could be improved here, the sizing isn't suitable for all devices, especially mobile. But it was a good learning experience.",
        "image": "Assets/weather.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/weather-app-master"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Weather_Page/weather_page.html"
            }
        ]
    },
    {
        "title": "Code Snippets",
        "description": "Code snippets was another CSS/html challenge that I completed. All the assets were provided to me but everything else was done solo. This was my first try at a landing-page style. It was really fun to complete as the website design itself was very appealing to me. It looks sleek and modern, so it was fun to recreate. Gave really good practice with image placement as well as using float a lot.",
        "image": "Assets/code-snippets.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/Snippet%20Template%20Starter%20Files"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Snippet_Page/snippet_page.html"
            }
        ]
    },
    {
        "title": "Expense Chart",
        "description": "Yet another CSS/html challenge. This one was perhaps my favorite. I really enjoyed making a chart via css and JS. This was one of my first introductions to data visualization via code and it definetely got me hooked. I want to do lots more data visualization projects in the future.",
        "image": "Assets/expenses-chart.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/expenses-chart-component-main"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Expenses_Chart_Page/expenses_chart.html"
            }
        ]
    },
    {
        "title": "Developer Portfolio",
        "description": "This was my first CSS/html challenge. It was a pretty basic page but interesting to make. I needed a lot of help and tutorials to get through this project. But once I finished I definetely learned a lot about html and css styling that I've continued to develop since.",
        "image": "Assets/developer-portfolio.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/portfolio-master"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Dev_Portfolio_Page/dev_portfolio.html"
            }
        ]
    },
    {
        "title": "Song Grader",
        "description": "This is a vanilla JS project that works with a Flask API, Spotify's API, and sqlite3. Essentially the Flask backend monitors the currently playing song on Spotify. The frontend displays the song name, art, and artist. From there you can rate the song on several metrics which will then be stored in the sqlite3 database. This was one of my first projects to use a database and was my second project to work with Spotify's API.",
        "image": "Assets/songgrader.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/Song-Ranker"
            }
        ]
    },
    {
        "title": "Wordle 64",
        "description": "A few months ago, the hit game Worldle was taking over everywhere. Alternate games started appearing. One of them was Wordle except you had to solve 16 boards at the same time. Each board had 21 attempts. My brother enjoyed this but wanted a bigger challenge. So he asked me to make the same thing except with 64 boards. This is the result of that. It was a fun project to practice some vanilla JS. As far as playability goes... I'm not sure anyone has ever finished a game of Wordle 64, but perhaps you could be the first! Make sure to let me know if you do complete it.",
        "image": "Assets/wordle64.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/Wordle64"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Wordle64_Page/wordle64_page.html"
            }
        ]
    },
    {
        "title": "Wordle Solver",
        "description": "Sensing a theme here? Back when Wordle was all the rage I was watching a lot of videos about the most optimal first word to use in Wordle. I'm a big believer that 'soare' is the optimal word, but regardless I thought it would make an interesting challenge to solve a Wordle board. The original idea was to hook the bot up with Selenium and have it solve the real Wordle in browser. But alas I never reached that point. Maybe one day. Essentially the bot creates scores based off where letters can and cannot be placed. From here it narrows down possible choices and makes more guesses. I've achieved on average a 60% success rate. Which is lower than my personal rate... so I would say it's far from a perfect program. But it had some exciting challenges and might be something I go back to.",
        "image": "Assets/wordlesolver.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/WordleSolver"
            }
        ]
    },
    {
        "title": "Code Cracker",
        "description": "This was a school project where you needed to create code that would use SHA to encrypt a password. The code then uses several password dictionaries to attempt and crack the code. The time to crack the password is recorded and displayed to the user.",
        "image": "Assets/codeCracker.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/CodeCracker"
            }
        ]
    },
    {
        "title": "Brain Dead",
        "description": "This is perhaps my most ambitious project to date. The first thing you ever hear about game development is to never start with your dream game. So of course I started with my dream game! I wanted to remake Black Ops II Zombies, fixing a few things I thought needed fixing. Ultimately I tabled this project. I spent about two years developing it off and on. I ran two seperate play test sessions and learned a lot. Every single asset I made myself with Blender or Unity. It truly was the project that cemented my love of programming. It simply was just too big for my experience level. I got it to a playable state (somewhat) and eventually tabled it soon after, switching over to different parts of developement such as websites and all that jazz.",
        "image": "Assets/fanaticalsgif.gif",
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/brain-dead-pre-alpha-test-2"
            }
        ]
    },
    {
        "title": "Minecraft Clone",
        "description": "I made this project for a video assignment in my digital media class. I had always wanted to recreate Minecraft in Unity as it's a very popular endeavor to help learn game design skills. This is definetely missing a whole lot of features but I'm honestly proud with what I was able to add in a short period of time. In particular the textures were really fun to make and add to the game, really made it come to life. Feel free to download!",
        "image": "Assets/minecraft.png",
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/theta-craft"
            }
        ]
    },
    {
        "title": "Lively Spirit",
        "description": "Experience a platformer that doesn't punish you for dying! A fun game where you transfer your spirit from body to body in order to keep it alive, in order to transfer your body you've got to cause some havoc, whether that's smashing into a car, giant spike, or even a plane! Enjoy the fun gameplay and pixel art that will surely make you feel better about your own artistic skill! Created in 48 hours for Ludum Dare 46 with the theme 'Keep it Alive'.",
        "image": "Assets/livelyspiritgif.gif",
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/lively-spirit"
            }
        ]
    },
    {
        "title": "Gatsby Game",
        "description": "This was a simple game made using Unity. It's a copy of frogger except you're Myrtle trying not to get hit by Gatsby's car. This was made for an English project. It was a lot of fun to create the pixel assets. And yes the cars don't have any collisions with each other. I like to think that adds to the charm.",
        "image": "Assets/gatsbygif.gif",
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/gatsby-game"
            }
        ]
    },
    {
        "title": "Crucible",
        "description": "This was one of the first complete games I ever made. I made it for an English class assignment about the Salem Witch Trials. You can fly around as a witch and attack common-folk. I wouldn't say this is a representation of my current skill. I've come a long way since making this, but it's quite fun to show some of my earlier projects.",
        "image": "Assets/crucible.png",
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/the-crucible"
            }
        ]
    }
]

console.log(projects_data)
console.log(assembleProjectsHTML(projects_data))
let project_root = document.getElementById("projects_section")
project_root.innerHTML = assembleProjectsHTML(projects_data)
function assembleProjectsHTML(data){
    var projects = ``
    projects_data.forEach(proj => 
        projects += makeProjectHTML(proj))
    return projects
}

function makeProjectHTML(data){
    return `
    <div class="project-entry-div">
    <img src="${data["image"]}" alt="Website page">
    <div>
      <div class="project-entry-header">${data["title"]}</div>
      <p style="font-size: 18px">
        ${data["description"]}
      </p>
      ${makeLinksHTML(data["links"])}
    </div>
  </div> 
    `
}

function makeLinksHTML(data){
    var retString = ""

    data.forEach(link => {
        console.log(link)
        var temp = `
        <a style="font-size: 18px" href="${link["url"]}" target="_blank">${link["name"]}</a><br>
        `
        retString += temp
    })
    return retString
}