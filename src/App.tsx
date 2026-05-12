/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import CommandView from './components/CommandView';
import VerticalsView from './components/VerticalsView';
import BalanceView from './components/BalanceView';
import LogView from './components/LogView';
import { View } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<View>(View.Command);

  const renderView = () => {
    switch (activeView) {
      case View.Command:
        return <CommandView />;
      case View.Verticals:
        return <VerticalsView />;
      case View.Balance:
        return <BalanceView />;
      case View.Log:
        return <LogView />;
      default:
        return <CommandView />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderView()}
    </Layout>
  );
}

