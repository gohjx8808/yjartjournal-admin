declare namespace auth{

  interface State{
    userInfo:userInfo
  }
  interface SubmitLoginPayload{
    username:string
    password:string
  }

  interface UserInfo{
    addressBook:addressData[]
    dob:string
    email:string
    fullName:string
    gender:string
    phoneNumber:number
    roles:RoleData
    uid:string
  }

  interface RoleData{
    admin:boolean
    customer:boolean
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
}
