import { Component, OnInit ,Output,NgModule} from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass} from '@angular/common';
import { Observable } from '../../../../node_modules/rxjs';
import {FlowcontrolService} from './flowcontrol.service';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'app-flow-control',
  templateUrl: './flow-control.component.html',
  styleUrls: ['./flow-control.component.scss']
})
export class FlowControlComponent implements OnInit {
  public flowarray=[];
   //分页用
   flow_page;
  constructor(
    public http:Http,
    public FlowcontrolService:FlowcontrolService 
  ) { }

   //分页相关
   @Output()
   public pagination: Pagination = Pagination.defaultPagination;

  ngOnInit() {
    this.FlowcontrolService.getflowcontroldata().subscribe((data)=>{
     //this.http.get('http://36.155.126.15:40000/viewMaxVisitLimiting').map(res=>res.json()).subscribe(data=>{
      if(data._result==true){
        for (let index = 0; index < Object.keys(data._datum).length; index++) {
          data._datum[Object.keys(data._datum)[index]].name = Object.keys(data._datum)[index]
          console.log(data._datum[Object.keys(data._datum)[index]]);
          this.flowarray.push(data._datum[Object.keys(data._datum)[index]]);
        }
         //分页
         this.initList();
         this.pagination.changePage = (() => {
           this.initList();
         });
      }
    })
  }
  private initList(): void {
    let page = this.pagination.currentPage - 1;
    this.pagination.totalItems = this.flowarray.length;
    let head = page * this.pagination.pageItems;
    let end = head + this.pagination.pageItems;
    this.flow_page = this.flowarray.slice(head, end);
  }
  //点击api编辑
  public editapiflow($event,items):void{
      //$("#apiname").val($($event.target).parents("tr").children('td').eq(0).text());
      $("#apiname").val(items.name);
      $("#apiunit").val($($event.target).parents("tr").children('td').eq(1).text());
      $("#apiflowcontrol1").val($($event.target).parents("tr").children('td').eq(2).text());
      $("#apiflowcontrol2").val($($event.target).parents("tr").children('td').eq(3).text());
      $("#apiflowcontrol3").val($($event.target).parents("tr").children('td').eq(4).text());
      // $("#apicreatetime").val($($event.target).parents("tr").children('td').eq(5).text()); 
      // $("#apidescription").val($($event.target).parents("tr").children('td').eq(4).text());
  }

  //编辑确定
 public updatesure(apiname,apiunit,apiflowcontrol1,apiflowcontrol2,apiflowcontrol3):void{
   //alert($("#apiname").val());
  let params = new URLSearchParams();
  
  params.append('apiName',apiname);
  params.append('level1Limit',apiunit);
  params.append('level2Limit',apiflowcontrol1);
  params.append('level3Limit',apiflowcontrol2);
  params.append('level4Limit',apiflowcontrol3);

  let datatosend = params.toString();

  this.http.get('/flow/changeLiveApiLimitingMap',{search:datatosend}).map(res=>res.json()).subscribe(res =>{
      if(res["_result"]==true){
        alert(res._reason);
        this.http.get('/flow/viewMaxVisitLimiting').map(res=>res.json()).subscribe(data=>{
          //this.flowarray=data.data;
          if(data._result==true){
            if(data._result==true){
              this.flowarray=[];
              for (let index = 0; index < Object.keys(data._datum).length; index++) {
                data._datum[Object.keys(data._datum)[index]].name = Object.keys(data._datum)[index]
                console.log(data._datum[Object.keys(data._datum)[index]]);
                this.flowarray.push(data._datum[Object.keys(data._datum)[index]]);
              }
            }
          }
        })
      }
  })
 }
}


