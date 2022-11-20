const Employee = require("../lib/Employee");

test("Employee is an object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Checks created object", () => {
    const name = 'Steve';
    const id = 11;
    const email = 'steeevetastic@gmail.com';
    const example = new Employee(name, id , email);
    expect(example.name).toBe('Steve');
    expect(example.id).toBe(11);
    expect(example.email).toBe('steeevetastic@gmail.com');
    expect(example.getRole()).toBe('Employee');
});
  
test("getRole() should return 'Employee'", () => {
    const test = 'Employee';
    const example = new Employee("Steve", 11, "steeevetastic@gmail.com");
    expect(example.getRole()).toBe(test);
});
  
test("getName() should return 'Steve'", () => {
    const test = 'Steve';
    const example = new Employee("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getName()).toBe('Steve');
});

test("getId() should return 11", () => {
    const test = '11';
    const example = new Employee("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getId()).toBe(11);
});

test("getEmail() should return 'steeevetastic@gmail.com'", () => {
    const test = 'steeevetastic@gmail.com';
    const example = new Employee("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getEmail()).toBe('steeevetastic@gmail.com');
});
