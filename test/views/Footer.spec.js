import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Footer} from '../../src/views/Footer';

describe('<Footer /> Component', () => {
    let footerElement;

    beforeEach(() => {
        footerElement = shallow(<Footer/>);
    });

    it('footer should have panel footer', () => {
        expect(footerElement.props().className).to.equal('panel-footer');
    });

	 

    it('footer should have center tag', () => {
        expect(footerElement.props().children.props.children.type).to.equal('center');
    });

    it('footer should have footer text', () => {
        expect(footerElement.props().children.props.children.props.children).to.equal('ReactJS');
    });

});
