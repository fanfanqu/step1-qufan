let {
    judgeZipCode,
    calculateCheckCode,
    buildBarcodes,
    buildBarcodeString,
    printBarcode
} = require('../src/core/zipcode-to-barcode');
const allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:',
    ':||::', '|:::|', '|::|:', '|:|::'];
describe('judge the zip code', function () {
    it('检查数字的个数，4位', function () {
        expect(judgeZipCode('9821')).toBeFalsy();
    });
    it('检查数字的个数，5位', function () {
        expect(judgeZipCode('98235')).toBeTruthy();
    });
    it('检查数字的个数，6位', function () {
        expect(judgeZipCode('834234')).toBeFalsy();
    });
    it('检查数字的个数，8位', function () {
        expect(judgeZipCode('83423478')).toBeFalsy();
    });
    it('检查数字的个数，9位', function () {
        expect(judgeZipCode('834234783')).toBeTruthy();
    });
    it('检查数字的个数，10位', function () {
        expect(judgeZipCode('8342347801')).toBeFalsy();
    });
    it('检查数字的个数，11位', function () {
        expect(judgeZipCode('83423478013')).toBeFalsy();
    });
    it('检查 — 的位置,并且位置是错误的', function () {
        expect(judgeZipCode('83-4234789')).toBeFalsy();
    });
    it('检查 - 的位置，并且位置是正确的', function () {
        expect(judgeZipCode('83423-4789')).toBeTruthy();
    });
    it('检查是否含有其他字符，但是符号位置不对,如 #', function () {
        expect(judgeZipCode('83#4234789')).toBeFalsy();
    });
    it('检查是否含有其他字符，但是符号位置对,如*', function () {
        expect(judgeZipCode('83423*4789')).toBeFalsy();
    });
    it('检查是否含有其他字符，但是符号位置对,如#', function () {
        expect(judgeZipCode('83423#4789')).toBeFalsy();
    });
    it('5位，但是有字母', function () {
        expect(judgeZipCode('8ab89')).toBeFalsy();
    });
    it('9位，但是有字母 ', function () {
        expect(judgeZipCode('8abbcbc89')).toBeFalsy();
    });
    it('10位，但是有字母', function () {
        expect(judgeZipCode('8bac4-7891')).toBeFalsy();
    });
    it('判断符号的个数', function () {
        expect(judgeZipCode('83-423-4789')).toBeFalsy();
    });
});
describe('should calculate the checkcode', function () {
    it('计算没有-的cd，并对新的数组求和', function () {
        let zipCode = '12345';
        expect(calculateCheckCode(zipCode)).toEqual([1, 2, 3, 4, 5, 5]);
    });
    it('计算有-的cd，并对新的数组求和', function () {
        let zipCode = '12345-3241';
        let expected = [1, 2, 3, 4, 5, 3, 2, 4, 1, 5];
        expect(calculateCheckCode(zipCode)).toEqual(expected);
    });
    it('计算有-的cd，并对新的数组求和', function () {
        let zipCode = '45056-1234';
        let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];
        expect(calculateCheckCode(zipCode)).toEqual(expected);
    });
});
describe('should build barcodes', function () {
    it('转换为barcode', function () {
        let zipCodeArray = [1, 2, 3, 4, 5, 5];
        let expected = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        expect(buildBarcodes(allCodes, zipCodeArray)).toEqual(expected);
    });
});
describe('build barcode string', function () {
    it('把barcode以字符串形式输出', function () {
        let barcodes = [':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':|:|:'];
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|'
        expect(buildBarcodeString(barcodes)).toEqual(expected);
    });
});
describe('print', function () {
    it('should print barcode', function () {
        let zipCode = '45056-1234';
        let expected = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(printBarcode(zipCode)).toEqual(expected);
    });
});
