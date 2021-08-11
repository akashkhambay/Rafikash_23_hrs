# Rafikash_23_hrs

# Code Challenge LAP 3

## Purpose of the App:

Welcome to the WebApp created by Rafika and Akash. This App is our take on a Github Repo tracker. The Purpose of this App is to track the details of the repositories linked to a particular Username which will be entered by the respective user. This app is linked to the Github Api where we can access the public repositories of users and show the details of these repos.

## Technologies:

- Node
- HTML, CSS and JS
- Github API
- React

## Installation and Usage:

### Installation-

- First clone down this repo.
- Secondly navigate the to the folder in which this repo has been cloned down into and cd into it.
- Open the folder with the text editor of choice (VS Code etc...)
- In the terminal please use `npm install` so you have the necessary dependencies, so the code will run with the intended functionality.

### Usage-

- Now to utilise this website please in the terminal run `npm run dev`.
- After running this check the local host with the port it is hosted on, there you should see the website.
- Now you can use the search form, to search a Github username of your choice.
- This will bring up the information of the public repos that anyone could have access to.

## Challenges:

- Along with minor bugs some of the challenges we had faced were the fact that the we got the information we wanted, but could not find a way to render it onto the homepage.
- At one point the url used for the axios request was wrong and we didn't know why it wasn't working.
- When searching for a username, we get one single repo, not ALL the repos linked to the respective account.
- Map does not work, and we dont know why, when comparing it to repos in which they do work, we cannot see the difference or the bug.
- The desired information related to the user is coming through on devtools but the problem is that we have to hard code each repo, from the array of repo objects, this is the challenge as we can get all the information to render onto the DOM.

## Wins:

- In the first 3 hours we worked well together viewing a shared screen to quickly lay out the foundation.
- Got the API link that we wanted.
- Got the axios GET request to fetch the relevant data for the repos linked to GITHUB username.
- Rafika figuring out our array index issue.
- Got github repo information to render on the page.
- Desired user information is coming to the broswer console, in devtools.
