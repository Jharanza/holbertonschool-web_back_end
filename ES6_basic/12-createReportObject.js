export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      for (const z in employeesList) {
        if (Object.prototype.hasOwnProperty.call(employeesList, z)) {
          count += 1;
        }
      }
      return count;
    },
  };

  return myObject;
}
