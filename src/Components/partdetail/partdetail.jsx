import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './partdetail.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const PartDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { partId } = location.state || {};

  const [part, setPart] = useState(null);

  useEffect(() => {
    if (!partId) return navigate('/');

    const fetchPart = async () => {
      try {
        const res = await api.get(`getPartById.php?part_id=${partId}`);
        setPart(res.data || null);
      } catch (err) {
        console.error('Error fetching part:', err);
        alert('Error fetching part details');
        navigate('/');
      }
    };

    fetchPart();
  }, [partId, navigate]);

  if (!part) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="part-details-container">
        {/* Left: Image */}
        <div className="left-side">
          <img
            src={part.image || '/placeholder-image.jpg'}
            alt={part.name}
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Right: Info */}
        <div className="right-side">
          <h2>{part.name}</h2>
          <p><strong>Car:</strong> {part.make_name || 'N/A'}</p>
          <p><strong>Model:</strong> {part.model_name || 'N/A'}</p>
          <p><strong>Year:</strong> {part.year || 'N/A'}</p>
          <p><strong>Price:</strong> ₹{part.price || 'N/A'}</p>
          <p><strong>Description:</strong> {part.description || 'No description'}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartDetails;
