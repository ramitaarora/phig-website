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
import NurseryResource from './pages/NurseryResources';
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
import ContactPage from './pages/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/websites" element={<WebsiteResources />} />
          <Route path="/resources/nursery" element = {<NurseryResource />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:articleID" element={<ArticlePage />} />
          <Route path="/volunteer/application" element={<VolunteerApplication />} />
          <Route path="/volunteer/confirmation" element={<ConfirmationPageVolunteer />} />
          <Route path="/about/confirmation" element={<ConfirmationPageContact />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path='/station' element={<WeatherStation />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/approach' element={<ApproachPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/contact/confirmation' element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

