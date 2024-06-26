export default function createIteratorObject(report) {
  return function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  };
}
