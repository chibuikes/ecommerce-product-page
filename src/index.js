import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from './Store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext.Provider value={
      {
        display:'block',
        para:0,
        value:0,
        va:0,
        bool:false
      }
    }>
 <App />
    </AuthContext.Provider>
   
   
  </React.StrictMode>
);
/*
main header css module
@@ -0,0 +1,38 @@
.header {
  width: 100%;
  height: 5rem;
  background-color: #044599;
  padding: 0 10%;
}

.header nav {
  height: 100%;
}

.header ul {
  height: 100%;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.header li {
  margin: 0 1rem;
  width: 5rem;
}

.header a {
  color: white;
  text-decoration: none;
}

.header a:hover,
.header a:active,
.header a.active {
  color: #95bcf0;
  padding-bottom: 0.25rem;
  border-bottom: 4px solid #95bcf0;
}


SORTING.JS

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
INDEX.CSS
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Noto Sans JP', sans-serif;
}

body {
  margin: 0;
  background-color: #e0e9f5;
}

main {
  margin-top: 7rem;
  text-align: center;
}

h1,
h2,
h3,
p {
  color: #042b5f;
}
*/ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
