declare namespace user{
  interface UserData{
    addressBook:AddressData[]
    dob:string
    email:string
    fullName:string
    gender:string
    phoneNumber:number
    roles:RoleData
    uid:string
  }

  interface AddressData{
    addressLine1:string
    addressLine2:string
    city:string
    country:string
    defaultOption:string
    email:string
    fullName:string
    outsideMalaysiaState:string
    phoneNumber:number
    postcode:number
    state:string
    tag:string
  }

  interface RoleData{
    admin:boolean
    customer:boolean
  }
}
