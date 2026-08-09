import Navbar from "../components/Navbar";
import "../App.css";
import StatCard from "../components/Dashboard/StatCard";
import RecentApplications from "../components/Dashboard/RecentApplications";
import UpcomingInterviews from "../components/Dashboard/UpcomingInterviews";
import QuickActions from "../components/Dashboard/QuickActions";
function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Welcome Back, Akshaya 👋</h1>

        <p className="dashboard-subtitle">
          Here's your placement progress.
        </p>

       <div className="dashboard-grid">
  <StatCard title="Resume Score" value="85%" />
  <StatCard title="Companies Applied" value="12" />
  <StatCard title="Interviews" value="3" />
  <StatCard title="Notes" value="8" />
</div>
      </div>

      <div className="dashboard-sections">
  <RecentApplications />

  <UpcomingInterviews />

  <QuickActions />
</div>
    </>
  );
}

export default Dashboard;