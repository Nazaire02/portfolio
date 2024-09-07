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
    <div className='mt-3 container-fluid w-75'>
      <div className='nav-container'>
        <nav>
          <ul className='d-flex justify-content-center list-unstyled'>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#experience">Exprériences</a></li>
          </ul>
        </nav>
      </div>
      <div className='row mx-3'>
        <div className="col-12 d-flex flex-column align-items-center text-center">
          <div className="position-relative prentation">
            {/* <img src={profile} alt="Photo de N'Douffou Manda Nazaire" className="profile-photo shadow-lg" /> */}
            <p>Hey, je suis<br />
              <span className="fw-bold">N'DOUFFOU MANDA NAZAIRE</span><br />
              développeur web/mobile Full-Stack passionné avec une expérience dans la création d'applications web et mobiles.
              J'ai travaillé sur divers projets en utilisant des technologies modernes telles que React, Angular, Node.js,
              MongoDB, et bien d'autres. J'aime résoudre des problèmes complexes et créer des solutions innovantes.
            </p>
          </div>

          <div className="contact-info w-75 d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
              <i className="fas fa-phone contact-icon text-primary me-2"></i>
              <span className="fw-bold text-muted">+225 07 79 693 186</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <i className="fas fa-envelope contact-icon text-primary me-2"></i>
              <a href="mailto:email@example.com" className="fw-bold text-muted">nazairendouffou@gmail.com</a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <i className="fab fa-github contact-icon text-primary me-2"></i>
              <a href="https://github.com/Nazaire02" target="_blank" rel="noopener noreferrer" className="fw-bold text-muted">github.com/Nazaire02</a>
            </div>
          </div>
        </div>

        <div className="col-12 card shadow-lg border-0 p-4 mb-4">
          <div className="tech-stack">
            <h4 className='fw-bold'>Technologies et outils</h4>
            <div class="row">
              <div className="col-12 d-flex flex-row border-top border-bottom pt-3">
                <div className='d-flex flex-column align-items-center'>
                  <img src={react} alt="React" className="tech-logo-circle" />
                  <p>React</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <img src={angular} alt="Angular" className="tech-logo-circle" />
                  <p>Angular</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <img src={rnative} alt="React Native" className="tech-logo-circle" />
                  <p>React Native</p>
                </div>
              </div>
              <div className="col-12 d-flex border-bottom">
                <div>
                  <img src={node} alt="Node.js" className="tech-logo-circle" />
                  <p>NodeJs</p>
                </div>
                <div>
                  <img src={express} alt="Express" className="tech-logo-circle" />
                  <p>Express</p>
                </div>
              </div>
              <div className="col-12 d-flex border-bottom">
                <div>
                  <img src={mongodb} alt="MongoDB" className="tech-logo-circle" />
                  <p>MongoDb</p>
                </div>
              </div>
              <div className="col-12 d-flex border-bottom">
                <div>
                  <img src={git} alt="Git" className="tech-logo-circle" />
                  <p>Git</p>
                </div>
                <div>
                  <img src={github} alt="GitHub" className="tech-logo-circle" />
                  <p>GitHub</p>
                </div>
                <div>
                  <img src={gitlab} alt="GitLab" className="tech-logo-circle" />
                  <p>GitLab</p>
                </div>
              </div>
              <div className="col-12 d-flex border-bottom">
                <div>
                  <img src={trello} alt="Trello" className="tech-logo-circle" />
                  <p>Trello</p>
                </div>
                <div>
                  <img src={jira} alt="Jira" className="tech-logo-circle" />
                  <p>Jira</p>
                </div>
              </div>
            </div>
          </div>

          <div className="langage-stack">
            <h4 className='fw-bold'>Langues</h4>
            <ul className='list-unstyled'>
              <li>Français: Lu, écrit et parlé (langue maternelle)</li>
              <li>Anglais: Lu, écrit et parlé (Niveau débutant)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12" id="experience">
          <h3 className="mb-4 text-primary fw-bold">Expériences Professionnelles</h3>
          <div className='d-flex'>
            <div>
              <div className="card card-hover shadow-sm mb-3 border-2">
                <div className="card-body">
                  <h5 className="card-title text-secondary">Développeur Full-Stack (En ligne)</h5>
                  <p className='card-subtitle mb-2 text-muted'>Yoomi solution <span className="text-muted">·</span> 07/2023 - Présent</p>
                  <ul className="list-unstyled fw-bold">
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Développement du frontend d'une application de restauration</li>
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Développement de l'API de cette application</li>
                  </ul>
                </div>
              </div>
              <div className="card card-hover shadow-sm mb-3 experience border-2">
                <div className="card-body">
                  <h5 className="card-title text-secondary">Stagiaire Développeur Full-Stack (Sur site)</h5>
                  <p className='card-subtitle mb-2 text-muted'>Cabinet Offset Consulting <span className="text-muted">·</span>Abidjan<span className="text-muted">·</span> 04/2022 - 05/2022</p>
                  <ul className="list-unstyled fw-bold">
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Développement d'une application de gestion de mutuelle</li>
                  </ul>
                </div>
              </div>
                            <div className="card card-hover shadow-sm mb-3 experience border-2">
                <div className="card-body">
                  <h5 className="card-title text-secondary">Stagiaire Développeur Full-Stack (Sur site)</h5>
                  <p className='card-subtitle mb-2 text-muted'>Cabinet Offset Consulting <span className="text-muted">·</span>Abidjan<span className="text-muted">·</span> 04/2022 - 05/2022</p>
                  <ul className="list-unstyled fw-bold">
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Développement d'une application de gestion de mutuelle</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bar'>
            </div>
            <div>
              <div className="card card-hover shadow-sm mb-3 experience border-2">
                <div className="card-body">
                  <h5 className="card-title text-secondary">Stagiaire Développeur Full-Stack (Sur site)</h5>
                  <p className='card-subtitle mb-2 text-muted'>PayQin <span className="text-muted">·</span>Abidjan<span className="text-muted">·</span> 02/2024 - 07/2024</p>
                  <ul className="list-unstyled fw-bold">
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Mise à jour de l'application web et du dashboard admin</li>
                    <li><i className="bi bi-check-circle me-2 text-success"></i>Mise à jour de l'API</li>
                  </ul>
                </div>
              </div>
                            <div className="card card-hover shadow-sm mb-3 experience border-2">
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
      </div>
    </div>

  )
}

export default App
