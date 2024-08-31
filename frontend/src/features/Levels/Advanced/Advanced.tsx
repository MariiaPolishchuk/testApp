// Advanced.jsx
import React from 'react';
import { Routes } from 'react-router-dom';
// import AdvancedTopic1 from './AdvancedTopic1';
// import AdvancedTopic2 from './AdvancedTopic2';

const Advanced = () => {
  return (
    <div>
      {/* Ваши ссылки... */}
      <Routes>
        {/* <Route path="/topic1/*" element={<AdvancedTopic1 />} />
        <Route path="/topic2/*" element={<AdvancedTopic2 />} /> */}
      </Routes>
    </div>
  );
};

export default Advanced;