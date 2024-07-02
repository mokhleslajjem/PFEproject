import React, { useState, useEffect } from "react";
import axios from 'axios';
import { HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css';

const Sites = () => {
  const [sites, setSites] = useState([]);
  const [error, setError] = useState(null);

  const getToken = async () => {
    try {
      const response = await axios.post('/api/token', {
        username: 'your_username',
        password: 'your_password'
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching token:', error);
      setError('Failed to fetch token');
      return null;
    }
  }

  const getSites = async () => {
    try {
      const token = await getToken();
      if (!token) return;

      const response = await axios.get('http://127.0.0.1:8000/api/site_archeologique/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Response:', response.data);
      setSites(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getSites();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="destination" className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      {sites.map((site, index) => (
        <div key={index} className="secContent grid">
          <div className="imageDiv">
            <img src={site.image} alt={site.nom} />
          </div>
          <div className="cardInfo">
            <h4 className="destTiltle">{site.nom}</h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className='icon' />
              <span className="name">{site.localisation}</span>
            </span>
          </div>
          <div className="desc">
            <p>{site.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Sites;
