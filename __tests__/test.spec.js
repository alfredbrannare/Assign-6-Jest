import { toUpperCase } from '../UpperCaseFunction';

describe("toUpperCase test", () => {
    //Describes what the test is suppoes to do
    it("Hopefully this logs toUpperCase", () => {
        // Track the console.log instead of output
        console.log = jest.fn();

        const input = "hElLo WoRlD";
        const output = "HELLO WORLD";

        // Call the function
        const result = toUpperCase(input);

        // Assertions
        expect(result).toBe(output);

        //Checks if console.log is called with the correct output
        expect(console.log).toHaveBeenCalledWith(output);
    });
});
