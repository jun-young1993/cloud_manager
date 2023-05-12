import React from 'react';
import 'tailwindcss/tailwind.css';
export default class App {
  public async setUp(): Promise<void | Element | React.Component> {
    // const React = await import('react');
    const { render } = await import('react-dom');
    const app = (
      <div className="text-center border-solid border-4 border-red-500 bg-black text-white shadow">
      ERB + TAILWIND = ❤
    </div>
    );
    const rendered = render(app, document.getElementById('root'));
    return rendered;
  }
}
