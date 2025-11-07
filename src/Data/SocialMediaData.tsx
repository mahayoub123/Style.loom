import type { ReactNode } from "react";
import { LuInstagram } from "react-icons/lu";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
export interface Social {
icons:ReactNode;
}
export const media:Social[]=[
    {icons:<LuInstagram/>},
    {icons:<FaDribbble />},
    {icons:<FaTwitter />},
    {icons:<FaBehance />}
]
