

function page({params}) {
  return (
    <form>
   
    <input type="text" name="title" placeholder="Title" className="input-title"></input><br></br><br></br>
    
    <input type="text" name="descripe" placeholder="Description" className="input-description"></input><br></br><br></br>
    <button className="submit" type="submit">Update</button>
   </form>
  )
}

export default page
