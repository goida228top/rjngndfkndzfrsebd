import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'firmware_stick_plus_2',
      name: 'M5 Stick Plus 2 Firmware',
      description: 'Walkie-Talkie & Gemini Assistant',
      icon: '🎛️',
      files: [ 'main.ino.txt', 'Networking.cpp.txt', 'Networking.h.txt', 'Types.h.txt', 'UI.cpp.txt', 'UI.h.txt', 'Attacks.cpp.txt', 'Attacks.h.txt', 'Gesture.cpp.txt', 'Gesture.h.txt', 'Globals.cpp.txt', 'Globals.h.txt', 'InputHandler.cpp.txt', 'InputHandler.h.txt', 'Net_ApiClient.cpp.txt', 'Net_ApiClient.h.txt', 'Net_ConfigPortal.cpp.txt', 'Net_ConfigPortal.h.txt', 'Net_Diagnostics.cpp.txt', 'Net_Diagnostics.h.txt', 'Net_GyroServer.cpp.txt', 'Net_GyroServer.h.txt', 'Net_WiFiManager.cpp.txt', 'Net_WiFiManager.h.txt', 'Recording.cpp.txt', 'Recording.h.txt', 'UI_MenuDefs.h.txt', 'WavHelper.cpp.txt', 'WavHelper.h.txt' ]
    },
    {
      id: 't_dongle_s3',
      name: 'T-Dongle S3 Firmware',
      description: 'Wi-Fi Toolkit & SD Card Manager',
      icon: '📡',
      files: [ 'main.ino.txt', 'Hardware.cpp.txt', 'Hardware.h.txt', 'Networking.cpp.txt', 'Networking.h.txt', 'Types.h.txt', 'UI.cpp.txt', 'UI.h.txt', 'Attacks.cpp.txt', 'Attacks.h.txt' ]
    },
    {
        id: 'server_bot',
        name: 'Python Server Bot',
        description: 'Flask/Telegram backend for M5Stick',
        icon: '🤖',
        files: ['bot.py.txt']
    },
    {
      id: 'firmware_camera',
      name: 'Camera Firmware',
      description: 'Coming Soon',
      icon: '📷',
      files: [],
      disabled: true
    },
  ];

  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.ino.txt')) return '💡';
    if (filename.endsWith('.h.txt')) return '📦';
    if (filename.endsWith('.cpp.txt')) return '⚙️';
    if (filename.endsWith('.py.txt')) return '🐍';
    return '📄';
  };

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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      borderRadius: '6px',
      marginBottom: '1rem',
      transition: 'background-color 0.2s ease',
      cursor: 'pointer',
    },
     listItemDisabled: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      borderRadius: '6px',
      marginBottom: '1rem',
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    itemIcon: {
      fontSize: '1.5rem',
      marginRight: '1rem',
    },
    itemInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    itemName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#d4d4d4',
    },
    itemDescription: {
      color: '#808080',
    },
     backButton: {
        background: 'none',
        border: '1px solid #569cd6',
        color: '#569cd6',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s ease',
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.backgroundColor = '#444';
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.backgroundColor = '#333';
  };
   const handleButtonMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'rgba(86, 156, 214, 0.2)';
  };
  const handleButtonMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  const renderFolderList = () => (
    <>
      <header style={styles.header}>
        <div>
            <h1 style={styles.title}>M5-Nexus Project Hub</h1>
            <h2 style={styles.subtitle}>Select a project to view its files.</h2>
        </div>
      </header>
      <ul style={styles.list}>
        {projects.map((project) => (
          <li 
            key={project.id} 
            style={project.disabled ? styles.listItemDisabled : styles.listItem} 
            onMouseOver={!project.disabled ? handleMouseOver : undefined} 
            onMouseOut={!project.disabled ? handleMouseOut : undefined}
            onClick={() => !project.disabled && setSelectedProject(project.id)}
            aria-disabled={project.disabled}
            role="button"
            tabIndex={project.disabled ? -1 : 0}
          >
            <span style={styles.itemIcon}>{project.icon}</span>
            <div style={styles.itemInfo}>
              <span style={styles.itemName}>{project.name}</span>
              <span style={styles.itemDescription}>{project.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  const renderFileList = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
        <>
            <header style={styles.header}>
                <div>
                    <h1 style={styles.title}>{project.name}</h1>
                    <h2 style={styles.subtitle}>{project.files.length} files</h2>
                </div>
                <button 
                    style={styles.backButton} 
                    onClick={() => setSelectedProject(null)}
                    onMouseOver={handleButtonMouseOver}
                    onMouseOut={handleButtonMouseOut}
                >
                    &larr; Back
                </button>
            </header>
            <ul style={styles.list}>
                {project.files.sort().map((file, index) => (
                <li key={index} style={{...styles.listItem, cursor: 'default'}}>
                    <span style={styles.itemIcon}>{getFileIcon(file)}</span>
                    <div style={styles.itemInfo}>
                        <span style={{...styles.itemName, fontSize: '1rem', fontWeight: 'normal'}}>{file.replace(/.txt$/, '')}</span>
                    </div>
                </li>
                ))}
            </ul>
        </>
    );
  };

  return (
    <div style={styles.container}>
      {selectedProject ? renderFileList() : renderFolderList()}
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