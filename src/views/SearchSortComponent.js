import React, {Component} from 'react';

export class SearchSortComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {	
			OldEmpData: props.EmpData ? props.EmpData: [],
            EmpData: props.EmpData ? props.EmpData: [],
			sortBy: 'id',
			sortDir: null,
			sortImg: "glyphicon glyphicon-chevron-up",
			showId: true,
        }
    }

    //Filtering the Employee List.
    filterEmployeeList(searchKey) {
      var employeeArray = this.state.OldEmpData;
	  var searchBy = searchKey.target.value.toString().toLowerCase();
	  var size = employeeArray.length;
	  var searchList = [];
	  for (var index = 0; index < size; index++) {
		var v = employeeArray[index]['id']+employeeArray[index]['firstname']+employeeArray[index]['lastname']+employeeArray[index]['city']+employeeArray[index]['salary'];
		if (v.toString().toLowerCase().indexOf(searchBy) !== -1) {
		  searchList.push(employeeArray[index]);
		}
	  }

	  this.setState({
		EmpData: searchList,
	  });


    }

	//Sorting the Employee List by column.
	sortByColumn(key) {
	  //alert(key);
	  var sortDir = this.state.sortDir;
	  var sortBy = key;

	  if (sortBy === this.state.sortBy) {
		sortDir = this.state.sortDir === 'DESC' ? 'ASC' : 'DESC';
	  } else {
		sortDir = 'DESC';
	  }
	  var rows = this.state.EmpData.slice();
	  rows.sort((a, b) => {
		var sortVal = 0;
		if (a[sortBy] > b[sortBy]) {
		  sortVal = 1;
		}
		if (a[sortBy] < b[sortBy]) {
		  sortVal = -1;
		}
	 
		if (sortDir === 'DESC') {
		  this.setState({
				sortImg: "glyphicon glyphicon-chevron-down"
		  });
		  sortVal = sortVal * -1;
		}else{
			this.setState({
				sortImg: "glyphicon glyphicon-chevron-up"
		  });
		}
		
		if(sortBy == 'firstname'){
			this.setState({
			showId: false,
			showLname: false,
			showCity: false,
			showSal: false,
			showFname: true
		  });			
		}else if(sortBy == 'lastname'){
			this.setState({
			showId: false,
			showLname: true,
			showCity: false,
			showSal: false,
			showFname: false,
		  });	
		}else if(sortBy == 'city'){
			this.setState({
			showId: false,
			showLname: false,
			showCity: true,
			showSal: false,
			showFname: false,
		  });	
		}else if(sortBy == 'salary'){
			this.setState({
			showId: false,
			showLname: false,
			showCity: false,
			showSal: true,
			showFname: false,
		  });	
		}else if(sortBy == 'id'){
			this.setState({
			showId: true,
			showLname: false,
			showCity: false,
			showSal: false,
			showFname: false,
		  });	
		}

		return sortVal;
	  });

		this.setState({
		EmpData : rows,
		sortBy: sortBy,
		sortDir: sortDir
		});
	}

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">                                                               
                            <div className="input-group">
                                  <input
                                         type="text"
                                         className="form-control"
                                         placeholder ="Search Employee"
                                         onKeyUp={this.filterEmployeeList.bind(this)}
                                       />
                                    <div className="input-group-addon">
                                       
                                    </div>
                            </div>
                        </div>                                             
                    </div>
                </div>
				<div className="panel-body">
					<div>
						<table className="Task-table"> 
							<tbody>
							  <tr>
							  <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'id')}> ID <span id='id' className={this.state.showId ? this.state.sortImg: ''}></span></th>
							  <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'firstname')}> First Name <span id='firstname' className={this.state.showFname ? this.state.sortImg: ''}></span></th>
							  <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'lastname')}> Last Name <span id='lastname' className={this.state.showLname ? this.state.sortImg: ''}></span></th>
							  <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'city')}> City <span id='city' className={this.state.showCity ? this.state.sortImg: ''}></span></th>
							  <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'salary')}> Salary <span id='salary' className={this.state.showSal ? this.state.sortImg: ''}></span></th>

							  </tr>
							  
							  {this.state.EmpData.map((item, index) => (
							  <tr key={index}>
							  <td className="Task-td-th"> {this.state.EmpData[index]['id']}</td>
							  <td className="Task-td-th"> {this.state.EmpData[index]['firstname']}</td>
							  <td className="Task-td-th"> {this.state.EmpData[index]['lastname']}</td>
							  <td className="Task-td-th"> {this.state.EmpData[index]['city']}</td>
							  <td className="Task-td-th"> {this.state.EmpData[index]['salary']}</td>
							  </tr>
							  ))}
						   </tbody>
					 </table>
				  </div>
                </div>
            </div>
        );
    }
}
