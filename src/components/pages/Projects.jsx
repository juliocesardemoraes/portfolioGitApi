import React, { useEffect, useState } from "react";
import Card from "../organisms/Card";
import "./styles/projects.css";

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()

function Projects() {
  const [projects, setProjects] = useState([]);
  const [website, setWebsite] = useState("");
  const repo = "juliocesardemoraes";

  useEffect(() => {
    fetch(`https://api.github.com/users/${repo}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="project">
      <div className="project__padding">
        <h1 className="project__title">Projects</h1>
        <div className="project__main">
          <div className="project__cards">
            {projects.map((item, key) => {
              if (item?.topics?.includes("portfolio")) {
                return (
                  <React.Fragment key={key}>
                    <Card item={item} setWebsite={setWebsite}></Card>
                  </React.Fragment>
                );
              }
            })}
          </div>
          <iframe src={website}></iframe>
        </div>
      </div>
    </div>
  );
}

export default Projects;
