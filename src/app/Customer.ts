export interface Customer {
    id: String
    firstName: String
    lastName: String
    phoneNumber: String
    content: Array<Customer>
    links: Array<Link>
    services: Array<Service>
    customerStatus: CustomerStatus


}
export interface Link {
    rel: String
    href: String
}

export interface ResponseData {
    links: Array<Link>
    content: Array<Customer>
}

export interface Service {
    id: String
    name: String
    serviceStatus: ServiceStatus
}
export interface ServiceStatus {
    id: String
    name: String

}
export interface CustomerStatus{
    id:String
    name:String
}
export class CustomerDto{
    id: String
    firstName: String
    lastName: String
    phoneNumber: String
    content: Array<Customer>
    links: Array<Link>
    services: Array<Service>
    customerStatus: boolean

    constructor(){
    }
}

