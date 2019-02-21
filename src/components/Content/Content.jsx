import React from 'react'
import classes from './Content.css'

export const Content = props => {
    return (
        <div className={classes.content}>
            <div className={classes.content__ava}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1530302/158711ff-80a3-4ef0-97f9-b4414b4a932c/s1200?webp=false" alt=""/>
            </div>
            <div className={classes["content__info-user"]}>
                <div className={classes["content__info-user__ava"]}>
                    <img src="http://pics.vesti.ru/p/b_400146.jpg" alt=""/>
                </div>
                <div className={classes["content__info-user__info"]}>
                    <h2>Nikolay M.</h2>
                    <div>Date of Birth: 31 july</div>
                    <div>City: Togliatty</div>
                    <div>Education: TGU`21</div>
                    <div>https://mysite-devilz.ru</div>
                </div>
            </div>
            <div className={classes["content__mypost-send"]}>
                <h1>My posts</h1>
                <textarea name="" id="" rows="5" placeholder="your news..."></textarea><br/>
                <button>Send</button>
            </div>
            <div className={classes["content__mypost-all"]}>

            </div>
        </div>
    )
}