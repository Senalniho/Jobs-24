import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListings from "./pages/JobListings";
import MyJobs from "./pages/MyJobs";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";
import Jobs from "./pages/Jobs";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/job-listings", element: <JobListings /> },
      { path: "/my-jobs", element: <MyJobs /> },
      { path: "/post-jobs", element: <PostJobs /> },
      { path: "/saved-jobs", element: <SavedJobs /> },
      { path: "/jobs", element: <Jobs /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
