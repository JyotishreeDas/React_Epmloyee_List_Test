import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Header} from '../../src/views/Header';

describe('<Header /> Component', () => {
    let headerElement;

    beforeEach(() => {
        headerElement = shallow(<Header/>);
    });

    it('header should have panel heading primary', () => {
        expect(headerElement.props().className).to.equal('panel panel-primary');
    });

     it('header should have panel headding', () => {
        expect(headerElement.props().children.props.className).to.equal('panel-heading');
    });

    it('header should have header text', () => {
        const headerText = ' Employee List';
        expect(headerElement.props().children.props.children.props.children).to.equal(headerText)
    });
});
