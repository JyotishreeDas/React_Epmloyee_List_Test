import 'isomorphic-fetch';

export function fetch() {
    return global.fetch('./../employeedata.json')
		.then((response)=>response.json())
}