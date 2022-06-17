import { RouteInMemory } from "../infra/db/route-in-memory"
import { CreateRouteUseCase } from "./create-route-userCase"

describe('CreateRouteUserCase',()=>{
    
    it('Should create a new route',async ()=>{
        
        const repository = new RouteInMemory()

        const createuserCase = new CreateRouteUseCase(repository)

        const output = await createuserCase.execute({
            
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPosition: {lat:2,long:2},
        })

        expect(repository.items).toHaveLength(1)
        expect(output).toStrictEqual({
            id:repository.items[0].id,
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPosition: {lat:2,long:2},
            points:[]
        })


    })
})