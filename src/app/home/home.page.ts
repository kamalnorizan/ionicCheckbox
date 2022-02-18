import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cbList=[];

  constructor(
    private apiService: ApiserviceService
  ) {}

  senaraiYuran(){
    const jsonData = {
      "txtKp":"051130060184",
      "txtTahun":"2021",
      "txtJenis":"2"
    };

    this.apiService.post('semakekspressAPI.php',jsonData).subscribe((res: any)=>{
      res.forEach(value => {
        this.cbList.push({
          itemId: value.item_id,
          itemKet: value.item_ket,
          itemKenaan: value.item_kenaan,
          selected: false,
        });
      });
    });

  }
}
