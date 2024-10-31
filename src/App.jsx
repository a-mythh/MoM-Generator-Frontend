import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import UploadPage from './components/UploadPage.jsx';
import DownloadPage from './components/DownloadPage.jsx';

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage setJsonData={setJsonData} />} />
        <Route path="/download" element={<DownloadPage jsonData={jsonData} />} />
      </Routes>
    </Router>
  );
}

export default App;