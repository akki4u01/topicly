import React from 'react';
import Layout from '@theme-original/Layout';
import ScrollControls from '@site/src/components/ScrollControls';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <ScrollControls />
    </>
  );
}
