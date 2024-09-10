class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" aria-label="amazin navbar">
  <div class="container">
    <a class="navbar-brand" href="../index.html">Mazzaella</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTest"
      aria-controls="navbarTest" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTest">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/elliott-claus-075bb01b9/" target="_blank"
            rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/emdashii" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown"
            aria-expanded="false">Projects</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown01">
            <li>
              <a class="dropdown-item" href="../projects/photometer/photometer.html">Photometer</a>
            </li>
            <li>
              <a class="dropdown-item" href="../projects/lilypond/sheet_music_generator.html">Counterpoint Sheet Music
                Generator</a>
            </li>
            <li>
              <a class="dropdown-item" href="../projects/keyboard/overview.html">Split Keyboard Keymap</a>
            </li>
            <li>
              <a class="dropdown-item" href="../projects/appvizo/overview.html">Junior Developer Projects</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-bs-toggle="dropdown"
            aria-expanded="false">Notes</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown02">
            <li>
              <a class="dropdown-item" href="../notes/card_games.html">Card Games I've Played</a>
            </li>
            <li>
              <a class="dropdown-item" href="../notes/keyboard_shortcuts.html">Keyboard Shortcuts</a>
            </li>
            <li>
              <a class="dropdown-item" href="../notes/test_page.html">Test Page</a>
            </li>
            <li>
              <a class="dropdown-item" href="../notes/xplore_scripts.html">Xplore Scripts</a>
            </li>
            <li>
              <a class="dropdown-item" href="../notes/unicode.html">Unicode Symbols</a>
            </li>
            <li>
              <a class="dropdown-item" href="../notes/hours_calculator.html">Monthly Hours</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown"
            aria-expanded="false">mini webpages</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown03">
            <li>
              <a class="dropdown-item" href="https://worship.mazzaella.com/" target="_blank"
                rel="noopener noreferrer">worship songs</a>
            </li>
            <li>
              <a class="dropdown-item" href="https://soda.mazzaella.com/" target="_blank"
                rel="noopener noreferrer">soda</a>
            </li>
            <li>
              <a class="dropdown-item" href="https://rosario-cabins.mazzaella.com/" target="_blank"
                rel="noopener noreferrer">rosario cabins</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define('notes-header', Header);
