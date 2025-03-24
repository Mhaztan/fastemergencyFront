// // src/admin/components/Dashboard.jsx
// import React from 'react';
// import { Typography, Paper, Grid } from '@mui/material';

// function Dashboard() {
//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <Typography variant="h4" gutterBottom>
//                     Dashboard
//                 </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} lg={3}>
//                 <Paper elevation={3} style={{ padding: 16 }}>
//                     <Typography variant="h6">Total Users</Typography>
//                     <Typography variant="subtitle1">1234</Typography>  {/* Replace with dynamic data */}
//                 </Paper>
//             </Grid>
//             <Grid item xs={12} md={6} lg={3}>
//                 <Paper elevation={3} style={{ padding: 16 }}>
//                     <Typography variant="h6">Total Contacts</Typography>
//                     <Typography variant="subtitle1">5678</Typography>  {/* Replace with dynamic data */}
//                 </Paper>
//             </Grid>
//             <Grid item xs={12} md={6} lg={3}>
//                 <Paper elevation={3} style={{ padding: 16 }}>
//                     <Typography variant="h6">Total Blogs</Typography>
//                     <Typography variant="subtitle1">9012</Typography>  {/* Replace with dynamic data */}
//                 </Paper>
//             </Grid>
//             <Grid item xs={12} md={6} lg={3}>
//                 <Paper elevation={3} style={{ padding: 16 }}>
//                     <Typography variant="h6">Affiliate Products</Typography>
//                     <Typography variant="subtitle1">3456</Typography>  {/* Replace with dynamic data */}
//                 </Paper>
//             </Grid>
//             {/* Add more dashboard statistics and charts here */}
//         </Grid>
//     );
// }

// export default Dashboard;

// src/admin/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid, CircularProgress } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getAdminDashboard } from '../../utils/api';  //Adjust the PATH

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAdminDashboard();
                setDashboardData(data);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError('Failed to load dashboard data.');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // Prepare Chart Data
    const chartData = {
        labels: ['Users', 'Contacts', 'Blogs', 'Affiliates'],
        datasets: [
            {
                label: 'Total',
                data: dashboardData ? [
                    dashboardData.userCount,
                    dashboardData.contactCount,
                    dashboardData.blogCount,
                    dashboardData.affiliateProductCount
                ] : [0, 0, 0, 0], // Ensure a default value if dashboardData is null or undefined.
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dashboard Overview',
            },
        },
    };


    if (loading) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}><CircularProgress /></div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>;
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Typography variant="h6">Total Users</Typography>
                    <Typography variant="subtitle1">{dashboardData.userCount}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Typography variant="h6">Total Contacts</Typography>
                    <Typography variant="subtitle1">{dashboardData.contactCount}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Typography variant="h6">Total Blogs</Typography>
                    <Typography variant="subtitle1">{dashboardData.blogCount}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Typography variant="h6">Affiliate Products</Typography>
                    <Typography variant="subtitle1">{dashboardData.affiliateProductCount}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Bar options={chartOptions} data={chartData} />
                </Paper>
            </Grid>
            {/* Add more dashboard statistics and charts here */}
        </Grid>
    );
}

export default Dashboard;