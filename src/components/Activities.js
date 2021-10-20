import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    SingleActivity,
} from '.';

const Activities = ({ activities, token, fetchActivities }) => {

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/activities/${postId}`,
            token
        });
        await fetchActivities();
    }

    return <div>
        {
            activities.map(post => <SingleActivity key={activity._id} activity={activity} token={token}>

                {
                    activity && <Link to={`/activities/${activity._id}`} className="view-link">View Activity</Link>
                }

                {
                    activity.isAuthor && <Link to={`/activities/edit/${activity._id}`} className="edit-link">Edit</Link>
                }

                {
                    activity.isAuthor && <Link to={`/activities/delete/${activity._id}`} onClick={() => handleDelete(activity._id)} className="delete-link">Delete</Link>
                }
            </SingleActivity>)
        }
    </div>
}


export default Activities;