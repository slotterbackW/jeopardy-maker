# jeopardy-maker
An online tool for creating jeopardy quiz games.

## Set up
Instructions for how to install dependencies and run the project.

### Frontend
The code for the front end of jeopardy maker is contained within `/src/frontend`. The front end is written in [React](https://react.dev/), and uses [Parcel](https://parceljs.org/docs/) as a build tool. Dependencies are managed via [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

To install dependencies, first navigate to the frontend folder:
```
cd src/frontend
```
and then install dependencies:
```
yarn install
```
Once dependencies have been installed you can run the frontend using the "start" script:
```
yarn run start
```

### Backend
The code for the backend of jeopardy maker is contained within `/src/backend`. The backend is written in [flask](https://flask.palletsprojects.com/en/2.3.x/), and uses [pipenv](https://pypi.org/project/pipenv/) to manage dependencies.

To install dependencies, first you'll need to navigate to the backend folder:
```
cd src/backend
```
Then install dependencies using [pipenv](https://pypi.org/project/pipenv/):
```
pipenv install
```
Once dependencies are installed you'll need to make a copy of both the .env.example file and the .flaskenv.example file. To do so copy and paste each file into the same folder (`/src/backend`) and remove the `.example` extension from the newly created files. You should now have a `.env` and `.flaskenv` file inside `/src/backend`. Once that's complete add your `SECRET_KEY` by typing it after the `=` sign in both your new `.env` and `.flaskenv` file.

After adding your SECRET_KEY you can then run the backend:
```
pipenv run flask run
```

## Database Design
Here is our schema for the database:

![Database schema](./readme_images/database_design.png)

Users can create multiple boards which contain multiple categories and questions.

When playing a game, participants for the game are stored as JSON objects in localstorage. This is so that they'll
persist through refreshes, but there isn't any overhead for storing them in the database.
