import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div className="sourceContainer" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className="badge rounded-pill bg-danger">{source} </span>
                </div>
                <img src={!imgUrl ? "https://www.livemint.com/lm-img/img/2024/01/22/1600x900/Ayodhya_Ram_Mandir_live_updates_1705939266035_1705939266455.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text" style={{ color: 'blue' }} ><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

                </div>
            </div>
        </div>
    )
}

export default NewsItem
