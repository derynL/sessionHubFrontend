import '../../css/home.css';
import Instruments from './Instruments';
import Search from './Search';

const Home = () => {
  return (
    <div className='container'>
      <main>
        <div className='py-4 text-center'>
          <h2>World-Class Talent</h2>
          <p>
            Hire session musicians and studio professionals based anywhere in
            the world
          </p>
        </div>
        <div className='row g-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <Search />
          </div>
          <div className='col-md-7 col-lg-8'>
            <Instruments />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
