import React from 'react'
import './Profile.scss'

export const Profile = props => {
    return (
        <div className="content">
            <div className="content__ava">
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/1530302/158711ff-80a3-4ef0-97f9-b4414b4a932c/s1200?webp=false"
                    alt=""/>
            </div>
            <div className="content__info-user">
                <div className="content__info-user__ava">
                    <img src="http://pics.vesti.ru/p/b_400146.jpg" alt=""/>
                </div>
                <div className="content__info-user__info">
                    <h2>Nikolay M.</h2>
                    <div>Date of Birth: 31 july</div>
                    <div>City: Togliatty</div>
                    <div>Education: TGU`21</div>
                    <div>https://mysite-devilz.ru</div>
                </div>
            </div>
            <div className="content__info-image">
                <img src="http://via.placeholder.com/200x100" alt="" />
                <img src="http://via.placeholder.com/200x100" alt=""/>
                <img src="http://via.placeholder.com/200x100" alt=""/>
                <img src="http://via.placeholder.com/200x100" alt=""/>
            </div>
            <div className="content__mypost-send">
                <textarea name="" id="" rows="5" placeholder="your news..."></textarea><br/>
                <button>Send</button>
            </div>
            <div className="content__mypost-title">
                <h1>My posts</h1>
            </div>
        </div>
    )
}