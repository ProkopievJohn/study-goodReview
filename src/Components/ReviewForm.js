import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './ReviewForm.scss';

class ReviewForm extends React.Component{
    state = {
        reviewText: '',
        errors: {},
        disabled: true
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {reviewText} = this.state;
        const {dispatch, proceedUserId} = this.props;
        dispatch(actions.createReview(reviewText, proceedUserId))
        this.setState({reviewText: '', disabled: true})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleBlur = (event) => {
        let {errors, reviewText} = this.state;
        const target = event.target;
        if (target.value.trim() === '') {
            errors = {
                [target.name]: {
                    message: `${target.name} is required`
                },
                ...errors
            }
        }
        else {
            delete errors[target.name];
        }

        if (Object.keys(errors).length === 0 && reviewText.trim() !== '') {
            this.setState({disabled: false, errors})
        }
        else {
            this.setState({disabled: true, errors});
        }
    }

    render(){
        const {reviewText, errors, disabled} = this.state;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off" id="reviewForm">
                <span>Review input:</span>
                <div>
                    <div className={errors.reviewText ? "invalid" : ""}>
                        <textarea
                            value={reviewText}
                            onChange={this.handleChange}
                            placeholder="Review text"
                            name="reviewText"
                            rows={4}
                            onBlur={this.handleBlur}
                        />
                        <span>{errors.reviewText && errors.reviewText.message}</span>
                    </div>
                </div>
                <button children="Add review" type="submit" className="simpleButton" disabled={disabled}/>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        proceedUserId: state.ui.proceedUserId
    };
}

export default connect(mapStateToProps)(ReviewForm);