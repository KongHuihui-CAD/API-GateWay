import { Component, OnInit } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { CombineapiService } from './combineapi.service';
import { Pagination } from '../pagination/pagination';

declare var $: any;
@Component({
  selector: 'app-combine-api',
  templateUrl: './combine-api.component.html',
  styleUrls: ['./combine-api.component.scss']
})
export class CombineApiComponent implements OnInit {

  combinationAPI = [];//所有的组合API信息
  selectedApi;//点击选择的组合API
  ComAPI;//组合API的参数
  deleteComAPIMsg;//删除组合API传参
  offapi;//下线api传值
  constructor(
    public combinationService: CombineapiService,
    public http: Http
  ) {
  }
  public pagination: Pagination = Pagination.defaultPagination;

  ngOnInit() {
    this.combinationService.getAllCombinationAPI().subscribe(res => {
      var data = eval('(' + res['_body'] + ')');
      if (data.result == true) {
        this.combinationAPI = data.datum;
        console.log(this.combinationAPI);
         // 分页
      this.initList();
      this.pagination.changePage = (() => {
        this.initList();
      });
      }
    });


  };
  onSelect(api): void {
    this.selectedApi = api;
    console.log(this.selectedApi["argument"]);
    this.ComAPI = this.selectedApi["argument"];
  }
  deleteCombinationAPI(api) {
    this.deleteComAPIMsg = api;
    console.log(this.deleteComAPIMsg.name);
  }
  deleteYes() {
    let params = new URLSearchParams();
    params.append('name', this.deleteComAPIMsg.name);
    let datatosend = params.toString()
    this.http.get('http://10.108.210.102:30000/apis/delete', { search: datatosend }).map(res => res.json()).subscribe(res => {
      console.log(res);
      if (res.result == true) {
        $("#deleteModal").modal('hide');
        $("#" + this.deleteComAPIMsg.name).remove();
      }
      else {
        alert('删除出现错误！');
      }
    })
  }
  //发布
  publish(api) {
    let params = new URLSearchParams();
    params.append('name', api.name);
    let datatosend = params.toString()
    this.http.get('http://10.108.210.102:30000/apis/online', { search: datatosend }).map(res => res.json()).subscribe(res => {
      console.log(res);
      if (res.result == true) {
        alert('组合API发布成功！');
        api.status = '已发布';
      }
      else {
        alert('发布出现错误！');
      }
    })
  }
  off(api){
    this.offapi = api;
  }
  //下线
  offline() {
    let params = new URLSearchParams();
    params.append('name', this.offapi.name);
    let datatosend = params.toString()
    this.http.get('http://10.108.210.102:30000/apis/offline', { search: datatosend }).map(res => res.json()).subscribe(res => {
      console.log(res);
      if (res.result == true) {
        this.offapi.status = '已下线';
        $("#myModal").modal('hide');
      }
      else {
        alert('下线出现错误！');
      }
    })
  }
   // 分页
   private initList(): void {
    let url: string = 'your-url';
    let page = this.pagination.currentPage - 1;
    this.pagination.totalItems = this.combinationAPI.length;
    // alert(this.api);
    let head = page * this.pagination.pageItems;
    let end = head + this.pagination.pageItems;
    this.combinationAPI = this.combinationAPI.slice(head, end);
  }

}
