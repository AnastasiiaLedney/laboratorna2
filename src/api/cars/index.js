// import { Router } from "express";

// let data = [
    // {
    //     ownerName: "Artem Kushniruk",
    //     carTitle: "Slavuta",
    //     regNumber: "ВХ 8207 ПК",
    //     color: "Blue"
    // }

    // {
    //     ownerName: "Pron Igor",
    //     carTitle: "Megane",
    //     regNumber: "ВС 4321 ПК",
    //     color: "Green"
    // }
    // {
    //     ownerName: "Kushniruk Igor",
    //     carTitle: "Laguna",
    //     regNumber: "ВХ 6474 ББ",
    //     color: "Green"
    // }
// ]

// const carsRouter = new Router();

// let maxId = data.length;
// carsRouter.post("/", (req, res) => {
//     let car = req.body;
//     car.id = ++maxId;
//     data.push(car);
//     res.send(car);
// });

// carsRouter.post("/multi", (req, res) => {
//     let { cars } = req.body
//     for (let key in cars) {
//         cars[key].id = data.length
//         data.push(cars[key])
//     }
//     res.send(cars)
// })

// carsRouter.get("/", (req, res) => {
//     let cars = data;

//     if (req.query.carTitle) {
//         cars = cars.filter(car => car.carTitle === req.query.carTitle)
//     }

//     if (req.query.regNumber) {
//         cars = cars.filter(car => car.regNumber.split(' ')[0] === req.query.regNumber)
//     }
    
//     res.send(cars)
// });

// carsRouter.get("/:id", (req, res) => {
//     let car = data.find(car => car.id == req.params.id);
//     if (car)
//         res.send(car);
//     else
//         res.status(404).send("Not Found");
// })

// carsRouter.patch("/:id", (req, res) => {
//     let car = data.find(car => car.id == req.params.id);
//     if (car) {
//         for (let key in car)
//             if (req.body[key])
//                 car[key] = req.body[key];
//         res.send(car);
//     }
//     else
//         res.status(404).send("Not Found");
// });

// carsRouter.delete("/:id", (req, res) => {
//     let car = data.find(car => car.id == req.params.id);
//     if (car) {
//         data.splice(data.indexOf(car), 1);
//         res.send(car);
//     }
//     else
//         res.status(404).send("Not Found");
// });



import { Router } from 'express'
import carsContoller from './contoller'

const carsRouter = new Router()

carsRouter.get('/', carsContoller.get_async)
carsRouter.get(":/id", carsContoller.getById);
carsRouter.post("/", carsContoller.post);
carsRouter.post("/multi", carsContoller.multiPost   )
carsRouter.delete("/:id",carsContoller.delete);
carsRouter.patch("/:id", carsContoller.patch);

export default carsRouter;