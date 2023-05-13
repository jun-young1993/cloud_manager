import 'tailwindcss/tailwind.css';
import { Rendererd } from 'utill/interfaces';

export default class App {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  // constructor() {}

  // eslint-disable-next-line class-methods-use-this
  public async setUp(): Rendererd {
    const { render } = await import('react-dom');
    const { Header } = await import('./components/header');
    const app = (
      <div className="container">
        <Header />
      </div>
    );
    const rendered = render(app, document.getElementById('root'));
    return rendered;
  }
}
