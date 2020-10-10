import React from 'react';
import profile from '../../static/Sijo (1).svg';

interface Cardprops{
    id:string
    date:string
    issueTitle:string
    issueDescription:string
    issueStatus:string
    issuePriority:string
    // assigneePositon:string       
}

const Card: React.FC<Cardprops> = (props) =>{

    let btn;
    if (props.issuePriority=="SHOWSTOPPER") {
        btn =<button style={{backgroundColor:"#C92521",border:'none' ,color:'white',width:'8vw',height:'5vh'}}>{props.issuePriority}</button>      
    }
    else if(props.issuePriority=="LOW"){
        btn =<button style={{backgroundColor:"#F3C520",border:'none'  ,color:'white',width:'8vw',height:'5vh'}}>{props.issuePriority}</button>
    }
    else{
        btn =<button style={{backgroundColor:"#DD7718", border:'none' ,color:'white',width:'8vw',height:'5vh'}}>{props.issuePriority}</button>
    }


    return (
        <div className='card' style={{padding:'10px',backgroundColor:"#FFFFFF",boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginBottom:'10px'}}>
            <div style={{display:"flex", justifyContent:"space-between", fontSize:'0.8vw'}}>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>

            <h2 style={{fontSize:'1.5vw'}}>{props.issueTitle}</h2>

            <div style={{fontSize:'1vw'}}>
                {props.issueDescription}
            </div><br/>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:'column',alignContent:"space-between"}}>

                    <span style={{fontSize:'0.8vw'}}>Assignee</span>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <img src={profile} alt="profile" width='45vw' height='35vh'></img>
                        <div style={{paddingLeft:'10px'}}>
                            <span style={{fontSize:'0.9vw'}}>sijo lorem</span><br/>
                            <span style={{fontSize:'0.8vw'}}>this is ux designer</span>
                        </div>
                    </div>

                </div>

                <div style={{display:'flex',flexDirection:'column',alignContent:'space-between'}}>
                    <span style={{fontSize:'0.8vw'}}>Priority</span>
                    { btn }        
                </div>

            </div>
        </div>
    );
}

export default Card;