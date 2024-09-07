import './App.css'
import profile from "./assets/profile.png"
import react from "./assets/react.png"
import rnative from "./assets/rnative.png"
import angular from "./assets/angular.png"
import express from "./assets/express.png"
import mongodb from "./assets/mongodb.svg"
import node from "./assets/node.png"
import git from "./assets/git.jpg"
import github from "./assets/github.png"
import gitlab from "./assets/gitlab.png"
import bitbucket from "./assets/bitbucket.jpg"
import trello from "./assets/trello.png"
import jira from "./assets/jira.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as bootstrap from 'bootstrap'

function App() {
  return (
    <div className='mt-3 container-fluid'>
      <div className='nav-container'>
        <nav>
          <ul className='d-flex list-unstyled'>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#experience">Exprériences</a></li>
          </ul>
        </nav>
      </div>
      <div className='row mx-3 mb-4'>
        <div className="photo-section col-md-6 d-flex flex-column align-items-center text-center">
          <div className="photo-container mb-4 position-relative">
            <img src={profile} alt="Photo de N'Douffou Manda Nazaire" className="profile-photo shadow-lg" />
            <h2 className="fw-bold fst-italic mt-3">N'DOUFFOU MANDA NAZAIRE</h2>
          </div>

          <div className="contact-info w-100">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-phone contact-icon text-primary me-2"></i>
              <span className="fw-bold text-muted">+225 07 79 693 186</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-envelope contact-icon text-primary me-2"></i>
              <a href="mailto:email@example.com" className="fw-bold text-muted">nazairendouffou@gmail.com</a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <i className="fab fa-github contact-icon text-primary me-2"></i>
              <a href="https://github.com/Nazaire02" target="_blank" rel="noopener noreferrer" className="fw-bold text-muted">github.com/Nazaire02</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 card shadow-lg border-0 p-4">
          <div className="profile-description">
            <h3 className='fst-italic text-primary fw-bold'>DEVELOPPEUR FULLSTACK WEB/MOBILE</h3>
            <p>
              Je suis un développeur Full-Stack passionné avec une expérience dans la création d'applications web et mobiles.
              J'ai travaillé sur divers projets en utilisant des technologies modernes telles que React, Angular, Node.js,
              MongoDB, et bien d'autres. J'aime résoudre des problèmes complexes et créer des solutions innovantes.
            </p>
          </div>

          <div className="tech-stack">
            <h4 className='fw-bold'>Technologies et outils :</h4>
            <div class="row">
              <div className="col-4 col-sm-3">
                <img src={react} alt="React" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={angular} alt="Angular" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={rnative} alt="React Native" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={node} alt="Node.js" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={express} alt="Express" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={mongodb} alt="MongoDB" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={git} alt="Git" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={github} alt="GitHub" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={gitlab} alt="GitLab" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={bitbucket} alt="Bitbucket" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={trello} alt="Trello" className="tech-logo-circle" />
              </div>
              <div className="col-4 col-sm-3">
                <img src={jira} alt="Jira" className="tech-logo-circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-light py-5">
        <div className="col-md-6 mb-4" id="formations">
          <h3 className="mb-4 text-primary fw-bold">Formations</h3>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Master en Informatique</h5>
              <p className="card-text">Ecole Supérieure Africaine des TIC <span className="text-muted">·</span> 2022 - 2024</p>
              <p className="card-text fw-bold">Spécialisation : Systèmes d'information et génie logiciel.</p>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Licence en Informatique</h5>
              <p className="card-text">Ecole Supérieure Africaine des TIC <span className="text-muted">·</span> 2019 - 2024</p>
              <p className="card-text fw-bold">Spécialisation : Systèmes et réseaux informatiques et télécommunications.</p>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Baccalauréat</h5>
              <p className="card-text">Lycée de garçons de Bingerville <span className="text-muted">·</span> 2019</p>
              <p className="card-text fw-bold">Spécialisation : Série D (Sciences expérimentales).</p>
            </div>
          </div>
        </div>

        <div className="col-md-6" id="experience">
          <h3 className="mb-4 text-primary fw-bold">Expériences Professionnelles</h3>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Développeur Full-Stack (En ligne)</h5>
              <p className='card-subtitle mb-2 text-muted'>Yoomi solution <span className="text-muted">·</span> 07/2023 - Présent</p>
              <ul className="list-unstyled fw-bold">
                <li><i className="bi bi-check-circle me-2 text-success"></i>Développement du frontend d'une application de restauration</li>
                <li><i className="bi bi-check-circle me-2 text-success"></i>Développement de l'API de cette application</li>
              </ul>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Stagiaire Développeur Full-Stack (Sur site)</h5>
              <p className='card-subtitle mb-2 text-muted'>PayQin <span className="text-muted">·</span>Abidjan<span className="text-muted">·</span> 02/2024 - 07/2024</p>
              <ul className="list-unstyled fw-bold">
                <li><i className="bi bi-check-circle me-2 text-success"></i>Mise à jour de l'application web et du dashboard admin</li>
                <li><i className="bi bi-check-circle me-2 text-success"></i>Mise à jour de l'API</li>
              </ul>
            </div>
          </div>
          <div className="card card-hover shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title text-secondary">Stagiaire Développeur Full-Stack (Sur site)</h5>
              <p className='card-subtitle mb-2 text-muted'>Cabinet Offset Consulting <span className="text-muted">·</span>Abidjan<span className="text-muted">·</span> 04/2022 - 05/2022</p>
              <ul className="list-unstyled fw-bold">
                <li><i className="bi bi-check-circle me-2 text-success"></i>Développement d'une application de gestion de mutuelle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default App
