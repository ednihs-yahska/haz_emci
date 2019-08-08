export default function dashboardReducer(state={
    selectedReport: null,
    reports: [
    {
      id: 0,
      count: 1,
      last_when: 300,
      priority: 3
    },
    {
      id: 1,
      count: 2,
      last_when: 300,
      priority: 2
    },
    {
      id: 2,
      count: 3,
      last_when: 300,
      priority: 4,
      floating: false
    },
    {
      id: 3,
      count: 4,
      last_when: 300,
      priority: 1
    },
    {
      id: 4,
      count: 5,
      last_when: 300,
      priority: 6
    },
    {
      id: 5,
      count: 6,
      last_when: 300,
      priority: 5
    }
  ],
    previous_reports: []
    }, action){
      let newState = {...state};
      switch(action.type){
          case 'OPEN_REPORT': {
              const currentReportGroup = action.payload
              newState.previous_reports = newState.reports;
              newState.reports = newState.reports.map((report, key)=>{
                if(report.id===currentReportGroup) newState.selectedReport = report;
                return report
              })
              break;
          }
          case 'CLOSE_REPORT': {
              newState.selectedReport = null;
              break;
          }
          case 'RANDOM_REPORTS':{
            newState.previous_reports = newState.reports;
            newState.reports = newState.reports.map((element, key)=>{
              element.priority = ((newState.previous_reports[key].priority+1)%newState.reports.length)+1;
              return element
            })  
            break;
          }
          default:
              break;
      }
      return newState;
  }
  
  