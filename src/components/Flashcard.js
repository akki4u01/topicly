import React, { useState } from 'react';
import clsx from 'clsx';

const Flashcard = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flashcard-container"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
                perspective: '1000px',
                cursor: 'pointer',
                width: '300px',
                height: '200px',
                margin: '20px auto'
            }}
        >
            <div className={clsx('flashcard-inner', { flipped: isFlipped })} style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
                {/* Front */}
                <div className="flashcard-front" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'var(--ifm-color-primary)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    padding: '20px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                }}>
                    {front}
                    <div style={{ position: 'absolute', bottom: '10px', fontSize: '0.8rem', opacity: 0.8 }}>
                        Click to flip
                    </div>
                </div>

                {/* Back */}
                <div className="flashcard-back" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'var(--ifm-card-background-color)',
                    color: 'var(--ifm-color-content)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    transform: 'rotateY(180deg)',
                    border: '2px solid var(--ifm-color-primary)',
                    padding: '20px'
                }}>
                    {back}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
