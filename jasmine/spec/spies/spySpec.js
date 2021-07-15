describe("teste do objeto spy", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });

    beforeEach(function(){
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
        Calculadora.somar(2, 3);

        expect(Calculadora.somar).toHaveBeenCalledWith(2, 3);
    });

    it("deve executar o método somar original", function () {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    })
})