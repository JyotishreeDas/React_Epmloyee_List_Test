import React, {Component} from 'react';
import {Header} from './views/Header';
import {SearchSortComponent} from './views/SearchSortComponent';
import {Footer} from './views/Footer';
import {fetch} from './services/EmployeeService';


function getEmpList() {
   //Fetching the JSON data from fetch service. 
    return fetch() 
        .then((response)=> 
            self.setState({
                            EmpData: response.employees, 
                            loading: !(response.employees.length)
                        })
        )
}

export class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            EmpData: [],
            loading: true
        };
    }

    //loder timeout for 2 seconds
    componentDidMount() {
          self = this;
          global.setTimeout(() => {
              getEmpList();
      },2000);
    }


    //Displaying the Employee List.
    renderEmployeePage() {
        return (
          <div className="container panel panel-default" style={{height: '960px'}}>
              <Header/>
              <div className="panel-body" style={{height: '960px'}}>  
			  <SearchSortComponent EmpData={this.state.EmpData}/>
              </div>
              <Footer/>
          </div>
        );
    }

    //Loder text
    renderLoading() {    
        return (
          <div>
               <h4><center>Fetching Employee List...</center></h4>
          </div>
        );
    }

    render() {
        const loading = this.state.loading;
        if(loading){
          return this.renderLoading();
        }
        else{
          return this.renderEmployeePage();
        }
    }
}
