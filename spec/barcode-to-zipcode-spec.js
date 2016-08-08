let {
    judgeBarcode,
    getZipCode,
    judgeCheckCode,
    buildZipCodeString,
    printZipCode
} = require('../src/core/barcode-to-zipcode');
const allCodes = {'||:::':0, ':::||':1, '::|:|':2, '::||:':3, ':|::|':4, ':|:|:':5,
    ':||::':6, '|:::|':7, '|::|:':8, '|:|::':9};
describe('judge the barcode', function () {
    it('判断输入的barcode', function () {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(judgeBarcode(barcode)).toBeTruthy();
    });
    it('判断输入的barcode，位数错误', function () {
        let barcode = '|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let result = judgeBarcode(barcode);
        expect(result).toBeFalsy();
    });
    it('判断输入的barcode，有字母', function () {
        let barcode = '|A|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(judgeBarcode(barcode)).toBeFalsy();
    });
    it('判断输入的barcode，两端少|', function () {
        let barcode = ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(judgeBarcode(barcode)).toBeFalsy();
    });
    it('判断输入的barcode，是否是两个|和三个：', function () {
        let barcode = ':||:|:|:|:||::::|:|::||::|::||::|:|::||::|::|||:|:|';
        expect(judgeBarcode(barcode)).toBeFalsy();
    });
});
describe('get formatted barcodes', function () {
    it('计算zipcode', function () {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];
        expect(getZipCode(allCodes, barcode)).toEqual(expected);
    });
    it('计算zipcode', function () {
        let barcode = '|:::||::|:|::||::|::|:|:|:||:::|';
        expect(getZipCode(allCodes, barcode)).toEqual([1, 2, 3, 4, 5, 0]);
    });
});
describe('judge check code', function () {
    it('判断校验码', function () {
        expect(judgeCheckCode([1, 2, 3, 4, 5, 0])).toBeFalsy();
    });
    it('判断校验码', function () {
        expect(judgeCheckCode([1, 2, 3, 4, 5, 5])).toBeTruthy();
    });
});
describe('build zip code string', function () {
    it('字符串形式输出zipcode', function () {
        expect(buildZipCodeString([1, 2, 3, 4, 5, 6])).toEqual('12345');
    });
    it('字符串形式输出zipcode', function () {
        expect(buildZipCodeString([3, 1, 2, 4, 2])).toEqual('3124');
    });
});
describe('print zip code', function () {
    it('should print zip code', function () {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(printZipCode(barcode)).toEqual('450561234');
    });
    it('should print zip code,and check code is wrong', function () {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|:|:|:|';
        expect(printZipCode(barcode)).toEqual('请输入有效值!');
    });
    it('should print zip code,and please enter a valid value ', function () {
        let barcode = '|:|::|:|:|:|:::||::|:|::||::|::|:|:|:|';
        expect(printZipCode(barcode)).toEqual('请输入有效值!');
    });
});