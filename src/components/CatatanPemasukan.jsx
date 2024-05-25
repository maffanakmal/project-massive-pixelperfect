import React from 'react';
import DataTable from 'react-data-table-component';
import { columns, data as tableData } from '../assets/dataCatatanKeuangan'; // Renamed to tableData
import { Button } from 'react-bootstrap'
import { 
    Chart as ChartJs,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
)

const customStyles = {
    table: {
        style: {
            border: '1px solid #ccc',
        },
    },
    headRow: {
        style: {
            
        },
    },
    rows: {
        style: {
            
        },
    
    },
    headCells: {
        style: {
            justifyContent: 'center', // Centers the text in the cells
            textAlign: 'center',
            fontSize: '16px',
        },
    },
    cells: {
        style: {
            justifyContent: 'center', // Centers the text in the cells
            textAlign: 'center', // Ensures the text is centered
            fontSize: '16px',
            whiteSpace: 'normal',
        },
    },
};

const CatatanPemasukan = () => {
    const chartData = { // Renamed to chartData
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [{
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to resize without maintaining the aspect ratio
    };

    return (
        <>
            <h4 className='text-center'>Pemasukan Terkini</h4>
            <div className="col-md-6 left-side">
                <div className='row align-items-center p-4 rounded'>
                    <DataTable
                        columns={columns}
                        data={tableData} // Corrected reference to tableData
                        pagination
                        customStyles={customStyles}
                    />
                </div>
            </div>
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-side">
                <div className="chart-info mb-3">
                    <Line
                        data={chartData} // Corrected reference to chartData
                        options={options} // Corrected reference to options
                    />
                </div>
                <div>
                    <Button className=''>Buat Catatan Baru</Button>
                </div>
            </div>
        </>
    );
}

export default CatatanPemasukan;
