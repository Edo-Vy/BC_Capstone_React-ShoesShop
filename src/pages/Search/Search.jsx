// rfc
import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      <div className='main__wrap'>
        <div className='search__header'>
          <form className='main__search'>
            <div className='main__right form-group'>
                <p className='search__title'>Search</p>
                <input className='search__form form-control' placeholder='Search Product' name='search'/>
            </div>
            <div className='main__right'>
              <button className='btn__search'>Search</button>
            </div>
          </form>
        </div>
        {/* ---- */}
        <div className='search__result'>
          <div className='body__wrap'>
            <div className='body__title'>
              <h3 className='title'>Search result</h3>
            </div>
            <div className='body__option'>
              <div className='body__search'>
                <form className='form__body'>
                  <div className='form__option form-group'>
                    <p className='price__title'>Price</p>
                    <select className='option'>
                      <option>Tăng</option>
                      <option>Giảm</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            {/* === */}
            <div className='search__product'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
