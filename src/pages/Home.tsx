import vpro from '../assets/vpro.svg';

function Home() {
  return (
    <div className="home-page">
      <div>
        <h1>Hello World</h1>
        <img src="/images/vite.svg" className="logo" alt="vite" />
        <img src="/images/react.svg" className="logo" alt="react" />
        <h3>Vite + React + TypeScript</h3>
        <img src={vpro} className="logo-small" alt="vpro" />
      </div>
    </div>
  );
}

export default Home;
