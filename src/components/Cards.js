export default function Card({img,user_name}){
return(
  <div style={{width:"200px"}}>
   <img style={{margin:"0 auto",width:"100%",float:'left'}} src={img} alt={user_name}/>
    <h3 style={{color:'teal', fontSize:'2rem'}}>{user_name}</h3>
  </div>
)
}