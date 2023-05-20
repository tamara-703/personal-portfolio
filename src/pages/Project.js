import LibraryProject from '../home-page.png';
import HangmanProject from '../example-of-playing-the-game.png';
import TodoProject from '../todo.png';

export default function Projects()
{

    return (
        <div className="projects-container">

            <div className='library-project-container'>
                <img src={LibraryProject} alt="library-project-homepage" width="400px"></img>
                <p>This project emulates a simple library website that allows users to
                    navigate books depending on genre, search for books and save
                    them in their library profile</p>
                <p>More details can be found on the project's <a href='https://github.com/tamara-703/react-library-app' target="_blank">Github page</a></p>
            </div>

            <div className='hangman-project-container'>
            <img src={HangmanProject} alt="hangman-project" width="300px"></img>
            <p>This project recreate the classic hangman game in a simple webpage environment.
                It provides the user with an interface that allows them to interact with the
                game and selecting from main difficulties
            </p>
            <p>More details can be found on the project's <a href='https://github.com/tamara-703/HangmanGame-Project' target="_blank">Github page</a></p>
            </div>

            <div className='hangman-project-container'>
            <img src={TodoProject} alt="hangman-project" width="300px"></img>
            <p>This project recreate the classic hangman game in a simple webpage environment.
                It provides the user with an interface that allows them to interact with the
                game and selecting from main difficulties
            </p>
            <p>More details can be found on the project's <a href='https://github.com/tamara-703/HangmanGame-Project' target="_blank">Github page</a></p>
            </div>

        </div>
    )
}
