# DBeat webapp

This is a React client rendered application builded for portfolio reasons. It uses `Webpack` and `babel` to compile the diferent flavours of JavaScript into code into browser readable JavaScript.

### .env

Necessary variables

-   `API_URL=API_URL` without the `/` at the end

### Aplication state

This application uses mainly the `useReducer()` hook combined with the `useContext` with flux concepts to mannage the state.

## Useful commands

-   `yarn lint:fix` quick lint fixing.
-   `yarn prettier:fix` quick prettier fixing.
-   `yarn start` start development server.
-   `yarn build` build de code.

### E2E Tests

This project uses `Cucumber` for executing end to end tests, and `Puppeteer` for simulating the browser behavour.

Cucumber allow to create user scenarios in a declarative form without code in the `.feature` files and define programaticaly the steps in the `_steps.js` files. Is important to consider that the steps are unique and global, they can be reused in diferent scenarios.

The `config.js` file have general test related varibles, in case of runing into timout problems try to increase the timeout limit.

The `./test/helpers` directory provide some usefull functions for diferent scenarios.

run tests commands:

```
yarn test:e2e
yarn test:e2e:scenario {relative-route-to-file-feature}:line
```

### Linting

This project uses `ESLint` for static code analysis.
`Prettier` is configured to format the code according to `ESLint` rules.

Below commands help to resolve some conflicts automatically:

```
yarn prettier:fix
yarn lint:fix
```

## Todo

-   implement e2e tests.
-   implement cookie cryptography for token instead of using local storage.
-   test on diferent browsers.
-   finish disable restaurant voted in the week.
-   add route blocking for user without auth.
-   add loader while fetching or posting data.
-   maybe add push notification for the lunch.
-   fix small bugs regarding request/refresh.
-   implement add restaurant
