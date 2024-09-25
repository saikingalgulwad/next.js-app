'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
async function  getdata() {
  const data = await fetch("https://next-js-app-eight-brown.vercel.app/api/topics",{cache:"no-store"})
  return data.json()
  
}


async function Topic() {
  const router = useRouter();
  
   const data =await getdata();
   
   const Deletedate = async(dataes) =>{
    const yes = confirm("Are you sure?");
    if(yes){
      await fetch (`https://next-js-app-eight-brown.vercel.app/api/topics?id=${dataes}`,{
      method:"DELETE"
   
  });
  router.refresh();

}
}
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
        <button onClick={()=>Deletedate(d._id)} className="delete">Delete</button>
      </div>
      
    </div>))}</>
  )
}

export default Topic
