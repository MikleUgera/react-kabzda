import React from 'react';
import Paginator from "../common/Pagonator/Paginator";
import User from "./User";

let Users = ({pagesCount, currentPage, onPageChanged, ...props}) => {

    return <div>
        <Paginator pagesCount={pagesCount} currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}/>
                )
            }
        </div>
    </div>
};

export default Users;