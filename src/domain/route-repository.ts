import { Route } from './route-entity';


//Adaptador
export interface RouteRepositoryInterface{
    insert (route:Route) : Promise<void>
    findAll():Promise<Route[]>
}