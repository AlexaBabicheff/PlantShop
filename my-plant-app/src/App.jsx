
import './App.scss'
import { PostNavBanner } from './components/postNavBanner/PostNavBanner.jsx'


const App = () => {
  return (
    <>
      <PostNavBanner></PostNavBanner>
      <Header></Header>
      <Banner></Banner>
      <PostNavBanner></PostNavBanner>
      <NavCategories></NavCategories>
      <PreviewCategories></PreviewCategories>
      <NavBestsellers></NavBestsellers>
      <PreviewBestsellers></PreviewBestsellers>
      <NavHottestPlants></NavHottestPlants>
      <PreviewHottestPlants></PreviewHottestPlants>
      <NavFerntasticDeals></NavFerntasticDeals>
      <PreviewFerntasticDeals></PreviewFerntasticDeals>
      <Testimonials></Testimonials>
      <Footer></Footer>
      <PostFooterBanner></PostFooterBanner>
    </>
  );
}

export default App;