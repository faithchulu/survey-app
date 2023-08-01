import SideNav from "../../assets/components/SideNav";
import DashboardStats from "../../assets/components/dashboardStats";
import GenderPieChart from "../../assets/components/genderPieChart"
import AllSurveys from "../../assets/components/allSurveys"


export default function Visualization(){
  return(
    <div>
      <SideNav>
        <div className="p-6 bg-slate-50">
          <div className="m=6">
            <DashboardStats />
          </div>
            
          <div className="grid grid-cols-2">
            <div className="bg-white col-span-1 shadow-xl p-4 rounded-md m-6">
              <GenderPieChart />
            </div>
          </div>
            
          <AllSurveys />
             
        </div>
      </SideNav>
    </div>
  )
}