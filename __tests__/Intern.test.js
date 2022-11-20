const Intern = require("../lib/Intern");

test("Can set school account with constructor", () => {
    const test = "school";
    const example = new Intern("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.school).toBe(test);
});
  
test("The getRole() should return \"Intern\"", () => {
    const test = "Intern";
    const example = new Intern("Steve", 11, "steeevetastic@gmail.com", "school");
    expect(example.getRole()).toBe(test);
});
  
test("Can get school username with getSchool()", () => {
    const test = "school";
    const example = new Intern("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getSchool()).toBe(test);
});