import React from 'react';
import { createRoot } from 'react-dom/client';
import Newtab from './Newtab';

const container = document.getElementById('app-container');
const root = createRoot(container!); 
root.render(<Newtab />);
