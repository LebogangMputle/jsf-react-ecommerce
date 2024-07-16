import Alpine from 'alpinejs';
import App from './app.js';

Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
  Alpine.createRoot(document.getElementById('root')).render(() => {
    return (
      <div x-data="{ isOpen: false }">
        <App />
      </div>
    );
  });
});
