const Manager = require("../lib/Manager");

test("Can set officerNumber account with constructor", () => {
    const test = "officerNumber";
    const example = new Manager("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.officeNumber).toBe(test);
});
  
test("The getRole() should return \"Manager\"", () => {
    const test = "Manager";
    const example = new Manager("Steve", 11, "steeevetastic@gmail.com", "GitHubUser");
    expect(example.getRole()).toBe(test);
});
  
test("Can get officerNumber username with getOfficeNumber()", () => {
    const test = "12345";
    const example = new Manager("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getOfficeNumber()).toBe(test);
});