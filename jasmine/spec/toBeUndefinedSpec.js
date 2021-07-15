describe('Teste o toBeUndefined', function () {
    it('deve testar o funcionamento toBeUndefined', function () {
        var n1;
        var n2 = undefined;

        var n3 = true;
        var n4 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        expect(n3).not.toBeUndefined();
        expect(n4).not.toBeUndefined();
        expect(null).not.toBeUndefined();
    })
})