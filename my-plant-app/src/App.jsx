
import './App.scss';
import { PreNavBanner } from './components/preBanner/PreNavBanner.jsx';
import { Header } from './components/header/Header.jsx';
import { Banner } from './components/banner/Banner.jsx';
import { PostNavBanner } from './components/postNavBanner/PostNavBanner.jsx';


const App = () => {
  return (
    <>
      <PreNavBanner></PreNavBanner>
      <Header></Header>
      <Banner></Banner>
      <PostNavBanner></PostNavBanner>
    </>
  );
}

export default App;