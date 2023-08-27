import EducationDetails from './EducationDetails'
function EducationView(props){
    const {details}=props;

    return(  
 <div>
    <h1 className='headName'>School:{details.highSchool}</h1>
   <h3 className='headDetails'>
    <div>University:{details.university}</div>
   <div>Skill:{details.skill}</div>
   <div>Work Experience:{details.workExperience}</div>
   </h3>
   </div>
   );
}
export default EducationView;