import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const osiLayers = [
    {
        layer: 7,
        name: 'Application',
        description: 'Human-computer interaction layer, where applications can access the network services.',
        protocols: ['HTTP', 'HTTPS', 'FTP', 'DNS', 'SMTP', 'DHCP', 'SSH', 'Telnet'],
        color: '#e11d48', // Rose 600
    },
    {
        layer: 6,
        name: 'Presentation',
        description: 'Ensures that data is in a usable format and is where data encryption occurs.',
        protocols: ['SSL/TLS', 'JPEG', 'GIF', 'MPEG', 'ASCII', 'EBCDIC'],
        color: '#ea580c', // Orange 600
    },
    {
        layer: 5,
        name: 'Session',
        description: 'Maintains connections and is responsible for controlling ports and sessions.',
        protocols: ['NetBIOS', 'RPC', 'SQL', 'NFS', 'SMB'],
        color: '#ca8a04', // Yellow 600
    },
    {
        layer: 4,
        name: 'Transport',
        description: 'Transmits data using transmission protocols including TCP and UDP.',
        protocols: ['TCP', 'UDP', 'SCTP'],
        color: '#16a34a', // Green 600
    },
    {
        layer: 3,
        name: 'Network',
        description: 'Decides which physical path the data will take.',
        protocols: ['IP (IPv4/IPv6)', 'ICMP', 'IPsec', 'IGMP', 'OSPF', 'BGP'],
        color: '#0284c7', // Sky 600
    },
    {
        layer: 2,
        name: 'Data Link',
        description: 'Defines the format of data on the network.',
        protocols: ['Ethernet', 'PPP', 'ARP', 'VLAN (802.1Q)', 'MAC', 'LLC'],
        color: '#4f46e5', // Indigo 600
    },
    {
        layer: 1,
        name: 'Physical',
        description: 'Transmits raw bit stream over the physical medium.',
        protocols: ['Wi-Fi (802.11)', 'Ethernet Cables (RJ45)', 'Fiber Optics', 'Coaxial', 'Bluetooth'],
        color: '#7c3aed', // Violet 600
    },
];

function LayerCard({ layerData }) {
    return (
        <div className="row margin-bottom--lg">
            <div className="col col--2 text--center display-flex align-items-center justify-content--center">
                <div style={{
                    background: layerData.color,
                    color: 'white',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.9 }}>Layer</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{layerData.layer}</span>
                </div>
            </div>
            <div className="col col--10">
                <div className="card-glass padding--md h-100" style={{ borderLeft: `6px solid ${layerData.color}` }}>
                    <div className="display-flex justify-content--between align-items-center margin-bottom--sm">
                        <Heading as="h2" className="margin--none" style={{ color: layerData.color }}>{layerData.name} Layer</Heading>
                    </div>
                    <p className="margin-bottom--sm" style={{ fontStyle: 'italic', opacity: 0.8 }}>{layerData.description}</p>
                    <hr style={{ margin: '0.5rem 0', opacity: 0.2 }} />
                    <div>
                        <strong className="margin-right--sm">Protocols:</strong>
                        {layerData.protocols.map((protocol, idx) => (
                            <span key={idx} className="badge badge--secondary margin-right--xs margin-bottom--xs">{protocol}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OSIModelPage() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="OSI Model Layers"
            description="Deep dive into the 7 Layers of the OSI Model">
            <main className="container margin-vert--xl">
                <div className="text--center margin-bottom--xl">
                    <Heading as="h1" className="hero-title">The OSI Model</Heading>
                    <p className="hero-subtitle">Open Systems Interconnection Model: The 7 Layers of Networking</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {osiLayers.map((layer) => (
                        <LayerCard key={layer.layer} layerData={layer} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}
