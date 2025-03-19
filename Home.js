import img1 from './img/img1.jpg'
import './Home.css'
const Home =() => {
    return (
        <div className="container">
            <div className="part1">
               <div className='text'>
               <h1>FOR ALL YOUR <br></br>FURNITURE NEEDS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt quasi neque facilis quos repellendus fugiat doloremque quas necessitatibus, accusantium dolorum exercitationem quidem! Dignissimos odio amet numquam explicabo tenetur corporis!</p>
                <button  className='btn1'>ContactUs</button> <button className='btn2'>AboutUs</button>
               </div>
            </div>
            <div className="part2">
                <div className='img-con'><img src={img1}></img></div>
            </div>
        </div>
    )
}
export default Home;