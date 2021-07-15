describe("teste do toBeTruthy", function () {
    it("deve demonstrar o funcionamento do toBeTruthy",
        function () {
            var n1=10;
            var n2=undefined;
            var n3=0;
            var n4='';
            var n5=null;
            var n6=NaN;
            var n7;

            expect(n1).toBeTruthy();
            expect(n2).not.toBeTruthy();
            expect(n3).not.toBeTruthy();
            expect(n4).not.toBeTruthy();
            expect(n5).not.toBeTruthy();
            expect(n6).not.toBeTruthy();
            expect(n7).not.toBeTruthy();
        })
})