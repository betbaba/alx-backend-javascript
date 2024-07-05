/* create interface Teacher */

interface Teacher{
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[anyProp: string]: any;
}

interface Directors extends Teacher{
	numberOfReports: number;
}

interface printTeacherFunction{
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction =  (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;
}

interface studentClass{
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	display(): string;
}


class StudentClass implements studentClass{
	public firstName: string;
	public lastName: string;
	constructor(firstName: string, lastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	display(): string {
		return this.firstName;
	}
}
