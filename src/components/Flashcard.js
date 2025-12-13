import React, { useState } from 'react';
import clsx from 'clsx';
// import styles from './Flashcard.module.css'; // Removed non-existent file import

const Flashcard = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Guard clause if no cards are provided
    if (!cards || cards.length === 0) {
        return <div>No flashcards available.</div>;
    }

    const currentCard = cards[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div style={{ margin: '20px auto', maxWidth: '400px', textAlign: 'center' }}>
            {/* Card Container */}
            <div
                className="flashcard-container"
                onClick={handleFlip}
                style={{
                    perspective: '1000px',
                    cursor: 'pointer',
                    width: '100%',
                    height: '250px', // Increased height slightly
                    marginBottom: '1rem',
                    position: 'relative'
                }}
            >
                <div
                    className={clsx('flashcard-inner', { flipped: isFlipped })}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        transition: 'transform 0.6s',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Front */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        backgroundColor: 'var(--ifm-color-primary)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        padding: '20px',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        WebkitBackfaceVisibility: 'hidden', // Safari fix
                    }}>
                        <div>{currentCard.term}</div>
                        <div style={{ position: 'absolute', bottom: '15px', fontSize: '0.8rem', opacity: 0.8 }}>
                            Click to flip
                        </div>
                        <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '0.8rem', opacity: 0.6 }}>
                            {currentIndex + 1} / {cards.length}
                        </div>
                    </div>

                    {/* Back */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        backgroundColor: 'var(--ifm-card-background-color)',
                        color: 'var(--ifm-color-content)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transform: 'rotateY(180deg)',
                        border: '2px solid var(--ifm-color-primary)',
                        padding: '20px',
                        WebkitBackfaceVisibility: 'hidden', // Safari fix
                    }}>
                        <div style={{ fontSize: '1.1rem' }}>{currentCard.definition}</div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '10px' }}>
                <button
                    className="button button--secondary"
                    onClick={handlePrev}
                >
                    &larr; Previous
                </button>
                <button
                    className="button button--secondary"
                    onClick={handleNext}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

export default Flashcard;
