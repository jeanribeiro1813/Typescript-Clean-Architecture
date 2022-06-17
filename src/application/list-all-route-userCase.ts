import { RouteRepositoryInterface } from '../domain/route-repository';
import { LatLng } from '../domain/route-entity';

//Uma unica Responsabilidade S - S.O.L.I.D
export class ListAllRouteUseCase{

    constructor(private routeRepo:RouteRepositoryInterface){}

    async execute():Promise<CreateRouteOutput>{
        
        
        const route =  await this.routeRepo.findAll()

        //convertendo a cada rota em json
        return route.map(r => r.toJson())


    }

}


//Coleção de Rotas
type CreateRouteOutput = {
    id: string
    title:string
    startPosition:LatLng
    endPosition:LatLng
    paths?:LatLng
}[]