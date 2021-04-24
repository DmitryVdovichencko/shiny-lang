import React, { FC } from 'react';
import { Button, Typography } from 'antd';
import './App.css';

const { Title } = Typography;

const App: FC = () => (
  <div className="App">
		<Title>Shiny-Lang</Title>
    <Button type="primary">Button</Button>
  </div>
);

export default App;