export interface FooterColumn{
    title:string,
    text:string[],
}
export type FooterDetails= FooterColumn;

export interface FooterData{
    columns:FooterDetails[];
}
export const footerData:FooterData={
    columns:[
      
        {title:"Home",text:["Why Us","•","About Us","•","Testimonials","•","FAQ’s"]},
        {title:"Products",text:["Menswear","•","Womenswear","•","Kidswear"]},  
    ]
}