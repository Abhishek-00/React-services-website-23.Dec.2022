import Template from './Template'
import img from '../assets/img.svg'


export default function Home() {
    return (
        <>
            <Template
                name='Grow your business with'
                imgsrc={img}
                details="We are the team of telented developer and help your business to grow "
                visit='/service'
                btnName="Get started"
            />
        </>
    )
}