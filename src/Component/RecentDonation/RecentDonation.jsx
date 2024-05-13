import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RecentDonations = () => {
    // Sample data for demonstration purposes
    const data = [
        {
            name: 'Jan',
            donation: 1000,
        },
        {
            name: 'Feb',
            donation: 1500,
        },
        {
            name: 'Mar',
            donation: 2000,
        },
        {
            name: 'Apr',
            donation: 1800,
        },
        {
            name: 'May',
            donation: 2500,
        },
        {
            name: 'Jun',
            donation: 2200,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="donation" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default RecentDonations;
