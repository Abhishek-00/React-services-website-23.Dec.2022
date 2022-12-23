import Card from './Card'



export default function Service() {
    return (
        <>
            <div className="my-5 mb-5 ">
                <h1 className="text-center">Our services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?website'}
                                title={"Web development"}
                             />
                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?android'}
                                title={"Android development"}
                             />
                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?ios'}
                                title={"Ios development"}
                             />
                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?digital'}
                                title={"Digital marketing"}
                             />
                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?marketing'}
                                title={"Product Marketing"}
                             />
                            <Card 
                                img={'https://source.unsplash.com/random/250x250/?website'}
                                title={"Website"}
                             />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}