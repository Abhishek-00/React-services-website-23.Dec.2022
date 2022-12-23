import Template from './Template'
import img2 from '../assets/img2.svg'



export default function About() {
    return (
        <Template
            name='We are'
            details="Since 2016. "
            details2="More than 40 project delivered.  "
            imgsrc={img2}
            visit='/contact'
            btnName="Contact now"
        />
    )
}