import React, { Component } from 'react';
import { ThumbUpAlt, Grade, ChatBubble } from '@material-ui/icons';

export default class ManagerFormDataComponent extends Component {
    userData;
    formQuery = [];
    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(this.userData){
            this.formQuery = this.userData
        }
        if(this.userData){
            this.userData.forEach(element => {
                if(!element.queryClosed){
                    this.uuid = element.id;
                    this.state = {
                        cd: element.cd,
                        ci: element.ci,
                        oc: element.oc,
                        ccd: '',
                        cci: '',
                        coc: ''
                    }
                }
            })
        }
        
        this.onChangeccd = this.onChangeccd.bind(this);
        this.onChangecci = this.onChangecci.bind(this);
        this.onChangecoc = this.onChangecoc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Form Events
    onChangeccd(e) {
        this.setState({ ccd: e.target.value })
    }

    onChangecci(e) {
        this.setState({ cci: e.target.value })
    }

    onChangecoc(e) {
        this.setState({ coc: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        var data = [];
        data = {
            ccd: this.state.ccd,
            cci: this.state.cci,
            coc: this.state.coc,
            cdate: new Date(),
            queryClosed: true
        }
        
            this.formQuery.forEach(element => {
                if(element.id == this.uuid){
                    element.ccd = this.state.ccd;
                    element.cci = this.state.cci;
                    element.coc = this.state.coc;
                    element.cdate = new Date();
                    element.queryClosed = true;
                }
            });
        localStorage.setItem('user', JSON.stringify(this.formQuery));
        this.setState({
            ccd: '',
            cci: '',
            coc: ''
        })
    }

    render() {
        return (
            <div>
                {this.state ? 
                    <form onSubmit={this.onSubmit} className="customForm mt-2">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group readSection">
                                    <label className="mb-1"><ThumbUpAlt /> What should I continue doinig?</label> 
                                    <textarea readOnly type="text" className="form-control" value={this.state.cd} onChange={this.onChangecd}></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-1"><ThumbUpAlt /> What should I continue doinig?</label> 
                                    <textarea type="text" className="form-control" value={this.state.ccd} onChange={this.onChangeccd}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group readSection">
                                    <label className="mb-1"><Grade /> What should I consider Improving?</label>
                                    <textarea readOnly type="text" className="form-control" value={this.state.ci} onChange={this.onChangeci}></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-1"><Grade /> What should I consider Improving?</label>
                                    <textarea type="text" className="form-control" value={this.state.cci} onChange={this.onChangecci}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group readSection">
                                    <label className="mb-1"><ChatBubble /> Other Comments</label>
                                    <textarea readOnly type="text" className="form-control" value={this.state.oc} onChange={this.onChangeoc}></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-1"><ChatBubble /> Other Comments</label>
                                    <textarea type="text" className="form-control" value={this.state.coc} onChange={this.onChangecoc}></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    : <div>No data yet</div>
                }
            </div>
        )
    }
}