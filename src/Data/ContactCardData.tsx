export interface ContactData{
    photo:string;
    icon:string;
    contactType:string;
    btnName:string;
}
export const contactCardData:ContactData[]=[
    {photo:"/assets/Images/icons/Icon (5).svg",icon:"/assets/Images/icons/email Icon.svg",contactType:"Email",btnName:"support@StyleLoom.com"},
    {photo:"/assets/Images/icons/Icon (6).svg",icon:"/assets/Images/icons/phone Icon.svg",contactType:"Phone",btnName:"+1 (555) 123-4567"},
    {photo:"/assets/Images/icons/Icon (7).svg",icon:"/assets/Images/icons/location Icon.svg",contactType:"Location",btnName:"Get Direction"}
]