const { validateUser } = require(''./users-helpers.js);

describe("users helpers",() => {
    describe("validateUser()", () => {
        it("should fail when missing username and password",() => {
            const invalidUser = {};
            const expected = false;

            const actual = validateUser(invalidUser);

            expect(actual.isSuccessful).toBe(expected);
        });
    });
});