import React from 'react';

const Lander = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            textAlign: 'center',
        },
        content: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
        },
        subtitle: {
            fontSize: '1.5rem',
            marginBottom: '2rem',
        },
        buttons: {
            display: 'flex',
            gap: '1rem',
        },
        button: {
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>I am a movie buff ! </h1>
                <p style={styles.subtitle}>View Watchlists!</p>
                <div style={styles.buttons}>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => window.location.href = 'tamta'}
                    >
                        Search For Movies To Watch
                    </button>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => window.location.href = 'bisht'}
                    >
                        Sameer Bisht
                    </button>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => window.location.href = 'tamta'}
                    >
                        Saurav Tamta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Lander;