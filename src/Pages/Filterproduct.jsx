import '../Pages/Filterproduct.jsx'

function Filterproduct (){
  return (
    <div>
      <div className="fliter">
        <div className="left-filter">
        <div className="filter-items">
          <h2>product categories</h2>
          <div className="input-items">
            <input type="checkbox" value={1} />
            <label htmlFor="">1</label>
          </div>
        </div>
       <div className="filter-items">
        <h2>filter by price</h2>
       </div>
       <div className="filter-items">
         <h2>Sort by</h2>
        </div>
        </div>
        <div className="right-filter">
       
        </div>
      </div>
    </div>
  )
}

export default Filterproduct