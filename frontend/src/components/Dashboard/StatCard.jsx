function StatCard({ title, value }) {
  return (
    <div className="dashboard-card">
      <h2>{title}</h2>
      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;