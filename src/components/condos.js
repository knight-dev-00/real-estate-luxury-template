import React from 'react';

const Condos = () => {
  return(
    <>
      <section className="marketing">
        <div className="container">
          <h1>
            Lorem ipsum dolor sit amet,<br />aucun condos en vente
          </h1>
          <h4>Argument marketing</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt fringilla ex et vestibulum.
          </p>
          <div className="courriel">
            <div>
              <label htmlfor="text">
                ______ COURRIEL
              </label>
            </div>
            <input placeholder="Lorem ipsum" name="text" type="text" />
            <button>S'ABONNER</button>
          </div>
        </div>
      </section>
      <section className="condos">
        <div className="bg-dark-gray">
          <div className="container">
            <h2>Lorem ipsum dolor sit amet,<br />condos vendus</h2>
            <div className="container images">
              <div className="col-3">
                <div className="title">
                  <div className="underline">
                    <h3>____</h3>
                    <h3>Unit 304 – 5½</h3>
                  </div>
                  <p>350 rue Saint-Pierre</p>
                </div>
                <h5>Vendu $230 000</h5>
                <p>
                  Laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                  Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                  viverra nibh sed bibendum. Duis facilisis tortor sed purus
                  hendrerit cursus.
                </p>
              </div>
              <div>
                <img src="images/condos.png" alt="2 photos" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light-gray">
          <div className="container">
            <div className="col-6 left">
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Caractéristiques</h4>
                </div>
                <ul>
                  <li>
                    <h5>Nombre de pièces</h5>
                    <p>5</p>
                  </li>
                  <li>
                    <h5>Mode de chauffage</h5>
                    <p>Plinthes électriques </p>
                  </li>
                  <li>
                    <h5>Énergie pour le chauffage</h5>
                    <p>Électricité</p>
                  </li>
                  <li>
                    <h5>Équipements/Services</h5>
                    <p>Climatiseur mural, Détecteur d'incendie</p>
                  </li>
                  <li>
                    <h5>Approvisionnement en eau</h5>
                    <p>Municipalité</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 right">
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Particularité du terrain</h4>
                </div>
                <h5>Proximité</h5>
                <ul>
                  <li>
                    <p>– Mauris maximus eu sapien sit</p>
                  </li>
                  <li>
                    <p>– Lorem ipsum dolor sit amet</p>
                  </li>
                  <li>
                    <p>– Mauris maximus eu sapien sit</p>
                  </li>
                </ul>
              </div>
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Particularité du bâtiment</h4>
                </div>
                <ul>
                  <li>
                    <h5>Année de construction</h5>
                    <p>1992</p>
                  </li>
                  <li>
                    <h5>Fenestration</h5>
                    <p>PVC Manivelle</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <button>Voir les détails de l’annonce</button>
            </div>
          </div>
        </div>
      </section>
      <section className="condos">
        <div className="bg-dark-gray">
          <div className="container images">
            <div className="col-3">
              <div className="title">
                <div className="underline">
                  <h3>____</h3>
                  <h3>Unit 304 – 5½</h3>
                </div>
                <p>350 rue Saint-Pierre</p>
              </div>
              <h5>Vendu $230 000</h5>
              <p>
                Laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                viverra nibh sed bibendum. Duis facilisis tortor sed purus
                hendrerit cursus.
              </p>
            </div>
            <div>
              <img src="images/condos.png" alt="2 photos" />
            </div>
          </div>
        </div>
        <div className="bg-light-gray">
          <div className="container">
            <div className="col-6 left">
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Caractéristiques</h4>
                </div>
                <ul>
                  <li>
                    <h5>Nombre de pièces</h5>
                    <p>5</p>
                  </li>
                  <li>
                    <h5>Mode de chauffage</h5>
                    <p>Plinthes électriques </p>
                  </li>
                  <li>
                    <h5>Énergie pour le chauffage</h5>
                    <p>Électricité</p>
                  </li>
                  <li>
                    <h5>Équipements/Services</h5>
                    <p>Climatiseur mural, Détecteur d'incendie</p>
                  </li>
                  <li>
                    <h5>Approvisionnement en eau</h5>
                    <p>Municipalité</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 right">
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Particularité du terrain</h4>
                </div>
                <h5>Proximité</h5>
                <ul>
                  <li>
                    <p>– Mauris maximus eu sapien sit</p>
                  </li>
                  <li>
                    <p>– Lorem ipsum dolor sit amet</p>
                  </li>
                  <li>
                    <p>– Mauris maximus eu sapien sit</p>
                  </li>
                </ul>
              </div>
              <div className="list">
                <div className="underline">
                  <div className="line">
                    <img src="Rectangle.png" alt="Line" />
                  </div>
                  <h4>Particularité du bâtiment</h4>
                </div>
                <ul>
                  <li>
                    <h5>Année de construction</h5>
                    <p>1992</p>
                  </li>
                  <li>
                    <h5>Fenestration</h5>
                    <p>PVC Manivelle</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <button>Voir les détails de l’annonce</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Condos;
