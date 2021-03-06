var meuMatcher = {
    toBeValidEmail: function (util, customEqualityTesters) {
        var emailRegex = /\S+@\S+\.\S+/;
        return {
            compare: function (actual, expected) {
                var result = {};
                if (expected === undefined)
                    result.pass = emailRegex.test(actual);
                else
                    result.pass = expected.test(expected);
                if (result.pass)
                    result.message = actual + " é um email válido";
                else
                    result.message = actual + " não é um e-mail válido";

                return result;
            }
        }
    }
}

describe("teste do objeto jasmine.addMatchers", function () {

    beforeEach(function () {
        jasmine.addMatchers(meuMatcher);
    })

    it("deve dizer que é um email valido", function () {
        var email = "danilo@email.com";
        expect(email).toBeValidEmail();
    });
});