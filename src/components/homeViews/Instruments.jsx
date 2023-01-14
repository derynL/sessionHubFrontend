import '../../css/instruments.css';
import brass from '../../images/brass.png';
import drums from '../../images/drums.png';
import strings from '../../images/strings.png';
import woodwinds from '../../images/woodwinds.png';

const Instruments = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img src={brass} className='img-fluid' alt='Brass' />
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={drums} className='img-fluid' alt='Drums & Percussion' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img src={woodwinds} className='img-fluid' alt='Woodwinds' />
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={strings} className='img-fluid' alt='Strings' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
