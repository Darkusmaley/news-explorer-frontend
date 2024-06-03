# News Explorer

## Overview

- About the Project
- Features
- Figma Design
- Running the APP and deployment
- Links

## About the project

'News Explorer' is a full-stack application. It offers a service where users can search for news articles from various sources and save them to their profiles.

## Features

### Main feature

- News Explorer is designed to search NewsAPI service after a user inputs a keyword in the searchbar. Then after recieving results, displays them as a list for user viewing. After cards are saved they can be viewed in the saved news page which can only be accessed after logging in.

### Frontend

- Main page : displays cards after a search.

- Saved news page: displays all saved news articles.

### Backend

- Makes call to external server and returns the results in JSON format

- Custom API for user authentication, authorisation, and saving articles

## Figma Design

The Figma design was supplied by TripleTen and used to map out the UI design for this single page application. If you click on the link below, you will see that this design includes detailed views of each component used within the react application. The images and logos used were included in the Figma design. This link also includes detailed information for building the different screen-size applications.

- [Figma](https://www.figma.com/design/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project?node-id=0-1&t=z8j27tKTsxBN0Ut2-0)

## Running the APP and deployment

### NPM start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### NPM run deploy

Updates the frontend build and pushs the changes to the deployed website

## Links

- [Project](https://marcusnewsexplorer.jumpingcrab.com/)

- [Backend](https://github.com/Darkusmaley/news-explorer-backend)

- [APIService](https://newsapi.org/)
