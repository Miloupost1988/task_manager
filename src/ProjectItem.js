import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class ProjectItem extends React.Component {
  constructor (){
    super();
  }

  componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt
    })
  }

  render() {

    return (
      <div>
        <Link to={`/project/${this.state.id}`}>{this.state.title}</Link>
      </div>
    );
  }
}

export default ProjectItem;