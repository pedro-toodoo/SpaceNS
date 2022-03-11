const request = require('supertest');
const app = require('./app');

describe('Test endpoints', () => {
    it('should get title from default route', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('title')
    })
    it('should post spacecraft', async () => {
        const res = await request(app)
        .post('/spacecrafts')
        .send({
            name: "falcon9",
            numCrew: 34,
            numPassengers: 50
        })
        expect(res.statusCode).toEqual(201)
    })
    it('should post passenger', async () => {
        const res = await request(app)
        .post('/passengers')
        .send({
            name: "Pedrão Grande Sábio conhecedor de NADA",
            birthDate: "14/03/1998",
            sex: "M",
            profession: "Blastoffer",
            email: "pedro@email.com",
            password: "pedro123", 
            nameSpacecraft: "falcon9"
        })
        expect(res.statusCode).toEqual(201)
    })
    it('should NOT post passenger', async () => {
        const res = await request(app)
        .post('/passengers')
        .send({
            name: "Pedrão Grande Sábio conhecedor de NADA",
            birthDate: "14/03/1998",
            sex: "M",
            profession: "Blastoffer",
            email: "pedro@email.com",
            password: "pedro123", 
            nameSpacecraft: "alguma nave aleatória que não voa"
        })
        expect(res.statusCode).toEqual(500)
    })
    it('should post crew', async () => {
        const res = await request(app)
        .post('/crew')
        .send({
            name: "Taz mania ",
            birthDate: "01/02/2001",
            sex: "M",
            specialization: "Capitão",
            email: "taz@email.com",
            emailSupervisor: "taz@email.com",
            password: "tazmania123", 
            nameSpacecraft: "falcon9"
        })
        expect(res.statusCode).toEqual(201)
    })        
    it('should login passengers', async () => {
        const res = await request(app)
        .post('/passengers/login')
        .send({ 
            email: "pedro@email.com",
            password: "pedro123"
        })
        console.log(res.body)
        expect(res.body).toHaveProperty('token')
    })  
    it('should post star', async () => {
        const res = await request(app)
        .post('/stars')
        .send({
            name: "Estrela 1",
            mass: 100032321.2,
            size: 123123132,
            galaxy: "galaxia 1",
            luminosity: 123321,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbS5iciIsIm5hbWUiOiJQZWRybyIsIm5hbWVTcGFjZWNyYWZ0IjoiZmFsY29uOSIsImlhdCI6MTY0NzAyMzIyOSwiZXhwIjoxNjQ3MTA5NjI5fQ.dnvdH4jCisnFQp3l5EhWRvOV60qJgR7wEBiJ2QHqBJQ'
        })
        expect(res.statusCode).toEqual(201)
    })  
    it('should post planet', async () => {
        const res = await request(app)
        .post('/planets')
        .send({
            name: "Planeta 1",
            mass: 4232112.2,
            size: 33333,
            star: "Estrela 1",
            habitable: "S",
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbS5iciIsIm5hbWUiOiJQZWRybyIsIm5hbWVTcGFjZWNyYWZ0IjoiZmFsY29uOSIsImlhdCI6MTY0NzAyMzIyOSwiZXhwIjoxNjQ3MTA5NjI5fQ.dnvdH4jCisnFQp3l5EhWRvOV60qJgR7wEBiJ2QHqBJQ'
        })
        expect(res.statusCode).toEqual(201)
    }) 
    it('should post travel', async () => {
        const res = await request(app)
        .post('/travels?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbS5iciIsIm5hbWUiOiJQZWRybyIsIm5hbWVTcGFjZWNyYWZ0IjoiZmFsY29uOSIsImlhdCI6MTY0NzAyMzIyOSwiZXhwIjoxNjQ3MTA5NjI5fQ.dnvdH4jCisnFQp3l5EhWRvOV60qJgR7wEBiJ2QHqBJQ')
        .send({
            namePlanet: "Planeta 1",
            duration: 123.2,
            distance: 55334,
            nameSpacecraft: "Falcon 9"
        })
        expect(res.statusCode).toEqual(201)
    })  
    it('should post map', async () => {
        const res = await request(app)
        .post('/maps?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbS5iciIsIm5hbWUiOiJQZWRybyIsImlhdCI6MTY0Njk0MTIyMSwiZXhwIjoxNjQ3MDI3NjIxfQ.qlaDr2KYazfnC5ofpdrWr-P_zF7N5i-UcOkvN1lBCFI')
        .send({
            title: "Mapa astral",
            scale: 123.2,
            orientation: "vai reto na fé",
            obstacles: 3,
            idTravel: 1
        })
        expect(res.statusCode).toEqual(201)
    })  
    it('should get spacecraft datas', async () => {
        const res = await request(app)
        .get('/api/rockets?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbS5iciIsIm5hbWUiOiJQZWRybyIsImlhdCI6MTY0Njk0MTIyMSwiZXhwIjoxNjQ3MDI3NjIxfQ.qlaDr2KYazfnC5ofpdrWr-P_zF7N5i-UcOkvN1lBCFI')
        
        expect(res.statusCode).toEqual(200)
    })
})