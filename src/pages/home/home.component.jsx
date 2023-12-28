import React from "react";
import './home.style.scss';
import { Grid } from "@mui/material";
import{SlideShow} from '../../components/slideShow/slideShow.component';
import {Slider} from '../../components/slider/slider.component';


const Home=() => {
    const products=[
        {
            id:'12cvbghcudhuh8585kj',
            title:'کتانی نایک',
            shortDesc:'Nike',
            desc:"کتانی نایک با بهترین کیفیت ",
            img:'/images/products/shoes/shoes3.jpg',
            price:'200',
            size:'42',
            brand:'nike',
            color:'black',
            weight:'0.4',
            type:'cotton',
            discount:'10',
            group:'clothes',
            subGroup:'shoes',
        },
        {
            id:'11cvjjcudhuh85h5kj',
            title:'کتانی آدیداس',
            shortDesc:'addidas',
            desc:"کتانی آدیداس با بهترین کیفیت",
            img:'/images/products/shoes/shoes2.jpg',
            price:'220',
            size:'43',
            brand:'adidas',
            color:'white',
            weight:'0.4',
            type:'cotton',
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
        },
        {
            id:'15cvhjhhdhuh545kj',
            title:'تیشرت ترک',
            shortDesc:'T-shirt',
            desc:"تیشرت های ترک با کیفیت",
            price:'300',
            size:'xl',
            brand:'coco',
            color:'green',
            weight:'180',
            type:'cotton',
            discount:'15',
            group:'clothes',
            subGroup:'shirts',
        },
        {
            id:'156cvbghchh8585kj',
            title:'تیشرت نایک',
            shortDesc:'T-shirt',
            desc:"تیشرت ترک",
            img:'/images/products/shirts/shirt2.jpg',
            price:'270',
            size:'m',
            brand:'nike',
            color:'yellow',
            weight:'110',
            type:'cotton',
            discount:'0',
            group:'clothes',
            subGroup:'shirts',
        },
        {
            id:'19cvbhjjhuh585kj',
            title:'جین ترک',
            shortDesc:'jean',
            desc:"شلوار جین با کیفیت عالی",
            img:'/images/products/jean/jean1.jpg',
            price:'200',
            size:'36',
            brand:'nike',
            color:'blue',
            weight:'260',
            type:'jean',
            discount:'20',
            group:'clothes',
            subGroup:'jean',
        },
        {
            id:'168vbgg98kj',
            title:'جین آبی',
            shortDesc:' jean',
            desc:"شلوار جین با کیفیت عالی",
            img:'/images/products/jean/jean2.jpg',
            price:'350',
            size:'40',
            brand:'nike',
            color:'blue',
            weight:'260',
            type:'jean',
            discount:'15',
            group:'clothes',
            subGroup:'jean',
        },
    ];
    const newProducts=[
        {
            id:'12cvbghcudhuh8585kj',
            title:'کتانی نایک',
            shortDesc:'Nike',
            desc:"کتانی نایک با بهترین کیفیت ",
            img:'/images/products/shoes/shoes3.jpg',
            price:'200',
            size:'42',
            brand:'nike',
            color:'black',
            weight:'0.4',
            type:'cotton',
            discount:'10',
            group:'clothes',
            subGroup:'shoes',
        },
        {
            id:'11cvjjcudhuh85h5kj',
            title:'کتانی آدیداس',
            shortDesc:'addidas',
            desc:"کتانی آدیداس با بهترین کیفیت",
            img:'/images/products/shoes/shoes2.jpg',
            price:'220',
            size:'43',
            brand:'adidas',
            color:'white',
            weight:'0.4',
            type:'cotton',
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
        },
        {
            id:'15cvhjhhdhuh545kj',
            title:'تیشرت ترک',
            shortDesc:'T-shirt',
            desc:"تیشرت های ترک با کیفیت",
            price:'300',
            size:'xl',
            brand:'coco',
            color:'green',
            weight:'180',
            type:'cotton',
            discount:'15',
            group:'clothes',
            subGroup:'shirts',
        },
        {
            id:'156cvbghchh8585kj',
            title:'تیشرت نایک',
            shortDesc:'T-shirt',
            desc:"تیشرت ترک",
            img:'/images/products/shirts/shirt2.jpg',
            price:'270',
            size:'m',
            brand:'nike',
            color:'yellow',
            weight:'110',
            type:'cotton',
            discount:'0',
            group:'clothes',
            subGroup:'shirts',
        },
        {
            id:'19cvbhjjhuh585kj',
            title:'جین ترک',
            shortDesc:'jean',
            desc:"شلوار جین با کیفیت عالی",
            img:'/images/products/jean/jean1.jpg',
            price:'200',
            size:'36',
            brand:'nike',
            color:'blue',
            weight:'260',
            type:'jean',
            discount:'20',
            group:'clothes',
            subGroup:'jean',
        },
        {
            id:'168vbgg98kj',
            title:'جین آبی',
            shortDesc:' jean',
            desc:"شلوار جین با کیفیت عالی",
            img:'/images/products/jean/jean2.jpg',
            price:'350',
            size:'40',
            brand:'nike',
            color:'blue',
            weight:'260',
            type:'jean',
            discount:'15',
            group:'clothes',
            subGroup:'jean',
        },
    ]
         const sallerProducts=[
            {
                id:'12cvbghcudhuh8585kj',
                title:'کتانی نایک',
                shortDesc:'Nike',
                desc:"کتانی نایک با بهترین کیفیت ",
                img:'/images/products/shoes/shoes3.jpg',
                price:'200',
                size:'42',
                brand:'nike',
                color:'black',
                weight:'0.4',
                type:'cotton',
                discount:'10',
                group:'clothes',
                subGroup:'shoes',
            },
            {
                id:'11cvjjcudhuh85h5kj',
                title:'کتانی آدیداس',
                shortDesc:'addidas',
                desc:"کتانی آدیداس با بهترین کیفیت",
                img:'/images/products/shoes/shoes2.jpg',
                price:'220',
                size:'43',
                brand:'adidas',
                color:'white',
                weight:'0.4',
                type:'cotton',
                discount:'0',
                group:'clothes',
                subGroup:'shoes',
            },
            {
                id:'15cvhjhhdhuh545kj',
                title:'تیشرت ترک',
                shortDesc:'T-shirt',
                desc:"تیشرت های ترک با کیفیت",
                price:'300',
                size:'xl',
                brand:'coco',
                color:'green',
                weight:'180',
                type:'cotton',
                discount:'15',
                group:'clothes',
                subGroup:'shirts',
            },
            {
                id:'156cvbghchh8585kj',
                title:'تیشرت نایک',
                shortDesc:'T-shirt',
                desc:"تیشرت ترک",
                img:'/images/products/shirts/shirt2.jpg',
                price:'270',
                size:'m',
                brand:'nike',
                color:'yellow',
                weight:'110',
                type:'cotton',
                discount:'0',
                group:'clothes',
                subGroup:'shirts',
            },
            {
                id:'19cvbhjjhuh585kj',
                title:'جین ترک',
                shortDesc:'jean',
                desc:"شلوار جین با کیفیت عالی",
                img:'/images/products/jean/jean1.jpg',
                price:'200',
                size:'36',
                brand:'nike',
                color:'blue',
                weight:'260',
                type:'jean',
                discount:'20',
                group:'clothes',
                subGroup:'jean',
            },
            {
                id:'168vbgg98kj',
                title:'جین آبی',
                shortDesc:' jean',
                desc:"شلوار جین با کیفیت عالی",
                img:'/images/products/jean/jean2.jpg',
                price:'350',
                size:'40',
                brand:'nike',
                color:'blue',
                weight:'260',
                type:'jean',
                discount:'15',
                group:'clothes',
                subGroup:'jean',
            },
        
         ];
    
    return(
       <> 
         <SlideShow/>
<Grid container item xs={12} justifyContent={'center'} alignItems={'center'}>
   <p>wellcome to home page</p>
   
    </Grid>        
     <Slider  loop={true} title="جدیدترین محصولات"  slides={newProducts}/>
     <Slider  loop={true} title="پرتکرارترین محصولات"  slides={products}/>
     <Slider  loop={true} title="پرفروش ترین محصولات"  slides={sallerProducts}/>
         </>
    );
}

export{Home};