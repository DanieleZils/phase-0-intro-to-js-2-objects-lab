// Write your solution in this file!
const employee = {
    name : "Hugh",
    streetAddress : "Madison ave",
  };
  
//   updateEmployeeWithKeyAndValue(employee, key, value)
//       1) returns an employee with the original key value pairs and the new key value pair
//       2) it does not modify the original employee, but rather returns a clone with the new data

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
};

// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
// ReferenceError: destructivelyUpdateEmployeeWithKeyAndValue is not defined

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    
    return obj;
};
//  deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//       2) does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj };
    delete newObj.name;
    return newObj;
};

// destructivelyDeleteFromEmployeeByKey(employee, key)
//       1) returns employee without the deleted key/value pair
//       2) modifies the original employee

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.name;
    return obj
}
