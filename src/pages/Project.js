import LibraryProject from "../home-page.png";
import HangmanProject from "../example-of-playing-the-game.png";
import TodoProject from "../todo.png";
import StudentRegistry from '../student-registry.png';

export default function Projects() {

  //inline styles
  const links = {
    marginLeft: "20px"
  }

  const linkColor = {
    color: "#a5f3fc",
    padding: "20px",
  }
  const paragraph = {
    padding: "20px"
  }

  const backgroundColor = {
    borderRadius: "10px"
  }


  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2 projects">
        <div style={backgroundColor}>
          <img
            src={LibraryProject}
            alt="library-project-homepage"
            classname='zoom-in-out-box'
          ></img>
          <p style={paragraph}>
            This project emulates a simple library website that allows users to
            <br/>navigate books depending on genre, search for books and save them<br/>in
            their library profile
          </p>
          <p style={links}>
            Website link:{" "}
            <a
              href="https://library-app-tamara703.onrender.com/"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
          <p style={links}><br/>
            Github link:{" "}
            <a
              href="https://github.com/tamara-703/react-library-app"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
        </div>

        <div style={backgroundColor}>
          <img src={TodoProject} alt="todo-list-project" classname='zoom-in-out-box'></img>
          <p style={paragraph}>
            This project emulates a simple ToDo that allows the user to<br/>add/remove items from their list of todos
          </p>
          <p style={links}><br/>
            Website link:
            <a
              href="https://todo-tamara703.onrender.com/"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
          <p style={links}>
            Github link:
            <a
              href="https://github.com/tamara-703/Todo-List"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
        </div>

      <div style={backgroundColor}>
          <img src={HangmanProject} alt="hangman-project" classname='zoom-in-out-box'></img>
          <p style={paragraph}>
            This project recreate the classic hangman game in a simple webpage
            environment.<br/>It provides the user with an interface that allows them
            to interact with the game<br/>and selecting from three main difficulties
          </p>
          <p style={links}><br/>
            Website link:
            <a
              href="https://tamara-703.github.io/HangmanGame-Project/"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
          <p style={links}>
            Github link:
            <a
              href="https://github.com/tamara-703/HangmanGame-Project"
              target="_blank"
              style={linkColor}
            >
              here
            </a>
          </p>
        </div>

      <div style={backgroundColor}>
        <img src={StudentRegistry} alt="student-registry-project" classname='zoom-in-out-box'></img>
        <p style={paragraph}>
          This project is a simple example of a CRUD application that emitate<br/>an admin Student Registry that taps into a
          database using open source<br/>NoSQL environments such as MongoDB. Front end was developed using<br/>React JS, Node JS and CSS Tailwind while
          the back-end uses frameworks<br/>such as Express and Mongoose.
        </p><br/>
        <p style={links}>
          Website link:
          <a
            href="https://student-portal-frontend.onrender.com"
            target="_blank"
            style={linkColor}
          >
            here
          </a>
        </p>
        <p style={links}>
          Github link:
          <a
            href="https://github.com/tamara-703/student-portal-fe"
            target="_blank"
            style={linkColor}
          >
            here
          </a>
        </p>
      </div>

      </div>

  );
}
