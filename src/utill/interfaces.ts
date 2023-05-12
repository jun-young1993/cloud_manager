

export type Rendererd = Promise<void | Element | React.Component>;
export interface AppInterface {
  setUp: () => Rendererd;
}
export interface ScsmInterface {
  app: AppInterface;
}
