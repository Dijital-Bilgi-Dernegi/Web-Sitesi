import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-dark.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Dijital Bilgi Derneği"
            style={{ width: '14em' }}
          />
              <div className="myClass" style={{marginBottom: '5em'}}>
              <p style={{marginBottom: '3em'}}></p>
              <p style={{marginBottom: '0em'}}>Osmanağa Mh. Söğütlüçeşme Cd. Bulvar Çarşı No: 127 Kadıköy, İstanbul</p>
              <p style={{marginBottom: '0em'}}>Derbis Kütük No:34-261-172</p>
              <p style={{marginBottom: '0em'}}>bilgi@dijitalbilgi.org.tr</p>
              </div>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Ana sayfa
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Biz Kimiz?
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                      Neler yapıyoruz?
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
