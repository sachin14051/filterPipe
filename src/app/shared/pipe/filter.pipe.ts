import { Pipe, PipeTransform } from "@angular/core";
import { iPlayer } from "../model/model";


@Pipe({
    name : "filter"
})

export class FilterPipe implements PipeTransform {
    transform(value:Array<iPlayer>, searchValue:string) :Array<iPlayer> {
        if(!value){
            return []
        }
        if(!searchValue){
            return value
        }
    
        let playersArray = value.filter(ele =>{
            return ele.name.toLowerCase().includes(searchValue.toLowerCase())
            || ele.team.toLowerCase().includes(searchValue.toLowerCase())
        })
        return playersArray
       
    }
}
