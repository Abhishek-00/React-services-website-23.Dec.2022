
import { NavLink } from 'react-router-dom'



export default function Template(props) {
    return (
        <>
            <section id="header">
                <div className="row header">

                    <div className="home-left col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1> {props.name} <strong className='brand-name'> 'DevCoders'</strong></h1>
                        <h3 className="my-3">{props.details}</h3>  
                        <h3 className="mt-0">{props.details2}</h3>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnName}</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} alt="" className="img-fluid animate" />
                    </div>


                </div>
            </section>
        </>
    )
}