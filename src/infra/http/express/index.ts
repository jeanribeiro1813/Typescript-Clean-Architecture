import express, {Express,Request,Response} from "express";
import { CreateRouteUseCase } from "../../../application/create-route-userCase";
import { RouteInMemory } from '../../db/route-in-memory';
import { ListAllRouteUseCase } from '../../../application/list-all-route-userCase';



const app : Express =  express();
app.use(express.json());

const routeRepo = new RouteInMemory();

app.post('/routes',async (req:Request, res:Response) => {

    const createUseCase = new CreateRouteUseCase(routeRepo);

    const output = await createUseCase.execute(req.body);

    console.log(output);

    res.status(201).json(output)

})

app.get('/routes',async (req:Request, res:Response) => {

    const listAllUseCause = new ListAllRouteUseCase(routeRepo);

    const output = await listAllUseCause.execute();

    res.json(output)

})


app.listen(3333,()=>{
    console.log('Servidor Rodando na porta 3333')
})