import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MindMap from './index.js'
import pythonMap from './sample/python.json'
import physicsMap from './sample/physics.json'
import securityMap from './sample/security.json'

function simpleMap(map) {
  return <p>Fake Map</p>
};

const render = (map) => {
  return <MindMap
    connections={map.connections}
    nodes={map.nodes}
    subnodes={map.subnodes}
    editable={true}
  />;
};

storiesOf('Mind Maps', module)
  .add('Physics', () => render(physicsMap))
  .add('Python', () => render(pythonMap))
  .add('Security', () => render(securityMap))
