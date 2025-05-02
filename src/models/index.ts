export interface AppRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}
