import "./styles.css"

const ProjectItem = ({ title, skills, links }) => (
    <div className="project">
      <div className="project-icon-container">
        {links.map(({ href, Icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noreferrer">
            <Icon className="link-icon" />
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
  );
  
  export default ProjectItem;
  