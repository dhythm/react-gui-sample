```sh
npm i react react-dom

npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
touch babel.config.json

npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
touch webpack.config.js

npm i -D typescript ts-loader typesync
npx tsc --init

npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-loader
touch .prettierrc
npx eslint --init

npm i -D husky lint-staged concurrently

npm install
```

```sh
mkdir public src
touch public/index.html
touch src/{index,App}.tsx
```
