import {Component} from "react"
import {View,Text} from "@tarojs/components"
import "./dialig.less"
export default class Child extends Component{
 
 render(){
    return (
        <View className="mark_dialog">
        {this.props.children}
        </View>
    )
 }
      
   
}