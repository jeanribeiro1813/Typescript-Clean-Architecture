export type LatLng = {lat:number, long:number}

export type RouteProps = {
     title:string,
      startPosition:LatLng,
      endPoints:LatLng,
      points?:LatLng[]
}

//Eu ter definido poinst como não obrigatorio , meu construtor exige uma regra
export class Route{
    public props:Required<RouteProps>
    constructor(props:RouteProps){

        // o props vai receber todo o props , e se tiver points vai receber points ou [] vazio
        this.props = {
            ...props,
            points:props.points || []
        }
    }


    //nunca utilizar set fora da class , se for fora é metodo
 

    updateTitle(title:string):void{
        this.title = title  
    }

    updatePosition(startPosition:LatLng, endPosition:LatLng){

        this.startPosition = startPosition
        this.endPosition = endPosition
    }

    get title (){
        return this.props.title 
    }

    private set title(value:string){
        this.props.title = value
    }
    
    get startPosition (){
        return this.props.startPosition 
    }

    private set startPosition(value:LatLng){
        this.props.startPosition = value
    }
    

    get endPosition (){
        return this.props.endPoints 
    }

    private set endPosition(value:LatLng){
        this.props.endPoints = value
    }
}

