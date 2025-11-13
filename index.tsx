import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      margin: 0,
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '600px',
      width: '100%',
      backgroundColor: '#252526',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    },
    header: {
      borderBottom: '1px solid #333',
      paddingBottom: '1rem',
      marginBottom: '1.5rem',
    },
    title: {
      margin: 0,
      fontSize: '2rem',
      color: '#569cd6',
    },
    subtitle: {
      margin: '0.5rem 0 0',
      color: '#808080',
      fontWeight: 'normal',
    },
    folderList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    folderItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      borderRadius: '6px',
      marginBottom: '1rem',
      transition: 'background-color 0.2s ease',
    },
    folderIcon: {
      fontSize: '1.5rem',
      marginRight: '1rem',
    },
    folderInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    folderName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#d4d4d4',
    },
    folderDescription: {
      color: '#808080',
    },
  };

  const folders = [
    {
      name: 'firmware_stick_plus_2',
      description: 'Firmware for M5StickCPlus2 (Walkie-Talkie & Gemini)',
      icon: '🎛️',
    },
    {
      name: 'firmware_camera',
      description: 'Firmware for camera device (Coming Soon)',
      icon: '📷',
    },
  ];

  // A simple hover effect using JS for environments without CSS pseudo-classes
  const handleMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.backgroundColor = '#444';
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.backgroundColor = '#333';
  };


  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>M5-Nexus Project Hub</h1>
        <h2 style={styles.subtitle}>Select a firmware project to view its files.</h2>
      </header>
      <ul style={styles.folderList}>
        {folders.map((folder, index) => (
          <li key={index} style={styles.folderItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span style={styles.folderIcon}>{folder.icon}</span>
            <div style={styles.folderInfo}>
              <span style={styles.folderName}>{folder.name}</span>
              <span style={styles.folderDescription}>{folder.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inject styles for body to ensure the dark theme is applied
document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
document.body.style.backgroundColor = '#1e1e1e';
document.body.style.color = '#d4d4d4';
document.body.style.margin = '0';
document.body.style.padding = '2rem';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.minHeight = '100vh';
document.body.style.boxSizing = 'border-box';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
