import "./About.css";
import React from "react";
import html_logo from "./Images/html-5.svg";
import css_logo from "./Images/css-3.svg";
import react_logo from "./Images/react-1.svg";
import js_logo from "./Images/javascript.svg";
import py_logo from "./Images/python.svg";
import java_logo from "./Images/java.svg";
import nodejs_logo from "./Images/nodejs-icon.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="page_2">
        <h2>About</h2>
        <p>
          {" "}
          2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          tristique sagittis congue. Phasellus malesuada odio non metus tempus
          pretium. Morbi pretium et ligula at feugiat. Nulla facilisi. Donec
          nulla quam, consectetur non ante suscipit, egestas luctus arcu. Ut
          tincidunt turpis finibus est iaculis, id porta lectus molestie.
          Vivamus accumsan aliquam orci a elementum. Cras varius commodo
          aliquet. Etiam ipsum elit, convallis vel efficitur et, molestie eget
          ex. Aliquam iaculis dolor erat. Proin tempor velit sit amet cursus
          venenatis. Proin non rhoncus massa. Nullam porta turpis in nisl
          egestas maximus sed in nulla. Duis consequat efficitur ex, ut
          malesuada erat. Sed id augue nulla. Vestibulum sodales odio a mi
          lobortis molestie. Sed congue lobortis consectetur. Donec fermentum
          eros vel nisi ultrices, sed pellentesque nisl cursus. Sed euismod
          blandit elit et cursus. Sed dignissim bibendum velit et volutpat. Ut
          sagittis consectetur metus quis ullamcorper. Donec eu diam metus.
          Mauris ex lectus, feugiat eu eros eu, pretium maximus urna.
          Suspendisse bibendum nibh ac est tempus euismod. Praesent ut tempus
          mauris. Duis eget dapibus lectus. Vivamus quis ante faucibus,
          consequat lorem fringilla, sodales justo. Fusce accumsan, odio
          consequat convallis maximus, magna mauris suscipit nibh, quis
          condimentum nisl leo a nulla. Donec a bibendum sem, in condimentum
          neque. Donec luctus, erat ac ullamcorper feugiat, metus nulla
          tincidunt enim, rhoncus faucibus nisl dui ac ipsum. Sed ut tortor nec
          tortor facilisis blandit in nec mauris. Mauris eget massa urna.
          Curabitur iaculis mauris fringilla magna luctus accumsan. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Quisque eu cursus quam. Morbi auctor feugiat dapibus. Suspendisse
          hendrerit, odio in pellentesque pellentesque, mauris est rutrum ex,
          vel efficitur libero risus sed neque. Phasellus ultricies congue ante.
          Nam in velit egestas tellus sollicitudin ultrices quis eu leo.
          Phasellus in mollis erat. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Aliquam
          iaculis dignissim quam ac vestibulum. Nam luctus eros et dapibus
          sodales. In in lacus varius urna porta fringilla ut sed lorem. Etiam
          vitae odio convallis, vehicula quam nec, elementum dui. In feugiat a
          libero in molestie. Fusce quis eros eget elit commodo imperdiet vel
          sit amet libero. Nulla facilisi. Donec id luctus metus. Sed quis
          auctor felis. Duis at augue erat. Aliquam vulputate vehicula sem, ut
          maximus est pellentesque id. Vestibulum ornare magna in tincidunt
          interdum. Maecenas consequat dolor enim, eu dapibus nulla porttitor
          ut. Nam suscipit, nisl quis venenatis convallis, risus enim ornare
          mauris, id ultricies nulla felis ut mi. Curabitur scelerisque mauris
          ut aliquet feugiat. Donec nisl lacus, tincidunt ac turpis a, semper
          blandit neque. Pellentesque ut dolor leo.
        </p>

        <h3>Tech Stack:</h3>
        <div className="container">
          <div id="tech_stack">
            <img id="tech_logo" src={html_logo} alt="html-logo" width="70" />
            <span className="caption">HTML</span>
          </div>
          <div id="tech_stack">
            <img id="tech_logo" src={css_logo} alt="css-logo" width="70" />
            <span className="caption">CSS</span>
          </div>
          <div id="tech_stack">
            <img id="tech_logo" src={js_logo} alt="js-logo" width="70" />
            <span className="caption">Javascript</span>
          </div>
          <div id="tech_stack">
            <img id="tech_logo" src={react_logo} alt="react-logo" width="70" />
            <span className="caption">React</span>
          </div>
          <div id="tech_stack">
            <img id="tech_logo" src={py_logo} alt="py-logo" width="70" />
            <span className="caption">Python</span>
          </div>
          <div id="tech_stack">
            <img id="tech_logo" src={java_logo} alt="java-logo" width="70" />
            <span className="caption">Java</span>
          </div>
          <div id="tech_stack">
            <img
              id="tech_logo"
              src={nodejs_logo}
              alt="nodejs-logo"
              width="70"
            />
            <span className="caption">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
