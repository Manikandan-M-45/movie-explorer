const Faq = () => {
  return (
    <div className="container row m-auto my-5">
      <div className="decoration">
        <h2 className="text-danger text-center text">
          Freqently asked questions
        </h2>
      </div>
      <div className="col-8 m-auto mt-5">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is this Metflix?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Its a movie searching app. You can search movies by enter movie
                name. And you can see the results of that movie and its story,
                etc..
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Is this Netflix clone?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Definetly not!, It`s a movie searching app. You can`t view movie
                or trailer in this website.
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Is there any option to view movie?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                No it`s completely view only website not a complete website like
                Netflix or Hotstar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
