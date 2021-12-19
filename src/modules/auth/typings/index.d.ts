declare namespace auth{
  interface submitLoginPayload{
    username:string
    password:string
  }

  interface userInfo{
    addressBook:addressData[]
    dob:string
    email:string
    fullName:string
    gender:string
    phoneNumber:number
    roles:string[]
  }

  interface addressData{
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
