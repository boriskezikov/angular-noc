import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ResponseData, Customer, Service, CustomerStatus, CustomerDto } from './Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}
  private herokuUrl = "https://nnsu-nc.herokuapp.com/customers/?projection=plain"
  customerList: Array<Customer>
  customerDtos: CustomerDto[] = []

  ngOnInit(): void {
    this.http.get<ResponseData>(this.herokuUrl).subscribe(success => {
      this.customerList = this.getCustomers(success)
      this.customerList.forEach((customer) => {
        this.customerDtos.push(this.mapCustomer(customer))
      })
    },
      error => {})
  }

  private getCustomers(serverResp: ResponseData): Array<Customer> {
    return serverResp.content
  }

  private mapCustomer(customer:Customer):CustomerDto{
    var customerDto:CustomerDto = new CustomerDto()
    customerDto.id = customer.id
    customerDto.content =customer.content
    customerDto.firstName = customer.firstName
    customerDto.lastName = customer.lastName
    customerDto.phoneNumber = customer.phoneNumber
    customerDto.services = customer.services
    if (customer.customerStatus.id == "1"){
      customerDto.customerStatus = true
    }
    else if(customer.customerStatus.id =="2"){
      var tmp = false
      customer.services.forEach(x=>{
        tmp = (x.serviceStatus.id == "1")
      })
      customerDto.customerStatus = tmp
    }
    return customerDto
  }

}
