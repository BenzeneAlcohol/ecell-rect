import React, {useState} from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from './Sidebar'
import './Intership.css';
import Footer from '../footer/Footer';
import {data} from './data'
import IntShips from './IntShips';
import Pagination from './Pagination'
function Intership() {

    const [currentPage, setCurrentPage] =useState(1);
    const [dataPerPage] = useState(5);
    
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData)

    const paginate = (pageNumber)=> {
        console.log('Clicked');
        setCurrentPage(pageNumber)
    }

    console.log(currentPage);
    console.log(indexOfFirstData);
    return (
        <div>
            <Navbar/>
            <div className="sidebarContainer">
                <Sidebar/>
                <div>
                    <div className="dashboard">
                        <IntShips data={currentData}/>
                        <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} currentPage={currentPage}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Intership
