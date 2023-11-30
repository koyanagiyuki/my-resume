const Biodata = () => {
  return (
    <section id="biodata" className="biodata">
      <h1 className="text-center">BIODATA</h1>
      <div className="container text-center">
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-duration={800}
            className="col-sm-4 mb-2"
          >
            Saya adalah seorang mahasiswa yang berkuliah di Universitas Klabat
            dan sedang mengambil jurusan sistem informasi di fakultas ilmu
            komputer
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration={800}
            className="col-sm-4 mb-2"
          >
            {/* Button trigger modal */}
            <p className="text-center">Pendidikan</p>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              TK GMIM Solagratia Tongkaina
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      TK GMIM solagratia Tongkaina
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">juara di kelas</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              SD Advent 05 Manado
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      SD Advent 05 Manado
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">juara di kelas</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              SMP Advent 01 Manado
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      SMP Advent 01 Manado
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">juara di kelas</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
            >
              SMA Negeri 3 Manado
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      SMA Negeri 3 Manado
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">juara di kelas</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal5"
            >
              UNIVERSITAS KLABAT(coming soon)
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      UNIVERSITAS KLABAT(coming soon)
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">semester 5</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            Saya berumur 20 tahun. Saya memiliki hobby mendengar musik,
            bernyanyi, dan membaca novel.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodata;
