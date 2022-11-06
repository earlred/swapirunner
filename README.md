## SWAPI Runner
This is a simple script to run the SWAPI API locally.
SWAPI is a free, open source REST API for testing and prototyping. It's a great tool for developers who need some test data to work with. It's also a great tool for designers who need to quickly prototype an API. It's a great tool for devs!
The API has star wars characters, planets, starships, vehicles, species, and films.

### About this project
This project uses SWAPI to get star wars vehicles and to show the movies they appeared in. It uses the SWAPI API to get the data and then uses the data to show the movies the vehicles appeared in.

### Installation
1. Clone the repo
2. Run `npm install` or `yarn install`
3. Run `yarn start`
4. Open your browser and go to `http://localhost:3000`
5. Enjoy!
6. If you want to run the tests, run `yarn test`
7. If you want to run the E2E test, run `yarn cypress:run`

<img src="assets/swapi demo.gif" title="SWAPI demo video" width="400"/>

### Technologies used
- React
- Redux
- Redux Toolkit (Thunk, Slice)
- Cypress E2E
- React testing-library / Jest
- Material UI

### Test Results
#### Unit Tests
<img src="assets/swapi unit test.jpg" title="Unit Test Results" width="300"/>
#### E2E Tests
<img height="100" src="assets/swapi e2e.jpg" title="E2E Test Results"/>
