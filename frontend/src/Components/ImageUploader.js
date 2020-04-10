import React, { Component } from "react";

const token = localStorage.getItem('Token');
const userData = localStorage.getItem("User");
const data = JSON.parse(userData);

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            user: null,
            refreshdata: {
                id: null,
                username: "",
                first_name: "",
                last_name: "",
                last_login: null,
                date_joined: null,
                fetched: false,
                image: null

            }
        };
    }

    _handleSubmit(e) {
        let fd = new FormData();
        fd.append('user', this.state.user);
        fd.append('image', this.state.image);
        e.preventDefault();

        fetch('http://localhost:8000/media/upload/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
            },
            body: fd
        }).then(res => {
            // fetch('http://localhost:8000/auth/me/', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Token ${token}`,
            //     }
            // }).then(res => res.json()).then(data => {
            //     this.setState({refreshdata: data.user});
            //     this.setState({refreshdata:{image: data.image.image}});
            //     let user = JSON.stringify(this.state.refreshdata);
            //     localStorage.setItem("User", user);
            // })
          
            window.location.reload(false)
            return res.json()
        });

    }

    _handleImageChange(e) {
        e.preventDefault();

        let file = e.target.files[0];

        this.setState({
            image: file,
            user: data.id
        });
        console.log(this.state);

    }

    render() {
        return (
            <div className="previewComponent cA">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput "
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                    <button className="submitButton"
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                </form>
            </div>
        )
    }
}
