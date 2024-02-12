export default function createEmployeesObject(departmentName, employees) {
  const myObj = {
    [`${departmentName}`]: employees,
  };

  return myObj;
}
