import React, { useEffect, useState } from 'react'
import { getIssueList } from '../../services/api';
import { IssueType } from '../../services/models';
import IssueView from './Issues.view';

const Issues: React.FC = (props) =>{
    const [IssuesData, setIssueData] = useState<IssueType[]>([])

    useEffect(() => {
        async function getdata (){
            const response:IssueType[] =await getIssueList()
            if (response) {
                setIssueData(response)
              }
        }
        getdata()
    }, [])

    return <IssueView IssuesData={IssuesData}/>
}

export default Issues;