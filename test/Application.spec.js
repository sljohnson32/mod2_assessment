import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import Application from '../lib/components/Application';

describe('Main application', () => {
  it('should render an application component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Application)).to.have.length(1);
  });
});
