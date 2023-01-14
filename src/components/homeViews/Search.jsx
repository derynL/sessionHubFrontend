import '../../utils/form-validation.js';
import '../../css/search-home.css';

const Search = () => {
  return (
    <>
      <h3 className='d-flex mb-3'>
        <span>Find by Instrument</span>
      </h3>
      <form class='card p-1'>
        <div className='col'>
          <label for='Brass' className='form-label'>
            Brass
          </label>
          <select className='form-select' id='brass'>
            <option value=''></option>
            <option value='cornet'>Cornet</option>
            <option value='euphonium'>Euphonium</option>
            <option value='frenchHorn'>French Horn</option>
            <option value='trombone'>Trombone</option>
            <option value='trumpet'>Trumpet</option>
            <option value='tuba'>Tuba</option>
          </select>

          <label for='Drums' className='form-label'>
            Drums
          </label>
          <select class='form-select' id='drums'>
            <option value=''></option>
            <option value='drumkit'>Drumkit</option>
            <option value='orchestralPercussion'>Orchestral Percussion</option>
            <option value='ethnicPercussion'>Ethnic Percussion</option>
          </select>

          <label for='Strings' className='form-label'>
            Strings
          </label>
          <select className='form-select' id='strings'>
            <option value=''></option>
            <option value='cello'>Cello</option>
            <option value='doubleBass'>Double Bass</option>
            <option value='viola'>Viola</option>
            <option value='violin'>Violin</option>
          </select>

          <label for='Woodwinds' className='form-label'>
            Woodwinds
          </label>
          <select className='form-select' id='woodwinds'>
            <option value=''></option>
            <option value='bassoon'>Bassoon</option>
            <option value='clarinet'>Clarinet</option>
            <option value='corAnglais'>Cor Anglais</option>
            <option value='flute'>Flute</option>
            <option value='oboe'>Oboe</option>
            <option value='piccolo'>Piccolo</option>
          </select>
        </div>
        <hr className='my-4' />
        <button class='w-40 submit' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
