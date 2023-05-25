import PortfolioPic from "../portfolio-pic.jpg";
import PhoneIcon from "../phone-icon2.png";
import EmailIcon from "../email-icon.png";
import AddressIcon from "../address-icon.png";
import WebsiteIcon from "../website-icon.png";
import FourRating from "../four-rating.png";
import ThreeRating from "../three-rating.png";

export default function Home() {
  return (
    <div>
      <div className="intro-container">
        <div className="img-container">
          <img
            src={PortfolioPic}
            alt="profile-image"
            height="500px"
            width="400px"
          />

          <ul className="contact-list">
            <li>
              <img src={PhoneIcon} height="30px" width="30px" />
              <b> +1 469-897-2790</b>
            </li>
            <li>
              <img src={EmailIcon} height="30px" width="30px" />
              <b> tamara.saadeh95@gmail.com</b>
            </li>
            <li>
              <img src={AddressIcon} height="30px" width="30px" />
              <b>
                {" "}
                5109 Rosewood ln, Sachse TX, <span>75048</span>
              </b>
            </li>
            <li>
              <img src={WebsiteIcon} height="30px" width="30px" />
              <a href="https://www.linkedin.com/in/tamara-saadeh-83483818b/" target="_blank">
              <b>My linkedin</b></a>
            </li>
          </ul>

          <p className="skills-header">Professional Skills</p>
          <ul id="pro-skills">
            <li>Project management</li>
            <li>Computer Proficiency</li>
            <li>Communication Skills</li>
            <li>Leadership Experience</li>
            <li>Problem-solving Abilities</li>
          </ul>

          <p className="skills-header">Technical Skills</p>
          <ul id="tech-skills">
            <li>
              Java Script <img src={FourRating} width="60px" />
            </li>
            <li>
              Type Script <img src={FourRating} width="60px" />
            </li>
            <li>
              HTML/CSS <img src={FourRating} width="60px" />
            </li>
            <li>
              React.js <img src={FourRating} width="60px" />
            </li>
            <li>
              Node.js <img src={FourRating} width="60px" />
            </li>
            <li>
              Microsoft Suite <img src={FourRating} width="60px" />
            </li>
            <li>
              JIRA <img src={FourRating} width="60px" />
            </li>
            <li>
              Confluence <img src={FourRating} width="60px" />
            </li>
            <li>
              Java <img src={ThreeRating} width="60px" />
            </li>
            <li>
              C# <img src={ThreeRating} width="60px" />
            </li>
          </ul>
        </div>

        <div class="main-container">
          <div class="banner">
            <p id="who-i-am">WHO I AM</p>
            {/* <h3>
              <span id="i-am">
                An emerging full-stack developer based in Dallas TX, looking to
                integrate and grow my experience in the technological world
              </span>
            </h3> */}

            <div class="background-container">
              <p id="background">
                My background is in both business and IT, with a degree in
                Computer science and 2+ years experience as a program manager.
                <br />
                <br />I have hands-on experience in creating robust web
                applications and possess an extensive knowledge in a wide array
                of front-end programming languages such as Javascript,
                Typescript, HTML, CSS and object-oriented programming such as
                Java, C# and C++
              </p>

              <p id="background2">
                I am regarded for my work ethic and conflict resolution, and I
                thrive in working in a fast-paced, high-tech environment with
                cross-functional teams using Agile methodology. I'm driven by my
                desire for usability and efficiency, starting with a<br />
                user-centered approach of understanding people's behaviors and
                <br />
                translating them into code
              </p>
            </div>
          </div>

          {/* <!--EUDCAION SECTION--> */}
          <div className="main-edu-exp-container">
            <h1 id="edu-header">Education</h1>

            <div class="edu-exp-container">
              <p class="edu-paragraphs">
                Per Scholas Charlotte, Charlotte, NC
                <br />
                Higher-level professional education in Software Engineering
              </p>

              <p>June 2023</p>
            </div>

            <div class="edu-exp-container">
              <p class="edu-paragraphs">
                Dallas College, Dallas, TX
                <br />
                Azure Fundamentals - Cloud computing
              </p>

              <p>August 2022</p>
            </div>

            <div class="edu-exp-container">
              <p class="edu-paragraphs">
                University of North Carolina at Charlotte, Charlotte, NC
                <br />
                Bachelor's Honor Degree in Computer Science (GPA of 3.6)
              </p>

              <p>May 2019</p>
            </div>

            {/* <!--EXPERIENCE SECTION--> */}

            <h1 id="exp-header">Experience</h1>

            <div class="edu-exp-container">
              <p class="exp-paragraphs">
                <b>Elite Medical Research</b>, Dallas, TX (freelance position)
                <br />
                <i>Jr. Data Analyst</i>
              </p>

              <p>May 2022 - January 2023</p>
            </div>

            <div>
              <article>
                <ul class="exp-paragraphs">
                  <li>
                    Investigated key drivers for dynamic optimization of data
                    quality
                  </li>
                  <li>
                    Conducted ad hoc “back of the envelope” analyses to quickly
                    inform critical business decisions
                  </li>
                  <li>
                    Collaborated with a team to oversee Power BI dashboard
                    development and maintenance; supporting various
                    <br />
                    data analytics projects to drive decision-making and results
                  </li>
                </ul>
              </article>
            </div>

            <div class="edu-exp-container">
              <p class="exp-paragraphs">
                <b>Planning Mode LLC</b>, Dallas, TX (Part-time position)
                <br />
                <i>Accounting Associate</i>
              </p>
              <p>May 2022 - January 2023</p>
            </div>

            <div>
              <article>
                <ul class="exp-paragraphs">
                  <li>Supervised and audited company transaction details</li>
                  <li>
                    Created and compiled comprehensive financial reports to
                    reflect company's spending
                  </li>
                  <li>
                    Collaborated with team members to implement a creative
                    analytical, process for system
                    <br />
                    solutions that assisted in company's continuous growth,
                    including event planning and office-related tasks
                  </li>
                </ul>
              </article>
            </div>

            <div class="edu-exp-container">
              <p class="exp-paragraphs">
                <b>International Leadership of Texas</b>, Richardson, TX
                <br />
                <i>HR Associate and Assistant</i>
              </p>

              <p>February 2022 - May 2022</p>
            </div>

            <div>
              <article>
                <ul class="exp-paragraphs">
                  <li>
                    Maintained HR information database to ensure employee
                    information was accurate,
                    <br />
                    current, and reliable
                  </li>
                  <li>
                    Reconciled job descriptions with position control to ensure
                    that there is a job
                    <br />
                    description for every job.{" "}
                  </li>
                  <li>
                    Processed new hire paperwork including criminal history
                    information, references,
                    <br />
                    and other application materials.
                  </li>
                </ul>
              </article>
            </div>

            <div class="edu-exp-container">
              <p class="exp-paragraphs">
                <b>Arab Bank PLC</b>, Amman, Jordan
                <br />
                <i>IT Senior Associate</i>
              </p>

              <p>November 2019 - January 2022</p>
            </div>

            <div>
              <article>
                <ul class="exp-paragraphs">
                  <li>
                    Performed administrative functions on project management
                    websites for the IT department,
                    <br />
                    such as JIRA, Confluence, Open Project.
                  </li>
                  <li>
                    Provided direct administrative support to multiple IT
                    project managers and team leads,
                    <br />
                    including calendar management, scheduling, and expense
                    reports
                  </li>
                  <li>
                    Provided PowerPoint presentations and website orientations
                    for new employees, which included subjects related
                    <br />
                    to onboarding and admission processes.{" "}
                  </li>
                  <li>
                    Traversed and worked between the business and IT spectrum
                    where I used database queries
                    <br />
                    to close incoming customer tickets
                  </li>
                  <li>
                    Maintained employee data and kept updated accounts of all
                    employment records
                  </li>
                  <li>
                    Tracking and providing guidance to employees and management
                    on timesheets, leaves, and payroll.
                  </li>
                  <li>
                    Prepared correspondence, forms, and reports according to
                    district standards and requirements.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
