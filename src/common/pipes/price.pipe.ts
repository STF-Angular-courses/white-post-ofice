import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyEnum} from '../custom-types/currency-enum';

@Pipe({
  name: 'currency'
})
export class PricePipe implements PipeTransform {

  transform(value: string, currency: CurrencyEnum ): string {
    switch (currency) {
      case CurrencyEnum.USD: return String.fromCharCode(	0x24) + value;
      case CurrencyEnum.UAH: return String.fromCharCode(0x20B4) + value;
      case CurrencyEnum.MXN: return String.fromCharCode(0x20B1) + value;
      case CurrencyEnum.GBP: return String.fromCharCode(0xA3) + value;
      case CurrencyEnum.EU: return  String.fromCharCode(0x20AC) + value;
      default: break;
    }
  }

}
