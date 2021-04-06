import { Component, useState } from "react"
import Taro from "@tarojs/taro"
import { View, Text, Button, Image } from "@tarojs/components"
import "./test.less"
import { getDate, setDate } from "../../util.js"

export default class Test extends Component {
    handleClick() {
        // Taro.navigateTo({
        //     url:"/pages/index/index?id=1"
        // })
        // Taro.redirectTo({
        //     url:"/pages/index/index"
        // })
        getDate()
    }
    render() {
        return (
            <View className="test">
                <Text >test</Text>
                <Button onClick={this.handleClick}>tst!!</Button>
                <Image src={require("../../img/001.jpg")}></Image>
             
            </View>
        )
    }


}