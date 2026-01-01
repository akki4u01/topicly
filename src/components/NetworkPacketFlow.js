import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const NetworkPacketFlow = () => {
    const [step, setStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);


    const steps = [
        {
            title: "Host1 Creates Packet",
            description: "Host1 encapsulates data into a packet with IP headers (Layer 3) and Ethernet frame (Layer 2)",
            position: "host1",
            srcMAC: "AA:AA:AA:AA:AA:AA",
            dstMAC: "11:11:11:11:11:11",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Host1"
        },
        {
            title: "Switch1 Forwards Frame",
            description: "Switch1 reads destination MAC, checks MAC address table, forwards frame out correct port (Layer 2 only)",
            position: "switch1",
            srcMAC: "AA:AA:AA:AA:AA:AA",
            dstMAC: "11:11:11:11:11:11",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Switch1"
        },
        {
            title: "Router Receives Frame",
            description: "Router decapsulates frame, examines IP packet, consults routing table",
            position: "router-in",
            srcMAC: "AA:AA:AA:AA:AA:AA",
            dstMAC: "11:11:11:11:11:11",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Router"
        },
        {
            title: "Router Re-encapsulates",
            description: "Router changes Layer 2 headers (new source/dest MAC), keeps Layer 3 intact (IPs unchanged)",
            position: "router-out",
            srcMAC: "22:22:22:22:22:22",
            dstMAC: "BB:BB:BB:BB:BB:BB",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Router"
        },
        {
            title: "Switch2 Forwards Frame",
            description: "Switch2 reads new destination MAC, forwards frame to Host2's port",
            position: "switch2",
            srcMAC: "22:22:22:22:22:22",
            dstMAC: "BB:BB:BB:BB:BB:BB",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Switch2"
        },
        {
            title: "Host2 Receives Packet",
            description: "Host2 decapsulates frame, processes IP packet, delivers data to application",
            position: "host2",
            srcMAC: "22:22:22:22:22:22",
            dstMAC: "BB:BB:BB:BB:BB:BB",
            srcIP: "192.168.1.10",
            dstIP: "192.168.2.20",
            highlight: "Host2"
        }
    ];

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setStep(prev => {
                    if (prev >= steps.length - 1) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 2500);
        }
        return () => clearInterval(interval);
    }, [isPlaying, step]);

    const handlePlayPause = () => {
        if (step >= steps.length - 1 && !isPlaying) {
            setStep(0);
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
    };

    const handleReset = () => {
        setStep(0);
        setIsPlaying(false);
    };

    const currentStep = steps[step];

    const getPacketPosition = () => {
        const positions = {
            host1: { left: '8%', top: '50%' },
            switch1: { left: '28%', top: '50%' },
            'router-in': { left: '48%', top: '50%' },
            'router-out': { left: '52%', top: '50%' },
            switch2: { left: '72%', top: '50%' },
            host2: { left: '92%', top: '50%' }
        };
        return positions[currentStep.position];
    };

    const macChanged = step >= 3;

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-y-auto">
            {/* Title */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Network Packet Flow</h1>
                <p className="text-slate-600 dark:text-slate-400">Host1 → Switch1 → Router → Switch2 → Host2</p>
            </div>

            {/* Main Animation Area */}
            <div className="relative w-full max-w-6xl h-64 bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 mb-6 overflow-hidden backdrop-blur-sm transition-colors duration-300">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line x1="8%" y1="50%" x2="28%" y2="50%" className="stroke-slate-400 dark:stroke-slate-600 transition-colors duration-300" strokeWidth="3" />
                    <line x1="28%" y1="50%" x2="48%" y2="50%" className="stroke-slate-400 dark:stroke-slate-600 transition-colors duration-300" strokeWidth="3" />
                    <line x1="52%" y1="50%" x2="72%" y2="50%" className="stroke-slate-400 dark:stroke-slate-600 transition-colors duration-300" strokeWidth="3" />
                    <line x1="72%" y1="50%" x2="92%" y2="50%" className="stroke-slate-400 dark:stroke-slate-600 transition-colors duration-300" strokeWidth="3" />
                </svg>

                {/* Network Devices */}
                <div className="absolute left-[8%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${currentStep.highlight === 'Host1' ? 'scale-125 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'opacity-80'
                        }`}>
                        <img src="/img/device-laptop.png" alt="Host1" className="w-20 h-auto object-contain" />
                        <div className="absolute -bottom-8 text-center bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Host1</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">192.168.1.10</div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-[28%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${currentStep.highlight === 'Switch1' ? 'scale-125 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'opacity-80'
                        }`}>
                        <img src="/img/device-switch.png" alt="Switch1" className="w-20 h-auto object-contain" />
                        <div className="absolute -bottom-8 text-center bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Switch1</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Layer 2</div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${currentStep.highlight === 'Router' ? 'scale-125 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]' : 'opacity-80'
                        }`}>
                        <img src="/img/device-router.png" alt="Router" className="w-24 h-auto object-contain" />
                        <div className="absolute -bottom-8 text-center bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Router</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Layer 3</div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-[72%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${currentStep.highlight === 'Switch2' ? 'scale-125 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'opacity-80'
                        }`}>
                        <img src="/img/device-switch.png" alt="Switch2" className="w-20 h-auto object-contain" />
                        <div className="absolute -bottom-8 text-center bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Switch2</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Layer 2</div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-[92%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${currentStep.highlight === 'Host2' ? 'scale-125 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'opacity-80'
                        }`}>
                        <img src="/img/device-laptop.png" alt="Host2" className="w-20 h-auto object-contain" />
                        <div className="absolute -bottom-8 text-center bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Host2</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">192.168.2.20</div>
                        </div>
                    </div>
                </div>

                {/* Animated Packet */}
                <div
                    className="absolute w-8 h-8 transition-all duration-1000 ease-in-out z-20"
                    style={{
                        left: getPacketPosition().left,
                        top: getPacketPosition().top,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <img
                        src="/img/packet.png"
                        alt="Packet"
                        className="w-full h-full object-contain drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Step Information */}
            <div className="w-full max-w-6xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4 transition-colors duration-300">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold flex-shrink-0 transition-colors duration-300">
                        {step + 1}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{currentStep.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">{currentStep.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Layer 2 Info */}
                    <div className="bg-cyan-50/50 dark:bg-cyan-900/10 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <h4 className="font-bold text-slate-700 dark:text-cyan-200 transition-colors duration-300">Layer 2 (Data Link)</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">Source MAC:</span>
                                <span className="ml-2 font-mono text-slate-800 dark:text-slate-200 transition-colors duration-300">{currentStep.srcMAC}</span>
                            </div>
                            <div>
                                <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">Dest MAC:</span>
                                <span className="ml-2 font-mono text-slate-800 dark:text-slate-200 transition-colors duration-300">{currentStep.dstMAC}</span>
                            </div>
                        </div>
                        {step === 3 && (
                            <div className="mt-3 text-xs text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 rounded p-2 border border-yellow-200 dark:border-yellow-700/50">
                                ⚠️ MAC addresses changed at router!
                            </div>
                        )}
                    </div>

                    {/* Layer 3 Info */}
                    <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-lg p-4 border border-orange-200 dark:border-orange-800 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <h4 className="font-bold text-slate-700 dark:text-orange-200 transition-colors duration-300">Layer 3 (Network)</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">Source IP:</span>
                                <span className="ml-2 font-mono text-slate-800 dark:text-slate-200 transition-colors duration-300">{currentStep.srcIP}</span>
                            </div>
                            <div>
                                <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">Dest IP:</span>
                                <span className="ml-2 font-mono text-slate-800 dark:text-slate-200 transition-colors duration-300">{currentStep.dstIP}</span>
                            </div>
                        </div>
                        <div className="mt-3 text-xs text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded p-2 border border-green-200 dark:border-green-700/50">
                            ✓ IP addresses remain unchanged
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 items-center">
                <button
                    onClick={handlePlayPause}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    {isPlaying ? 'Pause' : step >= steps.length - 1 ? 'Replay' : 'Play'}
                </button>
                <button
                    onClick={handleReset}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <RotateCcw size={20} />
                    Reset
                </button>
                <div className="ml-4 text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    Step {step + 1} of {steps.length}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex gap-6 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                    <span>Layer 2 (Ethernet Frame)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span>Layer 3 (IP Packet)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>Switch (L2)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span>Router (L3)</span>
                </div>
            </div>
        </div >
    );
};

export default NetworkPacketFlow;
