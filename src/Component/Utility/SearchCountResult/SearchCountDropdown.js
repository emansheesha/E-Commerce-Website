import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Dropdown } from 'react-bootstrap'

const SearchCountDropdown = () => {
  return (
   
      <Dropdown className='dropdown-search'>
      <Dropdown.Toggle className="d-flex justify-content-end align-items-center" >
      <FontAwesomeIcon icon={faArrowDownWideShort} />
      <div className='px-1'>ترتيب</div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">الأكثر مبيعا</Dropdown.Item>
        <Dropdown.Item href="#/action-2">الأعلى تقييما </Dropdown.Item>
        <Dropdown.Item href="#/action-3">السعر من اعلى للأقل</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
  )
}

export default SearchCountDropdown
