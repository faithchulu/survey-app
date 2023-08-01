import SideNav from "../../assets/components/SideNav";
import AllSurveys from "../../assets/components/allSurveys";

export default function PreviousSurvey(){
  return(
    <div>
      <SideNav>
      <div className="p-6 bg-slate-50">
        <AllSurveys />
      </div>
      </SideNav>
      
    </div>
  )
}