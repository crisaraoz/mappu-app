import React from 'react';
import { motion } from 'framer-motion';

interface DashboardProps {
  locations: { lat: number; lng: number; name: string }[];
  isVisible: boolean;
  toggleVisibility: () => void;
  onLocationClick: (lat: number, lng: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ locations, isVisible, onLocationClick }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: isVisible ? '25%' : '2px', opacity: isVisible ? 1 : 0 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="dashboard"
    >
      {isVisible && (
        <div>
          <h2 style={{ marginLeft: '10px' }}>Recomendamos!</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {locations.map((location, index) => (
              <li key={index} style={{ marginBottom: '10px', marginInlineEnd: '10px', marginLeft: '10px' }}>
                <div
                  onClick={() => onLocationClick(location.lat, location.lng)}
                  style={{
                    padding: '10px',
                    border: '1px solid #be7e7e',
                    borderRadius: '4px',
                    backgroundColor: '#cf5d5d',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <h3 style={{ margin: 0 }}>{location.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Dashboard;
