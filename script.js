let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  

  
  function PrintDeveloper() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].profession === 'developer') {
        console.log(arr[i]);
      }
    }
  }
  
  function addData() {
    // Append a new employee object to the array
    arr.push({ id: 4, name: 'susan', age: 20, profession: 'intern' });
    console.log(arr);
  }
  
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log(arr);
  }
  
  function concatenateArray() {

  let newEmployees = [
    { id: 5, name: 'alice', age: 22, profession: 'developer' },
    { id: 6, name: 'bob', age: 25, profession: 'designer' },
  ];


  arr = arr.concat(newEmployees);

  console.log(arr);
  }
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
  }