let projects_data = [
    {
        "id": 0,
        "title": "Stat Binge",
        "description": "This is an on-going project that I'm developing with two friends. It is a react frontend with a Flask API backend. The goal is to create a show ranking website, with social features, lots of statistics, and show recommendations. This is all to get more practice with actually working on production code. The main goal of this project is to launch a site and then to maintain the site as well as worry about security and storing user data and all of those extra tasks that are hard to come accross in regular solo projects.",
        "image": "stat-binge-photo.png",
        "vertical": 0,
        "links": [
            {
                "name": "View Designs on Figma",
                "url": "https://www.figma.com/file/EN1xpONEXAEhjioGQZ1uQf/project-ani?node-id=0%3A1&t=spVt4brAQKMfCMVQ-1"
            }
        ],
        "tags": {
            "frameworks": [
                "React",
                "Flask",
                "Figma",
                "API"
            ],
            "languages": [
                "JavaScript",
                "html/css",
                "Python",
                "SQL"
            ],
            "type": [
                "personal",
                "web",
                "design",
                "database"
            ]
        }
    },
    {
        "id": 1,
        "title": "School Planner App Design",
        "description": "This project was inspired by wanting to develop an app that tracks when you do your school work and when is the best time to do specific tasks. This was my attempt at a UI design for the application, working with soft shapes and bright colors to craft a specific feel.",
        "image": "SchoolPlannerImage.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Designs on Figma",
                "url": "https://www.figma.com/file/Kb1RbIq1UCH1F8s9u0tnop/Resolute?node-id=0%3A1&t=etj5fceaDMAV6rsj-1"
            }
        ],
        "tags": {
            "frameworks": [
                "Figma"
            ],
            "languages": [],
            "type": [
                "personal",
                "web",
                "design",
            ]
        }
    },
    {
        "id": 2,
        "title": "Perline Noise Map Generation",
        "description": "For a speaking project I needed to give a speach about a concept and teach it to the class. I have for a long time been interested in perlin noise and its use with video game map generation, specifically in a game like Minecraft. So while researching for this speech I made a Python project that takes a perlin noise png and analyzes the gray levels in each pixel. From there it generates a text file that has different values based on the percentage of gray the pixel was. Then I made a Unity project with C# that would read from the text file, apply those percentages to a total height and generate a world from the height-map. That world is the image to the left.<br><br>It was really cool to see this come together, especially when I had it color the blocks blue, green, or gray based on height. It was a relatively quick project but generated convincing landscapes, which I think is really cool and a big reason why it's so widely used in video games.",
        "image": "perlinNoise.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/PerlinNoise"
            }
        ],
        "tags": {
            "frameworks": [
                "Unity"
            ],
            "languages": [
                "C#",
                "Python"
            ],
            "type": [
                "school",
                "video game"
            ]
        }
    },
    {
        "id": 3,
        "title": "Weather Website",
        "description": "For this project I completed a CSS/html challenge. The goal was to recreate the site as close as we could to the original. I hooked the site up with a weather api and it accurately tells the weather of Cary, NC. This was really good CSS practice especially for grid. Still plenty that could be improved here, the sizing isn't suitable for all devices, especially mobile. But it was a good learning experience.",
        "image": "weather.png",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/weather-app-master"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Weather_Page/weather_page.html"
            }
        ],
        "tags": {
            "frameworks": [
                "API"
            ],
            "languages": [
                "JavaScript",
                "html/css"
            ],
            "type": [
                "personal",
                "web"
            ]
        }
    },
    {
        "id": 4,
        "title": "Code Snippets",
        "description": "Code snippets was another CSS/html challenge that I completed. All the assets were provided to me but everything else was done solo. This was my first try at a landing-page style. It was really fun to complete as the website design itself was very appealing to me. It looks sleek and modern, so it was fun to recreate. Gave really good practice with image placement as well as using float a lot.",
        "image": "code-snippets.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/Snippet%20Template%20Starter%20Files"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Snippet_Page/snippet_page.html"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "JavaScript",
                "html/css"
            ],
            "type": [
                "personal",
                "web"
            ]
        }
    },
    {
        "id": 5,
        "title": "Expense Chart",
        "description": "Yet another CSS/html challenge. This one was perhaps my favorite. I really enjoyed making a chart via css and JS. This was one of my first introductions to data visualization via code and it definetely got me hooked. I want to do lots more data visualization projects in the future.",
        "image": "expenses-chart.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/expenses-chart-component-main"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Expenses_Chart_Page/expenses_chart.html"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "JavaScript",
                "html/css"
            ],
            "type": [
                "personal",
                "web"
            ]
        }
    },
    {
        "id": 6,
        "title": "Developer Portfolio",
        "description": "This was my first CSS/html challenge. It was a pretty basic page but interesting to make. I needed a lot of help and tutorials to get through this project. But once I finished I definetely learned a lot about html and css styling that I've continued to develop since.",
        "image": "developer-portfolio.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/css-practices/tree/master/portfolio-master"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Dev_Portfolio_Page/dev_portfolio.html"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "JavaScript",
                "html/css"
            ],
            "type": [
                "personal",
                "web"
            ]
        }
    },
    {
        "id": 7,
        "title": "Song Grader",
        "description": "This is a vanilla JS project that works with a Flask API, Spotify's API, and sqlite3. Essentially the Flask backend monitors the currently playing song on Spotify. The frontend displays the song name, art, and artist. From there you can rate the song on several metrics which will then be stored in the sqlite3 database. This was one of my first projects to use a database and was my second project to work with Spotify's API.",
        "image": "songgrader.png",
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/Song-Ranker"
            }
        ],
        "tags": {
            "frameworks": [
                "Flask",
                "API"
            ],
            "languages": [
                "JavaScript",
                "html/css",
                "Python",
                "SQL"
            ],
            "type": [
                "personal",
                "web",
                "database"
            ]
        }
    },
    {
        "id": 8,
        "title": "Wordle 64",
        "description": "A few months ago, the hit game Worldle was taking over everywhere. Alternate games started appearing. One of them was Wordle except you had to solve 16 boards at the same time. Each board had 21 attempts. My brother enjoyed this but wanted a bigger challenge. So he asked me to make the same thing except with 64 boards. This is the result of that. It was a fun project to practice some vanilla JS. As far as playability goes... I'm not sure anyone has ever finished a game of Wordle 64, but perhaps you could be the first! Make sure to let me know if you do complete it.",
        "image": "wordle64.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/Wordle64"
            },
            {
                "name": "View Live Project",
                "url": "./Project_Pages/Wordle64_Page/wordle64_page.html"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "JavaScript",
                "html/css"
            ],
            "type": [
                "personal",
                "web",
                "video game"
            ]
        }
    },
    {
        "id": 9,
        "title": "Wordle Solver",
        "description": "Sensing a theme here? Back when Wordle was all the rage I was watching a lot of videos about the most optimal first word to use in Wordle. I'm a big believer that 'soare' is the optimal word, but regardless I thought it would make an interesting challenge to solve a Wordle board. The original idea was to hook the bot up with Selenium and have it solve the real Wordle in browser. But alas I never reached that point. Maybe one day. Essentially the bot creates scores based off where letters can and cannot be placed. From here it narrows down possible choices and makes more guesses. I've achieved on average a 60% success rate. Which is lower than my personal rate... so I would say it's far from a perfect program. But it had some exciting challenges and might be something I go back to.",
        "image": "wordlesolver.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/WordleSolver"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "Python"
            ],
            "type": [
                "personal",                
            ]
        }
    },
    {
        "id": 10,
        "title": "Code Cracker",
        "description": "This was a school project where you needed to create code that would use SHA to encrypt a password. The code then uses several password dictionaries to attempt and crack the code. The time to crack the password is recorded and displayed to the user.",
        "image": "codeCracker.png",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Github",
                "url": "https://github.com/LiamMcBride/CodeCracker"
            }
        ],
        "tags": {
            "frameworks": [],
            "languages": [
                "Python"
            ],
            "type": [
                "school"
            ]
        }
    },
    {
        "id": 11,
        "title": "Brain Dead",
        "description": "This is perhaps my most ambitious project to date. The first thing you ever hear about game development is to never start with your dream game. So of course I started with my dream game! I wanted to remake Black Ops II Zombies, fixing a few things I thought needed fixing. Ultimately I tabled this project. I spent about two years developing it off and on. I ran two seperate play test sessions and learned a lot. Every single asset I made myself with Blender or Unity. It truly was the project that cemented my love of programming. It simply was just too big for my experience level. I got it to a playable state (somewhat) and eventually tabled it soon after, switching over to different parts of developement such as websites and all that jazz.",
        "image": "fanaticalsgif.gif",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/brain-dead-pre-alpha-test-2"
            }
        ],
        "tags": {
            "frameworks": [
                "Unity",
                "Blender"
            ],
            "languages": [
                "C#"
            ],
            "type": [
                "personal",
                "video game"
            ]
        }
    },
    {
        "id": 12,
        "title": "Minecraft Clone",
        "description": "I made this project for a video assignment in my digital media class. I had always wanted to recreate Minecraft in Unity as it's a very popular endeavor to help learn game design skills. This is definetely missing a whole lot of features but I'm honestly proud with what I was able to add in a short period of time. In particular the textures were really fun to make and add to the game, really made it come to life. Feel free to download!",
        "image": "minecraft.png",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/theta-craft"
            }
        ],
        "tags": {
            "frameworks": [
                "Asprite",
                "Unity"
            ],
            "languages": [
                "C#"
            ],
            "type": [
                "school",
                "video game"
            ]
        }
    },
    {
        "id": 13,
        "title": "Lively Spirit",
        "description": "Experience a platformer that doesn't punish you for dying! A fun game where you transfer your spirit from body to body in order to keep it alive, in order to transfer your body you've got to cause some havoc, whether that's smashing into a car, giant spike, or even a plane! Enjoy the fun gameplay and pixel art that will surely make you feel better about your own artistic skill! Created in 48 hours for Ludum Dare 46 with the theme 'Keep it Alive'.",
        "image": "livelyspiritgif.gif",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/lively-spirit"
            }
        ],
        "tags": {
            "frameworks": [
                "Unity",
                "Asprite"
            ],
            "languages": [
                "C#"
            ],
            "type": [
                "personal",
                "video game"
            ]
        }
    },
    {
        "id": 14,
        "title": "Gatsby Game",
        "description": "This was a simple game made using Unity. It's a copy of frogger except you're Myrtle trying not to get hit by Gatsby's car. This was made for an English project. It was a lot of fun to create the pixel assets. And yes the cars don't have any collisions with each other. I like to think that adds to the charm.",
        "image": "gatsbygif.gif",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/gatsby-game"
            }
        ],
        "tags": {
            "frameworks": [
                "Unity",
                "Asprite"
            ],
            "languages": [
                "C#"
            ],
            "type": [
                "personal",
                "video game"
            ]
        }
    },
    {
        "id": 15,
        "title": "Crucible",
        "description": "This was one of the first complete games I ever made. I made it for an English class assignment about the Salem Witch Trials. You can fly around as a witch and attack common-folk. I wouldn't say this is a representation of my current skill. I've come a long way since making this, but it's quite fun to show some of my earlier projects.",
        "image": "crucible.png",
        "vertical": 0,
        "links": [
            {
                "name": "View Project on Itch.io",
                "url": "https://bluelettergames.itch.io/the-crucible"
            }
        ],
        "tags": {
            "frameworks": [
                "Unity"
            ],
            "languages": [
                "C#"
            ],
            "type": [
                "personal",
                "video game"
            ]
        }
    },
    {
        "id": 16,
        "title": "Job Hero",
        "description": "School project for my iOS development class. The task was to build an app in a team of 3, using functionality learned throughout the course. In addition create functionality learned on your own. You must also use the CoreData database and two APIs. Our project uses a company information API as well as a job listing API. With these it creates an app for user to follow job postings and companies, receive updates and news about those companies and postings, create a resume with a modular template, and complete interview prep.",
        "image": "JobHeroLogo.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Designs on Proto.io",
                "url": "https://pr.to/V3A3Y4/"
            }
        ],
        "tags": {
            "frameworks": [
                "Proto.io",
                "SwiftUI",
                "API"
            ],
            "languages": [
                "swift"
            ],
            "type": [
                "school",
                "mobile",
                "design"
            ]
        }
    },
    {
        "id": 17,
        "title": "HCI Project",
        "description": "In my Human Computer Interaction class, my team of 4 students worked on a social technology project for our Human Computer Interaction class. We were tasked with designing a user-friendly and engaging social technology platform. We decided to focus on reducing negative interactions on popular games made by Riot. To do this, we followed the four analysis phases of UX that we learned in class: contextual inquiry, contextual analysis, requirement extraction, and design-informing model construction.",
        "image": "hci-photo.png",
        "vertical": 1,
        "links": [
            {
                "name": "View Full Project Page",
                "url": "./project-detail.html"
            }
        ],
        "tags": {
            "frameworks": [
                "Proto.io",
            ],
            "languages": [
            ],
            "type": [
                "school",
                "design"
            ]
        }
    }
]

//consider adding a status filter as well. This will indicate whether you're still working
// on a project or if it is finished/shelved

let filter_types = []
let filter_languages = []
let filter_frameworks = []
let filters = []
let item_count = 0
let tags_assembled = false
let project_root = null
let current_preview_index = 0
let detail_project = null
// project_root.innerHTML = assmbleProjectsHTML(projects_data)

function imageZoom(imgName, vertical=false){
    console.log(screen.width);
    if(screen.width > 480){
        let zoomBox = document.getElementById("image-zoom")
        zoomBox.innerHTML = `
            <div onclick="imageUnzoom()" style="cursor: pointer; text-align: center; line-height: 25px; width: 50px; height: 25px; background-color: #55FF8F; position: absolute; top: 4px; right: 4px;">Back</div>
            <img style="display: block; ${vertical ? "width: auto; height: 80%;" : "width: 60%; height: auto;"} margin: auto;" src="Assets/${imgName}">
        `
        zoomBox.style.display = "flex"
    }
}
function imageUnzoom(){
    document.getElementById("image-zoom").style.display = "none"
}

function showFilters(){
    let filter_div = document.getElementById("filter-div")
    let show_filter_btn = document.getElementById("show-filter-btn");
    console.log(filter_div.style.display)
    if(filter_div.style.display == "none"){
        filter_div.style.display = "flex"
        show_filter_btn.style.display = "none";
    }
    else{
        filter_div.style.display = "none"
        show_filter_btn.style.display = "block";
    }
}

function loadProjectDetails(){
}

function projectsPageLoad(){
    project_root = document.getElementById("projects_section")
    project_root.innerHTML = assembleProjectsHTML(projects_data)
}

function getLastPreviewIndex(){
    if(current_preview_index + 4 >= projects_data.length  - 1){
        return current_preview_index - projects_data.length - 1
    }
    return current_preview_index + 4
}

function generatePreviews(){
    let htmlString = ""
    let end_preview_index = getLastPreviewIndex(current_preview_index)
    for(let i = current_preview_index; i < end_preview_index; i++){
        let proj = projects_data[i]
        htmlString += `
        <div class="preview-div" onclick="location.href='projects.html#project_${proj["id"]}'">
            <img onclick="imageZoom('${proj["image"]}')" class="img-special project-image" src="Assets/${proj["image"]}">
            <div class="overlay">
                <h1>${proj["title"]}</h1>
            </div>
        </div>
        `
    }

    // projects_data.forEach(proj => {
    //     console.log(proj)
    //     htmlString += `
    //     <div class="preview-div" onclick="location.href='projects.html#project_${proj["id"]}'">
    //         <img class="project-image" src="${proj["image"]}">
    //         <div class="overlay">
    //             <h1>${proj["title"]}</h1>
    //         </div>
    //     </div>
    //     `
    // })
    htmlString += `<div style="display: block; height: 500px">`
    document.getElementById("main").innerHTML += htmlString;
    console.log(htmlString)
}

function assembleFilters(){
    let tHtml = ``
    let sBox = document.getElementById("filter-type")
    filter_types.sort()
    filter_types.forEach(type => {
        tHtml += `
            <option value="${type}">${type}</option>
        `
    })
    sBox.innerHTML += tHtml
    
    tHtml = ``
    sBox = document.getElementById("filter-language")
    filter_languages.sort()
    filter_languages.forEach(type => {
        tHtml += `
            <option value="${type}">${type}</option>
        `
    })
    sBox.innerHTML += tHtml
    
    tHtml = ``
    sBox = document.getElementById("filter-framework")
    filter_frameworks.sort()
    filter_frameworks.forEach(type => {
        tHtml += `
            <option value="${type}">${type}</option>
        `
    })
    sBox.innerHTML += tHtml
}

function sortProjects(){
    let project_root = document.getElementById("projects_section")
    project_root.innerHTML = ""
    project_root.innerHTML = assembleProjectsHTML(projects_data)
}

function matchesTags(filt, proj){
    if(filt[0] == "all" || proj["tags"]["type"].includes(filt[0])){
        if(filt[1] == "all" || proj["tags"]["languages"].includes(filt[1])){
            if(filt[2] == "all" || proj["tags"]["frameworks"].includes(filt[2])){
                return true
            }
        }   
    }
    return false
}

function assembleProjectsHTML(data){
    var projects = ``
    item_count = 0
    filters = [
        document.getElementById("filter-type").value,
        document.getElementById("filter-language").value,
        document.getElementById("filter-framework").value
    ]
    projects_data.forEach(proj => {
        if(matchesTags(filters, proj)){
            item_count += 1
            projects += makeProjectHTML(proj)
        }
    })
    if(!tags_assembled){
        assembleFilters()
        tags_assembled = true
    }
    document.getElementById("result-count")
        .innerText = `${item_count} Projects`

    return projects
}

function resetFilters(){
    showFilters();
    document.getElementById("filter-type").value = "all"
    document.getElementById("filter-language").value = "all"
    document.getElementById("filter-framework").value = "all"
    sortProjects()
}

function makeProjectHTML(data){
    if(!tags_assembled){
        let types = data["tags"]["type"]

        types.forEach(type => {
            if(!filter_types.includes(type)){
                filter_types.push(type)
            }
        })
        
        let languages = data["tags"]["languages"]

        languages.forEach(type => {
            if(!filter_languages.includes(type)){
                filter_languages.push(type)
            }
        })
        
        let frameworks = data["tags"]["frameworks"]

        frameworks.forEach(type => {
            if(!filter_frameworks.includes(type)){
                filter_frameworks.push(type)
            }
        })
    }

    return `
    <div class="project-entry-div" id="${"project_" + data["id"]}">
        <img onclick="imageZoom('${data["image"]}', ${data["vertical"] == 1})" class="img-special"  src="Assets/${data["image"]}" alt="Website page">
        <div>
            <div style="cursor: pointer" onclick="setDetailProject(${data["id"]})" class="project-entry-header">${data["title"]}</div>
                <p style="font-size: 18px">
                    ${data["description"]}
                </p>
            ${makeLinksHTML(data["links"])}
        </div>
    </div> 
    `
}

function setDetailProject(id){
    // detail_project = projects_data[id]
    location.replace('./project-detail.html');
}

function makeLinksHTML(data){
    var retString = ""

    data.forEach(link => {
        var temp = ""
        if(link["url"].includes("./")){
            temp = `
            <a style="font-size: 18px" href="${link["url"]}">${link["name"]}</a><br>
            `
        }
        else{
            temp = `
            <a style="font-size: 18px" href="${link["url"]}" target="_blank">${link["name"]}</a><br>
            `
            
        }
        retString += temp
    })
    return retString
}