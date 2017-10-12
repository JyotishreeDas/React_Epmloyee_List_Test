import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {SearchSortComponent} from '../../src/views/SearchSortComponent'

describe('<SearchSortComponent /> Component', () => {
    let empElement;
    beforeEach(() => {
        empElement = shallow(<SearchSortComponent/>);
    });


    describe('Employee List Table', function () {
            let searchElement;
            beforeEach(function () {
                searchElement = empElement.props().children[1];
            });

			it('should have employee list table', () => {
                 expect(searchElement.props.children.props.children.type).to.equal('table');
            });
    });
 
     describe('Searching Employee', function () {
            let searchElement;
            beforeEach(function () {
                searchElement = empElement.props().children[0].props.children[1].props.children.props.children.props.children[0];
            });

            it('should have a input textbox', function () {
                expect(searchElement.type).to.equal('input');
            })

            it('should filter Employee List', function () {
                const filteredItem = [{
									"id":1,
									"firstname": "Amit",
									"lastname":"Bisht",
									"city": "Bangalore",
									"salary": 30000
								  }];
				empElement.setState({OldEmpData: filteredItem});
                searchElement.props.onKeyUp({target: {value: 'am'}});
                expect(empElement.state('EmpData')).to.equal(filteredItem);
            });
    });

	describe('Check for sorting Employee List Columns', function () {    
            let sortingElement;
            beforeEach(function () {
                sortingElement =  empElement.props().children[1].props.children.props.children.props.children.props.children[0].props.children[0];
            }); 

            it('should sort Employee List', function () {
                const sortedItemList = [
									{
									"id":2,
									"firstname": "Ashok",
									"lastname":"Kulkarni",
									"city": "Delhi",
									"salary": 50000
								  },	
								  {
									"id":1,
									"firstname": "Amit",
									"lastname":"Bisht",
									"city": "Bangalore",
									"salary": 30000
								  }];
				//expect(sortingElement.type).to.equal('th');
				empElement.setState({EmpData: sortedItemList});
                sortingElement.props.onClick();
                expect(empElement.state('EmpData')).to.equal(sortedItemList);
            });
    });


});
