import Link from "next/link"
async function  getdata() {
  const data = await fetch("http://localhost:3000/api/topics",{cache:"no-store"})
  return data.json()
  
}

async function Topic() {
  
   const data =await getdata();
    
  return (
    <>
    { data.map(d=>(
    <div className="main" key={d._id}>
      <div className="content">
        <h1 className="title">{d.title}</h1>
        <p className="page">{d.description}</p>
      </div>
      <div className="main-2">
        <Link className="update" href={`/update/${d._id}`}>Update</Link>
        <button className="delete">Delete</button>
      </div>
      
    </div>))}</>
  )
}

export default Topic
