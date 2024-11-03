import Chart from "https://esm.sh/chart.js/auto";
// Function to generate mock data
function getMockData() {
    return {
        usersPerMonth: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
        salesPerYear: Array.from({ length: 5 }, (_, i) => ({ year: 2018 + i, sales: Math.floor(Math.random() * 5000) }))
    };
}
// Get HTML elements
const userChartCtx = document.getElementById('userChart');
const salesChartCtx = document.getElementById('salesChart');
const refreshButton = document.getElementById('refresh-btn');
// Declare chart instances
let userChart;
let salesChart;
// Initialize charts with initial data
function initCharts() {
    const data = getMockData();
    userChart = new Chart(userChartCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Usuários',
                    data: data.usersPerMonth,
                    borderColor: '#4CAF50',
                    fill: false
                }]
        }
    });
    salesChart = new Chart(salesChartCtx, {
        type: 'bar',
        data: {
            labels: data.salesPerYear.map(item => item.year.toString()),
            datasets: [{
                    label: 'Vendas',
                    data: data.salesPerYear.map(item => item.sales),
                    backgroundColor: '#4CAF50'
                }]
        }
    });
}
// Update charts with new data
function updateCharts() {
    const data = getMockData();
    // Update user chart data
    userChart.data.datasets[0].data = data.usersPerMonth;
    userChart.update();
    // Update sales chart data
    salesChart.data.datasets[0].data = data.salesPerYear.map(item => item.sales);
    salesChart.update();
}
// Add event listener for refresh button
refreshButton.addEventListener('click', updateCharts);
// Initialize charts on page load
initCharts();