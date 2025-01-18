import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartsContainer = () => {
  const jobs = useSelector((state) => state.job.jobs);

  // Transform data for the chart
  const formattedData = jobs.reduce((acc, job) => {
    if (!job.createdAt) {
      console.error("Job missing 'createdAt' field", job); // Debugging
      return acc;
    }

    const date = job.createdAt.slice(0, 10); // Extract the date (YYYY-MM-DD)
    const existingDate = acc.find((item) => item.date === date);

    if (existingDate) {
      existingDate.count += 1; // Increment the count for this date
    } else {
      acc.push({ date, count: 1 }); // Add a new entry
    }

    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={formattedData} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis interval={0} tickCount={4} />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartsContainer;
