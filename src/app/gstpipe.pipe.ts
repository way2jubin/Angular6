import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'gstpipe'
})
export class GstpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(args);
    let total = value + (value*(args/100));
    //let obj = new CurrencyPipe('fr')
    //console.log(obj.transform(total,'INR'))
    //return 'Rate: '+value + ', GST: '+(value*(args/100))+' Total: '+total;
    return {'gst':(value*(args/100)),'price':total};
    //return [10,11,12]
  }

}
