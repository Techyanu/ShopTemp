import React from 'react'
import BlogStyle from '../Style/BlogStyle.css'


const Elmemnts = [
    {
        id: '1',
        txt: 'A guide to latest trends',
        by: 'by Admin',
        url: 'https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg',

    },
    {
        id: '2',
        txt: 'A guide to latest trends',
        by: 'by Admin',
        url: 'https://flone.jamstacktemplates.dev/assets/img/blog/blog-2.jpg'
    },
    {
        id: '3',
        txt: 'A guide to latest trends',
        by: 'by Admin',
        url: 'https://flone.jamstacktemplates.dev/assets/img/blog/blog-3.jpg'
    },
]


const Ourblog = () => {
    return (
        <div className='container mt-5 con'>
            <h1>OUR BLOG</h1>

            <div className='row mt-5' data-aos="fade-up" data-aos-duration="2000">
                {
                    Elmemnts.map(item => (
                        <div className='col-md-4'>
                            <img src={item.url} className='img-fluid styleimg' />
                            <div className='him'>
                                <h5 className="mt-3 txtS">A guide to latest trends</h5>
                                <p className="mt-3 txtA">By Admin</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Ourblog;