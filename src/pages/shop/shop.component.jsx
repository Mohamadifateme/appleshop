import React from 'react';
import './shop.style.scss';
// import {Grid} from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/productCard/productCard.component';
import { ProductView } from '../../components/productView/productView.component';


const Shop=() => {

    const stock=[
    {
     
        id:'12cvbghcudhuh8585kj',
         qty:1000,
         buyQty:100,
    }
    ]


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
            quantity:1000,
            purchasedQty:0,
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
            quantity:1000,
            purchasedQty:0,
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
            quantity:1000,
            purchasedQty:0,
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
            quantity:1000,
            purchasedQty:0,
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
            quantity:1000,
            purchasedQty:0,
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
            quantity:1000,
            purchasedQty:0,
        },
    ];
    const {productId} = useParams();

    if(productId){
        const product = products.filter(product=>product.id === productId);
      return ( <ProductView product={product[0]} /> );
    }

    return (
        <div className='shop'>
           {
            products.map((product,index)=>(
                <ProductCard key={index}  product={product} />
            ))
           }
        </div>
    )
}

export {Shop};