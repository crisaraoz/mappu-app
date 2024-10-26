import React from 'react';
import { motion } from 'framer-motion';

interface DashboardProps {
  locations: { name: string }[];
  isVisible: boolean;
  toggleVisibility: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ locations, isVisible }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: isVisible ? '25%' : '2px', opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="dashboard"
    >
      {isVisible && (
        <div>
          <h2>Locations</h2>
          <ul>
            {locations.map((location, index) => (
              <li key={index}>{location.name}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Dashboard;
