import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Monitor, Server, Globe } from 'lucide-react';

const OSILayersAnimation = () => {
    const [scene, setScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [subStep, setSubStep] = useState(0);

    const scenes = [
        {
            id: 0,
            title: "DHCP: Network Configuration",
            description: "Device joins network and requests configuration",
            duration: 3000,
            substeps: [
                { text: "DHCP Discover", color: "blue" },
                { text: "DHCP Offer", color: "green" },
                { text: "DHCP Request", color: "blue" },
                { text: "DHCP Acknowledge", color: "green" }
            ],
            details: {
                ip: "192.168.1.100",
                subnet: "255.255.255.0",
                gateway: "192.168.1.1",
                dns: "8.8.8.8"
            }
        },
        {
            id: 1,
            title: "User Action: Browser Request",
            description: "User types google.com in browser",
            duration: 2000,
            layer: "Application",
            details: {
                url: "google.com",
                protocol: "HTTPS"
            }
        },
        {
            id: 2,
            title: "Layer 7: Application Layer",
            description: "DNS query created for google.com",
            duration: 2500,
            layer: "Application",
            color: "#ef4444",
            details: {
                protocol: "DNS",
                query: "google.com",
                queryType: "A Record"
            }
        },
        {
            id: 3,
            title: "Layer 4: Transport Layer",
            description: "UDP for DNS (port 53), TCP for HTTPS (port 443)",
            duration: 3000,
            layer: "Transport",
            color: "#f97316",
            substeps: [
                { text: "DNS uses UDP:53", color: "orange" },
                { text: "TCP SYN →", color: "blue" },
                { text: "← SYN-ACK", color: "green" },
                { text: "ACK →", color: "blue" }
            ],
            details: {
                dnsPort: "53 (UDP)",
                httpPort: "443 (TCP)",
                srcPort: "54321"
            }
        },
        {
            id: 4,
            title: "Layer 3: Network Layer",
            description: "IP addressing and routing decisions",
            duration: 2500,
            layer: "Network",
            color: "#eab308",
            details: {
                srcIP: "192.168.1.100",
                dstIP: "8.8.8.8 (DNS)",
                protocol: "IPv4",
                ttl: "64"
            }
        },
        {
            id: 5,
            title: "Layer 2: Data Link Layer",
            description: "ARP resolves MAC address of gateway",
            duration: 2500,
            layer: "Data Link",
            color: "#22c55e",
            substeps: [
                { text: "ARP Request: Who has 192.168.1.1?", color: "blue" },
                { text: "ARP Reply: MAC AA:BB:CC:DD:EE:FF", color: "green" }
            ],
            details: {
                srcMAC: "11:22:33:44:55:66",
                dstMAC: "AA:BB:CC:DD:EE:FF",
                frameType: "Ethernet II"
            }
        },
        {
            id: 6,
            title: "Layer 1: Physical Layer",
            description: "Bits transmitted over physical medium",
            duration: 2500,
            layer: "Physical",
            color: "#8b5cf6",
            details: {
                medium: "802.11 WiFi / Ethernet",
                encoding: "Binary (1s and 0s)",
                signal: "Electrical/Radio waves"
            }
        },
        {
            id: 7,
            title: "DNS Resolution",
            description: "DNS server responds with Google's IP address",
            duration: 2500,
            layer: "Application",
            color: "#ef4444",
            details: {
                query: "google.com",
                response: "142.250.185.46",
                recordType: "A",
                ttl: "300 seconds"
            }
        },
        {
            id: 8,
            title: "NAT Translation",
            description: "Router translates private IP to public IP",
            duration: 2500,
            layer: "Network",
            color: "#eab308",
            substeps: [
                { text: "Private IP → Public IP", color: "blue" },
                { text: "Source Port: 54321 → 61234", color: "orange" }
            ],
            details: {
                beforeNAT: "192.168.1.100:54321",
                afterNAT: "203.0.113.5:61234",
                natType: "PAT (Port Address Translation)"
            }
        },
        {
            id: 9,
            title: "Internet Routing",
            description: "Packet travels through multiple routers",
            duration: 3000,
            layer: "Network",
            color: "#eab308",
            substeps: [
                { text: "Hop 1: ISP Router", color: "blue" },
                { text: "Hop 2: Regional Router", color: "blue" },
                { text: "Hop 3: Backbone Router", color: "blue" },
                { text: "Hop 4: Google Edge Router", color: "green" }
            ],
            details: {
                note: "MAC changes at each hop",
                ipNote: "Source/Dest IP unchanged",
                ttl: "Decrements each hop"
            }
        },
        {
            id: 10,
            title: "Server Processing",
            description: "Google server receives and processes request",
            duration: 2500,
            layer: "Application",
            color: "#ef4444",
            details: {
                server: "Google Web Server",
                processing: "HTTP Request",
                response: "200 OK"
            }
        },
        {
            id: 11,
            title: "Response Journey Back",
            description: "Data travels back through OSI layers",
            duration: 2500,
            substeps: [
                { text: "Server → Client", color: "green" },
                { text: "Reverse NAT applied", color: "orange" },
                { text: "Decapsulation at each layer", color: "blue" }
            ],
            details: {
                direction: "Server → Client",
                natTranslation: "Public IP → Private IP",
                delivery: "Webpage rendered"
            }
        },
        {
            id: 12,
            title: "Success!",
            description: "Webpage successfully loaded in browser",
            duration: 3000,
            layer: "Application",
            color: "#22c55e",
            details: {
                result: "google.com loaded",
                renderTime: "~2 seconds",
                status: "Complete"
            }
        }
    ];

    const osiLayers = [
        { num: 7, name: "Application", color: "#ef4444", protocols: "HTTP, DNS, SMTP" },
        { num: 6, name: "Presentation", color: "#f59e0b", protocols: "SSL/TLS, JPEG" },
        { num: 5, name: "Session", color: "#fbbf24", protocols: "NetBIOS, RPC" },
        { num: 4, name: "Transport", color: "#f97316", protocols: "TCP, UDP" },
        { num: 3, name: "Network", color: "#eab308", protocols: "IP, ICMP, ARP" },
        { num: 2, name: "Data Link", color: "#22c55e", protocols: "Ethernet, WiFi" },
        { num: 1, name: "Physical", color: "#8b5cf6", protocols: "Cables, Radio" }
    ];

    useEffect(() => {
        let interval;
        let subInterval;

        if (isPlaying) {
            const currentScene = scenes[scene];

            if (currentScene.substeps && currentScene.substeps.length > 0) {
                subInterval = setInterval(() => {
                    setSubStep(prev => {
                        if (prev >= currentScene.substeps.length - 1) {
                            return prev;
                        }
                        return prev + 1;
                    });
                }, currentScene.duration / currentScene.substeps.length);
            }

            interval = setTimeout(() => {
                if (scene >= scenes.length - 1) {
                    setIsPlaying(false);
                } else {
                    setScene(prev => prev + 1);
                    setSubStep(0);
                }
            }, currentScene.duration);
        }

        return () => {
            clearTimeout(interval);
            clearInterval(subInterval);
        };
    }, [isPlaying, scene, subStep]);

    const handlePlayPause = () => {
        if (scene >= scenes.length - 1 && !isPlaying) {
            setScene(0);
            setSubStep(0);
        }
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        setScene(0);
        setSubStep(0);
        setIsPlaying(false);
    };

    const currentScene = scenes[scene];
    const activeLayer = osiLayers.find(l => l.name === currentScene.layer);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start p-8 overflow-y-auto">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">OSI Model in Action</h1>
                    <p className="text-slate-600 dark:text-slate-400">Journey of a Web Request: google.com</p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                    {/* Left: OSI Model Stack */}
                    <div className="col-span-1">
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 transition-colors duration-300">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">OSI Layers</h3>
                            <div className="space-y-2">
                                {osiLayers.map((layer) => (
                                    <div
                                        key={layer.num}
                                        className={`p-3 rounded-lg border-2 transition-all duration-500 ${activeLayer?.num === layer.num
                                            ? 'scale-105 shadow-lg'
                                            : 'opacity-50'
                                            }`}
                                        style={{
                                            backgroundColor: activeLayer?.num === layer.num ? layer.color : 'transparent',
                                            borderColor: activeLayer?.num === layer.num ? layer.color : (activeLayer ? '' : '#94a3b8'), // default gray
                                            boxShadow: activeLayer?.num === layer.num ? `0 0 20px ${layer.color}` : 'none'
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className={`font-bold text-sm ${activeLayer?.num === layer.num ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>L{layer.num}: {layer.name}</div>
                                                <div className={`text-xs mt-1 ${activeLayer?.num === layer.num ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'}`}>{layer.protocols}</div>
                                            </div>
                                            <div className={`text-2xl font-bold opacity-50 ${activeLayer?.num === layer.num ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>{layer.num}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Center: Main Animation */}
                    <div className="col-span-2">
                        {/* Scene Title */}
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 mb-4 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div
                                    className="rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                                    style={{ backgroundColor: currentScene.color || '#475569' }}
                                >
                                    {scene + 1}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{currentScene.title}</h2>
                                    <p className="text-slate-600 dark:text-slate-300">{currentScene.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Animation Area */}
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-8 mb-4 h-96 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
                            {/* Scene-specific animations */}
                            {scene === 0 && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="relative">
                                        <Monitor className="w-32 h-32 text-blue-500 dark:text-blue-400" />
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64">
                                            {currentScene.substeps.slice(0, subStep + 1).map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`text-center p-2 rounded mb-2 animate-pulse`}
                                                    style={{ backgroundColor: step.color === 'blue' ? '#3b82f6' : '#22c55e' }}
                                                >
                                                    <span className="text-white text-sm font-bold">{step.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {scene === 1 && (
                                <div className="flex flex-col items-center">
                                    <Monitor className="w-40 h-40 text-blue-500 dark:text-blue-400 mb-6" />
                                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg px-8 py-4 text-2xl text-slate-800 dark:text-white font-mono animate-pulse border border-slate-200 dark:border-slate-600">
                                        google.com
                                    </div>
                                </div>
                            )}

                            {(scene >= 2 && scene <= 6) && (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <div className="text-slate-900 dark:text-white text-lg font-bold mb-4">
                                        {currentScene.layer} Layer
                                    </div>

                                    {/* Packet visualization with layers */}
                                    <div className="relative">
                                        {osiLayers.slice(0, 8 - (activeLayer?.num || 7)).map((layer, idx) => (
                                            <div
                                                key={layer.num}
                                                className="absolute"
                                                style={{
                                                    width: `${200 + idx * 30}px`,
                                                    height: `${150 + idx * 30}px`,
                                                    border: `4px solid ${layer.color}`,
                                                    borderRadius: '12px',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    opacity: layer.num >= (activeLayer?.num || 7) ? 1 : 0.3,
                                                    boxShadow: layer.num === (activeLayer?.num || 7) ? `0 0 30px ${layer.color}` : 'none'
                                                }}
                                            />
                                        ))}
                                        <div className="relative z-10 bg-slate-800 rounded-lg p-6 text-white text-center shadow-lg">
                                            <div className="font-bold text-xl mb-2">DATA</div>
                                            <div className="text-sm text-slate-300">Encapsulated Packet</div>
                                        </div>
                                    </div>

                                    {currentScene.substeps && (
                                        <div className="mt-8 space-y-2">
                                            {currentScene.substeps.slice(0, subStep + 1).map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className="text-center text-slate-700 dark:text-white font-semibold animate-pulse"
                                                >
                                                    {step.text}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {scene === 7 && (
                                <div className="flex items-center justify-between w-full px-12">
                                    <div className="text-center">
                                        <Monitor className="w-24 h-24 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                                        <div className="text-slate-800 dark:text-white font-bold">Client</div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4 animate-bounce">🔍</div>
                                            <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-mono text-lg animate-pulse">
                                                142.250.185.46
                                            </div>
                                            <div className="text-slate-500 dark:text-slate-400 mt-2">DNS Response</div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Server className="w-24 h-24 text-green-500 dark:text-green-400 mx-auto mb-4" />
                                        <div className="text-slate-800 dark:text-white font-bold">DNS Server</div>
                                    </div>
                                </div>
                            )}

                            {scene === 8 && (
                                <div className="w-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-6">🔄</div>
                                        <div className="space-y-4">
                                            {currentScene.substeps?.slice(0, subStep + 1).map((step, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 px-6 py-3 rounded-lg font-mono animate-pulse"
                                                >
                                                    {step.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {scene === 9 && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="flex items-center gap-8">
                                        <Monitor className="w-20 h-20 text-blue-500 dark:text-blue-400" />
                                        {currentScene.substeps?.slice(0, subStep + 1).map((step, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="text-4xl text-slate-400 animate-pulse">→</div>
                                                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 text-sm">
                                                    {step.text}
                                                </div>
                                            </div>
                                        ))}
                                        {subStep >= 3 && <Globe className="w-20 h-20 text-green-500 dark:text-green-400 animate-spin" />}
                                    </div>
                                </div>
                            )}

                            {scene === 10 && (
                                <div className="flex flex-col items-center">
                                    <Server className="w-40 h-40 text-green-500 dark:text-green-400 animate-pulse mb-6" />
                                    <div className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Google Server</div>
                                    <div className="bg-green-500 text-white px-6 py-3 rounded-lg">
                                        Processing Request...
                                    </div>
                                </div>
                            )}

                            {scene === 11 && (
                                <div className="w-full flex items-center justify-between px-8">
                                    <Server className="w-24 h-24 text-green-500 dark:text-green-400" />
                                    <div className="flex-1 flex flex-col items-center gap-4">
                                        {currentScene.substeps?.slice(0, subStep + 1).map((step, idx) => (
                                            <div
                                                key={idx}
                                                className="text-white font-bold text-center bg-slate-400 dark:bg-slate-700 px-6 py-2 rounded-lg animate-pulse"
                                            >
                                                {step.text}
                                            </div>
                                        ))}
                                    </div>
                                    <Monitor className="w-24 h-24 text-blue-500 dark:text-blue-400" />
                                </div>
                            )}

                            {scene === 12 && (
                                <div className="flex flex-col items-center">
                                    <div className="text-8xl mb-6 animate-bounce">✅</div>
                                    <div className="text-slate-900 dark:text-white text-3xl font-bold mb-4">Success!</div>
                                    <Monitor className="w-32 h-32 text-green-500 dark:text-green-400 mb-4" />
                                    <div className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold">
                                        google.com Loaded
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Details Panel */}
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 p-6 transition-colors duration-300">
                            <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                Technical Details
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(currentScene.details || {}).map(([key, value]) => (
                                    <div key={key} className="bg-slate-100 dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-800">
                                        <div className="text-slate-500 dark:text-slate-400 text-xs uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                        <div className="text-slate-800 dark:text-white font-mono text-sm">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={handlePlayPause}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-colors text-lg font-semibold"
                    >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        {isPlaying ? 'Pause' : scene >= scenes.length - 1 ? 'Replay' : 'Play'}
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-colors text-lg font-semibold"
                    >
                        <RotateCcw size={24} />
                        Reset
                    </button>
                    <div className="text-slate-600 dark:text-slate-300 text-lg ml-4 transition-colors duration-300">
                        Scene {scene + 1} of {scenes.length}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden transition-colors duration-300">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-full transition-all duration-300"
                        style={{ width: `${((scene + 1) / scenes.length) * 100}%` }}
                    />
                </div>

                {/* Scene Guide */}
                <div className="mt-8 bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">13 Detailed Scenes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {scenes.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setScene(idx);
                                    setSubStep(0);
                                    setIsPlaying(false);
                                }}
                                className={`p-3 rounded-lg text-left transition-all duration-200 border ${scene === idx
                                        ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 ring-1 ring-blue-400 dark:ring-blue-500'
                                        : 'bg-white/40 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-white/60 dark:hover:bg-slate-700/60'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${scene === idx
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <div className={`font-semibold text-sm ${scene === idx ? 'text-blue-900 dark:text-blue-100' : 'text-slate-700 dark:text-slate-300'
                                            }`}>
                                            {s.title}
                                        </div>
                                        <div className={`text-xs ${scene === idx ? 'text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-500'
                                            }`}>
                                            {s.description}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OSILayersAnimation;
