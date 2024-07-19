# EduWave

### Setup instruction
1. Clone the Project
```
git clone https://github.com/chintu46306/EduWave-frontend.git
```

2. Move into the directory

```
cd client

```

3. install dependencies

```
npm i

```

4. run the server

```
npm run dev

```


### Setup instructions for tailwind 

[Tailwind official instruction] (https://tailwindcss.com/docs/installation)

1. Install tailwind

```
npm install -D tailwindcss postcss autoprefixer

```

2. create tailwind config file

```
npx tailwindcss init

```
3. Add file extension to tailwind config file in the contents property
```
"./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"

```
4. Add the Tailwind directives at the top of the 'index.css' file
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
5. Add the following details in the plugin property of tailwind config
```
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
  
```

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```

### configure auto import sort eslint

1. Install simple import sort

```
npm i -D eslint-plugin-simple-import-sort

```

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'

```

3. Add simple-import sort pligin in `.eslint.cjs`

```
  plugins: [....,'simple-import-sort']

```
4. To enable auto import sort on file save in vscode 

    - Open 'settings.json'
    - add the following config
```
  "editor.codeActionOnSave":{
    "source.fixAll.eslint": true
  }

```
