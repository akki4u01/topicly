import React from 'react';
import styles from './styles.module.css';

export default function NetworkAnimation() {
    return (
        <div className={styles.networkContainer}>
            <svg viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Defs for gradients/filters */}
                <defs>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Connection Lines */}
                {/* Cloud to Router */}
                <path d="M100,125 L250,125" stroke="url(#line-gradient)" strokeWidth="3" className={styles.pathLine} opacity="0.3" />
                {/* Router to Switch */}
                <path d="M250,125 L400,125" stroke="url(#line-gradient)" strokeWidth="3" className={styles.pathLine} opacity="0.3" />
                {/* Switch to Device */}
                <path d="M400,125 L500,125" stroke="url(#line-gradient)" strokeWidth="3" className={styles.pathLine} opacity="0.3" />

                {/* Devices */}

                {/* Cloud (Internet) */}
                <g transform="translate(50, 100)">
                    <path d="M25,50 a20,20 0 0,1 0,-40 a20,20 0 0,1 40,0 a20,20 0 0,1 0,40 z" fill="#3b82f6" opacity="0.8" />
                    <text x="35" y="65" fill="var(--ifm-color-emphasis-700)" fontSize="12" fontWeight="bold">Internet</text>
                </g>

                {/* Router */}
                <g transform="translate(250, 100)">
                    <circle cx="0" cy="25" r="30" fill="#22c55e" opacity="0.2" />
                    <rect x="-20" y="5" width="40" height="40" rx="5" fill="#22c55e" stroke="white" strokeWidth="2" />
                    {/* Arrows on Router */}
                    <path d="M-10,25 L0,15 L10,25" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M-10,25 L0,35 L10,25" stroke="white" strokeWidth="2" fill="none" />
                    <text x="-15" y="65" fill="var(--ifm-color-emphasis-700)" fontSize="12" fontWeight="bold">Router</text>
                </g>

                {/* Switch */}
                <g transform="translate(400, 100)">
                    <rect x="-25" y="10" width="50" height="30" rx="3" fill="#ec4899" stroke="white" strokeWidth="2" />
                    {/* Arrows on Switch */}
                    <path d="M-15,25 L15,25" stroke="white" strokeWidth="2" />
                    <path d="M-10,25 L-5,20 M-5,25 L-10,30" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M10,25 L5,20 M5,25 L10,30" stroke="white" strokeWidth="2" fill="none" />
                    <text x="-15" y="60" fill="var(--ifm-color-emphasis-700)" fontSize="12" fontWeight="bold">Switch</text>
                </g>

                {/* Moving Packets */}
                {/* Packet 1: Cloud -> Router */}
                <circle r="6" fill="#f43f5e" filter="url(#glow)">
                    <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M100,125 L250,125"
                    />
                </circle>

                {/* Packet 2: Router -> Switch */}
                <circle r="6" fill="#f43f5e" filter="url(#glow)">
                    <animateMotion
                        dur="2s"
                        begin="0.8s"
                        repeatCount="indefinite"
                        path="M250,125 L400,125"
                    />
                </circle>

                {/* Packet 3: Switch -> Device */}
                <circle r="6" fill="#f43f5e" filter="url(#glow)">
                    <animateMotion
                        dur="2s"
                        begin="1.6s"
                        repeatCount="indefinite"
                        path="M400,125 L500,125"
                    />
                </circle>

            </svg>
        </div>
    );
}
