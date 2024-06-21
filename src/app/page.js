/*
@author Sean Fu <fuy0116@gmail.com>
*/

'use client';
import Link from "next/link";
import { useState,useEffect } from "react";
import Image from "next/image";
import CustomCard from './components/Card'
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer,
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";
import AutoSizeImage from "./components/AutoSizeImage";

export default function Home() {
  const [items,setItems] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);


  return (
    <>
    <div className="bg-cyan-800">
      <div className="container mx-auto">
      <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
      
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">YunTech Travel</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">交通</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-white">
            景點
          </NavbarLink>
          <NavbarLink href="#" className="text-white">關於我們</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
      </div>
    </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <AutoSizeImage src="/banner/pic2.jpg" alt="由 白襪 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129500844"width={800} height={600} />
          <AutoSizeImage src="/banner/pic3.jpg" alt="由 LiCheng Shih - https://www.flickr.com/photos/papilioshih/52345866635/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129989689"width={800} height={600} />

        </Carousel>
      </div>

      <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          { items.map((item, index) => 
            <CustomCard item={item} key={index}/>   
          )}
        </div>
      </div>
      

      <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
    </>
  );
}