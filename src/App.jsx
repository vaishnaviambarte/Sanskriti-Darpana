import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import QuizPage from './Pages/Quiz'
import Ques from './Pages/Ques'
import Review from './Pages/Review'
import Login from './Pages/Login'
import Layout from './Layout'
import NewsSection from './Pages/News'
import Unesco from './Pages/Unesco'
import stateFolkDances from './components/state-folkdance'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/ques" element={<Ques />} />
          <Route path="/review" element={<Review />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/unesco" element={<Unesco />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App