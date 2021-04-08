import React from "react";

function About() {
  return (
    <div>
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <article className="block">
              <h3 className="block-header">Constantly (e)n Motion</h3>
              <hr />
              <img
                src="../src/assets/profile.JPG"
                alt="Image of Jeff Woda in suit"
                id="about-image"
              />
              <p>
                What defines a successful journey through the twists of life?
              </p>
              <hr />
              <p className="">
                {" "}
                Experience, drive, continuous learning, detailed analysis,
                reflections, humility, respect, appreciation of others and life
                in general - goes a long way!
              </p>
              <br />
              <p className="textA">
                In other words, there is something to the term "wise old men".
              </p>
              <br />
              <p className="">
                I have managed billions, people, careers, processes, sales,
                teams, grunt work and more. Never shied away from a challenge,
                earning the respect of my team members and superiors. For more
                details or interest - click on my name!
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
