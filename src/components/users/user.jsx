import style from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/paginator/Paginator";

let User = ({users,followInProgress,follow,unfollow}) => {


    return (
        <div >
                <div>
                    <NavLink to={"/profile/" + users.id}>  <img src={users.photos.small != null ? users.photos.small : userPhoto} alt="" className={style.userPhoto}/></NavLink>
                    <div>{users.followed ? <button disabled={followInProgress.some(id => id === users.id)}  onClick={() => {unfollow(users.id)}}>
                            Unfollow</button>
                        : <button disabled={followInProgress.some(id => id === users.id)} onClick={() => {follow(users.id)}}>
                            Follow</button>
                    }
                    </div>
                </div>
                <div>
                    <div> {users.name}</div>
                    <div> {users.status}</div>
                </div>
                <div>
                    <span> {"users.location.country"}</span>
                    <span> {"users.location.city"}</span>
                </div>
            </div>)}


export default User;