import "./styles.css";

const ProjectItem = ({ title, skills, links, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="project-link">
    <div className="project">
      <div className="project-icon-container">
        {links.map(({ href, src, alt }, index) => (
          <a key={index} href={href} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="project-icon" />
          </a>
        ))}
      </div>
      <div className="project-title-skillset-container">
        <span className="project-title">{title}</span>
        <div className="project-skillset">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default ProjectItem;
