export default function Error(props) { 
  return (<div  style={{marginTop: "15px"}} className="alert alert-danger" role="alert">
  {props.message}
</div>)
}