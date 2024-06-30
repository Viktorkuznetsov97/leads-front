// Layouts
import DashboardLayout from "./layouts/Dashboard";

// pages
import States from "./pages/States";

const routes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <States />
      </DashboardLayout>
    ),
  },
];

export default routes;
