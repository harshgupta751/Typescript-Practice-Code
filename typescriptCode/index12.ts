//Type interference in Zod

import express from 'express'
import {z} from 'zod'
const app= express()


const UserSchema= z.object({
name: z.string().min(3,{message:"Name should be greater than 3 characters"}),
email: z.string().email({message: "Enter valid Email!"}),
age: z.number().min(8).optional()
})

type UserType= z.infer<typeof UserSchema>
app.use(express.json())
app.put('/update',function(req,res){
const {success}   = UserSchema.safeParse(req.body)
if(!success){
    res.status(411).json({
        Error: "Please give valid inputs!"
    })
    return
}
const updatedBody: UserType= req.body
res.json({
    message: "User updated"
})
})

app.listen(3000)