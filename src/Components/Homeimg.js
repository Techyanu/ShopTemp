import React from 'react';
import HomeingStyle from '../Style/HomeingStyle.css'

const data = [
    {
        id: '1',
        cat: 'Free Shipping',
        txt: 'Free Shipping on all Order',
        src: 'https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png'
    },
    {
        id: '2',
        cat: 'Support 24/7',
        txt: 'Free Shipping on all Order',
        src: 'https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png'
    },
    {
        id: '3',
        cat: 'Money Return',
        txt: 'Free Shipping on all Order',
        src: 'https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png'
    },
    {
        id: '4',
        cat: 'Order Discount',
        txt: 'Free Shipping on all Order',
        src: 'https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png'
    },
]

const Homeimg = () => {
    return (
        <div className='fluid-container'>
            <div className='row justify-content-center' style={{ background: '#f0e0ff' }}>
                <div className='col-sm-6 txtcls' data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: '90px', height: 'auto', width: '500px', }}>
                    <span className='smt'>Smart Products</span>
                    <h2 className='textstyle'>Winter Offer 2024 Collection</h2>
                    <button type="button" class="slidbtn">shop now</button>
                </div>

                <div className='col-sm-5 mt-5' data-aos="fade-up" 
                    data-aos-duration="1000">
                    <img src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
                        className='imgstyle'
                    />
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    {data.map(item => (
                        <div className='col-md-3'>
                            <div className='d-flex'>
                                <img src={item.src}
                                    className='listimg'
                                />
                                <div className='txt'>
                                    <h6>{item.cat}</h6>
                                    <p style={{ fontSize: '12px' }}>{item.txt}</p>
                                </div>
                            </div>

                        </div>



                    ))}

                </div>
            </div>


        </div>
    )
}

export default Homeimg;