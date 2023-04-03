import { useEffect, useState } from "react";
import Card from "../organisms/Card";
import "./styles/projects.css";

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/juliocesardemoraes/repos")
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
        {projects.map((item) => {
          if (item?.topics?.includes("portfolio")) {
            return <Card item={item}></Card>;
          }
        })}
      </div>
    </div>
  );
}

export default Projects;
