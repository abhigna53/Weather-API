var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        server.close();
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/city/boston", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
	it("Body", () => {
	    let weat = JSON.parse(data.body)
            expect(weat[0].weather.name).toBe(“Boston”);
        });
    });

});
