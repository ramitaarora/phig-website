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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/phig" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/phig/volunteer" element={<VolunteerPage />} />
          <Route path="/phig/donate" element={<DonationPage />} />
          <Route path="/phig/pay" element={<PaymentPage />} />
          <Route path="/phig/about" element={<AboutPage />} />
          <Route path="/phig/resources" element={<ResourcesPage />} />
          <Route path="/phig/resources/websites" element={<WebsiteResources />} />
          <Route path="/phig/news" element={<NewsPage />} />
          <Route path="/phig/news/:articleID" element={<ArticlePage />} />
          <Route path="/phig/volunteer/application" element={<VolunteerApplication />} />
          <Route path="/phig/volunteer/confirmation" element={<ConfirmationPageVolunteer />} />
          <Route path="/phig/about/confirmation" element={<ConfirmationPageContact />} />
          <Route path="/phig/events" element={<EventsPage />} />
          <Route path='/phig/station' element={<WeatherStation />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

