import { Component } from "react"
import { View, Text, Input, Textarea, Button } from "@tarojs/components"
import Taro from "@tarojs/taro"
import "./AddQuestion.less"
import Child from "./child"
export default class AddQuestion extends Component {
    state = {
        title: "",
        des: "",
       
    }
    handlerCancel = () => {

        console.log(this.props)
        this.props.closeQuestion()
    }
    handlerchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handlerchangedes = (e) => {
        this.setState({
            des: e.target.value
        })
    }
    handlerOk = () => {
        if (this.state.title && this.state.des) {
            this.props.receiveQuestion(this.state)
        } else {
            Taro.showToast({
                title: "请输入标题或者描述",
                icon: false
            })
        }
    }

    render() {
        return (
            <Child>
                <View className="add-question">
                    <View className="quersion-body">
                        <Input onInput={this.handlerchangeTitle} placeholder="请输入内容" className="quest_title"></Input>
                        <Textarea onInput={this.handlerchangedes} placeholder="请输入描述" className="quest_text"></Textarea>
                        <View className="btn-group">
                            <Button className="btn_quesetions ok" onClick={this.handlerOk}>确定</Button>
                            <Button className="btn_quesetions cancel" onClick={this.handlerCancel}>取消</Button>
                        </View>
                    </View>
                </View>
            </Child>
        )
    }
}