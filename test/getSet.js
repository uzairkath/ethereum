const GetSet = artifacts.require("getSet");

contract('getSet', () => {
    it("should get the data", async () => {
        const getSet = await GetSet.deployed();
        const get = await getSet.data();
        assert(get === "mydata");
    });
    it("should set the data", async () => {
        const getSet = await GetSet.deployed();
        await getSet.set("Hello");
        const set = await getSet.get();
        assert(set === "Hello");
    });
});