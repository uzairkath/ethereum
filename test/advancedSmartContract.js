const Advanced = artifacts.require("advancedSmartContract");
contract("advancedSmartContract", () => {
    it("should check the address of the smart contract", async () => {
        const advance = await Advanced.deployed();
        const address = await advance.address;
        console.log(address);
        await advance.add(55);
        const result = await advance.ids(0);
        assert(result.toNumber() === 55);    
    });
    it("should check the get function", async () => {
        const advance = await Advanced.deployed();
        // const address = await advance.address;
        // console.log(address);
        const result = await advance.get(0);
        assert(result.toNumber() === 55);    
    });
    it("should check the getAll function", async () => {
        const advance = await Advanced.deployed();
        // const address = await advance.address;
        // console.log(address);
        await advance.add(125);
        await advance.add(40);
        const rawids = await advance.getAll();
        const ids = rawids.map(id => id.toNumber());
        assert.deepEqual(ids, [55, 125, 40]);    
    });
});