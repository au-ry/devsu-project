const { status } = require("wd/lib/commands")

describe('Verify API testing ', () => {
    it('should create username', () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: {
                id: 10340,
                username: "aury",
                firstName: "Aury",
                lastName: "Lopez",
                email: "aury@email.com",
                password: "123456",
                phone: "8001234567",
                userStatus: 0
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal('10340');
            })
    })
    it('should get username created', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/aury')
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.id).to.equal(10340);
                expect(response.body.username).to.equal('aury')
                expect(response.body.firstName).to.equal('Aury')
                expect(response.body.lastName).to.equal('Lopez')
                expect(response.body.email).to.equal('aury@email.com')
                expect(response.body.password).to.equal('123456')
                expect(response.body.phone).to.equal('8001234567')
                expect(response.body.userStatus).to.equal(0)
            })
    })
    it('should update name and email of username created', () => {
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/aury',
            body: {
                id: 10340,
                username: "aury",
                firstName: "Aury C.",
                lastName: "Lopez",
                email: "auryc@email.com",
                password: "123456",
                phone: "8001234567",
                userStatus: 0
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal('10340');
            })

    })
    it('should get username updated', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/aury')
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(10340);
            expect(response.body.username).to.equal('aury')
            expect(response.body.firstName).to.equal('Aury C.')
            expect(response.body.lastName).to.equal('Lopez')
            expect(response.body.email).to.equal('auryc@email.com')
            expect(response.body.password).to.equal('123456')
            expect(response.body.phone).to.equal('8001234567')
            expect(response.body.userStatus).to.equal(0)
        })
    })
    it('should delete username ', () => {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/user/aury')
            .then((response) => {
                expect(response.status).to.equal(200);
            })
    })
})
