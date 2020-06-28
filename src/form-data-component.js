import React, { Component } from 'react';
import { ThumbUpAlt, Grade, ChatBubble } from '@material-ui/icons';

export default class FormDataComponent extends Component {

    formQuery = [];
    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(this.userData){
            this.formQuery = this.userData
        }
        this.state = {
            cd: '',
            ci: '',
            oc: ''
        }
        this.onChangecd = this.onChangecd.bind(this);
        this.onChangeci = this.onChangeci.bind(this);
        this.onChangeoc = this.onChangeoc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Form Events
    onChangecd(e) {
        this.setState({ cd: e.target.value })
    }

    onChangeci(e) {
        this.setState({ ci: e.target.value })
    }

    onChangeoc(e) {
        this.setState({ oc: e.target.value })
    }

    // React Life Cycle
    componentDidMount() {
        this.setState({
            cd: '',
            ci: '',
            oc: ''
        })
    }

    onSubmit(e) {
        e.preventDefault();
        var data = [];
        let s = (new Date()).getTime().toString(16) + Math.random().toString(16).substring(2) + "0".repeat(16);
        let uuid = s.substr(0,8) + s.substr(8,4) + '40008' + s.substr(12,3) + s.substr(15,12);
        data = {
            id: uuid,
            edate: new Date(),
            cd: this.state.cd,
            ci: this.state.ci,
            oc: this.state.oc,
            queryClosed: false,
            ccd: '',
            cci: '',
            coc: '',
            cdate: '',
        }
        this.formQuery.push(data);
        localStorage.setItem('user', JSON.stringify(this.formQuery));
        this.setState({
            cd: '',
            ci: '',
            oc: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="customForm mt-2">
                    <div className="form-group">
                        <label className="mb-1"><ThumbUpAlt /> What should I continue doinig?</label> 
                        <textarea type="text" className="form-control" value={this.state.cd} onChange={this.onChangecd}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="mb-1"><Grade /> What should I consider Improving?</label>
                        <textarea type="text" className="form-control" value={this.state.ci} onChange={this.onChangeci}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="mb-1"><ChatBubble /> Other Comments</label>
                        <textarea type="text" className="form-control" value={this.state.oc} onChange={this.onChangeoc}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}