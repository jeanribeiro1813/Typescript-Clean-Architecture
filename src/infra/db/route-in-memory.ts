import { RouteRepositoryInterface } from '../../domain/route-repository';
import { Route } from '../../domain/route-entity';


export class RouteInMemory implements RouteRepositoryInterface{
    items:Route[] = []

    async findAll(): Promise<Route[]> {
        
        return this.items
    }

    async insert(route: Route): Promise<void> {
        this.items.push(route)
    }

}