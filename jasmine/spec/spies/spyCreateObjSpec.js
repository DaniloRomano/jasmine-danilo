describe("teste do objeto jasmine.createSpyObj", function () {
    var Calculadora;

    beforeAll(function () {
        Calculadora = jasmine.createSpyObj('Calculadora', ['somar', 'subtrair']);

        Calculadora.somar.and.returnValue(2);
    });

    beforeEach(function () {
        Calculadora.somar.calls.reset(); //reseta a chamadas da função
    })

    it("deve chamar o método somar ao menos uma vez", function () {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

    it("Deve chamar o método somar duas vezes", function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

    it("Deve validar o uso do toHaveBeenCalledWith", function () {
        Calculadora.somar(5, 3);

        expect(Calculadora.somar).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Number));
    });

    it("deve executar o método somar original", function () {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    })
})