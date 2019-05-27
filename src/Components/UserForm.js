import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './UserForm.scss';
class UserForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        skillsInput: '',
        skills: [],
        errors: {},
        disabled: true
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, skills} = this.state;
        const {dispatch} = this.props;
        dispatch(actions.createUser(firstName, lastName, skills));
        this.setState({firstName: '', lastName: '', skills: [], disabled: true});
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleBlur = (event) => {
        let {errors, firstName,lastName} = this.state;
        if (event.target.value.trim() === '') {
            errors = {
                ...errors,
                [event.target.name]: {
                    message: "Please fill this field"
                }
            }
        }
        else {
            delete errors[event.target.name];
        }

        if (Object.keys(errors).length === 0 && firstName.trim() !== '' && lastName.trim() !== '') {
            this.setState({disabled: false, errors})
        }
        else {
            this.setState({disabled: true, errors});
        }
    }

    handleOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.addSkill();
        }
    }

    addSkill = () => {
        let {skillsInput, skills} = this.state;
        skillsInput = skillsInput.trim();
        const skillsLowerCase = skills.map(skill => skill.toLowerCase());
        if (skillsInput !== '' && !skillsLowerCase.includes(skillsInput.toLowerCase())) {
            skills.push(skillsInput);
        }
        skillsInput = '';
        this.setState({skills, skillsInput});
    }

    removeSkill = (skill) => {
        let {skills} = this.state;
        skills = skills.filter(s => skill !== s);
        this.setState({skills});
    }

    render() {
        const {firstName, lastName, skillsInput, skills, errors, disabled} = this.state;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off" id="userForm">
                <span>User input:</span>
                <div>
                    <div className={errors.firstName ? "invalid" : ""}>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}
                        />
                        <span>{errors.firstName && errors.firstName.message}</span>
                    </div>
                    <div className={errors.lastName ? "invalid" : ""}>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}
                        />
                        <span>{errors.lastName && errors.lastName.message}</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Skills"
                            value={skillsInput}
                            name="skillsInput"
                            className="skillsInput"
                            onChange={this.handleInputChange}
                            onKeyPress={this.handleOnEnter}
                        />
                        <button children="Add" className="simpleButton skillsAdd" type="button" onClick={this.addSkill}/>
                        <div>
                            {skills.map((skill, indx) => {
                                return (
                                    <span key={indx} className="skillTag">
                                        {skill}<i className="material-icons" onClick={() => this.removeSkill(skill)}>close</i>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <button children="Add user" className="simpleButton" type="submit" disabled={disabled}/>
            </form>
        );
    }
}

export default connect()(UserForm);