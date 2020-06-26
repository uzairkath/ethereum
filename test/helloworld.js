const HelloWorld = artifacts.require('HelloWorld');

contract("HelloWorld", () => {
    it("should return hello world", async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert.equal(result, "Hello World");
    });
});