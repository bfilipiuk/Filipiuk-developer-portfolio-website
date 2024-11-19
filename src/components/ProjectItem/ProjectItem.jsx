import "./styles.css";

const ProjectItem = ({ title, skills, links, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="project-link">
    <div className="project">
        {links.map(({ href, src, alt }, index) => (
            <img src={src} alt={alt} className="project-icon" />
        ))}
        <span className="project-title">{title}</span>
        <div className="project-skillset">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
    </div>
  </a>
);

export default ProjectItem;
