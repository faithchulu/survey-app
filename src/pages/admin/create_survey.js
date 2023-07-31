import SideNav from "../../assets/components/SideNav";
import FormCreator from "../../assets/components/formcreator";

export default function CreateSurvey(){
  return(
    
      <div>
        <SideNav>
          <div className="bg-slate-50 min-h-screen">
          <FormCreator />
          </div>
        </SideNav>
      </div>
    
  )
}