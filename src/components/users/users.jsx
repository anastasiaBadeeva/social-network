
import React from "react";

import Paginator from "../common/paginator/Paginator";
import User from "./user";

let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,followInProgress,follow,unfollow,...props}) => {


    return <div>

        <Paginator currentPage = {currentPage} onPageChanged ={onPageChanged} totalUsersCount = {totalUsersCount} pageSize ={pageSize}/>
       <div> {users.map((u) => <User users={u} followInProgress={followInProgress} key={u.id} follow={follow} unfollow={unfollow}/>
       )}</div>s
    </div>

}
export default Users;