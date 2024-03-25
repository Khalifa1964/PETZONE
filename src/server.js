import fastify from "fastify";
import z from 'zod'
import pkg from "bkcrypt"

const {compare, bkcrypt} = pkg  

const app = fastify();


app.post('/users', async (request, reply) => {    
    const egisterBodySchema = z.objectUtil({
        name: z.string(),
        email: z.string(),
        password: z.string(). min(6)
    })
    const {name, email, password} = registerBodySchema.parse(request.body)

    const password_hash = await bkcrypt.hash(password, 6)
    
})
app.listen({
    host:'0.0.0.0',
    port:3333
}).then(() => {
    console.log('Servidor rodando  na porta 3333');
})
