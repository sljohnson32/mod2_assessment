import React from 'react';
import { render } from 'react-dom';
import Application from './components/application';
import './style.scss';

const application = <Application />;
render(application, document.getElementById('application'));
