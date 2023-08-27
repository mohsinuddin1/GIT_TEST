import PersonalDetails from "./PersonalDetail";
function PersonalView(props){
    const {details}=props;

    return(  
    <div className='resumeupper'>
    <h1 className='headName'>Name:{details.name}</h1>
   <h3 className='headDetails'>
    <div>email{details.email}</div>
   <div>Ph.no:{details.phno}</div>
   <div>add{details.address}</div>
   </h3>
   </div>
   );
}
export default PersonalView;