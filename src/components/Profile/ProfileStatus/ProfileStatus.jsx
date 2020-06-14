import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activateMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    };

    deactivateMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
    };

    render() {
        return <div className={s.status}>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateMode}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onBlur={this.deactivateMode}
                       autoFocus={true}
                       value={this.props.status}/>
            </div>
            }
        </div>
    };
}

export default ProfileStatus;