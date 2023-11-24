

import React, { useState } from 'react'
import { uploadAvatarToFb } from '../firebase'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function UpAvatar() {
    const [spinner, setSpinner] = useState(false)
	const [img, setImg] = useState("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")

    return (
        <div>
            <h1>test upload image firebase</h1>
			<div className='upAvatarBox'>
				{
					spinner && <div className='spinner'>
						<Spin
							indicator={
							<LoadingOutlined
								style={{
								fontSize: 24,
								}}
								spin
							/>
							}
						/>
					</div>
				}
				<div>
					Avatar: <input onChange={async (e) => {
						if (e.target.files[0]) {
							setSpinner(true)
							await uploadAvatarToFb(e.target.files[0])
							let url = URL.createObjectURL(e.target.files[0]);
							setImg(url)
							setSpinner(false)
						}

					}} type="file" />
					<img src={img} style={{
						width: "50px",
						height: "50px",
						border: "1px solid black",
						objectFit: "cover",
					}} />
				</div>
			</div>
        </div>
    )
}
