export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accum, element) => accum + element.id, 0);
}
