import aboutPic from '../about-pic.jpg';


export default function About() {


    return (
        <div className="about">
        <p style={{color: "white", display: "inline-block", width: "500px"}}>
                My background is in both business and IT, with a degree in
                Computer science and 2+ years experience as a program manager.
                I have hands-on experience in creating robust web
                applications and possess an extensive knowledge in a wide array
                of front-end programming languages such as Javascript,
                Typescript, React, Vue, HTML, CSS and object-oriented programming such as
                Java, C# and C++

                <br/><br/>I recently graduated from Per Scholas Technical School
                with a Certificate of Completion and was rewarded with a Certificate of Core Values. During
                my time there, I have helped guide and tutor my peers throughout the course by helping them understand
                the core concepts of programming and front-end frameworks as well as assist them in course projects outside of class time.
                <br/><br/> I'm driven by my desire for usability and efficiency, starting with a
                user-centered approach of understanding people's behaviors and
                translating them into code

                <br/><br/>In my spare time, I like to play video games, read fantasy novels, and write works in progress (that I hope to finish one day!).
                You can always find me sitting on my couch, feet up with my glorious two cats and a cup of hot coffee.
                </p>
        <br />
        <img
          src= {aboutPic}
          alt="profile"
          width="500px"
          className='image'
        />





        </div>
    )
}
