import React, { useState, useEffect } from 'react';
import Navbar from './home';
import Footer from './NavigationBar';

export default function PriceWatcher() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); // Fetch data when currentPage changes

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const { data, totalPages } = await response.json();
      setTableData(data || []); // Ensure that data is initialized as an array
      setTotalPages(totalPages || 1); // Ensure that totalPages is initialized to 1 if not provided
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePagination = (direction) => {
    let nextPage = currentPage;

    if (direction === 'prev' && currentPage > 1) {
      nextPage = currentPage - 1;
    } else if (direction === 'next' && currentPage < totalPages) {
      nextPage = currentPage + 1;
    }

    setCurrentPage(nextPage);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="table-responsive">
          <h1>Price Watchlist: India</h1>
          <p>Find price of different commodities.</p>
          <table className="table table-vcenter">
            <thead>
              <tr>
                <th></th>
                <th>PRODUCT</th>
                <th>WHOLESALE PRICE</th>
                <th>RETAIL PRICE</th>
                <th>WEEKS HIGH</th>
                <th>WEEKS LOW</th>
                <th>TREND</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.imageSrc} alt={item.productName} height={65} width={100} />
                  </td>
                  <td><a href={item.productLink}>{item.productName}</a></td>
                  <td>{item.wholesalePrice}</td>
                  <td>{item.retailPrice}</td>
                  <td>{item.weeksHigh}</td>
                  <td>{item.weeksLow}</td>
                  <td>{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center pt-3">
          <button className="btn btn-outline-primary mx-2" onClick={() => handlePagination('prev')}>Previous</button>
          <button className="btn btn-outline-primary mx-2" onClick={() => handlePagination('next')}>Next</button>
        </div>
      </div>
      <div class="my-2"><h3>Disclosure:</h3><ol><li>This lists are made available on as available basis.</li><li>Do not consider this pricing as selling or buying price.</li><li>Price watcher only helps you to understand the market directions.</li><li>if you want to suggest any changes or want to add any crop here give us call on 9870-424-425 or email us at contact@kryzen.com</li></ol></div>
      <Footer />
    </>
  );
}
