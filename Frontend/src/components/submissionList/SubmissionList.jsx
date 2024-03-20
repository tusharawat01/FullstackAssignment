import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SubmissionList.css';
import Button from '../button/Button';

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('https://taskbackend-tushar.onrender.com/api/submissions');
        setSubmissions(response.data || []);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <>
    <Button children = 'Go Back' path ='/' />
    <div className="list-container">
      <h2>Code Snippets</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Source Code Preview</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(submissions) && submissions.map(submission => (
            <tr key={submission.timestamp}>
              <td>{submission.username}</td>
              <td>{submission.code_language}</td>
              <td>{submission.stdin}</td>
              <td>{submission.source_code_preview}</td>
              <td>{submission.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
    
  );
};

export default SubmissionList;
