##Dark theme Toggler to Understand Context API.
git clone and npm start to get started 

1. Colors.js to add themes adding JSX values.
2. Creating a Conext using {createContext} - ThemeContext.js
3. Creating a theme toggler component that uses the default value of context and using it to change the theme
4. Creating the Hero-section and using values from Colors.js to handle styling for themes
5. using usestate to set the default value to light thus initial theme is light theme (in App.js)
6. Wrapping Herosec component in themecontext.Provider so that everything under the provider will be changed.

Context:
1. ThemeContext 

Components :
1. ThemeToggler (uses context from ./Context/ThemeContext)
2. HeroSection (Uses Context and ThemeToggler)

ref links:
https://reactjs.org/docs/context.html
https://www.smashingmagazine.com/2020/01/introduction-react-context-api/
https://www.javatpoint.com/react-hooks#:~:text=Hooks%20are%20the%20new%20feature,does%20not%20work%20inside%20classes.

