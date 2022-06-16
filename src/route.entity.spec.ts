import { getTokenSourceMapRange } from "typescript"
import { Route, RouteProps } from "./route.entity"

describe('Route test',()=>{

    test('constructor',()=>{

        let routeProps:RouteProps = {
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPoints: {lat:2,long:2},

        }
        let route= new Route(routeProps)

        expect(route.props).toStrictEqual({...routeProps,points:[]})

         routeProps = {
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPoints: {lat:2,long:2},
            points:[
                {lat:32,long:12}
            ]

        }
        route= new Route(routeProps)

        expect(route.props).toStrictEqual({...routeProps,points:[
            {lat:32,long:12}
        ]})



    })

    it('updateTitle method',()=>{


        const routeProps:RouteProps = {
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPoints: {lat:2,long:2},

        }

        const route= new Route(routeProps)

        route.updateTitle('Title update')

        expect(route.title).toBe('Title update')

    })

    it('updatePosition method',()=>{


        const routeProps:RouteProps = {
            title:'Minha Rota',
            startPosition : {lat:0,long:1},
            endPoints: {lat:2,long:2},

        }

        const route= new Route(routeProps)

        const startPosition = {lat:10,long:20}

        const endPosition = {lat:30,long:40}

        route.updatePosition(startPosition,endPosition)

        expect(route.startPosition).toBe(startPosition)
        expect(route.endPosition).toBe(endPosition)

    })

})