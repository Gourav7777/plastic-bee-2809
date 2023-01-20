import React from 'react'

const Sidebar = () => {
  return (
    <div>

  
    <div>
<h3>Sorting by</h3>

<select name="price" id="price">
  <option value="any">Sorting by Price</option>
 <option value="Low to high">Low to high</option>
 <option value="High to low">High to low</option>
 
</select>

        </div>
<br/>

<div>

<select name="rating" id="rating">
 <option value="all">Sorting by Rating</option>
<option value="low to high">Low to high</option>
<option value="high to low">High to low</option>

</select>

</div>


<br/>

<h3>Filter by</h3>
<h4>Popular Fiters</h4>
<div >

<input type="checkbox"  ></input>
<label for="loc1">Delhi </label><br/>
<input type="checkbox" />
<label for="loc2">Hyderabad</label><br/>
<input type="checkbox"  ></input>

<label for="vehicle3"> Breakfast included</label><br/>
<input type="checkbox"  ></input>
<label for="vehicle3">Hotel </label>

</div>

<br/>





    </div>
  )
}

export default Sidebar