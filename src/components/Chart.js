import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


const boycottData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
    label: "My First dataset",
    label: 'My second set',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45]
    }]
}

export default class BoycottChart extends Component {
    render() {
        return (
        <div className="chart">
            <Line data={boycottData} />
        </div>
        )
    }
}