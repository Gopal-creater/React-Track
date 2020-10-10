import React from 'react';
import Card from '../../components/Card';
import { IssueType } from '../../services/models';

interface ListProps{
    issues: IssueType[]
}

const List: React.FC<ListProps> = props => {

    return (
        <div className="main-content-body" style={{  display:"grid", gridTemplateColumns:'repeat(3, minmax(0, 1fr))',gridGap:'2rem' }}>

            <div style={{ backgroundColor: "#EBEDF4", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <h4 style={{ paddingLeft: '10px', fontSize: '1.5vw' }}>To Do </h4>

                {props.issues.map((issue: IssueType) => {
                    if(issue.status=="TODO"){
                        return (
                            <Card
                                id={issue.short_id}
                                date={issue.created_at}
                                issueTitle={issue.title}
                                issueDescription={issue.description}
                                issuePriority = {issue.priority}
                                issueStatus = {issue.status}
                            />
                        )
                    }
                })}
            </div>

            <div style={{ backgroundColor: "#EBEDF4", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <h4 style={{ paddingLeft: '10px', fontSize: '1.5vw' }}>Progress </h4>
                {props.issues.map((issue: IssueType) => {
                    if(issue.status=="DOING"){
                        return (
                            <Card
                                id={issue.short_id}
                                date={issue.created_at}
                                issueTitle={issue.title}
                                issueDescription={issue.description}
                                issuePriority = {issue.priority}
                                issueStatus = {issue.status}
                            />
                        )
                    }
                })}
            </div>

            <div style={{ backgroundColor: "#EBEDF4", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <h4 style={{ paddingLeft: '10px', fontSize: '1.5vw' }}>Done </h4>
                {props.issues.map((issue: IssueType) => {
                    if(issue.status=="DONE"){
                        return (
                            <Card
                                id={issue.short_id}
                                date={issue.created_at}
                                issueTitle={issue.title}
                                issueDescription={issue.description}
                                issuePriority = {issue.priority}
                                issueStatus = {issue.status}
                            />
                        )
                    }
                })}
            </div>

        </div>
    )
}

export default List;