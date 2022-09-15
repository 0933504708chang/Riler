import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import '../../../node_modules/placeholder-loading/dist/css/placeholder-loading.css'
export class Info extends Component {
  constructor(props) {
    
    super(props)
    
    this.state = {
      title: props.title,
      slug: props.slug,
      siteInfo: [],
      content: '',
      displayContent : 'none',
      displayLoading: 'block'
    }
  }
  loadSiteInfo() {
    axios.get(AppUrl.AllSiteInfo)
      .then((response) => {
        this.setState({
          siteInfo: response.data[0],
          content: response.data[0][this.props.slug],
          displayContent : 'block',
          displayLoading: 'none'
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  shouldComponentUpdate (props) {
    if  (this.state.slug !== props.slug) {
      this.setState({slug: props.slug,
        content: this.state.siteInfo[props.slug]});
    }
    return true; }
  componentDidMount() {
    this.loadSiteInfo();
  }
  render() {

    return (
     
      <div className="content">
       <div className="infopanel">
        <h2>{this.state.title}</h2>
        <div className="content" dangerouslySetInnerHTML = {{__html: this.state.content}} /></div>
        <div class="ph-item" style ={{display:this.state.displayContent}}>
            <div class="ph-col-12">
            <div class="ph-row">
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-9"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-10"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>
       </div>
    )
  }
}

export default Info
