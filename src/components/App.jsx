//impots dependencias, imagenes, componentes, estilos
import {useEffect, useState} from 'react';
import '../styles/App.scss';



function App() {
  //funciones, variables, handles
  const [countryList, setCountryList] = useState([]);
  const [countrySearch, setCountrySearch] = useState ("")

  useEffect(()=>{
  fetch ("https://restcountries.com/v3.1/all?fields=name,capital,flag,continents")
  .then ((response)=>response.json())
  .then ((data)=>{
    setCountryList(data)
    })
  },[])
  
  const handleImputSearch = (ev)=>{
  setCountrySearch(ev.target.value)
  }

  const renderList = ()=>{
    return countryList.filter((eachCountry)=> 
    eachCountry.name.official.toLowerCase().includes(countrySearch.toLowerCase()))
    
    
    .map((eachCountry, i)=>(<li key={i} className='country__item'>
      {/* bandera */}
      <p>{eachCountry.flag}</p> 
      {/* pais */}
      <p>{eachCountry.name.official}</p>
      {/* capital */}
      <p>{eachCountry.capital}</p>
      {/* continente */}
      <p>{eachCountry.continents}</p>
    </li>))
  }


  //estructura html
  return (
    <div>
      <header className='header'>
        <h1 className='header__h1'>Country Info App</h1>
        <p className='header__p'>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
        </header>  
        <main>
           <form>
            <section className='form__filter'>
              <h2>Filters</h2>
              <p>By Country</p>
              <input 
              className='form__filter-country'
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Spain'
              value={countrySearch}
              onChange={handleImputSearch} 
            />
            <p>By Continent</p>
          <select>
            <option value="All"></option>
            <option value="Africa"></option>
            <option value="North America"></option>
            <option value="South America"></option>
            <option value="Europe"></option>
            <option value="Asia"></option>
            <option value="Oceania"></option>
          </select>
          </section>
          <section className='form__add'>
            <h2>Add Country</h2>
          <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Country Name'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Capital'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Flag Icon'
              // value={}
              // onChange={} 
            />
            <input 
              className=''
              autoComplete='off'
              type="search"
              name='country'
              placeholder='Continent'
              // value={}
              // onChange={} 
            />
            <button>Add Country</button>
          </section>
          </form>
          <ul className="list">
            {renderList()}
        </ul>
        </main>
     
    </div>
    )
}

export default App
