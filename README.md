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
npm install -D tailwindcss

```

2. create tailwind config file

```
npx tailwindcss init

```
3. Add file extension to tailwind config file in the contents property
```
"./src/**/*.{html,js,jsx,ts,tsx}"

```
4. Add the Tailwind directives at the top of the 'index.css' file
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```