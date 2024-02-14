import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import VolunteerPage from './pages/VolunteerPage';
import DonationPage from './pages/DonationPage';
import ResourcesPage from './pages/ResourcesPage';
import WebsiteResources from './pages/WebsiteResources';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/websites" element={<WebsiteResources />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

