import { useState } from "react"




export default function Contact() {
    const [detail, setDetail] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    })


    function inputChange(event) {
        console.log(event);
        const { name, value } = event.target

        setDetail(prev => ({
            ...prev,
            [name]: value
        }))
    }
    console.log(detail);

    function formSubmit(event) {
        event.preventDefault();
        alert(`Thankyou ${detail.fullname}`)
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
                <div className="container contact-div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter you name" name="fullname" value={detail.fullname} onChange={inputChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                                    <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Phone" name="phone" value={detail.phone} onChange={inputChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" name="email" value={detail.email} onChange={inputChange} />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={detail.message} onChange={inputChange}></textarea>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="sumbit">Submit form</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}