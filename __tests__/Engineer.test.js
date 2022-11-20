const Engineer = require("../lib/Engineer");

test("Can set githubUsername account with constructor", () => {
    const test = "githubUsername";
    const example = new Engineer("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.github).toBe(test);
});
  
test("The getRole() should return \"Engineer\"", () => {
    const test = "Engineer";
    const example = new Engineer("Steve", 11, "steeevetastic@gmail.com", "githubUsername");
    expect(example.getRole()).toBe(test);
});
  
test("Can get githubUsername username with getGithub()", () => {
    const test = "githubUsername";
    const example = new Engineer("Steve", 11, "steeevetastic@gmail.com", test);
    expect(example.getGithub()).toBe(test);
});