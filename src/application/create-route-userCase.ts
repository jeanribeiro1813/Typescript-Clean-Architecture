import { RouteRepositoryInterface } from '../domain/route-repository';
import { LatLng, Route } from '../domain/route-entity';

//Uma unica Responsabilidade S - S.O.L.I.D
export class CreateRouteUseCase{

    constructor(private routeRepo:RouteRepositoryInterface){}

    async execute(input:CreateRouteInput):Promise<CreateRouteOutput>{
        
        //Operações em cima da entidade
        const route =  new Route(input)

        await this.routeRepo.insert(route)

        return route.toJson();


    }

}

type CreateRouteInput = {
    title:string
    startPosition:LatLng
    endPosition:LatLng
    paths?:LatLng
}

type CreateRouteOutput = {
    id: string
    title:string
    startPosition:LatLng
    endPosition:LatLng
    paths?:LatLng
}