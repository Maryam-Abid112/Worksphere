import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import BrowseJobsPage from "./pages/Browsejobspage";
import JobDetailsPage from "./pages/Jobdetailpage";
import SubmitProposalPage from "./pages/Submitproposalpage";
import MyProposalsPage from "./pages/Myproposalspage";
import ActiveProjectsPage from "./pages/Activeprojectspage";
import ProjectWorkspacePage from "./pages/Projectworkspacepage";
import ReviewsPage from "./pages/Reviewspage";
import EarningsPage from "./pages/Earningspage";
import SettingsPage from "./pages/Settingspage";

import Home from "./pages/home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth / Landing */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Freelancer Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/browse" element={<BrowseJobsPage />} />
        <Route path="/job-details" element={<JobDetailsPage />} />
        <Route path="/submit-proposal" element={<SubmitProposalPage />} />
        <Route path="/proposals" element={<MyProposalsPage />} />
        <Route path="/projects" element={<ActiveProjectsPage />} />
        <Route path="/workspace" element={<ProjectWorkspacePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/earnings" element={<EarningsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App