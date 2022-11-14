import TableChartIcon from '@mui/icons-material/TableChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TuneIcon from '@mui/icons-material/Tune';
 function config() {
    return [
        // {
        //   path: "/",
        //   element: <Dashboard />,
        //   children: [
        //     {
        //       path: "messages",
        //       element: <DashboardMessages />,
        //     },
        //     { path: "tasks", element: <DashboardTasks /> },
        //   ],
        // },
        { path: "/table", text:"Add New Row",element: "" , icon:<TableChartIcon/>},
        { path: "/setting_bar", text:"Adjust Setting",element: "" , icon:<TuneIcon/>},
      ]
};

export default new config()