import React, { Component } from 'react';
import { ThumbUpAlt, Grade, ChatBubble } from '@material-ui/icons';
import Moment from 'moment';
export default function CommentsComponent() {

    const comments = JSON.parse(localStorage.getItem('user'));
    console.log(comments)
    if (!comments) {
        return <p></p>;
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6 pb-3 rightBorder">
                    <h6 className="text-center mt-2"> Employee Comments</h6>
                </div>
                <div className="col-sm-6 pb-3">
                    <h6 className="text-center mt-2"> Manager Comments</h6>
                </div>
            </div>
            
            {comments.map((comment, index) => (
                <div className="row" key={index}>
                    <div className="col-6 rightBorder position-relative">
                        <div className="position-absolute svgSection">
                            <Grade />
                        </div>
                        {comment.edate ? 
                            <div className="commentedDate mb-1 text-right">
                                {Moment(comment.edate).format('Do MMM, YYYY')}
                            </div> : null 
                        }
                    </div>
                    <div className="col-6">
                        {comment.cdate ? 
                            <div className="commentedDate mb-1">
                            {Moment(comment.cdate).format('Do MMM, YYYY')}
                        </div> : null
                        }
                    </div>
                    <div className="col-6 rightBorder position-relative">
                        <div className="position-absolute svgSection">
                            <ThumbUpAlt />
                        </div>
                        {comment.cd ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.cd}
                            </div></div> : null 
                        }
                    </div>
                    <div className="col-6">
                        {comment.ccd ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.ccd}
                            </div></div> : null 
                        }
                    </div>
                    <div className="col-6 rightBorder position-relative">
                        <div className="position-absolute svgSection">
                            <Grade />
                        </div>
                    {comment.ci ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.ci}
                            </div></div> : null 
                        }
                    </div>
                    <div className="col-6">
                    {comment.cci ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.cci}
                            </div></div> : null 
                        }
                    </div>
                    <div className="col-6 rightBorder position-relative pb-5">
                        <div className="position-absolute svgSection">
                            <ChatBubble />
                        </div>
                    {comment.oc ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.oc}
                            </div></div> : null 
                        }
                    </div>
                    <div className="col-6 pb-5">
                    {comment.coc ? 
                            <div className="card mb-2"><div className="card-body">
                                {comment.coc}
                            </div></div> : null 
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}