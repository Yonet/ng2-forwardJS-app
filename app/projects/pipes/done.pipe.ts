/**
 * Created by yoneta on 2/13/16.
 */
import {Pipe} from 'angular2/core';
//import {PipeTransform} from "angular2/core";

@Pipe({
    name:'done'
})

export class DonePipe  {
    transform(v, args) { console.log('v', v);return v && v.filter((item) => item.status === 'Done'); }

}