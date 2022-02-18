import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cbList=[];
  selectedList=[];
  totalSelected = 0;
  constructor(
    private apiService: ApiserviceService
  ) {}

  ngOnInit(){
    this.senaraiYuran();
  }

  senaraiYuran(){
    const jsonData = {
      "txtKp":"051130060184",
      "txtTahun":"2021",
      "txtJenis":"2"
    };

    this.apiService.post('semakekspressAPI.php',jsonData).subscribe((res: any)=>{
      console.log(res);
      res.forEach(value => {
        this.cbList.push({
          itemKenaanId: value.kenaan_id,
          itemKet: value.item_ket,
          itemKenaan: value.item_kenaan,
          selected: false,
        });
      });
    });

  }

  onChange(i){

    if(this.cbList[i].selected){
      this.cbList[i].selected=false;
      this.totalSelected = this.totalSelected - parseInt(this.cbList[i].itemKenaan);
    }else{
      this.cbList[i].selected=true;
      this.totalSelected = this.totalSelected + parseInt(this.cbList[i].itemKenaan);
    }


    console.log(this.cbList);
  }

  bayaran(){
    this.selectedList = [];
    this.cbList.forEach(value=>{
      if(value.selected){
        this.selectedList.push({
          itemKenaanId: value.itemKenaanId,
          itemKet: value.itemKet,
          itemKenaan: value.itemKenaan
        });
      }
    });

    const dataJson = {
      selectedList: this.selectedList,
      total: this.totalSelected
    };

    console.log(this.selectedList);

  }
}
