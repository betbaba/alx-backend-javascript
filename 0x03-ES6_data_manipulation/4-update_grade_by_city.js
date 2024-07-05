export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const student = getListStudents.filter((cty) => cty.location === city);
  return student.map((stu) => {
    if (stu.id === newGrades.studentId) {
      stu.grade = newGrades.grade;
      return stu;
    }
    stu.grade = 'N/A';
    return stu;
  });
}
