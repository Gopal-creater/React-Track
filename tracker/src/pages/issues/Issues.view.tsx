import React from 'react'
import List from '../../components/List/Index';
import { IssueType } from '../../services/models';
import dropdown from '../../static/Select Dropdown.svg';

interface IssuesViewProps{
    IssuesData: IssueType[]
}

const IssueView: React.FC<IssuesViewProps> = props => {
    
    return (
        <div className="main-content" style={{padding:'20px'}} >

            <div className="main-content-header" style={{display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                <span><h3>Issues</h3></span>
                <div >
                    <span style={{marginRight:'10px'}}>Filter Project</span>
                    <img src={dropdown} alt="dropdown"/>
                </div>
            </div>

            <List issues={props.IssuesData}/> 
                       
        </div>
    )
}

export default IssueView;