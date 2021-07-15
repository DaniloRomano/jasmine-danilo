describe("Teste do beforeEach", function () {
    var contador = 0;

    beforeEach(function () {
        contador++;
    })

    it("deve incrementar o contador par a 1", function () {
        expect(contador).toEqual(1);
    })

    it("deve incrementar o contador par a 2", function () {
        expect(contador).toEqual(2);
    })


})