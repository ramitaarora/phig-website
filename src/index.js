import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import VolunteerPage from './pages/VolunteerPage';
import DonationPage from './pages/DonationPage';
import ResourcesPage from './pages/ResourcesPage';
import WebsiteResources from './pages/WebsiteResources';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import PaymentPage from './pages/PaymentPage';
import VolunteerApplication from './pages/VolunteerApplication';
import ConfirmationPageVolunteer from './pages/ConfirmationPageVolunteer';
import ConfirmationPageContact from './pages/ConfirmationPageContact';
import EventsPage from './pages/EventsPage';
import WeatherStation from './pages/WeatherStation';
import ApproachPage from './pages/ApproachPage';
import ProjectsPage from './pages/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/phig-website" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/phig-website/volunteer" element={<VolunteerPage />} />
          <Route path="/phig-website/donate" element={<DonationPage />} />
          <Route path="/phig-website/pay" element={<PaymentPage />} />
          <Route path="/phig-website/about" element={<AboutPage />} />
          <Route path="/phig-website/resources" element={<ResourcesPage />} />
          <Route path="/phig-website/resources/websites" element={<WebsiteResources />} />
          <Route path="/phig-website/news" element={<NewsPage />} />
          <Route path="/phig-website/news/:articleID" element={<ArticlePage />} />
          <Route path="/phig-website/volunteer/application" element={<VolunteerApplication />} />
          <Route path="/phig-website/volunteer/confirmation" element={<ConfirmationPageVolunteer />} />
          <Route path="/phig-website/about/confirmation" element={<ConfirmationPageContact />} />
          <Route path="/phig-website/events" element={<EventsPage />} />
          <Route path='/phig-website/station' element={<WeatherStation />} />
          <Route path='/phig-website/projects' element={<ProjectsPage />} />
          <Route path='/phig-website/approach' element={<ApproachPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

