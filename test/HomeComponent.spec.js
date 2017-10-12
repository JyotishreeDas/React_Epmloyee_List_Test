import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {HomeComponent} from '../src/HomeComponent';

import {Header} from '../src/views/Header';
import {SearchSortComponent} from '../src/views/SearchSortComponent';
import {Footer} from '../src/views/Footer';

describe('<HomeComponent /> Component', () => {
    let homeElement;

    beforeEach(() => {
        homeElement = shallow(<HomeComponent/>);
     });
     
        describe('Loading page Elements', function () {

                it('Loading page should have h3 element', function () {
                    expect(homeElement.props().children.type).to.equal('h4');           
                });

                it('Loading page should have center element', function () {
                    expect(homeElement.props().children.props.children.type).to.equal('center');           
                });

                it('Loading page should show "Fetching Employee List...', function () {
                    expect(homeElement.props().children.props.children.props.children).to.equal('Fetching Employee List...')
                });       
            });

        it('Employee List page should have panel', () => {
            homeElement.setState({loading: false});
            expect(homeElement.props().className).to.equal('container panel panel-default');
        });

        describe('Employee List page Elements', function () {
            it('Employee List page should have child elements', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[0].type).to.equal(Header);
                expect(homeElement.props().children[1].type).to.equal('div');
                expect(homeElement.props().children[2].type).to.equal(Footer);
            }); 

        describe('when Employee List is loaded', function () {
            it('Home page should show Employee List container', function () {
                homeElement.setState({loading: false});
                expect(homeElement.props().children[1].props.children.type).to.equal(SearchSortComponent);
            });


			/*it('Employee List json validation', function () {
                homeElement.setState({loading: false});
                homeElement.props().children[1].props.children.EmpData.should.be.json;
            });*/
        });
    });
});


