# ICT Skills 2 Assignment.

Name: Caroline Conway
Youtube: https://youtu.be/oKcxvQz6sCU

## Overview.

The Movie apps purpose is to displays movies and actors in a userfriendly manor which is nicely designed and pulling live data in all the time from the TMDB to keep its info up to date.

e.g.

- Displays List of Actors
- Displays Actors Details
- Other features were in the process of development such as search by Actor Name, Favourited Actor and Similar Movies but were not developed to completion.


## Setup requirements.

[ Briefly state (to a third party) the setup steps necessary to run your app/client locally, e.g. .env and any other config files.]

An API Key authenticates all requests to the API. Please follow these steps to acquire a personal key for development:

Signup for an account here:themoviedb.org/signup
Log in to your account. To get a key, follow this sequence:
Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details

In VS Code, in the project base folder, open the .env file and set REACTAPPTMDB_KEY to your new key value.

REACT_APP_TMDB_KEY=.... your API key value ...
FAST_REFRESH=false

npm install

npm run start

The app should run sucessfully.

## App Design.

### Routing/Navigation.

The set of routes the app supports with the view linked with each route.

e.g.

- "/persons/list" - PersonsHomePage
Displays a list of actors ordered by popularity
- "/persons/:id" - PersonDetailsPage
Upon clicking on a button with this link you will be able to navigate to the actors individual id and page with Biogrpahical Info on it.
- "/persons/favourites"  - FavouritePersonsPage
This route should open up a page with selected favourtie Actors but unfortunatley it wasnt finsihed.
- "/similars/:id" - SimilarMoviesPage
This route should display a list of similar movies but unfrotunatley it doesnt work properly and isnt displaying the movies and their images.


### Views/Pages.

[ For each view in the app, there is a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

PersonsHomePage
> Lists actors from the Popular endpoint. 
![][personList]

PersonDetailsPage
> Display an individual actor by id from the TMDB endpoint. 
![][personDetails]

FavouritePersonsPage
> Allow the user to Heart and save an actor to their favourite actor list.

SimilarMoviesPage
> Read in the ID of the current movie and display more movies in the same type of genres as it. Unfortunatley this page isnt complete.

![][similarMovieslink]

![][similarMoviesPage]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g. 
I developed Storybook UI for the following:
Filter persons Card
Person Card
Person List Header
Person Details

Unfortunatley all but one no longer work due to refactoring them.

![][storybook]

![][sbPersonListHeader]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.

- Discover movies (pagination support)
- Movie details
- etc
- etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.

- /reviews/:id
- /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png

[similarMovieslink]: ./public/similarMoviesLink.png
[similarMoviesPage]: ./public/similarMoviesPage.png
[personList]: ./public/personList.png
[personDetails]: ./public/personDetails.png
[storybook]: ./public/storybook.png
[sbPersonListHeader]: ./public/sbPersonListHeader.png
