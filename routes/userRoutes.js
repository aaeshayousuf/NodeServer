import express from 'express';

const userRouter = express.Router();


let jsonArray = [
            {"id": 1, "name": "Arafah", "age": 25},
            {"id": 2, "name": "Biola", "age": 30},
            {"id": 3, "name": "Charlie", "age": 35}
        ];
      
   jsonArray.push({"id": 4, "name": "Raymond", "age": 37});
    userRouter.post('/user-info', (req, res) => {
        return res.status(201).json(jsonArray);
    })   
    
    export default userRouter; 