const Counter = artifacts.require("Counter");

contract("Counter", () => {
    it("should check the data", async () => {
        const counter = await Counter.deployed();
        var _data = await counter.count();
        var data = _data.toNumber();
        assert( data === 100);
        await counter.increment();
        var _data = await counter.count();
        var data = _data.toNumber();
        assert( data === 101);
        await counter.decrement();
        var _data = await counter.count();
        var data = _data.toNumber();
        assert( data === 100);
        console.log(counter.address);
    });
});