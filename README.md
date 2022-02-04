# Movie App

## Various considerations

### API

- The very first thing I had to do is read the documentation of the API I am supposed to be using.
- I had to familiarize myself with the data I am getting from the API.
- This helped me significantly with the further steps in this initial 'pre-code' work. 

### Pages

- After I familiarized myself with the data I will be getting, I had to determine which pages I am going to need for this app.

- The app is relatively small I decided to go with only two pages: main page (root page) and movie page which will show more detail about the selected movie.

### Styles
- Another decision I had to make is what to do about styling. Whether I should use some kind of UI library or write 'my own' CSS.
- I decided to write my own CSS because I was afraid I might get stuck with some library since it is not my preferred way of styling.
- When it comes to writing CSS in react apps I prefer using CSS modules which have automatic support with React versions 16 and up.

### Vite over create-react-app
- I used Vite as app builder instead of create-react-app. Lately this is my choice due to its speed and lightness.
- A couple of differences come with this choice. React files need to have extension .jsx not js.
- Access to environment variables in a vite app is also different as evident with my use of API_KEY.

### Layout
- On the main page, I used CSS Grid to display movies. It gives me the best/easiest options for responsive layout. Flexbox can do the same thing.

### State Management
- Since the app is fairly small I decided to not use any state management libraries or hooks. I thought Redux would be a bit of an overkill for this kind of app. React's context API is an option but data travels only one level down so I decided not to use it.

### Date
- I used date-fns library to format the date on Movie page. This library is definitely new to me, but for this small purpose it was ok. Previously I used moment.js, but to my knowledge that library is now deprecated so I am trying to move away from it.