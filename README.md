## Deploy🚀 React app to Github pages

[![Auto Deploy](https://github.com/srivenkat13/digital-journal/actions/workflows/auto-deploy.yml/badge.svg)](https://github.com/srivenkat13/digital-journal/actions/workflows/auto-deploy.yml)

In this guide I have mentioned two ways to deploy a react app  ( made with vite).

- These steps should apply for react app built with create-react-app.
- Wrote with assumption that `gh-pages` dependency is added to project.

#### 1. Deploying manually.
- Add the code below to `package.json`
    ```json
    "scripts": {
        "deploy": "gh-pages -d dist"
  }
  ```
-  In a vite project after you `build` the project, the files are added to `/dist` folder.
    - In case of `CRA` it would be `/build` folder.

- Add the `base` parameter as below in `vite.config.js`
    ```js
     base: "/digital-journal/", 
     // this is page at which site has to be deployed 
     // in case you're deploying it on <username>.github.io this step is not needed
    ```
- After a sucessful build enter `npm run deploy` in console.
- It creates a branch `gh-pages` in repo if not already present.

Now in GitHub Pages section select this branch and it should be ready in few seconds.
<hr>

#### 2. Auto Deploy on each commit to main.

- Firstly, make sure the `/dist` folder is tracked, by default its added to `.gitignore`.
-  Donot forget to specify the `base` in `vite.config.js` file 
- We use github actions for this, in Github got to Actions > New Workflow > Configure a Node.js workflow 
- Alternatively, you can add `<filename>.yml` file in `.github/workflows`

```yml
name: Auto Deploy
on:
  push:
    branches: [ "master" ]
# we are stating that "on"  a event of "push" on "master" branch do this job.
jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
# till this line, its default code, its basically setting up a node server to do this job.

# then we are asking to run these commands on node server, which are straight forward
    - run: npm i
    - run: npm run build --if-present
# this is the Custom action built by githubpages , we can directly use this.
    - name: Deploy 🚀
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: dist # The folder the action should deploy.

```

- Once this Action is present it takes care of everthing else.

----------
Only difference is in firt way, the code is deployed each time we run the command `npm run deploy` , but in second, when a new commit is added to `main` branch.    