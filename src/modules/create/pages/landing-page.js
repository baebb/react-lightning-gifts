// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// UI Dependencies
import { Spin, Form, Row, Col } from 'antd';

// Util Dependencies
import Emoji from 'utils/components/emoji';

// Local Dependencies
import CreateBox from '../components/create-box';

class LandingPage extends Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="loading..." size="large" style={{ marginTop: '200px' }} />
                </div>
            );
        }

        return (
            <Row type="flex" align="middle" style={{ height: '100%' }}>
                <Col xs={24} sm={{ span: 12 }}>
                    <h1 style={{ marginBottom: 20 }} className="avenir banner-text">
                        Bitcoin gifts, minus the fees
                    </h1>
                    <p style={{ marginBottom: 10, fontSize: 24 }}>
                        Create fee-less Bitcoin gift cards to share with friends, family and your haters.
                    </p>
                    <p>
                        Powered by Lightning network <Emoji label="lighting" symbol="⚡️"/>
                    </p>
                </Col>
                <Col xs={24} sm={{ span: 8, offset: 4 }}>
                    <h2 style={{ marginBottom: 20, textAlign: 'center' }}>
                        Create a bitcoin gift in 30 seconds <Emoji label="point-down" symbol="👇️"/>
                    </h2>
                    <CreateBox />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
        // droneOnline: state.cockpit.droneOnline,
        // cockpitLoading: state.cockpit.cockpitLoading
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        // createProject: createProjectSignal.request
    }, dispatch);

const WrappedLandingPage = Form.create()(LandingPage);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedLandingPage));
