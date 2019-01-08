const index = require('./index.js');
const slugger = index.slugger

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const result = slugger("hey", "yo  ");
        expect(result).toEqual("hey-yo  ");
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const result = slugger("hey" , "yo")
        expect(result).toEqual("hey-yo");
    })
     /**
     * @test - unit test can use the 'test' syntax
     */
    test('Empty array should return empty string', () => {
        const result = slugger()
        expect(result).toEqual("");
    })
})
