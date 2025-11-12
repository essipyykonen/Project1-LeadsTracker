# Project 1: Micro CRM Leads

## Live Deployment
Render Live link: https://project1-leadstracker.onrender.com

## Video link and timestamps
Link on Sharepoint: https://laureauas-my.sharepoint.com/:v:/g/personal/esp00002_laurea_fi/IQB2WwbJbxroQb9oJc8JIiHzAcuFGYKu1E6fGEIVRw8baH8?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=FkBHlG

Timestamps:
00:00 Introduction and Problem
00:40 Features and Architecture
01:20 Live Demo
02:18 Code Highlight
02:42 Reflection and Next Steps

## Run Locally

### Setup Instructions
npm install // Installs all project dependencies defined in the package.json file.
npm start // Executes the "start" script defined in package.json (e.g., node server.js).
Open http://localhost:3000/ // Instructs the user where to access the application in their browser.

## Features
- Create and list leads
- Filter by status and search by name or company
- Update the leads' status

## Windows and macOS Notes
Open VS Code terminal. The commands are the same on both platforms.

## Reflection
(Around ~240 words in total)
For this project, I followed a step-by-step tutorial provided by the teacher to build a Micro CRM Leads Tracker.
The goal for this project was to create a small but complete full stack web application by using Node.js, Express and JavaScript.
The app lets users add new leads, view all created lists in a table view, filter them by their name and/or status and update their progress.
All of the leads’ data is stored in a local JSON file, which acts as a mini database.

By typing out the code and following each step and line carefully, I learned basically how the front-end and back-end work together through API requsts.
I also gained a better undestanding on how to set up a simple Express server, define its routes, handle JSON data and serve static files.
For the front-end part, I practiced working with HTML forms, the fetch API and DOM manipulation to make the app’s interface interactive without having to reload the whole page.

If I were to continue this project and further improve it, I’d probably first thing add a delete feature, so that leads can be removed.
I’d personally probably also want to spend more time on the user interface to make it look more polished and responsive, as I’ve always like the UI parts in coding.
Overall, I gained a better undestanding of the basics of full stack development and how each puzzle piece of the web app connects to each other.

## Self Assesment
Core Functionality (6/6):
The main flow of the app works correctly. I can add new leads, see them appear in the table instantly and update their status.
The back-end saves all data in a local JSON file, which reloads correctly after refreshing the page.

Code Quality and Architecture (2/2):
I followed the tutorial structure with clear seperation between front-end (app.js) and back-end (server.js).
The functions are small and well-named, and I added comments to explain the main parts of the app's code.

UX, Accessibility and Data Handling (4/5):
The app is simple and works well on desktop.
Form validation prevents empty fields, and the data is handled safely.
Responsiveness and maybe even keyboard navigation could be improved.

Documentation (2/3):
This README file should include everything needed (except screenshots):
setup steps, feature, reflections, timestamps and links to the demo video and Render.

Deployment (2/2):
The project is live on Render, and the README links to the live app correctly.

Demo Video (2/2):
I recorded just a little bit over 3 minutes long video walkthrough explaining the problem, features, code highlight and reflection, and also showing how the app works, following the suggested timestamp structure.

So in total 18/20.
