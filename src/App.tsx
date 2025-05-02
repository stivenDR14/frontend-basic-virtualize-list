import { Navigate, Route, Routes } from "react-router";
import {
  DEFAULT_PRIVATE_ROUTE,
  privateRoutes,
  publicRoutes,
} from "./routes/routes";
import PublicRoute from "./routes/public-routes";
import PrivateRoute from "./routes/private-routes";
import { LoadingFallback } from "./components/loading-fallback.component";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={DEFAULT_PRIVATE_ROUTE} replace />}
        />

        <Route element={<PublicRoute restricted />}>
          {publicRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>

        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
