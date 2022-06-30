class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer mt-auto py-3 bg-light fixed-bottom">
    <div class="container">
      <span class="text-muted">a website by <a href="https://github.com/emdashii" target="_blank" rel="noopener noreferrer"
          class="link-dark text-decoration-none">Elliott Claus</a></span>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);