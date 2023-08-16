import React from 'react';
import DailyStyle from '../Style/DailyStyle.css'

const arr = [

    {
        id: '1',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
        off: '-10%'
    },
    {
        id: '2',
        txt: 'Lorem ipsum fashion female top',
        price: '63',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
    },
    {
        id: '3',
        txt: 'Lorem ipsum fashion female top',
        price: '85',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
        off: '-15%'
    },
    {
        id: '4',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/28.jpg',
        off: '-5%'
    },
    {
        id: '5',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg',
    },
    {
        id: '6',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/4.jpg',
    },
    {
        id: '7',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/5.jpg',
        off: '-10%'
    },
    {
        id: '8',
        txt: 'Lorem ipsum fashion female top',
        price: '53',
        src: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg',
    },
]



const DailyDeal = () => {
    return (
        <>
            <div className=' mt-5 container text-center section'>
                <h1>DAILY DEALS!</h1>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    {arr.map(item =>
                        <div className='mt-3 col-sm-3' data-aos="fade-up" data-aos-duration="2000">
                            <img src={item.src}
                                className='img-fluid imgs'
                            />
                            <p style={{ fontSize: '13px' }}>{item.txt}</p>
                            <div className='strdiv'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star black"></span>
                                <span className="fa fa-star black"></span>
                            </div>
                            <h5 className='price'>${item.price}</h5>
                        </div>

                    )}

                </div>

            </div >
        </>
    )
}

export default DailyDeal;