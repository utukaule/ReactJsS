import React from 'react'
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>who we are?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>

            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>


            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>


            <div style={{
              animationDelay: "1s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>



          </article>
        </div>
      </div>

    </>
  )
}

export default Home