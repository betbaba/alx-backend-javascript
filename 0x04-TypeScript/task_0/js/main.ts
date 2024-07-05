/* creates an interface */
interface Student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student{
	firstName: 'John',
	lastName: 'Abraham',
	age: 23,
	location: 'AA',
}

const student2: Student{
	firstName: 'zima',
	lastName: 'maru',
	age: 34,
	location: 'here',
}

let studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const theadRow = document.createElement('tr');
const nameHeader = document.createElement('td');
nameHeader.textContent = 'Name';
const locationHeader = document.createElement('td');
locationHeader.textContent = 'Location';
theadRow.appendChild(nameHeader);
theadRow.appendChild(locationHeader);
thead.appendChild(theadRow);

const tbody = document.createElement('tbody');

studentList.forEach(function(element){
	const trow = document.createElement('tr')
	const tdName = document.createElement('td');
        tdname.textContent(element.firstName);
        const tdLocation = document.createElement('td');
        tdLocation.textContent(element.Location);
        trow.appendChild(tdName);
        trow.appendChild(tdLocation);
        tbody.appendChild(trow);	
});

//Add table header and body to the table element
table.appendChild(thead);
table.appendChild(tbody);

//Add a table to the document body 
document.body.appendChild(table);
