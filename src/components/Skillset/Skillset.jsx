import "./styles.css"

const Skillset = ({ skills }) => (
    <div className="skillset-container">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  );
  
  export default Skillset;
  