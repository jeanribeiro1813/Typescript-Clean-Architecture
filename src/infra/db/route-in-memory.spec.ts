import { RouteProps, Route } from '../../domain/route-entity';
import { RouteInMemory } from './route-in-memory';
describe('RouteInMemoryRepository',()=>{
    
    it('Should insert a new route',async ()=>{
        const repository = new RouteInMemory()

        const routeProps:RouteProps = {
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPosition: {lat:2,long:2},

        }

        const route = new Route(routeProps)

        repository.insert(route)

        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([route])


    })
})