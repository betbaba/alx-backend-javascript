namespace Subjects {
	export class subject implements Teacher {
		private _teacher = Teacher;
		set teacher(teacher: Teacher){
			this._teacher = teacher
		}
	}
}
