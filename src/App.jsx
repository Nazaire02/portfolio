import './App.css'
import profile from "./assets/profile.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as bootstrap from 'bootstrap'

function App() {
  return (
    <div className='mt-3 container-fluid'>
      <div className='nav-container'>
        <nav>
          <ul className='d-flex list-unstyled'>
            <li>Home</li>
            <li>Schools</li>
            <li>Working</li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <div class="photo-section col-md-6">
          <div class="photo-container">
            <img src={profile} alt="Photo de N'Douffou Manda Nazaire" class="profile-photo" />
            <h2 className='fw-bold fst-italic'>N'DOUFFOU MANDA NAZAIRE</h2>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-phone contact-icon"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope contact-icon"></i> <a href="mailto:email@example.com">email@example.com</a></p>
            <p><i className="fab fa-github contact-icon"></i> <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">github.com/tonprofil</a></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-description">
            <h3 className='fst-italic'>DEVELOPPEUR FULLSTACK WEB/MOBILE</h3>
            <p>
              Je suis un développeur Full-Stack passionné avec une expérience dans la création d'applications web et mobiles.
              J'ai travaillé sur divers projets en utilisant des technologies modernes telles que React, Angular, Node.js,
              MongoDB, et bien d'autres. J'aime résoudre des problèmes complexes et créer des solutions innovantes.
            </p>
          </div>

          <div class="tech-stack">
            <h4>Technologies et outils</h4>
            <div class="row">
              <div class="col-4 col-sm-3">
                <img src="path-to-react-logo.png" alt="React" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-angular-logo.png" alt="Angular" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-reactNative-logo.png" alt="React Native" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-node-logo.png" alt="Node.js" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-express-logo.png" alt="Express" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-mongodb-logo.png" alt="MongoDB" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-git-logo.png" alt="Git" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-github-logo.png" alt="GitHub" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-gitlab-logo.png" alt="GitLab" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-bitbucket-logo.png" alt="Bitbucket" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-trello-logo.png" alt="Trello" class="tech-logo-circle" />
              </div>
              <div class="col-4 col-sm-3">
                <img src="path-to-jira-logo.png" alt="Jira" class="tech-logo-circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-light py-5">
        <div class="col-md-6">
          <h3 class="mb-4 fw-bold">Parcours Universitaire</h3>
          <div class="mb-3">
            <h5 class="text-secondary">Master en Informatique</h5>
            <p>Université XYZ, 2020 - 2022</p>
            <p>Spécialisation : Développement logiciel et systèmes intelligents.</p>
          </div>
          <div class="mb-3">
            <h5 class="text-secondary">Licence en Informatique</h5>
            <p>Université ABC, 2016 - 2020</p>
            <p>Spécialisation : Programmation et bases de données.</p>
          </div>
        </div>

        <div class="col-md-6">
          <h3 class="mb-4 fw-bold">Expériences Professionnelles</h3>
          <div class="mb-3">
            <h5 class="text-secondary">Développeur Full-Stack</h5>
            <p>Entreprise XYZ, 2022 - Présent</p>
            <p>Développement d'applications web et mobiles avec React, Node.js, et MongoDB.</p>
          </div>
          <div class="mb-3">
            <h5 class="text-secondary">Développeur Front-End</h5>
            <p>Entreprise ABC, 2020 - 2022</p>
            <p>Création d'interfaces utilisateurs avec Angular et gestion des intégrations API RESTful.</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
