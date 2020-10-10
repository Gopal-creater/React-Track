import axios from 'axios';
import { API_BASE_URL } from '../config/settings';
import { IssueType } from './models';

export async function getIssueList():Promise<IssueType[]> {
    const response =await axios.get(API_BASE_URL + 'v1/issues/')  
    return response.data
}