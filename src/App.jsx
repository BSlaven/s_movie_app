import { BrowserRouter, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

function App() {

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          {/* <Route path="/:id" element={<Movie />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;