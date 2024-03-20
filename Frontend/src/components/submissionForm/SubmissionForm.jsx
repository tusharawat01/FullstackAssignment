import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionForm.css'; 
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const SubmissionForm = () => {
  const [username, setUsername] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    codeLanguage: '',
    stdin: '',
    sourceCode: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  //Initializing useNavigate
  const navigate = useNavigate();

  //Checking particular fiels are filed or not
  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!codeLanguage.trim()) {
      errors.codeLanguage = 'Code Language is required';
    }
    if (!stdin.trim()) {
      errors.stdin = 'Standard Input is required';
    }
    if (!sourceCode.trim()) {
      errors.sourceCode = 'Source Code is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if all field are not filed then error is shown
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccessMessage('');
      return;
    }

    //Date for time of submission or timestamp
    const timestamp = new Date().toISOString();

    //if no error then this will execute
    try {
      await axios.post('https://taskbackend-tushar.onrender.com/api/submit', { username, codeLanguage, stdin, sourceCode ,timestamp});
      console.log('Code snippet submitted successfully');
      setUsername('');
      setCodeLanguage('');
      setStdin('');
      setSourceCode('');
      setErrors({});
      setSuccessMessage('Submitted successfully');

      // Navigate to submission list route
      navigate('/submission-list'); 

    } catch (error) {
      console.error('Error submitting code snippet:', error);
      setSuccessMessage('Failed to submit code snippet. Please try again.');
    }
  };

  return (
    <>
    <Button children = 'Database' path = "/submission-list"/>
     <div className="form-container">
      <h2>Submit Code Snippet</h2>
      <form onSubmit={handleSubmit}>
      
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        <input className="input-field" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        
        {errors.codeLanguage && <p style={{ color: 'red' }}>{errors.codeLanguage}</p>}
        <input className="input-field" type="text" placeholder="Code Language" value={codeLanguage} onChange={(e) => setCodeLanguage(e.target.value)} />
        
        {errors.stdin && <p style={{ color: 'red' }}>{errors.stdin}</p>}
        <input className="input-field" type="text" placeholder="Standard Input" value={stdin} onChange={(e) => setStdin(e.target.value)} />
        
        {errors.sourceCode && <p style={{ color: 'red' }}>{errors.sourceCode}</p>}
        <textarea className="input-field" placeholder="Source Code" value={sourceCode} onChange={(e) => setSourceCode(e.target.value)}></textarea>
        
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div></>
   
  );
};

export default SubmissionForm;
