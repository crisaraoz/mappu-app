
import React from 'react';
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

interface MapProps {
  toggleDashboard: () => void;
}

const Map: React.FC<MapProps> = ({ toggleDashboard }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <GoogleMap
          style={{ width: '100%', height: '100%' }}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
        {/* Botón para alternar la visibilidad del Dashboard */}
        <button
          onClick={toggleDashboard}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          Toggle Dashboard
        </button>
      </div>
    </APIProvider>
  );
};

export default Map;
