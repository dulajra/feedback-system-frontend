const utils = require("./utils")
// @ponicode
describe("utils.validateFeedbackComment", () => {
    test("0", () => {
        let param1 = [["This is a Text", "foo bar", "Foo bar"], ["foo bar", "Hello, world!", "Foo bar"], ["Foo bar", "This is a Text", "Foo bar"]]
        let callFunction = () => {
            utils.validateFeedbackComment(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["foo bar", "foo bar", "foo bar"], ["This is a Text", "Foo bar", "foo bar"], ["Foo bar", "This is a Text", "This is a Text"]]
        let callFunction = () => {
            utils.validateFeedbackComment(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Hello, world!", "Hello, world!", "Hello, world!"], ["foo bar", "Hello, world!", "Foo bar"], ["foo bar", "foo bar", "Foo bar"]]
        let callFunction = () => {
            utils.validateFeedbackComment(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["foo bar", "This is a Text", "This is a Text"], ["This is a Text", "foo bar", "Foo bar"], ["foo bar", "foo bar", "Foo bar"]]
        let callFunction = () => {
            utils.validateFeedbackComment(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Hello, world!", "Foo bar", "Foo bar"], ["Hello, world!", "Hello, world!", "This is a Text"], ["Hello, world!", "This is a Text", "This is a Text"]]
        let callFunction = () => {
            utils.validateFeedbackComment(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.validateFeedbackComment(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
