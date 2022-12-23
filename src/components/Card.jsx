import { NavLink } from "react-router-dom";




export default function Card(props) {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">

                <div className="card" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title font-weight-bold">{props.title}</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora voluptatibus quos saepe autem, rem odit voluptas dignissimos aspernatur facilis.</p>
                        <NavLink href="#" className="card-btn btn btn-primary">More details</NavLink>
                    </div>
                </div>

            </div>

        </>
    )
}