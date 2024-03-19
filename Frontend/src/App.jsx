// import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmissionForm from './components/submissionForm/SubmissionForm';
import SubmissionList from './components/submissionList/SubmissionList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmissionForm />} />
        <Route path="/submission-list" element={<SubmissionList />} />
      </Routes>
    </Router>
  );
};

export default App;

