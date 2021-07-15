describe('teste do jasmine.clock', function () {

    beforeEach(function () {
        jasmine.clock().install(); //deve ser instalado
    });

    afterEach(function () {
        jasmine.clock().uninstall(); // deve ser desinstalado
    });

    var dobro;

    beforeAll(function () {
        dobro = jasmine.createSpy("dobro");
    })

    it("deve demonstrar o uso com setTimeout", function () {
        setTimeout(function () {
            dobro(10);
        }, 1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

    it("deve demonstrar o uso com setInterval", function () {
        setInterval(function () {
            dobro(10);
        }, 1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

});