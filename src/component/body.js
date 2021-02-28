import React, {Component} from 'react';
import Text from './index'
import Image from './image'
import Table from './table'
import Video from './video'
import Email from './email'

class Body extends Component{
    render(){
        var displaycontent = () =>{
            var activetab = this.props.activetab;
            if(activetab==1){
                return <Text/>
            }
            if(activetab==2){
                return <Image/>
            }
            if(activetab==3){
                return <Video/>
            }
            if(activetab==4){
                return <Table/>
            }
            if(activetab==5){
                return <Email/>
            }
            else{
                return <div className="text">page 3</div>
            }
            
        }
        return (displaycontent())
    }
}

export default Body;